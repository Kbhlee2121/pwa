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

const crossOriginBtn = document.getElementById("installCrossOrigin");
const sameOriginTwoParamsBtn = document.getElementById("installSameOriginTwoParams");
const sameOriginZeroParamsBtn = document.getElementById("installSameOriginZeroParams");

// Handle install buttons.
// Cross-origin requires 2 parameters.
const installCrossOrigin = (e) => {
  // Make sure to update the visible code sample in index.html when updating
  // this.
  let manifest_id = "https://diek.us/bubble/index.html";
  let install_url = "https://diek.us/bubble/";
  navigator.install(manifest_id, install_url);
};

// Same-origin with 2 params.
const installSameOriginTwoParams = (e) => {
  let manifest_id = "https://kbhlee2121.github.io/pwa/web-install/index.html";
  let install_url = "https://kbhlee2121.github.io/pwa/web-install/";
  navigator.install(manifest_id, install_url);
}

// Same-origin with 0 params.
const installSameOriginZeroParams = (e) => {
  // navigator.install();
  console.log("installSameOriginZeroParams button clicked");
}

crossOriginBtn.addEventListener("click", installCrossOrigin);
sameOriginTwoParamsBtn.addEventListener("click", installSameOriginTwoParams);
sameOriginZeroParamsBtn.addEventListener("click", installSameOriginZeroParams);



// const installCustom = (e) => {}
// document.getElementById("installCrossOrigin").addEventListener("click", installCrossOrigin);
// document.getElementById("installSameOriginTwoParams").addEventListener("click", installSameOriginTwoParams);
// document.getElementById("installSameOriginZeroParams").addEventListener("click", installSameOriginZeroParams);
// document.getElementById("installPreset").addEventListener("click", installPreset);
// document.getElementById("installCustom").addEventListener("click", installCustom);
