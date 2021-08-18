$(document).ready(function(){
  $('#dropDown').click(function(event){
    $('.drop-down').toggleClass('drop-down--active');
    event.stopPropagation();
  });
  $(document).click(function(event) {
      if (!$(event.target).hasClass('drop-down--active')) {
          $(".drop-down").removeClass("drop-down--active");
      }
    });
});




// code input mois
// On définit des variables
var nativePicker = document.querySelector('.nativeDatePicker');
var fallbackPicker = document.querySelector('.fallbackDatePicker');
var fallbackLabel = document.querySelector('.fallbackLabel');

var yearSelect = document.querySelector('#year');
var monthSelect = document.querySelector('#month');

// Par défaut on masque le sélecteur alternatif
fallbackPicker.style.display = 'none';
fallbackLabel.style.display = 'none';

// On teste si un nouveau contrôle est automatiquement
// converti en un champ texte
var test = document.createElement('input');
test.type = 'month';
// Si c'est le cas, on exécute le code dans ce bloc if
if(test.type === 'text') {
  // on masque le sélecteur natif et on masque le sélecteur alternatif
  nativePicker.style.display = 'none';
  fallbackPicker.style.display = 'block';
  fallbackLabel.style.display = 'block';

  // on génère les valeurs pour les années
  populateYears();
}

function populateYears() {
  // On récupère l'année courante
  var date = new Date();
  var year = date.getFullYear();

  // On ajoute l'année courante et les 100 années à venir
  // dans l'élément <select> pour l'année
  for(var i = 0; i <= 100; i++) {
    var option = document.createElement('option');
    option.textContent = year-i;
    yearSelect.appendChild(option);
  }
}


// progress bar
$(document).ready(function() {
  var max_fields      = 10; //maximum input boxes allowed
  var wrapper         = $(".input_fields_wrap"); //Fields wrapper
  var add_button      = $(".add_field_button"); //Add button ID
 
  var x = 1; //initlal text box count


 $(add_button).click(function(e){ //on add input button click
      e.preventDefault();
      if(x < max_fields){ //max input box allowed

       //text box increment
          $(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
          x++; 
  }
  });
 
  $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
     
  e.preventDefault(); 
  $(this).parent('div').remove(); 
  x--;
  })
});

