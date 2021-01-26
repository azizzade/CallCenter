let new_operator_btn = document.querySelector(".new_button");
let close_btn = document.querySelector(".close_button");
let modal = document.querySelector(".modal");

new_operator_btn.addEventListener("click", function() {
    modal.style.display = "block";
});

close_btn.addEventListener("click", function() {
    modal.style.display = 'none';
});

window.addEventListener("click", function() {
    if(event.target == modal){
        modal.style.display = 'none';
    }
});



let delete_btn = document.querySelectorAll(".delete_btn");
let modal_delete = document.querySelector(".modal_delete");
let chanel_btn =document.getElementById("chanel_btn");

for (let index = 0; index < delete_btn.length; index++) {
  delete_btn[index].addEventListener('click', function(){
    modal_delete.style.display = "block";
  })
}

chanel_btn.addEventListener('click', function(){
  modal_delete.style.display = "none";
});

let admin_sign_out = document.querySelector(".admin_sign_out");
let sign_out_modal = document.querySelector(".sign_out_modal");
let sign_out_chanel = document.querySelector(".sign_out_modal");


admin_sign_out.addEventListener("click", function() {
  sign_out_modal.style.display = "block";
});

sign_out_chanel.addEventListener("click", function() {
  sign_out_modal.style.display = "none";
})

