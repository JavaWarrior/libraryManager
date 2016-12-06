Template.displayApproved.helpers({
	selector(){
		return {approved: 'approved'};
	}
})


Template.displayApproved.onRendered(function (){
	$('select').material_select();
})

Template.displayApproved.events({
	'click tbody > tr': function(event) {
		var dataTable = $(event.target).closest('table').DataTable();
	    var rowData = dataTable.row(event.currentTarget).data();
	    if (!rowData) return; // Won't be data if a placeholder row is clicked
	    // Your click handler logic here
	    Router.go('/editBorrow/'+rowData._id)
	}
})