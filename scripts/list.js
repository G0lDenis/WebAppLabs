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
    var new_element = document.createElement("li");
    var inputValue = document.getElementById("inputField").value;
    var t = document.createTextNode(inputValue);
    new_element.appendChild(t);

    if (inputValue === '') {
        alert("Empty input(");
    } else {
        document.getElementById("tasks").appendChild(new_element);
    }
    document.getElementById("inputField").value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    new_element.appendChild(span);

    span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    };

    return false;
});

document.getElementById("saveButton").addEventListener("click", function(event) {
    const todos = Array.from(document.getElementsByTagName("li")).map(li => {
        console.log(li.style.display);
        return {
            text: li.textContent.substring(0, li.textContent.length - 1),
            checked: li.classList.contains("checked"),
            display: li.style.display === "none"
        };
    });

    localStorage.setItem('todos', JSON.stringify(todos));
});

document.getElementById("loadButton").addEventListener("click", function(event) {
    Array.from(document.getElementsByTagName("li")).forEach(li => {
        li.remove();
    });
    Array.from(JSON.parse(localStorage.getItem('todos'))).forEach(li => {
        var new_element = document.createElement("li");
        var t = document.createTextNode(li.text);
        new_element.appendChild(t);

        document.getElementById("tasks").appendChild(new_element);

        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        new_element.appendChild(span);

        span.onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        };

        if (li.checked) {
            new_element.classList.toggle('checked');
        } else if (li.display) {
            new_element.style.display = "none";
        }
    });
});