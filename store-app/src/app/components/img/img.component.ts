import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {
  @Input() img: string=''
  @Output() loaded= new EventEmitter<string>();

  imageDefault = '../../../assets/images/prost.png'

  imgError(){
    this.img = this.imageDefault
  }

  imgLoaded(){
    console.log('Log hijo');
    this.loaded.emit(this.img)
  }
}
