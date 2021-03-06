class DrawingCircle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    onMouseDown(coord,event){
        
        this.contextReal.strokeStyle = inputColor;
        this.contextReal.fillStyle = inputColor;
        // this.contextReal.lineJoin = "round";
        // this.contextReal.lineWidth = 5;
        this.contextReal.beginPath();
        this.origX = coord[0];
        this.origY = coord[1];
    }

    onDragging(coord,event){
        // this.contextDraft.lineJoin = "round";
        // this.contextDraft.lineWidth = 5;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height); //- to clear draft context before redrawing
        this.contextDraft.strokeStyle = inputColor;
        this.contextDraft.fillStyle = inputColor;
        this.contextDraft.fill();
        this.contextDraft.beginPath(); 
        this.contextDraft.ellipse(this.origX, this.origY, Math.abs(coord[0]- this.origX), Math.abs(coord[1] - this.origY), 0 * Math.PI/180, 0, 2 * Math.PI) // rotation hardcoded as zero - essentially drawing an arc from zero @ x-axis to 2pi;
        this.contextDraft.stroke();
    }
    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.ellipse(this.origX, this.origY, Math.abs(coord[0]- this.origX), Math.abs(coord[1] - this.origY), 0* Math.PI/180, 0, 2 * Math.PI)// rotation hardcoded as zero - use a JS text promt for user feedback?;
        this.contextReal.stroke();
        this.contextReal.fill();
        this.onFinish();
    }
    onMouseLeave(){}

    onFinish(){
        let imageURL = new Image();
        imageURL.src = canvasReal.toDataURL();
        trialSetting.process.addFunction(imageURL);
    }
}