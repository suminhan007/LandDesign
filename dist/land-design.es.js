import Ce from "react";
var Se = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(h) {
  (function() {
    var T = {}.hasOwnProperty;
    function _() {
      for (var u = "", d = 0; d < arguments.length; d++) {
        var v = arguments[d];
        v && (u = R(u, E(v)));
      }
      return u;
    }
    function E(u) {
      if (typeof u == "string" || typeof u == "number")
        return u;
      if (typeof u != "object")
        return "";
      if (Array.isArray(u))
        return _.apply(null, u);
      if (u.toString !== Object.prototype.toString && !u.toString.toString().includes("[native code]"))
        return u.toString();
      var d = "";
      for (var v in u)
        T.call(u, v) && u[v] && (d = R(d, v));
      return d;
    }
    function R(u, d) {
      return d ? u ? u + " " + d : u + d : u;
    }
    h.exports ? (_.default = _, h.exports = _) : window.classNames = _;
  })();
})(Se);
const sr = Se.exports;
var H = { exports: {} }, $ = {};
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
    return $;
  Re = 1;
  var h = Ce, T = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, R = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(v, f, O) {
    var p, g = {}, P = null, x = null;
    O !== void 0 && (P = "" + O), f.key !== void 0 && (P = "" + f.key), f.ref !== void 0 && (x = f.ref);
    for (p in f)
      E.call(f, p) && !u.hasOwnProperty(p) && (g[p] = f[p]);
    if (v && v.defaultProps)
      for (p in f = v.defaultProps, f)
        g[p] === void 0 && (g[p] = f[p]);
    return { $$typeof: T, type: v, key: P, ref: x, props: g, _owner: R.current };
  }
  return $.Fragment = _, $.jsx = d, $.jsxs = d, $;
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
    var h = Ce, T = Symbol.for("react.element"), _ = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), v = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), X = Symbol.iterator, Pe = "@@iterator";
    function we(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = X && e[X] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var j = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        xe("error", e, t);
      }
    }
    function xe(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var je = !1, ke = !1, De = !1, Fe = !1, Ae = !1, Z;
    Z = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === u || Ae || e === R || e === O || e === p || Fe || e === x || je || ke || De || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === g || e.$$typeof === d || e.$$typeof === v || e.$$typeof === f || e.$$typeof === Z || e.getModuleId !== void 0));
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
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case _:
          return "Portal";
        case u:
          return "Profiler";
        case R:
          return "StrictMode";
        case O:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return Q(r) + ".Consumer";
          case d:
            var t = e;
            return Q(t._context) + ".Provider";
          case f:
            return Ie(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : C(e.type) || "Memo";
          case P: {
            var i = e, s = i._payload, o = i._init;
            try {
              return C(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, F = 0, ee, re, te, ne, ae, oe, ie;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function Ne() {
      {
        if (F === 0) {
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
        F++;
      }
    }
    function We() {
      {
        if (F--, F === 0) {
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
        F < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = j.ReactCurrentDispatcher, U;
    function N(e, r, t) {
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
    var z = !1, W;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      W = new Ye();
    }
    function se(e, r) {
      if (!e || z)
        return "";
      {
        var t = W.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      z = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = M.current, M.current = null, Ne();
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
            } catch (S) {
              n = S;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (S) {
              n = S;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            n = S;
          }
          e();
        }
      } catch (S) {
        if (S && n && typeof S.stack == "string") {
          for (var a = S.stack.split(`
`), m = n.stack.split(`
`), l = a.length - 1, c = m.length - 1; l >= 1 && c >= 0 && a[l] !== m[c]; )
            c--;
          for (; l >= 1 && c >= 0; l--, c--)
            if (a[l] !== m[c]) {
              if (l !== 1 || c !== 1)
                do
                  if (l--, c--, c < 0 || a[l] !== m[c]) {
                    var y = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && W.set(e, y), y;
                  }
                while (l >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        z = !1, M.current = s, We(), Error.prepareStackTrace = i;
      }
      var D = e ? e.displayName || e.name : "", Ee = D ? N(D) : "";
      return typeof e == "function" && W.set(e, Ee), Ee;
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
        return N(e);
      switch (e) {
        case O:
          return N("Suspense");
        case p:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Le(e.render);
          case g:
            return Y(e.type, r, t);
          case P: {
            var n = e, i = n._payload, s = n._init;
            try {
              return Y(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, le = {}, fe = j.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        fe.setExtraStackFrame(t);
      } else
        fe.setExtraStackFrame(null);
    }
    function Me(e, r, t, n, i) {
      {
        var s = Function.call.bind(L);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var m = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (V(i), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), V(null)), a instanceof Error && !(a.message in le) && (le[a.message] = !0, V(i), b("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var Ue = Array.isArray;
    function B(e) {
      return Ue(e);
    }
    function ze(e) {
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
    function de(e) {
      if (Be(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), ce(e);
    }
    var A = j.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ve, pe, q;
    q = {};
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
    function Ke(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var t = C(A.current.type);
        q[t] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(A.current.type), e.ref), q[t] = !0);
      }
    }
    function He(e, r) {
      {
        var t = function() {
          ve || (ve = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          pe || (pe = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ze = function(e, r, t, n, i, s, o) {
      var a = {
        $$typeof: T,
        type: e,
        key: r,
        ref: t,
        props: o,
        _owner: s
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
    function Qe(e, r, t, n, i) {
      {
        var s, o = {}, a = null, m = null;
        t !== void 0 && (de(t), a = "" + t), Ge(r) && (de(r.key), a = "" + r.key), Je(r) && (m = r.ref, Ke(r, i));
        for (s in r)
          L.call(r, s) && !qe.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (s in l)
            o[s] === void 0 && (o[s] = l[s]);
        }
        if (a || m) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(o, c), m && Xe(o, c);
        }
        return Ze(e, a, m, i, n, A.current, o);
      }
    }
    var J = j.ReactCurrentOwner, be = j.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var G;
    G = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === T;
    }
    function me() {
      {
        if (J.current) {
          var e = C(J.current.type);
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
    var _e = {};
    function rr(e) {
      {
        var r = me();
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
        var t = rr(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== J.current && (n = " It was passed a child from " + C(e._owner.type) + "."), k(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function he(e, r) {
      {
        if (typeof e != "object")
          return;
        if (B(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && ye(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = we(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              K(o.value) && ye(o.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === f || r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = C(r);
          Me(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !G) {
          G = !0;
          var i = C(r);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function ge(e, r, t, n, i, s) {
      {
        var o = $e(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = er(i);
          m ? a += m : a += me();
          var l;
          e === null ? l = "null" : B(e) ? l = "array" : e !== void 0 && e.$$typeof === T ? (l = "<" + (C(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var c = Qe(e, r, t, i, s);
        if (c == null)
          return c;
        if (o) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (B(y)) {
                for (var D = 0; D < y.length; D++)
                  he(y[D], e);
                Object.freeze && Object.freeze(y);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              he(y, e);
        }
        return e === E ? nr(c) : tr(c), c;
      }
    }
    function ar(e, r, t) {
      return ge(e, r, t, !0);
    }
    function or(e, r, t) {
      return ge(e, r, t, !1);
    }
    var ir = or, ur = ar;
    I.Fragment = E, I.jsx = ir, I.jsxs = ur;
  }()), I;
}
(function(h) {
  process.env.NODE_ENV === "production" ? h.exports = lr() : h.exports = fr();
})(H);
const Oe = H.exports.jsx, cr = H.exports.jsxs;
function dr(h) {
  const {
    style: T,
    className: _,
    children: E,
    type: R,
    size: u,
    round: d,
    icon: v,
    loading: f,
    disabled: O,
    onClick: p
  } = h, g = sr({
    mzl_btn: !0,
    [`mzl_btn_${R}`]: !0,
    [`mzl_btn_${u}`]: !0,
    mzl_btn_round: d,
    mzl_btn_loading: f,
    [`mzl_btn_disabled mzl_btn_disabled_${R}`]: O,
    [_ || ""]: !!_
  });
  return /* @__PURE__ */ cr("button", {
    className: g,
    style: T || void 0,
    disabled: O,
    onClick: (x) => {
      p && !f && p(x);
    },
    children: [f ? /* @__PURE__ */ Oe("span", {
      className: ["m-icon-loading1", "mzl_publicRotateEle"].join(" ")
    }) : null, v && !f ? /* @__PURE__ */ Oe("span", {
      className: v
    }) : null, E]
  });
}
dr.defaultProps = {
  style: "",
  className: "",
  children: null,
  type: "default",
  size: "medium",
  round: !1,
  icon: "",
  loading: !1,
  disabled: !1,
  onClick: () => {
  }
};
export {
  dr as Button
};
