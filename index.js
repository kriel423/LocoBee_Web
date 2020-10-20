var mainText = document.getElementById("mainText");
var submitButton = document.getElementById("submitButton");
var fireHeading = dcouemnt.getElementById("fireHeading");


var firebaseHeadingRef = firebase.database().ref().child("Heading");

firebaseHeadingRef.on('value', function(datasnapshot){
	fireHeading.innerText = datasnapshot.val();
});

function submitClick()
{
	var firebaseRef = firebase.database().ref();

	var messageText = mainText.value;

	firebaseRef.push().set(messageText);
}