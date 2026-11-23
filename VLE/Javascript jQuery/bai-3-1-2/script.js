function laNamNhuan(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}
function soNgayTrongThang(month, year) {
  switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12: return 31;
    case 4: case 6: case 9: case 11: return 30;
    case 2: return laNamNhuan(year) ? 29 : 28;
    default: return null;
  }
}
document.getElementById("btnYear").addEventListener("click", function () {
  const year = parseInt(document.getElementById("year").value, 10);
  const kq = document.getElementById("kqYear");
  if (isNaN(year)) { kq.className = "result err"; kq.textContent = "Năm không hợp lệ."; return; }
  const nhuan = laNamNhuan(year);
  kq.className = "result " + (nhuan ? "ok" : "err");
  kq.textContent = year + ": " + (nhuan ? "năm nhuận" : "năm không nhuận");
  alert(year + ": " + (nhuan ? "năm nhuận" : "năm không nhuận"));
});
document.getElementById("btnThang").addEventListener("click", function () {
  const m = parseInt(document.getElementById("thang").value, 10);
  const y = parseInt(document.getElementById("namThang").value, 10);
  const kq = document.getElementById("kqThang");
  const ngay = soNgayTrongThang(m, y);
  if (ngay === null || isNaN(y)) { kq.className = "result err"; kq.textContent = "Tháng (1–12) hoặc năm không hợp lệ."; return; }
  kq.className = "result ok";
  kq.textContent = "Tháng " + m + " năm " + y + " có " + ngay + " ngày.";
});
