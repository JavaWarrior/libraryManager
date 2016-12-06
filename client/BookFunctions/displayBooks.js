Template.displayBooks.events({
	'click tbody > tr': function(event) {
		var dataTable = $(event.target).closest('table').DataTable();
	    var rowData = dataTable.row(event.currentTarget).data();
	    if (!rowData) return; // Won't be data if a placeholder row is clicked
	    // Your click handler logic here
	    Router.go('/BookDisplay/'+rowData._id)
	}
})