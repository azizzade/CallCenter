/*calendar*/

function generate_year_range(start, end) {
  var years = "";
  for (var year = start; year <= end; year++) {
      years += "<option value='" + year + "'>" + year + "</option>";
  }
  return years;
}

today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");


createYear = generate_year_range(1970, 2050);
/** or
* createYear = generate_year_range( 1970, currentYear );
*/

document.getElementById("year").innerHTML = createYear;

var calendar = document.getElementById("calendar");
var lang = calendar.getAttribute('data-lang');

var months = "";
var days = "";

var monthDefault = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];

var dayDefault = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

if (lang == "en") {
  months = monthDefault;
  days = dayDefault;
} else if (lang == "id") {
  months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Dekabr"];
  days = ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
} else if (lang == "fr") {
  months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
} else {
  months = monthDefault;
  days = dayDefault;
}


var $dataHead = "<tr>";
for (dhead in days) {
  $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
}
$dataHead += "</tr>";

//alert($dataHead);
document.getElementById("thead-month").innerHTML = $dataHead;


monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);



function next() {
  currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

function previous() {
  currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
  currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function jump() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

  var firstDay = ( new Date( year, month ) ).getDay();

  tbl = document.getElementById("calendar-body");

  
  tbl.innerHTML = "";

  
  monthAndYear.innerHTML = months[month] + " " + year;
  selectYear.value = year;
  selectMonth.value = month;

  // creating all cells
  var date = 1;
  for ( var i = 0; i < 6; i++ ) {
      
      var row = document.createElement("tr");

      
      for ( var j = 0; j < 7; j++ ) {
          if ( i === 0 && j < firstDay ) {
              cell = document.createElement( "td" );
              cellText = document.createTextNode("");
              cell.appendChild(cellText);
              row.appendChild(cell);
          } else if (date > daysInMonth(month, year)) {
              break;
          } else {
              cell = document.createElement("td");
              cell.setAttribute("data-date", date);
              cell.setAttribute("data-month", month + 1);
              cell.setAttribute("data-year", year);
              cell.setAttribute("data-month_name", months[month]);
              cell.className = "date-picker";
              cell.innerHTML = "<span>" + date + "</span>";

              if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
                  cell.className = "date-picker selected";
              }
              row.appendChild(cell);
              date++;
          }


      }

      tbl.appendChild(row);
  }

}

function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}

let calendar_icon = document.querySelector(".calendar_icon");
let calendar_code = document.querySelector(".calendar_code");

calendar_icon.addEventListener("click", function(){
  if (calendar_code.style.display === "none") {
    calendar_code.style.display = "block";
  } else {
    calendar_code.style.display = "none";
  }
}) 


let play_icon = document.querySelector("#play_icon");
let audio_style = document.querySelector(".audio_style");

play_icon.addEventListener("click", function(){
  if (audio_style.style.display === "none") {
    audio_style.style.display = "block";
  } else {
    audio_style.style.display = "none";
  }
}) 



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
})


let operator_edit_button = document.querySelector(".operator_edit_button");
let edit_delete_btn = document.querySelectorAll(".edit_delete_btn");

operator_edit_button.addEventListener('click', function() {

  for (let index = 0; index < edit_delete_btn.length; index++) {
    edit_delete_btn[index];
    console.log(edit_delete_btn);
  }
  if (edit_delete_btn.style.display === "none"){
    edit_delete_btn.style.display = "block";
    edit_delete_btn.style.display = "flex";
  }else {
    edit_delete_btn.style.display = "none";
  }
  
})

let delete_btn = document.querySelector(".delete_btn");
let modal_delete = document.querySelector(".modal_delete");
let chanel_btn =document.getElementById("chanel_btn");

delete_btn.addEventListener('click', function(){
  modal_delete.style.display = "block";
})

chanel_btn.addEventListener('click', function(){
  modal_delete.style.display = "none";
})