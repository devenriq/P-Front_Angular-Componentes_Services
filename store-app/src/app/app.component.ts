import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgParent = 'https://picsum.photos/900';

  onLoaded(img: string){
    console.log('log padre', img)
  }
}
