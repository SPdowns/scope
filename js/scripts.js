$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var passName = $("input#nameInput").val();
    $("#finalName").prepend(passName)
    $("#returnLetter").show();
    event.preventDefault();
  });
});