describe('valid books', function(){
	beforeEach(function(){
		resetDatabase();
	});
	/* valid add*/
	it('add valid book', function(){
		books.insert({title: book1, copies: 0, ISBN: '1234567981234', price: 20, Location: 'row 12 col 1', category: 'science'})
		assert.equal(books.findOne({title: 'book1'}).fetch().length > 0)
	})

	/*valid update*/



	/*adding with missing required field */



	/*updating with missing required field */



	/* add with existing ISBN/title */



	/* update with existing ISBN/title */
})

