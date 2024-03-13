const authController = require("../controllers/auth.controller")
const authMW = require("../middlewares/auth.mw")

module.exports = (app) => {

 /**
 * route for signUp
 * POST localhost:8080/ecom/api/e1/auth/signUp
 * 
 * I need to intercept this
 */

    app.post("/ecom/api/e1/auth/signUp", [authMW.verifySignUpBody], authController.signup)

    /**
     * route for signIn
     * POST localhost:8080/ecom/api/e1/auth/signin
     */
    app.post("/ecom/api/e1/auth/signin", [authMW.verifySignInBody], authController.signin)
}