import Te, { forwardRef as sr } from "react";
var H = function() {
  return H = Object.assign || function(l) {
    for (var v, a = 1, p = arguments.length; a < p; a++) {
      v = arguments[a];
      for (var _ in v)
        Object.prototype.hasOwnProperty.call(v, _) && (l[_] = v[_]);
    }
    return l;
  }, H.apply(this, arguments);
};
function fr(i, l) {
  var v = {};
  for (var a in i)
    Object.prototype.hasOwnProperty.call(i, a) && l.indexOf(a) < 0 && (v[a] = i[a]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var p = 0, a = Object.getOwnPropertySymbols(i); p < a.length; p++)
      l.indexOf(a[p]) < 0 && Object.prototype.propertyIsEnumerable.call(i, a[p]) && (v[a[p]] = i[a[p]]);
  return v;
}
var we = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re;
function lr() {
  if (Re)
    return A;
  Re = 1;
  var i = Te, l = Symbol.for("react.element"), v = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, p = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(w, g, S) {
    var m, E = {}, P = null, $ = null;
    S !== void 0 && (P = "" + S), g.key !== void 0 && (P = "" + g.key), g.ref !== void 0 && ($ = g.ref);
    for (m in g)
      a.call(g, m) && !_.hasOwnProperty(m) && (E[m] = g[m]);
    if (w && w.defaultProps)
      for (m in g = w.defaultProps, g)
        E[m] === void 0 && (E[m] = g[m]);
    return { $$typeof: l, type: w, key: P, ref: $, props: E, _owner: p.current };
  }
  return A.Fragment = v, A.jsx = T, A.jsxs = T, A;
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
var Oe;
function cr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Te, l = Symbol.for("react.element"), v = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), w = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), X = Symbol.iterator, Ce = "@@iterator";
    function Se(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = X && e[X] || e[Ce];
      return typeof r == "function" ? r : null;
    }
    var j = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        je("error", e, t);
      }
    }
    function je(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var f = t.map(function(u) {
          return String(u);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var xe = !1, ke = !1, De = !1, Fe = !1, Ae = !1, Z;
    Z = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === _ || Ae || e === p || e === S || e === m || Fe || e === $ || xe || ke || De || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === E || e.$$typeof === T || e.$$typeof === w || e.$$typeof === g || e.$$typeof === Z || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function Q(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case v:
          return "Portal";
        case _:
          return "Profiler";
        case p:
          return "StrictMode";
        case S:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var r = e;
            return Q(r) + ".Consumer";
          case T:
            var t = e;
            return Q(t._context) + ".Provider";
          case g:
            return $e(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : R(e.type) || "Memo";
          case P: {
            var s = e, f = s._payload, u = s._init;
            try {
              return R(u(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, D = 0, ee, re, te, ne, ae, oe, ie;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function We() {
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
    function Ne() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: ee
            }),
            info: C({}, e, {
              value: re
            }),
            warn: C({}, e, {
              value: te
            }),
            error: C({}, e, {
              value: ne
            }),
            group: C({}, e, {
              value: ae
            }),
            groupCollapsed: C({}, e, {
              value: oe
            }),
            groupEnd: C({}, e, {
              value: ie
            })
          });
        }
        D < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = j.ReactCurrentDispatcher, U;
    function W(e, r, t) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            U = n && n[1] || "";
          }
        return `
` + U + e;
      }
    }
    var B = !1, N;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Ye();
    }
    function se(e, r) {
      if (!e || B)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = M.current, M.current = null, We();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (O) {
              n = O;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (O) {
              n = O;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            n = O;
          }
          e();
        }
      } catch (O) {
        if (O && n && typeof O.stack == "string") {
          for (var o = O.stack.split(`
`), b = n.stack.split(`
`), c = o.length - 1, d = b.length - 1; c >= 1 && d >= 0 && o[c] !== b[d]; )
            d--;
          for (; c >= 1 && d >= 0; c--, d--)
            if (o[c] !== b[d]) {
              if (c !== 1 || d !== 1)
                do
                  if (c--, d--, d < 0 || o[c] !== b[d]) {
                    var h = `
` + o[c].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, h), h;
                  }
                while (c >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        B = !1, M.current = f, Ne(), Error.prepareStackTrace = s;
      }
      var k = e ? e.displayName || e.name : "", Ee = k ? W(k) : "";
      return typeof e == "function" && N.set(e, Ee), Ee;
    }
    function Le(e, r, t) {
      return se(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return se(e, Ve(e));
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
          case g:
            return Le(e.render);
          case E:
            return Y(e.type, r, t);
          case P: {
            var n = e, s = n._payload, f = n._init;
            try {
              return Y(f(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, fe = {}, le = j.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        le.setExtraStackFrame(t);
      } else
        le.setExtraStackFrame(null);
    }
    function Me(e, r, t, n, s) {
      {
        var f = Function.call.bind(L);
        for (var u in e)
          if (f(e, u)) {
            var o = void 0;
            try {
              if (typeof e[u] != "function") {
                var b = Error((n || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              o = e[u](r, u, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              o = c;
            }
            o && !(o instanceof Error) && (V(s), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, u, typeof o), V(null)), o instanceof Error && !(o.message in fe) && (fe[o.message] = !0, V(s), y("Failed %s type: %s", t, o.message), V(null));
          }
      }
    }
    var Ue = Array.isArray;
    function q(e) {
      return Ue(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
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
      if (qe(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), ce(e);
    }
    var F = j.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, de, pe, J;
    J = {};
    function Ge(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ke(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = R(F.current.type);
        J[t] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(F.current.type), e.ref), J[t] = !0);
      }
    }
    function He(e, r) {
      {
        var t = function() {
          de || (de = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          pe || (pe = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ze = function(e, r, t, n, s, f, u) {
      var o = {
        $$typeof: l,
        type: e,
        key: r,
        ref: t,
        props: u,
        _owner: f
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function Qe(e, r, t, n, s) {
      {
        var f, u = {}, o = null, b = null;
        t !== void 0 && (ve(t), o = "" + t), ze(r) && (ve(r.key), o = "" + r.key), Ge(r) && (b = r.ref, Ke(r, s));
        for (f in r)
          L.call(r, f) && !Je.hasOwnProperty(f) && (u[f] = r[f]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (f in c)
            u[f] === void 0 && (u[f] = c[f]);
        }
        if (o || b) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && He(u, d), b && Xe(u, d);
        }
        return Ze(e, o, b, s, n, F.current, u);
      }
    }
    var G = j.ReactCurrentOwner, ge = j.ReactDebugCurrentFrame;
    function x(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function ye() {
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
    function er(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var be = {};
    function rr(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function me(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = rr(r);
        if (be[t])
          return;
        be[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + R(e._owner.type) + "."), x(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), x(null);
      }
    }
    function he(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && me(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = Se(e);
          if (typeof s == "function" && s !== e.entries)
            for (var f = s.call(e), u; !(u = f.next()).done; )
              K(u.value) && me(u.value, r);
        }
      }
    }
    function tr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === g || r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = R(r);
          Me(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var s = R(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            x(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), x(null);
            break;
          }
        }
        e.ref !== null && (x(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), x(null));
      }
    }
    function _e(e, r, t, n, s, f) {
      {
        var u = Ie(e);
        if (!u) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = er(s);
          b ? o += b : o += ye();
          var c;
          e === null ? c = "null" : q(e) ? c = "array" : e !== void 0 && e.$$typeof === l ? (c = "<" + (R(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, o);
        }
        var d = Qe(e, r, t, s, f);
        if (d == null)
          return d;
        if (u) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (q(h)) {
                for (var k = 0; k < h.length; k++)
                  he(h[k], e);
                Object.freeze && Object.freeze(h);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              he(h, e);
        }
        return e === a ? nr(d) : tr(d), d;
      }
    }
    function ar(e, r, t) {
      return _e(e, r, t, !0);
    }
    function or(e, r, t) {
      return _e(e, r, t, !1);
    }
    var ir = or, ur = ar;
    I.Fragment = a, I.jsx = ir, I.jsxs = ur;
  }()), I;
}
(function(i) {
  process.env.NODE_ENV === "production" ? i.exports = lr() : i.exports = cr();
})(we);
const vr = we.exports.jsx;
function Pe(i) {
  var l, v, a = "";
  if (typeof i == "string" || typeof i == "number")
    a += i;
  else if (typeof i == "object")
    if (Array.isArray(i))
      for (l = 0; l < i.length; l++)
        i[l] && (v = Pe(i[l])) && (a && (a += " "), a += v);
    else
      for (l in i)
        i[l] && (a && (a += " "), a += l);
  return a;
}
function dr() {
  for (var i, l, v = 0, a = ""; v < arguments.length; )
    (i = arguments[v++]) && (l = Pe(i)) && (a && (a += " "), a += l);
  return a;
}
var pr = function(i, l) {
  var v = i.className, a = i.style, p = i.children, _ = i.color, T = fr(i, ["className", "style", "children", "color"]);
  return vr("div", H({
    ref: l,
    style: a
  }, T, {
    className: dr(v, "s-tag", "s-tag-".concat(_))
  }, {
    children: p
  }));
}, gr = sr(pr);
gr.displayName = "Tag";
export {
  gr as Tag
};
