import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanvasService {
  // private context!: CanvasRenderingContext2D;
  // private contexts: CanvasRenderingContext2D[]=[];

  // constructor() {}

  // private mouseDown$!: Observable<MouseEvent>;
  // private mouseMoves$: Observable<MouseEvent>[] =[];

  // initialize(canvas: HTMLCanvasElement, index: number) {
  //   this.context = canvas.getContext('2d') as CanvasRenderingContext2D;
  //   this.contexts[index] = this.context
  //   this.mouseMoves$[index] = fromEvent<MouseEvent>(canvas, 'mousemove');
  //   this.mouseDown$ = fromEvent<MouseEvent>(canvas, 'mousedown');
  // }

  // getMouseMove(index: number): Observable<MouseEvent> {
  //   return this.mouseMoves$[index];
  // }

  // getContext(index: number): CanvasRenderingContext2D {
  //   return this.contexts[index];
  // }

  // getMouseDown(): Observable<MouseEvent> {
  //   return this.mouseDown$;
  // }


}