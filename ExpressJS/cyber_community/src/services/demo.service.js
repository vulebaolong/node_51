import pool from "../common/mysql2/init.myslq2"

const demoService = {
   checkServer: () => {
      return "Hello world"
   },
   query: async (req) => {
      const query = req.query

      const [rows, fields] = await pool.query('SELECT * FROM `Roles`');

      console.log({ rows, fields });


      return {
         message: "Xử lý dữ liệu ở Query",
         data: rows
      }
   },
   path: (req) => {
      const param = req.params

      console.log({ param });

      return {
         message: "Xử lý dữ liệu ở path parameter",
         data: param
      }
   },
   delete: (req) => {
      const headers = req.headers

      const { token } = headers
      console.log({ token });
      return {
         message: "Xử lý dữ liệu ở Headers",
         data: headers
      }
   },
   body: (req) => {
      const body = req.body

      return {
         message: "Xử lý dữ liệu ở body",
         data: body
      }
   }
}

export default demoService