import Tabular from 'meteor/aldeed:tabular';



new Tabular.Table({
  name: "Books",
  collection: Books,
  columns: [
  	{data: 'ISBN', title: 'ISBN'},
    {data: "title", title: "Title"},
    {data: "author", title: "Author"},
    {data: "copies", title: "Copies Available"},
    {data: 'category', title: 'Book Category'}
  ]
})

new Tabular.Table({
  name: "UserBooks",
  collection: Books,
  columns: [
    {data: 'ISBN', title: 'ISBN'},
    {data: "title", title: "Title"},
    {data: "author", title: "Author"},
    {data: "price", title: "Price"},
    {data: 'category', title: 'Book Category'}
  ]
})

new Tabular.Table({
  name: "Members",
  collection: Meteor.users,
  columns: [
    {data: "emails[0].address", title: "email"},    
    {data: "profile.name", title: "Full Name"},
    {data: "profile.address", title: "Address"},
    {data: "birthDate", title: "Birth Date"},
  ]
});

new Tabular.Table({
  name: 'Borrows',
  collection: Borrows,
  columns: [
    {data: 'book', title:'Book'},
    {data: 'borrower', title: 'Borrower'},
    {data: 'issueDate', title: 'Issue Date'},
    {data: 'dueDate', title: 'Due Date'},
    {data: 'bookType', title: 'Ebook/Hardcopy'},
    {data: 'shippingType', title:'Shipping place'},
    {data: 'approved', title:'Approved by admin'}
  ]
})

new Tabular.Table({
  name: 'BorrowsNot',
  collection: Borrows,
  columns: [
    {data: 'book', title:'Book'},
    {data: 'borrower', title: 'Borrower'},
    {data: 'issueDate', title: 'Issue Date'},
    {data: 'dueDate', title: 'Due Date'},
    {data: 'bookType', title: 'Ebook/Hardcopy'},
    {data: 'shippingType', title:'Shipping place'},
    {data: 'approved', title:'Approved by admin'}
  ]
})

new Tabular.Table({
  name: 'UserBorrows',
  collection: Borrows,
  columns: [
    {data: 'book', title:'Book'},
    {data: 'issueDate', title: 'Issue Date'},
    {data: 'dueDate', title: 'Due Date'},
    {data: 'approved', title:'Approved by admin'}
  ]
})