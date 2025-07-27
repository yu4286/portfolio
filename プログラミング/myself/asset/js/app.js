/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'asset/js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

const btn = document.getElementById("portfolio-button");
const portfolioItems = document.querySelectorAll("#portfolio-item");
const btnText = document.getElementById("button-text");


let isVisible = false;

btn.addEventListener("click", () => {
  portfolioItems.forEach(portfolioItem => {
    portfolioItem.style.display = isVisible ? "none" : "block";
  });

  btnText.innerText = isVisible ? "続きを見る" : "元に戻る";
  isVisible = !isVisible;
});


