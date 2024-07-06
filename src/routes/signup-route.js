const express = require("express");

const router = express.Router();
const signupLogic = require("../controllers/signup");

/**
 * @swagger
 * /signup:
 *   get:
 *      description: Returns a list of users
 *      parameters:
 *          - in: query
 *            name: bookInformation
 *
 *
 */
router.get("/", signupLogic);

module.exports = router;
