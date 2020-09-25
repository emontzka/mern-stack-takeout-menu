const express = require("express");
const router = express.Router();
var jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt"); // for authorization check

const {
  signup,
  signin,
  signout,
  requireSignin,
} = require("../controllers/auth");
const { userSignupValidator } = require("../validator");

router.get(
  "/auth",
  // expressJwt({ secret: process.env.JWT_SECRET, userProperty: "auth" }),
  (req, res) => {
    const token = req.header("Authorization");
    console.log("token is ", token);
    console.log("secret is ", process.env.JWT_SECRET);
    // console.log("req is ", req.headers);

    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    try {
      // const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log("result is ", jwt.verify(token, process.env.JWT_SECRET));

      // console.log(decoded);
    } catch (error) {
      console.log("error here ", error);
    }
    // console.log("decoded ", decoded);

    // console.log("require sign in ", requireSignin);

    //verify token
    // try {
    // const decoded = jwt.verify(token, config.get("jwtSecret"));
    // req.user = decoded.user;
    // console.log("user is ", req.user);
    // } catch (error) {
    // res.status(401).json({ msg: "Token is not valid" });
    // }
  }
);
router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
