import ReferenceCard from './ReferenceCard';

export default function ReferenceGrid({ projects }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ReferenceCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
