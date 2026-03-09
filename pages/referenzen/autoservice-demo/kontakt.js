import AutoserviceDemoLayout from '../../../components/references/autoservice-demo/AutoserviceDemoLayout';
import { workshopDetails } from '../../../components/references/autoservice-demo/demoData';

const contactCards = [
  { label: 'Adresse', value: workshopDetails.address },
  { label: 'Telefon', value: workshopDetails.phone },
  { label: 'E-Mail', value: workshopDetails.email },
  { label: 'Öffnungszeiten', value: workshopDetails.hours.join(' · ') }
];

export default function AutoserviceContactPage() {
  return (
    <AutoserviceDemoLayout
      title="Kontakt & Termin | Auto Service Demo"
      description="Kontakt- und Terminseite einer Kfz-Werkstatt mit Werkstattdaten, Karte und Anfrageformular."
    >
      <section className="section-container py-12">
        <h1 className="text-4xl font-bold text-[#111926]">Kontakt & Termin</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#445269]">
          Termine können bequem als Anfrage übermittelt werden. Wir melden uns kurzfristig mit einem passenden
          Zeitfenster und einer ersten Einschätzung zum Umfang.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {contactCards.map((card) => (
            <article key={card.label} className="rounded-2xl border border-[#cad2de] bg-white p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-[#5a687d]">{card.label}</h2>
              <p className="mt-2 text-base text-[#1e2a3c]">{card.value}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-[#cbd3df] bg-white">
            <iframe
              title="Kartenansicht Elbwerk Kfz-Service in Hamburg"
              src="https://www.google.com/maps?q=Ausschl%C3%A4ger+Weg+62,+Hamburg&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <form className="rounded-2xl border border-[#cad2de] bg-white p-6">
            <h2 className="text-2xl font-semibold text-[#111926]">Termin anfragen</h2>
            <div className="mt-4 grid gap-4">
              <label className="text-sm font-medium text-[#2f3b4f]">
                Name
                <input type="text" className="mt-1 w-full rounded-md border border-[#ccd4df] px-3 py-2" placeholder="Vor- und Nachname" />
              </label>
              <label className="text-sm font-medium text-[#2f3b4f]">
                Telefon oder E-Mail
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border border-[#ccd4df] px-3 py-2"
                  placeholder="z. B. 040 123456 oder name@email.de"
                />
              </label>
              <label className="text-sm font-medium text-[#2f3b4f]">
                Fahrzeug / Modell
                <input type="text" className="mt-1 w-full rounded-md border border-[#ccd4df] px-3 py-2" placeholder="z. B. VW Golf VII" />
              </label>
              <label className="text-sm font-medium text-[#2f3b4f]">
                Gewünschte Leistung
                <select className="mt-1 w-full rounded-md border border-[#ccd4df] px-3 py-2">
                  <option>Bitte wählen</option>
                  <option>Inspektion</option>
                  <option>Ölwechsel</option>
                  <option>Bremsenservice</option>
                  <option>Reifenservice</option>
                  <option>Diagnose</option>
                  <option>Allgemeine Reparatur</option>
                </select>
              </label>
              <label className="text-sm font-medium text-[#2f3b4f]">
                Nachricht
                <textarea className="mt-1 h-28 w-full rounded-md border border-[#ccd4df] px-3 py-2" placeholder="Kurze Beschreibung Ihres Anliegens" />
              </label>
            </div>
            <button type="button" className="mt-5 rounded-md bg-[#b8453c] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#9f392f]">
              Anfrage senden
            </button>
            <p className="mt-4 text-sm text-[#445269]">
              Bei dringenden Anliegen empfehlen wir die telefonische Kontaktaufnahme.
            </p>
          </form>
        </div>
      </section>
    </AutoserviceDemoLayout>
  );
}
