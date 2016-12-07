import { resetDatabase } from 'meteor/xolvio:cleaner';
import { chai } from 'meteor/practicalmeteor:chai';
import { Books } from '../lib/database.js';
import { Members } from '../lib/database.js';
import { Borrows } from '../lib/database.js';

// Books = new Mongo.Collection("books")
describe('test books insert/update', function(){
	beforeEach(function(){
		resetDatabase();
	});
	/* valid add*/

	it('add valid book', function(){
		Books.insert({title: 'book1', copies: 0, ISBN: '1234567981234', price: 20, Location: 'row 12 col 1', category: 'science'})
		chai.assert.equal(Books.find({title: 'book1'}).fetch().length > 0,true)
	})

	/*valid update*/
	it('update valid book', function(){
		Books.insert({title: 'book1', copies: 0, ISBN: '1234567981234', price: 20, Location: 'row 12 col 1', category: 'science'})
		Books.update({title:'book1'},{$set: {copies: 10}})
		chai.assert.equal(Books.findOne({title: 'book1'}).copies == 10,true)
	})


	/*adding with missing required field */
	it('add book with missing required fields', function(){
		x = 0
		try{
			Books.insert({copies: 0, ISBN: '1234567981234', price: 20, Location: 'row 12 col 1', category: 'science'})
		} catch(err){
			// console.log(err.sanitizedError.error)
			chai.assert.equal(err.sanitizedError.error, 400)
			x = 1
		} finally{
			chai.assert.equal(x,1)
		}
		try{
			Books.insert({title:'book1', ISBN: '1234567981234', price: 20, Location: 'row 12 col 1', category: 'science'})
		} catch(err){
			chai.assert.equal(err.sanitizedError.error, 400)
			x = 2
		} finally{chai.assert.equal(x, 2)}
		try{
			Books.insert({title:'book1', copies: 0, price: 20, Location: 'row 12 col 1', category: 'science'})
		} catch(err){
			chai.assert.equal(err.sanitizedError.error, 400)
			x = 3
		} finally{chai.assert.equal(x,3)}
		try{
			Books.insert({title:'book1', copies: 0, ISBN: '1234567981234', Location: 'row 12 col 1', category: 'science'})
		} catch(err){
			chai.assert.equal(err.sanitizedError.error, 400)
			x = 4
		} finally{chai.assert.equal(x,4)}
		try{
			Books.insert({title:'book1', copies: 0, ISBN: '1234567981234', price: 20, category: 'science'})
		} catch(err){
			chai.assert.equal(err.sanitizedError.error, 400)
			x = 5
		} finally{chai.assert.equal(x,5)}
		try{
			Books.insert({title:'book1', copies: 0, ISBN: '1234567981234', price: 20, Location: 'row 12 col 1'})
		} catch(err){
			chai.assert.equal(err.sanitizedError.error, 400)
			x = 6
			// console.log(err)
		} finally{chai.assert.equal(x,6)}
		chai.assert.equal(Books.find({}).fetch().length, 0) //nothing inserted
	})


	/*updating with missing required field */
	it('update book with missing required fields', function(){
		Books.insert({title:'book1', copies: 0, ISBN: '1234567981234', price: 20, Location: 'row 12 col 1', category: 'science'})
		x = 0
		try{
			Books.update({title:'book1'},{copies: 0, ISBN: '1234567981234', price: 20, Location: 'row 12 col 1', category: 'science'})
		}catch(err){
			x = 1
		}finally{
			chai.assert.equal(x, 1)// error happened		
		}
		try{
			Books.update({title:'book1'},{ISBN: '1234567981234', price: 20, Location: 'row 12 col 1', category: 'science'})
		}catch(err){
			x = 2
		}finally{
			chai.assert.equal(x, 2)// error happened		
		}
		try{
			Books.update({title:'book1'},{price: 20, Location: 'row 12 col 1', category: 'science'})
		}catch(err){
			x = 3
		}finally{
			chai.assert.equal(x, 3)// error happened		
		}
	})


	/* add with existing ISBN/title */
	it('insert book with existing ISBN/title',function(){
		Books.insert({title:'book1', copies: 0, ISBN: '1234567981234', price: 20, Location: 'row 12 col 1', category: 'science'})
		x = 0
		try{
			Books.insert({title:'book', copies: 0, ISBN: '1234567981234', price: 20, Location: 'row 12 col 1', category: 'science'})
		}catch (err){
			x = 1
		}finally{
			chai.assert.equal(x,1)
		}
		try{
			Books.insert({title:'book1', copies: 0, ISBN: '1254567981234', price: 20, Location: 'row 12 col 1', category: 'science'})
		}catch (err){
			x = 2
		}finally{
			chai.assert.equal(x,2)
		}
	})


	/* update with existing ISBN/title */
	it('update book with existing ISBN/title',function(){
		Books.insert({title:'book1', copies: 0, ISBN: '1234567981234', price: 20, Location: 'row 12 col 1', category: 'science'})
		Books.insert({title:'book2', copies: 0, ISBN: '1234267981234', price: 20, Location: 'row 12 col 1', category: 'science'})
		x = 0
		try{
			Books.update({title: 'book1'},{$set:{title:'book2'}})
		}catch (err){
			x = 1
		}finally{
			chai.assert.equal(x,1)
		}
		try{
			Books.update({title: 'book2'},{$set:{ISBN: '1234567981234'}})
		}catch (err){
			x = 2
		}finally{
			chai.assert.equal(x,2)
		}
	})
	it('add book with bad ISBN',function(){
		x = 0
		try{
			Books.insert({title:'book1', copies: 0, ISBN: '123456781234', price: 20, Location: 'row 12 col 1', category: 'science'})
		}catch (err){
			x = 1
		}finally{
			chai.assert.equal(x,1)
		}
	})

})

describe('test borrows insert/update', function(){
	beforeEach(function(){
		resetDatabase();
		Members.insert({username: 'user1', fullname: 'name1', email:'mail1@gmail.com', birthdate: new Date()})
		Books.insert({title: 'book1', copies: 0, ISBN: '1234567981234', price: 20, Location: 'row 12 col 1', category: 'science'})
	});

	it('valid add of borrow', function(){
		Borrows.insert({borrower: 'user1', book:'book1', issueDate: new Date(), dueDate: new Date(), bookType: 'e-book', 'shippingType': 'in library', approved: 'approved'})
		chai.assert.equal(Borrows.find({borrower: 'user1', book:'book1'}).fetch().length > 0, true)
	})
	it('valid update of borrow', function(){
		Borrows.insert({borrower: 'user1', book:'book1', issueDate: new Date(), dueDate: new Date(), bookType: 'e-book', 'shippingType': 'in library', approved: 'approved'})
		Borrows.update({borrower: 'user1'}, {$set:{bookType:'hardcopy'}})
		chai.assert.equal(Borrows.find({bookType: 'hardcopy'}).fetch().length > 0, true)	
	})

	it('adding borrow for non existing user or non existing book', function(){
		x = 0
		try{
			Borrows.insert({borrower: 'user', book:'book1', issueDate: new Date(), dueDate: new Date(), bookType: 'e-book', 'shippingType': 'in library', approved: 'approved'})
		}catch (err){
			chai.assert.equal(err.sanitizedError.error, 400)
			x = 1
		}
		chai.assert.equal(x,1)
		try{
			Borrows.insert({borrower: 'user1', book:'book', issueDate: new Date(), dueDate: new Date(), bookType: 'e-book', 'shippingType': 'in library', approved: 'approved'})
		}catch (err){
			chai.assert.equal(err.sanitizedError.error, 400)
			x = 2
		}
		chai.assert.equal(x,2)
		chai.assert.equal(Borrows.find({}).fetch().length, 0)
	})

	it('add with missing required field',function(){
		x = 0
		try{
			Borrows.insert({ book:'book1', issueDate: new Date(), dueDate: new Date(), bookType: 'e-book', 'shippingType': 'in library', approved: 'approved'})
		}catch (err){
			chai.assert.equal(err.sanitizedError.error, 400)
			x = 1
		}
		chai.assert.equal(x,1)
		try{
			Borrows.insert({borrower: 'user1', dueDate: new Date(), bookType: 'e-book', 'shippingType': 'in library', approved: 'approved'})
		}catch (err){
			chai.assert.equal(err.sanitizedError.error, 400)
			x = 2
		}
		chai.assert.equal(x,2)
		chai.assert.equal(Borrows.find({}).fetch().length, 0)

	})


	it('update and remove required field', function(){
		x = 0
		Borrows.insert({borrower: 'user1', book:'book1', issueDate: new Date(), dueDate: new Date(), bookType: 'e-book', 'shippingType': 'in library', approved: 'approved'})
		try{
			var deleteresult = {};
			deleteresult["borrower"] = true
			Members.update( {book:'book1'} ,{$unset: deleteresult });
		}catch(err){
			x = 1
			chai.assert.equal(err.sanitizedError.error, 400)
		}
		chai.assert.equal(x,1)
	})


})


describe('test borrows insert/update', function(){
	beforeEach(function(){
		resetDatabase();
	});
	it('valid add of member', function(){
		Members.insert({username: 'user1', fullname: 'name1', email:'mail1@gmail.com', birthdate: new Date()})
		chai.assert.equal(Members.find({username: 'user1'}).fetch().length > 0, true)
	})
	it('valid update of member', function(){
		Members.insert({username: 'user1', fullname: 'name1', email:'mail1@gmail.com', birthdate: new Date()})
		Members.update({username: 'user1'}, {$set:{email:'mail2@gmail.com'}})
		chai.assert.equal(Members.find({email: 'mail2@gmail.com'}).fetch().length > 0, true)	
	})

	it('adding previously existing member', function(){
		Members.insert({username: 'user1', fullname: 'name1', email:'mail1@gmail.com', birthdate: new Date()})
		x =0
		try{
			Members.insert({username: 'user', fullname: 'name1', email:'mail1@gmail.com', birthdate: new Date()})
		}catch(err){
			chai.assert.equal(err.code, 11000)
			x = 1
		}
		chai.assert.equal(x, 1)
		try{
			Members.insert({username: 'user1', fullname: 'name1', email:'mail@gmail.com', birthdate: new Date()})
		}catch(err){
			chai.assert.equal(err.code, 11000)
			x = 2
		}
		chai.assert.equal(x, 2)
	})
	it('updating member with previously existing username/mail', function(){
		Members.insert({username: 'user1', fullname: 'name1', email:'mail1@gmail.com', birthdate: new Date()})
		Members.insert({username: 'user2', fullname: 'name2', email:'mail2@gmail.com', birthdate: new Date()})
		x =0
		try{
			Members.update({username: 'user1'},{$set:{email:'mail2@gmail.com'}})
		}catch(err){
			chai.assert.equal(err.code, 11000)
			x = 1
		}
		chai.assert.equal(x, 1)
		try{
			Members.update({username: 'user2'},{$set:{username:'user1'}})
		}catch(err){
			chai.assert.equal(err.code, 11000)
			x = 2
		}
		chai.assert.equal(x, 2)
	})

	it('add with missing required field',function(){
		x = 0
		try{
			Members.insert({fullname: 'name1', email:'mail1@gmail.com', birthdate: new Date()})
		}catch(err){
			chai.assert.equal(err.sanitizedError.error, 400)
			x = 1
		}
		chai.assert.equal(x,1)
		try{
			Members.insert({username:'user1', email:'mail1@gmail.com', birthdate: new Date()})
		}catch(err){
			chai.assert.equal(err.sanitizedError.error, 400)
			x = 2
		}
		chai.assert.equal(x,2)
		try{
			Members.insert({username:'user1', fullname: 'name1', birthdate: new Date()})
		}catch(err){
			chai.assert.equal(err.sanitizedError.error, 400)
			x = 3
		}
		chai.assert.equal(x,3)
		chai.assert.equal(Members.find({}).fetch().length, 0)

	})

	it('update and remove required field', function(){
		x = 0
		Members.insert({username: 'user1', fullname: 'name1', email:'mail1@gmail.com', birthdate: new Date()})
		try{
			var deleteresult = {};
			deleteresult["username"] = true
			Members.update( {email:'mail1@gmail.com'} ,{$unset: deleteresult });
		}catch(err){
			x = 1
			chai.assert.equal(err.sanitizedError.error, 400)
		}
		chai.assert.equal(x,1)
	})


})