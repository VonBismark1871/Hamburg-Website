# PSI Baseline Workflow

Этот документ фиксирует repeatable workflow для baseline и регрессионной проверки перед релизом.

## Что делает `scripts/psi_snapshot.py`

Скрипт собирает PSI snapshots для заданных URL и стратегий (`mobile`, `desktop`) и сохраняет их в run-папку.

- Без `PSI_API_KEY` скрипт работает в **dry-run** режиме (без API-запросов, exit code `0`).
- С `PSI_API_KEY` выполняется **real-run** и сохраняются raw JSON + summary.
- Опционально можно сравнить текущий run с предыдущим baseline (`--compare-to`).

## Быстрый старт

### 1) Dry-run (без ключа, безопасно)

```bash
python3 scripts/psi_snapshot.py
```

Что вы увидите:
- planned requests;
- куда пойдут файлы (`run_dir/raw`, `summary.json`);
- (опционально) куда сохранится `comparison.json`.

### 2) Real-run (с ключом)

```bash
PSI_API_KEY=your_local_key python3 scripts/psi_snapshot.py
```

> Не коммитьте API ключ. Используйте только локальные env vars или CI secrets.

## Полезные параметры

- `--url <url>` (повторяемый): переопределить список URL.
- `--strategy mobile|desktop` (повторяемый): выбрать стратегии.
- `--out-dir tmp/psi-reports`: корневая папка для run-артефактов.
- `--run-id <name>`: человекочитаемый id baseline, например `baseline-2026-04-02`.
- `--compare-to <path>`: путь к предыдущему run dir **или** к `summary.json`.

Пример baseline run с явным именем:

```bash
PSI_API_KEY=your_local_key \
python3 scripts/psi_snapshot.py \
  --run-id baseline-2026-04-02
```

Пример release-check с сравнением к baseline:

```bash
PSI_API_KEY=your_local_key \
python3 scripts/psi_snapshot.py \
  --run-id release-2026-04-15 \
  --compare-to tmp/psi-reports/baseline-2026-04-02
```

## Структура output

Для каждого запуска создаётся папка:

```text
tmp/psi-reports/<run-id>/
  raw/
    home-mobile.json
    home-desktop.json
    preise-mobile.json
    preise-desktop.json
    kontakt-mobile.json
    kontakt-desktop.json
  summary.json
  comparison.json   # только если задан --compare-to
```

## Какие метрики считать главными

Для release-check используйте в первую очередь:

1. **Lighthouse performance score** (`0..100`) — быстрый агрегированный индикатор.
2. **Lab LCP (ms)** — скорость отображения основного контента.
3. **Lab CLS** — визуальная стабильность.
4. **Lab INP (ms)** — отзывчивость интерфейса.

Пороговые ориентиры (CWV):
- LCP `<= 2500 ms`
- CLS `<= 0.10`
- INP `<= 200 ms`

## Как замечать регрессии

1. Зафиксируйте baseline run (`baseline-YYYY-MM-DD`).
2. Перед релизом сделайте новый run с `--compare-to <baseline>`.
3. Откройте `comparison.json` и смотрите дельты:
   - `lighthouse_performance_score`: отрицательная дельта = ухудшение;
   - `lab_lcp_ms`, `lab_inp_ms`, `lab_cls`: положительная дельта = ухудшение.
4. Считайте регрессией кандидата в блокер, если:
   - ухудшение повторяется на нескольких URL, или
   - метрика выходит за CWV порог.

## Рекомендованный release-check workflow

1. Dry-run для проверки конфигурации команды.
2. Real-run и сохранение нового run-id.
3. Сравнение с последним baseline (`comparison.json`).
4. Короткий вывод в release notes: URL, стратегия, дельты, решение (OK/needs fix).

Такой процесс подходит как основа release gate: запуск воспроизводим, storage прозрачен, сравнение стандартизовано.
