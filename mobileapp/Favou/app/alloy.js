Alloy.Globals.Facebook = require('facebook');
Alloy.Globals.Map = require('ti.map');

var RESTAPI = {
	_uri : "http://erito.dk/favou/public/api/",
	route : function(path) {
		return this._uri + path;
	}
};

var Headers = {
	_json: "application/json",
	JSON: function() {
		return "Accept:" + this._json;
	}
};

var sessionUser;

var thisWindow;

function discoverButton(){
	var discoverController = Alloy.createController("discover");
	discoverController.discover.open({ animated: false });
	thisWindow.close();
}

function tasksButton(){
	var taskController = Alloy.createController("task");
	taskController.task.open({ animated: false });
	thisWindow.close();
}

function profileButton(){
	var profileController = Alloy.createController("profile");
	profileController.profile.open({ animated: false });
	thisWindow.close();
}

function settingsButton(){
	var settingsController = Alloy.createController("settings");
	settingsController.settings.open({ animated: false });
	thisWindow.close();
}

function addTaskButton(){
	var addTaskController = Alloy.createController("addTask");
	addTaskController.addTask.open({ animated: false });
	thisWindow.close();
}

function chatButton(){
	var chatController = Alloy.createController("chat");
	chatController.chat.open({ animated: false });
	thisWindow.close();
}
