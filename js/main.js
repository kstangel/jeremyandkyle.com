var isChrome = window.chrome;
if(isChrome){
   var bars = document.getElementsByClassName('bar');

   for( var i = 0; i < bars.length; i++){
      bars[i].style.fontWeight = 'bold';
   }
}

document.addEventListener("DOMContentLoaded", function(event) {
   var previousDate = moment('2016-02-18');
   var bars = document.getElementsByClassName('thurs');

   for (var i = 0; i < bars.length; i++) {
      var barDate = previousDate.add(1, 'week');
      var barDateFormat = barDate.format('MMMM Do, YYYY');
      bars[i].textContent = barDateFormat;
      previousDate = barDate
   }
});
