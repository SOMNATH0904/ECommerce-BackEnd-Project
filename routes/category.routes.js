/**
 * POST localhost:8080/ecom/api/e1/categories
 */

const authMw = require("../middlewares/auth.mw")

category_controller = require("../controllers/category.controller")
auth_mw = require("../middlewares/auth.mw")

module.exports = (app) => {
    app.post("/ecom/api/e1/categories",[auth_mw.verifyToken, authMw.isAdmin], category_controller.createNewCategory)
}