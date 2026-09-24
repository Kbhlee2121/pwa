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
const installTwoParamsUndefinedManifestIdBtn = document.getElementById("installTwoParamsUndefinedManifestId");
const installCrossOriginScreenshotsBtn = document.getElementById("installCrossOriginScreenshots");
// DataError Cases
const installOneParamInvalidUrlBtn = document.getElementById("installOneParamInvalidUrl");
const installOneParamNoDefinedIdBtn = document.getElementById("installOneParamNoDefinedId");
const installUndefinedManifestIdNoDefinedIdBtn = document.getElementById("installUndefinedManifestIdNoDefinedId");
const installTwoParamsMismatchedDefinedIdBtn = document.getElementById("installTwoParamsMismatchedDefinedId");
const installTwoParamsMismatchedNoDefinedIdBtn = document.getElementById("installTwoParamsMismatchedNoDefinedId");
// TypeError Cases
const installMissingManifestBtn = document.getElementById("installMissingManifest");
const installEmptyManifestBtn = document.getElementById("installEmptyManifest");
const installMalformedManifestBtn = document.getElementById("installMalformedManifest");
const installEmptyManifestIdBtn = document.getElementById("installEmptyManifestId");
const installMalformedManifestIdBtn = document.getElementById("installMalformedManifestId");
const installOneParamUndefinedBtn = document.getElementById("installOneParamUndefined");
const installTwoParamsUndefinedUrlBtn = document.getElementById("installTwoParamsUndefinedUrl");
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

// Cross-origin, manifest only (the manifest defines its own `id`).
crossOriginOneParamBtn.addEventListener("click", async() => {
  try {
    let manifest = "https://mustjab.github.io/manifest.json";
    await navigator.install({ manifest }).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});

// Cross-origin, manifest + manifestId (manifest has no `id`).
crossOriginParamsTwoParamsBtn.addEventListener("click", async() => {
  try {
    // Make sure to update the visible code sample in index.html when updating
    // this.
    let manifestId = "https://isitchristmas.com/";
    let manifest = "https://isitchristmas.com/manifest.json";
    await navigator.install({ manifest, manifestId }).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});

// An omitted manifestId is read from the manifest's custom `id`.
installTwoParamsUndefinedManifestIdBtn.addEventListener("click", async() => {
  try {
    let manifest = "https://kbhlee2121.github.io/pwa/web-install/manifest.webmanifest";
    let manifestId;
    await navigator.install({ manifest, manifestId }).then((result) => {
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
    let manifest = "https://squoosh.app/manifest.json";
    let manifestId = "https://squoosh.app/?utm_medium=PWA&utm_source=launcher";
    await navigator.install({ manifest, manifestId }).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});

// DataError Cases

installOneParamInvalidUrlBtn.addEventListener("click", async() => {
  try {
    await navigator.install({ manifest: "badurl" }).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  }
});

// 1 param manifest URL with no id defined in the web app manifest.
installOneParamNoDefinedIdBtn.addEventListener("click", async() => {
  try {
    // Amanda's web install sample app that doesn't have an ID defined in the manifest.
    let manifest = "https://amandabaker.github.io/pwa/web-install/manifest.webmanifest";
    await navigator.install({ manifest }).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});

// An omitted manifestId is invalid when the manifest has no custom `id`.
installUndefinedManifestIdNoDefinedIdBtn.addEventListener("click", async() => {
  try {
    let manifest = "https://isitchristmas.com/manifest.json";
    let manifestId;
    await navigator.install({ manifest, manifestId }).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  }
});

// 2 param manifest URL WITH an id defined in the manifest, but mismatched input param.
installTwoParamsMismatchedDefinedIdBtn.addEventListener("click", async() => {
  try {
    let manifest = "https://mustjab.github.io/manifest.json";
    let manifestId = "mismatched-manifest-id";
    await navigator.install({ manifest, manifestId }).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});
// 2 param manifest URL WITHOUT an id defined in the manifest, mismatched input param.
installTwoParamsMismatchedNoDefinedIdBtn.addEventListener("click", async() => {
  try {
    let manifest = "https://amandabaker.github.io/pwa/web-install/manifest.webmanifest";
    let manifestId = "mismatched-manifest-id";
    await navigator.install({ manifest, manifestId }).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});

// V8 TypeError Cases

installMissingManifestBtn.addEventListener("click", async() => {
  try {
    await navigator.install({}).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  }
});

installEmptyManifestBtn.addEventListener("click", async() => {
  try {
    await navigator.install({ manifest: "" }).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  }
});

installMalformedManifestBtn.addEventListener("click", async() => {
  try {
    await navigator.install({ manifest: "https://[" }).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  }
});

installEmptyManifestIdBtn.addEventListener("click", async() => {
  try {
    const manifest = "https://mustjab.github.io/manifest.json";
    const manifestId = "";
    await navigator.install({ manifest, manifestId }).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  }
});

installMalformedManifestIdBtn.addEventListener("click", async() => {
  try {
    const manifest = "https://mustjab.github.io/manifest.json";
    const manifestId = "https://[";
    await navigator.install({ manifest, manifestId }).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  }
});

installOneParamUndefinedBtn.addEventListener("click", async() => {
  try {
    let manifest;
    await navigator.install({ manifest }).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});

installTwoParamsUndefinedUrlBtn.addEventListener("click", async() => {
  try {
    let manifest;
    let manifestId = "https://isitchristmas.com/";
    await navigator.install({ manifest, manifestId }).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});

// Edge Cases - Installing self with params

// Same-origin, manifest only (the manifest defines its own `id`).
sameOriginOneParamBtn.addEventListener("click", async() => {
  try {
    let manifest = "https://kbhlee2121.github.io/pwa/web-install/manifest.webmanifest";
    await navigator.install({ manifest }).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});

// Same-origin, manifest + manifestId.
sameOriginTwoParamsBtn.addEventListener("click", async() => {
  try {
    let manifest = "https://kbhlee2121.github.io/pwa/web-install/manifest.webmanifest";
    let manifestId = "https://kbhlee2121.github.io/WebInstallSample";
    await navigator.install({ manifest, manifestId }).then((result) => {
      console.log(result);
    });
  } catch (err) {
    console.error(err);
  } 
});
