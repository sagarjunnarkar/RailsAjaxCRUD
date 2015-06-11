jQuery.fn.submitOnCheck = function() {
  this.find('input[type=submit]').remove()
  this.find('input[type=checkbox]').click(function(){
    $(this).parent('form').submit()
  })

}
$(function(){
  $('.edit_task').submitOnCheck();
})