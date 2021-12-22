
window.onload = () => {
    console.warn('我到現在還在想,我到底在衝三小?');
    var yoru_container = document.querySelector("#yoru_container");
    var yoru = document.querySelector("#yoru");
    var yoru_pop = document.querySelector("#yoru_pop");
    var pop_count = 0;
    var counter = document.querySelector("#counter");
    var sound_effect0 = new Audio('./source/pop.mp3');
    var sound_effect1 = new Audio('./source/pop1.mp3');
    var sound_effect2 = new Audio('./source/pop2.mp3');
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    function pop() {
        playSound();
        yoru.setAttribute("style","visibility: hidden;");
        yoru_pop.setAttribute("style","visibility: unset;");
    }

    function unpop() {
        yoru_pop.setAttribute("style","visibility: hidden;");
        yoru.setAttribute("style","visibility: unset;");
    }

    var storage = {};
    storage.load = function () {
        var count = localStorage.getItem("pop_count");
        if (count !== null) {
            pop_count = parseInt(count);
            counter.innerHTML = pop_count;
        }
    };
    storage.save = function () {
        localStorage.setItem("pop_count", pop_count);
    }

    function isMobile() {
        try{ document.createEvent("TouchEvent"); return true; }
        catch(e){ return false;}
    }

    function playSound(){
        if(getRandomInt(3)==0){
            sound_effect0.currentTime = 0;
            sound_effect0.play();
        }
        else if(getRandomInt(3)==1){
            sound_effect1.currentTime = 0;
            sound_effect1.play();
        }
        else{
            sound_effect2.currentTime = 0;
            sound_effect2.play();          
        }
    }

    function count_up() {
        pop_count++;
        counter.innerHTML = pop_count;
        storage.save();
    }

    storage.load();

    if (isMobile()) {
        window.addEventListener("touchmove",function(e) {
            e.preventDefault();
        }, { passive: false });
        yoru.setAttribute("src","./source/close2.png");
        yoru_container.addEventListener('touchstart', function (e) {
            count_up();
            pop();
        });
        yoru_container.addEventListener('touchend', function (e) {
            unpop();
        });
    } else {
        yoru_container.addEventListener('mouseover', function (e) {
            yoru.setAttribute("src","./source/close2.png");
        });
        yoru_container.addEventListener('mouseout', function (e) {
            yoru.setAttribute("src","./source/close2.png");
        });

        //  點擊事件
        yoru_container.addEventListener('mousedown', function (e) {
            count_up();
            pop();
        });
        yoru_container.addEventListener('mouseup', function (e) {
            unpop();
        });

        //  鍵盤事件
        document.addEventListener('keydown', function (e) {
            pop();
        });
        document.addEventListener('keyup', function (e) {
            count_up();
            yoru.setAttribute("src","./source/close2.png");
            unpop();
        });
    }
}