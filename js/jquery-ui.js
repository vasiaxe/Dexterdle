$(document).ready(function() {
  $("#toggle-help").on("click", function() {
    $(".legend-grid").slideToggle(200);

    const currentText = $(this).text();
    $(this).text(currentText === "Hide" ? "Show" : "Hide");
  });

  $("#toggle-characters").on("click", function() {
    $("#available-characters").slideToggle(200);

    const currentText = $(this).text();
    $(this).text(currentText === "Hide" ? "Show" : "Hide");
  });
});

$("#toggle-how-to-play").on("click", function() {
  $(".how-to-play-content").slideToggle(200);

  const currentText = $(this).text();
  $(this).text(currentText === "Hide" ? "Show" : "Hide");
});