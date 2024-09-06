(this.webpackJsonpdots = this.webpackJsonpdots || []).push([
    [0], {
        17: function(e, n, t) {
            e.exports = t(24)
        },
        22: function(e, n, t) {},
        23: function(e, n, t) {},
        24: function(e, n, t) {
            "use strict";
            t.r(n);
            var r = t(0),
                a = t.n(r),
                i = t(13),
                o = t.n(i),
                c = (t(22), t(3)),
                l = t(11),
                u = t(1),
                s = (t(23), t(2));
            var d = function(e, n) {
                var t = Object(r.useState)((function() {
                        try {
                            var t = window.localStorage.getItem(e);
                            return t ? JSON.parse(t) : n
                        } catch (r) {
                            return console.log(r), n
                        }
                    })),
                    a = Object(c.a)(t, 2),
                    i = a[0],
                    o = a[1];
                return [i, function(n) {
                    try {
                        var t = n instanceof Function ? n(i) : n;
                        o(t), window.localStorage.setItem(e, JSON.stringify(t))
                    } catch (r) {
                        console.log(r)
                    }
                }]
            };

            function m() {
                var e = Object(u.a)(["\n  &.headerButtons + .headerButtons {\n    margin-left: 1rem;\n  }\n  @media (min-width: 799px) {\n    &.headerButtons + .headerButtonsRight {\n      margin-left: auto;\n    }\n  }\n  @media (max-width: 800px) {\n    &.fontButtons {\n      display: none;\n    }\n  }\n"]);
                return m = function() {
                    return e
                }, e
            }

            function f() {
                var e = Object(u.a)(["\n  ", ";\n"]);
                return f = function() {
                    return e
                }, e
            }

            function p() {
                var e = Object(u.a)(["\n  font: inherit;\n  font-weight: 500;\n  padding: 0.5rem 0.75rem;\n  border: none;\n  cursor: pointer;\n  white-space: nowrap;\n  display: inline-flex;\n  color: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  ", ";\n  \n  &:hover {\n    ", ";\n  }\n  \n  &:focus {\n    border-color: var(--accent);\n    outline: ", ";\n  }\n\n  & .ToggleButtonOption + .ToggleButtonOption:before {\n    content: '/';\n    color: var(--dimmed);\n    margin: 0 0.5em;\n  }\n\n  &.optionsButton {\n    margin-right: 0.5rem;\n  }\n"]);
                return p = function() {
                    return e
                }, e
            }
            var g = s.a.button(p(), (function(e) {
                    return e.isAccent ? "white" : "inherit"
                }), (function(e) {
                    return e.isAccent ? "var(--accent)" : "transparent"
                }), (function(e) {
                    return e.isAccent ? "transparent" : "var(--xDimmed)"
                }), (function(e) {
                    return e.isMinimal && "border-color: transparent"
                }), (function(e) {
                    return e.isMinimal && "border-color: var(--xDimmed)"
                }), (function(e) {
                    return e.isAccent ? "4px solid var(--accentLight)" : "none"
                })),
                h = s.a.span(f(), (function(e) {
                    return e.isActive ? "" : "color: var(--dimmed)"
                })),
                v = s.a.div(m()),
                b = g;
            var y = function(e) {
                    return r.createElement("svg", Object.assign({
                        width: 24,
                        height: 16,
                        viewBox: "0 0 24 16",
                        fill: "none"
                    }, e), r.createElement("path", {
                        d: "M1 7l8 8L23 1",
                        stroke: "currentColor",
                        strokeLinecap: "round"
                    }))
                },
                E = t(16);

            function x() {
                var e = Object(u.a)(["\n  border: 1px solid var(--border);\n  background-color: ", ";\n  color: ", ";\n  width: ", ";\n  height: ", ";\n  max-width: 3rem;\n  max-height: 3rem;\n  border-radius: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n    border-color: var(--accent);\n  }\n  \n  &:active {\n    border-color: transparent;\n    background-color: ", ";\n    color: ", ";\n  }\n"]);
                return x = function() {
                    return e
                }, e
            }
            var k = s.a.button(x(), (function(e) {
                    return e.isChecked ? "var(--body)" : "transparent"
                }), (function(e) {
                    return e.isChecked ? "var(--background)" : "var(--body)"
                }), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.isChecked ? "transparent" : "var(--body)"
                }), (function(e) {
                    return e.isChecked ? "var(--body)" : "var(--background)"
                })),
                O = function(e) {
                    var n = e.icon,
                        t = e.isChecked,
                        r = Object(E.a)(e, ["icon", "isChecked"]);
                    return (a.a.createElement(k, Object.assign({
                        className: "IconButton",
                        isChecked: t
                    }, r), n))
                };
            O.defaultProps = {
                size: "3rem"
            };
            var w = O;
            var j = function(e) {
                    return r.createElement("svg", Object.assign({
                        width: 18,
                        height: 18,
                        viewBox: "0 0 18 18",
                        fill: "none"
                    }, e), r.createElement("path", {
                        d: "M1 17L17 1M17 17L1 1",
                        stroke: "currentColor",
                        strokeLinecap: "round"
                    }))
                },
                T = t(4);
            var S = function(e) {
                return r.createElement("svg", Object.assign({
                    width: 21,
                    height: 21,
                    viewBox: "0 0 21 21",
                    fill: "none"
                }, e), r.createElement("path", {
                    d: "M1 10l9.5 10L20 10M10.5 0v19.5",
                    stroke: "currentColor"
                }))
            };

            function C() {
                var e = Object(u.a)(["\n"]);
                return C = function() {
                    return e
                }, e
            }

            function D() {
                var e = Object(u.a)(["\n  background-color: var(--background);\n  position: absolute;\n  bottom: calc(100% + 0.5rem);\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  \n  --negativeDotSize: calc(var(--maxDotSize) * -1);\n  --padding: 1rem;\n  --tooltipEdgeToArrowCenter: 26px;\n\n  font-weight: 700;\n  animation: ", " 1s;\n  \n  left: calc(var(--maxDotSize) / 2 - var(--tooltipEdgeToArrowCenter));\n  \n  @media (min-width: 960px) {\n    left: calc(var(--negativeDotSize) / 2 - var(--padding) - var(--tooltipEdgeToArrowCenter));\n  }\n\n  .tooltipIcon {\n    animation: ", " 1s infinite;\n    margin-right: 0.75rem;\n  }\n"]);
                return D = function() {
                    return e
                }, e
            }

            function A() {
                var e = Object(u.a)(["\n  0%, 70% {\n    opacity: 0;\n    transform: translate(0, 1rem);\n  }\n"]);
                return A = function() {
                    return e
                }, e
            }

            function B() {
                var e = Object(u.a)(["\n  50% {\n    transform: translate(0, 0.3rem);\n  }\n"]);
                return B = function() {
                    return e
                }, e
            }
            var z = Object(T.b)(B()),
                F = Object(T.b)(A()),
                M = s.a.div(D(), F, z),
                N = s.a.div(C()),
                L = function(e) {
                    var n = e.isVisible,
                        t = e.priorityEditorIsOpen;
                    return (a.a.createElement(M, {
                        isVisible: n
                    }, t ? a.a.createElement(N, null, "Adjust the circle size with the slider to indicate priority") : a.a.createElement(a.a.Fragment, null, a.a.createElement(S, {
                        className: "tooltipIcon"
                    }), a.a.createElement(N, null, "Adjust priority here"))))
                };

            function P() {
                var e = Object(u.a)(["\n  width: var(--dotSize);\n  height: var(--dotSize);\n  border-radius: 100%;\n  background-color: var(--accent);\n  cursor: pointer;\n"]);
                return P = function() {
                    return e
                }, e
            }

            function I() {
                var e = Object(u.a)(["\n  width: var(--maxDotSize);\n  height: var(--maxDotSize);\n  border-radius: 100%;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:focus {\n    outline: none;\n  }\n"]);
                return I = function() {
                    return e
                }, e
            }
            var R = s.a.button(I()),
                X = s.a.div(P()),
                H = function(e) {
                    var n = e.prority,
                        t = e.onClick;
                    return (a.a.createElement(R, {
                        onClick: t
                    }, a.a.createElement(X, {
                        prority: n,
                        style: {
                            "--dotSize": "calc(".concat(n, "rem / var(--dotRatio))")
                        }
                    })))
                };

            function V() {
                var e = Object(u.a)(["\n  display: flex;\n  padding-left: 1rem;\n  margin-left: auto;\n\n  .IconButton + .IconButton {\n    margin-left: 0.5rem;\n  }\n"]);
                return V = function() {
                    return e
                }, e
            }

            function W() {
                var e = Object(u.a)(["\n  width: 100%;\n"]);
                return W = function() {
                    return e
                }, e
            }

            function J() {
                var e = Object(u.a)(["\n  -webkit-appearance: none;\n  width: 100%;\n  height: 22px;\n  border-radius: 0px;\n  background: none;\n  outline: none;\n  cursor: pointer;\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 22px;\n    height: 22px;\n    border-radius: 50%; \n    background: var(--body);\n    cursor: pointer;\n    top: 3px;\n    position: relative;\n  }\n\n  &::-moz-range-thumb {\n    width: 22px;\n    height: 22px;\n    border-radius: 50%;\n    background: var(--body);\n    cursor: pointer;\n    top: 3px;\n    position: relative;\n  }\n\n  &:focus::-webkit-slider-thumb {\n    box-shadow: inset 0 0 0 1px var(--accent), inset 0 0 0 4px var(--background);\n  }\n  &:focus::-moz-range-thumb {\n    box-shadow: inset 0 0 0 1px var(--accent), inset 0 0 0 4px var(--background);\n  }\n"]);
                return J = function() {
                    return e
                }, e
            }

            function Y() {
                var e = Object(u.a)(["\n  width: 100%;\n  max-width: 30rem;\n  margin-right: 1rem;\n  position: relative;\n\n  &:before {\n    content: '';\n    position: absolute;\n    width: calc(100% - 18px);\n    height: 2px;\n    background-image: linear-gradient(90deg, var(--body), var(--body) 90%, transparent 90%, transparent 100%);\n    background-size: 11.1111% 1px;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    height: 2px;\n    z-index: -1;\n  }\n"]);
                return Y = function() {
                    return e
                }, e
            }

            function _() {
                var e = Object(u.a)(["\n  display: flex;\n  min-height: 22px;\n  align-items: center;\n  justify-content: space-between;\n  ", ";\n\n  .ToggleButton {\n    margin-left: auto;\n  }\n"]);
                return _ = function() {
                    return e
                }, e
            }

            function G() {
                var e = Object(u.a)(["\n  display: flex;\n  align-items: center;\n  \n  ", ";\n"]);
                return G = function() {
                    return e
                }, e
            }

            function $() {
                var e = Object(u.a)(["\n  font: inherit;\n  font-size: var(--titleSize);\n  color: inherit;\n  border: none;\n  padding: 1px 0 0 0;\n  font-family: var(--themeFont);\n  letter-spacing: var(--themeFontLS);\n  background-color: transparent;\n  margin-right: 1rem;\n  width: 100%;\n\n  &:focus {\n    outline: none;\n  }\n"]);
                return $ = function() {
                    return e
                }, e
            }

            function q() {
                var e = Object(u.a)(["\n  width: var(--maxDotSize);\n  height: var(--maxDotSize);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n\n  @media (min-width: 960px) {\n    position: absolute;\n    left: calc(var(--maxDotSize) * -1 - 1rem);\n  }\n  \n  @media (max-width: 959px) {\n    margin-right: 1rem;\n  }\n"]);
                return q = function() {
                    return e
                }, e
            }

            function K() {
                var e = Object(u.a)(["\n  font: inherit;\n  font-size: var(--titleSize);\n  color: inherit;\n  border: none;\n  cursor: text;\n  padding: 0;\n  font-family: var(--themeFont);\n  letter-spacing: var(--themeFontLS);\n  background-color: transparent;\n  ", "\n  text-align: left;\n\n  &:focus {\n    outline: none;\n    box-shadow: inset 0 0 0 1px var(--accent);\n  }\n"]);
                return K = function() {
                    return e
                }, e
            }

            function Q() {
                var e = Object(u.a)(["\n"]);
                return Q = function() {
                    return e
                }, e
            }

            function U() {
                var e = Object(u.a)(["\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  background: var(--backdrop);\n  top: 0;\n  left: 0;\n  z-index: 10;\n"]);
                return U = function() {
                    return e
                }, e
            }

            function Z() {
                var e = Object(u.a)(["\n  display: flex;\n  align-items: center;\n  min-height: var(--taskPaddingY);\n  padding: 0.5rem 0;\n  border-bottom: 1px solid var(--border);\n  position: relative;\n  background-color: var(--background);\n  ", ";\n  ", ";\n  ", ";\n"]);
                return Z = function() {
                    return e
                }, e
            }

            function ee() {
                var e = Object(u.a)(["\n  width: 1px;\n  height: 1px;\n  display: block;\n  position: absolute;\n  top: -30vh;\n"]);
                return ee = function() {
                    return e
                }, e
            }
            var ne = s.a.div(ee()),
                te = s.a.li(Z(), (function(e) {
                    return e.isVisible && "display: none"
                }), (function(e) {
                    return e.editorIsOpen ? "z-index: 11" : "z-index: 0"
                }), (function(e) {
                    return e.editorIsOpen && "\n    box-shadow:\n    calc(var(--pageMaxWidth) * -1 + var(--pagePaddingX)*2) 0 var(--background),\n    calc(var(--pageMaxWidth) - var(--pagePaddingX)*2) 0 var(--background),\n    2rem 0 var(--background),\n    -2rem 0 var(--background);\n  "
                })),
                re = s.a.div(U()),
                ae = s.a.div(Q()),
                ie = s.a.button(K(), (function(e) {
                    return e.isCompleted && "text-decoration: line-through;"
                })),
                oe = s.a.div(q()),
                ce = s.a.input($()),
                le = s.a.form(G(), (function(e) {
                    return e.isVisible ? "" : "\n    opacity: 0;\n    position: absolute;\n    left: -100vw;\n    width: 0;\n    height: 0"
                })),
                ue = s.a.form(_(), (function(e) {
                    return e.isVisible ? "" : "\n    opacity: 0;\n    position: absolute;\n    left: -100vw;\n    width: 0;\n    height: 0"
                })),
                se = s.a.div(Y()),
                de = s.a.input(J()),
                me = s.a.div(W()),
                fe = s.a.div(V()),
                pe = function(e) {
                    var n = e.task,
                        t = e.titleInputOnChange,
                        i = e.completeOnCLick,
                        o = e.deleteOnCLick,
                        l = e.isVisible,
                        u = e.makeEditedPriority,
                        s = e.setTasks,
                        d = e.toggleRemoveFocus,
                        m = e.setTooltipSeenTimes,
                        f = e.tooltipSeenTimes,
                        p = Object(r.useState)(!1),
                        g = Object(c.a)(p, 2),
                        h = g[0],
                        v = g[1],
                        E = Object(r.useState)(!1),
                        x = Object(c.a)(E, 2),
                        k = x[0],
                        O = x[1],
                        T = Object(r.useState)(n.prority),
                        S = Object(c.a)(T, 2),
                        C = S[0],
                        D = S[1],
                        A = h || k,
                        B = Object(r.useRef)(null),
                        z = Object(r.useRef)(null),
                        F = Object(r.useRef)(null),
                        M = function(e, t) {
                            k && f < 2 && m(f + 1), t.preventDefault(), v(!1), O(!1), D(e), s(u(n.id, e)), s(d()), B.current.blur()
                        };
                    return Object(r.useEffect)((function() {
                        var e = setTimeout((function() {
                            k || D(n.prority)
                        }), 20);
                        return function() {
                            return clearTimeout(e)
                        }
                    }), [k, C, n.prority]), Object(r.useEffect)((function() {
                        var e = setTimeout((function() {
                            n.focused && (console.log(n), v(!0), B.current.select(), F.current.scrollIntoView({
                                behavior: "smooth"
                            }))
                        }), 30);
                        return function() {
                            return clearTimeout(e)
                        }
                    }), [n, n.focused, n.id]), a.a.createElement(a.a.Fragment, null, a.a.createElement(te, {
                        editorIsOpen: A,
                        isVisible: l
                    }, f < 1 && (h || k) && a.a.createElement(L, {
                        isVisible: h || k,
                        priorityEditorIsOpen: k
                    }), a.a.createElement(ne, {
                        ref: F
                    }), a.a.createElement(oe, null, a.a.createElement(H, {
                        prority: A ? C : n.prority,
                        onClick: function() {
                            return O(!0), void z.current.focus()
                        }
                    })), a.a.createElement(ae, null, !h && !k && a.a.createElement(ie, {
                        onClick: function() {
                            return v(!0), void B.current.select()
                        },
                        isCompleted: n.completed
                    }, n.title)), a.a.createElement(me, {
                        style: {
                            width: h || k ? "100%" : "unset"
                        }
                    }, a.a.createElement(le, {
                        isVisible: h && !k
                    }, a.a.createElement(ce, {
                        value: n.title,
                        onChange: t,
                        ref: B
                    }), a.a.createElement(b, {
                        isAccent: !0,
                        onClick: function(e) {
                            return M(C, e)
                        }
                    }, "Done")), a.a.createElement(ue, {
                        isVisible: k
                    }, a.a.createElement(se, null, a.a.createElement(de, {
                        type: "range",
                        min: 1,
                        max: 10,
                        value: C,
                        onChange: function(e) {
                            return D(e.target.value)
                        },
                        ref: z
                    })), a.a.createElement(b, {
                        isAccent: !0,
                        onClick: function(e) {
                            return M(C, e)
                        }
                    }, "Done"))), !A && a.a.createElement(a.a.Fragment, null, a.a.createElement(fe, null, a.a.createElement(w, {
                        icon: a.a.createElement(y, null),
                        size: "var(--maxDotSize)",
                        onClick: i,
                        isChecked: n.completed
                    }), a.a.createElement(w, {
                        icon: a.a.createElement(j, null),
                        size: "var(--maxDotSize)",
                        onClick: o
                    })))), A && a.a.createElement(re, {
                        onClick: function(e) {
                            return M(C, e)
                        }
                    }))
                },
                ge = t(8),
                he = t.n(ge);
            var ve = function(e) {
                return r.createElement("svg", Object.assign({
                    width: 2826,
                    height: 2018,
                    viewBox: "0 0 2826 2018",
                    fill: "none",
                    className: "SvgDots"
                }, e), r.createElement("circle", {
                    cx: 1555,
                    cy: 1303,
                    r: 154,
                    fill: "#DF3600"
                }), r.createElement("circle", {
                    cx: 1125,
                    cy: 1384,
                    r: 20,
                    fill: "#DF3600"
                }), r.createElement("circle", {
                    cx: 1262,
                    cy: 1153,
                    r: 65,
                    fill: "#DF3600"
                }), r.createElement("circle", {
                    cx: 1691.5,
                    cy: 1096.5,
                    r: 17.5,
                    fill: "#DF3600"
                }), r.createElement("circle", {
                    cx: 895.5,
                    cy: 1215.5,
                    r: 18.5,
                    fill: "#DF3600"
                }), r.createElement("circle", {
                    r: 5,
                    transform: "matrix(-1 0 0 1 890 1028)",
                    fill: "#DF3600"
                }), r.createElement("circle", {
                    cx: 1064,
                    cy: 1243,
                    r: 31,
                    fill: "#DF3600"
                }), r.createElement("circle", {
                    cx: 804.5,
                    cy: 942.5,
                    r: 10.5,
                    fill: "#DF3600"
                }), r.createElement("circle", {
                    cx: 799.5,
                    cy: 1387.5,
                    r: 2.5,
                    fill: "#DF3600"
                }), r.createElement("circle", {
                    cx: 988.5,
                    cy: 988.5,
                    r: 8.5,
                    fill: "#DF3600"
                }), r.createElement("circle", {
                    cx: 1124.5,
                    cy: 771.5,
                    r: 210.5,
                    fill: "#DF3600"
                }), r.createElement("circle", {
                    cx: 1397,
                    cy: 842,
                    r: 31,
                    fill: "#DF3600"
                }), r.createElement("circle", {
                    cx: 1635.5,
                    cy: 926.5,
                    r: 73.5,
                    fill: "#DF3600"
                }), r.createElement("circle", {
                    cx: 1522,
                    cy: 827,
                    r: 8,
                    fill: "#DF3600"
                }), r.createElement("circle", {
                    cx: 1494,
                    cy: 642,
                    r: 3,
                    fill: "#DF3600"
                }), r.createElement("circle", {
                    cx: 1985.5,
                    cy: 948.5,
                    r: 5.5,
                    fill: "#DF3600"
                }), r.createElement("circle", {
                    cx: 1872.5,
                    cy: 1182.5,
                    r: 44.5,
                    fill: "#DF3600"
                }), r.createElement("circle", {
                    r: 7,
                    transform: "matrix(1 0 0 -1 1739 668)",
                    fill: "#DF3600"
                }), r.createElement("circle", {
                    cx: 1816,
                    cy: 863,
                    r: 15,
                    fill: "#DF3600"
                }), r.createElement("circle", {
                    cx: 1054,
                    cy: 1122,
                    r: 10,
                    fill: "#DF3600"
                }), r.createElement("circle", {
                    cx: 2028,
                    cy: 731,
                    r: 5,
                    fill: "#DF3600"
                }))
            };

            function be() {
                var e = Object(u.a)(["\n  font-family: var(--mono);\n  font-size: 1.1rem;\n  margin-bottom: 1rem;\n"]);
                return be = function() {
                    return e
                }, e
            }

            function ye() {
                var e = Object(u.a)(["\n  position: absolute;\n  margin-top: -4rem;\n\n  .SvgDots {\n    transform: scale(1);\n    transform-origin: center;\n  }\n  \n  .SvgDots circle {\n    transform: scale(3);\n    transform-origin: center;\n    animation: ", " 1s forwards cubic-bezier(0, 1, 1, 1);\n\n    &:nth-of-type(1) { transform: translate(20rem, 40rem) scale(1.2); animation-duration: 6s }\n    &:nth-of-type(2) { transform: translate(-26rem, 15rem) scale(1.2); animation-duration: 7s }\n    &:nth-of-type(3) { transform: translate(-22rem, 26rem) scale(1.2); animation-duration: 6s }\n    &:nth-of-type(4) { transform: translate(41rem, 11rem) scale(1.2); animation-duration: 9s }\n    &:nth-of-type(5) { transform: translate(-12rem, -16rem) scale(1.2); animation-duration: 6s }\n    &:nth-of-type(6) { transform: translate(10rem, 10rem) scale(1.2); animation-duration: 6s }\n    &:nth-of-type(7) { transform: translate(-26rem, 26rem) scale(1.2); animation-duration: 8s }\n    &:nth-of-type(8) { transform: translate(-16rem, -12rem) scale(1.2); animation-duration: 7s }\n    &:nth-of-type(9) { transform: translate(-13rem, 4rem) scale(1.2); animation-duration: 5s }\n    &:nth-of-type(10) { transform: translate(-33rem, -13rem) scale(1.2); animation-duration: 8.5s }\n    &:nth-of-type(11) { transform: translate(-10rem, -34rem) scale(1.2); animation-duration: 7.5s }\n    &:nth-of-type(12) { transform: translate(1rem, -21rem) scale(1.2); animation-duration: 11s }\n    &:nth-of-type(13) { transform: translate(18rem, -21rem) scale(1.2); animation-duration: 10s }\n    &:nth-of-type(14) { transform: translate(4rem, -18rem) scale(1.2); animation-duration: 15s }\n    &:nth-of-type(15) { transform: translate(2rem, -10rem) scale(1.2); animation-duration: 6.2s }\n    &:nth-of-type(16) { transform: translate(10rem, -4rem) scale(1.2); animation-duration: 6.4s }\n    &:nth-of-type(17) { transform: translate(14rem, 15rem) scale(1.2); animation-duration: 6s }\n    &:nth-of-type(18) { transform: translate(-8rem, -8rem) scale(1.2); animation-duration: 6s }\n    &:nth-of-type(19) { transform: translate(24rem, -14rem) scale(1.2); animation-duration: 6s }\n    &:nth-of-type(20) { transform: translate(-20rem, 5rem) scale(1.2); animation-duration: 14s }\n    &:nth-of-type(21) { transform: translate(15rem, -15rem) scale(1.2); animation-duration: 6s }\n  }\n"]);
                return ye = function() {
                    return e
                }, e
            }

            function Ee() {
                var e = Object(u.a)(["\n  position: relative;\n  padding: 0 1rem;\n  opacity: 0;\n  animation: ", " 1s 2s forwards;\n"]);
                return Ee = function() {
                    return e
                }, e
            }

            function xe() {
                var e = Object(u.a)(["\n  background-color: white;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  transition: ", "ms;\n  opacity: ", ";\n  transform: ", ";\n"]);
                return xe = function() {
                    return e
                }, e
            }

            function ke() {
                var e = Object(u.a)(["\n  100% {\n    opacity: 1;\n  }\n"]);
                return ke = function() {
                    return e
                }, e
            }

            function Oe() {
                var e = Object(u.a)(["\n  100% {\n    opacity: 1;\n    transform: translate(0, 0) scale(1);\n  }\n"]);
                return Oe = function() {
                    return e
                }, e
            }
            var we = Object(T.b)(Oe()),
                je = Object(T.b)(ke()),
                Te = s.a.div(xe(), 500, (function(e) {
                    return e.animateOut ? 0 : 1
                }), (function(e) {
                    return e.animateOut ? "scale(1.05)" : "scale(1)"
                })),
                Se = s.a.div(Ee(), je),
                Ce = s.a.div(ye(), we),
                De = s.a.div(be()),
                Ae = function() {
                    var e = Object(r.useState)(!1),
                        n = Object(c.a)(e, 2),
                        t = n[0],
                        i = n[1],
                        o = Object(r.useState)(!0),
                        l = Object(c.a)(o, 2),
                        u = l[0],
                        s = l[1],
                        m = d("introIsSeen", !1),
                        f = Object(c.a)(m, 2),
                        p = f[0],
                        g = f[1];
                    return Object(r.useEffect)((function() {
                        var e = setTimeout((function() {
                            t && (s(!1), g(!0))
                        }), 500);
                        return function() {
                            return clearTimeout(e)
                        }
                    }), [t, g]), a.a.createElement(a.a.Fragment, null, !p && u && a.a.createElement(Te, {
                        animateOut: t
                    }, a.a.createElement(Ce, null, a.a.createElement(ve, null)), a.a.createElement(Se, null, a.a.createElement(De, {
                        className: "Text"
                    }, "This is ", a.a.createElement("span", {
                        style: {
                            fontWeight: 700
                        }
                    }, "Prime"), ". A task manager that highlights your prime concerns."), a.a.createElement(b, {
                        onClick: function() {
                            i(!0)
                        }
                    }, "Open Prime"))))
                },
                Be = [{
                    id: 1,
                    title: "Hi ●'◡'●",
                    prority: 3,
                    completed: !1,
                    dateAdded: new Date("1/1/2020 00:06")
                }, {
                    id: 2,
                    title: "Welcome to Prime",
                    prority: 7,
                    completed: !1,
                    dateAdded: new Date("1/1/2020 00:05")
                }, {
                    id: 3,
                    title: "No account needed",
                    prority: 4,
                    completed: !1,
                    dateAdded: new Date("1/1/2020 00:04")
                }, {
                    id: 4,
                    title: "Click here to edit the tasks",
                    prority: 2,
                    completed: !1,
                    dateAdded: new Date("1/1/2020 00:03")
                }, {
                    id: 5,
                    title: "Resize the circle to indicate priority",
                    prority: 6,
                    completed: !1,
                    dateAdded: new Date("1/1/2020 00:02")
                }, {
                    id: 6,
                    title: "Try dark mode ☾",
                    prority: 1,
                    completed: !1,
                    dateAdded: new Date("1/1/2020 00:01")
                }];

            function ze() {
                var e = Object(u.a)(["\n  height: 100%;\n  background-color: var(--backdrop);\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 110;\n  animation: 0.3s ", ";\n"]);
                return ze = function() {
                    return e
                }, e
            }

            function Fe() {
                var e = Object(u.a)(["\n  .closeIcon {\n    margin-left: auto;\n  }\n  "]);
                return Fe = function() {
                    return e
                }, e
            }

            function Me() {
                var e = Object(u.a)(["\n  max-width: calc(var(--pageMaxWidth) / 2);\n  padding: 2rem var(--pagePaddingX) 4rem var(--pagePaddingX);\n  margin: 0 auto;\n  "]);
                return Me = function() {
                    return e
                }, e
            }

            function Ne() {
                var e = Object(u.a)(["\n  background-color: var(--background);\n  height: 100%;\n  z-index: 120;\n  position: relative;\n  animation: 0.3s ", ";\n  "]);
                return Ne = function() {
                    return e
                }, e
            }

            function Le() {
                var e = Object(u.a)(["\n  position: fixed;\n  z-index: 1200;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding-top: 8rem;\n  "]);
                return Le = function() {
                    return e
                }, e
            }

            function Pe() {
                var e = Object(u.a)(["\n  0% {\n    opacity: 0;\n  }\n"]);
                return Pe = function() {
                    return e
                }, e
            }

            function Ie() {
                var e = Object(u.a)(["\n  0% {\n    opacity: 0;\n    transform: translateY(4rem);\n  }\n"]);
                return Ie = function() {
                    return e
                }, e
            }
            var Re = Object(T.b)(Ie()),
                Xe = Object(T.b)(Pe()),
                He = s.a.div(Le()),
                Ve = s.a.div(Ne(), Re),
                We = s.a.div(Me()),
                Je = s.a.div(Fe()),
                Ye = s.a.div(ze(), Xe),
                _e = function(e) {
                    var n = e.setAboutModalIsOpen;
                    return (a.a.createElement(He, null, a.a.createElement(Ye, {
                        onClick: function() {
                            return n(!1)
                        }
                    }), a.a.createElement(Ve, null, a.a.createElement(We, null, a.a.createElement(Je, null, a.a.createElement(w, {
                        className: "closeIcon",
                        icon: a.a.createElement(j, null),
                        onClick: function() {
                            return n(!1)
                        }
                    })), a.a.createElement("h1", null, "About Prime"), 
                        a.a.createElement("p", null, "Less noise, more focus. Prime is a task manager that visually highlights what is your prime concern at the moment."), 
                        a.a.createElement("br", null), 
                        a.a.createElement("h2", null, "No account needed"), 
                        a.a.createElement("p", null, "Your tasks are stored in your browser (localStorage). Your data will be kept securely until you delete it manually or clear cookies stored."), 
                        a.a.createElement("br", null), 
                        a.a.createElement("hr", null), 
                        a.a.createElement("br", null), 
                        a.a.createElement("p", null, "Made with ❤️ by ", a.a.createElement("a", {
                        href: "https://irev88.github.io",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "REV")), a.a.createElement("p", null, a.a.createElement("a", {
                        href: "https://irev88.github.io/contact",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "Contact")), a.a.createElement("p", null, a.a.createElement("a", {
                        href: "https://github.com/irev88/irev88.github.io",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "Github"))))))
                };

            function Ge() {
                var e = Object(u.a)(["\n  display: flex;\n  justify-content: flex-end;\n  padding-bottom: 1rem;\n"]);
                return Ge = function() {
                    return e
                }, e
            }

            function $e() {
                var e = Object(u.a)(["\n  max-width: var(--pageMaxWidth);\n  padding: 1rem var(--pagePaddingX) 8rem var(--pagePaddingX);\n  margin: 0 auto;\n"]);
                return $e = function() {
                    return e
                }, e
            }

            function qe() {
                var e = Object(u.a)(["\n  padding: var(--pagePaddingX);\n  font-weight: 500;\n  \n  &.MainHeaderLeftSection {\n    border-right: 1px solid var(--border);\n    font-size: 1.2rem;\n    font-family: var(--themeFont);\n  }\n  \n  &.MainHeaderRightSection {\n    text-align: right;\n    border-left: 1px solid var(--border);\n  }\n\n  @media (max-width: 959px) {\n    &.MainHeaderLeftSection {\n      display: none;\n    }\n  }\n  \n  @media (min-width: 960px) {\n    &.MainHeaderLeftSection,\n    &.MainHeaderRightSection {\n      border: 0;\n    }\n\n    width: 100%;\n    max-width: calc((100vw - var(--headerContentWidth) - var(--headerPaddingX) * 2) / 2);\n  }\n"]);
                return qe = function() {
                    return e
                }, e
            }

            function Ke() {
                var e = Object(u.a)(["\n  width: var(--headerContentWidth);\n  max-width: 100%;\n  padding: 2rem 0;\n  display: flex;\n  align-items: center;\n  overflow: auto;\n\n  @media (max-width: 959px) {\n    padding: var(--pagePaddingX) 0 var(--pagePaddingX) var(--pagePaddingX);\n  }\n"]);
                return Ke = function() {
                    return e
                }, e
            }

            function Qe() {
                var e = Object(u.a)(["\n  --headerContentWidth: calc(var(--pageMaxWidth) - var(--pagePaddingX)*2);\n\n  border-bottom: 1px solid var(--border);\n  background-color: var(--background);\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 var(--headerPaddingX);\n"]);
                return Qe = function() {
                    return e
                }, e
            }

            function Ue() {
                var e = Object(u.a)(["\n  .headerButtonsSpacer {\n    width: 0;\n    height: 1rem;\n    flex-shrink: 0;\n    \n    @media (max-width: 799px) {\n      width: var(--pagePaddingX);\n    }\n  }\n"]);
                return Ue = function() {
                    return e
                }, e
            }
            var Ze = s.a.div(Ue()),
                en = s.a.header(Qe()),
                nn = s.a.div(Ke()),
                tn = s.a.div(qe()),
                rn = s.a.ul($e()),
                an = s.a.div(Ge()),
                on = function(e) {
                    var n = e.tasks,
                        t = e.setTasks,
                        r = e.makeEditedTitle,
                        i = e.makeEditedPriority,
                        o = e.toggleCompleteTask,
                        c = e.deleteTask,
                        u = e.taskCompleted,
                        s = e.order,
                        d = e.toggleRemoveFocus,
                        m = e.setTooltipSeenTimes,
                        f = e.tooltipSeenTimes;
                    return a.a.createElement(a.a.Fragment, null, ("highestPriority" === s ? Object(l.a)(n).sort((function(e, n) {
                        return n.prority - e.prority
                    })) : Object(l.a)(n).sort((function(e, n) {
                        return n.dateAdded - e.dateAdded
                    }))).map((function(e, n) {
                        return a.a.createElement(pe, {
                            isVisible: e.completed === u,
                            task: e,
                            key: n,
                            titleInputOnChange: function(n) {
                                return t(r(e.id, n.target.value))
                            },
                            priorityInputOnChange: function(n) {
                                return t(i(e.id, n.target.value))
                            },
                            completeOnCLick: function() {
                                return t(o(e.id))
                            },
                            deleteOnCLick: function() {
                                return t(c(e.id))
                            },
                            prorityOnSave: function(n) {
                                return t(i(e.id, n.target.value))
                            },
                            makeEditedPriority: i,
                            setTasks: t,
                            storedTaskPrority: e.prority,
                            toggleRemoveFocus: d,
                            setTooltipSeenTimes: m,
                            tooltipSeenTimes: f
                        })
                    })))
                };
            var cn = function() {
                var e = d("tasks", Be),
                    n = Object(c.a)(e, 2),
                    t = n[0],
                    i = n[1],
                    o = Object(r.useState)(!0),
                    l = Object(c.a)(o, 2),
                    u = l[0],
                    s = l[1],
                    m = d("order", "dateAdded"),
                    f = Object(c.a)(m, 2),
                    p = f[0],
                    g = f[1],
                    y = d("darkModeOn", !1),
                    E = Object(c.a)(y, 2),
                    x = E[0],
                    k = E[1],
                    O = d("monoOn", !1),
                    w = Object(c.a)(O, 2),
                    j = w[0],
                    T = w[1],
                    S = d("smallTextOn", !1),
                    C = Object(c.a)(S, 2),
                    D = C[0],
                    A = C[1],
                    B = d("tooltipSeenTimes", 0),
                    z = Object(c.a)(B, 2),
                    F = z[0],
                    M = z[1],
                    N = Object(r.useState)(!1),
                    L = Object(c.a)(N, 2),
                    P = L[0],
                    I = L[1];
                x ? document.body.classList.add("dark") : document.body.classList.remove("dark"), j ? document.body.classList.add("mono") : document.body.classList.remove("mono"), D ? document.body.classList.add("smallText") : document.body.classList.remove("smallText");
                var R = function() {
                        var e = [];
                        return t.map((function(n) {
                            return e.push(n.id)
                        })), e.length > 0 ? Math.max.apply(Math, e) : 0
                    },
                    X = function() {
                        var e = [];
                        return e.push({
                            id: R() + 1,
                            title: "New task",
                            prority: 1,
                            completed: !1,
                            dateAdded: new Date,
                            focused: !0
                        }), t.map((function(n) {
                            return e.push(n)
                        })), e
                    },
                    H = t.filter((function(e) {
                        return !1 === e.completed
                    })).length,
                    V = t.filter((function(e) {
                        return !0 === e.completed
                    })).length;
                return Object(r.useEffect)((function() {
                    return he.a.bind("alt+n", (function(e) {
                            e.preventDefault(), i(X())
                        })),
                        function() {
                            he.a.unbind("alt+n")
                        }
                })), Object(r.useEffect)((function() {
                    return he.a.bind("shift+c+l", (function(e) {
                            e.preventDefault(), localStorage.clear()
                        })),
                        function() {
                            he.a.unbind("shift+c+l")
                        }
                })), a.a.createElement(Ze, null, a.a.createElement(Ae, null), P && a.a.createElement(_e, {
                    setAboutModalIsOpen: I
                }), a.a.createElement(en, null, a.a.createElement(tn, {
                    className: "MainHeaderLeftSection"
                }, "Prime."), a.a.createElement(nn, null, a.a.createElement(v, {
                    className: "headerButtons"
                }, a.a.createElement(b, {
                    onClick: function() {
                        return s(!u)
                    },
                    className: "ToggleButton"
                }, a.a.createElement(h, {
                    isActive: u,
                    className: "ToggleButtonOption"
                }, "Pending ", a.a.createElement("span", {
                    style: {
                        color: "var(--dimmed)"
                    }
                }, H)), a.a.createElement(h, {
                    isActive: !u,
                    className: "ToggleButtonOption"
                }, "Completed ", a.a.createElement("span", {
                    style: {
                        color: "var(--dimmed)"
                    }
                }, V)))), a.a.createElement(v, {
                    className: "headerButtons"
                }, a.a.createElement(b, {
                    onClick: function() {
                        return g("highestPriority" === p ? "dateAdded" : "highestPriority")
                    },
                    className: "ToggleButton"
                }, a.a.createElement(h, {
                    isActive: "highestPriority" === p,
                    className: "ToggleButtonOption"
                }, "Highest Priority"), a.a.createElement(h, {
                    isActive: "dateAdded" === p,
                    className: "ToggleButtonOption"
                }, "Latest"))), a.a.createElement(v, {
                    className: "headerButtons headerButtonsRight"
                }, a.a.createElement(b, {
                    onClick: function() {
                        return k(!x)
                    },
                    className: "ToggleButton"
                }, a.a.createElement(h, {
                    isActive: !x,
                    className: "ToggleButtonOption"
                }, "Light"), a.a.createElement(h, {
                    isActive: x,
                    className: "ToggleButtonOption"
                }, "Dark"))), a.a.createElement(v, {
                    className: "headerButtons"
                }, a.a.createElement(b, {
                    onClick: function() {
                        return T(!j)
                    },
                    className: "ToggleButton"
                }, a.a.createElement(h, {
                    isActive: !j,
                    className: "ToggleButtonOption"
                }, a.a.createElement("span", {
                    style: {
                        fontFamily: "var(--mono)",
                        lineHeight: 1
                    }
                }, "A")), a.a.createElement(h, {
                    isActive: j,
                    className: "ToggleButtonOption"
                }, a.a.createElement("span", {
                    style: {
                        fontFamily: "var(--sans)",
                        lineHeight: 1
                    }
                }, "A")))), a.a.createElement(v, {
                    className: "headerButtons fontButtons"
                }, a.a.createElement(b, {
                    onClick: function() {
                        return A(!D)
                    },
                    className: "ToggleButton"
                }, a.a.createElement(h, {
                    isActive: !D,
                    className: "ToggleButtonOption"
                }, a.a.createElement("span", null, "T")), a.a.createElement(h, {
                    isActive: D,
                    className: "ToggleButtonOption"
                }, a.a.createElement("span", {
                    style: {
                        fontSize: "70%"
                    }
                }, "T")))), a.a.createElement("div", {
                    className: "headerButtonsSpacer"
                })), a.a.createElement(tn, {
                    className: "MainHeaderRightSection"
                }, a.a.createElement(b, {
                    onClick: function() {
                        return I(!0)
                    }
                }, "About"))), a.a.createElement(rn, {
                    key: p
                }, u && a.a.createElement(an, null, a.a.createElement(b, {
                    isAccent: !0,
                    onClick: function() {
                        return i(X())
                    }
                }, "New", a.a.createElement("span", {
                    style: {
                        opacity: .7,
                        paddingLeft: "0.5em"
                    }
                }, " (alt + n)"))), a.a.createElement(on, {
                    tasks: t,
                    order: p,
                    setTasks: i,
                    makeEditedTitle: function(e, n) {
                        var r = [];
                        return t.map((function(t) {
                            return e === t.id && (t.title = n), r.push(t)
                        })), r
                    },
                    makeEditedPriority: function(e, n) {
                        var r = [];
                        return t.map((function(t) {
                            return e === t.id && (t.prority = n), r.push(t)
                        })), r
                    },
                    toggleCompleteTask: function(e) {
                        var n = [];
                        return t.map((function(t) {
                            return e === t.id && (t.completed = !t.completed), n.push(t)
                        })), n
                    },
                    deleteTask: function(e) {
                        return t.filter((function(n) {
                            return n.id !== e
                        }))
                    },
                    taskCompleted: u,
                    toggleRemoveFocus: function() {
                        var e = [];
                        return t.map((function(n) {
                            return n.focused && (n.focused = !1), e.push(n)
                        })), e
                    },
                    setTooltipSeenTimes: M,
                    tooltipSeenTimes: F
                })))
            };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            o.a.render(a.a.createElement(a.a.StrictMode, null, a.a.createElement(cn, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            })).catch((function(e) {
                console.error(e.message)
            }))
        }
    },
    [
        [17, 1, 2]
    ]
]);
