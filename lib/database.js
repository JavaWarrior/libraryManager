Books = new Mongo.Collection("books")
Books.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  author: {
    type: String,
    label: "Author"
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
    max: 1000
  },
  ISBN: {
    type: String,
    label: "Book ISBN",
    min: 13,
    max: 13    
  },
  publisher: {
    type: String,
    label: 'Book publisher',
  },
  price: {
    type: Number,
    label: 'book price',
  },
  numberOfCopies: {
    type: Number,
    label: 'number of copies'
  },
  url:{
    type: String,
    label: 'url'
  },
  shippingWeight:{
    type: Number,
    label: 'item weight'
  }
}));