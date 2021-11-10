console.log("GET THE FUCK OUT OF THE CONSOLE :)");
let a = 0;

function sleep(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* Do nothing */ }
}
console.log("salut");
// sleep(1000);
console.log("salut");
// while (true) {
//     console.log(a);
//     a = a + 1;
//     if (a > 100) {
//         break;
//     }
// }

function CustomFunc() {
    console.log("salut");
    let obj = document.getElementById("title");
    obj.style.color = "red";
}