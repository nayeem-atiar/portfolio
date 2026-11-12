import { CONTACT_LINKS } from '../data';

export default function Contact({ C, R }) {
  return (
    <section id="contact" className="section container">
      <div className="contact-grid">

        {/* Left */}
        <div {...R('contact-left')}>
          <p style={{ fontSize: '.75rem', fontWeight: 600, letterSpacing: '.12em', color: C.accent, marginBottom: '.6rem' }}>CONTACT</p>
          <h2 className="serif" style={{ fontSize: 'clamp(2rem, 7vw, 2.6rem)', fontWeight: 700, letterSpacing: '-.02em', lineHeight: 1.15, marginBottom: '1.25rem', color: C.text }}>
            Let's build something<br /><em style={{ color: C.accent }}>great together.</em>
          </h2>
          <p style={{ fontSize: '.92rem', color: C.muted, lineHeight: 1.8, marginBottom: '2rem' }}>
            Open to new opportunities, collaborations, and interesting projects.
            Feel free to reach out — I'd love to hear from you.
          </p>
          <a
            href="mailto:nayeematiar@gmail.com"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem', background: C.accent, color: '#fff', borderRadius: '10px', padding: '.8rem 1.75rem', fontWeight: 600, fontSize: '.9rem', textDecoration: 'none', fontFamily: "'Outfit', sans-serif" }}
          >
            ✉ Send a Message
          </a>
        </div>

        {/* Right — contact cards */}
        <div {...R('contact-right', 0.1)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {CONTACT_LINKS.map(({ label, val, href, icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: C.card, border: `1px solid ${C.border}`, borderRadius: '12px', padding: '1rem 1.25rem', textDecoration: 'none', transition: 'border-color .2s' }}
              onMouseOver={e => e.currentTarget.style.borderColor = C.accent}
              onMouseOut={e => e.currentTarget.style.borderColor = C.border}
            >
              <span style={{ fontSize: '1rem', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: C.accentL, borderRadius: '8px', color: C.accent }}>
                {icon}
              </span>
              <div>
                <p style={{ fontSize: '.7rem', color: C.muted, fontWeight: 500, letterSpacing: '.06em', marginBottom: '.1rem' }}>{label.toUpperCase()}</p>
                <p style={{ fontSize: '.85rem', color: C.text, fontWeight: 500 }}>{val}</p>
              </div>
              <span style={{ marginLeft: 'auto', color: C.muted, fontSize: '.8rem' }}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
