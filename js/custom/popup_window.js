function welcome() { // 欢迎弹窗
    Swal.fire({
        title: ' 欢迎！',
        html: "<div class = 'welcome-swal-html'><i class='iconfont icon-lihua'></i> 欢迎来到 Juruoer 的博客！</br> <i class='iconfont icon-yinle1'></i> 左下角可以打开博客歌单，不知道有没有合你胃口的音乐呢？</br > <i class='iconfont icon-shezhi1'></i> 右下角点击 <i class= 'fas fa-cog fa-spin'></i > 可以展开更多设置。</div>",
        // html: "<i class='iconfont icon-lihua'></i> 欢迎来到 Juruoer 的博客！</br> <i class='iconfont icon-yinle1'></i> 左下角可以打开音乐播放器，不知道有没有合你胃口的音乐呢？</br > <i class='iconfont icon-shezhi1'></i> 右下角点击 <i class= 'fas fa-cog fa-spin'></i > 可以展开更多设置。",
        allowOutsideClick: false,
        width: '25rem'
    });
}
$(document).ready(() => {
    welcome()
})

document.addEventListener("copy", function () { // 复制弹窗
        Swal.fire({
            title: ' 复制成功！',
            position: 'top-end',
            type: 'success',
            toast: true,
            showConfirmButton: false,
            timer: 1500
    });
});