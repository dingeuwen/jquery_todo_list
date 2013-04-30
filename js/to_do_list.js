$(document).ready(function() {

  $('#add_button').on('click', function(){
    var new_entry_text = $('#new_field').val(); // what is .val? can/should it be .text?
    var new_entry_line = $('<div class="to_dos"><input type="checkbox">' + new_entry_text + '</input><button class="btn btn-danger btn-mini delete_button" type="button">Delete</button></div>');

    new_entry_line.appendTo('#to_do_list');

    $('#new_field').val("");


    $('input:checkbox').click(function() {
      var completed = $(this);
      if(completed.is(':checked')) {
        completed.parent().appendTo('#completed_list');
        completed.parent().css("color", "red");
        completed.parent().css("text-decoration", "line-through");
      } else {
        completed.parent().appendTo('#to_do_list');
        completed.parent().css("color", "black");
        completed.parent().css("text-decoration", "none");
      }
    });

    $('.delete_button').click(function() {
      $(this).parent().remove();
    });

    // new_entry_line.on('click', function(){
    //   var current_line = $(this);
    //   current_line.css('color', 'red');
    // });

  });

  // var addButton = $('#add_button');

  // addButton.on("click", function(){
  //   var new_entry = $('#new_field').text;
  //   $('#new_field').wrap(function() {
  //     return '<li>' + $(this).text() + '</li>';
  //   });
  // });


}); //for document ready