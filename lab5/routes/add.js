var data = require("../data.json");

exports.addFriend = function(req, res) {
	// Your code goes here
	console.log(data);
	res.render('add', data);
	data["friends"].push(newFriend)


}

