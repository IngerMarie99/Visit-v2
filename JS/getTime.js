export function getTime() {
    let output = document.getElementById('output');
let numberDate = document.getElementById('date');

let d = new Date();
let day = d.getDay();
let ndate = d.toLocaleString();

switch (day){
    case 0:
        day = "Søndag";
        break;
    case 1:
        day = "Mandag";
        break;
    case 2:
        day = "Tirsdag";
        break;
    case 3:
        day = "Onsdag";
        break;
    case 4:
        day= "Torsdag";
        break;
    case 5:
        day= "Fredag";
        break;
    case 6:
        day= "Lørdag";
        break;
}

output.innerHTML = day;
date.innerHTML = ndate;
}
