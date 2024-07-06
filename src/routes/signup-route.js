const express = require("express");

const router = express.Router();
const signupLogic = require("../controllers/signup");


/**
     * @openapi
     * '/signup':
     *  get:
     *     tags:
     *     summary: get a signup
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
router.get("/", signupLogic);

module.exports = router;
