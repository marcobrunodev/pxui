import Se from "react";
import y, { css as q } from "styled-components";
var x = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function lr() {
  if (Ze)
    return x;
  Ze = 1;
  var d = Se, E = Symbol.for("react.element"), b = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, C = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, N = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Q(Z, c, T) {
    var v, h = {}, w = null, F = null;
    T !== void 0 && (w = "" + T), c.key !== void 0 && (w = "" + c.key), c.ref !== void 0 && (F = c.ref);
    for (v in c)
      g.call(c, v) && !N.hasOwnProperty(v) && (h[v] = c[v]);
    if (Z && Z.defaultProps)
      for (v in c = Z.defaultProps, c)
        h[v] === void 0 && (h[v] = c[v]);
    return { $$typeof: E, type: Z, key: w, ref: F, props: h, _owner: C.current };
  }
  return x.Fragment = b, x.jsx = Q, x.jsxs = Q, x;
}
var D = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function cr() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    var d = Se, E = Symbol.for("react.element"), b = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), Q = Symbol.for("react.provider"), Z = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), $ = Symbol.iterator, Pe = "@@iterator";
    function Oe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = $ && e[$] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var P = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function u(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++)
          n[t - 1] = arguments[t];
        Ie("error", e, n);
      }
    }
    function Ie(e, r, n) {
      {
        var t = P.ReactDebugCurrentFrame, i = t.getStackAddendum();
        i !== "" && (r += "%s", n = n.concat([i]));
        var o = n.map(function(a) {
          return String(a);
        });
        o.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, o);
      }
    }
    var Qe = !1, ke = !1, Ue = !1, xe = !1, De = !1, ee;
    ee = Symbol.for("react.module.reference");
    function Ve(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === N || De || e === C || e === T || e === v || xe || e === F || Qe || ke || Ue || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === h || e.$$typeof === Q || e.$$typeof === Z || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function Ne(e, r, n) {
      var t = e.displayName;
      if (t)
        return t;
      var i = r.displayName || r.name || "";
      return i !== "" ? n + "(" + i + ")" : n;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && u("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case b:
          return "Portal";
        case N:
          return "Profiler";
        case C:
          return "StrictMode";
        case T:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Z:
            var r = e;
            return re(r) + ".Consumer";
          case Q:
            var n = e;
            return re(n._context) + ".Provider";
          case c:
            return Ne(e, e.render, "ForwardRef");
          case h:
            var t = e.displayName || null;
            return t !== null ? t : R(e.type) || "Memo";
          case w: {
            var i = e, o = i._payload, a = i._init;
            try {
              return R(a(o));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, k = 0, ne, te, Ae, ae, ie, oe, se;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function Fe() {
      {
        if (k === 0) {
          ne = console.log, te = console.info, Ae = console.warn, ae = console.error, ie = console.group, oe = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
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
        k++;
      }
    }
    function je() {
      {
        if (k--, k === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: ne
            }),
            info: S({}, e, {
              value: te
            }),
            warn: S({}, e, {
              value: Ae
            }),
            error: S({}, e, {
              value: ae
            }),
            group: S({}, e, {
              value: ie
            }),
            groupCollapsed: S({}, e, {
              value: oe
            }),
            groupEnd: S({}, e, {
              value: se
            })
          });
        }
        k < 0 && u("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var W = P.ReactCurrentDispatcher, L;
    function j(e, r, n) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (i) {
            var t = i.stack.trim().match(/\n( *(at )?)/);
            L = t && t[1] || "";
          }
        return `
` + L + e;
      }
    }
    var X = !1, B;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Be();
    }
    function ce(e, r) {
      if (!e || X)
        return "";
      {
        var n = B.get(e);
        if (n !== void 0)
          return n;
      }
      var t;
      X = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var o;
      o = W.current, W.current = null, Fe();
      try {
        if (r) {
          var a = function() {
            throw Error();
          };
          if (Object.defineProperty(a.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(a, []);
            } catch (m) {
              t = m;
            }
            Reflect.construct(e, [], a);
          } else {
            try {
              a.call();
            } catch (m) {
              t = m;
            }
            e.call(a.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (m) {
            t = m;
          }
          e();
        }
      } catch (m) {
        if (m && t && typeof m.stack == "string") {
          for (var A = m.stack.split(`
`), f = t.stack.split(`
`), s = A.length - 1, l = f.length - 1; s >= 1 && l >= 0 && A[s] !== f[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (A[s] !== f[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || A[s] !== f[l]) {
                    var p = `
` + A[s].replace(" at new ", " at ");
                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, p), p;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        X = !1, W.current = o, je(), Error.prepareStackTrace = i;
      }
      var I = e ? e.displayName || e.name : "", be = I ? j(I) : "";
      return typeof e == "function" && B.set(e, be), be;
    }
    function Ye(e, r, n) {
      return ce(e, !1);
    }
    function Me(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Me(e));
      if (typeof e == "string")
        return j(e);
      switch (e) {
        case T:
          return j("Suspense");
        case v:
          return j("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ye(e.render);
          case h:
            return Y(e.type, r, n);
          case w: {
            var t = e, i = t._payload, o = t._init;
            try {
              return Y(o(i), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, ue = {}, fe = P.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, n = Y(e.type, e._source, r ? r.type : null);
        fe.setExtraStackFrame(n);
      } else
        fe.setExtraStackFrame(null);
    }
    function Je(e, r, n, t, i) {
      {
        var o = Function.call.bind(M);
        for (var a in e)
          if (o(e, a)) {
            var A = void 0;
            try {
              if (typeof e[a] != "function") {
                var f = Error((t || "React class") + ": " + n + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw f.name = "Invariant Violation", f;
              }
              A = e[a](r, a, t, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              A = s;
            }
            A && !(A instanceof Error) && (J(i), u("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", t || "React class", n, a, typeof A), J(null)), A instanceof Error && !(A.message in ue) && (ue[A.message] = !0, J(i), u("Failed %s type: %s", n, A.message), J(null));
          }
      }
    }
    var We = Array.isArray;
    function _(e) {
      return We(e);
    }
    function Le(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function Xe(e) {
      try {
        return de(e), !1;
      } catch {
        return !0;
      }
    }
    function de(e) {
      return "" + e;
    }
    function ve(e) {
      if (Xe(e))
        return u("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Le(e)), de(e);
    }
    var U = P.ReactCurrentOwner, _e = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, ge, K;
    K = {};
    function Ke(e) {
      if (M.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (M.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ze(e, r) {
      if (typeof e.ref == "string" && U.current && r && U.current.stateNode !== r) {
        var n = R(U.current.type);
        K[n] || (u('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(U.current.type), e.ref), K[n] = !0);
      }
    }
    function Ge(e, r) {
      {
        var n = function() {
          pe || (pe = !0, u("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function qe(e, r) {
      {
        var n = function() {
          ge || (ge = !0, u("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var $e = function(e, r, n, t, i, o, a) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: a,
        // Record the component responsible for creating this element.
        _owner: o
      };
      return A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(A, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: t
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function er(e, r, n, t, i) {
      {
        var o, a = {}, A = null, f = null;
        n !== void 0 && (ve(n), A = "" + n), He(r) && (ve(r.key), A = "" + r.key), Ke(r) && (f = r.ref, ze(r, i));
        for (o in r)
          M.call(r, o) && !_e.hasOwnProperty(o) && (a[o] = r[o]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (o in s)
            a[o] === void 0 && (a[o] = s[o]);
        }
        if (A || f) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          A && Ge(a, l), f && qe(a, l);
        }
        return $e(e, A, f, i, t, U.current, a);
      }
    }
    var H = P.ReactCurrentOwner, Ee = P.ReactDebugCurrentFrame;
    function O(e) {
      if (e) {
        var r = e._owner, n = Y(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(n);
      } else
        Ee.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function G(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function he() {
      {
        if (H.current) {
          var e = R(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + r + ":" + n + ".";
        }
        return "";
      }
    }
    var Re = {};
    function nr(e) {
      {
        var r = he();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function me(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = nr(r);
        if (Re[n])
          return;
        Re[n] = !0;
        var t = "";
        e && e._owner && e._owner !== H.current && (t = " It was passed a child from " + R(e._owner.type) + "."), O(e), u('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, t), O(null);
      }
    }
    function ye(e, r) {
      {
        if (typeof e != "object")
          return;
        if (_(e))
          for (var n = 0; n < e.length; n++) {
            var t = e[n];
            G(t) && me(t, r);
          }
        else if (G(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Oe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var o = i.call(e), a; !(a = o.next()).done; )
              G(a.value) && me(a.value, r);
        }
      }
    }
    function tr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === h))
          n = r.propTypes;
        else
          return;
        if (n) {
          var t = R(r);
          Je(n, e.props, "prop", t, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var i = R(r);
          u("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && u("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ar(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var t = r[n];
          if (t !== "children" && t !== "key") {
            O(e), u("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", t), O(null);
            break;
          }
        }
        e.ref !== null && (O(e), u("Invalid attribute `ref` supplied to `React.Fragment`."), O(null));
      }
    }
    function Ce(e, r, n, t, i, o) {
      {
        var a = Ve(e);
        if (!a) {
          var A = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var f = rr(i);
          f ? A += f : A += he();
          var s;
          e === null ? s = "null" : _(e) ? s = "array" : e !== void 0 && e.$$typeof === E ? (s = "<" + (R(e.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, u("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, A);
        }
        var l = er(e, r, n, i, o);
        if (l == null)
          return l;
        if (a) {
          var p = r.children;
          if (p !== void 0)
            if (t)
              if (_(p)) {
                for (var I = 0; I < p.length; I++)
                  ye(p[I], e);
                Object.freeze && Object.freeze(p);
              } else
                u("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ye(p, e);
        }
        return e === g ? Ar(l) : tr(l), l;
      }
    }
    function ar(e, r, n) {
      return Ce(e, r, n, !0);
    }
    function ir(e, r, n) {
      return Ce(e, r, n, !1);
    }
    var or = ir, sr = ar;
    D.Fragment = g, D.jsx = or, D.jsxs = sr;
  }()), D;
}
process.env.NODE_ENV === "production" ? lr() : cr();
const Te = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOCAYAAAAWo42rAAAAPklEQVQoU2P8DwQMSIARCJD5MDYj2QrhJqCZjGEiyQrRNeA0kWSFOH2NLWhAYtSzGhYBlAcPelSSH4W4EgUAwOU4B4ndBmUAAAAASUVORK5CYII=", ur = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOCAYAAAAWo42rAAAAP0lEQVQoU2NUmPPuPwMSeJAixIjMh7EZyVYIMwHdZAwTSVaIrgGniSQrxOlrbEEDEqOe1bBgojx4CAY4xXENABiUNWFWGKa7AAAAAElFTkSuQmCC", fr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOCAYAAAAWo42rAAAAP0lEQVQoU2OcdMbxPwMSyDPZz4jMh7EZyVYIMwHdZAwTSVaIrgGniSQrxOlrbEEDEqOe1bBgojx4CAY4xXENAPQiNUsToHBEAAAAAElFTkSuQmCC", dr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOCAYAAAAWo42rAAAAP0lEQVQoU2P8flX2PwMS4NR+zIjMh7EZyVYIMwHdZAwTSVaIrgGniSQrxOlrbEEDEqOe1bBgojx4CAY4xXENAPkhNd9vBaiyAAAAAElFTkSuQmCC", vr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOCAYAAAAWo42rAAAAP0lEQVQoU2N8nhf6nwEJSE5azYjMh7EZyVYIMwHdZAwTSVaIrgGniSQrxOlrbEEDEqOe1bBgojx4CAY4xXENABtUNWE7eyOxAAAAAElFTkSuQmCC", pr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOCAYAAAAWo42rAAAAP0lEQVQoU2O8fPnyfwYkoKury4jMh7EZyVYIMwHdZAwTSVaIrgGniSQrxOlrbEEDEqOe1bBgojx4CAY4xXENAPE7Nv/B8eXRAAAAAElFTkSuQmCC", V = {
  right: Te,
  primaryRight: ur,
  successRight: fr,
  warningRight: dr,
  errorRight: vr,
  disabledRight: pr
}, gr = Te, Er = ({ primary: d, success: E, warning: b, error: g, disabled: C }) => d && V.primaryRight || E && V.successRight || b && V.warningRight || g && V.errorRight || C && V.disabledRight || gr, hr = ({ down: d }) => d && q`
  transform: rotate(90deg);
`, Rr = ({ left: d }) => d && q`
  transform: rotate(180deg);
`, mr = ({ up: d }) => d && q`
  transform: rotate(270deg);
`;
y.img.attrs(({ primary: d, success: E, warning: b, error: g, disabled: C }) => ({ src: Er({ primary: d, success: E, warning: b, error: g, disabled: C }), alt: "Arrow icon" }))`
  ${hr};
  ${Rr};
  ${mr};
`;
const yr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAkUlEQVRIS2NkmGP+n4GOgHHQW/jP5SRKeDDtMScpfEj2Ic0tRLeAkHcI+ZigD2luISELmJzKUTz5b18nXk+j+xjDh3SzkFiL/t/tAPuIUbmCLJ/CfThoLYR5C92nxMYlyT6kmoUwg4gNWrj6IZNKcWUmQj5G1zf4SxpCZSXNC290B9DdQkIhQEieYG1ByABS5QGoOnh9JVaNWAAAAABJRU5ErkJggg==";
y.img.attrs({ src: yr, alt: "Brazil flag" })``;
const Cr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAhUlEQVQ4T8WVSw7AIAgFy/0PXa0JhiCvYALKEsw4/pAeEG8PVJN56mGNM5PfwHQwA4HIIscL0+aLcTp4F6jVtfk0TgcjoDAwLweqz/xxMGtqs/BKvL0tAyPznxc7SuQZl4HLtiIdHD591dzq77E4nNF/o13tXq8wZt4yv9ePkbn37x3/8xqnAcPv7jztbQAAAABJRU5ErkJggg==";
y.img.attrs({ src: Cr, alt: "Close icon" })`
  cursor: var(--cursor-pointer);
`;
const br = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA0klEQVRYR+2XUQ6CMAyG3ankTnoAOYEeQO+kp5JALIkl9dsfE9aH7QEI7dpvfwuMcviM0/X5tus9zo9xKHOe5TCPZgB7J/bqlg6QXoH75fhVtvPt9fMhUf2xB9SAqn8IoAbystTOzwcQkfv79La0XiElNgqkA6CVqnb/FKECagLyDwHUGlMishvIqkB6gKir/UpVv2oF1MCkqFyCDkBdrdrlEqgJyH8DYBOoeSgw2fO+Cel7bnZ1R0TzqvcDFIhKGIHjloxq+q+9A7RXoPnPaWuACc42zl31geI8AAAAAElFTkSuQmCC";
y.img.attrs({ src: br, alt: "Discord icon" })``;
y.img``;
y.img``;
y.i``;
const Zr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAjElEQVRIS2P8DwQMQHCKQxtEMZj9uAqmGWWywDQM/H8yDcyEqYOJE6sero7uFjJIZ4J9iO4DdJcT60NC5jAOmIW44grmU5g8rjhEl8cVt3Af0s1CWKJBSZJ4OIR8SMgcRrpbeJJdC5xK6QUYRy2kdlDTP9HQPZXCija6ZfwBs5BQKT90awu6V8D0thAA3MHz8YbpuIsAAAAASUVORK5CYII=";
y.img.attrs({ src: Zr, alt: "The United Kingdom flag" })``;
const wr = "data:image/gif;base64,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";
y.img.attrs({ src: wr, alt: "Loading flag" })``;
