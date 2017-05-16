//var friendsArray = require("./data/friends.js");

var userInfo = [];
var userLikes = [];

$("#submitquest").on("click", function() {
	var inputName = $("#inputName").val().trim();
	userInfo.push(inputName);
	var inputLink = $("#inputLink").val().trim();
	userInfo.push(inputLink);

	for (i = 0 ; i < 10 ; i++) {
		var firstString = "name=inlineRadioOptions" + (i+1);
		var secondString = "input[" + firstString + "]";
		var value = $(secondString).filter(":checked").val();
		value = parseInt(value);
		userLikes.push(value);
	}
	// var value = $("input[name=inlineRadioOptions10]").filter(":checked").val();
	// value = parseInt(value);
	// userLikes.push(value);
	findLowestFriend()
	loadModal()
});

console.log(userInfo);
console.log(userLikes);

 var friendsArray = [
 	{
 		"name": "Anita",
 		"photo": "../data/images/Anita.JPG",
 		"scores": [5, 4, 5, 4, 1, 2, 2, 3, 5, 2]
 	},
 	{
 		"name": "Beth",
 		"photo": "../data/images/Beth.JPG",
 		"scores": [4, 3 ,1, 1, 1, 3, 2, 5, 2, 5]
 	},
 	{
 		"name": "Brad",
 		"photo": "../data/images/Brad.JPG",
 		"scores": [3, 2, 5, 5, 4, 4, 3, 2, 1, 5]
 	},
 	{
 		"name": "Frank",
 		"photo": "../data/images/Frank.JPG",
 		"scores": [2, 2, 1, 5, 4, 4, 5, 3, 2, 2]
 	},
 	{
 		"name": "Henry",
 		"photo": "../data/images/Henry.JPG",
 		"scores": [5, 1, 1, 2, 3, 2, 4, 4, 2, 3]
 	},
 	{
 		"name": "Justin",
 		"photo": "../data/images/Justin.JPG",
 		"scores": [4, 4, 3, 2, 1, 2, 3, 4, 5, 5]
 	},
 	{
 		"name": "Katherine",
 		"photo": "../data/images/Katherine.JPG",
 		"scores": [3, 2, 2, 3, 4, 4, 5, 1, 2, 3]
 	},
 	{
 		"name": "Meghan",
 		"photo": "../data/images/Meghan.JPG",
 		"scores": [4, 5, 4, 5, 3, 3, 2, 1, 2, 5]
 	},
 	{
 		"name": "Sandra",
 		"photo": "../data/images/Sandra.JPG",
 		"scores": [2, 3, 5, 5, 1, 3, 4, 5, 3, 3]
 	},
 	{
 		"name": "William",
 		"photo": "../data/images/William.JPG",
 		"scores": [1, 5, 5, 1, 4, 4, 3, 3, 2, 3]
 	}
 ];

var carrier = 0;
var total = 0;
var lowestNum = 90;
var friend = 0;

function findLowestFriend() {
	for ( i = 0 ; i < friendsArray.length ; i++ ) {
		total = 0;
		for (k = 0 ; k < 10 ; k++) {
			carrier = userLikes[k] - friendsArray[i].scores[k];
			carrier = Math.abs(carrier);
			total = carrier + total;
		}
		if (i > 0) {
			if (total < lowestNum) {
				lowestNum = total;
				friend = i;
			}
		}
	}
	console.log(lowestNum);
	console.log(friendsArray[friend]);
};

function loadModal() {
	$(".friendname").text(friendsArray[friend].name);
	$("#friendphoto").attr("src", friendsArray[friend].photo);
	$("#thefriend").modal('show');
};
