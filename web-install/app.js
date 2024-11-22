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

// Handle install buttons.
// Cross-origin requires 2 parameters.
const installCrossOrigin = (e) => {
  // Make sure to update the visible code sample in index.html when updating
  // this.
  let manifest_id = "https://microsoftedge.github.io/Demos/pwa-pwastore/";
  let install_url = manifest_id;
  navigator.install(manifest_id, install_url);
};

// Same-origin with 2 params.
const sameOriginTwoParams = (e) => {
  let manifest_id = "https://kbhlee2121.github.io/pwa/web-install/";
  let install_url = manifest_id;
  navigator.install(manifest_id, install_url);
}

// Same-origin with 0 params.
const sameOriginZeroParams = (e) => {
  navigator.install();
}

// const installCustom = (e) => {}

document.getElementById("installCrossOrigin").addEventListener("click", installCrossOrigin);
document.getElementById("sameOriginTwoParams").addEventListener("click", sameOriginTwoParams);
document.getElementById("sameOriginZeroParams").addEventListener("click", sameOriginZeroParams);
// document.getElementById("installPreset").addEventListener("click", installPreset);
// document.getElementById("installCustom").addEventListener("click", installCustom);
