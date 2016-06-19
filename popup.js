var intervalId = -1;

function injectTheScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {file: "content_script.js"}, function (test){
            console.log(test);
        });
    });
};

function startslideshow() {
    intervalId = injectTheScript();
};

function stopslideshow() {
    if(intervalId != -1) {
        clearInterval(intervalId);
    }
};

document.getElementById('startslideshow').addEventListener('click', startslideshow);
document.getElementById('stopslideshow').addEventListener('click', stopslideshow);