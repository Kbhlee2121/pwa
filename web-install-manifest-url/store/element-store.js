if ('HTMLInstallElement' in window) {
    const installElements = document.querySelectorAll('install');

    installElements.forEach((button) => {
        button.addEventListener('installresult', (event) => {
            const label = button.id || button.getAttribute('manifest') || 'same-origin';
            switch (event.result) {
                case 'success':
                    console.log(`Install succeeded: ${label}`);
                    break;
                case 'aborted':
                    console.log(`Install aborted: ${label}`);
                    break;
                case 'invalid_data':
                    console.log(`Install data invalid: ${label}`);
                    break;
            }
        });
    });
} else {
    console.warn('HTMLInstallElement not supported');
}