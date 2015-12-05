

$("button").click( checkHappyPrime ( $("input").val() ) );




function checkHappyPrime (num) {
  var nth = num;
  var iterator = 2;

  while (nth == 0) {

  }

  $("#output").html(nth);
}

function isHappy(num) {

}

function digitCount(num) {

  var digits
  var i = 1;
  while (digits >= 1) {
    digits = num / Math.pow( 10, i );
    i++;
  }
}
