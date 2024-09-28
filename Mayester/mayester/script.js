function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var school = document.getElementById('school').value;

    if (username === "gry" && password === "DanielG1" && school === "RSB") {
        window.location.href = 'gry/gry.html';
    } else {
        alert("Login failed! Incorrect username, password, or school.");
    }
}

function openTab(tabName) {
    var i, tabcontent, tablinks;
    
    // Hide all articles
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    // Show the current tab
    document.getElementById(tabName).classList.add("active");
    
    // Remove active-tab class from all buttons
    tablinks = document.querySelectorAll("aside button");
    tablinks.forEach(function(link) {
        link.classList.remove("active-tab");
    });
    
    // Add active-tab class to the button
    document.getElementById(tabName + "Tab").classList.add("active-tab");
}

document.getElementById("toggleBtn").onclick = function() {
    var secondDiv = document.getElementById("secondDiv");
    if (secondDiv.style.display === "none") {
        secondDiv.style.display = "block";
    } else {
        secondDiv.style.display = "none";
    }
};

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('thetime').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function increaseFontSize() {
    var timeDiv = document.getElementById("thetime");
    var currentSize = window.getComputedStyle(timeDiv, null).getPropertyValue('font-size');
    var newSize = parseFloat(currentSize) + 2;
    timeDiv.style.fontSize = newSize + 'px';
}

function decreaseFontSize() {
    var timeDiv = document.getElementById("thetime");
    var currentSize = window.getComputedStyle(timeDiv, null).getPropertyValue('font-size');
    var newSize = parseFloat(currentSize) - 2;
    timeDiv.style.fontSize = newSize + 'px';
}

function formatText(command) {
    const textarea = document.getElementById('scratchpad');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    let newText = '';

    switch (command) {
        case 'bold':
            newText = `**${selectedText}**`;
            break;
        case 'italic':
            newText = `*${selectedText}*`;
            break;
        case 'underline':
            newText = `__${selectedText}__`;
            break;
    }

    textarea.value = textarea.value.substring(0, start) + newText + textarea.value.substring(end);
}
document.querySelectorAll('.toolbar button').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('scratchpad').focus();
    });
});

window.onload = function() {
    document.getElementById('school').value = 'RSB';
  };