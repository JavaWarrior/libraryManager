Router.configure({
    layoutTemplate: 'MainLayout'
});

Router.route('/', function(){
	if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
	    this.render('adminBooks');	
	}else{
		this.render('userBooks')
	}
});

Router.route('/home');
Router.route('/addMember')

Router.route('/Books', function(){
	if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
	    this.render('adminBooks');	
	}else{
		this.render('userBooks')
	}
})
Router.route('/adminStats')

Router.route('/Borrows', function(){
	if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
	    this.render('adminBorrows');	
	}else{
		this.render('displayUserBorrows')
	}
})



Router.route('/BookDisplay/:_id', function(){
	var item = Books.findOne({_id: this.params._id})
	this.render('BookDisplay', {data: item})
	// this.render('BookDisplay', {data:{data1: item}})
})

Router.route('/MemberDisplay/:_id', function(){
	var item = Members.findOne({_id: this.params._id})
	this.render('MemberDisplay', {data: item})
	// this.render('BookDisplay', {data:{data1: item}})
})

Router.route('/editBorrow/:_id', function(){
	var item = Borrows.findOne({_id: this.params._id})
	this.render('editBorrow', {data: item})
	// this.render('BookDisplay', {data:{data1: item}})
})

Router.route('/UserBookDisplay/:_id', function(){
	var item = Books.findOne({_id: this.params._id})
	this.render('UserBookDisplay', {data: item})
	// this.render('BookDisplay', {data:{data1: item}})
})
