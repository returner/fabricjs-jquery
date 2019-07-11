
import {Shape} from "../interface/Shape";
import { ShapeOption } from "../interface/ShapeOption";
import { RectOption } from "../model/RectOption";
import { Rectangle } from "../model/Rectangle";
import { DrawCanvas } from "./DrawCanvas";
import { Shapes } from "../model/Shapes";

export class SketchBook {
    private shapes : Array<Shape> = [];
    private drawCanvas : DrawCanvas;

    constructor(canvasElementId : string) {
        this.drawCanvas = new DrawCanvas(canvasElementId);
    }

    public drawRect(option : ShapeOption) {
        let shape : Shape = new Rectangle(option);;

        this.shapes.push(shape);
        this.drawCanvas.createShape(shape);
        
    }
}