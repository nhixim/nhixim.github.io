document.getElementById("btn").addEventListener("click", function () {
  const thang = parseInt(document.getElementById("thang").value, 10);
  const nam = parseInt(document.getElementById("nam").value, 10);
  const kq = document.getElementById("kq");
  let ngay;
  switch (thang) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12: ngay = 31; break;
    case 4: case 6: case 9: case 11: ngay = 30; break;
    case 2:
      ngay = (!isNaN(nam) && ((nam % 400 === 0) || (nam % 4 === 0 && nam % 100 !== 0))) ? 29 : 28;
      break;
    default: ngay = null;
  }
  if (ngay === null) { kq.className = "result err"; kq.textContent = "Tháng không hợp lệ (1–12)."; return; }
  kq.className = "result ok";
  kq.textContent = "Tháng " + thang + " có " + ngay + " ngày.";
});
