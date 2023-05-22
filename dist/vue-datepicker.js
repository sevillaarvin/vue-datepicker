import { openBlock as p, createElementBlock as B, createElementVNode as ae, reactive as _t, computed as L, unref as i, ref as H, watch as nt, toRef as St, onMounted as We, nextTick as Qe, defineComponent as je, renderSlot as G, createCommentVNode as S, normalizeClass as he, withKeys as ie, createBlock as ve, withModifiers as Je, normalizeStyle as et, normalizeProps as Re, mergeProps as Pe, Fragment as ye, createTextVNode as Ze, toDisplayString as Oe, renderList as Ce, createVNode as mt, Transition as kt, withCtx as se, onBeforeUpdate as na, onUnmounted as yn, withDirectives as Yt, vShow as Vt, createSlots as Ee, isRef as ut, guardReactiveProps as ze, resolveDynamicComponent as Fn, useSlots as gn, getCurrentScope as aa, onScopeDispose as ra, Teleport as la } from "vue";
import { isBefore as Pt, isEqual as ht, isAfter as Ct, set as _e, setHours as Un, setMinutes as Wn, setSeconds as Hn, setMilliseconds as hn, parse as sn, isValid as Et, isDate as oa, format as Mt, getMonth as pe, getDay as sa, getYear as we, getHours as qe, getMinutes as Xe, getSeconds as pt, parseISO as ia, startOfWeek as Dn, endOfWeek as ua, setMonth as Lt, setYear as tt, addDays as dt, add as xn, addMonths as ct, subMonths as Tt, getWeek as da, getISOWeek as ca, differenceInCalendarDays as fa, eachDayOfInterval as $n, addYears as ma, subYears as va, sub as ya } from "date-fns";
function Wt() {
  return p(), B(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ae("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      ae("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      ae("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      ae("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
function ga() {
  return p(), B(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ae("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      ae("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
function Mn() {
  return p(), B(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ae("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function Tn() {
  return p(), B(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ae("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
function zn() {
  return p(), B(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ae("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      ae("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
function Kn() {
  return p(), B(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ae("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function jn() {
  return p(), B(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ae("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
const An = (e, n, a, t, o) => {
  const m = sn(e, n.slice(0, e.length), /* @__PURE__ */ new Date());
  return Et(m) && oa(m) ? t || o ? m : _e(m, {
    hours: +a.hours,
    minutes: +(a == null ? void 0 : a.minutes),
    seconds: +(a == null ? void 0 : a.seconds),
    milliseconds: 0
  }) : null;
}, ha = (e, n, a, t, o) => {
  const m = Array.isArray(a) ? a[0] : a;
  if (typeof n == "string")
    return An(e, n, m, t, o);
  if (Array.isArray(n)) {
    let g = null;
    for (const N of n)
      if (g = An(e, N, m, t, o), g)
        break;
    return g;
  }
  return typeof n == "function" ? n(e) : null;
}, M = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), pa = (e, n) => {
  if (n) {
    const t = (e.getMonth() + 1).toString().padStart(2, "0"), o = e.getDate().toString().padStart(2, "0"), m = e.getHours().toString().padStart(2, "0"), g = e.getMinutes().toString().padStart(2, "0");
    return `${e.getFullYear()}-${t}-${o}T${m}:${g}:00.000Z`;
  }
  const a = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(a).toISOString();
}, Ke = (e) => {
  let n = M(JSON.parse(JSON.stringify(e)));
  return n = Un(n, 0), n = Wn(n, 0), n = Hn(n, 0), n = hn(n, 0), n;
}, Ue = (e, n, a, t) => {
  let o = e ? M(e) : M();
  return (n || n === 0) && (o = Un(o, +n)), (a || a === 0) && (o = Wn(o, +a)), (t || t === 0) && (o = Hn(o, +t)), hn(o, 0);
}, Ie = (e, n) => !e || !n ? !1 : Pt(Ke(e), Ke(n)), ge = (e, n) => !e || !n ? !1 : ht(Ke(e), Ke(n)), Ve = (e, n) => !e || !n ? !1 : Ct(Ke(e), Ke(n)), Gn = (e, n, a) => e && e[0] && e[1] ? Ve(a, e[0]) && Ie(a, e[1]) : e && e[0] && n ? Ve(a, e[0]) && Ie(a, n) || Ie(a, e[0]) && Ve(a, n) : !1, Dt = (e) => {
  const n = _e(new Date(e), { date: 1 });
  return Ke(n);
}, qt = (e, n, a) => n && (a || a === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((t) => t === n ? [t, a] : [t, isNaN(+e[t]) ? void 0 : +e[t]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, $t = _t({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Zn = () => {
  const e = (t) => {
    $t.menuFocused = t;
  }, n = (t) => {
    $t.shiftKeyInMenu !== t && ($t.shiftKeyInMenu = t);
  };
  return {
    control: L(() => ({ shiftKeyInMenu: $t.shiftKeyInMenu, menuFocused: $t.menuFocused })),
    setMenuFocused: e,
    setShiftKey: n
  };
};
function pn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qn = { exports: {} };
(function(e) {
  function n(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
})(qn);
var ka = qn.exports, un = { exports: {} };
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t) {
    if (t === null || t === !0 || t === !1)
      return NaN;
    var o = Number(t);
    return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
  }
  e.exports = n.default;
})(un, un.exports);
var wa = un.exports;
const ba = /* @__PURE__ */ pn(wa);
var dn = { exports: {} };
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t) {
    var o = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return o.setUTCFullYear(t.getFullYear()), t.getTime() - o.getTime();
  }
  e.exports = n.default;
})(dn, dn.exports);
var Da = dn.exports;
const Sn = /* @__PURE__ */ pn(Da);
function $a(e, n) {
  var a = Sa(n);
  return a.formatToParts ? Ta(a, e) : Aa(a, e);
}
var Ma = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Ta(e, n) {
  try {
    for (var a = e.formatToParts(n), t = [], o = 0; o < a.length; o++) {
      var m = Ma[a[o].type];
      m >= 0 && (t[m] = parseInt(a[o].value, 10));
    }
    return t;
  } catch (g) {
    if (g instanceof RangeError)
      return [NaN];
    throw g;
  }
}
function Aa(e, n) {
  var a = e.format(n).replace(/\u200E/g, ""), t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(a);
  return [t[3], t[1], t[2], t[4], t[5], t[6]];
}
var Xt = {};
function Sa(e) {
  if (!Xt[e]) {
    var n = new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), a = n === "06/25/2014, 00:00:00" || n === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    Xt[e] = a ? new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return Xt[e];
}
function kn(e, n, a, t, o, m, g) {
  var N = /* @__PURE__ */ new Date(0);
  return N.setUTCFullYear(e, n, a), N.setUTCHours(t, o, m, g), N;
}
var Pn = 36e5, Pa = 6e4, Jt = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function wn(e, n, a) {
  var t, o;
  if (!e || (t = Jt.timezoneZ.exec(e), t))
    return 0;
  var m;
  if (t = Jt.timezoneHH.exec(e), t)
    return m = parseInt(t[1], 10), Cn(m) ? -(m * Pn) : NaN;
  if (t = Jt.timezoneHHMM.exec(e), t) {
    m = parseInt(t[1], 10);
    var g = parseInt(t[2], 10);
    return Cn(m, g) ? (o = Math.abs(m) * Pn + g * Pa, m > 0 ? -o : o) : NaN;
  }
  if (Na(e)) {
    n = new Date(n || Date.now());
    var N = a ? n : Ca(n), F = cn(N, e), C = a ? F : _a(n, F, e);
    return -C;
  }
  return NaN;
}
function Ca(e) {
  return kn(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function cn(e, n) {
  var a = $a(e, n), t = kn(
    a[0],
    a[1] - 1,
    a[2],
    a[3] % 24,
    a[4],
    a[5],
    0
  ).getTime(), o = e.getTime(), m = o % 1e3;
  return o -= m >= 0 ? m : 1e3 + m, t - o;
}
function _a(e, n, a) {
  var t = e.getTime(), o = t - n, m = cn(new Date(o), a);
  if (n === m)
    return n;
  o -= m - n;
  var g = cn(new Date(o), a);
  return m === g ? m : Math.max(m, g);
}
function Cn(e, n) {
  return -23 <= e && e <= 23 && (n == null || 0 <= n && n <= 59);
}
var _n = {};
function Na(e) {
  if (_n[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), _n[e] = !0, !0;
  } catch {
    return !1;
  }
}
var Ra = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
const Xn = Ra;
var Qt = 36e5, Nn = 6e4, Oa = 2, Ye = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: Xn
};
function fn(e, n) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  var a = n || {}, t = a.additionalDigits == null ? Oa : ba(a.additionalDigits);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var o = Ia(e), m = Ba(o.date, t), g = m.year, N = m.restDateString, F = Ya(N, g);
  if (isNaN(F))
    return /* @__PURE__ */ new Date(NaN);
  if (F) {
    var C = F.getTime(), W = 0, _;
    if (o.time && (W = Va(o.time), isNaN(W)))
      return /* @__PURE__ */ new Date(NaN);
    if (o.timeZone || a.timeZone) {
      if (_ = wn(o.timeZone || a.timeZone, new Date(C + W)), isNaN(_))
        return /* @__PURE__ */ new Date(NaN);
    } else
      _ = Sn(new Date(C + W)), _ = Sn(new Date(C + W + _));
    return new Date(C + W + _);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function Ia(e) {
  var n = {}, a = Ye.dateTimePattern.exec(e), t;
  if (a ? (n.date = a[1], t = a[3]) : (a = Ye.datePattern.exec(e), a ? (n.date = a[1], t = a[2]) : (n.date = null, t = e)), t) {
    var o = Ye.timeZone.exec(t);
    o ? (n.time = t.replace(o[1], ""), n.timeZone = o[1].trim()) : n.time = t;
  }
  return n;
}
function Ba(e, n) {
  var a = Ye.YYY[n], t = Ye.YYYYY[n], o;
  if (o = Ye.YYYY.exec(e) || t.exec(e), o) {
    var m = o[1];
    return {
      year: parseInt(m, 10),
      restDateString: e.slice(m.length)
    };
  }
  if (o = Ye.YY.exec(e) || a.exec(e), o) {
    var g = o[1];
    return {
      year: parseInt(g, 10) * 100,
      restDateString: e.slice(g.length)
    };
  }
  return {
    year: null
  };
}
function Ya(e, n) {
  if (n === null)
    return null;
  var a, t, o, m;
  if (e.length === 0)
    return t = /* @__PURE__ */ new Date(0), t.setUTCFullYear(n), t;
  if (a = Ye.MM.exec(e), a)
    return t = /* @__PURE__ */ new Date(0), o = parseInt(a[1], 10) - 1, On(n, o) ? (t.setUTCFullYear(n, o), t) : /* @__PURE__ */ new Date(NaN);
  if (a = Ye.DDD.exec(e), a) {
    t = /* @__PURE__ */ new Date(0);
    var g = parseInt(a[1], 10);
    return Fa(n, g) ? (t.setUTCFullYear(n, 0, g), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Ye.MMDD.exec(e), a) {
    t = /* @__PURE__ */ new Date(0), o = parseInt(a[1], 10) - 1;
    var N = parseInt(a[2], 10);
    return On(n, o, N) ? (t.setUTCFullYear(n, o, N), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Ye.Www.exec(e), a)
    return m = parseInt(a[1], 10) - 1, In(n, m) ? Rn(n, m) : /* @__PURE__ */ new Date(NaN);
  if (a = Ye.WwwD.exec(e), a) {
    m = parseInt(a[1], 10) - 1;
    var F = parseInt(a[2], 10) - 1;
    return In(n, m, F) ? Rn(n, m, F) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function Va(e) {
  var n, a, t;
  if (n = Ye.HH.exec(e), n)
    return a = parseFloat(n[1].replace(",", ".")), en(a) ? a % 24 * Qt : NaN;
  if (n = Ye.HHMM.exec(e), n)
    return a = parseInt(n[1], 10), t = parseFloat(n[2].replace(",", ".")), en(a, t) ? a % 24 * Qt + t * Nn : NaN;
  if (n = Ye.HHMMSS.exec(e), n) {
    a = parseInt(n[1], 10), t = parseInt(n[2], 10);
    var o = parseFloat(n[3].replace(",", "."));
    return en(a, t, o) ? a % 24 * Qt + t * Nn + o * 1e3 : NaN;
  }
  return null;
}
function Rn(e, n, a) {
  n = n || 0, a = a || 0;
  var t = /* @__PURE__ */ new Date(0);
  t.setUTCFullYear(e, 0, 4);
  var o = t.getUTCDay() || 7, m = n * 7 + a + 1 - o;
  return t.setUTCDate(t.getUTCDate() + m), t;
}
var Ea = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], La = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Jn(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function On(e, n, a) {
  if (n < 0 || n > 11)
    return !1;
  if (a != null) {
    if (a < 1)
      return !1;
    var t = Jn(e);
    if (t && a > La[n] || !t && a > Ea[n])
      return !1;
  }
  return !0;
}
function Fa(e, n) {
  if (n < 1)
    return !1;
  var a = Jn(e);
  return !(a && n > 366 || !a && n > 365);
}
function In(e, n, a) {
  return !(n < 0 || n > 52 || a != null && (a < 0 || a > 6));
}
function en(e, n, a) {
  return !(e != null && (e < 0 || e >= 25) || n != null && (n < 0 || n >= 60) || a != null && (a < 0 || a >= 60));
}
var mn = { exports: {} }, vn = { exports: {} };
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t, o) {
    if (t == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var m in o)
      Object.prototype.hasOwnProperty.call(o, m) && (t[m] = o[m]);
    return t;
  }
  e.exports = n.default;
})(vn, vn.exports);
var Ua = vn.exports;
(function(e, n) {
  var a = ka.default;
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = o;
  var t = a(Ua);
  function o(m) {
    return (0, t.default)({}, m);
  }
  e.exports = n.default;
})(mn, mn.exports);
var Wa = mn.exports;
const Ha = /* @__PURE__ */ pn(Wa);
function xa(e, n, a) {
  var t = fn(e, a), o = wn(n, t, !0), m = new Date(t.getTime() - o), g = /* @__PURE__ */ new Date(0);
  return g.setFullYear(m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate()), g.setHours(m.getUTCHours(), m.getUTCMinutes(), m.getUTCSeconds(), m.getUTCMilliseconds()), g;
}
function za(e, n, a) {
  if (typeof e == "string" && !e.match(Xn)) {
    var t = Ha(a);
    return t.timeZone = n, fn(e, t);
  }
  var o = fn(e, a), m = kn(
    o.getFullYear(),
    o.getMonth(),
    o.getDate(),
    o.getHours(),
    o.getMinutes(),
    o.getSeconds(),
    o.getMilliseconds()
  ).getTime(), g = wn(n, new Date(m));
  return new Date(m + g);
}
const Ka = (e, n = 3) => {
  const a = [];
  for (let t = 0; t < e.length; t += n)
    a.push([e[t], e[t + 1], e[t + 2]]);
  return a;
}, ja = (e, n) => {
  const a = [1, 2, 3, 4, 5, 6, 7].map((m) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${m}T00:00:00+00:00`)).slice(0, 2)), t = a.slice(0, n), o = a.slice(n + 1, a.length);
  return [a[n]].concat(...o).concat(...t);
}, Ga = (e, n) => {
  const a = [];
  for (let t = +e[0]; t <= +e[1]; t++)
    a.push({ value: +t, text: `${t}` });
  return n ? a.reverse() : a;
}, Za = (e, n) => {
  const a = new Intl.DateTimeFormat(e, { month: n, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((o) => {
    const m = o < 10 ? `0${o}` : o;
    return /* @__PURE__ */ new Date(`2017-${m}-01T00:00:00+00:00`);
  }).map((o, m) => {
    let g = a.format(o);
    return {
      text: g.charAt(0).toUpperCase() + g.substring(1),
      value: m
    };
  });
}, qa = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], $e = (e) => {
  const n = i(e);
  return n != null && n.$el ? n == null ? void 0 : n.$el : n;
}, Xa = (e) => Object.assign({ type: "dot" }, e), Qn = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Ut = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Se = (e) => e, Bn = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, Yn = (e) => Object.assign(
  {
    menuAppear: "",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down"
  },
  e
), Ja = (e) => Object.assign(
  {
    toggleOverlay: "Toggle overlay",
    menu: "Datepicker menu",
    input: "Datepicker input",
    calendarWrap: "Calendar wrapper",
    calendarDays: "Calendar days",
    openTimePicker: "Open time picker",
    closeTimePicker: "Close time Picker",
    incrementValue: (n) => `Increment ${n}`,
    decrementValue: (n) => `Decrement ${n}`,
    openTpOverlay: (n) => `Open ${n} overlay`,
    amPmButton: "Switch AM/PM mode",
    openYearsOverlay: "Open years overlay",
    openMonthsOverlay: "Open months overlay",
    nextMonth: "Next month",
    prevMonth: "Previous month",
    day: () => ""
  },
  e
), Qa = (e) => e === null ? 0 : typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2, er = (e, n, a) => e || (typeof a == "string" ? a : n), tr = (e) => typeof e == "boolean" ? e ? Yn({}) : !1 : Yn(e), nr = () => ({
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: !0,
  rangeSeparator: " - "
}), ar = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), rr = (e) => Object.assign({ showSelect: !0, showCancel: !0, showNow: !1, showPreview: !0 }, e), Le = (e) => {
  const n = () => {
    if (e.partialRange)
      return null;
    throw new Error(Ut.prop("partial-range"));
  }, a = L(() => ({
    ariaLabels: Ja(e.ariaLabels),
    textInputOptions: Object.assign(nr(), e.textInputOptions),
    multiCalendars: Qa(e.multiCalendars),
    previewFormat: er(e.previewFormat, e.format, m()),
    filters: ar(e.filters),
    transitions: tr(e.transitions),
    startTime: d(),
    actionRow: rr(e.actionRow)
  })), t = (u) => {
    if (e.range)
      return u();
    throw new Error(Ut.prop("range"));
  }, o = () => {
    const u = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${u}` : `hh:mm${u} aa`;
  }, m = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? o() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${o()}` : "MM/dd/yyyy", g = (u, l) => {
    if (typeof e.format == "function")
      return e.format(u);
    const r = l || m(), h = e.formatLocale ? { locale: e.formatLocale } : void 0;
    return Array.isArray(u) ? `${Mt(u[0], r, h)} ${e.modelAuto && !u[1] ? "" : a.value.textInputOptions.rangeSeparator || "-"} ${u[1] ? Mt(u[1], r, h) : ""}` : Mt(u, r, h);
  }, N = (u) => e.timezone ? xa(u, e.timezone) : u, F = (u) => e.timezone ? za(u, e.timezone) : u, C = L(() => (u) => {
    var l;
    return (l = e.hideNavigation) == null ? void 0 : l.includes(u);
  }), W = (u) => {
    const l = e.maxDate ? Ve(N(u), N(M(e.maxDate))) : !1, r = e.minDate ? Ie(N(u), N(M(e.minDate))) : !1, h = V(u, e.disabledDates), A = a.value.filters.months.map((le) => +le).includes(pe(u)), c = e.disabledWeekDays.length ? e.disabledWeekDays.some((le) => +le === sa(u)) : !1, P = e.allowedDates.length ? !e.allowedDates.some((le) => ge(N(M(le)), N(u))) : !1, f = we(u), E = f < +e.yearRange[0] || f > +e.yearRange[1];
    return !(l || r || h || A || E || c || P);
  }, _ = (u) => {
    const l = {
      hours: qe(M()),
      minutes: Xe(M()),
      seconds: e.enableSeconds ? pt(M()) : 0
    };
    return Object.assign(l, u);
  }, d = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [_(e.startTime[0]), _(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? _(e.startTime) : null, $ = (u) => !W(u), Q = (u) => Array.isArray(u) ? Et(u[0]) && (u[1] ? Et(u[1]) : !0) : u ? Et(u) : !1, x = (u) => u instanceof Date ? u : ia(u), z = (u) => {
    const l = Dn(N(u), { weekStartsOn: +e.weekStart }), r = ua(N(u), { weekStartsOn: +e.weekStart });
    return [l, r];
  }, V = (u, l) => Array.isArray(l) ? l.some((r) => ge(N(M(r)), N(u))) : l(M(JSON.parse(JSON.stringify(u)))), U = (u, l, r) => {
    let h = u ? M(u) : M();
    return (l || l === 0) && (h = Lt(h, l)), r && (h = tt(h, r)), h;
  }, O = (u) => _e(M(), { hours: qe(u), minutes: Xe(u), seconds: pt(u) }), Z = (u) => _e(M(), {
    hours: +u.hours || 0,
    minutes: +u.minutes || 0,
    seconds: +u.seconds || 0
  }), K = (u, l, r, h) => {
    if (!u)
      return !0;
    if (h) {
      const w = r === "max" ? Pt(u, l) : Ct(u, l), A = { seconds: 0, milliseconds: 0 };
      return w || ht(_e(u, A), _e(l, A));
    }
    return r === "max" ? u.getTime() <= l.getTime() : u.getTime() >= l.getTime();
  }, te = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, re = (u) => Array.isArray(u) ? [u[0] ? O(u[0]) : null, u[1] ? O(u[1]) : null] : O(u), ue = (u) => {
    const l = e.maxTime ? Z(e.maxTime) : M(e.maxDate);
    return Array.isArray(u) ? K(u[0], l, "max", !!e.maxDate) && K(u[1], l, "max", !!e.maxDate) : K(u, l, "max", !!e.maxDate);
  }, ce = (u, l) => {
    const r = e.minTime ? Z(e.minTime) : M(e.minDate);
    return Array.isArray(u) ? K(u[0], r, "min", !!e.minDate) && K(u[1], r, "min", !!e.minDate) && l : K(u, r, "min", !!e.minDate) && l;
  }, fe = (u) => {
    let l = !0;
    if (!u || te())
      return !0;
    const r = !e.minDate && !e.maxDate ? re(u) : u;
    return (e.maxTime || e.maxDate) && (l = ue(Se(r))), (e.minTime || e.minDate) && (l = ce(Se(r), l)), l;
  }, R = (u, l) => {
    const r = M(JSON.parse(JSON.stringify(u))), h = [];
    for (let w = 0; w < 7; w++) {
      const A = dt(r, w), c = pe(A) !== l;
      h.push({
        text: e.hideOffsetDates && c ? "" : A.getDate(),
        value: A,
        current: !c,
        classData: {}
      });
    }
    return h;
  }, b = (u, l) => {
    const r = [], h = M(N(new Date(l, u))), w = M(N(new Date(l, u + 1, 0))), A = e.weekStart, c = Dn(h, { weekStartsOn: A }), P = (f) => {
      const E = R(f, u);
      if (r.push({ days: E }), !r[r.length - 1].days.some(
        (le) => ge(Ke(le.value), Ke(w))
      )) {
        const le = dt(f, 7);
        P(le);
      }
    };
    if (P(c), e.sixWeeks && r.length < 6) {
      const f = 6 - r.length, E = (h.getDay() + 7 - A) % 7, be = 6 - (w.getDay() + 7 - A) % 7, [He, ne] = (() => {
        switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
          case "prepend":
            return [!0, !1];
          case "center":
            return [E == 0, !0];
          case "fair":
            return [E == 0 || be > E, !0];
          default:
          case "append":
            return [!1, !1];
        }
      })();
      for (let Fe = 1; Fe <= f; Fe++)
        if (ne ? !!(Fe % 2) == He : He) {
          const Te = r[0].days[0], xe = R(dt(Te.value, -7), pe(h));
          r.unshift({ days: xe });
        } else {
          const Te = r[r.length - 1], xe = Te.days[Te.days.length - 1], lt = R(dt(xe.value, 1), pe(h));
          r.push({ days: lt });
        }
    }
    return r;
  }, v = (u, l, r) => [_e(M(u), { date: 1 }), _e(M(), { month: l, year: r, date: 1 })], Y = (u, l) => Ie(...v(e.minDate, u, l)) || ge(...v(e.minDate, u, l)), I = (u, l) => Ve(...v(e.maxDate, u, l)) || ge(...v(e.maxDate, u, l)), T = (u, l, r) => {
    let h = !1;
    return e.maxDate && r && I(u, l) && (h = !0), e.minDate && !r && Y(u, l) && (h = !0), h;
  };
  return {
    checkPartialRangeValue: n,
    checkRangeEnabled: t,
    getZonedDate: N,
    getZonedToUtc: F,
    formatDate: g,
    getDefaultPattern: m,
    validateDate: W,
    getDefaultStartTime: d,
    isDisabled: $,
    isValidDate: Q,
    sanitizeDate: x,
    getWeekFromDate: z,
    matchDate: V,
    setDateMonthOrYear: U,
    isValidTime: fe,
    getCalendarDays: b,
    validateMonthYearInRange: (u, l, r, h) => {
      let w = !1;
      return h ? e.minDate && e.maxDate ? w = T(u, l, r) : (e.minDate && Y(u, l) || e.maxDate && I(u, l)) && (w = !0) : w = !0, w;
    },
    validateMaxDate: I,
    validateMinDate: Y,
    assignDefaultTime: _,
    defaults: a,
    hideNavigationButtons: C
  };
}, ke = _t({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), tn = H(null), Bt = H(!1), nn = H(!1), an = H(!1), rn = H(!1), Be = H(0), Ne = H(0), at = () => {
  const e = L(() => Bt.value ? [...ke.selectionGrid, ke.actionRow].filter((V) => V.length) : nn.value ? [
    ...ke.timePicker[0],
    ...ke.timePicker[1],
    rn.value ? [] : [tn.value],
    ke.actionRow
  ].filter((V) => V.length) : an.value ? [...ke.monthPicker, ke.actionRow] : [ke.monthYear, ...ke.calendar, ke.time, ke.actionRow].filter((V) => V.length)), n = (V) => {
    Be.value = V ? Be.value + 1 : Be.value - 1;
    let U = null;
    e.value[Ne.value] && (U = e.value[Ne.value][Be.value]), U || (Be.value = V ? Be.value - 1 : Be.value + 1);
  }, a = (V) => {
    if (Ne.value === 0 && !V || Ne.value === e.value.length && V)
      return;
    Ne.value = V ? Ne.value + 1 : Ne.value - 1, e.value[Ne.value] ? e.value[Ne.value] && !e.value[Ne.value][Be.value] && Be.value !== 0 && (Be.value = e.value[Ne.value].length - 1) : Ne.value = V ? Ne.value - 1 : Ne.value + 1;
  }, t = (V) => {
    let U = null;
    e.value[Ne.value] && (U = e.value[Ne.value][Be.value]), U ? U.focus({ preventScroll: !Bt.value }) : Be.value = V ? Be.value - 1 : Be.value + 1;
  }, o = () => {
    n(!0), t(!0);
  }, m = () => {
    n(!1), t(!1);
  }, g = () => {
    a(!1), t(!0);
  }, N = () => {
    a(!0), t(!0);
  }, F = (V, U) => {
    ke[U] = V;
  }, C = (V, U) => {
    ke[U] = V;
  }, W = () => {
    Be.value = 0, Ne.value = 0;
  };
  return {
    buildMatrix: F,
    buildMultiLevelMatrix: C,
    setTimePickerBackRef: (V) => {
      tn.value = V;
    },
    setSelectionGrid: (V) => {
      Bt.value = V, W(), V || (ke.selectionGrid = []);
    },
    setTimePicker: (V, U = !1) => {
      nn.value = V, rn.value = U, W(), V || (ke.timePicker[0] = [], ke.timePicker[1] = []);
    },
    setTimePickerElements: (V, U = 0) => {
      ke.timePicker[U] = V;
    },
    arrowRight: o,
    arrowLeft: m,
    arrowUp: g,
    arrowDown: N,
    clearArrowNav: () => {
      ke.monthYear = [], ke.calendar = [], ke.time = [], ke.actionRow = [], ke.selectionGrid = [], ke.timePicker[0] = [], ke.timePicker[1] = [], Bt.value = !1, nn.value = !1, rn.value = !1, an.value = !1, W(), tn.value = null;
    },
    setMonthPicker: (V) => {
      an.value = V, W();
    },
    refSets: ke
    // exposed for testing
  };
}, Vn = (e) => Array.isArray(e), it = (e) => Array.isArray(e), En = (e) => Array.isArray(e) && e.length === 2, lr = (e, n, a, t, o) => {
  const {
    getDefaultStartTime: m,
    isDisabled: g,
    sanitizeDate: N,
    getWeekFromDate: F,
    setDateMonthOrYear: C,
    validateMonthYearInRange: W,
    defaults: _
  } = Le(e), d = L({
    get: () => e.internalModelValue,
    set: (s) => {
      !e.readonly && !e.disabled && n("update:internal-model-value", s);
    }
  }), $ = H([]);
  nt(d, () => {
    te();
  });
  const Q = St(e, "multiCalendars");
  nt(Q, () => {
    de(0);
  });
  const x = H([{ month: pe(M()), year: we(M()) }]), z = _t({
    hours: e.range ? [qe(M()), qe(M())] : qe(M()),
    minutes: e.range ? [Xe(M()), Xe(M())] : Xe(M()),
    seconds: e.range ? [0, 0] : 0
  }), V = L(
    () => (s) => x.value[s] ? x.value[s].month : 0
  ), U = L(
    () => (s) => x.value[s] ? x.value[s].year : 0
  ), O = L(() => e.flow && e.flow.length && !e.partialFlow ? o.value === e.flow.length : !0), Z = (s, D, q) => {
    var ee, De;
    x.value[s] || (x.value[s] = { month: 0, year: 0 }), x.value[s].month = D === null ? (ee = x.value[s]) == null ? void 0 : ee.month : D, x.value[s].year = q === null ? (De = x.value[s]) == null ? void 0 : De.year : q;
  }, K = (s, D) => {
    z[s] = D;
  };
  We(() => {
    d.value || (e.startDate && (Z(0, pe(M(e.startDate)), we(M(e.startDate))), _.value.multiCalendars && de(0)), _.value.startTime && T()), te(!0);
  });
  const te = (s = !1) => {
    if (d.value)
      return Array.isArray(d.value) ? ($.value = d.value, R(s)) : ue(d.value);
    if (e.timePicker)
      return b();
    if (e.monthPicker && !e.range)
      return v();
    if (e.yearPicker && !e.range)
      return Y();
    if (_.value.multiCalendars && s && !e.startDate)
      return re(M(), s);
  }, re = (s, D = !1) => {
    if ((!_.value.multiCalendars || !e.multiStatic || D) && Z(0, pe(s), we(s)), _.value.multiCalendars)
      for (let q = 1; q < _.value.multiCalendars; q++) {
        const ee = _e(M(), { month: V.value(q - 1), year: U.value(q - 1) }), De = xn(ee, { months: 1 });
        x.value[q] = { month: pe(De), year: we(De) };
      }
  }, ue = (s) => {
    re(s), K("hours", qe(s)), K("minutes", Xe(s)), K("seconds", pt(s));
  }, ce = (s, D) => {
    re(s[0], D);
    const q = (ee, De) => [
      ee(s[0]),
      s[1] ? ee(s[1]) : z[De][1]
    ];
    K("hours", q(qe, "hours")), K("minutes", q(Xe, "minutes")), K("seconds", q(pt, "seconds"));
  }, fe = (s, D) => {
    if ((e.range || e.weekPicker) && !e.multiDates)
      return ce(s, D);
    if (e.multiDates) {
      const q = s[s.length - 1];
      return ue(q);
    }
  }, R = (s) => {
    const D = d.value;
    fe(D, s), _.value.multiCalendars && e.multiCalendarsSolo && u();
  }, b = () => {
    if (T(), !e.range)
      d.value = Ue(M(), z.hours, z.minutes, I());
    else {
      const s = z.hours, D = z.minutes;
      d.value = [
        Ue(M(), s[0], D[0], I()),
        Ue(M(), s[1], D[1], I(!1))
      ];
    }
  }, v = () => {
    e.multiDates ? d.value = [C(M(), V.value(0), U.value(0))] : d.value = C(M(), V.value(0), U.value(0));
  }, Y = () => {
    d.value = M();
  }, I = (s = !0) => e.enableSeconds ? Array.isArray(z.seconds) ? s ? z.seconds[0] : z.seconds[1] : z.seconds : 0, T = () => {
    const s = m();
    if (s) {
      const D = Array.isArray(s), q = D ? [+s[0].hours, +s[1].hours] : +s.hours, ee = D ? [+s[0].minutes, +s[1].minutes] : +s.minutes, De = D ? [+s[0].seconds, +s[1].seconds] : +s.seconds;
      K("hours", q), K("minutes", ee), e.enableSeconds && K("seconds", De);
    }
  }, y = () => Array.isArray(d.value) && d.value.length ? d.value[d.value.length - 1] : null, u = () => {
    if (Array.isArray(d.value) && d.value.length === 2) {
      const s = M(
        M(d.value[1] ? d.value[1] : ct(d.value[0], 1))
      ), [D, q] = [pe(d.value[0]), we(d.value[0])], [ee, De] = [pe(d.value[1]), we(d.value[1])];
      (D !== ee || D === ee && q !== De) && e.multiCalendarsSolo && Z(1, pe(s), we(s));
    }
  }, l = (s) => {
    const D = ct(s, 1);
    return { month: pe(D), year: we(D) };
  }, r = (s) => {
    const D = pe(M(s)), q = we(M(s));
    if (Z(0, D, q), _.value.multiCalendars > 0)
      for (let ee = 1; ee < _.value.multiCalendars; ee++) {
        const De = l(
          _e(M(s), { year: V.value(ee - 1), month: U.value(ee - 1) })
        );
        Z(ee, De.month, De.year);
      }
  }, h = (s) => {
    if (d.value && Array.isArray(d.value))
      if (d.value.some((D) => ge(s, D))) {
        const D = d.value.filter((q) => !ge(q, s));
        d.value = D.length ? D : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > d.value.length || !e.multiDatesLimit) && d.value.push(s);
    else
      d.value = [s];
  }, w = (s, D) => {
    const q = Ve(s, D) ? D : s, ee = Ve(D, s) ? D : s;
    return $n({ start: q, end: ee });
  }, A = (s, D = 0) => {
    if (Array.isArray(d.value) && d.value[D]) {
      const q = fa(s, d.value[D]), ee = w(d.value[D], s), De = ee.length === 1 ? 0 : ee.filter((j) => g(j)).length, k = Math.abs(q) - De;
      if (e.minRange && e.maxRange)
        return k >= +e.minRange && k <= +e.maxRange;
      if (e.minRange)
        return k >= +e.minRange;
      if (e.maxRange)
        return k <= +e.maxRange;
    }
    return !0;
  }, c = (s) => Array.isArray(d.value) && d.value.length === 2 ? e.fixedStart && (Ve(s, d.value[0]) || ge(s, d.value[0])) ? [d.value[0], s] : e.fixedEnd && (Ie(s, d.value[1]) || ge(s, d.value[1])) ? [s, d.value[1]] : (n("invalid-fixed-range", s), d.value) : [], P = () => {
    e.autoApply && O.value && n("auto-apply", e.partialFlow);
  }, f = () => {
    e.autoApply && n("select-date");
  }, E = (s) => !$n({ start: s[0], end: s[1] }).some((q) => g(q)), le = (s) => (d.value = F(M(s.value)), P()), be = (s) => {
    const D = Ue(M(s.value), z.hours, z.minutes, I());
    e.multiDates ? h(D) : d.value = D, a(), P();
  }, He = () => {
    $.value = d.value ? d.value.slice() : [], $.value.length === 2 && !(e.fixedStart || e.fixedEnd) && ($.value = []);
  }, ne = (s, D) => {
    const q = [M(s.value), dt(M(s.value), +e.autoRange)];
    E(q) && (D && r(s.value), $.value = q);
  }, Fe = (s) => {
    Ge(s.value) || !A(s.value, e.fixedStart ? 0 : 1) || ($.value = c(M(s.value)));
  }, Ge = (s) => e.noDisabledRange ? w($.value[0], s).some((q) => g(q)) : !1, Te = (s, D) => {
    if (He(), e.autoRange)
      return ne(s, D);
    if (e.fixedStart || e.fixedEnd)
      return Fe(s);
    $.value[0] ? A(M(s.value)) && !Ge(s.value) && (Ie(M(s.value), M($.value[0])) ? $.value.unshift(M(s.value)) : $.value[1] = M(s.value)) : $.value[0] = M(s.value);
  }, xe = (s) => {
    $.value[s] = Ue(
      $.value[s],
      z.hours[s],
      z.minutes[s],
      I(s !== 1)
    );
  }, lt = () => {
    $.value.length && ($.value[0] && !$.value[1] ? xe(0) : (xe(0), xe(1), a()), d.value = $.value.slice(), $.value[0] && $.value[1] && e.autoApply && n("auto-apply"), $.value[0] && !$.value[1] && e.modelAuto && e.autoApply && n("auto-apply"));
  }, wt = (s, D = !1) => {
    if (!(g(s.value) || !s.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return le(s);
      if (!e.range)
        return be(s);
      it(z.hours) && it(z.minutes) && !e.multiDates && (Te(s, D), lt());
    }
  }, X = (s) => {
    const D = s[0];
    return e.weekNumbers === "local" ? da(D.value, { weekStartsOn: +e.weekStart }) : e.weekNumbers === "iso" ? ca(D.value) : typeof e.weekNumbers == "function" ? e.weekNumbers(D.value) : "";
  }, de = (s) => {
    for (let D = s - 1; D >= 0; D--) {
      const q = Tt(_e(M(), { month: V.value(D + 1), year: U.value(D + 1) }), 1);
      Z(D, pe(q), we(q));
    }
    for (let D = s + 1; D <= _.value.multiCalendars - 1; D++) {
      const q = ct(_e(M(), { month: V.value(D - 1), year: U.value(D - 1) }), 1);
      Z(D, pe(q), we(q));
    }
  }, oe = (s) => C(M(), V.value(s), U.value(s)), ot = (s) => Ue(s, z.hours, z.minutes, I()), st = (s) => {
    h(oe(s));
  }, xt = (s, D) => {
    const q = e.monthPicker ? V.value(s) !== D.month || !D.fromNav : U.value(s) !== D.year || !D.fromNav;
    if (Z(s, D.month, D.year), _.value.multiCalendars && !e.multiCalendarsSolo && de(s), e.monthPicker || e.yearPicker)
      if (e.multiDates)
        q && st(s);
      else if (e.range) {
        if (q && A(oe(s))) {
          let ee = d.value ? d.value.slice() : [];
          ee.length === 2 && ee[1] !== null && (ee = []), ee.length ? Ie(oe(s), ee[0]) ? ee.unshift(oe(s)) : ee[1] = oe(s) : ee = [oe(s)], d.value = ee;
        }
      } else
        d.value = oe(s);
    n("update-month-year", { instance: s, month: D.month, year: D.year }), t(e.multiCalendarsSolo ? s : void 0);
  }, zt = async (s = !1) => {
    if (e.autoApply && (e.monthPicker || e.yearPicker)) {
      await Qe();
      const D = e.monthPicker ? s : !1;
      e.range ? n("auto-apply", D || !d.value || d.value.length === 1) : n("auto-apply", D);
    }
    a();
  }, Nt = (s, D) => {
    const q = _e(M(), { month: V.value(D), year: U.value(D) }), ee = s < 0 ? ct(q, 1) : Tt(q, 1);
    W(pe(ee), we(ee), s < 0, e.preventMinMaxNavigation) && (Z(D, pe(ee), we(ee)), _.value.multiCalendars && !e.multiCalendarsSolo && de(D), n("update-month-year", { instance: D, month: pe(ee), year: we(ee) }), t());
  }, bt = (s) => {
    Vn(s) && Vn(d.value) && it(z.hours) && it(z.minutes) ? (s[0] && d.value[0] && (d.value[0] = Ue(s[0], z.hours[0], z.minutes[0], I())), s[1] && d.value[1] && (d.value[1] = Ue(s[1], z.hours[1], z.minutes[1], I(!1)))) : e.multiDates && Array.isArray(d.value) ? d.value[d.value.length - 1] = ot(s) : !e.range && !En(s) && (d.value = ot(s)), n("time-update");
  }, Kt = (s, D = !0, q = !1) => {
    const ee = D ? s : z.hours, De = !D && !q ? s : z.minutes, k = q ? s : z.seconds;
    if (e.range && En(d.value) && it(ee) && it(De) && it(k) && !e.disableTimeRangeValidation) {
      const j = (Me) => Ue(d.value[Me], ee[Me], De[Me], k[Me]), Ae = (Me) => hn(d.value[Me], 0);
      if (ge(d.value[0], d.value[1]) && (Ct(j(0), Ae(1)) || Pt(j(1), Ae(0))))
        return;
    }
    if (K("hours", ee), K("minutes", De), K("seconds", k), d.value)
      if (e.multiDates) {
        const j = y();
        j && bt(j);
      } else
        bt(d.value);
    else
      e.timePicker && bt(e.range ? [M(), M()] : M());
    a();
  }, jt = (s, D) => {
    e.monthChangeOnScroll && Nt(e.monthChangeOnScroll !== "inverse" ? -s.deltaY : s.deltaY, D);
  }, Gt = (s, D, q = !1) => {
    e.monthChangeOnArrows && e.vertical === q && Rt(s, D);
  }, Rt = (s, D) => {
    Nt(s === "right" ? -1 : 1, D);
  };
  return {
    time: z,
    month: V,
    year: U,
    modelValue: d,
    calendars: x,
    monthYearSelect: zt,
    isDisabled: g,
    updateTime: Kt,
    getWeekNum: X,
    selectDate: wt,
    updateMonthYear: xt,
    handleScroll: jt,
    getMarker: (s) => e.markers.find((D) => ge(N(s.value), N(D.date))),
    handleArrow: Gt,
    handleSwipe: Rt,
    selectCurrentDate: () => {
      e.range ? d.value && Array.isArray(d.value) && d.value[0] ? d.value = Ie(M(), d.value[0]) ? [M(), d.value[0]] : [d.value[0], M()] : d.value = [M()] : d.value = M(), f();
    },
    presetDateRange: (s, D) => {
      D || s.length && s.length <= 2 && e.range && (d.value = s.map((q) => M(q)), f(), e.multiCalendars && Qe().then(() => te(!0)));
    }
  };
}, or = (e, n, a) => {
  const t = H(), {
    getZonedToUtc: o,
    getZonedDate: m,
    formatDate: g,
    getDefaultPattern: N,
    checkRangeEnabled: F,
    checkPartialRangeValue: C,
    isValidDate: W,
    setDateMonthOrYear: _,
    defaults: d
  } = Le(n), $ = H(""), Q = St(n, "format");
  nt(t, () => {
    e("internal-model-change", t.value);
  }), nt(Q, () => {
    u();
  });
  const x = (f) => {
    const E = f || M();
    return n.modelType ? r(E) : {
      hours: qe(E),
      minutes: Xe(E),
      seconds: n.enableSeconds ? pt(E) : 0
    };
  }, z = (f) => n.modelType ? r(f) : { month: pe(f), year: we(f) }, V = (f) => Array.isArray(f) ? F(() => [
    tt(M(), f[0]),
    f[1] ? tt(M(), f[1]) : C()
  ]) : tt(M(), +f), U = (f, E) => (typeof f == "string" || typeof f == "number") && n.modelType ? l(f) : E, O = (f) => Array.isArray(f) ? [
    U(
      f[0],
      Ue(null, +f[0].hours, +f[0].minutes, f[0].seconds)
    ),
    U(
      f[1],
      Ue(null, +f[1].hours, +f[1].minutes, f[1].seconds)
    )
  ] : U(f, Ue(null, f.hours, f.minutes, f.seconds)), Z = (f) => Array.isArray(f) ? n.multiDates ? f.map((E) => U(E, _(null, +E.month, +E.year))) : F(() => [
    U(f[0], _(null, +f[0].month, +f[0].year)),
    U(
      f[1],
      f[1] ? _(null, +f[1].month, +f[1].year) : C()
    )
  ]) : U(f, _(null, +f.month, +f.year)), K = (f) => {
    if (Array.isArray(f))
      return f.map((E) => l(E));
    throw new Error(Ut.dateArr("multi-dates"));
  }, te = (f) => {
    if (Array.isArray(f))
      return [M(f[0]), M(f[1])];
    throw new Error(Ut.dateArr("week-picker"));
  }, re = (f) => n.modelAuto ? Array.isArray(f) ? [l(f[0]), l(f[1])] : n.autoApply ? [l(f)] : [l(f), null] : Array.isArray(f) ? F(() => [
    l(f[0]),
    f[1] ? l(f[1]) : C()
  ]) : l(f), ue = () => {
    Array.isArray(t.value) && n.range && t.value.length === 1 && t.value.push(C());
  }, ce = () => {
    const f = t.value;
    return [
      r(f[0]),
      f[1] ? r(f[1]) : C()
    ];
  }, fe = () => t.value[1] ? ce() : r(Se(t.value[0])), R = () => (t.value || []).map((f) => r(f)), b = () => (ue(), n.modelAuto ? fe() : n.multiDates ? R() : Array.isArray(t.value) ? F(() => ce()) : r(Se(t.value))), v = (f) => f ? n.timePicker ? O(Se(f)) : n.monthPicker ? Z(Se(f)) : n.yearPicker ? V(Se(f)) : n.multiDates ? K(Se(f)) : n.weekPicker ? te(Se(f)) : re(Se(f)) : null, Y = (f) => {
    const E = v(f);
    W(Se(E)) ? (t.value = Se(E), u()) : (t.value = null, $.value = "");
  }, I = () => {
    var E;
    const f = (le) => {
      var be;
      return Mt(le, (be = d.value.textInputOptions) == null ? void 0 : be.format);
    };
    return `${f(t.value[0])} ${(E = d.value.textInputOptions) == null ? void 0 : E.rangeSeparator} ${t.value[1] ? f(t.value[1]) : ""}`;
  }, T = () => {
    var f;
    return a.value && t.value ? Array.isArray(t.value) ? I() : Mt(t.value, (f = d.value.textInputOptions) == null ? void 0 : f.format) : g(t.value);
  }, y = () => {
    var f;
    return t.value ? n.multiDates ? t.value.map((E) => g(E)).join("; ") : n.textInput && typeof ((f = d.value.textInputOptions) == null ? void 0 : f.format) == "string" ? T() : g(t.value) : "";
  }, u = () => {
    !n.format || typeof n.format == "string" ? $.value = y() : $.value = n.format(t.value);
  }, l = (f) => {
    if (n.utc) {
      const E = new Date(f);
      return n.utc === "preserve" ? new Date(E.getTime() + E.getTimezoneOffset() * 6e4) : E;
    }
    return n.modelType ? n.modelType === "date" || n.modelType === "timestamp" ? m(new Date(f)) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? sn(f, N(), /* @__PURE__ */ new Date()) : m(sn(f, n.modelType, /* @__PURE__ */ new Date())) : m(new Date(f));
  }, r = (f) => f ? n.utc ? pa(f, n.utc === "preserve") : n.modelType ? n.modelType === "timestamp" ? +o(f) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? g(o(f)) : g(o(f), n.modelType) : o(f) : "", h = (f) => {
    e("update:model-value", f);
  }, w = (f) => Array.isArray(t.value) ? n.multiDates ? t.value.map((E) => f(E)) : [
    f(t.value[0]),
    t.value[1] ? f(t.value[1]) : C()
  ] : f(Se(t.value)), A = (f) => h(Se(w(f)));
  return {
    inputValue: $,
    internalModelValue: t,
    checkBeforeEmit: () => t.value ? n.range ? n.partialRange ? t.value.length >= 1 : t.value.length === 2 : !!t.value : !1,
    parseExternalModelValue: Y,
    formatInputValue: u,
    emitModelValue: () => (u(), n.monthPicker ? A(z) : n.timePicker ? A(x) : n.yearPicker ? A(we) : n.weekPicker ? h(t.value) : h(b()))
  };
}, sr = (e, n) => {
  const { validateMonthYearInRange: a, validateMaxDate: t, validateMinDate: o, defaults: m } = Le(e), g = (_, d) => {
    let $ = _;
    return m.value.filters.months.includes(pe($)) ? ($ = d ? ct(_, 1) : Tt(_, 1), g($, d)) : $;
  }, N = (_, d) => {
    let $ = _;
    return m.value.filters.years.includes(we($)) ? ($ = d ? ma(_, 1) : va(_, 1), N($, d)) : $;
  }, F = (_) => {
    const d = _e(/* @__PURE__ */ new Date(), { month: e.month, year: e.year });
    let $ = _ ? ct(d, 1) : Tt(d, 1);
    e.disableYearSelect && ($ = tt($, e.year));
    let Q = pe($), x = we($);
    m.value.filters.months.includes(Q) && ($ = g($, _), Q = pe($), x = we($)), m.value.filters.years.includes(x) && ($ = N($, _), x = we($)), a(Q, x, _, e.preventMinMaxNavigation) && C(Q, x);
  }, C = (_, d) => {
    n("update-month-year", { month: _, year: d });
  }, W = L(() => (_) => {
    if (!e.preventMinMaxNavigation || _ && !e.maxDate || !_ && !e.minDate)
      return !1;
    const d = _e(/* @__PURE__ */ new Date(), { month: e.month, year: e.year }), $ = _ ? ct(d, 1) : Tt(d, 1), Q = [pe($), we($)];
    return _ ? !t(...Q) : !o(...Q);
  });
  return { handleMonthYearChange: F, isDisabled: W, updateMonthYear: C };
};
var Ft = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Ft || {});
const ir = (e, n, a, t) => {
  const o = H({
    top: "0",
    left: "0",
    transform: "none",
    opacity: "0"
  }), m = H(!1), g = St(t, "teleportCenter"), N = L(() => m.value ? "-100%" : "0"), F = () => {
    C(), o.value.opacity = "0";
  };
  nt(g, () => {
    U();
  }), We(() => {
    C();
  });
  const C = () => {
    const b = $e(n);
    if (b) {
      const { top: v, left: Y, width: I, height: T } = Q(b);
      o.value.top = `${v + T / 2}px`, $(Y, I, 50);
    }
  }, W = (b) => {
    if (t.teleport) {
      const v = b.getBoundingClientRect();
      return {
        left: v.left + window.scrollX,
        top: v.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, _ = (b, v) => {
    o.value.left = `${b + v}px`, o.value.transform = `translate(-100%, ${N.value})`;
  }, d = (b) => {
    o.value.left = `${b}px`, o.value.transform = `translate(0, ${N.value})`;
  }, $ = (b, v, Y) => {
    t.position === Ft.left && d(b), t.position === Ft.right && _(b, v), t.position === Ft.center && (o.value.left = `${b + v / 2}px`, o.value.transform = Y ? `translate(-50%, -${Y}%)` : `translate(-50%, ${N.value})`);
  }, Q = (b) => {
    const { width: v, height: Y } = b.getBoundingClientRect(), { top: I, left: T } = t.altPosition ? t.altPosition(b) : W(b);
    return { top: +I, left: +T, width: v, height: Y };
  }, x = () => {
    const b = $e(n);
    if (b) {
      const { top: v, left: Y, width: I, height: T } = Q(b), y = re();
      o.value.top = `${v + T / 2}px`, $(Y, I, y === "top" ? 100 : 0);
    }
  }, z = () => {
    o.value.left = "50%", o.value.top = "50%", o.value.transform = "translate(-50%, -50%)", o.value.position = "fixed", delete o.value.opacity;
  }, V = () => {
    const b = $e(n), { top: v, left: Y, transform: I } = t.altPosition(b);
    o.value = { top: `${v}px`, left: `${Y}px`, transform: I || "" };
  }, U = (b = !0) => {
    if (!t.inline)
      return g.value ? z() : t.altPosition !== null ? V() : (b && a("recalculate-position"), ce());
  }, O = ({
    inputEl: b,
    menuEl: v,
    left: Y,
    width: I
  }) => {
    window.screen.width > 768 && $(Y, I), te(b, v);
  }, Z = (b, v) => {
    const { top: Y, left: I, height: T, width: y } = Q(b);
    o.value.top = `${T + Y + +t.offset}px`, m.value = !1, O({ inputEl: b, menuEl: v, left: I, width: y });
  }, K = (b, v) => {
    const { top: Y, left: I, width: T } = Q(b);
    o.value.top = `${Y - +t.offset}px`, m.value = !0, O({ inputEl: b, menuEl: v, left: I, width: T });
  }, te = (b, v) => {
    if (t.autoPosition) {
      const { left: Y, width: I } = Q(b), { left: T, right: y } = v.getBoundingClientRect();
      return T <= 0 || T <= Y ? d(Y) : y >= document.documentElement.clientWidth ? _(Y, I) : $(Y, I);
    }
  }, re = () => {
    const b = $e(e), v = $e(n);
    if (b && v) {
      const { height: Y } = b.getBoundingClientRect(), { top: I, height: T } = v.getBoundingClientRect(), u = window.innerHeight - I - T, l = I;
      return Y <= u ? "bottom" : Y > u && Y <= l ? "top" : u >= l ? "bottom" : "top";
    }
    return "bottom";
  }, ue = (b, v) => re() === "bottom" ? Z(b, v) : K(b, v), ce = () => {
    const b = $e(n), v = $e(e);
    if (b && v)
      return t.autoPosition ? ue(b, v) : Z(b, v);
  }, fe = function(b) {
    if (b) {
      const v = b.scrollHeight > b.clientHeight, I = window.getComputedStyle(b).overflowY.indexOf("hidden") !== -1;
      return v && !I;
    }
    return !0;
  }, R = function(b) {
    return !b || b === document.body || b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : fe(b) ? b : R(b.parentNode);
  };
  return { openOnTop: m, menuStyle: o, resetPosition: F, setMenuPosition: U, setInitialPosition: x, getScrollableParent: R };
}, gt = [
  { name: "clock-icon", use: ["time", "calendar"] },
  { name: "arrow-left", use: ["month-year", "calendar"] },
  { name: "arrow-right", use: ["month-year", "calendar"] },
  { name: "arrow-up", use: ["time", "calendar"] },
  { name: "arrow-down", use: ["time", "calendar"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar"] },
  { name: "day", use: ["calendar"] },
  { name: "month-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay", use: ["month-year"] },
  { name: "month-overlay", use: ["month-year"] },
  { name: "month-overlay-header", use: ["month-year"] },
  { name: "year-overlay-header", use: ["month-year"] },
  { name: "hours-overlay-value", use: ["calendar", "time"] },
  { name: "minutes-overlay-value", use: ["calendar", "time"] },
  { name: "seconds-overlay-value", use: ["calendar", "time"] },
  { name: "hours", use: ["calendar", "time"] },
  { name: "minutes", use: ["calendar", "time"] },
  { name: "month", use: ["calendar", "month-year"] },
  { name: "year", use: ["calendar", "month-year"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar"] },
  { name: "marker-tooltip", use: ["calendar"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time"] },
  { name: "am-pm-button", use: ["calendar", "time"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year"] },
  { name: "time-picker", use: ["menu"] },
  { name: "action-row", use: ["action"] }
], ur = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], dr = {
  all: () => gt,
  monthYear: () => gt.filter((e) => e.use.includes("month-year")),
  input: () => ur,
  timePicker: () => gt.filter((e) => e.use.includes("time")),
  action: () => gt.filter((e) => e.use.includes("action")),
  calendar: () => gt.filter((e) => e.use.includes("calendar")),
  menu: () => gt.filter((e) => e.use.includes("menu"))
}, ft = (e, n, a) => {
  const t = [];
  return dr[n]().forEach((o) => {
    e[o.name] && t.push(o.name);
  }), a && a.length && a.forEach((o) => {
    o.slot && t.push(o.slot);
  }), t;
}, Ht = (e) => ({ transitionName: L(() => (a) => e && typeof e != "boolean" ? a ? e.open : e.close : ""), showTransition: !!e }), rt = {
  multiCalendars: { type: [Boolean, Number, String], default: null },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  closeOnScroll: { type: Boolean, default: !1 },
  autoPosition: { type: Boolean, default: !0 },
  closeOnAutoApply: { type: Boolean, default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  disableYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  multiCalendarsSolo: { type: Boolean, default: !1 },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: () => [] },
  showNowButton: { type: Boolean, default: !1 },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  modeHeight: { type: [Number, String], default: 255 },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetRanges: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  keepActionRow: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  multiStatic: { type: Boolean, default: !0 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Array, Function],
    default: null
  },
  highlightWeekDays: {
    type: Array,
    default: null
  },
  highlightDisabledDays: { type: Boolean, default: !1 },
  teleport: { type: [String, Boolean], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function],
    default: null
  },
  calendarClassName: { type: String, default: null },
  noSwipe: { type: Boolean, default: !1 },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  inlineWithInput: { type: Boolean, default: !1 },
  textInputOptions: { type: Object, default: () => null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: Boolean, default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: Boolean, default: !1 },
  textInput: { type: Boolean, default: !1 },
  onClickOutside: { type: Function, default: null },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: [Boolean, String], default: !1 },
  actionRow: { type: Object, default: () => ({}) },
  allowPreventDefault: { type: Boolean, default: !1 }
}, cr = {
  key: 1,
  class: "dp__input_wrap"
}, fr = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "onKeydown"], mr = {
  key: 2,
  class: "dp__input_icon"
}, vr = {
  key: 4,
  class: "dp__clear_icon"
}, yr = /* @__PURE__ */ je({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...rt
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { getDefaultPattern: o, isValidDate: m, defaults: g, getDefaultStartTime: N, assignDefaultTime: F } = Le(t), C = H(), W = H(null), _ = H(!1), d = H(!1), $ = L(
      () => ({
        dp__pointer: !t.disabled && !t.readonly && !t.textInput,
        dp__disabled: t.disabled,
        dp__input_readonly: !t.textInput,
        dp__input: !0,
        dp__input_icon_pad: !t.hideInputIcon,
        dp__input_valid: t.state,
        dp__input_invalid: t.state === !1,
        dp__input_focus: _.value || t.isMenuOpen,
        dp__input_reg: !t.textInput,
        [t.inputClassName]: !!t.inputClassName
      })
    ), Q = () => {
      a("set-input-date", null), t.autoApply && (a("set-empty-date"), C.value = null);
    }, x = (v) => {
      var I;
      const Y = N();
      return ha(
        v,
        ((I = g.value.textInputOptions) == null ? void 0 : I.format) || o(),
        Y || F({}),
        t.inputValue,
        d.value
      );
    }, z = (v) => {
      const { rangeSeparator: Y } = g.value.textInputOptions, [I, T] = v.split(`${Y}`);
      if (I) {
        const y = x(I.trim()), u = T ? x(T.trim()) : null, l = y && u ? [y, u] : [y];
        C.value = y ? l : null;
      }
    }, V = () => {
      d.value = !0;
    }, U = (v) => {
      if (t.range)
        z(v);
      else if (t.multiDates) {
        const Y = v.split(";");
        C.value = Y.map((I) => x(I.trim())).filter((I) => I);
      } else
        C.value = x(v);
    }, O = (v) => {
      var I;
      const { value: Y } = v.target;
      Y !== "" ? ((I = g.value.textInputOptions) != null && I.openMenu && !t.isMenuOpen && a("open"), U(Y), a("set-input-date", C.value)) : Q(), d.value = !1, a("update:input-value", Y);
    }, Z = (v) => {
      var Y, I;
      t.textInput ? (U(v.target.value), (Y = g.value.textInputOptions) != null && Y.enterSubmit && m(C.value) && t.inputValue !== "" ? (a("set-input-date", C.value, !0), C.value = null) : (I = g.value.textInputOptions) != null && I.enterSubmit && t.inputValue === "" && (C.value = null, a("clear"))) : re(v);
    }, K = () => {
      var v, Y;
      (v = g.value.textInputOptions) != null && v.tabSubmit && m(C.value) && t.inputValue !== "" ? (a("set-input-date", C.value, !0), C.value = null) : (Y = g.value.textInputOptions) != null && Y.tabSubmit && t.inputValue === "" && (C.value = null, a("clear"));
    }, te = () => {
      _.value = !0, a("focus");
    }, re = (v) => {
      var Y;
      v.preventDefault(), v.stopImmediatePropagation(), v.stopPropagation(), t.textInput && ((Y = g.value.textInputOptions) != null && Y.openMenu) && !t.inlineWithInput ? t.isMenuOpen ? g.value.textInputOptions.enterSubmit && a("select-date") : a("open") : t.textInput || a("toggle");
    }, ue = () => {
      a("real-blur"), _.value = !1, t.isMenuOpen || a("blur"), t.autoApply && t.textInput && C.value && !t.isMenuOpen && (a("set-input-date", C.value), a("select-date"), C.value = null);
    }, ce = () => {
      a("clear");
    }, fe = (v) => {
      if (!t.textInput) {
        if (v.code === "Tab")
          return;
        v.preventDefault();
      }
    };
    return n({
      focusInput: () => {
        var v;
        (v = W.value) == null || v.focus({ preventScroll: !0 });
      },
      setParsedDate: (v) => {
        C.value = v;
      }
    }), (v, Y) => {
      var I;
      return p(), B("div", { onClick: re }, [
        v.$slots.trigger && !v.$slots["dp-input"] && !v.inline ? G(v.$slots, "trigger", { key: 0 }) : S("", !0),
        !v.$slots.trigger && (!v.inline || v.inlineWithInput) ? (p(), B("div", cr, [
          v.$slots["dp-input"] && !v.$slots.trigger && !v.inline ? G(v.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: O,
            onEnter: Z,
            onTab: K,
            onClear: ce,
            onBlur: ue,
            onKeypress: fe,
            onPaste: V
          }) : S("", !0),
          v.$slots["dp-input"] ? S("", !0) : (p(), B("input", {
            key: 1,
            ref_key: "inputRef",
            ref: W,
            id: v.uid ? `dp-input-${v.uid}` : void 0,
            name: v.name,
            class: he(i($)),
            inputmode: v.textInput ? "text" : "none",
            placeholder: v.placeholder,
            disabled: v.disabled,
            readonly: v.readonly,
            required: v.required,
            value: e.inputValue,
            autocomplete: v.autocomplete,
            "aria-label": (I = i(g).ariaLabels) == null ? void 0 : I.input,
            onInput: O,
            onKeydown: [
              ie(Z, ["enter"]),
              ie(K, ["tab"]),
              fe
            ],
            onBlur: ue,
            onFocus: te,
            onKeypress: fe,
            onPaste: V
          }, null, 42, fr)),
          v.$slots["input-icon"] && !v.hideInputIcon ? (p(), B("span", mr, [
            G(v.$slots, "input-icon")
          ])) : S("", !0),
          !v.$slots["input-icon"] && !v.hideInputIcon && !v.$slots["dp-input"] ? (p(), ve(i(Wt), {
            key: 3,
            class: "dp__input_icon dp__input_icons"
          })) : S("", !0),
          v.$slots["clear-icon"] && e.inputValue && v.clearable && !v.disabled && !v.readonly ? (p(), B("span", vr, [
            G(v.$slots, "clear-icon", { clear: ce })
          ])) : S("", !0),
          v.clearable && !v.$slots["clear-icon"] && e.inputValue && !v.disabled && !v.readonly ? (p(), ve(i(ga), {
            key: 5,
            class: "dp__clear_icon dp__input_icons",
            onClick: Je(ce, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : S("", !0)
        ])) : S("", !0)
      ]);
    };
  }
}), gr = ["title"], hr = { class: "dp__action_buttons" }, pr = ["onKeydown", "disabled"], kr = /* @__PURE__ */ je({
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    calendarWidth: { type: Number, default: 0 },
    ...rt
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: n }) {
    const a = e, { formatDate: t, isValidTime: o, defaults: m } = Le(a), { buildMatrix: g } = at(), N = H(null), F = H(null);
    We(() => {
      a.arrowNavigation && g([$e(N), $e(F)], "actionRow");
    });
    const C = L(() => a.range && !a.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0), W = L(() => !_.value || !d.value || !C.value), _ = L(() => !a.enableTimePicker || a.ignoreTimeValidation ? !0 : o(a.internalModelValue)), d = L(() => a.monthPicker ? a.range && Array.isArray(a.internalModelValue) ? !a.internalModelValue.filter((Z) => !V(Z)).length : V(a.internalModelValue) : !0), $ = () => {
      const O = m.value.previewFormat;
      return a.timePicker || a.monthPicker, O(Se(a.internalModelValue));
    }, Q = () => {
      const O = a.internalModelValue;
      return m.value.multiCalendars > 0 ? `${t(O[0])} - ${t(O[1])}` : [t(O[0]), t(O[1])];
    }, x = L(() => !a.internalModelValue || !a.menuMount ? "" : typeof m.value.previewFormat == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? Q() : a.multiDates ? a.internalModelValue.map((O) => `${t(O)}`) : a.modelAuto ? `${t(a.internalModelValue[0])}` : `${t(a.internalModelValue[0])} -` : t(a.internalModelValue) : $()), z = L(
      () => Array.isArray(x.value) ? x.value.join(a.multiDates ? "; " : " - ") : x.value
    ), V = (O) => {
      if (!a.monthPicker)
        return !0;
      let Z = !0;
      const K = M(Dt(O));
      if (a.minDate && a.maxDate) {
        const te = M(Dt(a.minDate)), re = M(Dt(a.maxDate));
        return Ve(K, te) && Ie(K, re) || ge(K, te) || ge(K, re);
      }
      if (a.minDate) {
        const te = M(Dt(a.minDate));
        Z = Ve(K, te) || ge(K, te);
      }
      if (a.maxDate) {
        const te = M(Dt(a.maxDate));
        Z = Ie(K, te) || ge(K, te);
      }
      return Z;
    }, U = () => {
      _.value && d.value && C.value ? n("select-date") : n("invalid-select");
    };
    return (O, Z) => (p(), B("div", {
      class: "dp__action_row",
      style: et(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      O.$slots["action-row"] ? G(O.$slots, "action-row", Re(Pe({ key: 0 }, {
        internalModelValue: e.internalModelValue,
        disabled: i(W),
        selectDate: () => O.$emit("select-date"),
        closePicker: () => O.$emit("close-picker")
      }))) : (p(), B(ye, { key: 1 }, [
        i(m).actionRow.showPreview ? (p(), B("div", {
          key: 0,
          class: "dp__selection_preview",
          title: i(z)
        }, [
          O.$slots["action-preview"] ? G(O.$slots, "action-preview", {
            key: 0,
            value: e.internalModelValue
          }) : S("", !0),
          O.$slots["action-preview"] ? S("", !0) : (p(), B(ye, { key: 1 }, [
            Ze(Oe(i(z)), 1)
          ], 64))
        ], 8, gr)) : S("", !0),
        ae("div", hr, [
          O.$slots["action-buttons"] ? G(O.$slots, "action-buttons", {
            key: 0,
            value: e.internalModelValue
          }) : S("", !0),
          O.$slots["action-buttons"] ? S("", !0) : (p(), B(ye, { key: 1 }, [
            !O.inline && i(m).actionRow.showCancel ? (p(), B("button", {
              key: 0,
              type: "button",
              ref_key: "cancelButtonRef",
              ref: N,
              class: "dp__action_button dp__action_cancel",
              onClick: Z[0] || (Z[0] = (K) => O.$emit("close-picker")),
              onKeydown: [
                Z[1] || (Z[1] = ie((K) => O.$emit("close-picker"), ["enter"])),
                Z[2] || (Z[2] = ie((K) => O.$emit("close-picker"), ["space"]))
              ]
            }, Oe(O.cancelText), 545)) : S("", !0),
            O.showNowButton || i(m).actionRow.showNow ? (p(), B("button", {
              key: 1,
              type: "button",
              ref_key: "cancelButtonRef",
              ref: N,
              class: "dp__action_button dp__action_cancel",
              onClick: Z[3] || (Z[3] = (K) => O.$emit("select-now")),
              onKeydown: [
                Z[4] || (Z[4] = ie((K) => O.$emit("select-now"), ["enter"])),
                Z[5] || (Z[5] = ie((K) => O.$emit("select-now"), ["space"]))
              ]
            }, Oe(O.nowButtonLabel), 545)) : S("", !0),
            i(m).actionRow.showSelect ? (p(), B("button", {
              key: 2,
              type: "button",
              class: "dp__action_button dp__action_select",
              onKeydown: [
                ie(U, ["enter"]),
                ie(U, ["space"])
              ],
              onClick: U,
              disabled: i(W),
              ref_key: "selectButtonRef",
              ref: F
            }, Oe(O.selectText), 41, pr)) : S("", !0)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
}), wr = ["aria-label"], br = {
  class: "dp__calendar_header",
  role: "row"
}, Dr = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, $r = /* @__PURE__ */ ae("div", { class: "dp__calendar_header_separator" }, null, -1), Mr = ["aria-label"], Tr = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, Ar = { class: "dp__cell_inner" }, Sr = ["aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], Pr = /* @__PURE__ */ je({
  __name: "Calendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    getWeekNum: {
      type: Function,
      default: () => ""
    },
    specificMode: { type: Boolean, default: !1 },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...rt
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { buildMultiLevelMatrix: o } = at(), { setDateMonthOrYear: m, defaults: g } = Le(t), N = H(null), F = H({
      bottom: "",
      left: "",
      transform: ""
    }), C = H([]), W = H(null), _ = H(!0), d = H(""), $ = H({ startX: 0, endX: 0, startY: 0, endY: 0 }), Q = H([]), x = H({ left: "50%" }), z = L(() => t.dayNames ? Array.isArray(t.dayNames) ? t.dayNames : t.dayNames(t.locale, +t.weekStart) : ja(t.locale, +t.weekStart));
    We(() => {
      a("mount", { cmp: "calendar", refs: C }), t.noSwipe || W.value && (W.value.addEventListener("touchstart", R, { passive: !1 }), W.value.addEventListener("touchend", b, { passive: !1 }), W.value.addEventListener("touchmove", v, { passive: !1 })), t.monthChangeOnScroll && W.value && W.value.addEventListener("wheel", T, { passive: !1 });
    });
    const V = (y) => y ? t.vertical ? "vNext" : "next" : t.vertical ? "vPrevious" : "previous", U = (y, u) => {
      if (t.transitions) {
        const l = Ke(m(M(), t.month, t.year));
        d.value = Ve(Ke(m(M(), y, u)), l) ? g.value.transitions[V(!0)] : g.value.transitions[V(!1)], _.value = !1, Qe(() => {
          _.value = !0;
        });
      }
    }, O = L(
      () => ({
        [t.calendarClassName]: !!t.calendarClassName
      })
    ), Z = L(() => (y) => {
      const u = Xa(y);
      return {
        dp__marker_dot: u.type === "dot",
        dp__marker_line: u.type === "line"
      };
    }), K = L(() => (y) => ge(y, N.value)), te = L(() => ({
      dp__calendar: !0,
      dp__calendar_next: g.value.multiCalendars > 0 && t.instance !== 0
    })), re = L(() => (y) => t.hideOffsetDates ? y.current : !0), ue = L(() => t.specificMode ? { height: `${t.modeHeight}px` } : void 0), ce = async (y, u, l) => {
      var r, h;
      if (a("set-hover-date", y), (h = (r = y.marker) == null ? void 0 : r.tooltip) != null && h.length) {
        const w = $e(C.value[u][l]);
        if (w) {
          const { width: A, height: c } = w.getBoundingClientRect();
          N.value = y.value;
          let P = { left: `${A / 2}px` }, f = -50;
          if (await Qe(), Q.value[0]) {
            const { left: E, width: le } = Q.value[0].getBoundingClientRect();
            E < 0 && (P = { left: "0" }, f = 0, x.value.left = `${A / 2}px`), window.innerWidth < E + le && (P = { right: "0" }, f = 0, x.value.left = `${le - A / 2}px`);
          }
          F.value = {
            bottom: `${c}px`,
            ...P,
            transform: `translateX(${f}%)`
          }, a("tooltip-open", y.marker);
        }
      }
    }, fe = (y) => {
      N.value && (N.value = null, F.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), a("tooltip-close", y.marker));
    }, R = (y) => {
      $.value.startX = y.changedTouches[0].screenX, $.value.startY = y.changedTouches[0].screenY;
    }, b = (y) => {
      $.value.endX = y.changedTouches[0].screenX, $.value.endY = y.changedTouches[0].screenY, Y();
    }, v = (y) => {
      t.vertical && !t.inline && y.preventDefault();
    }, Y = () => {
      const y = t.vertical ? "Y" : "X";
      Math.abs($.value[`start${y}`] - $.value[`end${y}`]) > 10 && a("handle-swipe", $.value[`start${y}`] > $.value[`end${y}`] ? "right" : "left");
    }, I = (y, u, l) => {
      y && (Array.isArray(C.value[u]) ? C.value[u][l] = y : C.value[u] = [y]), t.arrowNavigation && o(C.value, "calendar");
    }, T = (y) => {
      t.monthChangeOnScroll && (y.preventDefault(), a("handle-scroll", y));
    };
    return n({ triggerTransition: U }), (y, u) => {
      var l;
      return p(), B("div", {
        class: he(i(te))
      }, [
        ae("div", {
          style: et(i(ue)),
          ref_key: "calendarWrapRef",
          ref: W,
          role: "grid",
          class: he(i(O)),
          "aria-label": (l = i(g).ariaLabels) == null ? void 0 : l.calendarWrap
        }, [
          e.specificMode ? S("", !0) : (p(), B(ye, { key: 0 }, [
            ae("div", br, [
              y.weekNumbers ? (p(), B("div", Dr, Oe(y.weekNumName), 1)) : S("", !0),
              (p(!0), B(ye, null, Ce(i(z), (r, h) => (p(), B("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: h
              }, [
                y.$slots["calendar-header"] ? G(y.$slots, "calendar-header", {
                  key: 0,
                  day: r,
                  index: h
                }) : S("", !0),
                y.$slots["calendar-header"] ? S("", !0) : (p(), B(ye, { key: 1 }, [
                  Ze(Oe(r), 1)
                ], 64))
              ]))), 128))
            ]),
            $r,
            mt(kt, {
              name: d.value,
              css: !!y.transitions
            }, {
              default: se(() => {
                var r;
                return [
                  _.value ? (p(), B("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": (r = i(g).ariaLabels) == null ? void 0 : r.calendarDays
                  }, [
                    (p(!0), B(ye, null, Ce(e.mappedDates, (h, w) => (p(), B("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: w
                    }, [
                      y.weekNumbers ? (p(), B("div", Tr, [
                        ae("div", Ar, Oe(e.getWeekNum(h.days)), 1)
                      ])) : S("", !0),
                      (p(!0), B(ye, null, Ce(h.days, (A, c) => {
                        var P, f, E;
                        return p(), B("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (le) => I(le, w, c),
                          key: c + w,
                          "aria-selected": A.classData.dp__active_date || A.classData.dp__range_start || A.classData.dp__range_start,
                          "aria-disabled": A.classData.dp__cell_disabled,
                          "aria-label": (f = (P = i(g).ariaLabels) == null ? void 0 : P.day) == null ? void 0 : f.call(P, A),
                          tabindex: "0",
                          onClick: Je((le) => y.$emit("select-date", A), ["stop", "prevent"]),
                          onKeydown: [
                            ie((le) => y.$emit("select-date", A), ["enter"]),
                            ie((le) => y.$emit("handle-space", A), ["space"])
                          ],
                          onMouseenter: (le) => ce(A, w, c),
                          onMouseleave: (le) => fe(A)
                        }, [
                          ae("div", {
                            class: he(["dp__cell_inner", A.classData])
                          }, [
                            y.$slots.day && i(re)(A) ? G(y.$slots, "day", {
                              key: 0,
                              day: +A.text,
                              date: A.value
                            }) : S("", !0),
                            y.$slots.day ? S("", !0) : (p(), B(ye, { key: 1 }, [
                              Ze(Oe(A.text), 1)
                            ], 64)),
                            A.marker && i(re)(A) ? (p(), B("div", {
                              key: 2,
                              class: he(i(Z)(A.marker)),
                              style: et(A.marker.color ? { backgroundColor: A.marker.color } : {})
                            }, null, 6)) : S("", !0),
                            i(K)(A.value) ? (p(), B("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              ref_for: !0,
                              ref_key: "activeTooltip",
                              ref: Q,
                              style: et(F.value)
                            }, [
                              (E = A.marker) != null && E.tooltip ? (p(), B("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: u[0] || (u[0] = Je(() => {
                                }, ["stop"]))
                              }, [
                                (p(!0), B(ye, null, Ce(A.marker.tooltip, (le, be) => (p(), B("div", {
                                  key: be,
                                  class: "dp__tooltip_text"
                                }, [
                                  y.$slots["marker-tooltip"] ? G(y.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: le,
                                    day: A.value
                                  }) : S("", !0),
                                  y.$slots["marker-tooltip"] ? S("", !0) : (p(), B(ye, { key: 1 }, [
                                    ae("div", {
                                      class: "dp__tooltip_mark",
                                      style: et(le.color ? { backgroundColor: le.color } : {})
                                    }, null, 4),
                                    ae("div", null, Oe(le.text), 1)
                                  ], 64))
                                ]))), 128)),
                                ae("div", {
                                  class: "dp__arrow_bottom_tp",
                                  style: et(x.value)
                                }, null, 4)
                              ])) : S("", !0)
                            ], 4)) : S("", !0)
                          ], 2)
                        ], 40, Sr);
                      }), 128))
                    ]))), 128))
                  ], 8, Mr)) : S("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 64))
        ], 14, wr)
      ], 2);
    };
  }
}), Cr = ["aria-label", "aria-disabled"], ln = /* @__PURE__ */ je({
  __name: "ActionIcon",
  props: {
    ariaLabel: null,
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: n }) {
    const a = H(null);
    return We(() => n("set-ref", a)), (t, o) => (p(), B("button", {
      type: "button",
      class: "dp__btn dp__month_year_col_nav",
      onClick: o[0] || (o[0] = (m) => t.$emit("activate")),
      onKeydown: [
        o[1] || (o[1] = ie((m) => t.$emit("activate"), ["enter"])),
        o[2] || (o[2] = ie((m) => t.$emit("activate"), ["space"]))
      ],
      tabindex: "0",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled,
      ref_key: "elRef",
      ref: a
    }, [
      ae("span", {
        class: he(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        G(t.$slots, "default")
      ], 2)
    ], 40, Cr));
  }
}), _r = ["onKeydown"], Nr = { class: "dp__selection_grid_header" }, Rr = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"], Or = ["aria-label", "onKeydown"], At = /* @__PURE__ */ je({
  __name: "SelectionGrid",
  props: {
    items: { type: Array, default: () => [] },
    modelValue: { type: [String, Number], default: null },
    multiModelValue: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: [Number, String], default: null },
    maxValue: { type: [Number, String], default: null },
    year: { type: Number, default: 0 },
    skipActive: { type: Boolean, default: !1 },
    headerRefs: { type: Array, default: () => [] },
    skipButtonRef: { type: Boolean, default: !1 },
    monthPicker: { type: Boolean, default: !1 },
    yearPicker: { type: Boolean, default: !1 },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "selected", "toggle", "reset-flow"],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setSelectionGrid: o, buildMultiLevelMatrix: m, setMonthPicker: g } = at(), { hideNavigationButtons: N } = Le(t), F = H(!1), C = H(null), W = H(null), _ = H([]), d = H(), $ = H(null), Q = H(0), x = H(null);
    na(() => {
      C.value = null;
    }), We(() => {
      Qe().then(() => ce()), V(), z(!0);
    }), yn(() => z(!1));
    const z = (T) => {
      var y;
      t.arrowNavigation && ((y = t.headerRefs) != null && y.length ? g(T) : o(T));
    }, V = () => {
      const T = $e(W);
      T && (t.textInput || T.focus({ preventScroll: !0 }), F.value = T.clientHeight < T.scrollHeight);
    }, U = L(
      () => ({
        dp__overlay: !0
      })
    ), O = L(() => ({
      dp__overlay_col: !0
    })), Z = (T) => t.skipActive ? !1 : T.value === t.modelValue, K = L(() => t.items.map((T) => T.filter((y) => y).map((y) => {
      var r, h, w;
      const u = t.disabledValues.some((A) => A === y.value) || ue(y.value), l = (r = t.multiModelValue) != null && r.length ? (h = t.multiModelValue) == null ? void 0 : h.some(
        (A) => ge(
          A,
          tt(
            t.monthPicker ? Lt(/* @__PURE__ */ new Date(), y.value) : /* @__PURE__ */ new Date(),
            t.monthPicker ? t.year : y.value
          )
        )
      ) : Z(y);
      return {
        ...y,
        className: {
          dp__overlay_cell_active: l,
          dp__overlay_cell: !l,
          dp__overlay_cell_disabled: u,
          dp__overlay_cell_active_disabled: u && l,
          dp__overlay_cell_pad: !0,
          dp__cell_in_between: (w = t.multiModelValue) != null && w.length && t.skipActive ? R(y.value) : !1
        }
      };
    }))), te = L(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: F.value,
        dp__button_bottom: t.autoApply
      })
    ), re = L(() => {
      var T, y;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((T = t.items) == null ? void 0 : T.length) <= 6,
        dp__container_block: ((y = t.items) == null ? void 0 : y.length) > 6
      };
    }), ue = (T) => {
      const y = t.maxValue || t.maxValue === 0, u = t.minValue || t.minValue === 0;
      return !y && !u ? !1 : y && u ? +T > +t.maxValue || +T < +t.minValue : y ? +T > +t.maxValue : u ? +T < +t.minValue : !1;
    }, ce = () => {
      const T = $e(C), y = $e(W), u = $e($), l = $e(x), r = u ? u.getBoundingClientRect().height : 0;
      y && (Q.value = y.getBoundingClientRect().height - r), T && l && (l.scrollTop = T.offsetTop - l.offsetTop - (Q.value / 2 - T.getBoundingClientRect().height) - r);
    }, fe = (T) => {
      !t.disabledValues.some((y) => y === T) && !ue(T) && (a("update:model-value", T), a("selected"));
    }, R = (T) => {
      const y = t.monthPicker ? t.year : T;
      return Gn(
        t.multiModelValue,
        tt(
          t.monthPicker ? Lt(/* @__PURE__ */ new Date(), d.value || 0) : /* @__PURE__ */ new Date(),
          t.monthPicker ? y : d.value || y
        ),
        tt(t.monthPicker ? Lt(/* @__PURE__ */ new Date(), T) : /* @__PURE__ */ new Date(), y)
      );
    }, b = () => {
      a("toggle"), a("reset-flow");
    }, v = () => {
      t.escClose && b();
    }, Y = (T, y, u, l) => {
      T && (y.value === +t.modelValue && !t.disabledValues.includes(y.value) && (C.value = T), t.arrowNavigation && (Array.isArray(_.value[u]) ? _.value[u][l] = T : _.value[u] = [T], I()));
    }, I = () => {
      var y, u;
      const T = (y = t.headerRefs) != null && y.length ? [t.headerRefs].concat(_.value) : _.value.concat([t.skipButtonRef ? [] : [$.value]]);
      m(Se(T), (u = t.headerRefs) != null && u.length ? "monthPicker" : "selectionGrid");
    };
    return n({ focusGrid: V }), (T, y) => {
      var u;
      return p(), B("div", {
        ref_key: "gridWrapRef",
        ref: W,
        class: he(i(U)),
        role: "dialog",
        tabindex: "0",
        onKeydown: ie(v, ["esc"])
      }, [
        ae("div", {
          class: he(i(re)),
          ref_key: "containerRef",
          ref: x,
          role: "grid",
          style: et({ height: `${Q.value}px` })
        }, [
          ae("div", Nr, [
            G(T.$slots, "header")
          ]),
          T.$slots.overlay ? G(T.$slots, "overlay", { key: 0 }) : (p(!0), B(ye, { key: 1 }, Ce(i(K), (l, r) => (p(), B("div", {
            class: he(["dp__overlay_row", { dp__flex_row: i(K).length >= 3 }]),
            key: r,
            role: "row"
          }, [
            (p(!0), B(ye, null, Ce(l, (h, w) => (p(), B("div", {
              role: "gridcell",
              class: he(i(O)),
              key: h.value,
              "aria-selected": h.value === e.modelValue && !e.disabledValues.includes(h.value),
              "aria-disabled": h.className.dp__overlay_cell_disabled,
              ref_for: !0,
              ref: (A) => Y(A, h, r, w),
              tabindex: "0",
              onClick: (A) => fe(h.value),
              onKeydown: [
                ie((A) => fe(h.value), ["enter"]),
                ie((A) => fe(h.value), ["space"])
              ],
              onMouseover: (A) => d.value = h.value
            }, [
              ae("div", {
                class: he(h.className)
              }, [
                T.$slots.item ? G(T.$slots, "item", {
                  key: 0,
                  item: h
                }) : S("", !0),
                T.$slots.item ? S("", !0) : (p(), B(ye, { key: 1 }, [
                  Ze(Oe(h.text), 1)
                ], 64))
              ], 2)
            ], 42, Rr))), 128))
          ], 2))), 128))
        ], 6),
        T.$slots["button-icon"] ? Yt((p(), B("div", {
          key: 0,
          role: "button",
          "aria-label": (u = e.ariaLabels) == null ? void 0 : u.toggleOverlay,
          class: he(i(te)),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: $,
          onClick: b,
          onKeydown: ie(b, ["enter"])
        }, [
          G(T.$slots, "button-icon")
        ], 42, Or)), [
          [Vt, !i(N)(e.type)]
        ]) : S("", !0)
      ], 42, _r);
    };
  }
}), Ir = ["aria-label"], Ln = /* @__PURE__ */ je({
  __name: "RegularPicker",
  props: {
    ariaLabel: { type: String, default: "" },
    showSelectionGrid: { type: Boolean, default: !1 },
    modelValue: { type: Number, default: null },
    items: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: Number, default: null },
    maxValue: { type: Number, default: null },
    slotName: { type: String, default: "" },
    overlaySlot: { type: String, default: "" },
    headerRefs: { type: Array, default: () => [] },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    transitions: { type: [Object, Boolean], default: !1 },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "toggle", "set-ref"],
  setup(e, { emit: n }) {
    const a = e, { transitionName: t, showTransition: o } = Ht(a.transitions), m = H(null);
    return We(() => n("set-ref", m)), (g, N) => (p(), B(ye, null, [
      ae("button", {
        type: "button",
        class: "dp__btn dp__month_year_select",
        onClick: N[0] || (N[0] = (F) => g.$emit("toggle")),
        onKeydown: [
          N[1] || (N[1] = ie((F) => g.$emit("toggle"), ["enter"])),
          N[2] || (N[2] = ie((F) => g.$emit("toggle"), ["space"]))
        ],
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: m
      }, [
        G(g.$slots, "default")
      ], 40, Ir),
      mt(kt, {
        name: i(t)(e.showSelectionGrid),
        css: i(o)
      }, {
        default: se(() => [
          e.showSelectionGrid ? (p(), ve(At, Pe({ key: 0 }, {
            modelValue: e.modelValue,
            items: e.items,
            disabledValues: e.disabledValues,
            minValue: e.minValue,
            maxValue: e.maxValue,
            escClose: e.escClose,
            type: e.type,
            arrowNavigation: e.arrowNavigation,
            textInput: e.textInput,
            autoApply: e.autoApply,
            ariaLabels: e.ariaLabels,
            hideNavigation: e.hideNavigation
          }, {
            "header-refs": [],
            "onUpdate:modelValue": N[3] || (N[3] = (F) => g.$emit("update:model-value", F)),
            onToggle: N[4] || (N[4] = (F) => g.$emit("toggle"))
          }), Ee({
            "button-icon": se(() => [
              g.$slots["calendar-icon"] ? G(g.$slots, "calendar-icon", { key: 0 }) : S("", !0),
              g.$slots["calendar-icon"] ? S("", !0) : (p(), ve(i(Wt), { key: 1 }))
            ]),
            _: 2
          }, [
            g.$slots[e.slotName] ? {
              name: "item",
              fn: se(({ item: F }) => [
                G(g.$slots, e.slotName, { item: F })
              ]),
              key: "0"
            } : void 0,
            g.$slots[e.overlaySlot] ? {
              name: "overlay",
              fn: se(() => [
                G(g.$slots, e.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            g.$slots[`${e.overlaySlot}-header`] ? {
              name: "header",
              fn: se(() => [
                G(g.$slots, `${e.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : S("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), Br = { class: "dp__month_year_row" }, Yr = { class: "dp__month_picker_header" }, Vr = ["aria-label"], Er = ["aria-label"], Lr = ["aria-label"], Fr = /* @__PURE__ */ je({
  __name: "MonthYearPicker",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    internalModelValue: { type: [Date, Array], default: null },
    ...rt
  },
  emits: ["update-month-year", "month-year-select", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, { defaults: o } = Le(t), { transitionName: m, showTransition: g } = Ht(o.value.transitions), { buildMatrix: N } = at(), { handleMonthYearChange: F, isDisabled: C, updateMonthYear: W } = sr(t, a), _ = H(!1), d = H(!1), $ = H([null, null, null, null]), Q = H(null), x = H(null), z = H(null);
    We(() => {
      a("mount");
    });
    const V = (c) => ({
      get: () => t[c],
      set: (P) => {
        const f = c === "month" ? "year" : "month";
        a("update-month-year", { [c]: P, [f]: t[f] }), a("month-year-select", c === "year"), c === "month" ? l(!0) : r(!0);
      }
    }), U = L(V("month")), O = L(V("year")), Z = (c) => {
      const P = we(M(c));
      return t.year === P;
    }, K = L(() => t.monthPicker ? Array.isArray(t.disabledDates) ? t.disabledDates.map((c) => M(c)).filter((c) => Z(c)).map((c) => pe(c)) : [] : []), te = L(() => (c) => {
      const P = c === "month";
      return {
        showSelectionGrid: (P ? _ : d).value,
        items: (P ? I : T).value,
        disabledValues: o.value.filters[P ? "months" : "years"].concat(K.value),
        minValue: (P ? fe : ue).value,
        maxValue: (P ? R : ce).value,
        headerRefs: P && t.monthPicker ? [Q.value, x.value, z.value] : [],
        escClose: t.escClose,
        transitions: o.value.transitions,
        ariaLabels: o.value.ariaLabels,
        textInput: t.textInput,
        autoApply: t.autoApply,
        arrowNavigation: t.arrowNavigation,
        hideNavigation: t.hideNavigation
      };
    }), re = L(() => (c) => ({
      month: t.month,
      year: t.year,
      items: c === "month" ? t.months : t.years,
      instance: t.instance,
      updateMonthYear: W,
      toggle: c === "month" ? l : r
    })), ue = L(() => t.minDate ? we(M(t.minDate)) : null), ce = L(() => t.maxDate ? we(M(t.maxDate)) : null), fe = L(() => {
      if (t.minDate && ue.value) {
        if (ue.value > t.year)
          return 12;
        if (ue.value === t.year)
          return pe(M(t.minDate));
      }
      return null;
    }), R = L(() => t.maxDate && ce.value ? ce.value < t.year ? -1 : ce.value === t.year ? pe(M(t.maxDate)) : null : null), b = L(() => (t.range || t.multiDates) && t.internalModelValue && (t.monthPicker || t.yearPicker) ? t.internalModelValue : []), v = (c) => {
      const P = [], f = (E) => E;
      for (let E = 0; E < c.length; E += 3) {
        const le = [c[E], c[E + 1], c[E + 2]];
        P.push(f(le));
      }
      return P;
    }, Y = L(() => {
      const c = t.months.find((P) => P.value === t.month);
      return c || { text: "", value: 0 };
    }), I = L(() => v(t.months)), T = L(() => v(t.years)), y = L(() => o.value.multiCalendars ? t.multiCalendarsSolo ? !0 : t.instance === 0 : !0), u = L(() => o.value.multiCalendars ? t.multiCalendarsSolo ? !0 : t.instance === o.value.multiCalendars - 1 : !0), l = (c = !1) => {
      h(c), _.value = !_.value, _.value || a("overlay-closed");
    }, r = (c = !1) => {
      h(c), d.value = !d.value, d.value || a("overlay-closed");
    }, h = (c) => {
      c || a("reset-flow");
    }, w = (c = !1) => {
      C.value(c) || a("update-month-year", {
        year: c ? t.year + 1 : t.year - 1,
        month: t.month,
        fromNav: !0
      });
    }, A = (c, P) => {
      t.arrowNavigation && ($.value[P] = $e(c), N($.value, "monthYear"));
    };
    return n({
      toggleMonthPicker: l,
      toggleYearPicker: r,
      handleMonthYearChange: F
    }), (c, P) => {
      var f, E, le, be, He;
      return p(), B("div", Br, [
        c.$slots["month-year"] ? G(c.$slots, "month-year", Re(Pe({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: i(W), handleMonthYearChange: i(F), instance: e.instance }))) : (p(), B(ye, { key: 1 }, [
          !c.monthPicker && !c.yearPicker ? (p(), B(ye, { key: 0 }, [
            i(y) && !c.vertical ? (p(), ve(ln, {
              key: 0,
              "aria-label": (f = i(o).ariaLabels) == null ? void 0 : f.prevMonth,
              disabled: i(C)(!1),
              onActivate: P[0] || (P[0] = (ne) => i(F)(!1)),
              onSetRef: P[1] || (P[1] = (ne) => A(ne, 0))
            }, {
              default: se(() => [
                c.$slots["arrow-left"] ? G(c.$slots, "arrow-left", { key: 0 }) : S("", !0),
                c.$slots["arrow-left"] ? S("", !0) : (p(), ve(i(Mn), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : S("", !0),
            ae("div", {
              class: he(["dp__month_year_wrap", {
                dp__year_disable_select: t.disableYearSelect
              }])
            }, [
              mt(Ln, Pe({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": (E = i(o).ariaLabels) == null ? void 0 : E.openMonthsOverlay,
                modelValue: i(U),
                "onUpdate:modelValue": P[2] || (P[2] = (ne) => ut(U) ? U.value = ne : null)
              }, i(te)("month"), {
                onToggle: l,
                onSetRef: P[3] || (P[3] = (ne) => A(ne, 1))
              }), Ee({
                default: se(() => [
                  c.$slots.month ? G(c.$slots, "month", Re(Pe({ key: 0 }, i(Y)))) : S("", !0),
                  c.$slots.month ? S("", !0) : (p(), B(ye, { key: 1 }, [
                    Ze(Oe(i(Y).text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                c.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: se(() => [
                    G(c.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                c.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: se(({ item: ne }) => [
                    G(c.$slots, "month-overlay-value", {
                      text: ne.text,
                      value: ne.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                c.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: se(() => [
                    G(c.$slots, "month-overlay", Re(ze(i(re)("month"))))
                  ]),
                  key: "2"
                } : void 0,
                c.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: se(() => [
                    G(c.$slots, "month-overlay-header", { toggle: l })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              t.disableYearSelect ? S("", !0) : (p(), ve(Ln, Pe({
                key: 0,
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": (le = i(o).ariaLabels) == null ? void 0 : le.openYearsOverlay,
                modelValue: i(O),
                "onUpdate:modelValue": P[4] || (P[4] = (ne) => ut(O) ? O.value = ne : null)
              }, i(te)("year"), {
                onToggle: r,
                onSetRef: P[5] || (P[5] = (ne) => A(ne, 2))
              }), Ee({
                default: se(() => [
                  c.$slots.year ? G(c.$slots, "year", {
                    key: 0,
                    year: e.year
                  }) : S("", !0),
                  c.$slots.year ? S("", !0) : (p(), B(ye, { key: 1 }, [
                    Ze(Oe(e.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                c.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: se(() => [
                    G(c.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                c.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: se(({ item: ne }) => [
                    G(c.$slots, "year-overlay-value", {
                      text: ne.text,
                      value: ne.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                c.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: se(() => [
                    G(c.$slots, "year-overlay", Re(ze(i(re)("year"))))
                  ]),
                  key: "2"
                } : void 0,
                c.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: se(() => [
                    G(c.$slots, "year-overlay-header", { toggle: r })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]))
            ], 2),
            i(y) && c.vertical ? (p(), ve(ln, {
              key: 1,
              "aria-label": (be = i(o).ariaLabels) == null ? void 0 : be.prevMonth,
              disabled: i(C)(!1),
              onActivate: P[6] || (P[6] = (ne) => i(F)(!1))
            }, {
              default: se(() => [
                c.$slots["arrow-up"] ? G(c.$slots, "arrow-up", { key: 0 }) : S("", !0),
                c.$slots["arrow-up"] ? S("", !0) : (p(), ve(i(Kn), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : S("", !0),
            i(u) ? (p(), ve(ln, {
              key: 2,
              ref: "rightIcon",
              disabled: i(C)(!0),
              "aria-label": (He = i(o).ariaLabels) == null ? void 0 : He.nextMonth,
              onActivate: P[7] || (P[7] = (ne) => i(F)(!0)),
              onSetRef: P[8] || (P[8] = (ne) => A(ne, 3))
            }, {
              default: se(() => [
                c.$slots[c.vertical ? "arrow-down" : "arrow-right"] ? G(c.$slots, c.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : S("", !0),
                c.$slots[c.vertical ? "arrow-down" : "arrow-right"] ? S("", !0) : (p(), ve(Fn(c.vertical ? i(jn) : i(Tn)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : S("", !0)
          ], 64)) : S("", !0),
          c.monthPicker ? (p(), ve(At, Pe({ key: 1 }, i(te)("month"), {
            "skip-active": c.range,
            year: e.year,
            "multi-model-value": i(b),
            "month-picker": "",
            modelValue: i(U),
            "onUpdate:modelValue": P[17] || (P[17] = (ne) => ut(U) ? U.value = ne : null),
            onToggle: l,
            onSelected: P[18] || (P[18] = (ne) => c.$emit("overlay-closed"))
          }), Ee({
            header: se(() => {
              var ne, Fe, Ge;
              return [
                ae("div", Yr, [
                  ae("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: Q,
                    onClick: P[9] || (P[9] = (Te) => w(!1)),
                    onKeydown: P[10] || (P[10] = ie((Te) => w(!1), ["enter"]))
                  }, [
                    ae("div", {
                      class: he(["dp__inner_nav", { dp__inner_nav_disabled: i(C)(!1) }]),
                      role: "button",
                      "aria-label": (ne = i(o).ariaLabels) == null ? void 0 : ne.prevMonth
                    }, [
                      c.$slots["arrow-left"] ? G(c.$slots, "arrow-left", { key: 0 }) : S("", !0),
                      c.$slots["arrow-left"] ? S("", !0) : (p(), ve(i(Mn), { key: 1 }))
                    ], 10, Vr)
                  ], 544),
                  ae("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: x,
                    "aria-label": (Fe = i(o).ariaLabels) == null ? void 0 : Fe.openYearsOverlay,
                    tabindex: "0",
                    onClick: P[11] || (P[11] = () => r(!1)),
                    onKeydown: P[12] || (P[12] = ie(() => r(!1), ["enter"]))
                  }, [
                    c.$slots.year ? G(c.$slots, "year", {
                      key: 0,
                      year: e.year
                    }) : S("", !0),
                    c.$slots.year ? S("", !0) : (p(), B(ye, { key: 1 }, [
                      Ze(Oe(e.year), 1)
                    ], 64))
                  ], 40, Er),
                  ae("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpNextIconRef",
                    ref: z,
                    onClick: P[13] || (P[13] = (Te) => w(!0)),
                    onKeydown: P[14] || (P[14] = ie((Te) => w(!0), ["enter"]))
                  }, [
                    ae("div", {
                      class: he(["dp__inner_nav", { dp__inner_nav_disabled: i(C)(!0) }]),
                      role: "button",
                      "aria-label": (Ge = i(o).ariaLabels) == null ? void 0 : Ge.nextMonth
                    }, [
                      c.$slots["arrow-right"] ? G(c.$slots, "arrow-right", { key: 0 }) : S("", !0),
                      c.$slots["arrow-right"] ? S("", !0) : (p(), ve(i(Tn), { key: 1 }))
                    ], 10, Lr)
                  ], 544)
                ]),
                mt(kt, {
                  name: i(m)(d.value),
                  css: i(g)
                }, {
                  default: se(() => [
                    d.value ? (p(), ve(At, Pe({ key: 0 }, i(te)("year"), {
                      modelValue: i(O),
                      "onUpdate:modelValue": P[15] || (P[15] = (Te) => ut(O) ? O.value = Te : null),
                      onToggle: r,
                      onSelected: P[16] || (P[16] = (Te) => c.$emit("overlay-closed"))
                    }), Ee({
                      "button-icon": se(() => [
                        c.$slots["calendar-icon"] ? G(c.$slots, "calendar-icon", { key: 0 }) : S("", !0),
                        c.$slots["calendar-icon"] ? S("", !0) : (p(), ve(i(Wt), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      c.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: se(({ item: Te }) => [
                          G(c.$slots, "year-overlay-value", {
                            text: Te.text,
                            value: Te.value
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : S("", !0)
                  ]),
                  _: 3
                }, 8, ["name", "css"])
              ];
            }),
            _: 2
          }, [
            c.$slots["month-overlay-value"] ? {
              name: "item",
              fn: se(({ item: ne }) => [
                G(c.$slots, "month-overlay-value", {
                  text: ne.text,
                  value: ne.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : S("", !0),
          c.yearPicker ? (p(), ve(At, Pe({ key: 2 }, i(te)("year"), {
            modelValue: i(O),
            "onUpdate:modelValue": P[19] || (P[19] = (ne) => ut(O) ? O.value = ne : null),
            "multi-model-value": i(b),
            "skip-active": c.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: r,
            onSelected: P[20] || (P[20] = (ne) => c.$emit("overlay-closed"))
          }), Ee({ _: 2 }, [
            c.$slots["year-overlay-value"] ? {
              name: "item",
              fn: se(({ item: ne }) => [
                G(c.$slots, "year-overlay-value", {
                  text: ne.text,
                  value: ne.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : S("", !0)
        ], 64))
      ]);
    };
  }
}), Ur = {
  key: 0,
  class: "dp__time_input"
}, Wr = ["aria-label", "onKeydown", "onClick"], Hr = ["aria-label", "onKeydown", "onClick"], xr = ["aria-label", "onKeydown", "onClick"], zr = { key: 0 }, Kr = ["aria-label", "onKeydown"], jr = /* @__PURE__ */ je({
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    ...rt
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setTimePickerElements: o, setTimePickerBackRef: m } = at(), { defaults: g } = Le(t), { transitionName: N, showTransition: F } = Ht(g.value.transitions), C = _t({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), W = H("AM"), _ = H(null), d = H([]);
    We(() => {
      a("mounted");
    });
    const $ = (l) => _e(/* @__PURE__ */ new Date(), {
      hours: l.hours,
      minutes: l.minutes,
      seconds: t.enableSeconds ? l.seconds : 0,
      milliseconds: 0
    }), Q = L(() => ({ hours: t.hours, minutes: t.minutes, seconds: t.seconds })), x = L(() => (l) => !ue(+t[l] + +t[`${l}Increment`], l)), z = L(() => (l) => !ue(+t[l] - +t[`${l}Increment`], l)), V = (l, r) => xn(_e(M(), l), r), U = (l, r) => ya(_e(M(), l), r), O = L(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !t.enableSeconds && t.is24,
        dp__time_col_reg_with_button: !t.enableSeconds && !t.is24,
        dp__time_col_sec: t.enableSeconds && t.is24,
        dp__time_col_sec_with_button: t.enableSeconds && !t.is24
      })
    ), Z = L(() => {
      const l = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return t.enableSeconds ? l.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : l;
    }), K = L(() => Z.value.filter((l) => !l.separator)), te = L(() => (l) => {
      if (l === "hours") {
        const r = Y(+t.hours);
        return { text: r < 10 ? `0${r}` : `${r}`, value: r };
      }
      return { text: t[l] < 10 ? `0${t[l]}` : `${t[l]}`, value: t[l] };
    }), re = (l) => {
      const r = t.is24 ? 24 : 12, h = l === "hours" ? r : 60, w = +t[`${l}GridIncrement`], A = l === "hours" && !t.is24 ? w : 0, c = [];
      for (let P = A; P < h; P += w)
        c.push({ value: P, text: P < 10 ? `0${P}` : `${P}` });
      return l === "hours" && !t.is24 && c.push({ value: 0, text: "12" }), Ka(c);
    }, ue = (l, r) => {
      const h = t.minTime ? $(qt(t.minTime)) : null, w = t.maxTime ? $(qt(t.maxTime)) : null, A = $(qt(Q.value, r, l));
      return h && w ? (Pt(A, w) || ht(A, w)) && (Ct(A, h) || ht(A, h)) : h ? Ct(A, h) || ht(A, h) : w ? Pt(A, w) || ht(A, w) : !0;
    }, ce = L(() => (l) => re(l).flat().filter((h) => h || h.value === 0).map((h) => h.value).filter((h) => !ue(h, l))), fe = (l) => t[`no${l[0].toUpperCase() + l.slice(1)}Overlay`], R = (l) => {
      fe(l) || (C[l] = !C[l], C[l] || a("overlay-closed"));
    }, b = (l) => l === "hours" ? qe : l === "minutes" ? Xe : pt, v = (l, r = !0) => {
      const h = r ? V : U, w = r ? +t[`${l}Increment`] : -+t[`${l}Increment`];
      ue(+t[l] + w, l) && a(
        `update:${l}`,
        b(l)(h({ [l]: +t[l] }, { [l]: +t[`${l}Increment`] }))
      );
    }, Y = (l) => t.is24 ? l : (l >= 12 ? W.value = "PM" : W.value = "AM", qa(l)), I = () => {
      W.value === "PM" ? (W.value = "AM", a("update:hours", t.hours - 12)) : (W.value = "PM", a("update:hours", t.hours + 12)), a("am-pm-change", W.value);
    }, T = (l) => {
      C[l] = !0;
    }, y = (l, r, h) => {
      if (l && t.arrowNavigation) {
        Array.isArray(d.value[r]) ? d.value[r][h] = l : d.value[r] = [l];
        const w = d.value.reduce(
          (A, c) => c.map((P, f) => [...A[f] || [], c[f]]),
          []
        );
        m(t.closeTimePickerBtn), _.value && (w[1] = w[1].concat(_.value)), o(w, t.order);
      }
    }, u = (l, r) => l === "hours" && !t.is24 ? a(`update:${l}`, W.value === "PM" ? r + 12 : r) : a(`update:${l}`, r);
    return n({ openChildCmp: T }), (l, r) => {
      var h;
      return l.disabled ? S("", !0) : (p(), B("div", Ur, [
        (p(!0), B(ye, null, Ce(i(Z), (w, A) => {
          var c, P, f;
          return p(), B("div", {
            key: A,
            class: he(i(O))
          }, [
            w.separator ? (p(), B(ye, { key: 0 }, [
              Ze(" : ")
            ], 64)) : (p(), B(ye, { key: 1 }, [
              ae("button", {
                type: "button",
                class: he({
                  dp__btn: !0,
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: i(x)(w.type)
                }),
                "aria-label": (c = i(g).ariaLabels) == null ? void 0 : c.incrementValue(w.type),
                tabindex: "0",
                onKeydown: [
                  ie((E) => v(w.type), ["enter"]),
                  ie((E) => v(w.type), ["space"])
                ],
                onClick: (E) => v(w.type),
                ref_for: !0,
                ref: (E) => y(E, A, 0)
              }, [
                l.$slots["arrow-up"] ? G(l.$slots, "arrow-up", { key: 0 }) : S("", !0),
                l.$slots["arrow-up"] ? S("", !0) : (p(), ve(i(Kn), { key: 1 }))
              ], 42, Wr),
              ae("button", {
                type: "button",
                "aria-label": (P = i(g).ariaLabels) == null ? void 0 : P.openTpOverlay(w.type),
                class: he(["dp__btn", fe(w.type) ? "" : "dp__time_display"]),
                tabindex: "0",
                onKeydown: [
                  ie((E) => R(w.type), ["enter"]),
                  ie((E) => R(w.type), ["space"])
                ],
                onClick: (E) => R(w.type),
                ref_for: !0,
                ref: (E) => y(E, A, 1)
              }, [
                l.$slots[w.type] ? G(l.$slots, w.type, {
                  key: 0,
                  text: i(te)(w.type).text,
                  value: i(te)(w.type).value
                }) : S("", !0),
                l.$slots[w.type] ? S("", !0) : (p(), B(ye, { key: 1 }, [
                  Ze(Oe(i(te)(w.type).text), 1)
                ], 64))
              ], 42, Hr),
              ae("button", {
                type: "button",
                class: he({
                  dp__btn: !0,
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: i(z)(w.type)
                }),
                "aria-label": (f = i(g).ariaLabels) == null ? void 0 : f.decrementValue(w.type),
                tabindex: "0",
                onKeydown: [
                  ie((E) => v(w.type, !1), ["enter"]),
                  ie((E) => v(w.type, !1), ["space"])
                ],
                onClick: (E) => v(w.type, !1),
                ref_for: !0,
                ref: (E) => y(E, A, 2)
              }, [
                l.$slots["arrow-down"] ? G(l.$slots, "arrow-down", { key: 0 }) : S("", !0),
                l.$slots["arrow-down"] ? S("", !0) : (p(), ve(i(jn), { key: 1 }))
              ], 42, xr)
            ], 64))
          ], 2);
        }), 128)),
        l.is24 ? S("", !0) : (p(), B("div", zr, [
          l.$slots["am-pm-button"] ? G(l.$slots, "am-pm-button", {
            key: 0,
            toggle: I,
            value: W.value
          }) : S("", !0),
          l.$slots["am-pm-button"] ? S("", !0) : (p(), B("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: _,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (h = i(g).ariaLabels) == null ? void 0 : h.amPmButton,
            tabindex: "0",
            onClick: I,
            onKeydown: [
              ie(Je(I, ["prevent"]), ["enter"]),
              ie(Je(I, ["prevent"]), ["space"])
            ]
          }, Oe(W.value), 41, Kr))
        ])),
        (p(!0), B(ye, null, Ce(i(K), (w, A) => (p(), ve(kt, {
          key: A,
          name: i(N)(C[w.type]),
          css: i(F)
        }, {
          default: se(() => [
            C[w.type] ? (p(), ve(At, {
              key: 0,
              items: re(w.type),
              "disabled-values": i(g).filters.times[w.type].concat(i(ce)(w.type)),
              "esc-close": l.escClose,
              "aria-labels": i(g).ariaLabels,
              "hide-navigation": l.hideNavigation,
              "onUpdate:modelValue": (c) => u(w.type, c),
              onSelected: (c) => R(w.type),
              onToggle: (c) => R(w.type),
              onResetFlow: r[0] || (r[0] = (c) => l.$emit("reset-flow")),
              type: w.type
            }, Ee({
              "button-icon": se(() => [
                l.$slots["clock-icon"] ? G(l.$slots, "clock-icon", { key: 0 }) : S("", !0),
                l.$slots["clock-icon"] ? S("", !0) : (p(), ve(i(zn), { key: 1 }))
              ]),
              _: 2
            }, [
              l.$slots[`${w.type}-overlay-value`] ? {
                name: "item",
                fn: se(({ item: c }) => [
                  G(l.$slots, `${w.type}-overlay-value`, {
                    text: c.text,
                    value: c.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "disabled-values", "esc-close", "aria-labels", "hide-navigation", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : S("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), Gr = ["aria-label"], Zr = { class: "dp__overlay_container dp__container_flex dp__time_picker_overlay_container" }, qr = {
  key: 1,
  class: "dp__overlay_row dp__flex_row"
}, Xr = ["aria-label"], Jr = /* @__PURE__ */ je({
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    ...rt
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { buildMatrix: o, setTimePicker: m } = at(), g = gn(), { hideNavigationButtons: N, defaults: F } = Le(t), { transitionName: C, showTransition: W } = Ht(F.value.transitions), _ = H(null), d = H(null), $ = H([]), Q = H(null);
    We(() => {
      a("mount"), !t.timePicker && t.arrowNavigation ? o([$e(_.value)], "time") : m(!0, t.timePicker);
    });
    const x = L(() => t.range && t.modelAuto ? Qn(t.internalModelValue) : !0), z = H(!1), V = (R) => ({
      hours: Array.isArray(t.hours) ? t.hours[R] : t.hours,
      minutes: Array.isArray(t.minutes) ? t.minutes[R] : t.minutes,
      seconds: Array.isArray(t.seconds) ? t.seconds[R] : t.seconds
    }), U = L(() => {
      const R = [];
      if (t.range)
        for (let b = 0; b < 2; b++)
          R.push(V(b));
      else
        R.push(V(0));
      return R;
    }), O = (R, b = !1, v = "") => {
      b || a("reset-flow"), z.value = R, a(R ? "overlay-opened" : "overlay-closed"), t.arrowNavigation && m(R), Qe(() => {
        v !== "" && $.value[0] && $.value[0].openChildCmp(v);
      });
    }, Z = L(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: t.autoApply && !t.keepActionRow
    })), K = ft(g, "timePicker"), te = (R, b, v) => t.range ? b === 0 ? [R, U.value[1][v]] : [U.value[0][v], R] : R, re = (R) => {
      a("update:hours", R);
    }, ue = (R) => {
      a("update:minutes", R);
    }, ce = (R) => {
      a("update:seconds", R);
    }, fe = () => {
      Q.value && t.arrowNavigation && Q.value.focus({ preventScroll: !0 });
    };
    return n({ toggleTimePicker: O }), (R, b) => {
      var v;
      return p(), B("div", null, [
        R.timePicker ? S("", !0) : Yt((p(), B("button", {
          key: 0,
          type: "button",
          class: he(i(Z)),
          "aria-label": (v = i(F).ariaLabels) == null ? void 0 : v.openTimePicker,
          tabindex: "0",
          ref_key: "openTimePickerBtn",
          ref: _,
          onKeydown: [
            b[0] || (b[0] = ie((Y) => O(!0), ["enter"])),
            b[1] || (b[1] = ie((Y) => O(!0), ["space"]))
          ],
          onClick: b[2] || (b[2] = (Y) => O(!0))
        }, [
          R.$slots["clock-icon"] ? G(R.$slots, "clock-icon", { key: 0 }) : S("", !0),
          R.$slots["clock-icon"] ? S("", !0) : (p(), ve(i(zn), { key: 1 }))
        ], 42, Gr)), [
          [Vt, !i(N)("time")]
        ]),
        mt(kt, {
          name: i(C)(z.value),
          css: i(W)
        }, {
          default: se(() => {
            var Y;
            return [
              z.value || R.timePicker ? (p(), B("div", {
                key: 0,
                class: "dp__overlay",
                ref_key: "overlayRef",
                ref: Q,
                tabindex: "0"
              }, [
                ae("div", Zr, [
                  R.$slots["time-picker-overlay"] ? G(R.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: re,
                    setMinutes: ue,
                    setSeconds: ce
                  }) : S("", !0),
                  R.$slots["time-picker-overlay"] ? S("", !0) : (p(), B("div", qr, [
                    (p(!0), B(ye, null, Ce(i(U), (I, T) => Yt((p(), ve(jr, Pe({ key: T }, {
                      ...R.$props,
                      order: T,
                      hours: I.hours,
                      minutes: I.minutes,
                      seconds: I.seconds,
                      closeTimePickerBtn: d.value,
                      disabled: T === 0 ? R.fixedStart : R.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: $,
                      "onUpdate:hours": (y) => re(te(y, T, "hours")),
                      "onUpdate:minutes": (y) => ue(te(y, T, "minutes")),
                      "onUpdate:seconds": (y) => ce(te(y, T, "seconds")),
                      onMounted: fe,
                      onOverlayClosed: fe,
                      onAmPmChange: b[3] || (b[3] = (y) => R.$emit("am-pm-change", y))
                    }), Ee({ _: 2 }, [
                      Ce(i(K), (y, u) => ({
                        name: y,
                        fn: se((l) => [
                          G(R.$slots, y, Re(ze(l)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Vt, T === 0 ? !0 : i(x)]
                    ])), 128))
                  ])),
                  R.timePicker ? S("", !0) : Yt((p(), B("button", {
                    key: 2,
                    type: "button",
                    ref_key: "closeTimePickerBtn",
                    ref: d,
                    class: he(i(Z)),
                    "aria-label": (Y = i(F).ariaLabels) == null ? void 0 : Y.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      b[4] || (b[4] = ie((I) => O(!1), ["enter"])),
                      b[5] || (b[5] = ie((I) => O(!1), ["space"]))
                    ],
                    onClick: b[6] || (b[6] = (I) => O(!1))
                  }, [
                    R.$slots["calendar-icon"] ? G(R.$slots, "calendar-icon", { key: 0 }) : S("", !0),
                    R.$slots["calendar-icon"] ? S("", !0) : (p(), ve(i(Wt), { key: 1 }))
                  ], 42, Xr)), [
                    [Vt, !i(N)("time")]
                  ])
                ])
              ], 512)) : S("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Qr = (e, n) => {
  const { isDisabled: a, matchDate: t, getWeekFromDate: o, defaults: m } = Le(n), g = H(null), N = H(M()), F = (r) => {
    !r.current && n.hideOffsetDates || (g.value = r.value);
  }, C = () => {
    g.value = null;
  }, W = (r) => Array.isArray(e.value) && n.range && e.value[0] && g.value ? r ? Ve(g.value, e.value[0]) : Ie(g.value, e.value[0]) : !0, _ = (r, h) => {
    const w = () => e.value ? h ? e.value[0] || null : e.value[1] : null, A = e.value && Array.isArray(e.value) ? w() : null;
    return ge(M(r.value), A);
  }, d = (r) => {
    const h = Array.isArray(e.value) ? e.value[0] : null;
    return r ? !Ie(g.value || null, h) : !0;
  }, $ = (r, h = !0) => (n.range || n.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? n.hideOffsetDates && !r.current ? !1 : ge(M(r.value), e.value[h ? 0 : 1]) : n.range ? _(r, h) && d(h) || ge(r.value, Array.isArray(e.value) ? e.value[0] : null) && W(h) : !1, Q = (r, h, w) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? r ? !1 : w ? Ve(e.value[0], h.value) : Ie(e.value[0], h.value) : !1, x = (r) => !e.value || n.hideOffsetDates && !r.current ? !1 : n.range ? n.modelAuto && Array.isArray(e.value) ? ge(r.value, e.value[0] ? e.value[0] : N.value) : !1 : n.multiDates && Array.isArray(e.value) ? e.value.some((h) => ge(h, r.value)) : ge(r.value, e.value ? e.value : N.value), z = (r) => {
    if (n.autoRange || n.weekPicker) {
      if (g.value) {
        if (n.hideOffsetDates && !r.current)
          return !1;
        const h = dt(g.value, +n.autoRange), w = o(M(g.value));
        return n.weekPicker ? ge(w[1], M(r.value)) : ge(h, M(r.value));
      }
      return !1;
    }
    return !1;
  }, V = (r) => {
    if (n.autoRange || n.weekPicker) {
      if (g.value) {
        const h = dt(g.value, +n.autoRange);
        if (n.hideOffsetDates && !r.current)
          return !1;
        const w = o(M(g.value));
        return n.weekPicker ? Ve(r.value, w[0]) && Ie(r.value, w[1]) : Ve(r.value, g.value) && Ie(r.value, h);
      }
      return !1;
    }
    return !1;
  }, U = (r) => {
    if (n.autoRange || n.weekPicker) {
      if (g.value) {
        if (n.hideOffsetDates && !r.current)
          return !1;
        const h = o(M(g.value));
        return n.weekPicker ? ge(h[0], r.value) : ge(g.value, r.value);
      }
      return !1;
    }
    return !1;
  }, O = (r) => Gn(e.value, g.value, r.value), Z = () => n.modelAuto && Array.isArray(n.internalModelValue) ? !!n.internalModelValue[0] : !1, K = () => n.modelAuto ? Qn(n.internalModelValue) : !0, te = (r) => {
    if (Array.isArray(e.value) && e.value.length || n.weekPicker)
      return !1;
    const h = n.range ? !$(r) && !$(r, !1) : !0;
    return !a(r.value) && !x(r) && !(!r.current && n.hideOffsetDates) && h;
  }, re = (r) => n.range ? n.modelAuto ? Z() && x(r) : !1 : x(r), ue = (r) => n.highlight ? t(r.value, n.highlight) : !1, ce = (r) => a(r.value) && n.highlightDisabledDays === !1, fe = (r) => n.highlightWeekDays && n.highlightWeekDays.includes(r.value.getDay()), R = (r) => (n.range || n.weekPicker) && (!(m.value.multiCalendars > 0) || r.current) && K() && !(!r.current && n.hideOffsetDates) && !x(r) ? O(r) : !1, b = (r) => {
    const { isRangeStart: h, isRangeEnd: w } = I(r), A = n.range ? h || w : !1;
    return {
      dp__cell_offset: !r.current,
      dp__pointer: !n.disabled && !(!r.current && n.hideOffsetDates) && !a(r.value),
      dp__cell_disabled: a(r.value),
      dp__cell_highlight: !ce(r) && (ue(r) || fe(r)) && !re(r) && !A,
      dp__cell_highlight_active: !ce(r) && (ue(r) || fe(r)) && re(r),
      dp__today: !n.noToday && ge(r.value, N.value) && r.current
    };
  }, v = (r) => ({
    dp__active_date: re(r),
    dp__date_hover: te(r)
  }), Y = (r) => ({
    ...T(r),
    ...y(r),
    dp__range_between_week: R(r) && n.weekPicker
  }), I = (r) => {
    const h = m.value.multiCalendars > 0 ? r.current && $(r) && K() : $(r) && K(), w = m.value.multiCalendars > 0 ? r.current && $(r, !1) && K() : $(r, !1) && K();
    return { isRangeStart: h, isRangeEnd: w };
  }, T = (r) => {
    const { isRangeStart: h, isRangeEnd: w } = I(r);
    return {
      dp__range_start: h,
      dp__range_end: w,
      dp__range_between: R(r) && !n.weekPicker,
      dp__date_hover_start: Q(te(r), r, !0),
      dp__date_hover_end: Q(te(r), r, !1)
    };
  }, y = (r) => ({
    ...T(r),
    dp__cell_auto_range: V(r),
    dp__cell_auto_range_start: U(r),
    dp__cell_auto_range_end: z(r)
  }), u = (r) => n.range ? n.autoRange ? y(r) : n.modelAuto ? { ...v(r), ...T(r) } : T(r) : n.weekPicker ? Y(r) : v(r);
  return {
    setHoverDate: F,
    clearHoverDate: C,
    getDayClassData: (r) => ({
      ...b(r),
      ...u(r),
      [n.dayClass ? n.dayClass(r.value) : ""]: !0,
      [n.calendarCellClassName]: !!n.calendarCellClassName
    })
  };
}, el = ["id", "onKeydown"], tl = {
  key: 0,
  class: "dp__sidebar_left"
}, nl = {
  key: 1,
  class: "dp__preset_ranges"
}, al = ["onClick"], rl = {
  key: 2,
  class: "dp__sidebar_right"
}, ll = {
  key: 3,
  class: "dp__action_extra"
}, ol = /* @__PURE__ */ je({
  __name: "DatepickerMenu",
  props: {
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...rt
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, o = L(() => {
      const { openOnTop: k, internalModelValue: j, ...Ae } = t;
      return Ae;
    }), { setMenuFocused: m, setShiftKey: g, control: N } = Zn(), { getCalendarDays: F, defaults: C } = Le(t), W = gn(), _ = H(null), d = _t({
      timePicker: !!(!t.enableTimePicker || t.timePicker || t.monthPicker),
      monthYearInput: !!t.timePicker,
      calendar: !1
    }), $ = H([]), Q = H([]), x = H(null), z = H(null), V = H(0), U = H(!1), O = H(0);
    We(() => {
      var j;
      U.value = !0, !((j = t.presetRanges) != null && j.length) && !W["left-sidebar"] && !W["right-sidebar"] && (X(), window.addEventListener("resize", X));
      const k = $e(z);
      if (k && !t.textInput && !t.inline && (m(!0), ce()), k) {
        const Ae = (Me) => {
          t.allowPreventDefault && Me.preventDefault(), Me.stopImmediatePropagation(), Me.stopPropagation();
        };
        k.addEventListener("pointerdown", Ae), k.addEventListener("mousedown", Ae);
      }
    }), yn(() => {
      window.removeEventListener("resize", X);
    });
    const { arrowRight: Z, arrowLeft: K, arrowDown: te, arrowUp: re } = at(), ue = (k) => {
      k || k === 0 ? Q.value[k].triggerTransition(
        Y.value(k),
        I.value(k)
      ) : Q.value.forEach(
        (j, Ae) => j.triggerTransition(Y.value(Ae), I.value(Ae))
      );
    }, ce = () => {
      const k = $e(z);
      k && k.focus({ preventScroll: !0 });
    }, fe = () => {
      var k;
      (k = t.flow) != null && k.length && O.value !== -1 && (O.value += 1, a("flow-step", O.value), s());
    }, R = () => {
      O.value = -1;
    }, {
      calendars: b,
      modelValue: v,
      month: Y,
      year: I,
      time: T,
      updateTime: y,
      updateMonthYear: u,
      selectDate: l,
      getWeekNum: r,
      monthYearSelect: h,
      handleScroll: w,
      handleArrow: A,
      handleSwipe: c,
      getMarker: P,
      selectCurrentDate: f,
      presetDateRange: E
    } = lr(t, a, fe, ue, O), { setHoverDate: le, clearHoverDate: be, getDayClassData: He } = Qr(v, t);
    nt(
      b,
      () => {
        t.openOnTop && setTimeout(() => {
          a("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const ne = ft(W, "calendar"), Fe = ft(W, "action"), Ge = ft(W, "timePicker"), Te = ft(W, "monthYear"), xe = L(() => t.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), lt = L(() => Ga(t.yearRange, t.reverseYears)), wt = L(() => Za(t.locale, t.monthNameFormat)), X = () => {
      const k = $e(_);
      k && (V.value = k.getBoundingClientRect().width);
    }, de = L(() => (k) => F(Y.value(k), I.value(k))), oe = L(
      () => C.value.multiCalendars > 0 && t.range ? [...Array(C.value.multiCalendars).keys()] : [0]
    ), ot = L(
      () => (k) => k === 1
    ), st = L(() => t.monthPicker || t.timePicker || t.yearPicker), xt = L(
      () => ({
        dp__menu_inner: !0,
        dp__flex_display: C.value.multiCalendars > 0
      })
    ), zt = L(() => ({
      dp__instance_calendar: C.value.multiCalendars > 0
    })), Nt = L(() => ({
      dp__menu_disabled: t.disabled,
      dp__menu_readonly: t.readonly
    })), bt = L(
      () => (k) => jt(de, k)
    ), Kt = L(
      () => ({
        dp__menu: !0,
        dp__menu_index: !t.inline,
        dp__relative: t.inline,
        [t.menuClassName]: !!t.menuClassName
      })
    ), jt = (k, j) => k.value(j).map((Ae) => ({
      ...Ae,
      days: Ae.days.map((Me) => (Me.marker = P(Me), Me.classData = He(Me), Me))
    })), Gt = (k) => {
      k.stopPropagation(), k.stopImmediatePropagation();
    }, Rt = () => {
      t.escClose && a("close-picker");
    }, bn = (k, j = !1) => {
      l(k, j), t.spaceConfirm && a("select-date");
    }, Ot = (k) => {
      var j;
      (j = t.flow) != null && j.length && (d[k] = !0, Object.keys(d).filter((Ae) => !d[Ae]).length || s());
    }, vt = (k, j, Ae, Me, ...It) => {
      if (t.flow[O.value] === k) {
        const J = Me ? j.value[0] : j.value;
        J && J[Ae](...It);
      }
    }, s = () => {
      vt("month", $, "toggleMonthPicker", !0, !0), vt("year", $, "toggleYearPicker", !0, !0), vt("calendar", x, "toggleTimePicker", !1, !1, !0), vt("time", x, "toggleTimePicker", !1, !0, !0);
      const k = t.flow[O.value];
      (k === "hours" || k === "minutes" || k === "seconds") && vt(k, x, "toggleTimePicker", !1, !0, !0, k);
    }, D = (k) => {
      if (t.arrowNavigation) {
        if (k === "up")
          return re();
        if (k === "down")
          return te();
        if (k === "left")
          return K();
        if (k === "right")
          return Z();
      } else
        k === "left" || k === "up" ? A("left", 0, k === "up") : A("right", 0, k === "down");
    }, q = (k) => {
      g(k.shiftKey), !t.disableMonthYearSelect && k.code === "Tab" && k.target.classList.contains("dp__menu") && N.value.shiftKeyInMenu && (k.preventDefault(), k.stopImmediatePropagation(), a("close-picker"));
    }, ee = (k) => {
      $.value[0] && $.value[0].handleMonthYearChange(k);
    }, De = () => {
      ce(), a("time-picker-close");
    };
    return n({
      updateMonthYear: u
    }), (k, j) => {
      var Ae;
      return p(), ve(kt, {
        appear: "",
        name: (Ae = i(C).transitions) == null ? void 0 : Ae.menuAppear,
        css: !!k.transitions
      }, {
        default: se(() => {
          var Me, It;
          return [
            ae("div", {
              id: k.uid ? `dp-menu-${k.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: z,
              role: "dialog",
              class: he(i(Kt)),
              onMouseleave: j[14] || (j[14] = //@ts-ignore
              (...J) => i(be) && i(be)(...J)),
              onClick: Gt,
              onKeydown: [
                ie(Rt, ["esc"]),
                j[15] || (j[15] = ie(Je((J) => D("left"), ["prevent"]), ["left"])),
                j[16] || (j[16] = ie(Je((J) => D("up"), ["prevent"]), ["up"])),
                j[17] || (j[17] = ie(Je((J) => D("down"), ["prevent"]), ["down"])),
                j[18] || (j[18] = ie(Je((J) => D("right"), ["prevent"]), ["right"])),
                q
              ]
            }, [
              (k.disabled || k.readonly) && k.inline ? (p(), B("div", {
                key: 0,
                class: he(i(Nt))
              }, null, 2)) : S("", !0),
              !k.inline && !k.teleportCenter ? (p(), B("div", {
                key: 1,
                class: he(i(xe))
              }, null, 2)) : S("", !0),
              ae("div", {
                class: he({
                  dp__menu_content_wrapper: ((Me = k.presetRanges) == null ? void 0 : Me.length) || !!k.$slots["left-sidebar"] || !!k.$slots["right-sidebar"]
                })
              }, [
                k.$slots["left-sidebar"] ? (p(), B("div", tl, [
                  G(k.$slots, "left-sidebar", Re(ze({ handleMonthYearChange: ee })))
                ])) : S("", !0),
                (It = k.presetRanges) != null && It.length ? (p(), B("div", nl, [
                  (p(!0), B(ye, null, Ce(k.presetRanges, (J, yt) => (p(), B("div", {
                    key: yt,
                    style: et(J.style || {}),
                    class: "dp__preset_range",
                    onClick: (me) => i(E)(J.range, !!J.slot)
                  }, [
                    J.slot ? G(k.$slots, J.slot, {
                      key: 0,
                      presetDateRange: i(E),
                      label: J.label,
                      range: J.range
                    }) : (p(), B(ye, { key: 1 }, [
                      Ze(Oe(J.label), 1)
                    ], 64))
                  ], 12, al))), 128))
                ])) : S("", !0),
                ae("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: _,
                  role: "document"
                }, [
                  ae("div", {
                    class: he(i(xt))
                  }, [
                    (p(!0), B(ye, null, Ce(i(oe), (J, yt) => (p(), B("div", {
                      key: J,
                      class: he(i(zt))
                    }, [
                      !k.disableMonthYearSelect && !k.timePicker ? (p(), ve(Fr, Pe({
                        key: 0,
                        ref_for: !0,
                        ref: (me) => {
                          me && ($.value[yt] = me);
                        },
                        months: i(wt),
                        years: i(lt),
                        month: i(Y)(J),
                        year: i(I)(J),
                        instance: J,
                        "internal-model-value": e.internalModelValue
                      }, i(o), {
                        onMount: j[0] || (j[0] = (me) => Ot("monthYearInput")),
                        onResetFlow: R,
                        onUpdateMonthYear: (me) => i(u)(J, me),
                        onMonthYearSelect: i(h),
                        onOverlayClosed: ce
                      }), Ee({ _: 2 }, [
                        Ce(i(Te), (me, ta) => ({
                          name: me,
                          fn: se((Zt) => [
                            G(k.$slots, me, Re(ze(Zt)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : S("", !0),
                      mt(Pr, Pe({
                        ref_for: !0,
                        ref: (me) => {
                          me && (Q.value[yt] = me);
                        },
                        "specific-mode": i(st),
                        "get-week-num": i(r),
                        instance: J,
                        "mapped-dates": i(bt)(J),
                        month: i(Y)(J),
                        year: i(I)(J)
                      }, i(o), {
                        onSelectDate: (me) => i(l)(me, !i(ot)(J)),
                        onHandleSpace: (me) => bn(me, !i(ot)(J)),
                        onSetHoverDate: j[1] || (j[1] = (me) => i(le)(me)),
                        onHandleScroll: (me) => i(w)(me, J),
                        onHandleSwipe: (me) => i(c)(me, J),
                        onMount: j[2] || (j[2] = (me) => Ot("calendar")),
                        onResetFlow: R,
                        onTooltipOpen: j[3] || (j[3] = (me) => k.$emit("tooltip-open", me)),
                        onTooltipClose: j[4] || (j[4] = (me) => k.$emit("tooltip-close", me))
                      }), Ee({ _: 2 }, [
                        Ce(i(ne), (me, ta) => ({
                          name: me,
                          fn: se((Zt) => [
                            G(k.$slots, me, Re(ze({ ...Zt })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  ae("div", null, [
                    k.$slots["time-picker"] ? G(k.$slots, "time-picker", Re(Pe({ key: 0 }, { time: i(T), updateTime: i(y) }))) : (p(), B(ye, { key: 1 }, [
                      k.enableTimePicker && !k.monthPicker && !k.weekPicker ? (p(), ve(Jr, Pe({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: x,
                        hours: i(T).hours,
                        minutes: i(T).minutes,
                        seconds: i(T).seconds,
                        "internal-model-value": e.internalModelValue
                      }, i(o), {
                        onMount: j[5] || (j[5] = (J) => Ot("timePicker")),
                        "onUpdate:hours": j[6] || (j[6] = (J) => i(y)(J)),
                        "onUpdate:minutes": j[7] || (j[7] = (J) => i(y)(J, !1)),
                        "onUpdate:seconds": j[8] || (j[8] = (J) => i(y)(J, !1, !0)),
                        onResetFlow: R,
                        onOverlayClosed: De,
                        onOverlayOpened: j[9] || (j[9] = (J) => k.$emit("time-picker-open", J)),
                        onAmPmChange: j[10] || (j[10] = (J) => k.$emit("am-pm-change", J))
                      }), Ee({ _: 2 }, [
                        Ce(i(Ge), (J, yt) => ({
                          name: J,
                          fn: se((me) => [
                            G(k.$slots, J, Re(ze(me)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : S("", !0)
                    ], 64))
                  ])
                ], 512),
                k.$slots["right-sidebar"] ? (p(), B("div", rl, [
                  G(k.$slots, "right-sidebar", Re(ze({ handleMonthYearChange: ee })))
                ])) : S("", !0),
                k.$slots["action-extra"] ? (p(), B("div", ll, [
                  k.$slots["action-extra"] ? G(k.$slots, "action-extra", {
                    key: 0,
                    selectCurrentDate: i(f)
                  }) : S("", !0)
                ])) : S("", !0)
              ], 2),
              !k.autoApply || k.keepActionRow ? (p(), ve(kr, Pe({
                key: 2,
                "menu-mount": U.value,
                "calendar-width": V.value,
                "internal-model-value": e.internalModelValue
              }, i(o), {
                onClosePicker: j[11] || (j[11] = (J) => k.$emit("close-picker")),
                onSelectDate: j[12] || (j[12] = (J) => k.$emit("select-date")),
                onInvalidSelect: j[13] || (j[13] = (J) => k.$emit("invalid-select")),
                onSelectNow: i(f)
              }), Ee({ _: 2 }, [
                Ce(i(Fe), (J, yt) => ({
                  name: J,
                  fn: se((me) => [
                    G(k.$slots, J, Re(ze({ ...me })))
                  ])
                }))
              ]), 1040, ["menu-mount", "calendar-width", "internal-model-value", "onSelectNow"])) : S("", !0)
            ], 42, el)
          ];
        }),
        _: 3
      }, 8, ["name", "css"]);
    };
  }
}), sl = typeof window < "u" ? window : void 0, on = () => {
}, il = (e) => aa() ? (ra(e), !0) : !1, ul = (e, n, a, t) => {
  if (!e)
    return on;
  let o = on;
  const m = nt(
    () => i(e),
    (N) => {
      o(), N && (N.addEventListener(n, a, t), o = () => {
        N.removeEventListener(n, a, t), o = on;
      });
    },
    { immediate: !0, flush: "post" }
  ), g = () => {
    m(), o();
  };
  return il(g), g;
}, dl = (e, n, a, t = {}) => {
  const { window: o = sl, event: m = "pointerdown" } = t;
  return o ? ul(o, m, (N) => {
    const F = $e(e), C = $e(n);
    !F || !C || F === N.target || N.composedPath().includes(F) || N.composedPath().includes(C) || a(N);
  }, { passive: !0 }) : void 0;
}, cl = /* @__PURE__ */ je({
  __name: "VueDatePicker",
  props: {
    ...rt
  },
  emits: [
    "update:model-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, o = gn(), m = H(!1), g = St(t, "modelValue"), N = St(t, "timezone"), F = H(null), C = H(null), W = H(!1), _ = H(null), { setMenuFocused: d, setShiftKey: $ } = Zn(), { clearArrowNav: Q } = at(), { validateDate: x, isValidTime: z, defaults: V } = Le(t);
    We(() => {
      b(t.modelValue), t.inline || (ce(_.value).addEventListener("scroll", l), window.addEventListener("resize", r)), t.inline && (m.value = !0);
    }), yn(() => {
      if (!t.inline) {
        const X = ce(_.value);
        X && X.removeEventListener("scroll", l), window.removeEventListener("resize", r);
      }
    });
    const U = ft(o, "all", t.presetRanges), O = ft(o, "input");
    nt(
      [g, N],
      () => {
        b(g.value);
      },
      { deep: !0 }
    );
    const { openOnTop: Z, menuStyle: K, resetPosition: te, setMenuPosition: re, setInitialPosition: ue, getScrollableParent: ce } = ir(F, C, a, t), {
      inputValue: fe,
      internalModelValue: R,
      parseExternalModelValue: b,
      emitModelValue: v,
      formatInputValue: Y,
      checkBeforeEmit: I
    } = or(a, t, W), T = L(
      () => ({
        dp__main: !0,
        dp__theme_dark: t.dark,
        dp__theme_light: !t.dark,
        dp__flex_display: t.inline,
        dp__flex_display_with_input: t.inlineWithInput
      })
    ), y = L(() => t.dark ? "dp__theme_dark" : "dp__theme_light"), u = L(() => t.teleport ? {
      to: typeof t.teleport == "boolean" ? "body" : t.teleport,
      disabled: t.inline
    } : { class: "dp__outer_menu_wrap" }), l = () => {
      m.value && (t.closeOnScroll ? be() : re());
    }, r = () => {
      m.value && re();
    }, h = async () => {
      var X, de, oe;
      !t.disabled && !t.readonly && (te(), await Qe(), m.value = !0, await Qe(), ue(), await Qe(), re(), delete K.value.opacity, (X = V.value.transitions) != null && X.menuAppear || (oe = (de = F.value) == null ? void 0 : de.$el) == null || oe.classList.add("dp__menu_transitioned"), m.value && a("open"), m.value || le(), b(t.modelValue));
    }, w = () => {
      fe.value = "", le(), a("update:model-value", null), a("cleared"), be();
    }, A = () => {
      const X = R.value;
      return !X || !Array.isArray(X) && x(X) ? !0 : Array.isArray(X) ? X.length === 2 && x(X[0]) && x(X[1]) ? !0 : x(X[0]) : !1;
    }, c = () => {
      I() && A() ? (v(), be()) : a("invalid-select", R.value);
    }, P = (X) => {
      f(), v(), t.closeOnAutoApply && !X && be();
    }, f = () => {
      C.value && t.textInput && C.value.setParsedDate(R.value);
    }, E = (X = !1) => {
      t.autoApply && z(R.value) && A() && (t.range && Array.isArray(R.value) ? (t.partialRange || R.value.length === 2) && P(X) : P(X));
    }, le = () => {
      t.textInput || (R.value = null);
    }, be = () => {
      t.inline || (m.value && (m.value = !1, d(!1), $(!1), Q(), a("closed"), ue(), fe.value && b(g.value)), le());
    }, He = (X, de) => {
      if (!X) {
        R.value = null;
        return;
      }
      R.value = X, de && (c(), a("text-submit"));
    }, ne = () => {
      t.autoApply && z(R.value) && v(), f();
    }, Fe = () => m.value ? be() : h(), Ge = (X) => {
      R.value = X;
    }, Te = () => {
      t.textInput && (W.value = !0, Y()), a("focus");
    }, xe = () => {
      t.textInput && (W.value = !1, b(t.modelValue)), a("blur");
    }, lt = (X) => {
      F.value && F.value.updateMonthYear(0, {
        month: Bn(X.month),
        year: Bn(X.year)
      });
    }, wt = (X) => {
      b(X || t.modelValue);
    };
    return dl(
      F,
      C,
      t.onClickOutside ? () => t.onClickOutside(A) : be
    ), n({
      closeMenu: be,
      selectDate: c,
      clearValue: w,
      openMenu: h,
      onScroll: l,
      formatInputValue: Y,
      // exposed for testing purposes
      updateInternalModelValue: Ge,
      // modify internal modelValue
      setMonthYear: lt,
      parseModel: wt
    }), (X, de) => (p(), B("div", {
      class: he(i(T)),
      ref_key: "pickerWrapperRef",
      ref: _
    }, [
      mt(yr, Pe({
        ref_key: "inputRef",
        ref: C,
        "is-menu-open": m.value,
        "input-value": i(fe),
        "onUpdate:inputValue": de[0] || (de[0] = (oe) => ut(fe) ? fe.value = oe : null)
      }, X.$props, {
        onClear: w,
        onOpen: h,
        onSetInputDate: He,
        onSetEmptyDate: i(v),
        onSelectDate: c,
        onToggle: Fe,
        onClose: be,
        onFocus: Te,
        onBlur: xe,
        onRealBlur: de[1] || (de[1] = (oe) => W.value = !1)
      }), Ee({ _: 2 }, [
        Ce(i(O), (oe, ot) => ({
          name: oe,
          fn: se((st) => [
            G(X.$slots, oe, Re(ze(st)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      m.value ? (p(), ve(Fn(X.teleport ? la : "div"), Re(Pe({ key: 0 }, i(u))), {
        default: se(() => [
          m.value ? (p(), ve(ol, Pe({
            key: 0,
            ref_key: "dpMenuRef",
            ref: F,
            class: i(y),
            style: X.inline ? void 0 : i(K),
            "open-on-top": i(Z)
          }, X.$props, {
            "internal-model-value": i(R),
            "onUpdate:internalModelValue": de[2] || (de[2] = (oe) => ut(R) ? R.value = oe : null),
            onClosePicker: be,
            onSelectDate: c,
            onAutoApply: E,
            onTimeUpdate: ne,
            onFlowStep: de[3] || (de[3] = (oe) => X.$emit("flow-step", oe)),
            onUpdateMonthYear: de[4] || (de[4] = (oe) => X.$emit("update-month-year", oe)),
            onInvalidSelect: de[5] || (de[5] = (oe) => X.$emit("invalid-select", i(R))),
            onInvalidFixedRange: de[6] || (de[6] = (oe) => X.$emit("invalid-fixed-range", oe)),
            onRecalculatePosition: i(re),
            onTooltipOpen: de[7] || (de[7] = (oe) => X.$emit("tooltip-open", oe)),
            onTooltipClose: de[8] || (de[8] = (oe) => X.$emit("tooltip-close", oe)),
            onTimePickerOpen: de[9] || (de[9] = (oe) => X.$emit("time-picker-open", oe)),
            onTimePickerClose: de[10] || (de[10] = (oe) => X.$emit("time-picker-close", oe)),
            onAmPmChange: de[11] || (de[11] = (oe) => X.$emit("am-pm-change", oe))
          }), Ee({ _: 2 }, [
            Ce(i(U), (oe, ot) => ({
              name: oe,
              fn: se((st) => [
                G(X.$slots, oe, Re(ze({ ...st })))
              ])
            }))
          ]), 1040, ["class", "style", "open-on-top", "internal-model-value", "onRecalculatePosition"])) : S("", !0)
        ]),
        _: 3
      }, 16)) : S("", !0)
    ], 2));
  }
}), ea = /* @__PURE__ */ (() => {
  const e = cl;
  return e.install = (n) => {
    n.component("Vue3DatePicker", e);
  }, e;
})(), fl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ea
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(fl).forEach(([e, n]) => {
  e !== "default" && (ea[e] = n);
});
export {
  ea as default
};
