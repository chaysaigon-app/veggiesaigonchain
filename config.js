// config.js — Veggie Saigon System
// Thay đổi BRANCH_ID để deploy cho từng chi nhánh riêng
// Hoặc để trống "" để dùng chế độ chọn chi nhánh động qua URL ?store=ID

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCRkd3-uyccqFYq6jWbrIOTsB2ehVt8wK4",
  authDomain: "veggiesaigonchain.firebaseapp.com",
  projectId: "veggiesaigonchain",
  storageBucket: "veggiesaigonchain.firebasestorage.app",
  messagingSenderId: "1074182475091",
  appId: "1:1074182475091:web:32ad6ef9717256b88f25a6"
};

// Nếu deploy cho 1 chi nhánh cụ thể, điền ID vào đây (để trống là cho phép khách tự chọn chi nhánh):
export const DEFAULT_BRANCH_ID = "";

// QUAN TRỌNG: Email Super Admin (Có toàn quyền hệ thống)
// HÃY THAY BẰNG EMAIL GOOGLE THẬT CỦA BẠN ĐỂ ĐĂNG NHẬP VÀO TRANG ADMIN
export const SUPER_ADMIN_EMAIL = "chaysaigon@gmail.com"; 

// EmailJS (tuỳ chọn — dành cho tính năng gửi hoá đơn PDF qua email)
export const EMAILJS_CONFIG = {
  serviceId:  "service_xxxx",
  templateId: "template_xxxx",
  publicKey:  "YOUR_EMAILJS_PUBLIC_KEY"
};
