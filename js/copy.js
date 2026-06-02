// Klikk på et fargekort for å kopiere hex-verdien til utklippstavlen.
document.addEventListener("click", function (event) {
  const swatch = event.target.closest(".swatch");
  if (!swatch) return;

  const hex = swatch.dataset.hex || swatch.querySelector(".swatch__hex")?.textContent?.trim();
  if (!hex) return;

  navigator.clipboard?.writeText(hex).then(function () {
    swatch.classList.add("copied");
    setTimeout(function () { swatch.classList.remove("copied"); }, 1200);
  });
});
