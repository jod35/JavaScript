//exmine the document
//console.dir(document);

//tells us the domain we are on
//console.log(document.domain);

//to get the url of the document
// console.log(document.URL);
// http://127.0.0.1:5500/index.html

//to view the title of the document
// console.log(document.title);

//to see the doctype
// console.log(document.doctype);
// <!DOCTYPE html>

// console.log(document.head);
// //returns the entire head element

//returm all the forms
// console.log(document.forms);

// console.log(document.images);
// [] since there are no images

//selectors
//document.getElementById
//helps us to query the DOM for an element by its id
var header = document.getElementById("header-title");
console.log(header);
// to change this to any other text,

// header.textContent = "Hello";
// header.innerText = "GoodBye";
// //replaces th an h3
// header.innerHTML = "<h3>Hello</h3>";

//to change styles

header.style.borderBottom = "solid 3px white";
header.style.fontFamily = "monospace";
