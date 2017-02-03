function random() {
  var randomURL = "https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&exchars=500&format=json&callback=?";
  $.getJSON(randomURL, function(data) {
    for (var pageId in data.query.pages) {
      if (data.query.pages.hasOwnProperty(pageId)) {
        title = data.query.pages[pageId].title;
        content = data.query.pages[pageId].extract;
        console.log(data.query.pages);
        link = "http://en.wikipedia.org/?curid=" + data.query.pages[pageId].pageid;
        $(".content").prepend("<div class='col-md-8 col-md-offset-2 results'><h2 class='title'>" + title + "</h2><p class='lead'>" + content + "</p><a href=" + link + "><p class='link'>" + link + "</a></p></div>");
      }
    }
  });
}

$(".btn").click(function() {
  $(".results").remove();
});

function searching() {
  var searchstring = document.getElementById("search").value;
  var search = searchstring.replace(" ", "%20");
  var title;
  var content;
  var link;
  var img;
  var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + search + "&callback=?";

  $.getJSON(url, function(data) {
    console.log(url);
    for (var pageId in data.query.pages) {
      if (data.query.pages.hasOwnProperty(pageId)) {
        title = data.query.pages[pageId].title;
        content = data.query.pages[pageId].extract;
        link = "http://en.wikipedia.org/?curid=" + data.query.pages[pageId].pageid;
        $(".content").prepend("<div class='col-md-8 col-md-offset-2 results'><h2 class='title'>" + title + "</h2><p class='lead'>"+ content +"</p><a href="+ link +"><p class='link'>" + link + "</a></p></div>");
      }
    }
  });
}