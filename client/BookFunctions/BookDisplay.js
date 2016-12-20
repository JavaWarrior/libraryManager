Template.BookDisplay.onRendered(function(){
	$('select').material_select();
})

Template.UserBookDisplay.onRendered(function(){
	if(this.data.copies <= 0){
		// i cannot borrow
		$('#borrow_book').addClass('disabled')
	}
	if(this.data.url == 'no'){
		$('#download').addClass('disabled')
	}

})
Template.UserBookDisplay.events({
	'click #borrow_book' (event){
		user = Meteor.user()
		book = this
		try{
			Borrows.insert({borrower: user.emails[0].address, book: book.title, 
			issueDate: new Date(), dueDate: new Date(+new Date() + 12096e5),
			bookType: 'hardcopy', shippingType: 'home delivery', approved: 'not Approved', Returned: 'no'})
		}catch(err){
			Bert.alert(err)
		}
		Bert.alert('Request sent', 'success', 'growl-top-right')
	}
})