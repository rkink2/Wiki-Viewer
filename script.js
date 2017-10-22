$(document).ready(function() {
  $(".random").click(function() {
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
    win.focus();
  });
  
   
  $(".close").on("click",function(){
    $("#search").val('');
  });
  
  $("#search").keypress(function(e) {
    var search = $("#search").val();
    console.log(search);
    $("#output").html("");
    
    var url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      search +
      "&format=json&callback=?";
    console.log(url);
    if (e.which == 13) {
      $.getJSON(url, function(data) {
        for (var i = 0; i < data[1].length; i++) {
          $("#output").append(
           '<div class="result panel"><a href= '+data[3][i]+' target="_blank"><li><h2>' +  data[1][i] +'</h2><h5>' +data[2][i] +'</h5></li></a></div>'
            
          );
        }
      });
    }
  });
});
