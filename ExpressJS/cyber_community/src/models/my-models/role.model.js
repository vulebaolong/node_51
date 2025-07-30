import { DataTypes } from "sequelize";
import sequelize from "../../common/sequelize/init.sequelize";

// CODE FIRST: code để tạo ra model và áp vào databsse
// code => databsse
const Role = sequelize.define(
    "Role", // tên sử dụng nội bộ trong code (sequelize)
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(255),
        },
        description: {
            type: DataTypes.STRING(255),
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
        },
        deletedBy: {
            type: DataTypes.INTEGER, // deletedBy INT
            allowNull: false,
            defaultValue: 0,
        },
        isDeleted: {
            type: DataTypes.BOOLEAN, // 0: false | 1: true
            allowNull: false,
            defaultValue: 0,
        },
        deletedAt: {
            type: "TIMESTAMP",
            allowNull: true,
            defaultValue: null,
        },
        createdAt: {
            type: "TIMESTAMP",
            allowNull: false,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
            type: "TIMESTAMP",
            allowNull: false,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        },
    },
    {
        tableName: "Roles", // tên table trong database
        timestamps: false, // default: true, sequelize tự quản lý | false: mình quản lys
    }
);

Role.sync({ alter: false });

export default Role;

// DATABASE FIRST: đi tạo database trước rồi mới kéo vào code
// database => code | dùng thư viện sequelize-auto để kéo vào code

// sequelize-auto -h <host> -d <database> -u <user> -x [password] -p [port]  --dialect [dialect] -c [/path/to/config] -o [/path/to/models] -t [tableName]
// <host>: localhost | 127.0.0.1
// <database>: db_cyber_community
// <user>: root
// [password]: 1234
// [port]: 3307 port bên tay trái docker
// [dialect]: mysql hệ cơ sở dư liệu (mysql, mongodb, postgre, ...)
// [/path/to/config]: đường dẫn file config, hổng sài nên bỏ
// [/path/to/models]: đường dẫn mong muốn chưa model sau khi kéo vào
// [tableName]: chỉ định cụ thể 1 table muốn kéo vào, nếu muốn kéo hết thì bỏ qua tham số này
// -l esm: để quy định syntax cú pháp theo phiên bản es module (import ... from ...)
// -a: thay đổi option của model khi chạy lệnh sequelize-auto


// sequelize-auto -h localhost -d db_cyber_community -u root -x 1234 -p 3307  --dialect mysql -o src/models/sequelize-auto -l esm -a src/models/additional.json
