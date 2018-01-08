thisWindow = $.profile;

var moment = require('alloy/moment');

function setUserData(){
	var age =  moment(sessionUser.birth, "YYYY-MM-DD").fromNow();
	
	$.name.text = sessionUser.name;
	$.city.text = sessionUser.location.city;
	$.age.text = age.slice(0,2) + ' år';
	$.profileImage.image = sessionUser.imageurl;
}
