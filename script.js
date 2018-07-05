$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagatiion();
});

$("input").keypress(function(event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span>Delete </span>" + todoText + "</li>");
  }
});
