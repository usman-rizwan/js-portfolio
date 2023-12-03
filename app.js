let showLoader = () => {
    let loader = document.getElementById("loader");
    let content = document.getElementById("content");
    loader.classList.toggle("hidden");
    content.classList.toggle("hidden");
    setTimeout(() => {
        loader.classList.toggle("hidden");
        content.classList.toggle("hidden");

    }, 2000);
    content.classList.toggle("hidden");
}
showLoader()
let goTopButton = document.getElementById('goTopButton');

window.addEventListener('scroll', function () {

    if (window.scrollY > 90) { 
        goTopButton.style.display = 'block';
    } else {
        goTopButton.style.display = 'none';
    }
});