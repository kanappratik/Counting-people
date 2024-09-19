let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;
console.log(saveEl)

//console.log(countEl)


function increment() {
    count = count + 1;
    countEl.innerText = count;
}
function save(){
    let countstr = count + " upnext is : ";
    saveEl.textContent += countstr;
    console.log(count);
    countEl.textContent=0
}
     

