$(document).ready(function() { 
    $("#header li").on("click", function(e) {
        loadPage(e.currentTarget.childNodes[0].data);
    })
});