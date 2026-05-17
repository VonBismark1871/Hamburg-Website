export default function FilterChips({ filters }) {
  return (
    <div className="flex flex-wrap gap-3" aria-label="Objektfilter">
      {filters.map((filter, index) => (
        <span
          key={filter}
          className={`inline-flex rounded-full border px-4 py-2 text-sm ${
            index === 0
              ? 'border-stone-900 bg-stone-900 text-stone-100'
              : 'border-stone-300 bg-stone-100 text-stone-700'
          }`}
        >
          {filter}
        </span>
      ))}
    </div>
  );
}
