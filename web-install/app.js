const registerServiceWorker = async () => {
  try {
    await navigator.serviceWorker.register("./sw.js");
    console.log("Service worker registered");
  } catch (e) {
    console.log(`Registration failed: ${e}`);
  }
};

if (navigator.serviceWorker) {
  registerServiceWorker();
}

// Feature detection.
if (!navigator.install) {
  console.error("navigator.install is not available.");
}

// Intended Use Cases
const sameOriginZeroParamsBtn = document.getElementById("installSameOriginZeroParams");
const crossOriginOneParamBtn = document.getElementById("installCrossOriginOneParam");
const crossOriginParamsTwoParamsBtn = document.getElementById("installCrossOriginTwoParams");
const installCrossOriginScreenshotsBtn = document.getElementById("installCrossOriginScreenshots");
// DataError Cases
const installOneParamNoDefinedIdBtn = document.getElementById("installOneParamNoDefinedId");
const installTwoParamsMismatchedDefinedIdBtn = document.getElementById("installTwoParamsMismatchedDefinedId");
const installTwoParamsMismatchedNoDefinedIdBtn = document.getElementById("installTwoParamsMismatchedNoDefinedId");
// TypeError Cases
const installOneParamUndefinedBtn = document.getElementById("installOneParamUndefined");
const installOneParamInvalidUrlBtn = document.getElementById("installOneParamInvalidUrl");
const installTwoParamsUndefinedUrlBtn = document.getElementById("installTwoParamsUndefinedUrl");
const installTwoParamsUndefinedManifestIdBtn = document.getElementById("installTwoParamsUndefinedManifestId");
// Edge Cases - Installing self with params
const sameOriginOneParamBtn = document.getElementById("installSameOriginOneParam");
const sameOriginTwoParamsBtn = document.getElementById("installSameOriginTwoParams");

// ------- HANDLER FUNCTIONS --------
// Intended Use Cases

// Same-origin with 0 params.
sameOriginZeroParamsBtn.addEventListener("click", async() => {
  try {
    await navigator.install().then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});

// Cross-origin with 1 param.
crossOriginOneParamBtn.addEventListener("click", async() => {
  try {
    let install_url = "https://mustjab.github.io/";
    await navigator.install(install_url).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});

// Cross-origin with 2 params.
crossOriginParamsTwoParamsBtn.addEventListener("click", async() => {
  try {
    // Make sure to update the visible code sample in index.html when updating
    // this.
    let manifest_id = "https://diek.us/bubble/index.html";
    let install_url = "https://diek.us/bubble/";
    await navigator.install(install_url, manifest_id).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});

// A PWA that shows the detailed install dialog. For internal testing.
// As of 2025-07-02: detailed install dialog is not yet supported.
installCrossOriginScreenshotsBtn.addEventListener("click", async() => {
  try {
    let install_url = "https://squoosh.app/";
    let manifest_id = "https://squoosh.app/?utm_medium=PWA&utm_source=launcher";
    await navigator.install(install_url, manifest_id).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});

// DataError Cases

// 1 param install url with no id defined in the web app manifest.
installOneParamNoDefinedIdBtn.addEventListener("click", async() => {
  try {
    // Amanda's web install sample app that doesn't have an ID defined in the manifest.
    let install_url = "https://amandabaker.github.io/pwa/web-install/index.html";
    await navigator.install(install_url).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});

// 2 param install url WITH an id defined in the manifest, but mismatched input param.
installTwoParamsMismatchedDefinedIdBtn.addEventListener("click", async() => {
  try {
    let install_url = "https://mustjab.github.io/";
    let manifest_id = "mismatched-manifest-id";
    await navigator.install(install_url, manifest_id).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});
// 2 param install url WITHOUT an id defined in the manifest, mismatched input param.
installTwoParamsMismatchedNoDefinedIdBtn.addEventListener("click", async() => {
  try {
    let install_url = "https://amandabaker.github.io/pwa/web-install/index.html";
    let manifest = "mismatched-manifest-id";
    await navigator.install(install_url, manifest).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});

// V8 TypeError Cases

installOneParamUndefinedBtn.addEventListener("click", async() => {
  try {
    let install_url;
    await navigator.install(install_url).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});

installOneParamInvalidUrlBtn.addEventListener("click", async() => {
  try {
    await navigator.install("badurl").then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});

installTwoParamsUndefinedUrlBtn.addEventListener("click", async() => {
  try {
    let install_url;
    let manifest_id = "https://diek.us/bubble/index.html";
    await navigator.install(install_url, manifest_id).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});

installTwoParamsUndefinedManifestIdBtn.addEventListener("click", async() => {
  try {
    let install_url = "https://kbhlee2121.github.io/pwa/web-install/index.html";
    let manifest_id;
    await navigator.install(install_url, manifest_id).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});

// Edge Cases - Installing self with params

// Same-origin with 1 param.
sameOriginOneParamBtn.addEventListener("click", async() => {
  try {
    let install_url = "https://kbhlee2121.github.io/pwa/web-install/index.html";
    await navigator.install(install_url).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});

// Same-origin with 2 params.
sameOriginTwoParamsBtn.addEventListener("click", async() => {
  try {
    let install_url = "https://kbhlee2121.github.io/pwa/web-install/index.html";
    let manifest_id = "https://kbhlee2121.github.io/WebInstallSample";
    await navigator.install(install_url, manifest_id).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});

// <install> Element Cases
if ('HTMLInstallElement' in window) {
  document.querySelectorAll('install').forEach((el, index) => {
    // Create identifier for debugging
    const installUrl = el.getAttribute('installurl') || 'current-page';
    const manifestId = el.getAttribute('manifestid') || 'default';
    const identifier = `install-${index} (${installUrl})`;
    
    el.addEventListener('promptaction', (event) => {
      console.log(`${identifier} - promptaction:`, event);
    });
    
    el.addEventListener('promptdismiss', (event) => {
      console.log(`${identifier} - promptdismiss:`, event);
    });

    // Listen for validation status changes
    el.addEventListener('validationstatuschange', (event) => {
      console.log(`${identifier} - validationstatuschange:`, {
        valid: event.target.valid,
        invalidReason: event.target.invalidReason,
        event: event
      });
    });
  });
} else {
  console.warn('HTMLInstallElement not supported');
}

