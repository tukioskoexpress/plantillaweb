
/* ====================
 * BUSCADOR / SEARCH *
==================== */
document.querySelector(".btn-search").addEventListener("click", () => {
	document.querySelector(".btn-cerrar").style.display = "block";
	document.querySelector(".search__form").style.display = "block";
	document.querySelector("#search__form-box").style.display = "block";
	document.querySelector(".bg-overlay2").style.display = "block";
});
document.querySelector(".btn-cerrar").addEventListener("click", () => {
	document.querySelector(".btn-cerrar").style.display = "none";
	document.querySelector(".search__form").style.display = "none";
	document.querySelector("#search__form-box").style.display = "none";
	document.querySelector(".bg-overlay2").style.display = "none";
});

/* ====================
 * MODO OSCURO *
==================== */
var icono = document.getElementById("icono-dark");
icono.onclick = function(){
	document.body.classList.toggle("modo-dark");
}