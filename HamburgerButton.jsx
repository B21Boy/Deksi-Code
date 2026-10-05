export default function HamburgerButton({ variant, open, onToggle }) {
  return (
    <button
      className={`hamburger-button ${variant}-hamburger ${open ? 'active' : ''}`}
      type="button"
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      onClick={onToggle}
    >
      <span />
      <span />
      <span />
    </button>
  )
}
