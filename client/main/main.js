Meteor.startup(function(){
	var addBookHook = {
		onSuccess: function(formType, res){
			Bert.alert(	'added successfully !', 'success','growl-top-right')
		},
		onError: function(formType, error) {
			Bert.alert(	'' + error, 'danger','growl-top-right')
		}
	}
	AutoForm.addHooks(null, addBookHook)
})