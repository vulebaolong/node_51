import { responseSuccess } from "../common/helpers/response.helper";
import { roleService } from "../services/role.service";

export const roleController = {
   create: async function (req, res, next) {
      const result = await roleService.create(req);
      const response = responseSuccess(result, `Create article successfully`);
      res.status(response.statusCode).json(response);
   },

   findAll: async function (req, res, next) {
      const result = await roleService.findAll(req);
      const response = responseSuccess(result, `Get all articles successfully`);
      res.status(response.statusCode).json(response);
   },

   toggleIsActive: async function (req, res, next) {
      const result = await roleService.toggleIsActive(req);
      const response = responseSuccess(result, `Toggle Is Active Role successfully`);
      res.status(response.statusCode).json(response);
   },

   findOne: async function (req, res, next) {
      const result = await roleService.findOne(req);
      const response = responseSuccess(result, `Get article #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   },

   update: async function (req, res, next) {
      const result = await roleService.update(req);
      const response = responseSuccess(result, `Update article #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   },

   remove: async function (req, res, next) {
      const result = await roleService.remove(req);
      const response = responseSuccess(result, `Remove article #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   }
};