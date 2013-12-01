$(document).ready(function () {
  $("#go-private").on("click", function () {
    $.post("/api/p", function(datas) {
      window.location = "/#/p/a/" + datas['private'];
    })
  });
});