document.addEventListener("DOMContentLoaded", function () {
  const productList = document.getElementById("product-list");

  if (!productList) return;

  function loadProducts() {
    const produk = JSON.parse(localStorage.getItem("products")) || [];

    productList.innerHTML = "";

    if (produk.length === 0) {
      productList.innerHTML =
        "<p style='text-align:center;'>Belum ada produk 💛</p>";
      return;
    }

    produk
      .slice()
      .reverse()
      .forEach((item) => {
        productList.innerHTML += `
  <div class="card">

    ${item.badge === "best" ? '<div class="badge best">Best Seller</div>' : ""}
    ${item.badge === "promo" ? '<div class="badge promo">Promo</div>' : ""}

    <img src="images/${item.gambar}" loading="lazy">
    <h3>${item.nama}</h3>
    <p class="price">
      Rp ${Number(item.harga).toLocaleString("id-ID")}
    </p>
    <a href="https://wa.me/62895602016464?text=Hallo Dapur Nek Cua, Saya ingin memesan ${item.nama}" 
       class="order-btn">
       💛 Pesan Untuk Keluarga
    </a>
  </div>
`;
      });
  }

  loadProducts();
  setTimeout(animateOnScroll, 100);
});

function animateOnScroll() {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 },
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
}
