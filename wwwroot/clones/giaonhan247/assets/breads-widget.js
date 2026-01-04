(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var ln,
  O,
  Ta,
  it,
  ps,
  Ca,
  Aa,
  Pa,
  li,
  Vr,
  Or,
  Ma,
  Yt = {},
  Ea = [],
  Ou = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  Gn = Array.isArray;
function Ue(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function ci(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function ce(e, t, n) {
  var r,
    i,
    s,
    o = {};
  for (s in t)
    s == "key" ? (r = t[s]) : s == "ref" ? (i = t[s]) : (o[s] = t[s]);
  if (
    (arguments.length > 2 &&
      (o.children = arguments.length > 3 ? ln.call(arguments, 2) : n),
    typeof e == "function" && e.defaultProps != null)
  )
    for (s in e.defaultProps) o[s] === void 0 && (o[s] = e.defaultProps[s]);
  return Wt(e, o, r, i, null);
}
function Wt(e, t, n, r, i) {
  var s = {
    type: e,
    props: t,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: i ?? ++Ta,
    __i: -1,
    __u: 0,
  };
  return (i == null && O.vnode != null && O.vnode(s), s);
}
function Ra() {
  return { current: null };
}
function fe(e) {
  return e.children;
}
function we(e, t) {
  ((this.props = e), (this.context = t));
}
function St(e, t) {
  if (t == null) return e.__ ? St(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? St(e) : null;
}
function ka(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ka(e);
  }
}
function Ir(e) {
  ((!e.__d && (e.__d = !0) && it.push(e) && !On.__r++) ||
    ps !== O.debounceRendering) &&
    ((ps = O.debounceRendering) || Ca)(On);
}
function On() {
  for (var e, t, n, r, i, s, o, a = 1; it.length; )
    (it.length > a && it.sort(Aa),
      (e = it.shift()),
      (a = it.length),
      e.__d &&
        ((n = void 0),
        (i = (r = (t = e).__v).__e),
        (s = []),
        (o = []),
        t.__P &&
          (((n = Ue({}, r)).__v = r.__v + 1),
          O.vnode && O.vnode(n),
          ui(
            t.__P,
            n,
            r,
            t.__n,
            t.__P.namespaceURI,
            32 & r.__u ? [i] : null,
            s,
            i ?? St(r),
            !!(32 & r.__u),
            o,
          ),
          (n.__v = r.__v),
          (n.__.__k[n.__i] = n),
          Oa(s, n, o),
          n.__e != i && ka(n))));
  On.__r = 0;
}
function Da(e, t, n, r, i, s, o, a, l, c, f) {
  var u,
    d,
    h,
    p,
    m,
    y,
    g = (r && r.__k) || Ea,
    v = t.length;
  for (l = Iu(n, t, g, l, v), u = 0; u < v; u++)
    (h = n.__k[u]) != null &&
      ((d = h.__i === -1 ? Yt : g[h.__i] || Yt),
      (h.__i = u),
      (y = ui(e, h, d, i, s, o, a, l, c, f)),
      (p = h.__e),
      h.ref &&
        d.ref != h.ref &&
        (d.ref && fi(d.ref, null, h), f.push(h.ref, h.__c || p, h)),
      m == null && p != null && (m = p),
      4 & h.__u || d.__k === h.__k
        ? (l = Va(h, l, e))
        : typeof h.type == "function" && y !== void 0
          ? (l = y)
          : p && (l = p.nextSibling),
      (h.__u &= -7));
  return ((n.__e = m), l);
}
function Iu(e, t, n, r, i) {
  var s,
    o,
    a,
    l,
    c,
    f = n.length,
    u = f,
    d = 0;
  for (e.__k = new Array(i), s = 0; s < i; s++)
    (o = t[s]) != null && typeof o != "boolean" && typeof o != "function"
      ? ((l = s + d),
        ((o = e.__k[s] =
          typeof o == "string" ||
          typeof o == "number" ||
          typeof o == "bigint" ||
          o.constructor == String
            ? Wt(null, o, null, null, null)
            : Gn(o)
              ? Wt(fe, { children: o }, null, null, null)
              : o.constructor === void 0 && o.__b > 0
                ? Wt(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v)
                : o).__ = e),
        (o.__b = e.__b + 1),
        (a = null),
        (c = o.__i = Fu(o, n, l, u)) !== -1 &&
          (u--, (a = n[c]) && (a.__u |= 2)),
        a == null || a.__v === null
          ? (c == -1 && d--, typeof o.type != "function" && (o.__u |= 4))
          : c != l &&
            (c == l - 1
              ? d--
              : c == l + 1
                ? d++
                : (c > l ? d-- : d++, (o.__u |= 4))))
      : (e.__k[s] = null);
  if (u)
    for (s = 0; s < f; s++)
      (a = n[s]) != null &&
        !(2 & a.__u) &&
        (a.__e == r && (r = St(a)), Ia(a, a));
  return r;
}
function Va(e, t, n) {
  var r, i;
  if (typeof e.type == "function") {
    for (r = e.__k, i = 0; r && i < r.length; i++)
      r[i] && ((r[i].__ = e), (t = Va(r[i], t, n)));
    return t;
  }
  e.__e != t &&
    (t && e.type && !n.contains(t) && (t = St(e)),
    n.insertBefore(e.__e, t || null),
    (t = e.__e));
  do t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function We(e, t) {
  return (
    (t = t || []),
    e == null ||
      typeof e == "boolean" ||
      (Gn(e)
        ? e.some(function (n) {
            We(n, t);
          })
        : t.push(e)),
    t
  );
}
function Fu(e, t, n, r) {
  var i,
    s,
    o = e.key,
    a = e.type,
    l = t[n];
  if (l === null || (l && o == l.key && a === l.type && !(2 & l.__u))) return n;
  if (r > (l != null && !(2 & l.__u) ? 1 : 0))
    for (i = n - 1, s = n + 1; i >= 0 || s < t.length; ) {
      if (i >= 0) {
        if ((l = t[i]) && !(2 & l.__u) && o == l.key && a === l.type) return i;
        i--;
      }
      if (s < t.length) {
        if ((l = t[s]) && !(2 & l.__u) && o == l.key && a === l.type) return s;
        s++;
      }
    }
  return -1;
}
function ms(e, t, n) {
  t[0] == "-"
    ? e.setProperty(t, n ?? "")
    : (e[t] =
        n == null ? "" : typeof n != "number" || Ou.test(t) ? n : n + "px");
}
function xn(e, t, n, r, i) {
  var s;
  e: if (t == "style")
    if (typeof n == "string") e.style.cssText = n;
    else {
      if ((typeof r == "string" && (e.style.cssText = r = ""), r))
        for (t in r) (n && t in n) || ms(e.style, t, "");
      if (n) for (t in n) (r && n[t] === r[t]) || ms(e.style, t, n[t]);
    }
  else if (t[0] == "o" && t[1] == "n")
    ((s = t != (t = t.replace(Pa, "$1"))),
      (t =
        t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn"
          ? t.toLowerCase().slice(2)
          : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + s] = n),
      n
        ? r
          ? (n.u = r.u)
          : ((n.u = li), e.addEventListener(t, s ? Or : Vr, s))
        : e.removeEventListener(t, s ? Or : Vr, s));
  else {
    if (i == "http://www.w3.org/2000/svg")
      t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      t != "width" &&
      t != "height" &&
      t != "href" &&
      t != "list" &&
      t != "form" &&
      t != "tabIndex" &&
      t != "download" &&
      t != "rowSpan" &&
      t != "colSpan" &&
      t != "role" &&
      t != "popover" &&
      t in e
    )
      try {
        e[t] = n ?? "";
        break e;
      } catch {}
    typeof n == "function" ||
      (n == null || (n === !1 && t[4] != "-")
        ? e.removeAttribute(t)
        : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
  }
}
function gs(e) {
  return function (t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = li++;
      else if (t.t < n.u) return;
      return n(O.event ? O.event(t) : t);
    }
  };
}
function ui(e, t, n, r, i, s, o, a, l, c) {
  var f,
    u,
    d,
    h,
    p,
    m,
    y,
    g,
    v,
    S,
    A,
    x,
    E,
    P,
    R,
    ee,
    Y,
    _e,
    Z = t.type;
  if (t.constructor !== void 0) return null;
  (128 & n.__u && ((l = !!(32 & n.__u)), (s = [(a = t.__e = n.__e)])),
    (f = O.__b) && f(t));
  e: if (typeof Z == "function")
    try {
      if (
        ((g = t.props),
        (v = "prototype" in Z && Z.prototype.render),
        (S = (f = Z.contextType) && r[f.__c]),
        (A = f ? (S ? S.props.value : f.__) : r),
        n.__c
          ? (y = (u = t.__c = n.__c).__ = u.__E)
          : (v
              ? (t.__c = u = new Z(g, A))
              : ((t.__c = u = new we(g, A)),
                (u.constructor = Z),
                (u.render = Bu)),
            S && S.sub(u),
            (u.props = g),
            u.state || (u.state = {}),
            (u.context = A),
            (u.__n = r),
            (d = u.__d = !0),
            (u.__h = []),
            (u._sb = [])),
        v && u.__s == null && (u.__s = u.state),
        v &&
          Z.getDerivedStateFromProps != null &&
          (u.__s == u.state && (u.__s = Ue({}, u.__s)),
          Ue(u.__s, Z.getDerivedStateFromProps(g, u.__s))),
        (h = u.props),
        (p = u.state),
        (u.__v = t),
        d)
      )
        (v &&
          Z.getDerivedStateFromProps == null &&
          u.componentWillMount != null &&
          u.componentWillMount(),
          v && u.componentDidMount != null && u.__h.push(u.componentDidMount));
      else {
        if (
          (v &&
            Z.getDerivedStateFromProps == null &&
            g !== h &&
            u.componentWillReceiveProps != null &&
            u.componentWillReceiveProps(g, A),
          !u.__e &&
            ((u.shouldComponentUpdate != null &&
              u.shouldComponentUpdate(g, u.__s, A) === !1) ||
              t.__v == n.__v))
        ) {
          for (
            t.__v != n.__v && ((u.props = g), (u.state = u.__s), (u.__d = !1)),
              t.__e = n.__e,
              t.__k = n.__k,
              t.__k.some(function ($e) {
                $e && ($e.__ = t);
              }),
              x = 0;
            x < u._sb.length;
            x++
          )
            u.__h.push(u._sb[x]);
          ((u._sb = []), u.__h.length && o.push(u));
          break e;
        }
        (u.componentWillUpdate != null && u.componentWillUpdate(g, u.__s, A),
          v &&
            u.componentDidUpdate != null &&
            u.__h.push(function () {
              u.componentDidUpdate(h, p, m);
            }));
      }
      if (
        ((u.context = A),
        (u.props = g),
        (u.__P = e),
        (u.__e = !1),
        (E = O.__r),
        (P = 0),
        v)
      ) {
        for (
          u.state = u.__s,
            u.__d = !1,
            E && E(t),
            f = u.render(u.props, u.state, u.context),
            R = 0;
          R < u._sb.length;
          R++
        )
          u.__h.push(u._sb[R]);
        u._sb = [];
      } else
        do
          ((u.__d = !1),
            E && E(t),
            (f = u.render(u.props, u.state, u.context)),
            (u.state = u.__s));
        while (u.__d && ++P < 25);
      ((u.state = u.__s),
        u.getChildContext != null && (r = Ue(Ue({}, r), u.getChildContext())),
        v &&
          !d &&
          u.getSnapshotBeforeUpdate != null &&
          (m = u.getSnapshotBeforeUpdate(h, p)),
        (Y = (ee = f != null && f.type === fe && f.key == null)
          ? f.props.children
          : f),
        ee && (f.props.children = null),
        (a = Da(e, Gn(Y) ? Y : [Y], t, n, r, i, s, o, a, l, c)),
        (u.base = t.__e),
        (t.__u &= -161),
        u.__h.length && o.push(u),
        y && (u.__E = u.__ = null));
    } catch ($e) {
      if (((t.__v = null), l || s != null))
        if ($e.then) {
          for (t.__u |= l ? 160 : 128; a && a.nodeType == 8 && a.nextSibling; )
            a = a.nextSibling;
          ((s[s.indexOf(a)] = null), (t.__e = a));
        } else for (_e = s.length; _e--; ) ci(s[_e]);
      else ((t.__e = n.__e), (t.__k = n.__k));
      O.__e($e, t, n);
    }
  else
    s == null && t.__v == n.__v
      ? ((t.__k = n.__k), (t.__e = n.__e))
      : (a = t.__e = Lu(n.__e, t, n, r, i, s, o, l, c));
  return ((f = O.diffed) && f(t), 128 & t.__u ? void 0 : a);
}
function Oa(e, t, n) {
  for (var r = 0; r < n.length; r++) fi(n[r], n[++r], n[++r]);
  (O.__c && O.__c(t, e),
    e.some(function (i) {
      try {
        ((e = i.__h),
          (i.__h = []),
          e.some(function (s) {
            s.call(i);
          }));
      } catch (s) {
        O.__e(s, i.__v);
      }
    }));
}
function Lu(e, t, n, r, i, s, o, a, l) {
  var c,
    f,
    u,
    d,
    h,
    p,
    m,
    y = n.props,
    g = t.props,
    v = t.type;
  if (
    (v == "svg"
      ? (i = "http://www.w3.org/2000/svg")
      : v == "math"
        ? (i = "http://www.w3.org/1998/Math/MathML")
        : i || (i = "http://www.w3.org/1999/xhtml"),
    s != null)
  ) {
    for (c = 0; c < s.length; c++)
      if (
        (h = s[c]) &&
        "setAttribute" in h == !!v &&
        (v ? h.localName == v : h.nodeType == 3)
      ) {
        ((e = h), (s[c] = null));
        break;
      }
  }
  if (e == null) {
    if (v == null) return document.createTextNode(g);
    ((e = document.createElementNS(i, v, g.is && g)),
      a && (O.__m && O.__m(t, s), (a = !1)),
      (s = null));
  }
  if (v === null) y === g || (a && e.data === g) || (e.data = g);
  else {
    if (
      ((s = s && ln.call(e.childNodes)), (y = n.props || Yt), !a && s != null)
    )
      for (y = {}, c = 0; c < e.attributes.length; c++)
        y[(h = e.attributes[c]).name] = h.value;
    for (c in y)
      if (((h = y[c]), c != "children")) {
        if (c == "dangerouslySetInnerHTML") u = h;
        else if (!(c in g)) {
          if (
            (c == "value" && "defaultValue" in g) ||
            (c == "checked" && "defaultChecked" in g)
          )
            continue;
          xn(e, c, null, h, i);
        }
      }
    for (c in g)
      ((h = g[c]),
        c == "children"
          ? (d = h)
          : c == "dangerouslySetInnerHTML"
            ? (f = h)
            : c == "value"
              ? (p = h)
              : c == "checked"
                ? (m = h)
                : (a && typeof h != "function") ||
                  y[c] === h ||
                  xn(e, c, h, y[c], i));
    if (f)
      (a ||
        (u && (f.__html === u.__html || f.__html === e.innerHTML)) ||
        (e.innerHTML = f.__html),
        (t.__k = []));
    else if (
      (u && (e.innerHTML = ""),
      Da(
        t.type === "template" ? e.content : e,
        Gn(d) ? d : [d],
        t,
        n,
        r,
        v == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i,
        s,
        o,
        s ? s[0] : n.__k && St(n, 0),
        a,
        l,
      ),
      s != null)
    )
      for (c = s.length; c--; ) ci(s[c]);
    a ||
      ((c = "value"),
      v == "progress" && p == null
        ? e.removeAttribute("value")
        : p !== void 0 &&
          (p !== e[c] ||
            (v == "progress" && !p) ||
            (v == "option" && p !== y[c])) &&
          xn(e, c, p, y[c], i),
      (c = "checked"),
      m !== void 0 && m !== e[c] && xn(e, c, m, y[c], i));
  }
  return e;
}
function fi(e, t, n) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      (r && e.__u(), (r && t == null) || (e.__u = e(t)));
    } else e.current = t;
  } catch (i) {
    O.__e(i, n);
  }
}
function Ia(e, t, n) {
  var r, i;
  if (
    (O.unmount && O.unmount(e),
    (r = e.ref) && ((r.current && r.current !== e.__e) || fi(r, null, t)),
    (r = e.__c) != null)
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (s) {
        O.__e(s, t);
      }
    r.base = r.__P = null;
  }
  if ((r = e.__k))
    for (i = 0; i < r.length; i++)
      r[i] && Ia(r[i], t, n || typeof e.type != "function");
  (n || ci(e.__e), (e.__c = e.__ = e.__e = void 0));
}
function Bu(e, t, n) {
  return this.constructor(e, n);
}
function xt(e, t, n) {
  var r, i, s, o;
  (t == document && (t = document.documentElement),
    O.__ && O.__(e, t),
    (i = (r = typeof n == "function") ? null : (n && n.__k) || t.__k),
    (s = []),
    (o = []),
    ui(
      t,
      (e = ((!r && n) || t).__k = ce(fe, null, [e])),
      i || Yt,
      Yt,
      t.namespaceURI,
      !r && n ? [n] : i ? null : t.firstChild ? ln.call(t.childNodes) : null,
      s,
      !r && n ? n : i ? i.__e : t.firstChild,
      r,
      o,
    ),
    Oa(s, e, o));
}
function Fa(e, t) {
  xt(e, t, Fa);
}
function $u(e, t, n) {
  var r,
    i,
    s,
    o,
    a = Ue({}, e.props);
  for (s in (e.type && e.type.defaultProps && (o = e.type.defaultProps), t))
    s == "key"
      ? (r = t[s])
      : s == "ref"
        ? (i = t[s])
        : (a[s] = t[s] === void 0 && o !== void 0 ? o[s] : t[s]);
  return (
    arguments.length > 2 &&
      (a.children = arguments.length > 3 ? ln.call(arguments, 2) : n),
    Wt(e.type, a, r || e.key, i || e.ref, null)
  );
}
function Ee(e) {
  function t(n) {
    var r, i;
    return (
      this.getChildContext ||
        ((r = new Set()),
        ((i = {})[t.__c] = this),
        (this.getChildContext = function () {
          return i;
        }),
        (this.componentWillUnmount = function () {
          r = null;
        }),
        (this.shouldComponentUpdate = function (s) {
          this.props.value !== s.value &&
            r.forEach(function (o) {
              ((o.__e = !0), Ir(o));
            });
        }),
        (this.sub = function (s) {
          r.add(s);
          var o = s.componentWillUnmount;
          s.componentWillUnmount = function () {
            (r && r.delete(s), o && o.call(s));
          };
        })),
      n.children
    );
  }
  return (
    (t.__c = "__cC" + Ma++),
    (t.__ = e),
    (t.Provider =
      t.__l =
      (t.Consumer = function (n, r) {
        return n.children(r);
      }).contextType =
        t),
    t
  );
}
((ln = Ea.slice),
  (O = {
    __e: function (e, t, n, r) {
      for (var i, s, o; (t = t.__); )
        if ((i = t.__c) && !i.__)
          try {
            if (
              ((s = i.constructor) &&
                s.getDerivedStateFromError != null &&
                (i.setState(s.getDerivedStateFromError(e)), (o = i.__d)),
              i.componentDidCatch != null &&
                (i.componentDidCatch(e, r || {}), (o = i.__d)),
              o)
            )
              return (i.__E = i);
          } catch (a) {
            e = a;
          }
      throw e;
    },
  }),
  (Ta = 0),
  (we.prototype.setState = function (e, t) {
    var n;
    ((n =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = Ue({}, this.state))),
      typeof e == "function" && (e = e(Ue({}, n), this.props)),
      e && Ue(n, e),
      e != null && this.__v && (t && this._sb.push(t), Ir(this)));
  }),
  (we.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), Ir(this));
  }),
  (we.prototype.render = fe),
  (it = []),
  (Ca =
    typeof Promise == "function"
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (Aa = function (e, t) {
    return e.__v.__b - t.__v.__b;
  }),
  (On.__r = 0),
  (Pa = /(PointerCapture)$|Capture$/i),
  (li = 0),
  (Vr = gs(!1)),
  (Or = gs(!0)),
  (Ma = 0));
var Nu = 0;
function Le(e, t, n, r, i, s) {
  t || (t = {});
  var o,
    a,
    l = t;
  if ("ref" in l)
    for (a in ((l = {}), t)) a == "ref" ? (o = t[a]) : (l[a] = t[a]);
  var c = {
    type: e,
    props: l,
    key: n,
    ref: o,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: --Nu,
    __i: -1,
    __u: 0,
    __source: i,
    __self: s,
  };
  if (typeof e == "function" && (o = e.defaultProps))
    for (a in o) l[a] === void 0 && (l[a] = o[a]);
  return (O.vnode && O.vnode(c), c);
}
var Ke,
  j,
  yr,
  ys,
  wt = 0,
  La = [],
  H = O,
  vs = H.__b,
  _s = H.__r,
  bs = H.diffed,
  Ss = H.__c,
  xs = H.unmount,
  ws = H.__;
function ut(e, t) {
  (H.__h && H.__h(j, e, wt || t), (wt = 0));
  var n = j.__H || (j.__H = { __: [], __h: [] });
  return (e >= n.__.length && n.__.push({}), n.__[e]);
}
function qe(e) {
  return ((wt = 1), qn(Ba, e));
}
function qn(e, t, n) {
  var r = ut(Ke++, 2);
  if (
    ((r.t = e),
    !r.__c &&
      ((r.__ = [
        n ? n(t) : Ba(void 0, t),
        function (a) {
          var l = r.__N ? r.__N[0] : r.__[0],
            c = r.t(l, a);
          l !== c && ((r.__N = [c, r.__[1]]), r.__c.setState({}));
        },
      ]),
      (r.__c = j),
      !j.__f))
  ) {
    var i = function (a, l, c) {
      if (!r.__c.__H) return !0;
      var f = r.__c.__H.__.filter(function (d) {
        return !!d.__c;
      });
      if (
        f.every(function (d) {
          return !d.__N;
        })
      )
        return !s || s.call(this, a, l, c);
      var u = r.__c.props !== a;
      return (
        f.forEach(function (d) {
          if (d.__N) {
            var h = d.__[0];
            ((d.__ = d.__N), (d.__N = void 0), h !== d.__[0] && (u = !0));
          }
        }),
        (s && s.call(this, a, l, c)) || u
      );
    };
    j.__f = !0;
    var s = j.shouldComponentUpdate,
      o = j.componentWillUpdate;
    ((j.componentWillUpdate = function (a, l, c) {
      if (this.__e) {
        var f = s;
        ((s = void 0), i(a, l, c), (s = f));
      }
      o && o.call(this, a, l, c);
    }),
      (j.shouldComponentUpdate = i));
  }
  return r.__N || r.__;
}
function Be(e, t) {
  var n = ut(Ke++, 3);
  !H.__s && pi(n.__H, t) && ((n.__ = e), (n.u = t), j.__H.__h.push(n));
}
function Xe(e, t) {
  var n = ut(Ke++, 4);
  !H.__s && pi(n.__H, t) && ((n.__ = e), (n.u = t), j.__h.push(n));
}
function Ze(e) {
  return (
    (wt = 5),
    Re(function () {
      return { current: e };
    }, [])
  );
}
function di(e, t, n) {
  ((wt = 6),
    Xe(
      function () {
        if (typeof e == "function") {
          var r = e(t());
          return function () {
            (e(null), r && typeof r == "function" && r());
          };
        }
        if (e)
          return (
            (e.current = t()),
            function () {
              return (e.current = null);
            }
          );
      },
      n == null ? n : n.concat(e),
    ));
}
function Re(e, t) {
  var n = ut(Ke++, 7);
  return (pi(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__);
}
function Rt(e, t) {
  return (
    (wt = 8),
    Re(function () {
      return e;
    }, t)
  );
}
function G(e) {
  var t = j.context[e.__c],
    n = ut(Ke++, 9);
  return (
    (n.c = e),
    t ? (n.__ == null && ((n.__ = !0), t.sub(j)), t.props.value) : e.__
  );
}
function hi(e, t) {
  H.useDebugValue && H.useDebugValue(t ? t(e) : e);
}
function ju(e) {
  var t = ut(Ke++, 10),
    n = qe();
  return (
    (t.__ = e),
    j.componentDidCatch ||
      (j.componentDidCatch = function (r, i) {
        (t.__ && t.__(r, i), n[1](r));
      }),
    [
      n[0],
      function () {
        n[1](void 0);
      },
    ]
  );
}
function Xn() {
  var e = ut(Ke++, 11);
  if (!e.__) {
    for (var t = j.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Uu() {
  for (var e; (e = La.shift()); )
    if (e.__P && e.__H)
      try {
        (e.__H.__h.forEach(Pn), e.__H.__h.forEach(Fr), (e.__H.__h = []));
      } catch (t) {
        ((e.__H.__h = []), H.__e(t, e.__v));
      }
}
((H.__b = function (e) {
  ((j = null), vs && vs(e));
}),
  (H.__ = function (e, t) {
    (e && t.__k && t.__k.__m && (e.__m = t.__k.__m), ws && ws(e, t));
  }),
  (H.__r = function (e) {
    (_s && _s(e), (Ke = 0));
    var t = (j = e.__c).__H;
    (t &&
      (yr === j
        ? ((t.__h = []),
          (j.__h = []),
          t.__.forEach(function (n) {
            (n.__N && (n.__ = n.__N), (n.u = n.__N = void 0));
          }))
        : (t.__h.forEach(Pn), t.__h.forEach(Fr), (t.__h = []), (Ke = 0))),
      (yr = j));
  }),
  (H.diffed = function (e) {
    bs && bs(e);
    var t = e.__c;
    (t &&
      t.__H &&
      (t.__H.__h.length &&
        ((La.push(t) !== 1 && ys === H.requestAnimationFrame) ||
          ((ys = H.requestAnimationFrame) || Wu)(Uu)),
      t.__H.__.forEach(function (n) {
        (n.u && (n.__H = n.u), (n.u = void 0));
      })),
      (yr = j = null));
  }),
  (H.__c = function (e, t) {
    (t.some(function (n) {
      try {
        (n.__h.forEach(Pn),
          (n.__h = n.__h.filter(function (r) {
            return !r.__ || Fr(r);
          })));
      } catch (r) {
        (t.some(function (i) {
          i.__h && (i.__h = []);
        }),
          (t = []),
          H.__e(r, n.__v));
      }
    }),
      Ss && Ss(e, t));
  }),
  (H.unmount = function (e) {
    xs && xs(e);
    var t,
      n = e.__c;
    n &&
      n.__H &&
      (n.__H.__.forEach(function (r) {
        try {
          Pn(r);
        } catch (i) {
          t = i;
        }
      }),
      (n.__H = void 0),
      t && H.__e(t, n.__v));
  }));
var Ts = typeof requestAnimationFrame == "function";
function Wu(e) {
  var t,
    n = function () {
      (clearTimeout(r), Ts && cancelAnimationFrame(t), setTimeout(e));
    },
    r = setTimeout(n, 100);
  Ts && (t = requestAnimationFrame(n));
}
function Pn(e) {
  var t = j,
    n = e.__c;
  (typeof n == "function" && ((e.__c = void 0), n()), (j = t));
}
function Fr(e) {
  var t = j;
  ((e.__c = e.__()), (j = t));
}
function pi(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (n, r) {
      return n !== e[r];
    })
  );
}
function Ba(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function $a(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Lr(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function mi(e, t) {
  var n = t(),
    r = qe({ t: { __: n, u: t } }),
    i = r[0].t,
    s = r[1];
  return (
    Xe(
      function () {
        ((i.__ = n), (i.u = t), vr(i) && s({ t: i }));
      },
      [e, n, t],
    ),
    Be(
      function () {
        return (
          vr(i) && s({ t: i }),
          e(function () {
            vr(i) && s({ t: i });
          })
        );
      },
      [e],
    ),
    n
  );
}
function vr(e) {
  var t,
    n,
    r = e.u,
    i = e.__;
  try {
    var s = r();
    return !(
      ((t = i) === (n = s) && (t !== 0 || 1 / t == 1 / n)) ||
      (t != t && n != n)
    );
  } catch {
    return !0;
  }
}
function gi(e) {
  e();
}
function yi(e) {
  return e;
}
function vi() {
  return [!1, gi];
}
var Yn = Xe;
function In(e, t) {
  ((this.props = e), (this.context = t));
}
function Na(e, t) {
  function n(i) {
    var s = this.props.ref,
      o = s == i.ref;
    return (
      !o && s && (s.call ? s(null) : (s.current = null)),
      t ? !t(this.props, i) || !o : Lr(this.props, i)
    );
  }
  function r(i) {
    return ((this.shouldComponentUpdate = n), ce(e, i));
  }
  return (
    (r.displayName = "Memo(" + (e.displayName || e.name) + ")"),
    (r.prototype.isReactComponent = !0),
    (r.__f = !0),
    r
  );
}
(((In.prototype = new we()).isPureReactComponent = !0),
  (In.prototype.shouldComponentUpdate = function (e, t) {
    return Lr(this.props, e) || Lr(this.state, t);
  }));
var Cs = O.__b;
O.__b = function (e) {
  (e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
    Cs && Cs(e));
};
var Hu =
  (typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref")) ||
  3911;
function cn(e) {
  function t(n) {
    var r = $a({}, n);
    return (delete r.ref, e(r, n.ref || null));
  }
  return (
    (t.$$typeof = Hu),
    (t.render = t),
    (t.prototype.isReactComponent = t.__f = !0),
    (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
    t
  );
}
var As = function (e, t) {
    return e == null ? null : We(We(e).map(t));
  },
  ja = {
    map: As,
    forEach: As,
    count: function (e) {
      return e ? We(e).length : 0;
    },
    only: function (e) {
      var t = We(e);
      if (t.length !== 1) throw "Children.only";
      return t[0];
    },
    toArray: We,
  },
  zu = O.__e;
O.__e = function (e, t, n, r) {
  if (e.then) {
    for (var i, s = t; (s = s.__); )
      if ((i = s.__c) && i.__c)
        return (
          t.__e == null && ((t.__e = n.__e), (t.__k = n.__k)),
          i.__c(e, t)
        );
  }
  zu(e, t, n, r);
};
var Ps = O.unmount;
function Ua(e, t, n) {
  return (
    e &&
      (e.__c &&
        e.__c.__H &&
        (e.__c.__H.__.forEach(function (r) {
          typeof r.__c == "function" && r.__c();
        }),
        (e.__c.__H = null)),
      (e = $a({}, e)).__c != null &&
        (e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
      (e.__k =
        e.__k &&
        e.__k.map(function (r) {
          return Ua(r, t, n);
        }))),
    e
  );
}
function Wa(e, t, n) {
  return (
    e &&
      n &&
      ((e.__v = null),
      (e.__k =
        e.__k &&
        e.__k.map(function (r) {
          return Wa(r, t, n);
        })),
      e.__c &&
        e.__c.__P === t &&
        (e.__e && n.appendChild(e.__e), (e.__c.__e = !0), (e.__c.__P = n))),
    e
  );
}
function Ht() {
  ((this.__u = 0), (this.o = null), (this.__b = null));
}
function Ha(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function za(e) {
  var t, n, r;
  function i(s) {
    if (
      (t ||
        (t = e()).then(
          function (o) {
            n = o.default || o;
          },
          function (o) {
            r = o;
          },
        ),
      r)
    )
      throw r;
    if (!n) throw t;
    return ce(n, s);
  }
  return ((i.displayName = "Lazy"), (i.__f = !0), i);
}
function pt() {
  ((this.i = null), (this.l = null));
}
((O.unmount = function (e) {
  var t = e.__c;
  (t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Ps && Ps(e));
}),
  ((Ht.prototype = new we()).__c = function (e, t) {
    var n = t.__c,
      r = this;
    (r.o == null && (r.o = []), r.o.push(n));
    var i = Ha(r.__v),
      s = !1,
      o = function () {
        s || ((s = !0), (n.__R = null), i ? i(a) : a());
      };
    n.__R = o;
    var a = function () {
      if (!--r.__u) {
        if (r.state.__a) {
          var l = r.state.__a;
          r.__v.__k[0] = Wa(l, l.__c.__P, l.__c.__O);
        }
        var c;
        for (r.setState({ __a: (r.__b = null) }); (c = r.o.pop()); )
          c.forceUpdate();
      }
    };
    (r.__u++ || 32 & t.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
      e.then(o, o));
  }),
  (Ht.prototype.componentWillUnmount = function () {
    this.o = [];
  }),
  (Ht.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"),
          r = this.__v.__k[0].__c;
        this.__v.__k[0] = Ua(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    var i = t.__a && ce(fe, null, e.fallback);
    return (i && (i.__u &= -33), [ce(fe, null, t.__a ? null : e.children), i]);
  }));
var Ms = function (e, t, n) {
  if (
    (++n[1] === n[0] && e.l.delete(t),
    e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size))
  )
    for (n = e.i; n; ) {
      for (; n.length > 3; ) n.pop()();
      if (n[1] < n[0]) break;
      e.i = n = n[2];
    }
};
function Ku(e) {
  return (
    (this.getChildContext = function () {
      return e.context;
    }),
    e.children
  );
}
function Gu(e) {
  var t = this,
    n = e.h;
  ((t.componentWillUnmount = function () {
    (xt(null, t.v), (t.v = null), (t.h = null));
  }),
    t.h && t.h !== n && t.componentWillUnmount(),
    t.v ||
      ((t.h = n),
      (t.v = {
        nodeType: 1,
        parentNode: n,
        childNodes: [],
        contains: function () {
          return !0;
        },
        appendChild: function (r) {
          (this.childNodes.push(r), t.h.appendChild(r));
        },
        insertBefore: function (r, i) {
          (this.childNodes.push(r), t.h.insertBefore(r, i));
        },
        removeChild: function (r) {
          (this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1),
            t.h.removeChild(r));
        },
      })),
    xt(ce(Ku, { context: t.context }, e.__v), t.v));
}
function Ka(e, t) {
  var n = ce(Gu, { __v: e, h: t });
  return ((n.containerInfo = t), n);
}
(((pt.prototype = new we()).__a = function (e) {
  var t = this,
    n = Ha(t.__v),
    r = t.l.get(e);
  return (
    r[0]++,
    function (i) {
      var s = function () {
        t.props.revealOrder ? (r.push(i), Ms(t, e, r)) : i();
      };
      n ? n(s) : s();
    }
  );
}),
  (pt.prototype.render = function (e) {
    ((this.i = null), (this.l = new Map()));
    var t = We(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var n = t.length; n--; ) this.l.set(t[n], (this.i = [1, 0, this.i]));
    return e.children;
  }),
  (pt.prototype.componentDidUpdate = pt.prototype.componentDidMount =
    function () {
      var e = this;
      this.l.forEach(function (t, n) {
        Ms(e, n, t);
      });
    }));
var Ga =
    (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) || 60103,
  qu =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  Xu = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
  Yu = /[A-Z0-9]/g,
  Zu = typeof document < "u",
  Ju = function (e) {
    return (
      typeof Symbol < "u" && typeof Symbol() == "symbol"
        ? /fil|che|rad/
        : /fil|che|ra/
    ).test(e);
  };
function qa(e, t, n) {
  return (
    t.__k == null && (t.textContent = ""),
    xt(e, t),
    typeof n == "function" && n(),
    e ? e.__c : null
  );
}
function Xa(e, t, n) {
  return (Fa(e, t), typeof n == "function" && n(), e ? e.__c : null);
}
((we.prototype.isReactComponent = {}),
  [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate",
  ].forEach(function (e) {
    Object.defineProperty(we.prototype, e, {
      configurable: !0,
      get: function () {
        return this["UNSAFE_" + e];
      },
      set: function (t) {
        Object.defineProperty(this, e, {
          configurable: !0,
          writable: !0,
          value: t,
        });
      },
    });
  }));
var Es = O.event;
function Qu() {}
function ef() {
  return this.cancelBubble;
}
function tf() {
  return this.defaultPrevented;
}
O.event = function (e) {
  return (
    Es && (e = Es(e)),
    (e.persist = Qu),
    (e.isPropagationStopped = ef),
    (e.isDefaultPrevented = tf),
    (e.nativeEvent = e)
  );
};
var _i,
  nf = {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  Rs = O.vnode;
O.vnode = function (e) {
  (typeof e.type == "string" &&
    (function (t) {
      var n = t.props,
        r = t.type,
        i = {},
        s = r.indexOf("-") === -1;
      for (var o in n) {
        var a = n[o];
        if (
          !(
            (o === "value" && "defaultValue" in n && a == null) ||
            (Zu && o === "children" && r === "noscript") ||
            o === "class" ||
            o === "className"
          )
        ) {
          var l = o.toLowerCase();
          (o === "defaultValue" && "value" in n && n.value == null
            ? (o = "value")
            : o === "download" && a === !0
              ? (a = "")
              : l === "translate" && a === "no"
                ? (a = !1)
                : l[0] === "o" && l[1] === "n"
                  ? l === "ondoubleclick"
                    ? (o = "ondblclick")
                    : l !== "onchange" ||
                        (r !== "input" && r !== "textarea") ||
                        Ju(n.type)
                      ? l === "onfocus"
                        ? (o = "onfocusin")
                        : l === "onblur"
                          ? (o = "onfocusout")
                          : Xu.test(o) && (o = l)
                      : (l = o = "oninput")
                  : s && qu.test(o)
                    ? (o = o.replace(Yu, "-$&").toLowerCase())
                    : a === null && (a = void 0),
            l === "oninput" && i[(o = l)] && (o = "oninputCapture"),
            (i[o] = a));
        }
      }
      (r == "select" &&
        i.multiple &&
        Array.isArray(i.value) &&
        (i.value = We(n.children).forEach(function (c) {
          c.props.selected = i.value.indexOf(c.props.value) != -1;
        })),
        r == "select" &&
          i.defaultValue != null &&
          (i.value = We(n.children).forEach(function (c) {
            c.props.selected = i.multiple
              ? i.defaultValue.indexOf(c.props.value) != -1
              : i.defaultValue == c.props.value;
          })),
        n.class && !n.className
          ? ((i.class = n.class), Object.defineProperty(i, "className", nf))
          : ((n.className && !n.class) || (n.class && n.className)) &&
            (i.class = i.className = n.className),
        (t.props = i));
    })(e),
    (e.$$typeof = Ga),
    Rs && Rs(e));
};
var ks = O.__r;
O.__r = function (e) {
  (ks && ks(e), (_i = e.__c));
};
var Ds = O.diffed;
O.diffed = function (e) {
  Ds && Ds(e);
  var t = e.props,
    n = e.__e;
  (n != null &&
    e.type === "textarea" &&
    "value" in t &&
    t.value !== n.value &&
    (n.value = t.value == null ? "" : t.value),
    (_i = null));
};
var Ya = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function (e) {
          return _i.__n[e.__c].props.value;
        },
        useCallback: Rt,
        useContext: G,
        useDebugValue: hi,
        useDeferredValue: yi,
        useEffect: Be,
        useId: Xn,
        useImperativeHandle: di,
        useInsertionEffect: Yn,
        useLayoutEffect: Xe,
        useMemo: Re,
        useReducer: qn,
        useRef: Ze,
        useState: qe,
        useSyncExternalStore: mi,
        useTransition: vi,
      },
    },
  },
  rf = "18.3.1";
function Za(e) {
  return ce.bind(null, e);
}
function un(e) {
  return !!e && e.$$typeof === Ga;
}
function Ja(e) {
  return un(e) && e.type === fe;
}
function Qa(e) {
  return (
    !!e &&
    !!e.displayName &&
    (typeof e.displayName == "string" || e.displayName instanceof String) &&
    e.displayName.startsWith("Memo(")
  );
}
function el(e) {
  return un(e) ? $u.apply(null, arguments) : e;
}
function tl(e) {
  return !!e.__k && (xt(null, e), !0);
}
function nl(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}
var rl = function (e, t) {
    return e(t);
  },
  il = function (e, t) {
    return e(t);
  },
  sl = fe,
  ol = un,
  kt = {
    useState: qe,
    useId: Xn,
    useReducer: qn,
    useEffect: Be,
    useLayoutEffect: Xe,
    useInsertionEffect: Yn,
    useTransition: vi,
    useDeferredValue: yi,
    useSyncExternalStore: mi,
    startTransition: gi,
    useRef: Ze,
    useImperativeHandle: di,
    useMemo: Re,
    useCallback: Rt,
    useContext: G,
    useDebugValue: hi,
    version: "18.3.1",
    Children: ja,
    render: qa,
    hydrate: Xa,
    unmountComponentAtNode: tl,
    createPortal: Ka,
    createElement: ce,
    createContext: Ee,
    createFactory: Za,
    cloneElement: el,
    createRef: Ra,
    Fragment: fe,
    isValidElement: un,
    isElement: ol,
    isFragment: Ja,
    isMemo: Qa,
    findDOMNode: nl,
    Component: we,
    PureComponent: In,
    memo: Na,
    forwardRef: cn,
    flushSync: il,
    unstable_batchedUpdates: rl,
    StrictMode: sl,
    Suspense: Ht,
    SuspenseList: pt,
    lazy: za,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ya,
  };
const Vs = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Children: ja,
      Component: we,
      Fragment: fe,
      PureComponent: In,
      StrictMode: sl,
      Suspense: Ht,
      SuspenseList: pt,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ya,
      cloneElement: el,
      createContext: Ee,
      createElement: ce,
      createFactory: Za,
      createPortal: Ka,
      createRef: Ra,
      default: kt,
      findDOMNode: nl,
      flushSync: il,
      forwardRef: cn,
      hydrate: Xa,
      isElement: ol,
      isFragment: Ja,
      isMemo: Qa,
      isValidElement: un,
      lazy: za,
      memo: Na,
      render: qa,
      startTransition: gi,
      unmountComponentAtNode: tl,
      unstable_batchedUpdates: rl,
      useCallback: Rt,
      useContext: G,
      useDebugValue: hi,
      useDeferredValue: yi,
      useEffect: Be,
      useErrorBoundary: ju,
      useId: Xn,
      useImperativeHandle: di,
      useInsertionEffect: Yn,
      useLayoutEffect: Xe,
      useMemo: Re,
      useReducer: qn,
      useRef: Ze,
      useState: qe,
      useSyncExternalStore: mi,
      useTransition: vi,
      version: rf,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function sf(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function of(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var af = (function () {
    function e(n) {
      var r = this;
      ((this._insertTag = function (i) {
        var s;
        (r.tags.length === 0
          ? r.insertionPoint
            ? (s = r.insertionPoint.nextSibling)
            : r.prepend
              ? (s = r.container.firstChild)
              : (s = r.before)
          : (s = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(i, s),
          r.tags.push(i));
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null));
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(of(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var s = sf(i);
          try {
            s.insertRule(r, s.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        (this.tags.forEach(function (r) {
          var i;
          return (i = r.parentNode) == null ? void 0 : i.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0));
      }),
      e
    );
  })(),
  oe = "-ms-",
  Fn = "-moz-",
  B = "-webkit-",
  al = "comm",
  bi = "rule",
  Si = "decl",
  lf = "@import",
  ll = "@keyframes",
  cf = "@layer",
  uf = Math.abs,
  Zn = String.fromCharCode,
  ff = Object.assign;
function df(e, t) {
  return se(e, 0) ^ 45
    ? (((((((t << 2) ^ se(e, 0)) << 2) ^ se(e, 1)) << 2) ^ se(e, 2)) << 2) ^
        se(e, 3)
    : 0;
}
function cl(e) {
  return e.trim();
}
function hf(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function $(e, t, n) {
  return e.replace(t, n);
}
function Br(e, t) {
  return e.indexOf(t);
}
function se(e, t) {
  return e.charCodeAt(t) | 0;
}
function Zt(e, t, n) {
  return e.slice(t, n);
}
function ke(e) {
  return e.length;
}
function xi(e) {
  return e.length;
}
function wn(e, t) {
  return (t.push(e), e);
}
function pf(e, t) {
  return e.map(t).join("");
}
var Jn = 1,
  Tt = 1,
  ul = 0,
  de = 0,
  Q = 0,
  Dt = "";
function Qn(e, t, n, r, i, s, o) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: s,
    line: Jn,
    column: Tt,
    length: o,
    return: "",
  };
}
function Lt(e, t) {
  return ff(Qn("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function mf() {
  return Q;
}
function gf() {
  return (
    (Q = de > 0 ? se(Dt, --de) : 0),
    Tt--,
    Q === 10 && ((Tt = 1), Jn--),
    Q
  );
}
function me() {
  return (
    (Q = de < ul ? se(Dt, de++) : 0),
    Tt++,
    Q === 10 && ((Tt = 1), Jn++),
    Q
  );
}
function Oe() {
  return se(Dt, de);
}
function Mn() {
  return de;
}
function fn(e, t) {
  return Zt(Dt, e, t);
}
function Jt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function fl(e) {
  return ((Jn = Tt = 1), (ul = ke((Dt = e))), (de = 0), []);
}
function dl(e) {
  return ((Dt = ""), e);
}
function En(e) {
  return cl(fn(de - 1, $r(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function yf(e) {
  for (; (Q = Oe()) && Q < 33; ) me();
  return Jt(e) > 2 || Jt(Q) > 3 ? "" : " ";
}
function vf(e, t) {
  for (
    ;
    --t &&
    me() &&
    !(Q < 48 || Q > 102 || (Q > 57 && Q < 65) || (Q > 70 && Q < 97));
  );
  return fn(e, Mn() + (t < 6 && Oe() == 32 && me() == 32));
}
function $r(e) {
  for (; me(); )
    switch (Q) {
      case e:
        return de;
      case 34:
      case 39:
        e !== 34 && e !== 39 && $r(Q);
        break;
      case 40:
        e === 41 && $r(e);
        break;
      case 92:
        me();
        break;
    }
  return de;
}
function _f(e, t) {
  for (; me() && e + Q !== 57; ) if (e + Q === 84 && Oe() === 47) break;
  return "/*" + fn(t, de - 1) + "*" + Zn(e === 47 ? e : me());
}
function bf(e) {
  for (; !Jt(Oe()); ) me();
  return fn(e, de);
}
function Sf(e) {
  return dl(Rn("", null, null, null, [""], (e = fl(e)), 0, [0], e));
}
function Rn(e, t, n, r, i, s, o, a, l) {
  for (
    var c = 0,
      f = 0,
      u = o,
      d = 0,
      h = 0,
      p = 0,
      m = 1,
      y = 1,
      g = 1,
      v = 0,
      S = "",
      A = i,
      x = s,
      E = r,
      P = S;
    y;
  )
    switch (((p = v), (v = me()))) {
      case 40:
        if (p != 108 && se(P, u - 1) == 58) {
          Br((P += $(En(v), "&", "&\f")), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += En(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += yf(p);
        break;
      case 92:
        P += vf(Mn() - 1, 7);
        continue;
      case 47:
        switch (Oe()) {
          case 42:
          case 47:
            wn(xf(_f(me(), Mn()), t, n), l);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * m:
        a[c++] = ke(P) * g;
      case 125 * m:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            y = 0;
          case 59 + f:
            (g == -1 && (P = $(P, /\f/g, "")),
              h > 0 &&
                ke(P) - u &&
                wn(
                  h > 32
                    ? Is(P + ";", r, n, u - 1)
                    : Is($(P, " ", "") + ";", r, n, u - 2),
                  l,
                ));
            break;
          case 59:
            P += ";";
          default:
            if (
              (wn((E = Os(P, t, n, c, f, i, a, S, (A = []), (x = []), u)), s),
              v === 123)
            )
              if (f === 0) Rn(P, t, E, E, A, s, u, a, x);
              else
                switch (d === 99 && se(P, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Rn(
                      e,
                      E,
                      E,
                      r && wn(Os(e, E, E, 0, 0, i, a, S, i, (A = []), u), x),
                      i,
                      x,
                      u,
                      a,
                      r ? A : x,
                    );
                    break;
                  default:
                    Rn(P, E, E, E, [""], x, 0, a, x);
                }
        }
        ((c = f = h = 0), (m = g = 1), (S = P = ""), (u = o));
        break;
      case 58:
        ((u = 1 + ke(P)), (h = p));
      default:
        if (m < 1) {
          if (v == 123) --m;
          else if (v == 125 && m++ == 0 && gf() == 125) continue;
        }
        switch (((P += Zn(v)), v * m)) {
          case 38:
            g = f > 0 ? 1 : ((P += "\f"), -1);
            break;
          case 44:
            ((a[c++] = (ke(P) - 1) * g), (g = 1));
            break;
          case 64:
            (Oe() === 45 && (P += En(me())),
              (d = Oe()),
              (f = u = ke((S = P += bf(Mn())))),
              v++);
            break;
          case 45:
            p === 45 && ke(P) == 2 && (m = 0);
        }
    }
  return s;
}
function Os(e, t, n, r, i, s, o, a, l, c, f) {
  for (
    var u = i - 1, d = i === 0 ? s : [""], h = xi(d), p = 0, m = 0, y = 0;
    p < r;
    ++p
  )
    for (var g = 0, v = Zt(e, u + 1, (u = uf((m = o[p])))), S = e; g < h; ++g)
      (S = cl(m > 0 ? d[g] + " " + v : $(v, /&\f/g, d[g]))) && (l[y++] = S);
  return Qn(e, t, n, i === 0 ? bi : a, l, c, f);
}
function xf(e, t, n) {
  return Qn(e, t, n, al, Zn(mf()), Zt(e, 2, -2), 0);
}
function Is(e, t, n, r) {
  return Qn(e, t, n, Si, Zt(e, 0, r), Zt(e, r + 1, -1), r);
}
function bt(e, t) {
  for (var n = "", r = xi(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
  return n;
}
function wf(e, t, n, r) {
  switch (e.type) {
    case cf:
      if (e.children.length) break;
    case lf:
    case Si:
      return (e.return = e.return || e.value);
    case al:
      return "";
    case ll:
      return (e.return = e.value + "{" + bt(e.children, r) + "}");
    case bi:
      e.value = e.props.join(",");
  }
  return ke((n = bt(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function Tf(e) {
  var t = xi(e);
  return function (n, r, i, s) {
    for (var o = "", a = 0; a < t; a++) o += e[a](n, r, i, s) || "";
    return o;
  };
}
function Cf(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Af(e) {
  var t = Object.create(null);
  return function (n) {
    return (t[n] === void 0 && (t[n] = e(n)), t[n]);
  };
}
var Pf = function (t, n, r) {
    for (
      var i = 0, s = 0;
      (i = s), (s = Oe()), i === 38 && s === 12 && (n[r] = 1), !Jt(s);
    )
      me();
    return fn(t, de);
  },
  Mf = function (t, n) {
    var r = -1,
      i = 44;
    do
      switch (Jt(i)) {
        case 0:
          (i === 38 && Oe() === 12 && (n[r] = 1), (t[r] += Pf(de - 1, n, r)));
          break;
        case 2:
          t[r] += En(i);
          break;
        case 4:
          if (i === 44) {
            ((t[++r] = Oe() === 58 ? "&\f" : ""), (n[r] = t[r].length));
            break;
          }
        default:
          t[r] += Zn(i);
      }
    while ((i = me()));
    return t;
  },
  Ef = function (t, n) {
    return dl(Mf(fl(t), n));
  },
  Fs = new WeakMap(),
  Rf = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          i = t.column === r.column && t.line === r.line;
        r.type !== "rule";
      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Fs.get(r)) &&
        !i
      ) {
        Fs.set(t, !0);
        for (
          var s = [], o = Ef(n, s), a = r.props, l = 0, c = 0;
          l < o.length;
          l++
        )
          for (var f = 0; f < a.length; f++, c++)
            t.props[c] = s[l] ? o[l].replace(/&\f/g, a[f]) : a[f] + " " + o[l];
      }
    }
  },
  kf = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function hl(e, t) {
  switch (df(e, t)) {
    case 5103:
      return B + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return B + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return B + e + Fn + e + oe + e + e;
    case 6828:
    case 4268:
      return B + e + oe + e + e;
    case 6165:
      return B + e + oe + "flex-" + e + e;
    case 5187:
      return (
        B + e + $(e, /(\w+).+(:[^]+)/, B + "box-$1$2" + oe + "flex-$1$2") + e
      );
    case 5443:
      return B + e + oe + "flex-item-" + $(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        B +
        e +
        oe +
        "flex-line-pack" +
        $(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return B + e + oe + $(e, "shrink", "negative") + e;
    case 5292:
      return B + e + oe + $(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        B +
        "box-" +
        $(e, "-grow", "") +
        B +
        e +
        oe +
        $(e, "grow", "positive") +
        e
      );
    case 4554:
      return B + $(e, /([^-])(transform)/g, "$1" + B + "$2") + e;
    case 6187:
      return (
        $($($(e, /(zoom-|grab)/, B + "$1"), /(image-set)/, B + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return $(e, /(image-set\([^]*)/, B + "$1$`$1");
    case 4968:
      return (
        $(
          $(e, /(.+:)(flex-)?(.*)/, B + "box-pack:$3" + oe + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        B +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return $(e, /(.+)-inline(.+)/, B + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ke(e) - 1 - t > 6)
        switch (se(e, t + 1)) {
          case 109:
            if (se(e, t + 4) !== 45) break;
          case 102:
            return (
              $(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  B +
                  "$2-$3$1" +
                  Fn +
                  (se(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Br(e, "stretch")
              ? hl($(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (se(e, t + 1) !== 115) break;
    case 6444:
      switch (se(e, ke(e) - 3 - (~Br(e, "!important") && 10))) {
        case 107:
          return $(e, ":", ":" + B) + e;
        case 101:
          return (
            $(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                B +
                (se(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                B +
                "$2$3$1" +
                oe +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (se(e, t + 11)) {
        case 114:
          return B + e + oe + $(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return B + e + oe + $(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return B + e + oe + $(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return B + e + oe + e + e;
  }
  return e;
}
var Df = function (t, n, r, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Si:
          t.return = hl(t.value, t.length);
          break;
        case ll:
          return bt([Lt(t, { value: $(t.value, "@", "@" + B) })], i);
        case bi:
          if (t.length)
            return pf(t.props, function (s) {
              switch (hf(s, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return bt(
                    [Lt(t, { props: [$(s, /:(read-\w+)/, ":" + Fn + "$1")] })],
                    i,
                  );
                case "::placeholder":
                  return bt(
                    [
                      Lt(t, {
                        props: [$(s, /:(plac\w+)/, ":" + B + "input-$1")],
                      }),
                      Lt(t, { props: [$(s, /:(plac\w+)/, ":" + Fn + "$1")] }),
                      Lt(t, { props: [$(s, /:(plac\w+)/, oe + "input-$1")] }),
                    ],
                    i,
                  );
              }
              return "";
            });
      }
  },
  Vf = [Df],
  Of = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (m) {
        var y = m.getAttribute("data-emotion");
        y.indexOf(" ") !== -1 &&
          (document.head.appendChild(m), m.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || Vf,
      s = {},
      o,
      a = [];
    ((o = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (m) {
          for (
            var y = m.getAttribute("data-emotion").split(" "), g = 1;
            g < y.length;
            g++
          )
            s[y[g]] = !0;
          a.push(m);
        },
      ));
    var l,
      c = [Rf, kf];
    {
      var f,
        u = [
          wf,
          Cf(function (m) {
            f.insert(m);
          }),
        ],
        d = Tf(c.concat(i, u)),
        h = function (y) {
          return bt(Sf(y), d);
        };
      l = function (y, g, v, S) {
        ((f = v),
          h(y ? y + "{" + g.styles + "}" : g.styles),
          S && (p.inserted[g.name] = !0));
      };
    }
    var p = {
      key: n,
      sheet: new af({
        key: n,
        container: o,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: s,
      registered: {},
      insert: l,
    };
    return (p.sheet.hydrate(a), p);
  };
function If(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var pl = { exports: {} },
  N = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var te = typeof Symbol == "function" && Symbol.for,
  wi = te ? Symbol.for("react.element") : 60103,
  Ti = te ? Symbol.for("react.portal") : 60106,
  er = te ? Symbol.for("react.fragment") : 60107,
  tr = te ? Symbol.for("react.strict_mode") : 60108,
  nr = te ? Symbol.for("react.profiler") : 60114,
  rr = te ? Symbol.for("react.provider") : 60109,
  ir = te ? Symbol.for("react.context") : 60110,
  Ci = te ? Symbol.for("react.async_mode") : 60111,
  sr = te ? Symbol.for("react.concurrent_mode") : 60111,
  or = te ? Symbol.for("react.forward_ref") : 60112,
  ar = te ? Symbol.for("react.suspense") : 60113,
  Ff = te ? Symbol.for("react.suspense_list") : 60120,
  lr = te ? Symbol.for("react.memo") : 60115,
  cr = te ? Symbol.for("react.lazy") : 60116,
  Lf = te ? Symbol.for("react.block") : 60121,
  Bf = te ? Symbol.for("react.fundamental") : 60117,
  $f = te ? Symbol.for("react.responder") : 60118,
  Nf = te ? Symbol.for("react.scope") : 60119;
function ve(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case wi:
        switch (((e = e.type), e)) {
          case Ci:
          case sr:
          case er:
          case nr:
          case tr:
          case ar:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ir:
              case or:
              case cr:
              case lr:
              case rr:
                return e;
              default:
                return t;
            }
        }
      case Ti:
        return t;
    }
  }
}
function ml(e) {
  return ve(e) === sr;
}
N.AsyncMode = Ci;
N.ConcurrentMode = sr;
N.ContextConsumer = ir;
N.ContextProvider = rr;
N.Element = wi;
N.ForwardRef = or;
N.Fragment = er;
N.Lazy = cr;
N.Memo = lr;
N.Portal = Ti;
N.Profiler = nr;
N.StrictMode = tr;
N.Suspense = ar;
N.isAsyncMode = function (e) {
  return ml(e) || ve(e) === Ci;
};
N.isConcurrentMode = ml;
N.isContextConsumer = function (e) {
  return ve(e) === ir;
};
N.isContextProvider = function (e) {
  return ve(e) === rr;
};
N.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === wi;
};
N.isForwardRef = function (e) {
  return ve(e) === or;
};
N.isFragment = function (e) {
  return ve(e) === er;
};
N.isLazy = function (e) {
  return ve(e) === cr;
};
N.isMemo = function (e) {
  return ve(e) === lr;
};
N.isPortal = function (e) {
  return ve(e) === Ti;
};
N.isProfiler = function (e) {
  return ve(e) === nr;
};
N.isStrictMode = function (e) {
  return ve(e) === tr;
};
N.isSuspense = function (e) {
  return ve(e) === ar;
};
N.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === er ||
    e === sr ||
    e === nr ||
    e === tr ||
    e === ar ||
    e === Ff ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === cr ||
        e.$$typeof === lr ||
        e.$$typeof === rr ||
        e.$$typeof === ir ||
        e.$$typeof === or ||
        e.$$typeof === Bf ||
        e.$$typeof === $f ||
        e.$$typeof === Nf ||
        e.$$typeof === Lf))
  );
};
N.typeOf = ve;
pl.exports = N;
var jf = pl.exports,
  gl = jf,
  Uf = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Wf = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  yl = {};
yl[gl.ForwardRef] = Uf;
yl[gl.Memo] = Wf;
var Hf = !0;
function zf(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : i && (r += i + " ");
    }),
    r
  );
}
var vl = function (t, n, r) {
    var i = t.key + "-" + n.name;
    (r === !1 || Hf === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = n.styles);
  },
  _l = function (t, n, r) {
    vl(t, n, r);
    var i = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var s = n;
      do (t.insert(n === s ? "." + i : "", s, t.sheet, !0), (s = s.next));
      while (s !== void 0);
    }
  };
function Kf(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    ((n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      ((t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var Gf = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  qf = /[A-Z]|^ms/g,
  Xf = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  bl = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Ls = function (t) {
    return t != null && typeof t != "boolean";
  },
  _r = Af(function (e) {
    return bl(e) ? e : e.replace(qf, "-$&").toLowerCase();
  }),
  Bs = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(Xf, function (r, i, s) {
            return ((De = { name: i, styles: s, next: De }), i);
          });
    }
    return Gf[t] !== 1 && !bl(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function Qt(e, t, n) {
  if (n == null) return "";
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1)
        return ((De = { name: i.name, styles: i.styles, next: De }), i.name);
      var s = n;
      if (s.styles !== void 0) {
        var o = s.next;
        if (o !== void 0)
          for (; o !== void 0; )
            ((De = { name: o.name, styles: o.styles, next: De }), (o = o.next));
        var a = s.styles + ";";
        return a;
      }
      return Yf(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = De,
          c = n(e);
        return ((De = l), Qt(e, t, c));
      }
      break;
    }
  }
  var f = n;
  return f;
}
function Yf(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++) r += Qt(e, t, n[i]) + ";";
  else
    for (var s in n) {
      var o = n[s];
      if (typeof o != "object") {
        var a = o;
        Ls(a) && (r += _r(s) + ":" + Bs(s, a) + ";");
      } else if (Array.isArray(o) && typeof o[0] == "string" && t == null)
        for (var l = 0; l < o.length; l++)
          Ls(o[l]) && (r += _r(s) + ":" + Bs(s, o[l]) + ";");
      else {
        var c = Qt(e, t, o);
        switch (s) {
          case "animation":
          case "animationName": {
            r += _r(s) + ":" + c + ";";
            break;
          }
          default:
            r += s + "{" + c + "}";
        }
      }
    }
  return r;
}
var $s = /label:\s*([^\s;{]+)\s*(;|$)/g,
  De;
function Sl(e, t, n) {
  if (
    e.length === 1 &&
    typeof e[0] == "object" &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var r = !0,
    i = "";
  De = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0) ((r = !1), (i += Qt(n, t, s)));
  else {
    var o = s;
    i += o[0];
  }
  for (var a = 1; a < e.length; a++)
    if (((i += Qt(n, t, e[a])), r)) {
      var l = s;
      i += l[a];
    }
  $s.lastIndex = 0;
  for (var c = "", f; (f = $s.exec(i)) !== null; ) c += "-" + f[1];
  var u = Kf(i) + c;
  return { name: u, styles: i, next: De };
}
var Zf = function (t) {
    return t();
  },
  xl = Vs.useInsertionEffect ? Vs.useInsertionEffect : !1,
  Jf = xl || Zf,
  Ns = xl || Xe,
  wl = Ee(typeof HTMLElement < "u" ? Of({ key: "css" }) : null);
wl.Provider;
var Tl = function (t) {
    return cn(function (n, r) {
      var i = G(wl);
      return t(n, i, r);
    });
  },
  ur = Ee({}),
  Qf = function () {
    return G(ur);
  },
  dn = {}.hasOwnProperty,
  Nr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Ai = function (t, n) {
    var r = {};
    for (var i in n) dn.call(n, i) && (r[i] = n[i]);
    return ((r[Nr] = t), r);
  },
  ed = function (t) {
    var n = t.cache,
      r = t.serialized,
      i = t.isStringTag;
    return (
      vl(n, r, i),
      Jf(function () {
        return _l(n, r, i);
      }),
      null
    );
  },
  td = Tl(function (e, t, n) {
    var r = e.css;
    typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
    var i = e[Nr],
      s = [r],
      o = "";
    typeof e.className == "string"
      ? (o = zf(t.registered, s, e.className))
      : e.className != null && (o = e.className + " ");
    var a = Sl(s, void 0, G(ur));
    o += t.key + "-" + a.name;
    var l = {};
    for (var c in e) dn.call(e, c) && c !== "css" && c !== Nr && (l[c] = e[c]);
    return (
      (l.className = o),
      n && (l.ref = n),
      ce(
        fe,
        null,
        ce(ed, { cache: t, serialized: a, isStringTag: typeof i == "string" }),
        ce(i, l),
      )
    );
  }),
  Pi = td,
  nd = function (t, n, r) {
    return dn.call(n, "css") ? Le(Pi, Ai(t, n), r) : Le(t, n, r);
  },
  rd = function (t, n, r) {
    return dn.call(n, "css") ? Le(Pi, Ai(t, n), r) : Le(t, n, r);
  };
const Mi = "__default",
  Cl = (e) => typeof e == "object" && e !== null && Mi in e;
function Me(e, t, n, r, i) {
  const s = t && typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < s.length; r++) e = e ? e[s[r]] : i;
  return e === i ? n : Cl(e) ? e[Mi] : e;
}
const Al = (e, t) => {
    if (e && e.variant) {
      let n = {};
      for (const r in e) {
        const i = e[r];
        if (r === "variant") {
          const s = typeof i == "function" ? i(t) : i,
            o = Al(Me(t, s), t);
          n = { ...n, ...o };
        } else n[r] = i;
      }
      return n;
    }
    return e;
  },
  Pl = [40, 52, 64].map((e) => e + "em"),
  id = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  },
  js = {
    bg: "backgroundColor",
    m: "margin",
    mt: "marginTop",
    mr: "marginRight",
    mb: "marginBottom",
    ml: "marginLeft",
    mx: "marginX",
    my: "marginY",
    p: "padding",
    pt: "paddingTop",
    pr: "paddingRight",
    pb: "paddingBottom",
    pl: "paddingLeft",
    px: "paddingX",
    py: "paddingY",
  },
  Us = {
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    scrollMarginX: ["scrollMarginLeft", "scrollMarginRight"],
    scrollMarginY: ["scrollMarginTop", "scrollMarginBottom"],
    scrollPaddingX: ["scrollPaddingLeft", "scrollPaddingRight"],
    scrollPaddingY: ["scrollPaddingTop", "scrollPaddingBottom"],
    size: ["width", "height"],
  },
  Ws = {
    color: "colors",
    background: "colors",
    accentColor: "colors",
    backgroundColor: "colors",
    borderColor: "colors",
    caretColor: "colors",
    columnRuleColor: "colors",
    outlineColor: "colors",
    textDecorationColor: "colors",
    opacity: "opacities",
    transition: "transitions",
    margin: "space",
    marginTop: "space",
    marginRight: "space",
    marginBottom: "space",
    marginLeft: "space",
    marginX: "space",
    marginY: "space",
    marginBlock: "space",
    marginBlockEnd: "space",
    marginBlockStart: "space",
    marginInline: "space",
    marginInlineEnd: "space",
    marginInlineStart: "space",
    padding: "space",
    paddingTop: "space",
    paddingRight: "space",
    paddingBottom: "space",
    paddingLeft: "space",
    paddingX: "space",
    paddingY: "space",
    paddingBlock: "space",
    paddingBlockEnd: "space",
    paddingBlockStart: "space",
    paddingInline: "space",
    paddingInlineEnd: "space",
    paddingInlineStart: "space",
    scrollMargin: "space",
    scrollMarginTop: "space",
    scrollMarginRight: "space",
    scrollMarginBottom: "space",
    scrollMarginLeft: "space",
    scrollMarginX: "space",
    scrollMarginY: "space",
    scrollPadding: "space",
    scrollPaddingTop: "space",
    scrollPaddingRight: "space",
    scrollPaddingBottom: "space",
    scrollPaddingLeft: "space",
    scrollPaddingX: "space",
    scrollPaddingY: "space",
    inset: "space",
    insetBlock: "space",
    insetBlockEnd: "space",
    insetBlockStart: "space",
    insetInline: "space",
    insetInlineEnd: "space",
    insetInlineStart: "space",
    top: "space",
    right: "space",
    bottom: "space",
    left: "space",
    gridGap: "space",
    gridColumnGap: "space",
    gridRowGap: "space",
    gap: "space",
    columnGap: "space",
    rowGap: "space",
    fontFamily: "fonts",
    fontSize: "fontSizes",
    fontWeight: "fontWeights",
    lineHeight: "lineHeights",
    letterSpacing: "letterSpacings",
    border: "borders",
    borderTop: "borders",
    borderRight: "borders",
    borderBottom: "borders",
    borderLeft: "borders",
    borderWidth: "borderWidths",
    borderStyle: "borderStyles",
    borderRadius: "radii",
    borderTopRightRadius: "radii",
    borderTopLeftRadius: "radii",
    borderBottomRightRadius: "radii",
    borderBottomLeftRadius: "radii",
    borderTopWidth: "borderWidths",
    borderTopColor: "colors",
    borderTopStyle: "borderStyles",
    borderBottomWidth: "borderWidths",
    borderBottomColor: "colors",
    borderBottomStyle: "borderStyles",
    borderLeftWidth: "borderWidths",
    borderLeftColor: "colors",
    borderLeftStyle: "borderStyles",
    borderRightWidth: "borderWidths",
    borderRightColor: "colors",
    borderRightStyle: "borderStyles",
    borderBlock: "borders",
    borderBlockColor: "colors",
    borderBlockEnd: "borders",
    borderBlockEndColor: "colors",
    borderBlockEndStyle: "borderStyles",
    borderBlockEndWidth: "borderWidths",
    borderBlockStart: "borders",
    borderBlockStartColor: "colors",
    borderBlockStartStyle: "borderStyles",
    borderBlockStartWidth: "borderWidths",
    borderBlockStyle: "borderStyles",
    borderBlockWidth: "borderWidths",
    borderEndEndRadius: "radii",
    borderEndStartRadius: "radii",
    borderInline: "borders",
    borderInlineColor: "colors",
    borderInlineEnd: "borders",
    borderInlineEndColor: "colors",
    borderInlineEndStyle: "borderStyles",
    borderInlineEndWidth: "borderWidths",
    borderInlineStart: "borders",
    borderInlineStartColor: "colors",
    borderInlineStartStyle: "borderStyles",
    borderInlineStartWidth: "borderWidths",
    borderInlineStyle: "borderStyles",
    borderInlineWidth: "borderWidths",
    borderStartEndRadius: "radii",
    borderStartStartRadius: "radii",
    columnRuleWidth: "borderWidths",
    boxShadow: "shadows",
    textShadow: "shadows",
    zIndex: "zIndices",
    width: "sizes",
    minWidth: "sizes",
    maxWidth: "sizes",
    height: "sizes",
    minHeight: "sizes",
    maxHeight: "sizes",
    flexBasis: "sizes",
    size: "sizes",
    blockSize: "sizes",
    inlineSize: "sizes",
    maxBlockSize: "sizes",
    maxInlineSize: "sizes",
    minBlockSize: "sizes",
    minInlineSize: "sizes",
    columnWidth: "sizes",
    fill: "colors",
    stroke: "colors",
  },
  sd = (e, t) => {
    if (typeof t != "number" || t >= 0) {
      if (typeof t == "string" && t.startsWith("-")) {
        const i = t.substring(1),
          s = Me(e, i, i);
        return typeof s == "number" ? s * -1 : `-${s}`;
      }
      return Me(e, t, t);
    }
    const n = Math.abs(t),
      r = Me(e, n, n);
    return typeof r == "string" ? "-" + r : Number(r) * -1;
  },
  od = [
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginBlock",
    "marginBlockEnd",
    "marginBlockStart",
    "marginInline",
    "marginInlineEnd",
    "marginInlineStart",
    "top",
    "bottom",
    "left",
    "right",
  ].reduce((e, t) => ({ ...e, [t]: sd }), {}),
  ad = (e) => (t) => {
    const n = {},
      i = [
        null,
        ...((t && t.breakpoints) || Pl).map((s) =>
          s.includes("@media") ? s : `@media screen and (min-width: ${s})`,
        ),
      ];
    for (const s in e) {
      const o = s;
      let a = e[o];
      if (
        (typeof a == "function" && (a = a(t || {})), !(a === !1 || a == null))
      ) {
        if (!Array.isArray(a)) {
          n[o] = a;
          continue;
        }
        for (let l = 0; l < a.slice(0, i.length).length; l++) {
          const c = i[l];
          if (!c) {
            n[o] = a[l];
            continue;
          }
          ((n[c] = n[c] || {}), a[l] != null && (n[c][o] = a[l]));
        }
      }
    }
    return n;
  },
  Ve =
    (e = {}) =>
    (t = {}) => {
      const n = { ...id, ...("theme" in t ? t.theme : t) },
        r = Al(typeof e == "function" ? e(n) : e, n),
        i = ad(r)(n);
      let s = {};
      for (const o in i) {
        const a = i[o],
          l = typeof a == "function" ? a(n) : a;
        if (l && typeof l == "object") {
          if (Cl(l)) {
            s[o] = l[Mi];
            continue;
          }
          s[o] = Ve(l)(n);
          continue;
        }
        const c = o in js ? js[o] : o,
          f = c in Ws ? Ws[c] : void 0,
          u = f ? (n == null ? void 0 : n[f]) : Me(n, c, {}),
          h = Me(od, c, Me)(u, l, l);
        if (c in Us) {
          const p = Us[c];
          for (let m = 0; m < p.length; m++) s[p[m]] = h;
        } else s[c] = h;
      }
      return s;
    },
  ld = (e) => (t) => {
    const n = Ve(e.sx)(t),
      r = typeof e.css == "function" ? e.css(t) : e.css;
    return [n, r];
  };
function Ei(e) {
  if (!e || (!e.sx && !e.css)) return e;
  const t = {};
  for (let n in e) n !== "sx" && (t[n] = e[n]);
  return ((t.css = ld(e)), t);
}
const V = (e, t, n) => nd(e, Ei(t), n),
  ct = (e, t, n) => rd(e, Ei(t), n),
  Ml = Ee({});
function cd(e) {
  const t = Ze(null);
  return (t.current === null && (t.current = e()), t.current);
}
const Ri = Ee(null),
  El = Ee({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function ud(e = !0) {
  const t = G(Ri);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    s = Xn();
  Be(() => {
    e && i(s);
  }, [e]);
  const o = Rt(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const ki = typeof window < "u",
  fd = ki ? Xe : Be,
  ge = (e) => e;
let Rl = ge;
function Di(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Ct = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  He = (e) => e * 1e3,
  ze = (e) => e / 1e3,
  dd = { useManualTiming: !1 };
function hd(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const s = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(c) {
    (s.has(c) && (l.schedule(c), e()), c(o));
  }
  const l = {
    schedule: (c, f = !1, u = !1) => {
      const h = u && r ? t : n;
      return (f && s.add(c), h.has(c) || h.add(c), c);
    },
    cancel: (c) => {
      (n.delete(c), s.delete(c));
    },
    process: (c) => {
      if (((o = c), r)) {
        i = !0;
        return;
      }
      ((r = !0),
        ([t, n] = [n, t]),
        t.forEach(a),
        t.clear(),
        (r = !1),
        i && ((i = !1), l.process(c)));
    },
  };
  return l;
}
const Tn = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  pd = 40;
function kl(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = Tn.reduce((g, v) => ((g[v] = hd(s)), g), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: c,
      preRender: f,
      render: u,
      postRender: d,
    } = o,
    h = () => {
      const g = performance.now();
      ((n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(g - i.timestamp, pd), 1)),
        (i.timestamp = g),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        c.process(i),
        f.process(i),
        u.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(h)));
    },
    p = () => {
      ((n = !0), (r = !0), i.isProcessing || e(h));
    };
  return {
    schedule: Tn.reduce((g, v) => {
      const S = o[v];
      return (
        (g[v] = (A, x = !1, E = !1) => (n || p(), S.schedule(A, x, E))),
        g
      );
    }, {}),
    cancel: (g) => {
      for (let v = 0; v < Tn.length; v++) o[Tn[v]].cancel(g);
    },
    state: i,
    steps: o,
  };
}
const {
    schedule: U,
    cancel: Je,
    state: ie,
    steps: br,
  } = kl(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ge, !0),
  Dl = Ee({ strict: !1 }),
  Hs = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  At = {};
for (const e in Hs) At[e] = { isEnabled: (t) => Hs[e].some((n) => !!t[n]) };
function md(e) {
  for (const t in e) At[t] = { ...At[t], ...e[t] };
}
const gd = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Ln(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    gd.has(e)
  );
}
let Vl = (e) => !Ln(e);
function yd(e) {
  e && (Vl = (t) => (t.startsWith("on") ? !Ln(t) : e(t)));
}
try {
  yd(require("@emotion/is-prop-valid").default);
} catch {}
function vd(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Vl(i) ||
        (n === !0 && Ln(i)) ||
        (!t && !Ln(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function _d(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
const fr = Ee({});
function en(e) {
  return typeof e == "string" || Array.isArray(e);
}
function dr(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Vi = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Oi = ["initial", ...Vi];
function hr(e) {
  return dr(e.animate) || Oi.some((t) => en(e[t]));
}
function Ol(e) {
  return !!(hr(e) || e.variants);
}
function bd(e, t) {
  if (hr(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || en(n) ? n : void 0,
      animate: en(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Sd(e) {
  const { initial: t, animate: n } = bd(e, G(fr));
  return Re(() => ({ initial: t, animate: n }), [zs(t), zs(n)]);
}
function zs(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const xd = Symbol.for("motionComponentSymbol");
function mt(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function wd(e, t, n) {
  return Rt(
    (r) => {
      (r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : mt(n) && (n.current = r)));
    },
    [t],
  );
}
const Ii = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Td = "framerAppearId",
  Il = "data-" + Ii(Td),
  { schedule: Fi } = kl(queueMicrotask, !1),
  Fl = Ee({});
function Cd(e, t, n, r, i) {
  var s, o;
  const { visualElement: a } = G(fr),
    l = G(Dl),
    c = G(Ri),
    f = G(El).reducedMotion,
    u = Ze(null);
  ((r = r || l.renderer),
    !u.current &&
      r &&
      (u.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: f,
      })));
  const d = u.current,
    h = G(Fl);
  d &&
    !d.projection &&
    i &&
    (d.type === "html" || d.type === "svg") &&
    Ad(u.current, n, i, h);
  const p = Ze(!1);
  Yn(() => {
    d && p.current && d.update(n, c);
  });
  const m = n[Il],
    y = Ze(
      !!m &&
        !(
          !((s = window.MotionHandoffIsComplete) === null || s === void 0) &&
          s.call(window, m)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, m)),
    );
  return (
    fd(() => {
      d &&
        ((p.current = !0),
        (window.MotionIsMounted = !0),
        d.updateFeatures(),
        Fi.render(d.render),
        y.current && d.animationState && d.animationState.animateChanges());
    }),
    Be(() => {
      d &&
        (!y.current && d.animationState && d.animationState.animateChanges(),
        y.current &&
          (queueMicrotask(() => {
            var g;
            (g = window.MotionHandoffMarkAsComplete) === null ||
              g === void 0 ||
              g.call(window, m);
          }),
          (y.current = !1)));
    }),
    d
  );
}
function Ad(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Ll(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && mt(a)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: c,
    }));
}
function Ll(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Ll(e.parent);
}
function Pd({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  var s, o;
  e && md(e);
  function a(c, f) {
    let u;
    const d = { ...G(El), ...c, layoutId: Md(c) },
      { isStatic: h } = d,
      p = Sd(c),
      m = r(c, h);
    if (!h && ki) {
      Ed();
      const y = Rd(d);
      ((u = y.MeasureLayout),
        (p.visualElement = Cd(i, m, d, t, y.ProjectionNode)));
    }
    return Le(fr.Provider, {
      value: p,
      children: [
        u && p.visualElement
          ? Le(u, { visualElement: p.visualElement, ...d })
          : null,
        n(i, c, wd(m, p.visualElement, f), m, h, p.visualElement),
      ],
    });
  }
  a.displayName = `motion.${typeof i == "string" ? i : `create(${(o = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !== null && o !== void 0 ? o : ""})`}`;
  const l = cn(a);
  return ((l[xd] = i), l);
}
function Md({ layoutId: e }) {
  const t = G(Ml).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Ed(e, t) {
  G(Dl).strict;
}
function Rd(e) {
  const { drag: t, layout: n } = At;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const kd = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Li(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(kd.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Ks(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function Bi(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = Ks(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = Ks(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
const jr = (e) => Array.isArray(e),
  Dd = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  Vd = (e) => (jr(e) ? e[e.length - 1] || 0 : e),
  le = (e) => !!(e && e.getVelocity);
function kn(e) {
  const t = le(e) ? e.get() : e;
  return Dd(t) ? t.toValue() : t;
}
function Od(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  i,
  s,
) {
  const o = { latestValues: Id(r, i, s, e), renderState: t() };
  return (
    n &&
      ((o.onMount = (a) => n({ props: r, current: a, ...o })),
      (o.onUpdate = (a) => n(a))),
    o
  );
}
const Bl = (e) => (t, n) => {
  const r = G(fr),
    i = G(Ri),
    s = () => Od(e, t, r, i);
  return n ? s() : cd(s);
};
function Id(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const d in s) i[d] = kn(s[d]);
  let { initial: o, animate: a } = e;
  const l = hr(e),
    c = Ol(e);
  t &&
    c &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let f = n ? n.initial === !1 : !1;
  f = f || o === !1;
  const u = f ? a : o;
  if (u && typeof u != "boolean" && !dr(u)) {
    const d = Array.isArray(u) ? u : [u];
    for (let h = 0; h < d.length; h++) {
      const p = Bi(e, d[h]);
      if (p) {
        const { transitionEnd: m, transition: y, ...g } = p;
        for (const v in g) {
          let S = g[v];
          if (Array.isArray(S)) {
            const A = f ? S.length - 1 : 0;
            S = S[A];
          }
          S !== null && (i[v] = S);
        }
        for (const v in m) i[v] = m[v];
      }
    }
  }
  return i;
}
const Vt = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  ft = new Set(Vt),
  $l = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Nl = $l("--"),
  Fd = $l("var(--"),
  $i = (e) => (Fd(e) ? Ld.test(e.split("/*")[0].trim()) : !1),
  Ld =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  jl = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Ge = (e, t, n) => (n > t ? t : n < e ? e : n),
  Ot = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  tn = { ...Ot, transform: (e) => Ge(0, 1, e) },
  Cn = { ...Ot, default: 1 },
  hn = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Ye = hn("deg"),
  Ie = hn("%"),
  C = hn("px"),
  Bd = hn("vh"),
  $d = hn("vw"),
  Gs = {
    ...Ie,
    parse: (e) => Ie.parse(e) / 100,
    transform: (e) => Ie.transform(e * 100),
  },
  Nd = {
    borderWidth: C,
    borderTopWidth: C,
    borderRightWidth: C,
    borderBottomWidth: C,
    borderLeftWidth: C,
    borderRadius: C,
    radius: C,
    borderTopLeftRadius: C,
    borderTopRightRadius: C,
    borderBottomRightRadius: C,
    borderBottomLeftRadius: C,
    width: C,
    maxWidth: C,
    height: C,
    maxHeight: C,
    top: C,
    right: C,
    bottom: C,
    left: C,
    padding: C,
    paddingTop: C,
    paddingRight: C,
    paddingBottom: C,
    paddingLeft: C,
    margin: C,
    marginTop: C,
    marginRight: C,
    marginBottom: C,
    marginLeft: C,
    backgroundPositionX: C,
    backgroundPositionY: C,
  },
  jd = {
    rotate: Ye,
    rotateX: Ye,
    rotateY: Ye,
    rotateZ: Ye,
    scale: Cn,
    scaleX: Cn,
    scaleY: Cn,
    scaleZ: Cn,
    skew: Ye,
    skewX: Ye,
    skewY: Ye,
    distance: C,
    translateX: C,
    translateY: C,
    translateZ: C,
    x: C,
    y: C,
    z: C,
    perspective: C,
    transformPerspective: C,
    opacity: tn,
    originX: Gs,
    originY: Gs,
    originZ: C,
  },
  qs = { ...Ot, transform: Math.round },
  Ni = {
    ...Nd,
    ...jd,
    zIndex: qs,
    size: C,
    fillOpacity: tn,
    strokeOpacity: tn,
    numOctaves: qs,
  },
  Ud = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Wd = Vt.length;
function Hd(e, t, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < Wd; s++) {
    const o = Vt[s],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const c = jl(a, Ni[o]);
      if (!l) {
        i = !1;
        const f = Ud[o] || o;
        r += `${f}(${c}) `;
      }
      n && (t[o] = c);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r);
}
function ji(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const c = t[l];
    if (ft.has(l)) {
      o = !0;
      continue;
    } else if (Nl(l)) {
      i[l] = c;
      continue;
    } else {
      const f = jl(c, Ni[l]);
      l.startsWith("origin") ? ((a = !0), (s[l] = f)) : (r[l] = f);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = Hd(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: c = "50%", originZ: f = 0 } = s;
    r.transformOrigin = `${l} ${c} ${f}`;
  }
}
const zd = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Kd = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Gd(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? zd : Kd;
  e[s.offset] = C.transform(-r);
  const o = C.transform(t),
    a = C.transform(n);
  e[s.array] = `${o} ${a}`;
}
function Xs(e, t, n) {
  return typeof e == "string" ? e : C.transform(t + n * e);
}
function qd(e, t, n) {
  const r = Xs(t, e.x, e.width),
    i = Xs(n, e.y, e.height);
  return `${r} ${i}`;
}
function Ui(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  f,
  u,
) {
  if ((ji(e, c, u), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: d, style: h, dimensions: p } = e;
  (d.transform && (p && (h.transform = d.transform), delete d.transform),
    p &&
      (i !== void 0 || s !== void 0 || h.transform) &&
      (h.transformOrigin = qd(
        p,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5,
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    o !== void 0 && Gd(d, o, a, l, !1));
}
const Wi = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Ul = () => ({ ...Wi(), attrs: {} }),
  Hi = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Wl(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const Hl = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function zl(e, t, n, r) {
  Wl(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Hl.has(i) ? i : Ii(i), t.attrs[i]);
}
const Bn = {};
function Xd(e) {
  Object.assign(Bn, e);
}
function Kl(e, { layout: t, layoutId: n }) {
  return (
    ft.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Bn[e] || e === "opacity"))
  );
}
function zi(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const o in i)
    (le(i[o]) ||
      (t.style && le(t.style[o])) ||
      Kl(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o]);
  return s;
}
function Gl(e, t, n) {
  const r = zi(e, t, n);
  for (const i in e)
    if (le(e[i]) || le(t[i])) {
      const s =
        Vt.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
function Yd(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const Ys = ["x", "y", "width", "height", "cx", "cy", "r"],
  Zd = {
    useVisualState: Bl({
      scrapeMotionValuesFromProps: Gl,
      createRenderState: Ul,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: i,
      }) => {
        if (!n) return;
        let s = !!e.drag;
        if (!s) {
          for (const a in i)
            if (ft.has(a)) {
              s = !0;
              break;
            }
        }
        if (!s) return;
        let o = !t;
        if (t)
          for (let a = 0; a < Ys.length; a++) {
            const l = Ys[a];
            e[l] !== t[l] && (o = !0);
          }
        o &&
          U.read(() => {
            (Yd(n, r),
              U.render(() => {
                (Ui(r, i, Hi(n.tagName), e.transformTemplate), zl(n, r));
              }));
          });
      },
    }),
  },
  Jd = {
    useVisualState: Bl({
      scrapeMotionValuesFromProps: zi,
      createRenderState: Wi,
    }),
  };
function ql(e, t, n) {
  for (const r in t) !le(t[r]) && !Kl(r, n) && (e[r] = t[r]);
}
function Qd({ transformTemplate: e }, t) {
  return Re(() => {
    const n = Wi();
    return (ji(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function eh(e, t) {
  const n = e.style || {},
    r = {};
  return (ql(r, n, e), Object.assign(r, Qd(e, t)), r);
}
function th(e, t) {
  const n = {},
    r = eh(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function nh(e, t, n, r) {
  const i = Re(() => {
    const s = Ul();
    return (
      Ui(s, t, Hi(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    (ql(s, e.style, e), (i.style = { ...s, ...i.style }));
  }
  return i;
}
function rh(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const l = (Li(n) ? nh : th)(r, s, o, n),
      c = vd(r, typeof n == "string", e),
      f = n !== fe ? { ...c, ...l, ref: i } : {},
      { children: u } = r,
      d = Re(() => (le(u) ? u.get() : u), [u]);
    return ce(n, { ...f, children: d });
  };
}
function ih(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...(Li(r) ? Zd : Jd),
      preloadedFeatures: e,
      useRender: rh(i),
      createVisualElement: t,
      Component: r,
    };
    return Pd(o);
  };
}
function Xl(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function pr(e, t, n) {
  const r = e.getProps();
  return Bi(r, t, n !== void 0 ? n : r.custom, e);
}
const sh = Di(() => window.ScrollTimeline !== void 0);
class oh {
  constructor(t) {
    ((this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean)));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t)),
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) => {
      if (sh() && i.attachTimeline) return i.attachTimeline(t);
      if (typeof n == "function") return n(i);
    });
    return () => {
      r.forEach((i, s) => {
        (i && i(), this.animations[s].stop());
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class ah extends oh {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function Ki(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Ur = 2e4;
function Yl(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ur; ) ((t += n), (r = e.next(t)));
  return t >= Ur ? 1 / 0 : t;
}
function Gi(e) {
  return typeof e == "function";
}
function Zs(e, t) {
  ((e.timeline = t), (e.onfinish = null));
}
const qi = (e) => Array.isArray(e) && typeof e[0] == "number",
  lh = { linearEasing: void 0 };
function ch(e, t) {
  const n = Di(e);
  return () => {
    var r;
    return (r = lh[t]) !== null && r !== void 0 ? r : n();
  };
}
const $n = ch(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Zl = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++) r += e(Ct(0, i - 1, s)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function Jl(e) {
  return !!(
    (typeof e == "function" && $n()) ||
    !e ||
    (typeof e == "string" && (e in Wr || $n())) ||
    qi(e) ||
    (Array.isArray(e) && e.every(Jl))
  );
}
const $t = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Wr = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: $t([0, 0.65, 0.55, 1]),
    circOut: $t([0.55, 0, 1, 0.45]),
    backIn: $t([0.31, 0.01, 0.66, -0.59]),
    backOut: $t([0.33, 1.53, 0.69, 0.99]),
  };
function Ql(e, t) {
  if (e)
    return typeof e == "function" && $n()
      ? Zl(e, t)
      : qi(e)
        ? $t(e)
        : Array.isArray(e)
          ? e.map((n) => Ql(n, t) || Wr.easeOut)
          : Wr[e];
}
const Ae = { x: !1, y: !1 };
function ec() {
  return Ae.x || Ae.y;
}
function uh(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let i = document;
    const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
function tc(e, t) {
  const n = uh(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function Js(e) {
  return (t) => {
    t.pointerType === "touch" || ec() || e(t);
  };
}
function fh(e, t, n = {}) {
  const [r, i, s] = tc(e, n),
    o = Js((a) => {
      const { target: l } = a,
        c = t(a);
      if (typeof c != "function" || !l) return;
      const f = Js((u) => {
        (c(u), l.removeEventListener("pointerleave", f));
      });
      l.addEventListener("pointerleave", f, i);
    });
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", o, i);
    }),
    s
  );
}
const nc = (e, t) => (t ? (e === t ? !0 : nc(e, t.parentElement)) : !1),
  Xi = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  dh = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function hh(e) {
  return dh.has(e.tagName) || e.tabIndex !== -1;
}
const Nt = new WeakSet();
function Qs(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Sr(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const ph = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Qs(() => {
    if (Nt.has(n)) return;
    Sr(n, "down");
    const i = Qs(() => {
        Sr(n, "up");
      }),
      s = () => Sr(n, "cancel");
    (n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function eo(e) {
  return Xi(e) && !ec();
}
function mh(e, t, n = {}) {
  const [r, i, s] = tc(e, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!eo(a) || Nt.has(l)) return;
      Nt.add(l);
      const c = t(a),
        f = (h, p) => {
          (window.removeEventListener("pointerup", u),
            window.removeEventListener("pointercancel", d),
            !(!eo(h) || !Nt.has(l)) &&
              (Nt.delete(l), typeof c == "function" && c(h, { success: p })));
        },
        u = (h) => {
          f(h, n.useGlobalTarget || nc(l, h.target));
        },
        d = (h) => {
          f(h, !1);
        };
      (window.addEventListener("pointerup", u, i),
        window.addEventListener("pointercancel", d, i));
    };
  return (
    r.forEach((a) => {
      (!hh(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        a.addEventListener("focus", (c) => ph(c, i), i));
    }),
    s
  );
}
function gh(e) {
  return e === "x" || e === "y"
    ? Ae[e]
      ? null
      : ((Ae[e] = !0),
        () => {
          Ae[e] = !1;
        })
    : Ae.x || Ae.y
      ? null
      : ((Ae.x = Ae.y = !0),
        () => {
          Ae.x = Ae.y = !1;
        });
}
const rc = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Vt,
]);
let Dn;
function yh() {
  Dn = void 0;
}
const Fe = {
  now: () => (
    Dn === void 0 &&
      Fe.set(
        ie.isProcessing || dd.useManualTiming
          ? ie.timestamp
          : performance.now(),
      ),
    Dn
  ),
  set: (e) => {
    ((Dn = e), queueMicrotask(yh));
  },
};
function Yi(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Zi(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Ji {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (Yi(this.subscriptions, t), () => Zi(this.subscriptions, t));
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function ic(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const to = 30,
  vh = (e) => !isNaN(parseFloat(e));
class _h {
  constructor(t, n = {}) {
    ((this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = Fe.now();
        (this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = Fe.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = vh(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Ji());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            U.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Fe.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > to
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, to);
    return ic(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function nn(e, t) {
  return new _h(e, t);
}
function bh(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, nn(n));
}
function Sh(e, t) {
  const n = pr(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = Vd(s[o]);
    bh(e, o, a);
  }
}
function xh(e) {
  return !!(le(e) && e.add);
}
function Hr(e, t) {
  const n = e.getValue("willChange");
  if (xh(n)) return n.add(t);
}
function sc(e) {
  return e.props[Il];
}
const oc = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  wh = 1e-7,
  Th = 12;
function Ch(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do ((o = t + (n - t) / 2), (s = oc(o, r, i) - e), s > 0 ? (n = o) : (t = o));
  while (Math.abs(s) > wh && ++a < Th);
  return o;
}
function pn(e, t, n, r) {
  if (e === t && n === r) return ge;
  const i = (s) => Ch(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : oc(i(s), t, r));
}
const ac = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  lc = (e) => (t) => 1 - e(1 - t),
  cc = pn(0.33, 1.53, 0.69, 0.99),
  Qi = lc(cc),
  uc = ac(Qi),
  fc = (e) =>
    (e *= 2) < 1 ? 0.5 * Qi(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  es = (e) => 1 - Math.sin(Math.acos(e)),
  dc = lc(es),
  hc = ac(es),
  pc = (e) => /^0[^.\s]+$/u.test(e);
function Ah(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || pc(e)
      : !0;
}
const zt = (e) => Math.round(e * 1e5) / 1e5,
  ts = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Ph(e) {
  return e == null;
}
const Mh =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  ns = (e, t) => (n) =>
    !!(
      (typeof n == "string" && Mh.test(n) && n.startsWith(e)) ||
      (t && !Ph(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  mc = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, a] = r.match(ts);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Eh = (e) => Ge(0, 255, e),
  xr = { ...Ot, transform: (e) => Math.round(Eh(e)) },
  st = {
    test: ns("rgb", "red"),
    parse: mc("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      xr.transform(e) +
      ", " +
      xr.transform(t) +
      ", " +
      xr.transform(n) +
      ", " +
      zt(tn.transform(r)) +
      ")",
  };
function Rh(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const zr = { test: ns("#"), parse: Rh, transform: st.transform },
  gt = {
    test: ns("hsl", "hue"),
    parse: mc("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Ie.transform(zt(t)) +
      ", " +
      Ie.transform(zt(n)) +
      ", " +
      zt(tn.transform(r)) +
      ")",
  },
  ae = {
    test: (e) => st.test(e) || zr.test(e) || gt.test(e),
    parse: (e) =>
      st.test(e) ? st.parse(e) : gt.test(e) ? gt.parse(e) : zr.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? st.transform(e)
          : gt.transform(e),
  },
  kh =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Dh(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(ts)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(kh)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const gc = "number",
  yc = "color",
  Vh = "var",
  Oh = "var(",
  no = "${}",
  Ih =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function rn(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      Ih,
      (l) => (
        ae.test(l)
          ? (r.color.push(s), i.push(yc), n.push(ae.parse(l)))
          : l.startsWith(Oh)
            ? (r.var.push(s), i.push(Vh), n.push(l))
            : (r.number.push(s), i.push(gc), n.push(parseFloat(l))),
        ++s,
        no
      ),
    )
    .split(no);
  return { values: n, split: a, indexes: r, types: i };
}
function vc(e) {
  return rn(e).values;
}
function _c(e) {
  const { split: t, types: n } = rn(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const a = n[o];
        a === gc
          ? (s += zt(i[o]))
          : a === yc
            ? (s += ae.transform(i[o]))
            : (s += i[o]);
      }
    return s;
  };
}
const Fh = (e) => (typeof e == "number" ? 0 : e);
function Lh(e) {
  const t = vc(e);
  return _c(e)(t.map(Fh));
}
const Qe = {
    test: Dh,
    parse: vc,
    createTransformer: _c,
    getAnimatableNone: Lh,
  },
  Bh = new Set(["brightness", "contrast", "saturate", "opacity"]);
function $h(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(ts) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = Bh.has(t) ? 1 : 0;
  return (r !== n && (s *= 100), t + "(" + s + i + ")");
}
const Nh = /\b([a-z-]*)\(.*?\)/gu,
  Kr = {
    ...Qe,
    getAnimatableNone: (e) => {
      const t = e.match(Nh);
      return t ? t.map($h).join(" ") : e;
    },
  },
  jh = {
    ...Ni,
    color: ae,
    backgroundColor: ae,
    outlineColor: ae,
    fill: ae,
    stroke: ae,
    borderColor: ae,
    borderTopColor: ae,
    borderRightColor: ae,
    borderBottomColor: ae,
    borderLeftColor: ae,
    filter: Kr,
    WebkitFilter: Kr,
  },
  rs = (e) => jh[e];
function bc(e, t) {
  let n = rs(e);
  return (
    n !== Kr && (n = Qe),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Uh = new Set(["auto", "none", "0"]);
function Wh(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    (typeof s == "string" && !Uh.has(s) && rn(s).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (const s of t) e[s] = bc(n, i);
}
const ro = (e) => e === Ot || e === C,
  io = (e, t) => parseFloat(e.split(", ")[t]),
  so =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return io(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? io(s[1], e) : 0;
      }
    },
  Hh = new Set(["x", "y", "z"]),
  zh = Vt.filter((e) => !Hh.has(e));
function Kh(e) {
  const t = [];
  return (
    zh.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Pt = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: so(4, 13),
  y: so(5, 14),
};
Pt.translateX = Pt.x;
Pt.translateY = Pt.y;
const at = new Set();
let Gr = !1,
  qr = !1;
function Sc() {
  if (qr) {
    const e = Array.from(at).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const i = Kh(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((qr = !1), (Gr = !1), at.forEach((e) => e.complete()), at.clear());
}
function xc() {
  at.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (qr = !0));
  });
}
function Gh() {
  (xc(), Sc());
}
class is {
  constructor(t, n, r, i, s, o = !1) {
    ((this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o));
  }
  scheduleResolve() {
    ((this.isScheduled = !0),
      this.isAsync
        ? (at.add(this), Gr || ((Gr = !0), U.read(xc), U.resolveKeyframes(Sc)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          (t[0] === void 0 && (t[0] = a), i && o === void 0 && i.set(t[0]));
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    ((this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      at.delete(this));
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), at.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const wc = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  qh = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Xh(e) {
  const t = qh.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Tc(e, t, n = 1) {
  const [r, i] = Xh(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return wc(o) ? parseFloat(o) : o;
  }
  return $i(i) ? Tc(i, t, n + 1) : i;
}
const Cc = (e) => (t) => t.test(e),
  Yh = { test: (e) => e === "auto", parse: (e) => e },
  Ac = [Ot, C, Ie, Ye, $d, Bd, Yh],
  oo = (e) => Ac.find(Cc(e));
class Pc extends is {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && ((c = c.trim()), $i(c))) {
        const f = Tc(c, n.current);
        (f !== void 0 && (t[l] = f),
          l === t.length - 1 && (this.finalKeyframe = c));
      }
    }
    if ((this.resolveNoneKeyframes(), !rc.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = oo(i),
      a = oo(s);
    if (o !== a)
      if (ro(o) && ro(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) Ah(t[i]) && r.push(i);
    r.length && Wh(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Pt[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      a = i[o];
    ((i[o] = Pt[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, c]) => {
          n.getValue(l).set(c);
        }),
      this.resolveNoneKeyframes());
  }
}
const ao = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Qe.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function Zh(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Jh(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = ao(i, t),
    a = ao(s, t);
  return !o || !a ? !1 : Zh(e) || ((n === "spring" || Gi(n)) && r);
}
const Qh = (e) => e !== null;
function mr(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(Qh),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const ep = 40;
class Mc {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    ...a
  }) {
    ((this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Fe.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise());
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > ep
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return (
      !this._resolved && !this.hasAttemptedResolve && Gh(),
      this._resolved
    );
  }
  onKeyframesResolved(t, n) {
    ((this.resolvedAt = Fe.now()), (this.hasAttemptedResolve = !0));
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: c,
    } = this.options;
    if (!c && !Jh(t, r, i, s))
      if (o) this.options.duration = 0;
      else {
        (l && l(mr(t, this.options, n)),
          a && a(),
          this.resolveFinishedPromise());
        return;
      }
    const f = this.initPlayback(t, n);
    f !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...f }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    ((this.options.type = "keyframes"), (this.options.ease = "linear"));
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const z = (e, t, n) => e + (t - e) * n;
function wr(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function tp({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((i = wr(l, a, e + 1 / 3)), (s = wr(l, a, e)), (o = wr(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Nn(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Tr = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  np = [zr, st, gt],
  rp = (e) => np.find((t) => t.test(e));
function lo(e) {
  const t = rp(e);
  if (!t) return !1;
  let n = t.parse(e);
  return (t === gt && (n = tp(n)), n);
}
const co = (e, t) => {
    const n = lo(e),
      r = lo(t);
    if (!n || !r) return Nn(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = Tr(n.red, r.red, s)),
      (i.green = Tr(n.green, r.green, s)),
      (i.blue = Tr(n.blue, r.blue, s)),
      (i.alpha = z(n.alpha, r.alpha, s)),
      st.transform(i)
    );
  },
  ip = (e, t) => (n) => t(e(n)),
  mn = (...e) => e.reduce(ip),
  Xr = new Set(["none", "hidden"]);
function sp(e, t) {
  return Xr.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function op(e, t) {
  return (n) => z(e, t, n);
}
function ss(e) {
  return typeof e == "number"
    ? op
    : typeof e == "string"
      ? $i(e)
        ? Nn
        : ae.test(e)
          ? co
          : cp
      : Array.isArray(e)
        ? Ec
        : typeof e == "object"
          ? ae.test(e)
            ? co
            : ap
          : Nn;
}
function Ec(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => ss(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function ap(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = ss(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function lp(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      a = e.indexes[o][i[o]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    ((r[s] = l), i[o]++);
  }
  return r;
}
const cp = (e, t) => {
  const n = Qe.createTransformer(t),
    r = rn(e),
    i = rn(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Xr.has(e) && !i.values.length) || (Xr.has(t) && !r.values.length)
      ? sp(e, t)
      : mn(Ec(lp(r, i), i.values), n)
    : Nn(e, t);
};
function Rc(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? z(e, t, n)
    : ss(e)(e, t);
}
const up = 5;
function kc(e, t, n) {
  const r = Math.max(t - up, 0);
  return ic(n - e(r), t - r);
}
const K = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  uo = 0.001;
function fp({
  duration: e = K.duration,
  bounce: t = K.bounce,
  velocity: n = K.velocity,
  mass: r = K.mass,
}) {
  let i,
    s,
    o = 1 - t;
  ((o = Ge(K.minDamping, K.maxDamping, o)),
    (e = Ge(K.minDuration, K.maxDuration, ze(e))),
    o < 1
      ? ((i = (c) => {
          const f = c * o,
            u = f * e,
            d = f - n,
            h = Yr(c, o),
            p = Math.exp(-u);
          return uo - (d / h) * p;
        }),
        (s = (c) => {
          const u = c * o * e,
            d = u * n + n,
            h = Math.pow(o, 2) * Math.pow(c, 2) * e,
            p = Math.exp(-u),
            m = Yr(Math.pow(c, 2), o);
          return ((-i(c) + uo > 0 ? -1 : 1) * ((d - h) * p)) / m;
        }))
      : ((i = (c) => {
          const f = Math.exp(-c * e),
            u = (c - n) * e + 1;
          return -0.001 + f * u;
        }),
        (s = (c) => {
          const f = Math.exp(-c * e),
            u = (n - c) * (e * e);
          return f * u;
        })));
  const a = 5 / e,
    l = hp(i, s, a);
  if (((e = He(e)), isNaN(l)))
    return { stiffness: K.stiffness, damping: K.damping, duration: e };
  {
    const c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: o * 2 * Math.sqrt(r * c), duration: e };
  }
}
const dp = 12;
function hp(e, t, n) {
  let r = n;
  for (let i = 1; i < dp; i++) r = r - e(r) / t(r);
  return r;
}
function Yr(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const pp = ["duration", "bounce"],
  mp = ["stiffness", "damping", "mass"];
function fo(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function gp(e) {
  let t = {
    velocity: K.velocity,
    stiffness: K.stiffness,
    damping: K.damping,
    mass: K.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!fo(e, mp) && fo(e, pp))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * Ge(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: K.mass, stiffness: i, damping: s };
    } else {
      const n = fp(e);
      ((t = { ...t, ...n, mass: K.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function Dc(e = K.visualDuration, t = K.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: s },
    {
      stiffness: l,
      damping: c,
      mass: f,
      duration: u,
      velocity: d,
      isResolvedFromDuration: h,
    } = gp({ ...n, velocity: -ze(n.velocity || 0) }),
    p = d || 0,
    m = c / (2 * Math.sqrt(l * f)),
    y = o - s,
    g = ze(Math.sqrt(l / f)),
    v = Math.abs(y) < 5;
  (r || (r = v ? K.restSpeed.granular : K.restSpeed.default),
    i || (i = v ? K.restDelta.granular : K.restDelta.default));
  let S;
  if (m < 1) {
    const x = Yr(g, m);
    S = (E) => {
      const P = Math.exp(-m * g * E);
      return (
        o - P * (((p + m * g * y) / x) * Math.sin(x * E) + y * Math.cos(x * E))
      );
    };
  } else if (m === 1) S = (x) => o - Math.exp(-g * x) * (y + (p + g * y) * x);
  else {
    const x = g * Math.sqrt(m * m - 1);
    S = (E) => {
      const P = Math.exp(-m * g * E),
        R = Math.min(x * E, 300);
      return (
        o - (P * ((p + m * g * y) * Math.sinh(R) + x * y * Math.cosh(R))) / x
      );
    };
  }
  const A = {
    calculatedDuration: (h && u) || null,
    next: (x) => {
      const E = S(x);
      if (h) a.done = x >= u;
      else {
        let P = 0;
        m < 1 && (P = x === 0 ? He(p) : kc(S, x, E));
        const R = Math.abs(P) <= r,
          ee = Math.abs(o - E) <= i;
        a.done = R && ee;
      }
      return ((a.value = a.done ? o : E), a);
    },
    toString: () => {
      const x = Math.min(Yl(A), Ur),
        E = Zl((P) => A.next(x * P).value, x, 30);
      return x + "ms " + E;
    },
  };
  return A;
}
function ho({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: f,
}) {
  const u = e[0],
    d = { done: !1, value: u },
    h = (R) => (a !== void 0 && R < a) || (l !== void 0 && R > l),
    p = (R) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - R) < Math.abs(l - R)
          ? a
          : l;
  let m = n * t;
  const y = u + m,
    g = o === void 0 ? y : o(y);
  g !== y && (m = g - u);
  const v = (R) => -m * Math.exp(-R / r),
    S = (R) => g + v(R),
    A = (R) => {
      const ee = v(R),
        Y = S(R);
      ((d.done = Math.abs(ee) <= c), (d.value = d.done ? g : Y));
    };
  let x, E;
  const P = (R) => {
    h(d.value) &&
      ((x = R),
      (E = Dc({
        keyframes: [d.value, p(d.value)],
        velocity: kc(S, R, d.value),
        damping: i,
        stiffness: s,
        restDelta: c,
        restSpeed: f,
      })));
  };
  return (
    P(0),
    {
      calculatedDuration: null,
      next: (R) => {
        let ee = !1;
        return (
          !E && x === void 0 && ((ee = !0), A(R), P(R)),
          x !== void 0 && R >= x ? E.next(R - x) : (!ee && A(R), d)
        );
      },
    }
  );
}
const yp = pn(0.42, 0, 1, 1),
  vp = pn(0, 0, 0.58, 1),
  Vc = pn(0.42, 0, 0.58, 1),
  _p = (e) => Array.isArray(e) && typeof e[0] != "number",
  bp = {
    linear: ge,
    easeIn: yp,
    easeInOut: Vc,
    easeOut: vp,
    circIn: es,
    circInOut: hc,
    circOut: dc,
    backIn: Qi,
    backInOut: uc,
    backOut: cc,
    anticipate: fc,
  },
  po = (e) => {
    if (qi(e)) {
      Rl(e.length === 4);
      const [t, n, r, i] = e;
      return pn(t, n, r, i);
    } else if (typeof e == "string") return bp[e];
    return e;
  };
function Sp(e, t, n) {
  const r = [],
    i = n || Rc,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || ge : t;
      a = mn(l, a);
    }
    r.push(a);
  }
  return r;
}
function xp(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((Rl(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = Sp(t, r, i),
    l = a.length,
    c = (f) => {
      if (o && f < e[0]) return t[0];
      let u = 0;
      if (l > 1) for (; u < e.length - 2 && !(f < e[u + 1]); u++);
      const d = Ct(e[u], e[u + 1], f);
      return a[u](d);
    };
  return n ? (f) => c(Ge(e[0], e[s - 1], f)) : c;
}
function wp(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Ct(0, t, r);
    e.push(z(n, 1, i));
  }
}
function Tp(e) {
  const t = [0];
  return (wp(t, e.length - 1), t);
}
function Cp(e, t) {
  return e.map((n) => n * t);
}
function Ap(e, t) {
  return e.map(() => t || Vc).splice(0, e.length - 1);
}
function jn({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = _p(r) ? r.map(po) : po(r),
    s = { done: !1, value: t[0] },
    o = Cp(n && n.length === t.length ? n : Tp(t), e),
    a = xp(o, t, { ease: Array.isArray(i) ? i : Ap(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
  };
}
const Pp = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => U.update(t, !0),
      stop: () => Je(t),
      now: () => (ie.isProcessing ? ie.timestamp : Fe.now()),
    };
  },
  Mp = { decay: ho, inertia: ho, tween: jn, keyframes: jn, spring: Dc },
  Ep = (e) => e / 100;
class os extends Mc {
  constructor(t) {
    (super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      }));
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options,
      o = (i == null ? void 0 : i.KeyframeResolver) || is,
      a = (l, c) => this.onKeyframesResolved(l, c);
    ((this.resolver = new o(s, a, n, r, i)), this.resolver.scheduleResolve());
  }
  flatten() {
    (super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes),
        ));
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      a = Gi(n) ? n : Mp[n] || jn;
    let l, c;
    a !== jn &&
      typeof t[0] != "number" &&
      ((l = mn(Ep, Rc(t[0], t[1]))), (t = [0, 100]));
    const f = a({ ...this.options, keyframes: t });
    (s === "mirror" &&
      (c = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      f.calculatedDuration === null && (f.calculatedDuration = Yl(f)));
    const { calculatedDuration: u } = f,
      d = u + i,
      h = d * (r + 1) - i;
    return {
      generator: f,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: u,
      resolvedDuration: d,
      totalDuration: h,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    (this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState));
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: R } = this.options;
      return { done: !0, value: R[R.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: c,
      totalDuration: f,
      resolvedDuration: u,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: d,
      repeat: h,
      repeatType: p,
      repeatDelay: m,
      onUpdate: y,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - f / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed));
    const g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      v = this.speed >= 0 ? g < 0 : g > f;
    ((this.currentTime = Math.max(g, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = f));
    let S = this.currentTime,
      A = s;
    if (h) {
      const R = Math.min(this.currentTime, f) / u;
      let ee = Math.floor(R),
        Y = R % 1;
      (!Y && R >= 1 && (Y = 1),
        Y === 1 && ee--,
        (ee = Math.min(ee, h + 1)),
        !!(ee % 2) &&
          (p === "reverse"
            ? ((Y = 1 - Y), m && (Y -= m / u))
            : p === "mirror" && (A = o)),
        (S = Ge(0, 1, Y) * u));
    }
    const x = v ? { done: !1, value: l[0] } : A.next(S);
    a && (x.value = a(x.value));
    let { done: E } = x;
    !v &&
      c !== null &&
      (E = this.speed >= 0 ? this.currentTime >= f : this.currentTime <= 0);
    const P =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && E));
    return (
      P && i !== void 0 && (x.value = mr(l, this.options, i)),
      y && y(x.value),
      P && this.finish(),
      x
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? ze(t.calculatedDuration) : 0;
  }
  get time() {
    return ze(this.currentTime);
  }
  set time(t) {
    ((t = He(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), n && (this.time = ze(this.currentTime)));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = Pp, onPlay: n, startTime: r } = this.options;
    (this.driver || (this.driver = t((s) => this.tick(s))), n && n());
    const i = this.driver.now();
    (this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = i)
        : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    ((this.state = "paused"),
      (this.holdTime =
        (t = this.currentTime) !== null && t !== void 0 ? t : 0));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.teardown(), (this.state = "finished"));
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    (this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel());
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
}
const Rp = new Set(["opacity", "clipPath", "filter", "transform"]);
function kp(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {},
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const f = Ql(a, i);
  return (
    Array.isArray(f) && (c.easing = f),
    e.animate(c, {
      delay: r,
      duration: i,
      easing: Array.isArray(f) ? "linear" : f,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const Dp = Di(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Un = 10,
  Vp = 2e4;
function Op(e) {
  return Gi(e.type) || e.type === "spring" || !Jl(e.ease);
}
function Ip(e, t) {
  const n = new os({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < Vp; ) ((r = n.sample(s)), i.push(r.value), (s += Un));
  return { times: void 0, keyframes: i, duration: s - Un, ease: "linear" };
}
const Oc = { anticipate: fc, backInOut: uc, circInOut: hc };
function Fp(e) {
  return e in Oc;
}
class mo extends Mc {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    ((this.resolver = new Pc(
      s,
      (o, a) => this.onKeyframesResolved(o, a),
      n,
      r,
      i,
    )),
      this.resolver.scheduleResolve());
  }
  initPlayback(t, n) {
    let {
      duration: r = 300,
      times: i,
      ease: s,
      type: o,
      motionValue: a,
      name: l,
      startTime: c,
    } = this.options;
    if (!a.owner || !a.owner.current) return !1;
    if (
      (typeof s == "string" && $n() && Fp(s) && (s = Oc[s]), Op(this.options))
    ) {
      const {
          onComplete: u,
          onUpdate: d,
          motionValue: h,
          element: p,
          ...m
        } = this.options,
        y = Ip(t, m);
      ((t = y.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = y.duration),
        (i = y.times),
        (s = y.ease),
        (o = "keyframes"));
    }
    const f = kp(a.owner.current, l, t, {
      ...this.options,
      duration: r,
      times: i,
      ease: s,
    });
    return (
      (f.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Zs(f, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (f.onfinish = () => {
            const { onComplete: u } = this.options;
            (a.set(mr(t, this.options, n)),
              u && u(),
              this.cancel(),
              this.resolveFinishedPromise());
          }),
      { animation: f, duration: r, times: i, type: o, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return ze(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return ze(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = He(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return ge;
      const { animation: r } = n;
      Zs(r, t);
    }
    return ge;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    (n.playState === "finished" && this.updateFinishedPromise(), n.play());
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    (this.resolveFinishedPromise(), this.updateFinishedPromise());
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: s,
      ease: o,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: c,
          onUpdate: f,
          onComplete: u,
          element: d,
          ...h
        } = this.options,
        p = new os({
          ...h,
          keyframes: r,
          duration: i,
          type: s,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        m = He(this.time);
      c.setWithVelocity(p.sample(m - Un).value, p.sample(m).value, Un);
    }
    const { onStop: l } = this.options;
    (l && l(), this.cancel());
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: o,
      type: a,
    } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: l, transformTemplate: c } = n.owner.getProps();
    return (
      Dp() &&
      r &&
      Rp.has(r) &&
      !l &&
      !c &&
      !i &&
      s !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
const Lp = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Bp = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  $p = { type: "keyframes", duration: 0.8 },
  Np = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  jp = (e, { keyframes: t }) =>
    t.length > 2
      ? $p
      : ft.has(e)
        ? e.startsWith("scale")
          ? Bp(t[1])
          : Lp
        : Np;
function Up({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...f
}) {
  return !!Object.keys(f).length;
}
const as =
  (e, t, n, r = {}, i, s) =>
  (o) => {
    const a = Ki(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: c = 0 } = r;
    c = c - He(l);
    let f = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -c,
      onUpdate: (d) => {
        (t.set(d), a.onUpdate && a.onUpdate(d));
      },
      onComplete: () => {
        (o(), a.onComplete && a.onComplete());
      },
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    (Up(a) || (f = { ...f, ...jp(e, f) }),
      f.duration && (f.duration = He(f.duration)),
      f.repeatDelay && (f.repeatDelay = He(f.repeatDelay)),
      f.from !== void 0 && (f.keyframes[0] = f.from));
    let u = !1;
    if (
      ((f.type === !1 || (f.duration === 0 && !f.repeatDelay)) &&
        ((f.duration = 0), f.delay === 0 && (u = !0)),
      u && !s && t.get() !== void 0)
    ) {
      const d = mr(f.keyframes, a);
      if (d !== void 0)
        return (
          U.update(() => {
            (f.onUpdate(d), f.onComplete());
          }),
          new ah([])
        );
    }
    return !s && mo.supports(f) ? new mo(f) : new os(f);
  };
function Wp({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function Ic(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (o = r);
  const c = [],
    f = i && e.animationState && e.animationState.getState()[i];
  for (const u in l) {
    const d = e.getValue(
        u,
        (s = e.latestValues[u]) !== null && s !== void 0 ? s : null,
      ),
      h = l[u];
    if (h === void 0 || (f && Wp(f, u))) continue;
    const p = { delay: n, ...Ki(o || {}, u) };
    let m = !1;
    if (window.MotionHandoffAnimation) {
      const g = sc(e);
      if (g) {
        const v = window.MotionHandoffAnimation(g, u, U);
        v !== null && ((p.startTime = v), (m = !0));
      }
    }
    (Hr(e, u),
      d.start(
        as(u, d, h, e.shouldReduceMotion && rc.has(u) ? { type: !1 } : p, e, m),
      ));
    const y = d.animation;
    y && c.push(y);
  }
  return (
    a &&
      Promise.all(c).then(() => {
        U.update(() => {
          a && Sh(e, a);
        });
      }),
    c
  );
}
function Zr(e, t, n = {}) {
  var r;
  const i = pr(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0,
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(Ic(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: f = 0,
              staggerChildren: u,
              staggerDirection: d,
            } = s;
            return Hp(e, t, f + c, u, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = s;
  if (l) {
    const [c, f] = l === "beforeChildren" ? [o, a] : [a, o];
    return c().then(() => f());
  } else return Promise.all([o(), a(n.delay)]);
}
function Hp(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(zp)
      .forEach((c, f) => {
        (c.notify("AnimationStart", t),
          o.push(
            Zr(c, t, { ...s, delay: n + l(f) }).then(() =>
              c.notify("AnimationComplete", t),
            ),
          ));
      }),
    Promise.all(o)
  );
}
function zp(e, t) {
  return e.sortNodePosition(t);
}
function Kp(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => Zr(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Zr(e, t, n);
  else {
    const i = typeof t == "function" ? pr(e, t, n.custom) : t;
    r = Promise.all(Ic(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const Gp = Oi.length;
function Fc(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Fc(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < Gp; n++) {
    const r = Oi[n],
      i = e.props[r];
    (en(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const qp = [...Vi].reverse(),
  Xp = Vi.length;
function Yp(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Kp(e, n, r)));
}
function Zp(e) {
  let t = Yp(e),
    n = go(),
    r = !0;
  const i = (l) => (c, f) => {
    var u;
    const d = pr(
      e,
      f,
      l === "exit"
        ? (u = e.presenceContext) === null || u === void 0
          ? void 0
          : u.custom
        : void 0,
    );
    if (d) {
      const { transition: h, transitionEnd: p, ...m } = d;
      c = { ...c, ...m, ...p };
    }
    return c;
  };
  function s(l) {
    t = l(e);
  }
  function o(l) {
    const { props: c } = e,
      f = Fc(e.parent) || {},
      u = [],
      d = new Set();
    let h = {},
      p = 1 / 0;
    for (let y = 0; y < Xp; y++) {
      const g = qp[y],
        v = n[g],
        S = c[g] !== void 0 ? c[g] : f[g],
        A = en(S),
        x = g === l ? v.isActive : null;
      x === !1 && (p = y);
      let E = S === f[g] && S !== c[g] && A;
      if (
        (E && r && e.manuallyAnimateOnMount && (E = !1),
        (v.protectedKeys = { ...h }),
        (!v.isActive && x === null) ||
          (!S && !v.prevProp) ||
          dr(S) ||
          typeof S == "boolean")
      )
        continue;
      const P = Jp(v.prevProp, S);
      let R = P || (g === l && v.isActive && !E && A) || (y > p && A),
        ee = !1;
      const Y = Array.isArray(S) ? S : [S];
      let _e = Y.reduce(i(g), {});
      x === !1 && (_e = {});
      const { prevResolvedValues: Z = {} } = v,
        $e = { ...Z, ..._e },
        vn = (ne) => {
          ((R = !0),
            d.has(ne) && ((ee = !0), d.delete(ne)),
            (v.needsAnimating[ne] = !0));
          const Te = e.getValue(ne);
          Te && (Te.liveStyle = !1);
        };
      for (const ne in $e) {
        const Te = _e[ne],
          It = Z[ne];
        if (h.hasOwnProperty(ne)) continue;
        let Ft = !1;
        (jr(Te) && jr(It) ? (Ft = !Xl(Te, It)) : (Ft = Te !== It),
          Ft
            ? Te != null
              ? vn(ne)
              : d.add(ne)
            : Te !== void 0 && d.has(ne)
              ? vn(ne)
              : (v.protectedKeys[ne] = !0));
      }
      ((v.prevProp = S),
        (v.prevResolvedValues = _e),
        v.isActive && (h = { ...h, ..._e }),
        r && e.blockInitialAnimation && (R = !1),
        R &&
          (!(E && P) || ee) &&
          u.push(...Y.map((ne) => ({ animation: ne, options: { type: g } }))));
    }
    if (d.size) {
      const y = {};
      (d.forEach((g) => {
        const v = e.getBaseTarget(g),
          S = e.getValue(g);
        (S && (S.liveStyle = !0), (y[g] = v ?? null));
      }),
        u.push({ animation: y }));
    }
    let m = !!u.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (m = !1),
      (r = !1),
      m ? t(u) : Promise.resolve()
    );
  }
  function a(l, c) {
    var f;
    if (n[l].isActive === c) return Promise.resolve();
    ((f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((d) => {
        var h;
        return (h = d.animationState) === null || h === void 0
          ? void 0
          : h.setActive(l, c);
      }),
      (n[l].isActive = c));
    const u = o(l);
    for (const d in n) n[d].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      ((n = go()), (r = !0));
    },
  };
}
function Jp(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Xl(t, e) : !1;
}
function tt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function go() {
  return {
    animate: tt(!0),
    whileInView: tt(),
    whileHover: tt(),
    whileTap: tt(),
    whileDrag: tt(),
    whileFocus: tt(),
    exit: tt(),
  };
}
class et {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
class Qp extends et {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = Zp(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    dr(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this));
  }
}
let em = 0;
class tm extends et {
  constructor() {
    (super(...arguments), (this.id = em++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const nm = { animation: { Feature: Qp }, exit: { Feature: tm } };
function sn(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function gn(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const rm = (e) => (t) => Xi(t) && e(t, gn(t));
function Kt(e, t, n, r) {
  return sn(e, t, rm(n), r);
}
const yo = (e, t) => Math.abs(e - t);
function im(e, t) {
  const n = yo(e.x, t.x),
    r = yo(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Lc {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = Ar(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          h = im(u.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !h) return;
        const { point: p } = u,
          { timestamp: m } = ie;
        this.history.push({ ...p, timestamp: m });
        const { onStart: y, onMove: g } = this.handlers;
        (d ||
          (y && y(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, u));
      }),
      (this.handlePointerMove = (u, d) => {
        ((this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Cr(d, this.transformPagePoint)),
          U.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (u, d) => {
        this.end();
        const { onEnd: h, onSessionEnd: p, resumeAnimation: m } = this.handlers;
        if (
          (this.dragSnapToOrigin && m && m(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const y = Ar(
          u.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Cr(d, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && h && h(u, y), p && p(u, y));
      }),
      !Xi(t))
    )
      return;
    ((this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window));
    const o = gn(t),
      a = Cr(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: c } = ie;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: f } = n;
    (f && f(t, Ar(a, this.history)),
      (this.removeListeners = mn(
        Kt(this.contextWindow, "pointermove", this.handlePointerMove),
        Kt(this.contextWindow, "pointerup", this.handlePointerUp),
        Kt(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(), Je(this.updatePoint));
  }
}
function Cr(e, t) {
  return t ? { point: t(e.point) } : e;
}
function vo(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ar({ point: e }, t) {
  return {
    point: e,
    delta: vo(e, Bc(t)),
    offset: vo(e, sm(t)),
    velocity: om(t, 0.1),
  };
}
function sm(e) {
  return e[0];
}
function Bc(e) {
  return e[e.length - 1];
}
function om(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Bc(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > He(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = ze(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
const $c = 1e-4,
  am = 1 - $c,
  lm = 1 + $c,
  Nc = 0.01,
  cm = 0 - Nc,
  um = 0 + Nc;
function ye(e) {
  return e.max - e.min;
}
function fm(e, t, n) {
  return Math.abs(e - t) <= n;
}
function _o(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = z(t.min, t.max, e.origin)),
    (e.scale = ye(n) / ye(t)),
    (e.translate = z(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= am && e.scale <= lm) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= cm && e.translate <= um) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function Gt(e, t, n, r) {
  (_o(e.x, t.x, n.x, r ? r.originX : void 0),
    _o(e.y, t.y, n.y, r ? r.originY : void 0));
}
function bo(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + ye(t)));
}
function dm(e, t, n) {
  (bo(e.x, t.x, n.x), bo(e.y, t.y, n.y));
}
function So(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + ye(t)));
}
function qt(e, t, n) {
  (So(e.x, t.x, n.x), So(e.y, t.y, n.y));
}
function hm(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? z(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? z(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function xo(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function pm(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: xo(e.x, n, i), y: xo(e.y, t, r) };
}
function wo(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function mm(e, t) {
  return { x: wo(e.x, t.x), y: wo(e.y, t.y) };
}
function gm(e, t) {
  let n = 0.5;
  const r = ye(e),
    i = ye(t);
  return (
    i > r
      ? (n = Ct(t.min, t.max - r, e.min))
      : r > i && (n = Ct(e.min, e.max - i, t.min)),
    Ge(0, 1, n)
  );
}
function ym(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Jr = 0.35;
function vm(e = Jr) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Jr),
    { x: To(e, "left", "right"), y: To(e, "top", "bottom") }
  );
}
function To(e, t, n) {
  return { min: Co(e, t), max: Co(e, n) };
}
function Co(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Ao = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  yt = () => ({ x: Ao(), y: Ao() }),
  Po = () => ({ min: 0, max: 0 }),
  X = () => ({ x: Po(), y: Po() });
function xe(e) {
  return [e("x"), e("y")];
}
function jc({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function _m({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function bm(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Pr(e) {
  return e === void 0 || e === 1;
}
function Qr({ scale: e, scaleX: t, scaleY: n }) {
  return !Pr(e) || !Pr(t) || !Pr(n);
}
function nt(e) {
  return (
    Qr(e) ||
    Uc(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Uc(e) {
  return Mo(e.x) || Mo(e.y);
}
function Mo(e) {
  return e && e !== "0%";
}
function Wn(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Eo(e, t, n, r, i) {
  return (i !== void 0 && (e = Wn(e, i, r)), Wn(e, n, r) + t);
}
function ei(e, t = 0, n = 1, r, i) {
  ((e.min = Eo(e.min, t, n, r, i)), (e.max = Eo(e.max, t, n, r, i)));
}
function Wc(e, { x: t, y: n }) {
  (ei(e.x, t.translate, t.scale, t.originPoint),
    ei(e.y, n.translate, n.scale, n.originPoint));
}
const Ro = 0.999999999999,
  ko = 1.0000000000001;
function Sm(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    ((s = n[a]), (o = s.projectionDelta));
    const { visualElement: l } = s.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        _t(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Wc(e, o)),
      r && nt(s.latestValues) && _t(e, s.latestValues));
  }
  (t.x < ko && t.x > Ro && (t.x = 1), t.y < ko && t.y > Ro && (t.y = 1));
}
function vt(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function Do(e, t, n, r, i = 0.5) {
  const s = z(e.min, e.max, i);
  ei(e, t, n, s, r);
}
function _t(e, t) {
  (Do(e.x, t.x, t.scaleX, t.scale, t.originX),
    Do(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function Hc(e, t) {
  return jc(bm(e.getBoundingClientRect(), t));
}
function xm(e, t, n) {
  const r = Hc(e, n),
    { scroll: i } = t;
  return (i && (vt(r.x, i.offset.x), vt(r.y, i.offset.y)), r);
}
const zc = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  wm = new WeakMap();
class Tm {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = X()),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (f) => {
        const { dragSnapToOrigin: u } = this.getProps();
        (u ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(gn(f).point));
      },
      s = (f, u) => {
        const { drag: d, dragPropagation: h, onDragStart: p } = this.getProps();
        if (
          d &&
          !h &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = gh(d)),
          !this.openDragLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          xe((y) => {
            let g = this.getAxisMotionValue(y).get() || 0;
            if (Ie.test(g)) {
              const { projection: v } = this.visualElement;
              if (v && v.layout) {
                const S = v.layout.layoutBox[y];
                S && (g = ye(S) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[y] = g;
          }),
          p && U.postRender(() => p(f, u)),
          Hr(this.visualElement, "transform"));
        const { animationState: m } = this.visualElement;
        m && m.setActive("whileDrag", !0);
      },
      o = (f, u) => {
        const {
          dragPropagation: d,
          dragDirectionLock: h,
          onDirectionLock: p,
          onDrag: m,
        } = this.getProps();
        if (!d && !this.openDragLock) return;
        const { offset: y } = u;
        if (h && this.currentDirection === null) {
          ((this.currentDirection = Cm(y)),
            this.currentDirection !== null && p && p(this.currentDirection));
          return;
        }
        (this.updateAxis("x", u.point, y),
          this.updateAxis("y", u.point, y),
          this.visualElement.render(),
          m && m(f, u));
      },
      a = (f, u) => this.stop(f, u),
      l = () =>
        xe((f) => {
          var u;
          return (
            this.getAnimationState(f) === "paused" &&
            ((u = this.getAxisMotionValue(f).animation) === null || u === void 0
              ? void 0
              : u.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Lc(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: zc(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && U.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !An(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (o = hm(o, this.constraints[t], this.elastic[t])),
      s.set(o));
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      s = this.constraints;
    (n && mt(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
        ? (this.constraints = pm(i.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = vm(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        xe((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = ym(i.layoutBox[o], this.constraints[o]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !mt(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = xm(r, i.root, this.visualElement.getTransformPagePoint());
    let o = mm(i.layout.layoutBox, s);
    if (n) {
      const a = n(_m(o));
      ((this.hasMutatedConstraints = !!a), a && (o = jc(a)));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      c = xe((f) => {
        if (!An(f, n, this.currentDirection)) return;
        let u = (l && l[f]) || {};
        o && (u = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          h = i ? 40 : 1e7,
          p = {
            type: "inertia",
            velocity: r ? t[f] : 0,
            bounceStiffness: d,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...u,
          };
        return this.startAxisValueAnimation(f, p);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Hr(this.visualElement, t),
      r.start(as(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    xe((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    xe((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    xe((n) => {
      const { drag: r } = this.getProps();
      if (!An(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(t[n] - z(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!mt(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    xe((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = gm({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      xe((o) => {
        if (!An(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: c } = this.constraints[o];
        a.set(z(l, c, i[o]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    wm.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Kt(t, "pointerdown", (l) => {
        const { drag: c, dragListener: f = !0 } = this.getProps();
        c && f && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        mt(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      U.read(r));
    const o = sn(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (xe((f) => {
              const u = this.getAxisMotionValue(f);
              u &&
                ((this.originPoint[f] += l[f].translate),
                u.set(u.get() + l[f].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (o(), n(), s(), a && a());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = Jr,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function An(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Cm(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class Am extends et {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = ge),
      (this.removeListeners = ge),
      (this.controls = new Tm(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ge));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const Vo = (e) => (t, n) => {
  e && U.postRender(() => e(t, n));
};
class Pm extends et {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = ge));
  }
  onPointerDown(t) {
    this.session = new Lc(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: zc(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Vo(t),
      onStart: Vo(n),
      onMove: r,
      onEnd: (s, o) => {
        (delete this.session, i && U.postRender(() => i(s, o)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Kt(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const Vn = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Oo(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Bt = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (C.test(e)) e = parseFloat(e);
        else return e;
      const n = Oo(e, t.target.x),
        r = Oo(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  Mm = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Qe.parse(e);
      if (i.length > 5) return r;
      const s = Qe.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((i[0 + o] /= a), (i[1 + o] /= l));
      const c = z(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= c),
        typeof i[3 + o] == "number" && (i[3 + o] /= c),
        s(i)
      );
    },
  };
class Em extends we {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    (Xd(Rm),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Vn.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              U.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Fi.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Kc(e) {
  const [t, n] = ud(),
    r = G(Ml);
  return Le(Em, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: G(Fl),
    isPresent: t,
    safeToRemove: n,
  });
}
const Rm = {
  borderRadius: {
    ...Bt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: Bt,
  borderTopRightRadius: Bt,
  borderBottomLeftRadius: Bt,
  borderBottomRightRadius: Bt,
  boxShadow: Mm,
};
function km(e, t, n) {
  const r = le(e) ? e : nn(e);
  return (r.start(as("", r, t, n)), r.animation);
}
function Dm(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const Vm = (e, t) => e.depth - t.depth;
class Om {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (Yi(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (Zi(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(Vm),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function Im(e, t) {
  const n = Fe.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (Je(r), e(s - t));
    };
  return (U.read(r, !0), () => Je(r));
}
const Gc = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Fm = Gc.length,
  Io = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Fo = (e) => typeof e == "number" || C.test(e);
function Lm(e, t, n, r, i, s) {
  i
    ? ((e.opacity = z(0, n.opacity !== void 0 ? n.opacity : 1, Bm(r))),
      (e.opacityExit = z(t.opacity !== void 0 ? t.opacity : 1, 0, $m(r))))
    : s &&
      (e.opacity = z(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let o = 0; o < Fm; o++) {
    const a = `border${Gc[o]}Radius`;
    let l = Lo(t, a),
      c = Lo(n, a);
    if (l === void 0 && c === void 0) continue;
    (l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || Fo(l) === Fo(c)
        ? ((e[a] = Math.max(z(Io(l), Io(c), r), 0)),
          (Ie.test(c) || Ie.test(l)) && (e[a] += "%"))
        : (e[a] = c));
  }
  (t.rotate || n.rotate) && (e.rotate = z(t.rotate || 0, n.rotate || 0, r));
}
function Lo(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Bm = qc(0, 0.5, dc),
  $m = qc(0.5, 0.95, ge);
function qc(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Ct(e, t, r)));
}
function Bo(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function Se(e, t) {
  (Bo(e.x, t.x), Bo(e.y, t.y));
}
function $o(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function No(e, t, n, r, i) {
  return (
    (e -= t),
    (e = Wn(e, 1 / n, r)),
    i !== void 0 && (e = Wn(e, 1 / i, r)),
    e
  );
}
function Nm(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (Ie.test(t) &&
      ((t = parseFloat(t)), (t = z(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = z(s.min, s.max, r);
  (e === s && (a -= t),
    (e.min = No(e.min, t, n, a, i)),
    (e.max = No(e.max, t, n, a, i)));
}
function jo(e, t, [n, r, i], s, o) {
  Nm(e, t[n], t[r], t[i], t.scale, s, o);
}
const jm = ["x", "scaleX", "originX"],
  Um = ["y", "scaleY", "originY"];
function Uo(e, t, n, r) {
  (jo(e.x, t, jm, n ? n.x : void 0, r ? r.x : void 0),
    jo(e.y, t, Um, n ? n.y : void 0, r ? r.y : void 0));
}
function Wo(e) {
  return e.translate === 0 && e.scale === 1;
}
function Xc(e) {
  return Wo(e.x) && Wo(e.y);
}
function Ho(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Wm(e, t) {
  return Ho(e.x, t.x) && Ho(e.y, t.y);
}
function zo(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Yc(e, t) {
  return zo(e.x, t.x) && zo(e.y, t.y);
}
function Ko(e) {
  return ye(e.x) / ye(e.y);
}
function Go(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class Hm {
  constructor() {
    this.members = [];
  }
  add(t) {
    (Yi(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if (
      (Zi(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function zm(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: c,
      rotate: f,
      rotateX: u,
      rotateY: d,
      skewX: h,
      skewY: p,
    } = n;
    (c && (r = `perspective(${c}px) ${r}`),
      f && (r += `rotate(${f}deg) `),
      u && (r += `rotateX(${u}deg) `),
      d && (r += `rotateY(${d}deg) `),
      h && (r += `skewX(${h}deg) `),
      p && (r += `skewY(${p}deg) `));
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
}
const rt = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  jt = typeof window < "u" && window.MotionDebug !== void 0,
  Mr = ["", "X", "Y", "Z"],
  Km = { visibility: "hidden" },
  qo = 1e3;
let Gm = 0;
function Er(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Zc(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = sc(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", U, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Zc(r);
}
function Jc({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      ((this.id = Gm++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            jt &&
              (rt.totalNodes =
                rt.resolvedTargetDeltas =
                rt.recalculatedProjection =
                  0),
            this.nodes.forEach(Ym),
            this.nodes.forEach(tg),
            this.nodes.forEach(ng),
            this.nodes.forEach(Zm),
            jt && window.MotionDebug.record(rt));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Om());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Ji()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = Dm(o)), (this.instance = o));
      const { layoutId: l, layout: c, visualElement: f } = this.options;
      if (
        (f && !f.current && f.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let u;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          ((this.root.updateBlockedByResize = !0),
            u && u(),
            (u = Im(d, 250)),
            Vn.hasAnimatedSinceResize &&
              ((Vn.hasAnimatedSinceResize = !1), this.nodes.forEach(Yo)));
        });
      }
      (l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          f &&
          (l || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: u,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: h,
              layout: p,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const m =
                  this.options.transition || f.getDefaultTransition() || ag,
                { onLayoutAnimationStart: y, onLayoutAnimationComplete: g } =
                  f.getProps(),
                v = !this.targetLayout || !Yc(this.targetLayout, p) || h,
                S = !d && h;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                S ||
                (d && (v || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(u, S));
                const A = { ...Ki(m, "layout"), onPlay: y, onComplete: g };
                ((f.shouldReduceMotion || this.options.layoutRoot) &&
                  ((A.delay = 0), (A.type = !1)),
                  this.startAnimation(A));
              } else
                (d || Yo(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = p;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const o = this.getStack();
      (o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Je(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(rg),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Zc(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let f = 0; f < this.path.length; f++) {
        const u = this.path[f];
        ((u.shouldResetTransform = !0),
          u.updateScroll("snapshot"),
          u.options.layoutRoot && u.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = c
        ? c(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Xo));
        return;
      }
      (this.isUpdating || this.nodes.forEach(Qm),
        (this.isUpdating = !1),
        this.nodes.forEach(eg),
        this.nodes.forEach(qm),
        this.nodes.forEach(Xm),
        this.clearAllSnapshots());
      const a = Fe.now();
      ((ie.delta = Ge(0, 1e3 / 60, a - ie.timestamp)),
        (ie.timestamp = a),
        (ie.isProcessing = !0),
        br.update.process(ie),
        br.preRender.process(ie),
        br.render.process(ie),
        (ie.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Fi.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(Jm), this.sharedNodes.forEach(ig));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        U.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      U.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = X()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Xc(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        f = c !== this.prevTransformTemplateValue;
      o &&
        (a || nt(this.latestValues) || f) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        lg(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a) return X();
      const l = a.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(cg)
        )
      ) {
        const { scroll: f } = this.root;
        f && (vt(l.x, f.offset.x), vt(l.y, f.offset.y));
      }
      return l;
    }
    removeElementScroll(o) {
      var a;
      const l = X();
      if (
        (Se(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c],
          { scroll: u, options: d } = f;
        f !== this.root &&
          u &&
          d.layoutScroll &&
          (u.wasRoot && Se(l, o), vt(l.x, u.offset.x), vt(l.y, u.offset.y));
      }
      return l;
    }
    applyTransform(o, a = !1) {
      const l = X();
      Se(l, o);
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (!a &&
          f.options.layoutScroll &&
          f.scroll &&
          f !== f.root &&
          _t(l, { x: -f.scroll.offset.x, y: -f.scroll.offset.y }),
          nt(f.latestValues) && _t(l, f.latestValues));
      }
      return (nt(this.latestValues) && _t(l, this.latestValues), l);
    }
    removeTransform(o) {
      const a = X();
      Se(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !nt(c.latestValues)) continue;
        Qr(c.latestValues) && c.updateSnapshot();
        const f = X(),
          u = c.measurePageBox();
        (Se(f, u),
          Uo(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, f));
      }
      return (nt(this.latestValues) && Uo(a, this.latestValues), a);
    }
    setTargetDelta(o) {
      ((this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ie.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty));
      const c = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: u, layoutId: d } = this.options;
      if (!(!this.layout || !(u || d))) {
        if (
          ((this.resolvedRelativeTargetAt = ie.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = X()),
              (this.relativeTargetOrigin = X()),
              qt(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                h.layout.layoutBox,
              ),
              Se(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = X()), (this.targetWithTransforms = X())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                dm(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : Se(this.target, this.layout.layoutBox),
                  Wc(this.target, this.targetDelta))
                : Se(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = h),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = X()),
                (this.relativeTargetOrigin = X()),
                qt(this.relativeTargetOrigin, this.target, h.target),
                Se(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          jt && rt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Qr(this.parent.latestValues) ||
          Uc(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === ie.timestamp && (c = !1),
        c)
      )
        return;
      const { layout: f, layoutId: u } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(f || u))
      )
        return;
      Se(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        h = this.treeScale.y;
      (Sm(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = X())));
      const { target: p } = a;
      if (!p) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : ($o(this.prevProjectionDelta.x, this.projectionDelta.x),
          $o(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Gt(this.projectionDelta, this.layoutCorrected, p, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== h ||
          !Go(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Go(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", p)),
        jt && rt.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        o)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = yt()),
        (this.projectionDelta = yt()),
        (this.projectionDeltaWithTransform = yt()));
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        f = { ...this.latestValues },
        u = yt();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const d = X(),
        h = l ? l.source : void 0,
        p = this.layout ? this.layout.source : void 0,
        m = h !== p,
        y = this.getStack(),
        g = !y || y.members.length <= 1,
        v = !!(m && !g && this.options.crossfade === !0 && !this.path.some(og));
      this.animationProgress = 0;
      let S;
      ((this.mixTargetDelta = (A) => {
        const x = A / 1e3;
        (Zo(u.x, o.x, x),
          Zo(u.y, o.y, x),
          this.setTargetDelta(u),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (qt(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            sg(this.relativeTarget, this.relativeTargetOrigin, d, x),
            S && Wm(this.relativeTarget, S) && (this.isProjectionDirty = !1),
            S || (S = X()),
            Se(S, this.relativeTarget)),
          m &&
            ((this.animationValues = f), Lm(f, c, this.latestValues, x, v, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = x));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(o) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Je(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = U.update(() => {
          ((Vn.hasAnimatedSinceResize = !0),
            (this.currentAnimation = km(0, qo, {
              ...o,
              onUpdate: (a) => {
                (this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a));
              },
              onComplete: () => {
                (o.onComplete && o.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      (o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(qo),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: f,
      } = o;
      if (!(!a || !l || !c)) {
        if (
          this !== o &&
          this.layout &&
          c &&
          Qc(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || X();
          const u = ye(this.layout.layoutBox.x);
          ((l.x.min = o.target.x.min), (l.x.max = l.x.min + u));
          const d = ye(this.layout.layoutBox.y);
          ((l.y.min = o.target.y.min), (l.y.max = l.y.min + d));
        }
        (Se(a, l),
          _t(a, f),
          Gt(this.projectionDeltaWithTransform, this.layoutCorrected, a, f));
      }
    }
    registerSharedNode(o, a) {
      (this.sharedNodes.has(o) || this.sharedNodes.set(o, new Hm()),
        this.sharedNodes.get(o).add(a));
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      (c && c.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const c = {};
      l.z && Er("z", o, c, this.animationValues);
      for (let f = 0; f < Mr.length; f++)
        (Er(`rotate${Mr[f]}`, o, c, this.animationValues),
          Er(`skew${Mr[f]}`, o, c, this.animationValues));
      o.render();
      for (const f in c)
        (o.setStaticValue(f, c[f]),
          this.animationValues && (this.animationValues[f] = c[f]));
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Km;
      const c = { visibility: "" },
        f = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = kn(o == null ? void 0 : o.pointerEvents) || ""),
          (c.transform = f ? f(this.latestValues, "") : "none"),
          c
        );
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        const m = {};
        return (
          this.options.layoutId &&
            ((m.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (m.pointerEvents = kn(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !nt(this.latestValues) &&
            ((m.transform = f ? f({}, "") : "none"), (this.hasProjected = !1)),
          m
        );
      }
      const d = u.animationValues || u.latestValues;
      (this.applyTransformsToTarget(),
        (c.transform = zm(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d,
        )),
        f && (c.transform = f(d, c.transform)));
      const { x: h, y: p } = this.projectionDelta;
      ((c.transformOrigin = `${h.origin * 100}% ${p.origin * 100}% 0`),
        u.animationValues
          ? (c.opacity =
              u === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : d.opacityExit)
          : (c.opacity =
              u === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                  ? d.opacityExit
                  : 0));
      for (const m in Bn) {
        if (d[m] === void 0) continue;
        const { correct: y, applyTo: g } = Bn[m],
          v = c.transform === "none" ? d[m] : y(d[m], u);
        if (g) {
          const S = g.length;
          for (let A = 0; A < S; A++) c[g[A]] = v;
        } else c[m] = v;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents =
            u === this
              ? kn(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Xo),
        this.root.sharedNodes.clear());
    }
  };
}
function qm(e) {
  e.updateLayout();
}
function Xm(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === "size"
      ? xe((u) => {
          const d = o ? n.measuredBox[u] : n.layoutBox[u],
            h = ye(d);
          ((d.min = r[u].min), (d.max = d.min + h));
        })
      : Qc(s, n.layoutBox, r) &&
        xe((u) => {
          const d = o ? n.measuredBox[u] : n.layoutBox[u],
            h = ye(r[u]);
          ((d.max = d.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[u].max = e.relativeTarget[u].min + h)));
        });
    const a = yt();
    Gt(a, r, n.layoutBox);
    const l = yt();
    o ? Gt(l, e.applyTransform(i, !0), n.measuredBox) : Gt(l, r, n.layoutBox);
    const c = !Xc(a);
    let f = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: d, layout: h } = u;
        if (d && h) {
          const p = X();
          qt(p, n.layoutBox, d.layoutBox);
          const m = X();
          (qt(m, r, h.layoutBox),
            Yc(p, m) || (f = !0),
            u.options.layoutRoot &&
              ((e.relativeTarget = m),
              (e.relativeTargetOrigin = p),
              (e.relativeParent = u)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: f,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Ym(e) {
  (jt && rt.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)));
}
function Zm(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Jm(e) {
  e.clearSnapshot();
}
function Xo(e) {
  e.clearMeasurements();
}
function Qm(e) {
  e.isLayoutDirty = !1;
}
function eg(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function Yo(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function tg(e) {
  e.resolveTargetDelta();
}
function ng(e) {
  e.calcProjection();
}
function rg(e) {
  e.resetSkewAndRotation();
}
function ig(e) {
  e.removeLeadSnapshot();
}
function Zo(e, t, n) {
  ((e.translate = z(t.translate, 0, n)),
    (e.scale = z(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Jo(e, t, n, r) {
  ((e.min = z(t.min, n.min, r)), (e.max = z(t.max, n.max, r)));
}
function sg(e, t, n, r) {
  (Jo(e.x, t.x, n.x, r), Jo(e.y, t.y, n.y, r));
}
function og(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const ag = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Qo = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  ea = Qo("applewebkit/") && !Qo("chrome/") ? Math.round : ge;
function ta(e) {
  ((e.min = ea(e.min)), (e.max = ea(e.max)));
}
function lg(e) {
  (ta(e.x), ta(e.y));
}
function Qc(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !fm(Ko(t), Ko(n), 0.2))
  );
}
function cg(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const ug = Jc({
    attachResizeListener: (e, t) => sn(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Rr = { current: void 0 },
  eu = Jc({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Rr.current) {
        const e = new ug({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (Rr.current = e));
      }
      return Rr.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  fg = {
    pan: { Feature: Pm },
    drag: { Feature: Am, ProjectionNode: eu, MeasureLayout: Kc },
  };
function na(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    s = r[i];
  s && U.postRender(() => s(t, gn(t)));
}
class dg extends et {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = fh(
        t,
        (n) => (na(this.node, n, "Start"), (r) => na(this.node, r, "End")),
      ));
  }
  unmount() {}
}
class hg extends et {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = mn(
      sn(this.node.current, "focus", () => this.onFocus()),
      sn(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function ra(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    s = r[i];
  s && U.postRender(() => s(t, gn(t)));
}
class pg extends et {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = mh(
        t,
        (n) => (
          ra(this.node, n, "Start"),
          (r, { success: i }) => ra(this.node, r, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const ti = new WeakMap(),
  kr = new WeakMap(),
  mg = (e) => {
    const t = ti.get(e.target);
    t && t(e);
  },
  gg = (e) => {
    e.forEach(mg);
  };
function yg({ root: e, ...t }) {
  const n = e || document;
  kr.has(n) || kr.set(n, {});
  const r = kr.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(gg, { root: e, ...t })),
    r[i]
  );
}
function vg(e, t, n) {
  const r = yg(t);
  return (
    ti.set(e, n),
    r.observe(e),
    () => {
      (ti.delete(e), r.unobserve(e));
    }
  );
}
const _g = { some: 0, all: 1 };
class bg extends et {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : _g[i],
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (
          this.isInView === c ||
          ((this.isInView = c), s && !c && this.hasEnteredView)
        )
          return;
        (c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c));
        const { onViewportEnter: f, onViewportLeave: u } = this.node.getProps(),
          d = c ? f : u;
        d && d(l);
      };
    return vg(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Sg(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Sg({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const xg = {
    inView: { Feature: bg },
    tap: { Feature: pg },
    focus: { Feature: hg },
    hover: { Feature: dg },
  },
  wg = { layout: { ProjectionNode: eu, MeasureLayout: Kc } },
  ni = { current: null },
  tu = { current: !1 };
function Tg() {
  if (((tu.current = !0), !!ki))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (ni.current = e.matches);
      (e.addListener(t), t());
    } else ni.current = !1;
}
const Cg = [...Ac, ae, Qe],
  Ag = (e) => Cg.find(Cc(e)),
  ia = new WeakMap();
function Pg(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (le(i)) e.addValue(r, i);
    else if (le(s)) e.addValue(r, nn(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, nn(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const sa = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class Mg {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    a = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = is),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const h = Fe.now();
        this.renderScheduledAt < h &&
          ((this.renderScheduledAt = h), U.render(this.render, !1, !0));
      }));
    const { latestValues: l, renderState: c, onUpdate: f } = o;
    ((this.onUpdate = f),
      (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = hr(n)),
      (this.isVariantNode = Ol(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const h in d) {
      const p = d[h];
      l[h] !== void 0 && le(p) && p.set(l[h], !1);
    }
  }
  mount(t) {
    ((this.current = t),
      ia.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      tu.current || Tg(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : ni.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (ia.delete(this.current),
      this.projection && this.projection.unmount(),
      Je(this.notifyUpdate),
      Je(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = ft.has(t),
      i = n.on("change", (a) => {
        ((this.latestValues[t] = a),
          this.props.onUpdate && U.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0));
      }),
      s = n.on("renderRequest", this.scheduleRender);
    let o;
    (window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (i(), s(), o && o(), n.owner && n.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in At) {
      const n = At[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : X();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < sa.length; r++) {
      const i = sa[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    ((this.prevMotionValues = Pg(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this));
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = nn(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
            r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (wc(i) || pc(i))
          ? (i = parseFloat(i))
          : !Ag(i) && Qe.test(n) && (i = bc(t, n)),
        this.setBaseTarget(t, le(i) ? i.get() : i)),
      le(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const o = Bi(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom,
      );
      o && (i = o[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !le(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new Ji()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class nu extends Mg {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = Pc));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    le(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function Eg(e) {
  return window.getComputedStyle(e);
}
class Rg extends nu {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Wl));
  }
  readValueFromInstance(t, n) {
    if (ft.has(n)) {
      const r = rs(n);
      return (r && r.default) || 0;
    } else {
      const r = Eg(t),
        i = (Nl(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Hc(t, n);
  }
  build(t, n, r) {
    ji(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return zi(t, n, r);
  }
}
class kg extends nu {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = X));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (ft.has(n)) {
      const r = rs(n);
      return (r && r.default) || 0;
    }
    return ((n = Hl.has(n) ? n : Ii(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Gl(t, n, r);
  }
  build(t, n, r) {
    Ui(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    zl(t, n, r, i);
  }
  mount(t) {
    ((this.isSVGTag = Hi(t.tagName)), super.mount(t));
  }
}
const Dg = (e, t) =>
    Li(e) ? new kg(t) : new Rg(t, { allowProjection: e !== fe }),
  Vg = ih({ ...nm, ...xg, ...fg, ...wg }, Dg),
  ot = _d(Vg);
var ri = function (t, n) {
  var r = arguments;
  if (n == null || !dn.call(n, "css")) return ce.apply(void 0, r);
  var i = r.length,
    s = new Array(i);
  ((s[0] = Pi), (s[1] = Ai(t, n)));
  for (var o = 2; o < i; o++) s[o] = r[o];
  return ce.apply(null, s);
};
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(ri || (ri = {}));
var ru = Tl(function (e, t) {
    var n = e.styles,
      r = Sl([n], void 0, G(ur)),
      i = Ze();
    return (
      Ns(
        function () {
          var s = t.key + "-global",
            o = new t.sheet.constructor({
              key: s,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            a = !1,
            l = document.querySelector(
              'style[data-emotion="' + s + " " + r.name + '"]',
            );
          return (
            t.sheet.tags.length && (o.before = t.sheet.tags[0]),
            l !== null &&
              ((a = !0), l.setAttribute("data-emotion", s), o.hydrate([l])),
            (i.current = [o, a]),
            function () {
              o.flush();
            }
          );
        },
        [t],
      ),
      Ns(
        function () {
          var s = i.current,
            o = s[0],
            a = s[1];
          if (a) {
            s[1] = !1;
            return;
          }
          if ((r.next !== void 0 && _l(t, r.next, !0), o.tags.length)) {
            var l = o.tags[o.tags.length - 1].nextElementSibling;
            ((o.before = l), o.flush());
          }
          t.insert("", r, o, !1);
        },
        [t, r.name],
      ),
      null
    );
  }),
  Og = function (t) {
    return Ig(t) && !Fg(t);
  };
function Ig(e) {
  return !!e && typeof e == "object";
}
function Fg(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || $g(e);
}
var Lg = typeof Symbol == "function" && Symbol.for,
  Bg = Lg ? Symbol.for("react.element") : 60103;
function $g(e) {
  return e.$$typeof === Bg;
}
function Ng(e) {
  return Array.isArray(e) ? [] : {};
}
function on(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Mt(Ng(e), e, t) : e;
}
function jg(e, t, n) {
  return e.concat(t).map(function (r) {
    return on(r, n);
  });
}
function Ug(e, t) {
  if (!t.customMerge) return Mt;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : Mt;
}
function Wg(e) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(e).filter(function (t) {
        return Object.propertyIsEnumerable.call(e, t);
      })
    : [];
}
function oa(e) {
  return Object.keys(e).concat(Wg(e));
}
function iu(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Hg(e, t) {
  return (
    iu(e, t) &&
    !(
      Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t)
    )
  );
}
function zg(e, t, n) {
  var r = {};
  return (
    n.isMergeableObject(e) &&
      oa(e).forEach(function (i) {
        r[i] = on(e[i], n);
      }),
    oa(t).forEach(function (i) {
      Hg(e, i) ||
        (iu(e, i) && n.isMergeableObject(t[i])
          ? (r[i] = Ug(i, n)(e[i], t[i], n))
          : (r[i] = on(t[i], n)));
    }),
    r
  );
}
function Mt(e, t, n) {
  ((n = n || {}),
    (n.arrayMerge = n.arrayMerge || jg),
    (n.isMergeableObject = n.isMergeableObject || Og),
    (n.cloneUnlessOtherwiseSpecified = on));
  var r = Array.isArray(t),
    i = Array.isArray(e),
    s = r === i;
  return s ? (r ? n.arrayMerge(e, t, n) : zg(e, t, n)) : on(t, n);
}
Mt.all = function (t, n) {
  if (!Array.isArray(t)) throw new Error("first argument should be an array");
  return t.reduce(function (r, i) {
    return Mt(r, i, n);
  }, {});
};
var Kg = Mt,
  Gg = Kg;
const su = If(Gg),
  qg = "11.14.0",
  Xg = { version: qg },
  Yg = Xg.version,
  Et = (e, t, ...n) => ri(e, Ei(t), ...n),
  ou = { __EMOTION_VERSION__: Yg, theme: {} },
  au = Ee(ou),
  yn = () => G(au),
  lu = typeof Symbol == "function" && Symbol.for,
  Zg = lu ? Symbol.for("react.element") : 60103,
  Jg = lu ? Symbol.for("react.forward_ref") : 60103,
  cu = {
    isMergeableObject: (e) =>
      !!e && typeof e == "object" && e.$$typeof !== Zg && e.$$typeof !== Jg,
    arrayMerge: (e, t) => t,
  },
  uu = (e, t) => su(e, t, cu);
function Qg(...e) {
  return su.all(e, cu);
}
uu.all = Qg;
const ls = ({ context: e, children: t }) =>
  Et(
    ur.Provider,
    { value: e.theme },
    Et(au.Provider, { value: e, children: t }),
  );
function ey({ theme: e, children: t }) {
  const n = yn(),
    r =
      typeof e == "function"
        ? { ...n, theme: e(n.theme) }
        : uu.all({}, n, { theme: e });
  return Et(ls, { context: r, children: t });
}
const fu = (e) => `--theme-ui-${e.replace("-__default", "")}`,
  du = (e) => `var(${fu(e)})`,
  hu = (...e) => e.filter(Boolean).join("-"),
  ty = new Set([
    "useCustomProperties",
    "initialColorModeName",
    "printColorModeName",
    "initialColorMode",
    "useLocalStorage",
    "config",
  ]),
  pu = (e, t) => {
    const n = Array.isArray(e) ? [] : {};
    for (let r in e) {
      const i = e[r],
        s = hu(t, r);
      if (i && typeof i == "object") {
        n[r] = pu(i, s);
        continue;
      }
      if (ty.has(r)) {
        n[r] = i;
        continue;
      }
      n[r] = du(s);
    }
    return n;
  },
  Hn = (e, t) => {
    let n = {};
    for (let r in t) {
      if (r === "modes") continue;
      const i = hu(e, r),
        s = t[r];
      s && typeof s == "object" ? (n = { ...n, ...Hn(i, s) }) : (n[fu(i)] = s);
    }
    return n;
  },
  ny = (e = {}) => {
    const {
        useCustomProperties: t,
        initialColorModeName: n,
        printColorModeName: r,
        useRootStyles: i,
      } = e.config || e || {},
      s = e.rawColors || e.colors;
    if (!s || i === !1) return {};
    if (t === !1) return Ve({ color: "text", bg: "background" })(e);
    const o = s.modes || {},
      a = mu(s, o);
    if (r) {
      let c = o[r];
      (!c && r === n && (c = s),
        c
          ? (a["@media print"] = Hn("colors", c))
          : console.error(
              "Theme UI `printColorModeName` was not found in colors scale",
              { colors: s, printColorModeName: r },
            ));
    }
    const l = (c) => du(`colors-${c}`);
    return Ve({ ...a, color: l("text"), bg: l("background") })(e);
  };
function mu(e, t) {
  const n = Hn("colors", e);
  return (
    Object.keys(t).forEach((r) => {
      const i = `.theme-ui-${r}`,
        s = `&${i}, ${i} &`;
      n[s] = Hn("colors", t[r]);
    }),
    n
  );
}
const aa = "theme-ui-color-mode",
  ii = "(prefers-color-scheme: dark)",
  ry = "(prefers-color-scheme: light)",
  la = {
    get: () => {
      try {
        return window.localStorage.getItem(aa);
      } catch (e) {
        console.warn(
          "localStorage is disabled and color mode might not work as expected.",
          "Please check your Site Settings.",
          e,
        );
      }
    },
    set: (e) => {
      try {
        window.localStorage.setItem(aa, e);
      } catch (t) {
        console.warn(
          "localStorage is disabled and color mode might not work as expected.",
          "Please check your Site Settings.",
          t,
        );
      }
    },
  },
  ca = () => {
    if (typeof window < "u" && window.matchMedia) {
      if (window.matchMedia(ii).matches) return "dark";
      if (window.matchMedia(ry).matches) return "light";
    }
    return null;
  },
  gu = typeof window > "u" ? () => {} : Xe,
  iy = ({ outerCtx: e, children: t }) => {
    const n = e.theme || {},
      {
        initialColorModeName: r,
        useColorSchemeMediaQuery: i,
        useLocalStorage: s,
      } = n.config || n;
    let [o, a] = qe(() => (i !== !1 && ca()) || r);
    (gu(() => {
      const u = s !== !1 && la.get();
      (typeof document < "u" &&
        document.documentElement.classList.remove("theme-ui-" + u),
        i !== "system" && u && u !== o && ((o = u), a(u)));
    }, []),
      Be(() => {
        o && s !== !1 && la.set(o);
      }, [o, s]));
    const l = Rt(() => {
      const u = ca();
      a(u || r);
    }, [r]);
    Be(() => {
      if (i === "system" && window.matchMedia) {
        const u = window.matchMedia(ii);
        typeof u.addEventListener == "function"
          ? u.addEventListener("change", l)
          : typeof u.addListener == "function" && u.addListener(l);
      }
      return () => {
        if (i === "system" && window.matchMedia) {
          const u = window.matchMedia(ii);
          typeof u.removeEventListener == "function"
            ? u.removeEventListener("change", l)
            : typeof u.removeListener == "function" && u.removeListener(l);
        }
      };
    }, [i, l]);
    const c = vu({ colorMode: o, outerTheme: n }),
      f = { ...e, theme: c, colorMode: o, setColorMode: a };
    return ct(ls, { context: f, children: [V(sy, { theme: c }), t] });
  },
  Dr = (e) => {
    const t = { ...e };
    return (delete t.modes, t);
  };
function yu(e, t) {
  for (const [n, r] of Object.entries(e))
    if (typeof r == "string" && !r.startsWith("var(")) t[n] = r;
    else if (typeof r == "object") {
      const i = { ...t[n] };
      (yu(r, i), (t[n] = i));
    }
}
function vu({ outerTheme: e, colorMode: t }) {
  return Re(() => {
    const r = { ...e },
      i = Me(r, "colors.modes", {}),
      s = Me(i, t, {});
    t && (r.colors = { ...r.colors, ...s });
    const { useCustomProperties: o, initialColorModeName: a = "__default" } =
      e.config || e;
    let l = e.rawColors || e.colors || {};
    if (o !== !1) {
      const c = r.rawColors != null,
        f = r.colors || {};
      if (c)
        ((l = { ...l }),
          yu(f, l),
          l.modes && (l.modes[a] = Dr(l)),
          (r.rawColors = l));
      else if (!("modes" in l)) r.rawColors = f;
      else {
        const u = { [a]: Dr(l), ...l.modes };
        r.rawColors = { ...f, modes: u };
      }
      r.colors = pu(Dr(l), "colors");
    }
    return r;
  }, [t, e]);
}
function sy({ theme: e }) {
  return Et(ru, { styles: () => ({ html: ny(e) }) });
}
function oy({ outerCtx: e, children: t }) {
  var n;
  const r = vu({ outerTheme: e.theme, colorMode: e.colorMode }),
    [i, s] = qe(() => {
      var c;
      return ((c = r.config) == null ? void 0 : c.useLocalStorage) !== !1;
    });
  gu(() => void s(!1), []);
  const o = r.rawColors || r.colors,
    a = (n = r.config) == null ? void 0 : n.useCustomProperties,
    l = Re(() => {
      if (a === !1) return {};
      const c = o || {};
      return Ve(mu(c, c.modes || {}))(r);
    }, [r, o, a]);
  return V(ls, {
    context: { ...e, theme: r },
    children: Et("div", {
      "data-themeui-nested-provider": !0,
      key: Number(i),
      suppressHydrationWarning: !0,
      css: l,
      children: t,
    }),
  });
}
const ay = ({ children: e }) => {
    const t = yn();
    return typeof t.setColorMode != "function"
      ? V(iy, { outerCtx: t, children: e })
      : V(oy, { outerCtx: t, children: e });
  },
  ly = () =>
    Et(ru, {
      styles: (e) => {
        var t;
        const n = e,
          { useRootStyles: r } = n.config || n;
        if (r === !1 || (n.styles && !n.styles.root)) return null;
        const i =
          ((t = n.config) == null ? void 0 : t.useBorderBox) === !1
            ? void 0
            : "border-box";
        return Ve({
          "*": { boxSizing: i },
          html: { variant: "styles.root" },
          body: { margin: 0 },
        })(n);
      },
    }),
  cy = ({ theme: e, children: t }) => {
    const r = yn() === ou;
    return V(ey, {
      theme: e,
      children: ct(ay, { children: [r && V(ly, {}), t] }),
    });
  },
  _u = [
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "color",
    "backgroundColor",
    "bg",
    "opacity",
  ],
  uy = (e) => {
    const t = {};
    for (const n of _u) t[n] = e[n];
    return t;
  },
  cs = cn(function (t, n) {
    const r = Qf(),
      {
        __themeKey: i = "variants",
        __css: s,
        variant: o,
        css: a,
        sx: l,
        as: c = "div",
        ...f
      } = t,
      u = { boxSizing: "border-box", margin: 0, minWidth: 0 },
      d = Ve(s)(r),
      h = Me(r, `${i}.${o}`) || Me(r, o),
      p = h && Ve(h)(r),
      m = Ve(l)(r),
      y = Ve(uy(f))(r),
      g = [u, d, p, m, y, a];
    return (
      _u.forEach((v) => {
        delete f[v];
      }),
      V(c, { ref: n, css: g, ...f })
    );
  });
const fy = cs,
  bu = kt.forwardRef(function (t, n) {
    return V(fy, {
      ref: n,
      as: "button",
      variant: "primary",
      ...t,
      ...{
        __themeKey: "buttons",
        __css: {
          appearance: "none",
          display: t.hidden ? void 0 : "inline-block",
          textAlign: "center",
          lineHeight: "inherit",
          textDecoration: "none",
          fontSize: "inherit",
          px: 3,
          py: 2,
          color: "white",
          bg: "primary",
          border: 0,
          borderRadius: 4,
        },
      },
    });
  }),
  dy = kt.forwardRef(function (t, n) {
    const r = t.__css;
    return V(cs, {
      ref: n,
      as: "img",
      ...t,
      ...{
        __themeKey: "images",
        __css: { maxWidth: "100%", height: "auto", ...r },
      },
    });
  }),
  hy = kt.forwardRef(function ({ size: t = 24, ...n }, r) {
    const i = {
      xmlns: "http://www.w3.org/2000/svg",
      width: t,
      height: t,
      viewBox: "0 0 24 24",
      fill: "currentcolor",
      ...n,
    };
    return V(cs, { ref: r, as: "svg", ...i });
  });
hy.displayName = "SVG";
V("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  children: V("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
  }),
});
const lt = (e) =>
    V(ot.path, {
      fill: "transparent",
      strokeWidth: "3",
      stroke: "hsl(0, 0%, 99%)",
      strokeLinecap: "round",
      ...e,
    }),
  py = () =>
    ct("svg", {
      width: "27",
      height: "27",
      viewBox: "0 0 27 27",
      children: [
        V(lt, {
          variants: {
            closed: { opacity: 0, d: "M 7.5 14.5 L 19 14.5" },
            open: { opacity: 1, d: "M 7 7 L 20 20" },
          },
          transition: { duration: 0.2 },
        }),
        V(lt, {
          variants: {
            closed: { opacity: 0, d: "M 7.5 8.5 L 19 8.5" },
            open: { opacity: 1, d: "M 7 20 L 20 7" },
          },
          transition: { duration: 0.2 },
        }),
        V(lt, {
          d: "M22 21.6453C22 20 23 19.5 23 19.5C23 19.5 25.5 18 25.5 14V9C25.5 4 23 1.5 18 1.5H9C4 1.5 1.5 4 1.5 9V14C1.5 19 4 21 9 21H13.5C14 21 14 21 15 21.5L20.25 24.8572L20.8517 25.2118C21.5184 25.6046 22 25.631 22 24.8572V24.0287V22.7858V21.6453Z",
          variants: { closed: { opacity: 1 }, open: { opacity: 0 } },
          transition: { duration: 0.2 },
        }),
      ],
    }),
  my = () =>
    ct("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      children: [
        V(lt, {
          variants: {
            closed: { opacity: 0, d: "M 7.5 14.5 L 19 14.5" },
            open: { opacity: 1, d: "M 5 5 L 20 20" },
          },
          transition: { duration: 0.2 },
        }),
        V(lt, {
          variants: {
            closed: { opacity: 0, d: "M 7.5 8.5 L 19 8.5" },
            open: { opacity: 1, d: "M 5 20 L 20 5" },
          },
          transition: { duration: 0.2 },
        }),
        V(ot.path, {
          d: "M20.5 21.1453C20.5 19.5 21.5 19 21.5 19C21.5 19 24 18.5 24 13.5V8.5C24 3.5 21.5 1 16.5 1H7.5C2.5 1 0 3.5 0 8.5V13.5C0 18.5 2.5 20.5 7.5 20.5H12C12.5 20.5 12.5 20.5 13.5 21L18.75 24.3572L19.3517 24.7118C20.0184 25.1046 20.5 25.131 20.5 24.3572V23.5287V22.2858V21.1453Z",
          fill: "white",
          fillOpacity: "0.7",
          variants: { closed: { opacity: 1 }, open: { opacity: 0 } },
          transition: { duration: 0.2 },
        }),
        V(ot.path, {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M21.5 18C21.5 18 20.5 18.5 20.5 20.1453V21.2858V22.5287V23.3572C20.5 24.131 20.0184 24.1046 19.3517 23.7118L18.75 23.3572L13.5 20C12.8174 19.6587 12.6007 19.5504 12.3729 19.516C12.267 19.5 12.1587 19.5 12 19.5H7.5C2.5 19.5 0 17.5 0 12.5V7.5C0 2.5 2.5 0 7.5 0H16.5C21.5 0 24 2.5 24 7.5V12.5C24 17.5 21.5 18 21.5 18ZM21 17.557C21.8581 17.557 24 13.557 23 13.057C22.3869 12.7505 21.8801 13.7414 21.4646 14.554C21.2023 15.0668 20.9764 15.5086 20.783 15.5086C20.283 15.5086 20 16.0554 20 16.7568C20 17.4582 20.1419 17.557 21 17.557Z",
          fill: "white",
          variants: { closed: { opacity: 1 }, open: { opacity: 0 } },
          transition: { duration: 0.2 },
        }),
      ],
    }),
  gy = () =>
    ct("svg", {
      width: "27",
      height: "27",
      viewBox: "0 0 27 27",
      children: [
        V(lt, {
          variants: {
            closed: { opacity: 0, d: "M 7.5 14.5 L 19 14.5" },
            open: { opacity: 1, d: "M 7 7 L 20 20" },
          },
          transition: { duration: 0.2 },
        }),
        V(lt, {
          variants: {
            closed: { opacity: 0, d: "M 7.5 8.5 L 19 8.5" },
            open: { opacity: 1, d: "M 7 20 L 20 7" },
          },
          transition: { duration: 0.2 },
        }),
      ],
    }),
  yy = ({ isOpen: e, customIconUrl: t, iconVariant: n }) =>
    t
      ? e
        ? V(gy, {})
        : V(dy, {
            src: t,
            style: {
              borderRadius: "50%",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              width: "100%",
              height: "100%",
              maxHeight: 60,
              maxWidth: 60,
            },
          })
      : n === "filled"
        ? V(my, {})
        : V(py, {}),
  vy = ({
    isOpen: e,
    isDisabled: t,
    customIconUrl: n,
    iconVariant: r,
    style: i,
    toggle: s,
  }) =>
    V(bu, {
      className: "Breads-toggleButton",
      variant: "primary",
      p: 0,
      style: i,
      sx: {
        variant: "styles.WidgetToggle",
        ...(n
          ? {
              boxShadow: "rgba(0, 0, 0, 0.12) 0px 2px 8px",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
            }
          : {}),
      },
      disabled: t,
      onClick: s,
      "aria-label": `${e ? "Close" : "Open"} chat widget`,
      children: V(yy, { customIconUrl: n, iconVariant: r, isOpen: e }),
    }),
  Su = "%[a-f0-9]{2}",
  ua = new RegExp("(" + Su + ")|([^%]+?)", "gi"),
  fa = new RegExp("(" + Su + ")+", "gi");
function si(e, t) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {}
  if (e.length === 1) return e;
  t = t || 1;
  const n = e.slice(0, t),
    r = e.slice(t);
  return Array.prototype.concat.call([], si(n), si(r));
}
function _y(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    let t = e.match(ua) || [];
    for (let n = 1; n < t.length; n++)
      ((e = si(t, n).join("")), (t = e.match(ua) || []));
    return e;
  }
}
function by(e) {
  const t = { "%FE%FF": "��", "%FF%FE": "��" };
  let n = fa.exec(e);
  for (; n; ) {
    try {
      t[n[0]] = decodeURIComponent(n[0]);
    } catch {
      const i = _y(n[0]);
      i !== n[0] && (t[n[0]] = i);
    }
    n = fa.exec(e);
  }
  t["%C2"] = "�";
  const r = Object.keys(t);
  for (const i of r) e = e.replace(new RegExp(i, "g"), t[i]);
  return e;
}
function Sy(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Expected `encodedURI` to be of type `string`, got `" + typeof e + "`",
    );
  try {
    return decodeURIComponent(e);
  } catch {
    return by(e);
  }
}
function xy(e, t) {
  const n = {};
  if (Array.isArray(t))
    for (const r of t) {
      const i = Object.getOwnPropertyDescriptor(e, r);
      i != null && i.enumerable && Object.defineProperty(n, r, i);
    }
  else
    for (const r of Reflect.ownKeys(e)) {
      const i = Object.getOwnPropertyDescriptor(e, r);
      if (i.enumerable) {
        const s = e[r];
        t(r, s, e) && Object.defineProperty(n, r, i);
      }
    }
  return n;
}
function xu(e, t) {
  if (!(typeof e == "string" && typeof t == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "" || t === "") return [];
  const n = e.indexOf(t);
  return n === -1 ? [] : [e.slice(0, n), e.slice(n + t.length)];
}
const wy = (e) => e == null,
  Ty = (e) =>
    encodeURIComponent(e).replaceAll(
      /[!'()*]/g,
      (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`,
    ),
  oi = Symbol("encodeFragmentIdentifier");
function Cy(e) {
  switch (e.arrayFormat) {
    case "index":
      return (t) => (n, r) => {
        const i = n.length;
        return r === void 0 ||
          (e.skipNull && r === null) ||
          (e.skipEmptyString && r === "")
          ? n
          : r === null
            ? [...n, [J(t, e), "[", i, "]"].join("")]
            : [...n, [J(t, e), "[", J(i, e), "]=", J(r, e)].join("")];
      };
    case "bracket":
      return (t) => (n, r) =>
        r === void 0 ||
        (e.skipNull && r === null) ||
        (e.skipEmptyString && r === "")
          ? n
          : r === null
            ? [...n, [J(t, e), "[]"].join("")]
            : [...n, [J(t, e), "[]=", J(r, e)].join("")];
    case "colon-list-separator":
      return (t) => (n, r) =>
        r === void 0 ||
        (e.skipNull && r === null) ||
        (e.skipEmptyString && r === "")
          ? n
          : r === null
            ? [...n, [J(t, e), ":list="].join("")]
            : [...n, [J(t, e), ":list=", J(r, e)].join("")];
    case "comma":
    case "separator":
    case "bracket-separator": {
      const t = e.arrayFormat === "bracket-separator" ? "[]=" : "=";
      return (n) => (r, i) =>
        i === void 0 ||
        (e.skipNull && i === null) ||
        (e.skipEmptyString && i === "")
          ? r
          : ((i = i === null ? "" : i),
            r.length === 0
              ? [[J(n, e), t, J(i, e)].join("")]
              : [[r, J(i, e)].join(e.arrayFormatSeparator)]);
    }
    default:
      return (t) => (n, r) =>
        r === void 0 ||
        (e.skipNull && r === null) ||
        (e.skipEmptyString && r === "")
          ? n
          : r === null
            ? [...n, J(t, e)]
            : [...n, [J(t, e), "=", J(r, e)].join("")];
  }
}
function Ay(e) {
  let t;
  switch (e.arrayFormat) {
    case "index":
      return (n, r, i) => {
        if (((t = /\[(\d*)]$/.exec(n)), (n = n.replace(/\[\d*]$/, "")), !t)) {
          i[n] = r;
          return;
        }
        (i[n] === void 0 && (i[n] = {}), (i[n][t[1]] = r));
      };
    case "bracket":
      return (n, r, i) => {
        if (((t = /(\[])$/.exec(n)), (n = n.replace(/\[]$/, "")), !t)) {
          i[n] = r;
          return;
        }
        if (i[n] === void 0) {
          i[n] = [r];
          return;
        }
        i[n] = [...i[n], r];
      };
    case "colon-list-separator":
      return (n, r, i) => {
        if (((t = /(:list)$/.exec(n)), (n = n.replace(/:list$/, "")), !t)) {
          i[n] = r;
          return;
        }
        if (i[n] === void 0) {
          i[n] = [r];
          return;
        }
        i[n] = [...i[n], r];
      };
    case "comma":
    case "separator":
      return (n, r, i) => {
        const s = typeof r == "string" && r.includes(e.arrayFormatSeparator),
          o =
            typeof r == "string" &&
            !s &&
            je(r, e).includes(e.arrayFormatSeparator);
        r = o ? je(r, e) : r;
        const a =
          s || o
            ? r.split(e.arrayFormatSeparator).map((l) => je(l, e))
            : r === null
              ? r
              : je(r, e);
        i[n] = a;
      };
    case "bracket-separator":
      return (n, r, i) => {
        const s = /(\[])$/.test(n);
        if (((n = n.replace(/\[]$/, "")), !s)) {
          i[n] = r && je(r, e);
          return;
        }
        const o = r === null ? [] : je(r, e).split(e.arrayFormatSeparator);
        if (i[n] === void 0) {
          i[n] = o;
          return;
        }
        i[n] = [...i[n], ...o];
      };
    default:
      return (n, r, i) => {
        if (i[n] === void 0) {
          i[n] = r;
          return;
        }
        i[n] = [...[i[n]].flat(), r];
      };
  }
}
function wu(e) {
  if (typeof e != "string" || e.length !== 1)
    throw new TypeError("arrayFormatSeparator must be single character string");
}
function J(e, t) {
  return t.encode ? (t.strict ? Ty(e) : encodeURIComponent(e)) : e;
}
function je(e, t) {
  return t.decode ? Sy(e) : e;
}
function Tu(e) {
  return Array.isArray(e)
    ? e.sort()
    : typeof e == "object"
      ? Tu(Object.keys(e))
          .sort((t, n) => Number(t) - Number(n))
          .map((t) => e[t])
      : e;
}
function Cu(e) {
  const t = e.indexOf("#");
  return (t !== -1 && (e = e.slice(0, t)), e);
}
function Py(e) {
  let t = "";
  const n = e.indexOf("#");
  return (n !== -1 && (t = e.slice(n)), t);
}
function da(e, t, n) {
  return n === "string" && typeof e == "string"
    ? e
    : typeof n == "function" && typeof e == "string"
      ? n(e)
      : t.parseBooleans &&
          e !== null &&
          (e.toLowerCase() === "true" || e.toLowerCase() === "false")
        ? e.toLowerCase() === "true"
        : (n === "number" &&
              !Number.isNaN(Number(e)) &&
              typeof e == "string" &&
              e.trim() !== "") ||
            (t.parseNumbers &&
              !Number.isNaN(Number(e)) &&
              typeof e == "string" &&
              e.trim() !== "")
          ? Number(e)
          : e;
}
function us(e) {
  e = Cu(e);
  const t = e.indexOf("?");
  return t === -1 ? "" : e.slice(t + 1);
}
function fs(e, t) {
  ((t = {
    decode: !0,
    sort: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    parseNumbers: !1,
    parseBooleans: !1,
    types: Object.create(null),
    ...t,
  }),
    wu(t.arrayFormatSeparator));
  const n = Ay(t),
    r = Object.create(null);
  if (typeof e != "string" || ((e = e.trim().replace(/^[?#&]/, "")), !e))
    return r;
  for (const i of e.split("&")) {
    if (i === "") continue;
    const s = t.decode ? i.replaceAll("+", " ") : i;
    let [o, a] = xu(s, "=");
    (o === void 0 && (o = s),
      (a =
        a === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat)
            ? a
            : je(a, t)),
      n(je(o, t), a, r));
  }
  for (const [i, s] of Object.entries(r))
    if (typeof s == "object" && s !== null && t.types[i] !== "string")
      for (const [o, a] of Object.entries(s)) {
        const l = t.types[i] ? t.types[i].replace("[]", "") : void 0;
        s[o] = da(a, t, l);
      }
    else
      typeof s == "object" && s !== null && t.types[i] === "string"
        ? (r[i] = Object.values(s).join(t.arrayFormatSeparator))
        : (r[i] = da(s, t, t.types[i]));
  return t.sort === !1
    ? r
    : (t.sort === !0
        ? Object.keys(r).sort()
        : Object.keys(r).sort(t.sort)
      ).reduce((i, s) => {
        const o = r[s];
        return (
          (i[s] = o && typeof o == "object" && !Array.isArray(o) ? Tu(o) : o),
          i
        );
      }, Object.create(null));
}
function Au(e, t) {
  if (!e) return "";
  ((t = {
    encode: !0,
    strict: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    ...t,
  }),
    wu(t.arrayFormatSeparator));
  const n = (o) =>
      (t.skipNull && wy(e[o])) || (t.skipEmptyString && e[o] === ""),
    r = Cy(t),
    i = {};
  for (const [o, a] of Object.entries(e)) n(o) || (i[o] = a);
  const s = Object.keys(i);
  return (
    t.sort !== !1 && s.sort(t.sort),
    s
      .map((o) => {
        const a = e[o];
        return a === void 0
          ? ""
          : a === null
            ? J(o, t)
            : Array.isArray(a)
              ? a.length === 0 && t.arrayFormat === "bracket-separator"
                ? J(o, t) + "[]"
                : a.reduce(r(o), []).join("&")
              : J(o, t) + "=" + J(a, t);
      })
      .filter((o) => o.length > 0)
      .join("&")
  );
}
function Pu(e, t) {
  var i;
  t = { decode: !0, ...t };
  let [n, r] = xu(e, "#");
  return (
    n === void 0 && (n = e),
    {
      url:
        ((i = n == null ? void 0 : n.split("?")) == null ? void 0 : i[0]) ?? "",
      query: fs(us(e), t),
      ...(t && t.parseFragmentIdentifier && r
        ? { fragmentIdentifier: je(r, t) }
        : {}),
    }
  );
}
function Mu(e, t) {
  t = { encode: !0, strict: !0, [oi]: !0, ...t };
  const n = Cu(e.url).split("?")[0] || "",
    r = us(e.url),
    i = { ...fs(r, { sort: !1 }), ...e.query };
  let s = Au(i, t);
  s && (s = `?${s}`);
  let o = Py(e.url);
  if (typeof e.fragmentIdentifier == "string") {
    const a = new URL(n);
    ((a.hash = e.fragmentIdentifier),
      (o = t[oi] ? a.hash : `#${e.fragmentIdentifier}`));
  }
  return `${n}${s}${o}`;
}
function Eu(e, t, n) {
  n = { parseFragmentIdentifier: !0, [oi]: !1, ...n };
  const { url: r, query: i, fragmentIdentifier: s } = Pu(e, n);
  return Mu({ url: r, query: xy(i, t), fragmentIdentifier: s }, n);
}
function My(e, t, n) {
  const r = Array.isArray(t) ? (i) => !t.includes(i) : (i, s) => !t(i, s);
  return Eu(e, r, n);
}
const ha = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        exclude: My,
        extract: us,
        parse: fs,
        parseUrl: Pu,
        pick: Eu,
        stringify: Au,
        stringifyUrl: Mu,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ey = (e) => {
    const t = Array.prototype,
      n = Function.prototype,
      r = Object.prototype,
      i = r.toString,
      s = r.hasOwnProperty,
      o = e.console,
      a = e.navigator,
      l = e.document,
      c = e.opera,
      f = e.screen,
      u = a.userAgent,
      d = e.Intl,
      h = n.bind,
      p = t.forEach,
      m = t.indexOf,
      y = Array.isArray,
      g = t.slice,
      v = {},
      S = function () {},
      A = {},
      x =
        y ||
        function (b) {
          return i.call(b) === "[object Array]";
        };
    function E(b) {
      return b === Object(b) && !x(b);
    }
    function P(b) {
      try {
        return /^\s*\bfunction\b/.test(b);
      } catch {
        return !1;
      }
    }
    function R(b) {
      return i.call(b) == "[object String]";
    }
    function ee(b, _) {
      return b.indexOf(_) !== -1;
    }
    function Y(b) {
      return b === void 0;
    }
    function _e() {
      return (
        (Date.now =
          Date.now ||
          function () {
            return +new Date();
          }),
        Date.now()
      );
    }
    function Z(b, _, M) {
      if (b != null) {
        if (p && b.forEach === p) b.forEach(_, M);
        else if (b.length === +b.length) {
          for (var D = 0, I = b.length; D < I; D++)
            if (D in b && _.call(M, b[D], D, b) === v) return;
        } else
          for (var w in b)
            if (s.call(b, w) && _.call(M, b[w], w, b) === v) return;
      }
    }
    function $e(b) {
      return b.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }
    function vn(b, ..._) {
      return (
        Z(_, function (M) {
          for (let D in M) M[D] !== void 0 && (b[D] = M[D]);
        }),
        b
      );
    }
    function ds(b, _) {
      let M, D;
      if (h && b.bind === h) return ((M = g.call(arguments, 1)), h.apply(b, M));
      if (!P(b)) throw new TypeError();
      return (
        (M = g.call(arguments, 2)),
        (D = function () {
          if (!(this instanceof D))
            return b.apply(_, M.concat(g.call(arguments)));
          let I = {};
          I.prototype = b.prototype;
          let w = new I();
          I.prototype = null;
          let L = b.apply(w, M.concat(g.call(arguments)));
          return Object(L) === L ? L : w;
        }),
        D
      );
    }
    function _n(b, _) {
      let M;
      return (
        typeof b == "string"
          ? (M = b.slice(0, _))
          : x(b)
            ? ((M = []),
              Z(b, function (D) {
                M.push(_n(D, _));
              }))
            : E(b)
              ? ((M = {}),
                Z(b, function (D, I) {
                  M[I] = _n(D, _);
                }))
              : (M = b),
        M
      );
    }
    function ne(b) {
      let _ = {};
      return (
        Z(b, function (M, D) {
          R(M) && M.length > 0 && (_[D] = M);
        }),
        _
      );
    }
    function Te(b, _) {
      let M,
        D,
        I = [];
      return (
        Y(_) && (_ = "&"),
        Z(b, function (w, L) {
          ((M = encodeURIComponent(w.toString())),
            (D = encodeURIComponent(L)),
            (I[I.length] = D + "=" + M));
        }),
        I.join(_)
      );
    }
    const It = (function () {
        return function (b) {
          var _ = b,
            M = function (I) {
              var w =
                  /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                L = {
                  "\b": "\\b",
                  "	": "\\t",
                  "\n": "\\n",
                  "\f": "\\f",
                  "\r": "\\r",
                  '"': '\\"',
                  "\\": "\\\\",
                };
              return (
                (w.lastIndex = 0),
                w.test(I)
                  ? '"' +
                    I.replace(w, function (ue) {
                      var q = L[ue];
                      return typeof q == "string"
                        ? q
                        : "\\u" +
                            ("0000" + ue.charCodeAt(0).toString(16)).slice(-4);
                    }) +
                    '"'
                  : '"' + I + '"'
              );
            },
            D = function (I, w) {
              let L = "",
                ue = "    ",
                q = 0,
                be = "",
                re = "",
                dt = 0,
                he = L,
                F = [],
                k = w[I];
              switch (
                (k &&
                  typeof k == "object" &&
                  typeof k.toJSON == "function" &&
                  (k = k.toJSON(I)),
                typeof k)
              ) {
                case "string":
                  return M(k);
                case "number":
                  return isFinite(k) ? String(k) : "null";
                case "boolean":
                case "undefined":
                  return String(k);
                case "object":
                  if (!k) return "null";
                  if (((L += ue), (F = []), i.apply(k) === "[object Array]")) {
                    for (dt = k.length, q = 0; q < dt; q += 1)
                      F[q] = D(q, k) || "null";
                    return (
                      (re =
                        F.length === 0
                          ? "[]"
                          : L
                            ? `[
` +
                              L +
                              F.join(
                                `,
` + L,
                              ) +
                              `
` +
                              he +
                              "]"
                            : "[" + F.join(",") + "]"),
                      (L = he),
                      re
                    );
                  }
                  for (be in k)
                    s.call(k, be) &&
                      ((re = D(be, k)),
                      re && F.push(M(be) + (L ? ": " : ":") + re));
                  return (
                    (re =
                      F.length === 0
                        ? "{}"
                        : L
                          ? "{" + F.join(",") + he + "}"
                          : "{" + F.join(",") + "}"),
                    (L = he),
                    re
                  );
              }
            };
          return D("", { "": _ });
        };
      })(),
      Ft = (function () {
        let b,
          _,
          M = {
            '"': '"',
            "\\": "\\",
            "/": "/",
            b: "\b",
            f: "\f",
            n: `
`,
            r: "\r",
            t: "	",
          },
          D,
          I = function (F) {
            var k = new SyntaxError(F);
            throw ((k.at = b), (k.text = D), k);
          },
          w = function (F) {
            return (
              F && F !== _ && I("Expected '" + F + "' instead of '" + _ + "'"),
              (_ = D.charAt(b)),
              (b += 1),
              _
            );
          },
          L = function () {
            var F,
              k = "";
            for (_ === "-" && ((k = "-"), w("-")); _ >= "0" && _ <= "9"; )
              ((k += _), w());
            if (_ === ".") for (k += "."; w() && _ >= "0" && _ <= "9"; ) k += _;
            if (_ === "e" || _ === "E")
              for (
                k += _, w(), (_ === "-" || _ === "+") && ((k += _), w());
                _ >= "0" && _ <= "9";
              )
                ((k += _), w());
            if (((F = +k), !isFinite(F))) I("Bad number");
            else return F;
          },
          ue = function () {
            let F,
              k,
              bn = "",
              Sn;
            if (_ === '"')
              for (; w(); ) {
                if (_ === '"') return (w(), bn);
                if (_ === "\\")
                  if ((w(), _ === "u")) {
                    for (
                      Sn = 0, k = 0;
                      k < 4 && ((F = parseInt(w(), 16)), !!isFinite(F));
                      k += 1
                    )
                      Sn = Sn * 16 + F;
                    bn += String.fromCharCode(Sn);
                  } else if (typeof M[_] == "string") bn += M[_];
                  else break;
                else bn += _;
              }
            I("Bad string");
          },
          q = function () {
            for (; _ && _ <= " "; ) w();
          },
          be = function () {
            switch (_) {
              case "t":
                return (w("t"), w("r"), w("u"), w("e"), !0);
              case "f":
                return (w("f"), w("a"), w("l"), w("s"), w("e"), !1);
              case "n":
                return (w("n"), w("u"), w("l"), w("l"), null);
            }
            I('Unexpected "' + _ + '"');
          },
          re,
          dt = function () {
            var F = [];
            if (_ === "[") {
              if ((w("["), q(), _ === "]")) return (w("]"), F);
              for (; _; ) {
                if ((F.push(re()), q(), _ === "]")) return (w("]"), F);
                (w(","), q());
              }
            }
            I("Bad array");
          },
          he = function () {
            let F,
              k = {};
            if (_ === "{") {
              if ((w("{"), q(), _ === "}")) return (w("}"), k);
              for (; _; ) {
                if (
                  ((F = ue()),
                  q(),
                  w(":"),
                  Object.hasOwnProperty.call(k, F) &&
                    I('Duplicate key "' + F + '"'),
                  (k[F] = re()),
                  q(),
                  _ === "}")
                )
                  return (w("}"), k);
                (w(","), q());
              }
            }
            I("Bad object");
          };
        return (
          (re = function () {
            switch ((q(), _)) {
              case "{":
                return he();
              case "[":
                return dt();
              case '"':
                return ue();
              case "-":
                return L();
              default:
                return _ >= "0" && _ <= "9" ? L() : be();
            }
          }),
          function (F) {
            var k;
            return (
              (D = F),
              (b = 0),
              (_ = " "),
              (k = re()),
              q(),
              _ && I("Syntax error"),
              k
            );
          }
        );
      })();
    function hs(b) {
      b = (b + "")
        .replace(
          /\r\n/g,
          `
`,
        )
        .replace(
          /\r/g,
          `
`,
        );
      var _ = "",
        M,
        D,
        I = 0,
        w;
      for (M = D = 0, I = b.length, w = 0; w < I; w++) {
        let L = b.charCodeAt(w),
          ue = null;
        (L < 128
          ? D++
          : L > 127 && L < 2048
            ? (ue = String.fromCharCode((L >> 6) | 192, (L & 63) | 128))
            : (ue = String.fromCharCode(
                (L >> 12) | 224,
                ((L >> 6) & 63) | 128,
                (L & 63) | 128,
              )),
          ue !== null &&
            (D > M && (_ += b.substring(M, D)), (_ += ue), (M = D = w + 1)));
      }
      return (D > M && (_ += b.substring(M, b.length)), _);
    }
    function Du(b) {
      let _ =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        M,
        D,
        I,
        w,
        L,
        ue,
        q,
        be,
        re = 0,
        dt = 0,
        he = "",
        F = [];
      if (!b) return b;
      b = hs(b);
      do
        ((M = b.charCodeAt(re++)),
          (D = b.charCodeAt(re++)),
          (I = b.charCodeAt(re++)),
          (be = (M << 16) | (D << 8) | I),
          (w = (be >> 18) & 63),
          (L = (be >> 12) & 63),
          (ue = (be >> 6) & 63),
          (q = be & 63),
          (F[dt++] = _.charAt(w) + _.charAt(L) + _.charAt(ue) + _.charAt(q)));
      while (re < b.length);
      switch (((he = F.join("")), b.length % 3)) {
        case 1:
          he = he.slice(0, -2) + "==";
          break;
        case 2:
          he = he.slice(0, -1) + "=";
          break;
      }
      return he;
    }
    function Vu(b, _) {
      _ = _.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
      const M = "[\\?&]" + _ + "=([^&#]*)",
        I = new RegExp(M).exec(b);
      if (I === null || (I && typeof I[1] != "string" && I[1].length))
        return "";
      var w = I[1];
      try {
        w = decodeURIComponent(w);
      } catch {
        console.error("Skipping decoding for malformed query param: " + w);
      }
      return w.replace(/\+/g, " ");
    }
    return {
      ArrayProto: t,
      FuncProto: n,
      ObjProto: r,
      toString: i,
      hasOwnProperty: s,
      win: e,
      windowConsole: o,
      navigator: a,
      document: l,
      windowOpera: c,
      screen: f,
      userAgent: u,
      intl: d,
      nativeBind: h,
      nativeForEach: p,
      nativeIndexOf: m,
      nativeIsArray: y,
      slice: g,
      breaker: v,
      __NOOP: S,
      __NOOPTIONS: A,
      isFunction: P,
      isString: R,
      includes: ee,
      isUndefined: Y,
      timestamp: _e,
      each: Z,
      trim: $e,
      extend: vn,
      bind: ds,
      truncate: _n,
      stripEmptyProperties: ne,
      HTTPBuildQuery: Te,
      JSONEncode: It,
      JSONDecode: Ft,
      utf8Encode: hs,
      base64Encode: Du,
      getQueryParam: Vu,
    };
  };
function ht() {}
function Ry(e, t) {
  const n = (r) => {
    t(r);
  };
  return e.addEventListener
    ? (e.addEventListener("message", n),
      () => e.removeEventListener("message", n))
    : (e.attachEvent("onmessage", n), () => e.detachEvent("onmessage", n));
}
const ky = (e, t, n) => {
  if (e.addEventListener) {
    for (const r of t) e.addEventListener(r, n);
    return () => t.map((r) => e.removeEventListener(r, n));
  } else
    return (
      console.error("Custom events are not supported in your browser!"),
      ht
    );
};
function pa(e) {
  const {
      navigator: t,
      userAgent: n,
      windowOpera: r,
      intl: i,
      each: s,
      extend: o,
      includes: a,
      timestamp: l,
      stripEmptyProperties: c,
      getQueryParam: f,
    } = Ey(e),
    u = {
      campaignParams: function () {
        const d =
          "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");
        let h = "",
          p = {};
        return (
          s(d, function (m) {
            ((h = f(document.URL, m)), h.length && (p[m] = h));
          }),
          p
        );
      },
      searchEngine: function (d) {
        return d.search("https?://(.*)google.([^/?]*)") === 0
          ? "google"
          : d.search("https?://(.*)bing.com") === 0
            ? "bing"
            : d.search("https?://(.*)yahoo.com") === 0
              ? "yahoo"
              : d.search("https?://(.*)duckduckgo.com") === 0
                ? "duckduckgo"
                : null;
      },
      searchInfo: function (d) {
        let h = u.searchEngine(d),
          p = h != "yahoo" ? "q" : "p",
          m = {};
        if (h !== null) {
          m.$search_engine = h;
          var y = f(d, p);
          y.length && (m.ph_keyword = y);
        }
        return m;
      },
      browser: function (d, h, p) {
        return (
          (h = h || ""),
          p || a(d, " OPR/")
            ? a(d, "Mini")
              ? "Opera Mini"
              : "Opera"
            : /(BlackBerry|PlayBook|BB10)/i.test(d)
              ? "BlackBerry"
              : a(d, "IEMobile") || a(d, "WPDesktop")
                ? "Internet Explorer Mobile"
                : a(d, "SamsungBrowser/")
                  ? "Samsung Internet"
                  : a(d, "Edge") || a(d, "Edg/")
                    ? "Microsoft Edge"
                    : a(d, "FBIOS")
                      ? "Facebook Mobile"
                      : a(d, "Chrome")
                        ? "Chrome"
                        : a(d, "CriOS")
                          ? "Chrome iOS"
                          : a(d, "UCWEB") || a(d, "UCBrowser")
                            ? "UC Browser"
                            : a(d, "FxiOS")
                              ? "Firefox iOS"
                              : a(h, "Apple")
                                ? a(d, "Mobile")
                                  ? "Mobile Safari"
                                  : "Safari"
                                : a(d, "Android")
                                  ? "Android Mobile"
                                  : a(d, "Konqueror")
                                    ? "Konqueror"
                                    : a(d, "Firefox")
                                      ? "Firefox"
                                      : a(d, "MSIE") || a(d, "Trident/")
                                        ? "Internet Explorer"
                                        : a(d, "Gecko")
                                          ? "Mozilla"
                                          : ""
        );
      },
      browserVersion: function (d, h, p) {
        const m = u.browser(d, h, p),
          g = {
            "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
            "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
            Chrome: /Chrome\/(\d+(\.\d+)?)/,
            "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
            "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
            Safari: /Version\/(\d+(\.\d+)?)/,
            "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
            Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
            Firefox: /Firefox\/(\d+(\.\d+)?)/,
            "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
            Konqueror: /Konqueror:(\d+(\.\d+)?)/,
            BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
            "Android Mobile": /android\s(\d+(\.\d+)?)/,
            "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
            "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
            Mozilla: /rv:(\d+(\.\d+)?)/,
          }[m];
        if (g === void 0) return null;
        const v = d.match(g);
        return v ? parseFloat(v[v.length - 2]) : null;
      },
      os: function () {
        const d = n;
        return /Windows/i.test(d)
          ? /Phone/.test(d) || /WPDesktop/.test(d)
            ? "Windows Phone"
            : "Windows"
          : /(iPhone|iPad|iPod)/.test(d)
            ? "iOS"
            : /Android/.test(d)
              ? "Android"
              : /(BlackBerry|PlayBook|BB10)/i.test(d)
                ? "BlackBerry"
                : /Mac/i.test(d)
                  ? "Mac OS X"
                  : /Linux/.test(d)
                    ? "Linux"
                    : /CrOS/.test(d)
                      ? "Chrome OS"
                      : "";
      },
      device: function (d) {
        return /Windows Phone/i.test(d) || /WPDesktop/.test(d)
          ? "Windows Phone"
          : /iPad/.test(d)
            ? "iPad"
            : /iPod/.test(d)
              ? "iPod Touch"
              : /iPhone/.test(d)
                ? "iPhone"
                : /(BlackBerry|PlayBook|BB10)/i.test(d)
                  ? "BlackBerry"
                  : /Android/.test(d)
                    ? "Android"
                    : "";
      },
      referringDomain: function (d) {
        const h = d.split("/");
        return h.length >= 3 ? h[2] : "";
      },
      timezone: function (d) {
        try {
          return d.DateTimeFormat().resolvedOptions().timeZone;
        } catch {
          return null;
        }
      },
      properties: function () {
        var d;
        return o(
          c({
            os: u.os(),
            browser: u.browser(n, t.vendor, r),
            referrer: document.referrer,
            referring_domain: u.referringDomain(document.referrer),
            device: u.device(n),
            time_zone: u.timezone(i),
          }),
          {
            current_url: e.location.href,
            host: e.location.host,
            pathname: e.location.pathname,
            browser_version:
              (d = u.browserVersion(n, t.vendor, r)) == null
                ? void 0
                : d.toString(),
            screen_height: screen.height,
            screen_width: screen.width,
            lib: "web",
            insert_id:
              Math.random().toString(36).substring(2, 10) +
              Math.random().toString(36).substring(2, 10),
            time: l() / 1e3,
          },
        );
      },
    };
  return u.properties();
}
function zn(e) {
  "@babel/helpers - typeof";
  return (
    (zn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    zn(e)
  );
}
var Dy = /^\s+/,
  Vy = /\s+$/;
function T(e, t) {
  if (((e = e || ""), (t = t || {}), e instanceof T)) return e;
  if (!(this instanceof T)) return new T(e, t);
  var n = Oy(e);
  ((this._originalInput = e),
    (this._r = n.r),
    (this._g = n.g),
    (this._b = n.b),
    (this._a = n.a),
    (this._roundA = Math.round(100 * this._a) / 100),
    (this._format = t.format || n.format),
    (this._gradientType = t.gradientType),
    this._r < 1 && (this._r = Math.round(this._r)),
    this._g < 1 && (this._g = Math.round(this._g)),
    this._b < 1 && (this._b = Math.round(this._b)),
    (this._ok = n.ok));
}
T.prototype = {
  isDark: function () {
    return this.getBrightness() < 128;
  },
  isLight: function () {
    return !this.isDark();
  },
  isValid: function () {
    return this._ok;
  },
  getOriginalInput: function () {
    return this._originalInput;
  },
  getFormat: function () {
    return this._format;
  },
  getAlpha: function () {
    return this._a;
  },
  getBrightness: function () {
    var t = this.toRgb();
    return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
  },
  getLuminance: function () {
    var t = this.toRgb(),
      n,
      r,
      i,
      s,
      o,
      a;
    return (
      (n = t.r / 255),
      (r = t.g / 255),
      (i = t.b / 255),
      n <= 0.03928 ? (s = n / 12.92) : (s = Math.pow((n + 0.055) / 1.055, 2.4)),
      r <= 0.03928 ? (o = r / 12.92) : (o = Math.pow((r + 0.055) / 1.055, 2.4)),
      i <= 0.03928 ? (a = i / 12.92) : (a = Math.pow((i + 0.055) / 1.055, 2.4)),
      0.2126 * s + 0.7152 * o + 0.0722 * a
    );
  },
  setAlpha: function (t) {
    return (
      (this._a = Ru(t)),
      (this._roundA = Math.round(100 * this._a) / 100),
      this
    );
  },
  toHsv: function () {
    var t = ga(this._r, this._g, this._b);
    return { h: t.h * 360, s: t.s, v: t.v, a: this._a };
  },
  toHsvString: function () {
    var t = ga(this._r, this._g, this._b),
      n = Math.round(t.h * 360),
      r = Math.round(t.s * 100),
      i = Math.round(t.v * 100);
    return this._a == 1
      ? "hsv(" + n + ", " + r + "%, " + i + "%)"
      : "hsva(" + n + ", " + r + "%, " + i + "%, " + this._roundA + ")";
  },
  toHsl: function () {
    var t = ma(this._r, this._g, this._b);
    return { h: t.h * 360, s: t.s, l: t.l, a: this._a };
  },
  toHslString: function () {
    var t = ma(this._r, this._g, this._b),
      n = Math.round(t.h * 360),
      r = Math.round(t.s * 100),
      i = Math.round(t.l * 100);
    return this._a == 1
      ? "hsl(" + n + ", " + r + "%, " + i + "%)"
      : "hsla(" + n + ", " + r + "%, " + i + "%, " + this._roundA + ")";
  },
  toHex: function (t) {
    return ya(this._r, this._g, this._b, t);
  },
  toHexString: function (t) {
    return "#" + this.toHex(t);
  },
  toHex8: function (t) {
    return By(this._r, this._g, this._b, this._a, t);
  },
  toHex8String: function (t) {
    return "#" + this.toHex8(t);
  },
  toRgb: function () {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a,
    };
  },
  toRgbString: function () {
    return this._a == 1
      ? "rgb(" +
          Math.round(this._r) +
          ", " +
          Math.round(this._g) +
          ", " +
          Math.round(this._b) +
          ")"
      : "rgba(" +
          Math.round(this._r) +
          ", " +
          Math.round(this._g) +
          ", " +
          Math.round(this._b) +
          ", " +
          this._roundA +
          ")";
  },
  toPercentageRgb: function () {
    return {
      r: Math.round(W(this._r, 255) * 100) + "%",
      g: Math.round(W(this._g, 255) * 100) + "%",
      b: Math.round(W(this._b, 255) * 100) + "%",
      a: this._a,
    };
  },
  toPercentageRgbString: function () {
    return this._a == 1
      ? "rgb(" +
          Math.round(W(this._r, 255) * 100) +
          "%, " +
          Math.round(W(this._g, 255) * 100) +
          "%, " +
          Math.round(W(this._b, 255) * 100) +
          "%)"
      : "rgba(" +
          Math.round(W(this._r, 255) * 100) +
          "%, " +
          Math.round(W(this._g, 255) * 100) +
          "%, " +
          Math.round(W(this._b, 255) * 100) +
          "%, " +
          this._roundA +
          ")";
  },
  toName: function () {
    return this._a === 0
      ? "transparent"
      : this._a < 1
        ? !1
        : Yy[ya(this._r, this._g, this._b, !0)] || !1;
  },
  toFilter: function (t) {
    var n = "#" + va(this._r, this._g, this._b, this._a),
      r = n,
      i = this._gradientType ? "GradientType = 1, " : "";
    if (t) {
      var s = T(t);
      r = "#" + va(s._r, s._g, s._b, s._a);
    }
    return (
      "progid:DXImageTransform.Microsoft.gradient(" +
      i +
      "startColorstr=" +
      n +
      ",endColorstr=" +
      r +
      ")"
    );
  },
  toString: function (t) {
    var n = !!t;
    t = t || this._format;
    var r = !1,
      i = this._a < 1 && this._a >= 0,
      s =
        !n &&
        i &&
        (t === "hex" ||
          t === "hex6" ||
          t === "hex3" ||
          t === "hex4" ||
          t === "hex8" ||
          t === "name");
    return s
      ? t === "name" && this._a === 0
        ? this.toName()
        : this.toRgbString()
      : (t === "rgb" && (r = this.toRgbString()),
        t === "prgb" && (r = this.toPercentageRgbString()),
        (t === "hex" || t === "hex6") && (r = this.toHexString()),
        t === "hex3" && (r = this.toHexString(!0)),
        t === "hex4" && (r = this.toHex8String(!0)),
        t === "hex8" && (r = this.toHex8String()),
        t === "name" && (r = this.toName()),
        t === "hsl" && (r = this.toHslString()),
        t === "hsv" && (r = this.toHsvString()),
        r || this.toHexString());
  },
  clone: function () {
    return T(this.toString());
  },
  _applyModification: function (t, n) {
    var r = t.apply(null, [this].concat([].slice.call(n)));
    return (
      (this._r = r._r),
      (this._g = r._g),
      (this._b = r._b),
      this.setAlpha(r._a),
      this
    );
  },
  lighten: function () {
    return this._applyModification(Uy, arguments);
  },
  brighten: function () {
    return this._applyModification(Wy, arguments);
  },
  darken: function () {
    return this._applyModification(Hy, arguments);
  },
  desaturate: function () {
    return this._applyModification($y, arguments);
  },
  saturate: function () {
    return this._applyModification(Ny, arguments);
  },
  greyscale: function () {
    return this._applyModification(jy, arguments);
  },
  spin: function () {
    return this._applyModification(zy, arguments);
  },
  _applyCombination: function (t, n) {
    return t.apply(null, [this].concat([].slice.call(n)));
  },
  analogous: function () {
    return this._applyCombination(qy, arguments);
  },
  complement: function () {
    return this._applyCombination(Ky, arguments);
  },
  monochromatic: function () {
    return this._applyCombination(Xy, arguments);
  },
  splitcomplement: function () {
    return this._applyCombination(Gy, arguments);
  },
  triad: function () {
    return this._applyCombination(_a, [3]);
  },
  tetrad: function () {
    return this._applyCombination(_a, [4]);
  },
};
T.fromRatio = function (e, t) {
  if (zn(e) == "object") {
    var n = {};
    for (var r in e)
      e.hasOwnProperty(r) && (r === "a" ? (n[r] = e[r]) : (n[r] = Ut(e[r])));
    e = n;
  }
  return T(e, t);
};
function Oy(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    r = null,
    i = null,
    s = null,
    o = !1,
    a = !1;
  return (
    typeof e == "string" && (e = e0(e)),
    zn(e) == "object" &&
      (Ne(e.r) && Ne(e.g) && Ne(e.b)
        ? ((t = Iy(e.r, e.g, e.b)),
          (o = !0),
          (a = String(e.r).substr(-1) === "%" ? "prgb" : "rgb"))
        : Ne(e.h) && Ne(e.s) && Ne(e.v)
          ? ((r = Ut(e.s)),
            (i = Ut(e.v)),
            (t = Ly(e.h, r, i)),
            (o = !0),
            (a = "hsv"))
          : Ne(e.h) &&
            Ne(e.s) &&
            Ne(e.l) &&
            ((r = Ut(e.s)),
            (s = Ut(e.l)),
            (t = Fy(e.h, r, s)),
            (o = !0),
            (a = "hsl")),
      e.hasOwnProperty("a") && (n = e.a)),
    (n = Ru(n)),
    {
      ok: o,
      format: e.format || a,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: n,
    }
  );
}
function Iy(e, t, n) {
  return { r: W(e, 255) * 255, g: W(t, 255) * 255, b: W(n, 255) * 255 };
}
function ma(e, t, n) {
  ((e = W(e, 255)), (t = W(t, 255)), (n = W(n, 255)));
  var r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    s,
    o,
    a = (r + i) / 2;
  if (r == i) s = o = 0;
  else {
    var l = r - i;
    switch (((o = a > 0.5 ? l / (2 - r - i) : l / (r + i)), r)) {
      case e:
        s = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        s = (n - e) / l + 2;
        break;
      case n:
        s = (e - t) / l + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: o, l: a };
}
function Fy(e, t, n) {
  var r, i, s;
  ((e = W(e, 360)), (t = W(t, 100)), (n = W(n, 100)));
  function o(c, f, u) {
    return (
      u < 0 && (u += 1),
      u > 1 && (u -= 1),
      u < 1 / 6
        ? c + (f - c) * 6 * u
        : u < 1 / 2
          ? f
          : u < 2 / 3
            ? c + (f - c) * (2 / 3 - u) * 6
            : c
    );
  }
  if (t === 0) r = i = s = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((r = o(l, a, e + 1 / 3)), (i = o(l, a, e)), (s = o(l, a, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: s * 255 };
}
function ga(e, t, n) {
  ((e = W(e, 255)), (t = W(t, 255)), (n = W(n, 255)));
  var r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    s,
    o,
    a = r,
    l = r - i;
  if (((o = r === 0 ? 0 : l / r), r == i)) s = 0;
  else {
    switch (r) {
      case e:
        s = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        s = (n - e) / l + 2;
        break;
      case n:
        s = (e - t) / l + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: o, v: a };
}
function Ly(e, t, n) {
  ((e = W(e, 360) * 6), (t = W(t, 100)), (n = W(n, 100)));
  var r = Math.floor(e),
    i = e - r,
    s = n * (1 - t),
    o = n * (1 - i * t),
    a = n * (1 - (1 - i) * t),
    l = r % 6,
    c = [n, o, s, s, a, n][l],
    f = [a, n, n, o, s, s][l],
    u = [s, s, a, n, n, o][l];
  return { r: c * 255, g: f * 255, b: u * 255 };
}
function ya(e, t, n, r) {
  var i = [
    Pe(Math.round(e).toString(16)),
    Pe(Math.round(t).toString(16)),
    Pe(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) == i[0].charAt(1) &&
    i[1].charAt(0) == i[1].charAt(1) &&
    i[2].charAt(0) == i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join("");
}
function By(e, t, n, r, i) {
  var s = [
    Pe(Math.round(e).toString(16)),
    Pe(Math.round(t).toString(16)),
    Pe(Math.round(n).toString(16)),
    Pe(ku(r)),
  ];
  return i &&
    s[0].charAt(0) == s[0].charAt(1) &&
    s[1].charAt(0) == s[1].charAt(1) &&
    s[2].charAt(0) == s[2].charAt(1) &&
    s[3].charAt(0) == s[3].charAt(1)
    ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0)
    : s.join("");
}
function va(e, t, n, r) {
  var i = [
    Pe(ku(r)),
    Pe(Math.round(e).toString(16)),
    Pe(Math.round(t).toString(16)),
    Pe(Math.round(n).toString(16)),
  ];
  return i.join("");
}
T.equals = function (e, t) {
  return !e || !t ? !1 : T(e).toRgbString() == T(t).toRgbString();
};
T.random = function () {
  return T.fromRatio({ r: Math.random(), g: Math.random(), b: Math.random() });
};
function $y(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = T(e).toHsl();
  return ((n.s -= t / 100), (n.s = gr(n.s)), T(n));
}
function Ny(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = T(e).toHsl();
  return ((n.s += t / 100), (n.s = gr(n.s)), T(n));
}
function jy(e) {
  return T(e).desaturate(100);
}
function Uy(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = T(e).toHsl();
  return ((n.l += t / 100), (n.l = gr(n.l)), T(n));
}
function Wy(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = T(e).toRgb();
  return (
    (n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100))))),
    (n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100))))),
    (n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100))))),
    T(n)
  );
}
function Hy(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = T(e).toHsl();
  return ((n.l -= t / 100), (n.l = gr(n.l)), T(n));
}
function zy(e, t) {
  var n = T(e).toHsl(),
    r = (n.h + t) % 360;
  return ((n.h = r < 0 ? 360 + r : r), T(n));
}
function Ky(e) {
  var t = T(e).toHsl();
  return ((t.h = (t.h + 180) % 360), T(t));
}
function _a(e, t) {
  if (isNaN(t) || t <= 0)
    throw new Error("Argument to polyad must be a positive number");
  for (var n = T(e).toHsl(), r = [T(e)], i = 360 / t, s = 1; s < t; s++)
    r.push(T({ h: (n.h + s * i) % 360, s: n.s, l: n.l }));
  return r;
}
function Gy(e) {
  var t = T(e).toHsl(),
    n = t.h;
  return [
    T(e),
    T({ h: (n + 72) % 360, s: t.s, l: t.l }),
    T({ h: (n + 216) % 360, s: t.s, l: t.l }),
  ];
}
function qy(e, t, n) {
  ((t = t || 6), (n = n || 30));
  var r = T(e).toHsl(),
    i = 360 / n,
    s = [T(e)];
  for (r.h = (r.h - ((i * t) >> 1) + 720) % 360; --t; )
    ((r.h = (r.h + i) % 360), s.push(T(r)));
  return s;
}
function Xy(e, t) {
  t = t || 6;
  for (
    var n = T(e).toHsv(), r = n.h, i = n.s, s = n.v, o = [], a = 1 / t;
    t--;
  )
    (o.push(T({ h: r, s: i, v: s })), (s = (s + a) % 1));
  return o;
}
T.mix = function (e, t, n) {
  n = n === 0 ? 0 : n || 50;
  var r = T(e).toRgb(),
    i = T(t).toRgb(),
    s = n / 100,
    o = {
      r: (i.r - r.r) * s + r.r,
      g: (i.g - r.g) * s + r.g,
      b: (i.b - r.b) * s + r.b,
      a: (i.a - r.a) * s + r.a,
    };
  return T(o);
};
T.readability = function (e, t) {
  var n = T(e),
    r = T(t);
  return (
    (Math.max(n.getLuminance(), r.getLuminance()) + 0.05) /
    (Math.min(n.getLuminance(), r.getLuminance()) + 0.05)
  );
};
T.isReadable = function (e, t, n) {
  var r = T.readability(e, t),
    i,
    s;
  switch (((s = !1), (i = t0(n)), i.level + i.size)) {
    case "AAsmall":
    case "AAAlarge":
      s = r >= 4.5;
      break;
    case "AAlarge":
      s = r >= 3;
      break;
    case "AAAsmall":
      s = r >= 7;
      break;
  }
  return s;
};
T.mostReadable = function (e, t, n) {
  var r = null,
    i = 0,
    s,
    o,
    a,
    l;
  ((n = n || {}), (o = n.includeFallbackColors), (a = n.level), (l = n.size));
  for (var c = 0; c < t.length; c++)
    ((s = T.readability(e, t[c])), s > i && ((i = s), (r = T(t[c]))));
  return T.isReadable(e, r, { level: a, size: l }) || !o
    ? r
    : ((n.includeFallbackColors = !1), T.mostReadable(e, ["#fff", "#000"], n));
};
var ai = (T.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32",
  }),
  Yy = (T.hexNames = Zy(ai));
function Zy(e) {
  var t = {};
  for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
  return t;
}
function Ru(e) {
  return ((e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e);
}
function W(e, t) {
  Jy(e) && (e = "100%");
  var n = Qy(e);
  return (
    (e = Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(e * t, 10) / 100),
    Math.abs(e - t) < 1e-6 ? 1 : (e % t) / parseFloat(t)
  );
}
function gr(e) {
  return Math.min(1, Math.max(0, e));
}
function pe(e) {
  return parseInt(e, 16);
}
function Jy(e) {
  return typeof e == "string" && e.indexOf(".") != -1 && parseFloat(e) === 1;
}
function Qy(e) {
  return typeof e == "string" && e.indexOf("%") != -1;
}
function Pe(e) {
  return e.length == 1 ? "0" + e : "" + e;
}
function Ut(e) {
  return (e <= 1 && (e = e * 100 + "%"), e);
}
function ku(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function ba(e) {
  return pe(e) / 255;
}
var Ce = (function () {
  var e = "[-\\+]?\\d+%?",
    t = "[-\\+]?\\d*\\.\\d+%?",
    n = "(?:" + t + ")|(?:" + e + ")",
    r = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?",
    i =
      "[\\s|\\(]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(n),
    rgb: new RegExp("rgb" + r),
    rgba: new RegExp("rgba" + i),
    hsl: new RegExp("hsl" + r),
    hsla: new RegExp("hsla" + i),
    hsv: new RegExp("hsv" + r),
    hsva: new RegExp("hsva" + i),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
})();
function Ne(e) {
  return !!Ce.CSS_UNIT.exec(e);
}
function e0(e) {
  e = e.replace(Dy, "").replace(Vy, "").toLowerCase();
  var t = !1;
  if (ai[e]) ((e = ai[e]), (t = !0));
  else if (e == "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n;
  return (n = Ce.rgb.exec(e))
    ? { r: n[1], g: n[2], b: n[3] }
    : (n = Ce.rgba.exec(e))
      ? { r: n[1], g: n[2], b: n[3], a: n[4] }
      : (n = Ce.hsl.exec(e))
        ? { h: n[1], s: n[2], l: n[3] }
        : (n = Ce.hsla.exec(e))
          ? { h: n[1], s: n[2], l: n[3], a: n[4] }
          : (n = Ce.hsv.exec(e))
            ? { h: n[1], s: n[2], v: n[3] }
            : (n = Ce.hsva.exec(e))
              ? { h: n[1], s: n[2], v: n[3], a: n[4] }
              : (n = Ce.hex8.exec(e))
                ? {
                    r: pe(n[1]),
                    g: pe(n[2]),
                    b: pe(n[3]),
                    a: ba(n[4]),
                    format: t ? "name" : "hex8",
                  }
                : (n = Ce.hex6.exec(e))
                  ? {
                      r: pe(n[1]),
                      g: pe(n[2]),
                      b: pe(n[3]),
                      format: t ? "name" : "hex",
                    }
                  : (n = Ce.hex4.exec(e))
                    ? {
                        r: pe(n[1] + "" + n[1]),
                        g: pe(n[2] + "" + n[2]),
                        b: pe(n[3] + "" + n[3]),
                        a: ba(n[4] + "" + n[4]),
                        format: t ? "name" : "hex8",
                      }
                    : (n = Ce.hex3.exec(e))
                      ? {
                          r: pe(n[1] + "" + n[1]),
                          g: pe(n[2] + "" + n[2]),
                          b: pe(n[3] + "" + n[3]),
                          format: t ? "name" : "hex",
                        }
                      : !1;
}
function t0(e) {
  var t, n;
  return (
    (e = e || { level: "AA", size: "small" }),
    (t = (e.level || "AA").toUpperCase()),
    (n = (e.size || "small").toLowerCase()),
    t !== "AA" && t !== "AAA" && (t = "AA"),
    n !== "small" && n !== "large" && (n = "small"),
    { level: t, size: n }
  );
}
const n0 = {
    ChatWindowContainer: {
      margin: 0,
      height: "100%",
      width: "100%",
      minHeight: 320,
    },
    WidgetContainer: {
      margin: 0,
      zIndex: 2147483e3,
      position: "fixed",
      bottom: 0,
      background: "transparent",
      width: ["100%", 376],
      maxWidth: ["100%", "376px"],
      minHeight: 250,
      maxHeight: ["calc(100vh - 100px)", "580px"],
      height: "100%",
      borderRadius: ["8px 8px 0 0", "8px"],
      overflow: "hidden",
      notifications: {
        background: "transparent",
        margin: 0,
        zIndex: 2147483e3,
        position: "fixed",
        bottom: 80,
        right: 20,
        width: "auto",
        maxWidth: ["90%", "300px"],
        minHeight: 0,
        maxHeight: ["60%", "400px"],
        boxShadow: "none",
        height: 200,
        overflow: "hidden",
      },
    },
    WidgetIframe: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      maxHeight: "100vh",
      height: "calc(100% - 40px)",
      borderRadius: ["8px 8px 0 0", "8px"],
      overflow: "hidden",
    },
    CloseWidgetButtonContainer: {
      height: "40px",
      display: "flex",
      justifyContent: "right",
      marginRight: ["10px", 0],
    },
    WidgetToggleContainer: {
      position: "fixed",
      zIndex: 2147483003,
      bottom: "20px",
      right: "20px",
    },
    WidgetClose: {
      outline: "none !important",
      border: "none !important",
      userSelect: "none !important",
      cursor: "pointer",
      width: "30px",
      height: "30px",
      minHeight: "auto",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    WidgetToggle: {
      outline: "none !important",
      border: "none !important",
      userSelect: "none !important",
      cursor: "pointer",
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  r0 = (e) => {
    const { primary: t = "#1890ff" } = e,
      n = T(t),
      r = {
        primary: n.toString(),
        light: n.lighten().toString(),
        dark: n.darken().toString(),
      };
    return {
      useBodyStyles: !1,
      space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
      fonts: {
        body: '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;',
        heading:
          '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;',
        monospace: '"Roboto Mono", monospace',
      },
      fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
      fontWeights: { body: 400, heading: 600, bold: 600 },
      lineHeights: { body: 1.5, heading: 1.125 },
      colors: {
        text: "#141414",
        background: "#fff",
        primary: r.primary,
        secondary: "#722ed1",
        muted: "#f0f0f0",
        gray: "rgba(0, 0, 0, 0.45)",
        input: "rgba(0, 0, 0, 0.65)",
        offset: "rgba(255, 255, 255, 0.8)",
      },
      text: {
        default: { color: "text", fontSize: 1 },
        caps: { textTransform: "uppercase", letterSpacing: "0.2em" },
        heading: {
          fontFamily: "heading",
          fontWeight: "heading",
          lineHeight: "heading",
        },
      },
      buttons: {
        primary: {
          cursor: "pointer",
          outline: 0,
          boxShadow: "rgba(0, 0, 0, 0.08) 0 2px 4px",
          transition: "0.2s",
          "&:hover": {
            background: r.light,
            borderColor: r.light,
            boxShadow: "rgba(0, 0, 0, 0.12) 0px 2px 8px",
          },
          "&:active": { background: r.dark, borderColor: r.dark },
        },
      },
      styles: {
        root: {
          fontFamily: "body",
          lineHeight: "body",
          fontWeight: "body",
          fontSize: 1,
        },
        h1: {
          color: "text",
          fontFamily: "heading",
          lineHeight: "heading",
          fontWeight: "heading",
          fontSize: 5,
        },
        h2: {
          color: "text",
          fontFamily: "heading",
          lineHeight: "heading",
          fontWeight: "heading",
          fontSize: 4,
        },
        h3: {
          color: "text",
          fontFamily: "heading",
          lineHeight: "heading",
          fontWeight: "heading",
          fontSize: 3,
        },
        h4: {
          color: "text",
          fontFamily: "heading",
          lineHeight: "heading",
          fontWeight: "heading",
          fontSize: 2,
        },
        h5: {
          color: "text",
          fontFamily: "heading",
          lineHeight: "heading",
          fontWeight: "heading",
          fontSize: 1,
        },
        h6: {
          color: "text",
          fontFamily: "heading",
          lineHeight: "heading",
          fontWeight: "heading",
          fontSize: 0,
        },
        p: {
          color: "text",
          fontFamily: "body",
          fontWeight: "body",
          lineHeight: "body",
        },
        a: { color: "primary" },
        pre: {
          fontFamily: "monospace",
          overflowX: "auto",
          code: { color: "inherit" },
        },
        code: { fontFamily: "monospace", fontSize: "inherit" },
        table: { width: "100%", borderCollapse: "separate", borderSpacing: 0 },
        th: { textAlign: "left", borderBottomStyle: "solid" },
        td: { textAlign: "left", borderBottomStyle: "solid" },
        img: { maxWidth: "100%" },
        textarea: {
          transparent: {
            border: "none",
            boxShadow: "none",
            resize: "none",
            outline: 0,
            "&:hover": {
              border: "none",
              boxShadow: "none",
              resize: "none",
              outline: 0,
            },
            "&:active": {
              border: "none",
              boxShadow: "none",
              resize: "none",
              outline: 0,
            },
            "&:focus": {
              border: "none",
              boxShadow: "none",
              resize: "none",
              outline: 0,
            },
          },
        },
        ...n0,
      },
    };
  },
  Kn = "__BREADS__",
  an = () => ({
    _db: {},
    getItem(e) {
      return this._db[e] || null;
    },
    setItem(e, t) {
      this._db[e] = t;
    },
    removeItem(e) {
      delete this._db[e];
    },
    get(e) {
      return this._db[e] || null;
    },
    set(e, t) {
      this._db[e] = t;
    },
    remove(e) {
      delete this._db[e];
    },
  }),
  i0 = (e) => {
    try {
      const t = e && e.localStorage;
      return {
        ...t,
        get: (n) => {
          const r = t.getItem(`${Kn}${n}`);
          if (!r) return null;
          try {
            return JSON.parse(r);
          } catch {
            return r;
          }
        },
        set: (n, r) => {
          t.setItem(`${Kn}${n}`, JSON.stringify(r));
        },
        remove: (n) => {
          t.removeItem(n);
        },
      };
    } catch {
      return an();
    }
  },
  s0 = (e) => {
    try {
      const t = e && e.sessionStorage;
      return {
        ...t,
        get: (n) => {
          const r = t.getItem(`${Kn}${n}`);
          if (!r) return null;
          try {
            return JSON.parse(r);
          } catch {
            return r;
          }
        },
        set: (n, r) => {
          t.setItem(`${Kn}${n}`, JSON.stringify(r));
        },
        remove: (n) => {
          t.removeItem(n);
        },
      };
    } catch {
      return an();
    }
  },
  o0 = () => {
    try {
      throw new Error("Cookie storage has not been implemented!");
    } catch {
      return an();
    }
  },
  Sa = (e, t = "local") => {
    try {
      switch (t) {
        case "local":
          return i0(e);
        case "session":
          return s0(e);
        case "cookie":
          return o0();
        case "memory":
        default:
          return an();
      }
    } catch {
      return an();
    }
  };
function a0(e, t = {}) {
  const { defaultType: n = "local", openStateType: r = "session" } = t,
    i = Sa(e, n),
    s = Sa(e, r);
  return {
    getCustomerId: () => i.get("__CUSTOMER_ID__"),
    setCustomerId: (o) => i.set("__CUSTOMER_ID__", o),
    removeCustomerId: () => i.remove("__CUSTOMER_ID__"),
    getOpenState: () => s.get(":open"),
    setOpenState: (o) => s.set(":open", o),
    clearOpenState: () => s.remove(":open"),
    getPopupSeen: () => s.get(":pop_up_seen"),
    setPopupSeen: (o) => s.set(":pop_up_seen", o),
    clearPopupSeen: () => s.remove(":pop_up_seen"),
  };
}
class xa {
  constructor(t) {
    this.debugModeEnabled = !!t;
  }
  debug(...t) {
    this.debugModeEnabled && console.debug("[Breads]", ...t);
  }
  log(...t) {
    this.debugModeEnabled && console.log("[Breads]", ...t);
  }
  info(...t) {
    console.info("[Breads]", ...t);
  }
  warn(...t) {
    console.warn("[Breads]", ...t);
  }
  error(...t) {
    console.error("[Breads]", ...t);
  }
}
const l0 = "https://chat.conductify.ai/embed";
class c0 extends kt.Component {
  constructor(t) {
    (super(t),
      (this.subscriptions = []),
      (this.logger = new xa()),
      (this.EVENTS = [
        "breads:open",
        "breads:close",
        "breads:toggle",
        "breads:identify",
        "breads:customer:set",
        "storytime:customer:set",
      ]),
      (this.shouldUpdateCustomer = (n, r) => {
        if (n) {
          if (n && !r) return !0;
        } else return !1;
        const { metadata: i = {}, ...s } = n || {},
          { metadata: o = {}, ...a } = r || {},
          l = Object.keys(s).every((f) => s[f] === a[f]),
          c = Object.keys(i).every((f) => i[f] === o[f]);
        return !(l && c);
      }),
      (this.getDefaultTitle = async (n) => {
        const { title: r, setDefaultTitle: i } = this.props;
        return i && typeof i == "function" ? i(n) : r || n.title;
      }),
      (this.getDefaultSubtitle = async (n) => {
        const { subtitle: r, setDefaultSubtitle: i } = this.props;
        return i && typeof i == "function" ? i(n) : r || n.subtitle;
      }),
      (this.getDefaultGreeting = async (n) => {
        const { greeting: r, setDefaultGreeting: i } = this.props;
        return i && typeof i == "function" ? i(n) : r || n.greeting;
      }),
      (this.setIframeRef = (n) => {
        this.iframeRef = n;
      }),
      (this.getIframeUrl = () => this.props.iframeUrlOverride || l0),
      (this.handleConfigUpdated = (n) => {
        (this.setState({ config: { ...this.state.config, ...n } }),
          this.send("config:update", n));
      }),
      (this.handleSetCustomerId = (n) => {
        const r = this.storage.getCustomerId(),
          i = n || r;
        (this.logger.debug("Setting customer ID:", i),
          this.setState({ config: { ...this.state.config, customerId: i } }),
          this.send("customer:set:id", i));
      }),
      (this.handleCustomerIdUpdated = (n) => {
        const r = this.storage.getCustomerId(),
          i = n || r,
          s = { ...this.state.config, customerId: i };
        (this.setState({
          config: s,
          query: ha.stringify(s, { skipEmptyString: !0, skipNull: !0 }),
        }),
          this.logger.debug("Updated customer ID:", i));
      }),
      (this.fetchWidgetSettings = async () => ({})),
      (this.updateWidgetSettingsMetadata = async () => {}),
      (this.hasValidPayloadIdentity = (n) => {
        const r = n && n.ts,
          { config: i = {} } = this.state;
        return !r || i.ts === r;
      }),
      (this.customEventHandlers = (n) => {
        if (!n || !n.type) return null;
        const { type: r, detail: i } = n;
        switch (r) {
          case "breads:open":
            return this.handleOpenWidget();
          case "breads:close":
            return this.handleCloseWidget();
          case "breads:toggle":
            return this.handleToggleOpen();
          case "breads:customer:set":
            return this.handleSetCustomerId(i);
          case "storytime:customer:set":
            return this.handleCustomerIdUpdated(i);
          default:
            return null;
        }
      }),
      (this.postMessageHandlers = (n) => {
        this.logger.debug("Handling in parent:", n.data);
        const r = this.getIframeUrl(),
          { origin: i } = new URL(r);
        if (n.origin !== i) return null;
        const { event: s, payload: o = {} } = n.data;
        if (!this.hasValidPayloadIdentity(o))
          return (
            this.logger.warn(
              "Payload identifer from iframe does not match parent — halting message handlers.",
            ),
            null
          );
        switch (s) {
          case "chat:loaded":
            return this.handleChatLoaded();
          case "customer:created":
          case "customer:updated":
            return this.handleCacheCustomerId(o);
          case "conversation:join":
            return this.sendCustomerUpdate(o);
          case "message:received":
            return this.handleMessageReceived(o);
          case "message:sent":
            return this.handleMessageSent(o);
          case "messages:unseen":
            return this.handleUnseenMessages(o);
          case "messages:seen":
            return this.handleMessagesSeen();
          case "breads:open":
          case "breads:close":
            return this.handleToggleOpen();
          default:
            return null;
        }
      }),
      (this.send = (n, r) => {
        this.logger.debug("Sending from parent:", { event: n, payload: r });
        const i = this.iframeRef;
        if (!i)
          throw new Error(
            `Attempted to send event ${n} with payload ${JSON.stringify(r)} before iframeRef was ready`,
          );
        i.contentWindow.postMessage(
          { event: n, payload: r },
          this.getIframeUrl(),
        );
      }),
      (this.handleMessageReceived = (n) => {
        const { onMessageReceived: r = ht } = this.props,
          { user_id: i, customer_id: s } = n;
        !!i && !s && r && r(n);
      }),
      (this.handleMessageSent = (n) => {
        const { onMessageSent: r = ht } = this.props;
        r && r(n);
      }),
      (this.handleUnseenMessages = (n) => {
        (this.logger.debug("Handling unseen messages:", n),
          this.setState({ shouldDisplayNotifications: !0 }),
          this.send("notifications:display", {
            shouldDisplayNotifications: !0,
          }));
      }),
      (this.handleMessagesSeen = () => {
        (this.logger.debug("Handling messages seen"),
          this.setState({ shouldDisplayNotifications: !1 }),
          this.storage.setPopupSeen(!0),
          this.send("notifications:display", {
            shouldDisplayNotifications: !1,
          }));
      }),
      (this.shouldOpenByDefault = () => {
        const {
          defaultIsOpen: n,
          isOpenByDefault: r,
          persistOpenState: i,
          canToggle: s,
        } = this.props;
        if (!s) return !0;
        const o = this.storage.getOpenState();
        return i ? o : !!(r || n);
      }),
      (this.handleChatLoaded = () => {
        this.setState({ isLoaded: !0 });
        const { config: n = {} } = this.state,
          { subscriptionPlan: r = null } = n,
          { onChatLoaded: i = ht } = this.props;
        (i &&
          typeof i == "function" &&
          i({
            open: this.handleOpenWidget,
            close: this.handleCloseWidget,
            identify: this.identify,
          }),
          this.shouldOpenByDefault() &&
            this.setState({ isOpen: !0 }, () => this.emitToggleEvent(!0)),
          this.send("breads:plan", { plan: r }));
      }),
      (this.formatCustomerMetadata = (n) =>
        n
          ? Object.keys(n).reduce(
              (r, i) =>
                i === "metadata"
                  ? { ...r, [i]: n[i] }
                  : { ...r, [i]: String(n[i]) },
              {},
            )
          : {}),
      (this.identify = (n) => {
        const { customerId: r } = this.state.config;
        return this.updateCustomerMetadata(r, n);
      }),
      (this.updateCustomerMetadata = (n, r) => {
        const s = { ...pa(window), ...this.formatCustomerMetadata(r) };
        return this.send("customer:update", { customerId: n, metadata: s });
      }),
      (this.sendCustomerUpdate = (n) => {
        const { customerId: r } = n,
          { customer: i } = this.props;
        this.updateCustomerMetadata(r, i);
      }),
      (this.handleCacheCustomerId = (n) => {
        const { customerId: r } = n;
        (this.logger.debug("Caching customer ID:", r),
          window.dispatchEvent(
            new CustomEvent("breads:customer:set", { detail: r }),
          ),
          this.storage.setCustomerId(r),
          this.setState({ config: { ...this.state.config, customerId: r } }));
      }),
      (this.emitToggleEvent = (n) => {
        this.send("breads:toggle", { isOpen: n });
        const {
          persistOpenState: r = !1,
          onChatOpened: i = ht,
          onChatClosed: s = ht,
        } = this.props;
        (r && this.storage.setOpenState(n), n ? i && i() : s && s());
      }),
      (this.handleOpenWidget = () => {
        !this.props.canToggle ||
          this.state.isOpen ||
          (this.state.shouldDisplayNotifications
            ? this.setState({ isTransitioning: !0 }, () => {
                setTimeout(() => {
                  this.setState({ isOpen: !0, isTransitioning: !1 }, () =>
                    this.emitToggleEvent(!0),
                  );
                }, 200);
              })
            : this.setState({ isOpen: !0 }, () => this.emitToggleEvent(!0)));
      }),
      (this.handleCloseWidget = () => {
        !this.props.canToggle ||
          !this.state.isOpen ||
          this.setState({ isOpen: !1 }, () => this.emitToggleEvent(!1));
      }),
      (this.handleToggleOpen = () => {
        const {
            isOpen: n,
            isLoaded: r,
            shouldDisplayNotifications: i,
          } = this.state,
          s = !n;
        !r ||
          !this.props.canToggle ||
          (!n && i
            ? this.setState({ isTransitioning: !0 }, () => {
                setTimeout(() => {
                  this.setState({ isOpen: s, isTransitioning: !1 }, () =>
                    this.emitToggleEvent(s),
                  );
                }, 200);
              })
            : this.setState({ isOpen: s }, () => this.emitToggleEvent(s)));
      }),
      t.token,
      (this.state = {
        isOpen: !1,
        isLoaded: !1,
        query: "",
        config: {},
        shouldDisplayNotifications: !1,
        isTransitioning: !1,
      }));
  }
  async componentDidMount() {
    var v, S, A;
    const t = +new Date(),
      {
        agentUuid: n,
        integrationUuid: r,
        token: i,
        inbox: s,
        primaryColor: o,
        baseUrl: a,
        awayMessage: l,
        newMessagesNotificationText: c,
        showAgentAvailability: f,
        canToggle: u,
        customer: d = {},
        debug: h = !1,
      } = this.props;
    ((this.logger = new xa(!!h)),
      (this.subscriptions = [
        Ry(window, this.postMessageHandlers),
        ky(window, this.EVENTS, this.customEventHandlers),
      ]),
      (this.storage = a0(window)));
    const p = await this.fetchWidgetSettings(),
      m = { ...pa(window), ...d },
      y = {
        baseUrl: a,
        inbox: s,
        agentUuid: n,
        integrationUuid: r,
        token: i,
        title: await this.getDefaultTitle(p),
        subtitle: await this.getDefaultSubtitle(p),
        primaryColor: o || p.color,
        greeting: await this.getDefaultGreeting(p),
        awayMessage: l || p.away_message,
        newMessagesNotificationText: c || p.new_messages_notification_text,
        companyName:
          (v = p == null ? void 0 : p.account) == null
            ? void 0
            : v.company_name,
        showAgentAvailability: f || p.show_agent_availability ? 1 : 0,
        closeable: u ? 1 : 0,
        customerId: this.storage.getCustomerId(),
        subscriptionPlan:
          (S = p == null ? void 0 : p.account) == null
            ? void 0
            : S.subscription_plan,
        isOutsideWorkingHours:
          (A = p == null ? void 0 : p.account) == null
            ? void 0
            : A.is_outside_working_hours,
        isBrandingHidden: p == null ? void 0 : p.is_branding_hidden,
        metadata: JSON.stringify(m),
        debug: h ? 1 : 0,
        version: "1.3.1",
        ts: t.toString(),
      },
      g = ha.stringify(y, { skipEmptyString: !0, skipNull: !0 });
    (this.setState({ config: y, query: g }),
      await this.updateWidgetSettingsMetadata());
  }
  componentWillUnmount() {
    this.subscriptions.forEach((t) => {
      typeof t == "function" && t();
    });
  }
  componentDidUpdate(t) {
    if (!this.state.isLoaded) return;
    const {
        token: n,
        inbox: r,
        title: i,
        subtitle: s,
        primaryColor: o,
        baseUrl: a,
        greeting: l,
        newMessagesNotificationText: c,
        showAgentAvailability: f,
        customer: u,
      } = this.props,
      d = [n, r, i, s, o, a, l, c, f],
      h = [
        t.token,
        t.inbox,
        t.title,
        t.subtitle,
        t.primaryColor,
        t.baseUrl,
        t.greeting,
        t.newMessagesNotificationText,
        t.showAgentAvailability,
      ],
      { customerId: p } = this.state.config;
    (d.some((y, g) => y !== h[g]) &&
      this.handleConfigUpdated({
        token: n,
        inbox: r,
        title: i,
        subtitle: s,
        primaryColor: o,
        baseUrl: a,
        greeting: l,
        newMessagesNotificationText: c,
        showAgentAvailability: f ? 1 : 0,
      }),
      this.shouldUpdateCustomer(u, t.customer) &&
        this.updateCustomerMetadata(p, u));
  }
  render() {
    const {
        isOpen: t,
        isLoaded: n,
        query: r,
        config: i,
        shouldDisplayNotifications: s,
        isTransitioning: o,
      } = this.state,
      { customIconUrl: a, children: l } = this.props,
      { primaryColor: c } = i;
    if (!r) return null;
    const f = this.getIframeUrl(),
      u = (t || s) && !o,
      d = r0({ primary: c }),
      h = [
        "allow-scripts",
        "allow-popups",
        "allow-same-origin",
        "allow-forms",
      ].join(" ");
    return V(cy, {
      theme: d,
      children: l({
        sandbox: h,
        isLoaded: n,
        isActive: u,
        isOpen: t,
        isTransitioning: o,
        customIconUrl: a,
        iframeUrl: f,
        query: r,
        shouldDisplayNotifications: s,
        setIframeRef: this.setIframeRef,
        onToggleOpen: this.handleToggleOpen,
      }),
    });
  }
}
class u0 extends kt.Component {
  constructor() {
    (super(...arguments), (this.state = { error: null }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, n) {
    console.error("Error rendering Breads chat:", t, n);
  }
  render() {
    return this.state.error ? null : this.props.children;
  }
}
const f0 = (e = {}) => {
  const t = yn(),
    { defaultIndex: n = 0 } = e,
    r = (t.theme && t.theme.breakpoints) || Pl;
  if (typeof n != "number")
    throw new TypeError(
      `Default breakpoint index should be a number. Got: ${n}, ${typeof n}`,
    );
  if (n < 0 || n > r.length - 1)
    throw new RangeError(
      `Default breakpoint index out of range. Theme has ${r.length} breakpoints, got index ${n}`,
    );
  const [i, s] = qe(n);
  return (
    Be(() => {
      const o = () =>
          r.filter((l) => {
            const c = l.includes("@media")
              ? l.replace("@media ", "")
              : `screen and (min-width: ${l})`;
            return window.matchMedia(c).matches;
          }).length,
        a = () => {
          const l = o();
          i !== l && s(l);
        };
      return (
        a(),
        window.addEventListener("resize", a),
        () => window.removeEventListener("resize", a)
      );
    }, [r, i]),
    i
  );
};
function wa(e, t = {}) {
  const { theme: n } = yn(),
    r = typeof e == "function" ? e(n) : e,
    i = f0(t);
  return r[i >= r.length ? r.length - 1 : i];
}
const d0 = () =>
    V("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      width: 15,
      height: 15,
      children: V("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5",
      }),
    }),
  h0 = ({ isOpen: e, isDisabled: t, style: n, toggle: r }) =>
    V(bu, {
      className: "Breads-toggleButton",
      variant: "primary",
      p: 0,
      style: n,
      sx: { variant: "styles.WidgetClose" },
      disabled: t,
      onClick: r,
      "aria-label": `${e ? "Close" : "Open"} chat widget`,
      children: V(d0, {}),
    }),
  Xt = 10,
  p0 = 10,
  m0 = (e) => {
    if (!e) return { side: "right", offset: Xt };
    switch (e) {
      case "left":
        return { side: "left", offset: Xt };
      case "right":
        return { side: "right", offset: Xt };
      default:
        return e;
    }
  },
  g0 = (e = {}, t) => {
    const {
        chatContainer: n = {},
        toggleContainer: r = {},
        toggleButton: i = {},
      } = e,
      { side: s = "right", offset: o = Xt } = t,
      a = wa([0, Xt]),
      l = wa([0, p0]);
    switch (s) {
      case "left":
        return {
          chatContainer: { left: a, bottom: l, right: "auto", ...n },
          toggleContainer: { left: o, right: "auto", ...r },
          toggleButton: i,
        };
      case "right":
      default:
        return {
          chatContainer: { right: a, bottom: l, left: "auto", ...n },
          toggleContainer: { right: o, left: "auto", ...r },
          toggleButton: i,
        };
    }
  },
  y0 = (e) =>
    V(u0, {
      children: V(c0, {
        ...e,
        canToggle: !0,
        children: (t) => {
          const {
              sandbox: n,
              isLoaded: r,
              isActive: i,
              isOpen: s,
              isTransitioning: o,
              customIconUrl: a,
              iframeUrl: l,
              query: c,
              shouldDisplayNotifications: f,
              setIframeRef: u,
              onToggleOpen: d,
            } = t,
            {
              hideToggleButton: h,
              iconVariant: p,
              renderToggleButton: m,
              position: y = "right",
              styles: g = {},
            } = e,
            v = m0(y),
            {
              chatContainer: S = {},
              toggleContainer: A = {},
              toggleButton: x = {},
            } = g0(g, v);
          return ct("div", {
            children: [
              V(ot.div, {
                animate: i ? "open" : "closed",
                initial: "closed",
                variants: {
                  closed: { opacity: 0, y: 4 },
                  open: { opacity: 1, y: 0 },
                },
                transition: { duration: 0.2, ease: "easeIn" },
                sx: {
                  variant:
                    !s && f
                      ? "styles.WidgetContainer.notifications"
                      : "styles.WidgetContainer",
                  lineHeight: 0,
                  borderRadius: "14px",
                },
                style: i
                  ? { ...S }
                  : { pointerEvents: "none", height: 0, minHeight: 0 },
                children: ct(fe, {
                  children: [
                    V(ot.div, {
                      className: "Breads-toggleButtonContainer",
                      sx: { variant: "styles.CloseWidgetButtonContainer" },
                      children: V(h0, { style: x, isDisabled: o, toggle: d }),
                    }),
                    V(ot.iframe, {
                      ref: u,
                      title: "Breads Chat Widget Container",
                      className: "Breads-chatWindowContainer",
                      src: `${l}?${c}`,
                      sx: {
                        border: "none",
                        bg: "background",
                        variant: "styles.WidgetIframe",
                        borderRadius: "14px",
                      },
                      children: "Loading...",
                    }),
                  ],
                }),
              }),
              r &&
                !h &&
                !s &&
                V(ot.div, {
                  className: "Breads-toggleButtonContainer",
                  initial: !1,
                  style: A,
                  animate: s ? "open" : "closed",
                  sx: { variant: "styles.WidgetToggleContainer" },
                  children:
                    m && typeof m == "function"
                      ? m({ isOpen: s, onToggleOpen: d, isDisabled: o })
                      : V(vy, {
                          style: x,
                          isDisabled: o,
                          isOpen: s,
                          customIconUrl: a,
                          iconVariant: p,
                          toggle: d,
                        }),
                }),
            ],
          });
        },
      }),
    }),
  v0 = "2ebbad4c-b162-4ed2-aff5-eaf9ebf469a5",
  _0 = "eab9c66e-ea8a-46f7-9565-3927ec55e20d";
function b0() {
  const e = [
      "#17254c",
      "#f5222d",
      "#7cb305",
      "#52c41a",
      "#13c2c2",
      "#722ed1",
      "#eb2f96",
    ],
    [t, n] = qe(e[0]),
    r = window,
    i = r.BreadsConfig || {};
  return (
    console.debug("config", r.BreadsConfig),
    Le("div", {
      children: Le(y0, {
        token: v0,
        inbox: _0,
        title: "Welcome to Breads!",
        subtitle: "Ask us anything in the chat window 😊",
        primaryColor: t,
        greeting: "Hi there! How can I help you?",
        awayMessage:
          "Sorry, we're not available at the moment! We'll get back to you as soon as we can :)",
        newMessagesNotificationText: "View new messages",
        showAgentAvailability: !0,
        hideToggleButton: !1,
        isOpenByDefault: !1,
        iconVariant: "filled",
        persistOpenState: !0,
        debug: !0,
        styles: { chatContainer: {}, toggleContainer: {}, toggleButton: {} },
        setDefaultGreeting: (s) => {
          var a;
          return !!(
            (a = s == null ? void 0 : s.account) != null &&
            a.is_outside_working_hours
          )
            ? "We're away at the moment, but we'll be back soon!"
            : "Hi there! How can I help you?";
        },
        ...i,
      }),
    })
  );
}
const S0 = () => window.dispatchEvent(new Event("breads:open")),
  x0 = () => window.dispatchEvent(new Event("breads:close")),
  w0 = () => window.dispatchEvent(new Event("breads:toggle")),
  T0 = { open: S0, close: x0, toggle: w0 };
window.Breads = T0;
if (!document.getElementById("breads-chat-widget")) {
  const e = document.createElement("div");
  ((e.id = "breads-chat-widget"), document.body.appendChild(e));
}
xt(Le(b0, {}), document.getElementById("breads-chat-widget"));
