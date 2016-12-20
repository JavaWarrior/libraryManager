Template.displayUserBorrows.helpers({
	selector(){
		return {borrower: Meteor.user().emails[0].address};
	}
})


Template.displayUserBorrows.onRendered(function (){
	$('select').material_select();
})
