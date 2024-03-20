import Jr, { useMemo as zr } from "react";
import W from "styled-components";
var w = function() {
  return w = Object.assign || function(s) {
    for (var c, f = 1, b = arguments.length; f < b; f++) {
      c = arguments[f];
      for (var h in c)
        Object.prototype.hasOwnProperty.call(c, h) && (s[h] = c[h]);
    }
    return s;
  }, w.apply(this, arguments);
};
function Y(n, s) {
  return Object.defineProperty ? Object.defineProperty(n, "raw", { value: s }) : n.raw = s, n;
}
var er = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $r;
function _n() {
  if ($r)
    return U;
  $r = 1;
  var n = Jr, s = Symbol.for("react.element"), c = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, b = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(x, u, _) {
    var g, E = {}, O = null, k = null;
    _ !== void 0 && (O = "" + _), u.key !== void 0 && (O = "" + u.key), u.ref !== void 0 && (k = u.ref);
    for (g in u)
      f.call(u, g) && !h.hasOwnProperty(g) && (E[g] = u[g]);
    if (x && x.defaultProps)
      for (g in u = x.defaultProps, u)
        E[g] === void 0 && (E[g] = u[g]);
    return { $$typeof: s, type: x, key: O, ref: k, props: E, _owner: b.current };
  }
  return U.Fragment = c, U.jsx = R, U.jsxs = R, U;
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
var Ir;
function kn() {
  return Ir || (Ir = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Jr, s = Symbol.for("react.element"), c = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), x = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), F = Symbol.iterator, C = "@@iterator";
    function z(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = F && r[F] || r[C];
      return typeof e == "function" ? e : null;
    }
    var P = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++)
          t[o - 1] = arguments[o];
        G("error", r, t);
      }
    }
    function G(r, e, t) {
      {
        var o = P.ReactDebugCurrentFrame, l = o.getStackAddendum();
        l !== "" && (e += "%s", t = t.concat([l]));
        var d = t.map(function(i) {
          return String(i);
        });
        d.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, d);
      }
    }
    var J = !1, K = !1, L = !1, H = !1, M = !1, fr;
    fr = Symbol.for("react.module.reference");
    function Hr(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === f || r === h || M || r === b || r === _ || r === g || H || r === k || J || K || L || typeof r == "object" && r !== null && (r.$$typeof === O || r.$$typeof === E || r.$$typeof === R || r.$$typeof === x || r.$$typeof === u || r.$$typeof === fr || r.getModuleId !== void 0));
    }
    function Xr(r, e, t) {
      var o = r.displayName;
      if (o)
        return o;
      var l = e.displayName || e.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function vr(r) {
      return r.displayName || "Context";
    }
    function S(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case f:
          return "Fragment";
        case c:
          return "Portal";
        case h:
          return "Profiler";
        case b:
          return "StrictMode";
        case _:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case x:
            var e = r;
            return vr(e) + ".Consumer";
          case R:
            var t = r;
            return vr(t._context) + ".Provider";
          case u:
            return Xr(r, r.render, "ForwardRef");
          case E:
            var o = r.displayName || null;
            return o !== null ? o : S(r.type) || "Memo";
          case O: {
            var l = r, d = l._payload, i = l._init;
            try {
              return S(i(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, B = 0, pr, br, hr, gr, mr, xr, yr;
    function Er() {
    }
    Er.__reactDisabledLog = !0;
    function Zr() {
      {
        if (B === 0) {
          pr = console.log, br = console.info, hr = console.warn, gr = console.error, mr = console.group, xr = console.groupCollapsed, yr = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Er,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        B++;
      }
    }
    function Qr() {
      {
        if (B--, B === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, r, {
              value: pr
            }),
            info: A({}, r, {
              value: br
            }),
            warn: A({}, r, {
              value: hr
            }),
            error: A({}, r, {
              value: gr
            }),
            group: A({}, r, {
              value: mr
            }),
            groupCollapsed: A({}, r, {
              value: xr
            }),
            groupEnd: A({}, r, {
              value: yr
            })
          });
        }
        B < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var tr = P.ReactCurrentDispatcher, or;
    function X(r, e, t) {
      {
        if (or === void 0)
          try {
            throw Error();
          } catch (l) {
            var o = l.stack.trim().match(/\n( *(at )?)/);
            or = o && o[1] || "";
          }
        return `
` + or + r;
      }
    }
    var ar = !1, Z;
    {
      var rn = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new rn();
    }
    function wr(r, e) {
      if (!r || ar)
        return "";
      {
        var t = Z.get(r);
        if (t !== void 0)
          return t;
      }
      var o;
      ar = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = tr.current, tr.current = null, Zr();
      try {
        if (e) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (D) {
              o = D;
            }
            Reflect.construct(r, [], i);
          } else {
            try {
              i.call();
            } catch (D) {
              o = D;
            }
            r.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            o = D;
          }
          r();
        }
      } catch (D) {
        if (D && o && typeof D.stack == "string") {
          for (var a = D.stack.split(`
`), T = o.stack.split(`
`), m = a.length - 1, y = T.length - 1; m >= 1 && y >= 0 && a[m] !== T[y]; )
            y--;
          for (; m >= 1 && y >= 0; m--, y--)
            if (a[m] !== T[y]) {
              if (m !== 1 || y !== 1)
                do
                  if (m--, y--, y < 0 || a[m] !== T[y]) {
                    var j = `
` + a[m].replace(" at new ", " at ");
                    return r.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", r.displayName)), typeof r == "function" && Z.set(r, j), j;
                  }
                while (m >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        ar = !1, tr.current = d, Qr(), Error.prepareStackTrace = l;
      }
      var I = r ? r.displayName || r.name : "", Ar = I ? X(I) : "";
      return typeof r == "function" && Z.set(r, Ar), Ar;
    }
    function nn(r, e, t) {
      return wr(r, !1);
    }
    function en(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function Q(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return wr(r, en(r));
      if (typeof r == "string")
        return X(r);
      switch (r) {
        case _:
          return X("Suspense");
        case g:
          return X("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case u:
            return nn(r.render);
          case E:
            return Q(r.type, e, t);
          case O: {
            var o = r, l = o._payload, d = o._init;
            try {
              return Q(d(l), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var rr = Object.prototype.hasOwnProperty, Rr = {}, _r = P.ReactDebugCurrentFrame;
    function nr(r) {
      if (r) {
        var e = r._owner, t = Q(r.type, r._source, e ? e.type : null);
        _r.setExtraStackFrame(t);
      } else
        _r.setExtraStackFrame(null);
    }
    function tn(r, e, t, o, l) {
      {
        var d = Function.call.bind(rr);
        for (var i in r)
          if (d(r, i)) {
            var a = void 0;
            try {
              if (typeof r[i] != "function") {
                var T = Error((o || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              a = r[i](e, i, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              a = m;
            }
            a && !(a instanceof Error) && (nr(l), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, i, typeof a), nr(null)), a instanceof Error && !(a.message in Rr) && (Rr[a.message] = !0, nr(l), v("Failed %s type: %s", t, a.message), nr(null));
          }
      }
    }
    var on = Array.isArray;
    function ir(r) {
      return on(r);
    }
    function an(r) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return t;
      }
    }
    function cn(r) {
      try {
        return kr(r), !1;
      } catch {
        return !0;
      }
    }
    function kr(r) {
      return "" + r;
    }
    function Tr(r) {
      if (cn(r))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", an(r)), kr(r);
    }
    var V = P.ReactCurrentOwner, ln = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Or, jr, cr;
    cr = {};
    function sn(r) {
      if (rr.call(r, "ref")) {
        var e = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function un(r) {
      if (rr.call(r, "key")) {
        var e = Object.getOwnPropertyDescriptor(r, "key").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function dn(r, e) {
      if (typeof r.ref == "string" && V.current && e && V.current.stateNode !== e) {
        var t = S(V.current.type);
        cr[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(V.current.type), r.ref), cr[t] = !0);
      }
    }
    function fn(r, e) {
      {
        var t = function() {
          Or || (Or = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function vn(r, e) {
      {
        var t = function() {
          jr || (jr = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var pn = function(r, e, t, o, l, d, i) {
      var a = {
        $$typeof: s,
        type: r,
        key: e,
        ref: t,
        props: i,
        _owner: d
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function bn(r, e, t, o, l) {
      {
        var d, i = {}, a = null, T = null;
        t !== void 0 && (Tr(t), a = "" + t), un(e) && (Tr(e.key), a = "" + e.key), sn(e) && (T = e.ref, dn(e, l));
        for (d in e)
          rr.call(e, d) && !ln.hasOwnProperty(d) && (i[d] = e[d]);
        if (r && r.defaultProps) {
          var m = r.defaultProps;
          for (d in m)
            i[d] === void 0 && (i[d] = m[d]);
        }
        if (a || T) {
          var y = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          a && fn(i, y), T && vn(i, y);
        }
        return pn(r, a, T, l, o, V.current, i);
      }
    }
    var lr = P.ReactCurrentOwner, Pr = P.ReactDebugCurrentFrame;
    function $(r) {
      if (r) {
        var e = r._owner, t = Q(r.type, r._source, e ? e.type : null);
        Pr.setExtraStackFrame(t);
      } else
        Pr.setExtraStackFrame(null);
    }
    var sr;
    sr = !1;
    function ur(r) {
      return typeof r == "object" && r !== null && r.$$typeof === s;
    }
    function Cr() {
      {
        if (lr.current) {
          var r = S(lr.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function hn(r) {
      {
        if (r !== void 0) {
          var e = r.fileName.replace(/^.*[\\\/]/, ""), t = r.lineNumber;
          return `

Check your code at ` + e + ":" + t + ".";
        }
        return "";
      }
    }
    var Sr = {};
    function gn(r) {
      {
        var e = Cr();
        if (!e) {
          var t = typeof r == "string" ? r : r.displayName || r.name;
          t && (e = `

Check the top-level render call using <` + t + ">.");
        }
        return e;
      }
    }
    function Dr(r, e) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var t = gn(e);
        if (Sr[t])
          return;
        Sr[t] = !0;
        var o = "";
        r && r._owner && r._owner !== lr.current && (o = " It was passed a child from " + S(r._owner.type) + "."), $(r), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), $(null);
      }
    }
    function Nr(r, e) {
      {
        if (typeof r != "object")
          return;
        if (ir(r))
          for (var t = 0; t < r.length; t++) {
            var o = r[t];
            ur(o) && Dr(o, e);
          }
        else if (ur(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var l = z(r);
          if (typeof l == "function" && l !== r.entries)
            for (var d = l.call(r), i; !(i = d.next()).done; )
              ur(i.value) && Dr(i.value, e);
        }
      }
    }
    function mn(r) {
      {
        var e = r.type;
        if (e == null || typeof e == "string")
          return;
        var t;
        if (typeof e == "function")
          t = e.propTypes;
        else if (typeof e == "object" && (e.$$typeof === u || e.$$typeof === E))
          t = e.propTypes;
        else
          return;
        if (t) {
          var o = S(e);
          tn(t, r.props, "prop", o, r);
        } else if (e.PropTypes !== void 0 && !sr) {
          sr = !0;
          var l = S(e);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof e.getDefaultProps == "function" && !e.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xn(r) {
      {
        for (var e = Object.keys(r.props), t = 0; t < e.length; t++) {
          var o = e[t];
          if (o !== "children" && o !== "key") {
            $(r), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), $(null);
            break;
          }
        }
        r.ref !== null && ($(r), v("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    function Fr(r, e, t, o, l, d) {
      {
        var i = Hr(r);
        if (!i) {
          var a = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = hn(l);
          T ? a += T : a += Cr();
          var m;
          r === null ? m = "null" : ir(r) ? m = "array" : r !== void 0 && r.$$typeof === s ? (m = "<" + (S(r.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : m = typeof r, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, a);
        }
        var y = bn(r, e, t, l, d);
        if (y == null)
          return y;
        if (i) {
          var j = e.children;
          if (j !== void 0)
            if (o)
              if (ir(j)) {
                for (var I = 0; I < j.length; I++)
                  Nr(j[I], r);
                Object.freeze && Object.freeze(j);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Nr(j, r);
        }
        return r === f ? xn(y) : mn(y), y;
      }
    }
    function yn(r, e, t) {
      return Fr(r, e, t, !0);
    }
    function En(r, e, t) {
      return Fr(r, e, t, !1);
    }
    var wn = En, Rn = yn;
    q.Fragment = f, q.jsx = wn, q.jsxs = Rn;
  }()), q;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = _n() : n.exports = kn();
})(er);
const dr = er.exports.Fragment, p = er.exports.jsx, N = er.exports.jsxs;
var Wr;
(function(n) {
  n.BG = "background", n.BORDER = "border";
})(Wr || (Wr = {}));
var Yr;
(function(n) {
  n.LIGHT = "light", n.DARK = "dark";
})(Yr || (Yr = {}));
var Lr = function(n) {
  var s = n.content, c = n.style, f = n.className, b = f === void 0 ? "" : f;
  return N(Tn, w({
    className: "land-pop ".concat(b),
    style: c
  }, {
    children: [s, p("div", {
      className: "land-pop-arrow"
    })]
  }));
}, Tn = W.div(Mr || (Mr = Y([`
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
`]))), Mr, Nn = function(n) {
  var s = n.text, c = n.subText, f = n.icon, b = n.width, h = n.height, R = n.justify, x = R === void 0 ? "center" : R, u = n.type, _ = u === void 0 ? "border" : u, g = n.status, E = g === void 0 ? "default" : g, O = n.disabled, k = n.pop, F = n.PopProps, C = n.href, z = n.target, P = z === void 0 ? "_blank" : z, v = n.onClick, G = n.style, J = n.className, K = J === void 0 ? "" : J, L = zr(function() {
    if (f) {
      if (!s && !c)
        return !0;
    } else
      return !1;
  }, [f, s, c]), H = zr(function() {
    switch (E) {
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
  }, [E]);
  return p(dr, {
    children: C ? N(On, w({
      href: C,
      target: P,
      className: "land-button ".concat(k ? "hover-pop" : "", " ").concat(K),
      style: G,
      width: b,
      height: h,
      justify: x,
      color: H,
      onClick: function(M) {
        return v == null ? void 0 : v(M);
      }
    }, {
      children: [!L && N("div", {
        children: [p("span", {
          children: s
        }), p("span", w({
          className: "subText"
        }, {
          children: c
        }))]
      }), k && p(Lr, w({
        content: k
      }, F))]
    })) : N(Kr, w({
      className: "land-button ".concat(_, " ").concat(E, " ").concat(L ? "iconOnly" : "", " ").concat(O ? "disabled" : "", " ").concat(k ? "hover-pop" : "", " ").concat(K),
      style: G,
      width: b,
      height: h,
      justify: x,
      color: H,
      onClick: function(M) {
        return v == null ? void 0 : v(M);
      }
    }, {
      children: [!L && N("div", {
        children: [p("span", {
          children: s
        }), c && p("span", w({
          className: "subText"
        }, {
          children: c
        }))]
      }), k && p(Lr, w({
        content: k
      }, F))]
    }))
  });
}, Kr = W.div(Br || (Br = Y([`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: `, `;
  gap: var(--gap-8);
  padding: `, `;
  width: `, `;
  height: `, `;
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
  transition: all var(--transition-15) linear;
  cursor: pointer;
  .subText {
    margin-left: 4px;
    font-size: var(--font-content-small);
    opacity: var(--opacity-68);
  }

  &.text,
  &.border.default {
    &:hover {
      background-color: var(--color-bg-1);
    }
    &:active {
      background-color: var(--color-bg-2);
    }
  }

  &.background {
    color: var(--color-text-white);
    background-color: `, `;
    &.default {
      background-color: var(--color-text-2);
      &:hover {
        background-color: var(--color-text-1);
      }
      &:active {
        background-color: var(--color-text-1);
      }
    }
    &:hover {
      background-color: `, `;
    }
    &:active {
      background-color: `, `;
    }
  }

  &.border {
    padding: 7px 15px;
    border: `, `;
    &.default {
      border-color: var(--color-border-2);
    }
    &:hover {
      background-color: `, `;
    }
    &:active {
      background-color: `, `;
    }
  }

  &.line {
    border-bottom: var(--border-1) solid transparent;
    border-color: `, `;
    border-radius: 0;
    &.default {
      border-color: var(--color-text-2);
    }
    &:hover {
      border-color: `, `;
    }
    &:active {
      border-color: `, `;
    }
  }

  &.iconOnly {
    padding: 0;
    width: 36px;
    height: 36px;
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
  gap: var(--gap-8);
  padding: `, `;
  width: `, `;
  height: `, `;
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
  transition: all var(--transition-15) linear;
  cursor: pointer;
  .subText {
    margin-left: 4px;
    font-size: var(--font-content-small);
    opacity: var(--opacity-68);
  }

  &.text,
  &.border.default {
    &:hover {
      background-color: var(--color-bg-1);
    }
    &:active {
      background-color: var(--color-bg-2);
    }
  }

  &.background {
    color: var(--color-text-white);
    background-color: `, `;
    &.default {
      background-color: var(--color-text-2);
      &:hover {
        background-color: var(--color-text-1);
      }
      &:active {
        background-color: var(--color-text-1);
      }
    }
    &:hover {
      background-color: `, `;
    }
    &:active {
      background-color: `, `;
    }
  }

  &.border {
    padding: 7px 15px;
    border: `, `;
    &.default {
      border-color: var(--color-border-2);
    }
    &:hover {
      background-color: `, `;
    }
    &:active {
      background-color: `, `;
    }
  }

  &.line {
    border-bottom: var(--border-1) solid transparent;
    border-color: `, `;
    border-radius: 0;
    &.default {
      border-color: var(--color-text-2);
    }
    &:hover {
      border-color: `, `;
    }
    &:active {
      border-color: `, `;
    }
  }

  &.iconOnly {
    padding: 0;
    width: 36px;
    height: 36px;
  }
  &.disabled {
    opacity: var(--opacity-68);
    cursor: default;
  }
`])), function(n) {
  return n.justify;
}, function(n) {
  return n.width && n.width !== "100%" ? "" : "var(--padding-medium)";
}, function(n) {
  return n.width ? n.width : "fit-content";
}, function(n) {
  return n.height ? n.height : "fit-content";
}, function(n) {
  return n.color ? "".concat(n.color, "6)") : "var(--color-text-2)";
}, function(n) {
  return n.color ? "".concat(n.color, "5)") : "var(--color-text-3)";
}, function(n) {
  return n.color ? "".concat(n.color, "7)") : "var(--color-text-1)";
}, function(n) {
  return "".concat(n.color, "6)");
}, function(n) {
  return "".concat(n.color, "5)");
}, function(n) {
  return "".concat(n.color, "7)");
}, function(n) {
  return "var(--border-1) solid ".concat(n.color, "4)");
}, function(n) {
  return "".concat(n.color, "1)");
}, function(n) {
  return "".concat(n.color, "2)");
}, function(n) {
  return "".concat(n.color, "4)");
}, function(n) {
  return "".concat(n.color, "5)");
}, function(n) {
  return "".concat(n.color, "7)");
}), On = W.a(Vr || (Vr = Y([`
  `, `;
  text-decoration: none;
`], [`
  `, `;
  text-decoration: none;
`])), Kr), Br, Vr, Fn = function(n) {
  var s = n.direction, c = s === void 0 ? "row" : s, f = n.size, b = f === void 0 ? 1 : f, h = n.lang, R = h === void 0 ? "100%" : h, x = n.margin, u = x === void 0 ? 0 : x, _ = n.type, g = _ === void 0 ? "solid" : _, E = n.color, O = E === void 0 ? "var(--color-border-1)" : E, k = n.content, F = n.align, C = F === void 0 ? "center" : F, z = n.style, P = n.className, v = P === void 0 ? "" : P;
  return N(jn, w({
    className: "land-divider ".concat(v),
    style: w({
      width: c === "row" ? "".concat(R) : "".concat(b, "px"),
      height: c === "column" ? "".concat(R) : "".concat(b, "px"),
      margin: c === "row" ? "".concat(u, "px 0") : "0 ".concat(u, "px")
    }, z),
    direction: c,
    gap: k ? "8px" : ""
  }, {
    children: [p("div", {
      style: {
        flex: C === "left" ? "10%" : C === "right" ? "90%" : 1,
        height: "0px",
        borderBottom: c === "row" ? "".concat(b, "px ").concat(g, " ").concat(O) : "none",
        borderLeft: c === "column" ? "".concat(b, "px ").concat(g, " ").concat(O) : "none"
      }
    }), k && N(dr, {
      children: [p("div", w({
        style: {
          fontSize: "12px",
          color: "#999",
          writingMode: c === "column" ? "vertical-rl" : "unset",
          textOrientation: c === "column" ? "upright" : "unset"
        }
      }, {
        children: k
      })), p("div", {
        style: {
          flex: C === "left" ? "90%" : C === "right" ? "10%" : 1,
          height: "0px",
          borderBottom: c === "row" ? "".concat(b, "px ").concat(g, " ").concat(O) : "none",
          borderLeft: c === "column" ? "".concat(b, "px ").concat(g, " ").concat(O) : "none"
        }
      })]
    })]
  }));
}, jn = W.div(Ur || (Ur = Y([`
  display: flex;
  flex-direction: `, `;
  align-items: center;
  gap: `, `;
`], [`
  display: flex;
  flex-direction: `, `;
  align-items: center;
  gap: `, `;
`])), function(n) {
  return n.direction;
}, function(n) {
  return n.gap;
}), Ur, An = function(n) {
  var s = n.titleData, c = n.data, f = c === void 0 ? [] : c, b = n.style, h = n.className, R = h === void 0 ? "" : h;
  return N(Pn, w({
    className: "land-table ".concat(R),
    style: b
  }, {
    children: [p("thead", {
      children: p("tr", {
        children: s == null ? void 0 : s.map(function(x, u) {
          return p("th", {
            children: x.title
          }, u);
        })
      })
    }), p("tbody", {
      children: f.map(function(x) {
        return p("tr", {
          children: Object.values(x).map(function(u) {
            return p("td", {
              children: u
            });
          })
        });
      })
    })]
  }));
}, Pn = W.table(qr || (qr = Y([`
    border-spacing: 0px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    font-size: var(--font-content-medium);
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
        padding: var(--padding-medium);
        box-sizing: border-box;
        color: #333;
        line-height: 1.5em;
    }
`], [`
    border-spacing: 0px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    font-size: var(--font-content-medium);
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
        padding: var(--padding-medium);
        box-sizing: border-box;
        color: #333;
        line-height: 1.5em;
    }
`]))), qr, zn = function(n) {
  var s = n.title, c = n.type, f = c === void 0 ? "h1" : c, b = n.prefix, h = n.sub, R = n.style, x = n.className, u = x === void 0 ? "" : x, _ = n.onClick;
  return N(Cn, w({
    className: "land-title ".concat(u),
    style: R,
    onClick: function() {
      return _ == null ? void 0 : _();
    }
  }, {
    children: [b && p("span", w({
      className: "land-title-prefix"
    }, {
      children: b
    })), f === "h1" && p("h1", {
      children: s
    }), f === "h2" && p("h2", {
      children: s
    }), f === "h3" && p("h3", {
      children: s
    }), f === "p" && p("p", {
      children: s
    }), h && typeof h == "string" ? p("div", w({
      className: "land-title-sub"
    }, {
      children: h
    })) : p(dr, {
      children: h
    })]
  }));
}, Cn = W.div(Gr || (Gr = Y([`
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
`]))), Gr;
export {
  Nn as Button,
  Fn as Divider,
  Lr as Pop,
  An as Table,
  zn as Title
};
