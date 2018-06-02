$("#downloadImg").on("click",function(){
    let downloadImg = canvasReal.toDataURL("image/png").replace("image/png", "image/octet-stream");
    document.location.href = downloadImg;
})
