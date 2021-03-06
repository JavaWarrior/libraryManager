// if(Meteor.isTest){
  // export const Books = new Mongo.Collection("books")
  // export const Members = new Mongo.Collection('members')
  // export const Borrows = new Mongo.Collection('borrows')
// }
Books = new Mongo.Collection("books")
Members = new Mongo.Collection('members')
Borrows = new Mongo.Collection('borrows')

bookSchema = {
  title: {
    type: String,
    label: "Title",
    unique: true
  },
  author: {
    type: String,
    label: "Author",
    optional: true
  },
  copies: {
    type: Number,
    label: "Number of copies",
    min: 0
  },
  summary: {
    type: String,
    label: "Brief summary",
    optional: true,
  },
  ISBN: {
    type: String,
    label: "Book ISBN",
    min: 13,
    max: 13,
    unique: true 
  },
  publisher: {
    type: String,
    label: 'Book publisher',
    optional: true,
  },
  price: {
    type: Number,
    label: 'book price',
  },
  url:{
    type: String,
    label: 'url',
    optional: true,
    defaultValue: 'no'
  },
  shippingWeight:{
    type: Number,
    label: 'item weight',
    optional: true
  },
  Location:{
    type: String,
    label: 'book location in library',
    optional: true
  },
  category:{
    type:String,
    label: 'category'
  },
}

Books.attachSchema(new SimpleSchema(bookSchema));

borrowSchema = new SimpleSchema({
  borrower:{
    type: String,
    label: 'Borrower',
  },
  book:{
    type: String,
    label: 'Book'
  },
  issueDate:{
    type: Date,
    label: 'issue date',
    defaultValue: new Date()
  },
  dueDate:{
    type: Date,
    label: 'due date',
    defaultValue: new Date(),
  },
  bookType:{
    type: String,
    label: 'ebook/hardcopy',
    allowedValues: ['e-book', 'hardcopy']
  },
  shippingType:{
    type: String,
    label: 'shipping place',
    allowedValues: ['home delivery', 'in library']
  },
  approved:{
    type: String,
    label: 'approved by admin', 
    allowedValues:['approved', 'not Approved']
  },
  Returned:{
    type: String,
    label: 'Returned',
    allowedValues:['yes', 'no']
  }
})

Borrows.attachSchema(borrowSchema)


