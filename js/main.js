var FIRST_DATE = '2016-02-18';
var DATE_FORMAT = 'MMMM Do, YYYY';
var SCROLL_ANIMATE_TIMEOUT = 700;
var THURSDAY = 4;


var isChrome = window.chrome;
if(isChrome){
  var bars = document.getElementsByClassName('bar');

  for( var i = 0; i < bars.length; i++){
     bars[i].style.fontWeight = 'bold';
  }
}


document.addEventListener("DOMContentLoaded", function(event) {
   var barDate = moment(FIRST_DATE);
   var bars = document.getElementsByClassName('date');
   var nextThurs;

   // if we haven't yet passed the day of the week that I need:
   if (moment().isoWeekday() <= THURSDAY) {
     nextThurs =  moment().isoWeekday(THURSDAY);
   }
   else {
     nextThurs =  moment().add(1, 'weeks').isoWeekday(THURSDAY);
   }

   var nextThursFormat = nextThurs.format(DATE_FORMAT);

   var scrollToBarIndex = 0;
   barDate.add(1, 'week');

   for (var i = 0; i < bars.length; i++) {
      var barDateFormat = barDate.format(DATE_FORMAT);

      if(barDateFormat == nextThursFormat){
         scrollToBarIndex = i;
      }

      if(bars[i].classList.contains('thurs')){
         bars[i].textContent = barDateFormat;
         barDate.add(1, 'week');
      }
   }

   bars[scrollToBarIndex].parentElement.className += "active";
   setTimeout(function(){
      if( scrollToBarIndex > 0){
         smoothScroll(bars[scrollToBarIndex - 1]);
      }
   },SCROLL_ANIMATE_TIMEOUT);

})
