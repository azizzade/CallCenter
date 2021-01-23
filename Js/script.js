
let play_icon = document.querySelector("#play_icon");
let audio_style = document.querySelector(".audio_style");

play_icon.addEventListener("click", function(){
  if (audio_style.style.display === "none") {
    audio_style.style.display = "block";
  } else {
    audio_style.style.display = "none";
  }
})

// $(document).ready(function(){
//   $("p").click(function(){
//     $(this).hide();
//   });

//   $(".diogram_title").click(function(){

//   })
// });









