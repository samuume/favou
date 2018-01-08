exports.definition = {
	config : {
		URL : RESTAPI.route('users'),
		//debug : 1,
		adapter : {
			type : "restapi",
			collection_name : "users",
			idAttribute : "id"
		},
		headers : Headers.JSON(),
	},
	extendModel : function(Model) {
		_.extend(Model.prototype, {
			initialize : function() {
				//alert("User model created from API.", this);
			}
		});

		return Model;
	},
	extendCollection : function(Collection) {
		_.extend(Collection.prototype, {
			
		});

		return Collection;
	}
};