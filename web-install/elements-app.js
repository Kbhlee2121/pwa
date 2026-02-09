// <install> Element Cases
if ('HTMLInstallElement' in window) {
  document.querySelectorAll('install').forEach((el, index) => {
    // Create identifier for debugging
    const installUrl = el.getAttribute('installurl') || 'current-page';
    const manifestId = el.getAttribute('manifestid') || 'default';
    const identifier = `install-${index} (${installUrl})`;
    
    el.addEventListener('promptaction', (event) => {
      console.log(`${identifier} - promptaction:`, {
        valid: event.target.isValid,
        invalidReason: event.target.invalidReason,
        event: event
      });
    });
    
    el.addEventListener('promptdismiss', (event) => {
      console.log(`${identifier} - promptdismiss:`, {
        valid: event.target.isValid,
        invalidReason: event.target.invalidReason,
        event: event
      });
    });

    // Listen for validation status changes
    el.onvalidationstatuschange = (event) => {
      console.log(`${identifier} - validationstatuschange:`, {
        valid: event.target.isValid,
        invalidReason: event.target.invalidReason,
        event: event
      });
    };
  });
} else {
  console.warn('HTMLInstallElement not supported');
}