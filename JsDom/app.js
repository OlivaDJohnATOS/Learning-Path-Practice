/*var titles = document.getElementsByClassName('title');


Array.from(titles).forEach(element => {
    console.log(element);
});
//const WMF = document.querySelector('#book-list li:nth-child(2) .name');

//console.log(WMF.outerHTML);

const books = document.querySelectorAll('#book-list li .name');

//console.log(books);

books.forEach(item => {
    item.textContent += " (book title)";
});

const bookList = document.querySelector('#book-list');
//bookList.innerHTML = '<h2>Books and more...</h2>';
bookList.innerHTML += "<p>This is how you add HTML</p>"

const banner = document.querySelector('#page-banner');

console.log(`#page-banner node type is: ${banner.nodeType}`);
console.log(`#page-banner node name is: ${banner.nodeName}`);
console.log(`#page-banner has child nodes: ${banner.hasChildNodes()}`);

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner.outerHTML);

const bookList = document.querySelector('#book-list');

console.log(`The parent node is: ${bookList.parentNode}`);
console.log(`The parent node is: ${bookList.parentElement.parentElement}`);

console.log(bookList.children);

console.log(`#book-list next sibling is: ${bookList.nextSibling}`);
console.log(`#book-list next element sibling is: ${bookList.nextElementSibling}`);

console.log(`#book-list previous sibling is: ${bookList.previousSibling}`);
console.log(`#book-list previous element sibling is: ${bookList.previousElementSibling}`);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br>Too cool for everyone else'*/

const h2 = document.querySelector("#book-list h2");

h2.addEventListener('click', (e) =>{
    console.log(e.target);
    console.log(e);
})

const buttons = document.querySelectorAll('#book-list .delete');

buttons.forEach(item =>{
    item.addEventListener('click', (e) =>{
        const li = e.target.parentElement;

        li.parentNode.removeChild(li);
    })
});

const link = document.querySelector('#page-banner a');

link.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(`Navigation to ${e.target.textContent} was prevented`);
})