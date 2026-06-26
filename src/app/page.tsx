import Image from "next/image";
import Script from "next/script";
import {
  brand,
  procedures,
  differentials,
  teachers,
  locations,
  waLink,
} from "@/lib/data";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "ANBRO Clínica",
    description:
      "Harmonização orofacial conduzida por professores universitários em Fortaleza/CE.",
    medicalSpecialty: "Cosmetic Dentistry",
    areaServed: { "@type": "City", name: "Fortaleza" },
    address: locations.map((l) => ({
      "@type": "PostalAddress",
      addressLocality: "Fortaleza",
      addressRegion: "CE",
      streetAddress: l.address,
    })),
    telephone: "+5585981850390",
  };

  return (
    <>
      <Script
        id="ld-clinic"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Header />
      <main className="flex-1">
        <Hero />
        <Procedures />
        <Differentials />
        <Team />
        <Locations />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

/* ──────────── Header ──────────── */
function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-foreground/5">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image src="/logo-anbro.png" alt="ANBRO — Harmonização Orofacial" width={1500} height={540} priority className="h-12 lg:h-14 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/70">
          <a href="#procedimentos" className="hover:text-brand-blue transition-colors">Procedimentos</a>
          <a href="#equipe" className="hover:text-brand-blue transition-colors">Quem atende</a>
          <a href="#locais" className="hover:text-brand-blue transition-colors">Locais</a>
          <a href={brand.cursosUrl} className="hover:text-brand-blue transition-colors">Cursos</a>
        </nav>
        <a
          href={waLink("Olá! Gostaria de agendar uma avaliação na ANBRO.")}
          target="_blank"
          rel="noreferrer"
          className="text-sm bg-brand-blue text-white px-5 py-2 rounded-full hover:bg-brand-dark transition-colors"
        >
          Agendar avaliação
        </a>
      </div>
    </header>
  );
}

/* ──────────── Hero ──────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-center">
      <Image
        src="/hero/clinica-procedure.jpg"
        alt="Atendimento da equipe Anbro durante procedimento"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center -z-20"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-dark/92 via-brand-dark/70 to-brand-dark/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-dark/60 via-transparent to-brand-dark/30" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32 w-full">
        <div className="max-w-3xl text-white">
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-brand-lime fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            Harmonização Orofacial · Fortaleza
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] fade-up delay-100">
            Sua face cuidada por quem <em className="text-brand-lime">forma especialistas</em>.
          </h1>
          <p className="mt-7 text-lg text-white/85 leading-relaxed max-w-2xl fade-up delay-200">
            Botox, preenchimento, bioestimuladores e tecnologia em harmonização orofacial.
            Resultado natural, planejamento individual e a confiança de uma equipe universitária —
            os mesmos professores que formam os especialistas do Ceará.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 fade-up delay-300">
            <a
              href={waLink("Olá! Gostaria de agendar uma avaliação na ANBRO Clínica.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-brand-lime text-brand-dark px-7 py-3.5 rounded-full font-medium hover:bg-white transition-colors shadow-lg shadow-black/30"
            >
              Agendar avaliação no WhatsApp
              <span aria-hidden>→</span>
            </a>
            <a
              href="#procedimentos"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-full font-medium hover:border-white hover:bg-white/5 transition-colors backdrop-blur-sm"
            >
              Ver procedimentos
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl fade-up delay-300">
            <Stat value="+13" label="anos de prática clínica" />
            <Stat value="3" label="professores universitários" />
            <Stat value="2" label="locais de atendimento" />
            <Stat value="100%" label="planejamento individual" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl text-brand-lime font-display">{value}</p>
      <p className="text-xs text-white/70 mt-1 leading-snug">{label}</p>
    </div>
  );
}

/* ──────────── Procedures ──────────── */
function Procedures() {
  return (
    <Section
      eyebrow="Procedimentos"
      title="Tratamentos que oferecemos"
      intro="Toda avaliação começa com análise facial e planejamento individualizado. Você escolhe o objetivo, a gente desenha o caminho."
      id="procedimentos"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {procedures.map((p) => (
          <article
            key={p.slug}
            className="bg-white border border-foreground/8 rounded-2xl p-6 lg:p-7 hover:border-brand-blue/40 transition-colors flex flex-col"
          >
            <h3 className="text-xl text-foreground">{p.name}</h3>
            <p className="mt-3 text-sm text-muted leading-relaxed flex-1">{p.description}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {p.indications.map((i) => (
                <li
                  key={i}
                  className="text-[11px] tracking-wide bg-brand-blue-soft text-brand-blue px-2.5 py-1 rounded-full"
                >
                  {i}
                </li>
              ))}
            </ul>
            <a
              href={waLink(`Olá! Tenho interesse em ${p.name}. Gostaria de mais informações.`)}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm text-brand-blue hover:text-brand-dark font-medium"
            >
              Quero saber mais
              <span aria-hidden>→</span>
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ──────────── Differentials ──────────── */
function Differentials() {
  return (
    <section className="bg-brand-blue text-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <p className="text-xs tracking-[0.22em] uppercase text-brand-lime">Por que ANBRO</p>
          <h2 className="mt-3 text-3xl lg:text-5xl text-white leading-tight">
            A diferença está em <em className="text-brand-lime">quem</em> aplica e em <em className="text-brand-lime">como</em> planejamos.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((d, i) => (
            <div key={d.title} className="border-t border-white/15 pt-6">
              <p className="text-xs text-brand-lime tracking-wider">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl text-white leading-snug">{d.title}</h3>
              <p className="mt-3 text-sm text-white/75 leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────── Team ──────────── */
function Team() {
  return (
    <Section
      eyebrow="Quem te atende"
      title="Três professores universitários — a mesma equipe que forma os especialistas do Ceará."
      intro="Cada paciente é avaliado pelo profissional com o perfil técnico mais adequado ao seu objetivo."
      variant="muted"
      id="equipe"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((t) => (
          <article key={t.slug} className="bg-white border border-foreground/8 rounded-2xl overflow-hidden">
            <div className="aspect-[4/5] bg-brand-blue-soft relative">
              <Image
                src={t.photo}
                alt={t.name}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover object-[center_top]"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl text-foreground">{t.name}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted leading-relaxed">
                {t.titles.map((title) => (
                  <li key={title} className="flex gap-2">
                    <span className="text-brand-blue mt-1.5 w-1 h-1 rounded-full bg-brand-blue flex-shrink-0" />
                    <span>{title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ──────────── Locations ──────────── */
function Locations() {
  return (
    <Section
      eyebrow="Onde você é atendida"
      title="Dois endereços em Fortaleza — sempre com a mesma equipe."
      intro="O agendamento é direcionado pelo WhatsApp conforme sua disponibilidade e o procedimento escolhido."
      id="locais"
    >
      <div className="grid lg:grid-cols-2 gap-6">
        {locations.map((l) => (
          <article key={l.slug} className="bg-white border border-foreground/8 rounded-3xl overflow-hidden">
            <div className="relative aspect-[16/10]">
              <Image
                src={l.photo}
                alt={l.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-7 lg:p-8">
              <h3 className="text-2xl text-foreground leading-tight">{l.name}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{l.address}</p>
              {l.tagline && (
                <p className="mt-4 text-base text-brand-blue font-semibold leading-snug">{l.tagline}</p>
              )}
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{l.note}</p>
              <a
                href={waLink(`Olá! Quero agendar uma avaliação na unidade ${l.name}.`)}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-brand-blue hover:text-brand-dark font-medium text-sm"
              >
                Agendar nesta unidade
                <span aria-hidden>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ──────────── Section wrapper ──────────── */
function Section({
  eyebrow,
  title,
  intro,
  children,
  variant = "default",
  id,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  variant?: "default" | "muted";
  id?: string;
}) {
  const bg = variant === "muted" ? "bg-brand-cream" : "bg-white";
  return (
    <section id={id} className={`${bg} py-24 lg:py-32`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-xs tracking-[0.22em] uppercase text-brand-blue">{eyebrow}</p>
          <h2 className="mt-3 text-3xl lg:text-5xl leading-tight">{title}</h2>
          {intro && <p className="mt-5 text-muted text-lg leading-relaxed">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

/* ──────────── Final CTA ──────────── */
function FinalCTA() {
  return (
    <section className="bg-brand-dark text-white py-24 lg:py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-5xl text-white leading-tight">
          Avaliação personalizada, conduzida por <em className="text-brand-lime">quem ensina</em>.
        </h2>
        <p className="mt-5 text-white/75 text-lg max-w-2xl mx-auto">
          Sem pacote pronto. Sem promessa milagrosa. Conversamos, avaliamos sua face e planejamos junto.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={waLink("Olá! Quero agendar minha avaliação na ANBRO Clínica.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-brand-lime text-brand-dark px-7 py-3.5 rounded-full font-medium hover:bg-white transition-colors"
          >
            Falar no WhatsApp
            <span aria-hidden>→</span>
          </a>
          <a
            href={brand.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/25 text-white px-7 py-3.5 rounded-full hover:border-white transition-colors"
          >
            Ver no Instagram
          </a>
        </div>
        <p className="mt-8 text-sm text-white/50">
          {brand.whatsappDisplay} · Fortaleza/CE
        </p>
      </div>
    </section>
  );
}

/* ──────────── Footer ──────────── */
function Footer() {
  return (
    <footer className="bg-white border-t border-foreground/5 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between text-sm text-muted">
        <div>
          <p className="font-display text-brand-blue text-lg font-semibold">ANBRO Clínica</p>
          <p className="mt-1">© {new Date().getFullYear()} ANBRO Harmonização Orofacial</p>
        </div>
        <div className="flex gap-6">
          <a href={brand.instagram} target="_blank" rel="noreferrer" className="hover:text-brand-blue">Instagram</a>
          <a href={waLink("Olá!")} target="_blank" rel="noreferrer" className="hover:text-brand-blue">WhatsApp</a>
          <a href={brand.cursosUrl} className="hover:text-brand-blue">Cursos</a>
        </div>
      </div>
    </footer>
  );
}
