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

const referencesData = read('data/references.js');
for (const key of ['brandName', 'previewStyle', 'visualConcept', 'assetSet', 'primaryAction', 'trustSignal', 'industryGoal']) {
  assert(referencesData.includes(key), `data/references.js should include redesign metadata: ${key}.`);
}

const overviewCard = read('components/references/ReferenceCard.jsx');
for (const key of ['bistro', 'salon', 'dental', 'physio', 'garage', 'estate']) {
  assert(overviewCard.includes(key), `ReferenceCard should include preview style: ${key}.`);
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
  'Eigene Demo',
  'So könnte'
];

for (const file of demoFiles) {
  const source = read(file);
  for (const term of forbiddenVisibleTerms) {
    assert(!source.includes(term), `${relative(root, join(root, file))} still contains visible studio/meta term: ${term}`);
  }
}

const propertyData = read('components/references/immobilien-demo/properties.js');
const exposeData = read('components/references/immobilien-demo/exposeData.js');
for (const id of ['penthouse-hamburg', 'altbau-eppendorf', 'stadthaus-blankenese', 'neubau-hafencity', 'familienhaus-volksdorf', 'anlage-altona']) {
  assert(propertyData.includes(`propertyImage('${id}')`), `${id} card should use the shared property image helper.`);
  assert(exposeData.includes(`galleryFor('${id}'`), `${id} expose should use one coherent gallery source.`);
}

console.log('Reference redesign checks passed.');
