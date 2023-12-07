const btn = document.getElementsByClassName('button')[0];
btn.onclick =()=>{
    let user = document.getElementById("userid").value;

let ip = [
  `726.95.55.265`,
  `223.45.55.265`,
  `523.45.46.265`,
  `375.45.35.823`,
  `193.95.35.265`,
  `648.95.56.26.`,
  `123.45.35.265`,
  `132.95.36.265`,
  `123.45.34.266`,
];

let randomIndex = Math.floor(Math.random() * ip.length);
let randomElement = ip[randomIndex];

const messages = [
  `Initialized The Data From the Wifi Network, Please Wait.....`,
  `Searching for the ${user}'s system, please wait......`,
  `${user} Found.`,
  `Preparing the The system and Phishing The data of ${user}'s.......`,
  `Fetching The data from the system, please wait........`,
  `${user} System has been successfully Hacked.`,
  `${user}'s Ip address ${randomElement}`	,
  `Process Done Successfully.`,
];


const time = async (milliseconds) => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(true)
        },milliseconds)
    })
}
const hackfunc = async (msg) => {
    await time(Math.random()*3000);
    const Output_box = document.body.getElementsByClassName("output")[0];
    Output_box.innerHTML = Output_box.innerHTML + " " + msg + `<br><br>`

}

const hack = async ()=>{
    for(let i = 0;i<messages.length;i++){
    const element  = messages[i]
    await hackfunc(element)
}
}
hack();
}
// const btn2 = document.getElementsByClassName('button2')[0];
// btn2.onclick =()=>{
//     document.getElementsByClassName("output")[0].style.display = "none";
    
// }
