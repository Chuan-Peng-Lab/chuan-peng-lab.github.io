function loadPage(md) {
    fetch(`doc/${md}.md`).
        then(response => response.text()).
        then(markdown => {
            sessionStorage.setItem("currPage", `${md}`);
            Vditor.preview(
                document.getElementById("content"),
                markdown,
                {
                    speech: {
                        enable: false,
                    },
                    anchor: 1,
                    after() {
                        console.log(`the page of ${md} is successfully to load`);
                    },
                    theme: {
                        "current": localStorage.getItem("theme"),
                        "path": "assets/css/vditor"
                    },
                    markdown: {
                        "paragraphBeginningSpace": true
                    },
                    outline: {
                        enable: true,
                        position: "right"
                    }
                }
            )
        });
}

function changeTheme(change = true) {
    let theme = localStorage.getItem("theme") ? (
        localStorage.getItem("theme") == "dark" ? (change ? "light" : "dark") : (change ? "dark" : "light")
    ) : window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
    localStorage.setItem("theme", theme);
    $("html").attr("theme", theme)
    if(!sessionStorage.getItem("currPage")) {
        sessionStorage.setItem("currPage", "Home");
    }
    loadPage(sessionStorage.getItem("currPage"));
}