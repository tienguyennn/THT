/*FB_PKG_DELIM*/

__d(
  "DateConsts",
  [],
  function (t, n, r, o, a, i) {
    var e = 1e3,
      l = 60,
      s = 60,
      u = 24,
      c = 7,
      d = 12,
      m = 1e3,
      p = 30.43,
      _ = 4.333,
      f = 365.242,
      g = l * s,
      h = g * u,
      y = h * c,
      C = h * f,
      b = e * l,
      v = b * s,
      S = e * h,
      R = S * c,
      L = S * f,
      E = {
        SUNDAY: 0,
        MONDAY: 1,
        TUESDAY: 2,
        WEDNESDAY: 3,
        THURSDAY: 4,
        FRIDAY: 5,
        SATURDAY: 6,
      };
    Object.freeze(E);
    function k(e, t) {
      return new Date(e, t, 0).getDate();
    }
    function I() {
      return Date.now() / e;
    }
    var T = { instantRange: { since: -864e10, until: 864e10 + 1 } };
    ((i.MS_PER_SEC = e),
      (i.SEC_PER_MIN = l),
      (i.MIN_PER_HOUR = s),
      (i.HOUR_PER_DAY = u),
      (i.DAYS_PER_WEEK = c),
      (i.MONTHS_PER_YEAR = d),
      (i.US_PER_MS = m),
      (i.AVG_DAYS_PER_MONTH = p),
      (i.AVG_WEEKS_PER_MONTH = _),
      (i.AVG_DAYS_PER_YEAR = f),
      (i.SEC_PER_HOUR = g),
      (i.SEC_PER_DAY = h),
      (i.SEC_PER_WEEK = y),
      (i.SEC_PER_YEAR = C),
      (i.MS_PER_MIN = b),
      (i.MS_PER_HOUR = v),
      (i.MS_PER_DAY = S),
      (i.MS_PER_WEEK = R),
      (i.MS_PER_YEAR = L),
      (i.DAYS = E),
      (i.getDaysInMonth = k),
      (i.getCurrentTimeInSeconds = I),
      (i.private = T));
  },
  66,
);
__d(
  "isBarcelonaURI",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e.getProtocol(),
        n = e.getDomain();
      return (
        (t === "http" || t === "https") &&
        (n === "threads.net" ||
          n.endsWith(".threads.net") ||
          n === "threads.com" ||
          n.endsWith(".threads.com"))
      );
    }
    i.default = e;
  },
  66,
);
__d(
  "isWhatsAppLinkshimURI",
  [],
  function (t, n, r, o, a, i) {
    var e = new RegExp("l\\.wl\\.co$", "i");
    function l(t) {
      return (t.isEmpty() && t.toString() !== "#") ||
        (!t.getDomain() && !t.getProtocol()) ||
        t.getProtocol() !== "https"
        ? !1
        : e.test(t.getDomain());
    }
    i.default = l;
  },
  66,
);
__d(
  "isLinkshimURI",
  [
    "LinkshimHandlerConfig",
    "isBarcelonaURI",
    "isFacebookURI",
    "isMessengerDotComURI",
    "isWhatsAppLinkshimURI",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("LinkshimHandlerConfig").linkshim_host.split("."),
      s = e[e.length - 1];
    function u(e) {
      var t = e.getPath();
      if (
        ((t === "/l.php" ||
          t.indexOf("/si/ajax/l/") === 0 ||
          t.indexOf("/l/") === 0 ||
          t.indexOf("l/") === 0) &&
          (r("isFacebookURI")(e) || r("isMessengerDotComURI")(e))) ||
        (t === "/linkshim" && r("isBarcelonaURI")(e)) ||
        (t === "/l" && r("isWhatsAppLinkshimURI")(e))
      )
        return !0;
      if (
        t === r("LinkshimHandlerConfig").linkshim_path &&
        e.isSubdomainOfDomain(s)
      ) {
        var n = e.getQueryData();
        if (
          n[r("LinkshimHandlerConfig").linkshim_enc_param] != null &&
          n[r("LinkshimHandlerConfig").linkshim_url_param] != null
        )
          return !0;
      }
      return !1;
    }
    l.default = u;
  },
  98,
);
__d(
  "FBLynxBase",
  ["$", "LinkshimHandlerConfig", "URI", "cr:7736", "isLinkshimURI"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(e) {
      if (!n("isLinkshimURI")(e)) return null;
      var t = e.getQueryData().u;
      return t || null;
    }
    var s = {
      logAsyncClick: function (t) {
        s.swapLinkWithUnshimmedLink(t);
        var e = t.getAttribute("data-lynx-uri");
        e && n("cr:7736").log(e);
      },
      originReferrerPolicyClick: function (t) {
        var e = n("$")("meta_referrer");
        ((e.content = n("LinkshimHandlerConfig").switched_meta_referrer_policy),
          s.logAsyncClick(t),
          setTimeout(function () {
            e.content = n("LinkshimHandlerConfig").default_meta_referrer_policy;
          }, 100));
      },
      swapLinkWithUnshimmedLink: function (r) {
        var t = r.href,
          o = l(new (e || (e = n("URI")))(t));
        o && (r.setAttribute("data-lynx-uri", t), (r.href = o));
      },
      revertSwapIfLynxURIPresent: function (t) {
        var e = t.getAttribute("data-lynx-uri");
        e && (t.removeAttribute("data-lynx-uri"), (t.href = e));
      },
    };
    a.exports = s;
  },
  null,
);
__d(
  "FBLynx",
  ["Base64", "Event", "FBLynxBase", "LinkshimHandlerConfig", "Parent", "URI"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e || (e = n("URI"))).goURIOnWindow,
      s = {
        alreadySetup: !1,
        setupDelegation: function (r) {
          if ((r === void 0 && (r = !1), !!document.documentElement)) {
            if (document.body == null) {
              if (r) return;
              window.setTimeout(function () {
                s.setupDelegation(!0);
              }, 100);
              return;
            }
            if (!s.alreadySetup) {
              s.alreadySetup = !0;
              var t = function (r) {
                var t = s.getMaybeLynxLink(r.target);
                if (t) {
                  var o = t[0],
                    a = t[1],
                    i = a,
                    u = new (e || (e = n("URI")))(a.href),
                    c;
                  if (
                    n("LinkshimHandlerConfig").ghl_param_link_shim &&
                    o !== "hover" &&
                    a.dataset &&
                    a.dataset.attributes &&
                    ((c = n("Base64").decodeObject(a.dataset.attributes)),
                    c && c.open_link)
                  ) {
                    var d;
                    for (d in c) d !== "open_link" && u.addQueryData(d, c[d]);
                    var m = a.cloneNode(!0);
                    ((m.href = u.toString()), (i = m));
                  }
                  switch (o) {
                    case "async":
                    case "asynclazy":
                      n("FBLynxBase").logAsyncClick(i);
                      break;
                    case "origin":
                      n("FBLynxBase").originReferrerPolicyClick(i);
                      break;
                    case "hover":
                      s.hoverClick(i);
                      break;
                  }
                  n("LinkshimHandlerConfig").ghl_param_link_shim &&
                    o !== "hover" &&
                    c &&
                    c.open_link &&
                    (r.preventDefault(), l(u, window.open("", i.target), !0));
                }
              };
              (n("Event").listen(document.body, "click", t),
                n("LinkshimHandlerConfig").middle_click_requires_event &&
                  n("Event").listen(document.body, "mouseup", function (e) {
                    e.button == 1 && t(e);
                  }),
                n("Event").listen(document.body, "mouseover", function (e) {
                  var t = s.getMaybeLynxLink(e.target);
                  if (t) {
                    var n = t[0],
                      r = t[1];
                    switch (n) {
                      case "async":
                      case "asynclazy":
                      case "origin":
                      case "hover":
                        s.mouseover(r);
                        break;
                    }
                  }
                }),
                n("Event").listen(document.body, "contextmenu", function (e) {
                  var t = s.getMaybeLynxLink(e.target);
                  if (t) {
                    var n = t[0],
                      r = t[1];
                    switch (n) {
                      case "async":
                      case "hover":
                      case "origin":
                        s.contextmenu(r);
                        break;
                      case "asynclazy":
                        break;
                    }
                  }
                }));
            }
          }
        },
        getMaybeLynxLink: function (t) {
          var e = n("Parent").byAttribute(t, "data-lynx-mode");
          if (e instanceof HTMLAnchorElement) {
            var r = e.getAttribute("data-lynx-mode");
            switch (r) {
              case "async":
              case "asynclazy":
              case "hover":
              case "origin":
                return [r, e];
              default:
                return null;
            }
          }
          return null;
        },
        hoverClick: function (t) {
          n("FBLynxBase").revertSwapIfLynxURIPresent(t);
        },
        mouseover: function (t) {
          n("FBLynxBase").swapLinkWithUnshimmedLink(t);
        },
        contextmenu: function (t) {
          n("FBLynxBase").revertSwapIfLynxURIPresent(t);
        },
      };
    a.exports = s;
  },
  null,
);
__d(
  "XLynxAsyncCallbackControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (t, n, r, o, a, i, l) {
    var e = r("jsRouteBuilder")(
        "/si/linkclick/ajax_callback/",
        Object.freeze({}),
        void 0,
      ),
      s = e;
    l.default = s;
  },
  98,
);
__d(
  "FBLynxLogging",
  ["AsyncRequest", "ODS", "XLynxAsyncCallbackControllerRouteBuilder"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = r("XLynxAsyncCallbackControllerRouteBuilder").buildURL({});
      new (r("AsyncRequest"))(n)
        .setData({ lynx_uri: t })
        .setErrorHandler(function (t) {
          var n = t.getError();
          (e || (e = o("ODS"))).bumpEntityKey(
            3861,
            "linkshim",
            "click_log.post.fail." + n,
          );
        })
        .setTransportErrorHandler(function (t) {
          var n = t.getError();
          (e || (e = o("ODS"))).bumpEntityKey(
            3861,
            "linkshim",
            "click_log.post.transport_fail." + n,
          );
        })
        .send();
    }
    l.log = s;
  },
  98,
);
__d(
  "FullScreen",
  [
    "ArbiterMixin",
    "CSS",
    "Event",
    "Keys",
    "UserAgent",
    "UserAgent_DEPRECATED",
    "mixin",
    "throttle",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {},
      s = !1;
    function u(e) {
      r("Event").getKeyCode(e) === r("Keys").ESC && e.stopPropagation();
    }
    function c() {
      s || (document.addEventListener("keydown", u, !0), (s = !0));
    }
    function d() {
      s && (document.removeEventListener("keydown", u, !0), (s = !1));
    }
    var m = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.onChange = function () {
              var t = e.isFullScreen(),
                n = document.body;
              (n && o("CSS").conditionClass(n, "fullScreen", t),
                e.inform("changed"),
                t || d());
            }),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.listenForEvent = function (n) {
            var t = r("throttle")(this.onChange, 0, this);
            e[n.id] ||
              ((e[n.id] = !0),
              r("Event").listen(n, {
                webkitfullscreenchange: t,
                mozfullscreenchange: t,
                MSFullscreenChange: t,
                fullscreenchange: t,
              }));
          }),
          (a.enableFullScreen = function (t) {
            this.listenForEvent(t);
            var e = t;
            if (e.webkitRequestFullScreen)
              o("UserAgent_DEPRECATED").chrome()
                ? e.webkitRequestFullScreen == null ||
                  e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
                : e.webkitRequestFullScreen == null ||
                  e.webkitRequestFullScreen();
            else if (e.mozRequestFullScreen) e.mozRequestFullScreen();
            else if (e.msRequestFullscreen)
              (c(), e.msRequestFullscreen == null || e.msRequestFullscreen());
            else if (e.requestFullScreen)
              e.requestFullScreen == null || e.requestFullScreen();
            else return !1;
            return !0;
          }),
          (a.disableFullScreen = function () {
            var e = document;
            if (e.webkitCancelFullScreen) e.webkitCancelFullScreen();
            else if (e.mozCancelFullScreen) e.mozCancelFullScreen();
            else if (e.msExitFullscreen) e.msExitFullscreen();
            else if (e.cancelFullScreen) e.cancelFullScreen();
            else if (e.exitFullScreen) e.exitFullScreen();
            else return !1;
            return !0;
          }),
          (a.isFullScreen = function () {
            var e = document;
            return !!(
              e.webkitIsFullScreen ||
              e.fullScreen ||
              e.mozFullScreen ||
              e.msFullscreenElement
            );
          }),
          (a.toggleFullScreen = function (t) {
            return this.isFullScreen()
              ? (this.disableFullScreen(), !1)
              : this.enableFullScreen(t);
          }),
          (a.isSupportedWithKeyboardInput = function () {
            return this.isSupported() && !r("UserAgent").isBrowser("Safari");
          }),
          (a.isSupported = function () {
            var e = document,
              t =
                e.webkitFullscreenEnabled ||
                e.mozFullScreenEnabled ||
                e.msFullscreenEnabled ||
                e.fullscreenEnabled;
            return !!(
              t ||
              e.webkitCancelFullScreen ||
              e.mozCancelFullScreen ||
              e.msExitFullscreen ||
              e.cancelFullScreen ||
              e.exitFullScreen
            );
          }),
          n
        );
      })(r("mixin")(r("ArbiterMixin"))),
      p = new m(),
      _ = r("throttle")(p.onChange, 0, p);
    r("Event").listen(document, {
      webkitfullscreenchange: _,
      mozfullscreenchange: _,
      MSFullscreenChange: _,
      fullscreenchange: _,
    });
    var f = p;
    l.default = f;
  },
  98,
);
__d(
  "PageHooks",
  ["Arbiter", "ErrorUtils", "InitialJSLoader", "PageEvents"],
  function (t, n, r, o, a, i) {
    var e,
      l = { DOMREADY_HOOK: "domreadyhooks", ONLOAD_HOOK: "onloadhooks" };
    function s() {
      (d(_.DOMREADY_HOOK),
        (window.domready = !0),
        n("Arbiter").inform("uipage_onload", !0, "state"));
    }
    function u() {
      (d(_.ONLOAD_HOOK), (window.loaded = !0));
    }
    function c(t, r) {
      return (e || (e = n("ErrorUtils"))).applyWithGuard(
        t,
        null,
        null,
        function (e) {
          ((e.event_type = r), (e.category = "runhook"));
        },
        "PageHooks:" + r,
      );
    }
    function d(e) {
      var t = e == "onbeforeleavehooks" || e == "onbeforeunloadhooks";
      do {
        var n = window[e];
        if (!n) break;
        t || (window[e] = null);
        for (var r = 0; r < n.length; r++) {
          var o = c(n[r], e);
          if (t && o) return o;
        }
      } while (!t && window[e]);
    }
    function m() {
      (window.domready || ((window.domready = !0), d("onloadhooks")),
        window.loaded || ((window.loaded = !0), d("onafterloadhooks")));
    }
    function p() {
      var e, t;
      ((e = n("Arbiter")).registerCallback(s, [
        (t = n("PageEvents")).BIGPIPE_DOMREADY,
        n("InitialJSLoader").INITIAL_JS_READY,
      ]),
        e.registerCallback(u, [
          t.BIGPIPE_DOMREADY,
          t.BIGPIPE_ONLOAD,
          n("InitialJSLoader").INITIAL_JS_READY,
        ]),
        e.subscribe(
          t.NATIVE_ONBEFOREUNLOAD,
          function (e, t) {
            ((t.warn = d("onbeforeleavehooks") || d("onbeforeunloadhooks")),
              t.warn || ((window.domready = !1), (window.loaded = !1)));
          },
          "new",
        ),
        e.subscribe(
          t.NATIVE_ONUNLOAD,
          function (e, t) {
            (d("onunloadhooks"), d("onafterunloadhooks"));
          },
          "new",
        ));
    }
    var _ = babelHelpers.extends(
      {
        _domreadyHook: s,
        _onloadHook: u,
        runHook: c,
        runHooks: d,
        keepWindowSetAsLoaded: m,
      },
      l,
    );
    (p(), (t.PageHooks = a.exports = _));
  },
  null,
);
__d(
  "queryThenMutateDOM",
  [
    "ErrorUtils",
    "Run",
    "TimeSlice",
    "emptyFunction",
    "gkx",
    "requestAnimationFrame",
  ],
  function (t, n, r, o, a, i) {
    var e,
      l,
      s,
      u = [],
      c = {};
    function d(e, t, r) {
      if (!e && !t) return { cancel: n("emptyFunction") };
      if (r && Object.prototype.hasOwnProperty.call(c, r))
        return { cancel: n("emptyFunction") };
      r && (c[r] = 1);
      var o = n("TimeSlice").guard(
          t || n("emptyFunction"),
          "queryThenMutateDOM mutation callback",
          {
            propagationType: n("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0,
          },
        ),
        a = n("TimeSlice").guard(
          e || n("emptyFunction"),
          "queryThenMutateDOM query callback",
          {
            propagationType: n("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0,
          },
        ),
        i = { queryFunction: a, mutateFunction: o, output: null, deleted: !1 };
      return (
        u.push(i),
        p(),
        l ||
          ((l = !0),
          n("gkx")("20935") ||
            n("Run").onLeave(function () {
              ((l = !1), (s = !1), (c = {}), (u.length = 0));
            })),
        {
          cancel: function () {
            ((i.deleted = !0), r && delete c[r]);
          },
        }
      );
    }
    d.prepare = function (e, t, n) {
      return function () {
        for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
          o[a] = arguments[a];
        o.unshift(this);
        var i = Function.prototype.bind.apply(e, o),
          l = t.bind(this);
        d(i, l, n);
      };
    };
    var m = n("TimeSlice").guard(
      function () {
        for (; u.length; ) {
          c = {};
          var e = [];
          for (window.document.body.getClientRects(); u.length; ) {
            var t = u.shift();
            t.deleted || ((t.output = _(t.queryFunction)), e.push(t));
          }
          for (; e.length; ) {
            var n = e.shift();
            n.deleted || _(n.mutateFunction, null, [n.output]);
          }
        }
        s = !1;
      },
      "queryThenMutateDOM runScheduledQueriesAndMutations",
      { propagationType: n("TimeSlice").PropagationType.ORPHAN },
    );
    function p() {
      !s && u.length && ((s = !0), n("requestAnimationFrame")(m));
    }
    function _(t, r, o, a, i) {
      return (e || (e = n("ErrorUtils"))).applyWithGuard(t, r, o, a, i);
    }
    a.exports = d;
  },
  null,
);
__d(
  "UITinyViewportAction",
  [
    "Arbiter",
    "ArbiterMixin",
    "CSS",
    "Event",
    "FullScreen",
    "getDocumentScrollElement",
    "queryThenMutateDOM",
    "throttle",
  ],
  function (t, n, r, o, a, i) {
    var e = document.documentElement,
      l,
      s,
      u,
      c,
      d = !1,
      m = !1,
      p = !1,
      _ = {
        init: function (r) {
          var t = n("throttle")(function () {
            n("FullScreen").isFullScreen() ||
              n("queryThenMutateDOM")(
                function () {
                  ((c = c || n("getDocumentScrollElement")()),
                    (s = e.clientWidth < c.scrollWidth - 1),
                    (u = e.clientHeight < 400),
                    (l = u || s));
                },
                function () {
                  if (l !== d || s !== m || u !== p) {
                    var t;
                    ((t = n("CSS")).conditionClass(e, "tinyViewport", l),
                      t.conditionClass(e, "tinyWidth", s),
                      t.conditionClass(e, "tinyHeight", u),
                      t.conditionClass(e, "canHaveFixedElements", !l),
                      _.inform("change", l),
                      n("Arbiter").inform(
                        "tinyViewport/change",
                        { tiny: l, tinyWidth: s, tinyHeight: u },
                        "state",
                      ),
                      (d = l),
                      (m = s),
                      (p = u));
                  }
                },
                "TinyViewport",
              );
          });
          (t(),
            n("Arbiter").subscribe("quickling/response", t),
            n("Event").listen(window, "resize", t),
            n("FullScreen").subscribe("changed", t));
        },
        isTiny: function () {
          return l;
        },
        isTinyWidth: function () {
          return s;
        },
        isTinyHeight: function () {
          return u;
        },
      };
    (Object.assign(_, n("ArbiterMixin")), (a.exports = _));
  },
  null,
);
__d(
  "VirtualCursorStatus",
  ["UserAgent", "cr:5662", "emptyFunction", "setImmediate"],
  function (t, n, r, o, a, i) {
    var e = null,
      l = null;
    function s() {
      l ||
        (l = n("cr:5662").listen(window, "blur", function () {
          ((e = null), u());
        }));
    }
    function u() {
      l && (l.remove(), (l = null));
    }
    function c(t) {
      ((e = t.keyCode), s());
    }
    function d() {
      ((e = null), u());
    }
    if (
      typeof window != "undefined" &&
      window.document &&
      window.document.createElement
    ) {
      var m = document.documentElement;
      if (m) {
        if (m.addEventListener)
          (m.addEventListener("keydown", c, !0),
            m.addEventListener("keyup", d, !0));
        else if (m.attachEvent) {
          var p = m.attachEvent;
          (p("onkeydown", c), p("onkeyup", d));
        }
      }
    }
    var _ = {
        isKeyDown: function () {
          return !!e;
        },
        getKeyDownCode: function () {
          return e;
        },
      },
      f = !1,
      g = !1,
      h = null,
      y = !1;
    function C(e) {
      var t = new Set(),
        r = _.isKeyDown(),
        o = e.clientX,
        a = e.clientY,
        i = e.isTrusted,
        l = e.offsetX,
        s = e.offsetY,
        u = e.mozInputSource,
        c = e.WEBKIT_FORCE_AT_MOUSE_DOWN,
        d = e.webkitForce,
        m = e.target,
        p = m.clientWidth,
        h = m.clientHeight;
      return (
        o === 0 &&
          a === 0 &&
          l >= 0 &&
          s >= 0 &&
          g &&
          i &&
          u == null &&
          t.add("Chrome"),
        f &&
          g &&
          !r &&
          d != null &&
          d < c &&
          l === 0 &&
          s === 0 &&
          u == null &&
          t.add("Safari-edge"),
        o === 0 &&
          a === 0 &&
          l < 0 &&
          s < 0 &&
          g &&
          u == null &&
          t.add("Safari-old"),
        !f &&
          !g &&
          !r &&
          i &&
          n("UserAgent").isBrowser("IE >= 10") &&
          u == null &&
          (o < 0 && a < 0
            ? t.add("IE")
            : (l < 0 || l > p) && (s < 0 || s > h) && t.add("MSIE")),
        u === 0 && i && t.add("Firefox"),
        t
      );
    }
    function b() {
      ((f = !0),
        n("setImmediate")(function () {
          f = !1;
        }));
    }
    function v() {
      ((g = !0),
        n("setImmediate")(function () {
          g = !1;
        }));
    }
    function S(e, t) {
      (h === null && (h = C(e)), (y = h.size > 0));
      var r =
        e.target.getAttribute("data-accessibilityid") ===
        "virtual_cursor_trigger";
      (t(y, h, r),
        n("setImmediate")(function () {
          ((y = !1), (h = null));
        }));
    }
    var R = {
      isVirtualCursorTriggered: function () {
        return y;
      },
      add: function (t, r) {
        r === void 0 && (r = n("emptyFunction"));
        var e = function (t) {
          return S(t, r);
        };
        t.addEventListener("click", e);
        var o = n("cr:5662").listen(t, "mousedown", b),
          a = n("cr:5662").listen(t, "mouseup", v);
        return {
          remove: function () {
            (t.removeEventListener("click", e), o.remove(), a.remove());
          },
        };
      },
    };
    a.exports = R;
  },
  null,
);
__d(
  "legacy:onload-action",
  ["PageHooks"],
  function (t, n, r, o, a, i) {
    var e;
    ((t._domreadyHook = (e = n("PageHooks"))._domreadyHook),
      (t._onloadHook = e._onloadHook),
      (t.runHook = e.runHook),
      (t.runHooks = e.runHooks),
      (t.keep_window_set_as_loaded = e.keepWindowSetAsLoaded));
  },
  3,
);
