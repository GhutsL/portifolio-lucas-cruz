import { Hero } from '@/components/Hero';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <>
      <Hero />

      <section className="sobre-section" aria-labelledby="sobre-title">
        <h2 id="sobre-title" className="section-title">Sobre mim</h2>
        <pre className="code-block high-contrast" aria-label="Informações">
{`{
  "nome": "Lucas Matias Cruz",
  "stack": ["React", "MongoDB", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "React Native", "Python", "PHP"],
  "Desenvolvedor full-stack e mobile em aprendizado, mas quero focar front-end, por enquanto quero aprimorar meu conhecimento full stack focado em REACT, PHP, Javascript "] ,
}`}
        </pre>
      </section>

      <div className="container">
        <SpeedInsights />
        <section aria-labelledby="projetos-title" className="projects-wrapper">
          <h2 id="projetos-title" className="section-title">Projetos</h2>
          <div className="projects-stack">
            {projects.map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
