$("#save").on("click",function(){
    localStorage.setItem("canvasName", canvasReal.toDataURL());
    alert("Your Drawings are Saved!")
})