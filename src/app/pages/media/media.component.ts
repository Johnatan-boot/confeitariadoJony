import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-media',
  changeDetection:ChangeDetectionStrategy.OnPush,

  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  public sld1: string = './assets/home/1011.png';
  public sld2: string = './assets/home/944.png';
  public sld3: string = './assets/home/984.png';
  public sld4: string = './assets/home/slide1.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
