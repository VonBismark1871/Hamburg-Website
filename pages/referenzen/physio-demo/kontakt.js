import PhysioDemoLayout from '../../../components/references/physio-demo/PhysioDemoLayout';
import { AppointmentFormDemo } from '../../../components/references/physio-demo/PhysioSections';
import { practiceInfo } from '../../../components/references/physio-demo/physioData';

export default function PhysioDemoKontaktPage() {
  return (
    <PhysioDemoLayout
      title="Kontakt & Termin – Praxis Elbbalance Physiotherapie"
      description="Kontakt- und Terminseite der Praxis Elbbalance Physiotherapie in Hamburg."
      path="/referenzen/physio-demo/kontakt"
    >
      <section className="section-container py-12">
        <h1 className="text-4xl font-semibold text-[#244240]">Kontakt & Termin</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#4e6d6a]">
          Sie erreichen uns telefonisch, per E-Mail oder über das Anfrageformular. Wir melden uns zeitnah mit passenden Terminvorschlägen.
        </p>
      </section>

      <section className="section-container pb-12">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-3xl border border-[#cfdfda] bg-white p-6">
            <h2 className="text-2xl font-semibold text-[#244240]">Praxisinformationen</h2>
            <div className="mt-4 space-y-4 text-sm text-[#4d6c69]">
              <p>
                <span className="font-semibold text-[#2c4f4b]">Adresse:</span>
                <br />
                {practiceInfo.address}
              </p>
              <p>
                <span className="font-semibold text-[#2c4f4b]">Telefon:</span>
                <br />
                {practiceInfo.phone}
              </p>
              <p>
                <span className="font-semibold text-[#2c4f4b]">E-Mail:</span>
                <br />
                {practiceInfo.email}
              </p>
              <div>
                <p className="font-semibold text-[#2c4f4b]">Öffnungszeiten:</p>
                <ul className="mt-2 space-y-1">
                  {practiceInfo.hours.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-6 rounded-xl bg-[#edf5f2] p-3 text-sm text-[#3c5f5b]">
              Bei akuten Beschwerden empfehlen wir die telefonische Kontaktaufnahme.
            </p>
          </aside>

          <div className="grid gap-6">
            <div className="overflow-hidden rounded-3xl border border-[#d0dfda]">
              <iframe
                title="Karte zur Physiotherapiepraxis in Hamburg"
                src="https://www.google.com/maps?q=Osterstra%C3%9Fe+142,+Hamburg&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <AppointmentFormDemo />
          </div>
        </div>
      </section>
    </PhysioDemoLayout>
  );
}
