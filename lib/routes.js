Router.configure({
    layoutTemplate: 'MainLayout'
});

Router.route('/', function(){
    this.render('/adminStats');
});

Router.route('/home');

Router.route('/pending');


Router.route('/adminBooks')
Router.route('/adminMembers')
Router.route('/adminStats')
Router.route('/adminBorrows')