import { openBlock as p, createElementBlock as I, createElementVNode as oe, reactive as _t, computed as E, unref as i, ref as W, watch as nt, toRef as St, onMounted as We, nextTick as Qe, defineComponent as Ke, renderSlot as x, createCommentVNode as T, normalizeClass as he, withKeys as ue, createBlock as ve, withModifiers as Je, normalizeStyle as et, normalizeProps as Re, mergeProps as Pe, Fragment as ye, createTextVNode as Ze, toDisplayString as Oe, renderList as Ce, createVNode as mt, Transition as kt, withCtx as ie, onBeforeUpdate as na, onUnmounted as yn, withDirectives as Yt, vShow as Vt, createSlots as Ee, isRef as ut, guardReactiveProps as ze, resolveDynamicComponent as Fn, useSlots as gn, getCurrentScope as aa, onScopeDispose as ra, Teleport as la } from "vue";
import { isBefore as Pt, isEqual as ht, isAfter as Ct, set as _e, setHours as Un, setMinutes as Wn, setSeconds as Hn, setMilliseconds as hn, parse as sn, isValid as Et, isDate as oa, format as Mt, getMonth as pe, getDay as sa, getYear as we, getHours as qe, getMinutes as Xe, getSeconds as pt, parseISO as ia, startOfWeek as Dn, endOfWeek as ua, setMonth as Lt, setYear as tt, addDays as dt, add as xn, addMonths as ct, subMonths as Tt, getWeek as da, getISOWeek as ca, differenceInCalendarDays as fa, eachDayOfInterval as $n, addYears as ma, subYears as va, sub as ya } from "date-fns";
function Wt() {
  return p(), I(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      oe("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      oe("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      oe("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      oe("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
function ga() {
  return p(), I(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      oe("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      oe("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
function Mn() {
  return p(), I(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      oe("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function Tn() {
  return p(), I(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      oe("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
function zn() {
  return p(), I(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      oe("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      oe("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
function jn() {
  return p(), I(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      oe("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function Kn() {
  return p(), I(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      oe("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
const An = (e, n, a, t, o) => {
  const f = sn(e, n.slice(0, e.length), /* @__PURE__ */ new Date());
  return Et(f) && oa(f) ? t || o ? f : _e(f, {
    hours: +a.hours,
    minutes: +(a == null ? void 0 : a.minutes),
    seconds: +(a == null ? void 0 : a.seconds),
    milliseconds: 0
  }) : null;
}, ha = (e, n, a, t, o) => {
  const f = Array.isArray(a) ? a[0] : a;
  if (typeof n == "string")
    return An(e, n, f, t, o);
  if (Array.isArray(n)) {
    let g = null;
    for (const _ of n)
      if (g = An(e, _, f, t, o), g)
        break;
    return g;
  }
  return typeof n == "function" ? n(e) : null;
}, M = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), pa = (e, n) => {
  if (n) {
    const t = (e.getMonth() + 1).toString().padStart(2, "0"), o = e.getDate().toString().padStart(2, "0"), f = e.getHours().toString().padStart(2, "0"), g = e.getMinutes().toString().padStart(2, "0");
    return `${e.getFullYear()}-${t}-${o}T${f}:${g}:00.000Z`;
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
}, je = (e) => {
  let n = M(JSON.parse(JSON.stringify(e)));
  return n = Un(n, 0), n = Wn(n, 0), n = Hn(n, 0), n = hn(n, 0), n;
}, Ue = (e, n, a, t) => {
  let o = e ? M(e) : M();
  return (n || n === 0) && (o = Un(o, +n)), (a || a === 0) && (o = Wn(o, +a)), (t || t === 0) && (o = Hn(o, +t)), hn(o, 0);
}, Ie = (e, n) => !e || !n ? !1 : Pt(je(e), je(n)), ge = (e, n) => !e || !n ? !1 : ht(je(e), je(n)), Ve = (e, n) => !e || !n ? !1 : Ct(je(e), je(n)), Gn = (e, n, a) => e && e[0] && e[1] ? Ve(a, e[0]) && Ie(a, e[1]) : e && e[0] && n ? Ve(a, e[0]) && Ie(a, n) || Ie(a, e[0]) && Ve(a, n) : !1, Dt = (e) => {
  const n = _e(new Date(e), { date: 1 });
  return je(n);
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
    control: E(() => ({ shiftKeyInMenu: $t.shiftKeyInMenu, menuFocused: $t.menuFocused })),
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
      var f = Ma[a[o].type];
      f >= 0 && (t[f] = parseInt(a[o].value, 10));
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
function kn(e, n, a, t, o, f, g) {
  var _ = /* @__PURE__ */ new Date(0);
  return _.setUTCFullYear(e, n, a), _.setUTCHours(t, o, f, g), _;
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
  var f;
  if (t = Jt.timezoneHH.exec(e), t)
    return f = parseInt(t[1], 10), Cn(f) ? -(f * Pn) : NaN;
  if (t = Jt.timezoneHHMM.exec(e), t) {
    f = parseInt(t[1], 10);
    var g = parseInt(t[2], 10);
    return Cn(f, g) ? (o = Math.abs(f) * Pn + g * Pa, f > 0 ? -o : o) : NaN;
  }
  if (Na(e)) {
    n = new Date(n || Date.now());
    var _ = a ? n : Ca(n), L = cn(_, e), S = a ? L : _a(n, L, e);
    return -S;
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
  ).getTime(), o = e.getTime(), f = o % 1e3;
  return o -= f >= 0 ? f : 1e3 + f, t - o;
}
function _a(e, n, a) {
  var t = e.getTime(), o = t - n, f = cn(new Date(o), a);
  if (n === f)
    return n;
  o -= f - n;
  var g = cn(new Date(o), a);
  return f === g ? f : Math.max(f, g);
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
  var o = Ia(e), f = Ba(o.date, t), g = f.year, _ = f.restDateString, L = Ya(_, g);
  if (isNaN(L))
    return /* @__PURE__ */ new Date(NaN);
  if (L) {
    var S = L.getTime(), U = 0, P;
    if (o.time && (U = Va(o.time), isNaN(U)))
      return /* @__PURE__ */ new Date(NaN);
    if (o.timeZone || a.timeZone) {
      if (P = wn(o.timeZone || a.timeZone, new Date(S + U)), isNaN(P))
        return /* @__PURE__ */ new Date(NaN);
    } else
      P = Sn(new Date(S + U)), P = Sn(new Date(S + U + P));
    return new Date(S + U + P);
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
    var f = o[1];
    return {
      year: parseInt(f, 10),
      restDateString: e.slice(f.length)
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
  var a, t, o, f;
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
    var _ = parseInt(a[2], 10);
    return On(n, o, _) ? (t.setUTCFullYear(n, o, _), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Ye.Www.exec(e), a)
    return f = parseInt(a[1], 10) - 1, In(n, f) ? Rn(n, f) : /* @__PURE__ */ new Date(NaN);
  if (a = Ye.WwwD.exec(e), a) {
    f = parseInt(a[1], 10) - 1;
    var L = parseInt(a[2], 10) - 1;
    return In(n, f, L) ? Rn(n, f, L) : /* @__PURE__ */ new Date(NaN);
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
  var o = t.getUTCDay() || 7, f = n * 7 + a + 1 - o;
  return t.setUTCDate(t.getUTCDate() + f), t;
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
    for (var f in o)
      Object.prototype.hasOwnProperty.call(o, f) && (t[f] = o[f]);
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
  function o(f) {
    return (0, t.default)({}, f);
  }
  e.exports = n.default;
})(mn, mn.exports);
var Wa = mn.exports;
const Ha = /* @__PURE__ */ pn(Wa);
function xa(e, n, a) {
  var t = fn(e, a), o = wn(n, t, !0), f = new Date(t.getTime() - o), g = /* @__PURE__ */ new Date(0);
  return g.setFullYear(f.getUTCFullYear(), f.getUTCMonth(), f.getUTCDate()), g.setHours(f.getUTCHours(), f.getUTCMinutes(), f.getUTCSeconds(), f.getUTCMilliseconds()), g;
}
function za(e, n, a) {
  if (typeof e == "string" && !e.match(Xn)) {
    var t = Ha(a);
    return t.timeZone = n, fn(e, t);
  }
  var o = fn(e, a), f = kn(
    o.getFullYear(),
    o.getMonth(),
    o.getDate(),
    o.getHours(),
    o.getMinutes(),
    o.getSeconds(),
    o.getMilliseconds()
  ).getTime(), g = wn(n, new Date(f));
  return new Date(f + g);
}
const ja = (e, n = 3) => {
  const a = [];
  for (let t = 0; t < e.length; t += n)
    a.push([e[t], e[t + 1], e[t + 2]]);
  return a;
}, Ka = (e, n) => {
  const a = [1, 2, 3, 4, 5, 6, 7].map((f) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${f}T00:00:00+00:00`)).slice(0, 2)), t = a.slice(0, n), o = a.slice(n + 1, a.length);
  return [a[n]].concat(...o).concat(...t);
}, Ga = (e, n) => {
  const a = [];
  for (let t = +e[0]; t <= +e[1]; t++)
    a.push({ value: +t, text: `${t}` });
  return n ? a.reverse() : a;
}, Za = (e, n) => {
  const a = new Intl.DateTimeFormat(e, { month: n, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((o) => {
    const f = o < 10 ? `0${o}` : o;
    return /* @__PURE__ */ new Date(`2017-${f}-01T00:00:00+00:00`);
  }).map((o, f) => {
    let g = a.format(o);
    return {
      text: g.charAt(0).toUpperCase() + g.substring(1),
      value: f
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
  }, a = E(() => ({
    ariaLabels: Ja(e.ariaLabels),
    textInputOptions: Object.assign(nr(), e.textInputOptions),
    multiCalendars: Qa(e.multiCalendars),
    previewFormat: er(e.previewFormat, e.format, f()),
    filters: ar(e.filters),
    transitions: tr(e.transitions),
    startTime: c(),
    actionRow: rr(e.actionRow)
  })), t = (r) => {
    if (e.range)
      return r();
    throw new Error(Ut.prop("range"));
  }, o = () => {
    const r = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${r}` : `hh:mm${r} aa`;
  }, f = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? o() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${o()}` : "MM/dd/yyyy", g = (r, m) => {
    if (typeof e.format == "function")
      return e.format(r);
    const l = m || f(), d = e.formatLocale ? { locale: e.formatLocale } : void 0;
    return Array.isArray(r) ? `${Mt(r[0], l, d)} ${e.modelAuto && !r[1] ? "" : a.value.textInputOptions.rangeSeparator || "-"} ${r[1] ? Mt(r[1], l, d) : ""}` : Mt(r, l, d);
  }, _ = (r) => e.timezone ? xa(r, e.timezone) : r, L = (r) => e.timezone ? za(r, e.timezone) : r, S = E(() => (r) => {
    var m;
    return (m = e.hideNavigation) == null ? void 0 : m.includes(r);
  }), U = (r) => {
    const m = e.maxDate ? Ve(_(r), _(M(e.maxDate))) : !1, l = e.minDate ? Ie(_(r), _(M(e.minDate))) : !1, d = V(r, e.disabledDates), A = a.value.filters.months.map((re) => +re).includes(pe(r)), v = e.disabledWeekDays.length ? e.disabledWeekDays.some((re) => +re === sa(r)) : !1, C = e.allowedDates.length ? !e.allowedDates.some((re) => ge(_(M(re)), _(r))) : !1, u = we(r), G = u < +e.yearRange[0] || u > +e.yearRange[1];
    return !(m || l || d || A || G || v || C);
  }, P = (r) => {
    const m = {
      hours: qe(M()),
      minutes: Xe(M()),
      seconds: e.enableSeconds ? pt(M()) : 0
    };
    return Object.assign(m, r);
  }, c = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [P(e.startTime[0]), P(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? P(e.startTime) : null, D = (r) => !U(r), Q = (r) => Array.isArray(r) ? Et(r[0]) && (r[1] ? Et(r[1]) : !0) : r ? Et(r) : !1, z = (r) => r instanceof Date ? r : ia(r), j = (r) => {
    const m = Dn(_(r), { weekStartsOn: +e.weekStart }), l = ua(_(r), { weekStartsOn: +e.weekStart });
    return [m, l];
  }, V = (r, m) => Array.isArray(m) ? m.some((l) => ge(_(M(l)), _(r))) : m(M(JSON.parse(JSON.stringify(r)))), F = (r, m, l) => {
    let d = r ? M(r) : M();
    return (m || m === 0) && (d = Lt(d, m)), l && (d = tt(d, l)), d;
  }, N = (r) => _e(M(), { hours: qe(r), minutes: Xe(r), seconds: pt(r) }), Z = (r) => _e(M(), {
    hours: +r.hours || 0,
    minutes: +r.minutes || 0,
    seconds: +r.seconds || 0
  }), H = (r, m, l, d) => {
    if (!r)
      return !0;
    if (d) {
      const Y = l === "max" ? Pt(r, m) : Ct(r, m), A = { seconds: 0, milliseconds: 0 };
      return Y || ht(_e(r, A), _e(m, A));
    }
    return l === "max" ? r.getTime() <= m.getTime() : r.getTime() >= m.getTime();
  }, te = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, ne = (r) => Array.isArray(r) ? [r[0] ? N(r[0]) : null, r[1] ? N(r[1]) : null] : N(r), fe = (r) => {
    const m = e.maxTime ? Z(e.maxTime) : M(e.maxDate);
    return Array.isArray(r) ? H(r[0], m, "max", !!e.maxDate) && H(r[1], m, "max", !!e.maxDate) : H(r, m, "max", !!e.maxDate);
  }, de = (r, m) => {
    const l = e.minTime ? Z(e.minTime) : M(e.minDate);
    return Array.isArray(r) ? H(r[0], l, "min", !!e.minDate) && H(r[1], l, "min", !!e.minDate) && m : H(r, l, "min", !!e.minDate) && m;
  }, se = (r) => {
    let m = !0;
    if (!r || te())
      return !0;
    const l = !e.minDate && !e.maxDate ? ne(r) : r;
    return (e.maxTime || e.maxDate) && (m = fe(Se(l))), (e.minTime || e.minDate) && (m = de(Se(l), m)), m;
  }, R = (r, m) => {
    const l = M(JSON.parse(JSON.stringify(r))), d = [];
    for (let Y = 0; Y < 7; Y++) {
      const A = dt(l, Y), v = pe(A) !== m;
      d.push({
        text: e.hideOffsetDates && v ? "" : A.getDate(),
        value: A,
        current: !v,
        classData: {}
      });
    }
    return d;
  }, w = (r, m) => {
    const l = [], d = M(_(new Date(m, r))), Y = M(_(new Date(m, r + 1, 0))), A = e.weekStart, v = Dn(d, { weekStartsOn: A }), C = (u) => {
      const G = R(u, r);
      if (l.push({ days: G }), !l[l.length - 1].days.some(
        (re) => ge(je(re.value), je(Y))
      )) {
        const re = dt(u, 7);
        C(re);
      }
    };
    if (C(v), e.sixWeeks && l.length < 6) {
      const u = 6 - l.length, G = (d.getDay() + 7 - A) % 7, be = 6 - (Y.getDay() + 7 - A) % 7, [He, ae] = (() => {
        switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
          case "prepend":
            return [!0, !1];
          case "center":
            return [G == 0, !0];
          case "fair":
            return [G == 0 || be > G, !0];
          default:
          case "append":
            return [!1, !1];
        }
      })();
      for (let Fe = 1; Fe <= u; Fe++)
        if (ae ? !!(Fe % 2) == He : He) {
          const Te = l[0].days[0], xe = R(dt(Te.value, -7), pe(d));
          l.unshift({ days: xe });
        } else {
          const Te = l[l.length - 1], xe = Te.days[Te.days.length - 1], lt = R(dt(xe.value, 1), pe(d));
          l.push({ days: lt });
        }
    }
    return l;
  }, y = (r, m, l) => [_e(M(r), { date: 1 }), _e(M(), { month: m, year: l, date: 1 })], O = (r, m) => Ie(...y(e.minDate, r, m)) || ge(...y(e.minDate, r, m)), B = (r, m) => Ve(...y(e.maxDate, r, m)) || ge(...y(e.maxDate, r, m)), $ = (r, m, l) => {
    let d = !1;
    return e.maxDate && l && B(r, m) && (d = !0), e.minDate && !l && O(r, m) && (d = !0), d;
  };
  return {
    checkPartialRangeValue: n,
    checkRangeEnabled: t,
    getZonedDate: _,
    getZonedToUtc: L,
    formatDate: g,
    getDefaultPattern: f,
    validateDate: U,
    getDefaultStartTime: c,
    isDisabled: D,
    isValidDate: Q,
    sanitizeDate: z,
    getWeekFromDate: j,
    matchDate: V,
    setDateMonthOrYear: F,
    isValidTime: se,
    getCalendarDays: w,
    validateMonthYearInRange: (r, m, l, d) => {
      let Y = !1;
      return d ? e.minDate && e.maxDate ? Y = $(r, m, l) : (e.minDate && O(r, m) || e.maxDate && B(r, m)) && (Y = !0) : Y = !0, Y;
    },
    validateMaxDate: B,
    validateMinDate: O,
    assignDefaultTime: P,
    defaults: a,
    hideNavigationButtons: S
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
}), tn = W(null), Bt = W(!1), nn = W(!1), an = W(!1), rn = W(!1), Be = W(0), Ne = W(0), at = () => {
  const e = E(() => Bt.value ? [...ke.selectionGrid, ke.actionRow].filter((V) => V.length) : nn.value ? [
    ...ke.timePicker[0],
    ...ke.timePicker[1],
    rn.value ? [] : [tn.value],
    ke.actionRow
  ].filter((V) => V.length) : an.value ? [...ke.monthPicker, ke.actionRow] : [ke.monthYear, ...ke.calendar, ke.time, ke.actionRow].filter((V) => V.length)), n = (V) => {
    Be.value = V ? Be.value + 1 : Be.value - 1;
    let F = null;
    e.value[Ne.value] && (F = e.value[Ne.value][Be.value]), F || (Be.value = V ? Be.value - 1 : Be.value + 1);
  }, a = (V) => {
    if (Ne.value === 0 && !V || Ne.value === e.value.length && V)
      return;
    Ne.value = V ? Ne.value + 1 : Ne.value - 1, e.value[Ne.value] ? e.value[Ne.value] && !e.value[Ne.value][Be.value] && Be.value !== 0 && (Be.value = e.value[Ne.value].length - 1) : Ne.value = V ? Ne.value - 1 : Ne.value + 1;
  }, t = (V) => {
    let F = null;
    e.value[Ne.value] && (F = e.value[Ne.value][Be.value]), F ? F.focus({ preventScroll: !Bt.value }) : Be.value = V ? Be.value - 1 : Be.value + 1;
  }, o = () => {
    n(!0), t(!0);
  }, f = () => {
    n(!1), t(!1);
  }, g = () => {
    a(!1), t(!0);
  }, _ = () => {
    a(!0), t(!0);
  }, L = (V, F) => {
    ke[F] = V;
  }, S = (V, F) => {
    ke[F] = V;
  }, U = () => {
    Be.value = 0, Ne.value = 0;
  };
  return {
    buildMatrix: L,
    buildMultiLevelMatrix: S,
    setTimePickerBackRef: (V) => {
      tn.value = V;
    },
    setSelectionGrid: (V) => {
      Bt.value = V, U(), V || (ke.selectionGrid = []);
    },
    setTimePicker: (V, F = !1) => {
      nn.value = V, rn.value = F, U(), V || (ke.timePicker[0] = [], ke.timePicker[1] = []);
    },
    setTimePickerElements: (V, F = 0) => {
      ke.timePicker[F] = V;
    },
    arrowRight: o,
    arrowLeft: f,
    arrowUp: g,
    arrowDown: _,
    clearArrowNav: () => {
      ke.monthYear = [], ke.calendar = [], ke.time = [], ke.actionRow = [], ke.selectionGrid = [], ke.timePicker[0] = [], ke.timePicker[1] = [], Bt.value = !1, nn.value = !1, rn.value = !1, an.value = !1, U(), tn.value = null;
    },
    setMonthPicker: (V) => {
      an.value = V, U();
    },
    refSets: ke
    // exposed for testing
  };
}, Vn = (e) => Array.isArray(e), it = (e) => Array.isArray(e), En = (e) => Array.isArray(e) && e.length === 2, lr = (e, n, a, t, o) => {
  const {
    getDefaultStartTime: f,
    isDisabled: g,
    sanitizeDate: _,
    getWeekFromDate: L,
    setDateMonthOrYear: S,
    validateMonthYearInRange: U,
    defaults: P
  } = Le(e), c = E({
    get: () => e.internalModelValue,
    set: (s) => {
      !e.readonly && !e.disabled && n("update:internal-model-value", s);
    }
  }), D = W([]);
  nt(c, () => {
    te();
  });
  const Q = St(e, "multiCalendars");
  nt(Q, () => {
    ce(0);
  });
  const z = W([{ month: pe(M()), year: we(M()) }]), j = _t({
    hours: e.range ? [qe(M()), qe(M())] : qe(M()),
    minutes: e.range ? [Xe(M()), Xe(M())] : Xe(M()),
    seconds: e.range ? [0, 0] : 0
  }), V = E(
    () => (s) => z.value[s] ? z.value[s].month : 0
  ), F = E(
    () => (s) => z.value[s] ? z.value[s].year : 0
  ), N = E(() => e.flow && e.flow.length && !e.partialFlow ? o.value === e.flow.length : !0), Z = (s, b, q) => {
    var ee, De;
    z.value[s] || (z.value[s] = { month: 0, year: 0 }), z.value[s].month = b === null ? (ee = z.value[s]) == null ? void 0 : ee.month : b, z.value[s].year = q === null ? (De = z.value[s]) == null ? void 0 : De.year : q;
  }, H = (s, b) => {
    j[s] = b;
  };
  We(() => {
    c.value || (e.startDate && (Z(0, pe(M(e.startDate)), we(M(e.startDate))), P.value.multiCalendars && ce(0)), P.value.startTime && $()), te(!0);
  });
  const te = (s = !1) => {
    if (c.value)
      return Array.isArray(c.value) ? (D.value = c.value, R(s)) : fe(c.value);
    if (e.timePicker)
      return w();
    if (e.monthPicker && !e.range)
      return y();
    if (e.yearPicker && !e.range)
      return O();
    if (P.value.multiCalendars && s && !e.startDate)
      return ne(M(), s);
  }, ne = (s, b = !1) => {
    if ((!P.value.multiCalendars || !e.multiStatic || b) && Z(0, pe(s), we(s)), P.value.multiCalendars)
      for (let q = 1; q < P.value.multiCalendars; q++) {
        const ee = _e(M(), { month: V.value(q - 1), year: F.value(q - 1) }), De = xn(ee, { months: 1 });
        z.value[q] = { month: pe(De), year: we(De) };
      }
  }, fe = (s) => {
    ne(s), H("hours", qe(s)), H("minutes", Xe(s)), H("seconds", pt(s));
  }, de = (s, b) => {
    ne(s[0], b);
    const q = (ee, De) => [
      ee(s[0]),
      s[1] ? ee(s[1]) : j[De][1]
    ];
    H("hours", q(qe, "hours")), H("minutes", q(Xe, "minutes")), H("seconds", q(pt, "seconds"));
  }, se = (s, b) => {
    if ((e.range || e.weekPicker) && !e.multiDates)
      return de(s, b);
    if (e.multiDates) {
      const q = s[s.length - 1];
      return fe(q);
    }
  }, R = (s) => {
    const b = c.value;
    se(b, s), P.value.multiCalendars && e.multiCalendarsSolo && r();
  }, w = () => {
    if ($(), !e.range)
      c.value = Ue(M(), j.hours, j.minutes, B());
    else {
      const s = j.hours, b = j.minutes;
      c.value = [
        Ue(M(), s[0], b[0], B()),
        Ue(M(), s[1], b[1], B(!1))
      ];
    }
  }, y = () => {
    e.multiDates ? c.value = [S(M(), V.value(0), F.value(0))] : c.value = S(M(), V.value(0), F.value(0));
  }, O = () => {
    c.value = M();
  }, B = (s = !0) => e.enableSeconds ? Array.isArray(j.seconds) ? s ? j.seconds[0] : j.seconds[1] : j.seconds : 0, $ = () => {
    const s = f();
    if (s) {
      const b = Array.isArray(s), q = b ? [+s[0].hours, +s[1].hours] : +s.hours, ee = b ? [+s[0].minutes, +s[1].minutes] : +s.minutes, De = b ? [+s[0].seconds, +s[1].seconds] : +s.seconds;
      H("hours", q), H("minutes", ee), e.enableSeconds && H("seconds", De);
    }
  }, h = () => Array.isArray(c.value) && c.value.length ? c.value[c.value.length - 1] : null, r = () => {
    if (Array.isArray(c.value) && c.value.length === 2) {
      const s = M(
        M(c.value[1] ? c.value[1] : ct(c.value[0], 1))
      ), [b, q] = [pe(c.value[0]), we(c.value[0])], [ee, De] = [pe(c.value[1]), we(c.value[1])];
      (b !== ee || b === ee && q !== De) && e.multiCalendarsSolo && Z(1, pe(s), we(s));
    }
  }, m = (s) => {
    const b = ct(s, 1);
    return { month: pe(b), year: we(b) };
  }, l = (s) => {
    const b = pe(M(s)), q = we(M(s));
    if (Z(0, b, q), P.value.multiCalendars > 0)
      for (let ee = 1; ee < P.value.multiCalendars; ee++) {
        const De = m(
          _e(M(s), { year: V.value(ee - 1), month: F.value(ee - 1) })
        );
        Z(ee, De.month, De.year);
      }
  }, d = (s) => {
    if (c.value && Array.isArray(c.value))
      if (c.value.some((b) => ge(s, b))) {
        const b = c.value.filter((q) => !ge(q, s));
        c.value = b.length ? b : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > c.value.length || !e.multiDatesLimit) && c.value.push(s);
    else
      c.value = [s];
  }, Y = (s, b) => {
    const q = Ve(s, b) ? b : s, ee = Ve(b, s) ? b : s;
    return $n({ start: q, end: ee });
  }, A = (s, b = 0) => {
    if (Array.isArray(c.value) && c.value[b]) {
      const q = fa(s, c.value[b]), ee = Y(c.value[b], s), De = ee.length === 1 ? 0 : ee.filter((K) => g(K)).length, k = Math.abs(q) - De;
      if (e.minRange && e.maxRange)
        return k >= +e.minRange && k <= +e.maxRange;
      if (e.minRange)
        return k >= +e.minRange;
      if (e.maxRange)
        return k <= +e.maxRange;
    }
    return !0;
  }, v = (s) => Array.isArray(c.value) && c.value.length === 2 ? e.fixedStart && (Ve(s, c.value[0]) || ge(s, c.value[0])) ? [c.value[0], s] : e.fixedEnd && (Ie(s, c.value[1]) || ge(s, c.value[1])) ? [s, c.value[1]] : (n("invalid-fixed-range", s), c.value) : [], C = () => {
    e.autoApply && N.value && n("auto-apply", e.partialFlow);
  }, u = () => {
    e.autoApply && n("select-date");
  }, G = (s) => !$n({ start: s[0], end: s[1] }).some((q) => g(q)), re = (s) => (c.value = L(M(s.value)), C()), be = (s) => {
    const b = Ue(M(s.value), j.hours, j.minutes, B());
    e.multiDates ? d(b) : c.value = b, a(), C();
  }, He = () => {
    D.value = c.value ? c.value.slice() : [], D.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (D.value = []);
  }, ae = (s, b) => {
    const q = [M(s.value), dt(M(s.value), +e.autoRange)];
    G(q) && (b && l(s.value), D.value = q);
  }, Fe = (s) => {
    Ge(s.value) || !A(s.value, e.fixedStart ? 0 : 1) || (D.value = v(M(s.value)));
  }, Ge = (s) => e.noDisabledRange ? Y(D.value[0], s).some((q) => g(q)) : !1, Te = (s, b) => {
    if (He(), e.autoRange)
      return ae(s, b);
    if (e.fixedStart || e.fixedEnd)
      return Fe(s);
    D.value[0] ? A(M(s.value)) && !Ge(s.value) && (Ie(M(s.value), M(D.value[0])) ? D.value.unshift(M(s.value)) : D.value[1] = M(s.value)) : D.value[0] = M(s.value);
  }, xe = (s) => {
    D.value[s] = Ue(
      D.value[s],
      j.hours[s],
      j.minutes[s],
      B(s !== 1)
    );
  }, lt = () => {
    D.value.length && (D.value[0] && !D.value[1] ? xe(0) : (xe(0), xe(1), a()), c.value = D.value.slice(), D.value[0] && D.value[1] && e.autoApply && n("auto-apply"), D.value[0] && !D.value[1] && e.modelAuto && e.autoApply && n("auto-apply"));
  }, wt = (s, b = !1) => {
    if (!(g(s.value) || !s.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return re(s);
      if (!e.range)
        return be(s);
      it(j.hours) && it(j.minutes) && !e.multiDates && (Te(s, b), lt());
    }
  }, X = (s) => {
    const b = s[0];
    return e.weekNumbers === "local" ? da(b.value, { weekStartsOn: +e.weekStart }) : e.weekNumbers === "iso" ? ca(b.value) : typeof e.weekNumbers == "function" ? e.weekNumbers(b.value) : "";
  }, ce = (s) => {
    for (let b = s - 1; b >= 0; b--) {
      const q = Tt(_e(M(), { month: V.value(b + 1), year: F.value(b + 1) }), 1);
      Z(b, pe(q), we(q));
    }
    for (let b = s + 1; b <= P.value.multiCalendars - 1; b++) {
      const q = ct(_e(M(), { month: V.value(b - 1), year: F.value(b - 1) }), 1);
      Z(b, pe(q), we(q));
    }
  }, le = (s) => S(M(), V.value(s), F.value(s)), ot = (s) => Ue(s, j.hours, j.minutes, B()), st = (s) => {
    d(le(s));
  }, xt = (s, b) => {
    const q = e.monthPicker ? V.value(s) !== b.month || !b.fromNav : F.value(s) !== b.year || !b.fromNav;
    if (Z(s, b.month, b.year), P.value.multiCalendars && !e.multiCalendarsSolo && ce(s), e.monthPicker || e.yearPicker)
      if (e.multiDates)
        q && st(s);
      else if (e.range) {
        if (q && A(le(s))) {
          let ee = c.value ? c.value.slice() : [];
          ee.length === 2 && ee[1] !== null && (ee = []), ee.length ? Ie(le(s), ee[0]) ? ee.unshift(le(s)) : ee[1] = le(s) : ee = [le(s)], c.value = ee;
        }
      } else
        c.value = le(s);
    n("update-month-year", { instance: s, month: b.month, year: b.year }), t(e.multiCalendarsSolo ? s : void 0);
  }, zt = async (s = !1) => {
    if (e.autoApply && (e.monthPicker || e.yearPicker)) {
      await Qe();
      const b = e.monthPicker ? s : !1;
      e.range ? n("auto-apply", b || !c.value || c.value.length === 1) : n("auto-apply", b);
    }
    a();
  }, Nt = (s, b) => {
    const q = _e(M(), { month: V.value(b), year: F.value(b) }), ee = s < 0 ? ct(q, 1) : Tt(q, 1);
    U(pe(ee), we(ee), s < 0, e.preventMinMaxNavigation) && (Z(b, pe(ee), we(ee)), P.value.multiCalendars && !e.multiCalendarsSolo && ce(b), n("update-month-year", { instance: b, month: pe(ee), year: we(ee) }), t());
  }, bt = (s) => {
    Vn(s) && Vn(c.value) && it(j.hours) && it(j.minutes) ? (s[0] && c.value[0] && (c.value[0] = Ue(s[0], j.hours[0], j.minutes[0], B())), s[1] && c.value[1] && (c.value[1] = Ue(s[1], j.hours[1], j.minutes[1], B(!1)))) : e.multiDates && Array.isArray(c.value) ? c.value[c.value.length - 1] = ot(s) : !e.range && !En(s) && (c.value = ot(s)), n("time-update");
  }, jt = (s, b = !0, q = !1) => {
    const ee = b ? s : j.hours, De = !b && !q ? s : j.minutes, k = q ? s : j.seconds;
    if (e.range && En(c.value) && it(ee) && it(De) && it(k) && !e.disableTimeRangeValidation) {
      const K = (Me) => Ue(c.value[Me], ee[Me], De[Me], k[Me]), Ae = (Me) => hn(c.value[Me], 0);
      if (ge(c.value[0], c.value[1]) && (Ct(K(0), Ae(1)) || Pt(K(1), Ae(0))))
        return;
    }
    if (H("hours", ee), H("minutes", De), H("seconds", k), c.value)
      if (e.multiDates) {
        const K = h();
        K && bt(K);
      } else
        bt(c.value);
    else
      e.timePicker && bt(e.range ? [M(), M()] : M());
    a();
  }, Kt = (s, b) => {
    e.monthChangeOnScroll && Nt(e.monthChangeOnScroll !== "inverse" ? -s.deltaY : s.deltaY, b);
  }, Gt = (s, b, q = !1) => {
    e.monthChangeOnArrows && e.vertical === q && Rt(s, b);
  }, Rt = (s, b) => {
    Nt(s === "right" ? -1 : 1, b);
  };
  return {
    time: j,
    month: V,
    year: F,
    modelValue: c,
    calendars: z,
    monthYearSelect: zt,
    isDisabled: g,
    updateTime: jt,
    getWeekNum: X,
    selectDate: wt,
    updateMonthYear: xt,
    handleScroll: Kt,
    getMarker: (s) => e.markers.find((b) => ge(_(s.value), _(b.date))),
    handleArrow: Gt,
    handleSwipe: Rt,
    selectCurrentDate: () => {
      e.range ? c.value && Array.isArray(c.value) && c.value[0] ? c.value = Ie(M(), c.value[0]) ? [M(), c.value[0]] : [c.value[0], M()] : c.value = [M()] : c.value = M(), u();
    },
    presetDateRange: (s, b) => {
      b || s.length && s.length <= 2 && e.range && (c.value = s.map((q) => M(q)), u(), e.multiCalendars && Qe().then(() => te(!0)));
    }
  };
}, or = (e, n, a) => {
  const t = W(), {
    getZonedToUtc: o,
    getZonedDate: f,
    formatDate: g,
    getDefaultPattern: _,
    checkRangeEnabled: L,
    checkPartialRangeValue: S,
    isValidDate: U,
    setDateMonthOrYear: P,
    defaults: c
  } = Le(n), D = W(""), Q = St(n, "format");
  nt(t, () => {
    e("internal-model-change", t.value);
  }), nt(Q, () => {
    r();
  });
  const z = (u) => {
    const G = u || M();
    return n.modelType ? l(G) : {
      hours: qe(G),
      minutes: Xe(G),
      seconds: n.enableSeconds ? pt(G) : 0
    };
  }, j = (u) => n.modelType ? l(u) : { month: pe(u), year: we(u) }, V = (u) => Array.isArray(u) ? L(() => [
    tt(M(), u[0]),
    u[1] ? tt(M(), u[1]) : S()
  ]) : tt(M(), +u), F = (u, G) => (typeof u == "string" || typeof u == "number") && n.modelType ? m(u) : G, N = (u) => Array.isArray(u) ? [
    F(
      u[0],
      Ue(null, +u[0].hours, +u[0].minutes, u[0].seconds)
    ),
    F(
      u[1],
      Ue(null, +u[1].hours, +u[1].minutes, u[1].seconds)
    )
  ] : F(u, Ue(null, u.hours, u.minutes, u.seconds)), Z = (u) => Array.isArray(u) ? n.multiDates ? u.map((G) => F(G, P(null, +G.month, +G.year))) : L(() => [
    F(u[0], P(null, +u[0].month, +u[0].year)),
    F(
      u[1],
      u[1] ? P(null, +u[1].month, +u[1].year) : S()
    )
  ]) : F(u, P(null, +u.month, +u.year)), H = (u) => {
    if (Array.isArray(u))
      return u.map((G) => m(G));
    throw new Error(Ut.dateArr("multi-dates"));
  }, te = (u) => {
    if (Array.isArray(u))
      return [M(u[0]), M(u[1])];
    throw new Error(Ut.dateArr("week-picker"));
  }, ne = (u) => n.modelAuto ? Array.isArray(u) ? [m(u[0]), m(u[1])] : n.autoApply ? [m(u)] : [m(u), null] : Array.isArray(u) ? L(() => [
    m(u[0]),
    u[1] ? m(u[1]) : S()
  ]) : m(u), fe = () => {
    Array.isArray(t.value) && n.range && t.value.length === 1 && t.value.push(S());
  }, de = () => {
    const u = t.value;
    return [
      l(u[0]),
      u[1] ? l(u[1]) : S()
    ];
  }, se = () => t.value[1] ? de() : l(Se(t.value[0])), R = () => (t.value || []).map((u) => l(u)), w = () => (fe(), n.modelAuto ? se() : n.multiDates ? R() : Array.isArray(t.value) ? L(() => de()) : l(Se(t.value))), y = (u) => u ? n.timePicker ? N(Se(u)) : n.monthPicker ? Z(Se(u)) : n.yearPicker ? V(Se(u)) : n.multiDates ? H(Se(u)) : n.weekPicker ? te(Se(u)) : ne(Se(u)) : null, O = (u) => {
    const G = y(u);
    U(Se(G)) ? (t.value = Se(G), r()) : (t.value = null, D.value = "");
  }, B = () => {
    var G;
    const u = (re) => {
      var be;
      return Mt(re, (be = c.value.textInputOptions) == null ? void 0 : be.format);
    };
    return `${u(t.value[0])} ${(G = c.value.textInputOptions) == null ? void 0 : G.rangeSeparator} ${t.value[1] ? u(t.value[1]) : ""}`;
  }, $ = () => {
    var u;
    return a.value && t.value ? Array.isArray(t.value) ? B() : Mt(t.value, (u = c.value.textInputOptions) == null ? void 0 : u.format) : g(t.value);
  }, h = () => {
    var u;
    return t.value ? n.multiDates ? t.value.map((G) => g(G)).join("; ") : n.textInput && typeof ((u = c.value.textInputOptions) == null ? void 0 : u.format) == "string" ? $() : g(t.value) : "";
  }, r = () => {
    !n.format || typeof n.format == "string" ? D.value = h() : D.value = n.format(t.value);
  }, m = (u) => {
    if (n.utc) {
      const G = new Date(u);
      return n.utc === "preserve" ? new Date(G.getTime() + G.getTimezoneOffset() * 6e4) : G;
    }
    return n.modelType ? n.modelType === "date" || n.modelType === "timestamp" ? f(new Date(u)) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? sn(u, _(), /* @__PURE__ */ new Date()) : f(sn(u, n.modelType, /* @__PURE__ */ new Date())) : f(new Date(u));
  }, l = (u) => u ? n.utc ? pa(u, n.utc === "preserve") : n.modelType ? n.modelType === "timestamp" ? +o(u) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? g(o(u)) : g(o(u), n.modelType) : o(u) : "", d = (u) => {
    e("update:model-value", u);
  }, Y = (u) => Array.isArray(t.value) ? n.multiDates ? t.value.map((G) => u(G)) : [
    u(t.value[0]),
    t.value[1] ? u(t.value[1]) : S()
  ] : u(Se(t.value)), A = (u) => d(Se(Y(u)));
  return {
    inputValue: D,
    internalModelValue: t,
    checkBeforeEmit: () => t.value ? n.range ? n.partialRange ? t.value.length >= 1 : t.value.length === 2 : !!t.value : !1,
    parseExternalModelValue: O,
    formatInputValue: r,
    emitModelValue: () => (r(), n.monthPicker ? A(j) : n.timePicker ? A(z) : n.yearPicker ? A(we) : n.weekPicker ? d(t.value) : d(w()))
  };
}, sr = (e, n) => {
  const { validateMonthYearInRange: a, validateMaxDate: t, validateMinDate: o, defaults: f } = Le(e), g = (P, c) => {
    let D = P;
    return f.value.filters.months.includes(pe(D)) ? (D = c ? ct(P, 1) : Tt(P, 1), g(D, c)) : D;
  }, _ = (P, c) => {
    let D = P;
    return f.value.filters.years.includes(we(D)) ? (D = c ? ma(P, 1) : va(P, 1), _(D, c)) : D;
  }, L = (P) => {
    const c = _e(/* @__PURE__ */ new Date(), { month: e.month, year: e.year });
    let D = P ? ct(c, 1) : Tt(c, 1);
    e.disableYearSelect && (D = tt(D, e.year));
    let Q = pe(D), z = we(D);
    f.value.filters.months.includes(Q) && (D = g(D, P), Q = pe(D), z = we(D)), f.value.filters.years.includes(z) && (D = _(D, P), z = we(D)), a(Q, z, P, e.preventMinMaxNavigation) && S(Q, z);
  }, S = (P, c) => {
    n("update-month-year", { month: P, year: c });
  }, U = E(() => (P) => {
    if (!e.preventMinMaxNavigation || P && !e.maxDate || !P && !e.minDate)
      return !1;
    const c = _e(/* @__PURE__ */ new Date(), { month: e.month, year: e.year }), D = P ? ct(c, 1) : Tt(c, 1), Q = [pe(D), we(D)];
    return P ? !t(...Q) : !o(...Q);
  });
  return { handleMonthYearChange: L, isDisabled: U, updateMonthYear: S };
};
var Ft = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Ft || {});
const ir = (e, n, a, t) => {
  const o = W({
    top: "0",
    left: "0",
    transform: "none",
    opacity: "0"
  }), f = W(!1), g = St(t, "teleportCenter"), _ = E(() => f.value ? "-100%" : "0"), L = () => {
    S(), o.value.opacity = "0";
  };
  nt(g, () => {
    F();
  }), We(() => {
    S();
  });
  const S = () => {
    const w = $e(n);
    if (w) {
      const { top: y, left: O, width: B, height: $ } = Q(w);
      o.value.top = `${y + $ / 2}px`, D(O, B, 50);
    }
  }, U = (w) => {
    if (t.teleport) {
      const y = w.getBoundingClientRect();
      return {
        left: y.left + window.scrollX,
        top: y.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, P = (w, y) => {
    o.value.left = `${w + y}px`, o.value.transform = `translate(-100%, ${_.value})`;
  }, c = (w) => {
    o.value.left = `${w}px`, o.value.transform = `translate(0, ${_.value})`;
  }, D = (w, y, O) => {
    t.position === Ft.left && c(w), t.position === Ft.right && P(w, y), t.position === Ft.center && (o.value.left = `${w + y / 2}px`, o.value.transform = O ? `translate(-50%, -${O}%)` : `translate(-50%, ${_.value})`);
  }, Q = (w) => {
    const { width: y, height: O } = w.getBoundingClientRect(), { top: B, left: $ } = t.altPosition ? t.altPosition(w) : U(w);
    return { top: +B, left: +$, width: y, height: O };
  }, z = () => {
    const w = $e(n);
    if (w) {
      const { top: y, left: O, width: B, height: $ } = Q(w), h = ne();
      o.value.top = `${y + $ / 2}px`, D(O, B, h === "top" ? 100 : 0);
    }
  }, j = () => {
    o.value.left = "50%", o.value.top = "50%", o.value.transform = "translate(-50%, -50%)", o.value.position = "fixed", delete o.value.opacity;
  }, V = () => {
    const w = $e(n), { top: y, left: O, transform: B } = t.altPosition(w);
    o.value = { top: `${y}px`, left: `${O}px`, transform: B || "" };
  }, F = (w = !0) => {
    if (!t.inline)
      return g.value ? j() : t.altPosition !== null ? V() : (w && a("recalculate-position"), de());
  }, N = ({
    inputEl: w,
    menuEl: y,
    left: O,
    width: B
  }) => {
    window.screen.width > 768 && D(O, B), te(w, y);
  }, Z = (w, y) => {
    const { top: O, left: B, height: $, width: h } = Q(w);
    o.value.top = `${$ + O + +t.offset}px`, f.value = !1, N({ inputEl: w, menuEl: y, left: B, width: h });
  }, H = (w, y) => {
    const { top: O, left: B, width: $ } = Q(w);
    o.value.top = `${O - +t.offset}px`, f.value = !0, N({ inputEl: w, menuEl: y, left: B, width: $ });
  }, te = (w, y) => {
    if (t.autoPosition) {
      const { left: O, width: B } = Q(w), { left: $, right: h } = y.getBoundingClientRect();
      return $ <= 0 || $ <= O ? c(O) : h >= document.documentElement.clientWidth ? P(O, B) : D(O, B);
    }
  }, ne = () => {
    const w = $e(e), y = $e(n);
    if (w && y) {
      const { height: O } = w.getBoundingClientRect(), { top: B, height: $ } = y.getBoundingClientRect(), r = window.innerHeight - B - $, m = B;
      return O <= r ? "bottom" : O > r && O <= m ? "top" : r >= m ? "bottom" : "top";
    }
    return "bottom";
  }, fe = (w, y) => ne() === "bottom" ? Z(w, y) : H(w, y), de = () => {
    const w = $e(n), y = $e(e);
    if (w && y)
      return t.autoPosition ? fe(w, y) : Z(w, y);
  }, se = function(w) {
    if (w) {
      const y = w.scrollHeight > w.clientHeight, B = window.getComputedStyle(w).overflowY.indexOf("hidden") !== -1;
      return y && !B;
    }
    return !0;
  }, R = function(w) {
    return !w || w === document.body || w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : se(w) ? w : R(w.parentNode);
  };
  return { openOnTop: f, menuStyle: o, resetPosition: L, setMenuPosition: F, setInitialPosition: z, getScrollableParent: R };
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
  { name: "time-picker-header", use: ["time"] },
  { name: "am-pm-button", use: ["calendar", "time"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "top-sidebar", use: ["menu"] },
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
}, Ht = (e) => ({ transitionName: E(() => (a) => e && typeof e != "boolean" ? a ? e.open : e.close : ""), showTransition: !!e }), rt = {
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
  allowPreventDefault: { type: Boolean, default: !1 },
  noArrows: { type: Boolean, default: !1 }
}, cr = {
  key: 1,
  class: "dp__input_wrap"
}, fr = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "onKeydown"], mr = {
  key: 2,
  class: "dp__input_icon"
}, vr = {
  key: 4,
  class: "dp__clear_icon"
}, yr = /* @__PURE__ */ Ke({
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
    const t = e, { getDefaultPattern: o, isValidDate: f, defaults: g, getDefaultStartTime: _, assignDefaultTime: L } = Le(t), S = W(), U = W(null), P = W(!1), c = W(!1), D = E(
      () => ({
        dp__pointer: !t.disabled && !t.readonly && !t.textInput,
        dp__disabled: t.disabled,
        dp__input_readonly: !t.textInput,
        dp__input: !0,
        dp__input_icon_pad: !t.hideInputIcon,
        dp__input_valid: t.state,
        dp__input_invalid: t.state === !1,
        dp__input_focus: P.value || t.isMenuOpen,
        dp__input_reg: !t.textInput,
        [t.inputClassName]: !!t.inputClassName
      })
    ), Q = () => {
      a("set-input-date", null), t.autoApply && (a("set-empty-date"), S.value = null);
    }, z = (y) => {
      var B;
      const O = _();
      return ha(
        y,
        ((B = g.value.textInputOptions) == null ? void 0 : B.format) || o(),
        O || L({}),
        t.inputValue,
        c.value
      );
    }, j = (y) => {
      const { rangeSeparator: O } = g.value.textInputOptions, [B, $] = y.split(`${O}`);
      if (B) {
        const h = z(B.trim()), r = $ ? z($.trim()) : null, m = h && r ? [h, r] : [h];
        S.value = h ? m : null;
      }
    }, V = () => {
      c.value = !0;
    }, F = (y) => {
      if (t.range)
        j(y);
      else if (t.multiDates) {
        const O = y.split(";");
        S.value = O.map((B) => z(B.trim())).filter((B) => B);
      } else
        S.value = z(y);
    }, N = (y) => {
      var B;
      const { value: O } = y.target;
      O !== "" ? ((B = g.value.textInputOptions) != null && B.openMenu && !t.isMenuOpen && a("open"), F(O), a("set-input-date", S.value)) : Q(), c.value = !1, a("update:input-value", O);
    }, Z = (y) => {
      var O, B;
      t.textInput ? (F(y.target.value), (O = g.value.textInputOptions) != null && O.enterSubmit && f(S.value) && t.inputValue !== "" ? (a("set-input-date", S.value, !0), S.value = null) : (B = g.value.textInputOptions) != null && B.enterSubmit && t.inputValue === "" && (S.value = null, a("clear"))) : ne(y);
    }, H = () => {
      var y, O;
      (y = g.value.textInputOptions) != null && y.tabSubmit && f(S.value) && t.inputValue !== "" ? (a("set-input-date", S.value, !0), S.value = null) : (O = g.value.textInputOptions) != null && O.tabSubmit && t.inputValue === "" && (S.value = null, a("clear"));
    }, te = () => {
      P.value = !0, a("focus");
    }, ne = (y) => {
      var O;
      y.preventDefault(), y.stopImmediatePropagation(), y.stopPropagation(), t.textInput && ((O = g.value.textInputOptions) != null && O.openMenu) && !t.inlineWithInput ? t.isMenuOpen ? g.value.textInputOptions.enterSubmit && a("select-date") : a("open") : t.textInput || a("toggle");
    }, fe = () => {
      a("real-blur"), P.value = !1, t.isMenuOpen || a("blur"), t.autoApply && t.textInput && S.value && !t.isMenuOpen && (a("set-input-date", S.value), a("select-date"), S.value = null);
    }, de = () => {
      a("clear");
    }, se = (y) => {
      if (!t.textInput) {
        if (y.code === "Tab")
          return;
        y.preventDefault();
      }
    };
    return n({
      focusInput: () => {
        var y;
        (y = U.value) == null || y.focus({ preventScroll: !0 });
      },
      setParsedDate: (y) => {
        S.value = y;
      }
    }), (y, O) => {
      var B;
      return p(), I("div", { onClick: ne }, [
        y.$slots.trigger && !y.$slots["dp-input"] && !y.inline ? x(y.$slots, "trigger", { key: 0 }) : T("", !0),
        !y.$slots.trigger && (!y.inline || y.inlineWithInput) ? (p(), I("div", cr, [
          y.$slots["dp-input"] && !y.$slots.trigger && !y.inline ? x(y.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: N,
            onEnter: Z,
            onTab: H,
            onClear: de,
            onBlur: fe,
            onKeypress: se,
            onPaste: V
          }) : T("", !0),
          y.$slots["dp-input"] ? T("", !0) : (p(), I("input", {
            key: 1,
            ref_key: "inputRef",
            ref: U,
            id: y.uid ? `dp-input-${y.uid}` : void 0,
            name: y.name,
            class: he(i(D)),
            inputmode: y.textInput ? "text" : "none",
            placeholder: y.placeholder,
            disabled: y.disabled,
            readonly: y.readonly,
            required: y.required,
            value: e.inputValue,
            autocomplete: y.autocomplete,
            "aria-label": (B = i(g).ariaLabels) == null ? void 0 : B.input,
            onInput: N,
            onKeydown: [
              ue(Z, ["enter"]),
              ue(H, ["tab"]),
              se
            ],
            onBlur: fe,
            onFocus: te,
            onKeypress: se,
            onPaste: V
          }, null, 42, fr)),
          y.$slots["input-icon"] && !y.hideInputIcon ? (p(), I("span", mr, [
            x(y.$slots, "input-icon")
          ])) : T("", !0),
          !y.$slots["input-icon"] && !y.hideInputIcon && !y.$slots["dp-input"] ? (p(), ve(i(Wt), {
            key: 3,
            class: "dp__input_icon dp__input_icons"
          })) : T("", !0),
          y.$slots["clear-icon"] && e.inputValue && y.clearable && !y.disabled && !y.readonly ? (p(), I("span", vr, [
            x(y.$slots, "clear-icon", { clear: de })
          ])) : T("", !0),
          y.clearable && !y.$slots["clear-icon"] && e.inputValue && !y.disabled && !y.readonly ? (p(), ve(i(ga), {
            key: 5,
            class: "dp__clear_icon dp__input_icons",
            onClick: Je(de, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : T("", !0)
        ])) : T("", !0)
      ]);
    };
  }
}), gr = ["title"], hr = { class: "dp__action_buttons" }, pr = ["onKeydown", "disabled"], kr = /* @__PURE__ */ Ke({
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    calendarWidth: { type: Number, default: 0 },
    ...rt
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: n }) {
    const a = e, { formatDate: t, isValidTime: o, defaults: f } = Le(a), { buildMatrix: g } = at(), _ = W(null), L = W(null);
    We(() => {
      a.arrowNavigation && g([$e(_), $e(L)], "actionRow");
    });
    const S = E(() => a.range && !a.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0), U = E(() => !P.value || !c.value || !S.value), P = E(() => !a.enableTimePicker || a.ignoreTimeValidation ? !0 : o(a.internalModelValue)), c = E(() => a.monthPicker ? a.range && Array.isArray(a.internalModelValue) ? !a.internalModelValue.filter((Z) => !V(Z)).length : V(a.internalModelValue) : !0), D = () => {
      const N = f.value.previewFormat;
      return a.timePicker || a.monthPicker, N(Se(a.internalModelValue));
    }, Q = () => {
      const N = a.internalModelValue;
      return f.value.multiCalendars > 0 ? `${t(N[0])} - ${t(N[1])}` : [t(N[0]), t(N[1])];
    }, z = E(() => !a.internalModelValue || !a.menuMount ? "" : typeof f.value.previewFormat == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? Q() : a.multiDates ? a.internalModelValue.map((N) => `${t(N)}`) : a.modelAuto ? `${t(a.internalModelValue[0])}` : `${t(a.internalModelValue[0])} -` : t(a.internalModelValue) : D()), j = E(
      () => Array.isArray(z.value) ? z.value.join(a.multiDates ? "; " : " - ") : z.value
    ), V = (N) => {
      if (!a.monthPicker)
        return !0;
      let Z = !0;
      const H = M(Dt(N));
      if (a.minDate && a.maxDate) {
        const te = M(Dt(a.minDate)), ne = M(Dt(a.maxDate));
        return Ve(H, te) && Ie(H, ne) || ge(H, te) || ge(H, ne);
      }
      if (a.minDate) {
        const te = M(Dt(a.minDate));
        Z = Ve(H, te) || ge(H, te);
      }
      if (a.maxDate) {
        const te = M(Dt(a.maxDate));
        Z = Ie(H, te) || ge(H, te);
      }
      return Z;
    }, F = () => {
      P.value && c.value && S.value ? n("select-date") : n("invalid-select");
    };
    return (N, Z) => (p(), I("div", {
      class: "dp__action_row",
      style: et(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      N.$slots["action-row"] ? x(N.$slots, "action-row", Re(Pe({ key: 0 }, {
        internalModelValue: e.internalModelValue,
        disabled: i(U),
        selectDate: () => N.$emit("select-date"),
        closePicker: () => N.$emit("close-picker")
      }))) : (p(), I(ye, { key: 1 }, [
        i(f).actionRow.showPreview ? (p(), I("div", {
          key: 0,
          class: "dp__selection_preview",
          title: i(j)
        }, [
          N.$slots["action-preview"] ? x(N.$slots, "action-preview", {
            key: 0,
            value: e.internalModelValue
          }) : T("", !0),
          N.$slots["action-preview"] ? T("", !0) : (p(), I(ye, { key: 1 }, [
            Ze(Oe(i(j)), 1)
          ], 64))
        ], 8, gr)) : T("", !0),
        oe("div", hr, [
          N.$slots["action-buttons"] ? x(N.$slots, "action-buttons", {
            key: 0,
            value: e.internalModelValue
          }) : T("", !0),
          N.$slots["action-buttons"] ? T("", !0) : (p(), I(ye, { key: 1 }, [
            !N.inline && i(f).actionRow.showCancel ? (p(), I("button", {
              key: 0,
              type: "button",
              ref_key: "cancelButtonRef",
              ref: _,
              class: "dp__action_button dp__action_cancel",
              onClick: Z[0] || (Z[0] = (H) => N.$emit("close-picker")),
              onKeydown: [
                Z[1] || (Z[1] = ue((H) => N.$emit("close-picker"), ["enter"])),
                Z[2] || (Z[2] = ue((H) => N.$emit("close-picker"), ["space"]))
              ]
            }, Oe(N.cancelText), 545)) : T("", !0),
            N.showNowButton || i(f).actionRow.showNow ? (p(), I("button", {
              key: 1,
              type: "button",
              ref_key: "cancelButtonRef",
              ref: _,
              class: "dp__action_button dp__action_cancel",
              onClick: Z[3] || (Z[3] = (H) => N.$emit("select-now")),
              onKeydown: [
                Z[4] || (Z[4] = ue((H) => N.$emit("select-now"), ["enter"])),
                Z[5] || (Z[5] = ue((H) => N.$emit("select-now"), ["space"]))
              ]
            }, Oe(N.nowButtonLabel), 545)) : T("", !0),
            i(f).actionRow.showSelect ? (p(), I("button", {
              key: 2,
              type: "button",
              class: "dp__action_button dp__action_select",
              onKeydown: [
                ue(F, ["enter"]),
                ue(F, ["space"])
              ],
              onClick: F,
              disabled: i(U),
              ref_key: "selectButtonRef",
              ref: L
            }, Oe(N.selectText), 41, pr)) : T("", !0)
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
}, $r = /* @__PURE__ */ oe("div", { class: "dp__calendar_header_separator" }, null, -1), Mr = ["aria-label"], Tr = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, Ar = { class: "dp__cell_inner" }, Sr = ["aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], Pr = /* @__PURE__ */ Ke({
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
    const t = e, { buildMultiLevelMatrix: o } = at(), { setDateMonthOrYear: f, defaults: g } = Le(t), _ = W(null), L = W({
      bottom: "",
      left: "",
      transform: ""
    }), S = W([]), U = W(null), P = W(!0), c = W(""), D = W({ startX: 0, endX: 0, startY: 0, endY: 0 }), Q = W([]), z = W({ left: "50%" }), j = E(() => t.dayNames ? Array.isArray(t.dayNames) ? t.dayNames : t.dayNames(t.locale, +t.weekStart) : Ka(t.locale, +t.weekStart));
    We(() => {
      a("mount", { cmp: "calendar", refs: S }), t.noSwipe || U.value && (U.value.addEventListener("touchstart", R, { passive: !1 }), U.value.addEventListener("touchend", w, { passive: !1 }), U.value.addEventListener("touchmove", y, { passive: !1 })), t.monthChangeOnScroll && U.value && U.value.addEventListener("wheel", $, { passive: !1 });
    });
    const V = (h) => h ? t.vertical ? "vNext" : "next" : t.vertical ? "vPrevious" : "previous", F = (h, r) => {
      if (t.transitions) {
        const m = je(f(M(), t.month, t.year));
        c.value = Ve(je(f(M(), h, r)), m) ? g.value.transitions[V(!0)] : g.value.transitions[V(!1)], P.value = !1, Qe(() => {
          P.value = !0;
        });
      }
    }, N = E(
      () => ({
        [t.calendarClassName]: !!t.calendarClassName
      })
    ), Z = E(() => (h) => {
      const r = Xa(h);
      return {
        dp__marker_dot: r.type === "dot",
        dp__marker_line: r.type === "line"
      };
    }), H = E(() => (h) => ge(h, _.value)), te = E(() => ({
      dp__calendar: !0,
      dp__calendar_next: g.value.multiCalendars > 0 && t.instance !== 0
    })), ne = E(() => (h) => t.hideOffsetDates ? h.current : !0), fe = E(() => t.specificMode ? { height: `${t.modeHeight}px` } : void 0), de = async (h, r, m) => {
      var l, d;
      if (a("set-hover-date", h), (d = (l = h.marker) == null ? void 0 : l.tooltip) != null && d.length) {
        const Y = $e(S.value[r][m]);
        if (Y) {
          const { width: A, height: v } = Y.getBoundingClientRect();
          _.value = h.value;
          let C = { left: `${A / 2}px` }, u = -50;
          if (await Qe(), Q.value[0]) {
            const { left: G, width: re } = Q.value[0].getBoundingClientRect();
            G < 0 && (C = { left: "0" }, u = 0, z.value.left = `${A / 2}px`), window.innerWidth < G + re && (C = { right: "0" }, u = 0, z.value.left = `${re - A / 2}px`);
          }
          L.value = {
            bottom: `${v}px`,
            ...C,
            transform: `translateX(${u}%)`
          }, a("tooltip-open", h.marker);
        }
      }
    }, se = (h) => {
      _.value && (_.value = null, L.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), a("tooltip-close", h.marker));
    }, R = (h) => {
      D.value.startX = h.changedTouches[0].screenX, D.value.startY = h.changedTouches[0].screenY;
    }, w = (h) => {
      D.value.endX = h.changedTouches[0].screenX, D.value.endY = h.changedTouches[0].screenY, O();
    }, y = (h) => {
      t.vertical && !t.inline && h.preventDefault();
    }, O = () => {
      const h = t.vertical ? "Y" : "X";
      Math.abs(D.value[`start${h}`] - D.value[`end${h}`]) > 10 && a("handle-swipe", D.value[`start${h}`] > D.value[`end${h}`] ? "right" : "left");
    }, B = (h, r, m) => {
      h && (Array.isArray(S.value[r]) ? S.value[r][m] = h : S.value[r] = [h]), t.arrowNavigation && o(S.value, "calendar");
    }, $ = (h) => {
      t.monthChangeOnScroll && (h.preventDefault(), a("handle-scroll", h));
    };
    return n({ triggerTransition: F }), (h, r) => {
      var m;
      return p(), I("div", {
        class: he(i(te))
      }, [
        oe("div", {
          style: et(i(fe)),
          ref_key: "calendarWrapRef",
          ref: U,
          role: "grid",
          class: he(i(N)),
          "aria-label": (m = i(g).ariaLabels) == null ? void 0 : m.calendarWrap
        }, [
          e.specificMode ? T("", !0) : (p(), I(ye, { key: 0 }, [
            oe("div", br, [
              h.weekNumbers ? (p(), I("div", Dr, Oe(h.weekNumName), 1)) : T("", !0),
              (p(!0), I(ye, null, Ce(i(j), (l, d) => (p(), I("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: d
              }, [
                h.$slots["calendar-header"] ? x(h.$slots, "calendar-header", {
                  key: 0,
                  day: l,
                  index: d
                }) : T("", !0),
                h.$slots["calendar-header"] ? T("", !0) : (p(), I(ye, { key: 1 }, [
                  Ze(Oe(l), 1)
                ], 64))
              ]))), 128))
            ]),
            $r,
            mt(kt, {
              name: c.value,
              css: !!h.transitions
            }, {
              default: ie(() => {
                var l;
                return [
                  P.value ? (p(), I("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": (l = i(g).ariaLabels) == null ? void 0 : l.calendarDays
                  }, [
                    (p(!0), I(ye, null, Ce(e.mappedDates, (d, Y) => (p(), I("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: Y
                    }, [
                      h.weekNumbers ? (p(), I("div", Tr, [
                        oe("div", Ar, Oe(e.getWeekNum(d.days)), 1)
                      ])) : T("", !0),
                      (p(!0), I(ye, null, Ce(d.days, (A, v) => {
                        var C, u, G;
                        return p(), I("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (re) => B(re, Y, v),
                          key: v + Y,
                          "aria-selected": A.classData.dp__active_date || A.classData.dp__range_start || A.classData.dp__range_start,
                          "aria-disabled": A.classData.dp__cell_disabled,
                          "aria-label": (u = (C = i(g).ariaLabels) == null ? void 0 : C.day) == null ? void 0 : u.call(C, A),
                          tabindex: "0",
                          onClick: Je((re) => h.$emit("select-date", A), ["stop", "prevent"]),
                          onKeydown: [
                            ue((re) => h.$emit("select-date", A), ["enter"]),
                            ue((re) => h.$emit("handle-space", A), ["space"])
                          ],
                          onMouseenter: (re) => de(A, Y, v),
                          onMouseleave: (re) => se(A)
                        }, [
                          oe("div", {
                            class: he(["dp__cell_inner", A.classData])
                          }, [
                            h.$slots.day && i(ne)(A) ? x(h.$slots, "day", {
                              key: 0,
                              day: +A.text,
                              date: A.value
                            }) : T("", !0),
                            h.$slots.day ? T("", !0) : (p(), I(ye, { key: 1 }, [
                              Ze(Oe(A.text), 1)
                            ], 64)),
                            A.marker && i(ne)(A) ? (p(), I("div", {
                              key: 2,
                              class: he(i(Z)(A.marker)),
                              style: et(A.marker.color ? { backgroundColor: A.marker.color } : {})
                            }, null, 6)) : T("", !0),
                            i(H)(A.value) ? (p(), I("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              ref_for: !0,
                              ref_key: "activeTooltip",
                              ref: Q,
                              style: et(L.value)
                            }, [
                              (G = A.marker) != null && G.tooltip ? (p(), I("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: r[0] || (r[0] = Je(() => {
                                }, ["stop"]))
                              }, [
                                (p(!0), I(ye, null, Ce(A.marker.tooltip, (re, be) => (p(), I("div", {
                                  key: be,
                                  class: "dp__tooltip_text"
                                }, [
                                  h.$slots["marker-tooltip"] ? x(h.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: re,
                                    day: A.value
                                  }) : T("", !0),
                                  h.$slots["marker-tooltip"] ? T("", !0) : (p(), I(ye, { key: 1 }, [
                                    oe("div", {
                                      class: "dp__tooltip_mark",
                                      style: et(re.color ? { backgroundColor: re.color } : {})
                                    }, null, 4),
                                    oe("div", null, Oe(re.text), 1)
                                  ], 64))
                                ]))), 128)),
                                oe("div", {
                                  class: "dp__arrow_bottom_tp",
                                  style: et(z.value)
                                }, null, 4)
                              ])) : T("", !0)
                            ], 4)) : T("", !0)
                          ], 2)
                        ], 40, Sr);
                      }), 128))
                    ]))), 128))
                  ], 8, Mr)) : T("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 64))
        ], 14, wr)
      ], 2);
    };
  }
}), Cr = ["aria-label", "aria-disabled"], ln = /* @__PURE__ */ Ke({
  __name: "ActionIcon",
  props: {
    ariaLabel: null,
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: n }) {
    const a = W(null);
    return We(() => n("set-ref", a)), (t, o) => (p(), I("button", {
      type: "button",
      class: "dp__btn dp__month_year_col_nav",
      onClick: o[0] || (o[0] = (f) => t.$emit("activate")),
      onKeydown: [
        o[1] || (o[1] = ue((f) => t.$emit("activate"), ["enter"])),
        o[2] || (o[2] = ue((f) => t.$emit("activate"), ["space"]))
      ],
      tabindex: "0",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled,
      ref_key: "elRef",
      ref: a
    }, [
      oe("span", {
        class: he(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        x(t.$slots, "default")
      ], 2)
    ], 40, Cr));
  }
}), _r = ["onKeydown"], Nr = { class: "dp__selection_grid_header" }, Rr = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"], Or = ["aria-label", "onKeydown"], At = /* @__PURE__ */ Ke({
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
    const t = e, { setSelectionGrid: o, buildMultiLevelMatrix: f, setMonthPicker: g } = at(), { hideNavigationButtons: _ } = Le(t), L = W(!1), S = W(null), U = W(null), P = W([]), c = W(), D = W(null), Q = W(0), z = W(null);
    na(() => {
      S.value = null;
    }), We(() => {
      Qe().then(() => de()), V(), j(!0);
    }), yn(() => j(!1));
    const j = ($) => {
      var h;
      t.arrowNavigation && ((h = t.headerRefs) != null && h.length ? g($) : o($));
    }, V = () => {
      const $ = $e(U);
      $ && (t.textInput || $.focus({ preventScroll: !0 }), L.value = $.clientHeight < $.scrollHeight);
    }, F = E(
      () => ({
        dp__overlay: !0
      })
    ), N = E(() => ({
      dp__overlay_col: !0
    })), Z = ($) => t.skipActive ? !1 : $.value === t.modelValue, H = E(() => t.items.map(($) => $.filter((h) => h).map((h) => {
      var l, d, Y;
      const r = t.disabledValues.some((A) => A === h.value) || fe(h.value), m = (l = t.multiModelValue) != null && l.length ? (d = t.multiModelValue) == null ? void 0 : d.some(
        (A) => ge(
          A,
          tt(
            t.monthPicker ? Lt(/* @__PURE__ */ new Date(), h.value) : /* @__PURE__ */ new Date(),
            t.monthPicker ? t.year : h.value
          )
        )
      ) : Z(h);
      return {
        ...h,
        className: {
          dp__overlay_cell_active: m,
          dp__overlay_cell: !m,
          dp__overlay_cell_disabled: r,
          dp__overlay_cell_active_disabled: r && m,
          dp__overlay_cell_pad: !0,
          dp__cell_in_between: (Y = t.multiModelValue) != null && Y.length && t.skipActive ? R(h.value) : !1
        }
      };
    }))), te = E(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: L.value,
        dp__button_bottom: t.autoApply
      })
    ), ne = E(() => {
      var $, h;
      return {
        dp__overlay_container: !0,
        dp__container_flex: (($ = t.items) == null ? void 0 : $.length) <= 6,
        dp__container_block: ((h = t.items) == null ? void 0 : h.length) > 6
      };
    }), fe = ($) => {
      const h = t.maxValue || t.maxValue === 0, r = t.minValue || t.minValue === 0;
      return !h && !r ? !1 : h && r ? +$ > +t.maxValue || +$ < +t.minValue : h ? +$ > +t.maxValue : r ? +$ < +t.minValue : !1;
    }, de = () => {
      const $ = $e(S), h = $e(U), r = $e(D), m = $e(z), l = r ? r.getBoundingClientRect().height : 0;
      h && (Q.value = h.getBoundingClientRect().height - l), $ && m && (m.scrollTop = $.offsetTop - m.offsetTop - (Q.value / 2 - $.getBoundingClientRect().height) - l);
    }, se = ($) => {
      !t.disabledValues.some((h) => h === $) && !fe($) && (a("update:model-value", $), a("selected"));
    }, R = ($) => {
      const h = t.monthPicker ? t.year : $;
      return Gn(
        t.multiModelValue,
        tt(
          t.monthPicker ? Lt(/* @__PURE__ */ new Date(), c.value || 0) : /* @__PURE__ */ new Date(),
          t.monthPicker ? h : c.value || h
        ),
        tt(t.monthPicker ? Lt(/* @__PURE__ */ new Date(), $) : /* @__PURE__ */ new Date(), h)
      );
    }, w = () => {
      a("toggle"), a("reset-flow");
    }, y = () => {
      t.escClose && w();
    }, O = ($, h, r, m) => {
      $ && (h.value === +t.modelValue && !t.disabledValues.includes(h.value) && (S.value = $), t.arrowNavigation && (Array.isArray(P.value[r]) ? P.value[r][m] = $ : P.value[r] = [$], B()));
    }, B = () => {
      var h, r;
      const $ = (h = t.headerRefs) != null && h.length ? [t.headerRefs].concat(P.value) : P.value.concat([t.skipButtonRef ? [] : [D.value]]);
      f(Se($), (r = t.headerRefs) != null && r.length ? "monthPicker" : "selectionGrid");
    };
    return n({ focusGrid: V }), ($, h) => {
      var r;
      return p(), I("div", {
        ref_key: "gridWrapRef",
        ref: U,
        class: he(i(F)),
        role: "dialog",
        tabindex: "0",
        onKeydown: ue(y, ["esc"])
      }, [
        oe("div", {
          class: he(i(ne)),
          ref_key: "containerRef",
          ref: z,
          role: "grid",
          style: et({ height: `${Q.value}px` })
        }, [
          oe("div", Nr, [
            x($.$slots, "header")
          ]),
          $.$slots.overlay ? x($.$slots, "overlay", { key: 0 }) : (p(!0), I(ye, { key: 1 }, Ce(i(H), (m, l) => (p(), I("div", {
            class: he(["dp__overlay_row", { dp__flex_row: i(H).length >= 3 }]),
            key: l,
            role: "row"
          }, [
            (p(!0), I(ye, null, Ce(m, (d, Y) => (p(), I("div", {
              role: "gridcell",
              class: he(i(N)),
              key: d.value,
              "aria-selected": d.value === e.modelValue && !e.disabledValues.includes(d.value),
              "aria-disabled": d.className.dp__overlay_cell_disabled,
              ref_for: !0,
              ref: (A) => O(A, d, l, Y),
              tabindex: "0",
              onClick: (A) => se(d.value),
              onKeydown: [
                ue((A) => se(d.value), ["enter"]),
                ue((A) => se(d.value), ["space"])
              ],
              onMouseover: (A) => c.value = d.value
            }, [
              oe("div", {
                class: he(d.className)
              }, [
                $.$slots.item ? x($.$slots, "item", {
                  key: 0,
                  item: d
                }) : T("", !0),
                $.$slots.item ? T("", !0) : (p(), I(ye, { key: 1 }, [
                  Ze(Oe(d.text), 1)
                ], 64))
              ], 2)
            ], 42, Rr))), 128))
          ], 2))), 128))
        ], 6),
        $.$slots["button-icon"] ? Yt((p(), I("div", {
          key: 0,
          role: "button",
          "aria-label": (r = e.ariaLabels) == null ? void 0 : r.toggleOverlay,
          class: he(i(te)),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: D,
          onClick: w,
          onKeydown: ue(w, ["enter"])
        }, [
          x($.$slots, "button-icon")
        ], 42, Or)), [
          [Vt, !i(_)(e.type)]
        ]) : T("", !0)
      ], 42, _r);
    };
  }
}), Ir = ["aria-label"], Ln = /* @__PURE__ */ Ke({
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
    const a = e, { transitionName: t, showTransition: o } = Ht(a.transitions), f = W(null);
    return We(() => n("set-ref", f)), (g, _) => (p(), I(ye, null, [
      oe("button", {
        type: "button",
        class: "dp__btn dp__month_year_select",
        onClick: _[0] || (_[0] = (L) => g.$emit("toggle")),
        onKeydown: [
          _[1] || (_[1] = ue((L) => g.$emit("toggle"), ["enter"])),
          _[2] || (_[2] = ue((L) => g.$emit("toggle"), ["space"]))
        ],
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: f
      }, [
        x(g.$slots, "default")
      ], 40, Ir),
      mt(kt, {
        name: i(t)(e.showSelectionGrid),
        css: i(o)
      }, {
        default: ie(() => [
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
            "onUpdate:modelValue": _[3] || (_[3] = (L) => g.$emit("update:model-value", L)),
            onToggle: _[4] || (_[4] = (L) => g.$emit("toggle"))
          }), Ee({
            "button-icon": ie(() => [
              g.$slots["calendar-icon"] ? x(g.$slots, "calendar-icon", { key: 0 }) : T("", !0),
              g.$slots["calendar-icon"] ? T("", !0) : (p(), ve(i(Wt), { key: 1 }))
            ]),
            _: 2
          }, [
            g.$slots[e.slotName] ? {
              name: "item",
              fn: ie(({ item: L }) => [
                x(g.$slots, e.slotName, { item: L })
              ]),
              key: "0"
            } : void 0,
            g.$slots[e.overlaySlot] ? {
              name: "overlay",
              fn: ie(() => [
                x(g.$slots, e.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            g.$slots[`${e.overlaySlot}-header`] ? {
              name: "header",
              fn: ie(() => [
                x(g.$slots, `${e.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : T("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), Br = { class: "dp__month_year_row" }, Yr = { class: "dp__month_picker_header" }, Vr = ["aria-label"], Er = ["aria-label"], Lr = ["aria-label"], Fr = /* @__PURE__ */ Ke({
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
    const t = e, { defaults: o } = Le(t), { transitionName: f, showTransition: g } = Ht(o.value.transitions), { buildMatrix: _ } = at(), { handleMonthYearChange: L, isDisabled: S, updateMonthYear: U } = sr(t, a), P = W(!1), c = W(!1), D = W([null, null, null, null]), Q = W(null), z = W(null), j = W(null);
    We(() => {
      a("mount");
    });
    const V = (v) => ({
      get: () => t[v],
      set: (C) => {
        const u = v === "month" ? "year" : "month";
        a("update-month-year", { [v]: C, [u]: t[u] }), a("month-year-select", v === "year"), v === "month" ? m(!0) : l(!0);
      }
    }), F = E(V("month")), N = E(V("year")), Z = (v) => {
      const C = we(M(v));
      return t.year === C;
    }, H = E(() => t.monthPicker ? Array.isArray(t.disabledDates) ? t.disabledDates.map((v) => M(v)).filter((v) => Z(v)).map((v) => pe(v)) : [] : []), te = E(() => (v) => {
      const C = v === "month";
      return {
        showSelectionGrid: (C ? P : c).value,
        items: (C ? B : $).value,
        disabledValues: o.value.filters[C ? "months" : "years"].concat(H.value),
        minValue: (C ? se : fe).value,
        maxValue: (C ? R : de).value,
        headerRefs: C && t.monthPicker ? [Q.value, z.value, j.value] : [],
        escClose: t.escClose,
        transitions: o.value.transitions,
        ariaLabels: o.value.ariaLabels,
        textInput: t.textInput,
        autoApply: t.autoApply,
        arrowNavigation: t.arrowNavigation,
        hideNavigation: t.hideNavigation
      };
    }), ne = E(() => (v) => ({
      month: t.month,
      year: t.year,
      items: v === "month" ? t.months : t.years,
      instance: t.instance,
      updateMonthYear: U,
      toggle: v === "month" ? m : l
    })), fe = E(() => t.minDate ? we(M(t.minDate)) : null), de = E(() => t.maxDate ? we(M(t.maxDate)) : null), se = E(() => {
      if (t.minDate && fe.value) {
        if (fe.value > t.year)
          return 12;
        if (fe.value === t.year)
          return pe(M(t.minDate));
      }
      return null;
    }), R = E(() => t.maxDate && de.value ? de.value < t.year ? -1 : de.value === t.year ? pe(M(t.maxDate)) : null : null), w = E(() => (t.range || t.multiDates) && t.internalModelValue && (t.monthPicker || t.yearPicker) ? t.internalModelValue : []), y = (v) => {
      const C = [], u = (G) => G;
      for (let G = 0; G < v.length; G += 3) {
        const re = [v[G], v[G + 1], v[G + 2]];
        C.push(u(re));
      }
      return C;
    }, O = E(() => {
      const v = t.months.find((C) => C.value === t.month);
      return v || { text: "", value: 0 };
    }), B = E(() => y(t.months)), $ = E(() => y(t.years)), h = E(() => o.value.multiCalendars ? t.multiCalendarsSolo ? !0 : t.instance === 0 : !0), r = E(() => o.value.multiCalendars ? t.multiCalendarsSolo ? !0 : t.instance === o.value.multiCalendars - 1 : !0), m = (v = !1) => {
      d(v), P.value = !P.value, P.value || a("overlay-closed");
    }, l = (v = !1) => {
      d(v), c.value = !c.value, c.value || a("overlay-closed");
    }, d = (v) => {
      v || a("reset-flow");
    }, Y = (v = !1) => {
      S.value(v) || a("update-month-year", {
        year: v ? t.year + 1 : t.year - 1,
        month: t.month,
        fromNav: !0
      });
    }, A = (v, C) => {
      t.arrowNavigation && (D.value[C] = $e(v), _(D.value, "monthYear"));
    };
    return n({
      toggleMonthPicker: m,
      toggleYearPicker: l,
      handleMonthYearChange: L
    }), (v, C) => {
      var u, G, re, be, He;
      return p(), I("div", Br, [
        v.$slots["month-year"] ? x(v.$slots, "month-year", Re(Pe({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: i(U), handleMonthYearChange: i(L), instance: e.instance }))) : (p(), I(ye, { key: 1 }, [
          !v.monthPicker && !v.yearPicker ? (p(), I(ye, { key: 0 }, [
            i(h) && !v.vertical ? (p(), ve(ln, {
              key: 0,
              "aria-label": (u = i(o).ariaLabels) == null ? void 0 : u.prevMonth,
              disabled: i(S)(!1),
              onActivate: C[0] || (C[0] = (ae) => i(L)(!1)),
              onSetRef: C[1] || (C[1] = (ae) => A(ae, 0))
            }, {
              default: ie(() => [
                v.$slots["arrow-left"] ? x(v.$slots, "arrow-left", { key: 0 }) : T("", !0),
                v.$slots["arrow-left"] ? T("", !0) : (p(), ve(i(Mn), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : T("", !0),
            oe("div", {
              class: he(["dp__month_year_wrap", {
                dp__year_disable_select: t.disableYearSelect
              }])
            }, [
              mt(Ln, Pe({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": (G = i(o).ariaLabels) == null ? void 0 : G.openMonthsOverlay,
                modelValue: i(F),
                "onUpdate:modelValue": C[2] || (C[2] = (ae) => ut(F) ? F.value = ae : null)
              }, i(te)("month"), {
                onToggle: m,
                onSetRef: C[3] || (C[3] = (ae) => A(ae, 1))
              }), Ee({
                default: ie(() => [
                  v.$slots.month ? x(v.$slots, "month", Re(Pe({ key: 0 }, i(O)))) : T("", !0),
                  v.$slots.month ? T("", !0) : (p(), I(ye, { key: 1 }, [
                    Ze(Oe(i(O).text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                v.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: ie(() => [
                    x(v.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                v.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: ie(({ item: ae }) => [
                    x(v.$slots, "month-overlay-value", {
                      text: ae.text,
                      value: ae.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                v.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: ie(() => [
                    x(v.$slots, "month-overlay", Re(ze(i(ne)("month"))))
                  ]),
                  key: "2"
                } : void 0,
                v.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: ie(() => [
                    x(v.$slots, "month-overlay-header", { toggle: m })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              t.disableYearSelect ? T("", !0) : (p(), ve(Ln, Pe({
                key: 0,
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": (re = i(o).ariaLabels) == null ? void 0 : re.openYearsOverlay,
                modelValue: i(N),
                "onUpdate:modelValue": C[4] || (C[4] = (ae) => ut(N) ? N.value = ae : null)
              }, i(te)("year"), {
                onToggle: l,
                onSetRef: C[5] || (C[5] = (ae) => A(ae, 2))
              }), Ee({
                default: ie(() => [
                  v.$slots.year ? x(v.$slots, "year", {
                    key: 0,
                    year: e.year
                  }) : T("", !0),
                  v.$slots.year ? T("", !0) : (p(), I(ye, { key: 1 }, [
                    Ze(Oe(e.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                v.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: ie(() => [
                    x(v.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                v.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: ie(({ item: ae }) => [
                    x(v.$slots, "year-overlay-value", {
                      text: ae.text,
                      value: ae.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                v.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: ie(() => [
                    x(v.$slots, "year-overlay", Re(ze(i(ne)("year"))))
                  ]),
                  key: "2"
                } : void 0,
                v.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: ie(() => [
                    x(v.$slots, "year-overlay-header", { toggle: l })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]))
            ], 2),
            i(h) && v.vertical ? (p(), ve(ln, {
              key: 1,
              "aria-label": (be = i(o).ariaLabels) == null ? void 0 : be.prevMonth,
              disabled: i(S)(!1),
              onActivate: C[6] || (C[6] = (ae) => i(L)(!1))
            }, {
              default: ie(() => [
                v.$slots["arrow-up"] ? x(v.$slots, "arrow-up", { key: 0 }) : T("", !0),
                v.$slots["arrow-up"] ? T("", !0) : (p(), ve(i(jn), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : T("", !0),
            i(r) ? (p(), ve(ln, {
              key: 2,
              ref: "rightIcon",
              disabled: i(S)(!0),
              "aria-label": (He = i(o).ariaLabels) == null ? void 0 : He.nextMonth,
              onActivate: C[7] || (C[7] = (ae) => i(L)(!0)),
              onSetRef: C[8] || (C[8] = (ae) => A(ae, 3))
            }, {
              default: ie(() => [
                v.$slots[v.vertical ? "arrow-down" : "arrow-right"] ? x(v.$slots, v.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : T("", !0),
                v.$slots[v.vertical ? "arrow-down" : "arrow-right"] ? T("", !0) : (p(), ve(Fn(v.vertical ? i(Kn) : i(Tn)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : T("", !0)
          ], 64)) : T("", !0),
          v.monthPicker ? (p(), ve(At, Pe({ key: 1 }, i(te)("month"), {
            "skip-active": v.range,
            year: e.year,
            "multi-model-value": i(w),
            "month-picker": "",
            modelValue: i(F),
            "onUpdate:modelValue": C[17] || (C[17] = (ae) => ut(F) ? F.value = ae : null),
            onToggle: m,
            onSelected: C[18] || (C[18] = (ae) => v.$emit("overlay-closed"))
          }), Ee({
            header: ie(() => {
              var ae, Fe, Ge;
              return [
                oe("div", Yr, [
                  oe("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: Q,
                    onClick: C[9] || (C[9] = (Te) => Y(!1)),
                    onKeydown: C[10] || (C[10] = ue((Te) => Y(!1), ["enter"]))
                  }, [
                    oe("div", {
                      class: he(["dp__inner_nav", { dp__inner_nav_disabled: i(S)(!1) }]),
                      role: "button",
                      "aria-label": (ae = i(o).ariaLabels) == null ? void 0 : ae.prevMonth
                    }, [
                      v.$slots["arrow-left"] ? x(v.$slots, "arrow-left", { key: 0 }) : T("", !0),
                      v.$slots["arrow-left"] ? T("", !0) : (p(), ve(i(Mn), { key: 1 }))
                    ], 10, Vr)
                  ], 544),
                  oe("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: z,
                    "aria-label": (Fe = i(o).ariaLabels) == null ? void 0 : Fe.openYearsOverlay,
                    tabindex: "0",
                    onClick: C[11] || (C[11] = () => l(!1)),
                    onKeydown: C[12] || (C[12] = ue(() => l(!1), ["enter"]))
                  }, [
                    v.$slots.year ? x(v.$slots, "year", {
                      key: 0,
                      year: e.year
                    }) : T("", !0),
                    v.$slots.year ? T("", !0) : (p(), I(ye, { key: 1 }, [
                      Ze(Oe(e.year), 1)
                    ], 64))
                  ], 40, Er),
                  oe("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpNextIconRef",
                    ref: j,
                    onClick: C[13] || (C[13] = (Te) => Y(!0)),
                    onKeydown: C[14] || (C[14] = ue((Te) => Y(!0), ["enter"]))
                  }, [
                    oe("div", {
                      class: he(["dp__inner_nav", { dp__inner_nav_disabled: i(S)(!0) }]),
                      role: "button",
                      "aria-label": (Ge = i(o).ariaLabels) == null ? void 0 : Ge.nextMonth
                    }, [
                      v.$slots["arrow-right"] ? x(v.$slots, "arrow-right", { key: 0 }) : T("", !0),
                      v.$slots["arrow-right"] ? T("", !0) : (p(), ve(i(Tn), { key: 1 }))
                    ], 10, Lr)
                  ], 544)
                ]),
                mt(kt, {
                  name: i(f)(c.value),
                  css: i(g)
                }, {
                  default: ie(() => [
                    c.value ? (p(), ve(At, Pe({ key: 0 }, i(te)("year"), {
                      modelValue: i(N),
                      "onUpdate:modelValue": C[15] || (C[15] = (Te) => ut(N) ? N.value = Te : null),
                      onToggle: l,
                      onSelected: C[16] || (C[16] = (Te) => v.$emit("overlay-closed"))
                    }), Ee({
                      "button-icon": ie(() => [
                        v.$slots["calendar-icon"] ? x(v.$slots, "calendar-icon", { key: 0 }) : T("", !0),
                        v.$slots["calendar-icon"] ? T("", !0) : (p(), ve(i(Wt), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      v.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: ie(({ item: Te }) => [
                          x(v.$slots, "year-overlay-value", {
                            text: Te.text,
                            value: Te.value
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : T("", !0)
                  ]),
                  _: 3
                }, 8, ["name", "css"])
              ];
            }),
            _: 2
          }, [
            v.$slots["month-overlay-value"] ? {
              name: "item",
              fn: ie(({ item: ae }) => [
                x(v.$slots, "month-overlay-value", {
                  text: ae.text,
                  value: ae.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : T("", !0),
          v.yearPicker ? (p(), ve(At, Pe({ key: 2 }, i(te)("year"), {
            modelValue: i(N),
            "onUpdate:modelValue": C[19] || (C[19] = (ae) => ut(N) ? N.value = ae : null),
            "multi-model-value": i(w),
            "skip-active": v.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: l,
            onSelected: C[20] || (C[20] = (ae) => v.$emit("overlay-closed"))
          }), Ee({ _: 2 }, [
            v.$slots["year-overlay-value"] ? {
              name: "item",
              fn: ie(({ item: ae }) => [
                x(v.$slots, "year-overlay-value", {
                  text: ae.text,
                  value: ae.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : T("", !0)
        ], 64))
      ]);
    };
  }
}), Ur = {
  key: 0,
  style: { "justify-content": "space-between" },
  class: "dp__time_input"
}, Wr = ["aria-label", "onKeydown", "onClick"], Hr = ["aria-label", "onKeydown", "onClick"], xr = ["aria-label", "onKeydown", "onClick"], zr = { key: 0 }, jr = ["aria-label", "onKeydown"], Kr = /* @__PURE__ */ Ke({
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
    const t = e, { setTimePickerElements: o, setTimePickerBackRef: f } = at(), { defaults: g } = Le(t), { transitionName: _, showTransition: L } = Ht(g.value.transitions), S = _t({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), U = W("AM"), P = W(null), c = W([]);
    We(() => {
      a("mounted");
    });
    const D = (r) => _e(/* @__PURE__ */ new Date(), {
      hours: r.hours,
      minutes: r.minutes,
      seconds: t.enableSeconds ? r.seconds : 0,
      milliseconds: 0
    }), Q = E(() => ({ hours: t.hours, minutes: t.minutes, seconds: t.seconds })), z = E(() => (r) => !ne(+t[r] + +t[`${r}Increment`], r)), j = E(() => (r) => !ne(+t[r] - +t[`${r}Increment`], r)), V = (r, m) => xn(_e(M(), r), m), F = (r, m) => ya(_e(M(), r), m);
    E(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !t.enableSeconds && t.is24,
        dp__time_col_reg_with_button: !t.enableSeconds && !t.is24,
        dp__time_col_sec: t.enableSeconds && t.is24,
        dp__time_col_sec_with_button: t.enableSeconds && !t.is24
      })
    );
    const N = E(() => {
      const r = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return t.enableSeconds ? r.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : r;
    }), Z = E(() => N.value.filter((r) => !r.separator)), H = E(() => (r) => {
      if (r === "hours") {
        const m = y(+t.hours);
        return { text: m < 10 ? `0${m}` : `${m}`, value: m };
      }
      return { text: t[r] < 10 ? `0${t[r]}` : `${t[r]}`, value: t[r] };
    }), te = (r) => {
      const m = t.is24 ? 24 : 12, l = r === "hours" ? m : 60, d = +t[`${r}GridIncrement`], Y = r === "hours" && !t.is24 ? d : 0, A = [];
      for (let v = Y; v < l; v += d)
        A.push({ value: v, text: v < 10 ? `0${v}` : `${v}` });
      return r === "hours" && !t.is24 && A.push({ value: 0, text: "12" }), ja(A);
    }, ne = (r, m) => {
      const l = t.minTime ? D(qt(t.minTime)) : null, d = t.maxTime ? D(qt(t.maxTime)) : null, Y = D(qt(Q.value, m, r));
      return l && d ? (Pt(Y, d) || ht(Y, d)) && (Ct(Y, l) || ht(Y, l)) : l ? Ct(Y, l) || ht(Y, l) : d ? Pt(Y, d) || ht(Y, d) : !0;
    }, fe = E(() => (r) => te(r).flat().filter((l) => l || l.value === 0).map((l) => l.value).filter((l) => !ne(l, r))), de = (r) => t[`no${r[0].toUpperCase() + r.slice(1)}Overlay`], se = (r) => {
      de(r) || (S[r] = !S[r], S[r] || a("overlay-closed"));
    }, R = (r) => r === "hours" ? qe : r === "minutes" ? Xe : pt, w = (r, m = !0) => {
      const l = m ? V : F, d = m ? +t[`${r}Increment`] : -+t[`${r}Increment`];
      ne(+t[r] + d, r) && a(
        `update:${r}`,
        R(r)(l({ [r]: +t[r] }, { [r]: +t[`${r}Increment`] }))
      );
    }, y = (r) => t.is24 ? r : (r >= 12 ? U.value = "PM" : U.value = "AM", qa(r)), O = () => {
      U.value === "PM" ? (U.value = "AM", a("update:hours", t.hours - 12)) : (U.value = "PM", a("update:hours", t.hours + 12)), a("am-pm-change", U.value);
    }, B = (r) => {
      S[r] = !0;
    }, $ = (r, m, l) => {
      if (r && t.arrowNavigation) {
        Array.isArray(c.value[m]) ? c.value[m][l] = r : c.value[m] = [r];
        const d = c.value.reduce(
          (Y, A) => A.map((v, C) => [...Y[C] || [], A[C]]),
          []
        );
        f(t.closeTimePickerBtn), P.value && (d[1] = d[1].concat(P.value)), o(d, t.order);
      }
    }, h = (r, m) => r === "hours" && !t.is24 ? a(`update:${r}`, U.value === "PM" ? m + 12 : m) : a(`update:${r}`, m);
    return n({ openChildCmp: B }), (r, m) => {
      var l;
      return r.disabled ? T("", !0) : (p(), I("div", Ur, [
        (p(!0), I(ye, null, Ce(i(N), (d, Y) => {
          var A, v, C;
          return p(), I("div", { key: Y }, [
            d.separator ? (p(), I(ye, { key: 0 }, [
              Ze(" : ")
            ], 64)) : (p(), I(ye, { key: 1 }, [
              t.noArrows ? T("", !0) : (p(), I("button", {
                key: 0,
                type: "button",
                class: he({
                  dp__btn: !0,
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: i(z)(d.type)
                }),
                "aria-label": (A = i(g).ariaLabels) == null ? void 0 : A.incrementValue(d.type),
                tabindex: "0",
                onKeydown: [
                  ue((u) => w(d.type), ["enter"]),
                  ue((u) => w(d.type), ["space"])
                ],
                onClick: (u) => w(d.type),
                ref_for: !0,
                ref: (u) => $(u, Y, 0)
              }, [
                r.$slots["arrow-up"] ? x(r.$slots, "arrow-up", { key: 0 }) : T("", !0),
                r.$slots["arrow-up"] ? T("", !0) : (p(), ve(i(jn), { key: 1 }))
              ], 42, Wr)),
              oe("button", {
                type: "button",
                "aria-label": (v = i(g).ariaLabels) == null ? void 0 : v.openTpOverlay(d.type),
                class: he(["dp__btn", { [d.type]: !0, dp__time_display: !de(d.type) }]),
                tabindex: "0",
                onKeydown: [
                  ue((u) => se(d.type), ["enter"]),
                  ue((u) => se(d.type), ["space"])
                ],
                onClick: (u) => se(d.type),
                ref_for: !0,
                ref: (u) => $(u, Y, 1)
              }, [
                r.$slots[d.type] ? x(r.$slots, d.type, {
                  key: 0,
                  text: i(H)(d.type).text,
                  value: i(H)(d.type).value
                }) : T("", !0),
                r.$slots[d.type] ? T("", !0) : (p(), I(ye, { key: 1 }, [
                  Ze(Oe(i(H)(d.type).text), 1)
                ], 64))
              ], 42, Hr),
              t.noArrows ? T("", !0) : (p(), I("button", {
                key: 1,
                type: "button",
                class: he({
                  dp__btn: !0,
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: i(j)(d.type)
                }),
                "aria-label": (C = i(g).ariaLabels) == null ? void 0 : C.decrementValue(d.type),
                tabindex: "0",
                onKeydown: [
                  ue((u) => w(d.type, !1), ["enter"]),
                  ue((u) => w(d.type, !1), ["space"])
                ],
                onClick: (u) => w(d.type, !1),
                ref_for: !0,
                ref: (u) => $(u, Y, 2)
              }, [
                r.$slots["arrow-down"] ? x(r.$slots, "arrow-down", { key: 0 }) : T("", !0),
                r.$slots["arrow-down"] ? T("", !0) : (p(), ve(i(Kn), { key: 1 }))
              ], 42, xr))
            ], 64))
          ]);
        }), 128)),
        r.is24 ? T("", !0) : (p(), I("div", zr, [
          r.$slots["am-pm-button"] ? x(r.$slots, "am-pm-button", {
            key: 0,
            toggle: O,
            value: U.value
          }) : T("", !0),
          r.$slots["am-pm-button"] ? T("", !0) : (p(), I("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: P,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (l = i(g).ariaLabels) == null ? void 0 : l.amPmButton,
            tabindex: "0",
            onClick: O,
            onKeydown: [
              ue(Je(O, ["prevent"]), ["enter"]),
              ue(Je(O, ["prevent"]), ["space"])
            ]
          }, Oe(U.value), 41, jr))
        ])),
        (p(!0), I(ye, null, Ce(i(Z), (d, Y) => (p(), ve(kt, {
          key: Y,
          name: i(_)(S[d.type]),
          css: i(L)
        }, {
          default: ie(() => [
            S[d.type] ? (p(), ve(At, {
              key: 0,
              items: te(d.type),
              "disabled-values": i(g).filters.times[d.type].concat(i(fe)(d.type)),
              "esc-close": r.escClose,
              "aria-labels": i(g).ariaLabels,
              "hide-navigation": r.hideNavigation,
              "onUpdate:modelValue": (A) => h(d.type, A),
              onSelected: (A) => se(d.type),
              onToggle: (A) => se(d.type),
              onResetFlow: m[0] || (m[0] = (A) => r.$emit("reset-flow")),
              type: d.type
            }, Ee({
              "button-icon": ie(() => [
                r.$slots["clock-icon"] ? x(r.$slots, "clock-icon", { key: 0 }) : T("", !0),
                r.$slots["clock-icon"] ? T("", !0) : (p(), ve(i(zn), { key: 1 }))
              ]),
              _: 2
            }, [
              r.$slots[`${d.type}-overlay-value`] ? {
                name: "item",
                fn: ie(({ item: A }) => [
                  x(r.$slots, `${d.type}-overlay-value`, {
                    text: A.text,
                    value: A.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "disabled-values", "esc-close", "aria-labels", "hide-navigation", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : T("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), Gr = ["aria-label"], Zr = { class: "dp__overlay_container dp__container_flex dp__time_picker_overlay_container" }, qr = {
  key: 1,
  class: "dp__overlay_row dp__flex_row"
}, Xr = ["aria-label"], Jr = /* @__PURE__ */ Ke({
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
    const t = e, { buildMatrix: o, setTimePicker: f } = at(), g = gn(), { hideNavigationButtons: _, defaults: L } = Le(t), { transitionName: S, showTransition: U } = Ht(L.value.transitions), P = W(null), c = W(null), D = W([]), Q = W(null);
    We(() => {
      a("mount"), !t.timePicker && t.arrowNavigation ? o([$e(P.value)], "time") : f(!0, t.timePicker);
    });
    const z = E(() => t.range && t.modelAuto ? Qn(t.internalModelValue) : !0), j = W(!1), V = (R) => ({
      hours: Array.isArray(t.hours) ? t.hours[R] : t.hours,
      minutes: Array.isArray(t.minutes) ? t.minutes[R] : t.minutes,
      seconds: Array.isArray(t.seconds) ? t.seconds[R] : t.seconds
    }), F = E(() => {
      const R = [];
      if (t.range)
        for (let w = 0; w < 2; w++)
          R.push(V(w));
      else
        R.push(V(0));
      return R;
    }), N = (R, w = !1, y = "") => {
      w || a("reset-flow"), j.value = R, a(R ? "overlay-opened" : "overlay-closed"), t.arrowNavigation && f(R), Qe(() => {
        y !== "" && D.value[0] && D.value[0].openChildCmp(y);
      });
    }, Z = E(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: t.autoApply && !t.keepActionRow
    })), H = ft(g, "timePicker"), te = (R, w, y) => t.range ? w === 0 ? [R, F.value[1][y]] : [F.value[0][y], R] : R, ne = (R) => {
      a("update:hours", R);
    }, fe = (R) => {
      a("update:minutes", R);
    }, de = (R) => {
      a("update:seconds", R);
    }, se = () => {
      Q.value && t.arrowNavigation && Q.value.focus({ preventScroll: !0 });
    };
    return n({ toggleTimePicker: N }), (R, w) => {
      var y;
      return p(), I("div", null, [
        R.timePicker ? T("", !0) : Yt((p(), I("button", {
          key: 0,
          type: "button",
          class: he(i(Z)),
          "aria-label": (y = i(L).ariaLabels) == null ? void 0 : y.openTimePicker,
          tabindex: "0",
          ref_key: "openTimePickerBtn",
          ref: P,
          onKeydown: [
            w[0] || (w[0] = ue((O) => N(!0), ["enter"])),
            w[1] || (w[1] = ue((O) => N(!0), ["space"]))
          ],
          onClick: w[2] || (w[2] = (O) => N(!0))
        }, [
          R.$slots["clock-icon"] ? x(R.$slots, "clock-icon", { key: 0 }) : T("", !0),
          R.$slots["clock-icon"] ? T("", !0) : (p(), ve(i(zn), { key: 1 }))
        ], 42, Gr)), [
          [Vt, !i(_)("time")]
        ]),
        mt(kt, {
          name: i(S)(j.value),
          css: i(U)
        }, {
          default: ie(() => {
            var O;
            return [
              j.value || R.timePicker ? (p(), I("div", {
                key: 0,
                class: "dp__overlay",
                ref_key: "overlayRef",
                ref: Q,
                tabindex: "0"
              }, [
                oe("div", Zr, [
                  R.$slots["time-picker-overlay"] ? x(R.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: ne,
                    setMinutes: fe,
                    setSeconds: de
                  }) : T("", !0),
                  R.$slots["time-picker-overlay"] ? T("", !0) : (p(), I("div", qr, [
                    R.$slots["time-picker-header"] ? x(R.$slots, "time-picker-header", { key: 0 }) : T("", !0),
                    (p(!0), I(ye, null, Ce(i(F), (B, $) => Yt((p(), ve(Kr, Pe({ key: $ }, {
                      ...R.$props,
                      order: $,
                      hours: B.hours,
                      minutes: B.minutes,
                      seconds: B.seconds,
                      closeTimePickerBtn: c.value,
                      disabled: $ === 0 ? R.fixedStart : R.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: D,
                      "onUpdate:hours": (h) => ne(te(h, $, "hours")),
                      "onUpdate:minutes": (h) => fe(te(h, $, "minutes")),
                      "onUpdate:seconds": (h) => de(te(h, $, "seconds")),
                      onMounted: se,
                      onOverlayClosed: se,
                      onAmPmChange: w[3] || (w[3] = (h) => R.$emit("am-pm-change", h))
                    }), Ee({ _: 2 }, [
                      Ce(i(H), (h, r) => ({
                        name: h,
                        fn: ie((m) => [
                          x(R.$slots, h, Re(ze(m)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Vt, $ === 0 ? !0 : i(z)]
                    ])), 128))
                  ])),
                  R.timePicker ? T("", !0) : Yt((p(), I("button", {
                    key: 2,
                    type: "button",
                    ref_key: "closeTimePickerBtn",
                    ref: c,
                    class: he(i(Z)),
                    "aria-label": (O = i(L).ariaLabels) == null ? void 0 : O.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      w[4] || (w[4] = ue((B) => N(!1), ["enter"])),
                      w[5] || (w[5] = ue((B) => N(!1), ["space"]))
                    ],
                    onClick: w[6] || (w[6] = (B) => N(!1))
                  }, [
                    R.$slots["calendar-icon"] ? x(R.$slots, "calendar-icon", { key: 0 }) : T("", !0),
                    R.$slots["calendar-icon"] ? T("", !0) : (p(), ve(i(Wt), { key: 1 }))
                  ], 42, Xr)), [
                    [Vt, !i(_)("time")]
                  ])
                ])
              ], 512)) : T("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Qr = (e, n) => {
  const { isDisabled: a, matchDate: t, getWeekFromDate: o, defaults: f } = Le(n), g = W(null), _ = W(M()), L = (l) => {
    !l.current && n.hideOffsetDates || (g.value = l.value);
  }, S = () => {
    g.value = null;
  }, U = (l) => Array.isArray(e.value) && n.range && e.value[0] && g.value ? l ? Ve(g.value, e.value[0]) : Ie(g.value, e.value[0]) : !0, P = (l, d) => {
    const Y = () => e.value ? d ? e.value[0] || null : e.value[1] : null, A = e.value && Array.isArray(e.value) ? Y() : null;
    return ge(M(l.value), A);
  }, c = (l) => {
    const d = Array.isArray(e.value) ? e.value[0] : null;
    return l ? !Ie(g.value || null, d) : !0;
  }, D = (l, d = !0) => (n.range || n.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? n.hideOffsetDates && !l.current ? !1 : ge(M(l.value), e.value[d ? 0 : 1]) : n.range ? P(l, d) && c(d) || ge(l.value, Array.isArray(e.value) ? e.value[0] : null) && U(d) : !1, Q = (l, d, Y) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? l ? !1 : Y ? Ve(e.value[0], d.value) : Ie(e.value[0], d.value) : !1, z = (l) => !e.value || n.hideOffsetDates && !l.current ? !1 : n.range ? n.modelAuto && Array.isArray(e.value) ? ge(l.value, e.value[0] ? e.value[0] : _.value) : !1 : n.multiDates && Array.isArray(e.value) ? e.value.some((d) => ge(d, l.value)) : ge(l.value, e.value ? e.value : _.value), j = (l) => {
    if (n.autoRange || n.weekPicker) {
      if (g.value) {
        if (n.hideOffsetDates && !l.current)
          return !1;
        const d = dt(g.value, +n.autoRange), Y = o(M(g.value));
        return n.weekPicker ? ge(Y[1], M(l.value)) : ge(d, M(l.value));
      }
      return !1;
    }
    return !1;
  }, V = (l) => {
    if (n.autoRange || n.weekPicker) {
      if (g.value) {
        const d = dt(g.value, +n.autoRange);
        if (n.hideOffsetDates && !l.current)
          return !1;
        const Y = o(M(g.value));
        return n.weekPicker ? Ve(l.value, Y[0]) && Ie(l.value, Y[1]) : Ve(l.value, g.value) && Ie(l.value, d);
      }
      return !1;
    }
    return !1;
  }, F = (l) => {
    if (n.autoRange || n.weekPicker) {
      if (g.value) {
        if (n.hideOffsetDates && !l.current)
          return !1;
        const d = o(M(g.value));
        return n.weekPicker ? ge(d[0], l.value) : ge(g.value, l.value);
      }
      return !1;
    }
    return !1;
  }, N = (l) => Gn(e.value, g.value, l.value), Z = () => n.modelAuto && Array.isArray(n.internalModelValue) ? !!n.internalModelValue[0] : !1, H = () => n.modelAuto ? Qn(n.internalModelValue) : !0, te = (l) => {
    if (Array.isArray(e.value) && e.value.length || n.weekPicker)
      return !1;
    const d = n.range ? !D(l) && !D(l, !1) : !0;
    return !a(l.value) && !z(l) && !(!l.current && n.hideOffsetDates) && d;
  }, ne = (l) => n.range ? n.modelAuto ? Z() && z(l) : !1 : z(l), fe = (l) => n.highlight ? t(l.value, n.highlight) : !1, de = (l) => a(l.value) && n.highlightDisabledDays === !1, se = (l) => n.highlightWeekDays && n.highlightWeekDays.includes(l.value.getDay()), R = (l) => (n.range || n.weekPicker) && (!(f.value.multiCalendars > 0) || l.current) && H() && !(!l.current && n.hideOffsetDates) && !z(l) ? N(l) : !1, w = (l) => {
    const { isRangeStart: d, isRangeEnd: Y } = B(l), A = n.range ? d || Y : !1;
    return {
      dp__cell_offset: !l.current,
      dp__pointer: !n.disabled && !(!l.current && n.hideOffsetDates) && !a(l.value),
      dp__cell_disabled: a(l.value),
      dp__cell_highlight: !de(l) && (fe(l) || se(l)) && !ne(l) && !A,
      dp__cell_highlight_active: !de(l) && (fe(l) || se(l)) && ne(l),
      dp__today: !n.noToday && ge(l.value, _.value) && l.current
    };
  }, y = (l) => ({
    dp__active_date: ne(l),
    dp__date_hover: te(l)
  }), O = (l) => ({
    ...$(l),
    ...h(l),
    dp__range_between_week: R(l) && n.weekPicker
  }), B = (l) => {
    const d = f.value.multiCalendars > 0 ? l.current && D(l) && H() : D(l) && H(), Y = f.value.multiCalendars > 0 ? l.current && D(l, !1) && H() : D(l, !1) && H();
    return { isRangeStart: d, isRangeEnd: Y };
  }, $ = (l) => {
    const { isRangeStart: d, isRangeEnd: Y } = B(l);
    return {
      dp__range_start: d,
      dp__range_end: Y,
      dp__range_between: R(l) && !n.weekPicker,
      dp__date_hover_start: Q(te(l), l, !0),
      dp__date_hover_end: Q(te(l), l, !1)
    };
  }, h = (l) => ({
    ...$(l),
    dp__cell_auto_range: V(l),
    dp__cell_auto_range_start: F(l),
    dp__cell_auto_range_end: j(l)
  }), r = (l) => n.range ? n.autoRange ? h(l) : n.modelAuto ? { ...y(l), ...$(l) } : $(l) : n.weekPicker ? O(l) : y(l);
  return {
    setHoverDate: L,
    clearHoverDate: S,
    getDayClassData: (l) => ({
      ...w(l),
      ...r(l),
      [n.dayClass ? n.dayClass(l.value) : ""]: !0,
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
}, ol = /* @__PURE__ */ Ke({
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
    const t = e, o = E(() => {
      const { openOnTop: k, internalModelValue: K, ...Ae } = t;
      return Ae;
    }), { setMenuFocused: f, setShiftKey: g, control: _ } = Zn(), { getCalendarDays: L, defaults: S } = Le(t), U = gn(), P = W(null), c = _t({
      timePicker: !!(!t.enableTimePicker || t.timePicker || t.monthPicker),
      monthYearInput: !!t.timePicker,
      calendar: !1
    }), D = W([]), Q = W([]), z = W(null), j = W(null), V = W(0), F = W(!1), N = W(0);
    We(() => {
      var K;
      F.value = !0, !((K = t.presetRanges) != null && K.length) && !U["left-sidebar"] && !U["right-sidebar"] && (X(), window.addEventListener("resize", X));
      const k = $e(j);
      if (k && !t.textInput && !t.inline && (f(!0), de()), k) {
        const Ae = (Me) => {
          t.allowPreventDefault && Me.preventDefault(), Me.stopImmediatePropagation(), Me.stopPropagation();
        };
        k.addEventListener("pointerdown", Ae), k.addEventListener("mousedown", Ae);
      }
    }), yn(() => {
      window.removeEventListener("resize", X);
    });
    const { arrowRight: Z, arrowLeft: H, arrowDown: te, arrowUp: ne } = at(), fe = (k) => {
      k || k === 0 ? Q.value[k].triggerTransition(
        O.value(k),
        B.value(k)
      ) : Q.value.forEach(
        (K, Ae) => K.triggerTransition(O.value(Ae), B.value(Ae))
      );
    }, de = () => {
      const k = $e(j);
      k && k.focus({ preventScroll: !0 });
    }, se = () => {
      var k;
      (k = t.flow) != null && k.length && N.value !== -1 && (N.value += 1, a("flow-step", N.value), s());
    }, R = () => {
      N.value = -1;
    }, {
      calendars: w,
      modelValue: y,
      month: O,
      year: B,
      time: $,
      updateTime: h,
      updateMonthYear: r,
      selectDate: m,
      getWeekNum: l,
      monthYearSelect: d,
      handleScroll: Y,
      handleArrow: A,
      handleSwipe: v,
      getMarker: C,
      selectCurrentDate: u,
      presetDateRange: G
    } = lr(t, a, se, fe, N), { setHoverDate: re, clearHoverDate: be, getDayClassData: He } = Qr(y, t);
    nt(
      w,
      () => {
        t.openOnTop && setTimeout(() => {
          a("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const ae = ft(U, "calendar"), Fe = ft(U, "action"), Ge = ft(U, "timePicker"), Te = ft(U, "monthYear"), xe = E(() => t.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), lt = E(() => Ga(t.yearRange, t.reverseYears)), wt = E(() => Za(t.locale, t.monthNameFormat)), X = () => {
      const k = $e(P);
      k && (V.value = k.getBoundingClientRect().width);
    }, ce = E(() => (k) => L(O.value(k), B.value(k))), le = E(
      () => S.value.multiCalendars > 0 && t.range ? [...Array(S.value.multiCalendars).keys()] : [0]
    ), ot = E(
      () => (k) => k === 1
    ), st = E(() => t.monthPicker || t.timePicker || t.yearPicker), xt = E(
      () => ({
        dp__menu_inner: !0,
        dp__flex_display: S.value.multiCalendars > 0
      })
    ), zt = E(() => ({
      dp__instance_calendar: S.value.multiCalendars > 0
    })), Nt = E(() => ({
      dp__menu_disabled: t.disabled,
      dp__menu_readonly: t.readonly
    })), bt = E(
      () => (k) => Kt(ce, k)
    ), jt = E(
      () => ({
        dp__menu: !0,
        dp__menu_index: !t.inline,
        dp__relative: t.inline,
        [t.menuClassName]: !!t.menuClassName
      })
    ), Kt = (k, K) => k.value(K).map((Ae) => ({
      ...Ae,
      days: Ae.days.map((Me) => (Me.marker = C(Me), Me.classData = He(Me), Me))
    })), Gt = (k) => {
      k.stopPropagation(), k.stopImmediatePropagation();
    }, Rt = () => {
      t.escClose && a("close-picker");
    }, bn = (k, K = !1) => {
      m(k, K), t.spaceConfirm && a("select-date");
    }, Ot = (k) => {
      var K;
      (K = t.flow) != null && K.length && (c[k] = !0, Object.keys(c).filter((Ae) => !c[Ae]).length || s());
    }, vt = (k, K, Ae, Me, ...It) => {
      if (t.flow[N.value] === k) {
        const J = Me ? K.value[0] : K.value;
        J && J[Ae](...It);
      }
    }, s = () => {
      vt("month", D, "toggleMonthPicker", !0, !0), vt("year", D, "toggleYearPicker", !0, !0), vt("calendar", z, "toggleTimePicker", !1, !1, !0), vt("time", z, "toggleTimePicker", !1, !0, !0);
      const k = t.flow[N.value];
      (k === "hours" || k === "minutes" || k === "seconds") && vt(k, z, "toggleTimePicker", !1, !0, !0, k);
    }, b = (k) => {
      if (t.arrowNavigation) {
        if (k === "up")
          return ne();
        if (k === "down")
          return te();
        if (k === "left")
          return H();
        if (k === "right")
          return Z();
      } else
        k === "left" || k === "up" ? A("left", 0, k === "up") : A("right", 0, k === "down");
    }, q = (k) => {
      g(k.shiftKey), !t.disableMonthYearSelect && k.code === "Tab" && k.target.classList.contains("dp__menu") && _.value.shiftKeyInMenu && (k.preventDefault(), k.stopImmediatePropagation(), a("close-picker"));
    }, ee = (k) => {
      D.value[0] && D.value[0].handleMonthYearChange(k);
    }, De = () => {
      de(), a("time-picker-close");
    };
    return n({
      updateMonthYear: r
    }), (k, K) => {
      var Ae;
      return p(), ve(kt, {
        appear: "",
        name: (Ae = i(S).transitions) == null ? void 0 : Ae.menuAppear,
        css: !!k.transitions
      }, {
        default: ie(() => {
          var Me, It;
          return [
            oe("div", {
              id: k.uid ? `dp-menu-${k.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: j,
              role: "dialog",
              class: he(i(jt)),
              onMouseleave: K[14] || (K[14] = //@ts-ignore
              (...J) => i(be) && i(be)(...J)),
              onClick: Gt,
              onKeydown: [
                ue(Rt, ["esc"]),
                K[15] || (K[15] = ue(Je((J) => b("left"), ["prevent"]), ["left"])),
                K[16] || (K[16] = ue(Je((J) => b("up"), ["prevent"]), ["up"])),
                K[17] || (K[17] = ue(Je((J) => b("down"), ["prevent"]), ["down"])),
                K[18] || (K[18] = ue(Je((J) => b("right"), ["prevent"]), ["right"])),
                q
              ]
            }, [
              (k.disabled || k.readonly) && k.inline ? (p(), I("div", {
                key: 0,
                class: he(i(Nt))
              }, null, 2)) : T("", !0),
              !k.inline && !k.teleportCenter ? (p(), I("div", {
                key: 1,
                class: he(i(xe))
              }, null, 2)) : T("", !0),
              oe("div", {
                class: he({
                  dp__menu_content_wrapper: ((Me = k.presetRanges) == null ? void 0 : Me.length) || !!k.$slots["left-sidebar"] || !!k.$slots["right-sidebar"]
                })
              }, [
                k.$slots["left-sidebar"] ? (p(), I("div", tl, [
                  x(k.$slots, "left-sidebar", Re(ze({ handleMonthYearChange: ee })))
                ])) : T("", !0),
                (It = k.presetRanges) != null && It.length ? (p(), I("div", nl, [
                  (p(!0), I(ye, null, Ce(k.presetRanges, (J, yt) => (p(), I("div", {
                    key: yt,
                    style: et(J.style || {}),
                    class: "dp__preset_range",
                    onClick: (me) => i(G)(J.range, !!J.slot)
                  }, [
                    J.slot ? x(k.$slots, J.slot, {
                      key: 0,
                      presetDateRange: i(G),
                      label: J.label,
                      range: J.range
                    }) : (p(), I(ye, { key: 1 }, [
                      Ze(Oe(J.label), 1)
                    ], 64))
                  ], 12, al))), 128))
                ])) : T("", !0),
                oe("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: P,
                  role: "document"
                }, [
                  oe("div", {
                    class: he(i(xt))
                  }, [
                    (p(!0), I(ye, null, Ce(i(le), (J, yt) => (p(), I("div", {
                      key: J,
                      class: he(i(zt))
                    }, [
                      x(k.$slots, "top-sidebar"),
                      !k.disableMonthYearSelect && !k.timePicker ? (p(), ve(Fr, Pe({
                        key: 0,
                        ref_for: !0,
                        ref: (me) => {
                          me && (D.value[yt] = me);
                        },
                        months: i(wt),
                        years: i(lt),
                        month: i(O)(J),
                        year: i(B)(J),
                        instance: J,
                        "internal-model-value": e.internalModelValue
                      }, i(o), {
                        onMount: K[0] || (K[0] = (me) => Ot("monthYearInput")),
                        onResetFlow: R,
                        onUpdateMonthYear: (me) => i(r)(J, me),
                        onMonthYearSelect: i(d),
                        onOverlayClosed: de
                      }), Ee({ _: 2 }, [
                        Ce(i(Te), (me, ta) => ({
                          name: me,
                          fn: ie((Zt) => [
                            x(k.$slots, me, Re(ze(Zt)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : T("", !0),
                      mt(Pr, Pe({
                        ref_for: !0,
                        ref: (me) => {
                          me && (Q.value[yt] = me);
                        },
                        "specific-mode": i(st),
                        "get-week-num": i(l),
                        instance: J,
                        "mapped-dates": i(bt)(J),
                        month: i(O)(J),
                        year: i(B)(J)
                      }, i(o), {
                        onSelectDate: (me) => i(m)(me, !i(ot)(J)),
                        onHandleSpace: (me) => bn(me, !i(ot)(J)),
                        onSetHoverDate: K[1] || (K[1] = (me) => i(re)(me)),
                        onHandleScroll: (me) => i(Y)(me, J),
                        onHandleSwipe: (me) => i(v)(me, J),
                        onMount: K[2] || (K[2] = (me) => Ot("calendar")),
                        onResetFlow: R,
                        onTooltipOpen: K[3] || (K[3] = (me) => k.$emit("tooltip-open", me)),
                        onTooltipClose: K[4] || (K[4] = (me) => k.$emit("tooltip-close", me))
                      }), Ee({ _: 2 }, [
                        Ce(i(ae), (me, ta) => ({
                          name: me,
                          fn: ie((Zt) => [
                            x(k.$slots, me, Re(ze({ ...Zt })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  oe("div", null, [
                    k.$slots["time-picker"] ? x(k.$slots, "time-picker", Re(Pe({ key: 0 }, { time: i($), updateTime: i(h) }))) : (p(), I(ye, { key: 1 }, [
                      k.enableTimePicker && !k.monthPicker && !k.weekPicker ? (p(), ve(Jr, Pe({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: z,
                        hours: i($).hours,
                        minutes: i($).minutes,
                        seconds: i($).seconds,
                        "internal-model-value": e.internalModelValue
                      }, i(o), {
                        onMount: K[5] || (K[5] = (J) => Ot("timePicker")),
                        "onUpdate:hours": K[6] || (K[6] = (J) => i(h)(J)),
                        "onUpdate:minutes": K[7] || (K[7] = (J) => i(h)(J, !1)),
                        "onUpdate:seconds": K[8] || (K[8] = (J) => i(h)(J, !1, !0)),
                        onResetFlow: R,
                        onOverlayClosed: De,
                        onOverlayOpened: K[9] || (K[9] = (J) => k.$emit("time-picker-open", J)),
                        onAmPmChange: K[10] || (K[10] = (J) => k.$emit("am-pm-change", J))
                      }), Ee({ _: 2 }, [
                        Ce(i(Ge), (J, yt) => ({
                          name: J,
                          fn: ie((me) => [
                            x(k.$slots, J, Re(ze(me)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : T("", !0)
                    ], 64))
                  ])
                ], 512),
                k.$slots["right-sidebar"] ? (p(), I("div", rl, [
                  x(k.$slots, "right-sidebar", Re(ze({ handleMonthYearChange: ee })))
                ])) : T("", !0),
                k.$slots["action-extra"] ? (p(), I("div", ll, [
                  k.$slots["action-extra"] ? x(k.$slots, "action-extra", {
                    key: 0,
                    selectCurrentDate: i(u)
                  }) : T("", !0)
                ])) : T("", !0)
              ], 2),
              !k.autoApply || k.keepActionRow ? (p(), ve(kr, Pe({
                key: 2,
                "menu-mount": F.value,
                "calendar-width": V.value,
                "internal-model-value": e.internalModelValue
              }, i(o), {
                onClosePicker: K[11] || (K[11] = (J) => k.$emit("close-picker")),
                onSelectDate: K[12] || (K[12] = (J) => k.$emit("select-date")),
                onInvalidSelect: K[13] || (K[13] = (J) => k.$emit("invalid-select")),
                onSelectNow: i(u)
              }), Ee({ _: 2 }, [
                Ce(i(Fe), (J, yt) => ({
                  name: J,
                  fn: ie((me) => [
                    x(k.$slots, J, Re(ze({ ...me })))
                  ])
                }))
              ]), 1040, ["menu-mount", "calendar-width", "internal-model-value", "onSelectNow"])) : T("", !0)
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
  const f = nt(
    () => i(e),
    (_) => {
      o(), _ && (_.addEventListener(n, a, t), o = () => {
        _.removeEventListener(n, a, t), o = on;
      });
    },
    { immediate: !0, flush: "post" }
  ), g = () => {
    f(), o();
  };
  return il(g), g;
}, dl = (e, n, a, t = {}) => {
  const { window: o = sl, event: f = "pointerdown" } = t;
  return o ? ul(o, f, (_) => {
    const L = $e(e), S = $e(n);
    !L || !S || L === _.target || _.composedPath().includes(L) || _.composedPath().includes(S) || a(_);
  }, { passive: !0 }) : void 0;
}, cl = /* @__PURE__ */ Ke({
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
    const t = e, o = gn(), f = W(!1), g = St(t, "modelValue"), _ = St(t, "timezone"), L = W(null), S = W(null), U = W(!1), P = W(null), { setMenuFocused: c, setShiftKey: D } = Zn(), { clearArrowNav: Q } = at(), { validateDate: z, isValidTime: j, defaults: V } = Le(t);
    We(() => {
      w(t.modelValue), t.inline || (de(P.value).addEventListener("scroll", m), window.addEventListener("resize", l)), t.inline && (f.value = !0);
    }), yn(() => {
      if (!t.inline) {
        const X = de(P.value);
        X && X.removeEventListener("scroll", m), window.removeEventListener("resize", l);
      }
    });
    const F = ft(o, "all", t.presetRanges), N = ft(o, "input");
    nt(
      [g, _],
      () => {
        w(g.value);
      },
      { deep: !0 }
    );
    const { openOnTop: Z, menuStyle: H, resetPosition: te, setMenuPosition: ne, setInitialPosition: fe, getScrollableParent: de } = ir(L, S, a, t), {
      inputValue: se,
      internalModelValue: R,
      parseExternalModelValue: w,
      emitModelValue: y,
      formatInputValue: O,
      checkBeforeEmit: B
    } = or(a, t, U), $ = E(
      () => ({
        dp__main: !0,
        dp__theme_dark: t.dark,
        dp__theme_light: !t.dark,
        dp__flex_display: t.inline,
        dp__flex_display_with_input: t.inlineWithInput
      })
    ), h = E(() => t.dark ? "dp__theme_dark" : "dp__theme_light"), r = E(() => t.teleport ? {
      to: typeof t.teleport == "boolean" ? "body" : t.teleport,
      disabled: t.inline
    } : { class: "dp__outer_menu_wrap" }), m = () => {
      f.value && (t.closeOnScroll ? be() : ne());
    }, l = () => {
      f.value && ne();
    }, d = async () => {
      var X, ce, le;
      !t.disabled && !t.readonly && (te(), await Qe(), f.value = !0, await Qe(), fe(), await Qe(), ne(), delete H.value.opacity, (X = V.value.transitions) != null && X.menuAppear || (le = (ce = L.value) == null ? void 0 : ce.$el) == null || le.classList.add("dp__menu_transitioned"), f.value && a("open"), f.value || re(), w(t.modelValue));
    }, Y = () => {
      se.value = "", re(), a("update:model-value", null), a("cleared"), be();
    }, A = () => {
      const X = R.value;
      return !X || !Array.isArray(X) && z(X) ? !0 : Array.isArray(X) ? X.length === 2 && z(X[0]) && z(X[1]) ? !0 : z(X[0]) : !1;
    }, v = () => {
      B() && A() ? (y(), be()) : a("invalid-select", R.value);
    }, C = (X) => {
      u(), y(), t.closeOnAutoApply && !X && be();
    }, u = () => {
      S.value && t.textInput && S.value.setParsedDate(R.value);
    }, G = (X = !1) => {
      t.autoApply && j(R.value) && A() && (t.range && Array.isArray(R.value) ? (t.partialRange || R.value.length === 2) && C(X) : C(X));
    }, re = () => {
      t.textInput || (R.value = null);
    }, be = () => {
      t.inline || (f.value && (f.value = !1, c(!1), D(!1), Q(), a("closed"), fe(), se.value && w(g.value)), re());
    }, He = (X, ce) => {
      if (!X) {
        R.value = null;
        return;
      }
      R.value = X, ce && (v(), a("text-submit"));
    }, ae = () => {
      t.autoApply && j(R.value) && y(), u();
    }, Fe = () => f.value ? be() : d(), Ge = (X) => {
      R.value = X;
    }, Te = () => {
      t.textInput && (U.value = !0, O()), a("focus");
    }, xe = () => {
      t.textInput && (U.value = !1, w(t.modelValue)), a("blur");
    }, lt = (X) => {
      L.value && L.value.updateMonthYear(0, {
        month: Bn(X.month),
        year: Bn(X.year)
      });
    }, wt = (X) => {
      w(X || t.modelValue);
    };
    return dl(
      L,
      S,
      t.onClickOutside ? () => t.onClickOutside(A) : be
    ), n({
      closeMenu: be,
      selectDate: v,
      clearValue: Y,
      openMenu: d,
      onScroll: m,
      formatInputValue: O,
      // exposed for testing purposes
      updateInternalModelValue: Ge,
      // modify internal modelValue
      setMonthYear: lt,
      parseModel: wt
    }), (X, ce) => (p(), I("div", {
      class: he(i($)),
      ref_key: "pickerWrapperRef",
      ref: P
    }, [
      mt(yr, Pe({
        ref_key: "inputRef",
        ref: S,
        "is-menu-open": f.value,
        "input-value": i(se),
        "onUpdate:inputValue": ce[0] || (ce[0] = (le) => ut(se) ? se.value = le : null)
      }, X.$props, {
        onClear: Y,
        onOpen: d,
        onSetInputDate: He,
        onSetEmptyDate: i(y),
        onSelectDate: v,
        onToggle: Fe,
        onClose: be,
        onFocus: Te,
        onBlur: xe,
        onRealBlur: ce[1] || (ce[1] = (le) => U.value = !1)
      }), Ee({ _: 2 }, [
        Ce(i(N), (le, ot) => ({
          name: le,
          fn: ie((st) => [
            x(X.$slots, le, Re(ze(st)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      f.value ? (p(), ve(Fn(X.teleport ? la : "div"), Re(Pe({ key: 0 }, i(r))), {
        default: ie(() => [
          f.value ? (p(), ve(ol, Pe({
            key: 0,
            ref_key: "dpMenuRef",
            ref: L,
            class: i(h),
            style: X.inline ? void 0 : i(H),
            "open-on-top": i(Z)
          }, X.$props, {
            "internal-model-value": i(R),
            "onUpdate:internalModelValue": ce[2] || (ce[2] = (le) => ut(R) ? R.value = le : null),
            onClosePicker: be,
            onSelectDate: v,
            onAutoApply: G,
            onTimeUpdate: ae,
            onFlowStep: ce[3] || (ce[3] = (le) => X.$emit("flow-step", le)),
            onUpdateMonthYear: ce[4] || (ce[4] = (le) => X.$emit("update-month-year", le)),
            onInvalidSelect: ce[5] || (ce[5] = (le) => X.$emit("invalid-select", i(R))),
            onInvalidFixedRange: ce[6] || (ce[6] = (le) => X.$emit("invalid-fixed-range", le)),
            onRecalculatePosition: i(ne),
            onTooltipOpen: ce[7] || (ce[7] = (le) => X.$emit("tooltip-open", le)),
            onTooltipClose: ce[8] || (ce[8] = (le) => X.$emit("tooltip-close", le)),
            onTimePickerOpen: ce[9] || (ce[9] = (le) => X.$emit("time-picker-open", le)),
            onTimePickerClose: ce[10] || (ce[10] = (le) => X.$emit("time-picker-close", le)),
            onAmPmChange: ce[11] || (ce[11] = (le) => X.$emit("am-pm-change", le))
          }), Ee({ _: 2 }, [
            Ce(i(F), (le, ot) => ({
              name: le,
              fn: ie((st) => [
                x(X.$slots, le, Re(ze({ ...st })))
              ])
            }))
          ]), 1040, ["class", "style", "open-on-top", "internal-model-value", "onRecalculatePosition"])) : T("", !0)
        ]),
        _: 3
      }, 16)) : T("", !0)
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
