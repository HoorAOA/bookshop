
var mongoose = require('mongoose');
var Book = require('../models/book');
const db = require('../config/keys').MongoURI;
mongoose.connect(db,{useNewUrlParser:true})
    .then(()=> console.log('MongoDB connected'))
    .catch(err => console.log(err));

var Books = [ 
    new Book({
        imagePath:'images/9781785152207.jpg',
        Title:'The bookTitle',
        Author:'By authorName',
        Category:'category',
        Rating:'3',
        Description:'hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum',
        Price:100,
        newPrice:50
    }),
    new Book({
        imagePath:'images/9781471176357.jpg',
        Title:'The bookTitle',
        Author:'By authorName',
        Category:'category',
        Rating:'5',
        Description:'hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum',
        Price:90,
        newPrice:45
    }),
    new Book({
        imagePath:'images/9780241349571.jpg',
        Title:'The bookTitle',
        Author:'By authorName',
        Category:'category',
        Rating:'4',
        Description:'hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum',
        Price:80,
        newPrice:40
    })
];

var done = 0;
for(var i = 0 ; i < Books.length ; i++){
    Books[i].save((err,result) => {
        done++;
        if(done === Books.length){
            exit();        
        }
    });
}


function exit() {
    mongoose.disconnect();
}