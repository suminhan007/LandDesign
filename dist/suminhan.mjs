import de, { useRef as an, useDebugValue as Ut, createElement as sn, useContext as cn, useMemo as un } from "react";
var gt = function() {
  return gt = Object.assign || function(t) {
    for (var r, o = 1, a = arguments.length; o < a; o++) {
      r = arguments[o];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, gt.apply(this, arguments);
};
function ln(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
var yt = { exports: {} }, Ie = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gt;
function fn() {
  if (Gt)
    return Ie;
  Gt = 1;
  var e = de, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, l, h) {
    var p, m = {}, b = null, E = null;
    h !== void 0 && (b = "" + h), l.key !== void 0 && (b = "" + l.key), l.ref !== void 0 && (E = l.ref);
    for (p in l)
      o.call(l, p) && !i.hasOwnProperty(p) && (m[p] = l[p]);
    if (f && f.defaultProps)
      for (p in l = f.defaultProps, l)
        m[p] === void 0 && (m[p] = l[p]);
    return { $$typeof: t, type: f, key: b, ref: E, props: m, _owner: a.current };
  }
  return Ie.Fragment = r, Ie.jsx = c, Ie.jsxs = c, Ie;
}
var je = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ht;
function pn() {
  return Ht || (Ht = 1, process.env.NODE_ENV !== "production" && function() {
    var e = de, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), O = Symbol.iterator, I = "@@iterator";
    function M(n) {
      if (n === null || typeof n != "object")
        return null;
      var s = O && n[O] || n[I];
      return typeof s == "function" ? s : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(n) {
      {
        for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), d = 1; d < s; d++)
          u[d - 1] = arguments[d];
        C("error", n, u);
      }
    }
    function C(n, s, u) {
      {
        var d = k.ReactDebugCurrentFrame, x = d.getStackAddendum();
        x !== "" && (s += "%s", u = u.concat([x]));
        var P = u.map(function(_) {
          return String(_);
        });
        P.unshift("Warning: " + s), Function.prototype.apply.call(console[n], console, P);
      }
    }
    var T = !1, N = !1, S = !1, g = !1, J = !1, Z;
    Z = Symbol.for("react.module.reference");
    function at(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === i || J || n === a || n === h || n === p || g || n === E || T || N || S || typeof n == "object" && n !== null && (n.$$typeof === b || n.$$typeof === m || n.$$typeof === c || n.$$typeof === f || n.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === Z || n.getModuleId !== void 0));
    }
    function it(n, s, u) {
      var d = n.displayName;
      if (d)
        return d;
      var x = s.displayName || s.name || "";
      return x !== "" ? u + "(" + x + ")" : u;
    }
    function Fe(n) {
      return n.displayName || "Context";
    }
    function z(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case h:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case f:
            var s = n;
            return Fe(s) + ".Consumer";
          case c:
            var u = n;
            return Fe(u._context) + ".Provider";
          case l:
            return it(n, n.render, "ForwardRef");
          case m:
            var d = n.displayName || null;
            return d !== null ? d : z(n.type) || "Memo";
          case b: {
            var x = n, P = x._payload, _ = x._init;
            try {
              return z(_(P));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, ce = 0, Me, me, Te, W, ne, oe, L;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Ae() {
      {
        if (ce === 0) {
          Me = console.log, me = console.info, Te = console.warn, W = console.error, ne = console.group, oe = console.groupCollapsed, L = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        ce++;
      }
    }
    function ye() {
      {
        if (ce--, ce === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Q({}, n, {
              value: Me
            }),
            info: Q({}, n, {
              value: me
            }),
            warn: Q({}, n, {
              value: Te
            }),
            error: Q({}, n, {
              value: W
            }),
            group: Q({}, n, {
              value: ne
            }),
            groupCollapsed: Q({}, n, {
              value: oe
            }),
            groupEnd: Q({}, n, {
              value: L
            })
          });
        }
        ce < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = k.ReactCurrentDispatcher, ae;
    function G(n, s, u) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (x) {
            var d = x.stack.trim().match(/\n( *(at )?)/);
            ae = d && d[1] || "";
          }
        return `
` + ae + n;
      }
    }
    var H = !1, ie;
    {
      var ve = typeof WeakMap == "function" ? WeakMap : Map;
      ie = new ve();
    }
    function q(n, s) {
      if (!n || H)
        return "";
      {
        var u = ie.get(n);
        if (u !== void 0)
          return u;
      }
      var d;
      H = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = ee.current, ee.current = null, Ae();
      try {
        if (s) {
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
            } catch (te) {
              d = te;
            }
            Reflect.construct(n, [], _);
          } else {
            try {
              _.call();
            } catch (te) {
              d = te;
            }
            n.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (te) {
            d = te;
          }
          n();
        }
      } catch (te) {
        if (te && d && typeof te.stack == "string") {
          for (var w = te.stack.split(`
`), Y = d.stack.split(`
`), j = w.length - 1, D = Y.length - 1; j >= 1 && D >= 0 && w[j] !== Y[D]; )
            D--;
          for (; j >= 1 && D >= 0; j--, D--)
            if (w[j] !== Y[D]) {
              if (j !== 1 || D !== 1)
                do
                  if (j--, D--, D < 0 || w[j] !== Y[D]) {
                    var B = `
` + w[j].replace(" at new ", " at ");
                    return n.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", n.displayName)), typeof n == "function" && ie.set(n, B), B;
                  }
                while (j >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        H = !1, ee.current = P, ye(), Error.prepareStackTrace = x;
      }
      var we = n ? n.displayName || n.name : "", Bt = we ? G(we) : "";
      return typeof n == "function" && ie.set(n, Bt), Bt;
    }
    function Fr(n, s, u) {
      return q(n, !1);
    }
    function Mr(n) {
      var s = n.prototype;
      return !!(s && s.isReactComponent);
    }
    function Le(n, s, u) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return q(n, Mr(n));
      if (typeof n == "string")
        return G(n);
      switch (n) {
        case h:
          return G("Suspense");
        case p:
          return G("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            return Fr(n.render);
          case m:
            return Le(n.type, s, u);
          case b: {
            var d = n, x = d._payload, P = d._init;
            try {
              return Le(P(x), s, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Ye = Object.prototype.hasOwnProperty, Nt = {}, It = k.ReactDebugCurrentFrame;
    function Ve(n) {
      if (n) {
        var s = n._owner, u = Le(n.type, n._source, s ? s.type : null);
        It.setExtraStackFrame(u);
      } else
        It.setExtraStackFrame(null);
    }
    function Lr(n, s, u, d, x) {
      {
        var P = Function.call.bind(Ye);
        for (var _ in n)
          if (P(n, _)) {
            var w = void 0;
            try {
              if (typeof n[_] != "function") {
                var Y = Error((d || "React class") + ": " + u + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Y.name = "Invariant Violation", Y;
              }
              w = n[_](s, _, d, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              w = j;
            }
            w && !(w instanceof Error) && (Ve(x), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", u, _, typeof w), Ve(null)), w instanceof Error && !(w.message in Nt) && (Nt[w.message] = !0, Ve(x), v("Failed %s type: %s", u, w.message), Ve(null));
          }
      }
    }
    var Yr = Array.isArray;
    function st(n) {
      return Yr(n);
    }
    function Vr(n) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, u = s && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return u;
      }
    }
    function zr(n) {
      try {
        return jt(n), !1;
      } catch {
        return !0;
      }
    }
    function jt(n) {
      return "" + n;
    }
    function Dt(n) {
      if (zr(n))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vr(n)), jt(n);
    }
    var Ne = k.ReactCurrentOwner, Wr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $t, Ft, ct;
    ct = {};
    function Br(n) {
      if (Ye.call(n, "ref")) {
        var s = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Ur(n) {
      if (Ye.call(n, "key")) {
        var s = Object.getOwnPropertyDescriptor(n, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function Gr(n, s) {
      if (typeof n.ref == "string" && Ne.current && s && Ne.current.stateNode !== s) {
        var u = z(Ne.current.type);
        ct[u] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(Ne.current.type), n.ref), ct[u] = !0);
      }
    }
    function Hr(n, s) {
      {
        var u = function() {
          $t || ($t = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function qr(n, s) {
      {
        var u = function() {
          Ft || (Ft = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Xr = function(n, s, u, d, x, P, _) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: s,
        ref: u,
        props: _,
        // Record the component responsible for creating this element.
        _owner: P
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function Kr(n, s, u, d, x) {
      {
        var P, _ = {}, w = null, Y = null;
        u !== void 0 && (Dt(u), w = "" + u), Ur(s) && (Dt(s.key), w = "" + s.key), Br(s) && (Y = s.ref, Gr(s, x));
        for (P in s)
          Ye.call(s, P) && !Wr.hasOwnProperty(P) && (_[P] = s[P]);
        if (n && n.defaultProps) {
          var j = n.defaultProps;
          for (P in j)
            _[P] === void 0 && (_[P] = j[P]);
        }
        if (w || Y) {
          var D = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          w && Hr(_, D), Y && qr(_, D);
        }
        return Xr(n, w, Y, x, d, Ne.current, _);
      }
    }
    var ut = k.ReactCurrentOwner, Mt = k.ReactDebugCurrentFrame;
    function be(n) {
      if (n) {
        var s = n._owner, u = Le(n.type, n._source, s ? s.type : null);
        Mt.setExtraStackFrame(u);
      } else
        Mt.setExtraStackFrame(null);
    }
    var lt;
    lt = !1;
    function ft(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function Lt() {
      {
        if (ut.current) {
          var n = z(ut.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function Jr(n) {
      {
        if (n !== void 0) {
          var s = n.fileName.replace(/^.*[\\\/]/, ""), u = n.lineNumber;
          return `

Check your code at ` + s + ":" + u + ".";
        }
        return "";
      }
    }
    var Yt = {};
    function Zr(n) {
      {
        var s = Lt();
        if (!s) {
          var u = typeof n == "string" ? n : n.displayName || n.name;
          u && (s = `

Check the top-level render call using <` + u + ">.");
        }
        return s;
      }
    }
    function Vt(n, s) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var u = Zr(s);
        if (Yt[u])
          return;
        Yt[u] = !0;
        var d = "";
        n && n._owner && n._owner !== ut.current && (d = " It was passed a child from " + z(n._owner.type) + "."), be(n), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, d), be(null);
      }
    }
    function zt(n, s) {
      {
        if (typeof n != "object")
          return;
        if (st(n))
          for (var u = 0; u < n.length; u++) {
            var d = n[u];
            ft(d) && Vt(d, s);
          }
        else if (ft(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var x = M(n);
          if (typeof x == "function" && x !== n.entries)
            for (var P = x.call(n), _; !(_ = P.next()).done; )
              ft(_.value) && Vt(_.value, s);
        }
      }
    }
    function Qr(n) {
      {
        var s = n.type;
        if (s == null || typeof s == "string")
          return;
        var u;
        if (typeof s == "function")
          u = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === m))
          u = s.propTypes;
        else
          return;
        if (u) {
          var d = z(s);
          Lr(u, n.props, "prop", d, n);
        } else if (s.PropTypes !== void 0 && !lt) {
          lt = !0;
          var x = z(s);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function en(n) {
      {
        for (var s = Object.keys(n.props), u = 0; u < s.length; u++) {
          var d = s[u];
          if (d !== "children" && d !== "key") {
            be(n), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), be(null);
            break;
          }
        }
        n.ref !== null && (be(n), v("Invalid attribute `ref` supplied to `React.Fragment`."), be(null));
      }
    }
    function Wt(n, s, u, d, x, P) {
      {
        var _ = at(n);
        if (!_) {
          var w = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Y = Jr(x);
          Y ? w += Y : w += Lt();
          var j;
          n === null ? j = "null" : st(n) ? j = "array" : n !== void 0 && n.$$typeof === t ? (j = "<" + (z(n.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : j = typeof n, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, w);
        }
        var D = Kr(n, s, u, x, P);
        if (D == null)
          return D;
        if (_) {
          var B = s.children;
          if (B !== void 0)
            if (d)
              if (st(B)) {
                for (var we = 0; we < B.length; we++)
                  zt(B[we], n);
                Object.freeze && Object.freeze(B);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              zt(B, n);
        }
        return n === o ? en(D) : Qr(D), D;
      }
    }
    function tn(n, s, u) {
      return Wt(n, s, u, !0);
    }
    function rn(n, s, u) {
      return Wt(n, s, u, !1);
    }
    var nn = rn, on = tn;
    je.Fragment = o, je.jsx = nn, je.jsxs = on;
  }()), je;
}
process.env.NODE_ENV === "production" ? yt.exports = fn() : yt.exports = pn();
var dn = yt.exports, V = function() {
  return V = Object.assign || function(t) {
    for (var r, o = 1, a = arguments.length; o < a; o++) {
      r = arguments[o];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, V.apply(this, arguments);
};
function Ee(e, t, r) {
  if (r || arguments.length === 2)
    for (var o = 0, a = t.length, i; o < a; o++)
      (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function hn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var mn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, gn = /* @__PURE__ */ hn(
  function(e) {
    return mn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), A = "-ms-", $e = "-moz-", R = "-webkit-", pr = "comm", Qe = "rule", kt = "decl", yn = "@import", dr = "@keyframes", vn = "@layer", hr = Math.abs, Ct = String.fromCharCode, vt = Object.assign;
function bn(e, t) {
  return F(e, 0) ^ 45 ? (((t << 2 ^ F(e, 0)) << 2 ^ F(e, 1)) << 2 ^ F(e, 2)) << 2 ^ F(e, 3) : 0;
}
function mr(e) {
  return e.trim();
}
function re(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function y(e, t, r) {
  return e.replace(t, r);
}
function Ge(e, t, r) {
  return e.indexOf(t, r);
}
function F(e, t) {
  return e.charCodeAt(t) | 0;
}
function _e(e, t, r) {
  return e.slice(t, r);
}
function K(e) {
  return e.length;
}
function gr(e) {
  return e.length;
}
function De(e, t) {
  return t.push(e), e;
}
function wn(e, t) {
  return e.map(t).join("");
}
function qt(e, t) {
  return e.filter(function(r) {
    return !re(r, t);
  });
}
var et = 1, xe = 1, yr = 0, U = 0, $ = 0, Pe = "";
function tt(e, t, r, o, a, i, c, f) {
  return { value: e, root: t, parent: r, type: o, props: a, children: i, line: et, column: xe, length: c, return: "", siblings: f };
}
function se(e, t) {
  return vt(tt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Se(e) {
  for (; e.root; )
    e = se(e.root, { children: [e] });
  De(e, e.siblings);
}
function Sn() {
  return $;
}
function En() {
  return $ = U > 0 ? F(Pe, --U) : 0, xe--, $ === 10 && (xe = 1, et--), $;
}
function X() {
  return $ = U < yr ? F(Pe, U++) : 0, xe++, $ === 10 && (xe = 1, et++), $;
}
function fe() {
  return F(Pe, U);
}
function He() {
  return U;
}
function rt(e, t) {
  return _e(Pe, e, t);
}
function bt(e) {
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
function _n(e) {
  return et = xe = 1, yr = K(Pe = e), U = 0, [];
}
function xn(e) {
  return Pe = "", e;
}
function pt(e) {
  return mr(rt(U - 1, wt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Rn(e) {
  for (; ($ = fe()) && $ < 33; )
    X();
  return bt(e) > 2 || bt($) > 3 ? "" : " ";
}
function kn(e, t) {
  for (; --t && X() && !($ < 48 || $ > 102 || $ > 57 && $ < 65 || $ > 70 && $ < 97); )
    ;
  return rt(e, He() + (t < 6 && fe() == 32 && X() == 32));
}
function wt(e) {
  for (; X(); )
    switch ($) {
      case e:
        return U;
      case 34:
      case 39:
        e !== 34 && e !== 39 && wt($);
        break;
      case 40:
        e === 41 && wt(e);
        break;
      case 92:
        X();
        break;
    }
  return U;
}
function Cn(e, t) {
  for (; X() && e + $ !== 57; )
    if (e + $ === 84 && fe() === 47)
      break;
  return "/*" + rt(t, U - 1) + "*" + Ct(e === 47 ? e : X());
}
function Pn(e) {
  for (; !bt(fe()); )
    X();
  return rt(e, U);
}
function On(e) {
  return xn(qe("", null, null, null, [""], e = _n(e), 0, [0], e));
}
function qe(e, t, r, o, a, i, c, f, l) {
  for (var h = 0, p = 0, m = c, b = 0, E = 0, O = 0, I = 1, M = 1, k = 1, v = 0, C = "", T = a, N = i, S = o, g = C; M; )
    switch (O = v, v = X()) {
      case 40:
        if (O != 108 && F(g, m - 1) == 58) {
          Ge(g += y(pt(v), "&", "&\f"), "&\f", hr(h ? f[h - 1] : 0)) != -1 && (k = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        g += pt(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        g += Rn(O);
        break;
      case 92:
        g += kn(He() - 1, 7);
        continue;
      case 47:
        switch (fe()) {
          case 42:
          case 47:
            De(Tn(Cn(X(), He()), t, r, l), l);
            break;
          default:
            g += "/";
        }
        break;
      case 123 * I:
        f[h++] = K(g) * k;
      case 125 * I:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            M = 0;
          case 59 + p:
            k == -1 && (g = y(g, /\f/g, "")), E > 0 && K(g) - m && De(E > 32 ? Kt(g + ";", o, r, m - 1, l) : Kt(y(g, " ", "") + ";", o, r, m - 2, l), l);
            break;
          case 59:
            g += ";";
          default:
            if (De(S = Xt(g, t, r, h, p, a, f, C, T = [], N = [], m, i), i), v === 123)
              if (p === 0)
                qe(g, t, S, S, T, i, m, f, N);
              else
                switch (b === 99 && F(g, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    qe(e, S, S, o && De(Xt(e, S, S, 0, 0, a, f, C, a, T = [], m, N), N), a, N, m, f, o ? T : N);
                    break;
                  default:
                    qe(g, S, S, S, [""], N, 0, f, N);
                }
        }
        h = p = E = 0, I = k = 1, C = g = "", m = c;
        break;
      case 58:
        m = 1 + K(g), E = O;
      default:
        if (I < 1) {
          if (v == 123)
            --I;
          else if (v == 125 && I++ == 0 && En() == 125)
            continue;
        }
        switch (g += Ct(v), v * I) {
          case 38:
            k = p > 0 ? 1 : (g += "\f", -1);
            break;
          case 44:
            f[h++] = (K(g) - 1) * k, k = 1;
            break;
          case 64:
            fe() === 45 && (g += pt(X())), b = fe(), p = m = K(C = g += Pn(He())), v++;
            break;
          case 45:
            O === 45 && K(g) == 2 && (I = 0);
        }
    }
  return i;
}
function Xt(e, t, r, o, a, i, c, f, l, h, p, m) {
  for (var b = a - 1, E = a === 0 ? i : [""], O = gr(E), I = 0, M = 0, k = 0; I < o; ++I)
    for (var v = 0, C = _e(e, b + 1, b = hr(M = c[I])), T = e; v < O; ++v)
      (T = mr(M > 0 ? E[v] + " " + C : y(C, /&\f/g, E[v]))) && (l[k++] = T);
  return tt(e, t, r, a === 0 ? Qe : f, l, h, p, m);
}
function Tn(e, t, r, o) {
  return tt(e, t, r, pr, Ct(Sn()), _e(e, 2, -2), 0, o);
}
function Kt(e, t, r, o, a) {
  return tt(e, t, r, kt, _e(e, 0, o), _e(e, o + 1, -1), o, a);
}
function vr(e, t, r) {
  switch (bn(e, t)) {
    case 5103:
      return R + "print-" + e + e;
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
      return R + e + e;
    case 4789:
      return $e + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return R + e + $e + e + A + e + e;
    case 5936:
      switch (F(e, t + 11)) {
        case 114:
          return R + e + A + y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return R + e + A + y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return R + e + A + y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return R + e + A + e + e;
    case 6165:
      return R + e + A + "flex-" + e + e;
    case 5187:
      return R + e + y(e, /(\w+).+(:[^]+)/, R + "box-$1$2" + A + "flex-$1$2") + e;
    case 5443:
      return R + e + A + "flex-item-" + y(e, /flex-|-self/g, "") + (re(e, /flex-|baseline/) ? "" : A + "grid-row-" + y(e, /flex-|-self/g, "")) + e;
    case 4675:
      return R + e + A + "flex-line-pack" + y(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return R + e + A + y(e, "shrink", "negative") + e;
    case 5292:
      return R + e + A + y(e, "basis", "preferred-size") + e;
    case 6060:
      return R + "box-" + y(e, "-grow", "") + R + e + A + y(e, "grow", "positive") + e;
    case 4554:
      return R + y(e, /([^-])(transform)/g, "$1" + R + "$2") + e;
    case 6187:
      return y(y(y(e, /(zoom-|grab)/, R + "$1"), /(image-set)/, R + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return y(e, /(image-set\([^]*)/, R + "$1$`$1");
    case 4968:
      return y(y(e, /(.+:)(flex-)?(.*)/, R + "box-pack:$3" + A + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + R + e + e;
    case 4200:
      if (!re(e, /flex-|baseline/))
        return A + "grid-column-align" + _e(e, t) + e;
      break;
    case 2592:
    case 3360:
      return A + y(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(o, a) {
        return t = a, re(o.props, /grid-\w+-end/);
      }) ? ~Ge(e + (r = r[t].value), "span", 0) ? e : A + y(e, "-start", "") + e + A + "grid-row-span:" + (~Ge(r, "span", 0) ? re(r, /\d+/) : +re(r, /\d+/) - +re(e, /\d+/)) + ";" : A + y(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(o) {
        return re(o.props, /grid-\w+-start/);
      }) ? e : A + y(y(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y(e, /(.+)-inline(.+)/, R + "$1$2") + e;
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
      if (K(e) - 1 - t > 6)
        switch (F(e, t + 1)) {
          case 109:
            if (F(e, t + 4) !== 45)
              break;
          case 102:
            return y(e, /(.+:)(.+)-([^]+)/, "$1" + R + "$2-$3$1" + $e + (F(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ge(e, "stretch", 0) ? vr(y(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return y(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(o, a, i, c, f, l, h) {
        return A + a + ":" + i + h + (c ? A + a + "-span:" + (f ? l : +l - +i) + h : "") + e;
      });
    case 4949:
      if (F(e, t + 6) === 121)
        return y(e, ":", ":" + R) + e;
      break;
    case 6444:
      switch (F(e, F(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return y(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + R + (F(e, 14) === 45 ? "inline-" : "") + "box$3$1" + R + "$2$3$1" + A + "$2box$3") + e;
        case 100:
          return y(e, ":", ":" + A) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return y(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Je(e, t) {
  for (var r = "", o = 0; o < e.length; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function An(e, t, r, o) {
  switch (e.type) {
    case vn:
      if (e.children.length)
        break;
    case yn:
    case kt:
      return e.return = e.return || e.value;
    case pr:
      return "";
    case dr:
      return e.return = e.value + "{" + Je(e.children, o) + "}";
    case Qe:
      if (!K(e.value = e.props.join(",")))
        return "";
  }
  return K(r = Je(e.children, o)) ? e.return = e.value + "{" + r + "}" : "";
}
function Nn(e) {
  var t = gr(e);
  return function(r, o, a, i) {
    for (var c = "", f = 0; f < t; f++)
      c += e[f](r, o, a, i) || "";
    return c;
  };
}
function In(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function jn(e, t, r, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case kt:
        e.return = vr(e.value, e.length, r);
        return;
      case dr:
        return Je([se(e, { value: y(e.value, "@", "@" + R) })], o);
      case Qe:
        if (e.length)
          return wn(r = e.props, function(a) {
            switch (re(a, o = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Se(se(e, { props: [y(a, /:(read-\w+)/, ":" + $e + "$1")] })), Se(se(e, { props: [a] })), vt(e, { props: qt(r, o) });
                break;
              case "::placeholder":
                Se(se(e, { props: [y(a, /:(plac\w+)/, ":" + R + "input-$1")] })), Se(se(e, { props: [y(a, /:(plac\w+)/, ":" + $e + "$1")] })), Se(se(e, { props: [y(a, /:(plac\w+)/, A + "input-$1")] })), Se(se(e, { props: [a] })), vt(e, { props: qt(r, o) });
                break;
            }
            return "";
          });
    }
}
var Dn = {
  animationIterationCount: 1,
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
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, he = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", br = "active", wr = "data-styled-version", nt = "6.1.8", Pt = `/*!sc*/
`, Ot = typeof window < "u" && "HTMLElement" in window, $n = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Jt = /invalid hook call/i, ze = /* @__PURE__ */ new Set(), Fn = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", o = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, a = console.error;
    try {
      var i = !0;
      console.error = function(c) {
        for (var f = [], l = 1; l < arguments.length; l++)
          f[l - 1] = arguments[l];
        Jt.test(c) ? (i = !1, ze.delete(o)) : a.apply(void 0, Ee([c], f, !1));
      }, an(), i && !ze.has(o) && (console.warn(o), ze.add(o));
    } catch (c) {
      Jt.test(c.message) && ze.delete(o);
    } finally {
      console.error = a;
    }
  }
}, ot = Object.freeze([]), Re = Object.freeze({});
function Mn(e, t, r) {
  return r === void 0 && (r = Re), e.theme !== r.theme && e.theme || t || r.theme;
}
var St = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Ln = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Yn = /(^-|-$)/g;
function Zt(e) {
  return e.replace(Ln, "-").replace(Yn, "");
}
var Vn = /(a)(d)/gi, We = 52, Qt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Et(e) {
  var t, r = "";
  for (t = Math.abs(e); t > We; t = t / We | 0)
    r = Qt(t % We) + r;
  return (Qt(t % We) + r).replace(Vn, "$1-$2");
}
var dt, Sr = 5381, ue = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Er = function(e) {
  return ue(Sr, e);
};
function zn(e) {
  return Et(Er(e) >>> 0);
}
function _r(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function ht(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var xr = typeof Symbol == "function" && Symbol.for, Rr = xr ? Symbol.for("react.memo") : 60115, Wn = xr ? Symbol.for("react.forward_ref") : 60112, Bn = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Un = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, kr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Gn = ((dt = {})[Wn] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, dt[Rr] = kr, dt);
function er(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Rr ? kr : "$$typeof" in e ? Gn[e.$$typeof] : Bn;
  var t;
}
var Hn = Object.defineProperty, qn = Object.getOwnPropertyNames, tr = Object.getOwnPropertySymbols, Xn = Object.getOwnPropertyDescriptor, Kn = Object.getPrototypeOf, rr = Object.prototype;
function Cr(e, t, r) {
  if (typeof t != "string") {
    if (rr) {
      var o = Kn(t);
      o && o !== rr && Cr(e, o, r);
    }
    var a = qn(t);
    tr && (a = a.concat(tr(t)));
    for (var i = er(e), c = er(t), f = 0; f < a.length; ++f) {
      var l = a[f];
      if (!(l in Un || r && r[l] || c && l in c || i && l in i)) {
        var h = Xn(t, l);
        try {
          Hn(e, l, h);
        } catch {
        }
      }
    }
  }
  return e;
}
function ke(e) {
  return typeof e == "function";
}
function Tt(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function le(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function nr(e, t) {
  if (e.length === 0)
    return "";
  for (var r = e[0], o = 1; o < e.length; o++)
    r += t ? t + e[o] : e[o];
  return r;
}
function Ce(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function _t(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Ce(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      e[o] = _t(e[o], t[o]);
  else if (Ce(t))
    for (var o in t)
      e[o] = _t(e[o], t[o]);
  return e;
}
function At(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Jn = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Zn() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = e[0], o = [], a = 1, i = e.length; a < i; a += 1)
    o.push(e[a]);
  return o.forEach(function(c) {
    r = r.replace(/%[a-z]/, c);
  }), r;
}
function Oe(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Zn.apply(void 0, Ee([Jn[e]], t, !1)).trim());
}
var Qn = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, o = 0; o < t; o++)
      r += this.groupSizes[o];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, a = o.length, i = a; t >= i; )
        if ((i <<= 1) < 0)
          throw Oe(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var c = a; c < i; c++)
        this.groupSizes[c] = 0;
    }
    for (var f = this.indexOfGroup(t + 1), l = (c = 0, r.length); c < l; c++)
      this.tag.insertRule(f, r[c]) && (this.groupSizes[t]++, f++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], o = this.indexOfGroup(t), a = o + r;
      this.groupSizes[t] = 0;
      for (var i = o; i < a; i++)
        this.tag.deleteRule(o);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var o = this.groupSizes[t], a = this.indexOfGroup(t), i = a + o, c = a; c < i; c++)
      r += "".concat(this.tag.getRule(c)).concat(Pt);
    return r;
  }, e;
}(), Xe = /* @__PURE__ */ new Map(), Ze = /* @__PURE__ */ new Map(), Ke = 1, Be = function(e) {
  if (Xe.has(e))
    return Xe.get(e);
  for (; Ze.has(Ke); )
    Ke++;
  var t = Ke++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw Oe(16, "".concat(t));
  return Xe.set(e, t), Ze.set(t, e), t;
}, eo = function(e, t) {
  Ke = t + 1, Xe.set(e, t), Ze.set(t, e);
}, to = "style[".concat(he, "][").concat(wr, '="').concat(nt, '"]'), ro = new RegExp("^".concat(he, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), no = function(e, t, r) {
  for (var o, a = r.split(","), i = 0, c = a.length; i < c; i++)
    (o = a[i]) && e.registerName(t, o);
}, oo = function(e, t) {
  for (var r, o = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Pt), a = [], i = 0, c = o.length; i < c; i++) {
    var f = o[i].trim();
    if (f) {
      var l = f.match(ro);
      if (l) {
        var h = 0 | parseInt(l[1], 10), p = l[2];
        h !== 0 && (eo(p, h), no(e, p, l[3]), e.getTag().insertRules(h, a)), a.length = 0;
      } else
        a.push(f);
    }
  }
};
function ao() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Pr = function(e) {
  var t = document.head, r = e || t, o = document.createElement("style"), a = function(f) {
    var l = Array.from(f.querySelectorAll("style[".concat(he, "]")));
    return l[l.length - 1];
  }(r), i = a !== void 0 ? a.nextSibling : null;
  o.setAttribute(he, br), o.setAttribute(wr, nt);
  var c = ao();
  return c && o.setAttribute("nonce", c), r.insertBefore(o, i), o;
}, io = function() {
  function e(t) {
    this.element = Pr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet)
        return r.sheet;
      for (var o = document.styleSheets, a = 0, i = o.length; a < i; a++) {
        var c = o[a];
        if (c.ownerNode === r)
          return c;
      }
      throw Oe(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), so = function() {
  function e(t) {
    this.element = Pr(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(r);
      return this.element.insertBefore(o, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), co = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), or = Ot, uo = { isServer: !Ot, useCSSOMInjection: !$n }, Or = function() {
  function e(t, r, o) {
    t === void 0 && (t = Re), r === void 0 && (r = {});
    var a = this;
    this.options = V(V({}, uo), t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && Ot && or && (or = !1, function(i) {
      for (var c = document.querySelectorAll(to), f = 0, l = c.length; f < l; f++) {
        var h = c[f];
        h && h.getAttribute(he) !== br && (oo(i, h), h.parentNode && h.parentNode.removeChild(h));
      }
    }(this)), At(this, function() {
      return function(i) {
        for (var c = i.getTag(), f = c.length, l = "", h = function(m) {
          var b = function(k) {
            return Ze.get(k);
          }(m);
          if (b === void 0)
            return "continue";
          var E = i.names.get(b), O = c.getGroup(m);
          if (E === void 0 || O.length === 0)
            return "continue";
          var I = "".concat(he, ".g").concat(m, '[id="').concat(b, '"]'), M = "";
          E !== void 0 && E.forEach(function(k) {
            k.length > 0 && (M += "".concat(k, ","));
          }), l += "".concat(O).concat(I, '{content:"').concat(M, '"}').concat(Pt);
        }, p = 0; p < f; p++)
          h(p);
        return l;
      }(a);
    });
  }
  return e.registerId = function(t) {
    return Be(t);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(V(V({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var o = r.useCSSOMInjection, a = r.target;
      return r.isServer ? new co(a) : o ? new io(a) : new so(a);
    }(this.options), new Qn(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (Be(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, e.prototype.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(Be(t), o);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Be(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), lo = /&/g, fo = /^\s*\/\/.*$/gm;
function Tr(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(o) {
      return "".concat(t, " ").concat(o);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Tr(r.children, t)), r;
  });
}
function po(e) {
  var t, r, o, a = e === void 0 ? Re : e, i = a.options, c = i === void 0 ? Re : i, f = a.plugins, l = f === void 0 ? ot : f, h = function(b, E, O) {
    return O.startsWith(r) && O.endsWith(r) && O.replaceAll(r, "").length > 0 ? ".".concat(t) : b;
  }, p = l.slice();
  p.push(function(b) {
    b.type === Qe && b.value.includes("&") && (b.props[0] = b.props[0].replace(lo, r).replace(o, h));
  }), c.prefix && p.push(jn), p.push(An);
  var m = function(b, E, O, I) {
    E === void 0 && (E = ""), O === void 0 && (O = ""), I === void 0 && (I = "&"), t = I, r = E, o = new RegExp("\\".concat(r, "\\b"), "g");
    var M = b.replace(fo, ""), k = On(O || E ? "".concat(O, " ").concat(E, " { ").concat(M, " }") : M);
    c.namespace && (k = Tr(k, c.namespace));
    var v = [];
    return Je(k, Nn(p.concat(In(function(C) {
      return v.push(C);
    })))), v;
  };
  return m.hash = l.length ? l.reduce(function(b, E) {
    return E.name || Oe(15), ue(b, E.name);
  }, Sr).toString() : "", m;
}
var ho = new Or(), xt = po(), Ar = de.createContext({ shouldForwardProp: void 0, styleSheet: ho, stylis: xt });
Ar.Consumer;
de.createContext(void 0);
function ar() {
  return cn(Ar);
}
var ir = function() {
  function e(t, r) {
    var o = this;
    this.inject = function(a, i) {
      i === void 0 && (i = xt);
      var c = o.name + i.hash;
      a.hasNameForId(o.id, c) || a.insertRules(o.id, c, i(o.rules, c, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, At(this, function() {
      throw Oe(12, String(o.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = xt), this.name + t.hash;
  }, e;
}(), mo = function(e) {
  return e >= "A" && e <= "Z";
};
function sr(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var o = e[r];
    if (r === 1 && o === "-" && e[0] === "-")
      return e;
    mo(o) ? t += "-" + o.toLowerCase() : t += o;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Nr = function(e) {
  return e == null || e === !1 || e === "";
}, Ir = function(e) {
  var t, r, o = [];
  for (var a in e) {
    var i = e[a];
    e.hasOwnProperty(a) && !Nr(i) && (Array.isArray(i) && i.isCss || ke(i) ? o.push("".concat(sr(a), ":"), i, ";") : Ce(i) ? o.push.apply(o, Ee(Ee(["".concat(a, " {")], Ir(i), !1), ["}"], !1)) : o.push("".concat(sr(a), ": ").concat((t = a, (r = i) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Dn || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return o;
};
function pe(e, t, r, o) {
  if (Nr(e))
    return [];
  if (Tt(e))
    return [".".concat(e.styledComponentId)];
  if (ke(e)) {
    if (!ke(i = e) || i.prototype && i.prototype.isReactComponent || !t)
      return [e];
    var a = e(t);
    return process.env.NODE_ENV === "production" || typeof a != "object" || Array.isArray(a) || a instanceof ir || Ce(a) || a === null || console.error("".concat(_r(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), pe(a, t, r, o);
  }
  var i;
  return e instanceof ir ? r ? (e.inject(r, o), [e.getName(o)]) : [e] : Ce(e) ? Ir(e) : Array.isArray(e) ? Array.prototype.concat.apply(ot, e.map(function(c) {
    return pe(c, t, r, o);
  })) : [e.toString()];
}
function go(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (ke(r) && !Tt(r))
      return !1;
  }
  return !0;
}
var yo = Er(nt), vo = function() {
  function e(t, r, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && go(t), this.componentId = r, this.baseHash = ue(yo, r), this.baseStyle = o, Or.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, o) {
    var a = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, o) : "";
    if (this.isStatic && !o.hash)
      if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId))
        a = le(a, this.staticRulesId);
      else {
        var i = nr(pe(this.rules, t, r, o)), c = Et(ue(this.baseHash, i) >>> 0);
        if (!r.hasNameForId(this.componentId, c)) {
          var f = o(i, ".".concat(c), void 0, this.componentId);
          r.insertRules(this.componentId, c, f);
        }
        a = le(a, c), this.staticRulesId = c;
      }
    else {
      for (var l = ue(this.baseHash, o.hash), h = "", p = 0; p < this.rules.length; p++) {
        var m = this.rules[p];
        if (typeof m == "string")
          h += m, process.env.NODE_ENV !== "production" && (l = ue(l, m));
        else if (m) {
          var b = nr(pe(m, t, r, o));
          l = ue(l, b + p), h += b;
        }
      }
      if (h) {
        var E = Et(l >>> 0);
        r.hasNameForId(this.componentId, E) || r.insertRules(this.componentId, E, o(h, ".".concat(E), void 0, this.componentId)), a = le(a, E);
      }
    }
    return a;
  }, e;
}(), jr = de.createContext(void 0);
jr.Consumer;
var mt = {}, cr = /* @__PURE__ */ new Set();
function bo(e, t, r) {
  var o = Tt(e), a = e, i = !ht(e), c = t.attrs, f = c === void 0 ? ot : c, l = t.componentId, h = l === void 0 ? function(T, N) {
    var S = typeof T != "string" ? "sc" : Zt(T);
    mt[S] = (mt[S] || 0) + 1;
    var g = "".concat(S, "-").concat(zn(nt + S + mt[S]));
    return N ? "".concat(N, "-").concat(g) : g;
  }(t.displayName, t.parentComponentId) : l, p = t.displayName, m = p === void 0 ? function(T) {
    return ht(T) ? "styled.".concat(T) : "Styled(".concat(_r(T), ")");
  }(e) : p, b = t.displayName && t.componentId ? "".concat(Zt(t.displayName), "-").concat(t.componentId) : t.componentId || h, E = o && a.attrs ? a.attrs.concat(f).filter(Boolean) : f, O = t.shouldForwardProp;
  if (o && a.shouldForwardProp) {
    var I = a.shouldForwardProp;
    if (t.shouldForwardProp) {
      var M = t.shouldForwardProp;
      O = function(T, N) {
        return I(T, N) && M(T, N);
      };
    } else
      O = I;
  }
  var k = new vo(r, b, o ? a.componentStyle : void 0);
  function v(T, N) {
    return function(S, g, J) {
      var Z = S.attrs, at = S.componentStyle, it = S.defaultProps, Fe = S.foldedComponentIds, z = S.styledComponentId, Q = S.target, ce = de.useContext(jr), Me = ar(), me = S.shouldForwardProp || Me.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Ut(z);
      var Te = Mn(g, ce, it) || Re, W = function(ye, ee, ae) {
        for (var G, H = V(V({}, ee), { className: void 0, theme: ae }), ie = 0; ie < ye.length; ie += 1) {
          var ve = ke(G = ye[ie]) ? G(H) : G;
          for (var q in ve)
            H[q] = q === "className" ? le(H[q], ve[q]) : q === "style" ? V(V({}, H[q]), ve[q]) : ve[q];
        }
        return ee.className && (H.className = le(H.className, ee.className)), H;
      }(Z, g, Te), ne = W.as || Q, oe = {};
      for (var L in W)
        W[L] === void 0 || L[0] === "$" || L === "as" || L === "theme" && W.theme === Te || (L === "forwardedAs" ? oe.as = W.forwardedAs : me && !me(L, ne) || (oe[L] = W[L], me || process.env.NODE_ENV !== "development" || gn(L) || cr.has(L) || !St.has(ne) || (cr.add(L), console.warn('styled-components: it looks like an unknown prop "'.concat(L, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ge = function(ye, ee) {
        var ae = ar(), G = ye.generateAndInjectStyles(ee, ae.styleSheet, ae.stylis);
        return process.env.NODE_ENV !== "production" && Ut(G), G;
      }(at, W);
      process.env.NODE_ENV !== "production" && S.warnTooManyClasses && S.warnTooManyClasses(ge);
      var Ae = le(Fe, z);
      return ge && (Ae += " " + ge), W.className && (Ae += " " + W.className), oe[ht(ne) && !St.has(ne) ? "class" : "className"] = Ae, oe.ref = J, sn(ne, oe);
    }(C, T, N);
  }
  v.displayName = m;
  var C = de.forwardRef(v);
  return C.attrs = E, C.componentStyle = k, C.displayName = m, C.shouldForwardProp = O, C.foldedComponentIds = o ? le(a.foldedComponentIds, a.styledComponentId) : "", C.styledComponentId = b, C.target = o ? a.target : e, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = o ? function(N) {
      for (var S = [], g = 1; g < arguments.length; g++)
        S[g - 1] = arguments[g];
      for (var J = 0, Z = S; J < Z.length; J++)
        _t(N, Z[J], !0);
      return N;
    }({}, a.defaultProps, T) : T;
  } }), process.env.NODE_ENV !== "production" && (Fn(m, b), C.warnTooManyClasses = /* @__PURE__ */ function(T, N) {
    var S = {}, g = !1;
    return function(J) {
      if (!g && (S[J] = !0, Object.keys(S).length >= 200)) {
        var Z = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(T).concat(Z, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), g = !0, S = {};
      }
    };
  }(m, b)), At(C, function() {
    return ".".concat(C.styledComponentId);
  }), i && Cr(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), C;
}
function ur(e, t) {
  for (var r = [e[0]], o = 0, a = t.length; o < a; o += 1)
    r.push(t[o], e[o + 1]);
  return r;
}
var lr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function wo(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (ke(e) || Ce(e))
    return lr(pe(ur(ot, Ee([e], t, !0))));
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? pe(o) : lr(pe(ur(o, t)));
}
function Rt(e, t, r) {
  if (r === void 0 && (r = Re), !t)
    throw Oe(1, t);
  var o = function(a) {
    for (var i = [], c = 1; c < arguments.length; c++)
      i[c - 1] = arguments[c];
    return e(t, r, wo.apply(void 0, Ee([a], i, !1)));
  };
  return o.attrs = function(a) {
    return Rt(e, t, V(V({}, r), { attrs: Array.prototype.concat(r.attrs, a).filter(Boolean) }));
  }, o.withConfig = function(a) {
    return Rt(e, t, V(V({}, r), a));
  }, o;
}
var Dr = function(e) {
  return Rt(bo, e);
}, $r = Dr;
St.forEach(function(e) {
  $r[e] = Dr(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ue = "__sc-".concat(he, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Ue] || (window[Ue] = 0), window[Ue] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ue] += 1);
var _o = function(e) {
  var t = e.text, r = t === void 0 ? "按钮" : t, o = e.icon, a = e.type, i = a === void 0 ? "default" : a, c = e.width, f = c === void 0 ? "fit-content" : c, l = e.onClick, h = e.style, p = e.className, m = un(function() {
    switch (i) {
      case "default":
        return "color-gray-2 border pointer";
      case "primary":
        return "color-white bg-primary pointer";
      case "disabled":
        return "color-gray-4 border disabled";
      case "default-stroke":
        return "color-gray-2 border pointer";
      case "primary-stroke":
        return "color-primary bg-primary-lighter border-primary pointer";
      case "disabled-stroke":
        return "color-gray-4 border disabled";
    }
  }, [i]);
  return dn.jsxs(So, { className: "StyleButton flex both-center gap-4 radius-8 px-16 py-4 height-100 fs-16 transition ".concat(m, " ").concat(p || ""), style: gt({ width: f }, h), onClick: function() {
    return l == null ? void 0 : l();
  }, children: [o, r] });
}, So = $r.div(fr || (fr = ln([`
    &:hover{
        transform: translateY(-2px);    
        box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.02), 0px 3px 5px 0px rgba(0, 0, 0, 0.02);
    }
`], [`
    &:hover{
        transform: translateY(-2px);    
        box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.02), 0px 3px 5px 0px rgba(0, 0, 0, 0.02);
    }
`]))), fr;
export {
  _o as LandButton
};
