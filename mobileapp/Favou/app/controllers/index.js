Alloy.Collections.instance('users');
Alloy.Collections.instance('tasks');
Alloy.Collections.instance('task');

var loginController = Alloy.createController("login");
	loginController.loginWin.open({ animated: false });