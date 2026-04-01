// config.js — PhoBut Customer Web Order
// Thay đổi BRANCH_ID để deploy cho từng chi nhánh riêng
// Hoặc để trống "" để dùng chế độ chọn chi nhánh động qua URL ?store=ID

export const FIREBASE_CONFIG = {
  apiKey:    "AIzaSyA0zujbTZbHe_7gAe_y9QkrcR4qXKC6Abo",
  authDomain:"phobut-95574.firebaseapp.com",
  projectId: "phobut-95574"
};

// Nếu deploy cho 1 chi nhánh cụ thể, điền ID vào đây:
// export const DEFAULT_BRANCH_ID = "branch_quan1";
export const DEFAULT_BRANCH_ID = "";

// EmailJS (tuỳ chọn — nếu muốn gửi xác nhận email cho khách)
export const EMAILJS_CONFIG = {
  serviceId:  "service_phobut",
  templateId: "template_order_confirm",
  publicKey:  "YOUR_EMAILJS_PUBLIC_KEY"
};
