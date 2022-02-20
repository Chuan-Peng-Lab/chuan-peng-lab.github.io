$(document).ready(function() { 
    $("#header li").on("click", function(e) {
        fetch(`doc/${e.currentTarget.childNodes[0].data}.md`).
        then(response => response.text()).
        then(markdown => {
            Vditor.preview(
                document.getElementById("content"),
                markdown,
                {
                    speech: {
                        enable: false,
                    },
                    anchor: 1,
                    after() {
                        console.log("the page is successfully to load");
                    },
                    theme: {
                        "current": "dark"
                    },
                    markdown: {
                        "paragraphBeginningSpace": true
                    }
                }
            )
        });
    })
})