import { ruruHTML } from "ruru/server";
import cors from "cors";
import express from "express";
import { createServer } from "http";
import { appError } from "./src/common/app-error/app-error.error";
import { initGoogleAuth20 } from "./src/common/passport/google-auth20.passport";
import { initSocket } from "./src/common/socket/init.socket";
import rootRouter from "./src/routers/root.router";
import { createHandler } from "graphql-http/lib/use/express";
import { schema } from "./src/common/graphql/schema.graphql";
import { root } from "./src/common/graphql/root.graphql";
import { protectGraphQL } from "./src/common/graphql/protect.graphql";

const app = express();

app.use(express.static("public"))
// Giúp body nhận được dữ liệu
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000", "google.com"],
    })
);

initGoogleAuth20();

// Serve the GraphiQL IDE
app.get("/ruru", (_req, res) => {
    res.type("html");
    res.end(ruruHTML({ endpoint: "/graphql" }));
});

// Create and use the GraphQL handler
app.all(
    "/graphql",
    createHandler({
        schema: schema,
        rootValue: root,
        context: async (req) => {
            // 1) user
            // 2) null
            const user = await protectGraphQL(req);
            return { user: user };
        },
    })
);

app.use("/api", rootRouter);

app.use(appError);

const httpServer = createServer(app);
initSocket(httpServer);
const port = 3069;
httpServer.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

/** tự động lưu vào kết quả vào biến môi trường trong postman
 * để mỗi lần lấy token mới không cần thao tác thủ công copy nữa
const data = pm.response.json()

pm.globals.set("accessToken",  data.data.accessToken )
pm.globals.set("refreshToken",  data.data.refreshToken )
 */
