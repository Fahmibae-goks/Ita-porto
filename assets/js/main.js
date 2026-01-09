const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  navMenu.style.display = navMenu.classList.contains("show") ? "flex" : "none";
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const company = document.getElementById("company").value;
  const message = document.getElementById("message").value;

  const phoneNumber = "+6281226732523"; // GANTI NOMOR WA
  const text = `Halo Ita,%0A
Nama: ${name}%0A
Perusahaan: ${company}%0A
Pesan: ${message}%0A
Saya tertarik untuk mendiskusikan peluang kerja.`;

  const whatsappURL = `https://wa.me/${+6281226732523}?text=${text}`;
  window.open(whatsappURL, "_blank");
});
