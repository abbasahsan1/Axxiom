// This script prevents theme flickering during page load
(function() {
  try {
    const savedTheme = localStorage.getItem('theme') || 'system';
    if (savedTheme === 'dark' || 
        (savedTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {
    console.log('Theme initialization error:', e);
  }
})();