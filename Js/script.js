let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

if (day < 10) {
  day = '0' + day
}
if (month < 10) {
  month = '0' + month
}

let out = document.getElementById("output");

out.innerHTML = day + "/" + month + "/" + year;


// let list = document.querySelector("a div");

// list.addEventListener("click", function(){
//     list.classList.toggle(".active");
// })

