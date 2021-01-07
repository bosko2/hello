

function moveTo(id,num){
    document.querySelector(id).onclick = function () {
        anime({
            targets: document.body,
            translateX: (-(num*92)).toString()+"vw"
        });
        anime({
            targets: "ul",
            translateX: (num*92).toString()+"vw",
            translateY: "80vh",
            height: "5vh",
            width: "83vw",
        });
        for (var i = 0; i < 8; i++) {
            document.getElementsByTagName("li")[i].style.display = "inline";
        }
    }
}

moveTo("#b",1);
moveTo("#g",2);
moveTo("#c",3);
moveTo("#s",4);
moveTo("#r",5);
moveTo("#cx",6);
moveTo("#j",7);
moveTo("#p",8)
