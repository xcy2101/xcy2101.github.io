var posts=["2025/07/31/hello-world/","2025/08/09/git学习笔记/","2025/08/14/js中的箭头函数/","2025/09/16/八股文-css/","2025/08/14/八股文-js/","2025/09/14/八股文-html/","2025/08/09/八股文-vue/","2025/08/04/测试/","2026/04/19/机器视觉-仪表/","2025/08/05/轮播图测试/","2026/04/21/金蝶erp系统/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };