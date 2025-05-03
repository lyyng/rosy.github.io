// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {
  const nutTru = document.querySelector('.quantity-selector button:first-child');
  const nutCong = document.querySelector('.quantity-selector button:last-child');
  const oSoLuong = document.querySelector('.quantity-selector input');

  nutTru.addEventListener('click', function () {
    let soLuong = parseInt(oSoLuong.value);
    if (!isNaN(soLuong) && soLuong > 1) {
      oSoLuong.value = soLuong - 1;
    }
  });

  nutCong.addEventListener('click', function () {
    let soLuong = parseInt(oSoLuong.value);
    if (!isNaN(soLuong)) {
      oSoLuong.value = soLuong + 1;
    }
  });
});
