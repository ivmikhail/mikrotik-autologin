$.get(chrome.extension.getURL('/sinetgate.user.js'), 
    function(data) {
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.innerHTML = data;
        document.getElementsByTagName("head")[0].appendChild(script);
        //document.getElementsByTagName("body")[0].setAttribute("onLoad", "injected();");
    }
);