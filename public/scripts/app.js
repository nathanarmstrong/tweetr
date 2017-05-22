$( document ).ready(function() {
  console.log("ready")




  function createTweetElement(object) {
    let name = object.user.name
    let avatar = object.user.avatars.regular
    let handle = object.user.handle
    let tweetContent = object.content.text
    let converted = object.created_at /1000
    let day = ((Date.now() - object.created_at) /1000) /86000;
    console.log(avatar)
    const $newTweets = $(`<article>
                          <header>
                            <img src=${avatar}>
                              <span class="name">${name}</span>
                              <span class="smallname">${handle}</span>
                              </header>
                              <body>
                              <p id="tweetTxt">${tweetContent}</p>
                              </body>
                              <footer>
                              <p class="tweet-footer">${Math.round(day)} Days old</p>
                              </footer>
                              </article>`)
    return $newTweets;
  }

  function renderTweets(data) {
    $.each(data, function(index, value) {
      let $tweet = createTweetElement(value)
      $(function() {
        $('#postedtweet').prepend($tweet)
      });
    });
  }

  let tweetDB;
  $(function() {
    $('.new-tweet').hide()
    $('button').click(function() {
      $('.new-tweet').slideToggle(1000)
      $('textarea').select()
    });

    $('#submit').click(function(event) {
      event.preventDefault();
      if($('textarea').val() === ''){
        alert('no content in textbox');
      } else if ($('textarea').val().length > 140) {
        alert('WOOO... way to long')
      } else {
        $.ajax({
          method:'POST',
          url: '/tweets',
          data: $('form').serialize()
        });
        $.ajax({
          method: 'GET',
          url: '/tweets'
        }).done(function(text) {
          tweetDB = text;
          renderTweets(tweetDB);
        });
      }
    });
  });

  function loadTweets(){
  }loadTweets()

});