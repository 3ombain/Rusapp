function show($pwd) {
    var p = document.getElementById($pwd);
    p.setAttribute('type', 'text');
}

function hide($pwd) {
    var p = document.getElementById($pwd);
    p.setAttribute('type', 'password');
}

var pwShown = 0;


var span = document.getElementById('spa');
var ul = span.nextSibling.nextSibling;

span.onclick = function() {
  console.log(span, ul);
	if (span.classList.contains('menu') == false) {
    span.classList.add('menu');
    ul.style.display = "block";
  } else {
    span.classList.remove('menu');
    ul.style.display = "none";
  }

}

function getDate()
{
    var date = new Date();

    var yarNaw = date.getFullYear();
    var monthNaw = date.getMonth()+1; 
    if(monthNaw < 10)
    {
        monthNaw = '0' + monthNaw;
    }
    var dayNaw = date.getDate();
    if(dayNaw < 10)
    {
        dayNaw = '0' + dayNaw;
    }
    var hours = date.getHours();
    if(hours < 10)
    {
        hours = '0' + hours;
    }
    var minutes = date.getMinutes();
    if(minutes < 10)
    {
        minutes = '0' + minutes;
    }

    document.getElementById('timedisplay').innerHTML = hours + ':' + minutes + '&nbsp&nbsp&nbsp' + yarNaw + '.' + monthNaw + '.' + dayNaw;
}
setInterval(getDate, 0);