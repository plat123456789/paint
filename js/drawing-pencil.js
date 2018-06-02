class DrawingPencil extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;            
    }
    
    onMouseDown(coord,event){
        this.context.strokeStyle = inputColor;
        this.context.lineJoin = "round";
        this.context.lineCap = "round";
        this.context.lineWidth = inputWidth;
        this.context.beginPath();
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord,event){
        this.draw(coord[0],coord[1]);
    }

    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x,y){
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
        this.context.closePath();
        this.context.stroke();  
        this.onFinish();
    }
    onFinish() {
        let imageURL = new Image();
        imageURL.src = canvasReal.toDataURL();
        trialSetting.process.addFunction(imageURL);
    }
}