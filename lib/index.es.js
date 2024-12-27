import De, { useRef as re, useDebugValue as Xn, createElement as is, useContext as cs, useMemo as te, useState as A, useEffect as J, Fragment as Cn, useCallback as an } from "react";
var o = { exports: {} }, ir = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qn;
function ls() {
  if (Qn)
    return ir;
  Qn = 1;
  var e = De, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(c, l, u) {
    var p, x = {}, g = null, v = null;
    u !== void 0 && (g = "" + u), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (p in l)
      t.call(l, p) && !a.hasOwnProperty(p) && (x[p] = l[p]);
    if (c && c.defaultProps)
      for (p in l = c.defaultProps, l)
        x[p] === void 0 && (x[p] = l[p]);
    return { $$typeof: r, type: c, key: g, ref: v, props: x, _owner: s.current };
  }
  return ir.Fragment = n, ir.jsx = i, ir.jsxs = i, ir;
}
var cr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wn;
function ds() {
  return Wn || (Wn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = De, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), h = Symbol.iterator, L = "@@iterator";
    function f(d) {
      if (d === null || typeof d != "object")
        return null;
      var b = h && d[h] || d[L];
      return typeof b == "function" ? b : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(d) {
      {
        for (var b = arguments.length, N = new Array(b > 1 ? b - 1 : 0), R = 1; R < b; R++)
          N[R - 1] = arguments[R];
        y("error", d, N);
      }
    }
    function y(d, b, N) {
      {
        var R = w.ReactDebugCurrentFrame, U = R.getStackAddendum();
        U !== "" && (b += "%s", N = N.concat([U]));
        var Y = N.map(function(_) {
          return String(_);
        });
        Y.unshift("Warning: " + b), Function.prototype.apply.call(console[d], console, Y);
      }
    }
    var $ = !1, M = !1, k = !1, S = !1, Z = !1, F;
    F = Symbol.for("react.module.reference");
    function q(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === t || d === a || Z || d === s || d === u || d === p || S || d === v || $ || M || k || typeof d == "object" && d !== null && (d.$$typeof === g || d.$$typeof === x || d.$$typeof === i || d.$$typeof === c || d.$$typeof === l || d.$$typeof === F || d.getModuleId !== void 0));
    }
    function ie(d, b, N) {
      var R = d.displayName;
      if (R)
        return R;
      var U = b.displayName || b.name || "";
      return U !== "" ? N + "(" + U + ")" : N;
    }
    function H(d) {
      return d.displayName || "Context";
    }
    function O(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case t:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case s:
          return "StrictMode";
        case u:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case c:
            var b = d;
            return H(b) + ".Consumer";
          case i:
            var N = d;
            return H(N._context) + ".Provider";
          case l:
            return ie(d, d.render, "ForwardRef");
          case x:
            var R = d.displayName || null;
            return R !== null ? R : O(d.type) || "Memo";
          case g: {
            var U = d, Y = U._payload, _ = U._init;
            try {
              return O(_(Y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, z = 0, I, D, ge, ue, $e, Ne, se;
    function Ze() {
    }
    Ze.__reactDisabledLog = !0;
    function tr() {
      {
        if (z === 0) {
          I = console.log, D = console.info, ge = console.warn, ue = console.error, $e = console.group, Ne = console.groupCollapsed, se = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: Ze,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        z++;
      }
    }
    function Ue() {
      {
        if (z--, z === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, d, {
              value: I
            }),
            info: K({}, d, {
              value: D
            }),
            warn: K({}, d, {
              value: ge
            }),
            error: K({}, d, {
              value: ue
            }),
            group: K({}, d, {
              value: $e
            }),
            groupCollapsed: K({}, d, {
              value: Ne
            }),
            groupEnd: K({}, d, {
              value: se
            })
          });
        }
        z < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ke = w.ReactCurrentDispatcher, Se;
    function je(d, b, N) {
      {
        if (Se === void 0)
          try {
            throw Error();
          } catch (U) {
            var R = U.stack.trim().match(/\n( *(at )?)/);
            Se = R && R[1] || "";
          }
        return `
` + Se + d;
      }
    }
    var me = !1, He;
    {
      var Pe = typeof WeakMap == "function" ? WeakMap : Map;
      He = new Pe();
    }
    function ve(d, b) {
      if (!d || me)
        return "";
      {
        var N = He.get(d);
        if (N !== void 0)
          return N;
      }
      var R;
      me = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Y;
      Y = ke.current, ke.current = null, tr();
      try {
        if (b) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (ce) {
              R = ce;
            }
            Reflect.construct(d, [], _);
          } else {
            try {
              _.call();
            } catch (ce) {
              R = ce;
            }
            d.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ce) {
            R = ce;
          }
          d();
        }
      } catch (ce) {
        if (ce && R && typeof ce.stack == "string") {
          for (var T = ce.stack.split(`
`), ae = R.stack.split(`
`), Q = T.length - 1, W = ae.length - 1; Q >= 1 && W >= 0 && T[Q] !== ae[W]; )
            W--;
          for (; Q >= 1 && W >= 0; Q--, W--)
            if (T[Q] !== ae[W]) {
              if (Q !== 1 || W !== 1)
                do
                  if (Q--, W--, W < 0 || T[Q] !== ae[W]) {
                    var xe = `
` + T[Q].replace(" at new ", " at ");
                    return d.displayName && xe.includes("<anonymous>") && (xe = xe.replace("<anonymous>", d.displayName)), typeof d == "function" && He.set(d, xe), xe;
                  }
                while (Q >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        me = !1, ke.current = Y, Ue(), Error.prepareStackTrace = U;
      }
      var ze = d ? d.displayName || d.name : "", Ie = ze ? je(ze) : "";
      return typeof d == "function" && He.set(d, Ie), Ie;
    }
    function Tt(d, b, N) {
      return ve(d, !1);
    }
    function Ot(d) {
      var b = d.prototype;
      return !!(b && b.isReactComponent);
    }
    function hr(d, b, N) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return ve(d, Ot(d));
      if (typeof d == "string")
        return je(d);
      switch (d) {
        case u:
          return je("Suspense");
        case p:
          return je("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case l:
            return Tt(d.render);
          case x:
            return hr(d.type, b, N);
          case g: {
            var R = d, U = R._payload, Y = R._init;
            try {
              return hr(Y(U), b, N);
            } catch {
            }
          }
        }
      return "";
    }
    var sr = Object.prototype.hasOwnProperty, On = {}, Dn = w.ReactDebugCurrentFrame;
    function fr(d) {
      if (d) {
        var b = d._owner, N = hr(d.type, d._source, b ? b.type : null);
        Dn.setExtraStackFrame(N);
      } else
        Dn.setExtraStackFrame(null);
    }
    function Dt(d, b, N, R, U) {
      {
        var Y = Function.call.bind(sr);
        for (var _ in d)
          if (Y(d, _)) {
            var T = void 0;
            try {
              if (typeof d[_] != "function") {
                var ae = Error((R || "React class") + ": " + N + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ae.name = "Invariant Violation", ae;
              }
              T = d[_](b, _, R, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Q) {
              T = Q;
            }
            T && !(T instanceof Error) && (fr(U), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", N, _, typeof T), fr(null)), T instanceof Error && !(T.message in On) && (On[T.message] = !0, fr(U), m("Failed %s type: %s", N, T.message), fr(null));
          }
      }
    }
    var _t = Array.isArray;
    function zr(d) {
      return _t(d);
    }
    function Ft(d) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, N = b && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return N;
      }
    }
    function Zt(d) {
      try {
        return _n(d), !1;
      } catch {
        return !0;
      }
    }
    function _n(d) {
      return "" + d;
    }
    function Fn(d) {
      if (Zt(d))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ft(d)), _n(d);
    }
    var ar = w.ReactCurrentOwner, Ut = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Zn, Un, Yr;
    Yr = {};
    function Pt(d) {
      if (sr.call(d, "ref")) {
        var b = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function qt(d) {
      if (sr.call(d, "key")) {
        var b = Object.getOwnPropertyDescriptor(d, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function zt(d, b) {
      if (typeof d.ref == "string" && ar.current && b && ar.current.stateNode !== b) {
        var N = O(ar.current.type);
        Yr[N] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(ar.current.type), d.ref), Yr[N] = !0);
      }
    }
    function Yt(d, b) {
      {
        var N = function() {
          Zn || (Zn = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        N.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: N,
          configurable: !0
        });
      }
    }
    function Gt(d, b) {
      {
        var N = function() {
          Un || (Un = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        N.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: N,
          configurable: !0
        });
      }
    }
    var Jt = function(d, b, N, R, U, Y, _) {
      var T = {
        $$typeof: r,
        type: d,
        key: b,
        ref: N,
        props: _,
        _owner: Y
      };
      return T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(T, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.defineProperty(T, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    };
    function Kt(d, b, N, R, U) {
      {
        var Y, _ = {}, T = null, ae = null;
        N !== void 0 && (Fn(N), T = "" + N), qt(b) && (Fn(b.key), T = "" + b.key), Pt(b) && (ae = b.ref, zt(b, U));
        for (Y in b)
          sr.call(b, Y) && !Ut.hasOwnProperty(Y) && (_[Y] = b[Y]);
        if (d && d.defaultProps) {
          var Q = d.defaultProps;
          for (Y in Q)
            _[Y] === void 0 && (_[Y] = Q[Y]);
        }
        if (T || ae) {
          var W = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          T && Yt(_, W), ae && Gt(_, W);
        }
        return Jt(d, T, ae, U, R, ar.current, _);
      }
    }
    var Gr = w.ReactCurrentOwner, Pn = w.ReactDebugCurrentFrame;
    function qe(d) {
      if (d) {
        var b = d._owner, N = hr(d.type, d._source, b ? b.type : null);
        Pn.setExtraStackFrame(N);
      } else
        Pn.setExtraStackFrame(null);
    }
    var Jr;
    Jr = !1;
    function Kr(d) {
      return typeof d == "object" && d !== null && d.$$typeof === r;
    }
    function qn() {
      {
        if (Gr.current) {
          var d = O(Gr.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function Xt(d) {
      {
        if (d !== void 0) {
          var b = d.fileName.replace(/^.*[\\\/]/, ""), N = d.lineNumber;
          return `

Check your code at ` + b + ":" + N + ".";
        }
        return "";
      }
    }
    var zn = {};
    function Qt(d) {
      {
        var b = qn();
        if (!b) {
          var N = typeof d == "string" ? d : d.displayName || d.name;
          N && (b = `

Check the top-level render call using <` + N + ">.");
        }
        return b;
      }
    }
    function Yn(d, b) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var N = Qt(b);
        if (zn[N])
          return;
        zn[N] = !0;
        var R = "";
        d && d._owner && d._owner !== Gr.current && (R = " It was passed a child from " + O(d._owner.type) + "."), qe(d), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, R), qe(null);
      }
    }
    function Gn(d, b) {
      {
        if (typeof d != "object")
          return;
        if (zr(d))
          for (var N = 0; N < d.length; N++) {
            var R = d[N];
            Kr(R) && Yn(R, b);
          }
        else if (Kr(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var U = f(d);
          if (typeof U == "function" && U !== d.entries)
            for (var Y = U.call(d), _; !(_ = Y.next()).done; )
              Kr(_.value) && Yn(_.value, b);
        }
      }
    }
    function Wt(d) {
      {
        var b = d.type;
        if (b == null || typeof b == "string")
          return;
        var N;
        if (typeof b == "function")
          N = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === l || b.$$typeof === x))
          N = b.propTypes;
        else
          return;
        if (N) {
          var R = O(b);
          Dt(N, d.props, "prop", R, d);
        } else if (b.PropTypes !== void 0 && !Jr) {
          Jr = !0;
          var U = O(b);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function es(d) {
      {
        for (var b = Object.keys(d.props), N = 0; N < b.length; N++) {
          var R = b[N];
          if (R !== "children" && R !== "key") {
            qe(d), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), qe(null);
            break;
          }
        }
        d.ref !== null && (qe(d), m("Invalid attribute `ref` supplied to `React.Fragment`."), qe(null));
      }
    }
    var Jn = {};
    function Kn(d, b, N, R, U, Y) {
      {
        var _ = q(d);
        if (!_) {
          var T = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ae = Xt(U);
          ae ? T += ae : T += qn();
          var Q;
          d === null ? Q = "null" : zr(d) ? Q = "array" : d !== void 0 && d.$$typeof === r ? (Q = "<" + (O(d.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : Q = typeof d, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Q, T);
        }
        var W = Kt(d, b, N, U, Y);
        if (W == null)
          return W;
        if (_) {
          var xe = b.children;
          if (xe !== void 0)
            if (R)
              if (zr(xe)) {
                for (var ze = 0; ze < xe.length; ze++)
                  Gn(xe[ze], d);
                Object.freeze && Object.freeze(xe);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Gn(xe, d);
        }
        if (sr.call(b, "key")) {
          var Ie = O(d), ce = Object.keys(b).filter(function(as) {
            return as !== "key";
          }), Xr = ce.length > 0 ? "{key: someKey, " + ce.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Jn[Ie + Xr]) {
            var ss = ce.length > 0 ? "{" + ce.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Xr, Ie, ss, Ie), Jn[Ie + Xr] = !0;
          }
        }
        return d === t ? es(W) : Wt(W), W;
      }
    }
    function rs(d, b, N) {
      return Kn(d, b, N, !0);
    }
    function ns(d, b, N) {
      return Kn(d, b, N, !1);
    }
    var os = ns, ts = rs;
    cr.Fragment = t, cr.jsx = os, cr.jsxs = ts;
  }()), cr;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = ls() : e.exports = ds();
})(o);
var le = function() {
  return le = Object.assign || function(r) {
    for (var n, t = 1, s = arguments.length; t < s; t++) {
      n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
    }
    return r;
  }, le.apply(this, arguments);
};
function Ge(e, r, n) {
  if (n || arguments.length === 2)
    for (var t = 0, s = r.length, a; t < s; t++)
      (a || !(t in r)) && (a || (a = Array.prototype.slice.call(r, 0, t)), a[t] = r[t]);
  return e.concat(a || Array.prototype.slice.call(r));
}
function ps(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return r[n] === void 0 && (r[n] = e(n)), r[n];
  };
}
var us = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xs = /* @__PURE__ */ ps(
  function(e) {
    return us.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
), G = "-ms-", pr = "-moz-", P = "-webkit-", Bo = "comm", Vr = "rule", kn = "decl", hs = "@import", Ao = "@keyframes", fs = "@layer", To = Math.abs, Mn = String.fromCharCode, cn = Object.assign;
function gs(e, r) {
  return oe(e, 0) ^ 45 ? (((r << 2 ^ oe(e, 0)) << 2 ^ oe(e, 1)) << 2 ^ oe(e, 2)) << 2 ^ oe(e, 3) : 0;
}
function Oo(e) {
  return e.trim();
}
function Me(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function B(e, r, n) {
  return e.replace(r, n);
}
function Lr(e, r, n) {
  return e.indexOf(r, n);
}
function oe(e, r) {
  return e.charCodeAt(r) | 0;
}
function Je(e, r, n) {
  return e.slice(r, n);
}
function ye(e) {
  return e.length;
}
function Do(e) {
  return e.length;
}
function dr(e, r) {
  return r.push(e), e;
}
function js(e, r) {
  return e.map(r).join("");
}
function eo(e, r) {
  return e.filter(function(n) {
    return !Me(n, r);
  });
}
var Br = 1, Ke = 1, _o = 0, fe = 0, ee = 0, er = "";
function Ar(e, r, n, t, s, a, i, c) {
  return { value: e, root: r, parent: n, type: t, props: s, children: a, line: Br, column: Ke, length: i, return: "", siblings: c };
}
function Re(e, r) {
  return cn(Ar("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, r);
}
function Ye(e) {
  for (; e.root; )
    e = Re(e.root, { children: [e] });
  dr(e, e.siblings);
}
function ms() {
  return ee;
}
function vs() {
  return ee = fe > 0 ? oe(er, --fe) : 0, Ke--, ee === 10 && (Ke = 1, Br--), ee;
}
function Le() {
  return ee = fe < _o ? oe(er, fe++) : 0, Ke++, ee === 10 && (Ke = 1, Br++), ee;
}
function Te() {
  return oe(er, fe);
}
function wr() {
  return fe;
}
function Tr(e, r) {
  return Je(er, e, r);
}
function ln(e) {
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
function Ls(e) {
  return Br = Ke = 1, _o = ye(er = e), fe = 0, [];
}
function ws(e) {
  return er = "", e;
}
function Qr(e) {
  return Oo(Tr(fe - 1, dn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function bs(e) {
  for (; (ee = Te()) && ee < 33; )
    Le();
  return ln(e) > 2 || ln(ee) > 3 ? "" : " ";
}
function ys(e, r) {
  for (; --r && Le() && !(ee < 48 || ee > 102 || ee > 57 && ee < 65 || ee > 70 && ee < 97); )
    ;
  return Tr(e, wr() + (r < 6 && Te() == 32 && Le() == 32));
}
function dn(e) {
  for (; Le(); )
    switch (ee) {
      case e:
        return fe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && dn(ee);
        break;
      case 40:
        e === 41 && dn(e);
        break;
      case 92:
        Le();
        break;
    }
  return fe;
}
function Cs(e, r) {
  for (; Le() && e + ee !== 47 + 10; )
    if (e + ee === 42 + 42 && Te() === 47)
      break;
  return "/*" + Tr(r, fe - 1) + "*" + Mn(e === 47 ? e : Le());
}
function ks(e) {
  for (; !ln(Te()); )
    Le();
  return Tr(e, fe);
}
function Ms(e) {
  return ws(br("", null, null, null, [""], e = Ls(e), 0, [0], e));
}
function br(e, r, n, t, s, a, i, c, l) {
  for (var u = 0, p = 0, x = i, g = 0, v = 0, h = 0, L = 1, f = 1, w = 1, m = 0, y = "", $ = s, M = a, k = t, S = y; f; )
    switch (h = m, m = Le()) {
      case 40:
        if (h != 108 && oe(S, x - 1) == 58) {
          Lr(S += B(Qr(m), "&", "&\f"), "&\f", To(u ? c[u - 1] : 0)) != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Qr(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += bs(h);
        break;
      case 92:
        S += ys(wr() - 1, 7);
        continue;
      case 47:
        switch (Te()) {
          case 42:
          case 47:
            dr($s(Cs(Le(), wr()), r, n, l), l);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * L:
        c[u++] = ye(S) * w;
      case 125 * L:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            f = 0;
          case 59 + p:
            w == -1 && (S = B(S, /\f/g, "")), v > 0 && ye(S) - x && dr(v > 32 ? no(S + ";", t, n, x - 1, l) : no(B(S, " ", "") + ";", t, n, x - 2, l), l);
            break;
          case 59:
            S += ";";
          default:
            if (dr(k = ro(S, r, n, u, p, s, c, y, $ = [], M = [], x, a), a), m === 123)
              if (p === 0)
                br(S, r, k, k, $, a, x, c, M);
              else
                switch (g === 99 && oe(S, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    br(e, k, k, t && dr(ro(e, k, k, 0, 0, s, c, y, s, $ = [], x, M), M), s, M, x, c, t ? $ : M);
                    break;
                  default:
                    br(S, k, k, k, [""], M, 0, c, M);
                }
        }
        u = p = v = 0, L = w = 1, y = S = "", x = i;
        break;
      case 58:
        x = 1 + ye(S), v = h;
      default:
        if (L < 1) {
          if (m == 123)
            --L;
          else if (m == 125 && L++ == 0 && vs() == 125)
            continue;
        }
        switch (S += Mn(m), m * L) {
          case 38:
            w = p > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            c[u++] = (ye(S) - 1) * w, w = 1;
            break;
          case 64:
            Te() === 45 && (S += Qr(Le())), g = Te(), p = x = ye(y = S += ks(wr())), m++;
            break;
          case 45:
            h === 45 && ye(S) == 2 && (L = 0);
        }
    }
  return a;
}
function ro(e, r, n, t, s, a, i, c, l, u, p, x) {
  for (var g = s - 1, v = s === 0 ? a : [""], h = Do(v), L = 0, f = 0, w = 0; L < t; ++L)
    for (var m = 0, y = Je(e, g + 1, g = To(f = i[L])), $ = e; m < h; ++m)
      ($ = Oo(f > 0 ? v[m] + " " + y : B(y, /&\f/g, v[m]))) && (l[w++] = $);
  return Ar(e, r, n, s === 0 ? Vr : c, l, u, p, x);
}
function $s(e, r, n, t) {
  return Ar(e, r, n, Bo, Mn(ms()), Je(e, 2, -2), 0, t);
}
function no(e, r, n, t, s) {
  return Ar(e, r, n, kn, Je(e, 0, t), Je(e, t + 1, -1), t, s);
}
function Fo(e, r, n) {
  switch (gs(e, r)) {
    case 5103:
      return P + "print-" + e + e;
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
      return P + e + e;
    case 4789:
      return pr + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return P + e + pr + e + G + e + e;
    case 5936:
      switch (oe(e, r + 11)) {
        case 114:
          return P + e + G + B(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return P + e + G + B(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return P + e + G + B(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return P + e + G + e + e;
    case 6165:
      return P + e + G + "flex-" + e + e;
    case 5187:
      return P + e + B(e, /(\w+).+(:[^]+)/, P + "box-$1$2" + G + "flex-$1$2") + e;
    case 5443:
      return P + e + G + "flex-item-" + B(e, /flex-|-self/g, "") + (Me(e, /flex-|baseline/) ? "" : G + "grid-row-" + B(e, /flex-|-self/g, "")) + e;
    case 4675:
      return P + e + G + "flex-line-pack" + B(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return P + e + G + B(e, "shrink", "negative") + e;
    case 5292:
      return P + e + G + B(e, "basis", "preferred-size") + e;
    case 6060:
      return P + "box-" + B(e, "-grow", "") + P + e + G + B(e, "grow", "positive") + e;
    case 4554:
      return P + B(e, /([^-])(transform)/g, "$1" + P + "$2") + e;
    case 6187:
      return B(B(B(e, /(zoom-|grab)/, P + "$1"), /(image-set)/, P + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return B(e, /(image-set\([^]*)/, P + "$1$`$1");
    case 4968:
      return B(B(e, /(.+:)(flex-)?(.*)/, P + "box-pack:$3" + G + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + P + e + e;
    case 4200:
      if (!Me(e, /flex-|baseline/))
        return G + "grid-column-align" + Je(e, r) + e;
      break;
    case 2592:
    case 3360:
      return G + B(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(t, s) {
        return r = s, Me(t.props, /grid-\w+-end/);
      }) ? ~Lr(e + (n = n[r].value), "span", 0) ? e : G + B(e, "-start", "") + e + G + "grid-row-span:" + (~Lr(n, "span", 0) ? Me(n, /\d+/) : +Me(n, /\d+/) - +Me(e, /\d+/)) + ";" : G + B(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(t) {
        return Me(t.props, /grid-\w+-start/);
      }) ? e : G + B(B(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return B(e, /(.+)-inline(.+)/, P + "$1$2") + e;
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
      if (ye(e) - 1 - r > 6)
        switch (oe(e, r + 1)) {
          case 109:
            if (oe(e, r + 4) !== 45)
              break;
          case 102:
            return B(e, /(.+:)(.+)-([^]+)/, "$1" + P + "$2-$3$1" + pr + (oe(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Lr(e, "stretch", 0) ? Fo(B(e, "stretch", "fill-available"), r, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return B(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(t, s, a, i, c, l, u) {
        return G + s + ":" + a + u + (i ? G + s + "-span:" + (c ? l : +l - +a) + u : "") + e;
      });
    case 4949:
      if (oe(e, r + 6) === 121)
        return B(e, ":", ":" + P) + e;
      break;
    case 6444:
      switch (oe(e, oe(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return B(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + P + (oe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + P + "$2$3$1" + G + "$2box$3") + e;
        case 100:
          return B(e, ":", ":" + G) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return B(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Nr(e, r) {
  for (var n = "", t = 0; t < e.length; t++)
    n += r(e[t], t, e, r) || "";
  return n;
}
function Ns(e, r, n, t) {
  switch (e.type) {
    case fs:
      if (e.children.length)
        break;
    case hs:
    case kn:
      return e.return = e.return || e.value;
    case Bo:
      return "";
    case Ao:
      return e.return = e.value + "{" + Nr(e.children, t) + "}";
    case Vr:
      if (!ye(e.value = e.props.join(",")))
        return "";
  }
  return ye(n = Nr(e.children, t)) ? e.return = e.value + "{" + n + "}" : "";
}
function Ss(e) {
  var r = Do(e);
  return function(n, t, s, a) {
    for (var i = "", c = 0; c < r; c++)
      i += e[c](n, t, s, a) || "";
    return i;
  };
}
function Hs(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function Es(e, r, n, t) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case kn:
        e.return = Fo(e.value, e.length, n);
        return;
      case Ao:
        return Nr([Re(e, { value: B(e.value, "@", "@" + P) })], t);
      case Vr:
        if (e.length)
          return js(n = e.props, function(s) {
            switch (Me(s, t = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Ye(Re(e, { props: [B(s, /:(read-\w+)/, ":" + pr + "$1")] })), Ye(Re(e, { props: [s] })), cn(e, { props: eo(n, t) });
                break;
              case "::placeholder":
                Ye(Re(e, { props: [B(s, /:(plac\w+)/, ":" + P + "input-$1")] })), Ye(Re(e, { props: [B(s, /:(plac\w+)/, ":" + pr + "$1")] })), Ye(Re(e, { props: [B(s, /:(plac\w+)/, G + "input-$1")] })), Ye(Re(e, { props: [s] })), cn(e, { props: eo(n, t) });
                break;
            }
            return "";
          });
    }
}
var Rs = {
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
  strokeWidth: 1
}, _e = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Zo = "active", Uo = "data-styled-version", Or = "6.1.12", $n = `/*!sc*/
`, Sr = typeof window < "u" && "HTMLElement" in window, Is = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), oo = /invalid hook call/i, gr = /* @__PURE__ */ new Set(), Vs = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var n = r ? ' with the id of "'.concat(r, '"') : "", t = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, s = console.error;
    try {
      var a = !0;
      console.error = function(i) {
        for (var c = [], l = 1; l < arguments.length; l++)
          c[l - 1] = arguments[l];
        oo.test(i) ? (a = !1, gr.delete(t)) : s.apply(void 0, Ge([i], c, !1));
      }, re(), a && !gr.has(t) && (console.warn(t), gr.add(t));
    } catch (i) {
      oo.test(i.message) && gr.delete(t);
    } finally {
      console.error = s;
    }
  }
}, Dr = Object.freeze([]), Xe = Object.freeze({});
function Bs(e, r, n) {
  return n === void 0 && (n = Xe), e.theme !== n.theme && e.theme || r || n.theme;
}
var pn = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), As = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ts = /(^-|-$)/g;
function to(e) {
  return e.replace(As, "-").replace(Ts, "");
}
var Os = /(a)(d)/gi, jr = 52, so = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function un(e) {
  var r, n = "";
  for (r = Math.abs(e); r > jr; r = r / jr | 0)
    n = so(r % jr) + n;
  return (so(r % jr) + n).replace(Os, "$1-$2");
}
var Wr, Po = 5381, Ve = function(e, r) {
  for (var n = r.length; n; )
    e = 33 * e ^ r.charCodeAt(--n);
  return e;
}, qo = function(e) {
  return Ve(Po, e);
};
function Ds(e) {
  return un(qo(e) >>> 0);
}
function zo(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function en(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Yo = typeof Symbol == "function" && Symbol.for, Go = Yo ? Symbol.for("react.memo") : 60115, _s = Yo ? Symbol.for("react.forward_ref") : 60112, Fs = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Zs = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Jo = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Us = ((Wr = {})[_s] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Wr[Go] = Jo, Wr);
function ao(e) {
  return ("type" in (r = e) && r.type.$$typeof) === Go ? Jo : "$$typeof" in e ? Us[e.$$typeof] : Fs;
  var r;
}
var Ps = Object.defineProperty, qs = Object.getOwnPropertyNames, io = Object.getOwnPropertySymbols, zs = Object.getOwnPropertyDescriptor, Ys = Object.getPrototypeOf, co = Object.prototype;
function Ko(e, r, n) {
  if (typeof r != "string") {
    if (co) {
      var t = Ys(r);
      t && t !== co && Ko(e, t, n);
    }
    var s = qs(r);
    io && (s = s.concat(io(r)));
    for (var a = ao(e), i = ao(r), c = 0; c < s.length; ++c) {
      var l = s[c];
      if (!(l in Zs || n && n[l] || i && l in i || a && l in a)) {
        var u = zs(r, l);
        try {
          Ps(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
function Qe(e) {
  return typeof e == "function";
}
function Nn(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Be(e, r) {
  return e && r ? "".concat(e, " ").concat(r) : e || r || "";
}
function lo(e, r) {
  if (e.length === 0)
    return "";
  for (var n = e[0], t = 1; t < e.length; t++)
    n += r ? r + e[t] : e[t];
  return n;
}
function We(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function xn(e, r, n) {
  if (n === void 0 && (n = !1), !n && !We(e) && !Array.isArray(e))
    return r;
  if (Array.isArray(r))
    for (var t = 0; t < r.length; t++)
      e[t] = xn(e[t], r[t]);
  else if (We(r))
    for (var t in r)
      e[t] = xn(e[t], r[t]);
  return e;
}
function Sn(e, r) {
  Object.defineProperty(e, "toString", { value: r });
}
var Gs = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function Js() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  for (var n = e[0], t = [], s = 1, a = e.length; s < a; s += 1)
    t.push(e[s]);
  return t.forEach(function(i) {
    n = n.replace(/%[a-z]/, i);
  }), n;
}
function rr(e) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(r.length > 0 ? " Args: ".concat(r.join(", ")) : "")) : new Error(Js.apply(void 0, Ge([Gs[e]], r, !1)).trim());
}
var Ks = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  return e.prototype.indexOfGroup = function(r) {
    for (var n = 0, t = 0; t < r; t++)
      n += this.groupSizes[t];
    return n;
  }, e.prototype.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var t = this.groupSizes, s = t.length, a = s; r >= a; )
        if ((a <<= 1) < 0)
          throw rr(16, "".concat(r));
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(t), this.length = a;
      for (var i = s; i < a; i++)
        this.groupSizes[i] = 0;
    }
    for (var c = this.indexOfGroup(r + 1), l = (i = 0, n.length); i < l; i++)
      this.tag.insertRule(c, n[i]) && (this.groupSizes[r]++, c++);
  }, e.prototype.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], t = this.indexOfGroup(r), s = t + n;
      this.groupSizes[r] = 0;
      for (var a = t; a < s; a++)
        this.tag.deleteRule(t);
    }
  }, e.prototype.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return n;
    for (var t = this.groupSizes[r], s = this.indexOfGroup(r), a = s + t, i = s; i < a; i++)
      n += "".concat(this.tag.getRule(i)).concat($n);
    return n;
  }, e;
}(), Xs = 1 << 30, yr = /* @__PURE__ */ new Map(), Hr = /* @__PURE__ */ new Map(), Cr = 1, mr = function(e) {
  if (yr.has(e))
    return yr.get(e);
  for (; Hr.has(Cr); )
    Cr++;
  var r = Cr++;
  if (process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > Xs))
    throw rr(16, "".concat(r));
  return yr.set(e, r), Hr.set(r, e), r;
}, Qs = function(e, r) {
  Cr = r + 1, yr.set(e, r), Hr.set(r, e);
}, Ws = "style[".concat(_e, "][").concat(Uo, '="').concat(Or, '"]'), ea = new RegExp("^".concat(_e, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ra = function(e, r, n) {
  for (var t, s = n.split(","), a = 0, i = s.length; a < i; a++)
    (t = s[a]) && e.registerName(r, t);
}, na = function(e, r) {
  for (var n, t = ((n = r.textContent) !== null && n !== void 0 ? n : "").split($n), s = [], a = 0, i = t.length; a < i; a++) {
    var c = t[a].trim();
    if (c) {
      var l = c.match(ea);
      if (l) {
        var u = 0 | parseInt(l[1], 10), p = l[2];
        u !== 0 && (Qs(p, u), ra(e, p, l[3]), e.getTag().insertRules(u, s)), s.length = 0;
      } else
        s.push(c);
    }
  }
}, po = function(e) {
  for (var r = document.querySelectorAll(Ws), n = 0, t = r.length; n < t; n++) {
    var s = r[n];
    s && s.getAttribute(_e) !== Zo && (na(e, s), s.parentNode && s.parentNode.removeChild(s));
  }
};
function oa() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Xo = function(e) {
  var r = document.head, n = e || r, t = document.createElement("style"), s = function(c) {
    var l = Array.from(c.querySelectorAll("style[".concat(_e, "]")));
    return l[l.length - 1];
  }(n), a = s !== void 0 ? s.nextSibling : null;
  t.setAttribute(_e, Zo), t.setAttribute(Uo, Or);
  var i = oa();
  return i && t.setAttribute("nonce", i), n.insertBefore(t, a), t;
}, ta = function() {
  function e(r) {
    this.element = Xo(r), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet)
        return n.sheet;
      for (var t = document.styleSheets, s = 0, a = t.length; s < a; s++) {
        var i = t[s];
        if (i.ownerNode === n)
          return i;
      }
      throw rr(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(r, n) {
    try {
      return this.sheet.insertRule(n, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, e.prototype.getRule = function(r) {
    var n = this.sheet.cssRules[r];
    return n && n.cssText ? n.cssText : "";
  }, e;
}(), sa = function() {
  function e(r) {
    this.element = Xo(r), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var t = document.createTextNode(n);
      return this.element.insertBefore(t, this.nodes[r] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), aa = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(r, n) {
    return r <= this.length && (this.rules.splice(r, 0, n), this.length++, !0);
  }, e.prototype.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), uo = Sr, ia = { isServer: !Sr, useCSSOMInjection: !Is }, Qo = function() {
  function e(r, n, t) {
    r === void 0 && (r = Xe), n === void 0 && (n = {});
    var s = this;
    this.options = le(le({}, ia), r), this.gs = n, this.names = new Map(t), this.server = !!r.isServer, !this.server && Sr && uo && (uo = !1, po(this)), Sn(this, function() {
      return function(a) {
        for (var i = a.getTag(), c = i.length, l = "", u = function(x) {
          var g = function(w) {
            return Hr.get(w);
          }(x);
          if (g === void 0)
            return "continue";
          var v = a.names.get(g), h = i.getGroup(x);
          if (v === void 0 || !v.size || h.length === 0)
            return "continue";
          var L = "".concat(_e, ".g").concat(x, '[id="').concat(g, '"]'), f = "";
          v !== void 0 && v.forEach(function(w) {
            w.length > 0 && (f += "".concat(w, ","));
          }), l += "".concat(h).concat(L, '{content:"').concat(f, '"}').concat($n);
        }, p = 0; p < c; p++)
          u(p);
        return l;
      }(s);
    });
  }
  return e.registerId = function(r) {
    return mr(r);
  }, e.prototype.rehydrate = function() {
    !this.server && Sr && po(this);
  }, e.prototype.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(le(le({}, this.options), r), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (r = function(n) {
      var t = n.useCSSOMInjection, s = n.target;
      return n.isServer ? new aa(s) : t ? new ta(s) : new sa(s);
    }(this.options), new Ks(r)));
    var r;
  }, e.prototype.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, e.prototype.registerName = function(r, n) {
    if (mr(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var t = /* @__PURE__ */ new Set();
      t.add(n), this.names.set(r, t);
    }
  }, e.prototype.insertRules = function(r, n, t) {
    this.registerName(r, n), this.getTag().insertRules(mr(r), t);
  }, e.prototype.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, e.prototype.clearRules = function(r) {
    this.getTag().clearGroup(mr(r)), this.clearNames(r);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), ca = /&/g, la = /^\s*\/\/.*$/gm;
function Wo(e, r) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(r, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(r, " ")), n.props = n.props.map(function(t) {
      return "".concat(r, " ").concat(t);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Wo(n.children, r)), n;
  });
}
function da(e) {
  var r, n, t, s = e === void 0 ? Xe : e, a = s.options, i = a === void 0 ? Xe : a, c = s.plugins, l = c === void 0 ? Dr : c, u = function(g, v, h) {
    return h.startsWith(n) && h.endsWith(n) && h.replaceAll(n, "").length > 0 ? ".".concat(r) : g;
  }, p = l.slice();
  p.push(function(g) {
    g.type === Vr && g.value.includes("&") && (g.props[0] = g.props[0].replace(ca, n).replace(t, u));
  }), i.prefix && p.push(Es), p.push(Ns);
  var x = function(g, v, h, L) {
    v === void 0 && (v = ""), h === void 0 && (h = ""), L === void 0 && (L = "&"), r = L, n = v, t = new RegExp("\\".concat(n, "\\b"), "g");
    var f = g.replace(la, ""), w = Ms(h || v ? "".concat(h, " ").concat(v, " { ").concat(f, " }") : f);
    i.namespace && (w = Wo(w, i.namespace));
    var m = [];
    return Nr(w, Ss(p.concat(Hs(function(y) {
      return m.push(y);
    })))), m;
  };
  return x.hash = l.length ? l.reduce(function(g, v) {
    return v.name || rr(15), Ve(g, v.name);
  }, Po).toString() : "", x;
}
var pa = new Qo(), hn = da(), et = De.createContext({ shouldForwardProp: void 0, styleSheet: pa, stylis: hn });
et.Consumer;
De.createContext(void 0);
function xo() {
  return cs(et);
}
var ho = function() {
  function e(r, n) {
    var t = this;
    this.inject = function(s, a) {
      a === void 0 && (a = hn);
      var i = t.name + a.hash;
      s.hasNameForId(t.id, i) || s.insertRules(t.id, i, a(t.rules, i, "@keyframes"));
    }, this.name = r, this.id = "sc-keyframes-".concat(r), this.rules = n, Sn(this, function() {
      throw rr(12, String(t.name));
    });
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = hn), this.name + r.hash;
  }, e;
}(), ua = function(e) {
  return e >= "A" && e <= "Z";
};
function fo(e) {
  for (var r = "", n = 0; n < e.length; n++) {
    var t = e[n];
    if (n === 1 && t === "-" && e[0] === "-")
      return e;
    ua(t) ? r += "-" + t.toLowerCase() : r += t;
  }
  return r.startsWith("ms-") ? "-" + r : r;
}
var rt = function(e) {
  return e == null || e === !1 || e === "";
}, nt = function(e) {
  var r, n, t = [];
  for (var s in e) {
    var a = e[s];
    e.hasOwnProperty(s) && !rt(a) && (Array.isArray(a) && a.isCss || Qe(a) ? t.push("".concat(fo(s), ":"), a, ";") : We(a) ? t.push.apply(t, Ge(Ge(["".concat(s, " {")], nt(a), !1), ["}"], !1)) : t.push("".concat(fo(s), ": ").concat((r = s, (n = a) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || r in Rs || r.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return t;
};
function Oe(e, r, n, t) {
  if (rt(e))
    return [];
  if (Nn(e))
    return [".".concat(e.styledComponentId)];
  if (Qe(e)) {
    if (!Qe(a = e) || a.prototype && a.prototype.isReactComponent || !r)
      return [e];
    var s = e(r);
    return process.env.NODE_ENV === "production" || typeof s != "object" || Array.isArray(s) || s instanceof ho || We(s) || s === null || console.error("".concat(zo(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Oe(s, r, n, t);
  }
  var a;
  return e instanceof ho ? n ? (e.inject(n, t), [e.getName(t)]) : [e] : We(e) ? nt(e) : Array.isArray(e) ? Array.prototype.concat.apply(Dr, e.map(function(i) {
    return Oe(i, r, n, t);
  })) : [e.toString()];
}
function xa(e) {
  for (var r = 0; r < e.length; r += 1) {
    var n = e[r];
    if (Qe(n) && !Nn(n))
      return !1;
  }
  return !0;
}
var ha = qo(Or), fa = function() {
  function e(r, n, t) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (t === void 0 || t.isStatic) && xa(r), this.componentId = n, this.baseHash = Ve(ha, n), this.baseStyle = t, Qo.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(r, n, t) {
    var s = this.baseStyle ? this.baseStyle.generateAndInjectStyles(r, n, t) : "";
    if (this.isStatic && !t.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        s = Be(s, this.staticRulesId);
      else {
        var a = lo(Oe(this.rules, r, n, t)), i = un(Ve(this.baseHash, a) >>> 0);
        if (!n.hasNameForId(this.componentId, i)) {
          var c = t(a, ".".concat(i), void 0, this.componentId);
          n.insertRules(this.componentId, i, c);
        }
        s = Be(s, i), this.staticRulesId = i;
      }
    else {
      for (var l = Ve(this.baseHash, t.hash), u = "", p = 0; p < this.rules.length; p++) {
        var x = this.rules[p];
        if (typeof x == "string")
          u += x, process.env.NODE_ENV !== "production" && (l = Ve(l, x));
        else if (x) {
          var g = lo(Oe(x, r, n, t));
          l = Ve(l, g + p), u += g;
        }
      }
      if (u) {
        var v = un(l >>> 0);
        n.hasNameForId(this.componentId, v) || n.insertRules(this.componentId, v, t(u, ".".concat(v), void 0, this.componentId)), s = Be(s, v);
      }
    }
    return s;
  }, e;
}(), ot = De.createContext(void 0);
ot.Consumer;
var rn = {}, go = /* @__PURE__ */ new Set();
function ga(e, r, n) {
  var t = Nn(e), s = e, a = !en(e), i = r.attrs, c = i === void 0 ? Dr : i, l = r.componentId, u = l === void 0 ? function($, M) {
    var k = typeof $ != "string" ? "sc" : to($);
    rn[k] = (rn[k] || 0) + 1;
    var S = "".concat(k, "-").concat(Ds(Or + k + rn[k]));
    return M ? "".concat(M, "-").concat(S) : S;
  }(r.displayName, r.parentComponentId) : l, p = r.displayName, x = p === void 0 ? function($) {
    return en($) ? "styled.".concat($) : "Styled(".concat(zo($), ")");
  }(e) : p, g = r.displayName && r.componentId ? "".concat(to(r.displayName), "-").concat(r.componentId) : r.componentId || u, v = t && s.attrs ? s.attrs.concat(c).filter(Boolean) : c, h = r.shouldForwardProp;
  if (t && s.shouldForwardProp) {
    var L = s.shouldForwardProp;
    if (r.shouldForwardProp) {
      var f = r.shouldForwardProp;
      h = function($, M) {
        return L($, M) && f($, M);
      };
    } else
      h = L;
  }
  var w = new fa(n, g, t ? s.componentStyle : void 0);
  function m($, M) {
    return function(k, S, Z) {
      var F = k.attrs, q = k.componentStyle, ie = k.defaultProps, H = k.foldedComponentIds, O = k.styledComponentId, K = k.target, z = De.useContext(ot), I = xo(), D = k.shouldForwardProp || I.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Xn(O);
      var ge = Bs(S, z, ie) || Xe, ue = function(Ue, ke, Se) {
        for (var je, me = le(le({}, ke), { className: void 0, theme: Se }), He = 0; He < Ue.length; He += 1) {
          var Pe = Qe(je = Ue[He]) ? je(me) : je;
          for (var ve in Pe)
            me[ve] = ve === "className" ? Be(me[ve], Pe[ve]) : ve === "style" ? le(le({}, me[ve]), Pe[ve]) : Pe[ve];
        }
        return ke.className && (me.className = Be(me.className, ke.className)), me;
      }(F, S, ge), $e = ue.as || K, Ne = {};
      for (var se in ue)
        ue[se] === void 0 || se[0] === "$" || se === "as" || se === "theme" && ue.theme === ge || (se === "forwardedAs" ? Ne.as = ue.forwardedAs : D && !D(se, $e) || (Ne[se] = ue[se], D || process.env.NODE_ENV !== "development" || xs(se) || go.has(se) || !pn.has($e) || (go.add(se), console.warn('styled-components: it looks like an unknown prop "'.concat(se, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ze = function(Ue, ke) {
        var Se = xo(), je = Ue.generateAndInjectStyles(ke, Se.styleSheet, Se.stylis);
        return process.env.NODE_ENV !== "production" && Xn(je), je;
      }(q, ue);
      process.env.NODE_ENV !== "production" && k.warnTooManyClasses && k.warnTooManyClasses(Ze);
      var tr = Be(H, O);
      return Ze && (tr += " " + Ze), ue.className && (tr += " " + ue.className), Ne[en($e) && !pn.has($e) ? "class" : "className"] = tr, Ne.ref = Z, is($e, Ne);
    }(y, $, M);
  }
  m.displayName = x;
  var y = De.forwardRef(m);
  return y.attrs = v, y.componentStyle = w, y.displayName = x, y.shouldForwardProp = h, y.foldedComponentIds = t ? Be(s.foldedComponentIds, s.styledComponentId) : "", y.styledComponentId = g, y.target = t ? s.target : e, Object.defineProperty(y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function($) {
    this._foldedDefaultProps = t ? function(M) {
      for (var k = [], S = 1; S < arguments.length; S++)
        k[S - 1] = arguments[S];
      for (var Z = 0, F = k; Z < F.length; Z++)
        xn(M, F[Z], !0);
      return M;
    }({}, s.defaultProps, $) : $;
  } }), process.env.NODE_ENV !== "production" && (Vs(x, g), y.warnTooManyClasses = function($, M) {
    var k = {}, S = !1;
    return function(Z) {
      if (!S && (k[Z] = !0, Object.keys(k).length >= 200)) {
        var F = M ? ' with the id of "'.concat(M, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat($).concat(F, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), S = !0, k = {};
      }
    };
  }(x, g)), Sn(y, function() {
    return ".".concat(y.styledComponentId);
  }), a && Ko(y, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), y;
}
function jo(e, r) {
  for (var n = [e[0]], t = 0, s = r.length; t < s; t += 1)
    n.push(r[t], e[t + 1]);
  return n;
}
var mo = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function ja(e) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r[n - 1] = arguments[n];
  if (Qe(e) || We(e))
    return mo(Oe(jo(Dr, Ge([e], r, !0))));
  var t = e;
  return r.length === 0 && t.length === 1 && typeof t[0] == "string" ? Oe(t) : mo(Oe(jo(t, r)));
}
function fn(e, r, n) {
  if (n === void 0 && (n = Xe), !r)
    throw rr(1, r);
  var t = function(s) {
    for (var a = [], i = 1; i < arguments.length; i++)
      a[i - 1] = arguments[i];
    return e(r, n, ja.apply(void 0, Ge([s], a, !1)));
  };
  return t.attrs = function(s) {
    return fn(e, r, le(le({}, n), { attrs: Array.prototype.concat(n.attrs, s).filter(Boolean) }));
  }, t.withConfig = function(s) {
    return fn(e, r, le(le({}, n), s));
  }, t;
}
var tt = function(e) {
  return fn(ga, e);
}, C = tt;
pn.forEach(function(e) {
  C[e] = tt(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var vr = "__sc-".concat(_e, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[vr] || (window[vr] = 0), window[vr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[vr] += 1);
const k2 = ({
  ltOption: e,
  rtOption: r,
  rtOption2: n,
  lbOption: t,
  rbOption: s,
  tcOption: a,
  bcOption: i,
  centerOption: c,
  lcOption: l,
  rcOption: u,
  customOption: p,
  disabled: x,
  onClick: g,
  children: v,
  className: h,
  style: L,
  ...f
}) => {
  const w = te(
    () => [
      { option: e, placement: "lt" },
      { option: r, placement: "rt" },
      { option: n, placement: "rt" },
      { option: t, placement: "lb" },
      { option: s, placement: "rb" },
      { option: l, placement: "lc" },
      { option: u, placement: "rc" },
      { option: a, placement: "tc" },
      { option: i, placement: "bc" },
      { option: c, placement: "center" },
      { option: p, placement: "custom" }
    ],
    [e, r, t, s, l, u, a, i, c, p]
  ), [m, y] = A(!1), [$, M] = A(!1), k = (H) => H.hide ? 0 : H.hoverShow ? m ? 1 : 0 : H.hoverHide && $ ? 0 : 1;
  J(() => {
    const H = (O) => {
      y(!1), M(!1), O.stopPropagation();
    };
    return document.body.addEventListener("wheel", H), () => {
      document.body.removeEventListener("wheel", H);
    };
  }, []);
  const S = (H, O, K) => {
    const z = O !== void 0 ? O : "8px";
    switch (H) {
      case "lt":
      case "lb":
      case "lc":
        return z;
      case "rt":
      case "rb":
      case "rc":
        return "auto";
      case "tc":
      case "bc":
      case "center":
        return "50%";
      case "custom":
        return K;
      default:
        return "auto";
    }
  }, Z = (H, O) => {
    const K = O !== void 0 ? O : "8px";
    switch (H) {
      case "lt":
      case "lb":
      case "lc":
      case "tc":
      case "bc":
      case "center":
        return "auto";
      case "rt":
      case "rb":
      case "rc":
        return K;
      default:
        return "auto";
    }
  }, F = (H, O, K) => {
    const z = O !== void 0 ? O : "8px";
    switch (H) {
      case "lt":
      case "rt":
      case "tc":
        return z;
      case "lb":
      case "rb":
      case "bc":
        return "auto";
      case "lc":
      case "rc":
      case "center":
        return "50%";
      case "custom":
        return K;
      default:
        return "auto";
    }
  }, q = (H, O) => {
    const K = O !== void 0 ? O : "8px";
    switch (H) {
      case "lt":
      case "rt":
      case "tc":
      case "lc":
      case "rc":
      case "center":
        return "auto";
      case "lb":
      case "rb":
      case "bc":
        return K;
      default:
        return "auto";
    }
  }, ie = (H) => {
    switch (H) {
      case "lt":
      case "rt":
      case "lb":
      case "rb":
        return "";
      case "tc":
      case "bc":
        return "translateX(-50%)";
      case "lc":
      case "rc":
        return "translateY(-50%)";
      case "center":
        return "translate(-50%,-50%)";
      default:
        return "";
    }
  };
  return /* @__PURE__ */ o.exports.jsxs(
    "div",
    {
      className: `StyleAffixContainer relative flex items-center justify-center ${x ? "events-none cursor-not-allow" : ""} ${h}`,
      style: L,
      onClick: (H) => g == null ? void 0 : g(H),
      onMouseOver: () => {
        x || (y(!0), M(!0));
      },
      onMouseLeave: () => {
        y(!1), M(!1);
      },
      onWheel: (H) => H.stopPropagation(),
      ...f,
      children: [
        v,
        w == null ? void 0 : w.map(
          (H, O) => {
            var K, z;
            return H.option ? /* @__PURE__ */ o.exports.jsx(
              ma,
              {
                style: {
                  left: S(H.placement, H.option.gap, H.option.left || 0),
                  right: Z(H.placement, H.option.gap),
                  top: F(H.placement, H.option.gap, H.option.top || 0),
                  bottom: q(H.placement, H.option.gap),
                  borderRadius: typeof H.option.radius == "number" ? `${H.option.radius}px` : H.option.radius,
                  transform: ie(H.placement),
                  opacity: k(H.option),
                  zIndex: H.option.zIndex || 2,
                  ...H.option.style
                },
                className: `${H.placement} absolute ${(K = H.option.className) != null ? K : ""} ${H.option.squareSize ? "square" : ""}`,
                onClick: (I) => {
                  var D, ge;
                  I.stopPropagation(), (ge = (D = H.option) == null ? void 0 : D.onClick) == null || ge.call(D, I);
                },
                dark: H.option.dark,
                custom: H.option.custom,
                squareSize: H.option.squareSize,
                children: (z = H.option) == null ? void 0 : z.content
              },
              O
            ) : null;
          }
        )
      ]
    }
  );
}, ma = C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  opacity: ${(e) => e.hoverShow ? 0 : 1};
  padding: ${(e) => e.custom ? "" : "4px 8px"};
  border-radius: ${(e) => e.custom ? "" : "6px"};
  font-family: inherit;
  font-size: 12px;
  background: ${(e) => e.custom ? "" : e.dark ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)"};
  color: ${(e) => e.custom ? "" : e.dark ? "var(--color-text-white)" : "var(--color-text-2)"};
  backdrop-filter: ${(e) => e.custom ? "" : "var(--ms-bg-blur-4)"};
  transition: opacity 0.2s linear;
  box-sizing: border-box;
  &.square{
    width: ${(e) => e.squareSize ? `${e.squareSize}px` : "24px"};
    height: ${(e) => e.squareSize ? `${e.squareSize}px` : "24px"};
  }
`, va = ({
  stroke: e = "currentColor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `home ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M9 18V42H39V18L24 6L9 18Z",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M19 29V42H29V29H19Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), La = ({
  size: e = 20,
  fill: r = "currentcolor",
  className: n = "",
  onClick: t
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: `application ${n}`,
    onClick: t,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z",
          fill: r
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 14C26.2091 14 28 12.2091 28 10C28 7.79086 26.2091 6 24 6C21.7909 6 20 7.79086 20 10C20 12.2091 21.7909 14 24 14Z",
          fill: r
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10C34 12.2091 35.7909 14 38 14Z",
          fill: r
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M10 28C12.2091 28 14 26.2091 14 24C14 21.7909 12.2091 20 10 20C7.79086 20 6 21.7909 6 24C6 26.2091 7.79086 28 10 28Z",
          fill: r
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z",
          fill: r
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M38 28C40.2091 28 42 26.2091 42 24C42 21.7909 40.2091 20 38 20C35.7909 20 34 21.7909 34 24C34 26.2091 35.7909 28 38 28Z",
          fill: r
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M10 42C12.2091 42 14 40.2091 14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42Z",
          fill: r
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 42C26.2091 42 28 40.2091 28 38C28 35.7909 26.2091 34 24 34C21.7909 34 20 35.7909 20 38C20 40.2091 21.7909 42 24 42Z",
          fill: r
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M38 42C40.2091 42 42 40.2091 42 38C42 35.7909 40.2091 34 38 34C35.7909 34 34 35.7909 34 38C34 40.2091 35.7909 42 38 42Z",
          fill: r
        }
      )
    ]
  }
), wa = ({
  size: e = 16,
  fill: r = "currentcolor",
  className: n = "",
  style: t,
  onClick: s
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `more ${n}`,
    style: t,
    onClick: s,
    children: [
      /* @__PURE__ */ o.exports.jsx("circle", { cx: "12", cy: "24", r: "4", fill: r }),
      /* @__PURE__ */ o.exports.jsx("circle", { cx: "24", cy: "24", r: "4", fill: r }),
      /* @__PURE__ */ o.exports.jsx("circle", { cx: "36", cy: "24", r: "4", fill: r })
    ]
  }
), ba = ({
  size: e = 16,
  stroke: r = "currentcolor",
  strokeWidth: n = 4,
  className: t = "",
  style: s,
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `more-line ${t}`,
    style: s,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M7.94971 11.9497H39.9497",
          stroke: r,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M7.94971 23.9497H39.9497",
          stroke: r,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M7.94971 35.9497H39.9497",
          stroke: r,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ya = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `refresh ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 8V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 24L6 40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ca = ({
  stroke: e = "currentColor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: t,
    className: `female ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsxs("g", { "clip-path": "url(#icon-3f19128bccbbd09)", children: [
        /* @__PURE__ */ o.exports.jsx(
          "path",
          {
            d: "M38.3785 9.85132C32.9112 4.38398 24.0468 4.38398 18.5795 9.85132C15.8458 12.585 14.479 16.1679 14.479 19.7508C14.479 23.3337 15.8458 26.9166 18.5795 29.6503C24.0468 35.1176 32.9112 35.1176 38.3785 29.6503C43.8458 24.183 43.8458 15.3187 38.3785 9.85132Z",
            fill: "none",
            stroke: e,
            strokeWidth: n,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ o.exports.jsx(
          "path",
          {
            d: "M18.4642 29.5353L5.73633 42.2632",
            stroke: e,
            strokeWidth: n,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ o.exports.jsx(
          "path",
          {
            d: "M19.1714 41.5562L6.44346 28.8282",
            stroke: e,
            strokeWidth: n,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ] }),
      /* @__PURE__ */ o.exports.jsx("defs", { children: /* @__PURE__ */ o.exports.jsx("clipPath", { id: "icon-3f19128bccbbd09", children: /* @__PURE__ */ o.exports.jsx("rect", { width: "48", height: "48", fill: e }) }) })
    ]
  }
), ka = ({
  stroke: e = "currentColor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: t,
    className: `male ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M41.9517 15.0483V6.04834H32.9517",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M10.4135 38.0007C15.8808 43.4681 24.7451 43.4681 30.2125 38.0007C32.9462 35.2671 34.313 31.6841 34.313 28.1012C34.313 24.5183 32.9462 20.9354 30.2125 18.2017C24.7451 12.7344 15.8808 12.7344 10.4135 18.2017C4.94615 23.6691 4.94615 32.5334 10.4135 38.0007Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M30.0002 17.9999L39.9517 8.04838",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ma = ({
  stroke: e = "currentColor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: t,
    className: `preview-open ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 36C35.0457 36 44 24 44 24C44 24 35.0457 12 24 12C12.9543 12 4 24 4 24C4 24 12.9543 36 24 36Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), $a = ({
  stroke: e = "currentColor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: t,
    className: `preview-close ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 16C6.63472 17.2193 7.59646 18.3504 8.82276 19.3554C12.261 22.1733 17.779 24 24 24C30.221 24 35.739 22.1733 39.1772 19.3554C40.4035 18.3504 41.3653 17.2193 42 16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M28.9775 24L31.048 31.7274",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M37.3535 21.3536L43.0103 27.0104",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M5.00004 27.0103L10.6569 21.3534",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M16.9278 31.7276L18.9983 24.0001",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Na = ({
  stroke: e = "currentColor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: t,
    className: `avatar ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "circle",
        {
          cx: "24",
          cy: "12",
          r: "8",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Sa = ({
  stroke: e = "currentColor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: t,
    className: `tag ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42.1691 29.2451L29.2631 42.1511C28.5879 42.8271 27.6716 43.2069 26.7161 43.2069C25.7606 43.2069 24.8444 42.8271 24.1691 42.1511L8 26V8H26L42.1691 24.1691C43.5649 25.5732 43.5649 27.841 42.1691 29.2451Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z",
          fill: e
        }
      )
    ]
  }
), Ha = ({
  stroke: e = "currentColor",
  size: r = 24,
  fill: n,
  strokeWidth: t = 2,
  style: s,
  className: a = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: s,
    className: `setting ${a}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
          fill: n || "none",
          stroke: n || e,
          strokeWidth: t,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
          fill: n || "none",
          stroke: n || e,
          strokeWidth: t,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ea = ({
  stroke: e = "currentColor",
  strokeWidth: r = 2,
  size: n = 24,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: t,
    className: `config-setting ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M41.5 10H35.5",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M27.5 6V14",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M27.5 10L5.5 10",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M13.5 24H5.5",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M21.5 20V28",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M43.5 24H21.5",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M41.5 38H35.5",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M27.5 34V42",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M27.5 38H5.5",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ra = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `collection ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M40.9898 8.02661H12.1818C9.45455 8.02661 4 9.55073 4 15.9674C4 22.3841 9.45455 24.0001 12.1818 24.0001H35.9939C38.7211 24.0001 44 25.5681 44 31.9848C44 38.4014 38.7211 40.0031 35.9939 40.0031H6.06499",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M8.04567 35.9927L4.06738 40.0592L8.04567 44.0001",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M38.0427 3.95386L42.021 8.02038L38.0427 11.9612",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ia = ({
  stroke: e = "currentColor",
  strokeWidth: r = 2,
  size: n = 24,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: t,
    className: `config-setting ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M28 6H42V20",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 29.4737V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6L18 6",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M25.7998 22.1999L41.0998 6.8999",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Va = ({
  stroke: e = "currentColor",
  strokeWidth: r = 2,
  size: n = 24,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: t,
    className: `config-setting ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M16 6L17 9",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 11H28",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ba = ({
  stroke: e = "currentColor",
  size: r = 24,
  strokeWidth: n = 2,
  fill: t,
  style: s,
  className: a = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: s,
    className: `light ${a}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M9.15039 9.15088L11.3778 11.3783",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M3 24H6.15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M9.15039 38.8495L11.3778 36.6221",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M38.8495 38.8495L36.6221 36.6221",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M44.9996 24H41.8496",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M38.8495 9.15088L36.6221 11.3783",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 3V6.15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z",
          fill: t || "none",
          stroke: t || e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 45.0001V41.8501",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Aa = ({
  stroke: e = "currentColor",
  size: r = 24,
  fill: n,
  strokeWidth: t = 2,
  style: s,
  className: a = ""
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: s,
    className: `dark ${a}`,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        d: "M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z",
        fill: n || "none",
        stroke: n || e,
        strokeWidth: t,
        strokeLinejoin: "round"
      }
    )
  }
), Ta = ({
  stroke: e = "currentcolor",
  size: r = 20,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: t,
    className: `search ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M33.2216 33.2217L41.7069 41.707",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Oa = ({
  stroke: e = "currentColor",
  strokeWidth: r = 2,
  size: n = 24,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: t,
    className: `image ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5 10C5 8.89543 5.89543 8 7 8L41 8C42.1046 8 43 8.89543 43 10V38C43 39.1046 42.1046 40 41 40H7C5.89543 40 5 39.1046 5 38V10Z",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M14.5 18C15.3284 18 16 17.3284 16 16.5C16 15.6716 15.3284 15 14.5 15C13.6716 15 13 15.6716 13 16.5C13 17.3284 13.6716 18 14.5 18Z",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M15 24L20 28L26 21L43 34V38C43 39.1046 42.1046 40 41 40H7C5.89543 40 5 39.1046 5 38V34L15 24Z",
          fill: "none",
          stroke: e,
          strokeWidth: r,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Da = ({
  size: e = 24,
  fill: r = "currentColor",
  style: n,
  className: t = ""
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: n,
    className: `video-play ${t}`,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        d: "M16.875 3.75V16.25C16.875 16.5815 16.7433 16.8995 16.5089 17.1339C16.2745 17.3683 15.9565 17.5 15.625 17.5H12.5C12.1685 17.5 11.8505 17.3683 11.6161 17.1339C11.3817 16.8995 11.25 16.5815 11.25 16.25V3.75C11.25 3.41848 11.3817 3.10054 11.6161 2.86612C11.8505 2.6317 12.1685 2.5 12.5 2.5H15.625C15.9565 2.5 16.2745 2.6317 16.5089 2.86612C16.7433 3.10054 16.875 3.41848 16.875 3.75ZM7.5 2.5H4.375C4.04348 2.5 3.72554 2.6317 3.49112 2.86612C3.2567 3.10054 3.125 3.41848 3.125 3.75V16.25C3.125 16.5815 3.2567 16.8995 3.49112 17.1339C3.72554 17.3683 4.04348 17.5 4.375 17.5H7.5C7.83152 17.5 8.14946 17.3683 8.38388 17.1339C8.6183 16.8995 8.75 16.5815 8.75 16.25V3.75C8.75 3.41848 8.6183 3.10054 8.38388 2.86612C8.14946 2.6317 7.83152 2.5 7.5 2.5Z",
        fill: r,
        strokeLinejoin: "round",
        strokeLinecap: "round"
      }
    )
  }
), _a = ({
  size: e = 24,
  fill: r = "currentColor",
  style: n,
  className: t = ""
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 21 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: n,
    className: `video-pause ${t}`,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        d: "M14.3077 9.79704C15.2308 10.3317 15.2308 11.6683 14.3077 12.203L8.07693 15.8118C7.15385 16.3465 6 15.6782 6 14.6089V7.39113C6 6.32183 7.15385 5.65352 8.07692 6.18817L14.3077 9.79704Z",
        fill: r,
        strokeLinejoin: "round"
      }
    )
  }
), Fa = ({
  stroke: e = "currentColor",
  strokeWidth: r = 2,
  size: n = 24,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: t,
    className: `volume ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M25 6V42L12.1884 32.839H6.1C4.94019 32.839 4 31.9436 4 30.839V17.0108C4 15.9062 4.94019 15.0108 6.1 15.0108H12.1884L25 6Z",
          stroke: e,
          strokeWidth: r,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32 15C32.6232 15.5565 33.1882 16.1797 33.6842 16.8588C35.1388 18.8504 36 21.3222 36 24C36 26.6546 35.1536 29.1068 33.7218 31.0894C33.2168 31.7886 32.6392 32.4294 32 33",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M34 41C39.9889 37.4287 44 30.8901 44 23.4156C44 16.0574 40.1127 9.60618 34.2776 6",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Za = ({
  stroke: e = "currentColor",
  strokeWidth: r = 4,
  size: n = 24,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    onClick: a,
    style: t,
    className: `volume-muted ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M25 6V42L12.1884 32.839H6.1C4.94019 32.839 4 31.9436 4 30.839V17.0108C4 15.9062 4.94019 15.0108 6.1 15.0108H12.1884L25 6Z",
          stroke: e,
          strokeWidth: r,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M41 19L32 29",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32 19L41 29",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ua = ({
  stroke: e = "currentColor",
  size: r = 24,
  fill: n,
  strokeWidth: t = 2,
  style: s,
  className: a = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: s,
    className: `video-small-screen ${a}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M16 40H6C4.89543 40 4 39.1046 4 38V10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V16",
          fill: n || "none",
          stroke: n || e,
          strokeWidth: t,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 24H26C24.8954 24 24 24.8954 24 26V38C24 39.1046 24.8954 40 26 40H42C43.1046 40 44 39.1046 44 38V26C44 24.8954 43.1046 24 42 24Z",
          fill: n || "none",
          stroke: n || e,
          strokeWidth: t,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Pa = ({
  stroke: e = "currentColor",
  size: r = 24,
  fill: n,
  strokeWidth: t = 2,
  style: s,
  className: a = "",
  reverse: i
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: s,
    className: `video-full-width ${a}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: i ? "M18.5459 15.364L15.3639 12.182L18.5459 9.00005" : "M15.1816 9L18.3636 12.182L15.1816 15.364",
          fill: n || "none",
          stroke: n || e,
          strokeWidth: t,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: i ? "M5.18164 9.00024L8.36362 12.1822L5.18164 15.3642" : "M8.18164 15.364L4.99966 12.182L8.18164 9.00005",
          fill: n || "none",
          stroke: n || e,
          strokeWidth: t,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: t / 2,
          y: "4.5",
          width: 24 - t,
          height: "16",
          rx: "2",
          fill: n || "none",
          stroke: n || e,
          strokeWidth: t,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), qa = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `loop ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M43.8233 25.2305C43.7019 25.9889 43.5195 26.727 43.2814 27.4395C42.763 28.9914 41.9801 30.4222 40.9863 31.6785C38.4222 34.9201 34.454 37 30 37H16C9.39697 37 4 31.6785 4 25C4 18.3502 9.39624 13 16 13H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M38 7L44 13L38 19",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), za = ({
  size: e = 16,
  stroke: r = "currentcolor",
  strokeWidth: n = 4,
  className: t = "",
  style: s
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `file ${t}`,
    style: s,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: r,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M43 22H5",
          stroke: r,
          strokeWidth: "4",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ya = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 3,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `download ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 24.0083V42H42V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M33 23L24 32L15 23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M23.9917 6V32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ga = ({
  size: e = 20,
  stroke: r = "currentcolor",
  strokeWidth: n = 3,
  className: t = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    className: `upload ${t}`,
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 24.0083V42H42V24",
          stroke: r,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M33 15L24 6L15 15",
          stroke: r,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M23.9917 32V6",
          stroke: r,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ja = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 3,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `web-add ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M25 40H7C5.34315 40 4 38.6569 4 37V11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V24.9412",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z",
          fill: "none",
          stroke: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32 35H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M38 29V41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "circle",
        {
          r: n,
          transform: "matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)",
          fill: e
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "circle",
        {
          r: n,
          transform: "matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)",
          fill: e
        }
      )
    ]
  }
), Ka = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `announcement ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "4",
          y: "15",
          width: "40",
          height: "26",
          rx: n,
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 7L16 15H32L24 7Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 24H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 32H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Xa = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `audio-file ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M8 44V4H31L40 14.5V44H8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32 14L26 16.9688V31.5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "circle",
        {
          cx: "20.5",
          cy: "31.5",
          r: "5.5",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Qa = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `book ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M8 40C8 36 8 10 8 10C8 6.68629 10.8654 4 14.4 4H40V36C40 36 19.9815 36 14.4 36C9.36225 36 8 36.6842 8 40Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 44H40V36H12C9.79086 36 8 37.7909 8 40C8 42.2091 9.79086 44 12 44Z",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Wa = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `clipboard ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M17 7H16H10C8.89543 7 8 7.89543 8 9L8 42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V9C40 7.89543 39.1046 7 38 7H33.0499H31",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "17",
          y: "4",
          width: "14",
          height: "6",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ei = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `document ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32 6H22V42H32V6Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 6H32V42H42V6Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M10 6L18 7L14.5 42L6 41L10 6Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M37 18V15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M27 18V15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ri = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `email-download ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M36 15H44V28V41H4V28V15H12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 19V5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M30 13L24 19L18 13",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 15L24 30L44 15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ni = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `email-push ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M36 15H44V28V41H4V28V15H12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 19V5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M30 11L24 5L18 11",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 15L24 30L44 15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), oi = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `email-success ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M44 24V9H24H4V24V39H24",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M31 36L36 40L44 30",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 9L24 24L44 9",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ti = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `email-fail ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M44 24V9H24H4V24V39H24",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M40 31L32 39",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32 31L40 39",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 9L24 24L44 9",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), si = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `file-add ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M33 29V43",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M26 36H33H40",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M30 4V14H40",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ai = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `code-file ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M30 4L40 14",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M27 24L32 29L27 34",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M21 24L16 29L21 34",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ii = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `star-file ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M30 4L40 14",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M20.85 21C18.7237 21 17 23.0086 17 25.4864C17 29.9727 21.55 34.0513 24 35C26.45 34.0513 31 29.9727 31 25.4864C31 23.0086 29.2763 21 27.15 21C25.8479 21 24.6967 21.7533 24 22.9062C23.3033 21.7533 22.1521 21 20.85 21Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ci = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `text-file ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M30 4L40 14",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 22V36",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18 22H24L30 22",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), li = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `folder ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M43 22H5",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M5 16V28",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M43 16V28",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), di = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `code-folder ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M28 22L33 27L28 32",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M20 22L15 27L20 32",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), pi = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `folder-download ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M30 28L23.9933 34L18 28.0134",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 20V34",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ui = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `folder-add ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18 27H30",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 21L24 33",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round"
        }
      )
    ]
  }
), xi = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `folder-upload ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M30 25.9867L24 20L18 26",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 20V34",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), hi = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `formatting-brush ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "8",
          y: "24",
          width: "32",
          height: "18",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 13H18V6H30V13H44V24H4V13Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M16 32L16 42",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round"
        }
      )
    ]
  }
), fi = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `instruction ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "4",
          y: "8",
          width: "40",
          height: "32",
          rx: "2",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V16H4V10Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M25 23L23 34",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M31 23L37 28L31 34",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M17 22.9999L11 27.9999L17 33.9999",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), gi = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `list-view ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "4",
          y: "6",
          width: "40",
          height: "36",
          rx: "3",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 14H44",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M20 24H36",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M20 32H36",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 24H14",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 32H14",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ji = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `list-view ${s}`,
    onClick: a,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        d: "M24.7073 9.56521L9.85801 24.4145C6.34329 27.9292 6.34329 33.6277 9.85801 37.1424V37.1424C13.3727 40.6571 19.0712 40.6571 22.5859 37.1424L40.2636 19.4647C42.6067 17.1216 42.6067 13.3226 40.2636 10.9794V10.9794C37.9205 8.63628 34.1215 8.63628 31.7783 10.9794L14.1007 28.6571C12.9291 29.8287 12.9291 31.7282 14.1007 32.8997V32.8997C15.2722 34.0713 17.1717 34.0713 18.3433 32.8997L33.1925 18.0505",
        stroke: e,
        strokeWidth: n,
        "stroke-linecap": "round",
        strokeLinejoin: "round"
      }
    )
  }
), mi = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `log ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "13",
          y: "10",
          width: "28",
          height: "34",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M35 10V4H8C7.44772 4 7 4.44772 7 5V38H13",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M21 22H33",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M21 30H33",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), vi = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `email ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 39H44V24V9H24H4V24V39Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 9L24 24L44 9",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 9H4V24",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M44 24V9H24",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Li = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `email-open ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M44 18V39.8182C44 41.0232 43.1046 42 42 42H6C4.89543 42 4 41.0232 4 39.8182V18L24 31L44 18Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 17.7839L24 4L44 17.7839",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), wi = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `note-pad ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18 8H11C10.4477 8 10 8.44772 10 9V43C10 43.5523 10.4477 44 11 44H39C39.5523 44 40 43.5523 40 43V9C40 8.44772 39.5523 8 39 8H32",
          stroke: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18 13V8H21.9505C21.9778 8 22 7.97784 22 7.9505V6C22 4.34315 23.3431 3 25 3C26.6569 3 28 4.34315 28 6V7.9505C28 7.97784 28.0222 8 28.0495 8H32V13C32 13.5523 31.5523 14 31 14H19C18.4477 14 18 13.5523 18 13Z",
          fill: "none",
          stroke: e,
          strokeWidth: n
        }
      )
    ]
  }
), bi = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `schedule ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "4",
          y: "10",
          width: "40",
          height: "30",
          rx: "2",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M14 6V14",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M25 23L14 23",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M34 31L14 31",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M34 6V14",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round"
        }
      )
    ]
  }
), yi = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `text-scan ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 33V39C6 40.6569 7.34315 42 9 42H15",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M33 42H39C40.6569 42 42 40.6569 42 39V33",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 15V9C42 7.34315 40.6569 6 39 6H33",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 15V9C6 7.34315 7.34315 6 9 6H15",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 15V35",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M17 15H24H31",
          stroke: e,
          strokeWidth: n,
          "stroke-linecap": "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ci = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `web-page ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "4",
          y: "8",
          width: "40",
          height: "32",
          rx: "3",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z",
          fill: "none",
          stroke: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "circle",
        {
          r: "2",
          transform: "matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)",
          fill: e
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "circle",
        {
          r: "2",
          transform: "matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)",
          fill: e
        }
      )
    ]
  }
), ki = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `web-page ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M5 19H43V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V19Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M16 31L22 37L34 25",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M16 5V13",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32 5V13",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Mi = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `calendar ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M5 19H43V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V19Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M5 9C5 7.89543 5.89543 7 7 7H41C42.1046 7 43 7.89543 43 9V19H5V9Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M16 4V12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32 4V12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M28 34H34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M14 34H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M28 26H34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M14 26H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), $i = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `coupon ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M9.00013 16.0001L34 6.00008L38.0004 16.0001",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 16H44V22C41 22 38 24 38 27.5C38 31 41 34 44 34V40H4V34C7.00016 34 10 32 10 28C10 24 7 22 4 22V16Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M17 25.3848H23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M17 31.3848H31",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Ni = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `ticket ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 8H11C11 8 12 13 17 13C22 13 23 8 23 8H44V40H23C23 40 22 35 17 35C12 35 11 40 11 40H4V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M17 19V21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M17 27L17 29",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M25 21H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M25 27H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Si = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `bank-card ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V38C44 39.1046 43.1046 40 42 40H6C4.89543 40 4 39.1046 4 38V10Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 16H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M27 32H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M44 10V26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 10V26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Hi = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `consume ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 14C4 12.8954 4.89543 12 6 12H42C43.1046 12 44 12.8954 44 14V40C44 41.1046 43.1046 42 42 42H6C4.89543 42 4 41.1046 4 40V14Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M19 19L24 24L29 19",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18 25H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18 31H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 25V35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M8 6H40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ei = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `commodity ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M9.78101 9.75193C9.90612 8.75107 10.7569 8 11.7656 8H36.2344C37.2431 8 38.0939 8.75107 38.219 9.75193L41.719 37.7519C41.8682 38.9456 40.9374 40 39.7344 40H8.26556C7.06257 40 6.1318 38.9456 6.28101 37.7519L9.78101 9.75193Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M15 18C15 18 17 22 24 22C31 22 33 18 33 18",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ri = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 3,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `dollar ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 2V46",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M35 6C35 6 24.9706 6 20 6C15.0294 6 11 10.0294 11 15C11 19.9706 15.0294 24 20 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M13 42C13 42 23.0294 42 28 42C32.9706 42 37 37.9706 37 33C37 28.0294 32.9706 24 28 24H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ii = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `check-stroke ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M16 24L22 30L34 18",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Vi = ({
  fill: e = "currentcolor",
  size: r = 16,
  style: n,
  className: t = ""
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `check-fill ${t}`,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM11.4142 24C11.4142 24.4142 11.7475 24.7475 12.4142 25.4142L19.5858 32.5858C20.2525 33.2525 20.5858 33.5858 21 33.5858C21.4142 33.5858 21.7475 33.2525 22.4142 32.5858L36.2525 18.7475C36.9191 18.0809 37.2525 17.7475 37.2525 17.3333C37.2525 16.9191 36.9191 16.5858 36.2525 15.9191L35.7475 15.4142C35.0809 14.7475 34.7475 14.4142 34.3333 14.4142C33.9191 14.4142 33.5858 14.7475 32.9191 15.4142L22.4142 25.9191C21.7475 26.5858 21.4142 26.9191 21 26.9191C20.5858 26.9191 20.2525 26.5858 19.5858 25.9191L15.7475 22.0809C15.0809 21.4142 14.7475 21.0809 14.3333 21.0809C13.9191 21.0809 13.5858 21.4142 12.9191 22.0809L12.4142 22.5858C11.7475 23.2525 11.4142 23.5858 11.4142 24Z",
        fill: e
      }
    )
  }
), Bi = ({
  fill: e = "currentcolor",
  stroke: r = "currentcolor",
  size: n = 16,
  strokeWidth: t = 2,
  style: s,
  className: a = ""
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    style: s,
    className: `check ${a}`,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M3.41421 25.9142C2.74755 25.2475 2.41421 24.9142 2.41421 24.5C2.41421 24.0858 2.74755 23.7525 3.41421 23.0858L6.08579 20.4142C6.75245 19.7475 7.08579 19.4142 7.5 19.4142C7.91421 19.4142 8.24755 19.7475 8.91421 20.4142L17.0858 28.5858C17.7525 29.2525 18.0858 29.5858 18.5 29.5858C18.9142 29.5858 19.2475 29.2525 19.9142 28.5858L39.0858 9.41421C39.7525 8.74755 40.0858 8.41421 40.5 8.41421C40.9142 8.41421 41.2475 8.74755 41.9142 9.41421L44.5858 12.0858C45.2525 12.7525 45.5858 13.0858 45.5858 13.5C45.5858 13.9142 45.2525 14.2475 44.5858 14.9142L19.9142 39.5858C19.2475 40.2525 18.9142 40.5858 18.5 40.5858C18.0858 40.5858 17.7525 40.2525 17.0858 39.5858L3.41421 25.9142Z",
        fill: t === 0 ? e : "none",
        stroke: t === 0 ? "none" : r,
        strokeWidth: t
      }
    )
  }
), Ai = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `error-stroke ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M29.6567 18.3432L18.343 29.6569",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18.3433 18.3432L29.657 29.6569",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ti = ({
  fill: e = "currentcolor",
  size: r = 16,
  style: n,
  className: t = ""
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `error-fill ${t}`,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM14.4146 16.8059C14.4258 17.2036 14.7468 17.5246 15.3889 18.1667L19.808 22.5858C20.4747 23.2525 20.808 23.5858 20.808 24C20.808 24.4142 20.4747 24.7475 19.808 25.4142L15.3889 29.8333C14.7468 30.4754 14.4258 30.7964 14.4146 31.1941C14.4141 31.2128 14.4141 31.2316 14.4146 31.2503C14.4258 31.648 14.7468 31.9691 15.3889 32.6111C16.0309 33.2532 16.352 33.5742 16.7497 33.5854C16.7684 33.5859 16.7872 33.5859 16.8059 33.5854C17.2036 33.5742 17.5246 33.2532 18.1667 32.6111L22.5858 28.192C23.2525 27.5253 23.5858 27.192 24 27.192C24.4142 27.192 24.7475 27.5253 25.4142 28.192L29.8333 32.6111C30.4754 33.2532 30.7964 33.5742 31.1941 33.5854C31.2128 33.5859 31.2316 33.5859 31.2503 33.5854C31.648 33.5742 31.9691 33.2532 32.6111 32.6111C33.2532 31.9691 33.5742 31.648 33.5854 31.2503C33.5859 31.2316 33.5859 31.2128 33.5854 31.1941C33.5742 30.7964 33.2532 30.4754 32.6111 29.8333L28.192 25.4142C27.5253 24.7475 27.192 24.4142 27.192 24C27.192 23.5858 27.5253 23.2525 28.192 22.5858L32.6111 18.1667C33.2532 17.5246 33.5742 17.2036 33.5854 16.8059C33.5859 16.7872 33.5859 16.7684 33.5854 16.7497C33.5742 16.352 33.2532 16.0309 32.6111 15.3889C31.9691 14.7468 31.648 14.4258 31.2503 14.4146C31.2316 14.4141 31.2128 14.4141 31.1941 14.4146C30.7964 14.4258 30.4754 14.7468 29.8333 15.3889L25.4142 19.808C24.7475 20.4747 24.4142 20.808 24 20.808C23.5858 20.808 23.2525 20.4747 22.5858 19.808L18.1667 15.3889C17.5246 14.7468 17.2036 14.4258 16.8059 14.4146C16.7872 14.4141 16.7684 14.4141 16.7497 14.4146C16.352 14.4258 16.0309 14.7468 15.3889 15.3889C14.7468 16.0309 14.4258 16.352 14.4146 16.7497C14.4141 16.7684 14.4141 16.7872 14.4146 16.8059Z",
        fill: e
      }
    )
  }
), Oi = ({
  fill: e = "currentcolor",
  stroke: r = "currentcolor",
  size: n = 16,
  strokeWidth: t = 2,
  style: s,
  className: a = ""
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    style: s,
    className: `error ${a}`,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M3.41421 8.25217C2.74755 7.58551 2.41421 7.25218 2.41421 6.83796C2.41421 6.42375 2.74755 6.09042 3.41421 5.42375L5.42375 3.41421C6.09042 2.74755 6.42375 2.41421 6.83796 2.41421C7.25218 2.41421 7.58551 2.74755 8.25218 3.41421L18.0025 13.1645C18.6691 13.8312 19.0025 14.1645 19.4167 14.1645C19.8309 14.1645 20.1642 13.8312 20.8309 13.1645L30.5812 3.41421C31.2478 2.74755 31.5812 2.41421 31.9954 2.41421C32.4096 2.41421 32.7429 2.74755 33.4096 3.41421L35.4191 5.42375C36.0858 6.09042 36.4191 6.42375 36.4191 6.83796C36.4191 7.25218 36.0858 7.58551 35.4191 8.25218L25.6688 18.0025C25.0022 18.6691 24.6688 19.0025 24.6688 19.4167C24.6688 19.8309 25.0022 20.1642 25.6688 20.8309L35.4191 30.5812C36.0858 31.2478 36.4191 31.5812 36.4191 31.9954C36.4191 32.4096 36.0858 32.7429 35.4191 33.4096L33.4096 35.4191C32.7429 36.0858 32.4096 36.4191 31.9954 36.4191C31.5812 36.4191 31.2478 36.0858 30.5812 35.4191L20.8309 25.6688C20.1642 25.0022 19.8309 24.6688 19.4167 24.6688C19.0025 24.6688 18.6691 25.0022 18.0025 25.6688L8.25217 35.4191C7.58551 36.0858 7.25218 36.4191 6.83796 36.4191C6.42375 36.4191 6.09042 36.0858 5.42375 35.4191L3.41421 33.4096C2.74755 32.7429 2.41421 32.4096 2.41421 31.9954C2.41421 31.5812 2.74755 31.2478 3.41421 30.5812L13.1645 20.8309C13.8312 20.1642 14.1645 19.8309 14.1645 19.4167C14.1645 19.0025 13.8312 18.6691 13.1645 18.0025L3.41421 8.25217Z",
        fill: t === 0 ? e : "none",
        stroke: t === 0 ? "none" : r,
        strokeWidth: t
      }
    )
  }
), Di = ({
  size: e = 16,
  stroke: r = "currentcolor",
  style: n,
  className: t = ""
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `info-stroke ${t}`,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        d: "M24 18.8889V26.8333V34.7778M24 16.3333V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",
        stroke: r,
        strokeWidth: "2"
      }
    )
  }
), _i = ({
  fill: e = "currentcolor",
  size: r = 16,
  style: n,
  className: t = ""
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `info-fill ${t}`,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 12.5C26.5 13.4428 26.5 13.9142 26.2071 14.2071C25.9142 14.5 25.4428 14.5 24.5 14.5H24C23.0572 14.5 22.5858 14.5 22.2929 14.2071C22 13.9142 22 13.4428 22 12.5V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V12.5ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V21.5C22 20.5572 22 20.0858 22.2929 19.7929C22.5858 19.5 23.0572 19.5 24 19.5H24.5C25.4428 19.5 25.9142 19.5 26.2071 19.7929C26.5 20.0858 26.5 20.5572 26.5 21.5V36.5Z",
        fill: e
      }
    )
  }
), Fi = ({
  fill: e = "currentcolor",
  stroke: r = "currentcolor",
  size: n = 16,
  strokeWidth: t = 2,
  style: s,
  className: a = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    style: s,
    className: `info ${a}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41L21 21C21 20.0572 21 19.5858 21.2929 19.2929C21.5858 19 22.0572 19 23 19H26C26.9428 19 27.4142 19 27.7071 19.2929C28 19.5858 28 20.0572 28 21L28 41Z",
          fill: t === 0 ? e : "none",
          stroke: t === 0 ? "none" : r,
          strokeWidth: t
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M28 10C28 10.9428 28 11.4142 27.7071 11.7071C27.4142 12 26.9428 12 26 12H23C22.0572 12 21.5858 12 21.2929 11.7071C21 11.4142 21 10.9428 21 10V7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5L26 5C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7V10Z",
          fill: t === 0 ? e : "none",
          stroke: t === 0 ? "none" : r,
          strokeWidth: t
        }
      )
    ]
  }
), Zi = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `attention-stroke ${s}`,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        d: "M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",
        stroke: e,
        strokeWidth: n
      }
    )
  }
), Ui = ({
  fill: e = "currentcolor",
  size: r = 16,
  style: n,
  className: t = ""
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `attention-fill ${t}`,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z",
        fill: e
      }
    )
  }
), Pi = ({
  fill: e = "currentcolor",
  stroke: r = "currentcolor",
  size: n = 16,
  strokeWidth: t = 2,
  style: s,
  className: a = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    style: s,
    className: `attention ${a}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z",
          fill: t === 0 ? e : "none",
          stroke: t === 0 ? "none" : r,
          strokeWidth: t
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z",
          fill: t === 0 ? e : "none",
          stroke: t === 0 ? "none" : r,
          strokeWidth: t
        }
      )
    ]
  }
), qi = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `question-stroke ${s}`,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        d: "M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",
        stroke: e,
        strokeWidth: n
      }
    )
  }
), zi = ({
  fill: e = "currentcolor",
  size: r = 16,
  style: n,
  className: t = ""
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `question-fill ${t}`,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z",
        fill: e
      }
    )
  }
), Yi = ({
  fill: e = "currentcolor",
  stroke: r = "currentcolor",
  size: n = 16,
  strokeWidth: t = 2,
  style: s,
  className: a = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    style: s,
    className: `question ${a}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z",
          fill: t === 0 ? e : "none",
          stroke: t === 0 ? "none" : r,
          strokeWidth: t
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z",
          fill: t === 0 ? e : "none",
          stroke: t === 0 ? "none" : r,
          strokeWidth: t
        }
      )
    ]
  }
), Gi = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `hourglass-empty ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M7 4H41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M7 44H41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M11 44C13.6667 30.6611 18 23.9944 24 24C30 24.0056 34.3333 30.6722 37 44H11Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M37 4C34.3333 17.3389 30 24.0056 24 24C18 23.9944 13.6667 17.3278 11 4H37Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ji = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `hourglass-full ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M7 4H41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M7 44H41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M11 44C13.6667 30.6611 18 23.9944 24 24C30 24.0056 34.3333 30.6722 37 44H11Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M37 4C34.3333 17.3389 30 24.0056 24 24C18 23.9944 13.6667 17.3278 11 4H37Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M21 15H27",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M19 38H29",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ki = ({
  fill: e = "currentcolor",
  stroke: r = "currentcolor",
  size: n = 16,
  strokeWidth: t = 2,
  style: s,
  className: a = ""
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    fill: "none",
    viewBox: "0 0 24 24",
    width: n,
    height: n,
    className: `increase ${a}`,
    style: s,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        d: "M15 12h4.5L12 2 4.5 12H9v10h6V12z",
        fill: t === 0 ? e : "none",
        stroke: t === 0 ? "none" : r,
        strokeWidth: t
      }
    )
  }
), Xi = ({
  stroke: e = "currentColor",
  strokeWidth: r = 2,
  size: n = 24,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: t,
    className: `image ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M14.5 8C13.8406 8.37652 13.2062 8.79103 12.6 9.24051C11.5625 10.0097 10.6074 10.8814 9.75 11.8402C6.79377 15.1463 5 19.4891 5 24.2455C5 34.6033 13.5066 43 24 43C34.4934 43 43 34.6033 43 24.2455C43 19.4891 41.2062 15.1463 38.25 11.8402C37.3926 10.8814 36.4375 10.0097 35.4 9.24051C34.7938 8.79103 34.1594 8.37652 33.5 8",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 4V24",
          stroke: e,
          strokeWidth: r,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Qi = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `toggle ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 9L42 9",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 19L42 19",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 26L24 40L42 26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Wi = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `collapse ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M44 20H28V4",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 28H20V44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ec = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `reload ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 8V17H33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), rc = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `undo ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M11.2721 36.7279C14.5294 39.9853 19.0294 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C19.0294 6 14.5294 8.01472 11.2721 11.2721C9.61407 12.9301 6 17 6 17",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 9V17H14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), nc = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `sort ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M19 6V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M7 17.8994L19 5.89941",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M29 42.1006V6.10059",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M29 42.1006L41 30.1006",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), oc = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `sort-descending ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M23 8H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M14 41L6 33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M14 7V41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M23 18H39",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M23 28H35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M23 38H31",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), tc = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `sort-ascending ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M23 9H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M5 16L13 8",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M13 8V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M23 19H39",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M23 29H35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M23 39H31",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), sc = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `back ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M10 33C10 25.7011 14.103 19.4168 20 16.5919C22.1347 15.5693 24.5046 15 27 15C36.3888 15 44 23.0589 44 33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18 28L10 33L4 25",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ac = ({
  stroke: e = "currentcolor",
  size: r = 24,
  fill: n,
  strokeWidth: t = 2,
  style: s,
  className: a = "",
  onClick: i
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: s,
    className: `last-step ${a}`,
    onClick: i,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M44 40.8361C39.1069 34.8632 34.7617 31.4739 30.9644 30.6682C27.1671 29.8625 23.5517 29.7408 20.1182 30.303V41L4 23.5453L20.1182 7V17.167C26.4667 17.2172 31.8638 19.4948 36.3095 24C40.7553 28.5052 43.3187 34.1172 44 40.8361Z",
        fill: n,
        stroke: e,
        strokeWidth: n ? 1 : t,
        strokeLinejoin: "round"
      }
    )
  }
), ic = ({
  stroke: e = "currentcolor",
  size: r = 24,
  fill: n,
  strokeWidth: t = 2,
  style: s,
  className: a = "",
  onClick: i
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: s,
    className: `next-step ${a}`,
    onClick: i,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4 40.8361C8.89307 34.8632 13.2383 31.4739 17.0356 30.6682C20.8329 29.8625 24.4483 29.7408 27.8818 30.303V41L44 23.5453L27.8818 7V17.167C21.5333 17.2172 16.1362 19.4948 11.6905 24C7.24474 28.5052 4.68126 34.1172 4 40.8361Z",
        fill: n,
        stroke: e,
        strokeWidth: n ? 1 : t,
        strokeLinejoin: "round"
      }
    )
  }
), cc = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `ahead ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M30 28L38 33L44 25",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), lc = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `drag ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M30 28L38 33L44 25",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), dc = ({
  size: e = 16,
  stroke: r = "currentcolor",
  strokeWidth: n,
  className: t = "",
  style: s
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `add ${t}`,
    style: s,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24.0605 10L24.0239 38",
          stroke: r,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M10 24L38 24",
          stroke: r,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), pc = ({
  size: e = 16,
  stroke: r = "currentcolor",
  strokeWidth: n = 2,
  className: t = "",
  style: s,
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    className: `clear ${t}`,
    style: s,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M14 14L34 34",
          stroke: r,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M14 34L34 14",
          stroke: r,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), uc = ({
  stroke: e = "currentColor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: t,
    className: `delete ${s}`,
    onClick: (i) => a == null ? void 0 : a(i),
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M9 10V44H39V10H9Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M20 20V33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M28 20V33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 10H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M16 10L19.289 4H28.7771L32 10H16Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), xc = ({
  fill: e,
  stroke: r = "currentcolor",
  size: n = 16,
  strokeWidth: t = 2,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    className: `copy ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
          fill: e || "none",
          stroke: e || r,
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
          fill: e || "none",
          stroke: e || r,
          strokeWidth: t,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), hc = ({
  size: e = 20,
  stroke: r = "currentcolor",
  strokeWidth: n = 2,
  className: t = "",
  onClick: s
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: `close ${t}`,
    onClick: s,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M14 14L34 34",
          stroke: r,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M14 34L34 14",
          stroke: r,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), fc = ({
  fill: e,
  stroke: r = "currentcolor",
  size: n = 20,
  strokeWidth: t = 2,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: `close-circle ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
          fill: e || "none",
          stroke: e || r,
          strokeWidth: t,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M29.6567 18.3432L18.343 29.6569",
          stroke: e ? "#fff" : "none",
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18.3433 18.3432L29.657 29.6569",
          stroke: e ? "white" : "none",
          strokeWidth: t,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), gc = ({
  fill: e = "currentcolor",
  size: r = 20,
  className: n = ""
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    className: `color-picker ${n}`,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        d: "M762.517333 121.194667a49.621333 49.621333 0 0 1 70.144 0L902.826667 191.36a49.6 49.6 0 0 1 0 70.101333l-140.309334 140.309334 70.144 70.122666a49.578667 49.578667 0 0 1-16.085333 80.896 49.578667 49.578667 0 0 1-54.058667-10.752l-43.818666-43.818666-319.893334 319.829333a353.706667 353.706667 0 0 1-175.424 95.637333l-8.661333 1.578667a95.637333 95.637333 0 0 1-105.557333-116.48 360.128 360.128 0 0 1 96.106666-172.928L525.866667 305.322667l-43.818667-43.861334a49.642667 49.642667 0 0 1 15.296-82.176 49.6 49.6 0 0 1 54.826667 12.074667l70.144 70.101333 140.266666-140.266666h-0.042666z m-184.106666 236.714666L257.877333 678.485333a285.738667 285.738667 0 0 0-72.597333 123.136l-3.669333 14.037334a21.205333 21.205333 0 0 0 25.152 25.514666l15.146666-3.669333a279.296 279.296 0 0 0 124.309334-72.021333l319.872-319.893334-87.637334-87.68z",
        fill: e
      }
    )
  }
), jc = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `zoom-in-arrow ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 6L16 15.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 41.8995L16 32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42.0001 41.8995L32.1006 32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M41.8995 6L32 15.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M33 6H42V15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 33V42H33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M15 42H6V33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 15V6H15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), mc = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `zoom-out-arrow ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 6L16 15.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 41.8995L16 32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42.0001 41.8995L32.1006 32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M41.8995 6L32 15.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32 7V16H41",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M16 7V16H7",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M16 41V32H7",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32 41V32H40.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), vc = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `zoom-in ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M33 6H42V15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 33V42H33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M15 42H6V33",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 15V6H15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Lc = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `zoom-out ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M33 6V15H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M15 6V15H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M15 42V33H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M33 42V33H41.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), wc = ({
  stroke: e = "currentcolor",
  size: r = 16,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `out ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M23.9917 6H6V42H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M33 33L42 24L33 15",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M16 23.9917H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), bc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `zoom-in-btn ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M21 15L21 27",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M15.0156 21.0156L27 21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M33.2216 33.2217L41.7069 41.707",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), yc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `zoom-in-btn ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M15 21L27 21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M33.2216 33.2217L41.7069 41.707",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Cc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `square-add ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M16 6H8C6.89543 6 6 6.89543 6 8V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M16 42H8C6.89543 42 6 41.1046 6 40V32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32 42H40C41.1046 42 42 41.1046 42 40V32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32 6H40C41.1046 6 42 6.89543 42 8V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32 24L16 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 32L24 16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), kc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `dash-add ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 32L24 16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 27L42 21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 27L6 21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M14 6H8C6.89543 6 6 6.89543 6 8V14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M34 6H40C41.1046 6 42 6.89543 42 8V14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M34 42H40C41.1046 42 42 41.1046 42 40V34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M14 42H8C6.89543 42 6 41.1046 6 40V34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M27 6H21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32 24L16 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M27 42H21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Mc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `adjustment ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M5 8C5 6.34315 6.34315 5 8 5H40C41.6569 5 43 6.34315 43 8V40C43 41.6569 41.6569 43 40 43H8C6.34315 43 5 41.6569 5 40V8Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M36 12L12 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 16H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M27 33H35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M16 12V20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), $c = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `alphabetical-sorting ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M36 4V43.5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M7 28H23L7 44H23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M7 20L15.2759 4L23 20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M44 36L36 44L28 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Nc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `alphabetical-sorting-reverse ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M36 4V43.5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M7 4H23L7 20H23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M7 44L15.2759 28L23 44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M44 36L36 44L28 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Sc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `brightness ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24.0205 35.3535C30.0956 35.3535 35.0205 30.4286 35.0205 24.3535C35.0205 18.2784 30.0956 13.3535 24.0205 13.3535C17.9454 13.3535 13.0205 18.2784 13.0205 24.3535C13.0205 30.4286 17.9454 35.3535 24.0205 35.3535Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M38.9603 9.00977L36.5 11.4842",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M11.0674 36.7451L9.02051 38.8037",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 41.3533L24 44.3533",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M43.9998 23.3535L39.9998 23.3535",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M37.5324 36.3361L39.9998 38.8035",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M24.0205 17.3535C20.1545 17.3535 17.0205 20.4875 17.0205 24.3535C17.0205 28.2195 20.1545 31.3535 24.0205 31.3535",
          fill: e
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4.00019 24.3535L8.00019 24.3535",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M10.0444 9.00974L12.0972 11.0625",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 3.35371L24 7.35371",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Hc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `layer-front ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M41 18H19C18.4477 18 18 18.4477 18 19V41C18 41.5523 18.4477 42 19 42H41C41.5523 42 42 41.5523 42 41V19C42 18.4477 41.5523 18 41 18Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M9.96906 6H6V10.0336",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M9.99705 30H6V26.012",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M26.0023 6H30V10.0152",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M16.0283 6H20.0083",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 16C6 18.6536 6 19.9869 6 20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M30 16C30 18.6765 30 19.3456 30 18.0074",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M15.9922 30H17.9996",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Ec = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `layer-back ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M30 18H41C41.5523 18 42 18.4477 42 19V41C42 41.5523 41.5523 42 41 42H19C18.4477 42 18 41.5523 18 41V30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M9.96906 6H6V10.0336",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M9.99705 30H6V26.012",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M26 30H29.9971V26.012",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M26.0023 6H30V9.99785",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M16.0283 6H20.0083",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 16V20.0148",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M30 16V20.0148",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M15.9922 30H19.9996",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Rc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `clear-formate ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsxs("g", { "clip-path": "url(#icon-388a63e7c11bad3)", children: [
        /* @__PURE__ */ o.exports.jsx(
          "path",
          {
            d: "M44.7818 24.1702L31.918 7.09935L14.1348 20.5L27.5 37L30.8556 34.6643L44.7818 24.1702Z",
            fill: "none",
            stroke: e,
            strokeWidth: n,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ o.exports.jsx(
          "path",
          {
            d: "M27.4998 37L23.6613 40.0748L13.0978 40.074L10.4973 36.6231L4.06543 28.0876L14.4998 20.2248",
            stroke: e,
            strokeWidth: n,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ o.exports.jsx(
          "path",
          {
            d: "M13.2056 40.072L44.5653 40.072",
            stroke: e,
            strokeWidth: n,
            strokeLinecap: "round"
          }
        )
      ] }),
      /* @__PURE__ */ o.exports.jsx("defs", { children: /* @__PURE__ */ o.exports.jsx("clipPath", { id: "icon-388a63e7c11bad3", children: /* @__PURE__ */ o.exports.jsx("rect", { width: "48", height: "48", fill: e }) }) })
    ]
  }
), Ic = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `edit ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M7 42H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Vc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `clip-edit ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "circle",
        {
          cx: "13",
          cy: "35",
          r: "7",
          fill: "none",
          stroke: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "circle",
        {
          cx: "35",
          cy: "35",
          r: "7",
          fill: "none",
          stroke: e,
          strokeWidth: n
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M8 6L32 28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M40 6L16 28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Bc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `filter ${s}`,
    onClick: a,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        d: "M6 9L20.4 25.8178V38.4444L27.6 42V25.8178L42 9H6Z",
        fill: "none",
        stroke: e,
        strokeWidth: n,
        strokeLinejoin: "round"
      }
    )
  }
), Ac = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `lock ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "6",
          y: "22",
          width: "36",
          height: "22",
          rx: "2",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M14 22V14C14 8.47715 18.4772 4 24 4C29.5228 4 34 8.47715 34 14V22",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 30V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Tc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `unlock ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "7",
          y: "22.0476",
          width: "34",
          height: "22",
          rx: "2",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M14 22V14.0047C13.9948 8.87022 17.9227 4.56718 23.0859 4.05117C28.249 3.53516 32.9673 6.97408 34 12.0059",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 30V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Oc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `merge-cells ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M20 14V5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V43C4 43.5523 4.44772 44 5 44H19C19.5523 44 20 43.5523 20 43V34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M28 34V43C28 43.5523 28.4477 44 29 44H43C43.5523 44 44 43.5523 44 43V5C44 4.44772 43.5523 4 43 4H29C28.4477 4 28 4.44772 28 5V14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M28 24H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M5 24H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32.7485 28.8184L31.1575 27.2274L27.9756 24.0454L31.1575 20.8634L32.7485 19.2724",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M15.375 28.8184L16.966 27.2274L20.148 24.0454L16.966 20.8634L15.375 19.2724",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Dc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `split-cells ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 14V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V43C20 43.5523 19.5523 44 19 44H5C4.44772 44 4 43.5523 4 43V34",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M44 34V43C44 43.5523 43.5523 44 43 44H29C28.4477 44 28 43.5523 28 43V5C28 4.44772 28.4477 4 29 4H43C43.5523 4 44 4.44772 44 5V14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M28 24L44 24.0132",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 24.0132L20 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M39.2275 28.7778L40.8185 27.1868L44.0005 24.0049L40.8185 20.8229L39.2275 19.2319",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M8.75537 28.7861L7.16438 27.1951L3.9824 24.0132L7.16438 20.8312L8.75537 19.2402",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), _c = ({
  stroke: e = "currentcolor",
  size: r = 24,
  fill: n,
  strokeWidth: t = 2,
  style: s,
  className: a = "",
  onClick: i
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: s,
    className: `cursor-move ${a}`,
    onClick: i,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
        fill: n,
        stroke: e,
        strokeWidth: n ? 0 : t,
        strokeLinejoin: "round"
      }
    )
  }
), vo = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `line-break ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 9H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 19H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 29H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 39H16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 39C24 39 34.2386 39 37 39C39.7614 39 42 36.7614 42 34C42 31.2386 39.7614 29 37 29C35.7115 29 32 29 32 29M24 39L28 35M24 39L28 43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Fc = ({
  fill: e = "currentcolor",
  size: r = 24,
  style: n,
  className: t = "",
  onClick: s
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: n,
    className: `quote ${t}`,
    onClick: s,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M18.8533 9.11587C11.3227 13.9521 7.13913 19.5811 6.30256 26.0028C5.00021 35.9999 13.9404 40.8932 18.4703 36.4966C23.0002 32.1 20.2848 26.5195 17.0047 24.9941C13.7246 23.4686 11.7187 23.9999 12.0686 21.9614C12.4185 19.923 17.0851 14.2712 21.1849 11.6391C21.4569 11.4078 21.5604 10.959 21.2985 10.6185C21.1262 10.3946 20.7883 9.95545 20.2848 9.30102C19.8445 8.72875 19.4227 8.75017 18.8533 9.11587Z",
          fill: e
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M38.6789 9.11587C31.1484 13.9521 26.9648 19.5811 26.1282 26.0028C24.8259 35.9999 33.7661 40.8932 38.296 36.4966C42.8259 32.1 40.1105 26.5195 36.8304 24.9941C33.5503 23.4686 31.5443 23.9999 31.8943 21.9614C32.2442 19.923 36.9108 14.2712 41.0106 11.6391C41.2826 11.4078 41.3861 10.959 41.1241 10.6185C40.9519 10.3946 40.614 9.95545 40.1105 9.30102C39.6702 8.72875 39.2484 8.75017 38.6789 9.11587Z",
          fill: e
        }
      )
    ]
  }
), Zc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `scan ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M16 6H8C6.89543 6 6 6.89543 6 8V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M16 42H8C6.89543 42 6 41.1046 6 40V32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32 42H40C41.1046 42 42 41.1046 42 40V32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32 6H40C41.1046 6 42 6.89543 42 8V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M34 24L14 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M34 16L14 16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M34 32L14 32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Uc = ({
  size: e = 24,
  fill: r,
  stroke: n = "currentcolor",
  strokeWidth: t = 2,
  style: s,
  className: a = ""
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    style: s,
    className: `like ${a}`,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        d: "M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z",
        fill: r,
        stroke: n,
        strokeWidth: r ? 0 : t,
        strokeLinejoin: "round",
        strokeLinecap: "round"
      }
    )
  }
), Pc = ({
  size: e = 24,
  fill: r,
  stroke: n = "currentcolor",
  strokeWidth: t = 2,
  style: s,
  className: a = ""
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    style: s,
    className: `star ${a}`,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        d: "M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z",
        fill: r,
        stroke: n,
        strokeWidth: r ? 0 : t,
        strokeLinejoin: "round"
      }
    )
  }
), qc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `pen ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M27.9521 12.3872L36.4374 20.8725",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), zc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-bottom ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "17",
          y: "6",
          width: "14",
          height: "28",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 42H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Yc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-top ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "17",
          y: "14.5",
          width: "14",
          height: "28",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 6.5H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Gc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-left ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "14.5",
          y: "17",
          width: "28",
          height: "14",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6.5 6V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Jc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-right ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "6",
          y: "17",
          width: "28",
          height: "14",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 6V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Kc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-horizontally ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "7",
          y: "17",
          width: "34",
          height: "14",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 6V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Xc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-vertically ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "17",
          y: "7",
          width: "14",
          height: "34",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 24H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Qc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `text-align-left ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 9H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M34 19H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 29H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M34 39H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Wc = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `text-align-right ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 9H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 19H14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 29H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 39H14",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), el = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `text-align-center ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M36 19H12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 9H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 29H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M36 39H12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), rl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `text-align-justify ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 19H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 9H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 29H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 39H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), nl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `text-align-middle ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18 36L24 30L30 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M23.9999 30.9998V43.9998",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18 12L24 18L30 12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M23.9999 17.0002V4.00022",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 24.0004H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ol = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-bottom-center ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18 32V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 24V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M30 28V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), tl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-bottom-left ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 32V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18 24V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 28V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), sl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-bottom-right ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 32V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M30 24V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M36 28V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), al = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-horizontal-bottom ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M22 36H26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18 30H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M20 24H28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), il = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-horizontal-center ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M22 30H26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18 24H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M20 18H28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), cl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-horizontal-top ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M22 24H26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18 18H30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M20 12H28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), ll = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-left-bottom ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 36H16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 30H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 24H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), dl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-left-center ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 30H16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 24H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 18H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), pl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-left-top ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 24H16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 18H24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 12H20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), ul = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-right-bottom ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32 36H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 30H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M28 24H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), xl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-right-center ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32 30H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 24H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M28 18H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), hl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-right-top ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32 24H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 18H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M28 12H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), fl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-top-center ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18 12V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 12V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M30 12V20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), gl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-top-left ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 12V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18 12V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 12V20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), jl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-top-right ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 12V16",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M30 12V24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M36 12V20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), ml = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-vertical-center ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18 22V26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 18V30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M30 20V28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), vl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-vertical-left ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 22V26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18 18V30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 20V28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Ll = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `align-vertical-right ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "6",
          y: "6",
          width: "36",
          height: "36",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 22V26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M30 18V30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M36 20V28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), wl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `flip-horizontally ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 6V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 34L16 12V34H4Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M44 34H32V12L44 34Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), bl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `flip-vertically ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 24L6 24",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M14 4L36 16H14V4Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M14 44V32H36L14 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), yl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `font-size ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M8 10.9333L8 6H40V10.9333",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 6V42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M16 42H32",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Cl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `line-height ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 7H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 41H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 13L14 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18 28L30 28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 13L34 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), kl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `line-width ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M5 40L5 8",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 13L14 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M18 28L30 28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 13L34 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M43 40L43 8",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Ml = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `title-h1 ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M25 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 24H25",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M34.2261 24L39.0001 19.0166V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), $l = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `title-h2 ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M7 24H23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32 25C32 21.8334 34.6667 20 37 20C39.3334 20 42 21.8334 42 25C42 30.7 32 34.9333 32 40H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Nl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `title-h3 ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 8V40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M7 24H23",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M32 20H42L35 29C39 29 42 31 42 35C42 39 39 40 37 40C34.619 40 33 39 32 37.9",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Sl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `indent-left ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 9H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M19 19H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M19 29H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M11 19L6 24L11 29",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 39H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Hl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `indent-right ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 9H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M29 19H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M29 29H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M37 19L42 24L37 29",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M42 39H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), El = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `drop-shadow-up ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M24 43C28.4183 43 32.4183 41.2091 35.3138 38.3138C38.2091 35.4183 40 31.4183 40 27C40 22.5817 38.2091 18.5817 35.3138 15.6863C32.4183 12.7909 28.4183 11 24 11C19.5817 11 15.5817 12.7909 12.6863 15.6863C9.79086 18.5817 8 22.5817 8 27C8 31.4183 9.79086 35.4183 12.6863 38.3138C15.5817 41.2091 19.5817 43 24 43Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M39.5566 11.4437C35.5754 7.46244 30.0754 5 24.0002 5C17.9251 5 12.4251 7.46244 8.44385 11.4437",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Rl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `drop-shadow-down ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M24 37C28.4183 37 32.4183 35.2091 35.3138 32.3138C38.2091 29.4183 40 25.4183 40 21C40 16.5817 38.2091 12.5817 35.3138 9.68629C32.4183 6.79086 28.4183 5 24 5C19.5817 5 15.5817 6.79086 12.6863 9.68629C9.79086 12.5817 8 16.5817 8 21C8 25.4183 9.79086 29.4183 12.6863 32.3138C15.5817 35.2091 19.5817 37 24 37Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M39.5562 36.5564C35.5749 40.5374 30.0749 43 23.9997 43C17.9246 43 12.4246 40.5374 8.44336 36.5564",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Il = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `drop-shadow-left ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M27 40C31.4183 40 35.4183 38.2091 38.3138 35.3138C41.2091 32.4183 43 28.4183 43 24C43 19.5817 41.2091 15.5817 38.3138 12.6863C35.4183 9.79086 31.4183 8 27 8C22.5817 8 18.5817 9.79086 15.6863 12.6863C12.7909 15.5817 11 19.5817 11 24C11 28.4183 12.7909 32.4183 15.6863 35.3138C18.5817 38.2091 22.5817 40 27 40Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M11.4437 8.4436C7.46244 12.4248 5 17.9248 5 24C5 30.0751 7.46244 35.5751 11.4437 39.5564",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Vl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `drop-shadow-right ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M21 40C25.4183 40 29.4183 38.2091 32.3138 35.3138C35.2091 32.4183 37 28.4183 37 24C37 19.5817 35.2091 15.5817 32.3138 12.6863C29.4183 9.79086 25.4183 8 21 8C16.5817 8 12.5817 9.79086 9.68629 12.6863C6.79086 15.5817 5 19.5817 5 24C5 28.4183 6.79086 32.4183 9.68629 35.3138C12.5817 38.2091 16.5817 40 21 40Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M36.5566 39.5564C40.5377 35.5751 43.0002 30.0751 43.0002 24C43.0002 17.9248 40.5377 12.4248 36.5566 8.4436",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Bl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `inner-shadow-left ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M24 44C29.5229 44 34.5229 41.7613 38.1422 38.1422C41.7613 34.5229 44 29.5229 44 24C44 18.4772 41.7613 13.4772 38.1422 9.85787C34.5229 6.23858 29.5229 4 24 4C18.4772 4 13.4772 6.23858 9.85787 9.85787C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85787 38.1422C13.4772 41.7613 18.4772 44 24 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M33.8996 14.1005C31.3661 11.567 27.8661 10 24.0001 10C20.1341 10 16.6341 11.567 14.1006 14.1005",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Al = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `inner-shadow-down ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M24 44C29.5229 44 34.5229 41.7613 38.1422 38.1422C41.7613 34.5229 44 29.5229 44 24C44 18.4772 41.7613 13.4772 38.1422 9.85787C34.5229 6.23858 29.5229 4 24 4C18.4772 4 13.4772 6.23858 9.85787 9.85787C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85787 38.1422C13.4772 41.7613 18.4772 44 24 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M33.8996 33.8995C31.3661 36.4329 27.8661 38 24.0001 38C20.1341 38 16.6341 36.4329 14.1006 33.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Tl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `inner-shadow-left ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M24 44C29.5229 44 34.5229 41.7613 38.1422 38.1422C41.7613 34.5229 44 29.5229 44 24C44 18.4772 41.7613 13.4772 38.1422 9.85787C34.5229 6.23858 29.5229 4 24 4C18.4772 4 13.4772 6.23858 9.85787 9.85787C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85787 38.1422C13.4772 41.7613 18.4772 44 24 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M14.1005 14.1005C11.567 16.634 10 20.134 10 24C10 27.866 11.567 31.366 14.1005 33.8995",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Ol = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `inner-shadow-right ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M24 44C29.5229 44 34.5229 41.7613 38.1422 38.1422C41.7613 34.5229 44 29.5229 44 24C44 18.4772 41.7613 13.4772 38.1422 9.85787C34.5229 6.23858 29.5229 4 24 4C18.4772 4 13.4772 6.23858 9.85787 9.85787C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85787 38.1422C13.4772 41.7613 18.4772 44 24 44Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M33.8994 33.8995C36.4328 31.366 37.9999 27.866 37.9999 24C37.9999 20.134 36.4328 16.634 33.8994 14.1005",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Lo = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `layer ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 11.9143L24 19L44 11.9143L24 5L4 11.9143Z",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 20L24 27L44 20",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 28L24 35L44 28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M4 36L24 43L44 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Dl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `check-list ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M5 10L8 13L14 7",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M5 24L8 27L14 21",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M5 38L8 41L14 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M21 24H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M21 38H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M21 10H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), _l = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `alphabet-list ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M20 9H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M20 19H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M20 29H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M20 39H42",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 29H12L6 39H12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx("path", { d: "M11 8.9999L7 9L6.3 16H11.7L11 8.9999Z", fill: "none" }),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 19L6.3 16M12 19L11.7 16M11.7 16L11 8.9999L7 9L6.3 16M11.7 16H6.3",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Fl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `checkbox-list ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M20 24H44H20Z",
          fill: "none"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M20 24H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M20 38H44H20Z",
          fill: "none"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M20 38H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M20 10H44H20Z",
          fill: "none"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M20 10H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "4",
          y: "34",
          width: "8",
          height: "8",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "4",
          y: "20",
          width: "8",
          height: "8",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "4",
          y: "6",
          width: "8",
          height: "8",
          fill: "none",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Zl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `radio-list ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M9 42C11.2091 42 13 40.2091 13 38C13 35.7909 11.2091 34 9 34C6.79086 34 5 35.7909 5 38C5 40.2091 6.79086 42 9 42Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M9 14C11.2091 14 13 12.2092 13 10C13 7.79086 11.2091 6 9 6C6.79086 6 5 7.79086 5 10C5 12.2092 6.79086 14 9 14Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M9 28C11.2091 28 13 26.2092 13 24C13 21.7908 11.2091 20 9 20C6.79086 20 5 21.7908 5 24C5 26.2092 6.79086 28 9 28Z",
          stroke: e,
          strokeWidth: n,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M21 24H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M21 38H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M21 10H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ul = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `number-list ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M9 4V13",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 13H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 27H6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6 19.9998C6 19.9998 9 16.9998 11 19.9998C13 22.9999 6 26.9998 6 26.9998",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M6.00016 34.5001C6.00016 34.5001 8.00016 31.5 11.0002 33.5C14.0002 35.5 11.0002 38 11.0002 38C11.0002 38 14.0002 40.5 11.0002 42.5C8.00015 44.5 6.00015 41.5 6.00015 41.5",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M11 38H9",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M9 4L6 6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M21 24H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M21 38H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M21 10H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Pl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `mask ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx("circle", { cx: "24", cy: "24", r: "20", stroke: e, strokeWidth: n }),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M31 5.25928C23.4067 8.09675 18 15.417 18 24.0001C18 32.5831 23.4067 39.9034 31 42.7408",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M37 9L18 22",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M41 14L19 29",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M43 20L22 35",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M43 28L26 40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), ql = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `delete-strike ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M5 24H43",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 24C40 30 34 44 24 44C13.9999 44 12 36 12 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M35.9999 12C35.9999 12 33 4 23.9999 4C14.9999 4 11.4359 11.5995 15.6096 18",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 36C12 36 15.9999 44 24 44C32 44 36.564 36.4005 32.3903 30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), zl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `tail ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 4V36H44",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M20 12H36V28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 12H4",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M36 44V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Yl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `text-bold ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M24 24C29.5056 24 33.9688 19.5228 33.9688 14C33.9688 8.47715 29.5056 4 24 4H11V24H24Z",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M28.0312 44C33.5368 44 38 39.5228 38 34C38 28.4772 33.5368 24 28.0312 24H11V44H28.0312Z",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Gl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `text-italic ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M20 6H36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M12 42H28",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M29 5.95215L19 41.9998",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Jl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `text-underline ${s}`,
    onClick: a,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M8 44H40",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M37 6.09717C37 12.7638 37 15.3335 37 22.0002C37 29.1799 31.1797 35.0002 24 35.0002C16.8203 35.0002 11 29.1799 11 22.0002C11 15.3335 11 12.7638 11 6.09717",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round"
        }
      )
    ]
  }
), Kl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `arrow-line ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 42V6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M36 30L24 42L12 30",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Xl = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `arrow-double ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M31 17L24 24L17 17",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M31 26L24 33L17 26",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), Ql = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `arrow ${s}`,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        d: "M36 18L24 30L12 18",
        stroke: e,
        strokeWidth: n,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), Wl = ({
  fill: e = "currentcolor",
  stroke: r = "currentcolor",
  size: n = 24,
  strokeWidth: t = 2,
  style: s,
  className: a = ""
}) => /* @__PURE__ */ o.exports.jsx(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    fill: "none",
    style: s,
    className: `arrow-triangle ${a}`,
    children: /* @__PURE__ */ o.exports.jsx(
      "path",
      {
        d: "M36 19L24 31L12 19H36Z",
        fill: t === 0 ? e : "none",
        stroke: t === 0 ? "none" : r,
        strokeWidth: t,
        strokeLinejoin: "round"
      }
    )
  }
), ed = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `arrow-to ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24.0083 33.8995V6",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M36 22L24 34L12 22",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M36 42H12",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), rd = ({
  stroke: e = "currentcolor",
  size: r = 24,
  strokeWidth: n = 2,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: r,
    height: r,
    viewBox: "0 0 48 48",
    fill: "none",
    style: t,
    className: `arrow-nav ${s}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M14 12L26 24L14 36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M34 12V36",
          stroke: e,
          strokeWidth: n,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), nd = ({
  stroke: e = "currentcolor",
  strokeWidth: r = 2,
  size: n = 24,
  className: t = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  "svg",
  {
    width: n,
    height: n,
    viewBox: "0 0 48 48",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    className: `color-picker ${t}`,
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M15 12L18 6H30L33 12H15Z",
          fill: "none",
          stroke: e,
          strokeWidth: r,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "rect",
        {
          x: "4",
          y: "12",
          width: "40",
          height: "30",
          rx: "3",
          fill: "none",
          stroke: e,
          strokeWidth: r,
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "path",
        {
          d: "M24 35C28.4183 35 32 31.4183 32 27C32 22.5817 28.4183 19 24 19C19.5817 19 16 22.5817 16 27C16 31.4183 19.5817 35 24 35Z",
          fill: "none",
          stroke: e,
          strokeWidth: r,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), E = ({ name: e, ...r }) => {
  switch (e) {
    case "home":
      return /* @__PURE__ */ o.exports.jsx(va, { ...r });
    case "application":
      return /* @__PURE__ */ o.exports.jsx(La, { ...r });
    case "more":
      return /* @__PURE__ */ o.exports.jsx(wa, { ...r });
    case "more-line":
      return /* @__PURE__ */ o.exports.jsx(ba, { ...r });
    case "refresh":
      return /* @__PURE__ */ o.exports.jsx(ya, { ...r });
    case "female":
      return /* @__PURE__ */ o.exports.jsx(Ca, { ...r });
    case "male":
      return /* @__PURE__ */ o.exports.jsx(ka, { ...r });
    case "preview-open":
      return /* @__PURE__ */ o.exports.jsx(Ma, { ...r });
    case "preview-close":
      return /* @__PURE__ */ o.exports.jsx($a, { ...r });
    case "avatar":
      return /* @__PURE__ */ o.exports.jsx(Na, { ...r });
    case "tag":
      return /* @__PURE__ */ o.exports.jsx(Sa, { ...r });
    case "setting":
      return /* @__PURE__ */ o.exports.jsx(Ha, { ...r });
    case "config-setting":
      return /* @__PURE__ */ o.exports.jsx(Ea, { ...r });
    case "collection":
      return /* @__PURE__ */ o.exports.jsx(Ra, { ...r });
    case "share":
      return /* @__PURE__ */ o.exports.jsx(Ia, { ...r });
    case "translate":
      return /* @__PURE__ */ o.exports.jsx(Va, { ...r });
    case "light":
      return /* @__PURE__ */ o.exports.jsx(Ba, { ...r });
    case "dark":
      return /* @__PURE__ */ o.exports.jsx(Aa, { ...r });
    case "search":
      return /* @__PURE__ */ o.exports.jsx(Ta, { ...r });
    case "image":
      return /* @__PURE__ */ o.exports.jsx(Oa, { ...r });
    case "video-play":
      return /* @__PURE__ */ o.exports.jsx(Da, { ...r });
    case "video-pause":
      return /* @__PURE__ */ o.exports.jsx(_a, { ...r });
    case "volume":
      return /* @__PURE__ */ o.exports.jsx(Fa, { ...r });
    case "volume-muted":
      return /* @__PURE__ */ o.exports.jsx(Za, { ...r });
    case "video-small-screen":
      return /* @__PURE__ */ o.exports.jsx(Ua, { ...r });
    case "video-full-width":
      return /* @__PURE__ */ o.exports.jsx(Pa, { ...r });
    case "loop":
      return /* @__PURE__ */ o.exports.jsx(qa, { ...r });
    case "file":
      return /* @__PURE__ */ o.exports.jsx(za, { ...r });
    case "download":
      return /* @__PURE__ */ o.exports.jsx(Ya, { ...r });
    case "upload":
      return /* @__PURE__ */ o.exports.jsx(Ga, { ...r });
    case "web-add":
      return /* @__PURE__ */ o.exports.jsx(Ja, { ...r });
    case "announcement":
      return /* @__PURE__ */ o.exports.jsx(Ka, { ...r });
    case "audio-file":
      return /* @__PURE__ */ o.exports.jsx(Xa, { ...r });
    case "book":
      return /* @__PURE__ */ o.exports.jsx(Qa, { ...r });
    case "clipboard":
      return /* @__PURE__ */ o.exports.jsx(Wa, {});
    case "document":
      return /* @__PURE__ */ o.exports.jsx(ei, { ...r });
    case "email-download":
      return /* @__PURE__ */ o.exports.jsx(ri, { ...r });
    case "email-push":
      return /* @__PURE__ */ o.exports.jsx(ni, { ...r });
    case "email-success":
      return /* @__PURE__ */ o.exports.jsx(oi, { ...r });
    case "email-fail":
      return /* @__PURE__ */ o.exports.jsx(ti, { ...r });
    case "file-add":
      return /* @__PURE__ */ o.exports.jsx(si, { ...r });
    case "code-file":
      return /* @__PURE__ */ o.exports.jsx(ai, { ...r });
    case "star-file":
      return /* @__PURE__ */ o.exports.jsx(ii, { ...r });
    case "text-file":
      return /* @__PURE__ */ o.exports.jsx(ci, { ...r });
    case "folder":
      return /* @__PURE__ */ o.exports.jsx(li, { ...r });
    case "code-folder":
      return /* @__PURE__ */ o.exports.jsx(di, { ...r });
    case "folder-download":
      return /* @__PURE__ */ o.exports.jsx(pi, { ...r });
    case "folder-add":
      return /* @__PURE__ */ o.exports.jsx(ui, { ...r });
    case "folder-upload":
      return /* @__PURE__ */ o.exports.jsx(xi, { ...r });
    case "formatting-brush":
      return /* @__PURE__ */ o.exports.jsx(hi, { ...r });
    case "instruction":
      return /* @__PURE__ */ o.exports.jsx(fi, { ...r });
    case "list-view":
      return /* @__PURE__ */ o.exports.jsx(gi, { ...r });
    case "link":
      return /* @__PURE__ */ o.exports.jsx(ji, { ...r });
    case "log":
      return /* @__PURE__ */ o.exports.jsx(mi, { ...r });
    case "email":
      return /* @__PURE__ */ o.exports.jsx(vi, { ...r });
    case "email-open":
      return /* @__PURE__ */ o.exports.jsx(Li, { ...r });
    case "note-pad":
      return /* @__PURE__ */ o.exports.jsx(wi, { ...r });
    case "schedule":
      return /* @__PURE__ */ o.exports.jsx(bi, { ...r });
    case "text-scan":
      return /* @__PURE__ */ o.exports.jsx(yi, { ...r });
    case "web-page":
      return /* @__PURE__ */ o.exports.jsx(Ci, { ...r });
    case "plan":
      return /* @__PURE__ */ o.exports.jsx(ki, { ...r });
    case "calendar":
      return /* @__PURE__ */ o.exports.jsx(Mi, { ...r });
    case "coupon":
      return /* @__PURE__ */ o.exports.jsx($i, { ...r });
    case "ticket":
      return /* @__PURE__ */ o.exports.jsx(Ni, { ...r });
    case "bank-card":
      return /* @__PURE__ */ o.exports.jsx(Si, { ...r });
    case "consume":
      return /* @__PURE__ */ o.exports.jsx(Hi, { ...r });
    case "commodity":
      return /* @__PURE__ */ o.exports.jsx(Ei, { ...r });
    case "dollar":
      return /* @__PURE__ */ o.exports.jsx(Ri, { ...r });
    case "check-stroke":
      return /* @__PURE__ */ o.exports.jsx(Ii, { ...r });
    case "check-fill":
      return /* @__PURE__ */ o.exports.jsx(Vi, { ...r });
    case "check":
      return /* @__PURE__ */ o.exports.jsx(Bi, { ...r });
    case "error-stroke":
      return /* @__PURE__ */ o.exports.jsx(Ai, { ...r });
    case "error-fill":
      return /* @__PURE__ */ o.exports.jsx(Ti, { ...r });
    case "error":
      return /* @__PURE__ */ o.exports.jsx(Oi, { ...r });
    case "info-stroke":
      return /* @__PURE__ */ o.exports.jsx(Di, { ...r });
    case "info-fill":
      return /* @__PURE__ */ o.exports.jsx(_i, { ...r });
    case "info":
      return /* @__PURE__ */ o.exports.jsx(Fi, { ...r });
    case "attention-stroke":
      return /* @__PURE__ */ o.exports.jsx(Zi, { ...r });
    case "attention-fill":
      return /* @__PURE__ */ o.exports.jsx(Ui, { ...r });
    case "attention":
      return /* @__PURE__ */ o.exports.jsx(Pi, { ...r });
    case "question-stroke":
      return /* @__PURE__ */ o.exports.jsx(qi, { ...r });
    case "question-fill":
      return /* @__PURE__ */ o.exports.jsx(zi, { ...r });
    case "question":
      return /* @__PURE__ */ o.exports.jsx(Yi, { ...r });
    case "hourglass-empty":
      return /* @__PURE__ */ o.exports.jsx(Gi, { ...r });
    case "hourglass-full":
      return /* @__PURE__ */ o.exports.jsx(Ji, { ...r });
    case "increase":
      return /* @__PURE__ */ o.exports.jsx(Ki, { ...r });
    case "switch-gear":
      return /* @__PURE__ */ o.exports.jsx(Xi, { ...r });
    case "toggle":
      return /* @__PURE__ */ o.exports.jsx(Qi, { ...r });
    case "collapse":
      return /* @__PURE__ */ o.exports.jsx(Wi, { ...r });
    case "reload":
      return /* @__PURE__ */ o.exports.jsx(ec, { ...r });
    case "undo":
      return /* @__PURE__ */ o.exports.jsx(rc, { ...r });
    case "sort":
      return /* @__PURE__ */ o.exports.jsx(nc, { ...r });
    case "sort-descending":
      return /* @__PURE__ */ o.exports.jsx(oc, { ...r });
    case "sort-ascending":
      return /* @__PURE__ */ o.exports.jsx(tc, { ...r });
    case "back":
      return /* @__PURE__ */ o.exports.jsx(sc, { ...r });
    case "last-step":
      return /* @__PURE__ */ o.exports.jsx(ac, { ...r });
    case "next-step":
      return /* @__PURE__ */ o.exports.jsx(ic, { ...r });
    case "ahead":
      return /* @__PURE__ */ o.exports.jsx(cc, { ...r });
    case "drag":
      return /* @__PURE__ */ o.exports.jsx(lc, { ...r });
    case "add":
      return /* @__PURE__ */ o.exports.jsx(dc, { ...r });
    case "square-add":
      return /* @__PURE__ */ o.exports.jsx(Cc, { ...r });
    case "dash-add":
      return /* @__PURE__ */ o.exports.jsx(kc, { ...r });
    case "clear":
      return /* @__PURE__ */ o.exports.jsx(pc, { ...r });
    case "delete":
      return /* @__PURE__ */ o.exports.jsx(uc, { ...r });
    case "copy":
      return /* @__PURE__ */ o.exports.jsx(xc, { ...r });
    case "close":
      return /* @__PURE__ */ o.exports.jsx(hc, { ...r });
    case "close-circle":
      return /* @__PURE__ */ o.exports.jsx(fc, { ...r });
    case "color-picker":
      return /* @__PURE__ */ o.exports.jsx(gc, { ...r });
    case "zoom-in-arrow":
      return /* @__PURE__ */ o.exports.jsx(jc, { ...r });
    case "zoom-out-arrow":
      return /* @__PURE__ */ o.exports.jsx(mc, { ...r });
    case "zoom-in":
      return /* @__PURE__ */ o.exports.jsx(vc, { ...r });
    case "zoom-out":
      return /* @__PURE__ */ o.exports.jsx(Lc, { ...r });
    case "zoom-in-btn":
      return /* @__PURE__ */ o.exports.jsx(bc, { ...r });
    case "zoom-out-btn":
      return /* @__PURE__ */ o.exports.jsx(yc, { ...r });
    case "out":
      return /* @__PURE__ */ o.exports.jsx(wc, { ...r });
    case "adjustment":
      return /* @__PURE__ */ o.exports.jsx(Mc, { ...r });
    case "alphabetical-sorting":
      return /* @__PURE__ */ o.exports.jsx($c, { ...r });
    case "alphabetical-sorting-reverse":
      return /* @__PURE__ */ o.exports.jsx(Nc, { ...r });
    case "brightness":
      return /* @__PURE__ */ o.exports.jsx(Sc, { ...r });
    case "layer":
      return /* @__PURE__ */ o.exports.jsx(Lo, { ...r });
    case "layer-front":
      return /* @__PURE__ */ o.exports.jsx(Hc, { ...r });
    case "layer-back":
      return /* @__PURE__ */ o.exports.jsx(Ec, { ...r });
    case "clear-formate":
      return /* @__PURE__ */ o.exports.jsx(Rc, { ...r });
    case "edit":
      return /* @__PURE__ */ o.exports.jsx(Ic, { ...r });
    case "clip-edit":
      return /* @__PURE__ */ o.exports.jsx(Vc, { ...r });
    case "filter":
      return /* @__PURE__ */ o.exports.jsx(Bc, { ...r });
    case "lock":
      return /* @__PURE__ */ o.exports.jsx(Ac, { ...r });
    case "unlock":
      return /* @__PURE__ */ o.exports.jsx(Tc, { ...r });
    case "merge-cells":
      return /* @__PURE__ */ o.exports.jsx(Oc, { ...r });
    case "slipt-cells":
      return /* @__PURE__ */ o.exports.jsx(Dc, { ...r });
    case "cursor-move":
      return /* @__PURE__ */ o.exports.jsx(_c, { ...r });
    case "line-break":
      return /* @__PURE__ */ o.exports.jsx(vo, { ...r });
    case "quote":
      return /* @__PURE__ */ o.exports.jsx(Fc, { ...r });
    case "scan":
      return /* @__PURE__ */ o.exports.jsx(Zc, { ...r });
    case "like":
      return /* @__PURE__ */ o.exports.jsx(Uc, { ...r });
    case "star":
      return /* @__PURE__ */ o.exports.jsx(Pc, { ...r });
    case "pen":
      return /* @__PURE__ */ o.exports.jsx(qc, { ...r });
    case "arrow-line":
      return /* @__PURE__ */ o.exports.jsx(Kl, { ...r });
    case "arrow-double":
      return /* @__PURE__ */ o.exports.jsx(Xl, { ...r });
    case "arrow":
      return /* @__PURE__ */ o.exports.jsx(Ql, { ...r });
    case "arrow-triangle":
      return /* @__PURE__ */ o.exports.jsx(Wl, { ...r });
    case "arrow-to":
      return /* @__PURE__ */ o.exports.jsx(ed, { ...r });
    case "arrow-nav":
      return /* @__PURE__ */ o.exports.jsx(rd, { ...r });
    case "camera":
      return /* @__PURE__ */ o.exports.jsx(nd, { ...r });
    case "align-bottom":
      return /* @__PURE__ */ o.exports.jsx(zc, { ...r });
    case "align-top":
      return /* @__PURE__ */ o.exports.jsx(Yc, { ...r });
    case "align-left":
      return /* @__PURE__ */ o.exports.jsx(Gc, { ...r });
    case "align-right":
      return /* @__PURE__ */ o.exports.jsx(Jc, { ...r });
    case "align-horizontally":
      return /* @__PURE__ */ o.exports.jsx(Kc, { ...r });
    case "align-vertically":
      return /* @__PURE__ */ o.exports.jsx(Xc, { ...r });
    case "text-align-left":
      return /* @__PURE__ */ o.exports.jsx(Qc, { ...r });
    case "text-align-right":
      return /* @__PURE__ */ o.exports.jsx(Wc, { ...r });
    case "text-align-center":
      return /* @__PURE__ */ o.exports.jsx(el, { ...r });
    case "text-align-justify":
      return /* @__PURE__ */ o.exports.jsx(rl, { ...r });
    case "text-align-middle":
      return /* @__PURE__ */ o.exports.jsx(nl, { ...r });
    case "align-bottom-center":
      return /* @__PURE__ */ o.exports.jsx(ol, { ...r });
    case "align-bottom-left":
      return /* @__PURE__ */ o.exports.jsx(tl, { ...r });
    case "align-bottom-right":
      return /* @__PURE__ */ o.exports.jsx(sl, { ...r });
    case "align-horizontally-bottom":
      return /* @__PURE__ */ o.exports.jsx(al, { ...r });
    case "align-horizontally-center":
      return /* @__PURE__ */ o.exports.jsx(il, { ...r });
    case "align-horizontally-top":
      return /* @__PURE__ */ o.exports.jsx(cl, { ...r });
    case "align-left-bottom":
      return /* @__PURE__ */ o.exports.jsx(ll, { ...r });
    case "align-left-center":
      return /* @__PURE__ */ o.exports.jsx(dl, { ...r });
    case "align-left-top":
      return /* @__PURE__ */ o.exports.jsx(pl, { ...r });
    case "align-right-bottom":
      return /* @__PURE__ */ o.exports.jsx(ul, { ...r });
    case "align-right-center":
      return /* @__PURE__ */ o.exports.jsx(xl, { ...r });
    case "align-right-top":
      return /* @__PURE__ */ o.exports.jsx(hl, { ...r });
    case "align-top-center":
      return /* @__PURE__ */ o.exports.jsx(fl, { ...r });
    case "align-top-left":
      return /* @__PURE__ */ o.exports.jsx(gl, { ...r });
    case "align-top-right":
      return /* @__PURE__ */ o.exports.jsx(jl, { ...r });
    case "align-vertical-left":
      return /* @__PURE__ */ o.exports.jsx(vl, { ...r });
    case "align-vertical-center":
      return /* @__PURE__ */ o.exports.jsx(ml, { ...r });
    case "align-vertical-right":
      return /* @__PURE__ */ o.exports.jsx(Ll, { ...r });
    case "flip-horizontally":
      return /* @__PURE__ */ o.exports.jsx(wl, { ...r });
    case "flip-vertically":
      return /* @__PURE__ */ o.exports.jsx(bl, { ...r });
    case "font-size":
      return /* @__PURE__ */ o.exports.jsx(yl, { ...r });
    case "line-height":
      return /* @__PURE__ */ o.exports.jsx(Cl, { ...r });
    case "text-bold":
      return /* @__PURE__ */ o.exports.jsx(Yl, { ...r });
    case "text-italic":
      return /* @__PURE__ */ o.exports.jsx(Gl, { ...r });
    case "text-underline":
      return /* @__PURE__ */ o.exports.jsx(Jl, { ...r });
    case "line-width":
      return /* @__PURE__ */ o.exports.jsx(kl, { ...r });
    case "line-break":
      return /* @__PURE__ */ o.exports.jsx(vo, { ...r });
    case "title-h1":
      return /* @__PURE__ */ o.exports.jsx(Ml, { ...r });
    case "title-h2":
      return /* @__PURE__ */ o.exports.jsx($l, { ...r });
    case "title-h3":
      return /* @__PURE__ */ o.exports.jsx(Nl, { ...r });
    case "indent-left":
      return /* @__PURE__ */ o.exports.jsx(Sl, { ...r });
    case "indent-right":
      return /* @__PURE__ */ o.exports.jsx(Hl, { ...r });
    case "drop-shadow-up":
      return /* @__PURE__ */ o.exports.jsx(El, { ...r });
    case "drop-shadow-down":
      return /* @__PURE__ */ o.exports.jsx(Rl, { ...r });
    case "drop-shadow-left":
      return /* @__PURE__ */ o.exports.jsx(Il, { ...r });
    case "drop-shadow-right":
      return /* @__PURE__ */ o.exports.jsx(Vl, { ...r });
    case "inner-shadow-up":
      return /* @__PURE__ */ o.exports.jsx(Bl, { ...r });
    case "inner-shadow-down":
      return /* @__PURE__ */ o.exports.jsx(Al, { ...r });
    case "inner-shadow-left":
      return /* @__PURE__ */ o.exports.jsx(Tl, { ...r });
    case "inner-shadow-right":
      return /* @__PURE__ */ o.exports.jsx(Ol, { ...r });
    case "layer":
      return /* @__PURE__ */ o.exports.jsx(Lo, { ...r });
    case "check-list":
      return /* @__PURE__ */ o.exports.jsx(Dl, { ...r });
    case "alphabet-list":
      return /* @__PURE__ */ o.exports.jsx(_l, { ...r });
    case "checkbox-list":
      return /* @__PURE__ */ o.exports.jsx(Fl, { ...r });
    case "radio-list":
      return /* @__PURE__ */ o.exports.jsx(Zl, { ...r });
    case "number-list":
      return /* @__PURE__ */ o.exports.jsx(Ul, { ...r });
    case "mask":
      return /* @__PURE__ */ o.exports.jsx(Pl, { ...r });
    case "delete-strike":
      return /* @__PURE__ */ o.exports.jsx(ql, { ...r });
    case "tail":
      return /* @__PURE__ */ o.exports.jsx(zl, { ...r });
  }
}, X = ({
  show: e,
  content: r,
  theme: n = "light",
  placement: t = "top",
  hideArrow: s = !1,
  style: a,
  className: i = ""
}) => {
  if (!!r)
    return /* @__PURE__ */ o.exports.jsxs(
      od,
      {
        className: `land-pop ${e ? "show" : ""} ${n} ${i}`,
        style: {
          top: t === "bottom" ? "100%" : t === "top" ? "auto" : "50%",
          bottom: t === "top" ? "100%" : "",
          left: t === "right" ? "100%" : t === "left" ? "auto" : "50%",
          right: t === "left" ? "100%" : "",
          transform: `translate(${t === "top" || t === "bottom" ? "-50%" : t === "left" ? "-12px" : "12px"}, ${t === "top" ? "-12px" : t === "bottom" ? "12px" : "-50%"})`,
          ...a
        },
        hideArrow: s,
        children: [
          r,
          !s && /* @__PURE__ */ o.exports.jsx(
            "div",
            {
              className: "land-pop-arrow",
              style: {
                left: t === "left" ? "100%" : t === "right" ? "0" : "50%",
                top: t === "top" ? "100%" : t === "bottom" ? "0px" : "50%",
                bottom: t === "bottom" ? "100%" : "",
                transform: `translate(-50%, -50%) rotate(${t === "top" ? "45" : t === "bottom" ? "-135" : t === "right" ? "135" : "-45"}deg)`
              }
            }
          )
        ]
      }
    );
}, od = C.div`
  position: absolute;
  padding: 8px 12px;
  width: max-content;
  font-size: 12px;
  color: var(--color-text-3);
  border-radius: 6px;
  background-color: var(--color-bg-white);
  box-shadow: var(--boxshadow-small);
  border: var(--border-1) solid var(--color-border-1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.15s linear;
  z-index: 100;
  .land-pop-arrow {
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    border-right: var(--border-1) solid var(--color-border-1);
    border-bottom: var(--border-1) solid var(--color-border-1);
    border-bottom-right-radius: var(--radius-4);
    background-color: var(--color-bg-white);
  }
  &.dark {
    background-color: ${(e) => e.hideArrow ? "rgba(0,0,0,0.68)" : "var(--color-text-2)"};
    color: var(--color-text-light);
    border: 0;
    .land-pop-arrow {
      background-color: var(--color-text-2);
      border: 0;
    }
  }
  &.show{
    opacity: 1;
    pointer-events: auto;
  }
`, gn = ({
  href: e,
  target: r = "_blank",
  status: n = "default",
  disabled: t,
  active: s,
  tip: a,
  tipProps: i,
  children: c,
  onClick: l,
  style: u,
  className: p = ""
}) => {
  const x = () => {
    switch (n) {
      case "default":
        return "var(--color-link-";
      case "primary":
        return "var(--color-primary-";
      case "success":
        return "var(--color-green-";
      case "danger":
        return "var(--color-red-";
      case "warning":
        return "var(--color-orange-";
      default:
        return "var(--color-link-";
    }
  };
  return /* @__PURE__ */ o.exports.jsxs(
    td,
    {
      href: e,
      target: r,
      className: `land-link ${s ? "active" : ""} ${t ? "disabled hover-pop" : ""} ${p}`,
      style: u,
      color: x(),
      onClick: l,
      children: [
        c,
        a && /* @__PURE__ */ o.exports.jsx(X, { content: a, ...i })
      ]
    }
  );
}, td = C.a`
    position: relative;
    width: fit-content;
    font-size: 14px;
    color: ${(e) => `${e.color}6)`};
    cursor: pointer;
    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${(e) => `${e.color}6)`};
        opacity: 0;
        transition: opacity 0.15s linear;
    }
    &:hover{
        color: ${(e) => `${e.color}7)`};
        &::before {
            opacity: 1;
            background-color: ${(e) => `${e.color}7)`};
        }
    }
    &:active,
    &.active {
        color: ${(e) => `${e.color}8)`};
        &::before {
            background-color: ${(e) => `${e.color}8)`};
        }
    }
    &.disabled {
        cursor: default;
        color: ${(e) => `${e.color}2)`};
        &:hover::before {
            opacity: 0;
        }
    }
`, sd = ({
  size: e = 18,
  strokeSize: r = 2,
  color: n = "var(--color-text-1)",
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsx(
  ad,
  {
    className: `land-loading-container ${s}`,
    style: t,
    size: e,
    strokeSize: r,
    color: n
  }
), ad = C.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: ${(e) => `${e.size}px`};
  width: ${(e) => `${e.size}px`};
  -webkit-mask: ${(e) => `radial-gradient(
      circle ${e.size / 2 - e.strokeSize}px,
      transparent 99%,
      #000 100%
    )`};
  mask: ${(e) => `radial-gradient(
      circle ${e.size / 2 - e.strokeSize}px,
      transparent 99%,
      #000 100%
    )`};
  background-image: ${(e) => `conic-gradient(transparent 25%, ${e.color})`};
  animation: spin 0.9s linear infinite;
  border-radius: 50%;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`, M2 = ({
  type: e = "default",
  direction: r = "row",
  title: n,
  link: t,
  onLinkClick: s
}) => {
  const a = te(() => r === "row" ? 16 : 24, [r]);
  return /* @__PURE__ */ o.exports.jsxs(id, { direction: r, children: [
    e === "fail" && /* @__PURE__ */ o.exports.jsx(E, { name: "error-fill", size: a, fill: "var(--color-red-6)" }),
    e === "default" && /* @__PURE__ */ o.exports.jsx(
      E,
      {
        name: "attention-fill",
        size: a,
        fill: "var(--color-primary-6)"
      }
    ),
    e === "warn" && /* @__PURE__ */ o.exports.jsx(
      E,
      {
        name: "attention-fill",
        size: a,
        fill: "var(--color-orange-6)"
      }
    ),
    e === "error" && /* @__PURE__ */ o.exports.jsx(E, { name: "attention-fill", size: a, fill: "var(--color-red-6)" }),
    e === "success" && /* @__PURE__ */ o.exports.jsx(E, { name: "check-fill", size: a, fill: "var(--color-green-6)" }),
    e === "loading" && /* @__PURE__ */ o.exports.jsx(sd, { size: a, color: "var(--color-primary-6)" }),
    /* @__PURE__ */ o.exports.jsxs("div", { className: "land-alert-title", children: [
      n,
      t && /* @__PURE__ */ o.exports.jsxs(o.exports.Fragment, { children: [
        "\uFF0C",
        /* @__PURE__ */ o.exports.jsx(gn, { onClick: s, children: t })
      ] })
    ] })
  ] });
}, id = C.div`
  display: flex;
  flex-direction: ${(e) => e.direction};
  align-items: center;
  gap: ${(e) => e.direction === "row" ? "4px" : "8px"};
  .land-alert-title {
    font-size: 14px;
    color: var(--color-text-3);
  }
`, $2 = ({
  data: e,
  target: r = document.body,
  size: n,
  style: t,
  className: s
}) => {
  const a = re(null), [i, c] = A(!1);
  return /* @__PURE__ */ o.exports.jsx(cd, { ref: a, className: `land-anchor-wrap ${s}`, style: t, children: /* @__PURE__ */ o.exports.jsx("ol", { className: "land-anchor-list", children: e == null ? void 0 : e.map((l) => /* @__PURE__ */ o.exports.jsx("li", { children: /* @__PURE__ */ o.exports.jsx("a", { href: l.href, className: `land-anchor-link ${i ? "active" : ""}`, children: l.title }) }, l.title)) }) });
}, cd = C.nav`
  .land-anchor-list{
    display: flex;
    flex-direction: column;
    width: fit-content;
    list-style: none;
  }
  .land-anchor-link{
    display: inline-block;
    padding: var(--padding-medium);
    width: 100%;
    color: var(--color-text-2);
    border-left: 1px solid var(--color-border-2);
    transition: all var(--transition-15) linear;
    &:hover{
      background-color: var(--color-bg-1);
    }
    &.active {
      color: var(--color-primary-6);
      border-color: var(--color-primary-6);
    }
  }
`, N2 = ({
  type: e = "img",
  url: r,
  className: n = "",
  style: t,
  wrapClassName: s = "",
  onChange: a
}) => {
  const i = re(null), c = re(null), l = re(null), [u, p] = A({
    w: 200,
    h: 200,
    ratio: 1
  });
  J(() => {
    if (c.current) {
      const v = c.current.getBoundingClientRect();
      p({ w: v.width, h: v.height, ratio: v.width / v.height });
    }
    if (l.current) {
      const v = l.current.getBoundingClientRect();
      p({
        w: v.width,
        h: v.height,
        ratio: v.width / v.height
      });
    }
    a == null || a(u.w, u.h), console.log(u);
  });
  const [x, g] = A("s");
  return J(() => {
    if (!i.current)
      return;
    const v = (L) => {
      L.forEach((f) => {
        const { width: w, height: m } = f.contentRect;
        console.log(w, m), w / m > u.ratio ? g("h") : w / m < u.ratio ? g("v") : g("s");
      });
    }, h = new ResizeObserver(v);
    return h.observe(i.current), () => h.disconnect();
  }), /* @__PURE__ */ o.exports.jsx(
    "div",
    {
      ref: i,
      className: `land-auto-media flex items-center justify-center width-100 height-100 ${s}`,
      children: e === "img" ? /* @__PURE__ */ o.exports.jsx(
        "img",
        {
          ref: c,
          src: r,
          className: `${x === "h" ? "height-100" : "width-100"} ${n}`,
          style: t
        }
      ) : /* @__PURE__ */ o.exports.jsx(
        "video",
        {
          src: r,
          ref: l,
          preload: "auto",
          muted: !0,
          autoPlay: !0,
          disablePictureInPicture: !0,
          "x-webkit-airplay": "deny",
          className: `${x === "h" ? "height-100" : "width-100"} ${n}`,
          style: t
        }
      )
    }
  );
}, he = ({
  text: e,
  subText: r,
  icon: n,
  width: t,
  height: s,
  justify: a = "center",
  type: i = "border",
  status: c = "default",
  size: l = "default",
  disabled: u,
  pop: p,
  PopProps: x,
  href: g,
  target: v = "_blank",
  onClick: h,
  children: L,
  style: f,
  className: w = ""
}) => {
  const m = te(() => {
    if (n) {
      if (!e && !r)
        return !0;
    } else
      return !1;
  }, [n, e, r]), y = te(() => {
    switch (c) {
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
  }, [c]), $ = te(() => {
    let M = "36px";
    if (s)
      M = s;
    else
      switch (l) {
        case "small":
          M = "28px";
          break;
        case "default":
          M = "36px";
          break;
        case "large":
          M = "40px";
          break;
        default:
          M = "36px";
          break;
      }
    return M;
  }, [t, l]);
  return /* @__PURE__ */ o.exports.jsx(o.exports.Fragment, { children: g ? /* @__PURE__ */ o.exports.jsxs(
    ld,
    {
      href: g,
      target: v,
      className: `land-button ${i} ${c} ${m ? "iconOnly" : ""} ${u ? "disabled" : ""} ${p ? "hover-pop" : ""} ${w}`,
      style: f,
      width: t,
      height: s,
      justify: a,
      color: y,
      onClick: (M) => {
        M.stopPropagation(), h == null || h(M);
      },
      children: [
        L,
        n,
        !m && /* @__PURE__ */ o.exports.jsxs("div", { children: [
          /* @__PURE__ */ o.exports.jsx("span", { children: e }),
          /* @__PURE__ */ o.exports.jsx("span", { className: "subText", children: r })
        ] }),
        p && /* @__PURE__ */ o.exports.jsx(X, { content: p, ...x })
      ]
    }
  ) : /* @__PURE__ */ o.exports.jsxs(
    st,
    {
      className: `land-button ${i} ${c} ${m ? "iconOnly" : ""} ${u ? "disabled" : ""} ${p ? "hover-pop" : ""} ${w}`,
      style: f,
      width: t,
      height: $,
      justify: a,
      color: y,
      onClick: (M) => h == null ? void 0 : h(M),
      children: [
        L,
        n,
        !m && /* @__PURE__ */ o.exports.jsxs("div", { children: [
          /* @__PURE__ */ o.exports.jsx("span", { children: e }),
          r && /* @__PURE__ */ o.exports.jsx("span", { className: "subText", children: r })
        ] }),
        p && /* @__PURE__ */ o.exports.jsx(X, { content: p, ...x })
      ]
    }
  ) });
}, st = C.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${(e) => e.justify};
  gap: var(--gap-4);
  padding: ${(e) => e.width && e.width !== "100%" ? "" : "0 18px"};
  width: ${(e) => e.width ? e.width : "fit-content"};
  height: ${(e) => e.height ? e.height : "fit-content"};
  color: ${(e) => e.color ? `${e.color}6)` : "var(--color-text-2)"};
  &:hover:not(.disabled) {
    color: ${(e) => e.color ? `${e.color}5)` : "var(--color-text-3)"};
  }
  &:active:not(.disabled) {
    color: ${(e) => e.color ? `${e.color}7)` : "var(--color-text-1)"};
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
    background-color: var(--color-bg-white);
    &:hover:not(.disabled) {
      background-color: var(--color-bg-1);
    }
    &:active:not(.disabled) {
      background-color: var(--color-bg-2);
    }
  }

  &.background {
    color: var(--color-text-white);
    background-color: ${(e) => `${e.color}6)`};
    &.default {
      color: var(--color-text-2);
      background-color: var(--color-bg-2);
      &:hover:not(.disabled) {
        background-color: var(--color-bg-3);
      }
      &:active:not(.disabled) {
        background-color: var(--color-bg-3);
      }
    }
    &:hover:not(.disabled) {
      background-color: ${(e) => `${e.color}7)`};
    }
    &:active:not(.disabled) {
      background-color: ${(e) => `${e.color}8)`};
    }
  }

  &.border {
    padding: 7px 15px;
    border: ${(e) => `var(--border-1) solid ${e.color}4)`};
    &.default {
      border-color: var(--color-border-2);
    }
    &:hover:not(.disabled) {
      background-color: ${(e) => `${e.color}1)`};
    }
    &:active:not(.disabled) {
      background-color: ${(e) => `${e.color}2)`};
    }
  }

  &.line {
    border-bottom: var(--border-1) solid transparent;
    border-color: ${(e) => `${e.color}4)`};
    border-radius: 0;
    &.default {
      border-color: var(--color-text-2);
    }
    &:hover:not(.disabled) {
      border-color: ${(e) => `${e.color}5)`};
    }
    &:active:not(.disabled) {
      border-color: ${(e) => `${e.color}7)`};
    }
  }

  &.iconOnly {
    padding: 0;
    width: ${(e) => e.height};
    height: ${(e) => e.height};
  }
  &.disabled {
    background-color: ${(e) => `${e.color}3)`};
    color: ${(e) => e.color ? `${e.color}4)` : "var(--color-text-5)"};
    cursor: not-allowed;
  }
`, ld = C.a`
  ${st};
  text-decoration: none;
`, dd = ({
  type: e = "empty",
  title: r,
  subTitle: n,
  titleLink: t,
  subTitleLink: s,
  button: a,
  onTiTleLinkClick: i,
  onSubTitleLinkClick: c
}) => /* @__PURE__ */ o.exports.jsxs(pd, { children: [
  e === "empty" && /* @__PURE__ */ o.exports.jsx(E, { name: "check-fill", size: 48, fill: "var(--color-border-2)" }),
  e === "offline" && /* @__PURE__ */ o.exports.jsx(E, { name: "error-fill", size: 48, fill: "var(--color-border-2)" }),
  /* @__PURE__ */ o.exports.jsxs("div", { className: "land-state-title", children: [
    r,
    t && /* @__PURE__ */ o.exports.jsxs(o.exports.Fragment, { children: [
      "\uFF0C",
      /* @__PURE__ */ o.exports.jsx(gn, { onClick: i, children: t })
    ] })
  ] }),
  (n || s) && /* @__PURE__ */ o.exports.jsxs("div", { className: "land-state-subTitle", children: [
    n,
    /* @__PURE__ */ o.exports.jsxs(o.exports.Fragment, { children: [
      "\uFF0C",
      /* @__PURE__ */ o.exports.jsx(gn, { onClick: c, children: s })
    ] })
  ] }),
  a && /* @__PURE__ */ o.exports.jsx(he, { children: a })
] }), pd = C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .land-state-title {
    font-size: 14px;
    margin-top: 8px;
    color: var(--color-text-3);
  }
  .land-state-subTitle {
    font-size: 12px;
    margin-top: 4px;
    color: var(--color-text-4);
  }
`, ud = ({
  url: e,
  className: r,
  imgClassName: n,
  imgStyle: t,
  style: s,
  ratio: a
}) => {
  const i = re(null), [c, l] = A(!0), [u, p] = A(!1);
  return /* @__PURE__ */ o.exports.jsxs(
    xd,
    {
      className: `${c ? "loading" : ""} relative flex items-center justify-center ${c || u ? "bg-gray radius-6 overflow-hidden" : ""} ${r}`,
      style: {
        aspectRatio: a && (c || u) ? `${a}` : "auto",
        ...s
      },
      children: [
        u && /* @__PURE__ */ o.exports.jsx(dd, { type: "offline", title: "\u52A0\u8F7D\u5931\u8D25" }),
        /* @__PURE__ */ o.exports.jsx(
          "img",
          {
            ref: i,
            src: e,
            className: `${c ? "opacity-0" : "opacity-1"} transition ${n}`,
            style: { zIndex: "1", maxWidth: "100%", ...t },
            onLoad: () => l(!1),
            onError: () => p(!0)
          }
        )
      ]
    }
  );
}, xd = C.div`
  &.loading {
    background: linear-gradient(90deg, #f2f4f7 25%, #edeff2 37%, #f2f4f7 63%);
    animation: skeleton-loading 1.4s ease infinite;
    @keyframes skeleton-loading {
      0% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0 50%;
      }
    }
  }
`, S2 = ({
  name: e = "",
  abbreviationName: r = e.slice(0, 1),
  imgUrl: n,
  content: t,
  size: s = 48,
  radius: a,
  bg: i = "var(--color-primary-2)",
  color: c = "var(--color-primary-6)",
  border: l = "",
  style: u,
  className: p = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  hd,
  {
    className: `land-avatar hover-pop ${p}`,
    style: u,
    size: s,
    radius: a ? `${a}px` : "100%",
    bg: i,
    color: c,
    border: l,
    children: [
      e && /* @__PURE__ */ o.exports.jsxs(o.exports.Fragment, { children: [
        /* @__PURE__ */ o.exports.jsx("p", { className: "land-avatar-name ellipsis", children: r }),
        /* @__PURE__ */ o.exports.jsx(X, { content: e })
      ] }),
      n && /* @__PURE__ */ o.exports.jsx("div", { className: "land-avatar-hidden-container", children: /* @__PURE__ */ o.exports.jsx(ud, { url: n }) }),
      t,
      !e && !n && !t && /* @__PURE__ */ o.exports.jsx("div", { className: "land-avatar-hidden-container", children: /* @__PURE__ */ o.exports.jsx(E, { name: "avatar", stroke: c, size: s / 1.2, strokeWidth: 3 }) })
    ]
  }
), hd = C.div`
  &.land-avatar{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(e) => `${e.size}px`};
    height: ${(e) => `${e.size}px`};
    border-radius: ${(e) => e.radius};
    background-color: ${(e) => e.bg};
    border: ${(e) => e.border};
    box-sizing: border-box;
    cursor: default;
    .land-avatar-name{
      color: ${(e) => e.color};
      font-size: 24px;
      font-weight: 500;
    }
    .land-avatar-hidden-container{
      display: flex;
      align-items: end;
      justify-content: center;
      width: 100%;
      height: 100%;
      border-radius: ${(e) => e.radius};
      overflow: hidden;
    }
  }
`, at = ({
  color: e = "var(--color-text-2)",
  size: r = 12
}) => /* @__PURE__ */ o.exports.jsx(
  fd,
  {
    className: "flex items-center justify-between",
    style: { width: `${r}px`, height: `${r}px` },
    children: Array.from({ length: 4 }).map((n, t) => /* @__PURE__ */ o.exports.jsx(
      "div",
      {
        className: "audioBar radius-2 height-100",
        style: {
          background: e
        }
      },
      t
    ))
  }
), fd = C.div`
  --speed: 1s;

  .audioBar {
    width: 2px;
    transition: background-color 0.3s ease;
    transform-origin: center;
  }

  .audioBar:nth-child(1) {
    animation: grow var(--speed) ease-in-out calc(var(--speed) * -0.45) infinite;
  }

  .audioBar:nth-child(2) {
    animation: grow var(--speed) ease-in-out calc(var(--speed) * -0.3) infinite;
  }

  .audioBar:nth-child(3) {
    animation: grow var(--speed) ease-in-out calc(var(--speed) * -0.15) infinite;
  }

  .audioBar:nth-child(4) {
    animation: grow var(--speed) ease-in-out infinite;
  }

  @keyframes grow {
    0%,
    100% {
      transform: scaleY(0.375);
    }

    50% {
      transform: scaleY(1);
    }
  }
`, it = ({
  play: e,
  animation: r = !1,
  iconSize: n = 24,
  style: t,
  className: s = "",
  onClick: a
}) => /* @__PURE__ */ o.exports.jsx(
  gd,
  {
    className: `land-audio-play-icon ${s}`,
    style: t,
    onClick: a,
    iconSize: n,
    children: e ? r ? /* @__PURE__ */ o.exports.jsx(
      E,
      {
        name: "video-play",
        size: n / 1.8,
        fill: "var(--color-primary-6)"
      }
    ) : /* @__PURE__ */ o.exports.jsx(at, { size: n / 1.8 }) : /* @__PURE__ */ o.exports.jsx(E, { name: "video-pause", size: 24, fill: "var(--color-primary-6)" })
  }
), gd = C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(e) => `${e.iconSize}px`};
  height: ${(e) => `${e.iconSize}px`};
`, ct = ({ audioUrl: e, direction: r = "row", style: n, className: t = "" }) => {
  const s = re(null), [a, i] = A(!1);
  return J(() => {
    if (!s.current)
      return;
    const c = s.current;
    a ? c.play() : c.pause();
  }, [a]), /* @__PURE__ */ o.exports.jsxs(jd, { direction: r, className: t, style: n, children: [
    /* @__PURE__ */ o.exports.jsx(
      it,
      {
        play: a,
        onClick: (c) => {
          c.stopPropagation(), i(!a);
        }
      }
    ),
    /* @__PURE__ */ o.exports.jsx("audio", { ref: s, src: e })
  ] });
}, jd = C.div`
  position: relative;
  display: flex;
  flex-direction: ${(e) => e.direction};
  align-items: flex-end;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;
ct.AudioButton = it;
ct.AudioAnimationIcon = at;
const H2 = ({
  isDot: e,
  count: r,
  exceedCount: n = 99,
  content: t,
  radius: s = 20,
  bg: a = "var(--color-red-6)",
  color: i = "var(--color-text-white)",
  border: c = "",
  children: l
}) => {
  function u(p) {
    return /^[A-Z]+$/.test(p);
  }
  return /* @__PURE__ */ o.exports.jsxs(md, { className: "land-badge-wrap", radius: `${s}px`, isDot: e, bg: a, color: i, border: c, large: u(`${r || t}`), children: [
    /* @__PURE__ */ o.exports.jsx("div", { className: "land-badge-content", children: e ? null : t || (r <= n ? r : `${n}+`) }),
    l
  ] });
}, md = C.div`
  &.land-badge-wrap{
    position: relative;
    .land-badge-content{
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--gap-2);
      padding:${(e) => e.isDot ? "" : "0 6px"};
      min-width: ${(e) => e.isDot ? "8px" : "20px"};
      height: ${(e) => e.isDot ? "8px" : "20px"};
      box-sizing: border-box;
      border-radius: ${(e) => e.radius};
      background-color: ${(e) => e.bg};
      color: ${(e) => e.color};
      border: ${(e) => e.border};
      font-size: ${(e) => e.large ? "10px" : "12px"};
      font-weight: ${(e) => e.large ? 500 : 400};
      transform: translate(30%,-30%);
    }
  }
`, E2 = ({
  data: e = [],
  onChange: r,
  style: n,
  className: t = ""
}) => {
  var c;
  const s = re(null), [a, i] = A(!1);
  return J(() => {
    !s.current || (s.current.scrollWidth >= s.current.offsetWidth ? i(!0) : i(!1));
  }, []), /* @__PURE__ */ o.exports.jsx(vd, { className: `land-breadCrumb-wrap overflow-auto ${t}`, style: n, children: (c = e.reverse()) == null ? void 0 : c.map((l) => /* @__PURE__ */ o.exports.jsxs(
    "div",
    {
      className: "land-breadCrumb-item relative hover-pop",
      onClick: () => r == null ? void 0 : r(l),
      children: [
        /* @__PURE__ */ o.exports.jsx("span", { ref: s, className: `land-breadcrumb-label ${l.maxWidth ? "ellipsis" : ""}`, style: { maxWidth: `${l.maxWidth}px` }, children: l.label }),
        /* @__PURE__ */ o.exports.jsx(E, { name: "arrow", className: "-rotate-90", size: 16, strokeWidth: 4 }),
        a && /* @__PURE__ */ o.exports.jsx(X, { content: l.label })
      ]
    },
    l.key
  )) });
}, vd = C.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  .land-breadCrumb-item{
    display: flex;
    align-items: center;
    .land-breadcrumb-label{
      font-size: var(--font-content-medium);
      color: var(--color-text-4);
      white-space: nowrap;
      cursor: pointer;
      transition: all var(--transition-15) linear;
      &:hover{
        color: var(--color-text-2);
      }
    }
    svg{
      margin: 0 4px;
      color: var(--color-border-3);
    }
  }
`, lt = ({
  title: e,
  type: r = "h1",
  prefix: n,
  sub: t,
  info: s,
  style: a,
  className: i = "",
  onClick: c
}) => /* @__PURE__ */ o.exports.jsxs(
  Ld,
  {
    className: `land-title ${i}`,
    style: a,
    onClick: () => c == null ? void 0 : c(),
    children: [
      n && /* @__PURE__ */ o.exports.jsx("span", { className: "land-title-prefix", children: n }),
      r === "h1" && /* @__PURE__ */ o.exports.jsx("h1", { children: e }),
      r === "h2" && /* @__PURE__ */ o.exports.jsx("h2", { children: e }),
      r === "h3" && /* @__PURE__ */ o.exports.jsx("h3", { children: e }),
      r === "p" && /* @__PURE__ */ o.exports.jsx("p", { children: e }),
      s && /* @__PURE__ */ o.exports.jsxs("div", { className: "land-title-info hover-pop", children: [
        /* @__PURE__ */ o.exports.jsx(E, { name: "info-stroke", stroke: "var(--color-text-4)" }),
        /* @__PURE__ */ o.exports.jsx(X, { content: s, style: { maxWidth: "200px" } })
      ] }),
      t && typeof t == "string" ? /* @__PURE__ */ o.exports.jsx("div", { className: "land-title-sub", children: t }) : /* @__PURE__ */ o.exports.jsx(o.exports.Fragment, { children: t })
    ]
  }
), Ld = C.div`
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
    font-size: 14px;
    font-weight: 400;
  }
  .land-title-sub {
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
  .land-title-info {
    position: relative;
    display: flex;
    align-items: center;
  }
`, dt = (e, r) => {
  const n = re(r);
  J(() => {
    n.current = r;
  }, [r]), J(() => {
    const t = (s) => {
      e.current && !e.current.contains(s.target) && n.current(s);
    };
    return document.body.addEventListener("mousedown", t), document.body.addEventListener("touchstart", t), () => {
      document.body.removeEventListener("mousedown", t), document.body.removeEventListener("touchstart", t);
    };
  }, [e]);
}, wd = ({
  data: e,
  placeholder: r = "\u8BF7\u9009\u62E9",
  selected: n = "0",
  width: t = "100px",
  title: s,
  titleInfo: a,
  info: i,
  disabled: c,
  onChange: l,
  className: u = "",
  style: p
}) => {
  const x = re(null), [g, v] = A(!1), [h, L] = A(n);
  return J(() => L(n), [n]), dt(
    x,
    () => {
      v(!1);
    }
  ), /* @__PURE__ */ o.exports.jsxs(
    bd,
    {
      ref: x,
      style: {
        width: typeof t == "number" ? `${t}px` : t,
        ...p
      },
      className: u,
      children: [
        s && /* @__PURE__ */ o.exports.jsx(lt, { title: s, type: "p", info: a }),
        /* @__PURE__ */ o.exports.jsxs(
          yd,
          {
            className: `hover-pop ${g ? "show" : ""} ${c ? "disabled" : ""}`,
            onClick: (f) => {
              c || (f.stopPropagation(), v(!g));
            },
            children: [
              /* @__PURE__ */ o.exports.jsx(
                "p",
                {
                  className: `${h !== "0" ? "land-select-trigger" : "land-select-placeholder"}`,
                  children: h === "0" ? r : e == null ? void 0 : e.filter((f) => f.value === h)[0].label
                }
              ),
              /* @__PURE__ */ o.exports.jsx(E, { name: "arrow", className: "land-select-value-arrow", size: 20 }),
              i && /* @__PURE__ */ o.exports.jsx(X, { content: i, theme: "dark" })
            ]
          }
        ),
        /* @__PURE__ */ o.exports.jsx(
          Cd,
          {
            className: `land-select-results ${g ? "show" : ""}`,
            children: /* @__PURE__ */ o.exports.jsx(kd, { children: e ? e == null ? void 0 : e.map((f) => /* @__PURE__ */ o.exports.jsxs(
              Md,
              {
                className: `${f.tip ? "hover-pop" : ""} ${h === f.value ? "selected" : ""} ${f.disabled ? "disabled" : ""}`,
                onClick: (w) => {
                  w.stopPropagation(), !f.disabled && (L(f.value), l == null || l(f), v(!1));
                },
                children: [
                  /* @__PURE__ */ o.exports.jsx("div", { className: "land-select-results-item-label", children: f.label }),
                  f.info && /* @__PURE__ */ o.exports.jsxs("div", { className: `land-select-item-info ${f.info ? "hover-pop" : ""}`, children: [
                    /* @__PURE__ */ o.exports.jsx(E, { name: "info-stroke", size: 12 }),
                    f.info && /* @__PURE__ */ o.exports.jsx(X, { content: f.info, placement: "right", theme: "dark", style: { marginLeft: "12px" } })
                  ] }),
                  f.tip && /* @__PURE__ */ o.exports.jsx(X, { content: f.tip, placement: "right", theme: "dark", style: { marginLeft: "8px" } })
                ]
              },
              f.value
            )) : /* @__PURE__ */ o.exports.jsx("span", { className: "land-select-drop-empty", children: "\u6682\u65E0\u5185\u5BB9" }) })
          }
        )
      ]
    }
  );
}, bd = C.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .land-select-title {
    font-size: var(--font-content-medium);
  }
`, yd = C.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--gap-4);
  padding: 0 12px;
  width: 100%;
  height: 36px;
  font-size: 14px;
  border: 1px solid var(--color-border-2);
  border-radius: var(--radius-6);
  box-sizing: border-box;
  cursor: pointer;
  &.disabled{
    opacity: var(--opacity-68);
    background-color: var(--color-bg-3);
    cursor: not-allowed;
    .land-select-value-arrow{
      opacity: var(--opacity-04);
    }
  }
  p {
    flex: 1;
    font-size: 14px;
    &.land-select-placeholder {
      color: var(--color-text-5);
    }
    &.land-select-trigger {
      color: var(--color-text-2);
    }
  }
  svg {
    transition: transform var(--transition-15) ease;
  }
  &.show svg {
    transform: rotate(180deg);
  }
`, Cd = C.div`
  position: absolute;
  top: 100%;
  width: 100%;
  padding-top: 4px;
  opacity: 0;
  transform: scaleY(0.8);
  transform-origin: top center;
  pointer-events: none;
  transition: opacity var(--transition-15) ease,
    transform var(--transition-15) ease;
  z-index: 1;
  &.show {
    opacity: 1;
    transform: scaleY(1);
    pointer-events: all;
  }
`, kd = C.ul`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
  box-shadow: var(--boxshadow-small);
  .land-select-drop-empty{
    padding: 8px 12px;
    font-size: 14px;
    color: var(--color-text-4);
  }
`, Md = C.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--radius-4);
  padding: var(--padding-medium);
  color: var(--color-text-2);
  font-size: var(--font-content-medium);
  .land-select-item-info{
    height: 16px;
    position: relative;
    cursor: default;
  }
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.selected {
    background-color: var(--color-link-1);
  }
  &.disabled {
    .land-select-results-item-label,
    .land-select-item-info svg{
      opacity: var(--opacity-04);
    }
    cursor: not-allowed;
  }
`;
function pt(e, r) {
  return function() {
    return e.apply(r, arguments);
  };
}
const { toString: $d } = Object.prototype, { getPrototypeOf: Hn } = Object, _r = ((e) => (r) => {
  const n = $d.call(r);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), be = (e) => (e = e.toLowerCase(), (r) => _r(r) === e), Fr = (e) => (r) => typeof r === e, { isArray: nr } = Array, ur = Fr("undefined");
function Nd(e) {
  return e !== null && !ur(e) && e.constructor !== null && !ur(e.constructor) && pe(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ut = be("ArrayBuffer");
function Sd(e) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && ut(e.buffer), r;
}
const Hd = Fr("string"), pe = Fr("function"), xt = Fr("number"), Zr = (e) => e !== null && typeof e == "object", Ed = (e) => e === !0 || e === !1, kr = (e) => {
  if (_r(e) !== "object")
    return !1;
  const r = Hn(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Rd = be("Date"), Id = be("File"), Vd = be("Blob"), Bd = be("FileList"), Ad = (e) => Zr(e) && pe(e.pipe), Td = (e) => {
  let r;
  return e && (typeof FormData == "function" && e instanceof FormData || pe(e.append) && ((r = _r(e)) === "formdata" || r === "object" && pe(e.toString) && e.toString() === "[object FormData]"));
}, Od = be("URLSearchParams"), [Dd, _d, Fd, Zd] = ["ReadableStream", "Request", "Response", "Headers"].map(be), Ud = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function xr(e, r, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let t, s;
  if (typeof e != "object" && (e = [e]), nr(e))
    for (t = 0, s = e.length; t < s; t++)
      r.call(null, e[t], t, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = a.length;
    let c;
    for (t = 0; t < i; t++)
      c = a[t], r.call(null, e[c], c, e);
  }
}
function ht(e, r) {
  r = r.toLowerCase();
  const n = Object.keys(e);
  let t = n.length, s;
  for (; t-- > 0; )
    if (s = n[t], r === s.toLowerCase())
      return s;
  return null;
}
const Ae = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), ft = (e) => !ur(e) && e !== Ae;
function jn() {
  const { caseless: e } = ft(this) && this || {}, r = {}, n = (t, s) => {
    const a = e && ht(r, s) || s;
    kr(r[a]) && kr(t) ? r[a] = jn(r[a], t) : kr(t) ? r[a] = jn({}, t) : nr(t) ? r[a] = t.slice() : r[a] = t;
  };
  for (let t = 0, s = arguments.length; t < s; t++)
    arguments[t] && xr(arguments[t], n);
  return r;
}
const Pd = (e, r, n, { allOwnKeys: t } = {}) => (xr(r, (s, a) => {
  n && pe(s) ? e[a] = pt(s, n) : e[a] = s;
}, { allOwnKeys: t }), e), qd = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), zd = (e, r, n, t) => {
  e.prototype = Object.create(r.prototype, t), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: r.prototype
  }), n && Object.assign(e.prototype, n);
}, Yd = (e, r, n, t) => {
  let s, a, i;
  const c = {};
  if (r = r || {}, e == null)
    return r;
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      i = s[a], (!t || t(i, e, r)) && !c[i] && (r[i] = e[i], c[i] = !0);
    e = n !== !1 && Hn(e);
  } while (e && (!n || n(e, r)) && e !== Object.prototype);
  return r;
}, Gd = (e, r, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= r.length;
  const t = e.indexOf(r, n);
  return t !== -1 && t === n;
}, Jd = (e) => {
  if (!e)
    return null;
  if (nr(e))
    return e;
  let r = e.length;
  if (!xt(r))
    return null;
  const n = new Array(r);
  for (; r-- > 0; )
    n[r] = e[r];
  return n;
}, Kd = ((e) => (r) => e && r instanceof e)(typeof Uint8Array < "u" && Hn(Uint8Array)), Xd = (e, r) => {
  const t = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = t.next()) && !s.done; ) {
    const a = s.value;
    r.call(e, a[0], a[1]);
  }
}, Qd = (e, r) => {
  let n;
  const t = [];
  for (; (n = e.exec(r)) !== null; )
    t.push(n);
  return t;
}, Wd = be("HTMLFormElement"), ep = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, t, s) {
    return t.toUpperCase() + s;
  }
), wo = (({ hasOwnProperty: e }) => (r, n) => e.call(r, n))(Object.prototype), rp = be("RegExp"), gt = (e, r) => {
  const n = Object.getOwnPropertyDescriptors(e), t = {};
  xr(n, (s, a) => {
    let i;
    (i = r(s, a, e)) !== !1 && (t[a] = i || s);
  }), Object.defineProperties(e, t);
}, np = (e) => {
  gt(e, (r, n) => {
    if (pe(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const t = e[n];
    if (!!pe(t)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, op = (e, r) => {
  const n = {}, t = (s) => {
    s.forEach((a) => {
      n[a] = !0;
    });
  };
  return nr(e) ? t(e) : t(String(e).split(r)), n;
}, tp = () => {
}, sp = (e, r) => e != null && Number.isFinite(e = +e) ? e : r, nn = "abcdefghijklmnopqrstuvwxyz", bo = "0123456789", jt = {
  DIGIT: bo,
  ALPHA: nn,
  ALPHA_DIGIT: nn + nn.toUpperCase() + bo
}, ap = (e = 16, r = jt.ALPHA_DIGIT) => {
  let n = "";
  const { length: t } = r;
  for (; e--; )
    n += r[Math.random() * t | 0];
  return n;
};
function ip(e) {
  return !!(e && pe(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const cp = (e) => {
  const r = new Array(10), n = (t, s) => {
    if (Zr(t)) {
      if (r.indexOf(t) >= 0)
        return;
      if (!("toJSON" in t)) {
        r[s] = t;
        const a = nr(t) ? [] : {};
        return xr(t, (i, c) => {
          const l = n(i, s + 1);
          !ur(l) && (a[c] = l);
        }), r[s] = void 0, a;
      }
    }
    return t;
  };
  return n(e, 0);
}, lp = be("AsyncFunction"), dp = (e) => e && (Zr(e) || pe(e)) && pe(e.then) && pe(e.catch), mt = ((e, r) => e ? setImmediate : r ? ((n, t) => (Ae.addEventListener("message", ({ source: s, data: a }) => {
  s === Ae && a === n && t.length && t.shift()();
}, !1), (s) => {
  t.push(s), Ae.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  pe(Ae.postMessage)
), pp = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ae) : typeof process < "u" && process.nextTick || mt, j = {
  isArray: nr,
  isArrayBuffer: ut,
  isBuffer: Nd,
  isFormData: Td,
  isArrayBufferView: Sd,
  isString: Hd,
  isNumber: xt,
  isBoolean: Ed,
  isObject: Zr,
  isPlainObject: kr,
  isReadableStream: Dd,
  isRequest: _d,
  isResponse: Fd,
  isHeaders: Zd,
  isUndefined: ur,
  isDate: Rd,
  isFile: Id,
  isBlob: Vd,
  isRegExp: rp,
  isFunction: pe,
  isStream: Ad,
  isURLSearchParams: Od,
  isTypedArray: Kd,
  isFileList: Bd,
  forEach: xr,
  merge: jn,
  extend: Pd,
  trim: Ud,
  stripBOM: qd,
  inherits: zd,
  toFlatObject: Yd,
  kindOf: _r,
  kindOfTest: be,
  endsWith: Gd,
  toArray: Jd,
  forEachEntry: Xd,
  matchAll: Qd,
  isHTMLForm: Wd,
  hasOwnProperty: wo,
  hasOwnProp: wo,
  reduceDescriptors: gt,
  freezeMethods: np,
  toObjectSet: op,
  toCamelCase: ep,
  noop: tp,
  toFiniteNumber: sp,
  findKey: ht,
  global: Ae,
  isContextDefined: ft,
  ALPHABET: jt,
  generateString: ap,
  isSpecCompliantForm: ip,
  toJSONObject: cp,
  isAsyncFn: lp,
  isThenable: dp,
  setImmediate: mt,
  asap: pp
};
function V(e, r, n, t, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", r && (this.code = r), n && (this.config = n), t && (this.request = t), s && (this.response = s, this.status = s.status ? s.status : null);
}
j.inherits(V, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: j.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const vt = V.prototype, Lt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
].forEach((e) => {
  Lt[e] = { value: e };
});
Object.defineProperties(V, Lt);
Object.defineProperty(vt, "isAxiosError", { value: !0 });
V.from = (e, r, n, t, s, a) => {
  const i = Object.create(vt);
  return j.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (c) => c !== "isAxiosError"), V.call(i, e.message, r, n, t, s), i.cause = e, i.name = e.name, a && Object.assign(i, a), i;
};
const up = null;
function mn(e) {
  return j.isPlainObject(e) || j.isArray(e);
}
function wt(e) {
  return j.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function yo(e, r, n) {
  return e ? e.concat(r).map(function(s, a) {
    return s = wt(s), !n && a ? "[" + s + "]" : s;
  }).join(n ? "." : "") : r;
}
function xp(e) {
  return j.isArray(e) && !e.some(mn);
}
const hp = j.toFlatObject(j, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function Ur(e, r, n) {
  if (!j.isObject(e))
    throw new TypeError("target must be an object");
  r = r || new FormData(), n = j.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(L, f) {
    return !j.isUndefined(f[L]);
  });
  const t = n.metaTokens, s = n.visitor || p, a = n.dots, i = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && j.isSpecCompliantForm(r);
  if (!j.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null)
      return "";
    if (j.isDate(h))
      return h.toISOString();
    if (!l && j.isBlob(h))
      throw new V("Blob is not supported. Use a Buffer instead.");
    return j.isArrayBuffer(h) || j.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function p(h, L, f) {
    let w = h;
    if (h && !f && typeof h == "object") {
      if (j.endsWith(L, "{}"))
        L = t ? L : L.slice(0, -2), h = JSON.stringify(h);
      else if (j.isArray(h) && xp(h) || (j.isFileList(h) || j.endsWith(L, "[]")) && (w = j.toArray(h)))
        return L = wt(L), w.forEach(function(y, $) {
          !(j.isUndefined(y) || y === null) && r.append(
            i === !0 ? yo([L], $, a) : i === null ? L : L + "[]",
            u(y)
          );
        }), !1;
    }
    return mn(h) ? !0 : (r.append(yo(f, L, a), u(h)), !1);
  }
  const x = [], g = Object.assign(hp, {
    defaultVisitor: p,
    convertValue: u,
    isVisitable: mn
  });
  function v(h, L) {
    if (!j.isUndefined(h)) {
      if (x.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + L.join("."));
      x.push(h), j.forEach(h, function(w, m) {
        (!(j.isUndefined(w) || w === null) && s.call(
          r,
          w,
          j.isString(m) ? m.trim() : m,
          L,
          g
        )) === !0 && v(w, L ? L.concat(m) : [m]);
      }), x.pop();
    }
  }
  if (!j.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), r;
}
function Co(e) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(t) {
    return r[t];
  });
}
function En(e, r) {
  this._pairs = [], e && Ur(e, this, r);
}
const bt = En.prototype;
bt.append = function(r, n) {
  this._pairs.push([r, n]);
};
bt.toString = function(r) {
  const n = r ? function(t) {
    return r.call(this, t, Co);
  } : Co;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function fp(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function yt(e, r, n) {
  if (!r)
    return e;
  const t = n && n.encode || fp, s = n && n.serialize;
  let a;
  if (s ? a = s(r, n) : a = j.isURLSearchParams(r) ? r.toString() : new En(r, n).toString(t), a) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class gp {
  constructor() {
    this.handlers = [];
  }
  use(r, n, t) {
    return this.handlers.push({
      fulfilled: r,
      rejected: n,
      synchronous: t ? t.synchronous : !1,
      runWhen: t ? t.runWhen : null
    }), this.handlers.length - 1;
  }
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(r) {
    j.forEach(this.handlers, function(t) {
      t !== null && r(t);
    });
  }
}
const ko = gp, Ct = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, jp = typeof URLSearchParams < "u" ? URLSearchParams : En, mp = typeof FormData < "u" ? FormData : null, vp = typeof Blob < "u" ? Blob : null, Lp = {
  isBrowser: !0,
  classes: {
    URLSearchParams: jp,
    FormData: mp,
    Blob: vp
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Rn = typeof window < "u" && typeof document < "u", vn = typeof navigator == "object" && navigator || void 0, wp = Rn && (!vn || ["ReactNative", "NativeScript", "NS"].indexOf(vn.product) < 0), bp = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), yp = Rn && window.location.href || "http://localhost", Cp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Rn,
  hasStandardBrowserWebWorkerEnv: bp,
  hasStandardBrowserEnv: wp,
  navigator: vn,
  origin: yp
}, Symbol.toStringTag, { value: "Module" })), de = {
  ...Cp,
  ...Lp
};
function kp(e, r) {
  return Ur(e, new de.classes.URLSearchParams(), Object.assign({
    visitor: function(n, t, s, a) {
      return de.isNode && j.isBuffer(n) ? (this.append(t, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, r));
}
function Mp(e) {
  return j.matchAll(/\w+|\[(\w*)]/g, e).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function $p(e) {
  const r = {}, n = Object.keys(e);
  let t;
  const s = n.length;
  let a;
  for (t = 0; t < s; t++)
    a = n[t], r[a] = e[a];
  return r;
}
function kt(e) {
  function r(n, t, s, a) {
    let i = n[a++];
    if (i === "__proto__")
      return !0;
    const c = Number.isFinite(+i), l = a >= n.length;
    return i = !i && j.isArray(s) ? s.length : i, l ? (j.hasOwnProp(s, i) ? s[i] = [s[i], t] : s[i] = t, !c) : ((!s[i] || !j.isObject(s[i])) && (s[i] = []), r(n, t, s[i], a) && j.isArray(s[i]) && (s[i] = $p(s[i])), !c);
  }
  if (j.isFormData(e) && j.isFunction(e.entries)) {
    const n = {};
    return j.forEachEntry(e, (t, s) => {
      r(Mp(t), s, n, 0);
    }), n;
  }
  return null;
}
function Np(e, r, n) {
  if (j.isString(e))
    try {
      return (r || JSON.parse)(e), j.trim(e);
    } catch (t) {
      if (t.name !== "SyntaxError")
        throw t;
    }
  return (n || JSON.stringify)(e);
}
const In = {
  transitional: Ct,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, n) {
    const t = n.getContentType() || "", s = t.indexOf("application/json") > -1, a = j.isObject(r);
    if (a && j.isHTMLForm(r) && (r = new FormData(r)), j.isFormData(r))
      return s ? JSON.stringify(kt(r)) : r;
    if (j.isArrayBuffer(r) || j.isBuffer(r) || j.isStream(r) || j.isFile(r) || j.isBlob(r) || j.isReadableStream(r))
      return r;
    if (j.isArrayBufferView(r))
      return r.buffer;
    if (j.isURLSearchParams(r))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let c;
    if (a) {
      if (t.indexOf("application/x-www-form-urlencoded") > -1)
        return kp(r, this.formSerializer).toString();
      if ((c = j.isFileList(r)) || t.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Ur(
          c ? { "files[]": r } : r,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return a || s ? (n.setContentType("application/json", !1), Np(r)) : r;
  }],
  transformResponse: [function(r) {
    const n = this.transitional || In.transitional, t = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (j.isResponse(r) || j.isReadableStream(r))
      return r;
    if (r && j.isString(r) && (t && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(r);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? V.from(c, V.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return r;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: de.classes.FormData,
    Blob: de.classes.Blob
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
j.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  In.headers[e] = {};
});
const Vn = In, Sp = j.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Hp = (e) => {
  const r = {};
  let n, t, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), t = i.substring(s + 1).trim(), !(!n || r[n] && Sp[n]) && (n === "set-cookie" ? r[n] ? r[n].push(t) : r[n] = [t] : r[n] = r[n] ? r[n] + ", " + t : t);
  }), r;
}, Mo = Symbol("internals");
function lr(e) {
  return e && String(e).trim().toLowerCase();
}
function Mr(e) {
  return e === !1 || e == null ? e : j.isArray(e) ? e.map(Mr) : String(e);
}
function Ep(e) {
  const r = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let t;
  for (; t = n.exec(e); )
    r[t[1]] = t[2];
  return r;
}
const Rp = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function on(e, r, n, t, s) {
  if (j.isFunction(t))
    return t.call(this, r, n);
  if (s && (r = n), !!j.isString(r)) {
    if (j.isString(t))
      return r.indexOf(t) !== -1;
    if (j.isRegExp(t))
      return t.test(r);
  }
}
function Ip(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, n, t) => n.toUpperCase() + t);
}
function Vp(e, r) {
  const n = j.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((t) => {
    Object.defineProperty(e, t + n, {
      value: function(s, a, i) {
        return this[t].call(this, r, s, a, i);
      },
      configurable: !0
    });
  });
}
class Pr {
  constructor(r) {
    r && this.set(r);
  }
  set(r, n, t) {
    const s = this;
    function a(c, l, u) {
      const p = lr(l);
      if (!p)
        throw new Error("header name must be a non-empty string");
      const x = j.findKey(s, p);
      (!x || s[x] === void 0 || u === !0 || u === void 0 && s[x] !== !1) && (s[x || l] = Mr(c));
    }
    const i = (c, l) => j.forEach(c, (u, p) => a(u, p, l));
    if (j.isPlainObject(r) || r instanceof this.constructor)
      i(r, n);
    else if (j.isString(r) && (r = r.trim()) && !Rp(r))
      i(Hp(r), n);
    else if (j.isHeaders(r))
      for (const [c, l] of r.entries())
        a(l, c, t);
    else
      r != null && a(n, r, t);
    return this;
  }
  get(r, n) {
    if (r = lr(r), r) {
      const t = j.findKey(this, r);
      if (t) {
        const s = this[t];
        if (!n)
          return s;
        if (n === !0)
          return Ep(s);
        if (j.isFunction(n))
          return n.call(this, s, t);
        if (j.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, n) {
    if (r = lr(r), r) {
      const t = j.findKey(this, r);
      return !!(t && this[t] !== void 0 && (!n || on(this, this[t], t, n)));
    }
    return !1;
  }
  delete(r, n) {
    const t = this;
    let s = !1;
    function a(i) {
      if (i = lr(i), i) {
        const c = j.findKey(t, i);
        c && (!n || on(t, t[c], c, n)) && (delete t[c], s = !0);
      }
    }
    return j.isArray(r) ? r.forEach(a) : a(r), s;
  }
  clear(r) {
    const n = Object.keys(this);
    let t = n.length, s = !1;
    for (; t--; ) {
      const a = n[t];
      (!r || on(this, this[a], a, r, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(r) {
    const n = this, t = {};
    return j.forEach(this, (s, a) => {
      const i = j.findKey(t, a);
      if (i) {
        n[i] = Mr(s), delete n[a];
        return;
      }
      const c = r ? Ip(a) : String(a).trim();
      c !== a && delete n[a], n[c] = Mr(s), t[c] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const n = /* @__PURE__ */ Object.create(null);
    return j.forEach(this, (t, s) => {
      t != null && t !== !1 && (n[s] = r && j.isArray(t) ? t.join(", ") : t);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, n]) => r + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...n) {
    const t = new this(r);
    return n.forEach((s) => t.set(s)), t;
  }
  static accessor(r) {
    const t = (this[Mo] = this[Mo] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(i) {
      const c = lr(i);
      t[c] || (Vp(s, i), t[c] = !0);
    }
    return j.isArray(r) ? r.forEach(a) : a(r), this;
  }
}
Pr.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
j.reduceDescriptors(Pr.prototype, ({ value: e }, r) => {
  let n = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => e,
    set(t) {
      this[n] = t;
    }
  };
});
j.freezeMethods(Pr);
const we = Pr;
function tn(e, r) {
  const n = this || Vn, t = r || n, s = we.from(t.headers);
  let a = t.data;
  return j.forEach(e, function(c) {
    a = c.call(n, a, s.normalize(), r ? r.status : void 0);
  }), s.normalize(), a;
}
function Mt(e) {
  return !!(e && e.__CANCEL__);
}
function or(e, r, n) {
  V.call(this, e == null ? "canceled" : e, V.ERR_CANCELED, r, n), this.name = "CanceledError";
}
j.inherits(or, V, {
  __CANCEL__: !0
});
function $t(e, r, n) {
  const t = n.config.validateStatus;
  !n.status || !t || t(n.status) ? e(n) : r(new V(
    "Request failed with status code " + n.status,
    [V.ERR_BAD_REQUEST, V.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Bp(e) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return r && r[1] || "";
}
function Ap(e, r) {
  e = e || 10;
  const n = new Array(e), t = new Array(e);
  let s = 0, a = 0, i;
  return r = r !== void 0 ? r : 1e3, function(l) {
    const u = Date.now(), p = t[a];
    i || (i = u), n[s] = l, t[s] = u;
    let x = a, g = 0;
    for (; x !== s; )
      g += n[x++], x = x % e;
    if (s = (s + 1) % e, s === a && (a = (a + 1) % e), u - i < r)
      return;
    const v = p && u - p;
    return v ? Math.round(g * 1e3 / v) : void 0;
  };
}
function Tp(e, r) {
  let n = 0, t = 1e3 / r, s, a;
  const i = (u, p = Date.now()) => {
    n = p, s = null, a && (clearTimeout(a), a = null), e.apply(null, u);
  };
  return [(...u) => {
    const p = Date.now(), x = p - n;
    x >= t ? i(u, p) : (s = u, a || (a = setTimeout(() => {
      a = null, i(s);
    }, t - x)));
  }, () => s && i(s)];
}
const Er = (e, r, n = 3) => {
  let t = 0;
  const s = Ap(50, 250);
  return Tp((a) => {
    const i = a.loaded, c = a.lengthComputable ? a.total : void 0, l = i - t, u = s(l), p = i <= c;
    t = i;
    const x = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && c && p ? (c - i) / u : void 0,
      event: a,
      lengthComputable: c != null,
      [r ? "download" : "upload"]: !0
    };
    e(x);
  }, n);
}, $o = (e, r) => {
  const n = e != null;
  return [(t) => r[0]({
    lengthComputable: n,
    total: e,
    loaded: t
  }), r[1]];
}, No = (e) => (...r) => j.asap(() => e(...r)), Op = de.hasStandardBrowserEnv ? function() {
  const r = de.navigator && /(msie|trident)/i.test(de.navigator.userAgent), n = document.createElement("a");
  let t;
  function s(a) {
    let i = a;
    return r && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
      href: n.href,
      protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
      host: n.host,
      search: n.search ? n.search.replace(/^\?/, "") : "",
      hash: n.hash ? n.hash.replace(/^#/, "") : "",
      hostname: n.hostname,
      port: n.port,
      pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
    };
  }
  return t = s(window.location.href), function(i) {
    const c = j.isString(i) ? s(i) : i;
    return c.protocol === t.protocol && c.host === t.host;
  };
}() : function() {
  return function() {
    return !0;
  };
}(), Dp = de.hasStandardBrowserEnv ? {
  write(e, r, n, t, s, a) {
    const i = [e + "=" + encodeURIComponent(r)];
    j.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), j.isString(t) && i.push("path=" + t), j.isString(s) && i.push("domain=" + s), a === !0 && i.push("secure"), document.cookie = i.join("; ");
  },
  read(e) {
    const r = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
    return r ? decodeURIComponent(r[3]) : null;
  },
  remove(e) {
    this.write(e, "", Date.now() - 864e5);
  }
} : {
  write() {
  },
  read() {
    return null;
  },
  remove() {
  }
};
function _p(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Fp(e, r) {
  return r ? e.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : e;
}
function Nt(e, r) {
  return e && !_p(r) ? Fp(e, r) : r;
}
const So = (e) => e instanceof we ? { ...e } : e;
function Fe(e, r) {
  r = r || {};
  const n = {};
  function t(u, p, x) {
    return j.isPlainObject(u) && j.isPlainObject(p) ? j.merge.call({ caseless: x }, u, p) : j.isPlainObject(p) ? j.merge({}, p) : j.isArray(p) ? p.slice() : p;
  }
  function s(u, p, x) {
    if (j.isUndefined(p)) {
      if (!j.isUndefined(u))
        return t(void 0, u, x);
    } else
      return t(u, p, x);
  }
  function a(u, p) {
    if (!j.isUndefined(p))
      return t(void 0, p);
  }
  function i(u, p) {
    if (j.isUndefined(p)) {
      if (!j.isUndefined(u))
        return t(void 0, u);
    } else
      return t(void 0, p);
  }
  function c(u, p, x) {
    if (x in r)
      return t(u, p);
    if (x in e)
      return t(void 0, u);
  }
  const l = {
    url: a,
    method: a,
    data: a,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (u, p) => s(So(u), So(p), !0)
  };
  return j.forEach(Object.keys(Object.assign({}, e, r)), function(p) {
    const x = l[p] || s, g = x(e[p], r[p], p);
    j.isUndefined(g) && x !== c || (n[p] = g);
  }), n;
}
const St = (e) => {
  const r = Fe({}, e);
  let { data: n, withXSRFToken: t, xsrfHeaderName: s, xsrfCookieName: a, headers: i, auth: c } = r;
  r.headers = i = we.from(i), r.url = yt(Nt(r.baseURL, r.url), e.params, e.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let l;
  if (j.isFormData(n)) {
    if (de.hasStandardBrowserEnv || de.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((l = i.getContentType()) !== !1) {
      const [u, ...p] = l ? l.split(";").map((x) => x.trim()).filter(Boolean) : [];
      i.setContentType([u || "multipart/form-data", ...p].join("; "));
    }
  }
  if (de.hasStandardBrowserEnv && (t && j.isFunction(t) && (t = t(r)), t || t !== !1 && Op(r.url))) {
    const u = s && a && Dp.read(a);
    u && i.set(s, u);
  }
  return r;
}, Zp = typeof XMLHttpRequest < "u", Up = Zp && function(e) {
  return new Promise(function(n, t) {
    const s = St(e);
    let a = s.data;
    const i = we.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: l, onDownloadProgress: u } = s, p, x, g, v, h;
    function L() {
      v && v(), h && h(), s.cancelToken && s.cancelToken.unsubscribe(p), s.signal && s.signal.removeEventListener("abort", p);
    }
    let f = new XMLHttpRequest();
    f.open(s.method.toUpperCase(), s.url, !0), f.timeout = s.timeout;
    function w() {
      if (!f)
        return;
      const y = we.from(
        "getAllResponseHeaders" in f && f.getAllResponseHeaders()
      ), M = {
        data: !c || c === "text" || c === "json" ? f.responseText : f.response,
        status: f.status,
        statusText: f.statusText,
        headers: y,
        config: e,
        request: f
      };
      $t(function(S) {
        n(S), L();
      }, function(S) {
        t(S), L();
      }, M), f = null;
    }
    "onloadend" in f ? f.onloadend = w : f.onreadystatechange = function() {
      !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, f.onabort = function() {
      !f || (t(new V("Request aborted", V.ECONNABORTED, e, f)), f = null);
    }, f.onerror = function() {
      t(new V("Network Error", V.ERR_NETWORK, e, f)), f = null;
    }, f.ontimeout = function() {
      let $ = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const M = s.transitional || Ct;
      s.timeoutErrorMessage && ($ = s.timeoutErrorMessage), t(new V(
        $,
        M.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,
        e,
        f
      )), f = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in f && j.forEach(i.toJSON(), function($, M) {
      f.setRequestHeader(M, $);
    }), j.isUndefined(s.withCredentials) || (f.withCredentials = !!s.withCredentials), c && c !== "json" && (f.responseType = s.responseType), u && ([g, h] = Er(u, !0), f.addEventListener("progress", g)), l && f.upload && ([x, v] = Er(l), f.upload.addEventListener("progress", x), f.upload.addEventListener("loadend", v)), (s.cancelToken || s.signal) && (p = (y) => {
      !f || (t(!y || y.type ? new or(null, e, f) : y), f.abort(), f = null);
    }, s.cancelToken && s.cancelToken.subscribe(p), s.signal && (s.signal.aborted ? p() : s.signal.addEventListener("abort", p)));
    const m = Bp(s.url);
    if (m && de.protocols.indexOf(m) === -1) {
      t(new V("Unsupported protocol " + m + ":", V.ERR_BAD_REQUEST, e));
      return;
    }
    f.send(a || null);
  });
}, Pp = (e, r) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (r || n) {
    let t = new AbortController(), s;
    const a = function(u) {
      if (!s) {
        s = !0, c();
        const p = u instanceof Error ? u : this.reason;
        t.abort(p instanceof V ? p : new or(p instanceof Error ? p.message : p));
      }
    };
    let i = r && setTimeout(() => {
      i = null, a(new V(`timeout ${r} of ms exceeded`, V.ETIMEDOUT));
    }, r);
    const c = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(a) : u.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", a));
    const { signal: l } = t;
    return l.unsubscribe = () => j.asap(c), l;
  }
}, qp = Pp, zp = function* (e, r) {
  let n = e.byteLength;
  if (!r || n < r) {
    yield e;
    return;
  }
  let t = 0, s;
  for (; t < n; )
    s = t + r, yield e.slice(t, s), t = s;
}, Yp = async function* (e, r) {
  for await (const n of Gp(e))
    yield* zp(n, r);
}, Gp = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const r = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: t } = await r.read();
      if (n)
        break;
      yield t;
    }
  } finally {
    await r.cancel();
  }
}, Ho = (e, r, n, t) => {
  const s = Yp(e, r);
  let a = 0, i, c = (l) => {
    i || (i = !0, t && t(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: u, value: p } = await s.next();
        if (u) {
          c(), l.close();
          return;
        }
        let x = p.byteLength;
        if (n) {
          let g = a += x;
          n(g);
        }
        l.enqueue(new Uint8Array(p));
      } catch (u) {
        throw c(u), u;
      }
    },
    cancel(l) {
      return c(l), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, qr = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ht = qr && typeof ReadableStream == "function", Jp = qr && (typeof TextEncoder == "function" ? ((e) => (r) => e.encode(r))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Et = (e, ...r) => {
  try {
    return !!e(...r);
  } catch {
    return !1;
  }
}, Kp = Ht && Et(() => {
  let e = !1;
  const r = new Request(de.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !r;
}), Eo = 64 * 1024, Ln = Ht && Et(() => j.isReadableStream(new Response("").body)), Rr = {
  stream: Ln && ((e) => e.body)
};
qr && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((r) => {
    !Rr[r] && (Rr[r] = j.isFunction(e[r]) ? (n) => n[r]() : (n, t) => {
      throw new V(`Response type '${r}' is not supported`, V.ERR_NOT_SUPPORT, t);
    });
  });
})(new Response());
const Xp = async (e) => {
  if (e == null)
    return 0;
  if (j.isBlob(e))
    return e.size;
  if (j.isSpecCompliantForm(e))
    return (await new Request(de.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (j.isArrayBufferView(e) || j.isArrayBuffer(e))
    return e.byteLength;
  if (j.isURLSearchParams(e) && (e = e + ""), j.isString(e))
    return (await Jp(e)).byteLength;
}, Qp = async (e, r) => {
  const n = j.toFiniteNumber(e.getContentLength());
  return n == null ? Xp(r) : n;
}, Wp = qr && (async (e) => {
  let {
    url: r,
    method: n,
    data: t,
    signal: s,
    cancelToken: a,
    timeout: i,
    onDownloadProgress: c,
    onUploadProgress: l,
    responseType: u,
    headers: p,
    withCredentials: x = "same-origin",
    fetchOptions: g
  } = St(e);
  u = u ? (u + "").toLowerCase() : "text";
  let v = qp([s, a && a.toAbortSignal()], i), h;
  const L = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let f;
  try {
    if (l && Kp && n !== "get" && n !== "head" && (f = await Qp(p, t)) !== 0) {
      let M = new Request(r, {
        method: "POST",
        body: t,
        duplex: "half"
      }), k;
      if (j.isFormData(t) && (k = M.headers.get("content-type")) && p.setContentType(k), M.body) {
        const [S, Z] = $o(
          f,
          Er(No(l))
        );
        t = Ho(M.body, Eo, S, Z);
      }
    }
    j.isString(x) || (x = x ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    h = new Request(r, {
      ...g,
      signal: v,
      method: n.toUpperCase(),
      headers: p.normalize().toJSON(),
      body: t,
      duplex: "half",
      credentials: w ? x : void 0
    });
    let m = await fetch(h);
    const y = Ln && (u === "stream" || u === "response");
    if (Ln && (c || y && L)) {
      const M = {};
      ["status", "statusText", "headers"].forEach((F) => {
        M[F] = m[F];
      });
      const k = j.toFiniteNumber(m.headers.get("content-length")), [S, Z] = c && $o(
        k,
        Er(No(c), !0)
      ) || [];
      m = new Response(
        Ho(m.body, Eo, S, () => {
          Z && Z(), L && L();
        }),
        M
      );
    }
    u = u || "text";
    let $ = await Rr[j.findKey(Rr, u) || "text"](m, e);
    return !y && L && L(), await new Promise((M, k) => {
      $t(M, k, {
        data: $,
        headers: we.from(m.headers),
        status: m.status,
        statusText: m.statusText,
        config: e,
        request: h
      });
    });
  } catch (w) {
    throw L && L(), w && w.name === "TypeError" && /fetch/i.test(w.message) ? Object.assign(
      new V("Network Error", V.ERR_NETWORK, e, h),
      {
        cause: w.cause || w
      }
    ) : V.from(w, w && w.code, e, h);
  }
}), wn = {
  http: up,
  xhr: Up,
  fetch: Wp
};
j.forEach(wn, (e, r) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: r });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: r });
  }
});
const Ro = (e) => `- ${e}`, e4 = (e) => j.isFunction(e) || e === null || e === !1, Rt = {
  getAdapter: (e) => {
    e = j.isArray(e) ? e : [e];
    const { length: r } = e;
    let n, t;
    const s = {};
    for (let a = 0; a < r; a++) {
      n = e[a];
      let i;
      if (t = n, !e4(n) && (t = wn[(i = String(n)).toLowerCase()], t === void 0))
        throw new V(`Unknown adapter '${i}'`);
      if (t)
        break;
      s[i || "#" + a] = t;
    }
    if (!t) {
      const a = Object.entries(s).map(
        ([c, l]) => `adapter ${c} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = r ? a.length > 1 ? `since :
` + a.map(Ro).join(`
`) : " " + Ro(a[0]) : "as no adapter specified";
      throw new V(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return t;
  },
  adapters: wn
};
function sn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new or(null, e);
}
function Io(e) {
  return sn(e), e.headers = we.from(e.headers), e.data = tn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Rt.getAdapter(e.adapter || Vn.adapter)(e).then(function(t) {
    return sn(e), t.data = tn.call(
      e,
      e.transformResponse,
      t
    ), t.headers = we.from(t.headers), t;
  }, function(t) {
    return Mt(t) || (sn(e), t && t.response && (t.response.data = tn.call(
      e,
      e.transformResponse,
      t.response
    ), t.response.headers = we.from(t.response.headers))), Promise.reject(t);
  });
}
const It = "1.7.7", Bn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, r) => {
  Bn[e] = function(t) {
    return typeof t === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
const Vo = {};
Bn.transitional = function(r, n, t) {
  function s(a, i) {
    return "[Axios v" + It + "] Transitional option '" + a + "'" + i + (t ? ". " + t : "");
  }
  return (a, i, c) => {
    if (r === !1)
      throw new V(
        s(i, " has been removed" + (n ? " in " + n : "")),
        V.ERR_DEPRECATED
      );
    return n && !Vo[i] && (Vo[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), r ? r(a, i, c) : !0;
  };
};
function r4(e, r, n) {
  if (typeof e != "object")
    throw new V("options must be an object", V.ERR_BAD_OPTION_VALUE);
  const t = Object.keys(e);
  let s = t.length;
  for (; s-- > 0; ) {
    const a = t[s], i = r[a];
    if (i) {
      const c = e[a], l = c === void 0 || i(c, a, e);
      if (l !== !0)
        throw new V("option " + a + " must be " + l, V.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new V("Unknown option " + a, V.ERR_BAD_OPTION);
  }
}
const bn = {
  assertOptions: r4,
  validators: Bn
}, Ee = bn.validators;
class Ir {
  constructor(r) {
    this.defaults = r, this.interceptors = {
      request: new ko(),
      response: new ko()
    };
  }
  async request(r, n) {
    try {
      return await this._request(r, n);
    } catch (t) {
      if (t instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const a = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          t.stack ? a && !String(t.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (t.stack += `
` + a) : t.stack = a;
        } catch {
        }
      }
      throw t;
    }
  }
  _request(r, n) {
    typeof r == "string" ? (n = n || {}, n.url = r) : n = r || {}, n = Fe(this.defaults, n);
    const { transitional: t, paramsSerializer: s, headers: a } = n;
    t !== void 0 && bn.assertOptions(t, {
      silentJSONParsing: Ee.transitional(Ee.boolean),
      forcedJSONParsing: Ee.transitional(Ee.boolean),
      clarifyTimeoutError: Ee.transitional(Ee.boolean)
    }, !1), s != null && (j.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : bn.assertOptions(s, {
      encode: Ee.function,
      serialize: Ee.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = a && j.merge(
      a.common,
      a[n.method]
    );
    a && j.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete a[h];
      }
    ), n.headers = we.concat(i, a);
    const c = [];
    let l = !0;
    this.interceptors.request.forEach(function(L) {
      typeof L.runWhen == "function" && L.runWhen(n) === !1 || (l = l && L.synchronous, c.unshift(L.fulfilled, L.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(L) {
      u.push(L.fulfilled, L.rejected);
    });
    let p, x = 0, g;
    if (!l) {
      const h = [Io.bind(this), void 0];
      for (h.unshift.apply(h, c), h.push.apply(h, u), g = h.length, p = Promise.resolve(n); x < g; )
        p = p.then(h[x++], h[x++]);
      return p;
    }
    g = c.length;
    let v = n;
    for (x = 0; x < g; ) {
      const h = c[x++], L = c[x++];
      try {
        v = h(v);
      } catch (f) {
        L.call(this, f);
        break;
      }
    }
    try {
      p = Io.call(this, v);
    } catch (h) {
      return Promise.reject(h);
    }
    for (x = 0, g = u.length; x < g; )
      p = p.then(u[x++], u[x++]);
    return p;
  }
  getUri(r) {
    r = Fe(this.defaults, r);
    const n = Nt(r.baseURL, r.url);
    return yt(n, r.params, r.paramsSerializer);
  }
}
j.forEach(["delete", "get", "head", "options"], function(r) {
  Ir.prototype[r] = function(n, t) {
    return this.request(Fe(t || {}, {
      method: r,
      url: n,
      data: (t || {}).data
    }));
  };
});
j.forEach(["post", "put", "patch"], function(r) {
  function n(t) {
    return function(a, i, c) {
      return this.request(Fe(c || {}, {
        method: r,
        headers: t ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: i
      }));
    };
  }
  Ir.prototype[r] = n(), Ir.prototype[r + "Form"] = n(!0);
});
const $r = Ir;
class An {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    const t = this;
    this.promise.then((s) => {
      if (!t._listeners)
        return;
      let a = t._listeners.length;
      for (; a-- > 0; )
        t._listeners[a](s);
      t._listeners = null;
    }), this.promise.then = (s) => {
      let a;
      const i = new Promise((c) => {
        t.subscribe(c), a = c;
      }).then(s);
      return i.cancel = function() {
        t.unsubscribe(a);
      }, i;
    }, r(function(a, i, c) {
      t.reason || (t.reason = new or(a, i, c), n(t.reason));
    });
  }
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : this._listeners = [r];
  }
  unsubscribe(r) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(r);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const r = new AbortController(), n = (t) => {
      r.abort(t);
    };
    return this.subscribe(n), r.signal.unsubscribe = () => this.unsubscribe(n), r.signal;
  }
  static source() {
    let r;
    return {
      token: new An(function(s) {
        r = s;
      }),
      cancel: r
    };
  }
}
const n4 = An;
function o4(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function t4(e) {
  return j.isObject(e) && e.isAxiosError === !0;
}
const yn = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(yn).forEach(([e, r]) => {
  yn[r] = e;
});
const s4 = yn;
function Vt(e) {
  const r = new $r(e), n = pt($r.prototype.request, r);
  return j.extend(n, $r.prototype, r, { allOwnKeys: !0 }), j.extend(n, r, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Vt(Fe(e, s));
  }, n;
}
const ne = Vt(Vn);
ne.Axios = $r;
ne.CanceledError = or;
ne.CancelToken = n4;
ne.isCancel = Mt;
ne.VERSION = It;
ne.toFormData = Ur;
ne.AxiosError = V;
ne.Cancel = ne.CanceledError;
ne.all = function(r) {
  return Promise.all(r);
};
ne.spread = o4;
ne.isAxiosError = t4;
ne.mergeConfig = Fe;
ne.AxiosHeaders = we;
ne.formToJSON = (e) => kt(j.isHTMLForm(e) ? new FormData(e) : e);
ne.getAdapter = Rt.getAdapter;
ne.HttpStatusCode = s4;
ne.default = ne;
const a4 = ne, i4 = ({
  checked: e,
  label: r,
  checkedLabel: n,
  icon: t,
  checkedIcon: s,
  info: a,
  iconInfo: i,
  popProps: c,
  onChange: l,
  dark: u,
  disabled: p,
  style: x,
  className: g = ""
}) => {
  const [v, h] = A(e);
  return J(() => h(e), [e]), /* @__PURE__ */ o.exports.jsxs(
    c4,
    {
      className: `land-switch-wrap ${a ? "hover-pop" : ""} ${p ? "disabled" : ""}`,
      children: [
        /* @__PURE__ */ o.exports.jsx(X, { content: a, theme: "dark", ...c }),
        /* @__PURE__ */ o.exports.jsxs(
          l4,
          {
            className: `land-switch-content ${u ? "dark" : ""} ${v ? "checked" : ""} ${g}`,
            style: x,
            onClick: (L) => {
              L.stopPropagation(), !p && (h(!v), l == null || l(v));
            },
            children: [
              /* @__PURE__ */ o.exports.jsx("div", { className: "land-switch-bar", children: /* @__PURE__ */ o.exports.jsx("div", { className: "land-switch-indicator", children: v ? s : t }) }),
              (r || n) && /* @__PURE__ */ o.exports.jsx("div", { className: "land-switch-label", children: v ? n : r })
            ]
          }
        ),
        i && /* @__PURE__ */ o.exports.jsxs("div", { className: "land-switch-label-iconInfo hover-pop", children: [
          /* @__PURE__ */ o.exports.jsx(E, { name: "info-stroke", size: 16 }),
          /* @__PURE__ */ o.exports.jsx(X, { content: i, theme: "dark", ...c })
        ] })
      ]
    }
  );
}, c4 = C.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  &.disabled{
    .land-switch-content{
      opacity: var(--opacity-04);
      cursor: not-allowed;
    }
    cursor: not-allowed;
  }
`, l4 = C.div`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  cursor: pointer;
  .land-switch-bar {
    display: flex;
    justify-content: start;
    padding: 2px;
    width: 40px;
    height: 24px;
    background-color: var(--color-bg-2);
    border-radius: 24px;
    flex-shrink: 0;
    transition: background-color var(--transition-15) linear;
    &:hover {
      background-color: var(--color-bg-2);
    }
    &:active {
      background-color: var(--color-bg-3);
    }
  }
  .land-switch-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    aspect-ratio: 1;
    background-color: var(--color-bg-white);
    border-radius: 100%;
    transform: translateX(0px);
    transition: transform var(--transition-15) linear;
  }
  .land-switch-label {
    font-size: var(--font-content-medium);
    color: var(--color-text-3);
  }
  & + .land-switch-label-iconInfo {
    position: relative;
    height: 16px;
    cursor: default;
  }
  &.checked {
    .land-switch-bar {
      background-color: var(--color-primary-6);
      transition-delay: 100ms;
    }
    .land-switch-indicator {
      transform: translateX(16px);
    }
  }
  &.dark{
    .land-switch-bar{
      background-color: rgba(0,0,0,0.2);
      &:hover {
        background-color: rgba(0,0,0,0.2);
      }
    }
    &.checked{
      .land-switch-bar {
      background-color: var(--color-primary-6);
      transition-delay: 100ms;
    }
    }
    }
`, R2 = ({
  language: e = "zh",
  minYear: r = new Date().getFullYear(),
  maxYear: n = new Date().getFullYear(),
  onDayChange: t
}) => {
  const [s, a] = A(new Date()), i = (I, D) => new Date(I, D + 1, 0).getDate(), c = (I, D) => new Date(I, D, 1).getDay(), [l, u] = A(new Date().getFullYear()), p = new Date().getDate(), x = new Date().getMonth(), g = new Date().getFullYear(), v = s.getFullYear(), h = s.getMonth(), L = i(l, h), f = c(v, h), [w, m] = A(p);
  async function y(I) {
    try {
      return (await a4.get(
        `https://date.nager.at/api/v3/publicholidays/${I}/CN`
      )).data;
    } catch {
      return [];
    }
  }
  const $ = [];
  J(() => {
    y(v).then((I) => {
      I.forEach((D) => {
        const ge = D.date.split("-");
        $.push({
          date: `${Number(ge[1])}-${Number(ge[2])}`,
          zhName: D.localName,
          enName: D.name
        });
      });
    });
  }, [s]);
  const M = () => {
    h <= 0 || (h - 1 === x ? m(p) : m(void 0), a((I) => {
      const D = I.getMonth() - 1;
      return new Date(I.getFullYear(), D, 1);
    }));
  }, k = () => {
    h >= 11 || (h + 1 === x ? m(p) : m(void 0), a((I) => {
      const D = I.getMonth() + 1;
      return new Date(I.getFullYear(), D, 1);
    }));
  }, S = te(
    () => r > 0 && n > 0 && n > r ? n - r : 0,
    [r, n]
  ), Z = te(
    () => S === 0 && h <= 0,
    [h, S]
  ), F = te(
    () => S === 0 && h >= 11,
    [h]
  ), q = () => {
    a(new Date()), m(p);
  }, ie = (I) => {
    isNaN(I) || (a((D) => new Date(I, D.getMonth(), 1)), I == g ? w === void 0 && m(p) : m(void 0), u(I));
  }, H = te(() => ({
    1: { en: "January", zh: "\u4E00\u6708" },
    2: { en: "February", zh: "\u4E8C\u6708" },
    3: { en: "March", zh: "\u4E09\u6708" },
    4: { en: "April", zh: "\u56DB\u6708" },
    5: { en: "May", zh: "\u4E94\u6708" },
    6: { en: "June", zh: "\u516D\u6708" },
    7: { en: "July", zh: "\u4E03\u6708" },
    8: { en: "August", zh: "\u516B\u6708" },
    9: { en: "September", zh: "\u4E5D\u6708" },
    10: { en: "October", zh: "\u5341\u6708" },
    11: { en: "November", zh: "\u5341\u4E00\u6708" },
    12: { en: "December", zh: "\u5341\u4E8C\u6708" }
  }), [h]), O = [];
  for (let I = 0; I < f; I++)
    O.push(
      /* @__PURE__ */ o.exports.jsx("div", { className: "land-calendar-item day empty" }, `empty-${I}`)
    );
  for (let I = 1; I <= L; I++)
    O.push(
      /* @__PURE__ */ o.exports.jsx(
        "div",
        {
          className: `land-calendar-item day ${v === g && h === x && p === I ? "active" : ""} ${w == I ? "selected" : ""}`,
          onClick: (D) => {
            D.stopPropagation(), m(I), t == null || t(I, h, v);
          },
          children: I
        },
        I
      )
    );
  const K = [
    { zh: "\u65E5", en: "Su" },
    { zh: "\u4E00", en: "Mo" },
    { zh: "\u4E8C", en: "Tu" },
    { zh: "\u4E09", en: "We" },
    { zh: "\u56DB", en: "Th" },
    { zh: "\u4E94", en: "Fr" },
    { zh: "\u516D", en: "Sa" }
  ], z = [
    ...Array.from({ length: n - r }).map((I, D) => ({
      value: r + D,
      label: `${r + D}`
    }))
  ];
  return /* @__PURE__ */ o.exports.jsxs(d4, { className: "land-calendar", children: [
    /* @__PURE__ */ o.exports.jsx("div", { className: "land-calendar-filter", children: /* @__PURE__ */ o.exports.jsx(i4, {}) }),
    /* @__PURE__ */ o.exports.jsxs("div", { className: "land-calendar-header", children: [
      /* @__PURE__ */ o.exports.jsx("div", { className: "land-calendar-year", children: S === 0 ? /* @__PURE__ */ o.exports.jsx("div", { children: g }) : /* @__PURE__ */ o.exports.jsx(
        wd,
        {
          selected: l,
          data: z,
          onChange: (I) => ie == null ? void 0 : ie(Number(I.value))
        }
      ) }),
      /* @__PURE__ */ o.exports.jsxs("div", { className: "land-calendar-right-btn", children: [
        /* @__PURE__ */ o.exports.jsxs("div", { className: "land-calendar-month", children: [
          e === "zh" ? H[h + 1].zh : H[h + 1].en,
          /* @__PURE__ */ o.exports.jsx(
            he,
            {
              type: "text",
              icon: /* @__PURE__ */ o.exports.jsx(E, { name: "back" }),
              className: `land-calendar-btn back ${x === h ? "hide" : ""}`,
              disabled: F,
              pop: `\u8FD4\u56DE${e === "zh" ? H[h + 1].zh : H[h + 1].en}}`,
              onClick: q
            }
          )
        ] }),
        /* @__PURE__ */ o.exports.jsx(
          he,
          {
            type: "text",
            icon: /* @__PURE__ */ o.exports.jsx(E, { name: "arrow" }),
            className: "land-calendar-btn prev",
            disabled: Z,
            pop: Z ? "\u4E0D\u80FD\u518D\u5C11\u4E86" : void 0,
            onClick: M
          }
        ),
        /* @__PURE__ */ o.exports.jsx(
          he,
          {
            type: "text",
            icon: /* @__PURE__ */ o.exports.jsx(E, { name: "arrow" }),
            className: "land-calendar-btn next",
            disabled: F,
            pop: F ? "\u4E0D\u80FD\u518D\u591A\u4E86" : void 0,
            onClick: k
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o.exports.jsx("div", { className: "land-calendar-weekdays", children: K.map((I, D) => /* @__PURE__ */ o.exports.jsx("div", { className: "land-calendar-item weekday", children: e === "zh" ? I.zh : I.en }, D)) }),
    /* @__PURE__ */ o.exports.jsx("div", { className: "land-calendar-days", children: O })
  ] });
}, d4 = C.div`
  &.land-calendar {
  }
  .land-calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .land-calendar-right-btn {
      display: flex;
      gap: var(--gap-8);
      align-items: center;
    }
    .land-calendar-btn {
      &.prev svg {
        transform: rotate(90deg);
      }
      &.next svg {
        transform: rotate(-90deg);
      }
    }
    .land-calendar-month {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      .land-calendar-btn.back {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: opacity var(--transition-15) linear;
        &.hide {
          opacity: 0;
          pointer-events: none;
        }
      }
      &:hover {
        .land-calendar-btn.back:not(.hide) {
          opacity: 1;
        }
      }
    }
  }
  .land-calendar-weekdays,
  .land-calendar-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: var(--gap-4);
  }
  .land-calendar-item {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-2);
    border-radius: var(--radius-4);
    transition: all 0.2s linear;
    will-change: background-color color;
    cursor: pointer;
    &.weekday {
      color: var(--color-text-5);
    }
    &.day {
      display: flex;
      flex-direction: column;
      align-items: center;
      &:hover {
        background-color: var(--color-bg-1);
      }
      &:active {
        background-color: var(--color-bg-2);
      }
      &.active {
        color: var(--color-primary-6);
        font-weight: 500;
      }
      &.active.selected {
        background-color: var(--color-primary-6);
        color: var(--color-text-white);
      }
      &.selected {
        background-color: var(--color-text-2);
        color: var(--color-text-white);
      }
    }
    .land-calendar-bottom-dot {
      width: 4px;
      height: 4px;
      background-color: var(--color-primary-6);
      border-radius: 100%;
    }
  }
`, I2 = ({}) => /* @__PURE__ */ o.exports.jsx("div", { children: "Carousel" }), V2 = ({
  checked: e = !1,
  text: r = "\u9009\u9879",
  pop: n,
  onChange: t
}) => /* @__PURE__ */ o.exports.jsxs(p4, { children: [
  /* @__PURE__ */ o.exports.jsxs(
    u4,
    {
      onClick: () => {
        t == null || t();
      },
      children: [
        /* @__PURE__ */ o.exports.jsx(x4, { className: `${e ? "checked" : ""}`, children: /* @__PURE__ */ o.exports.jsx(E, { name: "check", size: 10, strokeWidth: 0, fill: "var(--color-bg-white)" }) }),
        r
      ]
    }
  ),
  n && /* @__PURE__ */ o.exports.jsxs(h4, { className: "hover-pop", children: [
    /* @__PURE__ */ o.exports.jsx(E, { name: "info-stroke", stroke: "var(--color-text-4)" }),
    /* @__PURE__ */ o.exports.jsx(
      X,
      {
        content: n,
        theme: "dark",
        style: { maxWidth: "200px" },
        placement: "right"
      }
    )
  ] })
] }), p4 = C.div`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
`, u4 = C.div`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  font-size: var(--font-content-medium);
  color: var(--color-text-2);
  cursor: pointer;
`, x4 = C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-4);
  border: 1px solid var(--color-border-3);
  transition: all var(--transition-15) linear;
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.checked {
    border-color: var(--color-primary-6);
    background-color: var(--color-primary-6);
    svg path {
      fill: var(--color-bg-white);
    }
  }
`, h4 = C.div`
  position: relative;
  height: 16px;
  line-height: 16px;
`, B2 = ({
  checked: e = [1],
  data: r = [{ value: 1, label: "\u9009\u98791" }, { value: 2, label: "\u9009\u98792" }, { value: 3, label: "\u9009\u98793" }],
  onChange: n,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsx(f4, { className: `land-checkbox-wrap ${s}`, style: t, children: r == null ? void 0 : r.map(
  (a) => /* @__PURE__ */ o.exports.jsxs(g4, { className: `land-checkbox-item ${a.info ? "hover-pop" : ""} ${a.disabled ? "disabled" : ""}`, children: [
    /* @__PURE__ */ o.exports.jsx(X, { content: a.info, theme: "dark", style: { maxWidth: "200px" } }),
    /* @__PURE__ */ o.exports.jsxs(
      j4,
      {
        onClick: (i) => {
          a.disabled || (i.stopPropagation(), n == null || n(a));
        },
        className: "land-checkbox-label",
        children: [
          /* @__PURE__ */ o.exports.jsx(m4, { className: `${e.includes(a.value) ? "checked" : ""}`, children: /* @__PURE__ */ o.exports.jsx(E, { name: "check", size: 10, strokeWidth: 0, fill: "var(--color-bg-white)" }) }),
          a.label
        ]
      }
    ),
    a.iconInfo && /* @__PURE__ */ o.exports.jsxs(v4, { className: "hover-pop", children: [
      /* @__PURE__ */ o.exports.jsx(E, { name: "info-stroke", size: 12, stroke: "var(--color-text-4)" }),
      /* @__PURE__ */ o.exports.jsx(X, { content: a.iconInfo, theme: "dark", style: { maxWidth: "200px" } })
    ] })
  ] }, a.value)
) }), f4 = C.div`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`, g4 = C.div`
  position: relative;
   display: flex;
  align-items: center;
  gap: var(--gap-4); 
  cursor: pointer;
  &.disabled{
    .land-checkbox-label{
      opacity: var(--opacity-04);
    }
    cursor: not-allowed;
  }
`, j4 = C.div`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  font-size: var(--font-content-medium);
  color: var(--color-text-2);
`, m4 = C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-4);
  border: 1px solid var(--color-border-3);
  transition: all var(--transition-15) linear;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.checked {
    border-color: var(--color-primary-6);
    background-color: var(--color-primary-6);
    svg path {
      fill: var(--color-bg-white);
    }
  }
`, v4 = C.div`
  position: relative;
  height: 12px;
  line-height: 12px;
`, A2 = ({
  checked: e = !1,
  gap: r = 2,
  strokeWidth: n = 2,
  radius: t = 6,
  children: s
}) => /* @__PURE__ */ o.exports.jsx(
  L4,
  {
    className: "land-checked-container",
    checked: e,
    size: n,
    radius: t,
    gap: r,
    children: s
  }
), L4 = C.div`
  position: relative;
  z-index: 0;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: ${(e) => `-${e.gap * 2}px`};
    left: ${(e) => `-${e.gap * 2}px`};
    width: ${(e) => `calc(100% + ${e.gap * 4}px)`};
    height: ${(e) => `calc(100% + ${e.gap * 4}px)`};
    border: ${(e) => `${e.size}px solid var(--color-primary-6)`};
    border-radius: ${(e) => `${e.radius}px`};
    opacity: ${(e) => e.checked ? 1 : 0};
    transition: opacity 0.2s linear;
    pointer-events: none;
  }
`, T2 = ({
  data: e,
  hideIcon: r,
  style: n,
  className: t = ""
}) => /* @__PURE__ */ o.exports.jsx(b4, { style: n, className: t, children: e == null ? void 0 : e.map((s, a) => /* @__PURE__ */ o.exports.jsx(
  w4,
  {
    title: s.title,
    content: s.details,
    hideIcon: r,
    open: s.open
  },
  a
)) }), w4 = ({
  open: e = !1,
  title: r,
  hideIcon: n,
  content: t
}) => {
  var c;
  const [s, a] = A(e);
  J(() => a(e), [e]);
  const i = re(null);
  return /* @__PURE__ */ o.exports.jsxs("div", { className: `land-collapse-item ${s ? "open" : ""}`, children: [
    /* @__PURE__ */ o.exports.jsxs(
      "div",
      {
        className: "land-collapse-item-title",
        onClick: (l) => {
          l.stopPropagation(), a(!s);
        },
        children: [
          !n && /* @__PURE__ */ o.exports.jsx(E, { name: "arrow", strokeWidth: 4 }),
          r
        ]
      }
    ),
    /* @__PURE__ */ o.exports.jsx(
      "div",
      {
        ref: i,
        className: "land-collapse-item-details",
        style: {
          maxHeight: s ? `${(c = i.current) == null ? void 0 : c.scrollHeight}px` : "0px"
        },
        children: /* @__PURE__ */ o.exports.jsx("div", { className: "land-collapse-item-details-content", children: t })
      }
    )
  ] });
}, b4 = C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  .land-collapse-item {
    font-size: 14px;
    transition: height var(--transition-15) cubic-bezier(0.38, 0, 0.24, 1);
    .land-collapse-item-title {
      display: flex;
      align-items: center;
      color: var(--color-text-2);
      cursor: pointer;
      svg {
        transform: rotate(-90deg);
        transition: transform var(--transition-15) linear;
      }
    }
    .land-collapse-item-details {
      color: var(--color-text-4);
      overflow: hidden;
      transition: max-height var(--transition-15) linear;
      .land-collapse-item-details-content {
        padding: 12px 12px 0;
      }
    }
    &.open {
      .land-collapse-item-title {
        svg {
          transform: rotate(0deg);
        }
      }
    }
  }
`, O2 = ({ children: e, style: r, className: n }) => {
  const [t, s] = A(132), a = document.querySelector(".land-header"), i = document.querySelector(".land-footer");
  return J(() => {
    let c, l;
    a ? c = a.getBoundingClientRect().height : c = 0, i ? l = i.getBoundingClientRect().height : l = 0, s(c + l);
  }), /* @__PURE__ */ o.exports.jsx(y4, { className: n, style: r, $minHeight: t, children: e });
}, y4 = C.main`
  flex: 1;
  min-height: ${(e) => `calc(100vh - ${e.$minHeight}px)`};
  background: var(--color-bg-white);
`, D2 = ({
  value: e = "var(--color-bg-1)",
  size: r,
  border: n = !1,
  useSelect: t = !0,
  onChange: s,
  onClick: a,
  style: i,
  className: c = ""
}) => {
  const [l, u] = A(e);
  return J(() => u(e), [e]), /* @__PURE__ */ o.exports.jsx(
    C4,
    {
      className: c,
      style: r ? {
        width: typeof r == "number" ? `${r}px` : r,
        height: typeof r == "number" ? `${r}px` : r,
        background: l,
        ...i
      } : {
        background: l,
        ...i
      },
      onClick: (p) => {
        p.stopPropagation(), a == null || a(l);
      },
      border: n,
      children: t && /* @__PURE__ */ o.exports.jsx(
        "input",
        {
          type: "color",
          onChange: (p) => {
            p.stopPropagation(), s == null || s(p.target.value, p);
          }
        }
      )
    }
  );
}, C4 = C.label`
  border: ${(e) => e.border ? "4px solid var(--color-border-1)" : ""};
  input {
    width: 0px;
    height: 0px;
    opacity: 0;
  }
`, _2 = ({
  type: e = "border",
  disabled: r,
  onChange: n,
  style: t,
  className: s = "",
  ...a
}) => /* @__PURE__ */ o.exports.jsx(
  k4,
  {
    className: `land-datePicker-wrap ${r ? "disabled" : ""} ${e} ${s}`,
    style: t,
    children: /* @__PURE__ */ o.exports.jsx(
      "input",
      {
        type: "date",
        onChange: (i) => {
          i.stopPropagation(), n == null || n(i);
        },
        ...a
      }
    )
  }
), k4 = C.a`
  padding: 0 12px;
  border-radius: var(--radius-6);
  transition: background-color var(--transition-15) linear;
  input{
    height: 36px;
    background-color: transparent;
    border: none;
    &:focus,
    &:focus-within,
    &:focus-visible,
    &:active{
      outline: 0px;
    }
  }
  &.border{
    border: var(--border-1) solid var(--color-border-2);
    &:hover:not(.disabled){
    background-color: var(--color-bg-1);
    }
    &:active:not(.disabled){
      background-color: var(--color-bg-2);
    }
  }
  &.background{
    background-color: var(--color-bg-1);
    &:hover:not(.disabled){
    background-color: var(--color-bg-2);
    }
    &:active:not(.disabled){
      background-color: var(--color-bg-3);
    }
  }
  &.disabled{
    opacity: var(--opacity-68);
    cursor: not-allowed;
  }
`, Ce = ({
  direction: e = "row",
  size: r = 1,
  lang: n = "100%",
  margin: t = 0,
  type: s = "solid",
  color: a = "var(--color-border-2)",
  content: i,
  align: c = "center",
  style: l,
  className: u = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  M4,
  {
    className: `land-divider ${u}`,
    style: {
      width: e === "row" ? `${n}` : `${r}px`,
      height: e === "column" ? `${n}` : `${r}px`,
      margin: e === "row" ? `${t}px 0` : `0 ${t}px`,
      ...l
    },
    direction: e,
    gap: i ? "8px" : "",
    children: [
      /* @__PURE__ */ o.exports.jsx(
        "div",
        {
          style: {
            flex: c === "left" ? "10%" : c === "right" ? "90%" : 1,
            height: "0px",
            borderBottom: e === "row" ? `${r}px ${s} ${a}` : "none",
            borderLeft: e === "column" ? `${r}px ${s} ${a}` : "none"
          }
        }
      ),
      i && /* @__PURE__ */ o.exports.jsxs(o.exports.Fragment, { children: [
        /* @__PURE__ */ o.exports.jsx(
          "div",
          {
            style: {
              fontSize: "12px",
              color: "#999",
              writingMode: e === "column" ? "vertical-rl" : "unset",
              textOrientation: e === "column" ? "upright" : "unset"
            },
            children: i
          }
        ),
        /* @__PURE__ */ o.exports.jsx(
          "div",
          {
            style: {
              flex: c === "left" ? "90%" : c === "right" ? "10%" : 1,
              height: "0px",
              borderBottom: e === "row" ? `${r}px ${s} ${a}` : "none",
              borderLeft: e === "column" ? `${r}px ${s} ${a}` : "none"
            }
          }
        )
      ] })
    ]
  }
), M4 = C.div`
  display: flex;
  flex-direction: ${(e) => e.direction};
  align-items: center;
  gap: ${(e) => e.gap};
`, F2 = ({
  show: e,
  mask: r,
  title: n,
  headerLeftComponent: t,
  headerRightComponent: s,
  headerComponent: a,
  useHeaderDivider: i,
  footerLeftComponent: c,
  footerRightComponent: l,
  footerComponent: u,
  useFooterDivider: p,
  cancelLabel: x = "\u53D6\u6D88",
  submitLabel: g = "\u786E\u5B9A",
  size: v = "medium",
  onClose: h,
  onSubmit: L,
  onCancel: f,
  children: w,
  wrapStyle: m,
  wrapClassName: y,
  contentStyle: $,
  contentClassName: M,
  bodyStyle: k,
  bodyClassName: S,
  maskStyle: Z
}) => {
  const F = te(() => {
    let q = "320px";
    switch (v) {
      case "small":
        q = "320px";
        break;
      case "medium":
        q = "600px";
        break;
      case "large":
        q = "1000px";
        break;
    }
    return q;
  }, [v]);
  return /* @__PURE__ */ o.exports.jsxs($4, { className: `land-dialog ${e ? "show" : ""} ${y}`, contentWidth: F, style: m, children: [
    r && /* @__PURE__ */ o.exports.jsx("div", { className: "land-dialog-mask", style: Z }),
    /* @__PURE__ */ o.exports.jsxs("div", { className: `land-dialog-content ${M}`, style: $, children: [
      a || (n || h || t || s ? /* @__PURE__ */ o.exports.jsxs("div", { className: "land-dialog-header", children: [
        t || /* @__PURE__ */ o.exports.jsx("div", { className: "land-dialog-header-title", children: n }),
        s || h && /* @__PURE__ */ o.exports.jsx("div", { className: "land-dialog-header-close", children: /* @__PURE__ */ o.exports.jsx(E, { name: "close", onClick: h }) })
      ] }) : null),
      i && /* @__PURE__ */ o.exports.jsx(Ce, {}),
      /* @__PURE__ */ o.exports.jsx("div", { className: `land-dialog-body ${S}`, style: k, children: w }),
      p && /* @__PURE__ */ o.exports.jsx(Ce, {}),
      u || /* @__PURE__ */ o.exports.jsxs("div", { className: "land-dialog-footer", children: [
        l || (x || g || f || L) && /* @__PURE__ */ o.exports.jsxs("div", { className: "land-dialog-footer-btn", children: [
          f && /* @__PURE__ */ o.exports.jsx(he, { type: "background", status: "default", onClick: f, children: x }),
          L && /* @__PURE__ */ o.exports.jsx(he, { type: "background", status: "primary", onClick: L, children: g })
        ] }),
        c
      ] })
    ] })
  ] });
}, $4 = C.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  .land-dialog-content{
    opacity: 0;
    transform: scale(0.9); 
  }
  .land-dialog-mask{
    opacity: 0;
  }
  pointer-events: none;
  z-index: 1000;
  &.show{
    .land-dialog-content{
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
      transition: opacity var(--transition-15) linear, transform var(--transition-15) linear;
    }
    .land-dialog-mask{
      opacity: 1;
      transition: opacity var(--transition-15) linear;
    }
  }
  .land-dialog-mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
  }
  .land-dialog-content{
    position: relative;
    width: ${(e) => e.contentWidth};
    background-color: var(--color-bg-white);
    box-shadow: var(--boxshadow-medium);
    border-radius: 6px;
    .land-dialog-header{
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 24px;
      height: 64px;
      .land-dialog-header-title{
        font-size: 16px;
        font-weight: 500;
        color: var(--color-text-2);
      }
      .land-dialog-header-close{
        position: absolute;
        top: 0px;
        right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 100%;
        color: var(--color-text-2);
        transition: color var(--transition-15) linear;
        cursor: pointer;
        &:hover{
          color: var(--color-text-1);
        }
      }
    }
    .land-dialog-body{
      padding: 20px 24px;
    }
    .land-dialog-footer{
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      padding: 16px 24px 24px;
      .land-dialog-footer-btn{
        display: flex;
        gap: 8px;
      }
    }
  }
`, Z2 = ({
  show: e,
  placement: r = "right",
  mask: n,
  title: t,
  headerLeftComponent: s,
  headerRightComponent: a,
  headerComponent: i,
  useHeaderDivider: c = !0,
  footerLeftComponent: l,
  footerRightComponent: u,
  footerComponent: p,
  useFooterDivider: x = !0,
  cancelLabel: g = "\u53D6\u6D88",
  submitLabel: v = "\u786E\u5B9A",
  minWidth: h,
  maxWidth: L,
  size: f = "auto",
  onClose: w,
  onSubmit: m,
  onCancel: y,
  children: $,
  wrapStyle: M,
  wrapClassName: k,
  contentStyle: S,
  contentClassName: Z,
  bodyStyle: F,
  bodyClassName: q,
  maskStyle: ie
}) => {
  const H = te(() => {
    let z = "320px";
    if (r === "bottom")
      z = "100%";
    else
      switch (f) {
        case "small":
          z = "32%";
          break;
        case "medium":
          z = "60%";
          break;
        case "large":
          z = "80%";
          break;
        case "auto":
          z = "fit-content";
          break;
      }
    return z;
  }, [f, r]), O = te(() => {
    let z = "100%";
    if (r === "bottom")
      switch (f) {
        case "small":
          z = "30%";
          break;
        case "medium":
          z = "60%";
          break;
        case "large":
          z = "90%";
          break;
        case "auto":
          z = "fit-content";
          break;
      }
    return z;
  }, [r]), K = te(() => w && (t || i || s), [w, i, s]);
  return /* @__PURE__ */ o.exports.jsxs(N4, { className: `land-drawer ${e ? "show" : ""} ${r} ${k}`, contentWidth: H, contentHeight: O, minWidth: h, maxWidth: L, style: M, children: [
    n && /* @__PURE__ */ o.exports.jsx("div", { className: "land-drawer-mask", style: ie }),
    /* @__PURE__ */ o.exports.jsxs("div", { className: `land-drawer-content ${Z}`, style: S, children: [
      /* @__PURE__ */ o.exports.jsxs("div", { className: "land-drawer-header-wrapper", children: [
        w && /* @__PURE__ */ o.exports.jsx("div", { className: "land-drawer-header-close", children: /* @__PURE__ */ o.exports.jsx(E, { name: "close", onClick: w, size: 24 }) }),
        K && /* @__PURE__ */ o.exports.jsx(Ce, { direction: "column", lang: "36px", margin: 12 }),
        i || (t || w || s || a ? /* @__PURE__ */ o.exports.jsxs("div", { className: "land-drawer-header", children: [
          s || /* @__PURE__ */ o.exports.jsx("div", { className: "land-drawer-header-title", children: t }),
          a && /* @__PURE__ */ o.exports.jsx("div", { className: "land-drawer-header-right", children: a })
        ] }) : null)
      ] }),
      c && /* @__PURE__ */ o.exports.jsx(Ce, {}),
      /* @__PURE__ */ o.exports.jsx("div", { className: `land-drawer-body ${q}`, style: F, children: $ }),
      x && /* @__PURE__ */ o.exports.jsx(Ce, {}),
      p || /* @__PURE__ */ o.exports.jsxs("div", { className: "land-drawer-footer", children: [
        u || (g || v || y || m) && /* @__PURE__ */ o.exports.jsxs("div", { className: "land-drawer-footer-btn", children: [
          y && /* @__PURE__ */ o.exports.jsx(he, { type: "background", status: "default", onClick: y, children: g }),
          m && /* @__PURE__ */ o.exports.jsx(he, { type: "background", status: "primary", onClick: m, children: v })
        ] }),
        l
      ] })
    ] })
  ] });
}, N4 = C.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: end;
  justify-content: end;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  overflow: auto;
  z-index: 1000;
  .land-drawer-mask{
    opacity: 0;
  }
  .land-drawer-content{
    opacity: 0;
  }
  &.show{
    pointer-events: auto;
    .land-drawer-mask{
      opacity: 1;
      transition: opacity var(--transition-15) linear;
    }
    &.left .land-drawer-content,
    &.right .land-drawer-content,
    &.bottom .land-drawer-content{
        opacity: 1;
        transform: translate(0,0);
        transition: opacity var(--transition-15) linear, transform var(--transition-15) linear;
      }
  }
  &.right{
    .land-drawer-content{
      transform: translateX(10%); 
      border-radius: 6px 0 0 6px;
    }
  }
  &.bottom{
    .land-drawer-content{
      transform: translateY(10%); 
      border-radius: 6px 6px 0 0;
      max-width: unset;
      min-width: unset;
    }
  }
  .land-drawer-mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
  }
  .land-drawer-content{
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${(e) => e.contentWidth};
    height: ${(e) => e.contentHeight};
    min-width: ${(e) => e.minWidth};
    max-width: ${(e) => e.maxWidth};
    background-color: var(--color-bg-white);
    box-shadow: var(--boxshadow-medium);
    .land-drawer-header-wrapper{
      display: flex;
      align-items: center;
      padding: 0 24px;
      height: 64px;
    }
    .land-drawer-header-close{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: -4px;
        width: 32px;
        height: 100%;
        color: var(--color-text-2);
        transition: color var(--transition-15) linear;
        flex-shrink: 0;
        cursor: pointer;
        &:hover{
          color: var(--color-text-1);
        }
      }
    .land-drawer-header{
      flex: 1;
      position: relative;
      display: flex;
      align-items: center;
      height: 100%;
      .land-drawer-header-title{
        font-size: 16px;
        font-weight: 500;
        color: var(--color-text-2);
      }
      .land-drawer-header-right{
        margin-left: auto;
      }
    }
    .land-drawer-body{
      padding: 20px 24px;
      flex: 1;
    }
    .land-drawer-footer{
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      padding: 24px;
      .land-drawer-footer-btn{
        display: flex;
        gap: 8px;
      }
    }
  }
`, U2 = ({
  dropData: e,
  toggle: r = "\u8BF7\u9009\u62E9",
  placement: n = "left",
  onChange: t,
  toggleClassName: s = "",
  toggleStyle: a,
  dropClassName: i = "",
  dropStyle: c
}) => {
  const [l, u] = A(!1);
  return /* @__PURE__ */ o.exports.jsx(Cn, { children: /* @__PURE__ */ o.exports.jsxs(
    S4,
    {
      className: `land-dropdown-toggle ${s}`,
      style: a,
      onClick: () => u(!l),
      children: [
        r,
        /* @__PURE__ */ o.exports.jsx(
          H4,
          {
            className: `${l ? "show" : ""}`,
            placement: n,
            children: /* @__PURE__ */ o.exports.jsx(
              E4,
              {
                className: `land-dropdown-results ${i}`,
                style: c,
                children: e == null ? void 0 : e.map((p) => /* @__PURE__ */ o.exports.jsx(
                  R4,
                  {
                    onClick: () => {
                      t == null || t(p);
                    },
                    children: p.label
                  },
                  p.id
                ))
              }
            )
          }
        )
      ]
    }
  ) });
}, S4 = C.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`, H4 = C.div`
  position: absolute;
  left: ${(e) => e.placement === "left" ? "0" : "unset"};
  right: ${(e) => e.placement === "right" ? "0" : "unset"};

  top: 100%;
  padding-top: 4px;
  opacity: 0;
  transform: scaleY(0.8);
  transform-origin: top center;
  pointer-events: none;
  transition: opacity var(--transition-15) ease,
    transform var(--transition-15) ease;
  z-index: 1;
  &.show {
    opacity: 1;
    transform: scaleY(1);
    pointer-events: all;
  }
`, E4 = C.ul`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
`, R4 = C.li`
  border-radius: var(--radius-4);
  padding: var(--padding-medium);
  color: var(--color-text-2);
  font-size: var(--font-content-medium);
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
`, P2 = ({
  line: e = 1,
  text: r
}) => {
  const n = re(null), [t, s] = A(!1);
  return J(() => {
    const a = () => {
      e === 1 && n.current && s(n.current.offsetWidth < n.current.scrollWidth), e > 1 && n.current && s(n.current.offsetHeight < n.current.scrollHeight);
    }, i = new MutationObserver(a);
    return i.observe(document, { childList: !0, subtree: !0 }), document.body.addEventListener("resize", a), () => {
      i.disconnect(), document.body.removeEventListener("resize", a);
    };
  }, [r]), /* @__PURE__ */ o.exports.jsxs(I4, { className: `${t ? "hover-pop" : ""} `, line: e, children: [
    /* @__PURE__ */ o.exports.jsx("div", { ref: n, className: "land-ellipsis-content", children: r }),
    t && /* @__PURE__ */ o.exports.jsx(X, { content: "\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57", style: { maxWidth: "100%" } })
  ] });
}, I4 = C.div`
  position: relative;
  width: 100%;
  .land-ellipsis-content{
    font-size: 14px;
    color: inherit;
    overflow: hidden;
    white-space: ${(e) => e.line > 1 ? "" : "nowrap"};
    text-overflow: ellipsis;
    display: ${(e) => e.line > 1 ? "-webkit-box" : ""};
    -webkit-line-clamp: ${(e) => e.line};
    -webkit-box-orient: vertical;
    cursor: default ;
  }
`, V4 = ({
  w: e = "100%",
  h: r,
  column: n,
  wrap: t,
  justify: s = "start",
  align: a = "start",
  gap: i,
  bothCenter: c,
  children: l,
  style: u,
  className: p = ""
}) => /* @__PURE__ */ o.exports.jsx(
  B4,
  {
    className: p,
    style: u,
    width: e,
    height: r,
    direction: n ? "column" : "row",
    gap: typeof i == "number" ? `${i}px` : i,
    wrap: t,
    justify: c ? "center" : s,
    align: c ? "center" : a,
    children: l
  }
), B4 = C.div`
  display: flex;
  flex-direction: ${(e) => e.direction};
  align-items: center;
  gap: ${(e) => e.gap};
  flex-wrap: ${(e) => e.wrap ? "wrap" : ""};
  justify-content: ${(e) => e.justify};
  align-items: ${(e) => e.align};
  width: ${(e) => e.width};
  height: ${(e) => e.height};
`, q2 = ({ children: e, style: r, className: n }) => /* @__PURE__ */ o.exports.jsx(A4, { className: `land-footer ${n}`, style: r, children: e }), A4 = C.footer`
  padding: 24px;
  height: fit-content;
  width: 100%;
  background-color: var(--color-bg-1);
`;
var T4 = /* @__PURE__ */ ((e) => (e.ColumnFit = "column-fit", e.ColumnFill = "column-fill", e.RowFit = "row-fit", e.RowFill = "row-fill", e.ColumnRepeat = "column-repeat", e.RowRepeat = "row-repeat", e.Default = "default", e))(T4 || {});
const z2 = ({
  type: e = "default",
  autoSize: r = 100,
  repeatNum: n = 1,
  gap: t = 8,
  children: s,
  style: a,
  className: i = ""
}) => {
  const c = te(() => {
    let l = {
      display: "grid",
      columnGap: typeof t == "number" ? t : t[0],
      rowGap: typeof t == "number" ? t : t[1]
    };
    if (e === "default")
      return Object.assign(l, a);
    switch (e) {
      case "column-fit":
        return Object.assign(l, { gridTemplateColumns: `repeat(auto-fit, minmax(${r}, 1fr))` });
      case "column-fill":
        return Object.assign(l, { gridTemplateColumns: `repeat(auto-fill, minmax(${r}, 1fr))` });
      case "row-fit":
        return Object.assign(l, { gridTemplateRows: `repeat(auto-fit, minmax(${r}, 1fr))` });
      case "row-fill":
        return Object.assign(l, { gridTemplateRows: `repeat(auto-fill, minmax(${r}, 1fr))` });
      case "column-repeat":
        return Object.assign(l, { gridTemplateColumns: `repeat(${n}, 1fr)` });
      case "row-repeat":
        return Object.assign(l, { gridTemplateRows: `repeat(${n}, 1fr)` });
      default:
        return Object.assign(l, a);
    }
  }, [e, r, n, t, a]);
  return /* @__PURE__ */ o.exports.jsx("div", { className: `land-grid ${i}`, style: c, children: s });
};
var O4 = /* @__PURE__ */ ((e) => (e.SELF = "self", e.OTHERS = "others", e.SIMPLE = "simple", e.DISABLED = "disabled", e))(O4 || {});
const Bt = ({
  active: e,
  data: r,
  direction: n = "row",
  theme: t = {
    hoverColor: "var(--color-text-1)",
    hoverBg: "var(--color-bg-1)",
    activeColor: "var(--color-text-1)"
  },
  border: s = !0,
  onChange: a,
  onDropChange: i,
  dropProps: c,
  itemStyle: l,
  itemClassName: u = "",
  style: p,
  className: x = ""
}) => /* @__PURE__ */ o.exports.jsx(
  D4,
  {
    className: `land-menu ${x}`,
    style: p,
    column: n === "column",
    border: s,
    children: r == null ? void 0 : r.map((g, v) => {
      var h;
      return /* @__PURE__ */ o.exports.jsxs(
        "div",
        {
          className: `land-menu-item ${g.clickType === "simple" ? "simple" : ""} ${g.clickType === "disabled" ? "disabled" : ""}`,
          style: l,
          children: [
            /* @__PURE__ */ o.exports.jsxs(
              _4,
              {
                role: "button",
                className: `land-menu-link ${e === g.key ? "active" : ""} ${u}`,
                onClick: (L) => {
                  L.stopPropagation(), a == null || a(g);
                },
                column: n === "column",
                theme: t,
                children: [
                  typeof g.icon == "string" ? /* @__PURE__ */ o.exports.jsx("img", { src: g.icon, className: "land-menu-icon" }) : g.icon,
                  /* @__PURE__ */ o.exports.jsx("p", { className: "land-menu-title", "data-title": g.title, children: g.title }),
                  /* @__PURE__ */ o.exports.jsx("span", { className: "land-menu-sub-title", children: g.subTitle }),
                  g.isNew && /* @__PURE__ */ o.exports.jsx("i", { className: "land-menu-new", children: typeof g.isNew == "boolean" ? "NEW" : g.isNew })
                ]
              },
              g.key
            ),
            g.dropData && /* @__PURE__ */ o.exports.jsx("div", { className: `land-menu-drop-wrap ${g.open ? "open" : ""}`, children: /* @__PURE__ */ o.exports.jsx("div", { className: "land-menu-drop", children: /* @__PURE__ */ o.exports.jsx(
              Bt,
              {
                data: g.dropData,
                onChange: (L) => i == null ? void 0 : i(L, g),
                direction: "column",
                ...c
              }
            ) }) })
          ]
        },
        (h = g.key) != null ? h : v
      );
    })
  }
), D4 = C.div`
  display: flex;
  flex-direction: ${(e) => e.column ? "column" : "row"};
  gap: var(--gap-4);
  height: ${(e) => e.column ? "" : "100%"};
  width: ${(e) => e.column ? "100%" : "fit-content"};
  border-bottom: ${(e) => e.border && !e.column ? "var(--border-1) solid var(--color-border-1)" : ""};
  border-right: ${(e) => e.border && e.column ? "var(--border-1) solid var(--color-border-1)" : ""};
  box-sizing: border-box;
  .land-menu-item {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: ${(e) => e.column ? "" : "100%"};
    width: 100%;
    border-radius: var(--radius-4);
    transition: all var(--transition-15) linear;
    &.simple {
      cursor: default;
    }
    &.disabled {
      pointer-events: none;
      opacity: var(--opacity-68);
    }
    &:hover .land-menu-drop-wrap {
      opacity: 1;
      pointer-events: all;
      transform: scaleY(1);
    }
  }
  .land-menu-drop-wrap {
    width: 100%;
    .land-menu-drop {
      padding: 8px 0px;
    }
    &.open {
      padding: 0;
      .land-menu-link {
        padding-left: 32px;
      }
      .land-menu {
        position: static;
        border: none;
        padding: 0;
      }
    }
    &:not(.open) {
      position: absolute;
      top: 100%;
      left: 0;
      padding-top: 8px;
      z-index: 1;
      opacity: 0;
      transform: scaleY(0.8);
      transform-origin: top center;
      pointer-events: none;
      transition: all var(--transition-15) linear;
      .land-menu-drop {
        background-color: var(--color-bg-white);
        border-radius: var(--radius-8);
        box-shadow: var(--boxshadow-medium);
      }
    }
  }
`, _4 = C.a`
  position: relative;
  padding: var(--padding-medium);
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  font-size: var(--font-content-large);
  white-space: nowrap;
  box-sizing: border-box;
  transition: background-color var(--transition-15) linear;
  cursor: pointer;
  color: var(--color-text-3);
  &::after {
    content: "";
    display: block;
    position: absolute;
    right: ${(e) => e.column ? "0" : "50%"};
    bottom: ${(e) => e.column ? "50%" : "0"};
    width: ${(e) => e.column ? "2px" : "12px"};
    height: ${(e) => e.column ? e.theme.activeBg ? "100%" : "calc(100% - 16px)" : "2px"};
    transform: ${(e) => e.column ? "translateY(50%)" : "translateX(50%)"};
    transform-origin: center center;
    border-radius: 1px;
    background-color: ${(e) => e.theme.lineColor || "var(--color-text-1)"};
    opacity: 0;
  }
  &:hover {
    color: ${(e) => e.theme.hoverColor};
    background-color: ${(e) => e.theme.hoverBg};
    .land-menu-title::before {
      color: ${(e) => e.theme.hoverColor};
      font-weight: 600;
    }
    svg path {
      stroke-width: 4px;
    }
  }
  &.active {
    color: ${(e) => e.theme.hoverColor};
    background-color: ${(e) => e.theme.activeBg};
    .land-menu-title::before {
      color: ${(e) => e.theme.activeColor || "var(--color-text-1)"};
      font-weight: 600;
    }
    &::after {
      opacity: 1;
      transition: opacity var(--transition-15) linear;
    }
    svg path {
      stroke-width: 4px;
    }
  }
  .land-menu-title {
    position: relative;
    color: transparent;
    font-weight: 600;
    &::before {
      content: attr(data-title);
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      color: var(--color-text-3);
      font-weight: 400;
      text-align: center;
      line-height: 40px;
    }
  }

  svg,
  .land-menu-icon {
    width: 18px;
    height: 18px;
    margin-right: 4px;
  }
  svg path {
    stroke-width: 3px;
  }
  .land-menu-sub-title {
    font-size: var(--font-content-small);
    opacity: var(--opacity-68);
  }
  .land-menu-new {
    position: absolute;
    padding: var(--padding-small);
    top: -12px;
    right: -8px;
    font-size: var(--font-content-small);
    background-color: var(--color-link-1);
    color: var(--color-link-6);
    font-weight: 600;
    border-radius: 3px;
    box-sizing: border-box;
    transform: scale(0.65);
  }
  @media screen and (max-width: 800px) {
    font-size: var(--font-content-medium);
  }
`, Y2 = ({
  h: e = "64px",
  fixed: r,
  filter: n = 0,
  borderBottom: t = !0,
  applications: s,
  logo: a,
  name: i,
  onLogoClick: c,
  divider: l = !0,
  align: u,
  menuProps: p,
  rightComponent: x,
  style: g,
  className: v = ""
}) => {
  var f;
  const [h, L] = A(!1);
  return J(() => {
    window.onscroll = () => L(!1), window.onresize = () => L(!1);
  }), /* @__PURE__ */ o.exports.jsxs(
    F4,
    {
      className: `land-header ${r ? "fixed" : ""} ${v}`,
      style: g,
      height: e,
      filter: n,
      borderBottom: t,
      applications: Boolean(s),
      children: [
        /* @__PURE__ */ o.exports.jsxs("div", { className: "land-header-logo", onClick: c, children: [
          s && /* @__PURE__ */ o.exports.jsxs(
            "button",
            {
              className: "land-header-application",
              onClick: (w) => w.stopPropagation(),
              children: [
                /* @__PURE__ */ o.exports.jsx(E, { name: "application" }),
                /* @__PURE__ */ o.exports.jsx("div", { className: "land-application-drop", children: s })
              ]
            }
          ),
          typeof a == "string" ? /* @__PURE__ */ o.exports.jsx("img", { src: a }) : a,
          l && a && i && /* @__PURE__ */ o.exports.jsx(Ce, { direction: "column", lang: "24px" }),
          typeof i == "string" ? /* @__PURE__ */ o.exports.jsx("img", { src: i }) : i
        ] }),
        /* @__PURE__ */ o.exports.jsx(
          Z4,
          {
            className: "land-header-nav",
            align: u,
            showMobileNav: h,
            children: p && /* @__PURE__ */ o.exports.jsx(
              Bt,
              {
                border: !1,
                ...p,
                onChange: (w) => {
                  var m;
                  (m = p.onChange) == null || m.call(p, w), L(!1);
                },
                onDropChange: (w, m) => {
                  var y;
                  (y = p.onDropChange) == null || y.call(p, w, m), L(!1);
                }
              }
            )
          }
        ),
        x && /* @__PURE__ */ o.exports.jsx("div", { className: "land-header-btns", children: x }),
        p && p.data && ((f = p.data) == null ? void 0 : f.length) > 0 && /* @__PURE__ */ o.exports.jsx(
          he,
          {
            icon: /* @__PURE__ */ o.exports.jsx(E, { name: "more-line" }),
            type: "text",
            onClick: () => L(!h)
          }
        )
      ]
    }
  );
}, F4 = C.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 0 24px;
  padding-left: ${(e) => e.applications ? "0" : ""};
  gap: var(--gap-32);
  width: 100%;
  height: ${(e) => e.height};
  border-bottom: ${(e) => e.borderBottom ? "1px solid var(--color-border-2)" : ""};
  background: ${(e) => e.filter ? "rgba(255, 255, 255, 0.8)" : "var(--color-bg-white)"};
  backdrop-filter: ${(e) => e.filter ? "var(--blur-small)" : ""};
  box-sizing: border-box;
  z-index: 1000;
  &.fixed {
    position: absolute;
    top: 0;
    left: 0;
  }
  .land-header-logo {
    display: flex;
    align-items: center;
    gap: var(--gap-12);
    height: 100%;
    cursor: pointer;
  }
  .land-header-application {
    appearance: none;
    border: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    height: 100%;
    background-color: var(--color-bg-1);
    &:hover .land-application-drop {
      transform: translate(0, 0);
      opacity: 1;
      pointer-events: all;
    }
  }
  .land-application-drop {
    position: absolute;
    left: 12px;
    top: 100%;
    padding: var(--padding-medium);
    background-color: var(--color-bg-white);
    border-radius: var(--radius-8);
    border: var(--border-1) solid var(--color-border-1);
    box-shadow: var(--boxshadow-medium);
    transform: translate(-12px, -40%);
    opacity: 0;
    pointer-events: none;
    transition: all var(--transition-15);
    will-change: transform, opacity;
    z-index: -1;
  }
  .land-header-btns {
    display: flex;
    align-items: center;
    gap: var(--gap-12);
  }
  .land-button {
    display: none;
  }
  @media screen and (max-width: 800px) {
    .land-button {
      display: flex;
    }
  }
`, Z4 = C.div`
  display: flex;
  flex: 1;
  justify-content: ${(e) => e.align};
  height: 100%;
  .land-menu-item:hover .land-menu-drop-wrap {
    left: 50%;
    transform: translateX(-50%) scale(1);
  }
  .land-menu-drop-wrap {
    width: fit-content;
    &:not(.open) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  @media screen and (max-width: 800px) {
    position: fixed;
    top: 64px;
    right: 0px;
    flex: none;
    width: fit-content;
    height: fit-content;
    pointer-events: ${(e) => e.showMobileNav ? "all" : "none"};
    display: ${(e) => e.showMobileNav ? "block" : "none"};
    .land-menu {
      flex-direction: column;
      padding: 12px 4px;
      background: #fff;
      height: fit-content;
      border: 1px solid var(--color-border-1);
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      transition: opacity 0.2 linear;
      opacity: ${(e) => e.showMobileNav ? "1" : "0"};
      .land-menu-link.active::after {
        opacity: 0;
      }
      .land-menu-drop-wrap {
        position: relative;
        opacity: 1;
        transform: scale(1);
        pointer-events: all;
        .land-menu-drop,
        .land-menu-drop .land-menu {
          border: none;
          box-shadow: none;
          padding: 0;
          text-indent: 1em;
        }
      }
    }
  }
`, Tn = ({
  type: e = "border",
  value: r,
  inputType: n = "text",
  placeholder: t = "\u8BF7\u8F93\u5165",
  beforeContent: s,
  afterContent: a,
  prefix: i,
  suffix: c,
  width: l,
  maxLength: u,
  disabled: p,
  highlightStr: x = ["\u4E0D\u597D"],
  highlightStyle: g = { background: "var(--color-primary-2)", color: "var(--color-primary-6)" },
  onChange: v,
  onEnter: h,
  onBlur: L,
  onClear: f,
  className: w = "",
  wrapStyle: m,
  ...y
}) => {
  const $ = re(null), [M, k] = A(0);
  J(() => {
    const q = setTimeout(() => {
      var ie;
      k(Number((ie = $.current) == null ? void 0 : ie.clientWidth) + 8);
    }, 100);
    return () => clearTimeout(q);
  }, [r, i]);
  const S = re(null), Z = an(() => {
    !$.current || !S.current || ($.current.scrollLeft = S.current.scrollLeft);
  }, []), F = an((q) => {
    $.current && ($.current.scrollLeft = 0), L == null || L(q);
  }, []);
  return /* @__PURE__ */ o.exports.jsxs(
    U4,
    {
      className: `land-input ${p ? "disabled" : ""} ${f ? "clear" : ""} ${e} ${w}`,
      style: {
        width: typeof l == "number" ? `${l}px` : l,
        ...m
      },
      children: [
        s && /* @__PURE__ */ o.exports.jsx("div", { className: "input-beforeContent", children: s }),
        i && /* @__PURE__ */ o.exports.jsx("div", { className: "input-prefix", children: i }),
        /* @__PURE__ */ o.exports.jsxs("div", { className: "land-input-content", children: [
          /* @__PURE__ */ o.exports.jsx(
            "input",
            {
              ref: S,
              placeholder: t,
              type: n,
              value: r,
              max: u,
              onKeyDown: (q) => {
                q.code === "Enter" && (h == null || h(r, q));
              },
              onClick: (q) => q.stopPropagation(),
              onBlur: F,
              onChange: (q) => {
                Z == null || Z(), v == null || v(q.target.value, q);
              },
              onScroll: Z,
              ...y
            }
          ),
          c && r && /* @__PURE__ */ o.exports.jsx("p", { className: "input-suffix", style: { transform: `translateX(${M}px)` }, children: c })
        ] }),
        a && /* @__PURE__ */ o.exports.jsx("div", { children: a }),
        f && /* @__PURE__ */ o.exports.jsx("div", { className: `land-input-clear-icon ${Boolean(r) ? "show" : ""}`, onClick: f, children: /* @__PURE__ */ o.exports.jsx(E, { name: "error-fill", fill: "var(--color-text-5)" }) })
      ]
    }
  );
}, U4 = C.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--gap-4);
  padding: 0 12px;
  height: 36px;
  border-radius: var(--radius-4);
  transition: background-color var(--transition-15) linear;
  box-sizing: border-box;
  &.transparent{
    padding: 0;
    border-radius: 0px;
  }
  &.border{
    border: var(--border-1) solid var(--color-border-2);
    &:hover:not(.disabled){
    background-color: var(--color-bg-1);
    }
    &:active:not(.disabled){
      background-color: var(--color-bg-2);
    }
  }
  &.background{
    background-color: var(--color-bg-1);
    &:hover:not(.disabled){
    background-color: var(--color-bg-2);
    }
    &:active:not(.disabled){
      background-color: var(--color-bg-3);
    }
  }
  &.disabled{
    opacity: var(--opacity-68);
    background-color: var(--color-bg-1);
    cursor: not-allowed;
    pointer-events: none;
    input{
      opacity: var(--opacity-68);
      cursor: not-allowed;
      &::placeholder{
        opacity: var(--opacity-68);
      }
    }
  }
  
  &.clear .input-label{
    max-width: 100%; 
  }
  .land-input-content{
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
  }
  
  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    appearance: none;
    -moz-appearance: none;
    border: none;
    outline: none;
    font-size: 14px;
    caret-color: var(--color-primary-6);
    &:focus-within,
    &:focus,
    &:focus-visible,
    &:active,
    &:target {
      border: none;
      box-shadow: none;
      background-color: transparent;
      -webkit-text-fill-color: transparent;
    }
    &::selection {
      background-color: var(--color-primary-2);
    }
  }
  .land-input-clear-icon{
    opacity: 1;
    height: 16px;
    flex-shrink: 0;
    transition: opacity 0.2s linear;
    opacity: 0;
    transition: opacity 0.2s linear;
    svg path{
      transition: all 0.2s linear;
    }
    &:hover svg path{
      fill: var(--color-text-2);
    }
    &.show{
      opacity: 1;
    }
  }
  .input-beforeContent{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .input-prefix{
    display: flex;
    align-items: center;
    color: var(--color-text-5);
    white-space: nowrap;
    font-size: 14px;
  }
  .input-label{
    position: absolute;
    left: 0;
    max-width: 100%;
    box-sizing: border-box;
    color: var(--color-text-2);
    font-size: 14px;
    white-space: nowrap;
    overflow: scroll;
    &::-webkit-scrollbar{
    width: 0;
    display: none;
  }
  }
  .input-placeholder,
  .input-suffix{
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: var(--color-text-5);
    pointer-events: none;
  }
  .input-placeholder{
    padding-left: 4px;
    font-size: 14px;
  }
  &:hover{
    .land-input-clear-icon{
      opacity: 1;
    }
  }
`, G2 = ({ children: e, style: r, className: n }) => /* @__PURE__ */ o.exports.jsx(P4, { className: n, style: r, children: e }), P4 = C.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`, J2 = ({
  show: e = !1,
  type: r = "default",
  text: n = "\u5495\u565C\u5495\u565C\uFF5E",
  style: t,
  className: s = ""
}) => {
  const [a, i] = A(!1);
  J(() => {
    i(e);
  }, [e]), J(() => {
    i(!0);
    const l = setTimeout(() => {
      i(!1);
    }, 1e3);
    return () => clearTimeout(l);
  }, [e]);
  const c = te(() => {
    switch (r) {
      case "default":
        return { color: "white", background: "black", icon: null };
    }
  }, [r]);
  return /* @__PURE__ */ o.exports.jsx(
    q4,
    {
      className: `StyleToastContainer ${a ? "show" : "close"} ${s}`,
      style: {
        color: c == null ? void 0 : c.color,
        backgroundColor: c == null ? void 0 : c.background,
        ...t
      },
      children: n
    }
  );
}, q4 = C.div`
  position: fixed;
  border-radius: 6px;
  padding: 4px 12px;
  font-size: 14px;
  z-index: var(--zIndex-5);
  left: 50%;
  transform: translateX(-50%);
  transition: opacity var(--transition-2) linear, top var(--transition-2) linear;
  &.show {
    top: 24px;
    opacity: 0.9;
  }
  &.close {
    top: 32px;
    opacity: 0;
  }
<<<<<<< HEAD
`, K2 = ({
=======
`, X2 = ({
>>>>>>> a556f41365aa61a3d940ae7f639510a3514ff959
  value: e = 0,
  type: r = "border",
  step: n = 1,
  min: t = 0,
  max: s = 100,
  prefix: a,
  suffix: i,
  disabled: c,
  onChange: l,
  width: u,
  style: p,
  ...x
}) => {
  const [g, v] = A(Number(e));
  J(() => e !== void 0 && v(e), [e]);
  const h = (f, w) => {
    f < t - n / 2 || f > s + n / 2 || (v(f), l == null || l(f, w));
  }, L = an((f, w) => {
    Number(f) > s || Number(f) < t || typeof f == "number" && Boolean(f % n) || (v(Number(f)), l == null || l(Number(f), w));
  }, []);
  return /* @__PURE__ */ o.exports.jsxs(
    z4,
    {
      className: "StyledNumberInputWrap",
      style: { width: typeof u == "number" ? `${u}px` : u, ...p },
      onClick: (f) => f.stopPropagation(),
      children: [
        /* @__PURE__ */ o.exports.jsx(
          Tn,
          {
            type: r,
            inputType: "number",
            value: String(g),
            disabled: c,
            prefix: a,
            suffix: i,
            onChange: (f, w) => L(f, w),
            wrapStyle: {
              paddingRight: "32px"
            },
            ...x
          }
        ),
        /* @__PURE__ */ o.exports.jsxs("div", { className: "land-numberInput-arrow", style: { borderLeft: r === "border" ? "1px solid var(--color-border-2)" : "", background: "inherit" }, children: [
          /* @__PURE__ */ o.exports.jsx("div", { className: `land-numberInput-add ${g === s ? "disabled" : ""}`, onClick: (f) => h == null ? void 0 : h(Number(g) + n, f), children: /* @__PURE__ */ o.exports.jsx(E, { name: "arrow", size: 16 }) }),
          r === "border" && /* @__PURE__ */ o.exports.jsx(Ce, { margin: 0, lang: "32px" }),
          /* @__PURE__ */ o.exports.jsx("div", { className: `land-numberInput-dec ${g === t ? "disabled" : ""}`, onClick: (f) => h == null ? void 0 : h(Number(g) - n, f), children: /* @__PURE__ */ o.exports.jsx(E, { name: "arrow", size: 16 }) })
        ] })
      ]
    }
  );
}, z4 = C.div`
  position: relative;
  input{
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      height: auto;
      -webkit-appearance: none;
    }
  }
  .land-numberInput-arrow{
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 100%;
    color: var(--color-text-4);
    
    .land-numberInput-add svg{
      transform: rotate(180deg);
    }
    .land-numberInput-add,
    .land-numberInput-dec{
      height: 18px;
      transition: color var(--transition-15) linear;
      cursor: pointer;
      &:hover:not(.disabled){
      color: var(--color-text-2);
    }
    &.disabled{
      cursor: not-allowed;
    }
    }
  }
`, X2 = ({
  current: e = 1,
  pageSize: r = 1,
  total: n = 1,
  showTotal: t = !1,
  showInput: s = !1,
  onChange: a,
  style: i,
  className: c = ""
}) => {
  var f, w;
  const [l, u] = A(e);
  J(() => {
    u(e);
  }, [e]);
  const [p, x] = A(2), g = te(() => Array.from({ length: n }).map((m, y) => ({ id: y + 1 })).filter((m) => m.id > 1 && m.id < n).filter((m) => m.id >= p && m.id < p + r), [n, r, p]), v = (m) => g.filter((y) => y.id === m).length === 0 && l !== 1 && l !== n, h = p <= r * 2, L = n - p < r * 2;
  return /* @__PURE__ */ o.exports.jsxs(Y4, { className: c, style: i, children: [
    t && /* @__PURE__ */ o.exports.jsxs("div", { className: "land-pagination-total", children: [
      "\u5171",
      n,
      "\u9875"
    ] }),
    /* @__PURE__ */ o.exports.jsx(
      "div",
      {
        onClick: (m) => {
          m.stopPropagation(), l > 1 && (u(l - 1), a == null || a(l - 1), v != null && v(l - 1) && x(h ? 2 : l - 1));
        },
        className: `land-pagination-arrow-prev ${l === 1 ? "disabled" : ""}`,
        children: /* @__PURE__ */ o.exports.jsx(E, { name: "arrow", className: "rotate-90", strokeWidth: 4 })
      }
    ),
    /* @__PURE__ */ o.exports.jsxs("div", { className: "land-pagination-page", children: [
      /* @__PURE__ */ o.exports.jsx(
        "div",
        {
          className: `land-pagination-num-item ${l === 1 ? "active" : ""}`,
          onClick: (m) => {
            m.stopPropagation(), u(1), a == null || a(1);
          },
          children: "1"
        }
      ),
      ((f = g[0]) == null ? void 0 : f.id) > 2 && /* @__PURE__ */ o.exports.jsxs(
        "div",
        {
          onClick: (m) => {
            m.stopPropagation(), x(h ? 2 : p - r);
          },
          className: "land-pagination-arrow-double-prev",
          children: [
            /* @__PURE__ */ o.exports.jsx(E, { name: "more", size: 16 }),
            /* @__PURE__ */ o.exports.jsx(E, { name: "arrow-double", className: "arrow rotate-90", size: 24 })
          ]
        }
      ),
      g == null ? void 0 : g.map((m) => /* @__PURE__ */ o.exports.jsx(
        "div",
        {
          className: `land-pagination-num-item ${l === m.id ? "active" : ""}`,
          onClick: (y) => {
            y.stopPropagation(), u(m.id), a == null || a(m.id);
          },
          children: m.id
        },
        m.id
      )),
      ((w = g[(g == null ? void 0 : g.length) - 1]) == null ? void 0 : w.id) < n - 1 && /* @__PURE__ */ o.exports.jsxs(
        "div",
        {
          onClick: (m) => {
            m.stopPropagation(), x(L ? n - r : p + r);
          },
          className: "land-pagination-arrow-double-next",
          children: [
            /* @__PURE__ */ o.exports.jsx(E, { name: "more", size: 16 }),
            /* @__PURE__ */ o.exports.jsx(E, { name: "arrow-double", className: "arrow -rotate-90", size: 24 })
          ]
        }
      ),
      /* @__PURE__ */ o.exports.jsx(
        "div",
        {
          className: `land-pagination-num-item ${l === n ? "active" : ""}`,
          onClick: (m) => {
            m.stopPropagation(), u(n), a == null || a(n);
          },
          children: n
        }
      )
    ] }),
    /* @__PURE__ */ o.exports.jsx(
      "div",
      {
        onClick: (m) => {
          m.stopPropagation(), l < n && (u(l + 1), a == null || a(l + 1), v != null && v(l + 1) && x(L ? n - r : l + 1));
        },
        className: `land-pagination-arrow-next ${l === n ? "disabled" : ""}`,
        children: /* @__PURE__ */ o.exports.jsx(E, { name: "arrow", className: "-rotate-90", strokeWidth: 4 })
      }
    ),
    s && /* @__PURE__ */ o.exports.jsxs("div", { className: "land-pagination-input", children: [
      "\u8DF3\u8F6C\u81F3",
      /* @__PURE__ */ o.exports.jsx(
        Tn,
        {
          onChange: (m) => u(Number(m)),
          style: { height: "24px", width: "24px" }
        }
      ),
      " ",
      "/ ",
      n,
      " \u9875"
    ] })
  ] });
}, Y4 = C.div`
  display: flex;
  align-items: center;
  gap: var(--gap-12);
  font-size: var(--font-content-medium);
  .land-pagination-total {
    flex-shrink: 0;
    color: var(--color-text-4);
  }
  .land-pagination-page{
    flex: 1;
    display: flex;
    justify-content: space-between;
    gap: var(--gap-8);
    height: fit-content;
  }
  .land-pagination-num-item,
  .land-pagination-arrow-double-prev,
  .land-pagination-arrow-double-next{
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    font-size: var(--font-content-medium);
    color: var(--color-text-2);
    border-radius: var(--radius-6);
    border: 1px solid var(--color-border-2);
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color var(--transition-15) linear;
    &:hover{
      background-color: var(--color-bg-1);
    }
    &:active{
      background-color: var(--color-bg-2);
    }
    &.active{
      background-color: var(--color-primary-6);
      color: var(--color-text-light);
      border-color: var(--color-primary-6);
    }
  }
  .land-pagination-arrow-prev,
  .land-pagination-arrow-next{
    flex-shrink: 0;
    color: var(--color-border-3);
    cursor: pointer;
    transition: color var(--transition-15) linear;
    &:hover:not(.disabled){
      color: var(--color-text-2);
    }
    &:active:not(.disabled){
      color: var(--color-text-1);
    }
    &.disabled{
      cursor: not-allowed;
    }
  }
  .land-pagination-arrow-double-prev,
  .land-pagination-arrow-double-next{
    position: relative;
    transition: opacity var(--transition-2s) linear;
    svg.arrow{
      position: absolute;
      top: 3px;
      left: 3px;
      background: inherit;
      opacity: 0;
      transition: opacity var(--transition-2s) linear;
    }
    &:hover{
      svg.arrow{
          opacity: 1;
      }
    }
  }
  .land-pagination-input{
    display: flex;
    align-items: center;
    gap: var(--gap-4);
    color: var(--color-text-4);
    white-space: nowrap;
    flex-shrink: 0;
  }
`, Q2 = ({
  show: e,
  content: r,
  theme: n = "light",
  placement: t = "top",
  hideArrow: s = !1,
  cancelButtonProps: a,
  submitButtonProps: i,
  onCancel: c,
  onSubmit: l,
  style: u,
  className: p = ""
}) => /* @__PURE__ */ o.exports.jsxs(
  G4,
  {
    className: `land-popConfirm ${e ? "show" : ""} ${n} ${p}`,
    style: {
      top: t === "bottom" ? "100%" : t === "top" ? "auto" : "50%",
      bottom: t === "top" ? "100%" : "",
      left: t === "right" ? "100%" : t === "left" ? "auto" : "50%",
      right: t === "left" ? "100%" : "",
      transform: `translate(${t === "top" || t === "bottom" ? "-50%" : t === "left" ? "-12px" : "12px"}, ${t === "top" ? "-12px" : t === "bottom" ? "12px" : "-50%"})`,
      ...u
    },
    hideArrow: s,
    children: [
      /* @__PURE__ */ o.exports.jsx("div", { className: "land-popConfirm-content", children: r }),
      /* @__PURE__ */ o.exports.jsxs("div", { className: "land-popConfirm-btn", children: [
        /* @__PURE__ */ o.exports.jsx(he, { type: "background", size: "small", onClick: c, ...a, children: "\u53D6\u6D88" }),
        /* @__PURE__ */ o.exports.jsx(he, { type: "background", status: "primary", size: "small", onClick: l, ...i, children: "\u786E\u8BA4" })
      ] }),
      !s && /* @__PURE__ */ o.exports.jsx(
        "div",
        {
          className: "land-popConfirm-arrow",
          style: {
            left: t === "left" ? "100%" : t === "right" ? "0" : "50%",
            top: t === "top" ? "100%" : t === "bottom" ? "0px" : "50%",
            bottom: t === "bottom" ? "100%" : "",
            transform: `translate(-50%, -50%) rotate(${t === "top" ? "45" : t === "bottom" ? "-135" : t === "right" ? "135" : "-45"}deg)`
          }
        }
      )
    ]
  }
), G4 = C.div`
  position: absolute;
  padding: 12px;
  display: flex;
  flex-direction: column;
  width: max-content;
  font-size: 14px;
  color: var(--color-text-2);
  border-radius: 6px;
  background-color: var(--color-bg-white);
  box-shadow: var(--boxshadow-small);
  border: var(--border-1) solid var(--color-border-1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.15s linear;
  z-index: 100;

  .land-popConfirm-content{
    padding-bottom: 12px;
  }
  .land-popConfirm-btn{
    display: flex;
    gap: 8px;
    margin-left: auto;
  }
  .land-popConfirm-arrow {
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    border-right: var(--border-1) solid var(--color-border-1);
    border-bottom: var(--border-1) solid var(--color-border-1);
    border-bottom-right-radius: var(--radius-4);
    background-color: var(--color-bg-white);
  }
  &.dark {
    background-color: ${(e) => e.hideArrow ? "rgba(0,0,0,0.68)" : "var(--color-text-2)"};
    color: var(--color-text-light);
    border: 0;
    .land-popConfirm-arrow {
      background-color: var(--color-text-2);
      border: 0;
    }
  }
  &.show{
    opacity: 1;
    pointer-events: auto;
  }
`, W2 = ({
  value: e = 0.6,
  hideLabel: r,
  style: n,
  className: t = ""
}) => /* @__PURE__ */ o.exports.jsx(J4, { className: `land-progress ${t}`, style: n, children: /* @__PURE__ */ o.exports.jsxs("div", { className: "land-progress-content", children: [
  !r && /* @__PURE__ */ o.exports.jsxs("div", { className: "land-progress-label", style: { left: `${e * 100}%` }, children: [
    e * 100,
    "%"
  ] }),
  /* @__PURE__ */ o.exports.jsx("div", { className: "land-progress-bar", children: /* @__PURE__ */ o.exports.jsx("div", { className: "land-progress-bar-finished", style: { transform: `scaleX(${e})` } }) })
] }) }), J4 = C.div`
  width: 100%;
  .land-progress-content{
    position: relative;
    width: 100%;
    .land-progress-label{
      position: absolute;
      bottom: 100%;
      left: 0;
      font-size: 14px;
      color: var(--color-text-3);
      transform: translate(-50%,-4px);
    }
    .land-progress-bar{
      position: relative;
      width: 100%;
      height: 12px;
      border-radius: 12px;
      background-color: var(--color-bg-3);
      overflow: hidden;
      .land-progress-bar-finished{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--color-primary-6);
        transform-origin: left;
      }
    }
  }
  
`, e1 = ({
  step: e = 5,
  style: r,
  className: n = ""
}) => /* @__PURE__ */ o.exports.jsx(K4, { className: `land-rate-wrap ${n}`, style: r, children: Array.from({ length: e }).map((t, s) => /* @__PURE__ */ o.exports.jsxs("div", { className: "land-rate-character half", children: [
  /* @__PURE__ */ o.exports.jsx(
    "div",
    {
      className: "land-rate-character-left",
      role: "radio",
      "aria-checked": "true",
      "aria-setsize": e,
      "aria-posinset": 0.5,
      children: /* @__PURE__ */ o.exports.jsx(
        "svg",
        {
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "4",
          viewBox: "0 0 48 48",
          "aria-hidden": "true",
          focusable: "false",
          className: "land-icon land-icon-star-fill",
          children: /* @__PURE__ */ o.exports.jsx(
            "path",
            {
              fill: "currentColor",
              stroke: "none",
              d: "M22.683 5.415c.568-1.043 2.065-1.043 2.634 0l5.507 10.098a1.5 1.5 0 0 0 1.04.756l11.306 2.117c1.168.219 1.63 1.642.814 2.505l-7.902 8.359a1.5 1.5 0 0 0-.397 1.223l1.48 11.407c.153 1.177-1.058 2.057-2.131 1.548l-10.391-4.933a1.5 1.5 0 0 0-1.287 0l-10.39 4.933c-1.073.51-2.284-.37-2.131-1.548l1.48-11.407a1.5 1.5 0 0 0-.398-1.223L4.015 20.89c-.816-.863-.353-2.286.814-2.505l11.306-2.117a1.5 1.5 0 0 0 1.04-.756l5.508-10.098Z"
            }
          )
        }
      )
    }
  ),
  /* @__PURE__ */ o.exports.jsx(
    "div",
    {
      className: "land-rate-character-right",
      role: "radio",
      "aria-checked": "true",
      "aria-setsize": e,
      "aria-posinset": 1,
      children: /* @__PURE__ */ o.exports.jsx(
        "svg",
        {
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "4",
          viewBox: "0 0 48 48",
          "aria-hidden": "true",
          focusable: "false",
          className: "land-icon land-icon-star-fill",
          children: /* @__PURE__ */ o.exports.jsx(
            "path",
            {
              fill: "currentColor",
              stroke: "none",
              d: "M22.683 5.415c.568-1.043 2.065-1.043 2.634 0l5.507 10.098a1.5 1.5 0 0 0 1.04.756l11.306 2.117c1.168.219 1.63 1.642.814 2.505l-7.902 8.359a1.5 1.5 0 0 0-.397 1.223l1.48 11.407c.153 1.177-1.058 2.057-2.131 1.548l-10.391-4.933a1.5 1.5 0 0 0-1.287 0l-10.39 4.933c-1.073.51-2.284-.37-2.131-1.548l1.48-11.407a1.5 1.5 0 0 0-.398-1.223L4.015 20.89c-.816-.863-.353-2.286.814-2.505l11.306-2.117a1.5 1.5 0 0 0 1.04-.756l5.508-10.098Z"
            }
          )
        }
      )
    }
  )
] }, s)) }), K4 = C.div`
  &.land-rate-wrap {
    display: flex;
    gap: var(--gap-8);
  }
  .land-rate-character {
    width: 24px;
    height: 24px;
    .land-icon-star-fill path {
      fill: var(--color-bg-3);
    }
  }
`, r1 = ({
  checked: e = 1,
  data: r = [],
  onChange: n,
  style: t,
  className: s = ""
}) => /* @__PURE__ */ o.exports.jsx(X4, { className: `land-radio-wrap ${s}`, style: t, children: r == null ? void 0 : r.map(
  (a) => /* @__PURE__ */ o.exports.jsxs(Q4, { className: `land-radio-item ${a.info ? "hover-pop" : ""} ${a.disabled ? "disabled" : ""}`, children: [
    /* @__PURE__ */ o.exports.jsx(X, { content: a.info, theme: "dark", style: { maxWidth: "200px" } }),
    /* @__PURE__ */ o.exports.jsxs(
      W4,
      {
        onClick: (i) => {
          a.disabled || (i.stopPropagation(), n == null || n(a));
        },
        className: "land-radio-label",
        children: [
          /* @__PURE__ */ o.exports.jsx(e2, { className: `${e === a.value ? "checked" : ""}`, children: /* @__PURE__ */ o.exports.jsx(E, { name: "check", size: 10, strokeWidth: 0, fill: e === a.value ? "var(--color-bg-white)" : "inherit" }) }),
          a.label
        ]
      }
    ),
    a.iconInfo && /* @__PURE__ */ o.exports.jsxs(r2, { className: "hover-pop", children: [
      /* @__PURE__ */ o.exports.jsx(E, { name: "info-stroke", stroke: "var(--color-text-4)", size: 12 }),
      /* @__PURE__ */ o.exports.jsx(X, { content: a.iconInfo, theme: "dark", style: { maxWidth: "200px" } })
    ] })
  ] }, a.value)
) }), X4 = C.div`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`, Q4 = C.div`
  position: relative;
   display: flex;
  align-items: center;
  gap: var(--gap-4); 
  cursor: pointer;
  &.disabled{
    .land-radio-label{
      opacity: var(--opacity-04);
    }
    cursor: not-allowed;
  }
`, W4 = C.div`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  font-size: var(--font-content-medium);
  color: var(--color-text-2);
  white-space: nowrap;
`, e2 = C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-8);
  border: 1px solid var(--color-border-3);
  flex-shrink: 0;
  transition: all var(--transition-15) linear;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.checked {
    border-color: var(--color-primary-6);
    background-color: var(--color-primary-6);
    svg path {
      fill: var(--color-bg-white);
    }
  }
`, r2 = C.div`
  position: relative;
  height: 12px;
  line-height: 12px;
`, n2 = ({
  data: e,
  selectedValue: r,
  onClick: n
}) => /* @__PURE__ */ o.exports.jsx(o.exports.Fragment, { children: e == null ? void 0 : e.map(
  (t) => /* @__PURE__ */ o.exports.jsxs(
    At,
    {
      className: `${t.tip ? "hover-pop" : ""} ${r === t.value ? "selected" : ""} ${t.disabled ? "disabled" : ""}`,
      onClick: () => n == null ? void 0 : n(t),
      children: [
        /* @__PURE__ */ o.exports.jsx("div", { className: "land-select-results-item-label", children: t.label }),
        t.info && /* @__PURE__ */ o.exports.jsxs("div", { className: `land-select-item-info ${t.info ? "hover-pop" : ""}`, children: [
          /* @__PURE__ */ o.exports.jsx(E, { name: "info-stroke" }),
          t.info && /* @__PURE__ */ o.exports.jsx(X, { content: t.info, placement: "right", theme: "dark", style: { marginLeft: "12px" } })
        ] }),
        t.tip && /* @__PURE__ */ o.exports.jsx(X, { content: t.tip, placement: "right", theme: "dark", style: { marginLeft: "8px" } })
      ]
    },
    t.value
  )
) }), n1 = ({
  data: e,
  placeholder: r = "\u8BF7\u9009\u62E9",
  selected: n = "0",
  width: t,
  title: s,
  titleInfo: a,
  info: i,
  disabled: c,
  onChange: l,
  className: u = "",
  style: p
}) => {
  const [x, g] = A(!1), [v, h] = A(n), [L, f] = A(void 0), [w, m] = A(), [y, $] = A();
  J(() => {
    x || f(void 0);
  }, [x]);
  const M = re(null);
  return dt(
    M,
    () => {
      g(!1);
    }
  ), /* @__PURE__ */ o.exports.jsxs(
    o2,
    {
      ref: M,
      style: {
        width: t ? "fit-content" : typeof t == "number" ? `${t}px` : t,
        ...p
      },
      className: u,
      children: [
        s && /* @__PURE__ */ o.exports.jsx(lt, { title: s, type: "p", info: a }),
        /* @__PURE__ */ o.exports.jsxs(
          t2,
          {
            className: `hover-pop ${x ? "show" : ""} ${c ? "disabled" : ""}`,
            onClick: (k) => {
              k.stopPropagation(), !c && (k.stopPropagation(), g(!x));
            },
            children: [
              /* @__PURE__ */ o.exports.jsx(
                "p",
                {
                  className: `${v !== "0" ? "land-select-trigger" : "land-select-placeholder"}`,
                  children: v === "0" ? r : w
                }
              ),
              /* @__PURE__ */ o.exports.jsx(E, { name: "arrow", className: "land-select-value-arrow", size: 20 }),
              i && /* @__PURE__ */ o.exports.jsx(X, { content: i, theme: "dark" })
            ]
          }
        ),
        /* @__PURE__ */ o.exports.jsx(
          s2,
          {
            className: `land-select-results ${x ? "show" : ""}`,
            children: /* @__PURE__ */ o.exports.jsx(a2, { children: e == null ? void 0 : e.map((k) => {
              var S, Z;
              return /* @__PURE__ */ o.exports.jsxs(
                At,
                {
                  className: `${k.tip ? "hover-pop" : ""} ${w === k.label ? "selected" : ""} ${L === k.value || ((S = k.children) == null ? void 0 : S.filter((F) => F.value === y).length) > 0 ? "open" : ""} ${k.disabled ? "disabled" : ""}`,
                  onClick: (F) => {
                    var q;
                    F.stopPropagation(), !k.disabled && (((q = k.children) == null ? void 0 : q.length) > 0 ? f(k.value) : (h(k.value), l == null || l(k), m(k.label), g(!1)));
                  },
                  children: [
                    /* @__PURE__ */ o.exports.jsx("div", { className: "land-select-results-item-label", children: k.label }),
                    k.info && /* @__PURE__ */ o.exports.jsxs("div", { className: `land-select-item-info ${k.info ? "hover-pop" : ""}`, children: [
                      /* @__PURE__ */ o.exports.jsx(E, { name: "info-stroke", size: 12 }),
                      k.info && /* @__PURE__ */ o.exports.jsx(X, { content: k.info, placement: "right", theme: "dark", style: { marginLeft: "12px" } })
                    ] }),
                    k.tip && /* @__PURE__ */ o.exports.jsx(X, { content: k.tip, placement: "right", theme: "dark", style: { marginLeft: "8px" } }),
                    ((Z = k.children) == null ? void 0 : Z.length) > 0 && /* @__PURE__ */ o.exports.jsx(E, { name: "arrow", className: "land-select-item-arrow" }),
                    k.children && /* @__PURE__ */ o.exports.jsx(i2, { show: L != null, children: /* @__PURE__ */ o.exports.jsx(
                      n2,
                      {
                        data: k.children,
                        selectedValue: y,
                        onClick: (F) => {
                          h(F.value), $(F.value), l == null || l(F), m(/* @__PURE__ */ o.exports.jsxs(V4, { align: "center", gap: 2, children: [
                            k.label,
                            /* @__PURE__ */ o.exports.jsx(E, { name: "arrow", stroke: "var(--color-text-5)", className: "land-select-value-divider-arrow" }),
                            F.label
                          ] })), g(!1);
                        }
                      }
                    ) })
                  ]
                },
                k.value
              );
            }) })
          }
        )
      ]
    }
  );
}, o2 = C.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .land-select-title {
    font-size: var(--font-content-medium);
  }
`, t2 = C.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--gap-4);
  padding: 0 12px;
  width: fit-content;
  height: 36px;
  font-size: 14px;
  border: 1px solid var(--color-border-2);
  border-radius: var(--radius-6);
  cursor: pointer;
  &.disabled{
    opacity: var(--opacity-68);
    background-color: var(--color-bg-3);
    cursor: not-allowed;
    .land-select-value-arrow{
      opacity: var(--opacity-04);
    }
  }
  p {
    flex: 1;
    font-size: 14px;
    white-space: nowrap;
    &.land-select-placeholder {
      color: var(--color-text-5);
    }
    &.land-select-trigger {
      color: var(--color-text-2);
    }
  }
  .land-select-value-arrow {
    transition: transform var(--transition-15) ease;
  }
  .land-select-value-divider-arrow{
    transform: rotate(-90deg);
  }
  &.show .land-select-value-arrow {
    transform: rotate(180deg);
  }
`, s2 = C.div`
  position: absolute;
  top: 100%;
  width: 100%;
  padding-top: 4px;
  opacity: 0;
  transform: scaleY(0.8);
  transform-origin: top center;
  pointer-events: none;
  transition: opacity var(--transition-15) ease,
    transform var(--transition-15) ease;
  z-index: 1;
  &.show {
    opacity: 1;
    transform: scaleY(1);
    pointer-events: all;
  }
`, a2 = C.ul`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
  box-shadow: var(--boxshadow-small);
`, At = C.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--radius-4);
  padding: var(--padding-medium);
  color: var(--color-text-2);
  font-size: var(--font-content-medium);
  .land-select-item-info{
    height: 16px;
    position: relative;
    cursor: default;
  }
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.selected {
    background-color: var(--color-link-1);
  }
  &.open{
    background-color: var(--color-bg-1);
  }
  &.disabled {
    .land-select-results-item-label,
    .land-select-item-info svg{
      opacity: var(--opacity-04);
    }
    cursor: not-allowed;
  }

  .land-select-item-arrow{
    transform: rotate(-90deg);
  }
`, i2 = C.ul`
  position: absolute;
  left: 100%;
  top: 0;
  transform: translateX(8px);
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding: var(--padding-small);
  max-height: 200px;
  overflow: auto;
  white-space: nowrap;
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
  transition: opacity var(--transition-15) linear;
  box-shadow: var(--boxshadow-small);
  opacity: ${(e) => e.show ? 1 : 0};
  pointer-events: ${(e) => e.show ? "all" : "none"};
  &::-webkit-scrollbar{
    width: 0px;
    display: none;
  }

`, o1 = ({ collapsed: e, width: r, fixed: n, placement: t, children: s, style: a, className: i }) => /* @__PURE__ */ o.exports.jsx(
  c2,
  {
    className: i,
    style: a,
    fixed: n,
    collapsed: e,
    width: typeof r == "number" ? `${r}px` : r,
    placement: t,
    children: s
  }
), c2 = C.aside`
  padding: 24px;
  position: ${(e) => e.fixed ? "fixed" : ""};
  width: ${(e) => e.collapsed ? "0px" : e.width};
  background: var(--color-bg-white);
  border-left: ${(e) => e.placement === "right" ? "var(--border-1) solid var(--color-border-2)" : ""};
  border-right: ${(e) => e.placement === "left" ? "var(--border-1) solid var(--color-border-2)" : ""};
`, t1 = ({
  value: e,
  prefix: r,
  suffix: n,
  unit: t,
  trendIcon: s,
  animation: a
}) => {
  const [i, c] = A(e);
  return J(() => c(e), [e]), re(0), re(null), J(() => {
  }, [e]), /* @__PURE__ */ o.exports.jsxs(l2, { className: "land-statistic", children: [
    r && /* @__PURE__ */ o.exports.jsx("div", { className: "land-statistic-prefix", children: r }),
    /* @__PURE__ */ o.exports.jsxs("div", { className: "land-statistic-value", children: [
      i,
      t && /* @__PURE__ */ o.exports.jsx("div", { className: "land-statistic-unit", children: t })
    ] }),
    s && /* @__PURE__ */ o.exports.jsxs("div", { className: "land-statistic-trend-icon", children: [
      s === "up" && /* @__PURE__ */ o.exports.jsx(E, { name: "arrow-increase", fill: "var(--color-green-6)" }),
      s === "down" && /* @__PURE__ */ o.exports.jsx(E, { name: "arrow-increase", fill: "var(--color-red-6)" }),
      s === "default" && /* @__PURE__ */ o.exports.jsx(E, { name: "arrow-increase", fill: "var(--color-red-6)" })
    ] }),
    n && /* @__PURE__ */ o.exports.jsx("div", { className: "land-statistic-suffix", children: n })
  ] });
}, l2 = C.div`
  display: flex;
  .land-statistic-value {
    display: flex;
    align-items: baseline;
    font-size: 32px;
    font-weight: 700;
    color: var(--color-text-2);
    white-space: nowrap;
  }
  .land-statistic-unit {
    margin-left: 2px;
    font-size: 12px;
    color: var(--color-text-2);
  }
  .land-statistic-trend-icon {
    flex-shrink: 0;
    width: 24px;
  }
`, s1 = ({}) => /* @__PURE__ */ o.exports.jsx("div", { children: "Swiper" }), a1 = ({
  prefix: e,
  suffix: r,
  useDivider: n = !1,
  min: t = 0,
  max: s = 100,
  step: a = 1,
  value: i = 0,
  height: c = 36,
  onChange: l,
  className: u
}) => {
  const p = re(null);
  return /* @__PURE__ */ o.exports.jsxs("div", { ref: p, className: "flex items-center gap-8 width-100", children: [
    e && /* @__PURE__ */ o.exports.jsx("div", { className: "fs-12 color-gray-3", children: e }),
    /* @__PURE__ */ o.exports.jsx(
      d2,
      {
        useDivider: n,
        step: 100 * a / (s - t),
        className: `relative flex-1 p-2 radius-8 bg-gray hover:bg-gray transition-2s ${u || ""}`,
        style: { height: `${c}px` },
        children: /* @__PURE__ */ o.exports.jsx(
          p2,
          {
            type: "range",
            value: i,
            min: t,
            max: s,
            step: a,
            onChange: (x) => {
              l == null || l(Number(x.target.value));
            },
            onClick: (x) => x.stopPropagation(),
            style: {
              background: i < (s - t) / 2 ? `linear-gradient(to right,var(--color-primary-6) calc(100% - 2px), var(--color-primary-6)  calc(100% - 2px)) 0 0 / ${(i - t) / (s - t) * 100}% 100% no-repeat` : `linear-gradient(to right,var(--color-primary-6) calc(100% - 2px), var(--color-primary-6)  calc(100% - 2px)) 0 0 / ${(i - t) / (s - t) * 100}% 100% no-repeat`
            },
            className: `width-100 radius-6 flex justify-center ${c <= 16 ? "circle" : ""}`
          }
        )
      }
    ),
    r && /* @__PURE__ */ o.exports.jsx("div", { className: "fs-12 color-gray-3", children: r })
  ] });
}, d2 = C.div`
  &::before {
    content: "";
    display: block;
    margin-top: 4px;
    width: 100%;
    height: calc(100% - 8px);
    border-radius: 8px;
    background: ${(e) => e.useDivider ? `linear-gradient(to right,transparent calc(100% - 1px), var(--color-bg-1)  calc(100% - 1px),var(--color-bg-1) 100%) 0 0 / 100% 100%,
          linear-gradient(to right,transparent calc(100% - 1px), var(--color-border-3) calc(100% - 1px),var(--color-border-3) 100%) 0 0 / ${e.step}% 100%,var(--color-bg-1) 0 0 / 100% 100%` : "transparent"};
    transition: all 0.2s linear;
  }
  &:hover::before {
    background: ${(e) => e.useDivider ? `linear-gradient(to right,transparent calc(100% - 1px), var(--color-bg-2)  calc(100% - 1px),var(--color-bg-2) 100%) 0 0 / 100% 100%,
          linear-gradient(to right,transparent calc(100% - 1px), var(--color-border-3) calc(100% - 1px),var(--color-border-3) 100%) 0 0 / ${e.step}% 100%,var(--color-bg-2) 0 0 / 100% 100%` : ""};
  }
`, p2 = C.input`
  position: absolute;
  top: 2px;
  height: calc(100% - 4px);
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  border: 0px;
  outline: none;
  object-fit: contain;
  &[type="range"] {
    width: 100% - 4px;
  }
  &::-webkit-slider-runnable-track {
    height: 100%;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 100%;
    border-radius: 6px;
    background: var(--color-text-white);
    border: 1px solid var(--color-border-3);
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.04);
    transition: border-color linear 0.2s;
    &:hover {
      border-color: rgba(69, 80, 102, 0.25);
      cursor: ew-resize;
    }
  }
  &.circle {
    &::-webkit-slider-thumb {
      width: auto;
      aspect-ratio: 1;
      height: calc(100% + 8px);
      transform: translateY(-4px);
    }
  }
`, i1 = ({
  data: e = [],
  current: r = e[0].key,
  finished: n = [],
  onClick: t,
  useDivider: s = !0,
  dividerWidth: a = "100%",
  style: i,
  className: c
}) => /* @__PURE__ */ o.exports.jsx(u2, { className: `land-steps-wrap ${c}`, style: i, children: e == null ? void 0 : e.map((l, u) => /* @__PURE__ */ o.exports.jsxs(Cn, { children: [
  s && u !== 0 && /* @__PURE__ */ o.exports.jsx(Ce, { lang: a, style: { marginTop: "12px" } }),
  /* @__PURE__ */ o.exports.jsxs("div", { className: `land-steps-item ${r === l.key ? "active" : ""} ${n.includes(l.key) ? "finished" : ""}`, onClick: () => t == null ? void 0 : t(l), children: [
    /* @__PURE__ */ o.exports.jsx("div", { className: "land-steps-num", children: r === l.key || !n.includes(l.key) ? u + 1 : /* @__PURE__ */ o.exports.jsx(E, { name: "check-stroke", size: 32, strokeWidth: 2, stroke: "var(--color-primary-6)" }) }),
    /* @__PURE__ */ o.exports.jsxs("div", { className: "land-steps-title", children: [
      l.title,
      /* @__PURE__ */ o.exports.jsx("div", { className: "land-steps-desc", children: l.desc })
    ] })
  ] })
] }, l.key)) }), u2 = C.div`
    display: flex;
    gap: var(--gap-16);
    justify-content: space-between;
    width: 100%;
  .land-steps-item{
    flex-shrink: 0;
    display: flex;
    gap: var(--gap-4);
    cursor: pointer;
    &.active{
      .land-steps-num{
        background-color: var(--color-primary-6);
        border-color: var(--color-primary-6);
        color: var(--color-text-light);
      }
      .land-steps-title{
        color: var(--color-text-2);
      }
    }
    &.finished:not(.active){
      .land-steps-num{
        border: none;
      }
      .land-steps-title{
        color: var(--color-text-2);
      }
    }
  }
  .land-steps-num{
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: var(--font-content-small);
    color: var(--color-text-5);
    border: 1px solid var(--color-text-5);
    border-radius: 50%;
    transform: all var(--transition-15) linear;
  }
  .land-steps-title{
    display: flex;
    flex-direction: column;
    gap: var(--gap-4);
    font-size: var(--font-title-small);
    color: var(--color-text-4);
  }
  .land-steps-desc{
    font-size: var(--font-content-small);
    color: var(--color-text-4);
  }
`;
function c1({
  width: e = "100%",
  value: r,
  data: n,
  useDivider: t = !1,
  onChange: s,
  activeClassName: a = "",
  className: i = "",
  switchDisabled: c,
  style: l
}) {
  return /* @__PURE__ */ o.exports.jsx(
    x2,
    {
      className: `land-switchBar  ${i}`,
      style: { width: e, ...l },
      children: n == null ? void 0 : n.map((u, p) => /* @__PURE__ */ o.exports.jsxs(Cn, { children: [
        t && p !== 0 && /* @__PURE__ */ o.exports.jsx(
          Ce,
          {
            direction: "column",
            margin: 0,
            lang: "14px",
            className: `transition-2s ${r !== u.value && r !== u.value - 1 ? "opacity-1" : "opacity-0"}`
          }
        ),
        /* @__PURE__ */ o.exports.jsxs(
          h2,
          {
            type: "background",
            disabled: u.disabled || c,
            pop: u.tip,
            className: `flex-1 flex items-center justify-center gap-4 transition-2s shrink-0 ${Array.isArray(r) ? r == null ? void 0 : r.includes(u.value) : r === u.value ? `selected color-gray-2 ${a}` : u.disabled ? "color-gray-5" : "color-gray-3"}`,
            width: "auto",
            onClick: (x) => {
              x.stopPropagation(), !u.disabled && (s == null || s(u.value, u));
            },
            children: [
              u.label,
              u.showIcon && /* @__PURE__ */ o.exports.jsxs("div", { className: "size-icon-16 fs-12 flex items-center color-icon-secondary hover-pop relative cursor-default", children: [
                /* @__PURE__ */ o.exports.jsx(E, { name: "info-stroke", size: 12 }),
                /* @__PURE__ */ o.exports.jsx(X, { content: u.iconTip })
              ] })
            ]
          }
        )
      ] }, u.value))
    }
  );
}
const x2 = C.div`
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  background-color: var(--color-bg-1);
  border-radius: var(--radius-8);
`, h2 = C(he)`
  border: none;
  padding: unset;
  &.background.default {
    background-color: transparent;
  }
  &:hover {
    background-color: var(--color-bg-2);
  }
  &:active {
    background-color: var(--color-bg-3);
  }
  &.background.default.selected {
    background-color: var(--color-text-white);
    &:hover,
    &:active {
      background-color: var(--color-text-white);
    }
  }
`, l1 = ({
  tagData: e = [],
  placeholder: r = "\u6309\u4E0B\u56DE\u8F66\u4EE5\u8F93\u5165\u6807\u7B7E",
  w: n = "100%",
  maxLength: t = 5,
  highlightStr: s = [],
  highlightStyle: a = { background: "var(--color-primary-2)", color: "var(--color-primary-6)" },
  onChange: i,
  onEnter: c,
  onFocus: l,
  onBlur: u,
  tagStyle: p,
  tagClassName: x = "",
  className: g = "",
  wrapStyle: v,
  ...h
}) => {
  const [L, f] = A(""), [w, m] = A(e), y = ($) => {
    w.length === t || !$ || (m([...w, $]), f(""));
  };
  return J(() => {
    const $ = (M) => {
      M.code === "Backspace" && (w == null ? void 0 : w.length) > 0 && !L && (m((k) => k.slice(0, -1)), console.log(M.code));
    };
    return document.body.addEventListener("keydown", $), () => document.body.removeEventListener("keydown", $);
  }, [L, w]), /* @__PURE__ */ o.exports.jsxs(
    f2,
    {
      className: `land-tagInput ${g}`,
      style: { width: typeof n == "number" ? `${n}px` : n, ...v },
      children: [
        /* @__PURE__ */ o.exports.jsxs("div", { className: "flex-1 flex flex-wrap gap-4 w-fit-content shrink-0", children: [
          w == null ? void 0 : w.map(($, M) => /* @__PURE__ */ o.exports.jsxs(
            g2,
            {
              className: `land-tagInput-tag ${x}`,
              style: p,
              children: [
                $,
                /* @__PURE__ */ o.exports.jsx(E, { name: "clear", onClick: () => m(w.filter((k) => k !== $)) })
              ]
            },
            M
          )),
          /* @__PURE__ */ o.exports.jsx(
            Tn,
            {
              type: "transparent",
              value: L,
              placeholder: r,
              onEnter: ($, M) => {
                y == null || y($), c == null || c(w, M);
              },
              onBlur: ($) => {
                y == null || y(L), u == null || u(w, $);
              },
              onChange: ($, M) => {
                f($), i == null || i(w, M);
              },
              className: "flex-1",
              wrapStyle: { height: "28px", minWidth: "80px" },
              ...h
            }
          )
        ] }),
        /* @__PURE__ */ o.exports.jsxs("div", { className: "land-tagInput-number", children: [
          /* @__PURE__ */ o.exports.jsx(
            E,
            {
              name: "error-fill",
              className: "land-input-clear-icon",
              fill: "var(--color-text-5)",
              onClick: () => {
                m([]);
              }
            }
          ),
          /* @__PURE__ */ o.exports.jsxs("div", { children: [
            /* @__PURE__ */ o.exports.jsx("span", { children: w.length }),
            "/",
            t
          ] })
        ] })
      ]
    }
  );
}, f2 = C.div`
    position: relative;
    display: flex;
    align-items: end;
    gap: var(--gap-4);
    padding: 4px 12px;
    height: fit-content;
    border-radius: var(--radius-4);
    background-color: var(--color-bg-2);
    overflow: auto;
    transition: background-color var(--transition-15) linear;
    &::-webkit-scrollbar{
      width: 0;
      display: none;
    }
    &:focus-within,
    &:hover{
      background-color: var(--color-bg-3);
    }
    

    .land-tagInput-number{
      display: flex;
      align-items: center;
      gap: var(--gap-8);
      height: 28px;
      font-size: 14px;
      color: var(--color-text-5);
      span{
        color: var(--color-text-3);
    }
  }
`, g2 = C.div`
    display: flex;
    align-items: center;
    gap: var(--gap-4);
    padding: 0 8px;
    height: 28px;
    background-color: var(--color-bg-white);
    border-radius: var(--radius-2);
    color: var(--color-text-2);
    font-size: var(--font-content-small);
    border: var(--border-1) solid var(--color-border-2);
    box-sizing: border-box;
    cursor: pointer;
`, d1 = ({
  children: e,
  icon: r,
  canDelete: n,
  color: t = "var(--color-text-2)",
  border: s,
  background: a = "var(--color-bg-3)",
  onDelete: i,
  style: c,
  className: l
}) => /* @__PURE__ */ o.exports.jsxs(
  j2,
  {
    className: l,
    style: { border: s, background: a, color: t, ...c },
    children: [
      r,
      e,
      n && /* @__PURE__ */ o.exports.jsx(
        E,
        {
          name: "close",
          onClick: (u) => {
            u.stopPropagation(), i == null || i(u);
          }
        }
      )
    ]
  }
), j2 = C.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 2px;
  font-size: 14px;
  svg {
    flex-shrink: 0;
  }
`, p1 = ({
  titleData: e,
  data: r = [],
  style: n,
  className: t = ""
}) => /* @__PURE__ */ o.exports.jsxs(m2, { className: `land-table ${t}`, style: n, children: [
  /* @__PURE__ */ o.exports.jsx("thead", { children: /* @__PURE__ */ o.exports.jsx("tr", { children: e == null ? void 0 : e.map((s, a) => /* @__PURE__ */ o.exports.jsx("th", { children: s.title }, a)) }) }),
  /* @__PURE__ */ o.exports.jsx("tbody", { children: r.map((s, a) => /* @__PURE__ */ o.exports.jsx("tr", { children: Object.values(s).map((i, c) => /* @__PURE__ */ o.exports.jsx("td", { children: i }, c)) }, a)) })
] }), m2 = C.table`
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
`, u1 = ({ data: e, direction: r = "column", icon: n }) => /* @__PURE__ */ o.exports.jsx(v2, { className: `${r === "row" ? "row" : ""}`, children: e == null ? void 0 : e.map((t, s) => /* @__PURE__ */ o.exports.jsxs(L2, { className: `land-timeline-item ${r === "row" ? "row" : ""}`, children: [
  /* @__PURE__ */ o.exports.jsxs("div", { className: "land-timeline-indicator-wrapper", children: [
    t.icon || n || /* @__PURE__ */ o.exports.jsx("div", { className: "land-timeline-indicator" }),
    s !== (e == null ? void 0 : e.length) - 1 && /* @__PURE__ */ o.exports.jsx(Ce, { direction: r })
  ] }),
  /* @__PURE__ */ o.exports.jsxs("div", { className: "land-timeline-content", children: [
    t.title && /* @__PURE__ */ o.exports.jsx("div", { className: "land-timeline-title", children: t.title }),
    t.subTitle && /* @__PURE__ */ o.exports.jsx("div", { className: "land-timeline-subTitle", children: t.subTitle }),
    t.desc && /* @__PURE__ */ o.exports.jsx("div", { className: "land-timeline-desc", children: t.desc })
  ] })
] }, s)) }), v2 = C.div`
  display: flex;
  flex-direction: column;
  &.row {
    flex-direction: row;
    align-items: flex-start;
  }
`, L2 = C.div`
  display: flex;
  gap: 12px;
  padding-top: 4px;
  .land-timeline-indicator-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    height: 100%;
  }
  .land-timeline-indicator {
    flex-shrink: 0;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: var(--color-primary-6);
  }
  svg{
    flex-shrink: 0;
  }
  .land-timeline-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-bottom: 24px;
    .land-timeline-title {
      font-size: 16px;
      color: var(--color-text-2);
    }
    .land-timeline-subTitle {
      font-size: 12px;
      color: var(--color-text-5);
    }
    .land-timeline-desc {
      font-size: 14px;
      color: var(--color-text-4);
    }
  }
  &.row{
    flex-direction: column;
    padding-top: 0px;
    padding-left: 4px;
    .land-timeline-indicator-wrapper{
      flex-direction: row;
    }
    .land-timeline-content{
      padding-bottom: 0px;
      padding-right: 24px;
    }
  }
`, x1 = ({
  desc: e,
  fileType: r,
  onUpload: n,
  children: t,
  width: s = "100%",
  height: a = "100px",
  style: i,
  className: c = "",
  innerClassName: l = ""
}) => {
  const u = re(null), [p, x] = A(), [g, v] = A(), [h, L] = A(!1), f = (y, $) => {
    y.preventDefault(), L(!0), $ && (v($), new FileReader().readAsDataURL($), x(URL.createObjectURL($)), L(!1));
  };
  J(() => {
    n == null || n(p, g);
  }, [p]);
  const [w, m] = A(!1);
  return /* @__PURE__ */ o.exports.jsxs(
    w2,
    {
      className: `${w ? "drag" : ""} ${c}`,
      style: i,
      onDragOver: (y) => {
        m(!0), y.preventDefault();
      },
      onDrop: (y) => f(y, y.dataTransfer.files[0]),
      onDragLeave: () => m(!1),
      width: s,
      height: a,
      children: [
        /* @__PURE__ */ o.exports.jsx(
          b2,
          {
            ref: u,
            type: "file",
            accept: r,
            className: l,
            onChange: (y) => {
              f(y, y.target.files[0]);
            }
          }
        ),
        t || (h ? /* @__PURE__ */ o.exports.jsx(o.exports.Fragment, { children: "\u4E0A\u4F20\u4E2D" }) : w ? /* @__PURE__ */ o.exports.jsx("div", { className: "land-uploader-desc", children: "\u91CA\u653E\u5373\u53EF\u4E0A\u4F20" }) : /* @__PURE__ */ o.exports.jsxs(o.exports.Fragment, { children: [
          /* @__PURE__ */ o.exports.jsx("div", { className: "land-uploader-icon", children: /* @__PURE__ */ o.exports.jsx(E, { name: "upload" }) }),
          e && /* @__PURE__ */ o.exports.jsx("div", { className: "land-uploader-desc", children: e })
        ] }))
      ]
    }
  );
}, w2 = C.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-8);
  padding: 16px;
  width: ${(e) => e.width};
  height: ${(e) => e.height};
  background-color: var(--color-bg-1);
  border: 1px dashed var(--color-border-2);
  transition: background-color var(--transition-15) linear;
  cursor: pointer;
  &.drag,
  &:hover {
    background-color: var(--color-bg-2);
  }
  &:active {
    background-color: var(--color-bg-3);
  }
  .land-uploader-icon {
    font-size: 20px;
    color: var(--color-text-5);
  }
  .land-uploader-desc {
    font-size: 14px;
    color: var(--color-text-5);
    transition: all var(--transition-15) linear;
  }
`, b2 = C.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`, h1 = ({ content: e, url: r }) => {
  const n = re(null);
  return /* @__PURE__ */ o.exports.jsx(
    y2,
    {
      ref: n,
      className: "absolute top-0 left-0 grid p-32 width-100 height-100 overflow-hidden",
      children: Array.from({ length: 20 }).map(
        (t, s) => r ? /* @__PURE__ */ o.exports.jsx("img", { className: "land-watermark-item img" }, s) : /* @__PURE__ */ o.exports.jsx("div", { className: "land-watermark-item", children: e }, s)
      )
    }
  );
}, y2 = C.div`
  gap: 64px;
  box-sizing: border-box;
  grid-template-columns: repeat(3, 1fr);
  .land-watermark-item {
    transform: rotate(-45deg);
    color: var(--color-border-3);
    font-size: 12px;
    white-space: nowrap;
  }
`, f1 = (e) => {
  if (!e)
    return "00:00";
  if (typeof e == "string")
    return e;
  const r = Math.floor(e / 3600), n = Math.floor(e % 3600 / 60), t = Math.round(e % 60), s = r < 10 ? "0" + r : r, a = n < 10 ? "0" + n : n, i = t < 10 ? "0" + t : t;
  return r > 0 ? s + ":" + a + ":" + i : a + ":" + i;
}, g1 = (e, r) => {
  const n = [];
  let t = "", s = "default", a = 0;
  for (let i = 0; i < e.length; i++)
    t += e[i], n[a] = {
      type: s,
      msg: t
    }, r.some((l) => t.includes(l) ? (s = l, !0) : !1) && (n[a].msg = t.split(s)[0], n.push({
      type: s,
      msg: s
    }), a += 2, t = "", s = "default");
  return n;
};
export {
  O4 as ClickType,
  E as Icon,
  k2 as LandAffixContainer,
  M2 as LandAlert,
  $2 as LandAnchor,
  ct as LandAudio,
  N2 as LandAutoMedia,
  S2 as LandAvatar,
  H2 as LandBadge,
  E2 as LandBreadCrumb,
  he as LandButton,
  R2 as LandCalendar,
  I2 as LandCarousel,
  V2 as LandCheck,
  B2 as LandCheckBox,
  A2 as LandCheckedContainer,
  T2 as LandCollapse,
  D2 as LandColorPicker,
  O2 as LandContent,
  _2 as LandDatePicker,
  F2 as LandDialog,
  Ce as LandDivider,
  Z2 as LandDrawer,
  U2 as LandDropdown,
  P2 as LandEllipsis,
  V4 as LandFlex,
  q2 as LandFooter,
  z2 as LandGrid,
  Y2 as LandHeader,
  ud as LandImage,
  Tn as LandInput,
  G2 as LandLayout,
  gn as LandLink,
  sd as LandLoading,
  Bt as LandMenu,
  J2 as LandMessage,
  K2 as LandNumberInput,
  X2 as LandPagination,
  X as LandPop,
  Q2 as LandPopConfirm,
  W2 as LandProgress,
  r1 as LandRadio,
  e1 as LandRate,
  wd as LandSelect,
  n1 as LandSelectTree,
  o1 as LandSider,
  a1 as LandSlider,
  dd as LandState,
  t1 as LandStatistic,
  i1 as LandSteps,
  s1 as LandSwiper,
  i4 as LandSwitch,
  c1 as LandSwitchBar,
  p1 as LandTable,
  d1 as LandTag,
  l1 as LandTagInput,
  u1 as LandTimeline,
  lt as LandTitle,
  x1 as LandUploader,
  h1 as LandWatermark,
  T4 as gridType,
  dt as useClickOutside,
  f1 as useFormateTime,
  g1 as useGetHighlightStr
};
//# sourceMappingURL=index.es.js.map
