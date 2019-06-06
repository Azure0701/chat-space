$(function() {
  
  function buildHTML(message){
    var addImage = (message.image !== null) ? `<img class = "lower-message__image", src="${message.image}"> ` : ''

    var html = `<div class="message" data-id="${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                      ${message.date}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                      ${message.content}
                      ${addImage}
                    </p>
                  </div>
                </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    e.stopPropagation();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight});
      $('#new_message')[0].reset();
    })
      .fail(function(){
        alert('メッセージを作成できませんでした');
    })
  })

  if (window.location.href.match(/\/groups\/\d+\/messages/)){
    setInterval(reloadMessages,5000)
  };

  function reloadMessages() {
    var last_message_id = $('.message').last().data('id');
    var href = ('./api/messages');
    $.ajax({
      type: 'GET',
      url: href,
      data: {id: last_message_id},
      dataType: 'json'
    })

    .done(function(messages){
      messages.forEach(function(message){
        var insertHTML = buildHTML(message);
        $('.message').append(insertHTML);
      });
      $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight});
    })
    .fail(function(){
      alert('メッセージを更新できませんでした');
    });
  };
});
