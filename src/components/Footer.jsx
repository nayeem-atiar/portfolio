export default function Footer({ C }) {
  return (
    <footer className="footer" style={{ borderTop: `1px solid ${C.border}` }}>
      <span className="serif" style={{ fontSize: '.95rem', fontStyle: 'italic', color: C.muted }}>Atiar Rahman Nayeem</span>
      <span style={{ fontSize: '.75rem', color: C.muted, letterSpacing: '.06em' }}>© 2026 · Senior Software Engineer</span>
    </footer>
  );
}
