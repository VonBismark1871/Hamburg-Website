import Image from 'next/image';
import Link from 'next/link';

export function ComplaintCards({ items }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="rounded-[20px] bg-[var(--bg-card)] shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)] p-5">
          <h3 className="text-xl font-semibold text-[#264543]">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#486664]">{item.description}</p>
          {item.href ? (
            <Link href={item.href} className="mt-4 inline-flex text-sm font-semibold text-[#2f736b] hover:underline">
              Mehr erfahren →
            </Link>
          ) : null}
        </article>
      ))}
    </div>
  );
}

export function TreatmentCard({ service, showCta = false }) {
  return (
    <article className="rounded-[20px] bg-[#fbfdfc] shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)] p-5">
      <h3 className="text-lg font-semibold text-[#244240]">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#4f6d6b]">{service.description}</p>
      {showCta ? (
        <Link href="/referenzen/physio-demo/kontakt" className="mt-4 inline-flex text-sm font-semibold text-[#2f736b] hover:underline">
          Termin anfragen →
        </Link>
      ) : null}
    </article>
  );
}

export function TherapistCard({ person }) {
  return (
    <article className="overflow-hidden rounded-[20px] bg-[var(--bg-card)] shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)]">
      <Image src={person.image} alt={`Portrait von ${person.name}, ${person.role}`} width={700} height={700} className="h-56 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#264543]">{person.name}</h3>
        <p className="text-sm text-[#3e5f5c]">{person.role}</p>
        <p className="mt-2 text-sm text-[#597775]">Schwerpunkt: {person.focus}</p>
      </div>
    </article>
  );
}

export function PracticeGallery({ images }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {images.map((image) => (
        <figure key={image.src} className="overflow-hidden rounded-[20px]">
          <Image src={image.src} alt={image.alt} width={1200} height={900} className="h-56 w-full object-cover" />
        </figure>
      ))}
    </div>
  );
}

export function PhysioTestimonials({ testimonials }) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <blockquote key={testimonial.name} className="rounded-[20px] bg-[var(--bg-card)] shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)] p-5">
          <p className="text-sm leading-relaxed text-[#4a6967]">„{testimonial.quote}“</p>
          <footer className="mt-4 text-sm font-semibold text-[#244240]">{testimonial.name}</footer>
        </blockquote>
      ))}
    </div>
  );
}

export function AppointmentFormDemo() {
  return (
    <form className="grid gap-4 rounded-[20px] bg-[var(--bg-card)] shadow-[0_16px_40px_-30px_rgba(15,23,42,0.35)] p-6">
      <label className="text-sm font-medium text-[#2b4b48]">
        Name
        <input type="text" className="mt-1 w-full rounded-[20px] border border-[#c7d9d4] px-3 py-2 text-sm outline-none focus:border-[#7aa8a1]" />
      </label>
      <label className="text-sm font-medium text-[#2b4b48]">
        Telefon oder E-Mail
        <input type="text" className="mt-1 w-full rounded-[20px] border border-[#c7d9d4] px-3 py-2 text-sm outline-none focus:border-[#7aa8a1]" />
      </label>
      <label className="text-sm font-medium text-[#2b4b48]">
        Beschwerde / Anliegen
        <input type="text" className="mt-1 w-full rounded-[20px] border border-[#c7d9d4] px-3 py-2 text-sm outline-none focus:border-[#7aa8a1]" />
      </label>
      <label className="text-sm font-medium text-[#2b4b48]">
        Gewünschter Termin
        <input type="text" placeholder="z. B. vormittags oder nach 17 Uhr" className="mt-1 w-full rounded-[20px] border border-[#c7d9d4] px-3 py-2 text-sm outline-none focus:border-[#7aa8a1]" />
      </label>
      <label className="text-sm font-medium text-[#2b4b48]">
        Nachricht
        <textarea rows={4} className="mt-1 w-full rounded-[20px] border border-[#c7d9d4] px-3 py-2 text-sm outline-none focus:border-[#7aa8a1]" />
      </label>
      <button type="button" className="rounded-full bg-[#2f736b] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[#285e57]">
        Anfrage senden
      </button>
    </form>
  );
}
