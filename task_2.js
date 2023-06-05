
const book = {};
book.sheets = 653;
book.color = 'white';
book.year = '2013';


const str1 = 'author';
const str2 = 'year';


function hasOwnProperties(obj, str) {
    return (str in obj)
};


console.log(hasOwnProperties(book, str1));
console.log(hasOwnProperties(book, str2));
