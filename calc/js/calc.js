$(function(){
  var num1 = 0
  var num2 = 0
  var op  = "+"
  console.log("is loading ....shashank");
  $(':button').on('click', function(){
    console.log("button is clicked ....");
    var _pval = $(':text').val()
    var _btn  = this.value
    if( _btn == "C" || _btn == "AC" || _btn == "MC" ){
      $(':text').val("")
    }else{
      $(':text').val(_pval + "" + this.value)
    }
    
    if( _btn == "="){
      var input = $(':text').val()
      input = input.split("+")
      num1 = parseInt( input[0])
      num2 = parseInt( input[1])
      $(':text').val( num1 + num2 )
    }
  });
})
