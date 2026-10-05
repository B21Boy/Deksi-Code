import { useCompanion } from '../../context/CompanionContext.jsx'

export default function ThemeToggle({ theme, onToggle, className = '' }) {
  const isLight = theme === 'light'
  const { wink } = useCompanion()

  return (
    <button
      className={`theme-toggle ${className}`.trim()}
      type="button"
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} theme`}
      aria-pressed={isLight}
      onClick={() => {
        onToggle()
        wink()
      }}
    >
      {isLight ? (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M21 14.4A8.2 8.2 0 0 1 9.6 3a7.7 7.7 0 1 0 11.4 11.4z" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.7-5.7 1.4-1.4M4.9 19.1l1.4-1.4m0-11.4L4.9 4.9m14.2 14.2-1.4-1.4M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
        </svg>
      )}
    </button>
  )
}
