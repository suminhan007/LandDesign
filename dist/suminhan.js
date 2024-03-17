import He, { useMemo as Ie } from "react";
import L from "styled-components";
var g = function() {
  return g = Object.assign || function(c) {
    for (var a, u = 1, v = arguments.length; u < v; u++) {
      a = arguments[u];
      for (var h in a)
        Object.prototype.hasOwnProperty.call(a, h) && (c[h] = a[h]);
    }
    return c;
  }, g.apply(this, arguments);
};
function Y(n, c) {
  return Object.defineProperty ? Object.defineProperty(n, "raw", { value: c }) : n.raw = c, n;
}
var te = { exports: {} }, G = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function _r() {
  if ($e)
    return G;
  $e = 1;
  var n = He, c = Symbol.for("react.element"), a = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, v = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(m, d, R) {
    var y, w = {}, O = null, S = null;
    R !== void 0 && (O = "" + R), d.key !== void 0 && (O = "" + d.key), d.ref !== void 0 && (S = d.ref);
    for (y in d)
      u.call(d, y) && !h.hasOwnProperty(y) && (w[y] = d[y]);
    if (m && m.defaultProps)
      for (y in d = m.defaultProps, d)
        w[y] === void 0 && (w[y] = d[y]);
    return { $$typeof: c, type: m, key: O, ref: S, props: w, _owner: v.current };
  }
  return G.Fragment = a, G.jsx = _, G.jsxs = _, G;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function Tr() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var n = He, c = Symbol.for("react.element"), a = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), m = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), k = Symbol.iterator, j = "@@iterator";
    function I(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = k && e[k] || e[j];
      return typeof r == "function" ? r : null;
    }
    var D = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        oe("error", e, t);
      }
    }
    function oe(e, r, t) {
      {
        var o = D.ReactDebugCurrentFrame, f = o.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var p = t.map(function(l) {
          return String(l);
        });
        p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var A = !1, J = !1, K = !1, H = !1, X = !1, M;
    M = Symbol.for("react.module.reference");
    function B(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === h || X || e === v || e === R || e === y || H || e === S || A || J || K || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === w || e.$$typeof === _ || e.$$typeof === m || e.$$typeof === d || e.$$typeof === M || e.getModuleId !== void 0));
    }
    function Ze(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function pe(e) {
      return e.displayName || "Context";
    }
    function N(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case a:
          return "Portal";
        case h:
          return "Profiler";
        case v:
          return "StrictMode";
        case R:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return pe(r) + ".Consumer";
          case _:
            var t = e;
            return pe(t._context) + ".Provider";
          case d:
            return Ze(e, e.render, "ForwardRef");
          case w:
            var o = e.displayName || null;
            return o !== null ? o : N(e.type) || "Memo";
          case O: {
            var f = e, p = f._payload, l = f._init;
            try {
              return N(l(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, V = 0, he, be, ge, me, ye, xe, Ee;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Qe() {
      {
        if (V === 0) {
          he = console.log, be = console.info, ge = console.warn, me = console.error, ye = console.group, xe = console.groupCollapsed, Ee = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        V++;
      }
    }
    function er() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, e, {
              value: he
            }),
            info: z({}, e, {
              value: be
            }),
            warn: z({}, e, {
              value: ge
            }),
            error: z({}, e, {
              value: me
            }),
            group: z({}, e, {
              value: ye
            }),
            groupCollapsed: z({}, e, {
              value: xe
            }),
            groupEnd: z({}, e, {
              value: Ee
            })
          });
        }
        V < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = D.ReactCurrentDispatcher, ie;
    function Z(e, r, t) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (f) {
            var o = f.stack.trim().match(/\n( *(at )?)/);
            ie = o && o[1] || "";
          }
        return `
` + ie + e;
      }
    }
    var le = !1, Q;
    {
      var rr = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new rr();
    }
    function we(e, r) {
      if (!e || le)
        return "";
      {
        var t = Q.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      le = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = ae.current, ae.current = null, Qe();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (F) {
              o = F;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (F) {
              o = F;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            o = F;
          }
          e();
        }
      } catch (F) {
        if (F && o && typeof F.stack == "string") {
          for (var i = F.stack.split(`
`), T = o.stack.split(`
`), b = i.length - 1, x = T.length - 1; b >= 1 && x >= 0 && i[b] !== T[x]; )
            x--;
          for (; b >= 1 && x >= 0; b--, x--)
            if (i[b] !== T[x]) {
              if (b !== 1 || x !== 1)
                do
                  if (b--, x--, x < 0 || i[b] !== T[x]) {
                    var C = `
` + i[b].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && Q.set(e, C), C;
                  }
                while (b >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        le = !1, ae.current = p, er(), Error.prepareStackTrace = f;
      }
      var W = e ? e.displayName || e.name : "", ze = W ? Z(W) : "";
      return typeof e == "function" && Q.set(e, ze), ze;
    }
    function nr(e, r, t) {
      return we(e, !1);
    }
    function tr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ee(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return we(e, tr(e));
      if (typeof e == "string")
        return Z(e);
      switch (e) {
        case R:
          return Z("Suspense");
        case y:
          return Z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return nr(e.render);
          case w:
            return ee(e.type, r, t);
          case O: {
            var o = e, f = o._payload, p = o._init;
            try {
              return ee(p(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var re = Object.prototype.hasOwnProperty, _e = {}, Te = D.ReactDebugCurrentFrame;
    function ne(e) {
      if (e) {
        var r = e._owner, t = ee(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    function or(e, r, t, o, f) {
      {
        var p = Function.call.bind(re);
        for (var l in e)
          if (p(e, l)) {
            var i = void 0;
            try {
              if (typeof e[l] != "function") {
                var T = Error((o || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              i = e[l](r, l, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              i = b;
            }
            i && !(i instanceof Error) && (ne(f), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, l, typeof i), ne(null)), i instanceof Error && !(i.message in _e) && (_e[i.message] = !0, ne(f), E("Failed %s type: %s", t, i.message), ne(null));
          }
      }
    }
    var ar = Array.isArray;
    function se(e) {
      return ar(e);
    }
    function ir(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function lr(e) {
      try {
        return Oe(e), !1;
      } catch {
        return !0;
      }
    }
    function Oe(e) {
      return "" + e;
    }
    function Ce(e) {
      if (lr(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ir(e)), Oe(e);
    }
    var U = D.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Se, ce;
    ce = {};
    function cr(e) {
      if (re.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ur(e) {
      if (re.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function fr(e, r) {
      if (typeof e.ref == "string" && U.current && r && U.current.stateNode !== r) {
        var t = N(U.current.type);
        ce[t] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(U.current.type), e.ref), ce[t] = !0);
      }
    }
    function dr(e, r) {
      {
        var t = function() {
          Pe || (Pe = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function vr(e, r) {
      {
        var t = function() {
          Se || (Se = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var pr = function(e, r, t, o, f, p, l) {
      var i = {
        $$typeof: c,
        type: e,
        key: r,
        ref: t,
        props: l,
        _owner: p
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function hr(e, r, t, o, f) {
      {
        var p, l = {}, i = null, T = null;
        t !== void 0 && (Ce(t), i = "" + t), ur(r) && (Ce(r.key), i = "" + r.key), cr(r) && (T = r.ref, fr(r, f));
        for (p in r)
          re.call(r, p) && !sr.hasOwnProperty(p) && (l[p] = r[p]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (p in b)
            l[p] === void 0 && (l[p] = b[p]);
        }
        if (i || T) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && dr(l, x), T && vr(l, x);
        }
        return pr(e, i, T, f, o, U.current, l);
      }
    }
    var ue = D.ReactCurrentOwner, je = D.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, t = ee(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(t);
      } else
        je.setExtraStackFrame(null);
    }
    var fe;
    fe = !1;
    function de(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function ke() {
      {
        if (ue.current) {
          var e = N(ue.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function br(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var De = {};
    function gr(e) {
      {
        var r = ke();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ne(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = gr(r);
        if (De[t])
          return;
        De[t] = !0;
        var o = "";
        e && e._owner && e._owner !== ue.current && (o = " It was passed a child from " + N(e._owner.type) + "."), $(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), $(null);
      }
    }
    function Fe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            de(o) && Ne(o, r);
          }
        else if (de(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = I(e);
          if (typeof f == "function" && f !== e.entries)
            for (var p = f.call(e), l; !(l = p.next()).done; )
              de(l.value) && Ne(l.value, r);
        }
      }
    }
    function mr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || r.$$typeof === w))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = N(r);
          or(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !fe) {
          fe = !0;
          var f = N(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            $(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    function Ae(e, r, t, o, f, p) {
      {
        var l = B(e);
        if (!l) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = br(f);
          T ? i += T : i += ke();
          var b;
          e === null ? b = "null" : se(e) ? b = "array" : e !== void 0 && e.$$typeof === c ? (b = "<" + (N(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, i);
        }
        var x = hr(e, r, t, f, p);
        if (x == null)
          return x;
        if (l) {
          var C = r.children;
          if (C !== void 0)
            if (o)
              if (se(C)) {
                for (var W = 0; W < C.length; W++)
                  Fe(C[W], e);
                Object.freeze && Object.freeze(C);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(C, e);
        }
        return e === u ? yr(x) : mr(x), x;
      }
    }
    function xr(e, r, t) {
      return Ae(e, r, t, !0);
    }
    function Er(e, r, t) {
      return Ae(e, r, t, !1);
    }
    var Rr = Er, wr = xr;
    q.Fragment = u, q.jsx = Rr, q.jsxs = wr;
  }()), q;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = _r() : n.exports = Tr();
})(te);
const ve = te.exports.Fragment, s = te.exports.jsx, P = te.exports.jsxs;
var Le = function(n) {
  var c = n.color, a = c === void 0 ? "currentColor" : c, u = n.size, v = u === void 0 ? 14 : u;
  return P(Or, g({
    width: v,
    height: v,
    viewBox: "0 0 36 36"
  }, {
    children: [s("defs", {
      children: P("linearGradient", g({
        x1: "0%",
        y1: "100%",
        x2: "100%",
        y2: "100%",
        id: "linearGradient-133"
      }, {
        children: [s("stop", {
          stopColor: a,
          stopOpacity: "0",
          offset: "0%"
        }), s("stop", {
          stopColor: a,
          stopOpacity: "0.60",
          offset: "50%"
        }), s("stop", {
          stopColor: a,
          offset: "100%"
        })]
      }))
    }), P("g", g({
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd"
    }, {
      children: [s("rect", {
        fillOpacity: "0.01",
        fill: "none",
        x: "0",
        y: "0",
        width: "36",
        height: "36"
      }), s("path", {
        d: "M34,18 C34,9.163444 26.836556,2 18,2 C11.6597233,2 6.18078805,5.68784135 3.59122325,11.0354951",
        stroke: "url(#linearGradient-133)",
        strokeWidth: "6",
        "stroke-linecap": "round"
      })]
    }))]
  }));
}, Or = L.svg(Ye || (Ye = Y([`
    animation: loadingRotate 0.68s linear infinite;
    @keyframes loadingRotate {
        0%{
            transform: rotate(0);
        }
        100%{
            transform: rotate(1turn);
        }
    }
`], [`
    animation: loadingRotate 0.68s linear infinite;
    @keyframes loadingRotate {
        0%{
            transform: rotate(0);
        }
        100%{
            transform: rotate(1turn);
        }
    }
`]))), Ye, Me;
(function(n) {
  n.BG = "background", n.BORDER = "border";
})(Me || (Me = {}));
var Be;
(function(n) {
  n.LIGHT = "light", n.DARK = "dark";
})(Be || (Be = {}));
var Ve = function(n) {
  var c = n.content, a = n.style, u = n.className, v = u === void 0 ? "" : u;
  return P(Cr, g({
    className: "land-pop ".concat(v),
    style: a
  }, {
    children: [c, s("div", {
      className: "land-pop-arrow"
    })]
  }));
}, Cr = L.div(Ue || (Ue = Y([`
  position: absolute;
  padding: 8px 12px;
  width: max-content;
  top: -48px;
  left: 50%;
  font-size: 12px;
  color: var(--color-text-3);
  border-radius: 6px;
  background-color: var(--color-bg-white);
  box-shadow: var(--boxshadow-normal);
  border: var(--border-1) solid var(--color-border-1);
  transform: translate(-50%,20%);
  opacity: 0;
  transform-origin: bottom center;
  pointer-events: none;
  transition: all .15s linear;
  .land-pop-arrow {
    display: block;
    position: absolute;
    left: 50%;
    bottom: -50%;
    transform: translate(-50%,-75%) rotate(45deg);
    width: 12px;
    height: 12px;
    border-right: var(--border-1) solid var(--color-border-1);
    border-bottom: var(--border-1) solid var(--color-border-1);
    border-radius: var(--radius-2);
    background-color: var(--color-bg-white);
  }
`], [`
  position: absolute;
  padding: 8px 12px;
  width: max-content;
  top: -48px;
  left: 50%;
  font-size: 12px;
  color: var(--color-text-3);
  border-radius: 6px;
  background-color: var(--color-bg-white);
  box-shadow: var(--boxshadow-normal);
  border: var(--border-1) solid var(--color-border-1);
  transform: translate(-50%,20%);
  opacity: 0;
  transform-origin: bottom center;
  pointer-events: none;
  transition: all .15s linear;
  .land-pop-arrow {
    display: block;
    position: absolute;
    left: 50%;
    bottom: -50%;
    transform: translate(-50%,-75%) rotate(45deg);
    width: 12px;
    height: 12px;
    border-right: var(--border-1) solid var(--color-border-1);
    border-bottom: var(--border-1) solid var(--color-border-1);
    border-radius: var(--radius-2);
    background-color: var(--color-bg-white);
  }
`]))), Ue, Nr = function(n) {
  var c = n.text, a = c === void 0 ? "\u6309\u94AE" : c, u = n.subText, v = n.icon, h = n.width, _ = n.height, m = n.justify, d = m === void 0 ? "center" : m, R = n.theme, y = R === void 0 ? "border" : R, w = n.status, O = w === void 0 ? "default" : w, S = n.disabled, k = n.loading, j = n.pop, I = n.PopProps, D = n.href, E = n.target, oe = E === void 0 ? "_blank" : E, A = n.onClick, J = n.style, K = n.className, H = K === void 0 ? "" : K, X = Ie(function() {
    if ((v || k) && !a && !u)
      return !0;
  }, [v, a, u, k]), M = Ie(function() {
    switch (O) {
      case "success":
        return "var(--color-green-";
      case "warning":
        return "var(--color-orange-";
      case "danger":
        return "var(--color-red-";
      case "primary":
        return "var(--color-primary-";
      default:
        return "";
    }
  }, [O]);
  return s(ve, {
    children: D ? P(Pr, g({
      href: D,
      target: oe,
      className: "land-button ".concat(j ? "hover-pop" : "", " ").concat(H),
      style: g({
        width: h || "fit-content",
        height: _ || "fit-content"
      }, J),
      justify: d,
      color: M,
      onClick: function(B) {
        return A == null ? void 0 : A(B);
      }
    }, {
      children: [k ? s(Le, {}) : v, !X && P("div", {
        children: [s("span", {
          children: a
        }), s("span", g({
          className: "subText"
        }, {
          children: u
        }))]
      }), j && s(Ve, g({
        content: j
      }, I))]
    })) : P(Xe, g({
      className: "land-button ".concat(y, " ").concat(O, " ").concat(S ? "disabled" : "", " ").concat(j ? "hover-pop" : "", " ").concat(H),
      style: g({
        width: h || "fit-content",
        height: _ || "fit-content"
      }, J),
      justify: d,
      color: M,
      onClick: function(B) {
        return A == null ? void 0 : A(B);
      }
    }, {
      children: [k ? s(Le, {}) : v, !X && P("div", {
        children: [s("span", {
          children: a
        }), s("span", g({
          className: "subText"
        }, {
          children: u
        }))]
      }), j && s(Ve, g({
        content: j
      }, I))]
    }))
  });
}, Xe = L.div(Ge || (Ge = Y([`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: `, `;
    gap: var(--size-8);
    padding: var(--padding-medium);
    color: `, `;
    &:hover {
      color: `, `;
    }
    &:active {
      color: `, `;
    }
    font-size: var(--font-content-medium);
    border-radius: var(--radius-6);
    box-sizing: border-box;
    transition: all var(--transition-2) linear;
    cursor: pointer;
    .subText{
      margin-left: 4px;
      font-size: var(--font-content-small);
      opacity: var(--opacity-68);
    }

    &.disabled {
      opacity: var(--opacity-68);
      cursor: default;
    }
`], [`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: `, `;
    gap: var(--size-8);
    padding: var(--padding-medium);
    color: `, `;
    &:hover {
      color: `, `;
    }
    &:active {
      color: `, `;
    }
    font-size: var(--font-content-medium);
    border-radius: var(--radius-6);
    box-sizing: border-box;
    transition: all var(--transition-2) linear;
    cursor: pointer;
    .subText{
      margin-left: 4px;
      font-size: var(--font-content-small);
      opacity: var(--opacity-68);
    }

    &.disabled {
      opacity: var(--opacity-68);
      cursor: default;
    }
`])), function(n) {
  return n.justify;
}, function(n) {
  return n.color ? "".concat(n.color, "6)") : "var(--color-text-2)";
}, function(n) {
  return n.color ? "".concat(n.color, "5)") : "var(--color-text-3)";
}, function(n) {
  return n.color ? "".concat(n.color, "7)") : "var(--color-text-1)";
}), Pr = L.a(qe || (qe = Y([`
  `, `;
  text-decoration: none;
`], [`
  `, `;
  text-decoration: none;
`])), Xe), Ge, qe, Fr = function(n) {
  var c = n.direction, a = c === void 0 ? "row" : c, u = n.size, v = u === void 0 ? 1 : u, h = n.margin, _ = h === void 0 ? 0 : h, m = n.type, d = m === void 0 ? "solid" : m, R = n.color, y = R === void 0 ? "#eee" : R, w = n.content, O = n.align, S = O === void 0 ? "center" : O, k = n.style, j = n.className, I = j === void 0 ? "" : j;
  return P("div", g({
    className: "land-divider ".concat(I),
    style: g({
      display: "flex",
      alignItems: "center",
      flexDirection: a,
      gap: w && "8px",
      width: a === "row" ? "100%" : "".concat(v, "px"),
      height: a === "column" ? "100%" : "auto",
      margin: a === "row" ? "".concat(_, "px 0") : "0 ".concat(_, "px")
    }, k)
  }, {
    children: [s("div", {
      style: {
        flex: S === "left" ? "10%" : S === "right" ? "90%" : 1,
        height: "0px",
        borderBottom: a === "row" ? "".concat(v, "px ").concat(d, " ").concat(y) : "none",
        borderLeft: a === "column" ? "".concat(v, "px ").concat(d, " ").concat(y) : "none"
      }
    }), w && P(ve, {
      children: [s("div", g({
        style: {
          fontSize: "12px",
          color: "#999",
          writingMode: a === "column" ? "vertical-rl" : "unset",
          textOrientation: a === "column" ? "upright" : "unset"
        }
      }, {
        children: w
      })), s("div", {
        style: {
          flex: S === "left" ? "90%" : S === "right" ? "10%" : 1,
          height: "0px",
          borderBottom: a === "row" ? "".concat(v, "px ").concat(d, " ").concat(y) : "none",
          borderLeft: a === "column" ? "".concat(v, "px ").concat(d, " ").concat(y) : "none"
        }
      })]
    })]
  }));
}, Ar = function(n) {
  var c = n.titleData, a = n.data, u = a === void 0 ? [] : a, v = n.style, h = n.className, _ = h === void 0 ? "" : h;
  return P(Sr, g({
    className: "land-table ".concat(_),
    style: v
  }, {
    children: [s("thead", {
      children: s("tr", {
        children: c == null ? void 0 : c.map(function(m, d) {
          return s("th", {
            children: m.title
          }, d);
        })
      })
    }), s("tbody", {
      children: u.map(function(m) {
        return s("tr", {
          children: Object.values(m).map(function(d) {
            return s("td", {
              children: d
            });
          })
        });
      })
    })]
  }));
}, Sr = L.table(Je || (Je = Y([`
    border-spacing: 0px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    overflow: hidden;
    thead {
        background-color: #f9f9f9;
        td {
            text-align: center;
        }
    }
    tbody tr td{
        border-top: 1px solid #eaeaea;
    }
    thead tr th:not(:last-child),
    tbody tr td:not(:last-child) {
        border-right: 1px solid #eaeaea;
    }
    td,th {
        padding: 8px 16px;
        box-sizing: border-box;
        color: #333;
        line-height: 1.5em;
    }
`], [`
    border-spacing: 0px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    overflow: hidden;
    thead {
        background-color: #f9f9f9;
        td {
            text-align: center;
        }
    }
    tbody tr td{
        border-top: 1px solid #eaeaea;
    }
    thead tr th:not(:last-child),
    tbody tr td:not(:last-child) {
        border-right: 1px solid #eaeaea;
    }
    td,th {
        padding: 8px 16px;
        box-sizing: border-box;
        color: #333;
        line-height: 1.5em;
    }
`]))), Je, zr = function(n) {
  var c = n.title, a = n.type, u = a === void 0 ? "h1" : a, v = n.prefix, h = n.sub, _ = n.style, m = n.className, d = m === void 0 ? "" : m, R = n.onClick;
  return P(jr, g({
    className: "land-title ".concat(d),
    style: _,
    onClick: function() {
      return R == null ? void 0 : R();
    }
  }, {
    children: [v && s("span", g({
      className: "land-title-prefix"
    }, {
      children: v
    })), u === "h1" && s("h1", {
      children: c
    }), u === "h2" && s("h2", {
      children: c
    }), u === "h3" && s("h3", {
      children: c
    }), u === "p" && s("p", {
      children: c
    }), h && typeof h == "string" ? s("div", g({
      className: "land-title-sub"
    }, {
      children: h
    })) : s(ve, {
      children: h
    })]
  }));
}, jr = L.div(Ke || (Ke = Y([`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  font-weight: 600;
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 16px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
  }
  .land-title-sub{
    position: absolute;
    top: -30%;
    right: -50%;
    padding: 2px 4px;
    font-size: 8px;
    font-weight: 400;
    color: white;
    background-color: #202023;
    border-radius: 4px;
  }
`], [`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  font-weight: 600;
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 16px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
  }
  .land-title-sub{
    position: absolute;
    top: -30%;
    right: -50%;
    padding: 2px 4px;
    font-size: 8px;
    font-weight: 400;
    color: white;
    background-color: #202023;
    border-radius: 4px;
  }
`]))), Ke;
export {
  Nr as Button,
  Fr as Divider,
  Ve as Pop,
  Ar as Table,
  zr as Title
};
