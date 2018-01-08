thisWindow = $.login;
// 
// var col = Alloy.Collections.users;
// fetchCollection();
// 
// function dataTransform(model) {
	// var m = model.toJSON();
// 
	// m.name = m.name;
	// m.id = m.id;
// 	
	// //alert(m);
// 	
	// return m;
// }
// 
// function fetchCollection(){
	// col.fetch();
// }
var FB = Alloy.Globals.Facebook;
FB.permissions = ['public_profile', 'email', 'name']; 
FB.initialize();
FB.forceDialogAuth = false;
FB.addEventListener('click', function(){
	FB.authorize();
});

FB.addEventListener('login', function(e) {
    if (e.success) {
    	getParams(e.data);
        //alert('login from uid: '+e.uid+', name: '+ JSON.stringify(e.data));
    }
    else if (e.cancelled) {
        // user cancelled
        alert('cancelled');
    }
    else {
        alert(e.error);
    }
});

if (Ti.Platform.name === 'android'){
	$.loginWin.fbProxy = FB.createActivityWorker({lifecycleContainer: $.loginWin});
}

function getParams(){
	FB.requestWithGraphPath("me", {fields: "name,email,picture.width(400).height(400)"}, "GET", function(e){
		if (e.success){
			var result = JSON.parse(e.result);
			var img = result.picture.data.url;
			
			var data = new Object();
			data.id = result.id;
			data.name = result.name;
			data.image = img;
			var jsonString = JSON.stringify(data);

			doLogin(jsonString);
		} else if (e.error){
			alert(e.error);
		} else {
			
		}
	});
}

function doLogin(loginInfo)
{	
	require('ajax').ajax.init(loginInfo, function(response) {
		var user = JSON.parse(response);
		 		
		if(user.id){
			sessionUser = user;
			var discoverController = Alloy.createController("discover");
			discoverController.discover.open();
			$.loginWin.close();
		} else {
			alert('Something went wrong');
		} 
	});
}


// $.loginButton.addEventListener('click', function(){
	// //TODO : Do something
	// var discoverController = Alloy.createController("discover");
	// discoverController.discover.open();
	// $.loginWin.close();
// });