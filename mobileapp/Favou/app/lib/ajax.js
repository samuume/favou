var ajax = {

	init : function(data, callback) {
		var xhr = Ti.Network.createHTTPClient({
			onload : function() {
				callback(this.responseText);
			}
		});
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.open('POST', 'http://erito.dk/favou/public/api/user/login');

		xhr.send(data);
	}
};

exports.ajax = ajax;