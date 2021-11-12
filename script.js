console.log("GET THE FUCK OUT OF THE CONSOLE :)");

const SECOND = 1;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

let a = 0;

function sleep(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* Do nothing */ }
}

function timeSince(date) {
    function add_pluriel(n, time){
        sentense = n + " " + time
        if (n > 1){
            sentense = sentense + "s"
        }
        return sentense
    }

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;
    if (interval > 1) {
        return add_pluriel(Math.floor(interval), "year")
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return add_pluriel(Math.floor(interval), "month")
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return add_pluriel(Math.floor(interval), "days")
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return add_pluriel(Math.floor(interval), "hour")
    }
    interval = seconds / 60;
    if (interval > 1) {
        return add_pluriel(Math.floor(interval), "minute")
    }
    return "Less than 1 minute ago"
    // return add_pluriel(Math.floor(interval), "second")
}

function setModifiedDate() {
    if (document.getElementById('MyClockDisplay')) {
    fetch("https://api.github.com/repos/bowarc/Vupa/commits?")
        .then((response) => {
            return response.json();
        })
        .then((commits) => {
            var modified = commits[0]['commit']['committer']['date']

            document.getElementById("MyClockDisplay").innerText = timeSince(Date.parse(modified));
            document.getElementById("MyClockDisplay").textContent = timeSince(Date.parse(modified));
        });
    }
}

function showTime(){
    // https://codepen.io/afarrar/pen/JRaEjP
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    // var session = "AM";
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);    
}


function showLastUpdateTime(StartupTime){
    // console.log(fetch("https://api.github.com/repos/bowarc/Vupa/commits?path=index.html"))
    // console.log()
    setModifiedDate()
    setTimeout(showLastUpdateTime, SECOND * 1)
}

// showTime();
showLastUpdateTime(performance.now());
