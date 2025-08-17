// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "vulebaolong@gmail.com",
        pass: "aiwbzwpmsexupczb",
    },
});

// Wrap in an async IIFE so we can use await.

export const sendMail = async (mailTo) => {
    const info = await transporter.sendMail({
        from: "vulebaolong@gmail.com",
        to: mailTo,
        subject: "cảnh báo bảo mật",
        text: "Tài khoản có lượt đăng nhập mới", // plain‑text body
        html: "<b>Tài khoản có lượt đăng nhập mới</b>", // HTML body
    });

    console.log("Message sent:", info.messageId);
};
