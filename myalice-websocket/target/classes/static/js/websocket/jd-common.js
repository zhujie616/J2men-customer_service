!function(e, t) {
    function n(e) {
        return O.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    function i(e) {
        if (!yt[e]) {
            var t = L.body
              , n = O("<" + e + ">").appendTo(t)
              , i = n.css("display");
            n.remove(),
            "none" !== i && "" !== i || (ht || (ht = L.createElement("iframe"),
            ht.frameBorder = ht.width = ht.height = 0),
            t.appendChild(ht),
            gt && ht.createElement || (gt = (ht.contentWindow || ht.contentDocument).document,
            gt.write((O.support.boxModel ? "<!doctype html>" : "") + "<html><body>"),
            gt.close()),
            n = gt.createElement(e),
            gt.body.appendChild(n),
            i = O.css(n, "display"),
            t.removeChild(ht)),
            yt[e] = i
        }
        return yt[e]
    }
    function r(e, t) {
        var n = {};
        return O.each(wt.concat.apply([], wt.slice(0, t)), function() {
            n[this] = e
        }),
        n
    }
    function a() {
        vt = t
    }
    function o() {
        return setTimeout(a, 0),
        vt = O.now()
    }
    function s() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function l() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function c(e, n) {
        e.dataFilter && (n = e.dataFilter(n, e.dataType));
        var i, r, a, o, s, l, c, u, f = e.dataTypes, d = {}, p = f.length, h = f[0];
        for (i = 1; i < p; i++) {
            if (1 === i)
                for (r in e.converters)
                    "string" == typeof r && (d[r.toLowerCase()] = e.converters[r]);
            if (o = h,
            h = f[i],
            "*" === h)
                h = o;
            else if ("*" !== o && o !== h) {
                if (s = o + " " + h,
                l = d[s] || d["* " + h],
                !l) {
                    u = t;
                    for (c in d)
                        if (a = c.split(" "),
                        (a[0] === o || "*" === a[0]) && (u = d[a[1] + " " + h])) {
                            c = d[c],
                            c === !0 ? l = u : u === !0 && (l = c);
                            break
                        }
                }
                !l && !u && O.error("No conversion from " + s.replace(" ", " to ")),
                l !== !0 && (n = l ? l(n) : u(c(n)))
            }
        }
        return n
    }
    function u(e, n, i) {
        var r, a, o, s, l = e.contents, c = e.dataTypes, u = e.responseFields;
        for (a in u)
            a in i && (n[u[a]] = i[a]);
        for (; "*" === c[0]; )
            c.shift(),
            r === t && (r = e.mimeType || n.getResponseHeader("content-type"));
        if (r)
            for (a in l)
                if (l[a] && l[a].test(r)) {
                    c.unshift(a);
                    break
                }
        if (c[0]in i)
            o = c[0];
        else {
            for (a in i) {
                if (!c[0] || e.converters[a + " " + c[0]]) {
                    o = a;
                    break
                }
                s || (s = a)
            }
            o = o || s
        }
        if (o)
            return o !== c[0] && c.unshift(o),
            i[o]
    }
    function f(e, t, n, i) {
        if (O.isArray(t))
            O.each(t, function(t, r) {
                n || $e.test(e) ? i(e, r) : f(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
        else if (n || "object" !== O.type(t))
            i(e, t);
        else
            for (var r in t)
                f(e + "[" + r + "]", t[r], n, i)
    }
    function d(e, n) {
        var i, r, a = O.ajaxSettings.flatOptions || {};
        for (i in n)
            n[i] !== t && ((a[i] ? e : r || (r = {}))[i] = n[i]);
        r && O.extend(!0, e, r)
    }
    function p(e, n, i, r, a, o) {
        a = a || n.dataTypes[0],
        o = o || {},
        o[a] = !0;
        for (var s, l = e[a], c = 0, u = l ? l.length : 0, f = e === at; c < u && (f || !s); c++)
            s = l[c](n, i, r),
            "string" == typeof s && (!f || o[s] ? s = t : (n.dataTypes.unshift(s),
            s = p(e, n, i, r, s, o)));
        return (f || !s) && !o["*"] && (s = p(e, n, i, r, "*", o)),
        s
    }
    function h(e) {
        return function(t, n) {
            if ("string" != typeof t && (n = t,
            t = "*"),
            O.isFunction(n))
                for (var i, r, a, o = t.toLowerCase().split(tt), s = 0, l = o.length; s < l; s++)
                    i = o[s],
                    a = /^\+/.test(i),
                    a && (i = i.substr(1) || "*"),
                    r = e[i] = e[i] || [],
                    r[a ? "unshift" : "push"](n)
        }
    }
    function g(e, t, n) {
        var i = "width" === t ? e.offsetWidth : e.offsetHeight
          , r = "width" === t ? 1 : 0
          , a = 4;
        if (i > 0) {
            if ("border" !== n)
                for (; r < a; r += 2)
                    n || (i -= parseFloat(O.css(e, "padding" + Be[r])) || 0),
                    "margin" === n ? i += parseFloat(O.css(e, n + Be[r])) || 0 : i -= parseFloat(O.css(e, "border" + Be[r] + "Width")) || 0;
            return i + "px"
        }
        if (i = Se(e, t),
        (i < 0 || null == i) && (i = e.style[t]),
        He.test(i))
            return i;
        if (i = parseFloat(i) || 0,
        n)
            for (; r < a; r += 2)
                i += parseFloat(O.css(e, "padding" + Be[r])) || 0,
                "padding" !== n && (i += parseFloat(O.css(e, "border" + Be[r] + "Width")) || 0),
                "margin" === n && (i += parseFloat(O.css(e, n + Be[r])) || 0);
        return i + "px"
    }
    function m(e) {
        var t = L.createElement("div");
        return Ce.appendChild(t),
        t.innerHTML = e.outerHTML,
        t.firstChild
    }
    function v(e) {
        var t = (e.nodeName || "").toLowerCase();
        "input" === t ? y(e) : "script" !== t && "undefined" != typeof e.getElementsByTagName && O.grep(e.getElementsByTagName("input"), y)
    }
    function y(e) {
        "checkbox" !== e.type && "radio" !== e.type || (e.defaultChecked = e.checked)
    }
    function b(e) {
        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
    }
    function x(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(),
        t.mergeAttributes && t.mergeAttributes(e),
        n = t.nodeName.toLowerCase(),
        "object" === n ? t.outerHTML = e.outerHTML : "input" !== n || "checkbox" !== e.type && "radio" !== e.type ? "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text) : (e.checked && (t.defaultChecked = t.checked = e.checked),
        t.value !== e.value && (t.value = e.value)),
        t.removeAttribute(O.expando),
        t.removeAttribute("_submit_attached"),
        t.removeAttribute("_change_attached"))
    }
    function w(e, t) {
        if (1 === t.nodeType && O.hasData(e)) {
            var n, i, r, a = O._data(e), o = O._data(t, a), s = a.events;
            if (s) {
                delete o.handle,
                o.events = {};
                for (n in s)
                    for (i = 0,
                    r = s[n].length; i < r; i++)
                        O.event.add(t, n, s[n][i])
            }
            o.data && (o.data = O.extend({}, o.data))
        }
    }
    function E(e, t) {
        return O.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function _(e) {
        var t = ge.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function T(e, t, n) {
        if (t = t || 0,
        O.isFunction(t))
            return O.grep(e, function(e, i) {
                var r = !!t.call(e, i, e);
                return r === n
            });
        if (t.nodeType)
            return O.grep(e, function(e, i) {
                return e === t === n
            });
        if ("string" == typeof t) {
            var i = O.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if (fe.test(t))
                return O.filter(t, i, !n);
            t = O.filter(t, i)
        }
        return O.grep(e, function(e, i) {
            return O.inArray(e, t) >= 0 === n
        })
    }
    function N(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }
    function k() {
        return !0
    }
    function j() {
        return !1
    }
    function C(e, t, n) {
        var i = t + "defer"
          , r = t + "queue"
          , a = t + "mark"
          , o = O._data(e, i);
        o && ("queue" === n || !O._data(e, r)) && ("mark" === n || !O._data(e, a)) && setTimeout(function() {
            !O._data(e, r) && !O._data(e, a) && (O.removeData(e, i, !0),
            o.fire())
        }, 0)
    }
    function S(e) {
        for (var t in e)
            if (("data" !== t || !O.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function A(e, n, i) {
        if (i === t && 1 === e.nodeType) {
            var r = "data-" + n.replace(P, "-$1").toLowerCase();
            if (i = e.getAttribute(r),
            "string" == typeof i) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : O.isNumeric(i) ? +i : q.test(i) ? O.parseJSON(i) : i)
                } catch (a) {}
                O.data(e, n, i)
            } else
                i = t
        }
        return i
    }
    function D(e) {
        var t, n, i = H[e] = {};
        for (e = e.split(/\s+/),
        t = 0,
        n = e.length; t < n; t++)
            i[e[t]] = !0;
        return i
    }
    var L = e.document
      , F = e.navigator
      , M = e.location
      , O = function() {
        function n() {
            if (!s.isReady) {
                try {
                    L.documentElement.doScroll("left")
                } catch (e) {
                    return void setTimeout(n, 1)
                }
                s.ready()
            }
        }
        var i, r, a, o, s = function(e, t) {
            return new s.fn.init(e,t,i)
        }, l = e.jQuery, c = e.$, u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, f = /\S/, d = /^\s+/, p = /\s+$/, h = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, g = /^[\],:{}\s]*$/, m = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, y = /(?:^|:|,)(?:\s*\[)+/g, b = /(webkit)[ \/]([\w.]+)/, x = /(opera)(?:.*version)?[ \/]([\w.]+)/, w = /(msie) ([\w.]+)/, E = /(mozilla)(?:.*? rv:([\w.]+))?/, _ = /-([a-z]|[0-9])/gi, T = /^-ms-/, N = function(e, t) {
            return (t + "").toUpperCase()
        }, k = F.userAgent, j = Object.prototype.toString, C = Object.prototype.hasOwnProperty, S = Array.prototype.push, A = Array.prototype.slice, D = String.prototype.trim, M = Array.prototype.indexOf, O = {};
        return s.fn = s.prototype = {
            constructor: s,
            init: function(e, n, i) {
                var r, a, o, l;
                if (!e)
                    return this;
                if (e.nodeType)
                    return this.context = this[0] = e,
                    this.length = 1,
                    this;
                if ("body" === e && !n && L.body)
                    return this.context = L,
                    this[0] = L.body,
                    this.selector = e,
                    this.length = 1,
                    this;
                if ("string" == typeof e) {
                    if (r = "<" !== e.charAt(0) || ">" !== e.charAt(e.length - 1) || e.length < 3 ? u.exec(e) : [null, e, null],
                    r && (r[1] || !n)) {
                        if (r[1])
                            return n = n instanceof s ? n[0] : n,
                            l = n ? n.ownerDocument || n : L,
                            o = h.exec(e),
                            o ? s.isPlainObject(n) ? (e = [L.createElement(o[1])],
                            s.fn.attr.call(e, n, !0)) : e = [l.createElement(o[1])] : (o = s.buildFragment([r[1]], [l]),
                            e = (o.cacheable ? s.clone(o.fragment) : o.fragment).childNodes),
                            s.merge(this, e);
                        if (a = L.getElementById(r[2]),
                        a && a.parentNode) {
                            if (a.id !== r[2])
                                return i.find(e);
                            this.length = 1,
                            this[0] = a
                        }
                        return this.context = L,
                        this.selector = e,
                        this
                    }
                    return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e)
                }
                return s.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector,
                this.context = e.context),
                s.makeArray(e, this))
            },
            selector: "",
            jquery: "1.7.2",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return A.call(this, 0)
            },
            get: function(e) {
                return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
            },
            pushStack: function(e, t, n) {
                var i = this.constructor();
                return s.isArray(e) ? S.apply(i, e) : s.merge(i, e),
                i.prevObject = this,
                i.context = this.context,
                "find" === t ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"),
                i
            },
            each: function(e, t) {
                return s.each(this, e, t)
            },
            ready: function(e) {
                return s.bindReady(),
                a.add(e),
                this
            },
            eq: function(e) {
                return e = +e,
                e === -1 ? this.slice(e) : this.slice(e, e + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            slice: function() {
                return this.pushStack(A.apply(this, arguments), "slice", A.call(arguments).join(","))
            },
            map: function(e) {
                return this.pushStack(s.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: S,
            sort: [].sort,
            splice: [].splice
        },
        s.fn.init.prototype = s.fn,
        s.extend = s.fn.extend = function() {
            var e, n, i, r, a, o, l = arguments[0] || {}, c = 1, u = arguments.length, f = !1;
            for ("boolean" == typeof l && (f = l,
            l = arguments[1] || {},
            c = 2),
            "object" != typeof l && !s.isFunction(l) && (l = {}),
            u === c && (l = this,
            --c); c < u; c++)
                if (null != (e = arguments[c]))
                    for (n in e)
                        i = l[n],
                        r = e[n],
                        l !== r && (f && r && (s.isPlainObject(r) || (a = s.isArray(r))) ? (a ? (a = !1,
                        o = i && s.isArray(i) ? i : []) : o = i && s.isPlainObject(i) ? i : {},
                        l[n] = s.extend(f, o, r)) : r !== t && (l[n] = r));
            return l
        }
        ,
        s.extend({
            noConflict: function(t) {
                return e.$ === s && (e.$ = c),
                t && e.jQuery === s && (e.jQuery = l),
                s
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? s.readyWait++ : s.ready(!0)
            },
            ready: function(e) {
                if (e === !0 && !--s.readyWait || e !== !0 && !s.isReady) {
                    if (!L.body)
                        return setTimeout(s.ready, 1);
                    if (s.isReady = !0,
                    e !== !0 && --s.readyWait > 0)
                        return;
                    a.fireWith(L, [s]),
                    s.fn.trigger && s(L).trigger("ready").off("ready")
                }
            },
            bindReady: function() {
                if (!a) {
                    if (a = s.Callbacks("once memory"),
                    "complete" === L.readyState)
                        return setTimeout(s.ready, 1);
                    if (L.addEventListener)
                        L.addEventListener("DOMContentLoaded", o, !1),
                        e.addEventListener("load", s.ready, !1);
                    else if (L.attachEvent) {
                        L.attachEvent("onreadystatechange", o),
                        e.attachEvent("onload", s.ready);
                        var t = !1;
                        try {
                            t = null == e.frameElement
                        } catch (i) {}
                        L.documentElement.doScroll && t && n()
                    }
                }
            },
            isFunction: function(e) {
                return "function" === s.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === s.type(e)
            }
            ,
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? String(e) : O[j.call(e)] || "object"
            },
            isPlainObject: function(e) {
                if (!e || "object" !== s.type(e) || e.nodeType || s.isWindow(e))
                    return !1;
                try {
                    if (e.constructor && !C.call(e, "constructor") && !C.call(e.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (n) {
                    return !1
                }
                var i;
                for (i in e)
                    ;
                return i === t || C.call(e, i)
            },
            isEmptyObject: function(e) {
                for (var t in e)
                    return !1;
                return !0
            },
            error: function(e) {
                throw new Error(e)
            },
            parseJSON: function(t) {
                return "string" == typeof t && t ? (t = s.trim(t),
                e.JSON && e.JSON.parse ? e.JSON.parse(t) : g.test(t.replace(m, "@").replace(v, "]").replace(y, "")) ? new Function("return " + t)() : void s.error("Invalid JSON: " + t)) : null
            },
            parseXML: function(n) {
                if ("string" != typeof n || !n)
                    return null;
                var i, r;
                try {
                    e.DOMParser ? (r = new DOMParser,
                    i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"),
                    i.async = "false",
                    i.loadXML(n))
                } catch (a) {
                    i = t
                }
                return (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) && s.error("Invalid XML: " + n),
                i
            },
            noop: function() {},
            globalEval: function(t) {
                t && f.test(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                }
                )(t)
            },
            camelCase: function(e) {
                return e.replace(T, "ms-").replace(_, N)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
            },
            each: function(e, n, i) {
                var r, a = 0, o = e.length, l = o === t || s.isFunction(e);
                if (i)
                    if (l) {
                        for (r in e)
                            if (n.apply(e[r], i) === !1)
                                break
                    } else
                        for (; a < o && n.apply(e[a++], i) !== !1; )
                            ;
                else if (l) {
                    for (r in e)
                        if (n.call(e[r], r, e[r]) === !1)
                            break
                } else
                    for (; a < o && n.call(e[a], a, e[a++]) !== !1; )
                        ;
                return e
            },
            trim: D ? function(e) {
                return null == e ? "" : D.call(e)
            }
            : function(e) {
                return null == e ? "" : (e + "").replace(d, "").replace(p, "")
            }
            ,
            makeArray: function(e, t) {
                var n = t || [];
                if (null != e) {
                    var i = s.type(e);
                    null == e.length || "string" === i || "function" === i || "regexp" === i || s.isWindow(e) ? S.call(n, e) : s.merge(n, e)
                }
                return n
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (M)
                        return M.call(t, e, n);
                    for (i = t.length,
                    n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                        if (n in t && t[n] === e)
                            return n
                }
                return -1
            },
            merge: function(e, n) {
                var i = e.length
                  , r = 0;
                if ("number" == typeof n.length)
                    for (var a = n.length; r < a; r++)
                        e[i++] = n[r];
                else
                    for (; n[r] !== t; )
                        e[i++] = n[r++];
                return e.length = i,
                e
            },
            grep: function(e, t, n) {
                var i, r = [];
                n = !!n;
                for (var a = 0, o = e.length; a < o; a++)
                    i = !!t(e[a], a),
                    n !== i && r.push(e[a]);
                return r
            },
            map: function(e, n, i) {
                var r, a, o = [], l = 0, c = e.length, u = e instanceof s || c !== t && "number" == typeof c && (c > 0 && e[0] && e[c - 1] || 0 === c || s.isArray(e));
                if (u)
                    for (; l < c; l++)
                        r = n(e[l], l, i),
                        null != r && (o[o.length] = r);
                else
                    for (a in e)
                        r = n(e[a], a, i),
                        null != r && (o[o.length] = r);
                return o.concat.apply([], o)
            },
            guid: 1,
            proxy: function(e, n) {
                if ("string" == typeof n) {
                    var i = e[n];
                    n = e,
                    e = i
                }
                if (!s.isFunction(e))
                    return t;
                var r = A.call(arguments, 2)
                  , a = function() {
                    return e.apply(n, r.concat(A.call(arguments)))
                };
                return a.guid = e.guid = e.guid || a.guid || s.guid++,
                a
            },
            access: function(e, n, i, r, a, o, l) {
                var c, u = null == i, f = 0, d = e.length;
                if (i && "object" == typeof i) {
                    for (f in i)
                        s.access(e, n, f, i[f], 1, o, r);
                    a = 1
                } else if (r !== t) {
                    if (c = l === t && s.isFunction(r),
                    u && (c ? (c = n,
                    n = function(e, t, n) {
                        return c.call(s(e), n)
                    }
                    ) : (n.call(e, r),
                    n = null)),
                    n)
                        for (; f < d; f++)
                            n(e[f], i, c ? r.call(e[f], f, n(e[f], i)) : r, l);
                    a = 1
                }
                return a ? e : u ? n.call(e) : d ? n(e[0], i) : o
            },
            now: function() {
                return (new Date).getTime()
            },
            uaMatch: function(e) {
                e = e.toLowerCase();
                var t = b.exec(e) || x.exec(e) || w.exec(e) || e.indexOf("compatible") < 0 && E.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            },
            sub: function() {
                function e(t, n) {
                    return new e.fn.init(t,n)
                }
                s.extend(!0, e, this),
                e.superclass = this,
                e.fn = e.prototype = this(),
                e.fn.constructor = e,
                e.sub = this.sub,
                e.fn.init = function(n, i) {
                    return i && i instanceof s && !(i instanceof e) && (i = e(i)),
                    s.fn.init.call(this, n, i, t)
                }
                ,
                e.fn.init.prototype = e.fn;
                var t = e(L);
                return e
            },
            browser: {}
        }),
        s.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
            O["[object " + t + "]"] = t.toLowerCase()
        }),
        r = s.uaMatch(k),
        r.browser && (s.browser[r.browser] = !0,
        s.browser.version = r.version),
        s.browser.webkit && (s.browser.safari = !0),
        f.test(" ") && (d = /^[\s\xA0]+/,
        p = /[\s\xA0]+$/),
        i = s(L),
        L.addEventListener ? o = function() {
            L.removeEventListener("DOMContentLoaded", o, !1),
            s.ready()
        }
        : L.attachEvent && (o = function() {
            "complete" === L.readyState && (L.detachEvent("onreadystatechange", o),
            s.ready())
        }
        ),
        s
    }()
      , H = {};
    O.Callbacks = function(e) {
        e = e ? H[e] || D(e) : {};
        var n, i, r, a, o, s, l = [], c = [], u = function(t) {
            var n, i, r, a;
            for (n = 0,
            i = t.length; n < i; n++)
                r = t[n],
                a = O.type(r),
                "array" === a ? u(r) : "function" === a && (!e.unique || !d.has(r)) && l.push(r)
        }, f = function(t, u) {
            for (u = u || [],
            n = !e.memory || [t, u],
            i = !0,
            r = !0,
            s = a || 0,
            a = 0,
            o = l.length; l && s < o; s++)
                if (l[s].apply(t, u) === !1 && e.stopOnFalse) {
                    n = !0;
                    break
                }
            r = !1,
            l && (e.once ? n === !0 ? d.disable() : l = [] : c && c.length && (n = c.shift(),
            d.fireWith(n[0], n[1])))
        }, d = {
            add: function() {
                if (l) {
                    var e = l.length;
                    u(arguments),
                    r ? o = l.length : n && n !== !0 && (a = e,
                    f(n[0], n[1]))
                }
                return this
            },
            remove: function() {
                if (l)
                    for (var t = arguments, n = 0, i = t.length; n < i; n++)
                        for (var a = 0; a < l.length && (t[n] !== l[a] || (r && a <= o && (o--,
                        a <= s && s--),
                        l.splice(a--, 1),
                        !e.unique)); a++)
                            ;
                return this
            },
            has: function(e) {
                if (l)
                    for (var t = 0, n = l.length; t < n; t++)
                        if (e === l[t])
                            return !0;
                return !1
            },
            empty: function() {
                return l = [],
                this
            },
            disable: function() {
                return l = c = n = t,
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return c = t,
                (!n || n === !0) && d.disable(),
                this
            },
            locked: function() {
                return !c
            },
            fireWith: function(t, i) {
                return c && (r ? e.once || c.push([t, i]) : (!e.once || !n) && f(t, i)),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return d
    }
    ;
    var I = [].slice;
    O.extend({
        Deferred: function(e) {
            var t, n = O.Callbacks("once memory"), i = O.Callbacks("once memory"), r = O.Callbacks("memory"), a = "pending", o = {
                resolve: n,
                reject: i,
                notify: r
            }, s = {
                done: n.add,
                fail: i.add,
                progress: r.add,
                state: function() {
                    return a
                },
                isResolved: n.fired,
                isRejected: i.fired,
                then: function(e, t, n) {
                    return l.done(e).fail(t).progress(n),
                    this
                },
                always: function() {
                    return l.done.apply(l, arguments).fail.apply(l, arguments),
                    this
                },
                pipe: function(e, t, n) {
                    return O.Deferred(function(i) {
                        O.each({
                            done: [e, "resolve"],
                            fail: [t, "reject"],
                            progress: [n, "notify"]
                        }, function(e, t) {
                            var n, r = t[0], a = t[1];
                            O.isFunction(r) ? l[e](function() {
                                n = r.apply(this, arguments),
                                n && O.isFunction(n.promise) ? n.promise().then(i.resolve, i.reject, i.notify) : i[a + "With"](this === l ? i : this, [n])
                            }) : l[e](i[a])
                        })
                    }).promise()
                },
                promise: function(e) {
                    if (null == e)
                        e = s;
                    else
                        for (var t in s)
                            e[t] = s[t];
                    return e
                }
            }, l = s.promise({});
            for (t in o)
                l[t] = o[t].fire,
                l[t + "With"] = o[t].fireWith;
            return l.done(function() {
                a = "resolved"
            }, i.disable, r.lock).fail(function() {
                a = "rejected"
            }, n.disable, r.lock),
            e && e.call(l, l),
            l
        },
        when: function(e) {
            function t(e) {
                return function(t) {
                    o[e] = arguments.length > 1 ? I.call(arguments, 0) : t,
                    l.notifyWith(c, o)
                }
            }
            function n(e) {
                return function(t) {
                    i[e] = arguments.length > 1 ? I.call(arguments, 0) : t,
                    --s || l.resolveWith(l, i)
                }
            }
            var i = I.call(arguments, 0)
              , r = 0
              , a = i.length
              , o = Array(a)
              , s = a
              , l = a <= 1 && e && O.isFunction(e.promise) ? e : O.Deferred()
              , c = l.promise();
            if (a > 1) {
                for (; r < a; r++)
                    i[r] && i[r].promise && O.isFunction(i[r].promise) ? i[r].promise().then(n(r), l.reject, t(r)) : --s;
                s || l.resolveWith(l, i)
            } else
                l !== e && l.resolveWith(l, a ? [e] : []);
            return c
        }
    }),
    O.support = function() {
        var t, n, i, r, a, o, s, l, c, u, f, d = L.createElement("div");
        L.documentElement;
        if (d.setAttribute("className", "t"),
        d.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",
        n = d.getElementsByTagName("*"),
        i = d.getElementsByTagName("a")[0],
        !n || !n.length || !i)
            return {};
        r = L.createElement("select"),
        a = r.appendChild(L.createElement("option")),
        o = d.getElementsByTagName("input")[0],
        t = {
            leadingWhitespace: 3 === d.firstChild.nodeType,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !!d.getElementsByTagName("link").length,
            style: /top/.test(i.getAttribute("style")),
            hrefNormalized: "/a" === i.getAttribute("href"),
            opacity: /^0.55/.test(i.style.opacity),
            cssFloat: !!i.style.cssFloat,
            checkOn: "on" === o.value,
            optSelected: a.selected,
            getSetAttribute: "t" !== d.className,
            enctype: !!L.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== L.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        },
        O.boxModel = t.boxModel = "CSS1Compat" === L.compatMode,
        o.checked = !0,
        t.noCloneChecked = o.cloneNode(!0).checked,
        r.disabled = !0,
        t.optDisabled = !a.disabled;
        try {
            delete d.test
        } catch (p) {
            t.deleteExpando = !1
        }
        if (!d.addEventListener && d.attachEvent && d.fireEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }),
        d.cloneNode(!0).fireEvent("onclick")),
        o = L.createElement("input"),
        o.value = "t",
        o.setAttribute("type", "radio"),
        t.radioValue = "t" === o.value,
        o.setAttribute("checked", "checked"),
        o.setAttribute("name", "t"),
        d.appendChild(o),
        s = L.createDocumentFragment(),
        s.appendChild(d.lastChild),
        t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.appendChecked = o.checked,
        s.removeChild(o),
        s.appendChild(d),
        d.attachEvent)
            for (u in {
                submit: 1,
                change: 1,
                focusin: 1
            })
                c = "on" + u,
                f = c in d,
                f || (d.setAttribute(c, "return;"),
                f = "function" == typeof d[c]),
                t[u + "Bubbles"] = f;
        return s.removeChild(d),
        s = r = a = d = o = null,
        O(function() {
            var n, i, r, a, o, s, c, u, p, h, g, m, v = L.getElementsByTagName("body")[0];
            !v || (c = 1,
            m = "padding:0;margin:0;border:",
            h = "position:absolute;top:0;left:0;width:1px;height:1px;",
            g = m + "0;visibility:hidden;",
            u = "style='" + h + m + "5px solid #000;",
            p = "<div " + u + "display:block;'><div style='" + m + "0;display:block;overflow:hidden;'></div></div><table " + u + "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",
            n = L.createElement("div"),
            n.style.cssText = g + "width:0;height:0;position:static;top:0;margin-top:" + c + "px",
            v.insertBefore(n, v.firstChild),
            d = L.createElement("div"),
            n.appendChild(d),
            d.innerHTML = "<table><tr><td style='" + m + "0;display:none'></td><td>t</td></tr></table>",
            l = d.getElementsByTagName("td"),
            f = 0 === l[0].offsetHeight,
            l[0].style.display = "",
            l[1].style.display = "none",
            t.reliableHiddenOffsets = f && 0 === l[0].offsetHeight,
            e.getComputedStyle && (d.innerHTML = "",
            s = L.createElement("div"),
            s.style.width = "0",
            s.style.marginRight = "0",
            d.style.width = "2px",
            d.appendChild(s),
            t.reliableMarginRight = 0 === (parseInt((e.getComputedStyle(s, null) || {
                marginRight: 0
            }).marginRight, 10) || 0)),
            "undefined" != typeof d.style.zoom && (d.innerHTML = "",
            d.style.width = d.style.padding = "1px",
            d.style.border = 0,
            d.style.overflow = "hidden",
            d.style.display = "inline",
            d.style.zoom = 1,
            t.inlineBlockNeedsLayout = 3 === d.offsetWidth,
            d.style.display = "block",
            d.style.overflow = "visible",
            d.innerHTML = "<div style='width:5px;'></div>",
            t.shrinkWrapBlocks = 3 !== d.offsetWidth),
            d.style.cssText = h + g,
            d.innerHTML = p,
            i = d.firstChild,
            r = i.firstChild,
            a = i.nextSibling.firstChild.firstChild,
            o = {
                doesNotAddBorder: 5 !== r.offsetTop,
                doesAddBorderForTableAndCells: 5 === a.offsetTop
            },
            r.style.position = "fixed",
            r.style.top = "20px",
            o.fixedPosition = 20 === r.offsetTop || 15 === r.offsetTop,
            r.style.position = r.style.top = "",
            i.style.overflow = "hidden",
            i.style.position = "relative",
            o.subtractsBorderForOverflowNotVisible = r.offsetTop === -5,
            o.doesNotIncludeMarginInBodyOffset = v.offsetTop !== c,
            e.getComputedStyle && (d.style.marginTop = "1%",
            t.pixelMargin = "1%" !== (e.getComputedStyle(d, null) || {
                marginTop: 0
            }).marginTop),
            "undefined" != typeof n.style.zoom && (n.style.zoom = 1),
            v.removeChild(n),
            s = d = n = null,
            O.extend(t, o))
        }),
        t
    }();
    var q = /^(?:\{.*\}|\[.*\])$/
      , P = /([A-Z])/g;
    O.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (O.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? O.cache[e[O.expando]] : e[O.expando],
            !!e && !S(e)
        },
        data: function(e, n, i, r) {
            if (O.acceptData(e)) {
                var a, o, s, l = O.expando, c = "string" == typeof n, u = e.nodeType, f = u ? O.cache : e, d = u ? e[l] : e[l] && l, p = "events" === n;
                if ((!d || !f[d] || !p && !r && !f[d].data) && c && i === t)
                    return;
                return d || (u ? e[l] = d = ++O.uuid : d = l),
                f[d] || (f[d] = {},
                u || (f[d].toJSON = O.noop)),
                "object" != typeof n && "function" != typeof n || (r ? f[d] = O.extend(f[d], n) : f[d].data = O.extend(f[d].data, n)),
                a = o = f[d],
                r || (o.data || (o.data = {}),
                o = o.data),
                i !== t && (o[O.camelCase(n)] = i),
                p && !o[n] ? a.events : (c ? (s = o[n],
                null == s && (s = o[O.camelCase(n)])) : s = o,
                s)
            }
        },
        removeData: function(e, t, n) {
            if (O.acceptData(e)) {
                var i, r, a, o = O.expando, s = e.nodeType, l = s ? O.cache : e, c = s ? e[o] : o;
                if (!l[c])
                    return;
                if (t && (i = n ? l[c] : l[c].data)) {
                    O.isArray(t) || (t in i ? t = [t] : (t = O.camelCase(t),
                    t = t in i ? [t] : t.split(" ")));
                    for (r = 0,
                    a = t.length; r < a; r++)
                        delete i[t[r]];
                    if (!(n ? S : O.isEmptyObject)(i))
                        return
                }
                if (!n && (delete l[c].data,
                !S(l[c])))
                    return;
                O.support.deleteExpando || !l.setInterval ? delete l[c] : l[c] = null,
                s && (O.support.deleteExpando ? delete e[o] : e.removeAttribute ? e.removeAttribute(o) : e[o] = null)
            }
        },
        _data: function(e, t, n) {
            return O.data(e, t, n, !0)
        },
        acceptData: function(e) {
            if (e.nodeName) {
                var t = O.noData[e.nodeName.toLowerCase()];
                if (t)
                    return t !== !0 && e.getAttribute("classid") === t
            }
            return !0
        }
    }),
    O.fn.extend({
        data: function(e, n) {
            var i, r, a, o, s, l = this[0], c = 0, u = null;
            if (e === t) {
                if (this.length && (u = O.data(l),
                1 === l.nodeType && !O._data(l, "parsedAttrs"))) {
                    for (a = l.attributes,
                    s = a.length; c < s; c++)
                        o = a[c].name,
                        0 === o.indexOf("data-") && (o = O.camelCase(o.substring(5)),
                        A(l, o, u[o]));
                    O._data(l, "parsedAttrs", !0)
                }
                return u
            }
            return "object" == typeof e ? this.each(function() {
                O.data(this, e)
            }) : (i = e.split(".", 2),
            i[1] = i[1] ? "." + i[1] : "",
            r = i[1] + "!",
            O.access(this, function(n) {
                return n === t ? (u = this.triggerHandler("getData" + r, [i[0]]),
                u === t && l && (u = O.data(l, e),
                u = A(l, e, u)),
                u === t && i[1] ? this.data(i[0]) : u) : (i[1] = n,
                void this.each(function() {
                    var t = O(this);
                    t.triggerHandler("setData" + r, i),
                    O.data(this, e, n),
                    t.triggerHandler("changeData" + r, i)
                }))
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function(e) {
            return this.each(function() {
                O.removeData(this, e)
            })
        }
    }),
    O.extend({
        _mark: function(e, t) {
            e && (t = (t || "fx") + "mark",
            O._data(e, t, (O._data(e, t) || 0) + 1))
        },
        _unmark: function(e, t, n) {
            if (e !== !0 && (n = t,
            t = e,
            e = !1),
            t) {
                n = n || "fx";
                var i = n + "mark"
                  , r = e ? 0 : (O._data(t, i) || 1) - 1;
                r ? O._data(t, i, r) : (O.removeData(t, i, !0),
                C(t, n, "mark"))
            }
        },
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue",
                i = O._data(e, t),
                n && (!i || O.isArray(n) ? i = O._data(e, t, O.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = O.queue(e, t)
              , i = n.shift()
              , r = {};
            "inprogress" === i && (i = n.shift()),
            i && ("fx" === t && n.unshift("inprogress"),
            O._data(e, t + ".run", r),
            i.call(e, function() {
                O.dequeue(e, t)
            }, r)),
            n.length || (O.removeData(e, t + "queue " + t + ".run", !0),
            C(e, t, "queue"))
        }
    }),
    O.fn.extend({
        queue: function(e, n) {
            var i = 2;
            return "string" != typeof e && (n = e,
            e = "fx",
            i--),
            arguments.length < i ? O.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = O.queue(this, e, n);
                "fx" === e && "inprogress" !== t[0] && O.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                O.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = O.fx ? O.fx.speeds[e] || e : e,
            t = t || "fx",
            this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            function i() {
                --l || a.resolveWith(o, [o])
            }
            "string" != typeof e && (n = e,
            e = t),
            e = e || "fx";
            for (var r, a = O.Deferred(), o = this, s = o.length, l = 1, c = e + "defer", u = e + "queue", f = e + "mark"; s--; )
                (r = O.data(o[s], c, t, !0) || (O.data(o[s], u, t, !0) || O.data(o[s], f, t, !0)) && O.data(o[s], c, O.Callbacks("once memory"), !0)) && (l++,
                r.add(i));
            return i(),
            a.promise(n)
        }
    });
    var B, W, z, R = /[\n\t\r]/g, X = /\s+/, U = /\r/g, V = /^(?:button|input)$/i, G = /^(?:button|input|object|select|textarea)$/i, Y = /^a(?:rea)?$/i, K = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, Q = O.support.getSetAttribute;
    O.fn.extend({
        attr: function(e, t) {
            return O.access(this, O.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                O.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return O.access(this, O.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = O.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, i, r, a, o, s;
            if (O.isFunction(e))
                return this.each(function(t) {
                    O(this).addClass(e.call(this, t, this.className))
                });
            if (e && "string" == typeof e)
                for (t = e.split(X),
                n = 0,
                i = this.length; n < i; n++)
                    if (r = this[n],
                    1 === r.nodeType)
                        if (r.className || 1 !== t.length) {
                            for (a = " " + r.className + " ",
                            o = 0,
                            s = t.length; o < s; o++)
                                ~a.indexOf(" " + t[o] + " ") || (a += t[o] + " ");
                            r.className = O.trim(a)
                        } else
                            r.className = e;
            return this
        },
        removeClass: function(e) {
            var n, i, r, a, o, s, l;
            if (O.isFunction(e))
                return this.each(function(t) {
                    O(this).removeClass(e.call(this, t, this.className))
                });
            if (e && "string" == typeof e || e === t)
                for (n = (e || "").split(X),
                i = 0,
                r = this.length; i < r; i++)
                    if (a = this[i],
                    1 === a.nodeType && a.className)
                        if (e) {
                            for (o = (" " + a.className + " ").replace(R, " "),
                            s = 0,
                            l = n.length; s < l; s++)
                                o = o.replace(" " + n[s] + " ", " ");
                            a.className = O.trim(o)
                        } else
                            a.className = "";
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , i = "boolean" == typeof t;
            return O.isFunction(e) ? this.each(function(n) {
                O(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var r, a = 0, o = O(this), s = t, l = e.split(X); r = l[a++]; )
                        s = i ? s : !o.hasClass(r),
                        o[s ? "addClass" : "removeClass"](r);
                else
                    "undefined" !== n && "boolean" !== n || (this.className && O._data(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : O._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(R, " ").indexOf(t) > -1)
                    return !0;
            return !1
        },
        val: function(e) {
            var n, i, r, a = this[0];
            return arguments.length ? (r = O.isFunction(e),
            this.each(function(i) {
                var a, o = O(this);
                1 === this.nodeType && (a = r ? e.call(this, i, o.val()) : e,
                null == a ? a = "" : "number" == typeof a ? a += "" : O.isArray(a) && (a = O.map(a, function(e) {
                    return null == e ? "" : e + ""
                })),
                n = O.valHooks[this.type] || O.valHooks[this.nodeName.toLowerCase()],
                n && "set"in n && n.set(this, a, "value") !== t || (this.value = a))
            })) : a ? (n = O.valHooks[a.type] || O.valHooks[a.nodeName.toLowerCase()],
            n && "get"in n && (i = n.get(a, "value")) !== t ? i : (i = a.value,
            "string" == typeof i ? i.replace(U, "") : null == i ? "" : i)) : void 0
        }
    }),
    O.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r, a = e.selectedIndex, o = [], s = e.options, l = "select-one" === e.type;
                    if (a < 0)
                        return null;
                    for (n = l ? a : 0,
                    i = l ? a + 1 : s.length; n < i; n++)
                        if (r = s[n],
                        r.selected && (O.support.optDisabled ? !r.disabled : null === r.getAttribute("disabled")) && (!r.parentNode.disabled || !O.nodeName(r.parentNode, "optgroup"))) {
                            if (t = O(r).val(),
                            l)
                                return t;
                            o.push(t)
                        }
                    return l && !o.length && s.length ? O(s[a]).val() : o
                },
                set: function(e, t) {
                    var n = O.makeArray(t);
                    return O(e).find("option").each(function() {
                        this.selected = O.inArray(O(this).val(), n) >= 0
                    }),
                    n.length || (e.selectedIndex = -1),
                    n
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(e, n, i, r) {
            var a, o, s, l = e.nodeType;
            if (e && 3 !== l && 8 !== l && 2 !== l)
                return r && n in O.attrFn ? O(e)[n](i) : "undefined" == typeof e.getAttribute ? O.prop(e, n, i) : (s = 1 !== l || !O.isXMLDoc(e),
                s && (n = n.toLowerCase(),
                o = O.attrHooks[n] || (K.test(n) ? W : B)),
                i !== t ? null === i ? void O.removeAttr(e, n) : o && "set"in o && s && (a = o.set(e, i, n)) !== t ? a : (e.setAttribute(n, "" + i),
                i) : o && "get"in o && s && null !== (a = o.get(e, n)) ? a : (a = e.getAttribute(n),
                null === a ? t : a))
        },
        removeAttr: function(e, t) {
            var n, i, r, a, o, s = 0;
            if (t && 1 === e.nodeType)
                for (i = t.toLowerCase().split(X),
                a = i.length; s < a; s++)
                    r = i[s],
                    r && (n = O.propFix[r] || r,
                    o = K.test(r),
                    o || O.attr(e, r, ""),
                    e.removeAttribute(Q ? r : n),
                    o && n in e && (e[n] = !1))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (V.test(e.nodeName) && e.parentNode)
                        O.error("type property can't be changed");
                    else if (!O.support.radioValue && "radio" === t && O.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return B && O.nodeName(e, "button") ? B.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    return B && O.nodeName(e, "button") ? B.set(e, t, n) : void (e.value = t)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, i) {
            var r, a, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
                return o = 1 !== s || !O.isXMLDoc(e),
                o && (n = O.propFix[n] || n,
                a = O.propHooks[n]),
                i !== t ? a && "set"in a && (r = a.set(e, i, n)) !== t ? r : e[n] = i : a && "get"in a && null !== (r = a.get(e, n)) ? r : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : G.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }),
    O.attrHooks.tabindex = O.propHooks.tabIndex,
    W = {
        get: function(e, n) {
            var i, r = O.prop(e, n);
            return r === !0 || "boolean" != typeof r && (i = e.getAttributeNode(n)) && i.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var i;
            return t === !1 ? O.removeAttr(e, n) : (i = O.propFix[n] || n,
            i in e && (e[i] = !0),
            e.setAttribute(n, n.toLowerCase())),
            n
        }
    },
    Q || (z = {
        name: !0,
        id: !0,
        coords: !0
    },
    B = O.valHooks.button = {
        get: function(e, n) {
            var i;
            return i = e.getAttributeNode(n),
            i && (z[n] ? "" !== i.nodeValue : i.specified) ? i.nodeValue : t
        },
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || (i = L.createAttribute(n),
            e.setAttributeNode(i)),
            i.nodeValue = t + ""
        }
    },
    O.attrHooks.tabindex.set = B.set,
    O.each(["width", "height"], function(e, t) {
        O.attrHooks[t] = O.extend(O.attrHooks[t], {
            set: function(e, n) {
                if ("" === n)
                    return e.setAttribute(t, "auto"),
                    n
            }
        })
    }),
    O.attrHooks.contenteditable = {
        get: B.get,
        set: function(e, t, n) {
            "" === t && (t = "false"),
            B.set(e, t, n)
        }
    }),
    O.support.hrefNormalized || O.each(["href", "src", "width", "height"], function(e, n) {
        O.attrHooks[n] = O.extend(O.attrHooks[n], {
            get: function(e) {
                var i = e.getAttribute(n, 2);
                return null === i ? t : i
            }
        })
    }),
    O.support.style || (O.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = "" + t
        }
    }),
    O.support.optSelected || (O.propHooks.selected = O.extend(O.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    })),
    O.support.enctype || (O.propFix.enctype = "encoding"),
    O.support.checkOn || O.each(["radio", "checkbox"], function() {
        O.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }),
    O.each(["radio", "checkbox"], function() {
        O.valHooks[this] = O.extend(O.valHooks[this], {
            set: function(e, t) {
                if (O.isArray(t))
                    return e.checked = O.inArray(O(e).val(), t) >= 0
            }
        })
    });
    var J = /^(?:textarea|input|select)$/i
      , Z = /^([^\.]*)?(?:\.(.+))?$/
      , ee = /(?:^|\s)hover(\.\S+)?\b/
      , te = /^key/
      , ne = /^(?:mouse|contextmenu)|click/
      , ie = /^(?:focusinfocus|focusoutblur)$/
      , re = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/
      , ae = function(e) {
        var t = re.exec(e);
        return t && (t[1] = (t[1] || "").toLowerCase(),
        t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")),
        t
    }
      , oe = function(e, t) {
        var n = e.attributes || {};
        return (!t[1] || e.nodeName.toLowerCase() === t[1]) && (!t[2] || (n.id || {}).value === t[2]) && (!t[3] || t[3].test((n["class"] || {}).value))
    }
      , se = function(e) {
        return O.event.special.hover ? e : e.replace(ee, "mouseenter$1 mouseleave$1")
    };
    O.event = {
        add: function(e, n, i, r, a) {
            var o, s, l, c, u, f, d, p, h, g, m;
            if (3 !== e.nodeType && 8 !== e.nodeType && n && i && (o = O._data(e))) {
                for (i.handler && (h = i,
                i = h.handler,
                a = h.selector),
                i.guid || (i.guid = O.guid++),
                l = o.events,
                l || (o.events = l = {}),
                s = o.handle,
                s || (o.handle = s = function(e) {
                    return "undefined" == typeof O || e && O.event.triggered === e.type ? t : O.event.dispatch.apply(s.elem, arguments)
                }
                ,
                s.elem = e),
                n = O.trim(se(n)).split(" "),
                c = 0; c < n.length; c++)
                    u = Z.exec(n[c]) || [],
                    f = u[1],
                    d = (u[2] || "").split(".").sort(),
                    m = O.event.special[f] || {},
                    f = (a ? m.delegateType : m.bindType) || f,
                    m = O.event.special[f] || {},
                    p = O.extend({
                        type: f,
                        origType: u[1],
                        data: r,
                        handler: i,
                        guid: i.guid,
                        selector: a,
                        quick: a && ae(a),
                        namespace: d.join(".")
                    }, h),
                    g = l[f],
                    g || (g = l[f] = [],
                    g.delegateCount = 0,
                    m.setup && m.setup.call(e, r, d, s) !== !1 || (e.addEventListener ? e.addEventListener(f, s, !1) : e.attachEvent && e.attachEvent("on" + f, s))),
                    m.add && (m.add.call(e, p),
                    p.handler.guid || (p.handler.guid = i.guid)),
                    a ? g.splice(g.delegateCount++, 0, p) : g.push(p),
                    O.event.global[f] = !0;
                e = null
            }
        },
        global: {},
        remove: function(e, t, n, i, r) {
            var a, o, s, l, c, u, f, d, p, h, g, m, v = O.hasData(e) && O._data(e);
            if (v && (d = v.events)) {
                for (t = O.trim(se(t || "")).split(" "),
                a = 0; a < t.length; a++)
                    if (o = Z.exec(t[a]) || [],
                    s = l = o[1],
                    c = o[2],
                    s) {
                        for (p = O.event.special[s] || {},
                        s = (i ? p.delegateType : p.bindType) || s,
                        g = d[s] || [],
                        u = g.length,
                        c = c ? new RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
                        f = 0; f < g.length; f++)
                            m = g[f],
                            (r || l === m.origType) && (!n || n.guid === m.guid) && (!c || c.test(m.namespace)) && (!i || i === m.selector || "**" === i && m.selector) && (g.splice(f--, 1),
                            m.selector && g.delegateCount--,
                            p.remove && p.remove.call(e, m));
                        0 === g.length && u !== g.length && ((!p.teardown || p.teardown.call(e, c) === !1) && O.removeEvent(e, s, v.handle),
                        delete d[s])
                    } else
                        for (s in d)
                            O.event.remove(e, s + t[a], n, i, !0);
                O.isEmptyObject(d) && (h = v.handle,
                h && (h.elem = null),
                O.removeData(e, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(n, i, r, a) {
            if (!r || 3 !== r.nodeType && 8 !== r.nodeType) {
                var o, s, l, c, u, f, d, p, h, g, m = n.type || n, v = [];
                if (ie.test(m + O.event.triggered))
                    return;
                if (m.indexOf("!") >= 0 && (m = m.slice(0, -1),
                s = !0),
                m.indexOf(".") >= 0 && (v = m.split("."),
                m = v.shift(),
                v.sort()),
                (!r || O.event.customEvent[m]) && !O.event.global[m])
                    return;
                if (n = "object" == typeof n ? n[O.expando] ? n : new O.Event(m,n) : new O.Event(m),
                n.type = m,
                n.isTrigger = !0,
                n.exclusive = s,
                n.namespace = v.join("."),
                n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
                f = m.indexOf(":") < 0 ? "on" + m : "",
                !r) {
                    o = O.cache;
                    for (l in o)
                        o[l].events && o[l].events[m] && O.event.trigger(n, i, o[l].handle.elem, !0);
                    return
                }
                if (n.result = t,
                n.target || (n.target = r),
                i = null != i ? O.makeArray(i) : [],
                i.unshift(n),
                d = O.event.special[m] || {},
                d.trigger && d.trigger.apply(r, i) === !1)
                    return;
                if (h = [[r, d.bindType || m]],
                !a && !d.noBubble && !O.isWindow(r)) {
                    for (g = d.delegateType || m,
                    c = ie.test(g + m) ? r : r.parentNode,
                    u = null; c; c = c.parentNode)
                        h.push([c, g]),
                        u = c;
                    u && u === r.ownerDocument && h.push([u.defaultView || u.parentWindow || e, g])
                }
                for (l = 0; l < h.length && !n.isPropagationStopped(); l++)
                    c = h[l][0],
                    n.type = h[l][1],
                    p = (O._data(c, "events") || {})[n.type] && O._data(c, "handle"),
                    p && p.apply(c, i),
                    p = f && c[f],
                    p && O.acceptData(c) && p.apply(c, i) === !1 && n.preventDefault();
                return n.type = m,
                !a && !n.isDefaultPrevented() && (!d._default || d._default.apply(r.ownerDocument, i) === !1) && ("click" !== m || !O.nodeName(r, "a")) && O.acceptData(r) && f && r[m] && ("focus" !== m && "blur" !== m || 0 !== n.target.offsetWidth) && !O.isWindow(r) && (u = r[f],
                u && (r[f] = null),
                O.event.triggered = m,
                r[m](),
                O.event.triggered = t,
                u && (r[f] = u)),
                n.result
            }
        },
        dispatch: function(n) {
            n = O.event.fix(n || e.event);
            var i, r, a, o, s, l, c, u, f, d, p = (O._data(this, "events") || {})[n.type] || [], h = p.delegateCount, g = [].slice.call(arguments, 0), m = !n.exclusive && !n.namespace, v = O.event.special[n.type] || {}, y = [];
            if (g[0] = n,
            n.delegateTarget = this,
            !v.preDispatch || v.preDispatch.call(this, n) !== !1) {
                if (h && (!n.button || "click" !== n.type))
                    for (o = O(this),
                    o.context = this.ownerDocument || this,
                    a = n.target; a != this; a = a.parentNode || this)
                        if (a.disabled !== !0) {
                            for (l = {},
                            u = [],
                            o[0] = a,
                            i = 0; i < h; i++)
                                f = p[i],
                                d = f.selector,
                                l[d] === t && (l[d] = f.quick ? oe(a, f.quick) : o.is(d)),
                                l[d] && u.push(f);
                            u.length && y.push({
                                elem: a,
                                matches: u
                            })
                        }
                for (p.length > h && y.push({
                    elem: this,
                    matches: p.slice(h)
                }),
                i = 0; i < y.length && !n.isPropagationStopped(); i++)
                    for (c = y[i],
                    n.currentTarget = c.elem,
                    r = 0; r < c.matches.length && !n.isImmediatePropagationStopped(); r++)
                        f = c.matches[r],
                        (m || !n.namespace && !f.namespace || n.namespace_re && n.namespace_re.test(f.namespace)) && (n.data = f.data,
                        n.handleObj = f,
                        s = ((O.event.special[f.origType] || {}).handle || f.handler).apply(c.elem, g),
                        s !== t && (n.result = s,
                        s === !1 && (n.preventDefault(),
                        n.stopPropagation())));
                return v.postDispatch && v.postDispatch.call(this, n),
                n.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var i, r, a, o = n.button, s = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || L,
                r = i.documentElement,
                a = i.body,
                e.pageX = n.clientX + (r && r.scrollLeft || a && a.scrollLeft || 0) - (r && r.clientLeft || a && a.clientLeft || 0),
                e.pageY = n.clientY + (r && r.scrollTop || a && a.scrollTop || 0) - (r && r.clientTop || a && a.clientTop || 0)),
                !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s),
                !e.which && o !== t && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[O.expando])
                return e;
            var n, i, r = e, a = O.event.fixHooks[e.type] || {}, o = a.props ? this.props.concat(a.props) : this.props;
            for (e = O.Event(r),
            n = o.length; n; )
                i = o[--n],
                e[i] = r[i];
            return e.target || (e.target = r.srcElement || L),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey === t && (e.metaKey = e.ctrlKey),
            a.filter ? a.filter(e, r) : e
        },
        special: {
            ready: {
                setup: O.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(e, t, n) {
                    O.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function(e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = O.extend(new O.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? O.event.trigger(r, null, t) : O.event.dispatch.call(t, r),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
    O.event.handle = O.event.dispatch,
    O.removeEvent = L.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    : function(e, t, n) {
        e.detachEvent && e.detachEvent("on" + t, n)
    }
    ,
    O.Event = function(e, t) {
        return this instanceof O.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? k : j) : this.type = e,
        t && O.extend(this, t),
        this.timeStamp = e && e.timeStamp || O.now(),
        this[O.expando] = !0,
        void 0) : new O.Event(e,t)
    }
    ,
    O.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = k;
            var e = this.originalEvent;
            !e || (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = k;
            var e = this.originalEvent;
            !e || (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = k,
            this.stopPropagation()
        },
        isDefaultPrevented: j,
        isPropagationStopped: j,
        isImmediatePropagationStopped: j
    },
    O.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        O.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, r = e.relatedTarget, a = e.handleObj;
                a.selector;
                return r && (r === i || O.contains(i, r)) || (e.type = a.origType,
                n = a.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    O.support.submitBubbles || (O.event.special.submit = {
        setup: function() {
            return !O.nodeName(this, "form") && void O.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target
                  , i = O.nodeName(n, "input") || O.nodeName(n, "button") ? n.form : t;
                i && !i._submit_attached && (O.event.add(i, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                i._submit_attached = !0)
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && O.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return !O.nodeName(this, "form") && void O.event.remove(this, "._submit")
        }
    }),
    O.support.changeBubbles || (O.event.special.change = {
        setup: function() {
            return J.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (O.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }),
            O.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1,
                O.event.simulate("change", this, e, !0))
            })),
            !1) : void O.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                J.test(t.nodeName) && !t._change_attached && (O.event.add(t, "change._change", function(e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && O.event.simulate("change", this.parentNode, e, !0)
                }),
                t._change_attached = !0)
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)
                return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return O.event.remove(this, "._change"),
            J.test(this.nodeName)
        }
    }),
    O.support.focusinBubbles || O.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0
          , i = function(e) {
            O.event.simulate(t, e.target, O.event.fix(e), !0)
        };
        O.event.special[t] = {
            setup: function() {
                0 === n++ && L.addEventListener(e, i, !0)
            },
            teardown: function() {
                0 === --n && L.removeEventListener(e, i, !0)
            }
        }
    }),
    O.fn.extend({
        on: function(e, n, i, r, a) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n,
                n = t);
                for (s in e)
                    this.on(s, n, i, e[s], a);
                return this
            }
            if (null == i && null == r ? (r = n,
            i = n = t) : null == r && ("string" == typeof n ? (r = i,
            i = t) : (r = i,
            i = n,
            n = t)),
            r === !1)
                r = j;
            else if (!r)
                return this;
            return 1 === a && (o = r,
            r = function(e) {
                return O().off(e),
                o.apply(this, arguments)
            }
            ,
            r.guid = o.guid || (o.guid = O.guid++)),
            this.each(function() {
                O.event.add(this, e, r, i, n)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, n, i) {
            if (e && e.preventDefault && e.handleObj) {
                var r = e.handleObj;
                return O(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this
            }
            if ("object" == typeof e) {
                for (var a in e)
                    this.off(a, n, e[a]);
                return this
            }
            return n !== !1 && "function" != typeof n || (i = n,
            n = t),
            i === !1 && (i = j),
            this.each(function() {
                O.event.remove(this, e, i, n)
            })
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        live: function(e, t, n) {
            return O(this.context).on(e, this.selector, t, n),
            this
        },
        die: function(e, t) {
            return O(this.context).off(e, this.selector || "**", t),
            this
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 == arguments.length ? this.off(e, "**") : this.off(t, e, n)
        },
        trigger: function(e, t) {
            return this.each(function() {
                O.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            if (this[0])
                return O.event.trigger(e, t, this[0], !0)
        },
        toggle: function(e) {
            var t = arguments
              , n = e.guid || O.guid++
              , i = 0
              , r = function(n) {
                var r = (O._data(this, "lastToggle" + e.guid) || 0) % i;
                return O._data(this, "lastToggle" + e.guid, r + 1),
                n.preventDefault(),
                t[r].apply(this, arguments) || !1
            };
            for (r.guid = n; i < t.length; )
                t[i++].guid = n;
            return this.click(r)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    O.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        O.fn[t] = function(e, n) {
            return null == n && (n = e,
            e = null),
            arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
        ,
        O.attrFn && (O.attrFn[t] = !0),
        te.test(t) && (O.event.fixHooks[t] = O.event.keyHooks),
        ne.test(t) && (O.event.fixHooks[t] = O.event.mouseHooks)
    }),
    function() {
        function e(e, t, n, i, a, o) {
            for (var s = 0, l = i.length; s < l; s++) {
                var c = i[s];
                if (c) {
                    var u = !1;
                    for (c = c[e]; c; ) {
                        if (c[r] === n) {
                            u = i[c.sizset];
                            break
                        }
                        if (1 === c.nodeType)
                            if (o || (c[r] = n,
                            c.sizset = s),
                            "string" != typeof t) {
                                if (c === t) {
                                    u = !0;
                                    break
                                }
                            } else if (d.filter(t, [c]).length > 0) {
                                u = c;
                                break
                            }
                        c = c[e]
                    }
                    i[s] = u
                }
            }
        }
        function n(e, t, n, i, a, o) {
            for (var s = 0, l = i.length; s < l; s++) {
                var c = i[s];
                if (c) {
                    var u = !1;
                    for (c = c[e]; c; ) {
                        if (c[r] === n) {
                            u = i[c.sizset];
                            break
                        }
                        if (1 === c.nodeType && !o && (c[r] = n,
                        c.sizset = s),
                        c.nodeName.toLowerCase() === t) {
                            u = c;
                            break
                        }
                        c = c[e]
                    }
                    i[s] = u
                }
            }
        }
        var i = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g
          , r = "sizcache" + (Math.random() + "").replace(".", "")
          , a = 0
          , o = Object.prototype.toString
          , s = !1
          , l = !0
          , c = /\\/g
          , u = /\r\n/g
          , f = /\W/;
        [0, 0].sort(function() {
            return l = !1,
            0
        });
        var d = function(e, t, n, r) {
            n = n || [],
            t = t || L;
            var a = t;
            if (1 !== t.nodeType && 9 !== t.nodeType)
                return [];
            if (!e || "string" != typeof e)
                return n;
            var s, l, c, u, f, p, m, v, b = !0, x = d.isXML(t), w = [], _ = e;
            do
                if (i.exec(""),
                s = i.exec(_),
                s && (_ = s[3],
                w.push(s[1]),
                s[2])) {
                    u = s[3];
                    break
                }
            while (s);if (w.length > 1 && g.exec(e))
                if (2 === w.length && h.relative[w[0]])
                    l = E(w[0] + w[1], t, r);
                else
                    for (l = h.relative[w[0]] ? [t] : d(w.shift(), t); w.length; )
                        e = w.shift(),
                        h.relative[e] && (e += w.shift()),
                        l = E(e, l, r);
            else if (!r && w.length > 1 && 9 === t.nodeType && !x && h.match.ID.test(w[0]) && !h.match.ID.test(w[w.length - 1]) && (f = d.find(w.shift(), t, x),
            t = f.expr ? d.filter(f.expr, f.set)[0] : f.set[0]),
            t)
                for (f = r ? {
                    expr: w.pop(),
                    set: y(r)
                } : d.find(w.pop(), 1 !== w.length || "~" !== w[0] && "+" !== w[0] || !t.parentNode ? t : t.parentNode, x),
                l = f.expr ? d.filter(f.expr, f.set) : f.set,
                w.length > 0 ? c = y(l) : b = !1; w.length; )
                    p = w.pop(),
                    m = p,
                    h.relative[p] ? m = w.pop() : p = "",
                    null == m && (m = t),
                    h.relative[p](c, m, x);
            else
                c = w = [];
            if (c || (c = l),
            c || d.error(p || e),
            "[object Array]" === o.call(c))
                if (b)
                    if (t && 1 === t.nodeType)
                        for (v = 0; null != c[v]; v++)
                            c[v] && (c[v] === !0 || 1 === c[v].nodeType && d.contains(t, c[v])) && n.push(l[v]);
                    else
                        for (v = 0; null != c[v]; v++)
                            c[v] && 1 === c[v].nodeType && n.push(l[v]);
                else
                    n.push.apply(n, c);
            else
                y(c, n);
            return u && (d(u, a, n, r),
            d.uniqueSort(n)),
            n
        };
        d.uniqueSort = function(e) {
            if (x && (s = l,
            e.sort(x),
            s))
                for (var t = 1; t < e.length; t++)
                    e[t] === e[t - 1] && e.splice(t--, 1);
            return e
        }
        ,
        d.matches = function(e, t) {
            return d(e, null, null, t)
        }
        ,
        d.matchesSelector = function(e, t) {
            return d(t, null, null, [e]).length > 0
        }
        ,
        d.find = function(e, t, n) {
            var i, r, a, o, s, l;
            if (!e)
                return [];
            for (r = 0,
            a = h.order.length; r < a; r++)
                if (s = h.order[r],
                (o = h.leftMatch[s].exec(e)) && (l = o[1],
                o.splice(1, 1),
                "\\" !== l.substr(l.length - 1) && (o[1] = (o[1] || "").replace(c, ""),
                i = h.find[s](o, t, n),
                null != i))) {
                    e = e.replace(h.match[s], "");
                    break
                }
            return i || (i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName("*") : []),
            {
                set: i,
                expr: e
            }
        }
        ,
        d.filter = function(e, n, i, r) {
            for (var a, o, s, l, c, u, f, p, g, m = e, v = [], y = n, b = n && n[0] && d.isXML(n[0]); e && n.length; ) {
                for (s in h.filter)
                    if (null != (a = h.leftMatch[s].exec(e)) && a[2]) {
                        if (u = h.filter[s],
                        f = a[1],
                        o = !1,
                        a.splice(1, 1),
                        "\\" === f.substr(f.length - 1))
                            continue;
                        if (y === v && (v = []),
                        h.preFilter[s])
                            if (a = h.preFilter[s](a, y, i, v, r, b)) {
                                if (a === !0)
                                    continue
                            } else
                                o = l = !0;
                        if (a)
                            for (p = 0; null != (c = y[p]); p++)
                                c && (l = u(c, a, p, y),
                                g = r ^ l,
                                i && null != l ? g ? o = !0 : y[p] = !1 : g && (v.push(c),
                                o = !0));
                        if (l !== t) {
                            if (i || (y = v),
                            e = e.replace(h.match[s], ""),
                            !o)
                                return [];
                            break
                        }
                    }
                if (e === m) {
                    if (null != o)
                        break;
                    d.error(e)
                }
                m = e
            }
            return y
        }
        ,
        d.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ;
        var p = d.getText = function(e) {
            var t, n, i = e.nodeType, r = "";
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    if ("string" == typeof e.innerText)
                        return e.innerText.replace(u, "");
                    for (e = e.firstChild; e; e = e.nextSibling)
                        r += p(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (t = 0; n = e[t]; t++)
                    8 !== n.nodeType && (r += p(n));
            return r
        }
          , h = d.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(e) {
                    return e.getAttribute("href")
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            relative: {
                "+": function(e, t) {
                    var n = "string" == typeof t
                      , i = n && !f.test(t)
                      , r = n && !i;
                    i && (t = t.toLowerCase());
                    for (var a, o = 0, s = e.length; o < s; o++)
                        if (a = e[o]) {
                            for (; (a = a.previousSibling) && 1 !== a.nodeType; )
                                ;
                            e[o] = r || a && a.nodeName.toLowerCase() === t ? a || !1 : a === t
                        }
                    r && d.filter(t, e, !0)
                },
                ">": function(e, t) {
                    var n, i = "string" == typeof t, r = 0, a = e.length;
                    if (i && !f.test(t)) {
                        for (t = t.toLowerCase(); r < a; r++)
                            if (n = e[r]) {
                                var o = n.parentNode;
                                e[r] = o.nodeName.toLowerCase() === t && o
                            }
                    } else {
                        for (; r < a; r++)
                            n = e[r],
                            n && (e[r] = i ? n.parentNode : n.parentNode === t);
                        i && d.filter(t, e, !0)
                    }
                },
                "": function(t, i, r) {
                    var o, s = a++, l = e;
                    "string" == typeof i && !f.test(i) && (i = i.toLowerCase(),
                    o = i,
                    l = n),
                    l("parentNode", i, s, t, o, r)
                },
                "~": function(t, i, r) {
                    var o, s = a++, l = e;
                    "string" == typeof i && !f.test(i) && (i = i.toLowerCase(),
                    o = i,
                    l = n),
                    l("previousSibling", i, s, t, o, r)
                }
            },
            find: {
                ID: function(e, t, n) {
                    if ("undefined" != typeof t.getElementById && !n) {
                        var i = t.getElementById(e[1]);
                        return i && i.parentNode ? [i] : []
                    }
                },
                NAME: function(e, t) {
                    if ("undefined" != typeof t.getElementsByName) {
                        for (var n = [], i = t.getElementsByName(e[1]), r = 0, a = i.length; r < a; r++)
                            i[r].getAttribute("name") === e[1] && n.push(i[r]);
                        return 0 === n.length ? null : n
                    }
                },
                TAG: function(e, t) {
                    if ("undefined" != typeof t.getElementsByTagName)
                        return t.getElementsByTagName(e[1])
                }
            },
            preFilter: {
                CLASS: function(e, t, n, i, r, a) {
                    if (e = " " + e[1].replace(c, "") + " ",
                    a)
                        return e;
                    for (var o, s = 0; null != (o = t[s]); s++)
                        o && (r ^ (o.className && (" " + o.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || i.push(o) : n && (t[s] = !1));
                    return !1
                },
                ID: function(e) {
                    return e[1].replace(c, "")
                },
                TAG: function(e, t) {
                    return e[1].replace(c, "").toLowerCase()
                },
                CHILD: function(e) {
                    if ("nth" === e[1]) {
                        e[2] || d.error(e[0]),
                        e[2] = e[2].replace(/^\+|\s*/g, "");
                        var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === e[2] && "2n" || "odd" === e[2] && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                        e[2] = t[1] + (t[2] || 1) - 0,
                        e[3] = t[3] - 0
                    } else
                        e[2] && d.error(e[0]);
                    return e[0] = a++,
                    e
                },
                ATTR: function(e, t, n, i, r, a) {
                    var o = e[1] = e[1].replace(c, "");
                    return !a && h.attrMap[o] && (e[1] = h.attrMap[o]),
                    e[4] = (e[4] || e[5] || "").replace(c, ""),
                    "~=" === e[2] && (e[4] = " " + e[4] + " "),
                    e
                },
                PSEUDO: function(e, t, n, r, a) {
                    if ("not" === e[1]) {
                        if (!((i.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                            var o = d.filter(e[3], t, n, !0 ^ a);
                            return n || r.push.apply(r, o),
                            !1
                        }
                        e[3] = d(e[3], null, null, t)
                    } else if (h.match.POS.test(e[0]) || h.match.CHILD.test(e[0]))
                        return !0;
                    return e
                },
                POS: function(e) {
                    return e.unshift(!0),
                    e
                }
            },
            filters: {
                enabled: function(e) {
                    return e.disabled === !1 && "hidden" !== e.type
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    return e.checked === !0
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                parent: function(e) {
                    return !!e.firstChild
                },
                empty: function(e) {
                    return !e.firstChild
                },
                has: function(e, t, n) {
                    return !!d(n[3], e).length
                },
                header: function(e) {
                    return /h\d/i.test(e.nodeName)
                },
                text: function(e) {
                    var t = e.getAttribute("type")
                      , n = e.type;
                    return "input" === e.nodeName.toLowerCase() && "text" === n && (t === n || null === t)
                },
                radio: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "radio" === e.type
                },
                checkbox: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
                },
                file: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "file" === e.type
                },
                password: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "password" === e.type
                },
                submit: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && "submit" === e.type
                },
                image: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "image" === e.type
                },
                reset: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && "reset" === e.type
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                input: function(e) {
                    return /input|select|textarea|button/i.test(e.nodeName)
                },
                focus: function(e) {
                    return e === e.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(e, t) {
                    return 0 === t
                },
                last: function(e, t, n, i) {
                    return t === i.length - 1
                },
                even: function(e, t) {
                    return t % 2 === 0
                },
                odd: function(e, t) {
                    return t % 2 === 1
                },
                lt: function(e, t, n) {
                    return t < n[3] - 0
                },
                gt: function(e, t, n) {
                    return t > n[3] - 0
                },
                nth: function(e, t, n) {
                    return n[3] - 0 === t
                },
                eq: function(e, t, n) {
                    return n[3] - 0 === t
                }
            },
            filter: {
                PSEUDO: function(e, t, n, i) {
                    var r = t[1]
                      , a = h.filters[r];
                    if (a)
                        return a(e, n, t, i);
                    if ("contains" === r)
                        return (e.textContent || e.innerText || p([e]) || "").indexOf(t[3]) >= 0;
                    if ("not" === r) {
                        for (var o = t[3], s = 0, l = o.length; s < l; s++)
                            if (o[s] === e)
                                return !1;
                        return !0
                    }
                    d.error(r)
                },
                CHILD: function(e, t) {
                    var n, i, a, o, s, l, c = t[1], u = e;
                    switch (c) {
                    case "only":
                    case "first":
                        for (; u = u.previousSibling; )
                            if (1 === u.nodeType)
                                return !1;
                        if ("first" === c)
                            return !0;
                        u = e;
                    case "last":
                        for (; u = u.nextSibling; )
                            if (1 === u.nodeType)
                                return !1;
                        return !0;
                    case "nth":
                        if (n = t[2],
                        i = t[3],
                        1 === n && 0 === i)
                            return !0;
                        if (a = t[0],
                        o = e.parentNode,
                        o && (o[r] !== a || !e.nodeIndex)) {
                            for (s = 0,
                            u = o.firstChild; u; u = u.nextSibling)
                                1 === u.nodeType && (u.nodeIndex = ++s);
                            o[r] = a
                        }
                        return l = e.nodeIndex - i,
                        0 === n ? 0 === l : l % n === 0 && l / n >= 0
                    }
                },
                ID: function(e, t) {
                    return 1 === e.nodeType && e.getAttribute("id") === t
                },
                TAG: function(e, t) {
                    return "*" === t && 1 === e.nodeType || !!e.nodeName && e.nodeName.toLowerCase() === t
                },
                CLASS: function(e, t) {
                    return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                },
                ATTR: function(e, t) {
                    var n = t[1]
                      , i = d.attr ? d.attr(e, n) : h.attrHandle[n] ? h.attrHandle[n](e) : null != e[n] ? e[n] : e.getAttribute(n)
                      , r = i + ""
                      , a = t[2]
                      , o = t[4];
                    return null == i ? "!=" === a : !a && d.attr ? null != i : "=" === a ? r === o : "*=" === a ? r.indexOf(o) >= 0 : "~=" === a ? (" " + r + " ").indexOf(o) >= 0 : o ? "!=" === a ? r !== o : "^=" === a ? 0 === r.indexOf(o) : "$=" === a ? r.substr(r.length - o.length) === o : "|=" === a && (r === o || r.substr(0, o.length + 1) === o + "-") : r && i !== !1
                },
                POS: function(e, t, n, i) {
                    var r = t[2]
                      , a = h.setFilters[r];
                    if (a)
                        return a(e, n, t, i)
                }
            }
        }
          , g = h.match.POS
          , m = function(e, t) {
            return "\\" + (t - 0 + 1)
        };
        for (var v in h.match)
            h.match[v] = new RegExp(h.match[v].source + /(?![^\[]*\])(?![^\(]*\))/.source),
            h.leftMatch[v] = new RegExp(/(^(?:.|\r|\n)*?)/.source + h.match[v].source.replace(/\\(\d+)/g, m));
        h.match.globalPOS = g;
        var y = function(e, t) {
            return e = Array.prototype.slice.call(e, 0),
            t ? (t.push.apply(t, e),
            t) : e
        };
        try {
            Array.prototype.slice.call(L.documentElement.childNodes, 0)[0].nodeType
        } catch (b) {
            y = function(e, t) {
                var n = 0
                  , i = t || [];
                if ("[object Array]" === o.call(e))
                    Array.prototype.push.apply(i, e);
                else if ("number" == typeof e.length)
                    for (var r = e.length; n < r; n++)
                        i.push(e[n]);
                else
                    for (; e[n]; n++)
                        i.push(e[n]);
                return i
            }
        }
        var x, w;
        L.documentElement.compareDocumentPosition ? x = function(e, t) {
            return e === t ? (s = !0,
            0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
        }
        : (x = function(e, t) {
            if (e === t)
                return s = !0,
                0;
            if (e.sourceIndex && t.sourceIndex)
                return e.sourceIndex - t.sourceIndex;
            var n, i, r = [], a = [], o = e.parentNode, l = t.parentNode, c = o;
            if (o === l)
                return w(e, t);
            if (!o)
                return -1;
            if (!l)
                return 1;
            for (; c; )
                r.unshift(c),
                c = c.parentNode;
            for (c = l; c; )
                a.unshift(c),
                c = c.parentNode;
            n = r.length,
            i = a.length;
            for (var u = 0; u < n && u < i; u++)
                if (r[u] !== a[u])
                    return w(r[u], a[u]);
            return u === n ? w(e, a[u], -1) : w(r[u], t, 1)
        }
        ,
        w = function(e, t, n) {
            if (e === t)
                return n;
            for (var i = e.nextSibling; i; ) {
                if (i === t)
                    return -1;
                i = i.nextSibling
            }
            return 1
        }
        ),
        function() {
            var e = L.createElement("div")
              , n = "script" + (new Date).getTime()
              , i = L.documentElement;
            e.innerHTML = "<a name='" + n + "'/>",
            i.insertBefore(e, i.firstChild),
            L.getElementById(n) && (h.find.ID = function(e, n, i) {
                if ("undefined" != typeof n.getElementById && !i) {
                    var r = n.getElementById(e[1]);
                    return r ? r.id === e[1] || "undefined" != typeof r.getAttributeNode && r.getAttributeNode("id").nodeValue === e[1] ? [r] : t : []
                }
            }
            ,
            h.filter.ID = function(e, t) {
                var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                return 1 === e.nodeType && n && n.nodeValue === t
            }
            ),
            i.removeChild(e),
            i = e = null
        }(),
        function() {
            var e = L.createElement("div");
            e.appendChild(L.createComment("")),
            e.getElementsByTagName("*").length > 0 && (h.find.TAG = function(e, t) {
                var n = t.getElementsByTagName(e[1]);
                if ("*" === e[1]) {
                    for (var i = [], r = 0; n[r]; r++)
                        1 === n[r].nodeType && i.push(n[r]);
                    n = i
                }
                return n
            }
            ),
            e.innerHTML = "<a href='#'></a>",
            e.firstChild && "undefined" != typeof e.firstChild.getAttribute && "#" !== e.firstChild.getAttribute("href") && (h.attrHandle.href = function(e) {
                return e.getAttribute("href", 2)
            }
            ),
            e = null
        }(),
        L.querySelectorAll && function() {
            var e = d
              , t = L.createElement("div")
              , n = "__sizzle__";
            if (t.innerHTML = "<p class='TEST'></p>",
            !t.querySelectorAll || 0 !== t.querySelectorAll(".TEST").length) {
                d = function(t, i, r, a) {
                    if (i = i || L,
                    !a && !d.isXML(i)) {
                        var o = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                        if (o && (1 === i.nodeType || 9 === i.nodeType)) {
                            if (o[1])
                                return y(i.getElementsByTagName(t), r);
                            if (o[2] && h.find.CLASS && i.getElementsByClassName)
                                return y(i.getElementsByClassName(o[2]), r)
                        }
                        if (9 === i.nodeType) {
                            if ("body" === t && i.body)
                                return y([i.body], r);
                            if (o && o[3]) {
                                var s = i.getElementById(o[3]);
                                if (!s || !s.parentNode)
                                    return y([], r);
                                if (s.id === o[3])
                                    return y([s], r)
                            }
                            try {
                                return y(i.querySelectorAll(t), r)
                            } catch (l) {}
                        } else if (1 === i.nodeType && "object" !== i.nodeName.toLowerCase()) {
                            var c = i
                              , u = i.getAttribute("id")
                              , f = u || n
                              , p = i.parentNode
                              , g = /^\s*[+~]/.test(t);
                            u ? f = f.replace(/'/g, "\\$&") : i.setAttribute("id", f),
                            g && p && (i = i.parentNode);
                            try {
                                if (!g || p)
                                    return y(i.querySelectorAll("[id='" + f + "'] " + t), r)
                            } catch (m) {} finally {
                                u || c.removeAttribute("id")
                            }
                        }
                    }
                    return e(t, i, r, a)
                }
                ;
                for (var i in e)
                    d[i] = e[i];
                t = null
            }
        }(),
        function() {
            var e = L.documentElement
              , t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (t) {
                var n = !t.call(L.createElement("div"), "div")
                  , i = !1;
                try {
                    t.call(L.documentElement, "[test!='']:sizzle")
                } catch (r) {
                    i = !0
                }
                d.matchesSelector = function(e, r) {
                    if (r = r.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"),
                    !d.isXML(e))
                        try {
                            if (i || !h.match.PSEUDO.test(r) && !/!=/.test(r)) {
                                var a = t.call(e, r);
                                if (a || !n || e.document && 11 !== e.document.nodeType)
                                    return a
                            }
                        } catch (o) {}
                    return d(r, null, null, [e]).length > 0
                }
            }
        }(),
        function() {
            var e = L.createElement("div");
            if (e.innerHTML = "<div class='test e'></div><div class='test'></div>",
            e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length) {
                if (e.lastChild.className = "e",
                1 === e.getElementsByClassName("e").length)
                    return;
                h.order.splice(1, 0, "CLASS"),
                h.find.CLASS = function(e, t, n) {
                    if ("undefined" != typeof t.getElementsByClassName && !n)
                        return t.getElementsByClassName(e[1])
                }
                ,
                e = null
            }
        }(),
        L.documentElement.contains ? d.contains = function(e, t) {
            return e !== t && (!e.contains || e.contains(t))
        }
        : L.documentElement.compareDocumentPosition ? d.contains = function(e, t) {
            return !!(16 & e.compareDocumentPosition(t))
        }
        : d.contains = function() {
            return !1
        }
        ,
        d.isXML = function(e) {
            var t = (e ? e.ownerDocument || e : 0).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ;
        var E = function(e, t, n) {
            for (var i, r = [], a = "", o = t.nodeType ? [t] : t; i = h.match.PSEUDO.exec(e); )
                a += i[0],
                e = e.replace(h.match.PSEUDO, "");
            e = h.relative[e] ? e + "*" : e;
            for (var s = 0, l = o.length; s < l; s++)
                d(e, o[s], r, n);
            return d.filter(a, r)
        };
        d.attr = O.attr,
        d.selectors.attrMap = {},
        O.find = d,
        O.expr = d.selectors,
        O.expr[":"] = O.expr.filters,
        O.unique = d.uniqueSort,
        O.text = d.getText,
        O.isXMLDoc = d.isXML,
        O.contains = d.contains
    }();
    var le = /Until$/
      , ce = /^(?:parents|prevUntil|prevAll)/
      , ue = /,/
      , fe = /^.[^:#\[\.,]*$/
      , de = Array.prototype.slice
      , pe = O.expr.match.globalPOS
      , he = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    O.fn.extend({
        find: function(e) {
            var t, n, i = this;
            if ("string" != typeof e)
                return O(e).filter(function() {
                    for (t = 0,
                    n = i.length; t < n; t++)
                        if (O.contains(i[t], this))
                            return !0
                });
            var r, a, o, s = this.pushStack("", "find", e);
            for (t = 0,
            n = this.length; t < n; t++)
                if (r = s.length,
                O.find(e, this[t], s),
                t > 0)
                    for (a = r; a < s.length; a++)
                        for (o = 0; o < r; o++)
                            if (s[o] === s[a]) {
                                s.splice(a--, 1);
                                break
                            }
            return s
        },
        has: function(e) {
            var t = O(e);
            return this.filter(function() {
                for (var e = 0, n = t.length; e < n; e++)
                    if (O.contains(this, t[e]))
                        return !0
            })
        },
        not: function(e) {
            return this.pushStack(T(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(T(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? pe.test(e) ? O(e, this.context).index(this[0]) >= 0 : O.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, i, r = [], a = this[0];
            if (O.isArray(e)) {
                for (var o = 1; a && a.ownerDocument && a !== t; ) {
                    for (n = 0; n < e.length; n++)
                        O(a).is(e[n]) && r.push({
                            selector: e[n],
                            elem: a,
                            level: o
                        });
                    a = a.parentNode,
                    o++
                }
                return r
            }
            var s = pe.test(e) || "string" != typeof e ? O(e, t || this.context) : 0;
            for (n = 0,
            i = this.length; n < i; n++)
                for (a = this[n]; a; ) {
                    if (s ? s.index(a) > -1 : O.find.matchesSelector(a, e)) {
                        r.push(a);
                        break
                    }
                    if (a = a.parentNode,
                    !a || !a.ownerDocument || a === t || 11 === a.nodeType)
                        break
                }
            return r = r.length > 1 ? O.unique(r) : r,
            this.pushStack(r, "closest", e)
        },
        index: function(e) {
            return e ? "string" == typeof e ? O.inArray(this[0], O(e)) : O.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? O(e, t) : O.makeArray(e && e.nodeType ? [e] : e)
              , i = O.merge(this.get(), n);
            return this.pushStack(N(n[0]) || N(i[0]) ? i : O.unique(i))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }),
    O.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return O.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return O.dir(e, "parentNode", n)
        },
        next: function(e) {
            return O.nth(e, 2, "nextSibling")
        },
        prev: function(e) {
            return O.nth(e, 2, "previousSibling")
        },
        nextAll: function(e) {
            return O.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return O.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return O.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return O.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return O.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return O.sibling(e.firstChild)
        },
        contents: function(e) {
            return O.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : O.makeArray(e.childNodes)
        }
    }, function(e, t) {
        O.fn[e] = function(n, i) {
            var r = O.map(this, t, n);
            return le.test(e) || (i = n),
            i && "string" == typeof i && (r = O.filter(i, r)),
            r = this.length > 1 && !he[e] ? O.unique(r) : r,
            (this.length > 1 || ue.test(i)) && ce.test(e) && (r = r.reverse()),
            this.pushStack(r, e, de.call(arguments).join(","))
        }
    }),
    O.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"),
            1 === t.length ? O.find.matchesSelector(t[0], e) ? [t[0]] : [] : O.find.matches(e, t)
        },
        dir: function(e, n, i) {
            for (var r = [], a = e[n]; a && 9 !== a.nodeType && (i === t || 1 !== a.nodeType || !O(a).is(i)); )
                1 === a.nodeType && r.push(a),
                a = a[n];
            return r
        },
        nth: function(e, t, n, i) {
            t = t || 1;
            for (var r = 0; e && (1 !== e.nodeType || ++r !== t); e = e[n])
                ;
            return e
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var ge = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , me = / jQuery\d+="(?:\d+|null)"/g
      , ve = /^\s+/
      , ye = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , be = /<([\w:]+)/
      , $ = /<tbody/i
      , xe = /<|&#?\w+;/
      , we = /<(?:script|style)/i
      , Ee = /<(?:script|object|embed|option|style)/i
      , _e = new RegExp("<(?:" + ge + ")[\\s/>]","i")
      , Te = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ne = /\/(java|ecma)script/i
      , ke = /^\s*<!(?:\[CDATA\[|\-\-)/
      , je = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }
      , Ce = _(L);
    je.optgroup = je.option,
    je.tbody = je.tfoot = je.colgroup = je.caption = je.thead,
    je.th = je.td,
    O.support.htmlSerialize || (je._default = [1, "div<div>", "</div>"]),
    O.fn.extend({
        text: function(e) {
            return O.access(this, function(e) {
                return e === t ? O.text(this) : this.empty().append((this[0] && this[0].ownerDocument || L).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (O.isFunction(e))
                return this.each(function(t) {
                    O(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = O(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return O.isFunction(e) ? this.each(function(t) {
                O(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = O(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            })
        },
        wrap: function(e) {
            var t = O.isFunction(e);
            return this.each(function(n) {
                O(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                O.nodeName(this, "body") || O(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                1 === this.nodeType && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                1 === this.nodeType && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this)
                });
            if (arguments.length) {
                var e = O.clean(arguments);
                return e.push.apply(e, this.toArray()),
                this.pushStack(e, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                return e.push.apply(e, O.clean(arguments)),
                e
            }
        },
        remove: function(e, t) {
            for (var n, i = 0; null != (n = this[i]); i++)
                e && !O.filter(e, [n]).length || (!t && 1 === n.nodeType && (O.cleanData(n.getElementsByTagName("*")),
                O.cleanData([n])),
                n.parentNode && n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                for (1 === e.nodeType && O.cleanData(e.getElementsByTagName("*")); e.firstChild; )
                    e.removeChild(e.firstChild);
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return O.clone(this, e, t)
            })
        },
        html: function(e) {
            return O.access(this, function(e) {
                var n = this[0] || {}
                  , i = 0
                  , r = this.length;
                if (e === t)
                    return 1 === n.nodeType ? n.innerHTML.replace(me, "") : null;
                if ("string" == typeof e && !we.test(e) && (O.support.leadingWhitespace || !ve.test(e)) && !je[(be.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(ye, "<$1></$2>");
                    try {
                        for (; i < r; i++)
                            n = this[i] || {},
                            1 === n.nodeType && (O.cleanData(n.getElementsByTagName("*")),
                            n.innerHTML = e);
                        n = 0
                    } catch (a) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            return this[0] && this[0].parentNode ? O.isFunction(e) ? this.each(function(t) {
                var n = O(this)
                  , i = n.html();
                n.replaceWith(e.call(this, t, i))
            }) : ("string" != typeof e && (e = O(e).detach()),
            this.each(function() {
                var t = this.nextSibling
                  , n = this.parentNode;
                O(this).remove(),
                t ? O(t).before(e) : O(n).append(e)
            })) : this.length ? this.pushStack(O(O.isFunction(e) ? e() : e), "replaceWith", e) : this
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, i) {
            var r, a, o, s, l = e[0], c = [];
            if (!O.support.checkClone && 3 === arguments.length && "string" == typeof l && Te.test(l))
                return this.each(function() {
                    O(this).domManip(e, n, i, !0)
                });
            if (O.isFunction(l))
                return this.each(function(r) {
                    var a = O(this);
                    e[0] = l.call(this, r, n ? a.html() : t),
                    a.domManip(e, n, i)
                });
            if (this[0]) {
                if (s = l && l.parentNode,
                r = O.support.parentNode && s && 11 === s.nodeType && s.childNodes.length === this.length ? {
                    fragment: s
                } : O.buildFragment(e, this, c),
                o = r.fragment,
                a = 1 === o.childNodes.length ? o = o.firstChild : o.firstChild,
                a) {
                    n = n && O.nodeName(a, "tr");
                    for (var u = 0, f = this.length, d = f - 1; u < f; u++)
                        i.call(n ? E(this[u], a) : this[u], r.cacheable || f > 1 && u < d ? O.clone(o, !0, !0) : o)
                }
                c.length && O.each(c, function(e, t) {
                    t.src ? O.ajax({
                        type: "GET",
                        global: !1,
                        url: t.src,
                        async: !1,
                        dataType: "script"
                    }) : O.globalEval((t.text || t.textContent || t.innerHTML || "").replace(ke, "/*$0*/")),
                    t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }),
    O.buildFragment = function(e, t, n) {
        var i, r, a, o, s = e[0];
        return t && t[0] && (o = t[0].ownerDocument || t[0]),
        o.createDocumentFragment || (o = L),
        1 === e.length && "string" == typeof s && s.length < 512 && o === L && "<" === s.charAt(0) && !Ee.test(s) && (O.support.checkClone || !Te.test(s)) && (O.support.html5Clone || !_e.test(s)) && (r = !0,
        a = O.fragments[s],
        a && 1 !== a && (i = a)),
        i || (i = o.createDocumentFragment(),
        O.clean(e, o, i, n)),
        r && (O.fragments[s] = a ? i : 1),
        {
            fragment: i,
            cacheable: r
        }
    }
    ,
    O.fragments = {},
    O.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        O.fn[e] = function(n) {
            var i = []
              , r = O(n)
              , a = 1 === this.length && this[0].parentNode;
            if (a && 11 === a.nodeType && 1 === a.childNodes.length && 1 === r.length)
                return r[t](this[0]),
                this;
            for (var o = 0, s = r.length; o < s; o++) {
                var l = (o > 0 ? this.clone(!0) : this).get();
                O(r[o])[t](l),
                i = i.concat(l)
            }
            return this.pushStack(i, e, r.selector)
        }
    }),
    O.extend({
        clone: function(e, t, n) {
            var i, r, a, o = O.support.html5Clone || O.isXMLDoc(e) || !_e.test("<" + e.nodeName + ">") ? e.cloneNode(!0) : m(e);
            if (!(O.support.noCloneEvent && O.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || O.isXMLDoc(e)))
                for (x(e, o),
                i = b(e),
                r = b(o),
                a = 0; i[a]; ++a)
                    r[a] && x(i[a], r[a]);
            if (t && (w(e, o),
            n))
                for (i = b(e),
                r = b(o),
                a = 0; i[a]; ++a)
                    w(i[a], r[a]);
            return i = r = null,
            o
        },
        clean: function(e, t, n, i) {
            var r, a, o, s = [];
            t = t || L,
            "undefined" == typeof t.createElement && (t = t.ownerDocument || t[0] && t[0].ownerDocument || L);
            for (var l, c = 0; null != (l = e[c]); c++)
                if ("number" == typeof l && (l += ""),
                l) {
                    if ("string" == typeof l)
                        if (xe.test(l)) {
                            l = l.replace(ye, "<$1></$2>");
                            var u, f = (be.exec(l) || ["", ""])[1].toLowerCase(), d = je[f] || je._default, p = d[0], h = t.createElement("div"), g = Ce.childNodes;
                            for (t === L ? Ce.appendChild(h) : _(t).appendChild(h),
                            h.innerHTML = d[1] + l + d[2]; p--; )
                                h = h.lastChild;
                            if (!O.support.tbody) {
                                var m = $.test(l)
                                  , y = "table" !== f || m ? "<table>" !== d[1] || m ? [] : h.childNodes : h.firstChild && h.firstChild.childNodes;
                                for (o = y.length - 1; o >= 0; --o)
                                    O.nodeName(y[o], "tbody") && !y[o].childNodes.length && y[o].parentNode.removeChild(y[o])
                            }
                            !O.support.leadingWhitespace && ve.test(l) && h.insertBefore(t.createTextNode(ve.exec(l)[0]), h.firstChild),
                            l = h.childNodes,
                            h && (h.parentNode.removeChild(h),
                            g.length > 0 && (u = g[g.length - 1],
                            u && u.parentNode && u.parentNode.removeChild(u)))
                        } else
                            l = t.createTextNode(l);
                    var b;
                    if (!O.support.appendChecked)
                        if (l[0] && "number" == typeof (b = l.length))
                            for (o = 0; o < b; o++)
                                v(l[o]);
                        else
                            v(l);
                    l.nodeType ? s.push(l) : s = O.merge(s, l)
                }
            if (n)
                for (r = function(e) {
                    return !e.type || Ne.test(e.type)
                }
                ,
                c = 0; s[c]; c++)
                    if (a = s[c],
                    i && O.nodeName(a, "script") && (!a.type || Ne.test(a.type)))
                        i.push(a.parentNode ? a.parentNode.removeChild(a) : a);
                    else {
                        if (1 === a.nodeType) {
                            var x = O.grep(a.getElementsByTagName("script"), r);
                            s.splice.apply(s, [c + 1, 0].concat(x))
                        }
                        n.appendChild(a)
                    }
            return s
        },
        cleanData: function(e) {
            for (var t, n, i, r = O.cache, a = O.event.special, o = O.support.deleteExpando, s = 0; null != (i = e[s]); s++)
                if ((!i.nodeName || !O.noData[i.nodeName.toLowerCase()]) && (n = i[O.expando])) {
                    if (t = r[n],
                    t && t.events) {
                        for (var l in t.events)
                            a[l] ? O.event.remove(i, l) : O.removeEvent(i, l, t.handle);
                        t.handle && (t.handle.elem = null)
                    }
                    o ? delete i[O.expando] : i.removeAttribute && i.removeAttribute(O.expando),
                    delete r[n]
                }
        }
    });
    var Se, Ae, De, Le = /alpha\([^)]*\)/i, Fe = /opacity=([^)]*)/, Me = /([A-Z]|^ms)/g, Oe = /^[\-+]?(?:\d*\.)?\d+$/i, He = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, Ie = /^([\-+])=([\-+.\de]+)/, qe = /^margin/, Pe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Be = ["Top", "Right", "Bottom", "Left"];
    O.fn.css = function(e, n) {
        return O.access(this, function(e, n, i) {
            return i !== t ? O.style(e, n, i) : O.css(e, n)
        }, e, n, arguments.length > 1)
    }
    ,
    O.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Se(e, "opacity");
                        return "" === n ? "1" : n
                    }
                    return e.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": O.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, i, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var a, o, s = O.camelCase(n), l = e.style, c = O.cssHooks[s];
                if (n = O.cssProps[s] || s,
                i === t)
                    return c && "get"in c && (a = c.get(e, !1, r)) !== t ? a : l[n];
                if (o = typeof i,
                "string" === o && (a = Ie.exec(i)) && (i = +(a[1] + 1) * +a[2] + parseFloat(O.css(e, n)),
                o = "number"),
                null == i || "number" === o && isNaN(i))
                    return;
                if ("number" === o && !O.cssNumber[s] && (i += "px"),
                !(c && "set"in c && (i = c.set(e, i)) === t))
                    try {
                        l[n] = i
                    } catch (u) {}
            }
        },
        css: function(e, n, i) {
            var r, a;
            return n = O.camelCase(n),
            a = O.cssHooks[n],
            n = O.cssProps[n] || n,
            "cssFloat" === n && (n = "float"),
            a && "get"in a && (r = a.get(e, !0, i)) !== t ? r : Se ? Se(e, n) : void 0
        },
        swap: function(e, t, n) {
            var i, r, a = {};
            for (r in t)
                a[r] = e.style[r],
                e.style[r] = t[r];
            i = n.call(e);
            for (r in t)
                e.style[r] = a[r];
            return i
        }
    }),
    O.curCSS = O.css,
    L.defaultView && L.defaultView.getComputedStyle && (Ae = function(e, t) {
        var n, i, r, a, o = e.style;
        return t = t.replace(Me, "-$1").toLowerCase(),
        (i = e.ownerDocument.defaultView) && (r = i.getComputedStyle(e, null)) && (n = r.getPropertyValue(t),
        "" === n && !O.contains(e.ownerDocument.documentElement, e) && (n = O.style(e, t))),
        !O.support.pixelMargin && r && qe.test(t) && He.test(n) && (a = o.width,
        o.width = n,
        n = r.width,
        o.width = a),
        n
    }
    ),
    L.documentElement.currentStyle && (De = function(e, t) {
        var n, i, r, a = e.currentStyle && e.currentStyle[t], o = e.style;
        return null == a && o && (r = o[t]) && (a = r),
        He.test(a) && (n = o.left,
        i = e.runtimeStyle && e.runtimeStyle.left,
        i && (e.runtimeStyle.left = e.currentStyle.left),
        o.left = "fontSize" === t ? "1em" : a,
        a = o.pixelLeft + "px",
        o.left = n,
        i && (e.runtimeStyle.left = i)),
        "" === a ? "auto" : a
    }
    ),
    Se = Ae || De,
    O.each(["height", "width"], function(e, t) {
        O.cssHooks[t] = {
            get: function(e, n, i) {
                if (n)
                    return 0 !== e.offsetWidth ? g(e, t, i) : O.swap(e, Pe, function() {
                        return g(e, t, i)
                    })
            },
            set: function(e, t) {
                return Oe.test(t) ? t + "px" : t
            }
        }
    }),
    O.support.opacity || (O.cssHooks.opacity = {
        get: function(e, t) {
            return Fe.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , i = e.currentStyle
              , r = O.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , a = i && i.filter || n.filter || "";
            n.zoom = 1,
            t >= 1 && "" === O.trim(a.replace(Le, "")) && (n.removeAttribute("filter"),
            i && !i.filter) || (n.filter = Le.test(a) ? a.replace(Le, r) : a + " " + r)
        }
    }),
    O(function() {
        O.support.reliableMarginRight || (O.cssHooks.marginRight = {
            get: function(e, t) {
                return O.swap(e, {
                    display: "inline-block"
                }, function() {
                    return t ? Se(e, "margin-right") : e.style.marginRight
                })
            }
        })
    }),
    O.expr && O.expr.filters && (O.expr.filters.hidden = function(e) {
        var t = e.offsetWidth
          , n = e.offsetHeight;
        return 0 === t && 0 === n || !O.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || O.css(e, "display"))
    }
    ,
    O.expr.filters.visible = function(e) {
        return !O.expr.filters.hidden(e)
    }
    ),
    O.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        O.cssHooks[e + t] = {
            expand: function(n) {
                var i, r = "string" == typeof n ? n.split(" ") : [n], a = {};
                for (i = 0; i < 4; i++)
                    a[e + Be[i] + t] = r[i] || r[i - 2] || r[0];
                return a
            }
        }
    });
    var We, ze, Re = /%20/g, $e = /\[\]$/, Xe = /\r?\n/g, Ue = /#.*$/, Ve = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ge = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Ye = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Ke = /^(?:GET|HEAD)$/, Qe = /^\/\//, Je = /\?/, Ze = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, et = /^(?:select|textarea)/i, tt = /\s+/, nt = /([?&])_=[^&]*/, it = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, rt = O.fn.load, at = {}, ot = {}, st = ["*/"] + ["*"];
    try {
        We = M.href
    } catch (lt) {
        We = L.createElement("a"),
        We.href = "",
        We = We.href
    }
    ze = it.exec(We.toLowerCase()) || [],
    O.fn.extend({
        load: function(e, n, i) {
            if ("string" != typeof e && rt)
                return rt.apply(this, arguments);
            if (!this.length)
                return this;
            var r = e.indexOf(" ");
            if (r >= 0) {
                var a = e.slice(r, e.length);
                e = e.slice(0, r)
            }
            var o = "GET";
            n && (O.isFunction(n) ? (i = n,
            n = t) : "object" == typeof n && (n = O.param(n, O.ajaxSettings.traditional),
            o = "POST"));
            var s = this;
            return O.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: n,
                complete: function(e, t, n) {
                    n = e.responseText,
                    e.isResolved() && (e.done(function(e) {
                        n = e
                    }),
                    s.html(a ? O("<div>").append(n.replace(Ze, "")).find(a) : n)),
                    i && s.each(i, [n, t, e])
                }
            }),
            this
        },
        serialize: function() {
            return O.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? O.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || et.test(this.nodeName) || Ge.test(this.type))
            }).map(function(e, t) {
                var n = O(this).val();
                return null == n ? null : O.isArray(n) ? O.map(n, function(e, n) {
                    return {
                        name: t.name,
                        value: e.replace(Xe, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Xe, "\r\n")
                }
            }).get()
        }
    }),
    O.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        O.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    O.each(["get", "post"], function(e, n) {
        O[n] = function(e, i, r, a) {
            return O.isFunction(i) && (a = a || r,
            r = i,
            i = t),
            O.ajax({
                type: n,
                url: e,
                data: i,
                success: r,
                dataType: a
            })
        }
    }),
    O.extend({
        getScript: function(e, n) {
            return O.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return O.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? d(e, O.ajaxSettings) : (t = e,
            e = O.ajaxSettings),
            d(e, t),
            e
        },
        ajaxSettings: {
            url: We,
            isLocal: Ye.test(ze[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": st
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": O.parseJSON,
                "text xml": O.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: h(at),
        ajaxTransport: h(ot),
        ajax: function(e, n) {
            function i(e, n, i, o) {
                if (2 !== _) {
                    _ = 2,
                    l && clearTimeout(l),
                    s = t,
                    a = o || "",
                    T.readyState = e > 0 ? 4 : 0;
                    var f, p, h, w, E, N = n, k = i ? u(g, T, i) : t;
                    if (e >= 200 && e < 300 || 304 === e)
                        if (g.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (O.lastModified[r] = w),
                        (E = T.getResponseHeader("Etag")) && (O.etag[r] = E)),
                        304 === e)
                            N = "notmodified",
                            f = !0;
                        else
                            try {
                                p = c(g, k),
                                N = "success",
                                f = !0
                            } catch (j) {
                                N = "parsererror",
                                h = j
                            }
                    else
                        h = N,
                        N && !e || (N = "error",
                        e < 0 && (e = 0));
                    T.status = e,
                    T.statusText = "" + (n || N),
                    f ? y.resolveWith(m, [p, N, T]) : y.rejectWith(m, [T, N, h]),
                    T.statusCode(x),
                    x = t,
                    d && v.trigger("ajax" + (f ? "Success" : "Error"), [T, g, f ? p : h]),
                    b.fireWith(m, [T, N]),
                    d && (v.trigger("ajaxComplete", [T, g]),
                    --O.active || O.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof e && (n = e,
            e = t),
            n = n || {};
            var r, a, o, s, l, f, d, h, g = O.ajaxSetup({}, n), m = g.context || g, v = m !== g && (m.nodeType || m instanceof O) ? O(m) : O.event, y = O.Deferred(), b = O.Callbacks("once memory"), x = g.statusCode || {}, w = {}, E = {}, _ = 0, T = {
                readyState: 0,
                setRequestHeader: function(e, t) {
                    if (!_) {
                        var n = e.toLowerCase();
                        e = E[n] = E[n] || e,
                        w[e] = t
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return 2 === _ ? a : null
                },
                getResponseHeader: function(e) {
                    var n;
                    if (2 === _) {
                        if (!o)
                            for (o = {}; n = Ve.exec(a); )
                                o[n[1].toLowerCase()] = n[2];
                        n = o[e.toLowerCase()]
                    }
                    return n === t ? null : n
                },
                overrideMimeType: function(e) {
                    return _ || (g.mimeType = e),
                    this
                },
                abort: function(e) {
                    return e = e || "abort",
                    s && s.abort(e),
                    i(0, e),
                    this
                }
            };
            if (y.promise(T),
            T.success = T.done,
            T.error = T.fail,
            T.complete = b.add,
            T.statusCode = function(e) {
                if (e) {
                    var t;
                    if (_ < 2)
                        for (t in e)
                            x[t] = [x[t], e[t]];
                    else
                        t = e[T.status],
                        T.then(t, t)
                }
                return this
            }
            ,
            g.url = ((e || g.url) + "").replace(Ue, "").replace(Qe, ze[1] + "//"),
            g.dataTypes = O.trim(g.dataType || "*").toLowerCase().split(tt),
            null == g.crossDomain && (f = it.exec(g.url.toLowerCase()),
            g.crossDomain = !(!f || f[1] == ze[1] && f[2] == ze[2] && (f[3] || ("http:" === f[1] ? 80 : 443)) == (ze[3] || ("http:" === ze[1] ? 80 : 443)))),
            g.data && g.processData && "string" != typeof g.data && (g.data = O.param(g.data, g.traditional)),
            p(at, g, n, T),
            2 === _)
                return !1;
            if (d = g.global,
            g.type = g.type.toUpperCase(),
            g.hasContent = !Ke.test(g.type),
            d && 0 === O.active++ && O.event.trigger("ajaxStart"),
            !g.hasContent && (g.data && (g.url += (Je.test(g.url) ? "&" : "?") + g.data,
            delete g.data),
            r = g.url,
            g.cache === !1)) {
                var N = O.now()
                  , k = g.url.replace(nt, "$1_=" + N);
                g.url = k + (k === g.url ? (Je.test(g.url) ? "&" : "?") + "_=" + N : "")
            }
            (g.data && g.hasContent && g.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", g.contentType),
            g.ifModified && (r = r || g.url,
            O.lastModified[r] && T.setRequestHeader("If-Modified-Since", O.lastModified[r]),
            O.etag[r] && T.setRequestHeader("If-None-Match", O.etag[r])),
            T.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + st + "; q=0.01" : "") : g.accepts["*"]);
            for (h in g.headers)
                T.setRequestHeader(h, g.headers[h]);
            if (g.beforeSend && (g.beforeSend.call(m, T, g) === !1 || 2 === _))
                return T.abort(),
                !1;
            for (h in {
                success: 1,
                error: 1,
                complete: 1
            })
                T[h](g[h]);
            if (s = p(ot, g, n, T)) {
                T.readyState = 1,
                d && v.trigger("ajaxSend", [T, g]),
                g.async && g.timeout > 0 && (l = setTimeout(function() {
                    T.abort("timeout")
                }, g.timeout));
                try {
                    _ = 1,
                    s.send(w, i)
                } catch (j) {
                    if (!(_ < 2))
                        throw j;
                    i(-1, j)
                }
            } else
                i(-1, "No Transport");
            return T
        },
        param: function(e, n) {
            var i = []
              , r = function(e, t) {
                t = O.isFunction(t) ? t() : t,
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (n === t && (n = O.ajaxSettings.traditional),
            O.isArray(e) || e.jquery && !O.isPlainObject(e))
                O.each(e, function() {
                    r(this.name, this.value)
                });
            else
                for (var a in e)
                    f(a, e[a], n, r);
            return i.join("&").replace(Re, "+")
        }
    }),
    O.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var ct = O.now()
      , ut = /(\=)\?(&|$)|\?\?/i;
    O.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return O.expando + "_" + ct++
        }
    }),
    O.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r = "string" == typeof t.data && /^application\/x\-www\-form\-urlencoded/.test(t.contentType);
        if ("jsonp" === t.dataTypes[0] || t.jsonp !== !1 && (ut.test(t.url) || r && ut.test(t.data))) {
            var a, o = t.jsonpCallback = O.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s = e[o], l = t.url, c = t.data, u = "$1" + o + "$2";
            return t.jsonp !== !1 && (l = l.replace(ut, u),
            t.url === l && (r && (c = c.replace(ut, u)),
            t.data === c && (l += (/\?/.test(l) ? "&" : "?") + t.jsonp + "=" + o))),
            t.url = l,
            t.data = c,
            e[o] = function(e) {
                a = [e]
            }
            ,
            i.always(function() {
                e[o] = s,
                a && O.isFunction(s) && e[o](a[0])
            }),
            t.converters["script json"] = function() {
                return a || O.error(o + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            "script"
        }
    }),
    O.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return O.globalEval(e),
                e
            }
        }
    }),
    O.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    O.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, i = L.head || L.getElementsByTagName("head")[0] || L.documentElement;
            return {
                send: function(r, a) {
                    n = L.createElement("script"),
                    n.async = "async",
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, r) {
                        (r || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null,
                        i && n.parentNode && i.removeChild(n),
                        n = t,
                        r || a(200, "success"))
                    }
                    ,
                    i.insertBefore(n, i.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var ft, dt = !!e.ActiveXObject && function() {
        for (var e in ft)
            ft[e](0, 1)
    }
    , pt = 0;
    O.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && l() || s()
    }
    : l,
    function(e) {
        O.extend(O.support, {
            ajax: !!e,
            cors: !!e && "withCredentials"in e
        })
    }(O.ajaxSettings.xhr()),
    O.support.ajax && O.ajaxTransport(function(n) {
        if (!n.crossDomain || O.support.cors) {
            var i;
            return {
                send: function(r, a) {
                    var o, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async),
                    n.xhrFields)
                        for (s in n.xhrFields)
                            l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                    !n.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in r)
                            l.setRequestHeader(s, r[s])
                    } catch (c) {}
                    l.send(n.hasContent && n.data || null),
                    i = function(e, r) {
                        var s, c, u, f, d;
                        try {
                            if (i && (r || 4 === l.readyState))
                                if (i = t,
                                o && (l.onreadystatechange = O.noop,
                                dt && delete ft[o]),
                                r)
                                    4 !== l.readyState && l.abort();
                                else {
                                    s = l.status,
                                    u = l.getAllResponseHeaders(),
                                    f = {},
                                    d = l.responseXML,
                                    d && d.documentElement && (f.xml = d);
                                    try {
                                        f.text = l.responseText
                                    } catch (e) {}
                                    try {
                                        c = l.statusText
                                    } catch (p) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                                }
                        } catch (h) {
                            r || a(-1, h)
                        }
                        f && a(s, c, f, u)
                    }
                    ,
                    n.async && 4 !== l.readyState ? (o = ++pt,
                    dt && (ft || (ft = {},
                    O(e).unload(dt)),
                    ft[o] = i),
                    l.onreadystatechange = i) : i()
                },
                abort: function() {
                    i && i(0, 1)
                }
            }
        }
    });
    var ht, gt, mt, vt, yt = {}, bt = /^(?:toggle|show|hide)$/, xt = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, wt = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
    O.fn.extend({
        show: function(e, t, n) {
            var a, o;
            if (e || 0 === e)
                return this.animate(r("show", 3), e, t, n);
            for (var s = 0, l = this.length; s < l; s++)
                a = this[s],
                a.style && (o = a.style.display,
                !O._data(a, "olddisplay") && "none" === o && (o = a.style.display = ""),
                ("" === o && "none" === O.css(a, "display") || !O.contains(a.ownerDocument.documentElement, a)) && O._data(a, "olddisplay", i(a.nodeName)));
            for (s = 0; s < l; s++)
                a = this[s],
                a.style && (o = a.style.display,
                "" !== o && "none" !== o || (a.style.display = O._data(a, "olddisplay") || ""));
            return this
        },
        hide: function(e, t, n) {
            if (e || 0 === e)
                return this.animate(r("hide", 3), e, t, n);
            for (var i, a, o = 0, s = this.length; o < s; o++)
                i = this[o],
                i.style && (a = O.css(i, "display"),
                "none" !== a && !O._data(i, "olddisplay") && O._data(i, "olddisplay", a));
            for (o = 0; o < s; o++)
                this[o].style && (this[o].style.display = "none");
            return this
        },
        _toggle: O.fn.toggle,
        toggle: function(e, t, n) {
            var i = "boolean" == typeof e;
            return O.isFunction(e) && O.isFunction(t) ? this._toggle.apply(this, arguments) : null == e || i ? this.each(function() {
                var t = i ? e : O(this).is(":hidden");
                O(this)[t ? "show" : "hide"]()
            }) : this.animate(r("toggle", 3), e, t, n),
            this
        },
        fadeTo: function(e, t, n, i) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, r) {
            function a() {
                o.queue === !1 && O._mark(this);
                var t, n, r, a, s, l, c, u, f, d, p, h = O.extend({}, o), g = 1 === this.nodeType, m = g && O(this).is(":hidden");
                h.animatedProperties = {};
                for (r in e)
                    if (t = O.camelCase(r),
                    r !== t && (e[t] = e[r],
                    delete e[r]),
                    (s = O.cssHooks[t]) && "expand"in s) {
                        l = s.expand(e[t]),
                        delete e[t];
                        for (r in l)
                            r in e || (e[r] = l[r])
                    }
                for (t in e) {
                    if (n = e[t],
                    O.isArray(n) ? (h.animatedProperties[t] = n[1],
                    n = e[t] = n[0]) : h.animatedProperties[t] = h.specialEasing && h.specialEasing[t] || h.easing || "swing",
                    "hide" === n && m || "show" === n && !m)
                        return h.complete.call(this);
                    g && ("height" === t || "width" === t) && (h.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY],
                    "inline" === O.css(this, "display") && "none" === O.css(this, "float") && (O.support.inlineBlockNeedsLayout && "inline" !== i(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                }
                null != h.overflow && (this.style.overflow = "hidden");
                for (r in e)
                    a = new O.fx(this,h,r),
                    n = e[r],
                    bt.test(n) ? (p = O._data(this, "toggle" + r) || ("toggle" === n ? m ? "show" : "hide" : 0),
                    p ? (O._data(this, "toggle" + r, "show" === p ? "hide" : "show"),
                    a[p]()) : a[n]()) : (c = xt.exec(n),
                    u = a.cur(),
                    c ? (f = parseFloat(c[2]),
                    d = c[3] || (O.cssNumber[r] ? "" : "px"),
                    "px" !== d && (O.style(this, r, (f || 1) + d),
                    u = (f || 1) / a.cur() * u,
                    O.style(this, r, u + d)),
                    c[1] && (f = ("-=" === c[1] ? -1 : 1) * f + u),
                    a.custom(u, f, d)) : a.custom(u, n, ""));
                return !0
            }
            var o = O.speed(t, n, r);
            return O.isEmptyObject(e) ? this.each(o.complete, [!1]) : (e = O.extend({}, e),
            o.queue === !1 ? this.each(a) : this.queue(o.queue, a))
        },
        stop: function(e, n, i) {
            return "string" != typeof e && (i = n,
            n = e,
            e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                function t(e, t, n) {
                    var r = t[n];
                    O.removeData(e, n, !0),
                    r.stop(i)
                }
                var n, r = !1, a = O.timers, o = O._data(this);
                if (i || O._unmark(!0, this),
                null == e)
                    for (n in o)
                        o[n] && o[n].stop && n.indexOf(".run") === n.length - 4 && t(this, o, n);
                else
                    o[n = e + ".run"] && o[n].stop && t(this, o, n);
                for (n = a.length; n--; )
                    a[n].elem === this && (null == e || a[n].queue === e) && (i ? a[n](!0) : a[n].saveState(),
                    r = !0,
                    a.splice(n, 1));
                (!i || !r) && O.dequeue(this, e)
            })
        }
    }),
    O.each({
        slideDown: r("show", 1),
        slideUp: r("hide", 1),
        slideToggle: r("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        O.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    O.extend({
        speed: function(e, t, n) {
            var i = e && "object" == typeof e ? O.extend({}, e) : {
                complete: n || !n && t || O.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !O.isFunction(t) && t
            };
            return i.duration = O.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in O.fx.speeds ? O.fx.speeds[i.duration] : O.fx.speeds._default,
            null != i.queue && i.queue !== !0 || (i.queue = "fx"),
            i.old = i.complete,
            i.complete = function(e) {
                O.isFunction(i.old) && i.old.call(this),
                i.queue ? O.dequeue(this, i.queue) : e !== !1 && O._unmark(this)
            }
            ,
            i
        },
        easing: {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return -Math.cos(e * Math.PI) / 2 + .5
            }
        },
        timers: [],
        fx: function(e, t, n) {
            this.options = t,
            this.elem = e,
            this.prop = n,
            t.orig = t.orig || {}
        }
    }),
    O.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (O.fx.step[this.prop] || O.fx.step._default)(this)
        },
        cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop]))
                return this.elem[this.prop];
            var e, t = O.css(this.elem, this.prop);
            return isNaN(e = parseFloat(t)) ? t && "auto" !== t ? t : 0 : e
        },
        custom: function(e, n, i) {
            function r(e) {
                return a.step(e)
            }
            var a = this
              , s = O.fx;
            this.startTime = vt || o(),
            this.end = n,
            this.now = this.start = e,
            this.pos = this.state = 0,
            this.unit = i || this.unit || (O.cssNumber[this.prop] ? "" : "px"),
            r.queue = this.options.queue,
            r.elem = this.elem,
            r.saveState = function() {
                O._data(a.elem, "fxshow" + a.prop) === t && (a.options.hide ? O._data(a.elem, "fxshow" + a.prop, a.start) : a.options.show && O._data(a.elem, "fxshow" + a.prop, a.end))
            }
            ,
            r() && O.timers.push(r) && !mt && (mt = setInterval(s.tick, s.interval))
        },
        show: function() {
            var e = O._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || O.style(this.elem, this.prop),
            this.options.show = !0,
            e !== t ? this.custom(this.cur(), e) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()),
            O(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = O._data(this.elem, "fxshow" + this.prop) || O.style(this.elem, this.prop),
            this.options.hide = !0,
            this.custom(this.cur(), 0)
        },
        step: function(e) {
            var t, n, i, r = vt || o(), a = !0, s = this.elem, l = this.options;
            if (e || r >= l.duration + this.startTime) {
                this.now = this.end,
                this.pos = this.state = 1,
                this.update(),
                l.animatedProperties[this.prop] = !0;
                for (t in l.animatedProperties)
                    l.animatedProperties[t] !== !0 && (a = !1);
                if (a) {
                    if (null != l.overflow && !O.support.shrinkWrapBlocks && O.each(["", "X", "Y"], function(e, t) {
                        s.style["overflow" + t] = l.overflow[e]
                    }),
                    l.hide && O(s).hide(),
                    l.hide || l.show)
                        for (t in l.animatedProperties)
                            O.style(s, t, l.orig[t]),
                            O.removeData(s, "fxshow" + t, !0),
                            O.removeData(s, "toggle" + t, !0);
                    i = l.complete,
                    i && (l.complete = !1,
                    i.call(s))
                }
                return !1
            }
            return l.duration == 1 / 0 ? this.now = r : (n = r - this.startTime,
            this.state = n / l.duration,
            this.pos = O.easing[l.animatedProperties[this.prop]](this.state, n, 0, 1, l.duration),
            this.now = this.start + (this.end - this.start) * this.pos),
            this.update(),
            !0
        }
    },
    O.extend(O.fx, {
        tick: function() {
            for (var e, t = O.timers, n = 0; n < t.length; n++)
                e = t[n],
                !e() && t[n] === e && t.splice(n--, 1);
            t.length || O.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(mt),
            mt = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(e) {
                O.style(e.elem, "opacity", e.now)
            },
            _default: function(e) {
                e.elem.style && null != e.elem.style[e.prop] ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
            }
        }
    }),
    O.each(wt.concat.apply([], wt), function(e, t) {
        t.indexOf("margin") && (O.fx.step[t] = function(e) {
            O.style(e.elem, t, Math.max(0, e.now) + e.unit)
        }
        )
    }),
    O.expr && O.expr.filters && (O.expr.filters.animated = function(e) {
        return O.grep(O.timers, function(t) {
            return e === t.elem
        }).length
    }
    );
    var Et, _t = /^t(?:able|d|h)$/i, Tt = /^(?:body|html)$/i;
    Et = "getBoundingClientRect"in L.documentElement ? function(e, t, i, r) {
        try {
            r = e.getBoundingClientRect()
        } catch (a) {}
        if (!r || !O.contains(i, e))
            return r ? {
                top: r.top,
                left: r.left
            } : {
                top: 0,
                left: 0
            };
        var o = t.body
          , s = n(t)
          , l = i.clientTop || o.clientTop || 0
          , c = i.clientLeft || o.clientLeft || 0
          , u = s.pageYOffset || O.support.boxModel && i.scrollTop || o.scrollTop
          , f = s.pageXOffset || O.support.boxModel && i.scrollLeft || o.scrollLeft
          , d = r.top + u - l
          , p = r.left + f - c;
        return {
            top: d,
            left: p
        }
    }
    : function(e, t, n) {
        for (var i, r = e.offsetParent, a = e, o = t.body, s = t.defaultView, l = s ? s.getComputedStyle(e, null) : e.currentStyle, c = e.offsetTop, u = e.offsetLeft; (e = e.parentNode) && e !== o && e !== n && (!O.support.fixedPosition || "fixed" !== l.position); )
            i = s ? s.getComputedStyle(e, null) : e.currentStyle,
            c -= e.scrollTop,
            u -= e.scrollLeft,
            e === r && (c += e.offsetTop,
            u += e.offsetLeft,
            O.support.doesNotAddBorder && (!O.support.doesAddBorderForTableAndCells || !_t.test(e.nodeName)) && (c += parseFloat(i.borderTopWidth) || 0,
            u += parseFloat(i.borderLeftWidth) || 0),
            a = r,
            r = e.offsetParent),
            O.support.subtractsBorderForOverflowNotVisible && "visible" !== i.overflow && (c += parseFloat(i.borderTopWidth) || 0,
            u += parseFloat(i.borderLeftWidth) || 0),
            l = i;
        return "relative" !== l.position && "static" !== l.position || (c += o.offsetTop,
        u += o.offsetLeft),
        O.support.fixedPosition && "fixed" === l.position && (c += Math.max(n.scrollTop, o.scrollTop),
        u += Math.max(n.scrollLeft, o.scrollLeft)),
        {
            top: c,
            left: u
        }
    }
    ,
    O.fn.offset = function(e) {
        if (arguments.length)
            return e === t ? this : this.each(function(t) {
                O.offset.setOffset(this, e, t)
            });
        var n = this[0]
          , i = n && n.ownerDocument;
        return i ? n === i.body ? O.offset.bodyOffset(n) : Et(n, i, i.documentElement) : null
    }
    ,
    O.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop
              , n = e.offsetLeft;
            return O.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(O.css(e, "marginTop")) || 0,
            n += parseFloat(O.css(e, "marginLeft")) || 0),
            {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var i = O.css(e, "position");
            "static" === i && (e.style.position = "relative");
            var r, a, o = O(e), s = o.offset(), l = O.css(e, "top"), c = O.css(e, "left"), u = ("absolute" === i || "fixed" === i) && O.inArray("auto", [l, c]) > -1, f = {}, d = {};
            u ? (d = o.position(),
            r = d.top,
            a = d.left) : (r = parseFloat(l) || 0,
            a = parseFloat(c) || 0),
            O.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (f.top = t.top - s.top + r),
            null != t.left && (f.left = t.left - s.left + a),
            "using"in t ? t.using.call(e, f) : o.css(f)
        }
    },
    O.fn.extend({
        position: function() {
            if (!this[0])
                return null;
            var e = this[0]
              , t = this.offsetParent()
              , n = this.offset()
              , i = Tt.test(t[0].nodeName) ? {
                top: 0,
                left: 0
            } : t.offset();
            return n.top -= parseFloat(O.css(e, "marginTop")) || 0,
            n.left -= parseFloat(O.css(e, "marginLeft")) || 0,
            i.top += parseFloat(O.css(t[0], "borderTopWidth")) || 0,
            i.left += parseFloat(O.css(t[0], "borderLeftWidth")) || 0,
            {
                top: n.top - i.top,
                left: n.left - i.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || L.body; e && !Tt.test(e.nodeName) && "static" === O.css(e, "position"); )
                    e = e.offsetParent;
                return e
            })
        }
    }),
    O.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, i) {
        var r = /Y/.test(i);
        O.fn[e] = function(a) {
            return O.access(this, function(e, a, o) {
                var s = n(e);
                return o === t ? s ? i in s ? s[i] : O.support.boxModel && s.document.documentElement[a] || s.document.body[a] : e[a] : void (s ? s.scrollTo(r ? O(s).scrollLeft() : o, r ? o : O(s).scrollTop()) : e[a] = o)
            }, e, a, arguments.length, null)
        }
    }),
    O.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        var i = "client" + e
          , r = "scroll" + e
          , a = "offset" + e;
        O.fn["inner" + e] = function() {
            var e = this[0];
            return e ? e.style ? parseFloat(O.css(e, n, "padding")) : this[n]() : null
        }
        ,
        O.fn["outer" + e] = function(e) {
            var t = this[0];
            return t ? t.style ? parseFloat(O.css(t, n, e ? "margin" : "border")) : this[n]() : null
        }
        ,
        O.fn[n] = function(e) {
            return O.access(this, function(e, n, o) {
                var s, l, c, u;
                return O.isWindow(e) ? (s = e.document,
                l = s.documentElement[i],
                O.support.boxModel && l || s.body && s.body[i] || l) : 9 === e.nodeType ? (s = e.documentElement,
                s[i] >= s[r] ? s[i] : Math.max(e.body[r], s[r], e.body[a], s[a])) : o === t ? (c = O.css(e, n),
                u = parseFloat(c),
                O.isNumeric(u) ? u : c) : void O(e).css(n, o)
            }, n, e, arguments.length, null)
        }
    }),
    e.jQuery = e.$ = O,
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return O
    })
}(window),
function($) {
    $.fn.tinyscrollbar = function(e) {
        function t() {
            d.obj.bind("mousedown", n),
            f.obj.bind("mouseup", a),
            e.scroll && this.addEventListener ? (s[0].addEventListener("DOMMouseScroll", i, !1),
            s[0].addEventListener("mousewheel", i, !1)) : e.scroll && (s[0].onmousewheel = i)
        }
        function n(e) {
            return y.start = p ? e.pageX : e.pageY,
            v.start = parseInt(d.obj.css(h)),
            $(document).bind("mousemove", a),
            $(document).bind("mouseup", r),
            d.obj.bind("mouseup", r),
            !1
        }
        function i(t) {
            if (!(c.ratio >= 1)) {
                t = $.event.fix(t || window.event);
                var n = t.wheelDelta ? t.wheelDelta / 120 : -t.detail / 3;
                m -= n * e.wheel,
                m = Math.min(c[e.axis] - l[e.axis], Math.max(0, m)),
                d.obj.css(h, m / u.ratio),
                c.obj.css(h, -m),
                t.preventDefault()
            }
        }
        function r(e) {
            return $(document).unbind("mousemove", a),
            $(document).unbind("mouseup", r),
            d.obj.unbind("mouseup", r),
            !1
        }
        function a(t) {
            return c.ratio >= 1 || (v.now = Math.min(f[e.axis] - d[e.axis], Math.max(0, v.start + ((p ? t.pageX : t.pageY) - y.start))),
            m = v.now * u.ratio,
            c.obj.css(h, -m),
            d.obj.css(h, v.now)),
            !1
        }
        var o = {
            axis: "y",
            wheel: 40,
            scroll: !0
        }
          , e = $.extend(o, e)
          , s = $(this)
          , l = {
            obj: $(".viewport", this)
        }
          , c = {
            obj: $(".overview", this)
        }
          , u = {
            obj: $(".scrollbar", this)
        }
          , f = {
            obj: $(".track", u.obj)
        }
          , d = {
            obj: $(".thumb", u.obj)
        }
          , p = "x" == e.axis
          , h = p ? "left" : "top"
          , g = p ? "width" : "height"
          , m = 0
          , v = {
            start: 0,
            now: 0
        }
          , y = {};
        return this.length > 1 ? (this.each(function() {
            $(this).tinyscrollbar(e)
        }),
        this) : (this.initialize = function() {
            this.update(),
            t()
        }
        ,
        this.update = function() {
            l[e.axis] = p ? l.obj[0].offsetWidth : l.obj[0].offsetHeight,
            c[e.axis] = p ? c.obj[0].scrollWidth : c.obj[0].scrollHeight,
            c.ratio = l[e.axis] / c[e.axis],
            u.obj.toggleClass("disable", c.ratio >= 1),
            y.start = d.obj.offset()[h],
            f.obj.css(g, l[e.axis]),
            f[e.axis] = p ? f.obj[0].offsetWidth : f.obj[0].offsetHeight,
            d[e.axis] = Math.min(f[e.axis], Math.max(0, f[e.axis] * c.ratio)),
            d.obj.css(g, d[e.axis]),
            u.ratio = c[e.axis] / f[e.axis]
        }
        ,
        this.initialize())
    }
}(jQuery),
function($) {
    $.fn.lightBoxv2 = function(e) {
        function t() {
            return n(this, b),
            !1
        }
        function n(t, n) {
            if ($("embed, object, select").css({
                visibility: "hidden"
            }),
            i(),
            e.imageArray.length = 0,
            e.activeImage = 0,
            1 == n.length)
                e.imageArray.push(new Array(t.getAttribute("href"),t.getAttribute("title")));
            else
                for (var a = 0; a < n.length; a++)
                    e.imageArray.push(new Array(n[a].getAttribute("href"),n[a].getAttribute("title")));
            for (; e.imageArray[e.activeImage][0] != t.getAttribute("href"); )
                e.activeImage++;
            r(),
            $("#lightbox-nav").attr("title", "快捷键：上一张" + e.keyToPrev + "，下一张" + e.keyToNext + "，关闭" + e.keyToClose),
            $(window).trigger("jquery.lightboxClicked")
        }
        function i() {
            $("body").append('<iframe id="jquery-overlay" name="overlay"></iframe><div id="jquery-overlay-div"></div><div id="jquery-lightbox" title="快捷键：上一张p，下一张n，关闭c"><a href="#" class="im-pop-close" id="lightbox-secNav-btnClose" title="关闭"></a><div class="im-pop-view-pic" id="lightboxWrap"><div class="pic-trigger"><a href="javascript:;" id="seeFull" class="pic-zoom" title="放大图片"></a></div><div id="lightbox-container-image-box"><div id="lightbox-container-image"><img id="lightbox-image"><div id="lightbox-loading"><a href="#" id="lightbox-loading-link"><img src="' + e.imageLoading + '"></a></div></div></div><div id="lightbox-container-image-data-box"></div><a href="#" class="im-slide-prev im-icon-slide-prev" title="前一个" id="lightbox-nav-btnPrevIM"></a><a href="#" class="im-slide-next im-icon-slide-next" title="后一个" id="lightbox-nav-btnNextIM"></a></div>');
            var t = h();
            $("#jquery-overlay-div").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                zIndex: 99,
                width: t[0],
                height: t[1]
            }),
            $("#jquery-overlay").css({
                backgroundColor: "transparent",
                opacity: e.overlayOpacity,
                width: t[0],
                height: t[1]
            }).fadeIn(function() {
                x = !1;
                try {
                    $.browser.msie ? $("#lightboxWrap").css({
                        width: "100%"
                    }) : $("#lightboxWrap").css({
                        width: "100%",
                        "background-color": "rgba(0,0,0,.2)"
                    })
                } catch (e) {
                    $("#lightboxWrap").css({
                        width: "100%",
                        "background-color": "rgba(0,0,0,.2)"
                    })
                }
            });
            var n = g();
            try {
                $.browser.msie ? $("#lightboxWrap").css({
                    width: "100%"
                }) : $("#lightboxWrap").css({
                    width: "100%",
                    "background-color": "rgba(0,0,0,.2)"
                })
            } catch (i) {
                $("#lightboxWrap").css({
                    width: "100%",
                    "background-color": "rgba(0,0,0,.2)"
                })
            }
            E = !1,
            $("#seeFull").unbind("click").bind("click", v),
            w = n[1] + t[3] / 10,
            $("#jquery-lightbox").css({
                top: n[1] + t[3] / 10,
                left: "10%",
                width: "80%"
            }).show(),
            $("#jquery-overlay-div").click(function() {
                p()
            }),
            $("#lightbox-loading-link,#lightbox-secNav-btnClose").click(function() {
                return p(),
                !1
            }),
            $(window).resize(function() {
                var e = h();
                $("#jquery-overlay").css({
                    width: e[0],
                    height: e[1]
                }),
                $("#jquery-overlay-div").css({
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    zIndex: 9999,
                    width: e[0],
                    height: e[1]
                });
                var t = g();
                w = t[1] + e[3] / 10,
                $("#jquery-lightbox").css({
                    top: t[1] + e[3] / 10,
                    left: "10%"
                });
                try {
                    $.browser.msie ? $("#lightboxWrap").css({
                        width: "100%"
                    }) : $("#lightboxWrap").css({
                        width: "100%",
                        "background-color": "rgba(0,0,0,.2)"
                    })
                } catch (n) {
                    $("#lightboxWrap").css({
                        width: "100%",
                        "background-color": "rgba(0,0,0,.2)"
                    })
                }
            })
        }
        function r() {
            $("#lightbox-loading").show(),
            e.fixedNavigation ? $("#lightbox-image,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide() : $("#lightbox-image,#lightbox-nav,#lightbox-nav-btnPrevIM,#lightbox-nav-btnNextIM,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide();
            var t = new Image;
            t.onload = function() {
                $("#lightbox-image").attr("src", e.imageArray[e.activeImage][0]),
                a(t.width, t.height),
                t.onload = function() {}
            }
            ,
            t.src = e.imageArray[e.activeImage][0]
        }
        function a(t, n) {
            E = !1,
            (t > $(document).width() || n > $(document).height()) && v(),
            t > $(document).width() && (t = $(document).width() - 200),
            n > $(document).height() - 150 && (n = $(document).height() - 150);
            var i = $("#lightbox-container-image-box").width()
              , r = $("#lightbox-container-image-box").height()
              , a = t + 2 * e.containerBorderSize
              , s = n + 2 * e.containerBorderSize
              , l = i - a
              , c = r - s;
            $("#lightbox-container-image-box").animate({
                width: "90%",
                height: s
            }, e.containerResizeSpeed, function() {
                o(a)
            }),
            0 == l && 0 == c && m($.browser.msie ? 250 : 100),
            $("#lightbox-container-image-data-box").css({
                width: t
            })
        }
        function o(e) {
            $("#lightbox-loading").hide(),
            $("#lightbox-image").fadeIn(function() {
                s(),
                l()
            }),
            d(),
            $("#lightbox-container-image-box").width() < e && (E = !0),
            E ? $("#lightbox-image").css("width", "100%") : ($("#lightbox-image").removeAttr("style"),
            $("#lightbox-image").css("display", "inline"))
        }
        function s() {
            $("#lightbox-container-image-data-box").slideDown("fast"),
            $("#lightbox-image-details-caption").hide(),
            e.imageArray[e.activeImage][1],
            e.imageArray.length > 1
        }
        function l() {
            $("#lightbox-nav").show(),
            0 != e.activeImage && (e.fixedNavigation ? $("#lightbox-nav-btnPrevIM").unbind().bind("click", function() {
                return e.activeImage = e.activeImage - 1,
                r(),
                !1
            }) : $("#lightbox-nav-btnPrevIM").unbind().show().bind("click", function() {
                return e.activeImage = e.activeImage - 1,
                r(),
                !1
            })),
            e.activeImage != e.imageArray.length - 1 && (e.fixedNavigation ? $("#lightbox-nav-btnNextIM").unbind().bind("click", function() {
                return e.activeImage = e.activeImage + 1,
                r(),
                !1
            }) : $("#lightbox-nav-btnNextIM").unbind().show().bind("click", function() {
                return e.activeImage = e.activeImage + 1,
                r(),
                !1
            })),
            c()
        }
        function c() {
            $(document).keydown(function(e) {
                f(e)
            })
        }
        function u() {
            $(document).unbind()
        }
        function f(t) {
            null == t ? (keycode = event.keyCode,
            escapeKey = 27) : (keycode = t.keyCode,
            escapeKey = t.DOM_VK_ESCAPE),
            key = String.fromCharCode(keycode).toLowerCase(),
            key != e.keyToClose && "x" != key && keycode != escapeKey || p(),
            key != e.keyToPrev && 37 != keycode || 0 != e.activeImage && (e.activeImage = e.activeImage - 1,
            r(),
            u()),
            key != e.keyToNext && 39 != keycode || e.activeImage != e.imageArray.length - 1 && (e.activeImage = e.activeImage + 1,
            r(),
            u())
        }
        function d() {
            e.imageArray.length - 1 > e.activeImage && (objNext = new Image,
            objNext.src = e.imageArray[e.activeImage + 1][0]),
            e.activeImage > 0 && (objPrev = new Image,
            objPrev.src = e.imageArray[e.activeImage - 1][0])
        }
        function p() {
            $("#jquery-lightbox").remove(),
            $("#jquery-overlay-div").remove(),
            $("#jquery-overlay").fadeOut(function() {
                $("#jquery-overlay").remove()
            }),
            $("embed, object, select").css({
                visibility: "visible"
            }),
            $(window).trigger("jquery.lightboxClosed")
        }
        function h() {
            var e, t;
            window.innerHeight && window.scrollMaxY ? (e = window.innerWidth + window.scrollMaxX,
            t = window.innerHeight + window.scrollMaxY) : document.body.scrollHeight > document.body.offsetHeight ? (e = document.body.scrollWidth,
            t = document.body.scrollHeight) : (e = document.body.offsetWidth,
            t = document.body.offsetHeight);
            var n, i;
            return self.innerHeight ? (n = document.documentElement.clientWidth ? document.documentElement.clientWidth : self.innerWidth,
            i = self.innerHeight) : document.documentElement && document.documentElement.clientHeight ? (n = document.documentElement.clientWidth,
            i = document.documentElement.clientHeight) : document.body && (n = document.body.clientWidth,
            i = document.body.clientHeight),
            t < i ? pageHeight = i : pageHeight = t,
            e < n ? pageWidth = e : pageWidth = n,
            arrayPageSize = new Array(pageWidth,pageHeight,n,i),
            arrayPageSize
        }
        function g() {
            var e, t;
            return self.pageYOffset ? (t = self.pageYOffset,
            e = self.pageXOffset) : document.documentElement && document.documentElement.scrollTop ? (t = document.documentElement.scrollTop,
            e = document.documentElement.scrollLeft) : document.body && (t = document.body.scrollTop,
            e = document.body.scrollLeft),
            arrayPageScroll = new Array(e,t),
            arrayPageScroll
        }
        function m(e) {
            var t = new Date;
            n = null;
            do
                var n = new Date;
            while (n - t < e)
        }
        function v() {
            x = !0,
            $("#jquery-lightbox").removeAttr("style");
            try {
                $.browser.msie && $.browser.version < 8 && window.setTimeout(function() {
                    $("#jquery-lightbox").css({
                        top: "0px",
                        left: "0px"
                    })
                }, 0)
            } catch (e) {}
            return $("#lightboxWrap").css("height", "100%"),
            $("#jquery-lightbox").css("height", "100%"),
            $("#seeFull").removeClass("pic-zoom").addClass("back-thumbnail"),
            E && ($("#lightbox-image").removeAttr("style"),
            $("#lightbox-image").css("display", "inline")),
            $("#seeFull").unbind("click").bind("click", y),
            $("#seeFull").attr("title", "缩小图片"),
            !1
        }
        function y() {
            return x = !1,
            $("#jquery-lightbox").removeAttr("style"),
            $("#jquery-lightbox").css({
                top: w,
                left: "10%",
                width: "80%"
            }),
            $("#seeFull").addClass("pic-zoom").removeClass("back-thumbnail"),
            $("#lightbox-image").removeAttr("style"),
            E ? $("#lightbox-image").css({
                display: "inline",
                width: "100%"
            }) : ($("#lightbox-image").removeAttr("style"),
            $("#lightbox-image").css("display", "inline")),
            $("#seeFull").unbind("click").bind("click", v),
            $("#seeFull").attr("title", "放大图片"),
            !1
        }
        e = jQuery.extend({
            overlayBgColor: "#000",
            overlayOpacity: 0,
            fixedNavigation: !1,
            imageLoading: "//static.360buyimg.com/im/img/lightbox-ico-loading.gif",
            imageBtnPrev: "//static.360buyimg.com/im/img/i/20130514A.png",
            imageBtnNext: "//static.360buyimg.com/im/img/i/20130514A.png",
            imageBtnClose: "//static.360buyimg.com/im/img/lightbox-btn-close.gif",
            imageBlank: "//static.360buyimg.com/im/img/lightbox-blank.gif",
            containerBorderSize: 10,
            containerResizeSpeed: 400,
            txtImage: "Image",
            txtOf: "of",
            keyToClose: "c",
            keyToPrev: "p",
            keyToNext: "n",
            imageArray: [],
            activeImage: 0
        }, e);
        var b = this
          , x = !1
          , w = 0
          , E = !1;
        return this.unbind("click").click(t)
    }
}(jQuery),
function($) {
    var e = {
        init: function(t) {
            return this.each(function() {
                var n = this
                  , i = $(n).empty();
                n.opt = $.extend(!0, {}, $.fn.raty.defaults, t),
                i.data("settings", n.opt),
                n.opt.number = e.between(n.opt.number, 0, 20),
                "/" != n.opt.path.substring(n.opt.path.length - 1, n.opt.path.length) && (n.opt.path += "/"),
                "function" == typeof n.opt.score && (n.opt.score = n.opt.score.call(n)),
                n.opt.score && (n.opt.score = e.between(n.opt.score, 0, n.opt.number));
                for (var r = 1; r <= n.opt.number; r++)
                    $("<img />", {
                        src: n.opt.path + (!n.opt.score || n.opt.score < r ? n.opt.starOff : n.opt.starOn),
                        alt: r,
                        title: r <= n.opt.hints.length && null !== n.opt.hints[r - 1] ? n.opt.hints[r - 1] : r
                    }).appendTo(n),
                    n.opt.space && i.append(r < n.opt.number ? "&#160;" : "");
                n.stars = i.children('img:not(".raty-cancel")'),
                n.score = $("<input />", {
                    type: "hidden",
                    name: n.opt.scoreName
                }).appendTo(n),
                n.opt.score && n.opt.score > 0 && (n.score.val(n.opt.score),
                e.roundStar.call(n, n.opt.score)),
                n.opt.iconRange && e.fill.call(n, n.opt.score),
                e.setTarget.call(n, n.opt.score, n.opt.targetKeep);
                var a = n.opt.space ? 4 : 0
                  , o = n.opt.width || n.opt.number * n.opt.size + n.opt.number * a;
                n.opt.cancel && (n.cancel = $("<img />", {
                    src: n.opt.path + n.opt.cancelOff,
                    alt: "x",
                    title: n.opt.cancelHint,
                    "class": "raty-cancel"
                }),
                "left" == n.opt.cancelPlace ? i.prepend("&#160;").prepend(n.cancel) : i.append("&#160;").append(n.cancel),
                o += n.opt.size + a),
                n.opt.readOnly ? (e.fixHint.call(n),
                n.cancel && n.cancel.hide()) : (i.css("cursor", "pointer"),
                e.bindAction.call(n)),
                i.css("width", o)
            })
        },
        between: function(e, t, n) {
            return Math.min(Math.max(parseFloat(e), t), n)
        },
        bindAction: function() {
            var t = this
              , n = $(t);
            n.mouseleave(function() {
                var n = t.score.val() || void 0;
                e.initialize.call(t, n),
                e.setTarget.call(t, n, t.opt.targetKeep),
                t.opt.mouseover && t.opt.mouseover.call(t, n)
            });
            var i = t.opt.half ? "mousemove" : "mouseover";
            t.opt.cancel && t.cancel.mouseenter(function() {
                $(this).attr("src", t.opt.path + t.opt.cancelOn),
                t.stars.attr("src", t.opt.path + t.opt.starOff),
                e.setTarget.call(t, null, !0),
                t.opt.mouseover && t.opt.mouseover.call(t, null)
            }).mouseleave(function() {
                $(this).attr("src", t.opt.path + t.opt.cancelOff),
                t.opt.mouseover && t.opt.mouseover.call(t, t.score.val() || null)
            }).click(function(e) {
                t.score.removeAttr("value"),
                t.opt.click && t.opt.click.call(t, null, e)
            }),
            t.stars.bind(i, function(i) {
                var r = parseInt(this.alt, 10);
                if (t.opt.half) {
                    var a = parseFloat((i.pageX - $(this).offset().left) / t.opt.size)
                      , o = a > .5 ? 1 : .5;
                    r = parseFloat(this.alt) - 1 + o,
                    e.fill.call(t, r),
                    t.opt.precision && (r = r - o + a),
                    e.showHalf.call(t, r)
                } else
                    e.fill.call(t, r);
                n.data("score", r),
                e.setTarget.call(t, r, !0),
                t.opt.mouseover && t.opt.mouseover.call(t, r, i)
            }).click(function(e) {
                t.score.val(t.opt.half || t.opt.precision ? n.data("score") : this.alt),
                t.opt.click && t.opt.click.call(t, t.score.val(), e)
            })
        },
        cancel: function(t) {
            return $(this).each(function() {
                var n = this
                  , i = $(n);
                return i.data("readonly") === !0 ? this : (t ? e.click.call(n, null) : e.score.call(n, null),
                void n.score.removeAttr("value"))
            })
        },
        click: function(t) {
            return $(this).each(function() {
                return $(this).data("readonly") === !0 ? this : (e.initialize.call(this, t),
                this.opt.click ? this.opt.click.call(this, t) : e.error.call(this, 'you must add the "click: function(score, evt) { }" callback.'),
                void e.setTarget.call(this, t, !0))
            })
        },
        error: function(e) {
            $(this).html(e),
            $.error(e)
        },
        fill: function(e) {
            for (var t, n, i, r = this, a = r.stars.length, o = 0, s = 1; s <= a; s++)
                t = r.stars.eq(s - 1),
                r.opt.iconRange && r.opt.iconRange.length > o ? (n = r.opt.iconRange[o],
                i = r.opt.single ? s == e ? n.on || r.opt.starOn : n.off || r.opt.starOff : s <= e ? n.on || r.opt.starOn : n.off || r.opt.starOff,
                s <= n.range && t.attr("src", r.opt.path + i),
                s == n.range && o++) : (i = r.opt.single ? s == e ? r.opt.starOn : r.opt.starOff : s <= e ? r.opt.starOn : r.opt.starOff,
                t.attr("src", r.opt.path + i))
        },
        fixHint: function() {
            var e = $(this)
              , t = parseInt(this.score.val(), 10)
              , n = this.opt.noRatedMsg;
            !isNaN(t) && t > 0 && (n = t <= this.opt.hints.length && null !== this.opt.hints[t - 1] ? this.opt.hints[t - 1] : t),
            e.data("readonly", !0).css("cursor", "default").attr("title", n),
            this.score.attr("readonly", "readonly"),
            this.stars.attr("title", n)
        },
        getScore: function() {
            var e, t = [];
            return $(this).each(function() {
                e = this.score.val(),
                t.push(e ? parseFloat(e) : void 0)
            }),
            t.length > 1 ? t : t[0]
        },
        readOnly: function(t) {
            return this.each(function() {
                var n = $(this);
                return n.data("readonly") === t ? this : (this.cancel && (t ? this.cancel.hide() : this.cancel.show()),
                t ? (n.unbind(),
                n.children("img").unbind(),
                e.fixHint.call(this)) : (e.bindAction.call(this),
                e.unfixHint.call(this)),
                void n.data("readonly", t))
            })
        },
        reload: function() {
            return e.set.call(this, {})
        },
        roundStar: function(e) {
            var t = (e - Math.floor(e)).toFixed(2);
            if (t > this.opt.round.down) {
                var n = this.opt.starOn;
                t < this.opt.round.up && this.opt.halfShow ? n = this.opt.starHalf : t < this.opt.round.full && (n = this.opt.starOff),
                this.stars.eq(Math.ceil(e) - 1).attr("src", this.opt.path + n)
            }
        },
        score: function() {
            return arguments.length ? e.setScore.apply(this, arguments) : e.getScore.call(this)
        },
        set: function(e) {
            return this.each(function() {
                var t = $(this)
                  , n = t.data("settings")
                  , i = t.clone().removeAttr("style").insertBefore(t);
                t.remove(),
                i.raty($.extend(n, e))
            }),
            $(this.selector)
        },
        setScore: function(t) {
            return $(this).each(function() {
                return $(this).data("readonly") === !0 ? this : (e.initialize.call(this, t),
                void e.setTarget.call(this, t, !0))
            })
        },
        setTarget: function(t, n) {
            if (this.opt.target) {
                var i = $(this.opt.target);
                0 == i.length && e.error.call(this, "target selector invalid or missing!");
                var r = t;
                r = n && void 0 !== r ? "hint" == this.opt.targetType ? null === r && this.opt.cancel ? this.opt.cancelHint : this.opt.hints[Math.ceil(r - 1)] : this.opt.precision ? parseFloat(r).toFixed(1) : parseInt(r, 10) : this.opt.targetText,
                this.opt.targetFormat.indexOf("{score}") < 0 && e.error.call(this, 'template "{score}" missing!'),
                null !== t && (r = this.opt.targetFormat.toString().replace("{score}", r)),
                i.is(":input") ? i.val(r) : i.html(r)
            }
        },
        showHalf: function(e) {
            var t = (e - Math.floor(e)).toFixed(1);
            t > 0 && t < .6 && this.stars.eq(Math.ceil(e) - 1).attr("src", this.opt.path + this.opt.starHalf)
        },
        initialize: function(t) {
            t = t ? e.between(t, 0, this.opt.number) : 0,
            e.fill.call(this, t),
            t > 0 && (this.opt.halfShow && e.roundStar.call(this, t),
            this.score.val(t))
        },
        unfixHint: function() {
            for (var e = 0; e < this.opt.number; e++)
                this.stars.eq(e).attr("title", e < this.opt.hints.length && null !== this.opt.hints[e] ? this.opt.hints[e] : e);
            $(this).data("readonly", !1).css("cursor", "pointer").removeAttr("title"),
            this.score.attr("readonly", "readonly")
        }
    };
    $.fn.raty = function(t) {
        return e[t] ? e[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void $.error("Method " + t + " does not exist!") : e.init.apply(this, arguments)
    }
    ,
    $.fn.raty.defaults = {
        cancel: !1,
        cancelHint: "cancel this rating!",
        cancelOff: "cancel-off.png",
        cancelOn: "cancel-on.png",
        cancelPlace: "left",
        click: void 0,
        half: !1,
        halfShow: !0,
        hints: ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
        iconRange: void 0,
        mouseover: void 0,
        noRatedMsg: "not rated yet",
        number: 10,
        path: "img/",
        precision: !1,
        round: {
            down: .25,
            full: .6,
            up: .76
        },
        readOnly: !1,
        score: void 0,
        scoreName: "score",
        single: !1,
        size: 16,
        space: !0,
        starHalf: "star-half.png",
        starOff: "star-off.png",
        starOn: "star-on.png",
        target: void 0,
        targetFormat: "{score}",
        targetKeep: !1,
        targetText: "",
        targetType: "hint",
        width: void 0
    }
}(jQuery),
function($) {
    function e(e) {
        $(e).hasClass("im-pop-face") || $(e).addClass("im-pop-face"),
        $(e).attr("style", "display:none");
        var i = o.expression
          , r = "<div class='im-face-tab'>"
          , a = "";
        for (var s in i)
            i[s].items && i[s].items.length > 0 && i[s].show && (t(s, e),
            n(),
            r += "<a href='javascript:void(0)' class='im-face-switch-tab' type='" + s + "'>" + i[s].name + "</a>",
            i[s].defaultShow && (a = s));
        r += "</div>",
        $(e).append("<div id='__view_div__' style='display:none;'></div>"),
        $(e).append(r),
        $(".im-face-tab .im-face-switch-tab").click(function() {
            var e = $(this).attr("type");
            return $("table.im-table-face").hide(),
            $("table.im-table-face[type='" + e + "']").show(),
            $(".im-face-tab .im-face-switch-tab").removeClass("current"),
            $(this).addClass("current"),
            !1
        }),
        $(".im-face-switch-tab[type='" + a + "']").click()
    }
    function t(e, t) {
        for (var n = o.expression[e], i = n.items, r = '<table class="im-table-face" cellspacing="0" cellpadding="0" type="' + e + '">', a = 0, s = i.length; a < s; a++) {
            a % n.lineSize == 0 && (r += 0 == a ? "<tr>" : "</tr><tr>");
            var l = n.getPosition(a);
            r += "<td><span  id='" + i[a].id + "' class='" + n.style + "' style='background-position:" + l + "'></span></td>"
        }
        i.length % n.lineSize != 0 && (r += "</tr>"),
        r += "</table>",
        $(t).append(r)
    }
    function n(e) {
        $(".im-table-face td").unbind("click").bind("click", function(e) {
            return o.imgClick(e),
            !1
        }).unbind("mouseover").bind("mouseover", function(e) {
            var t = $(e.target)
              , n = r(t.attr("id"))
              , a = null
              , o = -1;
            return !!t && (null != n && (a = n.expression,
            o = n.index),
            !(null == a || o < 0) && (position = a.getViewPosition(o),
            $("#__view_div__").attr("class", "").addClass(a.viewStyle).show().html(i(t.attr("id"))).css("top", position.top).css("left", position.left),
            !1))
        }).unbind("mouseout").bind("mouseout", function(e) {
            return $("#__view_div__").hide(),
            !1
        })
    }
    function i(e) {
        for (var t in o.expression) {
            var n = o.expression[t];
            if (n.items && n.items.length > 0)
                for (var i = 0; i < n.items.length; i++)
                    if (n.items[i].id == e) {
                        var r = n.path + n.items[i].img
                          , a = "undefined" != typeof n.items[i].alias ? n.items[i].alias : n.items[i].name;
                        return '<img name="' + n.items[i].name + '"  alias="' + a + '" src="' + r + '"> '
                    }
        }
        return ""
    }
    function r(e) {
        for (var t in o.expression) {
            var n = o.expression[t];
            if (n.items && n.items.length > 0)
                for (var i = 0; i < n.items.length; i++)
                    if (n.items[i].id == e)
                        return {
                            expression: n,
                            index: i
                        }
        }
        return null
    }
    function a(e, t) {
        var n = e.path + t.img;
        return '<img src="' + n + '"> '
    }
    var o;
    $.fn.jdExpressionv4 = function(t) {
        o = $.extend({}, $.fn.jdExpressionv4.defaults, t),
        e(this),
        o.parseWithAlias = !1
    }
    ,
    $.fn.jdExpressionv4.replaceName = function(e) {
        for (var t in o.expression)
            for (var n = o.expression[t].items, i = 0; i < n.length; i++) {
                var r = n[i].name
                  , s = a(o.expression[t], n[i])
                  , l = new RegExp(r.replace(/(^\s*)|(\s*$)/g, ""),"gim")
                  , c = e.replace(l, s);
                if (c == e && n[i].alias) {
                    r = n[i].alias,
                    l = new RegExp(r.replace(/(^\s*)|(\s*$)/g, ""),"gim");
                    var u = c.replace(l, s);
                    c != u && (o.parseWithAlias = !0),
                    c = u
                } else
                    o.parseWithAlias = !1;
                e = c
            }
        return e
    }
    ,
    $.fn.jdExpressionv4.replaceImg = function(e) {
        for (var t in o.expression)
            for (var n = o.expression[t].items, i = 0; i < n.length; i++) {
                var r = a(o.expression[t], n[i]);
                r = r.replace(/(^\s*)|(\s*$)/g, "");
                var s = new RegExp(r,"gim");
                e = o.parseWithAlias && n[i].alias ? e.replace(s, n[i].alias) : e.replace(s, n[i].name)
            }
        return e
    }
    ,
    $.fn.jdExpressionv4.defaults = {
        expression: {
            classic: {
                items: [{
                    id: "_aixin_",
                    name: "#E-爱心",
                    alias: "#E-s01",
                    img: "s01.gif"
                }, {
                    id: "_anwei_",
                    name: "#E-安慰",
                    alias: "#E-s02",
                    img: "s02.gif"
                }, {
                    id: "_bishi_",
                    name: "#E-鄙视",
                    alias: "#E-s03",
                    img: "s03.gif"
                }, {
                    id: "_daku_",
                    name: "#E-大哭",
                    alias: "#E-s04",
                    img: "s04.gif"
                }, {
                    id: "_deyi_",
                    name: "#E-得意",
                    alias: "#E-s05",
                    img: "s05.gif"
                }, {
                    id: "_dangao_",
                    name: "#E-蛋糕",
                    alias: "#E-s06",
                    img: "s06.gif"
                }, {
                    id: "_feiwen_",
                    name: "#E-飞吻",
                    alias: "#E-s07",
                    img: "s07.gif"
                }, {
                    id: "_fennu_",
                    name: "#E-愤怒",
                    alias: "#E-s08",
                    img: "s08.gif"
                }, {
                    id: "_guzhang_",
                    name: "#E-鼓掌",
                    alias: "#E-s09",
                    img: "s09.gif"
                }, {
                    id: "_guilian_",
                    name: "#E-鬼脸",
                    alias: "#E-s10",
                    img: "s10.gif"
                }, {
                    id: "_haixiu_",
                    name: "#E-害羞",
                    alias: "#E-s11",
                    img: "s11.gif"
                }, {
                    id: "_liuhan_",
                    name: "#E-流汗",
                    alias: "#E-s12",
                    img: "s12.gif"
                }, {
                    id: "_heixian_",
                    name: "#E-黑线",
                    alias: "#E-s13",
                    img: "s13.gif"
                }, {
                    id: "_aoman_",
                    name: "#E-傲慢",
                    alias: "#E-s14",
                    img: "s14.gif"
                }, {
                    id: "_jianxiao_",
                    name: "#E-奸笑",
                    alias: "#E-s15",
                    img: "s15.gif"
                }, {
                    id: "_jingya_",
                    name: "#E-惊讶",
                    alias: "#E-s16",
                    img: "s16.gif"
                }, {
                    id: "_kelian_",
                    name: "#E-可怜",
                    alias: "#E-s17",
                    img: "s17.gif"
                }, {
                    id: "_kuku_",
                    name: "#E-酷酷",
                    alias: "#E-s18",
                    img: "s18.gif"
                }, {
                    id: "_liwu_",
                    name: "#E-礼物",
                    alias: "#E-s19",
                    img: "s19.gif"
                }, {
                    id: "_hanxiao_",
                    name: "#E-憨笑",
                    alias: "#E-s20",
                    img: "s20.gif"
                }, {
                    id: "_huaduo_",
                    name: "#E-花朵",
                    alias: "#E-s21",
                    img: "s21.gif"
                }, {
                    id: "_xiangwen_",
                    name: "#E-香吻",
                    alias: "#E-s22",
                    img: "s22.gif"
                }, {
                    id: "_sese_",
                    name: "#E-色色",
                    alias: "#E-s23",
                    img: "s23.gif"
                }, {
                    id: "_shengbing_",
                    name: "#E-生病",
                    alias: "#E-s24",
                    img: "s24.gif"
                }, {
                    id: "_shuaiyang_",
                    name: "#E-衰样",
                    alias: "#E-s25",
                    img: "s25.gif"
                }, {
                    id: "_keshui_",
                    name: "#E-瞌睡",
                    alias: "#E-s26",
                    img: "s26.gif"
                }, {
                    id: "_tanqi_",
                    name: "#E-叹气",
                    alias: "#E-s27",
                    img: "s27.gif"
                }, {
                    id: "_touxiao_",
                    name: "#E-偷笑",
                    alias: "#E-s28",
                    img: "s28.gif"
                }, {
                    id: "_outu_",
                    name: "#E-呕吐",
                    alias: "#E-s29",
                    img: "s29.gif"
                }, {
                    id: "_tiaopi_",
                    name: "#E-调皮",
                    alias: "#E-s30",
                    img: "s30.gif"
                }, {
                    id: "_weixiao_",
                    name: "#E-微笑",
                    alias: "#E-s31",
                    img: "s31.gif"
                }, {
                    id: "_beishang_",
                    name: "#E-悲伤",
                    alias: "#E-s32",
                    img: "s32.gif"
                }, {
                    id: "_woshou_",
                    name: "#E-握手",
                    alias: "#E-s33",
                    img: "s33.gif"
                }, {
                    id: "_wenhao_",
                    name: "#E-问号",
                    alias: "#E-s34",
                    img: "s34.gif"
                }, {
                    id: "_yinxian_",
                    name: "#E-阴险",
                    alias: "#E-s35",
                    img: "s35.gif"
                }, {
                    id: "_yongbao_",
                    name: "#E-拥抱",
                    alias: "#E-s36",
                    img: "s36.gif"
                }, {
                    id: "_xuanyun_",
                    name: "#E-眩晕",
                    alias: "#E-s37",
                    img: "s37.gif"
                }, {
                    id: "_baibai_",
                    name: "#E-拜拜",
                    alias: "#E-s38",
                    img: "s38.gif"
                }, {
                    id: "_henbang_",
                    name: "#E-很棒",
                    alias: "#E-s39",
                    img: "s39.gif"
                }, {
                    id: "_zhuakuang_",
                    name: "#E-抓狂",
                    alias: "#E-s40",
                    img: "s40.gif"
                }, {
                    id: "_baiyan_",
                    name: "#E-白眼",
                    alias: "#E-s41",
                    img: "s41.gif"
                }, {
                    id: "_bizui_",
                    name: "#E-闭嘴",
                    alias: "#E-s42",
                    img: "s42.gif"
                }, {
                    id: "_dabing_",
                    name: "#E-大兵",
                    alias: "#E-s43",
                    img: "s43.gif"
                }, {
                    id: "_dengpao_",
                    name: "#E-灯泡",
                    alias: "#E-s44",
                    img: "s44.gif"
                }, {
                    id: "_dianhua_",
                    name: "#E-电话",
                    alias: "#E-s45",
                    img: "s45.gif"
                }, {
                    id: "_fadai_",
                    name: "#E-发呆",
                    alias: "#E-s46",
                    img: "s46.gif"
                }, {
                    id: "_fankun_",
                    name: "#E-犯困",
                    alias: "#E-s47",
                    img: "s47.gif"
                }, {
                    id: "_feiniao_",
                    name: "#E-飞鸟",
                    alias: "#E-s48",
                    img: "s48.gif"
                }, {
                    id: "_fendou_",
                    name: "#E-奋斗",
                    alias: "#E-s49",
                    img: "s49.gif"
                }, {
                    id: "_fengkuang_",
                    name: "#E-疯狂",
                    alias: "#E-s50",
                    img: "s50.gif"
                }, {
                    id: "_ganga_",
                    name: "#E-尴尬",
                    alias: "#E-s51",
                    img: "s51.gif"
                }, {
                    id: "_gaoxing_",
                    name: "#E-高兴",
                    alias: "#E-s52",
                    img: "s52.gif"
                }, {
                    id: "_jida_",
                    name: "#E-击打",
                    alias: "#E-s53",
                    img: "s53.gif"
                }, {
                    id: "_jie_",
                    name: "#E-饥饿",
                    alias: "#E-s54",
                    img: "s54.gif"
                }, {
                    id: "_jingkong_",
                    name: "#E-惊恐",
                    alias: "#E-s55",
                    img: "s55.gif"
                }, {
                    id: "_kafei_",
                    name: "#E-咖啡",
                    alias: "#E-s56",
                    img: "s56.gif"
                }, {
                    id: "_keai_",
                    name: "#E-可爱",
                    alias: "#E-s57",
                    img: "s57.gif"
                }, {
                    id: "_kele_",
                    name: "#E-可乐",
                    alias: "#E-s58",
                    img: "s58.gif"
                }, {
                    id: "_kouzhao_",
                    name: "#E-口罩",
                    alias: "#E-s59",
                    img: "s59.gif"
                }, {
                    id: "_kulou_",
                    name: "#E-骷髅",
                    alias: "#E-s60",
                    img: "s60.gif"
                }, {
                    id: "_liulei_",
                    name: "#E-流泪",
                    alias: "#E-s61",
                    img: "s61.gif"
                }, {
                    id: "_mifan_",
                    name: "#E-米饭",
                    alias: "#E-s62",
                    img: "s62.gif"
                }, {
                    id: "_ningmeng_",
                    name: "#E-柠檬",
                    alias: "#E-s63",
                    img: "s63.gif"
                }, {
                    id: "_nuhuo_",
                    name: "#E-怒火",
                    alias: "#E-s64",
                    img: "s64.gif"
                }, {
                    id: "_peizui_",
                    name: "#E-撇嘴",
                    alias: "#E-s65",
                    img: "s65.gif"
                }, {
                    id: "_shengli_",
                    name: "#E-胜利",
                    alias: "#E-s66",
                    img: "s66.gif"
                }, {
                    id: "_shijian_",
                    name: "#E-时间",
                    alias: "#E-s67",
                    img: "s67.gif"
                }, {
                    id: "_taiyang_",
                    name: "#E-太阳",
                    alias: "#E-s68",
                    img: "s68.gif"
                }, {
                    id: "_zhouma_",
                    name: "#E-咒骂",
                    alias: "#E-s69",
                    img: "s69.gif"
                }, {
                    id: "_zhuzhu_",
                    name: "#E-猪猪",
                    alias: "#E-s70",
                    img: "s70.gif"
                }, {
                    id: "_zuqiu_",
                    name: "#E-足球",
                    alias: "#E-s71",
                    img: "s71.gif"
                }, {
                    id: "_zhenjing_",
                    name: "#E-震惊",
                    alias: "#E-s72",
                    img: "s72.gif"
                }],
                lineSize: 12,
                path: "//static.360buyimg.com/im/w_web/img/classic/",
                name: "经典",
                style: "im-face-item-classic",
                show: !0,
                viewStyle: "im-face-view-classic",
                defaultShow: !0,
                getPosition: function(e) {
                    var t = Math.floor(e / this.lineSize)
                      , n = (e - t * this.lineSize) % this.items.length
                      , i = ["0", "-38px", "-75px", "-114px", "-152px", "-190px", "-228px", "-266px", "-304px", "-342px", "-380px", "-418px"]
                      , r = ["0", "-37px", "-76px", "-114px", "-152px", "-189px"];
                    return i[n] + " " + r[t]
                },
                getViewPosition: function(e) {
                    var t = Math.floor(e / this.lineSize)
                      , n = (e - t * this.lineSize) % this.items.length;
                    return {
                        top: 31 * (t + 1) + 5 + "px",
                        left: 31 * (n + 1) + 4 + "px"
                    }
                }
            },
            dongdong: {
                items: [{
                    id: "_b01_",
                    name: "#E-b01",
                    img: "b01.gif"
                }, {
                    id: "_b02_",
                    name: "#E-b02",
                    img: "b02.gif"
                }, {
                    id: "_b03_",
                    name: "#E-b03",
                    img: "b03.gif"
                }, {
                    id: "_b04_",
                    name: "#E-b04",
                    img: "b04.gif"
                }, {
                    id: "_b05_",
                    name: "#E-b05",
                    img: "b05.gif"
                }, {
                    id: "_b06_",
                    name: "#E-b06",
                    img: "b06.gif"
                }, {
                    id: "_b07_",
                    name: "#E-b07",
                    img: "b07.gif"
                }, {
                    id: "_b08_",
                    name: "#E-b08",
                    img: "b08.gif"
                }, {
                    id: "_b09_",
                    name: "#E-b09",
                    img: "b09.gif"
                }, {
                    id: "_b10_",
                    name: "#E-b10",
                    img: "b10.gif"
                }, {
                    id: "_b11_",
                    name: "#E-b11",
                    img: "b11.gif"
                }, {
                    id: "_b12_",
                    name: "#E-b12",
                    img: "b12.gif"
                }, {
                    id: "_b13_",
                    name: "#E-b13",
                    img: "b13.gif"
                }, {
                    id: "_b14_",
                    name: "#E-b14",
                    img: "b14.gif"
                }, {
                    id: "_b15_",
                    name: "#E-b15",
                    img: "b15.gif"
                }, {
                    id: "_b16_",
                    name: "#E-b16",
                    img: "b16.gif"
                }],
                lineSize: 6,
                path: "//static.360buyimg.com/im/w_web/img/dongdong/",
                name: "咚咚",
                style: "im-face-item-dongdong",
                show: !0,
                viewStyle: "im-face-view-dongdong",
                defaultShow: !1,
                getPosition: function(e) {
                    var t = Math.floor(e / this.lineSize)
                      , n = (e - t * this.lineSize) % this.items.length
                      , i = ["0", "-76px", "-156px", "-235px", "-313px", "-393px"]
                      , r = ["0", "-79px", "-160px"];
                    return 0 == t && n == this.lineSize - 1 ? i[n] + " -1px" : i[n] + " " + r[t]
                },
                getViewPosition: function(e) {
                    var t = Math.floor(e / this.lineSize)
                      , n = (e - t * this.lineSize) % this.items.length;
                    return {
                        top: 62 * (t + 1) + 5 + "px",
                        left: 62 * (n + 1) + 4 + "px"
                    }
                }
            },
            joy: {
                items: [{
                    id: "_j01_",
                    name: "#E-j01",
                    img: "j01.gif"
                }, {
                    id: "_j02_",
                    name: "#E-j02",
                    img: "j02.gif"
                }, {
                    id: "_j03_",
                    name: "#E-j03",
                    img: "j03.gif"
                }, {
                    id: "_j04_",
                    name: "#E-j04",
                    img: "j04.gif"
                }, {
                    id: "_j05_",
                    name: "#E-j05",
                    img: "j05.gif"
                }, {
                    id: "_j06_",
                    name: "#E-j06",
                    img: "j06.gif"
                }, {
                    id: "_j07_",
                    name: "#E-j07",
                    img: "j07.gif"
                }, {
                    id: "_j08_",
                    name: "#E-j08",
                    img: "j08.gif"
                }, {
                    id: "_j09_",
                    name: "#E-j09",
                    img: "j09.gif"
                }, {
                    id: "_j10_",
                    name: "#E-j10",
                    img: "j10.gif"
                }, {
                    id: "_j11_",
                    name: "#E-j11",
                    img: "j11.gif"
                }, {
                    id: "_j12_",
                    name: "#E-j12",
                    img: "j12.gif"
                }, {
                    id: "_j13_",
                    name: "#E-j13",
                    img: "j13.gif"
                }, {
                    id: "_j14_",
                    name: "#E-j14",
                    img: "j14.gif"
                }, {
                    id: "_j15_",
                    name: "#E-j15",
                    img: "j15.gif"
                }, {
                    id: "_j16_",
                    name: "#E-j16",
                    img: "j16.gif"
                }],
                lineSize: 6,
                path: "//static.360buyimg.com/im/w_web/img/joy/",
                name: "Joy",
                style: "im-face-item-dongdong",
                show: !1,
                viewStyle: "im-face-view-dongdong",
                defaultShow: !1,
                getPosition: function(e) {
                    var t = Math.floor(e / this.lineSize)
                      , n = (e - t * this.lineSize) % this.items.length
                      , i = ["0", "-76px", "-156px", "-235px", "-313px", "-393px"]
                      , r = ["0", "-79px", "-160px"];
                    return 0 == t && n == this.lineSize - 1 ? i[n] + " -1px" : i[n] + " " + r[t]
                },
                getViewPosition: function(e) {
                    var t = Math.floor(e / this.lineSize)
                      , n = (e - t * this.lineSize) % this.items.length;
                    return {
                        top: 62 * (t + 1) + 5 + "px",
                        left: 62 * (n + 1) + 4 + "px"
                    }
                }
            }
        },
        imgClick: function(e) {},
        getImg: function(e) {
            return i(e)
        }
    }
}(jQuery),
!function(e, t) {
    function n(e) {
        return function(t) {
            return {}.toString.call(t) == "[object " + e + "]"
        }
    }
    function i() {
        return k++
    }
    function r(e) {
        return e.match(S)[0]
    }
    function a(e) {
        for (e = e.replace(A, "/"); e.match(D); )
            e = e.replace(D, "/");
        return e = e.replace(L, "$1/")
    }
    function o(e) {
        var t = e.length - 1
          , n = e.charAt(t);
        return "#" === n ? e.substring(0, t) : ".js" === e.substring(t - 2) || e.indexOf("?") > 0 || ".css" === e.substring(t - 3) || "/" === n ? e : e + ".js"
    }
    function s(e) {
        var t = w.alias;
        return t && _(t[e]) ? t[e] : e
    }
    function l(e) {
        var t, n = w.paths;
        return n && (t = e.match(F)) && _(n[t[1]]) && (e = n[t[1]] + t[2]),
        e
    }
    function c(e) {
        var t = w.vars;
        return t && e.indexOf("{") > -1 && (e = e.replace(M, function(e, n) {
            return _(t[n]) ? t[n] : e
        })),
        e
    }
    function u(e) {
        var t = w.map
          , n = e;
        if (t)
            for (var i = 0, r = t.length; r > i; i++) {
                var a = t[i];
                if (n = N(a) ? a(e) || e : e.replace(a[0], a[1]),
                n !== e)
                    break
            }
        return n
    }
    function f(e, t) {
        var n, i = e.charAt(0);
        if (O.test(e))
            n = e;
        else if ("." === i)
            n = a((t ? r(t) : w.cwd) + e);
        else if ("/" === i) {
            var o = w.cwd.match(H);
            n = o ? o[0] + e.substring(1) : e
        } else
            n = w.base + e;
        return 0 === n.indexOf("//") && (n = location.protocol + n),
        n
    }
    function d(e, t) {
        if (!e)
            return "";
        e = s(e),
        e = l(e),
        e = c(e),
        e = o(e);
        var n = f(e, t);
        return n = u(n)
    }
    function p(e) {
        return e.hasAttribute ? e.src : e.getAttribute("src", 4)
    }
    function h(e, t, n) {
        var i = V.test(e)
          , r = I.createElement(i ? "link" : "script");
        if (n) {
            var a = N(n) ? n(e) : n;
            a && (r.charset = a)
        }
        g(r, t, i, e),
        i ? (r.rel = "stylesheet",
        r.href = e) : (r.async = !0,
        r.src = e),
        z = r,
        U ? X.insertBefore(r, U) : X.appendChild(r),
        z = null
    }
    function g(e, n, i, r) {
        function a() {
            e.onload = e.onerror = e.onreadystatechange = null,
            i || w.debug || X.removeChild(e),
            e = null,
            n()
        }
        var o = "onload"in e;
        return !i || !G && o ? (o ? (e.onload = a,
        e.onerror = function() {
            C("error", {
                uri: r,
                node: e
            }),
            a()
        }
        ) : e.onreadystatechange = function() {
            /loaded|complete/.test(e.readyState) && a()
        }
        ,
        t) : (setTimeout(function() {
            m(e, n)
        }, 1),
        t)
    }
    function m(e, t) {
        var n, i = e.sheet;
        if (G)
            i && (n = !0);
        else if (i)
            try {
                i.cssRules && (n = !0)
            } catch (r) {
                "NS_ERROR_DOM_SECURITY_ERR" === r.name && (n = !0)
            }
        setTimeout(function() {
            n ? t() : m(e, t)
        }, 20)
    }
    function v() {
        if (z)
            return z;
        if (R && "interactive" === R.readyState)
            return R;
        for (var e = X.getElementsByTagName("script"), t = e.length - 1; t >= 0; t--) {
            var n = e[t];
            if ("interactive" === n.readyState)
                return R = n
        }
    }
    function y(e) {
        var t = [];
        return e.replace(Q, "").replace(K, function(e, n, i) {
            i && t.push(i)
        }),
        t
    }
    function b(e, t) {
        this.uri = e,
        this.dependencies = t || [],
        this.exports = null,
        this.status = 0,
        this._waitings = {},
        this._remain = 0
    }
    if (!e.seajs) {
        var x = e.seajs = {
            version: "2.2.1"
        }
          , w = x.data = {}
          , E = n("Object")
          , _ = n("String")
          , T = Array.isArray || n("Array")
          , N = n("Function")
          , k = 0
          , j = w.events = {};
        x.on = function(e, t) {
            var n = j[e] || (j[e] = []);
            return n.push(t),
            x
        }
        ,
        x.off = function(e, t) {
            if (!e && !t)
                return j = w.events = {},
                x;
            var n = j[e];
            if (n)
                if (t)
                    for (var i = n.length - 1; i >= 0; i--)
                        n[i] === t && n.splice(i, 1);
                else
                    delete j[e];
            return x
        }
        ;
        var C = x.emit = function(e, t) {
            var n, i = j[e];
            if (i)
                for (i = i.slice(); n = i.shift(); )
                    n(t);
            return x
        }
          , S = /[^?#]*\//
          , A = /\/\.\//g
          , D = /\/[^/]+\/\.\.\//
          , L = /([^:/])\/\//g
          , F = /^([^/:]+)(\/.+)$/
          , M = /{([^{]+)}/g
          , O = /^\/\/.|:\//
          , H = /^.*?\/\/.*?\//
          , I = document
          , q = r(I.URL)
          , P = I.scripts
          , B = I.getElementById("seajsnode") || P[P.length - 1]
          , W = r(p(B) || q);
        x.resolve = d;
        var z, R, X = I.head || I.getElementsByTagName("head")[0] || I.documentElement, U = X.getElementsByTagName("base")[0], V = /\.css(?:\?|$)/i, G = +navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/(\d+).*/, "$1") < 536;
        x.request = h;
        var Y, K = /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g, Q = /\\\\/g, J = x.cache = {}, $ = {}, Z = {}, ee = {}, te = b.STATUS = {
            FETCHING: 1,
            SAVED: 2,
            LOADING: 3,
            LOADED: 4,
            EXECUTING: 5,
            EXECUTED: 6
        };
        b.prototype.resolve = function() {
            for (var e = this, t = e.dependencies, n = [], i = 0, r = t.length; r > i; i++)
                n[i] = b.resolve(t[i], e.uri);
            return n
        }
        ,
        b.prototype.load = function() {
            var e = this;
            if (!(e.status >= te.LOADING)) {
                e.status = te.LOADING;
                var n = e.resolve();
                C("load", n);
                for (var i, r = e._remain = n.length, a = 0; r > a; a++)
                    i = b.get(n[a]),
                    i.status < te.LOADED ? i._waitings[e.uri] = (i._waitings[e.uri] || 0) + 1 : e._remain--;
                if (0 === e._remain)
                    return e.onload(),
                    t;
                var o = {};
                for (a = 0; r > a; a++)
                    i = J[n[a]],
                    i.status < te.FETCHING ? i.fetch(o) : i.status === te.SAVED && i.load();
                for (var s in o)
                    o.hasOwnProperty(s) && o[s]()
            }
        }
        ,
        b.prototype.onload = function() {
            var e = this;
            e.status = te.LOADED,
            e.callback && e.callback();
            var t, n, i = e._waitings;
            for (t in i)
                i.hasOwnProperty(t) && (n = J[t],
                n._remain -= i[t],
                0 === n._remain && n.onload());
            delete e._waitings,
            delete e._remain
        }
        ,
        b.prototype.fetch = function(e) {
            function n() {
                x.request(o.requestUri, o.onRequest, o.charset)
            }
            function i() {
                delete $[s],
                Z[s] = !0,
                Y && (b.save(a, Y),
                Y = null);
                var e, t = ee[s];
                for (delete ee[s]; e = t.shift(); )
                    e.load()
            }
            var r = this
              , a = r.uri;
            r.status = te.FETCHING;
            var o = {
                uri: a
            };
            C("fetch", o);
            var s = o.requestUri || a;
            return !s || Z[s] ? (r.load(),
            t) : $[s] ? (ee[s].push(r),
            t) : ($[s] = !0,
            ee[s] = [r],
            C("request", o = {
                uri: a,
                requestUri: s,
                onRequest: i,
                charset: w.charset
            }),
            o.requested || (e ? e[o.requestUri] = n : n()),
            t)
        }
        ,
        b.prototype.exec = function() {
            function e(t) {
                return b.get(e.resolve(t)).exec()
            }
            var n = this;
            if (n.status >= te.EXECUTING)
                return n.exports;
            n.status = te.EXECUTING;
            var r = n.uri;
            e.resolve = function(e) {
                return b.resolve(e, r)
            }
            ,
            e.async = function(t, n) {
                return b.use(t, n, r + "_async_" + i()),
                e
            }
            ;
            var a = n.factory
              , o = N(a) ? a(e, n.exports = {}, n) : a;
            return o === t && (o = n.exports),
            delete n.factory,
            n.exports = o,
            n.status = te.EXECUTED,
            C("exec", n),
            o
        }
        ,
        b.resolve = function(e, t) {
            var n = {
                id: e,
                refUri: t
            };
            return C("resolve", n),
            n.uri || x.resolve(n.id, t)
        }
        ,
        b.define = function(e, n, i) {
            var r = arguments.length;
            1 === r ? (i = e,
            e = t) : 2 === r && (i = n,
            T(e) ? (n = e,
            e = t) : n = t),
            !T(n) && N(i) && (n = y("" + i));
            var a = {
                id: e,
                uri: b.resolve(e),
                deps: n,
                factory: i
            };
            if (!a.uri && I.attachEvent) {
                var o = v();
                o && (a.uri = o.src)
            }
            C("define", a),
            a.uri ? b.save(a.uri, a) : Y = a
        }
        ,
        b.save = function(e, t) {
            var n = b.get(e);
            n.status < te.SAVED && (n.id = t.id || e,
            n.dependencies = t.deps || [],
            n.factory = t.factory,
            n.status = te.SAVED)
        }
        ,
        b.get = function(e, t) {
            return J[e] || (J[e] = new b(e,t))
        }
        ,
        b.use = function(t, n, i) {
            var r = b.get(i, T(t) ? t : [t]);
            r.callback = function() {
                for (var t = [], i = r.resolve(), a = 0, o = i.length; o > a; a++)
                    t[a] = J[i[a]].exec();
                n && n.apply(e, t),
                delete r.callback
            }
            ,
            r.load()
        }
        ,
        b.preload = function(e) {
            var t = w.preload
              , n = t.length;
            n ? b.use(t, function() {
                t.splice(0, n),
                b.preload(e)
            }, w.cwd + "_preload_" + i()) : e()
        }
        ,
        x.use = function(e, t) {
            return b.preload(function() {
                b.use(e, t, w.cwd + "_use_" + i())
            }),
            x
        }
        ,
        b.define.cmd = {},
        e.define = b.define,
        x.Module = b,
        w.fetchedList = Z,
        w.cid = i,
        x.require = function(e) {
            var t = b.get(b.resolve(e));
            return t.status < te.EXECUTING && (t.onload(),
            t.exec()),
            t.exports
        }
        ;
        var ne = /^(.+?\/)(\?\?)?(seajs\/)+/;
        w.base = (W.match(ne) || ["", W])[1],
        w.dir = W,
        w.cwd = q,
        w.charset = "utf-8",
        w.preload = function() {
            var e = []
              , t = location.search.replace(/(seajs-\w+)(&|$)/g, "$1=1$2");
            return t += " " + I.cookie,
            t.replace(/(seajs-\w+)=1/g, function(t, n) {
                e.push(n)
            }),
            e
        }(),
        x.config = function(e) {
            for (var t in e) {
                var n = e[t]
                  , i = w[t];
                if (i && E(i))
                    for (var r in n)
                        i[r] = n[r];
                else
                    T(i) ? n = i.concat(n) : "base" === t && ("/" !== n.slice(-1) && (n += "/"),
                    n = f(n)),
                    w[t] = n
            }
            return C("config", e),
            x
        }
    }
}(this);