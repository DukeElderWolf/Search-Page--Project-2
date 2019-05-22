/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const ul = document.getElementsByClassName('student-item cf');
const page = [];

const showPage = (ul, page) => {
  for (let i = 0; i < ul.length; i += 1) {
    if (i < 10) {
    ul[i].style.display = 'block';
  } else {ul[i].style.display = 'none'}
  }
  };

showPage(ul,page);

  // add agrument that new array schould be produced if other button is pressed
/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/
//Second argument in appendPageLinks is not really functionality
//
const appendPageLinks = (ul, page) => {
    for (let i = 0; i < ul.length; i += 1) {
      if (page.length < 10) {
        page.push(ul[i]);
      } else if (ul[i] == ul.lastElementChild) {
        var listTag = document.getElementsByTagName('ul')[0];
        var newBut = document.createElement("button");
        newBut.appendChild(page);
      } else {
        var listTag = document.getElementsByTagName('ul')[0];
        var newBut = document.createElement("button");
        newBut.className = "pagination";
        // var newBut = document.getElementsByClassName('pagination');
        listTag.appendChild(newBut);
        page = [];
      }
    }
};

appendPageLinks(ul,page);
/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
