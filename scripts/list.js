var li_elements = document.getElementsByTagName("li");
var i;
for (i = 0; i < li_elements.length; i++) {
    var span = document.createElement("span");
    var cross = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(cross);
    li_elements[i].appendChild(span);
}

var close_btns = document.getElementsByClassName("close");
for (i = 0; i < close_btns.length; i++) {
    close_btns[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var ul_elements = document.querySelector('ul');
ul_elements.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

document.getElementById("formInsert").addEventListener("submit", function(event) {
    event.preventDefault();
    var new_elelent = document.createElement("li");
    var inputValue = document.getElementById("inputField").value;
    var t = document.createTextNode(inputValue);
    new_elelent.appendChild(t);

    if (inputValue === '') {
        alert("Empty input(");
    } else {
        document.getElementById("tasks").appendChild(new_elelent);
    }
    document.getElementById("inputField").value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    new_elelent.appendChild(span);

    span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    };

    return false;
});