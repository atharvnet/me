/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 5.3.1.6 (15.12.2016)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
 **************************************************************************/
! function(jQuery, undefined) {
    "use strict";
    var version = {
        core: "5.3.1.6",
        "revolution.extensions.actions.min.js": "2.0.4",
        "revolution.extensions.carousel.min.js": "1.2.1",
        "revolution.extensions.kenburn.min.js": "1.2.0",
        "revolution.extensions.layeranimation.min.js": "3.5.0",
        "revolution.extensions.navigation.min.js": "1.3.2",
        "revolution.extensions.parallax.min.js": "2.2.0",
        "revolution.extensions.slideanims.min.js": "1.6",
        "revolution.extensions.video.min.js": "2.0.2"
    };
    jQuery.fn.extend({
        revolution: function(a) {
            var b = {
                delay: 9e3,
                responsiveLevels: 4064,
                visibilityLevels: [2048, 1024, 778, 480],
                gridwidth: 960,
                gridheight: 500,
                minHeight: 0,
                autoHeight: "off",
                sliderType: "standard",
                sliderLayout: "auto",
                fullScreenAutoWidth: "off",
                fullScreenAlignForce: "off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0",
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLimit: 0,
                hideSliderAtLimit: 0,
                disableProgressBar: "off",
                stopAtSlide: -1,
                stopAfterLoops: -1,
                shadow: 0,
                dottedOverlay: "none",
                startDelay: 0,
                lazyType: "smart",
                spinner: "spinner0",
                shuffle: "off",
                viewPort: {
                    enable: !1,
                    outof: "wait",
                    visible_area: "60%",
                    presize: !1
                },
                fallbacks: {
                    isJoomla: !1,
                    panZoomDisableOnMobile: "off",
                    simplifyAll: "on",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: !0,
                    ignoreHeightChanges: "off",
                    ignoreHeightChangesSize: 0
                },
                parallax: {
                    type: "off",
                    levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                    origo: "enterpoint",
                    speed: 400,
                    bgparallax: "off",
                    opacity: "on",
                    disable_onmobile: "off",
                    ddd_shadow: "on",
                    ddd_bgfreeze: "off",
                    ddd_overflow: "visible",
                    ddd_layer_overflow: "visible",
                    ddd_z_correction: 65,
                    ddd_path: "mouse"
                },
                scrolleffect: {
                    fade: "off",
                    blur: "off",
                    grayscale: "off",
                    maxblur: 10,
                    on_layers: "off",
                    on_slidebg: "off",
                    on_static_layers: "off",
                    on_parallax_layers: "off",
                    on_parallax_static_layers: "off",
                    direction: "both",
                    multiplicator: 1.35,
                    multiplicator_layers: .5,
                    tilt: 30,
                    disable_on_mobile: "on"
                },
                carousel: {
                    easing: punchgs.Power3.easeInOut,
                    speed: 800,
                    showLayersAllTime: "off",
                    horizontal_align: "center",
                    vertical_align: "center",
                    infinity: "on",
                    space: 0,
                    maxVisibleItems: 3,
                    stretch: "off",
                    fadeout: "on",
                    maxRotation: 0,
                    minScale: 0,
                    vary_fade: "off",
                    vary_rotation: "on",
                    vary_scale: "off",
                    border_radius: "0px",
                    padding_top: 0,
                    padding_bottom: 0
                },
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: "on",
                    touch: {
                        touchenabled: "off",
                        swipe_treshold: 75,
                        swipe_min_touches: 1,
                        drag_block_vertical: !1,
                        swipe_direction: "horizontal"
                    },
                    arrows: {
                        style: "",
                        enable: !1,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        tmp: "",
                        rtl: !1,
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0,
                            container: "slider"
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0,
                            container: "slider"
                        }
                    },
                    bullets: {
                        container: "slider",
                        rtl: !1,
                        style: "",
                        enable: !1,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        h_align: "left",
                        v_align: "center",
                        space: 0,
                        h_offset: 20,
                        v_offset: 0,
                        tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
                    },
                    thumbnails: {
                        container: "slider",
                        rtl: !1,
                        style: "",
                        enable: !1,
                        width: 100,
                        height: 50,
                        min_width: 100,
                        wrapper_padding: 2,
                        wrapper_color: "#f5f5f5",
                        wrapper_opacity: 1,
                        tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        position: "inner",
                        space: 2,
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    },
                    tabs: {
                        container: "slider",
                        rtl: !1,
                        style: "",
                        enable: !1,
                        width: 100,
                        min_width: 100,
                        height: 50,
                        wrapper_padding: 10,
                        wrapper_color: "#f5f5f5",
                        wrapper_opacity: 1,
                        tmp: '<span class="tp-tab-image"></span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        space: 0,
                        position: "inner",
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                extensions: "extensions/",
                extensions_suffix: ".min.js",
                debugMode: !1
            };
            return a = jQuery.extend(!0, {}, b, a), this.each(function() {
                var b = jQuery(this);
                a.minHeight = a.minHeight != undefined ? parseInt(a.minHeight, 0) : a.minHeight, a.scrolleffect.on = "on" === a.scrolleffect.fade || "on" === a.scrolleffect.blur || "on" === a.scrolleffect.grayscale, "hero" == a.sliderType && b.find(">ul>li").each(function(a) {
                    a > 0 && jQuery(this).remove()
                }), a.jsFileLocation = a.jsFileLocation || getScriptLocation("themepunch.revolution.min.js"), a.jsFileLocation = a.jsFileLocation + a.extensions, a.scriptsneeded = getNeededScripts(a, b), a.curWinRange = 0, a.rtl = !0, a.navigation != undefined && a.navigation.touch != undefined && (a.navigation.touch.swipe_min_touches = a.navigation.touch.swipe_min_touches > 5 ? 1 : a.navigation.touch.swipe_min_touches), jQuery(this).on("scriptsloaded", function() {
                    return a.modulesfailing ? (b.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.' + a.errorm + "</div>").show(), !1) : (_R.migration != undefined && (a = _R.migration(b, a)), punchgs.force3D = !0, "on" !== a.simplifyAll && punchgs.TweenLite.lagSmoothing(1e3, 16), prepareOptions(b, a), void initSlider(b, a))
                }), b[0].opt = a, waitForScripts(b, a)
            })
        },
        revremoveslide: function(a) {
            return this.each(function() {
                var b = jQuery(this),
                    c = b[0].opt;
                if (!(a < 0 || a > c.slideamount) && b != undefined && b.length > 0 && jQuery("body").find("#" + b.attr("id")).length > 0 && c && c.li.length > 0 && (a > 0 || a <= c.li.length)) {
                    var d = jQuery(c.li[a]),
                        e = d.data("index"),
                        f = !1;
                    c.slideamount = c.slideamount - 1, c.realslideamount = c.realslideamount - 1, removeNavWithLiref(".tp-bullet", e, c), removeNavWithLiref(".tp-tab", e, c), removeNavWithLiref(".tp-thumb", e, c), d.hasClass("active-revslide") && (f = !0), d.remove(), c.li = removeArray(c.li, a), c.carousel && c.carousel.slides && (c.carousel.slides = removeArray(c.carousel.slides, a)), c.thumbs = removeArray(c.thumbs, a), _R.updateNavIndexes && _R.updateNavIndexes(c), f && b.revnext(), punchgs.TweenLite.set(c.li, {
                        minWidth: "99%"
                    }), punchgs.TweenLite.set(c.li, {
                        minWidth: "100%"
                    })
                }
            })
        },
        revaddcallback: function(a) {
            return this.each(function() {
                this.opt && (this.opt.callBackArray === undefined && (this.opt.callBackArray = new Array), this.opt.callBackArray.push(a))
            })
        },
        revgetparallaxproc: function() {
            return jQuery(this)[0].opt.scrollproc
        },
        revdebugmode: function() {
            return this.each(function() {
                var a = jQuery(this);
                a[0].opt.debugMode = !0, containerResized(a, a[0].opt)
            })
        },
        revscroll: function(a) {
            return this.each(function() {
                var b = jQuery(this);
                jQuery("body,html").animate({
                    scrollTop: b.offset().top + b.height() - a + "px"
                }, {
                    duration: 400
                })
            })
        },
        revredraw: function(a) {
            return this.each(function() {
                var a = jQuery(this);
                containerResized(a, a[0].opt)
            })
        },
        revkill: function(a) {
            var b = this,
                c = jQuery(this);
            if (punchgs.TweenLite.killDelayedCallsTo(_R.showHideNavElements), c != undefined && c.length > 0 && jQuery("body").find("#" + c.attr("id")).length > 0) {
                c.data("conthover", 1), c.data("conthover-changed", 1), c.trigger("revolution.slide.onpause");
                var d = c.parent().find(".tp-bannertimer"),
                    e = c[0].opt;
                e.tonpause = !0, c.trigger("stoptimer"), punchgs.TweenLite.killTweensOf(c.find("*"), !1), punchgs.TweenLite.killTweensOf(c, !1), c.unbind("hover, mouseover, mouseenter,mouseleave, resize");
                var f = "resize.revslider-" + c.attr("id");
                jQuery(window).off(f), c.find("*").each(function() {
                    var a = jQuery(this);
                    a.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), a.off("on, hover, mouseenter,mouseleave,mouseover, resize"), a.data("mySplitText", null), a.data("ctl", null), a.data("tween") != undefined && a.data("tween").kill(), a.data("kenburn") != undefined && a.data("kenburn").kill(), a.data("timeline_out") != undefined && a.data("timeline_out").kill(), a.data("timeline") != undefined && a.data("timeline").kill(), a.remove(), a.empty(), a = null
                }), punchgs.TweenLite.killTweensOf(c.find("*"), !1), punchgs.TweenLite.killTweensOf(c, !1), d.remove();
                try {
                    c.closest(".forcefullwidth_wrapper_tp_banner").remove()
                } catch (a) {}
                try {
                    c.closest(".rev_slider_wrapper").remove()
                } catch (a) {}
                try {
                    c.remove()
                } catch (a) {}
                return c.empty(), c.html(), c = null, e = null, delete b.c, delete b.opt, !0
            }
            return !1
        },
        revpause: function() {
            return this.each(function() {
                var a = jQuery(this);
                a != undefined && a.length > 0 && jQuery("body").find("#" + a.attr("id")).length > 0 && (a.data("conthover", 1), a.data("conthover-changed", 1), a.trigger("revolution.slide.onpause"), a[0].opt.tonpause = !0, a.trigger("stoptimer"))
            })
        },
        revresume: function() {
            return this.each(function() {
                var a = jQuery(this);
                a != undefined && a.length > 0 && jQuery("body").find("#" + a.attr("id")).length > 0 && (a.data("conthover", 0), a.data("conthover-changed", 1), a.trigger("revolution.slide.onresume"), a[0].opt.tonpause = !1, a.trigger("starttimer"))
            })
        },
        revstart: function() {
            var a = jQuery(this);
            if (a != undefined && a.length > 0 && jQuery("body").find("#" + a.attr("id")).length > 0 && a[0].opt !== undefined) return a[0].opt.sliderisrunning ? (console.log("Slider Is Running Already"), !1) : (runSlider(a, a[0].opt), !0)
        },
        revnext: function() {
            return this.each(function() {
                var a = jQuery(this);
                a != undefined && a.length > 0 && jQuery("body").find("#" + a.attr("id")).length > 0 && _R.callingNewSlide(a, 1)
            })
        },
        revprev: function() {
            return this.each(function() {
                var a = jQuery(this);
                a != undefined && a.length > 0 && jQuery("body").find("#" + a.attr("id")).length > 0 && _R.callingNewSlide(a, -1)
            })
        },
        revmaxslide: function() {
            return jQuery(this).find(".tp-revslider-mainul >li").length
        },
        revcurrentslide: function() {
            var a = jQuery(this);
            if (a != undefined && a.length > 0 && jQuery("body").find("#" + a.attr("id")).length > 0) return parseInt(a[0].opt.act, 0) + 1
        },
        revlastslide: function() {
            return jQuery(this).find(".tp-revslider-mainul >li").length
        },
        revshowslide: function(a) {
            return this.each(function() {
                var b = jQuery(this);
                b != undefined && b.length > 0 && jQuery("body").find("#" + b.attr("id")).length > 0 && _R.callingNewSlide(b, "to" + (a - 1))
            })
        },
        revcallslidewithid: function(a) {
            return this.each(function() {
                var b = jQuery(this);
                b != undefined && b.length > 0 && jQuery("body").find("#" + b.attr("id")).length > 0 && _R.callingNewSlide(b, a)
            })
        }
    });
    var _R = jQuery.fn.revolution;
    jQuery.extend(!0, _R, {
        getversion: function() {
            return version
        },
        compare_version: function(a) {
            return "stop" != a.check && (_R.getversion().core < a.min_core ? (a.check === undefined && (console.log("%cSlider Revolution Warning (Core:" + _R.getversion().core + ")", "color:#c0392b;font-weight:bold;"), console.log("%c     Core is older than expected (" + a.min_core + ") from " + a.alias, "color:#333"), console.log("%c     Please update Slider Revolution to the latest version.", "color:#333"), console.log("%c     It might be required to purge and clear Server/Client side Caches.", "color:#333")), a.check = "stop") : _R.getversion()[a.name] != undefined && a.version < _R.getversion()[a.name] && (a.check === undefined && (console.log("%cSlider Revolution Warning (Core:" + _R.getversion().core + ")", "color:#c0392b;font-weight:bold;"), console.log("%c     " + a.alias + " (" + a.version + ") is older than requiered (" + _R.getversion()[a.name] + ")", "color:#333"), console.log("%c     Please update Slider Revolution to the latest version.", "color:#333"), console.log("%c     It might be required to purge and clear Server/Client side Caches.", "color:#333")), a.check = "stop")), a
        },
        currentSlideIndex: function(a) {
            var b = a.c.find(".active-revslide").index();
            return b = b == -1 ? 0 : b
        },
        simp: function(a, b, c) {
            var d = Math.abs(a) - Math.floor(Math.abs(a / b)) * b;
            return c ? d : a < 0 ? -1 * d : d
        },
        iOSVersion: function() {
            var a = !1;
            return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (a = !0) : a = !1, a
        },
        isIE: function(a, b) {
            var c = jQuery('<div style="display:none;"/>').appendTo(jQuery("body"));
            c.html("<!--[if " + (b || "") + " IE " + (a || "") + "]><a>&nbsp;</a><![endif]-->");
            var d = c.find("a").length;
            return c.remove(), d
        },
        is_mobile: function() {
            var a = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                b = !1;
            for (var c in a) navigator.userAgent.split(a[c]).length > 1 && (b = !0);
            return b
        },
        callBackHandling: function(a, b, c) {
            try {
                a.callBackArray && jQuery.each(a.callBackArray, function(a, d) {
                    d && d.inmodule && d.inmodule === b && d.atposition && d.atposition === c && d.callback && d.callback.call()
                })
            } catch (a) {
                console.log("Call Back Failed")
            }
        },
        get_browser: function() {
            var c, a = navigator.appName,
                b = navigator.userAgent,
                d = b.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return d && null != (c = b.match(/version\/([\.\d]+)/i)) && (d[2] = c[1]), d = d ? [d[1], d[2]] : [a, navigator.appVersion, "-?"], d[0]
        },
        get_browser_version: function() {
            var c, a = navigator.appName,
                b = navigator.userAgent,
                d = b.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return d && null != (c = b.match(/version\/([\.\d]+)/i)) && (d[2] = c[1]), d = d ? [d[1], d[2]] : [a, navigator.appVersion, "-?"], d[1]
        },
        getHorizontalOffset: function(a, b) {
            var c = gWiderOut(a, ".outer-left"),
                d = gWiderOut(a, ".outer-right");
            switch (b) {
                case "left":
                    return c;
                case "right":
                    return d;
                case "both":
                    return c + d
            }
        },
        callingNewSlide: function(a, b) {
            var c = a.find(".next-revslide").length > 0 ? a.find(".next-revslide").index() : a.find(".processing-revslide").length > 0 ? a.find(".processing-revslide").index() : a.find(".active-revslide").index(),
                d = 0,
                e = a[0].opt;
            a.find(".next-revslide").removeClass("next-revslide"), a.find(".active-revslide").hasClass("tp-invisible-slide") && (c = e.last_shown_slide), b && jQuery.isNumeric(b) || b.match(/to/g) ? (1 === b || b === -1 ? (d = c + b, d = d < 0 ? e.slideamount - 1 : d >= e.slideamount ? 0 : d) : (b = jQuery.isNumeric(b) ? b : parseInt(b.split("to")[1], 0), d = b < 0 ? 0 : b > e.slideamount - 1 ? e.slideamount - 1 : b), a.find(".tp-revslider-slidesli:eq(" + d + ")").addClass("next-revslide")) : b && a.find(".tp-revslider-slidesli").each(function() {
                var a = jQuery(this);
                a.data("index") === b && a.addClass("next-revslide")
            }), d = a.find(".next-revslide").index(), a.trigger("revolution.nextslide.waiting"), c === d && c === e.last_shown_slide || d !== c && d != -1 ? swapSlide(a) : a.find(".next-revslide").removeClass("next-revslide")
        },
        slotSize: function(a, b) {
            b.slotw = Math.ceil(b.width / b.slots), "fullscreen" == b.sliderLayout ? b.sloth = Math.ceil(jQuery(window).height() / b.slots) : b.sloth = Math.ceil(b.height / b.slots), "on" == b.autoHeight && a !== undefined && "" !== a && (b.sloth = Math.ceil(a.height() / b.slots))
        },
        setSize: function(a) {
            var b = (a.top_outer || 0) + (a.bottom_outer || 0),
                c = parseInt(a.carousel.padding_top || 0, 0),
                d = parseInt(a.carousel.padding_bottom || 0, 0),
                e = a.gridheight[a.curWinRange],
                f = 0,
                g = a.nextSlide === -1 || a.nextSlide === undefined ? 0 : a.nextSlide;
            if (a.paddings = a.paddings === undefined ? {
                    top: parseInt(a.c.parent().css("paddingTop"), 0) || 0,
                    bottom: parseInt(a.c.parent().css("paddingBottom"), 0) || 0
                } : a.paddings, a.rowzones && a.rowzones.length > 0)
                for (var h = 0; h < a.rowzones[g].length; h++) f += a.rowzones[g][h][0].offsetHeight;
            if (e = e < a.minHeight ? a.minHeight : e, e = e < f ? f : e, "fullwidth" == a.sliderLayout && "off" == a.autoHeight && punchgs.TweenLite.set(a.c, {
                    maxHeight: e + "px"
                }), a.c.css({
                    marginTop: c,
                    marginBottom: d
                }), a.width = a.ul.width(), a.height = a.ul.height(), setScale(a), a.height = Math.round(a.gridheight[a.curWinRange] * (a.width / a.gridwidth[a.curWinRange])), a.height > a.gridheight[a.curWinRange] && "on" != a.autoHeight && (a.height = a.gridheight[a.curWinRange]), "fullscreen" == a.sliderLayout || a.infullscreenmode) {
                a.height = a.bw * a.gridheight[a.curWinRange];
                var j = (a.c.parent().width(), jQuery(window).height());
                if (a.fullScreenOffsetContainer != undefined) {
                    try {
                        var k = a.fullScreenOffsetContainer.split(",");
                        k && jQuery.each(k, function(a, b) {
                            j = jQuery(b).length > 0 ? j - jQuery(b).outerHeight(!0) : j
                        })
                    } catch (a) {}
                    try {
                        a.fullScreenOffset.split("%").length > 1 && a.fullScreenOffset != undefined && a.fullScreenOffset.length > 0 ? j -= jQuery(window).height() * parseInt(a.fullScreenOffset, 0) / 100 : a.fullScreenOffset != undefined && a.fullScreenOffset.length > 0 && (j -= parseInt(a.fullScreenOffset, 0))
                    } catch (a) {}
                }
                j = j < a.minHeight ? a.minHeight : j, j -= b, a.c.parent().height(j), a.c.closest(".rev_slider_wrapper").height(j), a.c.css({
                    height: "100%"
                }), a.height = j, a.minHeight != undefined && a.height < a.minHeight && (a.height = a.minHeight), a.height = parseInt(f, 0) > parseInt(a.height, 0) ? f : a.height
            } else a.minHeight != undefined && a.height < a.minHeight && (a.height = a.minHeight), a.height = parseInt(f, 0) > parseInt(a.height, 0) ? f : a.height, a.c.height(a.height);
            var l = {
                height: c + d + b + a.height + a.paddings.top + a.paddings.bottom
            };
            a.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(l), a.c.closest(".rev_slider_wrapper").css(l), setScale(a)
        },
        enterInViewPort: function(a) {
            a.waitForCountDown && (countDown(a.c, a), a.waitForCountDown = !1), a.waitForFirstSlide && (swapSlide(a.c), a.waitForFirstSlide = !1, setTimeout(function() {
                a.c.removeClass("tp-waitforfirststart")
            }, 500)), "playing" != a.sliderlaststatus && a.sliderlaststatus != undefined || a.c.trigger("starttimer"), a.lastplayedvideos != undefined && a.lastplayedvideos.length > 0 && jQuery.each(a.lastplayedvideos, function(b, c) {
                _R.playVideo(c, a)
            })
        },
        leaveViewPort: function(a) {
            a.sliderlaststatus = a.sliderstatus, a.c.trigger("stoptimer"), a.playingvideos != undefined && a.playingvideos.length > 0 && (a.lastplayedvideos = jQuery.extend(!0, [], a.playingvideos), a.playingvideos && jQuery.each(a.playingvideos, function(b, c) {
                a.leaveViewPortBasedStop = !0, _R.stopVideo && _R.stopVideo(c, a)
            }))
        },
        unToggleState: function(a) {
            a != undefined && a.length > 0 && jQuery.each(a, function(a, b) {
                b.removeClass("rs-toggle-content-active")
            })
        },
        toggleState: function(a) {
            a != undefined && a.length > 0 && jQuery.each(a, function(a, b) {
                b.addClass("rs-toggle-content-active")
            })
        },
        swaptoggleState: function(a) {
            a != undefined && a.length > 0 && jQuery.each(a, function(a, b) {
                jQuery(b).hasClass("rs-toggle-content-active") ? jQuery(b).removeClass("rs-toggle-content-active") : jQuery(b).addClass("rs-toggle-content-active")
            })
        },
        lastToggleState: function(a) {
            var b = 0;
            return a != undefined && a.length > 0 && jQuery.each(a, function(a, c) {
                b = c.hasClass("rs-toggle-content-active")
            }), b
        }
    });
    var _ISM = _R.is_mobile(),
        checkIDS = function(a, b) {
            a.anyid = a.anyid === undefined ? [] : a.anyid;
            var c = jQuery.inArray(b.attr("id"), a.anyid);
            if (c != -1) {
                var d = b.attr("id") + "_" + Math.round(9999 * Math.random());
                b.attr("id", d)
            }
            a.anyid.push(b.attr("id"))
        },
        removeArray = function(a, b) {
            var c = [];
            return jQuery.each(a, function(a, d) {
                a != b && c.push(d)
            }), c
        },
        removeNavWithLiref = function(a, b, c) {
            c.c.find(a).each(function() {
                var a = jQuery(this);
                a.data("liref") === b && a.remove()
            })
        },
        lAjax = function(a, b) {
            return !jQuery("body").data(a) && (b.filesystem ? (b.errorm === undefined && (b.errorm = "<br>Local Filesystem Detected !<br>Put this to your header:"), console.warn("Local Filesystem detected !"), b.errorm = b.errorm + '<br>&lt;script type="text/javascript" src="' + b.jsFileLocation + a + b.extensions_suffix + '"&gt;&lt;/script&gt;', console.warn(b.jsFileLocation + a + b.extensions_suffix + " could not be loaded !"), console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."), console.log(" "), b.modulesfailing = !0, !1) : (jQuery.ajax({
                url: b.jsFileLocation + a + b.extensions_suffix + "?version=" + version.core,
                dataType: "script",
                cache: !0,
                error: function(c) {
                    console.warn("Slider Revolution 5.0 Error !"), console.error("Failure at Loading:" + a + b.extensions_suffix + " on Path:" + b.jsFileLocation), console.info(c)
                }
            }), void jQuery("body").data(a, !0)))
        },
        getNeededScripts = function(a, b) {
            var c = new Object,
                d = a.navigation;
            return c.kenburns = !1, c.parallax = !1, c.carousel = !1, c.navigation = !1, c.videos = !1, c.actions = !1, c.layeranim = !1, c.migration = !1, b.data("version") && b.data("version").toString().match(/5./gi) ? (b.find("img").each(function() {
                "on" == jQuery(this).data("kenburns") && (c.kenburns = !0)
            }), ("carousel" == a.sliderType || "on" == d.keyboardNavigation || "on" == d.mouseScrollNavigation || "on" == d.touch.touchenabled || d.arrows.enable || d.bullets.enable || d.thumbnails.enable || d.tabs.enable) && (c.navigation = !0), b.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function() {
                var a = jQuery(this);
                (a.data("ytid") != undefined || a.find("iframe").length > 0 && a.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (c.videos = !0), (a.data("vimeoid") != undefined || a.find("iframe").length > 0 && a.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (c.videos = !0), a.data("actions") !== undefined && (c.actions = !0), c.layeranim = !0
            }), b.find("li").each(function() {
                jQuery(this).data("link") && jQuery(this).data("link") != undefined && (c.layeranim = !0, c.actions = !0)
            }), !c.videos && (b.find(".rs-background-video-layer").length > 0 || b.find(".tp-videolayer").length > 0 || b.find(".tp-audiolayer").length > 0 || b.find("iframe").length > 0 || b.find("video").length > 0) && (c.videos = !0), "carousel" == a.sliderType && (c.carousel = !0), ("off" !== a.parallax.type || a.viewPort.enable || "true" == a.viewPort.enable || "true" === a.scrolleffect.on || a.scrolleffect.on) && (c.parallax = !0)) : (c.kenburns = !0, c.parallax = !0, c.carousel = !1, c.navigation = !0, c.videos = !0, c.actions = !0, c.layeranim = !0, c.migration = !0), "hero" == a.sliderType && (c.carousel = !1, c.navigation = !1), window.location.href.match(/file:/gi) && (c.filesystem = !0, a.filesystem = !0), c.videos && "undefined" == typeof _R.isVideoPlaying && lAjax("revolution.extension.video", a), c.carousel && "undefined" == typeof _R.prepareCarousel && lAjax("revolution.extension.carousel", a), c.carousel || "undefined" != typeof _R.animateSlide || lAjax("revolution.extension.slideanims", a), c.actions && "undefined" == typeof _R.checkActions && lAjax("revolution.extension.actions", a), c.layeranim && "undefined" == typeof _R.handleStaticLayers && lAjax("revolution.extension.layeranimation", a), c.kenburns && "undefined" == typeof _R.stopKenBurn && lAjax("revolution.extension.kenburn", a), c.navigation && "undefined" == typeof _R.createNavigation && lAjax("revolution.extension.navigation", a), c.migration && "undefined" == typeof _R.migration && lAjax("revolution.extension.migration", a), c.parallax && "undefined" == typeof _R.checkForParallax && lAjax("revolution.extension.parallax", a), a.addons != undefined && a.addons.length > 0 && jQuery.each(a.addons, function(b, c) {
                "object" == typeof c && c.fileprefix != undefined && lAjax(c.fileprefix, a)
            }), c
        },
        waitForScripts = function(a, b) {
            var c = !0,
                d = b.scriptsneeded;
            b.addons != undefined && b.addons.length > 0 && jQuery.each(b.addons, function(a, b) {
                "object" == typeof b && b.init != undefined && _R[b.init] === undefined && (c = !1)
            }), d.filesystem || "undefined" != typeof punchgs && c && (!d.kenburns || d.kenburns && "undefined" != typeof _R.stopKenBurn) && (!d.navigation || d.navigation && "undefined" != typeof _R.createNavigation) && (!d.carousel || d.carousel && "undefined" != typeof _R.prepareCarousel) && (!d.videos || d.videos && "undefined" != typeof _R.resetVideo) && (!d.actions || d.actions && "undefined" != typeof _R.checkActions) && (!d.layeranim || d.layeranim && "undefined" != typeof _R.handleStaticLayers) && (!d.migration || d.migration && "undefined" != typeof _R.migration) && (!d.parallax || d.parallax && "undefined" != typeof _R.checkForParallax) && (d.carousel || !d.carousel && "undefined" != typeof _R.animateSlide) ? a.trigger("scriptsloaded") : setTimeout(function() {
                waitForScripts(a, b)
            }, 50)
        },
        getScriptLocation = function(a) {
            var b = new RegExp("themepunch.revolution.min.js", "gi"),
                c = "";
            return jQuery("script").each(function() {
                var a = jQuery(this).attr("src");
                a && a.match(b) && (c = a)
            }), c = c.replace("jquery.themepunch.revolution.min.js", ""), c = c.replace("jquery.themepunch.revolution.js", ""), c = c.split("?")[0]
        },
        setCurWinRange = function(a, b) {
            var d = 9999,
                e = 0,
                f = 0,
                g = 0,
                h = jQuery(window).width(),
                i = b && 9999 == a.responsiveLevels ? a.visibilityLevels : a.responsiveLevels;
            i && i.length && jQuery.each(i, function(a, b) {
                h < b && (0 == e || e > b) && (d = b, g = a, e = b), h > b && e < b && (e = b, f = a)
            }), e < d && (g = f), b ? a.forcedWinRange = g : a.curWinRange = g
        },
        prepareOptions = function(a, b) {
            b.carousel.maxVisibleItems = b.carousel.maxVisibleItems < 1 ? 999 : b.carousel.maxVisibleItems, b.carousel.vertical_align = "top" === b.carousel.vertical_align ? "0%" : "bottom" === b.carousel.vertical_align ? "100%" : "50%"
        },
        gWiderOut = function(a, b) {
            var c = 0;
            return a.find(b).each(function() {
                var a = jQuery(this);
                !a.hasClass("tp-forcenotvisible") && c < a.outerWidth() && (c = a.outerWidth())
            }), c
        },
        initSlider = function(container, opt) {
            return container != undefined && (container.data("aimg") != undefined && ("enabled" == container.data("aie8") && _R.isIE(8) || "enabled" == container.data("amobile") && _ISM) && container.html('<img class="tp-slider-alternative-image" src="' + container.data("aimg") + '">'), container.find(">ul").addClass("tp-revslider-mainul"), opt.c = container, opt.ul = container.find(".tp-revslider-mainul"), opt.ul.find(">li").each(function(a) {
                var b = jQuery(this);
                "on" == b.data("hideslideonmobile") && _ISM && b.remove(), (b.data("invisible") || b.data("invisible") === !0) && (b.addClass("tp-invisible-slide"), b.appendTo(opt.ul))
            }), opt.addons != undefined && opt.addons.length > 0 && jQuery.each(opt.addons, function(i, obj) {
                "object" == typeof obj && obj.init != undefined && _R[obj.init](eval(obj.params))
            }), opt.cid = container.attr("id"), opt.ul.css({
                visibility: "visible"
            }), opt.slideamount = opt.ul.find(">li").not(".tp-invisible-slide").length, opt.realslideamount = opt.ul.find(">li").length, opt.slayers = container.find(".tp-static-layers"), opt.slayers.data("index", "staticlayers"), void(1 != opt.waitForInit && (container[0].opt = opt, runSlider(container, opt))))
        },
        onFullScreenChange = function() {
            jQuery("body").data("rs-fullScreenMode", !jQuery("body").data("rs-fullScreenMode")), jQuery("body").data("rs-fullScreenMode") && setTimeout(function() {
                jQuery(window).trigger("resize")
            }, 200)
        },
        runSlider = function(a, b) {
            if (b.sliderisrunning = !0, b.ul.find(">li").each(function(a) {
                    jQuery(this).data("originalindex", a)
                }), b.allli = b.ul.find(">li"), jQuery.each(b.allli, function(a, b) {
                    var b = jQuery(b);
                    b.data("origindex", b.index())
                }), b.li = b.ul.find(">li").not(".tp-invisible-slide"), "on" == b.shuffle) {
                var c = new Object,
                    d = b.ul.find(">li:first-child");
                c.fstransition = d.data("fstransition"), c.fsmasterspeed = d.data("fsmasterspeed"), c.fsslotamount = d.data("fsslotamount");
                for (var e = 0; e < b.slideamount; e++) {
                    var f = Math.round(Math.random() * b.slideamount);
                    b.ul.find(">li:eq(" + f + ")").prependTo(b.ul)
                }
                var g = b.ul.find(">li:first-child");
                g.data("fstransition", c.fstransition), g.data("fsmasterspeed", c.fsmasterspeed), g.data("fsslotamount", c.fsslotamount), b.allli = b.ul.find(">li"), b.li = b.ul.find(">li").not(".tp-invisible-slide")
            }
            if (b.inli = b.ul.find(">li.tp-invisible-slide"), b.thumbs = new Array, b.slots = 4, b.act = -1, b.firststart = 1, b.loadqueue = new Array, b.syncload = 0, b.conw = a.width(), b.conh = a.height(), b.responsiveLevels.length > 1 ? b.responsiveLevels[0] = 9999 : b.responsiveLevels = 9999, jQuery.each(b.allli, function(a, c) {
                    var c = jQuery(c),
                        d = c.find(".rev-slidebg") || c.find("img").first(),
                        e = 0;
                    c.addClass("tp-revslider-slidesli"), c.data("index") === undefined && c.data("index", "rs-" + Math.round(999999 * Math.random()));
                    var f = new Object;
                    f.params = new Array, f.id = c.data("index"), f.src = c.data("thumb") !== undefined ? c.data("thumb") : d.data("lazyload") !== undefined ? d.data("lazyload") : d.attr("src"), c.data("title") !== undefined && f.params.push({
                        from: RegExp("\\{\\{title\\}\\}", "g"),
                        to: c.data("title")
                    }), c.data("description") !== undefined && f.params.push({
                        from: RegExp("\\{\\{description\\}\\}", "g"),
                        to: c.data("description")
                    });
                    for (var e = 1; e <= 10; e++) c.data("param" + e) !== undefined && f.params.push({
                        from: RegExp("\\{\\{param" + e + "\\}\\}", "g"),
                        to: c.data("param" + e)
                    });
                    if (b.thumbs.push(f), c.data("link") != undefined) {
                        var g = c.data("link"),
                            h = c.data("target") || "_self",
                            i = "back" === c.data("slideindex") ? 0 : 60,
                            j = c.data("linktoslide"),
                            k = j;
                        j != undefined && "next" != j && "prev" != j && b.allli.each(function() {
                            var a = jQuery(this);
                            a.data("origindex") + 1 == k && (j = a.data("index"))
                        }), "slide" != g && (j = "no");
                        var l = '<div class="tp-caption slidelink" style="cursor:pointer;width:100%;height:100%;z-index:' + i + ';" data-x="center" data-y="center" data-basealign="slide" ',
                            m = "scroll_under" === j ? '[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]' : "prev" === j ? '[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]' : "next" === j ? '[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]' : '[{"event":"click","action":"jumptoslide","slide":"' + j + '","delay":"0.2"}]',
                            n = ' data-frames=\'[{"delay":0,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]\'';
                        l = "no" == j ? l + n + " >" : l + "data-actions='" + m + "'" + n + " >", l += '<a style="width:100%;height:100%;display:block"', l = "slide" != g ? l + ' target="' + h + '" href="' + g + '"' : l, l += '><span style="width:100%;height:100%;display:block"></span></a></div>', c.append(l)
                    }
                }), b.rle = b.responsiveLevels.length || 1, b.gridwidth = cArray(b.gridwidth, b.rle), b.gridheight = cArray(b.gridheight, b.rle), "on" == b.simplifyAll && (_R.isIE(8) || _R.iOSVersion()) && (a.find(".tp-caption").each(function() {
                    var a = jQuery(this);
                    a.removeClass("customin customout").addClass("fadein fadeout"), a.data("splitin", ""), a.data("speed", 400)
                }), b.allli.each(function() {
                    var a = jQuery(this);
                    a.data("transition", "fade"), a.data("masterspeed", 500), a.data("slotamount", 1);
                    var b = a.find(".rev-slidebg") || a.find(">img").first();
                    b.data("kenburns", "off")
                })), b.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), b.autoHeight = "fullscreen" == b.sliderLayout ? "on" : b.autoHeight, "fullwidth" == b.sliderLayout && "off" == b.autoHeight && a.css({
                    maxHeight: b.gridheight[b.curWinRange] + "px"
                }), "auto" != b.sliderLayout && 0 == a.closest(".forcefullwidth_wrapper_tp_banner").length && ("fullscreen" !== b.sliderLayout || "on" != b.fullScreenAutoWidth)) {
                var h = a.parent(),
                    i = h.css("marginBottom"),
                    j = h.css("marginTop"),
                    k = a.attr("id") + "_forcefullwidth";
                i = i === undefined ? 0 : i, j = j === undefined ? 0 : j, h.wrap('<div class="forcefullwidth_wrapper_tp_banner" id="' + k + '" style="position:relative;width:100%;height:auto;margin-top:' + j + ";margin-bottom:" + i + '"></div>'), a.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + a.height() + 'px"></div>'), a.parent().css({
                    marginTop: "0px",
                    marginBottom: "0px"
                }), a.parent().css({
                    position: "absolute"
                })
            }
            if (b.shadow !== undefined && b.shadow > 0 && (a.parent().addClass("tp-shadow" + b.shadow), a.parent().append('<div class="tp-shadowcover"></div>'), a.parent().find(".tp-shadowcover").css({
                    backgroundColor: a.parent().css("backgroundColor"),
                    backgroundImage: a.parent().css("backgroundImage")
                })), setCurWinRange(b), setCurWinRange(b, !0), !a.hasClass("revslider-initialised")) {
                a.addClass("revslider-initialised"), a.addClass("tp-simpleresponsive"), a.attr("id") == undefined && a.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), checkIDS(b, a), b.firefox13 = !1, b.ie = !jQuery.support.opacity, b.ie9 = 9 == document.documentMode, b.origcd = b.delay;
                var l = jQuery.fn.jquery.split("."),
                    m = parseFloat(l[0]),
                    n = parseFloat(l[1]);
                parseFloat(l[2] || "0");
                1 == m && n < 7 && a.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + l + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), m > 1 && (b.ie = !1);
                var p = new Object;
                p.addedyt = 0, p.addedvim = 0, p.addedvid = 0, b.scrolleffect.on && (b.scrolleffect.layers = new Array), a.find(".tp-caption, .rs-background-video-layer").each(function(a) {
                    var c = jQuery(this),
                        d = c.data(),
                        e = d.autoplayonlyfirsttime,
                        f = d.autoplay,
                        g = c.hasClass("tp-audiolayer"),
                        h = d.videoloop,
                        i = !0,
                        j = !1;
                    d.startclasses = c.attr("class"), d.isparallaxlayer = d.startclasses.indexOf("rs-parallax") >= 0, c.hasClass("tp-static-layer") && _R.handleStaticLayers && (_R.handleStaticLayers(c, b), b.scrolleffect.on && ("on" === b.scrolleffect.on_parallax_static_layers && d.isparallaxlayer || "on" === b.scrolleffect.on_static_layers && !d.isparallaxlayer) && (j = !0), i = !1);
                    var k = c.data("noposteronmobile") || c.data("noPosterOnMobile") || c.data("posteronmobile") || c.data("posterOnMobile") || c.data("posterOnMObile");
                    c.data("noposteronmobile", k);
                    var l = 0;
                    if (c.find("iframe").each(function() {
                            punchgs.TweenLite.set(jQuery(this), {
                                autoAlpha: 0
                            }), l++
                        }), l > 0 && c.data("iframes", !0), c.hasClass("tp-caption")) {
                        var m = c.hasClass("slidelink") ? "width:100% !important;height:100% !important;" : "",
                            n = c.data(),
                            o = n.type,
                            q = "row" === o || "column" === o ? "relative" : "absolute",
                            r = "";
                        "row" === o ? (c.addClass("rev_row").removeClass("tp-resizeme"), r = "rev_row_wrap") : "column" === o ? (r = "rev_column", c.addClass("rev_column_inner").removeClass("tp-resizeme"), c.data("width", "auto"), punchgs.TweenLite.set(c, {
                            width: "auto"
                        })) : "group" === o && c.removeClass("tp-resizeme");
                        var s = "",
                            t = "";
                        "row" !== o && "group" !== o && "column" !== o ? (s = "display:" + c.css("display") + ";", c.closest(".rev_column").length > 0 ? (c.addClass("rev_layer_in_column"), i = !1) : c.closest(".rev_group").length > 0 && (c.addClass("rev_layer_in_group"), i = !1)) : "column" === o && (i = !1), n.wrapper_class !== undefined && (r = r + " " + n.wrapper_class), n.wrapper_id !== undefined && (t = 'id="' + n.wrapper_id + '"'), c.wrap("<div " + t + ' class="tp-parallax-wrap ' + r + '" style="' + m + "position:" + q + ";" + s + ';visibility:hidden"><div class="tp-loop-wrap" style="' + m + "position:" + q + ";" + s + ';"><div class="tp-mask-wrap" style="' + m + "position:" + q + ";" + s + ';" ></div></div></div>'),
                            i && b.scrolleffect.on && ("on" === b.scrolleffect.on_parallax_layers && d.isparallaxlayer || "on" === b.scrolleffect.on_layers && !d.isparallaxlayer) && b.scrolleffect.layers.push(c.parent()), j && b.scrolleffect.layers.push(c.parent()), "column" === o && (c.append('<div class="rev_column_bg rev_column_bg_man_sized" style="display:none"></div>'), c.closest(".tp-parallax-wrap").append('<div class="rev_column_bg rev_column_bg_auto_sized"></div>'));
                        var u = ["pendulum", "rotate", "slideloop", "pulse", "wave"],
                            v = c.closest(".tp-loop-wrap");
                        jQuery.each(u, function(a, b) {
                            var d = c.find(".rs-" + b),
                                e = d.data() || "";
                            "" != e && (v.data(e), v.addClass("rs-" + b), d.children(0).unwrap(), c.data("loopanimation", "on"))
                        }), c.attr("id") === undefined && c.attr("id", "layer-" + Math.round(999999999 * Math.random())), checkIDS(b, c), punchgs.TweenLite.set(c, {
                            visibility: "hidden"
                        })
                    }
                    var w = c.data("actions");
                    w !== undefined && _R.checkActions(c, b, w), checkHoverDependencies(c, b), _R.checkVideoApis && (p = _R.checkVideoApis(c, b, p)), _ISM && (1 != e && "true" != e || (d.autoplayonlyfirsttime = !1, e = !1), 1 != f && "true" != f && "on" != f && "1sttime" != f || (d.autoplay = "off", f = "off")), g || 1 != e && "true" != e && "1sttime" != f || "loopandnoslidestop" == h || c.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"), g || 1 != f && "true" != f && "on" != f && "no1sttime" != f || "loopandnoslidestop" == h || c.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always")
                }), a[0].addEventListener("mouseenter", function() {
                    a.trigger("tp-mouseenter"), b.overcontainer = !0
                }, {
                    passive: !0
                }), a[0].addEventListener("mouseover", function() {
                    a.trigger("tp-mouseover"), b.overcontainer = !0
                }, {
                    passive: !0
                }), a[0].addEventListener("mouseleave", function() {
                    a.trigger("tp-mouseleft"), b.overcontainer = !1
                }, {
                    passive: !0
                }), a.find(".tp-caption video").each(function(a) {
                    var b = jQuery(this);
                    b.removeClass("video-js vjs-default-skin"), b.attr("preload", ""), b.css({
                        display: "none"
                    })
                }), "standard" !== b.sliderType && (b.lazyType = "all"), loadImages(a.find(".tp-static-layers"), b, 0, !0), waitForCurrentImages(a.find(".tp-static-layers"), b, function() {
                    a.find(".tp-static-layers img").each(function() {
                        var a = jQuery(this),
                            c = a.data("lazyload") != undefined ? a.data("lazyload") : a.attr("src"),
                            d = getLoadObj(b, c);
                        a.attr("src", d.src)
                    })
                }), b.rowzones = [], b.allli.each(function(a) {
                    var c = jQuery(this);
                    b.rowzones[a] = [], c.find(".rev_row_zone").each(function() {
                        b.rowzones[a].push(jQuery(this))
                    }), "all" != b.lazyType && ("smart" != b.lazyType || 0 != a && 1 != a && a != b.slideamount && a != b.slideamount - 1) || (loadImages(c, b, a), waitForCurrentImages(c, b, function() {}))
                });
                var q = getUrlVars("#")[0];
                if (q.length < 9 && q.split("slide").length > 1) {
                    var r = parseInt(q.split("slide")[1], 0);
                    r < 1 && (r = 1), r > b.slideamount && (r = b.slideamount), b.startWithSlide = r - 1
                }
                a.append('<div class="tp-loader ' + b.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), b.loader = a.find(".tp-loader"), 0 === a.find(".tp-bannertimer").length && a.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'), a.find(".tp-bannertimer").css({
                    width: "0%"
                }), b.ul.css({
                    display: "block"
                }), prepareSlides(a, b), ("off" !== b.parallax.type || b.scrolleffect.on) && _R.checkForParallax && _R.checkForParallax(a, b), _R.setSize(b), "hero" !== b.sliderType && _R.createNavigation && _R.createNavigation(a, b), _R.resizeThumbsTabs && _R.resizeThumbsTabs && _R.resizeThumbsTabs(b), contWidthManager(b);
                var s = b.viewPort;
                b.inviewport = !1, s != undefined && s.enable && (jQuery.isNumeric(s.visible_area) || s.visible_area.indexOf("%") !== -1 && (s.visible_area = parseInt(s.visible_area) / 100), _R.scrollTicker && _R.scrollTicker(b, a)), "carousel" === b.sliderType && _R.prepareCarousel && (punchgs.TweenLite.set(b.ul, {
                    opacity: 0
                }), _R.prepareCarousel(b, new punchgs.TimelineLite, undefined, 0), b.onlyPreparedSlide = !0), setTimeout(function() {
                    if (!s.enable || s.enable && b.inviewport || s.enable && !b.inviewport && "wait" == !s.outof) swapSlide(a);
                    else if (b.c.addClass("tp-waitforfirststart"), b.waitForFirstSlide = !0, s.presize) {
                        var c = jQuery(b.li[0]);
                        loadImages(c, b, 0, !0), waitForCurrentImages(c.find(".tp-layers"), b, function() {
                            _R.animateTheCaptions({
                                slide: c,
                                opt: b,
                                preset: !0
                            })
                        })
                    }
                    _R.manageNavigation && _R.manageNavigation(b), b.slideamount > 1 && (!s.enable || s.enable && b.inviewport ? countDown(a, b) : b.waitForCountDown = !0), setTimeout(function() {
                        a.trigger("revolution.slide.onloaded")
                    }, 100)
                }, b.startDelay), b.startDelay = 0, jQuery("body").data("rs-fullScreenMode", !1), window.addEventListener("fullscreenchange", onFullScreenChange, {
                    passive: !0
                }), window.addEventListener("mozfullscreenchange", onFullScreenChange, {
                    passive: !0
                }), window.addEventListener("webkitfullscreenchange", onFullScreenChange, {
                    passive: !0
                });
                var t = "resize.revslider-" + a.attr("id");
                jQuery(window).on(t, function() {
                    if (a == undefined) return !1;
                    0 != jQuery("body").find(a) && contWidthManager(b);
                    var c = !1;
                    if ("fullscreen" == b.sliderLayout) {
                        var d = jQuery(window).height();
                        "mobile" == b.fallbacks.ignoreHeightChanges && _ISM || "always" == b.fallbacks.ignoreHeightChanges ? (b.fallbacks.ignoreHeightChangesSize = b.fallbacks.ignoreHeightChangesSize == undefined ? 0 : b.fallbacks.ignoreHeightChangesSize, c = d != b.lastwindowheight && Math.abs(d - b.lastwindowheight) > b.fallbacks.ignoreHeightChangesSize) : c = d != b.lastwindowheight
                    }(a.outerWidth(!0) != b.width || a.is(":hidden") || c) && (b.lastwindowheight = jQuery(window).height(), containerResized(a, b))
                }), hideSliderUnder(a, b), contWidthManager(b), b.fallbacks.disableFocusListener || "true" == b.fallbacks.disableFocusListener || b.fallbacks.disableFocusListener === !0 || tabBlurringCheck(a, b)
            }
        },
        cArray = function(a, b) {
            if (!jQuery.isArray(a)) {
                var c = a;
                a = new Array, a.push(c)
            }
            if (a.length < b)
                for (var c = a[a.length - 1], d = 0; d < b - a.length + 2; d++) a.push(c);
            return a
        },
        checkHoverDependencies = function(a, b) {
            var c = a.data(),
                d = "sliderenter" === c.start || c.frames !== undefined && c.frames[0] != undefined && "sliderenter" === c.frames[0].delay;
            d && (b.layersonhover === undefined && (b.c.on("tp-mouseenter", function() {
                b.layersonhover && jQuery.each(b.layersonhover, function(a, c) {
                    var d = c.data("closestli") || c.closest(".tp-revslider-slidesli"),
                        e = c.data("staticli") || c.closest(".tp-static-layers");
                    c.data("closestli") === undefined && (c.data("closestli", d), c.data("staticli", e)), (d.length > 0 && d.hasClass("active-revslide") || d.hasClass("processing-revslide") || e.length > 0) && (c.data("animdirection", "in"), _R.playAnimationFrame && _R.playAnimationFrame({
                        caption: c,
                        opt: b,
                        frame: "frame_0",
                        triggerdirection: "in",
                        triggerframein: "frame_0",
                        triggerframeout: "frame_999"
                    }), c.data("triggerstate", "on"))
                })
            }), b.c.on("tp-mouseleft", function() {
                b.layersonhover && jQuery.each(b.layersonhover, function(a, c) {
                    c.data("animdirection", "out"), c.data("triggered", !0), c.data("triggerstate", "off"), _R.stopVideo && _R.stopVideo(c, b), _R.playAnimationFrame && _R.playAnimationFrame({
                        caption: c,
                        opt: b,
                        frame: "frame_999",
                        triggerdirection: "out",
                        triggerframein: "frame_0",
                        triggerframeout: "frame_999"
                    })
                })
            }), b.layersonhover = new Array), b.layersonhover.push(a))
        },
        contWidthManager = function(a) {
            var b = _R.getHorizontalOffset(a.c, "left");
            if ("auto" == a.sliderLayout || "fullscreen" === a.sliderLayout && "on" == a.fullScreenAutoWidth) "fullscreen" == a.sliderLayout && "on" == a.fullScreenAutoWidth ? punchgs.TweenLite.set(a.ul, {
                left: 0,
                width: a.c.width()
            }) : punchgs.TweenLite.set(a.ul, {
                left: b,
                width: a.c.width() - _R.getHorizontalOffset(a.c, "both")
            });
            else {
                var c = Math.ceil(a.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left - b);
                punchgs.TweenLite.set(a.c.parent(), {
                    left: 0 - c + "px",
                    width: jQuery(window).width() - _R.getHorizontalOffset(a.c, "both")
                })
            }
            a.slayers && "fullwidth" != a.sliderLayout && "fullscreen" != a.sliderLayout && punchgs.TweenLite.set(a.slayers, {
                left: b
            })
        },
        cv = function(a, b) {
            return a === undefined ? b : a
        },
        hideSliderUnder = function(a, b, c) {
            var d = a.parent();
            jQuery(window).width() < b.hideSliderAtLimit ? (a.trigger("stoptimer"), "none" != d.css("display") && d.data("olddisplay", d.css("display")), d.css({
                display: "none"
            })) : a.is(":hidden") && c && (d.data("olddisplay") != undefined && "undefined" != d.data("olddisplay") && "none" != d.data("olddisplay") ? d.css({
                display: d.data("olddisplay")
            }) : d.css({
                display: "block"
            }), a.trigger("restarttimer"), setTimeout(function() {
                containerResized(a, b)
            }, 150)), _R.hideUnHideNav && _R.hideUnHideNav(b)
        },
        containerResized = function(a, b) {
            if (a.trigger("revolution.slide.beforeredraw"), 1 == b.infullscreenmode && (b.minHeight = jQuery(window).height()), setCurWinRange(b), setCurWinRange(b, !0), !_R.resizeThumbsTabs || _R.resizeThumbsTabs(b) === !0) {
                if (hideSliderUnder(a, b, !0), contWidthManager(b), "carousel" == b.sliderType && _R.prepareCarousel(b, !0), a === undefined) return !1;
                _R.setSize(b), b.conw = b.c.width(), b.conh = b.infullscreenmode ? b.minHeight : b.c.height();
                var c = a.find(".active-revslide .slotholder"),
                    d = a.find(".processing-revslide .slotholder");
                removeSlots(a, b, a, 2), "standard" === b.sliderType && (punchgs.TweenLite.set(d.find(".defaultimg"), {
                    opacity: 0
                }), c.find(".defaultimg").css({
                    opacity: 1
                })), "carousel" === b.sliderType && b.lastconw != b.conw && (clearTimeout(b.pcartimer), b.pcartimer = setTimeout(function() {
                    _R.prepareCarousel(b, !0), "carousel" == b.sliderType && "on" === b.carousel.showLayersAllTime && jQuery.each(b.li, function(a) {
                        _R.animateTheCaptions({
                            slide: jQuery(b.li[a]),
                            opt: b,
                            recall: !0
                        })
                    })
                }, 100), b.lastconw = b.conw), _R.manageNavigation && _R.manageNavigation(b), _R.animateTheCaptions && a.find(".active-revslide").length > 0 && _R.animateTheCaptions({
                    slide: a.find(".active-revslide"),
                    opt: b,
                    recall: !0
                }), "on" == d.data("kenburns") && _R.startKenBurn(d, b, d.data("kbtl").progress()), "on" == c.data("kenburns") && _R.startKenBurn(c, b, c.data("kbtl").progress()), _R.animateTheCaptions && a.find(".processing-revslide").length > 0 && _R.animateTheCaptions({
                    slide: a.find(".processing-revslide"),
                    opt: b,
                    recall: !0
                }), _R.manageNavigation && _R.manageNavigation(b)
            }
            a.trigger("revolution.slide.afterdraw")
        },
        setScale = function(a) {
            a.bw = a.width / a.gridwidth[a.curWinRange], a.bh = a.height / a.gridheight[a.curWinRange], a.bh > a.bw ? a.bh = a.bw : a.bw = a.bh, (a.bh > 1 || a.bw > 1) && (a.bw = 1, a.bh = 1)
        },
        prepareSlides = function(a, b) {
            if (a.find(".tp-caption").each(function() {
                    var a = jQuery(this);
                    a.data("transition") !== undefined && a.addClass(a.data("transition"))
                }), b.ul.css({
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    maxHeight: a.parent().css("maxHeight")
                }), "on" == b.autoHeight && (b.ul.css({
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    maxHeight: "none"
                }), a.css({
                    maxHeight: "none"
                }), a.parent().css({
                    maxHeight: "none"
                })), b.allli.each(function(a) {
                    var c = jQuery(this),
                        d = c.data("originalindex");
                    (b.startWithSlide != undefined && d == b.startWithSlide || b.startWithSlide === undefined && 0 == a) && c.addClass("next-revslide"), c.css({
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    })
                }), "carousel" === b.sliderType) {
                b.ul.css({
                    overflow: "visible"
                }).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');
                var c = '<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';
                b.c.parent().prepend(c), b.c.parent().append(c), _R.prepareCarousel(b)
            }
            a.parent().css({
                overflow: "visible"
            }), b.allli.find(">img").each(function(a) {
                var c = jQuery(this),
                    d = c.closest("li"),
                    e = d.find(".rs-background-video-layer");
                e.addClass("defaultvid").css({
                    zIndex: 30
                }), c.addClass("defaultimg"), "on" == b.fallbacks.panZoomDisableOnMobile && _ISM && (c.data("kenburns", "off"), c.data("bgfit", "cover"));
                var f = d.data("mediafilter");
                f = "none" === f || f === undefined ? "" : f, c.wrap('<div class="slotholder" style="position:absolute; top:0px; left:0px; z-index:0;width:100%;height:100%;"></div>'), e.appendTo(d.find(".slotholder"));
                var g = c.data();
                c.closest(".slotholder").data(g), e.length > 0 && g.bgparallax != undefined && e.data("bgparallax", g.bgparallax), "none" != b.dottedOverlay && b.dottedOverlay != undefined && c.closest(".slotholder").append('<div class="tp-dottedoverlay ' + b.dottedOverlay + '"></div>');
                var h = c.attr("src");
                g.src = h, g.bgfit = g.bgfit || "cover", g.bgrepeat = g.bgrepeat || "no-repeat", g.bgposition = g.bgposition || "center center";
                var i = c.closest(".slotholder");
                c.parent().append('<div class="tp-bgimg defaultimg ' + f + '" style="background-color:' + c.css("backgroundColor") + ";background-repeat:" + g.bgrepeat + ";background-image:url(" + h + ");background-size:" + g.bgfit + ";background-position:" + g.bgposition + ';width:100%;height:100%;"></div>'), c.data("mediafilter", f);
                var j = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + c.get(0).outerHTML);
                c.replaceWith(j), c = i.find(".tp-bgimg"), c.data(g), c.attr("src", h), "standard" !== b.sliderType && "undefined" !== b.sliderType || c.css({
                    opacity: 0
                })
            }), b.scrolleffect.on && "on" === b.scrolleffect.on_slidebg && (b.allslotholder = new Array, b.allli.find(".slotholder").each(function() {
                jQuery(this).wrap('<div style="display:block;position:absolute;top:0px;left:0px;width:100%;height:100%" class="slotholder_fadeoutwrap"></div>')
            }), b.allslotholder = b.c.find(".slotholder_fadeoutwrap"))
        },
        removeSlots = function(a, b, c, d) {
            b.removePrepare = b.removePrepare + d, c.find(".slot, .slot-circle-wrapper").each(function() {
                jQuery(this).remove()
            }), b.transition = 0, b.removePrepare = 0
        },
        cutParams = function(a) {
            var b = a;
            return a != undefined && a.length > 0 && (b = a.split("?")[0]), b
        },
        relativeRedir = function(a) {
            return location.pathname.replace(/(.*)\/[^\/]*/, "$1/" + a)
        },
        abstorel = function(a, b) {
            var c = a.split("/"),
                d = b.split("/");
            c.pop();
            for (var e = 0; e < d.length; e++) "." != d[e] && (".." == d[e] ? c.pop() : c.push(d[e]));
            return c.join("/")
        },
        imgLoaded = function(a, b, c) {
            b.syncload--, b.loadqueue && jQuery.each(b.loadqueue, function(b, d) {
                var e = d.src.replace(/\.\.\/\.\.\//gi, ""),
                    f = self.location.href,
                    g = document.location.origin,
                    h = f.substring(0, f.length - 1) + "/" + e,
                    i = g + "/" + e,
                    j = abstorel(self.location.href, d.src);
                f = f.substring(0, f.length - 1) + e, g += e, (cutParams(g) === cutParams(decodeURIComponent(a.src)) || cutParams(f) === cutParams(decodeURIComponent(a.src)) || cutParams(j) === cutParams(decodeURIComponent(a.src)) || cutParams(i) === cutParams(decodeURIComponent(a.src)) || cutParams(h) === cutParams(decodeURIComponent(a.src)) || cutParams(d.src) === cutParams(decodeURIComponent(a.src)) || cutParams(d.src).replace(/^.*\/\/[^\/]+/, "") === cutParams(decodeURIComponent(a.src)).replace(/^.*\/\/[^\/]+/, "") || "file://" === window.location.origin && cutParams(a.src).match(new RegExp(e))) && (d.progress = c, d.width = a.width, d.height = a.height)
            }), progressImageLoad(b)
        },
        progressImageLoad = function(a) {
            3 != a.syncload && a.loadqueue && jQuery.each(a.loadqueue, function(b, c) {
                if (c.progress.match(/prepared/g) && a.syncload <= 3) {
                    if (a.syncload++, "img" == c.type) {
                        var d = new Image;
                        d.onload = function() {
                            imgLoaded(this, a, "loaded"), c.error = !1
                        }, d.onerror = function() {
                            imgLoaded(this, a, "failed"), c.error = !0
                        }, d.src = c.src
                    } else jQuery.get(c.src, function(b) {
                        c.innerHTML = (new XMLSerializer).serializeToString(b.documentElement), c.progress = "loaded", a.syncload--, progressImageLoad(a)
                    }).fail(function() {
                        c.progress = "failed", a.syncload--, progressImageLoad(a)
                    });
                    c.progress = "inload"
                }
            })
        },
        addToLoadQueue = function(a, b, c, d, e) {
            var f = !1;
            if (b.loadqueue && jQuery.each(b.loadqueue, function(b, c) {
                    c.src === a && (f = !0)
                }), !f) {
                var g = new Object;
                g.src = a, g.starttoload = jQuery.now(), g.type = d || "img", g.prio = c, g.progress = "prepared", g.static = e, b.loadqueue.push(g)
            }
        },
        loadImages = function(a, b, c, d) {
            a.find("img,.defaultimg, .tp-svg-layer").each(function() {
                var a = jQuery(this),
                    e = a.data("lazyload") !== undefined && "undefined" !== a.data("lazyload") ? a.data("lazyload") : a.data("svg_src") != undefined ? a.data("svg_src") : a.attr("src"),
                    f = a.data("svg_src") != undefined ? "svg" : "img";
                a.data("start-to-load", jQuery.now()), addToLoadQueue(e, b, c, f, d)
            }), progressImageLoad(b)
        },
        getLoadObj = function(a, b) {
            var c = new Object;
            return a.loadqueue && jQuery.each(a.loadqueue, function(a, d) {
                d.src == b && (c = d)
            }), c
        },
        waitForCurrentImages = function(a, b, c) {
            var d = !1;
            a.find("img,.defaultimg, .tp-svg-layer").each(function() {
                var c = jQuery(this),
                    e = c.data("lazyload") != undefined ? c.data("lazyload") : c.data("svg_src") != undefined ? c.data("svg_src") : c.attr("src"),
                    f = getLoadObj(b, e);
                if (c.data("loaded") === undefined && f !== undefined && f.progress && f.progress.match(/loaded/g)) {
                    if (c.attr("src", f.src), "img" == f.type)
                        if (c.hasClass("defaultimg")) _R.isIE(8) ? defimg.attr("src", f.src) : c.css({
                            backgroundImage: 'url("' + f.src + '")'
                        }), a.data("owidth", f.width), a.data("oheight", f.height), a.find(".slotholder").data("owidth", f.width), a.find(".slotholder").data("oheight", f.height);
                        else {
                            var g = c.data("ww"),
                                h = c.data("hh");
                            c.data("owidth", f.width), c.data("oheight", f.height), g = g == undefined || "auto" == g || "" == g ? f.width : g, h = h == undefined || "auto" == h || "" == h ? f.height : h, !jQuery.isNumeric(g) && g.indexOf("%") > 0 && (h = g), c.data("ww", g), c.data("hh", h)
                        } else "svg" == f.type && "loaded" == f.progress && (c.append('<div class="tp-svg-innercontainer"></div>'), c.find(".tp-svg-innercontainer").append(f.innerHTML));
                    c.data("loaded", !0)
                }
                if (f && f.progress && f.progress.match(/inprogress|inload|prepared/g) && (!f.error && jQuery.now() - c.data("start-to-load") < 5e3 ? d = !0 : (f.progress = "failed", f.reported_img || (f.reported_img = !0, console.warn(e + "  Could not be loaded !")))), 1 == b.youtubeapineeded && (!window.YT || YT.Player == undefined) && (d = !0, jQuery.now() - b.youtubestarttime > 5e3 && 1 != b.youtubewarning)) {
                    b.youtubewarning = !0;
                    var i = "YouTube Api Could not be loaded !";
                    "https:" === location.protocol && (i += " Please Check and Renew SSL Certificate !"), console.error(i), b.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + i + "</strong></div>")
                }
                if (1 == b.vimeoapineeded && !window.Froogaloop && (d = !0, jQuery.now() - b.vimeostarttime > 5e3 && 1 != b.vimeowarning)) {
                    b.vimeowarning = !0;
                    var i = "Vimeo Froogaloop Api Could not be loaded !";
                    "https:" === location.protocol && (i += " Please Check and Renew SSL Certificate !"), console.error(i), b.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + i + "</strong></div>")
                }
            }), !_ISM && b.audioqueue && b.audioqueue.length > 0 && jQuery.each(b.audioqueue, function(a, b) {
                b.status && "prepared" === b.status && jQuery.now() - b.start < b.waittime && (d = !0)
            }), jQuery.each(b.loadqueue, function(a, b) {
                b.static !== !0 || "loaded" == b.progress && "failed" !== b.progress || ("failed" == b.progress ? b.reported || (b.reported = !0, console.warn("Static Image " + b.src + "  Could not be loaded in time. Error Exists:" + b.error)) : !b.error && jQuery.now() - b.starttoload < 5e3 ? d = !0 : b.reported || (b.reported = !0, console.warn("Static Image " + b.src + "  Could not be loaded within 5s! Error Exists:" + b.error)))
            }), d ? punchgs.TweenLite.delayedCall(.18, waitForCurrentImages, [a, b, c]) : punchgs.TweenLite.delayedCall(.18, c)
        },
        swapSlide = function(a) {
            var b = a[0].opt;
            if (clearTimeout(b.waitWithSwapSlide), a.find(".processing-revslide").length > 0) return b.waitWithSwapSlide = setTimeout(function() {
                swapSlide(a)
            }, 150), !1;
            var c = a.find(".active-revslide"),
                d = a.find(".next-revslide"),
                e = d.find(".defaultimg");
            return "carousel" !== b.sliderType || b.carousel.fadein || (punchgs.TweenLite.to(b.ul, 1, {
                opacity: 1
            }), b.carousel.fadein = !0), d.index() === c.index() && b.onlyPreparedSlide !== !0 ? (d.removeClass("next-revslide"), !1) : (b.onlyPreparedSlide === !0 && (b.onlyPreparedSlide = !1, jQuery(b.li[0]).addClass("processing-revslide")), d.removeClass("next-revslide").addClass("processing-revslide"), d.index() === -1 && "carousel" === b.sliderType && (d = jQuery(b.li[0])), d.data("slide_on_focus_amount", d.data("slide_on_focus_amount") + 1 || 1), "on" == b.stopLoop && d.index() == b.lastslidetoshow - 1 && (a.find(".tp-bannertimer").css({
                visibility: "hidden"
            }), a.trigger("revolution.slide.onstop"), b.noloopanymore = 1), d.index() === b.slideamount - 1 && (b.looptogo = b.looptogo - 1, b.looptogo <= 0 && (b.stopLoop = "on")), b.tonpause = !0, a.trigger("stoptimer"), b.cd = 0, "off" === b.spinner && (b.loader !== undefined ? b.loader.css({
                display: "none"
            }) : b.loadertimer = setTimeout(function() {
                b.loader !== undefined && b.loader.css({
                    display: "block"
                })
            }, 50)), loadImages(d, b, 1), _R.preLoadAudio && _R.preLoadAudio(d, b, 1), void waitForCurrentImages(d, b, function() {
                d.find(".rs-background-video-layer").each(function() {
                    var a = jQuery(this);
                    a.hasClass("HasListener") || (a.data("bgvideo", 1), _R.manageVideoLayer && _R.manageVideoLayer(a, b)), 0 == a.find(".rs-fullvideo-cover").length && a.append('<div class="rs-fullvideo-cover"></div>')
                }), swapSlideProgress(e, a)
            }))
        },
        swapSlideProgress = function(a, b) {
            var c = b.find(".active-revslide"),
                d = b.find(".processing-revslide"),
                e = c.find(".slotholder"),
                f = d.find(".slotholder"),
                g = b[0].opt;
            g.tonpause = !1, g.cd = 0, clearTimeout(g.loadertimer), g.loader !== undefined && g.loader.css({
                display: "none"
            }), _R.setSize(g), _R.slotSize(a, g), _R.manageNavigation && _R.manageNavigation(g);
            var h = {};
            h.nextslide = d, h.currentslide = c, b.trigger("revolution.slide.onbeforeswap", h), g.transition = 1, g.videoplaying = !1, d.data("delay") != undefined ? (g.cd = 0, g.delay = d.data("delay")) : g.delay = g.origcd, "true" == d.data("ssop") || d.data("ssop") === !0 ? g.ssop = !0 : g.ssop = !1, b.trigger("nulltimer");
            var i = c.index(),
                j = d.index();
            g.sdir = j < i ? 1 : 0, "arrow" == g.sc_indicator && (0 == i && j == g.slideamount - 1 && (g.sdir = 1), i == g.slideamount - 1 && 0 == j && (g.sdir = 0)), g.lsdir = g.lsdir === undefined ? g.sdir : g.lsdir, g.dirc = g.lsdir != g.sdir, g.lsdir = g.sdir, c.index() != d.index() && 1 != g.firststart && _R.removeTheCaptions && _R.removeTheCaptions(c, g), d.hasClass("rs-pause-timer-once") || d.hasClass("rs-pause-timer-always") ? g.videoplaying = !0 : b.trigger("restarttimer"), d.removeClass("rs-pause-timer-once");
            var k, m;
            if (g.currentSlide = c.index(), g.nextSlide = d.index(), "carousel" == g.sliderType) m = new punchgs.TimelineLite, _R.prepareCarousel(g, m), letItFree(b, f, e, d, c, m), g.transition = 0, g.firststart = 0;
            else {
                m = new punchgs.TimelineLite({
                    onComplete: function() {
                        letItFree(b, f, e, d, c, m)
                    }
                }), m.add(punchgs.TweenLite.set(f.find(".defaultimg"), {
                    opacity: 0
                })), m.pause(), _R.animateTheCaptions && _R.animateTheCaptions({
                    slide: d,
                    opt: g,
                    preset: !0
                }), 1 == g.firststart && (punchgs.TweenLite.set(c, {
                    autoAlpha: 0
                }), g.firststart = 0), punchgs.TweenLite.set(c, {
                    zIndex: 18
                }), punchgs.TweenLite.set(d, {
                    autoAlpha: 0,
                    zIndex: 20
                }), "prepared" == d.data("differentissplayed") && (d.data("differentissplayed", "done"), d.data("transition", d.data("savedtransition")), d.data("slotamount", d.data("savedslotamount")), d.data("masterspeed", d.data("savedmasterspeed"))), d.data("fstransition") != undefined && "done" != d.data("differentissplayed") && (d.data("savedtransition", d.data("transition")), d.data("savedslotamount", d.data("slotamount")), d.data("savedmasterspeed", d.data("masterspeed")), d.data("transition", d.data("fstransition")), d.data("slotamount", d.data("fsslotamount")), d.data("masterspeed", d.data("fsmasterspeed")), d.data("differentissplayed", "prepared")), d.data("transition") == undefined && d.data("transition", "random"), k = 0;
                var n = d.data("transition") !== undefined ? d.data("transition").split(",") : "fade",
                    o = d.data("nexttransid") == undefined ? -1 : d.data("nexttransid");
                "on" == d.data("randomtransition") ? o = Math.round(Math.random() * n.length) : o += 1, o == n.length && (o = 0), d.data("nexttransid", o);
                var p = n[o];
                g.ie && ("boxfade" == p && (p = "boxslide"), "slotfade-vertical" == p && (p = "slotzoom-vertical"), "slotfade-horizontal" == p && (p = "slotzoom-horizontal")), _R.isIE(8) && (p = 11), m = _R.animateSlide(k, p, b, d, c, f, e, m), "on" == f.data("kenburns") && (_R.startKenBurn(f, g), m.add(punchgs.TweenLite.set(f, {
                    autoAlpha: 0
                }))), m.pause()
            }
            _R.scrollHandling && (_R.scrollHandling(g, !0), m.eventCallback("onUpdate", function() {
                _R.scrollHandling(g, !0)
            })), "off" != g.parallax.type && g.parallax.firstgo == undefined && _R.scrollHandling && (g.parallax.firstgo = !0, g.lastscrolltop = -999, _R.scrollHandling(g, !0), setTimeout(function() {
                g.lastscrolltop = -999, _R.scrollHandling(g, !0)
            }, 210), setTimeout(function() {
                g.lastscrolltop = -999, _R.scrollHandling(g, !0)
            }, 420)), _R.animateTheCaptions ? "carousel" === g.sliderType && "on" === g.carousel.showLayersAllTime ? (jQuery.each(g.li, function(a) {
                g.carousel.allLayersStarted ? _R.animateTheCaptions({
                    slide: jQuery(g.li[a]),
                    opt: g,
                    recall: !0
                }) : g.li[a] === d ? _R.animateTheCaptions({
                    slide: jQuery(g.li[a]),
                    maintimeline: m,
                    opt: g,
                    startslideanimat: 0
                }) : _R.animateTheCaptions({
                    slide: jQuery(g.li[a]),
                    opt: g,
                    startslideanimat: 0
                })
            }), g.carousel.allLayersStarted = !0) : _R.animateTheCaptions({
                slide: d,
                opt: g,
                maintimeline: m,
                startslideanimat: 0
            }) : m != undefined && setTimeout(function() {
                m.resume()
            }, 30), punchgs.TweenLite.to(d, .001, {
                autoAlpha: 1
            })
        },
        letItFree = function(a, b, c, d, e, f) {
            var g = a[0].opt;
            "carousel" === g.sliderType || (g.removePrepare = 0, punchgs.TweenLite.to(b.find(".defaultimg"), .001, {
                zIndex: 20,
                autoAlpha: 1,
                onComplete: function() {
                    removeSlots(a, g, d, 1)
                }
            }), d.index() != e.index() && punchgs.TweenLite.to(e, .2, {
                zIndex: 18,
                autoAlpha: 0,
                onComplete: function() {
                    removeSlots(a, g, e, 1)
                }
            })), a.find(".active-revslide").removeClass("active-revslide"), a.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"), g.act = d.index(), g.c.attr("data-slideactive", a.find(".active-revslide").data("index")), "scroll" != g.parallax.type && "scroll+mouse" != g.parallax.type && "mouse+scroll" != g.parallax.type || (g.lastscrolltop = -999, _R.scrollHandling(g)), f.clear(), c.data("kbtl") != undefined && (c.data("kbtl").reverse(), c.data("kbtl").timeScale(25)), "on" == b.data("kenburns") && (b.data("kbtl") != undefined ? (b.data("kbtl").timeScale(1), b.data("kbtl").play()) : _R.startKenBurn(b, g)), d.find(".rs-background-video-layer").each(function(a) {
                if (_ISM) return !1;
                var b = jQuery(this);
                _R.resetVideo(b, g), punchgs.TweenLite.fromTo(b, 1, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    ease: punchgs.Power3.easeInOut,
                    delay: .2,
                    onComplete: function() {
                        _R.animcompleted && _R.animcompleted(b, g)
                    }
                })
            }), e.find(".rs-background-video-layer").each(function(a) {
                if (_ISM) return !1;
                var b = jQuery(this);
                _R.stopVideo && (_R.resetVideo(b, g), _R.stopVideo(b, g)), punchgs.TweenLite.to(b, 1, {
                    autoAlpha: 0,
                    ease: punchgs.Power3.easeInOut,
                    delay: .2
                })
            });
            var h = {};
            h.slideIndex = d.index() + 1, h.slideLIIndex = d.index(), h.slide = d, h.currentslide = d, h.prevslide = e, g.last_shown_slide = e.index(), a.trigger("revolution.slide.onchange", h), a.trigger("revolution.slide.onafterswap", h), g.duringslidechange = !1;
            var i = e.data("slide_on_focus_amount"),
                j = e.data("hideafterloop");
            0 != j && j <= i && g.c.revremoveslide(e.index());
            var k = g.nextSlide === -1 || g.nextSlide === undefined ? 0 : g.nextSlide;
            k = k > g.rowzones.length ? g.rowzones.length : k, g.rowzones != undefined && g.rowzones.length > 0 && g.rowzones[k] != undefined && k >= 0 && k <= g.rowzones.length && g.rowzones[k].length > 0 && _R.setSize(g)
        },
        removeAllListeners = function(a, b) {
            a.children().each(function() {
                try {
                    jQuery(this).die("click")
                } catch (a) {}
                try {
                    jQuery(this).die("mouseenter")
                } catch (a) {}
                try {
                    jQuery(this).die("mouseleave")
                } catch (a) {}
                try {
                    jQuery(this).unbind("hover")
                } catch (a) {}
            });
            try {
                a.die("click", "mouseenter", "mouseleave")
            } catch (a) {}
            clearInterval(b.cdint), a = null
        },
        countDown = function(a, b) {
            b.cd = 0, b.loop = 0, b.stopAfterLoops != undefined && b.stopAfterLoops > -1 ? b.looptogo = b.stopAfterLoops : b.looptogo = 9999999, b.stopAtSlide != undefined && b.stopAtSlide > -1 ? b.lastslidetoshow = b.stopAtSlide : b.lastslidetoshow = 999, b.stopLoop = "off", 0 == b.looptogo && (b.stopLoop = "on");
            var c = a.find(".tp-bannertimer");
            a.on("stoptimer", function() {
                var a = jQuery(this).find(".tp-bannertimer");
                a[0].tween.pause(), "on" == b.disableProgressBar && a.css({
                    visibility: "hidden"
                }), b.sliderstatus = "paused", _R.unToggleState(b.slidertoggledby)
            }), a.on("starttimer", function() {
                b.forcepause_viatoggle || (1 != b.conthover && 1 != b.videoplaying && b.width > b.hideSliderAtLimit && 1 != b.tonpause && 1 != b.overnav && 1 != b.ssop && (1 === b.noloopanymore || b.viewPort.enable && !b.inviewport || (c.css({
                    visibility: "visible"
                }), c[0].tween.resume(), b.sliderstatus = "playing")), "on" == b.disableProgressBar && c.css({
                    visibility: "hidden"
                }), _R.toggleState(b.slidertoggledby))
            }), a.on("restarttimer", function() {
                if (!b.forcepause_viatoggle) {
                    var a = jQuery(this).find(".tp-bannertimer");
                    if (b.mouseoncontainer && "on" == b.navigation.onHoverStop && !_ISM) return !1;
                    1 === b.noloopanymore || b.viewPort.enable && !b.inviewport || 1 == b.ssop || (a.css({
                        visibility: "visible"
                    }), a[0].tween.kill(), a[0].tween = punchgs.TweenLite.fromTo(a, b.delay / 1e3, {
                        width: "0%"
                    }, {
                        force3D: "auto",
                        width: "100%",
                        ease: punchgs.Linear.easeNone,
                        onComplete: d,
                        delay: 1
                    }), b.sliderstatus = "playing"), "on" == b.disableProgressBar && a.css({
                        visibility: "hidden"
                    }), _R.toggleState(b.slidertoggledby)
                }
            }), a.on("nulltimer", function() {
                c[0].tween.kill(), c[0].tween = punchgs.TweenLite.fromTo(c, b.delay / 1e3, {
                    width: "0%"
                }, {
                    force3D: "auto",
                    width: "100%",
                    ease: punchgs.Linear.easeNone,
                    onComplete: d,
                    delay: 1
                }), c[0].tween.pause(0), "on" == b.disableProgressBar && c.css({
                    visibility: "hidden"
                }), b.sliderstatus = "paused"
            });
            var d = function() {
                0 == jQuery("body").find(a).length && (removeAllListeners(a, b), clearInterval(b.cdint)), a.trigger("revolution.slide.slideatend"), 1 == a.data("conthover-changed") && (b.conthover = a.data("conthover"), a.data("conthover-changed", 0)), _R.callingNewSlide(a, 1)
            };
            c[0].tween = punchgs.TweenLite.fromTo(c, b.delay / 1e3, {
                width: "0%"
            }, {
                force3D: "auto",
                width: "100%",
                ease: punchgs.Linear.easeNone,
                onComplete: d,
                delay: 1
            }), b.slideamount > 1 && (0 != b.stopAfterLoops || 1 != b.stopAtSlide) ? a.trigger("starttimer") : (b.noloopanymore = 1, a.trigger("nulltimer")), a.on("tp-mouseenter", function() {
                b.mouseoncontainer = !0, "on" != b.navigation.onHoverStop || _ISM || (a.trigger("stoptimer"), a.trigger("revolution.slide.onpause"))
            }), a.on("tp-mouseleft", function() {
                b.mouseoncontainer = !1, 1 != a.data("conthover") && "on" == b.navigation.onHoverStop && (1 == b.viewPort.enable && b.inviewport || 0 == b.viewPort.enable) && (a.trigger("revolution.slide.onresume"), a.trigger("starttimer"))
            })
        },
        vis = function() {
            var a, b, c = {
                hidden: "visibilitychange",
                webkitHidden: "webkitvisibilitychange",
                mozHidden: "mozvisibilitychange",
                msHidden: "msvisibilitychange"
            };
            for (a in c)
                if (a in document) {
                    b = c[a];
                    break
                }
            return function(c) {
                return c && document.addEventListener(b, c, {
                    pasive: !0
                }), !document[a]
            }
        }(),
        restartOnFocus = function(a) {
            return a != undefined && a.c != undefined && void(1 != a.windowfocused && (a.windowfocused = !0, punchgs.TweenLite.delayedCall(.3, function() {
                "on" == a.fallbacks.nextSlideOnWindowFocus && a.c.revnext(), a.c.revredraw(), "playing" == a.lastsliderstatus && a.c.revresume()
            })))
        },
        lastStatBlur = function(a) {
            a.windowfocused = !1, a.lastsliderstatus = a.sliderstatus, a.c.revpause();
            var b = a.c.find(".active-revslide .slotholder"),
                c = a.c.find(".processing-revslide .slotholder");
            "on" == c.data("kenburns") && _R.stopKenBurn(c, a), "on" == b.data("kenburns") && _R.stopKenBurn(b, a)
        },
        tabBlurringCheck = function(a, b) {
            var c = document.documentMode === undefined,
                d = window.chrome;
            c && !d ? jQuery(window).on("focusin", function() {
                restartOnFocus(b)
            }).on("focusout", function() {
                lastStatBlur(b)
            }) : window.addEventListener ? (window.addEventListener("focus", function(a) {
                restartOnFocus(b)
            }, {
                capture: !1,
                passive: !0
            }), window.addEventListener("blur", function(a) {
                lastStatBlur(b)
            }, {
                capture: !1,
                passive: !0
            })) : (window.attachEvent("focus", function(a) {
                restartOnFocus(b)
            }), window.attachEvent("blur", function(a) {
                lastStatBlur(b)
            }))
        },
        getUrlVars = function(a) {
            for (var c, b = [], d = window.location.href.slice(window.location.href.indexOf(a) + 1).split("_"), e = 0; e < d.length; e++) d[e] = d[e].replace("%3D", "="), c = d[e].split("="), b.push(c[0]), b[c[0]] = c[1];
            return b
        }
}(jQuery);

/********************************************
 * REVOLUTION 5.3 EXTENSION - ACTIONS
 * @version: 2.0.6 (15.12.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 *********************************************/
! function($) {
    "use strict";

    function getScrollRoot() {
        var d, a = document.documentElement,
            b = document.body,
            c = ("undefined" != typeof window.pageYOffset ? window.pageYOffset : null) || b.scrollTop || a.scrollTop;
        return a.scrollTop = b.scrollTop = c + (c > 0) ? -1 : 1, d = a.scrollTop !== c ? a : b, d.scrollTop = c, d
    }
    var _R = jQuery.fn.revolution,
        _ISM = _R.is_mobile(),
        extension = {
            alias: "Actions Min JS",
            name: "revolution.extensions.actions.min.js",
            min_core: "5.3",
            version: "2.0.6"
        };
    jQuery.extend(!0, _R, {
        checkActions: function(a, b, c) {
            return "stop" !== _R.compare_version(extension).check && void checkActions_intern(a, b, c)
        }
    });
    var checkActions_intern = function(a, b, c) {
            c && jQuery.each(c, function(c, d) {
                d.delay = parseInt(d.delay, 0) / 1e3, a.addClass("tp-withaction"), b.fullscreen_esclistener || "exitfullscreen" != d.action && "togglefullscreen" != d.action || (jQuery(document).keyup(function(b) {
                    27 == b.keyCode && jQuery("#rs-go-fullscreen").length > 0 && a.trigger(d.event)
                }), b.fullscreen_esclistener = !0);
                var e = "backgroundvideo" == d.layer ? jQuery(".rs-background-video-layer") : "firstvideo" == d.layer ? jQuery(".tp-revslider-slidesli").find(".tp-videolayer") : jQuery("#" + d.layer);
                switch (jQuery.inArray(d.action, ["toggleslider", "toggle_mute_video", "toggle_global_mute_video", "togglefullscreen"]) != -1 && a.data("togglelisteners", !0), d.action) {
                    case "togglevideo":
                        jQuery.each(e, function(b, c) {
                            c = jQuery(c);
                            var d = c.data("videotoggledby");
                            void 0 == d && (d = new Array), d.push(a), c.data("videotoggledby", d)
                        });
                        break;
                    case "togglelayer":
                        jQuery.each(e, function(b, c) {
                            c = jQuery(c);
                            var e = c.data("layertoggledby");
                            void 0 == e && (e = new Array), e.push(a), c.data("layertoggledby", e), c.data("triggered_startstatus", d.layerstatus)
                        });
                        break;
                    case "toggle_mute_video":
                        jQuery.each(e, function(b, c) {
                            c = jQuery(c);
                            var d = c.data("videomutetoggledby");
                            void 0 == d && (d = new Array), d.push(a), c.data("videomutetoggledby", d)
                        });
                        break;
                    case "toggle_global_mute_video":
                        jQuery.each(e, function(b, c) {
                            c = jQuery(c);
                            var d = c.data("videomutetoggledby");
                            void 0 == d && (d = new Array), d.push(a), c.data("videomutetoggledby", d)
                        });
                        break;
                    case "toggleslider":
                        void 0 == b.slidertoggledby && (b.slidertoggledby = new Array), b.slidertoggledby.push(a);
                        break;
                    case "togglefullscreen":
                        void 0 == b.fullscreentoggledby && (b.fullscreentoggledby = new Array), b.fullscreentoggledby.push(a)
                }
                switch (a.on(d.event, function() {
                    if ("click" === d.event && a.hasClass("tp-temporarydisabled")) return !1;
                    var c = "backgroundvideo" == d.layer ? jQuery(".active-revslide .slotholder .rs-background-video-layer") : "firstvideo" == d.layer ? jQuery(".active-revslide .tp-videolayer").first() : jQuery("#" + d.layer);
                    if ("stoplayer" == d.action || "togglelayer" == d.action || "startlayer" == d.action) {
                        if (c.length > 0) {
                            var e = c.data();
                            void 0 !== e.clicked_time_stamp && (new Date).getTime() - e.clicked_time_stamp > 150 && (clearTimeout(e.triggerdelayIn), clearTimeout(e.triggerdelayOut)), e.clicked_time_stamp = (new Date).getTime(), "startlayer" == d.action || "togglelayer" == d.action && "in" != c.data("animdirection") ? (e.animdirection = "in", e.triggerstate = "on", _R.toggleState(e.layertoggledby), _R.playAnimationFrame && (clearTimeout(e.triggerdelayIn), e.triggerdelayIn = setTimeout(function() {
                                _R.playAnimationFrame({
                                    caption: c,
                                    opt: b,
                                    frame: "frame_0",
                                    triggerdirection: "in",
                                    triggerframein: "frame_0",
                                    triggerframeout: "frame_999"
                                })
                            }, 1e3 * d.delay))) : ("stoplayer" == d.action || "togglelayer" == d.action && "out" != c.data("animdirection")) && (e.animdirection = "out", e.triggered = !0, e.triggerstate = "off", _R.stopVideo && _R.stopVideo(c, b), _R.unToggleState(e.layertoggledby), _R.endMoveCaption && (clearTimeout(e.triggerdelayOut), e.triggerdelayOut = setTimeout(function() {
                                _R.playAnimationFrame({
                                    caption: c,
                                    opt: b,
                                    frame: "frame_999",
                                    triggerdirection: "out",
                                    triggerframein: "frame_0",
                                    triggerframeout: "frame_999"
                                })
                            }, 1e3 * d.delay)))
                        }
                    } else !_ISM || "playvideo" != d.action && "stopvideo" != d.action && "togglevideo" != d.action && "mutevideo" != d.action && "unmutevideo" != d.action && "toggle_mute_video" != d.action && "toggle_global_mute_video" != d.action ? (d.delay = "NaN" === d.delay || NaN === d.delay ? 0 : d.delay, punchgs.TweenLite.delayedCall(d.delay, function() {
                        actionSwitches(c, b, d, a)
                    }, [c, b, d, a])) : actionSwitches(c, b, d, a)
                }), d.action) {
                    case "togglelayer":
                    case "startlayer":
                    case "playlayer":
                    case "stoplayer":
                        var e = jQuery("#" + d.layer),
                            f = e.data();
                        e.length > 0 && void 0 !== f && (void 0 !== f.frames && "bytrigger" != f.frames[0].delay || void 0 === f.frames && "bytrigger" !== f.start) && (f.triggerstate = "on")
                }
            })
        },
        actionSwitches = function(tnc, opt, a, _nc) {
            switch (a.action) {
                case "scrollbelow":
                    a.speed = void 0 !== a.speed ? a.speed : 400, a.ease = void 0 !== a.ease ? a.ease : punchgs.Power2.easeOut, _nc.addClass("tp-scrollbelowslider"), _nc.data("scrolloffset", a.offset), _nc.data("scrolldelay", a.delay), _nc.data("scrollspeed", a.speed), _nc.data("scrollease", a.ease);
                    var off = getOffContH(opt.fullScreenOffsetContainer) || 0,
                        aof = parseInt(a.offset, 0) || 0;
                    off = off - aof || 0, opt.scrollRoot = void 0 === opt.scrollRoot ? getScrollRoot() : opt.scrollRoot;
                    var sobj = {
                        _y: opt.scrollRoot.scrollTop
                    };
                    punchgs.TweenLite.to(sobj, a.speed / 1e3, {
                        _y: opt.c.offset().top + jQuery(opt.li[0]).height() - off,
                        ease: a.ease,
                        onUpdate: function() {
                            opt.scrollRoot.scrollTop = sobj._y
                        }
                    });
                    break;
                case "callback":
                    eval(a.callback);
                    break;
                case "jumptoslide":
                    switch (a.slide.toLowerCase()) {
                        case "+1":
                        case "next":
                            opt.sc_indicator = "arrow", _R.callingNewSlide(opt.c, 1);
                            break;
                        case "previous":
                        case "prev":
                        case "-1":
                            opt.sc_indicator = "arrow", _R.callingNewSlide(opt.c, -1);
                            break;
                        default:
                            var ts = jQuery.isNumeric(a.slide) ? parseInt(a.slide, 0) : a.slide;
                            _R.callingNewSlide(opt.c, ts)
                    }
                    break;
                case "simplelink":
                    window.open(a.url, a.target);
                    break;
                case "toggleslider":
                    opt.noloopanymore = 0, "playing" == opt.sliderstatus ? (opt.c.revpause(), opt.forcepause_viatoggle = !0, _R.unToggleState(opt.slidertoggledby)) : (opt.forcepause_viatoggle = !1, opt.c.revresume(), _R.toggleState(opt.slidertoggledby));
                    break;
                case "pauseslider":
                    opt.c.revpause(), _R.unToggleState(opt.slidertoggledby);
                    break;
                case "playslider":
                    opt.noloopanymore = 0, opt.c.revresume(), _R.toggleState(opt.slidertoggledby);
                    break;
                case "playvideo":
                    tnc.length > 0 && _R.playVideo(tnc, opt);
                    break;
                case "stopvideo":
                    tnc.length > 0 && _R.stopVideo && _R.stopVideo(tnc, opt);
                    break;
                case "togglevideo":
                    tnc.length > 0 && (_R.isVideoPlaying(tnc, opt) ? _R.stopVideo && _R.stopVideo(tnc, opt) : _R.playVideo(tnc, opt));
                    break;
                case "mutevideo":
                    tnc.length > 0 && _R.muteVideo(tnc, opt);
                    break;
                case "unmutevideo":
                    tnc.length > 0 && _R.unMuteVideo && _R.unMuteVideo(tnc, opt);
                    break;
                case "toggle_mute_video":
                    tnc.length > 0 && (_R.isVideoMuted(tnc, opt) ? _R.unMuteVideo(tnc, opt) : _R.muteVideo && _R.muteVideo(tnc, opt)), _nc.toggleClass("rs-toggle-content-active");
                    break;
                case "toggle_global_mute_video":
                    opt.globalmute === !0 ? (opt.globalmute = !1, void 0 != opt.playingvideos && opt.playingvideos.length > 0 && jQuery.each(opt.playingvideos, function(a, b) {
                        _R.unMuteVideo && _R.unMuteVideo(b, opt)
                    })) : (opt.globalmute = !0, void 0 != opt.playingvideos && opt.playingvideos.length > 0 && jQuery.each(opt.playingvideos, function(a, b) {
                        _R.muteVideo && _R.muteVideo(b, opt)
                    })), _nc.toggleClass("rs-toggle-content-active");
                    break;
                case "simulateclick":
                    tnc.length > 0 && tnc.click();
                    break;
                case "toggleclass":
                    tnc.length > 0 && (tnc.hasClass(a.classname) ? tnc.removeClass(a.classname) : tnc.addClass(a.classname));
                    break;
                case "gofullscreen":
                case "exitfullscreen":
                case "togglefullscreen":
                    if (jQuery("#rs-go-fullscreen").length > 0 && ("togglefullscreen" == a.action || "exitfullscreen" == a.action)) {
                        jQuery("#rs-go-fullscreen").appendTo(jQuery("#rs-was-here"));
                        var paw = opt.c.closest(".forcefullwidth_wrapper_tp_banner").length > 0 ? opt.c.closest(".forcefullwidth_wrapper_tp_banner") : opt.c.closest(".rev_slider_wrapper");
                        paw.unwrap(), paw.unwrap(), opt.minHeight = opt.oldminheight, opt.infullscreenmode = !1, opt.c.revredraw(), void 0 != opt.playingvideos && opt.playingvideos.length > 0 && jQuery.each(opt.playingvideos, function(a, b) {
                            _R.playVideo(b, opt)
                        }), _R.unToggleState(opt.fullscreentoggledby)
                    } else if (0 == jQuery("#rs-go-fullscreen").length && ("togglefullscreen" == a.action || "gofullscreen" == a.action)) {
                        var paw = opt.c.closest(".forcefullwidth_wrapper_tp_banner").length > 0 ? opt.c.closest(".forcefullwidth_wrapper_tp_banner") : opt.c.closest(".rev_slider_wrapper");
                        paw.wrap('<div id="rs-was-here"><div id="rs-go-fullscreen"></div></div>');
                        var gf = jQuery("#rs-go-fullscreen");
                        gf.appendTo(jQuery("body")), gf.css({
                            position: "fixed",
                            width: "100%",
                            height: "100%",
                            top: "0px",
                            left: "0px",
                            zIndex: "9999999",
                            background: "#ffffff"
                        }), opt.oldminheight = opt.minHeight, opt.minHeight = jQuery(window).height(), opt.infullscreenmode = !0, opt.c.revredraw(), void 0 != opt.playingvideos && opt.playingvideos.length > 0 && jQuery.each(opt.playingvideos, function(a, b) {
                            _R.playVideo(b, opt)
                        }), _R.toggleState(opt.fullscreentoggledby)
                    }
                    break;
                default:
                    var obj = {};
                    obj.event = a, obj.layer = _nc, opt.c.trigger("layeraction", [obj])
            }
        },
        getOffContH = function(a) {
            if (void 0 == a) return 0;
            if (a.split(",").length > 1) {
                var b = a.split(","),
                    c = 0;
                return b && jQuery.each(b, function(a, b) {
                    jQuery(b).length > 0 && (c += jQuery(b).outerHeight(!0))
                }), c
            }
            return jQuery(a).height()
        }
}(jQuery);

/********************************************
 * REVOLUTION 5.0 EXTENSION - CAROUSEL
 * @version: 1.2.1 (18.11.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 *********************************************/
! function(a) {
    "use strict";
    var b = jQuery.fn.revolution,
        c = {
            alias: "Carousel Min JS",
            name: "revolution.extensions.carousel.min.js",
            min_core: "5.3.0",
            version: "1.2.1"
        };
    jQuery.extend(!0, b, {
        prepareCarousel: function(a, d, h, i) {
            return "stop" !== b.compare_version(c).check && (h = a.carousel.lastdirection = f(h, a.carousel.lastdirection), e(a), a.carousel.slide_offset_target = j(a), void(void 0 !== i ? g(a, h, !1, 0) : void 0 == d ? b.carouselToEvalPosition(a, h) : g(a, h, !1)))
        },
        carouselToEvalPosition: function(a, c) {
            var d = a.carousel;
            c = d.lastdirection = f(c, d.lastdirection);
            var e = "center" === d.horizontal_align ? (d.wrapwidth / 2 - d.slide_width / 2 - d.slide_globaloffset) / d.slide_width : (0 - d.slide_globaloffset) / d.slide_width,
                h = b.simp(e, a.slideamount, !1),
                i = h - Math.floor(h),
                j = 0,
                k = -1 * (Math.ceil(h) - h),
                l = -1 * (Math.floor(h) - h);
            j = i >= .3 && "left" === c || i >= .7 && "right" === c ? k : i < .3 && "left" === c || i < .7 && "right" === c ? l : j, j = "off" === d.infinity ? h < 0 ? h : e > a.slideamount - 1 ? e - (a.slideamount - 1) : j : j, d.slide_offset_target = j * d.slide_width, 0 !== Math.abs(d.slide_offset_target) ? g(a, c, !0) : b.organiseCarousel(a, c)
        },
        organiseCarousel: function(a, b, c, d) {
            b = void 0 === b || "down" == b || "up" == b || null === b || jQuery.isEmptyObject(b) ? "left" : b;
            for (var e = a.carousel, f = new Array, g = e.slides.length, i = ("right" === e.horizontal_align ? a.width : 0, 0); i < g; i++) {
                var j = i * e.slide_width + e.slide_offset;
                "on" === e.infinity && (j = j > e.wrapwidth - e.inneroffset && "right" == b ? e.slide_offset - (e.slides.length - i) * e.slide_width : j, j = j < 0 - e.inneroffset - e.slide_width && "left" == b ? j + e.maxwidth : j), f[i] = j
            }
            var k = 999;
            e.slides && jQuery.each(e.slides, function(d, h) {
                var i = f[d];
                "on" === e.infinity && (i = i > e.wrapwidth - e.inneroffset && "left" === b ? f[0] - (g - d) * e.slide_width : i, i = i < 0 - e.inneroffset - e.slide_width ? "left" == b ? i + e.maxwidth : "right" === b ? f[g - 1] + (d + 1) * e.slide_width : i : i);
                var j = new Object;
                j.left = i + e.inneroffset;
                var l = "center" === e.horizontal_align ? (Math.abs(e.wrapwidth / 2) - (j.left + e.slide_width / 2)) / e.slide_width : (e.inneroffset - j.left) / e.slide_width,
                    n = "center" === e.horizontal_align ? 2 : 1;
                if ((c && Math.abs(l) < k || 0 === l) && (k = Math.abs(l), e.focused = d), j.width = e.slide_width, j.x = 0, j.transformPerspective = 1200, j.transformOrigin = "50% " + e.vertical_align, "on" === e.fadeout)
                    if ("on" === e.vary_fade) j.autoAlpha = 1 - Math.abs(1 / Math.ceil(e.maxVisibleItems / n) * l);
                    else switch (e.horizontal_align) {
                        case "center":
                            j.autoAlpha = Math.abs(l) < Math.ceil(e.maxVisibleItems / n - 1) ? 1 : 1 - (Math.abs(l) - Math.floor(Math.abs(l)));
                            break;
                        case "left":
                            j.autoAlpha = l < 1 && l > 0 ? 1 - l : Math.abs(l) > e.maxVisibleItems - 1 ? 1 - (Math.abs(l) - (e.maxVisibleItems - 1)) : 1;
                            break;
                        case "right":
                            j.autoAlpha = l > -1 && l < 0 ? 1 - Math.abs(l) : l > e.maxVisibleItems - 1 ? 1 - (Math.abs(l) - (e.maxVisibleItems - 1)) : 1
                    } else j.autoAlpha = Math.abs(l) < Math.ceil(e.maxVisibleItems / n) ? 1 : 0;
                if (void 0 !== e.minScale && e.minScale > 0)
                    if ("on" === e.vary_scale) {
                        j.scale = 1 - Math.abs(e.minScale / 100 / Math.ceil(e.maxVisibleItems / n) * l);
                        var o = (e.slide_width - e.slide_width * j.scale) * Math.abs(l)
                    } else {
                        j.scale = l >= 1 || l <= -1 ? 1 - e.minScale / 100 : (100 - e.minScale * Math.abs(l)) / 100;
                        var o = (e.slide_width - e.slide_width * (1 - e.minScale / 100)) * Math.abs(l)
                    }
                void 0 !== e.maxRotation && 0 != Math.abs(e.maxRotation) && ("on" === e.vary_rotation ? (j.rotationY = Math.abs(e.maxRotation) - Math.abs((1 - Math.abs(1 / Math.ceil(e.maxVisibleItems / n) * l)) * e.maxRotation), j.autoAlpha = Math.abs(j.rotationY) > 90 ? 0 : j.autoAlpha) : j.rotationY = l >= 1 || l <= -1 ? e.maxRotation : Math.abs(l) * e.maxRotation, j.rotationY = l < 0 ? j.rotationY * -1 : j.rotationY), j.x = -1 * e.space * l, j.left = Math.floor(j.left), j.x = Math.floor(j.x), void 0 !== j.scale ? l < 0 ? j.x - o : j.x + o : j.x, j.zIndex = Math.round(100 - Math.abs(5 * l)), j.transformStyle = "3D" != a.parallax.type && "3d" != a.parallax.type ? "flat" : "preserve-3d", punchgs.TweenLite.set(h, j)
            }), d && (a.c.find(".next-revslide").removeClass("next-revslide"), jQuery(e.slides[e.focused]).addClass("next-revslide"), a.c.trigger("revolution.nextslide.waiting"));
            e.wrapwidth / 2 - e.slide_offset, e.maxwidth + e.slide_offset - e.wrapwidth / 2
        }
    });
    var d = function(a) {
            var b = a.carousel;
            b.infbackup = b.infinity, b.maxVisiblebackup = b.maxVisibleItems, b.slide_globaloffset = "none", b.slide_offset = 0, b.wrap = a.c.find(".tp-carousel-wrapper"), b.slides = a.c.find(".tp-revslider-slidesli"), 0 !== b.maxRotation && ("3D" != a.parallax.type && "3d" != a.parallax.type ? punchgs.TweenLite.set(b.wrap, {
                perspective: 1200,
                transformStyle: "flat"
            }) : punchgs.TweenLite.set(b.wrap, {
                perspective: 1600,
                transformStyle: "preserve-3d"
            })), void 0 !== b.border_radius && parseInt(b.border_radius, 0) > 0 && punchgs.TweenLite.set(a.c.find(".tp-revslider-slidesli"), {
                borderRadius: b.border_radius
            })
        },
        e = function(a) {
            void 0 === a.bw && b.setSize(a);
            var c = a.carousel,
                e = b.getHorizontalOffset(a.c, "left"),
                f = b.getHorizontalOffset(a.c, "right");
            void 0 === c.wrap && d(a), c.slide_width = "on" !== c.stretch ? a.gridwidth[a.curWinRange] * a.bw : a.c.width(), c.maxwidth = a.slideamount * c.slide_width, c.maxVisiblebackup > c.slides.length + 1 && (c.maxVisibleItems = c.slides.length + 2), c.wrapwidth = c.maxVisibleItems * c.slide_width + (c.maxVisibleItems - 1) * c.space, c.wrapwidth = "auto" != a.sliderLayout ? c.wrapwidth > a.c.closest(".tp-simpleresponsive").width() ? a.c.closest(".tp-simpleresponsive").width() : c.wrapwidth : c.wrapwidth > a.ul.width() ? a.ul.width() : c.wrapwidth, c.infinity = c.wrapwidth >= c.maxwidth ? "off" : c.infbackup, c.wrapoffset = "center" === c.horizontal_align ? (a.c.width() - f - e - c.wrapwidth) / 2 : 0, c.wrapoffset = "auto" != a.sliderLayout && a.outernav ? 0 : c.wrapoffset < e ? e : c.wrapoffset;
            var g = "hidden";
            "3D" != a.parallax.type && "3d" != a.parallax.type || (g = "visible"), "right" === c.horizontal_align ? punchgs.TweenLite.set(c.wrap, {
                left: "auto",
                right: c.wrapoffset + "px",
                width: c.wrapwidth,
                overflow: g
            }) : punchgs.TweenLite.set(c.wrap, {
                right: "auto",
                left: c.wrapoffset + "px",
                width: c.wrapwidth,
                overflow: g
            }), c.inneroffset = "right" === c.horizontal_align ? c.wrapwidth - c.slide_width : 0, c.realoffset = Math.abs(c.wrap.position().left), c.windhalf = jQuery(window).width() / 2
        },
        f = function(a, b) {
            return null === a || jQuery.isEmptyObject(a) ? b : void 0 === a ? "right" : a
        },
        g = function(a, c, d, e) {
            var g = a.carousel;
            c = g.lastdirection = f(c, g.lastdirection);
            var h = new Object,
                i = d ? punchgs.Power2.easeOut : g.easing;
            h.from = 0, h.to = g.slide_offset_target, e = void 0 === e ? g.speed / 1e3 : e, e = d ? .4 : e, void 0 !== g.positionanim && g.positionanim.pause(), g.positionanim = punchgs.TweenLite.to(h, e, {
                from: h.to,
                onUpdate: function() {
                    g.slide_offset = g.slide_globaloffset + h.from, g.slide_offset = b.simp(g.slide_offset, g.maxwidth), b.organiseCarousel(a, c, !1, !1)
                },
                onComplete: function() {
                    g.slide_globaloffset = "off" === g.infinity ? g.slide_globaloffset + g.slide_offset_target : b.simp(g.slide_globaloffset + g.slide_offset_target, g.maxwidth), g.slide_offset = b.simp(g.slide_offset, g.maxwidth), b.organiseCarousel(a, c, !1, !0);
                    var e = jQuery(a.li[g.focused]);
                    a.c.find(".next-revslide").removeClass("next-revslide"), d && b.callingNewSlide(a.c, e.data("index"))
                },
                ease: i
            })
        },
        h = function(a, b) {
            return Math.abs(a) > Math.abs(b) ? a > 0 ? a - Math.abs(Math.floor(a / b) * b) : a + Math.abs(Math.floor(a / b) * b) : a
        },
        i = function(a, b, c) {
            var c, c, d = b - a,
                e = b - c - a;
            return d = h(d, c), e = h(e, c), Math.abs(d) > Math.abs(e) ? e : d
        },
        j = function(a) {
            var c = 0,
                d = a.carousel;
            if (void 0 !== d.positionanim && d.positionanim.kill(), "none" == d.slide_globaloffset) d.slide_globaloffset = c = "center" === d.horizontal_align ? d.wrapwidth / 2 - d.slide_width / 2 : 0;
            else {
                d.slide_globaloffset = d.slide_offset, d.slide_offset = 0;
                var e = a.c.find(".processing-revslide").index(),
                    f = "center" === d.horizontal_align ? (d.wrapwidth / 2 - d.slide_width / 2 - d.slide_globaloffset) / d.slide_width : (0 - d.slide_globaloffset) / d.slide_width;
                f = b.simp(f, a.slideamount, !1), e = e >= 0 ? e : a.c.find(".active-revslide").index(), e = e >= 0 ? e : 0, c = "off" === d.infinity ? f - e : -i(f, e, a.slideamount), c *= d.slide_width
            }
            return c
        }
}(jQuery);

/********************************************
 * REVOLUTION 5.0 EXTENSION - KEN BURN
 * @version: 1.2 (2.11.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 *********************************************/
! function(a) {
    "use strict";
    var b = jQuery.fn.revolution,
        c = {
            alias: "KenBurns Min JS",
            name: "revolution.extensions.kenburn.min.js",
            min_core: "5.0",
            version: "1.2.0"
        };
    jQuery.extend(!0, b, {
        stopKenBurn: function(a) {
            return "stop" !== b.compare_version(c).check && void(void 0 != a.data("kbtl") && a.data("kbtl").pause())
        },
        startKenBurn: function(a, d, e) {
            if ("stop" === b.compare_version(c).check) return !1;
            var f = a.data(),
                g = a.find(".defaultimg"),
                h = g.data("lazyload") || g.data("src"),
                j = (f.owidth / f.oheight, "carousel" === d.sliderType ? d.carousel.slide_width : d.ul.width()),
                k = d.ul.height();
            a.data("kbtl") && a.data("kbtl").kill(), e = e || 0, 0 == a.find(".tp-kbimg").length && (a.append('<div class="tp-kbimg-wrap" style="z-index:2;width:100%;height:100%;top:0px;left:0px;position:absolute;"><img class="tp-kbimg" src="' + h + '" style="position:absolute;" width="' + f.owidth + '" height="' + f.oheight + '"></div>'), a.data("kenburn", a.find(".tp-kbimg")));
            var m = function(a, b, c, d, e, f, g) {
                    var h = a * c,
                        i = b * c,
                        j = Math.abs(d - h),
                        k = Math.abs(e - i),
                        l = new Object;
                    return l.l = (0 - f) * j, l.r = l.l + h, l.t = (0 - g) * k, l.b = l.t + i, l.h = f, l.v = g, l
                },
                n = function(a, b, c, d, e) {
                    var f = a.bgposition.split(" ") || "center center",
                        g = "center" == f[0] ? "50%" : "left" == f[0] || "left" == f[1] ? "0%" : "right" == f[0] || "right" == f[1] ? "100%" : f[0],
                        h = "center" == f[1] ? "50%" : "top" == f[0] || "top" == f[1] ? "0%" : "bottom" == f[0] || "bottom" == f[1] ? "100%" : f[1];
                    g = parseInt(g, 0) / 100 || 0, h = parseInt(h, 0) / 100 || 0;
                    var i = new Object;
                    return i.start = m(e.start.width, e.start.height, e.start.scale, b, c, g, h), i.end = m(e.start.width, e.start.height, e.end.scale, b, c, g, h), i
                },
                o = function(a, b, c) {
                    var d = c.scalestart / 100,
                        e = c.scaleend / 100,
                        f = void 0 != c.offsetstart ? c.offsetstart.split(" ") || [0, 0] : [0, 0],
                        g = void 0 != c.offsetend ? c.offsetend.split(" ") || [0, 0] : [0, 0];
                    c.bgposition = "center center" == c.bgposition ? "50% 50%" : c.bgposition;
                    var h = new Object,
                        i = a * d,
                        k = (i / c.owidth * c.oheight, a * e);
                    k / c.owidth * c.oheight;
                    if (h.start = new Object, h.starto = new Object, h.end = new Object, h.endo = new Object, h.start.width = a, h.start.height = h.start.width / c.owidth * c.oheight, h.start.height < b) {
                        var m = b / h.start.height;
                        h.start.height = b, h.start.width = h.start.width * m
                    }
                    h.start.transformOrigin = c.bgposition, h.start.scale = d, h.end.scale = e, c.rotatestart = 0 === c.rotatestart ? .01 : c.rotatestart, h.start.rotation = c.rotatestart + "deg", h.end.rotation = c.rotateend + "deg";
                    var o = n(c, a, b, f, h);
                    f[0] = parseFloat(f[0]) + o.start.l, g[0] = parseFloat(g[0]) + o.end.l, f[1] = parseFloat(f[1]) + o.start.t, g[1] = parseFloat(g[1]) + o.end.t;
                    var p = o.start.r - o.start.l,
                        q = o.start.b - o.start.t,
                        r = o.end.r - o.end.l,
                        s = o.end.b - o.end.t;
                    return f[0] = f[0] > 0 ? 0 : p + f[0] < a ? a - p : f[0], g[0] = g[0] > 0 ? 0 : r + g[0] < a ? a - r : g[0], f[1] = f[1] > 0 ? 0 : q + f[1] < b ? b - q : f[1], g[1] = g[1] > 0 ? 0 : s + g[1] < b ? b - s : g[1], h.starto.x = f[0] + "px", h.starto.y = f[1] + "px", h.endo.x = g[0] + "px", h.endo.y = g[1] + "px", h.end.ease = h.endo.ease = c.ease, h.end.force3D = h.endo.force3D = !0, h
                };
            void 0 != a.data("kbtl") && (a.data("kbtl").kill(), a.removeData("kbtl"));
            var p = a.data("kenburn"),
                q = p.parent(),
                r = o(j, k, f),
                s = new punchgs.TimelineLite;
            s.pause(), r.start.transformOrigin = "0% 0%", r.starto.transformOrigin = "0% 0%", s.add(punchgs.TweenLite.fromTo(p, f.duration / 1e3, r.start, r.end), 0), s.add(punchgs.TweenLite.fromTo(q, f.duration / 1e3, r.starto, r.endo), 0), s.progress(e), s.play(), a.data("kbtl", s)
        }
    })
}(jQuery);

/************************************************
 * REVOLUTION 5.3 EXTENSION - LAYER ANIMATION
 * @version: 3.5.1 (09.12.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 ************************************************/
! function(a) {
    "use strict";

    function p(a, b, c, d, e, f, g) {
        var h = a.find(b);
        h.css("borderWidth", f + "px"), h.css(c, 0 - f + "px"), h.css(d, "0px solid transparent"), h.css(e, g)
    }
    var b = jQuery.fn.revolution,
        d = (b.is_mobile(), {
            alias: "LayerAnimation Min JS",
            name: "revolution.extensions.layeranimation.min.js",
            min_core: "5.3.1",
            version: "3.5.1"
        });
    jQuery.extend(!0, b, {
        updateMarkup: function(a, b) {
            var c = jQuery(a).data();
            if (void 0 !== c.start && !c.frames_added && void 0 === c.frames) {
                var d = new Array,
                    e = m(f(), c.transform_in, void 0, !1),
                    g = m(f(), c.transform_out, void 0, !1),
                    h = m(f(), c.transform_hover, void 0, !1);
                jQuery.isNumeric(c.end) && jQuery.isNumeric(c.start) && jQuery.isNumeric(e.speed) && (c.end = parseInt(c.end, 0) - (parseInt(c.start, 0) + parseFloat(e.speed, 0))), d.push({
                    frame: "0",
                    delay: c.start,
                    from: c.transform_in,
                    to: c.transform_idle,
                    split: c.splitin,
                    speed: e.speed,
                    ease: e.anim.ease,
                    mask: c.mask_in,
                    splitdelay: c.elementdelay
                }), d.push({
                    frame: "5",
                    delay: c.end,
                    to: c.transform_out,
                    split: c.splitout,
                    speed: g.speed,
                    ease: g.anim.ease,
                    mask: c.mask_out,
                    splitdelay: c.elementdelay
                }), c.transform_hover && d.push({
                    frame: "hover",
                    to: c.transform_hover,
                    style: c.style_hover,
                    speed: h.speed,
                    ease: h.anim.ease,
                    splitdelay: c.elementdelay
                }), c.frames = d
            }
            if (!c.frames_added) {
                if (c.inframeindex = 0, c.outframeindex = -1, c.hoverframeindex = -1, void 0 !== c.frames)
                    for (var i = 0; i < c.frames.length; i++) void 0 === c.frames[0].from && (c.frames[0].from = "o:inherit"), 0 === c.frames[0].delay && (c.frames[0].delay = 20), "hover" === c.frames[i].frame ? c.hoverframeindex = i : "frame_999" !== c.frames[i].frame && "frame_out" !== c.frames[i].frame && "last" !== c.frames[i].frame && "end" !== c.frames[i].frame || (c.outframeindex = i), void 0 !== c.frames[i].split && c.frames[i].split.match(/chars|words|lines/g) && (c.splittext = !0);
                c.outframeindex = c.outframeindex === -1 ? c.hoverframeindex === -1 ? c.frames.length - 1 : c.frames.length - 2 : c.outframeindex, c.frames_added = !0
            }
        },
        animcompleted: function(a, c) {
            var d = a.data(),
                e = d.videotype,
                f = d.autoplay,
                g = d.autoplayonlyfirsttime;
            void 0 != e && "none" != e && (1 == f || "true" == f || "on" == f || "1sttime" == f || g ? (("carousel" !== c.sliderType || "carousel" === c.sliderType && "on" === c.carousel.showLayersAllTime && a.closest("li").hasClass("active-revslide") || "carousel" === c.sliderType && "on" !== c.carousel.showLayersAllTime && a.closest("li").hasClass("active-revslide")) && b.playVideo(a, c), b.toggleState(a.data("videotoggledby")), (g || "1sttime" == f) && (d.autoplayonlyfirsttime = !1, d.autoplay = "off")) : ("no1sttime" == f && (d.datasetautoplay = "on"), b.unToggleState(a.data("videotoggledby"))))
        },
        handleStaticLayers: function(a, b) {
            var c = parseInt(a.data("startslide"), 0),
                d = parseInt(a.data("endslide"), 0);
            c < 0 && (c = 0), d < 0 && (d = b.realslideamount), 0 === c && d === b.realslideamount - 1 && (d = b.realslideamount + 1), a.data("startslide", c), a.data("endslide", d)
        },
        animateTheCaptions: function(a) {
            if ("stop" === b.compare_version(d).check) return !1;
            var c = a.opt,
                e = a.slide,
                f = a.recall,
                g = a.maintimeline,
                h = a.preset,
                i = a.startslideanimat,
                j = "carousel" === c.sliderType ? 0 : c.width / 2 - c.gridwidth[c.curWinRange] * c.bw / 2,
                k = 0,
                l = e.data("index");
            if (c.layers = c.layers || new Object, c.layers[l] = c.layers[l] || e.find(".tp-caption"), c.layers.static = c.layers.static || c.c.find(".tp-static-layers").find(".tp-caption"), void 0 === c.timelines && b.createTimelineStructure(c), c.conh = c.c.height(), c.conw = c.c.width(), c.ulw = c.ul.width(), c.ulh = c.ul.height(), c.debugMode) {
                e.addClass("indebugmode"), e.find(".helpgrid").remove(), c.c.find(".hglayerinfo").remove(), e.append('<div class="helpgrid" style="width:' + c.gridwidth[c.curWinRange] * c.bw + "px;height:" + c.gridheight[c.curWinRange] * c.bw + 'px;"></div>');
                var m = e.find(".helpgrid");
                m.append('<div class="hginfo">Zoom:' + Math.round(100 * c.bw) + "% &nbsp;&nbsp;&nbsp; Device Level:" + c.curWinRange + "&nbsp;&nbsp;&nbsp; Grid Preset:" + c.gridwidth[c.curWinRange] + "x" + c.gridheight[c.curWinRange] + "</div>"), c.c.append('<div class="hglayerinfo"></div>'), m.append('<div class="tlhg"></div>')
            }
            void 0 !== l && c.layers[l] && jQuery.each(c.layers[l], function(a, d) {
                var e = jQuery(this);
                b.updateMarkup(this, c), b.prepareSingleCaption({
                    caption: e,
                    opt: c,
                    offsetx: j,
                    offsety: k,
                    index: a,
                    recall: f,
                    preset: h
                }), h && 0 !== i || b.buildFullTimeLine({
                    caption: e,
                    opt: c,
                    offsetx: j,
                    offsety: k,
                    index: a,
                    recall: f,
                    preset: h,
                    regenerate: 0 === i
                }), f && "carousel" === c.sliderType && "on" === c.carousel.showLayersAllTime && b.animcompleted(e, c)
            }), c.layers.static && jQuery.each(c.layers.static, function(a, d) {
                var e = jQuery(this),
                    g = e.data();
                g.hoveredstatus !== !0 && g.inhoveroutanimation !== !0 ? (b.updateMarkup(this, c), b.prepareSingleCaption({
                    caption: e,
                    opt: c,
                    offsetx: j,
                    offsety: k,
                    index: a,
                    recall: f,
                    preset: h
                }), h && 0 !== i || b.buildFullTimeLine({
                    caption: e,
                    opt: c,
                    offsetx: j,
                    offsety: k,
                    index: a,
                    recall: f,
                    preset: h,
                    regenerate: 0 === i
                }), f && "carousel" === c.sliderType && "on" === c.carousel.showLayersAllTime && b.animcompleted(e, c)) : b.prepareSingleCaption({
                    caption: e,
                    opt: c,
                    offsetx: j,
                    offsety: k,
                    index: a,
                    recall: f,
                    preset: h
                })
            });
            var n = c.nextSlide === -1 || void 0 === c.nextSlide ? 0 : c.nextSlide;
            n = n > c.rowzones.length ? c.rowzones.length : n, void 0 != c.rowzones && c.rowzones.length > 0 && void 0 != c.rowzones[n] && n >= 0 && n <= c.rowzones.length && c.rowzones[n].length > 0 && b.setSize(c), h || void 0 !== i && (void 0 !== l && jQuery.each(c.timelines[l].layers, function(a, d) {
                var e = d.layer.data();
                "none" !== d.wrapper && void 0 !== d.wrapper || ("keep" == d.triggerstate && "on" === e.triggerstate ? b.playAnimationFrame({
                    caption: d.layer,
                    opt: c,
                    frame: "frame_0",
                    triggerdirection: "in",
                    triggerframein: "frame_0",
                    triggerframeout: "frame_999"
                }) : d.timeline.restart(0))
            }), c.timelines.staticlayers && jQuery.each(c.timelines.staticlayers.layers, function(a, d) {
                var e = d.layer.data(),
                    f = n >= d.firstslide && n <= d.lastslide,
                    g = n < d.firstslide || n > d.lastslide,
                    h = d.timeline.getLabelTime("slide_" + d.firstslide),
                    i = d.timeline.getLabelTime("slide_" + d.lastslide),
                    j = e.static_layer_timeline_time,
                    k = "in" === e.animdirection || "out" !== e.animdirection && void 0,
                    l = "bytrigger" === e.frames[0].delay,
                    o = ("bytrigger" === e.frames[e.frames.length - 1].delay, e.triggered_startstatus),
                    p = e.lasttriggerstate;
                e.hoveredstatus !== !0 && 1 != e.inhoveroutanimation && (void 0 !== j && k && ("keep" == p ? (b.playAnimationFrame({
                    caption: d.layer,
                    opt: c,
                    frame: "frame_0",
                    triggerdirection: "in",
                    triggerframein: "frame_0",
                    triggerframeout: "frame_999"
                }), e.triggeredtimeline.time(j)) : e.hoveredstatus !== !0 && d.timeline.time(j)), "reset" === p && "hidden" === o && (d.timeline.time(0), e.animdirection = "out"), f ? k ? n === d.lastslide && (d.timeline.play(i), e.animdirection = "in") : (l || "in" === e.animdirection || d.timeline.play(h), ("visible" == o && "keep" !== p || "keep" === p && k === !0 || "visible" == o && void 0 === k) && (d.timeline.play(h + .01), e.animdirection = "in")) : g && k && d.timeline.play("frame_999"))
            })), void 0 != g && setTimeout(function() {
                g.resume()
            }, 30)
        },
        prepareSingleCaption: function(a) {
            var c = a.caption,
                d = c.data(),
                e = a.opt,
                f = a.recall,
                g = a.recall,
                i = (a.preset, jQuery("body").hasClass("rtl"));
            if (d._pw = void 0 === d._pw ? c.closest(".tp-parallax-wrap") : d._pw, d._lw = void 0 === d._lw ? c.closest(".tp-loop-wrap") : d._lw, d._mw = void 0 === d._mw ? c.closest(".tp-mask-wrap") : d._mw, d._responsive = d.responsive || "on", d._respoffset = d.responsive_offset || "on", d._ba = d.basealign || "grid", d._gw = "grid" === d._ba ? e.width : e.ulw, d._gh = "grid" === d._ba ? e.height : e.ulh, d._lig = void 0 === d._lig ? c.hasClass("rev_layer_in_group") ? c.closest(".rev_group") : c.hasClass("rev_layer_in_column") ? c.closest(".rev_column_inner") : c.hasClass("rev_column_inner") ? c.closest(".rev_row") : "none" : d._lig, d._ingroup = void 0 === d._ingroup ? !(c.hasClass("rev_group") || !c.closest(".rev_group")) : d._ingroup, d._isgroup = void 0 === d._isgroup ? !!c.hasClass("rev_group") : d._isgroup, d._nctype = d.type || "none", d._cbgc_auto = void 0 === d._cbgc_auto ? "column" === d._nctype && d._pw.find(".rev_column_bg_auto_sized") : d._cbgc_auto, d._cbgc_man = void 0 === d._cbgc_man ? "column" === d._nctype && d._pw.find(".rev_column_bg_man_sized") : d._cbgc_man, d._slideid = d._slideid || c.closest(".tp-revslider-slidesli").data("index"), d._id = void 0 === d._id ? c.data("id") || c.attr("id") : d._id, d._slidelink = void 0 === d._slidelink ? void 0 !== c.hasClass("slidelink") && c.hasClass("slidelink") : d._slidelink, void 0 === d._li && (c.hasClass("tp-static-layer") ? (d._isstatic = !0, d._li = c.closest(".tp-static-layers"), d._slideid = "staticlayers") : d._li = c.closest(".tp-revslider-slidesli")), d._row = void 0 === d._row ? "column" === d._nctype && d._pw.closest(".rev_row") : d._row, void 0 === d._togglelisteners && c.find(".rs-toggled-content") ? (d._togglelisteners = !0, void 0 === d.actions && c.click(function() {
                    b.swaptoggleState(c)
                })) : d._togglelisteners = !1, "fullscreen" == e.sliderLayout && (a.offsety = d._gh / 2 - e.gridheight[e.curWinRange] * e.bh / 2), ("on" == e.autoHeight || void 0 != e.minHeight && e.minHeight > 0) && (a.offsety = e.conh / 2 - e.gridheight[e.curWinRange] * e.bh / 2), a.offsety < 0 && (a.offsety = 0), e.debugMode) {
                c.closest("li").find(".helpgrid").css({
                    top: a.offsety + "px",
                    left: a.offsetx + "px"
                });
                var k = e.c.find(".hglayerinfo");
                c.on("hover, mouseenter", function() {
                    var a = "";
                    c.data() && jQuery.each(c.data(), function(b, c) {
                        "object" != typeof c && (a = a + '<span style="white-space:nowrap"><span style="color:#27ae60">' + b + ":</span>" + c + "</span>&nbsp; &nbsp; ")
                    }), k.html(a)
                })
            }
            var m = void 0 === d.visibility ? "oon" : o(d.visibility, e)[e.forcedWinRange] || o(d.visibility, e) || "ooon";
            if ("off" === m || d._gw < e.hideCaptionAtLimit && "on" == d.captionhidden || d._gw < e.hideAllCaptionAtLimit ? d._pw.addClass("tp-hidden-caption") : d._pw.removeClass("tp-hidden-caption"), d.layertype = "html", a.offsetx < 0 && (a.offsetx = 0), void 0 != d.thumbimage && void 0 == d.videoposter && (d.videoposter = d.thumbimage), c.find("img").length > 0) {
                var n = c.find("img");
                d.layertype = "image", 0 == n.width() && n.css({
                    width: "auto"
                }), 0 == n.height() && n.css({
                    height: "auto"
                }), void 0 == n.data("ww") && n.width() > 0 && n.data("ww", n.width()), void 0 == n.data("hh") && n.height() > 0 && n.data("hh", n.height());
                var q = n.data("ww"),
                    t = n.data("hh"),
                    v = "slide" == d._ba ? e.ulw : e.gridwidth[e.curWinRange],
                    w = "slide" == d._ba ? e.ulh : e.gridheight[e.curWinRange];
                q = o(n.data("ww"), e)[e.curWinRange] || o(n.data("ww"), e) || "auto", t = o(n.data("hh"), e)[e.curWinRange] || o(n.data("hh"), e) || "auto";
                var x = "full" === q || "full-proportional" === q,
                    y = "full" === t || "full-proportional" === t;
                if ("full-proportional" === q) {
                    var z = n.data("owidth"),
                        A = n.data("oheight");
                    z / v < A / w ? (q = v, t = A * (v / z)) : (t = w, q = z * (w / A))
                } else q = x ? v : !jQuery.isNumeric(q) && q.indexOf("%") > 0 ? q : parseFloat(q), t = y ? w : !jQuery.isNumeric(t) && t.indexOf("%") > 0 ? t : parseFloat(t);
                q = void 0 === q ? 0 : q, t = void 0 === t ? 0 : t, "off" !== d._responsive ? ("grid" != d._ba && x ? jQuery.isNumeric(q) ? n.css({
                    width: q + "px"
                }) : n.css({
                    width: q
                }) : jQuery.isNumeric(q) ? n.css({
                    width: q * e.bw + "px"
                }) : n.css({
                    width: q
                }), "grid" != d._ba && y ? jQuery.isNumeric(t) ? n.css({
                    height: t + "px"
                }) : n.css({
                    height: t
                }) : jQuery.isNumeric(t) ? n.css({
                    height: t * e.bh + "px"
                }) : n.css({
                    height: t
                })) : n.css({
                    width: q,
                    height: t
                }), d._ingroup && "row" !== d._nctype && (void 0 !== q && !jQuery.isNumeric(q) && q.indexOf("%") > 0 && punchgs.TweenLite.set([d._lw, d._pw, d._mw], {
                    minWidth: q
                }), void 0 !== t && !jQuery.isNumeric(t) && t.indexOf("%") > 0 && punchgs.TweenLite.set([d._lw, d._pw, d._mw], {
                    minHeight: t
                }))
            }
            if ("slide" === d._ba) a.offsetx = 0, a.offsety = 0;
            else if (d._isstatic && void 0 !== e.carousel && void 0 !== e.carousel.horizontal_align && "carousel" === e.sliderType) {
                switch (e.carousel.horizontal_align) {
                    case "center":
                        a.offsetx = 0 + (e.ulw - e.gridwidth[e.curWinRange] * e.bw) / 2;
                        break;
                    case "left":
                        break;
                    case "right":
                        a.offsetx = e.ulw - e.gridwidth[e.curWinRange] * e.bw
                }
                a.offsetx = a.offsetx < 0 ? 0 : a.offsetx
            }
            var B = "html5" == d.audio ? "audio" : "video";
            if (c.hasClass("tp-videolayer") || c.hasClass("tp-audiolayer") || c.find("iframe").length > 0 || c.find(B).length > 0) {
                if (d.layertype = "video", b.manageVideoLayer && b.manageVideoLayer(c, e, f, g), !f && !g) {
                    d.videotype;
                    b.resetVideo && b.resetVideo(c, e, a.preset)
                }
                var D = d.aspectratio;
                void 0 != D && D.split(":").length > 1 && b.prepareCoveredVideo(D, e, c);
                var n = c.find("iframe") ? c.find("iframe") : n = c.find(B),
                    E = !c.find("iframe"),
                    F = c.hasClass("coverscreenvideo");
                n.css({
                    display: "block"
                }), void 0 == c.data("videowidth") && (c.data("videowidth", n.width()), c.data("videoheight", n.height()));
                var q = o(c.data("videowidth"), e)[e.curWinRange] || o(c.data("videowidth"), e) || "auto",
                    t = o(c.data("videoheight"), e)[e.curWinRange] || o(c.data("videoheight"), e) || "auto";
                !jQuery.isNumeric(q) && q.indexOf("%") > 0 ? t = parseFloat(t) * e.bh + "px" : (q = parseFloat(q) * e.bw + "px", t = parseFloat(t) * e.bh + "px"), d.cssobj = void 0 === d.cssobj ? r(c, 0) : d.cssobj;
                var G = s(d.cssobj, e);
                if ("auto" == G.lineHeight && (G.lineHeight = G.fontSize + 4), c.hasClass("fullscreenvideo") || F) {
                    a.offsetx = 0, a.offsety = 0, c.data("x", 0), c.data("y", 0);
                    var H = d._gh;
                    "on" == e.autoHeight && (H = e.conh), c.css({
                        width: d._gw,
                        height: H
                    })
                } else punchgs.TweenLite.set(c, {
                    paddingTop: Math.round(G.paddingTop * e.bh) + "px",
                    paddingBottom: Math.round(G.paddingBottom * e.bh) + "px",
                    paddingLeft: Math.round(G.paddingLeft * e.bw) + "px",
                    paddingRight: Math.round(G.paddingRight * e.bw) + "px",
                    marginTop: G.marginTop * e.bh + "px",
                    marginBottom: G.marginBottom * e.bh + "px",
                    marginLeft: G.marginLeft * e.bw + "px",
                    marginRight: G.marginRight * e.bw + "px",
                    borderTopWidth: Math.round(G.borderTopWidth * e.bh) + "px",
                    borderBottomWidth: Math.round(G.borderBottomWidth * e.bh) + "px",
                    borderLeftWidth: Math.round(G.borderLeftWidth * e.bw) + "px",
                    borderRightWidth: Math.round(G.borderRightWidth * e.bw) + "px",
                    width: q,
                    height: t
                });
                (0 == E && !F || 1 != d.forcecover && !c.hasClass("fullscreenvideo") && !F) && (n.width(q), n.height(t)), d._ingroup && null !== d.videowidth && void 0 !== d.videowidth && !jQuery.isNumeric(d.videowidth) && d.videowidth.indexOf("%") > 0 && punchgs.TweenLite.set([d._lw, d._pw, d._mw], {
                    minWidth: d.videowidth
                })
            }
            u(c, e, 0, d._responsive), c.hasClass("tp-resizeme") && c.find("*").each(function() {
                u(jQuery(this), e, "rekursive", d._responsive)
            });
            var I = c.outerHeight(),
                J = c.css("backgroundColor");
            p(c, ".frontcorner", "left", "borderRight", "borderTopColor", I, J), p(c, ".frontcornertop", "left", "borderRight", "borderBottomColor", I, J), p(c, ".backcorner", "right", "borderLeft", "borderBottomColor", I, J), p(c, ".backcornertop", "right", "borderLeft", "borderTopColor", I, J), "on" == e.fullScreenAlignForce && (a.offsetx = 0, a.offsety = 0), d.arrobj = new Object, d.arrobj.voa = o(d.voffset, e)[e.curWinRange] || o(d.voffset, e)[0], d.arrobj.hoa = o(d.hoffset, e)[e.curWinRange] || o(d.hoffset, e)[0], d.arrobj.elx = o(d.x, e)[e.curWinRange] || o(d.x, e)[0], d.arrobj.ely = o(d.y, e)[e.curWinRange] || o(d.y, e)[0];
            var K = 0 == d.arrobj.voa.length ? 0 : d.arrobj.voa,
                L = 0 == d.arrobj.hoa.length ? 0 : d.arrobj.hoa,
                M = 0 == d.arrobj.elx.length ? 0 : d.arrobj.elx,
                N = 0 == d.arrobj.ely.length ? 0 : d.arrobj.ely;
            d.eow = c.outerWidth(!0), d.eoh = c.outerHeight(!0), 0 == d.eow && 0 == d.eoh && (d.eow = e.ulw, d.eoh = e.ulh);
            var O = "off" !== d._respoffset ? parseInt(K, 0) * e.bw : parseInt(K, 0),
                P = "off" !== d._respoffset ? parseInt(L, 0) * e.bw : parseInt(L, 0),
                Q = "grid" === d._ba ? e.gridwidth[e.curWinRange] * e.bw : d._gw,
                R = "grid" === d._ba ? e.gridheight[e.curWinRange] * e.bw : d._gh;
            "on" == e.fullScreenAlignForce && (Q = e.ulw, R = e.ulh), "none" !== d._lig && void 0 != d._lig && (Q = d._lig.width(), R = d._lig.height(), a.offsetx = 0, a.offsety = 0), M = "center" === M || "middle" === M ? Q / 2 - d.eow / 2 + P : "left" === M ? P : "right" === M ? Q - d.eow - P : "off" !== d._respoffset ? M * e.bw : M, N = "center" == N || "middle" == N ? R / 2 - d.eoh / 2 + O : "top" == N ? O : "bottom" == N ? R - d.eoh - O : "off" !== d._respoffset ? N * e.bw : N, i && !d._slidelink && (M += d.eow), d._slidelink && (M = 0), d.calcx = parseInt(M, 0) + a.offsetx, d.calcy = parseInt(N, 0) + a.offsety;
            var S = c.css("z-Index");
            if ("row" !== d._nctype && "column" !== d._nctype) punchgs.TweenLite.set(d._pw, {
                zIndex: S,
                top: d.calcy,
                left: d.calcx,
                overwrite: "auto"
            });
            else if ("row" !== d._nctype) punchgs.TweenLite.set(d._pw, {
                zIndex: S,
                width: d.columnwidth,
                top: 0,
                left: 0,
                overwrite: "auto"
            });
            else if ("row" === d._nctype) {
                var T = "grid" === d._ba ? Q + "px" : "100%";
                punchgs.TweenLite.set(d._pw, {
                    zIndex: S,
                    width: T,
                    top: 0,
                    left: a.offsetx,
                    overwrite: "auto"
                })
            }
            void 0 !== d.blendmode && punchgs.TweenLite.set(d._pw, {
                mixBlendMode: d.blendmode
            }), "row" === d._nctype && (d.columnbreak <= e.curWinRange ? c.addClass("rev_break_columns") : c.removeClass("rev_break_columns")), "on" == d.loopanimation && punchgs.TweenLite.set(d._lw, {
                minWidth: d.eow,
                minHeight: d.eoh
            }), d._ingroup && "row" !== d._nctype && (void 0 !== d._groupw && !jQuery.isNumeric(d._groupw) && d._groupw.indexOf("%") > 0 && punchgs.TweenLite.set([d._lw, d._pw, d._mw], {
                minWidth: d._groupw
            }), void 0 !== d._grouph && !jQuery.isNumeric(d._grouph) && d._grouph.indexOf("%") > 0 && punchgs.TweenLite.set([d._lw, d._pw, d._mw], {
                minHeight: d._grouph
            }))
        },
        createTimelineStructure: function(a) {
            function b(a, b, c, d) {
                var f, e = new punchgs.TimelineLite({
                    paused: !0
                });
                c = c || new Object, c[a.attr("id")] = c[a.attr("id")] || new Object, "staticlayers" === d && (c[a.attr("id")].firstslide = a.data("startslide"), c[a.attr("id")].lastslide = a.data("endslide")), a.data("slideid", d), c[a.attr("id")].defclasses = f = a[0].className, c[a.attr("id")].wrapper = f.indexOf("rev_layer_in_column") >= 0 ? a.closest(".rev_column_inner") : f.indexOf("rev_column_inner") >= 0 ? a.closest(".rev_row") : f.indexOf("rev_layer_in_group") >= 0 ? a.closest(".rev_group") : "none", c[a.attr("id")].timeline = e, c[a.attr("id")].layer = a, c[a.attr("id")].triggerstate = a.data("lasttriggerstate"), c[a.attr("id")].dchildren = f.indexOf("rev_row") >= 0 ? a[0].getElementsByClassName("rev_column_inner") : f.indexOf("rev_column_inner") >= 0 ? a[0].getElementsByClassName("tp-caption") : f.indexOf("rev_group") >= 0 ? a[0].getElementsByClassName("rev_layer_in_group") : "none", a.data("timeline", e)
            }
            a.timelines = a.timelines || new Object, a.c.find(".tp-revslider-slidesli, .tp-static-layers").each(function() {
                var c = jQuery(this),
                    d = c.data("index");
                a.timelines[d] = a.timelines[d] || {}, a.timelines[d].layers = a.timelines[d].layers || new Object, c.find(".tp-caption").each(function(c) {
                    b(jQuery(this), a, a.timelines[d].layers, d)
                })
            })
        },
        buildFullTimeLine: function(a) {
            var k, l, c = a.caption,
                d = c.data(),
                f = a.opt,
                i = {},
                n = j();
            if (k = f.timelines[d._slideid].layers[d._id], !k.generated || a.regenerate === !0) {
                if (l = k.timeline, k.generated = !0, void 0 !== d.current_timeline && a.regenerate !== !0 ? (d.current_timeline_pause = d.current_timeline.paused(), d.current_timeline_time = d.current_timeline.time(), d.current_is_nc_timeline = l === d.current_timeline, d.static_layer_timeline_time = d.current_timeline_time) : (d.static_layer_timeline_time = d.current_timeline_time, d.current_timeline_time = 0, d.current_timeline && d.current_timeline.clear()), l.clear(), i.svg = void 0 != d.svg_src && c.find("svg"), i.svg && (d.idlesvg = h(d.svg_idle, g())), d.hoverframeindex !== -1 && void 0 !== d.hoverframeindex && !c.hasClass("rs-hover-ready")) {
                    if (c.addClass("rs-hover-ready"), d.hovertimelines = {}, d.hoveranim = m(n, d.frames[d.hoverframeindex].to), d.hoveranim = q(d.hoveranim, d.frames[d.hoverframeindex].style), i.svg) {
                        var p = h(d.svg_hover, g());
                        void 0 != d.hoveranim.anim.color && (p.anim.fill = d.hoveranim.anim.color, d.idlesvg.anim.fill = i.svg.css("color")), d.hoversvg = p
                    }
                    c.hover(function(a) {
                        var b = {
                                caption: jQuery(a.currentTarget),
                                opt: f,
                                firstframe: "frame_0",
                                lastframe: "frame_999"
                            },
                            d = (e(b), b.caption),
                            g = d.data(),
                            h = g.frames[g.hoverframeindex],
                            j = !0;
                        g.forcehover = h.force, j && (g.hovertimelines.item = punchgs.TweenLite.to(d, h.speed / 1e3, g.hoveranim.anim), (g.hoverzIndex || g.hoveranim.anim && g.hoveranim.anim.zIndex) && (g.basiczindex = void 0 === g.basiczindex ? g.cssobj.zIndex : g.basiczindex, g.hoverzIndex = void 0 === g.hoverzIndex ? g.hoveranim.anim.zIndex : g.hoverzIndex, g.inhoverinanimation = !0, 0 === h.speed && (g.inhoverinanimation = !1), g.hovertimelines.pwhoveranim = punchgs.TweenLite.to(g._pw, h.speed / 1e3, {
                            overwrite: "auto",
                            zIndex: g.hoverzIndex
                        }), g.hovertimelines.pwhoveranim.eventCallback("onComplete", function(a) {
                            a.inhoverinanimation = !1
                        }, [g])), i.svg && (g.hovertimelines.svghoveranim = punchgs.TweenLite.to([i.svg, i.svg.find("path")], h.speed / 1e3, g.hoversvg.anim)), g.hoveredstatus = !0)
                    }, function(a) {
                        var b = {
                                caption: jQuery(a.currentTarget),
                                opt: f,
                                firstframe: "frame_0",
                                lastframe: "frame_999"
                            },
                            d = (e(b), b.caption),
                            g = d.data(),
                            h = g.frames[g.hoverframeindex],
                            j = !0;
                        j && (g.hoveredstatus = !1, g.inhoveroutanimation = !0, g.hovertimelines.item.pause(), g.hovertimelines.item = punchgs.TweenLite.to(d, h.speed / 1e3, jQuery.extend(!0, {}, g._gsTransformTo)), 0 == h.speed && (g.inhoveroutanimation = !1), g.hovertimelines.item.eventCallback("onComplete", function(a) {
                            a.inhoveroutanimation = !1
                        }, [g]), void 0 !== g.hovertimelines.pwhoveranim && (g.hovertimelines.pwhoveranim = punchgs.TweenLite.to(g._pw, h.speed / 1e3, {
                            overwrite: "auto",
                            zIndex: g.basiczindex
                        })), i.svg && punchgs.TweenLite.to([i.svg, i.svg.find("path")], h.speed / 1e3, g.idlesvg.anim))
                    })
                }
                for (var r = 0; r < d.frames.length; r++)
                    if (r !== d.hoverframeindex) {
                        var s = r === d.inframeindex ? "frame_0" : r === d.outframeindex || "frame_999" === d.frames[r].frame ? "frame_999" : "frame_" + r;
                        d.frames[r].framename = s, k[s] = {}, k[s].timeline = new punchgs.TimelineLite({
                            align: "normal"
                        });
                        var t = d.frames[r].delay,
                            v = (d.triggered_startstatus, void 0 !== t ? jQuery.inArray(t, ["slideenter", "bytrigger", "wait"]) >= 0 ? t : parseInt(t, 0) / 1e3 : "wait");
                        void 0 !== k.firstslide && "frame_0" === s && (l.addLabel("slide_" + k.firstslide + "_pause", 0), l.addPause("slide_" + k.firstslide + "_pause"), l.addLabel("slide_" + k.firstslide, "+=0.005")), void 0 !== k.lastslide && "frame_999" === s && (l.addLabel("slide_" + k.lastslide + "_pause", "+=0.01"), l.addPause("slide_" + k.lastslide + "_pause"), l.addLabel("slide_" + k.lastslide, "+=0.005")), jQuery.isNumeric(v) ? l.addLabel(s, "+=" + v) : (l.addLabel("pause_" + r, "+=0.01"), l.addPause("pause_" + r), l.addLabel(s, "+=0.01")), l = b.createFrameOnTimeline({
                            caption: a.caption,
                            timeline: l,
                            label: s,
                            frameindex: r,
                            opt: f
                        })
                    }
                a.regenerate || (d.current_is_nc_timeline && (d.current_timeline = l), d.current_timeline_pause ? l.pause(d.current_timeline_time) : l.time(d.current_timeline_time))
            }
        },
        createFrameOnTimeline: function(a) {
            var c = a.caption,
                d = c.data(),
                e = a.label,
                g = a.timeline,
                h = a.frameindex,
                j = a.opt,
                k = c,
                o = {},
                p = j.timelines[d._slideid].layers[d._id],
                q = d.frames.length - 1,
                r = d.frames[h].split;
            if (d.hoverframeindex !== -1 && d.hoverframeindex == q && (q -= 1), o.content = new punchgs.TimelineLite({
                    align: "normal"
                }), o.mask = new punchgs.TimelineLite({
                    align: "normal"
                }), void 0 === g.vars.id && (g.vars.id = Math.round(1e5 * Math.random())), "column" === d._nctype && (g.add(punchgs.TweenLite.set(d._cbgc_man, {
                    display: "block"
                }), e), g.add(punchgs.TweenLite.set(d._cbgc_auto, {
                    display: "none"
                }), e)), void 0 === d.mySplitText && d.splittext) {
                var s = c.find("a").length > 0 ? c.find("a") : c;
                d.mySplitText = new punchgs.SplitText(s, {
                    type: "chars,words,lines",
                    charsClass: "tp-splitted tp-charsplit",
                    wordsClass: "tp-splitted tp-wordsplit",
                    linesClass: "tp-splitted tp-linesplit"
                }), c.addClass("splitted")
            }
            void 0 !== d.mySplitText && r && r.match(/chars|words|lines/g) && (k = d.mySplitText[r]);
            var y, z, t = h !== d.outframeindex ? m(f(), d.frames[h].to) : void 0 !== d.frames[h].to && null === d.frames[h].to.match(/auto:auto/g) ? m(i(), d.frames[h].to, 1 == j.sdir) : m(i(), d.frames[d.inframeindex].from, 0 == j.sdir),
                u = void 0 !== d.frames[h].from ? m(t, d.frames[d.inframeindex].from, 1 == j.sdir) : void 0,
                x = d.frames[h].splitdelay;
            if (0 !== h || a.fromcurrentstate ? z = n(d.frames[h].mask) : y = n(d.frames[h].mask), t.anim.ease = void 0 === d.frames[h].ease ? punchgs.Power1.easeInOut : d.frames[h].ease, void 0 !== u && (u.anim.ease = void 0 === d.frames[h].ease ? punchgs.Power1.easeInOut : d.frames[h].ease, u.speed = void 0 === d.frames[h].speed ? u.speed : d.frames[h].speed, u.anim.x = u.anim.x * j.bw || l(u.anim.x, j, d.eow, d.eoh, d.calcy, d.calcx, "horizontal"), u.anim.y = u.anim.y * j.bw || l(u.anim.y, j, d.eow, d.eoh, d.calcy, d.calcx, "vertical")), void 0 !== t && (t.anim.ease = void 0 === d.frames[h].ease ? punchgs.Power1.easeInOut : d.frames[h].ease, t.speed = void 0 === d.frames[h].speed ? t.speed : d.frames[h].speed, t.anim.x = t.anim.x * j.bw || l(t.anim.x, j, d.eow, d.eoh, d.calcy, d.calcx, "horizontal"), t.anim.y = t.anim.y * j.bw || l(t.anim.y, j, d.eow, d.eoh, d.calcy, d.calcx, "vertical")), c.data("iframes") && g.add(punchgs.TweenLite.set(c.find("iframe"), {
                    autoAlpha: 1
                }), e + "+=0.001"), h === d.outframeindex && (d.frames[h].to && d.frames[h].to.match(/auto:auto/g), t.speed = void 0 === d.frames[h].speed || "inherit" === d.frames[h].speed ? d.frames[d.inframeindex].speed : d.frames[h].speed, t.anim.ease = void 0 === d.frames[h].ease || "inherit" === d.frames[h].ease ? d.frames[d.inframeindex].ease : d.frames[h].ease, t.anim.overwrite = "auto"), 0 !== h || a.fromcurrentstate) 0 === h && a.fromcurrentstate && (t.speed = u.speed);
            else {
                if (k != c) {
                    var A = jQuery.extend({}, t.anim, !0);
                    g.add(punchgs.TweenLite.set(c, t.anim), e), t = f(), t.ease = A.ease, void 0 !== A.filter && (t.anim.filter = A.filter), void 0 !== A["-webkit-filter"] && (t.anim["-webkit-filter"] = A["-webkit-filter"])
                }
                u.anim.visibility = "hidden", u.anim.immediateRender = !0, t.anim.visibility = "visible"
            }
            return a.fromcurrentstate && (t.anim.immediateRender = !0), 0 !== h || a.fromcurrentstate ? g.add(o.content.staggerTo(k, t.speed / 1e3, t.anim, x), e) : g.add(o.content.staggerFromTo(k, u.speed / 1e3, u.anim, t.anim, x), e), void 0 === z || z === !1 || 0 === h && a.ignorefirstframe || (z.anim.ease = void 0 === z.anim.ease || "inherit" === z.anim.ease ? d.frames[0].ease : z.anim.ease, z.anim.overflow = "hidden", z.anim.x = z.anim.x * j.bw || l(z.anim.x, j, d.eow, d.eoh, d.calcy, d.calcx, "horizontal"), z.anim.y = z.anim.y * j.bw || l(z.anim.y, j, d.eow, d.eoh, d.calcy, d.calcx, "vertical")), 0 === h && y && y !== !1 && !a.fromcurrentstate || 0 === h && a.ignorefirstframe ? (z = new Object, z.anim = new Object, z.anim.overwrite = "auto", z.anim.ease = t.anim.ease, z.anim.x = z.anim.y = 0, y && y !== !1 && (y.anim.x = y.anim.x * j.bw || l(y.anim.x, j, d.eow, d.eoh, d.calcy, d.calcx, "horizontal"), y.anim.y = y.anim.y * j.bw || l(y.anim.y, j, d.eow, d.eoh, d.calcy, d.calcx, "vertical"), y.anim.overflow = "hidden")) : 0 === h && g.add(o.mask.set(d._mw, {
                overflow: "visible"
            }), e), void 0 !== y && void 0 !== z && y !== !1 && z !== !1 ? g.add(o.mask.fromTo(d._mw, u.speed / 1e3, y.anim, z.anim, x), e) : void 0 !== z && z !== !1 && g.add(o.mask.to(d._mw, t.speed / 1e3, z.anim, x), e), g.addLabel(e + "_end"), d._gsTransformTo && h === q && d.hoveredstatus && (d.hovertimelines.item = punchgs.TweenLite.to(c, 0, d._gsTransformTo)), d._gsTransformTo = !1, o.content.eventCallback("onStart", function(a, c, d, e, f, g, h, i) {
                var k = {};
                if (k.layer = h, k.eventtype = 0 === a ? "enterstage" : a === e.outframeindex ? "leavestage" : "framestarted", k.layertype = h.data("layertype"), e.active = !0, k.frame_index = a, k.layersettings = h.data(), j.c.trigger("revolution.layeraction", [k]), "on" == e.loopanimation && w(e._lw, j.bw), "enterstage" === k.eventtype && (e.animdirection = "in", e.visibleelement = !0, b.toggleState(e.layertoggledby)), "none" !== c.dchildren && void 0 !== c.dchildren && c.dchildren.length > 0)
                    if (0 === a)
                        for (var l = 0; l < c.dchildren.length; l++) jQuery(c.dchildren[l]).data("timeline").play(0);
                    else if (a === e.outframeindex)
                    for (var l = 0; l < c.dchildren.length; l++) b.endMoveCaption({
                        caption: jQuery(c.dchildren[l]),
                        opt: j,
                        checkchildrens: !0
                    });
                punchgs.TweenLite.set(d, {
                    visibility: "visible"
                }), e.current_frame = a, e.current_timeline = f, e.current_timeline_time = f.time(), i && (e.static_layer_timeline_time = e.current_timeline_time), e.last_frame_started = a
            }, [h, p, d._pw, d, g, t.anim, c, a.updateStaticTimeline]), o.content.eventCallback("onUpdate", function(a, b, d, e, f, g, h, i) {
                "column" === e._nctype && v(c, j), punchgs.TweenLite.set(d, {
                    visibility: "visible"
                }), e.current_frame = g, e.current_timeline = f, e.current_timeline_time = f.time(), i && (e.static_layer_timeline_time = e.current_timeline_time), void 0 !== e.hoveranim && e._gsTransformTo === !1 && (e._gsTransformTo = h, e._gsTransformTo && e._gsTransformTo.startAt && delete e._gsTransformTo.startAt, void 0 === e.cssobj.styleProps.css ? e._gsTransformTo = jQuery.extend(!0, {}, e.cssobj.styleProps, e._gsTransformTo) : e._gsTransformTo = jQuery.extend(!0, {}, e.cssobj.styleProps.css, e._gsTransformTo)), e.visibleelement = !0
            }, [e, d._id, d._pw, d, g, h, jQuery.extend(!0, {}, t.anim), a.updateStaticTimeline]), o.content.eventCallback("onComplete", function(a, d, e, f, g, h, i) {
                var k = {};
                k.layer = c, k.eventtype = 0 === a ? "enteredstage" : a === d - 1 || a === e ? "leftstage" : "frameended", k.layertype = c.data("layertype"), k.layersettings = c.data(), j.c.trigger("revolution.layeraction", [k]), "leftstage" !== k.eventtype && b.animcompleted(c, j), "leftstage" === k.eventtype && b.stopVideo && b.stopVideo(c, j), "column" === g._nctype && (punchgs.TweenLite.set(g._cbgc_man, {
                    display: "none"
                }), punchgs.TweenLite.set(g._cbgc_auto, {
                    display: "block"
                })), "leftstage" === k.eventtype && (g.active = !1, punchgs.TweenLite.set(f, {
                    visibility: "hidden",
                    overwrite: "auto"
                }), g.animdirection = "out", g.visibleelement = !1, b.unToggleState(g.layertoggledby)), g.current_frame = a, g.current_timeline = h, g.current_timeline_time = h.time(), i && (g.static_layer_timeline_time = g.current_timeline_time)
            }, [h, d.frames.length, q, d._pw, d, g, a.updateStaticTimeline]), g
        },
        endMoveCaption: function(a) {
            a.firstframe = "frame_0", a.lastframe = "frame_999";
            var c = e(a),
                d = a.caption.data();
            if (void 0 !== a.frame ? c.timeline.play(a.frame) : (!c.static || a.currentslide >= c.removeonslide || a.currentslide < c.showonslide) && (c.outnow = new punchgs.TimelineLite, c.timeline.pause(), d.visibleelement === !0 && b.createFrameOnTimeline({
                    caption: a.caption,
                    timeline: c.outnow,
                    label: "outnow",
                    frameindex: a.caption.data("outframeindex"),
                    opt: a.opt,
                    fromcurrentstate: !0
                }).play()), a.checkchildrens && c.timeline_obj && c.timeline_obj.dchildren && "none" !== c.timeline_obj.dchildren && c.timeline_obj.dchildren.length > 0)
                for (var f = 0; f < c.timeline_obj.dchildren.length; f++) b.endMoveCaption({
                    caption: jQuery(c.timeline_obj.dchildren[f]),
                    opt: a.opt
                })
        },
        playAnimationFrame: function(a) {
            a.firstframe = a.triggerframein, a.lastframe = a.triggerframeout;
            var f, c = e(a),
                d = a.caption.data(),
                g = 0;
            for (var h in d.frames) d.frames[h].framename === a.frame && (f = g), g++;
            void 0 !== d.triggeredtimeline && d.triggeredtimeline.pause(), d.triggeredtimeline = new punchgs.TimelineLite, c.timeline.pause();
            var i = d.visibleelement === !0;
            d.triggeredtimeline = b.createFrameOnTimeline({
                caption: a.caption,
                timeline: d.triggeredtimeline,
                label: "triggered",
                frameindex: f,
                updateStaticTimeline: !0,
                opt: a.opt,
                ignorefirstframe: !0,
                fromcurrentstate: i
            }).play()
        },
        removeTheCaptions: function(a, c) {
            if ("stop" === b.compare_version(d).check) return !1;
            var f = a.data("index"),
                g = new Array;
            c.layers[f] && jQuery.each(c.layers[f], function(a, b) {
                g.push(b)
            });
            var h = b.currentSlideIndex(c);
            g && jQuery.each(g, function(a) {
                var d = jQuery(this);
                "carousel" === c.sliderType && "on" === c.carousel.showLayersAllTime ? (clearTimeout(d.data("videoplaywait")), b.stopVideo && b.stopVideo(d, c), b.removeMediaFromList && b.removeMediaFromList(d, c), c.lastplayedvideos = []) : (x(d), clearTimeout(d.data("videoplaywait")), b.endMoveCaption({
                    caption: d,
                    opt: c,
                    currentslide: h
                }), b.removeMediaFromList && b.removeMediaFromList(d, c), c.lastplayedvideos = [])
            })
        }
    });
    var e = function(a) {
            var b = {};
            return a.firstframe = void 0 === a.firstframe ? "frame_0" : a.firstframe, a.lastframe = void 0 === a.lastframe ? "frame_999" : a.lastframe, b.id = a.caption.data("id") || a.caption.attr("id"), b.slideid = a.caption.data("slideid") || a.caption.closest(".tp-revslider-slidesli").data("index"), b.timeline_obj = a.opt.timelines[b.slideid].layers[b.id], b.timeline = b.timeline_obj.timeline, b.ffs = b.timeline.getLabelTime(a.firstframe), b.ffe = b.timeline.getLabelTime(a.firstframe + "_end"), b.lfs = b.timeline.getLabelTime(a.lastframe), b.lfe = b.timeline.getLabelTime(a.lastframe + "_end"), b.ct = b.timeline.time(), b.static = void 0 != b.timeline_obj.firstslide || void 0 != b.timeline_obj.lastslide, b.static && (b.showonslide = b.timeline_obj.firstslide, b.removeonslide = b.timeline_obj.lastslide), b
        },
        f = function(a) {
            return a = void 0 === a ? new Object : a, a.anim = void 0 === a.anim ? new Object : a.anim, a.anim.x = void 0 === a.anim.x ? 0 : a.anim.x, a.anim.y = void 0 === a.anim.y ? 0 : a.anim.y, a.anim.z = void 0 === a.anim.z ? 0 : a.anim.z, a.anim.rotationX = void 0 === a.anim.rotationX ? 0 : a.anim.rotationX, a.anim.rotationY = void 0 === a.anim.rotationY ? 0 : a.anim.rotationY, a.anim.rotationZ = void 0 === a.anim.rotationZ ? 0 : a.anim.rotationZ, a.anim.scaleX = void 0 === a.anim.scaleX ? 1 : a.anim.scaleX, a.anim.scaleY = void 0 === a.anim.scaleY ? 1 : a.anim.scaleY, a.anim.skewX = void 0 === a.anim.skewX ? 0 : a.anim.skewX, a.anim.skewY = void 0 === a.anim.skewY ? 0 : a.anim.skewY, a.anim.opacity = void 0 === a.anim.opacity ? 1 : a.anim.opacity, a.anim.transformOrigin = void 0 === a.anim.transformOrigin ? "50% 50%" : a.anim.transformOrigin, a.anim.transformPerspective = void 0 === a.anim.transformPerspective ? 600 : a.anim.transformPerspective, a.anim.rotation = void 0 === a.anim.rotation ? 0 : a.anim.rotation, a.anim.force3D = void 0 === a.anim.force3D ? "auto" : a.anim.force3D, a.anim.autoAlpha = void 0 === a.anim.autoAlpha ? 1 : a.anim.autoAlpha, a.anim.visibility = void 0 === a.anim.visibility ? "visible" : a.anim.visibility, a.anim.overwrite = void 0 === a.anim.overwrite ? "auto" : a.anim.overwrite, a.speed = void 0 === a.speed ? .3 : a.speed, a.filter = void 0 === a.filter ? "blur(0px) grayscale(0px)" : a.filter, a["-webkit-filter"] = void 0 === a["-webkit-filter"] ? "blur(0px) grayscale(0px)" : a["-webkit-filter"], a
        },
        g = function() {
            var a = new Object;
            return a.anim = new Object, a.anim.stroke = "none", a.anim.strokeWidth = 0, a.anim.strokeDasharray = "none", a.anim.strokeDashoffset = "0", a
        },
        h = function(a, b) {
            var c = a.split(";");
            return c && jQuery.each(c, function(a, c) {
                var d = c.split(":"),
                    e = d[0],
                    f = d[1];
                "sc" == e && (b.anim.stroke = f), "sw" == e && (b.anim.strokeWidth = f), "sda" == e && (b.anim.strokeDasharray = f), "sdo" == e && (b.anim.strokeDashoffset = f)
            }), b
        },
        i = function() {
            var a = new Object;
            return a.anim = new Object, a.anim.x = 0, a.anim.y = 0, a.anim.z = 0, a
        },
        j = function() {
            var a = new Object;
            return a.anim = new Object, a.speed = .2, a
        },
        k = function(a, b) {
            if (jQuery.isNumeric(parseFloat(a))) return parseFloat(a);
            if (void 0 === a || "inherit" === a) return b;
            if (a.split("{").length > 1) {
                var c = a.split(","),
                    d = parseFloat(c[1].split("}")[0]);
                c = parseFloat(c[0].split("{")[1]), a = Math.random() * (d - c) + c
            }
            return a
        },
        l = function(a, b, c, d, e, f, g) {
            return !jQuery.isNumeric(a) && a.match(/%]/g) ? (a = a.split("[")[1].split("]")[0], "horizontal" == g ? a = (c + 2) * parseInt(a, 0) / 100 : "vertical" == g && (a = (d + 2) * parseInt(a, 0) / 100)) : (a = "layer_left" === a ? 0 - c : "layer_right" === a ? c : a, a = "layer_top" === a ? 0 - d : "layer_bottom" === a ? d : a, a = "left" === a || "stage_left" === a ? 0 - c - f : "right" === a || "stage_right" === a ? b.conw - f : "center" === a || "stage_center" === a ? b.conw / 2 - c / 2 - f : a, a = "top" === a || "stage_top" === a ? 0 - d - e : "bottom" === a || "stage_bottom" === a ? b.conh - e : "middle" === a || "stage_middle" === a ? b.conh / 2 - d / 2 - e : a), a
        },
        m = function(a, b, c) {
            var d = new Object;
            if (d = jQuery.extend(!0, {}, d, a), void 0 === b) return d;
            var e = b.split(";"),
                f = "";
            return e && jQuery.each(e, function(a, b) {
                var e = b.split(":"),
                    g = e[0],
                    h = e[1];
                c && void 0 != h && h.length > 0 && h.match(/\(R\)/) && (h = h.replace("(R)", ""), h = "right" === h ? "left" : "left" === h ? "right" : "top" === h ? "bottom" : "bottom" === h ? "top" : h, "[" === h[0] && "-" === h[1] ? h = h.replace("[-", "[") : "[" === h[0] && "-" !== h[1] ? h = h.replace("[", "[-") : "-" === h[0] ? h = h.replace("-", "") : h[0].match(/[1-9]/) && (h = "-" + h)), void 0 != h && (h = h.replace(/\(R\)/, ""), "rotationX" != g && "rX" != g || (d.anim.rotationX = k(h, d.anim.rotationX) + "deg"), "rotationY" != g && "rY" != g || (d.anim.rotationY = k(h, d.anim.rotationY) + "deg"), "rotationZ" != g && "rZ" != g || (d.anim.rotation = k(h, d.anim.rotationZ) + "deg"), "scaleX" != g && "sX" != g || (d.anim.scaleX = k(h, d.anim.scaleX)), "scaleY" != g && "sY" != g || (d.anim.scaleY = k(h, d.anim.scaleY)), "opacity" != g && "o" != g || (d.anim.opacity = k(h, d.anim.opacity)), "fb" == g && (f = "" === f ? "blur(" + parseInt(h, 0) + "px)" : f + " blur(" + parseInt(h, 0) + "px)"), "fg" == g && (f = "" === f ? "grayscale(" + parseInt(h, 0) + "%)" : f + " grayscale(" + parseInt(h, 0) + "%)"), 0 === d.anim.opacity && (d.anim.autoAlpha = 0), d.anim.opacity = 0 == d.anim.opacity ? 1e-4 : d.anim.opacity, "skewX" != g && "skX" != g || (d.anim.skewX = k(h, d.anim.skewX)), "skewY" != g && "skY" != g || (d.anim.skewY = k(h, d.anim.skewY)), "x" == g && (d.anim.x = k(h, d.anim.x)), "y" == g && (d.anim.y = k(h, d.anim.y)), "z" == g && (d.anim.z = k(h, d.anim.z)), "transformOrigin" != g && "tO" != g || (d.anim.transformOrigin = h.toString()), "transformPerspective" != g && "tP" != g || (d.anim.transformPerspective = parseInt(h, 0)), "speed" != g && "s" != g || (d.speed = parseFloat(h)))
            }), "" !== f && (d.anim["-webkit-filter"] = f, d.anim.filter = f), d
        },
        n = function(a) {
            if (void 0 === a) return !1;
            var b = new Object;
            b.anim = new Object;
            var c = a.split(";");
            return c && jQuery.each(c, function(a, c) {
                c = c.split(":");
                var d = c[0],
                    e = c[1];
                "x" == d && (b.anim.x = e), "y" == d && (b.anim.y = e), "s" == d && (b.speed = parseFloat(e)), "e" != d && "ease" != d || (b.anim.ease = e)
            }), b
        },
        o = function(a, b, c) {
            if (void 0 == a && (a = 0), !jQuery.isArray(a) && "string" === jQuery.type(a) && (a.split(",").length > 1 || a.split("[").length > 1)) {
                a = a.replace("[", ""), a = a.replace("]", "");
                var d = a.match(/'/g) ? a.split("',") : a.split(",");
                a = new Array, d && jQuery.each(d, function(b, c) {
                    c = c.replace("'", ""), c = c.replace("'", ""), a.push(c)
                })
            } else {
                var e = a;
                jQuery.isArray(a) || (a = new Array, a.push(e))
            }
            var e = a[a.length - 1];
            if (a.length < b.rle)
                for (var f = 1; f <= b.curWinRange; f++) a.push(e);
            return a
        },
        q = function(a, b) {
            if (void 0 === b) return a;
            b = b.replace("c:", "color:"), b = b.replace("bg:", "background-color:"), b = b.replace("bw:", "border-width:"), b = b.replace("bc:", "border-color:"), b = b.replace("br:", "borderRadius:"), b = b.replace("bs:", "border-style:"), b = b.replace("td:", "text-decoration:"), b = b.replace("zi:", "zIndex:");
            var c = b.split(";");
            return c && jQuery.each(c, function(b, c) {
                var d = c.split(":");
                d[0].length > 0 && (a.anim[d[0]] = d[1])
            }), a
        },
        r = function(a, b) {
            var e, c = new Object,
                d = !1;
            if ("rekursive" == b && (e = a.closest(".tp-caption"), e && a.css("fontSize") === e.css("fontSize") && a.css("fontWeight") === e.css("fontWeight") && a.css("lineHeight") === e.css("lineHeight") && (d = !0)), c.basealign = a.data("basealign") || "grid", c.fontSize = d ? void 0 === e.data("fontsize") ? parseInt(e.css("fontSize"), 0) || 0 : e.data("fontsize") : void 0 === a.data("fontsize") ? parseInt(a.css("fontSize"), 0) || 0 : a.data("fontsize"), c.fontWeight = d ? void 0 === e.data("fontweight") ? parseInt(e.css("fontWeight"), 0) || 0 : e.data("fontweight") : void 0 === a.data("fontweight") ? parseInt(a.css("fontWeight"), 0) || 0 : a.data("fontweight"), c.whiteSpace = d ? void 0 === e.data("whitespace") ? e.css("whitespace") || "normal" : e.data("whitespace") : void 0 === a.data("whitespace") ? a.css("whitespace") || "normal" : a.data("whitespace"), c.textAlign = d ? void 0 === e.data("textalign") ? e.css("textalign") || "inherit" : e.data("textalign") : void 0 === a.data("textalign") ? a.css("textalign") || "inherit" : a.data("textalign"), c.zIndex = d ? void 0 === e.data("zIndex") ? e.css("zIndex") || "inherit" : e.data("zIndex") : void 0 === a.data("zIndex") ? a.css("zIndex") || "inherit" : a.data("zIndex"), jQuery.inArray(a.data("layertype"), ["video", "image", "audio"]) !== -1 || a.is("img") ? c.lineHeight = 0 : c.lineHeight = d ? void 0 === e.data("lineheight") ? parseInt(e.css("lineHeight"), 0) || 0 : e.data("lineheight") : void 0 === a.data("lineheight") ? parseInt(a.css("lineHeight"), 0) || 0 : a.data("lineheight"), c.letterSpacing = d ? void 0 === e.data("letterspacing") ? parseFloat(e.css("letterSpacing"), 0) || 0 : e.data("letterspacing") : void 0 === a.data("letterspacing") ? parseFloat(a.css("letterSpacing")) || 0 : a.data("letterspacing"), c.paddingTop = void 0 === a.data("paddingtop") ? parseInt(a.css("paddingTop"), 0) || 0 : a.data("paddingtop"), c.paddingBottom = void 0 === a.data("paddingbottom") ? parseInt(a.css("paddingBottom"), 0) || 0 : a.data("paddingbottom"), c.paddingLeft = void 0 === a.data("paddingleft") ? parseInt(a.css("paddingLeft"), 0) || 0 : a.data("paddingleft"), c.paddingRight = void 0 === a.data("paddingright") ? parseInt(a.css("paddingRight"), 0) || 0 : a.data("paddingright"), c.marginTop = void 0 === a.data("margintop") ? parseInt(a.css("marginTop"), 0) || 0 : a.data("margintop"), c.marginBottom = void 0 === a.data("marginbottom") ? parseInt(a.css("marginBottom"), 0) || 0 : a.data("marginbottom"), c.marginLeft = void 0 === a.data("marginleft") ? parseInt(a.css("marginLeft"), 0) || 0 : a.data("marginleft"), c.marginRight = void 0 === a.data("marginright") ? parseInt(a.css("marginRight"), 0) || 0 : a.data("marginright"), c.borderTopWidth = void 0 === a.data("bordertopwidth") ? parseInt(a.css("borderTopWidth"), 0) || 0 : a.data("bordertopwidth"), c.borderBottomWidth = void 0 === a.data("borderbottomwidth") ? parseInt(a.css("borderBottomWidth"), 0) || 0 : a.data("borderbottomwidth"), c.borderLeftWidth = void 0 === a.data("borderleftwidth") ? parseInt(a.css("borderLeftWidth"), 0) || 0 : a.data("borderleftwidth"), c.borderRightWidth = void 0 === a.data("borderrightwidth") ? parseInt(a.css("borderRightWidth"), 0) || 0 : a.data("borderrightwidth"), "rekursive" != b) {
                if (c.color = void 0 === a.data("color") ? "nopredefinedcolor" : a.data("color"), c.whiteSpace = d ? void 0 === e.data("whitespace") ? e.css("whiteSpace") || "nowrap" : e.data("whitespace") : void 0 === a.data("whitespace") ? a.css("whiteSpace") || "nowrap" : a.data("whitespace"), c.textAlign = d ? void 0 === e.data("textalign") ? e.css("textalign") || "inherit" : e.data("textalign") : void 0 === a.data("textalign") ? a.css("textalign") || "inherit" : a.data("textalign"), c.fontWeight = d ? void 0 === e.data("fontweight") ? parseInt(e.css("fontWeight"), 0) || 0 : e.data("fontweight") : void 0 === a.data("fontweight") ? parseInt(a.css("fontWeight"), 0) || 0 : a.data("fontweight"), c.minWidth = void 0 === a.data("width") ? parseInt(a.css("minWidth"), 0) || 0 : a.data("width"), c.minHeight = void 0 === a.data("height") ? parseInt(a.css("minHeight"), 0) || 0 : a.data("height"), void 0 != a.data("videowidth") && void 0 != a.data("videoheight")) {
                    var f = a.data("videowidth"),
                        g = a.data("videoheight");
                    f = "100%" === f ? "none" : f, g = "100%" === g ? "none" : g, a.data("width", f), a.data("height", g)
                }
                c.maxWidth = void 0 === a.data("width") ? parseInt(a.css("maxWidth"), 0) || "none" : a.data("width"), c.maxHeight = void 0 === a.data("height") ? parseInt(a.css("maxHeight"), 0) || "none" : a.data("height"), c.wan = void 0 === a.data("wan") ? parseInt(a.css("-webkit-transition"), 0) || "none" : a.data("wan"), c.moan = void 0 === a.data("moan") ? parseInt(a.css("-moz-animation-transition"), 0) || "none" : a.data("moan"), c.man = void 0 === a.data("man") ? parseInt(a.css("-ms-animation-transition"), 0) || "none" : a.data("man"), c.ani = void 0 === a.data("ani") ? parseInt(a.css("transition"), 0) || "none" : a.data("ani")
            }
            return c.styleProps = {
                borderTopLeftRadius: a[0].style.borderTopLeftRadius,
                borderTopRightRadius: a[0].style.borderTopRightRadius,
                borderBottomRightRadius: a[0].style.borderBottomRightRadius,
                borderBottomLeftRadius: a[0].style.borderBottomLeftRadius,
                "background-color": a[0].style["background-color"],
                "border-top-color": a[0].style["border-top-color"],
                "border-bottom-color": a[0].style["border-bottom-color"],
                "border-right-color": a[0].style["border-right-color"],
                "border-left-color": a[0].style["border-left-color"],
                "border-top-style": a[0].style["border-top-style"],
                "border-bottom-style": a[0].style["border-bottom-style"],
                "border-left-style": a[0].style["border-left-style"],
                "border-right-style": a[0].style["border-right-style"],
                "border-left-width": a[0].style["border-left-width"],
                "border-right-width": a[0].style["border-right-width"],
                "border-bottom-width": a[0].style["border-bottom-width"],
                "border-top-width": a[0].style["border-top-width"],
                color: a[0].style.color,
                "text-decoration": a[0].style["text-decoration"],
                "font-style": a[0].style["font-style"]
            }, "" == c.styleProps.color && (c.styleProps.color = a.css("color")), c
        },
        s = function(a, b) {
            var c = new Object;
            return a && jQuery.each(a, function(d, e) {
                var f = o(e, b)[b.curWinRange];
                c[d] = void 0 !== f ? f : a[d]
            }), c
        },
        t = function(a, b, c, d) {
            return a = jQuery.isNumeric(a) ? a * b + "px" : a, a = "full" === a ? d : "auto" === a || "none" === a ? c : a
        },
        u = function(a, b, c, d) {
            var e = a.data();
            e = void 0 === e ? {} : e;
            try {
                if ("BR" == a[0].nodeName || "br" == a[0].tagName) return !1
            } catch (a) {}
            e.cssobj = void 0 === e.cssobj ? r(a, c) : e.cssobj;
            var f = s(e.cssobj, b),
                g = b.bw,
                h = b.bh;
            if ("off" === d && (g = 1, h = 1), "auto" == f.lineHeight && (f.lineHeight = f.fontSize + 4), !a.hasClass("tp-splitted")) {
                a.css("-webkit-transition", "none"), a.css("-moz-transition", "none"), a.css("-ms-transition", "none"), a.css("transition", "none");
                var i = void 0 !== a.data("transform_hover") || void 0 !== a.data("style_hover");
                if (i && punchgs.TweenLite.set(a, f.styleProps), punchgs.TweenLite.set(a, {
                        fontSize: Math.round(f.fontSize * g) + "px",
                        fontWeight: f.fontWeight,
                        letterSpacing: Math.floor(f.letterSpacing * g) + "px",
                        paddingTop: Math.round(f.paddingTop * h) + "px",
                        paddingBottom: Math.round(f.paddingBottom * h) + "px",
                        paddingLeft: Math.round(f.paddingLeft * g) + "px",
                        paddingRight: Math.round(f.paddingRight * g) + "px",
                        marginTop: f.marginTop * h + "px",
                        marginBottom: f.marginBottom * h + "px",
                        marginLeft: f.marginLeft * g + "px",
                        marginRight: f.marginRight * g + "px",
                        borderTopWidth: Math.round(f.borderTopWidth * h) + "px",
                        borderBottomWidth: Math.round(f.borderBottomWidth * h) + "px",
                        borderLeftWidth: Math.round(f.borderLeftWidth * g) + "px",
                        borderRightWidth: Math.round(f.borderRightWidth * g) + "px",
                        lineHeight: Math.round(f.lineHeight * h) + "px",
                        textAlign: f.textAlign,
                        overwrite: "auto"
                    }), "rekursive" != c) {
                    var j = "slide" == f.basealign ? b.ulw : b.gridwidth[b.curWinRange],
                        k = "slide" == f.basealign ? b.ulh : b.gridheight[b.curWinRange],
                        l = t(f.maxWidth, g, "none", j),
                        m = t(f.maxHeight, h, "none", k),
                        n = t(f.minWidth, g, "0px", j),
                        o = t(f.minHeight, h, "0px", k);
                    if (n = void 0 === n ? 0 : n, o = void 0 === o ? 0 : o, l = void 0 === l ? "none" : l, m = void 0 === m ? "none" : m, e._isgroup && ("#1/1#" === n && (n = l = j), "#1/2#" === n && (n = l = j / 2), "#1/3#" === n && (n = l = j / 3), "#1/4#" === n && (n = l = j / 4), "#1/5#" === n && (n = l = j / 5), "#1/6#" === n && (n = l = j / 6), "#2/3#" === n && (n = l = j / 3 * 2), "#3/4#" === n && (n = l = j / 4 * 3), "#2/5#" === n && (n = l = j / 5 * 2), "#3/5#" === n && (n = l = j / 5 * 3), "#4/5#" === n && (n = l = j / 5 * 4), "#3/6#" === n && (n = l = j / 6 * 3), "#4/6#" === n && (n = l = j / 6 * 4), "#5/6#" === n && (n = l = j / 6 * 5)), e._ingroup && (e._groupw = n, e._grouph = o), punchgs.TweenLite.set(a, {
                            maxWidth: l,
                            maxHeight: m,
                            minWidth: n,
                            minHeight: o,
                            whiteSpace: f.whiteSpace,
                            textAlign: f.textAlign,
                            overwrite: "auto"
                        }), "nopredefinedcolor" != f.color && punchgs.TweenLite.set(a, {
                            color: f.color,
                            overwrite: "auto"
                        }), void 0 != e.svg_src) {
                        var p = "nopredefinedcolor" != f.color && void 0 != f.color ? f.color : void 0 != f.css && "nopredefinedcolor" != f.css.color && void 0 != f.css.color ? f.css.color : void 0 != f.styleProps.color ? f.styleProps.color : void 0 != f.styleProps.css && void 0 != f.styleProps.css.color && f.styleProps.css.color;
                        0 != p && (punchgs.TweenLite.set(a.find("svg"), {
                            fill: p,
                            overwrite: "auto"
                        }), punchgs.TweenLite.set(a.find("svg path"), {
                            fill: p,
                            overwrite: "auto"
                        }))
                    }
                }
                "column" === e._nctype && (void 0 === e._column_bg_set && (e._column_bg_set = a.css("backgroundColor"), e._column_bg_image = a.css("backgroundImage"), e._column_bg_image_repeat = a.css("backgroundRepeat"), e._column_bg_image_position = a.css("backgroundPosition"), e._column_bg_image_size = a.css("backgroundSize"), e._column_bg_opacity = a.data("bgopacity"), e._column_bg_opacity = void 0 === e._column_bg_opacity ? 1 : e._column_bg_opacity, punchgs.TweenLite.set(a, {
                    backgroundColor: "transparent",
                    backgroundImage: ""
                })), setTimeout(function() {
                    v(a, b)
                }, 1), e._cbgc_auto && (e._cbgc_auto[0].style.backgroundSize = e._column_bg_image_size, jQuery.isArray(f.marginLeft) ? punchgs.TweenLite.set(e._cbgc_auto, {
                    borderTopWidth: f.marginTop[b.curWinRange] * h + "px",
                    borderLeftWidth: f.marginLeft[b.curWinRange] * g + "px",
                    borderRightWidth: f.marginRight[b.curWinRange] * g + "px",
                    borderBottomWidth: f.marginBottom[b.curWinRange] * h + "px",
                    backgroundColor: e._column_bg_set,
                    backgroundImage: e._column_bg_image,
                    backgroundRepeat: e._column_bg_image_repeat,
                    backgroundPosition: e._column_bg_image_position,
                    opacity: e._column_bg_opacity
                }) : punchgs.TweenLite.set(e._cbgc_auto, {
                    borderTopWidth: f.marginTop * h + "px",
                    borderLeftWidth: f.marginLeft * g + "px",
                    borderRightWidth: f.marginRight * g + "px",
                    borderBottomWidth: f.marginBottom * h + "px",
                    backgroundColor: e._column_bg_set,
                    backgroundImage: e._column_bg_image,
                    backgroundRepeat: e._column_bg_image_repeat,
                    backgroundPosition: e._column_bg_image_position,
                    opacity: e._column_bg_opacity
                }))), setTimeout(function() {
                    a.css("-webkit-transition", a.data("wan")), a.css("-moz-transition", a.data("moan")), a.css("-ms-transition", a.data("man")), a.css("transition", a.data("ani"))
                }, 30)
            }
        },
        v = function(a, b) {
            var c = a.data();
            if (c._cbgc_man) {
                var d, e, f, g, h;
                jQuery.isArray(c.cssobj.marginLeft) ? (d = c.cssobj.marginLeft[b.curWinRange] * b.bw, e = c.cssobj.marginTop[b.curWinRange] * b.bh, f = c.cssobj.marginBottom[b.curWinRange] * b.bh, g = c.cssobj.marginRight[b.curWinRange] * b.bw) : (d = c.cssobj.marginLeft * b.bw, e = c.cssobj.marginTop * b.bh, f = c.cssobj.marginBottom * b.bh, g = c.cssobj.marginRight * b.bw), h = c._row.hasClass("rev_break_columns") ? "100%" : c._row.outerHeight() - (e + f) + "px", c._cbgc_man[0].style.backgroundSize = c._column_bg_image_size, punchgs.TweenLite.set(c._cbgc_man, {
                    width: "100%",
                    height: h,
                    backgroundColor: c._column_bg_set,
                    backgroundImage: c._column_bg_image,
                    backgroundRepeat: c._column_bg_image_repeat,
                    backgroundPosition: c._column_bg_image_position,
                    overwrite: "auto",
                    opacity: c._column_bg_opacity
                })
            }
        },
        w = function(a, b) {
            var c = a.data();
            if (a.hasClass("rs-pendulum") && void 0 == c._loop_timeline) {
                c._loop_timeline = new punchgs.TimelineLite;
                var d = void 0 == a.data("startdeg") ? -20 : a.data("startdeg"),
                    e = void 0 == a.data("enddeg") ? 20 : a.data("enddeg"),
                    f = void 0 == a.data("speed") ? 2 : a.data("speed"),
                    g = void 0 == a.data("origin") ? "50% 50%" : a.data("origin"),
                    h = void 0 == a.data("easing") ? punchgs.Power2.easeInOut : a.data("easing");
                d *= b, e *= b, c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
                    force3D: "auto",
                    rotation: d,
                    transformOrigin: g
                }, {
                    rotation: e,
                    ease: h
                })), c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
                    force3D: "auto",
                    rotation: e,
                    transformOrigin: g
                }, {
                    rotation: d,
                    ease: h,
                    onComplete: function() {
                        c._loop_timeline.restart()
                    }
                }))
            }
            if (a.hasClass("rs-rotate") && void 0 == c._loop_timeline) {
                c._loop_timeline = new punchgs.TimelineLite;
                var d = void 0 == a.data("startdeg") ? 0 : a.data("startdeg"),
                    e = void 0 == a.data("enddeg") ? 360 : a.data("enddeg"),
                    f = void 0 == a.data("speed") ? 2 : a.data("speed"),
                    g = void 0 == a.data("origin") ? "50% 50%" : a.data("origin"),
                    h = void 0 == a.data("easing") ? punchgs.Power2.easeInOut : a.data("easing");
                d *= b, e *= b, c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
                    force3D: "auto",
                    rotation: d,
                    transformOrigin: g
                }, {
                    rotation: e,
                    ease: h,
                    onComplete: function() {
                        c._loop_timeline.restart()
                    }
                }))
            }
            if (a.hasClass("rs-slideloop") && void 0 == c._loop_timeline) {
                c._loop_timeline = new punchgs.TimelineLite;
                var i = void 0 == a.data("xs") ? 0 : a.data("xs"),
                    j = void 0 == a.data("ys") ? 0 : a.data("ys"),
                    k = void 0 == a.data("xe") ? 0 : a.data("xe"),
                    l = void 0 == a.data("ye") ? 0 : a.data("ye"),
                    f = void 0 == a.data("speed") ? 2 : a.data("speed"),
                    h = void 0 == a.data("easing") ? punchgs.Power2.easeInOut : a.data("easing");
                i *= b, j *= b, k *= b, l *= b, c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
                    force3D: "auto",
                    x: i,
                    y: j
                }, {
                    x: k,
                    y: l,
                    ease: h
                })), c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
                    force3D: "auto",
                    x: k,
                    y: l
                }, {
                    x: i,
                    y: j,
                    onComplete: function() {
                        c._loop_timeline.restart()
                    }
                }))
            }
            if (a.hasClass("rs-pulse") && void 0 == c._loop_timeline) {
                c._loop_timeline = new punchgs.TimelineLite;
                var m = void 0 == a.data("zoomstart") ? 0 : a.data("zoomstart"),
                    n = void 0 == a.data("zoomend") ? 0 : a.data("zoomend"),
                    f = void 0 == a.data("speed") ? 2 : a.data("speed"),
                    h = void 0 == a.data("easing") ? punchgs.Power2.easeInOut : a.data("easing");
                c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
                    force3D: "auto",
                    scale: m
                }, {
                    scale: n,
                    ease: h
                })), c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
                    force3D: "auto",
                    scale: n
                }, {
                    scale: m,
                    onComplete: function() {
                        c._loop_timeline.restart()
                    }
                }))
            }
            if (a.hasClass("rs-wave") && void 0 == c._loop_timeline) {
                c._loop_timeline = new punchgs.TimelineLite;
                var o = void 0 == a.data("angle") ? 10 : parseInt(a.data("angle"), 0),
                    p = void 0 == a.data("radius") ? 10 : parseInt(a.data("radius"), 0),
                    f = void 0 == a.data("speed") ? -20 : a.data("speed"),
                    g = void 0 == a.data("origin") ? "50% 50%" : a.data("origin"),
                    q = g.split(" "),
                    r = new Object;
                q.length >= 1 ? (r.x = q[0], r.y = q[1]) : (r.x = "50%", r.y = "50%"), p *= b;
                var s = (parseInt(r.x, 0) / 100 - .5) * a.width(),
                    t = (parseInt(r.y, 0) / 100 - .5) * a.height(),
                    u = -1 * p + t,
                    v = 0 + s,
                    w = {
                        a: 0,
                        ang: o,
                        element: a,
                        unit: p,
                        xoffset: v,
                        yoffset: u
                    },
                    x = parseInt(o, 0),
                    y = new punchgs.TweenLite.fromTo(w, f, {
                        a: 0 + x
                    }, {
                        a: 360 + x,
                        force3D: "auto",
                        ease: punchgs.Linear.easeNone
                    });
                y.eventCallback("onUpdate", function(a) {
                    var b = a.a * (Math.PI / 180),
                        c = a.yoffset + a.unit * (1 - Math.sin(b)),
                        d = a.xoffset + Math.cos(b) * a.unit;
                    punchgs.TweenLite.to(a.element, .1, {
                        force3D: "auto",
                        x: d,
                        y: c
                    })
                }, [w]), y.eventCallback("onComplete", function(a) {
                    a._loop_timeline.restart()
                }, [c]), c._loop_timeline.append(y)
            }
        },
        x = function(a) {
            a.closest(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function() {
                var a = this;
                void 0 != a._loop_timeline && (a._loop_timeline.pause(), a._loop_timeline = null)
            })
        }
}(jQuery);

/*****************************************************************************************************
 * jquery.themepunch.revmigrate.js - jQuery Plugin for Revolution Slider Migration from 4.x to 5.0   
 * @version: 1.0.2 (20.01.2016)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
 *****************************************************************************************************/
! function(t) {
    var a = jQuery.fn.revolution;
    jQuery.extend(!0, a, {
        migration: function(t, a) {
            return a = o(a), e(t, a), a
        }
    });
    var o = function(t) {
            if (t.parallaxLevels || t.parallaxBgFreeze) {
                var a = new Object;
                a.type = t.parallax, a.levels = t.parallaxLevels, a.bgparallax = "on" == t.parallaxBgFreeze ? "off" : "on", a.disable_onmobile = t.parallaxDisableOnMobile, t.parallax = a
            }
            if (void 0 === t.disableProgressBar && (t.disableProgressBar = t.hideTimerBar || "off"), (t.startwidth || t.startheight) && (t.gridwidth = t.startwidth, t.gridheight = t.startheight), void 0 === t.sliderType && (t.sliderType = "standard"), "on" === t.fullScreen && (t.sliderLayout = "fullscreen"), "on" === t.fullWidth && (t.sliderLayout = "fullwidth"), void 0 === t.sliderLayout && (t.sliderLayout = "auto"), void 0 === t.navigation) {
                var o = new Object;
                if ("solo" == t.navigationArrows || "nextto" == t.navigationArrows) {
                    var e = new Object;
                    e.enable = !0, e.style = t.navigationStyle || "", e.hide_onmobile = "on" === t.hideArrowsOnMobile ? !0 : !1, e.hide_onleave = t.hideThumbs > 0 ? !0 : !1, e.hide_delay = t.hideThumbs > 0 ? t.hideThumbs : 200, e.hide_delay_mobile = t.hideNavDelayOnMobile || 1500, e.hide_under = 0, e.tmp = "", e.left = {
                        h_align: t.soloArrowLeftHalign,
                        v_align: t.soloArrowLeftValign,
                        h_offset: t.soloArrowLeftHOffset,
                        v_offset: t.soloArrowLeftVOffset
                    }, e.right = {
                        h_align: t.soloArrowRightHalign,
                        v_align: t.soloArrowRightValign,
                        h_offset: t.soloArrowRightHOffset,
                        v_offset: t.soloArrowRightVOffset
                    }, o.arrows = e
                }
                if ("bullet" == t.navigationType) {
                    var r = new Object;
                    r.style = t.navigationStyle || "", r.enable = !0, r.hide_onmobile = "on" === t.hideArrowsOnMobile ? !0 : !1, r.hide_onleave = t.hideThumbs > 0 ? !0 : !1, r.hide_delay = t.hideThumbs > 0 ? t.hideThumbs : 200, r.hide_delay_mobile = t.hideNavDelayOnMobile || 1500, r.hide_under = 0, r.direction = "horizontal", r.h_align = t.navigationHAlign || "center", r.v_align = t.navigationVAlign || "bottom", r.space = 5, r.h_offset = t.navigationHOffset || 0, r.v_offset = t.navigationVOffset || 20, r.tmp = '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>', o.bullets = r
                }
                if ("thumb" == t.navigationType) {
                    var i = new Object;
                    i.style = t.navigationStyle || "", i.enable = !0, i.width = t.thumbWidth || 100, i.height = t.thumbHeight || 50, i.min_width = t.thumbWidth || 100, i.wrapper_padding = 2, i.wrapper_color = "#f5f5f5", i.wrapper_opacity = 1, i.visibleAmount = t.thumbAmount || 3, i.hide_onmobile = "on" === t.hideArrowsOnMobile ? !0 : !1, i.hide_onleave = t.hideThumbs > 0 ? !0 : !1, i.hide_delay = t.hideThumbs > 0 ? t.hideThumbs : 200, i.hide_delay_mobile = t.hideNavDelayOnMobile || 1500, i.hide_under = 0, i.direction = "horizontal", i.span = !1, i.position = "inner", i.space = 2, i.h_align = t.navigationHAlign || "center", i.v_align = t.navigationVAlign || "bottom", i.h_offset = t.navigationHOffset || 0, i.v_offset = t.navigationVOffset || 20, i.tmp = '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>', o.thumbnails = i
                }
                t.navigation = o, t.navigation.keyboardNavigation = t.keyboardNavigation || "on", t.navigation.onHoverStop = t.onHoverStop || "on", t.navigation.touch = {
                    touchenabled: t.touchenabled || "on",
                    swipe_treshold: t.swipe_treshold || 75,
                    swipe_min_touches: t.swipe_min_touches || 1,
                    drag_block_vertical: t.drag_block_vertical || !1
                }
            }
            return void 0 == t.fallbacks && (t.fallbacks = {
                isJoomla: t.isJoomla || !1,
                panZoomDisableOnMobile: t.parallaxDisableOnMobile || "off",
                simplifyAll: t.simplifyAll || "on",
                nextSlideOnWindowFocus: t.nextSlideOnWindowFocus || "off",
                disableFocusListener: t.disableFocusListener || !0
            }), t
        },
        e = function(t, a) {
            var o = new Object,
                e = t.width(),
                r = t.height();
            o.skewfromleftshort = "x:-50;skX:85;o:0", o.skewfromrightshort = "x:50;skX:-85;o:0", o.sfl = "x:-50;o:0", o.sfr = "x:50;o:0", o.sft = "y:-50;o:0", o.sfb = "y:50;o:0", o.skewfromleft = "x:top;skX:85;o:0", o.skewfromright = "x:bottom;skX:-85;o:0", o.lfl = "x:top;o:0", o.lfr = "x:bottom;o:0", o.lft = "y:left;o:0", o.lfb = "y:right;o:0", o.fade = "o:0";
            720 * Math.random() - 360;
            t.find(".tp-caption").each(function() {
                var t = jQuery(this),
                    a = (Math.random() * (2 * e) - e, Math.random() * (2 * r) - r, 3 * Math.random(), 720 * Math.random() - 360, 70 * Math.random() - 35, 70 * Math.random() - 35, t.attr("class"));
                o.randomrotate = "x:{-400,400};y:{-400,400};sX:{0,2};sY:{0,2};rZ:{-180,180};rX:{-180,180};rY:{-180,180};o:0;", a.match("randomrotate") ? t.data("transform_in", o.randomrotate) : a.match(/\blfl\b/) ? t.data("transform_in", o.lfl) : a.match(/\blfr\b/) ? t.data("transform_in", o.lfr) : a.match(/\blft\b/) ? t.data("transform_in", o.lft) : a.match(/\blfb\b/) ? t.data("transform_in", o.lfb) : a.match(/\bsfl\b/) ? t.data("transform_in", o.sfl) : a.match(/\bsfr\b/) ? t.data("transform_in", o.sfr) : a.match(/\bsft\b/) ? t.data("transform_in", o.sft) : a.match(/\bsfb\b/) ? t.data("transform_in", o.sfb) : a.match(/\bskewfromleftshort\b/) ? t.data("transform_in", o.skewfromleftshort) : a.match(/\bskewfromrightshort\b/) ? t.data("transform_in", o.skewfromrightshort) : a.match(/\bskewfromleft\b/) ? t.data("transform_in", o.skewfromleft) : a.match(/\bskewfromright\b/) ? t.data("transform_in", o.skewfromright) : a.match(/\bfade\b/) && t.data("transform_in", o.fade), a.match(/\brandomrotateout\b/) ? t.data("transform_out", o.randomrotate) : a.match(/\bltl\b/) ? t.data("transform_out", o.lfl) : a.match(/\bltr\b/) ? t.data("transform_out", o.lfr) : a.match(/\bltt\b/) ? t.data("transform_out", o.lft) : a.match(/\bltb\b/) ? t.data("transform_out", o.lfb) : a.match(/\bstl\b/) ? t.data("transform_out", o.sfl) : a.match(/\bstr\b/) ? t.data("transform_out", o.sfr) : a.match(/\bstt\b/) ? t.data("transform_out", o.sft) : a.match(/\bstb\b/) ? t.data("transform_out", o.sfb) : a.match(/\bskewtoleftshortout\b/) ? t.data("transform_out", o.skewfromleftshort) : a.match(/\bskewtorightshortout\b/) ? t.data("transform_out", o.skewfromrightshort) : a.match(/\bskewtoleftout\b/) ? t.data("transform_out", o.skewfromleft) : a.match(/\bskewtorightout\b/) ? t.data("transform_out", o.skewfromright) : a.match(/\bfadeout\b/) && t.data("transform_out", o.fade), void 0 != t.data("customin") && t.data("transform_in", t.data("customin")), void 0 != t.data("customout") && t.data("transform_out", t.data("customout"))
            })
        }
}(jQuery);

/********************************************
 * REVOLUTION 5.2 EXTENSION - NAVIGATION
 * @version: 1.3.2 (25.10.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 *********************************************/
! function(a) {
    "use strict";
    var b = jQuery.fn.revolution,
        c = b.is_mobile(),
        d = {
            alias: "Navigation Min JS",
            name: "revolution.extensions.navigation.min.js",
            min_core: "5.3",
            version: "1.3.2"
        };
    jQuery.extend(!0, b, {
        hideUnHideNav: function(a) {
            var b = a.c.width(),
                c = a.navigation.arrows,
                d = a.navigation.bullets,
                e = a.navigation.thumbnails,
                f = a.navigation.tabs;
            m(c) && y(a.c.find(".tparrows"), c.hide_under, b, c.hide_over), m(d) && y(a.c.find(".tp-bullets"), d.hide_under, b, d.hide_over), m(e) && y(a.c.parent().find(".tp-thumbs"), e.hide_under, b, e.hide_over), m(f) && y(a.c.parent().find(".tp-tabs"), f.hide_under, b, f.hide_over), x(a)
        },
        resizeThumbsTabs: function(a, b) {
            if (a.navigation && a.navigation.tabs.enable || a.navigation && a.navigation.thumbnails.enable) {
                var c = (jQuery(window).width() - 480) / 500,
                    d = new punchgs.TimelineLite,
                    e = a.navigation.tabs,
                    g = a.navigation.thumbnails,
                    h = a.navigation.bullets;
                if (d.pause(), c = c > 1 ? 1 : c < 0 ? 0 : c, m(e) && (b || e.width > e.min_width) && f(c, d, a.c, e, a.slideamount, "tab"), m(g) && (b || g.width > g.min_width) && f(c, d, a.c, g, a.slideamount, "thumb"), m(h) && b) {
                    var i = a.c.find(".tp-bullets");
                    i.find(".tp-bullet").each(function(a) {
                        var b = jQuery(this),
                            c = a + 1,
                            d = b.outerWidth() + parseInt(void 0 === h.space ? 0 : h.space, 0),
                            e = b.outerHeight() + parseInt(void 0 === h.space ? 0 : h.space, 0);
                        "vertical" === h.direction ? (b.css({
                            top: (c - 1) * e + "px",
                            left: "0px"
                        }), i.css({
                            height: (c - 1) * e + b.outerHeight(),
                            width: b.outerWidth()
                        })) : (b.css({
                            left: (c - 1) * d + "px",
                            top: "0px"
                        }), i.css({
                            width: (c - 1) * d + b.outerWidth(),
                            height: b.outerHeight()
                        }))
                    })
                }
                d.play(), x(a)
            }
            return !0
        },
        updateNavIndexes: function(a) {
            function d(a) {
                c.find(a).lenght > 0 && c.find(a).each(function(a) {
                    jQuery(this).data("liindex", a)
                })
            }
            var c = a.c;
            d(".tp-tab"), d(".tp-bullet"), d(".tp-thumb"), b.resizeThumbsTabs(a, !0), b.manageNavigation(a)
        },
        manageNavigation: function(a) {
            var c = b.getHorizontalOffset(a.c.parent(), "left"),
                d = b.getHorizontalOffset(a.c.parent(), "right");
            m(a.navigation.bullets) && ("fullscreen" != a.sliderLayout && "fullwidth" != a.sliderLayout && (a.navigation.bullets.h_offset_old = void 0 === a.navigation.bullets.h_offset_old ? a.navigation.bullets.h_offset : a.navigation.bullets.h_offset_old, a.navigation.bullets.h_offset = "center" === a.navigation.bullets.h_align ? a.navigation.bullets.h_offset_old + c / 2 - d / 2 : a.navigation.bullets.h_offset_old + c - d), t(a.c.find(".tp-bullets"), a.navigation.bullets, a)), m(a.navigation.thumbnails) && t(a.c.parent().find(".tp-thumbs"), a.navigation.thumbnails, a), m(a.navigation.tabs) && t(a.c.parent().find(".tp-tabs"), a.navigation.tabs, a), m(a.navigation.arrows) && ("fullscreen" != a.sliderLayout && "fullwidth" != a.sliderLayout && (a.navigation.arrows.left.h_offset_old = void 0 === a.navigation.arrows.left.h_offset_old ? a.navigation.arrows.left.h_offset : a.navigation.arrows.left.h_offset_old, a.navigation.arrows.left.h_offset = "right" === a.navigation.arrows.left.h_align ? a.navigation.arrows.left.h_offset_old + d : a.navigation.arrows.left.h_offset_old + c, a.navigation.arrows.right.h_offset_old = void 0 === a.navigation.arrows.right.h_offset_old ? a.navigation.arrows.right.h_offset : a.navigation.arrows.right.h_offset_old, a.navigation.arrows.right.h_offset = "right" === a.navigation.arrows.right.h_align ? a.navigation.arrows.right.h_offset_old + d : a.navigation.arrows.right.h_offset_old + c), t(a.c.find(".tp-leftarrow.tparrows"), a.navigation.arrows.left, a), t(a.c.find(".tp-rightarrow.tparrows"), a.navigation.arrows.right, a)), m(a.navigation.thumbnails) && e(a.c.parent().find(".tp-thumbs"), a.navigation.thumbnails), m(a.navigation.tabs) && e(a.c.parent().find(".tp-tabs"), a.navigation.tabs)
        },
        createNavigation: function(a, f) {
            if ("stop" === b.compare_version(d).check) return !1;
            var g = a.parent(),
                j = f.navigation.arrows,
                n = f.navigation.bullets,
                r = f.navigation.thumbnails,
                s = f.navigation.tabs,
                t = m(j),
                v = m(n),
                x = m(r),
                y = m(s);
            h(a, f), i(a, f), t && q(a, j, f), f.li.each(function(b) {
                var c = jQuery(f.li[f.li.length - 1 - b]),
                    d = jQuery(this);
                v && (f.navigation.bullets.rtl ? u(a, n, c, f) : u(a, n, d, f)), x && (f.navigation.thumbnails.rtl ? w(a, r, c, "tp-thumb", f) : w(a, r, d, "tp-thumb", f)), y && (f.navigation.tabs.rtl ? w(a, s, c, "tp-tab", f) : w(a, s, d, "tp-tab", f))
            }), a.bind("revolution.slide.onafterswap revolution.nextslide.waiting", function() {
                var b = 0 == a.find(".next-revslide").length ? a.find(".active-revslide").data("index") : a.find(".next-revslide").data("index");
                a.find(".tp-bullet").each(function() {
                    var a = jQuery(this);
                    a.data("liref") === b ? a.addClass("selected") : a.removeClass("selected")
                }), g.find(".tp-thumb, .tp-tab").each(function() {
                    var a = jQuery(this);
                    a.data("liref") === b ? (a.addClass("selected"), a.hasClass("tp-tab") ? e(g.find(".tp-tabs"), s) : e(g.find(".tp-thumbs"), r)) : a.removeClass("selected")
                });
                var c = 0,
                    d = !1;
                f.thumbs && jQuery.each(f.thumbs, function(a, e) {
                    c = d === !1 ? a : c, d = e.id === b || a === b || d
                });
                var h = c > 0 ? c - 1 : f.slideamount - 1,
                    i = c + 1 == f.slideamount ? 0 : c + 1;
                if (j.enable === !0) {
                    var k = j.tmp;
                    if (void 0 != f.thumbs[h] && jQuery.each(f.thumbs[h].params, function(a, b) {
                            k = k.replace(b.from, b.to)
                        }), j.left.j.html(k), k = j.tmp, i > f.slideamount) return;
                    jQuery.each(f.thumbs[i].params, function(a, b) {
                        k = k.replace(b.from, b.to)
                    }), j.right.j.html(k), punchgs.TweenLite.set(j.left.j.find(".tp-arr-imgholder"), {
                        backgroundImage: "url(" + f.thumbs[h].src + ")"
                    }), punchgs.TweenLite.set(j.right.j.find(".tp-arr-imgholder"), {
                        backgroundImage: "url(" + f.thumbs[i].src + ")"
                    })
                }
            }), l(j), l(n), l(r), l(s), g.on("mouseenter mousemove", function() {
                g.hasClass("tp-mouseover") || (g.addClass("tp-mouseover"), punchgs.TweenLite.killDelayedCallsTo(p), t && j.hide_onleave && p(g.find(".tparrows"), j, "show"), v && n.hide_onleave && p(g.find(".tp-bullets"), n, "show"), x && r.hide_onleave && p(g.find(".tp-thumbs"), r, "show"), y && s.hide_onleave && p(g.find(".tp-tabs"), s, "show"), c && (g.removeClass("tp-mouseover"), o(a, f)))
            }), g.on("mouseleave", function() {
                g.removeClass("tp-mouseover"), o(a, f)
            }), t && j.hide_onleave && p(g.find(".tparrows"), j, "hide", 0), v && n.hide_onleave && p(g.find(".tp-bullets"), n, "hide", 0), x && r.hide_onleave && p(g.find(".tp-thumbs"), r, "hide", 0), y && s.hide_onleave && p(g.find(".tp-tabs"), s, "hide", 0), x && k(g.find(".tp-thumbs"), f), y && k(g.find(".tp-tabs"), f), "carousel" === f.sliderType && k(a, f, !0), "on" == f.navigation.touch.touchenabled && k(a, f, "swipebased")
        }
    });
    var e = function(a, b) {
            var d = (a.hasClass("tp-thumbs") ? ".tp-thumbs" : ".tp-tabs", a.hasClass("tp-thumbs") ? ".tp-thumb-mask" : ".tp-tab-mask"),
                e = a.hasClass("tp-thumbs") ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                f = a.hasClass("tp-thumbs") ? ".tp-thumb" : ".tp-tab",
                g = a.find(d),
                h = g.find(e),
                i = b.direction,
                j = "vertical" === i ? g.find(f).first().outerHeight(!0) + b.space : g.find(f).first().outerWidth(!0) + b.space,
                k = "vertical" === i ? g.height() : g.width(),
                l = parseInt(g.find(f + ".selected").data("liindex"), 0),
                m = k / j,
                n = "vertical" === i ? g.height() : g.width(),
                o = 0 - l * j,
                p = "vertical" === i ? h.height() : h.width(),
                q = o < 0 - (p - n) ? 0 - (p - n) : q > 0 ? 0 : o,
                r = h.data("offset");
            m > 2 && (q = o - (r + j) <= 0 ? o - (r + j) < 0 - j ? r : q + j : q, q = o - j + r + k < j && o + (Math.round(m) - 2) * j < r ? o + (Math.round(m) - 2) * j : q), q = q < 0 - (p - n) ? 0 - (p - n) : q > 0 ? 0 : q, "vertical" !== i && g.width() >= h.width() && (q = 0), "vertical" === i && g.height() >= h.height() && (q = 0), a.hasClass("dragged") || ("vertical" === i ? h.data("tmmove", punchgs.TweenLite.to(h, .5, {
                top: q + "px",
                ease: punchgs.Power3.easeInOut
            })) : h.data("tmmove", punchgs.TweenLite.to(h, .5, {
                left: q + "px",
                ease: punchgs.Power3.easeInOut
            })), h.data("offset", q))
        },
        f = function(a, b, c, d, e, f) {
            var g = c.parent().find(".tp-" + f + "s"),
                h = g.find(".tp-" + f + "s-inner-wrapper"),
                i = g.find(".tp-" + f + "-mask"),
                j = d.width * a < d.min_width ? d.min_width : Math.round(d.width * a),
                k = Math.round(j / d.width * d.height),
                l = "vertical" === d.direction ? j : j * e + d.space * (e - 1),
                m = "vertical" === d.direction ? k * e + d.space * (e - 1) : k,
                n = "vertical" === d.direction ? {
                    width: j + "px"
                } : {
                    height: k + "px"
                };
            b.add(punchgs.TweenLite.set(g, n)), b.add(punchgs.TweenLite.set(h, {
                width: l + "px",
                height: m + "px"
            })), b.add(punchgs.TweenLite.set(i, {
                width: l + "px",
                height: m + "px"
            }));
            var o = h.find(".tp-" + f);
            return o && jQuery.each(o, function(a, c) {
                "vertical" === d.direction ? b.add(punchgs.TweenLite.set(c, {
                    top: a * (k + parseInt(void 0 === d.space ? 0 : d.space, 0)),
                    width: j + "px",
                    height: k + "px"
                })) : "horizontal" === d.direction && b.add(punchgs.TweenLite.set(c, {
                    left: a * (j + parseInt(void 0 === d.space ? 0 : d.space, 0)),
                    width: j + "px",
                    height: k + "px"
                }))
            }), b
        },
        g = function(a) {
            var b = 0,
                c = 0,
                d = 0,
                e = 0,
                f = 1,
                g = 1,
                h = 1;
            return "detail" in a && (c = a.detail), "wheelDelta" in a && (c = -a.wheelDelta / 120), "wheelDeltaY" in a && (c = -a.wheelDeltaY / 120), "wheelDeltaX" in a && (b = -a.wheelDeltaX / 120), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (b = c, c = 0), d = b * f, e = c * f, "deltaY" in a && (e = a.deltaY), "deltaX" in a && (d = a.deltaX), (d || e) && a.deltaMode && (1 == a.deltaMode ? (d *= g, e *= g) : (d *= h, e *= h)), d && !b && (b = d < 1 ? -1 : 1), e && !c && (c = e < 1 ? -1 : 1), e = navigator.userAgent.match(/mozilla/i) ? 10 * e : e, (e > 300 || e < -300) && (e /= 10), {
                spinX: b,
                spinY: c,
                pixelX: d,
                pixelY: e
            }
        },
        h = function(a, c) {
            "on" === c.navigation.keyboardNavigation && jQuery(document).keydown(function(d) {
                ("horizontal" == c.navigation.keyboard_direction && 39 == d.keyCode || "vertical" == c.navigation.keyboard_direction && 40 == d.keyCode) && (c.sc_indicator = "arrow", c.sc_indicator_dir = 0, b.callingNewSlide(a, 1)), ("horizontal" == c.navigation.keyboard_direction && 37 == d.keyCode || "vertical" == c.navigation.keyboard_direction && 38 == d.keyCode) && (c.sc_indicator = "arrow", c.sc_indicator_dir = 1, b.callingNewSlide(a, -1))
            })
        },
        i = function(a, c) {
            if ("on" === c.navigation.mouseScrollNavigation || "carousel" === c.navigation.mouseScrollNavigation) {
                c.isIEEleven = !!navigator.userAgent.match(/Trident.*rv\:11\./), c.isSafari = !!navigator.userAgent.match(/safari/i), c.ischrome = !!navigator.userAgent.match(/chrome/i);
                var d = c.ischrome ? -49 : c.isIEEleven || c.isSafari ? -9 : navigator.userAgent.match(/mozilla/i) ? -29 : -49,
                    e = c.ischrome ? 49 : c.isIEEleven || c.isSafari ? 9 : navigator.userAgent.match(/mozilla/i) ? 29 : 49;
                a.on("mousewheel DOMMouseScroll", function(f) {
                    var h = g(f.originalEvent),
                        i = a.find(".tp-revslider-slidesli.active-revslide").index(),
                        j = a.find(".tp-revslider-slidesli.processing-revslide").index(),
                        k = i != -1 && 0 == i || j != -1 && 0 == j,
                        l = i != -1 && i == c.slideamount - 1 || 1 != j && j == c.slideamount - 1,
                        m = !0;
                    "carousel" == c.navigation.mouseScrollNavigation && (k = l = !1), j == -1 ? h.pixelY < d ? (k || (c.sc_indicator = "arrow", "reverse" !== c.navigation.mouseScrollReverse && (c.sc_indicator_dir = 1, b.callingNewSlide(a, -1)), m = !1), l || (c.sc_indicator = "arrow", "reverse" === c.navigation.mouseScrollReverse && (c.sc_indicator_dir = 0, b.callingNewSlide(a, 1)), m = !1)) : h.pixelY > e && (l || (c.sc_indicator = "arrow", "reverse" !== c.navigation.mouseScrollReverse && (c.sc_indicator_dir = 0, b.callingNewSlide(a, 1)), m = !1), k || (c.sc_indicator = "arrow", "reverse" === c.navigation.mouseScrollReverse && (c.sc_indicator_dir = 1, b.callingNewSlide(a, -1)), m = !1)) : m = !1;
                    var n = c.c.offset().top - jQuery("body").scrollTop(),
                        o = n + c.c.height();
                    return "carousel" != c.navigation.mouseScrollNavigation ? ("reverse" !== c.navigation.mouseScrollReverse && (n > 0 && h.pixelY > 0 || o < jQuery(window).height() && h.pixelY < 0) && (m = !0), "reverse" === c.navigation.mouseScrollReverse && (n < 0 && h.pixelY < 0 || o > jQuery(window).height() && h.pixelY > 0) && (m = !0)) : m = !1, 0 == m ? (f.preventDefault(f), !1) : void 0
                })
            }
        },
        j = function(a, b, d) {
            return a = c ? jQuery(d.target).closest("." + a).length || jQuery(d.srcElement).closest("." + a).length : jQuery(d.toElement).closest("." + a).length || jQuery(d.originalTarget).closest("." + a).length, a === !0 || 1 === a ? 1 : 0
        },
        k = function(a, d, e) {
            var f = d.carousel;
            jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"), f.Limit = "endless";
            var h = (c || "Firefox" === b.get_browser(), a),
                i = "vertical" === d.navigation.thumbnails.direction || "vertical" === d.navigation.tabs.direction ? "none" : "vertical",
                k = d.navigation.touch.swipe_direction || "horizontal";
            i = "swipebased" == e && "vertical" == k ? "none" : e ? "vertical" : i, jQuery.fn.swipetp || (jQuery.fn.swipetp = jQuery.fn.swipe), jQuery.fn.swipetp.defaults && jQuery.fn.swipetp.defaults.excludedElements || jQuery.fn.swipetp.defaults || (jQuery.fn.swipetp.defaults = new Object), jQuery.fn.swipetp.defaults.excludedElements = "label, button, input, select, textarea, .noSwipe", h.swipetp({
                allowPageScroll: i,
                triggerOnTouchLeave: !0,
                treshold: d.navigation.touch.swipe_treshold,
                fingers: d.navigation.touch.swipe_min_touches,
                excludeElements: jQuery.fn.swipetp.defaults.excludedElements,
                swipeStatus: function(c, e, g, h, i, l, m) {
                    var n = j("rev_slider_wrapper", a, c),
                        o = j("tp-thumbs", a, c),
                        p = j("tp-tabs", a, c),
                        q = jQuery(this).attr("class"),
                        r = !!q.match(/tp-tabs|tp-thumb/gi);
                    if ("carousel" === d.sliderType && (("move" === e || "end" === e || "cancel" == e) && d.dragStartedOverSlider && !d.dragStartedOverThumbs && !d.dragStartedOverTabs || "start" === e && n > 0 && 0 === o && 0 === p)) switch (d.dragStartedOverSlider = !0, h = g && g.match(/left|up/g) ? Math.round(h * -1) : h = Math.round(1 * h), e) {
                        case "start":
                            void 0 !== f.positionanim && (f.positionanim.kill(), f.slide_globaloffset = "off" === f.infinity ? f.slide_offset : b.simp(f.slide_offset, f.maxwidth)), f.overpull = "none", f.wrap.addClass("dragged");
                            break;
                        case "move":
                            if (d.c.find(".tp-withaction").addClass("tp-temporarydisabled"), f.slide_offset = "off" === f.infinity ? f.slide_globaloffset + h : b.simp(f.slide_globaloffset + h, f.maxwidth), "off" === f.infinity) {
                                var s = "center" === f.horizontal_align ? (f.wrapwidth / 2 - f.slide_width / 2 - f.slide_offset) / f.slide_width : (0 - f.slide_offset) / f.slide_width;
                                "none" !== f.overpull && 0 !== f.overpull || !(s < 0 || s > d.slideamount - 1) ? s >= 0 && s <= d.slideamount - 1 && (s >= 0 && h > f.overpull || s <= d.slideamount - 1 && h < f.overpull) && (f.overpull = 0) : f.overpull = h, f.slide_offset = s < 0 ? f.slide_offset + (f.overpull - h) / 1.1 + Math.sqrt(Math.abs((f.overpull - h) / 1.1)) : s > d.slideamount - 1 ? f.slide_offset + (f.overpull - h) / 1.1 - Math.sqrt(Math.abs((f.overpull - h) / 1.1)) : f.slide_offset
                            }
                            b.organiseCarousel(d, g, !0, !0);
                            break;
                        case "end":
                        case "cancel":
                            f.slide_globaloffset = f.slide_offset, f.wrap.removeClass("dragged"), b.carouselToEvalPosition(d, g), d.dragStartedOverSlider = !1, d.dragStartedOverThumbs = !1, d.dragStartedOverTabs = !1, setTimeout(function() {
                                d.c.find(".tp-withaction").removeClass("tp-temporarydisabled")
                            }, 19)
                    } else {
                        if (("move" !== e && "end" !== e && "cancel" != e || d.dragStartedOverSlider || !d.dragStartedOverThumbs && !d.dragStartedOverTabs) && !("start" === e && n > 0 && (o > 0 || p > 0))) {
                            if ("end" == e && !r) {
                                if (d.sc_indicator = "arrow", "horizontal" == k && "left" == g || "vertical" == k && "up" == g) return d.sc_indicator_dir = 0, b.callingNewSlide(d.c, 1), !1;
                                if ("horizontal" == k && "right" == g || "vertical" == k && "down" == g) return d.sc_indicator_dir = 1, b.callingNewSlide(d.c, -1), !1
                            }
                            return d.dragStartedOverSlider = !1, d.dragStartedOverThumbs = !1, d.dragStartedOverTabs = !1, !0
                        }
                        o > 0 && (d.dragStartedOverThumbs = !0), p > 0 && (d.dragStartedOverTabs = !0);
                        var t = d.dragStartedOverThumbs ? ".tp-thumbs" : ".tp-tabs",
                            u = d.dragStartedOverThumbs ? ".tp-thumb-mask" : ".tp-tab-mask",
                            v = d.dragStartedOverThumbs ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                            w = d.dragStartedOverThumbs ? ".tp-thumb" : ".tp-tab",
                            x = d.dragStartedOverThumbs ? d.navigation.thumbnails : d.navigation.tabs;
                        h = g && g.match(/left|up/g) ? Math.round(h * -1) : h = Math.round(1 * h);
                        var y = a.parent().find(u),
                            z = y.find(v),
                            A = x.direction,
                            B = "vertical" === A ? z.height() : z.width(),
                            C = "vertical" === A ? y.height() : y.width(),
                            D = "vertical" === A ? y.find(w).first().outerHeight(!0) + x.space : y.find(w).first().outerWidth(!0) + x.space,
                            E = void 0 === z.data("offset") ? 0 : parseInt(z.data("offset"), 0),
                            F = 0;
                        switch (e) {
                            case "start":
                                a.parent().find(t).addClass("dragged"), E = "vertical" === A ? z.position().top : z.position().left, z.data("offset", E), z.data("tmmove") && z.data("tmmove").pause();
                                break;
                            case "move":
                                if (B <= C) return !1;
                                F = E + h, F = F > 0 ? "horizontal" === A ? F - z.width() * (F / z.width() * F / z.width()) : F - z.height() * (F / z.height() * F / z.height()) : F;
                                var G = "vertical" === A ? 0 - (z.height() - y.height()) : 0 - (z.width() - y.width());
                                F = F < G ? "horizontal" === A ? F + z.width() * (F - G) / z.width() * (F - G) / z.width() : F + z.height() * (F - G) / z.height() * (F - G) / z.height() : F, "vertical" === A ? punchgs.TweenLite.set(z, {
                                    top: F + "px"
                                }) : punchgs.TweenLite.set(z, {
                                    left: F + "px"
                                });
                                break;
                            case "end":
                            case "cancel":
                                if (r) return F = E + h, F = "vertical" === A ? F < 0 - (z.height() - y.height()) ? 0 - (z.height() - y.height()) : F : F < 0 - (z.width() - y.width()) ? 0 - (z.width() - y.width()) : F, F = F > 0 ? 0 : F, F = Math.abs(h) > D / 10 ? h <= 0 ? Math.floor(F / D) * D : Math.ceil(F / D) * D : h < 0 ? Math.ceil(F / D) * D : Math.floor(F / D) * D, F = "vertical" === A ? F < 0 - (z.height() - y.height()) ? 0 - (z.height() - y.height()) : F : F < 0 - (z.width() - y.width()) ? 0 - (z.width() - y.width()) : F, F = F > 0 ? 0 : F, "vertical" === A ? punchgs.TweenLite.to(z, .5, {
                                    top: F + "px",
                                    ease: punchgs.Power3.easeOut
                                }) : punchgs.TweenLite.to(z, .5, {
                                    left: F + "px",
                                    ease: punchgs.Power3.easeOut
                                }), F = F ? F : "vertical" === A ? z.position().top : z.position().left, z.data("offset", F), z.data("distance", h), setTimeout(function() {
                                    d.dragStartedOverSlider = !1, d.dragStartedOverThumbs = !1, d.dragStartedOverTabs = !1
                                }, 100), a.parent().find(t).removeClass("dragged"), !1
                        }
                    }
                }
            })
        },
        l = function(a) {
            a.hide_delay = jQuery.isNumeric(parseInt(a.hide_delay, 0)) ? a.hide_delay / 1e3 : .2, a.hide_delay_mobile = jQuery.isNumeric(parseInt(a.hide_delay_mobile, 0)) ? a.hide_delay_mobile / 1e3 : .2
        },
        m = function(a) {
            return a && a.enable
        },
        n = function(a) {
            return a && a.enable && a.hide_onleave === !0 && (void 0 === a.position || !a.position.match(/outer/g))
        },
        o = function(a, b) {
            var d = a.parent();
            n(b.navigation.arrows) && punchgs.TweenLite.delayedCall(c ? b.navigation.arrows.hide_delay_mobile : b.navigation.arrows.hide_delay, p, [d.find(".tparrows"), b.navigation.arrows, "hide"]), n(b.navigation.bullets) && punchgs.TweenLite.delayedCall(c ? b.navigation.bullets.hide_delay_mobile : b.navigation.bullets.hide_delay, p, [d.find(".tp-bullets"), b.navigation.bullets, "hide"]), n(b.navigation.thumbnails) && punchgs.TweenLite.delayedCall(c ? b.navigation.thumbnails.hide_delay_mobile : b.navigation.thumbnails.hide_delay, p, [d.find(".tp-thumbs"), b.navigation.thumbnails, "hide"]), n(b.navigation.tabs) && punchgs.TweenLite.delayedCall(c ? b.navigation.tabs.hide_delay_mobile : b.navigation.tabs.hide_delay, p, [d.find(".tp-tabs"), b.navigation.tabs, "hide"])
        },
        p = function(a, b, c, d) {
            switch (d = void 0 === d ? .5 : d, c) {
                case "show":
                    punchgs.TweenLite.to(a, d, {
                        autoAlpha: 1,
                        ease: punchgs.Power3.easeInOut,
                        overwrite: "auto"
                    });
                    break;
                case "hide":
                    punchgs.TweenLite.to(a, d, {
                        autoAlpha: 0,
                        ease: punchgs.Power3.easeInOu,
                        overwrite: "auto"
                    })
            }
        },
        q = function(a, b, c) {
            b.style = void 0 === b.style ? "" : b.style, b.left.style = void 0 === b.left.style ? "" : b.left.style, b.right.style = void 0 === b.right.style ? "" : b.right.style, 0 === a.find(".tp-leftarrow.tparrows").length && a.append('<div class="tp-leftarrow tparrows ' + b.style + " " + b.left.style + '">' + b.tmp + "</div>"), 0 === a.find(".tp-rightarrow.tparrows").length && a.append('<div class="tp-rightarrow tparrows ' + b.style + " " + b.right.style + '">' + b.tmp + "</div>");
            var d = a.find(".tp-leftarrow.tparrows"),
                e = a.find(".tp-rightarrow.tparrows");
            b.rtl ? (d.click(function() {
                c.sc_indicator = "arrow", c.sc_indicator_dir = 0, a.revnext()
            }), e.click(function() {
                c.sc_indicator = "arrow", c.sc_indicator_dir = 1, a.revprev()
            })) : (e.click(function() {
                c.sc_indicator = "arrow", c.sc_indicator_dir = 0, a.revnext()
            }), d.click(function() {
                c.sc_indicator = "arrow", c.sc_indicator_dir = 1, a.revprev()
            })), b.right.j = a.find(".tp-rightarrow.tparrows"), b.left.j = a.find(".tp-leftarrow.tparrows"), b.padding_top = parseInt(c.carousel.padding_top || 0, 0), b.padding_bottom = parseInt(c.carousel.padding_bottom || 0, 0), t(d, b.left, c), t(e, b.right, c), b.left.opt = c, b.right.opt = c, "outer-left" != b.position && "outer-right" != b.position || (c.outernav = !0)
        },
        r = function(a, b, c) {
            var d = a.outerHeight(!0),
                f = (a.outerWidth(!0), void 0 == b.opt ? 0 : 0 == c.conh ? c.height : c.conh),
                g = "layergrid" == b.container ? "fullscreen" == c.sliderLayout ? c.height / 2 - c.gridheight[c.curWinRange] * c.bh / 2 : "on" == c.autoHeight || void 0 != c.minHeight && c.minHeight > 0 ? f / 2 - c.gridheight[c.curWinRange] * c.bh / 2 : 0 : 0,
                h = "top" === b.v_align ? {
                    top: "0px",
                    y: Math.round(b.v_offset + g) + "px"
                } : "center" === b.v_align ? {
                    top: "50%",
                    y: Math.round(0 - d / 2 + b.v_offset) + "px"
                } : {
                    top: "100%",
                    y: Math.round(0 - (d + b.v_offset + g)) + "px"
                };
            a.hasClass("outer-bottom") || punchgs.TweenLite.set(a, h)
        },
        s = function(a, b, c) {
            var e = (a.outerHeight(!0), a.outerWidth(!0)),
                f = "layergrid" == b.container ? "carousel" === c.sliderType ? 0 : c.width / 2 - c.gridwidth[c.curWinRange] * c.bw / 2 : 0,
                g = "left" === b.h_align ? {
                    left: "0px",
                    x: Math.round(b.h_offset + f) + "px"
                } : "center" === b.h_align ? {
                    left: "50%",
                    x: Math.round(0 - e / 2 + b.h_offset) + "px"
                } : {
                    left: "100%",
                    x: Math.round(0 - (e + b.h_offset + f)) + "px"
                };
            punchgs.TweenLite.set(a, g)
        },
        t = function(a, b, c) {
            var d = a.closest(".tp-simpleresponsive").length > 0 ? a.closest(".tp-simpleresponsive") : a.closest(".tp-revslider-mainul").length > 0 ? a.closest(".tp-revslider-mainul") : a.closest(".rev_slider_wrapper").length > 0 ? a.closest(".rev_slider_wrapper") : a.parent().find(".tp-revslider-mainul"),
                e = d.width(),
                f = d.height();
            if (r(a, b, c), s(a, b, c), "outer-left" !== b.position || "fullwidth" != b.sliderLayout && "fullscreen" != b.sliderLayout ? "outer-right" !== b.position || "fullwidth" != b.sliderLayout && "fullscreen" != b.sliderLayout || punchgs.TweenLite.set(a, {
                    right: 0 - a.outerWidth() + "px",
                    x: b.h_offset + "px"
                }) : punchgs.TweenLite.set(a, {
                    left: 0 - a.outerWidth() + "px",
                    x: b.h_offset + "px"
                }), a.hasClass("tp-thumbs") || a.hasClass("tp-tabs")) {
                var g = a.data("wr_padding"),
                    h = a.data("maxw"),
                    i = a.data("maxh"),
                    j = a.hasClass("tp-thumbs") ? a.find(".tp-thumb-mask") : a.find(".tp-tab-mask"),
                    k = parseInt(b.padding_top || 0, 0),
                    l = parseInt(b.padding_bottom || 0, 0);
                h > e && "outer-left" !== b.position && "outer-right" !== b.position ? (punchgs.TweenLite.set(a, {
                    left: "0px",
                    x: 0,
                    maxWidth: e - 2 * g + "px"
                }), punchgs.TweenLite.set(j, {
                    maxWidth: e - 2 * g + "px"
                })) : (punchgs.TweenLite.set(a, {
                    maxWidth: h + "px"
                }), punchgs.TweenLite.set(j, {
                    maxWidth: h + "px"
                })), i + 2 * g > f && "outer-bottom" !== b.position && "outer-top" !== b.position ? (punchgs.TweenLite.set(a, {
                    top: "0px",
                    y: 0,
                    maxHeight: k + l + (f - 2 * g) + "px"
                }), punchgs.TweenLite.set(j, {
                    maxHeight: k + l + (f - 2 * g) + "px"
                })) : (punchgs.TweenLite.set(a, {
                    maxHeight: i + "px"
                }), punchgs.TweenLite.set(j, {
                    maxHeight: i + "px"
                })), "outer-left" !== b.position && "outer-right" !== b.position && (k = 0, l = 0), b.span === !0 && "vertical" === b.direction ? (punchgs.TweenLite.set(a, {
                    maxHeight: k + l + (f - 2 * g) + "px",
                    height: k + l + (f - 2 * g) + "px",
                    top: 0 - k,
                    y: 0
                }), r(j, b, c)) : b.span === !0 && "horizontal" === b.direction && (punchgs.TweenLite.set(a, {
                    maxWidth: "100%",
                    width: e - 2 * g + "px",
                    left: 0,
                    x: 0
                }), s(j, b, c))
            }
        },
        u = function(a, b, c, d) {
            0 === a.find(".tp-bullets").length && (b.style = void 0 === b.style ? "" : b.style, a.append('<div class="tp-bullets ' + b.style + " " + b.direction + '"></div>'));
            var e = a.find(".tp-bullets"),
                f = c.data("index"),
                g = b.tmp;
            jQuery.each(d.thumbs[c.index()].params, function(a, b) {
                g = g.replace(b.from, b.to)
            }), e.append('<div class="justaddedbullet tp-bullet">' + g + "</div>");
            var h = a.find(".justaddedbullet"),
                i = a.find(".tp-bullet").length,
                j = h.outerWidth() + parseInt(void 0 === b.space ? 0 : b.space, 0),
                k = h.outerHeight() + parseInt(void 0 === b.space ? 0 : b.space, 0);
            "vertical" === b.direction ? (h.css({
                top: (i - 1) * k + "px",
                left: "0px"
            }), e.css({
                height: (i - 1) * k + h.outerHeight(),
                width: h.outerWidth()
            })) : (h.css({
                left: (i - 1) * j + "px",
                top: "0px"
            }), e.css({
                width: (i - 1) * j + h.outerWidth(),
                height: h.outerHeight()
            })), h.find(".tp-bullet-image").css({
                backgroundImage: "url(" + d.thumbs[c.index()].src + ")"
            }), h.data("liref", f), h.click(function() {
                d.sc_indicator = "bullet", a.revcallslidewithid(f), a.find(".tp-bullet").removeClass("selected"), jQuery(this).addClass("selected")
            }), h.removeClass("justaddedbullet"), b.padding_top = parseInt(d.carousel.padding_top || 0, 0), b.padding_bottom = parseInt(d.carousel.padding_bottom || 0, 0), b.opt = d, "outer-left" != b.position && "outer-right" != b.position || (d.outernav = !0), e.addClass("nav-pos-hor-" + b.h_align), e.addClass("nav-pos-ver-" + b.v_align), e.addClass("nav-dir-" + b.direction), t(e, b, d)
        },
        v = function(a, b) {
            b = parseFloat(b), a = a.replace("#", "");
            var c = parseInt(a.substring(0, 2), 16),
                d = parseInt(a.substring(2, 4), 16),
                e = parseInt(a.substring(4, 6), 16),
                f = "rgba(" + c + "," + d + "," + e + "," + b + ")";
            return f
        },
        w = function(a, b, c, d, e) {
            var f = "tp-thumb" === d ? ".tp-thumbs" : ".tp-tabs",
                g = "tp-thumb" === d ? ".tp-thumb-mask" : ".tp-tab-mask",
                h = "tp-thumb" === d ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                i = "tp-thumb" === d ? ".tp-thumb" : ".tp-tab",
                j = "tp-thumb" === d ? ".tp-thumb-image" : ".tp-tab-image";
            if (b.visibleAmount = b.visibleAmount > e.slideamount ? e.slideamount : b.visibleAmount, b.sliderLayout = e.sliderLayout, 0 === a.parent().find(f).length) {
                b.style = void 0 === b.style ? "" : b.style;
                var k = b.span === !0 ? "tp-span-wrapper" : "",
                    l = '<div class="' + d + "s " + k + " " + b.position + " " + b.style + '"><div class="' + d + '-mask"><div class="' + d + 's-inner-wrapper" style="position:relative;"></div></div></div>';
                "outer-top" === b.position ? a.parent().prepend(l) : "outer-bottom" === b.position ? a.after(l) : a.append(l), b.padding_top = parseInt(e.carousel.padding_top || 0, 0), b.padding_bottom = parseInt(e.carousel.padding_bottom || 0, 0), "outer-left" != b.position && "outer-right" != b.position || (e.outernav = !0)
            }
            var m = c.data("index"),
                n = a.parent().find(f),
                o = n.find(g),
                p = o.find(h),
                q = "horizontal" === b.direction ? b.width * b.visibleAmount + b.space * (b.visibleAmount - 1) : b.width,
                r = "horizontal" === b.direction ? b.height : b.height * b.visibleAmount + b.space * (b.visibleAmount - 1),
                s = b.tmp;
            jQuery.each(e.thumbs[c.index()].params, function(a, b) {
                s = s.replace(b.from, b.to)
            }), p.append('<div data-liindex="' + c.index() + '" data-liref="' + m + '" class="justaddedthumb ' + d + '" style="width:' + b.width + "px;height:" + b.height + 'px;">' + s + "</div>");
            var u = n.find(".justaddedthumb"),
                w = n.find(i).length,
                x = u.outerWidth() + parseInt(void 0 === b.space ? 0 : b.space, 0),
                y = u.outerHeight() + parseInt(void 0 === b.space ? 0 : b.space, 0);
            u.find(j).css({
                backgroundImage: "url(" + e.thumbs[c.index()].src + ")"
            }), "vertical" === b.direction ? (u.css({
                top: (w - 1) * y + "px",
                left: "0px"
            }), p.css({
                height: (w - 1) * y + u.outerHeight(),
                width: u.outerWidth()
            })) : (u.css({
                left: (w - 1) * x + "px",
                top: "0px"
            }), p.css({
                width: (w - 1) * x + u.outerWidth(),
                height: u.outerHeight()
            })), n.data("maxw", q), n.data("maxh", r), n.data("wr_padding", b.wrapper_padding);
            var z = "outer-top" === b.position || "outer-bottom" === b.position ? "relative" : "absolute";
            "outer-top" !== b.position && "outer-bottom" !== b.position || "center" !== b.h_align ? "0" : "auto";
            o.css({
                maxWidth: q + "px",
                maxHeight: r + "px",
                overflow: "hidden",
                position: "relative"
            }), n.css({
                maxWidth: q + "px",
                maxHeight: r + "px",
                overflow: "visible",
                position: z,
                background: v(b.wrapper_color, b.wrapper_opacity),
                padding: b.wrapper_padding + "px",
                boxSizing: "contet-box"
            }), u.click(function() {
                e.sc_indicator = "bullet";
                var b = a.parent().find(h).data("distance");
                b = void 0 === b ? 0 : b, Math.abs(b) < 10 && (a.revcallslidewithid(m), a.parent().find(f).removeClass("selected"), jQuery(this).addClass("selected"))
            }), u.removeClass("justaddedthumb"), b.opt = e, n.addClass("nav-pos-hor-" + b.h_align), n.addClass("nav-pos-ver-" + b.v_align), n.addClass("nav-dir-" + b.direction), t(n, b, e)
        },
        x = function(a) {
            var b = a.c.parent().find(".outer-top"),
                c = a.c.parent().find(".outer-bottom");
            a.top_outer = b.hasClass("tp-forcenotvisible") ? 0 : b.outerHeight() || 0, a.bottom_outer = c.hasClass("tp-forcenotvisible") ? 0 : c.outerHeight() || 0
        },
        y = function(a, b, c, d) {
            b > c || c > d ? a.addClass("tp-forcenotvisible") : a.removeClass("tp-forcenotvisible")
        }
}(jQuery);

/********************************************
 * REVOLUTION 5.2.6 EXTENSION - PARALLAX
 * @version: 2.2.0 (16.11.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 *********************************************/
! function(a) {
    "use strict";

    function e(a, b) {
        a.lastscrolltop = b
    }
    var b = jQuery.fn.revolution,
        c = b.is_mobile(),
        d = {
            alias: "Parallax Min JS",
            name: "revolution.extensions.parallax.min.js",
            min_core: "5.3",
            version: "2.2.0"
        };
    jQuery.extend(!0, b, {
        checkForParallax: function(a, e) {
            function g(a) {
                if ("3D" == f.type || "3d" == f.type) {
                    a.find(".slotholder").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>'), a.find(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layer" style="width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:5;overflow:' + f.ddd_layer_overflow + ';"></div>'), a.find(".rs-parallaxlevel-tobggroup").closest(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');
                    var b = a.find(".dddwrapper"),
                        c = a.find(".dddwrapper-layer"),
                        d = a.find(".dddwrapper-layertobggroup");
                    d.appendTo(b), "carousel" == e.sliderType && ("on" == f.ddd_shadow && b.addClass("dddwrappershadow"), punchgs.TweenLite.set(b, {
                        borderRadius: e.carousel.border_radius
                    })), punchgs.TweenLite.set(a, {
                        overflow: "visible",
                        transformStyle: "preserve-3d",
                        perspective: 1600
                    }), punchgs.TweenLite.set(b, {
                        force3D: "auto",
                        transformOrigin: "50% 50%"
                    }), punchgs.TweenLite.set(c, {
                        force3D: "auto",
                        transformOrigin: "50% 50%",
                        zIndex: 5
                    }), punchgs.TweenLite.set(e.ul, {
                        transformStyle: "preserve-3d",
                        transformPerspective: 1600
                    })
                }
            }
            if ("stop" === b.compare_version(d).check) return !1;
            var f = e.parallax;
            if (!f.done) {
                if (f.done = !0, c && "on" == f.disable_onmobile) return !1;
                "3D" != f.type && "3d" != f.type || (punchgs.TweenLite.set(e.c, {
                    overflow: f.ddd_overflow
                }), punchgs.TweenLite.set(e.ul, {
                    overflow: f.ddd_overflow
                }), "carousel" != e.sliderType && "on" == f.ddd_shadow && (e.c.prepend('<div class="dddwrappershadow"></div>'), punchgs.TweenLite.set(e.c.find(".dddwrappershadow"), {
                    force3D: "auto",
                    transformPerspective: 1600,
                    transformOrigin: "50% 50%",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 0
                }))), e.li.each(function() {
                    g(jQuery(this))
                }), ("3D" == f.type || "3d" == f.type) && e.c.find(".tp-static-layers").length > 0 && (punchgs.TweenLite.set(e.c.find(".tp-static-layers"), {
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }), g(e.c.find(".tp-static-layers"))), f.pcontainers = new Array, f.pcontainer_depths = new Array, f.bgcontainers = new Array, f.bgcontainer_depths = new Array, e.c.find(".tp-revslider-slidesli .slotholder, .tp-revslider-slidesli .rs-background-video-layer").each(function() {
                    var a = jQuery(this),
                        b = a.data("bgparallax") || e.parallax.bgparallax;
                    b = "on" == b ? 1 : b, void 0 !== b && "off" !== b && (f.bgcontainers.push(a), f.bgcontainer_depths.push(e.parallax.levels[parseInt(b, 0) - 1] / 100))
                });
                for (var h = 1; h <= f.levels.length; h++) e.c.find(".rs-parallaxlevel-" + h).each(function() {
                    var a = jQuery(this),
                        b = a.closest(".tp-parallax-wrap");
                    b.data("parallaxlevel", f.levels[h - 1]), b.addClass("tp-parallax-container"), f.pcontainers.push(b), f.pcontainer_depths.push(f.levels[h - 1])
                });
                "mouse" != f.type && "scroll+mouse" != f.type && "mouse+scroll" != f.type && "3D" != f.type && "3d" != f.type || (a.mouseenter(function(b) {
                    var c = a.find(".active-revslide"),
                        d = a.offset().top,
                        e = a.offset().left,
                        f = b.pageX - e,
                        g = b.pageY - d;
                    c.data("enterx", f), c.data("entery", g)
                }), a.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath", function(b, c) {
                    var d = c && c.li ? c.li : a.find(".active-revslide");
                    if ("enterpoint" == f.origo) {
                        var g = a.offset().top,
                            h = a.offset().left;
                        void 0 == d.data("enterx") && d.data("enterx", b.pageX - h), void 0 == d.data("entery") && d.data("entery", b.pageY - g);
                        var i = d.data("enterx") || b.pageX - h,
                            j = d.data("entery") || b.pageY - g,
                            k = i - (b.pageX - h),
                            l = j - (b.pageY - g),
                            m = f.speed / 1e3 || .4
                    } else var g = a.offset().top,
                        h = a.offset().left,
                        k = e.conw / 2 - (b.pageX - h),
                        l = e.conh / 2 - (b.pageY - g),
                        m = f.speed / 1e3 || 3;
                    "mouseleave" == b.type && (k = f.ddd_lasth || 0, l = f.ddd_lastv || 0, m = 1.5);
                    for (var n = 0; n < f.pcontainers.length; n++) {
                        var o = f.pcontainers[n],
                            p = f.pcontainer_depths[n],
                            q = "3D" == f.type || "3d" == f.type ? p / 200 : p / 100,
                            r = k * q,
                            s = l * q;
                        "scroll+mouse" == f.type || "mouse+scroll" == f.type ? punchgs.TweenLite.to(o, m, {
                            force3D: "auto",
                            x: r,
                            ease: punchgs.Power3.easeOut,
                            overwrite: "all"
                        }) : punchgs.TweenLite.to(o, m, {
                            force3D: "auto",
                            x: r,
                            y: s,
                            ease: punchgs.Power3.easeOut,
                            overwrite: "all"
                        })
                    }
                    if ("3D" == f.type || "3d" == f.type) {
                        var t = ".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer";
                        "carousel" === e.sliderType && (t = ".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer"), e.c.find(t).each(function() {
                            var a = jQuery(this),
                                c = f.levels[f.levels.length - 1] / 200,
                                d = k * c,
                                g = l * c,
                                h = 0 == e.conw ? 0 : Math.round(k / e.conw * c * 100) || 0,
                                i = 0 == e.conh ? 0 : Math.round(l / e.conh * c * 100) || 0,
                                j = a.closest("li"),
                                n = 0,
                                o = !1;
                            a.hasClass("dddwrapper-layer") && (n = f.ddd_z_correction || 65, o = !0), a.hasClass("dddwrapper-layer") && (d = 0, g = 0), j.hasClass("active-revslide") || "carousel" != e.sliderType ? "on" != f.ddd_bgfreeze || o ? punchgs.TweenLite.to(a, m, {
                                rotationX: i,
                                rotationY: -h,
                                x: d,
                                z: n,
                                y: g,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }) : punchgs.TweenLite.to(a, .5, {
                                force3D: "auto",
                                rotationY: 0,
                                rotationX: 0,
                                z: 0,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }) : punchgs.TweenLite.to(a, .5, {
                                force3D: "auto",
                                rotationY: 0,
                                x: 0,
                                y: 0,
                                rotationX: 0,
                                z: 0,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }), "mouseleave" == b.type && punchgs.TweenLite.to(jQuery(this), 3.8, {
                                z: 0,
                                ease: punchgs.Power3.easeOut
                            })
                        })
                    }
                }), c && (window.ondeviceorientation = function(b) {
                    var c = Math.round(b.beta || 0) - 70,
                        d = Math.round(b.gamma || 0),
                        g = a.find(".active-revslide");
                    if (jQuery(window).width() > jQuery(window).height()) {
                        var h = d;
                        d = c, c = h
                    }
                    var i = a.width(),
                        j = a.height(),
                        k = 360 / i * d,
                        l = 180 / j * c,
                        m = f.speed / 1e3 || 3,
                        n = [];
                    if (g.find(".tp-parallax-container").each(function(a) {
                            n.push(jQuery(this))
                        }), a.find(".tp-static-layers .tp-parallax-container").each(function() {
                            n.push(jQuery(this))
                        }), jQuery.each(n, function() {
                            var a = jQuery(this),
                                b = parseInt(a.data("parallaxlevel"), 0),
                                c = b / 100,
                                d = k * c * 2,
                                e = l * c * 4;
                            punchgs.TweenLite.to(a, m, {
                                force3D: "auto",
                                x: d,
                                y: e,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            })
                        }), "3D" == f.type || "3d" == f.type) {
                        var o = ".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer";
                        "carousel" === e.sliderType && (o = ".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer"), e.c.find(o).each(function() {
                            var a = jQuery(this),
                                c = f.levels[f.levels.length - 1] / 200,
                                d = k * c,
                                g = l * c * 3,
                                h = 0 == e.conw ? 0 : Math.round(k / e.conw * c * 500) || 0,
                                i = 0 == e.conh ? 0 : Math.round(l / e.conh * c * 700) || 0,
                                j = a.closest("li"),
                                n = 0,
                                o = !1;
                            a.hasClass("dddwrapper-layer") && (n = f.ddd_z_correction || 65, o = !0), a.hasClass("dddwrapper-layer") && (d = 0, g = 0), j.hasClass("active-revslide") || "carousel" != e.sliderType ? "on" != f.ddd_bgfreeze || o ? punchgs.TweenLite.to(a, m, {
                                rotationX: i,
                                rotationY: -h,
                                x: d,
                                z: n,
                                y: g,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }) : punchgs.TweenLite.to(a, .5, {
                                force3D: "auto",
                                rotationY: 0,
                                rotationX: 0,
                                z: 0,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }) : punchgs.TweenLite.to(a, .5, {
                                force3D: "auto",
                                rotationY: 0,
                                z: 0,
                                x: 0,
                                y: 0,
                                rotationX: 0,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }), "mouseleave" == b.type && punchgs.TweenLite.to(jQuery(this), 3.8, {
                                z: 0,
                                ease: punchgs.Power3.easeOut
                            })
                        })
                    }
                }));
                var i = e.scrolleffect;
                if (i.bgs = new Array, i.on) {
                    if ("on" === i.on_slidebg)
                        for (var h = 0; h < e.allslotholder.length; h++) i.bgs.push(e.allslotholder[h]);
                    i.multiplicator_layers = parseFloat(i.multiplicator_layers), i.multiplicator = parseFloat(i.multiplicator)
                }
                void 0 !== i.layers && 0 === i.layers.length && (i.layers = !1), void 0 !== i.bgs && 0 === i.bgs.length && (i.bgs = !1), b.scrollTicker(e, a)
            }
        },
        scrollTicker: function(a, d) {
            1 != a.scrollTicker && (a.scrollTicker = !0, c ? (punchgs.TweenLite.ticker.fps(150), punchgs.TweenLite.ticker.addEventListener("tick", function() {
                b.scrollHandling(a)
            }, d, !1, 1)) : document.addEventListener("scroll", function(c) {
                b.scrollHandling(a, !0)
            }, {
                passive: !0
            })), b.scrollHandling(a, !0)
        },
        scrollHandling: function(a, d) {
            if (a.lastwindowheight = a.lastwindowheight || window.innerHeight, a.conh = 0 === a.conh || void 0 === a.conh ? a.infullscreenmode ? a.minHeight : a.c.height() : a.conh, a.lastscrolltop == window.scrollY && !a.duringslidechange && !d) return !1;
            punchgs.TweenLite.delayedCall(.2, e, [a, window.scrollY]);
            var f = a.c[0].getBoundingClientRect(),
                g = a.viewPort,
                h = a.parallax,
                i = f.top < 0 || f.height > a.lastwindowheight ? f.top / f.height : f.bottom > a.lastwindowheight ? (f.bottom - a.lastwindowheight) / f.height : 0;
            if (a.scrollproc = i, b.callBackHandling && b.callBackHandling(a, "parallax", "start"), g.enable) {
                var j = 1 - Math.abs(i);
                j = j < 0 ? 0 : j, jQuery.isNumeric(g.visible_area) || g.visible_area.indexOf("%") !== -1 && (g.visible_area = parseInt(g.visible_area) / 100), 1 - g.visible_area <= j ? a.inviewport || (a.inviewport = !0, b.enterInViewPort(a)) : a.inviewport && (a.inviewport = !1, b.leaveViewPort(a))
            }
            if (c && "on" == h.disable_onmobile) return !1;
            if ("3d" != h.type && "3D" != h.type) {
                if (("scroll" == h.type || "scroll+mouse" == h.type || "mouse+scroll" == h.type) && h.pcontainers)
                    for (var k = 0; k < h.pcontainers.length; k++)
                        if (h.pcontainers[k].length > 0) {
                            var l = h.pcontainers[k],
                                m = h.pcontainer_depths[k] / 100,
                                n = Math.round(i * -(m * a.conh) * 10) / 10 || 0;
                            l.data("parallaxoffset", n), punchgs.TweenLite.set(l, {
                                overwrite: "auto",
                                force3D: "auto",
                                y: n
                            })
                        }
                if (h.bgcontainers)
                    for (var k = 0; k < h.bgcontainers.length; k++) {
                        var o = h.bgcontainers[k],
                            p = h.bgcontainer_depths[k],
                            n = i * -(p * a.conh) || 0;
                        punchgs.TweenLite.set(o, {
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            backfaceVisibility: "hidden",
                            force3D: "true",
                            y: n + "px"
                        })
                    }
            }
            var q = a.scrolleffect;
            if (q.on && ("on" !== q.disable_on_mobile || !c)) {
                var r = Math.abs(i) - q.tilt / 100;
                if (r = r < 0 ? 0 : r, q.layers !== !1) {
                    var s = 1 - r * q.multiplicator_layers,
                        t = {
                            backfaceVisibility: "hidden",
                            force3D: "true"
                        };
                    if ("top" == q.direction && i >= 0 && (s = 1), "bottom" == q.direction && i <= 0 && (s = 1), s = s > 1 ? 1 : s < 0 ? 0 : s, "on" === q.fade && (t.opacity = s), "on" === q.blur) {
                        var u = (1 - s) * q.maxblur;
                        t["-webkit-filter"] = "blur(" + u + "px)", t.filter = "blur(" + u + "px)"
                    }
                    if ("on" === q.grayscale) {
                        var v = 100 * (1 - s),
                            w = "grayscale(" + v + "%)";
                        t["-webkit-filter"] = void 0 === t["-webkit-filter"] ? w : t["-webkit-filter"] + " " + w, t.filter = void 0 === t.filter ? w : t.filter + " " + w
                    }
                    punchgs.TweenLite.set(q.layers, t)
                }
                if (q.bgs !== !1) {
                    var s = 1 - r * q.multiplicator,
                        t = {
                            backfaceVisibility: "hidden",
                            force3D: "true"
                        };
                    if ("top" == q.direction && i >= 0 && (s = 1), "bottom" == q.direction && i <= 0 && (s = 1), s = s > 1 ? 1 : s < 0 ? 0 : s, "on" === q.fade && (t.opacity = s), "on" === q.blur) {
                        var u = (1 - s) * q.maxblur;
                        t["-webkit-filter"] = "blur(" + u + "px)", t.filter = "blur(" + u + "px)"
                    }
                    if ("on" === q.grayscale) {
                        var v = 100 * (1 - s),
                            w = "grayscale(" + v + "%)";
                        t["-webkit-filter"] = void 0 === t["-webkit-filter"] ? w : t["-webkit-filter"] + " " + w, t.filter = void 0 === t.filter ? w : t.filter + " " + w
                    }
                    punchgs.TweenLite.set(q.bgs, t)
                }
            }
            b.callBackHandling && b.callBackHandling(a, "parallax", "end")
        }
    })
}(jQuery);

/************************************************
 * REVOLUTION 5.3 EXTENSION - SLIDE ANIMATIONS
 * @version: 1.6 (17.11.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 ************************************************/
! function(a) {
    "use strict";
    var b = jQuery.fn.revolution,
        c = {
            alias: "SlideAnimations Min JS",
            name: "revolution.extensions.slideanims.min.js",
            min_core: "5.0",
            version: "1.6"
        };
    jQuery.extend(!0, b, {
        animateSlide: function(a, d, e, f, h, i, j, k) {
            return "stop" === b.compare_version(c).check ? k : g(a, d, e, f, h, i, j, k)
        }
    });
    var d = function(a, c, d, e) {
            var f = a,
                g = f.find(".defaultimg"),
                h = g.data("mediafilter"),
                i = f.data("zoomstart"),
                j = f.data("rotationstart");
            void 0 != g.data("currotate") && (j = g.data("currotate")), void 0 != g.data("curscale") && "box" == e ? i = 100 * g.data("curscale") : void 0 != g.data("curscale") && (i = g.data("curscale")), b.slotSize(g, c);
            var k = g.attr("src"),
                l = g.css("backgroundColor"),
                m = c.width,
                n = c.height,
                o = g.data("fxof"),
                p = 0;
            "on" == c.autoHeight && (n = c.c.height()), void 0 == o && (o = 0);
            var q = 0,
                r = g.data("bgfit"),
                s = g.data("bgrepeat"),
                t = g.data("bgposition");
            switch (void 0 == r && (r = "cover"), void 0 == s && (s = "no-repeat"), void 0 == t && (t = "center center"), e) {
                case "box":
                    for (var u = 0, v = 0, w = 0; w < c.slots; w++) {
                        v = 0;
                        for (var x = 0; x < c.slots; x++) f.append('<div class="slot" style="position:absolute;top:' + (p + v) + "px;left:" + (o + u) + "px;width:" + c.slotw + "px;height:" + c.sloth + 'px;overflow:hidden;"><div class="slotslide ' + h + '" data-x="' + u + '" data-y="' + v + '" style="position:absolute;top:0px;left:0px;width:' + c.slotw + "px;height:" + c.sloth + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - v) + "px;left:" + (0 - u) + "px;width:" + m + "px;height:" + n + "px;background-color:" + l + ";background-image:url(" + k + ");background-repeat:" + s + ";background-size:" + r + ";background-position:" + t + ';"></div></div></div>'), v += c.sloth, void 0 != i && void 0 != j && punchgs.TweenLite.set(f.find(".slot").last(), {
                            rotationZ: j
                        });
                        u += c.slotw
                    }
                    break;
                case "vertical":
                case "horizontal":
                    if ("horizontal" == e) {
                        if (!d) var q = 0 - c.slotw;
                        for (var x = 0; x < c.slots; x++) f.append('<div class="slot" style="position:absolute;top:' + (0 + p) + "px;left:" + (o + x * c.slotw) + "px;overflow:hidden;width:" + (c.slotw + .3) + "px;height:" + n + 'px"><div class="slotslide ' + h + '" style="position:absolute;top:0px;left:' + q + "px;width:" + (c.slotw + .6) + "px;height:" + n + 'px;overflow:hidden;"><div style="background-color:' + l + ";position:absolute;top:0px;left:" + (0 - x * c.slotw) + "px;width:" + m + "px;height:" + n + "px;background-image:url(" + k + ");background-repeat:" + s + ";background-size:" + r + ";background-position:" + t + ';"></div></div></div>'), void 0 != i && void 0 != j && punchgs.TweenLite.set(f.find(".slot").last(), {
                            rotationZ: j
                        })
                    } else {
                        if (!d) var q = 0 - c.sloth;
                        for (var x = 0; x < c.slots + 2; x++) f.append('<div class="slot" style="position:absolute;top:' + (p + x * c.sloth) + "px;left:" + o + "px;overflow:hidden;width:" + m + "px;height:" + c.sloth + 'px"><div class="slotslide ' + h + '" style="position:absolute;top:' + q + "px;left:0px;width:" + m + "px;height:" + c.sloth + 'px;overflow:hidden;"><div style="background-color:' + l + ";position:absolute;top:" + (0 - x * c.sloth) + "px;left:0px;width:" + m + "px;height:" + n + "px;background-image:url(" + k + ");background-repeat:" + s + ";background-size:" + r + ";background-position:" + t + ';"></div></div></div>'), void 0 != i && void 0 != j && punchgs.TweenLite.set(f.find(".slot").last(), {
                            rotationZ: j
                        })
                    }
            }
        },
        e = function(a, b, c, d) {
            function y() {
                jQuery.each(v, function(a, c) {
                    c[0] != b && c[8] != b || (q = c[1], r = c[2], s = t), t += 1
                })
            }
            var e = a[0].opt,
                f = punchgs.Power1.easeIn,
                g = punchgs.Power1.easeOut,
                h = punchgs.Power1.easeInOut,
                i = punchgs.Power2.easeIn,
                j = punchgs.Power2.easeOut,
                k = punchgs.Power2.easeInOut,
                m = (punchgs.Power3.easeIn, punchgs.Power3.easeOut),
                n = punchgs.Power3.easeInOut,
                o = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
                p = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27],
                q = 0,
                r = 1,
                s = 0,
                t = 0,
                v = (new Array, [
                    ["boxslide", 0, 1, 10, 0, "box", !1, null, 0, g, g, 500, 6],
                    ["boxfade", 1, 0, 10, 0, "box", !1, null, 1, h, h, 700, 5],
                    ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", !0, !1, 2, k, k, 700, 3],
                    ["slotslide-vertical", 3, 0, 0, 200, "vertical", !0, !1, 3, k, k, 700, 3],
                    ["curtain-1", 4, 3, 0, 0, "horizontal", !0, !0, 4, g, g, 300, 5],
                    ["curtain-2", 5, 3, 0, 0, "horizontal", !0, !0, 5, g, g, 300, 5],
                    ["curtain-3", 6, 3, 25, 0, "horizontal", !0, !0, 6, g, g, 300, 5],
                    ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", !0, !0, 7, g, g, 300, 7],
                    ["slotzoom-vertical", 8, 0, 0, 0, "vertical", !0, !0, 8, j, j, 500, 8],
                    ["slotfade-horizontal", 9, 0, 0, 1e3, "horizontal", !0, null, 9, j, j, 2e3, 10],
                    ["slotfade-vertical", 10, 0, 0, 1e3, "vertical", !0, null, 10, j, j, 2e3, 10],
                    ["fade", 11, 0, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1],
                    ["crossfade", 11, 1, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1],
                    ["fadethroughdark", 11, 2, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1],
                    ["fadethroughlight", 11, 3, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1],
                    ["fadethroughtransparent", 11, 4, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1],
                    ["slideleft", 12, 0, 1, 0, "horizontal", !0, !0, 12, n, n, 1e3, 1],
                    ["slideup", 13, 0, 1, 0, "horizontal", !0, !0, 13, n, n, 1e3, 1],
                    ["slidedown", 14, 0, 1, 0, "horizontal", !0, !0, 14, n, n, 1e3, 1],
                    ["slideright", 15, 0, 1, 0, "horizontal", !0, !0, 15, n, n, 1e3, 1],
                    ["slideoverleft", 12, 7, 1, 0, "horizontal", !0, !0, 12, n, n, 1e3, 1],
                    ["slideoverup", 13, 7, 1, 0, "horizontal", !0, !0, 13, n, n, 1e3, 1],
                    ["slideoverdown", 14, 7, 1, 0, "horizontal", !0, !0, 14, n, n, 1e3, 1],
                    ["slideoverright", 15, 7, 1, 0, "horizontal", !0, !0, 15, n, n, 1e3, 1],
                    ["slideremoveleft", 12, 8, 1, 0, "horizontal", !0, !0, 12, n, n, 1e3, 1],
                    ["slideremoveup", 13, 8, 1, 0, "horizontal", !0, !0, 13, n, n, 1e3, 1],
                    ["slideremovedown", 14, 8, 1, 0, "horizontal", !0, !0, 14, n, n, 1e3, 1],
                    ["slideremoveright", 15, 8, 1, 0, "horizontal", !0, !0, 15, n, n, 1e3, 1],
                    ["papercut", 16, 0, 0, 600, "", null, null, 16, n, n, 1e3, 2],
                    ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", !1, !0, 17, h, h, 500, 7],
                    ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", !1, !0, 18, h, h, 500, 5],
                    ["cubic", 19, 0, 20, 600, "horizontal", !1, !0, 19, n, n, 500, 1],
                    ["cube", 19, 0, 20, 600, "horizontal", !1, !0, 20, n, n, 500, 1],
                    ["flyin", 20, 0, 4, 600, "vertical", !1, !0, 21, m, n, 500, 1],
                    ["turnoff", 21, 0, 1, 500, "horizontal", !1, !0, 22, n, n, 500, 1],
                    ["incube", 22, 0, 20, 200, "horizontal", !1, !0, 23, k, k, 500, 1],
                    ["cubic-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 24, j, j, 500, 1],
                    ["cube-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 25, j, j, 500, 1],
                    ["incube-horizontal", 24, 0, 20, 500, "vertical", !1, !0, 26, k, k, 500, 1],
                    ["turnoff-vertical", 25, 0, 1, 200, "horizontal", !1, !0, 27, k, k, 500, 1],
                    ["fadefromright", 14, 1, 1, 0, "horizontal", !0, !0, 28, k, k, 1e3, 1],
                    ["fadefromleft", 15, 1, 1, 0, "horizontal", !0, !0, 29, k, k, 1e3, 1],
                    ["fadefromtop", 14, 1, 1, 0, "horizontal", !0, !0, 30, k, k, 1e3, 1],
                    ["fadefrombottom", 13, 1, 1, 0, "horizontal", !0, !0, 31, k, k, 1e3, 1],
                    ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", !0, !0, 32, k, k, 1e3, 1],
                    ["fadetorightfadefromleft", 15, 2, 1, 0, "horizontal", !0, !0, 33, k, k, 1e3, 1],
                    ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", !0, !0, 34, k, k, 1e3, 1],
                    ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", !0, !0, 35, k, k, 1e3, 1],
                    ["parallaxtoright", 15, 3, 1, 0, "horizontal", !0, !0, 36, k, i, 1500, 1],
                    ["parallaxtoleft", 12, 3, 1, 0, "horizontal", !0, !0, 37, k, i, 1500, 1],
                    ["parallaxtotop", 14, 3, 1, 0, "horizontal", !0, !0, 38, k, f, 1500, 1],
                    ["parallaxtobottom", 13, 3, 1, 0, "horizontal", !0, !0, 39, k, f, 1500, 1],
                    ["scaledownfromright", 12, 4, 1, 0, "horizontal", !0, !0, 40, k, i, 1e3, 1],
                    ["scaledownfromleft", 15, 4, 1, 0, "horizontal", !0, !0, 41, k, i, 1e3, 1],
                    ["scaledownfromtop", 14, 4, 1, 0, "horizontal", !0, !0, 42, k, i, 1e3, 1],
                    ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", !0, !0, 43, k, i, 1e3, 1],
                    ["zoomout", 13, 5, 1, 0, "horizontal", !0, !0, 44, k, i, 1e3, 1],
                    ["zoomin", 13, 6, 1, 0, "horizontal", !0, !0, 45, k, i, 1e3, 1],
                    ["slidingoverlayup", 27, 0, 1, 0, "horizontal", !0, !0, 47, h, g, 2e3, 1],
                    ["slidingoverlaydown", 28, 0, 1, 0, "horizontal", !0, !0, 48, h, g, 2e3, 1],
                    ["slidingoverlayright", 30, 0, 1, 0, "horizontal", !0, !0, 49, h, g, 2e3, 1],
                    ["slidingoverlayleft", 29, 0, 1, 0, "horizontal", !0, !0, 50, h, g, 2e3, 1],
                    ["parallaxcirclesup", 31, 0, 1, 0, "horizontal", !0, !0, 51, k, f, 1500, 1],
                    ["parallaxcirclesdown", 32, 0, 1, 0, "horizontal", !0, !0, 52, k, f, 1500, 1],
                    ["parallaxcirclesright", 33, 0, 1, 0, "horizontal", !0, !0, 53, k, f, 1500, 1],
                    ["parallaxcirclesleft", 34, 0, 1, 0, "horizontal", !0, !0, 54, k, f, 1500, 1],
                    ["notransition", 26, 0, 1, 0, "horizontal", !0, null, 46, k, i, 1e3, 1],
                    ["parallaxright", 15, 3, 1, 0, "horizontal", !0, !0, 55, k, i, 1500, 1],
                    ["parallaxleft", 12, 3, 1, 0, "horizontal", !0, !0, 56, k, i, 1500, 1],
                    ["parallaxup", 14, 3, 1, 0, "horizontal", !0, !0, 57, k, f, 1500, 1],
                    ["parallaxdown", 13, 3, 1, 0, "horizontal", !0, !0, 58, k, f, 1500, 1]
                ]);
            e.duringslidechange = !0, e.testanims = !1, 1 == e.testanims && (e.nexttesttransform = void 0 === e.nexttesttransform ? 34 : e.nexttesttransform + 1, e.nexttesttransform = e.nexttesttransform > 70 ? 0 : e.nexttesttransform, b = v[e.nexttesttransform][0], console.log(b + "  " + e.nexttesttransform + "  " + v[e.nexttesttransform][1] + "  " + v[e.nexttesttransform][2])), jQuery.each(["parallaxcircles", "slidingoverlay", "slide", "slideover", "slideremove", "parallax", "parralaxto"], function(a, c) {
                b == c + "horizontal" && (b = 1 != d ? c + "left" : c + "right"), b == c + "vertical" && (b = 1 != d ? c + "up" : c + "down")
            }), "random" == b && (b = Math.round(Math.random() * v.length - 1), b > v.length - 1 && (b = v.length - 1)), "random-static" == b && (b = Math.round(Math.random() * o.length - 1), b > o.length - 1 && (b = o.length - 1), b = o[b]), "random-premium" == b && (b = Math.round(Math.random() * p.length - 1), b > p.length - 1 && (b = p.length - 1), b = p[b]);
            var w = [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
            if (1 == e.isJoomla && void 0 != window.MooTools && w.indexOf(b) != -1) {
                var x = Math.round(Math.random() * (p.length - 2)) + 1;
                x > p.length - 1 && (x = p.length - 1), 0 == x && (x = 1), b = p[x]
            }
            y(), q > 30 && (q = 30), q < 0 && (q = 0);
            var z = new Object;
            return z.nexttrans = q, z.STA = v[s], z.specials = r, z
        },
        f = function(a, b) {
            return void 0 == b || jQuery.isNumeric(a) ? a : void 0 == a ? a : a.split(",")[b]
        },
        g = function(a, b, c, g, h, i, j, k) {
            function V(a, b, c, d, e) {
                var f = a.find(".slot"),
                    g = 6,
                    h = [2, 1.2, .9, .7, .55, .42],
                    j = a.width(),
                    l = a.height();
                f.wrap('<div class="slot-circle-wrapper" style="overflow:hidden;position:absolute;border:1px solid #fff"></div>');
                for (var n = 0; n < g; n++) f.parent().clone(!1).appendTo(i);
                a.find(".slot-circle-wrapper").each(function(a) {
                    if (a < g) {
                        var d = jQuery(this),
                            f = d.find(".slot"),
                            i = j > l ? h[a] * j : h[a] * l,
                            m = i,
                            n = 0 + (m / 2 - j / 2),
                            o = 0 + (i / 2 - l / 2),
                            p = 0 != a ? "50%" : "0",
                            q = 31 == c ? l / 2 - i / 2 : 32 == c ? l / 2 - i / 2 : l / 2 - i / 2,
                            r = 33 == c ? j / 2 - m / 2 : 34 == c ? j - m : j / 2 - m / 2,
                            s = {
                                scale: 1,
                                transformOrigo: "50% 50%",
                                width: m + "px",
                                height: i + "px",
                                top: q + "px",
                                left: r + "px",
                                borderRadius: p
                            },
                            t = {
                                scale: 1,
                                top: l / 2 - i / 2,
                                left: j / 2 - m / 2,
                                ease: e
                            },
                            u = 31 == c ? o : 32 == c ? o : o,
                            v = 33 == c ? n : 34 == c ? n + j / 2 : n,
                            w = {
                                width: j,
                                height: l,
                                autoAlpha: 1,
                                top: u + "px",
                                position: "absolute",
                                left: v + "px"
                            },
                            x = {
                                top: o + "px",
                                left: n + "px",
                                ease: e
                            },
                            y = b,
                            z = 0;
                        k.add(punchgs.TweenLite.fromTo(d, y, s, t), z), k.add(punchgs.TweenLite.fromTo(f, y, w, x), z), k.add(punchgs.TweenLite.fromTo(d, .001, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1
                        }), 0)
                    }
                })
            }
            var l = c[0].opt,
                m = h.index(),
                n = g.index(),
                o = n < m ? 1 : 0;
            "arrow" == l.sc_indicator && (o = l.sc_indicator_dir);
            var p = e(c, b, i, o),
                q = p.STA,
                r = p.specials,
                a = p.nexttrans;
            "on" == i.data("kenburns") && (a = 11);
            var s = g.data("nexttransid") || 0,
                t = f(g.data("masterspeed"), s);
            t = "default" === t ? q[11] : "random" === t ? Math.round(1e3 * Math.random() + 300) : void 0 != t ? parseInt(t, 0) : q[11], t = t > l.delay ? l.delay : t, t += q[4], l.slots = f(g.data("slotamount"), s), l.slots = void 0 == l.slots || "default" == l.slots ? q[12] : "random" == l.slots ? Math.round(12 * Math.random() + 4) : l.slots, l.slots = l.slots < 1 ? "boxslide" == b ? Math.round(6 * Math.random() + 3) : "flyin" == b ? Math.round(4 * Math.random() + 1) : l.slots : l.slots, l.slots = (4 == a || 5 == a || 6 == a) && l.slots < 3 ? 3 : l.slots, l.slots = 0 != q[3] ? Math.min(l.slots, q[3]) : l.slots, l.slots = 9 == a ? l.width / l.slots : 10 == a ? l.height / l.slots : l.slots, l.rotate = f(g.data("rotate"), s), l.rotate = void 0 == l.rotate || "default" == l.rotate ? 0 : 999 == l.rotate || "random" == l.rotate ? Math.round(360 * Math.random()) : l.rotate, l.rotate = !jQuery.support.transition || l.ie || l.ie9 ? 0 : l.rotate, 11 != a && (null != q[7] && d(j, l, q[7], q[5]), null != q[6] && d(i, l, q[6], q[5])), k.add(punchgs.TweenLite.set(i.find(".defaultvid"), {
                y: 0,
                x: 0,
                top: 0,
                left: 0,
                scale: 1
            }), 0), k.add(punchgs.TweenLite.set(j.find(".defaultvid"), {
                y: 0,
                x: 0,
                top: 0,
                left: 0,
                scale: 1
            }), 0), k.add(punchgs.TweenLite.set(i.find(".defaultvid"), {
                y: "+0%",
                x: "+0%"
            }), 0), k.add(punchgs.TweenLite.set(j.find(".defaultvid"), {
                y: "+0%",
                x: "+0%"
            }), 0), k.add(punchgs.TweenLite.set(i, {
                autoAlpha: 1,
                y: "+0%",
                x: "+0%"
            }), 0), k.add(punchgs.TweenLite.set(j, {
                autoAlpha: 1,
                y: "+0%",
                x: "+0%"
            }), 0), k.add(punchgs.TweenLite.set(i.parent(), {
                backgroundColor: "transparent"
            }), 0), k.add(punchgs.TweenLite.set(j.parent(), {
                backgroundColor: "transparent"
            }), 0);
            var u = f(g.data("easein"), s),
                v = f(g.data("easeout"), s);
            if (u = "default" === u ? q[9] || punchgs.Power2.easeInOut : u || q[9] || punchgs.Power2.easeInOut, v = "default" === v ? q[10] || punchgs.Power2.easeInOut : v || q[10] || punchgs.Power2.easeInOut, 0 == a) {
                var w = Math.ceil(l.height / l.sloth),
                    x = 0;
                i.find(".slotslide").each(function(a) {
                    var b = jQuery(this);
                    x += 1, x == w && (x = 0), k.add(punchgs.TweenLite.from(b, t / 600, {
                        opacity: 0,
                        top: 0 - l.sloth,
                        left: 0 - l.slotw,
                        rotation: l.rotate,
                        force3D: "auto",
                        ease: u
                    }), (15 * a + 30 * x) / 1500)
                })
            }
            if (1 == a) {
                var y, z = 0;
                i.find(".slotslide").each(function(a) {
                    var b = jQuery(this),
                        c = Math.random() * t + 300,
                        d = 500 * Math.random() + 200;
                    c + d > y && (y = d + d, z = a), k.add(punchgs.TweenLite.from(b, c / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        rotation: l.rotate,
                        ease: u
                    }), d / 1e3)
                })
            }
            if (2 == a) {
                var A = new punchgs.TimelineLite;
                j.find(".slotslide").each(function() {
                    var a = jQuery(this);
                    A.add(punchgs.TweenLite.to(a, t / 1e3, {
                        left: l.slotw,
                        ease: u,
                        force3D: "auto",
                        rotation: 0 - l.rotate
                    }), 0), k.add(A, 0)
                }), i.find(".slotslide").each(function() {
                    var a = jQuery(this);
                    A.add(punchgs.TweenLite.from(a, t / 1e3, {
                        left: 0 - l.slotw,
                        ease: u,
                        force3D: "auto",
                        rotation: l.rotate
                    }), 0), k.add(A, 0)
                })
            }
            if (3 == a) {
                var A = new punchgs.TimelineLite;
                j.find(".slotslide").each(function() {
                    var a = jQuery(this);
                    A.add(punchgs.TweenLite.to(a, t / 1e3, {
                        top: l.sloth,
                        ease: u,
                        rotation: l.rotate,
                        force3D: "auto",
                        transformPerspective: 600
                    }), 0), k.add(A, 0)
                }), i.find(".slotslide").each(function() {
                    var a = jQuery(this);
                    A.add(punchgs.TweenLite.from(a, t / 1e3, {
                        top: 0 - l.sloth,
                        rotation: l.rotate,
                        ease: v,
                        force3D: "auto",
                        transformPerspective: 600
                    }), 0), k.add(A, 0)
                })
            }
            if (4 == a || 5 == a) {
                setTimeout(function() {
                    j.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var B = t / 1e3,
                    A = new punchgs.TimelineLite;
                j.find(".slotslide").each(function(b) {
                    var c = jQuery(this),
                        d = b * B / l.slots;
                    5 == a && (d = (l.slots - b - 1) * B / l.slots / 1.5), A.add(punchgs.TweenLite.to(c, 3 * B, {
                        transformPerspective: 600,
                        force3D: "auto",
                        top: 0 + l.height,
                        opacity: .5,
                        rotation: l.rotate,
                        ease: u,
                        delay: d
                    }), 0), k.add(A, 0)
                }), i.find(".slotslide").each(function(b) {
                    var c = jQuery(this),
                        d = b * B / l.slots;
                    5 == a && (d = (l.slots - b - 1) * B / l.slots / 1.5), A.add(punchgs.TweenLite.from(c, 3 * B, {
                        top: 0 - l.height,
                        opacity: .5,
                        rotation: l.rotate,
                        force3D: "auto",
                        ease: punchgs.eo,
                        delay: d
                    }), 0), k.add(A, 0)
                })
            }
            if (6 == a) {
                l.slots < 2 && (l.slots = 2), l.slots % 2 && (l.slots = l.slots + 1);
                var A = new punchgs.TimelineLite;
                setTimeout(function() {
                    j.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), j.find(".slotslide").each(function(a) {
                    var b = jQuery(this);
                    if (a + 1 < l.slots / 2) var c = 90 * (a + 2);
                    else var c = 90 * (2 + l.slots - a);
                    A.add(punchgs.TweenLite.to(b, (t + c) / 1e3, {
                        top: 0 + l.height,
                        opacity: 1,
                        force3D: "auto",
                        rotation: l.rotate,
                        ease: u
                    }), 0), k.add(A, 0)
                }), i.find(".slotslide").each(function(a) {
                    var b = jQuery(this);
                    if (a + 1 < l.slots / 2) var c = 90 * (a + 2);
                    else var c = 90 * (2 + l.slots - a);
                    A.add(punchgs.TweenLite.from(b, (t + c) / 1e3, {
                        top: 0 - l.height,
                        opacity: 1,
                        force3D: "auto",
                        rotation: l.rotate,
                        ease: v
                    }), 0), k.add(A, 0)
                })
            }
            if (7 == a) {
                t = 2 * t, t > l.delay && (t = l.delay);
                var A = new punchgs.TimelineLite;
                setTimeout(function() {
                    j.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), j.find(".slotslide").each(function() {
                    var a = jQuery(this).find("div");
                    A.add(punchgs.TweenLite.to(a, t / 1e3, {
                        left: 0 - l.slotw / 2 + "px",
                        top: 0 - l.height / 2 + "px",
                        width: 2 * l.slotw + "px",
                        height: 2 * l.height + "px",
                        opacity: 0,
                        rotation: l.rotate,
                        force3D: "auto",
                        ease: u
                    }), 0), k.add(A, 0)
                }), i.find(".slotslide").each(function(a) {
                    var b = jQuery(this).find("div");
                    A.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        transformPerspective: 600
                    }, {
                        left: 0 - a * l.slotw + "px",
                        ease: v,
                        force3D: "auto",
                        top: "0px",
                        width: l.width,
                        height: l.height,
                        opacity: 1,
                        rotation: 0,
                        delay: .1
                    }), 0), k.add(A, 0)
                })
            }
            if (8 == a) {
                t = 3 * t, t > l.delay && (t = l.delay);
                var A = new punchgs.TimelineLite;
                j.find(".slotslide").each(function() {
                    var a = jQuery(this).find("div");
                    A.add(punchgs.TweenLite.to(a, t / 1e3, {
                        left: 0 - l.width / 2 + "px",
                        top: 0 - l.sloth / 2 + "px",
                        width: 2 * l.width + "px",
                        height: 2 * l.sloth + "px",
                        force3D: "auto",
                        ease: u,
                        opacity: 0,
                        rotation: l.rotate
                    }), 0), k.add(A, 0)
                }), i.find(".slotslide").each(function(a) {
                    var b = jQuery(this).find("div");
                    A.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        force3D: "auto"
                    }, {
                        left: "0px",
                        top: 0 - a * l.sloth + "px",
                        width: i.find(".defaultimg").data("neww") + "px",
                        height: i.find(".defaultimg").data("newh") + "px",
                        opacity: 1,
                        ease: v,
                        rotation: 0
                    }), 0), k.add(A, 0)
                })
            }
            if (9 == a || 10 == a) {
                var D = 0;
                i.find(".slotslide").each(function(a) {
                    var b = jQuery(this);
                    D++, k.add(punchgs.TweenLite.fromTo(b, t / 2e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        transformPerspective: 600
                    }, {
                        autoAlpha: 1,
                        ease: u,
                        delay: a * l.slots / 100 / 2e3
                    }), 0)
                })
            }
            if (27 == a || 28 == a || 29 == a || 30 == a) {
                var E = i.find(".slot"),
                    F = 27 == a || 28 == a ? 1 : 2,
                    G = 27 == a || 29 == a ? "-100%" : "+100%",
                    H = 27 == a || 29 == a ? "+100%" : "-100%",
                    I = 27 == a || 29 == a ? "-80%" : "80%",
                    J = 27 == a || 29 == a ? "+80%" : "-80%",
                    K = 27 == a || 29 == a ? "+10%" : "-10%",
                    L = {
                        overwrite: "all"
                    },
                    M = {
                        autoAlpha: 0,
                        zIndex: 1,
                        force3D: "auto",
                        ease: u
                    },
                    N = {
                        position: "inherit",
                        autoAlpha: 0,
                        overwrite: "all",
                        zIndex: 1
                    },
                    O = {
                        autoAlpha: 1,
                        force3D: "auto",
                        ease: v
                    },
                    P = {
                        overwrite: "all",
                        zIndex: 2,
                        opacity: 1,
                        autoAlpha: 1
                    },
                    Q = {
                        autoAlpha: 1,
                        force3D: "auto",
                        overwrite: "all",
                        ease: u
                    },
                    R = {
                        overwrite: "all",
                        zIndex: 2,
                        autoAlpha: 1
                    },
                    S = {
                        autoAlpha: 1,
                        force3D: "auto",
                        ease: u
                    },
                    T = 1 == F ? "y" : "x";
                L[T] = "0px", M[T] = G, N[T] = K, O[T] = "0%", P[T] = H, Q[T] = G, R[T] = I, S[T] = J, E.append('<span style="background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;top:0px;left:0px;display:block;z-index:2"></span>'), k.add(punchgs.TweenLite.fromTo(j, t / 1e3, L, M), 0), k.add(punchgs.TweenLite.fromTo(i.find(".defaultimg"), t / 2e3, N, O), t / 2e3), k.add(punchgs.TweenLite.fromTo(E, t / 1e3, P, Q), 0), k.add(punchgs.TweenLite.fromTo(E.find(".slotslide div"), t / 1e3, R, S), 0)
            }
            if (31 == a || 32 == a || 33 == a || 34 == a) {
                t = 6e3, u = punchgs.Power3.easeInOut;
                var U = t / 1e3;
                mas = U - U / 5, _nt = a, fy = 31 == _nt ? "+100%" : 32 == _nt ? "-100%" : "0%", fx = 33 == _nt ? "+100%" : 34 == _nt ? "-100%" : "0%", ty = 31 == _nt ? "-100%" : 32 == _nt ? "+100%" : "0%", tx = 33 == _nt ? "-100%" : 34 == _nt ? "+100%" : "0%", k.add(punchgs.TweenLite.fromTo(j, U - .2 * U, {
                    y: 0,
                    x: 0
                }, {
                    y: ty,
                    x: tx,
                    ease: v
                }), .2 * U), k.add(punchgs.TweenLite.fromTo(i, U, {
                    y: fy,
                    x: fx
                }, {
                    y: "0%",
                    x: "0%",
                    ease: u
                }), 0), i.find(".slot").remove(), i.find(".defaultimg").clone().appendTo(i).addClass("slot"), V(i, U, _nt, "in", u)
            }
            if (11 == a) {
                r > 4 && (r = 0);
                var D = 0,
                    W = 2 == r ? "#000000" : 3 == r ? "#ffffff" : "transparent";
                switch (r) {
                    case 0:
                        k.add(punchgs.TweenLite.fromTo(i, t / 1e3, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1,
                            force3D: "auto",
                            ease: u
                        }), 0);
                        break;
                    case 1:
                        k.add(punchgs.TweenLite.fromTo(i, t / 1e3, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1,
                            force3D: "auto",
                            ease: u
                        }), 0), k.add(punchgs.TweenLite.fromTo(j, t / 1e3, {
                            autoAlpha: 1
                        }, {
                            autoAlpha: 0,
                            force3D: "auto",
                            ease: u
                        }), 0);
                        break;
                    case 2:
                    case 3:
                    case 4:
                        k.add(punchgs.TweenLite.set(j.parent(), {
                            backgroundColor: W,
                            force3D: "auto"
                        }), 0), k.add(punchgs.TweenLite.set(i.parent(), {
                            backgroundColor: "transparent",
                            force3D: "auto"
                        }), 0), k.add(punchgs.TweenLite.to(j, t / 2e3, {
                            autoAlpha: 0,
                            force3D: "auto",
                            ease: u
                        }), 0), k.add(punchgs.TweenLite.fromTo(i, t / 2e3, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1,
                            force3D: "auto",
                            ease: u
                        }), t / 2e3)
                }
                k.add(punchgs.TweenLite.set(i.find(".defaultimg"), {
                    autoAlpha: 1
                }), 0), k.add(punchgs.TweenLite.set(j.find("defaultimg"), {
                    autoAlpha: 1
                }), 0)
            }
            if (26 == a) {
                var D = 0;
                t = 0, k.add(punchgs.TweenLite.fromTo(i, t / 1e3, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    force3D: "auto",
                    ease: u
                }), 0), k.add(punchgs.TweenLite.to(j, t / 1e3, {
                    autoAlpha: 0,
                    force3D: "auto",
                    ease: u
                }), 0), k.add(punchgs.TweenLite.set(i.find(".defaultimg"), {
                    autoAlpha: 1
                }), 0), k.add(punchgs.TweenLite.set(j.find("defaultimg"), {
                    autoAlpha: 1
                }), 0)
            }
            if (12 == a || 13 == a || 14 == a || 15 == a) {
                t = t, t > l.delay && (t = l.delay), setTimeout(function() {
                    punchgs.TweenLite.set(j.find(".defaultimg"), {
                        autoAlpha: 0
                    })
                }, 100);
                var X = l.width,
                    Y = l.height,
                    Z = i.find(".slotslide, .defaultvid"),
                    $ = 0,
                    _ = 0,
                    aa = 1,
                    ba = 1,
                    ca = 1,
                    da = t / 1e3,
                    ea = da;
                "fullwidth" != l.sliderLayout && "fullscreen" != l.sliderLayout || (X = Z.width(), Y = Z.height()), 12 == a ? $ = X : 15 == a ? $ = 0 - X : 13 == a ? _ = Y : 14 == a && (_ = 0 - Y), 1 == r && (aa = 0), 2 == r && (aa = 0), 3 == r && (da = t / 1300), 4 != r && 5 != r || (ba = .6), 6 == r && (ba = 1.4), 5 != r && 6 != r || (ca = 1.4, aa = 0, X = 0, Y = 0, $ = 0, _ = 0), 6 == r && (ca = .6);
                7 == r && (X = 0, Y = 0);
                var ga = i.find(".slotslide"),
                    ha = j.find(".slotslide, .defaultvid");
                if (k.add(punchgs.TweenLite.set(h, {
                        zIndex: 15
                    }), 0), k.add(punchgs.TweenLite.set(g, {
                        zIndex: 20
                    }), 0), 8 == r ? (k.add(punchgs.TweenLite.set(h, {
                        zIndex: 20
                    }), 0), k.add(punchgs.TweenLite.set(g, {
                        zIndex: 15
                    }), 0), k.add(punchgs.TweenLite.set(ga, {
                        left: 0,
                        top: 0,
                        scale: 1,
                        opacity: 1,
                        rotation: 0,
                        ease: u,
                        force3D: "auto"
                    }), 0)) : k.add(punchgs.TweenLite.from(ga, da, {
                        left: $,
                        top: _,
                        scale: ca,
                        opacity: aa,
                        rotation: l.rotate,
                        ease: u,
                        force3D: "auto"
                    }), 0), 4 != r && 5 != r || (X = 0, Y = 0), 1 != r) switch (a) {
                    case 12:
                        k.add(punchgs.TweenLite.to(ha, ea, {
                            left: 0 - X + "px",
                            force3D: "auto",
                            scale: ba,
                            opacity: aa,
                            rotation: l.rotate,
                            ease: v
                        }), 0);
                        break;
                    case 15:
                        k.add(punchgs.TweenLite.to(ha, ea, {
                            left: X + "px",
                            force3D: "auto",
                            scale: ba,
                            opacity: aa,
                            rotation: l.rotate,
                            ease: v
                        }), 0);
                        break;
                    case 13:
                        k.add(punchgs.TweenLite.to(ha, ea, {
                            top: 0 - Y + "px",
                            force3D: "auto",
                            scale: ba,
                            opacity: aa,
                            rotation: l.rotate,
                            ease: v
                        }), 0);
                        break;
                    case 14:
                        k.add(punchgs.TweenLite.to(ha, ea, {
                            top: Y + "px",
                            force3D: "auto",
                            scale: ba,
                            opacity: aa,
                            rotation: l.rotate,
                            ease: v
                        }), 0)
                }
            }
            if (16 == a) {
                var A = new punchgs.TimelineLite;
                k.add(punchgs.TweenLite.set(h, {
                    position: "absolute",
                    "z-index": 20
                }), 0), k.add(punchgs.TweenLite.set(g, {
                    position: "absolute",
                    "z-index": 15
                }), 0), h.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'), h.find(".tp-half-one").clone(!0).appendTo(h).addClass("tp-half-two"), h.find(".tp-half-two").removeClass("tp-half-one");
                var X = l.width,
                    Y = l.height;
                "on" == l.autoHeight && (Y = c.height()), h.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + X + "px;height:" + Y + 'px;"></div>'), h.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + X + "px;height:" + Y + 'px;"></div>'), h.find(".tp-half-two .defaultimg").css({
                    position: "absolute",
                    top: "-50%"
                }), h.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'), k.add(punchgs.TweenLite.set(h.find(".tp-half-two"), {
                    width: X,
                    height: Y,
                    overflow: "hidden",
                    zIndex: 15,
                    position: "absolute",
                    top: Y / 2,
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center bottom"
                }), 0), k.add(punchgs.TweenLite.set(h.find(".tp-half-one"), {
                    width: X,
                    height: Y / 2,
                    overflow: "visible",
                    zIndex: 10,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center top"
                }), 0);
                var ja = (h.find(".defaultimg"), Math.round(20 * Math.random() - 10)),
                    ka = Math.round(20 * Math.random() - 10),
                    la = Math.round(20 * Math.random() - 10),
                    ma = .4 * Math.random() - .2,
                    na = .4 * Math.random() - .2,
                    oa = 1 * Math.random() + 1,
                    pa = 1 * Math.random() + 1,
                    qa = .3 * Math.random() + .3;
                k.add(punchgs.TweenLite.set(h.find(".tp-half-one"), {
                    overflow: "hidden"
                }), 0), k.add(punchgs.TweenLite.fromTo(h.find(".tp-half-one"), t / 800, {
                    width: X,
                    height: Y / 2,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    force3D: "auto",
                    transformOrigin: "center top"
                }, {
                    scale: oa,
                    rotation: ja,
                    y: 0 - Y - Y / 4,
                    autoAlpha: 0,
                    ease: u
                }), 0), k.add(punchgs.TweenLite.fromTo(h.find(".tp-half-two"), t / 800, {
                    width: X,
                    height: Y,
                    overflow: "hidden",
                    position: "absolute",
                    top: Y / 2,
                    left: "0px",
                    force3D: "auto",
                    transformOrigin: "center bottom"
                }, {
                    scale: pa,
                    rotation: ka,
                    y: Y + Y / 4,
                    ease: u,
                    autoAlpha: 0,
                    onComplete: function() {
                        punchgs.TweenLite.set(h, {
                            position: "absolute",
                            "z-index": 15
                        }), punchgs.TweenLite.set(g, {
                            position: "absolute",
                            "z-index": 20
                        }), h.find(".tp-half-one").length > 0 && (h.find(".tp-half-one .defaultimg").unwrap(), h.find(".tp-half-one .slotholder").unwrap()), h.find(".tp-half-two").remove()
                    }
                }), 0), A.add(punchgs.TweenLite.set(i.find(".defaultimg"), {
                    autoAlpha: 1
                }), 0), null != h.html() && k.add(punchgs.TweenLite.fromTo(g, (t - 200) / 1e3, {
                    scale: qa,
                    x: l.width / 4 * ma,
                    y: Y / 4 * na,
                    rotation: la,
                    force3D: "auto",
                    transformOrigin: "center center",
                    ease: v
                }, {
                    autoAlpha: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    rotation: 0
                }), 0), k.add(A, 0)
            }
            if (17 == a && i.find(".slotslide").each(function(a) {
                    var b = jQuery(this);
                    k.add(punchgs.TweenLite.fromTo(b, t / 800, {
                        opacity: 0,
                        rotationY: 0,
                        scale: .9,
                        rotationX: -110,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: "center center"
                    }, {
                        opacity: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        force3D: "auto",
                        rotationY: 0,
                        ease: u,
                        delay: .06 * a
                    }), 0)
                }), 18 == a && i.find(".slotslide").each(function(a) {
                    var b = jQuery(this);
                    k.add(punchgs.TweenLite.fromTo(b, t / 500, {
                        autoAlpha: 0,
                        rotationY: 110,
                        scale: .9,
                        rotationX: 10,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: "center center"
                    }, {
                        autoAlpha: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        force3D: "auto",
                        rotationY: 0,
                        ease: u,
                        delay: .06 * a
                    }), 0)
                }), 19 == a || 22 == a) {
                var A = new punchgs.TimelineLite;
                k.add(punchgs.TweenLite.set(h, {
                    zIndex: 20
                }), 0), k.add(punchgs.TweenLite.set(g, {
                    zIndex: 20
                }), 0), setTimeout(function() {
                    j.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var ra = 90,
                    aa = 1,
                    sa = "center center ";
                1 == o && (ra = -90), 19 == a ? (sa = sa + "-" + l.height / 2, aa = 0) : sa += l.height / 2, punchgs.TweenLite.set(c, {
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    transformPerspective: 600
                }), i.find(".slotslide").each(function(a) {
                    var b = jQuery(this);
                    A.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
                        transformStyle: "flat",
                        backfaceVisibility: "hidden",
                        left: 0,
                        rotationY: l.rotate,
                        z: 10,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: sa,
                        rotationX: ra
                    }, {
                        left: 0,
                        rotationY: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        rotationX: 0,
                        delay: 50 * a / 1e3,
                        ease: u
                    }), 0), A.add(punchgs.TweenLite.to(b, .1, {
                        autoAlpha: 1,
                        delay: 50 * a / 1e3
                    }), 0), k.add(A)
                }), j.find(".slotslide").each(function(a) {
                    var b = jQuery(this),
                        c = -90;
                    1 == o && (c = 90), A.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
                        transformStyle: "flat",
                        backfaceVisibility: "hidden",
                        autoAlpha: 1,
                        rotationY: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: sa,
                        rotationX: 0
                    }, {
                        autoAlpha: 1,
                        rotationY: l.rotate,
                        top: 0,
                        z: 10,
                        scale: 1,
                        rotationX: c,
                        delay: 50 * a / 1e3,
                        force3D: "auto",
                        ease: v
                    }), 0), k.add(A)
                }), k.add(punchgs.TweenLite.set(h, {
                    zIndex: 18
                }), 0)
            }
            if (20 == a) {
                if (setTimeout(function() {
                        j.find(".defaultimg").css({
                            opacity: 0
                        })
                    }, 100), 1 == o) var ta = -l.width,
                    ra = 80,
                    sa = "20% 70% -" + l.height / 2;
                else var ta = l.width,
                    ra = -80,
                    sa = "80% 70% -" + l.height / 2;
                i.find(".slotslide").each(function(a) {
                    var b = jQuery(this),
                        c = 50 * a / 1e3;
                    k.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
                        left: ta,
                        rotationX: 40,
                        z: -600,
                        opacity: aa,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: sa,
                        transformStyle: "flat",
                        rotationY: ra
                    }, {
                        left: 0,
                        rotationX: 0,
                        opacity: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: 0,
                        delay: c,
                        ease: u
                    }), 0)
                }), j.find(".slotslide").each(function(a) {
                    var b = jQuery(this),
                        c = 50 * a / 1e3;
                    if (c = a > 0 ? c + t / 9e3 : 0, 1 != o) var d = -l.width / 2,
                        e = 30,
                        f = "20% 70% -" + l.height / 2;
                    else var d = l.width / 2,
                        e = -30,
                        f = "80% 70% -" + l.height / 2;
                    v = punchgs.Power2.easeInOut, k.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
                        opacity: 1,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        left: 0,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: f,
                        transformStyle: "flat",
                        rotationY: 0
                    }, {
                        opacity: 1,
                        rotationX: 20,
                        top: 0,
                        z: -600,
                        left: d,
                        force3D: "auto",
                        rotationY: e,
                        delay: c,
                        ease: v
                    }), 0)
                })
            }
            if (21 == a || 25 == a) {
                setTimeout(function() {
                    j.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var ra = 90,
                    ta = -l.width,
                    ua = -ra;
                if (1 == o)
                    if (25 == a) {
                        var sa = "center top 0";
                        ra = l.rotate
                    } else {
                        var sa = "left center 0";
                        ua = l.rotate
                    } else if (ta = l.width, ra = -90, 25 == a) {
                    var sa = "center bottom 0";
                    ua = -ra, ra = l.rotate
                } else {
                    var sa = "right center 0";
                    ua = l.rotate
                }
                i.find(".slotslide").each(function(a) {
                    var b = jQuery(this),
                        c = t / 1.5 / 3;
                    k.add(punchgs.TweenLite.fromTo(b, 2 * c / 1e3, {
                        left: 0,
                        transformStyle: "flat",
                        rotationX: ua,
                        z: 0,
                        autoAlpha: 0,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 1200,
                        transformOrigin: sa,
                        rotationY: ra
                    }, {
                        left: 0,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        autoAlpha: 1,
                        scale: 1,
                        rotationY: 0,
                        force3D: "auto",
                        delay: c / 1e3,
                        ease: u
                    }), 0)
                }), 1 != o ? (ta = -l.width, ra = 90, 25 == a ? (sa = "center top 0", ua = -ra, ra = l.rotate) : (sa = "left center 0", ua = l.rotate)) : (ta = l.width, ra = -90, 25 == a ? (sa = "center bottom 0", ua = -ra, ra = l.rotate) : (sa = "right center 0", ua = l.rotate)), j.find(".slotslide").each(function(a) {
                    var b = jQuery(this);
                    k.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
                        left: 0,
                        transformStyle: "flat",
                        rotationX: 0,
                        z: 0,
                        autoAlpha: 1,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 1200,
                        transformOrigin: sa,
                        rotationY: 0
                    }, {
                        left: 0,
                        rotationX: ua,
                        top: 0,
                        z: 0,
                        autoAlpha: 1,
                        force3D: "auto",
                        scale: 1,
                        rotationY: ra,
                        ease: v
                    }), 0)
                })
            }
            if (23 == a || 24 == a) {
                setTimeout(function() {
                    j.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var ra = -90,
                    aa = 1,
                    va = 0;
                if (1 == o && (ra = 90), 23 == a) {
                    var sa = "center center -" + l.width / 2;
                    aa = 0
                } else var sa = "center center " + l.width / 2;
                punchgs.TweenLite.set(c, {
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    perspective: 2500
                }), i.find(".slotslide").each(function(a) {
                    var b = jQuery(this);
                    k.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
                        left: va,
                        rotationX: l.rotate,
                        force3D: "auto",
                        opacity: aa,
                        top: 0,
                        scale: 1,
                        transformPerspective: 1200,
                        transformOrigin: sa,
                        rotationY: ra
                    }, {
                        left: 0,
                        rotationX: 0,
                        autoAlpha: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: 0,
                        delay: 50 * a / 500,
                        ease: u
                    }), 0)
                }), ra = 90, 1 == o && (ra = -90), j.find(".slotslide").each(function(b) {
                    var c = jQuery(this);
                    k.add(punchgs.TweenLite.fromTo(c, t / 1e3, {
                        left: 0,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        transformStyle: "flat",
                        transformPerspective: 1200,
                        transformOrigin: sa,
                        rotationY: 0
                    }, {
                        left: va,
                        rotationX: l.rotate,
                        top: 0,
                        scale: 1,
                        rotationY: ra,
                        delay: 50 * b / 500,
                        ease: v
                    }), 0), 23 == a && k.add(punchgs.TweenLite.fromTo(c, t / 2e3, {
                        autoAlpha: 1
                    }, {
                        autoAlpha: 0,
                        delay: 50 * b / 500 + t / 3e3,
                        ease: v
                    }), 0)
                })
            }
            return k
        }
}(jQuery);

/********************************************
 * REVOLUTION 5.2.5.1 EXTENSION - VIDEO FUNCTIONS
 * @version: 2.0.2 (25.11.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 *********************************************/
! function(a) {
    "use strict";

    function e(a) {
        return void 0 == a ? -1 : jQuery.isNumeric(a) ? a : a.split(":").length > 1 ? 60 * parseInt(a.split(":")[0], 0) + parseInt(a.split(":")[1], 0) : a
    }
    var b = jQuery.fn.revolution,
        c = b.is_mobile(),
        d = {
            alias: "Video Min JS",
            name: "revolution.extensions.video.min.js",
            min_core: "5.3",
            version: "2.0.2"
        };
    jQuery.extend(!0, b, {
        preLoadAudio: function(a, c) {
            return "stop" !== b.compare_version(d).check && void a.find(".tp-audiolayer").each(function() {
                var a = jQuery(this),
                    d = {};
                0 === a.find("audio").length && (d.src = void 0 != a.data("videomp4") ? a.data("videomp4") : "", d.pre = a.data("videopreload") || "", void 0 === a.attr("id") && a.attr("audio-layer-" + Math.round(199999 * Math.random())), d.id = a.attr("id"), d.status = "prepared", d.start = jQuery.now(), d.waittime = 1e3 * a.data("videopreloadwait") || 5e3, "auto" != d.pre && "canplaythrough" != d.pre && "canplay" != d.pre && "progress" != d.pre || (void 0 === c.audioqueue && (c.audioqueue = []), c.audioqueue.push(d), b.manageVideoLayer(a, c)))
            })
        },
        preLoadAudioDone: function(a, b, c) {
            b.audioqueue && b.audioqueue.length > 0 && jQuery.each(b.audioqueue, function(b, d) {
                a.data("videomp4") !== d.src || d.pre !== c && "auto" !== d.pre || (d.status = "loaded")
            })
        },
        resetVideo: function(a, d, f) {
            var g = a.data();
            switch (g.videotype) {
                case "youtube":
                    g.player;
                    try {
                        if ("on" == g.forcerewind) {
                            var i = e(a.data("videostartat")),
                                j = i == -1,
                                k = 1 === g.bgvideo || a.find(".tp-videoposter").length > 0;
                            i = i == -1 ? 0 : i, void 0 != g.player && (0 !== i && !j || k) && (g.player.seekTo(i), g.player.pauseVideo())
                        }
                    } catch (a) {}
                    0 == a.find(".tp-videoposter").length && 1 !== g.bgvideo && f !== !0 && punchgs.TweenLite.to(a.find("iframe"), .3, {
                        autoAlpha: 1,
                        display: "block",
                        ease: punchgs.Power3.easeInOut
                    });
                    break;
                case "vimeo":
                    var l = $f(a.find("iframe").attr("id"));
                    try {
                        if ("on" == g.forcerewind) {
                            var i = e(g.videostartat),
                                j = i == -1,
                                k = 1 === g.bgvideo || a.find(".tp-videoposter").length > 0;
                            i = i == -1 ? 0 : i, (0 !== i && !j || k) && (l.api("seekTo", i), l.api("pause"))
                        }
                    } catch (a) {}
                    0 == a.find(".tp-videoposter").length && 1 !== g.bgvideo && f !== !0 && punchgs.TweenLite.to(a.find("iframe"), .3, {
                        autoAlpha: 1,
                        display: "block",
                        ease: punchgs.Power3.easeInOut
                    });
                    break;
                case "html5":
                    if (c && 1 == g.disablevideoonmobile) return !1;
                    var n = "html5" == g.audio ? "audio" : "video",
                        o = a.find(n),
                        p = o[0];
                    if (punchgs.TweenLite.to(o, .3, {
                            autoAlpha: 1,
                            display: "block",
                            ease: punchgs.Power3.easeInOut
                        }), "on" == g.forcerewind && !a.hasClass("videoisplaying")) try {
                        var i = e(g.videostartat);
                        p.currentTime = i == -1 ? 0 : i
                    } catch (a) {}("mute" == g.volume || b.lastToggleState(a.videomutetoggledby) || d.globalmute === !0) && (p.muted = !0)
            }
        },
        isVideoMuted: function(a, b) {
            var c = !1,
                d = a.data();
            switch (d.videotype) {
                case "youtube":
                    try {
                        var e = d.player;
                        c = e.isMuted()
                    } catch (a) {}
                    break;
                case "vimeo":
                    try {
                        $f(a.find("iframe").attr("id"));
                        "mute" == d.volume && (c = !0)
                    } catch (a) {}
                    break;
                case "html5":
                    var g = "html5" == d.audio ? "audio" : "video",
                        h = a.find(g),
                        i = h[0];
                    i.muted && (c = !0)
            }
            return c
        },
        muteVideo: function(a, b) {
            var c = a.data();
            switch (c.videotype) {
                case "youtube":
                    try {
                        var d = c.player;
                        d.mute()
                    } catch (a) {}
                    break;
                case "vimeo":
                    try {
                        var e = $f(a.find("iframe").attr("id"));
                        a.data("volume", "mute"), e.api("setVolume", 0)
                    } catch (a) {}
                    break;
                case "html5":
                    var f = "html5" == c.audio ? "audio" : "video",
                        g = a.find(f),
                        h = g[0];
                    h.muted = !0
            }
        },
        unMuteVideo: function(a, b) {
            if (b.globalmute !== !0) {
                var c = a.data();
                switch (c.videotype) {
                    case "youtube":
                        try {
                            var d = c.player;
                            d.unMute()
                        } catch (a) {}
                        break;
                    case "vimeo":
                        try {
                            var e = $f(a.find("iframe").attr("id"));
                            a.data("volume", "1"), e.api("setVolume", 1)
                        } catch (a) {}
                        break;
                    case "html5":
                        var f = "html5" == c.audio ? "audio" : "video",
                            g = a.find(f),
                            h = g[0];
                        h.muted = !1
                }
            }
        },
        stopVideo: function(a, b) {
            var c = a.data();
            switch (b.leaveViewPortBasedStop || (b.lastplayedvideos = []), b.leaveViewPortBasedStop = !1, c.videotype) {
                case "youtube":
                    try {
                        var d = c.player;
                        if (2 === d.getPlayerState() || 5 === d.getPlayerState()) return;
                        d.pauseVideo(), c.youtubepausecalled = !0, setTimeout(function() {
                            c.youtubepausecalled = !1
                        }, 80)
                    } catch (a) {
                        console.log("Issue at YouTube Video Pause:"), console.log(a)
                    }
                    break;
                case "vimeo":
                    try {
                        var e = $f(a.find("iframe").attr("id"));
                        e.api("pause"), c.vimeopausecalled = !0, setTimeout(function() {
                            c.vimeopausecalled = !1
                        }, 80)
                    } catch (a) {
                        console.log("Issue at Vimeo Video Pause:"), console.log(a)
                    }
                    break;
                case "html5":
                    var f = "html5" == c.audio ? "audio" : "video",
                        g = a.find(f),
                        h = g[0];
                    void 0 != g && void 0 != h && h.pause()
            }
        },
        playVideo: function(a, d) {
            clearTimeout(a.data("videoplaywait"));
            var g = a.data();
            switch (g.videotype) {
                case "youtube":
                    if (0 == a.find("iframe").length) a.append(a.data("videomarkup")), h(a, d, !0);
                    else if (void 0 != g.player.playVideo) {
                        var i = e(a.data("videostartat")),
                            j = g.player.getCurrentTime();
                        1 == a.data("nextslideatend-triggered") && (j = -1, a.data("nextslideatend-triggered", 0)), i != -1 && i > j && g.player.seekTo(i), g.youtubepausecalled !== !0 && g.player.playVideo()
                    } else a.data("videoplaywait", setTimeout(function() {
                        g.youtubepausecalled !== !0 && b.playVideo(a, d)
                    }, 50));
                    break;
                case "vimeo":
                    if (0 == a.find("iframe").length) a.append(a.data("videomarkup")), h(a, d, !0);
                    else if (a.hasClass("rs-apiready")) {
                        var k = a.find("iframe").attr("id"),
                            l = $f(k);
                        void 0 == l.api("play") ? a.data("videoplaywait", setTimeout(function() {
                            g.vimeopausecalled !== !0 && b.playVideo(a, d)
                        }, 50)) : setTimeout(function() {
                            l.api("play");
                            var b = e(a.data("videostartat")),
                                c = a.data("currenttime");
                            1 == a.data("nextslideatend-triggered") && (c = -1, a.data("nextslideatend-triggered", 0)), b != -1 && b > c && l.api("seekTo", b)
                        }, 510)
                    } else a.data("videoplaywait", setTimeout(function() {
                        g.vimeopausecalled !== !0 && b.playVideo(a, d)
                    }, 50));
                    break;
                case "html5":
                    if (c && 1 == a.data("disablevideoonmobile")) return !1;
                    var m = "html5" == g.audio ? "audio" : "video",
                        n = a.find(m),
                        o = n[0],
                        p = n.parent();
                    if (1 != p.data("metaloaded")) f(o, "loadedmetadata", function(a) {
                        b.resetVideo(a, d), o.play();
                        var c = e(a.data("videostartat")),
                            f = o.currentTime;
                        1 == a.data("nextslideatend-triggered") && (f = -1, a.data("nextslideatend-triggered", 0)), c != -1 && c > f && (o.currentTime = c)
                    }(a));
                    else {
                        o.play();
                        var i = e(a.data("videostartat")),
                            j = o.currentTime;
                        1 == a.data("nextslideatend-triggered") && (j = -1, a.data("nextslideatend-triggered", 0)), i != -1 && i > j && (o.currentTime = i)
                    }
            }
        },
        isVideoPlaying: function(a, b) {
            var c = !1;
            return void 0 != b.playingvideos && jQuery.each(b.playingvideos, function(b, d) {
                a.attr("id") == d.attr("id") && (c = !0)
            }), c
        },
        removeMediaFromList: function(a, b) {
            m(a, b)
        },
        prepareCoveredVideo: function(a, c, d) {
            var e = d.find("iframe, video"),
                f = a.split(":")[0],
                g = a.split(":")[1],
                h = d.closest(".tp-revslider-slidesli"),
                i = h.width() / h.height(),
                j = f / g,
                k = i / j * 100,
                l = j / i * 100;
            i > j ? punchgs.TweenLite.to(e, .001, {
                height: k + "%",
                width: "100%",
                top: -(k - 100) / 2 + "%",
                left: "0px",
                position: "absolute"
            }) : punchgs.TweenLite.to(e, .001, {
                width: l + "%",
                height: "100%",
                left: -(l - 100) / 2 + "%",
                top: "0px",
                position: "absolute"
            }), e.hasClass("resizelistener") || (e.addClass("resizelistener"), jQuery(window).resize(function() {
                clearTimeout(e.data("resizelistener")), e.data("resizelistener", setTimeout(function() {
                    b.prepareCoveredVideo(a, c, d)
                }, 30))
            }))
        },
        checkVideoApis: function(a, b, c) {
            "https:" === location.protocol ? "https" : "http";
            if ((void 0 != a.data("ytid") || a.find("iframe").length > 0 && a.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (b.youtubeapineeded = !0), (void 0 != a.data("ytid") || a.find("iframe").length > 0 && a.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && 0 == c.addedyt) {
                b.youtubestarttime = jQuery.now(), c.addedyt = 1;
                var e = document.createElement("script");
                e.src = "https://www.youtube.com/iframe_api";
                var f = document.getElementsByTagName("script")[0],
                    g = !0;
                jQuery("head").find("*").each(function() {
                    "https://www.youtube.com/iframe_api" == jQuery(this).attr("src") && (g = !1)
                }), g && f.parentNode.insertBefore(e, f)
            }
            if ((void 0 != a.data("vimeoid") || a.find("iframe").length > 0 && a.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (b.vimeoapineeded = !0), (void 0 != a.data("vimeoid") || a.find("iframe").length > 0 && a.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && 0 == c.addedvim) {
                b.vimeostarttime = jQuery.now(), c.addedvim = 1;
                var h = document.createElement("script"),
                    f = document.getElementsByTagName("script")[0],
                    g = !0;
                h.src = "https://secure-a.vimeocdn.com/js/froogaloop2.min.js", jQuery("head").find("*").each(function() {
                    "https://secure-a.vimeocdn.com/js/froogaloop2.min.js" == jQuery(this).attr("src") && (g = !1)
                }), g && f.parentNode.insertBefore(h, f)
            }
            return c
        },
        manageVideoLayer: function(a, g, i, j) {
            if ("stop" === b.compare_version(d).check) return !1;
            var l = a.data(),
                m = l.videoattributes,
                n = l.ytid,
                o = l.vimeoid,
                p = "auto" === l.videopreload || "canplay" === l.videopreload || "canplaythrough" === l.videopreload || "progress" === l.videopreload ? "auto" : l.videopreload,
                q = l.videomp4,
                r = l.videowebm,
                s = l.videoogv,
                t = l.allowfullscreenvideo,
                u = l.videocontrols,
                v = "http",
                w = "loop" == l.videoloop ? "loop" : "loopandnoslidestop" == l.videoloop ? "loop" : "",
                x = void 0 != q || void 0 != r ? "html5" : void 0 != n && String(n).length > 1 ? "youtube" : void 0 != o && String(o).length > 1 ? "vimeo" : "none",
                y = "html5" == l.audio ? "audio" : "video",
                z = "html5" == x && 0 == a.find(y).length ? "html5" : "youtube" == x && 0 == a.find("iframe").length ? "youtube" : "vimeo" == x && 0 == a.find("iframe").length ? "vimeo" : "none";
            switch (w = l.nextslideatend === !0 ? "" : w, l.videotype = x, z) {
                case "html5":
                    "controls" != u && (u = "");
                    var y = "video";
                    "html5" == l.audio && (y = "audio", a.addClass("tp-audio-html5"));
                    var A = "<" + y + ' style="object-fit:cover;background-size:cover;visible:hidden;width:100%; height:100%" class="" ' + w + ' preload="' + p + '">';
                    "auto" == p && (g.mediapreload = !0), void 0 != r && "firefox" == b.get_browser().toLowerCase() && (A = A + '<source src="' + r + '" type="video/webm" />'), void 0 != q && (A = A + '<source src="' + q + '" type="video/mp4" />'), void 0 != s && (A = A + '<source src="' + s + '" type="video/ogg" />'), A = A + "</" + y + ">";
                    var B = "";
                    "true" !== t && t !== !0 || (B = '<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div>'), "controls" == u && (A += '<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div>' + B + "</div>"), a.data("videomarkup", A), a.append(A), (c && 1 == a.data("disablevideoonmobile") || b.isIE(8)) && a.find(y).remove(), a.find(y).each(function(c) {
                        var d = this,
                            e = jQuery(this);
                        e.parent().hasClass("html5vid") || e.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"></div>');
                        var h = e.parent();
                        1 != h.data("metaloaded") && f(d, "loadedmetadata", function(a) {
                            k(a, g), b.resetVideo(a, g)
                        }(a))
                    });
                    break;
                case "youtube":
                    v = "https", "none" == u && (m = m.replace("controls=1", "controls=0"), m.toLowerCase().indexOf("controls") == -1 && (m += "&controls=0")), l.videoinline !== !0 && "true" !== l.videoinline && 1 !== l.videoinline || (m += "&playsinline=1");
                    var C = e(a.data("videostartat")),
                        D = e(a.data("videoendat"));
                    C != -1 && (m = m + "&start=" + C), D != -1 && (m = m + "&end=" + D);
                    var E = m.split("origin=" + v + "://"),
                        F = "";
                    E.length > 1 ? (F = E[0] + "origin=" + v + "://", self.location.href.match(/www/gi) && !E[1].match(/www/gi) && (F += "www."), F += E[1]) : F = m;
                    var G = "true" === t || t === !0 ? "allowfullscreen" : "";
                    a.data("videomarkup", '<iframe type="text/html" src="' + v + "://www.youtube.com/embed/" + n + "?" + F + '" ' + G + ' width="100%" height="100%" style="opacity:0;visibility:hidden;width:100%;height:100%"></iframe>');
                    break;
                case "vimeo":
                    v = "https", a.data("videomarkup", '<iframe src="' + v + "://player.vimeo.com/video/" + o + "?autoplay=0&" + m + '" webkitallowfullscreen mozallowfullscreen allowfullscreen width="100%" height="100%" style="opacity:0;visibility:hidden;100%;height:100%"></iframe>')
            }
            var H = c && "on" == a.data("noposteronmobile");
            if (void 0 != l.videoposter && l.videoposter.length > 2 && !H) 0 == a.find(".tp-videoposter").length && a.append('<div class="tp-videoposter noSwipe" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:3;background-image:url(' + l.videoposter + '); background-size:cover;background-position:center center;"></div>'), 0 == a.find("iframe").length && a.find(".tp-videoposter").click(function() {
                if (b.playVideo(a, g), c) {
                    if (1 == a.data("disablevideoonmobile")) return !1;
                    punchgs.TweenLite.to(a.find(".tp-videoposter"), .3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        ease: punchgs.Power3.easeInOut
                    }), punchgs.TweenLite.to(a.find("iframe"), .3, {
                        autoAlpha: 1,
                        display: "block",
                        ease: punchgs.Power3.easeInOut
                    })
                }
            });
            else {
                if (c && 1 == a.data("disablevideoonmobile")) return !1;
                0 != a.find("iframe").length || "youtube" != x && "vimeo" != x || (a.append(a.data("videomarkup")), h(a, g, !1))
            }
            "none" != a.data("dottedoverlay") && void 0 != a.data("dottedoverlay") && 1 != a.find(".tp-dottedoverlay").length && a.append('<div class="tp-dottedoverlay ' + a.data("dottedoverlay") + '"></div>'), a.addClass("HasListener"), 1 == a.data("bgvideo") && punchgs.TweenLite.set(a.find("video, iframe"), {
                autoAlpha: 0
            })
        }
    });
    var f = function(a, b, c) {
            a.addEventListener ? a.addEventListener(b, c, {
                capture: !1,
                passive: !0
            }) : a.attachEvent(b, c, {
                capture: !1,
                passive: !0
            })
        },
        g = function(a, b, c) {
            var d = {};
            return d.video = a, d.videotype = b, d.settings = c, d
        },
        h = function(a, d, f) {
            var h = a.data(),
                k = a.find("iframe"),
                n = "iframe" + Math.round(1e5 * Math.random() + 1),
                o = h.videoloop,
                p = "loopandnoslidestop" != o;
            if (o = "loop" == o || "loopandnoslidestop" == o, 1 == a.data("forcecover")) {
                a.removeClass("fullscreenvideo").addClass("coverscreenvideo");
                var q = a.data("aspectratio");
                void 0 != q && q.split(":").length > 1 && b.prepareCoveredVideo(q, d, a)
            }
            if (1 == a.data("bgvideo")) {
                var q = a.data("aspectratio");
                void 0 != q && q.split(":").length > 1 && b.prepareCoveredVideo(q, d, a)
            }
            if (k.attr("id", n), f && a.data("startvideonow", !0), 1 !== a.data("videolistenerexist")) switch (h.videotype) {
                case "youtube":
                    var r = new YT.Player(n, {
                        events: {
                            onStateChange: function(c) {
                                var f = a.closest(".tp-simpleresponsive"),
                                    q = (h.videorate, a.data("videostart"), j());
                                if (c.data == YT.PlayerState.PLAYING) punchgs.TweenLite.to(a.find(".tp-videoposter"), .3, {
                                    autoAlpha: 0,
                                    force3D: "auto",
                                    ease: punchgs.Power3.easeInOut
                                }), punchgs.TweenLite.to(a.find("iframe"), .3, {
                                    autoAlpha: 1,
                                    display: "block",
                                    ease: punchgs.Power3.easeInOut
                                }), "mute" == a.data("volume") || b.lastToggleState(a.data("videomutetoggledby")) || d.globalmute === !0 ? r.mute() : (r.unMute(), r.setVolume(parseInt(a.data("volume"), 0) || 75)), d.videoplaying = !0, l(a, d), p ? d.c.trigger("stoptimer") : d.videoplaying = !1, d.c.trigger("revolution.slide.onvideoplay", g(r, "youtube", a.data())), b.toggleState(h.videotoggledby);
                                else {
                                    if (0 == c.data && o) {
                                        var s = e(a.data("videostartat"));
                                        s != -1 && r.seekTo(s), r.playVideo(), b.toggleState(h.videotoggledby)
                                    }!q && (0 == c.data || 2 == c.data) && "on" == a.data("showcoveronpause") && a.find(".tp-videoposter").length > 0 && (punchgs.TweenLite.to(a.find(".tp-videoposter"), .3, {
                                        autoAlpha: 1,
                                        force3D: "auto",
                                        ease: punchgs.Power3.easeInOut
                                    }), punchgs.TweenLite.to(a.find("iframe"), .3, {
                                        autoAlpha: 0,
                                        ease: punchgs.Power3.easeInOut
                                    })), c.data != -1 && 3 != c.data && (d.videoplaying = !1, d.tonpause = !1, m(a, d), f.trigger("starttimer"), d.c.trigger("revolution.slide.onvideostop", g(r, "youtube", a.data())), void 0 != d.currentLayerVideoIsPlaying && d.currentLayerVideoIsPlaying.attr("id") != a.attr("id") || b.unToggleState(h.videotoggledby)), 0 == c.data && 1 == a.data("nextslideatend") ? (i(), a.data("nextslideatend-triggered", 1), d.c.revnext(), m(a, d)) : (m(a, d), d.videoplaying = !1, f.trigger("starttimer"), d.c.trigger("revolution.slide.onvideostop", g(r, "youtube", a.data())), void 0 != d.currentLayerVideoIsPlaying && d.currentLayerVideoIsPlaying.attr("id") != a.attr("id") || b.unToggleState(h.videotoggledby))
                                }
                            },
                            onReady: function(b) {
                                var d = h.videorate;
                                a.data("videostart");
                                if (a.addClass("rs-apiready"), void 0 != d && b.target.setPlaybackRate(parseFloat(d)), a.find(".tp-videoposter").unbind("click"), a.find(".tp-videoposter").click(function() {
                                        c || r.playVideo()
                                    }), a.data("startvideonow")) {
                                    h.player.playVideo();
                                    var g = e(a.data("videostartat"));
                                    g != -1 && h.player.seekTo(g)
                                }
                                a.data("videolistenerexist", 1)
                            }
                        }
                    });
                    a.data("player", r);
                    break;
                case "vimeo":
                    for (var w, s = k.attr("src"), t = {}, u = s, v = /([^&=]+)=([^&]*)/g; w = v.exec(u);) t[decodeURIComponent(w[1])] = decodeURIComponent(w[2]);
                    s = void 0 != t.player_id ? s.replace(t.player_id, n) : s + "&player_id=" + n;
                    try {
                        s = s.replace("api=0", "api=1")
                    } catch (a) {}
                    s += "&api=1", k.attr("src", s);
                    var r = a.find("iframe")[0],
                        y = (jQuery("#" + n), $f(n));
                    y.addEvent("ready", function() {
                        if (a.addClass("rs-apiready"), y.addEvent("play", function(c) {
                                a.data("nextslidecalled", 0), punchgs.TweenLite.to(a.find(".tp-videoposter"), .3, {
                                    autoAlpha: 0,
                                    force3D: "auto",
                                    ease: punchgs.Power3.easeInOut
                                }), punchgs.TweenLite.to(a.find("iframe"), .3, {
                                    autoAlpha: 1,
                                    display: "block",
                                    ease: punchgs.Power3.easeInOut
                                }), d.c.trigger("revolution.slide.onvideoplay", g(y, "vimeo", a.data())), d.videoplaying = !0, l(a, d), p ? d.c.trigger("stoptimer") : d.videoplaying = !1, "mute" == a.data("volume") || b.lastToggleState(a.data("videomutetoggledby")) || d.globalmute === !0 ? y.api("setVolume", "0") : y.api("setVolume", parseInt(a.data("volume"), 0) / 100 || .75), b.toggleState(h.videotoggledby)
                            }), y.addEvent("playProgress", function(b) {
                                var c = e(a.data("videoendat"));
                                if (a.data("currenttime", b.seconds), 0 != c && Math.abs(c - b.seconds) < .3 && c > b.seconds && 1 != a.data("nextslidecalled"))
                                    if (o) {
                                        y.api("play");
                                        var f = e(a.data("videostartat"));
                                        f != -1 && y.api("seekTo", f)
                                    } else 1 == a.data("nextslideatend") && (a.data("nextslideatend-triggered", 1), a.data("nextslidecalled", 1), d.c.revnext()), y.api("pause")
                            }), y.addEvent("finish", function(c) {
                                m(a, d), d.videoplaying = !1, d.c.trigger("starttimer"), d.c.trigger("revolution.slide.onvideostop", g(y, "vimeo", a.data())), 1 == a.data("nextslideatend") && (a.data("nextslideatend-triggered", 1), d.c.revnext()), void 0 != d.currentLayerVideoIsPlaying && d.currentLayerVideoIsPlaying.attr("id") != a.attr("id") || b.unToggleState(h.videotoggledby)
                            }), y.addEvent("pause", function(c) {
                                a.find(".tp-videoposter").length > 0 && "on" == a.data("showcoveronpause") && (punchgs.TweenLite.to(a.find(".tp-videoposter"), .3, {
                                    autoAlpha: 1,
                                    force3D: "auto",
                                    ease: punchgs.Power3.easeInOut
                                }), punchgs.TweenLite.to(a.find("iframe"), .3, {
                                    autoAlpha: 0,
                                    ease: punchgs.Power3.easeInOut
                                })), d.videoplaying = !1, d.tonpause = !1, m(a, d), d.c.trigger("starttimer"), d.c.trigger("revolution.slide.onvideostop", g(y, "vimeo", a.data())), void 0 != d.currentLayerVideoIsPlaying && d.currentLayerVideoIsPlaying.attr("id") != a.attr("id") || b.unToggleState(h.videotoggledby)
                            }), a.find(".tp-videoposter").unbind("click"), a.find(".tp-videoposter").click(function() {
                                if (!c) return y.api("play"), !1
                            }), a.data("startvideonow")) {
                            y.api("play");
                            var f = e(a.data("videostartat"));
                            f != -1 && y.api("seekTo", f)
                        }
                        a.data("videolistenerexist", 1)
                    })
            } else {
                var z = e(a.data("videostartat"));
                switch (h.videotype) {
                    case "youtube":
                        f && (h.player.playVideo(), z != -1 && h.player.seekTo());
                        break;
                    case "vimeo":
                        if (f) {
                            var y = $f(a.find("iframe").attr("id"));
                            y.api("play"), z != -1 && y.api("seekTo", z)
                        }
                }
            }
        },
        i = function() {
            document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
        },
        j = function() {
            try {
                if (void 0 !== window.fullScreen) return window.fullScreen;
                var a = 5;
                return jQuery.browser.webkit && /Apple Computer/.test(navigator.vendor) && (a = 42), screen.width == window.innerWidth && Math.abs(screen.height - window.innerHeight) < a
            } catch (a) {}
        },
        k = function(a, d, h) {
            if (c && 1 == a.data("disablevideoonmobile")) return !1;
            var k = a.data(),
                n = "html5" == k.audio ? "audio" : "video",
                o = a.find(n),
                p = o[0],
                q = o.parent(),
                r = k.videoloop,
                s = "loopandnoslidestop" != r;
            if (r = "loop" == r || "loopandnoslidestop" == r, q.data("metaloaded", 1), 1 != a.data("bgvideo") || "none" !== k.videoloop && k.videoloop !== !1 || (s = !1), void 0 == o.attr("control") && (0 != a.find(".tp-video-play-button").length || c || a.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'), a.find("video, .tp-poster, .tp-video-play-button").click(function() {
                    a.hasClass("videoisplaying") ? p.pause() : p.play()
                })), 1 == a.data("forcecover") || a.hasClass("fullscreenvideo") || 1 == a.data("bgvideo"))
                if (1 == a.data("forcecover") || 1 == a.data("bgvideo")) {
                    q.addClass("fullcoveredvideo");
                    var t = a.data("aspectratio") || "4:3";
                    b.prepareCoveredVideo(t, d, a)
                } else q.addClass("fullscreenvideo");
            var u = a.find(".tp-vid-play-pause")[0],
                v = a.find(".tp-vid-mute")[0],
                w = a.find(".tp-vid-full-screen")[0],
                x = a.find(".tp-seek-bar")[0],
                y = a.find(".tp-volume-bar")[0];
            void 0 != u && f(u, "click", function() {
                1 == p.paused ? p.play() : p.pause()
            }), void 0 != v && f(v, "click", function() {
                0 == p.muted ? (p.muted = !0, v.innerHTML = "Unmute") : (p.muted = !1, v.innerHTML = "Mute")
            }), void 0 != w && w && f(w, "click", function() {
                p.requestFullscreen ? p.requestFullscreen() : p.mozRequestFullScreen ? p.mozRequestFullScreen() : p.webkitRequestFullscreen && p.webkitRequestFullscreen()
            }), void 0 != x && (f(x, "change", function() {
                var a = p.duration * (x.value / 100);
                p.currentTime = a
            }), f(x, "mousedown", function() {
                a.addClass("seekbardragged"), p.pause()
            }), f(x, "mouseup", function() {
                a.removeClass("seekbardragged"), p.play()
            })), f(p, "canplaythrough", function() {
                b.preLoadAudioDone(a, d, "canplaythrough")
            }), f(p, "canplay", function() {
                b.preLoadAudioDone(a, d, "canplay")
            }), f(p, "progress", function() {
                b.preLoadAudioDone(a, d, "progress")
            }), f(p, "timeupdate", function() {
                var b = 100 / p.duration * p.currentTime,
                    c = e(a.data("videoendat")),
                    f = p.currentTime;
                if (void 0 != x && (x.value = b), 0 != c && c != -1 && Math.abs(c - f) <= .3 && c > f && 1 != a.data("nextslidecalled"))
                    if (r) {
                        p.play();
                        var g = e(a.data("videostartat"));
                        g != -1 && (p.currentTime = g)
                    } else 1 == a.data("nextslideatend") && (a.data("nextslideatend-triggered", 1), a.data("nextslidecalled", 1), d.just_called_nextslide_at_htmltimer = !0, d.c.revnext(), setTimeout(function() {
                        d.just_called_nextslide_at_htmltimer = !1
                    }, 1e3)), p.pause()
            }), void 0 != y && f(y, "change", function() {
                p.volume = y.value
            }), f(p, "play", function() {
                a.data("nextslidecalled", 0);
                var c = a.data("volume");
                c = void 0 != c && "mute" != c ? parseFloat(c) / 100 : c, d.globalmute === !0 ? p.muted = !0 : p.muted = !1, c > 1 && (c /= 100), "mute" == c ? p.muted = !0 : void 0 != c && (p.volume = c), a.addClass("videoisplaying");
                var e = "html5" == k.audio ? "audio" : "video";
                l(a, d), s && "audio" != e ? (d.videoplaying = !0, d.c.trigger("stoptimer"), d.c.trigger("revolution.slide.onvideoplay", g(p, "html5", k))) : (d.videoplaying = !1, "audio" != e && d.c.trigger("starttimer"), d.c.trigger("revolution.slide.onvideostop", g(p, "html5", k))), punchgs.TweenLite.to(a.find(".tp-videoposter"), .3, {
                    autoAlpha: 0,
                    force3D: "auto",
                    ease: punchgs.Power3.easeInOut
                }), punchgs.TweenLite.to(a.find(e), .3, {
                    autoAlpha: 1,
                    display: "block",
                    ease: punchgs.Power3.easeInOut
                });
                var f = a.find(".tp-vid-play-pause")[0],
                    h = a.find(".tp-vid-mute")[0];
                void 0 != f && (f.innerHTML = "Pause"), void 0 != h && p.muted && (h.innerHTML = "Unmute"), b.toggleState(k.videotoggledby)
            }), f(p, "pause", function() {
                var c = "html5" == k.audio ? "audio" : "video",
                    e = j();
                !e && a.find(".tp-videoposter").length > 0 && "on" == a.data("showcoveronpause") && !a.hasClass("seekbardragged") && (punchgs.TweenLite.to(a.find(".tp-videoposter"), .3, {
                    autoAlpha: 1,
                    force3D: "auto",
                    ease: punchgs.Power3.easeInOut
                }), punchgs.TweenLite.to(a.find(c), .3, {
                    autoAlpha: 0,
                    ease: punchgs.Power3.easeInOut
                })), a.removeClass("videoisplaying"), d.videoplaying = !1, m(a, d), "audio" != c && d.c.trigger("starttimer"), d.c.trigger("revolution.slide.onvideostop", g(p, "html5", a.data()));
                var f = a.find(".tp-vid-play-pause")[0];
                void 0 != f && (f.innerHTML = "Play"), void 0 != d.currentLayerVideoIsPlaying && d.currentLayerVideoIsPlaying.attr("id") != a.attr("id") || b.unToggleState(k.videotoggledby)
            }), f(p, "ended", function() {
                i(), m(a, d), d.videoplaying = !1, m(a, d), "audio" != n && d.c.trigger("starttimer"), d.c.trigger("revolution.slide.onvideostop", g(p, "html5", a.data())), a.data("nextslideatend") === !0 && p.currentTime > 0 && (1 == !d.just_called_nextslide_at_htmltimer && (a.data("nextslideatend-triggered", 1), d.c.revnext(), d.just_called_nextslide_at_htmltimer = !0), setTimeout(function() {
                    d.just_called_nextslide_at_htmltimer = !1
                }, 1500)), a.removeClass("videoisplaying")
            })
        },
        l = function(a, c) {
            void 0 == c.playingvideos && (c.playingvideos = new Array), a.data("stopallvideos") && void 0 != c.playingvideos && c.playingvideos.length > 0 && (c.lastplayedvideos = jQuery.extend(!0, [], c.playingvideos), jQuery.each(c.playingvideos, function(a, d) {
                b.stopVideo(d, c)
            })), c.playingvideos.push(a), c.currentLayerVideoIsPlaying = a
        },
        m = function(a, b) {
            void 0 != b.playingvideos && jQuery.inArray(a, b.playingvideos) >= 0 && b.playingvideos.splice(jQuery.inArray(a, b.playingvideos), 1)
        }
}(jQuery);