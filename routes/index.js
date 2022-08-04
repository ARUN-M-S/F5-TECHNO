var express = require('express');
var router = express.Router();

const userController = require("../Controller/userController")

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Express' });
});
// ===========================Adding student to the database=====================
router.post("/addStudent",userController.registreUser);

// ===============================To gell all students========================
router.get("/user",userController.getUser);
// ========================To create new Subjetcs=============================
router.post("/subjects",userController.addSubject);
// ==============================To get all subjects==============================
router.get("/subjects",userController.getSubjects);
// ==============================Create New Std==============================

router.post("/standered",userController.newStandered);
// ==============================To get all Std==============================

router.get("/standered",userController.getStandered);
// ==============================To get all Students having maths==============================

router.get("/countOfmaths",userController.countOfMaths);
// ==============================To get all Std having maths==============================

router.get("/stdMaths",userController.countMathsStd);



module.exports = router;
