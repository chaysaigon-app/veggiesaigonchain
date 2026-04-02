// ═══════════════════════════════════════════════════════════════
//  config.js — Veggie Saigon Chain · Single Source of Truth
//  Tất cả biến cấu hình tập trung tại đây.
//  Các file HTML import từ đây, KHÔNG hardcode bất kỳ key nào.
// ═══════════════════════════════════════════════════════════════

// ── Firebase ─────────────────────────────────────────────────
export const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCRkd3-uyccqFYq6jWbrIOTsB2ehVt8wK4",
  authDomain:        "veggiesaigonchain.firebaseapp.com",
  projectId:         "veggiesaigonchain",
  storageBucket:     "veggiesaigonchain.firebasestorage.app",
  messagingSenderId: "1074182475091",
  appId:             "1:1074182475091:web:32ad6ef9717256b88f25a6"
};

// ── Super Admin ───────────────────────────────────────────────
// Email này có toàn quyền hệ thống (bypass mọi kiểm tra branch)
export const SUPER_ADMIN_EMAIL = "chaysaigon@gmail.com";

// ── Cloudinary (Upload ảnh) ───────────────────────────────────
export const CLOUDINARY_CLOUD_NAME   = "dym7dwnji";
export const CLOUDINARY_UPLOAD_PRESET = "qjrpdbhs";

// ── EmailJS (Gửi hoá đơn / báo cáo PDF qua email) ────────────
// Đăng ký tại https://www.emailjs.com/ để lấy các giá trị này
export const EMAILJS_CONFIG = {
  serviceId:       "service_xxxx",        // ← Thay bằng Service ID thật
  invoiceTemplate: "template_invoice",    // ← Template gửi hoá đơn
  reportTemplate:  "template_report",     // ← Template gửi báo cáo
  publicKey:       "YOUR_EMAILJS_PUBLIC_KEY" // ← Public Key
};

// ── Customer Web Ordering (index.html) ───────────────────────
// Để trống "" → khách tự chọn chi nhánh qua URL ?store=ID
// Điền ID cụ thể → deploy trang đặt hàng riêng cho 1 chi nhánh
export const DEFAULT_BRANCH_ID = "";

// ── App Settings ─────────────────────────────────────────────
export const APP_NAME      = "Veggie Saigon";
export const APP_LOGO_EMOJI = "🥗";
export const DEFAULT_VAT   = 10; // % — dùng khi branch chưa cấu hình VAT
