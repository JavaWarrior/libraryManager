import { Meteor } from 'meteor/meteor';
// id = Meteor.users.find({}).fetch()[0]._id
// Roles.addUsersToRoles(id, 'admin', Roles.GLOBAL_GROUP)

Meteor.methods({
	'userChangePassword': function(id){
		Accounts.setPassword(id, '123456', [])
	}
})

borrowSchema.addValidator(function(){
  // console.log(Members.find({}).fetch())
  borrower = this.field('borrower').value
  //remove this later
  if(borrower){
    if(Accounts.findUserByEmail(borrower)){
      book = this.field('book').value
      if(Books.find({title: book}).fetch().length > 0){
        numCop = Books.find({title: book}).fetch().copies
        if(numCop > 0){
        	Books.update({title: book}, {$set: {copies: numCop - 1}})
        	return 1
        }
        return 0
      }
      // return SimpleSchema.messages({errorType: 'book not found'})
      SimpleSchema.messages({'error': 'book not found'})
      return 'book not found'
    }

    return 'borrower not found'
  }else{
    return 1
  }
  // return SimpleSchema.messages({errorType: 'borrower not found'})
})
