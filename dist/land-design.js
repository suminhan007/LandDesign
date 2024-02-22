import Oe, { forwardRef as ur } from "react";
var H = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function sr() {
  if (_e)
    return A;
  _e = 1;
  var c = Oe, v = Symbol.for("react.element"), d = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, h = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(O, p, S) {
    var m, E = {}, C = null, $ = null;
    S !== void 0 && (C = "" + S), p.key !== void 0 && (C = "" + p.key), p.ref !== void 0 && ($ = p.ref);
    for (m in p)
      s.call(p, m) && !P.hasOwnProperty(m) && (E[m] = p[m]);
    if (O && O.defaultProps)
      for (m in p = O.defaultProps, p)
        E[m] === void 0 && (E[m] = p[m]);
    return { $$typeof: v, type: O, key: C, ref: $, props: E, _owner: h.current };
  }
  return A.Fragment = d, A.jsx = T, A.jsxs = T, A;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function fr() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    var c = Oe, v = Symbol.for("react.element"), d = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), O = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), X = Symbol.iterator, we = "@@iterator";
    function Pe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = X && e[X] || e[we];
      return typeof r == "function" ? r : null;
    }
    var x = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Se("error", e, t);
      }
    }
    function Se(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var xe = !1, je = !1, ke = !1, De = !1, Fe = !1, Z;
    Z = Symbol.for("react.module.reference");
    function Ae(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === P || Fe || e === h || e === S || e === m || De || e === $ || xe || je || ke || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === E || e.$$typeof === T || e.$$typeof === O || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Z || e.getModuleId !== void 0));
    }
    function Ie(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function Q(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case d:
          return "Portal";
        case P:
          return "Profiler";
        case h:
          return "StrictMode";
        case S:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case O:
            var r = e;
            return Q(r) + ".Consumer";
          case T:
            var t = e;
            return Q(t._context) + ".Provider";
          case p:
            return Ie(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : R(e.type) || "Memo";
          case C: {
            var i = e, u = i._payload, o = i._init;
            try {
              return R(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, D = 0, ee, re, te, ne, ae, oe, ie;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function $e() {
      {
        if (D === 0) {
          ee = console.log, re = console.info, te = console.warn, ne = console.error, ae = console.group, oe = console.groupCollapsed, ie = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ue,
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
        D++;
      }
    }
    function We() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: ee
            }),
            info: w({}, e, {
              value: re
            }),
            warn: w({}, e, {
              value: te
            }),
            error: w({}, e, {
              value: ne
            }),
            group: w({}, e, {
              value: ae
            }),
            groupCollapsed: w({}, e, {
              value: oe
            }),
            groupEnd: w({}, e, {
              value: ie
            })
          });
        }
        D < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = x.ReactCurrentDispatcher, U;
    function W(e, r, t) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            U = n && n[1] || "";
          }
        return `
` + U + e;
      }
    }
    var B = !1, Y;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Ye();
    }
    function se(e, r) {
      if (!e || B)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = M.current, M.current = null, $e();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (_) {
              n = _;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (_) {
              n = _;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            n = _;
          }
          e();
        }
      } catch (_) {
        if (_ && n && typeof _.stack == "string") {
          for (var a = _.stack.split(`
`), b = n.stack.split(`
`), f = a.length - 1, l = b.length - 1; f >= 1 && l >= 0 && a[f] !== b[l]; )
            l--;
          for (; f >= 1 && l >= 0; f--, l--)
            if (a[f] !== b[l]) {
              if (f !== 1 || l !== 1)
                do
                  if (f--, l--, l < 0 || a[f] !== b[l]) {
                    var y = `
` + a[f].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, y), y;
                  }
                while (f >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        B = !1, M.current = u, We(), Error.prepareStackTrace = i;
      }
      var k = e ? e.displayName || e.name : "", Re = k ? W(k) : "";
      return typeof e == "function" && Y.set(e, Re), Re;
    }
    function Ne(e, r, t) {
      return se(e, !1);
    }
    function Le(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function N(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return se(e, Le(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case S:
          return W("Suspense");
        case m:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Ne(e.render);
          case E:
            return N(e.type, r, t);
          case C: {
            var n = e, i = n._payload, u = n._init;
            try {
              return N(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, fe = {}, le = x.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        le.setExtraStackFrame(t);
      } else
        le.setExtraStackFrame(null);
    }
    function Ve(e, r, t, n, i) {
      {
        var u = Function.call.bind(L);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var b = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (V(i), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), V(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, V(i), g("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var Me = Array.isArray;
    function q(e) {
      return Me(e);
    }
    function Ue(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Be(e) {
      try {
        return ce(e), !1;
      } catch {
        return !0;
      }
    }
    function ce(e) {
      return "" + e;
    }
    function ve(e) {
      if (Be(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ue(e)), ce(e);
    }
    var F = x.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, de, pe, J;
    J = {};
    function Je(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ze(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = R(F.current.type);
        J[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(F.current.type), e.ref), J[t] = !0);
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          de || (de = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function He(e, r) {
      {
        var t = function() {
          pe || (pe = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Xe = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
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
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Ze(e, r, t, n, i) {
      {
        var u, o = {}, a = null, b = null;
        t !== void 0 && (ve(t), a = "" + t), Ge(r) && (ve(r.key), a = "" + r.key), Je(r) && (b = r.ref, ze(r, i));
        for (u in r)
          L.call(r, u) && !qe.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (u in f)
            o[u] === void 0 && (o[u] = f[u]);
        }
        if (a || b) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ke(o, l), b && He(o, l);
        }
        return Xe(e, a, b, i, n, F.current, o);
      }
    }
    var G = x.ReactCurrentOwner, ge = x.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === v;
    }
    function be() {
      {
        if (G.current) {
          var e = R(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Qe(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var me = {};
    function er(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = er(r);
        if (me[t])
          return;
        me[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + R(e._owner.type) + "."), j(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), j(null);
      }
    }
    function he(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && ye(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Pe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              K(o.value) && ye(o.value, r);
        }
      }
    }
    function rr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = R(r);
          Ve(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var i = R(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            j(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function Ee(e, r, t, n, i, u) {
      {
        var o = Ae(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = Qe(i);
          b ? a += b : a += be();
          var f;
          e === null ? f = "null" : q(e) ? f = "array" : e !== void 0 && e.$$typeof === v ? (f = "<" + (R(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var l = Ze(e, r, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (q(y)) {
                for (var k = 0; k < y.length; k++)
                  he(y[k], e);
                Object.freeze && Object.freeze(y);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              he(y, e);
        }
        return e === s ? tr(l) : rr(l), l;
      }
    }
    function nr(e, r, t) {
      return Ee(e, r, t, !0);
    }
    function ar(e, r, t) {
      return Ee(e, r, t, !1);
    }
    var or = ar, ir = nr;
    I.Fragment = s, I.jsx = or, I.jsxs = ir;
  }()), I;
}
process.env.NODE_ENV === "production" ? H.exports = sr() : H.exports = fr();
var lr = H.exports;
function Ce(c) {
  var v, d, s = "";
  if (typeof c == "string" || typeof c == "number")
    s += c;
  else if (typeof c == "object")
    if (Array.isArray(c)) {
      var h = c.length;
      for (v = 0; v < h; v++)
        c[v] && (d = Ce(c[v])) && (s && (s += " "), s += d);
    } else
      for (d in c)
        c[d] && (s && (s += " "), s += d);
  return s;
}
function cr() {
  for (var c, v, d = 0, s = "", h = arguments.length; d < h; d++)
    (c = arguments[d]) && (v = Ce(c)) && (s && (s += " "), s += v);
  return s;
}
const vr = (c, v) => {
  const { className: d, style: s, children: h, color: P, ...T } = c;
  return /* @__PURE__ */ lr.jsxs(
    "div",
    {
      ref: v,
      style: s,
      ...T,
      className: cr(d, "s-button", `s-button-${P}`),
      children: [
        h,
        "Land Design Button Bingo!"
      ]
    }
  );
}, dr = ur(vr);
dr.displayName = "Button";
export {
  dr as Button
};
