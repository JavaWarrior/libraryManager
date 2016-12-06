import Tabular from 'meteor/aldeed:tabular';



new Tabular.Table({
  name: "Books",
  collection: Books,
  columns: [
  	{data: 'ISBN', title: 'ISBN'},
    {data: "title", title: "Title"},
    {data: "location", title: "Author"},
    {data: "copies", title: "Copies Available"},
    {data: 'category', title: 'book Category'}
  ]
})

new Tabular.Table({
  name: "Members",
  collection: Members,
  columns: [
  	{data: 'username', title: 'Username'},
    {data: "fullname", title: "Full Name"},
    {data: "address", title: "Address"},
    {data: "birthDate", title: "Birth Date"},
  ]
});

new Tabular.Table({
  name: 'Borrows',
  collection: Borrows,
  columns: [
    {data: 'book', title:'book'},
    {data: 'borrower', title: 'borrower'},
    {data: 'issueDate', title: 'issue Date'},
    {data: 'dueDate', title: 'due Date'},
    {data: 'bookType', title: 'ebook/hardcopy'},
    {data: 'shippingType', title:'shipping place'},
    {data: 'approved', title:'apprved by admin'}
  ]
})