// 1. Hover đổi nội dung thẻ div
const box = document.getElementById("hoverBox");
box.addEventListener("mouseover", () => { box.textContent = "Mouse Event"; });
box.addEventListener("mouseout", () => { box.textContent = "Hover Me"; });

// 2. Ảnh tăng kích thước 10% khi rê chuột vào
const anh = document.getElementById("anh");
const rongGoc = anh.width;
anh.addEventListener("mouseover", () => { anh.style.width = rongGoc * 1.1 + "px"; });
anh.addEventListener("mouseout", () => { anh.style.width = rongGoc + "px"; });

// 3. Hiển thị ngày giờ hiện tại
document.getElementById("btnTime").addEventListener("click", () => {
  alert("Bây giờ là: " + new Date().toLocaleString("vi-VN"));
});

// 4. Chuyển chữ in hoa
document.getElementById("btnUpper").addEventListener("click", () => {
  const t = document.getElementById("txt");
  t.value = t.value.toUpperCase();
});
