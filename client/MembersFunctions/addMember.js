Template.addMember.onRendered(function(){
	$('select').material_select();
})

AutoForm.hooks({
  insertMemberForm: {
    after: { 
    	insert: function (error, result) {
    		Meteor.call('userChangePassword', result)
	    }
	}
  }
});