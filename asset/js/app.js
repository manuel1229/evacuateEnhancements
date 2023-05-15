function login(event) {
    event.preventDefault()
    }
    function logout() {
    }
    /*============karl js=============*/
    const backToTop = document.querySelector(".backToTop");
    if (typeof backToTop !== 'undefined' && backToTop !== null) {
       window.addEventListener("scroll", function () {
         if (window.scrollY >= 150) {
           backToTop.classList.add("visible");
         } else {
           backToTop.classList.remove("visible");
         }
       });
       backToTop.addEventListener("click", function () {
         window.scrollTo({
           top: 0,
           behavior: 'smooth'
         });
       });
     }