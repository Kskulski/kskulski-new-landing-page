function addItem() {
    var item = document.createElement("li");
    var input = document.getElementById("newInput").value;
    var text = document.createTextNode(input);
    item.appendChild(text);
    if (input == "") {
        alert("Write something first!");
    } else {
        document.getElementById("itemUL").appendChild(item);
    }
    document.getElementById("newInput").value = "";

    var close = document.createElement("SPAN");
    text = document.createTextNode("X");
    close.className = "x";
    close.appendChild(text);
    item.appendChild(close);

//fix? ul remove child
    for (i = 0; i < x.length; i++) {
        x[i].onclick = function() {
            var remove1 = this.parentElement;
            //var remove2 = getElementById("itemUL");
            remove1.removeChild(remove1)
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