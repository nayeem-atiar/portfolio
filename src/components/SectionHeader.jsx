export default function SectionHeader({ label, title, subtitle, R, C }) {
  return (
    <div {...R(`${label.toLowerCase().replace(/\s/g, '-')}-head`)} style={{ marginBottom: '3.5rem' }}>
      <p style={{ fontSize: '.75rem', fontWeight: 600, letterSpacing: '.12em', color: C.accent, marginBottom: '.6rem' }}>
        {label.toUpperCase()}
      </p>
      <h2 className="serif" style={{ fontSize: 'clamp(1.9rem, 6vw, 2.4rem)', fontWeight: 700, letterSpacing: '-.02em' }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontSize: '.92rem', color: C.muted, lineHeight: 1.75, maxWidth: '560px', marginTop: '.75rem' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
