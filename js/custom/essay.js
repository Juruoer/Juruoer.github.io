function waterfall(a) {
    function b(a, b) {
        var c = window.getComputedStyle(b);
        return parseFloat(c["margin" + a]) || 0;
    }
    function c(a) {
        return a + "px";
    }
    function d(a) {
        return parseFloat(a.style.top);
    }
    function e(a) {
        return parseFloat(a.style.left);
    }
    function f(a) {
        return a.clientWidth;
    }
    function g(a) {
        return a.clientHeight;
    }
    function h(a) {
        return d(a) + g(a) + b("Bottom", a);
    }
    function i(a) {
        return e(a) + f(a) + b("Right", a);
    }
    function j(a) {
        a = a.sort(function (a, b) {
            return h(a) === h(b) ? e(b) - e(a) : h(b) - h(a);
        });
    }
    function k(b) {
        f(a) != t && (b.target.removeEventListener(b.type, arguments.callee), waterfall(a));
    }
    "string" == typeof a && (a = document.querySelector(a));
    var l = [].map.call(a.children, function (a) {
        return (a.style.position = "absolute"), a;
    });
    a.style.position = "relative";
    var m = [];
    l.length && ((l[0].style.top = "0px"), (l[0].style.left = c(b("Left", l[0]))), m.push(l[0]));
    for (var n = 1; n < l.length; n++) {
        var o = l[n - 1],
            p = l[n],
            q = i(o) + f(p) <= f(a);
        if (!q) break;
        (p.style.top = o.style.top), (p.style.left = c(i(o) + b("Left", p))), m.push(p);
    }
    for (; n < l.length; n++) {
        j(m);
        var p = l[n],
            r = m.pop();
        (p.style.top = c(h(r) + b("Top", p))), (p.style.left = c(e(r))), m.push(p);
    }
    j(m);
    var s = m[0];
    a.style.height = c(h(s) + b("Bottom", s));
    var t = f(a);
    window.addEventListener ? window.addEventListener("resize", k) : (document.body.onresize = k);
}

var percentFlag = false; // 节流阀
function essayScroll() {
    let a = document.documentElement.scrollTop || window.pageYOffset; // 卷去高度
    const waterfallResult = a % document.documentElement.clientHeight; // 卷去一个视口
    result <= 99 || (result = 99);

    if (
        !percentFlag &&
        waterfallResult + 100 >= document.documentElement.clientHeight &&
        document.querySelector("#waterfall")
    ) {
        // console.info(waterfallResult, document.documentElement.clientHeight);
        setTimeout(() => {
            waterfall("#waterfall");
        }, 500);
    } else {
        setTimeout(() => {
            document.querySelector("#waterfall") && waterfall("#waterfall");
        }, 500);
    }

    const r = window.scrollY + document.documentElement.clientHeight;

    let p = document.getElementById("post-comment") || document.getElementById("footer");

    (p.offsetTop + p.offsetHeight / 2 < r || 90 < result) && (percentFlag = true);
}
function replaceAll(e, n, t) {
    return e.split(n).join(t);
}
var anzhiyu = {
    diffDate: function (d, more = false) {
        const dateNow = new Date();
        const datePost = new Date(d);
        const dateDiff = dateNow.getTime() - datePost.getTime();
        const minute = 1000 * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const month = day * 30;

        let result;
        if (more) {
            const monthCount = dateDiff / month;
            const dayCount = dateDiff / day;
            const hourCount = dateDiff / hour;
            const minuteCount = dateDiff / minute;

            if (monthCount >= 1) {
                result = datePost.toLocaleDateString().replace(/\//g, "-");
            } else if (dayCount >= 1) {
                result = parseInt(dayCount) + " " + GLOBAL_CONFIG.date_suffix.day;
            } else if (hourCount >= 1) {
                result = parseInt(hourCount) + " " + GLOBAL_CONFIG.date_suffix.hour;
            } else if (minuteCount >= 1) {
                result = parseInt(minuteCount) + " " + GLOBAL_CONFIG.date_suffix.min;
            } else {
                result = GLOBAL_CONFIG.date_suffix.just;
            }
        } else {
            result = parseInt(dateDiff / day);
        }
        return result;
    },
    changeTimeInEssay: function () {
        document.querySelector("#bber") &&
            document.querySelectorAll("#bber time").forEach(function (e) {
                var t = e,
                    datetime = t.getAttribute("datetime");
                (t.innerText = anzhiyu.diffDate(datetime, true)), (t.style.display = "inline");
            });
    },
    reflashEssayWaterFall: function () {
        document.querySelector("#waterfall") &&
            setTimeout(function () {
                waterfall("#waterfall");
                document.getElementById("waterfall").classList.add("show");
            }, 500);
    },
    commentText: function (txt) {
        const postCommentDom = document.querySelector("#post-comment");
        var domTop = postCommentDom.offsetTop;
        window.scrollTo(0, domTop - 80);
        if (txt == "undefined" || txt == "null") txt = "好棒！";
        function setText() {
            setTimeout(() => {
                var input = document.getElementsByClassName("el-textarea__inner")[0];
                if (!input) setText();
                let evt = document.createEvent("HTMLEvents");
                evt.initEvent("input", true, true);
                let inputValue = replaceAll(txt, "\n", "\n> ");
                input.value = "> " + inputValue + "\n\n";
                input.dispatchEvent(evt);
                input.focus();
                input.setSelectionRange(-1, -1);
                if (document.getElementById("comment-tips")) {
                    document.getElementById("comment-tips").classList.add("show");
                }
            }, 100);
        }
        setText();
    },
    initIndexEssay: function () {
        setTimeout(() => {
            let essay_bar_swiper = new Swiper(".essay_bar_swiper_container", {
                passiveListeners: true,
                direction: "vertical",
                loop: true,
                autoplay: {
                    disableOnInteraction: true,
                    delay: 3000,
                },
                mousewheel: true,
            });

            let essay_bar_comtainer = document.getElementById("bbtalk");
            if (essay_bar_comtainer !== null) {
                essay_bar_comtainer.onmouseenter = function () {
                    essay_bar_swiper.autoplay.stop();
                };
                essay_bar_comtainer.onmouseleave = function () {
                    essay_bar_swiper.autoplay.start();
                };
            }
        }, 100);
    },
};

anzhiyu.initIndexEssay();
anzhiyu.changeTimeInEssay();
anzhiyu.reflashEssayWaterFall();