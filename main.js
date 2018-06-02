let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');
let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');
let emptyImg = new Image();
emptyImg.src = canvasReal.toDataURL();
let currentFunction;
let clearFunction;
let saveFunction;
let dragging = false;

$('#undo').prop('disabled', true);
$('#redo').prop('disabled', true);


$('#canvas-draft').mousedown(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseDown([mouseX,mouseY],e);
    dragging = true;
});

$('#canvas-draft').mousemove(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    if(dragging){
        currentFunction.onDragging([mouseX,mouseY],e);
    }
});

$('#canvas-draft').mouseup(function(e){
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseUp([mouseX,mouseY],e);
});

$('#canvas-draft').mouseleave(function(e){
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseLeave([mouseX,mouseY],e);
});

$('#canvas-draft').mouseenter(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseEnter([mouseX,mouseY],e);
});

//super class
class PaintFunction{
    constructor(){}
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
    onFinish(){}
}

//undo and redo setting
let trialSetting = {
    process:{
        arrayImg:[emptyImg],
        currentIndex:0,
        addFunction(imageURL){
            if(this.currentIndex !== this.arrayImg.length-1){
                this.arrayImg = this.arrayImg.slice(0,this.currentIndex+1);
                this.arrayImg.push(imageURL);
                this.currentIndex = this.arrayImg.length-1;
            } else {
                this.arrayImg.push(imageURL);
                this.currentIndex++;
            }
            $('#undo').prop('disabled', false);
            $('#redo').prop('disabled', true);
        },
        undoFunction(){
            this.currentIndex--;
            contextReal.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            contextReal.drawImage(this.arrayImg[this.currentIndex],0,0);
            $('#redo').prop('disabled', false);
            let undoCheck = this.currentIndex === 0 ? true : false;
            $('#undo').prop('disabled', undoCheck);
        },
        redoFunction(){
            this.currentIndex++;
            contextReal.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            contextReal.drawImage(this.arrayImg[this.currentIndex],0,0);
            $('#undo').prop('disabled', false);
            let redoCheck = this.currentIndex === this.arrayImg.length - 1 ? true : false;
            $('#redo').prop('disabled', redoCheck);
        }
    }
}

//when the page load, default = pencil
$(document).ready(function(){
    currentFunction = new DrawingPencil(contextReal, contextDraft);
})





