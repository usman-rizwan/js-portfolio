let showLoader = () => {
    let loader = document.getElementById("loader");
    let content = document.getElementById("content");
    loader.classList.toggle("hidden");
    content.classList.toggle("hidden");
    setTimeout(() => {
        loader.classList.toggle("hidden");
        content.classList.toggle("hidden");

    }, 2600);
    content.classList.toggle("hidden");
}
showLoader()
let goTopButton = document.getElementById('goTopButton');

window.addEventListener('scroll',  ()=>{
    if (window.scrollY > 90) { 
        goTopButton.style.display = 'block';
    } else {
        goTopButton.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var animatedContent = document.getElementById('animatedContent');

    function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function animateIfInViewport() {
      if (isInViewport(animatedContent)) {
        animatedContent.classList.add('animate__fadeInLeftBig');
        animatedContent.classList.remove('blur-sm');
        window.removeEventListener('scroll', animateIfInViewport); 
      }
    }

    window.addEventListener('scroll', animateIfInViewport);
  });


document.addEventListener('DOMContentLoaded', function () {
    var myProject = document.getElementById('myProjectz');

    function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function animateIfInViewport() {
      if (isInViewport(myProject)) {
        myProject.classList.add('animate__fadeInLeftBig');
        window.removeEventListener('scroll', animateIfInViewport); 
      }
    }

    window.addEventListener('scroll', animateIfInViewport);
  });