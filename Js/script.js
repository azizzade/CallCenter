let play_icon = document.querySelector("#play_icon");
let audio_style = document.querySelector(".audio_style");

play_icon.addEventListener("click", function(){
  if (audio_style.style.display === "none") {
    audio_style.style.display = "block";
  } else {
    audio_style.style.display = "none";
  }
})

let operator_edit_button = document.querySelector(".operator_edit_button");
 operator_edit_button.addEventListener("click", function(){
   list_content = document.querySelector(".operator_list_content");
   list_content.classList.toggle("active-edit");
 });









