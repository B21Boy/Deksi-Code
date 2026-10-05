// Applies the saved theme before first paint, so light-theme visitors never see a dark flash.
try {
  const theme = window.localStorage.getItem('theme')

  if (theme === 'light' || theme === 'dark') {
    document.documentElement.dataset.theme = theme
  }
} catch {
  // Storage can be unavailable (private mode); the default dark theme is used.
}
