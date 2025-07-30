import "dotenv/config";

export const DATABASE_URL = process.env.DATABASE_URL;

// log tạm trong lúc dev để kiểm tra có nạp được env hay không
// khi lên production chạy thật cho khách hàng thì xoá dòng log đi
console.log({ DATABASE_URL });
