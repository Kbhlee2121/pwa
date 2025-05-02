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
const sameOriginTwoParamsBtn = document.getElementById("installSameOriginTwoParamsSwitched");
const sameOriginZeroParamsBtn = document.getElementById("installSameOriginZeroParams");
const sameOriginTwoParamSwitchedBtn = document.getElementById("installSameOriginTwoParamsSwitched");
const crossOriginParamsSwitchedBtn = document.getElementById("installCrossOriginParamsSwitched");
const installOneParamNoDefinedIdBtn = document.getElementById("installOneParamNoDefinedId");
const installTwoParamsMismatchedDefinedIdBtn = document.getElementById("installTwoParamsMismatchedDefinedId");
const installTwoParamsMismatchedNoDefinedIdBtn = document.getElementById("installTwoParamsMismatchedNoDefinedId");
const sameOriginOneParamBtn = document.getElementById("installSameOriginOneParam");
const crossOriginOneParamBtn = document.getElementById("installCrossOriginOneParam");
const installOneParamUndefinedBtn = document.getElementById("installOneParamUndefined");
const installOneParamInvalidUrlBtn = document.getElementById("installOneParamInvalidUrl");
const installTwoParamsUndefinedUrlBtn = document.getElementById("installTwoParamsUndefinedUrl");
const installTwoParamsUndefinedManifestIdBtn = document.getElementById("installTwoParamsUndefinedManifestId");
const installCrossOriginScreenshotsBtn = document.getElementById("installCrossOriginScreenshots");
// Handle install buttons.
// Cross-origin requires 2 parameters.
const installCrossOrigin = (e) => {
  // Make sure to update the visible code sample in index.html when updating
  // this.
  let manifest_id = "https://diek.us/bubble/index.html";
  let install_url = "https://diek.us/bubble/";
  navigator.install(manifest_id, install_url);
};

const installCrossOriginOneParam = (e) => {
  let install_url = "https://mustjab.github.io/";
  navigator.install(install_url);
}

// 1 param install url with no id defined in the web app manifest.
const installOneParamNoDefinedId = (e) => {
  // Amanda's web install sample app that doesn't have an ID defined in the manifest.
  let install_url = "https://amandabaker.github.io/pwa/web-install/index.html";
  navigator.install(install_url);
}

// 2 param install url WITH an id defined in the manifest, but mismatched input param
const installTwoParamsMismatchedDefinedId = (e) => {
  let install_url = "https://mustjab.github.io/";
  let manifest_id = "mismatched-manifest-id";
  navigator.install(install_url, manifest_id);
}

const installTwoParamsMismatchedNoDefinedId = (e) => {
  let install_url = "https://amandabaker.github.io/pwa/web-install/index.html";
  let manifest = "mismatched-manifest-id";
  navigator.install(install_url, manifest);
}

// Same-origin with 2 params.
const installSameOriginTwoParams = (e) => {
  let manifest_id = "https://kbhlee2121.github.io/WebInstallSample";
  let install_url = "https://kbhlee2121.github.io/pwa/web-install/index.html";
  navigator.install(manifest_id, install_url);
}

// Cross-origin with 2 params switched.
const installCrossOriginParamsSwitched = (e) => {
  // Make sure to update the visible code sample in index.html when updating
  // this.
  let manifest_id = "https://diek.us/bubble/index.html";
  let install_url = "https://diek.us/bubble/";
  navigator.install(install_url, manifest_id);
};

const installCrossOriginScreenshots = (e) => {
  let install_url = "https://earth.google.com/";
  let manifest_id = "https://earth.google.com/";
  navigator.install(install_url, manifest_id);
}

// Same-origin with 2 params switched.
const installSameOriginTwoParamsSwitched = (e) => {
  let install_url = "https://kbhlee2121.github.io/pwa/web-install/index.html";
  let manifest_id = "https://kbhlee2121.github.io/WebInstallSample";
  navigator.install(install_url, manifest_id);
}

// Same-origin with 0 params.
const installSameOriginZeroParams = (e) => {
  // Uncomment when 0 param is supported end to end.
  navigator.install();
  console.log("installSameOriginZeroParams button clicked.");
}

const installSameOriginOneParam = (e) => {
  let install_url = "https://kbhlee2121.github.io/pwa/web-install/index.html";
  navigator.install(install_url);
}

const installOneParamUndefined = (e) => {
  let install_url;
  navigator.install(install_url);
}

const installOneParamInvalidUrl = (e) => {
  navigator.install("badurl");
}

const installTwoParamsUndefinedUrl = (e) => {
  let install_url;
  let manifest_id = "https://diek.us/bubble/index.html";
  navigator.install(install_url, manifest_id);
}

const installTwoParamsUndefinedManifestId = (e) => {
  let install_url = "https://kbhlee2121.github.io/pwa/web-install/index.html";
  let manifest_id;
  navigator.install(install_url, manifest_id);
}

crossOriginBtn.addEventListener("click", installCrossOrigin);
sameOriginTwoParamsBtn.addEventListener("click", installSameOriginTwoParams);
sameOriginZeroParamsBtn.addEventListener("click", installSameOriginZeroParams);
sameOriginTwoParamSwitchedBtn.addEventListener("click", installSameOriginTwoParamsSwitched);
crossOriginParamsSwitchedBtn.addEventListener("click", installCrossOriginParamsSwitched);
installOneParamNoDefinedIdBtn.addEventListener("click", installOneParamNoDefinedId);
installTwoParamsMismatchedDefinedIdBtn.addEventListener("click", installTwoParamsMismatchedDefinedId);
installTwoParamsMismatchedNoDefinedIdBtn.addEventListener("click", installTwoParamsMismatchedNoDefinedId);
sameOriginOneParamBtn.addEventListener("click", installSameOriginOneParam);
crossOriginOneParamBtn.addEventListener("click", installCrossOriginOneParam);
installOneParamUndefinedBtn.addEventListener("click", installOneParamUndefined);
installOneParamInvalidUrlBtn.addEventListener("click", installOneParamInvalidUrl);
installTwoParamsUndefinedUrlBtn.addEventListener("click", installTwoParamsUndefinedUrl);
installTwoParamsUndefinedManifestIdBtn.addEventListener("click", installTwoParamsUndefinedManifestId);
installCrossOriginScreenshotsBtn.addEventListener("click", installCrossOriginScreenshots);
// const installCustom = (e) => {}
// document.getElementById("installCrossOrigin").addEventListener("click", installCrossOrigin);
// document.getElementById("installSameOriginTwoParams").addEventListener("click", installSameOriginTwoParams);
// document.getElementById("installSameOriginZeroParams").addEventListener("click", installSameOriginZeroParams);
// document.getElementById("installPreset").addEventListener("click", installPreset);
// document.getElementById("installCustom").addEventListener("click", installCustom);
