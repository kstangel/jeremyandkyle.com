var FIRST_DATE = '2016-02-18';
var DATE_FORMAT = 'MMMM Do, YYYY';
var SCROLL_ANIMATE_TIMEOUT = 700;

var isChrome = window.chrome;
if(isChrome){
  var bars = document.getElementsByClassName('bar');

  for( var i = 0; i < bars.length; i++){
     bars[i].style.fontWeight = 'bold';
  }
}


document.addEventListener("DOMContentLoaded", function(event) {
   var previousDate = moment(FIRST_DATE);
   var bars = document.getElementsByClassName('date');

   var nextThurs = moment().day(4);
   var nextThursFormat = nextThurs.format(DATE_FORMAT);

   var scrollToBarIndex = 0;

   for (var i = 0; i < bars.length; i++) {

      var barDate = previousDate.add(1, 'week');
      var barDateFormat = barDate.format(DATE_FORMAT);

      if(barDateFormat == nextThursFormat){
         scrollToBarIndex = i;
      }

      if(bars[i].classList.contains('thurs')){
         bars[i].textContent = barDateFormat;
         previousDate = barDate;
      }
   }

   bars[scrollToBarIndex].parentElement.className += "active";
   setTimeout(function(){
      if( scrollToBarIndex > 0){
         smoothScroll(bars[scrollToBarIndex - 1]);
      }
   },SCROLL_ANIMATE_TIMEOUT);

})
