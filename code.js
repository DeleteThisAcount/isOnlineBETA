iOlog("isOnline started");

stop = 0;

let targetForContext = null;

// Discuss button button and profile 
if (localStorage.getItem("iOdiscuss") === "1") {
    try {
        try {
            nav = document.getElementsByClassName("site-nav")[0].innerHTML;
            document.getElementsByClassName("site-nav")[0].innerHTML = nav.replace('<li class="last">', '<li><a href="/discuss">Discuss</a></li><li class="last">');
        } catch (err) {
            document.getElementsByClassName("link tips")[0].outerHTML += '<li class="link about"><a href="/discuss"><span>Discuss</span></a></li>';
        }
    } catch (err) {}
}
if (window.location.href.substring(30, 100).substring(0, window.location.href.substring(30, 100).indexOf('/')).toLowerCase() == "discussbutton" && (location.href.match(/\//g) || []).length == 5) {
    document.getElementsByClassName("box slider-carousel-container prevent-select")[2].remove();
    document.getElementsByClassName("box slider-carousel-container prevent-select")[1].remove();
    document.getElementsByClassName("box slider-carousel-container prevent-select")[0].remove();
    document.getElementsByClassName("group")[0].innerText = "Scratcher (isOnline extra option)";
    stop = "Discuss button page";
    if (localStorage.getItem("iOdiscuss") !== "1") {
        document.getElementsByClassName("location")[0].innerHTML += " | <a id='discussbutton'>Enable</a>";
        document.getElementById("discussbutton").onclick = function() {
            localStorage.setItem("iOdiscuss", "1");
            location.reload();
        };
    } else {
        document.getElementsByClassName("location")[0].innerHTML += " | <a id='discussbutton'>Disable</a>";
        document.getElementById("discussbutton").onclick = function() {
            localStorage.removeItem("iOdiscuss");
            location.reload();
        };
    }
    if (localStorage.getItem("iOnavbar") !== "1") {
        document.getElementsByClassName("doing")[0].innerHTML="<center><h3>New navbar</h3></center>Want a front-page like navbar everywhere?<br><br><center><a onclick='localStorage.setItem(\"iOnavbar\",\"1\");location.reload();'>Enable navbar design</a></center><br>Credit to <a href=\"https://scratch.mit.edu/users/iwotastic/\">@iwotastic</a> for the navbar design.";
    } else {
        document.getElementsByClassName("doing")[0].innerHTML="<center><h3>New navbar</h3></center>Want a front-page like navbar everywhere?<br><br><center><a onclick='localStorage.setItem(\"iOnavbar\",\"0\");location.reload();'>Disable navbar design</a></center><br>Credit to <a href=\"https://scratch.mit.edu/users/iwotastic/\">@iwotastic</a> for the navbar design.";
    }
    if (localStorage.getItem("iOsearchforums") !== "1") {
        document.getElementsByClassName("doing")[0].innerHTML+="<br><br><center><h3>Forum search</h3></center>Want Scratch search on projects, studios <b>and forums</b>? Click below!<br><br><center><a onclick='localStorage.setItem(\"iOsearchforums\",\"1\");location.reload();'>Enable forum search</a></center>";
    } else {
        document.getElementsByClassName("doing")[0].innerHTML+="<br><br><center><h3>Forum search</h3></center>Want Scratch search on projects, studios <b>and forums</b>? Click below!<br><br><center><a onclick='localStorage.setItem(\"iOsearchforums\",\"0\");location.reload();'>Disable forum search</a></center>";
    }
}
//

/* New navbar design */ if (localStorage.getItem("iOnavbar") === "1" && document.getElementById("project-create")) {x=document.createElement("style");x.id="iOnavbar";document.getElementsByTagName("head")[0].appendChild(x);document.getElementById("iOnavbar").innerHTML='#topnav > .innerwrap { background: #25aff4 !important; overflow: hide !important; height: 49px !important; } #topnav > .innerwrap > div > ul > li { border-left: 0 !important; border-right: 0 !important; font-weight: bold !important; padding-bottom: 7px !important; padding-top: 7px !important; } #topnav > .innerwrap > div > ul > li:hover { background: rgba(0, 0, 0, 0.1) !important; } #topnav > .innerwrap > div > .logo { padding-top: 7px !important; } #topnav > .innerwrap > div > .search > input[type=text] { background: rgba(0, 0, 0, 0.1) !important; border-radius: 5px !important; padding-top: 12px !important; padding-bottom: 12px !important; padding-left: 45px !important; transition: background 0.15s !important; box-shadow: none; color: #fff !important; width: calc(100% - 20px) !important; } #topnav > .innerwrap > div > .search > input[type=text]:focus { background: rgba(0, 0, 0, 0.2) !important; } #topnav > .innerwrap > div > .search > input[type=text]::placeholder { color: #fff !important; } #topnav > .innerwrap > div > .search > input[type=submit] { background-image: url("/images/nav-search-glass.png") !important; position: absolute !important; box-shadow: none !important; background-color: transparent !important; background-image: url("https://scratch.mit.edu/images/nav-search-glass.png") !important; background-repeat: no-repeat !important; background-position: 50% !important; background-size: 14px 14px !important; width: 40px !important; height: 40px !important; border-right: 0 !important; } body:not(.editor) > #pagewrapper > #content { margin-top: 10px !important; } div.dropdown-menu.blue { background: #25aff4 !important; box-shadow: none !important; border: 0 !important; top: 40px !important; } .logout.divider#logout input[type=submit] { background-color: transparent !important; } .messages-icon { background-image: url("https://scratch.mit.edu/images/nav-notifications.png") !important; background-position: 50% !important; background-size: 45% !important; } .mystuff-icon { background-image: url("https://scratch.mit.edu/images/mystuff.png") !important; background-position: 50% !important; background-size: 45% !important; } #topnav .user-name.dropdown-toggle { padding-top: 7px !important; padding-bottom: 7px !important; } #topnav .user-name.dropdown-toggle .user-icon { border-radius: 3px !important; border: none !important; } body[class] { background: #fcfcfc !important; }';}

/* Forum search */ if (localStorage.getItem("iOsearchforums") === "1" && location.href.startsWith("https://scratch.mit.edu/search")) {document.getElementsByClassName("sub-nav tabs")[0].innerHTML += '<a href="https://google.com/search?q=site:scratch.mit.edu/discuss ' + document.getElementsByName("q")[0].value + '"><li><img src="https://scratch.mit.edu/images/tips/question-icon.svg" class="tab-icon studios"><span>Forums</span></li></a>';document.getElementsByClassName("sub-nav tabs")[0].innerHTML += '<a href="https://google.com/search?q=site:scratch.mit.edu/discuss/topic ' + document.getElementsByName("q")[0].value + '"><li><img src="https://scratch.mit.edu/images/tips/question-icon.svg" class="tab-icon studios"><span>Forum topics</span></li></a>';}

/* 'The best extension' easter egg */       if(location.href.toLowerCase().startsWith("https://scratch.mit.edu/search/") && /\?q=the(%20|\+)best\1extension/i.test(location.search)) window.location = "https://scratch.mit.edu/users/isOnlineV2/";

/* Account redirect */ if(location.href.toLowerCase()==="https://scratch.mit.edu/users/isonline/"){window.location = "https://scratch.mit.edu/users/isOnlineV2/";}

/* Redirect to comments*/	if(location.href.substring(location.href.indexOf('?')+1)==="comments#iOc"){location.href=location.href.substring(0, location.href.length - 4);}

chrome.storage.sync.get(["iOaccounts","iOfriendlist","iOfriendsenabled"], function (data) {
    registeredUsers = data.iOaccounts === undefined ? [] : JSON.parse(data.iOaccounts);
    friendList = data.iOfriendlist;
    friendListEnabled = data.iOfriendsenabled==1;
    try{chrome.runtime.sendMessage({setuninstallurl: registeredUsers[0]});}catch(err){}
    if(location.href == "https://scratch.mit.edu/isonline-extension/update") {
        document.documentElement.innerHTML = "<!DOCTYPE html><html><head><style>body{background: #f0f0f0;margin: 0;}#vcenter{position: absolute;top: 50%;width: 100%;margin-top: -100px;}h1{text-align: center;font-family: trebuchet ms, courier new, sans-serif;font-size: 2em;}#loader,#loader:before,#loader:after{border-radius: 50%;width: 2.5em;height: 2.5em;-webkit-animation-fill-mode: both;animation-fill-mode: both;-webkit-animation: load7 1.8s infinite ease-in-out;animation: load7 1.8s infinite ease-in-out;}#loader{color: #098e8b;font-size: 10px;margin: 80px auto;position: relative;text-indent: -9999em;-webkit-transform: translateZ(0);-ms-transform: translateZ(0);transform: translateZ(0);-webkit-animation-delay: -0.16s;animation-delay: -0.16s;}#loader:before,#loader:after{content: '';position: absolute;top: 0;}#loader:before{left: -3.5em;-webkit-animation-delay: -0.32s;animation-delay: -0.32s;}#loader:after{left: 3.5em;}@-webkit-keyframes load7{0%,80%,100%{box-shadow: 0 2.5em 0 -1.3em;}40%{box-shadow: 0 2.5em 0 0;}}@keyframes load7{0%,80%,100%{box-shadow: 0 2.5em 0 -1.3em;}40%{box-shadow: 0 2.5em 0 0;}}</style></head><body><div id='vcenter'><h1 id='header'>Redirecting to isOnline update page... <br>(please don't close this tab)</h1><div id='loader'></div></div></body></html>";
        if (localStorage.getItem("iOaccounts") !== null) {
            LSaccounts = JSON.parse(localStorage.getItem("iOaccounts"));
            transition(0);
        } else{
            window.location="https://isonlineupdate.blogspot.com";}
    } // Update
    else{start();}
});

if(location.href.toLowerCase().startsWith("https://scratch.mit.edu/users/isonlinev2/")) {
    if(document.getElementById("comments")) {
        let faq = document.getElementById("comments").parentElement.parentElement.children[0];
		let br = document.createElement("BR");
        faq.appendChild(br);
		let br2 = document.createElement("BR");
        faq.appendChild(br2);
        let faqEl = document.createElement("DIV");
        faqEl.innerHTML = "<center>Hello, welcome to the isOnlineV2 comments section! :D Here, you can ask for help about the extension. Before commenting, please read through this brief FAQ section to ensure your question hasn't been previously addressed. Just click one of the questions below for an expanded answer. <br><br><b>If your question isn't answered below, please do ask in the comments!</b></center>";
        faqEl.style.backgroundColor = "#00aaff";
        faqEl.style.textShadow = "none";
        faqEl.style.color = "white";
        faqEl.style.padding = "10px";
        faqEl.style.borderRadius = "10px";
        faq.appendChild(faqEl);
		let br3 = document.createElement("BR");
        faq.appendChild(br3);
        let faqQuestions = {
            "How do I get a  👑 next to my username on my profile?" : "To get a  👑 next to your username on your profile, you will need to advertise isOnline using a special link, http://isonline.tk. You need to put that link either in your 'About Me' or 'What I'm working on' section of your profile.",
            "What are the isOnline emojis?" : "The isOnline emojis are _online_, _offline_, _away_, _dnd_, and _isonline_. They are only visible to other isOnline users, and they only work in the comments section.",
            "How do I find out when my friends come online?" : "The friends feature of isOnline allows you to keep track of up to 10 friends. You can also make it send you a browser notification whenever a freind goes from Offline to Online. You can choose if you want to get notified when a friend goes from Away to Online as well. To enable the friends, <ol><li>Click on the isOnline icon in the top-right corner.</li><li>There should be a slider titled 'isOnline friends'. Click on the slider.</li><li>It should turn from grey to blue</li><li>Allow the extension to send you notifications, when prompted.</li></ol> <em>The friend list won't work when there aren't any Scratch tabs open.</em>",
			"How do you add users to my friends?" :  "To friend a user, go to their profile and click '+ friend'. The user has to be following you for the friend list to work, otherwise famous Scratchers would get tons of spam as soon as they came online! To unfriend a user, click on the 'x friends' button on their profile, or click on the isOnline icon in the top-right again, and find their name and click on the red 'X' button next to them.",
            "What does the Do Not Disturb status do?" : "The status displays as a normal status, but from the friend list menu, other people seeing you will think you are Offline. Nobody will get friend list notifications about you when you are on Do Not Disturb",
            "How do I find out what a status means?" : "Hover over the 'i' icon next to it.",
            "Can I get the status of somebody when I'm not on their profile?" : "Yes, you can. Right click a link to their profile anywhere on the page, and click 'Click to get status'",
            "I don't want people knowing when I'm online!" : "You can visit your profile, and next to your location you will see a dropdown menu added by isOnline. Choose your status to be 'Offline' and nobody will find out that you're actually online!",
            "I don't want isOnline anymore, how do I get rid of it?" : "We're sorry to see you go. You can uninstall the extension by right clicking on its icon in the top-right corner of the screen and clicking the option that says 'Remove'"
			};
        let qSelected = null;
        Object.keys(faqQuestions).forEach(question => {
            let qEl = document.createElement("DIV");
            qEl.innerHTML = question;
            qEl.style.padding = "7px";
            qEl.style.backgroundColor = "cadetblue";
            qEl.style.color = "white";
            qEl.style.textShadow = "none";
            qEl.style.margin = "2px";
            qEl.style.borderRadius = "10px";
            qEl.style.fontWeight = "bold";
            let answer = document.createElement("DIV");
            answer.className = "answer";
            answer.style.fontWeight = "normal";
            faq.appendChild(qEl);
            qEl.addEventListener("click", function(){
                if(qSelected) qSelected.querySelector(".answer").innerHTML = "";
				if(qSelected && qSelected === qEl) {
					qSelected = null;
					return;
				}
                qEl.querySelector(".answer").innerHTML = faqQuestions[question];
                qSelected = qEl;
            });
            qEl.appendChild(answer);
        });
    }
}

if(location.href.startsWith("https://scratch.mit.edu/studios/4100062/comments/")){

    var code = location.href.substring(location.href.indexOf('?')+1);
    var clickpost = function(){
        setTimeout(function(){document.getElementsByClassName("button small")[0].style.background='red';}, 1000);
        setTimeout(function(){document.getElementsByClassName("button small")[0].style.background='';clickpost();}, 2000);};
    var closetabwhenpost = function(){
        if(document.getElementsByClassName("highlighted")[0]===undefined){setTimeout(closetabwhenpost,100);return;}
        window.close();};

    if((code.length===5||code.length===6) && parseInt(code,16).toString(16) === code){
        document.getElementsByName("content")[0].value=code;
        clickpost();closetabwhenpost();
    }

}

let comments = document.getElementById("comments");
let emojis = {
    "online": "https://scratchtools.tk/isonline/assets/online.svg",
    "offline": "https://scratchtools.tk/isonline/assets/offline.svg",
    "dnd": "https://scratchtools.tk/isonline/assets/dnd.svg",
    "away": "https://scratchtools.tk/isonline/assets/absent.svg",
    "isonline": "https://scratchtools.tk/isonline/isonline-logo.png"
};

let trustedDevTeam = ["jokebookservice1","World_Languages","chooper100","PackersRuleGoPack", "isOnlineV2"];

let handleEmojis = () => {
    Array.from(comments.querySelectorAll(".comment > .info > .content")).forEach(comment => Object.keys(emojis).forEach(emoji => comment.innerHTML = comment.innerHTML.replace(new RegExp("(\\s|^)_" + emoji + "_", "g"), `$1<img src='${emojis[emoji]}' alt='_${emoji}_' title='_${emoji}_' class='easter-egg'/>`)));
    Array.from(comments.querySelectorAll(".comment > .info > .name > a")).filter(user => trustedDevTeam.includes(user.innerHTML)).forEach(user => {
        if(location.href.toLowerCase().startsWith("https://scratch.mit.edu/users/isonlinev2/") && user.children.length === 0) {
            let devProof = document.createElement("SPAN");
            devProof.innerHTML = "iO DEV";
            devProof.style.backgroundColor = "green";
            devProof.style.textShadow = "none";
            devProof.style.color = "white";
            devProof.style.padding = "2px";
            devProof.style.borderRadius = "3px";
            devProof.style.marginLeft = "4px";
            user.appendChild(devProof);
        }
    });
};
let domChange = function(records){
    if(records.filter(record => record.target.tagName === "UL" && (record.target.className === "comments" || record.target.className === "replies") && record.addedNodes).length){
        handleEmojis();
    }
};

if(comments) {
    let listenToComments = new MutationObserver(domChange);

    listenToComments.observe(comments, {subtree: true, childList: true});
}
handleEmojis();

function main() {

    /* Data for helping page*/ if(location.href.toLowerCase().startsWith("https://scratch.mit.edu/isonline-extension/helpdata")) {stop="On data page";document.documentElement.innerHTML = "<center><h2><b>ONLY give this information to the official isOnline account, @isOnlineV2.</b></h2></center><br><br><small>" + JSON.stringify(localStorage)+ " / " + JSON.stringify(registeredUsers)+ " / " + navigator.userAgent + " / Version: "+JSON.stringify(chrome.runtime.getManifest().version) + "</small>";}

    /* Redirect to verification */ if(location.href.toLowerCase().startsWith("https://scratch.mit.edu/isonline-extension/register")) {window.location = "https://scratchtools.tk/isonline/register/#"+localuser;}

    if (window.location.href.startsWith("https://scratch.mit.edu/isonline-extension/verify")) {
        stop = "On verification page";
        validateAccount();} // Account validation

    if (registeredUsers.length === 0) {
        stop = "User didn't validate any account.";
        isError();
        didntValidate();}

    if (registeredUsers.findIndex(user => user.name === localuser) === -1 && registeredUsers.length !== 0) {
        stop = "User validated another account.";
        unvalidatedAcc();}

    try{key = registeredUsers.find(user => user.name === localuser).key;
        if (key == "changed") {keyWasChanged("y");stop="Key was changed";}}catch(err){}

    if(stop!==0){console.error("isOnline was stopped: "+stop);return;}

    url = window.location.href;
    iOlog("Local username: " + localuser);

    if (time()-localStorage.getItem("iOlastOn") > 10 && localstatus() == "online") {setOnline();}

    /* Manage statuses */ window.addEventListener('load',function(){update();setInterval(update, 3000);});

    if (url.substring(24,29) == 'users' && (url.match(/\//g) || []).length == 5) {
        iOlog("Detected user is in a profile");
        user = document.getElementsByClassName("header-text")[0].getElementsByTagName("h2")[0].innerText;
        /* Add status box next to location */ document.getElementsByClassName("location")[0].innerHTML += ' | <span style="display:inline" id="iOstatus"></span>';
        if (localuser.toUpperCase() == user.toUpperCase()) {iOlog("Detected user is their own profile");isOwn();} else {
            iOcrown();
            if(location.href.substring(location.href.indexOf('?')+1)==="comments"){
                document.getElementsByClassName("box slider-carousel-container prevent-select")[document.getElementsByClassName("box slider-carousel-container prevent-select").length-1].innerHTML += "<div id='iOc'></div>";
				console.log("test");
                if(document.getElementsByClassName("comment ").length>0){location.hash="iOc";document.getElementsByName("content")[0].focus();}else{location.hash="comments";}
            }
            if(time()-localStorage.getItem("iOlastprofile")>3){status();}else{
                document.getElementById("iOstatus").innerHTML = "<a id='clickforstatus'>"+chrome.i18n.getMessage("clickforstatus")+"</a>";
                document.getElementById("clickforstatus").onclick = status;}
            localStorage.setItem("iOlastprofile", time());
        }
    }

    chrome.runtime.sendMessage({keyinfo: { key, localuser }});


} // main function

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.ctxmenu) {
        iONotify[request.call](request.user, request.content, request.color);
    }
});

let iONotify = {
    setup: function() {
        document.body.appendChild(this.element = document.createElement("DIV"));
        this.element.style.cssText = `
position: fixed;
bottom: 50px;
right: 0px;
background-color: white;
padding: 25px;
color: black;
text-shadow: none;
box-shadow: 0px 0px 3px #333;
z-index: 1000;
font-size: 30px;
font-family: Arial;
`;
        this.user = ""; // Who are we trying to access?
        this.element.style.display = "none"; // no content .. no notification!
    },
    alert: function(user, text, color, autoClose = false) {
        if(this.user) {
            this.close();
        }
        this.element.style.display = "block";
        this.element.innerHTML = "<span style='color: grey;'>" + user + "</span> " + text;
        this.user = user;
        if(autoClose) {
            setTimeout(() => {
                if(this.user === user) {
                    this.close();
                }
            }, 4e3);
        }
    },
    update: function(user, text, color, autoClose = true) {
        if(user !== this.user) return; // Do not update a notification about another user.
        this.element.style.display = "block";
        this.element.innerHTML = user + " <span style='color: " + color + ";'>" + text + "</span>";
        this.user = user;
        if(autoClose) {
            setTimeout(() => {
                if(this.user === user) {
                    this.close();
                }
            }, 4e3);
        }
    },
    close: function(){
        this.user = "";
        this.element.innerHTML = "";
        this.element.style.display = "none";
    }
};

iONotify.setup();




function update() {
    if (stop !== 0 || window.location.href.startsWith("https://scratch.mit.edu/isonline-extension")) {return;}
    if (localstatus() == "online") {
        updateStatus("");
        if (time()-localStorage.getItem("iOlastOn") > 240 && time()-localStorage.getItem("iOlastAbs") > 120) {
            absentrequest = new XMLHttpRequest();
            absentrequest.open("POST", 'https://scratchtools.tk/isonline/api/v1/' + localuser + '/' + key + '/set/absent', true);
            absentrequest.send();
            checkResponse(absentrequest);
            localStorage.setItem("iOlastAbs", time());
            iOlog("Sent away request");}}
    if (localstatus() == "absent"){
        updateStatus("orange");
        if (time()-localStorage.getItem("iOlastAbs") > 120) {
            absentrequest = new XMLHttpRequest();
            absentrequest.open("POST", 'https://scratchtools.tk/isonline/api/v1/' + localuser + '/' + key + '/set/absent', true);
            absentrequest.send();
            checkResponse(absentrequest);
            localStorage.setItem("iOlastAbs", time());
            iOlog("Sent away request");}}
    if (localstatus() == "dnd") {
        updateStatus("gray");
        if (time()-localStorage.getItem("iOlastAbs") > 120) {
            dndrequest = new XMLHttpRequest();
            dndrequest.open("POST", 'https://scratchtools.tk/isonline/api/v1/' + localuser + '/' + key + '/set/dnd', true);
            dndrequest.send();
            checkResponse(dndrequest);
            localStorage.setItem("iOlastAbs", time());
        }
    }
    if (localstatus() == "offline") {
        updateStatus("red");}
}



function status() {

    if(stop!==0){return;}

    iOlog("Started status scan");

    document.getElementById("iOstatus").innerHTML=chrome.i18n.getMessage("loadingstatus");

    try{
        a = document.getElementsByClassName("activity-stream")[0].getElementsByClassName("time")[0].innerText;
    }catch(err){a="notimestamp";}

    getstatus = new XMLHttpRequest();getstatus.open("GET", ' https://scratchtools.tk/isonline/api/v1/' + localuser + '/' + key + "/get/" + user, true);getstatus.send();

    getstatus.onreadystatechange = function() {
        if (getstatus.readyState === 4) {
            if (getstatus.status === 200) {

                response  = getstatus.responseText;
                timestamp = JSON.parse(response).timestamp;
                var status = JSON.parse(response).status;

                if (status == "online") {
                    if (time() - timestamp < 300) {isOnline();friendListButtons();} else{isOffline();friendListButtons();}}

                if (status == "absent") {
                    if (time() - timestamp < 180) {isAbsent();friendListButtons();} else{isOffline();friendListButtons();}}

                if (status == "dnd") {
                    if (time() - timestamp < 180) {isDND();friendListButtons();} else{isOffline();friendListButtons();}}

                if (time()-timestamp>604800) {
                    if (a !== "notimestamp"){if (!(a.includes("week") || a.includes("month") || a.includes("year"))){isUnknown();}}}

            } // if 200

            if (getstatus.status === 404) {noiO();}

            if (getstatus.status === 403) {
                isError();
                var status = JSON.parse(getstatus.responseText).status;
                if (status=="incorrect key") {stop = "Key was changed";keyWasChanged("n");}
                if (status=="bot") {stop = "User is a bot";isBot();}
            }

            if (getstatus.status === 500) {isError();}


        }}; // on ready

}

function isOwn(){
    iOcrown();
    opt = [{"name": chrome.i18n.getMessage("onlineauto"),   "value" : "online",  "color": "green"},
           {"name": chrome.i18n.getMessage("absent"),       "value" : "absent",  "color": "orange"},
           {"name": chrome.i18n.getMessage("dnd"),       "value" : "dnd",  "color": "gray"},
           {"name": chrome.i18n.getMessage("offlineghost"), "value" : "offline", "color": "red"}];

    document.getElementById("iOstatus").innerHTML = '<img id="iostatusimage" src="https://scratchtools.tk/isonline/assets/' + (localstatus() === "ghost" ? "offline" : localstatus()) + '.svg" height="12" width="12">';
    document.getElementById("iOstatus").innerHTML += "<select id='ioselect' style='color: " + opt.find(k => localstatus() === k.value).color + ";'>" + opt.map(k => "<option class='io-option' style='color:" + k.color + ";' " + (k.value === localstatus() ? "selected" : "") +">" + k.name + "</option>") + '</select>'+getInfoHTML(chrome.i18n.getMessage("ownstatushelp"));
    document.getElementById("ioselect").addEventListener("change", changed);
    document.getElementById("ioselect").getElementsByTagName("option")[2].outerHTML += '<optgroup class="io-option-info" label="'+chrome.i18n.getMessage("dndhelp1")+'"></optgroup><optgroup class="io-option-info" label="'+chrome.i18n.getMessage("dndhelp2")+'"></optgroup>';

}

function isOnline() {
    iOlog("Detected that the user is online");
    document.getElementById("iOstatus").innerHTML = '<img src="https://scratchtools.tk/isonline/assets/online.svg" height="12" width="12"> <span id="iOstatustext" style="color:green">' + chrome.i18n.getMessage("online") + '</span>' ;}

function probablyOnline() {
    iOlog("Detected that the user is probably online");
    document.getElementById("iOstatus").innerHTML = '<img src="https://scratchtools.tk/isonline/assets/online.svg" height="12" width="12"> <span id="iOstatustext" style="color:green">' + chrome.i18n.getMessage("probablyonline") + '</span> ' + getInfoHTML(chrome.i18n.getMessage("probablyonlinehelp"));}

function isOffline() {
    iOlog("Detected that the user is offline");
    document.getElementById("iOstatus").innerHTML = '<img src="https://scratchtools.tk/isonline/assets/offline.svg" height="12" width="12"> <span id="iOstatustext" style="color:red">' + chrome.i18n.getMessage("offline") + '</span>' ;}

function isAbsent() {
    iOlog("Detected that the user is away");
    document.getElementById("iOstatus").innerHTML = '<img src="https://scratchtools.tk/isonline/assets/absent.svg" height="12" width="12"> <span id="iOstatustext" style="color:orange">' + chrome.i18n.getMessage("absent") + '</span> ' + getInfoHTML(chrome.i18n.getMessage("absenthelp"));}

function isUnknown() {
    iOlog("Detected that the user status is unknown");
    document.getElementById("iOstatus").innerHTML = chrome.i18n.getMessage("unknown") + " " + getInfoHTML(chrome.i18n.getMessage("unknownhelp"));}

function isDND() {
    iOlog("Detected that the user status is DND");
    document.getElementById("iOstatus").innerHTML = '<img src="https://scratchtools.tk/isonline/assets/dnd.svg" height="12" width="12"> <span id="iOstatustext" style="color:gray">' + "Do Not Disturb" + "</span> " + getInfoHTML(chrome.i18n.getMessage("dndotherhelp"));}

function noiO() {
    iOlog("Detected that the user didn't install isOnline");
    document.getElementById("iOstatus").innerHTML = chrome.i18n.getMessage("notiouser") + " " + getInfoHTML(chrome.i18n.getMessage("noiohelp"));}

function isError() { try{
    if (location.href.toLowerCase() == "https://scratch.mit.edu/users/discussbutton/") {return;}
    try { document.getElementById("iOstatus").innerHTML = '<span title="Error: ' + stop + '">' + chrome.i18n.getMessage("error") + '</span>';} catch(err){
        document.getElementsByClassName("location")[0].innerHTML += ' | <span title="Error: ' + stop + '">' + chrome.i18n.getMessage("error") + '</span>';}}catch(err){}}

function didntValidate() {
    if(location.href.startsWith("https://scratch.mit.edu/studios/4100062/comments/")){return;}
    try{ document.getElementById("alert-view").innerHTML="<div class='alert fade in alert-success' style='display: block;'><span class='close' onclick='document.getElementById(\"alert-view\").style.display=\"none\";'>×</span>" + chrome.i18n.getMessage("didnotvalidate") + "</div>";}catch(err){}}

function unvalidatedAcc() {
    if (window.location.href.substring(30,100).substring(0, window.location.href.substring(30,100).indexOf('/')).toLowerCase() == "discussbutton" && (location.href.match(/\//g) || []).length == 5) {return;}
    try{document.getElementsByClassName("location")[0].innerHTML += ' | <small><a href="https://scratchtools.tk/isonline/register/" target="_blank">'+chrome.i18n.getMessage("validateprofilelink")+'</small>';}catch(err){}
    if (time()-localStorage.getItem("iObanner") < 86400) {return;}
    if(window.location.href.includes("users")){
        document.getElementById("alert-view").innerHTML="<div class='alert fade in alert-success' style='display: block;'><span class='close' onclick='document.getElementById(\"alert-view\").style.display=\"none\";localStorage.setItem(\"iObanner\"," + time() + ")'>×</span>" + chrome.i18n.getMessage("unvalidatedacc") + "</div>";}}

function keyWasChanged(stored) {
    if(location.href.startsWith("https://scratch.mit.edu/studios/4100062/comments/")){return;}
    if (stored == "n") {
        chrome.storage.sync.get("iOaccounts", function (data) {
            oldkey = JSON.parse(data.iOaccounts).find(user => user.name === localuser).key;
            if(oldkey==key){
                stop = "Key was changed";isError();
                try{console.error("isOnline was stopped: Key was changed");document.getElementById("alert-view").innerHTML="<div class='alert fade in alert-success' style='display: block;'><span class='close' onclick='document.getElementById(\"alert-view\").style.display=\"none\";'>×</span>" + chrome.i18n.getMessage("keywaschanged") + "</div>";}catch(err){}
                indx = registeredUsers.findIndex(k => k.name === localuser);
                chrome.storage.sync.set({"iOaccounts" : JSON.stringify(registeredUsers.slice(0, indx).concat({
                    "name": localuser,
                    "key": "changed"
                }).concat(registeredUsers.slice(indx + 1)))});
            }});
    } //if n
    if (stored == "y") {
        stop = "Key was changed";isError();
        try{console.error("isOnline was stopped: Key was changed");document.getElementById("alert-view").innerHTML="<div class='alert fade in alert-success' style='display: block;'><span class='close' onclick='document.getElementById(\"alert-view\").style.display=\"none\";'>×</span>" + chrome.i18n.getMessage("keywaschanged") + "</div>";}catch(err){}
    } //if y
}


function isBot() { try{
    console.error("isOnline was stopped: User has been marked as a bot");
    document.getElementById("alert-view").innerHTML="<div class='alert fade in alert-success' style='display: block;'><span class='close' onclick='document.getElementById(\"alert-view\").style.display=\"none\";'>×</span>" + chrome.i18n.getMessage("isbot") + "</div>";}catch(err){}}

function iOlog(x) {
    /*console.log("isOnline log @ " + new Date().toLocaleTimeString() + ": " + x);*/}

function setOnline() {
    iOlog("Sent online request");
    onlinerequest = new XMLHttpRequest();
    onlinerequest.open("POST", 'https://scratchtools.tk/isonline/api/v1/' + localuser + '/' + key + '/set/online', true);
    onlinerequest.send();
    checkResponse(onlinerequest);
    localStorage.setItem("iOlastOn", time());}

function updateStatus(color) {
    chrome.runtime.sendMessage({color});
    try {document.getElementsByClassName("user-name dropdown-toggle")[0].style.backgroundColor=color;}
    catch(err) {document.getElementsByClassName("link right account-nav")[0].style.backgroundColor=color;}
    color = color === "" ? "green" : color;
    if(localuser.toUpperCase() == user.toUpperCase() && document.getElementById("ioselect").style.color !== color){
        document.getElementById("ioselect").selectedIndex = opt.findIndex(k => k.color === color);
        document.getElementById("ioselect").style.color = color;
        document.getElementById("iostatusimage").src = "https://scratchtools.tk/isonline/assets/" + opt.find(k => k.color === color).value + ".svg";}
}

function localstatus(){if(localStorage.getItem("iOstatus")!==null){return localStorage.getItem("iOstatus");}else{return "online";}}

function time() {return Math.floor(Date.now() / 1000);}

function iOcrown() {
    if(localuser.toUpperCase() !== user.toUpperCase()) {
        if (document.getElementsByClassName("overview")[0].innerHTML.toLowerCase().includes("isonline.tk") || document.getElementsByClassName("overview")[1].innerHTML.toLowerCase().includes("isonline.tk")) {
            document.getElementsByClassName("header-text")[0].getElementsByTagName("h2")[0].innerHTML += ' <a href="https://scratch.mit.edu/projects/158291459/" target="_blank" title="isOnline crown - click for more info" style="text-decoration: none;">👑</a>';
            document.getElementsByClassName("header-text")[0].getElementsByTagName("h2")[0].style.color = "orange";}
        if (document.getElementsByClassName("overview")[0].innerHTML.toLowerCase().includes("#lovecookies") || document.getElementsByClassName("overview")[1].innerHTML.toLowerCase().includes("#lovecookies")) {
            document.getElementsByClassName("header-text")[0].getElementsByTagName("h2")[0].innerHTML += ' <span title="isOnline cookie">🍪</a>';}
    } else {
        if (document.getElementById("bio").innerHTML.toLowerCase().includes("isonline.tk") || document.getElementById("status").innerHTML.toLowerCase().includes("isonline.tk")) {
            document.getElementsByClassName("header-text")[0].getElementsByTagName("h2")[0].innerHTML += ' <a href="https://scratch.mit.edu/projects/158291459/" target="_blank" title="isOnline crown - click for more info" style="text-decoration: none;">👑</a>';
            document.getElementsByClassName("header-text")[0].getElementsByTagName("h2")[0].style.color = "orange";}
        if (document.getElementById("bio").innerHTML.toLowerCase().includes("#lovecookies") || document.getElementById("status").innerHTML.toLowerCase().includes("#lovecookies")) {
            document.getElementsByClassName("header-text")[0].getElementsByTagName("h2")[0].innerHTML += ' <span title="isOnline cookie">🍪</a>';}
    }

}

function changed() {document.getElementById("ioselect").style.color=opt[document.getElementById("ioselect").selectedIndex].color;localStorage.setItem("iOstatus", opt[document.getElementById("ioselect").selectedIndex].value);document.getElementById("iostatusimage").src="https://scratchtools.tk/isonline/assets/" +opt[document.getElementById("ioselect").selectedIndex].value+".svg";update();}

function checkResponse(request) {
    request.onreadystatechange = function() {if (request.readyState === 4){
        if (request.status !== 200) {
            result = JSON.parse(request.responseText).result;
            if (result=="incorrect key") {keyWasChanged("n");}
            if (result=="bot") {stop = "User is a bot";isError();isBot();}
        }}};}

function validateAccount(){
    document.documentElement.innerHTML = "<!DOCTYPE html><html><head><style>body{background: #f0f0f0;margin: 0;}#vcenter{position: absolute;top: 50%;width: 100%;margin-top: -100px;}h1{text-align: center;font-family: trebuchet ms, courier new, sans-serif;font-size: 2em;}#loader,#loader:before,#loader:after{border-radius: 50%;width: 2.5em;height: 2.5em;-webkit-animation-fill-mode: both;animation-fill-mode: both;-webkit-animation: load7 1.8s infinite ease-in-out;animation: load7 1.8s infinite ease-in-out;}#loader{color: #098e8b;font-size: 10px;margin: 80px auto;position: relative;text-indent: -9999em;-webkit-transform: translateZ(0);-ms-transform: translateZ(0);transform: translateZ(0);-webkit-animation-delay: -0.16s;animation-delay: -0.16s;}#loader:before,#loader:after{content: '';position: absolute;top: 0;}#loader:before{left: -3.5em;-webkit-animation-delay: -0.32s;animation-delay: -0.32s;}#loader:after{left: 3.5em;}@-webkit-keyframes load7{0%,80%,100%{box-shadow: 0 2.5em 0 -1.3em;}40%{box-shadow: 0 2.5em 0 0;}}@keyframes load7{0%,80%,100%{box-shadow: 0 2.5em 0 -1.3em;}40%{box-shadow: 0 2.5em 0 0;}}</style></head><body><div id='vcenter'><h1 id='header'>" + chrome.i18n.getMessage("validating") + "...</h1><div id='loader'></div></div></body></html>";
    test = new XMLHttpRequest();
    test.open("GET", ' https://scratchtools.tk/isonline/api/v1/' + localuser + '/' + location.hash.substring(1) + "/test/", true);
    test.send();
    test.onreadystatechange = function() {
        if (test.readyState === 4 && test.status === 200 && test.responseText == '{"valid":true}') {
            if ((indx = registeredUsers.findIndex(k => k.name === localuser)) === -1) {
                chrome.storage.sync.set({"iOaccounts" : JSON.stringify((registeredUsers === null ? [] : registeredUsers).concat({
                    "name": localuser,
                    "key": location.hash.substring(1)
                }))});
            } else {
                chrome.storage.sync.set({"iOaccounts" : JSON.stringify(registeredUsers.slice(0, indx).concat({
                    "name": localuser,
                    "key": location.hash.substring(1)
                }).concat(registeredUsers.slice(indx + 1)))});
            }
            document.getElementById("loader").style.display = "none";
            document.getElementById("header").innerHTML = "<center><h3 style='color:green'>" + chrome.i18n.getMessage("success") + "</h3></center>";
        } else {
            document.getElementById("loader").style.display = "none";
            document.getElementById("header").innerHTML = "<center><h3 style='color:red'>"+chrome.i18n.getMessage("verifyerror")+"</h3></center>";
        }
        chrome.runtime.sendMessage({friendlist: "refresh"});
    };
}

function transition(currentaccount) {

    i = currentaccount;
    ls = localStorage.getItem("iOaccounts");

    if(i>LSaccounts.length-1){
        try{
            localStorage.removeItem("iOaccounts");
            localStorage.removeItem("iO.version");
            localStorage.removeItem("iO.was.installed");}catch(err){}
        chrome.storage.sync.set({iOaccounts : ls}, function(){window.location="https://isonlineupdate.blogspot.com";});
    }
    if(i>LSaccounts.length-1){return;}

    thename = LSaccounts[i].name;
    thekey = LSaccounts[i].key;

    if(thekey.length==16 || thekey == "changed"){transition(i+1);}
    else{
        regenerate = new XMLHttpRequest();
        regenerate.open("POST", "https://scratchtools.tk/isonline/api/v1/"+thename+"/"+thekey+"/regenerate", true);
        regenerate.send();
        indx = LSaccounts.findIndex(k => k.name === thename);
        regenerate.onreadystatechange = function() {
            if (regenerate.readyState === 4 && regenerate.status === 200) {
                localStorage.setItem("iOaccounts", JSON.stringify(LSaccounts.slice(0, indx).concat({
                    "name": thename,
                    "key": JSON.parse(regenerate.responseText).key
                }).concat(LSaccounts.slice(indx + 1))));
                transition(i+1);
            }
            if (regenerate.readyState === 4 && regenerate.status !== 200) {
                response = JSON.parse(regenerate.responseText).status;
                if(response=="incorrect key"){
                    localStorage.setItem("iOaccounts", JSON.stringify(LSaccounts.slice(0, indx).concat({
                        "name": thename,
                        "key": "changed"
                    }).concat(LSaccounts.slice(indx + 1))));
                    transition(i+1);
                }
                else {
                    transition(i+1);}
            }
        };
    }
} // Transition end

function start() {
    if(location.href == "https://scratch.mit.edu/isonline-extension/update"){return;}
    if(document.getElementById("project-create")===null) {scratchwwwgetuser();}
    else{
        userget = document.createElement('a');
        userget.id="iOgetuser";
        document.getElementsByTagName('body')[0].appendChild(userget);
        document.getElementById("iOgetuser").style.display = 'none';

        usergetscript = document.createElement('script');
        usergetscript.id="iOgetuserscript";
        document.getElementsByTagName('body')[0].appendChild(usergetscript);
        document.getElementById("iOgetuserscript").innerHTML='document.getElementById("iOgetuser").innerText=Scratch.INIT_DATA.LOGGED_IN_USER.model.username;';

        localuser = document.getElementById("iOgetuser").innerText;
        document.getElementById("iOgetuser").remove();
        if(localuser===""){console.error("isOnline was stopped: logged out.");}else{main();}
    }
}

function scratchwwwgetuser() {
    if(document.getElementsByClassName("profile-name")[0] === undefined) {
        if(document.getElementsByClassName("link right login-item")[0]!==undefined) {
            console.error("isOnline was stopped: logged out.");} else {
                setTimeout(scratchwwwgetuser, 100);}
    } else {
        localuser = document.getElementsByClassName("profile-name")[0].innerText;
        main();}
}

function friendListButtons() {
    devs=["jokebookservice1","World_Languages","chooper100","PackersRuleGoPack"];
    if(devs.findIndex(item => user.toLowerCase() === item.toLowerCase())!=-1){document.getElementById("iOstatustext").innerHTML = "isOnline dev ("+document.getElementById("iOstatustext").innerHTML+")";}
    if(user.toLowerCase() === "isonlinev2"){document.getElementById("iOstatustext").innerHTML = "isOnline official account ("+document.getElementById("iOstatustext").innerHTML+")";}
    if (!friendListEnabled){return;}
    try {x = friendList.findIndex(item => user.toLowerCase() === item.toLowerCase());}catch(err){x=-2;}
    if(x===-2 || x===-1) {
        document.getElementsByClassName("header-text")[0].getElementsByTagName("h2")[0].style.display="inline";
        document.getElementsByClassName("header-text")[0].getElementsByTagName("h2")[0].outerHTML += ' <a id="addfriend" style="display:inline;vertical-align:top;"><small>+ '+chrome.i18n.getMessage("friends")+'</small></a>';        
        document.getElementById("addfriend").onclick = function(){
            chrome.runtime.sendMessage({addfriend: [user,localuser]}, function (response){
                if(response.result=="ok") {document.getElementById("addfriend").remove();}
            });
        };
    }
    if(x!==-1 && x!==-2) {
        document.getElementsByClassName("header-text")[0].getElementsByTagName("h2")[0].style.display="inline";
        document.getElementsByClassName("header-text")[0].getElementsByTagName("h2")[0].outerHTML += ' <a id="removefriend" style="display:inline;vertical-align:top;"><small>x '+chrome.i18n.getMessage("friends")+'</small></a>';        
        document.getElementById("removefriend").onclick = function(){
            chrome.runtime.sendMessage({removefriend: user}, function (response){
                if(response.result=="ok") {document.getElementById("removefriend").remove();}
            });
        };
    }

}

function getInfoHTML(string) {
    setTimeout(infoAnimation,1000);
    return '<div id="isonline-helpcontainer"><svg id="statushelp" title="'+string+'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path id="statushelp-path" d="M48 41.333C48 45.068 45.068 48 41.333 48H6.667C2.932 48 0 45.068 0 41.333V6.667C0 2.932 2.932 0 6.667 0h34.666C45.068 0 48 2.932 48 6.667z"/><path d="M26.667 36h-5.334V21.333h5.334zm.666-22c0-1.865-1.468-3.333-3.333-3.333-1.865 0-3.333 1.468-3.333 3.333 0 1.865 1.468 3.333 3.333 3.333 1.865 0 3.333-1.468 3.333-3.333" fill="#fff"/></svg><span  style="color:#e8e5e5" id="isonline-helptext"></span></div>';
}

function infoAnimation(){
    var statuscontainer = document.getElementById('isonline-helpcontainer');
    var statushelp = document.getElementById('statushelp');
    var statustext = document.getElementById('isonline-helptext');
    statushelp.onmouseenter = function() {
        // Enter
        statustext.innerText = statushelp.getAttribute('title');
        statustext.style.display = "inline-block";
    };
    statushelp.onmouseleave = function() {
        setTimeout(function() {
            statustext.innerText = "";
            statustext.style.display = "none";
        }, 300);
        // Leave
    };
}
