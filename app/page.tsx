'use client';

// app/page.tsx — Next.js (App Router)
// Portfolio for Miguel Dalvi with Projects grid, Framer Motion animations, WhatsApp button, and GIF in hero.

import { motion } from 'framer-motion';

export default function PortfolioPage() {
  // Update with your real number: countrycode + DDD + number, no plus sign, no spaces
  const whatsappNumber = '5541997913561';

  const primarySkills = [
    'Python',
    'n8n',
    'JavaScript',
    'Node.js',
    'PHP',
    'Laravel',
    'React',
    'Next.js',
    'Inglês Avançado'
  ];

  const secondarySkills = [
    'Make',
    'CrewAI',
    'Manychat',
    'Bubble',
    'Framer',
    'Pacote Office',
    'Flutter',
    'AWS Cloud',
    'SQL & Banco de Dados',,
  ];

  // Projects (6 slots) — images/videos under /public/projects
  const projects: Array<{
    title: string;
    description: string;
    href?: string;
    media: { src: string; type: 'image' | 'video'; poster?: string };
    tags?: string[];
  }> = [
    {
      title: 'Páginas e Sites Institucionais com PHP e Next.js',
      description:
        'Construo: Páginas de Vendas de alta conversão e Design Atrativo utilizando NextJS, PHP, entre outras tecnologias. Além disso, sou capacitado para construir sites institucionais para clínicas, escritórios, ou lojas online.',
      href: '#',
      media: { src: '/site_institucionais.jpg', type: 'image' },
    },
    {
      title: 'Desenvolvimento de Agentes de IA',
      description: 'Construo: Agentes de IA Vertical para diversos nichos, ofereço soluções personalizadas, robustas e escaláveis para nichos como: Crédito Consignado, Clínicas de Estética, Setor Jurídico, Marketing, Social Media, Saúde, Ensino e Varejo.',
      href: '#',
      media: { src: '/ai_agent.webp', type: 'image' },
    },
    {
      title: 'Desenvolvimento de Aplicativos Web',
      description: 'Construo: Aplicativos Web de tipos variados. Na maioria dos meus projetos, utilizo o NextJS como framework fullstack, Bases de Dados como PostgreSQL, MySQL e Supabase para escalabilidade e aplicativos dinâmicos, além de ferramentas adicionais para operações, como Git, Github, AWS (hosting) etc.  Exemplos de Aplicativos que já montei: Gerador de Vídeos Curtos com IA, Gerador de Cursos, Gerador de Templates para E-mail Marketing, Clone do Youtube, Clone do Slack, Clone do Bolt.new (Agente de IA para programação), Gerador de Conteúdo com IA, Gerador de Imagens com IA. ',
      href: '#',
      media: { src: '/web_apps.png', type: 'image' },
    },
  ];

  // Motion helpers
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.06 * i, duration: 0.5 } }),
  } as const;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border-b border-white/10">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="grid size-8 place-items-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/30 text-emerald-300 font-bold group-hover:scale-105 transition">MD</span>
            <span className="font-semibold tracking-tight">Miguel Dalvi</span>
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#skills" className="hover:text-emerald-300 transition">Habilidades</a>
            <a href="#projects" className="hover:text-emerald-300 transition">Projetos</a>
            <a href="#contact" className="hover:text-emerald-300 transition">Contato</a>
            <a
              href="#contact"
              className="rounded-xl bg-emerald-500/90 hover:bg-emerald-400 text-slate-900 font-semibold px-4 py-2 transition shadow-lg shadow-emerald-500/20"
            >
              Fale comigo
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 size-[720px] bg-emerald-500/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 right-1/3 size-[520px] bg-cyan-500/10 blur-3xl rounded-full" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 grid lg:grid-cols-[1.1fr_.9fr] gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              <span className="inline-block size-2 rounded-full bg-emerald-400 animate-pulse" />
              Disponível para novos projetos
            </p>
            <h1 className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight">
              Desenvolvedor Web com <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">IA</span>
            </h1>
            <p className="mt-4 text-slate-300 text-lg leading-relaxed">
              Sou <strong>Miguel Dalvi</strong>, desenvolvedor web com habilidades em inteligência artificial. Crio soluções modernas, escaláveis e focadas em resultado, unindo back‑end sólido com interfaces elegantes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-5 py-3 transition shadow-lg shadow-emerald-500/20">Começar um projeto</a>
              <a href="#skills" className="rounded-xl border border-white/15 hover:border-white/30 px-5 py-3">Ver habilidades</a>
            </div>
          </div>

          {/* GIF animado com Framer Motion */}
          {/* Coloque o arquivo em /public/hero-ia.gif */}
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-3 shadow-xl shadow-black/30">
            <motion.img
              src="/gifzin_neuro_network.gif"
              alt="Visual IA animado"
              className="w-full h-auto rounded-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />
            <motion.div
              className="absolute inset-0 rounded-xl ring-1 ring-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Primary */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20">
            <h2 className="text-2xl font-semibold tracking-tight">Habilidades Primárias</h2>
            <p className="mt-1 text-sm text-slate-400">Tecnologias que uso no dia a dia.</p>
            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {primarySkills.map((s) => (
                <li key={s} className="group">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/40 p-3 group-hover:border-emerald-400/40 transition">
                    <span className="size-2 rounded-full bg-emerald-400/70" />
                    <span>{s}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20">
            <h2 className="text-2xl font-semibold tracking-tight">Habilidades Secundárias</h2>
            <p className="mt-1 text-sm text-slate-400">Conhecimentos com menor proficiência.</p>
            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {secondarySkills.map((s) => (
                <li key={s} className="group">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/40 p-3 group-hover:border-cyan-400/40 transition">
                    <span className="size-2 rounded-full bg-cyan-400/70" />
                    <span>{s}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 pb-20">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Projetos em Destaque</h2>
            <p className="text-sm text-slate-400">Seis slots prontos para mídias e descrição.</p>
          </div>
          <a href="#contact" className="text-sm text-emerald-300 hover:text-emerald-200">Tem algo parecido em mente?</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={`${p.title}-${i}`}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-xl shadow-black/20"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <div className="relative aspect-video bg-slate-900/60">
                {p.media.type === 'image' ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.media.src} alt={p.title} className="absolute inset-0 size-full object-cover" />
                ) : (
                  <video
                    className="absolute inset-0 size-full object-cover"
                    src={p.media.src}
                    poster={p.media.poster}
                    controls
                  />
                )}
                <div className="absolute inset-0 ring-1 ring-white/10" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-300 leading-relaxed">{p.description}</p>
                {p.tags && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t} className="text-xs rounded-full border border-white/10 bg-white/5 px-2 py-1 text-slate-300">{t}</li>
                    ))}
                  </ul>
                )}
                {p.href && (
                  <a href={p.href} className="mt-4 inline-flex items-center gap-1 text-sm text-emerald-300 hover:text-emerald-200">
                    Ver projeto <span aria-hidden>→</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-28">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/30 p-6 sm:p-10 text-center shadow-xl shadow-black/20">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Vamos conversar?</h2>
          <p className="mt-2 text-slate-300">Curto desafios em produtos digitais, IA aplicada e integrações.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:miguel@example.com"
              className="rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-5 py-3 transition shadow-lg shadow-emerald-500/20"
            >
              Enviar e‑mail
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá Miguel! Vim pelo seu portfólio e gostaria de conversar.')}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-semibold px-5 py-3 transition border border-emerald-500/30"
            >
              Falar no WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noreferrer"
              className="rounded-xl border border-white/15 hover:border-white/30 px-5 py-3"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/seu-usuario" target="_blank" rel="noreferrer"
              className="rounded-xl border border-white/15 hover:border-white/30 px-5 py-3"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Miguel Dalvi. Todos os direitos reservados.</p>
          <p>
            Feito com <span className="text-emerald-300">Next.js</span>, <span className="text-emerald-300">Tailwind CSS</span> & <span className="text-emerald-300">Framer Motion</span>.
          </p>
        </div>
      </footer>
    </main>
  );
}
