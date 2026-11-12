import { TESTIMONIALS } from '../data';
import SectionHeader from './SectionHeader';

export default function Testimonials({ C, R }) {
  return (
    <section id="testimonials" className="section container">
      <SectionHeader label="Testimonials" title="What People Say" R={R} C={C} />

      {TESTIMONIALS.map((t, i) => (
        <div
          key={i}
          {...R(`test-${i}`, i * 0.1)}
          style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: '20px', padding: '2.5rem', position: 'relative', overflow: 'hidden' }}
        >
          {/* Decorative quote mark */}
          <div style={{ position: 'absolute', top: '1.5rem', left: '2rem', fontSize: '5rem', color: C.accent, opacity: 0.12, fontFamily: 'Georgia, serif', lineHeight: 1 }}>"</div>

          <p style={{ fontSize: '1.05rem', color: C.text, lineHeight: 1.85, fontStyle: 'italic', marginBottom: '2rem', maxWidth: '720px', position: 'relative' }}>
            "{t.quote}"
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: C.accentL, border: `1.5px solid ${C.accent}50`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.85rem', fontWeight: 700, color: C.accent }}>
              {t.initials}
            </div>
            <div>
              <p style={{ fontWeight: 600, fontSize: '.95rem', color: C.text }}>{t.name}</p>
              <p style={{ fontSize: '.78rem', color: C.muted }}>{t.role}</p>
              <p style={{ fontSize: '.75rem', color: C.accent, fontWeight: 500 }}>{t.company}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
