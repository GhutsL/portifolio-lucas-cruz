import { Hero } from '@/components/Hero';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript, 
  SiPhp, 
  SiPython,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiLaravel
} from 'react-icons/si';

export default function Home() {
  return (
    <>
      <Hero />

      <section className="sobre-section" aria-labelledby="sobre-title">
        <h2 id="sobre-title" className="section-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.2rem)', lineHeight: '1.1', letterSpacing: '0.6px', marginBottom: '28px' }}>Sobre mim</h2>
        <pre className="code-block high-contrast" aria-label="Informações">
{`{
  "nome": "Lucas Matias Cruz",
  "Desenvolvedor full-stack e mobile em aprendizado, mas quero focar front-end, por enquanto quero aprimorar meu conhecimento full stack focado em REACT, PHP, Javascript "],
}`}
        </pre>

        <div className="skills-container">
          <div className="skills-section">
            <h3 className="skills-title">Linguagens</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <SiHtml5 className="skill-icon" />
                <span>HTML</span>
              </div>
              <div className="skill-item">
                <SiCss3 className="skill-icon" />
                <span>CSS</span>
              </div>
              <div className="skill-item">
                <SiJavascript className="skill-icon" />
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <SiTypescript className="skill-icon" />
                <span>TypeScript</span>
              </div>
              <div className="skill-item">
                <SiPhp className="skill-icon" />
                <span>PHP</span>
              </div>
              <div className="skill-item">
                <SiPython className="skill-icon" />
                <span>Python</span>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3 className="skills-title">Backend</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <SiMongodb className="skill-icon" />
                <span>MongoDB</span>
              </div>
              <div className="skill-item">
                <SiFirebase className="skill-icon" />
                <span>Firebase</span>
              </div>
              <div className="skill-item">
                <SiMysql className="skill-icon" />
                <span>MySQL</span>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3 className="skills-title">Frameworks</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <SiReact className="skill-icon" />
                <span>React</span>
              </div>
              <div className="skill-item">
                <SiReact className="skill-icon" />
                <span>React Native</span>
              </div>
              <div className="skill-item">
                <SiNextdotjs className="skill-icon" />
                <span>Next.js</span>
              </div>
              <div className="skill-item">
                <SiLaravel className="skill-icon" />
                <span>Laravel</span>
              </div>
            </div>
          </div>
        </div>
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
