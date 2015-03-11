var pages = {
    Home: {pageUrl: "?page=home.php"},
    "About Us": {pageUrl: "?page=about-us.php"},
    Services: {pageUrl: "?page=services.php"},
    Contact: {pageUrl: "?page=contact.php"}
}

var initalLoad = true;

$(document).ready(function(){

    buildNav();
    
});

function getContent(link){
    window.location=link;
}

function buildNav(){
    var urlString = window.location.search;
    
    for(var key in pages){
        var newLi = $("<li><a>" + key + "</a></li>");
        if(urlString === pages[key].pageUrl){
            newLi.children(":first").addClass("current_page");
        }
        newLi.on("click", "a", function(){
            getContent(pages[$(this).text()].pageUrl);
        });
        newLi.appendTo("#main-nav");
        
        if(pages[key].default){
            getContent(pages[key].pageUrl);
        }
    }
    if(!$(".current_page").length){
        $("#main-nav").children(":first").children(":first").addClass("current_page");
    }
}