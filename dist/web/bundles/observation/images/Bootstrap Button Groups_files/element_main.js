"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

(function () {
    var aa = '" style="background-image:url(',
        ba = "-disabled",
        ca = "-document.getElementById('",
        da = "/translate_a/t",
        ea = '</button></div></div></td></tr><tr id="',
        fa = '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="',
        ga = '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="',
        ha = "Component already rendered",
        f = "DIV",
        ia = "Edge",
        ja = "Google Website Translator",
        la = "IFRAME",
        ma = "INPUT",
        na = "OPTION",
        oa = "Opera",
        pa = "POST",
        qa = "SCRIPT",
        ra = "SPAN",
        sa = "TEXTAREA",
        ta = "TITLE",
        ua = "Unable to set parent component",
        va = "[goog.net.IframeIo] Unable to send, already active.",
        wa = "about:blank",
        xa = "absolute",
        ya = "accumulate",
        za = "action",
        Aa = "activedescendant",
        Ba = "activity-form-container",
        Ca = "alt-edited",
        Da = "array",
        Ea = "auto",
        Fa = "backgroundImage",
        Ga = "backgroundPosition",
        Ha = "blur",
        Ia = "border-box",
        Ja = "button",
        Ka = "cancelled",
        La = "change",
        Ma = "character",
        Na = "checked",
        Oa = "chg_tgt_lang",
        Pa = "click",
        Qa = "clk_no_ap_site",
        Ra = "complete",
        Sa = "container",
        Ta = "contextmenu",
        Ua = "dblclick",
        Va = "direction",
        Wa = "finish",
        Xa = "finishSourceLang",
        Ya = "finishTargetLang",
        Za = "focus",
        $a = "focusin",
        ab = "focusout",
        n = "function",
        bb = "goog-float-bottom",
        cb = "goog-float-top",
        db = "goog-inline-block ",
        eb = "goog-menuheader",
        fb = "goog-menuseparator",
        gb = "goog-option",
        hb = "goog-option-selected",
        ib = "goog-te-menu-value",
        jb = "goog-te-menu2-item-selected",
        kb = "goog-te-spinner-animation-show",
        lb = "goog-te-spinner-pos-show",
        mb = "hidden",
        nb = "hide",
        ob = "horizontal",
        pb = "https://translate.google.com",
        qb = "https://www.google.com/images/cleardot.gif",
        rb = "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png",
        sb = "javascript:void(0)",
        tb = "keydown",
        ub = "keypress",
        vb = "load",
        wb = "mousedown",
        xb = "mousemove",
        yb = "mouseout",
        zb = "mouseover",
        Ab = "mouseup",
        Bb = "move_offscreen",
        p = "none",
        Cb = "number",
        Db = "object",
        Eb = "opacity 1s linear",
        Fb = "paddingLeft",
        Gb = "paddingRight",
        Hb = "position",
        Ib = "progressSection",
        Jb = "promptSourceLang",
        Kb = "promptTargetLang",
        Lb = "ready",
        Mb = "readystatechange",
        Nb = "rtl",
        Ob = "selected",
        Pb = "skiptranslate",
        Qb = "status-message",
        Rb = "string",
        Sb = "submitted",
        Tb = "targetLanguage",
        Ub = "textarea-placeholder-input",
        Vb = "toggle_display",
        Wb = "trans-target-empty",
        Xb = "trans-target-highlight",
        Yb = "transition",
        Zb = "translate",
        $b = "vertical",
        ac = "visible",
        bc = "withCredentials";

    function cc() {
        return function () {
        };
    }

    function dc(a) {
        return function (b) {
            this[a] = b;
        };
    }

    function r(a) {
        return function () {
            return this[a];
        };
    }

    function u(a) {
        return function () {
            return a;
        };
    }

    var w,
        ec = ec || {},
        x = this;

    function y(a) {
        return void 0 !== a;
    }

    function z() {
    }

    function fc(a) {
        a.ve = void 0;
        a.ka = function () {
            return a.ve ? a.ve : a.ve = new a();
        };
    }

    function A(a) {
        var b = typeof a === "undefined" ? "undefined" : _typeof(a);
        if (b == Db) {
            if (a) {
                if (a instanceof Array) return Da;
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return Db;
                if ("[object Array]" == c || _typeof(a.length) == Cb && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return Da;
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return n;
            } else return "null";
        } else if (b == n && "undefined" == typeof a.call) return Db;
        return b;
    }

    function B(a) {
        return A(a) == Da;
    }

    function gc(a) {
        var b = A(a);
        return b == Da || b == Db && _typeof(a.length) == Cb;
    }

    function C(a) {
        return (typeof a === "undefined" ? "undefined" : _typeof(a)) == Rb;
    }

    function hc(a) {
        return (typeof a === "undefined" ? "undefined" : _typeof(a)) == Cb;
    }

    function ic(a) {
        return A(a) == n;
    }

    function jc(a) {
        var b = typeof a === "undefined" ? "undefined" : _typeof(a);
        return b == Db && null != a || b == n;
    }

    function kc(a) {
        return a[lc] || (a[lc] = ++mc);
    }

    var lc = "closure_uid_" + (1E9 * Math.random() >>> 0),
        mc = 0;

    function nc(a, b, c) {
        return a.call.apply(a.bind, arguments);
    }

    function oc(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c);
            };
        }
        return function () {
            return a.apply(b, arguments);
        };
    }

    function D(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? D = nc : D = oc;
        return D.apply(null, arguments);
    }

    function pc(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b);
        };
    }

    var qc = Date.now || function () {
            return +new Date();
        };

    function rc(a, b) {
        a = a.split(".");
        var c = x;
        a[0] in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) {
            !a.length && y(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {};
        }
    }

    function F(a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.m = b.prototype;
        a.prototype = new c();
        a.prototype.constructor = a;
        a.Xj = function (a, c, g) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) {
                d[e - 2] = arguments[e];
            }
            return b.prototype[c].apply(a, d);
        };
    };
    function sc(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, sc); else {
            var b = Error().stack;
            b && (this.stack = b);
        }
        a && (this.message = String(a));
    }

    F(sc, Error);
    sc.prototype.name = "CustomError";
    var tc,
        uc = {xj: 1, mj: 2, Nj: 3, pj: 4, zj: 5, yj: 6, Fj: 7, rj: 8, sj: 9, uj: 10, tj: 11, Cj: 12};

    function vc(a) {
        return a.replace(/\xa0|[ \t]+/g, " ");
    }

    function wc(a) {
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
    }

    var xc = String.prototype.trim ? function (a) {
        return a.trim();
    } : function (a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
    };

    function yc(a) {
        return a.replace(/^[\s\xa0]+/, "");
    }

    function zc(a) {
        return a.replace(/[\s\xa0]+$/, "");
    }

    function Ac(a) {
        return encodeURIComponent(String(a));
    }

    function Bc(a) {
        return decodeURIComponent(a.replace(/\+/g, " "));
    }

    function Cc(a) {
        if (!Dc.test(a)) return a;
        -1 != a.indexOf("&") && (a = a.replace(Ec, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(Fc, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(Gc, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(Hc, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(Ic, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(Jc, "&#0;"));
        return a;
    }

    var Ec = /&/g,
        Fc = /</g,
        Gc = />/g,
        Hc = /"/g,
        Ic = /'/g,
        Jc = /\x00/g,
        Dc = /[\x00&<>"']/;

    function Kc(a) {
        return -1 != a.indexOf("&") ? "document" in x ? Lc(a) : Mc(a) : a;
    }

    function Lc(a) {
        var b = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"'};
        var c = x.document.createElement("div");
        return a.replace(Nc, function (a, e) {
            var d = b[a];
            if (d) return d;
            "#" == e.charAt(0) && (e = Number("0" + e.substr(1)), isNaN(e) || (d = String.fromCharCode(e)));
            d || (c.innerHTML = a + " ", d = c.firstChild.nodeValue.slice(0, -1));
            return b[a] = d;
        });
    }

    function Mc(a) {
        return a.replace(/&([^;]+);/g, function (a, c) {
            switch (c) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? a : String.fromCharCode(c);
            }
        });
    }

    var Nc = /&([^;\s<&]+);?/g;

    function Oc(a, b) {
        var c = 0;
        a = xc(String(a)).split(".");
        b = xc(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var g = a[e] || "",
                h = b[e] || "";
            do {
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                if (0 == g[0].length && 0 == h[0].length) break;
                c = Pc(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Pc(0 == g[2].length, 0 == h[2].length) || Pc(g[2], h[2]);
                g = g[3];
                h = h[3];
            } while (0 == c);
        }
        return c;
    }

    function Pc(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    }

    function Qc(a) {
        return String(a).replace(/\-([a-z])/g, function (a, c) {
            return c.toUpperCase();
        });
    }

    function Rc(a) {
        var b = C(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, e) {
            return b + e.toUpperCase();
        });
    };
    function Sc(a) {
        return a[a.length - 1];
    }

    var Tc = Array.prototype.indexOf ? function (a, b, c) {
            return Array.prototype.indexOf.call(a, b, c);
        } : function (a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (C(a)) return C(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++) {
                if (c in a && a[c] === b) return c;
            }
            return -1;
        },
        Uc = Array.prototype.forEach ? function (a, b, c) {
            Array.prototype.forEach.call(a, b, c);
        } : function (a, b, c) {
            for (var d = a.length, e = C(a) ? a.split("") : a, g = 0; g < d; g++) {
                g in e && b.call(c, e[g], g, a);
            }
        },
        Vc = Array.prototype.filter ? function (a, b, c) {
            return Array.prototype.filter.call(a, b, c);
        } : function (a, b, c) {
            for (var d = a.length, e = [], g = 0, h = C(a) ? a.split("") : a, k = 0; k < d; k++) {
                if (k in h) {
                    var l = h[k];
                    b.call(c, l, k, a) && (e[g++] = l);
                }
            }
            return e;
        },
        Wc = Array.prototype.map ? function (a, b, c) {
            return Array.prototype.map.call(a, b, c);
        } : function (a, b, c) {
            for (var d = a.length, e = Array(d), g = C(a) ? a.split("") : a, h = 0; h < d; h++) {
                h in g && (e[h] = b.call(c, g[h], h, a));
            }
            return e;
        },
        Xc = Array.prototype.some ? function (a, b, c) {
            return Array.prototype.some.call(a, b, c);
        } : function (a, b, c) {
            for (var d = a.length, e = C(a) ? a.split("") : a, g = 0; g < d; g++) {
                if (g in e && b.call(c, e[g], g, a)) return !0;
            }
            return !1;
        },
        Yc = Array.prototype.every ? function (a, b, c) {
            return Array.prototype.every.call(a, b, c);
        } : function (a, b, c) {
            for (var d = a.length, e = C(a) ? a.split("") : a, g = 0; g < d; g++) {
                if (g in e && !b.call(c, e[g], g, a)) return !1;
            }
            return !0;
        };

    function Zc(a, b) {
        a: {
            for (var c = a.length, d = C(a) ? a.split("") : a, e = 0; e < c; e++) {
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a;
                }
            }
            b = -1;
        }
        return 0 > b ? null : C(a) ? a.charAt(b) : a[b];
    }

    function $c(a, b) {
        return 0 <= Tc(a, b);
    }

    function ad(a, b) {
        b = Tc(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c;
    }

    function bd(a) {
        return Array.prototype.concat.apply([], arguments);
    }

    function cd(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) {
                c[d] = a[d];
            }
            return c;
        }
        return [];
    }

    function dd(a, b, c, d) {
        Array.prototype.splice.apply(a, ed(arguments, 1));
    }

    function ed(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
    };
    function fd(a) {
        if (a.classList) return a.classList;
        a = a.className;
        return C(a) && a.match(/\S+/g) || [];
    }

    function gd(a, b) {
        return a.classList ? a.classList.contains(b) : $c(fd(a), b);
    }

    function H(a, b) {
        a.classList ? a.classList.add(b) : gd(a, b) || (a.className += 0 < a.className.length ? " " + b : b);
    }

    function hd(a, b) {
        if (a.classList) Uc(b, function (b) {
            H(a, b);
        }); else {
            var c = {};
            Uc(fd(a), function (a) {
                c[a] = !0;
            });
            Uc(b, function (a) {
                c[a] = !0;
            });
            a.className = "";
            for (var d in c) {
                a.className += 0 < a.className.length ? " " + d : d;
            }
        }
    }

    function id(a, b) {
        a.classList ? a.classList.remove(b) : gd(a, b) && (a.className = Vc(fd(a), function (a) {
                return a != b;
            }).join(" "));
    }

    function jd(a, b) {
        a.classList ? Uc(b, function (b) {
            id(a, b);
        }) : a.className = Vc(fd(a), function (a) {
            return !$c(b, a);
        }).join(" ");
    };
    var kd;
    a: {
        var ld = x.navigator;
        if (ld) {
            var md = ld.userAgent;
            if (md) {
                kd = md;
                break a;
            }
        }
        kd = "";
    }
    function I(a) {
        return -1 != kd.indexOf(a);
    }

    function nd(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) {
            c.push([d[1], d[2], d[3] || void 0]);
        }
        return c;
    };
    function od(a, b, c) {
        for (var d in a) {
            b.call(c, a[d], d, a);
        }
    }

    function pd(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) {
            b[c++] = a[d];
        }
        return b;
    }

    function qd(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) {
            b[c++] = d;
        }
        return b;
    }

    function rd(a, b) {
        return null !== a && b in a;
    }

    function sd() {
        var a = td,
            b;
        for (b in a) {
            return !1;
        }
        return !0;
    }

    function ud(a, b, c) {
        if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
        a[b] = c;
    }

    function vd(a) {
        var b = {},
            c;
        for (c in a) {
            b[c] = a[c];
        }
        return b;
    }

    var wd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function xd(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) {
                a[c] = d[c];
            }
            for (var g = 0; g < wd.length; g++) {
                c = wd[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
            }
        }
    }

    function yd(a) {
        var b = arguments.length;
        if (1 == b && B(arguments[0])) return yd.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++) {
            c[arguments[d]] = !0;
        }
        return c;
    };
    function zd() {
        return I("Trident") || I("MSIE");
    }

    function Ad() {
        return (I("Chrome") || I("CriOS")) && !I(ia);
    }

    function Bd() {
        function a(a) {
            a = Zc(a, d);
            return c[a] || "";
        }

        var b = kd;
        if (zd()) return Cd(b);
        var b = nd(b),
            c = {};
        Uc(b, function (a) {
            c[a[0]] = a[1];
        });
        var d = pc(rd, c);
        return I(oa) ? a(["Version", oa]) : I(ia) ? a([ia]) : Ad() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || "";
    }

    function Cd(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1]) return b[1];
        var b = "",
            c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1]) if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1]) {
            if (a && a[1]) switch (a[1]) {
                case "4.0":
                    b = "8.0";
                    break;
                case "5.0":
                    b = "9.0";
                    break;
                case "6.0":
                    b = "10.0";
                    break;
                case "7.0":
                    b = "11.0";
            } else b = "7.0";
        } else b = c[1];
        return b;
    };
    function Dd() {
        return I("iPhone") && !I("iPod") && !I("iPad");
    };
    function Ed(a) {
        Ed[" "](a);
        return a;
    }

    Ed[" "] = z;
    function Fd(a, b) {
        try {
            return Ed(a[b]), !0;
        } catch (c) {
        }
        return !1;
    }

    function Gd(a, b) {
        var c = Hd;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
    };
    var Id = I(oa),
        J = zd(),
        Jd = I(ia),
        Kd = Jd || J,
        K = I("Gecko") && !(-1 != kd.toLowerCase().indexOf("webkit") && !I(ia)) && !(I("Trident") || I("MSIE")) && !I(ia),
        L = -1 != kd.toLowerCase().indexOf("webkit") && !I(ia),
        Ld = L && I("Mobile"),
        Md = I("Macintosh");

    function Nd() {
        var a = x.document;
        return a ? a.documentMode : void 0;
    }

    var Od;
    a: {
        var Pd = "",
            Qd = function () {
                var a = kd;
                if (K) return (/rv\:([^\);]+)(\)|;)/.exec(a)
                );
                if (Jd) return (/Edge\/([\d\.]+)/.exec(a)
                );
                if (J) return (/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)
                );
                if (L) return (/WebKit\/(\S+)/.exec(a)
                );
                if (Id) return (/(?:Version)[ \/]?(\S+)/.exec(a)
                );
            }();
        Qd && (Pd = Qd ? Qd[1] : "");
        if (J) {
            var Rd = Nd();
            if (null != Rd && Rd > parseFloat(Pd)) {
                Od = String(Rd);
                break a;
            }
        }
        Od = Pd;
    }
    var Sd = Od,
        Hd = {};

    function M(a) {
        return Gd(a, function () {
            return 0 <= Oc(Sd, a);
        });
    }

    function Td(a) {
        return Number(Ud) >= a;
    }

    var Vd;
    var Wd = x.document;
    Vd = Wd && J ? Nd() || ("CSS1Compat" == Wd.compatMode ? parseInt(Sd, 10) : 5) : void 0;
    var Ud = Vd;
    var Xd = !J || Td(9),
        Yd = !K && !J || J && Td(9) || K && M("1.9.1"),
        Zd = J && !M("9"),
        $d = J || Id || L,
        ae = J && !Td(9);
    var be = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };

    function ce() {
        this.a = de;
    }

    ce.prototype.nb = !0;
    ce.prototype.cb = u("");
    ce.prototype.toString = u("Const{}");
    function ee(a) {
        return a instanceof ce && a.constructor === ce && a.a === de ? "" : "type_error:Const";
    }

    var de = {};

    function fe() {
        this.a = "";
        this.b = ge;
    }

    fe.prototype.nb = !0;
    var ge = {};
    fe.prototype.cb = r("a");
    function he(a) {
        if (a instanceof fe && a.constructor === fe && a.b === ge) return a.a;
        A(a);
        return "type_error:SafeStyle";
    }

    function ie(a) {
        var b = new fe();
        b.a = a;
        return b;
    }

    var je = ie(""),
        ke = /^([-,."'%_!# a-zA-Z0-9]+|(?:rgb|hsl)a?\([0-9.%, ]+\))$/;

    function le() {
        this.a = "";
        this.b = me;
    }

    le.prototype.nb = !0;
    var me = {};
    le.prototype.cb = r("a");
    function ne(a) {
        if (a instanceof le && a.constructor === le && a.b === me) return a.a;
        A(a);
        return "type_error:SafeStyleSheet";
    }

    function oe(a) {
        var b = new le();
        b.a = a;
        return b;
    }

    oe("");
    var pe = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;

    function qe() {
        this.a = "";
        this.b = re;
    }

    qe.prototype.nb = !0;
    qe.prototype.cb = r("a");
    qe.prototype.te = !0;
    qe.prototype.Ob = u(1);
    function se(a) {
        if (a instanceof qe && a.constructor === qe && a.b === re) return a.a;
        A(a);
        return "type_error:TrustedResourceUrl";
    }

    var re = {};

    function te() {
        this.a = "";
        this.b = ue;
    }

    te.prototype.nb = !0;
    te.prototype.cb = r("a");
    te.prototype.te = !0;
    te.prototype.Ob = u(1);
    function ve(a) {
        if (a instanceof te && a.constructor === te && a.b === ue) return a.a;
        A(a);
        return "type_error:SafeUrl";
    }

    var we = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
        ue = {};

    function xe(a) {
        var b = new te();
        b.a = a;
        return b;
    }

    xe(wa);
    function ye() {
        this.a = "";
        this.c = ze;
        this.b = null;
    }

    ye.prototype.te = !0;
    ye.prototype.Ob = r("b");
    ye.prototype.nb = !0;
    ye.prototype.cb = r("a");
    function Ae(a) {
        if (a instanceof ye && a.constructor === ye && a.c === ze) return a.a;
        A(a);
        return "type_error:SafeHtml";
    }

    var Be = /^[a-zA-Z0-9-]+$/,
        Ce = {action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0},
        De = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };

    function Ee(a, b) {
        var c = String(a);
        if (!Be.test(c)) throw Error("Invalid tag name <" + c + ">.");
        if (c.toUpperCase() in De) throw Error("Tag name <" + c + "> is not allowed for SafeHtml.");
        a = String(a);
        var c = null,
            d = "<" + a,
            e = "";
        if (b) for (E in b) {
            if (!Be.test(E)) throw Error('Invalid attribute name "' + E + '".');
            var g = b[E];
            if (null != g) {
                var h = a;
                var k = E;
                var l = g;
                if (l instanceof ce) l = ee(l); else if ("style" == k.toLowerCase()) {
                    g = void 0;
                    h = l;
                    if (!jc(h)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + (typeof h === "undefined" ? "undefined" : _typeof(h)) + " given: " + h);
                    if (!(h instanceof fe)) {
                        l = "";
                        for (g in h) {
                            if (!/^[-_a-zA-Z0-9]+$/.test(g)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + g);
                            var m = h[g];
                            if (null != m) {
                                if (m instanceof ce) m = ee(m); else if (ke.test(m)) {
                                    for (var q = !0, t = !0, v = 0; v < m.length; v++) {
                                        var G = m.charAt(v);
                                        "'" == G && t ? q = !q : '"' == G && q && (t = !t);
                                    }
                                    q && t || (m = "zClosurez");
                                } else m = "zClosurez";
                                l += g + ":" + m + ";";
                            }
                        }
                        h = l ? ie(l) : je;
                    }
                    l = he(h);
                } else {
                    if (/^on/i.test(k)) throw Error('Attribute "' + k + '" requires goog.string.Const value, "' + l + '" given.');
                    if (k.toLowerCase() in Ce) if (l instanceof qe) l = se(l); else if (l instanceof te) l = ve(l); else if (C(l)) g = l, g instanceof te || (g = g.nb ? g.cb() : String(g), we.test(g) || (g = "about:invalid#zClosurez"), g = xe(g)), l = g.cb(); else throw Error('Attribute "' + k + '" on tag "' + h + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + l + '" given.');
                }
                l.nb && (l = l.cb());
                k = k + '="' + Cc(String(l)) + '"';
                e += " " + k;
            }
        }
        var E = d + e;
        d = void 0;
        null != d ? B(d) || (d = [d]) : d = [];
        !0 === be[a.toLowerCase()] ? E += ">" : (c = Fe(d), E += ">" + Ae(c) + "</" + a + ">", c = c.Ob());
        (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null);
        return Ge(E, c);
    }

    function Fe(a) {
        function b(a) {
            if (B(a)) Uc(a, b); else {
                if (a instanceof ye) var e = a; else e = null, a.te && (e = a.Ob()), a = Cc(a.nb ? a.cb() : String(a)), e = Ge(a, e);
                d += Ae(e);
                e = e.Ob();
                0 == c ? c = e : 0 != e && c != e && (c = null);
            }
        }

        var c = 0,
            d = "";
        Uc(arguments, b);
        return Ge(d, c);
    }

    var ze = {};

    function Ge(a, b) {
        var c = new ye();
        c.a = a;
        c.b = b;
        return c;
    }

    Ge("<!DOCTYPE html>", 0);
    Ge("", 0);
    var He = Ge("<br>", 0);

    function N(a, b) {
        this.x = y(a) ? a : 0;
        this.y = y(b) ? b : 0;
    }

    function Ie(a) {
        return new N(a.x, a.y);
    }

    function Je(a, b) {
        return new N(a.x - b.x, a.y - b.y);
    }

    N.prototype.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;
    };
    N.prototype.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
    };
    N.prototype.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    };
    N.prototype.translate = function (a, b) {
        a instanceof N ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), hc(b) && (this.y += b));
        return this;
    };
    function Ke(a, b) {
        this.width = a;
        this.height = b;
    }

    Ke.prototype.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this;
    };
    Ke.prototype.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this;
    };
    Ke.prototype.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this;
    };
    function Le(a) {
        return a ? new Me(O(a)) : tc || (tc = new Me());
    }

    function Ne(a, b) {
        return C(b) ? a.getElementById(b) : b;
    }

    function Oe(a, b) {
        return (b || document).getElementsByTagName(String(a));
    }

    function Pe() {
        var a = document;
        return a.querySelectorAll && a.querySelector ? a.querySelectorAll(".alt-edited") : Qe(document, "*", Ca, void 0);
    }

    function Re(a, b) {
        var c = b || document,
            d = null;
        c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = Qe(document, "*", a, b)[0];
        return d || null;
    }

    function Qe(a, b, c, d) {
        a = d || a;
        var e = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (e || c)) return a.querySelectorAll(e + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            d = a.getElementsByClassName(c);
            if (e) {
                a = {};
                for (var g = b = 0, h; h = d[g]; g++) {
                    e == h.nodeName && (a[b++] = h);
                }
                a.length = b;
                return a;
            }
            return d;
        }
        d = a.getElementsByTagName(e || "*");
        if (c) {
            a = {};
            for (g = b = 0; h = d[g]; g++) {
                e = h.className, _typeof(e.split) == n && $c(e.split(/\s+/), c) && (a[b++] = h);
            }
            a.length = b;
            return a;
        }
        return d;
    }

    function Se(a, b) {
        od(b, function (b, d) {
            b && b.nb && (b = b.cb());
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Te.hasOwnProperty(d) ? a.setAttribute(Te[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
        });
    }

    var Te = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Ue(a) {
        a = a.document;
        a = Ve(a) ? a.documentElement : a.body;
        return new Ke(a.clientWidth, a.clientHeight);
    }

    function We(a) {
        var b = Xe(a);
        a = a.parentWindow || a.defaultView;
        return J && M("10") && a.pageYOffset != b.scrollTop ? new N(b.scrollLeft, b.scrollTop) : new N(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
    }

    function Xe(a) {
        return a.scrollingElement ? a.scrollingElement : !L && Ve(a) ? a.documentElement : a.body || a.documentElement;
    }

    function Ye(a) {
        return a ? a.parentWindow || a.defaultView : window;
    }

    function Ze(a, b, c) {
        return $e(document, arguments);
    }

    function $e(a, b) {
        var c = String(b[0]),
            d = b[1];
        if (!Xd && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', Cc(d.name), '"');
            if (d.type) {
                c.push(' type="', Cc(d.type), '"');
                var e = {};
                xd(e, d);
                delete e.type;
                d = e;
            }
            c.push(">");
            c = c.join("");
        }
        c = a.createElement(c);
        d && (C(d) ? c.className = d : B(d) ? c.className = d.join(" ") : Se(c, d));
        2 < b.length && af(a, c, b, 2);
        return c;
    }

    function af(a, b, c, d) {
        function e(c) {
            c && b.appendChild(C(c) ? a.createTextNode(c) : c);
        }

        for (; d < c.length; d++) {
            var g = c[d];
            !gc(g) || jc(g) && 0 < g.nodeType ? e(g) : Uc(bf(g) ? cd(g) : g, e);
        }
    }

    function cf() {
        var a = Ee("WBR"),
            b = document,
            c = b.createElement(f);
        J ? (a = Fe(He, a), c.innerHTML = Ae(a), c.removeChild(c.firstChild)) : c.innerHTML = Ae(a);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild); else {
            for (b = b.createDocumentFragment(); c.firstChild;) {
                b.appendChild(c.firstChild);
            }
            c = b;
        }
        return c;
    }

    function Ve(a) {
        return "CSS1Compat" == a.compatMode;
    }

    function df(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case ma:
            case la:
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case qa:
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1;
        }
        return !0;
    }

    function ef(a, b) {
        af(O(a), a, arguments, 1);
    }

    function ff(a) {
        for (var b; b = a.firstChild;) {
            a.removeChild(b);
        }
    }

    function gf(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b);
    }

    function hf(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling);
    }

    function jf(a) {
        a && a.parentNode && a.parentNode.removeChild(a);
    }

    function kf(a) {
        return Yd && void 0 != a.children ? a.children : Vc(a.childNodes, function (a) {
            return 1 == a.nodeType;
        });
    }

    function lf(a) {
        return y(a.firstElementChild) ? a.firstElementChild : mf(a.firstChild, !0);
    }

    function mf(a, b) {
        for (; a && 1 != a.nodeType;) {
            a = b ? a.nextSibling : a.previousSibling;
        }
        return a;
    }

    function nf(a) {
        return jc(a) && 1 == a.nodeType;
    }

    function of(a) {
        var b;
        if ($d && !(J && M("9") && !M("10") && x.SVGElement && a instanceof x.SVGElement) && (b = a.parentElement)) return b;
        b = a.parentNode;
        return nf(b) ? b : null;
    }

    function pf(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) {
            b = b.parentNode;
        }
        return b == a;
    }

    function qf(a, b) {
        if (a == b) return 0;
        if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if (J && !Td(9)) {
            if (9 == a.nodeType) return -1;
            if (9 == b.nodeType) return 1;
        }
        if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
            var c = 1 == a.nodeType,
                d = 1 == b.nodeType;
            if (c && d) return a.sourceIndex - b.sourceIndex;
            var e = a.parentNode,
                g = b.parentNode;
            return e == g ? rf(a, b) : !c && pf(e, b) ? -1 * sf(a, b) : !d && pf(g, a) ? sf(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : g.sourceIndex);
        }
        d = O(a);
        c = d.createRange();
        c.selectNode(a);
        c.collapse(!0);
        a = d.createRange();
        a.selectNode(b);
        a.collapse(!0);
        return c.compareBoundaryPoints(x.Range.START_TO_END, a);
    }

    function sf(a, b) {
        var c = a.parentNode;
        if (c == b) return -1;
        for (; b.parentNode != c;) {
            b = b.parentNode;
        }
        return rf(b, a);
    }

    function rf(a, b) {
        for (; b = b.previousSibling;) {
            if (b == a) return -1;
        }
        return 1;
    }

    function tf(a) {
        var b,
            c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var g = [], h = arguments[b]; h;) {
                g.unshift(h), h = h.parentNode;
            }
            d.push(g);
            e = Math.min(e, g.length);
        }
        g = null;
        for (b = 0; b < e; b++) {
            for (var h = d[0][b], k = 1; k < c; k++) {
                if (h != d[k][b]) return g;
            }
            g = h;
        }
        return g;
    }

    function O(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    }

    function uf(a) {
        return a.contentDocument || a.contentWindow.document;
    }

    function vf(a) {
        try {
            return a.contentWindow || (a.contentDocument ? Ye(a.contentDocument) : null);
        } catch (b) {
        }
        return null;
    }

    function wf(a, b) {
        if ("textContent" in a) a.textContent = b; else if (3 == a.nodeType) a.data = b; else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) {
                a.removeChild(a.lastChild);
            }
            a.firstChild.data = b;
        } else ff(a), a.appendChild(O(a).createTextNode(String(b)));
    }

    var xf = {SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1},
        yf = {IMG: " ", BR: "\n"};

    function zf(a) {
        if (J && !M("9")) {
            var b = a.getAttributeNode("tabindex");
            b = null != b && b.specified;
        } else b = a.hasAttribute("tabindex");
        b && (a = a.tabIndex, b = hc(a) && 0 <= a && 32768 > a);
        return b;
    }

    function Af(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"));
    }

    function Bf(a) {
        if (Zd && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n"); else {
            var b = [];
            Cf(a, b, !0);
            a = b.join("");
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        Zd || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a;
    }

    function Df(a) {
        var b = [];
        Cf(a, b, !1);
        return b.join("");
    }

    function Cf(a, b, c) {
        if (!(a.nodeName in xf)) if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue); else if (a.nodeName in yf) b.push(yf[a.nodeName]); else for (a = a.firstChild; a;) {
            Cf(a, b, c), a = a.nextSibling;
        }
    }

    function bf(a) {
        if (a && _typeof(a.length) == Cb) {
            if (jc(a)) return _typeof(a.item) == n || _typeof(a.item) == Rb;
            if (ic(a)) return _typeof(a.item) == n;
        }
        return !1;
    }

    function Me(a) {
        this.a = a || x.document || document;
    }

    w = Me.prototype;
    w.j = function (a) {
        return Ne(this.a, a);
    };
    w.D = function (a, b, c) {
        return $e(this.a, arguments);
    };
    function Ef(a, b) {
        return a.a.createElement(String(b));
    }

    function Ff(a) {
        a = a.a;
        return a.parentWindow || a.defaultView;
    }

    w.appendChild = function (a, b) {
        a.appendChild(b);
    };
    w.Ec = ff;
    w.vh = kf;
    w.zf = lf;
    w.contains = pf;
    w.eb = wf;
    w.Bf = Bf;
    function Gf(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d;
    }

    w = Gf.prototype;
    w.contains = function (a) {
        return this && a ? a instanceof Gf ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1;
    };
    w.ceil = function () {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this;
    };
    w.floor = function () {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this;
    };
    w.round = function () {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this;
    };
    w.translate = function (a, b) {
        a instanceof N ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, hc(b) && (this.top += b, this.bottom += b));
        return this;
    };
    function Hf(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d;
    }

    w = Hf.prototype;
    w.contains = function (a) {
        return a instanceof N ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height;
    };
    w.ceil = function () {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this;
    };
    w.floor = function () {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this;
    };
    w.round = function () {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this;
    };
    w.translate = function (a, b) {
        a instanceof N ? (this.left += a.x, this.top += a.y) : (this.left += a, hc(b) && (this.top += b));
        return this;
    };
    function P(a, b, c) {
        if (C(b)) (b = If(a, b)) && (a.style[b] = c); else for (var d in b) {
            c = a;
            var e = b[d],
                g = If(c, d);
            g && (c.style[g] = e);
        }
    }

    var Jf = {};

    function If(a, b) {
        var c = Jf[b];
        if (!c) {
            var d = Qc(b),
                c = d;
            void 0 === a.style[d] && (d = (L ? "Webkit" : K ? "Moz" : J ? "ms" : Id ? "O" : null) + Rc(d), void 0 !== a.style[d] && (c = d));
            Jf[b] = c;
        }
        return c;
    }

    function Kf(a, b) {
        var c = O(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : "";
    }

    function Lf(a, b) {
        return Kf(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b];
    }

    function Mf(a, b, c) {
        if (b instanceof N) {
            var d = b.x;
            b = b.y;
        } else d = b, b = c;
        a.style.left = Nf(d);
        a.style.top = Nf(b);
    }

    function Of(a) {
        a = a ? O(a) : document;
        return !J || Td(9) || Ve(Le(a).a) ? a.documentElement : a.body;
    }

    function Pf(a) {
        try {
            var b = a.getBoundingClientRect();
        } catch (c) {
            return {left: 0, top: 0, right: 0, bottom: 0};
        }
        J && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b;
    }

    function Qf(a) {
        if (J && !Td(8)) return a.offsetParent;
        var b = O(a),
            c = Lf(a, Hb),
            d = "fixed" == c || c == xa;
        for (a = a.parentNode; a && a != b; a = a.parentNode) {
            if (11 == a.nodeType && a.host && (a = a.host), c = Lf(a, Hb), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || c == xa || "relative" == c)) return a;
        }
        return null;
    }

    function Rf(a) {
        for (var b = new Gf(0, Infinity, Infinity, 0), c = Le(a), d = c.a.body, e = c.a.documentElement, g = Xe(c.a); a = Qf(a);) {
            if (!(J && 0 == a.clientWidth || L && 0 == a.clientHeight && a == d) && a != d && a != e && Lf(a, "overflow") != ac) {
                var h = Sf(a),
                    k = new N(a.clientLeft, a.clientTop);
                h.x += k.x;
                h.y += k.y;
                b.top = Math.max(b.top, h.y);
                b.right = Math.min(b.right, h.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
                b.left = Math.max(b.left, h.x);
            }
        }
        d = g.scrollLeft;
        g = g.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, g);
        c = Ue(Ff(c) || window);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, g + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null;
    }

    function Sf(a) {
        var b = O(a),
            c = new N(0, 0),
            d = Of(b);
        if (a == d) return c;
        a = Pf(a);
        b = We(Le(b).a);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c;
    }

    function Tf(a, b) {
        var c = new N(0, 0),
            d = Ye(O(a));
        if (!Fd(d, "parent")) return c;
        do {
            if (d == b) var e = Sf(a); else e = Pf(a), e = new N(e.left, e.top);
            c.x += e.x;
            c.y += e.y;
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c;
    }

    function Nf(a) {
        (typeof a === "undefined" ? "undefined" : _typeof(a)) == Cb && (a += "px");
        return a;
    }

    function Uf(a) {
        var b = Vf;
        if (Lf(a, "display") != p) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            g = c.position;
        c.visibility = mb;
        c.position = xa;
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = g;
        c.visibility = e;
        return a;
    }

    function Vf(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = L && !b && !c;
        return y(b) && !d || !a.getBoundingClientRect ? new Ke(b, c) : (a = Pf(a), new Ke(a.right - a.left, a.bottom - a.top));
    }

    function Q(a, b) {
        a.style.display = b ? "" : p;
    }

    function Wf(a, b) {
        b = Le(b);
        var c = b.a;
        if (J && c.createStyleSheet) {
            var d = c.createStyleSheet();
            Xf(d, a);
        } else c = Qe(b.a, "HEAD", void 0, void 0)[0], c || (d = Qe(b.a, "BODY", void 0, void 0)[0], c = b.D("HEAD"), d.parentNode.insertBefore(c, d)), d = b.D("STYLE"), Xf(d, a), b.appendChild(c, d);
    }

    function Xf(a, b) {
        b = ne(b);
        J && y(a.cssText) ? a.cssText = b : a.innerHTML = b;
    }

    function Yf(a) {
        return Nb == Lf(a, Va);
    }

    var Zf = K ? "MozUserSelect" : L || Jd ? "WebkitUserSelect" : null;

    function $f(a, b, c) {
        c = c ? null : a.getElementsByTagName("*");
        if (Zf) {
            if (b = b ? p : "", a.style && (a.style[Zf] = b), c) {
                a = 0;
                for (var d; d = c[a]; a++) {
                    d.style && (d.style[Zf] = b);
                }
            }
        } else if (J || Id) if (b = b ? "on" : "", a.setAttribute("unselectable", b), c) for (a = 0; d = c[a]; a++) {
            d.setAttribute("unselectable", b);
        }
    }

    function ag(a) {
        return new Ke(a.offsetWidth, a.offsetHeight);
    }

    function bg(a, b) {
        var c = Ve(Le(O(a)).a);
        if (!J || M("10") || c && M("8")) cg(a, b, "content-box"); else {
            var d = a.style;
            c ? (d.pixelWidth = b.width, d.pixelHeight = b.height) : (c = dg(a), a = eg(a), d.pixelWidth = b.width + a.left + c.left + c.right + a.right, d.pixelHeight = b.height + a.top + c.top + c.bottom + a.bottom);
        }
    }

    function cg(a, b, c) {
        a = a.style;
        K ? a.MozBoxSizing = c : L ? a.WebkitBoxSizing = c : a.boxSizing = c;
        a.width = Math.max(b.width, 0) + "px";
        a.height = Math.max(b.height, 0) + "px";
    }

    function fg(a, b, c, d) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var e = a.style[c],
            g = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] = g;
        return +b;
    }

    function gg(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? fg(a, b, "left", "pixelLeft") : 0;
    }

    function dg(a) {
        if (J) {
            var b = gg(a, Fb);
            var c = gg(a, Gb);
            var d = gg(a, "paddingTop");
            a = gg(a, "paddingBottom");
            return new Gf(d, c, a, b);
        }
        b = Kf(a, Fb);
        c = Kf(a, Gb);
        d = Kf(a, "paddingTop");
        a = Kf(a, "paddingBottom");
        return new Gf(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
    }

    var hg = {thin: 2, medium: 4, thick: 6};

    function ig(a, b) {
        if ((a.currentStyle ? a.currentStyle[b + "Style"] : null) == p) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in hg ? hg[b] : fg(a, b, "left", "pixelLeft");
    }

    function eg(a) {
        if (J && !Td(9)) {
            var b = ig(a, "borderLeft");
            var c = ig(a, "borderRight");
            var d = ig(a, "borderTop");
            a = ig(a, "borderBottom");
            return new Gf(d, c, a, b);
        }
        b = Kf(a, "borderLeftWidth");
        c = Kf(a, "borderRightWidth");
        d = Kf(a, "borderTopWidth");
        a = Kf(a, "borderBottomWidth");
        return new Gf(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
    };
    var jg;
    yd(["A", "AREA", "BUTTON", "HEAD", ma, "LINK", "MENU", "META", "OPTGROUP", na, "PROGRESS", "STYLE", "SELECT", "SOURCE", sa, ta, "TRACK"]);
    function kg(a, b) {
        b ? a.setAttribute("role", b) : a.removeAttribute("role");
    }

    function lg(a, b, c) {
        B(c) && (c = c.join(" "));
        var d = "aria-" + b;
        "" === c || void 0 == c ? (jg || (jg = {
            atomic: !1,
            autocomplete: p,
            dropeffect: p,
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: $b,
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: p,
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), c = jg, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c);
    };
    function R() {
        this.Y = this.Y;
        this.sa = this.sa;
    }

    R.prototype.Y = !1;
    R.prototype.M = function () {
        this.Y || (this.Y = !0, this.F());
    };
    function mg(a, b) {
        a.Y ? y(void 0) ? b.call(void 0) : b() : (a.sa || (a.sa = []), a.sa.push(y(void 0) ? D(b, void 0) : b));
    }

    R.prototype.F = function () {
        if (this.sa) for (; this.sa.length;) {
            this.sa.shift()();
        }
    };
    function ng(a) {
        a && _typeof(a.M) == n && a.M();
    };
    var og = !J || Td(9),
        pg = !J || Td(9),
        qg = J && !M("9");
    !L || M("528");
    K && M("1.9b") || J && M("8") || Id && M("9.5") || L && M("528");
    K && !M("8") || J && M("9");
    function rg(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.c = !1;
        this.sg = !0;
    }

    rg.prototype.stopPropagation = function () {
        this.c = !0;
    };
    rg.prototype.b = function () {
        this.sg = !1;
    };
    function sg(a, b) {
        rg.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.keyCode = 0;
        this.f = this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.a = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            (b = a.relatedTarget) ? K && (Fd(b, "nodeName") || (b = null)) : c == zb ? b = a.fromElement : c == yb && (b = a.toElement);
            this.relatedTarget = b;
            null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.f = Md ? a.metaKey : a.ctrlKey;
            this.a = a;
            a.defaultPrevented && this.b();
        }
    }

    F(sg, rg);
    var tg = [1, 4, 2];

    function ug(a) {
        return og ? 0 == a.a.button : a.type == Pa ? !0 : !!(a.a.button & tg[0]);
    }

    sg.prototype.stopPropagation = function () {
        sg.m.stopPropagation.call(this);
        this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0;
    };
    sg.prototype.b = function () {
        sg.m.b.call(this);
        var a = this.a;
        if (a.preventDefault) a.preventDefault(); else if (a.returnValue = !1, qg) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
        } catch (b) {
        }
    };
    var vg = "closure_listenable_" + (1E6 * Math.random() | 0);

    function wg(a) {
        return !(!a || !a[vg]);
    }

    var xg = 0;

    function yg(a, b, c, d, e) {
        this.listener = a;
        this.a = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.td = e;
        this.key = ++xg;
        this.dc = this.Sc = !1;
    }

    function zg(a) {
        a.dc = !0;
        a.listener = null;
        a.a = null;
        a.src = null;
        a.td = null;
    };
    function Ag(a) {
        this.src = a;
        this.a = {};
        this.b = 0;
    }

    Ag.prototype.add = function (a, b, c, d, e) {
        var g = a.toString();
        a = this.a[g];
        a || (a = this.a[g] = [], this.b++);
        var h = Bg(a, b, d, e);
        -1 < h ? (b = a[h], c || (b.Sc = !1)) : (b = new yg(b, this.src, g, !!d, e), b.Sc = c, a.push(b));
        return b;
    };
    Ag.prototype.remove = function (a, b, c, d) {
        a = a.toString();
        if (!(a in this.a)) return !1;
        var e = this.a[a];
        b = Bg(e, b, c, d);
        return -1 < b ? (zg(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1;
    };
    function Cg(a, b) {
        var c = b.type;
        if (!(c in a.a)) return !1;
        var d = ad(a.a[c], b);
        d && (zg(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
        return d;
    }

    function Dg(a, b) {
        b = b && b.toString();
        var c = 0,
            d;
        for (d in a.a) {
            if (!b || d == b) {
                for (var e = a.a[d], g = 0; g < e.length; g++) {
                    ++c, zg(e[g]);
                }
                delete a.a[d];
                a.b--;
            }
        }
        return c;
    }

    Ag.prototype.rc = function (a, b, c, d) {
        a = this.a[a.toString()];
        var e = -1;
        a && (e = Bg(a, b, c, d));
        return -1 < e ? a[e] : null;
    };
    function Bg(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var g = a[e];
            if (!g.dc && g.listener == b && g.capture == !!c && g.td == d) return e;
        }
        return -1;
    };
    var Eg = "closure_lm_" + (1E6 * Math.random() | 0),
        Fg = {},
        Gg = 0;

    function S(a, b, c, d, e) {
        if (B(b)) {
            for (var g = 0; g < b.length; g++) {
                S(a, b[g], c, d, e);
            }
            return null;
        }
        c = Hg(c);
        return wg(a) ? a.w(b, c, d, e) : Ig(a, b, c, !1, d, e);
    }

    function Ig(a, b, c, d, e, g) {
        if (!b) throw Error("Invalid event type");
        var h = !!e,
            k = Jg(a);
        k || (a[Eg] = k = new Ag(a));
        c = k.add(b, c, d, e, g);
        if (c.a) return c;
        d = Kg();
        c.a = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) a.addEventListener(b.toString(), d, h); else if (a.attachEvent) a.attachEvent(Lg(b.toString()), d); else throw Error("addEventListener and attachEvent are unavailable.");
        Gg++;
        return c;
    }

    function Kg() {
        var a = Mg,
            b = pg ? function (c) {
                return a.call(b.src, b.listener, c);
            } : function (c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c;
            };
        return b;
    }

    function Ng(a, b, c, d, e) {
        if (B(b)) {
            for (var g = 0; g < b.length; g++) {
                Ng(a, b[g], c, d, e);
            }
            return null;
        }
        c = Hg(c);
        return wg(a) ? a.vb(b, c, d, e) : Ig(a, b, c, !0, d, e);
    }

    function Og(a, b, c, d, e) {
        if (B(b)) for (var g = 0; g < b.length; g++) {
            Og(a, b[g], c, d, e);
        } else c = Hg(c), wg(a) ? a.ca(b, c, d, e) : a && (a = Jg(a)) && (b = a.rc(b, c, !!d, e)) && Pg(b);
    }

    function Pg(a) {
        if (hc(a) || !a || a.dc) return !1;
        var b = a.src;
        if (wg(b)) return Cg(b.Na, a);
        var c = a.type,
            d = a.a;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(Lg(c), d);
        Gg--;
        (c = Jg(b)) ? (Cg(c, a), 0 == c.b && (c.src = null, b[Eg] = null)) : zg(a);
        return !0;
    }

    function Qg(a, b) {
        if (!a) return 0;
        if (wg(a)) return a.Na ? Dg(a.Na, b) : 0;
        a = Jg(a);
        if (!a) return 0;
        var c = 0;
        b = b && b.toString();
        for (var d in a.a) {
            if (!b || d == b) for (var e = a.a[d].concat(), g = 0; g < e.length; ++g) {
                Pg(e[g]) && ++c;
            }
        }
        return c;
    }

    function Lg(a) {
        return a in Fg ? Fg[a] : Fg[a] = "on" + a;
    }

    function Rg(a, b, c, d) {
        var e = !0;
        if (a = Jg(a)) if (b = a.a[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
            var g = b[a];
            g && g.capture == c && !g.dc && (g = Sg(g, d), e = e && !1 !== g);
        }
        return e;
    }

    function Sg(a, b) {
        var c = a.listener,
            d = a.td || a.src;
        a.Sc && Pg(a);
        return c.call(d, b);
    }

    function Mg(a, b) {
        var c;
        if (a.dc) return !0;
        if (!pg) {
            if (!b) a: {
                b = ["window", "event"];
                for (var d = x; c = b.shift();) {
                    if (null != d[c]) d = d[c]; else {
                        b = null;
                        break a;
                    }
                }
                b = d;
            }
            c = b;
            b = new sg(c, this);
            d = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == c.keyCode) try {
                        c.keyCode = -1;
                        break a;
                    } catch (h) {
                        e = !0;
                    }
                    if (e || void 0 == c.returnValue) c.returnValue = !0;
                }
                c = [];
                for (e = b.currentTarget; e; e = e.parentNode) {
                    c.push(e);
                }
                a = a.type;
                for (var g = c.length - 1; !b.c && 0 <= g; g--) {
                    b.currentTarget = c[g], e = Rg(c[g], a, !0, b), d = d && e;
                }
                for (g = 0; !b.c && g < c.length; g++) {
                    b.currentTarget = c[g], e = Rg(c[g], a, !1, b), d = d && e;
                }
            }
            return d;
        }
        return Sg(a, new sg(b, this));
    }

    function Jg(a) {
        a = a[Eg];
        return a instanceof Ag ? a : null;
    }

    var Tg = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Hg(a) {
        if (ic(a)) return a;
        a[Tg] || (a[Tg] = function (b) {
            return a.handleEvent(b);
        });
        return a[Tg];
    };
    function Ug(a) {
        R.call(this);
        this.b = a;
        this.a = {};
    }

    F(Ug, R);
    var Vg = [];
    w = Ug.prototype;
    w.w = function (a, b, c, d) {
        B(b) || (b && (Vg[0] = b.toString()), b = Vg);
        for (var e = 0; e < b.length; e++) {
            var g = S(a, b[e], c || this.handleEvent, d || !1, this.b || this);
            if (!g) break;
            this.a[g.key] = g;
        }
        return this;
    };
    w.vb = function (a, b, c, d) {
        return Wg(this, a, b, c, d);
    };
    function Wg(a, b, c, d, e, g) {
        if (B(c)) for (var h = 0; h < c.length; h++) {
            Wg(a, b, c[h], d, e, g);
        } else {
            b = Ng(b, c, d || a.handleEvent, e, g || a.b || a);
            if (!b) return a;
            a.a[b.key] = b;
        }
        return a;
    }

    w.ca = function (a, b, c, d, e) {
        if (B(b)) for (var g = 0; g < b.length; g++) {
            this.ca(a, b[g], c, d, e);
        } else c = c || this.handleEvent, e = e || this.b || this, c = Hg(c), d = !!d, b = wg(a) ? a.rc(b, c, d, e) : a ? (a = Jg(a)) ? a.rc(b, c, d, e) : null : null, b && (Pg(b), delete this.a[b.key]);
        return this;
    };
    function Xg(a) {
        od(a.a, function (a, c) {
            this.a.hasOwnProperty(c) && Pg(a);
        }, a);
        a.a = {};
    }

    w.F = function () {
        Ug.m.F.call(this);
        Xg(this);
    };
    w.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };
    function Yg() {
        R.call(this);
        this.Na = new Ag(this);
        this.dh = this;
        this.Le = null;
    }

    F(Yg, R);
    Yg.prototype[vg] = !0;
    w = Yg.prototype;
    w.Zc = r("Le");
    w.Te = dc("Le");
    w.addEventListener = function (a, b, c, d) {
        S(this, a, b, c, d);
    };
    w.removeEventListener = function (a, b, c, d) {
        Og(this, a, b, c, d);
    };
    w.dispatchEvent = function (a) {
        var b = this.Zc();
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.Zc()) {
                c.push(b), ++d;
            }
        }
        b = this.dh;
        d = a.type || a;
        if (C(a)) a = new rg(a, b); else if (a instanceof rg) a.target = a.target || b; else {
            var e = a;
            a = new rg(d, b);
            xd(a, e);
        }
        var e = !0;
        if (c) for (var g = c.length - 1; !a.c && 0 <= g; g--) {
            var h = a.currentTarget = c[g];
            e = Zg(h, d, !0, a) && e;
        }
        a.c || (h = a.currentTarget = b, e = Zg(h, d, !0, a) && e, a.c || (e = Zg(h, d, !1, a) && e));
        if (c) for (g = 0; !a.c && g < c.length; g++) {
            h = a.currentTarget = c[g], e = Zg(h, d, !1, a) && e;
        }
        return e;
    };
    w.F = function () {
        Yg.m.F.call(this);
        this.Na && Dg(this.Na, void 0);
        this.Le = null;
    };
    w.w = function (a, b, c, d) {
        return this.Na.add(String(a), b, !1, c, d);
    };
    w.vb = function (a, b, c, d) {
        return this.Na.add(String(a), b, !0, c, d);
    };
    w.ca = function (a, b, c, d) {
        return this.Na.remove(String(a), b, c, d);
    };
    function Zg(a, b, c, d) {
        b = a.Na.a[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, g = 0; g < b.length; ++g) {
            var h = b[g];
            if (h && !h.dc && h.capture == c) {
                var k = h.listener,
                    l = h.td || h.src;
                h.Sc && Cg(a.Na, h);
                e = !1 !== k.call(l, d) && e;
            }
        }
        return e && 0 != d.sg;
    }

    w.rc = function (a, b, c, d) {
        return this.Na.rc(String(a), b, c, d);
    };
    function $g() {
    }

    fc($g);
    $g.prototype.a = 0;
    function T(a) {
        Yg.call(this);
        this.b = a || Le();
        this.ja = ah;
        this.ea = null;
        this.U = !1;
        this.A = null;
        this.K = void 0;
        this.G = this.s = this.B = this.qa = null;
        this.Ya = !1;
    }

    F(T, Yg);
    T.prototype.ob = $g.ka();
    var ah = null;

    function bh(a, b) {
        switch (a) {
            case 1:
                return b ? "disable" : "enable";
            case 2:
                return b ? "highlight" : "unhighlight";
            case 4:
                return b ? "activate" : "deactivate";
            case 8:
                return b ? "select" : "unselect";
            case 16:
                return b ? "check" : "uncheck";
            case 32:
                return b ? Za : Ha;
            case 64:
                return b ? "open" : "close";
        }
        throw Error("Invalid component state");
    }

    function ch(a) {
        return a.ea || (a.ea = ":" + (a.ob.a++).toString(36));
    }

    function dh(a, b) {
        if (a.B && a.B.G) {
            var c = a.B.G,
                d = a.ea;
            d in c && delete c[d];
            ud(a.B.G, b, a);
        }
        a.ea = b;
    }

    w = T.prototype;
    w.j = r("A");
    function eh(a, b) {
        return a.A ? Re(b, a.A || a.b.a) : null;
    }

    function U(a) {
        a.K || (a.K = new Ug(a));
        return a.K;
    }

    function fh(a, b) {
        if (a == b) throw Error(ua);
        if (b && a.B && a.ea && gh(a.B, a.ea) && a.B != b) throw Error(ua);
        a.B = b;
        T.m.Te.call(a, b);
    }

    w.rb = r("B");
    w.Te = function (a) {
        if (this.B && this.B != a) throw Error("Method not supported");
        T.m.Te.call(this, a);
    };
    w.D = function () {
        this.A = Ef(this.b, f);
    };
    w.fa = function (a) {
        hh(this, a);
    };
    function hh(a, b, c) {
        if (a.U) throw Error(ha);
        a.A || a.D();
        b ? b.insertBefore(a.A, c || null) : a.b.a.body.appendChild(a.A);
        a.B && !a.B.U || a.O();
    }

    function ih(a, b) {
        if (a.U) throw Error(ha);
        if (b && a.de(b)) {
            a.Ya = !0;
            var c = O(b);
            a.b && a.b.a == c || (a.b = Le(b));
            a.S(b);
            a.O();
        } else throw Error("Invalid element to decorate");
    }

    w.de = u(!0);
    w.S = dc("A");
    w.O = function () {
        this.U = !0;
        jh(this, function (a) {
            !a.U && a.j() && a.O();
        });
    };
    w.Z = function () {
        jh(this, function (a) {
            a.U && a.Z();
        });
        this.K && Xg(this.K);
        this.U = !1;
    };
    w.F = function () {
        this.U && this.Z();
        this.K && (this.K.M(), delete this.K);
        jh(this, function (a) {
            a.M();
        });
        !this.Ya && this.A && jf(this.A);
        this.B = this.qa = this.A = this.G = this.s = null;
        T.m.F.call(this);
    };
    function V(a, b) {
        return ch(a) + "." + b;
    }

    w.hc = function (a, b, c) {
        if (a.U && (c || !this.U)) throw Error(ha);
        if (0 > b || b > kh(this)) throw Error("Child component index out of bounds");
        this.G && this.s || (this.G = {}, this.s = []);
        if (a.rb() == this) {
            var d = ch(a);
            this.G[d] = a;
            ad(this.s, a);
        } else ud(this.G, ch(a), a);
        fh(a, this);
        dd(this.s, b, 0, a);
        a.U && this.U && a.rb() == this ? (c = this.ed(), b = c.childNodes[b] || null, b != a.j() && c.insertBefore(a.j(), b)) : c ? (this.A || this.D(), b = lh(this, b + 1), hh(a, this.ed(), b ? b.A : null)) : this.U && !a.U && a.A && a.A.parentNode && 1 == a.A.parentNode.nodeType && a.O();
    };
    w.ed = r("A");
    function mh(a) {
        null == a.ja && (a.ja = Yf(a.U ? a.A : a.b.a.body));
        return a.ja;
    }

    function kh(a) {
        return a.s ? a.s.length : 0;
    }

    function gh(a, b) {
        a.G && b ? (a = a.G, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
        return b;
    }

    function lh(a, b) {
        return a.s ? a.s[b] || null : null;
    }

    function jh(a, b, c) {
        a.s && Uc(a.s, b, c);
    }

    function nh(a, b) {
        return a.s && b ? Tc(a.s, b) : -1;
    }

    w.removeChild = function (a, b) {
        if (a) {
            var c = C(a) ? a : ch(a);
            a = gh(this, c);
            if (c && a) {
                var d = this.G;
                c in d && delete d[c];
                ad(this.s, a);
                b && (a.Z(), a.A && jf(a.A));
                fh(a, null);
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a;
    };
    w.Ec = function (a) {
        for (var b = []; this.s && 0 != this.s.length;) {
            b.push(this.removeChild(lh(this, 0), a));
        }
        return b;
    };
    function oh() {
    }

    var ph;
    fc(oh);
    var qh = {
        button: "pressed",
        checkbox: Na,
        menuitem: Ob,
        menuitemcheckbox: Na,
        menuitemradio: Na,
        radio: Na,
        tab: Ob,
        treeitem: Ob
    };
    w = oh.prototype;
    w.Qb = cc();
    w.D = function (a) {
        return a.b.D(f, rh(this, a).join(" "), a.$());
    };
    w.tb = function (a) {
        return a;
    };
    function sh(a, b, c) {
        if (a = a.j ? a.j() : a) {
            var d = [b];
            J && !M("7") && (d = th(fd(a), b), d.push(b));
            (c ? hd : jd)(a, d);
        }
    }

    w.hd = u(!0);
    w.Ja = function (a, b) {
        b.id && dh(a, b.id);
        var c = this.tb(b);
        c && c.firstChild ? uh(a, c.firstChild.nextSibling ? cd(c.childNodes) : c.firstChild) : a.Gb = null;
        var d = 0,
            e = this.da(),
            g = this.da(),
            h = !1,
            k = !1,
            l = !1,
            m = cd(fd(b));
        Uc(m, function (a) {
            h || a != e ? k || a != g ? d |= this.ad(a) : k = !0 : (h = !0, g == e && (k = !0));
            1 == this.ad(a) && zf(c) && Af(c, !1);
        }, this);
        a.V = d;
        h || (m.push(e), g == e && (k = !0));
        k || m.push(g);
        (a = a.$d) && m.push.apply(m, a);
        if (J && !M("7")) {
            var q = th(m);
            0 < q.length && (m.push.apply(m, q), l = !0);
        }
        if (!h || !k || a || l) b.className = m.join(" ");
        return b;
    };
    w.Df = function (a) {
        mh(a) && this.ie(a.j(), !0);
        a.isEnabled() && this.Rb(a, a.N());
    };
    function vh(a, b, c) {
        if (a = c || a.Qb()) c = b.getAttribute("role") || null, a != c && kg(b, a);
    }

    function wh(a, b, c) {
        b.N() || lg(c, mb, !b.N());
        b.isEnabled() || a.Ua(c, 1, !b.isEnabled());
        b.ba & 8 && a.Ua(c, 8, !!(b.V & 8));
        b.ba & 16 && a.Ua(c, 16, !!(b.V & 16));
        b.ba & 64 && a.Ua(c, 64, !!(b.V & 64));
    }

    w.jd = function (a, b) {
        $f(a, !b, !J && !Id);
    };
    w.ie = function (a, b) {
        sh(a, this.da() + "-rtl", b);
    };
    w.he = function (a) {
        var b;
        return a.ba & 32 && (b = a.j()) ? zf(b) : !1;
    };
    w.Rb = function (a, b) {
        var c;
        if (a.ba & 32 && (c = a.j())) {
            if (!b && a.V & 32) {
                try {
                    c.blur();
                } catch (d) {
                }
                a.V & 32 && a.Ef();
            }
            zf(c) != b && Af(c, b);
        }
    };
    w.J = function (a, b) {
        Q(a, b);
        a && lg(a, mb, !b);
    };
    w.yc = function (a, b, c) {
        var d = a.j();
        if (d) {
            var e = this.qc(b);
            e && sh(a, e, c);
            this.Ua(d, b, c);
        }
    };
    w.Ua = function (a, b, c) {
        ph || (ph = {1: "disabled", 8: Ob, 16: Na, 64: "expanded"});
        b = ph[b];
        var d = a.getAttribute("role") || null;
        d && (d = qh[d] || b, b = b == Na || b == Ob ? d : b);
        b && lg(a, b, c);
    };
    w.xc = function (a, b) {
        var c = this.tb(a);
        c && (ff(c), b && (C(b) ? wf(c, b) : (a = function (_a) {
            function a(_x) {
                return _a.apply(this, arguments);
            }

            a.toString = function () {
                return _a.toString();
            };

            return a;
        }(function (a) {
            if (a) {
                var b = O(c);
                c.appendChild(C(a) ? b.createTextNode(a) : a);
            }
        }), B(b) ? Uc(b, a) : !gc(b) || "nodeType" in b ? a(b) : Uc(cd(b), a))));
    };
    w.da = u("goog-control");
    function rh(a, b) {
        var c = a.da(),
            d = [c],
            e = a.da();
        e != c && d.push(e);
        c = b.V;
        for (e = []; c;) {
            var g = c & -c;
            e.push(a.qc(g));
            c &= ~g;
        }
        d.push.apply(d, e);
        (a = b.$d) && d.push.apply(d, a);
        J && !M("7") && d.push.apply(d, th(d));
        return d;
    }

    function th(a, b) {
        var c = [];
        b && (a = bd(a, [b]));
        Uc([], function (d) {
            !Yc(d, pc($c, a)) || b && !$c(d, b) || c.push(d.join("_"));
        });
        return c;
    }

    w.qc = function (a) {
        this.a || xh(this);
        return this.a[a];
    };
    w.ad = function (a) {
        if (!this.c) {
            this.a || xh(this);
            var b = this.a,
                c = {},
                d;
            for (d in b) {
                c[b[d]] = d;
            }
            this.c = c;
        }
        a = parseInt(this.c[a], 10);
        return isNaN(a) ? 0 : a;
    };
    function xh(a) {
        var b = a.da();
        b.replace(/\xa0|\s/g, " ");
        a.a = {
            1: b + ba,
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        };
    };
    function yh() {
    }

    F(yh, oh);
    fc(yh);
    w = yh.prototype;
    w.Qb = u(Ja);
    w.Ua = function (a, b, c) {
        switch (b) {
            case 8:
            case 16:
                lg(a, "pressed", c);
                break;
            default:
            case 64:
            case 1:
                yh.m.Ua.call(this, a, b, c);
        }
    };
    w.D = function (a) {
        var b = yh.m.D.call(this, a),
            c = a.l;
        b && (c ? b.title = c : b.removeAttribute("title"));
        (c = a.xa()) && this.ua(b, c);
        a.ba & 16 && this.Ua(b, 16, !!(a.V & 16));
        return b;
    };
    w.Ja = function (a, b) {
        b = yh.m.Ja.call(this, a, b);
        var c = this.xa(b);
        a.g = c;
        a.l = b.title;
        a.ba & 16 && this.Ua(b, 16, !!(a.V & 16));
        return b;
    };
    w.xa = z;
    w.ua = z;
    w.da = u("goog-button");
    function zh(a) {
        if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
        switch (a.keyCode) {
            case 18:
            case 20:
            case 93:
            case 17:
            case 40:
            case 35:
            case 27:
            case 36:
            case 45:
            case 37:
            case 224:
            case 91:
            case 144:
            case 12:
            case 34:
            case 33:
            case 19:
            case 255:
            case 44:
            case 39:
            case 145:
            case 16:
            case 38:
            case 252:
            case 224:
            case 92:
                return !1;
            case 0:
                return !K;
            default:
                return 166 > a.keyCode || 183 < a.keyCode;
        }
    }

    function Ah(a, b, c, d, e, g) {
        if (!(J || Jd || L && M("525"))) return !0;
        if (Md && e) return Bh(a);
        if (e && !d) return !1;
        hc(b) && (b = Ch(b));
        e = 17 == b || 18 == b || Md && 91 == b;
        if ((!c || Md) && e || Md && 16 == b && (d || g)) return !1;
        if ((L || Jd) && d && c) switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1;
        }
        if (J && d && b == a) return !1;
        switch (a) {
            case 13:
                return !0;
            case 27:
                return !(L || Jd);
        }
        return Bh(a);
    }

    function Bh(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (L || Jd) && 0 == a) return !0;
        switch (a) {
            case 32:
            case 43:
            case 63:
            case 64:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
                return !0;
            default:
                return !1;
        }
    }

    function Ch(a) {
        if (K) a = Dh(a); else if (Md && L) switch (a) {
            case 93:
                a = 91;
        }
        return a;
    }

    function Dh(a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a;
        }
    };
    function Eh(a, b) {
        Yg.call(this);
        a && Fh(this, a, b);
    }

    F(Eh, Yg);
    w = Eh.prototype;
    w.A = null;
    w.wd = null;
    w.we = null;
    w.xd = null;
    w.Ga = -1;
    w.ub = -1;
    w.Pd = !1;
    var Gh = {
            3: 13,
            12: 144,
            63232: 38,
            63233: 40,
            63234: 37,
            63235: 39,
            63236: 112,
            63237: 113,
            63238: 114,
            63239: 115,
            63240: 116,
            63241: 117,
            63242: 118,
            63243: 119,
            63244: 120,
            63245: 121,
            63246: 122,
            63247: 123,
            63248: 44,
            63272: 46,
            63273: 36,
            63275: 35,
            63276: 33,
            63277: 34,
            63289: 144,
            63302: 45
        },
        Hh = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45
        },
        Ih = J || Jd || L && M("525"),
        Jh = Md && K;
    w = Eh.prototype;
    w.Nh = function (a) {
        if (L || Jd) if (17 == this.Ga && !a.ctrlKey || 18 == this.Ga && !a.altKey || Md && 91 == this.Ga && !a.metaKey) this.ub = this.Ga = -1;
        -1 == this.Ga && (a.ctrlKey && 17 != a.keyCode ? this.Ga = 17 : a.altKey && 18 != a.keyCode ? this.Ga = 18 : a.metaKey && 91 != a.keyCode && (this.Ga = 91));
        Ih && !Ah(a.keyCode, this.Ga, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.ub = Ch(a.keyCode), Jh && (this.Pd = a.altKey));
    };
    w.Oh = function (a) {
        this.ub = this.Ga = -1;
        this.Pd = a.altKey;
    };
    w.handleEvent = function (a) {
        var b = a.a,
            c = b.altKey;
        if (J && a.type == ub) var d = this.ub; else if ((L || Jd) && a.type == ub) d = this.ub; else if (Id && !L) d = this.ub; else {
            d = b.keyCode || this.ub;
            var e = b.charCode || 0;
            Jh && (c = this.Pd);
            Md && 63 == e && 224 == d && (d = 191);
        }
        (e = d = Ch(d)) ? 63232 <= d && d in Gh ? e = Gh[d] : 25 == d && a.shiftKey && (e = 9) : b.keyIdentifier && b.keyIdentifier in Hh && (e = Hh[b.keyIdentifier]);
        a = e == this.Ga;
        this.Ga = e;
        b = new Kh(e, 0, a, b);
        b.altKey = c;
        this.dispatchEvent(b);
    };
    w.j = r("A");
    function Fh(a, b, c) {
        a.xd && Lh(a);
        a.A = b;
        a.wd = S(a.A, ub, a, c);
        a.we = S(a.A, tb, a.Nh, c, a);
        a.xd = S(a.A, "keyup", a.Oh, c, a);
    }

    function Lh(a) {
        a.wd && (Pg(a.wd), Pg(a.we), Pg(a.xd), a.wd = null, a.we = null, a.xd = null);
        a.A = null;
        a.Ga = -1;
        a.ub = -1;
    }

    w.F = function () {
        Eh.m.F.call(this);
        Lh(this);
    };
    function Kh(a, b, c, d) {
        sg.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.repeat = c;
    }

    F(Kh, sg);
    function Mh(a, b) {
        if (!a) throw Error("Invalid class name " + a);
        if (!ic(b)) throw Error("Invalid decorator function " + b);
        Nh[a] = b;
    }

    var Oh = {},
        Nh = {};

    function W(a, b, c) {
        T.call(this, c);
        if (!b) {
            b = this.constructor;
            for (var d; b;) {
                d = kc(b);
                if (d = Oh[d]) break;
                b = b.m ? b.m.constructor : null;
            }
            b = d ? ic(d.ka) ? d.ka() : new d() : null;
        }
        this.a = b;
        this.Gb = y(a) ? a : null;
    }

    F(W, T);
    w = W.prototype;
    w.Gb = null;
    w.V = 0;
    w.ba = 39;
    w.fb = 255;
    w.Ic = 0;
    w.ga = !0;
    w.$d = null;
    w.pe = !0;
    w.Oc = !1;
    function Ph(a, b) {
        a.U && b != a.pe && Qh(a, b);
        a.pe = b;
    }

    w.D = function () {
        var a = this.a.D(this);
        this.A = a;
        vh(this.a, a, this.sc());
        this.Oc || this.a.jd(a, !1);
        this.N() || this.a.J(a, !1);
    };
    w.sc = u(null);
    w.ed = function () {
        return this.a.tb(this.j());
    };
    w.de = function (a) {
        return this.a.hd(a);
    };
    w.S = function (a) {
        this.A = a = this.a.Ja(this, a);
        vh(this.a, a, this.sc());
        this.Oc || this.a.jd(a, !1);
        this.ga = a.style.display != p;
    };
    w.O = function () {
        W.m.O.call(this);
        wh(this.a, this, this.A);
        this.a.Df(this);
        if (this.ba & -2 && (this.pe && Qh(this, !0), this.ba & 32)) {
            var a = this.j();
            if (a) {
                var b = this.f || (this.f = new Eh());
                Fh(b, a);
                U(this).w(b, "key", this.Fa).w(a, Za, this.xh).w(a, Ha, this.Ef);
            }
        }
    };
    function Qh(a, b) {
        var c = U(a),
            d = a.j();
        b ? (c.w(d, zb, a.je).w(d, wb, a.Ac).w(d, Ab, a.Ub).w(d, yb, a.qe), a.Bc != z && c.w(d, Ta, a.Bc), J && (M(9) || c.w(d, Ua, a.If), a.h || (a.h = new Rh(a), mg(a, pc(ng, a.h))))) : (c.ca(d, zb, a.je).ca(d, wb, a.Ac).ca(d, Ab, a.Ub).ca(d, yb, a.qe), a.Bc != z && c.ca(d, Ta, a.Bc), J && (M(9) || c.ca(d, Ua, a.If), ng(a.h), a.h = null));
    }

    w.Z = function () {
        W.m.Z.call(this);
        this.f && Lh(this.f);
        this.N() && this.isEnabled() && this.a.Rb(this, !1);
    };
    w.F = function () {
        W.m.F.call(this);
        this.f && (this.f.M(), delete this.f);
        delete this.a;
        this.h = this.$d = this.Gb = null;
    };
    w.$ = r("Gb");
    w.Hb = function (a) {
        this.a.xc(this.j(), a);
        this.Gb = a;
    };
    function uh(a, b) {
        a.Gb = b;
    }

    w.bb = function () {
        var a = this.$();
        if (!a) return "";
        a = C(a) ? a : B(a) ? Wc(a, Df).join("") : Bf(a);
        return wc(a);
    };
    w.xg = function (a) {
        this.Hb(a);
    };
    w.N = r("ga");
    w.J = function (a, b) {
        return b || this.ga != a && this.dispatchEvent(a ? "show" : nb) ? ((b = this.j()) && this.a.J(b, a), this.isEnabled() && this.a.Rb(this, a), this.ga = a, !0) : !1;
    };
    w.isEnabled = function () {
        return !(this.V & 1);
    };
    w.oa = function (a) {
        var b = this.rb();
        b && _typeof(b.isEnabled) == n && !b.isEnabled() || !Sh(this, 1, !a) || (a || (Th(this, !1), Uh(this, !1)), this.N() && this.a.Rb(this, a), Vh(this, 1, !a, !0));
    };
    function Uh(a, b) {
        Sh(a, 2, b) && Vh(a, 2, b);
    }

    function Th(a, b) {
        Sh(a, 4, b) && Vh(a, 4, b);
    }

    function Wh(a, b) {
        Sh(a, 64, b) && Vh(a, 64, b);
    }

    function Vh(a, b, c, d) {
        d || 1 != b ? a.ba & b && c != !!(a.V & b) && (a.a.yc(a, b, c), a.V = c ? a.V | b : a.V & ~b) : a.oa(!c);
    }

    w.pa = function (a, b) {
        if (this.U && this.V & a && !b) throw Error(ha);
        !b && this.V & a && Vh(this, a, !1);
        this.ba = b ? this.ba | a : this.ba & ~a;
    };
    function Xh(a, b) {
        return !!(a.fb & b) && !!(a.ba & b);
    }

    function Sh(a, b, c) {
        return !!(a.ba & b) && !!(a.V & b) != c && (!(a.Ic & b) || a.dispatchEvent(bh(b, c))) && !a.Y;
    }

    w.je = function (a) {
        (!a.relatedTarget || !pf(this.j(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && Xh(this, 2) && Uh(this, !0);
    };
    w.qe = function (a) {
        a.relatedTarget && pf(this.j(), a.relatedTarget) || !this.dispatchEvent("leave") || (Xh(this, 4) && Th(this, !1), Xh(this, 2) && Uh(this, !1));
    };
    w.Bc = z;
    w.Ac = function (a) {
        this.isEnabled() && (Xh(this, 2) && Uh(this, !0), !ug(a) || L && Md && a.ctrlKey || (Xh(this, 4) && Th(this, !0), this.a && this.a.he(this) && this.j().focus()));
        this.Oc || !ug(a) || L && Md && a.ctrlKey || a.b();
    };
    w.Ub = function (a) {
        this.isEnabled() && (Xh(this, 2) && Uh(this, !0), this.V & 4 && this.bc(a) && Xh(this, 4) && Th(this, !1));
    };
    w.If = function (a) {
        this.isEnabled() && this.bc(a);
    };
    w.bc = function (a) {
        if (Xh(this, 16)) {
            var b = !(this.V & 16);
            Sh(this, 16, b) && Vh(this, 16, b);
        }
        Xh(this, 8) && Sh(this, 8, !0) && Vh(this, 8, !0);
        Xh(this, 64) && Wh(this, !(this.V & 64));
        b = new rg(za, this);
        a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.f = a.f);
        return this.dispatchEvent(b);
    };
    w.xh = function () {
        Xh(this, 32) && Sh(this, 32, !0) && Vh(this, 32, !0);
    };
    w.Ef = function () {
        Xh(this, 4) && Th(this, !1);
        Xh(this, 32) && Sh(this, 32, !1) && Vh(this, 32, !1);
    };
    w.Fa = function (a) {
        return this.N() && this.isEnabled() && this.zc(a) ? (a.b(), a.stopPropagation(), !0) : !1;
    };
    w.zc = function (a) {
        return 13 == a.keyCode && this.bc(a);
    };
    if (!ic(W)) throw Error("Invalid component class " + W);
    if (!ic(oh)) throw Error("Invalid renderer class " + oh);
    var Yh = kc(W);
    Oh[Yh] = oh;
    Mh("goog-control", function () {
        return new W(null);
    });
    function Rh(a) {
        R.call(this);
        this.b = a;
        this.a = !1;
        this.c = new Ug(this);
        mg(this, pc(ng, this.c));
        a = this.b.A;
        this.c.w(a, wb, this.g).w(a, Ab, this.h).w(a, Pa, this.f);
    }

    F(Rh, R);
    var Zh = !J || Td(9);
    Rh.prototype.g = function () {
        this.a = !1;
    };
    Rh.prototype.h = function () {
        this.a = !0;
    };
    function $h(a, b) {
        if (!Zh) return a.button = 0, a.type = b, a;
        var c = document.createEvent("MouseEvents");
        c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
        return c;
    }

    Rh.prototype.f = function (a) {
        if (this.a) this.a = !1; else {
            var b = a.a,
                c = b.button,
                d = b.type,
                e = $h(b, wb);
            this.b.Ac(new sg(e, a.currentTarget));
            e = $h(b, Ab);
            this.b.Ub(new sg(e, a.currentTarget));
            Zh || (b.button = c, b.type = d);
        }
    };
    Rh.prototype.F = function () {
        this.b = null;
        Rh.m.F.call(this);
    };
    function ai() {
    }

    F(ai, yh);
    fc(ai);
    w = ai.prototype;
    w.Qb = cc();
    w.D = function (a) {
        Ph(a, !1);
        a.fb &= -256;
        a.pa(32, !1);
        return a.b.D("BUTTON", {
            "class": rh(this, a).join(" "),
            disabled: !a.isEnabled(),
            title: a.l || "",
            value: a.xa() || ""
        }, a.bb() || "");
    };
    w.hd = function (a) {
        return "BUTTON" == a.tagName || a.tagName == ma && (a.type == Ja || "submit" == a.type || "reset" == a.type);
    };
    w.Ja = function (a, b) {
        Ph(a, !1);
        a.fb &= -256;
        a.pa(32, !1);
        if (b.disabled) {
            var c = this.qc(1);
            H(b, c);
        }
        return ai.m.Ja.call(this, a, b);
    };
    w.Df = function (a) {
        U(a).w(a.j(), Pa, a.bc);
    };
    w.jd = z;
    w.ie = z;
    w.he = function (a) {
        return a.isEnabled();
    };
    w.Rb = z;
    w.yc = function (a, b, c) {
        ai.m.yc.call(this, a, b, c);
        (a = a.j()) && 1 == b && (a.disabled = c);
    };
    w.xa = function (a) {
        return a.value;
    };
    w.ua = function (a, b) {
        a && (a.value = b);
    };
    w.Ua = z;
    function bi(a, b, c) {
        W.call(this, a, b || ai.ka(), c);
    }

    F(bi, W);
    w = bi.prototype;
    w.xa = r("g");
    w.ua = function (a) {
        this.g = a;
        this.a.ua(this.j(), a);
    };
    w.F = function () {
        bi.m.F.call(this);
        delete this.g;
        delete this.l;
    };
    w.O = function () {
        bi.m.O.call(this);
        if (this.ba & 32) {
            var a = this.j();
            a && U(this).w(a, "keyup", this.zc);
        }
    };
    w.zc = function (a) {
        return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.bc(a) : 32 == a.keyCode;
    };
    Mh("goog-button", function () {
        return new bi(null);
    });
    function ci() {
    }

    F(ci, yh);
    fc(ci);
    w = ci.prototype;
    w.D = function (a) {
        var b = {"class": db + rh(this, a).join(" ")},
            b = a.b.D(f, b, di(this, a.$(), a.b));
        a = a.l;
        b && (a ? b.title = a : b.removeAttribute("title"));
        return b;
    };
    w.Qb = u(Ja);
    w.tb = function (a) {
        return a && a.firstChild && a.firstChild.firstChild;
    };
    function di(a, b, c) {
        return c.D(f, db + (a.da() + "-outer-box"), c.D(f, db + (a.da() + "-inner-box"), b));
    }

    w.hd = function (a) {
        return a.tagName == f;
    };
    w.Ja = function (a, b) {
        ei(b, !0);
        ei(b, !1);
        a: {
            var c = a.b.zf(b);
            var d = this.da() + "-outer-box";
            if (c && gd(c, d) && (c = a.b.zf(c), d = this.da() + "-inner-box", c && gd(c, d))) {
                c = !0;
                break a;
            }
            c = !1;
        }
        c || b.appendChild(di(this, b.childNodes, a.b));
        hd(b, ["goog-inline-block", this.da()]);
        return ci.m.Ja.call(this, a, b);
    };
    w.da = u("goog-custom-button");
    function ei(a, b) {
        if (a) for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
            d = b ? c.nextSibling : c.previousSibling;
            if (3 == c.nodeType) {
                var e = c.nodeValue;
                if ("" == xc(e)) a.removeChild(c); else {
                    c.nodeValue = b ? yc(e) : zc(e);
                    break;
                }
            } else break;
            c = d;
        }
    };
    function fi(a, b, c) {
        bi.call(this, a, b || ci.ka(), c);
        this.pa(16, !0);
    }

    F(fi, bi);
    Mh("goog-toggle-button", function () {
        return new fi(null);
    });
    var gi = "StopIteration" in x ? x.StopIteration : {message: "StopIteration", stack: ""};

    function hi() {
    }

    hi.prototype.next = function () {
        throw gi;
    };
    hi.prototype.Ia = function () {
        return this;
    };
    function ii(a) {
        if (a instanceof hi) return a;
        if (_typeof(a.Ia) == n) return a.Ia(!1);
        if (gc(a)) {
            var b = 0,
                c = new hi();
            c.next = function () {
                for (; ;) {
                    if (b >= a.length) throw gi;
                    if (b in a) return a[b++];
                    b++;
                }
            };
            return c;
        }
        throw Error("Not implemented");
    }

    function ji(a, b, c) {
        a = ii(a);
        try {
            for (; b.call(c, a.next(), void 0, a);) {
            }
        } catch (d) {
            if (d !== gi) throw d;
        }
    };
    function ki(a, b) {
        this.b = {};
        this.a = [];
        this.f = this.c = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) {
                this.set(arguments[d], arguments[d + 1]);
            }
        } else if (a) {
            a instanceof ki ? (c = a.Oa(), d = a.ya()) : (c = qd(a), d = pd(a));
            for (var e = 0; e < c.length; e++) {
                this.set(c[e], d[e]);
            }
        }
    }

    w = ki.prototype;
    w.ya = function () {
        li(this);
        for (var a = [], b = 0; b < this.a.length; b++) {
            a.push(this.b[this.a[b]]);
        }
        return a;
    };
    w.Oa = function () {
        li(this);
        return this.a.concat();
    };
    function mi(a, b) {
        return ni(a.b, b);
    }

    function oi(a) {
        a.b = {};
        a.a.length = 0;
        a.c = 0;
        a.f = 0;
    }

    w.remove = function (a) {
        return ni(this.b, a) ? (delete this.b[a], this.c--, this.f++, this.a.length > 2 * this.c && li(this), !0) : !1;
    };
    function li(a) {
        var b, c;
        if (a.c != a.a.length) {
            for (b = c = 0; c < a.a.length;) {
                var d = a.a[c];
                ni(a.b, d) && (a.a[b++] = d);
                c++;
            }
            a.a.length = b;
        }
        if (a.c != a.a.length) {
            var e = {};
            for (b = c = 0; c < a.a.length;) {
                d = a.a[c], ni(e, d) || (a.a[b++] = d, e[d] = 1), c++;
            }
            a.a.length = b;
        }
    }

    w.get = function (a, b) {
        return ni(this.b, a) ? this.b[a] : b;
    };
    w.set = function (a, b) {
        ni(this.b, a) || (this.c++, this.a.push(a), this.f++);
        this.b[a] = b;
    };
    w.forEach = function (a, b) {
        for (var c = this.Oa(), d = 0; d < c.length; d++) {
            var e = c[d],
                g = this.get(e);
            a.call(b, g, e, this);
        }
    };
    w.Ia = function (a) {
        li(this);
        var b = 0,
            c = this.f,
            d = this,
            e = new hi();
        e.next = function () {
            if (c != d.f) throw Error("The map has changed since the iterator was created");
            if (b >= d.a.length) throw gi;
            var e = d.a[b++];
            return a ? e : d.b[e];
        };
        return e;
    };
    function ni(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    };
    function pi(a) {
        if (a.ya && _typeof(a.ya) == n) return a.ya();
        if (C(a)) return a.split("");
        if (gc(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) {
                b.push(a[d]);
            }
            return b;
        }
        return pd(a);
    }

    function qi(a, b, c) {
        if (a.forEach && _typeof(a.forEach) == n) a.forEach(b, c); else if (gc(a) || C(a)) Uc(a, b, c); else {
            if (a.Oa && _typeof(a.Oa) == n) var d = a.Oa(); else if (a.ya && _typeof(a.ya) == n) d = void 0; else if (gc(a) || C(a)) {
                d = [];
                for (var e = a.length, g = 0; g < e; g++) {
                    d.push(g);
                }
            } else d = qd(a);
            for (var e = pi(a), g = e.length, h = 0; h < g; h++) {
                b.call(c, e[h], d && d[h], a);
            }
        }
    };
    var ri = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function ui(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="),
                    e = null;
                if (0 <= d) {
                    var g = a[c].substring(0, d);
                    e = a[c].substring(d + 1);
                } else g = a[c];
                b(g, e ? Bc(e) : "");
            }
        }
    };
    function vi(a, b) {
        this.f = this.s = this.c = "";
        this.l = null;
        this.g = this.h = "";
        this.b = !1;
        if (a instanceof vi) {
            this.b = y(b) ? b : a.b;
            wi(this, a.c);
            this.s = a.s;
            this.f = a.f;
            xi(this, a.l);
            this.h = a.h;
            b = a.a;
            var c = new yi();
            c.c = b.c;
            b.a && (c.a = new ki(b.a), c.b = b.b);
            zi(this, c);
            this.g = a.g;
        } else a && (c = String(a).match(ri)) ? (this.b = !!b, wi(this, c[1] || "", !0), this.s = Ai(c[2] || ""), this.f = Ai(c[3] || "", !0), xi(this, c[4]), this.h = Ai(c[5] || "", !0), zi(this, c[6] || "", !0), this.g = Ai(c[7] || "")) : (this.b = !!b, this.a = new yi(null, 0, this.b));
    }

    vi.prototype.toString = function () {
        var a = [],
            b = this.c;
        b && a.push(Bi(b, Ci, !0), ":");
        var c = this.f;
        if (c || "file" == b) a.push("//"), (b = this.s) && a.push(Bi(b, Ci, !0), "@"), a.push(Ac(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.l, null != c && a.push(":", String(c));
        if (c = this.h) this.f && "/" != c.charAt(0) && a.push("/"), a.push(Bi(c, "/" == c.charAt(0) ? Di : Ei, !0));
        (c = this.a.toString()) && a.push("?", c);
        (c = this.g) && a.push("#", Bi(c, Fi));
        return a.join("");
    };
    function wi(a, b, c) {
        a.c = c ? Ai(b, !0) : b;
        a.c && (a.c = a.c.replace(/:$/, ""));
    }

    function xi(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.l = b;
        } else a.l = null;
    }

    function zi(a, b, c) {
        b instanceof yi ? (a.a = b, Gi(a.a, a.b)) : (c || (b = Bi(b, Hi)), a.a = new yi(b, 0, a.b));
    }

    function Ai(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
    }

    function Bi(a, b, c) {
        return C(a) ? (a = encodeURI(a).replace(b, Ii), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    }

    function Ii(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    }

    var Ci = /[#\/\?@]/g,
        Ei = /[\#\?:]/g,
        Di = /[\#\?]/g,
        Hi = /[\#\?@]/g,
        Fi = /#/g;

    function yi(a, b, c) {
        this.b = this.a = null;
        this.c = a || null;
        this.f = !!c;
    }

    function Ji(a) {
        a.a || (a.a = new ki(), a.b = 0, a.c && ui(a.c, function (b, c) {
            a.add(Bc(b), c);
        }));
    }

    w = yi.prototype;
    w.add = function (a, b) {
        Ji(this);
        this.c = null;
        a = Ki(this, a);
        var c = this.a.get(a);
        c || this.a.set(a, c = []);
        c.push(b);
        this.b = this.b + 1;
        return this;
    };
    w.remove = function (a) {
        Ji(this);
        a = Ki(this, a);
        return mi(this.a, a) ? (this.c = null, this.b = this.b - this.a.get(a).length, this.a.remove(a)) : !1;
    };
    function Li(a, b) {
        Ji(a);
        b = Ki(a, b);
        return mi(a.a, b);
    }

    w.Oa = function () {
        Ji(this);
        for (var a = this.a.ya(), b = this.a.Oa(), c = [], d = 0; d < b.length; d++) {
            for (var e = a[d], g = 0; g < e.length; g++) {
                c.push(b[d]);
            }
        }
        return c;
    };
    w.ya = function (a) {
        Ji(this);
        var b = [];
        if (C(a)) Li(this, a) && (b = bd(b, this.a.get(Ki(this, a)))); else {
            a = this.a.ya();
            for (var c = 0; c < a.length; c++) {
                b = bd(b, a[c]);
            }
        }
        return b;
    };
    w.set = function (a, b) {
        Ji(this);
        this.c = null;
        a = Ki(this, a);
        Li(this, a) && (this.b = this.b - this.a.get(a).length);
        this.a.set(a, [b]);
        this.b = this.b + 1;
        return this;
    };
    w.get = function (a, b) {
        a = a ? this.ya(a) : [];
        return 0 < a.length ? String(a[0]) : b;
    };
    function Mi(a, b, c) {
        a.remove(b);
        0 < c.length && (a.c = null, a.a.set(Ki(a, b), cd(c)), a.b = a.b + c.length);
    }

    w.toString = function () {
        if (this.c) return this.c;
        if (!this.a) return "";
        for (var a = [], b = this.a.Oa(), c = 0; c < b.length; c++) {
            for (var d = b[c], e = Ac(d), d = this.ya(d), g = 0; g < d.length; g++) {
                var h = e;
                "" !== d[g] && (h += "=" + Ac(d[g]));
                a.push(h);
            }
        }
        return this.c = a.join("&");
    };
    function Ki(a, b) {
        b = String(b);
        a.f && (b = b.toLowerCase());
        return b;
    }

    function Gi(a, b) {
        b && !a.f && (Ji(a), a.c = null, a.a.forEach(function (a, b) {
            var c = b.toLowerCase();
            b != c && (this.remove(b), Mi(this, c, a));
        }, a));
        a.f = b;
    }

    w.Af = function (a) {
        for (var b = 0; b < arguments.length; b++) {
            qi(arguments[b], function (a, b) {
                this.add(b, a);
            }, this);
        }
    };
    var Ni = {},
        Oi = {},
        Pi = {},
        Qi = {},
        Ri = {};

    function Si() {
        throw Error("Do not instantiate directly");
    }

    Si.prototype.pb = null;
    Si.prototype.$ = r("a");
    Si.prototype.toString = r("a");
    function Ti() {
        Si.call(this);
    }

    F(Ti, Si);
    Ti.prototype.Ca = Ni;
    function Ui() {
        Si.call(this);
    }

    F(Ui, Si);
    Ui.prototype.Ca = {};
    Ui.prototype.pb = 1;
    function Vi() {
        Si.call(this);
    }

    F(Vi, Si);
    Vi.prototype.Ca = Oi;
    Vi.prototype.pb = 1;
    function Wi() {
        Si.call(this);
    }

    F(Wi, Si);
    Wi.prototype.Ca = Pi;
    Wi.prototype.pb = 1;
    function Xi() {
        Si.call(this);
    }

    F(Xi, Si);
    Xi.prototype.Ca = {};
    Xi.prototype.pb = 1;
    function Yi() {
        Si.call(this);
    }

    F(Yi, Si);
    Yi.prototype.Ca = Qi;
    Yi.prototype.pb = 1;
    function Zi(a, b) {
        b = a(b || $i, void 0, void 0);
        a = Ef(Le(), f);
        b = aj(b);
        a.innerHTML = b;
        1 == a.childNodes.length && (b = a.firstChild, 1 == b.nodeType && (a = b));
        return a;
    }

    function aj(a) {
        if (!jc(a)) return String(a);
        if (a instanceof Si) {
            if (a.Ca === Ni) return a.$();
            if (a.Ca === Ri) return Cc(a.$());
        }
        return "zSoyz";
    }

    var $i = {};
    J && M(8);
    function bj(a) {
        if (null != a) switch (a.pb) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0;
        }
        return null;
    }

    function cj(a) {
        return null != a && a.Ca === Ni ? a : a instanceof ye ? dj(Ae(a), a.Ob()) : dj(Cc(String(String(a))), bj(a));
    }

    function ej(a) {
        function b(a) {
            this.a = a;
        }

        b.prototype = a.prototype;
        return function (a) {
            return new b(String(a));
        };
    }

    var dj = function (a) {
        function b(a) {
            this.a = a;
        }

        b.prototype = a.prototype;
        return function (a, d) {
            a = new b(String(a));
            void 0 !== d && (a.pb = d);
            return a;
        };
    }(Ti);
    ej(Ui);
    ej(Vi);
    ej(Wi);
    ej(Xi);
    var fj = ej(Yi);
    (function (a) {
        function b(a) {
            this.a = a;
        }

        b.prototype = a.prototype;
        return function (a, d) {
            a = String(a);
            if (!a) return "";
            a = new b(a);
            void 0 !== d && (a.pb = d);
            return a;
        };
    })(Ti);
    function gj(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>");
    }

    function hj(a) {
        return null != a && a.Ca === Ni ? String(String(a.$()).replace(ij, "").replace(jj, "&lt;")).replace(kj, lj) : Cc(String(a));
    }

    function mj(a) {
        null != a && a.Ca === Qi ? a = gj(a.$()) : null == a ? a = "" : a instanceof fe ? a = gj(he(a)) : a instanceof le ? a = gj(ne(a)) : (a = String(a), a = nj.test(a) ? a : "zSoyz");
        return a;
    }

    function X(a) {
        return null != a && a.Ca === Ri ? "zSoyz" : a;
    }

    var oj = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\x85": "&#133;",
        "\xA0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function lj(a) {
        return oj[a];
    }

    var pj = {
        "\x00": "\\0 ",
        "\b": "\\8 ",
        "\t": "\\9 ",
        "\n": "\\a ",
        "\x0B": "\\b ",
        "\f": "\\c ",
        "\r": "\\d ",
        '"': "\\22 ",
        "&": "\\26 ",
        "'": "\\27 ",
        "(": "\\28 ",
        ")": "\\29 ",
        "*": "\\2a ",
        "/": "\\2f ",
        ":": "\\3a ",
        ";": "\\3b ",
        "<": "\\3c ",
        "=": "\\3d ",
        ">": "\\3e ",
        "@": "\\40 ",
        "\\": "\\5c ",
        "{": "\\7b ",
        "}": "\\7d ",
        "\x85": "\\85 ",
        "\xA0": "\\a0 ",
        "\u2028": "\\2028 ",
        "\u2029": "\\2029 "
    };

    function qj(a) {
        return pj[a];
    }

    var rj = {
        "\x00": "%00",
        "\x01": "%01",
        "\x02": "%02",
        "\x03": "%03",
        "\x04": "%04",
        "\x05": "%05",
        "\x06": "%06",
        "\x07": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\x0E": "%0E",
        "\x0F": "%0F",
        "\x10": "%10",
        "\x11": "%11",
        "\x12": "%12",
        "\x13": "%13",
        "\x14": "%14",
        "\x15": "%15",
        "\x16": "%16",
        "\x17": "%17",
        "\x18": "%18",
        "\x19": "%19",
        "\x1A": "%1A",
        "\x1B": "%1B",
        "\x1C": "%1C",
        "\x1D": "%1D",
        "\x1E": "%1E",
        "\x1F": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\x7F": "%7F",
        "\x85": "%C2%85",
        "\xA0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uFF01": "%EF%BC%81",
        "\uFF03": "%EF%BC%83",
        "\uFF04": "%EF%BC%84",
        "\uFF06": "%EF%BC%86",
        "\uFF07": "%EF%BC%87",
        "\uFF08": "%EF%BC%88",
        "\uFF09": "%EF%BC%89",
        "\uFF0A": "%EF%BC%8A",
        "\uFF0B": "%EF%BC%8B",
        "\uFF0C": "%EF%BC%8C",
        "\uFF0F": "%EF%BC%8F",
        "\uFF1A": "%EF%BC%9A",
        "\uFF1B": "%EF%BC%9B",
        "\uFF1D": "%EF%BC%9D",
        "\uFF1F": "%EF%BC%9F",
        "\uFF20": "%EF%BC%A0",
        "\uFF3B": "%EF%BC%BB",
        "\uFF3D": "%EF%BC%BD"
    };

    function sj(a) {
        return rj[a];
    }

    var kj = /[\x00\x22\x27\x3c\x3e]/g,
        tj = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g,
        uj = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        nj = /^(?!-*(?:expression|(?:moz-)?binding))(?!\s+)(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|\s+)*$/i,
        vj = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
        ij = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        jj = /</g;

    function wj(a, b, c) {
        this.g = c;
        this.c = a;
        this.f = b;
        this.b = 0;
        this.a = null;
    }

    wj.prototype.get = function () {
        if (0 < this.b) {
            this.b--;
            var a = this.a;
            this.a = a.next;
            a.next = null;
        } else a = this.c();
        return a;
    };
    function xj(a, b) {
        a.f(b);
        a.b < a.g && (a.b++, b.next = a.a, a.a = b);
    };
    function yj(a) {
        x.setTimeout(function () {
            throw a;
        }, 0);
    }

    var zj;

    function Aj() {
        var a = x.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !I("Presto") && (a = function a() {
            var a = document.createElement(la);
            a.style.display = p;
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow,
                a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(),
                d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                a = D(function (a) {
                    if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage();
                }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function postMessage() {
                    b.postMessage(c, d);
                }
            };
        });
        if ("undefined" !== typeof a && !zd()) {
            var b = new a(),
                c = {},
                d = c;
            b.port1.onmessage = function () {
                if (y(c.next)) {
                    c = c.next;
                    var a = c.pf;
                    c.pf = null;
                    a();
                }
            };
            return function (a) {
                d.next = {pf: a};
                d = d.next;
                b.port2.postMessage(0);
            };
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement(qa) ? function (a) {
            var b = document.createElement(qa);
            b.onreadystatechange = function () {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null;
            };
            document.documentElement.appendChild(b);
        } : function (a) {
            x.setTimeout(a, 0);
        };
    };
    function Bj() {
        this.b = this.a = null;
    }

    var Dj = new wj(function () {
        return new Cj();
    }, function (a) {
        a.reset();
    }, 100);
    Bj.prototype.add = function (a, b) {
        var c = Dj.get();
        c.set(a, b);
        this.b ? this.b.next = c : this.a = c;
        this.b = c;
    };
    Bj.prototype.remove = function () {
        var a = null;
        this.a && (a = this.a, this.a = this.a.next, this.a || (this.b = null), a.next = null);
        return a;
    };
    function Cj() {
        this.next = this.b = this.a = null;
    }

    Cj.prototype.set = function (a, b) {
        this.a = a;
        this.b = b;
        this.next = null;
    };
    Cj.prototype.reset = function () {
        this.next = this.b = this.a = null;
    };
    function Ej(a, b) {
        Fj || Gj();
        Hj || (Fj(), Hj = !0);
        Ij.add(a, b);
    }

    var Fj;

    function Gj() {
        if (-1 != String(x.Promise).indexOf("[native code]")) {
            var a = x.Promise.resolve(void 0);
            Fj = function Fj() {
                a.then(Jj);
            };
        } else Fj = function Fj() {
            var a = Jj;
            !ic(x.setImmediate) || x.Window && x.Window.prototype && !I(ia) && x.Window.prototype.setImmediate == x.setImmediate ? (zj || (zj = Aj()), zj(a)) : x.setImmediate(a);
        };
    }

    var Hj = !1,
        Ij = new Bj();

    function Jj() {
        for (var a; a = Ij.remove();) {
            try {
                a.a.call(a.b);
            } catch (b) {
                yj(b);
            }
            xj(Dj, a);
        }
        Hj = !1;
    };
    function Kj(a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0;
    }

    function Lj(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable;
        } catch (b) {
            return !1;
        }
    };
    function Mj(a, b) {
        this.a = 0;
        this.l = void 0;
        this.f = this.b = this.c = null;
        this.g = this.h = !1;
        if (a != z) try {
            var c = this;
            a.call(b, function (a) {
                Nj(c, 2, a);
            }, function (a) {
                Nj(c, 3, a);
            });
        } catch (d) {
            Nj(this, 3, d);
        }
    }

    function Oj() {
        this.next = this.c = this.b = this.f = this.a = null;
        this.g = !1;
    }

    Oj.prototype.reset = function () {
        this.c = this.b = this.f = this.a = null;
        this.g = !1;
    };
    var Pj = new wj(function () {
        return new Oj();
    }, function (a) {
        a.reset();
    }, 100);

    function Qj(a, b, c) {
        var d = Pj.get();
        d.f = a;
        d.b = b;
        d.c = c;
        return d;
    }

    Mj.prototype.then = function (a, b, c) {
        return Rj(this, ic(a) ? a : null, ic(b) ? b : null, c);
    };
    Kj(Mj);
    Mj.prototype.cancel = function (a) {
        0 == this.a && Ej(function () {
            var b = new Sj(a);
            Tj(this, b);
        }, this);
    };
    function Tj(a, b) {
        if (0 == a.a) if (a.c) {
            var c = a.c;
            if (c.b) {
                for (var d = 0, e = null, g = null, h = c.b; h && (h.g || (d++, h.a == a && (e = h), !(e && 1 < d))); h = h.next) {
                    e || (g = h);
                }
                e && (0 == c.a && 1 == d ? Tj(c, b) : (g ? (d = g, d.next == c.f && (c.f = d), d.next = d.next.next) : Uj(c), Vj(c, e, 3, b)));
            }
            a.c = null;
        } else Nj(a, 3, b);
    }

    function Wj(a, b) {
        a.b || 2 != a.a && 3 != a.a || Xj(a);
        a.f ? a.f.next = b : a.b = b;
        a.f = b;
    }

    function Rj(a, b, c, d) {
        var e = Qj(null, null, null);
        e.a = new Mj(function (a, h) {
            e.f = b ? function (c) {
                try {
                    var e = b.call(d, c);
                    a(e);
                } catch (m) {
                    h(m);
                }
            } : a;
            e.b = c ? function (b) {
                try {
                    var e = c.call(d, b);
                    !y(e) && b instanceof Sj ? h(b) : a(e);
                } catch (m) {
                    h(m);
                }
            } : h;
        });
        e.a.c = a;
        Wj(a, e);
        return e.a;
    }

    Mj.prototype.B = function (a) {
        this.a = 0;
        Nj(this, 2, a);
    };
    Mj.prototype.o = function (a) {
        this.a = 0;
        Nj(this, 3, a);
    };
    function Nj(a, b, c) {
        if (0 == a.a) {
            a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.a = 1;
            a: {
                var d = c,
                    e = a.B,
                    g = a.o;
                if (d instanceof Mj) {
                    Wj(d, Qj(e || z, g || null, a));
                    var h = !0;
                } else if (Lj(d)) d.then(e, g, a), h = !0; else {
                    if (jc(d)) try {
                        var k = d.then;
                        if (ic(k)) {
                            Yj(d, k, e, g, a);
                            h = !0;
                            break a;
                        }
                    } catch (l) {
                        g.call(a, l);
                        h = !0;
                        break a;
                    }
                    h = !1;
                }
            }
            h || (a.l = c, a.a = b, a.c = null, Xj(a), 3 != b || c instanceof Sj || Zj(a, c));
        }
    }

    function Yj(a, b, c, d, e) {
        function g(a) {
            k || (k = !0, d.call(e, a));
        }

        function h(a) {
            k || (k = !0, c.call(e, a));
        }

        var k = !1;
        try {
            b.call(a, h, g);
        } catch (l) {
            g(l);
        }
    }

    function Xj(a) {
        a.h || (a.h = !0, Ej(a.s, a));
    }

    function Uj(a) {
        var b = null;
        a.b && (b = a.b, a.b = b.next, b.next = null);
        a.b || (a.f = null);
        return b;
    }

    Mj.prototype.s = function () {
        for (var a; a = Uj(this);) {
            Vj(this, a, this.a, this.l);
        }
        this.h = !1;
    };
    function Vj(a, b, c, d) {
        if (3 == c && b.b && !b.g) for (; a && a.g; a = a.c) {
            a.g = !1;
        }
        if (b.a) b.a.c = null, ak(b, c, d); else try {
            b.g ? b.f.call(b.c) : ak(b, c, d);
        } catch (e) {
            bk.call(null, e);
        }
        xj(Pj, b);
    }

    function ak(a, b, c) {
        2 == b ? a.f.call(a.c, c) : a.b && a.b.call(a.c, c);
    }

    function Zj(a, b) {
        a.g = !0;
        Ej(function () {
            a.g && bk.call(null, b);
        });
    }

    var bk = yj;

    function Sj(a) {
        sc.call(this, a);
    }

    F(Sj, sc);
    Sj.prototype.name = "cancel";
    function ck(a, b, c) {
        if (ic(a)) c && (a = D(a, c)); else if (a && _typeof(a.handleEvent) == n) a = D(a.handleEvent, a); else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : x.setTimeout(a, b || 0);
    }

    function dk(a) {
        x.clearTimeout(a);
    };
    function ek(a, b, c) {
        R.call(this);
        this.b = a;
        this.f = b || 0;
        this.c = c;
        this.a = D(this.uh, this);
    }

    F(ek, R);
    w = ek.prototype;
    w.ea = 0;
    w.F = function () {
        ek.m.F.call(this);
        this.stop();
        delete this.b;
        delete this.c;
    };
    w.start = function (a) {
        this.stop();
        this.ea = ck(this.a, y(a) ? a : this.f);
    };
    w.stop = function () {
        0 != this.ea && dk(this.ea);
        this.ea = 0;
    };
    w.uh = function () {
        this.ea = 0;
        this.b && this.b.call(this.c);
    };
    function fk(a, b, c, d, e, g, h, k, l) {
        var m = gk(c);
        var q = Sf(a);
        var t = Uf(a);
        q = new Hf(q.x, q.y, t.width, t.height);
        if (t = Rf(a)) {
            var v = new Hf(t.left, t.top, t.right - t.left, t.bottom - t.top),
                t = Math.max(q.left, v.left),
                G = Math.min(q.left + q.width, v.left + v.width);
            if (t <= G) {
                var E = Math.max(q.top, v.top),
                    v = Math.min(q.top + q.height, v.top + v.height);
                E <= v && (q.left = t, q.top = E, q.width = G - t, q.height = v - E);
            }
        }
        t = Le(a);
        E = Le(c);
        t.a != E.a && (G = t.a.body, E = Tf(G, Ff(E)), E = Je(E, Sf(G)), !J || Td(9) || Ve(t.a) || (E = Je(E, We(t.a))), q.left += E.x, q.top += E.y);
        a = hk(a, b);
        b = q.left;
        a & 4 ? b += q.width : a & 2 && (b += q.width / 2);
        b = new N(b, q.top + (a & 1 ? q.height : 0));
        b = Je(b, m);
        e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
        if (h) if (l) var ka = l; else if (ka = Rf(c)) ka.top -= m.y, ka.right -= m.x, ka.bottom -= m.y, ka.left -= m.x;
        return ik(b, c, d, g, ka, h, k);
    }

    function gk(a) {
        if (a = a.offsetParent) {
            var b = "HTML" == a.tagName || "BODY" == a.tagName;
            if (!b || "static" != Lf(a, Hb)) {
                var c = Sf(a);
                b || (b = (b = Yf(a)) && K ? -a.scrollLeft : !b || Kd && M("8") || Lf(a, "overflowX") == ac ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft, c = Je(c, new N(b, a.scrollTop)));
            }
        }
        return c || new N();
    }

    function ik(a, b, c, d, e, g, h) {
        a = Ie(a);
        var k = hk(b, c);
        c = Uf(b);
        h = h ? new Ke(h.width, h.height) : new Ke(c.width, c.height);
        a = Ie(a);
        h = new Ke(h.width, h.height);
        var l = 0;
        if (d || 0 != k) k & 4 ? a.x -= h.width + (d ? d.right : 0) : k & 2 ? a.x -= h.width / 2 : d && (a.x += d.left), k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        if (g) {
            if (e) {
                d = a;
                k = h;
                l = 0;
                65 == (g & 65) && (d.x < e.left || d.x >= e.right) && (g &= -2);
                132 == (g & 132) && (d.y < e.top || d.y >= e.bottom) && (g &= -5);
                d.x < e.left && g & 1 && (d.x = e.left, l |= 1);
                if (g & 16) {
                    var m = d.x;
                    d.x < e.left && (d.x = e.left, l |= 4);
                    d.x + k.width > e.right && (k.width = Math.min(e.right - d.x, m + k.width - e.left), k.width = Math.max(k.width, 0), l |= 4);
                }
                d.x + k.width > e.right && g & 1 && (d.x = Math.max(e.right - k.width, e.left), l |= 1);
                g & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
                d.y < e.top && g & 4 && (d.y = e.top, l |= 2);
                g & 32 && (m = d.y, d.y < e.top && (d.y = e.top, l |= 8), d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, m + k.height - e.top), k.height = Math.max(k.height, 0), l |= 8));
                d.y + k.height > e.bottom && g & 4 && (d.y = Math.max(e.bottom - k.height, e.top), l |= 2);
                g & 8 && (l |= (d.y < e.top ? 64 : 0) | (d.y + k.height > e.bottom ? 128 : 0));
                e = l;
            } else e = 256;
            l = e;
        }
        g = new Hf(0, 0, 0, 0);
        g.left = a.x;
        g.top = a.y;
        g.width = h.width;
        g.height = h.height;
        e = l;
        if (e & 496) return e;
        Mf(b, new N(g.left, g.top));
        h = new Ke(g.width, g.height);
        c == h || c && h && c.width == h.width && c.height == h.height || (c = h, a = Ve(Le(O(b)).a), !J || M("10") || a && M("8") ? cg(b, c, Ia) : (h = b.style, a ? (a = dg(b), b = eg(b), h.pixelWidth = c.width - b.left - a.left - a.right - b.right, h.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (h.pixelWidth = c.width, h.pixelHeight = c.height)));
        return e;
    }

    function hk(a, b) {
        return (b & 8 && Yf(a) ? b ^ 4 : b) & -9;
    };
    function jk() {
    }

    jk.prototype.b = cc();
    function kk() {
        this.b = [];
        this.a = {};
        this.f = !1;
        this.l = 1;
        this.g = {};
        this.c = null;
        this.h = "";
        S(window, "beforeunload", this.Fi, !1, this);
    }

    fc(kk);
    function lk(a, b, c) {
        if (null == b) return "1";
        switch (A(b)) {
            case Rb:
                return a = b, !(64 < a.length) || null != c && c || (a = a.substr(0, 64)), Ac(a);
            case Cb:
                return "" + b;
            case "boolean":
                return b ? "1" : "0";
            case Da:
                var d = [],
                    e;
                for (e in b) {
                    d.push(lk(a, b[e], c));
                }
                return d.join(",");
            case Db:
                d = [];
                for (e in b) {
                    d.push([Ac(e), lk(a, b[e], c || "smtalt" == e)].join("="));
                }
                return d.join(",");
            default:
                return "";
        }
    }

    w = kk.prototype;
    w.log = function (a, b) {
        this.b.push([a, b]);
        this.f || (this.f = !0, ck(this.bg, 0, this));
    };
    w.bg = function () {
        for (var a = 0; a < this.b.length; a++) {
            var b = this.b[a];
            mk(this, b[0], b[1]);
        }
        this.b = [];
        this.f = !1;
    };
    function mk(a, b, c) {
        nk(a, a.h + "/gen204?" + (a.c ? ["client=", a.c, "&"].join("") : "") + [Ac(b), lk(a, c, "smtalt" == b)].join("="));
    }

    function nk(a, b) {
        var c = new Image(),
            d = a.l++;
        a.g[d] = c;
        c.onload = c.onerror = function () {
            delete kk.ka().g[d];
        };
        c.src = b;
        c = null;
    }

    w.Ad = function (a, b, c, d) {
        var e = 0,
            g = null;
        a in this.a && (g = this.a[a], e = g[0], g = g[1]);
        if (A(c) == Db) {
            A(g) != Db && (g = {});
            for (var h in c) {
                g[h] = ok(h in g ? g[h] : null, c[h], d);
            }
        } else g = ok(g, c, d);
        this.a[a] = [e, g];
        dk(this.a[a][0]);
        b = ck(D(this.wg, this, a), b);
        this.a[a][0] = b;
    };
    w.wg = function (a) {
        mk(this, a, this.a[a][1]);
        a in this.a && (dk(this.a[a][0]), delete this.a[a]);
    };
    function ok(a, b, c) {
        null != b || (b = 1);
        c == ya ? (isNaN(a) && (a = parseInt(a, 10)), isNaN(b) && (b = parseInt(b, 10)), a += b) : a = b;
        return a;
    }

    w.Fi = function () {
        this.bg();
        for (var a in this.a) {
            0 != this.a[a] && this.wg(a);
        }
    };
    function pk() {
        this.a = [];
    }

    pk.prototype.add = function (a) {
        this.a.push(a);
    };
    function qk() {
        this.a = [];
    }

    F(qk, pk);
    fc(qk);
    qk.prototype.add = function (a) {
        if (a) for (; a();) {
        }
    };
    function rk(a) {
        this.a = [];
        this.b = .5;
        sk(this, a);
        this.f = 0;
        this.c = !0;
        this.g = D(this.h, this);
    }

    F(rk, pk);
    function sk(a, b) {
        1 < b ? a.b = 1 : .001 > b ? a.b = .001 : b && (a.b = b);
    }

    rk.prototype.add = function (a) {
        rk.m.add.call(this, a);
        this.c && tk(this);
    };
    function tk(a) {
        a.c = !1;
        window.setTimeout(a.g, Math.min(a.f, 5E3));
    }

    rk.prototype.h = function () {
        var a = new Date().getTime();
        do {
            this.a.length && (this.a[0] && this.a[0]() || this.a.shift());
            var b = !!this.a.length;
            var c = 95 * this.b + 5;
            var d = new Date().getTime() - a;
        } while (b && d < c);
        this.f = Math.ceil(d * (1 / this.b - 1)) + 1;
        b ? tk(this) : this.c = !0;
    };
    function uk(a, b) {
        this.B = a || null;
        this.C = b || qk.ka();
        this.l = this.h = this.G = null;
        this.f = this.c = !1;
        this.g = null;
        this.a = [];
        this.b = 0;
    }

    function vk() {
    }

    function wk() {
    }

    function xk(a, b) {
        a.c || (a.G = b);
    }

    function yk(a, b, c) {
        a.h = c ? D(b, c) : b;
    }

    function zk(a, b, c) {
        a.l = c ? D(b, c) : b;
    }

    function Ak(a, b) {
        a.c || (a.c = !0, a.o = b, a.b++, a.g = a.G, a.s());
    }

    uk.prototype.stop = function () {
        this.b++;
        this.c = !1;
        this.a = [];
    };
    function Bk(a) {
        if (!a.c) return null;
        for (var b = !1, c = 0; c < a.a.length; ++c) {
            if (a.a[c].target === a) {
                a.a[c].ready = !1;
                a.a[c].Jg = a.b + 1;
                b = !0;
                break;
            }
        }
        b || a.a.push({target: a, ready: !1, Jg: a.b + 1});
        return D(a.s, a, a, a.b + 1);
    }

    function Ck(a) {
        if (!a.c) return !0;
        for (var b = 0; b < a.a.length; ++b) {
            if (a.a[b].target === a && a.a[b].Jg == a.b) return a.a[b].ready;
        }
        return !0;
    }

    uk.prototype.s = function (a, b) {
        if (this.c) {
            if (a) for (var c = 0; c < this.a.length; ++c) {
                if (this.a[c].target === a) {
                    this.a[c].ready = !0;
                    break;
                }
            }
            this.f || this.C.add(D(this.Y, this, b || this.b));
        }
    };
    uk.prototype.Y = function (a) {
        if (this.b != a) return !1;
        a = this.g;
        if (a == wk) return this.stop(), this.h && this.h.call(this.B, this, this.o), !1;
        this.f = !0;
        try {
            var b = a.call(this.B, this, this.o);
            if (!b) throw Error();
        } catch (c) {
            this.stop();
            if (this.l) this.l.call(this.B, c, this, this.o); else throw c;
            return !1;
        } finally {
            this.f = !1;
        }
        b != vk && (this.g = b, this.b++, this.s());
        return !1;
    };
    function Dk() {
        Yg.call(this);
        this.a = 0;
        this.l = this.c = null;
    }

    F(Dk, Yg);
    Dk.prototype.f = function () {
        this.Ma("begin");
    };
    Dk.prototype.g = function () {
        this.Ma("end");
    };
    Dk.prototype.wb = function () {
        this.Ma("stop");
    };
    Dk.prototype.Ma = function (a) {
        this.dispatchEvent(a);
    };
    function Ek(a, b) {
        B(b) || (b = [b]);
        b = Wc(b, function (a) {
            return C(a) ? a : a.$j + " " + a.duration + "s " + a.timing + " " + a.ab + "s";
        });
        P(a, Yb, b.join(","));
    }

    var Fk = function (a) {
        var b = !1,
            c;
        return function () {
            b || (c = a(), b = !0);
            return c;
        };
    }(function () {
        if (J) return M("10.0");
        var a = document.createElement(f),
            b = L ? "-webkit" : K ? "-moz" : J ? "-ms" : Id ? "-o" : null,
            c = {transition: Eb};
        b && (c[b + "-transition"] = Eb);
        b = Ee("div", {style: c});
        a.innerHTML = Ae(b);
        a = a.firstChild;
        b = a.style[Qc(Yb)];
        return "" != ("undefined" !== typeof b ? b : a.style[If(a, Yb)] || "");
    });

    function Gk(a, b, c, d, e) {
        Dk.call(this);
        this.A = a;
        this.s = b;
        this.B = c;
        this.b = d;
        this.o = B(e) ? e : [e];
    }

    F(Gk, Dk);
    w = Gk.prototype;
    w.play = function () {
        if (1 == this.a) return !1;
        this.f();
        this.Ma("play");
        this.c = qc();
        this.a = 1;
        if (Fk()) return P(this.A, this.B), this.h = ck(this.Hi, void 0, this), !0;
        this.Ze(!1);
        return !1;
    };
    w.Hi = function () {
        Uf(this.A);
        Ek(this.A, this.o);
        P(this.A, this.b);
        this.h = ck(D(this.Ze, this, !1), 1E3 * this.s);
    };
    w.stop = function () {
        1 == this.a && this.Ze(!0);
    };
    w.Ze = function (a) {
        P(this.A, Yb, "");
        dk(this.h);
        P(this.A, this.b);
        this.l = qc();
        this.a = 0;
        a ? this.wb() : this.Ma(Wa);
        this.g();
    };
    w.F = function () {
        this.stop();
        Gk.m.F.call(this);
    };
    function Hk(a, b) {
        Yg.call(this);
        this.h = new Ug(this);
        this.Sb(a || null);
        b && (this.fc = b);
    }

    F(Hk, Yg);
    w = Hk.prototype;
    w.A = null;
    w.ic = !0;
    w.mf = null;
    w.Xb = !1;
    w.xe = -1;
    w.fc = Vb;
    w.j = r("A");
    w.Sb = function (a) {
        Ik(this);
        this.A = a;
    };
    w.Gc = function (a) {
        Ik(this);
        this.ic = a;
    };
    function Ik(a) {
        if (a.Xb) throw Error("Can not change this state of the popup while showing.");
    }

    w.N = r("Xb");
    w.J = function (a) {
        this.La && this.La.stop();
        this.qa && this.qa.stop();
        if (a) {
            if (!this.Xb && this.ke()) {
                if (!this.A) throw Error("Caller must call setElement before trying to show the popup");
                this.kb();
                a = O(this.A);
                if (this.ic) if (this.h.w(a, wb, this.He, !0), J) {
                    try {
                        var b = a.activeElement;
                    } catch (d) {
                    }
                    for (; b && b.nodeName == la;) {
                        try {
                            var c = uf(b);
                        } catch (d) {
                            break;
                        }
                        a = c;
                        b = a.activeElement;
                    }
                    this.h.w(a, wb, this.He, !0);
                    this.h.w(a, "deactivate", this.jg);
                } else this.h.w(a, Ha, this.jg);
                this.fc == Vb ? (this.A.style.visibility = ac, Q(this.A, !0)) : this.fc == Bb && this.kb();
                this.Xb = !0;
                this.xe = qc();
                this.La ? (Ng(this.La, "end", this.lg, !1, this), this.La.play()) : this.lg();
            }
        } else Jk(this);
    };
    w.kb = z;
    function Jk(a, b) {
        a.Xb && a.dispatchEvent({
            type: "beforehide",
            target: b
        }) && (a.h && Xg(a.h), a.Xb = !1, qc(), a.qa ? (Ng(a.qa, "end", pc(a.qf, b), !1, a), a.qa.play()) : a.qf(b));
    }

    w.qf = function (a) {
        this.fc == Vb ? this.ei() : this.fc == Bb && (this.A.style.top = "-10000px");
        this.Ie(a);
    };
    w.ei = function () {
        this.A.style.visibility = mb;
        Q(this.A, !1);
    };
    w.ke = function () {
        return this.dispatchEvent("beforeshow");
    };
    w.lg = function () {
        this.dispatchEvent("show");
    };
    w.Ie = function (a) {
        this.dispatchEvent({type: nb, target: a});
    };
    w.He = function (a) {
        a = a.target;
        pf(this.A, a) || Kk(this, a) || 150 > qc() - this.xe || Jk(this, a);
    };
    w.jg = function (a) {
        var b = O(this.A);
        if ("undefined" != typeof document.activeElement) {
            if (a = b.activeElement, !a || pf(this.A, a) || "BODY" == a.tagName) return;
        } else if (a.target != b) return;
        150 > qc() - this.xe || Jk(this);
    };
    function Kk(a, b) {
        return Xc(a.mf || [], function (a) {
            return b === a || pf(a, b);
        });
    }

    w.F = function () {
        Hk.m.F.call(this);
        this.h.M();
        ng(this.La);
        ng(this.qa);
        delete this.A;
        delete this.h;
        delete this.mf;
    };
    function Lk(a, b) {
        this.s = b || void 0;
        Hk.call(this, a);
    }

    F(Lk, Hk);
    Lk.prototype.kb = function () {
        if (this.s) {
            var a = !this.N() && this.fc != Bb,
                b = this.j();
            a && (b.style.visibility = mb, Q(b, !0));
            this.s.b(b, 8, this.Be);
            a && Q(b, !1);
        }
    };
    function Mk(a, b) {
        Lk.call(this, a);
        this.c = b;
        this.a = 0;
        this.b = null;
        this.f = 0;
        this.J(!0);
        this.J(!1);
        H(this.j(), "round-trip-popup");
        H(this.c, "round-trip-content");
    }

    F(Mk, Lk);
    Mk.prototype.B = function () {
        dk(this.f);
        1 == this.a ? Ng(this.b, Wa, D(this.B, this)) : 0 == this.a && (this.f = ck(D(this.l, this, -1), 200));
    };
    Mk.prototype.l = function (a) {
        if (this.a != a && (0 != this.a || !(this.N() && 1 == a || !this.N() && -1 == a))) {
            var b = this.N();
            this.J(!0);
            var c = -Math.ceil(Uf(this.c).width);
            Yf(this.j()) && (c = -c);
            var d = 1 == a ? c : 0,
                c = 1 == a ? 0 : c;
            this.J(b);
            if (Fk()) {
                b = .2;
                if (0 != this.a) {
                    var e = parseInt(Kf(this.c, "left"), 10);
                    this.g();
                    b *= (c - e) / (c - d);
                    d = e;
                }
                this.a = a;
                this.b = new Gk(this.c, b, {left: d + "px"}, {left: c + "px"}, "left " + b + "s");
                this.b.play();
                Ng(this.b, Wa, D(this.g, this));
                -1 == a ? Ng(this.b, Wa, D(this.J, this, !1)) : this.J(!0);
            } else P(this.c, "left", c + "px"), this.J(1 == a ? !0 : !1);
        }
    };
    Mk.prototype.g = function () {
        0 != this.a && (this.b.stop(), ck(D(Qg, this, this.b)), this.a = 0, this.b = null);
    };
    function Nk(a, b) {
        if (null == a || null == b) return null == a == (null == b);
        if (a.constructor != Array && a.constructor != Object) throw Error("Invalid object type passed into jsproto.areObjectsEqual()");
        if (a === b) return !0;
        if (a.constructor != b.constructor) return !1;
        for (var c in a) {
            if (!(c in b && Ok(a[c], b[c]))) return !1;
        }
        for (var d in b) {
            if (!(d in a)) return !1;
        }
        return !0;
    }

    function Ok(a, b) {
        if (a === b || !(!0 !== a && 1 !== a || !0 !== b && 1 !== b) || !(!1 !== a && 0 !== a || !1 !== b && 0 !== b)) return !0;
        if (a instanceof Object && b instanceof Object) {
            if (!Nk(a, b)) return !1;
        } else return !1;
        return !0;
    };
    var Pk = I("Firefox"),
        Qk = Dd() || I("iPod"),
        Rk = I("iPad"),
        Sk = I("Android") && !(Ad() || I("Firefox") || I(oa) || I("Silk")),
        Tk = Ad(),
        Uk = I("Safari") && !(Ad() || I("Coast") || I(oa) || I(ia) || I("Silk") || I("Android")) && !(Dd() || I("iPad") || I("iPod"));

    function Vk(a) {
        this.data = a || [];
    }

    function Wk(a, b, c) {
        a = a.data[b];
        return null != a ? a : c;
    }

    function Xk(a, b) {
        return !!Wk(a, b, void 0);
    }

    function Yk(a, b) {
        return Wk(a, b, 0);
    }

    function Zk(a, b) {
        return Wk(a, b, "");
    }

    function $k(a, b, c) {
        a = a.data;
        a[b] || (a[b] = []);
        return a[b][c];
    }

    function Y(a, b) {
        return a.data[b] ? a.data[b].length : 0;
    };
    function al(a) {
        this.data = a || [];
    }

    F(al, Vk);
    function bl(a) {
        this.data = a || [];
    }

    F(bl, Vk);
    function cl(a) {
        this.data = a || [];
    }

    F(cl, Vk);
    function dl(a) {
        this.data = a || [];
    }

    F(dl, Vk);
    function el(a) {
        this.data = a || [];
    }

    F(el, Vk);
    function fl(a, b) {
        return new bl($k(a, 2, b));
    }

    function gl(a, b) {
        return new al($k(a, 5, b));
    };
    function hl() {
        this.A = null;
        this.a = Ze(f, "gt-hl-layer", document.createTextNode(""));
        this.b = null;
        this.A && (gf(this.a, this.A), il(this));
    }

    function jl(a, b, c, d, e) {
        var g = d || "gt-hl-text",
            h = a.A && (a.A.value || Bf(a.A));
        il(a);
        ff(a.a);
        if (b != c || e) 0 < b && (d = h.substring(0, b), kl(a.a, d, 0, e)), b < c && (d = h.substring(b, c), g = Ze(ra, g), kl(g, d, b, e), a.a.appendChild(g)), c < h.length && (d = h.substring(c), kl(a.a, d, c, e));
    }

    function il(a) {
        var b = a.A;
        var c = O(b),
            d = J && b.currentStyle;
        d && Ve(Le(c).a) && d.width != Ea && d.height != Ea && !d.boxSizing ? (c = fg(b, d.width, "width", "pixelWidth"), b = fg(b, d.height, "height", "pixelHeight"), b = new Ke(c, b)) : (d = ag(b), c = dg(b), b = eg(b), b = new Ke(d.width - b.left - c.left - c.right - b.right, d.height - b.top - c.top - c.bottom - b.bottom));
        bg(a.a, b);
        c = Sf(a.A);
        b = a.a;
        var d = c.x,
            c = c.y,
            e = Sf(b);
        d instanceof N && (c = d.y, d = d.x);
        Mf(b, b.offsetLeft + (d - e.x), b.offsetTop + (Number(c) - e.y));
        b = dg(a.A);
        P(a.a, Fb, b.left + "px");
        P(a.a, Gb, b.right + "px");
        a.a.dir = a.A.dir;
    }

    function kl(a, b, c, d) {
        for (var e = d || [], g = 0, h; h = e[g]; g++) {
            if (!(0 > h.oc - c)) {
                if (h.oc - c >= b.length) break;
                0 < h.oc - c && (d = b.substring(0, h.oc - c), ll(a, d));
                var k = h.className || "gt-hl-text";
                d = b.substring(h.oc - c, h.$e - c);
                k = Ze(ra, k);
                ll(k, d);
                a.appendChild(k);
                b = b.substring(h.$e - c);
                c = h.$e;
            }
        }
        b && ll(a, b);
    }

    function ll(a, b) {
        b = b.replace(/(\r\n|\r|\n)/g, "\n").split("\n");
        for (var c = 0, d = b.length; c < d; c++) {
            if (0 < c) {
                var e = Ze("BR");
                a.appendChild(e);
            }
            a.appendChild(document.createTextNode(String(b[c])));
        }
    };
    function nl() {
        R.call(this);
    }

    F(nl, R);
    nl.prototype.restore = function (a) {
        var b = this.b();
        a || this.M();
        return b;
    };
    function ol(a, b, c, d, e) {
        this.g = !!b;
        this.node = null;
        this.a = 0;
        this.o = !1;
        this.G = !c;
        a && pl(this, a, d);
        this.f = void 0 != e ? e : this.a || 0;
        this.g && (this.f *= -1);
    }

    F(ol, hi);
    function pl(a, b, c, d) {
        if (a.node = b) a.a = hc(c) ? c : 1 != a.node.nodeType ? 0 : a.g ? -1 : 1;
        hc(d) && (a.f = d);
    }

    ol.prototype.h = function () {
        var a = this.g ? -1 : 1;
        this.a == a && (this.a = -1 * a, this.f += this.a * (this.g ? -1 : 1));
    };
    ol.prototype.next = function () {
        if (this.o) {
            if (!this.node || this.G && 0 == this.f) throw gi;
            var a = this.node;
            var b = this.g ? -1 : 1;
            if (this.a == b) {
                var c = this.g ? a.lastChild : a.firstChild;
                c ? pl(this, c) : pl(this, a, -1 * b);
            } else (c = this.g ? a.previousSibling : a.nextSibling) ? pl(this, c) : pl(this, a.parentNode, -1 * b);
            this.f += this.a * (this.g ? -1 : 1);
        } else this.o = !0;
        a = this.node;
        if (!this.node) throw gi;
        return a;
    };
    ol.prototype.splice = function (a) {
        var b = this.node,
            c = this.g ? 1 : -1;
        this.a == c && (this.a = -1 * c, this.f += this.a * (this.g ? -1 : 1));
        this.g = !this.g;
        ol.prototype.next.call(this);
        this.g = !this.g;
        for (var c = gc(arguments[0]) ? arguments[0] : arguments, d = c.length - 1; 0 <= d; d--) {
            hf(c[d], b);
        }
        jf(b);
    };
    function ql() {
    }

    function rl(a) {
        if (a.getSelection) return a.getSelection();
        a = a.document;
        var b = a.selection;
        if (b) {
            try {
                var c = b.createRange();
                if (c.parentElement) {
                    if (c.parentElement().document != a) return null;
                } else if (!c.length || c.item(0).document != a) return null;
            } catch (d) {
                return null;
            }
            return b;
        }
        return null;
    }

    function sl(a) {
        for (var b = [], c = 0, d = a.vc(); c < d; c++) {
            b.push(a.Pb(c));
        }
        return b;
    }

    function tl(a) {
        return a.Dc() ? a.Da() : a.Pa();
    }

    function ul(a) {
        return a.Dc() ? a.Ea() : a.Qa();
    }

    ql.prototype.Dc = u(!1);
    function vl(a, b) {
        ol.call(this, a, b, !0);
    }

    F(vl, ol);
    function wl(a, b, c, d, e) {
        this.c = this.b = null;
        this.l = 0;
        if (a) {
            this.b = a;
            this.c = c;
            this.l = d;
            if (1 == a.nodeType && "BR" != a.tagName) if (a = a.childNodes, b = a[b]) this.b = b; else {
                a.length && (this.b = Sc(a));
                var g = !0;
            }
            1 == c.nodeType && ((this.c = c.childNodes[d]) ? this.l = 0 : this.c = c);
        }
        ol.call(this, e ? this.c : this.b, e, !0);
        if (g) try {
            this.next();
        } catch (h) {
            if (h != gi) throw h;
        }
    }

    F(wl, vl);
    wl.prototype.B = r("b");
    wl.prototype.s = function () {
        return this.o && this.node == this.c && (!this.l || 1 != this.a);
    };
    wl.prototype.next = function () {
        if (this.s()) throw gi;
        return wl.m.next.call(this);
    };
    wl.prototype.h = function () {
        wl.m.h.apply(this);
        if (pf(this.node, this.c)) throw gi;
    };
    function xl() {
    }

    function yl(a, b) {
        b = b.pc();
        try {
            return 0 <= a.$a(b, 0, 0) && 0 >= a.$a(b, 1, 1);
        } catch (c) {
            if (!J) throw c;
            return !1;
        }
    }

    xl.prototype.Ia = function () {
        return new wl(this.Ra(), this.ib(), this.hb(), this.qb());
    };
    function zl(a) {
        this.a = a;
    }

    F(zl, xl);
    function Al(a) {
        var b = O(a).createRange();
        if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length); else if (Bl(a)) {
            for (var c, d = a; (c = d.firstChild) && Bl(c);) {
                d = c;
            }
            b.setStart(d, 0);
            for (d = a; (c = d.lastChild) && Bl(c);) {
                d = c;
            }
            b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length);
        } else c = a.parentNode, a = Tc(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
        return b;
    }

    function Cl(a, b, c, d) {
        var e = O(a).createRange();
        e.setStart(a, b);
        e.setEnd(c, d);
        return e;
    }

    w = zl.prototype;
    w.pc = r("a");
    w.ce = function () {
        return this.a.commonAncestorContainer;
    };
    w.Ra = function () {
        return this.a.startContainer;
    };
    w.ib = function () {
        return this.a.startOffset;
    };
    w.hb = function () {
        return this.a.endContainer;
    };
    w.qb = function () {
        return this.a.endOffset;
    };
    w.$a = function (a, b, c) {
        return this.a.compareBoundaryPoints(1 == c ? 1 == b ? x.Range.START_TO_START : x.Range.START_TO_END : 1 == b ? x.Range.END_TO_START : x.Range.END_TO_END, a);
    };
    w.Sa = function () {
        return this.a.collapsed;
    };
    w.na = function () {
        return this.a.toString();
    };
    w.select = function (a) {
        var b = Ye(O(this.Ra()));
        this.Fc(b.getSelection(), a);
    };
    w.Fc = function (a) {
        a.removeAllRanges();
        a.addRange(this.a);
    };
    function Dl(a) {
        this.a = a;
    }

    F(Dl, zl);
    Dl.prototype.Fc = function (a, b) {
        !b || this.Sa() ? Dl.m.Fc.call(this, a, b) : (a.collapse(this.hb(), this.qb()), a.extend(this.Ra(), this.ib()));
    };
    function El(a) {
        this.c = this.b = this.h = null;
        this.g = this.f = -1;
        this.a = a;
    }

    F(El, xl);
    function Fl(a) {
        var b = O(a).body.createTextRange();
        if (1 == a.nodeType) b.moveToElementText(a), Bl(a) && !a.childNodes.length && b.collapse(!1); else {
            for (var c = 0, d = a; d = d.previousSibling;) {
                var e = d.nodeType;
                if (3 == e) c += d.length; else if (1 == e) {
                    b.moveToElementText(d);
                    break;
                }
            }
            d || b.moveToElementText(a.parentNode);
            b.collapse(!d);
            c && b.move(Ma, c);
            b.moveEnd(Ma, a.length);
        }
        return b;
    }

    w = El.prototype;
    w.pc = r("a");
    w.ce = function () {
        if (!this.h) {
            var a = this.a.text,
                b = this.a.duplicate(),
                c = a.replace(/ +$/, "");
            (c = a.length - c.length) && b.moveEnd(Ma, -c);
            c = b.parentElement();
            b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
            if (this.Sa() && 0 < b) return this.h = c;
            for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length;) {
                c = c.parentNode;
            }
            for (; 1 == c.childNodes.length && c.innerText == Gl(c.firstChild) && Bl(c.firstChild);) {
                c = c.firstChild;
            }
            0 == a.length && (c = Hl(this, c));
            this.h = c;
        }
        return this.h;
    };
    function Hl(a, b) {
        for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
            var g = c[d];
            if (Bl(g)) {
                var h = Fl(g),
                    k = h.htmlText != g.outerHTML;
                if (a.Sa() && k ? 0 <= a.$a(h, 1, 1) && 0 >= a.$a(h, 1, 0) : a.a.inRange(h)) return Hl(a, g);
            }
        }
        return b;
    }

    w.Ra = function () {
        this.b || (this.b = Il(this, 1), this.Sa() && (this.c = this.b));
        return this.b;
    };
    w.ib = function () {
        0 > this.f && (this.f = Jl(this, 1), this.Sa() && (this.g = this.f));
        return this.f;
    };
    w.hb = function () {
        if (this.Sa()) return this.Ra();
        this.c || (this.c = Il(this, 0));
        return this.c;
    };
    w.qb = function () {
        if (this.Sa()) return this.ib();
        0 > this.g && (this.g = Jl(this, 0), this.Sa() && (this.f = this.g));
        return this.g;
    };
    w.$a = function (a, b, c) {
        return this.a.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a);
    };
    function Il(a, b, c) {
        c = c || a.ce();
        if (!c || !c.firstChild) return c;
        for (var d = 1 == b, e = 0, g = c.childNodes.length; e < g; e++) {
            var h = d ? e : g - e - 1,
                k = c.childNodes[h];
            try {
                var l = Kl(k);
            } catch (q) {
                continue;
            }
            var m = l.pc();
            if (a.Sa()) {
                if (!Bl(k)) {
                    if (0 == a.$a(m, 1, 1)) {
                        a.f = a.g = h;
                        break;
                    }
                } else {
                    if (yl(l, a)) return Il(a, b, k);
                }
            } else {
                if (yl(a, l)) {
                    if (!Bl(k)) {
                        d ? a.f = h : a.g = h + 1;
                        break;
                    }
                    return Il(a, b, k);
                }
                if (0 > a.$a(m, 1, 0) && 0 < a.$a(m, 0, 1)) return Il(a, b, k);
            }
        }
        return c;
    }

    function Jl(a, b) {
        var c = 1 == b,
            d = c ? a.Ra() : a.hb();
        if (1 == d.nodeType) {
            for (var d = d.childNodes, e = d.length, g = c ? 1 : -1, h = c ? 0 : e - 1; 0 <= h && h < e; h += g) {
                var k = d[h];
                if (!Bl(k) && 0 == a.a.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), Kl(k).pc())) return c ? h : h + 1;
            }
            return -1 == h ? 0 : h;
        }
        a = a.a.duplicate();
        b = Fl(d);
        a.setEndPoint(c ? "EndToEnd" : "StartToStart", b);
        a = a.text.length;
        return c ? d.length - a : a;
    }

    function Gl(a) {
        return 3 == a.nodeType ? a.nodeValue : a.innerText;
    }

    w.Sa = function () {
        return 0 == this.a.compareEndPoints("StartToEnd", this.a);
    };
    w.na = function () {
        return this.a.text;
    };
    w.select = function () {
        this.a.select();
    };
    function Ll(a) {
        this.a = a;
    }

    F(Ll, zl);
    Ll.prototype.Fc = function (a) {
        a.collapse(this.Ra(), this.ib());
        this.hb() == this.Ra() && this.qb() == this.ib() || a.extend(this.hb(), this.qb());
        0 == a.rangeCount && a.addRange(this.a);
    };
    function Ml(a) {
        this.a = a;
    }

    F(Ml, zl);
    Ml.prototype.$a = function (a, b, c) {
        return M("528") ? Ml.m.$a.call(this, a, b, c) : this.a.compareBoundaryPoints(1 == c ? 1 == b ? x.Range.START_TO_START : x.Range.END_TO_START : 1 == b ? x.Range.START_TO_END : x.Range.END_TO_END, a);
    };
    Ml.prototype.Fc = function (a, b) {
        b ? a.setBaseAndExtent(this.hb(), this.qb(), this.Ra(), this.ib()) : a.setBaseAndExtent(this.Ra(), this.ib(), this.hb(), this.qb());
    };
    function Nl(a) {
        return ae ? new El(a, O(a.parentElement())) : L ? new Ml(a) : K ? new Dl(a) : Id ? new Ll(a) : new zl(a);
    }

    function Kl(a) {
        if (J && !Td(9)) {
            var b = new El(Fl(a));
            if (Bl(a)) {
                for (var c, d = a; (c = d.firstChild) && Bl(c);) {
                    d = c;
                }
                b.b = d;
                b.f = 0;
                for (d = a; (c = d.lastChild) && Bl(c);) {
                    d = c;
                }
                b.c = d;
                b.g = 1 == d.nodeType ? d.childNodes.length : d.length;
                b.h = a;
            } else b.b = b.c = b.h = a.parentNode, b.f = Tc(b.h.childNodes, a), b.g = b.f + 1;
            a = b;
        } else a = L ? new Ml(Al(a)) : K ? new Dl(Al(a)) : Id ? new Ll(Al(a)) : new zl(Al(a));
        return a;
    }

    function Bl(a) {
        return df(a) || 3 == a.nodeType;
    };
    function Ol() {
        this.a = this.c = this.f = this.b = this.h = null;
        this.g = !1;
    }

    F(Ol, ql);
    function Pl(a, b) {
        var c = new Ol();
        c.h = a;
        c.g = !!b;
        return c;
    }

    function Ql(a, b, c, d) {
        var e = new Ol();
        e.g = Rl(a, b, c, d);
        if (nf(a) && !df(a)) {
            var g = a.parentNode;
            b = Tc(g.childNodes, a);
            a = g;
        }
        nf(c) && !df(c) && (g = c.parentNode, d = Tc(g.childNodes, c), c = g);
        e.g ? (e.b = c, e.f = d, e.c = a, e.a = b) : (e.b = a, e.f = b, e.c = c, e.a = d);
        return e;
    }

    w = Ol.prototype;
    w.Xc = function () {
        return Sl(this).pc();
    };
    w.vc = u(1);
    w.Pb = function () {
        return this;
    };
    function Sl(a) {
        var b;
        if (!(b = a.h)) {
            b = a.Da();
            var c = a.Ea(),
                d = a.Pa(),
                e = a.Qa();
            if (J && !Td(9)) {
                var g = b,
                    h = c,
                    k = d,
                    l = e,
                    m = !1;
                1 == g.nodeType && (h = g.childNodes[h], m = !h, g = h || g.lastChild || g, h = 0);
                var q = Fl(g);
                h && q.move(Ma, h);
                g == k && h == l ? q.collapse(!0) : (m && q.collapse(!1), m = !1, 1 == k.nodeType && (k = (h = k.childNodes[l]) || k.lastChild || k, l = 0, m = !h), g = Fl(k), g.collapse(!m), l && g.moveEnd(Ma, l), q.setEndPoint("EndToEnd", g));
                l = new El(q);
                l.b = b;
                l.f = c;
                l.c = d;
                l.g = e;
                b = l;
            } else b = L ? new Ml(Cl(b, c, d, e)) : K ? new Dl(Cl(b, c, d, e)) : Id ? new Ll(Cl(b, c, d, e)) : new zl(Cl(b, c, d, e));
            b = a.h = b;
        }
        return b;
    }

    w.cd = function () {
        return Sl(this).ce();
    };
    w.Da = function () {
        return this.b || (this.b = Sl(this).Ra());
    };
    w.Ea = function () {
        return null != this.f ? this.f : this.f = Sl(this).ib();
    };
    w.Pa = function () {
        return this.c || (this.c = Sl(this).hb());
    };
    w.Qa = function () {
        return null != this.a ? this.a : this.a = Sl(this).qb();
    };
    w.Dc = r("g");
    w.dd = function () {
        return Sl(this).Sa();
    };
    w.na = function () {
        return Sl(this).na();
    };
    w.Ia = function () {
        return new wl(this.Da(), this.Ea(), this.Pa(), this.Qa());
    };
    w.select = function () {
        Sl(this).select(this.g);
    };
    w.Qe = function () {
        return new Tl(this);
    };
    function Tl(a) {
        R.call(this);
        this.a = a.Dc() ? a.Pa() : a.Da();
        this.f = a.Dc() ? a.Qa() : a.Ea();
        this.c = tl(a);
        this.g = ul(a);
    }

    F(Tl, nl);
    Tl.prototype.b = function () {
        return Ql(this.a, this.f, this.c, this.g);
    };
    Tl.prototype.F = function () {
        Tl.m.F.call(this);
        this.c = this.a = null;
    };
    function Ul() {
    }

    F(Ul, ql);
    function Vl() {
        this.c = this.b = this.a = null;
    }

    F(Vl, Ul);
    function Wl(a) {
        var b = new Vl();
        b.a = a;
        return b;
    }

    w = Vl.prototype;
    w.Xc = function () {
        return this.a || document.body.createControlRange();
    };
    w.vc = function () {
        return this.a ? this.a.length : 0;
    };
    w.Pb = function (a) {
        a = this.a.item(a);
        return Pl(Kl(a), void 0);
    };
    w.cd = function () {
        return tf.apply(null, Xl(this));
    };
    w.Da = function () {
        return Yl(this)[0];
    };
    w.Ea = u(0);
    w.Pa = function () {
        var a = Yl(this),
            b = Sc(a);
        return Zc(a, function (a) {
            return pf(a, b);
        });
    };
    w.Qa = function () {
        return this.Pa().childNodes.length;
    };
    function Xl(a) {
        if (!a.b && (a.b = [], a.a)) for (var b = 0; b < a.a.length; b++) {
            a.b.push(a.a.item(b));
        }
        return a.b;
    }

    function Yl(a) {
        a.c || (a.c = Xl(a).concat(), a.c.sort(function (a, c) {
            return a.sourceIndex - c.sourceIndex;
        }));
        return a.c;
    }

    w.dd = function () {
        return !this.a || !this.a.length;
    };
    w.na = u("");
    w.Ia = function () {
        return new Zl(this);
    };
    w.select = function () {
        this.a && this.a.select();
    };
    w.Qe = function () {
        return new $l(this);
    };
    function $l(a) {
        this.a = Xl(a);
    }

    F($l, nl);
    $l.prototype.b = function () {
        for (var a = (this.a.length ? O(this.a[0]) : document).body.createControlRange(), b = 0, c = this.a.length; b < c; b++) {
            a.addElement(this.a[b]);
        }
        return Wl(a);
    };
    $l.prototype.F = function () {
        $l.m.F.call(this);
        delete this.a;
    };
    function Zl(a) {
        this.l = this.c = this.b = null;
        a && (this.l = Yl(a), this.b = this.l.shift(), this.c = Sc(this.l) || this.b);
        ol.call(this, this.b, !1, !0);
    }

    F(Zl, vl);
    Zl.prototype.B = r("b");
    Zl.prototype.s = function () {
        return !this.f && !this.l.length;
    };
    Zl.prototype.next = function () {
        if (this.s()) throw gi;
        if (!this.f) {
            var a = this.l.shift();
            pl(this, a, 1, 1);
            return a;
        }
        return Zl.m.next.call(this);
    };
    function am() {
        this.a = [];
        this.b = [];
        this.f = this.c = null;
    }

    F(am, Ul);
    function bm(a) {
        var b = new am();
        b.b = a;
        b.a = Wc(a, function (a) {
            return a.Xc();
        });
        return b;
    }

    w = am.prototype;
    w.Xc = function () {
        return this.a[0];
    };
    w.vc = function () {
        return this.a.length;
    };
    w.Pb = function (a) {
        this.b[a] || (this.b[a] = Pl(Nl(this.a[a]), void 0));
        return this.b[a];
    };
    w.cd = function () {
        if (!this.f) {
            for (var a = [], b = 0, c = this.vc(); b < c; b++) {
                a.push(this.Pb(b).cd());
            }
            this.f = tf.apply(null, a);
        }
        return this.f;
    };
    function cm(a) {
        a.c || (a.c = sl(a), a.c.sort(function (a, c) {
            var b = a.Da();
            a = a.Ea();
            var e = c.Da();
            c = c.Ea();
            return b == e && a == c ? 0 : Rl(b, a, e, c) ? 1 : -1;
        }));
        return a.c;
    }

    w.Da = function () {
        return cm(this)[0].Da();
    };
    w.Ea = function () {
        return cm(this)[0].Ea();
    };
    w.Pa = function () {
        return Sc(cm(this)).Pa();
    };
    w.Qa = function () {
        return Sc(cm(this)).Qa();
    };
    w.dd = function () {
        return 0 == this.a.length || 1 == this.a.length && this.Pb(0).dd();
    };
    w.na = function () {
        return Wc(sl(this), function (a) {
            return a.na();
        }).join("");
    };
    w.Ia = function () {
        return new dm(this);
    };
    w.select = function () {
        var a = rl(Ye(O(J ? this.cd() : this.Da())));
        a.removeAllRanges();
        for (var b = 0, c = this.vc(); b < c; b++) {
            a.addRange(this.Pb(b).Xc());
        }
    };
    w.Qe = function () {
        return new em(this);
    };
    function em(a) {
        this.a = Wc(sl(a), function (a) {
            return a.Qe();
        });
    }

    F(em, nl);
    em.prototype.b = function () {
        var a = Wc(this.a, function (a) {
            return a.restore();
        });
        return bm(a);
    };
    em.prototype.F = function () {
        em.m.F.call(this);
        Uc(this.a, function (a) {
            a.M();
        });
        delete this.a;
    };
    function dm(a) {
        this.b = null;
        this.c = 0;
        a && (this.b = Wc(cm(a), function (a) {
            return ii(a);
        }));
        ol.call(this, a ? this.B() : null, !1, !0);
    }

    F(dm, vl);
    dm.prototype.B = function () {
        return this.b[0].B();
    };
    dm.prototype.s = function () {
        return this.b[this.c].s();
    };
    dm.prototype.next = function () {
        try {
            var a = this.b[this.c],
                b = a.next();
            pl(this, a.node, a.a, a.f);
            return b;
        } catch (c) {
            if (c !== gi || this.b.length - 1 == this.c) throw c;
            this.c++;
            return this.next();
        }
    };
    function fm() {
        var a = rl(window);
        return a && gm(a);
    }

    function gm(a) {
        var b = !1;
        if (a.createRange) try {
            var c = a.createRange();
        } catch (e) {
            return null;
        } else if (a.rangeCount) {
            if (1 < a.rangeCount) {
                b = new am();
                c = 0;
                for (var d = a.rangeCount; c < d; c++) {
                    b.a.push(a.getRangeAt(c));
                }
                return b;
            }
            c = a.getRangeAt(0);
            b = Rl(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset);
        } else return null;
        return (a = c) && a.addElement ? Wl(a) : Pl(Nl(a), b);
    }

    function Rl(a, b, c, d) {
        if (a == c) return d < b;
        var e;
        if (1 == a.nodeType && b) if (e = a.childNodes[b]) a = e, b = 0; else if (pf(a, c)) return !0;
        if (1 == c.nodeType && d) if (e = c.childNodes[d]) c = e, d = 0; else if (pf(c, a)) return !1;
        return 0 < (qf(a, c) || b - d);
    };
    function hm() {
        var a = fm();
        return null != a && !a.dd() && 0 < a.na().length;
    };
    function im() {
        this.b = [];
    }

    F(im, oh);
    fc(im);
    function jm(a, b) {
        var c = a.b[b];
        if (!c) {
            switch (b) {
                case 0:
                    c = a.da() + "-highlight";
                    break;
                case 1:
                    c = a.da() + "-checkbox";
                    break;
                case 2:
                    c = a.da() + "-content";
            }
            a.b[b] = c;
        }
        return c;
    }

    w = im.prototype;
    w.Qb = u("menuitem");
    w.D = function (a) {
        var b = a.b.D(f, rh(this, a).join(" "), km(this, a.$(), a.b));
        lm(this, a, b, !!(a.ba & 8) || !!(a.ba & 16));
        return b;
    };
    w.tb = function (a) {
        return a && a.firstChild;
    };
    w.Ja = function (a, b) {
        var c = lf(b),
            d = jm(this, 2);
        c && gd(c, d) || b.appendChild(km(this, b.childNodes, a.b));
        gd(b, gb) && (a.pa(16, !0), a && b && lm(this, a, b, !0));
        return im.m.Ja.call(this, a, b);
    };
    w.xc = function (a, b) {
        var c = this.tb(a),
            d = mm(this, a) ? c.firstChild : null;
        im.m.xc.call(this, a, b);
        d && !mm(this, a) && c.insertBefore(d, c.firstChild || null);
    };
    function km(a, b, c) {
        a = jm(a, 2);
        return c.D(f, a, b);
    }

    function mm(a, b) {
        return (b = a.tb(b)) ? (b = b.firstChild, a = jm(a, 1), !!b && nf(b) && gd(b, a)) : !1;
    }

    function lm(a, b, c, d) {
        vh(a, c, b.sc());
        wh(a, b, c);
        d != mm(a, c) && (d ? H(c, gb) : id(c, gb), c = a.tb(c), d ? (a = jm(a, 1), c.insertBefore(b.b.D(f, a), c.firstChild || null)) : c.removeChild(c.firstChild));
    }

    w.qc = function (a) {
        switch (a) {
            case 2:
                return jm(this, 0);
            case 16:
            case 8:
                return hb;
            default:
                return im.m.qc.call(this, a);
        }
    };
    w.ad = function (a) {
        var b = jm(this, 0);
        switch (a) {
            case hb:
                return 16;
            case b:
                return 2;
            default:
                return im.m.ad.call(this, a);
        }
    };
    w.da = u("goog-menuitem");
    function nm(a, b, c, d) {
        W.call(this, a, d || im.ka(), c);
        this.ua(b);
    }

    F(nm, W);
    w = nm.prototype;
    w.xa = function () {
        var a = this.qa;
        return null != a ? a : this.bb();
    };
    w.ua = dc("qa");
    w.pa = function (a, b) {
        nm.m.pa.call(this, a, b);
        switch (a) {
            case 8:
                this.V & 16 && !b && Sh(this, 16, !1) && Vh(this, 16, !1);
                (a = this.j()) && this && a && lm(this.a, this, a, b);
                break;
            case 16:
                (a = this.j()) && this && a && lm(this.a, this, a, b);
        }
    };
    w.bb = function () {
        var a = this.$();
        return B(a) ? (a = Wc(a, function (a) {
            return nf(a) && (gd(a, "goog-menuitem-accel") || gd(a, "goog-menuitem-mnemonic-separator")) ? "" : Df(a);
        }).join(""), wc(a)) : nm.m.bb.call(this);
    };
    w.Ub = function (a) {
        var b = this.rb();
        if (b) {
            var c = b.L;
            b.L = null;
            if (b = c && hc(a.clientX)) b = new N(a.clientX, a.clientY), b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
            if (b) return;
        }
        nm.m.Ub.call(this, a);
    };
    w.zc = function (a) {
        return a.keyCode == this.hg && this.bc(a) ? !0 : nm.m.zc.call(this, a);
    };
    w.th = r("hg");
    Mh("goog-menuitem", function () {
        return new nm(null);
    });
    nm.prototype.sc = function () {
        return this.ba & 16 ? "menuitemcheckbox" : this.ba & 8 ? "menuitemradio" : nm.m.sc.call(this);
    };
    nm.prototype.rb = function () {
        return W.prototype.rb.call(this);
    };
    nm.prototype.Zc = function () {
        return W.prototype.Zc.call(this);
    };
    function om(a) {
        this.a = a;
    }

    fc(om);
    function pm(a, b) {
        a && (a.tabIndex = b ? 0 : -1);
    }

    w = om.prototype;
    w.D = function (a) {
        return a.b.D(f, qm(this, a).join(" "));
    };
    w.ee = function (a) {
        return a.tagName == f;
    };
    function rm(a, b, c) {
        c.id && dh(b, c.id);
        var d = a.fd(),
            e = !1,
            g = fd(c);
        g && Uc(g, function (a) {
            a == d ? e = !0 : a && (a == d + ba ? b.oa(!1) : a == d + "-horizontal" ? sm(b, ob) : a == d + "-vertical" && sm(b, $b));
        }, a);
        e || H(c, d);
        tm(a, b, c);
        return c;
    }

    function tm(a, b, c) {
        if (c) for (var d = c.firstChild, e; d && d.parentNode == c;) {
            e = d.nextSibling;
            if (1 == d.nodeType) {
                var g = a.be(d);
                g && (g.A = d, b.isEnabled() || g.oa(!1), b.hc(g, kh(b), void 0), ih(g, d));
            } else d.nodeValue && "" != xc(d.nodeValue) || c.removeChild(d);
            d = e;
        }
    }

    w.be = function (a) {
        a: {
            a = fd(a);
            for (var b = 0, c = a.length; b < c; b++) {
                var d = a[b];
                if (d = d in Nh ? Nh[d]() : null) {
                    a = d;
                    break a;
                }
            }
            a = null;
        }
        return a;
    };
    w.fe = function (a) {
        a = a.j();
        $f(a, !0, K);
        J && (a.hideFocus = !0);
        var b = this.a;
        b && kg(a, b);
    };
    w.fd = u("goog-container");
    function qm(a, b) {
        a = a.fd();
        var c = [a, b.Lb == ob ? a + "-horizontal" : a + "-vertical"];
        b.isEnabled() || c.push(a + ba);
        return c;
    };
    function um() {
    }

    F(um, oh);
    fc(um);
    um.prototype.D = function (a) {
        return a.b.D(f, this.da());
    };
    um.prototype.Ja = function (a, b) {
        b.id && dh(a, b.id);
        if ("HR" == b.tagName) {
            var c = b;
            b = this.D(a);
            gf(b, c);
            jf(c);
        } else H(b, this.da());
        return b;
    };
    um.prototype.xc = cc();
    um.prototype.da = u(fb);
    function vm(a, b) {
        W.call(this, null, a || um.ka(), b);
        this.pa(1, !1);
        this.pa(2, !1);
        this.pa(4, !1);
        this.pa(32, !1);
        this.V = 1;
    }

    F(vm, W);
    vm.prototype.O = function () {
        vm.m.O.call(this);
        kg(this.j(), "separator");
    };
    Mh(fb, function () {
        return new vm();
    });
    function wm(a) {
        this.a = a || "menu";
    }

    F(wm, om);
    fc(wm);
    w = wm.prototype;
    w.ee = function (a) {
        return "UL" == a.tagName || wm.m.ee.call(this, a);
    };
    w.be = function (a) {
        return "HR" == a.tagName ? new vm() : wm.m.be.call(this, a);
    };
    w.kc = function (a, b) {
        return pf(a.j(), b);
    };
    w.fd = u("goog-menu");
    w.fe = function (a) {
        wm.m.fe.call(this, a);
        lg(a.j(), "haspopup", "true");
    };
    function xm(a, b, c) {
        this.c = a;
        this.f = b;
        this.s = c;
    }

    F(xm, jk);
    xm.prototype.b = function (a, b, c) {
        fk(this.c, this.f, a, b, void 0, c, this.s);
    };
    function ym(a, b, c, d) {
        xm.call(this, a, b);
        this.l = c ? 5 : 0;
        this.g = d || void 0;
    }

    F(ym, xm);
    ym.prototype.h = dc("l");
    ym.prototype.b = function (a, b, c, d) {
        var e = fk(this.c, this.f, a, b, null, c, 10, d, this.g);
        if (e & 496) {
            var g = zm(e, this.f);
            b = zm(e, b);
            e = fk(this.c, g, a, b, null, c, 10, d, this.g);
            e & 496 && (g = zm(e, g), b = zm(e, b), fk(this.c, g, a, b, null, c, this.l, d, this.g));
        }
    };
    function zm(a, b) {
        a & 48 && (b ^= 4);
        a & 192 && (b ^= 1);
        return b;
    };
    function Am(a, b) {
        this.a = a instanceof N ? a : new N(a, b);
    }

    F(Am, jk);
    Am.prototype.b = function (a, b, c, d) {
        var e = O(a);
        var g = e.body;
        e = e.documentElement;
        e = new N(g.scrollLeft || e.scrollLeft, g.scrollTop || e.scrollTop);
        g = this.a.x + e.x;
        e = this.a.y + e.y;
        var h = gk(a),
            g = g - h.x;
        e -= h.y;
        ik(new N(g, e), a, b, c, null, null, d);
    };
    function Bm(a, b) {
        Am.call(this, a, b);
    }

    F(Bm, Am);
    Bm.prototype.c = 0;
    Bm.prototype.h = dc("c");
    Bm.prototype.b = function (a, b, c, d) {
        var e = Of(a),
            e = Rf(e),
            g = Xe(Le(a).a),
            g = new N(this.a.x + g.scrollLeft, this.a.y + g.scrollTop),
            h = b,
            k = ik(g, a, h, c, e, 10, d);
        if (0 != (k & 496)) {
            if (k & 16 || k & 32) h ^= 4;
            if (k & 64 || k & 128) h ^= 1;
            k = ik(g, a, h, c, e, 10, d);
            0 != (k & 496) && ik(g, a, b, c, e, this.c, d);
        }
    };
    function Cm(a, b, c) {
        T.call(this, c);
        this.sb = b || om.ka();
        this.Lb = a || $b;
    }

    F(Cm, T);
    w = Cm.prototype;
    w.Yb = null;
    w.wc = null;
    w.sb = null;
    w.Lb = null;
    w.ga = !0;
    w.Fb = !0;
    w.Db = !0;
    w.ia = -1;
    w.ma = null;
    w.Zb = !1;
    w.gb = null;
    function Dm(a) {
        return a.Yb || a.j();
    }

    function Em(a, b) {
        if (a.Db) {
            var c = Dm(a),
                d = a.U;
            a.Yb = b;
            var e = Dm(a);
            d && (a.Yb = c, Fm(a, !1), a.Yb = b, Fh(Gm(a), e), Fm(a, !0));
        } else throw Error("Can't set key event target for container that doesn't support keyboard focus!");
    }

    function Gm(a) {
        return a.wc || (a.wc = new Eh(Dm(a)));
    }

    w.D = function () {
        this.A = this.sb.D(this);
    };
    w.ed = function () {
        return this.j();
    };
    w.de = function (a) {
        return this.sb.ee(a);
    };
    w.S = function (a) {
        this.A = rm(this.sb, this, a);
        a.style.display == p && (this.ga = !1);
    };
    w.O = function () {
        Cm.m.O.call(this);
        jh(this, function (a) {
            a.U && Hm(this, a);
        }, this);
        var a = this.j();
        this.sb.fe(this);
        this.J(this.ga, !0);
        U(this).w(this, "enter", this.ne).w(this, "highlight", this.Cc).w(this, "unhighlight", this.re).w(this, "open", this.Rh).w(this, "close", this.Fh).w(a, wb, this.wh).w(O(a), Ab, this.Hh).w(a, [wb, Ab, zb, yb, Ta], this.Dh);
        this.Db && Fm(this, !0);
    };
    function Fm(a, b) {
        var c = U(a),
            d = Dm(a);
        b ? c.w(d, Za, a.Cf).w(d, Ha, a.gd).w(Gm(a), "key", a.Fa) : c.ca(d, Za, a.Cf).ca(d, Ha, a.gd).ca(Gm(a), "key", a.Fa);
    }

    w.Z = function () {
        this.xb(-1);
        this.ma && Wh(this.ma, !1);
        this.Zb = !1;
        Cm.m.Z.call(this);
    };
    w.F = function () {
        Cm.m.F.call(this);
        this.wc && (this.wc.M(), this.wc = null);
        this.sb = this.ma = this.gb = this.Yb = null;
    };
    w.ne = u(!0);
    w.Cc = function (a) {
        var b = nh(this, a.target);
        if (-1 < b && b != this.ia) {
            var c = Im(this);
            c && Uh(c, !1);
            this.ia = b;
            c = Im(this);
            this.Zb && Th(c, !0);
            this.ma && c != this.ma && (c.ba & 64 ? Wh(c, !0) : Wh(this.ma, !1));
        }
        b = this.j();
        null != a.target.j() && lg(b, Aa, a.target.j().id);
    };
    w.re = function (a) {
        a.target == Im(this) && (this.ia = -1);
        this.j().removeAttribute("aria-activedescendant");
    };
    w.Rh = function (a) {
        (a = a.target) && a != this.ma && a.rb() == this && (this.ma && Wh(this.ma, !1), this.ma = a);
    };
    w.Fh = function (a) {
        a.target == this.ma && (this.ma = null);
        var b = this.j(),
            c = a.target.j();
        b && a.target.V & 2 && c && (a = "", c && (a = c.id), lg(b, Aa, a));
    };
    w.wh = function (a) {
        this.Fb && (this.Zb = !0);
        var b = Dm(this);
        b && zf(b) ? b.focus() : a.b();
    };
    w.Hh = function () {
        this.Zb = !1;
    };
    w.Dh = function (a) {
        a: {
            var b = a.target;
            if (this.gb) for (var c = this.j(); b && b !== c;) {
                var d = b.id;
                if (d in this.gb) {
                    b = this.gb[d];
                    break a;
                }
                b = b.parentNode;
            }
            b = null;
        }
        if (b) switch (a.type) {
            case wb:
                b.Ac(a);
                break;
            case Ab:
                b.Ub(a);
                break;
            case zb:
                b.je(a);
                break;
            case yb:
                b.qe(a);
                break;
            case Ta:
                b.Bc(a);
        }
    };
    w.Cf = cc();
    w.gd = function () {
        this.xb(-1);
        this.Zb = !1;
        this.ma && Wh(this.ma, !1);
    };
    w.Fa = function (a) {
        return this.isEnabled() && this.N() && (0 != kh(this) || this.Yb) && this.ge(a) ? (a.b(), a.stopPropagation(), !0) : !1;
    };
    w.ge = function (a) {
        var b = Im(this);
        if (b && _typeof(b.Fa) == n && b.Fa(a) || this.ma && this.ma != b && _typeof(this.ma.Fa) == n && this.ma.Fa(a)) return !0;
        if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
        switch (a.keyCode) {
            case 27:
                if (this.Db) Dm(this).blur(); else return !1;
                break;
            case 36:
                Jm(this);
                break;
            case 35:
                Km(this);
                break;
            case 38:
                if (this.Lb == $b) Lm(this); else return !1;
                break;
            case 37:
                if (this.Lb == ob) mh(this) ? Mm(this) : Lm(this); else return !1;
                break;
            case 40:
                if (this.Lb == $b) Mm(this); else return !1;
                break;
            case 39:
                if (this.Lb == ob) mh(this) ? Lm(this) : Mm(this); else return !1;
                break;
            default:
                return !1;
        }
        return !0;
    };
    function Hm(a, b) {
        var c = b.j(),
            c = c.id || (c.id = ch(b));
        a.gb || (a.gb = {});
        a.gb[c] = b;
    }

    w.hc = function (a, b, c) {
        a.Ic |= 2;
        a.Ic |= 64;
        a.pa(32, !1);
        Ph(a, !1);
        var d = a.rb() == this ? nh(this, a) : -1;
        Cm.m.hc.call(this, a, b, c);
        a.U && this.U && Hm(this, a);
        a = d;
        -1 == a && (a = kh(this));
        a == this.ia ? this.ia = Math.min(kh(this) - 1, b) : a > this.ia && b <= this.ia ? this.ia++ : a < this.ia && b > this.ia && this.ia--;
    };
    w.removeChild = function (a, b) {
        if (a = C(a) ? gh(this, a) : a) {
            var c = nh(this, a);
            -1 != c && (c == this.ia ? (Uh(a, !1), this.ia = -1) : c < this.ia && this.ia--);
            var d = a.j();
            d && d.id && this.gb && (c = this.gb, d = d.id, d in c && delete c[d]);
        }
        a = Cm.m.removeChild.call(this, a, b);
        Ph(a, !0);
        return a;
    };
    function sm(a, b) {
        if (a.j()) throw Error(ha);
        a.Lb = b;
    }

    w.N = r("ga");
    w.J = function (a, b) {
        if (b || this.ga != a && this.dispatchEvent(a ? "show" : nb)) {
            this.ga = a;
            var c = this.j();
            c && (Q(c, a), this.Db && pm(Dm(this), this.Fb && this.ga), b || this.dispatchEvent(this.ga ? "aftershow" : "afterhide"));
            return !0;
        }
        return !1;
    };
    w.isEnabled = r("Fb");
    w.oa = function (a) {
        this.Fb != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Fb = !0, jh(this, function (a) {
            a.Kg ? delete a.Kg : a.oa(!0);
        })) : (jh(this, function (a) {
            a.isEnabled() ? a.oa(!1) : a.Kg = !0;
        }), this.Zb = this.Fb = !1), this.Db && pm(Dm(this), a && this.ga));
    };
    function Nm(a, b) {
        b != a.Db && a.U && Fm(a, b);
        a.Db = b;
        a.Fb && a.ga && pm(Dm(a), b);
    }

    w.xb = function (a) {
        (a = lh(this, a)) ? Uh(a, !0) : -1 < this.ia && Uh(Im(this), !1);
    };
    function Im(a) {
        return lh(a, a.ia);
    }

    function Jm(a) {
        Om(a, function (a, c) {
            return (a + 1) % c;
        }, kh(a) - 1);
    }

    function Km(a) {
        Om(a, function (a, c) {
            a--;
            return 0 > a ? c - 1 : a;
        }, 0);
    }

    function Mm(a) {
        Om(a, function (a, c) {
            return (a + 1) % c;
        }, a.ia);
    }

    function Lm(a) {
        Om(a, function (a, c) {
            a--;
            return 0 > a ? c - 1 : a;
        }, a.ia);
    }

    function Om(a, b, c) {
        c = 0 > c ? nh(a, a.ma) : c;
        var d = kh(a);
        c = b.call(a, c, d);
        for (var e = 0; e <= d;) {
            var g = lh(a, c);
            if (g && a.nf(g)) {
                a.xb(c);
                break;
            }
            e++;
            c = b.call(a, c, d);
        }
    }

    w.nf = function (a) {
        return a.N() && a.isEnabled() && !!(a.ba & 2);
    };
    function Pm() {
    }

    F(Pm, oh);
    fc(Pm);
    Pm.prototype.da = u(eb);
    function Qm(a, b, c) {
        W.call(this, a, c || Pm.ka(), b);
        this.pa(1, !1);
        this.pa(2, !1);
        this.pa(4, !1);
        this.pa(32, !1);
        this.V = 1;
    }

    F(Qm, W);
    Mh(eb, function () {
        return new Qm(null);
    });
    Mh(fb, function () {
        return new vm();
    });
    function Rm(a, b) {
        Cm.call(this, $b, b || wm.ka(), a);
        Nm(this, !1);
    }

    F(Rm, Cm);
    w = Rm.prototype;
    w.Nd = !0;
    w.kc = function (a) {
        if (this.sb.kc(this, a)) return !0;
        for (var b = 0, c = kh(this); b < c; b++) {
            var d = lh(this, b);
            if (_typeof(d.kc) == n && d.kc(a)) return !0;
        }
        return !1;
    };
    w.J = function (a, b, c) {
        (b = Rm.m.J.call(this, a, b)) && a && this.U && this.Nd && Dm(this).focus();
        a && c && hc(c.clientX) ? this.L = new N(c.clientX, c.clientY) : this.L = null;
        return b;
    };
    w.ne = function (a) {
        this.Nd && Dm(this).focus();
        return Rm.m.ne.call(this, a);
    };
    w.nf = function (a) {
        return a.isEnabled() && a.N() && !!(a.ba & 2);
    };
    w.S = function (a) {
        for (var b = this.sb, c = Qe(this.b.a, f, b.fd() + "-content", a), d = c.length, e = 0; e < d; e++) {
            tm(b, this, c[e]);
        }
        Rm.m.S.call(this, a);
    };
    w.ge = function (a) {
        var b = Rm.m.ge.call(this, a);
        b || jh(this, function (c) {
            !b && c.th && c.hg == a.keyCode && (this.isEnabled() && this.xb(nh(this, c)), b = c.Fa(a));
        }, this);
        return b;
    };
    w.xb = function (a) {
        Rm.m.xb.call(this, a);
        var b = lh(this, a);
        if (b) {
            a = this.j() || Xe(document);
            var c = b.j(),
                d = a || Xe(document);
            var e = Sf(c);
            var g = Sf(d),
                h = eg(d);
            d == Xe(document) ? (b = e.x - d.scrollLeft, e = e.y - d.scrollTop, J && !Td(10) && (b += h.left, e += h.top)) : (b = e.x - g.x - h.left, e = e.y - g.y - h.top);
            var c = Vf(c),
                h = d.clientHeight - c.height,
                g = d.scrollLeft,
                k = d.scrollTop,
                g = g + Math.min(b, Math.max(b - (d.clientWidth - c.width), 0)),
                k = k + Math.min(e, Math.max(e - h, 0)),
                b = new N(g, k);
            a.scrollLeft = b.x;
            a.scrollTop = b.y;
        }
    };
    function Sm(a, b) {
        Rm.call(this, a, b);
        this.Nd = !0;
        Nm(this, !0);
        this.J(!1, !0);
        this.a = new ki();
    }

    F(Sm, Rm);
    w = Sm.prototype;
    w.Ig = !1;
    w.Yf = 0;
    w.Ba = null;
    w.S = function (a) {
        Sm.m.S.call(this, a);
        (a = a.getAttribute("for") || a.htmlFor) && Tm(this, this.b.j(a), 1);
    };
    w.O = function () {
        Sm.m.O.call(this);
        this.a.forEach(this.Pc, this);
        var a = U(this);
        a.w(this, za, this.Fe);
        a.w(this.b.a, wb, this.zi, !0);
    };
    function Tm(a, b, c, d, e, g) {
        b && mi(a.a, kc(b)) || (c = a.Vd(b, c, d, e, g), a.U && a.Pc(c), b = pc(a.Ai, b), a.j() && U(a).w(a.j(), tb, b));
    }

    w.Ai = function (a, b) {
        if (27 == b.keyCode) a.focus(); else if (a = lh(this, this.ia)) {
            a = a.j();
            var c = new sg(b.a, a);
            c.target = a;
            if (32 == b.keyCode || 13 == b.keyCode) wg(a) ? Zg(a, tb, !1, c) : Rg(a, tb, !1, c);
            32 == b.keyCode && this.lb();
        }
    };
    w.Vd = function (a, b, c, d, e) {
        if (!a) return null;
        b = {A: a, Cg: b, vi: c, nc: d ? Ta : wb, Be: e};
        this.a.set(kc(a), b);
        return b;
    };
    w.Pc = function (a) {
        U(this).w(a.A, a.nc, this.Dd);
        a.nc != Ta && U(this).w(a.A, tb, this.Di);
    };
    w.Vc = function () {
        if (this.U) for (var a = this.a.Oa(), b = 0; b < a.length; b++) {
            this.Xd(this.a.get(a[b]));
        }
        oi(this.a);
    };
    w.Xd = function (a) {
        U(this).ca(a.A, a.nc, this.Dd);
    };
    w.kd = function (a, b, c) {
        b = y(a.Cg) ? new ym(a.A, a.Cg, !0) : new Bm(b, c);
        b.h && b.h(5);
        var d = a.vi;
        c = a.Be;
        var e = a.A;
        a = this.N();
        var g;
        (g = this.N()) || (g = 150 > qc() - this.Yf);
        g && this.Ig ? this.lb() : (this.Ba = e || null, this.dispatchEvent("beforeshow") && (d = "undefined" != typeof d ? d : 8, a || (this.j().style.visibility = mb), Q(this.j(), !0), b.b(this.j(), d, c), a || (this.j().style.visibility = ac), this.xb(-1), this.J(!0)));
    };
    w.lb = function () {
        this.N() && (this.J(!1), this.N() || (this.Yf = qc(), this.Ba = null));
    };
    w.Fe = function () {
        this.lb();
    };
    w.Dd = function (a) {
        Um(this, a);
    };
    w.Di = function (a) {
        32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || Um(this, a);
        40 == a.keyCode && Jm(this);
    };
    function Um(a, b) {
        for (var c = a.a.Oa(), d = 0; d < c.length; d++) {
            var e = a.a.get(c[d]);
            if (e.A == b.currentTarget) {
                a.kd(e, b.clientX, b.clientY);
                b.b();
                b.stopPropagation();
                break;
            }
        }
    }

    w.zi = function (a) {
        this.N() && !this.kc(a.target) && this.lb();
    };
    w.gd = function (a) {
        Sm.m.gd.call(this, a);
        this.lb();
    };
    w.F = function () {
        Sm.m.F.call(this);
        this.a && (oi(this.a), delete this.a);
    };
    function Vm(a) {
        Yg.call(this);
        this.A = a;
        a = J ? ab : Ha;
        this.a = S(this.A, J ? $a : Za, this, !J);
        this.b = S(this.A, a, this, !J);
    }

    F(Vm, Yg);
    Vm.prototype.handleEvent = function (a) {
        var b = new sg(a.a);
        b.type = a.type == $a || a.type == Za ? $a : ab;
        this.dispatchEvent(b);
    };
    Vm.prototype.F = function () {
        Vm.m.F.call(this);
        Pg(this.a);
        Pg(this.b);
        delete this.A;
    };
    function Wm(a, b) {
        this.a = a instanceof N ? a : new N(a, b);
    }

    F(Wm, jk);
    Wm.prototype.b = function (a, b, c, d) {
        fk(Of(a), 0, a, b, this.a, c, null, d);
    };
    function Xm(a) {
        this.a = new ki();
        a && Ym(this, a);
    }

    function Zm(a) {
        var b = typeof a === "undefined" ? "undefined" : _typeof(a);
        return b == Db && a || b == n ? "o" + kc(a) : b.substr(0, 1) + a;
    }

    w = Xm.prototype;
    w.add = function (a) {
        this.a.set(Zm(a), a);
    };
    function Ym(a, b) {
        b = pi(b);
        for (var c = b.length, d = 0; d < c; d++) {
            a.add(b[d]);
        }
    }

    w.remove = function (a) {
        return this.a.remove(Zm(a));
    };
    w.contains = function (a) {
        return mi(this.a, Zm(a));
    };
    w.ya = function () {
        return this.a.ya();
    };
    w.Ia = function () {
        return this.a.Ia(!1);
    };
    function $m(a, b, c) {
        this.ja = c || (a ? Le(Ne(document, a)) : Le());
        Lk.call(this, this.ja.D(f, {style: "position:absolute;display:none;"}));
        this.gc = new N(1, 1);
        this.o = new Xm();
        this.G = null;
        a && an(this, a);
        null != b && this.Ka(b);
    }

    F($m, Lk);
    var bn = [];
    w = $m.prototype;
    w.va = null;
    w.className = "goog-tooltip";
    w.Ag = 500;
    w.Vf = 0;
    function an(a, b) {
        b = Ne(document, b);
        a.o.add(b);
        S(b, zb, a.le, !1, a);
        S(b, yb, a.Tb, !1, a);
        S(b, xb, a.Mf, !1, a);
        S(b, Za, a.Ff, !1, a);
        S(b, Ha, a.Tb, !1, a);
    }

    function cn(a, b) {
        if (b) b = Ne(document, b), dn(a, b), a.o.remove(b); else {
            for (var c = a.o.ya(), d = 0; b = c[d]; d++) {
                dn(a, b);
            }
            oi(a.o.a);
        }
    }

    function dn(a, b) {
        Og(b, zb, a.le, !1, a);
        Og(b, yb, a.Tb, !1, a);
        Og(b, xb, a.Mf, !1, a);
        Og(b, Za, a.Ff, !1, a);
        Og(b, Ha, a.Tb, !1, a);
    }

    w.Ka = function (a) {
        wf(this.j(), a);
    };
    w.Sb = function (a) {
        var b = this.j();
        b && jf(b);
        $m.m.Sb.call(this, a);
        a ? (b = this.ja.a.body, b.insertBefore(a, b.lastChild), ng(this.G), this.G = new Vm(this.j()), mg(this, pc(ng, this.G)), S(this.G, $a, this.Nb, void 0, this), S(this.G, ab, this.Id, void 0, this)) : (ng(this.G), this.G = null);
    };
    w.na = function () {
        return Bf(this.j());
    };
    function en(a) {
        return a.I ? a.N() ? 4 : 1 : a.ha ? 3 : a.N() ? 2 : 0;
    }

    w.ke = function () {
        if (!Hk.prototype.ke.call(this)) return !1;
        if (this.b) for (var a, b = 0; a = bn[b]; b++) {
            pf(a.j(), this.b) || a.J(!1);
        }
        $c(bn, this) || bn.push(this);
        a = this.j();
        a.className = this.className;
        this.Nb();
        S(a, zb, this.sd, !1, this);
        S(a, yb, this.rd, !1, this);
        fn(this);
        return !0;
    };
    w.Ie = function () {
        ad(bn, this);
        for (var a = this.j(), b, c = 0; b = bn[c]; c++) {
            b.b && pf(a, b.b) && b.J(!1);
        }
        this.Nc && this.Nc.Id();
        Og(a, zb, this.sd, !1, this);
        Og(a, yb, this.rd, !1, this);
        this.b = void 0;
        0 == en(this) && (this.Wa = !1);
        Hk.prototype.Ie.call(this);
    };
    w.De = function (a, b) {
        this.b == a && this.o.contains(this.b) && (this.Wa || !this.jf ? (this.J(!1), this.N() || (this.b = a, this.s = b || new gn(Ie(this.gc)), this.N() && this.kb(), this.J(!0))) : this.b = void 0);
        this.I = void 0;
    };
    w.ui = function (a) {
        this.ha = void 0;
        if (a == this.b) {
            a = this.ja;
            a: {
                var b = a.a;
                try {
                    var c = b && b.activeElement;
                    break a;
                } catch (d) {
                }
                c = null;
            }
            c = c && this.j() && a.contains(this.j(), c);
            null != this.va && (this.va == this.j() || this.o.contains(this.va)) || c || this.Mc && this.Mc.va || this.J(!1);
        }
    };
    function hn(a, b) {
        var c = We(a.ja.a);
        a.gc.x = b.clientX + c.x;
        a.gc.y = b.clientY + c.y;
    }

    w.le = function (a) {
        var b = jn(this, a.target);
        this.va = b;
        this.Nb();
        b != this.b && (this.b = b, kn(this, b), ln(this), hn(this, a));
    };
    function jn(a, b) {
        try {
            for (; b && !a.o.contains(b);) {
                b = b.parentNode;
            }
            return b;
        } catch (c) {
            return null;
        }
    }

    w.Mf = function (a) {
        hn(this, a);
        this.Wa = !0;
    };
    w.Ff = function (a) {
        this.va = a = jn(this, a.target);
        this.Wa = !0;
        if (this.b != a) {
            this.b = a;
            var b = new mn(this.va);
            this.Nb();
            kn(this, a, b);
            ln(this);
        }
    };
    function ln(a) {
        if (a.b) for (var b, c = 0; b = bn[c]; c++) {
            pf(b.j(), a.b) && (b.Mc = a, a.Nc = b);
        }
    }

    w.Tb = function (a) {
        var b = jn(this, a.target),
            c = jn(this, a.relatedTarget);
        b != c && (b == this.va && (this.va = null), fn(this), this.Wa = !1, !this.N() || a.relatedTarget && pf(this.j(), a.relatedTarget) ? this.b = void 0 : this.Id());
    };
    w.sd = function () {
        var a = this.j();
        this.va != a && (this.Nb(), this.va = a);
    };
    w.rd = function (a) {
        var b = this.j();
        this.va != b || a.relatedTarget && pf(b, a.relatedTarget) || (this.va = null, this.Id());
    };
    function kn(a, b, c) {
        a.I || (a.I = ck(D(a.De, a, b, c), a.Ag));
    }

    function fn(a) {
        a.I && (dk(a.I), a.I = void 0);
    }

    w.Id = function () {
        2 == en(this) && (this.ha = ck(D(this.ui, this, this.b), this.Vf));
    };
    w.Nb = function () {
        this.ha && (dk(this.ha), this.ha = void 0);
    };
    w.F = function () {
        this.J(!1);
        fn(this);
        cn(this);
        this.j() && jf(this.j());
        this.va = null;
        delete this.ja;
        $m.m.F.call(this);
    };
    function gn(a, b) {
        Wm.call(this, a, b);
    }

    F(gn, Wm);
    gn.prototype.b = function (a, b, c) {
        b = Of(a);
        b = Rf(b);
        c = c ? new Gf(c.top + 10, c.right, c.bottom, c.left + 10) : new Gf(10, 0, 0, 10);
        ik(this.a, a, 8, c, b, 9) & 496 && ik(this.a, a, 8, c, b, 5);
    };
    function mn(a) {
        xm.call(this, a, 5);
    }

    F(mn, xm);
    mn.prototype.b = function (a, b, c) {
        var d = new N(10, 0);
        fk(this.c, this.f, a, b, d, c, 9) & 496 && fk(this.c, 4, a, 1, d, c, 5);
    };
    function nn(a, b, c) {
        Sm.call(this, b, c);
        this.h = new ki();
        this.f = a || 5;
        this.l = null;
        this.o = !1;
        this.g = Array(this.f);
        this.H = Array(this.f);
        this.C = kk.ka();
        this.I = null;
        this.Ig = !0;
    }

    F(nn, Sm);
    var on = "";
    w = nn.prototype;
    w.D = function () {
        nn.m.D.call(this);
        for (var a = 0; a < this.f; ++a) {
            var b = new nm("");
            this.hc(b, kh(this), !0);
        }
    };
    w.fa = function (a) {
        nn.m.fa.call(this, a);
        H(this.j(), "alt-menu");
    };
    w.Ve = function (a) {
        a = this.h.get(kc(a));
        for (var b = 0; b < Y(a, 2) && b < this.f; ++b) {
            var c = lh(this, b);
            c.Hb(Zk(fl(a, b), 0));
            c.ua(b);
            c.J(!0, !0);
        }
        for (; b < this.f; ++b) {
            lh(this, b).J(!1);
        }
    };
    function pn(a, b, c) {
        a.h.set(kc(b), c);
        Tm(a, b, 9, 8, !1, new Gf(-2, 1, -2, 1));
    }

    w.Vc = function () {
        nn.m.Vc.call(this);
        oi(this.h);
    };
    w.J = function (a, b) {
        var c = this.Ba;
        this.I = c;
        a && null != c ? (qn(this, c), this.C.Ad("altshow", 2E3, 1, ya)) : null != this.l && jl(this.l, 0, 0);
        null != c && (a ? this.Wd(c) : this.Sd(c));
        b = nn.m.J.call(this, a, b);
        a && null != this.j() && $f(this.j(), !1);
        return b;
    };
    w.bb = function () {
        if (null != this.I) {
            var a = Bf(this.I);
            if (null != a) return a;
        }
        return "";
    };
    w.lb = function () {
        nn.m.lb.call(this);
        if (this.o) for (var a = 0; a < this.g.length; a++) {
            var b = this.g[a];
            dk(b.f);
            b.g();
            b.l(-1);
            b.g();
            b.J(!1);
        }
    };
    w.Wd = function (a) {
        H(a, "trans-target");
        a.title = "";
    };
    w.Sd = function (a) {
        id(a, "trans-target");
        a.title = on;
    };
    w.Fa = function (a) {
        if (a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode) return !1;
        var b = nn.m.Fa.call(this, a);
        if (!b && (37 == a.keyCode || 39 == a.keyCode)) {
            var c = Yf(this.Ba.parentNode.parentNode),
                d = null;
            if (!c && 37 == a.keyCode || c && 39 == a.keyCode) d = !1;
            if (!c && 39 == a.keyCode || c && 37 == a.keyCode) d = !0;
            if (this.Od(d) && (c = this.Ba, (c = d ? y(c.nextElementSibling) ? c.nextElementSibling : mf(c.nextSibling, !0) : y(c.previousElementSibling) ? c.previousElementSibling : mf(c.previousSibling, !1)) && c != this.Ba)) return this.lb(), this.zg(d), this.kd(c ? this.a.get(kc(c)) : null, 0, 0), rn(this), a.b(), a.stopPropagation(), !0;
        }
        return b;
    };
    w.kd = function (a, b, c) {
        Yf((a.A || this.Ba).parentNode.parentNode) ? P(this.j(), Va, Nb) : P(this.j(), Va, "");
        if (this.o) for (var d = 0; d < this.g.length; d++) {
            sn(this, d), wf(this.g[d].c, "...");
        }
        this.Ve(a.A);
        nn.m.kd.call(this, a, b, c);
    };
    function tn(a, b, c) {
        !a.o || b >= a.f || "" == c || (wf(a.g[b].c, c), sn(a, b));
    }

    function sn(a, b) {
        fk(lh(a, b).j(), 12, a.g[b].j(), 8, new N(1, 0));
    }

    w.Cc = function (a) {
        nn.m.Cc.call(this, a);
        var b = this.Ba;
        null != b && (this.C.Ad("altmenuhl", 2E3, 1, ya), qn(this, b), a = this.$c(a.target), -1 != a && a != this.f && (dk(this.H[a]), this.H[a] = ck(D(this.C.Ad, this.C, "altmenuhold", 2E3, 1, ya), 300), this.o && (b = this.g[a], Yf(this.Ba.parentNode.parentNode) ? (H(b.j(), Nb), P(b.j(), Va, Nb)) : (id(b.j(), Nb), P(b.j(), Va, "")), sn(this, a), dk(b.f), 0 == b.a ? b.f = ck(D(b.l, b, 1), 300) : b.l(1))));
    };
    w.re = function (a) {
        nn.m.re.call(this, a);
        a = this.$c(a.target);
        -1 != a && a != this.f && (dk(this.H[a]), this.o && this.g[a].B());
    };
    w.$c = function (a) {
        return nh(this, a);
    };
    w.Od = u(!0);
    w.zg = cc();
    w.Vd = function (a, b, c, d, e) {
        (a = nn.m.Vd.call(this, a, b, c, d, e)) && a.nc == wb && (a.nc = Pa);
        return a;
    };
    w.Pc = function (a) {
        nn.m.Pc.call(this, a);
        U(this).w(a.A, zb, this.Rf);
        U(this).w(a.A, yb, this.pd);
        U(this).w(a.A, Ta, this.Pf);
        U(this).w(a.A, xb, this.Qf);
    };
    w.Xd = function (a) {
        nn.m.Xd.call(this, a);
        U(this).ca(a.A, zb, this.Rf);
        U(this).ca(a.A, yb, this.pd);
        U(this).ca(a.A, Ta, this.Pf);
        U(this).ca(a.A, xb, this.Qf);
    };
    function qn(a, b) {
        if (null != a.l && (b = a.h.get(kc(b))) && (a = a.l, a.b)) for (var c = a.A && (a.A.value || Bf(a.A)), d = -1, e = -1, g = !1, h = 0; h < Y(a.b, 5); h++) {
            var k = gl(a.b, h);
            if (0 != Y(k, 2) && (0 == Yk(k, 5) && (g = c.indexOf(Zk(k, 4), e + 1), 0 <= g ? (d = g, e = d + Zk(k, 4).length, g = !0) : g = !1), gl(a.b, h).data == b.data)) {
                if (g) {
                    c = [];
                    for (e = 0; e < Y(b, 3); ++e) {
                        c.push({oc: d + Yk(new cl($k(b, 3, e)), 0), $e: d + Yk(new cl($k(b, 3, e)), 1)});
                    }
                    jl(a, 0, 0, void 0, c);
                } else d = c.indexOf(Zk(b, 0)), 0 <= d && jl(a, d, d + Zk(b, 0).length);
                break;
            }
        }
    }

    function un(a, b) {
        b ? ji(a.a.Ia(!1), function (a) {
            "" == this.b.Bf(a.A) && (H(a.A, Wb), this.b.eb(a.A, "_"));
            return !0;
        }, a) : ji(a.a.Ia(!1), function (a) {
            gd(a.A, Wb) && (id(a.A, Wb), this.b.eb(a.A, ""));
            return !0;
        }, a);
    }

    w.Rf = function (a) {
        hm() || (H(a.target, Xb), qn(this, a.target), un(this, !0), this.C.Ad("althighlight", 2E3, 1, ya));
    };
    w.pd = function (a) {
        id(a.target, Xb);
        null == this.l || this.N() || jl(this.l, 0, 0);
        un(this, !1);
    };
    w.Qf = function (a) {
        hm() && this.pd(a);
    };
    w.Pf = function (a) {
        hm() || (this.pd(a), Pl(Kl(a.target), void 0).select());
    };
    function rn(a) {
        ji(a.a.Ia(!1), function (a) {
            id(a.A, Xb);
            return !0;
        }, a);
    }

    w.Fe = function (a) {
        a && a.currentTarget && a.currentTarget.Ba && (a.g = a.currentTarget.Ba);
        nn.m.Fe.call(this, a);
    };
    w.Dd = function (a) {
        hm() ? rn(this) : nn.m.Dd.call(this, a);
    };
    function vn(a, b, c) {
        this.P = this.c = null;
        nn.call(this, a, b, c);
    }

    F(vn, nn);
    w = vn.prototype;
    w.zg = dc("c");
    w.J = function (a, b) {
        b = vn.m.J.call(this, a, b);
        this.c = null;
        a ? this.P = this.bb() : null != this.P && this.P != this.bb() && this.dispatchEvent(new rg(za, this));
        return b;
    };
    w.Wd = function (a) {
        vn.m.Wd.call(this, a);
        H(a, "trans-edit");
        a.contentEditable = !0;
        Em(this, a);
        Dm(this).focus();
        Af(Dm(this), !0);
        U(this).w(a, tb, this.Jf);
        U(this).w(a, yb, this.qd);
        U(this).w(a, zb, this.qd);
        if (null != this.c) {
            var b = Pl(Kl(a), void 0);
            a = this.c ? b.Ea() : b.Qa();
            b = tl(b);
            Ql(b, a, b, a).select();
        }
    };
    w.Sd = function (a) {
        vn.m.Sd.call(this, a);
        id(a, "trans-edit");
        a.contentEditable = !1;
        Dm(this) && Af(Dm(this), !1);
        U(this).ca(a, tb, this.Jf);
        U(this).ca(a, yb, this.qd);
        U(this).ca(a, zb, this.qd);
    };
    w.qd = function () {
        var a = fm();
        null == a || a.Da() == a.Pa() && a.Ea() == a.Qa() || this.J(a.Da() == a.Pa());
    };
    w.Jf = function (a) {
        for (var b = 0; b < this.f; ++b) {
            lh(this, b).J(!1);
        }
        if (13 == a.keyCode || 3 == a.keyCode) return null === Im(this) ? (this.lb(), a.stopPropagation(), a.b(), !0) : !1;
        null === Im(this) || !zh(a) && 37 != a.keyCode && 39 != a.keyCode || (this.Ba.focus(), this.xb(nh(this, null)));
        return !1;
    };
    w.Od = function (a) {
        var b = fm();
        if (b.Da() == b.Pa() && b.Ea() == b.Qa()) {
            var c = ul(b),
                b = Pl(Kl(tl(b)), void 0);
            if (!a && c == b.Ea() || a && c == b.Qa()) return !0;
        }
        return !1;
    };
    function wn(a, b, c) {
        nn.call(this, a, b, c);
        this.c = null;
    }

    F(wn, nn);
    w = wn.prototype;
    w.fa = function (a) {
        wn.m.fa.call(this, a);
        this.c = new xn("");
        this.hc(this.c, kh(this), !0);
    };
    w.Ve = function (a) {
        wn.m.Ve.call(this, a);
        this.c.j().firstChild.value = this.b.Bf(a);
    };
    w.J = function (a, b) {
        b = wn.m.J.call(this, a, b);
        a && null != this.j() && (Dm(this) != this.c.j().firstChild && Dm(this) != this.c.j().firstChild.nextSibling || Uh(this.c, !0));
        return b;
    };
    w.Cc = function (a) {
        wn.m.Cc.call(this, a);
        a.target == this.c ? Em(this, this.c.j().firstChild) : Em(this, this.j());
        Dm(this).focus();
        Dm(this).tabIndex = 0;
    };
    w.$c = function (a) {
        return a == this.c ? -1 : wn.m.$c.call(this, a);
    };
    w.Fa = function (a) {
        return 9 == a.keyCode ? (this.c.V & 2 ? (Dm(this) == this.c.j().firstChild ? Em(this, this.c.j().firstChild.nextSibling) : Em(this, this.c.j().firstChild), Dm(this).focus(), Dm(this).tabIndex = 0) : Uh(this.c, !0), a.b(), a.stopPropagation(), !0) : wn.m.Fa.call(this, a);
    };
    w.Od = function () {
        return null === Im(this) || !(Im(this) instanceof xn);
    };
    function xn(a, b, c) {
        W.call(this, a, c || yn.ka(), b);
        this.pa(4, !1);
    }

    F(xn, W);
    xn.prototype.Ac = function (a) {
        a.target == this.j().firstChild.nextSibling && this.dispatchEvent(za);
    };
    xn.prototype.O = function () {
        xn.m.O.call(this);
        U(this).w(this.j().firstChild, tb, function (a) {
            32 == a.keyCode && a.stopPropagation();
        });
    };
    xn.prototype.bb = function () {
        return this.j().firstChild.value;
    };
    function yn() {
    }

    F(yn, oh);
    fc(yn);
    var zn = "";
    yn.prototype.D = function (a) {
        var b = a.b.D(ma, {value: a.$(), id: "alt-input-text", type: "text"}),
            c = a.b.D(ma, {value: zn, id: "alt-input-submit", "class": "", type: Ja});
        return a.b.D(f, {id: "alt-input"}, b, c);
    };
    L || J || Jd || K && M("1.9");
    function An() {
    }

    F(An, oh);
    fc(An);
    w = An.prototype;
    w.Qb = cc();
    w.Ja = function (a, b) {
        Ph(a, !1);
        a.fb &= -256;
        a.pa(32, !1);
        An.m.Ja.call(this, a, b);
        a.Hb(b.value);
        return b;
    };
    w.D = function (a) {
        Ph(a, !1);
        a.fb &= -256;
        a.pa(32, !1);
        return a.b.D(sa, {"class": rh(this, a).join(" "), disabled: !a.isEnabled()}, a.$() || "");
    };
    w.hd = function (a) {
        return a.tagName == sa;
    };
    w.ie = z;
    w.he = function (a) {
        return a.isEnabled();
    };
    w.Rb = z;
    w.yc = function (a, b, c) {
        An.m.yc.call(this, a, b, c);
        (a = a.j()) && 1 == b && (a.disabled = c);
    };
    w.Ua = z;
    w.xc = function (a, b) {
        a && (a.value = b);
    };
    w.da = u("goog-textarea");
    function Bn(a, b, c) {
        W.call(this, a, b || An.ka(), c);
        Ph(this, !1);
        this.Oc = !0;
        (b = this.j()) && this.a.jd(b, !0);
        this.Vb = "" != a;
        a || (this.Gb = "");
    }

    F(Bn, W);
    var Cn = !(J && !Td(11));
    w = Bn.prototype;
    w.Wb = !1;
    w.ud = !1;
    w.Vb = !1;
    w.mb = 0;
    w.dg = 0;
    w.Ee = 0;
    w.Uf = !1;
    w.Bd = !1;
    w.Se = !1;
    w.Re = !1;
    w.cc = "";
    function Dn(a) {
        return a.c.top + a.c.bottom + a.o.top + a.o.bottom;
    }

    function En(a) {
        var b = a.Ee,
            c = a.j();
        b && c && a.Bd && (b -= Dn(a));
        return b;
    }

    function Fn(a) {
        a.Ee = 50;
        Gn(a);
    }

    function Hn(a) {
        a.dg = 50;
        Gn(a);
    }

    w.ua = function (a) {
        this.Hb(String(a));
    };
    w.xa = function () {
        return this.j().value != this.cc || In(this) || this.Vb ? this.j().value : "";
    };
    w.Hb = function (a) {
        Bn.m.Hb.call(this, a);
        this.Vb = "" != a;
        Gn(this);
    };
    w.oa = function (a) {
        Bn.m.oa.call(this, a);
        this.j().disabled = !a;
    };
    function Gn(a) {
        a.j() && a.ld();
    }

    function In(a) {
        return "placeholder" in a.j();
    }

    function Jn(a) {
        a.cc && (In(a) ? a.j().placeholder = a.cc : !a.j() || a.Vb || a.ud || (H(a.j(), Ub), a.j().value = a.cc));
    }

    w.O = function () {
        Bn.m.O.call(this);
        var a = this.j();
        P(a, {overflowY: mb, overflowX: Ea, boxSizing: Ia, MsBoxSizing: Ia, WebkitBoxSizing: Ia, MozBoxSizing: Ia});
        this.c = dg(a);
        this.o = eg(a);
        U(this).w(a, "scroll", this.ld).w(a, Za, this.ld).w(a, "keyup", this.ld).w(a, Ab, this.wi).w(a, Ha, this.fh);
        Jn(this);
        Gn(this);
    };
    function Kn(a) {
        if (!a.Uf) {
            var b = a.j().cloneNode(!1);
            P(b, {
                position: xa,
                height: Ea,
                top: "-9999px",
                margin: "0",
                padding: "1px",
                border: "1px solid #000",
                overflow: mb
            });
            a.b.a.body.appendChild(b);
            var c = b.scrollHeight;
            b.style.padding = "10px";
            var d = b.scrollHeight;
            a.Se = d > c;
            b.style.borderWidth = "10px";
            a.Re = b.scrollHeight > d;
            b.style.height = "100px";
            100 != b.offsetHeight && (a.Bd = !0);
            jf(b);
            a.Uf = !0;
        }
        b = a.j();
        isNaN(a.c.top) && (a.c = dg(b), a.o = eg(b));
        var c = a.j().scrollHeight,
            e = a.j(),
            d = e.offsetHeight - e.clientHeight;
        if (!a.Se) var g = a.c,
            d = d - (g.top + g.bottom);
        a.Re || (e = eg(e), d -= e.top + e.bottom);
        c += 0 < d ? d : 0;
        a.Bd ? c -= Dn(a) : (a.Se || (d = a.c, c += d.top + d.bottom), a.Re || (a = eg(b), c += a.top + a.bottom));
        return c;
    }

    function Ln(a, b) {
        a.mb != b && (a.mb = b, a.j().style.height = b + "px");
    }

    function Mn(a) {
        var b = a.j();
        b.style.height = Ea;
        var c = b.value.match(/\n/g) || [];
        b.rows = c.length + 1;
        a.mb = 0;
    }

    w.fh = function () {
        In(this) || (this.ud = !1, "" == this.j().value && (this.Vb = !1, Jn(this)));
    };
    w.ld = function (a) {
        if (!this.Wb) {
            var b = this.j();
            !In(this) && a && a.type == Za && (b.value == this.cc && this.cc && !this.ud && (id(b, Ub), b.value = ""), this.ud = !0, this.Vb = "" != b.value);
            var c = !1;
            this.Wb = !0;
            a = this.mb;
            if (b.scrollHeight) {
                var d = !1,
                    e = !1,
                    g = Kn(this),
                    h = b.offsetHeight,
                    k = En(this);
                var l = this.dg;
                var m = this.j();
                l && m && this.Bd && (l -= Dn(this));
                k && g < k ? (Ln(this, k), d = !0) : l && g > l ? (Ln(this, l), b.style.overflowY = "", e = !0) : h != g ? Ln(this, g) : this.mb || (this.mb = g);
                d || e || !Cn || (c = !0);
            } else Mn(this);
            this.Wb = !1;
            c && (b = this.j(), this.Wb || (this.Wb = !0, (e = b.scrollHeight) ? (g = Kn(this), c = En(this), c && g <= c || (d = this.c, b.style.paddingBottom = d.bottom + 1 + "px", Kn(this) == g && (b.style.paddingBottom = d.bottom + e + "px", b.scrollTop = 0, e = Kn(this) - e, e >= c ? Ln(this, e) : Ln(this, c)), b.style.paddingBottom = d.bottom + "px")) : Mn(this), this.Wb = !1));
            a != this.mb && this.dispatchEvent("resize");
        }
    };
    w.wi = function () {
        var a = this.j(),
            b = a.offsetHeight;
        a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
        b != this.mb && (this.mb = this.Ee = b);
    };
    var td = {},
        Nn = null;

    function On(a) {
        a = kc(a);
        delete td[a];
        sd() && Nn && Nn.stop();
    }

    function Pn() {
        Nn || (Nn = new ek(function () {
            Qn();
        }, 20));
        var a = Nn;
        0 != a.ea || a.start();
    }

    function Qn() {
        var a = qc();
        od(td, function (b) {
            Rn(b, a);
        });
        sd() || Pn();
    };
    function Sn(a, b, c, d) {
        Dk.call(this);
        if (!B(a) || !B(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.s = a;
        this.K = b;
        this.duration = c;
        this.C = d;
        this.h = [];
        this.b = 0;
    }

    F(Sn, Dk);
    w = Sn.prototype;
    w.play = function (a) {
        if (a || 0 == this.a) this.b = 0, this.h = this.s; else if (1 == this.a) return !1;
        On(this);
        this.c = a = qc();
        -1 == this.a && (this.c -= this.duration * this.b);
        this.l = this.c + this.duration;
        this.b || this.f();
        this.Ma("play");
        -1 == this.a && this.Ma("resume");
        this.a = 1;
        var b = kc(this);
        b in td || (td[b] = this);
        Pn();
        Rn(this, a);
        return !0;
    };
    w.stop = function (a) {
        On(this);
        this.a = 0;
        a && (this.b = 1);
        Tn(this, this.b);
        this.wb();
        this.g();
    };
    w.Ue = function (a) {
        this.b = a;
        1 == this.a && (this.c = qc() - this.duration * this.b, this.l = this.c + this.duration);
    };
    w.F = function () {
        0 == this.a || this.stop(!1);
        this.Ma("destroy");
        Sn.m.F.call(this);
    };
    function Rn(a, b) {
        b < a.c && (a.l = b + a.l - a.c, a.c = b);
        a.b = (b - a.c) / (a.l - a.c);
        1 < a.b && (a.b = 1);
        Tn(a, a.b);
        1 == a.b ? (a.a = 0, On(a), a.Ma(Wa), a.g()) : 1 == a.a && a.Ge();
    }

    function Tn(a, b) {
        ic(a.C) && (b = a.C(b));
        a.h = Array(a.s.length);
        for (var c = 0; c < a.s.length; c++) {
            a.h[c] = (a.K[c] - a.s[c]) * b + a.s[c];
        }
    }

    w.Ge = function () {
        this.Ma("animate");
    };
    w.Ma = function (a) {
        this.dispatchEvent(new Un(a, this));
    };
    function Un(a, b) {
        rg.call(this, a);
        this.x = b.h[0];
        this.y = b.h[1];
        this.duration = b.duration;
    }

    F(Un, rg);
    function Vn(a, b, c, d, e) {
        Sn.call(this, b, c, d, e);
        this.B = a;
    }

    F(Vn, Sn);
    Vn.prototype.G = z;
    Vn.prototype.Ge = function () {
        this.G();
        Vn.m.Ge.call(this);
    };
    Vn.prototype.g = function () {
        this.G();
        Vn.m.g.call(this);
    };
    Vn.prototype.f = function () {
        this.G();
        Vn.m.f.call(this);
    };
    function Wn(a, b, c, d, e) {
        hc(b) && (b = [b]);
        hc(c) && (c = [c]);
        Vn.call(this, a, b, c, d, e);
        if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
        this.o = -1;
    }

    F(Wn, Vn);
    var Xn = 1 / 1024;
    Wn.prototype.G = function () {
        var a = this.h[0];
        if (Math.abs(a - this.o) >= Xn) {
            var b = this.B.style;
            "opacity" in b ? b.opacity = a : "MozOpacity" in b ? b.MozOpacity = a : "filter" in b && (b.filter = "" === a ? "" : "alpha(opacity=" + 100 * Number(a) + ")");
            this.o = a;
        }
    };
    Wn.prototype.f = function () {
        this.o = -1;
        Wn.m.f.call(this);
    };
    Wn.prototype.g = function () {
        this.o = -1;
        Wn.m.g.call(this);
    };
    function Yn(a, b, c) {
        Wn.call(this, a, 1, 0, b, c);
    }

    F(Yn, Wn);
    Yn.prototype.f = function () {
        this.B.style.display = "";
        Yn.m.f.call(this);
    };
    Yn.prototype.g = function () {
        this.B.style.display = p;
        Yn.m.g.call(this);
    };
    function Zn(a, b, c) {
        Wn.call(this, a, 0, 1, b, c);
    }

    F(Zn, Wn);
    Zn.prototype.f = function () {
        this.B.style.display = "";
        Zn.m.f.call(this);
    };
    function $n(a) {
        return function () {
            return a;
        };
    }

    function ao(a, b) {
        for (var c = 0; c < b.length - 2; c += 3) {
            var d = b.charAt(c + 2),
                d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d),
                d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
            a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d;
        }
        return a;
    }

    function bo(a, b) {
        var c = b.split(".");
        b = Number(c[0]) || 0;
        for (var d = [], e = 0, g = 0; g < a.length; g++) {
            var h = a.charCodeAt(g);
            128 > h ? d[e++] = h : (2048 > h ? d[e++] = h >> 6 | 192 : (55296 == (h & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (h = 65536 + ((h & 1023) << 10) + (a.charCodeAt(++g) & 1023), d[e++] = h >> 18 | 240, d[e++] = h >> 12 & 63 | 128) : d[e++] = h >> 12 | 224, d[e++] = h >> 6 & 63 | 128), d[e++] = h & 63 | 128);
        }
        a = b;
        for (e = 0; e < d.length; e++) {
            a += d[e], a = ao(a, "+-a^+6");
        }
        a = ao(a, "+-3^+b+-f");
        a ^= Number(c[1]) || 0;
        0 > a && (a = (a & 2147483647) + 2147483648);
        c = a % 1E6;
        return c.toString() + "." + (c ^ b);
    }

    var co = null;

    function eo() {
        var a = $n(String.fromCharCode(116)),
            b = $n(String.fromCharCode(107)),
            a = [a(), a()];
        a[1] = b();
        return a.join("");
    };
    function fo() {
    }

    fo.prototype.a = null;
    function go(a) {
        var b;
        (b = a.a) || (b = {}, ho(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
        return b;
    };
    var io;

    function jo() {
    }

    F(jo, fo);
    function ko(a) {
        return (a = ho(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    }

    function ho(a) {
        if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.b = d;
                } catch (e) {
                }
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.b;
    }

    io = new jo();
    function lo(a) {
        Yg.call(this);
        this.headers = new ki();
        this.o = a || null;
        this.b = !1;
        this.B = this.a = null;
        this.g = "";
        this.f = 0;
        this.c = this.C = this.h = this.G = !1;
        this.s = 0;
        this.l = null;
        this.H = "";
        this.K = this.I = !1;
    }

    F(lo, Yg);
    var mo = /^https?$/i,
        no = [pa, "PUT"],
        oo = [];

    function po(a, b, c, d, e) {
        var g = new lo();
        oo.push(g);
        b && g.w(Ra, b);
        g.vb(Lb, g.hh);
        e && (g.s = Math.max(0, e));
        g.send(a, c, d, void 0);
    }

    w = lo.prototype;
    w.hh = function () {
        this.M();
        ad(oo, this);
    };
    w.send = function (a, b, c, d) {
        if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.g + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.g = a;
        this.f = 0;
        this.G = !1;
        this.b = !0;
        this.a = this.o ? ko(this.o) : ko(io);
        this.B = this.o ? go(this.o) : go(io);
        this.a.onreadystatechange = D(this.kg, this);
        try {
            this.C = !0, this.a.open(b, String(a), !0), this.C = !1;
        } catch (g) {
            qo(this);
            return;
        }
        a = c || "";
        var e = new ki(this.headers);
        d && qi(d, function (a, b) {
            e.set(b, a);
        });
        d = Zc(e.Oa(), ro);
        c = x.FormData && a instanceof x.FormData;
        !$c(no, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function (a, b) {
            this.a.setRequestHeader(b, a);
        }, this);
        this.H && (this.a.responseType = this.H);
        bc in this.a && this.a.withCredentials !== this.I && (this.a.withCredentials = this.I);
        try {
            so(this), 0 < this.s && ((this.K = to(this.a)) ? (this.a.timeout = this.s, this.a.ontimeout = D(this.zb, this)) : this.l = ck(this.zb, this.s, this)), this.h = !0, this.a.send(a), this.h = !1;
        } catch (g) {
            qo(this);
        }
    };
    function to(a) {
        return J && M(9) && hc(a.timeout) && y(a.ontimeout);
    }

    function ro(a) {
        return "content-type" == a.toLowerCase();
    }

    w.zb = function () {
        "undefined" != typeof ec && this.a && (this.f = 8, this.dispatchEvent("timeout"), this.abort(8));
    };
    function qo(a) {
        a.b = !1;
        a.a && (a.c = !0, a.a.abort(), a.c = !1);
        a.f = 5;
        uo(a);
        vo(a);
    }

    function uo(a) {
        a.G || (a.G = !0, a.dispatchEvent(Ra), a.dispatchEvent("error"));
    }

    w.abort = function (a) {
        this.a && this.b && (this.b = !1, this.c = !0, this.a.abort(), this.c = !1, this.f = a || 7, this.dispatchEvent(Ra), this.dispatchEvent("abort"), vo(this));
    };
    w.F = function () {
        this.a && (this.b && (this.b = !1, this.c = !0, this.a.abort(), this.c = !1), vo(this, !0));
        lo.m.F.call(this);
    };
    w.kg = function () {
        this.Y || (this.C || this.h || this.c ? wo(this) : this.Bi());
    };
    w.Bi = function () {
        wo(this);
    };
    function wo(a) {
        if (a.b && "undefined" != typeof ec && (!a.B[1] || 4 != (a.a ? a.a.readyState : 0) || 2 != xo(a))) if (a.h && 4 == (a.a ? a.a.readyState : 0)) ck(a.kg, 0, a); else if (a.dispatchEvent(Mb), 4 == (a.a ? a.a.readyState : 0)) {
            a.b = !1;
            try {
                yo(a) ? (a.dispatchEvent(Ra), a.dispatchEvent("success")) : (a.f = 6, uo(a));
            } finally {
                vo(a);
            }
        }
    }

    function vo(a, b) {
        if (a.a) {
            so(a);
            var c = a.a,
                d = a.B[0] ? z : null;
            a.a = null;
            a.B = null;
            b || a.dispatchEvent(Lb);
            try {
                c.onreadystatechange = d;
            } catch (e) {
            }
        }
    }

    function so(a) {
        a.a && a.K && (a.a.ontimeout = null);
        hc(a.l) && (dk(a.l), a.l = null);
    }

    function yo(a) {
        var b = xo(a);
        a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var c = !0;
                break a;
            default:
                c = !1;
        }
        if (!c) {
            if (b = 0 === b) a = String(a.g).match(ri)[1] || null, !a && x.self && x.self.location && (a = x.self.location.protocol, a = a.substr(0, a.length - 1)), b = !mo.test(a ? a.toLowerCase() : "");
            c = b;
        }
        return c;
    }

    function xo(a) {
        try {
            return 2 < (a.a ? a.a.readyState : 0) ? a.a.status : -1;
        } catch (b) {
            return -1;
        }
    }

    function zo(a) {
        try {
            return a.a ? a.a.responseText : "";
        } catch (b) {
            return "";
        }
    };
    function Ao(a, b) {
        this.b = a;
        this.a = "";
        b && (this.a = b);
        this.c = 0;
    }

    function Bo(a) {
        a = a.ya("q").join("");
        if (null !== co) var b = co; else {
            var c = $n(String.fromCharCode(84));
            b = $n(String.fromCharCode(75));
            c = [c(), c()];
            c[1] = b();
            b = (co = window[c.join(b())] || "") || "";
        }
        return "&" + eo() + "=" + bo(a, b);
    }

    function Co(a, b, c, d, e) {
        c = c.toString();
        c += Bo(d);
        d = d.toString();
        var g = pa;
        b += "?" + c;
        2E3 > b.length + d.length && (g = "GET", b += "&" + d, d = "");
        ++a.c;
        po(b, function (b) {
            --a.c;
            e(b);
        }, g, d, void 0);
    }

    Ao.prototype.f = function (a, b, c) {
        c = c.target;
        !yo(c) || "[" != zo(c)[0] && "{" != zo(c)[0] ? (Do(c), b && b(xo(c))) : (b = Eo(c, "handleSingleResult_"), B(b) && (b = new el(b)), a(b));
    };
    Ao.prototype.g = function (a, b, c) {
        c = c.target;
        if (yo(c)) {
            c = Eo(c, "handleTextResult_");
            var d = [];
            if (a) d.push(B(c) ? c[0] : c); else if (B(c)) for (a = 0; a < c.length; ++a) {
                d.push(B(c[a]) ? c[a][0] : c[a]);
            }
            b(d);
        } else Do(c), b(null, c.f);
    };
    function Eo(a, b) {
        var c = zo(a);
        a = {"class": "trans.common.TranslationAPI", func: b, url: String(a.g)};
        try {
            var d = JSON.parse(c);
        } catch (e) {
            throw d = kk.ka(), a.js = c, a.error = e.message, d.log("jsonParseErr", a), e;
        }
        return d;
    }

    function Do(a) {
        var b = kk.ka(),
            c = String(a.g);
        a = zo(a);
        b.log("invalidResponse", {q: c.substring(0, 500), ql: c.length, r: a.substring(0, 500), rl: a.length});
    };
    function Fo(a, b) {
        this.a = [];
        this.b = b;
        for (var c = !0, d = a.length - 1; 0 <= d; d--) {
            var e = a[d] | 0;
            c && e == b || (this.a[d] = e, c = !1);
        }
    }

    var Go = {};

    function Ho(a) {
        if (-128 <= a && 128 > a) {
            var b = Go[a];
            if (b) return b;
        }
        b = new Fo([a | 0], 0 > a ? -1 : 0);
        -128 <= a && 128 > a && (Go[a] = b);
        return b;
    }

    function Io(a) {
        if (isNaN(a) || !isFinite(a)) return Jo;
        if (0 > a) return Ko(Io(-a));
        for (var b = [], c = 1, d = 0; a >= c; d++) {
            b[d] = a / c | 0, c *= 4294967296;
        }
        return new Fo(b, 0);
    }

    var Jo = Ho(0),
        Lo = Ho(1),
        Mo = Ho(16777216);

    function No(a) {
        if (-1 == a.b) return -No(Ko(a));
        for (var b = 0, c = 1, d = 0; d < a.a.length; d++) {
            var e = Oo(a, d),
                b = b + (0 <= e ? e : 4294967296 + e) * c,
                c = 4294967296 * c;
        }
        return b;
    }

    Fo.prototype.toString = function (a) {
        a = a || 10;
        if (2 > a || 36 < a) throw Error("radix out of range: " + a);
        if (Po(this)) return "0";
        if (-1 == this.b) return "-" + Ko(this).toString(a);
        for (var b = Io(Math.pow(a, 6)), c = this, d = ""; ;) {
            var e = Qo(c, b),
                c = Ro(c, So(e, b)),
                g = ((0 < c.a.length ? c.a[0] : c.b) >>> 0).toString(a),
                c = e;
            if (Po(c)) return g + d;
            for (; 6 > g.length;) {
                g = "0" + g;
            }
            d = "" + g + d;
        }
    };
    function Oo(a, b) {
        return 0 > b ? 0 : b < a.a.length ? a.a[b] : a.b;
    }

    function Po(a) {
        if (0 != a.b) return !1;
        for (var b = 0; b < a.a.length; b++) {
            if (0 != a.a[b]) return !1;
        }
        return !0;
    }

    function To(a, b) {
        a = Ro(a, b);
        return -1 == a.b ? -1 : Po(a) ? 0 : 1;
    }

    function Ko(a) {
        for (var b = a.a.length, c = [], d = 0; d < b; d++) {
            c[d] = ~a.a[d];
        }
        return new Fo(c, ~a.b).add(Lo);
    }

    Fo.prototype.add = function (a) {
        for (var b = Math.max(this.a.length, a.a.length), c = [], d = 0, e = 0; e <= b; e++) {
            var g = d + (Oo(this, e) & 65535) + (Oo(a, e) & 65535),
                h = (g >>> 16) + (Oo(this, e) >>> 16) + (Oo(a, e) >>> 16),
                d = h >>> 16,
                g = g & 65535,
                h = h & 65535;
            c[e] = h << 16 | g;
        }
        return new Fo(c, c[c.length - 1] & -2147483648 ? -1 : 0);
    };
    function Ro(a, b) {
        return a.add(Ko(b));
    }

    function So(a, b) {
        if (Po(a) || Po(b)) return Jo;
        if (-1 == a.b) return -1 == b.b ? So(Ko(a), Ko(b)) : Ko(So(Ko(a), b));
        if (-1 == b.b) return Ko(So(a, Ko(b)));
        if (0 > To(a, Mo) && 0 > To(b, Mo)) return Io(No(a) * No(b));
        for (var c = a.a.length + b.a.length, d = [], e = 0; e < 2 * c; e++) {
            d[e] = 0;
        }
        for (e = 0; e < a.a.length; e++) {
            for (var g = 0; g < b.a.length; g++) {
                var h = Oo(a, e) >>> 16,
                    k = Oo(a, e) & 65535,
                    l = Oo(b, g) >>> 16,
                    m = Oo(b, g) & 65535;
                d[2 * e + 2 * g] += k * m;
                Uo(d, 2 * e + 2 * g);
                d[2 * e + 2 * g + 1] += h * m;
                Uo(d, 2 * e + 2 * g + 1);
                d[2 * e + 2 * g + 1] += k * l;
                Uo(d, 2 * e + 2 * g + 1);
                d[2 * e + 2 * g + 2] += h * l;
                Uo(d, 2 * e + 2 * g + 2);
            }
        }
        for (e = 0; e < c; e++) {
            d[e] = d[2 * e + 1] << 16 | d[2 * e];
        }
        for (e = c; e < 2 * c; e++) {
            d[e] = 0;
        }
        return new Fo(d, 0);
    }

    function Uo(a, b) {
        for (; (a[b] & 65535) != a[b];) {
            a[b + 1] += a[b] >>> 16, a[b] &= 65535, b++;
        }
    }

    function Qo(a, b) {
        if (Po(b)) throw Error("division by zero");
        if (Po(a)) return Jo;
        if (-1 == a.b) return -1 == b.b ? Qo(Ko(a), Ko(b)) : Ko(Qo(Ko(a), b));
        if (-1 == b.b) return Ko(Qo(a, Ko(b)));
        if (30 < a.a.length) {
            if (-1 == a.b || -1 == b.b) throw Error("slowDivide_ only works with positive integers.");
            for (var c = Lo; 0 >= To(b, a);) {
                c = Vo(c, 1), b = Vo(b, 1);
            }
            var d = Wo(c, 1),
                e = Wo(b, 1);
            b = Wo(b, 2);
            for (c = Wo(c, 2); !Po(b);) {
                var g = e.add(b);
                0 >= To(g, a) && (d = d.add(c), e = g);
                b = Wo(b, 1);
                c = Wo(c, 1);
            }
            return d;
        }
        for (c = Jo; 0 <= To(a, b);) {
            d = Math.max(1, Math.floor(No(a) / No(b)));
            e = Math.ceil(Math.log(d) / Math.LN2);
            e = 48 >= e ? 1 : Math.pow(2, e - 48);
            g = Io(d);
            for (var h = So(g, b); -1 == h.b || 0 < To(h, a);) {
                d -= e, g = Io(d), h = So(g, b);
            }
            Po(g) && (g = Lo);
            c = c.add(g);
            a = Ro(a, h);
        }
        return c;
    }

    function Vo(a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.a.length + c + (0 < b ? 1 : 0), e = [], g = 0; g < d; g++) {
            e[g] = 0 < b ? Oo(a, g - c) << b | Oo(a, g - c - 1) >>> 32 - b : Oo(a, g - c);
        }
        return new Fo(e, a.b);
    }

    function Wo(a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.a.length - c, e = [], g = 0; g < d; g++) {
            e[g] = 0 < b ? Oo(a, g + c) >>> b | Oo(a, g + c + 1) << 32 - b : Oo(a, g + c);
        }
        return new Fo(e, a.b);
    };
    Ro(Vo(Lo, 32), Lo);
    Ho(65535);
    Ro(Vo(Lo, 128), Lo);
    function Xo(a) {
        return (a = a.exec(kd)) ? a[1] : "";
    }

    var Yo = function () {
        if (Pk) return Xo(/Firefox\/([0-9.]+)/);
        if (J || Jd || Id) return Sd;
        if (Tk) return Dd() || I("iPad") || I("iPod") ? Xo(/CriOS\/([0-9.]+)/) : Xo(/Chrome\/([0-9.]+)/);
        if (Uk && !(Dd() || I("iPad") || I("iPod"))) return Xo(/Version\/([0-9.]+)/);
        if (Qk || Rk) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(kd);
            if (a) return a[1] + "." + a[2];
        } else if (Sk) return (a = Xo(/Android\s+([0-9.]+)/)) ? a : Xo(/Version\/([0-9.]+)/);
        return "";
    }();
    var Zo = J || L || Id || Jd || !1;
    L && M("534.16");
    J && M("7.0");
    K && M("1.8");
    L || J && M("9");
    J || Jd || Id || K && M("1.9");
    K || L && M("527");
    J || Jd || L && M("525");
    L && M("531");
    L && M("528");
    K && M("1.9") || J || Jd || Id || L && M("531");
    K || L && M("526");
    Tk && 0 <= Oc(Yo, "4") || Uk && M("533") || K && M("2.0") || J && M("10") || Id && Oc(Bd(), "15");
    Id && M("11.10");
    Tk && Oc(Yo, "12");
    function $o(a, b, c, d, e, g, h, k) {
        T.call(this, a);
        this.g = h || null;
        null != this.g && this.g.h(D(this.Ih, this));
        this.l = null;
        this.a = Ea;
        this.La = this.c = "";
        this.Xa = new Ao("mt");
        this.Bb = !!b && Zo && !J;
        this.L = null != e ? e : 0;
        this.f = null;
        this.Bb ? this.f = new vn() : this.f = new wn();
        if (0 < this.L) for (a = this.f, a.o = !0, b = 0; b < a.f; b++) {
            h = Ze(f, "goog-menu", ""), e = Ze(f, null, h), h = new Mk(e, h), a.g[b] = h, document.body.appendChild(e);
        }
        this.f.fa(c);
        this.h = k || null;
        this.Wa = null != d ? d : -1;
        this.I = kk.ka();
        this.C = new ki();
        this.P = this.W = this.H = null;
        this.o = g || null;
        this.ha = !1;
        null != this.o && (this.o.c(D(this.Si, this)), this.o.a(D(this.Eh, this)));
        this.ra = null;
    }

    F($o, T);
    function ap(a, b) {
        a.ra = b;
        a.f.l = b;
    }

    function bp(a) {
        a.H = pb;
        a.f.C.h = a.H || "";
    }

    function cp(a, b) {
        null != a.o && a.o.f();
        b && (a.l = new el(b), a.P = null);
        dp(a) && (a.g.b(), null != a.h && a.h.a(!1));
        if (a.l) {
            b = 0 != Pe().length;
            a.b.Ec(a.j());
            a.f.Vc();
            a.ra && (a.ra.b = a.l);
            for (var c = "", d = 0, e = 0; e < Y(a.l, 5); e++) {
                ep(a.l, e) && (c += " "), c += fp(a.l, e), d += Y(gl(a.l, e), 2);
            }
            if (0 != d) {
                for (var c = [], d = !1, e = a.l, g = "", h = 0; h < Y(e, 5); h++) {
                    var k = gl(e, h);
                    null != k.data[4] && 0 < Zk(k, 4).length ? g = Zk(k, 4) : new al(k.data).data[4] = g;
                }
                for (e = 0; e < Y(a.l, 5); e++) {
                    g = gl(a.l, e);
                    h = fl(g, 0);
                    ep(a.l, e) ? a.b.appendChild(a.j(), a.b.a.createTextNode(" ")) : "km" != a.c && "lo" != a.c || a.b.appendChild(a.j(), L ? cf() : Id ? document.createTextNode("&shy;") : J && M(8) ? document.createTextNode("&#8203;") : cf());
                    null != g.data[4] && 0 < Zk(g, 4).length && 0 == Yk(g, 5) && c.push(Zk(g, 4));
                    var l,
                        k = fp(a.l, e);
                    /^[\s\xa0]*$/.test(k) ? 0 == k.length || (l = gp(k)) : (l = a.b.D(ra, null, k), h = Yk(h, 1), 0 <= a.Wa && h < a.Wa && H(l, "alt-low-conf"), mi(a.C, a.a + "." + a.c + "." + Zk(g, 0)) && (h = a.C.get(a.a + "." + a.c + "." + Zk(g, 0)), h != hp(g, 0) && (a.b.eb(l, h), H(l, Ca), d = !0, ip(a, !0))), l.title = on, pn(a.f, l, g));
                    l && a.b.appendChild(a.j(), l);
                }
                if (null != a.g) {
                    l = a.a + "." + a.c;
                    for (e = 0; e < c.length; ++e) {
                        l += "." + c[e];
                    }
                    mi(a.C, l) && (jp(a, !1), d = !0, kp(a, a.C.get(l)), null != a.h && a.h.a(!1), ip(a, !0));
                }
                d || (ip(a, !1), jp(a, !1));
                (d || b) && a.dispatchEvent(za);
            }
        } else ip(a, !1), jp(a, !1);
    }

    function gp(a) {
        a = Cc(a).replace(/(\r\n|\r|\n)/g, "<br>").split("<br>");
        var b = document.createDocumentFragment(),
            c = 0;
        Uc(a, function (a) {
            0 != c && b.appendChild(Ze("BR"));
            c++;
            "" != a && b.appendChild(document.createTextNode(String(Kc(a))));
        });
        return b;
    }

    function lp(a, b) {
        if (dp(a)) return a.g.a();
        var c = [];
        if (a.j() && a.j().childNodes) for (var d = 0; d < a.j().childNodes.length; ++d) {
            var e = a.j().childNodes[d];
            c[d] = b && "BR" == e.tagName ? "\n" : Bf(e);
        }
        return c.join("");
    }

    function mp(a, b, c, d) {
        for (a = 0; a < Y(b, 5); a++) {
            var e = gl(b, a);
            if (Nk(c.data, e ? e.data : null)) {
                c = b;
                b = a;
                e = -1;
                a = Y(c, 5);
                for (var g = b; 0 <= g; g--) {
                    if (0 == Yk(gl(c, g), 5)) {
                        e = g;
                        break;
                    }
                }
                for (g = b + 1; g <= Y(c, 5); g++) {
                    if (0 == Yk(gl(c, g), 5)) {
                        a = g;
                        break;
                    }
                }
                if (null != d && d) b = np(c, e, a); else if (d = c, c = e, d) {
                    e = b + 1;
                    g = b;
                    for (b = fp(d, b).length; 64 > b && (e != a || g != c);) {
                        e < a && (b += fp(d, e++).length + 1), 64 > b && g > c && (b += fp(d, --g).length + 1);
                    }
                    b = np(d, g, e);
                } else b = "";
                return b;
            }
        }
        return "";
    }

    function np(a, b, c) {
        var d = [];
        d.push(fp(a, b));
        for (b += 1; b < c; b++) {
            ep(a, b) && d.push(" "), d.push(fp(a, b));
        }
        return d.join("");
    }

    function ep(a, b) {
        if (0 == b) return !1;
        var c = gl(a, b),
            d = gl(a, b - 1);
        if (c = Xk(fl(c, 0), 2) && !Xk(fl(d, 0), 3)) a = fp(a, b - 1), b = a.length - 1, c = !(0 <= b && a.indexOf("\n", b) == b);
        return c;
    }

    w = $o.prototype;
    w.uc = r("a");
    w.wa = r("c");
    w.D = function () {
        this.S(Ef(this.b, "span"));
    };
    w.S = function (a) {
        $o.m.S.call(this, a);
        cp(this);
    };
    w.O = function () {
        $o.m.O.call(this);
        U(this).w(this.f, za, this.Uh);
        null != this.h && null != this.h.b && U(this).w(this.h.b, Pa, this.Yh);
        U(this).w(this.f, "show", this.Th);
        this.j() && U(this).w(this.j(), tb, function (a) {
            32 == a.keyCode && a.stopPropagation();
        }, !0);
    };
    w.F = function () {
        $o.m.F.call(this);
        this.f.M();
    };
    w.Ih = function () {
        this.o.oa(this.g.c());
        ip(this, this.g.c());
    };
    w.Uh = function (a) {
        if (a.type != nb || a.target == this.f) if (null == a.target && null != this.g) this.I.log("editpopupclk"), null != this.h && this.h.a(!0), this.g.l(lp(this)), this.ha = this.o.j().style.display != p, this.o.reset(), this.o.oa(this.h.b.style.display != p), ip(this, !1); else {
            var b = a.g;
            null == b && null != a.currentTarget && (b = a.currentTarget.Ba);
            var c = a.target.bb();
            if (null != b && null != a.target) {
                var d = b,
                    e = this.f.h.get(kc(d));
                this.b.eb(d, c);
                c == hp(e, 0) ? (id(d, Ca), 0 == Pe().length && (ip(this, !1), jp(this, !1))) : (H(d, Ca), ip(this, !0), jp(this, !0));
                null != this.C && this.C.set(this.a + "." + this.c + "." + Zk(e, 0), c);
                b = this.f.h.get(kc(b));
                null != this.C && this.C.set(this.a + "." + this.c + "." + Zk(b, 0), c);
                e = hp(b, 0);
                d = nh(this.f, a.target);
                e = {
                    sl: this.a,
                    tl: this.c,
                    utrans: c,
                    gtrans: e,
                    index: d,
                    ophrase: Zk(b, 0),
                    osentence: Zk(b, 4),
                    tsentence: mp(this, this.l, b)
                };
                0 < Y(b, 2) && (e.confidence = Yk(fl(b, 0), 1));
                if (a.target instanceof xn || -1 == d) e.manual = 1;
                for (var g in e) {
                    C(e[g]) && 64 < e[g].length && (e.tr = 1, e[g] = e[g].substr(0, 64));
                }
                this.I.log("usealt", e, this.H);
                a = new rg("usealt");
                a.text = c;
                this.dispatchEvent(a);
                this.dispatchEvent(za);
            }
        }
    };
    function kp(a, b) {
        if (a.j()) {
            null == a.W && (a.P = cd(a.b.vh(a.j())));
            a.W = b;
            var c;
            if (c = a.j().childNodes && 0 < a.j().childNodes.length) c = (c = a.j().childNodes[0]) ? mi(a.f.a, kc(c)) : !1;
            c ? (a.b.Ec(a.j()), a.f.Vc(), b = a.b.D(ra, Ca, a.W), a.b.appendChild(a.j(), b), pn(a.f, b, new al())) : a.j().innerHTML = Cc(b).replace(/(\r\n|\r|\n)/g, "<br>");
        }
    }

    w.Yh = function () {
        null != this.g && dp(this) ? this.g.g() : op(this);
        this.I.log("clkundo", void 0, this.H);
    };
    w.Eh = function () {
        dp(this) && (this.g.c() && (kp(this, this.g.a()), this.ha = !0), this.g.b(), null != this.h && this.h.a(!1), this.g.c() && ip(this, !0), this.o.oa(!0), Q(this.o.j(), this.ha), this.dispatchEvent(za));
        this.I.log("clkcancel", void 0, this.H);
    };
    w.Th = function () {
        var a = this.f.h.get(kc(this.f.Ba));
        if (a) {
            if (0 < this.L) {
                var b = new yi("source=baf");
                if (1 == this.L) {
                    for (var c = [], d = 0, e = Y(a, 2); d < e; d++) {
                        c.push(hp(a, d));
                    }
                    var d = this.Xa,
                        g = this.c,
                        h = this.a,
                        k = Ne(document, "hl").value,
                        l = D(this.Ti, this),
                        e = d.a + da,
                        m = new yi(),
                        q = new yi();
                    m.set("client", d.b);
                    m.set("sl", g);
                    m.set("tl", h);
                    m.set("hl", k);
                    m.set("v", "1.0");
                    b && m.Af(b);
                    (b = !B(c) || B(c) && 1 == c.length) ? q.set("q", c) : Mi(q, "q", c);
                    b = D(d.g, d, b, l);
                    Co(d, e, m, q, b);
                } else for (d = 0, e = Y(a, 2); d < e; d++) {
                    var g = hp(a, d),
                        c = this.Xa,
                        m = this.c,
                        q = this.a,
                        l = Ne(document, "hl").value,
                        h = D(this.Ui, this, d),
                        k = b,
                        t = c.a + "/translate_a/single",
                        v = new yi(),
                        G = new yi();
                    v.set("client", c.b);
                    v.set("sl", m);
                    v.set("tl", q);
                    v.set("hl", l);
                    Mi(v, "dt", ["at", "t"]);
                    k && v.Af(k);
                    G.set("q", g);
                    Co(c, t, v, G, D(c.f, c, h, void 0));
                }
            }
            b = new rg(Pa);
            b.text = this.f.bb();
            b.h = Y(this.l, 5);
            this.dispatchEvent(b);
            b = {};
            b.confidence = Yk(fl(a, 0), 1);
            this.a && this.c && this.La && (b.segments = Y(this.l, 5), b.sl = this.a, b.tl = this.c, b.hl = this.La);
            this.I.log("phrsclk", b, this.H);
        }
    };
    w.Ui = function (a, b) {
        if (1 == this.L || 1 < Y(b, 5)) {
            var c = Zk(new dl($k(b, 0, 0)), 0);
            var d = 1;
            for (var e = Y(b, 0); d < e; d++) {
                c += " " + Zk(new dl($k(b, 0, d)), 0);
            }
            d = c;
        } else if (1 == Y(b, 5)) {
            c = [];
            b = gl(b, 0);
            d = 0;
            for (e = Math.min(this.L, Y(b, 2)); d < e; d++) {
                c.push(hp(b, d));
            }
            d = c.join(", ");
        } else d = "...";
        tn(this.f, a, d);
    };
    w.Ti = function (a) {
        for (var b = 0; b < a.length; b++) {
            tn(this.f, b, a[b]);
        }
    };
    function op(a) {
        dp(a) && (null != a.h && a.h.a(!1), a.g.b());
        oi(a.C);
        a.W = null;
        cp(a);
        a.dispatchEvent(za);
    }

    function ip(a, b) {
        null != a.h && null != a.h.b && Q(a.h.b, b);
    }

    function jp(a, b) {
        null != a.o && (b && a.o.reset(), Q(a.o.j(), b));
    }

    w.Si = function () {
        var a = [],
            b;
        null != this.P ? b = this.P : b = kf(this.j());
        for (var c = {segment: []}, d = null, e = 0, g = 0; g < b.length; g++) {
            var h = gl(this.l, g);
            if (null != h) {
                var k = Bf(b[g]);
                a: {
                    var l = k;
                    var m = h;
                    if (0 == Y(m, 2)) l = 0; else {
                        for (var q = 0; q < Y(m, 2); ++q) {
                            if (l == hp(m, q)) {
                                l = q;
                                break a;
                            }
                        }
                        l = -1;
                    }
                }
                m = xc(Zk(h, 4));
                q = mp(this, this.l, h, !0);
                if (0 != m.length) {
                    if (0 == a.length || m != a[a.length - 1]) a.push(m), d = pp(this, a.length - 1), e = 0, d = {
                        source: m,
                        original_target: q,
                        segment_source: d,
                        phrase_correction: []
                    }, c.segment.push(d);
                    if (0 != l) for (m = hp(h, 0).length, l = {
                        alternative_index: l,
                        edited_phrase: k,
                        source_span: [],
                        target_span: [{start: e, end: e + m}]
                    }, d.phrase_correction.push(l), m = 0; m < Y(h, 3); ++m) {
                        q = new cl($k(h, 3, m)), l.source_span.push({start: Yk(q, 0), end: Yk(q, 1)});
                    }
                    e += k.length;
                    Xk(fl(h, 0), 2) && e++;
                }
            }
        }
        if (dp(this)) {
            this.dispatchEvent(za);
            this.g.b();
            null != this.h && this.h.a(!1);
            ip(this, !0);
            this.g.a() != lp(this) && kp(this, this.g.a());
            b = this.a + "." + this.c;
            for (g = 0; g < a.length; ++g) {
                b += "." + a[g];
            }
            a = this.g.a();
            this.C.set(b, a);
            c.contains_full_edit = !0;
        }
        c.edited_target = lp(this, !0);
        a = new yi();
        a.set("ue", JSON.stringify(c));
        a.set("sl", this.a);
        a.set("tl", this.c);
        po("/translate_suggestion?client=t", void 0, pa, a.toString(), 1E4);
    };
    function pp(a, b) {
        if (b < Y(a.l, 0)) switch (Wk(new dl($k(a.l, 0, b)), 4, 0)) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 3;
            case 10:
                return 4;
            case 3:
                return 5;
        }
        return 0;
    }

    function dp(a) {
        return null != a.g && a.g.f();
    }

    function fp(a, b) {
        a = gl(a, b);
        return 0 == Y(a, 2) ? Zk(a, 0) : hp(a, 0);
    }

    function hp(a, b) {
        return Zk(fl(a, b), 0);
    };
    var qp = window.google && google.translate && google.translate._const;
    qp || (qp = {
        _cac: "",
        _cam: "",
        _cest: new Date(),
        _cjlc: "",
        _cl: "",
        _cuc: "",
        _cnad: !1,
        _cnal: {},
        Vj: "",
        _pah: "",
        _pas: "",
        _pbi: "",
        _pci: "",
        _phf: "",
        _pli: "",
        _plla: "",
        _pmi: "",
        _ps: "",
        _pta: "",
        _puh: ""
    });
    var rp = window.google && window.google.translate && window.google.translate.v || "",
        sp = qp._cl || "en",
        tp = qp._cuc,
        up = qp._cnad,
        vp = qp._cest,
        wp = qp._cnal || {},
        xp = "lib" == qp._cam ? 1 : 0,
        yp = (qp._cac || "te") + (1 == xp ? "_lib" : ""),
        zp = function () {
            function a(a) {
                return function () {
                    return a;
                };
            }

            var b = a(String.fromCharCode(116)),
                c = a(String.fromCharCode(107)),
                b = [b(), b()];
            b[1] = c();
            return qp["_c" + b.join(c())] || "";
        }(),
        Ap = qp._pah || "",
        Bp = qp._pas || "https://",
        Cp = qp._pbi || "",
        Dp = qp._pci || "",
        Ep = qp._plla || "",
        Fp = qp._pli || "",
        Gp = qp._ps || "",
        Hp = qp._puh || "",
        Ip = "//" + Hp + "/translate_suggestion?client=" + yp,
        Jp = "https://www.google.com/support/translate" + ("en" == sp ? "" : "#googtrans/en/" + sp);

    function Kp(a) {
        for (var b = {}, c = 0; c < a.length; ++c) {
            b[a[c]] = !0;
        }
        return b;
    }

    function Lp(a) {
        this.b = a ? [a] : [];
        this.a = [0];
        this.c = !1;
    }

    Lp.prototype.register = function (a) {
        if (this.c) return a || z;
        this.a.push(0);
        var b = this.a.length - 1;
        return D(function () {
            this.a[b]++;
            a && a.apply(null, arguments);
            Mp(this);
        }, this);
    };
    Lp.prototype.ab = function (a) {
        return this.c ? a : D(function () {
            if (this.c) a.apply(null, arguments); else {
                var b = arguments;
                this.b.push(function () {
                    a.apply(null, b);
                });
            }
        }, this);
    };
    Lp.prototype.finish = function () {
        this.a[0] = 1;
        Mp(this);
    };
    function Mp(a) {
        for (var b = 0; b < a.a.length; ++b) {
            if (0 == a.a[b]) return;
        }
        a.c = !0;
        for (b = 0; b < a.b.length; ++b) {
            var c = a.b[b];
            a.b[b] = null;
            c.call();
        }
        a.b = [];
        a.a = [];
    }

    function Np(a) {
        this.c = a;
        this.b = this.a = !1;
    }

    function Op(a, b) {
        return D(function () {
            b && b.apply(null, arguments);
            this.b ? this.a || (this.c.call(), this.a = !0) : this.a = !0;
        }, a);
    }

    Np.prototype.finish = function () {
        this.b || (this.b = !0, this.a && this.c.call());
    };
    function Pp(a, b, c, d) {
        this.a = b;
        this.h = a;
        this.s = c || 0;
        this.l = d || 0;
        this.b = this.c = !1;
    }

    function Qp(a) {
        a.c || a.g();
    }

    Pp.prototype.g = function () {
        (this.c = (this.b = !!this.h.call()) || 0 >= --this.l) ? (this.a.call(null, this.b), this.f = 0) : this.f = window.setTimeout(D(this.g, this), this.s);
    };
    Pp.prototype.cancel = function () {
        this.f && window.clearTimeout(this.f);
        this.c = !0;
        this.a.call(null, this.b);
    };
    function Rp(a, b) {
        return function () {
            a.dispatchEvent(b);
        };
    }

    function Sp(a) {
        a = xc(a).toLowerCase().replace("_", "-");
        if ("zh-cn" == a) return "zh-CN";
        if ("zh-tw" == a) return "zh-TW";
        var b = a.indexOf("-");
        a = 0 <= b ? a.substring(0, b) : a;
        return "zh" == a ? "zh-CN" : a;
    }

    function Tp(a) {
        var b = [],
            c;
        for (c in a) {
            if (a[c] !== Object.prototype[c]) {
                var d = Ac(c);
                if (A(a[c]) == Da) for (var e = 0; e < a[c].length; ++e) {
                    b.push(d + "=" + Ac(a[c][e]));
                } else b.push(d + "=" + Ac(a[c]));
            }
        }
        return b.join("&");
    }

    function Up(a, b) {
        b = b || {};
        b.nca = a;
        b.client = yp;
        rp && (b.logld = "v" + rp);
        var c = new Image();
        c.src = "//" + Hp + "/gen204?" + Tp(b);
        c.onload = function () {
            c.onload = null;
        };
    }

    function Vp(a, b) {
        if ((J || Id) && window.location.hostname != document.domain) {
            Wp = Wp ? Wp + 1 : 1;
            var c = "f" + Wp + "_" + qc().toString(36);
            window[c] = function () {
                window[c] = void 0;
                a.src = sb;
                b && window.setTimeout(function () {
                    b();
                }, 0);
            };
            a.src = "javascript:void(document.write(\"<script>document.domain='" + document.domain + "';parent['" + c + "']();\x3c/script>\"))";
        } else b && b();
    }

    var Wp;

    function Xp() {
        var a = {};
        try {
            for (var b in Object.prototype) {
                var c = Object.prototype[b];
                delete Object.prototype[b];
                a[b] = c;
            }
        } catch (d) {
            return {};
        }
        return a;
    }

    function Yp(a) {
        for (var b in a) {
            Object.prototype[b] = a[b];
        }
    }

    function Zp(a) {
        for (var b in a) {
            if (a[b] !== Object.prototype[b]) return !1;
        }
        return !0;
    }

    function $p(a, b) {
        return a != Ea && "zh-CN" != a && a == b;
    };
    var aq, bq, cq;
    (function () {
        function a(a, c, g) {
            var d = Array.prototype.slice.call(arguments);
            d.splice(0, 2);
            d = "l" + a.toString(16) + "i" + c.toString(16) + (d.length ? "-" + d.join("_") : "");
            b ? b.push(d) : Up(d);
        }

        var b = null,
            c = null;
        aq = function aq(b, c, g) {
            for (var d in g) {
                g[d] !== Object.prototype[d] && (c[d] = ic(g[d]) ? g[d] : pc(a, b, Number(g[d])));
            }
        };
        bq = function bq() {
            b && cq();
            b = [];
            c = S(window, "unload", function () {
                cq();
            });
        };
        cq = function cq() {
            c && (Pg(c), c = null);
            b && b.length && Up(b.join(""));
            b = null;
        };
    })();
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
     */
    function dq(a, b) {
        this.g = [];
        this.C = a;
        this.G = b || null;
        this.f = this.a = !1;
        this.c = void 0;
        this.B = this.Y = this.l = !1;
        this.h = 0;
        this.b = null;
        this.s = 0;
    }

    dq.prototype.cancel = function (a) {
        if (this.a) this.c instanceof dq && this.c.cancel(); else {
            if (this.b) {
                var b = this.b;
                delete this.b;
                a ? b.cancel(a) : (b.s--, 0 >= b.s && b.cancel());
            }
            this.C ? this.C.call(this.G, this) : this.B = !0;
            this.a || (a = new eq(), fq(this), gq(this, !1, a));
        }
    };
    dq.prototype.o = function (a, b) {
        this.l = !1;
        gq(this, a, b);
    };
    function gq(a, b, c) {
        a.a = !0;
        a.c = c;
        a.f = !b;
        hq(a);
    }

    function fq(a) {
        if (a.a) {
            if (!a.B) throw new iq();
            a.B = !1;
        }
    }

    function jq(a, b, c, d) {
        a.g.push([b, c, d]);
        a.a && hq(a);
    }

    dq.prototype.then = function (a, b, c) {
        var d,
            e,
            g = new Mj(function (a, b) {
                d = a;
                e = b;
            });
        jq(this, d, function (a) {
            a instanceof eq ? g.cancel() : e(a);
        });
        return g.then(a, b, c);
    };
    Kj(dq);
    function kq(a) {
        return Xc(a.g, function (a) {
            return ic(a[1]);
        });
    }

    function hq(a) {
        if (a.h && a.a && kq(a)) {
            var b = a.h,
                c = lq[b];
            c && (x.clearTimeout(c.ea), delete lq[b]);
            a.h = 0;
        }
        a.b && (a.b.s--, delete a.b);
        for (var b = a.c, d = c = !1; a.g.length && !a.l;) {
            var e = a.g.shift(),
                g = e[0],
                h = e[1],
                e = e[2];
            if (g = a.f ? h : g) try {
                var k = g.call(e || a.G, b);
                y(k) && (a.f = a.f && (k == b || k instanceof Error), a.c = b = k);
                if (Lj(b) || _typeof(x.Promise) === n && b instanceof x.Promise) d = !0, a.l = !0;
            } catch (l) {
                b = l, a.f = !0, kq(a) || (c = !0);
            }
        }
        a.c = b;
        d && (k = D(a.o, a, !0), d = D(a.o, a, !1), b instanceof dq ? (jq(b, k, d), b.Y = !0) : b.then(k, d));
        c && (b = new mq(b), lq[b.ea] = b, a.h = b.ea);
    }

    function iq() {
        sc.call(this);
    }

    F(iq, sc);
    iq.prototype.message = "Deferred has already fired";
    iq.prototype.name = "AlreadyCalledError";
    function eq() {
        sc.call(this);
    }

    F(eq, sc);
    eq.prototype.message = "Deferred was canceled";
    eq.prototype.name = "CanceledError";
    function mq(a) {
        this.ea = x.setTimeout(D(this.b, this), 0);
        this.a = a;
    }

    mq.prototype.b = function () {
        delete lq[this.ea];
        throw this.a;
    };
    var lq = {};

    function nq(a, b) {
        var c = b || {};
        b = c.document || document;
        var d = se(a),
            e = document.createElement(qa);
        a = {ug: e, zb: void 0};
        var g = new dq(oq, a),
            h = null,
            k = null != c.timeout ? c.timeout : 5E3;
        0 < k && (h = window.setTimeout(function () {
            pq(e, !0);
            var a = new qq(1, "Timeout reached for loading script " + d);
            fq(g);
            gq(g, !1, a);
        }, k), a.zb = h);
        e.onload = e.onreadystatechange = function () {
            e.readyState && "loaded" != e.readyState && e.readyState != Ra || (pq(e, c.ih || !1, h), fq(g), gq(g, !0, null));
        };
        e.onerror = function () {
            pq(e, !0, h);
            var a = new qq(0, "Error while loading script " + d);
            fq(g);
            gq(g, !1, a);
        };
        a = c.attributes || {};
        xd(a, {type: "text/javascript", charset: "UTF-8", src: d});
        Se(e, a);
        rq(b).appendChild(e);
        return g;
    }

    function rq(a) {
        var b = Oe("HEAD", a);
        return b && 0 != b.length ? b[0] : a.documentElement;
    }

    function oq() {
        if (this && this.ug) {
            var a = this.ug;
            a && a.tagName == qa && pq(a, !0, this.zb);
        }
    }

    function pq(a, b, c) {
        null != c && x.clearTimeout(c);
        a.onload = z;
        a.onerror = z;
        a.onreadystatechange = z;
        b && window.setTimeout(function () {
            jf(a);
        }, 0);
    }

    function qq(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        sc.call(this, c);
        this.code = a;
    }

    F(qq, sc);
    function sq(a, b) {
        this.b = new vi(a);
        this.a = b ? b : "callback";
        this.zb = 5E3;
    }

    var tq = 0;
    sq.prototype.send = function (a, b, c, d) {
        a = a || null;
        d = d || "_" + (tq++).toString(36) + qc().toString(36);
        var e = "_callbacks___" + d,
            g = new vi(this.b);
        if (a) for (var h in a) {
            if (!a.hasOwnProperty || a.hasOwnProperty(h)) {
                var k = g,
                    l = h,
                    m = a[h];
                B(m) || (m = [String(m)]);
                Mi(k.a, l, m);
            }
        }
        b && (x[e] = uq(d, b), b = this.a, h = e, B(h) || (h = [String(h)]), Mi(g.a, b, h));
        b = {timeout: this.zb, ih: !0};
        h = new qe();
        h.a = g.toString();
        g = nq(h, b);
        jq(g, null, vq(d, a, c), void 0);
        return {ea: d, rf: g};
    };
    sq.prototype.cancel = function (a) {
        a && (a.rf && a.rf.cancel(), a.ea && wq(a.ea, !1));
    };
    function vq(a, b, c) {
        return function () {
            wq(a, !1);
            c && c(b);
        };
    }

    function uq(a, b) {
        return function (c) {
            wq(a, !0);
            b.apply(void 0, arguments);
        };
    }

    function wq(a, b) {
        a = "_callbacks___" + a;
        if (x[a]) if (b) try {
            delete x[a];
        } catch (c) {
            x[a] = void 0;
        } else x[a] = z;
    };
    function xq(a, b) {
        R.call(this);
        this.b = new vi(a);
        if (b) for (var c in b) {
            b[c] !== Object.prototype[c] && this.b.a.set(c, b[c]);
        }
    }

    F(xq, R);
    xq.prototype.f = u(!0);
    xq.prototype.Ta = function () {
        return this.f();
    };
    xq.prototype.send = u(null);
    xq.prototype.cancel = cc();
    function yq(a, b, c, d) {
        xq.call(this, a, b);
        this.c = null == d || !!d;
        this.a = new sq(this.b.toString(), c);
    }

    F(yq, xq);
    yq.prototype.f = r("c");
    yq.prototype.send = function (a, b) {
        this.a.zb = -1;
        return this.a.send(a, b);
    };
    yq.prototype.cancel = function (a) {
        this.a.cancel(a);
    };
    function zq(a, b) {
        xq.call(this, a, b);
        this.c = {};
        this.a = this.g = 0;
        window.XMLHttpRequest && bc in new XMLHttpRequest() && (this.a = 1);
        !this.a && window.XDomainRequest && "file:" != window.location.protocol && (this.a = 2, this.b.a.set("u", window.location.href));
    }

    F(zq, xq);
    aq(17170, zq.prototype, {cg: 1, ag: 2});
    zq.prototype.f = function () {
        return !!this.a;
    };
    zq.prototype.send = function (a, b) {
        var c = Xp(),
            d = ++this.g,
            e = {},
            g = {};
        "q" in a && (g.q = a.q, delete a.q);
        a.mode = this.a;
        1 == this.a ? (e.Ab = new lo(), S(e.Ab, Ra, D(function () {
            e.jc || (yo(e.Ab) ? b(zo(e.Ab)) : (this.ag(), b(null)), Aq(this, d));
        }, this)), S(e.Ab, "timeout", D(function () {
            e.jc || (this.cg(), Aq(this, d));
        }, this)), e.Ab.send(this.b.toString() + "&" + Tp(a), pa, Tp(g), {"Content-Type": "application/x-www-form-urlencoded"})) : (e.Va = new XDomainRequest(), e.Va.timeout = 2E4, e.Va.onload = D(function () {
            e.jc || (b(e.Va.responseText), Aq(this, d));
        }, this), e.Va.onerror = D(function () {
            e.jc || (this.ag(), b(null), Aq(this, d));
        }, this), e.Va.ontimeout = D(function () {
            e.jc || (this.cg(), b(null), Aq(this, d));
        }, this), e.Va.open(pa, this.b.toString() + "&" + Tp(a)), e.Va.send(Tp(g)));
        this.c[d] = e;
        Yp(c);
        return d;
    };
    zq.prototype.cancel = function (a) {
        var b = this.c[a];
        b && (b.jc = !0, b.Va && b.Va.abort(), Aq(this, a));
    };
    function Aq(a, b) {
        var c = a.c[b];
        c && (c.Ab ? (c.Ab.M(), c.Ab = null) : c.Va && (c.Va = null), delete a.c[b]);
    }

    zq.prototype.F = function () {
        zq.m.F.call(this);
        for (var a in this.c) {
            this.cancel(a);
        }
    };
    function Bq(a, b) {
        return "en" == b && /^(bn|de|es|fr|gu|hi|id|iw|ja|kn|ko|ml|mr|pa|pt|ta|te|th|tr|vi|zh-CN|zh-TW)$/.test(a) || "en" == a && /^(bn|de|fr|gu|hi|id|iw|ja|kn|ko|ml|mr|pa|pt|ta|te|th|tr|vi|zh-CN|zh-TW)$/.test(b);
    };
    function Cq(a, b, c) {
        R.call(this);
        var d;
        b ? d = {client: b} : d = {anno: 3, client: yp, format: "html", v: "1.0"};
        c && (d.sp = c);
        d.key = a;
        rp && (d.logld = "v" + rp);
        this.a = null;
        this.l = !0;
        this.b = {Tc: D(this.C, this), fg: 300};
        this.f = new yq(Bp + Ep, {client: yp}, "cb");
        this.h = d;
        a = [{
            ta: new zq(Bp + Ap + da, d),
            Tc: D(this.G, this),
            Ce: 30720,
            gg: 4294967295,
            eg: -1,
            vg: 0,
            Yd: !1
        }, {
            ta: new yq(Bp + Ap + da, d, "cb", J && 7 >= Sd),
            Tc: D(this.o, this),
            Ce: 1900,
            gg: 4294967295,
            eg: -1,
            vg: 3,
            Yd: !0
        }];
        this.s = new Dq(a);
        this.c = !1;
        for (b = 0; b < a.length; ++b) {
            this.c = this.c || a[b].ta.f();
        }
        this.c || this.li();
    }

    F(Cq, R);
    aq(7361, Cq.prototype, {
        ki: function ki() {
            Up("te_afbr");
        }, li: function li() {
            Up("te_au");
        }
    });
    function Eq(a, b) {
        if (!a.l) return b;
        if (A(b) != Da) a = [[b, 200]]; else if (2 == b.length && A(b[0]) != Da && A(b[1]) != Da) a = [[b[0], 200, b[1]], [b[1], 200, b[1]]]; else {
            a = [];
            for (var c = 0; c < b.length; ++c) {
                A(b[c]) != Da ? a[c] = [b[c], 200] : a[c] = [b[c][0], 200, b[c][1]];
            }
        }
        return a;
    }

    Cq.prototype.G = function (a) {
        var b = this;
        return function (c) {
            if (c) try {
                var d = c.indexOf("\x00");
                0 <= d && (c = c.substr(0, d));
                var e = eval("(" + c + ")");
            } catch (g) {
                e = null, b.ki();
            }
            e ? a(Eq(b, e), 200) : a([], 500);
        };
    };
    Cq.prototype.o = function (a) {
        var b = this;
        return function (c) {
            c ? a(Eq(b, c), 200) : a([], 500);
        };
    };
    Cq.prototype.C = function (a) {
        return function (b) {
            if (b) try {
                var c = eval("(" + b + ")");
            } catch (d) {
                c = null;
            }
            a(c && c[1] || void 0);
        };
    };
    function Dq(a) {
        this.b = a;
    }

    Dq.prototype.start = function (a) {
        this.a = a;
        this.c = 0;
        Fq(this);
    };
    function Fq(a) {
        if (a.c >= a.b.length) a.a(null); else {
            var b = a.b[a.c++];
            b.Ii ? Qp(new Pp(D(b.ta.Ta, b.ta), D(function (a) {
                a ? this.a(b) : Fq(this);
            }, a), 30, b.Ii)) : b.ta.Ta() ? a.a(b) : Fq(a);
        }
    }

    Cq.prototype.g = function (a) {
        this.B || (this.B = !0, this.s.start(D(function (b) {
            b && (this.a = b, this.b.ta = b.ta);
            a();
        }, this)));
    };
    Cq.prototype.Ta = function () {
        return null !== this.a && null !== this.a.ta && this.a.ta.Ta();
    };
    Cq.prototype.translate = function (a, b, c, d, e, g, h, k) {
        a = this.a.Tc(a);
        var l = {q: b, sl: c, tl: d};
        Bq(c, d) && (this.h.sp && 0 == this.h.sp.indexOf("nmt") || (l.sp = "nmt"));
        l.tc = e;
        g && (l.ctt = 1);
        h && (l.dom = 1);
        k && (l.sr = 1);
        l[eo()] = bo(b.join(""), zp);
        return this.a.ta.send(l, a);
    };
    Cq.prototype.F = function () {
        Cq.m.F.call(this);
        this.a && (this.a.ta.M(), this.a.ta = null);
        this.b.ta = null;
        this.f.M();
        this.f = null;
    };
    var Gq = Kp(["A", "ABBR", "ACRONYM", "B", "BASEFONT", "BDO", "BIG", "CITE", "DFN", "EM", "FONT", "I", ma, "NOBR", "LABEL", "Q", "S", "SMALL", ra, "STRIKE", "STRONG", "SUB", "SUP", sa, "TT", "U", "VAR"]),
        Hq = Kp(["APPLET", "AREA", "BASE", "FRAME", "FRAMESET", "HR", "LINK", "META", "NOFRAMES", "NOSCRIPT", ma, sa, ta]),
        Iq = Kp(["BR", "CODE", "IMG", "KBD", "MAP", "OBJECT", "PARAM", qa, "STYLE", "WBR", "svg"]),
        Jq = Kp(["submit", Ja]);

    function Kq(a, b) {
        this.a = new ol(a, !1, b, 3 == a.nodeType ? 0 : 1, 1);
        this.c = J ? [] : null;
        for (this.b = []; a = a.parentNode;) {
            Lq(this, a, !0);
        }
        this.b.push(!1);
        this.b.reverse();
        for (a = 1; a < this.b.length; ++a) {
            null == this.b[a] && (this.b[a] = this.b[a - 1]);
        }
        this.f = !1;
    }

    aq(52754, Kq.prototype, {ri: 1});
    function Lq(a, b, c) {
        var d = (b.style && b.style.whiteSpace || "").substring(0, 3);
        "pre" == d || !d && "PRE" == b.tagName ? a.b.push(!0) : d && "pre" != d ? a.b.push(!1) : c ? a.b.push(null) : a.b.push(a.b[a.b.length - 1]);
    }

    Kq.prototype.node = function () {
        return this.a.node;
    };
    Kq.prototype.next = function () {
        try {
            this.c && 0 < this.c.length && -1 == this.a.a && this.c.length--, -1 == this.a.a && this.b.length--, this.c && 0 < this.c.length && 1 != this.a.a && !this.a.node.nextSibling ? pl(this.a, this.c[this.c.length - 1], -1, this.a.f - 1) : (this.a.next(), this.c && 1 == this.a.a && this.c.push(this.a.node)), 1 == this.a.a && this.a.o && Lq(this, this.a.node);
        } catch (a) {
            a != gi && this.ri(a), this.f = !0;
        }
    };
    function Mq() {
        return "[msg_undefined]";
    }

    var Z = {};
    (function () {
        function a(a) {
            return function () {
                return a;
            };
        }

        Z = {
            hf: a(0),
            df: a(1),
            ef: a(2),
            Ej: a(3),
            Wg: a(4),
            ff: a(5),
            Ng: a(45),
            Og: a(6),
            Rg: a(7),
            Kc: a(8),
            Xg: a(9),
            Rj: a(10),
            ah: a(11),
            Sg: a(12),
            Mj: a(13),
            Ug: a(14),
            Lj: a(15),
            Tg: a(16),
            Tj: a(17),
            Yg: a(18),
            lj: a(19),
            Dj: a(20),
            Lg: a(21),
            Vg: a(22),
            Jj: a(23),
            Ij: a(24),
            Gj: a(25),
            Sj: a(26),
            Qj: a(27),
            Hj: a(28),
            Pg: a(29),
            Zg: a(30),
            kj: a(32),
            jj: a(33),
            $g: a(34),
            wj: a(35),
            qj: a(36),
            vj: a(37),
            gf: a(38),
            Bj: a(39),
            cf: a(40),
            Qg: a(41),
            Mg: a(46)
        };
    })();
    function Nq(a) {
        return ga + X(a.Ha) + '"></head><body class="goog-te-banner" scroll="no" border=0 dir="' + X(a.dir) + '"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle><td width=1 nowrap><a href="' + X(a.ti) + '" class="goog-logo-link" target="_blank"><img src="' + X(a.Ae) + '" alt="Google ' + hj(Z.Kc) + '"></a></td>' + (a.ec ? '<td width=1><img src="' + X(a.Td) + '" width="9" height="15" title="' + X(a.ec) + '" alt="' + X(a.ec) + aa + X(a.se) + ');background-position:-56px 0px;margin:0 4px"></td>' : "") + '<td class="goog-te-banner-margin"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="' + X(a.Ni) + '" style="display:none" valign=middle><td nowrap><span class="goog-te-banner-content">' + X(a.Mi) + fa + X(a.kh) + '"><b>' + cj(Z.hf) + '</b></button></div></div></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + X(a.yi) + '"></button></div></div></td></tr><tr id="' + X(a.Li) + '" style="display:none" valign=middle><td><span class="goog-te-banner-content">' + cj(Z.Xg) + '&nbsp;<span dir="ltr">(<b id="' + X(a.Ki) + '"></b>%)</span>&nbsp;<img src="' + X(a.ji) + '"></span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + X(a.gh) + '">' + cj(Z.df) + ea + X(a.sh) + '" style="display:none"><td><span class="goog-te-banner-content">' + X(a.rh) + fa + X(a.Pi) + '">' + cj(Z.Sg) + ea + X(a.oh) + '" style="display:none" valign=middle><td><span id="' + X(a.nh) + '" class="goog-te-banner-content"></span></td></tr></table></td><td><td class="goog-te-banner-margin"></td></td><td width=1 id="options"></td><td width=1><a id="' + X(a.jh) + '" class="goog-close-link" href="javascript:void(0)" title="' + hj(Z.ef) + '"><img src="' + X(a.Td) + '" width="15" height="15" alt="' + hj(Z.ef) + aa + X(a.se) + ');background-position:-28px 0px"></a></td></tr></table></body>';
    }

    function Oq(a) {
        return '<span id="' + X(a.id) + '"></span>';
    }

    function Pq(a) {
        return X(a.qg) + '<div id="' + X(a.id) + '"></div>' + X(a.pg);
    }

    function Qq() {
        var a = J && !M("7.0");
        return '<span style="white-space:nowrap" ><a class="goog-logo-link" href="' + X(pb) + '" target="_blank">' + (a ? "<span style=\"display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='" + X(rb) + "',sizingMethod='scale');\"></span>" : '<img src="' + X(rb) + '" width="37px" height="14px" style="padding-right: 3px" alt="Google ' + hj(Z.Kc) + '">') + cj(Z.Kc) + "</a></span>";
    }

    function Rq(a) {
        var b = a.Ae;
        a = '<div id="goog-gt-tt" class="skiptranslate" dir="' + hj(a.dir) + '"><div style="padding: 8px;"><div><div class="logo"><img src="';
        null != b && b.Ca === Oi || null != b && b.Ca === Pi ? b = String(b).replace(uj, sj) : b instanceof te ? b = String(ve(b)).replace(uj, sj) : b instanceof qe ? b = String(se(b)).replace(uj, sj) : (b = String(b), b = vj.test(b) ? b.replace(uj, sj) : "about:invalid#zSoyz");
        return a + hj(b) + '" width="20" height="20" alt="Google ' + hj(Z.Kc) + '" /></div></div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">' + cj(Z.Qg) + '</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;" /><div class="activity-root"></div></div></div><div class="status-message"></div></div>';
    }

    function Sq(a) {
        var b = '<div class="translate-form"><div class="form-message"></div><form class="activity-form" action="' + X(a.bh) + '" method="' + X(a.method) + '"><div class="form-buttons" style="text-align:' + (a.dir == Nb ? "right" : "left") + '"><input class="activity-submit" type="button" value="' + hj(Z.Vg) + '" ></input><input class="activity-cancel" type="button" value="' + hj(Z.df) + '"></input></div><div class="parameters"><input type="hidden" name="gtrans" /><input type="hidden" name="utrans" /><input type="hidden" name="hl" /><input type="hidden" name="text" /><input type="hidden" name="langpair" /><input type="hidden" name="oe" value="UTF-8" />';
        a = a.qh;
        for (var c = a.length, d = 0; d < c; d++) {
            b += '<input type="hidden" name="' + X(a[d]) + '" />';
        }
        return b + "</div></form></div>";
    }

    function Tq() {
        return dj('<div><textarea class="contribute-original-text"></textarea><div class="activity-form-container"></div></div>');
    }

    function Uq(a) {
        return '<div><span class="alt-translated-text"></span><div class="alt-helper-text">' + X(a.ci) + '</div><div class="activity-form-container"></div></div>';
    }

    function Vq() {
        return dj('<div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"/></svg></div></div>');
    };
    function Wq(a) {
        T.call(this);
        a = a || {};
        this.id = a.id || ch(this);
        this.ye = a.ye || "";
        this.yd = a.yd || null;
        this.zd = a.zd || null;
        this.Rc = a.Rc || !1;
        this.className = a.className || null;
        this.c = null;
    }

    F(Wq, T);
    Wq.prototype.ac = dc("c");
    Wq.prototype.Mb = function () {
        if (!this.U) throw Error("Activity must be rendered before it can be resumed.");
        if (!this.c) throw Error("Acitivity must have a tooltip instance to be resumed");
    };
    Wq.prototype.wb = cc();
    Wq.prototype.M = function () {
        this.Y || (Wq.m.M.call(this), delete this.zd);
    };
    function Xq() {
        Yg.call(this);
        this.b = "closure_frame" + Yq++;
        this.c = [];
        Zq[this.b] = this;
    }

    var $q;
    F(Xq, Yg);
    var Zq = {},
        Yq = 0;

    function ar(a, b) {
        var c = Le(a);
        qi(b, function (b, e) {
            B(b) || (b = [b]);
            Uc(b, function (b) {
                b = c.D(ma, {type: mb, name: e, value: b});
                a.appendChild(b);
            });
        });
    }

    w = Xq.prototype;
    w.X = null;
    w.la = null;
    w.Jb = null;
    w.xi = 0;
    w.jb = !1;
    w.Ib = null;
    w.send = function (a, b, c, d) {
        if (this.jb) throw Error(va);
        a = new vi(a);
        b = b ? b.toUpperCase() : "GET";
        c && (c = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ qc()).toString(36), a.a.set("zx", c));
        $q || ($q = Ze("FORM"), $q.acceptCharset = "utf-8", c = $q.style, c.position = xa, c.visibility = mb, c.top = c.left = "-10px", c.width = c.height = "10px", c.overflow = mb, document.body.appendChild($q));
        this.X = $q;
        "GET" == b && ar(this.X, a.a);
        d && ar(this.X, d);
        this.X.action = a.toString();
        this.X.method = b;
        br(this);
        cr(this);
    };
    function dr(a, b) {
        if (a.jb) throw Error(va);
        var c = new vi(b.action);
        a.X = b;
        a.X.action = c.toString();
        br(a);
    }

    w.abort = function () {
        if (this.jb) {
            var a = er(this);
            Qg(a);
            this.jb = !1;
            this.dispatchEvent("abort");
            fr(this);
        }
    };
    w.F = function () {
        this.jb && this.abort();
        Xq.m.F.call(this);
        this.la && gr(this);
        cr(this);
        delete this.f;
        this.X = null;
        delete Zq[this.b];
    };
    function br(a) {
        a.jb = !0;
        a.Jb = a.b + "_" + (a.xi++).toString(36);
        var b = {name: a.Jb, id: a.Jb};
        J && 7 > Number(Sd) && (b.src = 'javascript:""');
        a.la = Le(a.X).D(la, b);
        b = a.la.style;
        b.visibility = mb;
        b.width = b.height = "10px";
        b.display = p;
        L ? b.marginTop = b.marginLeft = "-10px" : (b.position = xa, b.top = b.left = "-10px");
        if (J && !M("11")) {
            a.X.target = a.Jb || "";
            Le(a.X).a.body.appendChild(a.la);
            S(a.la, Mb, a.Je, !1, a);
            try {
                a.a = !1, a.X.submit();
            } catch (v) {
                Og(a.la, Mb, a.Je, !1, a), hr(a);
            }
        } else {
            Le(a.X).a.body.appendChild(a.la);
            var b = a.Jb + "_inner",
                c = uf(a.la);
            if (document.baseURI) {
                var d = Cc(b);
                d = '<head><base href="' + Cc(document.baseURI) + '"></head><body><iframe id="' + d + '" name="' + d + '"></iframe>';
                d = Ge(d, null);
            } else d = Cc(b), d = Ge('<body><iframe id="' + d + '" name="' + d + '"></iframe>', null);
            Id && !L ? c.documentElement.innerHTML = Ae(d) : c.write(Ae(d));
            S(c.getElementById(b), vb, a.Cd, !1, a);
            var e = Oe(sa, a.X);
            d = 0;
            for (var g = e.length; d < g; d++) {
                var h = e[d].value;
                Df(e[d]) != h && (wf(e[d], h), e[d].value = h);
            }
            e = c.importNode(a.X, !0);
            e.target = b;
            e.action = a.X.action;
            c.body.appendChild(e);
            var h = Oe("SELECT", a.X),
                k = Oe("SELECT", e);
            d = 0;
            for (g = h.length; d < g; d++) {
                for (var l = Oe(na, h[d]), m = Oe(na, k[d]), q = 0, t = l.length; q < t; q++) {
                    m[q].selected = l[q].selected;
                }
            }
            h = Oe(ma, a.X);
            k = Oe(ma, e);
            d = 0;
            for (g = h.length; d < g; d++) {
                if ("file" == h[d].type && h[d].value != k[d].value) {
                    a.X.target = b;
                    e = a.X;
                    break;
                }
            }
            try {
                a.a = !1, e.submit(), c.close(), K && ck(a.Gg, 250, a);
            } catch (v) {
                Og(c.getElementById(b), vb, a.Cd, !1, a), c.close(), hr(a);
            }
        }
    }

    w.Je = function () {
        if (this.la.readyState == Ra) {
            Og(this.la, Mb, this.Je, !1, this);
            try {
                var a = uf(this.la);
                if (J && a.location == wa && !navigator.onLine) {
                    hr(this);
                    return;
                }
            } catch (b) {
                hr(this);
                return;
            }
            ir(this, a);
        }
    };
    w.Cd = function () {
        if (!Id || L || (this.la ? uf(er(this)) : null).location != wa) {
            Og(er(this), vb, this.Cd, !1, this);
            try {
                ir(this, this.la ? uf(er(this)) : null);
            } catch (a) {
                hr(this);
            }
        }
    };
    function ir(a, b) {
        a.jb = !1;
        var c;
        c || _typeof(a.f) != n || (b = a.f(b)) && (c = 4);
        c ? hr(a) : (a.dispatchEvent(Ra), a.dispatchEvent("success"), fr(a));
    }

    function hr(a) {
        a.a || (a.jb = !1, a.dispatchEvent(Ra), a.dispatchEvent("error"), fr(a), a.a = !0);
    }

    function fr(a) {
        gr(a);
        cr(a);
        a.X = null;
        a.dispatchEvent(Lb);
    }

    function gr(a) {
        var b = a.la;
        b && (b.onreadystatechange = null, b.onload = null, b.onerror = null, a.c.push(b));
        a.Ib && (dk(a.Ib), a.Ib = null);
        K || Id && !L ? a.Ib = ck(a.tf, 2E3, a) : a.tf();
        a.la = null;
        a.Jb = null;
    }

    w.tf = function () {
        this.Ib && (dk(this.Ib), this.Ib = null);
        for (; 0 != this.c.length;) {
            var a = this.c.pop();
            jf(a);
        }
    };
    function cr(a) {
        a.X && a.X == $q && ff(a.X);
    }

    function er(a) {
        return a.la ? J && !M("11") ? a.la : uf(a.la).getElementById(a.Jb + "_inner") : null;
    }

    w.Gg = function () {
        if (this.jb) {
            var a = this.la ? uf(er(this)) : null;
            a && !Fd(a, "documentUri") ? (Og(er(this), vb, this.Cd, !1, this), hr(this)) : ck(this.Gg, 250, this);
        }
    };
    function jr(a, b) {
        T.call(this);
        this.l = a || "";
        this.c = null;
        this.h = [];
        this.a = null;
        this.o = b || "GET";
        this.f = this.g = null;
    }

    F(jr, T);
    w = jr.prototype;
    w.D = function () {
        var a = {bh: this.l, method: this.o, qh: this.h, dir: pe.test(sp) ? Nb : "ltr"};
        this.S(Zi(Sq, a));
    };
    w.S = function (a) {
        this.A = a;
        this.a = eh(this, "activity-form");
        a = eh(this, "activity-submit");
        this.f = new bi("");
        ih(this.f, a);
        a = eh(this, "activity-cancel");
        this.c = new bi("");
        ih(this.c, a);
    };
    w.O = function () {
        var a = U(this);
        a.w(this.f, za, D(this.Xi, this));
        a.w(this.c, za, D(this.dispatchEvent, this, Ka));
    };
    w.Xi = function () {
        var a = !0;
        this.g && (a = this.g());
        a && (a = new Xq(), S(a, "success", function () {
            this.dispatchEvent("successful");
        }), S(a, "error", function () {
            this.dispatchEvent("failed");
        }), dr(a, this.a));
        this.dispatchEvent(Sb);
    };
    function kr(a, b) {
        for (var c in b) {
            a.a[c] && (a.a[c].value = b[c]);
        }
    }

    function lr(a, b) {
        return a.a[b] ? a.a[b].value : "";
    }

    w.F = function () {
        this.f = this.a = this.c = null;
        jr.m.F.call(this);
    };
    function mr(a, b) {
        a.g = b;
    };
    function nr(a, b) {
        Wq.call(this, a);
        this.f = null;
        this.o = b || {};
        this.h = new hl();
        this.l = this.a = null;
        this.g = new Cq((a || {}).Za || "", or);
        this.g.l = !1;
    }

    F(nr, Wq);
    var or = 1 == xp ? "te-lib-alt" : "te-alt";
    w = nr.prototype;
    w.ac = function (a) {
        nr.m.ac.call(this, a);
        this.g.g(D(this.Mb, this));
    };
    w.Mb = function () {
        nr.m.Mb.call(this);
        var a = this.c.L,
            b = this.c.B;
        if (a && b) {
            wf(this.l, a);
            var c = this.h;
            c.A = b;
            gf(c.a, c.A);
            il(c);
            Q(this.h.a, !0);
            b = this.c.uc();
            c = this.c.wa();
            if (this.g.Ta() && b && c) {
                var d = this.c.na(),
                    e = D(this.Ci, this);
                this.g && this.g.translate(e, [d], b, c, 0, !1);
                kr(this.a, {gtrans: a, text: this.c.na(), hl: sp, langpair: b + "|" + c});
                kr(this.a, this.o);
                kr(this.a, {client: or});
            }
            this.dispatchEvent(Lb);
        }
    };
    w.D = function () {
        this.S(Zi(Uq, {ci: Z.cf}));
    };
    w.S = function (a) {
        this.A = a;
        this.l = eh(this, "alt-translated-text");
        var b = eh(this, Ba);
        this.a = new jr(Ip, pa);
        this.a.h = qd(this.o);
        mr(this.a, D(function () {
            kr(this.a, {utrans: lp(this.f)});
            return lr(this.a, "utrans") != lr(this.a, "gtrans");
        }, this));
        this.a.fa(b);
        zn = Z.$g;
        on = Z.cf;
        this.f = new $o(void 0, !0, a);
        ap(this.f, this.h);
        bp(this.f);
        this.f.I.c = or;
        ih(this.f, this.l);
    };
    w.O = function () {
        nr.m.O.call(this);
        var a = U(this);
        a.w(this.a, Ka, D(function () {
            op(this.f);
            this.dispatchEvent(Ka);
        }, this));
        a.w(this.a, Sb, D(function () {
            var a = lp(this.f);
            this.c.L = a && xc(a);
            this.dispatchEvent(Sb);
            wf(this.c.g.j(), Z.gf);
        }, this));
    };
    w.Ci = function (a) {
        a && cp(this.f, a);
    };
    w.wb = function () {
        Q(this.h.a, !1);
    };
    w.F = function () {
        this.f && this.f.M();
        this.l = this.h = this.f = null;
        this.g && this.g.M();
        this.g = null;
        this.a && this.a.M();
        this.a = null;
        nr.m.F.call(this);
    };
    function pr(a, b) {
        Wq.call(this, a);
        this.h = !1;
        this.g = b || {};
        this.f = null;
    }

    F(pr, Wq);
    w = pr.prototype;
    w.ac = function (a) {
        pr.m.ac.call(this, a);
        U(this).w(this.f.j(), tb, D(this.c.Gc, this.c, !1));
        this.h = this.c.ic;
        this.Mb();
    };
    w.Mb = function () {
        pr.m.Mb.call(this);
        this.f.Hb(this.c.L);
        var a = this.c.uc(),
            b = this.c.wa();
        a && b && (kr(this.a, {
            gtrans: this.c.L,
            text: this.c.na(),
            hl: sp,
            langpair: a + "|" + b
        }), kr(this.a, this.g));
        this.dispatchEvent(Lb);
        this.f.j().focus();
    };
    w.wb = function () {
        this.c.Gc(this.h);
    };
    w.D = function () {
        this.S(Zi(Tq));
    };
    w.S = function (a) {
        this.A = a;
        a = eh(this, "contribute-original-text");
        this.f = new Bn("");
        ih(this.f, a);
        Hn(this.f);
        Fn(this.f);
        a = eh(this, Ba);
        this.a = new jr(Ip, pa);
        this.a.h = qd(this.g);
        mr(this.a, D(function () {
            kr(this.a, {utrans: xc(this.f.xa())});
            return lr(this.a, "utrans") != lr(this.a, "gtrans");
        }, this));
        this.a.fa(a);
    };
    w.O = function () {
        pr.m.O.call(this);
        var a = U(this);
        a.w(this.a, Ka, D(function () {
            this.dispatchEvent(Ka);
        }, this));
        a.w(this.a, Sb, D(function () {
            var a = this.f.xa();
            this.c.L = a && xc(a);
            this.dispatchEvent(Sb);
            wf(this.c.g.j(), Z.gf);
        }, this));
    };
    w.F = function () {
        this.f && this.f.M();
        this.f = null;
        this.a && this.a.M();
        this.a = null;
        pr.m.F.call(this);
    };
    function qr(a) {
        Yg.call(this);
        this.h = a;
        this.g = {};
        this.c = new Ug(this);
        this.f = null;
    }

    F(qr, Yg);
    qr.prototype.Eg = cc();
    qr.prototype.Fg = cc();
    qr.prototype.F = function () {
        this.c.M();
        this.c = null;
    };
    function rr(a, b, c) {
        if (b = a.h.c[b]) {
            c = c || "undefined" == typeof c;
            for (var d = 0; d < b.za.length; ++d) {
                b.za[d] && a.Wf(b.za[d], c);
            }
        }
    }

    qr.prototype.Wf = function (a, b) {
        P(a, "backgroundColor", b ? "#E6ECF9" : "");
        P(a, "color", b ? "#000" : "");
    };
    function sr() {
        T.call(this);
        this.a = null;
    }

    F(sr, T);
    w = sr.prototype;
    w.D = function () {
        this.S(this.b.D(f, {"class": Qb}));
    };
    w.S = function (a) {
        this.A = a;
        a.style.display = p;
    };
    function tr(a) {
        var b = c;
        var c = D(function () {
            wf(this.j(), "");
            b && b();
        }, a);
        c = D(a.di, a, 750, c);
        ur(a, c);
    }

    function vr(a) {
        a.a && (a.a.stop(!0), a.a = null);
        wf(a.j(), "");
        a.J(!1);
    }

    function ur(a, b) {
        a.a = new Zn(a.j(), 750);
        U(a).vb(a.a, "begin", D(function () {
            this.j().style.display = "block";
        }, a));
        U(a).vb(a.a, Wa, D(function () {
            this.a = null;
            window.setTimeout(b, 2E3);
        }, a));
        a.a.play();
    }

    w.di = function (a, b) {
        this.N() && (this.a = new Yn(this.j(), a), U(this).vb(this.a, Wa, D(function () {
            b && b();
        }, this)), this.a.play());
    };
    w.J = function (a) {
        this.j().style.display = a ? "block" : p;
        this.j().style.opacity = a ? "1" : "0";
    };
    w.N = function () {
        return this.j().style.display !== p && "0" !== this.j().style.opacity;
    };
    function wr() {
        $m.call(this);
        this.P = {};
        this.ob = {};
        this.K = null;
        this.Lc = !1;
        this.Bb = this.f = this.H = null;
        this.W = {};
        this.l = new Ug(this);
        this.B = this.c = this.g = this.Xa = this.a = this.L = this.ra = null;
        this.C = !0;
        this.Ya = [];
    }

    F(wr, $m);
    w = wr.prototype;
    w.fa = function () {
        this.C = !1;
        var a = pe.test(sp) ? Nb : "ltr";
        this.Sb(Zi(Rq, {
            Ae: "https://www.gstatic.com/images/branding/product/1x/translate_24dp.png",
            Td: qb,
            se: Dp,
            dir: a
        }));
        this.className += " skiptranslate";
        if (a = !!(this.j() && this.K && this.Xa && this.g.j() && this.H && this.B)) this.l.w(window, "resize", D(this.kb, this)), this.l.w(this, nb, D(this.Ei, this)), this.Ya.length && (a = this.Md.apply(this, this.Ya), this.Ya = []);
        return a;
    };
    w.Md = function (a) {
        for (var b = [], c = 0; c < arguments.length; ++c) {
            var d = arguments[c];
            if (d) if (this.K || d.zd) {
                var e = d;
                var g = Ze(ra, {"class": e.className || "activity-link"});
                wf(g, e.ye || "");
                e = g;
                b.push(e);
                ef(d.zd || this.K, e);
                d.ac && d.wb && (g = D(this.yh, this, d), this.l.w(e, Pa, g), d.yd && this.l.w(this.H, d.yd, g));
                d.id = d.id || ch(d);
                this.P[d.id] && this.rg(d);
                this.P[d.id] = d;
                this.ob[d.id] = e;
            } else this.Ya.push(d);
        }
        return b;
    };
    w.rg = function (a) {
        for (var b = 0; b < arguments.length; ++b) {
            var c = C(arguments[b]) || arguments[b] instanceof String ? arguments[b] : arguments[b].id,
                d = this.P[c],
                e = this.ob[c];
            d && e && (this.f && this.f.id === c && this.Ud(), this.l.ca(d, [Sb, Ka]), d.M(), this.W[c] && delete this.W[c], delete this.P[c], delete this.ob[c], jf(e));
        }
    };
    w.yh = function (a) {
        if (this.H) {
            a != this.f && this.f && (vr(this.g), this.f.wb.call(this.f), this.f.j() && (this.f.j().style.display = p), xr(this, !1), this.f = null);
            xr(this, !0);
            vr(this.g);
            this.f = a;
            if (this.W[a.id]) {
                var b = this.W[a.id];
                var c = a.Mb;
            } else a.fa(), b = a.j(), c = a.ac, this.l.w(a, [Sb, Ka], D(this.Ud, this)), a.Rc && (this.W[a.id] = b);
            ef(this.H, b);
            c.call(a, this);
            a = new Zn(b, 100);
            this.l.vb(a, Wa, D(this.kb, this, !0, !0));
            a.play();
        }
    };
    w.Ud = function () {
        if (this.f) if (vr(this.g), this.f.wb.call(this.f), this.f.j()) {
            var a = new Yn(this.f.j(), 100);
            this.l.vb(a, Wa, D(function () {
                jf(this.f.j());
                this.f = null;
                xr(this, !1);
                Bf(this.g.j()) && (tr(this.g), this.kb(!0, !0));
            }, this));
            a.play();
        } else xr(this, !1), this.f = null;
    };
    w.De = function (a, b) {
        this.Bb = a;
        wr.m.De.call(this, a, b);
        this.j().style.display = "block";
    };
    w.le = function (a) {
        if (!this.C) {
            var b = jn(this, a.target);
            this.va = b;
            this.Nb();
            b != this.b ? (this.b = b, kn(this, b), ln(this), hn(this, a)) : kn(this, b);
        }
    };
    w.Ei = function () {
        vr(this.g);
        this.Lc && this.Ud();
    };
    w.F = function () {
        for (var a in this.P) {
            this.rg(a);
        }
        this.l && this.l.M();
        this.l = null;
        this.g && this.g.M();
        this.B = this.Xa = this.Bb = this.H = this.K = this.g = null;
        wr.m.F.call(this);
    };
    function xr(a, b) {
        a.Lc = b;
        a.C = b;
        if (a.C) {
            var c = a.j();
            a.ra = new N(c.offsetLeft, c.offsetTop);
        } else a.ra && (null != (a.s || null) && ((a.s || null).a = a.ra), Mf(a.j(), a.ra), a.ra = null);
        a.K.style.display = b ? p : "inline-block";
        a.Xa.style.display = b ? "inline-block" : p;
    }

    w.Gc = function (a) {
        this.N() ? (this.ic = a, (this.ic ? this.h.w : this.h.ca).call(this.h, O(this.j()), wb, this.He, !0)) : wr.m.Gc.call(this, a);
    };
    w.Sb = function (a) {
        wr.m.Sb.call(this, a);
        if (a) {
            this.K = Re("activity-links", a);
            var b = Re(Qb, a);
            b && (this.g = new sr(), ih(this.g, b));
            this.Xa = Re("started-activity-container", a);
            this.H = Re("activity-root", a);
            this.B = Re("original-text", a);
        }
    };
    w.kb = function (a, b) {
        var c = Sf(document.body).y;
        if (this.s) {
            (this.s || null).a.y += c;
            wr.m.kb.call(this);
            var d = parseInt(this.j().style.left, 10);
            a = parseInt(this.j().style.top, 10) - (a ? 0 : c);
            b && (b = this.Be || null || {}, a -= b.top || 10, d -= b.left || 10);
            a -= c;
            (this.s || null).a.y = a;
            (this.s || null).a.x = d;
            Mf(this.j(), new N(d, a));
        }
    };
    w.Fd = dc("a");
    w.Aa = dc("c");
    w.Ka = function (a) {
        a = a ? xc(a) : "";
        this.B ? wf(this.B, a) : wr.m.Ka.call(this, a);
    };
    w.uc = r("a");
    w.wa = r("c");
    w.na = function () {
        return this.B ? Bf(this.B) : wr.m.na.call(this);
    };
    w.Tb = function (a) {
        this.C || wr.m.Tb.call(this, a);
    };
    w.sd = function (a) {
        this.C || wr.m.sd.call(this, a);
    };
    w.rd = function (a) {
        this.C || wr.m.rd.call(this, a);
    };
    var yr = {
        set: function set(a, b) {
            a.className = b;
        }, get: function get(a) {
            a = a.className;
            return C(a) && a.match(/\S+/g) || [];
        }, add: function add(a, b) {
            var c = yr.get(a),
                d = ed(arguments, 1),
                e = c.length + d.length;
            yr.kf(c, d);
            yr.set(a, c.join(" "));
            return c.length == e;
        }, remove: function remove(a, b) {
            var c = yr.get(a),
                d = ed(arguments, 1),
                e = yr.yf(c, d);
            yr.set(a, e.join(" "));
            return e.length == c.length - d.length;
        }, kf: function kf(a, b) {
            for (var c = 0; c < b.length; c++) {
                $c(a, b[c]) || a.push(b[c]);
            }
        }, yf: function yf(a, b) {
            return Vc(a, function (a) {
                return !$c(b, a);
            });
        }, ck: function ck(a, b, c) {
            for (var d = yr.get(a), e = !1, g = 0; g < d.length; g++) {
                d[g] == b && (dd(d, g--, 1), e = !0);
            }
            e && (d.push(c), yr.set(a, d.join(" ")));
            return e;
        }, Wj: function Wj(a, b, c) {
            var d = yr.get(a);
            C(b) ? ad(d, b) : B(b) && (d = yr.yf(d, b));
            C(c) && !$c(d, c) ? d.push(c) : B(c) && yr.kf(d, c);
            yr.set(a, d.join(" "));
        }, has: function has(a, b) {
            return $c(yr.get(a), b);
        }, enable: function enable(a, b, c) {
            c ? yr.add(a, b) : yr.remove(a, b);
        }, toggle: function toggle(a, b) {
            var c = !yr.has(a, b);
            yr.enable(a, b, c);
            return c;
        }
    };

    function zr(a, b) {
        qr.call(this, a);
        b = b || {};
        this.a = {Za: b.Za || "", Eb: b.Eb || 1};
        this.b = null;
    }

    F(zr, qr);
    w = zr.prototype;
    w.Eg = function (a, b) {
        b && (b.a = a, an(this.b, b));
    };
    w.Fg = function (a) {
        a && cn(this.b, a);
    };
    w.ej = function () {
        var a = this.b.Bb;
        if (a && void 0 !== a.a) {
            var b = a.a,
                a = this.h.c[b];
            rr(this, this.f, !1);
            this.f = b;
            rr(this, b);
            this.b.Fd(a.Wi);
            this.b.Aa(a.fj);
            b = a.T;
            this.b.L = b && xc(b);
            this.b.Ka(a.text);
        }
    };
    w.dj = function () {
        rr(this, this.f, !1);
    };
    w.mg = function () {
        this.h.c[this.f].ph.dispatchEvent("updating");
    };
    w.F = function () {
        this.b.M();
        this.b = null;
        zr.m.F.call(this);
    };
    w.Wf = function (a, b) {
        yr[b ? "add" : "remove"](a, "goog-text-highlight");
    };
    /*
     Math.uuid.js (v1.4)
     http://www.broofa.com
     mailto:robert@broofa.com
     Copyright (c) 2010 Robert Kieffer
     Dual licensed under the MIT and GPL licenses.
     */
    var Ar;
    (function () {
        var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
        Ar = function Ar(b, c) {
            var d = [],
                e;
            c = c || a.length;
            if (b) for (e = 0; e < b; e++) {
                d[e] = a[0 | Math.random() * c];
            } else for (d[8] = d[13] = d[18] = d[23] = "-", d[14] = "4", e = 0; 36 > e; e++) {
                d[e] || (b = 0 | 16 * Math.random(), d[e] = a[19 == e ? b & 3 | 8 : b]);
            }
            return d.join("");
        };
    })();
    function Br(a) {
        this.h = a;
        this.c = this.a = this.f = this.b = -1;
        this.g = !1;
        this.s = 0;
        this.B = "";
        this.o = 0;
    }

    Br.prototype.start = function () {
        this.g || (this.g = !0, this.B = Ar(15, 62), this.s = 0, this.c = this.a = this.f = this.b = -1, this.o = qc(), ck(this.l, 1E4, this));
    };
    Br.prototype.stop = function () {
        this.g && (this.g = !1, Cr(this));
    };
    Br.prototype.l = function () {
        this.g && (Cr(this), ck(this.l, 1E3, this));
    };
    function Cr(a) {
        var b = a.h.f,
            c = a.h.h,
            d = a.h.c,
            e = a.h.g;
        if (a.b != b || a.f != c || a.a != d || a.c != e) {
            var g = {};
            g.ct = b;
            g.cv = c;
            g.cts = d;
            g.cvs = e;
            g.sid = a.B;
            g.seq = a.s++;
            g.tat = qc() - a.o;
            if (0 <= a.b || 0 <= a.f || 0 <= a.a || 0 <= a.c) g.pt = a.b, g.pv = a.f, g.pts = a.a, g.pvs = a.c;
            Up("te_v", g);
            a.b = b;
            a.f = c;
            a.a = d;
            a.c = e;
        }
    };
    function Dr() {
        this.g = this.c = this.h = this.f = 0;
        this.a = [];
        this.b = null != x.IntersectionObserver ? new IntersectionObserver(D(this.l, this)) : null;
    }

    aq(36546, Dr.prototype, {$f: 1});
    var Er = "_gt_" + Math.random().toString(36).substr(2);
    Dr.prototype.reset = function () {
        this.g = this.c = this.h = this.f = 0;
        this.a = [];
    };
    Dr.prototype.l = function (a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (0 < c.intersectionRatio && null != c.target[Er]) {
                this.h += Bf(c.target).length;
                var d = c.target[Er];
                this.g += this.a[d];
                this.a[d] = 0;
                c.target[Er] = void 0;
            }
        }
    };
    function Fr(a, b) {
        R.call(this);
        a = a || {};
        this.a = vd(a);
        this.a.Eb = a.Eb;
        this.a.Xe = !!a.Xe;
        this.a.lh = parseInt(a.lh, 10) || 300;
        this.a.Ji = a.Ji;
        this.a.Jc = a.Jc || !1;
        this.h = 0;
        this.c = {};
        this.l = new Ug(this);
        this.f = new zr(this, this.a);
        b && (this.f.g = b || {});
        a = this.f;
        a.b = new wr();
        a.b.Vf = 300;
        a.b.Ag = 1E3;
        a.b.Gc(!0);
        a.c.w(a.b, "show", D(a.ej, a));
        a.c.w(a.b, nb, D(a.dj, a));
        b = new nr({Za: a.a.Za, id: "alternate", ye: Z.Lg, Rc: !0}, a.g);
        a.b.Md(b);
        a.c.w(b, Sb, D(a.mg, a));
        a.a.Eb && (b = new pr({id: "contribute", yd: Ua, Rc: !0}, a.g), a.b.Md(b), a.c.w(b, Sb, D(a.mg, a)));
        a.b.fa();
        this.g = this.b = null;
        this.a.Jc && null != x.IntersectionObserver && (this.b = new Dr(), this.g = new Br(this.b));
    }

    F(Fr, R);
    function Gr(a, b, c, d, e, g) {
        d = a.c[++a.h] = {id: a.h.toString(), ph: g, text: c, ak: e || c, T: d, Wi: a.s, fj: a.B, za: b};
        for (e = 0; e < b.length; ++e) {
            b[e] && a.f.Eg(d.id, b[e]);
        }
        if (a.b) for (e = a.b, g = c.length, e.c += g, c = e.a.length, e.a.push(g), g = 0; g < b.length; ++g) {
            var h = e,
                k = b[g];
            nf(k) ? (k[Er] = c, h.f += Bf(k).length, h.b && h.b.observe(k)) : h.$f(k.nodeType);
        }
        a.g && a.g.start();
        return d.id;
    }

    function Hr(a) {
        a.g && a.g.stop();
        for (var b in a.c) {
            var c = a,
                d = b,
                e = c.c[d];
            if (e) {
                if (c.b) for (var g = c.b, h = e.za, k = 0; k < h.length; ++k) {
                    var l = g,
                        m = h[k];
                    nf(m) ? (m[Er] = void 0, l.b && l.b.unobserve(m)) : l.$f(m.nodeType);
                }
                for (g = 0; g < e.za.length; ++g) {
                    e.za[g] && c.f.Fg(e.za[g]);
                }
                delete c.c[d];
            }
        }
        a.b && a.b.reset();
    }

    Fr.prototype.F = function () {
        Hr(this);
        this.l.M();
        this.l = null;
        this.f.M();
        this.f = null;
    };
    function Ir(a) {
        for (var b = 0; b < a.length; ++b) {
            if (a[b] && a[b].node) return a[b].node;
        }
        return null;
    }

    function Jr(a) {
        var b = Ir(a);
        if (!b) return null;
        var c = [],
            d = [],
            e = [],
            g = new Kq(b, !0),
            h = a[a.length - 1].node,
            k = 0,
            l = !1;
        do {
            g.next();
            b = g.node();
            if (!b) break;
            var m = g.a.a,
                q = g.a.f;
            for (1 == m && --q; k < a.length && !a[k].node;) {
                ++k;
            }
            b == a[k].node || !l && 1 == m && (null != b && null == b.previousSibling ? 0 : !Kr(Lr(b))) ? (m = Mr(b), d.push({
                node: m,
                Ka: cc()
            }), e[d.length - 1] = q, gf(m, b), b == a[k].node && (c[k++] = d.length - 1, l = !0)) : l = !1;
        } while (b != h);
        return {bf: e, Gi: c, fi: d};
    }

    function Kr(a) {
        return null != a && Iq[a.tagName];
    }

    function Lr(a) {
        if (null == a) return null;
        for (a = a.previousSibling; null != a && null != a && 3 == a.nodeType && "" == xc(Bf(a));) {
            a = a.previousSibling;
        }
        return a;
    }

    function Nr(a, b, c, d, e, g) {
        Yg.call(this);
        this.a = [];
        for (var h = 0; h < a.length; ++h) {
            this.a.push("nodeType" in a[h] ? Or(a[h]) : a[h]), Pr(a[h].node);
        }
        this.l = b;
        this.o = d || 0;
        this.I = e || 0;
        this.g = c;
        this.h = g || null;
        this.G = this.B = this.C = !1;
        this.c = [];
        this.f = [];
        this.b = [];
        this.H = [];
        new Ug(this);
        this.K = !1;
    }

    var Or;
    F(Nr, Yg);
    function Qr() {
        this.b = {};
        this.a = {};
    }

    Qr.prototype.has = function (a, b) {
        return null != this.b[a] || null != this.a[a] || b && (a in this.b || a in this.a);
    };
    Qr.prototype.write = function (a, b) {
        this.a[a] = b;
    };
    var Rr = "_gt_" + Math.random().toString(36).substr(2),
        Sr = "_gtn_" + Math.random().toString(36).substr(2);

    function Tr(a) {
        if (!a) return !1;
        if (3 != a.nodeType || !J) return Rr in a && !!a[Rr];
        if (!a.parentNode) return !0;
        if (!(Sr in a.parentNode)) return !1;
        var b = a.parentNode[Sr];
        if (!b || !b[a.nodeValue]) return !1;
        for (var b = b[a.nodeValue], c = 0; c < b.length; ++c) {
            if (b[c] == a) return !0;
        }
        return !1;
    }

    (function () {
        function a(a) {
            document.title = a;
        }

        var b = {};
        Or = function Or(c, d) {
            if (c.tagName == ta) return {node: c, Ka: a, Ld: !0, Xf: !0, af: !0};
            if (3 == c.nodeType) return {
                node: c, Ka: function Ka(a, b) {
                    wf(b, a);
                }
            };
            d || (d = "value");
            b[d] || (b[d] = function (a, b) {
                b.setAttribute && b.setAttribute(d, a);
                C(a) && (b[d] = a);
            });
            c = {node: c, Ka: b[d], Ld: !0};
            "value" != d && (c.af = !0);
            return c;
        };
    })();
    function Ur(a, b) {
        if (!a) return "";
        if (a.tagName == ta) return String(document.title);
        3 == a.nodeType ? b = "nodeValue" : b || (b = "value");
        return a.getAttribute && a.getAttribute(b) ? String(a.getAttribute(b)) : C(a[b]) ? String(a[b]) : "";
    }

    Nr.prototype.$ = r("l");
    function Vr(a, b, c, d) {
        d = d.firstChild && 3 == d.firstChild.nodeType ? d.firstChild.nodeValue : Bf(d);
        d = {R: c, T: Kc(d)};
        a.push(d);
        b[c] ? b[c].end = d : b[c] = {start: d, end: d};
        return d;
    }

    function Wr(a, b, c) {
        b = {ng: b, Ke: c, aa: []};
        a.b.push(b);
        return b;
    }

    function Xr(a) {
        if (a.C && !a.B && !a.G) {
            a.B = !0;
            var b;
            if (b = Yr(a.a)) {
                b = a.a;
                var c = a.b;
                if (1 == b.length && b[0] && b[0].af) {
                    for (var d = [], e = 0; e < c.length; ++e) {
                        for (var g = 0; g < c[e].aa.length; ++g) {
                            d.push(c[e].aa[g].T);
                        }
                    }
                    b[0].Ka(d.join(" "), b[0].node);
                    b = !0;
                } else b = !1;
                b = !b;
            }
            if (b && (b = Jr(a.a))) {
                a.f = b.Gi;
                a.c = b.fi;
                for (var d = a.a, e = a.f, g = a.c, h = b.bf, c = [], k = 0; k < d.length; ++k) {
                    if (c[k] = [], d[k].node && y(e[k])) for (var l = 0; l < g.length; ++l) {
                        if (!(h[l] > h[e[k]])) {
                            if (h[l] == h[e[k]]) {
                                if (g[l].node.parentNode != g[e[k]].node.parentNode) continue;
                            } else {
                                for (var m = h[e[k]] - h[l], q = g[e[k]].node.parentNode; m-- && q && q != g[l].node.parentNode;) {
                                    q = q.parentNode;
                                }
                                if (q != g[l].node.parentNode) continue;
                            }
                            c[k].push(l);
                        }
                    }
                }
                d = a.a;
                e = a.b;
                g = -1;
                for (h = e.length - 1; 0 <= h; --h) {
                    for (k = e[h], l = k.aa.length - 1; 0 <= l; --l) {
                        if (m = k.aa[l], !(0 > m.R) && d[m.R] && d[m.R].node) if (0 > g) m.vd = Kp(c[m.R]), g = c[m.R][c[m.R].length - 1]; else for (q = c[m.R].length - 1; 0 <= q; --q) {
                            if (c[m.R][q] <= g) {
                                m.vd = Kp(c[m.R].slice(0, q + 1));
                                g = c[m.R][q];
                                break;
                            }
                        }
                    }
                }
                for (c = e = 0; c < a.b.length; ++c) {
                    d = a.b[c];
                    g = a.a;
                    h = d;
                    k = b.bf;
                    l = a.f;
                    m = "";
                    for (q = 0; q < h.aa.length; ++q) {
                        var t = h.aa[q],
                            m = m + t.T;
                        if (0 > t.R) {
                            var v = -1,
                                G = -1,
                                E = l[h.aa[q - 1].R];
                            y(E) && (v = k[E]);
                            q < h.aa.length - 1 && (E = l[h.aa[q + 1].R], y(E) && (G = k[E]));
                            if (0 <= v || 0 <= G) a: if (G = (0 > v || G < v) && q < h.aa.length - 1, v = h.aa[G ? q + 1 : q - 1], !(v.R >= g.length) && null != g[v.R].node) {
                                E = t.T;
                                t.T = "";
                                if (/^ +$/.test(E) && (t = G ? v.T.charCodeAt(0) : v.T.charCodeAt(v.T.length - 1), 3584 <= t && 3711 >= t || 12288 <= t && 12351 >= t || 12352 <= t && 12543 >= t || 12784 <= t && 12799 >= t || 19968 <= t && 40959 >= t || 65280 <= t && 65519 >= t)) break a;
                                v.T = G ? E + v.T : v.T + E;
                            }
                        }
                    }
                    g = m;
                    h = a.a;
                    k = d;
                    l = a.c;
                    m = b.bf;
                    q = a.f;
                    t = [];
                    for (v = 0; v < k.aa.length && !(e >= l.length); ++v) {
                        if (G = k.aa[v], G.vd && !(0 > G.R) && h[G.R].node && G.T) if (e == q[G.R] || e in G.vd && (!(e + 1 in G.vd) || e + 1 != q[G.R])) {
                            if (l[e] && l[e].node) {
                                E = Mr(l[e].node);
                                t.push(E);
                                for (var ka = l[e].node, it = m[q[G.R]] - m[e], ml = E, si = h[G.R].node.parentNode, ti = ml; si && it--;) {
                                    ti = si.cloneNode(!1), ti.appendChild(ml), si = si.parentNode, ml = ti;
                                }
                                ka.appendChild(ti);
                                ka = h[G.R].node;
                                h[G.R].Ld ? h[G.R].Xf || E.appendChild(ka) : (ka = h[G.R].node.cloneNode(!1), ka.id && (ka.id = ""), E.appendChild(ka));
                                h[G.R].Ka(G.T, ka);
                            }
                        } else ++e, --v;
                    }
                    h = t;
                    t = a.a;
                    k = a.g;
                    if (d.ng) k = d.ng; else {
                        l = t.length;
                        m = -1;
                        for (q = 0; q < d.aa.length; ++q) {
                            v = d.aa[q].R, 0 <= v && t[v] && t[v].node && (m = Math.max(m, v), l = Math.min(l, v));
                        }
                        t = "";
                        for (q = l; q <= m; ++q) {
                            k[q] && (t += k[q]);
                        }
                        k = t;
                    }
                    if (a.h) 3 != a.h.a.Eb && a.H.push(Gr(a.h, h, k, g, d.Ke, a)); else for (d = 0; d < h.length; ++d) {
                        h[d].title = k;
                    }
                }
                b = a.a;
                for (c = 0; c < b.length; ++c) {
                    b[c].node && !b[c].Ld && jf(b[c].node);
                }
                b = a.a;
                c = a.c;
                a = a.f;
                for (e = d = 0; e < c.length; ++e) {
                    if (g = c[e].node) {
                        for (; d < b.length && e > a[d];) {
                            d++;
                        }
                        (d >= b.length || e != a[d]) && !g.firstChild && (jf(g), c[e].node = null);
                    }
                }
            }
        }
    }

    Nr.prototype.restore = function () {
        if (this.B) if (this.B = !1, this.h && Hr(this.h), this.H = [], Yr(this.c), 1 == this.a.length && this.a[0].af) this.a[0].Ka(this.g[0], this.a[0].node); else {
            for (var a = 0, b = 0; b < this.c.length; ++b) {
                var c = this.c[b].node;
                if (c) {
                    for (; a < this.a.length && b > this.f[a];) {
                        var d = a++;
                        this.a[d].node && (Zr(this.a[d].node), this.a[d].node = null);
                    }
                    if (a < this.a.length && b == this.f[a] && this.a[a].node) {
                        this.a[a].Xf || (ff(c), c.appendChild(this.a[a].node));
                        this.a[a].Ka(this.g[a], this.a[a].node);
                        a++;
                        var d = c,
                            e = d.parentNode;
                        if (e && 11 != e.nodeType) if (d.removeNode) d.removeNode(!1); else {
                            for (; c = d.firstChild;) {
                                e.insertBefore(c, d);
                            }
                            jf(d);
                        }
                    } else jf(c);
                }
            }
            this.c = [];
        }
    };
    Nr.prototype.F = function () {
        Nr.m.F.call(this);
        this.restore();
        for (var a = 0; a < this.a.length; ++a) {
            this.a[a].node && Zr(this.a[a].node);
        }
        this.a = null;
    };
    function Pr(a) {
        if (a) if (3 == a.nodeType && J) {
            Sr in a.parentNode && a.parentNode[Sr] || (a.parentNode[Sr] = {});
            var b = a.parentNode[Sr];
            b[a.nodeValue] || (b[a.nodeValue] = []);
            for (var b = b[a.nodeValue], c = 0; c < b.length; ++c) {
                if (b[c] == a) return;
            }
            b.push(a);
        } else a[Rr] = 1;
    }

    function Zr(a) {
        if (!a || 3 == a.nodeType && J) {
            var b = a.parentNode;
            if (b && Sr in b) {
                var c = b[Sr];
                if (c && a && c[a.nodeValue]) {
                    var d = c[a.nodeValue];
                    if (d) for (var e = 0; e < d.length; ++e) {
                        if (d[e] == a) {
                            d.splice(e, 1);
                            break;
                        }
                    }
                    0 == d.length && delete c[a.nodeValue];
                }
                if (c && Zp(c)) try {
                    delete b[Sr];
                } catch (g) {
                    b[Sr] = "";
                }
            }
        } else if (Rr in a) try {
            delete a[Rr];
        } catch (g) {
            a[Rr] = "";
        }
    }

    function Yr(a) {
        for (var b = 0; b < a.length; ++b) {
            try {
                a[b].node && !a[b].node.parentNode && (a[b].node = null);
            } catch (c) {
                a[b].node = null;
            }
        }
        for (b = a.length - 1; 0 <= b && !a[b].node; --b) {
        }
        a.length = b + 1;
        return a.length;
    }

    function Mr(a) {
        a = a.ownerDocument ? a.ownerDocument.createElement("font") : document.createElement("font");
        Pr(a);
        return a;
    }

    function $r(a) {
        for (var b, c = a.firstChild; c; c = b) {
            b = c.nextSibling, 3 != c.nodeType && (c == a.firstChild ? gf(c, a) : hf(c, a), $r(c));
        }
    };
    function as(a, b, c, d, e) {
        b = b || {};
        this.K = e || [];
        this.h = [];
        this.B = [];
        bs(this, a || document.documentElement, !y(b.tg) || !!b.tg);
        this.l = c || Nr;
        this.C = b.ii;
        this.c = this.a = this.g = this.mc = null;
        this.s = !!b.ij;
        this.sa = !!b.hj;
        this.Y = this.s ? 27 : 13;
        this.G = !0;
        this.o = [];
        this.f = new uk(this, d);
    }

    aq(5762, as.prototype, {pi: 1});
    function cs(a, b, c, d) {
        a.f.c || (b = {
            Hg: b,
            Bg: c,
            za: [],
            og: [],
            Cb: [],
            Jd: 0,
            size: 0,
            continuous: !0
        }, a.mc = null, xk(a.f, a.b), yk(a.f, d), zk(a.f, D(function (a) {
            this.pi(a);
            d();
        }, a)), Ak(a.f, b));
    }

    function ds(a, b) {
        return 0 < a.za.length ? new b(a.za, a.Cb.join(""), a.og, a.Jd, a.size) : null;
    }

    function es(a, b) {
        if (!a.c) return a.mc = ds(b, a.l), !0;
        if (!b.continuous && 0 < b.za.length) return a.mc = ds(b, a.l), !0;
        b.continuous = a.c.ig;
        a: {
            var c = a.c;
            var d = a.Y;
            if (b.size > b.Bg || b.Jd > b.Hg) c = !1; else {
                var e = c.size,
                    g = c.text.length;
                if (0 != b.za.length && (e += 1 == b.za.length ? b.size + d + d : b.size + d, g += b.Jd, e > b.Bg || g > b.Hg)) {
                    c = !1;
                    break a;
                }
                b.size = e;
                b.Jd = g;
                b.za.push(c.node);
                b.og.push(c.text);
                d = b.za.length - 1;
                0 == d ? b.Cb.push(c.Zd) : (1 == d && (b.Cb[0] = "<a i=0>" + b.Cb[0] + "</a>"), b.Cb.push("<a i=" + d + ">"), b.Cb.push(c.Zd), b.Cb.push("</a>"));
                c = !0;
            }
        }
        if (c) return a.c = null, !1;
        a.mc = ds(b, a.l);
        return !0;
    }

    function fs(a, b, c) {
        var d = Ur(b, c);
        d && xc(vc(d)) && a.o.push({node: b, eh: c, text: d});
    }

    as.prototype.b = function (a, b) {
        if (this.c && es(this, b)) return wk;
        if (!this.a) {
            this.G = !!this.h.length;
            if (!this.h.length && (a = this.o.shift())) return this.c = {
                ig: !1,
                node: Or(a.node, a.eh),
                text: a.text,
                Zd: Cc(a.text),
                size: this.s ? Ac(a.text).length : a.text.length
            }, b.continuous = !1, es(this, b), wk;
            a = this.h.shift() || this.B.shift();
            if (!a) return this.c = null, es(this, b), wk;
            this.g = [a.gj];
            this.a = new Kq(a.root);
        }
        this.a.next();
        if (this.a.f) return this.a = null, b.continuous = !1, this.b;
        a = this.a.node();
        var c = this.a.a.a;
        if (-1 == c) {
            gs(this);
            if (!a || 3 != a.nodeType && !Gq[a.tagName]) b.continuous = !1;
            return this.b;
        }
        var d = !Tr(a) && (a.nodeType == uc && hs(this) || !gd(a, "notranslate") && (gd(a, Zb) || hs(this)));
        this.g.push(d);
        c = 1 == c;
        if (((d = !!a && (3 == a.nodeType && C(a.nodeValue) || a.tagName == ta && C(a.value) || a.tagName == sa && gd(a, Zb) || a.tagName == ma && (Jq[a.type] || gd(a, Zb)))) || c) && this.G && !is(a)) return bs(this, a, hs(this), !0), this.a.a.h(), gs(this), this.b;
        if (c && hs(this)) {
            this.sa && fs(this, a, "title");
            fs(this, a, "alt");
            var e = this.a;
            if (e.b[e.b.length - 1]) for (e = a.firstChild; e;) {
                if (3 == e.nodeType) {
                    var g = e.nodeValue.split("\n");
                    if (2 < g.length || 2 == g.length && "" != xc(g[0]) && "" != xc(g[1])) {
                        e.nodeValue = g[0];
                        for (var h = 1; h < g.length; ++h) {
                            var k = O(a).createElement("font");
                            this.K.push(k);
                            hf(k, e);
                            e = k;
                            hf(O(a).createTextNode("\n" + g[h]), e);
                            e = e.nextSibling;
                        }
                    }
                }
                e = e.nextSibling;
            }
        }
        if (d) {
            this.a.a.h();
            if (hs(this)) {
                var l = Ur(a);
                if (xc(vc(l)) && (this.c = {
                        ig: !0,
                        node: Or(a),
                        text: l,
                        Zd: Cc(l),
                        size: this.s ? Ac(l).length : l.length
                    }, es(this, b))) return gs(this), wk;
            }
            gs(this);
            return this.b;
        }
        if (c) {
            if (js(a) || !a.firstChild && a.tagName != la) return b.continuous = b.continuous && !!Iq[a.tagName], this.a.a.h(), gs(this), this.b;
            if (a.tagName == la) {
                try {
                    if (!(l = !a.src.match(/https?:\/\//))) var m = a.src.match(ri)[3] || null,
                        l = (m ? decodeURI(m) : m) == window.location.hostname;
                    if (l) {
                        var q = uf(a).documentElement;
                        q && bs(this, q, hs(this));
                    }
                } catch (t) {
                }
                b.continuous = !1;
                this.a.a.h();
                gs(this);
                return this.b;
            }
            hs(this) && a && (3 == a.nodeType || Gq[a.tagName]) ? this.C && "A" == a.tagName && a.href && this.C(a) : b.continuous = !1;
            return this.b;
        }
        this.a.a.h();
        gs(this);
        return this.b;
    };
    function js(a) {
        return Tr(a) || 3 != a.nodeType && (!a.tagName || Hq[a.tagName] || Iq[a.tagName] || gd(a, Pb) || "gts-order" == a.id);
    }

    function is(a) {
        if (3 == a.nodeType) return !0;
        if (1 != a.nodeType) return !1;
        if (!a.offsetWidth || !a.offsetHeight) {
            var b = O(a),
                c = null;
            b.defaultView && b.defaultView.getComputedStyle ? c = b.defaultView.getComputedStyle(a, null) : c = a.currentStyle;
            return c && c.display != p && c.visibility != mb;
        }
        return !0;
    }

    function bs(a, b, c, d) {
        (d ? a.B : a.h).push({root: b, gj: !y(c) || c});
    }

    function hs(a) {
        return a.g[a.g.length - 1];
    }

    function gs(a) {
        a.g.pop();
    };
    function ks() {
        R.call(this);
        this.a = [];
    }

    F(ks, R);
    ks.prototype.restore = function () {
        ck(this.b, 0, this);
    };
    ks.prototype.b = function () {
        for (var a = 0; a < this.a.length; ++a) {
            jf(this.a[a]);
        }
        this.a = [];
    };
    ks.prototype.F = function () {
        ks.m.F.call(this);
        this.restore();
    };
    function ls(a) {
        var b = new Xm();
        qi(a, function (a) {
            nf(a) ? b.add(a) : b.add(of(a));
        });
        return b;
    };
    function ms(a) {
        this.b = !0;
        this.c = a;
        this.a = [];
    }

    ms.prototype.$ = function () {
        return this.a.join("");
    };
    function ns(a, b) {
        this.f = a;
        this.c = !0;
        this.b = b;
        this.a = null;
    }

    function os(a, b) {
        return a.c ? (b(D(a.g, a), a.f, a.b ? "en" : ""), !0) : !1;
    }

    ns.prototype.g = function (a, b) {
        this.a = b;
        a();
    };
    function ps(a, b) {
        this.f = a;
        this.B = !!b;
        this.b = this.s = 0;
        this.g = this.c = -1;
        this.h = this.l = this.a = 0;
    }

    var qs = Kp(". , ; : \\? !".split(" ")),
        rs = Kp([34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 96, 123, 124, 125, 127]);

    function ss(a, b, c) {
        a.B && (b -= 9);
        for (var d = "", e = 0, g = a.s; g < a.f.length; ++g) {
            var h = a.f.charAt(g),
                k = h.charCodeAt(0);
            e++;
            a.a += a.B ? 127 >= k ? 32 >= k || rs[k] ? 3 : 1 : 2047 >= k || 55296 <= k && 56319 >= k || 56320 <= k && 57343 >= k ? 6 : 9 : 1;
            k = a.a >= b;
            qs[h] ? (a.g = g, a.l = a.a, k = k || e > c) : " " == h && (a.c = g, a.h = a.a, k = k || e > c);
            if (k) return 0 <= a.g ? (d = a.f.substring(a.b, a.g + 1), a.a -= a.l, a.b = a.g + 1, a.g >= a.c ? (a.c = -1, a.h = 0) : a.h -= a.l, a.g = -1, a.l = 0) : 0 <= a.c ? (d = a.f.substring(a.b, a.c + 1), a.a -= a.h, a.b = a.c + 1, a.c = -1, a.h = 0) : (d = a.f.substring(a.b, g + 1), a.a = 0, a.b = g + 1, a.g = a.c = -1, a.h = a.l = 0), a.s = g + 1, d;
        }
        a.b < a.f.length && (d = a.f.substring(a.b), a.b = a.f.length);
        return d;
    };
    function ts(a, b, c, d, e, g) {
        this.l = d || z;
        this.L = g || z;
        this.sa = !!e;
        this.c = a.a.gg;
        this.f = 0;
        this.G = z;
        this.C = c;
        this.B = this.b = this.h = 0;
        this.a = null;
        this.Y = 0;
        this.P = a.a.eg;
        this.H = [];
        this.W = 0;
        this.g = (this.I = a.a.Yd) ? a.a.Ce - new vi(a.a.ta.b).toString().length : a.a.Ce;
        this.qa = this.sa ? 1 : 6;
        this.ra = a.a.vg;
        this.K = b;
        this.s = [];
        this.ja = a;
    }

    function us(a, b) {
        var c = 0;
        a.G = D(function () {
            ++c == this.s.length && b();
        }, a);
    }

    function vs(a, b, c) {
        if (0 == a.b && (a.b = b ? 860 : a.g, !c || c <= a.g)) {
            a.h = a.b;
            return;
        }
        do {
            b = a.b, a.b < a.g && (a.b *= a.qa, a.b > a.g && (a.b = a.g));
        } while (b != a.b && c && a.b < c);
        a.h = a.b;
    }

    function ws(a) {
        return a.I ? a.a.I : a.a.$().length;
    }

    function xs(a, b, c, d) {
        return new as(a.K.shift(), {ij: a.I, ii: b, tg: !0, hj: !!c}, function () {
            var a = Array.prototype.slice.call(arguments);
            return new Nr(a.shift(), a.shift(), a.shift(), a.shift(), a.shift(), c);
        }, a.C, d);
    }

    function ys(a, b, c) {
        if (0 < a.P && zs(b) >= a.P) return !0;
        if (ws(a) > a.b) {
            if (0 < zs(b)) return !0;
            vs(a, c, ws(a));
            for (var d = a.a.$(), e = new ps(d, a.I), g; g = ss(e, a.b, a.c);) {
                if (b.g.push(new ns([g], !1)), a.f += g.length, a.c -= g.length, 0 >= a.c) {
                    b.o = d.substring(e.b);
                    break;
                } else vs(a, c);
            }
            As(b, a.a, !0);
            a.a = null;
            return !0;
        }
        if (ws(a) > a.h) return !0;
        As(b, a.a, !0);
        a.h -= ws(a) + a.ra;
        a.f += a.a.o;
        a.c -= a.a.o;
        a.a = null;
        return !1;
    };
    function Bs(a, b) {
        R.call(this);
        this.f = b;
        this.b = {rootMargin: a};
        this.a = new IntersectionObserver(D(this.c, this), this.b);
    }

    F(Bs, R);
    Bs.prototype.F = function () {
        Bs.m.F.call(this);
        this.a = null;
    };
    Bs.prototype.c = function (a) {
        for (var b = 0; b < a.length; b++) {
            if (0 < a[b].intersectionRatio) {
                this.f();
                break;
            }
        }
    };
    function Cs() {
        T.call(this);
    }

    F(Cs, T);
    Cs.prototype.D = function () {
        this.S(Zi(Vq));
    };
    Cs.prototype.S = dc("A");
    function Ds(a) {
        id(a.j(), lb);
        id(a.j().firstChild, kb);
    };
    function Es(a) {
        this.a = a || new Cs();
        this.a.D();
        this.a.fa();
        this.b = 0;
    }

    Es.prototype.reset = function () {
        this.b = 0;
        Ds(this.a);
    };
    function Fs(a, b, c, d, e, g, h, k) {
        this.g = a;
        this.b = b;
        this.s = [];
        this.o = null;
        this.f = c;
        this.a = d;
        this.c = e;
        this.K = g;
        this.sa = h;
        this.B = this.h = null;
        this.l = k || null;
        this.Y = this.C = !1;
        this.G = {};
    }

    function Gs(a) {
        for (var b = new Xm(), c = 0; c < a.length; c++) {
            for (var d = a[c], e = new Xm(), g = 0; g < d.a.length; g++) {
                var h = d.a[g].node;
                null != h && e.add(h);
            }
            Ym(b, e);
        }
        return b;
    }

    w = Fs.prototype;
    w.Jc = function (a) {
        a = this.h = new Bs("200px", D(this.Vh, this, a));
        var b = ls(Gs([].concat(this.b, this.s)));
        qi(b, D(a.a.observe, a.a));
        a = this.B = new Bs("0px", D(this.Zh, this));
        b = ls(Gs([].concat(this.b, this.s)));
        qi(b, D(a.a.observe, a.a));
    };
    w.Vh = function (a) {
        this.h && (this.h.a.disconnect(), this.h = null);
        a();
    };
    w.Zh = function () {
        this.C = !0;
        Hs(this);
        if (!this.Y && this.l) {
            var a = this.l;
            0 == a.b++ && (a = a.a, H(a.j(), lb), H(a.j().firstChild, kb));
        }
    };
    function Hs(a) {
        a.B && (a.B.a.disconnect(), a.B = null);
    }

    w.Dg = function () {
        if (this.C && !this.Y && this.l) {
            var a = this.l;
            0 == --a.b && Ds(a.a);
        }
        this.h && (this.h.a.disconnect(), this.h = null);
        Hs(this);
    };
    function As(a, b, c) {
        c ? (a.b.push(b), a.G[b.$()] = !0) : a.s.push(b);
    }

    function zs(a) {
        return a.b.length + a.s.length;
    }

    function Is(a) {
        if (0 == a.g.length) {
            for (var b = [], c = 0; c < a.b.length; ++c) {
                b.push(a.b[c].$());
            }
            a.g.push(new ns(b, !1));
        }
    }

    w.translate = function (a) {
        function b() {
            d++;
            d == c && e();
        }

        Is(this);
        for (var c = 0, d = 0, e = z, g = this.f, h = this.a, k = this.c, l = this.K, m = this.sa, q = 0; q < this.g.length; ++q) {
            os(this.g[q], function (a, c, d) {
                a = g.ja.translate(pc(a, b), c, d || h, k, ++g.W, l, m, g.sa);
                g.H.push(a);
                return a;
            }) && c++;
        }
        0 != c && (e = Bk(a));
        return c;
    };
    function Js(a, b) {
        R.call(this);
        this.b = [];
        this.f = [];
        this.a = a;
        this.c = b;
    }

    F(Js, R);
    Js.prototype.g = function (a) {
        var b = xc(a.href);
        0 == b.indexOf("javascript:") || 0 <= b.indexOf("#") || (this.f.push(a.href), this.b.push(a), a.href = b + "#googtrans/" + this.a + "/" + this.c);
    };
    Js.prototype.F = function () {
        Js.m.F.call(this);
        this.restore();
    };
    Js.prototype.restore = function () {
        if (this.b.length) {
            for (var a = 0; a < this.b.length; ++a) {
                this.b[a].href = this.f[a];
            }
            this.b = [];
            this.f = [];
        }
    };
    function Ks(a, b) {
        R.call(this);
        this.b = a;
        this.a = pe.test(b) ? "translated-rtl" : "translated-ltr";
        a = [].concat(this.b);
        for (b = 0; b < a.length; ++b) {
            nf(a[b]) && H(a[b], this.a);
        }
    }

    F(Ks, R);
    Ks.prototype.F = function () {
        Ks.m.F.call(this);
        this.restore();
    };
    Ks.prototype.restore = function () {
        for (var a = [].concat(this.b), b = 0; b < a.length; ++b) {
            nf(a[b]) && id(a[b], this.a);
        }
    };
    function Ls(a, b, c, d, e, g, h, k, l, m) {
        R.call(this);
        this.qa = a;
        this.jf = b;
        this.W = c || null;
        this.ra = m || null;
        this.o = null;
        this.ob = !!d;
        this.Bb = !!g;
        this.s = [];
        this.Ya = this.B = this.b = !1;
        this.l = k || new Qr();
        this.Mc = !k;
        this.ha = h || qk.ka();
        this.La = new ks();
        this.L = this.I = this.G = !1;
        this.Wa = this.f = .5;
        this.Xa = .01;
        this.h = new rk(this.f);
        this.H = (this.g = this.ja = !!l) ? new MutationObserver(D(this.Qh, this)) : null;
        S(window, Ha, this.Sf, !0, this);
        S(window, Za, this.Tf, !0, this);
    }

    F(Ls, R);
    aq(3046, Ls.prototype, {mi: 1, ni: 2, Zf: 3, oi: 4});
    w = Ls.prototype;
    w.translate = function (a, b, c, d, e) {
        if (d || a != this.a || b != this.c) Ms(this), this.Mc && (this.l = new Qr()); else if (this.b) return;
        this.Nc = c;
        this.gc = e;
        this.g = this.ja && Bq(a, b);
        this.H && this.H.observe(document.body, {attributes: !0, childList: !0, characterData: !0, subtree: !0});
        this.b = !0;
        this.a = a;
        this.c = b;
        this.ob && (this.o = new Js(a, b));
        this.L = this.a == Ea;
        this.W && (c = this.W, a && (c.s = a), b && (c.B = b));
        this.P = new Ks(this.qa, this.c);
        this.C = Ns(this);
    };
    function Ns(a) {
        var b = new uk(a, a.ha);
        xk(b, a.Of);
        zk(b, a.mi);
        Ak(b, new ts(a.jf, [].concat(a.qa), a.ha, a.Nc, a.g, a.gc));
        return b;
    }

    w.restore = function () {
        Ms(this);
        this.La.restore();
    };
    w.F = function () {
        Ls.m.F.call(this);
        this.restore();
        Og(window, Ha, this.Sf, !0, this);
        Og(window, Za, this.Tf, !0, this);
    };
    function Os(a, b, c, d) {
        var e = Zp(a.l.b),
            g = new uk(a, b.C);
        b.s.push(g);
        yk(g, b.G);
        vs(b, e);
        xk(g, d || a.Kf);
        b = c || new Fs([], [], b, a.a, a.c, a.Ya, a.B, a.ra);
        zk(g, a.Wh, a);
        a.g && yk(g, b.Dg, b);
        Ak(g, b);
    }

    w.Wh = function (a, b, c) {
        c.Dg();
        this.B ? this.oi(a) : this.ni(a);
        c.f.G();
    };
    w.Tf = function () {
        this.G = !1;
        this.K = 0;
        sk(this.h, this.f);
    };
    w.Sf = function (a) {
        a.target == window && (this.G = !0, this.K = 0, sk(this.h, .01));
    };
    w.Qh = function (a) {
        if (this.b && this.g) {
            for (var b = 0; b < a.length; b++) {
                if (a[b].target && a[b].target.className && (0 <= a[b].target.className.indexOf(Zb) || 0 == a[b].target.className.indexOf("goog-"))) return;
            }
            this.ha.add(D(this.Oi, this));
        }
    };
    w.Oi = function () {
        this.B = !0;
        this.C.stop();
        this.C = Ns(this);
        return !1;
    };
    w.Of = function (a, b) {
        us(b, Bk(a));
        Os(this, b);
        return this.ai;
    };
    w.ai = function (a, b) {
        if (!this.b) return wk;
        if (!Ck(a)) return vk;
        if (!this.g) for (a = 0; a < this.s.length; ++a) {
            var c = D(this.lf, this, b, this.s[a]);
            b.C.add(c);
        }
        return this.$h;
    };
    w.Hf = function (a, b) {
        if (this.K && !this.G) {
            a = new Date().getTime() - this.K;
            var c = this.f;
            900 > a && .01 < c ? c = Math.max(.9 * c, .01) : 1100 < a && .5 > c && (c = Math.min(1.5 * c, .5));
            this.f = c;
            this.I ? this.Xa = .01 : this.Wa = this.f;
        }
        this.B = this.b = !0;
        this.K = new Date().getTime();
        this.Lc != (a = document.body.innerText || document.body.textContent || document.body.innerHTML) ? (this.Lc = a, a = !0) : a = !1;
        a ? (this.I = !1, this.f = this.Wa, this.G || sk(this.h, this.f), a = [].concat(this.qa), c = this.h, b.l = z, b.K = a, b.a = null, b.W = 0, b.s = [], b.G = z, b.C = c, a = new uk(this, this.h), xk(a, this.Of)) : (this.I = !0, this.f = this.Xa, this.G || sk(this.h, this.f), a = new uk(this, this.h), xk(a, this.Hf));
        zk(a, this.Zf);
        Ak(a, b);
        this.C = a;
        return wk;
    };
    w.$h = function (a, b) {
        if (!this.b) return wk;
        this.B = this.b = !1;
        this.L ? b.l(100, !1, !0) : (b.l(100, !0), b.L(b.f));
        if (this.Bb) return this.Hf;
        for (a = 0; a < b.s.length; ++a) {
            b.s[a].stop();
        }
        for (a = 0; a < b.H.length; ++a) {
            b.ja.a.ta.cancel(b.H[a]);
        }
        return wk;
    };
    function Ps(a, b, c) {
        a: {
            var d = a.ob ? D(a.o.g, a.o) : z;
            b = Bk(b);
            if (!c.o) {
                if (0 == c.K.length) {
                    c = !1;
                    break a;
                }
                c.o = xs(c, d, a.W, a.La.a);
            }
            c.ha = !0;
            cs(c.o, c.c, c.g, b);
            c = !0;
        }
        return c ? a.Kf : a.od;
    }

    w.Kf = function (a, b) {
        if (!this.b) return wk;
        var c = b.f;
        if (null == c.a) {
            if (!c.ha) return Ps(this, a, b.f);
            if (!Ck(a)) return vk;
            c.ha = !1;
            c.a = c.o.mc || null;
            var d = c.a ? c.a : c.o = null;
            if (!d) return Ps(this, a, b.f);
            this.s.push(d);
            var e;
            (e = this.l.has(d.$(), !this.g)) || (e = d.$(), e = null != b.G[e] && b.G[e]);
            if (e) return e = c.a.o, c.f += e, c.c -= e, c.a = null, this.g && As(b, d, !1), Ps(this, a, b.f);
            this.l.a[d.$()] = null;
        }
        0 < zs(b) && sk(this.h, .5);
        return ys(c, b, Zp(this.l.b)) ? this.od : Ps(this, a, b.f);
    };
    w.od = function (a, b) {
        if (!this.b || 0 == zs(b)) return wk;
        Os(this, b.f);
        return this.g ? (b.Jc(Bk(a)), this.bi) : 0 == b.translate(a) ? wk : this.Nf;
    };
    w.bi = function (a, b) {
        return this.b ? Ck(a) ? 0 == b.translate(a) ? wk : this.Nf : vk : wk;
    };
    w.lf = function (a, b) {
        if (!this.b) return !1;
        if (this.l.has(b.$(), !1)) {
            var c = this.l;
            if (c.has(b.l, !1)) {
                var d = b.l,
                    e = c.a[d];
                e || (e = c.b[d], c.a[d] = e);
                b.b = e;
                b.C = !0;
            }
            Xr(b);
        } else if (c = this.l, b.s) {
            d = b.s.replace(/<a /g, "<span ").replace(/\/a>/g, "/span>");
            b.C = !0;
            delete b.s;
            b.s = null;
            b.b = [];
            e = document.createElement("div");
            Q(e, !1);
            e.innerHTML = 0 <= d.indexOf("<i>") ? d : "<b>" + d + "</b>";
            document.body.appendChild(e);
            var d = [],
                g;
            for (g = e.firstChild; g; g = g.nextSibling) {
                if ("I" == g.tagName) var h = Wr(b, Bf(g), g.innerHTML); else if ("B" == g.tagName) {
                    h || (h = Wr(b, "", ""));
                    if (1 == b.a.length) Vr(h.aa, d, 0, g); else {
                        var k = d;
                        var l = g;
                        var m = b.a;
                        h = h.aa;
                        for (var q = [], t, v = l.firstChild; v; v = t) {
                            t = v.nextSibling, $r(v);
                        }
                        for (t = l.firstChild; t; t = t.nextSibling) {
                            t.attributes && t.attributes.i ? (l = parseInt(t.attributes.i.nodeValue, 10), !isNaN(l) && 0 <= l && l < m.length && (m[l].Ld && q[l] ? q[l].T += t.firstChild && 3 == t.firstChild.nodeType ? t.firstChild.nodeValue : Bf(t) : q[l] = Vr(h, k, l, t))) : 3 == t.nodeType && h.push({
                                    R: -1,
                                    T: Kc(t.nodeValue)
                                });
                        }
                        null != h && 0 < h.length && -1 == h[0].R && (1 == h.length ? h[0].R = 0 : (h[1].T = h[0].T + h[1].T, h.shift()));
                    }
                    h = void 0;
                }
            }
            g = b.b;
            for (k = 0; k < g.length - 1; ++k) {
                m = g[k], h = zc(m.aa[m.aa.length - 1].T), h = h.charCodeAt(h.length - 1), 12288 <= h && 12351 >= h || 65280 <= h && 65519 >= h || (m.aa[m.aa.length - 1].T += " ");
            }
            jf(e);
            for (e = 0; e < b.a.length; ++e) {
                e < d.length && e < b.g.length && null != d[e] && (g = b.g[e], k = d[e].start, null != k && (m = g.substring(0, g.length - yc(g).length), " " == m && (m = ""), m && (k.T = m + yc(k.T))), k = d[e].end, null != k && (g = g.substring(zc(g).length), " " == g && (g = ""), g && (k.T = zc(k.T) + g)));
            }
            1 != b.b.length || b.b[0].Ke || (b.b[0].Ke = b.l);
            c.write(b.l, b.b);
            Xr(b);
        }
        b.K || (this.L = !1);
        a.Y += b.o;
        b = Math.min(Math.floor(100 * a.Y / a.f), 100);
        a.B != b && (a.B = b, a.sa ? (a.l(a.B, !0), a.L(a.Y)) : a.l(a.B, !1));
        return !1;
    };
    w.Nf = function (a, b) {
        if (!this.b) return wk;
        if (!Ck(a)) return vk;
        if (1 < zs(b)) {
            a = b.g[0];
            var c = b.b;
            if (a.b || 0 == c.length || null == a.a || 0 == a.a.length) a = null; else {
                for (var d = [], e = [], g = 0; g < a.a.length && g < c.length; ++g) {
                    var h = a.a[g];
                    h && h[0] && 200 == h[1] || (e.push(c[g]), d.push(a.f[g]));
                }
                a = 0 < e.length ? {Qi: new ns(d, !0), Ri: e} : null;
            }
            a = a ? new Fs([a.Qi], a.Ri, b.f, b.a, b.c, b.K, b.sa, b.l) : null;
            null != a && Os(this, b.f, a, this.od);
        } else {
            a = !1;
            for (c = 0; c < b.g.length; ++c) {
                d = b.g[c], d.b || d.a && d.a[0] ? d = d.c = !1 : (d.b = !0, d = d.c = !0), a = d || a;
            }
            if (a) return this.od;
        }
        d = this.a;
        a = this.c;
        if (1 < b.b.length) for (c = b.g[0], d = d == Ea, e = b.b, g = 0; g < c.a.length && g < e.length; ++g) {
            if ((h = c.a[g]) && 200 == h[1]) {
                var k = h[2],
                    l = e[g],
                    m = l,
                    q = null != k && k == a;
                m.s = h[0];
                y(q) && (m.G = q);
                l.K = d && null == k;
            }
        } else {
            c = new ms(d == Ea);
            for (d = 0; d < b.g.length; ++d) {
                h = b.g[d], e = a, g = c, h.a && h.a[0] && (h = h.a[0], g.a.push(h[0]), h = h[2], g.b = g.b && null != h && h == e, null != h && (g.c = !1));
            }
            null != b.o && (c.a.push(b.o), b.o = null);
            if (a = b.b[0]) d = c.b, a.s = c.$(), y(d) && (a.G = d), a.K = c.c;
        }
        if (this.g) {
            a = D(this.lf, this);
            for (c = 0; c < b.b.length; c++) {
                a(b.f, b.b[c]);
            }
            for (c = 0; c < b.s.length; c++) {
                a(b.f, b.s[c]);
            }
            Hs(b);
            b.Y = !0;
            b.C && b.l && (b = b.l, 0 == --b.b && Ds(b.a));
        }
        return wk;
    };
    function Ms(a) {
        a.H && a.H.disconnect();
        a.ra && a.ra.reset();
        a.b && (a.C.stop(), a.b = !1, a.B = !1);
        if (a.s.length) {
            for (var b = 0; b < a.s.length; ++b) {
                a.s[b].M();
            }
            a.s = [];
        }
        null != a.o && (a.o.restore(), a.o = null);
        null != a.P && (a.P.restore(), a.P = null);
    };
    function Qs(a, b, c, d, e, g, h, k) {
        R.call(this);
        this.K = b || null;
        this.I = !!c;
        this.C = d || "transparent";
        this.g = g || "";
        b = h || {fetchStart: 0, Zj: 0};
        a = b.fetchStart || 0;
        b = b.fetchEnd || 0;
        this.G = a && b ? b - a : 0;
        this.L = qc() - vp;
        this.l = !1;
        this.b = new Cq(e || "", void 0, g);
        this.H = new rk(1);
        this.s = new Qr();
        this.f = null;
        this.h = !0;
        this.B = null != x.IntersectionObserver;
        this.o = k || null;
        new Ug(this);
        e = new Lp();
        g = new Np(D(this.b.g, this.b, e.register()));
        this.bd = Op(g, e.ab(D(this.bd, this)));
        this.Yc = Op(g, e.ab(D(this.Yc, this)));
        this.Kd = Op(g, e.ab(D(this.Kd, this)));
        this.restore = Op(g, e.ab(D(this.restore, this)));
        g.finish();
        e.finish();
    }

    F(Qs, R);
    aq(14097, Qs.prototype, {
        ze: function ze() {
            Up(this.b.c ? "te_afas" : "te_afau");
        }
    });
    w = Qs.prototype;
    w.Ta = function () {
        return this.b.c;
    };
    w.bd = function (a, b) {
        if (this.b.Ta()) {
            var c = this.b,
                d = {alpha: !0};
            b && (d.hl = b);
            c.f.send(d, a);
        } else this.ze(), a(null);
    };
    w.Yc = function (a) {
        var b = document.documentElement.lang;
        if (b) a(b); else if (this.b.Ta()) {
            var c = new ol(document.body, !1, !1, 1, 1),
                b = [];
            try {
                for (var d = 0, e = this.b.b.fg; b.length + d < e;) {
                    var g = c.next();
                    if (1 == c.a && js(g)) c.h(); else if (3 == g.nodeType) {
                        var h = xc(vc(g.nodeValue));
                        h && (b.push(h), d += h.length);
                    }
                }
            } catch (k) {
                if (k != gi) throw k;
            }
            e = this.b;
            b = b.join(" ");
            a = e.b.Tc(a);
            e.b.ta.send({q: b.substring(0, e.b.fg), sl: Ea, tl: "en"}, a);
        } else this.ze(), a(null, !0);
    };
    w.Kd = function (a, b, c, d, e) {
        var g = qc();
        bq();
        if (!a || $p(a, b)) a = Ea;
        if (e || a != this.a || b != this.c) this.s = new Qr();
        this.a = a;
        this.c = b;
        this.b.Ta() ? (d = d || document.documentElement, this.f && this.f.M(), this.o.reset(), this.f = new Ls(d, this.b, this.K, this.I, this.C, !0, this.H, this.s, this.B, this.o), this.f.Ya = this.l, this.h = !0, this.f.translate(a, b, c, e, D(this.si, this, g, a, b))) : (this.ze(), c(0, !1, !0));
    };
    w.Yi = function () {
        return !!this.f && this.f.b;
    };
    w.yg = dc("l");
    w.restore = function () {
        bq();
        this.b.Ta() && this.f && this.f.restore();
    };
    w.F = function () {
        cq();
        Qs.m.F.call(this);
        this.b.M();
        this.f = this.b = null;
        this.s = new Qr();
    };
    w.si = function (a, b, c, d) {
        this.h && (this.h = !1, d = {
            sl: b,
            tl: c,
            textlen: d
        }, this.l && (d.ctt = "1"), "" != this.g && (d.sp = this.g), Bq(b, c) && 0 != this.g.indexOf("nmt") && (d.sp = "" != this.g ? "nmt," + this.g : "nmt"), d.ttt = qc() - a, d.ttl = this.L, this.G && (d.ttf = this.G), this.B && Bq(b, c) && (d.sr = 1), Up("te_time", d));
    };
    function Rs(a) {
        T.call(this, a);
        this.l = new Ug(this);
    }

    F(Rs, T);
    w = Rs.prototype;
    w.D = function () {
        var a = Ef(this.b, "select");
        a.className = "goog-te-combo";
        this.S(a);
    };
    w.O = function () {
        Rs.m.O.call(this);
        this.uf();
    };
    w.uf = function () {
        S(this.j(), La, Rp(this, La));
        this.dispatchEvent(vb);
    };
    w.Z = function () {
        Rs.m.Z.call(this);
        this.l.M();
        this.l = null;
    };
    function Ss(a, b) {
        a.j().parentNode != b && (a.j().parentNode.removeChild(a.j()), b.appendChild(a.j()));
    }

    w.Hc = function (a) {
        this.b.Ec(this.j());
        for (var b in a) {
            if (a[b] !== Object.prototype[b]) {
                var c = this.b.D(na, {value: b});
                this.b.eb(c, a[b]);
                this.j().appendChild(c);
            }
        }
        this.j().selectedIndex = 0;
    };
    w.xa = function () {
        return this.j().value;
    };
    w.ua = function (a) {
        if (this.j().value != a) for (var b = 0, c; c = this.j().options.item(b); ++b) {
            if (c.value == a) {
                this.j().selectedIndex = b;
                break;
            }
        }
    };
    w.na = function (a) {
        if ("undefined" == A(a)) return this.j().options.item(this.j().selectedIndex).text;
        for (var b = 0, c; c = this.j().options.item(b); ++b) {
            if (c.value == a) return c.text;
        }
    };
    w.oa = function (a) {
        this.j().disabled = !a;
    };
    function Ts(a) {
        Rs.call(this, a);
    }

    F(Ts, Rs);
    Ts.prototype.yb = function (a) {
        this.Hc.call(this, a);
    };
    function Us(a, b) {
        Rs.call(this, b);
        this.a = a && vd(a) || {};
        this.a.Pe = this.a.Pe || 11;
        this.a.Hd = 0 != this.a.Hd;
        this.a.Ha || (this.a.Ha = Gp);
    }

    F(Us, Rs);
    w = Us.prototype;
    w.Uc = function () {
        throw Error("Not implemented.");
    };
    w.D = function () {
        this.Uc();
        this.o = this.j();
        this.f = Ze(la, {frameBorder: 0, "class": "goog-te-menu-frame skiptranslate", title: Z.Mg});
        this.f.style.visibility = ac;
        Q(this.f, !1);
        document.body.appendChild(this.f);
    };
    w.uf = function () {
        var a = pe.test(sp) ? Nb : "ltr",
            b = this.a.Ha,
            c = V(this, "menuBody");
        this.l.w(this.f, vb, this.cj);
        Vp(this.f, D(function () {
            var d = uf(this.f);
            d.write(ga + X(b) + '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="' + X(a) + '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="' + X(c) + '" class="goog-te-menu"></div></body>');
            d.close();
        }, this));
    };
    w.cj = function () {
        this.c = new Me(uf(this.f));
        this.I = this.c.j(V(this, "menuBody"));
        this.l.w(this.o, Pa, this.oe);
        J ? this.l.w(this.f, Ha, this.nd) : this.l.w(vf(this.f), Ha, this.nd);
        this.dispatchEvent(vb);
    };
    w.Z = function () {
        Us.m.Z.call(this);
        jf(this.f);
        this.o = this.P = this.h = this.I = this.c = this.f = null;
    };
    w.Lf = function (a) {
        this.g != a.currentTarget.value && (this.ua(a.currentTarget.value), this.dispatchEvent(La));
        this.nd();
    };
    w.oe = function () {
        Vs(this);
        vf(this.f).focus();
        this.W = !0;
    };
    w.nd = function () {
        this.W && (this.W = !1, Vs(this, !1), Ye(O(this.o)).focus());
    };
    w.Me = cc();
    w.Ne = cc();
    function Vs(a, b) {
        if ("undefined" == typeof b || b) {
            a.Ne();
            b = Tf(a.o, window);
            var c = b.y + a.o.offsetHeight,
                d = b.y - a.C.height,
                e = b.x,
                g = b.x + a.o.offsetWidth - a.C.width;
            if (J && !M("7.0")) {
                var h = document.body;
                c -= h.offsetTop;
                d -= h.offsetTop;
                e -= h.offsetLeft;
                g -= h.offsetLeft;
            } else h = We(document), c -= h.y, d -= h.y, e -= h.x, g -= h.x;
            h = Ue(window);
            b.y = b.y <= h.height - a.C.height ? c : d;
            b.y > h.height - a.C.height && (b.y = h.height - a.C.height);
            0 > b.y && (b.y = 0);
            pe.test(sp) ? b.x = 0 <= g ? g : e : b.x = e <= h.width - a.C.width ? e : g;
            b.x > h.width - a.C.width && (b.x = h.width - a.C.width);
            0 > b.x && (b.x = 0);
            Mf(a.f, b);
            Q(a.f, !0);
            Ws(a);
        } else a.Me(), Q(a.f, !1);
    }

    w.xa = r("g");
    w.Hc = function (a) {
        this.c.Ec(this.I);
        Q(this.f, !0);
        this.ha = a;
        this.h = [];
        for (var b in a) {
            if (a[b] !== Object.prototype[b]) if ("---" == a[b]) {
                var c = {link: this.c.D(f, {className: "goog-te-menu2-separator", value: b}), gi: !0};
                this.h.push(c);
            } else {
                c = {link: this.c.D("A", {className: jb, href: sb, value: b})};
                this.h.push(c);
                var d = this.c.D(f, {style: "white-space:nowrap"});
                this.c.appendChild(c.link, d);
                this.a.Hd && this.c.appendChild(d, this.c.D(ra, {className: "indicator"}, "\u203A"));
                this.c.appendChild(d, this.c.D(ra, {className: "text"}, a[b]));
                this.l.w(c.link, Pa, this.Lf);
            }
        }
        a = this.h.length - 1;
        a = Math.round((a - a % this.a.Pe) / this.a.Pe) + 1;
        this.P = this.c.D("TABLE", {cellspacing: 0, cellpadding: 0, border: 0});
        b = this.c.D("TBODY");
        c = this.c.D("TR", {valign: "top"});
        this.I.className = "goog-te-menu2";
        this.c.appendChild(this.I, this.P);
        this.c.appendChild(this.P, b);
        this.c.appendChild(b, c);
        for (d = b = 0; b < a; ++b) {
            var e = this.c.D("TD");
            this.c.appendChild(c, e);
            for (var g = 0; 11 > g && d < this.h.length; ++g, ++d) {
                this.c.appendChild(e, this.h[d].link);
            }
            b != a - 1 && (e = this.c.D("TD", {"class": "goog-te-menu2-colpad"}, "\xA0"), this.c.appendChild(c, e));
        }
        this.g = null;
        this.ua(this.h[0].link.value);
        Ws(this);
        Q(this.f, !1);
    };
    w.na = function (a) {
        a = "undefined" == A(a) ? this.g : a;
        return this.ha[a];
    };
    w.Oe = cc();
    w.ua = function (a) {
        if (this.g != a) {
            this.na(a) && (this.g = a, this.Oe());
            for (var b = 0; b < this.h.length; ++b) {
                var c = this.h[b];
                c.gi || (c.link.className = c.link.value == a && this.a.Hd ? jb : "goog-te-menu2-item");
            }
        }
    };
    function Ws(a) {
        bg(a.I, ag(a.P));
        bg(a.f, ag(a.I));
        a.C = ag(a.f);
    }

    function Xs(a, b) {
        Us.call(this, a, b);
    }

    F(Xs, Us);
    w = Xs.prototype;
    w.Uc = function () {
        var a = this.b.D("a", {"aria-haspopup": "true"});
        a.className = ib;
        a.href = sb;
        this.H = this.b.D(ra);
        a.appendChild(this.H);
        this.L = this.b.D("IMG", {
            src: qb,
            alt: "",
            style: "background-image:url(" + Dp + ");background-position:-14px 0px;border:none",
            width: 14,
            height: 14
        });
        a.appendChild(this.L);
        this.S(a);
    };
    w.Me = function () {
        P(this.L, Ga, "-14px 0px");
    };
    w.Ne = function () {
        P(this.L, Ga, "0px 0px");
    };
    w.Z = function () {
        Xs.m.Z.call(this);
        this.L = this.H = null;
    };
    w.Oe = function () {
        this.b.eb(this.H, this.na(this.g) || "");
    };
    w.yb = function (a) {
        this.Hc.call(this, a);
    };
    function Ys(a, b) {
        Us.call(this, a, b);
    }

    F(Ys, Us);
    w = Ys.prototype;
    w.Uc = function () {
        var a = this.b.D("a", {"aria-haspopup": "true"});
        a.className = ib;
        a.href = sb;
        this.H = this.b.D(ra);
        a.appendChild(this.H);
        a.appendChild(this.b.D("IMG", {src: qb, alt: "", width: 1, height: 1}));
        a.appendChild(this.b.D(ra, {style: "border-left:1px solid #bbb"}, "\u200B"));
        a.appendChild(this.b.D("IMG", {src: qb, alt: "", width: 1, height: 1}));
        this.L = this.b.D("span", {style: "color:#767676", "aria-hidden": "true"}, "\u25BC");
        a.appendChild(this.L);
        this.S(a);
    };
    w.Me = function () {
        P(this.L, "color", "#9b9b9b");
    };
    w.Ne = function () {
        P(this.L, "color", "#d5d5d5");
    };
    w.Z = function () {
        Ys.m.Z.call(this);
        this.L = this.H = null;
    };
    w.Oe = function () {
        this.b.eb(this.H, this.na(this.g) || "");
    };
    w.yb = function (a) {
        this.Hc.call(this, a);
    };
    function Zs(a, b) {
        Us.call(this, a, b);
        this.a.Hd = !1;
    }

    F(Zs, Us);
    Zs.prototype.Uc = function () {
        var a = Ef(this.b, "div");
        a.className = "goog-te-button";
        var b = this.b.D(f, {style: "background: url(" + Cp + ") repeat-x 0 -39px"});
        a.appendChild(b);
        this.H = Ef(this.b, Ja);
        b.appendChild(this.H);
        this.S(a);
    };
    Zs.prototype.xg = function (a) {
        ff(this.H);
        this.H.appendChild(this.b.a.createTextNode(String(a + "\xA0\u25BC")));
    };
    Zs.prototype.Z = function () {
        Zs.m.Z.call(this);
        this.H = null;
    };
    Zs.prototype.Lf = function (a) {
        this.ua(a.currentTarget.value);
        this.dispatchEvent(La);
        this.nd();
    };
    function $s(a, b) {
        T.call(this, b);
        this.h = new Ug(this);
        this.a = a && vd(a) || {};
        this.a.Ha || (this.a.Ha = Gp);
        this.a.Ye = !1;
        P(this.b.a.body, Hb, "relative");
        Sk || P(this.b.a.body, "minHeight", "100%");
        P(this.b.a.documentElement, "height", "100%");
        P(this.b.a.body, "top", "0px");
        J && (window._bannerquirkfixleft = -parseInt("0" + this.b.a.body.leftMargin, 10), window._bannerquirkfixtop = -parseInt("0" + this.b.a.body.topMargin, 10) - 40);
    }

    F($s, T);
    w = $s.prototype;
    w.fa = function () {
        var a = this.b.a.body.firstChild;
        hh(this, a.parentNode, a);
    };
    w.D = function () {
        var a = Ef(this.b, "div");
        this.ga = !1;
        Q(a, !1);
        H(a, Pb);
        var b = V(this, Sa);
        a.innerHTML = '<iframe id="' + X(b) + '" class="goog-te-banner-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible"></iframe>';
        this.S(a);
    };
    w.O = function () {
        $s.m.O.call(this);
        var a = {
                dir: pe.test(sp) ? Nb : "ltr",
                Ha: this.a.Ha,
                Td: qb,
                ti: pb,
                Ae: "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_68x28dp.png",
                se: Dp,
                Ni: V(this, "promptSection"),
                kh: V(this, "confirm"),
                Li: V(this, Ib),
                Ki: V(this, "progressValue"),
                ji: Fp,
                gh: V(this, "cancel"),
                sh: V(this, "finishSection"),
                Pi: V(this, "restore"),
                oh: V(this, "errorSection"),
                nh: V(this, "errorContent"),
                jh: V(this, "close"),
                Yj: Dp,
                yi: V(this, "noAutoPopup")
            },
            b = [];
        this.a.Ye && b.push(Oq({id: V(this, Jb)}));
        b.push(Oq({id: V(this, Kb)}));
        a.Mi = Z.ah.apply(null, b);
        b = [];
        this.a.Ye && b.push(Oq({id: V(this, Xa)}));
        b.push(Oq({id: V(this, Ya)}));
        a.rh = Z.Wg.apply(null, b);
        this.a.ec && (a.ec = this.a.ec);
        this.l = this.b.j(V(this, Sa));
        this.h.w(this.l, vb, this.Zi);
        Vp(this.l, D(function () {
            var b = uf(this.l);
            b.write(Nq(a));
            b.close();
        }, this));
    };
    w.Zi = function () {
        this.c = new Me(uf(this.l));
        at(this, Z.ff);
        if (this.a.Ha == Gp) {
            var a = "url(" + Cp + ")";
            P(this.c.a.body, Fa, a);
            for (var b = this.c.a.getElementsByTagName(Ja), c = 0; c < b.length; ++c) {
                var d = b[c].parentNode;
                P(d, Fa, a);
                P(d, "backgroundRepeat", "repeat-x");
                P(d, Ga, "0 -39px");
            }
        }
        this.a.Ye && (this.g = new Xs(this.a, this.c));
        this.f = new Xs(this.a, this.c);
        this.o = new Zs(this.a, this.c);
        this.h.w(this.c.j(V(this, "confirm")), Pa, Rp(this, "clk_confirm"));
        this.h.w(this.c.j(V(this, "cancel")), Pa, Rp(this, "clk_cancel"));
        this.h.w(this.c.j(V(this, "restore")), Pa, Rp(this, "clk_restore"));
        this.h.w(this.c.j(V(this, "close")), Pa, Rp(this, "clk_close"));
        this.I = this.c.j(V(this, "noAutoPopup"));
        this.h.w(this.I, Pa, Rp(this, "clk_no_ap"));
        this.g && this.h.w(this.g, La, Rp(this, "chg_src_lang"));
        this.h.w(this.f, La, Rp(this, Oa));
        this.h.w(this.o, La, this.Sh);
        a = new Lp(D(this.$i, this));
        this.g && this.h.w(this.g, vb, a.register());
        this.h.w(this.f, vb, a.register());
        this.h.w(this.o, vb, a.register());
        a.finish();
        this.g && this.g.fa(this.c.j(V(this, Jb)));
        this.f.fa(this.c.j(V(this, Kb)));
        this.o.fa(this.c.j("options"));
    };
    w.$i = function () {
        this.o.xg(Z.Pg);
        this.o.Hc({turn_off_site: Z.Zg, s1: "---", learn_more: Z.Og});
        this.dispatchEvent(vb);
    };
    w.Sh = function () {
        switch (this.o.xa()) {
            case "learn_more":
                window.open(Jp, "_blank");
                break;
            case "turn_off_site":
                this.dispatchEvent(Qa);
        }
    };
    w.Z = function () {
        this.J(!1);
        $s.m.Z.call(this);
        this.h.M();
        this.h = null;
        this.g && (this.g.M(), this.g = null);
        this.f.M();
        this.f = null;
        this.o.M();
        this.o = null;
        jf(this.l);
        this.lc = this.c = null;
    };
    w.uc = function () {
        return this.g ? this.g.xa() : "";
    };
    w.wa = function () {
        return this.f.xa();
    };
    w.Fd = function (a) {
        this.g && this.g.ua(a);
        this.L && this.L[a] && this.c.eb(this.I, Z.Yg(this.L[a]));
    };
    w.Aa = function (a) {
        this.f.ua(a);
    };
    function bt(a, b, c, d) {
        if (a.lc != b) {
            a.lc = b;
            if (0 == b) {
                a.g && Ss(a.g, a.c.j(V(a, Jb)));
                if (a.H) {
                    var e = a.wa();
                    a.f.yb(a.H);
                    a.Aa(e);
                }
                Ss(a.f, a.c.j(V(a, Kb)));
            } else 2 == b && (a.g && Ss(a.g, a.c.j(V(a, Xa))), a.C && (e = a.wa(), a.f.yb(a.C), a.Aa(e)), Ss(a.f, a.c.j(V(a, Ya))));
            e = {};
            e[-1] = a.c.j(V(a, "errorSection"));
            e[0] = a.c.j(V(a, "promptSection"));
            e[1] = a.c.j(V(a, Ib));
            e[2] = a.c.j(V(a, "finishSection"));
            for (var g in e) {
                e[g] !== Object.prototype[g] && Q(e[g], g == b);
            }
        }
        c && a.J(!0);
        a.I.parentNode.parentNode.style.display = d ? "block" : p;
    }

    w.N = r("ga");
    w.J = function (a) {
        if (this.ga != a) {
            this.ga = a;
            if (J) {
                var b = parseInt("0" + this.b.a.body.leftMargin, 10);
                var c = parseInt("0" + this.b.a.body.topMargin, 10);
            }
            var d = "BackCompat" == this.b.a.compatMode;
            a ? (P(this.b.a.body, "top", "40px"), Q(this.j(), !0), J && (M("7.0") ? (window._bannerquirkfixleft = window._bannerquirkfixtop = 0, d && (this.b.a.body.topMargin = c + 40)) : d ? (this.b.a.body.topMargin = c + 40, window._bannerquirkfixleft = window._bannerquirkfixtop = 0) : (window._bannerquirkfixleft = -b, window._bannerquirkfixtop = -c - 40))) : (P(this.b.a.body, "top", "0px"), Q(this.j(), !1), d && 40 <= c && (this.b.a.body.topMargin = c - 40));
        }
    };
    w.Ue = function (a) {
        this.c.eb(this.c.j(V(this, "progressValue")), a);
    };
    function at(a, b) {
        a.c.eb(a.c.j(V(a, "errorContent")), b);
    }

    w.We = function (a, b) {
        this.H = a;
        this.C = b;
        this.f.yb(a);
    };
    function ct(a, b) {
        T.call(this, b);
        this.a = a && vd(a) || {};
        this.c = new Ug(this);
    }

    F(ct, T);
    var dt = {Uj: 0, Aj: 1, Kj: 2};
    w = ct.prototype;
    w.D = function () {
        var a = Ef(this.b, "div");
        H(a, Pb);
        H(a, "goog-te-gadget");
        a.dir = pe.test(sp) ? Nb : "ltr";
        Q(a, !1);
        if (2 == this.a.Kb) a.innerHTML = Pq({id: V(this, Tb), qg: "", pg: ""}); else {
            var b = Z.Rg(Qq() || "");
            a.innerHTML = Pq({id: V(this, Tb), qg: "", pg: 1 == this.a.Kb ? "&nbsp;&nbsp;" + b : b});
        }
        this.S(a);
    };
    w.O = function () {
        ct.m.O.call(this);
        this.f = 2 == this.a.Kb ? new Ys(null, this.b) : new Ts(this.b);
        this.c.w(this.f, La, Rp(this, Oa));
        this.c.w(this.f, vb, this.aj);
        var a = this.b.j(V(this, Tb));
        if (2 == this.a.Kb) {
            var b = this.b.D("IMG", {src: qb, "class": "goog-te-gadget-icon", alt: ""});
            b.style.backgroundImage = "url(" + Dp + ")";
            b.style.backgroundPosition = "-65px 0px";
            var c = this.b.D(ra, {style: "vertical-align: middle"});
            a.appendChild(b);
            a.appendChild(c);
            this.f.fa(c);
            a.style.whiteSpace = "nowrap";
            a.className = "goog-te-gadget-simple";
        } else this.f.fa(a), 1 == this.a.Kb && (a.style.display = "inline");
    };
    w.aj = function () {
        if (2 == this.a.Kb) {
            var a = this.f,
                b = this.b.j(V(this, Tb));
            a.l.ca(a.o, Pa, a.oe);
            a.o = b;
            a.l.w(a.o, Pa, a.oe);
        }
        this.dispatchEvent(vb);
    };
    w.Z = function () {
        ct.m.Z.call(this);
        this.c.M();
        this.c = null;
        this.f.M();
        this.f = null;
    };
    w.wa = function () {
        return this.f.xa();
    };
    w.Aa = function (a) {
        "" == a ? this.H && this.f.yb(this.H) : this.C && this.f.yb(this.C);
        this.f.ua(a);
    };
    w.J = function (a) {
        Q(this.j(), a);
    };
    w.oa = function (a) {
        this.f.oa(a);
    };
    w.We = function (a, b) {
        this.H = a;
        this.C = b;
    };
    function et(a, b) {
        b || Le();
        this.a = a || null;
    }

    et.prototype.fa = function (a, b) {
        a = a(b || {}, void 0, this.a ? this.a.a() : {});
        this.b();
        return String(a);
    };
    function ft(a, b) {
        b = b || {};
        a.a && a.a.a();
        var c = b.top,
            d = b.left,
            e = b.bottom,
            g = b.right,
            h = b.id;
        b = fj("." + mj(b.className) + " {z-index:9999999; overflow:visible; position:fixed; _position:absolute;" + (c || 0 == c ? "top:" + mj(c) + "px; _top:expression((" + mj(c) + "+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "top:auto;") + (d || 0 == d ? "left:" + mj(d) + "px; _left:expression((" + mj(d) + "+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "left:auto;") + (e || 0 == e ? "bottom:" + mj(e) + "px; _top:expression((-" + mj(e) + ca + String(h).replace(tj, qj) + "').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "bottom:auto;") + (g || 0 == g ? "right:" + mj(g) + "px; _left:expression((-" + mj(g) + ca + String(h).replace(tj, qj) + "').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "right:auto;") + "}");
        a.b();
        return oe(b.toString());
    }

    et.prototype.b = z;
    function gt(a, b) {
        T.call(this, b);
        this.a = a && vd(a) || {};
        this.a.Ha || (this.a.Ha = Gp);
        this.c = new Ug(this);
    }

    F(gt, T);
    var ht = {Oj: 1, Pj: 2, oj: 3, nj: 4};
    w = gt.prototype;
    w.D = function () {
        var a = Ef(this.b, "div");
        this.ga = !1;
        Q(a, !1);
        var b = V(this, Sa);
        a.innerHTML = '<iframe id="' + X(b) + '" frameBorder=0 src="javascript:\'\'" class="goog-te-ftab-frame skiptranslate" style="visibility:visible"></iframe>';
        this.S(a);
    };
    w.O = function () {
        gt.m.O.call(this);
        var a = pe.test(sp) ? Nb : "ltr",
            b = this.a.Ha,
            c = V(this, Zb);
        this.j().id = V(this, "floatContainer");
        var d = {id: this.j().id, className: "goog-te-ftab-float"};
        this.j().className += " goog-te-ftab-float";
        switch (this.a.Wc) {
            case 2:
                var e = cb;
                d.top = 0;
                d.right = 20;
                break;
            case 3:
                e = bb;
                d.bottom = 0;
                d.right = 20;
                break;
            case 4:
                e = bb;
                d.bottom = 0;
                d.left = 20;
                break;
            default:
                e = cb, d.top = 0, d.left = 20;
        }
        Wf(ft(new et(), d), this.j());
        this.l = this.b.j(V(this, Sa));
        this.c.w(this.l, vb, this.bj);
        Vp(this.l, D(function () {
            var d = uf(this.l);
            d.write(ga + X(b) + '"></head><body class="goog-te-ftab ' + X(e) + '" scroll="no" style="overflow:hidden" dir="' + X(a) + '"><a id="' + X(c) + '" href="javascript:void(0)" class="goog-te-ftab-link"><img src="' + X(qb) + aa + X(Dp) + ');background-position:-65px 0px"><span>' + cj(Z.hf) + "</span></a></body>");
            d.close();
        }, this));
    };
    w.bj = function () {
        this.f = new Me(uf(this.l)).j(V(this, Zb));
        this.c.w(this.f, Pa, Rp(this, "clk_trans"));
        Q(this.j(), !0);
        var a = ag(this.f);
        Q(this.j(), !1);
        bg(this.l, a);
        bg(this.j(), a);
        this.dispatchEvent(vb);
    };
    w.Z = function () {
        gt.m.Z.call(this);
        this.c.M();
        this.c = null;
        jf(this.l);
        this.f = this.l = null;
    };
    w.N = r("ga");
    w.J = function (a) {
        this.ga = a;
        Q(this.j(), a);
    };
    function jt(a, b) {
        R.call(this);
        A(a) == Rb && (b = a, a = {});
        A(b) == Rb && (b = Ne(document, String(b)));
        this.W = b;
        this.h = new Ug(this);
        a = Object(a);
        this.g = Ea;
        !(b = window.parent != window) && (b = (!window.external || !window.external.googleToolbarVersion || 6.2 > parseFloat(window.external.googleToolbarVersion)) && (!window.gtbExternal || !window.gtbExternal.isTranslateEnabled || !window.gtbExternal.isTranslateEnabled())) && (b = navigator.appVersion && navigator.appVersion.match(/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/), b = !(b && b[2] && b[3] && 4001 <= 1E3 * Number(b[2]) + Number(b[3])));
        this.a = {
            Qd: b,
            wf: !1,
            Rd: null,
            Qc: null,
            ue: [],
            vf: [],
            mh: !1,
            $b: !1,
            Za: "",
            xf: !1,
            ae: "",
            Kb: 0,
            sf: !1
        };
        this.ha = {Ha: Gp, ec: "https://" == Bp ? Z.Ug : null};
        this.P = {Ha: Gp, Wc: null};
        a && ("autoDisplay" in a && (this.a.Qd = this.a.Qd && !!a.autoDisplay), "multilanguagePage" in a && (this.a.$b = !!a.multilanguagePage), "gaTrack" in a && (this.a.xf = !!a.gaTrack), "layout" in a && (this.a.Kb = a.layout), a.pageLanguage && (this.a.Ed = Sp(a.pageLanguage)), a.includedLanguages && (this.a.ue = a.includedLanguages.split(",")), a.excludedLanguages && (this.a.vf = a.excludedLanguages.split(",")), this.a.Ed && (this.g = this.a.Ed), a.key && (this.a.Za = a.key), a.gaId && (this.a.ae = a.gaId), this.P.Wc = Number(a.floatPosition) || this.P.Wc, "disableAutoTranslation" in a && (this.a.sf = !!a.disableAutoTranslation));
        !this.a.sf && kt(this) && (this.a.wf = !0);
        this.s = {};
        if ((a = document.cookie.match(/(^|; )googtransopt=(.*?)(;|$)/)) && a[2]) for (this.s = {}, a = Bc(a[2]).split("|"), b = 0; b < a.length; ++b) {
            var c = a[b].split("=");
            c[0] && (this.s[c[0]] = c[1]);
        }
        this.ra = new Fr({Za: this.a.Za, Eb: 1, Xe: !0, bk: Ip}, {client: yp, u: window.location.href});
        this.o = new Qs(0, this.ra, void 0, void 0, this.a.Za, void 0, void 0, new Es());
        this.G = !1;
        this.h.w(window, "unload", this.M);
        this.K = new Lp(D(this.Mh, this));
        this.C = new Lp(D(this.Ph, this));
        this.I = new Np(D(this.hi, this));
        this.b = new $s(this.ha);
        this.o.bd(this.K.register(D(this.Lh, this)), sp);
        this.W ? (this.f = new ct(this.a), this.h.w(this.f, vb, this.K.register()), this.h.w(this.f, Oa, Op(this.I, this.C.ab(D(this.Kh, this)))), this.f.fa(this.W)) : this.P.Wc && (this.l = new gt(this.P), this.h.w(this.l, vb, this.K.register()), this.h.w(this.l, "clk_trans", Op(this.I, this.C.ab(D(this.Jh, this)))), this.l.fa());
        !this.a.Ed && this.a.mh && this.o.Yc(this.K.register(D(this.Gh, this)));
        this.K.finish();
    }

    F(jt, R);
    function kt(a) {
        function b(a, b) {
            if (a = Bc(a).match("^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)")) {
                if (a[3]) return b.a.Rd = a[2], b.a.Qc = a[3], !0;
                if (a[6]) return b.a.Rd = a[5], b.a.Qc = a[6], !0;
            }
            return !1;
        }

        var c = {
                url: function url() {
                    var a = window.location.href.match(/#.*googtrans(.*)/);
                    return a && a[1];
                }, cookie: function cookie() {
                    var a = document.cookie.match(/(^|; )googtrans=(.*?)(;|$)/);
                    return a && a[2];
                }
            },
            d;
        for (d in c) {
            if (c[d] !== Object.prototype[d]) {
                var e = c[d]();
                if (e && b(e, a)) return d;
            }
        }
        return "";
    }

    function lt(a, b) {
        for (var c = window.location.hostname.split("."); 2 < c.length;) {
            c.shift();
        }
        c = ";domain=" + c.join(".");
        null != b ? a = a + "=" + b : (b = new Date(), b.setTime(b.getTime() - 1), a = a + "=none;expires=" + b.toGMTString());
        a += ";path=/";
        document.cookie = a;
        try {
            document.cookie = a + c;
        } catch (d) {
        }
    }

    function mt(a, b) {
        var c = null;
        y(b) && (c = y(a) ? "/" + a + "/" + b : "/" + b);
        lt("googtrans", c);
    }

    w = jt.prototype;
    w.Lh = function (a) {
        this.c = Sp(sp);
        this.H = a || {};
        this.B = {};
        this.L = {};
        a = !this.a.ue.length;
        var b = Kp(this.a.ue),
            c = Kp(this.a.vf);
        this.B[sp] = "";
        this.L[sp] = "";
        for (var d in this.H.tl) {
            this.H.tl[d] === Object.prototype[d] || !(a || d in b) || d in c || (this.L[d] = this.H.tl[d], d == this.a.Ed && !this.a.$b) || (this.B[d] = this.H.tl[d]);
        }
        this.B[sp] || delete this.B[sp];
        this.L[sp] || delete this.L[sp];
        this.ja = vd(this.H.sl);
    };
    w.Gh = function (a) {
        a && (this.g = Sp(a));
    };
    w.Mh = function () {
        delete this.K;
        if (this.H) {
            this.g = this.g || this.a.Rd;
            this.c = this.a.Qc || this.c;
            var a = this.a.wf || this.a.Qd && this.g != this.c && !(this.g in wp) && "1" != this.s.os && "1" != this.s["o" + this.g];
            "zh-TW" == this.g && (this.g = "zh-CN");
            this.ja[this.g] || (a = !1, this.g = Ea);
            if (!this.B[this.c]) if (a = !1, this.B.en) this.c = "en"; else for (var b in this.B) {
                if (this.B[b] !== Object.prototype[b]) {
                    this.c = b;
                    break;
                }
            }
            if (this.f) {
                var c = this.B,
                    d = {"": Z.Tg};
                for (b in c) {
                    c[b] !== Object.prototype[b] && (d[b] = c[b]);
                }
                this.f.We(d, this.L);
                this.f.Aa("");
            }
            !up && a ? this.a.Qc ? Op(this.I, this.C.ab(D(this.Gd, this, !0, !0))).call() : (this.G = !0, Op(this.I, this.C.ab(D(this.Gd, this))).call(), Up("te_ap", {sl: this.g})) : (this.l && this.l.J(!0), this.f && this.f.J(!0));
            window.google.translate.TranslateService && this.oa(!1);
            this.I.finish();
        }
    };
    w.Ph = function () {
        var a = this.b,
            b = this.ja;
        a.g && a.g.yb(b);
        a.L = b;
        this.b.We(this.B, this.L);
        this.b.Fd(this.g);
        this.b.Aa(this.c);
        this.h.w(this.b, "clk_confirm", this.Ah);
        this.h.w(this.b, "clk_cancel", this.zh);
        this.h.w(this.b, "clk_restore", this.me);
        this.h.w(this.b, "clk_close", this.md);
        this.h.w(this.b, "clk_no_ap", this.Bh);
        this.h.w(this.b, Qa, this.Ch);
        this.h.w(this.b, "chg_src_lang", this.Gf);
        this.h.w(this.b, Oa, this.Gf);
        this.f && this.f.J(!0);
    };
    w.hi = function () {
        this.h.w(this.b, vb, this.C.register());
        this.b.fa();
        this.C.finish();
    };
    w.F = function () {
        this.o.restore();
        jt.m.F.call(this);
        this.o.M();
        this.h.M();
        this.h = null;
        this.b && this.b.M();
        this.b = null;
        this.l && this.l.M();
        this.l = null;
        this.f && this.f.M();
        this.W = this.f = null;
    };
    w.Ah = function () {
        !this.b.N() || !this.a.$b && $p(this.g, this.b.wa()) || (this.G && Up("te_apt", {sl: this.g}), nt(this, !1), this.f && this.f.Aa(this.b.wa()));
    };
    w.zh = function () {
        this.b.N() && (ot(this), bt(this.b, 0), this.f && this.f.Aa(""));
    };
    w.me = function () {
        this.b.N() && (ot(this), bt(this.b, 0));
        this.f && this.f.Aa("");
    };
    w.md = function () {
        this.b.N() && (this.G && (this.G = !1, Up("te_apc", {sl: this.g})), ot(this), this.b.J(!1), this.f && this.f.Aa(""), this.l && this.l.J(!0));
    };
    w.Bh = function () {
        this.b.N() && (this.s["o" + this.g] = "1", Up("te_apr", {sl: this.g}), this.G = !1, this.md());
    };
    w.Ch = function () {
        if (this.b.N()) {
            this.G = !1;
            this.s.os = "1";
            var a = null;
            if (this.s) {
                var a = [],
                    b;
                for (b in this.s) {
                    this.s[b] !== Object.prototype[b] && a.push(b + "=" + this.s[b]);
                }
                a = a.join("|");
            }
            lt("googtransopt", a);
            this.md();
        }
    };
    w.Gf = function () {
        this.b.N() && (!this.a.$b && $p(this.g, this.b.wa()) ? this.me() : (this.g = this.b.uc() || this.g, this.c = this.b.wa(), 2 == this.b.lc && (this.f && this.f.Aa(this.b.wa()), nt(this))));
    };
    w.Gd = function (a, b) {
        this.b.N() || (this.l && this.l.J(!1), a ? nt(this, b) : bt(this.b, 0, !0, this.G));
    };
    w.Vi = function (a, b) {
        Op(this.I, this.C.ab(D(this.Gd, this, a, b))).call();
    };
    w.Jh = function () {
        this.Gd(2 == this.b.lc);
    };
    w.Kh = function () {
        this.f.wa() ? !this.a.$b && $p(this.g, this.b.wa()) ? this.me() : (this.c = this.f.wa(), this.b.Aa(this.c), nt(this)) : this.f.Aa(this.c);
    };
    function nt(a, b) {
        if (window.google.translate.TranslateService) try {
            window.google.translate.TranslateService.getInstance().restore();
        } catch (c) {
        }
        mt(a.g, a.c);
        a.G = !1;
        !b && a.g in wp && Up("te_ape", {sl: a.g});
        a.b.Ue(0);
        bt(a.b, 1, !0);
        a.o.yg(!!b);
        window.setTimeout(D(a.o.Kd, a.o, a.a.$b ? Ea : a.g, a.c, D(a.Xh, a), void 0, void 0), 0);
        if (a.a.xf && window._gaq && window._gat) try {
            a.a.ae ? window._gat._getTracker(a.a.ae)._trackEvent(ja, "Translate", a.c) : window._gat._getTrackerByName()._trackEvent(ja, "Translate", a.c);
        } catch (c) {
        }
    }

    w.Xh = function (a, b, c) {
        A(this.qa) == n && this.qa();
        this.b.N() && 1 == this.b.lc && (c ? (ot(this), bt(this.b, -1, !0), 2 == c ? at(this.b, Z.Ng) : at(this.b, Z.ff)) : (this.b.Ue(a), b && (this.f && this.f.Aa(this.c), this.b.Fd(this.g), bt(this.b, 2))));
    };
    function ot(a) {
        mt();
        window.setTimeout(D(a.o.restore, a.o, null), 0);
    }

    w.oa = function (a) {
        a || this.md();
        this.f && this.f.oa(a);
        this.l && this.l.J(a);
    };
    function pt(a) {
        if (a && (a = String(a), a = a.split("."), a.length)) {
            for (var b = window, c = 0; c < a.length; ++c) {
                var d = a[c];
                if (!(d && d in b)) return;
                b = b[d];
            }
            return b;
        }
    };
    var qt = pt("google.translate.m");
    if (qt) for (var rt in Z) {
        if (Z[rt] !== Object.prototype[Z[rt]] && Z[rt]) {
            var st = Z[rt]();
            Z[rt] = qt[st] ? qt[st] : Mq;
        }
    }
    if (1 == xp) {
        var tt = null,
            ut = function ut(a) {
                if (!tt) {
                    var b, c, d;
                    a && ("key" in a && (b = a.key), "serverParams" in a && (c = a.serverParams), "timeInfo" in a && (d = a.timeInfo), (a = (a = window.location.hash.match(/google\.translate\.element\.sp=([^&]+)/)) && a[1] ? a[1] : null) && (c = a));
                    a = 0;
                    Ld && (a = 3);
                    tt = new Qs(0, new Fr({Za: b, Eb: a, Xe: !0, Jc: "tvis" == c}), void 0, void 0, b, c, d, new Es());
                    tt.constructor = z;
                    tt.isAvailable = tt.Ta;
                    tt.getSupportedLanguages = tt.bd;
                    tt.getPageLanguage = tt.Yc;
                    tt.setClickThrough = tt.yg;
                    tt.translatePage = tt.Kd;
                    tt.restore = tt.restore;
                    tt.isTranslating = tt.Yi;
                }
                return tt;
            };
        ut.getInstance = function () {
            return tt;
        };
        rc("google.translate.TranslateService", ut);
        Up("te_li");
    } else {
        var vt = null,
            wt = function wt(a, b) {
                vt || (vt = new jt(a, b), vt.constructor = z);
                return vt;
            };
        wt.getInstance = function () {
            return vt;
        };
        rc("google.translate.TranslateElement", wt);
        jt.prototype.dispose = jt.prototype.M;
        jt.prototype.showBanner = jt.prototype.Vi;
        jt.prototype.setEnabled = jt.prototype.oa;
        rc("google.translate.TranslateElement.FloatPosition", ht);
        ht.TOP_LEFT = 1;
        ht.TOP_RIGHT = 2;
        ht.BOTTOM_RIGHT = 3;
        ht.BOTTOM_LEFT = 4;
        rc("google.translate.TranslateElement.InlineLayout", dt);
        dt.VERTICAL = 0;
        dt.HORIZONTAL = 1;
        dt.SIMPLE = 2;
    }
    (function () {
        for (var a in Object.prototype) {
            od = function od(a, b, c) {
                for (var d in a) {
                    a[d] !== Object.prototype[d] && b.call(c, a[d], d, a);
                }
            };
            break;
        }
        var b = qc(),
            c = pt(tp);
        c && A(c) == n && (1 == xp ? c() : function e() {
            var a = document.readyState;
            "undefined" == A(a) || a == Ra || "interactive" == a || 2E4 <= qc() - b ? c() : window.setTimeout(e, 500);
        }());
    })();
}).call(window);
//# sourceMappingURL=element_main.js.map