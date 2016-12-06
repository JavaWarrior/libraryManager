Template.adminMembers.onRendered(function(){
	clearAllTabs()
	$('ul.tabs').tabs();
	$('nav #membersli').addClass('active')
	$('nav #mobMembersli').addClass('active')
})

clearAllTabs = function  (){
	$('nav #booksli').removeClass('active')
	$('nav #membersli').removeClass('active')
	$('nav #borrowli').removeClass('active')
	$('nav #statsli').removeClass('active')
	$('nav #mobBooksli').removeClass('active')
	$('nav #mobMembersli').removeClass('active')
	$('nav #mobBorrowli').removeClass('active')
	$('nav #mobStatsli').removeClass('active')
}