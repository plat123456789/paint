

//the below 4 are for line, shape, stroke & action button, they all have sub menu
$('#shape').click(() => {
    $(".shape-sub-menu").toggle();

    //if other sub-menu is opened, close it
    if($(".stroke-sub-menu").is(":visible")){
        $(".stroke-sub-menu").toggle();
    }
    if($(".line-sub-menu").is(":visible")){
        $(".line-sub-menu").toggle();
    }
    if($(".action-do-sub-menu").is(":visible")){
        $(".action-do-sub-menu").toggle();
    }
});

$('#stroke').click(() => {
    $(".stroke-sub-menu").toggle();

    //if other sub-menu is opened, close it
    if($(".shape-sub-menu").is(":visible")){
        $(".shape-sub-menu").toggle();
    }
    if($(".line-sub-menu").is(":visible")){
        $(".line-sub-menu").toggle();
    }
    if($(".action-do-sub-menu").is(":visible")){
        $(".action-do-sub-menu").toggle();
    }
});

$('#action-do').click(() => {
    $(".action-do-sub-menu").toggle();

    //if other sub-menu is opened, close it
    if($(".shape-sub-menu").is(":visible")){
        $(".shape-sub-menu").toggle();
    }
    if($(".line-sub-menu").is(":visible")){
        $(".line-sub-menu").toggle();
    }
    if($(".stroke-sub-menu").is(":visible")){
        $(".stroke-sub-menu").toggle();
    }
});

$('#line').click(() => {
    $(".line-sub-menu").toggle();

    //if other sub-menu is opened, close it
    if($(".shape-sub-menu").is(":visible")){
        $(".shape-sub-menu").toggle();
    }
    if($(".action-do-sub-menu").is(":visible")){
        $(".action-do-sub-menu").toggle();
    }
    if($(".stroke-sub-menu").is(":visible")){
        $(".stroke-sub-menu").toggle();
    }
});

//buttons without sub-menu
$('#brush').click(() => {
    currentFunction = new DrawingPencil(contextReal, contextDraft);
});
$('#eraser').click(() => {
    currentFunction = new DrawingEraser(contextReal, contextDraft);
});
$("#spray").click(() => {
    currentFunction = new DrawingSpray(contextReal);
});



//the below 2 are the line sub menu
$("#straight-line").click(() => {
    $(".line-sub-menu").toggle();
    currentFunction = new DrawingSTline(contextReal, contextDraft);
    $("#line-img").attr("src", "painter-icon2/png/line.png");
});
$("#curve").click(() => {
    $(".line-sub-menu").toggle();
    currentFunction = new DrawingCurve(contextReal, contextDraft);
    $("#line-img").attr("src", "painter-icon2/png/curved-line.png");
});

//the below 3 are the shape sub menu
$("#circle").click(() => {
    $(".shape-sub-menu").toggle();
    currentFunction = new DrawingCircle(contextReal, contextDraft);
    $("#shape-img").attr("src", "painter-icon2/png/circle.png");
});
$("#square").click(() => {
    $(".shape-sub-menu").toggle();
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
    $("#shape-img").attr("src", "painter-icon2/png/square.png");
});
$("#triangle").click(() => {
    $(".shape-sub-menu").toggle();
    currentFunction = new DrawingTriangle(contextReal, contextDraft);
    $("#shape-img").attr("src", "painter-icon2/png/triangle.png");
});

//the below 3 are the stroke sub menu
$("#circle-stroke").click(() => {
    $(".stroke-sub-menu").toggle();
    currentFunction = new DrawingCircleStroke(contextReal, contextDraft);
    $("#stroke-img").attr("src", "painter-icon2/png/circle-stroke.png");
});
$("#square-stroke").click(() => {
    $(".stroke-sub-menu").toggle();
    currentFunction = new DrawingRectangleStroke(contextReal, contextDraft);
    $("#stroke-img").attr("src", "painter-icon2/png/rectangle-stroke.png");
});
$("#triangle-stroke").click(() => {
    $(".stroke-sub-menu").toggle();
    currentFunction = new DrawingTriangleStroke(contextReal, contextDraft);
    $("#stroke-img").attr("src", "painter-icon2/png/triangle-stroke.png");
});


//the below 6 are the action-do-sub menu
$("#undo").click(() => {
    trialSetting.process.undoFunction();
    $(".action-do-sub-menu").toggle();
});
$("#redo").click(() => {
    trialSetting.process.redoFunction();
    $(".action-do-sub-menu").toggle();
});
$("#clear").click(() => {
    if(confirm("Are you sure")){
    }
    else{
        event.preventDefault();
    }
});
$("#save").click(() => {
    localStorage.setItem("canvasName", canvasReal.toDataURL());
    alert("Your Drawings are Saved!")
    $(".action-do-sub-menu").toggle();
});

$("#load").click(() => {
    var loadImg = confirm("The saved Drawings will be Loaded!")
    if (loadImg){
        var dataURL = localStorage.getItem("canvasName");
    var img = new Image();
    img.src = dataURL;
    img.onload = function () {
        contextReal.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        contextReal.drawImage(img, 0, 0);
    };
    }
    $(".action-do-sub-menu").toggle();
});

$("#download").click(() => {
    let downloadImg = canvasReal.toDataURL("image/png").replace("image/png", "image/octet-stream");
    document.location.href = downloadImg;
    $(".action-do-sub-menu").toggle();
});




//close all sub-menu when you click the canvas
$("#canvas-draft").click(() => {
    if($(".shape-sub-menu").is(":visible")){
        $(".shape-sub-menu").toggle();
    }
    if($(".line-sub-menu").is(":visible")){
        $(".line-sub-menu").toggle();
    }
    if($(".action-do-sub-menu").is(":visible")){
        $(".action-do-sub-menu").toggle();
    }
    if($(".stroke-sub-menu").is(":visible")){
        $(".stroke-sub-menu").toggle();
    }
});
