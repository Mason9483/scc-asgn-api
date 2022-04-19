

const Assignment = require("./asgn-model");

// Gets all assignments for db
exports.list = function (req, res) {
	Assignment.get(function (err, assignments) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		res.json({
			status: "success",
			message: "Assignments pulled",
			data: contacts
		});
	});
}

exports.create = function (req, res) {
    var assignment = new Assignment();
    course.name = req.body.name ? req.body.name : course.name;
    assignment.name = req.body.name ? req.body.name : assignment.name;
    assignment.date = req.body.date

    assignment.save(function (err){
        if (err) {
            res.json(err);
        }
        res.json({
            message: 'New assignment added',
            data: assignment
        });
    });
};

exports.view = function (req, res) {
    Assignment.findbyId(req.params.contact_id, function (err, assignment) {
        if (err) {
            res.send(err);
        }
        res.json({
            message: 'Finding assignment details',
            data: assignment
        });
    });
};

exports.update = function (req, res) {
    Assignment.findbyId(req.params.contact_id, function (err, assignment) {
        if (err) {
            res.send(err);
        }
        course.name = req.body.name ? req.body.name : course.name;
        assignment.name = req.body.name ? req.body.name : assignment.name;
        assignment.date = req.body.date

        assignment.save(function (err) {
            if (err) {
                res.json(err);
            }
            res.json({
                message: 'Assignments updated',
                data: assignment
            });
        });
    });
};

exports.delete = function (req,res) {
    Assignment.remove({
        _id: req.params.assignment_id
    }, function (err, assignment) {
        if (err) {
            res.send(err);
        }
        res.json(
            {
                status: 'complete',
                message: 'Assignment removed'
            });
    });
};