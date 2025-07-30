import { Sequelize } from "sequelize";
import { DATABASE_URL } from "../constant/app.constant";

const sequelize = new Sequelize(DATABASE_URL, { logging: true }); // Example for postgres

try {
    await sequelize.authenticate();
    console.log("SEQUELIZE: \t Connection successfully.");
} catch (error) {
    console.error("SEQUELIZE: \t Conntection error", error);
}

export default sequelize;
