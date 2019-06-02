/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//Two global variables; stuList stores the different students info and perPage variable stores the page limeit for startIndex
// those items
const stuList = document.querySelectorAll('li');
const perPage = 10;
// showPage function passes the global varible stuList and the page varible that holds which page is being called
const showPage = (stuList, page) => {
// local varables manage which tudent items should be present in the page container
  var startIndex = (page * perPage) - perPage;
  var endIndex = page * perPage - 1;
// the for loop cycles through the items to check which items should be in the disolay and hidden to the corresponding
// page
  for (let i = 0; i < stuList.length; i += 1) {
    if (i >= startIndex && i <= endIndex) {
      stuList[i].style.display = "block";
  } else {
    stuList[i].style.display = "none";
  }
  }
  };
// This calls the function so that when the page loads initially it diplays items from the first page
showPage(stuList, 1);
// the appendPageLinks creates document elements for the items to be appended to and called on for display. It is also creates buttons a
// button event lisener to respond to mouse clicking of the page symbols
const appendPageLinks = (stuList) => {
// Creates a unorderlist and a div labeled pagination and locates the page elements
// the div is attached to the page html and the unorderedlist is attached to the div so that the items have something to attach when the
//function wraps up
  var page = document.querySelector('.page');
  var ul = document.createElement('ul');
  var div = document.createElement('div');
  div.className = 'pagination';
  page.appendChild(div);
  div.appendChild(ul);
// The pageTotal variable stores how many pages should be set aside for the complete list of students
  var pageTotal = Math.ceil(stuList.length/perPage);
// the for loop takes the number of pages that is stored in the pageTotal var and creates a list and anchor element to the student
// list when the page icon is clicked and attaches them together and then to the unorderedlist
  for (let i = 0; i < pageTotal; i += 1) {
    var pageNum = i + 1;
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = pageNum;
    a.href = "#";
    li.appendChild(a);
    ul.appendChild(li);
  }
  // Adds functions to the buttons to initiate the showpage function when clicked and display the correct roster of students stored in
  // each page symbol
  var a = document.querySelectorAll('a');
  for(let i = 0; i < a.length; i += 1) {
    a[0].setAttribute('class','active');
    a[i].addEventListener('click', () => {
      showPage(stuList, a[i].textContent);
      var highLit = event.target;
      if ( highLit.tagName == 'A') {
        var totAnchors = document.querySelectorAll('.pagination a');
        for (let i = 0; i < totAnchors.length; i += 1) {
          totAnchors[i].classList.remove('active');
    }
    event.target.setAttribute('class','active');
  }
  });
  }
};
// calls the appendPageLinks function to initaite when the page is loaded
appendPageLinks(stuList);
