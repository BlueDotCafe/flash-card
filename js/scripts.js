$ (document).ready(function() {

  $("button").click(function() {
      // $("#javascript").toggle();
      $("p#javascript-definition").toggle();

    });

    $("button#jquery").click(function() {
      $("p#jquery-definition").toggle();

    });

    $("button#function").click(function() {
    $("#function-definition").toggle();

    });


});
