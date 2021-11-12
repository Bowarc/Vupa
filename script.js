const MILLI = 1;
const SECOND = MILLI * 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

var last_commit_date = new Date();
var last_commit_date_check_status = 0

//Finish this
function sleep(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* Do nothing */ }
}

function readFile(file){
    return JSON.parse(file)
}
function timeSince(date) {
    function add_pluriel(n, time){
        sentense = n + " " + time;
        if (n > 1){
            sentense +=  "s";
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
    interval = seconds
    if (interval > 0) {
        return add_pluriel(Math.floor(interval), "second")
    }
}


function getModifiedDate() {
    if (document.getElementById('MyClockDisplay')) {
    fetch("https://api.github.com/repos/bowarc/Vupa/commits?")
        .then((response) => {
            last_commit_date_check_status = response.status;
            return (response.status, response.json());
        })
        .then((status, commits) => {
            if (status == 200){
                last_commit_date = commits[0]['commit']['committer']['date'];
            }else{
                console.log("If you see a 203 message, don't worry it's probably me being temp banned when testing things with github's api")
                // console.log(status)
            }            
        });
    }
    setTimeout(getModifiedDate, MINUTE * 5)
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


function showLastUpdateTime(){
    let message;

    if (last_commit_date_check_status == 200){
        mesasge = timeSince(Date.parse(last_commit_date))
    }else{
        console.log("Unable to find the time since the last update code: ", last_commit_date_check_status)
        message = " "
    }
    document.getElementById("MyClockDisplay").innerText = message;
    document.getElementById("MyClockDisplay").textContent = message;
    setTimeout(showLastUpdateTime, SECOND * 1)
}

// showTime();
showLastUpdateTime();
getModifiedDate();
