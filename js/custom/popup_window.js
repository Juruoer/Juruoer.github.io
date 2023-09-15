function welcome() { // 欢迎弹窗
    Swal.fire({
        title: ' 欢迎！',
        html: "<div class = 'welcome-swal-html'><i class='iconfont icon-lihua'></i>&ensp;欢迎来到&ensp;Juruoer&ensp;的博客！</br><i class = 'iconfont icon-xingxing'></i>&ensp;首次访问本博客建议先阅读<a href='/about/' target='_blank'>关于</a>页面的版权声明和隐私协议。</br> <i class='iconfont icon-yinle1'></i>&ensp;左下角可以打开博客歌单，不知道有没有合你胃口的音乐呢？</br > <i class='iconfont icon-shezhi1'></i>&ensp;右下角点击&ensp;<i class= 'fas fa-cog fa-spin'></i >&ensp;可以展开更多设置。</div>",
        // html: "<i class='iconfont icon-lihua'></i> 欢迎来到 Juruoer 的博客！</br> <i class='iconfont icon-yinle1'></i> 左下角可以打开音乐播放器，不知道有没有合你胃口的音乐呢？</br > <i class='iconfont icon-shezhi1'></i> 右下角点击 <i class= 'fas fa-cog fa-spin'></i > 可以展开更多设置。",
        allowOutsideClick: false,
        width: '25rem'
    });
}
$(document).ready(() => {
    welcome()
})

// type: warning error success info question

// pos: 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.

function swalBar(tit, txt, type, pos, isMin=true, isTime=true) {
    if (isTime) {
        Swal.fire({
            icon: type,
            title: tit,
            text: txt,
            position: pos,
            toast: isMin,
            showConfirmButton: false,
            timer: 5000,
        });
    }
    else 
    {
        Swal.fire({
            icon: type,
            title: tit,
            text: txt,
            position: pos,
            toast: isMin,
            showConfirmButton: false,
        });
    }
}

document.addEventListener("copy", function () { // 复制弹窗
    swalBar(' 复制成功！','若要转载请标注本文地址！', 'success', 'top-end')
});