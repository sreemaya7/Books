//select the popup box and show the box on the screen covering the home screen//
var addingbookform=document.getElementById("addingbookform");
var shade=document.getElementById("shade");
var plus=document.getElementById("plus");


plus.addEventListener("click",function(){
   addingbookform.style.display="block"
   shade.style.display="block"
 })
// to cancel the form //
cancel=document.getElementById("cancel")
 var bookname=document.getElementById("bookformname")
 cancel.addEventListener("click",function(){
   event.preventDefault(); 
   addingbookform.style.display="none"
   shade.style.display="none"
 })

  //TO ADD NEW BOOKS IN THE HOME SCREEN  by clicking the "addingbookform" which contains the details which will be stored in the "bookbox" //
  
  add=document.getElementById("add");
  //to select frontpage ("bookbox"),bookname,authornam,description//
  var frontpage=document.querySelector(".frontpage")
  var bookname=document.getElementById("bookformname")
  var bookformauthorname=document.getElementById("bookformauthorname")
  var description=document.getElementById("description")

  //event of when i click add button it must add the form into front ie bookbox in the black box //
  add.addEventListener("click",function(){
     var div=document.createElement("div")
     div.setAttribute("class","bookbox");
     div.innerHTML=`<h2>${bookname.value}</h2>
                    <h4>${bookformauthorname.value}</h4>
                    <p>${description.value}</p>
                    <button onclick="deletedthebook(event)">Delete</button>`;
    frontpage.appendChild(div);
    
     addingbookform.style.display="none";
     shade.style.display="none";
 })
 //to deletd the added book in the homescreen we use delete to remove the entire book//
    //select the delete button//
    var deletethebook=document.getElementById("deletebook");

 //to delete the book//
    function deletedthebook(event){
      event.target.parentElement.remove();
    }



//if i click account button it must take to login page in other html //
