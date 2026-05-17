import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();

function read(path) {
  return readFileSync(join(root, path), 'utf8');
}

function walk(dir) {
  return readdirSync(join(root, dir)).flatMap((entry) => {
    const path = join(dir, entry);
    const absolute = join(root, path);
    if (statSync(absolute).isDirectory()) return walk(path);
    return path;
  });
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const pricingPopover = read('components/pricing/PackagePreviewPopover.jsx');
assert(!pricingPopover.includes('className={`fixed'), 'PackagePreviewPopover must not render a fixed floating popover.');
assert(!pricingPopover.includes("window.addEventListener('scroll'"), 'PackagePreviewPopover should not track viewport scroll for placement.');
assert(pricingPopover.includes('aria-controls'), 'Inline pricing preview should expose aria-controls.');

const referencesData = read('data/references.js');
for (const key of ['siteType', 'goal', 'complexity', 'styleLabel']) {
  assert(referencesData.includes(key), `data/references.js should include overview metadata: ${key}.`);
}

const demoFiles = walk('pages/referenzen')
  .filter((file) => file.endsWith('.js'))
  .filter((file) => !file.includes('autoservice-sales-case') && !file.includes('redesign-beispiel-1'));

const forbiddenVisibleTerms = [
  'Demo-Projekt',
  'Referenzprojekt',
  'Hamburg Websites',
  'Website Demo',
  'Website-Demo',
  'Website erstellen',
  'ähnliche Website',
  'Ã¤hnliche Website',
  'Eigene Demo',
  'Preise ansehen'
];

for (const file of demoFiles) {
  const source = read(file);
  for (const term of forbiddenVisibleTerms) {
    assert(!source.includes(term), `${relative(root, join(root, file))} still contains visible studio/meta term: ${term}`);
  }
}

const demoShells = [
  'components/references/autoservice-demo/AutoserviceDemoLayout.jsx',
  'components/references/physio-demo/PhysioDemoLayout.jsx',
  'components/references/ReferenceBackButton.jsx',
  'components/ReferenceStickyBackButton.jsx'
];

for (const file of demoShells) {
  const source = read(file);
  assert(!source.includes('Hamburg Websites'), `${file} should not show Hamburg Websites inside demo pages.`);
}

console.log('Reference redesign checks passed.');
