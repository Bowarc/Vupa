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

function CustomFunc() {
    console.log("Hey");
    let obj = document.getElementById("title");
    obj.style.color = "red";
}

function showTime(){
    // https://codepen.io/afarrar/pen/JRaEjP
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    // if(h == 0){
    //     h = 12;
    // }
    // if(h > 12){
    //     h = h - 12;
    //     session = "PM";
    // }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " ";
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();