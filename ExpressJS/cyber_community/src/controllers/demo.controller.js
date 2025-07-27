import demoService from "../services/demo.service"

const demoControler = {
   checkServer: (req, res, next) => {
      const result = demoService.checkServer()
      res.json(result)
   },
   query: async (req, res, next) => {
      const result = await demoService.query(req)
      res.json(result)
   },
   path: (req, res, next) => {
      const result = demoService.path(req)
      res.json(result)
   },
   delete: (req, res, next) => {
      const result = demoService.delete(req)
      res.json(result)
   },
   body: (req, res, next) => {
      const result = demoService.body(req)
      res.json(result)
   }
}

export default demoControler

