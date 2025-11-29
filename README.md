# 🚀 Portfólio - Lucas Matias Cruz

Portfólio pessoal moderno e interativo desenvolvido com Next.js 16, React 19 e TypeScript, apresentando projetos e habilidades como desenvolvedor Full Stack.

![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.14-38bdf8)
![Three.js](https://img.shields.io/badge/Three.js-0.181.2-black)

---

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação e Execução](#-instalação-e-execução)
- [Componentes Principais](#-componentes-principais)
- [Customização](#-customização)
- [Acessibilidade](#-acessibilidade)
- [Performance](#-performance)
- [Deploy](#-deploy)

---

## 🎯 Visão Geral

Este portfólio foi desenvolvido para apresentar projetos, habilidades técnicas e informações profissionais de forma moderna e atrativa. O site conta com:

- **Design Dark Mode** com tema neon e efeitos de brilho (glow)
- **Animações interativas** usando Three.js para background dinâmico
- **Carrossel de imagens** para navegação entre screenshots dos projetos
- **Layout responsivo** otimizado para dispositivos móveis, tablets e desktops
- **SEO otimizado** com meta tags Open Graph e Twitter Cards
- **Acessibilidade** seguindo padrões WCAG com navegação por teclado

---

## ✨ Funcionalidades

### 1. **Hero Section Centralizado**
- Apresentação com nome e título profissional
- Avatar circular com efeito glow neon interativo
- Layout responsivo que se adapta entre mobile (vertical) e desktop (horizontal)

### 2. **Seção "Sobre Mim"**
- Bloco de código estilizado com informações pessoais
- Grid de habilidades organizadas por categorias:
  - **Linguagens**: HTML, CSS, JavaScript, TypeScript, PHP, Python
  - **Backend**: MongoDB, Firebase, MySQL
  - **Frameworks**: React, React Native, Next.js, Laravel
- Cards interativos com efeitos hover e ícones SVG customizados

### 3. **Galeria de Projetos**
- Cards em layout vertical empilhado (stack) com grande espaçamento
- **Carrossel de imagens** em cada projeto:
  - Navegação por botões (anterior/próximo)
  - Navegação por miniaturas (thumbnails)
  - Suporte a navegação por teclado (setas ← →)
- Badges de tecnologias utilizadas com ícones
- Links para repositórios no GitHub
- Efeitos visuais de alto contraste com bordas iluminadas

### 4. **Navegação Fixa (Scroll Nav)**
- Barra de navegação que aparece ao rolar a página
- Efeito glassmorphism (vidro fosco) com blur
- Links âncora para seções: Projetos, Sobre, Contato
- Animação suave de entrada/saída

### 5. **Background Animado (FloatingLines)**
- Ondas flutuantes renderizadas com WebGL/Three.js
- Shaders customizados para efeitos de luz
- Interatividade com o mouse (parallax e dobra)
- Três camadas de ondas configuráveis
- Otimizado para performance

### 6. **Footer**
- Links sociais: GitHub, LinkedIn
- Link de e-mail com animação de expansão ao passar o mouse
- Direitos autorais dinâmicos (ano atual)
- Linha separadora em toda largura da página

---

## 🛠️ Tecnologias Utilizadas

### **Core**
- **Next.js 16.0.1** - Framework React com SSR e SSG
- **React 19.2.0** - Biblioteca para interfaces de usuário
- **TypeScript 5.x** - Superset JavaScript com tipagem estática

### **Estilização**
- **TailwindCSS 3.4.14** - Framework CSS utility-first
- **PostCSS** - Processador CSS
- **CSS Modules** - Estilos com escopo local
- **Custom CSS** - Variáveis CSS, gradientes e animações customizadas

### **3D/Gráficos**
- **Three.js 0.181.2** - Biblioteca WebGL para gráficos 3D
- **Shaders GLSL** - Vertex e Fragment shaders customizados

### **Ícones e UI**
- **React Icons 5.5.0** - Biblioteca de ícones (Simple Icons)
- **Lucide React 0.554.0** - Ícones modernos
- **SVG customizados** - Ícones desenhados manualmente

### **Utilitários**
- **clsx 2.1.1** - Construção de classNames condicionais
- **tailwind-merge 3.4.0** - Merge inteligente de classes Tailwind
- **class-variance-authority 0.7.1** - Variantes de componentes

### **Analytics**
- **Vercel Speed Insights** - Monitoramento de performance

### **Fontes**
- **Geist Sans** - Fonte principal (Vercel)
- **Geist Mono** - Fonte monospace para código
- **Poppins** - Fonte secundária (Google Fonts)

---

## 📁 Estrutura do Projeto

```
portifolio-lucas-cruz/
├── public/                          # Arquivos estáticos
│   ├── Avatar.jpg                   # Foto de perfil
│   ├── Cerne1-4.jpg                 # Screenshots projeto CERNE
│   ├── Simpliza1-4.jpg              # Screenshots projeto Simpliza
│   └── *.svg                        # Ícones diversos
│
├── src/
│   ├── app/                         # App Router do Next.js
│   │   ├── layout.tsx               # Layout raiz (fonts, metadata, SEO)
│   │   ├── page.tsx                 # Página inicial (Home)
│   │   ├── globals.css              # Estilos globais e CSS customizado
│   │   └── favicon.ico              # Ícone do site
│   │
│   ├── components/                  # Componentes React reutilizáveis
│   │   ├── FloatingLines.jsx        # Background animado com Three.js
│   │   ├── FloatingLines.css        # Estilos do background
│   │   ├── Hero.tsx                 # Seção principal de apresentação
│   │   ├── ScrollNav.tsx            # Navegação fixa ao rolar
│   │   ├── ProjectCard.tsx          # Card individual de projeto
│   │   ├── ProjectCarousel.tsx      # Carrossel de imagens
│   │   ├── IconTech.tsx             # Ícones de tecnologias
│   │   ├── Footer.tsx               # Rodapé com redes sociais
│   │   └── SocialIcons.tsx          # Ícones SVG sociais
│   │
│   ├── data/                        # Dados estruturados
│   │   ├── projects.ts              # Lista de projetos com metadados
│   │   └── social-links.ts          # Links de redes sociais
│   │
│   ├── lib/                         # Utilitários
│   │   └── utils.ts                 # Funções auxiliares
│   │
│   └── styles/                      # CSS Modules
│       ├── hero.module.css
│       └── project.module.css
│
├── components.json                  # Configuração shadcn/ui
├── next.config.ts                   # Configurações do Next.js
├── tailwind.config.js               # Configurações do Tailwind
├── tsconfig.json                    # Configurações do TypeScript
├── postcss.config.js                # Configurações do PostCSS
└── package.json                     # Dependências e scripts
```

---

## 🚀 Instalação e Execução

### **Pré-requisitos**
- Node.js 20.x ou superior
- npm, yarn, pnpm ou bun

### **1. Clone o repositório**
```bash
git clone https://github.com/GhutsL/portifolio-lucas-cruz.git
cd portifolio-lucas-cruz
```

### **2. Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### **3. Execute o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

O site estará disponível em **http://localhost:3000**

### **4. Build para produção**
```bash
npm run build
npm run start
```

---

## 🧩 Componentes Principais

### **1. FloatingLines (Background Animado)**

**Localização**: `src/components/FloatingLines.jsx`

Componente complexo que renderiza ondas flutuantes usando WebGL e Three.js:

- **Tecnologia**: Shaders GLSL (Vertex e Fragment)
- **Funcionalidades**:
  - Três camadas de ondas independentes (top, middle, bottom)
  - Efeito parallax baseado na posição do mouse
  - Interatividade: ondas se dobram próximo ao cursor
  - Gradiente de cores customizável
  - Animação temporal contínua

**Parâmetros principais**:
```javascript
linesGradient: string[]        // Array de cores hexadecimais
enabledWaves: string[]         // ['top', 'middle', 'bottom']
lineCount: number[]            // Quantidade de linhas por camada
lineDistance: number[]         // Espaçamento entre linhas
interactive: boolean           // Habilita interação com mouse
parallax: boolean              // Habilita efeito parallax
bendRadius: number             // Raio de influência do cursor
bendStrength: number           // Intensidade da dobra
```

---

### **2. Hero (Seção Principal)**

**Localização**: `src/components/Hero.tsx`

Apresentação inicial com nome e avatar:

```typescript
<Hero />
```

**Características**:
- Layout flex centralizado (vertical no mobile, horizontal no desktop)
- Avatar com múltiplas camadas de glow (::before e ::after pseudo-elements)
- Texto com efeito neon interativo
- Otimizado para Next.js Image (prioridade de carregamento)

---

### **3. ProjectCard (Card de Projeto)**

**Localização**: `src/components/ProjectCard.tsx`

Exibe informações detalhadas de cada projeto:

**Props**:
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  demoUrl?: string;
  gradients: string[];
}
```

**Componentes internos**:
- `ProjectCarousel` - Navegação entre screenshots
- `IconTech` - Renderiza ícones das tecnologias
- Badges de tecnologia com hover effects
- Botões de ação (Repositório, Demo)

---

### **4. ProjectCarousel (Carrossel de Imagens)**

**Localização**: `src/components/ProjectCarousel.tsx`

Sistema completo de navegação de imagens:

**Funcionalidades**:
- Navegação por botões ‹ › 
- Miniaturas clicáveis (thumbnails)
- **Navegação por teclado**: Arrow Left/Right
- Indicador visual da imagem ativa
- ARIA labels para acessibilidade

**Hooks utilizados**:
- `useState` - Controle do slide ativo
- `useCallback` - Funções de navegação memoizadas
- `useEffect` - Event listeners de teclado

---

### **5. ScrollNav (Navegação Fixa)**

**Localização**: `src/components/ScrollNav.tsx`

Barra de navegação que aparece ao rolar:

```typescript
const [show, setShow] = useState(false);

useEffect(() => {
  const onScroll = () => setShow(window.scrollY > 120);
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}, []);
```

**Features**:
- Transição suave com cubic-bezier
- Glassmorphism (backdrop-filter: blur)
- Links âncora para navegação interna
- Scroll listener otimizado (passive: true)

---

### **6. Footer (Rodapé)**

**Localização**: `src/components/Footer.tsx`

Rodapé com redes sociais e informações:

**Componentes**:
- Links para GitHub e LinkedIn
- **EmailLink** - Animação de expansão ao hover:
  - Estado inicial: apenas ícone (44px)
  - Ao hover: expande para 260px mostrando o e-mail completo
  - Transição suave com cubic-bezier
- Copyright dinâmico

---

## 🎨 Customização

### **1. Adicionar Novo Projeto**

Edite `src/data/projects.ts`:

```typescript
{
  id: 'meu-projeto',
  title: 'Meu Projeto Incrível',
  description: 'Descrição detalhada do projeto...',
  tech: ['React', 'Node.js', 'MongoDB'],
  repoUrl: 'https://github.com/usuario/repo',
  demoUrl: 'https://projeto.com',
  gradients: [
    'linear-gradient(135deg,#0fb6ff,#6b3cff)',
    'linear-gradient(135deg,#6b3cff,#5bd0a3)',
  ],
}
```

**Adicione as imagens** em `public/`:
- `MeuProjeto1.jpg`, `MeuProjeto2.jpg`, etc.

**Atualize o mapeamento** em `ProjectCard.tsx`:
```typescript
const projectImages = project.id === 'meu-projeto' ? [
  '/MeuProjeto1.jpg',
  '/MeuProjeto2.jpg',
  '/MeuProjeto3.jpg',
] : // ...
```

---

### **2. Modificar Cores do Tema**

Edite variáveis CSS em `src/app/globals.css`:

```css
:root {
  --accent: #00c8ff;           /* Cor principal (azul neon) */
  --accent-rgb: 0,200,255;     /* RGB para transparências */
  --bg-900: #07090b;           /* Background principal */
  --bg-800: #0b0f12;           /* Background secundário */
  --panel: rgba(255,255,255,0.03);  /* Fundo dos cards */
  --glass-border: rgba(255,255,255,0.06);  /* Bordas */
}
```

---

### **3. Customizar Background Animado**

No `src/app/layout.tsx`, ajuste as props do `FloatingLines`:

```tsx
<FloatingLines 
  linesGradient={['#ff00ff', '#00ffff', '#ffff00']}  // Cores
  enabledWaves={['top', 'middle', 'bottom']}         // Camadas ativas
  lineCount={[7, 7, 7]}                              // Linhas por camada
  lineDistance={[8, 6, 4]}                           // Espaçamento
  bendRadius={5.0}                                   // Raio interação
  bendStrength={-0.5}                                // Força da dobra
  interactive={true}                                 // Mouse interativo
  parallax={true}                                    // Efeito parallax
  parallaxStrength={0.2}                             // Intensidade
/>
```

---

### **4. Alterar Informações Pessoais**

**Hero**:
```tsx
// src/components/Hero.tsx
<h1><span className="name animate">Seu Nome</span></h1>
<p className="subtitle">
  Seu Título Profissional<br />
  Outra Linha...
</p>
```

**Sobre Mim**:
```tsx
// src/app/page.tsx
<pre className="code-block high-contrast">
{`{
  "nome": "Seu Nome Completo",
  "cargo": "Sua Profissão",
  ...
}`}
</pre>
```

**Links Sociais**:
```typescript
// src/data/social-links.ts
export const SOCIAL_LINKS = {
  github: {
    url: 'https://github.com/seu-usuario',
    ariaLabel: 'Visite meu GitHub',
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/seu-perfil/',
    ariaLabel: 'Visite meu LinkedIn',
  },
  email: {
    url: 'mailto:seu@email.com',
    ariaLabel: 'Enviar e-mail',
  },
}
```

---

### **5. Adicionar Nova Tecnologia/Ícone**

Em `src/components/IconTech.tsx`, adicione o SVG:

```typescript
const icons: Record<string, React.ReactElement> = {
  // ...existentes
  'Vue': (
    <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor">
      {/* Path do ícone Vue */}
    </svg>
  ),
};
```

Atualize a função `normalize` se necessário para normalizar o nome.

---

## ♿ Acessibilidade

O projeto segue boas práticas de acessibilidade (WCAG):

### **Implementações**:

1. **Navegação por Teclado**:
   - Todos os elementos interativos são acessíveis via Tab
   - Carrossel navega com Arrow Left/Right
   - Estados de foco visíveis (`:focus-visible`)

2. **ARIA Labels**:
   ```tsx
   aria-label="Descrição clara"
   aria-labelledby="id-do-título"
   aria-current="true"  // Para item ativo
   ```

3. **Skip Link**:
   ```tsx
   <a href="#conteudo-principal" className="skip-link">
     Pular para conteúdo
   </a>
   ```
   Permite usuários de leitores de tela pular a navegação.

4. **Semântica HTML**:
   - Tags corretas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
   - Hierarquia de headings (`<h1>` → `<h2>` → `<h3>`)

5. **Contraste de Cores**:
   - Texto sobre fundo escuro com alto contraste
   - Classe `.high-contrast` para cards importantes

6. **Reduced Motion**:
   ```css
   @media (prefers-reduced-motion: reduce) {
     * { animation: none !important; transition: none !important; }
   }
   ```

---

## ⚡ Performance

### **Otimizações Implementadas**:

1. **Next.js Image Optimization**:
   ```tsx
   <Image src="/Avatar.jpg" priority />
   ```
   - Lazy loading automático
   - Formatos modernos (WebP)
   - Responsividade automática

2. **Code Splitting**:
   - Componentes carregados on-demand
   - Bundle otimizado pelo Next.js

3. **CSS Optimization**:
   - TailwindCSS purge CSS não utilizado
   - Critical CSS inline

4. **Three.js Performance**:
   - `setPixelRatio` limitado a 2
   - `requestAnimationFrame` para renderização
   - Cleanup adequado (dispose) ao desmontar

5. **Font Loading**:
   ```tsx
   display: 'swap'  // Evita FOIT (Flash of Invisible Text)
   ```

6. **Analytics**:
   - Vercel Speed Insights para monitoramento

### **Lighthouse Score Esperado**:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 🌐 SEO

### **Metadados Configurados**:

```typescript
export const metadata: Metadata = {
  title: 'Portfólio — Lucas Matias',
  description: 'Portfólio pessoal — Desenvolvedor Fullstack',
  openGraph: {
    title: 'Portfólio — Lucas Matias',
    description: 'Projetos e experiência como desenvolvedor Fullstack.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seu-dominio.com',
    siteName: 'Portfólio Lucas Matias',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfólio — Lucas Matias',
    description: 'Conheça meus projetos e stack.',
  },
  robots: { index: true, follow: true },
};
```

**Viewport**:
```typescript
export const viewport: Viewport = {
  themeColor: '#07090b',
  width: 'device-width',
  initialScale: 1,
};
```

---

## 🚢 Deploy

### **Vercel (Recomendado)**:

1. Push para GitHub
2. Conecte o repositório na [Vercel](https://vercel.com)
3. Deploy automático a cada commit

**Ou via CLI**:
```bash
npm i -g vercel
vercel
```

---

### **Outras Plataformas**:

**Netlify**:
```bash
npm run build
# Deploy a pasta .next
```

**GitHub Pages** (requer configuração adicional):
```bash
# Adicione ao next.config.ts:
output: 'export',
images: { unoptimized: true }
```

---

## 📝 Licença

Este projeto é de código aberto para fins educacionais. Sinta-se livre para usar como referência ou base para seu próprio portfólio.

---

## 👤 Autor

**Lucas Matias Cruz**
- GitHub: [@GhutsL](https://github.com/GhutsL)
- LinkedIn: [lucas-cruz-a937a3330](https://www.linkedin.com/in/lucas-cruz-a937a3330/)
- Email: lucasmatiasc2004@gmail.com

---

## 🙏 Agradecimentos

- **Vercel** - Hospedagem e Next.js
- **Three.js** - Biblioteca WebGL
- **TailwindCSS** - Framework CSS
- **React Icons** - Biblioteca de ícones

---

## 📚 Recursos Úteis

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Three.js Documentation](https://threejs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!**
