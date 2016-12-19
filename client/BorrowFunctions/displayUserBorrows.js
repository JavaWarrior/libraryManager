Template.displayApproved.helpers({
	selector(){
		//return {borrower: Meteor.userId()};
	}
})


Template.displayApproved.onRendered(function (){
	$('select').material_select();
})
