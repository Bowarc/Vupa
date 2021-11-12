console.log("GET THE FUCK OUT OF THE CONSOLE :)");
let a = 0;

function sleep(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* Do nothing */ }
}
console.log("This is a test 1");
// sleep(1000);
console.log("This is a test 2");
// while (true) {
//     console.log(a);
//     a = a + 1;
//     if (a > 100) {
//         break;
//     }
// }
function setModifiedDate() {
    let a;
    if (document.getElementById('MyClockDisplay')) {

    fetch("https://api.github.com/repos/bowarc/Vupa/commits?")
        .then((response) => {
            // a = response.json();
            return response.json();
        })
        .then((commits) => {
            var modified = commits[0]['commit']['committer']['date'].slice(11, 19);
            a = modified
            // return modified
            document.getElementById("MyClockDisplay").innerText = modified;
            document.getElementById("MyClockDisplay").textContent = modified;
        });
    }
    return a
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
// showTime();

function showLastUpdateTime(StartupTime){
    // console.log(fetch("https://api.github.com/repos/bowarc/Vupa/commits?path=index.html"))
    console.log(setModifiedDate())
    setTimeout(showLastUpdateTime, 60000)
}

showLastUpdateTime(performance.now());
