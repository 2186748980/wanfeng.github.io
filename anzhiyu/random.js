var posts=["2024/08/15/如何自己搭建博客/","2026/01/08/测试文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };