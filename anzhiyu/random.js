var posts=["2025/08/04/测试/","2025/07/31/hello-world/","2025/08/05/轮播图测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };