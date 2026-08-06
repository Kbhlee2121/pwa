// <install> Element Cases
if ('HTMLInstallElement' in window) {
  document.querySelectorAll('install').forEach((el, index) => {
    // Create identifier for debugging
    const manifest = el.getAttribute('manifest') || 'current-page';
    const manifestId = el.getAttribute('manifestid') || 'default';
    const identifier = `install-${index} (${manifest})`;

    // Listen for the single install result event.
    el.addEventListener('installresult', (event) => {
      console.log(`${identifier} - installresult:`, {
        result: event.result,
        event: event
      });
    });
  });
} else {
  console.warn('HTMLInstallElement not supported');
}