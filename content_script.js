var intervalId;

function clickNext() {
    var next = document.getElementsByClassName("oJhm5 gMFQN")[0];
    next.click();

    intervalId = setInterval(function(){
                    next.click();
                }, 3000);
}

clickNext();
intervalId