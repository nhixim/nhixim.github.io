function timCan(du) {
  switch (du) {
    case 0: return "Canh"; case 1: return "Tân"; case 2: return "Nhâm";
    case 3: return "Quý";  case 4: return "Giáp"; case 5: return "Ất";
    case 6: return "Bính"; case 7: return "Đinh"; case 8: return "Mậu";
    case 9: return "Kỷ";
  }
}
function timChi(du) {
  switch (du) {
    case 0: return "Thân"; case 1: return "Dậu";  case 2: return "Tuất";
    case 3: return "Hợi";  case 4: return "Tý";   case 5: return "Sửu";
    case 6: return "Dần";  case 7: return "Mão";  case 8: return "Thìn";
    case 9: return "Tỵ";   case 10: return "Ngọ"; case 11: return "Mùi";
  }
}
document.getElementById("btn").addEventListener("click", function () {
  const nam = parseInt(document.getElementById("nam_duong_lich").value, 10);
  const kq = document.getElementById("kq");
  if (isNaN(nam) || nam < 0) { kq.className = "result err"; kq.textContent = "Năm không hợp lệ."; return; }
  const can = timCan(nam % 10);
  const chi = timChi(nam % 12);
  kq.className = "result ok";
  kq.textContent = "Năm " + nam + " là năm " + can + " " + chi;
});
