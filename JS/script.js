document.getElementById("tahun").textContent =
  new Date().getFullYear();

// Ganti dengan nomor WhatsApp penjual.
// Gunakan kode negara 62 tanpa tanda +.
const nomorWhatsApp = "6281234567890";

function pesan(namaProduk) {
  const teks =
    "Halo, saya ingin memesan " +
    namaProduk +
    " dari Basreng Abi Renyah. Mohon informasi harganya.";

  bukaWhatsApp(teks);
}

function hubungiPenjual() {
  const teks =
    "Halo Basreng Abi Renyah, saya ingin bertanya " +
    "tentang produk, harga, dan pemesanan.";

  bukaWhatsApp(teks);
}

function bukaWhatsApp(teks) {
  const url =
    "https://wa.me/" +
    nomorWhatsApp +
    "?text=" +
    encodeURIComponent(teks);

  window.open(url, "_blank");
}
