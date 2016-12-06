Books = new Mongo.Collection("books")
Members = new Mongo.Collection('members')
Borrows = new Mongo.Collection('borrows')

bookSchema = {
  title: {
    type: String,
    label: "Title",
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
    optional: true
  },
  shippingWeight:{
    type: Number,
    label: 'item weight',
    optional: true
  },
  Location:{
    type: String,
    label: 'book location in library',
  },
  category:{
    type:String,
    label: 'category'
  }
}

Books.attachSchema(new SimpleSchema(bookSchema));

memberSchema = {
  username: {
    type: String,
    label: "Username",
    unique: true
  },
  fullname: {
    type: String,
    label: "Full Name",
  },
  email: {
    type: String,
    label: "Email",
    unique: true
  },
  address: {
    type: String,
    label: "address",
  },
  birthDate: {
    type: Date,
    label: 'Date of birth',
    optional: true,
  }
}

Members.attachSchema(new SimpleSchema(memberSchema));

Borrows.attachSchema(new SimpleSchema({
  borrower:{
    type: memberSchema,
    label: 'Borrower'
  },
  book:{
    type: bookSchema,
    label: 'Book'
  },
  issueDate:{
    type: Date,
    label: 'issue date'
  },
  dueDate:{
    type: Date,
    label: 'due date'
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
    type: Boolean,
    label: 'approved by admin'
  }
}))