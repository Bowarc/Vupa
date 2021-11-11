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

function AnimateTitle(phase1, phase2){
    let wanted_title = "Awopa";
    let text = wanted_title.slice(phase2,phase1);

    let obj = document.getElementById("title");
    if (text == ""){
        text = "u"
        console.log("yes")
    }
    let style = window.getComputedStyle(obj, null)
    obj.textContent  = text;
    console.log(style)
    obj.style = style;
    // document.getElementById("title").textContent = text;

    if (phase1 > wanted_title.length - 1){
        phase2 = phase2 + 1;
        if (phase2 > wanted_title.length - 1){
            phase1 = 0;
            phase2 = 0;
        }
    }else{
        phase1 = phase1 + 1;
    }

    setTimeout(AnimateTitle.bind(null, phase1, phase2), 500);
}

// AnimateTitle(0,0);
showTime();