$(document).ready(function(){
  
  $('.add').submit(function(e){
    e.preventDefault();
    $.ajax({
      url: '/allnews'.
      type: 'POST',
      data: {title, url},
      success: function(data){
        console.log('data recieved', data)
      },
      error:function(xhr,status,error){

      }
    })
  })
});