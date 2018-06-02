$("#load").on("click",function(){
    var loadImg = confirm("Your current drawings will be combined with the saved image. Are you sure about that?")
    if (loadImg){
        var dataURL = localStorage.getItem("canvasName");
    var img = new Image();
    img.src = dataURL;
    img.onload = function () {
        contextReal.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        contextReal.drawImage(img, 0, 0);
    };
    }
})