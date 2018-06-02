class DrawingTriangleStroke extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }

    onMouseDown(coord,event){
        this.contextDraft.strokeStyle = inputColor;
        this.contextReal.strokeStyle = inputColor;
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineWidth = inputWidth;
        this.contextReal.lineJoin = "round";
        this.contextReal.lineWidth = inputWidth;
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX,this.origY);
    }
    onDragging(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.lineTo(this.origX-(coord[0]-this.origX),coord[1]);
        this.contextDraft.closePath();
        this.contextDraft.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.lineTo(coord[0],coord[1]);
        this.contextReal.lineTo(this.origX-(coord[0]-this.origX),coord[1]);
        this.contextReal.closePath();
        this.contextReal.stroke();
        this.onFinish();
    }

    onMouseLeave(){}
    onMouseEnter(){}

    onFinish() {
        let imageURL = new Image();
        imageURL.src = canvasReal.toDataURL();
        trialSetting.process.addFunction(imageURL);
    }

}