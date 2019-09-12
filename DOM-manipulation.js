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
// var header = document.getElementById("header-title");
// console.log(header);
// to change this to any other text,

// header.textContent = "Hello";
// header.innerText = "GoodBye";
// //replaces th an h3
// header.innerHTML = "<h3>Hello</h3>";

// //to change styles

// header.style.borderBottom = "solid 3px white";
// header.style.fontFamily = "monospace";

// document.getElementsByClassName
// var list_item = document.getElementsByClassName("list-group-item");
// console.log(list_item);

// console.log(list_item[0]);

//to change the text
// list_item[0].textContent = "first item";
// list_item[1].textContent = "second item";
// list_item[2].textContent = "third item";

// to change styles
// list_item[0].style.backgroundColor = "yellow";
// list_item[1].style.backgroundColor = "red";
// list_item[2].style.backgroundColor = "coral";
// list_item[3].style.backgroundColor = "lightblue";
// list_item[0].style.fontWeight = "bold";

// set a same background color
//use a for loop

// for (var i = 0; i < list_item.length; i++) {
//   list_item[i].style.backgroundColor = "lightgray";
// }

// document.getElementsByTagName
// var list_item = document.getElementsByTagName("li");

// console.log(list_item);

//QUERY SELECTOR
//uses any selector

var header = document.querySelector(".list-group");
header.style.borderBottom = "5px solid yellow";

var form = ducument.querySelector(".form-control");
form.value = "Hello";
