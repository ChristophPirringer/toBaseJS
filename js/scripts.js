var toTenBase = {

  fromBinary: function(number){
    var input_array = String(+number).split("")
    var power_array = [];
    var result = 0;

    do{
      var i = 0;
      power_array.push(Math.pow(2, i));
      i++;
    } while( power_array.length <= input_array.length );

    // do{
    //   var i = 0;
    //   result = result + (input_array[i] * power_array[i]);
    //   i++;
    // } while( i <= input_array.length );
    // return result;
  }

};


var toBase = {
  binary: function(number){
    var binary_array = [];
    var new_number = number;
      do{
        var remainder = Math.floor(new_number % 2);
        binary_array.push(remainder);
        new_number = Math.floor(new_number/ 2);
      } while( new_number > 0 );
    var binary_output = binary_array.reverse().join("");
    return parseInt(binary_output);
  },

  trinary: function(number){
    var trinary_array = [];
    var new_number = number;
      do{
        var remainder = Math.floor(new_number % 3);
        trinary_array.push(remainder);
        new_number = Math.floor(new_number/ 3);
      } while( new_number > 0 );
    var trinary_output = trinary_array.reverse().join("");
    return parseInt(trinary_output);
  },

  nonary: function(number){
    var nonary_array = [];
    var new_number = number;
      do{
        var remainder = Math.floor(new_number % 9);
        nonary_array.push(remainder);
        new_number = Math.floor(new_number/ 9);
      } while( new_number > 0 );
    var nonary_output = nonary_array.reverse().join("");
    return parseInt(nonary_output);
  },

  omniary: function(omni_number, base){
    var omniary_array = [];
    var new_number = omni_number;
      do{
        var remainder = Math.floor(new_number % base);
        omniary_array.push(remainder);
        new_number = Math.floor(new_number/ base);
      } while( new_number > 0 );
    var omniary_output = omniary_array.reverse().join("");
    return parseInt(omniary_output);
  },

};


$(document).ready(function()  {
  $("form#to_base").submit(function(event) {
    var omni_number = parseInt(($("input#omni_number").val()));
    var base = parseInt(($("input#base").val()));
    var result = toBase.omniary(omni_number, base);

    $(".to_base").text(result);

    $("#result").show();
    event.preventDefault();

  });

});
