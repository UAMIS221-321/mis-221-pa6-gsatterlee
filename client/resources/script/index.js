function handleOnLoad(){
    populateList();
}
function handleOnChange(){
    const selectedID = document.getElementById("selectListBox").value;
    bookList.forEach((book)=>{
if(book.id == selectedID){
    myBook = book;
}


    });

populateForm();
    
}

function handleEditclick(){
    makeEditable();
    hideButtons();
    var buttonHiml = "<button class=\"btn btn-primary btn-1g\" onclick=\"handleEditSave("+myBook.id+")\">Save</button>"
    buttonHtml += "<button class=\"btn btn-warning btn-1g btn-cancle\" onclick=\"handleCancelSave()\">Cancel</button>"
    document.getElementById ("saveButton").innerHTML = buttonHtml;
    document.getElementById ("saveButton").style.display = "inline-block";
}
   
   
    function handleNewClick(){
    makeEditable();
    hideButtons();
    blankFields();
    var buttonHtml = "<button class=\"btn btn-primary btn-lg\" onclick=\"handleNewSave()\">Save</button>"
    buttonHtml += "<button class=\"btn btn-warning btn-1g btn-cancle\" onclick=\"handleCancelSave()\">Cancel</button>"
    document.getElementById ("savebutton" ).innerHTML = buttonHtml;
    document.getElementById ("saveButton" ).style.display = "inline-block";
    }

    function handleRentclick(){ myBook. numAv1b--;
        document.getElementById ("bookAvlb").value = myBook.numAvlb;
        putBook(myBook.id);
    }
        function handleReturnClick(){
        myBook.numAv1b++;
        document.getElementById ("bookAvlb").value = myBook.numAvlb;
        putBook (myBook.id);
        }

        function handleDeleteClick(){
        deleteBook();
        }

function handleCancelSave(){
populateForm();
makeReadOnly();
showButtons();
}

function handleEditSave(id){
putBook(id);
makeReadonly();
showButtons();
}

function handleNewSave(){

postBook();
makeReadonly();
showButtons();
blankFields();
}

function populateForm(){


document.getElementById ("bookTitle").value = myBook.title;
document.getElementById ("bookAuthor").value = mybook.author;
document.getElementById ("bookenre").value = myBook.genre;
document.getElementById ("bookAv1b").value = myBook.numAvlb;
document.getElementById ("bookIsbn").value = myBook.isbn;
document.getElementById ("bookLength").value = myBook.length;
document.getElementById ("bookCover").value = myBook. cover;
var html = "<img class = \"coverArt\" src= \"" + myBook.cover + "\"></img>";
document.getElementById ("picBox"). innerHTML = html;
}

function hideButtons(){
document.getElementById ("newButton").style.display = "none";
document.getElementById ("editButton").style.display = "none";
document.getElementById ("deleteButton").style.display = "none";
document.getElementById ("rentButton").style.display = "none";
document.getElementById ("returnButton").style.display = "none";
}

function showButtons (){
document.getElementById ("newButton").style.display = "inline-block";
document.getElementById ("editButton" ).style.display = "inline-block";
document.getElementById ("deleteButton").style.display = "inline-block";
document.getElementById ("rentButton" ).style.display = "inline-block";
document.getElementById ("returnButton").style.display = "inline-block";
document.getElementById ("saveButton"). style.display = "none";
}

function blankFields(){

    document.getElementById ("bookTitle").value="";
    document.getElementById ("bookAuthor").value="";
    document.getElementById ("bookGenre" ).value="";
    document.getElementById ("bookAvlb").value="";
    document.getElementById ("bookIsbn").value="";
    document.getElementById ("bookLength").value="";
    document.getElementById ("bookCover").value="";
}



    function makeReadOnly(){
    document.getElementById ("bookTitle").readOnly=true;
    document.getElementById ("bookAuthor").readOnly=true;
    document.getElementById ("bookGenre").readOnly=true;
    document.getElementById ("bookAvlb").readOnly=true;
    document.getElementById ("bookIsbn").readOnly=true;
    document.getElementById ("bookLength").readOnly=true;
    document.getElementById ("bookCover").readOnly=true;
    }