var ulEntry = document.getElementById("ulEntry");
var addEntry = document.getElementById("addEntry");

function todoList(e){
	var entryInput = document.getElementById("entryInput").value;
	var newLi = document.createElement("li");
	newLi.className = "list-group-item";
	newLi.appendChild(document.createTextNode(entryInput));
  	var deleteBtn = document.createElement('button');
  	deleteBtn.className = 'btn btn-danger btn-sm float-right delete fas fa-trash-alt';
  	newLi.appendChild(deleteBtn);
  	ulEntry.appendChild(newLi);
	document.getElementById("entryInput").value = "";
	
	deleteBtn.addEventListener('click', function(e) {
		setTimeout(function (){demo.style.visibility = "hidden";}, 4000);
		demo.className = "alert alert-danger";
		demo.innerHTML = "An Item has been deleted";
		setTimeout(function(){demo.style.visibility= "visible";}, 1000);
        newLi.parentNode.removeChild(newLi);
    }, false);
    newLi.appendChild(deleteBtn);
}

var demo = document.getElementById("setAlert");

addEntry.addEventListener("click", function(){
	setTimeout(function (){demo.style.visibility = "hidden";}, 4000);
	demo.className = "alert alert-success";
	demo.textContent = "A New Item has been added Successfully!!";
	setTimeout(function(){demo.style.visibility= "visible";}, 1000);		
});
