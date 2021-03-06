! function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var r = t();
        for (var n in r)("object" == typeof exports ? exports : e)[n] = r[n]
    }
}(this, function() {
    return function(e) {
        function t(n) {
            if (r[n]) return r[n].exports;
            var o = r[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
        }
        var r = {};
        return t.m = e, t.c = r, t.p = "", t(0)
    }([function(e, t, r) {
        (function(t) {
            "use strict";
            var n = r(4),
                o = r(8),
                i = r(3),
                a = r(9),
                s = r(2).Promise,
                u = r(16),
                l = r(17);
            e.exports = t.SC = {
                initialize: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    i.set("oauth_token", e.oauth_token), i.set("client_id", e.client_id), i.set("redirect_uri", e.redirect_uri), i.set("baseURL", e.baseURL), i.set("connectURL", e.connectURL)
                },
                get: function(e, t) {
                    return n.request("GET", e, t)
                },
                post: function(e, t) {
                    return n.request("POST", e, t)
                },
                put: function(e, t) {
                    return n.request("PUT", e, t)
                },
                delete: function(e) {
                    return n.request("DELETE", e)
                },
                upload: function(e) {
                    return n.upload(e)
                },
                connect: function(e) {
                    return a(e)
                },
                isConnected: function() {
                    return void 0 !== i.get("oauth_token")
                },
                oEmbed: function(e, t) {
                    return n.oEmbed(e, t)
                },
                resolve: function(e) {
                    return n.resolve(e)
                },
                Recorder: u,
                Promise: s,
                stream: function(e, t) {
                    return l(e, t)
                },
                connectCallback: function() {
                    o.notifyDialog(this.location)
                }
            }
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        e.exports = function(e) {
            function t(n) {
                if (r[n]) return r[n].exports;
                var o = r[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
            }
            var r = {};
            return t.m = e, t.c = r, t.p = "", t(0)
        }([function(e, t, r) {
            e.exports = {
                SCAudio: r(1),
                SCAudioPublicApiStreamURLRetriever: r(6),
                MaestroCore: r(2),
                MaestroLoaders: r(5),
                MaestroHTML5Player: r(4),
                MaestroHLSMSEPlayer: r(3)
            }
        }, function(e, t, r) {
            ! function(t, n) {
                e.exports = n(r(2), function() {
                    try {
                        return r(! function() {
                            var e = new Error('Cannot find module "@sc/maestro-chromecast-player"');
                            throw e.code = "MODULE_NOT_FOUND", e
                        }())
                    } catch (e) {}
                }(), function() {
                    try {
                        return r(! function() {
                            var e = new Error('Cannot find module "@sc/maestro-flipper-player"');
                            throw e.code = "MODULE_NOT_FOUND", e
                        }())
                    } catch (e) {}
                }(), function() {
                    try {
                        return r(3)
                    } catch (e) {}
                }(), function() {
                    try {
                        return r(4)
                    } catch (e) {}
                }(), r(5))
            }(this, function(e, t, r, n, o, i) {
                return function(e) {
                    function t(n) {
                        if (r[n]) return r[n].exports;
                        var o = r[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        };
                        return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                    }
                    var r = {};
                    return t.m = e, t.c = r, t.i = function(e) {
                        return e
                    }, t.d = function(e, r, n) {
                        t.o(e, r) || Object.defineProperty(e, r, {
                            configurable: !1,
                            enumerable: !0,
                            get: n
                        })
                    }, t.n = function(e) {
                        var r = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return t.d(r, "a", r), r
                    }, t.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, t.p = "", t(t.s = 36)
                }([function(t, r) {
                    t.exports = e
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(0),
                        i = function(e) {
                            function t(t, r) {
                                void 0 === r && (r = "API error.");
                                var n = e.call(this, r) || this;
                                return n.statusCode = t, n
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "SCAUDIO.API_ERROR." + (this.statusCode || "TIMEOUT")
                            }, t.prototype.getStatusCode = function() {
                                return this.statusCode
                            }, t
                        }(o.errors.PlayerFatalError);
                    t.ApiError = i
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(0),
                        i = function(e) {
                            function t(t) {
                                return e.call(this, t || "There was no format available that a player was able to play.") || this
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "SCAUDIO.NOT_SUPPORTED_ERROR"
                            }, t
                        }(o.errors.PlayerFatalError);
                    t.NotSupportedError = i
                }, function(e, t, r) {
                    "use strict";

                    function n(e) {
                        return new i({
                            startPos: 0,
                            endPos: e,
                            startLevel: 0,
                            endLevel: 1,
                            fromEnd: !1
                        })
                    }

                    function o(e) {
                        return new i({
                            startPos: e,
                            endPos: 0,
                            startLevel: 1,
                            endLevel: 0,
                            fromEnd: !0
                        })
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.buildFadeIn = n, t.buildFadeOut = o;
                    var i = function() {
                        function e(e) {
                            var t = e.startPos,
                                r = e.endPos,
                                n = e.startLevel,
                                o = e.endLevel,
                                i = e.fromEnd,
                                a = void 0 !== i && i;
                            if (t < 0) throw new Error("startPos invalid.");
                            if (r < 0 || !a && r < t || a && t < r) throw new Error("endPos invalid.");
                            if (n < 0 || n > 1) throw new Error("startLevel invalid.");
                            if (o < 0 || o > 1) throw new Error("endLevel invalid.");
                            this._startPos = t, this._endPos = r, this._startLevel = n, this._endLevel = o, this._fromEnd = a
                        }
                        return e.prototype.calculate = function(e, t) {
                            var r = this._fromEnd ? t - 500 - this._startPos : this._startPos,
                                n = this._fromEnd ? t - 500 - this._endPos : this._endPos;
                            if (e < r) return {
                                level: this._startLevel,
                                nextCalculatePosition: r - e
                            };
                            if (e <= n) {
                                var o = (e - r) / (n - r),
                                    i = Math.cos(o * Math.PI) / -2 + .5,
                                    a = this._startLevel + (this._endLevel - this._startLevel) * i;
                                return {
                                    level: a,
                                    nextCalculatePosition: e
                                }
                            }
                            return {
                                level: this._endLevel,
                                nextCalculatePosition: 1 / 0
                            }
                        }, e
                    }();
                    t.Fade = i
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function e() {}
                        return e
                    }();
                    t.BaseStreamUrlRetriever = n
                }, function(e, t, r) {
                    "use strict";

                    function n(e, t, r) {
                        return Math.min(t, Math.max(e, r))
                    }
                    var o = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = r(0),
                        a = r(3),
                        s = i.eventDispatcher.EventDispatcher,
                        u = i.helpers.Promise,
                        l = i.helpers.deferred.buildDeferred,
                        c = 100,
                        d = 5e3,
                        p = 1500,
                        h = function(e) {
                            function t(t, r) {
                                var n = e.call(this, t) || this;
                                return n._onPreloadingEnabled = new s, n._onPreloadingDisabled = new s, n._onConnectionRequired = new s, n._onConnectionRecovered = new s, n._volumeAutomators = [], n._volumeScale = 1, n._userVolume = 1, n._volumeAutomationSupported = !1, n._timer = null, n._pauseFadeTimer = null, n._pauseFadeDeferred = null, n._pauseFade = null, n._connectionRequired = !1, n._connectionLossTimer = null, n.onPreloadingEnabled = n._onPreloadingEnabled.getHandle(), n.onPreloadingDisabled = n._onPreloadingDisabled.getHandle(), n.onConnectionRequired = n._onConnectionRequired.getHandle(), n.onConnectionRecovered = n._onConnectionRecovered.getHandle(), n._reloadStreamUrls = r, n._pausedMaxBufferLength = t.pausedMaxBufferLength, n._playingMaxBufferLength = t.playingMaxBufferLength, n._preloadingEnabled = t.preloadingEnabled, n.onPlayerProvided.subscribe(function() {
                                    return n._updateMaxBufferLength()
                                }), n.onChange.subscribe(function(e) {
                                    n.isDead() || ((e.playing === !1 || e.positionJumped || e.stalled || e.ended) && n._completePauseFade(), n._pauseFade && (e.actuallyPlaying === !1 || e.ended) && (n.removeVolumeAutomator(n._pauseFade), n._pauseFade = null), (e.positionJumped || void 0 !== e.actuallyPlaying || void 0 !== e.stalled) && n._updateVolume(), void 0 !== e.playing && n._updateMaxBufferLength(), void 0 !== e.loading && n._calculateIfConnectionRequired())
                                }), window.addEventListener("online", function() {
                                    return n._calculateIfConnectionRequired()
                                }), window.addEventListener("offline", function() {
                                    return n._calculateIfConnectionRequired()
                                }), n._calculateIfConnectionRequired(), n
                            }
                            return o(t, e), t.prototype.reload = function() {
                                this._ensureNotDead(), this._reloadStreamUrls()
                            }, t.prototype.enablePreloading = function() {
                                this.isDead() || this._preloadingEnabled || (this._preloadingEnabled = !0, this._updateMaxBufferLength(), this._onPreloadingEnabled.dispatch(void 0))
                            }, t.prototype.disablePreloading = function() {
                                this.isDead() || this._preloadingEnabled && (this._preloadingEnabled = !1, this._updateMaxBufferLength(), this._onPreloadingDisabled.dispatch(void 0))
                            }, t.prototype.isPreloadingEnabled = function() {
                                return this._preloadingEnabled
                            }, t.prototype.pauseAfterFade = function(e) {
                                var t = this;
                                if (this._ensureNotDead(), this._pauseFadeDeferred) return this._pauseFadeDeferred.promise;
                                if (!this.isPlaying() || !this.isActuallyPlaying()) return u.resolve(this.pause());
                                var r = l();
                                this._pauseFadeDeferred = r;
                                var n = this.getPosition();
                                if (this._pauseFade) throw new Error("Fade should not already be assigned.");
                                return this._pauseFade = new a.Fade({
                                    startPos: n,
                                    endPos: n + e,
                                    startLevel: 1,
                                    endLevel: 0
                                }), this.addVolumeAutomator(this._pauseFade), this._pauseFadeTimer = window.setTimeout(function() {
                                    t._pauseFadeDeferred = null, r.resolve(t.pause())
                                }, e + 50), r.promise
                            }, t.prototype.isConnectionRequired = function() {
                                return this._connectionRequired
                            }, t.prototype.getVolume = function() {
                                return this._volumeAutomationSupported ? this._userVolume : e.prototype.getVolume.call(this)
                            }, t.prototype.addVolumeAutomator = function(e) {
                                var t = this._volumeAutomators.indexOf(e);
                                t < 0 && (this._volumeAutomators.push(e), this._updateVolume())
                            }, t.prototype.removeVolumeAutomator = function(e) {
                                var t = this._volumeAutomators.indexOf(e);
                                t >= 0 && (this._volumeAutomators.splice(t, 1), this._updateVolume())
                            }, t.prototype._triggerError = function(t) {
                                e.prototype._triggerError.call(this, t)
                            }, t.prototype.providePlayer = function(t, r, n) {
                                void 0 === n && (n = !0), this._volumeAutomationSupported = n, e.prototype.providePlayer.call(this, t, r)
                            }, t.prototype._setVolume = function(e) {
                                this._userVolume = e, this._calculateAndSetVolume()
                            }, t.prototype._kill = function() {
                                this._timer && window.clearTimeout(this._timer), null !== this._connectionLossTimer && window.clearTimeout(this._connectionLossTimer), this._abortPauseFade(), e.prototype._kill.call(this)
                            }, t.prototype._calculateIfConnectionRequired = function() {
                                var e = this,
                                    t = this.isLoading() && "navigator" in window && !window.navigator.onLine;
                                t ? null === this._connectionLossTimer && (this._connectionLossTimer = window.setTimeout(function() {
                                    e._connectionLossTimer = null, e._connectionRequired = !0, e._onConnectionRequired.dispatch(void 0)
                                }, p)) : this._connectionRequired ? (this._connectionRequired = !1, this._onConnectionRecovered.dispatch(void 0)) : null !== this._connectionLossTimer && (window.clearTimeout(this._connectionLossTimer), this._connectionLossTimer = null)
                            }, t.prototype._completePauseFade = function() {
                                if (this._pauseFadeDeferred) {
                                    this._pauseFadeTimer && window.clearTimeout(this._pauseFadeTimer);
                                    var e = this._pauseFadeDeferred;
                                    this._pauseFadeDeferred = null, e.resolve(this.pause())
                                }
                            }, t.prototype._abortPauseFade = function() {
                                this._pauseFadeTimer && (window.clearTimeout(this._pauseFadeTimer), this._pauseFadeTimer = null), this._pauseFadeDeferred && (this._pauseFadeDeferred.reject(new Error("Player was killed.")), this._pauseFadeDeferred = null)
                            }, t.prototype._updateVolume = function() {
                                var e = this;
                                if (this._volumeAutomationSupported) {
                                    this._ensureNotDead(), this._timer && (window.clearTimeout(this._timer), this._timer = null);
                                    var t = this.getDuration();
                                    if (null !== t) {
                                        var r = this._volumeAutomators,
                                            o = this.getPosition(),
                                            i = 1 / 0,
                                            a = 1;
                                        r.forEach(function(e) {
                                            var r = e.calculate(o, t),
                                                s = r.nextCalculatePosition,
                                                u = r.level;
                                            a *= n(0, 1, u), s < i && (i = s)
                                        }), this._volumeScale !== a && (this._volumeScale = a, this._calculateAndSetVolume()), i < 1 / 0 && this.isActuallyPlaying() && !this.isStalled() && (this._timer = window.setTimeout(function() {
                                            e._timer = null, e._updateVolume()
                                        }, n(c, d, i - this.getPosition())))
                                    }
                                }
                            }, t.prototype._calculateAndSetVolume = function() {
                                this._volumeAutomationSupported ? e.prototype._setVolume.call(this, this._userVolume * this._volumeScale) : e.prototype._setVolume.call(this, this._userVolume)
                            }, t.prototype._updateMaxBufferLength = function() {
                                var e = this.getPlayer(),
                                    t = e && e.getBufferController();
                                t && (this.isPlaying() ? t.setMaxBufferLength(this._playingMaxBufferLength) : t.setMaxBufferLength(this._preloadingEnabled ? this._pausedMaxBufferLength : 0))
                            }, t
                        }(i.ProxyPlayer);
                    t.Player = h
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(29);
                    t.renditions = n.renditions
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function e(e) {
                            this.statusCode = e
                        }
                        return e.prototype.getStatusCode = function() {
                            return this.statusCode
                        }, e
                    }();
                    t.RequestError = n
                }, function(e, t, r) {
                    "use strict";

                    function n(e) {
                        return e.match(s)[0]
                    }

                    function o(e, t) {
                        if (t instanceof e.errors.RetrievalError) {
                            var r = t.getCause();
                            if (r instanceof e.retrievalErrors.UnacceptableResponseStatusCodeError) return 403 === r.getStatusCode()
                        }
                        return !1
                    }

                    function i(e, t, r, i, s, u, l, c, d) {
                        d = a.logger.prefixLogger(d, "HLSMSEPlayer Controller");
                        var p = null,
                            h = !1,
                            f = n(c);
                        r.onError.subscribe(function(t) {
                            if (!(t instanceof a.errors.NotSupportedError)) {
                                if (i) {
                                    if (t instanceof a.errors.URLUpdateError) return d.error("URL refresh failed for some reason.", t), void s({
                                        retryPlayer: !0
                                    });
                                    if (o(e, t)) {
                                        if (h) return;
                                        return d.info("Got a 403 status code. Peforming a URL refresh..."), h = !0, p = l.getUrl(), void p.whenComplete().then(function(e) {
                                            if (e) {
                                                var t = e.url,
                                                    o = e.rendition;
                                                n(t) !== f || JSON.stringify(u) !== JSON.stringify(o) ? (d.warn("Got a new URL but the rendition did not match the original."), s({
                                                    retryPlayer: !1
                                                })) : (h = !1, d.info("Got a new URL. Updating..."), r.getUrlController().updateUrl(t))
                                            } else d.warn("Could not get a new URL."), s({
                                                retryPlayer: !1
                                            })
                                        }).catch(function(e) {
                                            d.error("Unexpected error when trying to retrieve a new URL.", e), s({
                                                retryPlayer: !1
                                            })
                                        })
                                    }
                                }
                                d.error("Unexpected player error.", t), s({
                                    retryPlayer: !1
                                })
                            }
                        }), t.providePlayer(r)
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var a = r(0),
                        s = /^[^\?#]*/;
                    t.isErrorWhichShouldTriggerURLRefresh = o, t.takeControlHLSMSEPlayer = i
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(1),
                        i = function(e) {
                            function t() {
                                return null !== e && e.apply(this, arguments) || this
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "SCAUDIO.GEOBLOCKED_ERROR"
                            }, t
                        }(o.ApiError);
                    t.GeoBlockedError = i
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(2),
                        i = function(e) {
                            function t() {
                                return e.call(this, "There were no stream URLs.") || this
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "SCAUDIO.NO_STREAMS"
                            }, t
                        }(o.NotSupportedError);
                    t.NoStreamsError = i
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(1),
                        i = function(e) {
                            function t() {
                                return e.call(this, null, "Request timed out too many times.") || this
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "SCAUDIO.TIMED_OUT_ERROR"
                            }, t
                        }(o.ApiError);
                    t.TimedOutError = i
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(1),
                        i = function(e) {
                            function t() {
                                return null !== e && e.apply(this, arguments) || this
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "SCAUDIO.UNAVAILABLE_ERROR"
                            }, t
                        }(o.ApiError);
                    t.UnavailableError = i
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n, o = r(1),
                        i = r(9),
                        a = r(2),
                        s = r(11),
                        u = r(12),
                        l = r(10);
                    ! function(e) {
                        e.ApiError = o.ApiError, e.GeoBlockedError = i.GeoBlockedError, e.NotSupportedError = a.NotSupportedError, e.TimedOutError = s.TimedOutError, e.UnavailableError = u.UnavailableError, e.NoStreamsError = l.NoStreamsError
                    }(n = t.errors || (t.errors = {}))
                }, function(e, t, r) {
                    "use strict";

                    function n() {
                        return re ? re : (re = document.createElement("audio"), o(re), re)
                    }

                    function o(e) {
                        e.load()
                    }

                    function i(e) {
                        return e === Q || e === X
                    }

                    function a(e) {
                        return e.constructor === X
                    }

                    function s(e) {
                        return e.constructor === Q
                    }

                    function u(e) {
                        return e.constructor === Z
                    }

                    function l(e) {
                        return e.constructor === $
                    }

                    function c(e) {
                        var t = e.split("//", 2);
                        return 1 === t.length ? t[0].split("/", 1)[0] : t[1] ? t[1].split("/", 1)[0] : ""
                    }

                    function d(e) {
                        var t = ee.exec(e);
                        return t && t[0] || ""
                    }

                    function p(e, t) {
                        var r = s(e) ? "MaestroHTML5" : a(e) ? "MaestroHLSMSE" : u(e) ? "MaestroFlipper" : l(e) ? "MaestroChromecast" : null;
                        if (!r) throw new Error("Unknown player.");
                        return {
                            name: r,
                            bitrate: t.bitrate,
                            protocol: t.rendition.scProtocol,
                            host: c(t.url),
                            url: d(t.url),
                            format: t.rendition.scFormat
                        }
                    }

                    function h() {
                        for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = "", r = 0; r < 20; r++) t += e.charAt(Math.floor(Math.random() * e.length));
                        return t
                    }

                    function f(e) {
                        if ("number" != typeof e) throw new Error("level must be a number.");
                        if (e < 0 || e > 1) throw new Error("Invalid volume level.");
                        se = e, ae.forEach(function(t) {
                            return t.setVolume(e)
                        })
                    }

                    function _() {
                        return se
                    }

                    function g(e) {
                        if ("boolean" != typeof e) throw new Error("muteEnabled must be a boolean.");
                        ue = e, ae.forEach(function(t) {
                            return t.setMuted(e)
                        })
                    }

                    function y() {
                        return ue
                    }

                    function v() {
                        n()
                    }

                    function m(e) {
                        function t() {
                            return Ae && Me ? p(Ae, Me) : null
                        }

                        function r() {
                            if (De && window.clearTimeout(De), Pe.debug("Performing retrieve."), ke) throw new Error("Player job already running. Only one instance of the job is allowed at once.");
                            if (Re.isDead()) throw new Error("Proxy is dead.");
                            var e = new q(function() {
                                    function e() {
                                        function t(e) {
                                            if (e !== E.helpers.abortableJob.abortedError)
                                                if (e instanceof A.RequestError) {
                                                    var t = e.getStatusCode();
                                                    switch (t) {
                                                        case 401:
                                                            Re._triggerError(new M.GeoBlockedError(t, "Geoblocked (logged out)."));
                                                            break;
                                                        case 403:
                                                            Re._triggerError(new M.GeoBlockedError(t, "Geoblocked (logged in)."));
                                                            break;
                                                        case 404:
                                                            Re._triggerError(new x.UnavailableError(t, "Track unavailable."));
                                                            break;
                                                        case null:
                                                            throw new Error("Status code should not be null.");
                                                        default:
                                                            Re._triggerError(new k.ApiError(t))
                                                    }
                                                } else e === E.helpers.retry.noMoreAttemptsError ? Re._triggerError(new O.TimedOutError) : (Pe.error("Unexpected error.", e), Re._triggerError(new E.errors.PlayerFatalError("An unexpected error occurred.", e)))
                                        }
                                        s = o(), s.onCompletion(function(r) {
                                            if (r) try {
                                                Me = r;
                                                var o = r.url,
                                                    i = r.rendition,
                                                    s = new E.Descriptor(o, i.maestroProtocol, i.maestroFormat),
                                                    u = a(Te, s, r);
                                                u ? n(u) : (Pe.debug("Excluding rendition.", r.rendition), c.excludeRendition(r.rendition), Te = [], e())
                                            } catch (e) {
                                                t(e)
                                            } else Me ? (Pe.error("There were no stream formats that were supported."), Re._triggerError(new D.NotSupportedError)) : (Pe.error("There were no streams available."), Re._triggerError(new V.NoStreamsError))
                                        }), s.onError(t)
                                    }

                                    function n(e) {
                                        function n(e) {
                                            if (!o && !i && (o = !0, Pe.debug("Player releasing control.", e), t.abort(e), !Re.isDead()))
                                                if (e && e.retryPlayer) {
                                                    var n = Oe.getDelay();
                                                    n > 0 ? (Pe.debug("Waiting " + n + " ms."), De = window.setTimeout(function() {
                                                        return r()
                                                    }, n)) : r()
                                                } else r()
                                        }
                                        var o = !1;
                                        Ae = e(n), Ae.isDead() ? (Pe.debug("Player died during construction."), n()) : (le.addPlayer(Ae), Ae.onChange.subscribe(function(e) {
                                            var t = e.dead;
                                            t && (Pe.debug("Player died."), n())
                                        }))
                                    }
                                    var i = !1,
                                        s = null;
                                    return e(), {
                                        result: E.helpers.deferred.buildDeferred().promise,
                                        abort: function(e) {
                                            i = !0, Pe.info("Player job aborted.", e), ke = null, s && s.abort(), Ae && (e && e.retryPlayer ? Pe.debug("Player might be used again for current rendition.") : (Pe.debug("Player will not be used again for current rendition."), Te.push(Ae.constructor)), Re.getPlayer() && Re.removePlayer(), Ae.kill(), Ae = null, Me = null)
                                        }
                                    }
                                }),
                                t = e.run();
                            return ke = t
                        }

                        function o() {
                            return z(function() {
                                return new q(function() {
                                    var e = c.getUrl();
                                    Pe.debug("Retrieving a URL...");
                                    var t = e.whenComplete().then(function(e) {
                                        return Pe.debug("Retrieved URL.", e), e && te.indexOf(e.rendition) < 0 ? (Pe.warn("Unknown rendition. Skipping...", e.rendition), {
                                            success: !1
                                        }) : {
                                            result: e,
                                            success: !0
                                        }
                                    }).catch(function(e) {
                                        if (e instanceof A.RequestError) {
                                            var t = e.getStatusCode();
                                            if (null === t || 0 === t) return null === t ? Pe.warn("Timed out when retrieving URL. Will retry.") : Pe.warn("Network error when retrieving URL. Will retry."), {
                                                success: !1
                                            }
                                        }
                                        throw e !== E.helpers.abortableJob.abortedError && Pe.error("Error retrieving URL.", e), e
                                    });
                                    return {
                                        result: t,
                                        abort: function() {
                                            return e.abort()
                                        }
                                    }
                                })
                            }, ge)
                        }

                        function a(e, t, r) {
                            var n = r.timeRetrieved;
                            if ($ && l.indexOf($) >= 0 && e.indexOf($) < 0) {
                                if (Pe.debug("ChromecastPlayer found.", Y.version), me) return function() {
                                    var e = new $(t, {
                                        name: Ee,
                                        castContext: me,
                                        logger: re
                                    });
                                    return Re.providePlayer(e, {
                                        syncPosition: !1,
                                        syncVolume: !1
                                    }, !1), e
                                };
                                Pe.warn("Could not construct chromecast player because context not provided.")
                            }
                            return Z && l.indexOf(Z) >= 0 && e.indexOf(Z) < 0 ? (Pe.debug("FlipperPlayer found.", W.version), function() {
                                var e = new Z(t, {
                                    name: Ee,
                                    logger: re
                                });
                                return L.takeControlFlipperPlayer(Re, e, Pe, xe || void 0), e
                            }) : X && l.indexOf(X) >= 0 && e.indexOf(X) < 0 ? (Pe.debug("HLSMSEPlayer found.", J.version), function(e) {
                                var n = new X(t, {
                                    name: Ee,
                                    playlistLoader: b.stringLoader,
                                    segmentLoader: b.arrayBufferLoader,
                                    keyLoader: b.arrayBufferLoader,
                                    expectedSegmentFormat: {
                                        mimeType: "audio/mpeg"
                                    },
                                    logger: re
                                });
                                return u(n, function() {
                                    return e()
                                }), I.takeControlHLSMSEPlayer(J, Re, n, ve, e, r.rendition, c, r.url, Pe), n
                            }) : Q && l.indexOf(Q) >= 0 && (!ve || "hls" !== t.getProtocol().name) && (!ve || void 0 !== n) && e.indexOf(Q) < 0 ? (Pe.debug("HTML5Player found.", K.version), function(e) {
                                var r = new Q(t, {
                                    name: Ee,
                                    logger: re
                                });
                                u(r, function() {
                                    return e()
                                });
                                var o;
                                if (ve) {
                                    if (void 0 === n) throw new Error("Expecting timeUrlRetrieved to be set.");
                                    o = {
                                        urlExpires: !0,
                                        timeUrlRetrieved: n
                                    }
                                } else o = {
                                    urlExpires: !1
                                };
                                return C.takeControlHTML5Player(K, Re, r, o, e, Pe), r
                            }) : null
                        }

                        function s() {
                            ke ? (Pe.debug("Reloading stream URLs..."), Pe.debug("Aborting player job that is in progress."), ke.abort(), Te = [], r()) : Pe.debug("Reload requested, but not reloading as there is nothing to reload.")
                        }

                        function u(e, t) {
                            function r() {
                                var t = e.getMediaElement();
                                t && t !== n() && (Pe.debug("Revoking audio element that was created internally because player is ready now."), e.revokeMediaElement())
                            }

                            function o() {
                                var r = e.getMediaElement();
                                if (r && r !== n() && (Pe.debug("Revoking audio element that was created internally, even though player is not ready."), e.revokeMediaElement()), !e.getMediaElement()) {
                                    ne && !ne.isDead() && (Pe.info("Revoking audio element from a player."), ne.isPlaying() && Pe.warn("The audio element is being revoked from a player which is playing. Only one player should be playing at once."), ne.revokeMediaElement()), ne = e, Pe.info("Providing audio element to a different player.");
                                    var o = oe = {};
                                    e.provideMediaElement(n()).catch(function(r) {
                                        e.isDead() || oe !== o || (Pe.error("An unexpected error occurred when trying to provide the audio element to a player.", r), t())
                                    })
                                }
                            }
                            e.isReady() ? r() : e.onReady.subscribe(r), Re.onPlayIntent.subscribe(function() {
                                e.isDead() || o()
                            }), Re.isPlaying() && (e.isDead() || o()), ne || o()
                        }
                        var l = e.playerClasses,
                            c = e.streamUrlRetriever,
                            d = e.duration,
                            f = void 0 === d ? null : d,
                            _ = e.preloadingEnabled,
                            g = void 0 !== _ && _,
                            y = e.pausedMaxBufferLength,
                            v = void 0 === y ? 2e3 : y,
                            m = e.playingMaxBufferLength,
                            N = void 0 === m ? 9e4 : m,
                            B = e.fadeOutDuration,
                            H = void 0 === B ? 0 : B,
                            ee = e.logger,
                            re = void 0 === ee ? E.logger.noOpLogger : ee,
                            ce = e.audioPerformanceReporter,
                            de = e.audioReporter,
                            pe = e.audioCheckpointInterval,
                            he = void 0 === pe ? 3e4 : pe,
                            fe = e.errorReporter,
                            _e = e.urlProviderRetryDelayCalculator,
                            ge = void 0 === _e ? G() : _e,
                            ye = e.streamUrlsExpire,
                            ve = void 0 === ye || ye,
                            me = e.chromecastContext;
                        if (!(c instanceof w.BaseStreamUrlRetriever)) throw new Error("StreamUrlRetriever invalid.");
                        if (null !== f && ("number" != typeof f || f < 0)) throw new Error("duration invalid.");
                        if ("boolean" != typeof g) throw new Error("preloadingEnabled invalid.");
                        if (null !== v && ("number" != typeof v || v < 0)) throw new Error("pausedMaxBufferLength invalid.");
                        if (null !== N && ("number" != typeof N || N < 0)) throw new Error("playingMaxBufferLength invalid.");
                        if (null !== H && ("number" != typeof H || H < 0)) throw new Error("fadeOutDuration invalid.");
                        if (null !== re && "function" != typeof re && "object" != typeof re) throw new Error("logger invalid.");
                        if (void 0 !== de && "function" != typeof de) throw new Error("audioReporter invalid.");
                        if (null !== he && ("number" != typeof he || he < 0)) throw new Error("audioCheckpointInterval invalid.");
                        if (void 0 !== ce && "function" != typeof ce) throw new Error("audioPerformanceReporter invalid.");
                        if (void 0 !== fe && "function" != typeof fe) throw new Error("errorReporter invalid.");
                        if (void 0 !== ge && "function" != typeof ge) throw new Error("retryDelayCalculator invalid.");
                        var Ee = "SCAudio-" + ++ie,
                            be = c.getTrackId();
                        null !== be && (Ee += "-" + be);
                        var we = new F.LogCollector;
                        re = E.logger.cloneLogger(we, re);
                        var Pe = E.logger.prefixLogger(re, Ee),
                            Se = h();
                        Pe.info("Building player...", {
                            ua: navigator.userAgent,
                            logId: Se
                        });
                        var Re = new T.Player({
                            name: Ee + "-Proxy",
                            logger: re,
                            mediaSessionEnabled: !0,
                            pausedMaxBufferLength: v,
                            playingMaxBufferLength: N,
                            preloadingEnabled: g
                        }, s);
                        ae.push(Re), Re.setVolume(se), Re.setMuted(ue), H > 0 && Re.addVolumeAutomator(P.buildFadeOut(H));
                        var Te = [],
                            Ae = null,
                            Me = null,
                            ke = null,
                            xe = null,
                            De = null,
                            Oe = new j.DecayingExponentialDelayCalculator;
                        if (ce && (xe = new S.AudioPerformanceEventGenerator(Re, ce, Pe, t, X)), de && new U.AudioEventGenerator(Re, de, he, Pe), fe && R.generateErrorEvents(Re, we, Se, be, fe, Pe, t, J || null, ve), Re.onChange.subscribe(function(e) {
                                var t = e.dead,
                                    r = e.playing;
                                if (t) Pe.info("Player killed."), ae.splice(ae.indexOf(Re), 1), ke && ke.abort(), De && window.clearTimeout(De);
                                else if (r === !0) {
                                    var o = l.some(function(e) {
                                        return i(e)
                                    });
                                    o && n()
                                }
                            }), null !== f && (Pe.debug("Setting initial duration.", f), Re.setInitialDuration(f)), g) Pe.debug("Preloading is enabled, so performing retrieve immediately."), r();
                        else {
                            Pe.debug("Preloading is disabled, so deferring retrieve until either a play intent or preloading is enabled.");
                            var Ce = function() {
                                    Ie.remove(), Le.remove(), Pe.debug("Preloading now enabled or received a play request. Peforming retrieve."), r()
                                },
                                Ie = Re.onPreloadingEnabled.subscribe(Ce),
                                Le = Re.onPlayIntent.subscribe(Ce)
                        }
                        return Re
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var E = r(0),
                        b = r(35),
                        w = r(4),
                        P = r(3),
                        S = r(17),
                        R = r(22),
                        T = r(5),
                        A = r(7),
                        M = r(9),
                        k = r(1),
                        x = r(12),
                        D = r(2),
                        O = r(11),
                        C = r(20),
                        I = r(8),
                        L = r(19),
                        N = r(6),
                        j = r(21),
                        F = r(23),
                        U = r(16),
                        B = r(18),
                        q = E.helpers.abortableJob.AbortableJob,
                        H = E.helpers.retry,
                        z = H.retry,
                        G = H.buildExponentialDelayCalculator,
                        V = r(10),
                        K = void 0;
                    try {
                        K = r(34)
                    } catch (e) {}
                    var J = void 0;
                    try {
                        J = r(33)
                    } catch (e) {}
                    var W = void 0;
                    try {
                        W = r(32)
                    } catch (e) {}
                    var Y = void 0;
                    try {
                        Y = r(31)
                    } catch (e) {}
                    var Q = K ? K.HTML5Player : null,
                        X = J ? J.HLSMSEPlayer : null,
                        Z = W ? W.FlipperPlayer : null,
                        $ = Y ? Y.ChromecastPlayer : null,
                        ee = /^[^?#]*/,
                        te = Object.keys(N.renditions).map(function(e) {
                            return N.renditions[e]
                        }),
                        re = null,
                        ne = null,
                        oe = {},
                        ie = -1,
                        ae = [],
                        se = 1,
                        ue = !1,
                        le = new B.CacheManager(5e8, E.logger.noOpLogger);
                    t.setGlobalVolume = f, t.getGlobalVolume = _, t.setGlobalMuted = g, t.getGlobalMuted = y, t.activateAudioElement = v, t.buildPlayer = m
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n, o = r(3);
                    ! function(e) {
                        e.Fade = o.Fade, e.buildFadeIn = o.buildFadeIn, e.buildFadeOut = o.buildFadeOut
                    }(n = t.volumeAutomation || (t.volumeAutomation = {}))
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(0),
                        o = 1e3,
                        i = function() {
                            function e(e, t, r, i) {
                                this._checkpointTimer = null, this._logger = n.logger.prefixLogger(i, "AudioEventGenerator"), this._player = e, this._eventReporter = t, this._checkpointInterval = null !== r ? Math.max(o, r) : null, this._startReporting()
                            }
                            return e.prototype._startReporting = function() {
                                var e = this,
                                    t = this._player;
                                t.onChange.subscribe(function(r) {
                                    var n = r.actuallyPlaying,
                                        o = r.ended;
                                    n === !0 && !t.isEnded() || o === !1 && t.isActuallyPlaying() ? (null === e._checkpointInterval || e._checkpointTimer || (e._checkpointTimer = window.setInterval(function() {
                                        e._reportEvent("checkpoint")
                                    }, e._checkpointInterval)), e._reportEvent("play")) : (n === !1 && !t.isEnded() || o === !0 && t.isActuallyPlaying()) && (e._checkpointTimer && (window.clearInterval(e._checkpointTimer), e._checkpointTimer = null), e._reportEvent("pause"))
                                })
                            }, e.prototype._reportEvent = function(e) {
                                var t = this._player.getDuration();
                                if (null === t) throw new Error("Duration should exist now.");
                                var r = {
                                    type: e,
                                    position: this._player.getPosition(),
                                    duration: t
                                };
                                this._logger.debug("Generated audio event.", r), this._eventReporter(r)
                            }, e
                        }();
                    t.AudioEventGenerator = i
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(0),
                        o = r(30),
                        i = function() {
                            function e(e, t, r, o, i) {
                                this._logger = n.logger.prefixLogger(r, "AudioPerformanceEventGenerator"), this._player = e, this._eventReporter = t, this._getPlayerDetails = o, this._HLSMSEPlayer = i, this._measureGeneralEvents()
                            }
                            return e.prototype.reportManualEvent = function(e) {
                                this._logger.debug("Reporting manual audio performance event.", e), this._eventReporter(e)
                            }, e.prototype._measureGeneralEvents = function() {
                                var e = this,
                                    t = this._player,
                                    r = new o.Timer,
                                    n = null,
                                    i = null;
                                t.onChange.subscribe(function(a) {
                                    var s = a.dead,
                                        u = a.playing,
                                        l = a.actuallyPlaying,
                                        c = a.seeking,
                                        d = a.loading;
                                    s || (u === !0 && (r.isComplete() || r.start()), l === !0 && (r.isComplete() || (r.stop(), e._reportEvent("play", r.getTime()))), c === !0 && t.isReady() && (n = new o.Timer, n.start()), c === !1 && n && (n.stop(), e._reportEvent("seek", n.getTime())), d === !0 && r.isComplete() && (i = new o.Timer, i.start()), d === !1 && i && (i.stop(), e._reportEvent("buffer", i.getTime())))
                                })
                            }, e.prototype._reportEvent = function(e, t, r) {
                                var n = r || this._getPlayerDetails();
                                if (!n) return void this._logger.warn("Cannot report event because there is no player.", e, t);
                                var o = {
                                    type: e,
                                    latency: t,
                                    protocol: n.protocol,
                                    playerType: n.name,
                                    host: n.host,
                                    bitrate: n.bitrate,
                                    format: n.format || void 0
                                };
                                this._logger.debug("Generated audio performance event.", o), this._eventReporter(o)
                            }, e
                        }();
                    t.AudioPerformanceEventGenerator = i
                }, function(e, t, r) {
                    "use strict";

                    function n(e, t) {
                        var r = e.getMemoryCacheController();
                        r && r.setMaxCacheSize(t)
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(0),
                        i = 2e4,
                        a = function() {
                            function e(e, t) {
                                this._maxCacheSize = e, this._players = [], this._updateTimer = null, this._logger = o.logger.prefixLogger(t, "CacheManager"), this._logger.debug("Initialized with cache size " + e + " bytes.")
                            }
                            return e.prototype.addPlayer = function(e) {
                                var t = this;
                                if (this._logger.debug("Adding player to cache manager."), e.isDead()) return void this._logger.debug("Player was dead.");
                                var r = this._players;
                                e.onChange.subscribe(function(n) {
                                    var o = n.playing,
                                        i = n.dead;
                                    i === !0 ? (t._logger.debug("Removing player that became dead."), r.splice(r.indexOf(e), 1), t._update()) : o === !0 ? (t._logger.debug("Updating because player started playing."), r.splice(r.indexOf(e), 1), r.unshift(e), t._update()) : o === !1 && (t._logger.debug("Updating because player became paused."), t._update())
                                }), e.isPlaying() ? r.unshift(e) : r.push(e), this._update()
                            }, e.prototype._update = function() {
                                var e = this;
                                if (this._updateTimer && (window.clearTimeout(this._updateTimer), this._updateTimer = null), 0 === this._players.length) return void this._logger.debug("There are no longer any players to manage.");
                                var t = this._players.reduce(function(e, t) {
                                        return t.isPlaying() ? e.playingPlayers.push(t) : e.pausedPlayers.push(t), e
                                    }, {
                                        playingPlayers: [],
                                        pausedPlayers: []
                                    }),
                                    r = t.playingPlayers,
                                    o = t.pausedPlayers,
                                    a = r.reduce(function(e, t) {
                                        return e + (t.getMemoryCacheUsage() || 0)
                                    }, 0),
                                    s = o.reduce(function(e, t) {
                                        return e + (t.getMemoryCacheUsage() || 0)
                                    }, 0);
                                if (a > this._maxCacheSize) {
                                    this._logger.debug("All playing players are using more than the max cache size. Cleaning...", a, this._maxCacheSize);
                                    var u = this._maxCacheSize / r.length;
                                    r.forEach(function(e) {
                                        return n(e, u)
                                    }), o.forEach(function(e) {
                                        return n(e, 0)
                                    })
                                } else this._logger.debug("Recalculating cache sizes...", a + s, this._maxCacheSize), r.concat(o).reduce(function(t, r) {
                                    return n(r, Math.max(0, e._maxCacheSize - t)), t + (r.getMemoryCacheUsage() || 0)
                                }, 0);
                                this._updateTimer = window.setTimeout(function() {
                                    return e._update()
                                }, i)
                            }, e
                        }();
                    t.CacheManager = a
                }, function(e, t, r) {
                    "use strict";

                    function n(e, t, r, n) {
                        r = o.logger.prefixLogger(r, "FlipperPlayer Controller"), n && t.onAudioPerformanceEvent.subscribe(function(e) {
                            var t = e.protocol,
                                o = e.type,
                                i = e.latency,
                                a = e.player_type,
                                s = e.host,
                                u = e.bitrate,
                                l = e.format,
                                c = "Flipper";
                            if (a !== c) return void r.warn("Ignoring audio performance event from flipper because the player_type was incorrect.", a);
                            var d = {
                                protocol: t,
                                type: o,
                                latency: i,
                                playerType: c,
                                host: s,
                                bitrate: u,
                                format: l
                            };
                            n.reportManualEvent(d)
                        }), e.providePlayer(t)
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(0);
                    t.takeControlFlipperPlayer = n
                }, function(e, t, r) {
                    "use strict";

                    function n(e, t, r, n, a, s) {
                        function u() {
                            var e = r.getDuration(),
                                t = l();
                            if (null !== e && null !== t) {
                                var n = e - r.getPosition();
                                i() + n > t && (s.info("Releasing control because stream URL would expire before reaching end."), a({
                                    retryPlayer: !0
                                }))
                            }
                        }

                        function l() {
                            if (!n.urlExpires) return null;
                            var e = r.getDuration();
                            return null === e ? null : n.timeUrlRetrieved + e + 105e3
                        }

                        function c() {
                            var e = l();
                            return null !== e && e <= i()
                        }
                        s = o.logger.prefixLogger(s, "HTML5Player Controller"), r.onError.subscribe(function(t) {
                            t instanceof o.errors.NotSupportedError || (t instanceof e.errors.NetworkError && c() ? (s.info("Releasing control as a network error occurred, and the URL has expired."), a({
                                retryPlayer: !0
                            })) : (s.error("Unexpected player error.", t), a({
                                retryPlayer: !1
                            })))
                        }), n.urlExpires && (r.onPlayIntent.subscribe(function() {
                            return u()
                        }), r.onSeekIntent.subscribe(function() {
                            return u()
                        })), t.providePlayer(r)
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(0),
                        i = o.helpers.time.now;
                    t.takeControlHTML5Player = n
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function e() {
                            this._delayFactor = 0, this._lastRequestTime = 0
                        }
                        return e.prototype.getDelay = function() {
                            var e = Date.now() - this._lastRequestTime;
                            return this._lastRequestTime = Date.now(), this._delayFactor = Math.max(0, this._delayFactor - e / 15e3), this._delayFactor += 1, Math.pow(2, this._delayFactor)
                        }, e
                    }();
                    t.DecayingExponentialDelayCalculator = n
                }, function(e, t, r) {
                    "use strict";

                    function n(e, t, r, n, a, s, u, l, c) {
                        function d(e) {
                            var o = u() || void 0,
                                i = {
                                    errorCode: e,
                                    log: t.getLog(),
                                    logId: r,
                                    trackId: n,
                                    protocol: o && o.protocol,
                                    playerType: o ? o.name : "MaestroUnknown",
                                    host: o && o.host,
                                    bitrate: o && o.bitrate,
                                    format: o && (o.format || void 0),
                                    url: o && o.url
                                };
                            s.debug("Generated audio error event.", i), a(i)
                        }
                        s = o.logger.prefixLogger(s, "ErrorGenerator"), e.onError.subscribe(function(e) {
                            if (!(c && l && i.isErrorWhichShouldTriggerURLRefresh(l, e))) {
                                var t, r;
                                r = e instanceof o.errors.ProxyProvidedPlayerFatalError ? e.getProvidedPlayerFatalError() : e, t = r.getCode(), r instanceof o.errors.NotSupportedError || d(t)
                            }
                        })
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(0),
                        i = r(8);
                    t.generateErrorEvents = n
                }, function(e, t, r) {
                    "use strict";

                    function n(e) {
                        return e.map(function(e) {
                            try {
                                return JSON.stringify(e)
                            } catch (e) {
                                return "<unavailable>"
                            }
                        })
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = function() {
                        function e(e) {
                            void 0 === e && (e = 200), this._bufferSize = e, this._log = []
                        }
                        return e.prototype.getLog = function() {
                            return this._log
                        }, e.prototype.debug = function(e) {
                            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                            this._push({
                                level: "debug",
                                msg: e,
                                data: n(t),
                                time: Date.now()
                            })
                        }, e.prototype.info = function(e) {
                            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                            this._push({
                                level: "info",
                                msg: e,
                                data: n(t),
                                time: Date.now()
                            })
                        }, e.prototype.warn = function(e) {
                            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                            this._push({
                                level: "warn",
                                msg: e,
                                data: n(t),
                                time: Date.now()
                            })
                        }, e.prototype.error = function(e) {
                            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                            this._push({
                                level: "error",
                                msg: e,
                                data: n(t),
                                time: Date.now()
                            })
                        }, e.prototype._push = function(e) {
                            this._log.push(e) > this._bufferSize && this._log.shift()
                        }, e
                    }();
                    t.LogCollector = o
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.apiMobile = {
                        scProtocol: "sc.api-mobile",
                        maestroProtocol: {
                            name: "sc.api-mobile"
                        },
                        maestroFormat: {}
                    }
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.encryptedHlsMp3 = {
                        scProtocol: "encrypted-hls",
                        scFormat: "mp3",
                        maestroProtocol: {
                            name: "hls"
                        },
                        maestroFormat: {
                            mimeType: "application/x-mpegURL"
                        }
                    }
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.hlsMp3 = {
                        scProtocol: "hls",
                        scFormat: "mp3",
                        maestroProtocol: {
                            name: "hls"
                        },
                        maestroFormat: {
                            mimeType: "application/x-mpegURL"
                        }
                    }
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.httpMp3 = {
                        scProtocol: "http",
                        scFormat: "mp3",
                        maestroProtocol: {
                            name: "http"
                        },
                        maestroFormat: {
                            mimeType: "audio/mpeg"
                        }
                    }
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.maestroChromecast = {
                        scProtocol: "maestro.chromecast",
                        maestroProtocol: {
                            name: "maestro.chromecast"
                        },
                        maestroFormat: {}
                    }
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(27),
                        o = r(26),
                        i = r(25),
                        a = r(24),
                        s = r(28);
                    t.renditions = {
                        httpMp3: n.httpMp3,
                        hlsMp3: o.hlsMp3,
                        encryptedHlsMp3: i.encryptedHlsMp3,
                        apiMobile: a.apiMobile,
                        maestroChromecast: s.maestroChromecast
                    }
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(0),
                        o = n.helpers.time.now,
                        i = function() {
                            function e() {
                                this._start = null, this._end = null
                            }
                            return e.prototype.start = function() {
                                if (this.isComplete()) throw new Error("Timer completed.");
                                this._start = o()
                            }, e.prototype.isComplete = function() {
                                return null !== this._end
                            }, e.prototype.stop = function() {
                                if (null === this._start) throw new Error("Not started.");
                                this._end = o()
                            }, e.prototype.getTime = function() {
                                if (null === this._end) throw new Error("Not completed.");
                                return this._end - this._start
                            }, e
                        }();
                    t.Timer = i
                }, function(e, r) {
                    if ("undefined" == typeof t) {
                        var n = new Error('Cannot find module "@sc/maestro-chromecast-player"');
                        throw n.code = "MODULE_NOT_FOUND", n
                    }
                    e.exports = t
                }, function(e, t) {
                    if ("undefined" == typeof r) {
                        var n = new Error('Cannot find module "@sc/maestro-flipper-player"');
                        throw n.code = "MODULE_NOT_FOUND", n
                    }
                    e.exports = r
                }, function(e, t) {
                    if ("undefined" == typeof n) {
                        var r = new Error('Cannot find module "@sc/maestro-hls-mse-player"');
                        throw r.code = "MODULE_NOT_FOUND", r
                    }
                    e.exports = n
                }, function(e, t) {
                    if ("undefined" == typeof o) {
                        var r = new Error('Cannot find module "@sc/maestro-html5-player"');
                        throw r.code = "MODULE_NOT_FOUND", r
                    }
                    e.exports = o
                }, function(e, t) {
                    e.exports = i
                }, function(e, t, r) {
                    "use strict";

                    function n(e) {
                        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.version = "11.0.4", t.buildNumber = 275;
                    var o = r(15);
                    t.volumeAutomation = o.volumeAutomation;
                    var i = r(4);
                    t.BaseStreamUrlRetriever = i.BaseStreamUrlRetriever;
                    var a = r(7);
                    t.RequestError = a.RequestError;
                    var s = r(5);
                    t.Player = s.Player;
                    var u = r(6);
                    t.renditions = u.renditions, n(r(13)), n(r(14))
                }])
            })
        }, function(e, t, r) {
            ! function(t, r) {
                e.exports = r()
            }(this, function() {
                return function(e) {
                    function t(n) {
                        if (r[n]) return r[n].exports;
                        var o = r[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        };
                        return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                    }
                    var r = {};
                    return t.m = e, t.c = r, t.i = function(e) {
                        return e
                    }, t.d = function(e, r, n) {
                        t.o(e, r) || Object.defineProperty(e, r, {
                            configurable: !1,
                            enumerable: !0,
                            get: n
                        })
                    }, t.n = function(e) {
                        var r = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return t.d(r, "a", r), r
                    }, t.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, t.p = "", t(t.s = 35)
                }([function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(4),
                        i = function(e) {
                            function t() {
                                return null !== e && e.apply(this, arguments) || this
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "PLAYER_FATAL_ERROR"
                            }, t
                        }(o.PlayerError);
                    t.PlayerFatalError = i
                }, function(e, t, r) {
                    "use strict";

                    function n() {
                        var e, t, r = !1,
                            n = new o.Promise(function(r, n) {
                                e = r, t = n
                            });
                        return {
                            promise: n,
                            resolve: function(t) {
                                r || (r = !0, e(t))
                            },
                            reject: function(e) {
                                r || (r = !0, t(e))
                            },
                            isSettled: function() {
                                return r
                            }
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(10);
                    t.buildDeferred = n
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(6),
                        o = function() {
                            function e() {
                                this._listeners = [], this.dispatch = this.dispatch.bind(this)
                            }
                            return e.prototype.subscribe = function(e) {
                                var t = this,
                                    r = {
                                        fn: e,
                                        payloads: []
                                    };
                                return this._listeners.push(r), {
                                    remove: function() {
                                        var e = t._listeners.indexOf(r);
                                        return e >= 0 && (t._listeners.splice(e, 1), !0)
                                    },
                                    retrieve: function() {
                                        return t._dispatchListenerPayloads(r)
                                    }
                                }
                            }, e.prototype.dispatch = function(e, t) {
                                var r = this,
                                    o = "number" == typeof t ? {
                                        time: t
                                    } : t || {},
                                    i = void 0 !== o.time ? o.time : n.now(),
                                    a = this._listeners;
                                a.forEach(function(t) {
                                    return t.payloads.push({
                                        time: i,
                                        payload: e
                                    })
                                });
                                var s = !1;
                                do s = !a.some(function(e) {
                                    var t = e.fn,
                                        n = e.payloads,
                                        o = n.shift();
                                    return !!o && (r._callHandler(t, o), !0)
                                }); while (!s)
                            }, e.prototype.getHandle = function() {
                                return {
                                    subscribe: this.subscribe.bind(this)
                                }
                            }, e.prototype._dispatchListenerPayloads = function(e) {
                                for (var t = e.fn, r = e.payloads;;) {
                                    var n = r.shift();
                                    if (!n) break;
                                    this._callHandler(t, n)
                                }
                            }, e.prototype._callHandler = function(e, t) {
                                try {
                                    e(t.payload, t.time)
                                } catch (e) {
                                    window.setTimeout(function() {
                                        throw e
                                    }, 0)
                                }
                            }, e
                        }();
                    t.EventDispatcher = o
                }, function(e, t, r) {
                    "use strict";

                    function n(e, t) {
                        return {
                            debug: function(r) {
                                for (var n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
                                return e.debug.apply(e, ["[" + t + "] " + r].concat(n))
                            },
                            error: function(r) {
                                for (var n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
                                return e.error.apply(e, ["[" + t + "] " + r].concat(n))
                            },
                            info: function(r) {
                                for (var n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
                                return e.info.apply(e, ["[" + t + "] " + r].concat(n))
                            },
                            warn: function(r) {
                                for (var n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
                                return e.warn.apply(e, ["[" + t + "] " + r].concat(n))
                            }
                        }
                    }

                    function o() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return {
                            debug: function(t) {
                                for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
                                return e.forEach(function(e) {
                                    return e.debug.apply(e, [t].concat(r))
                                })
                            },
                            error: function(t) {
                                for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
                                return e.forEach(function(e) {
                                    return e.error.apply(e, [t].concat(r))
                                })
                            },
                            info: function(t) {
                                for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
                                return e.forEach(function(e) {
                                    return e.info.apply(e, [t].concat(r))
                                })
                            },
                            warn: function(t) {
                                for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
                                return e.forEach(function(e) {
                                    return e.warn.apply(e, [t].concat(r))
                                })
                            }
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = r(15),
                        a = i.isIE();
                    t.noOpLogger = {
                        debug: function(e) {
                            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
                        },
                        error: function(e) {
                            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
                        },
                        info: function(e) {
                            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
                        },
                        warn: function(e) {
                            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
                        }
                    }, t.consoleLogger = {
                        debug: function(e) {
                            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                            a ? console.log(e, t) : (n = console.debug || console.log).call.apply(n, [console, e].concat(t));
                            var n
                        },
                        error: function(e) {
                            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                            a ? console.log(e, t) : (n = console.error || console.log).call.apply(n, [console, e].concat(t));
                            var n
                        },
                        info: function(e) {
                            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                            a ? console.log(e, t) : (n = console.info || console.log).call.apply(n, [console, e].concat(t));
                            var n
                        },
                        warn: function(e) {
                            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                            a ? console.log(e, t) : (n = console.warn || console.log).call.apply(n, [console, e].concat(t));
                            var n
                        }
                    }, t.prefixLogger = n, t.cloneLogger = o
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function e(e, t) {
                            this._msg = e, this._cause = t
                        }
                        return e.prototype.getCode = function() {
                            return "PLAYER_ERROR"
                        }, e.prototype.getMsg = function() {
                            return this._msg
                        }, e.prototype.getCause = function() {
                            return this._cause
                        }, e
                    }();
                    t.PlayerError = n
                }, function(e, t, r) {
                    "use strict";

                    function n(e, t) {
                        var r = void 0;
                        return e.some(function(e) {
                            return !!t(e) && (r = e, !0)
                        }), r
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.find = n
                }, function(e, t, r) {
                    "use strict";

                    function n() {
                        return "performance" in window && window.performance.now ? window.performance.now() : Date.now() - o
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = Date.now();
                    t.now = n
                }, function(e, t, r) {
                    "use strict";

                    function n() {
                        return {
                            actuallyPlaying: !1,
                            ended: !1,
                            loading: !1,
                            playing: !1,
                            playDeferred: null,
                            pauseDeferred: null,
                            ready: !1,
                            seeking: !1,
                            seek: null,
                            positionJumped: null,
                            stalled: !0,
                            duration: null,
                            dead: !1,
                            state: d.State.PAUSED,
                            fatalError: null,
                            errorOccurred: null
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(17),
                        i = r(0),
                        a = r(11),
                        s = r(2),
                        u = r(1),
                        l = r(5),
                        c = r(6),
                        d = r(9),
                        p = r(3),
                        h = r(31),
                        f = "undefined" != typeof navigator && "mediaSession" in navigator,
                        _ = 5e3,
                        g = f ? navigator.mediaSession : null,
                        y = function() {
                            function e(e) {
                                var t = this;
                                this._stateManager = new h.StateManager(n(), {
                                    afterUpdate: function(e) {
                                        return t._afterUpdate(e)
                                    },
                                    afterDispatches: function() {
                                        return t._afterDispatches()
                                    }
                                }), this._onError = new s.EventDispatcher, this._errors = [], this._mediaSessionEnabled = !1, this._stalled = !1, this._queuedDuration = null, this._readyDeferred = u.buildDeferred(), this._queuedSeekDeferreds = [], this._lastPlayError = null, this._lastPauseError = null, this._positionWhenStoppedPlaying = null, this._pendingPositionWhenStoppedPlaying = 0, this._positionWhenKilled = 0, this._listenTimeBase = 0, this._timePlaybackStarted = null;
                                var r = e.name;
                                this._logger = p.prefixLogger(e.logger, "BasePlayer" + (r ? "-" + r : "")), this._mediaSessionEnabled = !!e.mediaSessionEnabled, this.onError = this._onError.getHandle(), this.whenReady = this._readyDeferred.promise, this._stateManager.subscribe(function(e, r) {
                                    return t._onChange(e, r)
                                }), this._stateManager.subscribe(function(e, r) {
                                    var n = e.playing,
                                        o = r.dead;
                                    o || void 0 === n || t._handlePlayPauseChange(n)
                                }), this._stateManager.subscribe(function(e, r) {
                                    var n = e.seek,
                                        o = r.dead;
                                    !o && n && "IN_PROGRESS" === n.state && t._handleSeekChange(n.position)
                                }), this._registerMediaSessionActionHandlers(), this._notifyMediaSessionPaused(), this.onChange = this._buildEventHandle(function(e, r) {
                                    var n = r.ready;
                                    if (void 0 !== n && n !== !0) throw new Error("Ready state is invalid.");
                                    var o = r.duration;
                                    if (void 0 !== o && null === o) throw new Error("Duration state is invalid.");
                                    var i = r.dead;
                                    if (void 0 !== i && i !== !0) throw new Error("Dead state is invalid.");
                                    var a = {
                                        ready: n,
                                        ended: r.ended,
                                        duration: o,
                                        playing: r.playing,
                                        actuallyPlaying: r.actuallyPlaying,
                                        stalled: r.stalled,
                                        loading: r.loading,
                                        playRejection: r.playing === !1 ? t._lastPlayError || void 0 : void 0,
                                        pauseRejection: r.playing === !0 ? t._lastPauseError || void 0 : void 0,
                                        seeking: r.seeking,
                                        seek: r.seek || void 0,
                                        positionJumped: void 0 !== r.positionJumped || void 0,
                                        state: r.state,
                                        fatalError: r.fatalError || void 0,
                                        dead: i
                                    };
                                    Object.keys(a).some(function(e) {
                                        return void 0 !== a[e]
                                    }) && e(a)
                                }), this.onDurationChange = this._buildEventHandle(function(e, t) {
                                    var r = t.duration;
                                    void 0 !== r && null !== r && e(r)
                                }), this.onReady = this._buildEventHandle(function(e, t) {
                                    var r = t.ready;
                                    r === !0 && e(void 0)
                                }), this.onStateChange = this._buildEventHandle(function(e, t) {
                                    var r = t.state;
                                    void 0 !== r && e(r)
                                }), this.onPlay = this._buildEventHandle(function(e, t) {
                                    var r = t.actuallyPlaying;
                                    r === !0 && e(void 0)
                                }), this.onPlayIntent = this._buildEventHandle(function(e, t) {
                                    var r = t.playing;
                                    r === !0 && e(void 0)
                                }), this.onPlayRejection = this._buildEventHandle(function(e, r) {
                                    var n = r.playing;
                                    n === !1 && t._lastPlayError && e(t._lastPlayError)
                                }), this.onPause = this._buildEventHandle(function(e, t) {
                                    var r = t.actuallyPlaying;
                                    r === !1 && e(void 0)
                                }), this.onPauseIntent = this._buildEventHandle(function(e, t) {
                                    var r = t.playing;
                                    r === !1 && e(void 0)
                                }), this.onPauseRejection = this._buildEventHandle(function(e, r) {
                                    var n = r.playing;
                                    n === !0 && t._lastPauseError && e(t._lastPauseError)
                                }), this.onSeek = this._buildEventHandle(function(e, t) {
                                    var r = t.seek;
                                    r && "COMPLETED" === r.state && e(void 0)
                                }), this.onSeekIntent = this._buildEventHandle(function(e, t) {
                                    var r = t.seeking;
                                    r === !0 && e(void 0)
                                }), this.onSeekRejection = this._buildEventHandle(function(e, t) {
                                    var r = t.seek;
                                    r && "ERROR" === r.state && e(r.error)
                                }), this.onPositionJumped = this._buildEventHandle(function(e, t) {
                                    var r = t.positionJumped;
                                    void 0 !== r && e(void 0)
                                }), this.onEnded = this._buildEventHandle(function(e, t) {
                                    var r = t.ended;
                                    r === !0 && e(void 0)
                                }), this.onLeftEnded = this._buildEventHandle(function(e, t) {
                                    var r = t.ended;
                                    r === !1 && e(void 0)
                                }), this.onStallStart = this._buildEventHandle(function(e, t) {
                                    var r = t.stalled;
                                    r === !0 && e(void 0)
                                }), this.onStallEnd = this._buildEventHandle(function(e, t) {
                                    var r = t.stalled;
                                    r === !1 && e(void 0)
                                }), this.onLoadStart = this._buildEventHandle(function(e, t) {
                                    var r = t.loading;
                                    r === !0 && e(void 0)
                                }), this.onLoadEnd = this._buildEventHandle(function(e, t) {
                                    var r = t.loading;
                                    r === !1 && e(void 0)
                                })
                            }
                            return e.prototype.isReady = function() {
                                return this._stateManager.getState().ready
                            }, e.prototype.getPosition = function() {
                                var e = this;
                                return this._stateManager.update(function(t) {
                                    var r = t.dead;
                                    if (r) return e._positionWhenKilled;
                                    var n = e._getPositionOrPositionSeekingTo();
                                    return e._updateEnded(n), n
                                })
                            }, e.prototype.getLastPlayedPosition = function() {
                                var e = this._stateManager.getState(),
                                    t = e.actuallyPlaying,
                                    r = e.stalled;
                                return t && !r ? this.getPosition() : this._positionWhenStoppedPlaying
                            }, e.prototype.getListenTime = function() {
                                var e = this._stateManager.getState(),
                                    t = e.actuallyPlaying,
                                    r = e.ended,
                                    n = this._listenTimeBase;
                                return t && !r && (n += c.now() - this._timePlaybackStarted), n
                            }, e.prototype.isStalled = function() {
                                return this._stateManager.getState().stalled
                            }, e.prototype.isLoading = function() {
                                return this._stateManager.getState().loading
                            }, e.prototype.isPlaying = function() {
                                return this._stateManager.getState().playing
                            }, e.prototype.isActuallyPlaying = function() {
                                return this._stateManager.getState().actuallyPlaying
                            }, e.prototype.isEnded = function() {
                                return this._stateManager.getState().ended
                            }, e.prototype.getState = function() {
                                return this._stateManager.getState().state
                            }, e.prototype.getUrlController = function() {
                                return null
                            }, e.prototype.getBufferController = function() {
                                return null
                            }, e.prototype.getMemoryCacheMaxSize = function() {
                                return null
                            }, e.prototype.getMemoryCacheUsage = function() {
                                return null
                            }, e.prototype.getMemoryCacheController = function() {
                                return null
                            }, e.prototype.getFatalError = function() {
                                return this._stateManager.update(function(e) {
                                    var t = e.fatalError;
                                    return t
                                })
                            }, e.prototype.isDead = function() {
                                return this._stateManager.getState().dead
                            }, e.prototype.getDuration = function() {
                                var e = this._stateManager.getState(),
                                    t = e.ready,
                                    r = e.duration;
                                return t ? r : null
                            }, e.prototype.setVolume = function(e) {
                                if (e < 0 || e > 1) throw new Error("Volume must be >= 0 and <= 1.");
                                this._setVolume(e)
                            }, e.prototype.getCurrentBufferedTimeRange = function() {
                                var e = this.getBufferedTimeRanges(),
                                    t = this.getPosition();
                                return l.find(e, function(e) {
                                    return e.containsTime(t)
                                }) || null
                            }, e.prototype.play = function() {
                                var e = this;
                                this._ensureNotDead(), this._logger.debug("play() called.");
                                try {
                                    return this._stateManager.update(function(t) {
                                        return t.playing ? e._logger.debug("Intent is already to be playing.") : (e._logger.debug("Requesting play."), t.playing = !0, e._lastPlayError = null), t.playDeferred || (t.playDeferred = u.buildDeferred()), t.playDeferred.promise
                                    })
                                } catch (e) {
                                    return this._triggerError(new i.PlayerFatalError("Unexpected error when attempting to play.", e)), o.Promise.reject(e)
                                }
                            }, e.prototype.pause = function() {
                                var e = this;
                                this._ensureNotDead(), this._logger.debug("pause() called.");
                                try {
                                    return this._stateManager.update(function(t) {
                                        return t.playing ? (e._logger.debug("Requesting pause."), t.playing = !1, e._lastPauseError = null) : e._logger.debug("Intent is already to be paused."), t.pauseDeferred || (t.pauseDeferred = u.buildDeferred()), t.pauseDeferred.promise
                                    })
                                } catch (e) {
                                    return this._triggerError(new i.PlayerFatalError("Unexpected error when attempting to pause.", e)), o.Promise.reject(e)
                                }
                            }, e.prototype.seek = function(e) {
                                var t = this;
                                return this._ensureNotDead(), this._logger.debug("seek() called.", e), this._stateManager.update(function(r) {
                                    if (e < 0) return t._logger.warn("Rejecting seek immediately as the position was negative."), o.Promise.reject(new Error("You were attempting to seek to a negative time."));
                                    if (null !== r.duration && e > r.duration) return t._logger.warn("Rejecting seek immediately as the duration is now known, and the requested positon was past it."), o.Promise.reject(new Error("You were attempting to seek past the end of the media."));
                                    try {
                                        var n = u.buildDeferred();
                                        return r.seek && "IN_PROGRESS" === r.seek.state && r.seek.position === e ? t._logger.debug("Seek already requested to the same position.", e) : (t._logger.debug("Requesting seek.", e), r.seeking = !0, r.seek = {
                                            state: "IN_PROGRESS",
                                            position: e
                                        }, r.positionJumped = Object.create(null), t._updateEnded(e)), t._queuedSeekDeferreds.push({
                                            position: e,
                                            deferred: n
                                        }), n.promise
                                    } catch (e) {
                                        return t._triggerError(new i.PlayerFatalError("Unexpected error when attempting to seek.", e)), o.Promise.reject(e)
                                    }
                                })
                            }, e.prototype.getSeekState = function() {
                                return this._stateManager.getState().seek
                            }, e.prototype.kill = function() {
                                var e = this;
                                this._stateManager.update(function(t) {
                                    t.dead || (e._logger.debug("kill() called."), t.dead = !0, e._positionWhenKilled = e._getPositionOrPositionSeekingTo(), e._updateEnded(e._positionWhenKilled))
                                })
                            }, e.prototype._atomic = function(e) {
                                return this._stateManager.update(function() {
                                    return e()
                                })
                            }, e.prototype._ensureNotDead = function() {
                                if (this._stateManager.getState().dead) throw new Error("Player is dead.")
                            }, e.prototype._notifyStalled = function(e) {
                                this._stalled !== e && (this._logger.debug("notifyStalled() called.", e), this._stalled = e, this._pendingPositionWhenStoppedPlaying = this.getPosition(), this._stateManager.update(function() {}))
                            }, e.prototype._getQueuedSeekPosition = function() {
                                var e = this.getSeekState();
                                return e && "IN_PROGRESS" === e.state ? e.position : null
                            }, e.prototype._provideDuration = function(e) {
                                var t = this;
                                return this._stateManager.update(function(r) {
                                    if (t._ensureNotDead(), r.duration !== e) {
                                        var n = t._getPositionOrPositionSeekingTo();
                                        if (e < 0 || r.ready && n > e) throw t._triggerError(new i.PlayerFatalError("Attempt to update duration to an invalid value.")), new Error("Duration cannot be less than the current position.");
                                        t._logger.debug("provideDuration() called.", e), r.ready ? (r.duration = e, t._updateEnded(n)) : t._queuedDuration = e
                                    }
                                })
                            }, e.prototype._notifyPlaying = function(e) {
                                var t = this;
                                return this._stateManager.update(function(r) {
                                    if (t._ensureNotDead(), !r.ready) throw t._triggerError(new i.PlayerFatalError("Attempt to register playback as started before ready.")), new Error("Player must be ready first.");
                                    e !== r.actuallyPlaying && (t._logger.debug("notifyPlaying() called.", e), e || (t._pendingPositionWhenStoppedPlaying = t.getPosition()), r.actuallyPlaying = r.playing = e, e ? t._lastPlayError = null : t._lastPauseError = null)
                                })
                            }, e.prototype._notifyPlayRejection = function(e) {
                                var t = this;
                                return this._stateManager.update(function(r) {
                                    if (t._ensureNotDead(), !r.ready) throw t._triggerError(new i.PlayerFatalError("Attempt to reject a play request before player ready.")), new Error("Player must be ready first.");
                                    if (r.actuallyPlaying || !r.playing) throw t._triggerError(new i.PlayerFatalError("Attempt to reject a play request when not valid.")), new Error("Playing state is incorrect.");
                                    t._logger.debug("notifyPlayRejection() called.", e), r.playing = !1, t._lastPlayError = e
                                })
                            }, e.prototype._notifyPauseRejection = function(e) {
                                var t = this;
                                return this._ensureNotDead(), this._stateManager.update(function(r) {
                                    if (!r.ready) throw t._triggerError(new i.PlayerFatalError("Attempt to reject pause request before player ready.")), new Error("Player must be ready first.");
                                    if (!r.actuallyPlaying || r.playing) throw t._triggerError(new i.PlayerFatalError("Attempt to reject pause request when not valid.")), new Error("Playing state is incorrect.");
                                    t._logger.debug("notifyPauseRejection() called.", e), r.playing = !0, t._lastPauseError = e
                                })
                            }, e.prototype._notifySeekRejection = function(e) {
                                var t = this;
                                return this._ensureNotDead(), this._stateManager.update(function(r) {
                                    if (!r.ready) throw new Error("Player must be ready first.");
                                    if (!r.seek || "IN_PROGRESS" !== r.seek.state) throw new Error("A seek hasn't been requested.");
                                    t._logger.debug("notifySeekRejection() called.", e), r.seeking = !1, r.seek = {
                                        state: "ERROR",
                                        error: e
                                    }, r.positionJumped = Object.create(null), t._updateEnded(t._getPositionOrPositionSeekingTo())
                                })
                            }, e.prototype._signalReady = function() {
                                var e = this;
                                return this._ensureNotDead(), this._stateManager.update(function(t) {
                                    if (t.ready) throw e._triggerError(new i.PlayerFatalError("Attempt to signal ready twice.")), new Error("Ready already signalled.");
                                    if (null === e._queuedDuration) throw e._triggerError(new i.PlayerFatalError("Attempt to signal ready when duration unknown.")), new Error("Duration is still unknown.");
                                    e._logger.debug("signalReady() called."), t.ready = !0, t.duration = e._queuedDuration, t.seek && "IN_PROGRESS" === t.seek.state && t.seek.position > t.duration && (t.seeking = !1, t.seek = {
                                        state: "ERROR",
                                        error: new Error("You were attempting to seek past the end of the media.")
                                    }), e._updateEnded(e._getPositionOrPositionSeekingTo())
                                })
                            }, e.prototype._signalSeekComplete = function() {
                                var e = this;
                                return this._ensureNotDead(), this._stateManager.update(function(t) {
                                    if (!t.ready) throw new Error("Player must be ready first.");
                                    if (!t.seek || "IN_PROGRESS" !== t.seek.state) throw new Error("There shouldn't be a seek in progress.");
                                    var r = t.duration;
                                    if (t.seek && "IN_PROGRESS" === t.seek.state && t.seek.position > r) throw new Error("Seek cannot have completed given it was to a time greater than the duration.");
                                    e._logger.debug("signalSeekComplete() called."), t.seek = {
                                        state: "COMPLETED",
                                        position: t.seek.position
                                    }, t.seeking = !1, e._updateEnded(e._getPositionOrPositionSeekingTo())
                                })
                            }, e.prototype._signalPositionJump = function() {
                                return this._stateManager.update(function(e) {
                                    e.seek && "IN_PROGRESS" === e.seek.state || (e.positionJumped = Object.create(null))
                                })
                            }, e.prototype._signalEnded = function() {
                                var e = this;
                                return this._ensureNotDead(), this._stateManager.update(function(t) {
                                    if (!t.ready) throw e._triggerError(new i.PlayerFatalError("Attempt to signal ended before player was ready.")), new Error("Player must be ready first.");
                                    if (!t.ended) {
                                        if (t.seek && "IN_PROGRESS" === t.seek.state) return void e._logger.debug("Ignoring signalEnded() call because a seek is in progress.");
                                        e._logger.debug("signalEnded() called."), t.ended = !0
                                    }
                                })
                            }, e.prototype._signalNotEnded = function() {
                                var e = this;
                                return this._ensureNotDead(), this._stateManager.update(function(t) {
                                    if (!t.ready) throw e._triggerError(new i.PlayerFatalError("Attempt to signal not ended before player was ready.")), new Error("Player must be ready first.");
                                    if (t.ended) {
                                        if (null !== t.seek && "IN_PROGRESS" === t.seek.state) return void e._logger.debug("Ignoring signalNotEnded() call because a seek is in progress.");
                                        e._logger.debug("signalNotEnded() called."), t.ended = !1
                                    }
                                })
                            }, e.prototype._triggerError = function(e) {
                                var t = this;
                                return this._ensureNotDead(), this._stateManager.update(function(r) {
                                    var n = !1;
                                    if (r.ready && e instanceof a.NotSupportedError && (e = new i.PlayerFatalError("Invalid NotSupportedError."), n = !0), e instanceof i.PlayerFatalError) {
                                        e instanceof a.NotSupportedError ? t._logger.info("NotSupportedError occurred.", e) : t._logger.error("Fatal error occurred.", e), r.fatalError ? t._logger.warn("A fatal error already occurred.") : r.fatalError = e, t._errors.push(e), r.errorOccurred = Object.create(null);
                                        try {
                                            t._positionWhenKilled = t.getPosition()
                                        } catch (e) {
                                            t._logger.error("Tried to get position before player was killed but got exception.", e)
                                        }
                                        r.dead = !0
                                    } else t._logger.warn("Non-fatal error occurred.", e), t._errors.push(e), r.errorOccurred = Object.create(null);
                                    if (n) throw new Error("Not supported errors are only valid before the player is ready.")
                                })
                            }, e.prototype._buildEventHandle = function(e) {
                                var t = this;
                                return {
                                    subscribe: function(r) {
                                        var n = function(e) {
                                            return r(e, c.now())
                                        };
                                        return t._stateManager.subscribe(function(t) {
                                            e(n, t)
                                        })
                                    }
                                }
                            }, e.prototype._finalizeState = function(e) {
                                e.dead ? (this._lastPlayError = new Error("Player was killed."), e.loading = !1, e.stalled = !0, e.actuallyPlaying = !1, e.playing = !1, e.state = d.State.DEAD) : (e.stalled = !e.ended && (!e.ready || this._stalled || !(!e.seek || "IN_PROGRESS" !== e.seek.state)), e.loading = !e.ended && (e.playing || e.actuallyPlaying) && (e.stalled || e.playing !== e.actuallyPlaying), e.state = this._calculateState(e))
                            }, e.prototype._getPositionOrPositionSeekingTo = function() {
                                var e = this;
                                return this._stateManager.update(function(t) {
                                    if (t.seek && "IN_PROGRESS" === t.seek.state) return t.seek.position;
                                    if (!t.ready || null === t.duration) return 0;
                                    var r = e._getPosition();
                                    if (t.seek && "IN_PROGRESS" === t.seek.state) return t.seek.position;
                                    var n = t.duration;
                                    if (r < 0) throw e._logger.error("Player provided invalid position.", r, n), e._triggerError(new i.PlayerFatalError("Player provided a position that was invalid.")), new Error("Player provided invalid position.");
                                    if (null !== n && r > n) throw e._logger.error("Player provided invalid position.", r, n), e._triggerError(new i.PlayerFatalError("Player provided a position that was invalid.")), new Error("Player provided invalid position.");
                                    return r
                                })
                            }, e.prototype._updateEnded = function(e) {
                                return this._stateManager.update(function(t) {
                                    var r = t.duration,
                                        n = e === r && t.ready;
                                    t.ended = n
                                })
                            }, e.prototype._calculateState = function(e) {
                                var t = e.dead,
                                    r = e.loading,
                                    n = e.playing,
                                    o = e.ended;
                                return t ? d.State.DEAD : r ? d.State.LOADING : n && !o ? d.State.PLAYING : d.State.PAUSED
                            }, e.prototype._registerMediaSessionActionHandlers = function() {
                                var e = this;
                                this._mediaSessionEnabled && g && (g.setActionHandler("play", function() {
                                    e.isDead() || e.play()
                                }), g.setActionHandler("pause", function() {
                                    e.isDead() || e.pause()
                                }), g.setActionHandler("seekbackward", function() {
                                    e.isDead() || e.seek(Math.max(0, e.getPosition() - _))
                                }), g.setActionHandler("seekforward", function() {
                                    e.isDead() || e.seek(Math.min(e.getDuration() || 0, e.getPosition() + _))
                                }))
                            }, e.prototype._notifyMediaSessionPlaying = function() {
                                this._mediaSessionEnabled && g && (g.playbackState = "playing")
                            }, e.prototype._notifyMediaSessionPaused = function() {
                                this._mediaSessionEnabled && g && (g.playbackState = "paused")
                            }, e.prototype._afterUpdate = function(e) {
                                this._finalizeState(e)
                            }, e.prototype._afterDispatches = function() {
                                var e = this,
                                    t = this._errors;
                                this._errors = [], t.forEach(function(t) {
                                    return e._onError.dispatch(t)
                                })
                            }, e.prototype._onChange = function(e, t) {
                                var r = this,
                                    n = e.ready,
                                    o = e.dead,
                                    i = e.fatalError,
                                    a = e.playing,
                                    s = e.actuallyPlaying,
                                    u = e.ended;
                                if (s === !1 && (this._positionWhenStoppedPlaying = this._pendingPositionWhenStoppedPlaying), n === !0 && (this._logger.debug("Resolving ready deferred."), this._readyDeferred.resolve(void 0)), s === !0 && this._registerMediaSessionActionHandlers(), a === !0 ? this._notifyMediaSessionPlaying() : a === !1 && this._notifyMediaSessionPaused(), t.pauseDeferred && !t.pauseDeferred.isSettled() && t.playing) {
                                    var l = this._lastPauseError || new Error("Pause request aborted.");
                                    this._logger.debug("Rejecting pause deferred.", l), t.pauseDeferred.reject(l)
                                }
                                if (t.playDeferred && !t.playDeferred.isSettled() && !t.playing) {
                                    var l = this._lastPlayError || new Error("Play request aborted.");
                                    this._logger.debug("Rejecting play deferred.", l), t.playDeferred.reject(l)
                                }
                                if (t.playDeferred && !t.playDeferred.isSettled() && t.actuallyPlaying && (this._logger.debug("Resolving play deferred."), t.playDeferred.resolve(void 0)), !t.pauseDeferred || t.pauseDeferred.isSettled() || t.actuallyPlaying || (this._logger.debug("Resolving pause deferred."), t.pauseDeferred.resolve(void 0)), s === !0 && !t.ended || u === !1 && t.actuallyPlaying ? this._timePlaybackStarted = c.now() : (s === !1 && !t.ended || u === !0 && t.actuallyPlaying) && (this._listenTimeBase += c.now() - this._timePlaybackStarted, this._timePlaybackStarted = null), this._queuedSeekDeferreds = this._queuedSeekDeferreds.filter(function(e) {
                                        var n = e.position,
                                            o = e.deferred;
                                        if (t.seek)
                                            if ("IN_PROGRESS" !== t.seek.state) {
                                                if (!t.stalled || "ERROR" === t.seek.state) return "ERROR" !== t.seek.state ? (r._logger.debug("Resolving seek()."), o.resolve(void 0)) : (r._logger.debug("Rejecting seek().", t.seek.error), o.reject(t.seek.error)), !1
                                            } else if ("IN_PROGRESS" !== t.seek.state || t.seek.position !== n) return r._logger.debug("Rejecting seek() because another seek was requested.", n), o.reject(new Error("Seek request aborted because another seek was requested to a different position.")), !1;
                                        return !0
                                    }), o === !0) {
                                    if (this._logger.debug("Calling _kill() on player."), this._kill(), this._logger.info("Player killed."), !t.ready) {
                                        var l = i || new Error("Player was killed.");
                                        this._logger.debug("Rejecting whenReady."), this._readyDeferred.reject(l)
                                    }
                                    this._queuedSeekDeferreds.forEach(function(e) {
                                        var t = e.position,
                                            n = e.deferred,
                                            o = i || new Error("Seek aborted as player killed.");
                                        r._logger.debug("Rejecting seek().", t), n.reject(o)
                                    }), this._logger.debug("Player dead.")
                                }
                            }, e
                        }();
                    t.BasePlayer = y
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(7),
                        i = r(4),
                        a = r(0),
                        s = r(3),
                        u = function(e) {
                            function t(t) {
                                var r = e.call(this, t) || this;
                                return r._errorHandler = null, r._changeHandler = null, r._player = null, r._instanceLock = null, r._position = 0, r._volume = 1, r._muted = !1, r._unsynced = !1, r._logger = s.prefixLogger(r._logger, "ProxyPlayerBase"), r
                            }
                            return n(t, e), t.prototype.getVolume = function() {
                                return this._player && !this._unsynced ? this._player.getVolume() : this._volume
                            }, t.prototype.getMuted = function() {
                                return this._player && !this._unsynced ? this._player.getMuted() : this._muted
                            }, t.prototype.setMuted = function(e) {
                                return this._player && !this._unsynced ? this._player.setMuted(e) : void(this._muted = e)
                            }, t.prototype.getBufferedTimeRanges = function() {
                                return this._player && !this._unsynced ? this._player.getBufferedTimeRanges() : []
                            }, t.prototype.getCurrentBufferedTimeRange = function() {
                                return this._player && !this._unsynced ? this._player.getCurrentBufferedTimeRange() : null
                            }, t.prototype.getMaxBufferLength = function() {
                                return this._player && !this._unsynced ? this._player.getMaxBufferLength() : null
                            }, t.prototype._providePlayer = function(e, t) {
                                if (void 0 === t && (t = {
                                        syncPosition: !0,
                                        syncVolume: !0
                                    }), this._ensureNotDead(), this._player) throw new Error("A player has already been provided.");
                                this._logger.debug("providePlayer() called."), this._instanceLock = Object.create(null), this._player = e, this._sync(t)
                            }, t.prototype._removePlayer = function() {
                                if (this._ensureNotDead(), !this._player) throw new Error("There is no player to remove.");
                                this._logger.debug("removePlayer() called."), this._unsync(), this._instanceLock = null, this._player = null
                            }, t.prototype._setInitialDuration = function(e) {
                                var t = this;
                                if (this._ensureNotDead(), e < 0) throw new Error("Cannot set duration to a value < 0.");
                                null === this.getDuration() && this._atomic(function() {
                                    t._fixPosition(e), t._provideDuration(e), t.isReady() || (t._signalReady(), t._player && t._completeLocalSeekIfPlayerNotSeeking(t._player))
                                })
                            }, t.prototype._triggerError = function(t) {
                                e.prototype._triggerError.call(this, t)
                            }, t.prototype._getPlayer = function() {
                                return this.isDead() ? null : this._player
                            }, t.prototype._setVolume = function(e) {
                                return this._player && !this._unsynced ? this._player.setVolume(e) : void(this._volume = e)
                            }, t.prototype._handlePlayPauseChange = function(e) {
                                var t = this._player;
                                t && (e ? this._playAndHandleAbort(t) : this._pauseAndHandleAbort(t))
                            }, t.prototype._handleSeekChange = function(e) {
                                var t = this._player;
                                t ? t.seek(e) : this._position = e
                            }, t.prototype._getPosition = function() {
                                if (this._player && !this._unsynced) {
                                    if (!this._changeHandler) throw new Error("Handler should exist.");
                                    if (this._changeHandler.retrieve(), this._player) return this._player.getPosition()
                                }
                                return this._position
                            }, t.prototype._kill = function() {
                                if (this._player && !this._player.isDead()) {
                                    if (!this._changeHandler) throw new Error("Handler should exist.");
                                    if (this._changeHandler.retrieve(), this._player) {
                                        if (this._player.kill(), !this._unsynced) throw new Error("Unsync should have happened.");
                                        this._player = null
                                    }
                                }
                            }, t.prototype._fixPosition = function(e) {
                                this._position > e && (this._logger.debug("A duration was provided that was less than the current position. Changing position to the duration.", e), this._position = e, this._signalPositionJump())
                            }, t.prototype._sync = function(e) {
                                var t = this,
                                    r = this._player;
                                if (!r) throw new Error("Player should have become available by now.");
                                return this._unsynced = !1, this._logger.debug("Syncing..."), r.isDead() ? void this._logger.debug("Provided player is dead.") : (this._errorHandler = r.onError.subscribe(function(e) {
                                    e instanceof a.PlayerFatalError || t._triggerError(e)
                                }), this._changeHandler = r.onChange.subscribe(function(e) {
                                    t._atomic(function() {
                                        if (e.dead) return t._logger.debug("Player has gone to DEAD state."), t._unsync(), void(t.isDead() || e.fatalError && t._handleFatalError(e.fatalError));
                                        if (void 0 !== e.duration && (t._fixPosition(e.duration), t._provideDuration(e.duration), t.isReady() ? t._notifyStalled(!1) : (t._signalReady(), t._completeLocalSeekIfPlayerNotSeeking(r), t.isPlaying() && !t.isActuallyPlaying() && r.isActuallyPlaying() ? (t._logger.debug("Provided player already playing."), t._notifyPlaying(!0)) : t.isPlaying() || !t.isActuallyPlaying() || r.isActuallyPlaying() || (t._logger.debug("Provided player already paused."), t._notifyPlaying(!1)))), e.seek) {
                                            var n = t.getSeekState();
                                            n && "IN_PROGRESS" === n.state ? "COMPLETED" === e.seek.state && n.position === e.seek.position ? t._signalSeekComplete() : "COMPLETED" === e.seek.state && n.position !== e.seek.position ? t._notifySeekRejection(new Error("Another seek occurred to a different position.")) : "IN_PROGRESS" === e.seek.state && n.position !== e.seek.position ? (t._notifySeekRejection(new Error("Another seek occurred to a different position.")), t.seek(e.seek.position)) : "ERROR" === e.seek.state && t._notifySeekRejection(e.seek.error) : "COMPLETED" === e.seek.state && t._signalPositionJump()
                                        }
                                        e.ended === !0 && t._signalEnded(), e.ended === !1 && t._signalNotEnded(), void 0 !== e.stalled && t._notifyStalled(e.stalled), e.playing === !1 && e.playRejection && (t.isActuallyPlaying() ? (t._triggerError(new i.PlayerError("Paused because a player was provided that refused to play.")), t._notifyStalled(!1), t._notifyPlaying(!1)) : t._notifyPlayRejection(e.playRejection)), e.playing === !0 && e.pauseRejection && (t.isActuallyPlaying() ? t._notifyPauseRejection(e.pauseRejection) : (t._triggerError(new i.PlayerError("Playing because a player was provided that refused to pause.")), t._notifyPlaying(!0))), e.playing === !0 && t.play(), e.playing === !1 && t.pause(), void 0 !== e.actuallyPlaying && (e.actuallyPlaying && t._notifyStalled(!1), t._notifyPlaying(e.actuallyPlaying))
                                    })
                                }), void this._atomic(function() {
                                    try {
                                        if (!t.isReady() && r.isReady()) {
                                            t._logger.debug("Provided player is already ready. Making proxy player ready.");
                                            var n = r.getDuration();
                                            t._fixPosition(n), t._provideDuration(n), t._signalReady()
                                        }
                                        if (e.syncVolume && (r.setVolume(t._volume), r.setMuted(t._muted)), e.syncPosition) r.getPosition() !== t._position && (t._logger.debug("Seeking to match position."), r.seek(t._position));
                                        else {
                                            var o = t.getSeekState();
                                            if (r.getPosition() !== t._position && o && "IN_PROGRESS" === o.state) t._logger.debug("Seeking to match position because a seek has been queued."), r.seek(t._position);
                                            else {
                                                var i = r.getSeekState();
                                                i && "IN_PROGRESS" === i.state && (t._logger.debug("Seeking on proxy to match seek that is in progress on provided player."), t.seek(i.position))
                                            }
                                        }
                                        r.isActuallyPlaying() ? (t._logger.debug("Provided player is already playing."), t._notifyPlaying(!0)) : r.isPlaying() ? (t._logger.debug("Provided player is preparing to play."), t.play()) : t.isPlaying() && (t._logger.debug("Calling play() on provided player to match proxy."), t._playAndHandleAbort(r)), t._completeLocalSeekIfPlayerNotSeeking(r)
                                    } catch (e) {
                                        t._triggerError(new a.PlayerFatalError("Unexpected error occurred whilst syncing.", e))
                                    }
                                }))
                            }, t.prototype._completeLocalSeekIfPlayerNotSeeking = function(e) {
                                var t = e.getSeekState(),
                                    r = this.getSeekState();
                                !r || "IN_PROGRESS" !== r.state || t && "IN_PROGRESS" === t.state || this._signalSeekComplete()
                            }, t.prototype._playAndHandleAbort = function(e) {
                                var t = this._instanceLock;
                                this._logger.debug("Calling play() on provided player."), e.play(), this._instanceLock === t && !e.isPlaying() && this.isPlaying() && (this._logger.debug("Provided player was not playing after play() call completed."), this.pause())
                            }, t.prototype._pauseAndHandleAbort = function(e) {
                                var t = this._instanceLock;
                                this._logger.debug("Calling pause() on provided player."), e.pause(), this._instanceLock === t && e.isPlaying() && !this.isPlaying() && (this._logger.debug("Provided player was not paused after pause() call completed."), this.play())
                            }, t.prototype._unsync = function() {
                                if (!this._unsynced) {
                                    this._unsynced = !0, this._logger.debug("Unsyncing...");
                                    var e = this._player;
                                    if (e) try {
                                        this._volume = e.getVolume(), this._muted = e.getMuted(), this._position = e.getPosition()
                                    } catch (e) {
                                        this._logger.error("Error whilst unsyncing.", e)
                                    }
                                    this._changeHandler && (this._changeHandler.remove(), this._changeHandler = null), this._errorHandler && (this._errorHandler.remove(), this._errorHandler = null), this._logger.debug("Unsynced."), this.isReady() && !this.isDead() && this._notifyStalled(!0)
                                }
                            }, t
                        }(o.BasePlayer);
                    t.ProxyPlayerBase = u
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n;
                    ! function(e) {
                        e[e.LOADING = 0] = "LOADING", e[e.PLAYING = 1] = "PLAYING", e[e.PAUSED = 2] = "PAUSED", e[e.DEAD = 3] = "DEAD"
                    }(n = t.State || (t.State = {}))
                }, function(e, t, r) {
                    (function(t, n) {
                        /*!
                         * @overview es6-promise - a tiny implementation of Promises/A+.
                         * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
                         * @license   Licensed under MIT license
                         *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
                         * @version   4.0.5
                         */
                        ! function(t, r) {
                            e.exports = r()
                        }(this, function() {
                            "use strict";

                            function e(e) {
                                return "function" == typeof e || "object" == typeof e && null !== e
                            }

                            function o(e) {
                                return "function" == typeof e
                            }

                            function i(e) {
                                Y = e
                            }

                            function a(e) {
                                Q = e
                            }

                            function s() {
                                return function() {
                                    return t.nextTick(p)
                                }
                            }

                            function u() {
                                return "undefined" != typeof W ? function() {
                                    W(p)
                                } : d()
                            }

                            function l() {
                                var e = 0,
                                    t = new $(p),
                                    r = document.createTextNode("");
                                return t.observe(r, {
                                    characterData: !0
                                }),
                                    function() {
                                        r.data = e = ++e % 2
                                    }
                            }

                            function c() {
                                var e = new MessageChannel;
                                return e.port1.onmessage = p,
                                    function() {
                                        return e.port2.postMessage(0)
                                    }
                            }

                            function d() {
                                var e = setTimeout;
                                return function() {
                                    return e(p, 1)
                                }
                            }

                            function p() {
                                for (var e = 0; e < J; e += 2) {
                                    var t = re[e],
                                        r = re[e + 1];
                                    t(r), re[e] = void 0, re[e + 1] = void 0
                                }
                                J = 0
                            }

                            function h() {
                                try {
                                    var e = r(34);
                                    return W = e.runOnLoop || e.runOnContext, u()
                                } catch (e) {
                                    return d()
                                }
                            }

                            function f(e, t) {
                                var r = arguments,
                                    n = this,
                                    o = new this.constructor(g);
                                void 0 === o[oe] && L(o);
                                var i = n._state;
                                return i ? ! function() {
                                    var e = r[i - 1];
                                    Q(function() {
                                        return O(i, o, e, n._result)
                                    })
                                }() : M(n, o, e, t), o
                            }

                            function _(e) {
                                var t = this;
                                if (e && "object" == typeof e && e.constructor === t) return e;
                                var r = new t(g);
                                return S(r, e), r
                            }

                            function g() {}

                            function y() {
                                return new TypeError("You cannot resolve a promise with itself")
                            }

                            function v() {
                                return new TypeError("A promises callback cannot return that same promise.")
                            }

                            function m(e) {
                                try {
                                    return e.then
                                } catch (e) {
                                    return ue.error = e, ue
                                }
                            }

                            function E(e, t, r, n) {
                                try {
                                    e.call(t, r, n)
                                } catch (e) {
                                    return e
                                }
                            }

                            function b(e, t, r) {
                                Q(function(e) {
                                    var n = !1,
                                        o = E(r, t, function(r) {
                                            n || (n = !0, t !== r ? S(e, r) : T(e, r))
                                        }, function(t) {
                                            n || (n = !0, A(e, t))
                                        }, "Settle: " + (e._label || " unknown promise"));
                                    !n && o && (n = !0, A(e, o))
                                }, e)
                            }

                            function w(e, t) {
                                t._state === ae ? T(e, t._result) : t._state === se ? A(e, t._result) : M(t, void 0, function(t) {
                                    return S(e, t)
                                }, function(t) {
                                    return A(e, t)
                                })
                            }

                            function P(e, t, r) {
                                t.constructor === e.constructor && r === f && t.constructor.resolve === _ ? w(e, t) : r === ue ? A(e, ue.error) : void 0 === r ? T(e, t) : o(r) ? b(e, t, r) : T(e, t)
                            }

                            function S(t, r) {
                                t === r ? A(t, y()) : e(r) ? P(t, r, m(r)) : T(t, r)
                            }

                            function R(e) {
                                e._onerror && e._onerror(e._result), k(e)
                            }

                            function T(e, t) {
                                e._state === ie && (e._result = t, e._state = ae, 0 !== e._subscribers.length && Q(k, e))
                            }

                            function A(e, t) {
                                e._state === ie && (e._state = se, e._result = t, Q(R, e))
                            }

                            function M(e, t, r, n) {
                                var o = e._subscribers,
                                    i = o.length;
                                e._onerror = null, o[i] = t, o[i + ae] = r, o[i + se] = n, 0 === i && e._state && Q(k, e)
                            }

                            function k(e) {
                                var t = e._subscribers,
                                    r = e._state;
                                if (0 !== t.length) {
                                    for (var n = void 0, o = void 0, i = e._result, a = 0; a < t.length; a += 3) n = t[a], o = t[a + r], n ? O(r, n, o, i) : o(i);
                                    e._subscribers.length = 0
                                }
                            }

                            function x() {
                                this.error = null
                            }

                            function D(e, t) {
                                try {
                                    return e(t)
                                } catch (e) {
                                    return le.error = e, le
                                }
                            }

                            function O(e, t, r, n) {
                                var i = o(r),
                                    a = void 0,
                                    s = void 0,
                                    u = void 0,
                                    l = void 0;
                                if (i) {
                                    if (a = D(r, n), a === le ? (l = !0, s = a.error, a = null) : u = !0, t === a) return void A(t, v())
                                } else a = n, u = !0;
                                t._state !== ie || (i && u ? S(t, a) : l ? A(t, s) : e === ae ? T(t, a) : e === se && A(t, a))
                            }

                            function C(e, t) {
                                try {
                                    t(function(t) {
                                        S(e, t)
                                    }, function(t) {
                                        A(e, t)
                                    })
                                } catch (t) {
                                    A(e, t)
                                }
                            }

                            function I() {
                                return ce++
                            }

                            function L(e) {
                                e[oe] = ce++, e._state = void 0, e._result = void 0, e._subscribers = []
                            }

                            function N(e, t) {
                                this._instanceConstructor = e, this.promise = new e(g), this.promise[oe] || L(this.promise), K(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? T(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && T(this.promise, this._result))) : A(this.promise, j())
                            }

                            function j() {
                                return new Error("Array Methods must be provided an Array")
                            }

                            function F(e) {
                                return new N(this, e).promise
                            }

                            function U(e) {
                                var t = this;
                                return new t(K(e) ? function(r, n) {
                                    for (var o = e.length, i = 0; i < o; i++) t.resolve(e[i]).then(r, n)
                                } : function(e, t) {
                                    return t(new TypeError("You must pass an array to race."))
                                })
                            }

                            function B(e) {
                                var t = this,
                                    r = new t(g);
                                return A(r, e), r
                            }

                            function q() {
                                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                            }

                            function H() {
                                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                            }

                            function z(e) {
                                this[oe] = I(), this._result = this._state = void 0, this._subscribers = [], g !== e && ("function" != typeof e && q(), this instanceof z ? C(this, e) : H())
                            }

                            function G() {
                                var e = void 0;
                                if ("undefined" != typeof n) e = n;
                                else if ("undefined" != typeof self) e = self;
                                else try {
                                        e = Function("return this")()
                                    } catch (e) {
                                        throw new Error("polyfill failed because global object is unavailable in this environment")
                                    }
                                var t = e.Promise;
                                if (t) {
                                    var r = null;
                                    try {
                                        r = Object.prototype.toString.call(t.resolve())
                                    } catch (e) {}
                                    if ("[object Promise]" === r && !t.cast) return
                                }
                                e.Promise = z
                            }
                            var V = void 0;
                            V = Array.isArray ? Array.isArray : function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            };
                            var K = V,
                                J = 0,
                                W = void 0,
                                Y = void 0,
                                Q = function(e, t) {
                                    re[J] = e, re[J + 1] = t, J += 2, 2 === J && (Y ? Y(p) : ne())
                                },
                                X = "undefined" != typeof window ? window : void 0,
                                Z = X || {},
                                $ = Z.MutationObserver || Z.WebKitMutationObserver,
                                ee = "undefined" == typeof self && "undefined" != typeof t && "[object process]" === {}.toString.call(t),
                                te = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                                re = new Array(1e3),
                                ne = void 0;
                            ne = ee ? s() : $ ? l() : te ? c() : void 0 === X ? h() : d();
                            var oe = Math.random().toString(36).substring(16),
                                ie = void 0,
                                ae = 1,
                                se = 2,
                                ue = new x,
                                le = new x,
                                ce = 0;
                            return N.prototype._enumerate = function() {
                                for (var e = this.length, t = this._input, r = 0; this._state === ie && r < e; r++) this._eachEntry(t[r], r)
                            }, N.prototype._eachEntry = function(e, t) {
                                var r = this._instanceConstructor,
                                    n = r.resolve;
                                if (n === _) {
                                    var o = m(e);
                                    if (o === f && e._state !== ie) this._settledAt(e._state, t, e._result);
                                    else if ("function" != typeof o) this._remaining--, this._result[t] = e;
                                    else if (r === z) {
                                        var i = new r(g);
                                        P(i, e, o), this._willSettleAt(i, t)
                                    } else this._willSettleAt(new r(function(t) {
                                        return t(e)
                                    }), t)
                                } else this._willSettleAt(n(e), t)
                            }, N.prototype._settledAt = function(e, t, r) {
                                var n = this.promise;
                                n._state === ie && (this._remaining--, e === se ? A(n, r) : this._result[t] = r), 0 === this._remaining && T(n, this._result)
                            }, N.prototype._willSettleAt = function(e, t) {
                                var r = this;
                                M(e, void 0, function(e) {
                                    return r._settledAt(ae, t, e)
                                }, function(e) {
                                    return r._settledAt(se, t, e)
                                })
                            }, z.all = F, z.race = U, z.resolve = _, z.reject = B, z._setScheduler = i, z._setAsap = a, z._asap = Q, z.prototype = {
                                constructor: z,
                                then: f,
                                catch: function(e) {
                                    return this.then(null, e)
                                }
                            }, z.polyfill = G, z.Promise = z, z
                        })
                    }).call(t, r(24), r(33))
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(0),
                        i = function(e) {
                            function t(t) {
                                return e.call(this, t || "The player cannot play the provided descriptor.") || this
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "NOT_SUPPORTED_ERROR"
                            }, t
                        }(o.PlayerFatalError);
                    t.NotSupportedError = i
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(4),
                        i = function(e) {
                            function t(t) {
                                var r = e.call(this, "The player that the proxy was controlling had a fatal error.") || this;
                                return r._providedPlayerError = t, r
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "PROXY_PLAYER_PROVIDED_PLAYER_FATAL_ERROR"
                            }, t.prototype.getProvidedPlayerFatalError = function() {
                                return this._providedPlayerError
                            }, t
                        }(o.PlayerError);
                    t.ProxyProvidedPlayerFatalError = i
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(1),
                        o = r(14);
                    t.abortedError = new Error("Job aborted.");
                    var i = function() {
                        function e(e) {
                            this.job = e, this._counter = 0, this._jobControl = null, this._promise = null, this._onCompletion = [], this._onError = [], this._jobCompleted = !1
                        }
                        return e.prototype.run = function() {
                            var e = this;
                            this._jobControl || (this._jobControl = this.job(), this._promise = this._jobControl.result, o.always(this._promise, function() {
                                return e._jobCompleted = !0
                            }));
                            var r = this._jobControl,
                                i = this._promise;
                            this._counter++;
                            var a = n.buildDeferred(),
                                s = !1,
                                u = !1,
                                l = function() {
                                    u || (s = !0, e._counter--)
                                };
                            return o.always(i, l), i.then(function(t) {
                                u || (e._onCompletion.forEach(function(e) {
                                    try {
                                        e(t)
                                    } catch (e) {
                                        window.setTimeout(function() {
                                            throw e
                                        }, 0)
                                    }
                                }), a.resolve(t))
                            }, function(t) {
                                u || (e._onError.forEach(function(e) {
                                    return e(t)
                                }), a.reject(t))
                            }), {
                                whenComplete: function() {
                                    return a.promise
                                },
                                onCompletion: function(t) {
                                    e._onCompletion.push(t)
                                },
                                onError: function(t) {
                                    e._onError.push(t)
                                },
                                hasCompleted: function() {
                                    return s
                                },
                                abort: function(n) {
                                    u || s || (u = !0, 0 === --e._counter && !e._jobCompleted && r.abort && (e._jobControl = null, e._promise = null, r.abort(n)), e._onError.forEach(function(e) {
                                        return e(t.abortedError)
                                    }), a.reject(t.abortedError))
                                }
                            }
                        }, e
                    }();
                    t.AbortableJob = i
                }, function(e, t, r) {
                    "use strict";

                    function n(e, t) {
                        return e.then(t, t)
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.always = n
                }, function(e, t, r) {
                    "use strict";

                    function n() {
                        return s
                    }

                    function o() {
                        var e = navigator.appVersion.match(l);
                        if (e && e.length >= 3) {
                            var t = parseInt(e[1], 10),
                                r = parseInt(e[2], 10);
                            if (!isNaN(t) && !isNaN(r)) return {
                                major: t,
                                minor: r
                            }
                        }
                        return null
                    }

                    function i() {
                        return u
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var a = "undefined" != typeof navigator ? navigator.userAgent : "",
                        s = !/chrome|opera/i.test(a) && /safari/i.test(a),
                        u = a.indexOf("MSIE ") >= 0 || a.indexOf("Trident/") >= 0,
                        l = /version\/(\d+)\.(\d+)/i;
                    t.isSafari = n, t.getSafariVersion = o, t.isIE = i
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function e(e, t) {
                            this._counter = 0, this._onExit = e, this._onEnter = t || null
                        }
                        return e.prototype.enter = function(e) {
                            this._counter++, 1 === this._counter && this._onEnter && (this._enterReturnVal = this._onEnter());
                            try {
                                return e ? e(this._enterReturnVal) : void 0
                            } finally {
                                this._counter--, 0 === this._counter && this._onExit(this._enterReturnVal)
                            }
                        }, e
                    }();
                    t.OnExit = n
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(10);
                    t.Promise = n.Promise
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function e(e, t, r) {
                            this.url = e, this.protocol = t, this.format = r
                        }
                        return e.prototype.getUrl = function() {
                            return this.url
                        }, e.prototype.getProtocol = function() {
                            return this.protocol
                        }, e.prototype.getFormat = function() {
                            return this.format
                        }, e
                    }();
                    t.Descriptor = n
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n, o = r(25),
                        i = r(11),
                        a = r(26),
                        s = r(12),
                        u = r(4),
                        l = r(0);
                    ! function(e) {
                        e.PlayerError = u.PlayerError, e.PlayerFatalError = l.PlayerFatalError, e.DependencyError = o.DependencyError, e.NotSupportedError = i.NotSupportedError, e.URLUpdateError = a.URLUpdateError, e.ProxyProvidedPlayerFatalError = s.ProxyProvidedPlayerFatalError
                    }(n = t.errors || (t.errors = {}))
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n, o = r(1),
                        i = r(13),
                        a = r(29),
                        s = r(16),
                        u = r(5),
                        l = r(27),
                        c = r(6),
                        d = r(17),
                        p = r(14),
                        h = r(28),
                        f = r(15),
                        _ = r(30);
                    ! function(e) {
                        e.OnExit = s.OnExit, e.find = u.find, e.Promise = d.Promise, e.always = p.always, e.compact = h.compact;
                        var t;
                        ! function(e) {
                            e.buildCache = l.buildCache
                        }(t = e.cache || (e.cache = {}));
                        var r;
                        ! function(e) {
                            e.buildDeferred = o.buildDeferred
                        }(r = e.deferred || (e.deferred = {}));
                        var n;
                        ! function(e) {
                            e.getExtension = _.getExtension, e.buildAbsoluteUrl = _.buildAbsoluteUrl
                        }(n = e.url || (e.url = {}));
                        var g;
                        ! function(e) {
                            e.AbortableJob = i.AbortableJob, e.abortedError = i.abortedError
                        }(g = e.abortableJob || (e.abortableJob = {}));
                        var y;
                        ! function(e) {
                            e.noMoreAttemptsError = a.noMoreAttemptsError, e.retry = a.retry, e.buildExponentialDelayCalculator = a.buildExponentialDelayCalculator
                        }(y = e.retry || (e.retry = {}));
                        var v;
                        ! function(e) {
                            e.isSafari = f.isSafari, e.getSafariVersion = f.getSafariVersion, e.isIE = f.isIE
                        }(v = e.browser || (e.browser = {}));
                        var m;
                        ! function(e) {
                            e.now = c.now
                        }(m = e.time || (e.time = {}))
                    }(n = t.helpers || (t.helpers = {}))
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(1),
                        o = r(2),
                        i = function() {
                            function e() {
                                this._aborted = !1, this._requestStarted = !1, this._response = null, this._responseDeferred = n.buildDeferred(), this._requestStartedDeferred = n.buildDeferred(), this._onRequestStart = new o.EventDispatcher, this.onRequestStart = this._onRequestStart.getHandle(), this.whenRequestStarted = this._requestStartedDeferred.promise
                            }
                            return e.prototype.getResponse = function() {
                                return this._responseDeferred.promise
                            }, e.prototype.hasRequestStarted = function() {
                                return this._requestStarted
                            }, e.prototype.abort = function() {
                                if (!this._aborted) {
                                    if (this._aborted = !0, this._response) throw new Error("Already have a response.");
                                    this._abort(), this._responseDeferred.reject(new Error("Aborted.")), this._requestStarted || this._requestStartedDeferred.reject(new Error("Aborted."))
                                }
                            }, e.prototype._provideResponse = function(e) {
                                if (this._aborted) throw new Error("Response aborted.");
                                if (this._response) throw new Error("Response already provided.");
                                if (e instanceof Error) this._aborted = !0, this._responseDeferred.reject(e);
                                else {
                                    if (!this._requestStarted) throw new Error("Request hasn't started yet.");
                                    this._response = e, this._responseDeferred.resolve(e)
                                }
                            }, e.prototype._signalRequestStart = function() {
                                if (this._aborted) throw new Error("Response aborted.");
                                if (this._requestStarted) throw new Error("Request already started.");
                                this._requestStarted = !0, this._requestStartedDeferred.resolve(void 0), this._onRequestStart.dispatch(void 0)
                            }, e
                        }();
                    t.LoaderRequest = i
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(2),
                        i = r(3),
                        a = r(8),
                        s = r(12),
                        u = function(e) {
                            function t(t) {
                                var r = e.call(this, t) || this;
                                return r._onPlayerProvided = new o.EventDispatcher, r._onPlayerRemoved = new o.EventDispatcher, r._shouldPassThroughFatalErrors = !!t.shouldPassThroughFatalErrors, r.onPlayerProvided = r._onPlayerProvided.getHandle(), r.onPlayerRemoved = r._onPlayerRemoved.getHandle(), r._logger = i.prefixLogger(r._logger, "ProxyPlayer"), r
                            }
                            return n(t, e), t.prototype.providePlayer = function(e, t) {
                                void 0 === t && (t = {
                                    syncPosition: !0,
                                    syncVolume: !0
                                }), this._providePlayer(e, t), this._onPlayerProvided.dispatch(e)
                            }, t.prototype.removePlayer = function() {
                                var e = this._getPlayer();
                                if (!e) throw new Error("There is no player to remove.");
                                this._removePlayer(), this._onPlayerRemoved.dispatch(e)
                            }, t.prototype.setInitialDuration = function(e) {
                                this._setInitialDuration(e)
                            }, t.prototype.getPlayer = function() {
                                return this._getPlayer()
                            }, t.prototype._handleFatalError = function(e) {
                                this._shouldPassThroughFatalErrors ? this._triggerError(e) : this._triggerError(new s.ProxyProvidedPlayerFatalError(e))
                            }, t
                        }(a.ProxyPlayerBase);
                    t.ProxyPlayer = u
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function e(e, t) {
                            if (this.start = e, this.duration = t, t < 0) throw new RangeError("Duration must be >= 0.");
                            this.end = e + t
                        }
                        return e.prototype.containsTime = function(e) {
                            return this.start <= e && this.end > e
                        }, e
                    }();
                    t.TimeRange = n
                }, function(e, t) {
                    function r() {
                        throw new Error("setTimeout has not been defined")
                    }

                    function n() {
                        throw new Error("clearTimeout has not been defined")
                    }

                    function o(e) {
                        if (c === setTimeout) return setTimeout(e, 0);
                        if ((c === r || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
                        try {
                            return c(e, 0)
                        } catch (t) {
                            try {
                                return c.call(null, e, 0)
                            } catch (t) {
                                return c.call(this, e, 0)
                            }
                        }
                    }

                    function i(e) {
                        if (d === clearTimeout) return clearTimeout(e);
                        if ((d === n || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
                        try {
                            return d(e)
                        } catch (t) {
                            try {
                                return d.call(null, e)
                            } catch (t) {
                                return d.call(this, e)
                            }
                        }
                    }

                    function a() {
                        _ && h && (_ = !1, h.length ? f = h.concat(f) : g = -1, f.length && s())
                    }

                    function s() {
                        if (!_) {
                            var e = o(a);
                            _ = !0;
                            for (var t = f.length; t;) {
                                for (h = f, f = []; ++g < t;) h && h[g].run();
                                g = -1, t = f.length
                            }
                            h = null, _ = !1, i(e)
                        }
                    }

                    function u(e, t) {
                        this.fun = e, this.array = t
                    }

                    function l() {}
                    var c, d, p = e.exports = {};
                    ! function() {
                        try {
                            c = "function" == typeof setTimeout ? setTimeout : r
                        } catch (e) {
                            c = r
                        }
                        try {
                            d = "function" == typeof clearTimeout ? clearTimeout : n
                        } catch (e) {
                            d = n
                        }
                    }();
                    var h, f = [],
                        _ = !1,
                        g = -1;
                    p.nextTick = function(e) {
                        var t = new Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                        f.push(new u(e, t)), 1 !== f.length || _ || o(s)
                    }, u.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = l, p.addListener = l, p.once = l, p.off = l, p.removeListener = l, p.removeAllListeners = l, p.emit = l, p.prependListener = l, p.prependOnceListener = l, p.listeners = function(e) {
                        return []
                    }, p.binding = function(e) {
                        throw new Error("process.binding is not supported")
                    }, p.cwd = function() {
                        return "/"
                    }, p.chdir = function(e) {
                        throw new Error("process.chdir is not supported")
                    }, p.umask = function() {
                        return 0
                    }
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(0),
                        i = function(e) {
                            function t() {
                                return null !== e && e.apply(this, arguments) || this
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "DEPENDENCY_ERROR"
                            }, t
                        }(o.PlayerFatalError);
                    t.DependencyError = i
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(0),
                        i = function(e) {
                            function t(t, r) {
                                return e.call(this, t || "The URL update failed for some reason.", r) || this
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "URL_UPDATE_ERROR"
                            }, t
                        }(o.PlayerFatalError);
                    t.URLUpdateError = i
                }, function(e, t, r) {
                    "use strict";

                    function n() {
                        return i ? new window.Map : new a
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(5),
                        i = "undefined" != typeof window && "map" in window;
                    t.buildCache = n;
                    var a = function() {
                        function e() {
                            this._store = []
                        }
                        return e.prototype.set = function(e, t) {
                            var r = o.find(this._store, function(t) {
                                return t.key === e
                            });
                            r ? r.val = t : this._store.push({
                                key: e,
                                val: t
                            })
                        }, e.prototype.get = function(e) {
                            var t = o.find(this._store, function(t) {
                                return t.key === e
                            });
                            if (t) return t.val
                        }, e
                    }()
                }, function(e, t, r) {
                    "use strict";

                    function n(e) {
                        return e.filter(function(e) {
                            return null != e
                        })
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.compact = n
                }, function(e, t, r) {
                    "use strict";

                    function n(e, r, n, o) {
                        void 0 === n && (n = window.setTimeout), void 0 === o && (o = window.clearTimeout);
                        var s = new i.AbortableJob(function() {
                            var i = a.buildDeferred(),
                                s = 0,
                                u = null,
                                l = null,
                                c = function() {
                                    u = e(s).run(), u.onCompletion(function(e) {
                                        if (u = null, e.success) i.resolve(e.result);
                                        else {
                                            var o = r(++s);
                                            null !== o && o < 0 ? i.reject(new Error("Delay must be null or >= 0.")) : null === o ? i.reject(t.noMoreAttemptsError) : l = n(function() {
                                                l = null, c()
                                            }, o)
                                        }
                                    }), u.onError(function(e) {
                                        u = null, i.reject(e)
                                    })
                                };
                            return c(), {
                                result: i.promise,
                                abort: function() {
                                    u && u.abort(), l && o(l)
                                }
                            }
                        });
                        return s.run()
                    }

                    function o(e) {
                        var t = void 0 === e ? {} : e,
                            r = t.timeBase,
                            n = void 0 === r ? 500 : r,
                            o = t.threshold,
                            i = void 0 === o ? 3 : o,
                            a = t.delayCap,
                            s = void 0 === a ? 45e3 : a,
                            u = t.jitter,
                            l = void 0 === u ? 200 : u,
                            c = t.maxAttempts,
                            d = void 0 === c ? null : c;
                        if (n <= 0) throw new Error("Time base must be > 0.");
                        if (i <= 0) throw new Error("Threshold must be > 0.");
                        if (0 === s) throw new Error("Delay cap must be null or > 0.");
                        if (null !== d && d < 1) throw new Error("Max attempts must be >= 1.");
                        return function(e) {
                            if (null !== d && e >= d) return null;
                            var t = e > 0 ? Math.pow(2, e / i - 1) : 0;
                            return Math.min(t * n, s || 1 / 0) + Math.round(Math.random() * l)
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = r(13),
                        a = r(1);
                    t.noMoreAttemptsError = new Error("No more attempts remaining."), t.retry = n, t.buildExponentialDelayCalculator = o
                }, function(e, t, r) {
                    "use strict";

                    function n(e) {
                        var t = a.exec(e);
                        return t ? t[1].toLowerCase() : null
                    }

                    function o(e, t) {
                        return i.buildAbsoluteURL(e, t, {
                            alwaysNormalize: !0
                        })
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = r(32),
                        a = /^.*\.([^\.;\?#]*).*$/;
                    t.getExtension = n, t.buildAbsoluteUrl = o
                }, function(e, t, r) {
                    "use strict";

                    function n(e) {
                        var t = Object.create(null);
                        return Object.keys(e).forEach(function(r) {
                            t[r] = e[r]
                        }), t
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(16),
                        i = function() {},
                        a = function() {
                            function e(e, t) {
                                void 0 === t && (t = {});
                                var r = this;
                                this._subscribers = [], this._onExit = new o.OnExit(function() {
                                    return r._after()
                                }), this._state = n(e), this._initialState = n(e), this._afterUpdate = t.afterUpdate || i, this._afterDispatches = t.afterDispatches || i
                            }
                            return e.prototype.subscribe = function(e, t) {
                                var r = this;
                                void 0 === t && (t = !0);
                                var o = function() {
                                    var o = {
                                        callback: e,
                                        localState: t ? n(r._state) : r._initialState
                                    };
                                    return r._subscribers.push(o), {
                                        remove: function() {
                                            var t = r._subscribers.map(function(e) {
                                                return e.callback
                                            }).indexOf(e);
                                            return t >= 0 && (r._subscribers.splice(t, 1), !0)
                                        },
                                        retrieve: function() {
                                            r._updateSubscriber(o)
                                        }
                                    }
                                };
                                return t ? o() : this._onExit.enter(o)
                            }, e.prototype.subscribeIndividual = function(e, t, r) {
                                return this.subscribe(function(r) {
                                    var n = r[e];
                                    void 0 !== n && t(n)
                                }, r)
                            }, e.prototype.getHandle = function() {
                                return {
                                    subscribe: this.subscribe.bind(this)
                                }
                            }, e.prototype.getIndividualHandle = function(e) {
                                var t = this;
                                return {
                                    subscribe: function(r) {
                                        return t.subscribeIndividual(e, r)
                                    }
                                }
                            }, e.prototype.update = function(e) {
                                var t = this;
                                return this._onExit.enter(function() {
                                    return e(t._state)
                                })
                            }, e.prototype.getState = function() {
                                return this._state
                            }, e.prototype._after = function() {
                                var e = this;
                                try {
                                    this._afterUpdate(this._state)
                                } finally {
                                    this._subscribers.forEach(function(t) {
                                        return e._updateSubscriber(t)
                                    }), this._afterDispatches(this._state)
                                }
                            }, e.prototype._updateSubscriber = function(e) {
                                var t = this._calculateDiff(e.localState);
                                if (Object.keys(t).length) {
                                    e.localState = n(this._state);
                                    try {
                                        e.callback(t, e.localState)
                                    } catch (e) {
                                        window.setTimeout(function() {
                                            throw e
                                        }, 0)
                                    }
                                }
                            }, e.prototype._calculateDiff = function(e) {
                                var t = this,
                                    r = Object.create(null);
                                return Object.keys(this._state).forEach(function(n) {
                                    var o = t._state[n];
                                    o !== e[n] && (r[n] = o)
                                }), r
                            }, e
                        }();
                    t.StateManager = a
                }, function(e, t, r) {
                    ! function(t) {
                        var r = /^((?:[^\/;?#]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
                            n = /^([^\/;?#]*)(.*)$/,
                            o = /(?:\/|^)\.(?=\/)/g,
                            i = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,
                            a = {
                                buildAbsoluteURL: function(e, t, r) {
                                    if (r = r || {}, e = e.trim(), t = t.trim(), !t) {
                                        if (!r.alwaysNormalize) return e;
                                        var o = this.parseURL(e);
                                        if (!s) throw new Error("Error trying to parse base URL.");
                                        return o.path = a.normalizePath(o.path), a.buildURLFromParts(o)
                                    }
                                    var i = this.parseURL(t);
                                    if (!i) throw new Error("Error trying to parse relative URL.");
                                    if (i.scheme) return r.alwaysNormalize ? (i.path = a.normalizePath(i.path), a.buildURLFromParts(i)) : t;
                                    var s = this.parseURL(e);
                                    if (!s) throw new Error("Error trying to parse base URL.");
                                    if (!s.netLoc && s.path && "/" !== s.path[0]) {
                                        var u = n.exec(s.path);
                                        s.netLoc = u[1], s.path = u[2]
                                    }
                                    s.netLoc && !s.path && (s.path = "/");
                                    var l = {
                                        scheme: s.scheme,
                                        netLoc: i.netLoc,
                                        path: null,
                                        params: i.params,
                                        query: i.query,
                                        fragment: i.fragment
                                    };
                                    if (!i.netLoc && (l.netLoc = s.netLoc, "/" !== i.path[0]))
                                        if (i.path) {
                                            var c = s.path,
                                                d = c.substring(0, c.lastIndexOf("/") + 1) + i.path;
                                            l.path = a.normalizePath(d)
                                        } else l.path = s.path, i.params || (l.params = s.params, i.query || (l.query = s.query));
                                    return null === l.path && (l.path = r.alwaysNormalize ? a.normalizePath(i.path) : i.path), a.buildURLFromParts(l)
                                },
                                parseURL: function(e) {
                                    var t = r.exec(e);
                                    return t ? {
                                        scheme: t[1] || "",
                                        netLoc: t[2] || "",
                                        path: t[3] || "",
                                        params: t[4] || "",
                                        query: t[5] || "",
                                        fragment: t[6] || ""
                                    } : null
                                },
                                normalizePath: function(e) {
                                    for (e = e.split("").reverse().join("").replace(o, ""); e.length !== (e = e.replace(i, "")).length;);
                                    return e.split("").reverse().join("")
                                },
                                buildURLFromParts: function(e) {
                                    return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
                                }
                            };
                        e.exports = a
                    }(this)
                }, function(e, t) {
                    var r;
                    r = function() {
                        return this
                    }();
                    try {
                        r = r || Function("return this")() || (0, eval)("this")
                    } catch (e) {
                        "object" == typeof window && (r = window)
                    }
                    e.exports = r
                }, function(e, t) {}, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.version = "7.0.5", t.buildNumber = 790;
                    var n = r(2),
                        o = r(21),
                        i = r(3),
                        a = r(22);
                    t.ProxyPlayer = a.ProxyPlayer;
                    var s = r(8);
                    t.ProxyPlayerBase = s.ProxyPlayerBase;
                    var u = r(19);
                    t.errors = u.errors;
                    var l = r(20);
                    t.helpers = l.helpers;
                    var c = r(7);
                    t.BasePlayer = c.BasePlayer;
                    var d = r(18);
                    t.Descriptor = d.Descriptor;
                    var p = r(9);
                    t.State = p.State;
                    var h = r(23);
                    t.TimeRange = h.TimeRange;
                    var f;
                    ! function(e) {
                        e.EventDispatcher = n.EventDispatcher
                    }(f = t.eventDispatcher || (t.eventDispatcher = {}));
                    var _;
                    ! function(e) {
                        e.LoaderRequest = o.LoaderRequest
                    }(_ = t.loader || (t.loader = {}));
                    var g;
                    ! function(e) {
                        e.noOpLogger = i.noOpLogger, e.consoleLogger = i.consoleLogger, e.prefixLogger = i.prefixLogger, e.cloneLogger = i.cloneLogger
                    }(g = t.logger || (t.logger = {}))
                }])
            })
        }, function(e, t, r) {
            ! function(t, n) {
                e.exports = n(r(2), r(4))
            }(this, function(e, t) {
                return function(e) {
                    function t(n) {
                        if (r[n]) return r[n].exports;
                        var o = r[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        };
                        return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                    }
                    var r = {};
                    return t.m = e, t.c = r, t.i = function(e) {
                        return e
                    }, t.d = function(e, r, n) {
                        t.o(e, r) || Object.defineProperty(e, r, {
                            configurable: !1,
                            enumerable: !0,
                            get: n
                        })
                    }, t.n = function(e) {
                        var r = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return t.d(r, "a", r), r
                    }, t.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, t.p = "", t(t.s = 36)
                }([function(t, r) {
                    t.exports = e
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function e() {}
                        return e.prototype.getCode = function() {
                            return "GENERIC"
                        }, e
                    }();
                    t.RetrievalError = n
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(0),
                        i = function(e) {
                            function t() {
                                return null !== e && e.apply(this, arguments) || this
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "HLS_MSE_PLAYER.MSE_ERROR"
                            }, t
                        }(o.errors.PlayerFatalError);
                    t.MSEError = i
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(1),
                        i = function(e) {
                            function t(t) {
                                var r = e.call(this) || this;
                                return r._statusCode = t, r
                            }
                            return n(t, e), t.prototype.getStatusCode = function() {
                                return this._statusCode
                            }, t.prototype.getCode = function() {
                                return "UNACCEPTABLE_RESPONSE_STATUS_CODE"
                            }, t
                        }(o.RetrievalError);
                    t.UnacceptableResponseStatusCodeError = i
                }, function(e, r) {
                    e.exports = t
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(2),
                        i = function(e) {
                            function t(t) {
                                return e.call(this, "An error occurred trying to append to the buffer.", t) || this
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "HLS_MSE_PLAYER.APPEND_ERROR"
                            }, t
                        }(o.MSEError);
                    t.AppendError = i
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(2),
                        i = function(e) {
                            function t(t) {
                                return e.call(this, "An error occurred trying to initialize the buffer.", t) || this
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "HLS_MSE_PLAYER.INITIALIZE_ERROR"
                            }, t
                        }(o.MSEError);
                    t.InitializeError = i
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(0),
                        i = function(e) {
                            function t() {
                                return e.call(this, "A format could not be determined.") || this
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "HLS_MSE_PLAYER.NO_FORMAT_DETERMINED_ERROR"
                            }, t
                        }(o.errors.NotSupportedError);
                    t.NoFormatDeterminedError = i
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(0),
                        i = function(e) {
                            function t() {
                                return e.call(this, "A transmuxer could not be found.") || this
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "HLS_MSE_PLAYER.NO_TRANSMUXER_ERROR"
                            }, t
                        }(o.errors.NotSupportedError);
                    t.NoTransmuxerError = i
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(0),
                        i = function(e) {
                            function t(t) {
                                var r = e.call(this, "An error occurred when trying to retrieve a segment.", t) || this;
                                return r._internalRetrievalError = t, r
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "HLS_MSE_PLAYER.RETRIEVAL_ERROR." + this._internalRetrievalError.getCode()
                            }, t
                        }(o.errors.PlayerError);
                    t.RetrievalError = i
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(0),
                        i = function(e) {
                            function t() {
                                return e.call(this, "The playlist type is not supported.") || this
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "HLS_MSE_PLAYER.UNSUPPORTED_PLAYLIST_TYPE_ERROR"
                            }, t
                        }(o.errors.PlayerFatalError);
                    t.UnsupportedPlaylistTypeError = i
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(1),
                        i = function(e) {
                            function t() {
                                return null !== e && e.apply(this, arguments) || this
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "NO_DECRYPTOR"
                            }, t
                        }(o.RetrievalError);
                    t.NoDecryptorError = i
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(1),
                        i = function(e) {
                            function t(t) {
                                var r = e.call(this) || this;
                                return r._details = t, r
                            }
                            return n(t, e), t.prototype.getDetails = function() {
                                return this._details
                            }, t.prototype.getCode = function() {
                                return "PLAYLIST_PARSE"
                            }, t
                        }(o.RetrievalError);
                    t.PlaylistParseError = i
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(1),
                        i = function(e) {
                            function t() {
                                return null !== e && e.apply(this, arguments) || this
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "UNSUPPORTED_ENCRYPTION_ERROR"
                            }, t
                        }(o.RetrievalError);
                    t.UnsupportedEncryptionError = i
                }, function(e, t, r) {
                    "use strict";

                    function n(e) {
                        var t = e.reduce(function(e, t) {
                                return e + t.length
                            }, 0),
                            r = new Uint8Array(t),
                            n = 0;
                        return e.forEach(function(e) {
                            r.set(e, n), n += e.length
                        }), r
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(0),
                        i = r(19),
                        a = r(20),
                        s = o.helpers.Promise,
                        u = {
                            rate: 44100,
                            id: 3
                        },
                        l = 16,
                        c = 2,
                        d = u.rate,
                        p = 2,
                        h = 8;
                    t.MP3ToMP4 = {
                        getInputFormat: function() {
                            return {
                                mimeType: "audio/mpeg",
                                audioCodec: {
                                    id: "mp3"
                                }
                            }
                        },
                        getOutputFormat: function() {
                            return {
                                mimeType: "audio/mp4",
                                audioCodec: {
                                    id: "mp3"
                                }
                            }
                        },
                        transmux: function(e) {
                            return new s(function(t, r) {
                                function o(e) {
                                    f || (f = !0, r(e))
                                }

                                function s(e) {
                                    f || t(e)
                                }
                                var f = !1;
                                try {
                                    var _ = [],
                                        g = new i.MP3Parser,
                                        y = new a.MP4Mux({
                                            audioTrackId: 0,
                                            videoTrackId: -1,
                                            tracks: [{
                                                codecId: p,
                                                channels: c,
                                                samplerate: u.rate,
                                                samplesize: l,
                                                timescale: d
                                            }]
                                        });
                                    if (y.ondata = function(e) {
                                            return _.push(e)
                                        }, g.onFrame = function(e) {
                                            try {
                                                var t = new Uint8Array(e.length + 1),
                                                    r = p << 4;
                                                r |= u.id << 2, r |= (16 === l ? 1 : 0) << 1, r |= 2 === c ? 1 : 0, t[0] = r, t.set(e, 1);
                                                var n = 0;
                                                y.pushPacket(h, t, n)
                                            } catch (e) {
                                                o(e)
                                            }
                                        }, g.push(e), g.close(), y.flush(), 0 === _.length) o(new Error("There was no output."));
                                    else {
                                        var v = _.shift();
                                        v ? s({
                                            initData: v,
                                            data: n(_)
                                        }) : o(new Error("No init data."))
                                    }
                                } catch (e) {
                                    o(e)
                                }
                            })
                        }
                    }
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n, o = r(5),
                        i = r(6),
                        a = r(2),
                        s = r(7),
                        u = r(8),
                        l = r(9),
                        c = r(10);
                    ! function(e) {
                        e.AppendError = o.AppendError, e.InitializeError = i.InitializeError, e.MSEError = a.MSEError, e.NoFormatDeterminedError = s.NoFormatDeterminedError, e.NoTransmuxerError = u.NoTransmuxerError, e.RetrievalError = l.RetrievalError, e.UnsupportedPlaylistTypeError = c.UnsupportedPlaylistTypeError
                    }(n = t.errors || (t.errors = {}))
                }, function(e, t, r) {
                    "use strict";

                    function n(e) {
                        return void 0 !== e.mimeType
                    }

                    function o(e, t) {
                        void 0 === t && (t = {});
                        var r = e.mimeType || t.mimeType,
                            n = e.audioCodec || t.audioCodec,
                            o = e.videoCodec || t.videoCodec,
                            i = P([n, o]),
                            a = i.length > 0 ? '; codecs="' + i.map(function(e) {
                                return e.id
                            }).join(",") + '"' : "";
                        return r + a
                    }
                    var i = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var a = r(0),
                        s = r(4),
                        u = r(35),
                        l = r(14),
                        c = r(28),
                        d = r(32),
                        p = r(30),
                        h = r(29),
                        f = r(10),
                        _ = r(5),
                        g = r(6),
                        y = r(9),
                        v = r(8),
                        m = r(7),
                        E = r(1),
                        b = a.helpers.find,
                        w = a.helpers.Promise,
                        P = a.helpers.compact,
                        S = a.helpers.time.now,
                        R = a.helpers.deferred.buildDeferred,
                        T = s.helpers.timeRanges.normalizeTimeRanges,
                        A = a.errors.DependencyError,
                        M = a.errors.PlayerFatalError,
                        k = a.errors.URLUpdateError,
                        x = a.eventDispatcher.EventDispatcher,
                        D = a.logger.prefixLogger,
                        O = a.helpers.abortableJob.abortedError,
                        C = a.helpers.browser.getSafariVersion(),
                        I = 3e4,
                        L = 1e8,
                        N = 400,
                        j = function(e) {
                            function t(t, r) {
                                var n = e.call(this, t, r) || this;
                                return n._onPlaylistRequestQueued = new x, n._onPlaylistRequestStart = new x, n._onPlaylistRetrieved = new x, n._onPlaylistRequestFailed = new x, n._onKeyRequestQueued = new x, n._onKeyRequestStart = new x, n._onKeyRetrieved = new x, n._onKeyRequestFailed = new x, n._onPlaylistParseStart = new x, n._onPlaylistParseEnd = new x, n._onSegmentRequestQueued = new x, n._onSegmentRequestStart = new x, n._onSegmentRetrieved = new x, n._onSegmentRequestFailed = new x, n._onSegmentTransmuxStart = new x, n._onSegmentTransmuxEnd = new x, n._onSegmentDecryptionStart = new x, n._onSegmentDecryptionEnd = new x, n._onSegmentReady = new x, n._onSegmentAppendQueued = new x, n._onSegmentAppendEnd = new x, n._playlist = null, n._playlistSegmentRetriever = null, n._initialPlaylistRetrieveCompleted = !1, n._mse = null, n._simpleMSE = null, n._retrieveDurationDeferred = R(), n._html5PlayerReady = !1, n._startPositionOffset = 0, n._transmuxerAndMSEType = null, n._lastSegmentAppended = null, n._maxBufferLength = null, n._cacheSize = null, n._onFirstSegmentRetrieved = null, n._seekAttemptTimer = null, n._seekMetadataEventHandle = null, n._playlistDuration = null, n._logger = D(n._logger, "HLSMSEPlayer"), n.onPlaylistRequestQueued = n._onPlaylistRequestQueued.getHandle(), n.onPlaylistRequestStart = n._onPlaylistRequestStart.getHandle(), n.onPlaylistRetrieved = n._onPlaylistRetrieved.getHandle(), n.onPlaylistRequestFailed = n._onPlaylistRequestFailed.getHandle(), n.onKeyRequestQueued = n._onKeyRequestQueued.getHandle(), n.onKeyRequestStart = n._onKeyRequestStart.getHandle(), n.onKeyRetrieved = n._onKeyRetrieved.getHandle(), n.onKeyRequestFailed = n._onKeyRequestFailed.getHandle(), n.onPlaylistParseStart = n._onPlaylistParseStart.getHandle(), n.onPlaylistParseEnd = n._onPlaylistParseEnd.getHandle(), n.onSegmentRequestQueued = n._onSegmentRequestQueued.getHandle(), n.onSegmentRequestStart = n._onSegmentRequestStart.getHandle(), n.onSegmentRetrieved = n._onSegmentRetrieved.getHandle(), n.onSegmentRequestFailed = n._onSegmentRequestFailed.getHandle(), n.onSegmentTransmuxStart = n._onSegmentTransmuxStart.getHandle(), n.onSegmentTransmuxEnd = n._onSegmentTransmuxEnd.getHandle(), n.onSegmentDecryptionStart = n._onSegmentDecryptionStart.getHandle(), n.onSegmentDecryptionEnd = n._onSegmentDecryptionEnd.getHandle(), n.onSegmentReady = n._onSegmentReady.getHandle(), n.onSegmentAppendQueued = n._onSegmentAppendQueued.getHandle(), n.onSegmentAppendEnd = n._onSegmentAppendEnd.getHandle(), n.__descriptor = t, n.__playerDependencies = r, n._url = t.getUrl(), n
                            }
                            return i(t, e), t.prototype.getBufferedTimeRanges = function() {
                                var e = this._playlistSegmentRetriever;
                                return e ? T(e.getSegmentsWithData().map(function(e) {
                                    return e.segment.getTimeRange()
                                })) : []
                            }, t.prototype.getMaxBufferLength = function() {
                                return this._maxBufferLength
                            }, t.prototype.getBufferController = function() {
                                var e = this;
                                return {
                                    setMaxBufferLength: function(t) {
                                        if (t < 0) throw new Error("Max buffer length cannot be < 0.");
                                        e._logger.debug("Updating max buffer length.", t), e._maxBufferLength = t, e._playlistSegmentRetriever ? e._playlistSegmentRetriever.updateMaxBufferLength(t) : e._logger.debug("Cannot update right now. Playlist segment retriever doesn't exist.")
                                    }
                                }
                            }, t.prototype.getUrlController = function() {
                                var e = this;
                                return {
                                    updateUrl: function(t) {
                                        e._logger.debug("Updating URL.", t), e._url = t;
                                        var r = e._playlist;
                                        return r ? (e._playlistRetrieveJob && (e._playlistRetrieveJob.abort(), e._playlistRetrieveJob = null, e._logger.debug("Aborted playlist retrieve job.")), e._playlistSegmentRetriever && (e._playlistSegmentRetriever.switchPlaylist(null), e._logger.debug("Removed current URL.")), e._playlist = null, void e._retrievePlaylist()) : void e._logger.debug("Cannot update right now. Playlist doesn't exist yet.")
                                    }
                                }
                            }, t.prototype.getMemoryCacheMaxSize = function() {
                                return null !== this._cacheSize ? this._cacheSize : L
                            }, t.prototype.getMemoryCacheUsage = function() {
                                return this._playlistSegmentRetriever ? this._playlistSegmentRetriever.getCacheUsage() : 0
                            }, t.prototype.getMemoryCacheController = function() {
                                var e = this;
                                return {
                                    setMaxCacheSize: function(t) {
                                        if (t < 0) throw new Error("Max size cannot be < 0.");
                                        e._logger.debug("Updating maximum cache size.", t), e._cacheSize = t, e._playlistSegmentRetriever && e._playlistSegmentRetriever.updateCacheSize(t)
                                    }
                                }
                            }, t.prototype._canPlay = function() {
                                var t = this;
                                return c.MSE.isSupported() ? e.prototype._canPlay.call(this).then(function(e) {
                                    if (e !== !0) return w.resolve(e);
                                    var r = t.__playerDependencies.expectedSegmentFormat;
                                    if (!r || !n(r)) return t._logger.debug("Format could not be determined."), w.resolve(new m.NoFormatDeterminedError);
                                    var i = t._findTransmuxer(r);
                                    if (!i) return t._logger.debug("No transmuxer found."), w.resolve(new v.NoTransmuxerError);
                                    var a = i.getOutputFormat(),
                                        s = r;
                                    return t._transmuxerAndMSEType = {
                                        transmuxer: i,
                                        mseType: o(a, s)
                                    }, w.resolve(!0)
                                }) : (this._logger.debug("MSE not supported."), w.resolve(!1))
                            }, t.prototype._canPlayProtocol = function(e) {
                                return "hls" === e.name
                            }, t.prototype._canPlayType = function(e) {
                                return "application/x-mpegURL" === e
                            }, t.prototype._retrieveDuration = function() {
                                return this._retrieveDurationDeferred.promise
                            }, t.prototype._signalReady = function() {
                                this._html5PlayerReady = !0, this._initialPlaylistRetrieveCompleted && e.prototype._signalReady.call(this)
                            }, t.prototype._initialize = function() {
                                var t = this.__playerDependencies;
                                if (null === this._maxBufferLength)
                                    if (void 0 !== t.maxBufferLength) {
                                        if (t.maxBufferLength < 0) return void this._triggerError(new A("maxBufferLength cannot be < 0."));
                                        this._maxBufferLength = t.maxBufferLength
                                    } else this._maxBufferLength = I;
                                if (this._logger.debug("Initialized max buffer length.", this._maxBufferLength), null === this._cacheSize)
                                    if (void 0 !== t.memoryCacheSize) {
                                        if (t.memoryCacheSize < 0) return void this._triggerError(new A("memoryCacheSize cannot be < 0."));
                                        this._cacheSize = t.memoryCacheSize
                                    } else this._cacheSize = L;
                                this._logger.debug("Initialized cache size.", this._cacheSize), e.prototype._initialize.call(this), this._retrievePlaylist()
                            }, t.prototype._initMediaElement = function(t, r) {
                                if (this._simpleMSE && (this._simpleMSE.kill(), this._simpleMSE = null, this._logger.debug("Killed SimpleMSE.")), this._mse && (this._mse.kill(), this._mse = null, this._logger.debug("Killed MSE.")), null !== this._seekAttemptTimer && (window.clearTimeout(this._seekAttemptTimer), this._seekAttemptTimer = null, this._logger.debug("Cancelled seek attempt timer.")), null === r) e.prototype._initMediaElement.call(this, t, null);
                                else {
                                    this._initMSE();
                                    var n = this._mse.getUrl();
                                    this._logger.debug("Setting MSE url.", n), e.prototype._initMediaElement.call(this, t, n)
                                }
                            }, t.prototype._handleEndedEvent = function() {}, t.prototype._shouldBeEnded = function() {
                                if (e.prototype._shouldBeEnded.call(this)) return !0;
                                if (!this.getMediaElement()) return !1;
                                var t = this._duration;
                                return this._stallDetected && null !== t && this._getTruePosition() >= t - N
                            }, t.prototype._getTruePosition = function() {
                                var e = this.getMediaElement();
                                if (!e) throw new Error("Media element should exist.");
                                return this._startPositionOffset + this._getMediaElementPosition()
                            }, t.prototype._handleSeekChange = function(t) {
                                this._playlistSegmentRetriever && (this._logger.debug("Explicitly updating playlist segment retriever, as seek requested."), this._playlistSegmentRetriever.update()), e.prototype._handleSeekChange.call(this, t)
                            }, t.prototype._performSeek = function(t, r) {
                                var n = this,
                                    o = this,
                                    i = o._simpleMSE,
                                    a = o._mse,
                                    s = this.getMediaElement();
                                if (!i) throw new Error("SimpleMSE should exist.");
                                if (!a) throw new Error("MSE should exist.");
                                if (!s) throw new Error("Media element should exist.");
                                null !== this._seekAttemptTimer && (window.clearTimeout(this._seekAttemptTimer), this._seekAttemptTimer = null, this._logger.debug("Cancelled previous seek attempt timer.")), this._seekMetadataEventHandle && (this._seekMetadataEventHandle.remove(), this._seekMetadataEventHandle = null, this._logger.debug("Removed previous loaded metadata event handler.")), i.kill(), a.kill(), this._logger.debug("SimpleMSE and MSE destroyed."), this._startPositionOffset = t;
                                var u = null;
                                this._onFirstSegmentRetrieved = function(e) {
                                    return u = e
                                }, this._logger.debug("Initializing MSE and SimpleMSE for new position."), this._initMSE();
                                var l = this._mse.getUrl();
                                if (this._logger.debug("Updated media element MSE src.", l), e.prototype._initMediaElement.call(this, s, l), this.isPlaying()) {
                                    this._logger.debug("Calling play() on media element as it was playing previously.");
                                    var c = s.play();
                                    c && c.catch && c.catch(function(e) {
                                        "AbortError" !== e.name && (n._logger.error("Unexpected play() error.", e), n._triggerError(new M("Exception from calling play() after seek.", e)))
                                    })
                                }
                                var d = function(e) {
                                    var t = function() {
                                        n._startPositionOffset = Math.max(0, n._startPositionOffset - e), n._logger.debug("Updated start position offset.", n._startPositionOffset);
                                        var t = function() {
                                            n._seekAttemptTimer = null, n._logger.debug("Attempting to seek to the required offset.", e), s.currentTime = e / 1e3;
                                            var o = 1e3 * s.currentTime;
                                            Math.abs(o - e) <= 100 ? (n._logger.debug("Seeked to the required offset.", o), r()) : (n._logger.warn("Seek attempt failed. Trying again shortly.", o), n._seekAttemptTimer = window.setTimeout(t, 50))
                                        };
                                        t()
                                    };
                                    n._onFirstSegmentRetrieved = null, s.readyState === s.HAVE_METADATA ? (n._logger.debug("Media element has metadata. Seeking to offset."), t()) : (n._logger.debug("Media element has not loaded metadata. Waiting for metadata..."), n._seekMetadataEventHandle = n._listenToOnce("loadedmetadata", function() {
                                        n._seekMetadataEventHandle = null, n._logger.debug("Got metadata. Seeking to offset."), t()
                                    }, {
                                        earlyAttach: !0
                                    }))
                                };
                                null !== u ? (this._logger.debug("First segment already retrieved. Preparing to seek to initial offset."), d(u)) : (this._logger.debug("Waiting for first segment to be retrieved."), this._onFirstSegmentRetrieved = function(e) {
                                    n._logger.debug("First segment retrieved. Preparing to seek to initial offset."), d(e)
                                })
                            }, t.prototype._kill = function() {
                                this._simpleMSE && (this._logger.debug("Killing SimpleMSE."), this._simpleMSE.kill()), this._mse && (this._logger.debug("Killing MSE."), this._mse.kill()), this._playlistRetrieveJob && (this._logger.debug("Aborting playlist retrieve job."), this._playlistRetrieveJob.abort()), this._playlistSegmentRetriever && (this._logger.debug("Killing playlist segment retriever."), this._playlistSegmentRetriever.kill()), e.prototype._kill.call(this)
                            }, t.prototype._initMSE = function() {
                                var e = this;
                                if (!this._transmuxerAndMSEType) throw new Error("Transmuxer should have been configured.");
                                this._lastSegmentAppended = null;
                                var t = !1;
                                C && C.major < 10 && this._transmuxerAndMSEType.transmuxer === l.MP3ToMP4 && (t = !0);
                                var r = new c.MSE(this._transmuxerAndMSEType.mseType, this._logger, t),
                                    n = new d.SimpleMSE(r, function() {
                                        return e.getSegmentDataToAppendNext()
                                    }, function() {
                                        return e._getMediaElementPosition()
                                    }, function(t) {
                                        e._triggerError(new _.AppendError(t))
                                    }, this._logger);
                                n.onAppendQueued.subscribe(this._onSegmentAppendQueued.dispatch), n.onAppendEnd.subscribe(this._onSegmentAppendEnd.dispatch), this._simpleMSE = n, n.start(), this._mse = r, r.whenInitialized().catch(function(t) {
                                    t !== c.killedError && (e._logger.error("Error during mse initialization.", t), e._triggerError(new g.InitializeError(t)))
                                })
                            }, t.prototype._getMediaElementPosition = function() {
                                var e = this.getMediaElement();
                                if (!e) throw new Error("No media element.");
                                return 1e3 * e.currentTime
                            }, t.prototype._whenPlaylistRetrieved = function() {
                                var t = this,
                                    r = this._playlist;
                                if (!r) throw new Error("Playlist should have been retrieved.");
                                var n = !this._initialPlaylistRetrieveCompleted;
                                if (n) this._initialPlaylistRetrieveCompleted = !0, this._playlistDuration = r.getTotalDuration(), this._retrieveDurationDeferred.resolve(this._playlistDuration);
                                else {
                                    var o = r.getTotalDuration();
                                    if (this._playlistDuration !== o) return this._logger.error("The duration from the new URL did not match the previous one."), void this._triggerError(new k("The duration from the new URL did not match the previous one.", {
                                        oldDuration: this._playlistDuration,
                                        newDuration: o
                                    }))
                                }
                                if (!this._transmuxerAndMSEType) throw new Error("Transmuxer should have been configured.");
                                if (this._playlistSegmentRetriever) this._logger.debug("Switching playlist for playlist segment retriever."), this._playlistSegmentRetriever.switchPlaylist(r);
                                else {
                                    var i = this._maxBufferLength;
                                    if (null === i) throw new Error("maxBufferLength should have been initiaized by now.");
                                    this._logger.debug("Creating playlist segment retriever.");
                                    var a = this._cacheSize;
                                    if (null === a) throw new Error("cacheSize should be set.");
                                    var s = new h.PlaylistSegmentRetriever({
                                        playlist: r,
                                        getPosition: function() {
                                            return t.getPosition()
                                        },
                                        maxBufferLength: i,
                                        cacheSize: a,
                                        transmuxer: this._transmuxerAndMSEType.transmuxer,
                                        logger: this._logger
                                    });
                                    s.onSegmentRequestQueued.subscribe(this._onSegmentRequestQueued.dispatch), s.onSegmentRequestStart.subscribe(this._onSegmentRequestStart.dispatch), s.onSegmentRetrieved.subscribe(this._onSegmentRetrieved.dispatch), s.onSegmentRequestFailed.subscribe(this._onSegmentRequestFailed.dispatch), s.onSegmentDecryptionStart.subscribe(this._onSegmentDecryptionStart.dispatch), s.onSegmentDecryptionEnd.subscribe(this._onSegmentDecryptionEnd.dispatch), s.onSegmentTransmuxStart.subscribe(this._onSegmentTransmuxStart.dispatch), s.onSegmentTransmuxEnd.subscribe(this._onSegmentTransmuxEnd.dispatch), this._playlistSegmentRetriever = s, s.onError.subscribe(function(e) {
                                        t._logger.error("Error from playlist segment retriever.", e), e instanceof E.RetrievalError ? t._triggerError(new y.RetrievalError(e)) : t._triggerError(new M("Unexpected error when trying to retrieve segment.", e))
                                    }), s.onSegmentReady.subscribe(function(e) {
                                        var r = e.eventRepresentation,
                                            n = S();
                                        t._logger.debug("Segment ready.", r),
                                            function() {
                                                var e = t._simpleMSE;
                                                if (e && e.waitingForSegmentData()) {
                                                    var n = t.getSegmentDataToAppendNext();
                                                    n && (t._logger.debug("Providing segment to SimpleMSE.", r), e.provideNextSegmentData(n))
                                                }
                                            }(), t._onSegmentReady.dispatch({
                                            segment: r
                                        }, {
                                            time: n
                                        })
                                    })
                                }
                                this._initialPlaylistRetrieveCompleted = !0, n && this._html5PlayerReady && e.prototype._signalReady.call(this)
                            }, t.prototype._retrievePlaylist = function() {
                                var e = this;
                                if (this._playlist) throw new Error("Playlist already exists.");
                                var t = this.__playerDependencies,
                                    r = t.playlistLoader,
                                    n = t.segmentLoader,
                                    o = t.keyLoader,
                                    i = t.expectedSegmentFormat,
                                    a = t.isPlaylistResponseCodeAcceptable,
                                    s = t.isPlaylistResponseCodeRetryable,
                                    u = t.isSegmentResponseCodeAcceptable,
                                    l = t.isSegmentResponseCodeRetryable,
                                    c = t.isKeyResponseCodeAcceptable,
                                    d = t.isKeyResponseCodeRetryable;
                                this._logger.debug("Creating playlist.", this._url);
                                var h = new p.Playlist({
                                    url: this._url,
                                    segmentFormat: i,
                                    playlistLoader: r,
                                    segmentLoader: n,
                                    keyLoader: o,
                                    isPlaylistResponseCodeAcceptable: a,
                                    isPlaylistResponseCodeRetryable: s,
                                    isSegmentResponseCodeAcceptable: u,
                                    isSegmentResponseCodeRetryable: l,
                                    isKeyResponseCodeAcceptable: c,
                                    isKeyResponseCodeRetryable: d,
                                    logger: this._logger
                                });
                                h.onPlaylistRequestQueued.subscribe(this._onPlaylistRequestQueued.dispatch), h.onPlaylistRequestStart.subscribe(this._onPlaylistRequestStart.dispatch), h.onPlaylistRetrieved.subscribe(this._onPlaylistRetrieved.dispatch), h.onPlaylistRequestFailed.subscribe(this._onPlaylistRequestFailed.dispatch), h.onKeyRequestQueued.subscribe(this._onKeyRequestQueued.dispatch), h.onKeyRequestStart.subscribe(this._onKeyRequestStart.dispatch), h.onKeyRetrieved.subscribe(this._onKeyRetrieved.dispatch), h.onKeyRequestFailed.subscribe(this._onKeyRequestFailed.dispatch), h.onPlaylistParseStart.subscribe(this._onPlaylistParseStart.dispatch), h.onPlaylistParseEnd.subscribe(this._onPlaylistParseEnd.dispatch), this._playlist = h, this._playlistRetrieveJob = this._playlist.retrieve(), this._playlistRetrieveJob.onCompletion(function() {
                                    var t = e._playlist.getType();
                                    t !== p.PlaylistType.VOD ? (e._logger.error("Unsupported playlist type.", t), e._triggerError(new f.UnsupportedPlaylistTypeError)) : (e._logger.debug("Playlist retrieved."), e._whenPlaylistRetrieved())
                                }), this._playlistRetrieveJob.onError(function(t) {
                                    t !== O && (e._logger.error("Error when retrieving playlist.", t), t instanceof E.RetrievalError ? e._triggerError(new y.RetrievalError(t)) : e._triggerError(new M("Unexpected error when retrieving playlist.", t)))
                                })
                            }, t.prototype._findTransmuxer = function(e) {
                                var t = u.TransmuxerFactory.retrieveTransmuxers(e);
                                this._logger.info("Finding a transmuxer...");
                                var r = b(t, function(t) {
                                    return c.MSE.isSupported(o(t.getOutputFormat(), e))
                                }) || null;
                                return r ? this._logger.info("Transmuxer found.") : this._logger.warn("No transmuxer found."), r
                            }, t.prototype.getSegmentDataToAppendNext = function() {
                                this._logger.debug("Looking for segment to append next.");
                                var e = this._playlistSegmentRetriever;
                                if (!e) return this._logger.debug("No segment retriever."), null;
                                var t = this._lastSegmentAppended;
                                if (t) {
                                    var r = e.getSegmentsWithData(),
                                        n = r[r.map(function(e) {
                                            return e.segment
                                        }).indexOf(t) + 1];
                                    return n ? (this._logger.debug("Found segment.", n.eventRepresentation), this._lastSegmentAppended = n.segment, {
                                        data: n.data,
                                        eventRepresentation: n.eventRepresentation
                                    }) : (this._logger.debug("No segment found."), null)
                                }
                                var o = this.getPosition(),
                                    n = b(e.getSegmentsWithData(), function(e) {
                                        return e.segment.getTimeRange().containsTime(o)
                                    });
                                if (!n) return this._logger.debug("No segment found."), null;
                                var i = o - n.segment.getTimeRange().start,
                                    a = this.getMediaElement();
                                if (!a) throw new Error("Media element should exist.");
                                this._logger.debug("Found initial segment.", n.eventRepresentation), this._lastSegmentAppended = n.segment, this._onFirstSegmentRetrieved && this._onFirstSegmentRetrieved(i);
                                var s = n.data,
                                    u = n.initData,
                                    l = s;
                                return u && (this._logger.debug("Prepending init data."), l = new Uint8Array(u.length + s.length), l.set(u, 0), l.set(s, u.length)), {
                                    data: l,
                                    eventRepresentation: n.eventRepresentation
                                }
                            }, t
                        }(s.HTML5Player);
                    t.HLSMSEPlayer = j
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n, o = r(11),
                        i = r(12),
                        a = r(1),
                        s = r(3),
                        u = r(13);
                    ! function(e) {
                        e.NoDecryptorError = o.NoDecryptorError, e.PlaylistParseError = i.PlaylistParseError, e.RetrievalError = a.RetrievalError, e.UnacceptableResponseStatusCodeError = s.UnacceptableResponseStatusCodeError, e.UnsupportedEncryptionError = u.UnsupportedEncryptionError
                    }(n = t.retrievalErrors || (t.retrievalErrors = {}))
                }, function(e, t, r) {
                    "use strict";

                    function n(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    t.__esModule = !0;
                    var o = function() {
                        function e(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                            }
                        }
                        return function(t, r, n) {
                            return r && e(t.prototype, r), n && e(t, n), t
                        }
                    }();
                    t.AESDecryptor = function() {
                        function e() {
                            n(this, e), this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [], this.subMix[0] = new Uint32Array(256), this.subMix[1] = new Uint32Array(256), this.subMix[2] = new Uint32Array(256), this.subMix[3] = new Uint32Array(256), this.invSubMix = [], this.invSubMix[0] = new Uint32Array(256), this.invSubMix[1] = new Uint32Array(256), this.invSubMix[2] = new Uint32Array(256), this.invSubMix[3] = new Uint32Array(256), this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.initTable()
                        }
                        return o(e, [{
                            key: "uint8ArrayToUint32Array_",
                            value: function(e) {
                                for (var t = new DataView(e), r = new Uint32Array(4), n = 0; n < r.length; n++) r[n] = t.getUint32(4 * n);
                                return r
                            }
                        }, {
                            key: "initTable",
                            value: function() {
                                var e = this.sBox,
                                    t = this.invSBox,
                                    r = this.subMix[0],
                                    n = this.subMix[1],
                                    o = this.subMix[2],
                                    i = this.subMix[3],
                                    a = this.invSubMix[0],
                                    s = this.invSubMix[1],
                                    u = this.invSubMix[2],
                                    l = this.invSubMix[3],
                                    c = new Uint32Array(256),
                                    d = 0,
                                    p = 0,
                                    h = 0;
                                for (h = 0; h < 256; h++) h < 128 ? c[h] = h << 1 : c[h] = h << 1 ^ 283;
                                for (h = 0; h < 256; h++) {
                                    var f = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
                                    f = f >>> 8 ^ 255 & f ^ 99, e[d] = f, t[f] = d;
                                    var _ = c[d],
                                        g = c[_],
                                        y = c[g],
                                        v = 257 * c[f] ^ 16843008 * f;
                                    r[d] = v << 24 | v >>> 8, n[d] = v << 16 | v >>> 16, o[d] = v << 8 | v >>> 24, i[d] = v, v = 16843009 * y ^ 65537 * g ^ 257 * _ ^ 16843008 * d, a[f] = v << 24 | v >>> 8, s[f] = v << 16 | v >>> 16, u[f] = v << 8 | v >>> 24, l[f] = v, d ? (d = _ ^ c[c[c[y ^ _]]], p ^= c[c[p]]) : d = p = 1
                                }
                            }
                        }, {
                            key: "expandKey",
                            value: function(e) {
                                for (var t = this.uint8ArrayToUint32Array_(e), r = !0, n = 0; n < t.length && r;) r = t[n] === this.key[n], n++;
                                if (!r) {
                                    this.key = t;
                                    var o = this.keySize = t.length;
                                    if (4 !== o && 6 !== o && 8 !== o) throw new Error("Invalid aes key size=" + o);
                                    var i = this.ksRows = 4 * (o + 6 + 1),
                                        a = void 0,
                                        s = void 0,
                                        u = this.keySchedule = new Uint32Array(this.ksRows),
                                        l = this.invKeySchedule = new Uint32Array(this.ksRows),
                                        c = this.sBox,
                                        d = this.rcon,
                                        p = this.invSubMix[0],
                                        h = this.invSubMix[1],
                                        f = this.invSubMix[2],
                                        _ = this.invSubMix[3],
                                        g = void 0,
                                        y = void 0;
                                    for (a = 0; a < i; a++) a < o ? g = u[a] = t[a] : (y = g, a % o === 0 ? (y = y << 8 | y >>> 24, y = c[y >>> 24] << 24 | c[y >>> 16 & 255] << 16 | c[y >>> 8 & 255] << 8 | c[255 & y], y ^= d[a / o | 0] << 24) : o > 6 && a % o === 4 && (y = c[y >>> 24] << 24 | c[y >>> 16 & 255] << 16 | c[y >>> 8 & 255] << 8 | c[255 & y]), u[a] = g = (u[a - o] ^ y) >>> 0);
                                    for (s = 0; s < i; s++) a = i - s, y = 3 & s ? u[a] : u[a - 4], s < 4 || a <= 4 ? l[s] = y : l[s] = p[c[y >>> 24]] ^ h[c[y >>> 16 & 255]] ^ f[c[y >>> 8 & 255]] ^ _[c[255 & y]], l[s] = l[s] >>> 0
                                }
                            }
                        }, {
                            key: "networkToHostOrderSwap",
                            value: function(e) {
                                return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
                            }
                        }, {
                            key: "decrypt",
                            value: function(e, t, r) {
                                for (var n, o, i = this.keySize + 6, a = this.invKeySchedule, s = this.invSBox, u = this.invSubMix[0], l = this.invSubMix[1], c = this.invSubMix[2], d = this.invSubMix[3], p = this.uint8ArrayToUint32Array_(r), h = p[0], f = p[1], _ = p[2], g = p[3], y = new Int32Array(e), v = new Int32Array(y.length), m = void 0, E = void 0, b = void 0, w = void 0, P = void 0, S = void 0, R = void 0, T = void 0, A = void 0, M = void 0, k = void 0, x = void 0; t < y.length;) {
                                    for (A = this.networkToHostOrderSwap(y[t]), M = this.networkToHostOrderSwap(y[t + 1]), k = this.networkToHostOrderSwap(y[t + 2]), x = this.networkToHostOrderSwap(y[t + 3]), P = A ^ a[0], S = x ^ a[1], R = k ^ a[2], T = M ^ a[3], n = 4, o = 1; o < i; o++) m = u[P >>> 24] ^ l[S >> 16 & 255] ^ c[R >> 8 & 255] ^ d[255 & T] ^ a[n], E = u[S >>> 24] ^ l[R >> 16 & 255] ^ c[T >> 8 & 255] ^ d[255 & P] ^ a[n + 1], b = u[R >>> 24] ^ l[T >> 16 & 255] ^ c[P >> 8 & 255] ^ d[255 & S] ^ a[n + 2], w = u[T >>> 24] ^ l[P >> 16 & 255] ^ c[S >> 8 & 255] ^ d[255 & R] ^ a[n + 3], P = m, S = E, R = b, T = w, n += 4;
                                    m = s[P >>> 24] << 24 ^ s[S >> 16 & 255] << 16 ^ s[R >> 8 & 255] << 8 ^ s[255 & T] ^ a[n], E = s[S >>> 24] << 24 ^ s[R >> 16 & 255] << 16 ^ s[T >> 8 & 255] << 8 ^ s[255 & P] ^ a[n + 1], b = s[R >>> 24] << 24 ^ s[T >> 16 & 255] << 16 ^ s[P >> 8 & 255] << 8 ^ s[255 & S] ^ a[n + 2], w = s[T >>> 24] << 24 ^ s[P >> 16 & 255] << 16 ^ s[S >> 8 & 255] << 8 ^ s[255 & R] ^ a[n + 3], n += 3, v[t] = this.networkToHostOrderSwap(m ^ h), v[t + 1] = this.networkToHostOrderSwap(w ^ f), v[t + 2] = this.networkToHostOrderSwap(b ^ _), v[t + 3] = this.networkToHostOrderSwap(E ^ g), h = A, f = M, _ = k, g = x, t += 4
                                }
                                return v.buffer
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.key = void 0, this.keySize = void 0, this.ksRows = void 0, this.sBox = void 0, this.invSBox = void 0, this.subMix = void 0, this.invSubMix = void 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.rcon = void 0
                            }
                        }]), e
                    }()
                }, function(e, t, r) {
                    "use strict";

                    function n() {
                        this.buffer = null, this.bufferSize = 0
                    }
                    t.__esModule = !0, t.MP3Parser = n;
                    var o = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
                        i = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3];
                    n.prototype.push = function(e) {
                        var t;
                        if (this.bufferSize > 0) {
                            var r = e.length + this.bufferSize;
                            if (!this.buffer || this.buffer.length < r) {
                                var n = new Uint8Array(r);
                                this.bufferSize > 0 && n.set(this.buffer.subarray(0, this.bufferSize)), this.buffer = n
                            }
                            this.buffer.set(e, this.bufferSize), this.bufferSize = r, e = this.buffer, t = r
                        } else t = e.length;
                        for (var o, i = 0; i < t && (o = this._parse(e, i, t)) > 0;) i += o;
                        var a = t - i;
                        a > 0 && (!this.buffer || this.buffer.length < a ? this.buffer = new Uint8Array(e.subarray(i, t)) : this.buffer.set(e.subarray(i, t))), this.bufferSize = a
                    }, n.prototype._parse = function(e, t, r) {
                        if (t + 2 > r) return -1;
                        if (255 === e[t] || 224 === (224 & e[t + 1])) {
                            if (t + 24 > r) return -1;
                            var n = e[t + 1] >> 3 & 3,
                                a = e[t + 1] >> 1 & 3,
                                s = e[t + 2] >> 4 & 15,
                                u = e[t + 2] >> 2 & 3,
                                l = !!(2 & e[t + 2]);
                            if (1 !== n && 0 !== s && 15 !== s && 3 !== u) {
                                var c = 3 === n ? 3 - a : 3 === a ? 3 : 4,
                                    d = 1e3 * o[14 * c + s - 1],
                                    p = 3 === n ? 0 : 2 === n ? 1 : 2,
                                    h = i[3 * p + u],
                                    f = l ? 1 : 0,
                                    _ = 3 === a ? (3 === n ? 12 : 6) * d / h + f << 2 : (3 === n ? 144 : 72) * d / h + f | 0;
                                return t + _ > r ? -1 : (this.onFrame && this.onFrame(e.subarray(t, t + _)), _)
                            }
                        }
                        for (var g = t + 2; g < r;) {
                            if (255 === e[g - 1] && 224 === (224 & e[g])) return this.onNoise && this.onNoise(e.subarray(t, g - 1)), g - t - 1;
                            g++
                        }
                        return -1
                    }, n.prototype.close = function() {
                        this.bufferSize > 0 && this.onNoise && this.onNoise(this.buffer.subarray(0, this.bufferSize)), this.buffer = null, this.bufferSize = 0, this.onClose && this.onClose()
                    }
                }, function(e, t, r) {
                    "use strict";
                    t.__esModule = !0;
                    var n, o, i = function(e, t) {
                        function r() {
                            this.constructor = e
                        }
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                    };
                    ! function(e) {
                        var t;
                        ! function(e) {
                            function t(e) {
                                for (var t = new Uint8Array(4 * e.length), r = 0, n = 0, o = e.length; n < o; n++) {
                                    var i = e.charCodeAt(n);
                                    if (i <= 127) t[r++] = i;
                                    else {
                                        if (55296 <= i && i <= 56319) {
                                            var a = e.charCodeAt(n + 1);
                                            56320 <= a && a <= 57343 && (i = ((1023 & i) << 10) + (1023 & a) + 65536, ++n)
                                        }
                                        0 !== (4292870144 & i) ? (t[r++] = 248 | i >>> 24 & 3, t[r++] = 128 | i >>> 18 & 63, t[r++] = 128 | i >>> 12 & 63, t[r++] = 128 | i >>> 6 & 63, t[r++] = 128 | 63 & i) : 0 !== (4294901760 & i) ? (t[r++] = 240 | i >>> 18 & 7, t[r++] = 128 | i >>> 12 & 63, t[r++] = 128 | i >>> 6 & 63, t[r++] = 128 | 63 & i) : 0 !== (4294965248 & i) ? (t[r++] = 224 | i >>> 12 & 15, t[r++] = 128 | i >>> 6 & 63, t[r++] = 128 | 63 & i) : (t[r++] = 192 | i >>> 6 & 31, t[r++] = 128 | 63 & i)
                                    }
                                }
                                return t.subarray(0, r)
                            }

                            function r(e) {
                                for (var t = 0, r = ""; t < e.length;) {
                                    var n = 255 & e[t++];
                                    if (n <= 127) r += String.fromCharCode(n);
                                    else {
                                        var o = 192,
                                            i = 5;
                                        do {
                                            var a = o >> 1 | 128;
                                            if ((n & a) === o) break;
                                            o = o >> 1 | 128, --i
                                        } while (i >= 0);
                                        if (i <= 0) throw new Error("Invalid UTF8 character");
                                        for (var s = n & (1 << i) - 1, u = 5; u >= i; --u) {
                                            var l = e[t++];
                                            if (128 !== (192 & l)) throw new Error("Invalid UTF8 character sequence");
                                            s = s << 6 | 63 & l
                                        }
                                        r += s >= 65536 ? String.fromCharCode(s - 65536 >> 10 & 1023 | 55296, 1023 & s | 56320) : String.fromCharCode(s)
                                    }
                                }
                                return r
                            }
                            e.utf8decode = t, e.utf8encode = r
                        }(t = e.StringUtilities || (e.StringUtilities = {}))
                    }(o || (o = {})),
                        function(e) {
                            var t;
                            ! function(e) {
                                function t(e) {
                                    for (var t = e.length >> 1, r = new Uint8Array(t), n = 0; n < t; n++) r[n] = parseInt(e.substr(2 * n, 2), 16);
                                    return r
                                }

                                function r(e) {
                                    var t, r = 0,
                                        n = a.RAW,
                                        o = e[r],
                                        i = o >> 4,
                                        d = o >> 2 & 3,
                                        p = 2 & o ? 16 : 8,
                                        h = 1 & o ? 2 : 1;
                                    switch (r++, i) {
                                        case c:
                                            var f = e[r++];
                                            n = f, t = 1024;
                                            break;
                                        case l:
                                            var _ = e[r + 1] >> 3 & 3,
                                                g = e[r + 1] >> 1 & 3;
                                            t = 1 === g ? 3 === _ ? 1152 : 576 : 3 === g ? 384 : 1152
                                    }
                                    return {
                                        codecDescription: u[i],
                                        codecId: i,
                                        data: e.subarray(r),
                                        rate: s[d],
                                        size: p,
                                        channels: h,
                                        samples: t,
                                        packetType: n
                                    }
                                }

                                function n(e) {
                                    var t = 0,
                                        r = e[t] >> 4,
                                        n = 15 & e[t];
                                    t++;
                                    var o = {
                                        frameType: r,
                                        codecId: n,
                                        codecDescription: p[n]
                                    };
                                    switch (n) {
                                        case f:
                                            var i = e[t++];
                                            o.packetType = i, o.compositionTime = (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8) >> 8, t += 3;
                                            break;
                                        case h:
                                            o.packetType = _.NALU, o.horizontalOffset = e[t] >> 4 & 15, o.verticalOffset = 15 & e[t], o.compositionTime = 0, t++
                                    }
                                    return o.data = e.subarray(t), o
                                }

                                function o(e) {
                                    var t, r, n = [],
                                        o = -1,
                                        i = -1,
                                        a = +e.asGetPublicProperty("duration"),
                                        s = e.asGetPublicProperty("audiocodecid");
                                    switch (s) {
                                        case l:
                                        case "mp3":
                                            t = "mp3", r = l;
                                            break;
                                        case c:
                                        case "mp4a":
                                            t = "mp4a", r = c;
                                            break;
                                        default:
                                            if (!isNaN(s)) throw new Error("Unsupported audio codec: " + s);
                                            t = null, r = -1
                                    }
                                    var u, d, p = e.asGetPublicProperty("videocodecid");
                                    switch (p) {
                                        case h:
                                        case "vp6f":
                                            u = "vp6f", d = h;
                                            break;
                                        case f:
                                        case "avc1":
                                            u = "avc1", d = f;
                                            break;
                                        default:
                                            if (!isNaN(p)) throw new Error("Unsupported video codec: " + p);
                                            u = null, d = -1
                                    }
                                    var _ = null === t ? null : {
                                            codecDescription: t,
                                            codecId: r,
                                            language: "und",
                                            timescale: +e.asGetPublicProperty("audiosamplerate") || 44100,
                                            samplerate: +e.asGetPublicProperty("audiosamplerate") || 44100,
                                            channels: +e.asGetPublicProperty("audiochannels") || 2,
                                            samplesize: 16
                                        },
                                        g = null === u ? null : {
                                            codecDescription: u,
                                            codecId: d,
                                            language: "und",
                                            timescale: 6e4,
                                            framerate: +e.asGetPublicProperty("videoframerate") || +e.asGetPublicProperty("framerate"),
                                            width: +e.asGetPublicProperty("width"),
                                            height: +e.asGetPublicProperty("height")
                                        },
                                        y = e.asGetPublicProperty("trackinfo");
                                    if (y)
                                        for (var v = 0; v < y.length; v++) {
                                            var m = y[v],
                                                E = m.asGetPublicProperty("sampledescription")[0];
                                            E.asGetPublicProperty("sampletype") === s ? (_.language = m.asGetPublicProperty("language"), _.timescale = +m.asGetPublicProperty("timescale")) : E.asGetPublicProperty("sampletype") === p && (g.language = m.asGetPublicProperty("language"), g.timescale = +m.asGetPublicProperty("timescale"))
                                        }
                                    return g && (i = n.length, n.push(g)), _ && (o = n.length, n.push(_)), {
                                        tracks: n,
                                        duration: a,
                                        audioTrackId: o,
                                        videoTrackId: i
                                    }
                                }

                                function i(e) {
                                    var t = [];
                                    return e.audioTrackId >= 0 && t.push({
                                        tracks: [e.tracks[e.audioTrackId]],
                                        duration: e.duration,
                                        audioTrackId: 0,
                                        videoTrackId: -1
                                    }), e.videoTrackId >= 0 && t.push({
                                        tracks: [e.tracks[e.videoTrackId]],
                                        duration: e.duration,
                                        audioTrackId: -1,
                                        videoTrackId: 0
                                    }), t
                                }
                                var a, s = [5500, 11025, 22050, 44100],
                                    u = ["PCM", "ADPCM", "MP3", "PCM le", "Nellymouser16", "Nellymouser8", "Nellymouser", "G.711 A-law", "G.711 mu-law", null, "AAC", "Speex", "MP3 8khz"],
                                    l = 2,
                                    c = 10;
                                ! function(e) {
                                    e[e.HEADER = 0] = "HEADER", e[e.RAW = 1] = "RAW"
                                }(a || (a = {}));
                                var d, p = [null, "JPEG", "Sorenson", "Screen", "VP6", "VP6 alpha", "Screen2", "AVC"],
                                    h = 4,
                                    f = 7;
                                ! function(e) {
                                    e[e.KEY = 1] = "KEY", e[e.INNER = 2] = "INNER", e[e.DISPOSABLE = 3] = "DISPOSABLE", e[e.GENERATED = 4] = "GENERATED", e[e.INFO = 5] = "INFO"
                                }(d || (d = {}));
                                var _;
                                ! function(e) {
                                    e[e.HEADER = 0] = "HEADER", e[e.NALU = 1] = "NALU", e[e.END = 2] = "END"
                                }(_ || (_ = {}));
                                var g, y = 8,
                                    v = 9,
                                    m = 50,
                                    E = !0;
                                ! function(e) {
                                    e[e.CAN_GENERATE_HEADER = 0] = "CAN_GENERATE_HEADER", e[e.NEED_HEADER_DATA = 1] = "NEED_HEADER_DATA", e[e.MAIN_PACKETS = 2] = "MAIN_PACKETS"
                                }(g || (g = {}));
                                var b = function() {
                                    function o(e) {
                                        var t = this;
                                        this.oncodecinfo = function(e) {}, this.ondata = function(e) {
                                            throw new Error("MP4Mux.ondata is not set")
                                        }, this.metadata = e, this.trackStates = this.metadata.tracks.map(function(e, r) {
                                            var n = {
                                                trackId: r + 1,
                                                trackInfo: e,
                                                cachedDuration: 0,
                                                samplesProcessed: 0,
                                                initializationData: []
                                            };
                                            return t.metadata.audioTrackId === r && (t.audioTrackState = n), t.metadata.videoTrackId === r && (t.videoTrackState = n), n
                                        }, this), this._checkIfNeedHeaderData(), this.filePos = 0, this.cachedPackets = [], this.chunkIndex = 0
                                    }
                                    return o.prototype.pushPacket = function(e, t, o) {
                                        switch (this.state === g.CAN_GENERATE_HEADER && this._tryGenerateHeader(), e) {
                                            case y:
                                                var i = this.audioTrackState,
                                                    s = r(t);
                                                if (!i || i.trackInfo.codecId !== s.codecId) throw new Error("Unexpected audio packet codec: " + s.codecDescription);
                                                switch (s.codecId) {
                                                    default: throw new Error("Unsupported audio codec: " + s.codecDescription);
                                                    case l:
                                                        break;
                                                    case c:
                                                        if (s.packetType === a.HEADER) return void i.initializationData.push(s.data)
                                                }
                                                this.cachedPackets.push({
                                                    packet: s,
                                                    timestamp: o,
                                                    trackId: i.trackId
                                                });
                                                break;
                                            case v:
                                                var u = this.videoTrackState,
                                                    d = n(t);
                                                if (!u || u.trackInfo.codecId !== d.codecId) throw new Error("Unexpected video packet codec: " + d.codecDescription);
                                                switch (d.codecId) {
                                                    default: throw new Error("unsupported video codec: " + d.codecDescription);
                                                    case h:
                                                        break;
                                                    case f:
                                                        if (d.packetType === _.HEADER) return void u.initializationData.push(d.data)
                                                }
                                                this.cachedPackets.push({
                                                    packet: d,
                                                    timestamp: o,
                                                    trackId: u.trackId
                                                });
                                                break;
                                            default:
                                                throw new Error("unknown packet type: " + e)
                                        }
                                        this.state === g.NEED_HEADER_DATA && this._tryGenerateHeader(), this.cachedPackets.length >= m && this.state === g.MAIN_PACKETS && this._chunk()
                                    }, o.prototype.flush = function() {
                                        this.cachedPackets.length > 0 && this._chunk()
                                    }, o.prototype._checkIfNeedHeaderData = function() {
                                        this.trackStates.some(function(e) {
                                            return e.trackInfo.codecId === c || e.trackInfo.codecId === f
                                        }) ? this.state = g.NEED_HEADER_DATA : this.state = g.CAN_GENERATE_HEADER
                                    }, o.prototype._tryGenerateHeader = function() {
                                        var r = this.trackStates.every(function(e) {
                                            switch (e.trackInfo.codecId) {
                                                case c:
                                                case f:
                                                    return e.initializationData.length > 0;
                                                default:
                                                    return !0
                                            }
                                        });
                                        if (r) {
                                            for (var n = ["isom"], o = 1, i = 1, a = [], s = 0; s < this.trackStates.length; s++) {
                                                var u, d = this.trackStates[s],
                                                    p = d.trackInfo;
                                                switch (p.codecId) {
                                                    case c:
                                                        var _ = d.initializationData[0];
                                                        u = new e.Iso.AudioSampleEntry("mp4a", o, p.channels, p.samplesize, p.samplerate);
                                                        var y = new Uint8Array(41 + _.length);
                                                        y.set(t("0000000003808080"), 0), y[8] = 32 + _.length, y.set(t("00020004808080"), 9), y[16] = 18 + _.length, y.set(t("40150000000000FA000000000005808080"), 17), y[34] = _.length, y.set(_, 35), y.set(t("068080800102"), 35 + _.length), u.otherBoxes = [new e.Iso.RawTag("esds", y)];
                                                        var v = _[0] >> 3;
                                                        d.mimeTypeCodec = "mp4a.40." + v;
                                                        break;
                                                    case l:
                                                        u = new e.Iso.AudioSampleEntry(".mp3", o, p.channels, p.samplesize, p.samplerate), d.mimeTypeCodec = "mp3";
                                                        break;
                                                    case f:
                                                        var m = d.initializationData[0];
                                                        u = new e.Iso.VideoSampleEntry("avc1", i, p.width, p.height), u.otherBoxes = [new e.Iso.RawTag("avcC", m)];
                                                        var E = m[1] << 16 | m[2] << 8 | m[3];
                                                        d.mimeTypeCodec = "avc1." + (16777216 | E).toString(16).substr(1), n.push("iso2", "avc1", "mp41");
                                                        break;
                                                    case h:
                                                        u = new e.Iso.VideoSampleEntry("VP6F", i, p.width, p.height), u.otherBoxes = [new e.Iso.RawTag("glbl", t("00"))], d.mimeTypeCodec = "avc1.42001E";
                                                        break;
                                                    default:
                                                        throw new Error("not supported track type")
                                                }
                                                var b, w = e.Iso.TrackHeaderFlags.TRACK_ENABLED | e.Iso.TrackHeaderFlags.TRACK_IN_MOVIE;
                                                d === this.audioTrackState ? b = new e.Iso.TrackBox(new e.Iso.TrackHeaderBox(w, d.trackId, -1, 0, 0, 1, s), new e.Iso.MediaBox(new e.Iso.MediaHeaderBox(p.timescale, -1, p.language), new e.Iso.HandlerBox("soun", "SoundHandler"), new e.Iso.MediaInformationBox(new e.Iso.SoundMediaHeaderBox, new e.Iso.DataInformationBox(new e.Iso.DataReferenceBox([new e.Iso.DataEntryUrlBox(e.Iso.SELF_CONTAINED_DATA_REFERENCE_FLAG)])), new e.Iso.SampleTableBox(new e.Iso.SampleDescriptionBox([u]), new e.Iso.RawTag("stts", t("0000000000000000")), new e.Iso.RawTag("stsc", t("0000000000000000")), new e.Iso.RawTag("stsz", t("000000000000000000000000")), new e.Iso.RawTag("stco", t("0000000000000000")))))) : d === this.videoTrackState && (b = new e.Iso.TrackBox(new e.Iso.TrackHeaderBox(w, d.trackId, -1, p.width, p.height, 0, s), new e.Iso.MediaBox(new e.Iso.MediaHeaderBox(p.timescale, -1, p.language), new e.Iso.HandlerBox("vide", "VideoHandler"), new e.Iso.MediaInformationBox(new e.Iso.VideoMediaHeaderBox, new e.Iso.DataInformationBox(new e.Iso.DataReferenceBox([new e.Iso.DataEntryUrlBox(e.Iso.SELF_CONTAINED_DATA_REFERENCE_FLAG)])), new e.Iso.SampleTableBox(new e.Iso.SampleDescriptionBox([u]), new e.Iso.RawTag("stts", t("0000000000000000")), new e.Iso.RawTag("stsc", t("0000000000000000")), new e.Iso.RawTag("stsz", t("000000000000000000000000")), new e.Iso.RawTag("stco", t("0000000000000000"))))))), a.push(b)
                                            }
                                            var P = new e.Iso.MovieExtendsBox(null, [new e.Iso.TrackExtendsBox(1, 1, 0, 0, 0), new e.Iso.TrackExtendsBox(2, 1, 0, 0, 0)], null),
                                                S = new e.Iso.BoxContainerBox("udat", [new e.Iso.MetaBox(new e.Iso.RawTag("hdlr", t("00000000000000006D6469726170706C000000000000000000")), [new e.Iso.RawTag("ilst", t("00000025A9746F6F0000001D6461746100000001000000004C61766635342E36332E313034"))])]),
                                                R = new e.Iso.MovieHeaderBox(1e3, 0, this.trackStates.length + 1),
                                                T = new e.Iso.MovieBox(R, a, P, S),
                                                A = new e.Iso.FileTypeBox("isom", 512, n),
                                                M = A.layout(0),
                                                k = T.layout(M),
                                                x = new Uint8Array(M + k);
                                            A.write(x), T.write(x), this.oncodecinfo(this.trackStates.map(function(e) {
                                                return e.mimeTypeCodec
                                            })), this.ondata(x), this.filePos += x.length, this.state = g.MAIN_PACKETS
                                        }
                                    }, o.prototype._chunk = function() {
                                        var t = this.cachedPackets;
                                        if (E && this.videoTrackState) {
                                            for (var r = t.length - 1, n = this.videoTrackState.trackId; r > 0 && (t[r].trackId !== n || t[r].packet.frameType !== d.KEY);) r--;
                                            r > 0 && (t = t.slice(0, r))
                                        }
                                        if (0 !== t.length) {
                                            for (var o = [], i = 0, a = [], s = [], u = 0; u < this.trackStates.length; u++) {
                                                var p = this.trackStates[u],
                                                    _ = p.trackInfo,
                                                    g = p.trackId,
                                                    y = t.filter(function(e) {
                                                        return e.trackId === g
                                                    });
                                                if (0 !== y.length) {
                                                    var v, m, b, w = new e.Iso.TrackFragmentBaseMediaDecodeTimeBox(p.cachedDuration);
                                                    switch (s.push(i), _.codecId) {
                                                        case c:
                                                        case l:
                                                            b = [];
                                                            for (var r = 0; r < y.length; r++) {
                                                                var P = y[r].packet,
                                                                    S = Math.round(P.samples * _.timescale / _.samplerate);
                                                                o.push(P.data), i += P.data.length, b.push({
                                                                    duration: S,
                                                                    size: P.data.length
                                                                }), p.samplesProcessed += P.samples
                                                            }
                                                            var R = e.Iso.TrackFragmentFlags.DEFAULT_SAMPLE_FLAGS_PRESENT;
                                                            v = new e.Iso.TrackFragmentHeaderBox(R, g, 0, 0, 0, 0, e.Iso.SampleFlags.SAMPLE_DEPENDS_ON_NO_OTHERS);
                                                            var T = e.Iso.TrackRunFlags.DATA_OFFSET_PRESENT | e.Iso.TrackRunFlags.SAMPLE_DURATION_PRESENT | e.Iso.TrackRunFlags.SAMPLE_SIZE_PRESENT;
                                                            m = new e.Iso.TrackRunBox(T, b, 0, 0), p.cachedDuration = Math.round(p.samplesProcessed * _.timescale / _.samplerate);
                                                            break;
                                                        case f:
                                                        case h:
                                                            b = [];
                                                            for (var A = p.samplesProcessed, M = A * _.timescale / _.framerate, k = Math.round(M), r = 0; r < y.length; r++) {
                                                                var x = y[r].packet;
                                                                A++;
                                                                var D = Math.round(A * _.timescale / _.framerate),
                                                                    O = D - k;
                                                                k = D;
                                                                var C = Math.round(A * _.timescale / _.framerate + x.compositionTime * _.timescale / 1e3);
                                                                o.push(x.data), i += x.data.length;
                                                                var I = x.frameType === d.KEY ? e.Iso.SampleFlags.SAMPLE_DEPENDS_ON_NO_OTHERS : e.Iso.SampleFlags.SAMPLE_DEPENDS_ON_OTHER | e.Iso.SampleFlags.SAMPLE_IS_NOT_SYNC;
                                                                b.push({
                                                                    duration: O,
                                                                    size: x.data.length,
                                                                    flags: I,
                                                                    compositionTimeOffset: C - D
                                                                })
                                                            }
                                                            var R = e.Iso.TrackFragmentFlags.DEFAULT_SAMPLE_FLAGS_PRESENT;
                                                            v = new e.Iso.TrackFragmentHeaderBox(R, g, 0, 0, 0, 0, e.Iso.SampleFlags.SAMPLE_DEPENDS_ON_NO_OTHERS);
                                                            var T = e.Iso.TrackRunFlags.DATA_OFFSET_PRESENT | e.Iso.TrackRunFlags.SAMPLE_DURATION_PRESENT | e.Iso.TrackRunFlags.SAMPLE_SIZE_PRESENT | e.Iso.TrackRunFlags.SAMPLE_FLAGS_PRESENT | e.Iso.TrackRunFlags.SAMPLE_COMPOSITION_TIME_OFFSET;
                                                            m = new e.Iso.TrackRunBox(T, b, 0, 0), p.cachedDuration = k, p.samplesProcessed = A;
                                                            break;
                                                        default:
                                                            throw new Error("Un codec")
                                                    }
                                                    var L = new e.Iso.TrackFragmentBox(v, w, m);
                                                    a.push(L)
                                                }
                                            }
                                            this.cachedPackets.splice(0, t.length);
                                            for (var N = new e.Iso.MovieFragmentHeaderBox(++this.chunkIndex), j = new e.Iso.MovieFragmentBox(N, a), F = j.layout(0), U = new e.Iso.MediaDataBox(o), B = U.layout(F), q = F + 8, u = 0; u < a.length; u++) a[u].run.dataOffset = q + s[u];
                                            var H = new Uint8Array(F + B);
                                            j.write(H), U.write(H), this.ondata(H), this.filePos += H.length
                                        }
                                    }, o
                                }();
                                e.MP4Mux = b, e.parseFLVMetadata = o, e.splitMetadata = i
                            }(t = e.MP4 || (e.MP4 = {}))
                        }(n || (n = {})),
                        function(e) {
                            var t;
                            ! function(e) {
                                var t;
                                ! function(e) {
                                    function t(e) {
                                        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                                        return Array.prototype.concat.apply(e, t)
                                    }

                                    function r(e, t, r) {
                                        e[t] = r >> 24 & 255, e[t + 1] = r >> 16 & 255, e[t + 2] = r >> 8 & 255, e[t + 3] = 255 & r
                                    }

                                    function n(e) {
                                        return e.charCodeAt(0) << 24 | e.charCodeAt(1) << 16 | e.charCodeAt(2) << 8 | e.charCodeAt(3)
                                    }

                                    function a(e) {
                                        return (e - p) / 1e3 | 0
                                    }

                                    function s(e) {
                                        return 65536 * e | 0
                                    }

                                    function u(e) {
                                        return 1073741824 * e | 0
                                    }

                                    function l(e) {
                                        return 256 * e | 0
                                    }

                                    function c(e) {
                                        return (31 & e.charCodeAt(0)) << 10 | (31 & e.charCodeAt(1)) << 5 | 31 & e.charCodeAt(2)
                                    }
                                    var d = o.StringUtilities.utf8decode,
                                        p = -20828448e5,
                                        h = [1, 0, 0, 0, 1, 0, 0, 0, 1],
                                        f = [0, 0, 0],
                                        _ = function() {
                                            function e(e, t) {
                                                this.boxtype = e, "uuid" === e && (this.userType = t)
                                            }
                                            return e.prototype.layout = function(e) {
                                                this.offset = e;
                                                var t = 8;
                                                return this.userType && (t += 16), this.size = t, t
                                            }, e.prototype.write = function(e) {
                                                return r(e, this.offset, this.size), r(e, this.offset + 4, n(this.boxtype)), this.userType ? (e.set(this.userType, this.offset + 8), 24) : 8
                                            }, e.prototype.toUint8Array = function() {
                                                var e = this.layout(0),
                                                    t = new Uint8Array(e);
                                                return this.write(t), t
                                            }, e
                                        }();
                                    e.Box = _;
                                    var g = function(e) {
                                        function t(t, r, n) {
                                            void 0 === r && (r = 0), void 0 === n && (n = 0);
                                            var o = e.call(this, t) || this;
                                            return o.version = r, o.flags = n, o
                                        }
                                        return i(t, e), t.prototype.layout = function(t) {
                                            return this.size = e.prototype.layout.call(this, t) + 4, this.size
                                        }, t.prototype.write = function(t) {
                                            var n = e.prototype.write.call(this, t);
                                            return r(t, this.offset + n, this.version << 24 | this.flags), n + 4
                                        }, t
                                    }(_);
                                    e.FullBox = g;
                                    var y = function(e) {
                                        function t(t, r, n) {
                                            var o = e.call(this, "ftype") || this;
                                            return o.majorBrand = t, o.minorVersion = r, o.compatibleBrands = n, o
                                        }
                                        return i(t, e), t.prototype.layout = function(t) {
                                            return this.size = e.prototype.layout.call(this, t) + 4 * (2 + this.compatibleBrands.length), this.size
                                        }, t.prototype.write = function(t) {
                                            var o = this,
                                                i = e.prototype.write.call(this, t);
                                            return r(t, this.offset + i, n(this.majorBrand)), r(t, this.offset + i + 4, this.minorVersion), i += 8, this.compatibleBrands.forEach(function(e) {
                                                r(t, o.offset + i, n(e)), i += 4
                                            }, this), i
                                        }, t
                                    }(_);
                                    e.FileTypeBox = y;
                                    var v = function(e) {
                                        function t(t, r) {
                                            var n = e.call(this, t) || this;
                                            return n.children = r, n
                                        }
                                        return i(t, e), t.prototype.layout = function(t) {
                                            var r = e.prototype.layout.call(this, t);
                                            return this.children.forEach(function(e) {
                                                e && (r += e.layout(t + r))
                                            }), this.size = r
                                        }, t.prototype.write = function(t) {
                                            var r = e.prototype.write.call(this, t);
                                            return this.children.forEach(function(e) {
                                                e && (r += e.write(t))
                                            }), r
                                        }, t
                                    }(_);
                                    e.BoxContainerBox = v;
                                    var m = function(e) {
                                        function r(r, n, o, i) {
                                            var a = e.call(this, "moov", t([r], n, [o, i])) || this;
                                            return a.header = r, a.tracks = n, a.extendsBox = o, a.userData = i, a
                                        }
                                        return i(r, e), r
                                    }(v);
                                    e.MovieBox = m;
                                    var E = function(e) {
                                        function t(t, r, n, o, i, a, s, u) {
                                            void 0 === o && (o = 1), void 0 === i && (i = 1), void 0 === a && (a = h), void 0 === s && (s = p), void 0 === u && (u = p);
                                            var l = e.call(this, "mvhd", 0, 0) || this;
                                            return l.timescale = t, l.duration = r, l.nextTrackId = n, l.rate = o, l.volume = i, l.matrix = a, l.creationTime = s, l.modificationTime = u, l
                                        }
                                        return i(t, e), t.prototype.layout = function(t) {
                                            return this.size = e.prototype.layout.call(this, t) + 16 + 4 + 2 + 2 + 8 + 36 + 24 + 4, this.size
                                        }, t.prototype.write = function(t) {
                                            var n = e.prototype.write.call(this, t);
                                            return r(t, this.offset + n, a(this.creationTime)), r(t, this.offset + n + 4, a(this.modificationTime)), r(t, this.offset + n + 8, this.timescale), r(t, this.offset + n + 12, this.duration), n += 16, r(t, this.offset + n, s(this.rate)), r(t, this.offset + n + 4, l(this.volume) << 16), r(t, this.offset + n + 8, 0), r(t, this.offset + n + 12, 0), n += 16, r(t, this.offset + n, s(this.matrix[0])), r(t, this.offset + n + 4, s(this.matrix[1])), r(t, this.offset + n + 8, s(this.matrix[2])), r(t, this.offset + n + 12, s(this.matrix[3])), r(t, this.offset + n + 16, s(this.matrix[4])), r(t, this.offset + n + 20, s(this.matrix[5])), r(t, this.offset + n + 24, u(this.matrix[6])), r(t, this.offset + n + 28, u(this.matrix[7])), r(t, this.offset + n + 32, u(this.matrix[8])), n += 36, r(t, this.offset + n, 0), r(t, this.offset + n + 4, 0), r(t, this.offset + n + 8, 0), r(t, this.offset + n + 12, 0), r(t, this.offset + n + 16, 0), r(t, this.offset + n + 20, 0), n += 24, r(t, this.offset + n, this.nextTrackId), n += 4
                                        }, t
                                    }(g);
                                    e.MovieHeaderBox = E;
                                    var b;
                                    ! function(e) {
                                        e[e.TRACK_ENABLED = 1] = "TRACK_ENABLED", e[e.TRACK_IN_MOVIE = 2] = "TRACK_IN_MOVIE", e[e.TRACK_IN_PREVIEW = 4] = "TRACK_IN_PREVIEW"
                                    }(b = e.TrackHeaderFlags || (e.TrackHeaderFlags = {}));
                                    var w = function(e) {
                                        function t(t, r, n, o, i, a, s, u, l, c, d) {
                                            void 0 === s && (s = 0), void 0 === u && (u = 0), void 0 === l && (l = h), void 0 === c && (c = p), void 0 === d && (d = p);
                                            var f = e.call(this, "tkhd", 0, t) || this;
                                            return f.trackId = r, f.duration = n, f.width = o, f.height = i, f.volume = a, f.alternateGroup = s, f.layer = u, f.matrix = l, f.creationTime = c, f.modificationTime = d, f
                                        }
                                        return i(t, e), t.prototype.layout = function(t) {
                                            return this.size = e.prototype.layout.call(this, t) + 20 + 8 + 6 + 2 + 36 + 8, this.size
                                        }, t.prototype.write = function(t) {
                                            var n = e.prototype.write.call(this, t);
                                            return r(t, this.offset + n, a(this.creationTime)), r(t, this.offset + n + 4, a(this.modificationTime)), r(t, this.offset + n + 8, this.trackId), r(t, this.offset + n + 12, 0), r(t, this.offset + n + 16, this.duration), n += 20, r(t, this.offset + n, 0), r(t, this.offset + n + 4, 0), r(t, this.offset + n + 8, this.layer << 16 | this.alternateGroup), r(t, this.offset + n + 12, l(this.volume) << 16), n += 16, r(t, this.offset + n, s(this.matrix[0])), r(t, this.offset + n + 4, s(this.matrix[1])), r(t, this.offset + n + 8, s(this.matrix[2])), r(t, this.offset + n + 12, s(this.matrix[3])), r(t, this.offset + n + 16, s(this.matrix[4])), r(t, this.offset + n + 20, s(this.matrix[5])), r(t, this.offset + n + 24, u(this.matrix[6])), r(t, this.offset + n + 28, u(this.matrix[7])), r(t, this.offset + n + 32, u(this.matrix[8])), n += 36, r(t, this.offset + n, s(this.width)), r(t, this.offset + n + 4, s(this.height)), n += 8
                                        }, t
                                    }(g);
                                    e.TrackHeaderBox = w;
                                    var P = function(e) {
                                        function t(t, r, n, o, i) {
                                            void 0 === n && (n = "unk"), void 0 === o && (o = p), void 0 === i && (i = p);
                                            var a = e.call(this, "mdhd", 0, 0) || this;
                                            return a.timescale = t, a.duration = r, a.language = n, a.creationTime = o, a.modificationTime = i, a
                                        }
                                        return i(t, e), t.prototype.layout = function(t) {
                                            return this.size = e.prototype.layout.call(this, t) + 16 + 4, this.size
                                        }, t.prototype.write = function(t) {
                                            var n = e.prototype.write.call(this, t);
                                            return r(t, this.offset + n, a(this.creationTime)), r(t, this.offset + n + 4, a(this.modificationTime)), r(t, this.offset + n + 8, this.timescale), r(t, this.offset + n + 12, this.duration), r(t, this.offset + n + 16, c(this.language) << 16), n + 20
                                        }, t
                                    }(g);
                                    e.MediaHeaderBox = P;
                                    var S = function(e) {
                                        function t(t, r) {
                                            var n = e.call(this, "hdlr", 0, 0) || this;
                                            return n.handlerType = t, n.name = r, n._encodedName = d(n.name), n
                                        }
                                        return i(t, e), t.prototype.layout = function(t) {
                                            return this.size = e.prototype.layout.call(this, t) + 8 + 12 + (this._encodedName.length + 1), this.size
                                        }, t.prototype.write = function(t) {
                                            var o = e.prototype.write.call(this, t);
                                            return r(t, this.offset + o, 0), r(t, this.offset + o + 4, n(this.handlerType)), r(t, this.offset + o + 8, 0), r(t, this.offset + o + 12, 0), r(t, this.offset + o + 16, 0), o += 20, t.set(this._encodedName, this.offset + o), t[this.offset + o + this._encodedName.length] = 0, o += this._encodedName.length + 1
                                        }, t
                                    }(g);
                                    e.HandlerBox = S;
                                    var R = function(e) {
                                        function t(t) {
                                            void 0 === t && (t = 0);
                                            var r = e.call(this, "smhd", 0, 0) || this;
                                            return r.balance = t, r
                                        }
                                        return i(t, e), t.prototype.layout = function(t) {
                                            return this.size = e.prototype.layout.call(this, t) + 4, this.size
                                        }, t.prototype.write = function(t) {
                                            var n = e.prototype.write.call(this, t);
                                            return r(t, this.offset + n, l(this.balance) << 16), n + 4
                                        }, t
                                    }(g);
                                    e.SoundMediaHeaderBox = R;
                                    var T = function(e) {
                                        function t(t, r) {
                                            void 0 === t && (t = 0), void 0 === r && (r = f);
                                            var n = e.call(this, "vmhd", 0, 0) || this;
                                            return n.graphicsMode = t, n.opColor = r, n
                                        }
                                        return i(t, e), t.prototype.layout = function(t) {
                                            return this.size = e.prototype.layout.call(this, t) + 8, this.size
                                        }, t.prototype.write = function(t) {
                                            var n = e.prototype.write.call(this, t);
                                            return r(t, this.offset + n, this.graphicsMode << 16 | this.opColor[0]), r(t, this.offset + n + 4, this.opColor[1] << 16 | this.opColor[2]), n + 8
                                        }, t
                                    }(g);
                                    e.VideoMediaHeaderBox = T, e.SELF_CONTAINED_DATA_REFERENCE_FLAG = 1;
                                    var A = function(t) {
                                        function r(r, n) {
                                            void 0 === n && (n = null);
                                            var o = t.call(this, "url ", 0, r) || this;
                                            return o.location = n, r & e.SELF_CONTAINED_DATA_REFERENCE_FLAG || (o._encodedLocation = d(n)), o
                                        }
                                        return i(r, t), r.prototype.layout = function(e) {
                                            var r = t.prototype.layout.call(this, e);
                                            return this._encodedLocation && (r += this._encodedLocation.length + 1), this.size = r
                                        }, r.prototype.write = function(e) {
                                            var r = t.prototype.write.call(this, e);
                                            return this._encodedLocation && (e.set(this._encodedLocation, this.offset + r), e[this.offset + r + this._encodedLocation.length] = 0, r += this._encodedLocation.length), r
                                        }, r
                                    }(g);
                                    e.DataEntryUrlBox = A;
                                    var M = function(e) {
                                        function t(t) {
                                            var r = e.call(this, "dref", 0, 0) || this;
                                            return r.entries = t, r
                                        }
                                        return i(t, e), t.prototype.layout = function(t) {
                                            var r = e.prototype.layout.call(this, t) + 4;
                                            return this.entries.forEach(function(e) {
                                                r += e.layout(t + r)
                                            }), this.size = r
                                        }, t.prototype.write = function(t) {
                                            var n = e.prototype.write.call(this, t);
                                            return r(t, this.offset + n, this.entries.length), this.entries.forEach(function(e) {
                                                n += e.write(t)
                                            }), n
                                        }, t
                                    }(g);
                                    e.DataReferenceBox = M;
                                    var k = function(e) {
                                        function t(t) {
                                            var r = e.call(this, "dinf", [t]) || this;
                                            return r.dataReference = t, r
                                        }
                                        return i(t, e), t
                                    }(v);
                                    e.DataInformationBox = k;
                                    var x = function(e) {
                                        function t(t) {
                                            var r = e.call(this, "stsd", 0, 0) || this;
                                            return r.entries = t, r
                                        }
                                        return i(t, e), t.prototype.layout = function(t) {
                                            var r = e.prototype.layout.call(this, t);
                                            return r += 4, this.entries.forEach(function(e) {
                                                r += e.layout(t + r)
                                            }), this.size = r
                                        }, t.prototype.write = function(t) {
                                            var n = e.prototype.write.call(this, t);
                                            return r(t, this.offset + n, this.entries.length), n += 4, this.entries.forEach(function(e) {
                                                n += e.write(t)
                                            }), n
                                        }, t
                                    }(g);
                                    e.SampleDescriptionBox = x;
                                    var D = function(e) {
                                        function t(t, r, n, o, i) {
                                            var a = e.call(this, "stbl", [t, r, n, o, i]) || this;
                                            return a.sampleDescriptions = t, a.timeToSample = r, a.sampleToChunk = n, a.sampleSizes = o, a.chunkOffset = i, a
                                        }
                                        return i(t, e), t
                                    }(v);
                                    e.SampleTableBox = D;
                                    var O = function(e) {
                                        function t(t, r, n) {
                                            var o = e.call(this, "minf", [t, r, n]) || this;
                                            return o.header = t, o.info = r, o.sampleTable = n, o
                                        }
                                        return i(t, e), t
                                    }(v);
                                    e.MediaInformationBox = O;
                                    var C = function(e) {
                                        function t(t, r, n) {
                                            var o = e.call(this, "mdia", [t, r, n]) || this;
                                            return o.header = t, o.handler = r, o.info = n, o
                                        }
                                        return i(t, e), t
                                    }(v);
                                    e.MediaBox = C;
                                    var I = function(e) {
                                        function t(t, r) {
                                            var n = e.call(this, "trak", [t, r]) || this;
                                            return n.header = t, n.media = r, n
                                        }
                                        return i(t, e), t
                                    }(v);
                                    e.TrackBox = I;
                                    var L = function(e) {
                                        function t(t, r, n, o, i) {
                                            var a = e.call(this, "trex", 0, 0) || this;
                                            return a.trackId = t, a.defaultSampleDescriptionIndex = r, a.defaultSampleDuration = n, a.defaultSampleSize = o, a.defaultSampleFlags = i, a
                                        }
                                        return i(t, e), t.prototype.layout = function(t) {
                                            return this.size = e.prototype.layout.call(this, t) + 20, this.size
                                        }, t.prototype.write = function(t) {
                                            var n = e.prototype.write.call(this, t);
                                            return r(t, this.offset + n, this.trackId), r(t, this.offset + n + 4, this.defaultSampleDescriptionIndex), r(t, this.offset + n + 8, this.defaultSampleDuration), r(t, this.offset + n + 12, this.defaultSampleSize), r(t, this.offset + n + 16, this.defaultSampleFlags), n + 20
                                        }, t
                                    }(g);
                                    e.TrackExtendsBox = L;
                                    var N = function(e) {
                                        function r(r, n, o) {
                                            var i = e.call(this, "mvex", t([r], n, [o])) || this;
                                            return i.header = r, i.tracDefaults = n, i.levels = o, i
                                        }
                                        return i(r, e), r
                                    }(v);
                                    e.MovieExtendsBox = N;
                                    var j = function(e) {
                                        function t(t, r) {
                                            var n = e.call(this, "meta", 0, 0) || this;
                                            return n.handler = t, n.otherBoxes = r, n
                                        }
                                        return i(t, e), t.prototype.layout = function(t) {
                                            var r = e.prototype.layout.call(this, t);
                                            return r += this.handler.layout(t + r), this.otherBoxes.forEach(function(e) {
                                                r += e.layout(t + r)
                                            }), this.size = r
                                        }, t.prototype.write = function(t) {
                                            var r = e.prototype.write.call(this, t);
                                            return r += this.handler.write(t), this.otherBoxes.forEach(function(e) {
                                                r += e.write(t)
                                            }), r
                                        }, t
                                    }(g);
                                    e.MetaBox = j;
                                    var F = function(e) {
                                        function t(t) {
                                            var r = e.call(this, "mfhd", 0, 0) || this;
                                            return r.sequenceNumber = t, r
                                        }
                                        return i(t, e), t.prototype.layout = function(t) {
                                            return this.size = e.prototype.layout.call(this, t) + 4, this.size
                                        }, t.prototype.write = function(t) {
                                            var n = e.prototype.write.call(this, t);
                                            return r(t, this.offset + n, this.sequenceNumber), n + 4
                                        }, t
                                    }(g);
                                    e.MovieFragmentHeaderBox = F;
                                    var U;
                                    ! function(e) {
                                        e[e.BASE_DATA_OFFSET_PRESENT = 1] = "BASE_DATA_OFFSET_PRESENT", e[e.SAMPLE_DESCRIPTION_INDEX_PRESENT = 2] = "SAMPLE_DESCRIPTION_INDEX_PRESENT", e[e.DEFAULT_SAMPLE_DURATION_PRESENT = 8] = "DEFAULT_SAMPLE_DURATION_PRESENT", e[e.DEFAULT_SAMPLE_SIZE_PRESENT = 16] = "DEFAULT_SAMPLE_SIZE_PRESENT", e[e.DEFAULT_SAMPLE_FLAGS_PRESENT = 32] = "DEFAULT_SAMPLE_FLAGS_PRESENT"
                                    }(U = e.TrackFragmentFlags || (e.TrackFragmentFlags = {}));
                                    var B = function(e) {
                                        function t(t, r, n, o, i, a, s) {
                                            var u = e.call(this, "tfhd", 0, t) || this;
                                            return u.trackId = r, u.baseDataOffset = n, u.sampleDescriptionIndex = o, u.defaultSampleDuration = i, u.defaultSampleSize = a, u.defaultSampleFlags = s, u
                                        }
                                        return i(t, e), t.prototype.layout = function(t) {
                                            var r = e.prototype.layout.call(this, t) + 4,
                                                n = this.flags;
                                            return n & U.BASE_DATA_OFFSET_PRESENT && (r += 8), n & U.SAMPLE_DESCRIPTION_INDEX_PRESENT && (r += 4), n & U.DEFAULT_SAMPLE_DURATION_PRESENT && (r += 4), n & U.DEFAULT_SAMPLE_SIZE_PRESENT && (r += 4), n & U.DEFAULT_SAMPLE_FLAGS_PRESENT && (r += 4), this.size = r
                                        }, t.prototype.write = function(t) {
                                            var n = e.prototype.write.call(this, t),
                                                o = this.flags;
                                            return r(t, this.offset + n, this.trackId), n += 4, o & U.BASE_DATA_OFFSET_PRESENT && (r(t, this.offset + n, 0), r(t, this.offset + n + 4, this.baseDataOffset), n += 8), o & U.SAMPLE_DESCRIPTION_INDEX_PRESENT && (r(t, this.offset + n, this.sampleDescriptionIndex), n += 4), o & U.DEFAULT_SAMPLE_DURATION_PRESENT && (r(t, this.offset + n, this.defaultSampleDuration), n += 4), o & U.DEFAULT_SAMPLE_SIZE_PRESENT && (r(t, this.offset + n, this.defaultSampleSize), n += 4), o & U.DEFAULT_SAMPLE_FLAGS_PRESENT && (r(t, this.offset + n, this.defaultSampleFlags), n += 4), n
                                        }, t
                                    }(g);
                                    e.TrackFragmentHeaderBox = B;
                                    var q = function(e) {
                                        function t(t) {
                                            var r = e.call(this, "tfdt", 0, 0) || this;
                                            return r.baseMediaDecodeTime = t, r
                                        }
                                        return i(t, e), t.prototype.layout = function(t) {
                                            return this.size = e.prototype.layout.call(this, t) + 4, this.size
                                        }, t.prototype.write = function(t) {
                                            var n = e.prototype.write.call(this, t);
                                            return r(t, this.offset + n, this.baseMediaDecodeTime), n + 4
                                        }, t
                                    }(g);
                                    e.TrackFragmentBaseMediaDecodeTimeBox = q;
                                    var H = function(e) {
                                        function t(t, r, n) {
                                            var o = e.call(this, "traf", [t, r, n]) || this;
                                            return o.header = t, o.decodeTime = r, o.run = n, o
                                        }
                                        return i(t, e), t
                                    }(v);
                                    e.TrackFragmentBox = H;
                                    var z;
                                    ! function(e) {
                                        e[e.IS_LEADING_MASK = 201326592] = "IS_LEADING_MASK", e[e.SAMPLE_DEPENDS_ON_MASK = 50331648] = "SAMPLE_DEPENDS_ON_MASK", e[e.SAMPLE_DEPENDS_ON_OTHER = 16777216] = "SAMPLE_DEPENDS_ON_OTHER", e[e.SAMPLE_DEPENDS_ON_NO_OTHERS = 33554432] = "SAMPLE_DEPENDS_ON_NO_OTHERS", e[e.SAMPLE_IS_DEPENDED_ON_MASK = 12582912] = "SAMPLE_IS_DEPENDED_ON_MASK", e[e.SAMPLE_HAS_REDUNDANCY_MASK = 3145728] = "SAMPLE_HAS_REDUNDANCY_MASK", e[e.SAMPLE_PADDING_VALUE_MASK = 917504] = "SAMPLE_PADDING_VALUE_MASK", e[e.SAMPLE_IS_NOT_SYNC = 65536] = "SAMPLE_IS_NOT_SYNC", e[e.SAMPLE_DEGRADATION_PRIORITY_MASK = 65535] = "SAMPLE_DEGRADATION_PRIORITY_MASK"
                                    }(z = e.SampleFlags || (e.SampleFlags = {}));
                                    var G;
                                    ! function(e) {
                                        e[e.DATA_OFFSET_PRESENT = 1] = "DATA_OFFSET_PRESENT", e[e.FIRST_SAMPLE_FLAGS_PRESENT = 4] = "FIRST_SAMPLE_FLAGS_PRESENT", e[e.SAMPLE_DURATION_PRESENT = 256] = "SAMPLE_DURATION_PRESENT", e[e.SAMPLE_SIZE_PRESENT = 512] = "SAMPLE_SIZE_PRESENT", e[e.SAMPLE_FLAGS_PRESENT = 1024] = "SAMPLE_FLAGS_PRESENT", e[e.SAMPLE_COMPOSITION_TIME_OFFSET = 2048] = "SAMPLE_COMPOSITION_TIME_OFFSET"
                                    }(G = e.TrackRunFlags || (e.TrackRunFlags = {}));
                                    var V = function(e) {
                                        function t(t, r, n, o) {
                                            var i = e.call(this, "trun", 1, t) || this;
                                            return i.samples = r, i.dataOffset = n, i.firstSampleFlags = o, i
                                        }
                                        return i(t, e), t.prototype.layout = function(t) {
                                            var r = e.prototype.layout.call(this, t) + 4,
                                                n = this.samples.length,
                                                o = this.flags;
                                            return o & G.DATA_OFFSET_PRESENT && (r += 4), o & G.FIRST_SAMPLE_FLAGS_PRESENT && (r += 4), o & G.SAMPLE_DURATION_PRESENT && (r += 4 * n), o & G.SAMPLE_SIZE_PRESENT && (r += 4 * n), o & G.SAMPLE_FLAGS_PRESENT && (r += 4 * n), o & G.SAMPLE_COMPOSITION_TIME_OFFSET && (r += 4 * n), this.size = r
                                        }, t.prototype.write = function(t) {
                                            var n = e.prototype.write.call(this, t),
                                                o = this.samples.length,
                                                i = this.flags;
                                            r(t, this.offset + n, o), n += 4, i & G.DATA_OFFSET_PRESENT && (r(t, this.offset + n, this.dataOffset), n += 4), i & G.FIRST_SAMPLE_FLAGS_PRESENT && (r(t, this.offset + n, this.firstSampleFlags), n += 4);
                                            for (var a = 0; a < o; a++) {
                                                var s = this.samples[a];
                                                i & G.SAMPLE_DURATION_PRESENT && (r(t, this.offset + n, s.duration), n += 4), i & G.SAMPLE_SIZE_PRESENT && (r(t, this.offset + n, s.size), n += 4), i & G.SAMPLE_FLAGS_PRESENT && (r(t, this.offset + n, s.flags), n += 4), i & G.SAMPLE_COMPOSITION_TIME_OFFSET && (r(t, this.offset + n, s.compositionTimeOffset), n += 4)
                                            }
                                            return n
                                        }, t
                                    }(g);
                                    e.TrackRunBox = V;
                                    var K = function(e) {
                                        function r(r, n) {
                                            var o = e.call(this, "moof", t([r], n)) || this;
                                            return o.header = r, o.trafs = n, o
                                        }
                                        return i(r, e), r
                                    }(v);
                                    e.MovieFragmentBox = K;
                                    var J = function(e) {
                                        function t(t) {
                                            var r = e.call(this, "mdat") || this;
                                            return r.chunks = t, r
                                        }
                                        return i(t, e), t.prototype.layout = function(t) {
                                            var r = e.prototype.layout.call(this, t);
                                            return this.chunks.forEach(function(e) {
                                                r += e.length
                                            }), this.size = r
                                        }, t.prototype.write = function(t) {
                                            var r = this,
                                                n = e.prototype.write.call(this, t);
                                            return this.chunks.forEach(function(e) {
                                                t.set(e, r.offset + n), n += e.length
                                            }, this), n
                                        }, t
                                    }(_);
                                    e.MediaDataBox = J;
                                    var W = function(e) {
                                        function t(t, r) {
                                            var n = e.call(this, t) || this;
                                            return n.dataReferenceIndex = r, n
                                        }
                                        return i(t, e), t.prototype.layout = function(t) {
                                            return this.size = e.prototype.layout.call(this, t) + 8, this.size
                                        }, t.prototype.write = function(t) {
                                            var n = e.prototype.write.call(this, t);
                                            return r(t, this.offset + n, 0), r(t, this.offset + n + 4, this.dataReferenceIndex), n + 8
                                        }, t
                                    }(_);
                                    e.SampleEntry = W;
                                    var Y = function(e) {
                                        function t(t, r, n, o, i, a) {
                                            void 0 === n && (n = 2), void 0 === o && (o = 16), void 0 === i && (i = 44100), void 0 === a && (a = null);
                                            var s = e.call(this, t, r) || this;
                                            return s.channelCount = n, s.sampleSize = o, s.sampleRate = i, s.otherBoxes = a, s
                                        }
                                        return i(t, e), t.prototype.layout = function(t) {
                                            var r = e.prototype.layout.call(this, t) + 20;
                                            return this.otherBoxes && this.otherBoxes.forEach(function(e) {
                                                r += e.layout(t + r)
                                            }), this.size = r
                                        }, t.prototype.write = function(t) {
                                            var n = e.prototype.write.call(this, t);
                                            return r(t, this.offset + n, 0), r(t, this.offset + n + 4, 0), r(t, this.offset + n + 8, this.channelCount << 16 | this.sampleSize), r(t, this.offset + n + 12, 0), r(t, this.offset + n + 16, this.sampleRate << 16), n += 20, this.otherBoxes && this.otherBoxes.forEach(function(e) {
                                                n += e.write(t)
                                            }), n
                                        }, t
                                    }(W);
                                    e.AudioSampleEntry = Y, e.COLOR_NO_ALPHA_VIDEO_SAMPLE_DEPTH = 24;
                                    var Q = function(t) {
                                        function n(r, n, o, i, a, s, u, l, c, d) {
                                            void 0 === a && (a = ""), void 0 === s && (s = 72), void 0 === u && (u = 72), void 0 === l && (l = 1), void 0 === c && (c = e.COLOR_NO_ALPHA_VIDEO_SAMPLE_DEPTH), void 0 === d && (d = null);
                                            var p = t.call(this, r, n) || this;
                                            if (p.width = o, p.height = i, p.compressorName = a, p.horizResolution = s, p.vertResolution = u, p.frameCount = l, p.depth = c, p.otherBoxes = d, a.length > 31) throw new Error("invalid compressor name");
                                            return p
                                        }
                                        return i(n, t), n.prototype.layout = function(e) {
                                            var r = t.prototype.layout.call(this, e) + 16 + 12 + 4 + 2 + 32 + 2 + 2;
                                            return this.otherBoxes && this.otherBoxes.forEach(function(t) {
                                                r += t.layout(e + r)
                                            }), this.size = r
                                        }, n.prototype.write = function(e) {
                                            var n = t.prototype.write.call(this, e);
                                            r(e, this.offset + n, 0), r(e, this.offset + n + 4, 0), r(e, this.offset + n + 8, 0), r(e, this.offset + n + 12, 0), n += 16, r(e, this.offset + n, this.width << 16 | this.height), r(e, this.offset + n + 4, s(this.horizResolution)), r(e, this.offset + n + 8, s(this.vertResolution)), n += 12, r(e, this.offset + n, 0), r(e, this.offset + n + 4, this.frameCount << 16), n += 6, e[this.offset + n] = this.compressorName.length;
                                            for (var o = 0; o < 31; o++) e[this.offset + n + o + 1] = o < this.compressorName.length ? 127 & this.compressorName.charCodeAt(o) : 0;
                                            return n += 32, r(e, this.offset + n, this.depth << 16 | 65535), n += 4, this.otherBoxes && this.otherBoxes.forEach(function(t) {
                                                n += t.write(e)
                                            }), n
                                        }, n
                                    }(W);
                                    e.VideoSampleEntry = Q;
                                    var X = function(e) {
                                        function t(t, r) {
                                            var n = e.call(this, t) || this;
                                            return n.data = r, n
                                        }
                                        return i(t, e), t.prototype.layout = function(t) {
                                            return this.size = e.prototype.layout.call(this, t) + this.data.length, this.size
                                        }, t.prototype.write = function(t) {
                                            var r = e.prototype.write.call(this, t);
                                            return t.set(this.data, this.offset + r), r + this.data.length
                                        }, t
                                    }(_);
                                    e.RawTag = X
                                }(t = e.Iso || (e.Iso = {}))
                            }(t = e.MP4 || (e.MP4 = {}))
                        }(n || (n = {})), t.MP4Mux = n.MP4.MP4Mux
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(24),
                        o = r(23),
                        i = [n.WebCrypto, o.JSCrypto];
                    t.default = i
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(0),
                        o = r(21),
                        i = n.helpers.find;
                    t.DecryptorFactory = {
                        retrieveDecryptor: function(e) {
                            return i(o.default, function(t) {
                                return t.canDecrypt(e)
                            }) || null
                        }
                    }
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(0),
                        o = r(18),
                        i = n.helpers.Promise,
                        a = null;
                    t.JSCrypto = {
                        canDecrypt: function(e) {
                            return "AES-CBC" === e.cipher
                        },
                        decrypt: function(e, t) {
                            return a || (a = new o.AESDecryptor), a.expandKey(t.key.buffer), i.resolve(new Uint8Array(a.decrypt(e.buffer, 0, t.iv.buffer)))
                        }
                    }
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(0),
                        o = n.helpers.Promise,
                        i = window.crypto && window.crypto.subtle;
                    t.WebCrypto = {
                        canDecrypt: function(e) {
                            return !!i && window.isSecureContext && "AES-CBC" === e.cipher
                        },
                        decrypt: function(e, t) {
                            return new o(function(r, n) {
                                function o(e) {
                                    return i.importKey("raw", e, {
                                        name: "AES-CBC"
                                    }, !1, ["decrypt"])
                                }
                                o(t.key).then(function(r) {
                                    return i.decrypt({
                                        name: "AES-CBC",
                                        iv: t.iv
                                    }, r, e)
                                }).then(function(e) {
                                    return r(new Uint8Array(e))
                                }).catch(n)
                            })
                        }
                    }
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function e(e, t) {
                            this._playlist = e, this._url = t
                        }
                        return e.prototype.getPlaylist = function() {
                            return this._playlist
                        }, e.prototype.getUrl = function() {
                            return this._url
                        }, e
                    }();
                    t.Key = n
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function e(e) {
                            this._url = e
                        }
                        return e.prototype.getUrl = function() {
                            return this._url
                        }, e
                    }();
                    t.Playlist = n
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function e(e, t, r) {
                            this._playlist = e, this._url = t, this._sequenceNumber = r
                        }
                        return e.prototype.getPlaylist = function() {
                            return this._playlist
                        }, e.prototype.getUrl = function() {
                            return this._url
                        }, e.prototype.getSequenceNumber = function() {
                            return this._sequenceNumber
                        }, e
                    }();
                    t.Segment = n
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(0),
                        o = r(4),
                        i = n.helpers.deferred.buildDeferred,
                        a = o.helpers.timeRanges.buildTimeRanges,
                        s = n.helpers.Promise,
                        u = o.helpers.timeRanges.getCoverage,
                        l = n.logger.prefixLogger,
                        c = n.logger.noOpLogger,
                        d = /(MSIE )|(Trident\/)/,
                        p = n.helpers.browser.isSafari(),
                        h = 'audio/mp4; codecs="mp3"',
                        f = n.helpers.browser.getSafariVersion();
                    t.killedError = new Error("MSE killed.");
                    var _ = function() {
                        function e(e, t, r) {
                            var n = this.constructor;
                            if (void 0 === t && (t = c), void 0 === r && (r = !1), this._sourceBuffer = null, this._initialized = !1, this._initializeDeferred = i(), this._whenIdleDeferred = i(), this._error = null, this._dead = !1, this._pendingActions = [], this._currentAction = null, this._bufferEnd = 0, this._logger = l(t, "MSE"), this._onMediaSourceInit = this._onMediaSourceInit.bind(this), this._onMediaSourceError = this._onMediaSourceError.bind(this), this._onSourceBufferUpdateEnd = this._onSourceBufferUpdateEnd.bind(this), this._onSourceBufferError = this._onSourceBufferError.bind(this), !n.isSupported(e)) throw this._logger.error("Not supported."), new Error("Not supported.");
                            p && e === h && (e = "audio/mp4"), this._type = e, this._useSegmentsMode = r, this._mediaSource = new MediaSource, this._mediaSource.addEventListener("sourceopen", this._onMediaSourceInit, !1), this._mediaSource.addEventListener("error", this._onMediaSourceError, !1), this._url = URL.createObjectURL(this._mediaSource), this._logger.debug("Created URL.", this._url)
                        }
                        return e.isSupported = function(e) {
                            return !d.test(window.navigator.userAgent) && "MediaSource" in window && (!e || !(!p || e !== h) || !(f && f.major < 10 && "audio/mpeg" === e) && MediaSource.isTypeSupported(e))
                        }, e.prototype.whenInitialized = function() {
                            return this._initializeDeferred.promise
                        }, e.prototype.whenIdle = function() {
                            return this._whenIdleDeferred ? this._whenIdleDeferred.promise : s.resolve(void 0)
                        }, e.prototype.isIdle = function() {
                            return this._dead || !this._whenIdleDeferred
                        }, e.prototype.hasInitialized = function() {
                            return this._initialized
                        }, e.prototype.getError = function() {
                            return this._error
                        }, e.prototype.getUrl = function() {
                            return this._ensureNotDead(), this._url
                        }, e.prototype.getBuffered = function() {
                            return this._ensureNotDead(), this._sourceBuffer ? a(this._sourceBuffer.buffered) : []
                        }, e.prototype.append = function(e) {
                            this._ensureNotDead(), this._ensureInitialized(), this._logger.debug("append() called.");
                            var t = i();
                            return this._pendingActions.push({
                                type: "append",
                                data: e,
                                deferred: t
                            }), this._performNextAction(), t.promise
                        }, e.prototype.remove = function(e) {
                            if (0 === e.duration) throw new Error("Remove range must have a duration > 0.");
                            this._ensureNotDead(), this._ensureInitialized(), this._logger.debug("remove() called.", e);
                            var t = i();
                            return this._pendingActions.push({
                                type: "remove",
                                range: e,
                                deferred: t
                            }), this._performNextAction(), t.promise
                        }, e.prototype.kill = function() {
                            if (!this._dead) {
                                if (this._logger.debug("kill() called."), this._dead = !0, this._sourceBuffer) {
                                    this._sourceBuffer.removeEventListener("updateend", this._onSourceBufferUpdateEnd, !1), this._sourceBuffer.removeEventListener("error", this._onSourceBufferError, !1);
                                    try {
                                        this._mediaSource.removeSourceBuffer(this._sourceBuffer);
                                    } catch (e) {
                                        this._logger.error("Error from removeSourceBuffer()", e)
                                    }
                                }
                                this._mediaSource.removeEventListener("sourceopen", this._onMediaSourceInit, !1), this._mediaSource.removeEventListener("error", this._onMediaSourceError, !1), URL.revokeObjectURL(this._url);
                                var e = this._currentAction ? [this._currentAction] : [];
                                e = e.concat(this._pendingActions), e.forEach(function(e) {
                                    e.deferred.reject(t.killedError)
                                }), this._whenIdleDeferred || (this._whenIdleDeferred = i()), this._whenIdleDeferred.reject(t.killedError), this._initialized || this._initializeDeferred.reject(this._error || t.killedError), this._pendingActions.length = 0, this._logger.debug("Killed.")
                            }
                        }, e.prototype._ensureInitialized = function() {
                            if (!this._initialized) throw new Error("Not initialized yet.")
                        }, e.prototype._ensureNotDead = function() {
                            if (this._dead) throw new Error("MSE is dead.")
                        }, e.prototype._onMediaSourceInit = function() {
                            this._logger.debug("MSE initialized."), this._mediaSource.removeEventListener("sourceopen", this._onMediaSourceInit, !1);
                            try {
                                this._logger.debug("Creating source buffer.", this._type), this._sourceBuffer = this._mediaSource.addSourceBuffer(this._type), this._sourceBuffer.mode = this._useSegmentsMode ? "segments" : "sequence", this._logger.debug("Using append mode: " + this._sourceBuffer.mode), this._sourceBuffer.addEventListener("updateend", this._onSourceBufferUpdateEnd, !1), this._sourceBuffer.addEventListener("error", this._onSourceBufferError, !1)
                            } catch (e) {
                                this._handleError(e)
                            }
                            this._initializeDeferred.resolve(void 0), this._whenIdleDeferred.resolve(void 0), this._initialized = !0, this._performNextAction()
                        }, e.prototype._onMediaSourceError = function(e) {
                            this._handleError(e)
                        }, e.prototype._handleError = function(e) {
                            this._ensureNotDead(), this._logger.error("Error occurred.", e), this._error = e || new Error("Unknown error."), this.kill()
                        }, e.prototype._onSourceBufferUpdateEnd = function() {
                            var e = this._currentAction;
                            return this._logger.debug("Update ended.", this.getBuffered()), e ? "append" === e.type && u(this.getBuffered()).end <= this._bufferEnd ? void this._handleError(new Error("Buffer end point did not increase after an append.")) : (this._currentAction = null, e.deferred.resolve(void 0), void this._performNextAction()) : void this._handleError(new Error("No action in progress."))
                        }, e.prototype._onSourceBufferError = function(e) {
                            this._handleError(e)
                        }, e.prototype._performNextAction = function() {
                            var e = this._whenIdleDeferred;
                            if (!this._currentAction && this._sourceBuffer) {
                                var t = this._pendingActions.shift();
                                if (!t) return this._logger.debug("No more actions."), void(e && (this._whenIdleDeferred = null, e.resolve(void 0)));
                                switch (e || (this._whenIdleDeferred = i()), this._currentAction = t, this._logger.debug("Performing next action..."), t.type) {
                                    case "append":
                                        var r = u(this.getBuffered());
                                        try {
                                            if ("segments" === this._sourceBuffer.mode) {
                                                var n = r.end / 1e3;
                                                this._logger.debug("Setting timestampOffset because detected safari.", n), this._sourceBuffer.timestampOffset = n
                                            }
                                            this._logger.debug("Calling appendBuffer()."), this._bufferEnd = r.end, this._sourceBuffer.appendBuffer(t.data)
                                        } catch (e) {
                                            this._handleError(e)
                                        }
                                        break;
                                    case "remove":
                                        try {
                                            var o = t.range;
                                            this._logger.debug("Calling remove().", o.start, o.end), this._sourceBuffer.remove(o.start / 1e3, o.end / 1e3)
                                        } catch (e) {
                                            this._handleError(e)
                                        }
                                }
                            }
                        }, e
                    }();
                    t.MSE = _
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n, o = r(0),
                        i = o.helpers.find,
                        a = o.eventDispatcher.EventDispatcher,
                        s = o.helpers.abortableJob.abortedError,
                        u = o.helpers.abortableJob.AbortableJob,
                        l = o.logger.prefixLogger,
                        c = o.logger.noOpLogger;
                    ! function(e) {
                        e[e.RETRIEVING_SEGMENT = 0] = "RETRIEVING_SEGMENT", e[e.RETRIEVED_SEGMENT = 1] = "RETRIEVED_SEGMENT", e[e.RETRIEVING_DATA = 2] = "RETRIEVING_DATA", e[e.COMPLETE = 3] = "COMPLETE"
                    }(n || (n = {}));
                    var d = function() {
                        function e(e) {
                            this._onSegmentRequestQueued = new a, this._onSegmentRequestStart = new a, this._onSegmentRetrieved = new a, this._onSegmentRequestFailed = new a, this._onSegmentDecryptionStart = new a, this._onSegmentDecryptionEnd = new a, this._onSegmentTransmuxStart = new a, this._onSegmentTransmuxEnd = new a, this._onSegmentReady = new a, this._onError = new a, this._segments = [], this._retrievingSegment = null, this._timerId = null, this._dead = !1;
                            var t = e.playlist,
                                r = e.getPosition,
                                n = e.maxBufferLength,
                                o = e.cacheSize,
                                i = e.transmuxer,
                                s = e.logger,
                                u = void 0 === s ? c : s;
                            if (this._logger = l(u, "PlaylistSegmentRetriever"), t && !t.hasRetrieveCompleted()) throw new Error("Playlist retrieve has not completed.");
                            if (n < 0) throw new Error("Max buffer length must be > 0.");
                            if (o < 0) throw new Error("Cache size must be > 0.");
                            this.onSegmentRequestQueued = this._onSegmentRequestQueued.getHandle(), this.onSegmentRequestStart = this._onSegmentRequestStart.getHandle(), this.onSegmentRetrieved = this._onSegmentRetrieved.getHandle(), this.onSegmentRequestFailed = this._onSegmentRequestFailed.getHandle(), this.onSegmentDecryptionStart = this._onSegmentDecryptionStart.getHandle(), this.onSegmentDecryptionEnd = this._onSegmentDecryptionEnd.getHandle(), this.onSegmentTransmuxStart = this._onSegmentTransmuxStart.getHandle(), this.onSegmentTransmuxEnd = this._onSegmentTransmuxEnd.getHandle(), this.onSegmentReady = this._onSegmentReady.getHandle(), this.onError = this._onError.getHandle(), this._playlist = t, this._transmuxer = i, this._getPosition = r, this._maxBufferLength = n, this._cacheSize = o, this.update()
                        }
                        return e.prototype.updateMaxBufferLength = function(e) {
                            if (this._ensureNotDead(), e < 0) throw new Error("Max buffer length must be > 0.");
                            this._logger.debug("updateMaxBufferLength() called.", e), this._maxBufferLength = e, this.update()
                        }, e.prototype.updateCacheSize = function(e) {
                            if (this._ensureNotDead(), e < 0) throw new Error("Cache size must be > 0.");
                            this._logger.debug("updateCacheSize() called.", e), this._cacheSize = e, this.update()
                        }, e.prototype.getCacheSize = function() {
                            return this._cacheSize
                        }, e.prototype.getCacheUsage = function() {
                            return this._segments.reduce(function(e, t) {
                                return t.state === n.COMPLETE ? e + t.data.byteLength : e
                            }, 0)
                        }, e.prototype.switchPlaylist = function(e) {
                            if (this._ensureNotDead(), e && !e.hasRetrieveCompleted()) throw new Error("Playlist retrieve has not completed.");
                            this._logger.debug("switchPlaylist() called."), this._abortCurrentRetrieve(), this._playlist = e, this._segments = this._segments.filter(function(e) {
                                return e.state === n.COMPLETE
                            }), this.update()
                        }, e.prototype.getSegmentsWithData = function() {
                            return this._ensureNotDead(), this._segments.filter(function(e) {
                                return e.state === n.COMPLETE
                            }).map(function(e) {
                                if (e.state !== n.COMPLETE) throw new Error("Unexpected error.");
                                var t = e.segment,
                                    r = e.initData,
                                    o = e.data,
                                    i = e.eventRepresentation;
                                return {
                                    segment: t,
                                    initData: r,
                                    data: o,
                                    eventRepresentation: i
                                }
                            })
                        }, e.prototype.update = function() {
                            this._ensureNotDead(), this._timerId && (this._logger.debug("Cancelling update timer."), window.clearTimeout(this._timerId), this._timerId = null);
                            var e = this._getPosition(),
                                t = e;
                            this._segments.some(function(r) {
                                if (r.state !== n.COMPLETE) return !1;
                                var o = r.segment.getTimeRange();
                                return !(o.end < e) && (o.start >= t && !o.containsTime(t) || (t = o.end, !1))
                            });
                            var r = i(this._segments, function(e) {
                                if (e.state === n.RETRIEVED_SEGMENT || e.state === n.RETRIEVING_DATA) {
                                    var r = e.segment.getTimeRange();
                                    return r.containsTime(t)
                                }
                                return !1
                            });
                            return t >= e + this._maxBufferLength ? (this._abortCurrentRetrieve(), this._garbageCollect(e), void this._scheduleNextUpdate()) : (r ? this._retrieveSegmentData(r) : this._retrieveSegment(t), void this._garbageCollect(e))
                        }, e.prototype.kill = function() {
                            this._dead || (this._logger.debug("kill() called."), this._abortCurrentRetrieve(), this._dead = !0, this._timerId && (this._logger.debug("Cancelling update timer."), window.clearTimeout(this._timerId)), this._logger.debug("Killed."))
                        }, e.prototype._retrieveSegmentData = function(e) {
                            var t = this;
                            if (e.state !== n.RETRIEVED_SEGMENT && e.state !== n.RETRIEVING_DATA) throw new Error("Segment in incorrect state for data to be retrieved.");
                            var r = this._retrievingSegment;
                            if (!r || r.state !== n.RETRIEVING_DATA || e.segment !== r.segment) {
                                this._abortCurrentRetrieve();
                                var o = new u(function() {
                                    var r = !1,
                                        n = e.segment.retrieveData();
                                    t._logger.debug("Retrieving segment data...");
                                    var o = n.whenComplete().then(function(e) {
                                        var n = e.data,
                                            o = e.eventRepresentation;
                                        if (r) throw s;
                                        return t._logger.debug("Retrieved segment data."), t._onSegmentTransmuxStart.dispatch({
                                            segment: o
                                        }), t._transmuxer.transmux(n).then(function(e) {
                                            var n = e.data,
                                                i = e.initData;
                                            if (r) throw s;
                                            return t._onSegmentTransmuxEnd.dispatch({
                                                segment: o
                                            }), t._logger.debug("Transmuxed segment."), {
                                                data: n,
                                                initData: i,
                                                eventRepresentation: o
                                            }
                                        })
                                    });
                                    return {
                                        result: o,
                                        abort: function() {
                                            r = !0, n.abort()
                                        }
                                    }
                                }).run();
                                o.onCompletion(function(r) {
                                    var o = r.initData,
                                        i = r.data,
                                        a = r.eventRepresentation;
                                    t._retrievingSegment = null, t._segments.splice(t._segments.indexOf(e), 1, {
                                        state: n.COMPLETE,
                                        initData: o,
                                        data: i,
                                        eventRepresentation: a,
                                        segment: e.segment
                                    }), t._logger.debug("Segment retrieve completed.", a), t.update(), t._onSegmentReady.dispatch({
                                        segment: e.segment,
                                        initData: o,
                                        data: i,
                                        eventRepresentation: a
                                    })
                                }), o.onError(function(e) {
                                    e !== s && (t._logger.error("Error retrieving segment data.", e), t._scheduleNextUpdate(), t._onError.dispatch(e))
                                }), this._retrievingSegment = {
                                    state: n.RETRIEVING_DATA,
                                    dataRetrieveJob: o,
                                    segment: e.segment
                                }
                            }
                        }, e.prototype._retrieveSegment = function(e) {
                            var t = this,
                                r = this._retrievingSegment,
                                o = this._playlist,
                                i = o ? o.getSegmentIndexContainingTime(e) : null;
                            if (!r || r.state !== n.RETRIEVING_SEGMENT || r.segmentIndex !== i)
                                if (this._abortCurrentRetrieve(), null !== i && o) {
                                    var a = o.getSegment(i);
                                    this._logger.debug("Retrieving segment.", i), a.onCompletion(function(e) {
                                        t._logger.debug("Retrieved segment.", i), e.onSegmentRequestQueued.subscribe(t._onSegmentRequestQueued.dispatch), e.onSegmentRequestStart.subscribe(t._onSegmentRequestStart.dispatch), e.onSegmentRetrieved.subscribe(t._onSegmentRetrieved.dispatch), e.onSegmentRequestFailed.subscribe(t._onSegmentRequestFailed.dispatch), e.onSegmentDecryptionStart.subscribe(t._onSegmentDecryptionStart.dispatch), e.onSegmentDecryptionEnd.subscribe(t._onSegmentDecryptionEnd.dispatch), t._segments.splice(t._segments.indexOf(u), 1);
                                        var r = e.getTimeRange(),
                                            o = t._segments.length;
                                        t._segments.some(function(e, t) {
                                            return e.state !== n.RETRIEVING_SEGMENT && e.segment.getTimeRange().start > r.start && (o = t, !0)
                                        }), t._segments.splice(o, 0, {
                                            state: n.RETRIEVED_SEGMENT,
                                            segment: e
                                        }), t._retrievingSegment = null, t.update()
                                    }), a.onError(function(e) {
                                        e !== s && (t._logger.error("Error retrieving segment.", e), t._scheduleNextUpdate(), t._onError.dispatch(e))
                                    });
                                    var u = {
                                        state: n.RETRIEVING_SEGMENT,
                                        segmentIndex: i,
                                        segmentRetrieveJob: a
                                    };
                                    this._segments.push(u), this._retrievingSegment = u
                                } else this._scheduleNextUpdate()
                        }, e.prototype._abortCurrentRetrieve = function() {
                            var e = this._retrievingSegment;
                            e && (e.state === n.RETRIEVING_SEGMENT ? (this._logger.debug("Aborting segment retrieve job."), e.segmentRetrieveJob.abort()) : e.state === n.RETRIEVING_DATA && (this._logger.debug("Aborting segment data retrieve job."), e.dataRetrieveJob.abort()), this._retrievingSegment = null)
                        }, e.prototype._garbageCollect = function(e) {
                            var t = this._segments,
                                r = this._cacheSize,
                                o = this.getCacheUsage();
                            if (!(o <= r)) {
                                var i = e + this._maxBufferLength;
                                t.filter(function(t) {
                                    if (t.state !== n.COMPLETE) return !1;
                                    var r = t.segment.getTimeRange();
                                    return r.end <= e || r.start > i
                                }).map(function(t) {
                                    if (t.state !== n.COMPLETE) throw new Error("Unexpected error.");
                                    var r = t.segment.getTimeRange(),
                                        o = Math.abs(e - r.start);
                                    return {
                                        segment: t,
                                        distance: o,
                                        size: t.data.byteLength
                                    }
                                }).sort(function(e, t) {
                                    return t.distance - e.distance
                                }).some(function(e) {
                                    return o <= r || (t.splice(t.indexOf(e.segment), 1), o -= e.size, !1)
                                })
                            }
                        }, e.prototype._scheduleNextUpdate = function() {
                            var e = this;
                            this._timerId || (this._timerId = window.setTimeout(function() {
                                e._timerId = null, e.update()
                            }, 1e3))
                        }, e.prototype._ensureNotDead = function() {
                            if (this._dead) throw new Error("Playlist segment retriever has been killed.")
                        }, e
                    }();
                    t.PlaylistSegmentRetriever = d
                }, function(e, t, r) {
                    "use strict";

                    function n(e) {
                        return 0 === e.indexOf('"') && e.lastIndexOf('"') === e.length - 1 ? e.slice(1, -1) : e
                    }

                    function o(e) {
                        0 === e.indexOf("0x") && (e = e.substr(2));
                        var t = new Uint16Array(8);
                        if (e.length % 4 !== 0) throw new d.PlaylistParseError("Failed to parse IV (length is not multiple of 4).");
                        for (var r = 0; r < e.length; r += 4) {
                            var n = parseInt(e.substr(r, 4), 16);
                            if (isNaN(n)) throw new d.PlaylistParseError("Failed to parse hex number in IV string.");
                            t[r / 4] = n
                        }
                        return new Uint8Array(t)
                    }

                    function i(e) {
                        for (var t = new Uint8Array(16), r = 12; r < 16; r++) t[r] = e >> 8 * (15 - r) & 255;
                        return t
                    }

                    function a(e) {
                        return !(e >= 400 && e < 500)
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var s, u = r(0),
                        l = r(31),
                        c = r(3),
                        d = r(12),
                        p = r(13),
                        h = r(26),
                        f = r(25),
                        _ = u.helpers.abortableJob.AbortableJob,
                        g = u.helpers.deferred.buildDeferred,
                        y = u.helpers.cache.buildCache,
                        v = u.helpers.retry,
                        m = v.retry,
                        E = v.buildExponentialDelayCalculator,
                        b = u.helpers.Promise,
                        w = u.helpers.find,
                        P = u.helpers.url,
                        S = u.eventDispatcher.EventDispatcher,
                        R = u.logger.prefixLogger,
                        T = u.logger.noOpLogger,
                        A = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT(INF): *(\d+(?:\.\d+)?)(?:,(.*))?)|(?:(?!#)()(\S.+))|(?:#EXT-X-(BYTERANGE): *(\d+(?:@\d+(?:\.\d+)?)?)|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(PROGRAM-DATE-TIME):(.+))|(?:#EXT-X-(VERSION):(\d+))|(?:(#)(.*):(.*))|(?:(#)(.*)))(?:.*)\r?\n?/g,
                        M = /(.+?)=(.+?)(?:,|$)/g,
                        k = /^\d*(\.\d+)?$/;
                    ! function(e) {
                        e[e.NONE = 0] = "NONE", e[e.AES_128 = 1] = "AES_128", e[e.SAMPLE_AES = 2] = "SAMPLE_AES"
                    }(s || (s = {}));
                    var x;
                    ! function(e) {
                        e[e.VOD = 0] = "VOD", e[e.LIVE = 1] = "LIVE", e[e.EVENT = 2] = "EVENT"
                    }(x = t.PlaylistType || (t.PlaylistType = {}));
                    var D = function() {
                        function e(e) {
                            var t = e.url,
                                r = e.playlistLoader,
                                n = e.segmentLoader,
                                o = e.keyLoader,
                                i = void 0 === o ? null : o,
                                s = e.segmentFormat,
                                u = e.logger,
                                l = void 0 === u ? T : u,
                                d = e.delayCalculator,
                                p = void 0 === d ? E() : d,
                                f = e.keyDelayCalculator,
                                v = void 0 === f ? E() : f,
                                w = e.segmentDelayCalculator,
                                P = e.isPlaylistResponseCodeAcceptable,
                                A = void 0 === P ? function(e) {
                                    return 200 === e
                                } : P,
                                M = e.isPlaylistResponseCodeRetryable,
                                k = void 0 === M ? a : M,
                                x = e.isSegmentResponseCodeAcceptable,
                                D = void 0 === x ? function(e) {
                                    return 200 === e
                                } : x,
                                O = e.isSegmentResponseCodeRetryable,
                                C = void 0 === O ? a : O,
                                I = e.isKeyResponseCodeAcceptable,
                                L = void 0 === I ? function(e) {
                                    return 200 === e
                                } : I,
                                N = e.isKeyResponseCodeRetryable,
                                j = void 0 === N ? a : N,
                                F = this;
                            this._keyRetrievalJobsCache = y(), this._data = null, this._playlistEventRepresentation = null, this._onPlaylistRequestQueued = new S, this._onPlaylistRequestStart = new S, this._onPlaylistRetrieved = new S, this._onPlaylistRequestFailed = new S, this._onPlaylistParseStart = new S, this._onPlaylistParseEnd = new S, this._onKeyRequestQueued = new S, this._onKeyRequestStart = new S, this._onKeyRetrieved = new S, this._onKeyRequestFailed = new S, this._logger = R(l, "Playlist"), this.onPlaylistRequestQueued = this._onPlaylistRequestQueued.getHandle(), this.onPlaylistRequestStart = this._onPlaylistRequestStart.getHandle(), this.onPlaylistRetrieved = this._onPlaylistRetrieved.getHandle(), this.onPlaylistRequestFailed = this._onPlaylistRequestFailed.getHandle(), this.onPlaylistParseStart = this._onPlaylistParseStart.getHandle(), this.onPlaylistParseEnd = this._onPlaylistParseEnd.getHandle(), this.onKeyRequestQueued = this._onKeyRequestQueued.getHandle(), this.onKeyRequestStart = this._onKeyRequestStart.getHandle(), this.onKeyRetrieved = this._onKeyRetrieved.getHandle(), this.onKeyRequestFailed = this._onKeyRequestFailed.getHandle(), this._url = t, this._playlistLoader = r, this._segmentLoader = n, this._keyLoader = i, this._segmentFormat = s, this._delayCalculator = p, this._keyDelayCalculator = v, this._isPlaylistResponseCodeAcceptable = A, this._isPlaylistResponseCodeRetryable = k, this._isSegmentResponseCodeAcceptable = D, this._isSegmentResponseCodeRetryable = C, this._isKeyResponseCodeAcceptable = L, this._isKeyResponseCodeRetryable = j, this._segmentDelayCalculator = w, this._downloadAbortableJob = new _(function() {
                                var e = m(function() {
                                    return new _(function() {
                                        var e = new h.Playlist(t);
                                        F._onPlaylistRequestQueued.dispatch({
                                            playlist: e
                                        });
                                        var r = F._playlistLoader.request({
                                            url: t
                                        });
                                        r.whenRequestStarted.then(function() {
                                            F._onPlaylistRequestStart.dispatch({
                                                playlist: e
                                            })
                                        }), F._logger.debug("Requesting playlist.", t);
                                        var n = r.getResponse().then(function(r) {
                                            if (!r) return F._logger.warn("Playlist request timed out.", t), F._onPlaylistRequestFailed.dispatch({
                                                playlist: e,
                                                statusCode: null
                                            }), {
                                                success: !1
                                            };
                                            var n = r.statusCode;
                                            if (F._isPlaylistResponseCodeAcceptable(n)) {
                                                var o = r.data;
                                                return o ? (F._logger.debug("Got playlist response.", t, n), F._onPlaylistRetrieved.dispatch({
                                                    playlist: e,
                                                    statusCode: n
                                                }), {
                                                    success: !0,
                                                    result: {
                                                        playlistContent: o,
                                                        eventRepresentation: e
                                                    }
                                                }) : (F._logger.warn("Playlist response contained no data.", t, n), F._onPlaylistRequestFailed.dispatch({
                                                    playlist: e,
                                                    statusCode: n
                                                }), {
                                                    success: !1
                                                })
                                            }
                                            return F._isPlaylistResponseCodeRetryable(n) ? (F._logger.debug("Playlist response code was not acceptable. Will retry.", t, n), F._onPlaylistRequestFailed.dispatch({
                                                playlist: e,
                                                statusCode: n
                                            }), {
                                                success: !1
                                            }) : (F._logger.debug("Playlist response code was not acceptable.", t, n), F._onPlaylistRequestFailed.dispatch({
                                                playlist: e,
                                                statusCode: n
                                            }), b.reject(new c.UnacceptableResponseStatusCodeError(n)))
                                        });
                                        return {
                                            result: n,
                                            abort: function() {
                                                F._logger.debug("Aborting playlist request.", t), r.abort(), F._onPlaylistRequestFailed.dispatch({
                                                    playlist: e,
                                                    aborted: !0
                                                })
                                            }
                                        }
                                    })
                                }, p);
                                return {
                                    result: e.whenComplete(),
                                    abort: function() {
                                        return e.abort()
                                    }
                                }
                            }), this._retrieveJob = new _(function() {
                                var e = F._downloadAbortableJob.run(),
                                    t = g();
                                return e.onCompletion(function(e) {
                                    var r = e.playlistContent,
                                        n = e.eventRepresentation;
                                    F._onPlaylistParseStart.dispatch({
                                        playlist: n
                                    });
                                    try {
                                        F._data = F._parsePlaylist(r)
                                    } catch (e) {
                                        return F._logger.error("Error when parsing playlist.", e, r), void t.reject(e)
                                    }
                                    F._playlistEventRepresentation = n, F._onPlaylistParseEnd.dispatch({
                                        playlist: n
                                    }), t.resolve(void 0)
                                }), e.onError(t.reject), {
                                    result: t.promise,
                                    abort: function() {
                                        return e.abort()
                                    }
                                }
                            })
                        }
                        return e.prototype.retrieve = function() {
                            return this._retrieveJob.run()
                        }, e.prototype.hasRetrieveCompleted = function() {
                            return !!this._data
                        }, e.prototype.getStartingSequenceNumber = function() {
                            if (!this._data) throw new Error("Not loaded yet.");
                            return this._data.mediaSequence
                        }, e.prototype.getType = function() {
                            if (!this._data) throw new Error("Not loaded yet.");
                            return this._data.type
                        }, e.prototype.getTargetDuration = function() {
                            if (!this._data) throw new Error("Not loaded yet.");
                            return this._data.targetDuration
                        }, e.prototype.getTotalDuration = function() {
                            if (!this._data) throw new Error("Not loaded yet.");
                            return this._data.totalDuration
                        }, e.prototype.hasEnded = function() {
                            if (!this._data) throw new Error("Not loaded yet.");
                            return this._data.ended
                        }, e.prototype.getSegmentCount = function() {
                            if (!this._data) throw new Error("Not loaded yet.");
                            return this._data.segments.length
                        }, e.prototype.getSegment = function(e) {
                            return this.getSegments(e, e + 1)[0]
                        }, e.prototype.getSegments = function(e, t) {
                            var r = this,
                                n = this._data;
                            if (!n) throw new Error("Not loaded yet.");
                            var o = n.mediaSequence;
                            void 0 === e && (e = o);
                            var i = n.segments.length;
                            if (void 0 === t && (t = o + i), e < o) throw new Error("Start index must be >= the first segment index.");
                            if (t < o) throw new Error("End index must be >= the first segment index.");
                            if (t > o + i) throw new Error("End index cannot be > than the index of the last segment.");
                            if (t < e) throw new Error("End index must be >= start index.");
                            return n.segments.slice(e - o, t - o).map(function(t, n) {
                                var o = new _(function() {
                                    var o = t.encryptionData,
                                        i = e + n,
                                        a = r._playlistEventRepresentation;
                                    if (!a) throw new Error("Playlist event representation should exist.");
                                    var s = r._buildEncryptionConfig(o, i),
                                        u = s.whenComplete().then(function(e) {
                                            return new l.Segment({
                                                url: t.url,
                                                index: i,
                                                timeRange: t.timeRange,
                                                format: r._segmentFormat,
                                                loader: r._segmentLoader,
                                                playlistEventRepresentation: a,
                                                logger: r._logger,
                                                delayCalculator: r._segmentDelayCalculator,
                                                isResponseCodeAcceptable: r._isSegmentResponseCodeAcceptable,
                                                isResponseCodeRetryable: r._isSegmentResponseCodeRetryable,
                                                encryptionConfig: e
                                            })
                                        });
                                    return {
                                        result: u,
                                        abort: function() {
                                            return s.abort()
                                        }
                                    }
                                });
                                return o.run()
                            })
                        }, e.prototype.getSegmentIndexContainingTime = function(e) {
                            var t = this._data;
                            if (!t) throw new Error("Not loaded yet.");
                            var r = w(t.segments, function(t) {
                                return t.timeRange.containsTime(e)
                            });
                            return r ? t.mediaSequence + t.segments.indexOf(r) : null
                        }, e.prototype._buildEncryptionConfig = function(e, t) {
                            var r = this,
                                n = new _(function() {
                                    if (e.method === s.NONE) return {
                                        result: b.resolve(void 0)
                                    };
                                    if (e.method !== s.AES_128) return r._logger.error("Unsupported encryption method.", e.method), {
                                        result: b.reject(new p.UnsupportedEncryptionError)
                                    };
                                    var n = r._keyLoader;
                                    if (!n) return {
                                        result: b.reject(new Error("Encryption method not supported as no key loader provided."))
                                    };
                                    var o = r._retrieveKey(e.keyUrl),
                                        a = o.whenComplete().then(function(r) {
                                            return {
                                                cipher: "AES-CBC",
                                                key: r,
                                                iv: e.iv || i(t)
                                            }
                                        });
                                    return {
                                        result: a,
                                        abort: function() {
                                            return o.abort()
                                        }
                                    }
                                });
                            return n.run()
                        }, e.prototype._retrieveKey = function(e) {
                            var t = this,
                                r = this._keyLoader;
                            if (!r) throw new Error("No key loader.");
                            var n = this._keyRetrievalJobsCache.get(e);
                            if (n) this._logger.debug("Key retrieval already in progress.", e);
                            else {
                                var o = this._playlistEventRepresentation;
                                if (!o) throw new Error("Playlist event representation should exist.");
                                n = new _(function() {
                                    var n = m(function() {
                                        return new _(function() {
                                            var n = new f.Key(o, e);
                                            t._onKeyRequestQueued.dispatch({
                                                key: n
                                            });
                                            var i = r.request({
                                                url: e
                                            });
                                            i.whenRequestStarted.then(function() {
                                                return t._onKeyRequestStart.dispatch({
                                                    key: n
                                                })
                                            }), t._logger.debug("Retrieving key.", e);
                                            var a = i.getResponse().then(function(r) {
                                                if (!r) return t._logger.warn("Key request timed out.", e), t._onKeyRequestFailed.dispatch({
                                                    key: n,
                                                    statusCode: null
                                                }), {
                                                    success: !1
                                                };
                                                var o = r.statusCode;
                                                if (t._isKeyResponseCodeAcceptable(o)) {
                                                    var i = r.data;
                                                    return i ? (t._logger.debug("Got key response.", e, o), t._onKeyRetrieved.dispatch({
                                                        key: n,
                                                        statusCode: o
                                                    }), {
                                                        success: !0,
                                                        result: new Uint8Array(i)
                                                    }) : (t._logger.warn("Key response contained no data.", e, o), t._onKeyRequestFailed.dispatch({
                                                        key: n,
                                                        statusCode: o
                                                    }), {
                                                        success: !1
                                                    })
                                                }
                                                return t._isKeyResponseCodeRetryable(o) ? (t._logger.warn("Key response code was not acceptable. Will retry.", e, o), t._onKeyRequestFailed.dispatch({
                                                    key: n,
                                                    statusCode: o
                                                }), {
                                                    success: !1
                                                }) : (t._logger.warn("Key response code was not acceptable.", e, o), t._onKeyRequestFailed.dispatch({
                                                    key: n,
                                                    statusCode: o
                                                }), b.reject(new c.UnacceptableResponseStatusCodeError(o)))
                                            });
                                            return {
                                                result: a,
                                                abort: function() {
                                                    t._logger.debug("Aborting key request.", e), i.abort(), t._onKeyRequestFailed.dispatch({
                                                        key: n,
                                                        aborted: !0
                                                    })
                                                }
                                            }
                                        })
                                    }, t._keyDelayCalculator);
                                    return {
                                        result: n.whenComplete(),
                                        abort: function() {
                                            return n.abort()
                                        }
                                    }
                                }), this._keyRetrievalJobsCache.set(e, n)
                            }
                            return n.run()
                        }, e.prototype._parsePlaylist = function(e) {
                            var t = {
                                    version: null,
                                    type: x.LIVE,
                                    mediaSequence: null,
                                    targetDuration: null,
                                    totalDuration: 0,
                                    ended: !1
                                },
                                r = [],
                                i = {
                                    method: s.NONE
                                },
                                a = null;
                            A.lastIndex = 0;
                            for (var l, c = 0, p = !1; null !== (l = A.exec(e));) {
                                var h = l.filter(function(e, t) {
                                        return 0 !== t && void 0 !== e
                                    }).map(function(e, t) {
                                        return 0 === t ? e.toLowerCase() : e
                                    }),
                                    f = h[0],
                                    _ = h.slice(1);
                                if (0 === c) {
                                    if ("extm3u" !== f) throw new d.PlaylistParseError("First line did not contain EXTM3U tag.")
                                } else {
                                    if (!p) switch (f) {
                                        case "playlist-type":
                                            if (t.type !== x.LIVE) throw new d.PlaylistParseError("Already have playlist type.");
                                            switch (_[0].toLowerCase()) {
                                                case "vod":
                                                    t.type = x.VOD;
                                                    break;
                                                case "event":
                                                    t.type = x.EVENT;
                                                    break;
                                                default:
                                                    throw new d.PlaylistParseError("Invalid playlist type.")
                                            }
                                            break;
                                        case "media-sequence":
                                            if (null !== t.mediaSequence) throw new d.PlaylistParseError("Already have media sequence number.");
                                            var g = parseInt(_[0], 10);
                                            if (g + "" !== _[0]) throw new d.PlaylistParseError("Invalid media sequence number.");
                                            t.mediaSequence = g;
                                            break;
                                        case "targetduration":
                                            if (null !== t.targetDuration) throw new d.PlaylistParseError("Already have target duration.");
                                            var y = parseInt(_[0], 10);
                                            if (y + "" !== _[0] || y < 0) throw new d.PlaylistParseError("Invalid target duration.");
                                            t.targetDuration = 1e3 * y;
                                            break;
                                        case "version":
                                            if (null !== t.version) throw new d.PlaylistParseError("Already have version.");
                                            var v = parseInt(_[0], 10);
                                            if (v + "" !== _[0]) throw new d.PlaylistParseError("Invalid version.");
                                            if (v < 3) throw new d.PlaylistParseError("HLS version must be 3 or above.");
                                            t.version = v;
                                            break;
                                        default:
                                            p = !0
                                    }
                                    if (p) switch (f) {
                                        case "key":
                                            M.lastIndex = 0;
                                            for (var m = void 0, E = null, b = null, w = null; null !== (m = M.exec(_[0]));) {
                                                if (3 !== m.length) throw new d.PlaylistParseError("Error parsing key attributes.");
                                                var S = m[1].trim().toLowerCase(),
                                                    R = n(m[2].trim());
                                                switch (S) {
                                                    case "method":
                                                        E = R.toLowerCase();
                                                        break;
                                                    case "uri":
                                                        b = P.buildAbsoluteUrl(this._url, R);
                                                        break;
                                                    case "iv":
                                                        w = o(R);
                                                        break;
                                                    default:
                                                        this._logger.warn("Unknown attribute when parsing KEY line.", S)
                                                }
                                            }
                                            if (!E) throw new d.PlaylistParseError("Missing encryption method.");
                                            if (!b && "none" !== E) throw new d.PlaylistParseError("Missing key url.");
                                            switch (E) {
                                                case "none":
                                                    if (null !== b) throw new d.PlaylistParseError("Key url not allowed.");
                                                    if (null !== w) throw new d.PlaylistParseError("IV not allowed.");
                                                    i = {
                                                        method: s.NONE
                                                    };
                                                    break;
                                                case "aes-128":
                                                    if (!b) throw new d.PlaylistParseError("Key url required.");
                                                    i = {
                                                        method: s.AES_128,
                                                        keyUrl: b,
                                                        iv: w
                                                    };
                                                    break;
                                                case "sample-aes":
                                                    if (!b) throw new d.PlaylistParseError("Key url required.");
                                                    i = {
                                                        method: s.SAMPLE_AES,
                                                        keyUrl: b,
                                                        iv: w
                                                    };
                                                    break;
                                                default:
                                                    throw new d.PlaylistParseError("Unknown encryption method.")
                                            }
                                            break;
                                        case "inf":
                                            if (!_[0].match(k)) throw new d.PlaylistParseError("Invalid segment duration.");
                                            a = 1e3 * parseFloat(_[0]);
                                            break;
                                        case "":
                                            if (t.ended) throw new d.PlaylistParseError("Already received ENDLIST tag.");
                                            if (null === a) throw new d.PlaylistParseError("Not received segment duration.");
                                            var T = P.buildAbsoluteUrl(this._url, _[0]);
                                            r.push({
                                                url: T,
                                                timeRange: new u.TimeRange(t.totalDuration, a),
                                                encryptionData: i
                                            }), t.totalDuration += a, a = null;
                                            break;
                                        case "endlist":
                                            if (t.ended) throw new d.PlaylistParseError("Already had ENDLIST tag.");
                                            t.ended = !0;
                                            break;
                                        default:
                                            this._logger.warn("Unable to parse playlist line.", f)
                                    }
                                }
                                c++
                            }
                            var D = t.version,
                                O = t.type,
                                C = t.mediaSequence,
                                I = t.targetDuration,
                                L = t.ended,
                                N = t.totalDuration;
                            if (null === D) throw new d.PlaylistParseError("Missing version.");
                            if (null === I) throw new d.PlaylistParseError("Missing target duration.");
                            if (L && O === x.LIVE) throw new d.PlaylistParseError("Cannot be ended if type is LIVE.");
                            if (!L && O === x.VOD) throw new d.PlaylistParseError("Must be ended if type is VOD.");
                            return null === C && (C = 0), {
                                version: D,
                                type: O,
                                mediaSequence: C,
                                targetDuration: I,
                                totalDuration: N,
                                ended: L,
                                segments: r
                            }
                        }, e
                    }();
                    t.Playlist = D
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(0),
                        o = r(22),
                        i = r(3),
                        a = r(11),
                        s = r(27),
                        u = n.helpers.abortableJob.AbortableJob,
                        l = n.helpers.retry,
                        c = l.retry,
                        d = l.buildExponentialDelayCalculator,
                        p = n.helpers.Promise,
                        h = n.eventDispatcher.EventDispatcher,
                        f = n.logger.prefixLogger,
                        _ = n.logger.noOpLogger,
                        g = function() {
                            function e(e) {
                                var t = e.url,
                                    r = e.index,
                                    n = e.timeRange,
                                    o = e.encryptionConfig,
                                    a = e.format,
                                    l = e.loader,
                                    g = e.playlistEventRepresentation,
                                    y = e.logger,
                                    v = void 0 === y ? _ : y,
                                    m = e.delayCalculator,
                                    E = void 0 === m ? d() : m,
                                    b = e.isResponseCodeAcceptable,
                                    w = void 0 === b ? function(e) {
                                        return 200 === e
                                    } : b,
                                    P = e.isResponseCodeRetryable,
                                    S = void 0 === P ? function(e) {
                                        return !(e >= 400 && e < 500)
                                    } : P,
                                    R = this;
                                this._onSegmentRequestQueued = new h, this._onSegmentRequestStart = new h, this._onSegmentRetrieved = new h, this._onSegmentRequestFailed = new h, this._onSegmentDecryptionStart = new h, this._onSegmentDecryptionEnd = new h, this._logger = f(v, "Segment"), this.onSegmentRequestQueued = this._onSegmentRequestQueued.getHandle(), this.onSegmentRequestStart = this._onSegmentRequestStart.getHandle(), this.onSegmentRetrieved = this._onSegmentRetrieved.getHandle(), this.onSegmentRequestFailed = this._onSegmentRequestFailed.getHandle(), this.onSegmentDecryptionStart = this._onSegmentDecryptionStart.getHandle(), this.onSegmentDecryptionEnd = this._onSegmentDecryptionEnd.getHandle(), this._timeRange = n, this._encryptionConfig = o || null, this._format = a, this._loader = l, this._isResponseCodeAcceptable = w, this._isResponseCodeRetryable = S, this._downloadAbortableJob = new u(function() {
                                    var e = c(function() {
                                        return new u(function() {
                                            var e = new s.Segment(g, t, r);
                                            R._onSegmentRequestQueued.dispatch({
                                                segment: e
                                            });
                                            var n = R._loader.request({
                                                url: t
                                            });
                                            n.whenRequestStarted.then(function() {
                                                return R._onSegmentRequestStart.dispatch({
                                                    segment: e
                                                })
                                            }), R._logger.debug("Requesting segment.", t);
                                            var o = n.getResponse().then(function(r) {
                                                if (!r) return R._logger.warn("Segment request timed out.", t), R._onSegmentRequestFailed.dispatch({
                                                    segment: e,
                                                    statusCode: null
                                                }), {
                                                    success: !1
                                                };
                                                var n = r.statusCode;
                                                if (R._isResponseCodeAcceptable(n)) {
                                                    var o = r.data;
                                                    return o ? (R._logger.debug("Got segment response.", t, n), R._onSegmentRetrieved.dispatch({
                                                        segment: e,
                                                        statusCode: n
                                                    }), {
                                                        success: !0,
                                                        result: {
                                                            data: new Uint8Array(o),
                                                            eventRepresentation: e
                                                        }
                                                    }) : (R._logger.warn("Segment response contained no data.", t, n), R._onSegmentRequestFailed.dispatch({
                                                        segment: e,
                                                        statusCode: n
                                                    }), {
                                                        success: !1
                                                    })
                                                }
                                                return R._isResponseCodeRetryable(n) ? (R._logger.debug("Segment response code was not acceptable. Will retry.", t, n), R._onSegmentRequestFailed.dispatch({
                                                    segment: e,
                                                    statusCode: n
                                                }), {
                                                    success: !1
                                                }) : (R._logger.debug("Segment response code was not acceptable.", t, n), R._onSegmentRequestFailed.dispatch({
                                                    segment: e,
                                                    statusCode: n
                                                }), p.reject(new i.UnacceptableResponseStatusCodeError(n)))
                                            });
                                            return {
                                                result: o,
                                                abort: function() {
                                                    R._logger.debug("Aborting segment request.", t), n.abort(), R._onSegmentRequestFailed.dispatch({
                                                        segment: e,
                                                        aborted: !0
                                                    })
                                                }
                                            }
                                        })
                                    }, E);
                                    return {
                                        result: e.whenComplete(),
                                        abort: function() {
                                            return e.abort()
                                        }
                                    }
                                }), this._retrieveAbortableJob = new u(function() {
                                    var e = R._downloadAbortableJob.run(),
                                        t = e.whenComplete().then(function(e) {
                                            var t = e.data,
                                                r = e.eventRepresentation;
                                            return R.decrypt(t, r).then(function(e) {
                                                return {
                                                    data: e,
                                                    eventRepresentation: r
                                                }
                                            })
                                        });
                                    return {
                                        result: t,
                                        abort: function() {
                                            e.abort()
                                        }
                                    }
                                })
                            }
                            return e.prototype.getTimeRange = function() {
                                return this._timeRange
                            }, e.prototype.retrieveData = function() {
                                return this._retrieveAbortableJob.run()
                            }, e.prototype.decrypt = function(e, t) {
                                var r = this,
                                    n = this._encryptionConfig;
                                if (!n) return p.resolve(e);
                                this._logger.info("Finding a decryptor...");
                                var i = o.DecryptorFactory.retrieveDecryptor(n);
                                if (!i) return this._logger.error("Could not find a decryptor."), p.reject(new a.NoDecryptorError);
                                this._logger.info("Decryptor found."), this._onSegmentDecryptionStart.dispatch({
                                    segment: t
                                });
                                var s = i.decrypt(e, n);
                                return s.then(function() {
                                    r._logger.debug("Decrypted."), r._onSegmentDecryptionEnd.dispatch({
                                        segment: t
                                    })
                                }), s
                            }, e
                        }();
                    t.Segment = g
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(0),
                        o = r(4),
                        i = n.helpers.Promise,
                        a = n.eventDispatcher.EventDispatcher,
                        s = n.logger.prefixLogger,
                        u = n.logger.noOpLogger,
                        l = o.helpers.timeRanges.getCoverage,
                        c = 7e3,
                        d = function() {
                            function e(e, t, r, n, o) {
                                void 0 === o && (o = u);
                                var i = this;
                                this._onAppendQueued = new a, this._onAppendEnd = new a, this._updateTimerId = null, this._waitingForData = !1, this._started = !1, this._resettingPromise = null, this._error = null, this._logger = s(o, "SimpleMSE"), this.onAppendQueued = this._onAppendQueued.getHandle(), this.onAppendEnd = this._onAppendEnd.getHandle(), this._mse = e, this._getNextSegmentData = t, this._getPosition = r, this._onError = n, e.whenInitialized().then(function() {
                                    !i._error && i._started && (i._logger.debug("MSE initialized. Preparing to update."), i._prepareUpdate())
                                }).catch(function(e) {
                                    i._error || (i._logger.error("Error when waiting for MSE to initialize.", e), i._handleError(e || new Error("Error waiting for MSE to initialize.")))
                                })
                            }
                            return e.prototype.start = function() {
                                if (this._checkNotErrored(), this._resettingPromise) throw new Error("start() is not allowed whilst a reset is in progress.");
                                if (this._started) throw new Error("Already started. reset() first.");
                                this._logger.debug("start() called."), this._started = !0, this._prepareUpdate()
                            }, e.prototype.kill = function() {
                                this._error || (this._logger.debug("kill() called."), this._updateTimerId && (this._logger.debug("Clearing update timer."), window.clearTimeout(this._updateTimerId), this._updateTimerId = null), this._error = new Error("Killed."), this._logger.debug("Killed."))
                            }, e.prototype.reset = function() {
                                var e = this;
                                if (this._checkNotErrored(), this._logger.debug("reset() called."), this._resettingPromise) return this._logger.debug("Reset already in progress."), this._resettingPromise;
                                if (!this._started) return this._logger.debug("Nothing to do to, already reset."), i.resolve();
                                var t = this._mse;
                                return this._waitingForData = !1, this._started = !1, this._updateTimerId && (this._logger.debug("Claring update timer."), window.clearTimeout(this._updateTimerId), this._updateTimerId = null), this._logger.debug("Waiting to clear MSE buffer..."), this._resettingPromise = t.whenIdle().then(function() {
                                    e._logger.debug("Clearing MSE buffer.");
                                    var r = t.getBuffered(),
                                        n = l(r);
                                    if (n.duration > 0) return t.remove(n)
                                }).then(function() {
                                    e._logger.debug("MSE buffer cleared."), e._resettingPromise = null
                                }).catch(function(t) {
                                    if (!e._error) {
                                        e._logger.error("Error resetting MSE.", t);
                                        var r = t || new Error("Error resetting MSE.");
                                        throw e._handleError(r), r
                                    }
                                })
                            }, e.prototype.waitingForSegmentData = function() {
                                return this._checkNotErrored(), this._waitingForData
                            }, e.prototype.provideNextSegmentData = function(e) {
                                if (this._checkNotErrored(), !this._waitingForData) throw new Error("Not waiting for data.");
                                this._logger.debug("Segment data provided."), this._waitingForData = !1, this._update(e)
                            }, e.prototype._prepareUpdate = function() {
                                if (!this._updateTimerId) {
                                    var e = this._mse;
                                    if (e.hasInitialized()) {
                                        var t = l(e.getBuffered());
                                        if (t.end <= this._getPosition() + c) {
                                            this._logger.debug("Requesting next segment data.");
                                            var r = this._getNextSegmentData();
                                            r ? (this._logger.debug("Got segment data."), this._update(r)) : (this._logger.debug("Did not get any data."), this._waitingForData = !0)
                                        } else this._scheduleUpdate()
                                    }
                                }
                            }, e.prototype._update = function(e) {
                                var t = this;
                                this._logger.debug("Updating...");
                                var r = this._mse;
                                this._onAppendQueued.dispatch({
                                    segment: e.eventRepresentation
                                }), this._logger.debug("Appending..."), r.append(e.data).then(function() {
                                    t._logger.debug("Appended."), t._onAppendEnd.dispatch({
                                        segment: e.eventRepresentation
                                    }), t._resettingPromise || t._scheduleUpdate()
                                }).catch(function(e) {
                                    t._error || (t._logger.error("Error updating MSE.", e), t._handleError(e || new Error("Error updating MSE.")))
                                })
                            }, e.prototype._scheduleUpdate = function() {
                                var e = this;
                                this._updateTimerId = window.setTimeout(function() {
                                    e._updateTimerId = null, e._prepareUpdate()
                                }, 500)
                            }, e.prototype._checkNotErrored = function() {
                                if (this._error) throw this._error
                            }, e.prototype._handleError = function(e) {
                                this._error || (this._error = e, this._onError(e))
                            }, e
                        }();
                    t.SimpleMSE = d
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(34),
                        o = r(14),
                        i = [n.PassThrough, o.MP3ToMP4];
                    t.default = i
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(0),
                        o = n.helpers.Promise;
                    t.PassThrough = {
                        getInputFormat: function() {
                            return {}
                        },
                        getOutputFormat: function() {
                            return {}
                        },
                        transmux: function(e) {
                            return o.resolve({
                                data: e
                            })
                        }
                    }
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(33);
                    t.TransmuxerFactory = {
                        retrieveTransmuxers: function(e, t) {
                            return n.default.filter(function(r) {
                                var n = r.getInputFormat(),
                                    o = r.getOutputFormat();
                                return !(e && (n.mimeType && e.mimeType && e.mimeType !== n.mimeType || n.audioCodec && e.audioCodec && e.audioCodec.id !== n.audioCodec.id || n.videoCodec && e.videoCodec && e.videoCodec.id !== n.videoCodec.id) || t && (o.mimeType && t.mimeType && t.mimeType !== o.mimeType || o.audioCodec && t.audioCodec && t.audioCodec.id !== o.audioCodec.id || o.videoCodec && t.videoCodec && t.videoCodec.id !== o.videoCodec.id))
                            })
                        },
                        retrieveTransmuxer: function(e, r) {
                            return t.TransmuxerFactory.retrieveTransmuxers(e, r)[0] || null
                        }
                    }
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.version = "7.0.5", t.buildNumber = 790;
                    var n = r(16);
                    t.HLSMSEPlayer = n.HLSMSEPlayer;
                    var o = r(15);
                    t.errors = o.errors;
                    var i = r(17);
                    t.retrievalErrors = i.retrievalErrors
                }])
            })
        }, function(e, t, r) {
            ! function(t, n) {
                e.exports = n(r(2))
            }(this, function(e) {
                return function(e) {
                    function t(n) {
                        if (r[n]) return r[n].exports;
                        var o = r[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        };
                        return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                    }
                    var r = {};
                    return t.m = e, t.c = r, t.i = function(e) {
                        return e
                    }, t.d = function(e, r, n) {
                        t.o(e, r) || Object.defineProperty(e, r, {
                            configurable: !1,
                            enumerable: !0,
                            get: n
                        })
                    }, t.n = function(e) {
                        var r = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return t.d(r, "a", r), r
                    }, t.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, t.p = "", t(t.s = 8)
                }([function(t, r) {
                    t.exports = e
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(0),
                        i = function(e) {
                            function t() {
                                return e.call(this, "An unrecoverable error occurred whilst decoding.") || this
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "HTML5_PLAYER.DECODE_ERROR"
                            }, t
                        }(o.errors.PlayerFatalError);
                    t.DecodeError = i
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(0),
                        i = function(e) {
                            function t() {
                                return e.call(this, "An unrecoverable network error occurred.") || this
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "HTML5_PLAYER.NETWORK_ERROR"
                            }, t
                        }(o.errors.PlayerFatalError);
                    t.NetworkError = i
                }, function(e, t, r) {
                    "use strict";

                    function n(e) {
                        return e.slice(0).sort(function(e, t) {
                            return e.start - t.start
                        }).reduce(function(e, t, r) {
                            var n = e.length - 1;
                            return r > 0 && e[n].end >= t.start ? e[n].end = t.end : e.push(t), e
                        }, [])
                    }

                    function o(e) {
                        for (var t = [], r = e.length, o = 0; o < r; o++) t.push({
                            end: 1e3 * e.end(o),
                            start: 1e3 * e.start(o)
                        });
                        return n(t).map(function(e) {
                            return new u.TimeRange(e.start, e.end - e.start)
                        })
                    }

                    function i(e, t) {
                        return t.some(function(t) {
                            return t.containsTime(e)
                        })
                    }

                    function a(e) {
                        return n(e.map(function(e) {
                            return {
                                start: e.start,
                                end: e.end
                            }
                        })).map(function(e) {
                            return new u.TimeRange(e.start, e.end - e.start)
                        })
                    }

                    function s(e) {
                        if (0 === e.length) return new u.TimeRange(0, 0);
                        var t = 1 / 0,
                            r = 0;
                        return e.forEach(function(e) {
                            e.start < t && (t = e.start), e.end > r && (r = e.end)
                        }), new u.TimeRange(t, r - t)
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var u = r(0);
                    t.normalizeRawTimeRanges = n, t.buildTimeRanges = o, t.containsTime = i, t.normalizeTimeRanges = a, t.getCoverage = s
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n, o = r(1),
                        i = r(2);
                    ! function(e) {
                        e.DecodeError = o.DecodeError, e.NetworkError = i.NetworkError
                    }(n = t.errors || (t.errors = {}))
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n, o = r(3);
                    ! function(e) {
                        var t;
                        ! function(e) {
                            e.buildTimeRanges = o.buildTimeRanges, e.containsTime = o.containsTime, e.getCoverage = o.getCoverage, e.normalizeTimeRanges = o.normalizeTimeRanges
                        }(t = e.timeRanges || (e.timeRanges = {}))
                    }(n = t.helpers || (t.helpers = {}))
                }, function(e, t, r) {
                    "use strict";

                    function n(e) {
                        e.load()
                    }
                    var o = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = r(0),
                        a = r(1),
                        s = r(2),
                        u = r(3),
                        l = r(7),
                        c = i.helpers.deferred.buildDeferred,
                        d = i.helpers.url.getExtension,
                        p = i.helpers.Promise,
                        h = i.logger.prefixLogger,
                        f = i.errors.NotSupportedError,
                        _ = i.errors.PlayerFatalError,
                        g = new Error("Media element was revoked."),
                        y = function(e) {
                            function t(t, r) {
                                var n = this.constructor,
                                    o = e.call(this, r) || this;
                                o._duration = null, o._stallDetected = !1, o._initialized = !1, o._deferredProvideMediaElementCallback = null, o._playInProgress = {
                                    inProgress: !1
                                }, o._lastStallCheckPos = null, o._stallCheckTimerId = null, o._endedOverride = !1, o._volume = 1, o._muted = !1, o._positionWhenMediaElementRevoked = 0, o._playingWhenMediaElementRevoked = !1, o._provideMediaElementDeferred = null, o._mediaElementAndState = null, o._listeners = [], o._currentSeekCallback = null, o._logger = h(o._logger, "HTML5Player"), o._descriptor = t, o._playerDependencies = r, o._mimeType = t.getFormat().mimeType || n.inferMimeType(t.getUrl());
                                var a = void 0 !== r.mediaElement ? r.mediaElement : o._createDefaultMediaElement();
                                return a && o.provideMediaElement(a).catch(function(e) {
                                    return e === g ? void o._logger.debug("Initial provideMediaElement() call was aborted.") : void o._triggerError(new l.InitializeError(e))
                                }), o._logger.info("Checking if the player can play the provided descriptor."), o._canPlayTimer = window.setTimeout(function() {
                                    o._canPlay().then(function(e) {
                                        if (!o.isDead()) return e instanceof i.errors.NotSupportedError ? (o._logger.info("Player not supported.", e), void o._triggerError(e)) : e ? (o._logger.info("Player supported."), void o._initialize()) : (o._logger.info("Player not supported."), void o._triggerError(new f))
                                    }).catch(function(e) {
                                        o._logger.error("Unexpected error during can play check.", e), o._triggerError(new _("An unexpected error occured during initialization.", e))
                                    })
                                }, 0), o
                            }
                            return o(t, e), t.inferMimeType = function(e) {
                                var t = d(e);
                                switch (t) {
                                    case "mp3":
                                        return "audio/mpeg";
                                    case "mp4":
                                        return "video/mp4";
                                    case "m3u8":
                                        return "application/x-mpegURL";
                                    default:
                                        return null
                                }
                            }, t.prototype.getMediaElement = function() {
                                return this._mediaElementAndState && this._mediaElementAndState.element
                            }, t.prototype.provideMediaElement = function(e) {
                                var t = this;
                                if (this._ensureNotDead(), this._mediaElementAndState) throw new Error("Already have a media element.");
                                this._logger.debug("provideMediaElement() called.", e), this._initMediaElementLocal(e, null);
                                var r = this._provideMediaElementDeferred = c();
                                this._mediaElementAndState = {
                                    element: e,
                                    state: "INITIALIZING"
                                };
                                var n = function() {
                                    t._logger.debug("Initializing media element."), t._initMediaElement(e, t._descriptor.getUrl()), t._attachListeners();
                                    var n = t._listenToOnce("error", function() {
                                        t._provideMediaElementDeferred = null;
                                        var n = e.error.code + " = " + (e.error.message || "[unknown]");
                                        t._logger.error("Error whilst initializing media element.", n), t.revokeMediaElement(), r.reject(new Error("Error when initializing media element. Error: " + n))
                                    }, {
                                        earlyAttach: !0
                                    });
                                    t._listenToOnce("loadeddata", function() {
                                        t._logger.debug("Got loadeddata event from media element."), o()
                                    }, {
                                        earlyAttach: !0
                                    });
                                    var o = function() {
                                            t._logger.debug("Putting media element in the state that is expected..."), i()
                                        },
                                        i = function() {
                                            null === t._getQueuedSeekPosition() && t._positionWhenMediaElementRevoked > 0 ? (t._logger.debug("Seeking to expected position..."), t._performSeek(t._positionWhenMediaElementRevoked, function(e) {
                                                return void 0 !== e ? (t._provideMediaElementDeferred = null, t._logger.error("An error occurred when trying to seek to the expected position."), t.revokeMediaElement(), void r.reject(new Error("An error occurred when trying to restore the position."))) : (t._logger.debug("Seeked to expected position."), void a())
                                            })) : a()
                                        },
                                        a = function() {
                                            t.isPlaying() === t.isActuallyPlaying() && t._playingWhenMediaElementRevoked ? (t._logger.debug("Calling play to match previous state..."), t._play().catch(function() {
                                                t._provideMediaElementDeferred = null, t._logger.error("An error occurred when trying to play."), t.revokeMediaElement(), r.reject(new Error("Browser refused play() request on media element."))
                                            }), t._listenToOnce("play", function() {
                                                t._logger.debug("Play succeeded."), s()
                                            }, {
                                                earlyAttach: !0
                                            })) : s()
                                        },
                                        s = function() {
                                            t._provideMediaElementDeferred = null, n.remove(), r.resolve(void 0), t._mediaElementAndState.state = "STABLE", t._logger.debug("Finished putting element in expected state."), null !== t._duration && t._atomic(function() {
                                                t.isReady() || t._signalReady(), t._handleDefferredPauseAndSeek()
                                            })
                                        }
                                };
                                return this._initialized ? n() : this._deferredProvideMediaElementCallback = n, this._provideMediaElementDeferred.promise
                            }, t.prototype.revokeMediaElement = function() {
                                if (!this._mediaElementAndState) throw new Error("There is no media element to revoke.");
                                this._deferredProvideMediaElementCallback = null, this._provideMediaElementDeferred && (this._provideMediaElementDeferred.reject(g), this._provideMediaElementDeferred = null), this._logger.debug("revokeMediaElement() called."), this._detachListeners();
                                var e = this._mediaElementAndState.element;
                                this.isDead() || (this._positionWhenMediaElementRevoked = this.getPosition(), this._playingWhenMediaElementRevoked = this.isPlaying()), this._mediaElementAndState = null, this._initMediaElement(e, null), this.isDead() || this._handleStalled()
                            }, t.prototype.getVolume = function() {
                                return this._volume
                            }, t.prototype.getMuted = function() {
                                return this._muted
                            }, t.prototype.setMuted = function(e) {
                                this._muted = e, this._mediaElementAndState && (this._mediaElementAndState.element.muted = e)
                            }, t.prototype.getBufferedTimeRanges = function() {
                                return this._mediaElementAndState && "USABLE" === this._mediaElementAndState.state ? u.buildTimeRanges(this._mediaElementAndState.element.buffered) : []
                            }, t.prototype.getMaxBufferLength = function() {
                                return null
                            }, t.prototype._setVolume = function(e) {
                                this._volume = e, this._mediaElementAndState && (this._mediaElementAndState.element.volume = e)
                            }, t.prototype._getResolvedMimeType = function() {
                                return this._mimeType
                            }, t.prototype._canPlay = function() {
                                return this._mimeType && this._canPlayProtocol(this._descriptor.getProtocol()) && this._canPlayType(this._mimeType) ? p.resolve(!0) : p.resolve(!1)
                            }, t.prototype._canPlayProtocol = function(e) {
                                return ["http", "hls"].indexOf(e.name) >= 0
                            }, t.prototype._canPlayType = function(e) {
                                try {
                                    var t = document.createElement("audio");
                                    return !!t.canPlayType(e)
                                } catch (e) {
                                    return !1
                                }
                            }, t.prototype._initialize = function() {
                                var e = this;
                                this._initialized = !0, this._listenTo("error", function() {
                                    if ("INITIALIZING" === e._mediaElementAndState.state) return void e._logger.debug("An error occurred, but the media element is initializing, so ignoring...");
                                    var t = e._mediaElementAndState.element.error;
                                    switch (t.code) {
                                        case 2:
                                            e._triggerError(new s.NetworkError);
                                            break;
                                        case 3:
                                            e._triggerError(new a.DecodeError);
                                            break;
                                        default:
                                            e._triggerError(new i.errors.PlayerFatalError("An unexpected error occurred."))
                                    }
                                }, {
                                    earlyAttach: !0
                                }), this._listenTo("playing", function() {
                                    e._logger.debug("Media element playing event."), e._mediaElementAndState && !e._mediaElementAndState.element.paused ? e._handlePlayingEvent() : e._logger.debug("Ignoring playing event because media element is reporting it is paused.")
                                }), this._listenTo("pause", function() {
                                    e._logger.debug("Media element pause event."), e._mediaElementAndState && e._mediaElementAndState.element.paused ? e._handlePauseEvent() : e._logger.debug("Ignoring pause event because media element is reporting it is not paused.")
                                }), this._listenTo("ended", function() {
                                    e._logger.debug("Media element ended event."), e._mediaElementAndState && !e._mediaElementAndState.element.ended ? e._handleEndedEvent() : e._logger.debug("Ignoring ended event because media element is reporting it is not ended.")
                                }), this._listenTo("stalled", function() {
                                    e._logger.debug("Media element stalled event."), e._checkIfStalled()
                                }), this._stallCheckTimerId = window.setInterval(function() {
                                    return e._checkIfStalled()
                                }, 400), this._retrieveDuration().then(function(t) {
                                    e._logger.debug("Duration retrieved.", t), e._duration = t, e._atomic(function() {
                                        e._provideDuration(t), e._mediaElementAndState && "STABLE" === e._mediaElementAndState.state && (e._signalReady(), e._handleDefferredPauseAndSeek())
                                    })
                                }).catch(function(t) {
                                    e._triggerError(new i.errors.PlayerFatalError("An unexpected error occurred when attempting to retrieve the duration.", t))
                                }), this._deferredProvideMediaElementCallback && this._deferredProvideMediaElementCallback()
                            }, t.prototype._createDefaultMediaElement = function() {
                                return document.createElement(this._playerDependencies.mediaElementType || "audio")
                            }, t.prototype._handlePauseEvent = function() {
                                var e = this;
                                this._atomic(function() {
                                    e._shouldBeEnded() ? e._signalEnded() : (e._notifyNotStalled(), e._notifyPlaying(!1))
                                })
                            }, t.prototype._handlePlayingEvent = function() {
                                var e = this,
                                    t = this._duration;
                                if (null === t) throw new Error("Expecting duration to exist.");
                                var r = this._getTruePosition();
                                return r >= t ? void this._logger.warn("Got a media element playing event and the positon was >= the duration.", r, t) : this.isEnded() || this._shouldBeEnded() ? void this._logger.warn("Got a media element playing event when the player is/should be ended.") : void this._atomic(function() {
                                    e._endedOverride = !1, e._notifyNotStalled(), e._signalNotEnded(), e._notifyPlaying(!0)
                                })
                            }, t.prototype._handleEndedEvent = function() {
                                var e = this;
                                return null !== this._getQueuedSeekPosition() ? void this._logger.warn("Got a media element ended event but ignoring because a seek is in progress.") : void this._atomic(function() {
                                    e._endedOverride = !0, e._signalEnded()
                                })
                            }, t.prototype._shouldBeEnded = function() {
                                return this._endedOverride || this._mediaElementReportingEnded()
                            }, t.prototype._mediaElementReportingEnded = function() {
                                return !(!this._mediaElementAndState || !this._mediaElementAndState.element.ended)
                            }, t.prototype._signalNotEnded = function() {
                                if (this._shouldBeEnded()) throw new Error("Attempt to signal not ended when it should be.");
                                e.prototype._signalNotEnded.call(this)
                            }, t.prototype._retrieveDuration = function() {
                                var e = this;
                                return new p(function(t) {
                                    e._listenToOnce("loadedmetadata", function() {
                                        t(1e3 * e._mediaElementAndState.element.duration)
                                    }, {
                                        reattach: !0,
                                        earlyAttach: !0
                                    })
                                })
                            }, t.prototype._handlePlayPauseChange = function(e) {
                                var t = this;
                                if (this.isEnded()) return void this._notifyPlaying(e);
                                if (this._mediaElementAndState && "USABLE" === this._mediaElementAndState.state) {
                                    var r = this._mediaElementAndState.element,
                                        n = this._playInProgress.inProgress || !r.paused;
                                    if (n !== e)
                                        if (e) {
                                            var o = {
                                                inProgress: !0
                                            };
                                            this._playInProgress = o, this._play().then(function() {
                                                return o.inProgress = !1
                                            }).catch(function(e) {
                                                o.inProgress = !1, t._notifyPlayRejection(e)
                                            })
                                        } else this._playInProgress = {
                                            inProgress: !1
                                        }, r.pause(), this._notifyPlaying(!1);
                                    else this._playInProgress.inProgress || this._notifyPlaying(e)
                                }
                            }, t.prototype._handleSeekChange = function(e) {
                                var t = this,
                                    r = this._mediaElementAndState;
                                r && "USABLE" === r.state && (this._endedOverride = !1, this._performSeek(e, function(r) {
                                    return void 0 !== r ? void t._triggerError(new i.errors.PlayerFatalError("An error occurred when trying to seek.", r)) : (e === t._duration && (t._endedOverride = !0), void t._atomic(function() {
                                        t._signalSeekComplete(), t.isEnded() || t._handlePlayPauseChange(t.isPlaying())
                                    }))
                                }))
                            }, t.prototype._performSeek = function(e, t) {
                                var r = this,
                                    n = this._mediaElementAndState;
                                if (!n) throw new Error("Media element does not exist.");
                                var o = this._currentSeekCallback;
                                if (o && (this._currentSeekCallback = null, o.listenerHandle.remove()), n.element.currentTime === e / 1e3) return void t();
                                n.element.currentTime = e / 1e3;
                                var i = this._listenToOnce("seeked", function() {
                                    r._currentSeekCallback = null, t()
                                }, {
                                    earlyAttach: !0
                                });
                                this._currentSeekCallback = {
                                    listenerHandle: i,
                                    callback: t
                                }
                            }, t.prototype._getPosition = function() {
                                var e = null !== this._duration ? this._duration : 1 / 0;
                                if (!this._mediaElementAndState || "USABLE" !== this._mediaElementAndState.state) return this._positionWhenMediaElementRevoked;
                                var t = Math.min(this._getTruePosition(), e);
                                return this._shouldBeEnded() ? e : t
                            }, t.prototype._getTruePosition = function() {
                                if (!this._mediaElementAndState || "USABLE" !== this._mediaElementAndState.state) throw new Error("Media element does not exist or is in invalid state.");
                                var e = this._mediaElementAndState.element;
                                return 1e3 * e.currentTime
                            }, t.prototype._kill = function() {
                                window.clearTimeout(this._canPlayTimer), this._mediaElementAndState && this.revokeMediaElement(), this._stallCheckTimerId && window.clearInterval(this._stallCheckTimerId), this._listeners = []
                            }, t.prototype._listenToOnce = function(e, t, r) {
                                void 0 === r && (r = {});
                                var n = r.reattach,
                                    o = r.earlyAttach;
                                void 0 === n && (n = !1), void 0 === o && (o = !1);
                                var i = function(e) {
                                        a.remove(), t(e)
                                    },
                                    a = this._listenTo(e, i, {
                                        reattach: n,
                                        earlyAttach: o
                                    });
                                return a
                            }, t.prototype._listenTo = function(e, t, r) {
                                var n = this;
                                void 0 === r && (r = {});
                                var o = r.reattach,
                                    i = r.earlyAttach;
                                void 0 === o && (o = !0), void 0 === i && (i = !1);
                                var a = {
                                    attached: !1,
                                    handler: t,
                                    eventType: e,
                                    once: !1,
                                    reattach: o,
                                    earlyAttach: i
                                };
                                if (this._listeners.push(a), !this._mediaElementAndState || "USABLE" !== this._mediaElementAndState.state && !i) return {
                                    remove: function() {
                                        var e = n._listeners.indexOf(a);
                                        e >= 0 && n._listeners.splice(e, 1)
                                    }
                                };
                                var s = this._mediaElementAndState.element;
                                return s.addEventListener(e, t, !1), a.attached = !0, {
                                    remove: function() {
                                        var r = n._listeners.indexOf(a);
                                        r >= 0 && (n._listeners.splice(r, 1), s.removeEventListener(e, t, !1))
                                    }
                                }
                            }, t.prototype._notifyNotStalled = function() {
                                this._stallDetected = !1, this._lastStallCheckPos = null, this._handleStalled()
                            }, t.prototype._initMediaElement = function(e, t) {
                                this._initMediaElementLocal(e, t)
                            }, t.prototype._initMediaElementLocal = function(e, t) {
                                e.setAttribute("msAudioCategory", "BackgroundCapableMedia"), e.mozAudioChannelType = "content", e.removeAttribute("src"), n(e), t && (this._logger.debug("Setting media element src.", t), e.src = t), e.volume = this._volume, e.muted = this._muted, e.playbackRate = 1, e.setAttribute("preload", "metadata"), e.load()
                            }, t.prototype._checkIfStalled = function() {
                                if (this._mediaElementAndState && "USABLE" === this._mediaElementAndState.state) {
                                    var e = this._mediaElementAndState.element;
                                    if (!e.paused && this.isActuallyPlaying()) {
                                        var t = e.currentTime;
                                        this._stallDetected = e.readyState <= 2 || this._lastStallCheckPos === t, this._lastStallCheckPos = t, this._handleStalled()
                                    }
                                }
                            }, t.prototype._handleStalled = function() {
                                this._shouldBeEnded() && null === this._getQueuedSeekPosition() ? this.isEnded() || (this._logger.debug("Signalling ended because stalled near end."), this._signalEnded()) : this._notifyStalled(this._stallDetected || !this._mediaElementAndState || "USABLE" !== this._mediaElementAndState.state)
                            }, t.prototype._play = function() {
                                var e = this;
                                if (!this._mediaElementAndState) throw new Error("Media element doesn't exist.");
                                if (this._mediaElementAndState.element.ended) return this._logger.debug("Not calling play() because we are at the end. It will be called after a seek."), p.resolve();
                                var t = this._mediaElementAndState.element.play();
                                return new p(function(r, n) {
                                    t ? t.then(function() {
                                        r()
                                    }).catch(function(t) {
                                        "AbortError" === t.name ? (e._logger.debug("Media element play() promise rejected with AbortError."), r()) : n(t)
                                    }) : r()
                                })
                            }, t.prototype._handleDefferredPauseAndSeek = function() {
                                var e = this;
                                if (!this._mediaElementAndState || "STABLE" !== this._mediaElementAndState.state) throw new Error("Media element must be in the STABLE state.");
                                this._logger.debug("Handling deferred pause and seek..."), this._mediaElementAndState.state = "USABLE", this._attachListeners(), this._atomic(function() {
                                    e._handleStalled();
                                    var t = e._getQueuedSeekPosition();
                                    null !== t && e._handleSeekChange(t), e.isPlaying() !== e.isActuallyPlaying() && e._handlePlayPauseChange(e.isPlaying())
                                })
                            }, t.prototype._detachListeners = function() {
                                if (!this._mediaElementAndState) throw new Error("Media element doesn't exist.");
                                var e = this._mediaElementAndState.element;
                                this._listeners.forEach(function(t) {
                                    t.attached && (e.removeEventListener(t.eventType, t.handler, !1), t.attached = !1)
                                }), this._listeners = this._listeners.filter(function(e) {
                                    return e.reattach
                                })
                            }, t.prototype._attachListeners = function() {
                                if (!this._mediaElementAndState) throw new Error("Media element doesn't exist.");
                                this._logger.debug("Attaching listeners...");
                                var e = this._mediaElementAndState,
                                    t = e.element,
                                    r = e.state;
                                this._listeners.forEach(function(e) {
                                    e.attached || !e.reattach || "USABLE" !== r && !e.earlyAttach || (t.addEventListener(e.eventType, e.handler, !1), e.attached = !0)
                                }), this._logger.debug("Attached listeners.")
                            }, t
                        }(i.BasePlayer);
                    t.HTML5Player = y
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(0),
                        i = function(e) {
                            function t(t) {
                                return e.call(this, "An error occurred when initializing the media element.", t) || this
                            }
                            return n(t, e), t.prototype.getCode = function() {
                                return "HTML5_PLAYER.INITIALIZE_ERROR"
                            }, t
                        }(o.errors.PlayerFatalError);
                    t.InitializeError = i
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.version = "7.0.5", t.buildNumber = 790;
                    var n = r(6);
                    t.HTML5Player = n.HTML5Player;
                    var o = r(4);
                    t.errors = o.errors;
                    var i = r(5);
                    t.helpers = i.helpers
                }])
            })
        }, function(e, t, r) {
            ! function(t, n) {
                e.exports = n(r(2))
            }(this, function(e) {
                return function(e) {
                    function t(n) {
                        if (r[n]) return r[n].exports;
                        var o = r[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        };
                        return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                    }
                    var r = {};
                    return t.m = e, t.c = r, t.i = function(e) {
                        return e
                    }, t.d = function(e, r, n) {
                        t.o(e, r) || Object.defineProperty(e, r, {
                            configurable: !1,
                            enumerable: !0,
                            get: n
                        })
                    }, t.n = function(e) {
                        var r = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return t.d(r, "a", r), r
                    }, t.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, t.p = "", t(t.s = 6)
                }([function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(5),
                        i = function(e) {
                            function t(t, r, n) {
                                void 0 === r && (r = {}), void 0 === n && (n = 2e4);
                                var o = e.call(this) || this;
                                o.__aborted = !1;
                                var i = new XMLHttpRequest;
                                return o.xhr = i, i.addEventListener("load", function() {
                                    return o._onLoad()
                                }), i.addEventListener("error", function() {
                                    return o._onError()
                                }), i.addEventListener("timeout", function() {
                                    return o._onTimeout()
                                }), i.open("GET", t, !0), i.timeout = n, i.responseType = o._getResponseType(), Object.keys(r).forEach(function(e) {
                                    return i.setRequestHeader(e, r[e])
                                }), o._signalRequestStart(), i.send(), o
                            }
                            return n(t, e), t.prototype._abort = function() {
                                this.__aborted = !0, this.xhr.abort()
                            }, t.prototype._onTimeout = function() {
                                this.__aborted || this._provideResponse(null)
                            }, t.prototype._onLoad = function() {
                                if (!this.__aborted) {
                                    var e = this.xhr;
                                    this._provideResponse({
                                        statusCode: e.status,
                                        data: this.xhr.response,
                                        headers: this._parseHeaders(e.getAllResponseHeaders() || "")
                                    })
                                }
                            }, t.prototype._onError = function() {
                                this.__aborted || (0 === this.xhr.status ? this._provideResponse({
                                    statusCode: 0,
                                    data: null,
                                    headers: {}
                                }) : this._provideResponse(new Error("An error occurred.")))
                            }, t.prototype._parseHeaders = function(e) {
                                var t = {};
                                if (!e) return t;
                                for (var r = e.split("\r\n"), n = 0, o = r.length; n < o; n++) {
                                    var i = r[n],
                                        a = i.indexOf(": ");
                                    if (a > 0) {
                                        var s = i.substring(0, a).trim(),
                                            u = i.substring(a + 2);
                                        t[s] = u
                                    }
                                }
                                return t
                            }, t
                        }(o.loader.LoaderRequest);
                    t.LoaderRequest = i
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(3);
                    t.arrayBufferLoader = {
                        request: function(e) {
                            var t = e.url,
                                r = e.headers,
                                o = e.timeout;
                            return new n.ArrayBufferLoaderRequest(t, r, o)
                        }
                    }
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(4);
                    t.stringLoader = {
                        request: function(e) {
                            var t = e.url,
                                r = e.headers,
                                o = e.timeout;
                            return new n.StringLoaderRequest(t, r, o)
                        }
                    }
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(0),
                        i = function(e) {
                            function t() {
                                return null !== e && e.apply(this, arguments) || this
                            }
                            return n(t, e), t.prototype._getResponseType = function() {
                                return "arraybuffer"
                            }, t
                        }(o.LoaderRequest);
                    t.ArrayBufferLoaderRequest = i
                }, function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(0),
                        i = function(e) {
                            function t() {
                                return null !== e && e.apply(this, arguments) || this
                            }
                            return n(t, e), t.prototype._getResponseType = function() {
                                return "text"
                            }, t
                        }(o.LoaderRequest);
                    t.StringLoaderRequest = i
                }, function(t, r) {
                    t.exports = e
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.version = "7.0.5", t.buildNumber = 790;
                    var n = r(2);
                    t.stringLoader = n.stringLoader;
                    var o = r(1);
                    t.arrayBufferLoader = o.arrayBufferLoader
                }])
            })
        }, function(e, t, r) {
            ! function(t, n) {
                e.exports = n(r(2), r(1))
            }(this, function(e, t) {
                return function(e) {
                    function t(n) {
                        if (r[n]) return r[n].exports;
                        var o = r[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        };
                        return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                    }
                    var r = {};
                    return t.m = e, t.c = r, t.i = function(e) {
                        return e
                    }, t.d = function(e, r, n) {
                        t.o(e, r) || Object.defineProperty(e, r, {
                            configurable: !1,
                            enumerable: !0,
                            get: n
                        })
                    }, t.n = function(e) {
                        var r = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return t.d(r, "a", r), r
                    }, t.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, t.p = "", t(t.s = 4)
                }([function(e, t, r) {
                    "use strict";
                    var n = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            };
                        return function(t, r) {
                            function n() {
                                this.constructor = t
                            }
                            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r(2),
                        i = r(3),
                        a = r(1),
                        s = o.helpers.abortableJob.AbortableJob,
                        u = o.helpers.find,
                        l = o.helpers.time,
                        c = 300,
                        d = new a.Limiter(c, 3e5),
                        p = 5e3,
                        h = [i.renditions.encryptedHlsMp3, i.renditions.hlsMp3, i.renditions.httpMp3],
                        f = function(e) {
                            function t(t) {
                                var r = t.loader,
                                    n = t.clientId,
                                    o = t.trackId,
                                    i = t.secretToken,
                                    a = void 0 === i ? null : i,
                                    s = t.requestAuthorization,
                                    u = void 0 === s ? null : s,
                                    l = t.excludedRenditions,
                                    c = void 0 === l ? [] : l,
                                    d = t.maxBitrate,
                                    p = void 0 === d ? 1 / 0 : d,
                                    h = t.endpointBaseUrl,
                                    f = void 0 === h ? "https://api.soundcloud.com/" : h,
                                    _ = t.encryptedStreamsEnabled,
                                    g = void 0 !== _ && _,
                                    y = e.call(this) || this;
                                if (y._getUrlsJob = null, y._clearResponseTimer = null, !r) throw new Error("loader required.");
                                if ("string" != typeof n) throw new Error("clientId invalid.");
                                if ("number" != typeof o) throw new Error("trackId invalid.");
                                if (null !== a && "string" != typeof a) throw new Error("secretToken invalid.");
                                if (null !== u && "string" != typeof u) throw new Error("requestAuthorizaton invalid.");
                                if ("number" != typeof p || p <= 0) throw new Error("maxBitrate must be > 0.");
                                if ("string" != typeof f) throw new Error("endpointBaseUrl must be > 0.");
                                if ("boolean" != typeof g) throw new Error("encryptedStreamsEnabled invalid.");
                                return y._loader = r, y._clientId = n, y._requestAuthorization = u, y._trackId = o, y._secretToken = a, y._endpointBaseUrl = f, y._encryptedStreamsEnabled = g, y._excludedRenditions = c, y._excludedRenditionsOnLastURLRequest = c.slice(), y._maxBitrate = p, y
                            }
                            return n(t, e), t.prototype.getTrackId = function() {
                                return this._trackId
                            }, t.prototype.excludeRendition = function(e) {
                                this._excludedRenditions.indexOf(e) < 0 && this._excludedRenditions.push(e)
                            }, t.prototype.updateRequestAuthorization = function(e) {
                                if (null !== e && "string" != typeof e) throw new Error("requestAuthorizaton invalid.");
                                this._requestAuthorization = e
                            }, t.prototype.clearCache = function() {
                                this._clearResponseTimer && (window.clearTimeout(this._clearResponseTimer), this._clearResponseTimer = null), this._getUrlsJob = null
                            }, t.prototype.getMaxBitrate = function() {
                                return this._maxBitrate
                            }, t.prototype.setMaxBitrate = function(e) {
                                if ("number" != typeof e || e <= 0) throw new Error("maxBitrate must be > 0.");
                                this._maxBitrate = e
                            }, t.prototype.getUrl = function() {
                                var e = this,
                                    t = this._maxBitrate,
                                    r = this._excludedRenditions,
                                    n = new s(function() {
                                        e._excludedRenditionsOnLastURLRequest.length === e._excludedRenditions.length ? e.clearCache() : e._excludedRenditionsOnLastURLRequest = e._excludedRenditions.slice();
                                        var n = e._getUrls(),
                                            o = n.whenComplete().then(function(e) {
                                                var n = e.urls,
                                                    o = e.timeRetrieved,
                                                    i = null;
                                                return h.filter(function(e) {
                                                    return r.indexOf(e) < 0
                                                }).some(function(e) {
                                                    var r = n.filter(function(t) {
                                                            return t.rendition === e
                                                        }).map(function(e) {
                                                            return {
                                                                url: e.url,
                                                                bitrate: e.bitrate
                                                            }
                                                        }),
                                                        a = u(r.sort(function(e, t) {
                                                            return t.bitrate - e.bitrate
                                                        }), function(e) {
                                                            return e.bitrate <= t
                                                        });
                                                    return !!a && (i = {
                                                        url: a.url,
                                                        rendition: e,
                                                        bitrate: a.bitrate,
                                                        timeRetrieved: o
                                                    }, !0)
                                                }), i
                                            });
                                        return {
                                            result: o,
                                            abort: function() {
                                                return n.abort()
                                            }
                                        }
                                    });
                                return n.run()
                            }, t.prototype._getUrls = function() {
                                var e = this;
                                return this._getUrlsJob || (this._getUrlsJob = new s(function() {
                                    var t = o.helpers.deferred.buildDeferred(),
                                        r = null,
                                        n = d.execute(function() {
                                            var n = e._requestAuthorization ? {
                                                    Authorization: e._requestAuthorization
                                                } : {},
                                                o = e._endpointBaseUrl + "i1/tracks/" + encodeURI(e._trackId + "") + "/streams?client_id=" + encodeURIComponent(e._clientId);
                                            e._encryptedStreamsEnabled && (o += "&with_encrypted_streams=true"), e._secretToken && (o += "&secret_token=" + encodeURI(e._secretToken)), r = e._loader.request({
                                                url: o,
                                                headers: n
                                            });
                                            var a = r.getResponse().then(function(e) {
                                                if (!e) throw new i.RequestError(null);
                                                if (200 !== e.statusCode) throw new i.RequestError(e.statusCode);
                                                if (!e.data) throw new Error("Response contained no data.");
                                                var t = l.now(),
                                                    r = JSON.parse(e.data),
                                                    n = [];
                                                return Object.keys(r).map(function(e) {
                                                    var t = e.split("_"),
                                                        o = t[0],
                                                        i = t[1],
                                                        a = t[2],
                                                        s = parseInt(a, 10);
                                                    if (o && i && !isNaN(s)) {
                                                        var l = u(h, function(e) {
                                                            return e.scProtocol === o && e.scFormat === i
                                                        });
                                                        l && n.push({
                                                            rendition: l,
                                                            bitrate: s,
                                                            url: r[e]
                                                        })
                                                    }
                                                }), {
                                                    urls: n,
                                                    timeRetrieved: t
                                                }
                                            });
                                            a.then(t.resolve, t.reject)
                                        });
                                    return {
                                        result: t.promise,
                                        abort: function() {
                                            n.abort(), r && r.abort()
                                        }
                                    }
                                }), this._clearResponseTimer = window.setTimeout(function() {
                                    e._clearResponseTimer = null, e._getUrlsJob = null
                                }, p)), this._getUrlsJob.run()
                            }, t
                        }(i.BaseStreamUrlRetriever);
                    t.StreamUrlRetriever = f
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function e(e, t) {
                            if (void 0 === t && (t = 6e4), this._limit = e, this._period = t, this._jobs = [], this._jobsRunInPeriod = 0, e <= 0) throw new Error("limit must be > 0.");
                            if (t <= 0) throw new Error("period must be > 0.")
                        }
                        return e.prototype.execute = function(e) {
                            var t = this,
                                r = {
                                    job: e
                                };
                            return this._jobs.push(r), this._executeNextJob(), {
                                abort: function() {
                                    var e = t._jobs.indexOf(r);
                                    e >= 0 && t._jobs.splice(e, 1)
                                }
                            }
                        }, e.prototype._executeNextJob = function() {
                            var e = this;
                            if (this._jobsRunInPeriod < this._limit) {
                                var t = this._jobs.shift();
                                t && (this._jobsRunInPeriod++, window.setTimeout(function() {
                                    e._jobsRunInPeriod--, e._executeNextJob()
                                }, this._period), t.job())
                            }
                        }, e
                    }();
                    t.Limiter = n
                }, function(t, r) {
                    t.exports = e
                }, function(e, r) {
                    e.exports = t
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.version = "11.0.4", t.buildNumber = 275;
                    var n = r(0);
                    t.StreamUrlRetriever = n.StreamUrlRetriever
                }])
            })
        }])
    }, function(e, t, r) {
        var n;
        (function(e, o, i, a) {
            /*!
             * @overview es6-promise - a tiny implementation of Promises/A+.
             * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
             * @license   Licensed under MIT license
             *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
             * @version   2.3.0
             */
            (function() {
                "use strict";

                function s(e) {
                    return "function" == typeof e || "object" == typeof e && null !== e
                }

                function u(e) {
                    return "function" == typeof e
                }

                function l(e) {
                    return "object" == typeof e && null !== e
                }

                function c(e) {
                    W = e
                }

                function d(e) {
                    Z = e
                }

                function p() {
                    var t = e.nextTick,
                        r = e.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
                    return Array.isArray(r) && "0" === r[1] && "10" === r[2] && (t = o),
                        function() {
                            t(y)
                        }
                }

                function h() {
                    return function() {
                        J(y)
                    }
                }

                function f() {
                    var e = 0,
                        t = new te(y),
                        r = document.createTextNode("");
                    return t.observe(r, {
                        characterData: !0
                    }),
                        function() {
                            r.data = e = ++e % 2
                        }
                }

                function _() {
                    var e = new MessageChannel;
                    return e.port1.onmessage = y,
                        function() {
                            e.port2.postMessage(0)
                        }
                }

                function g() {
                    return function() {
                        setTimeout(y, 1)
                    }
                }

                function y() {
                    for (var e = 0; e < X; e += 2) {
                        var t = oe[e],
                            r = oe[e + 1];
                        t(r), oe[e] = void 0, oe[e + 1] = void 0
                    }
                    X = 0
                }

                function v() {
                    try {
                        var e = r(29);
                        return J = e.runOnLoop || e.runOnContext, h()
                    } catch (e) {
                        return g()
                    }
                }

                function m() {}

                function E() {
                    return new TypeError("You cannot resolve a promise with itself")
                }

                function b() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }

                function w(e) {
                    try {
                        return e.then
                    } catch (e) {
                        return ue.error = e, ue
                    }
                }

                function P(e, t, r, n) {
                    try {
                        e.call(t, r, n)
                    } catch (e) {
                        return e
                    }
                }

                function S(e, t, r) {
                    Z(function(e) {
                        var n = !1,
                            o = P(r, t, function(r) {
                                n || (n = !0, t !== r ? A(e, r) : k(e, r))
                            }, function(t) {
                                n || (n = !0, x(e, t))
                            }, "Settle: " + (e._label || " unknown promise"));
                        !n && o && (n = !0, x(e, o))
                    }, e)
                }

                function R(e, t) {
                    t._state === ae ? k(e, t._result) : t._state === se ? x(e, t._result) : D(t, void 0, function(t) {
                        A(e, t)
                    }, function(t) {
                        x(e, t)
                    })
                }

                function T(e, t) {
                    if (t.constructor === e.constructor) R(e, t);
                    else {
                        var r = w(t);
                        r === ue ? x(e, ue.error) : void 0 === r ? k(e, t) : u(r) ? S(e, t, r) : k(e, t)
                    }
                }

                function A(e, t) {
                    e === t ? x(e, E()) : s(t) ? T(e, t) : k(e, t)
                }

                function M(e) {
                    e._onerror && e._onerror(e._result), O(e)
                }

                function k(e, t) {
                    e._state === ie && (e._result = t, e._state = ae, 0 !== e._subscribers.length && Z(O, e))
                }

                function x(e, t) {
                    e._state === ie && (e._state = se, e._result = t, Z(M, e))
                }

                function D(e, t, r, n) {
                    var o = e._subscribers,
                        i = o.length;
                    e._onerror = null, o[i] = t, o[i + ae] = r, o[i + se] = n, 0 === i && e._state && Z(O, e)
                }

                function O(e) {
                    var t = e._subscribers,
                        r = e._state;
                    if (0 !== t.length) {
                        for (var n, o, i = e._result, a = 0; a < t.length; a += 3) n = t[a], o = t[a + r], n ? L(r, n, o, i) : o(i);
                        e._subscribers.length = 0
                    }
                }

                function C() {
                    this.error = null
                }

                function I(e, t) {
                    try {
                        return e(t)
                    } catch (e) {
                        return le.error = e, le
                    }
                }

                function L(e, t, r, n) {
                    var o, i, a, s, l = u(r);
                    if (l) {
                        if (o = I(r, n), o === le ? (s = !0, i = o.error, o = null) : a = !0, t === o) return void x(t, b())
                    } else o = n, a = !0;
                    t._state !== ie || (l && a ? A(t, o) : s ? x(t, i) : e === ae ? k(t, o) : e === se && x(t, o))
                }

                function N(e, t) {
                    try {
                        t(function(t) {
                            A(e, t)
                        }, function(t) {
                            x(e, t)
                        })
                    } catch (t) {
                        x(e, t)
                    }
                }

                function j(e, t) {
                    var r = this;
                    r._instanceConstructor = e, r.promise = new e(m), r._validateInput(t) ? (r._input = t, r.length = t.length, r._remaining = t.length, r._init(), 0 === r.length ? k(r.promise, r._result) : (r.length = r.length || 0, r._enumerate(), 0 === r._remaining && k(r.promise, r._result))) : x(r.promise, r._validationError())
                }

                function F(e) {
                    return new ce(this, e).promise
                }

                function U(e) {
                    function t(e) {
                        A(o, e)
                    }

                    function r(e) {
                        x(o, e)
                    }
                    var n = this,
                        o = new n(m);
                    if (!Q(e)) return x(o, new TypeError("You must pass an array to race.")), o;
                    for (var i = e.length, a = 0; o._state === ie && a < i; a++) D(n.resolve(e[a]), void 0, t, r);
                    return o
                }

                function B(e) {
                    var t = this;
                    if (e && "object" == typeof e && e.constructor === t) return e;
                    var r = new t(m);
                    return A(r, e), r
                }

                function q(e) {
                    var t = this,
                        r = new t(m);
                    return x(r, e), r
                }

                function H() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }

                function z() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }

                function G(e) {
                    this._id = _e++, this._state = void 0, this._result = void 0, this._subscribers = [], m !== e && (u(e) || H(), this instanceof G || z(), N(this, e))
                }

                function V() {
                    var e;
                    if ("undefined" != typeof i) e = i;
                    else if ("undefined" != typeof self) e = self;
                    else try {
                            e = Function("return this")()
                        } catch (e) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                    var t = e.Promise;
                    t && "[object Promise]" === Object.prototype.toString.call(t.resolve()) && !t.cast || (e.Promise = ge)
                }
                var K;
                K = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                };
                var J, W, Y, Q = K,
                    X = 0,
                    Z = ({}.toString, function(e, t) {
                        oe[X] = e, oe[X + 1] = t, X += 2, 2 === X && (W ? W(y) : Y())
                    }),
                    $ = "undefined" != typeof window ? window : void 0,
                    ee = $ || {},
                    te = ee.MutationObserver || ee.WebKitMutationObserver,
                    re = "undefined" != typeof e && "[object process]" === {}.toString.call(e),
                    ne = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                    oe = new Array(1e3);
                Y = re ? p() : te ? f() : ne ? _() : void 0 === $ ? v() : g();
                var ie = void 0,
                    ae = 1,
                    se = 2,
                    ue = new C,
                    le = new C;
                j.prototype._validateInput = function(e) {
                    return Q(e)
                }, j.prototype._validationError = function() {
                    return new Error("Array Methods must be provided an Array")
                }, j.prototype._init = function() {
                    this._result = new Array(this.length)
                };
                var ce = j;
                j.prototype._enumerate = function() {
                    for (var e = this, t = e.length, r = e.promise, n = e._input, o = 0; r._state === ie && o < t; o++) e._eachEntry(n[o], o)
                }, j.prototype._eachEntry = function(e, t) {
                    var r = this,
                        n = r._instanceConstructor;
                    l(e) ? e.constructor === n && e._state !== ie ? (e._onerror = null, r._settledAt(e._state, t, e._result)) : r._willSettleAt(n.resolve(e), t) : (r._remaining--, r._result[t] = e)
                }, j.prototype._settledAt = function(e, t, r) {
                    var n = this,
                        o = n.promise;
                    o._state === ie && (n._remaining--, e === se ? x(o, r) : n._result[t] = r), 0 === n._remaining && k(o, n._result)
                }, j.prototype._willSettleAt = function(e, t) {
                    var r = this;
                    D(e, void 0, function(e) {
                        r._settledAt(ae, t, e)
                    }, function(e) {
                        r._settledAt(se, t, e)
                    })
                };
                var de = F,
                    pe = U,
                    he = B,
                    fe = q,
                    _e = 0,
                    ge = G;
                G.all = de, G.race = pe, G.resolve = he, G.reject = fe, G._setScheduler = c, G._setAsap = d, G._asap = Z, G.prototype = {
                    constructor: G,
                    then: function(e, t) {
                        var r = this,
                            n = r._state;
                        if (n === ae && !e || n === se && !t) return this;
                        var o = new this.constructor(m),
                            i = r._result;
                        if (n) {
                            var a = arguments[n - 1];
                            Z(function() {
                                L(n, o, a, i)
                            })
                        } else D(r, o, e, t);
                        return o
                    },
                    catch: function(e) {
                        return this.then(null, e)
                    }
                };
                var ye = V,
                    ve = {
                        Promise: ge,
                        polyfill: ye
                    };
                r(23).amd ? (n = function() {
                    return ve
                }.call(t, r, t, a), !(void 0 !== n && (a.exports = n))) : "undefined" != typeof a && a.exports ? a.exports = ve : "undefined" != typeof this && (this.ES6Promise = ve), ye()
            }).call(this)
        }).call(t, r(6), r(25).setImmediate, function() {
            return this
        }(), r(24)(e))
    }, function(e, t) {
        "use strict";
        var r = {
            oauth_token: void 0,
            baseURL: "https://api.soundcloud.com",
            connectURL: "//connect.soundcloud.com",
            client_id: void 0,
            redirect_uri: void 0
        };
        e.exports = {
            get: function(e) {
                return r[e]
            },
            set: function(e, t) {
                t && (r[e] = t)
            }
        }
    }, function(e, t, r) {
        (function(t) {
            "use strict";
            var n = r(3),
                o = r(20),
                i = r(2).Promise,
                a = function(e, r, n, o) {
                    var a = void 0,
                        s = new i(function(i) {
                            var s = t.FormData && n instanceof FormData;
                            a = new XMLHttpRequest, a.upload && a.upload.addEventListener("progress", o), a.open(e, r, !0), s || a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.onreadystatechange = function() {
                                4 === a.readyState && i({
                                    responseText: a.responseText,
                                    request: a
                                })
                            }, a.send(n)
                        });
                    return s.request = a, s
                },
                s = function(e) {
                    var t = e.responseText,
                        r = e.request,
                        n = void 0,
                        o = void 0;
                    try {
                        o = JSON.parse(t)
                    } catch (e) {}
                    return o ? o.errors && (n = {
                        message: ""
                    }, o.errors[0] && o.errors[0].error_message && (n = {
                        message: o.errors[0].error_message
                    })) : n = r ? {
                        message: "HTTP Error: " + r.status
                    } : {
                        message: "Unknown error"
                    }, n && (n.status = r.status), {
                        json: o,
                        error: n
                    }
                },
                u = function e(t, r, n, o) {
                    var i = a(t, r, n, o),
                        u = i.then(function(t) {
                            var r = t.responseText,
                                n = t.request,
                                o = s({
                                    responseText: r,
                                    request: n
                                });
                            if (o.json && "302 - Found" === o.json.status) return e("GET", o.json.location, null);
                            if (200 !== n.status && o.error) throw o.error;
                            return o.json
                        });
                    return u.request = i.request, u
                },
                l = function(e, t, r) {
                    Object.keys(t).forEach(function(n) {
                        r ? e.append(n, t[n]) : e[n] = t[n]
                    })
                };
            e.exports = {
                request: function(e, r) {
                    var i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                        a = arguments.length <= 3 || void 0 === arguments[3] ? function() {} : arguments[3],
                        s = n.get("oauth_token"),
                        c = n.get("client_id"),
                        d = {},
                        p = t.FormData && i instanceof FormData,
                        h = void 0,
                        f = void 0;
                    return d.format = "json", s ? d.oauth_token = s : d.client_id = c, l(i, d, p), "GET" !== e && (h = p ? i : o.encode(i), i = {
                        oauth_token: s
                    }), r = "/" !== r[0] ? "/" + r : r, f = "" + n.get("baseURL") + r + "?" + o.encode(i), u(e, f, h, a)
                },
                oEmbed: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        r = t.element;
                    delete t.element, t.url = e;
                    var n = "https://soundcloud.com/oembed.json?" + o.encode(t);
                    return u("GET", n, null).then(function(e) {
                        return r && e.html && (r.innerHTML = e.html), e
                    })
                },
                upload: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        t = e.asset_data || e.file,
                        r = n.get("oauth_token") && e.title && t;
                    if (!r) return new i(function(e, t) {
                        t({
                            status: 0,
                            error_message: "oauth_token needs to be present and title and asset_data / file passed as parameters"
                        })
                    });
                    var o = Object.keys(e),
                        a = new FormData;
                    return o.forEach(function(t) {
                        var r = e[t];
                        "file" === t && (t = "asset_data", r = e.file), a.append("track[" + t + "]", r)
                    }), this.request("POST", "/tracks", a, e.progress)
                },
                resolve: function(e) {
                    return this.request("GET", "/resolve", {
                        url: e,
                        _status_code_map: {
                            302: 200
                        }
                    })
                }
            }
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        "use strict";
        var r = {};
        e.exports = {
            get: function(e) {
                return r[e]
            },
            set: function(e, t) {
                r[e] = t
            }
        }
    }, function(e, t) {
        function r() {
            throw new Error("setTimeout has not been defined")
        }

        function n() {
            throw new Error("clearTimeout has not been defined")
        }

        function o(e) {
            if (c === setTimeout) return setTimeout(e, 0);
            if ((c === r || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
            try {
                return c(e, 0)
            } catch (t) {
                try {
                    return c.call(null, e, 0)
                } catch (t) {
                    return c.call(this, e, 0)
                }
            }
        }

        function i(e) {
            if (d === clearTimeout) return clearTimeout(e);
            if ((d === n || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
            try {
                return d(e)
            } catch (t) {
                try {
                    return d.call(null, e)
                } catch (t) {
                    return d.call(this, e)
                }
            }
        }

        function a() {
            _ && h && (_ = !1, h.length ? f = h.concat(f) : g = -1, f.length && s())
        }

        function s() {
            if (!_) {
                var e = o(a);
                _ = !0;
                for (var t = f.length; t;) {
                    for (h = f, f = []; ++g < t;) h && h[g].run();
                    g = -1, t = f.length
                }
                h = null, _ = !1, i(e)
            }
        }

        function u(e, t) {
            this.fun = e, this.array = t
        }

        function l() {}
        var c, d, p = e.exports = {};
        ! function() {
            try {
                c = "function" == typeof setTimeout ? setTimeout : r
            } catch (e) {
                c = r
            }
            try {
                d = "function" == typeof clearTimeout ? clearTimeout : n
            } catch (e) {
                d = n
            }
        }();
        var h, f = [],
            _ = !1,
            g = -1;
        p.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            f.push(new u(e, t)), 1 !== f.length || _ || o(s)
        }, u.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = l, p.addListener = l, p.once = l, p.off = l, p.removeListener = l, p.removeAllListeners = l, p.emit = l, p.prependListener = l, p.prependOnceListener = l, p.listeners = function(e) {
            return []
        }, p.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, p.cwd = function() {
            return "/"
        }, p.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, p.umask = function() {
            return 0
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(22);
        t.extract = function(e) {
            return e.split("?")[1] || ""
        }, t.parse = function(e) {
            return "string" != typeof e ? {} : (e = e.trim().replace(/^(\?|#|&)/, ""), e ? e.split("&").reduce(function(e, t) {
                var r = t.replace(/\+/g, " ").split("="),
                    n = r.shift(),
                    o = r.length > 0 ? r.join("=") : void 0;
                return n = decodeURIComponent(n), o = void 0 === o ? null : decodeURIComponent(o), e.hasOwnProperty(n) ? Array.isArray(e[n]) ? e[n].push(o) : e[n] = [e[n], o] : e[n] = o, e
            }, {}) : {})
        }, t.stringify = function(e) {
            return e ? Object.keys(e).sort().map(function(t) {
                var r = e[t];
                return Array.isArray(r) ? r.sort().map(function(e) {
                    return n(t) + "=" + n(e)
                }).join("&") : n(t) + "=" + n(r)
            }).filter(function(e) {
                return e.length > 0
            }).join("&") : ""
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(7),
            o = r(5);
        e.exports = {
            notifyDialog: function(e) {
                var t = n.parse(e.search),
                    r = n.parse(e.hash),
                    i = {
                        oauth_token: t.access_token || r.access_token,
                        dialog_id: t.state || r.state,
                        error: t.error || r.error,
                        error_description: t.error_description || r.error_description
                    },
                    a = o.get(i.dialog_id);
                a && a.handleConnectResponse(i)
            }
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(3),
            o = r(11),
            i = r(2).Promise,
            a = function(e) {
                return n.set("oauth_token", e.oauth_token), e
            };
        e.exports = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                t = n.get("oauth_token");
            if (t) return new i(function(e) {
                e({
                    oauth_token: t
                })
            });
            var r = {
                client_id: e.client_id || n.get("client_id"),
                redirect_uri: e.redirect_uri || n.get("redirect_uri"),
                response_type: "code_and_token",
                scope: e.scope || "non-expiring",
                display: "popup"
            };
            if (!r.client_id || !r.redirect_uri) throw new Error("Options client_id and redirect_uri must be passed");
            var s = new o(r);
            return s.open().then(a)
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(2).Promise;
        e.exports = function() {
            var e = {};
            return e.promise = new n(function(t, r) {
                e.resolve = t, e.reject = r
            }), e
        }
    }, function(e, t, r) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var o = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(),
            i = r(10),
            a = r(5),
            s = r(12),
            u = r(7),
            l = "SoundCloud_Dialog",
            c = function() {
                return [l, Math.ceil(1e6 * Math.random()).toString(16)].join("_")
            },
            d = function(e) {
                return "https://soundcloud.com/connect?" + u.stringify(e)
            },
            p = function() {
                function e() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    n(this, e), this.id = c(), this.options = t, this.options.state = this.id, this.width = 420, this.height = 670, this.deferred = i()
                }
                return o(e, [{
                    key: "open",
                    value: function() {
                        var e = d(this.options);
                        return this.popup = s.open(e, this.width, this.height), a.set(this.id, this), this.deferred.promise
                    }
                }, {
                    key: "handleConnectResponse",
                    value: function(e) {
                        var t = e.error;
                        t ? this.deferred.reject(e) : this.deferred.resolve(e), this.popup.close()
                    }
                }]), e
            }();
        e.exports = p
    }, function(e, t) {
        "use strict";
        e.exports = {
            open: function(e, t, r) {
                var n = {},
                    o = void 0;
                return n.location = 1, n.width = t, n.height = r, n.left = window.screenX + (window.outerWidth - t) / 2, n.top = window.screenY + (window.outerHeight - r) / 2, n.toolbar = "no", n.scrollbars = "yes", o = Object.keys(n).map(function(e) {
                    return e + "=" + n[e]
                }).join(", "), window.open(e, n.name, o)
            }
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(19),
            o = r(1).MaestroCore,
            i = o.errors.PlayerFatalError,
            a = o.State,
            s = r(1).SCAudio.errors,
            u = s.GeoBlockedError,
            l = s.NoStreamsError,
            c = s.TimedOutError,
            d = s.NotSupportedError,
            p = 1e3 / 60;
        e.exports = function(e) {
            function t() {
                switch (e.getState()) {
                    case a.PLAYING:
                        return "playing";
                    case a.PAUSED:
                        return e.isEnded() ? "ended" : "paused";
                    case a.DEAD:
                        return e.getFatalError() ? "error" : "dead";
                    case a.LOADING:
                    default:
                        return "loading"
                }
            }

            function r() {
                function t() {
                    window.clearTimeout(r), e.isPlaying() && !e.isEnded() && (r = window.setTimeout(t, p));
                    var o = e.getPosition();
                    o !== n && (n = o, s.trigger("time", o))
                }
                var r = 0,
                    n = null;
                e.onChange.subscribe(function(e) {
                    var n = e.playing,
                        o = e.seeking,
                        i = e.dead;
                    i ? window.clearTimeout(r) : void 0 === n && void 0 === o || t()
                })
            }
            var o = !1;
            e.onStateChange.subscribe(function() {
                return s.trigger("state-change", t())
            }), e.onPlay.subscribe(function() {
                s.trigger(o ? "play-resume" : "play-start"), o = !0
            }), e.onPlayIntent.subscribe(function() {
                return s.trigger("play")
            }), e.onPlayRejection.subscribe(function(e) {
                return s.trigger("play-rejection", e)
            }), e.onPauseIntent.subscribe(function() {
                return s.trigger("pause")
            }), e.onSeek.subscribe(function() {
                return s.trigger("seeked")
            }), e.onSeekRejection.subscribe(function(e) {
                return s.trigger("seek-rejection", e)
            }), e.onLoadStart.subscribe(function() {
                return s.trigger("buffering_start")
            }), e.onLoadEnd.subscribe(function() {
                return s.trigger("buffering_end")
            }), e.onEnded.subscribe(function() {
                return s.trigger("finish")
            }), e.onError.subscribe(function(e) {
                e instanceof u ? s.trigger("geo_blocked") : e instanceof l ? s.trigger("no_streams") : e instanceof c ? s.trigger("no_connection") : e instanceof d ? s.trigger("no_protocol") : e instanceof i && s.trigger("audio_error")
            });
            var s = {
                play: e.play.bind(e),
                pause: e.pause.bind(e),
                seek: e.seek.bind(e),
                getVolume: e.getVolume.bind(e),
                setVolume: e.setVolume.bind(e),
                currentTime: e.getPosition.bind(e),
                getDuration: e.getDuration.bind(e),
                isBuffering: e.isLoading.bind(e),
                isPlaying: e.isPlaying.bind(e),
                isActuallyPlaying: e.isActuallyPlaying.bind(e),
                isEnded: e.isEnded.bind(e),
                isDead: e.isDead.bind(e),
                kill: e.kill.bind(e),
                hasErrored: function() {
                    return !!e.getFatalError()
                },
                getState: t
            };
            return n.mixin(s), r(), s
        }
    }, function(e, t) {
        (function(t) {
            "use strict";
            var r = t.AudioContext || t.webkitAudioContext,
                n = null;
            e.exports = function() {
                return n ? n : n = new r
            }
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        (function(t) {
            "use strict";
            var r = t.navigator.getUserMedia || t.navigator.webkitGetUserMedia || t.navigator.mozGetUserMedia;
            e.exports = function(e, n, o) {
                r.call(t.navigator, e, n, o)
            }
        }).call(t, function() {
            return this
        }())
    }, function(e, t, r) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var o = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(),
            i = r(14),
            a = r(15),
            s = r(2).Promise,
            u = r(28),
            l = function() {
                var e = this,
                    t = this.context;
                return new s(function(r, n) {
                    e.source ? e.source instanceof AudioNode ? r(e.source) : n(new Error("source needs to be an instance of AudioNode")) : a({
                        audio: !0
                    }, function(n) {
                        e.stream = n, e.source = t.createMediaStreamSource(n), r(e.source)
                    }.bind(e), n)
                })
            },
            c = function() {
                function e() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    n(this, e), this.context = t.context || i(), this._recorder = null, this.source = t.source, this.stream = null
                }
                return o(e, [{
                    key: "start",
                    value: function() {
                        var e = this;
                        return l.call(this).then(function(t) {
                            return e._recorder = new u(t), e._recorder.record(), t
                        })
                    }
                }, {
                    key: "stop",
                    value: function() {
                        if (this._recorder && this._recorder.stop(), this.stream)
                            if (this.stream.stop) this.stream.stop();
                            else if (this.stream.getTracks) {
                                var e = this.stream.getTracks()[0];
                                e && e.stop()
                            }
                    }
                }, {
                    key: "getBuffer",
                    value: function() {
                        var e = this;
                        return new s(function(t, r) {
                            e._recorder ? e._recorder.getBuffer(function(r) {
                                var n = e.context.sampleRate,
                                    o = e.context.createBuffer(2, r[0].length, n);
                                o.getChannelData(0).set(r[0]), o.getChannelData(1).set(r[1]), t(o)
                            }.bind(e)) : r(new Error("Nothing has been recorded yet."))
                        })
                    }
                }, {
                    key: "getWAV",
                    value: function() {
                        var e = this;
                        return new s(function(t, r) {
                            e._recorder ? e._recorder.exportWAV(function(e) {
                                t(e)
                            }) : r(new Error("Nothing has been recorded yet."))
                        })
                    }
                }, {
                    key: "play",
                    value: function() {
                        var e = this;
                        return this.getBuffer().then(function(t) {
                            var r = e.context.createBufferSource();
                            return r.buffer = t, r.connect(e.context.destination), r.start(0), r
                        })
                    }
                }, {
                    key: "saveAs",
                    value: function(e) {
                        return this.getWAV().then(function(t) {
                            u.forceDownload(t, e)
                        })
                    }
                }, {
                    key: "delete",
                    value: function() {
                        this._recorder && (this._recorder.stop(), this._recorder.clear(), this._recorder = null), this.stream && this.stream.stop()
                    }
                }]), e
            }();
        e.exports = c
    }, function(e, t, r) {
        "use strict";
        var n = r(4),
            o = r(3),
            i = r(13),
            a = r(1).SCAudio,
            s = r(1).SCAudioPublicApiStreamURLRetriever.StreamUrlRetriever,
            u = r(1).MaestroHTML5Player.HTML5Player,
            l = r(1).MaestroHLSMSEPlayer.HLSMSEPlayer,
            c = r(1).MaestroLoaders.stringLoader,
            d = 3e3;
        e.exports = function(e, t) {
            var r = t ? {
                secret_token: t
            } : {};
            return n.request("GET", e, r).then(function(e) {
                function r() {
                    var r = n + "/tracks/" + encodeURIComponent(e.id) + "/plays?client_id=" + encodeURIComponent(p);
                    t && (r += "&secret_token=" + encodeURIComponent(t));
                    var o = new XMLHttpRequest;
                    o.open("POST", r, !0), o.send()
                }
                var n = o.get("baseURL"),
                    p = o.get("client_id"),
                    h = o.get("oauth_token"),
                    f = !1,
                    _ = new s({
                        clientId: p,
                        secretToken: t,
                        trackId: e.id,
                        requestAuthorization: h ? "OAuth " + h : null,
                        loader: c
                    }),
                    g = a.buildPlayer({
                        playerClasses: [u, l],
                        streamUrlRetriever: _,
                        fadeOutDuration: "SNIP" === e.policy ? d : 0
                    });
                return g.onPlay.subscribe(function() {
                    f || (f = !0, r())
                }), g.onEnded.subscribe(function() {
                    g.pause()
                }), g.onPlayIntent.subscribe(function() {
                    g.isEnded() && g.seek(0)
                }), i(g)
            })
        }
    }, function(e, t, r) {
        ! function() {
            function r() {
                return {
                    keys: Object.keys || function(e) {
                        if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError("keys() called on a non-object");
                        var t, r = [];
                        for (t in e) e.hasOwnProperty(t) && (r[r.length] = t);
                        return r
                    },
                    uniqueId: function(e) {
                        var t = ++s + "";
                        return e ? e + t : t
                    },
                    has: function(e, t) {
                        return i.call(e, t)
                    },
                    each: function(e, t, r) {
                        if (null != e)
                            if (o && e.forEach === o) e.forEach(t, r);
                            else if (e.length === +e.length)
                                for (var n = 0, i = e.length; n < i; n++) t.call(r, e[n], n, e);
                            else
                                for (var a in e) this.has(e, a) && t.call(r, e[a], a, e)
                    },
                    once: function(e) {
                        var t, r = !1;
                        return function() {
                            return r ? t : (r = !0, t = e.apply(this, arguments), e = null, t)
                        }
                    }
                }
            }
            var n, o = Array.prototype.forEach,
                i = Object.prototype.hasOwnProperty,
                a = Array.prototype.slice,
                s = 0,
                u = r();
            n = {
                on: function(e, t, r) {
                    if (!c(this, "on", e, [t, r]) || !t) return this;
                    this._events || (this._events = {});
                    var n = this._events[e] || (this._events[e] = []);
                    return n.push({
                        callback: t,
                        context: r,
                        ctx: r || this
                    }), this
                },
                once: function(e, t, r) {
                    if (!c(this, "once", e, [t, r]) || !t) return this;
                    var n = this,
                        o = u.once(function() {
                            n.off(e, o), t.apply(this, arguments)
                        });
                    return o._callback = t, this.on(e, o, r)
                },
                off: function(e, t, r) {
                    var n, o, i, a, s, l, d, p;
                    if (!this._events || !c(this, "off", e, [t, r])) return this;
                    if (!e && !t && !r) return this._events = {}, this;
                    for (a = e ? [e] : u.keys(this._events), s = 0, l = a.length; s < l; s++)
                        if (e = a[s], i = this._events[e]) {
                            if (this._events[e] = n = [], t || r)
                                for (d = 0, p = i.length; d < p; d++) o = i[d], (t && t !== o.callback && t !== o.callback._callback || r && r !== o.context) && n.push(o);
                            n.length || delete this._events[e]
                        }
                    return this
                },
                trigger: function(e) {
                    if (!this._events) return this;
                    var t = a.call(arguments, 1);
                    if (!c(this, "trigger", e, t)) return this;
                    var r = this._events[e],
                        n = this._events.all;
                    return r && d(r, t), n && d(n, arguments), this
                },
                stopListening: function(e, t, r) {
                    var n = this._listeners;
                    if (!n) return this;
                    var o = !t && !r;
                    "object" == typeof t && (r = this), e && ((n = {})[e._listenerId] = e);
                    for (var i in n) n[i].off(t, r, this), o && delete this._listeners[i];
                    return this
                }
            };
            var l = /\s+/,
                c = function(e, t, r, n) {
                    if (!r) return !0;
                    if ("object" == typeof r) {
                        for (var o in r) e[t].apply(e, [o, r[o]].concat(n));
                        return !1
                    }
                    if (l.test(r)) {
                        for (var i = r.split(l), a = 0, s = i.length; a < s; a++) e[t].apply(e, [i[a]].concat(n));
                        return !1
                    }
                    return !0
                },
                d = function(e, t) {
                    var r, n = -1,
                        o = e.length,
                        i = t[0],
                        a = t[1],
                        s = t[2];
                    switch (t.length) {
                        case 0:
                            for (; ++n < o;)(r = e[n]).callback.call(r.ctx);
                            return;
                        case 1:
                            for (; ++n < o;)(r = e[n]).callback.call(r.ctx, i);
                            return;
                        case 2:
                            for (; ++n < o;)(r = e[n]).callback.call(r.ctx, i, a);
                            return;
                        case 3:
                            for (; ++n < o;)(r = e[n]).callback.call(r.ctx, i, a, s);
                            return;
                        default:
                            for (; ++n < o;)(r = e[n]).callback.apply(r.ctx, t)
                    }
                },
                p = {
                    listenTo: "on",
                    listenToOnce: "once"
                };
            u.each(p, function(e, t) {
                n[t] = function(t, r, n) {
                    var o = this._listeners || (this._listeners = {}),
                        i = t._listenerId || (t._listenerId = u.uniqueId("l"));
                    return o[i] = t, "object" == typeof r && (n = this), t[e](r, n, this), this
                }
            }), n.bind = n.on, n.unbind = n.off, n.mixin = function(e) {
                var t = ["on", "once", "off", "trigger", "stopListening", "listenTo", "listenToOnce", "bind", "unbind"];
                return u.each(t, function(t) {
                    e[t] = this[t]
                }, this), e
            }, "undefined" != typeof e && e.exports && (t = e.exports = n), t.BackboneEvents = n
        }(this)
    }, function(e, t, r) {
        e.exports = r(18)
    }, function(e, t) {
        e.exports = {
            encode: function(e, t) {
                function r(e) {
                    return e.filter(function(e) {
                        return "string" == typeof e && e.length
                    }).join("&")
                }

                function n(e) {
                    var t = Object.keys(e);
                    return d ? t.sort() : t
                }

                function o(e, t) {
                    var o = ":name[:prop]";
                    return r(n(t).map(function(r) {
                        return a(o.replace(/:name/, e).replace(/:prop/, r), t[r])
                    }))
                }

                function i(e, t) {
                    var n = ":name[]";
                    return r(t.map(function(t) {
                        return a(n.replace(/:name/, e), t)
                    }))
                }

                function a(e, t) {
                    var r = /%20/g,
                        n = encodeURIComponent,
                        a = typeof t,
                        s = null;
                    return Array.isArray(t) ? s = i(e, t) : "string" === a ? s = n(e) + "=" + u(t) : "number" === a ? s = n(e) + "=" + n(t).replace(r, "+") : "boolean" === a ? s = n(e) + "=" + t : "object" === a && (null !== t ? s = o(e, t) : c || (s = n(e) + "=null")), s
                }

                function s(e) {
                    return "%" + ("0" + e.charCodeAt(0).toString(16)).slice(-2).toUpperCase()
                }

                function u(e) {
                    return e.replace(/[^ !'()~\*]*/g, encodeURIComponent).replace(/ /g, "+").replace(/[!'()~\*]/g, s)
                }
                var l = "object" == typeof t ? t : {},
                    c = l.ignorenull || !1,
                    d = l.sorted || !1;
                return r(n(e).map(function(t) {
                    return a(t, e[t])
                }))
            }
        }
    }, function(e, t, r) {
        (function(e, t) {
            ! function(e, r) {
                "use strict";

                function n(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1];
                    var n = {
                        callback: e,
                        args: t
                    };
                    return _[f] = n, h(f), f++
                }

                function o(e) {
                    delete _[e]
                }

                function i(e) {
                    var t = e.callback,
                        n = e.args;
                    switch (n.length) {
                        case 0:
                            t();
                            break;
                        case 1:
                            t(n[0]);
                            break;
                        case 2:
                            t(n[0], n[1]);
                            break;
                        case 3:
                            t(n[0], n[1], n[2]);
                            break;
                        default:
                            t.apply(r, n)
                    }
                }

                function a(e) {
                    if (g) setTimeout(a, 0, e);
                    else {
                        var t = _[e];
                        if (t) {
                            g = !0;
                            try {
                                i(t)
                            } finally {
                                o(e), g = !1
                            }
                        }
                    }
                }

                function s() {
                    h = function(e) {
                        t.nextTick(function() {
                            a(e)
                        })
                    }
                }

                function u() {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0,
                            r = e.onmessage;
                        return e.onmessage = function() {
                            t = !1
                        }, e.postMessage("", "*"), e.onmessage = r, t
                    }
                }

                function l() {
                    var t = "setImmediate$" + Math.random() + "$",
                        r = function(r) {
                            r.source === e && "string" == typeof r.data && 0 === r.data.indexOf(t) && a(+r.data.slice(t.length))
                        };
                    e.addEventListener ? e.addEventListener("message", r, !1) : e.attachEvent("onmessage", r), h = function(r) {
                        e.postMessage(t + r, "*")
                    }
                }

                function c() {
                    var e = new MessageChannel;
                    e.port1.onmessage = function(e) {
                        var t = e.data;
                        a(t)
                    }, h = function(t) {
                        e.port2.postMessage(t)
                    }
                }

                function d() {
                    var e = y.documentElement;
                    h = function(t) {
                        var r = y.createElement("script");
                        r.onreadystatechange = function() {
                            a(t), r.onreadystatechange = null, e.removeChild(r), r = null
                        }, e.appendChild(r)
                    }
                }

                function p() {
                    h = function(e) {
                        setTimeout(a, 0, e)
                    }
                }
                if (!e.setImmediate) {
                    var h, f = 1,
                        _ = {},
                        g = !1,
                        y = e.document,
                        v = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    v = v && v.setTimeout ? v : e, "[object process]" === {}.toString.call(e.process) ? s() : u() ? l() : e.MessageChannel ? c() : y && "onreadystatechange" in y.createElement("script") ? d() : p(), v.setImmediate = n, v.clearImmediate = o
                }
            }("undefined" == typeof self ? "undefined" == typeof e ? this : e : self)
        }).call(t, function() {
            return this
        }(), r(6))
    }, function(e, t) {
        "use strict";
        e.exports = function(e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            })
        }
    }, function(e, t) {
        e.exports = function() {
            throw new Error("define cannot be used indirect")
        }
    }, function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
        }
    }, function(e, t, r) {
        function n(e, t) {
            this._id = e, this._clearFn = t
        }
        var o = Function.prototype.apply;
        t.setTimeout = function() {
            return new n(o.call(setTimeout, window, arguments), clearTimeout)
        }, t.setInterval = function() {
            return new n(o.call(setInterval, window, arguments), clearInterval)
        }, t.clearTimeout = t.clearInterval = function(e) {
            e && e.close()
        }, n.prototype.unref = n.prototype.ref = function() {}, n.prototype.close = function() {
            this._clearFn.call(window, this._id)
        }, t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
        }, t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout()
            }, t))
        }, r(21), t.setImmediate = setImmediate, t.clearImmediate = clearImmediate
    }, function(e, t) {
        var r = window.URL || window.webkitURL;
        e.exports = function(e, t) {
            try {
                try {
                    var n;
                    try {
                        var o = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
                        n = new o, n.append(e), n = n.getBlob()
                    } catch (t) {
                        n = new Blob([e])
                    }
                    return new Worker(r.createObjectURL(n))
                } catch (t) {
                    return new Worker("data:application/javascript," + encodeURIComponent(e))
                }
            } catch (e) {
                return new Worker(t)
            }
        }
    }, function(e, t, r) {
        e.exports = function() {
            return r(26)('!function(t){function n(r){if(e[r])return e[r].exports;var a=e[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n){(function(t){function n(t){h=t.sampleRate,v=t.numChannels,s()}function e(t){for(var n=0;n<v;n++)p[n].push(t[n]);g+=t[0].length}function r(t){for(var n=[],e=0;e<v;e++)n.push(i(p[e],g));if(2===v)var r=f(n[0],n[1]);else var r=n[0];var a=l(r),o=new Blob([a],{type:t});this.postMessage(o)}function a(){for(var t=[],n=0;n<v;n++)t.push(i(p[n],g));this.postMessage(t)}function o(){g=0,p=[],s()}function s(){for(var t=0;t<v;t++)p[t]=[]}function i(t,n){for(var e=new Float32Array(n),r=0,a=0;a<t.length;a++)e.set(t[a],r),r+=t[a].length;return e}function f(t,n){for(var e=t.length+n.length,r=new Float32Array(e),a=0,o=0;a<e;)r[a++]=t[o],r[a++]=n[o],o++;return r}function c(t,n,e){for(var r=0;r<e.length;r++,n+=2){var a=Math.max(-1,Math.min(1,e[r]));t.setInt16(n,a<0?32768*a:32767*a,!0)}}function u(t,n,e){for(var r=0;r<e.length;r++)t.setUint8(n+r,e.charCodeAt(r))}function l(t){var n=new ArrayBuffer(44+2*t.length),e=new DataView(n);return u(e,0,"RIFF"),e.setUint32(4,36+2*t.length,!0),u(e,8,"WAVE"),u(e,12,"fmt "),e.setUint32(16,16,!0),e.setUint16(20,1,!0),e.setUint16(22,v,!0),e.setUint32(24,h,!0),e.setUint32(28,4*h,!0),e.setUint16(32,2*v,!0),e.setUint16(34,16,!0),u(e,36,"data"),e.setUint32(40,2*t.length,!0),c(e,44,t),e}var h,v,g=0,p=[];t.onmessage=function(t){switch(t.data.command){case"init":n(t.data.config);break;case"record":e(t.data.buffer);break;case"exportWAV":r(t.data.type);break;case"getBuffer":a();break;case"clear":o()}}}).call(n,function(){return this}())}]);\n//# sourceMappingURL=9f9aac32c9a7432b5555.worker.js.map', r.p + "9f9aac32c9a7432b5555.worker.js")
        }
    }, function(e, t, r) {
        var n = r(27),
            o = function(e, t) {
                var r = t || {},
                    o = r.bufferLen || 4096,
                    i = r.numChannels || 2;
                this.context = e.context, this.node = (this.context.createScriptProcessor || this.context.createJavaScriptNode).call(this.context, o, i, i);
                var a = new n;
                a.postMessage({
                    command: "init",
                    config: {
                        sampleRate: this.context.sampleRate,
                        numChannels: i
                    }
                });
                var s, u = !1;
                this.node.onaudioprocess = function(e) {
                    if (u) {
                        for (var t = [], r = 0; r < i; r++) t.push(e.inputBuffer.getChannelData(r));
                        a.postMessage({
                            command: "record",
                            buffer: t
                        })
                    }
                }, this.configure = function(e) {
                    for (var t in e) e.hasOwnProperty(t) && (r[t] = e[t])
                }, this.record = function() {
                    u = !0
                }, this.stop = function() {
                    u = !1
                }, this.clear = function() {
                    a.postMessage({
                        command: "clear"
                    })
                }, this.getBuffer = function(e) {
                    s = e || r.callback, a.postMessage({
                        command: "getBuffer"
                    })
                }, this.exportWAV = function(e, t) {
                    if (s = e || r.callback, t = t || r.type || "audio/wav", !s) throw new Error("Callback not set");
                    a.postMessage({
                        command: "exportWAV",
                        type: t
                    })
                }, a.onmessage = function(e) {
                    var t = e.data;
                    s(t)
                }, e.connect(this.node), this.node.connect(this.context.destination)
            };
        o.forceDownload = function(e, t) {
            var r = (window.URL || window.webkitURL).createObjectURL(e),
                n = window.document.createElement("a");
            n.href = r, n.download = t || "output.wav";
            var o = document.createEvent("Event");
            o.initEvent("click", !0, !0), n.dispatchEvent(o)
        }, e.exports = o
    }, function(e, t) {}])
});
//# sourceMappingURL=sdk-3.2.1.js.map