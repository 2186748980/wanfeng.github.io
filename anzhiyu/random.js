var posts=["2024/08/15/6/","2024/08/15/如何自己搭建博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };