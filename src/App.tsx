import { FormEvent, useEffect, useState } from 'react'
import SplashCursor from '@/components/SplashCursor.jsx'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  PenTool,
  Search,
  ShoppingBag,
  Sparkles,
  Target,
  X,
} from 'lucide-react'

type Service = {
  number: string
  title: string
  description: string
  icon: typeof Code2
}

type Project = {
  name: string
  type: string
  description: string
  className: string
  mark: string
}

const services: Service[] = [
  { number: '01', title: 'Website Development', description: 'Custom-built responsive websites designed for speed, performance, and conversion.', icon: Code2 },
  { number: '02', title: 'UI/UX Design', description: 'User-focused interfaces with beautiful layouts and seamless experiences.', icon: PenTool },
  { number: '03', title: 'E-Commerce Development', description: 'Online stores designed to turn curious visitors into loyal customers.', icon: ShoppingBag },
  { number: '04', title: 'Website Redesign', description: 'Transform outdated websites into modern, premium digital experiences.', icon: Sparkles },
  { number: '05', title: 'SEO & Performance', description: 'Improve website speed, search visibility, and technical performance.', icon: Search },
  { number: '06', title: 'Landing Pages', description: 'High-converting landing pages for products, campaigns, and businesses.', icon: Target },
]

const projects: Project[] = [
  { name: 'LuxeTime', type: 'E-commerce / 2024', description: 'A quiet luxury storefront for a new generation of watch collectors.', className: 'project-luxe', mark: 'LT' },
  { name: 'Forma Studio', type: 'Digital Identity / 2024', description: 'A tactile digital home for architecture, interiors, and considered spaces.', className: 'project-forma', mark: 'FS' },
  { name: 'ApexFit', type: 'Brand Platform / 2023', description: 'A high-energy training platform built to keep momentum moving.', className: 'project-apex', mark: 'AF' },
  { name: 'NovaTech', type: 'SaaS / 2023', description: 'Turning complex intelligence into a clear, confident product story.', className: 'project-nova', mark: 'NT' },
]

const steps = [
  ['01', 'Discover', 'We understand your business, audience, and goals.'],
  ['02', 'Strategize', 'We plan the website structure and digital direction.'],
  ['03', 'Design', 'We create modern, visually engaging interfaces.'],
  ['04', 'Develop', 'We turn the designs into fast, functional websites.'],
  ['05', 'Launch', 'We test, optimize, and launch your website.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [cursorEnabled, setCursorEnabled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 36)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const desktopQuery = window.matchMedia('(pointer: fine) and (min-width: 768px)')
    const updateCursor = () => setCursorEnabled(desktopQuery.matches)
    updateCursor()
    desktopQuery.addEventListener('change', updateCursor)
    return () => desktopQuery.removeEventListener('change', updateCursor)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="site-shell">
      {cursorEnabled && (
        <SplashCursor
          colors={['#ff6b00', '#ff9d5c', '#ffffff']}
          rainbow={false}
          quality="medium"
          intensity={0.8}
          force={0.85}
          swirl={2.4}
          trail={0.85}
          glow={0.25}
          zIndex={15}
        />
      )}
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label="iDigitalRise home">
          <span className="brand-mark">i</span>Digital<span className="brand-accent">Rise</span><span className="brand-dot">.</span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {['Services', 'Work', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">Let's Build Something <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section className="hero section-dark" id="home">
          <div className="hero-grid-lines" />
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> Independent digital studio</div>
            <h1>We build digital experiences that make <em>businesses</em> <span>rise.</span></h1>
            <p className="hero-description">We design and develop powerful websites that transform ideas into digital experiences, helping ambitious brands stand out, grow, and dominate online.</p>
            <div className="hero-actions">
              <a className="button button-orange" href="#work">Explore our work <ArrowDownRight size={17} /></a>
              <a className="button button-ghost" href="#contact">Start a project <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-proof"><span>Design</span><i /> <span>Develop</span><i /> <span>Elevate</span></div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-large" />
            <div className="orbit orbit-small" />
            <div className="art-panel art-panel-top"><span>iDR / 001</span><span className="status-dot" /></div>
            <div className="rise-disc"><span>R</span><div className="disc-ring" /></div>
            <div className="art-panel art-panel-bottom"><span>Digital<br />advantage</span><ArrowUpRight size={20} /></div>
            <div className="art-cross">+</div>
            <div className="art-label">Scroll to explore <ArrowDownRight size={14} /></div>
          </div>
        </section>

        <section className="marquee-strip" aria-label="Capabilities">
          <div className="marquee-track"><span>Strategy</span><b>✳</b><span>Design</span><b>✳</b><span>Development</span><b>✳</b><span>Performance</span><b>✳</b><span>Strategy</span><b>✳</b><span>Design</span><b>✳</b><span>Development</span></div>
        </section>

        <section className="services section-light" id="services">
          <div className="section-intro split-intro">
            <div><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> What we do</div><h2>Everything your brand needs to <em>grow</em> digitally.</h2></div>
            <p>From the first spark of an idea to the moment your new site goes live, we bring clarity, craft, and momentum to every detail.</p>
          </div>
          <div className="service-grid">
            {services.map(({ number, title, description, icon: Icon }) => (
              <article className="service-card" key={title}>
                <div className="service-top"><span>{number}</span><Icon size={22} strokeWidth={1.5} /></div>
                <div><h3>{title}</h3><p>{description}</p></div>
                <span className="card-arrow"><ArrowUpRight size={18} /></span>
              </article>
            ))}
          </div>
        </section>

        <section className="work section-dark" id="work">
          <div className="section-intro split-intro work-intro">
            <div><div className="eyebrow"><span className="eyebrow-line" /> Selected work</div><h2>Digital experiences.<br /><em>Real impact.</em></h2></div>
            <a className="text-link" href="#contact">View all projects <ArrowUpRight size={17} /></a>
          </div>
          <div className="project-grid">
            {projects.map(({ name, type, description, className, mark }) => (
              <article className={`project-card ${className}`} key={name}>
                <div className="project-visual"><span className="project-number">0{projects.findIndex((project) => project.name === name) + 1}</span><span className="project-mark">{mark}</span><div className="project-shape" /><div className="project-ui"><span /><span /><span /></div><div className="project-overlay"><span>View project</span><ArrowUpRight size={19} /></div></div>
                <div className="project-meta"><div><h3>{name}</h3><span>{type}</span></div><p>{description}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="why section-light" id="about">
          <div className="why-visual"><div className="why-ring ring-one" /><div className="why-ring ring-two" /><div className="why-core">i<span>DR</span></div><div className="why-caption">Made for<br /><em>forward</em> thinkers.</div></div>
          <div className="why-copy"><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> The difference</div><h2>Good websites look good. <em>Great websites grow businesses.</em></h2><p>We combine creativity, strategy, and technology to turn your website into your most valuable digital asset.</p><div className="feature-list">{['Strategy before design', 'Built for mobile', 'Performance focused', 'Conversion driven', 'Modern technology', 'Built to scale'].map((feature) => <div className="feature" key={feature}><span><Check size={14} /></span>{feature}</div>)}</div></div>
        </section>

        <section className="process section-light">
          <div className="section-intro split-intro"><div><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> Our approach</div><h2>Simple process.<br /><em>Serious results.</em></h2></div><p>No black boxes. No unnecessary layers. Just a clear, collaborative path from a good idea to a better business.</p></div>
          <div className="process-line">{steps.map(([number, title, description]) => <div className="step" key={number}><span className="step-number">{number}</span><div className="step-marker" /><h3>{title}</h3><p>{description}</p></div>)}</div>
        </section>

        <section className="manifesto section-dark"><div className="manifesto-grid" /><div className="manifesto-copy"><div className="eyebrow"><span className="eyebrow-line" /> A little about us</div><h2>We don't just build websites. We build your <em>digital advantage.</em></h2><p>iDigitalRise is a digital development studio for ambitious businesses. We make the internet feel a little more human, a little more useful, and a lot more unforgettable.</p><a className="text-link" href="#contact">More about iDigitalRise <ArrowUpRight size={17} /></a></div><div className="manifesto-symbol"><span>i</span><strong>DR</strong><small>EST. 2024</small></div></section>

        <section className="testimonials section-light"><div className="section-intro testimonial-heading"><div><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> Kind words</div><h2>Good company,<br /><em>great work.</em></h2></div><div className="quote-symbol">“</div></div><div className="testimonial-grid"><blockquote><p>“They didn't just redesign our website. They helped us understand what our business could become.”</p><footer><strong>Elena Marquez</strong><span>Founder, Forma Studio</span></footer></blockquote><blockquote><p>“The rare team that can make something feel beautiful and make it work harder at the same time.”</p><footer><strong>Marcus Chen</strong><span>Co-founder, NovaTech</span></footer></blockquote><blockquote><p>“From the first conversation, they felt like a true extension of our team. The result speaks for itself.”</p><footer><strong>Amelia Stone</strong><span>Director, LuxeTime</span></footer></blockquote></div></section>

        <section className="cta-section section-dark"><div className="cta-glow" /><div className="eyebrow"><span className="eyebrow-line" /> Your next chapter</div><h2>Ready to make your<br /><em>business rise?</em></h2><p>Let's build a website that doesn't just exist online — it makes an impact.</p><a className="button button-orange" href="#contact">Start your project <ArrowUpRight size={17} /></a></section>

        <section className="contact section-light" id="contact"><div className="contact-copy"><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> Start a conversation</div><h2>Have a good idea?<br /><em>Let's make it real.</em></h2><p>Tell us a little about what you're building. We usually reply within two business days.</p><div className="contact-details"><a href="mailto:hello@idigitalrise.com">hello@idigitalrise.com <ArrowUpRight size={16} /></a><a href="#contact">WhatsApp us <ArrowUpRight size={16} /></a></div></div><form className="contact-form" onSubmit={handleSubmit}>{submitted ? <div className="success-message"><div className="success-icon"><Check size={24} /></div><h3>Thanks for reaching out.</h3><p>Your message is on its way. We’ll be in touch soon.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Send another message <ArrowRight size={16} /></button></div> : <><label><span>Your name</span><input required type="text" placeholder="Jane Smith" /></label><label><span>Business name</span><input required type="text" placeholder="The next big thing" /></label><label><span>Email address</span><input required type="email" placeholder="jane@company.com" /></label><label><span>What do you need?</span><select required defaultValue=""><option value="" disabled>Select a service</option><option>Website development</option><option>Brand & website</option><option>E-commerce</option><option>Something else</option></select><ChevronDown size={16} /></label><label><span>Project budget</span><select required defaultValue=""><option value="" disabled>Choose a range</option><option>$5k — $10k</option><option>$10k — $25k</option><option>$25k+</option></select><ChevronDown size={16} /></label><label className="full-field"><span>Tell us about your project</span><textarea required placeholder="A few words about the idea, the ambition, and where you are now..." rows={3} /></label><button className="button button-dark" type="submit">Send inquiry <ArrowUpRight size={17} /></button></>}</form></section>
      </main>

      <footer className="footer section-dark"><div className="footer-top"><a className="brand" href="#home"><span className="brand-mark">i</span>Digital<span className="brand-accent">Rise</span><span className="brand-dot">.</span></a><p>Digital experiences for brands<br />ready to rise above.</p><div className="socials"><a href="#contact" aria-label="Instagram"><Instagram size={18} /></a><a href="#contact" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="#contact" aria-label="Facebook"><Facebook size={18} /></a></div></div><div className="footer-bottom"><span>© 2024 iDigitalRise. All rights reserved.</span><span>Rise above the digital.</span><span>Made with intent <Sparkles size={13} /></span></div></footer>
    </div>
  )
}

export default App
