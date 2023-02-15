function show($pwd) {
    var p = document.getElementById($pwd);
    p.setAttribute('type', 'text');
}

function hide($pwd) {
    var p = document.getElementById($pwd);
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show('pwd');
    } else {
        pwShown = 0;
        hide('pwd');
    }
}, false);

document.getElementById("eye2").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show('pwd2');
    } else {
        pwShown = 0;
        hide('pwd2');
    }
}, false);