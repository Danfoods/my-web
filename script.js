// Menu Responsive (nếu muốn thêm menu mobile thì code ở đây)
// Form liên hệ (giả lập)
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('formResult').textContent = 'Cảm ơn bạn đã gửi liên hệ! Đan Foods sẽ phản hồi trong thời gian sớm nhất.';
      form.reset();
    });
  }
});
