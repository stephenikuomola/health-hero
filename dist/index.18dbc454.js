// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gEwwu":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
// Here I want to initialize all the constants I will be working with.
const CM_TO_M = 1e2;
const EXPONENT = 2;
const STONE_TO_POUNDS = 14;
const POUNDS_TO_KILOGRAMS = 0.45359237;
const FOOT_TO_INCHES = 12;
const INCH_TO_METERS = 0.0254;
const M_TO_FEET = 3.28084;
const BMI_CONSTANT = 703;
const METRIC = "metric";
const IMPERIAL = "imperial";
// Making use of Object-Oriented-Programming, I will be creating an objects that will group the BMI classification and the ranges
class BmiCategoryRange {
    constructor(category, min, max){
        this.category = category;
        this.minBmi = min;
        this.maxBmi = max;
    }
}
const underWeight = new BmiCategoryRange("underweight", -Infinity, 18.5);
const healthyWeight = new BmiCategoryRange("healthy weight", 18.5, 24.9);
const overWeight = new BmiCategoryRange("overweight", 25, 29.9);
const obese = new BmiCategoryRange("obese", 30, Infinity);
// I need to create a list of the ranges and their categories in an array. So an array of objects.
const bmiCategories = [
    underWeight,
    healthyWeight,
    overWeight,
    obese
];
// Create a function that does the conversion of the metric units to kg and meters
function metricKgM(kilogram, centimeters) {
    const kilograms = parseFloat(kilogram.toFixed(1));
    const meters = parseFloat((centimeters / CM_TO_M).toFixed(2));
    return new Metric(kilograms, meters);
}
// Create a function that does the conversion of the imperial units to hg and metres.
function imperialKgM(stone, pounds, feet, inches) {
    const kilograms = parseFloat(((stone * STONE_TO_POUNDS + pounds) * POUNDS_TO_KILOGRAMS).toFixed(1));
    const meters = parseFloat(((feet * FOOT_TO_INCHES + inches) * INCH_TO_METERS).toFixed(2));
    return new Imperial(kilograms, meters);
}
// Create a base class called Units since The Metric class and the Imperial but have some common functionalities
class Units {
    constructor(weight, height){
        this._weight = weight;
        this._height = height;
        this._calcBMI();
        this._getWeightClassification();
    }
    _calcBMI() {
        this.BMI = parseFloat((this._weight / this._height ** EXPONENT).toFixed(1));
    }
    _getBmiCategory() {
        for (const bmiCategory of bmiCategories){
            if ((bmiCategory.minBmi === -Infinity || this.BMI >= bmiCategory.minBmi) && (bmiCategory.maxBmi === Infinity || this.BMI <= bmiCategory.maxBmi)) return bmiCategory;
        }
    }
    _getWeightClassification() {
        const bmiCategory = this._getBmiCategory();
        this.classification = bmiCategory.category;
    }
    _getIdealWeightRangesInKgs() {
        const bmiCategory = this._getBmiCategory();
        const minIdealWeightInKg = bmiCategory.minBMI === -Infinity ? null : parseFloat((bmiCategory.minBmi * this._height ** EXPONENT).toFixed(1));
        const maxIdealWeightInKg = parseFloat(bmiCategory.maxBMI === Infinity ? null : (bmiCategory.maxBmi * this._height ** EXPONENT).toFixed(1));
        this._idealWeightRangesInKgs = new Array(minIdealWeightInKg, maxIdealWeightInKg);
        return this._idealWeightRangesInKgs;
    }
}
// Metric
class Metric extends Units {
    constructor(weight, height){
        super(weight, height);
        this.#getIdealWeightMessage();
    }
    #getIdealWeightMessage() {
        if (this.classification == underWeight.category) this.idealWeightMessage = `${this._getIdealWeightRangesInKgs()[1]}kgs and below`;
        else if (this.classification == obese.category) this.idealWeightMessage = `${this._getIdealWeightRangesInKgs()[0]}kgs and above`;
        else this.idealWeightMessage = `${this._getIdealWeightRangesInKgs()[0]}kgs - ${this._getIdealWeightRangesInKgs()[1]}kgs`;
    }
}
// Imperial
class Imperial extends Units {
    #feet;
    #inches;
    #idealWeightRangesInStLbs;
    constructor(weight, height){
        super(weight, height);
        this.#imperialHeightFtIn();
        this.#getIdealWeightRangesInStAndLbs();
        this.#getIdealWeightMessage();
    }
    #imperialHeightFtIn() {
        const heightInFeet = this._height * M_TO_FEET;
        // We need to extract the whole number of feet and the remaining inches
        this.#feet = Math.floor(heightInFeet);
        this.#inches = Math.round((heightInFeet - this.#feet) * FOOT_TO_INCHES);
    }
    #getIdealWeightRangesInStAndLbs() {
        const bmiCategory = this._getBmiCategory();
        // Convert the height to inches
        const heightInInches = this.#feet * FOOT_TO_INCHES + this.#inches;
        // Calculate the minimum and maximum ideal weights in pounds
        const minIdealWeightInPounds = bmiCategory.minBmi === -Infinity ? null : Math.trunc(bmiCategory.minBmi * Math.pow(heightInInches, EXPONENT) / BMI_CONSTANT % STONE_TO_POUNDS);
        const maxIdealWeightInPounds = bmiCategory.maxBmi === Infinity ? null : Math.trunc(bmiCategory.maxBmi * Math.pow(heightInInches, EXPONENT) / BMI_CONSTANT % STONE_TO_POUNDS);
        const minIdealWeightInStone = bmiCategory.minBmi === -Infinity ? null : Math.trunc(bmiCategory.minBmi * Math.pow(heightInInches, EXPONENT) / BMI_CONSTANT / STONE_TO_POUNDS);
        const maxIdealWeightInStone = bmiCategory.maxBmi == Infinity ? null : Math.trunc(bmiCategory.maxBmi * Math.pow(heightInInches, EXPONENT) / BMI_CONSTANT / STONE_TO_POUNDS);
        this.#idealWeightRangesInStLbs = new Array(minIdealWeightInStone, minIdealWeightInPounds, maxIdealWeightInStone, maxIdealWeightInPounds);
        return this.#idealWeightRangesInStLbs;
    }
    #getIdealWeightMessage() {
        if (this.classification == underWeight.category) this.idealWeightMessage = `${this.#getIdealWeightRangesInStAndLbs()[2]}st ${this.#getIdealWeightRangesInStAndLbs()[3]}lbs and below`;
        else if (this.classification == obese.category) this.idealWeightMessage = `${this.#getIdealWeightRangesInStAndLbs()[0]}st ${this.#getIdealWeightRangesInStAndLbs()[1]}lbs and above`;
        else this.idealWeightMessage = `${this.#getIdealWeightRangesInStAndLbs()[0]}st ${this.#getIdealWeightRangesInStAndLbs()[1]}lbs - ${this.#getIdealWeightRangesInStAndLbs()[2]}st ${this.#getIdealWeightRangesInStAndLbs()[3]}lbs`;
    }
}
class AppComponent {
    #metricRadio = document.getElementById("metric");
    #imperialRadio = document.getElementById("imperial");
    #kgInput = document.getElementById("weight-in-kg");
    #cmInput = document.getElementById("height-in-cm");
    #stInput = document.getElementById("weight-in-stone");
    #lbsInput = document.getElementById("weight-in-pounds");
    #ftInput = document.getElementById("height-in-feet");
    #inInput = document.getElementById("height-in-inches");
    #metricGroup = document.getElementById("metric-inputs");
    #imperialGroup = document.getElementById("imperial-inputs");
    #displayResult = document.querySelector("div[class='display-result']");
    constructor(){
        this.#metricRadio.addEventListener("change", this.#selectUnit.bind(this));
        this.#imperialRadio.addEventListener("change", this.#selectUnit.bind(this));
        this.#kgInput.addEventListener("input", this.#handleValidationAndCalculation.bind(this));
        this.#cmInput.addEventListener("input", this.#handleValidationAndCalculation.bind(this));
        this.#stInput.addEventListener("input", this.#handleValidationAndCalculation.bind(this));
        this.#lbsInput.addEventListener("input", this.#handleValidationAndCalculation.bind(this));
        this.#ftInput.addEventListener("input", this.#handleValidationAndCalculation.bind(this));
        this.#inInput.addEventListener("input", this.#handleValidationAndCalculation.bind(this));
    }
    // Toggle the radio buttons functionality.
    #selectUnit(evtObj) {
        const selectedUnit = evtObj.target.value;
        if (selectedUnit == METRIC) {
            this.#metricGroup.classList.add("active");
            this.#imperialGroup.classList.remove("active");
        }
        if (selectedUnit == IMPERIAL) {
            this.#metricGroup.classList.remove("active");
            this.#imperialGroup.classList.add("active");
        }
    }
    // Handle input validation and calculation.
    #handleValidationAndCalculation() {
        let unit;
        // So we need to know which radio button has been clicked to enable validate its respective input.
        if (this.#metricRadio.checked) {
            const kg = parseFloat(this.#kgInput.value.trim());
            const cm = parseFloat(this.#cmInput.value.trim());
            if (!isFinite(kg) || !isFinite(cm) || kg <= 0 || cm <= 0) {
                this.#showErrorMessage(kg, this.#kgInput);
                this.#showErrorMessage(cm, this.#cmInput);
                return;
            }
            this.#removeErrorMessage(this.#cmInput, "");
            this.#removeErrorMessage(this.#kgInput, "");
            unit = metricKgM(kg, cm);
        }
        if (this.#imperialRadio.checked) {
            const st = parseFloat(this.#stInput.value.trim());
            const lbs = parseFloat(this.#lbsInput.value.trim());
            const ft = parseFloat(this.#ftInput.value.trim());
            const inches = parseFloat(this.#inInput.value.trim());
            if (st < 0 || lbs < 0 || ft < 0 || inches < 0 || st <= 0 && lbs <= 0 || ft <= 0 && inches <= 0 || !isFinite(st) || !isFinite(lbs) || !isFinite(ft) || !isFinite(inches)) {
                this.#showErrorMessage(st, this.#stInput);
                this.#showErrorMessage(lbs, this.#lbsInput);
                this.#showErrorMessage(ft, this.#ftInput);
                this.#showErrorMessage(inches, this.#inInput);
                return;
            }
            this.#removeErrorMessage(this.#stInput, "");
            this.#removeErrorMessage(this.#lbsInput, "");
            this.#removeErrorMessage(this.#ftInput, "");
            this.#removeErrorMessage(this.#inInput, "");
            unit = imperialKgM(st, lbs, ft, inches);
        }
        this.#renderDisplayResult(unit);
    }
    #removeErrorMessage(input, message) {
        input.nextElementSibling.nextElementSibling.innerText = message;
        input.setAttribute("aria-invalid", "false");
        input.nextElementSibling.nextElementSibling.setAttribute("hidden", "");
    }
    #showErrorMessage(value, input) {
        if (!isFinite(value)) {
            this.#errorMessage(input, "Enter a number");
            this.#resetDisplayResult();
        } else if (value <= 0) {
            this.#errorMessage(input, "Must be greater than 0");
            this.#resetDisplayResult();
        } else this.#removeErrorMessage(input, "");
    }
    #errorMessage(input, message) {
        input.nextElementSibling.nextElementSibling.innerText = message;
        input.setAttribute("aria-invalid", "true");
        input.nextElementSibling.nextElementSibling.removeAttribute("hidden");
    }
    #resetDisplayResult() {
        this.#displayResult.innerHTML = `
    <p><strong>Welcome!</strong></p>
    <p>
      Enter your height and weight and you’ll see your BMI result here
    </p>`;
    }
    #renderDisplayResult(unit) {
        this.#displayResult.innerHTML = `
    <div class="display-result__details">
      <p>Your BMI is... <br/><strong>${unit.BMI}</strong></p>
      <p> Your BMI suggests you're ${unit.classification == "healthy weight" ? "a" : ""} ${unit.classification}. Your ideal weight is between   <strong>${unit.idealWeightMessage}</strong>.</p>
    </div> 
  `;
    }
}
new AppComponent();
// Animations
class BootStrapAnimation {
    #section;
    constructor(section){
        this.#section = section;
        this.#observeIntersection();
    }
    #handleIntersection(entries, observer) {
        for (const entry of entries){
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        }
    }
    #observeIntersection() {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.3
        };
        const observer = new IntersectionObserver(this.#handleIntersection, observerOptions);
        observer.observe(this.#section);
    }
}
function animateOnIt() {
    const sections = document.querySelectorAll("section");
    for (const section of sections)new BootStrapAnimation(section);
}
animateOnIt();

},{}]},["gEwwu","1SICI"], "1SICI", "parcelRequire63ab")

//# sourceMappingURL=index.18dbc454.js.map
