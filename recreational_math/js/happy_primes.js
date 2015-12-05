var lowVal;
var highVal;

$( "#inputButton" ).click(function() {

  clearResults();

  lowVal = parseInt ( $( "#low" ).val() );
  highVal = parseInt ( $( "#high" ).val() );

  caseCheck ( lowVal, highVal );
    // $( "span" ).text($( "input:first" ).val()).show();

    event.preventDefault();
  });

  // $("#inputButton").click( checkHappyPrime( $( "input:first" ).val() ) );

function caseCheck ( low , high ) {
  if ( low == high ) {
    message ( low );
  } else if (low < 0 || high < 0) {
    $("#output").append("Both numbers must be positive");
  } else if (low > high) {
    $("#output").append("Upper Bound must be greater than Lower Bound");
  } else {
    checkHappyPrime ( low , high );
  }
}
// $("#inputButton").submit( checkHappyPrime( $("#inputValue").val() ) )

function clearResults() {
  $("#output").html("");
}

function checkHappyPrime( low , high ){
  for (var i = low; i <= high; i++) {
    if ( isPrime(i) && isHappy(i) ) {
      $("#output").append(i + "<br>");
    }
  }
  // $("span").text( happy ).show();
}

function isPrime(num) {
  var sqrt = Math.sqrt(num);
  if ( Number.isInteger(sqrt) ) {
    return false;
  }

  var j = Math.floor(sqrt);
  for (var i = j; i >= 2; i--) {
    if ( num % i == 0 ) {
      return false;
    }
  }

  return true;
}

function isHappy(num) {
  var digits;
  var run = true;
  var current = num;

  while ( run ) {
    digits = digitCount( current );
    current = sumOfSquareOfDigits( current , digits );
    if ( current == 1 ) {
      return true;
    } else if (current == 4) {
      return false;
    } else {
      continue;
    }
  }
}

function message ( key ){
  if (key == 7) {
    $("#output").append("You are the woman I always dreamed I'd be with");
  } else if (key == 13) {
    $("#output").append("I love you");
  } else if (key == 19) {
    $("#output").append("Now you're just getting greedy");
  } else if ( isHappy(key) && isPrime(key) ) {
    $("#output").append("You're on the right track. Try starting lower");
  } else {
    $("#output").append("Hmmm, nothing happened");
  }
}

function sumOfSquareOfDigits( num , digits ) {
  var sum = 0;
  var thisPlace;
  var sub;

  for (var i=digits; i >= 1; i--) {
    thisPlace = Math.floor( num / Math.pow(10, i-1) );
    sum += thisPlace * thisPlace;
    num -= thisPlace * Math.pow(10,i-1);
  }

  return sum;
}

function digitCount( num ) {
  var digits = 2;
  var i = 0;
  while (digits >= 1) {
    i++;
    digits = num / Math.pow( 10, i );
  }
  return i;
}
