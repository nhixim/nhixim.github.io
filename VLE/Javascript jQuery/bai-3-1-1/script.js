document.getElementById("btn").addEventListener("click", function () {
  const goc = parseFloat(document.getElementById("goc").value);
  const laiSuat = parseFloat(document.getElementById("laisuat").value);
  const n = parseFloat(document.getElementById("nam").value);
  const kq = document.getElementById("kq");
  if ([goc, laiSuat, n].some(isNaN) || goc < 0 || laiSuat < 0 || n < 0) {
    kq.className = "result err";
    kq.textContent = "Vui lòng nhập các số hợp lệ (không âm).";
    return;
  }
  const laiMoiNam = goc * laiSuat / 100;
  const tong = goc + n * laiMoiNam;
  kq.className = "result ok";
  kq.innerHTML = "Lãi mỗi năm: " + laiMoiNam + " triệu đồng<br>" +
    "Sau " + n + " năm, số tiền cả gốc lẫn lãi: " + tong + " triệu đồng";
});
