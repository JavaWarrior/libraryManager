Template.adminBorrows.onRendered(function(){
	clearAllTabs()
	$('ul.tabs').tabs()
	$('nav #borrowli').addClass('active')
	$('nav #mobBorrowli').addClass('active')
})