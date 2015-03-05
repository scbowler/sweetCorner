var pages = {
    Home: {pageUrl: "home.html", default: true},
    "About Us": {pageUrl: "about-us.html"},
    Services: {pageUrl: "services.html"},
    Contact: {pageUrl: "contact.html"}
};

$(document).ready(function(){
    buildNav();
});

function getContent(link){
    $.get(link, function(data){
        $("#mainArea").html(data);
    });
}

function buildNav(){
    
    for(var key in pages){
        var newLi = $("<li><a>" + key + "</a></li>");
        newLi.on("click", "a", function(){
            getContent(pages[$(this).text()].pageUrl);
        });
        newLi.appendTo("#main-nav");
        
        if(pages[key].default){
            getContent(pages[key].pageUrl);
        }
    }
}