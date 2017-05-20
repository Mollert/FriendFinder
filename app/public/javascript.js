
var userInfo = [];
var userLikes = [];
var friendsArray;
// When HTML loads, go get friendsArray and make it available
$(document).ready(function(){
	$.getJSON("/api/friends", null, function(data){
		friendsArray = data;
	});
})
// On submit click I capture the name, photo link, and all 10 radio buttons
// Then find the friend, load the Modal and clear the Feild
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
	userInfo.push(userLikes);

	findLowestFriend()
	loadModal()
	clearFeild()
	saveUser()
});

//console.log(userInfo);
//console.log(userLikes);
//Here I look at each friend and compair their score to users to find the closest match
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
//	console.log(lowestNum);
//	console.log(friendsArray[friend]);
};
//Loading the Modal with best friend match and showing Modal
function loadModal() {
	$(".friendname").text(friendsArray[friend].name);
	$("#friendphoto").attr("src", friendsArray[friend].photo);
	$("#thefriend").modal('show');
};
// Clearing the feilds
function clearFeild() {
	$("#inputName").val("");
	$("#inputLink").val("");
	for (i = 0 ; i < 10 ; i++) {
		var firstString = "name=inlineRadioOptions" + (i+1);
		var secondString = "input[" + firstString + "]";
		var value = $(secondString).prop("checked", false);
	}
};

function saveUser() {
	$.ajax({url:"/api/frends", userInfo});
};