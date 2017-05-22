$( document ).ready(function() {
  console.log("ready")


 var form = document.forms[0]

form.addEventListener("submit", function(event) {
  event.preventDefault();
    $.ajax({
    method: "GET",
    url: "/tweets"
  })
  var text = document.querySelector("#text").value;
  var article = document.createElement("article");
  $.getJSON( "/tweets", function(data) {
    console.log($(data).serialize())
    article.innerHTML = '<header><img class="logo" src="/images/bird.png" ><span class="name">NAME!!!</span><span class="smallname">@name</span></header><body><p id="tweetTxt">'+text+'</p></body><footer>X days old</footer>';
  });
  $(article).appendTo($("#postedtweet") );

  console.log(article);
})

function createTweetElement(object) {
  let name = object.user.name
  let avatar = object.user.avatar.regular
  let handle = object.user.handle
  let tweetContent = object.content.text
  let converted = object.created_at /1000
  let day = ((date.now() = object.created_at) /1000) /86000;

  const $newTweets = $(`<article class = 'tweet-history'><header class ='tweet-history><image class='tweet-history' src=${avatar}><span class="name">${name}</span><span class="smallname">${handler}</span></header><body><p id="tweetTxt">${tweetContent}</p></body><footer><p class="tweet-footer">${Math.round(days)} Days old</p><i class ="material-icons>flag</i><i class="material-icons>repeat</i><i class ="material-icons>favorite</i></footer></article>`)
  return $newTweets;
}

function renderTweets(data) {
  $.each(data, function(index, value) {
    let $tweet = createTweetElement(value)
    $(function() {
      $('.tweet-holder').prepend($tweet)
    });
  });
}

const tweetDB;
$function() {
  $('.new-tweet').hide()
  $('button').click(function() {
    $('.new-tweet').slideToggle(1000)
    $('textarea').select()
  });

  $('#submit').click(function() {
    event.preventDefault();
    if($('textarea').val() === ''){
      alert('no content in textbox');
    } else if ($('textarea').val().length > 140) {
    } else {
      $ajax({
        methof:'POST',
        url: '/tweets',
        data: $('form').serialize(),
      })
    }
  })
}




});