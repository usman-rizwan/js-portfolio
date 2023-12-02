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
