// <install> Element Cases
if ('HTMLInstallElement' in window) {
  document.querySelectorAll('install').forEach((el, index) => {
    // Create identifier for debugging
    const manifestAttribute = el.getAttribute('manifest');
    const identifier = `install-${index} (${manifestAttribute ?? 'current-page'})`;

    // Listen for the single install result event.
    el.addEventListener('installresult', (event) => {
      console.log(`${identifier} - installresult:`, {
        result: event.result,
        attributes: {
          manifest: el.getAttribute('manifest'),
          manifestId: el.getAttribute('manifestid')
        },
        properties: {
          manifest: el.manifest,
          manifestId: el.manifestId
        },
        event: event
      });
    });
  });
} else {
  console.warn('HTMLInstallElement not supported');
}