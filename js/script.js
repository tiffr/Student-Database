/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function createElement(elementName, appendTo) {
   const element = document.createElement(elementName);
   appendTo.appendChild(element);

}

function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   const ul = document.querySelector(".student-list");
   ul.innerHTML = "";
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         createElement(li,ul);
         createElement(div, li)
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
