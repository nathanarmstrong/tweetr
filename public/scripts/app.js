$( document ).ready(function() {
  console.log("ready")


//  var form = document.forms[0]

// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//     $.ajax({
//     method: "GET",
//     url: "/tweets"
//   })
//   var text = document.querySelector("#text").value;
//   var article = document.createElement("article");
//   $.getJSON( "/tweets", function(data) {
//     console.log($(data).serialize())
//     article.innerHTML = '<header><img class="logo" src="/images/bird.png" ><span class="name">NAME!!!</span><span class="smallname">@name</span></header><body><p id="tweetTxt">'+text+'</p></body><footer>X days old</footer>';
//   });
//   $(article).appendTo($("#postedtweet") );

//   console.log(article);
// })

function createTweetElement(object) {
  let name = object.user.name
  let avatar = object.user.avatar.regular
  let handle = object.user.handle
  let tweetContent = object.content.text
  let converted = object.created_at /1000
  let day = ((date.now() = object.created_at) /1000) /86000;


}








});