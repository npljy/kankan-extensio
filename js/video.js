function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
    function _regeneratorRuntime() {
      return e;
    };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (t, e, r) {
        t[e] = r.value;
      },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return (
      Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }),
      t[e]
    );
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return (t[e] = r);
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return { type: "normal", arg: t.call(e, r) };
    } catch (t) {
      return { type: "throw", arg: t };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g =
    (GeneratorFunctionPrototype.prototype =
    Generator.prototype =
      Object.create(p));
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await")
          ? e.resolve(h.__await).then(
              function (t) {
                invoke("next", t, i, a);
              },
              function (t) {
                invoke("throw", t, i, a);
              }
            )
          : e.resolve(h).then(
              function (t) {
                (u.value = t), i(u);
              },
              function (t) {
                return invoke("throw", t, i, a);
              }
            );
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return (r = r
          ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
          : callInvokeWithMethodAndArg());
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return { value: t, done: !0 };
      }
      for (n.method = i, n.arg = a; ; ) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;
        else if ("throw" === n.method) {
          if (o === h) throw ((o = s), n.arg);
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (((o = n.done ? s : l), p.arg === y)) continue;
          return { value: p.arg, done: n.done };
        }
        "throw" === p.type && ((o = s), (n.method = "throw"), (n.arg = p.arg));
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t)
      return (
        (r.delegate = null),
        ("throw" === n &&
          e.iterator["return"] &&
          ((r.method = "return"),
          (r.arg = t),
          maybeInvokeDelegate(e, r),
          "throw" === r.method)) ||
          ("return" !== n &&
            ((r.method = "throw"),
            (r.arg = new TypeError(
              "The iterator does not provide a '" + n + "' method"
            )))),
        y
      );
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type)
      return (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y;
    var a = i.arg;
    return a
      ? a.done
        ? ((r[e.resultName] = a.value),
          (r.next = e.nextLoc),
          "return" !== r.method && ((r.method = "next"), (r.arg = t)),
          (r.delegate = null),
          y)
        : a
      : ((r.method = "throw"),
        (r.arg = new TypeError("iterator result is not an object")),
        (r.delegate = null),
        y);
  }
  function pushTryEntry(t) {
    var e = { tryLoc: t[0] };
    1 in t && (e.catchLoc = t[1]),
      2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
      this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    (e.type = "normal"), delete e.arg, (t.completion = e);
  }
  function Context(t) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      t.forEach(pushTryEntry, this),
      this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length; )
              if (n.call(e, o))
                return (next.value = e[o]), (next.done = !1), next;
            return (next.value = t), (next.done = !0), next;
          };
        return (i.next = i);
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }),
    o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }),
    (GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      u,
      "GeneratorFunction"
    )),
    (e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return (
        !!e &&
        (e === GeneratorFunction ||
          "GeneratorFunction" === (e.displayName || e.name))
      );
    }),
    (e.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
          : ((t.__proto__ = GeneratorFunctionPrototype),
            define(t, u, "GeneratorFunction")),
        (t.prototype = Object.create(g)),
        t
      );
    }),
    (e.awrap = function (t) {
      return { __await: t };
    }),
    defineIteratorMethods(AsyncIterator.prototype),
    define(AsyncIterator.prototype, c, function () {
      return this;
    }),
    (e.AsyncIterator = AsyncIterator),
    (e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    defineIteratorMethods(g),
    define(g, u, "Generator"),
    define(g, a, function () {
      return this;
    }),
    define(g, "toString", function () {
      return "[object Generator]";
    }),
    (e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return (
        r.reverse(),
        function next() {
          for (; r.length; ) {
            var t = r.pop();
            if (t in e) return (next.value = t), (next.done = !1), next;
          }
          return (next.done = !0), next;
        }
      );
    }),
    (e.values = values),
    (Context.prototype = {
      constructor: Context,
      reset: function reset(e) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = t),
          this.tryEntries.forEach(resetTryEntry),
          !e)
        )
          for (var r in this)
            "t" === r.charAt(0) &&
              n.call(this, r) &&
              !isNaN(+r.slice(1)) &&
              (this[r] = t);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return (
            (a.type = "throw"),
            (a.arg = e),
            (r.next = n),
            o && ((r.method = "next"), (r.arg = t)),
            !!o
          );
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (
            o.tryLoc <= this.prev &&
            n.call(o, "finallyLoc") &&
            this.prev < o.finallyLoc
          ) {
            var i = o;
            break;
          }
        }
        i &&
          ("break" === t || "continue" === t) &&
          i.tryLoc <= e &&
          e <= i.finallyLoc &&
          (i = null);
        var a = i ? i.completion : {};
        return (
          (a.type = t),
          (a.arg = e),
          i
            ? ((this.method = "next"), (this.next = i.finallyLoc), y)
            : this.complete(a)
        );
      },
      complete: function complete(t, e) {
        if ("throw" === t.type) throw t.arg;
        return (
          "break" === t.type || "continue" === t.type
            ? (this.next = t.arg)
            : "return" === t.type
            ? ((this.rval = this.arg = t.arg),
              (this.method = "return"),
              (this.next = "end"))
            : "normal" === t.type && e && (this.next = e),
          y
        );
      },
      finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t)
            return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function _catch(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e, r, n) {
        return (
          (this.delegate = { iterator: values(e), resultName: r, nextLoc: n }),
          "next" === this.method && (this.arg = t),
          y
        );
      }
    }),
    e
  );
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
// cms资源站播放助手
(function () {
  var ACT_LIKE = "like"; // 行为：收藏
  var ACT_VISIT = "visit"; // 行为：观看
  var ACT_LIKE_PAGE = "open"; // 行为：打开收藏页面
  var loc = window.location.href;
  var locHash = window.location.hash;
  if (locHash.includes("kankan")) {
    likeFn();
  }
  if (loc.includes("moduzy")) {
    if (loc.includes("/vod/")) insertLikeBtn();
    var vodList = _$$(".content__playlist li") || [];
    var api = "https://jiexi.modujx01.com/?url=";
    vodList.forEach(function (li) {
      var adoc = _$$("a", li)[0];
      var xm = adoc.href;
      if (xm.includes("http")) {
        var _li$innerText;
        var nums = adoc.innerText;
        var num = nums ? nums.split("$")[0] : "";
        var _a = document.createElement("a");
        _a.href = xm;
        _a.target = "_blank";
        _a.className = "kk-btn d-i-b";
        _a.innerText = "\u64AD\u653E:".concat(num);
        !(
          li !== null &&
          li !== void 0 &&
          (_li$innerText = li.innerText) !== null &&
          _li$innerText !== void 0 &&
          _li$innerText.includes("全选")
        ) && li.append(_a);
      }
    });
  } else if (loc.includes("haohuazy") || loc.includes("haohuazyziyuan")) {
    if (loc.includes("detail")) insertLikeBtn();
    var _vodList = _$$(".vod-list .list-item") || [];
    var _api = "https://hhjiexi.com/play/?url=";
    var wraps = _$$(".vod-list h3");
    wraps.forEach(function (e) {
      if (e.innerText.includes("m3u8")) {
        e.id = "kk-play-m3u8";
      } else {
        e.id = "kk-play-yun";
      }
    });
    var title = _$(".vod-detail .vod-title");
    title.classList = title.classList + " flex-block center-items";
    title.innerHTML =
      title.innerHTML +
      '<span>&nbsp;&nbsp;[点击跳转到目标位置]==></span><a class="kk-btn d-i-b" target="_self" href="#kk-play-yun">yun</a><a class="kk-btn d-i-b" target="_self" href="#kk-play-m3u8">m3u8</a>';
    _vodList.forEach(function (li) {
      var xm = _$$("a", li)[0].href;
      if (xm.includes("http")) {
        var _li$innerText2;
        var nums = _$(".list-title", li).innerText;
        var num = nums ? nums.split("$")[0] : "";
        var _a = document.createElement("a");
        if (xm.includes(".m3u8")) {
          _a.href = _api + xm;
        } else {
          _a.href = xm;
        }
        _a.target = "_blank";
        _a.className = "kk-btn d-i-b";
        _a.innerText = "\u64AD\u653E:".concat(num);
        !(
          li !== null &&
          li !== void 0 &&
          (_li$innerText2 = li.innerText) !== null &&
          _li$innerText2 !== void 0 &&
          _li$innerText2.includes("全选")
        ) && li.append(_a);
      }
    });
  } else if (loc.includes("guangsuzy") || loc.includes("guangsuziyuan")) {
    if (loc.includes("detail")) insertLikeBtn();
    var _vodList2 = _$$(".dy-collect-list li") || [];
    var _api2 = "https://www.gszyv.com/m3u8/?url=";
    var _wraps = _$$(".dy-collect-video");
    _wraps.forEach(function (e) {
      if (e.innerText.includes(".m3u8")) {
        e.id = "kk-play-m3u8";
      } else {
        e.id = "kk-play-yun";
      }
    });
    var _title = _$(".dy-collect .dy-title");
    _title.classList = _title.classList + " flex-block center-items";
    _title.innerHTML =
      _title.innerHTML +
      '<span>&nbsp;&nbsp;[点击跳转到目标位置]==></span><a class="kk-btn d-i-b" target="_self" href="#kk-play-yun">yun</a><a class="kk-btn d-i-b" target="_self" href="#kk-play-m3u8">m3u8</a>';
    _vodList2.forEach(function (li) {
      var xm = _$$("a", li)[0].href;
      if (xm.includes("http")) {
        var _li$innerText3;
        var nums = _$(".c-name", li).innerText;
        var num = nums ? nums : "";
        var _a = document.createElement("a");
        if (xm.includes(".m3u8")) {
          _a.href = _api2 + xm;
        } else {
          _a.href = xm;
        }
        _a.target = "_blank";
        _a.className = "kk-btn d-i-b";
        _a.innerText = "\u64AD\u653E:".concat(num);
        !(
          li !== null &&
          li !== void 0 &&
          (_li$innerText3 = li.innerText) !== null &&
          _li$innerText3 !== void 0 &&
          _li$innerText3.includes("全选")
        ) && li.append(_a);
      }
    });
  } else if (loc.includes("hongniuzy") || loc.includes("hongniuziyuan")) {
    if (loc.includes("detail")) insertLikeBtn();
    _$(".xing_top").classList.add("kk-sticky");
    _$("#wd").classList.add("kk-search-ipt");
    _$(".search-btn").classList.add("kk-search-btn");
    var _vodList3 = _$$(".vodplayinfo li") || [];
    var _api3 = "https://www.hnjiexi.com/m3u8/?url=";
    var wrap = _$$(".playBox")[1];
    var _title2 = _$(".liketitle", wrap);
    _title2.style.height = "auto";
    _title2.innerHTML =
      '<div class="flex-block center-items">' +
      _title2.innerHTML +
      "</div>" +
      '<div><span class="f-s-16">&nbsp;&nbsp;[点击跳转到目标位置]==></span><a class="kk-btn d-i-b" target="_self" href="#play_1">yun</a><a class="kk-btn d-i-b" target="_self" href="#play_2">m3u8</a></div>';
    _vodList3.forEach(function (li) {
      var xm = _$$("a", li)[0].href;
      if (xm.includes("http")) {
        var _li$innerText4;
        li.classList = li.classList + " vod-li";
        var num = _$$("a", li)[0].title;
        var _a = document.createElement("a");
        _a.href = "#";
        if (xm.includes(".m3u8")) {
          _a.href = _api3 + xm;
        } else {
          _a.href = xm;
        }
        _a.target = "_blank";
        _a.className = "kk-btn";
        _a.innerText = "\u64AD\u653E:".concat(num);
        !(
          li !== null &&
          li !== void 0 &&
          (_li$innerText4 = li.innerText) !== null &&
          _li$innerText4 !== void 0 &&
          _li$innerText4.includes("全选")
        ) && li.append(_a);
      }
    });
  } else if (
    loc.includes("foxzyw") ||
    loc.includes("foxzy") ||
    loc.includes("kudian")
  ) {
    if (loc.includes("detail")) insertLikeBtn();
    var _vodList4 = _$$(".stui-content__playlist li") || [];
    var jxUrl = "http://jx.ykyunbo.com/m3u8.php?url=";
    _vodList4.forEach(function (li) {
      var xm = _$$(".url", li)[0].innerText;
      var num = _$$(".copy_text", li)[0].innerText.split(" : ")[0];
      if (xm.includes("http")) {
        var _a = document.createElement("a");
        if (xm.includes(".m3u8")) {
          _a.href = jxUrl + xm;
        } else {
          _a.href = xm;
        }
        _a.target = "_blank";
        _a.className = "kk-btn";
        _a.innerText = "\u64AD\u653E:".concat(num);
        !(xm !== null && xm !== void 0 && xm.includes("全选")) && li.append(_a);
      }
    });
  } else if (loc.includes("1080zyk")) {
    if (loc.includes("detail")) insertLikeBtn();
    var _vodList5 = _$$(".playlist li") || [];
    _vodList5.forEach(function (li) {
      var _$$$;
      var xm = li.innerText;
      var nums = xm.split("$");
      var num = nums[0];
      var link =
        (_$$$ = _$$("a", li)[0]) === null || _$$$ === void 0
          ? void 0
          : _$$$.href;
      if (!link) {
        link = nums[1];
      }
      var _a = document.createElement("a");
      _a.href = link;
      _a.target = "_blank";
      _a.className = "kk-btn kk-btn-sure";
      _a.innerText = "\u64AD\u653E:".concat(num);
      !(xm !== null && xm !== void 0 && xm.includes("全选")) && li.append(_a);
    });
  } else if (loc.includes("ffzy")) {
    var _titles$index;
    if (loc.includes("detail")) insertLikeBtn();
    var _vodList6 = _$$(".playlist li") || [];
    var _jxUrl = "https://svip.ffzyplay.com/?url=";
    var titles = _$$(".whitetitle");
    var _wraps2 = _$$("#content h4");
    _wraps2.forEach(function (e) {
      if (e.innerText.includes("m3u8")) {
        e.id = "kk-play-m3u8";
      } else {
        e.id = "kk-play-yun";
      }
    });
    var index = titles.length - 2;
    if (isNaN(index) || index < 0) index = 0;
    var titleHtml =
      (_titles$index = titles[index]) === null || _titles$index === void 0
        ? void 0
        : _titles$index.innerHTML;
    if (_typeof(titles[index]) === "object" && !Array.isArray(titles[index])) {
      var _titles$index2;
      titles[index].classList =
        ((_titles$index2 = titles[index]) === null || _titles$index2 === void 0
          ? void 0
          : _titles$index2.classList) + " flex-block";
      titles[index].innerHTML =
        '<div class="flex-block center-items">' +
        titleHtml +
        "</div>" +
        '<div><span class="f-s-16">&nbsp;&nbsp;[点击跳转到目标位置]==></span><a class="kk-btn d-i-b" target="_self" href="#kk-play-yun">yun</a><a class="kk-btn d-i-b" target="_self" href="#kk-play-m3u8">m3u8</a></div>';
    }
    _vodList6.forEach(function (li) {
      var xm = _$$("font", li)[0].innerText;
      var links = xm.split("$");
      var num = links[0];
      var link = links[1];
      if (xm.includes("http")) {
        var _a = document.createElement("a");
        if (xm.includes(".m3u8")) {
          _a.href = _jxUrl + link;
        } else {
          _a.href = link;
        }
        _a.target = "_blank";
        _a.className = "kk-btn";
        _a.innerText = "\u64AD\u653E:".concat(num);
        !(xm !== null && xm !== void 0 && xm.includes("全选")) && li.append(_a);
      }
    });
  } else if (loc.includes("xinlangz")) {
    if (loc.includes("detail")) insertLikeBtn();
    var _vodList7 = _$$(".collect-item-href .left") || [];
    var jxApi = "https://www.xinlangjiexi.com/m3u8/?url=";
    _vodList7.forEach(function (li) {
      var aEle = _$("a", li);
      var _link = aEle.href;
      var num = _$("span", li).innerText;
      var _a = document.createElement("a");
      _a.href = _link.includes(".m3u8") ? jxApi + _link : _link;
      _a.target = "_blank";
      _a.className = "kk-btn";
      _a.innerText = "\u64AD\u653E:".concat(num);
      li.append(_a);
    });
  } else if (loc.includes("ikunzy")) {
    var _$2;
    if (loc.includes("voddetail")) insertLikeBtn();
    $(".index-top-long").css({
      display: "none",
      width: 0,
      height: 0,
      visibility: "hidden",
      transform: "scale(0)"
    });
    var _vodList8 = _$$(".listitems");
    _vodList8.forEach(function (li) {
      var num = li.innerText.split("$")[0];
      var playBtn = _$(".btn a", li);
      playBtn.innerText = playBtn.innerText + ":" + num;
      playBtn.classList.add("kk-btn");
    });
    bindPlayBtn();
    $(".indextop")
      .mouseover(function () {
        $(".notice").stop();
        $(".notice").slideDown();
      })
      .mouseout(function () {
        $(".notice").stop();
        $(".notice").slideUp();
      });
    (_$2 = _$("#layui-layer1")) === null ||
      _$2 === void 0 ||
      _$2.classList.add("kk-blocked");
    _$(".tabletitle").classList.add("kk-sticky");
    _$(".search_input").style.width = "300px";
    _$(".search_input").classList.add("kk-search-ipt");
    _$(".search_btn").classList.add("kk-search-btn");
  } else if (loc.includes("suonizy") || loc.includes("snzy")) {
    if (loc.includes("voddetail")) insertLikeBtn();
    var _vodList9 = _$$(".dy-collect-list li");
    _vodList9.forEach(function (li) {
      var _$$$2;
      var xm = li.innerText;
      var nums = xm.split("$");
      var num = nums[0];
      var link =
        (_$$$2 = _$$("a", li)[0]) === null || _$$$2 === void 0
          ? void 0
          : _$$$2.href;
      if (!link) {
        link = nums[1];
      }
      var _a = document.createElement("a");
      _a.href = link;
      _a.target = "_blank";
      _a.className = "kk-btn kk-btn-sure";
      _a.innerText = "\u64AD\u653E:".concat(num);
      !(xm !== null && xm !== void 0 && xm.includes("全选")) && li.append(_a);
    });
  } else if (loc.includes("kkzy.tv") || loc.includes("kuaikan")) {
    if (loc.includes("vod/detail")) insertLikeBtn();
    var _vodList10 = _$$(".stui-content__playlist li");
    _vodList10.forEach(function (li) {
      var nums = _$(".copy_text", li);
      var num = nums.innerText.split("$")[0];
      var playBtn = _$(".text-muted", li);
      playBtn.innerText = "播放:" + num;
      playBtn.classList.add("kk-btn");
    });
    bindPlayBtn();
  } else if (loc.includes("bfzy.tv") || loc.match(/bfzy\d+\.tv/)) {
    if (loc.includes("vod/detail")) insertLikeBtn();
    var _vodList11 = _$$(".playlist li") || [];
    _vodList11.forEach(function (li) {
      var _$$$3;
      var xm = li.innerText;
      var nums = xm.split("$");
      var num = nums[0];
      var link =
        (_$$$3 = _$$("a", li)[0]) === null || _$$$3 === void 0
          ? void 0
          : _$$$3.href;
      if (!link) {
        link = nums[1];
      }
      var _a = document.createElement("a");
      _a.href = link;
      _a.target = "_blank";
      _a.className = "kk-btn kk-btn-sure";
      _a.innerText = "\u64AD\u653E:".concat(num);
      !(xm !== null && xm !== void 0 && xm.includes("全选")) && li.append(_a);
    });
  } else if (loc.includes("huyazy") || loc.includes("huyaziyuan")) {
    if (loc.includes("vod/detail")) insertLikeBtn();
    var _jxUrl2 = "https://huyajx.com/play?url=";
    var _vodList12 = _$$(".vodplayinfo li") || [];
    _vodList12.forEach(function (li) {
      var _$$$4;
      var xm = li.innerText;
      var nums = xm.split("$");
      var num = nums[0];
      var link =
        (_$$$4 = _$$("a", li)[0]) === null || _$$$4 === void 0
          ? void 0
          : _$$$4.href;
      if (!link) {
        link = nums[1];
      }
      var _a = document.createElement("a");
      if (xm.includes(".m3u8")) {
        _a.href = _jxUrl2 + link;
      } else {
        _a.href = link;
      }
      _a.target = "_blank";
      _a.className = "kk-btn kk-btn-sure";
      _a.innerText = "\u64AD\u653E:".concat(num);
      !(xm !== null && xm !== void 0 && xm.includes("全选")) && li.append(_a);
    });
  }
  bindPlayBtn();
  function bindPlayBtn() {
    $(".kk-btn").each(function () {
      $(this).click(
        /*#__PURE__*/ _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
            var len, step;
            return _regeneratorRuntime().wrap(
              function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return getLen();
                    case 2:
                      len = _context.sent;
                      step = $(this).text().split(":")[1];
                      sendMsg({
                        act: ACT_VISIT,
                        route: "toBg",
                        key: loc,
                        step: step,
                        update: getCount(),
                        len: len,
                        time: getDate()
                      });
                    case 5:
                    case "end":
                      return _context.stop();
                  }
              },
              _callee,
              this
            );
          })
        )
      );
    });
  }
  function getCount() {
    var lias = _$$("li");
    var liasLen = lias.length;
    var count = "";
    loop: for (var i = liasLen - 1; i > 0; i--) {
      var txt = lias[i].innerText;
      if (txt !== null && txt !== void 0 && txt.includes(".m3u8")) {
        var txtMatch = txt.match(
          /(?<=\s*)[^\s]+?(?=\s*?:*?\s*?\$*?https?:\/\/)/
        );
        count = txtMatch ? txtMatch[0] : "";
        break loop;
      }
    }
    return count;
  }
  function getLen() {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: loc,
        success: (function () {
          var _success = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(resp) {
              var m3u8Arr, len;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1)
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      m3u8Arr = resp.match(/\.m3u8/g);
                      len = m3u8Arr ? m3u8Arr.length : 0;
                      resolve(len);
                    case 3:
                    case "end":
                      return _context2.stop();
                  }
              }, _callee2);
            })
          );
          function success(_x) {
            return _success.apply(this, arguments);
          }
          return success;
        })(),
        error: function error(xhr, status, _error) {
          resolve(0);
        }
      });
    });
  }
  function likeFn(_x2) {
    return _likeFn.apply(this, arguments);
  }
  function _likeFn() {
    _likeFn = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(likeBtn) {
        var len, key;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1)
            switch ((_context3.prev = _context3.next)) {
              case 0:
                _context3.next = 2;
                return getLen();
              case 2:
                len = _context3.sent;
                key = loc.split("#")[0];
                sendMsg({
                  act: ACT_LIKE,
                  route: "toBg",
                  key: key,
                  title: document.title,
                  update: getCount(),
                  len: len,
                  time: getDate()
                });
                if (likeBtn) {
                  likeBtn.classList.add("zoom");
                  likeBtn.innerHTML = "👌";
                }
              case 6:
              case "end":
                return _context3.stop();
            }
        }, _callee3);
      })
    );
    return _likeFn.apply(this, arguments);
  }
  function insertLikeBtn() {
    var likeWrap = document.createElement("div");
    likeWrap.className = "like-wrap";
    var likeTips = document.createElement("p");
    likeTips.className = "like-tips";
    likeTips.innerHTML =
      "<span>左键点击收藏</span><br><span>右键打开收藏</span>";
    var likeBtn = document.createElement("button");
    likeBtn.className = "like-btn act";
    likeBtn.innerText = "收藏";
    likeBtn.title = "点击收藏";
    likeWrap.append(likeTips);
    likeWrap.append(likeBtn);
    document.body.append(likeWrap);
    likeBtn.onmouseover = function () {
      likeBtn.classList.remove("act");
    };
    likeBtn.onmouseout = function () {
      likeBtn.classList.add("act");
      likeBtn.classList.remove("zoom");
      likeBtn.innerHTML = "收藏";
    };
    likeBtn.onclick = function () {
      likeFn(likeBtn);
    };
    likeBtn.oncontextmenu = function () {
      sendMsg({
        act: ACT_LIKE_PAGE,
        route: "toBg"
      });
      return false;
    };

    // if(!isPhone()) insertApp()
  }
  function sendMsg(data) {
    !!data && chrome.runtime.sendMessage(data);
  }
  function insertApp() {
    var isClosed = localStorage.getItem("isClosed") === "true";
    var ifm = document.createElement("div");
    var open = document.createElement("button");
    var close = document.createElement("button");
    var reload = document.createElement("button");
    var initBtm = isClosed ? "-350px" : "0px";
    var closeRotate = isClosed ? "135" : "0";
    var closeTitle = isClosed ? "展开" : "收起";
    ifm.innerHTML =
      '<iframe id="kk-ifm" src="https://htmls-ten.vercel.app" width="100%" height="100%" style="border:none;border-radius:4px;"/>';
    ifm.style.cssText =
      "position:fixed;bottom:" +
      initBtm +
      ";right:0;box-sizing:border-box;border:none;border-radius:4px;width:300px;height:500px;transition:bottom 1s;";
    open.innerText = "⏏️";
    open.title = "全屏打开";
    open.style.cssText =
      "position:absolute;right:20px;top:0;width:32px;height:32px;cursor:pointer;font-size:20px;outline:none;border:none;border-radius:4px;background:transparent;";
    open.onclick = function () {
      window.open("https://htmls-ten.vercel.app");
    };
    close.innerText = "❌";
    close.title = closeTitle;
    close.style.cssText =
      "position:absolute;left:0;top:0;display:flex;justify-content:center;align-items:center;width:30px;height:30px;line-height:30px;transition: all 1.5s;transform:rotate(" +
      closeRotate +
      "deg);cursor:pointer;font-size:18px;background:transparent;outline:none;border:1px solid #f00;border-radius:50%;";
    close.onclick = function () {
      if (isClosed) {
        ifm.style.bottom = "0";
        close.style.transform = "rotate(0deg)";
        close.title = "收起";
      } else {
        ifm.style.bottom = "-350px";
        close.style.transform = "rotate(135deg)";
        close.title = "展开";
      }
      isClosed = !isClosed;
      localStorage.setItem("isClosed", isClosed);
    };
    reload.innerText = "🔁";
    reload.title = "刷新";
    reload.style.cssText =
      "position:absolute;right:55px;top:0;width:32px;height:32px;cursor:pointer;font-size:20px;outline:none;border:none;border-radius:4px;background:transparent;";
    reload.onclick = function () {
      document.getElementById("kk-ifm").contentWindow.location.href =
        "https://laonongmin.online";
    };
    ifm.appendChild(close);
    ifm.appendChild(open);
    ifm.appendChild(reload);
    $("body").append(ifm);
  }
})();
