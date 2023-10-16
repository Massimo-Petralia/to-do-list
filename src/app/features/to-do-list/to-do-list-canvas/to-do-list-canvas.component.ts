import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
  Input,
} from '@angular/core';
@Component({
  selector: 'app-to-do-list-canvas',
  templateUrl: './to-do-list-canvas.component.html',
  styleUrls: ['./to-do-list-canvas.component.scss'],
})
export class ToDoListCanvasComponent implements AfterViewInit {
  @ViewChild('canvas') canvasElement!: ElementRef<HTMLCanvasElement>;

  @Input() imageDataUrl?: string;

  ngAfterViewInit(): void {
    const canvas = this.canvasElement.nativeElement;
    const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
    context!.imageSmoothingEnabled = true;
    context!.strokeStyle = '#1E90FF';
    const img = new Image();
    if (this.imageDataUrl) {
      img.src = this.imageDataUrl;
      img.onload = () => {
        context?.drawImage(img, 0, 0);
        context?.stroke();
      };
    }

    if (canvas && context) {
      let isDrawing = false;
      canvas.addEventListener('mousedown', (event) => {
        isDrawing = true;
        context.beginPath();
        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;
        context.moveTo(x, y);
      });
      canvas.addEventListener('mousemove', (event) => {
        if (!isDrawing) return;
        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;
        context.lineTo(x, y);
        context.stroke();
      });
      canvas.addEventListener('mouseup', () => {
        isDrawing = false;
        this.imageDataUrl = canvas.toDataURL('image/png');
      });
    }
  }
  clearCanvas() {
    const canvas = this.canvasElement.nativeElement;
    this.canvasElement.nativeElement
      .getContext('2d')
      ?.clearRect(0, 0, canvas.width, canvas.height);
  }
}
