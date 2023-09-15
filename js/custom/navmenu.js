// 返回顶部 显示网页阅读进度
// window.onscroll = percent; // 执行函数
window.addEventListener("scroll", percent)
// 页面百分比
function percent() {
    let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
        b =
            Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.offsetHeight,
                document.body.clientHeight,
                document.documentElement.clientHeight
            ) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
        result = Math.round((a / b) * 100), // 计算百分比
        btn = document.querySelector("#percent"); // 获取图标

    result <= 99 || (result = 99), (btn.innerHTML = result);
}


function percent() {
    let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
        result = Math.round(a / b * 100), // 计算百分比
        btn = document.querySelector("#percent"); // 获取按钮
    //滚动条高度+视窗高度 = 可见区域底部高度
    var visibleBottom = window.scrollY + document.documentElement.clientHeight;
    // 获取位置监测容器，此处采用评论区
    var eventlistner = document.getElementById('post-tools') || document.getElementById('footer');
    var centerY = eventlistner.offsetTop + (eventlistner.offsetHeight / 2);
    if ((centerY < visibleBottom) || (result > 90)) {
        document.querySelector("#nav-totop").classList.add("long");
        btn.innerHTML = "返回顶部";
    } else {
        document.querySelector("#nav-totop").classList.remove("long");
        if (result >= 0) {
            btn.innerHTML = result;
        }
    }
}

document.getElementById("page-name").innerText = document.title.split(" | Juruoer")[0];