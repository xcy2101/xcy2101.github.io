document.addEventListener("scroll", () => {
    const header = document.getElementById("page-header");
    if (!header) return;

    const headerHeight = header.offsetHeight; // 获取header的高度
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    // const maxScroll = 700;

    // 当滚动距离超过header高度时，透明度设为1，否则按原逻辑计算
    let opacity = scrollTop > headerHeight ? 1 : 1 - (scrollTop / headerHeight) * 0.9;
    opacity = Math.max(0.1, Math.min(1, opacity)); // 限制在 0.1~1 范围内

    header.style.opacity = opacity;

    const nav = document.getElementById("nav");
    if (nav) {
        nav.style.opacity = 1;
        nav.style.filter = 'none'; // 清除可能的滤镜影响
    }
});