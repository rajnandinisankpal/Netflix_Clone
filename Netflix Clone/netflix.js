$(document).ready(function() {
    $(".plus_icon").click(function() {
        const $faq = $(this).closest(".faq_accordian");
        $faq.find("p").slideToggle();

        const currentSymbol = $(this).text().trim();
        $(this).text(currentSymbol === "+" ? "×" : "+");
    });

    $("#callNumber").click(function (e) {
        e.preventDefault();
        window.location.href = "tel:0008000401843";
    });
      
});

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".trending-carousel");
    const leftBtn = document.querySelector(".scroll-left");
    const rightBtn = document.querySelector(".scroll-right");

    const scrollAmount = 300;

    leftBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});

document.getElementById("languagesSelect").addEventListener("change", function () {
    const selectedLang = this.value;
    if (selectedLang === "hindi") {
        window.location.href = "hindi.html";
    }
    
});

