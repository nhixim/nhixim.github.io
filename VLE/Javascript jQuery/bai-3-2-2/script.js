// Chuẩn hoá: bỏ dấu, chữ thường, bỏ khoảng trắng thừa (để gõ "mang cut" vẫn tìm được)
function chuanHoa(s) {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/\s+/g, " ");
}
function xemGia() {
  const ten = chuanHoa(document.getElementById("ten_hoa_qua").value);
  const kq = document.getElementById("kq");
  let gia;
  switch (ten) {
    case "oi": case "dua hau": gia = 20000; break;
    case "tao": gia = 30000; break;
    case "cam": case "chom chom": gia = 40000; break;
    case "mang cut": gia = 50000; break;
    default: gia = null;
  }
  if (gia === null) { kq.className = "result err"; kq.textContent = "Tìm không thấy"; }
  else { kq.className = "result ok"; kq.textContent = gia + " VND/kg"; }
}
document.getElementById("btn").addEventListener("click", xemGia);
document.getElementById("ten_hoa_qua").addEventListener("keydown", e => { if (e.key === "Enter") xemGia(); });
