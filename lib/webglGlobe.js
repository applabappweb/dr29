var Ql = Object.defineProperty;
var Pa = Object.getOwnPropertySymbols;
var $l = Object.prototype.hasOwnProperty,
    Kl = Object.prototype.propertyIsEnumerable;
var Da = (Nt, ht, Be) => ht in Nt ? Ql(Nt, ht, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Be
    }) : Nt[ht] = Be,
    Ia = (Nt, ht) => {
        for (var Be in ht || (ht = {})) $l.call(ht, Be) && Da(Nt, Be, ht[Be]);
        if (Pa)
            for (var Be of Pa(ht)) Kl.call(ht, Be) && Da(Nt, Be, ht[Be]);
        return Nt
    };
export default function webglGlobe () {
    "use strict"; /*! For license information please see main.js.LICENSE.txt */
    (() => {
        var Nt = {
            804: (ie, le, se) => {
                var Ge = se(191),
                    Se = se(516),
                    Fe = se(458),
                    je = se(981);
                (ie.exports = function (Ce, _e) {
                    var be, Ve, We, Re, et;
                    return arguments.length < 2 || typeof Ce != "string" ? (Re = _e, _e = Ce, Ce = null) : Re = arguments[2], Ce == null ? (be = We = !0, Ve = !1) : (be = je.call(Ce, "c"), Ve = je.call(Ce, "e"), We = je.call(Ce, "w")), et = {
                        value: _e,
                        configurable: be,
                        enumerable: Ve,
                        writable: We
                    }, Re ? Ge(Se(Re), et) : et
                }).gs = function (Ce, _e, be) {
                    var Ve, We, Re, et;
                    return typeof Ce != "string" ? (Re = be, be = _e, _e = Ce, Ce = null) : Re = arguments[3], _e == null ? _e = void 0 : Fe(_e) ? be == null ? be = void 0 : Fe(be) || (Re = be, be = void 0) : (Re = _e, _e = be = void 0), Ce == null ? (Ve = !0, We = !1) : (Ve = je.call(Ce, "c"), We = je.call(Ce, "e")), et = {
                        get: _e,
                        set: be,
                        configurable: Ve,
                        enumerable: We
                    }, Re ? Ge(Se(Re), et) : et
                }
            },
            430: ie => {
                ie.exports = function () { }
            },
            191: (ie, le, se) => {
                ie.exports = se(560)() ? Object.assign : se(346)
            },
            560: ie => {
                ie.exports = function () {
                    var le, se = Object.assign;
                    return typeof se == "function" && (se(le = {
                        foo: "raz"
                    }, {
                        bar: "dwa"
                    }, {
                        trzy: "trzy"
                    }), le.foo + le.bar + le.trzy === "razdwatrzy")
                }
            },
            346: (ie, le, se) => {
                var Ge = se(103),
                    Se = se(745),
                    Fe = Math.max;
                ie.exports = function (je, Ce) {
                    var _e, be, Ve, We = Fe(arguments.length, 2);
                    for (je = Object(Se(je)), Ve = function (Re) {
                        try {
                            je[Re] = Ce[Re]
                        } catch (et) {
                            _e || (_e = et)
                        }
                    }, be = 1; be < We; ++be) Ge(Ce = arguments[be]).forEach(Ve);
                    if (_e !== void 0) throw _e;
                    return je
                }
            },
            458: ie => {
                ie.exports = function (le) {
                    return typeof le == "function"
                }
            },
            914: (ie, le, se) => {
                var Ge = se(430)();
                ie.exports = function (Se) {
                    return Se !== Ge && Se !== null
                }
            },
            103: (ie, le, se) => {
                ie.exports = se(446)() ? Object.keys : se(137)
            },
            446: ie => {
                ie.exports = function () {
                    try {
                        return Object.keys("primitive"), !0
                    } catch (le) {
                        return !1
                    }
                }
            },
            137: (ie, le, se) => {
                var Ge = se(914),
                    Se = Object.keys;
                ie.exports = function (Fe) {
                    return Se(Ge(Fe) ? Object(Fe) : Fe)
                }
            },
            516: (ie, le, se) => {
                var Ge = se(914),
                    Se = Array.prototype.forEach,
                    Fe = Object.create,
                    je = function (Ce, _e) {
                        var be;
                        for (be in Ce) _e[be] = Ce[be]
                    };
                ie.exports = function (Ce) {
                    var _e = Fe(null);
                    return Se.call(arguments, function (be) {
                        Ge(be) && je(Object(be), _e)
                    }), _e
                }
            },
            290: ie => {
                ie.exports = function (le) {
                    if (typeof le != "function") throw new TypeError(le + " is not a function");
                    return le
                }
            },
            745: (ie, le, se) => {
                var Ge = se(914);
                ie.exports = function (Se) {
                    if (!Ge(Se)) throw new TypeError("Cannot use null or undefined");
                    return Se
                }
            },
            981: (ie, le, se) => {
                ie.exports = se(591)() ? String.prototype.contains : se(42)
            },
            591: ie => {
                var le = "razdwatrzy";
                ie.exports = function () {
                    return typeof le.contains == "function" && le.contains("dwa") === !0 && le.contains("foo") === !1
                }
            },
            42: ie => {
                var le = String.prototype.indexOf;
                ie.exports = function (se) {
                    return le.call(this, se, arguments[1]) > -1
                }
            },
            370: (ie, le, se) => {
                var Ge, Se, Fe, je, Ce, _e, be, Ve = se(804),
                    We = se(290),
                    Re = Function.prototype.apply,
                    et = Function.prototype.call,
                    dn = Object.create,
                    un = Object.defineProperty,
                    pn = Object.defineProperties,
                    Qt = Object.prototype.hasOwnProperty,
                    $t = {
                        configurable: !0,
                        enumerable: !1,
                        writable: !0
                    };
                Se = function (Ue, we) {
                    var ue, tt;
                    return We(we), tt = this, Ge.call(this, Ue, ue = function () {
                        Fe.call(tt, Ue, ue), Re.call(we, this, arguments)
                    }), ue.__eeOnceListener__ = we, this
                }, Ce = {
                    on: Ge = function (Ue, we) {
                        var ue;
                        return We(we), Qt.call(this, "__ee__") ? ue = this.__ee__ : (ue = $t.value = dn(null), un(this, "__ee__", $t), $t.value = null), ue[Ue] ? typeof ue[Ue] == "object" ? ue[Ue].push(we) : ue[Ue] = [ue[Ue], we] : ue[Ue] = we, this
                    },
                    once: Se,
                    off: Fe = function (Ue, we) {
                        var ue, tt, nt, Je;
                        if (We(we), !Qt.call(this, "__ee__")) return this;
                        if (!(ue = this.__ee__)[Ue]) return this;
                        if (typeof (tt = ue[Ue]) == "object")
                            for (Je = 0; nt = tt[Je]; ++Je) nt !== we && nt.__eeOnceListener__ !== we || (tt.length === 2 ? ue[Ue] = tt[Je ? 0 : 1] : tt.splice(Je, 1));
                        else tt !== we && tt.__eeOnceListener__ !== we || delete ue[Ue];
                        return this
                    },
                    emit: je = function (Ue) {
                        var we, ue, tt, nt, Je;
                        if (Qt.call(this, "__ee__") && (nt = this.__ee__[Ue]))
                            if (typeof nt == "object") {
                                for (ue = arguments.length, Je = new Array(ue - 1), we = 1; we < ue; ++we) Je[we - 1] = arguments[we];
                                for (nt = nt.slice(), we = 0; tt = nt[we]; ++we) Re.call(tt, this, Je)
                            } else switch (arguments.length) {
                                case 1:
                                    et.call(nt, this);
                                    break;
                                case 2:
                                    et.call(nt, this, arguments[1]);
                                    break;
                                case 3:
                                    et.call(nt, this, arguments[1], arguments[2]);
                                    break;
                                default:
                                    for (ue = arguments.length, Je = new Array(ue - 1), we = 1; we < ue; ++we) Je[we - 1] = arguments[we];
                                    Re.call(nt, this, Je)
                            }
                    }
                }, _e = {
                    on: Ve(Ge),
                    once: Ve(Se),
                    off: Ve(Fe),
                    emit: Ve(je)
                }, be = pn({}, _e), ie.exports = le = function (Ue) {
                    return Ue == null ? dn(be) : pn(Object(Ue), _e)
                }, le.methods = Ce
            },
            66: () => { }
        },
            ht = {};

        function Be(ie) {
            var le = ht[ie];
            if (le !== void 0) return le.exports;
            var se = ht[ie] = {
                exports: {}
            };
            return Nt[ie](se, se.exports, Be), se.exports
        }
        Be.n = ie => {
            var le = ie && ie.__esModule ? () => ie.default : () => ie;
            return Be.d(le, {
                a: le
            }), le
        }, Be.d = (ie, le) => {
            for (var se in le) Be.o(le, se) && !Be.o(ie, se) && Object.defineProperty(ie, se, {
                enumerable: !0,
                get: le[se]
            })
        }, Be.o = (ie, le) => Object.prototype.hasOwnProperty.call(ie, le), (() => {
            const ie = 100,
                le = 1e3,
                se = 1001,
                Ge = 1002,
                Se = 1003,
                Fe = 1006,
                je = 1012,
                Ce = 1014,
                _e = 1015,
                be = 1016,
                Ve = 1020,
                We = 1022,
                Re = 1023,
                et = 1026,
                dn = 1027,
                un = 3e3,
                pn = 7680,
                Qt = 35044,
                $t = 35048,
                Ue = "300 es";
            class we {
                addEventListener(e, t) {
                    this._listeners === void 0 && (this._listeners = {});
                    const n = this._listeners;
                    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t)
                }
                hasEventListener(e, t) {
                    if (this._listeners === void 0) return !1;
                    const n = this._listeners;
                    return n[e] !== void 0 && n[e].indexOf(t) !== -1
                }
                removeEventListener(e, t) {
                    if (this._listeners === void 0) return;
                    const n = this._listeners[e];
                    if (n !== void 0) {
                        const i = n.indexOf(t);
                        i !== -1 && n.splice(i, 1)
                    }
                }
                dispatchEvent(e) {
                    if (this._listeners === void 0) return;
                    const t = this._listeners[e.type];
                    if (t !== void 0) {
                        e.target = this;
                        const n = t.slice(0);
                        for (let i = 0, r = n.length; i < r; i++) n[i].call(this, e);
                        e.target = null
                    }
                }
            }
            const ue = [];
            for (let s = 0; s < 256; s++) ue[s] = (s < 16 ? "0" : "") + s.toString(16);
            const tt = Math.PI / 180,
                nt = 180 / Math.PI;

            function Je() {
                const s = 4294967295 * Math.random() | 0,
                    e = 4294967295 * Math.random() | 0,
                    t = 4294967295 * Math.random() | 0,
                    n = 4294967295 * Math.random() | 0;
                return (ue[255 & s] + ue[s >> 8 & 255] + ue[s >> 16 & 255] + ue[s >> 24 & 255] + "-" + ue[255 & e] + ue[e >> 8 & 255] + "-" + ue[e >> 16 & 15 | 64] + ue[e >> 24 & 255] + "-" + ue[63 & t | 128] + ue[t >> 8 & 255] + "-" + ue[t >> 16 & 255] + ue[t >> 24 & 255] + ue[255 & n] + ue[n >> 8 & 255] + ue[n >> 16 & 255] + ue[n >> 24 & 255]).toUpperCase()
            }

            function vt(s, e, t) {
                return Math.max(e, Math.min(t, s))
            }

            function Ai(s, e, t) {
                return (1 - t) * s + t * e
            }

            function Er(s) {
                return (s & s - 1) == 0 && s !== 0
            }

            function Na(s) {
                return Math.pow(2, Math.floor(Math.log(s) / Math.LN2))
            }
            class ne {
                constructor(e = 0, t = 0) {
                    this.x = e, this.y = t
                }
                get width() {
                    return this.x
                }
                set width(e) {
                    this.x = e
                }
                get height() {
                    return this.y
                }
                set height(e) {
                    this.y = e
                }
                set(e, t) {
                    return this.x = e, this.y = t, this
                }
                setScalar(e) {
                    return this.x = e, this.y = e, this
                }
                setX(e) {
                    return this.x = e, this
                }
                setY(e) {
                    return this.y = e, this
                }
                setComponent(e, t) {
                    switch (e) {
                        case 0:
                            this.x = t;
                            break;
                        case 1:
                            this.y = t;
                            break;
                        default:
                            throw new Error("index is out of range: " + e)
                    }
                    return this
                }
                getComponent(e) {
                    switch (e) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        default:
                            throw new Error("index is out of range: " + e)
                    }
                }
                clone() {
                    return new this.constructor(this.x, this.y)
                }
                copy(e) {
                    return this.x = e.x, this.y = e.y, this
                }
                add(e, t) {
                    return t !== void 0 ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
                }
                addScalar(e) {
                    return this.x += e, this.y += e, this
                }
                addVectors(e, t) {
                    return this.x = e.x + t.x, this.y = e.y + t.y, this
                }
                addScaledVector(e, t) {
                    return this.x += e.x * t, this.y += e.y * t, this
                }
                sub(e, t) {
                    return t !== void 0 ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
                }
                subScalar(e) {
                    return this.x -= e, this.y -= e, this
                }
                subVectors(e, t) {
                    return this.x = e.x - t.x, this.y = e.y - t.y, this
                }
                multiply(e) {
                    return this.x *= e.x, this.y *= e.y, this
                }
                multiplyScalar(e) {
                    return this.x *= e, this.y *= e, this
                }
                divide(e) {
                    return this.x /= e.x, this.y /= e.y, this
                }
                divideScalar(e) {
                    return this.multiplyScalar(1 / e)
                }
                applyMatrix3(e) {
                    const t = this.x,
                        n = this.y,
                        i = e.elements;
                    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this
                }
                min(e) {
                    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
                }
                max(e) {
                    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
                }
                clamp(e, t) {
                    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this
                }
                clampScalar(e, t) {
                    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this
                }
                clampLength(e, t) {
                    const n = this.length();
                    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
                }
                floor() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
                }
                ceil() {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
                }
                round() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                }
                roundToZero() {
                    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
                }
                negate() {
                    return this.x = -this.x, this.y = -this.y, this
                }
                dot(e) {
                    return this.x * e.x + this.y * e.y
                }
                cross(e) {
                    return this.x * e.y - this.y * e.x
                }
                lengthSq() {
                    return this.x * this.x + this.y * this.y
                }
                length() {
                    return Math.sqrt(this.x * this.x + this.y * this.y)
                }
                manhattanLength() {
                    return Math.abs(this.x) + Math.abs(this.y)
                }
                normalize() {
                    return this.divideScalar(this.length() || 1)
                }
                angle() {
                    return Math.atan2(-this.y, -this.x) + Math.PI
                }
                distanceTo(e) {
                    return Math.sqrt(this.distanceToSquared(e))
                }
                distanceToSquared(e) {
                    const t = this.x - e.x,
                        n = this.y - e.y;
                    return t * t + n * n
                }
                manhattanDistanceTo(e) {
                    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
                }
                setLength(e) {
                    return this.normalize().multiplyScalar(e)
                }
                lerp(e, t) {
                    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
                }
                lerpVectors(e, t, n) {
                    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this
                }
                equals(e) {
                    return e.x === this.x && e.y === this.y
                }
                fromArray(e, t = 0) {
                    return this.x = e[t], this.y = e[t + 1], this
                }
                toArray(e = [], t = 0) {
                    return e[t] = this.x, e[t + 1] = this.y, e
                }
                fromBufferAttribute(e, t, n) {
                    return n !== void 0 && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this
                }
                rotateAround(e, t) {
                    const n = Math.cos(t),
                        i = Math.sin(t),
                        r = this.x - e.x,
                        o = this.y - e.y;
                    return this.x = r * n - o * i + e.x, this.y = r * i + o * n + e.y, this
                }
                random() {
                    return this.x = Math.random(), this.y = Math.random(), this
                }
            }
            ne.prototype.isVector2 = !0;
            class it {
                constructor() {
                    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
                }
                set(e, t, n, i, r, o, a, l, c) {
                    const h = this.elements;
                    return h[0] = e, h[1] = i, h[2] = a, h[3] = t, h[4] = r, h[5] = l, h[6] = n, h[7] = o, h[8] = c, this
                }
                identity() {
                    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
                }
                copy(e) {
                    const t = this.elements,
                        n = e.elements;
                    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this
                }
                extractBasis(e, t, n) {
                    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this
                }
                setFromMatrix4(e) {
                    const t = e.elements;
                    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
                }
                multiply(e) {
                    return this.multiplyMatrices(this, e)
                }
                premultiply(e) {
                    return this.multiplyMatrices(e, this)
                }
                multiplyMatrices(e, t) {
                    const n = e.elements,
                        i = t.elements,
                        r = this.elements,
                        o = n[0],
                        a = n[3],
                        l = n[6],
                        c = n[1],
                        h = n[4],
                        u = n[7],
                        d = n[2],
                        p = n[5],
                        g = n[8],
                        f = i[0],
                        m = i[3],
                        v = i[6],
                        w = i[1],
                        M = i[4],
                        _ = i[7],
                        A = i[2],
                        L = i[5],
                        b = i[8];
                    return r[0] = o * f + a * w + l * A, r[3] = o * m + a * M + l * L, r[6] = o * v + a * _ + l * b, r[1] = c * f + h * w + u * A, r[4] = c * m + h * M + u * L, r[7] = c * v + h * _ + u * b, r[2] = d * f + p * w + g * A, r[5] = d * m + p * M + g * L, r[8] = d * v + p * _ + g * b, this
                }
                multiplyScalar(e) {
                    const t = this.elements;
                    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
                }
                determinant() {
                    const e = this.elements,
                        t = e[0],
                        n = e[1],
                        i = e[2],
                        r = e[3],
                        o = e[4],
                        a = e[5],
                        l = e[6],
                        c = e[7],
                        h = e[8];
                    return t * o * h - t * a * c - n * r * h + n * a * l + i * r * c - i * o * l
                }
                invert() {
                    const e = this.elements,
                        t = e[0],
                        n = e[1],
                        i = e[2],
                        r = e[3],
                        o = e[4],
                        a = e[5],
                        l = e[6],
                        c = e[7],
                        h = e[8],
                        u = h * o - a * c,
                        d = a * l - h * r,
                        p = c * r - o * l,
                        g = t * u + n * d + i * p;
                    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
                    const f = 1 / g;
                    return e[0] = u * f, e[1] = (i * c - h * n) * f, e[2] = (a * n - i * o) * f, e[3] = d * f, e[4] = (h * t - i * l) * f, e[5] = (i * r - a * t) * f, e[6] = p * f, e[7] = (n * l - c * t) * f, e[8] = (o * t - n * r) * f, this
                }
                transpose() {
                    let e;
                    const t = this.elements;
                    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
                }
                getNormalMatrix(e) {
                    return this.setFromMatrix4(e).invert().transpose()
                }
                transposeIntoArray(e) {
                    const t = this.elements;
                    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
                }
                setUvTransform(e, t, n, i, r, o, a) {
                    const l = Math.cos(r),
                        c = Math.sin(r);
                    return this.set(n * l, n * c, -n * (l * o + c * a) + o + e, -i * c, i * l, -i * (-c * o + l * a) + a + t, 0, 0, 1), this
                }
                scale(e, t) {
                    const n = this.elements;
                    return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this
                }
                rotate(e) {
                    const t = Math.cos(e),
                        n = Math.sin(e),
                        i = this.elements,
                        r = i[0],
                        o = i[3],
                        a = i[6],
                        l = i[1],
                        c = i[4],
                        h = i[7];
                    return i[0] = t * r + n * l, i[3] = t * o + n * c, i[6] = t * a + n * h, i[1] = -n * r + t * l, i[4] = -n * o + t * c, i[7] = -n * a + t * h, this
                }
                translate(e, t) {
                    const n = this.elements;
                    return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this
                }
                equals(e) {
                    const t = this.elements,
                        n = e.elements;
                    for (let i = 0; i < 9; i++)
                        if (t[i] !== n[i]) return !1;
                    return !0
                }
                fromArray(e, t = 0) {
                    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
                    return this
                }
                toArray(e = [], t = 0) {
                    const n = this.elements;
                    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e
                }
                clone() {
                    return new this.constructor().fromArray(this.elements)
                }
            }
            let mn;
            it.prototype.isMatrix3 = !0;
            class fn {
                static getDataURL(e) {
                    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement == "undefined") return e.src;
                    let t;
                    if (e instanceof HTMLCanvasElement) t = e;
                    else {
                        mn === void 0 && (mn = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), mn.width = e.width, mn.height = e.height;
                        const n = mn.getContext("2d");
                        e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = mn
                    }
                    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png")
                }
            }
            let za = 0;
            class dt extends we {
                constructor(e = dt.DEFAULT_IMAGE, t = dt.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, o = 1008, a = 1023, l = 1009, c = 1, h = 3e3) {
                    super(), Object.defineProperty(this, "id", {
                        value: za++
                    }), this.uuid = Je(), this.name = "", this.image = e, this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new ne(0, 0), this.repeat = new ne(1, 1), this.center = new ne(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new it, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = h, this.version = 0, this.onUpdate = null
                }
                updateMatrix() {
                    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                copy(e) {
                    return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this
                }
                toJSON(e) {
                    const t = e === void 0 || typeof e == "string";
                    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
                    const n = {
                        metadata: {
                            version: 4.5,
                            type: "Texture",
                            generator: "Texture.toJSON"
                        },
                        uuid: this.uuid,
                        name: this.name,
                        mapping: this.mapping,
                        repeat: [this.repeat.x, this.repeat.y],
                        offset: [this.offset.x, this.offset.y],
                        center: [this.center.x, this.center.y],
                        rotation: this.rotation,
                        wrap: [this.wrapS, this.wrapT],
                        format: this.format,
                        type: this.type,
                        encoding: this.encoding,
                        minFilter: this.minFilter,
                        magFilter: this.magFilter,
                        anisotropy: this.anisotropy,
                        flipY: this.flipY,
                        premultiplyAlpha: this.premultiplyAlpha,
                        unpackAlignment: this.unpackAlignment
                    };
                    if (this.image !== void 0) {
                        const i = this.image;
                        if (i.uuid === void 0 && (i.uuid = Je()), !t && e.images[i.uuid] === void 0) {
                            let r;
                            if (Array.isArray(i)) {
                                r = [];
                                for (let o = 0, a = i.length; o < a; o++) i[o].isDataTexture ? r.push(Ci(i[o].image)) : r.push(Ci(i[o]))
                            } else r = Ci(i);
                            e.images[i.uuid] = {
                                uuid: i.uuid,
                                url: r
                            }
                        }
                        n.image = i.uuid
                    }
                    return t || (e.textures[this.uuid] = n), n
                }
                dispose() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
                transformUv(e) {
                    if (this.mapping !== 300) return e;
                    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
                        case le:
                            e.x = e.x - Math.floor(e.x);
                            break;
                        case se:
                            e.x = e.x < 0 ? 0 : 1;
                            break;
                        case Ge:
                            Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
                    }
                    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
                        case le:
                            e.y = e.y - Math.floor(e.y);
                            break;
                        case se:
                            e.y = e.y < 0 ? 0 : 1;
                            break;
                        case Ge:
                            Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
                    }
                    return this.flipY && (e.y = 1 - e.y), e
                }
                set needsUpdate(e) {
                    e === !0 && this.version++
                }
            }

            function Ci(s) {
                return typeof HTMLImageElement != "undefined" && s instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && s instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && s instanceof ImageBitmap ? fn.getDataURL(s) : s.data ? {
                    data: Array.prototype.slice.call(s.data),
                    width: s.width,
                    height: s.height,
                    type: s.data.constructor.name
                } : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
            }
            dt.DEFAULT_IMAGE = void 0, dt.DEFAULT_MAPPING = 300, dt.prototype.isTexture = !0;
            class qe {
                constructor(e = 0, t = 0, n = 0, i = 1) {
                    this.x = e, this.y = t, this.z = n, this.w = i
                }
                get width() {
                    return this.z
                }
                set width(e) {
                    this.z = e
                }
                get height() {
                    return this.w
                }
                set height(e) {
                    this.w = e
                }
                set(e, t, n, i) {
                    return this.x = e, this.y = t, this.z = n, this.w = i, this
                }
                setScalar(e) {
                    return this.x = e, this.y = e, this.z = e, this.w = e, this
                }
                setX(e) {
                    return this.x = e, this
                }
                setY(e) {
                    return this.y = e, this
                }
                setZ(e) {
                    return this.z = e, this
                }
                setW(e) {
                    return this.w = e, this
                }
                setComponent(e, t) {
                    switch (e) {
                        case 0:
                            this.x = t;
                            break;
                        case 1:
                            this.y = t;
                            break;
                        case 2:
                            this.z = t;
                            break;
                        case 3:
                            this.w = t;
                            break;
                        default:
                            throw new Error("index is out of range: " + e)
                    }
                    return this
                }
                getComponent(e) {
                    switch (e) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        case 2:
                            return this.z;
                        case 3:
                            return this.w;
                        default:
                            throw new Error("index is out of range: " + e)
                    }
                }
                clone() {
                    return new this.constructor(this.x, this.y, this.z, this.w)
                }
                copy(e) {
                    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this
                }
                add(e, t) {
                    return t !== void 0 ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
                }
                addScalar(e) {
                    return this.x += e, this.y += e, this.z += e, this.w += e, this
                }
                addVectors(e, t) {
                    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
                }
                addScaledVector(e, t) {
                    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
                }
                sub(e, t) {
                    return t !== void 0 ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
                }
                subScalar(e) {
                    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
                }
                subVectors(e, t) {
                    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
                }
                multiply(e) {
                    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this
                }
                multiplyScalar(e) {
                    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
                }
                applyMatrix4(e) {
                    const t = this.x,
                        n = this.y,
                        i = this.z,
                        r = this.w,
                        o = e.elements;
                    return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * r, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * r, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * r, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * r, this
                }
                divideScalar(e) {
                    return this.multiplyScalar(1 / e)
                }
                setAxisAngleFromQuaternion(e) {
                    this.w = 2 * Math.acos(e.w);
                    const t = Math.sqrt(1 - e.w * e.w);
                    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
                }
                setAxisAngleFromRotationMatrix(e) {
                    let t, n, i, r;
                    const o = .01,
                        a = .1,
                        l = e.elements,
                        c = l[0],
                        h = l[4],
                        u = l[8],
                        d = l[1],
                        p = l[5],
                        g = l[9],
                        f = l[2],
                        m = l[6],
                        v = l[10];
                    if (Math.abs(h - d) < o && Math.abs(u - f) < o && Math.abs(g - m) < o) {
                        if (Math.abs(h + d) < a && Math.abs(u + f) < a && Math.abs(g + m) < a && Math.abs(c + p + v - 3) < a) return this.set(1, 0, 0, 0), this;
                        t = Math.PI;
                        const M = (c + 1) / 2,
                            _ = (p + 1) / 2,
                            A = (v + 1) / 2,
                            L = (h + d) / 4,
                            b = (u + f) / 4,
                            C = (g + m) / 4;
                        return M > _ && M > A ? M < o ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(M), i = L / n, r = b / n) : _ > A ? _ < o ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(_), n = L / i, r = C / i) : A < o ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(A), n = b / r, i = C / r), this.set(n, i, r, t), this
                    }
                    let w = Math.sqrt((m - g) * (m - g) + (u - f) * (u - f) + (d - h) * (d - h));
                    return Math.abs(w) < .001 && (w = 1), this.x = (m - g) / w, this.y = (u - f) / w, this.z = (d - h) / w, this.w = Math.acos((c + p + v - 1) / 2), this
                }
                min(e) {
                    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
                }
                max(e) {
                    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
                }
                clamp(e, t) {
                    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this
                }
                clampScalar(e, t) {
                    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this
                }
                clampLength(e, t) {
                    const n = this.length();
                    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
                }
                floor() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
                }
                ceil() {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
                }
                round() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
                }
                roundToZero() {
                    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
                }
                negate() {
                    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
                }
                dot(e) {
                    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
                }
                lengthSq() {
                    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
                }
                length() {
                    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
                }
                manhattanLength() {
                    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
                }
                normalize() {
                    return this.divideScalar(this.length() || 1)
                }
                setLength(e) {
                    return this.normalize().multiplyScalar(e)
                }
                lerp(e, t) {
                    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
                }
                lerpVectors(e, t, n) {
                    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this
                }
                equals(e) {
                    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
                }
                fromArray(e, t = 0) {
                    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
                }
                toArray(e = [], t = 0) {
                    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
                }
                fromBufferAttribute(e, t, n) {
                    return n !== void 0 && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this
                }
                random() {
                    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
                }
            }
            qe.prototype.isVector4 = !0;
            class gn extends we {
                constructor(e, t, n) {
                    super(), this.width = e, this.height = t, this.depth = 1, this.scissor = new qe(0, 0, e, t), this.scissorTest = !1, this.viewport = new qe(0, 0, e, t), n = n || {}, this.texture = new dt(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.image = {}, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = 1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 && n.generateMipmaps, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : Fe, this.depthBuffer = n.depthBuffer === void 0 || n.depthBuffer, this.stencilBuffer = n.stencilBuffer !== void 0 && n.stencilBuffer, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null
                }
                setTexture(e) {
                    e.image = {
                        width: this.width,
                        height: this.height,
                        depth: this.depth
                    }, this.texture = e
                }
                setSize(e, t, n = 1) {
                    this.width === e && this.height === t && this.depth === n || (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                copy(e) {
                    return this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this
                }
                dispose() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
            }
            gn.prototype.isWebGLRenderTarget = !0;
            class zt {
                constructor(e = 0, t = 0, n = 0, i = 1) {
                    this._x = e, this._y = t, this._z = n, this._w = i
                }
                static slerp(e, t, n, i) {
                    return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), n.slerpQuaternions(e, t, i)
                }
                static slerpFlat(e, t, n, i, r, o, a) {
                    let l = n[i + 0],
                        c = n[i + 1],
                        h = n[i + 2],
                        u = n[i + 3];
                    const d = r[o + 0],
                        p = r[o + 1],
                        g = r[o + 2],
                        f = r[o + 3];
                    if (a === 0) return e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, void (e[t + 3] = u);
                    if (a === 1) return e[t + 0] = d, e[t + 1] = p, e[t + 2] = g, void (e[t + 3] = f);
                    if (u !== f || l !== d || c !== p || h !== g) {
                        let m = 1 - a;
                        const v = l * d + c * p + h * g + u * f,
                            w = v >= 0 ? 1 : -1,
                            M = 1 - v * v;
                        if (M > Number.EPSILON) {
                            const A = Math.sqrt(M),
                                L = Math.atan2(A, v * w);
                            m = Math.sin(m * L) / A, a = Math.sin(a * L) / A
                        }
                        const _ = a * w;
                        if (l = l * m + d * _, c = c * m + p * _, h = h * m + g * _, u = u * m + f * _, m === 1 - a) {
                            const A = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
                            l *= A, c *= A, h *= A, u *= A
                        }
                    }
                    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u
                }
                static multiplyQuaternionsFlat(e, t, n, i, r, o) {
                    const a = n[i],
                        l = n[i + 1],
                        c = n[i + 2],
                        h = n[i + 3],
                        u = r[o],
                        d = r[o + 1],
                        p = r[o + 2],
                        g = r[o + 3];
                    return e[t] = a * g + h * u + l * p - c * d, e[t + 1] = l * g + h * d + c * u - a * p, e[t + 2] = c * g + h * p + a * d - l * u, e[t + 3] = h * g - a * u - l * d - c * p, e
                }
                get x() {
                    return this._x
                }
                set x(e) {
                    this._x = e, this._onChangeCallback()
                }
                get y() {
                    return this._y
                }
                set y(e) {
                    this._y = e, this._onChangeCallback()
                }
                get z() {
                    return this._z
                }
                set z(e) {
                    this._z = e, this._onChangeCallback()
                }
                get w() {
                    return this._w
                }
                set w(e) {
                    this._w = e, this._onChangeCallback()
                }
                set(e, t, n, i) {
                    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this
                }
                clone() {
                    return new this.constructor(this._x, this._y, this._z, this._w)
                }
                copy(e) {
                    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this
                }
                setFromEuler(e, t) {
                    if (!e || !e.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
                    const n = e._x,
                        i = e._y,
                        r = e._z,
                        o = e._order,
                        a = Math.cos,
                        l = Math.sin,
                        c = a(n / 2),
                        h = a(i / 2),
                        u = a(r / 2),
                        d = l(n / 2),
                        p = l(i / 2),
                        g = l(r / 2);
                    switch (o) {
                        case "XYZ":
                            this._x = d * h * u + c * p * g, this._y = c * p * u - d * h * g, this._z = c * h * g + d * p * u, this._w = c * h * u - d * p * g;
                            break;
                        case "YXZ":
                            this._x = d * h * u + c * p * g, this._y = c * p * u - d * h * g, this._z = c * h * g - d * p * u, this._w = c * h * u + d * p * g;
                            break;
                        case "ZXY":
                            this._x = d * h * u - c * p * g, this._y = c * p * u + d * h * g, this._z = c * h * g + d * p * u, this._w = c * h * u - d * p * g;
                            break;
                        case "ZYX":
                            this._x = d * h * u - c * p * g, this._y = c * p * u + d * h * g, this._z = c * h * g - d * p * u, this._w = c * h * u + d * p * g;
                            break;
                        case "YZX":
                            this._x = d * h * u + c * p * g, this._y = c * p * u + d * h * g, this._z = c * h * g - d * p * u, this._w = c * h * u - d * p * g;
                            break;
                        case "XZY":
                            this._x = d * h * u - c * p * g, this._y = c * p * u - d * h * g, this._z = c * h * g + d * p * u, this._w = c * h * u + d * p * g;
                            break;
                        default:
                            console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o)
                    }
                    return t !== !1 && this._onChangeCallback(), this
                }
                setFromAxisAngle(e, t) {
                    const n = t / 2,
                        i = Math.sin(n);
                    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this
                }
                setFromRotationMatrix(e) {
                    const t = e.elements,
                        n = t[0],
                        i = t[4],
                        r = t[8],
                        o = t[1],
                        a = t[5],
                        l = t[9],
                        c = t[2],
                        h = t[6],
                        u = t[10],
                        d = n + a + u;
                    if (d > 0) {
                        const p = .5 / Math.sqrt(d + 1);
                        this._w = .25 / p, this._x = (h - l) * p, this._y = (r - c) * p, this._z = (o - i) * p
                    } else if (n > a && n > u) {
                        const p = 2 * Math.sqrt(1 + n - a - u);
                        this._w = (h - l) / p, this._x = .25 * p, this._y = (i + o) / p, this._z = (r + c) / p
                    } else if (a > u) {
                        const p = 2 * Math.sqrt(1 + a - n - u);
                        this._w = (r - c) / p, this._x = (i + o) / p, this._y = .25 * p, this._z = (l + h) / p
                    } else {
                        const p = 2 * Math.sqrt(1 + u - n - a);
                        this._w = (o - i) / p, this._x = (r + c) / p, this._y = (l + h) / p, this._z = .25 * p
                    }
                    return this._onChangeCallback(), this
                }
                setFromUnitVectors(e, t) {
                    let n = e.dot(t) + 1;
                    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize()
                }
                angleTo(e) {
                    return 2 * Math.acos(Math.abs(vt(this.dot(e), -1, 1)))
                }
                rotateTowards(e, t) {
                    const n = this.angleTo(e);
                    if (n === 0) return this;
                    const i = Math.min(1, t / n);
                    return this.slerp(e, i), this
                }
                identity() {
                    return this.set(0, 0, 0, 1)
                }
                invert() {
                    return this.conjugate()
                }
                conjugate() {
                    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
                }
                dot(e) {
                    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
                }
                lengthSq() {
                    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
                }
                length() {
                    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
                }
                normalize() {
                    let e = this.length();
                    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this
                }
                multiply(e, t) {
                    return t !== void 0 ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
                }
                premultiply(e) {
                    return this.multiplyQuaternions(e, this)
                }
                multiplyQuaternions(e, t) {
                    const n = e._x,
                        i = e._y,
                        r = e._z,
                        o = e._w,
                        a = t._x,
                        l = t._y,
                        c = t._z,
                        h = t._w;
                    return this._x = n * h + o * a + i * c - r * l, this._y = i * h + o * l + r * a - n * c, this._z = r * h + o * c + n * l - i * a, this._w = o * h - n * a - i * l - r * c, this._onChangeCallback(), this
                }
                slerp(e, t) {
                    if (t === 0) return this;
                    if (t === 1) return this.copy(e);
                    const n = this._x,
                        i = this._y,
                        r = this._z,
                        o = this._w;
                    let a = o * e._w + n * e._x + i * e._y + r * e._z;
                    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = n, this._y = i, this._z = r, this;
                    const l = 1 - a * a;
                    if (l <= Number.EPSILON) {
                        const p = 1 - t;
                        return this._w = p * o + t * this._w, this._x = p * n + t * this._x, this._y = p * i + t * this._y, this._z = p * r + t * this._z, this.normalize(), this._onChangeCallback(), this
                    }
                    const c = Math.sqrt(l),
                        h = Math.atan2(c, a),
                        u = Math.sin((1 - t) * h) / c,
                        d = Math.sin(t * h) / c;
                    return this._w = o * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = r * u + this._z * d, this._onChangeCallback(), this
                }
                slerpQuaternions(e, t, n) {
                    this.copy(e).slerp(t, n)
                }
                equals(e) {
                    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
                }
                fromArray(e, t = 0) {
                    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this
                }
                toArray(e = [], t = 0) {
                    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
                }
                fromBufferAttribute(e, t) {
                    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this
                }
                _onChange(e) {
                    return this._onChangeCallback = e, this
                }
                _onChangeCallback() { }
            }
            zt.prototype.isQuaternion = !0;
            class y {
                constructor(e = 0, t = 0, n = 0) {
                    this.x = e, this.y = t, this.z = n
                }
                set(e, t, n) {
                    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this
                }
                setScalar(e) {
                    return this.x = e, this.y = e, this.z = e, this
                }
                setX(e) {
                    return this.x = e, this
                }
                setY(e) {
                    return this.y = e, this
                }
                setZ(e) {
                    return this.z = e, this
                }
                setComponent(e, t) {
                    switch (e) {
                        case 0:
                            this.x = t;
                            break;
                        case 1:
                            this.y = t;
                            break;
                        case 2:
                            this.z = t;
                            break;
                        default:
                            throw new Error("index is out of range: " + e)
                    }
                    return this
                }
                getComponent(e) {
                    switch (e) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        case 2:
                            return this.z;
                        default:
                            throw new Error("index is out of range: " + e)
                    }
                }
                clone() {
                    return new this.constructor(this.x, this.y, this.z)
                }
                copy(e) {
                    return this.x = e.x, this.y = e.y, this.z = e.z, this
                }
                add(e, t) {
                    return t !== void 0 ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
                }
                addScalar(e) {
                    return this.x += e, this.y += e, this.z += e, this
                }
                addVectors(e, t) {
                    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
                }
                addScaledVector(e, t) {
                    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
                }
                sub(e, t) {
                    return t !== void 0 ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
                }
                subScalar(e) {
                    return this.x -= e, this.y -= e, this.z -= e, this
                }
                subVectors(e, t) {
                    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
                }
                multiply(e, t) {
                    return t !== void 0 ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
                }
                multiplyScalar(e) {
                    return this.x *= e, this.y *= e, this.z *= e, this
                }
                multiplyVectors(e, t) {
                    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
                }
                applyEuler(e) {
                    return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(Tr.setFromEuler(e))
                }
                applyAxisAngle(e, t) {
                    return this.applyQuaternion(Tr.setFromAxisAngle(e, t))
                }
                applyMatrix3(e) {
                    const t = this.x,
                        n = this.y,
                        i = this.z,
                        r = e.elements;
                    return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this
                }
                applyNormalMatrix(e) {
                    return this.applyMatrix3(e).normalize()
                }
                applyMatrix4(e) {
                    const t = this.x,
                        n = this.y,
                        i = this.z,
                        r = e.elements,
                        o = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
                    return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * o, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * o, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * o, this
                }
                applyQuaternion(e) {
                    const t = this.x,
                        n = this.y,
                        i = this.z,
                        r = e.x,
                        o = e.y,
                        a = e.z,
                        l = e.w,
                        c = l * t + o * i - a * n,
                        h = l * n + a * t - r * i,
                        u = l * i + r * n - o * t,
                        d = -r * t - o * n - a * i;
                    return this.x = c * l + d * -r + h * -a - u * -o, this.y = h * l + d * -o + u * -r - c * -a, this.z = u * l + d * -a + c * -o - h * -r, this
                }
                project(e) {
                    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
                }
                unproject(e) {
                    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
                }
                transformDirection(e) {
                    const t = this.x,
                        n = this.y,
                        i = this.z,
                        r = e.elements;
                    return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize()
                }
                divide(e) {
                    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
                }
                divideScalar(e) {
                    return this.multiplyScalar(1 / e)
                }
                min(e) {
                    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
                }
                max(e) {
                    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
                }
                clamp(e, t) {
                    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this
                }
                clampScalar(e, t) {
                    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this
                }
                clampLength(e, t) {
                    const n = this.length();
                    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
                }
                floor() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
                }
                ceil() {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
                }
                round() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
                }
                roundToZero() {
                    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
                }
                negate() {
                    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
                }
                dot(e) {
                    return this.x * e.x + this.y * e.y + this.z * e.z
                }
                lengthSq() {
                    return this.x * this.x + this.y * this.y + this.z * this.z
                }
                length() {
                    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
                }
                manhattanLength() {
                    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
                }
                normalize() {
                    return this.divideScalar(this.length() || 1)
                }
                setLength(e) {
                    return this.normalize().multiplyScalar(e)
                }
                lerp(e, t) {
                    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
                }
                lerpVectors(e, t, n) {
                    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this
                }
                cross(e, t) {
                    return t !== void 0 ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e)
                }
                crossVectors(e, t) {
                    const n = e.x,
                        i = e.y,
                        r = e.z,
                        o = t.x,
                        a = t.y,
                        l = t.z;
                    return this.x = i * l - r * a, this.y = r * o - n * l, this.z = n * a - i * o, this
                }
                projectOnVector(e) {
                    const t = e.lengthSq();
                    if (t === 0) return this.set(0, 0, 0);
                    const n = e.dot(this) / t;
                    return this.copy(e).multiplyScalar(n)
                }
                projectOnPlane(e) {
                    return Ri.copy(this).projectOnVector(e), this.sub(Ri)
                }
                reflect(e) {
                    return this.sub(Ri.copy(e).multiplyScalar(2 * this.dot(e)))
                }
                angleTo(e) {
                    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
                    if (t === 0) return Math.PI / 2;
                    const n = this.dot(e) / t;
                    return Math.acos(vt(n, -1, 1))
                }
                distanceTo(e) {
                    return Math.sqrt(this.distanceToSquared(e))
                }
                distanceToSquared(e) {
                    const t = this.x - e.x,
                        n = this.y - e.y,
                        i = this.z - e.z;
                    return t * t + n * n + i * i
                }
                manhattanDistanceTo(e) {
                    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
                }
                setFromSpherical(e) {
                    return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
                }
                setFromSphericalCoords(e, t, n) {
                    const i = Math.sin(t) * e;
                    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this
                }
                setFromCylindrical(e) {
                    return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
                }
                setFromCylindricalCoords(e, t, n) {
                    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this
                }
                setFromMatrixPosition(e) {
                    const t = e.elements;
                    return this.x = t[12], this.y = t[13], this.z = t[14], this
                }
                setFromMatrixScale(e) {
                    const t = this.setFromMatrixColumn(e, 0).length(),
                        n = this.setFromMatrixColumn(e, 1).length(),
                        i = this.setFromMatrixColumn(e, 2).length();
                    return this.x = t, this.y = n, this.z = i, this
                }
                setFromMatrixColumn(e, t) {
                    return this.fromArray(e.elements, 4 * t)
                }
                setFromMatrix3Column(e, t) {
                    return this.fromArray(e.elements, 3 * t)
                }
                equals(e) {
                    return e.x === this.x && e.y === this.y && e.z === this.z
                }
                fromArray(e, t = 0) {
                    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
                }
                toArray(e = [], t = 0) {
                    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
                }
                fromBufferAttribute(e, t, n) {
                    return n !== void 0 && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this
                }
                random() {
                    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
                }
            }
            y.prototype.isVector3 = !0;
            const Ri = new y,
                Tr = new zt;
            class xt {
                constructor(e = new y(1 / 0, 1 / 0, 1 / 0), t = new y(-1 / 0, -1 / 0, -1 / 0)) {
                    this.min = e, this.max = t
                }
                set(e, t) {
                    return this.min.copy(e), this.max.copy(t), this
                }
                setFromArray(e) {
                    let t = 1 / 0,
                        n = 1 / 0,
                        i = 1 / 0,
                        r = -1 / 0,
                        o = -1 / 0,
                        a = -1 / 0;
                    for (let l = 0, c = e.length; l < c; l += 3) {
                        const h = e[l],
                            u = e[l + 1],
                            d = e[l + 2];
                        h < t && (t = h), u < n && (n = u), d < i && (i = d), h > r && (r = h), u > o && (o = u), d > a && (a = d)
                    }
                    return this.min.set(t, n, i), this.max.set(r, o, a), this
                }
                setFromBufferAttribute(e) {
                    let t = 1 / 0,
                        n = 1 / 0,
                        i = 1 / 0,
                        r = -1 / 0,
                        o = -1 / 0,
                        a = -1 / 0;
                    for (let l = 0, c = e.count; l < c; l++) {
                        const h = e.getX(l),
                            u = e.getY(l),
                            d = e.getZ(l);
                        h < t && (t = h), u < n && (n = u), d < i && (i = d), h > r && (r = h), u > o && (o = u), d > a && (a = d)
                    }
                    return this.min.set(t, n, i), this.max.set(r, o, a), this
                }
                setFromPoints(e) {
                    this.makeEmpty();
                    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
                    return this
                }
                setFromCenterAndSize(e, t) {
                    const n = zn.copy(t).multiplyScalar(.5);
                    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
                }
                setFromObject(e) {
                    return this.makeEmpty(), this.expandByObject(e)
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                copy(e) {
                    return this.min.copy(e.min), this.max.copy(e.max), this
                }
                makeEmpty() {
                    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
                }
                isEmpty() {
                    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
                }
                getCenter(e) {
                    return e === void 0 && (console.warn("THREE.Box3: .getCenter() target is now required"), e = new y), this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
                }
                getSize(e) {
                    return e === void 0 && (console.warn("THREE.Box3: .getSize() target is now required"), e = new y), this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
                }
                expandByPoint(e) {
                    return this.min.min(e), this.max.max(e), this
                }
                expandByVector(e) {
                    return this.min.sub(e), this.max.add(e), this
                }
                expandByScalar(e) {
                    return this.min.addScalar(-e), this.max.addScalar(e), this
                }
                expandByObject(e) {
                    e.updateWorldMatrix(!1, !1);
                    const t = e.geometry;
                    t !== void 0 && (t.boundingBox === null && t.computeBoundingBox(), Pi.copy(t.boundingBox), Pi.applyMatrix4(e.matrixWorld), this.union(Pi));
                    const n = e.children;
                    for (let i = 0, r = n.length; i < r; i++) this.expandByObject(n[i]);
                    return this
                }
                containsPoint(e) {
                    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
                }
                containsBox(e) {
                    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
                }
                getParameter(e, t) {
                    return t === void 0 && (console.warn("THREE.Box3: .getParameter() target is now required"), t = new y), t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
                }
                intersectsBox(e) {
                    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
                }
                intersectsSphere(e) {
                    return this.clampPoint(e.center, zn), zn.distanceToSquared(e.center) <= e.radius * e.radius
                }
                intersectsPlane(e) {
                    let t, n;
                    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant
                }
                intersectsTriangle(e) {
                    if (this.isEmpty()) return !1;
                    this.getCenter(On), Jn.subVectors(this.max, On), vn.subVectors(e.a, On), xn.subVectors(e.b, On), yn.subVectors(e.c, On), Vt.subVectors(xn, vn), Wt.subVectors(yn, xn), Kt.subVectors(vn, yn);
                    let t = [0, -Vt.z, Vt.y, 0, -Wt.z, Wt.y, 0, -Kt.z, Kt.y, Vt.z, 0, -Vt.x, Wt.z, 0, -Wt.x, Kt.z, 0, -Kt.x, -Vt.y, Vt.x, 0, -Wt.y, Wt.x, 0, -Kt.y, Kt.x, 0];
                    return !!Di(t, vn, xn, yn, Jn) && (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!Di(t, vn, xn, yn, Jn) && (Qn.crossVectors(Vt, Wt), t = [Qn.x, Qn.y, Qn.z], Di(t, vn, xn, yn, Jn)))
                }
                clampPoint(e, t) {
                    return t === void 0 && (console.warn("THREE.Box3: .clampPoint() target is now required"), t = new y), t.copy(e).clamp(this.min, this.max)
                }
                distanceToPoint(e) {
                    return zn.copy(e).clamp(this.min, this.max).sub(e).length()
                }
                getBoundingSphere(e) {
                    return e === void 0 && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(e.center), e.radius = .5 * this.getSize(zn).length(), e
                }
                intersect(e) {
                    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
                }
                union(e) {
                    return this.min.min(e.min), this.max.max(e.max), this
                }
                applyMatrix4(e) {
                    return this.isEmpty() || (Ot[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Ot[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Ot[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Ot[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Ot[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Ot[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Ot[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Ot[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Ot)), this
                }
                translate(e) {
                    return this.min.add(e), this.max.add(e), this
                }
                equals(e) {
                    return e.min.equals(this.min) && e.max.equals(this.max)
                }
            }
            xt.prototype.isBox3 = !0;
            const Ot = [new y, new y, new y, new y, new y, new y, new y, new y],
                zn = new y,
                Pi = new xt,
                vn = new y,
                xn = new y,
                yn = new y,
                Vt = new y,
                Wt = new y,
                Kt = new y,
                On = new y,
                Jn = new y,
                Qn = new y,
                en = new y;

            function Di(s, e, t, n, i) {
                for (let r = 0, o = s.length - 3; r <= o; r += 3) {
                    en.fromArray(s, r);
                    const a = i.x * Math.abs(en.x) + i.y * Math.abs(en.y) + i.z * Math.abs(en.z),
                        l = e.dot(en),
                        c = t.dot(en),
                        h = n.dot(en);
                    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a) return !1
                }
                return !0
            }
            const Oa = new xt,
                Lr = new y,
                Ii = new y,
                Ni = new y;
            class _n {
                constructor(e = new y, t = -1) {
                    this.center = e, this.radius = t
                }
                set(e, t) {
                    return this.center.copy(e), this.radius = t, this
                }
                setFromPoints(e, t) {
                    const n = this.center;
                    t !== void 0 ? n.copy(t) : Oa.setFromPoints(e).getCenter(n);
                    let i = 0;
                    for (let r = 0, o = e.length; r < o; r++) i = Math.max(i, n.distanceToSquared(e[r]));
                    return this.radius = Math.sqrt(i), this
                }
                copy(e) {
                    return this.center.copy(e.center), this.radius = e.radius, this
                }
                isEmpty() {
                    return this.radius < 0
                }
                makeEmpty() {
                    return this.center.set(0, 0, 0), this.radius = -1, this
                }
                containsPoint(e) {
                    return e.distanceToSquared(this.center) <= this.radius * this.radius
                }
                distanceToPoint(e) {
                    return e.distanceTo(this.center) - this.radius
                }
                intersectsSphere(e) {
                    const t = this.radius + e.radius;
                    return e.center.distanceToSquared(this.center) <= t * t
                }
                intersectsBox(e) {
                    return e.intersectsSphere(this)
                }
                intersectsPlane(e) {
                    return Math.abs(e.distanceToPoint(this.center)) <= this.radius
                }
                clampPoint(e, t) {
                    const n = this.center.distanceToSquared(e);
                    return t === void 0 && (console.warn("THREE.Sphere: .clampPoint() target is now required"), t = new y), t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t
                }
                getBoundingBox(e) {
                    return e === void 0 && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), e = new xt), this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e)
                }
                applyMatrix4(e) {
                    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
                }
                translate(e) {
                    return this.center.add(e), this
                }
                expandByPoint(e) {
                    Ni.subVectors(e, this.center);
                    const t = Ni.lengthSq();
                    if (t > this.radius * this.radius) {
                        const n = Math.sqrt(t),
                            i = .5 * (n - this.radius);
                        this.center.add(Ni.multiplyScalar(i / n)), this.radius += i
                    }
                    return this
                }
                union(e) {
                    return Ii.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius), this.expandByPoint(Lr.copy(e.center).add(Ii)), this.expandByPoint(Lr.copy(e.center).sub(Ii)), this
                }
                equals(e) {
                    return e.center.equals(this.center) && e.radius === this.radius
                }
                clone() {
                    return new this.constructor().copy(this)
                }
            }
            const Ft = new y,
                zi = new y,
                $n = new y,
                kt = new y,
                Oi = new y,
                Kn = new y,
                Fi = new y;
            class tn {
                constructor(e = new y, t = new y(0, 0, -1)) {
                    this.origin = e, this.direction = t
                }
                set(e, t) {
                    return this.origin.copy(e), this.direction.copy(t), this
                }
                copy(e) {
                    return this.origin.copy(e.origin), this.direction.copy(e.direction), this
                }
                at(e, t) {
                    return t === void 0 && (console.warn("THREE.Ray: .at() target is now required"), t = new y), t.copy(this.direction).multiplyScalar(e).add(this.origin)
                }
                lookAt(e) {
                    return this.direction.copy(e).sub(this.origin).normalize(), this
                }
                recast(e) {
                    return this.origin.copy(this.at(e, Ft)), this
                }
                closestPointToPoint(e, t) {
                    t === void 0 && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), t = new y), t.subVectors(e, this.origin);
                    const n = t.dot(this.direction);
                    return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin)
                }
                distanceToPoint(e) {
                    return Math.sqrt(this.distanceSqToPoint(e))
                }
                distanceSqToPoint(e) {
                    const t = Ft.subVectors(e, this.origin).dot(this.direction);
                    return t < 0 ? this.origin.distanceToSquared(e) : (Ft.copy(this.direction).multiplyScalar(t).add(this.origin), Ft.distanceToSquared(e))
                }
                distanceSqToSegment(e, t, n, i) {
                    zi.copy(e).add(t).multiplyScalar(.5), $n.copy(t).sub(e).normalize(), kt.copy(this.origin).sub(zi);
                    const r = .5 * e.distanceTo(t),
                        o = -this.direction.dot($n),
                        a = kt.dot(this.direction),
                        l = -kt.dot($n),
                        c = kt.lengthSq(),
                        h = Math.abs(1 - o * o);
                    let u, d, p, g;
                    if (h > 0)
                        if (u = o * l - a, d = o * a - l, g = r * h, u >= 0)
                            if (d >= -g)
                                if (d <= g) {
                                    const f = 1 / h;
                                    u *= f, d *= f, p = u * (u + o * d + 2 * a) + d * (o * u + d + 2 * l) + c
                                } else d = r, u = Math.max(0, -(o * d + a)), p = -u * u + d * (d + 2 * l) + c;
                            else d = -r, u = Math.max(0, -(o * d + a)), p = -u * u + d * (d + 2 * l) + c;
                        else d <= -g ? (u = Math.max(0, -(-o * r + a)), d = u > 0 ? -r : Math.min(Math.max(-r, -l), r), p = -u * u + d * (d + 2 * l) + c) : d <= g ? (u = 0, d = Math.min(Math.max(-r, -l), r), p = d * (d + 2 * l) + c) : (u = Math.max(0, -(o * r + a)), d = u > 0 ? r : Math.min(Math.max(-r, -l), r), p = -u * u + d * (d + 2 * l) + c);
                    else d = o > 0 ? -r : r, u = Math.max(0, -(o * d + a)), p = -u * u + d * (d + 2 * l) + c;
                    return n && n.copy(this.direction).multiplyScalar(u).add(this.origin), i && i.copy($n).multiplyScalar(d).add(zi), p
                }
                intersectSphere(e, t) {
                    Ft.subVectors(e.center, this.origin);
                    const n = Ft.dot(this.direction),
                        i = Ft.dot(Ft) - n * n,
                        r = e.radius * e.radius;
                    if (i > r) return null;
                    const o = Math.sqrt(r - i),
                        a = n - o,
                        l = n + o;
                    return a < 0 && l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t)
                }
                intersectsSphere(e) {
                    return this.distanceSqToPoint(e.center) <= e.radius * e.radius
                }
                distanceToPlane(e) {
                    const t = e.normal.dot(this.direction);
                    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
                    const n = -(this.origin.dot(e.normal) + e.constant) / t;
                    return n >= 0 ? n : null
                }
                intersectPlane(e, t) {
                    const n = this.distanceToPlane(e);
                    return n === null ? null : this.at(n, t)
                }
                intersectsPlane(e) {
                    const t = e.distanceToPoint(this.origin);
                    return t === 0 || e.normal.dot(this.direction) * t < 0
                }
                intersectBox(e, t) {
                    let n, i, r, o, a, l;
                    const c = 1 / this.direction.x,
                        h = 1 / this.direction.y,
                        u = 1 / this.direction.z,
                        d = this.origin;
                    return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), h >= 0 ? (r = (e.min.y - d.y) * h, o = (e.max.y - d.y) * h) : (r = (e.max.y - d.y) * h, o = (e.min.y - d.y) * h), n > o || r > i ? null : ((r > n || n != n) && (n = r), (o < i || i != i) && (i = o), u >= 0 ? (a = (e.min.z - d.z) * u, l = (e.max.z - d.z) * u) : (a = (e.max.z - d.z) * u, l = (e.min.z - d.z) * u), n > l || a > i ? null : ((a > n || n != n) && (n = a), (l < i || i != i) && (i = l), i < 0 ? null : this.at(n >= 0 ? n : i, t)))
                }
                intersectsBox(e) {
                    return this.intersectBox(e, Ft) !== null
                }
                intersectTriangle(e, t, n, i, r) {
                    Oi.subVectors(t, e), Kn.subVectors(n, e), Fi.crossVectors(Oi, Kn);
                    let o, a = this.direction.dot(Fi);
                    if (a > 0) {
                        if (i) return null;
                        o = 1
                    } else {
                        if (!(a < 0)) return null;
                        o = -1, a = -a
                    }
                    kt.subVectors(this.origin, e);
                    const l = o * this.direction.dot(Kn.crossVectors(kt, Kn));
                    if (l < 0) return null;
                    const c = o * this.direction.dot(Oi.cross(kt));
                    if (c < 0 || l + c > a) return null;
                    const h = -o * kt.dot(Fi);
                    return h < 0 ? null : this.at(h / a, r)
                }
                applyMatrix4(e) {
                    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
                }
                equals(e) {
                    return e.origin.equals(this.origin) && e.direction.equals(this.direction)
                }
                clone() {
                    return new this.constructor().copy(this)
                }
            }
            class ae {
                constructor() {
                    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
                }
                set(e, t, n, i, r, o, a, l, c, h, u, d, p, g, f, m) {
                    const v = this.elements;
                    return v[0] = e, v[4] = t, v[8] = n, v[12] = i, v[1] = r, v[5] = o, v[9] = a, v[13] = l, v[2] = c, v[6] = h, v[10] = u, v[14] = d, v[3] = p, v[7] = g, v[11] = f, v[15] = m, this
                }
                identity() {
                    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
                }
                clone() {
                    return new ae().fromArray(this.elements)
                }
                copy(e) {
                    const t = this.elements,
                        n = e.elements;
                    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this
                }
                copyPosition(e) {
                    const t = this.elements,
                        n = e.elements;
                    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this
                }
                setFromMatrix3(e) {
                    const t = e.elements;
                    return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this
                }
                extractBasis(e, t, n) {
                    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
                }
                makeBasis(e, t, n) {
                    return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this
                }
                extractRotation(e) {
                    const t = this.elements,
                        n = e.elements,
                        i = 1 / wn.setFromMatrixColumn(e, 0).length(),
                        r = 1 / wn.setFromMatrixColumn(e, 1).length(),
                        o = 1 / wn.setFromMatrixColumn(e, 2).length();
                    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
                }
                makeRotationFromEuler(e) {
                    e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
                    const t = this.elements,
                        n = e.x,
                        i = e.y,
                        r = e.z,
                        o = Math.cos(n),
                        a = Math.sin(n),
                        l = Math.cos(i),
                        c = Math.sin(i),
                        h = Math.cos(r),
                        u = Math.sin(r);
                    if (e.order === "XYZ") {
                        const d = o * h,
                            p = o * u,
                            g = a * h,
                            f = a * u;
                        t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = p + g * c, t[5] = d - f * c, t[9] = -a * l, t[2] = f - d * c, t[6] = g + p * c, t[10] = o * l
                    } else if (e.order === "YXZ") {
                        const d = l * h,
                            p = l * u,
                            g = c * h,
                            f = c * u;
                        t[0] = d + f * a, t[4] = g * a - p, t[8] = o * c, t[1] = o * u, t[5] = o * h, t[9] = -a, t[2] = p * a - g, t[6] = f + d * a, t[10] = o * l
                    } else if (e.order === "ZXY") {
                        const d = l * h,
                            p = l * u,
                            g = c * h,
                            f = c * u;
                        t[0] = d - f * a, t[4] = -o * u, t[8] = g + p * a, t[1] = p + g * a, t[5] = o * h, t[9] = f - d * a, t[2] = -o * c, t[6] = a, t[10] = o * l
                    } else if (e.order === "ZYX") {
                        const d = o * h,
                            p = o * u,
                            g = a * h,
                            f = a * u;
                        t[0] = l * h, t[4] = g * c - p, t[8] = d * c + f, t[1] = l * u, t[5] = f * c + d, t[9] = p * c - g, t[2] = -c, t[6] = a * l, t[10] = o * l
                    } else if (e.order === "YZX") {
                        const d = o * l,
                            p = o * c,
                            g = a * l,
                            f = a * c;
                        t[0] = l * h, t[4] = f - d * u, t[8] = g * u + p, t[1] = u, t[5] = o * h, t[9] = -a * h, t[2] = -c * h, t[6] = p * u + g, t[10] = d - f * u
                    } else if (e.order === "XZY") {
                        const d = o * l,
                            p = o * c,
                            g = a * l,
                            f = a * c;
                        t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = d * u + f, t[5] = o * h, t[9] = p * u - g, t[2] = g * u - p, t[6] = a * h, t[10] = f * u + d
                    }
                    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
                }
                makeRotationFromQuaternion(e) {
                    return this.compose(Fa, e, Ha)
                }
                lookAt(e, t, n) {
                    const i = this.elements;
                    return ut.subVectors(e, t), ut.lengthSq() === 0 && (ut.z = 1), ut.normalize(), jt.crossVectors(n, ut), jt.lengthSq() === 0 && (Math.abs(n.z) === 1 ? ut.x += 1e-4 : ut.z += 1e-4, ut.normalize(), jt.crossVectors(n, ut)), jt.normalize(), ei.crossVectors(ut, jt), i[0] = jt.x, i[4] = ei.x, i[8] = ut.x, i[1] = jt.y, i[5] = ei.y, i[9] = ut.y, i[2] = jt.z, i[6] = ei.z, i[10] = ut.z, this
                }
                multiply(e, t) {
                    return t !== void 0 ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
                }
                premultiply(e) {
                    return this.multiplyMatrices(e, this)
                }
                multiplyMatrices(e, t) {
                    const n = e.elements,
                        i = t.elements,
                        r = this.elements,
                        o = n[0],
                        a = n[4],
                        l = n[8],
                        c = n[12],
                        h = n[1],
                        u = n[5],
                        d = n[9],
                        p = n[13],
                        g = n[2],
                        f = n[6],
                        m = n[10],
                        v = n[14],
                        w = n[3],
                        M = n[7],
                        _ = n[11],
                        A = n[15],
                        L = i[0],
                        b = i[4],
                        C = i[8],
                        z = i[12],
                        R = i[1],
                        I = i[5],
                        N = i[9],
                        D = i[13],
                        O = i[2],
                        B = i[6],
                        q = i[10],
                        ee = i[14],
                        k = i[3],
                        Z = i[7],
                        te = i[11],
                        S = i[15];
                    return r[0] = o * L + a * R + l * O + c * k, r[4] = o * b + a * I + l * B + c * Z, r[8] = o * C + a * N + l * q + c * te, r[12] = o * z + a * D + l * ee + c * S, r[1] = h * L + u * R + d * O + p * k, r[5] = h * b + u * I + d * B + p * Z, r[9] = h * C + u * N + d * q + p * te, r[13] = h * z + u * D + d * ee + p * S, r[2] = g * L + f * R + m * O + v * k, r[6] = g * b + f * I + m * B + v * Z, r[10] = g * C + f * N + m * q + v * te, r[14] = g * z + f * D + m * ee + v * S, r[3] = w * L + M * R + _ * O + A * k, r[7] = w * b + M * I + _ * B + A * Z, r[11] = w * C + M * N + _ * q + A * te, r[15] = w * z + M * D + _ * ee + A * S, this
                }
                multiplyScalar(e) {
                    const t = this.elements;
                    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
                }
                determinant() {
                    const e = this.elements,
                        t = e[0],
                        n = e[4],
                        i = e[8],
                        r = e[12],
                        o = e[1],
                        a = e[5],
                        l = e[9],
                        c = e[13],
                        h = e[2],
                        u = e[6],
                        d = e[10],
                        p = e[14];
                    return e[3] * (+r * l * u - i * c * u - r * a * d + n * c * d + i * a * p - n * l * p) + e[7] * (+t * l * p - t * c * d + r * o * d - i * o * p + i * c * h - r * l * h) + e[11] * (+t * c * u - t * a * p - r * o * u + n * o * p + r * a * h - n * c * h) + e[15] * (-i * a * h - t * l * u + t * a * d + i * o * u - n * o * d + n * l * h)
                }
                transpose() {
                    const e = this.elements;
                    let t;
                    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
                }
                setPosition(e, t, n) {
                    const i = this.elements;
                    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this
                }
                invert() {
                    const e = this.elements,
                        t = e[0],
                        n = e[1],
                        i = e[2],
                        r = e[3],
                        o = e[4],
                        a = e[5],
                        l = e[6],
                        c = e[7],
                        h = e[8],
                        u = e[9],
                        d = e[10],
                        p = e[11],
                        g = e[12],
                        f = e[13],
                        m = e[14],
                        v = e[15],
                        w = u * m * c - f * d * c + f * l * p - a * m * p - u * l * v + a * d * v,
                        M = g * d * c - h * m * c - g * l * p + o * m * p + h * l * v - o * d * v,
                        _ = h * f * c - g * u * c + g * a * p - o * f * p - h * a * v + o * u * v,
                        A = g * u * l - h * f * l - g * a * d + o * f * d + h * a * m - o * u * m,
                        L = t * w + n * M + i * _ + r * A;
                    if (L === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                    const b = 1 / L;
                    return e[0] = w * b, e[1] = (f * d * r - u * m * r - f * i * p + n * m * p + u * i * v - n * d * v) * b, e[2] = (a * m * r - f * l * r + f * i * c - n * m * c - a * i * v + n * l * v) * b, e[3] = (u * l * r - a * d * r - u * i * c + n * d * c + a * i * p - n * l * p) * b, e[4] = M * b, e[5] = (h * m * r - g * d * r + g * i * p - t * m * p - h * i * v + t * d * v) * b, e[6] = (g * l * r - o * m * r - g * i * c + t * m * c + o * i * v - t * l * v) * b, e[7] = (o * d * r - h * l * r + h * i * c - t * d * c - o * i * p + t * l * p) * b, e[8] = _ * b, e[9] = (g * u * r - h * f * r - g * n * p + t * f * p + h * n * v - t * u * v) * b, e[10] = (o * f * r - g * a * r + g * n * c - t * f * c - o * n * v + t * a * v) * b, e[11] = (h * a * r - o * u * r - h * n * c + t * u * c + o * n * p - t * a * p) * b, e[12] = A * b, e[13] = (h * f * i - g * u * i + g * n * d - t * f * d - h * n * m + t * u * m) * b, e[14] = (g * a * i - o * f * i - g * n * l + t * f * l + o * n * m - t * a * m) * b, e[15] = (o * u * i - h * a * i + h * n * l - t * u * l - o * n * d + t * a * d) * b, this
                }
                scale(e) {
                    const t = this.elements,
                        n = e.x,
                        i = e.y,
                        r = e.z;
                    return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this
                }
                getMaxScaleOnAxis() {
                    const e = this.elements,
                        t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
                        n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
                        i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
                    return Math.sqrt(Math.max(t, n, i))
                }
                makeTranslation(e, t, n) {
                    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this
                }
                makeRotationX(e) {
                    const t = Math.cos(e),
                        n = Math.sin(e);
                    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this
                }
                makeRotationY(e) {
                    const t = Math.cos(e),
                        n = Math.sin(e);
                    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this
                }
                makeRotationZ(e) {
                    const t = Math.cos(e),
                        n = Math.sin(e);
                    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
                }
                makeRotationAxis(e, t) {
                    const n = Math.cos(t),
                        i = Math.sin(t),
                        r = 1 - n,
                        o = e.x,
                        a = e.y,
                        l = e.z,
                        c = r * o,
                        h = r * a;
                    return this.set(c * o + n, c * a - i * l, c * l + i * a, 0, c * a + i * l, h * a + n, h * l - i * o, 0, c * l - i * a, h * l + i * o, r * l * l + n, 0, 0, 0, 0, 1), this
                }
                makeScale(e, t, n) {
                    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
                }
                makeShear(e, t, n) {
                    return this.set(1, t, n, 0, e, 1, n, 0, e, t, 1, 0, 0, 0, 0, 1), this
                }
                compose(e, t, n) {
                    const i = this.elements,
                        r = t._x,
                        o = t._y,
                        a = t._z,
                        l = t._w,
                        c = r + r,
                        h = o + o,
                        u = a + a,
                        d = r * c,
                        p = r * h,
                        g = r * u,
                        f = o * h,
                        m = o * u,
                        v = a * u,
                        w = l * c,
                        M = l * h,
                        _ = l * u,
                        A = n.x,
                        L = n.y,
                        b = n.z;
                    return i[0] = (1 - (f + v)) * A, i[1] = (p + _) * A, i[2] = (g - M) * A, i[3] = 0, i[4] = (p - _) * L, i[5] = (1 - (d + v)) * L, i[6] = (m + w) * L, i[7] = 0, i[8] = (g + M) * b, i[9] = (m - w) * b, i[10] = (1 - (d + f)) * b, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this
                }
                decompose(e, t, n) {
                    const i = this.elements;
                    let r = wn.set(i[0], i[1], i[2]).length();
                    const o = wn.set(i[4], i[5], i[6]).length(),
                        a = wn.set(i[8], i[9], i[10]).length();
                    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], bt.copy(this);
                    const l = 1 / r,
                        c = 1 / o,
                        h = 1 / a;
                    return bt.elements[0] *= l, bt.elements[1] *= l, bt.elements[2] *= l, bt.elements[4] *= c, bt.elements[5] *= c, bt.elements[6] *= c, bt.elements[8] *= h, bt.elements[9] *= h, bt.elements[10] *= h, t.setFromRotationMatrix(bt), n.x = r, n.y = o, n.z = a, this
                }
                makePerspective(e, t, n, i, r, o) {
                    o === void 0 && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
                    const a = this.elements,
                        l = 2 * r / (t - e),
                        c = 2 * r / (n - i),
                        h = (t + e) / (t - e),
                        u = (n + i) / (n - i),
                        d = -(o + r) / (o - r),
                        p = -2 * o * r / (o - r);
                    return a[0] = l, a[4] = 0, a[8] = h, a[12] = 0, a[1] = 0, a[5] = c, a[9] = u, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = d, a[14] = p, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this
                }
                makeOrthographic(e, t, n, i, r, o) {
                    const a = this.elements,
                        l = 1 / (t - e),
                        c = 1 / (n - i),
                        h = 1 / (o - r),
                        u = (t + e) * l,
                        d = (n + i) * c,
                        p = (o + r) * h;
                    return a[0] = 2 * l, a[4] = 0, a[8] = 0, a[12] = -u, a[1] = 0, a[5] = 2 * c, a[9] = 0, a[13] = -d, a[2] = 0, a[6] = 0, a[10] = -2 * h, a[14] = -p, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this
                }
                equals(e) {
                    const t = this.elements,
                        n = e.elements;
                    for (let i = 0; i < 16; i++)
                        if (t[i] !== n[i]) return !1;
                    return !0
                }
                fromArray(e, t = 0) {
                    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
                    return this
                }
                toArray(e = [], t = 0) {
                    const n = this.elements;
                    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e
                }
            }
            ae.prototype.isMatrix4 = !0;
            const wn = new y,
                bt = new ae,
                Fa = new y(0, 0, 0),
                Ha = new y(1, 1, 1),
                jt = new y,
                ei = new y,
                ut = new y,
                Ar = new ae,
                Cr = new zt;
            class nn {
                constructor(e = 0, t = 0, n = 0, i = nn.DefaultOrder) {
                    this._x = e, this._y = t, this._z = n, this._order = i
                }
                get x() {
                    return this._x
                }
                set x(e) {
                    this._x = e, this._onChangeCallback()
                }
                get y() {
                    return this._y
                }
                set y(e) {
                    this._y = e, this._onChangeCallback()
                }
                get z() {
                    return this._z
                }
                set z(e) {
                    this._z = e, this._onChangeCallback()
                }
                get order() {
                    return this._order
                }
                set order(e) {
                    this._order = e, this._onChangeCallback()
                }
                set(e, t, n, i) {
                    return this._x = e, this._y = t, this._z = n, this._order = i || this._order, this._onChangeCallback(), this
                }
                clone() {
                    return new this.constructor(this._x, this._y, this._z, this._order)
                }
                copy(e) {
                    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this
                }
                setFromRotationMatrix(e, t, n) {
                    const i = e.elements,
                        r = i[0],
                        o = i[4],
                        a = i[8],
                        l = i[1],
                        c = i[5],
                        h = i[9],
                        u = i[2],
                        d = i[6],
                        p = i[10];
                    switch (t = t || this._order) {
                        case "XYZ":
                            this._y = Math.asin(vt(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(d, c), this._z = 0);
                            break;
                        case "YXZ":
                            this._x = Math.asin(-vt(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(a, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0);
                            break;
                        case "ZXY":
                            this._x = Math.asin(vt(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, r));
                            break;
                        case "ZYX":
                            this._y = Math.asin(-vt(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-o, c));
                            break;
                        case "YZX":
                            this._z = Math.asin(vt(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(a, p));
                            break;
                        case "XZY":
                            this._z = Math.asin(-vt(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-h, p), this._y = 0);
                            break;
                        default:
                            console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
                    }
                    return this._order = t, n !== !1 && this._onChangeCallback(), this
                }
                setFromQuaternion(e, t, n) {
                    return Ar.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ar, t, n)
                }
                setFromVector3(e, t) {
                    return this.set(e.x, e.y, e.z, t || this._order)
                }
                reorder(e) {
                    return Cr.setFromEuler(this), this.setFromQuaternion(Cr, e)
                }
                equals(e) {
                    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
                }
                fromArray(e) {
                    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this
                }
                toArray(e = [], t = 0) {
                    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
                }
                toVector3(e) {
                    return e ? e.set(this._x, this._y, this._z) : new y(this._x, this._y, this._z)
                }
                _onChange(e) {
                    return this._onChangeCallback = e, this
                }
                _onChangeCallback() { }
            }
            nn.prototype.isEuler = !0, nn.DefaultOrder = "XYZ", nn.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
            class Rr {
                constructor() {
                    this.mask = 1
                }
                set(e) {
                    this.mask = 1 << e | 0
                }
                enable(e) {
                    this.mask |= 1 << e | 0
                }
                enableAll() {
                    this.mask = -1
                }
                toggle(e) {
                    this.mask ^= 1 << e | 0
                }
                disable(e) {
                    this.mask &= ~(1 << e | 0)
                }
                disableAll() {
                    this.mask = 0
                }
                test(e) {
                    return (this.mask & e.mask) != 0
                }
            }
            let Ua = 0;
            const Pr = new y,
                bn = new zt,
                Ht = new ae,
                ti = new y,
                Fn = new y,
                Ba = new y,
                Ga = new zt,
                Dr = new y(1, 0, 0),
                Ir = new y(0, 1, 0),
                Nr = new y(0, 0, 1),
                Va = {
                    type: "added"
                },
                zr = {
                    type: "removed"
                };
            class Ie extends we {
                constructor() {
                    super(), Object.defineProperty(this, "id", {
                        value: Ua++
                    }), this.uuid = Je(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ie.DefaultUp.clone();
                    const e = new y,
                        t = new nn,
                        n = new zt,
                        i = new y(1, 1, 1);
                    t._onChange(function () {
                        n.setFromEuler(t, !1)
                    }), n._onChange(function () {
                        t.setFromQuaternion(n, void 0, !1)
                    }), Object.defineProperties(this, {
                        position: {
                            configurable: !0,
                            enumerable: !0,
                            value: e
                        },
                        rotation: {
                            configurable: !0,
                            enumerable: !0,
                            value: t
                        },
                        quaternion: {
                            configurable: !0,
                            enumerable: !0,
                            value: n
                        },
                        scale: {
                            configurable: !0,
                            enumerable: !0,
                            value: i
                        },
                        modelViewMatrix: {
                            value: new ae
                        },
                        normalMatrix: {
                            value: new it
                        }
                    }), this.matrix = new ae, this.matrixWorld = new ae, this.matrixAutoUpdate = Ie.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Rr, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
                }
                onBeforeRender() { }
                onAfterRender() { }
                applyMatrix4(e) {
                    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale)
                }
                applyQuaternion(e) {
                    return this.quaternion.premultiply(e), this
                }
                setRotationFromAxisAngle(e, t) {
                    this.quaternion.setFromAxisAngle(e, t)
                }
                setRotationFromEuler(e) {
                    this.quaternion.setFromEuler(e, !0)
                }
                setRotationFromMatrix(e) {
                    this.quaternion.setFromRotationMatrix(e)
                }
                setRotationFromQuaternion(e) {
                    this.quaternion.copy(e)
                }
                rotateOnAxis(e, t) {
                    return bn.setFromAxisAngle(e, t), this.quaternion.multiply(bn), this
                }
                rotateOnWorldAxis(e, t) {
                    return bn.setFromAxisAngle(e, t), this.quaternion.premultiply(bn), this
                }
                rotateX(e) {
                    return this.rotateOnAxis(Dr, e)
                }
                rotateY(e) {
                    return this.rotateOnAxis(Ir, e)
                }
                rotateZ(e) {
                    return this.rotateOnAxis(Nr, e)
                }
                translateOnAxis(e, t) {
                    return Pr.copy(e).applyQuaternion(this.quaternion), this.position.add(Pr.multiplyScalar(t)), this
                }
                translateX(e) {
                    return this.translateOnAxis(Dr, e)
                }
                translateY(e) {
                    return this.translateOnAxis(Ir, e)
                }
                translateZ(e) {
                    return this.translateOnAxis(Nr, e)
                }
                localToWorld(e) {
                    return e.applyMatrix4(this.matrixWorld)
                }
                worldToLocal(e) {
                    return e.applyMatrix4(Ht.copy(this.matrixWorld).invert())
                }
                lookAt(e, t, n) {
                    e.isVector3 ? ti.copy(e) : ti.set(e, t, n);
                    const i = this.parent;
                    this.updateWorldMatrix(!0, !1), Fn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Ht.lookAt(Fn, ti, this.up) : Ht.lookAt(ti, Fn, this.up), this.quaternion.setFromRotationMatrix(Ht), i && (Ht.extractRotation(i.matrixWorld), bn.setFromRotationMatrix(Ht), this.quaternion.premultiply(bn.invert()))
                }
                add(e) {
                    if (arguments.length > 1) {
                        for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
                        return this
                    }
                    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Va)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
                }
                remove(e) {
                    if (arguments.length > 1) {
                        for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
                        return this
                    }
                    const t = this.children.indexOf(e);
                    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(zr)), this
                }
                clear() {
                    for (let e = 0; e < this.children.length; e++) {
                        const t = this.children[e];
                        t.parent = null, t.dispatchEvent(zr)
                    }
                    return this.children.length = 0, this
                }
                attach(e) {
                    return this.updateWorldMatrix(!0, !1), Ht.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Ht.multiply(e.parent.matrixWorld)), e.applyMatrix4(Ht), this.add(e), e.updateWorldMatrix(!1, !0), this
                }
                getObjectById(e) {
                    return this.getObjectByProperty("id", e)
                }
                getObjectByName(e) {
                    return this.getObjectByProperty("name", e)
                }
                getObjectByProperty(e, t) {
                    if (this[e] === t) return this;
                    for (let n = 0, i = this.children.length; n < i; n++) {
                        const r = this.children[n].getObjectByProperty(e, t);
                        if (r !== void 0) return r
                    }
                }
                getWorldPosition(e) {
                    return e === void 0 && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), e = new y), this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
                }
                getWorldQuaternion(e) {
                    return e === void 0 && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), e = new zt), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Fn, e, Ba), e
                }
                getWorldScale(e) {
                    return e === void 0 && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), e = new y), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Fn, Ga, e), e
                }
                getWorldDirection(e) {
                    e === void 0 && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), e = new y), this.updateWorldMatrix(!0, !1);
                    const t = this.matrixWorld.elements;
                    return e.set(t[8], t[9], t[10]).normalize()
                }
                raycast() { }
                traverse(e) {
                    e(this);
                    const t = this.children;
                    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e)
                }
                traverseVisible(e) {
                    if (this.visible === !1) return;
                    e(this);
                    const t = this.children;
                    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e)
                }
                traverseAncestors(e) {
                    const t = this.parent;
                    t !== null && (e(t), t.traverseAncestors(e))
                }
                updateMatrix() {
                    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
                }
                updateMatrixWorld(e) {
                    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
                    const t = this.children;
                    for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e)
                }
                updateWorldMatrix(e, t) {
                    const n = this.parent;
                    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
                        const i = this.children;
                        for (let r = 0, o = i.length; r < o; r++) i[r].updateWorldMatrix(!1, !0)
                    }
                }
                toJSON(e) {
                    const t = e === void 0 || typeof e == "string",
                        n = {};
                    t && (e = {
                        geometries: {},
                        materials: {},
                        textures: {},
                        images: {},
                        shapes: {},
                        skeletons: {},
                        animations: {}
                    }, n.metadata = {
                        version: 4.5,
                        type: "Object",
                        generator: "Object3D.toJSON"
                    });
                    const i = {};

                    function r(a, l) {
                        return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid
                    }
                    if (i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isMesh || this.isLine || this.isPoints) {
                        i.geometry = r(e.geometries, this.geometry);
                        const a = this.geometry.parameters;
                        if (a !== void 0 && a.shapes !== void 0) {
                            const l = a.shapes;
                            if (Array.isArray(l))
                                for (let c = 0, h = l.length; c < h; c++) {
                                    const u = l[c];
                                    r(e.shapes, u)
                                } else r(e.shapes, l)
                        }
                    }
                    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
                        if (Array.isArray(this.material)) {
                            const a = [];
                            for (let l = 0, c = this.material.length; l < c; l++) a.push(r(e.materials, this.material[l]));
                            i.material = a
                        } else i.material = r(e.materials, this.material);
                    if (this.children.length > 0) {
                        i.children = [];
                        for (let a = 0; a < this.children.length; a++) i.children.push(this.children[a].toJSON(e).object)
                    }
                    if (this.animations.length > 0) {
                        i.animations = [];
                        for (let a = 0; a < this.animations.length; a++) {
                            const l = this.animations[a];
                            i.animations.push(r(e.animations, l))
                        }
                    }
                    if (t) {
                        const a = o(e.geometries),
                            l = o(e.materials),
                            c = o(e.textures),
                            h = o(e.images),
                            u = o(e.shapes),
                            d = o(e.skeletons),
                            p = o(e.animations);
                        a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), p.length > 0 && (n.animations = p)
                    }
                    return n.object = i, n;

                    function o(a) {
                        const l = [];
                        for (const c in a) {
                            const h = a[c];
                            delete h.metadata, l.push(h)
                        }
                        return l
                    }
                }
                clone(e) {
                    return new this.constructor().copy(this, e)
                }
                copy(e, t = !0) {
                    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
                        for (let n = 0; n < e.children.length; n++) {
                            const i = e.children[n];
                            this.add(i.clone())
                        }
                    return this
                }
            }
            Ie.DefaultUp = new y(0, 1, 0), Ie.DefaultMatrixAutoUpdate = !0, Ie.prototype.isObject3D = !0;
            const Hi = new y,
                Wa = new y,
                ka = new it;
            class Rt {
                constructor(e = new y(1, 0, 0), t = 0) {
                    this.normal = e, this.constant = t
                }
                set(e, t) {
                    return this.normal.copy(e), this.constant = t, this
                }
                setComponents(e, t, n, i) {
                    return this.normal.set(e, t, n), this.constant = i, this
                }
                setFromNormalAndCoplanarPoint(e, t) {
                    return this.normal.copy(e), this.constant = -t.dot(this.normal), this
                }
                setFromCoplanarPoints(e, t, n) {
                    const i = Hi.subVectors(n, t).cross(Wa.subVectors(e, t)).normalize();
                    return this.setFromNormalAndCoplanarPoint(i, e), this
                }
                copy(e) {
                    return this.normal.copy(e.normal), this.constant = e.constant, this
                }
                normalize() {
                    const e = 1 / this.normal.length();
                    return this.normal.multiplyScalar(e), this.constant *= e, this
                }
                negate() {
                    return this.constant *= -1, this.normal.negate(), this
                }
                distanceToPoint(e) {
                    return this.normal.dot(e) + this.constant
                }
                distanceToSphere(e) {
                    return this.distanceToPoint(e.center) - e.radius
                }
                projectPoint(e, t) {
                    return t === void 0 && (console.warn("THREE.Plane: .projectPoint() target is now required"), t = new y), t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
                }
                intersectLine(e, t) {
                    t === void 0 && (console.warn("THREE.Plane: .intersectLine() target is now required"), t = new y);
                    const n = e.delta(Hi),
                        i = this.normal.dot(n);
                    if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
                    const r = -(e.start.dot(this.normal) + this.constant) / i;
                    return r < 0 || r > 1 ? null : t.copy(n).multiplyScalar(r).add(e.start)
                }
                intersectsLine(e) {
                    const t = this.distanceToPoint(e.start),
                        n = this.distanceToPoint(e.end);
                    return t < 0 && n > 0 || n < 0 && t > 0
                }
                intersectsBox(e) {
                    return e.intersectsPlane(this)
                }
                intersectsSphere(e) {
                    return e.intersectsPlane(this)
                }
                coplanarPoint(e) {
                    return e === void 0 && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), e = new y), e.copy(this.normal).multiplyScalar(-this.constant)
                }
                applyMatrix4(e, t) {
                    const n = t || ka.getNormalMatrix(e),
                        i = this.coplanarPoint(Hi).applyMatrix4(e),
                        r = this.normal.applyMatrix3(n).normalize();
                    return this.constant = -i.dot(r), this
                }
                translate(e) {
                    return this.constant -= e.dot(this.normal), this
                }
                equals(e) {
                    return e.normal.equals(this.normal) && e.constant === this.constant
                }
                clone() {
                    return new this.constructor().copy(this)
                }
            }
            Rt.prototype.isPlane = !0;
            const Mt = new y,
                Ut = new y,
                Ui = new y,
                Bt = new y,
                Mn = new y,
                Sn = new y,
                Or = new y,
                Bi = new y,
                Gi = new y,
                Vi = new y;
            class Qe {
                constructor(e = new y, t = new y, n = new y) {
                    this.a = e, this.b = t, this.c = n
                }
                static getNormal(e, t, n, i) {
                    i === void 0 && (console.warn("THREE.Triangle: .getNormal() target is now required"), i = new y), i.subVectors(n, t), Mt.subVectors(e, t), i.cross(Mt);
                    const r = i.lengthSq();
                    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
                }
                static getBarycoord(e, t, n, i, r) {
                    Mt.subVectors(i, t), Ut.subVectors(n, t), Ui.subVectors(e, t);
                    const o = Mt.dot(Mt),
                        a = Mt.dot(Ut),
                        l = Mt.dot(Ui),
                        c = Ut.dot(Ut),
                        h = Ut.dot(Ui),
                        u = o * c - a * a;
                    if (r === void 0 && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), r = new y), u === 0) return r.set(-2, -1, -1);
                    const d = 1 / u,
                        p = (c * l - a * h) * d,
                        g = (o * h - a * l) * d;
                    return r.set(1 - p - g, g, p)
                }
                static containsPoint(e, t, n, i) {
                    return this.getBarycoord(e, t, n, i, Bt), Bt.x >= 0 && Bt.y >= 0 && Bt.x + Bt.y <= 1
                }
                static getUV(e, t, n, i, r, o, a, l) {
                    return this.getBarycoord(e, t, n, i, Bt), l.set(0, 0), l.addScaledVector(r, Bt.x), l.addScaledVector(o, Bt.y), l.addScaledVector(a, Bt.z), l
                }
                static isFrontFacing(e, t, n, i) {
                    return Mt.subVectors(n, t), Ut.subVectors(e, t), Mt.cross(Ut).dot(i) < 0
                }
                set(e, t, n) {
                    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this
                }
                setFromPointsAndIndices(e, t, n, i) {
                    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                copy(e) {
                    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
                }
                getArea() {
                    return Mt.subVectors(this.c, this.b), Ut.subVectors(this.a, this.b), .5 * Mt.cross(Ut).length()
                }
                getMidpoint(e) {
                    return e === void 0 && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), e = new y), e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
                }
                getNormal(e) {
                    return Qe.getNormal(this.a, this.b, this.c, e)
                }
                getPlane(e) {
                    return e === void 0 && (console.warn("THREE.Triangle: .getPlane() target is now required"), e = new Rt), e.setFromCoplanarPoints(this.a, this.b, this.c)
                }
                getBarycoord(e, t) {
                    return Qe.getBarycoord(e, this.a, this.b, this.c, t)
                }
                getUV(e, t, n, i, r) {
                    return Qe.getUV(e, this.a, this.b, this.c, t, n, i, r)
                }
                containsPoint(e) {
                    return Qe.containsPoint(e, this.a, this.b, this.c)
                }
                isFrontFacing(e) {
                    return Qe.isFrontFacing(this.a, this.b, this.c, e)
                }
                intersectsBox(e) {
                    return e.intersectsTriangle(this)
                }
                closestPointToPoint(e, t) {
                    t === void 0 && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), t = new y);
                    const n = this.a,
                        i = this.b,
                        r = this.c;
                    let o, a;
                    Mn.subVectors(i, n), Sn.subVectors(r, n), Bi.subVectors(e, n);
                    const l = Mn.dot(Bi),
                        c = Sn.dot(Bi);
                    if (l <= 0 && c <= 0) return t.copy(n);
                    Gi.subVectors(e, i);
                    const h = Mn.dot(Gi),
                        u = Sn.dot(Gi);
                    if (h >= 0 && u <= h) return t.copy(i);
                    const d = l * u - h * c;
                    if (d <= 0 && l >= 0 && h <= 0) return o = l / (l - h), t.copy(n).addScaledVector(Mn, o);
                    Vi.subVectors(e, r);
                    const p = Mn.dot(Vi),
                        g = Sn.dot(Vi);
                    if (g >= 0 && p <= g) return t.copy(r);
                    const f = p * c - l * g;
                    if (f <= 0 && c >= 0 && g <= 0) return a = c / (c - g), t.copy(n).addScaledVector(Sn, a);
                    const m = h * g - p * u;
                    if (m <= 0 && u - h >= 0 && p - g >= 0) return Or.subVectors(r, i), a = (u - h) / (u - h + (p - g)), t.copy(i).addScaledVector(Or, a);
                    const v = 1 / (m + f + d);
                    return o = f * v, a = d * v, t.copy(n).addScaledVector(Mn, o).addScaledVector(Sn, a)
                }
                equals(e) {
                    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
                }
            }
            let ja = 0;

            function lt() {
                Object.defineProperty(this, "id", {
                    value: ja++
                }), this.uuid = Je(), this.name = "", this.type = "Material", this.fog = !0, this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = ie, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = pn, this.stencilZFail = pn, this.stencilZPass = pn, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0
            }
            lt.prototype = Object.assign(Object.create(we.prototype), {
                constructor: lt,
                isMaterial: !0,
                onBuild: function () { },
                onBeforeCompile: function () { },
                customProgramCacheKey: function () {
                    return this.onBeforeCompile.toString()
                },
                setValues: function (s) {
                    if (s !== void 0)
                        for (const e in s) {
                            const t = s[e];
                            if (t === void 0) {
                                console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                                continue
                            }
                            if (e === "shading") {
                                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = t === 1;
                                continue
                            }
                            const n = this[e];
                            n !== void 0 ? n && n.isColor ? n.set(t) : n && n.isVector3 && t && t.isVector3 ? n.copy(t) : this[e] = t : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
                        }
                },
                toJSON: function (s) {
                    const e = s === void 0 || typeof s == "string";
                    e && (s = {
                        textures: {},
                        images: {}
                    });
                    const t = {
                        metadata: {
                            version: 4.5,
                            type: "Material",
                            generator: "Material.toJSON"
                        }
                    };

                    function n(i) {
                        const r = [];
                        for (const o in i) {
                            const a = i[o];
                            delete a.metadata, r.push(a)
                        }
                        return r
                    }
                    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), this.color && this.color.isColor && (t.color = this.color.getHex()), this.roughness !== void 0 && (t.roughness = this.roughness), this.metalness !== void 0 && (t.metalness = this.metalness), this.sheen && this.sheen.isColor && (t.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (t.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (t.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (t.specular = this.specular.getHex()), this.shininess !== void 0 && (t.shininess = this.shininess), this.clearcoat !== void 0 && (t.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (t.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (t.clearcoatMap = this.clearcoatMap.toJSON(s).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (t.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(s).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (t.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(s).uuid, t.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (t.map = this.map.toJSON(s).uuid), this.matcap && this.matcap.isTexture && (t.matcap = this.matcap.toJSON(s).uuid), this.alphaMap && this.alphaMap.isTexture && (t.alphaMap = this.alphaMap.toJSON(s).uuid), this.lightMap && this.lightMap.isTexture && (t.lightMap = this.lightMap.toJSON(s).uuid, t.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (t.aoMap = this.aoMap.toJSON(s).uuid, t.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (t.bumpMap = this.bumpMap.toJSON(s).uuid, t.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (t.normalMap = this.normalMap.toJSON(s).uuid, t.normalMapType = this.normalMapType, t.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (t.displacementMap = this.displacementMap.toJSON(s).uuid, t.displacementScale = this.displacementScale, t.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (t.roughnessMap = this.roughnessMap.toJSON(s).uuid), this.metalnessMap && this.metalnessMap.isTexture && (t.metalnessMap = this.metalnessMap.toJSON(s).uuid), this.emissiveMap && this.emissiveMap.isTexture && (t.emissiveMap = this.emissiveMap.toJSON(s).uuid), this.specularMap && this.specularMap.isTexture && (t.specularMap = this.specularMap.toJSON(s).uuid), this.envMap && this.envMap.isTexture && (t.envMap = this.envMap.toJSON(s).uuid, this.combine !== void 0 && (t.combine = this.combine)), this.envMapIntensity !== void 0 && (t.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (t.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (t.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (t.gradientMap = this.gradientMap.toJSON(s).uuid), this.size !== void 0 && (t.size = this.size), this.shadowSide !== null && (t.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (t.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (t.blending = this.blending), this.side !== 0 && (t.side = this.side), this.vertexColors && (t.vertexColors = !0), this.opacity < 1 && (t.opacity = this.opacity), this.transparent === !0 && (t.transparent = this.transparent), t.depthFunc = this.depthFunc, t.depthTest = this.depthTest, t.depthWrite = this.depthWrite, t.colorWrite = this.colorWrite, t.stencilWrite = this.stencilWrite, t.stencilWriteMask = this.stencilWriteMask, t.stencilFunc = this.stencilFunc, t.stencilRef = this.stencilRef, t.stencilFuncMask = this.stencilFuncMask, t.stencilFail = this.stencilFail, t.stencilZFail = this.stencilZFail, t.stencilZPass = this.stencilZPass, this.rotation && this.rotation !== 0 && (t.rotation = this.rotation), this.polygonOffset === !0 && (t.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (t.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (t.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && this.linewidth !== 1 && (t.linewidth = this.linewidth), this.dashSize !== void 0 && (t.dashSize = this.dashSize), this.gapSize !== void 0 && (t.gapSize = this.gapSize), this.scale !== void 0 && (t.scale = this.scale), this.dithering === !0 && (t.dithering = !0), this.alphaTest > 0 && (t.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (t.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (t.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (t.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (t.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (t.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (t.wireframeLinejoin = this.wireframeLinejoin), this.morphTargets === !0 && (t.morphTargets = !0), this.morphNormals === !0 && (t.morphNormals = !0), this.skinning === !0 && (t.skinning = !0), this.flatShading === !0 && (t.flatShading = this.flatShading), this.visible === !1 && (t.visible = !1), this.toneMapped === !1 && (t.toneMapped = !1), JSON.stringify(this.userData) !== "{}" && (t.userData = this.userData), e) {
                        const i = n(s.textures),
                            r = n(s.images);
                        i.length > 0 && (t.textures = i), r.length > 0 && (t.images = r)
                    }
                    return t
                },
                clone: function () {
                    return new this.constructor().copy(this)
                },
                copy: function (s) {
                    this.name = s.name, this.fog = s.fog, this.blending = s.blending, this.side = s.side, this.vertexColors = s.vertexColors, this.opacity = s.opacity, this.transparent = s.transparent, this.blendSrc = s.blendSrc, this.blendDst = s.blendDst, this.blendEquation = s.blendEquation, this.blendSrcAlpha = s.blendSrcAlpha, this.blendDstAlpha = s.blendDstAlpha, this.blendEquationAlpha = s.blendEquationAlpha, this.depthFunc = s.depthFunc, this.depthTest = s.depthTest, this.depthWrite = s.depthWrite, this.stencilWriteMask = s.stencilWriteMask, this.stencilFunc = s.stencilFunc, this.stencilRef = s.stencilRef, this.stencilFuncMask = s.stencilFuncMask, this.stencilFail = s.stencilFail, this.stencilZFail = s.stencilZFail, this.stencilZPass = s.stencilZPass, this.stencilWrite = s.stencilWrite;
                    const e = s.clippingPlanes;
                    let t = null;
                    if (e !== null) {
                        const n = e.length;
                        t = new Array(n);
                        for (let i = 0; i !== n; ++i) t[i] = e[i].clone()
                    }
                    return this.clippingPlanes = t, this.clipIntersection = s.clipIntersection, this.clipShadows = s.clipShadows, this.shadowSide = s.shadowSide, this.colorWrite = s.colorWrite, this.precision = s.precision, this.polygonOffset = s.polygonOffset, this.polygonOffsetFactor = s.polygonOffsetFactor, this.polygonOffsetUnits = s.polygonOffsetUnits, this.dithering = s.dithering, this.alphaTest = s.alphaTest, this.alphaToCoverage = s.alphaToCoverage, this.premultipliedAlpha = s.premultipliedAlpha, this.visible = s.visible, this.toneMapped = s.toneMapped, this.userData = JSON.parse(JSON.stringify(s.userData)), this
                },
                dispose: function () {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
            }), Object.defineProperty(lt.prototype, "needsUpdate", {
                set: function (s) {
                    s === !0 && this.version++
                }
            });
            const Fr = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            },
                St = {
                    h: 0,
                    s: 0,
                    l: 0
                },
                ni = {
                    h: 0,
                    s: 0,
                    l: 0
                };

            function Wi(s, e, t) {
                return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s + 6 * (e - s) * t : t < .5 ? e : t < 2 / 3 ? s + 6 * (e - s) * (2 / 3 - t) : s
            }

            function ki(s) {
                return s < .04045 ? .0773993808 * s : Math.pow(.9478672986 * s + .0521327014, 2.4)
            }

            function ji(s) {
                return s < .0031308 ? 12.92 * s : 1.055 * Math.pow(s, .41666) - .055
            }
            class fe {
                constructor(e, t, n) {
                    return t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n)
                }
                set(e) {
                    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this
                }
                setScalar(e) {
                    return this.r = e, this.g = e, this.b = e, this
                }
                setHex(e) {
                    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this
                }
                setRGB(e, t, n) {
                    return this.r = e, this.g = t, this.b = n, this
                }
                setHSL(e, t, n) {
                    if (e = (e % (i = 1) + i) % i, t = vt(t, 0, 1), n = vt(n, 0, 1), t === 0) this.r = this.g = this.b = n;
                    else {
                        const r = n <= .5 ? n * (1 + t) : n + t - n * t,
                            o = 2 * n - r;
                        this.r = Wi(o, r, e + 1 / 3), this.g = Wi(o, r, e), this.b = Wi(o, r, e - 1 / 3)
                    }
                    var i;
                    return this
                }
                setStyle(e) {
                    function t(i) {
                        i !== void 0 && parseFloat(i) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
                    }
                    let n;
                    if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
                        let i;
                        const r = n[1],
                            o = n[2];
                        switch (r) {
                            case "rgb":
                            case "rgba":
                                if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return this.r = Math.min(255, parseInt(i[1], 10)) / 255, this.g = Math.min(255, parseInt(i[2], 10)) / 255, this.b = Math.min(255, parseInt(i[3], 10)) / 255, t(i[4]), this;
                                if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return this.r = Math.min(100, parseInt(i[1], 10)) / 100, this.g = Math.min(100, parseInt(i[2], 10)) / 100, this.b = Math.min(100, parseInt(i[3], 10)) / 100, t(i[4]), this;
                                break;
                            case "hsl":
                            case "hsla":
                                if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) {
                                    const a = parseFloat(i[1]) / 360,
                                        l = parseInt(i[2], 10) / 100,
                                        c = parseInt(i[3], 10) / 100;
                                    return t(i[4]), this.setHSL(a, l, c)
                                }
                        }
                    } else if (n = /^\#([A-Fa-f\d]+)$/.exec(e)) {
                        const i = n[1],
                            r = i.length;
                        if (r === 3) return this.r = parseInt(i.charAt(0) + i.charAt(0), 16) / 255, this.g = parseInt(i.charAt(1) + i.charAt(1), 16) / 255, this.b = parseInt(i.charAt(2) + i.charAt(2), 16) / 255, this;
                        if (r === 6) return this.r = parseInt(i.charAt(0) + i.charAt(1), 16) / 255, this.g = parseInt(i.charAt(2) + i.charAt(3), 16) / 255, this.b = parseInt(i.charAt(4) + i.charAt(5), 16) / 255, this
                    }
                    return e && e.length > 0 ? this.setColorName(e) : this
                }
                setColorName(e) {
                    const t = Fr[e.toLowerCase()];
                    return t !== void 0 ? this.setHex(t) : console.warn("THREE.Color: Unknown color " + e), this
                }
                clone() {
                    return new this.constructor(this.r, this.g, this.b)
                }
                copy(e) {
                    return this.r = e.r, this.g = e.g, this.b = e.b, this
                }
                copyGammaToLinear(e, t = 2) {
                    return this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this
                }
                copyLinearToGamma(e, t = 2) {
                    const n = t > 0 ? 1 / t : 1;
                    return this.r = Math.pow(e.r, n), this.g = Math.pow(e.g, n), this.b = Math.pow(e.b, n), this
                }
                convertGammaToLinear(e) {
                    return this.copyGammaToLinear(this, e), this
                }
                convertLinearToGamma(e) {
                    return this.copyLinearToGamma(this, e), this
                }
                copySRGBToLinear(e) {
                    return this.r = ki(e.r), this.g = ki(e.g), this.b = ki(e.b), this
                }
                copyLinearToSRGB(e) {
                    return this.r = ji(e.r), this.g = ji(e.g), this.b = ji(e.b), this
                }
                convertSRGBToLinear() {
                    return this.copySRGBToLinear(this), this
                }
                convertLinearToSRGB() {
                    return this.copyLinearToSRGB(this), this
                }
                getHex() {
                    return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
                }
                getHexString() {
                    return ("000000" + this.getHex().toString(16)).slice(-6)
                }
                getHSL(e) {
                    e === void 0 && (console.warn("THREE.Color: .getHSL() target is now required"), e = {
                        h: 0,
                        s: 0,
                        l: 0
                    });
                    const t = this.r,
                        n = this.g,
                        i = this.b,
                        r = Math.max(t, n, i),
                        o = Math.min(t, n, i);
                    let a, l;
                    const c = (o + r) / 2;
                    if (o === r) a = 0, l = 0;
                    else {
                        const h = r - o;
                        switch (l = c <= .5 ? h / (r + o) : h / (2 - r - o), r) {
                            case t:
                                a = (n - i) / h + (n < i ? 6 : 0);
                                break;
                            case n:
                                a = (i - t) / h + 2;
                                break;
                            case i:
                                a = (t - n) / h + 4
                        }
                        a /= 6
                    }
                    return e.h = a, e.s = l, e.l = c, e
                }
                getStyle() {
                    return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
                }
                offsetHSL(e, t, n) {
                    return this.getHSL(St), St.h += e, St.s += t, St.l += n, this.setHSL(St.h, St.s, St.l), this
                }
                add(e) {
                    return this.r += e.r, this.g += e.g, this.b += e.b, this
                }
                addColors(e, t) {
                    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
                }
                addScalar(e) {
                    return this.r += e, this.g += e, this.b += e, this
                }
                sub(e) {
                    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this
                }
                multiply(e) {
                    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
                }
                multiplyScalar(e) {
                    return this.r *= e, this.g *= e, this.b *= e, this
                }
                lerp(e, t) {
                    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
                }
                lerpColors(e, t, n) {
                    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this
                }
                lerpHSL(e, t) {
                    this.getHSL(St), e.getHSL(ni);
                    const n = Ai(St.h, ni.h, t),
                        i = Ai(St.s, ni.s, t),
                        r = Ai(St.l, ni.l, t);
                    return this.setHSL(n, i, r), this
                }
                equals(e) {
                    return e.r === this.r && e.g === this.g && e.b === this.b
                }
                fromArray(e, t = 0) {
                    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
                }
                toArray(e = [], t = 0) {
                    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
                }
                fromBufferAttribute(e, t) {
                    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), e.normalized === !0 && (this.r /= 255, this.g /= 255, this.b /= 255), this
                }
                toJSON() {
                    return this.getHex()
                }
            }
            fe.NAMES = Fr, fe.prototype.isColor = !0, fe.prototype.r = 1, fe.prototype.g = 1, fe.prototype.b = 1;
            class Et extends lt {
                constructor(e) {
                    super(), this.type = "MeshBasicMaterial", this.color = new fe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this
                }
            }
            Et.prototype.isMeshBasicMaterial = !0;
            const Ne = new y,
                ii = new ne;
            class Xe {
                constructor(e, t, n) {
                    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
                    this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n === !0, this.usage = Qt, this.updateRange = {
                        offset: 0,
                        count: -1
                    }, this.version = 0, this.onUploadCallback = function () { }
                }
                set needsUpdate(e) {
                    e === !0 && this.version++
                }
                setUsage(e) {
                    return this.usage = e, this
                }
                copy(e) {
                    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this
                }
                copyAt(e, t, n) {
                    e *= this.itemSize, n *= t.itemSize;
                    for (let i = 0, r = this.itemSize; i < r; i++) this.array[e + i] = t.array[n + i];
                    return this
                }
                copyArray(e) {
                    return this.array.set(e), this
                }
                copyColorsArray(e) {
                    const t = this.array;
                    let n = 0;
                    for (let i = 0, r = e.length; i < r; i++) {
                        let o = e[i];
                        o === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), o = new fe), t[n++] = o.r, t[n++] = o.g, t[n++] = o.b
                    }
                    return this
                }
                copyVector2sArray(e) {
                    const t = this.array;
                    let n = 0;
                    for (let i = 0, r = e.length; i < r; i++) {
                        let o = e[i];
                        o === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), o = new ne), t[n++] = o.x, t[n++] = o.y
                    }
                    return this
                }
                copyVector3sArray(e) {
                    const t = this.array;
                    let n = 0;
                    for (let i = 0, r = e.length; i < r; i++) {
                        let o = e[i];
                        o === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), o = new y), t[n++] = o.x, t[n++] = o.y, t[n++] = o.z
                    }
                    return this
                }
                copyVector4sArray(e) {
                    const t = this.array;
                    let n = 0;
                    for (let i = 0, r = e.length; i < r; i++) {
                        let o = e[i];
                        o === void 0 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), o = new qe), t[n++] = o.x, t[n++] = o.y, t[n++] = o.z, t[n++] = o.w
                    }
                    return this
                }
                applyMatrix3(e) {
                    if (this.itemSize === 2)
                        for (let t = 0, n = this.count; t < n; t++) ii.fromBufferAttribute(this, t), ii.applyMatrix3(e), this.setXY(t, ii.x, ii.y);
                    else if (this.itemSize === 3)
                        for (let t = 0, n = this.count; t < n; t++) Ne.fromBufferAttribute(this, t), Ne.applyMatrix3(e), this.setXYZ(t, Ne.x, Ne.y, Ne.z);
                    return this
                }
                applyMatrix4(e) {
                    for (let t = 0, n = this.count; t < n; t++) Ne.x = this.getX(t), Ne.y = this.getY(t), Ne.z = this.getZ(t), Ne.applyMatrix4(e), this.setXYZ(t, Ne.x, Ne.y, Ne.z);
                    return this
                }
                applyNormalMatrix(e) {
                    for (let t = 0, n = this.count; t < n; t++) Ne.x = this.getX(t), Ne.y = this.getY(t), Ne.z = this.getZ(t), Ne.applyNormalMatrix(e), this.setXYZ(t, Ne.x, Ne.y, Ne.z);
                    return this
                }
                transformDirection(e) {
                    for (let t = 0, n = this.count; t < n; t++) Ne.x = this.getX(t), Ne.y = this.getY(t), Ne.z = this.getZ(t), Ne.transformDirection(e), this.setXYZ(t, Ne.x, Ne.y, Ne.z);
                    return this
                }
                set(e, t = 0) {
                    return this.array.set(e, t), this
                }
                getX(e) {
                    return this.array[e * this.itemSize]
                }
                setX(e, t) {
                    return this.array[e * this.itemSize] = t, this
                }
                getY(e) {
                    return this.array[e * this.itemSize + 1]
                }
                setY(e, t) {
                    return this.array[e * this.itemSize + 1] = t, this
                }
                getZ(e) {
                    return this.array[e * this.itemSize + 2]
                }
                setZ(e, t) {
                    return this.array[e * this.itemSize + 2] = t, this
                }
                getW(e) {
                    return this.array[e * this.itemSize + 3]
                }
                setW(e, t) {
                    return this.array[e * this.itemSize + 3] = t, this
                }
                setXY(e, t, n) {
                    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this
                }
                setXYZ(e, t, n, i) {
                    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this
                }
                setXYZW(e, t, n, i, r) {
                    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this
                }
                onUpload(e) {
                    return this.onUploadCallback = e, this
                }
                clone() {
                    return new this.constructor(this.array, this.itemSize).copy(this)
                }
                toJSON() {
                    const e = {
                        itemSize: this.itemSize,
                        type: this.array.constructor.name,
                        array: Array.prototype.slice.call(this.array),
                        normalized: this.normalized
                    };
                    return this.name !== "" && (e.name = this.name), this.usage !== Qt && (e.usage = this.usage), this.updateRange.offset === 0 && this.updateRange.count === -1 || (e.updateRange = this.updateRange), e
                }
            }
            Xe.prototype.isBufferAttribute = !0;
            class Hr extends Xe {
                constructor(e, t, n) {
                    super(new Uint16Array(e), t, n)
                }
            }
            class Ur extends Xe {
                constructor(e, t, n) {
                    super(new Uint32Array(e), t, n)
                }
            }
            class Me extends Xe {
                constructor(e, t, n) {
                    super(new Float32Array(e), t, n)
                }
            }

            function Br(s) {
                if (s.length === 0) return -1 / 0;
                let e = s[0];
                for (let t = 1, n = s.length; t < n; ++t) s[t] > e && (e = s[t]);
                return e
            }
            let qa = 0;
            const Pt = new ae,
                qi = new Ie,
                En = new y,
                pt = new xt,
                Hn = new xt,
                $e = new y;
            class Pe extends we {
                constructor() {
                    super(), Object.defineProperty(this, "id", {
                        value: qa++
                    }), this.uuid = Je(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                        start: 0,
                        count: 1 / 0
                    }, this.userData = {}
                }
                getIndex() {
                    return this.index
                }
                setIndex(e) {
                    return Array.isArray(e) ? this.index = new (Br(e) > 65535 ? Ur : Hr)(e, 1) : this.index = e, this
                }
                getAttribute(e) {
                    return this.attributes[e]
                }
                setAttribute(e, t) {
                    return this.attributes[e] = t, this
                }
                deleteAttribute(e) {
                    return delete this.attributes[e], this
                }
                hasAttribute(e) {
                    return this.attributes[e] !== void 0
                }
                addGroup(e, t, n = 0) {
                    this.groups.push({
                        start: e,
                        count: t,
                        materialIndex: n
                    })
                }
                clearGroups() {
                    this.groups = []
                }
                setDrawRange(e, t) {
                    this.drawRange.start = e, this.drawRange.count = t
                }
                applyMatrix4(e) {
                    const t = this.attributes.position;
                    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
                    const n = this.attributes.normal;
                    if (n !== void 0) {
                        const r = new it().getNormalMatrix(e);
                        n.applyNormalMatrix(r), n.needsUpdate = !0
                    }
                    const i = this.attributes.tangent;
                    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this
                }
                rotateX(e) {
                    return Pt.makeRotationX(e), this.applyMatrix4(Pt), this
                }
                rotateY(e) {
                    return Pt.makeRotationY(e), this.applyMatrix4(Pt), this
                }
                rotateZ(e) {
                    return Pt.makeRotationZ(e), this.applyMatrix4(Pt), this
                }
                translate(e, t, n) {
                    return Pt.makeTranslation(e, t, n), this.applyMatrix4(Pt), this
                }
                scale(e, t, n) {
                    return Pt.makeScale(e, t, n), this.applyMatrix4(Pt), this
                }
                lookAt(e) {
                    return qi.lookAt(e), qi.updateMatrix(), this.applyMatrix4(qi.matrix), this
                }
                center() {
                    return this.computeBoundingBox(), this.boundingBox.getCenter(En).negate(), this.translate(En.x, En.y, En.z), this
                }
                setFromPoints(e) {
                    const t = [];
                    for (let n = 0, i = e.length; n < i; n++) {
                        const r = e[n];
                        t.push(r.x, r.y, r.z || 0)
                    }
                    return this.setAttribute("position", new Me(t, 3)), this
                }
                computeBoundingBox() {
                    this.boundingBox === null && (this.boundingBox = new xt);
                    const e = this.attributes.position,
                        t = this.morphAttributes.position;
                    if (e && e.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new y(-1 / 0, -1 / 0, -1 / 0), new y(1 / 0, 1 / 0, 1 / 0));
                    if (e !== void 0) {
                        if (this.boundingBox.setFromBufferAttribute(e), t)
                            for (let n = 0, i = t.length; n < i; n++) {
                                const r = t[n];
                                pt.setFromBufferAttribute(r), this.morphTargetsRelative ? ($e.addVectors(this.boundingBox.min, pt.min), this.boundingBox.expandByPoint($e), $e.addVectors(this.boundingBox.max, pt.max), this.boundingBox.expandByPoint($e)) : (this.boundingBox.expandByPoint(pt.min), this.boundingBox.expandByPoint(pt.max))
                            }
                    } else this.boundingBox.makeEmpty();
                    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
                }
                computeBoundingSphere() {
                    this.boundingSphere === null && (this.boundingSphere = new _n);
                    const e = this.attributes.position,
                        t = this.morphAttributes.position;
                    if (e && e.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new y, 1 / 0);
                    if (e) {
                        const n = this.boundingSphere.center;
                        if (pt.setFromBufferAttribute(e), t)
                            for (let r = 0, o = t.length; r < o; r++) {
                                const a = t[r];
                                Hn.setFromBufferAttribute(a), this.morphTargetsRelative ? ($e.addVectors(pt.min, Hn.min), pt.expandByPoint($e), $e.addVectors(pt.max, Hn.max), pt.expandByPoint($e)) : (pt.expandByPoint(Hn.min), pt.expandByPoint(Hn.max))
                            }
                        pt.getCenter(n);
                        let i = 0;
                        for (let r = 0, o = e.count; r < o; r++) $e.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared($e));
                        if (t)
                            for (let r = 0, o = t.length; r < o; r++) {
                                const a = t[r],
                                    l = this.morphTargetsRelative;
                                for (let c = 0, h = a.count; c < h; c++) $e.fromBufferAttribute(a, c), l && (En.fromBufferAttribute(e, c), $e.add(En)), i = Math.max(i, n.distanceToSquared($e))
                            }
                        this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                    }
                }
                computeFaceNormals() { }
                computeTangents() {
                    const e = this.index,
                        t = this.attributes;
                    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
                    const n = e.array,
                        i = t.position.array,
                        r = t.normal.array,
                        o = t.uv.array,
                        a = i.length / 3;
                    t.tangent === void 0 && this.setAttribute("tangent", new Xe(new Float32Array(4 * a), 4));
                    const l = t.tangent.array,
                        c = [],
                        h = [];
                    for (let R = 0; R < a; R++) c[R] = new y, h[R] = new y;
                    const u = new y,
                        d = new y,
                        p = new y,
                        g = new ne,
                        f = new ne,
                        m = new ne,
                        v = new y,
                        w = new y;

                    function M(R, I, N) {
                        u.fromArray(i, 3 * R), d.fromArray(i, 3 * I), p.fromArray(i, 3 * N), g.fromArray(o, 2 * R), f.fromArray(o, 2 * I), m.fromArray(o, 2 * N), d.sub(u), p.sub(u), f.sub(g), m.sub(g);
                        const D = 1 / (f.x * m.y - m.x * f.y);
                        isFinite(D) && (v.copy(d).multiplyScalar(m.y).addScaledVector(p, -f.y).multiplyScalar(D), w.copy(p).multiplyScalar(f.x).addScaledVector(d, -m.x).multiplyScalar(D), c[R].add(v), c[I].add(v), c[N].add(v), h[R].add(w), h[I].add(w), h[N].add(w))
                    }
                    let _ = this.groups;
                    _.length === 0 && (_ = [{
                        start: 0,
                        count: n.length
                    }]);
                    for (let R = 0, I = _.length; R < I; ++R) {
                        const N = _[R],
                            D = N.start;
                        for (let O = D, B = D + N.count; O < B; O += 3) M(n[O + 0], n[O + 1], n[O + 2])
                    }
                    const A = new y,
                        L = new y,
                        b = new y,
                        C = new y;

                    function z(R) {
                        b.fromArray(r, 3 * R), C.copy(b);
                        const I = c[R];
                        A.copy(I), A.sub(b.multiplyScalar(b.dot(I))).normalize(), L.crossVectors(C, I);
                        const N = L.dot(h[R]) < 0 ? -1 : 1;
                        l[4 * R] = A.x, l[4 * R + 1] = A.y, l[4 * R + 2] = A.z, l[4 * R + 3] = N
                    }
                    for (let R = 0, I = _.length; R < I; ++R) {
                        const N = _[R],
                            D = N.start;
                        for (let O = D, B = D + N.count; O < B; O += 3) z(n[O + 0]), z(n[O + 1]), z(n[O + 2])
                    }
                }
                computeVertexNormals() {
                    const e = this.index,
                        t = this.getAttribute("position");
                    if (t !== void 0) {
                        let n = this.getAttribute("normal");
                        if (n === void 0) n = new Xe(new Float32Array(3 * t.count), 3), this.setAttribute("normal", n);
                        else
                            for (let d = 0, p = n.count; d < p; d++) n.setXYZ(d, 0, 0, 0);
                        const i = new y,
                            r = new y,
                            o = new y,
                            a = new y,
                            l = new y,
                            c = new y,
                            h = new y,
                            u = new y;
                        if (e)
                            for (let d = 0, p = e.count; d < p; d += 3) {
                                const g = e.getX(d + 0),
                                    f = e.getX(d + 1),
                                    m = e.getX(d + 2);
                                i.fromBufferAttribute(t, g), r.fromBufferAttribute(t, f), o.fromBufferAttribute(t, m), h.subVectors(o, r), u.subVectors(i, r), h.cross(u), a.fromBufferAttribute(n, g), l.fromBufferAttribute(n, f), c.fromBufferAttribute(n, m), a.add(h), l.add(h), c.add(h), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(f, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z)
                            } else
                            for (let d = 0, p = t.count; d < p; d += 3) i.fromBufferAttribute(t, d + 0), r.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), h.subVectors(o, r), u.subVectors(i, r), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
                        this.normalizeNormals(), n.needsUpdate = !0
                    }
                }
                merge(e, t) {
                    if (!e || !e.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
                    t === void 0 && (t = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
                    const n = this.attributes;
                    for (const i in n) {
                        if (e.attributes[i] === void 0) continue;
                        const r = n[i].array,
                            o = e.attributes[i],
                            a = o.array,
                            l = o.itemSize * t,
                            c = Math.min(a.length, r.length - l);
                        for (let h = 0, u = l; h < c; h++, u++) r[u] = a[h]
                    }
                    return this
                }
                normalizeNormals() {
                    const e = this.attributes.normal;
                    for (let t = 0, n = e.count; t < n; t++) $e.fromBufferAttribute(e, t), $e.normalize(), e.setXYZ(t, $e.x, $e.y, $e.z)
                }
                toNonIndexed() {
                    function e(a, l) {
                        const c = a.array,
                            h = a.itemSize,
                            u = a.normalized,
                            d = new c.constructor(l.length * h);
                        let p = 0,
                            g = 0;
                        for (let f = 0, m = l.length; f < m; f++) {
                            p = l[f] * h;
                            for (let v = 0; v < h; v++) d[g++] = c[p++]
                        }
                        return new Xe(d, h, u)
                    }
                    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
                    const t = new Pe,
                        n = this.index.array,
                        i = this.attributes;
                    for (const a in i) {
                        const l = e(i[a], n);
                        t.setAttribute(a, l)
                    }
                    const r = this.morphAttributes;
                    for (const a in r) {
                        const l = [],
                            c = r[a];
                        for (let h = 0, u = c.length; h < u; h++) {
                            const d = e(c[h], n);
                            l.push(d)
                        }
                        t.morphAttributes[a] = l
                    }
                    t.morphTargetsRelative = this.morphTargetsRelative;
                    const o = this.groups;
                    for (let a = 0, l = o.length; a < l; a++) {
                        const c = o[a];
                        t.addGroup(c.start, c.count, c.materialIndex)
                    }
                    return t
                }
                toJSON() {
                    const e = {
                        metadata: {
                            version: 4.5,
                            type: "BufferGeometry",
                            generator: "BufferGeometry.toJSON"
                        }
                    };
                    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
                        const l = this.parameters;
                        for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
                        return e
                    }
                    e.data = {
                        attributes: {}
                    };
                    const t = this.index;
                    t !== null && (e.data.index = {
                        type: t.array.constructor.name,
                        array: Array.prototype.slice.call(t.array)
                    });
                    const n = this.attributes;
                    for (const l in n) {
                        const c = n[l];
                        e.data.attributes[l] = c.toJSON(e.data)
                    }
                    const i = {};
                    let r = !1;
                    for (const l in this.morphAttributes) {
                        const c = this.morphAttributes[l],
                            h = [];
                        for (let u = 0, d = c.length; u < d; u++) {
                            const p = c[u];
                            h.push(p.toJSON(e.data))
                        }
                        h.length > 0 && (i[l] = h, r = !0)
                    }
                    r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
                    const o = this.groups;
                    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
                    const a = this.boundingSphere;
                    return a !== null && (e.data.boundingSphere = {
                        center: a.center.toArray(),
                        radius: a.radius
                    }), e
                }
                clone() {
                    return new Pe().copy(this)
                }
                copy(e) {
                    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
                    const t = {};
                    this.name = e.name;
                    const n = e.index;
                    n !== null && this.setIndex(n.clone(t));
                    const i = e.attributes;
                    for (const c in i) {
                        const h = i[c];
                        this.setAttribute(c, h.clone(t))
                    }
                    const r = e.morphAttributes;
                    for (const c in r) {
                        const h = [],
                            u = r[c];
                        for (let d = 0, p = u.length; d < p; d++) h.push(u[d].clone(t));
                        this.morphAttributes[c] = h
                    }
                    this.morphTargetsRelative = e.morphTargetsRelative;
                    const o = e.groups;
                    for (let c = 0, h = o.length; c < h; c++) {
                        const u = o[c];
                        this.addGroup(u.start, u.count, u.materialIndex)
                    }
                    const a = e.boundingBox;
                    a !== null && (this.boundingBox = a.clone());
                    const l = e.boundingSphere;
                    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this
                }
                dispose() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
            }
            Pe.prototype.isBufferGeometry = !0;
            const Gr = new ae,
                Tn = new tn,
                Xi = new _n,
                qt = new y,
                Xt = new y,
                Yt = new y,
                Yi = new y,
                Zi = new y,
                Ji = new y,
                ri = new y,
                si = new y,
                ai = new y,
                oi = new ne,
                li = new ne,
                ci = new ne,
                Qi = new y,
                hi = new y;
            class Ke extends Ie {
                constructor(e = new Pe, t = new Et) {
                    super(), this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets()
                }
                copy(e) {
                    return super.copy(e), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this
                }
                updateMorphTargets() {
                    const e = this.geometry;
                    if (e.isBufferGeometry) {
                        const t = e.morphAttributes,
                            n = Object.keys(t);
                        if (n.length > 0) {
                            const i = t[n[0]];
                            if (i !== void 0) {
                                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                                for (let r = 0, o = i.length; r < o; r++) {
                                    const a = i[r].name || String(r);
                                    this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r
                                }
                            }
                        }
                    } else {
                        const t = e.morphTargets;
                        t !== void 0 && t.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
                    }
                }
                raycast(e, t) {
                    const n = this.geometry,
                        i = this.material,
                        r = this.matrixWorld;
                    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), Xi.copy(n.boundingSphere), Xi.applyMatrix4(r), e.ray.intersectsSphere(Xi) === !1) || (Gr.copy(r).invert(), Tn.copy(e.ray).applyMatrix4(Gr), n.boundingBox !== null && Tn.intersectsBox(n.boundingBox) === !1)) return;
                    let o;
                    if (n.isBufferGeometry) {
                        const a = n.index,
                            l = n.attributes.position,
                            c = n.morphAttributes.position,
                            h = n.morphTargetsRelative,
                            u = n.attributes.uv,
                            d = n.attributes.uv2,
                            p = n.groups,
                            g = n.drawRange;
                        if (a !== null)
                            if (Array.isArray(i))
                                for (let f = 0, m = p.length; f < m; f++) {
                                    const v = p[f],
                                        w = i[v.materialIndex];
                                    for (let M = Math.max(v.start, g.start), _ = Math.min(v.start + v.count, g.start + g.count); M < _; M += 3) {
                                        const A = a.getX(M),
                                            L = a.getX(M + 1),
                                            b = a.getX(M + 2);
                                        o = di(this, w, e, Tn, l, c, h, u, d, A, L, b), o && (o.faceIndex = Math.floor(M / 3), o.face.materialIndex = v.materialIndex, t.push(o))
                                    }
                                } else
                                for (let f = Math.max(0, g.start), m = Math.min(a.count, g.start + g.count); f < m; f += 3) {
                                    const v = a.getX(f),
                                        w = a.getX(f + 1),
                                        M = a.getX(f + 2);
                                    o = di(this, i, e, Tn, l, c, h, u, d, v, w, M), o && (o.faceIndex = Math.floor(f / 3), t.push(o))
                                } else if (l !== void 0)
                            if (Array.isArray(i))
                                for (let f = 0, m = p.length; f < m; f++) {
                                    const v = p[f],
                                        w = i[v.materialIndex];
                                    for (let M = Math.max(v.start, g.start), _ = Math.min(v.start + v.count, g.start + g.count); M < _; M += 3) o = di(this, w, e, Tn, l, c, h, u, d, M, M + 1, M + 2), o && (o.faceIndex = Math.floor(M / 3), o.face.materialIndex = v.materialIndex, t.push(o))
                                } else
                                for (let f = Math.max(0, g.start), m = Math.min(l.count, g.start + g.count); f < m; f += 3) o = di(this, i, e, Tn, l, c, h, u, d, f, f + 1, f + 2), o && (o.faceIndex = Math.floor(f / 3), t.push(o))
                    } else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
                }
            }

            function di(s, e, t, n, i, r, o, a, l, c, h, u) {
                qt.fromBufferAttribute(i, c), Xt.fromBufferAttribute(i, h), Yt.fromBufferAttribute(i, u);
                const d = s.morphTargetInfluences;
                if (e.morphTargets && r && d) {
                    ri.set(0, 0, 0), si.set(0, 0, 0), ai.set(0, 0, 0);
                    for (let g = 0, f = r.length; g < f; g++) {
                        const m = d[g],
                            v = r[g];
                        m !== 0 && (Yi.fromBufferAttribute(v, c), Zi.fromBufferAttribute(v, h), Ji.fromBufferAttribute(v, u), o ? (ri.addScaledVector(Yi, m), si.addScaledVector(Zi, m), ai.addScaledVector(Ji, m)) : (ri.addScaledVector(Yi.sub(qt), m), si.addScaledVector(Zi.sub(Xt), m), ai.addScaledVector(Ji.sub(Yt), m)))
                    }
                    qt.add(ri), Xt.add(si), Yt.add(ai)
                }
                s.isSkinnedMesh && e.skinning && (s.boneTransform(c, qt), s.boneTransform(h, Xt), s.boneTransform(u, Yt));
                const p = function (g, f, m, v, w, M, _, A) {
                    let L;
                    if (L = f.side === 1 ? v.intersectTriangle(_, M, w, !0, A) : v.intersectTriangle(w, M, _, f.side !== 2, A), L === null) return null;
                    hi.copy(A), hi.applyMatrix4(g.matrixWorld);
                    const b = m.ray.origin.distanceTo(hi);
                    return b < m.near || b > m.far ? null : {
                        distance: b,
                        point: hi.clone(),
                        object: g
                    }
                }(s, e, t, n, qt, Xt, Yt, Qi);
                if (p) {
                    a && (oi.fromBufferAttribute(a, c), li.fromBufferAttribute(a, h), ci.fromBufferAttribute(a, u), p.uv = Qe.getUV(Qi, qt, Xt, Yt, oi, li, ci, new ne)), l && (oi.fromBufferAttribute(l, c), li.fromBufferAttribute(l, h), ci.fromBufferAttribute(l, u), p.uv2 = Qe.getUV(Qi, qt, Xt, Yt, oi, li, ci, new ne));
                    const g = {
                        a: c,
                        b: h,
                        c: u,
                        normal: new y,
                        materialIndex: 0
                    };
                    Qe.getNormal(qt, Xt, Yt, g.normal), p.face = g
                }
                return p
            }
            Ke.prototype.isMesh = !0;
            class ui extends Pe {
                constructor(e = 1, t = 1, n = 1, i = 1, r = 1, o = 1) {
                    super(), this.type = "BoxGeometry", this.parameters = {
                        width: e,
                        height: t,
                        depth: n,
                        widthSegments: i,
                        heightSegments: r,
                        depthSegments: o
                    };
                    const a = this;
                    i = Math.floor(i), r = Math.floor(r), o = Math.floor(o);
                    const l = [],
                        c = [],
                        h = [],
                        u = [];
                    let d = 0,
                        p = 0;

                    function g(f, m, v, w, M, _, A, L, b, C, z) {
                        const R = _ / b,
                            I = A / C,
                            N = _ / 2,
                            D = A / 2,
                            O = L / 2,
                            B = b + 1,
                            q = C + 1;
                        let ee = 0,
                            k = 0;
                        const Z = new y;
                        for (let te = 0; te < q; te++) {
                            const S = te * I - D;
                            for (let T = 0; T < B; T++) {
                                const j = T * R - N;
                                Z[f] = j * w, Z[m] = S * M, Z[v] = O, c.push(Z.x, Z.y, Z.z), Z[f] = 0, Z[m] = 0, Z[v] = L > 0 ? 1 : -1, h.push(Z.x, Z.y, Z.z), u.push(T / b), u.push(1 - te / C), ee += 1
                            }
                        }
                        for (let te = 0; te < C; te++)
                            for (let S = 0; S < b; S++) {
                                const T = d + S + B * te,
                                    j = d + S + B * (te + 1),
                                    U = d + (S + 1) + B * (te + 1),
                                    V = d + (S + 1) + B * te;
                                l.push(T, j, V), l.push(j, U, V), k += 6
                            }
                        a.addGroup(p, k, z), p += k, d += ee
                    }
                    g("z", "y", "x", -1, -1, n, t, e, o, r, 0), g("z", "y", "x", 1, -1, n, t, -e, o, r, 1), g("x", "z", "y", 1, 1, e, n, t, i, o, 2), g("x", "z", "y", 1, -1, e, n, -t, i, o, 3), g("x", "y", "z", 1, -1, e, t, n, i, r, 4), g("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(l), this.setAttribute("position", new Me(c, 3)), this.setAttribute("normal", new Me(h, 3)), this.setAttribute("uv", new Me(u, 2))
                }
            }

            function Ln(s) {
                const e = {};
                for (const t in s) {
                    e[t] = {};
                    for (const n in s[t]) {
                        const i = s[t][n];
                        i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i
                    }
                }
                return e
            }

            function rt(s) {
                const e = {};
                for (let t = 0; t < s.length; t++) {
                    const n = Ln(s[t]);
                    for (const i in n) e[i] = n[i]
                }
                return e
            }
            const Xa = {
                clone: Ln,
                merge: rt
            };
            class rn extends lt {
                constructor(e) {
                    super(), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, this.fragmentShader = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
                            derivatives: !1,
                            fragDepth: !1,
                            drawBuffers: !1,
                            shaderTextureLOD: !1
                        }, this.defaultAttributeValues = {
                            color: [1, 1, 1],
                            uv: [0, 0],
                            uv2: [0, 0]
                        }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && (e.attributes !== void 0 && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e))
                }
                copy(e) {
                    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Ln(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this
                }
                toJSON(e) {
                    const t = super.toJSON(e);
                    t.glslVersion = this.glslVersion, t.uniforms = {};
                    for (const i in this.uniforms) {
                        const r = this.uniforms[i].value;
                        r && r.isTexture ? t.uniforms[i] = {
                            type: "t",
                            value: r.toJSON(e).uuid
                        } : r && r.isColor ? t.uniforms[i] = {
                            type: "c",
                            value: r.getHex()
                        } : r && r.isVector2 ? t.uniforms[i] = {
                            type: "v2",
                            value: r.toArray()
                        } : r && r.isVector3 ? t.uniforms[i] = {
                            type: "v3",
                            value: r.toArray()
                        } : r && r.isVector4 ? t.uniforms[i] = {
                            type: "v4",
                            value: r.toArray()
                        } : r && r.isMatrix3 ? t.uniforms[i] = {
                            type: "m3",
                            value: r.toArray()
                        } : r && r.isMatrix4 ? t.uniforms[i] = {
                            type: "m4",
                            value: r.toArray()
                        } : t.uniforms[i] = {
                            value: r
                        }
                    }
                    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
                    const n = {};
                    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
                    return Object.keys(n).length > 0 && (t.extensions = n), t
                }
            }
            rn.prototype.isShaderMaterial = !0;
            class $i extends Ie {
                constructor() {
                    super(), this.type = "Camera", this.matrixWorldInverse = new ae, this.projectionMatrix = new ae, this.projectionMatrixInverse = new ae
                }
                copy(e, t) {
                    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this
                }
                getWorldDirection(e) {
                    e === void 0 && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), e = new y), this.updateWorldMatrix(!0, !1);
                    const t = this.matrixWorld.elements;
                    return e.set(-t[8], -t[9], -t[10]).normalize()
                }
                updateMatrixWorld(e) {
                    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
                }
                updateWorldMatrix(e, t) {
                    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
                }
                clone() {
                    return new this.constructor().copy(this)
                }
            }
            $i.prototype.isCamera = !0;
            class mt extends $i {
                constructor(e = 50, t = 1, n = .1, i = 2e3) {
                    super(), this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
                }
                copy(e, t) {
                    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this
                }
                setFocalLength(e) {
                    const t = .5 * this.getFilmHeight() / e;
                    this.fov = 2 * nt * Math.atan(t), this.updateProjectionMatrix()
                }
                getFocalLength() {
                    const e = Math.tan(.5 * tt * this.fov);
                    return .5 * this.getFilmHeight() / e
                }
                getEffectiveFOV() {
                    return 2 * nt * Math.atan(Math.tan(.5 * tt * this.fov) / this.zoom)
                }
                getFilmWidth() {
                    return this.filmGauge * Math.min(this.aspect, 1)
                }
                getFilmHeight() {
                    return this.filmGauge / Math.max(this.aspect, 1)
                }
                setViewOffset(e, t, n, i, r, o) {
                    this.aspect = e / t, this.view === null && (this.view = {
                        enabled: !0,
                        fullWidth: 1,
                        fullHeight: 1,
                        offsetX: 0,
                        offsetY: 0,
                        width: 1,
                        height: 1
                    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix()
                }
                clearViewOffset() {
                    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix()
                }
                updateProjectionMatrix() {
                    const e = this.near;
                    let t = e * Math.tan(.5 * tt * this.fov) / this.zoom,
                        n = 2 * t,
                        i = this.aspect * n,
                        r = -.5 * i;
                    const o = this.view;
                    if (this.view !== null && this.view.enabled) {
                        const l = o.fullWidth,
                            c = o.fullHeight;
                        r += o.offsetX * i / l, t -= o.offsetY * n / c, i *= o.width / l, n *= o.height / c
                    }
                    const a = this.filmOffset;
                    a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
                }
                toJSON(e) {
                    const t = super.toJSON(e);
                    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t
                }
            }
            mt.prototype.isPerspectiveCamera = !0;
            const An = 90;
            class Ki extends Ie {
                constructor(e, t, n) {
                    if (super(), this.type = "CubeCamera", n.isWebGLCubeRenderTarget !== !0) return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
                    this.renderTarget = n;
                    const i = new mt(An, 1, e, t);
                    i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new y(1, 0, 0)), this.add(i);
                    const r = new mt(An, 1, e, t);
                    r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new y(-1, 0, 0)), this.add(r);
                    const o = new mt(An, 1, e, t);
                    o.layers = this.layers, o.up.set(0, 0, 1), o.lookAt(new y(0, 1, 0)), this.add(o);
                    const a = new mt(An, 1, e, t);
                    a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(new y(0, -1, 0)), this.add(a);
                    const l = new mt(An, 1, e, t);
                    l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new y(0, 0, 1)), this.add(l);
                    const c = new mt(An, 1, e, t);
                    c.layers = this.layers, c.up.set(0, -1, 0), c.lookAt(new y(0, 0, -1)), this.add(c)
                }
                update(e, t) {
                    this.parent === null && this.updateMatrixWorld();
                    const n = this.renderTarget,
                        [i, r, o, a, l, c] = this.children,
                        h = e.xr.enabled,
                        u = e.getRenderTarget();
                    e.xr.enabled = !1;
                    const d = n.texture.generateMipmaps;
                    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, r), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, l), n.texture.generateMipmaps = d, e.setRenderTarget(n, 5), e.render(t, c), e.setRenderTarget(u), e.xr.enabled = h
                }
            }
            class pi extends dt {
                constructor(e, t, n, i, r, o, a, l, c, h) {
                    super(e = e !== void 0 ? e : [], t = t !== void 0 ? t : 301, n, i, r, o, a = a !== void 0 ? a : We, l, c, h), this._needsFlipEnvMap = !0, this.flipY = !1
                }
                get images() {
                    return this.image
                }
                set images(e) {
                    this.image = e
                }
            }
            pi.prototype.isCubeTexture = !0;
            class Vr extends gn {
                constructor(e, t, n) {
                    Number.isInteger(t) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), t = n), super(e, e, t), t = t || {}, this.texture = new pi(void 0, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.generateMipmaps = t.generateMipmaps !== void 0 && t.generateMipmaps, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Fe, this.texture._needsFlipEnvMap = !1
                }
                fromEquirectangularTexture(e, t) {
                    this.texture.type = t.type, this.texture.format = Re, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
                    const n = {
                        tEquirect: {
                            value: null
                        }
                    },
                        i = `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
                        r = `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
                        o = new ui(5, 5, 5),
                        a = new rn({
                            name: "CubemapFromEquirect",
                            uniforms: Ln(n),
                            vertexShader: i,
                            fragmentShader: r,
                            side: 1,
                            blending: 0
                        });
                    a.uniforms.tEquirect.value = t;
                    const l = new Ke(o, a),
                        c = t.minFilter;
                    return t.minFilter === 1008 && (t.minFilter = Fe), new Ki(1, 10, this).update(e, l), t.minFilter = c, l.geometry.dispose(), l.material.dispose(), this
                }
                clear(e, t, n, i) {
                    const r = e.getRenderTarget();
                    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, i);
                    e.setRenderTarget(r)
                }
            }
            Vr.prototype.isWebGLCubeRenderTarget = !0;
            class Wr extends dt {
                constructor(e, t, n, i, r, o, a, l, c, h, u, d) {
                    super(null, o, a, l, c, h, i, r, u, d), this.image = {
                        data: e || null,
                        width: t || 1,
                        height: n || 1
                    }, this.magFilter = c !== void 0 ? c : Se, this.minFilter = h !== void 0 ? h : Se, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
                }
            }
            Wr.prototype.isDataTexture = !0;
            const Cn = new _n,
                mi = new y;
            class fi {
                constructor(e = new Rt, t = new Rt, n = new Rt, i = new Rt, r = new Rt, o = new Rt) {
                    this.planes = [e, t, n, i, r, o]
                }
                set(e, t, n, i, r, o) {
                    const a = this.planes;
                    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(o), this
                }
                copy(e) {
                    const t = this.planes;
                    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
                    return this
                }
                setFromProjectionMatrix(e) {
                    const t = this.planes,
                        n = e.elements,
                        i = n[0],
                        r = n[1],
                        o = n[2],
                        a = n[3],
                        l = n[4],
                        c = n[5],
                        h = n[6],
                        u = n[7],
                        d = n[8],
                        p = n[9],
                        g = n[10],
                        f = n[11],
                        m = n[12],
                        v = n[13],
                        w = n[14],
                        M = n[15];
                    return t[0].setComponents(a - i, u - l, f - d, M - m).normalize(), t[1].setComponents(a + i, u + l, f + d, M + m).normalize(), t[2].setComponents(a + r, u + c, f + p, M + v).normalize(), t[3].setComponents(a - r, u - c, f - p, M - v).normalize(), t[4].setComponents(a - o, u - h, f - g, M - w).normalize(), t[5].setComponents(a + o, u + h, f + g, M + w).normalize(), this
                }
                intersectsObject(e) {
                    const t = e.geometry;
                    return t.boundingSphere === null && t.computeBoundingSphere(), Cn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(Cn)
                }
                intersectsSprite(e) {
                    return Cn.center.set(0, 0, 0), Cn.radius = .7071067811865476, Cn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Cn)
                }
                intersectsSphere(e) {
                    const t = this.planes,
                        n = e.center,
                        i = -e.radius;
                    for (let r = 0; r < 6; r++)
                        if (t[r].distanceToPoint(n) < i) return !1;
                    return !0
                }
                intersectsBox(e) {
                    const t = this.planes;
                    for (let n = 0; n < 6; n++) {
                        const i = t[n];
                        if (mi.x = i.normal.x > 0 ? e.max.x : e.min.x, mi.y = i.normal.y > 0 ? e.max.y : e.min.y, mi.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(mi) < 0) return !1
                    }
                    return !0
                }
                containsPoint(e) {
                    const t = this.planes;
                    for (let n = 0; n < 6; n++)
                        if (t[n].distanceToPoint(e) < 0) return !1;
                    return !0
                }
                clone() {
                    return new this.constructor().copy(this)
                }
            }

            function kr() {
                let s = null,
                    e = !1,
                    t = null,
                    n = null;

                function i(r, o) {
                    t(r, o), n = s.requestAnimationFrame(i)
                }
                return {
                    start: function () {
                        e !== !0 && t !== null && (n = s.requestAnimationFrame(i), e = !0)
                    },
                    stop: function () {
                        s.cancelAnimationFrame(n), e = !1
                    },
                    setAnimationLoop: function (r) {
                        t = r
                    },
                    setContext: function (r) {
                        s = r
                    }
                }
            }

            function Ya(s, e) {
                const t = e.isWebGL2,
                    n = new WeakMap;
                return {
                    get: function (i) {
                        return i.isInterleavedBufferAttribute && (i = i.data), n.get(i)
                    },
                    remove: function (i) {
                        i.isInterleavedBufferAttribute && (i = i.data);
                        const r = n.get(i);
                        r && (s.deleteBuffer(r.buffer), n.delete(i))
                    },
                    update: function (i, r) {
                        if (i.isGLBufferAttribute) {
                            const a = n.get(i);
                            return void ((!a || a.version < i.version) && n.set(i, {
                                buffer: i.buffer,
                                type: i.type,
                                bytesPerElement: i.elementSize,
                                version: i.version
                            }))
                        }
                        i.isInterleavedBufferAttribute && (i = i.data);
                        const o = n.get(i);
                        o === void 0 ? n.set(i, function (a, l) {
                            const c = a.array,
                                h = a.usage,
                                u = s.createBuffer();
                            s.bindBuffer(l, u), s.bufferData(l, c, h), a.onUploadCallback();
                            let d = 5126;
                            return c instanceof Float32Array ? d = 5126 : c instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : c instanceof Uint16Array ? a.isFloat16BufferAttribute ? t ? d = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : d = 5123 : c instanceof Int16Array ? d = 5122 : c instanceof Uint32Array ? d = 5125 : c instanceof Int32Array ? d = 5124 : c instanceof Int8Array ? d = 5120 : c instanceof Uint8Array && (d = 5121), {
                                buffer: u,
                                type: d,
                                bytesPerElement: c.BYTES_PER_ELEMENT,
                                version: a.version
                            }
                        }(i, r)) : o.version < i.version && (function (a, l, c) {
                            const h = l.array,
                                u = l.updateRange;
                            s.bindBuffer(c, a), u.count === -1 ? s.bufferSubData(c, 0, h) : (t ? s.bufferSubData(c, u.offset * h.BYTES_PER_ELEMENT, h, u.offset, u.count) : s.bufferSubData(c, u.offset * h.BYTES_PER_ELEMENT, h.subarray(u.offset, u.offset + u.count)), u.count = -1)
                        }(o.buffer, i, r), o.version = i.version)
                    }
                }
            }
            class Za extends Pe {
                constructor(e = 1, t = 1, n = 1, i = 1) {
                    super(), this.type = "PlaneGeometry", this.parameters = {
                        width: e,
                        height: t,
                        widthSegments: n,
                        heightSegments: i
                    };
                    const r = e / 2,
                        o = t / 2,
                        a = Math.floor(n),
                        l = Math.floor(i),
                        c = a + 1,
                        h = l + 1,
                        u = e / a,
                        d = t / l,
                        p = [],
                        g = [],
                        f = [],
                        m = [];
                    for (let v = 0; v < h; v++) {
                        const w = v * d - o;
                        for (let M = 0; M < c; M++) {
                            const _ = M * u - r;
                            g.push(_, -w, 0), f.push(0, 0, 1), m.push(M / a), m.push(1 - v / l)
                        }
                    }
                    for (let v = 0; v < l; v++)
                        for (let w = 0; w < a; w++) {
                            const M = w + c * v,
                                _ = w + c * (v + 1),
                                A = w + 1 + c * (v + 1),
                                L = w + 1 + c * v;
                            p.push(M, _, L), p.push(_, A, L)
                        }
                    this.setIndex(p), this.setAttribute("position", new Me(g, 3)), this.setAttribute("normal", new Me(f, 3)), this.setAttribute("uv", new Me(m, 2))
                }
            }
            const ve = {
                alphamap_fragment: `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
                alphamap_pars_fragment: `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
                alphatest_fragment: `#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,
                aomap_fragment: `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,
                aomap_pars_fragment: `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
                begin_vertex: "vec3 transformed = vec3( position );",
                beginnormal_vertex: `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
                bsdfs: `vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,
                bumpmap_pars_fragment: `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
                clipping_planes_fragment: `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
                clipping_planes_pars_fragment: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
                clipping_planes_pars_vertex: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
                clipping_planes_vertex: `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
                color_fragment: `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
                color_pars_fragment: `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
                color_pars_vertex: `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
                color_vertex: `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
                common: `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,
                cube_uv_reflection_fragment: `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
                defaultnormal_vertex: `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
                displacementmap_pars_vertex: `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
                displacementmap_vertex: `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
                emissivemap_fragment: `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
                emissivemap_pars_fragment: `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
                encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
                encodings_pars_fragment: `
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,
                envmap_fragment: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
                envmap_common_pars_fragment: `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
                envmap_pars_fragment: `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
                envmap_pars_vertex: `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
                envmap_physical_pars_fragment: `#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,
                envmap_vertex: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
                fog_vertex: `#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,
                fog_pars_vertex: `#ifdef USE_FOG
	varying float fogDepth;
#endif`,
                fog_fragment: `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
                fog_pars_fragment: `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
                gradientmap_pars_fragment: `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,
                lightmap_fragment: `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,
                lightmap_pars_fragment: `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
                lights_lambert_vertex: `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,
                lights_pars_begin: `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,
                lights_toon_fragment: `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
                lights_toon_pars_fragment: `varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,
                lights_phong_fragment: `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
                lights_phong_pars_fragment: `varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,
                lights_physical_fragment: `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,
                lights_physical_pars_fragment: `struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
                lights_fragment_begin: `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
                lights_fragment_maps: `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,
                lights_fragment_end: `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
                logdepthbuf_fragment: `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
                logdepthbuf_pars_fragment: `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
                logdepthbuf_pars_vertex: `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
                logdepthbuf_vertex: `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
                map_fragment: `#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,
                map_pars_fragment: `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
                map_particle_fragment: `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
                map_particle_pars_fragment: `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
                metalnessmap_fragment: `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
                metalnessmap_pars_fragment: `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
                morphnormal_vertex: `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,
                morphtarget_pars_vertex: `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,
                morphtarget_vertex: `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,
                normal_fragment_begin: `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
                normal_fragment_maps: `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
                normalmap_pars_fragment: `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,
                clearcoat_normal_fragment_begin: `#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
                clearcoat_normal_fragment_maps: `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
                clearcoat_pars_fragment: `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
                packing: `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
                premultiplied_alpha_fragment: `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
                project_vertex: `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
                dithering_fragment: `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
                dithering_pars_fragment: `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
                roughnessmap_fragment: `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
                roughnessmap_pars_fragment: `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
                shadowmap_pars_fragment: `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
                shadowmap_pars_vertex: `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
                shadowmap_vertex: `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,
                shadowmask_pars_fragment: `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
                skinbase_vertex: `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
                skinning_pars_vertex: `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,
                skinning_vertex: `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
                skinnormal_vertex: `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
                specularmap_fragment: `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
                specularmap_pars_fragment: `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
                tonemapping_fragment: `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
                tonemapping_pars_fragment: `#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
                transmissionmap_fragment: `#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,
                transmissionmap_pars_fragment: `#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,
                uv_pars_fragment: `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
                uv_pars_vertex: `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
                uv_vertex: `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
                uv2_pars_fragment: `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
                uv2_pars_vertex: `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
                uv2_vertex: `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
                worldpos_vertex: `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,
                background_frag: `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
                background_vert: `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
                cube_frag: `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
                cube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
                depth_frag: `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
                depth_vert: `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
                distanceRGBA_frag: `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
                distanceRGBA_vert: `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
                equirect_frag: `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
                equirect_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
                linedashed_frag: `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
                linedashed_vert: `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
                meshbasic_frag: `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
                meshbasic_vert: `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
                meshlambert_frag: `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
                meshlambert_vert: `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
                meshmatcap_frag: `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
                meshmatcap_vert: `#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
                meshtoon_frag: `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
                meshtoon_vert: `#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
                meshphong_frag: `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
                meshphong_vert: `#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
                meshphysical_frag: `#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
                meshphysical_vert: `#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
                normal_frag: `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,
                normal_vert: `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
                points_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
                points_vert: `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
                shadow_frag: `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
                shadow_vert: `#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
                sprite_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
                sprite_vert: `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
            },
                Q = {
                    common: {
                        diffuse: {
                            value: new fe(15658734)
                        },
                        opacity: {
                            value: 1
                        },
                        map: {
                            value: null
                        },
                        uvTransform: {
                            value: new it
                        },
                        uv2Transform: {
                            value: new it
                        },
                        alphaMap: {
                            value: null
                        }
                    },
                    specularmap: {
                        specularMap: {
                            value: null
                        }
                    },
                    envmap: {
                        envMap: {
                            value: null
                        },
                        flipEnvMap: {
                            value: -1
                        },
                        reflectivity: {
                            value: 1
                        },
                        refractionRatio: {
                            value: .98
                        },
                        maxMipLevel: {
                            value: 0
                        }
                    },
                    aomap: {
                        aoMap: {
                            value: null
                        },
                        aoMapIntensity: {
                            value: 1
                        }
                    },
                    lightmap: {
                        lightMap: {
                            value: null
                        },
                        lightMapIntensity: {
                            value: 1
                        }
                    },
                    emissivemap: {
                        emissiveMap: {
                            value: null
                        }
                    },
                    bumpmap: {
                        bumpMap: {
                            value: null
                        },
                        bumpScale: {
                            value: 1
                        }
                    },
                    normalmap: {
                        normalMap: {
                            value: null
                        },
                        normalScale: {
                            value: new ne(1, 1)
                        }
                    },
                    displacementmap: {
                        displacementMap: {
                            value: null
                        },
                        displacementScale: {
                            value: 1
                        },
                        displacementBias: {
                            value: 0
                        }
                    },
                    roughnessmap: {
                        roughnessMap: {
                            value: null
                        }
                    },
                    metalnessmap: {
                        metalnessMap: {
                            value: null
                        }
                    },
                    gradientmap: {
                        gradientMap: {
                            value: null
                        }
                    },
                    fog: {
                        fogDensity: {
                            value: 25e-5
                        },
                        fogNear: {
                            value: 1
                        },
                        fogFar: {
                            value: 2e3
                        },
                        fogColor: {
                            value: new fe(16777215)
                        }
                    },
                    lights: {
                        ambientLightColor: {
                            value: []
                        },
                        lightProbe: {
                            value: []
                        },
                        directionalLights: {
                            value: [],
                            properties: {
                                direction: {},
                                color: {}
                            }
                        },
                        directionalLightShadows: {
                            value: [],
                            properties: {
                                shadowBias: {},
                                shadowNormalBias: {},
                                shadowRadius: {},
                                shadowMapSize: {}
                            }
                        },
                        directionalShadowMap: {
                            value: []
                        },
                        directionalShadowMatrix: {
                            value: []
                        },
                        spotLights: {
                            value: [],
                            properties: {
                                color: {},
                                position: {},
                                direction: {},
                                distance: {},
                                coneCos: {},
                                penumbraCos: {},
                                decay: {}
                            }
                        },
                        spotLightShadows: {
                            value: [],
                            properties: {
                                shadowBias: {},
                                shadowNormalBias: {},
                                shadowRadius: {},
                                shadowMapSize: {}
                            }
                        },
                        spotShadowMap: {
                            value: []
                        },
                        spotShadowMatrix: {
                            value: []
                        },
                        pointLights: {
                            value: [],
                            properties: {
                                color: {},
                                position: {},
                                decay: {},
                                distance: {}
                            }
                        },
                        pointLightShadows: {
                            value: [],
                            properties: {
                                shadowBias: {},
                                shadowNormalBias: {},
                                shadowRadius: {},
                                shadowMapSize: {},
                                shadowCameraNear: {},
                                shadowCameraFar: {}
                            }
                        },
                        pointShadowMap: {
                            value: []
                        },
                        pointShadowMatrix: {
                            value: []
                        },
                        hemisphereLights: {
                            value: [],
                            properties: {
                                direction: {},
                                skyColor: {},
                                groundColor: {}
                            }
                        },
                        rectAreaLights: {
                            value: [],
                            properties: {
                                color: {},
                                position: {},
                                width: {},
                                height: {}
                            }
                        },
                        ltc_1: {
                            value: null
                        },
                        ltc_2: {
                            value: null
                        }
                    },
                    points: {
                        diffuse: {
                            value: new fe(15658734)
                        },
                        opacity: {
                            value: 1
                        },
                        size: {
                            value: 1
                        },
                        scale: {
                            value: 1
                        },
                        map: {
                            value: null
                        },
                        alphaMap: {
                            value: null
                        },
                        uvTransform: {
                            value: new it
                        }
                    },
                    sprite: {
                        diffuse: {
                            value: new fe(15658734)
                        },
                        opacity: {
                            value: 1
                        },
                        center: {
                            value: new ne(.5, .5)
                        },
                        rotation: {
                            value: 0
                        },
                        map: {
                            value: null
                        },
                        alphaMap: {
                            value: null
                        },
                        uvTransform: {
                            value: new it
                        }
                    }
                },
                Dt = {
                    basic: {
                        uniforms: rt([Q.common, Q.specularmap, Q.envmap, Q.aomap, Q.lightmap, Q.fog]),
                        vertexShader: ve.meshbasic_vert,
                        fragmentShader: ve.meshbasic_frag
                    },
                    lambert: {
                        uniforms: rt([Q.common, Q.specularmap, Q.envmap, Q.aomap, Q.lightmap, Q.emissivemap, Q.fog, Q.lights, {
                            emissive: {
                                value: new fe(0)
                            }
                        }]),
                        vertexShader: ve.meshlambert_vert,
                        fragmentShader: ve.meshlambert_frag
                    },
                    phong: {
                        uniforms: rt([Q.common, Q.specularmap, Q.envmap, Q.aomap, Q.lightmap, Q.emissivemap, Q.bumpmap, Q.normalmap, Q.displacementmap, Q.fog, Q.lights, {
                            emissive: {
                                value: new fe(0)
                            },
                            specular: {
                                value: new fe(1118481)
                            },
                            shininess: {
                                value: 30
                            }
                        }]),
                        vertexShader: ve.meshphong_vert,
                        fragmentShader: ve.meshphong_frag
                    },
                    standard: {
                        uniforms: rt([Q.common, Q.envmap, Q.aomap, Q.lightmap, Q.emissivemap, Q.bumpmap, Q.normalmap, Q.displacementmap, Q.roughnessmap, Q.metalnessmap, Q.fog, Q.lights, {
                            emissive: {
                                value: new fe(0)
                            },
                            roughness: {
                                value: 1
                            },
                            metalness: {
                                value: 0
                            },
                            envMapIntensity: {
                                value: 1
                            }
                        }]),
                        vertexShader: ve.meshphysical_vert,
                        fragmentShader: ve.meshphysical_frag
                    },
                    toon: {
                        uniforms: rt([Q.common, Q.aomap, Q.lightmap, Q.emissivemap, Q.bumpmap, Q.normalmap, Q.displacementmap, Q.gradientmap, Q.fog, Q.lights, {
                            emissive: {
                                value: new fe(0)
                            }
                        }]),
                        vertexShader: ve.meshtoon_vert,
                        fragmentShader: ve.meshtoon_frag
                    },
                    matcap: {
                        uniforms: rt([Q.common, Q.bumpmap, Q.normalmap, Q.displacementmap, Q.fog, {
                            matcap: {
                                value: null
                            }
                        }]),
                        vertexShader: ve.meshmatcap_vert,
                        fragmentShader: ve.meshmatcap_frag
                    },
                    points: {
                        uniforms: rt([Q.points, Q.fog]),
                        vertexShader: ve.points_vert,
                        fragmentShader: ve.points_frag
                    },
                    dashed: {
                        uniforms: rt([Q.common, Q.fog, {
                            scale: {
                                value: 1
                            },
                            dashSize: {
                                value: 1
                            },
                            totalSize: {
                                value: 2
                            }
                        }]),
                        vertexShader: ve.linedashed_vert,
                        fragmentShader: ve.linedashed_frag
                    },
                    depth: {
                        uniforms: rt([Q.common, Q.displacementmap]),
                        vertexShader: ve.depth_vert,
                        fragmentShader: ve.depth_frag
                    },
                    normal: {
                        uniforms: rt([Q.common, Q.bumpmap, Q.normalmap, Q.displacementmap, {
                            opacity: {
                                value: 1
                            }
                        }]),
                        vertexShader: ve.normal_vert,
                        fragmentShader: ve.normal_frag
                    },
                    sprite: {
                        uniforms: rt([Q.sprite, Q.fog]),
                        vertexShader: ve.sprite_vert,
                        fragmentShader: ve.sprite_frag
                    },
                    background: {
                        uniforms: {
                            uvTransform: {
                                value: new it
                            },
                            t2D: {
                                value: null
                            }
                        },
                        vertexShader: ve.background_vert,
                        fragmentShader: ve.background_frag
                    },
                    cube: {
                        uniforms: rt([Q.envmap, {
                            opacity: {
                                value: 1
                            }
                        }]),
                        vertexShader: ve.cube_vert,
                        fragmentShader: ve.cube_frag
                    },
                    equirect: {
                        uniforms: {
                            tEquirect: {
                                value: null
                            }
                        },
                        vertexShader: ve.equirect_vert,
                        fragmentShader: ve.equirect_frag
                    },
                    distanceRGBA: {
                        uniforms: rt([Q.common, Q.displacementmap, {
                            referencePosition: {
                                value: new y
                            },
                            nearDistance: {
                                value: 1
                            },
                            farDistance: {
                                value: 1e3
                            }
                        }]),
                        vertexShader: ve.distanceRGBA_vert,
                        fragmentShader: ve.distanceRGBA_frag
                    },
                    shadow: {
                        uniforms: rt([Q.lights, Q.fog, {
                            color: {
                                value: new fe(0)
                            },
                            opacity: {
                                value: 1
                            }
                        }]),
                        vertexShader: ve.shadow_vert,
                        fragmentShader: ve.shadow_frag
                    }
                };

            function Ja(s, e, t, n, i) {
                const r = new fe(0);
                let o, a, l = 0,
                    c = null,
                    h = 0,
                    u = null;

                function d(p, g) {
                    t.buffers.color.setClear(p.r, p.g, p.b, g, i)
                }
                return {
                    getClearColor: function () {
                        return r
                    },
                    setClearColor: function (p, g = 1) {
                        r.set(p), l = g, d(r, l)
                    },
                    getClearAlpha: function () {
                        return l
                    },
                    setClearAlpha: function (p) {
                        l = p, d(r, l)
                    },
                    render: function (p, g, f, m) {
                        let v = g.isScene === !0 ? g.background : null;
                        v && v.isTexture && (v = e.get(v));
                        const w = s.xr,
                            M = w.getSession && w.getSession();
                        M && M.environmentBlendMode === "additive" && (v = null), v === null ? d(r, l) : v && v.isColor && (d(v, 1), m = !0), (s.autoClear || m) && s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil), v && (v.isCubeTexture || v.mapping === 306) ? (a === void 0 && (a = new Ke(new ui(1, 1, 1), new rn({
                            name: "BackgroundCubeMaterial",
                            uniforms: Ln(Dt.cube.uniforms),
                            vertexShader: Dt.cube.vertexShader,
                            fragmentShader: Dt.cube.fragmentShader,
                            side: 1,
                            depthTest: !1,
                            depthWrite: !1,
                            fog: !1
                        })), a.geometry.deleteAttribute("normal"), a.geometry.deleteAttribute("uv"), a.onBeforeRender = function (_, A, L) {
                            this.matrixWorld.copyPosition(L.matrixWorld)
                        }, Object.defineProperty(a.material, "envMap", {
                            get: function () {
                                return this.uniforms.envMap.value
                            }
                        }), n.update(a)), a.material.uniforms.envMap.value = v, a.material.uniforms.flipEnvMap.value = v.isCubeTexture && v._needsFlipEnvMap ? -1 : 1, c === v && h === v.version && u === s.toneMapping || (a.material.needsUpdate = !0, c = v, h = v.version, u = s.toneMapping), p.unshift(a, a.geometry, a.material, 0, 0, null)) : v && v.isTexture && (o === void 0 && (o = new Ke(new Za(2, 2), new rn({
                            name: "BackgroundMaterial",
                            uniforms: Ln(Dt.background.uniforms),
                            vertexShader: Dt.background.vertexShader,
                            fragmentShader: Dt.background.fragmentShader,
                            side: 0,
                            depthTest: !1,
                            depthWrite: !1,
                            fog: !1
                        })), o.geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", {
                            get: function () {
                                return this.uniforms.t2D.value
                            }
                        }), n.update(o)), o.material.uniforms.t2D.value = v, v.matrixAutoUpdate === !0 && v.updateMatrix(), o.material.uniforms.uvTransform.value.copy(v.matrix), c === v && h === v.version && u === s.toneMapping || (o.material.needsUpdate = !0, c = v, h = v.version, u = s.toneMapping), p.unshift(o, o.geometry, o.material, 0, 0, null))
                    }
                }
            }

            function Qa(s, e, t, n) {
                const i = s.getParameter(34921),
                    r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
                    o = n.isWebGL2 || r !== null,
                    a = {},
                    l = d(null);
                let c = l;

                function h(_) {
                    return n.isWebGL2 ? s.bindVertexArray(_) : r.bindVertexArrayOES(_)
                }

                function u(_) {
                    return n.isWebGL2 ? s.deleteVertexArray(_) : r.deleteVertexArrayOES(_)
                }

                function d(_) {
                    const A = [],
                        L = [],
                        b = [];
                    for (let C = 0; C < i; C++) A[C] = 0, L[C] = 0, b[C] = 0;
                    return {
                        geometry: null,
                        program: null,
                        wireframe: !1,
                        newAttributes: A,
                        enabledAttributes: L,
                        attributeDivisors: b,
                        object: _,
                        attributes: {},
                        index: null
                    }
                }

                function p() {
                    const _ = c.newAttributes;
                    for (let A = 0, L = _.length; A < L; A++) _[A] = 0
                }

                function g(_) {
                    f(_, 0)
                }

                function f(_, A) {
                    const L = c.newAttributes,
                        b = c.enabledAttributes,
                        C = c.attributeDivisors;
                    L[_] = 1, b[_] === 0 && (s.enableVertexAttribArray(_), b[_] = 1), C[_] !== A && ((n.isWebGL2 ? s : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](_, A), C[_] = A)
                }

                function m() {
                    const _ = c.newAttributes,
                        A = c.enabledAttributes;
                    for (let L = 0, b = A.length; L < b; L++) A[L] !== _[L] && (s.disableVertexAttribArray(L), A[L] = 0)
                }

                function v(_, A, L, b, C, z) {
                    n.isWebGL2 !== !0 || L !== 5124 && L !== 5125 ? s.vertexAttribPointer(_, A, L, b, C, z) : s.vertexAttribIPointer(_, A, L, C, z)
                }

                function w() {
                    M(), c !== l && (c = l, h(c.object))
                }

                function M() {
                    l.geometry = null, l.program = null, l.wireframe = !1
                }
                return {
                    setup: function (_, A, L, b, C) {
                        let z = !1;
                        if (o) {
                            const R = function (I, N, D) {
                                const O = D.wireframe === !0;
                                let B = a[I.id];
                                B === void 0 && (B = {}, a[I.id] = B);
                                let q = B[N.id];
                                q === void 0 && (q = {}, B[N.id] = q);
                                let ee = q[O];
                                return ee === void 0 && (ee = d(n.isWebGL2 ? s.createVertexArray() : r.createVertexArrayOES()), q[O] = ee), ee
                            }(b, L, A);
                            c !== R && (c = R, h(c.object)), z = function (I, N) {
                                const D = c.attributes,
                                    O = I.attributes;
                                let B = 0;
                                for (const q in O) {
                                    const ee = D[q],
                                        k = O[q];
                                    if (ee === void 0 || ee.attribute !== k || ee.data !== k.data) return !0;
                                    B++
                                }
                                return c.attributesNum !== B || c.index !== N
                            }(b, C), z && function (I, N) {
                                const D = {},
                                    O = I.attributes;
                                let B = 0;
                                for (const q in O) {
                                    const ee = O[q],
                                        k = {};
                                    k.attribute = ee, ee.data && (k.data = ee.data), D[q] = k, B++
                                }
                                c.attributes = D, c.attributesNum = B, c.index = N
                            }(b, C)
                        } else {
                            const R = A.wireframe === !0;
                            c.geometry === b.id && c.program === L.id && c.wireframe === R || (c.geometry = b.id, c.program = L.id, c.wireframe = R, z = !0)
                        }
                        _.isInstancedMesh === !0 && (z = !0), C !== null && t.update(C, 34963), z && (function (R, I, N, D) {
                            if (n.isWebGL2 === !1 && (R.isInstancedMesh || D.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null) return;
                            p();
                            const O = D.attributes,
                                B = N.getAttributes(),
                                q = I.defaultAttributeValues;
                            for (const ee in B) {
                                const k = B[ee];
                                if (k >= 0) {
                                    const Z = O[ee];
                                    if (Z !== void 0) {
                                        const te = Z.normalized,
                                            S = Z.itemSize,
                                            T = t.get(Z);
                                        if (T === void 0) continue;
                                        const j = T.buffer,
                                            U = T.type,
                                            V = T.bytesPerElement;
                                        if (Z.isInterleavedBufferAttribute) {
                                            const J = Z.data,
                                                oe = J.stride,
                                                E = Z.offset;
                                            J && J.isInstancedInterleavedBuffer ? (f(k, J.meshPerAttribute), D._maxInstanceCount === void 0 && (D._maxInstanceCount = J.meshPerAttribute * J.count)) : g(k), s.bindBuffer(34962, j), v(k, S, U, te, oe * V, E * V)
                                        } else Z.isInstancedBufferAttribute ? (f(k, Z.meshPerAttribute), D._maxInstanceCount === void 0 && (D._maxInstanceCount = Z.meshPerAttribute * Z.count)) : g(k), s.bindBuffer(34962, j), v(k, S, U, te, 0, 0)
                                    } else if (ee === "instanceMatrix") {
                                        const te = t.get(R.instanceMatrix);
                                        if (te === void 0) continue;
                                        const S = te.buffer,
                                            T = te.type;
                                        f(k + 0, 1), f(k + 1, 1), f(k + 2, 1), f(k + 3, 1), s.bindBuffer(34962, S), s.vertexAttribPointer(k + 0, 4, T, !1, 64, 0), s.vertexAttribPointer(k + 1, 4, T, !1, 64, 16), s.vertexAttribPointer(k + 2, 4, T, !1, 64, 32), s.vertexAttribPointer(k + 3, 4, T, !1, 64, 48)
                                    } else if (ee === "instanceColor") {
                                        const te = t.get(R.instanceColor);
                                        if (te === void 0) continue;
                                        const S = te.buffer,
                                            T = te.type;
                                        f(k, 1), s.bindBuffer(34962, S), s.vertexAttribPointer(k, 3, T, !1, 12, 0)
                                    } else if (q !== void 0) {
                                        const te = q[ee];
                                        if (te !== void 0) switch (te.length) {
                                            case 2:
                                                s.vertexAttrib2fv(k, te);
                                                break;
                                            case 3:
                                                s.vertexAttrib3fv(k, te);
                                                break;
                                            case 4:
                                                s.vertexAttrib4fv(k, te);
                                                break;
                                            default:
                                                s.vertexAttrib1fv(k, te)
                                        }
                                    }
                                }
                            }
                            m()
                        }(_, A, L, b), C !== null && s.bindBuffer(34963, t.get(C).buffer))
                    },
                    reset: w,
                    resetDefaultState: M,
                    dispose: function () {
                        w();
                        for (const _ in a) {
                            const A = a[_];
                            for (const L in A) {
                                const b = A[L];
                                for (const C in b) u(b[C].object), delete b[C];
                                delete A[L]
                            }
                            delete a[_]
                        }
                    },
                    releaseStatesOfGeometry: function (_) {
                        if (a[_.id] === void 0) return;
                        const A = a[_.id];
                        for (const L in A) {
                            const b = A[L];
                            for (const C in b) u(b[C].object), delete b[C];
                            delete A[L]
                        }
                        delete a[_.id]
                    },
                    releaseStatesOfProgram: function (_) {
                        for (const A in a) {
                            const L = a[A];
                            if (L[_.id] === void 0) continue;
                            const b = L[_.id];
                            for (const C in b) u(b[C].object), delete b[C];
                            delete L[_.id]
                        }
                    },
                    initAttributes: p,
                    enableAttribute: g,
                    disableUnusedAttributes: m
                }
            }

            function $a(s, e, t, n) {
                const i = n.isWebGL2;
                let r;
                this.setMode = function (o) {
                    r = o
                }, this.render = function (o, a) {
                    s.drawArrays(r, o, a), t.update(a, r, 1)
                }, this.renderInstances = function (o, a, l) {
                    if (l === 0) return;
                    let c, h;
                    if (i) c = s, h = "drawArraysInstanced";
                    else if (c = e.get("ANGLE_instanced_arrays"), h = "drawArraysInstancedANGLE", c === null) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                    c[h](r, o, a, l), t.update(a, r, l)
                }
            }

            function Ka(s, e, t) {
                let n;

                function i(M) {
                    if (M === "highp") {
                        if (s.getShaderPrecisionFormat(35633, 36338).precision > 0 && s.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
                        M = "mediump"
                    }
                    return M === "mediump" && s.getShaderPrecisionFormat(35633, 36337).precision > 0 && s.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
                }
                const r = typeof WebGL2RenderingContext != "undefined" && s instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext != "undefined" && s instanceof WebGL2ComputeRenderingContext;
                let o = t.precision !== void 0 ? t.precision : "highp";
                const a = i(o);
                a !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", a, "instead."), o = a);
                const l = t.logarithmicDepthBuffer === !0,
                    c = s.getParameter(34930),
                    h = s.getParameter(35660),
                    u = s.getParameter(3379),
                    d = s.getParameter(34076),
                    p = s.getParameter(34921),
                    g = s.getParameter(36347),
                    f = s.getParameter(36348),
                    m = s.getParameter(36349),
                    v = h > 0,
                    w = r || e.has("OES_texture_float");
                return {
                    isWebGL2: r,
                    getMaxAnisotropy: function () {
                        if (n !== void 0) return n;
                        if (e.has("EXT_texture_filter_anisotropic") === !0) {
                            const M = e.get("EXT_texture_filter_anisotropic");
                            n = s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                        } else n = 0;
                        return n
                    },
                    getMaxPrecision: i,
                    precision: o,
                    logarithmicDepthBuffer: l,
                    maxTextures: c,
                    maxVertexTextures: h,
                    maxTextureSize: u,
                    maxCubemapSize: d,
                    maxAttributes: p,
                    maxVertexUniforms: g,
                    maxVaryings: f,
                    maxFragmentUniforms: m,
                    vertexTextures: v,
                    floatFragmentTextures: w,
                    floatVertexTextures: v && w,
                    maxSamples: r ? s.getParameter(36183) : 0
                }
            }

            function eo(s) {
                const e = this;
                let t = null,
                    n = 0,
                    i = !1,
                    r = !1;
                const o = new Rt,
                    a = new it,
                    l = {
                        value: null,
                        needsUpdate: !1
                    };

                function c() {
                    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0
                }

                function h(u, d, p, g) {
                    const f = u !== null ? u.length : 0;
                    let m = null;
                    if (f !== 0) {
                        if (m = l.value, g !== !0 || m === null) {
                            const v = p + 4 * f,
                                w = d.matrixWorldInverse;
                            a.getNormalMatrix(w), (m === null || m.length < v) && (m = new Float32Array(v));
                            for (let M = 0, _ = p; M !== f; ++M, _ += 4) o.copy(u[M]).applyMatrix4(w, a), o.normal.toArray(m, _), m[_ + 3] = o.constant
                        }
                        l.value = m, l.needsUpdate = !0
                    }
                    return e.numPlanes = f, e.numIntersection = 0, m
                }
                this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function (u, d, p) {
                    const g = u.length !== 0 || d || n !== 0 || i;
                    return i = d, t = h(u, p, 0), n = u.length, g
                }, this.beginShadows = function () {
                    r = !0, h(null)
                }, this.endShadows = function () {
                    r = !1, c()
                }, this.setState = function (u, d, p) {
                    const g = u.clippingPlanes,
                        f = u.clipIntersection,
                        m = u.clipShadows,
                        v = s.get(u);
                    if (!i || g === null || g.length === 0 || r && !m) r ? h(null) : c();
                    else {
                        const w = r ? 0 : n,
                            M = 4 * w;
                        let _ = v.clippingState || null;
                        l.value = _, _ = h(g, d, M, p);
                        for (let A = 0; A !== M; ++A) _[A] = t[A];
                        v.clippingState = _, this.numIntersection = f ? this.numPlanes : 0, this.numPlanes += w
                    }
                }
            }

            function to(s) {
                let e = new WeakMap;

                function t(i, r) {
                    return r === 303 ? i.mapping = 301 : r === 304 && (i.mapping = 302), i
                }

                function n(i) {
                    const r = i.target;
                    r.removeEventListener("dispose", n);
                    const o = e.get(r);
                    o !== void 0 && (e.delete(r), o.dispose())
                }
                return {
                    get: function (i) {
                        if (i && i.isTexture) {
                            const r = i.mapping;
                            if (r === 303 || r === 304) {
                                if (e.has(i)) return t(e.get(i).texture, i.mapping); {
                                    const o = i.image;
                                    if (o && o.height > 0) {
                                        const a = s.getRenderTarget(),
                                            l = new Vr(o.height / 2);
                                        return l.fromEquirectangularTexture(s, i), e.set(i, l), s.setRenderTarget(a), i.addEventListener("dispose", n), t(l.texture, i.mapping)
                                    }
                                    return null
                                }
                            }
                        }
                        return i
                    },
                    dispose: function () {
                        e = new WeakMap
                    }
                }
            }

            function no(s) {
                const e = {};

                function t(n) {
                    if (e[n] !== void 0) return e[n];
                    let i;
                    switch (n) {
                        case "WEBGL_depth_texture":
                            i = s.getExtension("WEBGL_depth_texture") || s.getExtension("MOZ_WEBGL_depth_texture") || s.getExtension("WEBKIT_WEBGL_depth_texture");
                            break;
                        case "EXT_texture_filter_anisotropic":
                            i = s.getExtension("EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                            break;
                        case "WEBGL_compressed_texture_s3tc":
                            i = s.getExtension("WEBGL_compressed_texture_s3tc") || s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                            break;
                        case "WEBGL_compressed_texture_pvrtc":
                            i = s.getExtension("WEBGL_compressed_texture_pvrtc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                            break;
                        default:
                            i = s.getExtension(n)
                    }
                    return e[n] = i, i
                }
                return {
                    has: function (n) {
                        return t(n) !== null
                    },
                    init: function (n) {
                        n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float")
                    },
                    get: function (n) {
                        const i = t(n);
                        return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i
                    }
                }
            }

            function io(s, e, t, n) {
                const i = {},
                    r = new WeakMap;

                function o(l) {
                    const c = l.target;
                    c.index !== null && e.remove(c.index);
                    for (const u in c.attributes) e.remove(c.attributes[u]);
                    c.removeEventListener("dispose", o), delete i[c.id];
                    const h = r.get(c);
                    h && (e.remove(h), r.delete(c)), n.releaseStatesOfGeometry(c), c.isInstancedBufferGeometry === !0 && delete c._maxInstanceCount, t.memory.geometries--
                }

                function a(l) {
                    const c = [],
                        h = l.index,
                        u = l.attributes.position;
                    let d = 0;
                    if (h !== null) {
                        const f = h.array;
                        d = h.version;
                        for (let m = 0, v = f.length; m < v; m += 3) {
                            const w = f[m + 0],
                                M = f[m + 1],
                                _ = f[m + 2];
                            c.push(w, M, M, _, _, w)
                        }
                    } else {
                        const f = u.array;
                        d = u.version;
                        for (let m = 0, v = f.length / 3 - 1; m < v; m += 3) {
                            const w = m + 0,
                                M = m + 1,
                                _ = m + 2;
                            c.push(w, M, M, _, _, w)
                        }
                    }
                    const p = new (Br(c) > 65535 ? Ur : Hr)(c, 1);
                    p.version = d;
                    const g = r.get(l);
                    g && e.remove(g), r.set(l, p)
                }
                return {
                    get: function (l, c) {
                        return i[c.id] === !0 || (c.addEventListener("dispose", o), i[c.id] = !0, t.memory.geometries++), c
                    },
                    update: function (l) {
                        const c = l.attributes;
                        for (const u in c) e.update(c[u], 34962);
                        const h = l.morphAttributes;
                        for (const u in h) {
                            const d = h[u];
                            for (let p = 0, g = d.length; p < g; p++) e.update(d[p], 34962)
                        }
                    },
                    getWireframeAttribute: function (l) {
                        const c = r.get(l);
                        if (c) {
                            const h = l.index;
                            h !== null && c.version < h.version && a(l)
                        } else a(l);
                        return r.get(l)
                    }
                }
            }

            function ro(s, e, t, n) {
                const i = n.isWebGL2;
                let r, o, a;
                this.setMode = function (l) {
                    r = l
                }, this.setIndex = function (l) {
                    o = l.type, a = l.bytesPerElement
                }, this.render = function (l, c) {
                    s.drawElements(r, c, o, l * a), t.update(c, r, 1)
                }, this.renderInstances = function (l, c, h) {
                    if (h === 0) return;
                    let u, d;
                    if (i) u = s, d = "drawElementsInstanced";
                    else if (u = e.get("ANGLE_instanced_arrays"), d = "drawElementsInstancedANGLE", u === null) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                    u[d](r, c, o, l * a, h), t.update(c, r, h)
                }
            }

            function so(s) {
                const e = {
                    frame: 0,
                    calls: 0,
                    triangles: 0,
                    points: 0,
                    lines: 0
                };
                return {
                    memory: {
                        geometries: 0,
                        textures: 0
                    },
                    render: e,
                    programs: null,
                    autoReset: !0,
                    reset: function () {
                        e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0
                    },
                    update: function (t, n, i) {
                        switch (e.calls++, n) {
                            case 4:
                                e.triangles += i * (t / 3);
                                break;
                            case 1:
                                e.lines += i * (t / 2);
                                break;
                            case 3:
                                e.lines += i * (t - 1);
                                break;
                            case 2:
                                e.lines += i * t;
                                break;
                            case 0:
                                e.points += i * t;
                                break;
                            default:
                                console.error("THREE.WebGLInfo: Unknown draw mode:", n)
                        }
                    }
                }
            }

            function ao(s, e) {
                return s[0] - e[0]
            }

            function oo(s, e) {
                return Math.abs(e[1]) - Math.abs(s[1])
            }

            function lo(s) {
                const e = {},
                    t = new Float32Array(8),
                    n = [];
                for (let i = 0; i < 8; i++) n[i] = [i, 0];
                return {
                    update: function (i, r, o, a) {
                        const l = i.morphTargetInfluences,
                            c = l === void 0 ? 0 : l.length;
                        let h = e[r.id];
                        if (h === void 0) {
                            h = [];
                            for (let f = 0; f < c; f++) h[f] = [f, 0];
                            e[r.id] = h
                        }
                        for (let f = 0; f < c; f++) {
                            const m = h[f];
                            m[0] = f, m[1] = l[f]
                        }
                        h.sort(oo);
                        for (let f = 0; f < 8; f++) f < c && h[f][1] ? (n[f][0] = h[f][0], n[f][1] = h[f][1]) : (n[f][0] = Number.MAX_SAFE_INTEGER, n[f][1] = 0);
                        n.sort(ao);
                        const u = o.morphTargets && r.morphAttributes.position,
                            d = o.morphNormals && r.morphAttributes.normal;
                        let p = 0;
                        for (let f = 0; f < 8; f++) {
                            const m = n[f],
                                v = m[0],
                                w = m[1];
                            v !== Number.MAX_SAFE_INTEGER && w ? (u && r.getAttribute("morphTarget" + f) !== u[v] && r.setAttribute("morphTarget" + f, u[v]), d && r.getAttribute("morphNormal" + f) !== d[v] && r.setAttribute("morphNormal" + f, d[v]), t[f] = w, p += w) : (u && r.hasAttribute("morphTarget" + f) === !0 && r.deleteAttribute("morphTarget" + f), d && r.hasAttribute("morphNormal" + f) === !0 && r.deleteAttribute("morphNormal" + f), t[f] = 0)
                        }
                        const g = r.morphTargetsRelative ? 1 : 1 - p;
                        a.getUniforms().setValue(s, "morphTargetBaseInfluence", g), a.getUniforms().setValue(s, "morphTargetInfluences", t)
                    }
                }
            }

            function co(s, e, t, n) {
                let i = new WeakMap;

                function r(o) {
                    const a = o.target;
                    a.removeEventListener("dispose", r), t.remove(a.instanceMatrix), a.instanceColor !== null && t.remove(a.instanceColor)
                }
                return {
                    update: function (o) {
                        const a = n.render.frame,
                            l = o.geometry,
                            c = e.get(o, l);
                        return i.get(c) !== a && (e.update(c), i.set(c, a)), o.isInstancedMesh && (o.hasEventListener("dispose", r) === !1 && o.addEventListener("dispose", r), t.update(o.instanceMatrix, 34962), o.instanceColor !== null && t.update(o.instanceColor, 34962)), c
                    },
                    dispose: function () {
                        i = new WeakMap
                    }
                }
            }
            Dt.physical = {
                uniforms: rt([Dt.standard.uniforms, {
                    clearcoat: {
                        value: 0
                    },
                    clearcoatMap: {
                        value: null
                    },
                    clearcoatRoughness: {
                        value: 0
                    },
                    clearcoatRoughnessMap: {
                        value: null
                    },
                    clearcoatNormalScale: {
                        value: new ne(1, 1)
                    },
                    clearcoatNormalMap: {
                        value: null
                    },
                    sheen: {
                        value: new fe(0)
                    },
                    transmission: {
                        value: 0
                    },
                    transmissionMap: {
                        value: null
                    }
                }]),
                vertexShader: ve.meshphysical_vert,
                fragmentShader: ve.meshphysical_frag
            };
            class jr extends dt {
                constructor(e = null, t = 1, n = 1, i = 1) {
                    super(null), this.image = {
                        data: e,
                        width: t,
                        height: n,
                        depth: i
                    }, this.magFilter = Se, this.minFilter = Se, this.wrapR = se, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
                }
            }
            jr.prototype.isDataTexture2DArray = !0;
            class qr extends dt {
                constructor(e = null, t = 1, n = 1, i = 1) {
                    super(null), this.image = {
                        data: e,
                        width: t,
                        height: n,
                        depth: i
                    }, this.magFilter = Se, this.minFilter = Se, this.wrapR = se, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
                }
            }
            qr.prototype.isDataTexture3D = !0;
            const Xr = new dt,
                ho = new jr,
                uo = new qr,
                Yr = new pi,
                Zr = [],
                Jr = [],
                Qr = new Float32Array(16),
                $r = new Float32Array(9),
                Kr = new Float32Array(4);

            function Rn(s, e, t) {
                const n = s[0];
                if (n <= 0 || n > 0) return s;
                const i = e * t;
                let r = Zr[i];
                if (r === void 0 && (r = new Float32Array(i), Zr[i] = r), e !== 0) {
                    n.toArray(r, 0);
                    for (let o = 1, a = 0; o !== e; ++o) a += t, s[o].toArray(r, a)
                }
                return r
            }

            function at(s, e) {
                if (s.length !== e.length) return !1;
                for (let t = 0, n = s.length; t < n; t++)
                    if (s[t] !== e[t]) return !1;
                return !0
            }

            function st(s, e) {
                for (let t = 0, n = e.length; t < n; t++) s[t] = e[t]
            }

            function es(s, e) {
                let t = Jr[e];
                t === void 0 && (t = new Int32Array(e), Jr[e] = t);
                for (let n = 0; n !== e; ++n) t[n] = s.allocateTextureUnit();
                return t
            }

            function po(s, e) {
                const t = this.cache;
                t[0] !== e && (s.uniform1f(this.addr, e), t[0] = e)
            }

            function mo(s, e) {
                const t = this.cache;
                if (e.x !== void 0) t[0] === e.x && t[1] === e.y || (s.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
                else {
                    if (at(t, e)) return;
                    s.uniform2fv(this.addr, e), st(t, e)
                }
            }

            function fo(s, e) {
                const t = this.cache;
                if (e.x !== void 0) t[0] === e.x && t[1] === e.y && t[2] === e.z || (s.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
                else if (e.r !== void 0) t[0] === e.r && t[1] === e.g && t[2] === e.b || (s.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
                else {
                    if (at(t, e)) return;
                    s.uniform3fv(this.addr, e), st(t, e)
                }
            }

            function go(s, e) {
                const t = this.cache;
                if (e.x !== void 0) t[0] === e.x && t[1] === e.y && t[2] === e.z && t[3] === e.w || (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
                else {
                    if (at(t, e)) return;
                    s.uniform4fv(this.addr, e), st(t, e)
                }
            }

            function vo(s, e) {
                const t = this.cache,
                    n = e.elements;
                if (n === void 0) {
                    if (at(t, e)) return;
                    s.uniformMatrix2fv(this.addr, !1, e), st(t, e)
                } else {
                    if (at(t, n)) return;
                    Kr.set(n), s.uniformMatrix2fv(this.addr, !1, Kr), st(t, n)
                }
            }

            function xo(s, e) {
                const t = this.cache,
                    n = e.elements;
                if (n === void 0) {
                    if (at(t, e)) return;
                    s.uniformMatrix3fv(this.addr, !1, e), st(t, e)
                } else {
                    if (at(t, n)) return;
                    $r.set(n), s.uniformMatrix3fv(this.addr, !1, $r), st(t, n)
                }
            }

            function yo(s, e) {
                const t = this.cache,
                    n = e.elements;
                if (n === void 0) {
                    if (at(t, e)) return;
                    s.uniformMatrix4fv(this.addr, !1, e), st(t, e)
                } else {
                    if (at(t, n)) return;
                    Qr.set(n), s.uniformMatrix4fv(this.addr, !1, Qr), st(t, n)
                }
            }

            function _o(s, e) {
                const t = this.cache;
                t[0] !== e && (s.uniform1i(this.addr, e), t[0] = e)
            }

            function wo(s, e) {
                const t = this.cache;
                at(t, e) || (s.uniform2iv(this.addr, e), st(t, e))
            }

            function bo(s, e) {
                const t = this.cache;
                at(t, e) || (s.uniform3iv(this.addr, e), st(t, e))
            }

            function Mo(s, e) {
                const t = this.cache;
                at(t, e) || (s.uniform4iv(this.addr, e), st(t, e))
            }

            function So(s, e) {
                const t = this.cache;
                t[0] !== e && (s.uniform1ui(this.addr, e), t[0] = e)
            }

            function Eo(s, e) {
                const t = this.cache;
                at(t, e) || (s.uniform2uiv(this.addr, e), st(t, e))
            }

            function To(s, e) {
                const t = this.cache;
                at(t, e) || (s.uniform3uiv(this.addr, e), st(t, e))
            }

            function Lo(s, e) {
                const t = this.cache;
                at(t, e) || (s.uniform4uiv(this.addr, e), st(t, e))
            }

            function Ao(s, e, t) {
                const n = this.cache,
                    i = t.allocateTextureUnit();
                n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.safeSetTexture2D(e || Xr, i)
            }

            function Co(s, e, t) {
                const n = this.cache,
                    i = t.allocateTextureUnit();
                n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || uo, i)
            }

            function Ro(s, e, t) {
                const n = this.cache,
                    i = t.allocateTextureUnit();
                n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.safeSetTextureCube(e || Yr, i)
            }

            function Po(s, e, t) {
                const n = this.cache,
                    i = t.allocateTextureUnit();
                n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || ho, i)
            }

            function Do(s, e) {
                s.uniform1fv(this.addr, e)
            }

            function Io(s, e) {
                const t = Rn(e, this.size, 2);
                s.uniform2fv(this.addr, t)
            }

            function No(s, e) {
                const t = Rn(e, this.size, 3);
                s.uniform3fv(this.addr, t)
            }

            function zo(s, e) {
                const t = Rn(e, this.size, 4);
                s.uniform4fv(this.addr, t)
            }

            function Oo(s, e) {
                const t = Rn(e, this.size, 4);
                s.uniformMatrix2fv(this.addr, !1, t)
            }

            function Fo(s, e) {
                const t = Rn(e, this.size, 9);
                s.uniformMatrix3fv(this.addr, !1, t)
            }

            function Ho(s, e) {
                const t = Rn(e, this.size, 16);
                s.uniformMatrix4fv(this.addr, !1, t)
            }

            function Uo(s, e) {
                s.uniform1iv(this.addr, e)
            }

            function Bo(s, e) {
                s.uniform2iv(this.addr, e)
            }

            function Go(s, e) {
                s.uniform3iv(this.addr, e)
            }

            function Vo(s, e) {
                s.uniform4iv(this.addr, e)
            }

            function Wo(s, e) {
                s.uniform1uiv(this.addr, e)
            }

            function ko(s, e) {
                s.uniform2uiv(this.addr, e)
            }

            function jo(s, e) {
                s.uniform3uiv(this.addr, e)
            }

            function qo(s, e) {
                s.uniform4uiv(this.addr, e)
            }

            function Xo(s, e, t) {
                const n = e.length,
                    i = es(t, n);
                s.uniform1iv(this.addr, i);
                for (let r = 0; r !== n; ++r) t.safeSetTexture2D(e[r] || Xr, i[r])
            }

            function Yo(s, e, t) {
                const n = e.length,
                    i = es(t, n);
                s.uniform1iv(this.addr, i);
                for (let r = 0; r !== n; ++r) t.safeSetTextureCube(e[r] || Yr, i[r])
            }

            function Zo(s, e, t) {
                this.id = s, this.addr = t, this.cache = [], this.setValue = function (n) {
                    switch (n) {
                        case 5126:
                            return po;
                        case 35664:
                            return mo;
                        case 35665:
                            return fo;
                        case 35666:
                            return go;
                        case 35674:
                            return vo;
                        case 35675:
                            return xo;
                        case 35676:
                            return yo;
                        case 5124:
                        case 35670:
                            return _o;
                        case 35667:
                        case 35671:
                            return wo;
                        case 35668:
                        case 35672:
                            return bo;
                        case 35669:
                        case 35673:
                            return Mo;
                        case 5125:
                            return So;
                        case 36294:
                            return Eo;
                        case 36295:
                            return To;
                        case 36296:
                            return Lo;
                        case 35678:
                        case 36198:
                        case 36298:
                        case 36306:
                        case 35682:
                            return Ao;
                        case 35679:
                        case 36299:
                        case 36307:
                            return Co;
                        case 35680:
                        case 36300:
                        case 36308:
                        case 36293:
                            return Ro;
                        case 36289:
                        case 36303:
                        case 36311:
                        case 36292:
                            return Po
                    }
                }(e.type)
            }

            function ts(s, e, t) {
                this.id = s, this.addr = t, this.cache = [], this.size = e.size, this.setValue = function (n) {
                    switch (n) {
                        case 5126:
                            return Do;
                        case 35664:
                            return Io;
                        case 35665:
                            return No;
                        case 35666:
                            return zo;
                        case 35674:
                            return Oo;
                        case 35675:
                            return Fo;
                        case 35676:
                            return Ho;
                        case 5124:
                        case 35670:
                            return Uo;
                        case 35667:
                        case 35671:
                            return Bo;
                        case 35668:
                        case 35672:
                            return Go;
                        case 35669:
                        case 35673:
                            return Vo;
                        case 5125:
                            return Wo;
                        case 36294:
                            return ko;
                        case 36295:
                            return jo;
                        case 36296:
                            return qo;
                        case 35678:
                        case 36198:
                        case 36298:
                        case 36306:
                        case 35682:
                            return Xo;
                        case 35680:
                        case 36300:
                        case 36308:
                        case 36293:
                            return Yo
                    }
                }(e.type)
            }

            function ns(s) {
                this.id = s, this.seq = [], this.map = {}
            }
            ts.prototype.updateCache = function (s) {
                const e = this.cache;
                s instanceof Float32Array && e.length !== s.length && (this.cache = new Float32Array(s.length)), st(e, s)
            }, ns.prototype.setValue = function (s, e, t) {
                const n = this.seq;
                for (let i = 0, r = n.length; i !== r; ++i) {
                    const o = n[i];
                    o.setValue(s, e[o.id], t)
                }
            };
            const er = /(\w+)(\])?(\[|\.)?/g;

            function is(s, e) {
                s.seq.push(e), s.map[e.id] = e
            }

            function Jo(s, e, t) {
                const n = s.name,
                    i = n.length;
                for (er.lastIndex = 0; ;) {
                    const r = er.exec(n),
                        o = er.lastIndex;
                    let a = r[1];
                    const l = r[2] === "]",
                        c = r[3];
                    if (l && (a |= 0), c === void 0 || c === "[" && o + 2 === i) {
                        is(t, c === void 0 ? new Zo(a, s, e) : new ts(a, s, e));
                        break
                    } {
                        let h = t.map[a];
                        h === void 0 && (h = new ns(a), is(t, h)), t = h
                    }
                }
            }

            function Zt(s, e) {
                this.seq = [], this.map = {};
                const t = s.getProgramParameter(e, 35718);
                for (let n = 0; n < t; ++n) {
                    const i = s.getActiveUniform(e, n);
                    Jo(i, s.getUniformLocation(e, i.name), this)
                }
            }

            function rs(s, e, t) {
                const n = s.createShader(e);
                return s.shaderSource(n, t), s.compileShader(n), n
            }
            Zt.prototype.setValue = function (s, e, t, n) {
                const i = this.map[e];
                i !== void 0 && i.setValue(s, t, n)
            }, Zt.prototype.setOptional = function (s, e, t) {
                const n = e[t];
                n !== void 0 && this.setValue(s, t, n)
            }, Zt.upload = function (s, e, t, n) {
                for (let i = 0, r = e.length; i !== r; ++i) {
                    const o = e[i],
                        a = t[o.id];
                    a.needsUpdate !== !1 && o.setValue(s, a.value, n)
                }
            }, Zt.seqWithValue = function (s, e) {
                const t = [];
                for (let n = 0, i = s.length; n !== i; ++n) {
                    const r = s[n];
                    r.id in e && t.push(r)
                }
                return t
            };
            let Qo = 0;

            function ss(s) {
                switch (s) {
                    case un:
                        return ["Linear", "( value )"];
                    case 3001:
                        return ["sRGB", "( value )"];
                    case 3002:
                        return ["RGBE", "( value )"];
                    case 3004:
                        return ["RGBM", "( value, 7.0 )"];
                    case 3005:
                        return ["RGBM", "( value, 16.0 )"];
                    case 3006:
                        return ["RGBD", "( value, 256.0 )"];
                    case 3007:
                        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
                    case 3003:
                        return ["LogLuv", "( value )"];
                    default:
                        return console.warn("THREE.WebGLProgram: Unsupported encoding:", s), ["Linear", "( value )"]
                }
            }

            function as(s, e, t) {
                const n = s.getShaderParameter(e, 35713),
                    i = s.getShaderInfoLog(e).trim();
                return n && i === "" ? "" : "THREE.WebGLShader: gl.getShaderInfoLog() " + t + `
` + i + function (r) {
                        const o = r.split(`
`);
                        for (let a = 0; a < o.length; a++) o[a] = a + 1 + ": " + o[a];
                        return o.join(`
`)
                    }(s.getShaderSource(e))
            }

            function Un(s, e) {
                const t = ss(e);
                return "vec4 " + s + "( vec4 value ) { return " + t[0] + "ToLinear" + t[1] + "; }"
            }

            function $o(s, e) {
                const t = ss(e);
                return "vec4 " + s + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }"
            }

            function Ko(s, e) {
                let t;
                switch (e) {
                    case 1:
                        t = "Linear";
                        break;
                    case 2:
                        t = "Reinhard";
                        break;
                    case 3:
                        t = "OptimizedCineon";
                        break;
                    case 4:
                        t = "ACESFilmic";
                        break;
                    case 5:
                        t = "Custom";
                        break;
                    default:
                        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear"
                }
                return "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
            }

            function Bn(s) {
                return s !== ""
            }

            function os(s, e) {
                return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
            }

            function ls(s, e) {
                return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
            }
            const el = /^[ \t]*#include +<([\w\d./]+)>/gm;

            function tr(s) {
                return s.replace(el, tl)
            }

            function tl(s, e) {
                const t = ve[e];
                if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
                return tr(t)
            }
            const nl = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
                il = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

            function cs(s) {
                return s.replace(il, hs).replace(nl, rl)
            }

            function rl(s, e, t, n) {
                return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), hs(0, e, t, n)
            }

            function hs(s, e, t, n) {
                let i = "";
                for (let r = parseInt(e); r < parseInt(t); r++) i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
                return i
            }

            function ds(s) {
                let e = "precision " + s.precision + ` float;
precision ` + s.precision + " int;";
                return s.precision === "highp" ? e += `
#define HIGH_PRECISION` : s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : s.precision === "lowp" && (e += `
#define LOW_PRECISION`), e
            }

            function sl(s, e, t, n) {
                const i = s.getContext(),
                    r = t.defines;
                let o = t.vertexShader,
                    a = t.fragmentShader;
                const l = function (C) {
                    let z = "SHADOWMAP_TYPE_BASIC";
                    return C.shadowMapType === 1 ? z = "SHADOWMAP_TYPE_PCF" : C.shadowMapType === 2 ? z = "SHADOWMAP_TYPE_PCF_SOFT" : C.shadowMapType === 3 && (z = "SHADOWMAP_TYPE_VSM"), z
                }(t),
                    c = function (C) {
                        let z = "ENVMAP_TYPE_CUBE";
                        if (C.envMap) switch (C.envMapMode) {
                            case 301:
                            case 302:
                                z = "ENVMAP_TYPE_CUBE";
                                break;
                            case 306:
                            case 307:
                                z = "ENVMAP_TYPE_CUBE_UV"
                        }
                        return z
                    }(t),
                    h = function (C) {
                        let z = "ENVMAP_MODE_REFLECTION";
                        if (C.envMap) switch (C.envMapMode) {
                            case 302:
                            case 307:
                                z = "ENVMAP_MODE_REFRACTION"
                        }
                        return z
                    }(t),
                    u = function (C) {
                        let z = "ENVMAP_BLENDING_NONE";
                        if (C.envMap) switch (C.combine) {
                            case 0:
                                z = "ENVMAP_BLENDING_MULTIPLY";
                                break;
                            case 1:
                                z = "ENVMAP_BLENDING_MIX";
                                break;
                            case 2:
                                z = "ENVMAP_BLENDING_ADD"
                        }
                        return z
                    }(t),
                    d = s.gammaFactor > 0 ? s.gammaFactor : 1,
                    p = t.isWebGL2 ? "" : function (C) {
                        return [C.extensionDerivatives || C.envMapCubeUV || C.bumpMap || C.tangentSpaceNormalMap || C.clearcoatNormalMap || C.flatShading || C.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "", (C.extensionFragDepth || C.logarithmicDepthBuffer) && C.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", C.extensionDrawBuffers && C.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (C.extensionShaderTextureLOD || C.envMap) && C.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Bn).join(`
`)
                    }(t),
                    g = function (C) {
                        const z = [];
                        for (const R in C) {
                            const I = C[R];
                            I !== !1 && z.push("#define " + R + " " + I)
                        }
                        return z.join(`
`)
                    }(r),
                    f = i.createProgram();
                let m, v, w = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
                t.isRawShaderMaterial ? (m = [g].filter(Bn).join(`
`), m.length > 0 && (m += `
`), v = [p, g].filter(Bn).join(`
`), v.length > 0 && (v += `
`)) : (m = [ds(t), "#define SHADER_NAME " + t.shaderName, g, t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + d, "#define MAX_BONES " + t.maxBones, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.vertexTangents ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUvs ? "#define USE_UV" : "", t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.useVertexTexture ? "#define BONE_TEXTURE" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Bn).join(`
`), v = [p, ds(t), "#define SHADER_NAME " + t.shaderName, g, t.alphaTest ? "#define ALPHATEST " + t.alphaTest + (t.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + d, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.sheen ? "#define USE_SHEEN" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.vertexTangents ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUvs ? "#define USE_UV" : "", t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (t.extensionShaderTextureLOD || t.envMap) && t.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== 0 ? "#define TONE_MAPPING" : "", t.toneMapping !== 0 ? ve.tonemapping_pars_fragment : "", t.toneMapping !== 0 ? Ko("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", ve.encodings_pars_fragment, t.map ? Un("mapTexelToLinear", t.mapEncoding) : "", t.matcap ? Un("matcapTexelToLinear", t.matcapEncoding) : "", t.envMap ? Un("envMapTexelToLinear", t.envMapEncoding) : "", t.emissiveMap ? Un("emissiveMapTexelToLinear", t.emissiveMapEncoding) : "", t.lightMap ? Un("lightMapTexelToLinear", t.lightMapEncoding) : "", $o("linearToOutputTexel", t.outputEncoding), t.depthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(Bn).join(`
`)), o = tr(o), o = os(o, t), o = ls(o, t), a = tr(a), a = os(a, t), a = ls(a, t), o = cs(o), a = cs(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (w = `#version 300 es
`, m = ["#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + m, v = ["#define varying in", t.glslVersion === Ue ? "" : "out highp vec4 pc_fragColor;", t.glslVersion === Ue ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + v);
                const M = w + v + a,
                    _ = rs(i, 35633, w + m + o),
                    A = rs(i, 35632, M);
                if (i.attachShader(f, _), i.attachShader(f, A), t.index0AttributeName !== void 0 ? i.bindAttribLocation(f, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(f, 0, "position"), i.linkProgram(f), s.debug.checkShaderErrors) {
                    const C = i.getProgramInfoLog(f).trim(),
                        z = i.getShaderInfoLog(_).trim(),
                        R = i.getShaderInfoLog(A).trim();
                    let I = !0,
                        N = !0;
                    if (i.getProgramParameter(f, 35714) === !1) {
                        I = !1;
                        const D = as(i, _, "vertex"),
                            O = as(i, A, "fragment");
                        console.error("THREE.WebGLProgram: shader error: ", i.getError(), "35715", i.getProgramParameter(f, 35715), "gl.getProgramInfoLog", C, D, O)
                    } else C !== "" ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", C) : z !== "" && R !== "" || (N = !1);
                    N && (this.diagnostics = {
                        runnable: I,
                        programLog: C,
                        vertexShader: {
                            log: z,
                            prefix: m
                        },
                        fragmentShader: {
                            log: R,
                            prefix: v
                        }
                    })
                }
                let L, b;
                return i.deleteShader(_), i.deleteShader(A), this.getUniforms = function () {
                    return L === void 0 && (L = new Zt(i, f)), L
                }, this.getAttributes = function () {
                    return b === void 0 && (b = function (C, z) {
                        const R = {},
                            I = C.getProgramParameter(z, 35721);
                        for (let N = 0; N < I; N++) {
                            const D = C.getActiveAttrib(z, N).name;
                            R[D] = C.getAttribLocation(z, D)
                        }
                        return R
                    }(i, f)), b
                }, this.destroy = function () {
                    n.releaseStatesOfProgram(this), i.deleteProgram(f), this.program = void 0
                }, this.name = t.shaderName, this.id = Qo++, this.cacheKey = e, this.usedTimes = 1, this.program = f, this.vertexShader = _, this.fragmentShader = A, this
            }

            function al(s, e, t, n, i, r) {
                const o = [],
                    a = n.isWebGL2,
                    l = n.logarithmicDepthBuffer,
                    c = n.floatVertexTextures,
                    h = n.maxVertexUniforms,
                    u = n.vertexTextures;
                let d = n.precision;
                const p = {
                    MeshDepthMaterial: "depth",
                    MeshDistanceMaterial: "distanceRGBA",
                    MeshNormalMaterial: "normal",
                    MeshBasicMaterial: "basic",
                    MeshLambertMaterial: "lambert",
                    MeshPhongMaterial: "phong",
                    MeshToonMaterial: "toon",
                    MeshStandardMaterial: "physical",
                    MeshPhysicalMaterial: "physical",
                    MeshMatcapMaterial: "matcap",
                    LineBasicMaterial: "basic",
                    LineDashedMaterial: "dashed",
                    PointsMaterial: "points",
                    ShadowMaterial: "shadow",
                    SpriteMaterial: "sprite"
                },
                    g = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexAlphas", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen", "transmissionMap"];

                function f(m) {
                    let v;
                    return m && m.isTexture ? v = m.encoding : m && m.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), v = m.texture.encoding) : v = un, v
                }
                return {
                    getParameters: function (m, v, w, M, _) {
                        const A = M.fog,
                            L = m.isMeshStandardMaterial ? M.environment : null,
                            b = e.get(m.envMap || L),
                            C = p[m.type],
                            z = _.isSkinnedMesh ? function (D) {
                                const O = D.skeleton.bones;
                                if (c) return 1024; {
                                    const B = h,
                                        q = Math.floor((B - 20) / 4),
                                        ee = Math.min(q, O.length);
                                    return ee < O.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + O.length + " bones. This GPU supports " + ee + "."), 0) : ee
                                }
                            }(_) : 0;
                        let R, I;
                        if (m.precision !== null && (d = n.getMaxPrecision(m.precision), d !== m.precision && console.warn("THREE.WebGLProgram.getParameters:", m.precision, "not supported, using", d, "instead.")), C) {
                            const D = Dt[C];
                            R = D.vertexShader, I = D.fragmentShader
                        } else R = m.vertexShader, I = m.fragmentShader;
                        const N = s.getRenderTarget();
                        return {
                            isWebGL2: a,
                            shaderID: C,
                            shaderName: m.type,
                            vertexShader: R,
                            fragmentShader: I,
                            defines: m.defines,
                            isRawShaderMaterial: m.isRawShaderMaterial === !0,
                            glslVersion: m.glslVersion,
                            precision: d,
                            instancing: _.isInstancedMesh === !0,
                            instancingColor: _.isInstancedMesh === !0 && _.instanceColor !== null,
                            supportsVertexTextures: u,
                            outputEncoding: N !== null ? f(N.texture) : s.outputEncoding,
                            map: !!m.map,
                            mapEncoding: f(m.map),
                            matcap: !!m.matcap,
                            matcapEncoding: f(m.matcap),
                            envMap: !!b,
                            envMapMode: b && b.mapping,
                            envMapEncoding: f(b),
                            envMapCubeUV: !!b && (b.mapping === 306 || b.mapping === 307),
                            lightMap: !!m.lightMap,
                            lightMapEncoding: f(m.lightMap),
                            aoMap: !!m.aoMap,
                            emissiveMap: !!m.emissiveMap,
                            emissiveMapEncoding: f(m.emissiveMap),
                            bumpMap: !!m.bumpMap,
                            normalMap: !!m.normalMap,
                            objectSpaceNormalMap: m.normalMapType === 1,
                            tangentSpaceNormalMap: m.normalMapType === 0,
                            clearcoatMap: !!m.clearcoatMap,
                            clearcoatRoughnessMap: !!m.clearcoatRoughnessMap,
                            clearcoatNormalMap: !!m.clearcoatNormalMap,
                            displacementMap: !!m.displacementMap,
                            roughnessMap: !!m.roughnessMap,
                            metalnessMap: !!m.metalnessMap,
                            specularMap: !!m.specularMap,
                            alphaMap: !!m.alphaMap,
                            gradientMap: !!m.gradientMap,
                            sheen: !!m.sheen,
                            transmissionMap: !!m.transmissionMap,
                            combine: m.combine,
                            vertexTangents: m.normalMap && m.vertexTangents,
                            vertexColors: m.vertexColors,
                            vertexAlphas: m.vertexColors === !0 && _.geometry && _.geometry.attributes.color && _.geometry.attributes.color.itemSize === 4,
                            vertexUvs: !!(m.map || m.bumpMap || m.normalMap || m.specularMap || m.alphaMap || m.emissiveMap || m.roughnessMap || m.metalnessMap || m.clearcoatMap || m.clearcoatRoughnessMap || m.clearcoatNormalMap || m.displacementMap || m.transmissionMap),
                            uvsVertexOnly: !(m.map || m.bumpMap || m.normalMap || m.specularMap || m.alphaMap || m.emissiveMap || m.roughnessMap || m.metalnessMap || m.clearcoatNormalMap || m.transmissionMap || !m.displacementMap),
                            fog: !!A,
                            useFog: m.fog,
                            fogExp2: A && A.isFogExp2,
                            flatShading: !!m.flatShading,
                            sizeAttenuation: m.sizeAttenuation,
                            logarithmicDepthBuffer: l,
                            skinning: m.skinning && z > 0,
                            maxBones: z,
                            useVertexTexture: c,
                            morphTargets: m.morphTargets,
                            morphNormals: m.morphNormals,
                            numDirLights: v.directional.length,
                            numPointLights: v.point.length,
                            numSpotLights: v.spot.length,
                            numRectAreaLights: v.rectArea.length,
                            numHemiLights: v.hemi.length,
                            numDirLightShadows: v.directionalShadowMap.length,
                            numPointLightShadows: v.pointShadowMap.length,
                            numSpotLightShadows: v.spotShadowMap.length,
                            numClippingPlanes: r.numPlanes,
                            numClipIntersection: r.numIntersection,
                            dithering: m.dithering,
                            shadowMapEnabled: s.shadowMap.enabled && w.length > 0,
                            shadowMapType: s.shadowMap.type,
                            toneMapping: m.toneMapped ? s.toneMapping : 0,
                            physicallyCorrectLights: s.physicallyCorrectLights,
                            premultipliedAlpha: m.premultipliedAlpha,
                            alphaTest: m.alphaTest,
                            doubleSided: m.side === 2,
                            flipSided: m.side === 1,
                            depthPacking: m.depthPacking !== void 0 && m.depthPacking,
                            index0AttributeName: m.index0AttributeName,
                            extensionDerivatives: m.extensions && m.extensions.derivatives,
                            extensionFragDepth: m.extensions && m.extensions.fragDepth,
                            extensionDrawBuffers: m.extensions && m.extensions.drawBuffers,
                            extensionShaderTextureLOD: m.extensions && m.extensions.shaderTextureLOD,
                            rendererExtensionFragDepth: a || t.has("EXT_frag_depth"),
                            rendererExtensionDrawBuffers: a || t.has("WEBGL_draw_buffers"),
                            rendererExtensionShaderTextureLod: a || t.has("EXT_shader_texture_lod"),
                            customProgramCacheKey: m.customProgramCacheKey()
                        }
                    },
                    getProgramCacheKey: function (m) {
                        const v = [];
                        if (m.shaderID ? v.push(m.shaderID) : (v.push(m.fragmentShader), v.push(m.vertexShader)), m.defines !== void 0)
                            for (const w in m.defines) v.push(w), v.push(m.defines[w]);
                        if (m.isRawShaderMaterial === !1) {
                            for (let w = 0; w < g.length; w++) v.push(m[g[w]]);
                            v.push(s.outputEncoding), v.push(s.gammaFactor)
                        }
                        return v.push(m.customProgramCacheKey), v.join()
                    },
                    getUniforms: function (m) {
                        const v = p[m.type];
                        let w;
                        if (v) {
                            const M = Dt[v];
                            w = Xa.clone(M.uniforms)
                        } else w = m.uniforms;
                        return w
                    },
                    acquireProgram: function (m, v) {
                        let w;
                        for (let M = 0, _ = o.length; M < _; M++) {
                            const A = o[M];
                            if (A.cacheKey === v) {
                                w = A, ++w.usedTimes;
                                break
                            }
                        }
                        return w === void 0 && (w = new sl(s, v, m, i), o.push(w)), w
                    },
                    releaseProgram: function (m) {
                        if (--m.usedTimes == 0) {
                            const v = o.indexOf(m);
                            o[v] = o[o.length - 1], o.pop(), m.destroy()
                        }
                    },
                    programs: o
                }
            }

            function ol() {
                let s = new WeakMap;
                return {
                    get: function (e) {
                        let t = s.get(e);
                        return t === void 0 && (t = {}, s.set(e, t)), t
                    },
                    remove: function (e) {
                        s.delete(e)
                    },
                    update: function (e, t, n) {
                        s.get(e)[t] = n
                    },
                    dispose: function () {
                        s = new WeakMap
                    }
                }
            }

            function ll(s, e) {
                return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.program !== e.program ? s.program.id - e.program.id : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id
            }

            function cl(s, e) {
                return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id
            }

            function us(s) {
                const e = [];
                let t = 0;
                const n = [],
                    i = [],
                    r = {
                        id: -1
                    };

                function o(a, l, c, h, u, d) {
                    let p = e[t];
                    const g = s.get(c);
                    return p === void 0 ? (p = {
                        id: a.id,
                        object: a,
                        geometry: l,
                        material: c,
                        program: g.program || r,
                        groupOrder: h,
                        renderOrder: a.renderOrder,
                        z: u,
                        group: d
                    }, e[t] = p) : (p.id = a.id, p.object = a, p.geometry = l, p.material = c, p.program = g.program || r, p.groupOrder = h, p.renderOrder = a.renderOrder, p.z = u, p.group = d), t++, p
                }
                return {
                    opaque: n,
                    transparent: i,
                    init: function () {
                        t = 0, n.length = 0, i.length = 0
                    },
                    push: function (a, l, c, h, u, d) {
                        const p = o(a, l, c, h, u, d);
                        (c.transparent === !0 ? i : n).push(p)
                    },
                    unshift: function (a, l, c, h, u, d) {
                        const p = o(a, l, c, h, u, d);
                        (c.transparent === !0 ? i : n).unshift(p)
                    },
                    finish: function () {
                        for (let a = t, l = e.length; a < l; a++) {
                            const c = e[a];
                            if (c.id === null) break;
                            c.id = null, c.object = null, c.geometry = null, c.material = null, c.program = null, c.group = null
                        }
                    },
                    sort: function (a, l) {
                        n.length > 1 && n.sort(a || ll), i.length > 1 && i.sort(l || cl)
                    }
                }
            }

            function hl(s) {
                let e = new WeakMap;
                return {
                    get: function (t, n) {
                        let i;
                        return e.has(t) === !1 ? (i = new us(s), e.set(t, [i])) : n >= e.get(t).length ? (i = new us(s), e.get(t).push(i)) : i = e.get(t)[n], i
                    },
                    dispose: function () {
                        e = new WeakMap
                    }
                }
            }

            function dl() {
                const s = {};
                return {
                    get: function (e) {
                        if (s[e.id] !== void 0) return s[e.id];
                        let t;
                        switch (e.type) {
                            case "DirectionalLight":
                                t = {
                                    direction: new y,
                                    color: new fe
                                };
                                break;
                            case "SpotLight":
                                t = {
                                    position: new y,
                                    direction: new y,
                                    color: new fe,
                                    distance: 0,
                                    coneCos: 0,
                                    penumbraCos: 0,
                                    decay: 0
                                };
                                break;
                            case "PointLight":
                                t = {
                                    position: new y,
                                    color: new fe,
                                    distance: 0,
                                    decay: 0
                                };
                                break;
                            case "HemisphereLight":
                                t = {
                                    direction: new y,
                                    skyColor: new fe,
                                    groundColor: new fe
                                };
                                break;
                            case "RectAreaLight":
                                t = {
                                    color: new fe,
                                    position: new y,
                                    halfWidth: new y,
                                    halfHeight: new y
                                }
                        }
                        return s[e.id] = t, t
                    }
                }
            }
            let ul = 0;

            function pl(s, e) {
                return (e.castShadow ? 1 : 0) - (s.castShadow ? 1 : 0)
            }

            function ml(s, e) {
                const t = new dl,
                    n = function () {
                        const l = {};
                        return {
                            get: function (c) {
                                if (l[c.id] !== void 0) return l[c.id];
                                let h;
                                switch (c.type) {
                                    case "DirectionalLight":
                                    case "SpotLight":
                                        h = {
                                            shadowBias: 0,
                                            shadowNormalBias: 0,
                                            shadowRadius: 1,
                                            shadowMapSize: new ne
                                        };
                                        break;
                                    case "PointLight":
                                        h = {
                                            shadowBias: 0,
                                            shadowNormalBias: 0,
                                            shadowRadius: 1,
                                            shadowMapSize: new ne,
                                            shadowCameraNear: 1,
                                            shadowCameraFar: 1e3
                                        }
                                }
                                return l[c.id] = h, h
                            }
                        }
                    }(),
                    i = {
                        version: 0,
                        hash: {
                            directionalLength: -1,
                            pointLength: -1,
                            spotLength: -1,
                            rectAreaLength: -1,
                            hemiLength: -1,
                            numDirectionalShadows: -1,
                            numPointShadows: -1,
                            numSpotShadows: -1
                        },
                        ambient: [0, 0, 0],
                        probe: [],
                        directional: [],
                        directionalShadow: [],
                        directionalShadowMap: [],
                        directionalShadowMatrix: [],
                        spot: [],
                        spotShadow: [],
                        spotShadowMap: [],
                        spotShadowMatrix: [],
                        rectArea: [],
                        rectAreaLTC1: null,
                        rectAreaLTC2: null,
                        point: [],
                        pointShadow: [],
                        pointShadowMap: [],
                        pointShadowMatrix: [],
                        hemi: []
                    };
                for (let l = 0; l < 9; l++) i.probe.push(new y);
                const r = new y,
                    o = new ae,
                    a = new ae;
                return {
                    setup: function (l) {
                        let c = 0,
                            h = 0,
                            u = 0;
                        for (let A = 0; A < 9; A++) i.probe[A].set(0, 0, 0);
                        let d = 0,
                            p = 0,
                            g = 0,
                            f = 0,
                            m = 0,
                            v = 0,
                            w = 0,
                            M = 0;
                        l.sort(pl);
                        for (let A = 0, L = l.length; A < L; A++) {
                            const b = l[A],
                                C = b.color,
                                z = b.intensity,
                                R = b.distance,
                                I = b.shadow && b.shadow.map ? b.shadow.map.texture : null;
                            if (b.isAmbientLight) c += C.r * z, h += C.g * z, u += C.b * z;
                            else if (b.isLightProbe)
                                for (let N = 0; N < 9; N++) i.probe[N].addScaledVector(b.sh.coefficients[N], z);
                            else if (b.isDirectionalLight) {
                                const N = t.get(b);
                                if (N.color.copy(b.color).multiplyScalar(b.intensity), b.castShadow) {
                                    const D = b.shadow,
                                        O = n.get(b);
                                    O.shadowBias = D.bias, O.shadowNormalBias = D.normalBias, O.shadowRadius = D.radius, O.shadowMapSize = D.mapSize, i.directionalShadow[d] = O, i.directionalShadowMap[d] = I, i.directionalShadowMatrix[d] = b.shadow.matrix, v++
                                }
                                i.directional[d] = N, d++
                            } else if (b.isSpotLight) {
                                const N = t.get(b);
                                if (N.position.setFromMatrixPosition(b.matrixWorld), N.color.copy(C).multiplyScalar(z), N.distance = R, N.coneCos = Math.cos(b.angle), N.penumbraCos = Math.cos(b.angle * (1 - b.penumbra)), N.decay = b.decay, b.castShadow) {
                                    const D = b.shadow,
                                        O = n.get(b);
                                    O.shadowBias = D.bias, O.shadowNormalBias = D.normalBias, O.shadowRadius = D.radius, O.shadowMapSize = D.mapSize, i.spotShadow[g] = O, i.spotShadowMap[g] = I, i.spotShadowMatrix[g] = b.shadow.matrix, M++
                                }
                                i.spot[g] = N, g++
                            } else if (b.isRectAreaLight) {
                                const N = t.get(b);
                                N.color.copy(C).multiplyScalar(z), N.halfWidth.set(.5 * b.width, 0, 0), N.halfHeight.set(0, .5 * b.height, 0), i.rectArea[f] = N, f++
                            } else if (b.isPointLight) {
                                const N = t.get(b);
                                if (N.color.copy(b.color).multiplyScalar(b.intensity), N.distance = b.distance, N.decay = b.decay, b.castShadow) {
                                    const D = b.shadow,
                                        O = n.get(b);
                                    O.shadowBias = D.bias, O.shadowNormalBias = D.normalBias, O.shadowRadius = D.radius, O.shadowMapSize = D.mapSize, O.shadowCameraNear = D.camera.near, O.shadowCameraFar = D.camera.far, i.pointShadow[p] = O, i.pointShadowMap[p] = I, i.pointShadowMatrix[p] = b.shadow.matrix, w++
                                }
                                i.point[p] = N, p++
                            } else if (b.isHemisphereLight) {
                                const N = t.get(b);
                                N.skyColor.copy(b.color).multiplyScalar(z), N.groundColor.copy(b.groundColor).multiplyScalar(z), i.hemi[m] = N, m++
                            }
                        }
                        f > 0 && (e.isWebGL2 || s.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = Q.LTC_FLOAT_1, i.rectAreaLTC2 = Q.LTC_FLOAT_2) : s.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = Q.LTC_HALF_1, i.rectAreaLTC2 = Q.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = c, i.ambient[1] = h, i.ambient[2] = u;
                        const _ = i.hash;
                        _.directionalLength === d && _.pointLength === p && _.spotLength === g && _.rectAreaLength === f && _.hemiLength === m && _.numDirectionalShadows === v && _.numPointShadows === w && _.numSpotShadows === M || (i.directional.length = d, i.spot.length = g, i.rectArea.length = f, i.point.length = p, i.hemi.length = m, i.directionalShadow.length = v, i.directionalShadowMap.length = v, i.pointShadow.length = w, i.pointShadowMap.length = w, i.spotShadow.length = M, i.spotShadowMap.length = M, i.directionalShadowMatrix.length = v, i.pointShadowMatrix.length = w, i.spotShadowMatrix.length = M, _.directionalLength = d, _.pointLength = p, _.spotLength = g, _.rectAreaLength = f, _.hemiLength = m, _.numDirectionalShadows = v, _.numPointShadows = w, _.numSpotShadows = M, i.version = ul++)
                    },
                    setupView: function (l, c) {
                        let h = 0,
                            u = 0,
                            d = 0,
                            p = 0,
                            g = 0;
                        const f = c.matrixWorldInverse;
                        for (let m = 0, v = l.length; m < v; m++) {
                            const w = l[m];
                            if (w.isDirectionalLight) {
                                const M = i.directional[h];
                                M.direction.setFromMatrixPosition(w.matrixWorld), r.setFromMatrixPosition(w.target.matrixWorld), M.direction.sub(r), M.direction.transformDirection(f), h++
                            } else if (w.isSpotLight) {
                                const M = i.spot[d];
                                M.position.setFromMatrixPosition(w.matrixWorld), M.position.applyMatrix4(f), M.direction.setFromMatrixPosition(w.matrixWorld), r.setFromMatrixPosition(w.target.matrixWorld), M.direction.sub(r), M.direction.transformDirection(f), d++
                            } else if (w.isRectAreaLight) {
                                const M = i.rectArea[p];
                                M.position.setFromMatrixPosition(w.matrixWorld), M.position.applyMatrix4(f), a.identity(), o.copy(w.matrixWorld), o.premultiply(f), a.extractRotation(o), M.halfWidth.set(.5 * w.width, 0, 0), M.halfHeight.set(0, .5 * w.height, 0), M.halfWidth.applyMatrix4(a), M.halfHeight.applyMatrix4(a), p++
                            } else if (w.isPointLight) {
                                const M = i.point[u];
                                M.position.setFromMatrixPosition(w.matrixWorld), M.position.applyMatrix4(f), u++
                            } else if (w.isHemisphereLight) {
                                const M = i.hemi[g];
                                M.direction.setFromMatrixPosition(w.matrixWorld), M.direction.transformDirection(f), M.direction.normalize(), g++
                            }
                        }
                    },
                    state: i
                }
            }

            function ps(s, e) {
                const t = new ml(s, e),
                    n = [],
                    i = [];
                return {
                    init: function () {
                        n.length = 0, i.length = 0
                    },
                    state: {
                        lightsArray: n,
                        shadowsArray: i,
                        lights: t
                    },
                    setupLights: function () {
                        t.setup(n)
                    },
                    setupLightsView: function (r) {
                        t.setupView(n, r)
                    },
                    pushLight: function (r) {
                        n.push(r)
                    },
                    pushShadow: function (r) {
                        i.push(r)
                    }
                }
            }

            function fl(s, e) {
                let t = new WeakMap;
                return {
                    get: function (n, i = 0) {
                        let r;
                        return t.has(n) === !1 ? (r = new ps(s, e), t.set(n, [r])) : i >= t.get(n).length ? (r = new ps(s, e), t.get(n).push(r)) : r = t.get(n)[i], r
                    },
                    dispose: function () {
                        t = new WeakMap
                    }
                }
            }
            class ms extends lt {
                constructor(e) {
                    super(), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.depthPacking = e.depthPacking, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
                }
            }
            ms.prototype.isMeshDepthMaterial = !0;
            class fs extends lt {
                constructor(e) {
                    super(), this.type = "MeshDistanceMaterial", this.referencePosition = new y, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this
                }
            }

            function gs(s, e, t) {
                let n = new fi;
                const i = new ne,
                    r = new ne,
                    o = new qe,
                    a = [],
                    l = [],
                    c = {},
                    h = t.maxTextureSize,
                    u = {
                        0: 1,
                        1: 0,
                        2: 2
                    },
                    d = new rn({
                        defines: {
                            SAMPLE_RATE: 2 / 8,
                            HALF_SAMPLE_RATE: 1 / 8
                        },
                        uniforms: {
                            shadow_pass: {
                                value: null
                            },
                            resolution: {
                                value: new ne
                            },
                            radius: {
                                value: 4
                            }
                        },
                        vertexShader: `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
                        fragmentShader: `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`
                    }),
                    p = d.clone();
                p.defines.HORIZONTAL_PASS = 1;
                const g = new Pe;
                g.setAttribute("position", new Xe(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
                const f = new Ke(g, d),
                    m = this;

                function v(L, b) {
                    const C = e.update(f);
                    d.uniforms.shadow_pass.value = L.map.texture, d.uniforms.resolution.value = L.mapSize, d.uniforms.radius.value = L.radius, s.setRenderTarget(L.mapPass), s.clear(), s.renderBufferDirect(b, null, C, d, f, null), p.uniforms.shadow_pass.value = L.mapPass.texture, p.uniforms.resolution.value = L.mapSize, p.uniforms.radius.value = L.radius, s.setRenderTarget(L.map), s.clear(), s.renderBufferDirect(b, null, C, p, f, null)
                }

                function w(L, b, C) {
                    const z = L << 0 | b << 1 | C << 2;
                    let R = a[z];
                    return R === void 0 && (R = new ms({
                        depthPacking: 3201,
                        morphTargets: L,
                        skinning: b
                    }), a[z] = R), R
                }

                function M(L, b, C) {
                    const z = L << 0 | b << 1 | C << 2;
                    let R = l[z];
                    return R === void 0 && (R = new fs({
                        morphTargets: L,
                        skinning: b
                    }), l[z] = R), R
                }

                function _(L, b, C, z, R, I, N) {
                    let D = null,
                        O = w,
                        B = L.customDepthMaterial;
                    if (z.isPointLight === !0 && (O = M, B = L.customDistanceMaterial), B === void 0) {
                        let q = !1;
                        C.morphTargets === !0 && (q = b.morphAttributes && b.morphAttributes.position && b.morphAttributes.position.length > 0);
                        let ee = !1;
                        L.isSkinnedMesh === !0 && (C.skinning === !0 ? ee = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", L)), D = O(q, ee, L.isInstancedMesh === !0)
                    } else D = B;
                    if (s.localClippingEnabled && C.clipShadows === !0 && C.clippingPlanes.length !== 0) {
                        const q = D.uuid,
                            ee = C.uuid;
                        let k = c[q];
                        k === void 0 && (k = {}, c[q] = k);
                        let Z = k[ee];
                        Z === void 0 && (Z = D.clone(), k[ee] = Z), D = Z
                    }
                    return D.visible = C.visible, D.wireframe = C.wireframe, D.side = N === 3 ? C.shadowSide !== null ? C.shadowSide : C.side : C.shadowSide !== null ? C.shadowSide : u[C.side], D.clipShadows = C.clipShadows, D.clippingPlanes = C.clippingPlanes, D.clipIntersection = C.clipIntersection, D.wireframeLinewidth = C.wireframeLinewidth, D.linewidth = C.linewidth, z.isPointLight === !0 && D.isMeshDistanceMaterial === !0 && (D.referencePosition.setFromMatrixPosition(z.matrixWorld), D.nearDistance = R, D.farDistance = I), D
                }

                function A(L, b, C, z, R) {
                    if (L.visible === !1) return;
                    if (L.layers.test(b.layers) && (L.isMesh || L.isLine || L.isPoints) && (L.castShadow || L.receiveShadow && R === 3) && (!L.frustumCulled || n.intersectsObject(L))) {
                        L.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse, L.matrixWorld);
                        const N = e.update(L),
                            D = L.material;
                        if (Array.isArray(D)) {
                            const O = N.groups;
                            for (let B = 0, q = O.length; B < q; B++) {
                                const ee = O[B],
                                    k = D[ee.materialIndex];
                                if (k && k.visible) {
                                    const Z = _(L, N, k, z, C.near, C.far, R);
                                    s.renderBufferDirect(C, null, N, Z, L, ee)
                                }
                            }
                        } else if (D.visible) {
                            const O = _(L, N, D, z, C.near, C.far, R);
                            s.renderBufferDirect(C, null, N, O, L, null)
                        }
                    }
                    const I = L.children;
                    for (let N = 0, D = I.length; N < D; N++) A(I[N], b, C, z, R)
                }
                this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function (L, b, C) {
                    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || L.length === 0) return;
                    const z = s.getRenderTarget(),
                        R = s.getActiveCubeFace(),
                        I = s.getActiveMipmapLevel(),
                        N = s.state;
                    N.setBlending(0), N.buffers.color.setClear(1, 1, 1, 1), N.buffers.depth.setTest(!0), N.setScissorTest(!1);
                    for (let D = 0, O = L.length; D < O; D++) {
                        const B = L[D],
                            q = B.shadow;
                        if (q === void 0) {
                            console.warn("THREE.WebGLShadowMap:", B, "has no shadow.");
                            continue
                        }
                        if (q.autoUpdate === !1 && q.needsUpdate === !1) continue;
                        i.copy(q.mapSize);
                        const ee = q.getFrameExtents();
                        if (i.multiply(ee), r.copy(q.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / ee.x), i.x = r.x * ee.x, q.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / ee.y), i.y = r.y * ee.y, q.mapSize.y = r.y)), q.map === null && !q.isPointLightShadow && this.type === 3) {
                            const Z = {
                                minFilter: Fe,
                                magFilter: Fe,
                                format: Re
                            };
                            q.map = new gn(i.x, i.y, Z), q.map.texture.name = B.name + ".shadowMap", q.mapPass = new gn(i.x, i.y, Z), q.camera.updateProjectionMatrix()
                        }
                        if (q.map === null) {
                            const Z = {
                                minFilter: Se,
                                magFilter: Se,
                                format: Re
                            };
                            q.map = new gn(i.x, i.y, Z), q.map.texture.name = B.name + ".shadowMap", q.camera.updateProjectionMatrix()
                        }
                        s.setRenderTarget(q.map), s.clear();
                        const k = q.getViewportCount();
                        for (let Z = 0; Z < k; Z++) {
                            const te = q.getViewport(Z);
                            o.set(r.x * te.x, r.y * te.y, r.x * te.z, r.y * te.w), N.viewport(o), q.updateMatrices(B, Z), n = q.getFrustum(), A(b, C, q.camera, B, this.type)
                        }
                        q.isPointLightShadow || this.type !== 3 || v(q, C), q.needsUpdate = !1
                    }
                    m.needsUpdate = !1, s.setRenderTarget(z, R, I)
                }
            }

            function gl(s, e, t) {
                const n = t.isWebGL2,
                    i = new function () {
                        let E = !1;
                        const G = new qe;
                        let K = null;
                        const re = new qe(0, 0, 0, 0);
                        return {
                            setMask: function (X) {
                                K === X || E || (s.colorMask(X, X, X, X), K = X)
                            },
                            setLocked: function (X) {
                                E = X
                            },
                            setClear: function (X, $, ge, Ee, ye) {
                                ye === !0 && (X *= Ee, $ *= Ee, ge *= Ee), G.set(X, $, ge, Ee), re.equals(G) === !1 && (s.clearColor(X, $, ge, Ee), re.copy(G))
                            },
                            reset: function () {
                                E = !1, K = null, re.set(-1, 0, 0, 0)
                            }
                        }
                    },
                    r = new function () {
                        let E = !1,
                            G = null,
                            K = null,
                            re = null;
                        return {
                            setTest: function (X) {
                                X ? Z(2929) : te(2929)
                            },
                            setMask: function (X) {
                                G === X || E || (s.depthMask(X), G = X)
                            },
                            setFunc: function (X) {
                                if (K !== X) {
                                    if (X) switch (X) {
                                        case 0:
                                            s.depthFunc(512);
                                            break;
                                        case 1:
                                            s.depthFunc(519);
                                            break;
                                        case 2:
                                            s.depthFunc(513);
                                            break;
                                        case 3:
                                            s.depthFunc(515);
                                            break;
                                        case 4:
                                            s.depthFunc(514);
                                            break;
                                        case 5:
                                            s.depthFunc(518);
                                            break;
                                        case 6:
                                            s.depthFunc(516);
                                            break;
                                        case 7:
                                            s.depthFunc(517);
                                            break;
                                        default:
                                            s.depthFunc(515)
                                    } else s.depthFunc(515);
                                    K = X
                                }
                            },
                            setLocked: function (X) {
                                E = X
                            },
                            setClear: function (X) {
                                re !== X && (s.clearDepth(X), re = X)
                            },
                            reset: function () {
                                E = !1, G = null, K = null, re = null
                            }
                        }
                    },
                    o = new function () {
                        let E = !1,
                            G = null,
                            K = null,
                            re = null,
                            X = null,
                            $ = null,
                            ge = null,
                            Ee = null,
                            ye = null;
                        return {
                            setTest: function (pe) {
                                E || (pe ? Z(2960) : te(2960))
                            },
                            setMask: function (pe) {
                                G === pe || E || (s.stencilMask(pe), G = pe)
                            },
                            setFunc: function (pe, Te, Ye) {
                                K === pe && re === Te && X === Ye || (s.stencilFunc(pe, Te, Ye), K = pe, re = Te, X = Ye)
                            },
                            setOp: function (pe, Te, Ye) {
                                $ === pe && ge === Te && Ee === Ye || (s.stencilOp(pe, Te, Ye), $ = pe, ge = Te, Ee = Ye)
                            },
                            setLocked: function (pe) {
                                E = pe
                            },
                            setClear: function (pe) {
                                ye !== pe && (s.clearStencil(pe), ye = pe)
                            },
                            reset: function () {
                                E = !1, G = null, K = null, re = null, X = null, $ = null, ge = null, Ee = null, ye = null
                            }
                        }
                    };
                let a = {},
                    l = null,
                    c = {},
                    h = null,
                    u = !1,
                    d = null,
                    p = null,
                    g = null,
                    f = null,
                    m = null,
                    v = null,
                    w = null,
                    M = !1,
                    _ = null,
                    A = null,
                    L = null,
                    b = null,
                    C = null;
                const z = s.getParameter(35661);
                let R = !1,
                    I = 0;
                const N = s.getParameter(7938);
                N.indexOf("WebGL") !== -1 ? (I = parseFloat(/^WebGL (\d)/.exec(N)[1]), R = I >= 1) : N.indexOf("OpenGL ES") !== -1 && (I = parseFloat(/^OpenGL ES (\d)/.exec(N)[1]), R = I >= 2);
                let D = null,
                    O = {};
                const B = new qe(0, 0, s.canvas.width, s.canvas.height),
                    q = new qe(0, 0, s.canvas.width, s.canvas.height);

                function ee(E, G, K) {
                    const re = new Uint8Array(4),
                        X = s.createTexture();
                    s.bindTexture(E, X), s.texParameteri(E, 10241, 9728), s.texParameteri(E, 10240, 9728);
                    for (let $ = 0; $ < K; $++) s.texImage2D(G + $, 0, 6408, 1, 1, 0, 6408, 5121, re);
                    return X
                }
                const k = {};

                function Z(E) {
                    a[E] !== !0 && (s.enable(E), a[E] = !0)
                }

                function te(E) {
                    a[E] !== !1 && (s.disable(E), a[E] = !1)
                }
                k[3553] = ee(3553, 3553, 1), k[34067] = ee(34067, 34069, 6), i.setClear(0, 0, 0, 1), r.setClear(1), o.setClear(0), Z(2929), r.setFunc(3), U(!1), V(1), Z(2884), j(0);
                const S = {
                    [ie]: 32774,
                    101: 32778,
                    102: 32779
                };
                if (n) S[103] = 32775, S[104] = 32776;
                else {
                    const E = e.get("EXT_blend_minmax");
                    E !== null && (S[103] = E.MIN_EXT, S[104] = E.MAX_EXT)
                }
                const T = {
                    200: 0,
                    201: 1,
                    202: 768,
                    204: 770,
                    210: 776,
                    208: 774,
                    206: 772,
                    203: 769,
                    205: 771,
                    209: 775,
                    207: 773
                };

                function j(E, G, K, re, X, $, ge, Ee) {
                    if (E !== 0) {
                        if (u === !1 && (Z(3042), u = !0), E === 5) X = X || G, $ = $ || K, ge = ge || re, G === p && X === m || (s.blendEquationSeparate(S[G], S[X]), p = G, m = X), K === g && re === f && $ === v && ge === w || (s.blendFuncSeparate(T[K], T[re], T[$], T[ge]), g = K, f = re, v = $, w = ge), d = E, M = null;
                        else if (E !== d || Ee !== M) {
                            if (p === ie && m === ie || (s.blendEquation(32774), p = ie, m = ie), Ee) switch (E) {
                                case 1:
                                    s.blendFuncSeparate(1, 771, 1, 771);
                                    break;
                                case 2:
                                    s.blendFunc(1, 1);
                                    break;
                                case 3:
                                    s.blendFuncSeparate(0, 0, 769, 771);
                                    break;
                                case 4:
                                    s.blendFuncSeparate(0, 768, 0, 770);
                                    break;
                                default:
                                    console.error("THREE.WebGLState: Invalid blending: ", E)
                            } else switch (E) {
                                case 1:
                                    s.blendFuncSeparate(770, 771, 1, 771);
                                    break;
                                case 2:
                                    s.blendFunc(770, 1);
                                    break;
                                case 3:
                                    s.blendFunc(0, 769);
                                    break;
                                case 4:
                                    s.blendFunc(0, 768);
                                    break;
                                default:
                                    console.error("THREE.WebGLState: Invalid blending: ", E)
                            }
                            g = null, f = null, v = null, w = null, d = E, M = Ee
                        }
                    } else u === !0 && (te(3042), u = !1)
                }

                function U(E) {
                    _ !== E && (E ? s.frontFace(2304) : s.frontFace(2305), _ = E)
                }

                function V(E) {
                    E !== 0 ? (Z(2884), E !== A && (E === 1 ? s.cullFace(1029) : E === 2 ? s.cullFace(1028) : s.cullFace(1032))) : te(2884), A = E
                }

                function J(E, G, K) {
                    E ? (Z(32823), b === G && C === K || (s.polygonOffset(G, K), b = G, C = K)) : te(32823)
                }

                function oe(E) {
                    E === void 0 && (E = 33984 + z - 1), D !== E && (s.activeTexture(E), D = E)
                }
                return {
                    buffers: {
                        color: i,
                        depth: r,
                        stencil: o
                    },
                    enable: Z,
                    disable: te,
                    bindFramebuffer: function (E, G) {
                        G === null && l !== null && (G = l), c[E] !== G && (s.bindFramebuffer(E, G), c[E] = G, n && (E === 36009 && (c[36160] = G), E === 36160 && (c[36009] = G)))
                    },
                    bindXRFramebuffer: function (E) {
                        E !== l && (s.bindFramebuffer(36160, E), l = E)
                    },
                    useProgram: function (E) {
                        return h !== E && (s.useProgram(E), h = E, !0)
                    },
                    setBlending: j,
                    setMaterial: function (E, G) {
                        E.side === 2 ? te(2884) : Z(2884);
                        let K = E.side === 1;
                        G && (K = !K), U(K), E.blending === 1 && E.transparent === !1 ? j(0) : j(E.blending, E.blendEquation, E.blendSrc, E.blendDst, E.blendEquationAlpha, E.blendSrcAlpha, E.blendDstAlpha, E.premultipliedAlpha), r.setFunc(E.depthFunc), r.setTest(E.depthTest), r.setMask(E.depthWrite), i.setMask(E.colorWrite);
                        const re = E.stencilWrite;
                        o.setTest(re), re && (o.setMask(E.stencilWriteMask), o.setFunc(E.stencilFunc, E.stencilRef, E.stencilFuncMask), o.setOp(E.stencilFail, E.stencilZFail, E.stencilZPass)), J(E.polygonOffset, E.polygonOffsetFactor, E.polygonOffsetUnits), E.alphaToCoverage === !0 ? Z(32926) : te(32926)
                    },
                    setFlipSided: U,
                    setCullFace: V,
                    setLineWidth: function (E) {
                        E !== L && (R && s.lineWidth(E), L = E)
                    },
                    setPolygonOffset: J,
                    setScissorTest: function (E) {
                        E ? Z(3089) : te(3089)
                    },
                    activeTexture: oe,
                    bindTexture: function (E, G) {
                        D === null && oe();
                        let K = O[D];
                        K === void 0 && (K = {
                            type: void 0,
                            texture: void 0
                        }, O[D] = K), K.type === E && K.texture === G || (s.bindTexture(E, G || k[E]), K.type = E, K.texture = G)
                    },
                    unbindTexture: function () {
                        const E = O[D];
                        E !== void 0 && E.type !== void 0 && (s.bindTexture(E.type, null), E.type = void 0, E.texture = void 0)
                    },
                    compressedTexImage2D: function () {
                        try {
                            s.compressedTexImage2D.apply(s, arguments)
                        } catch (E) {
                            console.error("THREE.WebGLState:", E)
                        }
                    },
                    texImage2D: function () {
                        try {
                            s.texImage2D.apply(s, arguments)
                        } catch (E) {
                            console.error("THREE.WebGLState:", E)
                        }
                    },
                    texImage3D: function () {
                        try {
                            s.texImage3D.apply(s, arguments)
                        } catch (E) {
                            console.error("THREE.WebGLState:", E)
                        }
                    },
                    scissor: function (E) {
                        B.equals(E) === !1 && (s.scissor(E.x, E.y, E.z, E.w), B.copy(E))
                    },
                    viewport: function (E) {
                        q.equals(E) === !1 && (s.viewport(E.x, E.y, E.z, E.w), q.copy(E))
                    },
                    reset: function () {
                        s.disable(3042), s.disable(2884), s.disable(2929), s.disable(32823), s.disable(3089), s.disable(2960), s.disable(32926), s.blendEquation(32774), s.blendFunc(1, 0), s.blendFuncSeparate(1, 0, 1, 0), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(513), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(519, 0, 4294967295), s.stencilOp(7680, 7680, 7680), s.clearStencil(0), s.cullFace(1029), s.frontFace(2305), s.polygonOffset(0, 0), s.activeTexture(33984), s.bindFramebuffer(36160, null), n === !0 && (s.bindFramebuffer(36009, null), s.bindFramebuffer(36008, null)), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), a = {}, D = null, O = {}, l = null, c = {}, h = null, u = !1, d = null, p = null, g = null, f = null, m = null, v = null, w = null, M = !1, _ = null, A = null, L = null, b = null, C = null, B.set(0, 0, s.canvas.width, s.canvas.height), q.set(0, 0, s.canvas.width, s.canvas.height), i.reset(), r.reset(), o.reset()
                    }
                }
            }

            function vl(s, e, t, n, i, r, o) {
                const a = i.isWebGL2,
                    l = i.maxTextures,
                    c = i.maxCubemapSize,
                    h = i.maxTextureSize,
                    u = i.maxSamples,
                    d = new WeakMap;
                let p, g = !1;
                try {
                    g = typeof OffscreenCanvas != "undefined" && new OffscreenCanvas(1, 1).getContext("2d") !== null
                } catch (S) { }

                function f(S, T) {
                    return g ? new OffscreenCanvas(S, T) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
                }

                function m(S, T, j, U) {
                    let V = 1;
                    if ((S.width > U || S.height > U) && (V = U / Math.max(S.width, S.height)), V < 1 || T === !0) {
                        if (typeof HTMLImageElement != "undefined" && S instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && S instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && S instanceof ImageBitmap) {
                            const J = T ? Na : Math.floor,
                                oe = J(V * S.width),
                                E = J(V * S.height);
                            p === void 0 && (p = f(oe, E));
                            const G = j ? f(oe, E) : p;
                            return G.width = oe, G.height = E, G.getContext("2d").drawImage(S, 0, 0, oe, E), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + S.width + "x" + S.height + ") to (" + oe + "x" + E + ")."), G
                        }
                        return "data" in S && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + S.width + "x" + S.height + ")."), S
                    }
                    return S
                }

                function v(S) {
                    return Er(S.width) && Er(S.height)
                }

                function w(S, T) {
                    return S.generateMipmaps && T && S.minFilter !== Se && S.minFilter !== Fe
                }

                function M(S, T, j, U) {
                    s.generateMipmap(S), n.get(T).__maxMipLevel = Math.log2(Math.max(j, U))
                }

                function _(S, T, j) {
                    if (a === !1) return T;
                    if (S !== null) {
                        if (s[S] !== void 0) return s[S];
                        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + S + "'")
                    }
                    let U = T;
                    return T === 6403 && (j === 5126 && (U = 33326), j === 5131 && (U = 33325), j === 5121 && (U = 33321)), T === 6407 && (j === 5126 && (U = 34837), j === 5131 && (U = 34843), j === 5121 && (U = 32849)), T === 6408 && (j === 5126 && (U = 34836), j === 5131 && (U = 34842), j === 5121 && (U = 32856)), U !== 33325 && U !== 33326 && U !== 34842 && U !== 34836 || e.get("EXT_color_buffer_float"), U
                }

                function A(S) {
                    return S === Se || S === 1004 || S === 1005 ? 9728 : 9729
                }

                function L(S) {
                    const T = S.target;
                    T.removeEventListener("dispose", L),
                        function (j) {
                            const U = n.get(j);
                            U.__webglInit !== void 0 && (s.deleteTexture(U.__webglTexture), n.remove(j))
                        }(T), T.isVideoTexture && d.delete(T), o.memory.textures--
                }

                function b(S) {
                    const T = S.target;
                    T.removeEventListener("dispose", b),
                        function (j) {
                            const U = j.texture,
                                V = n.get(j),
                                J = n.get(U);
                            if (j) {
                                if (J.__webglTexture !== void 0 && s.deleteTexture(J.__webglTexture), j.depthTexture && j.depthTexture.dispose(), j.isWebGLCubeRenderTarget)
                                    for (let oe = 0; oe < 6; oe++) s.deleteFramebuffer(V.__webglFramebuffer[oe]), V.__webglDepthbuffer && s.deleteRenderbuffer(V.__webglDepthbuffer[oe]);
                                else s.deleteFramebuffer(V.__webglFramebuffer), V.__webglDepthbuffer && s.deleteRenderbuffer(V.__webglDepthbuffer), V.__webglMultisampledFramebuffer && s.deleteFramebuffer(V.__webglMultisampledFramebuffer), V.__webglColorRenderbuffer && s.deleteRenderbuffer(V.__webglColorRenderbuffer), V.__webglDepthRenderbuffer && s.deleteRenderbuffer(V.__webglDepthRenderbuffer);
                                n.remove(U), n.remove(j)
                            }
                        }(T), o.memory.textures--
                }
                let C = 0;

                function z(S, T) {
                    const j = n.get(S);
                    if (S.isVideoTexture && function (U) {
                        const V = o.render.frame;
                        d.get(U) !== V && (d.set(U, V), U.update())
                    }(S), S.version > 0 && j.__version !== S.version) {
                        const U = S.image;
                        if (U === void 0) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
                        else {
                            if (U.complete !== !1) return void B(j, S, T);
                            console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
                        }
                    }
                    t.activeTexture(33984 + T), t.bindTexture(3553, j.__webglTexture)
                }

                function R(S, T) {
                    const j = n.get(S);
                    S.version > 0 && j.__version !== S.version ? function (U, V, J) {
                        if (V.image.length !== 6) return;
                        O(U, V), t.activeTexture(33984 + J), t.bindTexture(34067, U.__webglTexture), s.pixelStorei(37440, V.flipY), s.pixelStorei(37441, V.premultiplyAlpha), s.pixelStorei(3317, V.unpackAlignment), s.pixelStorei(37443, 0);
                        const oe = V && (V.isCompressedTexture || V.image[0].isCompressedTexture),
                            E = V.image[0] && V.image[0].isDataTexture,
                            G = [];
                        for (let ye = 0; ye < 6; ye++) G[ye] = oe || E ? E ? V.image[ye].image : V.image[ye] : m(V.image[ye], !1, !0, c);
                        const K = G[0],
                            re = v(K) || a,
                            X = r.convert(V.format),
                            $ = r.convert(V.type),
                            ge = _(V.internalFormat, X, $);
                        let Ee;
                        if (D(34067, V, re), oe) {
                            for (let ye = 0; ye < 6; ye++) {
                                Ee = G[ye].mipmaps;
                                for (let pe = 0; pe < Ee.length; pe++) {
                                    const Te = Ee[pe];
                                    V.format !== Re && V.format !== We ? X !== null ? t.compressedTexImage2D(34069 + ye, pe, ge, Te.width, Te.height, 0, Te.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : t.texImage2D(34069 + ye, pe, ge, Te.width, Te.height, 0, X, $, Te.data)
                                }
                            }
                            U.__maxMipLevel = Ee.length - 1
                        } else {
                            Ee = V.mipmaps;
                            for (let ye = 0; ye < 6; ye++)
                                if (E) {
                                    t.texImage2D(34069 + ye, 0, ge, G[ye].width, G[ye].height, 0, X, $, G[ye].data);
                                    for (let pe = 0; pe < Ee.length; pe++) {
                                        const Te = Ee[pe].image[ye].image;
                                        t.texImage2D(34069 + ye, pe + 1, ge, Te.width, Te.height, 0, X, $, Te.data)
                                    }
                                } else {
                                    t.texImage2D(34069 + ye, 0, ge, X, $, G[ye]);
                                    for (let pe = 0; pe < Ee.length; pe++) {
                                        const Te = Ee[pe];
                                        t.texImage2D(34069 + ye, pe + 1, ge, X, $, Te.image[ye])
                                    }
                                }
                            U.__maxMipLevel = Ee.length
                        }
                        w(V, re) && M(34067, V, K.width, K.height), U.__version = V.version, V.onUpdate && V.onUpdate(V)
                    }(j, S, T) : (t.activeTexture(33984 + T), t.bindTexture(34067, j.__webglTexture))
                }
                const I = {
                    [le]: 10497,
                    [se]: 33071,
                    [Ge]: 33648
                },
                    N = {
                        [Se]: 9728,
                        1004: 9984,
                        1005: 9986,
                        [Fe]: 9729,
                        1007: 9985,
                        1008: 9987
                    };

                function D(S, T, j) {
                    if (j ? (s.texParameteri(S, 10242, I[T.wrapS]), s.texParameteri(S, 10243, I[T.wrapT]), S !== 32879 && S !== 35866 || s.texParameteri(S, 32882, I[T.wrapR]), s.texParameteri(S, 10240, N[T.magFilter]), s.texParameteri(S, 10241, N[T.minFilter])) : (s.texParameteri(S, 10242, 33071), s.texParameteri(S, 10243, 33071), S !== 32879 && S !== 35866 || s.texParameteri(S, 32882, 33071), T.wrapS === se && T.wrapT === se || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), s.texParameteri(S, 10240, A(T.magFilter)), s.texParameteri(S, 10241, A(T.minFilter)), T.minFilter !== Se && T.minFilter !== Fe && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
                        const U = e.get("EXT_texture_filter_anisotropic");
                        if (T.type === _e && e.has("OES_texture_float_linear") === !1 || a === !1 && T.type === be && e.has("OES_texture_half_float_linear") === !1) return;
                        (T.anisotropy > 1 || n.get(T).__currentAnisotropy) && (s.texParameterf(S, U.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(T.anisotropy, i.getMaxAnisotropy())), n.get(T).__currentAnisotropy = T.anisotropy)
                    }
                }

                function O(S, T) {
                    S.__webglInit === void 0 && (S.__webglInit = !0, T.addEventListener("dispose", L), S.__webglTexture = s.createTexture(), o.memory.textures++)
                }

                function B(S, T, j) {
                    let U = 3553;
                    T.isDataTexture2DArray && (U = 35866), T.isDataTexture3D && (U = 32879), O(S, T), t.activeTexture(33984 + j), t.bindTexture(U, S.__webglTexture), s.pixelStorei(37440, T.flipY), s.pixelStorei(37441, T.premultiplyAlpha), s.pixelStorei(3317, T.unpackAlignment), s.pixelStorei(37443, 0);
                    const V = function ($) {
                        return !a && ($.wrapS !== se || $.wrapT !== se || $.minFilter !== Se && $.minFilter !== Fe)
                    }(T) && v(T.image) === !1,
                        J = m(T.image, V, !1, h),
                        oe = v(J) || a,
                        E = r.convert(T.format);
                    let G, K = r.convert(T.type),
                        re = _(T.internalFormat, E, K);
                    D(U, T, oe);
                    const X = T.mipmaps;
                    if (T.isDepthTexture) re = 6402, a ? re = T.type === _e ? 36012 : T.type === Ce ? 33190 : T.type === Ve ? 35056 : 33189 : T.type === _e && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), T.format === et && re === 6402 && T.type !== je && T.type !== Ce && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), T.type = je, K = r.convert(T.type)), T.format === dn && re === 6402 && (re = 34041, T.type !== Ve && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), T.type = Ve, K = r.convert(T.type))), t.texImage2D(3553, 0, re, J.width, J.height, 0, E, K, null);
                    else if (T.isDataTexture)
                        if (X.length > 0 && oe) {
                            for (let $ = 0, ge = X.length; $ < ge; $++) G = X[$], t.texImage2D(3553, $, re, G.width, G.height, 0, E, K, G.data);
                            T.generateMipmaps = !1, S.__maxMipLevel = X.length - 1
                        } else t.texImage2D(3553, 0, re, J.width, J.height, 0, E, K, J.data), S.__maxMipLevel = 0;
                    else if (T.isCompressedTexture) {
                        for (let $ = 0, ge = X.length; $ < ge; $++) G = X[$], T.format !== Re && T.format !== We ? E !== null ? t.compressedTexImage2D(3553, $, re, G.width, G.height, 0, G.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : t.texImage2D(3553, $, re, G.width, G.height, 0, E, K, G.data);
                        S.__maxMipLevel = X.length - 1
                    } else if (T.isDataTexture2DArray) t.texImage3D(35866, 0, re, J.width, J.height, J.depth, 0, E, K, J.data), S.__maxMipLevel = 0;
                    else if (T.isDataTexture3D) t.texImage3D(32879, 0, re, J.width, J.height, J.depth, 0, E, K, J.data), S.__maxMipLevel = 0;
                    else if (X.length > 0 && oe) {
                        for (let $ = 0, ge = X.length; $ < ge; $++) G = X[$], t.texImage2D(3553, $, re, E, K, G);
                        T.generateMipmaps = !1, S.__maxMipLevel = X.length - 1
                    } else t.texImage2D(3553, 0, re, E, K, J), S.__maxMipLevel = 0;
                    w(T, oe) && M(U, T, J.width, J.height), S.__version = T.version, T.onUpdate && T.onUpdate(T)
                }

                function q(S, T, j, U) {
                    const V = T.texture,
                        J = r.convert(V.format),
                        oe = r.convert(V.type),
                        E = _(V.internalFormat, J, oe);
                    U === 32879 || U === 35866 ? t.texImage3D(U, 0, E, T.width, T.height, T.depth, 0, J, oe, null) : t.texImage2D(U, 0, E, T.width, T.height, 0, J, oe, null), t.bindFramebuffer(36160, S), s.framebufferTexture2D(36160, j, U, n.get(V).__webglTexture, 0), t.bindFramebuffer(36160, null)
                }

                function ee(S, T, j) {
                    if (s.bindRenderbuffer(36161, S), T.depthBuffer && !T.stencilBuffer) {
                        let U = 33189;
                        if (j) {
                            const V = T.depthTexture;
                            V && V.isDepthTexture && (V.type === _e ? U = 36012 : V.type === Ce && (U = 33190));
                            const J = k(T);
                            s.renderbufferStorageMultisample(36161, J, U, T.width, T.height)
                        } else s.renderbufferStorage(36161, U, T.width, T.height);
                        s.framebufferRenderbuffer(36160, 36096, 36161, S)
                    } else if (T.depthBuffer && T.stencilBuffer) {
                        if (j) {
                            const U = k(T);
                            s.renderbufferStorageMultisample(36161, U, 35056, T.width, T.height)
                        } else s.renderbufferStorage(36161, 34041, T.width, T.height);
                        s.framebufferRenderbuffer(36160, 33306, 36161, S)
                    } else {
                        const U = T.texture,
                            V = r.convert(U.format),
                            J = r.convert(U.type),
                            oe = _(U.internalFormat, V, J);
                        if (j) {
                            const E = k(T);
                            s.renderbufferStorageMultisample(36161, E, oe, T.width, T.height)
                        } else s.renderbufferStorage(36161, oe, T.width, T.height)
                    }
                    s.bindRenderbuffer(36161, null)
                }

                function k(S) {
                    return a && S.isWebGLMultisampleRenderTarget ? Math.min(u, S.samples) : 0
                }
                let Z = !1,
                    te = !1;
                this.allocateTextureUnit = function () {
                    const S = C;
                    return S >= l && console.warn("THREE.WebGLTextures: Trying to use " + S + " texture units while this GPU supports only " + l), C += 1, S
                }, this.resetTextureUnits = function () {
                    C = 0
                }, this.setTexture2D = z, this.setTexture2DArray = function (S, T) {
                    const j = n.get(S);
                    S.version > 0 && j.__version !== S.version ? B(j, S, T) : (t.activeTexture(33984 + T), t.bindTexture(35866, j.__webglTexture))
                }, this.setTexture3D = function (S, T) {
                    const j = n.get(S);
                    S.version > 0 && j.__version !== S.version ? B(j, S, T) : (t.activeTexture(33984 + T), t.bindTexture(32879, j.__webglTexture))
                }, this.setTextureCube = R, this.setupRenderTarget = function (S) {
                    const T = S.texture,
                        j = n.get(S),
                        U = n.get(T);
                    S.addEventListener("dispose", b), U.__webglTexture = s.createTexture(), U.__version = T.version, o.memory.textures++;
                    const V = S.isWebGLCubeRenderTarget === !0,
                        J = S.isWebGLMultisampleRenderTarget === !0,
                        oe = T.isDataTexture3D || T.isDataTexture2DArray,
                        E = v(S) || a;
                    if (!a || T.format !== We || T.type !== _e && T.type !== be || (T.format = Re, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), V) {
                        j.__webglFramebuffer = [];
                        for (let G = 0; G < 6; G++) j.__webglFramebuffer[G] = s.createFramebuffer()
                    } else if (j.__webglFramebuffer = s.createFramebuffer(), J)
                        if (a) {
                            j.__webglMultisampledFramebuffer = s.createFramebuffer(), j.__webglColorRenderbuffer = s.createRenderbuffer(), s.bindRenderbuffer(36161, j.__webglColorRenderbuffer);
                            const G = r.convert(T.format),
                                K = r.convert(T.type),
                                re = _(T.internalFormat, G, K),
                                X = k(S);
                            s.renderbufferStorageMultisample(36161, X, re, S.width, S.height), t.bindFramebuffer(36160, j.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(36160, 36064, 36161, j.__webglColorRenderbuffer), s.bindRenderbuffer(36161, null), S.depthBuffer && (j.__webglDepthRenderbuffer = s.createRenderbuffer(), ee(j.__webglDepthRenderbuffer, S, !0)), t.bindFramebuffer(36160, null)
                        } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
                    if (V) {
                        t.bindTexture(34067, U.__webglTexture), D(34067, T, E);
                        for (let G = 0; G < 6; G++) q(j.__webglFramebuffer[G], S, 36064, 34069 + G);
                        w(T, E) && M(34067, T, S.width, S.height), t.bindTexture(34067, null)
                    } else {
                        let G = 3553;
                        oe && (a ? G = T.isDataTexture3D ? 32879 : 35866 : console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")), t.bindTexture(G, U.__webglTexture), D(G, T, E), q(j.__webglFramebuffer, S, 36064, G), w(T, E) && M(3553, T, S.width, S.height), t.bindTexture(3553, null)
                    }
                    S.depthBuffer && function (G) {
                        const K = n.get(G),
                            re = G.isWebGLCubeRenderTarget === !0;
                        if (G.depthTexture) {
                            if (re) throw new Error("target.depthTexture not supported in Cube render targets");
                            (function (X, $) {
                                if ($ && $.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
                                if (t.bindFramebuffer(36160, X), !$.depthTexture || !$.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                                n.get($.depthTexture).__webglTexture && $.depthTexture.image.width === $.width && $.depthTexture.image.height === $.height || ($.depthTexture.image.width = $.width, $.depthTexture.image.height = $.height, $.depthTexture.needsUpdate = !0), z($.depthTexture, 0);
                                const ge = n.get($.depthTexture).__webglTexture;
                                if ($.depthTexture.format === et) s.framebufferTexture2D(36160, 36096, 3553, ge, 0);
                                else {
                                    if ($.depthTexture.format !== dn) throw new Error("Unknown depthTexture format");
                                    s.framebufferTexture2D(36160, 33306, 3553, ge, 0)
                                }
                            })(K.__webglFramebuffer, G)
                        } else if (re) {
                            K.__webglDepthbuffer = [];
                            for (let X = 0; X < 6; X++) t.bindFramebuffer(36160, K.__webglFramebuffer[X]), K.__webglDepthbuffer[X] = s.createRenderbuffer(), ee(K.__webglDepthbuffer[X], G, !1)
                        } else t.bindFramebuffer(36160, K.__webglFramebuffer), K.__webglDepthbuffer = s.createRenderbuffer(), ee(K.__webglDepthbuffer, G, !1);
                        t.bindFramebuffer(36160, null)
                    }(S)
                }, this.updateRenderTargetMipmap = function (S) {
                    const T = S.texture;
                    if (w(T, v(S) || a)) {
                        const j = S.isWebGLCubeRenderTarget ? 34067 : 3553,
                            U = n.get(T).__webglTexture;
                        t.bindTexture(j, U), M(j, T, S.width, S.height), t.bindTexture(j, null)
                    }
                }, this.updateMultisampleRenderTarget = function (S) {
                    if (S.isWebGLMultisampleRenderTarget)
                        if (a) {
                            const T = S.width,
                                j = S.height;
                            let U = 16384;
                            S.depthBuffer && (U |= 256), S.stencilBuffer && (U |= 1024);
                            const V = n.get(S);
                            t.bindFramebuffer(36008, V.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, V.__webglFramebuffer), s.blitFramebuffer(0, 0, T, j, 0, 0, T, j, U, 9728), t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, V.__webglMultisampledFramebuffer)
                        } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
                }, this.safeSetTexture2D = function (S, T) {
                    S && S.isWebGLRenderTarget && (Z === !1 && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), Z = !0), S = S.texture), z(S, T)
                }, this.safeSetTextureCube = function (S, T) {
                    S && S.isWebGLCubeRenderTarget && (te === !1 && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), te = !0), S = S.texture), R(S, T)
                }
            }

            function xl(s, e, t) {
                const n = t.isWebGL2;
                return {
                    convert: function (i) {
                        let r;
                        if (i === 1009) return 5121;
                        if (i === 1017) return 32819;
                        if (i === 1018) return 32820;
                        if (i === 1019) return 33635;
                        if (i === 1010) return 5120;
                        if (i === 1011) return 5122;
                        if (i === je) return 5123;
                        if (i === 1013) return 5124;
                        if (i === Ce) return 5125;
                        if (i === _e) return 5126;
                        if (i === be) return n ? 5131 : (r = e.get("OES_texture_half_float"), r !== null ? r.HALF_FLOAT_OES : null);
                        if (i === 1021) return 6406;
                        if (i === We) return 6407;
                        if (i === Re) return 6408;
                        if (i === 1024) return 6409;
                        if (i === 1025) return 6410;
                        if (i === et) return 6402;
                        if (i === dn) return 34041;
                        if (i === 1028) return 6403;
                        if (i === 1029) return 36244;
                        if (i === 1030) return 33319;
                        if (i === 1031) return 33320;
                        if (i === 1032) return 36248;
                        if (i === 1033) return 36249;
                        if (i === 33776 || i === 33777 || i === 33778 || i === 33779) {
                            if (r = e.get("WEBGL_compressed_texture_s3tc"), r === null) return null;
                            if (i === 33776) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
                            if (i === 33777) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                            if (i === 33778) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                            if (i === 33779) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT
                        }
                        if (i === 35840 || i === 35841 || i === 35842 || i === 35843) {
                            if (r = e.get("WEBGL_compressed_texture_pvrtc"), r === null) return null;
                            if (i === 35840) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                            if (i === 35841) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                            if (i === 35842) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                            if (i === 35843) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                        }
                        if (i === 36196) return r = e.get("WEBGL_compressed_texture_etc1"), r !== null ? r.COMPRESSED_RGB_ETC1_WEBGL : null;
                        if ((i === 37492 || i === 37496) && (r = e.get("WEBGL_compressed_texture_etc"), r !== null)) {
                            if (i === 37492) return r.COMPRESSED_RGB8_ETC2;
                            if (i === 37496) return r.COMPRESSED_RGBA8_ETC2_EAC
                        }
                        return i === 37808 || i === 37809 || i === 37810 || i === 37811 || i === 37812 || i === 37813 || i === 37814 || i === 37815 || i === 37816 || i === 37817 || i === 37818 || i === 37819 || i === 37820 || i === 37821 || i === 37840 || i === 37841 || i === 37842 || i === 37843 || i === 37844 || i === 37845 || i === 37846 || i === 37847 || i === 37848 || i === 37849 || i === 37850 || i === 37851 || i === 37852 || i === 37853 ? (r = e.get("WEBGL_compressed_texture_astc"), r !== null ? i : null) : i === 36492 ? (r = e.get("EXT_texture_compression_bptc"), r !== null ? i : null) : i === Ve ? n ? 34042 : (r = e.get("WEBGL_depth_texture"), r !== null ? r.UNSIGNED_INT_24_8_WEBGL : null) : void 0
                    }
                }
            }
            fs.prototype.isMeshDistanceMaterial = !0;
            class vs extends mt {
                constructor(e = []) {
                    super(), this.cameras = e
                }
            }
            vs.prototype.isArrayCamera = !0;
            class ft extends Ie {
                constructor() {
                    super(), this.type = "Group"
                }
            }
            ft.prototype.isGroup = !0;
            const yl = {
                type: "move"
            };
            class nr {
                constructor() {
                    this._targetRay = null, this._grip = null, this._hand = null
                }
                getHandSpace() {
                    return this._hand === null && (this._hand = new ft, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
                        pinching: !1
                    }), this._hand
                }
                getTargetRaySpace() {
                    return this._targetRay === null && (this._targetRay = new ft, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new y, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new y), this._targetRay
                }
                getGripSpace() {
                    return this._grip === null && (this._grip = new ft, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new y, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new y), this._grip
                }
                dispatchEvent(e) {
                    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this
                }
                disconnect(e) {
                    return this.dispatchEvent({
                        type: "disconnected",
                        data: e
                    }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this
                }
                update(e, t, n) {
                    let i = null,
                        r = null,
                        o = null;
                    const a = this._targetRay,
                        l = this._grip,
                        c = this._hand;
                    if (e && t.session.visibilityState !== "visible-blurred")
                        if (a !== null && (i = t.getPose(e.targetRaySpace, n), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(yl))), c && e.hand) {
                            o = !0;
                            for (const f of e.hand.values()) {
                                const m = t.getJointPose(f, n);
                                if (c.joints[f.jointName] === void 0) {
                                    const w = new ft;
                                    w.matrixAutoUpdate = !1, w.visible = !1, c.joints[f.jointName] = w, c.add(w)
                                }
                                const v = c.joints[f.jointName];
                                m !== null && (v.matrix.fromArray(m.transform.matrix), v.matrix.decompose(v.position, v.rotation, v.scale), v.jointRadius = m.radius), v.visible = m !== null
                            }
                            const h = c.joints["index-finger-tip"],
                                u = c.joints["thumb-tip"],
                                d = h.position.distanceTo(u.position),
                                p = .02,
                                g = .005;
                            c.inputState.pinching && d > p + g ? (c.inputState.pinching = !1, this.dispatchEvent({
                                type: "pinchend",
                                handedness: e.handedness,
                                target: this
                            })) : !c.inputState.pinching && d <= p - g && (c.inputState.pinching = !0, this.dispatchEvent({
                                type: "pinchstart",
                                handedness: e.handedness,
                                target: this
                            }))
                        } else l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), r.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1, r.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1));
                    return a !== null && (a.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = o !== null), this
                }
            }
            class _l extends we {
                constructor(e, t) {
                    super();
                    const n = this,
                        i = e.state;
                    let r = null,
                        o = 1,
                        a = null,
                        l = "local-floor",
                        c = null;
                    const h = [],
                        u = new Map,
                        d = new mt;
                    d.layers.enable(1), d.viewport = new qe;
                    const p = new mt;
                    p.layers.enable(2), p.viewport = new qe;
                    const g = [d, p],
                        f = new vs;
                    f.layers.enable(1), f.layers.enable(2);
                    let m = null,
                        v = null;

                    function w(R) {
                        const I = u.get(R.inputSource);
                        I && I.dispatchEvent({
                            type: R.type,
                            data: R.inputSource
                        })
                    }

                    function M() {
                        u.forEach(function (R, I) {
                            R.disconnect(I)
                        }), u.clear(), m = null, v = null, i.bindXRFramebuffer(null), e.setRenderTarget(e.getRenderTarget()), z.stop(), n.isPresenting = !1, n.dispatchEvent({
                            type: "sessionend"
                        })
                    }

                    function _(R) {
                        const I = r.inputSources;
                        for (let N = 0; N < h.length; N++) u.set(I[N], h[N]);
                        for (let N = 0; N < R.removed.length; N++) {
                            const D = R.removed[N],
                                O = u.get(D);
                            O && (O.dispatchEvent({
                                type: "disconnected",
                                data: D
                            }), u.delete(D))
                        }
                        for (let N = 0; N < R.added.length; N++) {
                            const D = R.added[N],
                                O = u.get(D);
                            O && O.dispatchEvent({
                                type: "connected",
                                data: D
                            })
                        }
                    }
                    this.enabled = !1, this.isPresenting = !1, this.getController = function (R) {
                        let I = h[R];
                        return I === void 0 && (I = new nr, h[R] = I), I.getTargetRaySpace()
                    }, this.getControllerGrip = function (R) {
                        let I = h[R];
                        return I === void 0 && (I = new nr, h[R] = I), I.getGripSpace()
                    }, this.getHand = function (R) {
                        let I = h[R];
                        return I === void 0 && (I = new nr, h[R] = I), I.getHandSpace()
                    }, this.setFramebufferScaleFactor = function (R) {
                        o = R, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
                    }, this.setReferenceSpaceType = function (R) {
                        l = R, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
                    }, this.getReferenceSpace = function () {
                        return a
                    }, this.getSession = function () {
                        return r
                    }, this.setSession = async function (R) {
                        if (r = R, r !== null) {
                            r.addEventListener("select", w), r.addEventListener("selectstart", w), r.addEventListener("selectend", w), r.addEventListener("squeeze", w), r.addEventListener("squeezestart", w), r.addEventListener("squeezeend", w), r.addEventListener("end", M), r.addEventListener("inputsourceschange", _);
                            const I = t.getContextAttributes();
                            I.xrCompatible !== !0 && await t.makeXRCompatible();
                            const N = {
                                antialias: I.antialias,
                                alpha: I.alpha,
                                depth: I.depth,
                                stencil: I.stencil,
                                framebufferScaleFactor: o
                            },
                                D = new XRWebGLLayer(r, t, N);
                            r.updateRenderState({
                                baseLayer: D
                            }), a = await r.requestReferenceSpace(l), z.setContext(r), z.start(), n.isPresenting = !0, n.dispatchEvent({
                                type: "sessionstart"
                            })
                        }
                    };
                    const A = new y,
                        L = new y;

                    function b(R, I) {
                        I === null ? R.matrixWorld.copy(R.matrix) : R.matrixWorld.multiplyMatrices(I.matrixWorld, R.matrix), R.matrixWorldInverse.copy(R.matrixWorld).invert()
                    }
                    this.getCamera = function (R) {
                        f.near = p.near = d.near = R.near, f.far = p.far = d.far = R.far, m === f.near && v === f.far || (r.updateRenderState({
                            depthNear: f.near,
                            depthFar: f.far
                        }), m = f.near, v = f.far);
                        const I = R.parent,
                            N = f.cameras;
                        b(f, I);
                        for (let O = 0; O < N.length; O++) b(N[O], I);
                        R.matrixWorld.copy(f.matrixWorld), R.matrix.copy(f.matrix), R.matrix.decompose(R.position, R.quaternion, R.scale);
                        const D = R.children;
                        for (let O = 0, B = D.length; O < B; O++) D[O].updateMatrixWorld(!0);
                        return N.length === 2 ? function (O, B, q) {
                            A.setFromMatrixPosition(B.matrixWorld), L.setFromMatrixPosition(q.matrixWorld);
                            const ee = A.distanceTo(L),
                                k = B.projectionMatrix.elements,
                                Z = q.projectionMatrix.elements,
                                te = k[14] / (k[10] - 1),
                                S = k[14] / (k[10] + 1),
                                T = (k[9] + 1) / k[5],
                                j = (k[9] - 1) / k[5],
                                U = (k[8] - 1) / k[0],
                                V = (Z[8] + 1) / Z[0],
                                J = te * U,
                                oe = te * V,
                                E = ee / (-U + V),
                                G = E * -U;
                            B.matrixWorld.decompose(O.position, O.quaternion, O.scale), O.translateX(G), O.translateZ(E), O.matrixWorld.compose(O.position, O.quaternion, O.scale), O.matrixWorldInverse.copy(O.matrixWorld).invert();
                            const K = te + E,
                                re = S + E,
                                X = J - G,
                                $ = oe + (ee - G),
                                ge = T * S / re * K,
                                Ee = j * S / re * K;
                            O.projectionMatrix.makePerspective(X, $, ge, Ee, K, re)
                        }(f, d, p) : f.projectionMatrix.copy(d.projectionMatrix), f
                    };
                    let C = null;
                    const z = new kr;
                    z.setAnimationLoop(function (R, I) {
                        if (c = I.getViewerPose(a), c !== null) {
                            const D = c.views,
                                O = r.renderState.baseLayer;
                            i.bindXRFramebuffer(O.framebuffer);
                            let B = !1;
                            D.length !== f.cameras.length && (f.cameras.length = 0, B = !0);
                            for (let q = 0; q < D.length; q++) {
                                const ee = D[q],
                                    k = O.getViewport(ee),
                                    Z = g[q];
                                Z.matrix.fromArray(ee.transform.matrix), Z.projectionMatrix.fromArray(ee.projectionMatrix), Z.viewport.set(k.x, k.y, k.width, k.height), q === 0 && f.matrix.copy(Z.matrix), B === !0 && f.cameras.push(Z)
                            }
                        }
                        const N = r.inputSources;
                        for (let D = 0; D < h.length; D++) {
                            const O = h[D],
                                B = N[D];
                            O.update(B, I, a)
                        }
                        C && C(R, I)
                    }), this.setAnimationLoop = function (R) {
                        C = R
                    }, this.dispose = function () { }
                }
            }

            function wl(s) {
                function e(n, i) {
                    n.opacity.value = i.opacity, i.color && n.diffuse.value.copy(i.color), i.emissive && n.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity), i.map && (n.map.value = i.map), i.alphaMap && (n.alphaMap.value = i.alphaMap), i.specularMap && (n.specularMap.value = i.specularMap);
                    const r = s.get(i).envMap;
                    if (r) {
                        n.envMap.value = r, n.flipEnvMap.value = r.isCubeTexture && r._needsFlipEnvMap ? -1 : 1, n.reflectivity.value = i.reflectivity, n.refractionRatio.value = i.refractionRatio;
                        const l = s.get(r).__maxMipLevel;
                        l !== void 0 && (n.maxMipLevel.value = l)
                    }
                    let o, a;
                    i.lightMap && (n.lightMap.value = i.lightMap, n.lightMapIntensity.value = i.lightMapIntensity), i.aoMap && (n.aoMap.value = i.aoMap, n.aoMapIntensity.value = i.aoMapIntensity), i.map ? o = i.map : i.specularMap ? o = i.specularMap : i.displacementMap ? o = i.displacementMap : i.normalMap ? o = i.normalMap : i.bumpMap ? o = i.bumpMap : i.roughnessMap ? o = i.roughnessMap : i.metalnessMap ? o = i.metalnessMap : i.alphaMap ? o = i.alphaMap : i.emissiveMap ? o = i.emissiveMap : i.clearcoatMap ? o = i.clearcoatMap : i.clearcoatNormalMap ? o = i.clearcoatNormalMap : i.clearcoatRoughnessMap && (o = i.clearcoatRoughnessMap), o !== void 0 && (o.isWebGLRenderTarget && (o = o.texture), o.matrixAutoUpdate === !0 && o.updateMatrix(), n.uvTransform.value.copy(o.matrix)), i.aoMap ? a = i.aoMap : i.lightMap && (a = i.lightMap), a !== void 0 && (a.isWebGLRenderTarget && (a = a.texture), a.matrixAutoUpdate === !0 && a.updateMatrix(), n.uv2Transform.value.copy(a.matrix))
                }

                function t(n, i) {
                    n.roughness.value = i.roughness, n.metalness.value = i.metalness, i.roughnessMap && (n.roughnessMap.value = i.roughnessMap), i.metalnessMap && (n.metalnessMap.value = i.metalnessMap), i.emissiveMap && (n.emissiveMap.value = i.emissiveMap), i.bumpMap && (n.bumpMap.value = i.bumpMap, n.bumpScale.value = i.bumpScale, i.side === 1 && (n.bumpScale.value *= -1)), i.normalMap && (n.normalMap.value = i.normalMap, n.normalScale.value.copy(i.normalScale), i.side === 1 && n.normalScale.value.negate()), i.displacementMap && (n.displacementMap.value = i.displacementMap, n.displacementScale.value = i.displacementScale, n.displacementBias.value = i.displacementBias), s.get(i).envMap && (n.envMapIntensity.value = i.envMapIntensity)
                }
                return {
                    refreshFogUniforms: function (n, i) {
                        n.fogColor.value.copy(i.color), i.isFog ? (n.fogNear.value = i.near, n.fogFar.value = i.far) : i.isFogExp2 && (n.fogDensity.value = i.density)
                    },
                    refreshMaterialUniforms: function (n, i, r, o) {
                        i.isMeshBasicMaterial ? e(n, i) : i.isMeshLambertMaterial ? (e(n, i), function (a, l) {
                            l.emissiveMap && (a.emissiveMap.value = l.emissiveMap)
                        }(n, i)) : i.isMeshToonMaterial ? (e(n, i), function (a, l) {
                            l.gradientMap && (a.gradientMap.value = l.gradientMap), l.emissiveMap && (a.emissiveMap.value = l.emissiveMap), l.bumpMap && (a.bumpMap.value = l.bumpMap, a.bumpScale.value = l.bumpScale, l.side === 1 && (a.bumpScale.value *= -1)), l.normalMap && (a.normalMap.value = l.normalMap, a.normalScale.value.copy(l.normalScale), l.side === 1 && a.normalScale.value.negate()), l.displacementMap && (a.displacementMap.value = l.displacementMap, a.displacementScale.value = l.displacementScale, a.displacementBias.value = l.displacementBias)
                        }(n, i)) : i.isMeshPhongMaterial ? (e(n, i), function (a, l) {
                            a.specular.value.copy(l.specular), a.shininess.value = Math.max(l.shininess, 1e-4), l.emissiveMap && (a.emissiveMap.value = l.emissiveMap), l.bumpMap && (a.bumpMap.value = l.bumpMap, a.bumpScale.value = l.bumpScale, l.side === 1 && (a.bumpScale.value *= -1)), l.normalMap && (a.normalMap.value = l.normalMap, a.normalScale.value.copy(l.normalScale), l.side === 1 && a.normalScale.value.negate()), l.displacementMap && (a.displacementMap.value = l.displacementMap, a.displacementScale.value = l.displacementScale, a.displacementBias.value = l.displacementBias)
                        }(n, i)) : i.isMeshStandardMaterial ? (e(n, i), i.isMeshPhysicalMaterial ? function (a, l) {
                            t(a, l), a.reflectivity.value = l.reflectivity, a.clearcoat.value = l.clearcoat, a.clearcoatRoughness.value = l.clearcoatRoughness, l.sheen && a.sheen.value.copy(l.sheen), l.clearcoatMap && (a.clearcoatMap.value = l.clearcoatMap), l.clearcoatRoughnessMap && (a.clearcoatRoughnessMap.value = l.clearcoatRoughnessMap), l.clearcoatNormalMap && (a.clearcoatNormalScale.value.copy(l.clearcoatNormalScale), a.clearcoatNormalMap.value = l.clearcoatNormalMap, l.side === 1 && a.clearcoatNormalScale.value.negate()), a.transmission.value = l.transmission, l.transmissionMap && (a.transmissionMap.value = l.transmissionMap)
                        }(n, i) : t(n, i)) : i.isMeshMatcapMaterial ? (e(n, i), function (a, l) {
                            l.matcap && (a.matcap.value = l.matcap), l.bumpMap && (a.bumpMap.value = l.bumpMap, a.bumpScale.value = l.bumpScale, l.side === 1 && (a.bumpScale.value *= -1)), l.normalMap && (a.normalMap.value = l.normalMap, a.normalScale.value.copy(l.normalScale), l.side === 1 && a.normalScale.value.negate()), l.displacementMap && (a.displacementMap.value = l.displacementMap, a.displacementScale.value = l.displacementScale, a.displacementBias.value = l.displacementBias)
                        }(n, i)) : i.isMeshDepthMaterial ? (e(n, i), function (a, l) {
                            l.displacementMap && (a.displacementMap.value = l.displacementMap, a.displacementScale.value = l.displacementScale, a.displacementBias.value = l.displacementBias)
                        }(n, i)) : i.isMeshDistanceMaterial ? (e(n, i), function (a, l) {
                            l.displacementMap && (a.displacementMap.value = l.displacementMap, a.displacementScale.value = l.displacementScale, a.displacementBias.value = l.displacementBias), a.referencePosition.value.copy(l.referencePosition), a.nearDistance.value = l.nearDistance, a.farDistance.value = l.farDistance
                        }(n, i)) : i.isMeshNormalMaterial ? (e(n, i), function (a, l) {
                            l.bumpMap && (a.bumpMap.value = l.bumpMap, a.bumpScale.value = l.bumpScale, l.side === 1 && (a.bumpScale.value *= -1)), l.normalMap && (a.normalMap.value = l.normalMap, a.normalScale.value.copy(l.normalScale), l.side === 1 && a.normalScale.value.negate()), l.displacementMap && (a.displacementMap.value = l.displacementMap, a.displacementScale.value = l.displacementScale, a.displacementBias.value = l.displacementBias)
                        }(n, i)) : i.isLineBasicMaterial ? (function (a, l) {
                            a.diffuse.value.copy(l.color), a.opacity.value = l.opacity
                        }(n, i), i.isLineDashedMaterial && function (a, l) {
                            a.dashSize.value = l.dashSize, a.totalSize.value = l.dashSize + l.gapSize, a.scale.value = l.scale
                        }(n, i)) : i.isPointsMaterial ? function (a, l, c, h) {
                            let u;
                            a.diffuse.value.copy(l.color), a.opacity.value = l.opacity, a.size.value = l.size * c, a.scale.value = .5 * h, l.map && (a.map.value = l.map), l.alphaMap && (a.alphaMap.value = l.alphaMap), l.map ? u = l.map : l.alphaMap && (u = l.alphaMap), u !== void 0 && (u.matrixAutoUpdate === !0 && u.updateMatrix(), a.uvTransform.value.copy(u.matrix))
                        }(n, i, r, o) : i.isSpriteMaterial ? function (a, l) {
                            let c;
                            a.diffuse.value.copy(l.color), a.opacity.value = l.opacity, a.rotation.value = l.rotation, l.map && (a.map.value = l.map), l.alphaMap && (a.alphaMap.value = l.alphaMap), l.map ? c = l.map : l.alphaMap && (c = l.alphaMap), c !== void 0 && (c.matrixAutoUpdate === !0 && c.updateMatrix(), a.uvTransform.value.copy(c.matrix))
                        }(n, i) : i.isShadowMaterial ? (n.color.value.copy(i.color), n.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1)
                    }
                }
            }

            function De(s) {
                const e = (s = s || {}).canvas !== void 0 ? s.canvas : function () {
                    const x = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                    return x.style.display = "block", x
                }(),
                    t = s.context !== void 0 ? s.context : null,
                    n = s.alpha !== void 0 && s.alpha,
                    i = s.depth === void 0 || s.depth,
                    r = s.stencil === void 0 || s.stencil,
                    o = s.antialias !== void 0 && s.antialias,
                    a = s.premultipliedAlpha === void 0 || s.premultipliedAlpha,
                    l = s.preserveDrawingBuffer !== void 0 && s.preserveDrawingBuffer,
                    c = s.powerPreference !== void 0 ? s.powerPreference : "default",
                    h = s.failIfMajorPerformanceCaveat !== void 0 && s.failIfMajorPerformanceCaveat;
                let u = null,
                    d = null;
                const p = [],
                    g = [];
                this.domElement = e, this.debug = {
                    checkShaderErrors: !0
                }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = un, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1;
                const f = this;
                let m = !1,
                    v = 0,
                    w = 0,
                    M = null,
                    _ = -1,
                    A = null;
                const L = new qe,
                    b = new qe;
                let C = null,
                    z = e.width,
                    R = e.height,
                    I = 1,
                    N = null,
                    D = null;
                const O = new qe(0, 0, z, R),
                    B = new qe(0, 0, z, R);
                let q = !1;
                const ee = new fi;
                let k = !1,
                    Z = !1;
                const te = new ae,
                    S = new y,
                    T = {
                        background: null,
                        fog: null,
                        environment: null,
                        overrideMaterial: null,
                        isScene: !0
                    };

                function j() {
                    return M === null ? I : 1
                }
                let U, V, J, oe, E, G, K, re, X, $, ge, Ee, ye, pe, Te, Ye, Jt, ga, va, xa, At, ct, W = t;

                function ya(x, H) {
                    for (let P = 0; P < x.length; P++) {
                        const F = x[P],
                            Y = e.getContext(F, H);
                        if (Y !== null) return Y
                    }
                    return null
                }
                try {
                    const x = {
                        alpha: n,
                        depth: i,
                        stencil: r,
                        antialias: o,
                        premultipliedAlpha: a,
                        preserveDrawingBuffer: l,
                        powerPreference: c,
                        failIfMajorPerformanceCaveat: h
                    };
                    if (e.addEventListener("webglcontextlost", wa, !1), e.addEventListener("webglcontextrestored", ba, !1), W === null) {
                        const H = ["webgl2", "webgl", "experimental-webgl"];
                        if (f.isWebGL1Renderer === !0 && H.shift(), W = ya(H, x), W === null) throw ya(H) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
                    }
                    W.getShaderPrecisionFormat === void 0 && (W.getShaderPrecisionFormat = function () {
                        return {
                            rangeMin: 1,
                            rangeMax: 1,
                            precision: 1
                        }
                    })
                } catch (x) {
                    throw console.error("THREE.WebGLRenderer: " + x.message), x
                }

                function _a() {
                    U = new no(W), V = new Ka(W, U, s), U.init(V), At = new xl(W, U, V), J = new gl(W, U, V), oe = new so(W), E = new ol, G = new vl(W, U, J, E, V, At, oe), K = new to(f), re = new Ya(W, V), ct = new Qa(W, U, re, V), X = new io(W, re, oe, ct), $ = new co(W, X, re, oe), ga = new lo(W), Te = new eo(E), ge = new al(f, K, U, V, ct, Te), Ee = new wl(E), ye = new hl(E), pe = new fl(U, V), Jt = new Ja(f, K, J, $, a), Ye = new gs(f, $, V), va = new $a(W, U, oe, V), xa = new ro(W, U, oe, V), oe.programs = ge.programs, f.capabilities = V, f.extensions = U, f.properties = E, f.renderLists = ye, f.shadowMap = Ye, f.state = J, f.info = oe
                }
                _a();
                const Ct = new _l(f, W);

                function wa(x) {
                    x.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), m = !0
                }

                function ba() {
                    console.log("THREE.WebGLRenderer: Context Restored."), m = !1;
                    const x = oe.autoReset,
                        H = Ye.enabled,
                        P = Ye.autoUpdate,
                        F = Ye.needsUpdate,
                        Y = Ye.type;
                    _a(), oe.autoReset = x, Ye.enabled = H, Ye.autoUpdate = P, Ye.needsUpdate = F, Ye.type = Y
                }

                function Ma(x) {
                    const H = x.target;
                    H.removeEventListener("dispose", Ma),
                        function (P) {
                            (function (F) {
                                const Y = E.get(F).programs;
                                Y !== void 0 && Y.forEach(function (me) {
                                    ge.releaseProgram(me)
                                })
                            })(P), E.remove(P)
                        }(H)
                }
                this.xr = Ct, this.getContext = function () {
                    return W
                }, this.getContextAttributes = function () {
                    return W.getContextAttributes()
                }, this.forceContextLoss = function () {
                    const x = U.get("WEBGL_lose_context");
                    x && x.loseContext()
                }, this.forceContextRestore = function () {
                    const x = U.get("WEBGL_lose_context");
                    x && x.restoreContext()
                }, this.getPixelRatio = function () {
                    return I
                }, this.setPixelRatio = function (x) {
                    x !== void 0 && (I = x, this.setSize(z, R, !1))
                }, this.getSize = function (x) {
                    return x === void 0 && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), x = new ne), x.set(z, R)
                }, this.setSize = function (x, H, P) {
                    Ct.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (z = x, R = H, e.width = Math.floor(x * I), e.height = Math.floor(H * I), P !== !1 && (e.style.width = x + "px", e.style.height = H + "px"), this.setViewport(0, 0, x, H))
                }, this.getDrawingBufferSize = function (x) {
                    return x === void 0 && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), x = new ne), x.set(z * I, R * I).floor()
                }, this.setDrawingBufferSize = function (x, H, P) {
                    z = x, R = H, I = P, e.width = Math.floor(x * P), e.height = Math.floor(H * P), this.setViewport(0, 0, x, H)
                }, this.getCurrentViewport = function (x) {
                    return x === void 0 && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), x = new qe), x.copy(L)
                }, this.getViewport = function (x) {
                    return x.copy(O)
                }, this.setViewport = function (x, H, P, F) {
                    x.isVector4 ? O.set(x.x, x.y, x.z, x.w) : O.set(x, H, P, F), J.viewport(L.copy(O).multiplyScalar(I).floor())
                }, this.getScissor = function (x) {
                    return x.copy(B)
                }, this.setScissor = function (x, H, P, F) {
                    x.isVector4 ? B.set(x.x, x.y, x.z, x.w) : B.set(x, H, P, F), J.scissor(b.copy(B).multiplyScalar(I).floor())
                }, this.getScissorTest = function () {
                    return q
                }, this.setScissorTest = function (x) {
                    J.setScissorTest(q = x)
                }, this.setOpaqueSort = function (x) {
                    N = x
                }, this.setTransparentSort = function (x) {
                    D = x
                }, this.getClearColor = function (x) {
                    return x === void 0 && (console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"), x = new fe), x.copy(Jt.getClearColor())
                }, this.setClearColor = function () {
                    Jt.setClearColor.apply(Jt, arguments)
                }, this.getClearAlpha = function () {
                    return Jt.getClearAlpha()
                }, this.setClearAlpha = function () {
                    Jt.setClearAlpha.apply(Jt, arguments)
                }, this.clear = function (x, H, P) {
                    let F = 0;
                    (x === void 0 || x) && (F |= 16384), (H === void 0 || H) && (F |= 256), (P === void 0 || P) && (F |= 1024), W.clear(F)
                }, this.clearColor = function () {
                    this.clear(!0, !1, !1)
                }, this.clearDepth = function () {
                    this.clear(!1, !0, !1)
                }, this.clearStencil = function () {
                    this.clear(!1, !1, !0)
                }, this.dispose = function () {
                    e.removeEventListener("webglcontextlost", wa, !1), e.removeEventListener("webglcontextrestored", ba, !1), ye.dispose(), pe.dispose(), E.dispose(), K.dispose(), $.dispose(), ct.dispose(), Ct.dispose(), Ct.removeEventListener("sessionstart", Sa), Ct.removeEventListener("sessionend", Ea), on.stop()
                }, this.renderBufferImmediate = function (x, H) {
                    ct.initAttributes();
                    const P = E.get(x);
                    x.hasPositions && !P.position && (P.position = W.createBuffer()), x.hasNormals && !P.normal && (P.normal = W.createBuffer()), x.hasUvs && !P.uv && (P.uv = W.createBuffer()), x.hasColors && !P.color && (P.color = W.createBuffer());
                    const F = H.getAttributes();
                    x.hasPositions && (W.bindBuffer(34962, P.position), W.bufferData(34962, x.positionArray, 35048), ct.enableAttribute(F.position), W.vertexAttribPointer(F.position, 3, 5126, !1, 0, 0)), x.hasNormals && (W.bindBuffer(34962, P.normal), W.bufferData(34962, x.normalArray, 35048), ct.enableAttribute(F.normal), W.vertexAttribPointer(F.normal, 3, 5126, !1, 0, 0)), x.hasUvs && (W.bindBuffer(34962, P.uv), W.bufferData(34962, x.uvArray, 35048), ct.enableAttribute(F.uv), W.vertexAttribPointer(F.uv, 2, 5126, !1, 0, 0)), x.hasColors && (W.bindBuffer(34962, P.color), W.bufferData(34962, x.colorArray, 35048), ct.enableAttribute(F.color), W.vertexAttribPointer(F.color, 3, 5126, !1, 0, 0)), ct.disableUnusedAttributes(), W.drawArrays(4, 0, x.count), x.count = 0
                }, this.renderBufferDirect = function (x, H, P, F, Y, me) {
                    H === null && (H = T);
                    const he = Y.isMesh && Y.matrixWorld.determinant() < 0,
                        xe = Ra(x, H, F, Y);
                    J.setMaterial(F, he);
                    let Le = P.index;
                    const de = P.attributes.position;
                    if (Le === null) {
                        if (de === void 0 || de.count === 0) return
                    } else if (Le.count === 0) return;
                    let Ae, ce = 1;
                    F.wireframe === !0 && (Le = X.getWireframeAttribute(P), ce = 2), (F.morphTargets || F.morphNormals) && ga.update(Y, P, F, xe), ct.setup(Y, F, xe, P, Le);
                    let Oe = va;
                    Le !== null && (Ae = re.get(Le), Oe = xa, Oe.setIndex(Ae));
                    const It = Le !== null ? Le.count : de.count,
                        He = P.drawRange.start * ce,
                        ln = P.drawRange.count * ce,
                        Ze = me !== null ? me.start * ce : 0,
                        cn = me !== null ? me.count * ce : 1 / 0,
                        ot = Math.max(He, Ze),
                        gt = Math.min(It, He + ln, Ze + cn) - 1,
                        ke = Math.max(0, gt - ot + 1);
                    if (ke !== 0) {
                        if (Y.isMesh) F.wireframe === !0 ? (J.setLineWidth(F.wireframeLinewidth * j()), Oe.setMode(1)) : Oe.setMode(4);
                        else if (Y.isLine) {
                            let hn = F.linewidth;
                            hn === void 0 && (hn = 1), J.setLineWidth(hn * j()), Y.isLineSegments ? Oe.setMode(1) : Y.isLineLoop ? Oe.setMode(2) : Oe.setMode(3)
                        } else Y.isPoints ? Oe.setMode(0) : Y.isSprite && Oe.setMode(4);
                        if (Y.isInstancedMesh) Oe.renderInstances(ot, ke, Y.count);
                        else if (P.isInstancedBufferGeometry) {
                            const hn = Math.min(P.instanceCount, P._maxInstanceCount);
                            Oe.renderInstances(ot, ke, hn)
                        } else Oe.render(ot, ke)
                    }
                }, this.compile = function (x, H) {
                    d = pe.get(x), d.init(), x.traverseVisible(function (P) {
                        P.isLight && P.layers.test(H.layers) && (d.pushLight(P), P.castShadow && d.pushShadow(P))
                    }), d.setupLights(), x.traverse(function (P) {
                        const F = P.material;
                        if (F)
                            if (Array.isArray(F))
                                for (let Y = 0; Y < F.length; Y++) Mr(F[Y], x, P);
                            else Mr(F, x, P)
                    })
                };
                let br = null;

                function Sa() {
                    on.stop()
                }

                function Ea() {
                    on.start()
                }
                const on = new kr;

                function Ta(x, H, P, F) {
                    if (x.visible === !1) return;
                    if (x.layers.test(H.layers)) {
                        if (x.isGroup) P = x.renderOrder;
                        else if (x.isLOD) x.autoUpdate === !0 && x.update(H);
                        else if (x.isLight) d.pushLight(x), x.castShadow && d.pushShadow(x);
                        else if (x.isSprite) {
                            if (!x.frustumCulled || ee.intersectsSprite(x)) {
                                F && S.setFromMatrixPosition(x.matrixWorld).applyMatrix4(te);
                                const me = $.update(x),
                                    he = x.material;
                                he.visible && u.push(x, me, he, P, S.z, null)
                            }
                        } else if (x.isImmediateRenderObject) F && S.setFromMatrixPosition(x.matrixWorld).applyMatrix4(te), u.push(x, null, x.material, P, S.z, null);
                        else if ((x.isMesh || x.isLine || x.isPoints) && (x.isSkinnedMesh && x.skeleton.frame !== oe.render.frame && (x.skeleton.update(), x.skeleton.frame = oe.render.frame), !x.frustumCulled || ee.intersectsObject(x))) {
                            F && S.setFromMatrixPosition(x.matrixWorld).applyMatrix4(te);
                            const me = $.update(x),
                                he = x.material;
                            if (Array.isArray(he)) {
                                const xe = me.groups;
                                for (let Le = 0, de = xe.length; Le < de; Le++) {
                                    const Ae = xe[Le],
                                        ce = he[Ae.materialIndex];
                                    ce && ce.visible && u.push(x, me, ce, P, S.z, Ae)
                                }
                            } else he.visible && u.push(x, me, he, P, S.z, null)
                        }
                    }
                    const Y = x.children;
                    for (let me = 0, he = Y.length; me < he; me++) Ta(Y[me], H, P, F)
                }

                function La(x, H, P) {
                    const F = H.isScene === !0 ? H.overrideMaterial : null;
                    for (let Y = 0, me = x.length; Y < me; Y++) {
                        const he = x[Y],
                            xe = he.object,
                            Le = he.geometry,
                            de = F === null ? he.material : F,
                            Ae = he.group;
                        if (P.isArrayCamera) {
                            const ce = P.cameras;
                            for (let Oe = 0, It = ce.length; Oe < It; Oe++) {
                                const He = ce[Oe];
                                xe.layers.test(He.layers) && (J.viewport(L.copy(He.viewport)), d.setupLightsView(He), Aa(xe, H, He, Le, de, Ae))
                            }
                        } else Aa(xe, H, P, Le, de, Ae)
                    }
                }

                function Aa(x, H, P, F, Y, me) {
                    if (x.onBeforeRender(f, H, P, F, Y, me), x.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), x.isImmediateRenderObject) {
                        const he = Ra(P, H, Y, x);
                        J.setMaterial(Y), ct.reset(),
                            function (xe, Le) {
                                xe.render(function (de) {
                                    f.renderBufferImmediate(de, Le)
                                })
                            }(x, he)
                    } else f.renderBufferDirect(P, H, F, Y, x, me);
                    x.onAfterRender(f, H, P, F, Y, me)
                }

                function Mr(x, H, P) {
                    H.isScene !== !0 && (H = T);
                    const F = E.get(x),
                        Y = d.state.lights,
                        me = d.state.shadowsArray,
                        he = Y.state.version,
                        xe = ge.getParameters(x, Y.state, me, H, P),
                        Le = ge.getProgramCacheKey(xe);
                    let de = F.programs;
                    F.environment = x.isMeshStandardMaterial ? H.environment : null, F.fog = H.fog, F.envMap = K.get(x.envMap || F.environment), de === void 0 && (x.addEventListener("dispose", Ma), de = new Map, F.programs = de);
                    let Ae = de.get(Le);
                    if (Ae !== void 0) {
                        if (F.currentProgram === Ae && F.lightsStateVersion === he) return Ca(x, xe), Ae
                    } else xe.uniforms = ge.getUniforms(x), x.onBuild(xe, f), x.onBeforeCompile(xe, f), Ae = ge.acquireProgram(xe, Le), de.set(Le, Ae), F.uniforms = xe.uniforms;
                    const ce = F.uniforms;
                    (x.isShaderMaterial || x.isRawShaderMaterial) && x.clipping !== !0 || (ce.clippingPlanes = Te.uniform), Ca(x, xe), F.needsLights = function (He) {
                        return He.isMeshLambertMaterial || He.isMeshToonMaterial || He.isMeshPhongMaterial || He.isMeshStandardMaterial || He.isShadowMaterial || He.isShaderMaterial && He.lights === !0
                    }(x), F.lightsStateVersion = he, F.needsLights && (ce.ambientLightColor.value = Y.state.ambient, ce.lightProbe.value = Y.state.probe, ce.directionalLights.value = Y.state.directional, ce.directionalLightShadows.value = Y.state.directionalShadow, ce.spotLights.value = Y.state.spot, ce.spotLightShadows.value = Y.state.spotShadow, ce.rectAreaLights.value = Y.state.rectArea, ce.ltc_1.value = Y.state.rectAreaLTC1, ce.ltc_2.value = Y.state.rectAreaLTC2, ce.pointLights.value = Y.state.point, ce.pointLightShadows.value = Y.state.pointShadow, ce.hemisphereLights.value = Y.state.hemi, ce.directionalShadowMap.value = Y.state.directionalShadowMap, ce.directionalShadowMatrix.value = Y.state.directionalShadowMatrix, ce.spotShadowMap.value = Y.state.spotShadowMap, ce.spotShadowMatrix.value = Y.state.spotShadowMatrix, ce.pointShadowMap.value = Y.state.pointShadowMap, ce.pointShadowMatrix.value = Y.state.pointShadowMatrix);
                    const Oe = Ae.getUniforms(),
                        It = Zt.seqWithValue(Oe.seq, ce);
                    return F.currentProgram = Ae, F.uniformsList = It, Ae
                }

                function Ca(x, H) {
                    const P = E.get(x);
                    P.outputEncoding = H.outputEncoding, P.instancing = H.instancing, P.numClippingPlanes = H.numClippingPlanes, P.numIntersection = H.numClipIntersection, P.vertexAlphas = H.vertexAlphas
                }

                function Ra(x, H, P, F) {
                    H.isScene !== !0 && (H = T), G.resetTextureUnits();
                    const Y = H.fog,
                        me = P.isMeshStandardMaterial ? H.environment : null,
                        he = M === null ? f.outputEncoding : M.texture.encoding,
                        xe = K.get(P.envMap || me),
                        Le = P.vertexColors === !0 && F.geometry && F.geometry.attributes.color && F.geometry.attributes.color.itemSize === 4,
                        de = E.get(P),
                        Ae = d.state.lights;
                    if (k === !0 && (Z === !0 || x !== A)) {
                        const ke = x === A && P.id === _;
                        Te.setState(P, x, ke)
                    }
                    let ce = !1;
                    P.version === de.__version ? de.needsLights && de.lightsStateVersion !== Ae.state.version || de.outputEncoding !== he || F.isInstancedMesh && de.instancing === !1 ? ce = !0 : F.isInstancedMesh || de.instancing !== !0 ? de.envMap !== xe || P.fog && de.fog !== Y ? ce = !0 : de.numClippingPlanes === void 0 || de.numClippingPlanes === Te.numPlanes && de.numIntersection === Te.numIntersection ? de.vertexAlphas !== Le && (ce = !0) : ce = !0 : ce = !0 : (ce = !0, de.__version = P.version);
                    let Oe = de.currentProgram;
                    ce === !0 && (Oe = Mr(P, H, F));
                    let It = !1,
                        He = !1,
                        ln = !1;
                    const Ze = Oe.getUniforms(),
                        cn = de.uniforms;
                    if (J.useProgram(Oe.program) && (It = !0, He = !0, ln = !0), P.id !== _ && (_ = P.id, He = !0), It || A !== x) {
                        if (Ze.setValue(W, "projectionMatrix", x.projectionMatrix), V.logarithmicDepthBuffer && Ze.setValue(W, "logDepthBufFC", 2 / (Math.log(x.far + 1) / Math.LN2)), A !== x && (A = x, He = !0, ln = !0), P.isShaderMaterial || P.isMeshPhongMaterial || P.isMeshToonMaterial || P.isMeshStandardMaterial || P.envMap) {
                            const ke = Ze.map.cameraPosition;
                            ke !== void 0 && ke.setValue(W, S.setFromMatrixPosition(x.matrixWorld))
                        } (P.isMeshPhongMaterial || P.isMeshToonMaterial || P.isMeshLambertMaterial || P.isMeshBasicMaterial || P.isMeshStandardMaterial || P.isShaderMaterial) && Ze.setValue(W, "isOrthographic", x.isOrthographicCamera === !0), (P.isMeshPhongMaterial || P.isMeshToonMaterial || P.isMeshLambertMaterial || P.isMeshBasicMaterial || P.isMeshStandardMaterial || P.isShaderMaterial || P.isShadowMaterial || P.skinning) && Ze.setValue(W, "viewMatrix", x.matrixWorldInverse)
                    }
                    if (P.skinning) {
                        Ze.setOptional(W, F, "bindMatrix"), Ze.setOptional(W, F, "bindMatrixInverse");
                        const ke = F.skeleton;
                        if (ke) {
                            const hn = ke.bones;
                            if (V.floatVertexTextures) {
                                if (ke.boneTexture === null) {
                                    let Gt = Math.sqrt(4 * hn.length);
                                    Gt = function (Jl) {
                                        return Math.pow(2, Math.ceil(Math.log(Jl) / Math.LN2))
                                    }(Gt), Gt = Math.max(Gt, 4);
                                    const Sr = new Float32Array(Gt * Gt * 4);
                                    Sr.set(ke.boneMatrices);
                                    const Zl = new Wr(Sr, Gt, Gt, Re, _e);
                                    ke.boneMatrices = Sr, ke.boneTexture = Zl, ke.boneTextureSize = Gt
                                }
                                Ze.setValue(W, "boneTexture", ke.boneTexture, G), Ze.setValue(W, "boneTextureSize", ke.boneTextureSize)
                            } else Ze.setOptional(W, ke, "boneMatrices")
                        }
                    }
                    var ot, gt;
                    return (He || de.receiveShadow !== F.receiveShadow) && (de.receiveShadow = F.receiveShadow, Ze.setValue(W, "receiveShadow", F.receiveShadow)), He && (Ze.setValue(W, "toneMappingExposure", f.toneMappingExposure), de.needsLights && (gt = ln, (ot = cn).ambientLightColor.needsUpdate = gt, ot.lightProbe.needsUpdate = gt, ot.directionalLights.needsUpdate = gt, ot.directionalLightShadows.needsUpdate = gt, ot.pointLights.needsUpdate = gt, ot.pointLightShadows.needsUpdate = gt, ot.spotLights.needsUpdate = gt, ot.spotLightShadows.needsUpdate = gt, ot.rectAreaLights.needsUpdate = gt, ot.hemisphereLights.needsUpdate = gt), Y && P.fog && Ee.refreshFogUniforms(cn, Y), Ee.refreshMaterialUniforms(cn, P, I, R), Zt.upload(W, de.uniformsList, cn, G)), P.isShaderMaterial && P.uniformsNeedUpdate === !0 && (Zt.upload(W, de.uniformsList, cn, G), P.uniformsNeedUpdate = !1), P.isSpriteMaterial && Ze.setValue(W, "center", F.center), Ze.setValue(W, "modelViewMatrix", F.modelViewMatrix), Ze.setValue(W, "normalMatrix", F.normalMatrix), Ze.setValue(W, "modelMatrix", F.matrixWorld), Oe
                }
                on.setAnimationLoop(function (x) {
                    br && br(x)
                }), typeof window != "undefined" && on.setContext(window), this.setAnimationLoop = function (x) {
                    br = x, Ct.setAnimationLoop(x), x === null ? on.stop() : on.start()
                }, Ct.addEventListener("sessionstart", Sa), Ct.addEventListener("sessionend", Ea), this.render = function (x, H) {
                    let P, F;
                    if (arguments[2] !== void 0 && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), P = arguments[2]), arguments[3] !== void 0 && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), F = arguments[3]), H !== void 0 && H.isCamera !== !0) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                    if (m === !0) return;
                    x.autoUpdate === !0 && x.updateMatrixWorld(), H.parent === null && H.updateMatrixWorld(), Ct.enabled === !0 && Ct.isPresenting === !0 && (H = Ct.getCamera(H)), x.isScene === !0 && x.onBeforeRender(f, x, H, P || M), d = pe.get(x, g.length), d.init(), g.push(d), te.multiplyMatrices(H.projectionMatrix, H.matrixWorldInverse), ee.setFromProjectionMatrix(te), Z = this.localClippingEnabled, k = Te.init(this.clippingPlanes, Z, H), u = ye.get(x, p.length), u.init(), p.push(u), Ta(x, H, 0, f.sortObjects), u.finish(), f.sortObjects === !0 && u.sort(N, D), k === !0 && Te.beginShadows();
                    const Y = d.state.shadowsArray;
                    Ye.render(Y, x, H), d.setupLights(), d.setupLightsView(H), k === !0 && Te.endShadows(), this.info.autoReset === !0 && this.info.reset(), P !== void 0 && this.setRenderTarget(P), Jt.render(u, x, H, F);
                    const me = u.opaque,
                        he = u.transparent;
                    me.length > 0 && La(me, x, H), he.length > 0 && La(he, x, H), M !== null && (G.updateRenderTargetMipmap(M), G.updateMultisampleRenderTarget(M)), x.isScene === !0 && x.onAfterRender(f, x, H), J.buffers.depth.setTest(!0), J.buffers.depth.setMask(!0), J.buffers.color.setMask(!0), J.setPolygonOffset(!1), ct.resetDefaultState(), _ = -1, A = null, g.pop(), d = g.length > 0 ? g[g.length - 1] : null, p.pop(), u = p.length > 0 ? p[p.length - 1] : null
                }, this.getActiveCubeFace = function () {
                    return v
                }, this.getActiveMipmapLevel = function () {
                    return w
                }, this.getRenderTarget = function () {
                    return M
                }, this.setRenderTarget = function (x, H = 0, P = 0) {
                    M = x, v = H, w = P, x && E.get(x).__webglFramebuffer === void 0 && G.setupRenderTarget(x);
                    let F = null,
                        Y = !1,
                        me = !1;
                    if (x) {
                        const he = x.texture;
                        (he.isDataTexture3D || he.isDataTexture2DArray) && (me = !0);
                        const xe = E.get(x).__webglFramebuffer;
                        x.isWebGLCubeRenderTarget ? (F = xe[H], Y = !0) : F = x.isWebGLMultisampleRenderTarget ? E.get(x).__webglMultisampledFramebuffer : xe, L.copy(x.viewport), b.copy(x.scissor), C = x.scissorTest
                    } else L.copy(O).multiplyScalar(I).floor(), b.copy(B).multiplyScalar(I).floor(), C = q;
                    if (J.bindFramebuffer(36160, F), J.viewport(L), J.scissor(b), J.setScissorTest(C), Y) {
                        const he = E.get(x.texture);
                        W.framebufferTexture2D(36160, 36064, 34069 + H, he.__webglTexture, P)
                    } else if (me) {
                        const he = E.get(x.texture),
                            xe = H || 0;
                        W.framebufferTextureLayer(36160, 36064, he.__webglTexture, P || 0, xe)
                    }
                }, this.readRenderTargetPixels = function (x, H, P, F, Y, me, he) {
                    if (!x || !x.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                    let xe = E.get(x).__webglFramebuffer;
                    if (x.isWebGLCubeRenderTarget && he !== void 0 && (xe = xe[he]), xe) {
                        J.bindFramebuffer(36160, xe);
                        try {
                            const Le = x.texture,
                                de = Le.format,
                                Ae = Le.type;
                            if (de !== Re && At.convert(de) !== W.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                            const ce = Ae === be && (U.has("EXT_color_buffer_half_float") || V.isWebGL2 && U.has("EXT_color_buffer_float"));
                            if (!(Ae === 1009 || At.convert(Ae) === W.getParameter(35738) || Ae === _e && (V.isWebGL2 || U.has("OES_texture_float") || U.has("WEBGL_color_buffer_float")) || ce)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                            W.checkFramebufferStatus(36160) === 36053 ? H >= 0 && H <= x.width - F && P >= 0 && P <= x.height - Y && W.readPixels(H, P, F, Y, At.convert(de), At.convert(Ae), me) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                        } finally {
                            const Le = M !== null ? E.get(M).__webglFramebuffer : null;
                            J.bindFramebuffer(36160, Le)
                        }
                    }
                }, this.copyFramebufferToTexture = function (x, H, P = 0) {
                    const F = Math.pow(2, -P),
                        Y = Math.floor(H.image.width * F),
                        me = Math.floor(H.image.height * F),
                        he = At.convert(H.format);
                    G.setTexture2D(H, 0), W.copyTexImage2D(3553, P, he, x.x, x.y, Y, me, 0), J.unbindTexture()
                }, this.copyTextureToTexture = function (x, H, P, F = 0) {
                    const Y = H.image.width,
                        me = H.image.height,
                        he = At.convert(P.format),
                        xe = At.convert(P.type);
                    G.setTexture2D(P, 0), W.pixelStorei(37440, P.flipY), W.pixelStorei(37441, P.premultiplyAlpha), W.pixelStorei(3317, P.unpackAlignment), H.isDataTexture ? W.texSubImage2D(3553, F, x.x, x.y, Y, me, he, xe, H.image.data) : H.isCompressedTexture ? W.compressedTexSubImage2D(3553, F, x.x, x.y, H.mipmaps[0].width, H.mipmaps[0].height, he, H.mipmaps[0].data) : W.texSubImage2D(3553, F, x.x, x.y, he, xe, H.image), F === 0 && P.generateMipmaps && W.generateMipmap(3553), J.unbindTexture()
                }, this.copyTextureToTexture3D = function (x, H, P, F, Y = 0) {
                    if (f.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
                    const {
                        width: me,
                        height: he,
                        data: xe
                    } = P.image, Le = At.convert(F.format), de = At.convert(F.type);
                    let Ae;
                    if (F.isDataTexture3D) G.setTexture3D(F, 0), Ae = 32879;
                    else {
                        if (!F.isDataTexture2DArray) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                        G.setTexture2DArray(F, 0), Ae = 35866
                    }
                    W.pixelStorei(37440, F.flipY), W.pixelStorei(37441, F.premultiplyAlpha), W.pixelStorei(3317, F.unpackAlignment);
                    const ce = W.getParameter(3314),
                        Oe = W.getParameter(32878),
                        It = W.getParameter(3316),
                        He = W.getParameter(3315),
                        ln = W.getParameter(32877);
                    W.pixelStorei(3314, me), W.pixelStorei(32878, he), W.pixelStorei(3316, x.min.x), W.pixelStorei(3315, x.min.y), W.pixelStorei(32877, x.min.z), W.texSubImage3D(Ae, Y, H.x, H.y, H.z, x.max.x - x.min.x + 1, x.max.y - x.min.y + 1, x.max.z - x.min.z + 1, Le, de, xe), W.pixelStorei(3314, ce), W.pixelStorei(32878, Oe), W.pixelStorei(3316, It), W.pixelStorei(3315, He), W.pixelStorei(32877, ln), Y === 0 && F.generateMipmaps && W.generateMipmap(Ae), J.unbindTexture()
                }, this.initTexture = function (x) {
                    G.setTexture2D(x, 0), J.unbindTexture()
                }, this.resetState = function () {
                    v = 0, w = 0, M = null, J.reset(), ct.reset()
                }, typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                    detail: this
                }))
            }
            class ir extends Ie {
                constructor() {
                    super(), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                        detail: this
                    }))
                }
                copy(e, t) {
                    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this
                }
                toJSON(e) {
                    const t = super.toJSON(e);
                    return this.background !== null && (t.object.background = this.background.toJSON(e)), this.environment !== null && (t.object.environment = this.environment.toJSON(e)), this.fog !== null && (t.object.fog = this.fog.toJSON()), t
                }
            }
            ir.prototype.isScene = !0, new ae, new ae;
            const xs = new ae,
                ys = new ae,
                gi = [],
                Gn = new Ke;
            class vi extends Ke {
                constructor(e, t, n) {
                    super(e, t), this.instanceMatrix = new Xe(new Float32Array(16 * n), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1
                }
                copy(e) {
                    return super.copy(e), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, this
                }
                getColorAt(e, t) {
                    t.fromArray(this.instanceColor.array, 3 * e)
                }
                getMatrixAt(e, t) {
                    t.fromArray(this.instanceMatrix.array, 16 * e)
                }
                raycast(e, t) {
                    const n = this.matrixWorld,
                        i = this.count;
                    if (Gn.geometry = this.geometry, Gn.material = this.material, Gn.material !== void 0)
                        for (let r = 0; r < i; r++) {
                            this.getMatrixAt(r, xs), ys.multiplyMatrices(n, xs), Gn.matrixWorld = ys, Gn.raycast(e, gi);
                            for (let o = 0, a = gi.length; o < a; o++) {
                                const l = gi[o];
                                l.instanceId = r, l.object = this, t.push(l)
                            }
                            gi.length = 0
                        }
                }
                setColorAt(e, t) {
                    this.instanceColor === null && (this.instanceColor = new Xe(new Float32Array(3 * this.count), 3)), t.toArray(this.instanceColor.array, 3 * e)
                }
                setMatrixAt(e, t) {
                    t.toArray(this.instanceMatrix.array, 16 * e)
                }
                updateMorphTargets() { }
                dispose() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
            }
            vi.prototype.isInstancedMesh = !0;
            class Vn extends lt {
                constructor(e) {
                    super(), this.type = "LineBasicMaterial", this.color = new fe(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.morphTargets = !1, this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.morphTargets = e.morphTargets, this
                }
            }
            Vn.prototype.isLineBasicMaterial = !0;
            const _s = new y,
                ws = new y,
                bs = new ae,
                rr = new tn,
                xi = new _n;
            class Ms extends Ie {
                constructor(e = new Pe, t = new Vn) {
                    super(), this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets()
                }
                copy(e) {
                    return super.copy(e), this.material = e.material, this.geometry = e.geometry, this
                }
                computeLineDistances() {
                    const e = this.geometry;
                    if (e.isBufferGeometry)
                        if (e.index === null) {
                            const t = e.attributes.position,
                                n = [0];
                            for (let i = 1, r = t.count; i < r; i++) _s.fromBufferAttribute(t, i - 1), ws.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += _s.distanceTo(ws);
                            e.setAttribute("lineDistance", new Me(n, 1))
                        } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
                    else e.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
                    return this
                }
                raycast(e, t) {
                    const n = this.geometry,
                        i = this.matrixWorld,
                        r = e.params.Line.threshold,
                        o = n.drawRange;
                    if (n.boundingSphere === null && n.computeBoundingSphere(), xi.copy(n.boundingSphere), xi.applyMatrix4(i), xi.radius += r, e.ray.intersectsSphere(xi) === !1) return;
                    bs.copy(i).invert(), rr.copy(e.ray).applyMatrix4(bs);
                    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                        l = a * a,
                        c = new y,
                        h = new y,
                        u = new y,
                        d = new y,
                        p = this.isLineSegments ? 2 : 1;
                    if (n.isBufferGeometry) {
                        const g = n.index,
                            f = n.attributes.position;
                        if (g !== null)
                            for (let m = Math.max(0, o.start), v = Math.min(g.count, o.start + o.count) - 1; m < v; m += p) {
                                const w = g.getX(m),
                                    M = g.getX(m + 1);
                                if (c.fromBufferAttribute(f, w), h.fromBufferAttribute(f, M), rr.distanceSqToSegment(c, h, d, u) > l) continue;
                                d.applyMatrix4(this.matrixWorld);
                                const _ = e.ray.origin.distanceTo(d);
                                _ < e.near || _ > e.far || t.push({
                                    distance: _,
                                    point: u.clone().applyMatrix4(this.matrixWorld),
                                    index: m,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            } else
                            for (let m = Math.max(0, o.start), v = Math.min(f.count, o.start + o.count) - 1; m < v; m += p) {
                                if (c.fromBufferAttribute(f, m), h.fromBufferAttribute(f, m + 1), rr.distanceSqToSegment(c, h, d, u) > l) continue;
                                d.applyMatrix4(this.matrixWorld);
                                const w = e.ray.origin.distanceTo(d);
                                w < e.near || w > e.far || t.push({
                                    distance: w,
                                    point: u.clone().applyMatrix4(this.matrixWorld),
                                    index: m,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                    } else n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
                }
                updateMorphTargets() {
                    const e = this.geometry;
                    if (e.isBufferGeometry) {
                        const t = e.morphAttributes,
                            n = Object.keys(t);
                        if (n.length > 0) {
                            const i = t[n[0]];
                            if (i !== void 0) {
                                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                                for (let r = 0, o = i.length; r < o; r++) {
                                    const a = i[r].name || String(r);
                                    this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r
                                }
                            }
                        }
                    } else {
                        const t = e.morphTargets;
                        t !== void 0 && t.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
                    }
                }
            }
            Ms.prototype.isLine = !0;
            const Ss = new y,
                Es = new y;
            class sr extends Ms {
                constructor(e, t) {
                    super(e, t), this.type = "LineSegments"
                }
                computeLineDistances() {
                    const e = this.geometry;
                    if (e.isBufferGeometry)
                        if (e.index === null) {
                            const t = e.attributes.position,
                                n = [];
                            for (let i = 0, r = t.count; i < r; i += 2) Ss.fromBufferAttribute(t, i), Es.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Ss.distanceTo(Es);
                            e.setAttribute("lineDistance", new Me(n, 1))
                        } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
                    else e.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
                    return this
                }
            }
            sr.prototype.isLineSegments = !0;
            class sn extends lt {
                constructor(e) {
                    super(), this.type = "PointsMaterial", this.color = new fe(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.morphTargets = e.morphTargets, this
                }
            }
            sn.prototype.isPointsMaterial = !0;
            const Ts = new ae,
                ar = new tn,
                yi = new _n,
                _i = new y;
            class Wn extends Ie {
                constructor(e = new Pe, t = new sn) {
                    super(), this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets()
                }
                copy(e) {
                    return super.copy(e), this.material = e.material, this.geometry = e.geometry, this
                }
                raycast(e, t) {
                    const n = this.geometry,
                        i = this.matrixWorld,
                        r = e.params.Points.threshold,
                        o = n.drawRange;
                    if (n.boundingSphere === null && n.computeBoundingSphere(), yi.copy(n.boundingSphere), yi.applyMatrix4(i), yi.radius += r, e.ray.intersectsSphere(yi) === !1) return;
                    Ts.copy(i).invert(), ar.copy(e.ray).applyMatrix4(Ts);
                    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                        l = a * a;
                    if (n.isBufferGeometry) {
                        const c = n.index,
                            h = n.attributes.position;
                        if (c !== null)
                            for (let u = Math.max(0, o.start), d = Math.min(c.count, o.start + o.count); u < d; u++) {
                                const p = c.getX(u);
                                _i.fromBufferAttribute(h, p), Ls(_i, p, l, i, e, t, this)
                            } else
                            for (let u = Math.max(0, o.start), d = Math.min(h.count, o.start + o.count); u < d; u++) _i.fromBufferAttribute(h, u), Ls(_i, u, l, i, e, t, this)
                    } else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
                }
                updateMorphTargets() {
                    const e = this.geometry;
                    if (e.isBufferGeometry) {
                        const t = e.morphAttributes,
                            n = Object.keys(t);
                        if (n.length > 0) {
                            const i = t[n[0]];
                            if (i !== void 0) {
                                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                                for (let r = 0, o = i.length; r < o; r++) {
                                    const a = i[r].name || String(r);
                                    this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r
                                }
                            }
                        }
                    } else {
                        const t = e.morphTargets;
                        t !== void 0 && t.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
                    }
                }
            }

            function Ls(s, e, t, n, i, r, o) {
                const a = ar.distanceSqToPoint(s);
                if (a < t) {
                    const l = new y;
                    ar.closestPointToPoint(s, l), l.applyMatrix4(n);
                    const c = i.ray.origin.distanceTo(l);
                    if (c < i.near || c > i.far) return;
                    r.push({
                        distance: c,
                        distanceToRay: Math.sqrt(a),
                        point: l,
                        index: e,
                        face: null,
                        object: o
                    })
                }
            }
            Wn.prototype.isPoints = !0;
            class As extends Pe {
                constructor(e = 1, t = 8, n = 0, i = 2 * Math.PI) {
                    super(), this.type = "CircleGeometry", this.parameters = {
                        radius: e,
                        segments: t,
                        thetaStart: n,
                        thetaLength: i
                    }, t = Math.max(3, t);
                    const r = [],
                        o = [],
                        a = [],
                        l = [],
                        c = new y,
                        h = new ne;
                    o.push(0, 0, 0), a.push(0, 0, 1), l.push(.5, .5);
                    for (let u = 0, d = 3; u <= t; u++, d += 3) {
                        const p = n + u / t * i;
                        c.x = e * Math.cos(p), c.y = e * Math.sin(p), o.push(c.x, c.y, c.z), a.push(0, 0, 1), h.x = (o[d] / e + 1) / 2, h.y = (o[d + 1] / e + 1) / 2, l.push(h.x, h.y)
                    }
                    for (let u = 1; u <= t; u++) r.push(u, u + 1, 0);
                    this.setIndex(r), this.setAttribute("position", new Me(o, 3)), this.setAttribute("normal", new Me(a, 3)), this.setAttribute("uv", new Me(l, 2))
                }
            }
            class Cs extends Pe {
                constructor(e = 1, t = 1, n = 1, i = 8, r = 1, o = !1, a = 0, l = 2 * Math.PI) {
                    super(), this.type = "CylinderGeometry", this.parameters = {
                        radiusTop: e,
                        radiusBottom: t,
                        height: n,
                        radialSegments: i,
                        heightSegments: r,
                        openEnded: o,
                        thetaStart: a,
                        thetaLength: l
                    };
                    const c = this;
                    i = Math.floor(i), r = Math.floor(r);
                    const h = [],
                        u = [],
                        d = [],
                        p = [];
                    let g = 0;
                    const f = [],
                        m = n / 2;
                    let v = 0;

                    function w(M) {
                        const _ = g,
                            A = new ne,
                            L = new y;
                        let b = 0;
                        const C = M === !0 ? e : t,
                            z = M === !0 ? 1 : -1;
                        for (let I = 1; I <= i; I++) u.push(0, m * z, 0), d.push(0, z, 0), p.push(.5, .5), g++;
                        const R = g;
                        for (let I = 0; I <= i; I++) {
                            const N = I / i * l + a,
                                D = Math.cos(N),
                                O = Math.sin(N);
                            L.x = C * O, L.y = m * z, L.z = C * D, u.push(L.x, L.y, L.z), d.push(0, z, 0), A.x = .5 * D + .5, A.y = .5 * O * z + .5, p.push(A.x, A.y), g++
                        }
                        for (let I = 0; I < i; I++) {
                            const N = _ + I,
                                D = R + I;
                            M === !0 ? h.push(D, D + 1, N) : h.push(D + 1, D, N), b += 3
                        }
                        c.addGroup(v, b, M === !0 ? 1 : 2), v += b
                    } (function () {
                        const M = new y,
                            _ = new y;
                        let A = 0;
                        const L = (t - e) / n;
                        for (let b = 0; b <= r; b++) {
                            const C = [],
                                z = b / r,
                                R = z * (t - e) + e;
                            for (let I = 0; I <= i; I++) {
                                const N = I / i,
                                    D = N * l + a,
                                    O = Math.sin(D),
                                    B = Math.cos(D);
                                _.x = R * O, _.y = -z * n + m, _.z = R * B, u.push(_.x, _.y, _.z), M.set(O, L, B).normalize(), d.push(M.x, M.y, M.z), p.push(N, 1 - z), C.push(g++)
                            }
                            f.push(C)
                        }
                        for (let b = 0; b < i; b++)
                            for (let C = 0; C < r; C++) {
                                const z = f[C][b],
                                    R = f[C + 1][b],
                                    I = f[C + 1][b + 1],
                                    N = f[C][b + 1];
                                h.push(z, R, N), h.push(R, I, N), A += 6
                            }
                        c.addGroup(v, A, 0), v += A
                    })(), o === !1 && (e > 0 && w(!0), t > 0 && w(!1)), this.setIndex(h), this.setAttribute("position", new Me(u, 3)), this.setAttribute("normal", new Me(d, 3)), this.setAttribute("uv", new Me(p, 2))
                }
            }
            class bl extends Pe {
                constructor(e = .5, t = 1, n = 8, i = 1, r = 0, o = 2 * Math.PI) {
                    super(), this.type = "RingGeometry", this.parameters = {
                        innerRadius: e,
                        outerRadius: t,
                        thetaSegments: n,
                        phiSegments: i,
                        thetaStart: r,
                        thetaLength: o
                    }, n = Math.max(3, n);
                    const a = [],
                        l = [],
                        c = [],
                        h = [];
                    let u = e;
                    const d = (t - e) / (i = Math.max(1, i)),
                        p = new y,
                        g = new ne;
                    for (let f = 0; f <= i; f++) {
                        for (let m = 0; m <= n; m++) {
                            const v = r + m / n * o;
                            p.x = u * Math.cos(v), p.y = u * Math.sin(v), l.push(p.x, p.y, p.z), c.push(0, 0, 1), g.x = (p.x / t + 1) / 2, g.y = (p.y / t + 1) / 2, h.push(g.x, g.y)
                        }
                        u += d
                    }
                    for (let f = 0; f < i; f++) {
                        const m = f * (n + 1);
                        for (let v = 0; v < n; v++) {
                            const w = v + m,
                                M = w,
                                _ = w + n + 1,
                                A = w + n + 2,
                                L = w + 1;
                            a.push(M, _, L), a.push(_, A, L)
                        }
                    }
                    this.setIndex(a), this.setAttribute("position", new Me(l, 3)), this.setAttribute("normal", new Me(c, 3)), this.setAttribute("uv", new Me(h, 2))
                }
            }
            class Rs extends Pe {
                constructor(e = 1, t = 8, n = 6, i = 0, r = 2 * Math.PI, o = 0, a = Math.PI) {
                    super(), this.type = "SphereGeometry", this.parameters = {
                        radius: e,
                        widthSegments: t,
                        heightSegments: n,
                        phiStart: i,
                        phiLength: r,
                        thetaStart: o,
                        thetaLength: a
                    }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
                    const l = Math.min(o + a, Math.PI);
                    let c = 0;
                    const h = [],
                        u = new y,
                        d = new y,
                        p = [],
                        g = [],
                        f = [],
                        m = [];
                    for (let v = 0; v <= n; v++) {
                        const w = [],
                            M = v / n;
                        let _ = 0;
                        v == 0 && o == 0 ? _ = .5 / t : v == n && l == Math.PI && (_ = -.5 / t);
                        for (let A = 0; A <= t; A++) {
                            const L = A / t;
                            u.x = -e * Math.cos(i + L * r) * Math.sin(o + M * a), u.y = e * Math.cos(o + M * a), u.z = e * Math.sin(i + L * r) * Math.sin(o + M * a), g.push(u.x, u.y, u.z), d.copy(u).normalize(), f.push(d.x, d.y, d.z), m.push(L + _, 1 - M), w.push(c++)
                        }
                        h.push(w)
                    }
                    for (let v = 0; v < n; v++)
                        for (let w = 0; w < t; w++) {
                            const M = h[v][w + 1],
                                _ = h[v][w],
                                A = h[v + 1][w],
                                L = h[v + 1][w + 1];
                            (v !== 0 || o > 0) && p.push(M, _, L), (v !== n - 1 || l < Math.PI) && p.push(_, A, L)
                        }
                    this.setIndex(p), this.setAttribute("position", new Me(g, 3)), this.setAttribute("normal", new Me(f, 3)), this.setAttribute("uv", new Me(m, 2))
                }
            }
            class Ps extends Pe {
                constructor(e, t = 64, n = 1, i = 8, r = !1) {
                    super(), this.type = "TubeGeometry", this.parameters = {
                        path: e,
                        tubularSegments: t,
                        radius: n,
                        radialSegments: i,
                        closed: r
                    };
                    const o = e.computeFrenetFrames(t, r);
                    this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals;
                    const a = new y,
                        l = new y,
                        c = new ne;
                    let h = new y;
                    const u = [],
                        d = [],
                        p = [],
                        g = [];

                    function f(m) {
                        h = e.getPointAt(m / t, h);
                        const v = o.normals[m],
                            w = o.binormals[m];
                        for (let M = 0; M <= i; M++) {
                            const _ = M / i * Math.PI * 2,
                                A = Math.sin(_),
                                L = -Math.cos(_);
                            l.x = L * v.x + A * w.x, l.y = L * v.y + A * w.y, l.z = L * v.z + A * w.z, l.normalize(), d.push(l.x, l.y, l.z), a.x = h.x + n * l.x, a.y = h.y + n * l.y, a.z = h.z + n * l.z, u.push(a.x, a.y, a.z)
                        }
                    } (function () {
                        for (let m = 0; m < t; m++) f(m);
                        f(r === !1 ? t : 0),
                            function () {
                                for (let m = 0; m <= t; m++)
                                    for (let v = 0; v <= i; v++) c.x = m / t, c.y = v / i, p.push(c.x, c.y)
                            }(),
                            function () {
                                for (let m = 1; m <= t; m++)
                                    for (let v = 1; v <= i; v++) {
                                        const w = (i + 1) * (m - 1) + (v - 1),
                                            M = (i + 1) * m + (v - 1),
                                            _ = (i + 1) * m + v,
                                            A = (i + 1) * (m - 1) + v;
                                        g.push(w, M, A), g.push(M, _, A)
                                    }
                            }()
                    })(), this.setIndex(g), this.setAttribute("position", new Me(u, 3)), this.setAttribute("normal", new Me(d, 3)), this.setAttribute("uv", new Me(p, 2))
                }
                toJSON() {
                    const e = Pe.prototype.toJSON.call(this);
                    return e.path = this.parameters.path.toJSON(), e
                }
            }
            class or extends lt {
                constructor(e) {
                    super(), this.defines = {
                        STANDARD: ""
                    }, this.type = "MeshStandardMaterial", this.color = new fe(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new fe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new ne(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.vertexTangents = !1, this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.defines = {
                        STANDARD: ""
                    }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.flatShading = e.flatShading, this.vertexTangents = e.vertexTangents, this
                }
            }
            or.prototype.isMeshStandardMaterial = !0;
            class Ds extends lt {
                constructor(e) {
                    super(), this.type = "MeshPhongMaterial", this.color = new fe(16777215), this.specular = new fe(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new fe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new ne(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.flatShading = e.flatShading, this
                }
            }
            Ds.prototype.isMeshPhongMaterial = !0;
            const wi = {
                enabled: !1,
                files: {},
                add: function (s, e) {
                    this.enabled !== !1 && (this.files[s] = e)
                },
                get: function (s) {
                    if (this.enabled !== !1) return this.files[s]
                },
                remove: function (s) {
                    delete this.files[s]
                },
                clear: function () {
                    this.files = {}
                }
            },
                Ml = new class {
                    constructor(s, e, t) {
                        const n = this;
                        let i, r = !1,
                            o = 0,
                            a = 0;
                        const l = [];
                        this.onStart = void 0, this.onLoad = s, this.onProgress = e, this.onError = t, this.itemStart = function (c) {
                            a++, r === !1 && n.onStart !== void 0 && n.onStart(c, o, a), r = !0
                        }, this.itemEnd = function (c) {
                            o++, n.onProgress !== void 0 && n.onProgress(c, o, a), o === a && (r = !1, n.onLoad !== void 0 && n.onLoad())
                        }, this.itemError = function (c) {
                            n.onError !== void 0 && n.onError(c)
                        }, this.resolveURL = function (c) {
                            return i ? i(c) : c
                        }, this.setURLModifier = function (c) {
                            return i = c, this
                        }, this.addHandler = function (c, h) {
                            return l.push(c, h), this
                        }, this.removeHandler = function (c) {
                            const h = l.indexOf(c);
                            return h !== -1 && l.splice(h, 2), this
                        }, this.getHandler = function (c) {
                            for (let h = 0, u = l.length; h < u; h += 2) {
                                const d = l[h],
                                    p = l[h + 1];
                                if (d.global && (d.lastIndex = 0), d.test(c)) return p
                            }
                            return null
                        }
                    }
                };
            class an {
                constructor(e) {
                    this.manager = e !== void 0 ? e : Ml, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}
                }
                load() { }
                loadAsync(e, t) {
                    const n = this;
                    return new Promise(function (i, r) {
                        n.load(e, i, t, r)
                    })
                }
                parse() { }
                setCrossOrigin(e) {
                    return this.crossOrigin = e, this
                }
                setWithCredentials(e) {
                    return this.withCredentials = e, this
                }
                setPath(e) {
                    return this.path = e, this
                }
                setResourcePath(e) {
                    return this.resourcePath = e, this
                }
                setRequestHeader(e) {
                    return this.requestHeader = e, this
                }
            }
            const Tt = {};
            class Sl extends an {
                constructor(e) {
                    super(e)
                }
                load(e, t, n, i) {
                    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
                    const r = this,
                        o = wi.get(e);
                    if (o !== void 0) return r.manager.itemStart(e), setTimeout(function () {
                        t && t(o), r.manager.itemEnd(e)
                    }, 0), o;
                    if (Tt[e] !== void 0) return void Tt[e].push({
                        onLoad: t,
                        onProgress: n,
                        onError: i
                    });
                    const a = e.match(/^data:(.*?)(;base64)?,(.*)$/);
                    let l;
                    if (a) {
                        const c = a[1],
                            h = !!a[2];
                        let u = a[3];
                        u = decodeURIComponent(u), h && (u = atob(u));
                        try {
                            let d;
                            const p = (this.responseType || "").toLowerCase();
                            switch (p) {
                                case "arraybuffer":
                                case "blob":
                                    const g = new Uint8Array(u.length);
                                    for (let m = 0; m < u.length; m++) g[m] = u.charCodeAt(m);
                                    d = p === "blob" ? new Blob([g.buffer], {
                                        type: c
                                    }) : g.buffer;
                                    break;
                                case "document":
                                    d = new DOMParser().parseFromString(u, c);
                                    break;
                                case "json":
                                    d = JSON.parse(u);
                                    break;
                                default:
                                    d = u
                            }
                            setTimeout(function () {
                                t && t(d), r.manager.itemEnd(e)
                            }, 0)
                        } catch (d) {
                            setTimeout(function () {
                                i && i(d), r.manager.itemError(e), r.manager.itemEnd(e)
                            }, 0)
                        }
                    } else {
                        Tt[e] = [], Tt[e].push({
                            onLoad: t,
                            onProgress: n,
                            onError: i
                        }), l = new XMLHttpRequest, l.open("GET", e, !0), l.addEventListener("load", function (c) {
                            const h = this.response,
                                u = Tt[e];
                            if (delete Tt[e], this.status === 200 || this.status === 0) {
                                this.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), wi.add(e, h);
                                for (let d = 0, p = u.length; d < p; d++) {
                                    const g = u[d];
                                    g.onLoad && g.onLoad(h)
                                }
                                r.manager.itemEnd(e)
                            } else {
                                for (let d = 0, p = u.length; d < p; d++) {
                                    const g = u[d];
                                    g.onError && g.onError(c)
                                }
                                r.manager.itemError(e), r.manager.itemEnd(e)
                            }
                        }, !1), l.addEventListener("progress", function (c) {
                            const h = Tt[e];
                            for (let u = 0, d = h.length; u < d; u++) {
                                const p = h[u];
                                p.onProgress && p.onProgress(c)
                            }
                        }, !1), l.addEventListener("error", function (c) {
                            const h = Tt[e];
                            delete Tt[e];
                            for (let u = 0, d = h.length; u < d; u++) {
                                const p = h[u];
                                p.onError && p.onError(c)
                            }
                            r.manager.itemError(e), r.manager.itemEnd(e)
                        }, !1), l.addEventListener("abort", function (c) {
                            const h = Tt[e];
                            delete Tt[e];
                            for (let u = 0, d = h.length; u < d; u++) {
                                const p = h[u];
                                p.onError && p.onError(c)
                            }
                            r.manager.itemError(e), r.manager.itemEnd(e)
                        }, !1), this.responseType !== void 0 && (l.responseType = this.responseType), this.withCredentials !== void 0 && (l.withCredentials = this.withCredentials), l.overrideMimeType && l.overrideMimeType(this.mimeType !== void 0 ? this.mimeType : "text/plain");
                        for (const c in this.requestHeader) l.setRequestHeader(c, this.requestHeader[c]);
                        l.send(null)
                    }
                    return r.manager.itemStart(e), l
                }
                setResponseType(e) {
                    return this.responseType = e, this
                }
                setMimeType(e) {
                    return this.mimeType = e, this
                }
            }
            class Is extends an {
                constructor(e) {
                    super(e)
                }
                load(e, t, n, i) {
                    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
                    const r = this,
                        o = wi.get(e);
                    if (o !== void 0) return r.manager.itemStart(e), setTimeout(function () {
                        t && t(o), r.manager.itemEnd(e)
                    }, 0), o;
                    const a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

                    function l() {
                        a.removeEventListener("load", l, !1), a.removeEventListener("error", c, !1), wi.add(e, this), t && t(this), r.manager.itemEnd(e)
                    }

                    function c(h) {
                        a.removeEventListener("load", l, !1), a.removeEventListener("error", c, !1), i && i(h), r.manager.itemError(e), r.manager.itemEnd(e)
                    }
                    return a.addEventListener("load", l, !1), a.addEventListener("error", c, !1), e.substr(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(e), a.src = e, a
                }
            }
            class El extends an {
                constructor(e) {
                    super(e)
                }
                load(e, t, n, i) {
                    const r = new pi,
                        o = new Is(this.manager);
                    o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
                    let a = 0;

                    function l(c) {
                        o.load(e[c], function (h) {
                            r.images[c] = h, a++, a === 6 && (r.needsUpdate = !0, t && t(r))
                        }, void 0, i)
                    }
                    for (let c = 0; c < e.length; ++c) l(c);
                    return r
                }
            }
            class Ns extends an {
                constructor(e) {
                    super(e)
                }
                load(e, t, n, i) {
                    const r = new dt,
                        o = new Is(this.manager);
                    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function (a) {
                        r.image = a;
                        const l = e.search(/\.jpe?g($|\?)/i) > 0 || e.search(/^data\:image\/jpeg/) === 0;
                        r.format = l ? We : Re, r.needsUpdate = !0, t !== void 0 && t(r)
                    }, n, i), r
                }
            }
            class Lt {
                constructor() {
                    this.type = "Curve", this.arcLengthDivisions = 200
                }
                getPoint() {
                    return console.warn("THREE.Curve: .getPoint() not implemented."), null
                }
                getPointAt(e, t) {
                    const n = this.getUtoTmapping(e);
                    return this.getPoint(n, t)
                }
                getPoints(e = 5) {
                    const t = [];
                    for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
                    return t
                }
                getSpacedPoints(e = 5) {
                    const t = [];
                    for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
                    return t
                }
                getLength() {
                    const e = this.getLengths();
                    return e[e.length - 1]
                }
                getLengths(e = this.arcLengthDivisions) {
                    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
                    this.needsUpdate = !1;
                    const t = [];
                    let n, i = this.getPoint(0),
                        r = 0;
                    t.push(0);
                    for (let o = 1; o <= e; o++) n = this.getPoint(o / e), r += n.distanceTo(i), t.push(r), i = n;
                    return this.cacheArcLengths = t, t
                }
                updateArcLengths() {
                    this.needsUpdate = !0, this.getLengths()
                }
                getUtoTmapping(e, t) {
                    const n = this.getLengths();
                    let i = 0;
                    const r = n.length;
                    let o;
                    o = t || e * n[r - 1];
                    let a, l = 0,
                        c = r - 1;
                    for (; l <= c;)
                        if (i = Math.floor(l + (c - l) / 2), a = n[i] - o, a < 0) l = i + 1;
                        else {
                            if (!(a > 0)) {
                                c = i;
                                break
                            }
                            c = i - 1
                        }
                    if (i = c, n[i] === o) return i / (r - 1);
                    const h = n[i];
                    return (i + (o - h) / (n[i + 1] - h)) / (r - 1)
                }
                getTangent(e, t) {
                    const n = 1e-4;
                    let i = e - n,
                        r = e + n;
                    i < 0 && (i = 0), r > 1 && (r = 1);
                    const o = this.getPoint(i),
                        a = this.getPoint(r),
                        l = t || (o.isVector2 ? new ne : new y);
                    return l.copy(a).sub(o).normalize(), l
                }
                getTangentAt(e, t) {
                    const n = this.getUtoTmapping(e);
                    return this.getTangent(n, t)
                }
                computeFrenetFrames(e, t) {
                    const n = new y,
                        i = [],
                        r = [],
                        o = [],
                        a = new y,
                        l = new ae;
                    for (let p = 0; p <= e; p++) {
                        const g = p / e;
                        i[p] = this.getTangentAt(g, new y), i[p].normalize()
                    }
                    r[0] = new y, o[0] = new y;
                    let c = Number.MAX_VALUE;
                    const h = Math.abs(i[0].x),
                        u = Math.abs(i[0].y),
                        d = Math.abs(i[0].z);
                    h <= c && (c = h, n.set(1, 0, 0)), u <= c && (c = u, n.set(0, 1, 0)), d <= c && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), o[0].crossVectors(i[0], r[0]);
                    for (let p = 1; p <= e; p++) {
                        if (r[p] = r[p - 1].clone(), o[p] = o[p - 1].clone(), a.crossVectors(i[p - 1], i[p]), a.length() > Number.EPSILON) {
                            a.normalize();
                            const g = Math.acos(vt(i[p - 1].dot(i[p]), -1, 1));
                            r[p].applyMatrix4(l.makeRotationAxis(a, g))
                        }
                        o[p].crossVectors(i[p], r[p])
                    }
                    if (t === !0) {
                        let p = Math.acos(vt(r[0].dot(r[e]), -1, 1));
                        p /= e, i[0].dot(a.crossVectors(r[0], r[e])) > 0 && (p = -p);
                        for (let g = 1; g <= e; g++) r[g].applyMatrix4(l.makeRotationAxis(i[g], p * g)), o[g].crossVectors(i[g], r[g])
                    }
                    return {
                        tangents: i,
                        normals: r,
                        binormals: o
                    }
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                copy(e) {
                    return this.arcLengthDivisions = e.arcLengthDivisions, this
                }
                toJSON() {
                    const e = {
                        metadata: {
                            version: 4.5,
                            type: "Curve",
                            generator: "Curve.toJSON"
                        }
                    };
                    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e
                }
                fromJSON(e) {
                    return this.arcLengthDivisions = e.arcLengthDivisions, this
                }
            }
            class lr extends Lt {
                constructor(e = 0, t = 0, n = 1, i = 1, r = 0, o = 2 * Math.PI, a = !1, l = 0) {
                    super(), this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = o, this.aClockwise = a, this.aRotation = l
                }
                getPoint(e, t) {
                    const n = t || new ne,
                        i = 2 * Math.PI;
                    let r = this.aEndAngle - this.aStartAngle;
                    const o = Math.abs(r) < Number.EPSILON;
                    for (; r < 0;) r += i;
                    for (; r > i;) r -= i;
                    r < Number.EPSILON && (r = o ? 0 : i), this.aClockwise !== !0 || o || (r === i ? r = -i : r -= i);
                    const a = this.aStartAngle + e * r;
                    let l = this.aX + this.xRadius * Math.cos(a),
                        c = this.aY + this.yRadius * Math.sin(a);
                    if (this.aRotation !== 0) {
                        const h = Math.cos(this.aRotation),
                            u = Math.sin(this.aRotation),
                            d = l - this.aX,
                            p = c - this.aY;
                        l = d * h - p * u + this.aX, c = d * u + p * h + this.aY
                    }
                    return n.set(l, c)
                }
                copy(e) {
                    return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
                }
                toJSON() {
                    const e = super.toJSON();
                    return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e
                }
                fromJSON(e) {
                    return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
                }
            }
            lr.prototype.isEllipseCurve = !0;
            class zs extends lr {
                constructor(e, t, n, i, r, o) {
                    super(e, t, n, n, i, r, o), this.type = "ArcCurve"
                }
            }

            function cr() {
                let s = 0,
                    e = 0,
                    t = 0,
                    n = 0;

                function i(r, o, a, l) {
                    s = r, e = a, t = -3 * r + 3 * o - 2 * a - l, n = 2 * r - 2 * o + a + l
                }
                return {
                    initCatmullRom: function (r, o, a, l, c) {
                        i(o, a, c * (a - r), c * (l - o))
                    },
                    initNonuniformCatmullRom: function (r, o, a, l, c, h, u) {
                        let d = (o - r) / c - (a - r) / (c + h) + (a - o) / h,
                            p = (a - o) / h - (l - o) / (h + u) + (l - a) / u;
                        d *= h, p *= h, i(o, a, d, p)
                    },
                    calc: function (r) {
                        const o = r * r;
                        return s + e * r + t * o + n * (o * r)
                    }
                }
            }
            zs.prototype.isArcCurve = !0;
            const bi = new y,
                hr = new cr,
                dr = new cr,
                ur = new cr;
            class Os extends Lt {
                constructor(e = [], t = !1, n = "centripetal", i = .5) {
                    super(), this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i
                }
                getPoint(e, t = new y) {
                    const n = t,
                        i = this.points,
                        r = i.length,
                        o = (r - (this.closed ? 0 : 1)) * e;
                    let a, l, c = Math.floor(o),
                        h = o - c;
                    this.closed ? c += c > 0 ? 0 : (Math.floor(Math.abs(c) / r) + 1) * r : h === 0 && c === r - 1 && (c = r - 2, h = 1), this.closed || c > 0 ? a = i[(c - 1) % r] : (bi.subVectors(i[0], i[1]).add(i[0]), a = bi);
                    const u = i[c % r],
                        d = i[(c + 1) % r];
                    if (this.closed || c + 2 < r ? l = i[(c + 2) % r] : (bi.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), l = bi), this.curveType === "centripetal" || this.curveType === "chordal") {
                        const p = this.curveType === "chordal" ? .5 : .25;
                        let g = Math.pow(a.distanceToSquared(u), p),
                            f = Math.pow(u.distanceToSquared(d), p),
                            m = Math.pow(d.distanceToSquared(l), p);
                        f < 1e-4 && (f = 1), g < 1e-4 && (g = f), m < 1e-4 && (m = f), hr.initNonuniformCatmullRom(a.x, u.x, d.x, l.x, g, f, m), dr.initNonuniformCatmullRom(a.y, u.y, d.y, l.y, g, f, m), ur.initNonuniformCatmullRom(a.z, u.z, d.z, l.z, g, f, m)
                    } else this.curveType === "catmullrom" && (hr.initCatmullRom(a.x, u.x, d.x, l.x, this.tension), dr.initCatmullRom(a.y, u.y, d.y, l.y, this.tension), ur.initCatmullRom(a.z, u.z, d.z, l.z, this.tension));
                    return n.set(hr.calc(h), dr.calc(h), ur.calc(h)), n
                }
                copy(e) {
                    super.copy(e), this.points = [];
                    for (let t = 0, n = e.points.length; t < n; t++) {
                        const i = e.points[t];
                        this.points.push(i.clone())
                    }
                    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
                }
                toJSON() {
                    const e = super.toJSON();
                    e.points = [];
                    for (let t = 0, n = this.points.length; t < n; t++) {
                        const i = this.points[t];
                        e.points.push(i.toArray())
                    }
                    return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e
                }
                fromJSON(e) {
                    super.fromJSON(e), this.points = [];
                    for (let t = 0, n = e.points.length; t < n; t++) {
                        const i = e.points[t];
                        this.points.push(new y().fromArray(i))
                    }
                    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
                }
            }

            function Fs(s, e, t, n, i) {
                const r = .5 * (n - e),
                    o = .5 * (i - t),
                    a = s * s;
                return (2 * t - 2 * n + r + o) * (s * a) + (-3 * t + 3 * n - 2 * r - o) * a + r * s + t
            }

            function kn(s, e, t, n) {
                return function (i, r) {
                    const o = 1 - i;
                    return o * o * r
                }(s, e) + function (i, r) {
                    return 2 * (1 - i) * i * r
                }(s, t) + function (i, r) {
                    return i * i * r
                }(s, n)
            }

            function jn(s, e, t, n, i) {
                return function (r, o) {
                    const a = 1 - r;
                    return a * a * a * o
                }(s, e) + function (r, o) {
                    const a = 1 - r;
                    return 3 * a * a * r * o
                }(s, t) + function (r, o) {
                    return 3 * (1 - r) * r * r * o
                }(s, n) + function (r, o) {
                    return r * r * r * o
                }(s, i)
            }
            Os.prototype.isCatmullRomCurve3 = !0;
            class Hs extends Lt {
                constructor(e = new ne, t = new ne, n = new ne, i = new ne) {
                    super(), this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i
                }
                getPoint(e, t = new ne) {
                    const n = t,
                        i = this.v0,
                        r = this.v1,
                        o = this.v2,
                        a = this.v3;
                    return n.set(jn(e, i.x, r.x, o.x, a.x), jn(e, i.y, r.y, o.y, a.y)), n
                }
                copy(e) {
                    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
                }
                toJSON() {
                    const e = super.toJSON();
                    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
                }
                fromJSON(e) {
                    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
                }
            }
            Hs.prototype.isCubicBezierCurve = !0;
            class Mi extends Lt {
                constructor(e = new y, t = new y, n = new y, i = new y) {
                    super(), this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i
                }
                getPoint(e, t = new y) {
                    const n = t,
                        i = this.v0,
                        r = this.v1,
                        o = this.v2,
                        a = this.v3;
                    return n.set(jn(e, i.x, r.x, o.x, a.x), jn(e, i.y, r.y, o.y, a.y), jn(e, i.z, r.z, o.z, a.z)), n
                }
                copy(e) {
                    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
                }
                toJSON() {
                    const e = super.toJSON();
                    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
                }
                fromJSON(e) {
                    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
                }
            }
            Mi.prototype.isCubicBezierCurve3 = !0;
            class Us extends Lt {
                constructor(e = new ne, t = new ne) {
                    super(), this.type = "LineCurve", this.v1 = e, this.v2 = t
                }
                getPoint(e, t = new ne) {
                    const n = t;
                    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n
                }
                getPointAt(e, t) {
                    return this.getPoint(e, t)
                }
                getTangent(e, t) {
                    const n = t || new ne;
                    return n.copy(this.v2).sub(this.v1).normalize(), n
                }
                copy(e) {
                    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
                }
                toJSON() {
                    const e = super.toJSON();
                    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
                }
                fromJSON(e) {
                    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
                }
            }
            Us.prototype.isLineCurve = !0;
            class Bs extends Lt {
                constructor(e = new ne, t = new ne, n = new ne) {
                    super(), this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n
                }
                getPoint(e, t = new ne) {
                    const n = t,
                        i = this.v0,
                        r = this.v1,
                        o = this.v2;
                    return n.set(kn(e, i.x, r.x, o.x), kn(e, i.y, r.y, o.y)), n
                }
                copy(e) {
                    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
                }
                toJSON() {
                    const e = super.toJSON();
                    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
                }
                fromJSON(e) {
                    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
                }
            }
            Bs.prototype.isQuadraticBezierCurve = !0;
            class Gs extends Lt {
                constructor(e = new y, t = new y, n = new y) {
                    super(), this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n
                }
                getPoint(e, t = new y) {
                    const n = t,
                        i = this.v0,
                        r = this.v1,
                        o = this.v2;
                    return n.set(kn(e, i.x, r.x, o.x), kn(e, i.y, r.y, o.y), kn(e, i.z, r.z, o.z)), n
                }
                copy(e) {
                    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
                }
                toJSON() {
                    const e = super.toJSON();
                    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
                }
                fromJSON(e) {
                    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
                }
            }
            Gs.prototype.isQuadraticBezierCurve3 = !0;
            class Vs extends Lt {
                constructor(e = []) {
                    super(), this.type = "SplineCurve", this.points = e
                }
                getPoint(e, t = new ne) {
                    const n = t,
                        i = this.points,
                        r = (i.length - 1) * e,
                        o = Math.floor(r),
                        a = r - o,
                        l = i[o === 0 ? o : o - 1],
                        c = i[o],
                        h = i[o > i.length - 2 ? i.length - 1 : o + 1],
                        u = i[o > i.length - 3 ? i.length - 1 : o + 2];
                    return n.set(Fs(a, l.x, c.x, h.x, u.x), Fs(a, l.y, c.y, h.y, u.y)), n
                }
                copy(e) {
                    super.copy(e), this.points = [];
                    for (let t = 0, n = e.points.length; t < n; t++) {
                        const i = e.points[t];
                        this.points.push(i.clone())
                    }
                    return this
                }
                toJSON() {
                    const e = super.toJSON();
                    e.points = [];
                    for (let t = 0, n = this.points.length; t < n; t++) {
                        const i = this.points[t];
                        e.points.push(i.toArray())
                    }
                    return e
                }
                fromJSON(e) {
                    super.fromJSON(e), this.points = [];
                    for (let t = 0, n = e.points.length; t < n; t++) {
                        const i = e.points[t];
                        this.points.push(new ne().fromArray(i))
                    }
                    return this
                }
            }
            Vs.prototype.isSplineCurve = !0, Object.freeze({
                __proto__: null,
                ArcCurve: zs,
                CatmullRomCurve3: Os,
                CubicBezierCurve: Hs,
                CubicBezierCurve3: Mi,
                EllipseCurve: lr,
                LineCurve: Us,
                LineCurve3: class extends Lt {
                    constructor(s = new y, e = new y) {
                        super(), this.type = "LineCurve3", this.isLineCurve3 = !0, this.v1 = s, this.v2 = e
                    }
                    getPoint(s, e = new y) {
                        const t = e;
                        return s === 1 ? t.copy(this.v2) : (t.copy(this.v2).sub(this.v1), t.multiplyScalar(s).add(this.v1)), t
                    }
                    getPointAt(s, e) {
                        return this.getPoint(s, e)
                    }
                    copy(s) {
                        return super.copy(s), this.v1.copy(s.v1), this.v2.copy(s.v2), this
                    }
                    toJSON() {
                        const s = super.toJSON();
                        return s.v1 = this.v1.toArray(), s.v2 = this.v2.toArray(), s
                    }
                    fromJSON(s) {
                        return super.fromJSON(s), this.v1.fromArray(s.v1), this.v2.fromArray(s.v2), this
                    }
                },
                QuadraticBezierCurve: Bs,
                QuadraticBezierCurve3: Gs,
                SplineCurve: Vs
            });
            class qn extends Ie {
                constructor(e, t = 1) {
                    super(), this.type = "Light", this.color = new fe(e), this.intensity = t
                }
                dispose() { }
                copy(e) {
                    return super.copy(e), this.color.copy(e.color), this.intensity = e.intensity, this
                }
                toJSON(e) {
                    const t = super.toJSON(e);
                    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t
                }
            }
            qn.prototype.isLight = !0;
            const Ws = new ae,
                ks = new y,
                js = new y;
            class qs {
                constructor(e) {
                    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.mapSize = new ne(512, 512), this.map = null, this.mapPass = null, this.matrix = new ae, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new fi, this._frameExtents = new ne(1, 1), this._viewportCount = 1, this._viewports = [new qe(0, 0, 1, 1)]
                }
                getViewportCount() {
                    return this._viewportCount
                }
                getFrustum() {
                    return this._frustum
                }
                updateMatrices(e) {
                    const t = this.camera,
                        n = this.matrix;
                    ks.setFromMatrixPosition(e.matrixWorld), t.position.copy(ks), js.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(js), t.updateMatrixWorld(), Ws.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ws), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(t.projectionMatrix), n.multiply(t.matrixWorldInverse)
                }
                getViewport(e) {
                    return this._viewports[e]
                }
                getFrameExtents() {
                    return this._frameExtents
                }
                dispose() {
                    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose()
                }
                copy(e) {
                    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                toJSON() {
                    const e = {};
                    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), this.mapSize.x === 512 && this.mapSize.y === 512 || (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e
                }
            }
            class Xs extends qs {
                constructor() {
                    super(new mt(50, 1, .5, 500)), this.focus = 1
                }
                updateMatrices(e) {
                    const t = this.camera,
                        n = 2 * nt * e.angle * this.focus,
                        i = this.mapSize.width / this.mapSize.height,
                        r = e.distance || t.far;
                    n === t.fov && i === t.aspect && r === t.far || (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e)
                }
                copy(e) {
                    return super.copy(e), this.focus = e.focus, this
                }
            }
            Xs.prototype.isSpotLightShadow = !0;
            class pr extends qn {
                constructor(e, t, n = 0, i = Math.PI / 3, r = 0, o = 1) {
                    super(e, t), this.type = "SpotLight", this.position.copy(Ie.DefaultUp), this.updateMatrix(), this.target = new Ie, this.distance = n, this.angle = i, this.penumbra = r, this.decay = o, this.shadow = new Xs
                }
                get power() {
                    return this.intensity * Math.PI
                }
                set power(e) {
                    this.intensity = e / Math.PI
                }
                dispose() {
                    this.shadow.dispose()
                }
                copy(e) {
                    return super.copy(e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
                }
            }
            pr.prototype.isSpotLight = !0, new ae;
            class Ys extends $i {
                constructor(e = -1, t = 1, n = 1, i = -1, r = .1, o = 2e3) {
                    super(), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = o, this.updateProjectionMatrix()
                }
                copy(e, t) {
                    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this
                }
                setViewOffset(e, t, n, i, r, o) {
                    this.view === null && (this.view = {
                        enabled: !0,
                        fullWidth: 1,
                        fullHeight: 1,
                        offsetX: 0,
                        offsetY: 0,
                        width: 1,
                        height: 1
                    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix()
                }
                clearViewOffset() {
                    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix()
                }
                updateProjectionMatrix() {
                    const e = (this.right - this.left) / (2 * this.zoom),
                        t = (this.top - this.bottom) / (2 * this.zoom),
                        n = (this.right + this.left) / 2,
                        i = (this.top + this.bottom) / 2;
                    let r = n - e,
                        o = n + e,
                        a = i + t,
                        l = i - t;
                    if (this.view !== null && this.view.enabled) {
                        const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
                            h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                        r += c * this.view.offsetX, o = r + c * this.view.width, a -= h * this.view.offsetY, l = a - h * this.view.height
                    }
                    this.projectionMatrix.makeOrthographic(r, o, a, l, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
                }
                toJSON(e) {
                    const t = super.toJSON(e);
                    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t
                }
            }
            Ys.prototype.isOrthographicCamera = !0;
            class Zs extends qs {
                constructor() {
                    super(new Ys(-5, 5, 5, -5, .5, 500))
                }
            }
            Zs.prototype.isDirectionalLightShadow = !0;
            class Js extends qn {
                constructor(e, t) {
                    super(e, t), this.type = "DirectionalLight", this.position.copy(Ie.DefaultUp), this.updateMatrix(), this.target = new Ie, this.shadow = new Zs
                }
                dispose() {
                    this.shadow.dispose()
                }
                copy(e) {
                    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
                }
            }
            Js.prototype.isDirectionalLight = !0;
            class Qs extends qn {
                constructor(e, t) {
                    super(e, t), this.type = "AmbientLight"
                }
            }
            Qs.prototype.isAmbientLight = !0;
            class $s extends Xe {
                constructor(e, t, n, i) {
                    typeof n == "number" && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), super(e, t, n), this.meshPerAttribute = i || 1
                }
                copy(e) {
                    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this
                }
                toJSON() {
                    const e = super.toJSON();
                    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e
                }
            }
            $s.prototype.isInstancedBufferAttribute = !0;
            class Tl {
                constructor(e = !0) {
                    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
                }
                start() {
                    this.startTime = Ks(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
                }
                stop() {
                    this.getElapsedTime(), this.running = !1, this.autoStart = !1
                }
                getElapsedTime() {
                    return this.getDelta(), this.elapsedTime
                }
                getDelta() {
                    let e = 0;
                    if (this.autoStart && !this.running) return this.start(), 0;
                    if (this.running) {
                        const t = Ks();
                        e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e
                    }
                    return e
                }
            }

            function Ks() {
                return (typeof performance == "undefined" ? Date : performance).now()
            }
            const mr = "[^\\[\\]\\.:\\/]",
                Ll = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]";
            /((?:WC+[\/:])*)/.source.replace("WC", mr), /(WCOD+)?/.source.replace("WCOD", Ll), /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", mr), /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", mr);
            class ea {
                constructor(e, t, n = 0, i = 1 / 0) {
                    this.ray = new tn(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new Rr, this.params = {
                        Mesh: {},
                        Line: {
                            threshold: 1
                        },
                        LOD: {},
                        Points: {
                            threshold: 1
                        },
                        Sprite: {}
                    }
                }
                set(e, t) {
                    this.ray.set(e, t)
                }
                setFromCamera(e, t) {
                    t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type)
                }
                intersectObject(e, t = !1, n = []) {
                    return fr(e, this, n, t), n.sort(ta), n
                }
                intersectObjects(e, t = !1, n = []) {
                    for (let i = 0, r = e.length; i < r; i++) fr(e[i], this, n, t);
                    return n.sort(ta), n
                }
            }

            function ta(s, e) {
                return s.distance - e.distance
            }

            function fr(s, e, t, n) {
                if (s.layers.test(e.layers) && s.raycast(e, t), n === !0) {
                    const i = s.children;
                    for (let r = 0, o = i.length; r < o; r++) fr(i[r], e, t, !0)
                }
            }
            new ae, new ae;
            const na = [.125, .215, .35, .446, .526, .582],
                Al = 5 + na.length,
                Cl = new Et({
                    side: 1,
                    depthWrite: !1,
                    depthTest: !1
                });
            new Ke(new ui, Cl), Rl();

            function Rl() {
                const s = [],
                    e = [],
                    t = [];
                let n = 8;
                for (let i = 0; i < Al; i++) {
                    const r = Math.pow(2, n);
                    e.push(r);
                    let o = 1 / r;
                    i > 4 ? o = na[i - 8 + 4 - 1] : i == 0 && (o = 0), t.push(o);
                    const a = 1 / (r - 1),
                        l = -a / 2,
                        c = 1 + a / 2,
                        h = [l, l, c, l, c, c, l, l, c, c, l, c],
                        u = 6,
                        d = 6,
                        p = 3,
                        g = 2,
                        f = 1,
                        m = new Float32Array(p * d * u),
                        v = new Float32Array(g * d * u),
                        w = new Float32Array(f * d * u);
                    for (let _ = 0; _ < u; _++) {
                        const A = _ % 3 * 2 / 3 - 1,
                            L = _ > 2 ? 0 : -1,
                            b = [A, L, 0, A + 2 / 3, L, 0, A + 2 / 3, L + 1, 0, A, L, 0, A + 2 / 3, L + 1, 0, A, L + 1, 0];
                        m.set(b, p * d * _), v.set(h, g * d * _);
                        const C = [_, _, _, _, _, _];
                        w.set(C, f * d * _)
                    }
                    const M = new Pe;
                    M.setAttribute("position", new Xe(m, p)), M.setAttribute("uv", new Xe(v, g)), M.setAttribute("faceIndex", new Xe(w, f)), s.push(M), n > 4 && n--
                }
                return {
                    _lodPlanes: s,
                    _sizeLods: e,
                    _sigmas: t
                }
            }
            Lt.create = function (s, e) {
                return console.log("THREE.Curve.create() has been deprecated"), s.prototype = Object.create(Lt.prototype), s.prototype.constructor = s, s.prototype.getPoint = e, s
            }, an.prototype.extractUrlBase = function (s) {
                return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), class {
                    static decodeText(e) {
                        if (typeof TextDecoder != "undefined") return new TextDecoder().decode(e);
                        let t = "";
                        for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
                        try {
                            return decodeURIComponent(escape(t))
                        } catch (n) {
                            return t
                        }
                    }
                    static extractUrlBase(e) {
                        const t = e.lastIndexOf("/");
                        return t === -1 ? "./" : e.substr(0, t + 1)
                    }
                }.extractUrlBase(s)
            }, an.Handlers = {
                add: function () {
                    console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")
                },
                get: function () {
                    console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")
                }
            }, xt.prototype.center = function (s) {
                return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(s)
            }, xt.prototype.empty = function () {
                return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
            }, xt.prototype.isIntersectionBox = function (s) {
                return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(s)
            }, xt.prototype.isIntersectionSphere = function (s) {
                return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(s)
            }, xt.prototype.size = function (s) {
                return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(s)
            }, _n.prototype.empty = function () {
                return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty()
            }, fi.prototype.setFromMatrix = function (s) {
                return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(s)
            }, it.prototype.flattenToArrayOffset = function (s, e) {
                return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(s, e)
            }, it.prototype.multiplyVector3 = function (s) {
                return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), s.applyMatrix3(this)
            }, it.prototype.multiplyVector3Array = function () {
                console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
            }, it.prototype.applyToBufferAttribute = function (s) {
                return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), s.applyMatrix3(this)
            }, it.prototype.applyToVector3Array = function () {
                console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
            }, it.prototype.getInverse = function (s) {
                return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(s).invert()
            }, ae.prototype.extractPosition = function (s) {
                return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(s)
            }, ae.prototype.flattenToArrayOffset = function (s, e) {
                return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(s, e)
            }, ae.prototype.getPosition = function () {
                return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new y().setFromMatrixColumn(this, 3)
            }, ae.prototype.setRotationFromQuaternion = function (s) {
                return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(s)
            }, ae.prototype.multiplyToArray = function () {
                console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
            }, ae.prototype.multiplyVector3 = function (s) {
                return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), s.applyMatrix4(this)
            }, ae.prototype.multiplyVector4 = function (s) {
                return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), s.applyMatrix4(this)
            }, ae.prototype.multiplyVector3Array = function () {
                console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
            }, ae.prototype.rotateAxis = function (s) {
                console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), s.transformDirection(this)
            }, ae.prototype.crossVector = function (s) {
                return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), s.applyMatrix4(this)
            }, ae.prototype.translate = function () {
                console.error("THREE.Matrix4: .translate() has been removed.")
            }, ae.prototype.rotateX = function () {
                console.error("THREE.Matrix4: .rotateX() has been removed.")
            }, ae.prototype.rotateY = function () {
                console.error("THREE.Matrix4: .rotateY() has been removed.")
            }, ae.prototype.rotateZ = function () {
                console.error("THREE.Matrix4: .rotateZ() has been removed.")
            }, ae.prototype.rotateByAxis = function () {
                console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
            }, ae.prototype.applyToBufferAttribute = function (s) {
                return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), s.applyMatrix4(this)
            }, ae.prototype.applyToVector3Array = function () {
                console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
            }, ae.prototype.makeFrustum = function (s, e, t, n, i, r) {
                return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(s, e, n, t, i, r)
            }, ae.prototype.getInverse = function (s) {
                return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(s).invert()
            }, Rt.prototype.isIntersectionLine = function (s) {
                return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(s)
            }, zt.prototype.multiplyVector3 = function (s) {
                return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), s.applyQuaternion(this)
            }, zt.prototype.inverse = function () {
                return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert()
            }, tn.prototype.isIntersectionBox = function (s) {
                return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(s)
            }, tn.prototype.isIntersectionPlane = function (s) {
                return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(s)
            }, tn.prototype.isIntersectionSphere = function (s) {
                return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(s)
            }, Qe.prototype.area = function () {
                return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea()
            }, Qe.prototype.barycoordFromPoint = function (s, e) {
                return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(s, e)
            }, Qe.prototype.midpoint = function (s) {
                return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(s)
            }, Qe.prototypenormal = function (s) {
                return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(s)
            }, Qe.prototype.plane = function (s) {
                return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(s)
            }, Qe.barycoordFromPoint = function (s, e, t, n, i) {
                return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), Qe.getBarycoord(s, e, t, n, i)
            }, Qe.normal = function (s, e, t, n) {
                return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), Qe.getNormal(s, e, t, n)
            }, ne.prototype.fromAttribute = function (s, e, t) {
                return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(s, e, t)
            }, ne.prototype.distanceToManhattan = function (s) {
                return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(s)
            }, ne.prototype.lengthManhattan = function () {
                return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
            }, y.prototype.setEulerFromRotationMatrix = function () {
                console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
            }, y.prototype.setEulerFromQuaternion = function () {
                console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
            }, y.prototype.getPositionFromMatrix = function (s) {
                return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(s)
            }, y.prototype.getScaleFromMatrix = function (s) {
                return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(s)
            }, y.prototype.getColumnFromMatrix = function (s, e) {
                return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, s)
            }, y.prototype.applyProjection = function (s) {
                return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(s)
            }, y.prototype.fromAttribute = function (s, e, t) {
                return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(s, e, t)
            }, y.prototype.distanceToManhattan = function (s) {
                return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(s)
            }, y.prototype.lengthManhattan = function () {
                return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
            }, qe.prototype.fromAttribute = function (s, e, t) {
                return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(s, e, t)
            }, qe.prototype.lengthManhattan = function () {
                return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
            }, Ie.prototype.getChildByName = function (s) {
                return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(s)
            }, Ie.prototype.renderDepth = function () {
                console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
            }, Ie.prototype.translate = function (s, e) {
                return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, s)
            }, Ie.prototype.getWorldRotation = function () {
                console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
            }, Ie.prototype.applyMatrix = function (s) {
                return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(s)
            }, Object.defineProperties(Ie.prototype, {
                eulerOrder: {
                    get: function () {
                        return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
                    },
                    set: function (s) {
                        console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = s
                    }
                },
                useQuaternion: {
                    get: function () {
                        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
                    },
                    set: function () {
                        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
                    }
                }
            }), Ke.prototype.setDrawMode = function () {
                console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
            }, Object.defineProperties(Ke.prototype, {
                drawMode: {
                    get: function () {
                        return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), 0
                    },
                    set: function () {
                        console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
                    }
                }
            }), mt.prototype.setLens = function (s, e) {
                console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), e !== void 0 && (this.filmGauge = e), this.setFocalLength(s)
            }, Object.defineProperties(qn.prototype, {
                onlyShadow: {
                    set: function () {
                        console.warn("THREE.Light: .onlyShadow has been removed.")
                    }
                },
                shadowCameraFov: {
                    set: function (s) {
                        console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = s
                    }
                },
                shadowCameraLeft: {
                    set: function (s) {
                        console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = s
                    }
                },
                shadowCameraRight: {
                    set: function (s) {
                        console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = s
                    }
                },
                shadowCameraTop: {
                    set: function (s) {
                        console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = s
                    }
                },
                shadowCameraBottom: {
                    set: function (s) {
                        console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = s
                    }
                },
                shadowCameraNear: {
                    set: function (s) {
                        console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = s
                    }
                },
                shadowCameraFar: {
                    set: function (s) {
                        console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = s
                    }
                },
                shadowCameraVisible: {
                    set: function () {
                        console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
                    }
                },
                shadowBias: {
                    set: function (s) {
                        console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = s
                    }
                },
                shadowDarkness: {
                    set: function () {
                        console.warn("THREE.Light: .shadowDarkness has been removed.")
                    }
                },
                shadowMapWidth: {
                    set: function (s) {
                        console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = s
                    }
                },
                shadowMapHeight: {
                    set: function (s) {
                        console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = s
                    }
                }
            }), Object.defineProperties(Xe.prototype, {
                length: {
                    get: function () {
                        return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
                    }
                },
                dynamic: {
                    get: function () {
                        return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === $t
                    },
                    set: function () {
                        console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage($t)
                    }
                }
            }), Xe.prototype.setDynamic = function (s) {
                return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(s === !0 ? $t : Qt), this
            }, Xe.prototype.copyIndicesArray = function () {
                console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
            }, Xe.prototype.setArray = function () {
                console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
            }, Pe.prototype.addIndex = function (s) {
                console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(s)
            }, Pe.prototype.addAttribute = function (s, e) {
                return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? s === "index" ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(s, e) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(s, new Xe(arguments[1], arguments[2])))
            }, Pe.prototype.addDrawCall = function (s, e, t) {
                t !== void 0 && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(s, e)
            }, Pe.prototype.clearDrawCalls = function () {
                console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
            }, Pe.prototype.computeOffsets = function () {
                console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
            }, Pe.prototype.removeAttribute = function (s) {
                return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(s)
            }, Pe.prototype.applyMatrix = function (s) {
                return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(s)
            }, Object.defineProperties(Pe.prototype, {
                drawcalls: {
                    get: function () {
                        return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
                    }
                },
                offsets: {
                    get: function () {
                        return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
                    }
                }
            }), ir.prototype.dispose = function () {
                console.error("THREE.Scene: .dispose() has been removed.")
            }, Object.defineProperties(lt.prototype, {
                wrapAround: {
                    get: function () {
                        console.warn("THREE.Material: .wrapAround has been removed.")
                    },
                    set: function () {
                        console.warn("THREE.Material: .wrapAround has been removed.")
                    }
                },
                overdraw: {
                    get: function () {
                        console.warn("THREE.Material: .overdraw has been removed.")
                    },
                    set: function () {
                        console.warn("THREE.Material: .overdraw has been removed.")
                    }
                },
                wrapRGB: {
                    get: function () {
                        return console.warn("THREE.Material: .wrapRGB has been removed."), new fe
                    }
                },
                shading: {
                    get: function () {
                        console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
                    },
                    set: function (s) {
                        console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = s === 1
                    }
                },
                stencilMask: {
                    get: function () {
                        return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask
                    },
                    set: function (s) {
                        console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = s
                    }
                }
            }), Object.defineProperties(rn.prototype, {
                derivatives: {
                    get: function () {
                        return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
                    },
                    set: function (s) {
                        console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = s
                    }
                }
            }), De.prototype.clearTarget = function (s, e, t, n) {
                console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(s), this.clear(e, t, n)
            }, De.prototype.animate = function (s) {
                console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(s)
            }, De.prototype.getCurrentRenderTarget = function () {
                return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
            }, De.prototype.getMaxAnisotropy = function () {
                return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
            }, De.prototype.getPrecision = function () {
                return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
            }, De.prototype.resetGLState = function () {
                return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
            }, De.prototype.supportsFloatTextures = function () {
                return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
            }, De.prototype.supportsHalfFloatTextures = function () {
                return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
            }, De.prototype.supportsStandardDerivatives = function () {
                return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
            }, De.prototype.supportsCompressedTextureS3TC = function () {
                return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
            }, De.prototype.supportsCompressedTexturePVRTC = function () {
                return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
            }, De.prototype.supportsBlendMinMax = function () {
                return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
            }, De.prototype.supportsVertexTextures = function () {
                return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
            }, De.prototype.supportsInstancedArrays = function () {
                return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
            }, De.prototype.enableScissorTest = function (s) {
                console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(s)
            }, De.prototype.initMaterial = function () {
                console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
            }, De.prototype.addPrePlugin = function () {
                console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
            }, De.prototype.addPostPlugin = function () {
                console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
            }, De.prototype.updateShadowMap = function () {
                console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
            }, De.prototype.setFaceCulling = function () {
                console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
            }, De.prototype.allocTextureUnit = function () {
                console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
            }, De.prototype.setTexture = function () {
                console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
            }, De.prototype.setTexture2D = function () {
                console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
            }, De.prototype.setTextureCube = function () {
                console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
            }, De.prototype.getActiveMipMapLevel = function () {
                return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel()
            }, Object.defineProperties(De.prototype, {
                shadowMapEnabled: {
                    get: function () {
                        return this.shadowMap.enabled
                    },
                    set: function (s) {
                        console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = s
                    }
                },
                shadowMapType: {
                    get: function () {
                        return this.shadowMap.type
                    },
                    set: function (s) {
                        console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = s
                    }
                },
                shadowMapCullFace: {
                    get: function () {
                        console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
                    },
                    set: function () {
                        console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
                    }
                },
                context: {
                    get: function () {
                        return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext()
                    }
                },
                vr: {
                    get: function () {
                        return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr
                    }
                },
                gammaInput: {
                    get: function () {
                        return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1
                    },
                    set: function () {
                        console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")
                    }
                },
                gammaOutput: {
                    get: function () {
                        return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1
                    },
                    set: function (s) {
                        console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = s === !0 ? 3001 : un
                    }
                },
                toneMappingWhitePoint: {
                    get: function () {
                        return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1
                    },
                    set: function () {
                        console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")
                    }
                }
            }), Object.defineProperties(gs.prototype, {
                cullFace: {
                    get: function () {
                        console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
                    },
                    set: function () {
                        console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
                    }
                },
                renderReverseSided: {
                    get: function () {
                        console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
                    },
                    set: function () {
                        console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
                    }
                },
                renderSingleSided: {
                    get: function () {
                        console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
                    },
                    set: function () {
                        console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
                    }
                }
            }), Object.defineProperties(gn.prototype, {
                wrapS: {
                    get: function () {
                        return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
                    },
                    set: function (s) {
                        console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = s
                    }
                },
                wrapT: {
                    get: function () {
                        return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
                    },
                    set: function (s) {
                        console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = s
                    }
                },
                magFilter: {
                    get: function () {
                        return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
                    },
                    set: function (s) {
                        console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = s
                    }
                },
                minFilter: {
                    get: function () {
                        return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
                    },
                    set: function (s) {
                        console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = s
                    }
                },
                anisotropy: {
                    get: function () {
                        return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
                    },
                    set: function (s) {
                        console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = s
                    }
                },
                offset: {
                    get: function () {
                        return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
                    },
                    set: function (s) {
                        console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = s
                    }
                },
                repeat: {
                    get: function () {
                        return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
                    },
                    set: function (s) {
                        console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = s
                    }
                },
                format: {
                    get: function () {
                        return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
                    },
                    set: function (s) {
                        console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = s
                    }
                },
                type: {
                    get: function () {
                        return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
                    },
                    set: function (s) {
                        console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = s
                    }
                },
                generateMipmaps: {
                    get: function () {
                        return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
                    },
                    set: function (s) {
                        console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = s
                    }
                }
            }), Ki.prototype.updateCubeMap = function (s, e) {
                return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(s, e)
            }, Ki.prototype.clear = function (s, e, t, n) {
                return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(s, e, t, n)
            }, fn.crossOrigin = void 0, fn.loadTexture = function (s, e, t, n) {
                console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
                const i = new Ns;
                i.setCrossOrigin(this.crossOrigin);
                const r = i.load(s, t, void 0, n);
                return e && (r.mapping = e), r
            }, fn.loadTextureCube = function (s, e, t, n) {
                console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
                const i = new El;
                i.setCrossOrigin(this.crossOrigin);
                const r = i.load(s, t, void 0, n);
                return e && (r.mapping = e), r
            }, fn.loadCompressedTexture = function () {
                console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
            }, fn.loadCompressedTextureCube = function () {
                console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
            }, typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
                detail: {
                    revision: "128"
                }
            })), typeof window != "undefined" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "128");
            const Pl = /^[og]\s*(.+)?/,
                Dl = /^mtllib /,
                Il = /^usemtl /,
                Nl = /^usemap /,
                ia = new y,
                gr = new y,
                ra = new y,
                sa = new y,
                yt = new y;

            function zl() {
                const s = {
                    objects: [],
                    object: {},
                    vertices: [],
                    normals: [],
                    colors: [],
                    uvs: [],
                    materials: {},
                    materialLibraries: [],
                    startObject: function (e, t) {
                        if (this.object && this.object.fromDeclaration === !1) return this.object.name = e, void (this.object.fromDeclaration = t !== !1);
                        const n = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : void 0;
                        if (this.object && typeof this.object._finalize == "function" && this.object._finalize(!0), this.object = {
                            name: e || "",
                            fromDeclaration: t !== !1,
                            geometry: {
                                vertices: [],
                                normals: [],
                                colors: [],
                                uvs: [],
                                hasUVIndices: !1
                            },
                            materials: [],
                            smooth: !0,
                            startMaterial: function (i, r) {
                                const o = this._finalize(!1);
                                o && (o.inherited || o.groupCount <= 0) && this.materials.splice(o.index, 1);
                                const a = {
                                    index: this.materials.length,
                                    name: i || "",
                                    mtllib: Array.isArray(r) && r.length > 0 ? r[r.length - 1] : "",
                                    smooth: o !== void 0 ? o.smooth : this.smooth,
                                    groupStart: o !== void 0 ? o.groupEnd : 0,
                                    groupEnd: -1,
                                    groupCount: -1,
                                    inherited: !1,
                                    clone: function (l) {
                                        const c = {
                                            index: typeof l == "number" ? l : this.index,
                                            name: this.name,
                                            mtllib: this.mtllib,
                                            smooth: this.smooth,
                                            groupStart: 0,
                                            groupEnd: -1,
                                            groupCount: -1,
                                            inherited: !1
                                        };
                                        return c.clone = this.clone.bind(c), c
                                    }
                                };
                                return this.materials.push(a), a
                            },
                            currentMaterial: function () {
                                if (this.materials.length > 0) return this.materials[this.materials.length - 1]
                            },
                            _finalize: function (i) {
                                const r = this.currentMaterial();
                                if (r && r.groupEnd === -1 && (r.groupEnd = this.geometry.vertices.length / 3, r.groupCount = r.groupEnd - r.groupStart, r.inherited = !1), i && this.materials.length > 1)
                                    for (let o = this.materials.length - 1; o >= 0; o--) this.materials[o].groupCount <= 0 && this.materials.splice(o, 1);
                                return i && this.materials.length === 0 && this.materials.push({
                                    name: "",
                                    smooth: this.smooth
                                }), r
                            }
                        }, n && n.name && typeof n.clone == "function") {
                            const i = n.clone(0);
                            i.inherited = !0, this.object.materials.push(i)
                        }
                        this.objects.push(this.object)
                    },
                    finalize: function () {
                        this.object && typeof this.object._finalize == "function" && this.object._finalize(!0)
                    },
                    parseVertexIndex: function (e, t) {
                        const n = parseInt(e, 10);
                        return 3 * (n >= 0 ? n - 1 : n + t / 3)
                    },
                    parseNormalIndex: function (e, t) {
                        const n = parseInt(e, 10);
                        return 3 * (n >= 0 ? n - 1 : n + t / 3)
                    },
                    parseUVIndex: function (e, t) {
                        const n = parseInt(e, 10);
                        return 2 * (n >= 0 ? n - 1 : n + t / 2)
                    },
                    addVertex: function (e, t, n) {
                        const i = this.vertices,
                            r = this.object.geometry.vertices;
                        r.push(i[e + 0], i[e + 1], i[e + 2]), r.push(i[t + 0], i[t + 1], i[t + 2]), r.push(i[n + 0], i[n + 1], i[n + 2])
                    },
                    addVertexPoint: function (e) {
                        const t = this.vertices;
                        this.object.geometry.vertices.push(t[e + 0], t[e + 1], t[e + 2])
                    },
                    addVertexLine: function (e) {
                        const t = this.vertices;
                        this.object.geometry.vertices.push(t[e + 0], t[e + 1], t[e + 2])
                    },
                    addNormal: function (e, t, n) {
                        const i = this.normals,
                            r = this.object.geometry.normals;
                        r.push(i[e + 0], i[e + 1], i[e + 2]), r.push(i[t + 0], i[t + 1], i[t + 2]), r.push(i[n + 0], i[n + 1], i[n + 2])
                    },
                    addFaceNormal: function (e, t, n) {
                        const i = this.vertices,
                            r = this.object.geometry.normals;
                        ia.fromArray(i, e), gr.fromArray(i, t), ra.fromArray(i, n), yt.subVectors(ra, gr), sa.subVectors(ia, gr), yt.cross(sa), yt.normalize(), r.push(yt.x, yt.y, yt.z), r.push(yt.x, yt.y, yt.z), r.push(yt.x, yt.y, yt.z)
                    },
                    addColor: function (e, t, n) {
                        const i = this.colors,
                            r = this.object.geometry.colors;
                        i[e] !== void 0 && r.push(i[e + 0], i[e + 1], i[e + 2]), i[t] !== void 0 && r.push(i[t + 0], i[t + 1], i[t + 2]), i[n] !== void 0 && r.push(i[n + 0], i[n + 1], i[n + 2])
                    },
                    addUV: function (e, t, n) {
                        const i = this.uvs,
                            r = this.object.geometry.uvs;
                        r.push(i[e + 0], i[e + 1]), r.push(i[t + 0], i[t + 1]), r.push(i[n + 0], i[n + 1])
                    },
                    addDefaultUV: function () {
                        const e = this.object.geometry.uvs;
                        e.push(0, 0), e.push(0, 0), e.push(0, 0)
                    },
                    addUVLine: function (e) {
                        const t = this.uvs;
                        this.object.geometry.uvs.push(t[e + 0], t[e + 1])
                    },
                    addFace: function (e, t, n, i, r, o, a, l, c) {
                        const h = this.vertices.length;
                        let u = this.parseVertexIndex(e, h),
                            d = this.parseVertexIndex(t, h),
                            p = this.parseVertexIndex(n, h);
                        if (this.addVertex(u, d, p), this.addColor(u, d, p), a !== void 0 && a !== "") {
                            const g = this.normals.length;
                            u = this.parseNormalIndex(a, g), d = this.parseNormalIndex(l, g), p = this.parseNormalIndex(c, g), this.addNormal(u, d, p)
                        } else this.addFaceNormal(u, d, p);
                        if (i !== void 0 && i !== "") {
                            const g = this.uvs.length;
                            u = this.parseUVIndex(i, g), d = this.parseUVIndex(r, g), p = this.parseUVIndex(o, g), this.addUV(u, d, p), this.object.geometry.hasUVIndices = !0
                        } else this.addDefaultUV()
                    },
                    addPointGeometry: function (e) {
                        this.object.geometry.type = "Points";
                        const t = this.vertices.length;
                        for (let n = 0, i = e.length; n < i; n++) {
                            const r = this.parseVertexIndex(e[n], t);
                            this.addVertexPoint(r), this.addColor(r)
                        }
                    },
                    addLineGeometry: function (e, t) {
                        this.object.geometry.type = "Line";
                        const n = this.vertices.length,
                            i = this.uvs.length;
                        for (let r = 0, o = e.length; r < o; r++) this.addVertexLine(this.parseVertexIndex(e[r], n));
                        for (let r = 0, o = t.length; r < o; r++) this.addUVLine(this.parseUVIndex(t[r], i))
                    }
                };
                return s.startObject("", !1), s
            }
            class Ol extends an {
                constructor(e) {
                    super(e), this.materials = null
                }
                load(e, t, n, i) {
                    const r = this,
                        o = new Sl(this.manager);
                    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function (a) {
                        try {
                            t(r.parse(a))
                        } catch (l) {
                            i ? i(l) : console.error(l), r.manager.itemError(e)
                        }
                    }, n, i)
                }
                setMaterials(e) {
                    return this.materials = e, this
                }
                parse(e) {
                    const t = new zl;
                    e.indexOf(`\r
`) !== -1 && (e = e.replace(/\r\n/g, `
`)), e.indexOf(`\\
`) !== -1 && (e = e.replace(/\\\n/g, ""));
                    const n = e.split(`
`);
                    let i = "",
                        r = "",
                        o = 0,
                        a = [];
                    const l = typeof "".trimLeft == "function";
                    for (let h = 0, u = n.length; h < u; h++)
                        if (i = n[h], i = l ? i.trimLeft() : i.trim(), o = i.length, o !== 0 && (r = i.charAt(0), r !== "#"))
                            if (r === "v") {
                                const d = i.split(/\s+/);
                                switch (d[0]) {
                                    case "v":
                                        t.vertices.push(parseFloat(d[1]), parseFloat(d[2]), parseFloat(d[3])), d.length >= 7 ? t.colors.push(parseFloat(d[4]), parseFloat(d[5]), parseFloat(d[6])) : t.colors.push(void 0, void 0, void 0);
                                        break;
                                    case "vn":
                                        t.normals.push(parseFloat(d[1]), parseFloat(d[2]), parseFloat(d[3]));
                                        break;
                                    case "vt":
                                        t.uvs.push(parseFloat(d[1]), parseFloat(d[2]))
                                }
                            } else if (r === "f") {
                                const d = i.substr(1).trim().split(/\s+/),
                                    p = [];
                                for (let f = 0, m = d.length; f < m; f++) {
                                    const v = d[f];
                                    if (v.length > 0) {
                                        const w = v.split("/");
                                        p.push(w)
                                    }
                                }
                                const g = p[0];
                                for (let f = 1, m = p.length - 1; f < m; f++) {
                                    const v = p[f],
                                        w = p[f + 1];
                                    t.addFace(g[0], v[0], w[0], g[1], v[1], w[1], g[2], v[2], w[2])
                                }
                            } else if (r === "l") {
                                const d = i.substring(1).trim().split(" ");
                                let p = [];
                                const g = [];
                                if (i.indexOf("/") === -1) p = d;
                                else
                                    for (let f = 0, m = d.length; f < m; f++) {
                                        const v = d[f].split("/");
                                        v[0] !== "" && p.push(v[0]), v[1] !== "" && g.push(v[1])
                                    }
                                t.addLineGeometry(p, g)
                            } else if (r === "p") {
                                const d = i.substr(1).trim().split(" ");
                                t.addPointGeometry(d)
                            } else if ((a = Pl.exec(i)) !== null) {
                                const d = (" " + a[0].substr(1).trim()).substr(1);
                                t.startObject(d)
                            } else if (Il.test(i)) t.object.startMaterial(i.substring(7).trim(), t.materialLibraries);
                            else if (Dl.test(i)) t.materialLibraries.push(i.substring(7).trim());
                            else if (Nl.test(i)) console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
                            else if (r === "s") {
                                if (a = i.split(" "), a.length > 1) {
                                    const p = a[1].trim().toLowerCase();
                                    t.object.smooth = p !== "0" && p !== "off"
                                } else t.object.smooth = !0;
                                const d = t.object.currentMaterial();
                                d && (d.smooth = t.object.smooth)
                            } else {
                                if (i === "\0") continue;
                                console.warn('THREE.OBJLoader: Unexpected line: "' + i + '"')
                            }
                    t.finalize();
                    const c = new ft;
                    if (c.materialLibraries = [].concat(t.materialLibraries), !(t.objects.length === 1 && t.objects[0].geometry.vertices.length === 0))
                        for (let h = 0, u = t.objects.length; h < u; h++) {
                            const d = t.objects[h],
                                p = d.geometry,
                                g = d.materials,
                                f = p.type === "Line",
                                m = p.type === "Points";
                            let v = !1;
                            if (p.vertices.length === 0) continue;
                            const w = new Pe;
                            w.setAttribute("position", new Me(p.vertices, 3)), p.normals.length > 0 && w.setAttribute("normal", new Me(p.normals, 3)), p.colors.length > 0 && (v = !0, w.setAttribute("color", new Me(p.colors, 3))), p.hasUVIndices === !0 && w.setAttribute("uv", new Me(p.uvs, 2));
                            const M = [];
                            for (let A = 0, L = g.length; A < L; A++) {
                                const b = g[A],
                                    C = b.name + "_" + b.smooth + "_" + v;
                                let z = t.materials[C];
                                if (this.materials !== null)
                                    if (z = this.materials.create(b.name), !f || !z || z instanceof Vn) {
                                        if (m && z && !(z instanceof sn)) {
                                            const R = new sn({
                                                size: 10,
                                                sizeAttenuation: !1
                                            });
                                            lt.prototype.copy.call(R, z), R.color.copy(z.color), R.map = z.map, z = R
                                        }
                                    } else {
                                        const R = new Vn;
                                        lt.prototype.copy.call(R, z), R.color.copy(z.color), z = R
                                    }
                                z === void 0 && (z = f ? new Vn : m ? new sn({
                                    size: 1,
                                    sizeAttenuation: !1
                                }) : new Ds, z.name = b.name, z.flatShading = !b.smooth, z.vertexColors = v, t.materials[C] = z), M.push(z)
                            }
                            let _;
                            if (M.length > 1) {
                                for (let A = 0, L = g.length; A < L; A++) {
                                    const b = g[A];
                                    w.addGroup(b.groupStart, b.groupCount, A)
                                }
                                _ = f ? new sr(w, M) : m ? new Wn(w, M) : new Ke(w, M)
                            } else _ = f ? new sr(w, M[0]) : m ? new Wn(w, M[0]) : new Ke(w, M[0]);
                            _.name = d.name, c.add(_)
                        } else if (t.vertices.length > 0) {
                            const h = new sn({
                                size: 1,
                                sizeAttenuation: !1
                            }),
                                u = new Pe;
                            u.setAttribute("position", new Me(t.vertices, 3)), t.colors.length > 0 && t.colors[0] !== void 0 && (u.setAttribute("color", new Me(t.colors, 3)), h.vertexColors = !0);
                            const d = new Wn(u, h);
                            c.add(d)
                        }
                    return c
                }
            }
            const Pn = 60,
                Si = 25,
                vr = new nn(.3, 4.6, .05),
                Xn = ".jsWebglGlobe",
                aa = ".jsWebglGlobeData",
                oa = "PR_OPENED",
                la = "PR_MERGED",
                ca = "CUSTOM",
                Ei = 16777215,
                ha = 2197759,
                da = 16018366,
                Dn = "PAUSE",
                In = "RESUME";
            var Fl = Be(370);
            const _t = Be.n(Fl)()(new class { }().prototype),
                ze = {},
                Hl = new y,
                Yn = Math.PI / 180,
                Ul = 180 / Math.PI;

            function Ti(s) {
                return s * Yn
            }

            function ua(s) {
                return s * Ul
            }

            function pa(s, e, t) {
                const n = t || new ae;
                n.identity(), n.makeRotationY(e), n.multiply(s.matrix), s.matrix.copy(n), s.rotation.setFromRotationMatrix(s.matrix)
            }

            function Nn(s) {
                s instanceof Ke && (s.geometry && s.geometry.dispose(), s.material && (s.material.map && s.material.map.dispose(), s.material.lightMap && s.material.lightMap.dispose(), s.material.bumpMap && s.material.bumpMap.dispose(), s.material.normalMap && s.material.normalMap.dispose(), s.material.specularMap && s.material.specularMap.dispose(), s.material.envMap && s.material.envMap.dispose(), s.material.emissiveMap && s.material.emissiveMap.dispose(), s.material.metalnessMap && s.material.metalnessMap.dispose(), s.material.roughnessMap && s.material.roughnessMap.dispose(), s.material.dispose()))
            }

            function xr(s, e) {
                for (let t = s.children.length - 1; t >= 0; t--) {
                    const n = s.children[t];
                    xr(n, e), typeof e == "function" && e(n)
                }
            }

            function Bl(s, e, t, n) {
                s = Ti(s), e = Ti(e), t = Ti(t);
                const i = (n = Ti(n)) - e,
                    r = Math.cos(t) * Math.cos(i),
                    o = Math.cos(t) * Math.sin(i),
                    a = Math.atan2(Math.sin(s) + Math.sin(t), Math.sqrt((Math.cos(s) + r) * (Math.cos(s) + r) + o * o)),
                    l = e + Math.atan2(o, Math.cos(s) + r);
                return [ua(a), ua(l)]
            }

            function wt(s, e, t, n) {
                n = n || new y;
                const i = (90 - s) * Yn,
                    r = (e + 180) * Yn;
                return n.set(-t * Math.sin(i) * Math.cos(r), t * Math.cos(i), t * Math.sin(i) * Math.sin(r)), n
            }

            function yr() {
                this.array = null
            }
            class Gl {
                constructor(e) {
                    this.props = e, this.init()
                }
                init() {
                    const {
                        radius: e,
                        detail: t = 50,
                        renderer: n,
                        shadowPoint: i,
                        highlightPoint: r,
                        highlightColor: o,
                        frontHighlightColor: a = 3555965,
                        waterColor: l = 857395,
                        landColorFront: c = 16777215,
                        shadowDist: h,
                        highlightDist: u,
                        frontPoint: d
                    } = this.props, p = new Rs(e, t, t), g = new or({
                        color: l,
                        metalness: 0,
                        roughness: .9
                    });
                    this.uniforms = [], g.onBeforeCompile = m => {
                        m.uniforms.shadowDist = {
                            value: h
                        }, m.uniforms.highlightDist = {
                            value: u
                        }, m.uniforms.shadowPoint = {
                            value: new y().copy(i)
                        }, m.uniforms.highlightPoint = {
                            value: new y().copy(r)
                        }, m.uniforms.frontPoint = {
                            value: new y().copy(d)
                        }, m.uniforms.highlightColor = {
                            value: new fe(o)
                        }, m.uniforms.frontHighlightColor = {
                            value: new fe(a)
                        }, m.vertexShader = `#define GLSLIFY 1
#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

varying vec3 vWorldPosition;

void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	// # include <worldpos_vertex>
    vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;
	vWorldPosition = worldPosition.xyz;
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, m.fragmentShader = `#define GLSLIFY 1
#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSPARENCY
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSPARENCY
	uniform float transparency;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

uniform float shadowDist;
uniform float highlightDist;
uniform vec3 shadowPoint;
uniform vec3 highlightPoint;
uniform vec3 frontPoint;
uniform vec3 highlightColor;
uniform vec3 frontHighlightColor;

varying vec3 vWorldPosition;

void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#ifdef USE_MAP

		vec4 texelColor = texture2D( map, vUv );
		texelColor = mapTexelToLinear( texelColor );
		
		#ifndef IS_FILL
			diffuseColor *= texelColor;
		#endif

	#endif
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSPARENCY
		diffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );
	#endif

    float dist;
	float distZ;

    // highlights
	#ifdef USE_HIGHLIGHT
		dist = distance(vWorldPosition, highlightPoint);
		distZ = distance(vWorldPosition.z, 0.0);
		outgoingLight = mix(highlightColor, outgoingLight, smoothstep(0.0, highlightDist, dist) * smoothstep(0.0, 3.0, pow(distZ, 0.5)));
        outgoingLight = mix(outgoingLight * 2.0, outgoingLight, smoothstep(0.0, 12.0, distZ));
	#endif

    // front hightlight
    #ifdef USE_FRONT_HIGHLIGHT
        dist = distance(vWorldPosition * vec3(0.875, 0.5, 1.0), frontPoint);
        outgoingLight = mix(frontHighlightColor * 1.6, outgoingLight, smoothstep(0.0, 15.0, dist));
    #endif

    // shadows
    dist = distance(vWorldPosition, shadowPoint);
	outgoingLight = mix(outgoingLight * 0.01, outgoingLight, smoothstep(0.0, shadowDist, dist));
    // shadow debug
	// outgoingLight = mix(vec3(1.0, 0.0, 0.0), outgoingLight, smoothstep(0.0, shadowDist, dist));

	#ifdef IS_FILL
		outgoingLight = mix(outgoingLight, outgoingLight * 0.5, 1.0 - texelColor.g * 1.5);
	#endif

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, this.uniforms.push(m.uniforms)
                    }, g.defines = {
                        USE_HIGHLIGHT: 1,
                        USE_HIGHLIGHT_ALT: 1,
                        USE_FRONT_HIGHLIGHT: 1,
                        DITHERING: 1
                    }, this.mesh = new ft;
                    const f = new Ke(p, g);
                    f.renderOrder = 1, this.mesh.add(f), this.meshFill = f, this.materials = [g]
                }
                setShadowPoint(e) {
                    this.uniforms && this.uniforms.forEach(t => {
                        t.shadowPoint.value.copy(e)
                    })
                }
                setHighlightPoint(e) {
                    this.uniforms && this.uniforms.forEach(t => {
                        t.highlightPoint.value.copy(e)
                    })
                }
                setFrontPoint(e) {
                    this.uniforms && this.uniforms.forEach(t => {
                        t.frontPoint.value.copy(e)
                    })
                }
                setShadowDist(e) {
                    this.uniforms && this.uniforms.forEach(t => {
                        t.shadowDist.value = e
                    })
                }
                setHighlightDist(e) {
                    this.uniforms && this.uniforms.forEach(t => {
                        t.highlightDist.value = e
                    })
                }
                dispose() {
                    this.mesh = null, this.materials = null, this.uniforms = null, this.meshFill = null
                }
            }

            function Zn(s, e, t, n, i) {
                return r = function (a, l, c) {
                    return (a - l) / (c - l) || 0
                }(s, e, t), (i - (o = n)) * r + o;
                var r, o
            }

            function _r(s, e, t) {
                return Math.max(e, Math.min(s, t))
            }
            class Vl {
                constructor(e) {
                    this.props = e, this.handleMouseDown = this.handleMouseDown.bind(this), this.handleMouseMove = this.handleMouseMove.bind(this), this.handleMouseUp = this.handleMouseUp.bind(this), this.handleMouseOut = this.handleMouseOut.bind(this), this.handleTouchStart = this.handleTouchStart.bind(this), this.handleTouchMove = this.handleTouchMove.bind(this), this.handleTouchEnd = this.handleTouchEnd.bind(this), this.handlePause = this.handlePause.bind(this), this.handleResume = this.handleResume.bind(this), this.init()
                }
                init() {
                    this.dragging = !1, this.mouse = new ne(.5, .5), this.lastMouse = new ne(.5, .5), this.target = new y(0, 0), this.matrix = new ae, this.velocity = new ne, this.autoRotationSpeedScalar = 1, this.autoRotationSpeedScalarTarget = 1, this.addListeners(), _t.on(Dn, this.handlePause), _t.on(In, this.handleResume)
                }
                addListeners() {
                    const {
                        domElement: e
                    } = this.props;
                    this.removeListeners();
                    const t = {
                        capture: !1,
                        passive: !0
                    };
                    e.addEventListener("mousedown", this.handleMouseDown, t), e.addEventListener("mousemove", this.handleMouseMove, t), e.addEventListener("mouseup", this.handleMouseUp, t), e.addEventListener("mouseout", this.handleMouseOut, t), e.addEventListener("mouseleave", this.handleMouseOut, t), e.addEventListener("touchstart", this.handleTouchStart, t), e.addEventListener("touchmove", this.handleTouchMove, t), e.addEventListener("touchend", this.handleTouchEnd, t), e.addEventListener("touchcancel", this.handleTouchEnd, t)
                }
                removeListeners() {
                    const {
                        domElement: e
                    } = this.props;
                    e.removeEventListener("mousedown", this.handleMouseDown), e.removeEventListener("mousemove", this.handleMouseMove), e.removeEventListener("mouseup", this.handleMouseUp), e.removeEventListener("mouseout", this.handleMouseOut), e.removeEventListener("mouseleave", this.handleMouseOut), e.removeEventListener("touchstart", this.handleTouchStart), e.removeEventListener("touchmove", this.handleTouchMove), e.removeEventListener("touchend", this.handleTouchEnd), e.removeEventListener("touchcancel", this.handleTouchEnd)
                }
                setMouse(e) {
                    const {
                        width: t,
                        height: n
                    } = ze.parentNode.getBoundingClientRect();
                    this.mouse.x = e.clientX / t * 2 - 1, this.mouse.y = -e.clientY / n * 2 + 1
                }
                setDragging(e) {
                    this.dragging = e;
                    const {
                        setDraggingCallback: t
                    } = this.props;
                    t && typeof t == "function" && t(e)
                }
                handlePause() {
                    this.removeListeners()
                }
                handleResume() {
                    this.addListeners()
                }
                handleMouseDown(e) {
                    this.setMouse(e), this.setDragging(!0)
                }
                handleMouseMove(e) {
                    this.setMouse(e)
                }
                handleMouseUp(e) {
                    this.setMouse(e), this.setDragging(!1)
                }
                handleMouseOut() {
                    this.setDragging(!1)
                }
                handleTouchStart(e) {
                    this.setMouse(e.changedTouches[0]), this.lastMouse.copy(this.mouse), this.setDragging(!0)
                }
                handleTouchMove(e) {
                    this.setMouse(e.changedTouches[0])
                }
                handleTouchEnd(e) {
                    this.setMouse(e.changedTouches[0]), this.setDragging(!1)
                }
                update(e = .01) {
                    let t = 0,
                        n = 0;
                    const {
                        object: i,
                        objectContainer: r,
                        rotateSpeed: o,
                        autoRotationSpeed: a,
                        easing: l = .1,
                        maxRotationX: c = .3
                    } = this.props;
                    this.dragging && (t = this.mouse.x - this.lastMouse.x, n = this.mouse.y - this.lastMouse.y, this.target.y = _r(this.target.y - n, -c, .6 * c)), r.rotation.x += (this.target.y + vr.x - r.rotation.x) * l, this.target.x += (t - this.target.x) * l, pa(i, this.target.x * o, this.matrix), this.dragging || pa(i, e * a * this.autoRotationSpeedScalar, this.matrix), this.autoRotationSpeedScalar += .05 * (this.autoRotationSpeedScalarTarget - this.autoRotationSpeedScalar), this.lastMouse.copy(this.mouse), this.velocity.set(t, n)
                }
                dispose() {
                    this.removeListeners(), _t.off(Dn, this.handlePause), _t.off(In, this.handleResume), this.dragging = null, this.mouse = null, this.lastMouse = null, this.target = null, this.matrix = null, this.velocity = null, this.autoRotationSpeedScalar = null, this.autoRotationSpeedScalarTarget = null
                }
            }
            class Wl {
                constructor(e) {
                    this.props = e, this.init()
                }
                init() {
                    const {
                        maxAmount: e = 1e3,
                        data: t = [],
                        radius: n = 1,
                        camera: i,
                        maxIndexDistance: r,
                        visibleIndex: o,
                        colors: {
                            openPrColor: a,
                            openPrParticleColor: l
                        }
                    } = this.props, {
                        pixelRatio: c,
                        spikeRadius: h = .06
                    } = ze;
                    this.mesh = new ft;
                    const u = new Et({
                        color: 65280,
                        visible: !1
                    }),
                        d = new ui(.75, 1, .75);
                    d.translate(0, .5, 0), d.rotateX(-Math.PI / 2);
                    const p = new vi(d, u, e);
                    this.mesh.add(p);
                    const g = new Et({
                        color: a,
                        transparent: !0,
                        opacity: .4,
                        alphaTest: .05,
                        blending: 2
                    });
                    g.onBeforeCompile = B => {
                        B.uniforms.cameraPosition = {
                            value: i.position
                        }, B.uniforms.radius = {
                            value: n
                        }, B.uniforms.visibleIndex = {
                            value: o
                        }, B.uniforms.maxIndexDistance = {
                            value: r
                        }, B.uniforms.highlightIndex = {
                            value: -9999
                        }, B.vertexShader = `#define GLSLIFY 1
#include <common>

uniform float visibleIndex;
uniform float maxIndexDistance;

attribute float index;

varying float vScale;
varying float vIndex;

#ifndef PI
#define PI 3.141592653589793
#endif

float sineInOut(float t) {
  return -0.5 * (cos(PI * t) - 1.0);
}

void main() {
	vIndex = index;

	vec3 pos = position;

	float scale = sineInOut(clamp(smoothstep(maxIndexDistance, 0.0, distance(index, visibleIndex)), 0., 1.));
	pos.z *= scale;
	vScale = scale;

	vec3 transformed = vec3( pos );
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
}`, B.fragmentShader = `#define GLSLIFY 1
uniform vec3 diffuse;
uniform float opacity;

#include <common>

uniform float radius;
uniform float visibleIndex;
uniform float maxIndexDistance;
uniform float highlightIndex;

varying float vScale;
varying float vIndex;

void main() {
	if(vScale <= 0.01){
		discard;
		return;
	}

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <alphatest_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	reflectedLight.indirectDiffuse += vec3( 1.0 );
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	vec3 rgb = outgoingLight.rgb;
	float alpha = diffuseColor.a;

	// highlight when mouse is over
	if(highlightIndex == vIndex){
		rgb = vec3(1.0);
		alpha = 1.0;
	}

	gl_FragColor = vec4( rgb, alpha );
}`, this.spikeUniforms = B.uniforms
                    };
                    const f = [],
                        m = [];
                    for (let B = 0; B < e; B++) f.push(B), m.push(B);
                    const v = new Cs(h * c, h * c, 1, 6, 1, !1);
                    v.setAttribute("index", new $s(new Float32Array(f), 1)), v.translate(0, .5, 0), v.rotateX(-Math.PI / 2);
                    const w = new vi(v, g, e);
                    this.mesh.add(w);
                    const M = new Pe,
                        _ = [],
                        A = [],
                        L = new fe(l),
                        b = new ft,
                        C = this.getDensities(),
                        {
                            densityValues: z,
                            minDensity: R,
                            maxDensity: I
                        } = C;
                    let N = 0;
                    for (let B = 0; B < e; B++) {
                        const q = t[B],
                            {
                                gop: ee
                            } = q,
                            k = ee;
                        wt(k.lat, k.lon, n, b.position);
                        const Z = z[N++];
                        b.scale.z = Zn(Z, R, I, .05 * n, .2 * n), b.lookAt(Hl), b.updateMatrix(), w.setMatrixAt(B, b.matrix), p.setMatrixAt(B, b.matrix), wt(k.lat, k.lon, n + b.scale.z + .25, b.position), _.push(b.position.x, b.position.y, b.position.z), A.push(L.r, L.g, L.b)
                    }
                    M.setAttribute("position", new Me(_, 3).onUpload(yr)), M.setAttribute("color", new Me(A, 3).onUpload(yr)), M.setAttribute("index", new Me(m, 1).onUpload(yr));
                    const D = new sn({
                        alphaTest: .05,
                        size: .8,
                        depthWrite: !1
                    });
                    D.onBeforeCompile = B => {
                        B.uniforms.cameraPosition = {
                            value: i.position
                        }, B.uniforms.radius = {
                            value: n
                        }, B.uniforms.visibleIndex = {
                            value: o
                        }, B.uniforms.maxIndexDistance = {
                            value: r
                        }, B.vertexShader = `#define GLSLIFY 1
uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

uniform float time;
uniform float visibleIndex;
uniform float maxIndexDistance;
uniform float speed;

attribute float index;
attribute vec3 curveStart;
attribute vec3 curveCtrl1;
attribute vec3 curveCtrl2;
attribute vec3 curveEnd;
attribute float timeOffset;

varying float vAlpha;

float quarticInOut(float t) {
  return t < 0.5
    ? +8.0 * pow(t, 4.0)
    : -8.0 * pow(t - 1.0, 4.0) + 1.0;
}

vec3 bezier(vec3 A, vec3 B, vec3 C, vec3 D, float t) {
  vec3 E = mix(A, B, t);
  vec3 F = mix(B, C, t);
  vec3 G = mix(C, D, t);

  vec3 H = mix(E, F, t);
  vec3 I = mix(F, G, t);

  vec3 P = mix(H, I, t);

  return P;
}

vec3 bezier(vec3 A, vec3 B, vec3 C, vec3 D, vec3 E, float t) {
  vec3 A1 = mix(A, B, t);
  vec3 B1 = mix(B, C, t);
  vec3 C1 = mix(C, D, t);
  vec3 D1 = mix(D, E, t);

  vec3 A2 = mix(A1, B1, t);
  vec3 B2 = mix(B1, C1, t);
  vec3 C2 = mix(C1, D1, t);

  vec3 A3 = mix(A2, B2, t);
  vec3 B3 = mix(B2, C2, t);
  
  vec3 P = mix(A3, B3, t);

  return P;
}

vec3 bezier(vec3 A, vec3 B, vec3 C, vec3 D, vec3 E, vec3 F, float t) {
  vec3 A1 = mix(A, B, t);
  vec3 B1 = mix(B, C, t);
  vec3 C1 = mix(C, D, t);
  vec3 D1 = mix(D, E, t);
  vec3 E1 = mix(E, F, t);

  vec3 A2 = mix(A1, B1, t);
  vec3 B2 = mix(B1, C1, t);
  vec3 C2 = mix(C1, D1, t);
  vec3 D2 = mix(D1, E1, t);

  vec3 A3 = mix(A2, B2, t);
  vec3 B3 = mix(B2, C2, t);
  vec3 C3 = mix(C2, D2, t);

  vec3 A4 = mix(A3, B3, t);
  vec3 B4 = mix(B3, C3, t);
  
  vec3 P = mix(A4, B4, t);

  return P;
}

vec3 bezier(vec3 A, vec3 B, vec3 C, vec3 D, vec3 E, vec3 F, vec3 G, float t) {
  vec3 A1 = mix(A, B, t);
  vec3 B1 = mix(B, C, t);
  vec3 C1 = mix(C, D, t);
  vec3 D1 = mix(D, E, t);
  vec3 E1 = mix(E, F, t);
  vec3 F1 = mix(F, G, t);

  vec3 A2 = mix(A1, B1, t);
  vec3 B2 = mix(B1, C1, t);
  vec3 C2 = mix(C1, D1, t);
  vec3 D2 = mix(D1, E1, t);
  vec3 E2 = mix(E1, F1, t);

  vec3 A3 = mix(A2, B2, t);
  vec3 B3 = mix(B2, C2, t);
  vec3 C3 = mix(C2, D2, t);
  vec3 D3 = mix(D2, E2, t);

  vec3 A4 = mix(A3, B3, t);
  vec3 B4 = mix(B3, C3, t);
  vec3 C4 = mix(C3, D3, t);

  vec3 A5 = mix(A4, B4, t);
  vec3 B5 = mix(B4, C4, t);
  
  vec3 P = mix(A5, B5, t);

  return P;
}

void main() {    
	#include <color_vertex>

	// animate along curve and loop
	float t = quarticInOut(fract((time * speed + timeOffset)));

	vec3 pos = position;

	#ifdef USE_CURVE
		pos =  bezier(curveStart, curveCtrl1, curveCtrl2, curveEnd, t);
	#endif

	vec3 transformed = vec3( pos );

	// visible near visibleIndex
	float dist = distance(index, visibleIndex);
	vAlpha = smoothstep(maxIndexDistance * 0.75, 0.0, dist); // show after lines draw in (* 0.75)

	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, B.fragmentShader = `#define GLSLIFY 1
uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

uniform float radius;
uniform float visibleIndex;
uniform float maxIndexDistance;

varying vec3 vViewPosition;
varying float vAlpha;

#define V0 vec3(0.0)

void main() {
	if(vAlpha <= 0.05){
		discard;
		return;
	}

	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>	

	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a * vAlpha );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, this.particleUniforms = B.uniforms
                    };
                    const O = new Wn(M, D);
                    this.mesh.add(O), this.materials = [g, D], this.spikes = w, this.spikeIntersects = p, this.particles = O, this.spikes.renderOrder = 3, this.particles.renderOrder = 4
                }
                getDensities() {
                    const {
                        data: e,
                        maxAmount: t = 1e3,
                        radius: n
                    } = this.props, i = new y, r = [], o = [];
                    for (let c = 0; c < t; c++) {
                        const h = e[c],
                            {
                                gop: u
                            } = h,
                            d = u;
                        d && d.lat && d.lon && (wt(d.lat, d.lon, n, i), r.push(new y().copy(i)), o.push(0))
                    }
                    r.forEach((c, h) => {
                        r.forEach((u, d) => {
                            h !== d && c.distanceTo(u) <= 10 && o[h]++
                        })
                    });
                    let a = 99999,
                        l = -1;
                    return o.forEach(c => {
                        c < a ? a = c : c > l && (l = c)
                    }), {
                        densityValues: o,
                        minDensity: a,
                        maxDensity: l
                    }
                }
                setHighlightIndex(e) {
                    this.spikeUniforms && this.spikeUniforms.highlightIndex.value !== e && (this.spikeUniforms.highlightIndex.value = e)
                }
                update(e) {
                    if (this.spikeUniforms && this.particleUniforms) {
                        const {
                            maxAmount: t,
                            maxIndexDistance: n
                        } = this.props;
                        this.spikeUniforms && (this.spikeUniforms.visibleIndex.value = e), this.particleUniforms && (this.particleUniforms.visibleIndex.value = e);
                        const i = _r(e - n | 0, 0, t),
                            r = 2 * n | 0,
                            o = _r(i + r, 0, t);
                        this.spikes.count = o, this.particles.geometry.setDrawRange(i, r)
                    }
                }
                dispose() {
                    this.mesh && xr(this.mesh, Nn), this.mesh && this.mesh.parent && this.mesh.parent.remove(this.mesh), this.props = null, this.mesh = null, this.spikeUniforms = null, this.particleUniforms = null, this.materials = null, this.spikes = null, this.particles = null
                }
            }
            class kl {
                constructor(e) {
                    this.props = e, this.init()
                }
                init() {
                    const {
                        data: e,
                        radius: t = 1,
                        camera: n,
                        maxAmount: i = e.length,
                        maxIndexDistance: r,
                        visibleIndex: o,
                        colors: a
                    } = this.props, {
                        parentNode: l,
                        lineWidth: c,
                        pixelRatio: h
                    } = ze;
                    this.mesh = new ft, this.isAnimating = [], this.animatingLandingsOut = [], this.landings = [], this.lineMeshes = [], this.lineHitMeshes = [], this.highlightedMesh, this.colors = a, this.landingGeo = new As(.35, 8), this.TUBE_RADIUS_SEGMENTS = 3, this.HIT_DETAIL_FRACTION = 4, this.DATA_INCREMENT_SPEED = 1.5, this.PAUSE_LENGTH_FACTOR = 2, this.MIN_PAUSE = 3e3, this.visibleIndex = 0, this.lineAnimationSpeed = 600;
                    const u = new y,
                        d = new y;
                    this.tubeMaterial = new Et({
                        blending: 2,
                        opacity: .95,
                        transparent: !0,
                        color: this.colors.mergedPrColor
                    }), this.highlightMaterial = new Et({
                        opacity: 1,
                        transparent: !1,
                        color: this.colors.mergedPrColorHighlight
                    }), this.hiddenMaterial = new Et({
                        visible: !1
                    });
                    for (let p = 0; p < i; p++) {
                        const {
                            gop: g,
                            gm: f
                        } = e[p], m = g, v = f, w = wt(m.lat, m.lon, t), M = wt(v.lat, v.lon, t), _ = w.distanceTo(M);
                        if (_ > 1.5) {
                            let A;
                            A = Zn(_, 0, 2 * t, 1, _ > 1.85 * t ? 3.25 : _ > 1.4 * t ? 2.3 : 1.5);
                            const L = Bl(m.lat, m.lon, v.lat, v.lon),
                                b = wt(L[0], L[1], t * A);
                            u.copy(b), d.copy(b);
                            const C = Zn(_, 10, 30, .2, .15),
                                z = Zn(_, 10, 30, .8, .85);
                            A = Zn(_, 0, 2 * t, 1, 1.7);
                            const R = new Mi(w, u, d, M);
                            R.getPoint(C, u), R.getPoint(z, d), u.multiplyScalar(A), d.multiplyScalar(A);
                            const I = new Mi(w, u, d, M),
                                N = wt(v.lat, v.lon, t + p / 1e4),
                                D = wt(v.lat, v.lon, t + 5);
                            this.landings.push({
                                pos: N,
                                lookAt: D
                            });
                            const O = 20 + parseInt(I.getLength()),
                                B = new Ps(I, O, .08, this.TUBE_RADIUS_SEGMENTS, !1),
                                q = new Ps(I, parseInt(O / this.HIT_DETAIL_FRACTION), .6, this.TUBE_RADIUS_SEGMENTS, !1);
                            B.setDrawRange(0, 0), q.setDrawRange(0, 0);
                            const ee = new Ke(B, this.tubeMaterial),
                                k = new Ke(q, this.hiddenMaterial);
                            k.name = "lineMesh", ee.userData = {
                                dataIndex: p
                            }, k.userData = {
                                dataIndex: p,
                                lineMeshIndex: this.lineMeshes.length
                            }, this.lineMeshes.push(ee), this.lineHitMeshes.push(k)
                        }
                    }
                    l.getBoundingClientRect()
                }
                resetHighlight() {
                    this.highlightedMesh != null && (this.highlightedMesh.material = this.tubeMaterial, this.highlightedMesh = null)
                }
                setHighlightObject(e) {
                    const t = parseInt(e.userData.lineMeshIndex),
                        n = this.lineMeshes[t];
                    n != this.highlightedMesh && (n.material = this.highlightMaterial, this.resetHighlight(), this.highlightedMesh = n)
                }
                update(e = .01, t) {
                    let n = parseInt(this.visibleIndex + e * this.DATA_INCREMENT_SPEED);
                    n >= this.lineMeshes.length && (n = 0, this.visibleIndex = 0), n > this.visibleIndex && this.isAnimating.push(this.animatedObjectForIndex(n));
                    let i = [],
                        r = [];
                    for (const o of this.isAnimating) {
                        const a = o.line.geometry.index.count,
                            l = o.line.geometry.drawRange.count + e * this.lineAnimationSpeed;
                        let c = o.line.geometry.drawRange.start + e * this.lineAnimationSpeed;
                        if (l >= a && c < a && this.animateLandingIn(o), l >= a * this.PAUSE_LENGTH_FACTOR + this.MIN_PAUSE && c < a) {
                            if (o.line == this.highlightedMesh) {
                                i.push(o);
                                continue
                            }
                            c = this.TUBE_RADIUS_SEGMENTS * Math.ceil(c / this.TUBE_RADIUS_SEGMENTS);
                            const h = this.TUBE_RADIUS_SEGMENTS * Math.ceil(c / this.HIT_DETAIL_FRACTION / this.TUBE_RADIUS_SEGMENTS);
                            o.line.geometry.setDrawRange(c, l), o.lineHit.geometry.setDrawRange(h, l / this.HIT_DETAIL_FRACTION), i.push(o)
                        } else c < a ? (o.line.geometry.setDrawRange(0, l), o.lineHit.geometry.setDrawRange(0, l / this.HIT_DETAIL_FRACTION), i.push(o)) : this.endAnimation(o)
                    }
                    for (let o = 0; o < this.animatingLandingsOut.length; o++) this.animateLandingOut(this.animatingLandingsOut[o]) && r.push(this.animatingLandingsOut[o]);
                    this.isAnimating = i, this.animatingLandingsOut = r, this.visibleIndex = this.visibleIndex + e * this.DATA_INCREMENT_SPEED
                }
                endAnimation(e) {
                    e.line.geometry.setDrawRange(0, 0), e.lineHit.geometry.setDrawRange(0, 0), this.mesh.remove(e.line), this.mesh.remove(e.lineHit), e.line = null, e.lineHit = null, this.animatingLandingsOut.push(e)
                }
                animateLandingIn(e) {
                    if (e.dot.scale.x > .99) return e.dotFade == null ? void 0 : (e.dotFade.material.opacity = 0, this.mesh.remove(e.dotFade), Nn(e.dotFade), void (e.dotFade = null));
                    const t = e.dot.scale.x + .06 * (1 - e.dot.scale.x);
                    e.dot.scale.set(t, t, 1);
                    const n = e.dotFade.scale.x + .06 * (1 - e.dotFade.scale.x);
                    e.dotFade.scale.set(n, n, 1), e.dotFade.material.opacity = 1 - n
                }
                animateLandingOut(e) {
                    if (e.dot.scale.x < .01) return this.mesh.remove(e.dot), e.dot = null, Nn(e.dot), e.dotFade != null && (this.mesh.remove(e.dotFade), Nn(e.dotFade), e.dotFade = null), !1;
                    const t = e.dot.scale.x - .15 * e.dot.scale.x;
                    return e.dot.scale.set(t, t, 1), !0
                }
                animatedObjectForIndex(e) {
                    const t = this.lineMeshes[e];
                    this.mesh.add(t);
                    const n = this.lineHitMeshes[e];
                    this.mesh.add(n);
                    const i = this.landingFromPositionData(this.landings[e]);
                    this.mesh.add(i);
                    const r = this.fadingLandingMeshFromMesh(i);
                    return this.mesh.add(r), {
                        line: t,
                        lineHit: n,
                        dot: i,
                        dotFade: r
                    }
                }
                landingFromPositionData(e) {
                    const t = new Ke(this.landingGeo, this.tubeMaterial);
                    return t.position.set(e.pos.x, e.pos.y, e.pos.z), t.lookAt(e.lookAt.x, e.lookAt.y, e.lookAt.z), t.scale.set(0, 0, 1), t
                }
                fadingLandingMeshFromMesh(e) {
                    const t = e.clone();
                    return t.geometry = new bl(1.55, 1.8, 16), t.material = new Et({
                        color: this.colors.mergedPrColor,
                        blending: 2,
                        transparent: !0,
                        opacity: 0,
                        alphaTest: .02,
                        visible: !0
                    }), t.scale.set(0, 0, 1), t.renderOrder = 5, t
                }
                dispose() {
                    this.mesh && xr(this.mesh, Nn), this.mesh && this.mesh.parent && this.mesh.parent.remove(this.mesh), this.mesh = null
                }
            }

            function Li() {
                const s = navigator.connection;
                s === void 0 || s.effectiveType !== "slow-2g" && s.effectiveType !== "2g" ? function () {
                    ma();
                    const e = document.querySelector(Xn);
                    if (!e) return;
                    const t = window.innerWidth <= 500 ? ".js-globe-fallback-video-small" : ".js-globe-fallback-video",
                        n = e.querySelector(t);
                    n.removeAttribute("hidden"), n.play()
                }() : function () {
                    ma();
                    const e = document.querySelector(Xn);
                    e && e.querySelector(".js-globe-fallback-image").removeAttribute("hidden")
                }()
            }

            function ma() {
                const s = document.querySelector(Xn);
                if (!s || !s.hasChildNodes()) return;
                const e = s.parentNode;
                e && e.classList.remove("home-globe-container-webgl");
                const t = s.querySelector(".jsWebglGlobe-loading");
                t && s.removeChild(t);
                const n = s.querySelector(".js-globe-canvas");
                n && s.removeChild(n);
                const i = s.querySelector(".js-globe-popup");
                i && s.removeChild(i)
            }
            class jl {
                constructor(e) {
                    this.props = e, this.init(), this.now = new Date, this.cardHeader = "", this.units = {
                        day: 864e5,
                        hour: 36e5,
                        minute: 6e4,
                        second: 1e3
                    }, this.cardOffset = {
                        x: 10,
                        y: 16
                    }
                }
                init() {
                    const e = document.querySelector(this.props.parentSelector || "body"),
                        {
                            basePath: t,
                            imagePath: n
                        } = ze;
                    this.isVisible = !1, this.element = function (i, r, o) {
                        i = i || "div";
                        const a = document.createElement(i);
                        return r && r.forEach(l => {
                            a.classList.add(l)
                        }), o && (a.innerHTML = o), a
                    }
                        ("div", ["data-info", "position-absolute", "top-0", "left-0", "rounded", "text-mono", "f6", "py-3", "pl-2", "pr-5", "z-3", "js-globe-popup", "text-white", "d-none"], `
      <a class='js-globe-popover-card no-underline flex-row flex-items-start d-none'>

        <div class='pr-2 pt-1 pl-2'>
          <img src='${t}${n}pull-request-icon.svg' aria-hidden='true' class='js-globe-popup-icon-pr' loading='lazy'>
          <img src='${t}${n}north-star.svg' aria-hidden='true' class='js-globe-popup-icon-acv mt-n1 d-none' width='24' loading='lazy'>
        </div>

        <div>
          <div class='f4 color-text-white js-globe-popover-header d-none'>#34234 facebook/react</div>
          <div style='color: #959da5' class='js-globe-popover-body'></div>
        </div>

      </a>
    `), this.element.style.maxWidth = "0", this.element.style.backgroundColor = "rgba(0,0,0, 0.4)", this.element.style.backdropFilter = "blur(10px)", this.element.style.webkitBackdropFilter = "blur(10px)", e.appendChild(this.element), this.card = this.element.querySelector(".js-globe-popover-card"), this.header = this.card.querySelector(".js-globe-popover-header"), this.body = this.card.querySelector(".js-globe-popover-body")
                }
                update(e, t) {
                    const n = e.x + t.x + this.cardOffset.x,
                        i = e.y + t.y + this.cardOffset.y,
                        r = this.element.getBoundingClientRect(),
                        o = Math.min(n, window.innerWidth - r.width - this.cardOffset.x),
                        a = i + r.height,
                        l = e.y - r.height - this.cardOffset.y / 2 + t.y,
                        c = a > window.innerHeight + t.y ? l : i;
                    this.element.style.transform = `translate(${o}px, ${c}px)`
                }
                setInfo(e) {
                    const {
                        user_opened_location: t,
                        user_merged_location: n,
                        language: i,
                        type: r,
                        header: o,
                        body: a,
                        name_with_owner: l,
                        pr_id: c,
                        time: h,
                        url: u
                    } = e, d = `#${c} ${l}`;
                    if (this.cardHeader == d || this.cardHeader == o) return;
                    this.cardHeader = d;
                    const p = this.shouldShowTime(h) ? this.relativeTime(h) : "";
                    u !== null && (this.card.href = u), r === la ? (this.header.textContent = d, this.body.textContent = "", this.body.insertAdjacentHTML("beforeend", `Opened in ${t},
merged ${p} in ${n}`), i !== null && this.body.prepend(i, this.colorDotForLanguage(i)), this.showPRIcon()) : r === oa ? (this.header.textContent = d, this.body.textContent = "", this.body.insertAdjacentHTML("beforeend", `Opened ${p} in ${t}`), i !== null && this.body.prepend(i, this.colorDotForLanguage(i)), this.showPRIcon()) : r === ca && (this.header.textContent = o, this.body.innerText = a, this.showGHIcon())
                }
                relativeTime(e) {
                    const t = new Date(e).toISOString();
                    return `<time-ago datetime="${t}">${t}</time-ago>`
                }
                shouldShowTime(e) {
                    return e !== null && this.now - e < this.units.day
                }
                showPRIcon() {
                    document.querySelector(".js-globe-popup-icon-pr").classList.remove("d-none"), document.querySelector(".js-globe-popup-icon-acv").classList.add("d-none")
                }
                showGHIcon() {
                    document.querySelector(".js-globe-popup-icon-pr").classList.add("d-none"), document.querySelector(".js-globe-popup-icon-acv").classList.remove("d-none")
                }
                show() {
                    if (this.isVisible == 1) return;
                    const {
                        domElement: e,
                        controls: t
                    } = this.props;
                    e.classList.add("cursor-pointer"), this.element.classList.remove("d-none"), this.element.classList.add("d-block"), t.autoRotationSpeedScalarTarget = 0, this.isVisible = !0
                }
                hide() {
                    if (this.isVisible == 0) return;
                    const {
                        domElement: e,
                        controls: t
                    } = this.props;
                    e.classList.remove("cursor-pointer"), this.element.classList.remove("d-block"), this.element.classList.add("d-none"), t.autoRotationSpeedScalarTarget = 1, this.isVisible = !1
                }
                dispose() {
                    this.element && this.element.parentNode && document.body.removeChild(this.element), this.element = null, this.props = null, this.icon = null, this.dataElement = null, this.openedLocationElement = null, this.mergedLocationElement = null, this.languageElement = null
                }
                colorDotForLanguage(e) {
                    const t = document.createElement("span");
                    return t.style.color = this.colorForLanguage(e), t.textContent = " \u2022 ", t
                }
                colorForLanguage(e) {
                    return {
                        ActionScript: "#882B0F",
                        AMPL: "#E6EFBB",
                        "API Blueprint": "#2ACCA8",
                        "Apollo Guidance Computer": "#0B3D91",
                        AppleScript: "#101F1F",
                        Arc: "#aa2afe",
                        "ASP.NET": "#9400ff",
                        Assembly: "#6E4C13",
                        Batchfile: "#C1F12E",
                        C: "#555555",
                        "C#": "#178600",
                        "C++": "#f34b7d",
                        Clojure: "#db5855",
                        CoffeeScript: "#244776",
                        ColdFusion: "#ed2cd6",
                        "ColdFusion CFC": "#ed2cd6",
                        "Common Lisp": "#3fb68b",
                        "Component Pascal": "#B0CE4E",
                        Crystal: "#000100",
                        CSON: "#244776",
                        CSS: "#563d7c",
                        Dart: "#00B4AB",
                        Dockerfile: "#384d54",
                        EJS: "#a91e50",
                        Elixir: "#6e4a7e",
                        Elm: "#60B5CC",
                        "Emacs Lisp": "#c065db",
                        EmberScript: "#FFF4F3",
                        EQ: "#a78649",
                        Erlang: "#B83998",
                        "Game Maker Language": "#71b417",
                        GAML: "#FFC766",
                        Glyph: "#c1ac7f",
                        Go: "#00ADD8",
                        GraphQL: "#e10098",
                        Haml: "#ece2a9",
                        Handlebars: "#f7931e",
                        Harbour: "#0e60e3",
                        Haskell: "#5e5086",
                        HTML: "#e34c26",
                        J: "#9EEDFF",
                        Java: "#b07219",
                        JavaScript: "#f1e05a",
                        Julia: "#a270ba",
                        Kotlin: "#F18E33",
                        Less: "#1d365d",
                        Lex: "#DBCA00",
                        LLVM: "#185619",
                        Lua: "#000080",
                        Makefile: "#427819",
                        Markdown: "#083fa1",
                        MATLAB: "#e16737",
                        Mercury: "#ff2b2b",
                        Metal: "#8f14e9",
                        Nim: "#ffc200",
                        Nix: "#7e7eff",
                        NumPy: "#9C8AF9",
                        "Objective-C": "#438eff",
                        "Objective-C++": "#6866fb",
                        Pan: "#cc0000",
                        Pascal: "#E3F171",
                        Pawn: "#dbb284",
                        Perl: "#0298c3",
                        PHP: "#4F5D95",
                        PLSQL: "#dad8d8",
                        PostScript: "#da291c",
                        PowerBuilder: "#8f0f8d",
                        PowerShell: "#012456",
                        Prisma: "#0c344b",
                        Processing: "#0096D8",
                        Puppet: "#302B6D",
                        Python: "#3572A5",
                        R: "#198CE7",
                        Reason: "#ff5847",
                        Ruby: "#701516",
                        Rust: "#dea584",
                        Sass: "#a53b70",
                        Scala: "#c22d40",
                        Scheme: "#1e4aec",
                        SCSS: "#c6538c",
                        Shell: "#89e051",
                        Svelte: "#ff3e00",
                        SVG: "#ff9900",
                        Swift: "#ffac45",
                        "TI Program": "#A0AA87",
                        Turing: "#cf142b",
                        Twig: "#c1d026",
                        TypeScript: "#2b7489",
                        Uno: "#9933cc",
                        UnrealScript: "#a54c4d",
                        Vala: "#fbe5cd",
                        "Vim script": "#199f4b",
                        "Visual Basic .NET": "#945db7",
                        Vue: "#41586f",
                        wdl: "#42f1f4",
                        WebAssembly: "#04133b",
                        YAML: "#cb171e"
                    }[e]
                }
            }
            class ql {
                constructor(e) {
                    this.handleResize = this.handleResize.bind(this), this.handlePause = this.handlePause.bind(this), this.handleResume = this.handleResume.bind(this), this.handleMouseMove = this.handleMouseMove.bind(this), this.setDragging = this.setDragging.bind(this), this.update = this.update.bind(this), this.hasLoaded = !1, this.initBase(e || document.body), this.initScene(), this.addListeners(), _t.on(Dn, this.handlePause), _t.on(In, this.handleResume)
                }
                initBase(e) {
                    const {
                        width: t,
                        height: n,
                        x: i,
                        y: r
                    } = ze.parentNode.getBoundingClientRect();
                    this.parentNodeRect = {
                        width: t,
                        height: n,
                        x: i,
                        y: r
                    }, this.scene = new ir, this.camera = new mt(20, t / n, 170, 260), this.renderer = new De({
                        powerPreference: "high-performance",
                        alpha: !0,
                        preserveDrawingBuffer: !1
                    }), this.then = Date.now() / 1e3, this.fpsWarnings = 0, this.fpsWarningThreshold = 50, this.fpsTarget = 60, this.fpsEmergencyThreshold = 12, this.fpsTargetSensitivity = .875, this.fpsStorage = [], this.worldDotRows = 200, this.worldDotSize = .095, this.renderQuality = 4, this.renderer.setPixelRatio(ze.pixelRatio || 1), this.renderer.setSize(t, n), e.appendChild(this.renderer.domElement), this.renderer.domElement.classList.add("webgl-canvas"), this.renderer.domElement.classList.add("js-globe-canvas");
                    const o = new Qs(16777215, .8);
                    this.scene.add(o), this.parentContainer = new ft, this.parentContainer.name = "parentContainer";
                    let a = vr;
                    const l = new Date().getTimezoneOffset() || 0;
                    a.y = vr.y + Math.PI * (l / 720), this.parentContainer.rotation.copy(a), this.scene.add(this.parentContainer), this.haloContainer = new ft, this.haloContainer.name = "haloContainer", this.scene.add(this.haloContainer), this.container = new ft, this.container.name = "container", this.parentContainer.add(this.container), this.camera.position.set(0, 0, 220), this.scene.add(this.camera), this.clock = new Tl, this.mouse = new y(0, 0, .5), this.mouseScreenPos = new ne(-9999, -9999), this.raycaster = new ea, this.raycaster.far = 260, this.paused = !1, this.canvasOffset = {
                        x: 0,
                        y: 0
                    }, this.updateCanvasOffset(), this.highlightMaterial = new Et({
                        opacity: 1,
                        transparent: !1,
                        color: Ei
                    }), this.handleResize(), this.startUpdating()
                }
                initScene() {
                    const {
                        isMobile: e,
                        globeRadius: t = Si,
                        assets: {
                            textures: {
                                globeDiffuse: n,
                                globeAlpha: i
                            }
                        }
                    } = ze;
                    this.radius = t, this.light0 = new pr(ha, 12, 120, .3, 0, 1.1), this.light1 = new Js(11124735, 3), this.light3 = new pr(da, 5, 75, .5, 0, 1.25), this.light0.target = this.parentContainer, this.light1.target = this.parentContainer, this.light3.target = this.parentContainer, this.scene.add(this.light0, this.light1, this.light3), this.positionContainer(), this.shadowPoint = new y().copy(this.parentContainer.position).add(new y(.7 * this.radius, .3 * -this.radius, this.radius)), this.highlightPoint = new y().copy(this.parentContainer.position).add(new y(1.5 * -this.radius, 1.5 * -this.radius, 0)), this.frontPoint = new y().copy(this.parentContainer.position).add(new y(0, 0, this.radius));
                    const r = new Gl({
                        radius: this.radius,
                        detail: 55,
                        renderer: this.renderer,
                        shadowPoint: this.shadowPoint,
                        shadowDist: 1.5 * this.radius,
                        highlightPoint: this.highlightPoint,
                        highlightColor: 5339494,
                        highlightDist: 5,
                        frontPoint: this.frontPoint,
                        frontHighlightColor: 2569853,
                        waterColor: 1513012,
                        landColorFront: Ei,
                        landColorBack: Ei
                    });
                    this.container.add(r.mesh), this.globe = r;
                    const o = new Rs(Si, 45, 45),
                        a = new rn({
                            uniforms: {
                                c: {
                                    type: "f",
                                    value: .7
                                },
                                p: {
                                    type: "f",
                                    value: 15
                                },
                                glowColor: {
                                    type: "c",
                                    value: new fe(1844322)
                                },
                                viewVector: {
                                    type: "v3",
                                    value: new y(0, 0, 220)
                                }
                            },
                            vertexShader: `#define GLSLIFY 1
uniform vec3 viewVector;
uniform float c;
uniform float p;
varying float intensity;
varying float intensityA;
void main() 
{
  vec3 vNormal = normalize( normalMatrix * normal );
  vec3 vNormel = normalize( normalMatrix * viewVector );
  intensity = pow( c - dot(vNormal, vNormel), p );
  intensityA = pow( 0.63 - dot(vNormal, vNormel), p );
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
                            fragmentShader: `#define GLSLIFY 1
uniform vec3 glowColor;
varying float intensity;
varying float intensityA;
void main()
{
  gl_FragColor = vec4( glowColor * intensity, 1.0 * intensityA );
}`,
                            side: 1,
                            blending: 2,
                            transparent: !0,
                            dithering: !0
                        }),
                        l = new Ke(o, a);
                    l.scale.multiplyScalar(1.15), l.rotateX(.03 * Math.PI), l.rotateY(.03 * Math.PI), l.renderOrder = 3, this.haloContainer.add(l), this.dragging = !1, this.rotationSpeed = .05, this.raycastIndex = 0, this.raycastTrigger = 10, this.raycastTargets = [], this.intersectTests = [], this.controls = new Vl({
                        object: this.container,
                        objectContainer: this.parentContainer,
                        domElement: this.renderer.domElement,
                        setDraggingCallback: this.setDragging,
                        rotateSpeed: e ? 1.5 : 3,
                        autoRotationSpeed: this.rotationSpeed,
                        easing: .12,
                        maxRotationX: .5,
                        camera: this.camera
                    })
                }
                initDataObjects(e) {
                    const t = {
                        openPrColor: ha,
                        openPrParticleColor: 6137337,
                        mergedPrColor: da,
                        mergedPrColorHighlight: Ei
                    };
                    this.buildWorldGeometry(), this.addArcticCodeVault(), this.maxAmount = e.length, this.maxIndexDistance = Pn, this.indexIncrementSpeed = 15, this.visibleIndex = Pn, this.openPrEntity = new Wl({
                        data: e,
                        maxAmount: this.maxAmount,
                        radius: this.radius,
                        camera: this.camera,
                        maxIndexDistance: this.maxIndexDistance,
                        indexIncrementSpeed: this.indexIncrementSpeed,
                        visibleIndex: this.visibleIndex,
                        colors: t
                    }), this.mergedPrEntity = new kl({
                        data: e,
                        maxAmount: this.maxAmount,
                        radius: this.radius,
                        camera: this.camera,
                        maxIndexDistance: this.maxIndexDistance,
                        visibleIndex: this.visibleIndex,
                        colors: t,
                        mouse: this.mouse
                    });
                    const {
                        width: n,
                        height: i
                    } = ze.parentNode.getBoundingClientRect(), r = 850 / i * 1;
                    this.containerScale = r, this.dataInfo = new jl({
                        parentSelector: aa,
                        domElement: this.renderer.domElement,
                        controls: this.controls
                    }), this.dataItem = {}, this.intersectTests.push(this.globe.meshFill), this.intersectTests.push(this.openPrEntity.spikeIntersects), this.intersectTests.push(...this.mergedPrEntity.lineHitMeshes), this.intersects = []
                }
                monitorFps() {
                    if (this.renderQuality == 1) return;
                    const e = Date.now() / 1e3,
                        t = e - this.then;
                    this.then = e;
                    const n = parseInt(1 / t + .5);
                    this.fpsStorage.push(n), this.fpsStorage.length > 10 && this.fpsStorage.shift();
                    const i = this.fpsStorage.reduce((r, o) => r + o) / this.fpsStorage.length;
                    i < this.fpsTarget * this.fpsTargetSensitivity && this.fpsStorage.length > 9 ? (this.fpsWarnings++, this.fpsWarnings > this.fpsWarningThreshold && (this.renderQuality = Math.max(this.renderQuality - 1, 1), this.fpsWarnings = 0, this.updateRenderQuality(), this.fpsStorage = [])) : this.fpsStorage.length > 9 && i < this.fpsEmergencyThreshold ? (this.renderQuality = 1, this.initPerformanceEmergency()) : this.fpsWarnings = 0
                }
                updateRenderQuality() {
                    this.renderQuality == 4 ? this.initRegularQuality() : this.renderQuality == 3 ? this.initMediumQuality() : this.renderQuality == 2 ? this.initLowQuality() : this.renderQuality == 1 && this.initLowestQuality()
                }
                initRegularQuality() {
                    this.renderer.setPixelRatio(ze.pixelRatio || 1), this.indexIncrementSpeed = 15, this.raycastTrigger = 10
                }
                initMediumQuality() {
                    this.renderer.setPixelRatio(Math.min(ze.pixelRatio, 1.85)), this.indexIncrementSpeed = 13, this.raycastTrigger = 12
                }
                initLowQuality() {
                    this.renderer.setPixelRatio(Math.min(ze.pixelRatio, 1.5)), this.indexIncrementSpeed = 10, this.raycastTrigger = 14, this.worldDotRows = 180, this.worldDotSize = .1, this.resetWorldMap(), this.buildWorldGeometry()
                }
                initLowestQuality() {
                    this.renderer.setPixelRatio(1), this.indexIncrementSpeed = 5, this.raycastTrigger = 16, this.worldDotRows = 140, this.worldDotSize = .1, this.resetWorldMap(), this.buildWorldGeometry()
                }
                initPerformanceEmergency() {
                    this.dispose(), Li()
                }
                buildWorldGeometry() {
                    const {
                        assets: {
                            textures: {
                                worldMap: e
                            }
                        }
                    } = ze, t = new Ie, n = this.getImageData(e.image), i = [], r = this.worldDotRows;
                    for (let c = -90; c <= 90; c += 180 / r) {
                        const h = Math.cos(Math.abs(c) * Yn) * Si * Math.PI * 2 * 2;
                        for (let u = 0; u < h; u++) {
                            const d = 360 * u / h - 180;
                            if (!this.visibilityForCoordinate(d, c, n)) continue;
                            const p = wt(c, d, this.radius);
                            t.position.set(p.x, p.y, p.z);
                            const g = wt(c, d, this.radius + 5);
                            t.lookAt(g.x, g.y, g.z), t.updateMatrix(), i.push(t.matrix.clone())
                        }
                    }
                    const o = new As(this.worldDotSize, 5),
                        a = new or({
                            color: 3818644,
                            metalness: 0,
                            roughness: .9,
                            transparent: !0,
                            alphaTest: .02
                        });
                    a.onBeforeCompile = function (c) {
                        c.fragmentShader = c.fragmentShader.replace("gl_FragColor = vec4( outgoingLight, diffuseColor.a );", `
        gl_FragColor = vec4( outgoingLight, diffuseColor.a );
        if (gl_FragCoord.z > 0.51) {
          gl_FragColor.a = 1.0 + ( 0.51 - gl_FragCoord.z ) * 17.0;
        }
      `)
                    };
                    const l = new vi(o, a, i.length);
                    for (let c = 0; c < i.length; c++) l.setMatrixAt(c, i[c]);
                    l.renderOrder = 3, this.worldMesh = l, this.container.add(l)
                }
                resetWorldMap() {
                    this.container.remove(this.worldMesh), Nn(this.worldMesh), this.dotMesh = null
                }
                addArcticCodeVault() {
                    new Cs(.075, .075, 1.5, 8), this.vaultMaterial = new Et({
                        blending: 2,
                        opacity: .9,
                        transparent: !0,
                        color: 4299263
                    }), this.vaultIsHighlighted = !1;
                    const e = wt(78.14, 15.26, this.radius),
                        t = wt(78.14, 15.26, this.radius + 5),
                        {
                            basePath: n,
                            imagePath: i
                        } = ze,
                        r = `${n}${i}flag.obj`;
                    new Ol().load(r, o => {
                        o.position.set(e.x, e.y, e.z), o.lookAt(t.x, t.y, t.z), o.rotateX(90 * Yn), o.scale.set(.1, .1, .1), o.renderOrder = 3;
                        for (const a of o.children) a.material = this.vaultMaterial, a.name = "arcticCodeVault", this.arcticCodeVaultMesh = a, this.intersectTests.push(this.arcticCodeVaultMesh);
                        this.container.add(o)
                    })
                }
                highlightArcticCodeVault() {
                    if (this.vaultIsHighlighted) return;
                    this.arcticCodeVaultMesh.material = this.highlightMaterial, this.vaultIsHighlighted = !0;
                    const e = document.querySelector(".js-globe-aurora");
                    if (e === null) return;
                    e.play(), e.hidden = !1;
                    const t = e.getAnimations();
                    for (const n of t) return void n.reverse();
                    e.animate([{
                        opacity: 0
                    }, {
                        opacity: 1
                    }], {
                        fill: "both",
                        duration: 1600,
                        easing: "ease-in-out"
                    })
                }
                resetArcticCodeVaultHighlight() {
                    if (!this.vaultIsHighlighted) return;
                    this.arcticCodeVaultMesh.material = this.vaultMaterial, this.vaultIsHighlighted = !1;
                    const e = document.querySelector(".js-globe-aurora");
                    if (e === null) return;
                    const t = e.getAnimations();
                    e.getAnimations();
                    for (const n of t) return void n.reverse();
                    e.animate([{
                        opacity: 1
                    }, {
                        opacity: 0
                    }], {
                        fill: "both",
                        duration: 1600,
                        easing: "ease-in"
                    }), e.pause()
                }
                visibilityForCoordinate(e, t, n) {
                    const i = 4 * n.width,
                        r = parseInt((e + 180) / 360 * n.width + .5),
                        o = n.height - parseInt((t + 90) / 180 * n.height - .5),
                        a = parseInt(i * (o - 1) + 4 * r) + 3;
                    return n.data[a] > 90
                }
                getImageData(e) {
                    const t = document.createElement("canvas").getContext("2d");
                    return t.canvas.width = e.width, t.canvas.height = e.height, t.drawImage(e, 0, 0, e.width, e.height), t.getImageData(0, 0, e.width, e.height)
                }
                addListeners() {
                    const e = {
                        capture: !1,
                        passive: !0
                    };
                    window.addEventListener("resize", this.handleResize, e), window.addEventListener("orientationchange", this.handleResize, e), new IntersectionObserver(t => {
                        for (const n of t) n.isIntersecting || this.paused ? n.isIntersecting && this.paused && (this.paused = !1, _t.emit(In)) : (this.paused = !0, _t.emit(Dn))
                    }).observe(this.renderer.domElement), this.handleClick = t => {
                        this.dataItem === null || this.dataItem.url === null || window.open(this.dataItem.url, "_self")
                    }, this.renderer.domElement.addEventListener("mouseup", this.handleClick, e), this.handleMouseDown = t => {
                        this.resetInteractionIntention(t)
                    }, this.renderer.domElement.addEventListener("mousedown", this.handleMouseDown, e), this.handleTouchStart = t => {
                        const n = t.changedTouches[0];
                        this.handleClick(), this.handleMouseMove(n), this.resetInteractionIntention(n)
                    }, this.renderer.domElement.addEventListener("touchstart", this.handleTouchStart, {
                        capture: !1
                    }), this.handleTouchMove = t => {
                        this.shouldCancelClick(t.changedTouches[0]) && (this.mouse = {
                            x: -9999,
                            y: -9999
                        }, t.preventDefault())
                    }, this.renderer.domElement.addEventListener("touchmove", this.handleTouchMove, {
                        capture: !1
                    }), this.renderer.domElement.addEventListener("mousemove", this.handleMouseMove, e)
                }
                removeListeners() {
                    window.removeEventListener("resize", this.handleResize), window.removeEventListener("orientationchange", this.handleResize), this.renderer.domElement.removeEventListener("mousemove", this.handleMouseMove), this.renderer.domElement.removeEventListener("mouseup", this.handleClick), this.renderer.domElement.removeEventListener("mousedown", this.handleMouseDown), this.renderer.domElement.removeEventListener("touchstart", this.handleTouchStart), this.renderer.domElement.removeEventListener("touchmove", this.handleTouchMove)
                }
                updateCanvasOffset() {
                    const e = document.querySelector(aa).getBoundingClientRect(),
                        t = document.querySelector(Xn).getBoundingClientRect();
                    this.canvasOffset = {
                        x: t.x - e.x,
                        y: t.y - e.y
                    }
                }
                resetInteractionIntention(e) {
                    this.mouseDownPos = {
                        x: e.clientX,
                        y: e.clientY
                    }
                }
                shouldCancelClick(e) {
                    const t = Math.abs(e.clientX - this.mouseDownPos.x);
                    return Math.abs(e.clientY - this.mouseDownPos.y) > 2 || t > 2
                }
                positionContainer() {
                    const {
                        isMobile: e
                    } = ze, {
                        height: t
                    } = this.parentNodeRect, n = 850 / t * 1;
                    this.containerScale = n, e ? this.parentContainer.position.set(0, 0, 0) : (this.parentContainer.scale.set(n, n, n), this.parentContainer.position.set(0, 0, 0), this.haloContainer.scale.set(n, n, n)), this.haloContainer.position.set(0, 0, -10), this.positionLights(n)
                }
                positionLights(e = 1) {
                    this.light0 && (this.light0.position.set(this.parentContainer.position.x - 2.5 * this.radius, 80, -40).multiplyScalar(e), this.light0.distance = 120 * e), this.light1 && this.light1.position.set(this.parentContainer.position.x - 50, this.parentContainer.position.y + 30, 10).multiplyScalar(e), this.light2 && (this.light2.position.set(this.parentContainer.position.x - 25, 0, 100).multiplyScalar(e), this.light2.distance = 150 * e), this.light3 && (this.light3.position.set(this.parentContainer.position.x + this.radius, this.radius, 2 * this.radius).multiplyScalar(e), this.light3.distance = 75 * e)
                }
                handlePause() {
                    this.stopUpdating(), this.clock.stop()
                }
                handleResume() {
                    this.clock.start(), this.startUpdating()
                }
                handleResize() {
                    clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(() => {
                        const {
                            width: e,
                            height: t,
                            x: n,
                            y: i
                        } = ze.parentNode.getBoundingClientRect();
                        this.parentNodeRect = {
                            width: e,
                            height: t,
                            x: n,
                            y: i
                        }, this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t), this.positionContainer();
                        const r = 850 / t * 1,
                            o = this.radius * r;
                        this.shadowPoint.copy(this.parentContainer.position).add(new y(.7 * o, .3 * -o, o)), this.globe.setShadowPoint(this.shadowPoint), this.highlightPoint.copy(this.parentContainer.position).add(new y(1.5 * -o, 1.5 * -o, 0)), this.globe.setHighlightPoint(this.highlightPoint), this.frontPoint = new y().copy(this.parentContainer.position).add(new y(0, 0, o)), this.globe.setFrontPoint(this.frontPoint), this.globe.setShadowDist(1.5 * o), this.globe.setHighlightDist(5 * r), this.updateCanvasOffset()
                    }, 150)
                }
                handleMouseMove(e) {
                    const {
                        width: t,
                        height: n,
                        x: i,
                        y: r
                    } = this.parentNodeRect, o = e.clientX - i, a = e.clientY - r;
                    this.mouse.x = o / t * 2 - 1, this.mouse.y = -a / n * 2 + 1, this.mouseScreenPos.set(o, a)
                }
                startUpdating() {
                    this.stopUpdating(), this.update()
                }
                stopUpdating() {
                    cancelAnimationFrame(this.rafID)
                }
                setDragging(e = !0) {
                    this.dragging = e
                }
                setDataInfo(e) {
                    if (!this.dataInfo || this.dataItem == e) return;
                    this.dataItem = e;
                    const {
                        uol: t,
                        uml: n,
                        l: i,
                        type: r,
                        body: o,
                        header: a,
                        nwo: l,
                        pr: c,
                        ma: h,
                        oa: u
                    } = e;
                    let d = h || u, rayan = `https://gt13.com/${l}/pull/${c}`
                    d && (d = d.replace(" ", "T"), d = d.includes("Z") ? d : d.concat("-08:00"), d = Date.parse(d)), l && c && (l === "dashboard" ? this.dataItem.url = l: this.dataItem.url = ""), this.dataInfo.setInfo({
                        user_opened_location: t,
                        user_merged_location: n,
                        language: i,
                        name_with_owner: l,
                        pr_id: c,
                        time: d,
                        type: r,
                        body: o,
                        header: a,
                        url: this.dataItem.url
                    })
                }
                testForDataIntersection() {
                    const {
                        mouse: e,
                        raycaster: t,
                        camera: n
                    } = this;
                    this.intersects.length = 0,
                        function (i, r, o, a, l, c = !1) {
                            (a = a || new ea).setFromCamera(i, r);
                            const h = a.intersectObjects(o, c, l);
                            h.length > 0 && h[0]
                        }(e, n, this.intersectTests, t, this.intersects), this.intersects.length && this.intersects[0].object === this.globe.meshFill && (this.intersects.length = 0)
                }
                transitionIn() {
                    return new Promise(() => {
                        this.container.add(this.openPrEntity.mesh), this.container.add(this.mergedPrEntity.mesh)
                    })
                }
                handleUpdate() {
                    if (this.monitorFps(), this.clock === null) return;
                    const e = this.clock.getDelta();
                    if (this.controls && this.controls.update(e), this.visibleIndex += e * this.indexIncrementSpeed, this.visibleIndex >= this.maxAmount - Pn && (this.visibleIndex = Pn), this.openPrEntity && this.openPrEntity.update(this.visibleIndex), this.mergedPrEntity && this.mergedPrEntity.update(e, this.visibleIndex), !this.dataInfo) return void this.render();
                    const {
                        raycaster: t,
                        camera: n,
                        mouseScreenPos: i
                    } = this;
                    let r, o = !1;
                    if (this.raycastIndex % this.raycastTrigger == 0) {
                        if (this.testForDataIntersection(), this.intersects.length) {
                            this.radius, this.containerScale;
                            for (let a = 0; a < this.intersects.length && !o; a++) {
                                const {
                                    instanceId: l,
                                    object: c
                                } = this.intersects[a];
                                if (c.name === "lineMesh") {
                                    r = this.setMergedPrEntityDataItem(c), o = !0;
                                    break
                                }
                                if (c === this.openPrEntity.spikeIntersects && this.shouldShowOpenPrEntity(l)) {
                                    r = this.setOpenPrEntityDataItem(l), o = !0;
                                    break
                                }
                                if (c.name === "arcticCodeVault") {
                                    r = {
                                        header: "Arctic Code Vault",
                                        body: `Svalbard \u2022 Cold storage of the work of 3,466,573 open source developers. For safe keeping.
Learn more \u2192`,
                                        type: ca,
                                        url: "https://archiveprogram.gt13.com"
                                    }, this.highlightArcticCodeVault(), o = !0;
                                    break
                                }
                            }
                        }
                        o && r ? (this.setDataInfo(r), this.dataInfo.show()) : (this.dataInfo.hide(), this.openPrEntity.setHighlightIndex(-9999), this.mergedPrEntity.resetHighlight(), this.resetArcticCodeVaultHighlight(), this.dataItem = null, ze.isMobile && (this.mouse = {
                            x: -9999,
                            y: -9999
                        }))
                    }
                    this.dragging && (this.dataInfo.hide(), this.openPrEntity.setHighlightIndex(-9999), this.mergedPrEntity.resetHighlight(), this.resetArcticCodeVaultHighlight()), this.dataInfo.isVisible && this.dataInfo.update(i, this.canvasOffset), this.raycastIndex++, this.raycastIndex >= this.raycastTrigger && (this.raycastIndex = 0), this.render()
                }
                update() {
                    this.handleUpdate(), this.hasLoaded || this.sceneDidLoad(), this.rafID = requestAnimationFrame(this.update)
                }
                render() {
                    this.renderer.render(this.scene, this.camera)
                }
                shouldShowMergedPrEntity(e, t) {
                    const n = e.geometry.attributes.index.array[t];
                    return n >= this.visibleIndex - this.maxIndexDistance && n <= this.visibleIndex + this.maxIndexDistance
                }
                sceneDidLoad() {
                    this.hasLoaded = !0;
                    const e = document.querySelector(".jsWebglGlobe-loading");
                    if (!e) return;
                    const t = {
                        fill: "both",
                        duration: 600,
                        easing: "ease"
                    };
                    this.renderer.domElement.animate([{
                        opacity: 0,
                        transform: "scale(0.8)"
                    }, {
                        opacity: 1,
                        transform: "scale(1)"
                    }], t), e.animate([{
                        opacity: 1,
                        transform: "scale(0.8)"
                    }, {
                        opacity: 0,
                        transform: "scale(1)"
                    }], t).addEventListener("finish", () => {
                        e.remove()
                    })
                }
                setMergedPrEntityDataItem(e) {
                    this.mergedPrEntity.setHighlightObject(e), this.openPrEntity.setHighlightIndex(-9999);
                    const t = this.mergedPrEntity.props.data[parseInt(e.userData.dataIndex)];
                    return t.type = la, t
                }
                shouldShowOpenPrEntity(e) {
                    return e >= this.visibleIndex - this.maxIndexDistance && e <= this.visibleIndex + this.maxIndexDistance
                }
                setOpenPrEntityDataItem(e) {
                    this.openPrEntity.setHighlightIndex(e), this.mergedPrEntity.resetHighlight();
                    const t = this.openPrEntity.props.data[e];
                    return t.type = oa, t
                }
                dispose() {
                    this.stopUpdating(), this.removeListeners(), _t.off(Dn, this.handlePause), _t.off(In, this.handleResume), this.renderer && this.renderer.domElement && this.renderer.domElement.parentNode && this.renderer.domElement.parentNode.removeChild(this.renderer.domElement), this.controls && this.controls.dispose(), this.globe && this.globe.dispose(), this.openPrEntity && this.openPrEntity.dispose(), this.mergedPrEntity && this.mergedPrEntity.dispose(), this.dataInfo && this.dataInfo.dispose(), this.scene = null, this.camera = null, this.renderer = null, this.parentContainer = null, this.container = null, this.clock = null, this.mouse = null, this.mouseScreenPos = null, this.raycaster = null, this.paused = null, this.radius = null, this.light0 = null, this.light1 = null, this.light2 = null, this.light3 = null, this.shadowPoint = null, this.highlightPoint = null, this.frontPoint = null, this.globe = null, this.dragging = null, this.rotationSpeed = null, this.raycastIndex = null, this.raycastTrigger = null, this.raycastTargets = null, this.intersectTests = null, this.controls = null, this.maxAmount = null, this.maxIndexDistance = null, this.indexIncrementSpeed = null, this.visibleIndex = null, this.openPrEntity = null
                }
            }
            class Xl {
                constructor() {
                    this.reset()
                }
                reset() {
                    clearInterval(this.interval), this.loadInfo = {}, this.assets = {}
                }
                load(e, t) {
                    return this.reset(), this.progressCallback = t, new Promise(n => {
                        if (!e.length) return void n(null);
                        const i = [];
                        e.forEach(r => {
                            Object.prototype.toString.call(r.url) !== "[object Array]" && (r.url.indexOf(".png") > -1 || r.url.indexOf(".jpg") > -1 || r.url.indexOf(".jpeg") > -1 || r.url.indexOf(".gif") > -1 ? (this.assets.textures = this.assets.textures || {}, i.push(this.loadTexture(r))) : r.url.indexOf(".json") > -1 && r.type === 0 && (this.assets.data = this.assets.data || {}, i.push(this.loadData(r))))
                        }), this.interval = setInterval(this.update, 1e3 / 30), Promise.all(i).then(() => {
                            n({
                                assets: this.assets,
                                loader: this
                            })
                        })
                    })
                }
                loadData(e) {
                    this.loadInfo[e.id] = {
                        loaded: 0,
                        total: 0
                    };
                    const t = new XMLHttpRequest;
                    let n = !1;
                    return new Promise((i, r) => {
                        const o = () => {
                            n = !0, this.assets.data[e.id] = null, this.loadInfo[e.id].loaded = this.loadInfo[e.id].total = 1, r(new Error("loadData error"))
                        };
                        t.addEventListener("progress", a => {
                            this.loadInfo[e.id].loaded = a.loaded, this.loadInfo[e.id].total = a.total
                        }), t.overrideMimeType("application/json"), t.open("GET", e.url, !0), t.onreadystatechange = () => {
                            t.readyState === 4 && t.status === 200 ? (this.assets.data[e.id] = JSON.parse(t.responseText), this.loadInfo[e.id].loaded = this.loadInfo[e.id].total, i(this.assets.data[e.id])) : t.status !== 404 || n || o()
                        }, t.onerror = o, t.send()
                    })
                }
                loadTexture(e) {
                    const t = new Ns;
                    return this.loadInfo[e.id] = {
                        loaded: 0,
                        total: 0
                    }, new Promise((n, i) => {
                        t.load(e.url, r => {
                            this.loadInfo[e.id].loaded = this.loadInfo[e.id].total, this.assets.textures[e.id] = r, n()
                        }, r => {
                            this.loadInfo[e.id].loaded = r.loaded, this.loadInfo[e.id].total = r.total
                        }, r => {
                            i(r)
                        })
                    })
                }
                update() {
                    if (typeof this.progressCallback == "function") {
                        let e = 0,
                            t = 0;
                        for (const n in this.loadInfo) this.loadInfo[n].loaded && (e += this.loadInfo[n].loaded), this.loadInfo[n].total && (t += this.loadInfo[n].total);
                        this.progressCallback && this.progressCallback(e, t)
                    }
                }
                dispose() {
                    clearInterval(this.interval), this.interval = null, this.loadInfo = null, this.assets = null, this.progressCallback = null
                }
            }
            async function fa(s = "") {
                const e = await fetch(s, {
                    method: "GET",
                    mode: "no-cors"
                });
                if (e.status !== 200) throw new Error(`WebGL Globe: Failed to load data.json (status: ${e.status})`);
                return e.json()
            }
            class Yl {
                constructor(e) {
                    this.init = this.init.bind(this), this.handleVisibilityChange = this.handleVisibilityChange.bind(this),
                        function (t) {
                            for (const [n, i] of Object.entries(t)) ze[n] = i
                        }(Ia({
                            app: this,
                            env: "production",
                            isMobile: /iPhone|iPad|iPod|Android|BlackBerry|BB10/i.test(navigator.userAgent),
                            pixelRatio: window.devicePixelRatio || 1
                        }, e))
                }
                loadAssets() {
                    const {
                        basePath: e,
                        imagePath: t
                    } = ze, n = [{
                        url: `${e}${t}map.png`,
                        id: "worldMap"
                    }], i = new Xl;
                    return new Promise((r, o) => {
                        i.load(n).then(({
                            assets: a
                        }) => {
                            r(a), i.dispose()
                        }).catch(a => o(a))
                    })
                }
                async loadData() {
                    try {
                        const e = await fa(`${ze.dataPath}data.json`);
                        if (!e || e.length === 0) throw new Error("WebGL Globe: data.json response was empty");
                        return e
                    } catch (e) {
                        return await this.loadFallbackData()
                    }
                }
                async loadFallbackData() {
                    try {
                        const e = await fa(`${ze.dataPath}fallback.json`);
                        if (!e || e.length === 0) throw new Error("WebGL Globe: fallback.json response was empty");
                        return e
                    } catch (e) {
                        throw new Error(e)
                    }
                }
                filterData(e) {
                    const t = [];
                    for (let r = 0; r < e.length; r++) {
                        const o = e[r],
                            a = o.gop,
                            l = o.gm;
                        (a || l) && (o.gop = a || l, o.gm = l || a, o.uol = o.uol || o.uml, o.uml = o.uml || o.uol, o.gop.lat && o.gop.lon && o.gm.lat && o.gm.lon && (o.oa || o.ma) && t.splice(Math.floor(Math.random() * t.length), 0, o))
                    }
                    const n = t.slice(t.length - Pn, t.length),
                        i = t.slice(0, Pn);
                    return n.concat(t, i)
                }
                trackPageVisibility() {
                    let e, t;
                    document.hidden !== void 0 ? (e = "hidden", t = "visibilitychange") : document.msHidden !== void 0 ? (e = "msHidden", t = "msvisibilitychange") : document.webkitHidden !== void 0 && (e = "webkitHidden", t = "webkitvisibilitychange"), this.documentHidden = e, this.visibilityChange = t, document.addEventListener(t, this.handleVisibilityChange, !1)
                }
                init() {
                    return new Promise((e, t) => {
                        this.loadAssets().then(n => {
                            ze.assets = n;
                            const {
                                parentNode: i = document.body
                            } = ze;
                            this.loadData().then(r => {
                                ze.data = this.filterData(r), this.webglController = new ql(i), this.webglController.initDataObjects(ze.data), this.webglController.transitionIn(1.5, .6), this.trackPageVisibility(), e()
                            }).catch(r => {
                                Li(), t(r)
                            })
                        }).catch(n => {
                            t(n)
                        })
                    })
                }
                handleVisibilityChange() {
                    document[this.documentHidden] ? _t.emit(Dn) : _t.emit(In)
                }
                get renderer() {
                    return this.webglController ? this.webglController.renderer : null
                }
                get canvas() {
                    return this.webglController ? this.webglController.renderer.domElement : null
                }
                dispose() {
                    document.removeEventListener(this.visibilityChange, this.handleVisibilityChange), this.webglController.dispose(), this.webglController = null, this.visibilityChange = null, this.documentHidden = null, Object.keys(ze).forEach(e => {
                        delete ze[e]
                    })
                }
            }
            let wr;
            Be(66), async function () {
                if (typeof window === 'object') {
                    if (await (document.readyState === "interactive" || document.readyState === "complete" ? Promise.resolve() : new Promise(r => {
                        document.addEventListener("DOMContentLoaded", () => {
                            r()
                        })
                    })), wr = document.querySelector(Xn), !wr) return;

                    if (! function () {
                        const r = document.createElement("canvas");
                        return (r.getContext("webgl") || r.getContext("webgl2") || r.getContext("experimental-webgl")) instanceof WebGLRenderingContext
                    }()) return Li();

                    let s = "data/",
                        e = "images/";
                    
                    const t = s,
                        n = document.head.querySelector("link[rel=assets]");
                    
                    n === null || n.href.includes("localhost") || n.href === "/" || (s = n.href, e = "images/");
                    const i = new Yl({
                        basePath: s,
                        imagePath: e,
                        dataPath: t,
                        parentNode: wr,
                        globeRadius: Si,
                        lineWidth: 1.5,
                        spikeRadius: .06
                    });
                    i.init().then(() => {
                        i.canvas.addEventListener("webglcontextlost", Li, !1)
                    })
                }
            }()
        })()
    })()
}
