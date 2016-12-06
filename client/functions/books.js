Template.adminBooks.onRendered(function(){
	clearAllTabs()
	$('ul.tabs').tabs()
	$('nav  #booksli').addClass('active')
	$('nav  #mobBooksli').addClass('active')
})