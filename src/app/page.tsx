import { Hero } from '@/components/Hero';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

export default function Home() {
  return (
    <>
      <Hero />

      <section className="sobre-section" aria-labelledby="sobre-title">
        <h2 id="sobre-title" className="section-title">Sobre mim</h2>
        <pre className="code-block high-contrast" aria-label="Informações">
{`{
  "nome": "Lucas Matias",
  "stack": ["Node.js", "React", "MongoDB", "Next.js"],
  "foco": "Soluções inteligentes para empresas"
}`}
        </pre>
      </section>

      <div className="container">
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
