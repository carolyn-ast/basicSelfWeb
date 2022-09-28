var express = require("express");
var router = express.Router();


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home Page" });
});

// GET about page
router.get("/about", function (req, res, next) {
  res.render("about",{ title: "About Me" });
});

//GET contact page
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact Me" });

});

//Post contact page
router.post("/contact", function (req, res, next) {
  //console.log(request.body);
  var fullName = req.body.txt1;
  var phoneNum = req.body.phoneNum;
  var Email = req.body.Email;
  var msg = req.body.msg;
  res.render("ans",{msg:fullName});

});


//GET project page
router.get("/project", function (req, res, next) {
  res.render("project",{ title: "project" });
});

//GET project page
router.get("/services", function (req, res, next) {
  res.render("services",{ title: "services" });
});

module.exports = router;
