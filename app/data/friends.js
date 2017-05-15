
var friendsArray = [
	{
		"name": "Anita",
		"photo": "/images/Anita.JPG",
		"scores": [5, 4, 5, 4, 1, 2, 2, 3, 5, 2]
	}, 
	{
		"name": "Beth",
		"photo": "/images/Beth.JPG",
		"scores": [4, 3 ,1, 1, 1, 3, 2, 5, 2, 5]
	},
	{
		"name": "Brad",
		"photo": "/images/Brad.JPG",
		"scores": [3, 2, 5, 5, 4, 4, 3, 2, 1, 5]
	},
	{
		"name": "Frank",
		"photo": "/images/Frank.JPG",
		"scores": [2, 2, 1, 5, 4, 4, 5, 3, 2, 2]
	},
	{
		"name": "Henry",
		"photo": "/images/Henry.JPG",
		"scores": [5, 1, 1, 2, 3, 2, 4, 4, 2, 3]
	},
	{
		"name": "Justin",
		"photo": "/images/Justin.JPG",
		"scores": [4, 4, 3, 2, 1, 2, 3, 4, 5, 5]
	},
	{
		"name": "Katherine",
		"photo": "/images/Katherine.JPG",
		"scores": [3, 2, 2, 3, 4, 4, 5, 1, 2, 3]
	},
	{
		"name": "Meghan",
		"photo": "/images/Meghan.JPG",
		"scores": [4, 5, 4, 5, 3, 3, 2, 1, 2, 5]
	},
	{
		"name": "Sandra",
		"photo": "/images/Sandra.JPG",
		"scores": [2, 3, 5, 5, 1, 3, 4, 5, 3, 3]
	},
	{
		"name": "William",
		"photo": "/images/William.JPG",
		"scores": [1, 5, 5, 1, 4, 4, 3, 3, 2, 3]
	}
];

var submittal = [3, 4, 1, 2, 5, 4, 3, 2, 3, 1];
var results = [];
var carrier = 0;
var total = 0;
var smallest = 0;

for (i=0; i<friendsArray.length; i++) {
	total = 0;
	for (j=0; j<10; j++) {
		carrier = submittal[j] - friendsArray[i].scores[j];
		carrier = Math.abs(carrier);
		total = carrier + total;
	}
	results.push(total);
	console.log(total);
}
console.log(results);

smallest = Math.min(...results);
console.log(smallest);

module.exports = friendsArray;
