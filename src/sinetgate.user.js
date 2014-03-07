var SGATE_LOGIN    = "login"; // put your login
var SGATE_PASSWORD = "root"; // put your password

(function (window, undefined) { 
	//frame fix
    if (window.self != window.top) {
        return;
    }
	if(window.location.href.indexOf("http://gate.sinet.office/login") == 0) {
		if(document.login.username != undefined && document.login.password != undefined) {
			document.login.username.value = SGATE_LOGIN;
			document.login.password.value = SGATE_PASSWORD;		
			document.login.submit();
		}
	}
	
})(window);