#WTF?

This is uncouth chrome extension for autologin on mikrotik hotspot

##Synopsis

Some enterprise users for enable internet on his computer need be a logged on hotspot

User case: typing _http://google.com_ in browser, press enter -> firewall send your request to something _http://hotspot.local/login_  ->  the user enters login/password -> if user has access, redirect to _http://google.com_

This extension automatically enters your login and password, for Google Chrome 

##Usage

* [Download files from github](https://github.com/ivmikhail/mikrotik-autologin/archive/master.zip) or clone repo
* Modify `src/sinetgate.user.js` - put you login and password on hotspot
* Modify `src/manifest.json` - set your login page(s) matches on `content_script` section 
* [Add directory as extension to Google Chrome Browser](https://developer.chrome.com/extensions/getstarted#unpacked)
* Enable extension and restart Chrome
* Enjoy! (sorry if not work)
