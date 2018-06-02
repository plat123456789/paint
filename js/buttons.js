//the below 4 are for line, shape, stroke & action button, they all have sub menu
//shape
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

//stroke
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

//action-do
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

//line
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
//brush
$('#brush').click(() => {
    currentFunction = new DrawingPencil(contextReal, contextDraft);

    //change back the main icon photo when other drawing function was clicked;
    if($("#line-img").attr("src")!=="painter-icon2/png/vector.png"){
        $("#line-img").fadeOut(500, function() {
            $("#line-img").attr("src","painter-icon2/png/vector.png");
            $("#line-img").fadeIn(500);
        });
    }
    if($("#shape-img").attr("src")!=="painter-icon2/png/033-ruler-1.png"){
        $("#shape-img").fadeOut(500, function() {
            $("#shape-img").attr("src","painter-icon2/png/033-ruler-1.png");
            $("#shape-img").fadeIn(500);
        });
    }
    if($("#stroke-img").attr("src")!=="painter-icon2/png/selection.png"){
        $("#stroke-img").fadeOut(500, function() {
            $("#stroke-img").attr("src","painter-icon2/png/selection.png");
            $("#stroke-img").fadeIn(500);
        });
    }
});

//eraser
$('#eraser').click(() => {
    currentFunction = new DrawingEraser(contextReal, contextDraft);

    //change back the main icon photo when other drawing function was clicked;
    if($("#line-img").attr("src")!=="painter-icon2/png/vector.png"){
        $("#line-img").fadeOut(500, function() {
            $("#line-img").attr("src","painter-icon2/png/vector.png");
            $("#line-img").fadeIn(500);
        });
    }
    if($("#shape-img").attr("src")!=="painter-icon2/png/033-ruler-1.png"){
        $("#shape-img").fadeOut(500, function() {
            $("#shape-img").attr("src","painter-icon2/png/033-ruler-1.png");
            $("#shape-img").fadeIn(500);
        });
    }
    if($("#stroke-img").attr("src")!=="painter-icon2/png/selection.png"){
        $("#stroke-img").fadeOut(500, function() {
            $("#stroke-img").attr("src","painter-icon2/png/selection.png");
            $("#stroke-img").fadeIn(500);
        });
    }
});

//spray
$("#spray").click(() => {
    currentFunction = new DrawingSpray(contextReal);

    //change back the main icon photo when other drawing function was clicked;
    if($("#line-img").attr("src")!=="painter-icon2/png/vector.png"){
        $("#line-img").fadeOut(500, function() {
            $("#line-img").attr("src","painter-icon2/png/vector.png");
            $("#line-img").fadeIn(500);
        });
    }
    if($("#shape-img").attr("src")!=="painter-icon2/png/033-ruler-1.png"){
        $("#shape-img").fadeOut(500, function() {
            $("#shape-img").attr("src","painter-icon2/png/033-ruler-1.png");
            $("#shape-img").fadeIn(500);
        });
    }
    if($("#stroke-img").attr("src")!=="painter-icon2/png/selection.png"){
        $("#stroke-img").fadeOut(500, function() {
            $("#stroke-img").attr("src","painter-icon2/png/selection.png");
            $("#stroke-img").fadeIn(500);
        });
    }
});



//the below 2 are the line sub menu
$("#straight-line").click(() => {
    $(".line-sub-menu").toggle();
    currentFunction = new DrawingSTline(contextReal, contextDraft);

    //change side-bar icon to the selected function icon
    $("#line-img").fadeOut(500, function() {
        $("#line-img").attr("src","painter-icon2/png/line.png");
        $("#line-img").fadeIn(500);
    });

    //change back the main icon photo when other drawing function was clicked;
    if($("#shape-img").attr("src")!=="painter-icon2/png/033-ruler-1.png"){
        $("#shape-img").fadeOut(500, function() {
            $("#shape-img").attr("src","painter-icon2/png/033-ruler-1.png");
            $("#shape-img").fadeIn(500);
        });
    }
    if($("#stroke-img").attr("src")!=="painter-icon2/png/selection.png"){
        $("#stroke-img").fadeOut(500, function() {
            $("#stroke-img").attr("src","painter-icon2/png/selection.png");
            $("#stroke-img").fadeIn(500);
        });
    }
});

//line sub menu
$("#curve").click(() => {
    $(".line-sub-menu").toggle();
    currentFunction = new DrawingCurve(contextReal, contextDraft);

    //change side-bar icon to the selected function icon
    $("#line-img").fadeOut(500, function() {
        $("#line-img").attr("src","painter-icon2/png/curved-line.png");
        $("#line-img").fadeIn(500);
    });

    //change back the main icon photo when other drawing function was clicked;
    if($("#shape-img").attr("src")!=="painter-icon2/png/033-ruler-1.png"){
        $("#shape-img").fadeOut(500, function() {
            $("#shape-img").attr("src","painter-icon2/png/033-ruler-1.png");
            $("#shape-img").fadeIn(500);
        });
    }
    if($("#stroke-img").attr("src")!=="painter-icon2/png/selection.png"){
        $("#stroke-img").fadeOut(500, function() {
            $("#stroke-img").attr("src","painter-icon2/png/selection.png");
            $("#stroke-img").fadeIn(500);
        });
    }
});

//the below 3 are the shape sub menu
$("#circle").click(() => {
    $(".shape-sub-menu").toggle();
    currentFunction = new DrawingCircle(contextReal, contextDraft);

    //change side-bar icon to the selected function icon
    $("#shape-img").fadeOut(500, function() {
        $("#shape-img").attr("src","painter-icon2/png/circle.png");
        $("#shape-img").fadeIn(500);
    });

    //change back the main icon photo when other drawing function was clicked;
    if($("#line-img").attr("src")!=="painter-icon2/png/vector.png"){
        $("#line-img").fadeOut(500, function() {
            $("#line-img").attr("src","painter-icon2/png/vector.png");
            $("#line-img").fadeIn(500);
        });
    }
    if($("#stroke-img").attr("src")!=="painter-icon2/png/selection.png"){
        $("#stroke-img").fadeOut(500, function() {
            $("#stroke-img").attr("src","painter-icon2/png/selection.png");
            $("#stroke-img").fadeIn(500);
        });
    }
});

//shape sub menu
$("#square").click(() => {
    $(".shape-sub-menu").toggle();
    currentFunction = new DrawingRectangle(contextReal, contextDraft);

    //change side-bar icon to the selected function icon
    $("#shape-img").fadeOut(500, function() {
        $("#shape-img").attr("src","painter-icon2/png/square.png");
        $("#shape-img").fadeIn(500);
    });

    //change back the main icon photo when other drawing function was clicked;
    if($("#line-img").attr("src")!=="painter-icon2/png/vector.png"){
        $("#line-img").fadeOut(500, function() {
            $("#line-img").attr("src","painter-icon2/png/vector.png");
            $("#line-img").fadeIn(500);
        });
    }
    if($("#stroke-img").attr("src")!=="painter-icon2/png/selection.png"){
        $("#stroke-img").fadeOut(500, function() {
            $("#stroke-img").attr("src","painter-icon2/png/selection.png");
            $("#stroke-img").fadeIn(500);
        });
    }
});

//shape sub menu
$("#triangle").click(() => {
    $(".shape-sub-menu").toggle();
    currentFunction = new DrawingTriangle(contextReal, contextDraft);

    //change side-bar icon to the selected function icon
    $("#shape-img").fadeOut(500, function() {
        $("#shape-img").attr("src","painter-icon2/png/triangle.png");
        $("#shape-img").fadeIn(500);
    });

    //change back the main icon photo when other drawing function was clicked;
    if($("#line-img").attr("src")!=="painter-icon2/png/vector.png"){
        $("#line-img").fadeOut(500, function() {
            $("#line-img").attr("src","painter-icon2/png/vector.png");
            $("#line-img").fadeIn(500);
        });
    }
    if($("#stroke-img").attr("src")!=="painter-icon2/png/selection.png"){
        $("#stroke-img").fadeOut(500, function() {
            $("#stroke-img").attr("src","painter-icon2/png/selection.png");
            $("#stroke-img").fadeIn(500);
        });
    }
});

//the below 3 are the stroke sub menu
$("#circle-stroke").click(() => {
    $(".stroke-sub-menu").toggle();
    currentFunction = new DrawingCircleStroke(contextReal, contextDraft);

    //change side-bar icon to the selected function icon
    $("#stroke-img").fadeOut(500, function() {
        $("#stroke-img").attr("src","painter-icon2/png/circle-stroke.png");
        $("#stroke-img").fadeIn(500);
    });

    //change back the main icon photo when other drawing function was clicked;
    if($("#line-img").attr("src")!=="painter-icon2/png/vector.png"){
        $("#line-img").fadeOut(500, function() {
            $("#line-img").attr("src","painter-icon2/png/vector.png");
            $("#line-img").fadeIn(500);
        });
    }
    if($("#shape-img").attr("src")!=="painter-icon2/png/033-ruler-1.png"){
        $("#shape-img").fadeOut(500, function() {
            $("#shape-img").attr("src","painter-icon2/png/033-ruler-1.png");
            $("#shape-img").fadeIn(500);
        });
    }
});

//stroke sub menu
$("#square-stroke").click(() => {
    $(".stroke-sub-menu").toggle();
    currentFunction = new DrawingRectangleStroke(contextReal, contextDraft);

    //change side-bar icon to the selected function icon
    $("#stroke-img").fadeOut(500, function() {
        $("#stroke-img").attr("src","painter-icon2/png/rectangle-stroke.png");
        $("#stroke-img").fadeIn(500);
    });

    //change back the main icon photo when other drawing function was clicked;
    if($("#line-img").attr("src")!=="painter-icon2/png/vector.png"){
        $("#line-img").fadeOut(500, function() {
            $("#line-img").attr("src","painter-icon2/png/vector.png");
            $("#line-img").fadeIn(500);
        });
    }
    if($("#shape-img").attr("src")!=="painter-icon2/png/033-ruler-1.png"){
        $("#shape-img").fadeOut(500, function() {
            $("#shape-img").attr("src","painter-icon2/png/033-ruler-1.png");
            $("#shape-img").fadeIn(500);
        });
    }
});

//stroke sub menu
$("#triangle-stroke").click(() => {
    $(".stroke-sub-menu").toggle();
    currentFunction = new DrawingTriangleStroke(contextReal, contextDraft);
    
    //change side-bar icon to the selected function icon
    $("#stroke-img").fadeOut(500, function() {
        $("#stroke-img").attr("src","painter-icon2/png/triangle-stroke.png");
        $("#stroke-img").fadeIn(500);
    });

    //change back the main icon photo when other drawing function was clicked;
    if($("#line-img").attr("src")!=="painter-icon2/png/vector.png"){
        $("#line-img").fadeOut(500, function() {
            $("#line-img").attr("src","painter-icon2/png/vector.png");
            $("#line-img").fadeIn(500);
        });
    }
    if($("#shape-img").attr("src")!=="painter-icon2/png/033-ruler-1.png"){
        $("#shape-img").fadeOut(500, function() {
            $("#shape-img").attr("src","painter-icon2/png/033-ruler-1.png");
            $("#shape-img").fadeIn(500);
        });
    }
});


//the below 6 are the action-do-sub menu
$("#undo").click(() => {
    event.preventDefault();
    if(trialSetting.process.currentIndex>=1){
        trialSetting.process.undoFunction();
    }
});

//action-do-sub menu
$("#redo").click(() => {
    event.preventDefault();
    if(trialSetting.process.currentIndex>=0&&trialSetting.process.currentIndex<trialSetting.process.arrayImg.length-1){
        trialSetting.process.redoFunction();
    }
});

//action-do-sub menu
$("#clear").click(() => {
    if(confirm("Are you sure")){
    }
    else{
        event.preventDefault();
    }
});

//action-do-sub menu
$("#save").click(() => {
    localStorage.setItem("canvasName", canvasReal.toDataURL());
    alert("Your Drawings are Saved!")
    $(".action-do-sub-menu").toggle();
});

//action-do-sub menu
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

//action-do-sub menu
$("#download").click(() => {
    let downloadImg = canvasReal.toDataURL("image/png").replace("image/png", "image/octet-stream");
    document.location.href = downloadImg;
    $(".action-do-sub-menu").toggle();
});




//close all sub-menu when you click the canvas-draft
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
