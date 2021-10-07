// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector('#html');
var style = document.querySelector('#style');
var n = 0;
var str = '/* hello\n * \u6211\u4EEC\u6765\u505A\u4E00\u4E2A\u592A\u6781\u9634\u9633\u56FE\n * \u9996\u5148\u51C6\u5907\u4E00\u4E2A div\n */\n#div1{\n    border: 1px solid red;\n    width: 200px;\n    height: 200px;\n}\n/* \u7136\u540E\uFF0C\u628A div \u53D8\u6210\u4E00\u4E2A\u5706*/\n#div1{\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0,0,0,.5);\n    border: none;\n}\n/* \u592A\u6781\u56FE\u662F\u7531\u53CC\u9634\u9633\u9C7C\u7EC4\u6210\u7684\n * \u4E00\u9ED1\u4E00\u767D\n */\n#div1{\n    background: rgb(255,255,255);\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/* \u753B\u4E0A\u9634\u9633\u9C7C */\n#div1::before{\n    width: 100px;\n    height: 100px;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #fff;\n    border-radius: 50%;\n    background: rgb(255,255,255);\n    background: rgb(0,0,0);\n    background: rgb(0,0,0);\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n#div1::after{\n    width: 100px;\n    height: 100px;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #000;\n    border-radius: 50%;\n    background: rgb(255,255,255);\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n/*\u6700\u540E\u8BA9\u592A\u6781\u56FE\u52A8\u8D77\u6765*/\n@keyframes x{\n    from{\n        transform: rotate(0deg);\n    }\n    to{\n        transform: rotate(360deg);\n    }\n}\n#div1{\n    animation: x 10s infinite linear;\n}\n';
// CSS 分号不能省略！
// CSS 分号不能省略！！
// CSS 分号不能省略！！！
var str2 = '';

// str = str.replace(/\n/g, "<br>")
// 利用正则表达式和 replace 把所有回车改成换行，但是会先打出"<"，再回车


function step() {
    setTimeout(function () {
        // str2 += str[n] === '\n' ? '<br>' : str[n]
        if (str[n] === '\n') {
            // 如果是回车就<br>
            str2 += '<br>';
        } else if (str[n] === ' ') {
            // 如果是空格改成'&nbsp'
            str2 += '&nbsp;';
        } else {
            // 否则就照搬
            str2 += str[n];
        }

        html.innerHTML = str2;
        style.innerHTML = str.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);

        if (n < str.length - 1) {
            n++;
            step();
        }
    }, 50);
}
step();

// let id = setInterval(() => {
//     n++
//     demo.innerHTML = n
//     if (n = 10)
//         clearInterval(id)
// }, 1000)
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.b63dcbee.map