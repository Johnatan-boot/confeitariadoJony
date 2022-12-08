import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-perfil',
  changeDetection:ChangeDetectionStrategy.OnPush,

  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  private sld1: string = 'https://th.bing.com/th/id/R.61f26c19c57635f7e4446d06e8332fb8?rik=MXooTFL%2fH2HPww&riu=http%3a%2f%2fblog.penseavanti.com.br%2fwp-content%2fuploads%2f2014%2f04%2fredes.jpg&ehk=szNLzkjWBxDi4M3DYx3jC9yGGNtpOiE2FnQFEb2RSsM%3d&risl=&pid=ImgRaw&r=0';
  private sld2: string = 'https://th.bing.com/th/id/R.940d43962c9eeafd03f168c1da70ab7e?rik=7iWbGfXqpEixqw&pid=ImgRaw&r=0';
  private sld3: string = 'https://th.bing.com/th/id/OIP.G2_Gy-uCTPc3poZnj3N7VgAAAA?pid=ImgDet&w=450&h=450&rs=1';
  public logow: string = 'https://logospng.org/download/whatsapp/logo-whatsapp-verde-icone-ios-android-4096.png';
  public logof: string = 'https://imagepng.org/wp-content/uploads/2017/09/facebook-icone-icon.png';
  public logoy: string = 'https://cdn.icon-icons.com/icons2/1584/PNG/512/3721679-youtube_108064.png';
  public logoi: string = 'https://th.bing.com/th/id/OIP.fQwu4djRPJKfWctBP_urzAHaHZ?pid=ImgDet&rs=1';
  constructor() { }

  ngOnInit(): void {
  }

}
