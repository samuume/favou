// Arguments passed into this controller can be accessed via the `$.args` object directly or:
//this is how we accept arguments passed to the controller (usually from another controller)
var args = arguments[0] || {};

$.tDesc.set(args.data);

$.backButton.addEventListener('click', function(){
	//create the controller and pass the model to it
	var discoverController = Alloy.createController("discover");
	
	discoverController.discover.open();
	$.taskDesc.close();
});

col = Alloy.Collections.task;
fetchCollection(col);

function fetchCollection(col){
	col.fetch({
		id : $.tDesc.attributes.id,
		success : function(model, response) {
			//alert(JSON.stringify(response));
		},
		error : function(error) {
			//alert('Error loading comments ' + e.message);
			//Ti.API.error(JSON.stringify(error));
		}
	});
}
// taskToChange.id = $.tDesc.attributes.id;


// $.taskDesc.addEventListener("load", function() {
	// var model = col.get({id: $.tDesc.attributes.id});
	// console.log(model);
// });