$( document ).ready(function() {
  console.log("ready")


  $(".new-tweet textarea").keyup(function() {
    let i = 140;
    let textLength = $(this).val().length;
    let textRemain = i - textLength;
    $(".new-tweet .counter").text(textRemain);
    if(textRemain < 0){
      $(".new-tweet .counter").css("color", "red");
    } else{
      $(".new-tweet .counter").css("color", "black");
    }
    console.log(this);
    return;
  });


















})



