$(document).ready(function(){
   $('#task-form').on('submit', function(e){
      e.preventDefault();
      var newTask = $("#new-task").val();
      if (newTask ==='') {
          return  alert('please enter a task.');
        }
        else{
          $('#task-list').prepend('<li>'+ newTask+ '<br>'+'<br>'+ 
           '<button id="echo" class="btn btn-outline-success"> Realizado </button>' +
           '<button id="nrealizaso" class="btn btn-outline-danger"> No realizado </button>' +'</li>');
            $('#new-task').val('');
        };
    });
    $('#task-list').on('click', '#realizado', function(){
        $(this).parent().addClass('strikethrough');
    });
    $('#task-list').on('click', '#no_echo', function(){
        $(this).parent().removeClass('strikethrough');
    });
});


