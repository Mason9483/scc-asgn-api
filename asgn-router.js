

let router = require("express").Router();
var controller = require("./asgn-controller.js");

router.get("/", function (req, res) {
    res.json({
        status: "API is Functioning.",
        message: "Welcome to the Assignment Organizer API."
    });
});

router.route("/assignments")
    .get(controller.list)
    .post(controller.create);

router.route("/assignments/:assignment_id")
    .get(controller.view)
    .put(controller.update)
    .delete(controller.delete);

module.exports = router;