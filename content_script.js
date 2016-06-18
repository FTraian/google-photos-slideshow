function clickNext() {
    var next = document.getElementsByClassName("oJhm5 gMFQN")[0];
    next.click();

    setInterval(function(){
                    next.click();
                }, 3000);
    
}

clickNext();