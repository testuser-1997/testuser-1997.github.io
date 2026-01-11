// 移动端导航菜单切换功能
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    // 创建汉堡菜单按钮
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '☰';
    navToggle.setAttribute('aria-label', '切换导航菜单');
    
    // 在导航栏开头插入按钮
    nav.insertBefore(navToggle, nav.firstChild);
    
    // 点击切换菜单显示/隐藏
    navToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        // 切换图标
        navToggle.innerHTML = nav.classList.contains('active') ? '✕' : '☰';
    });
    
    // 点击导航链接后自动关闭菜单（移动端）
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                navToggle.innerHTML = '☰';
            }
        });
    });
});
