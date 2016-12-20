Template.adminBorrows.onRendered(function(){
	$('select').material_select();
	clearAllTabs()
	$('ul.tabs').tabs()
	$('nav #borrowli').addClass('active')
	$('nav #mobBorrowli').addClass('active')
})