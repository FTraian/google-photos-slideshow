var intervalId = -1;

function injectTheScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {file: "content_script.js"}, function (result){
            intervalId = result[0]
        });



    });
};

function startslideshow() {
    if(typeof intervalId !== "undefined" && intervalId == -1) {
        injectTheScript();
        document.getElementById("startslideshow").disabled = true;
        document.getElementById("stopslideshow").disabled = false;
    }
};

function stopslideshow() {
    if(typeof intervalId !== "undefined" && intervalId != -1) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript(tabs[0].id, {
                    code: 'clearInterval(intervalId);'
                }); 
        });

        document.getElementById("startslideshow").disabled = false;
        document.getElementById("stopslideshow").disabled = true;
        intervalId = -1;
    }
};

document.getElementById('startslideshow').addEventListener('click', startslideshow);
document.getElementById('stopslideshow').addEventListener('click', stopslideshow);