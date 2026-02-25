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

    // Listen for validation status changes.
    el.onvalidationstatuschange = (event) => {
      console.log(`${identifier} - validationstatuschange:`, {
        valid: event.target.isValid,
        invalidReason: event.target.invalidReason,
        event: event
      });
    };

    // Option A: Listen for install result directly on the event.
    el.addEventListener('installresult', (event) => {
      console.log(`${identifier} - installresult on event:`, {
        eventInstallResult: event.result,
        event: event
      });
    });

     // Option B:Listen for install result for when the result is saved to the property.
    el.oninstallresult = (event) => {
      console.log(`${identifier} - installresult on element:`, {
        elementInstallResult: event.target.installResult,
        event: event
      });
    };
} else {
  console.warn('HTMLInstallElement not supported');
}