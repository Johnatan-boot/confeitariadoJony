import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-orcamentos',
  changeDetection:ChangeDetectionStrategy.OnPush,

  templateUrl: './orcamentos.component.html',
  styleUrls: ['./orcamentos.component.scss']
})
export class OrcamentosComponent implements OnInit {

  imageUrlLogin: string = './assets/bannerLogin/bannerLogin.png';

  selected = 'bolo_peq';
  selecteds = '30';

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
  		id: [null],
  		nome: [null],
  		email: [null],
  		telefone: [null],
      tamanho: [null],
      sabor: [null],
      observacoes: [null]

  });

   }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
