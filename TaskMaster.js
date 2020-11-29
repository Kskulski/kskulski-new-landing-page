function addItem() {
    var list = document.createElement("li");
    var newInput = document.getElementById("newInput").value;
    var text = document.createTextNode(newInput);
    list.appendChild(text);
    if (newInput == "") {
        alert("Write something first!");
    } else {
        document.getElementById("itemUL").appendChild("list");
    }
    document.getElementById("newInput").value = "";

    var close = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "x";
    x.appendChild(text);
    list.appendChild(close);

    //fix?
    for (i = 0; i < x.length; i++) {
        x[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function importList() {

}

function login() {

}

function save() {

}

function newList() {
    
}
//onload?