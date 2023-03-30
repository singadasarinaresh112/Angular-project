import { 
  Component,
   OnInit, 
   Input,
   ViewEncapsulation, 
   OnChanges,
   SimpleChanges,
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   OnDestroy,
   ViewChild,
   ElementRef,
   ContentChild
   } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated  //None, Native
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input () name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentparagraph') paragraph: ElementRef;

  constructor() { 
    console.log('constructor called');
  }
  
  ngOnchanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes);  
  }

  ngOnInit(){
    console.log('ngOnInit called!');
    console.log('Text Content: '+ this.paragraph.nativeElement.textContent)
    console.log('Text Content of paragraph: '+ this.paragraph.nativeElement.textContent)
  }

  ngDoCheck(){
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!')
    console.log('Text Content of paragraph: '+ this.paragraph.nativeElement.textContent)

  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit Called!')
    console.log('Text Content:' + this.header.nativeElement.textContent)

  }

  ngAfterViewChecked(){
    console.log('ngAfterChecked Called!')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy Called!')
  }
}
