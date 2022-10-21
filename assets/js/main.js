// Scroll ao clicar em um HREF com ID
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        let href = this.getAttribute("href");
        let elem = document.querySelector(href)||document.querySelector("a[name="+href.substring(1, href.length)+"]");

        window.scroll({
            top: elem.offsetTop, 
            left: 0, 
            behavior: 'smooth' 
        });
    });
});

// Tela de carregamento
window.onload = function(){
    var preloader = document.querySelector('.preloader');
  
    var startTime = new Date().getTime();
    function fadeOut(){
      var passedTime = new Date().getTime() - startTime;
      var opacity = Math.max(250 / (250 - passedTime), 0);
      preloader.style.opacity = opacity;
      if(opacity){
        setTimeout(fadeOut, 0);
      }
    }
    setTimeout(fadeOut, 0);
  }