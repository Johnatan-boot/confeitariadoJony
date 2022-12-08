import { CadastroPfService, ClientesService } from 'src/app/services';
import { CnpjValidator } from 'src/app/shared';
import { CpfValidator } from 'src/app/shared';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CadastroPf } from 'src/app/models';

@Component({
  selector: 'app-cadastro-pf',
changeDetection:ChangeDetectionStrategy.OnPush,

  templateUrl: './cadastro-pf.component.html',
  styleUrls: ['./cadastro-pf.component.scss']
})
export class CadastroPfComponent implements OnInit {

  form!: FormGroup;


  constructor(
    private fb: FormBuilder,
  	private snackBar: MatSnackBar,
    private router: Router,
    private cadastroPfService: CadastroPfService,
    private clientesService: ClientesService
  ) { }

  ngOnInit() {
  	this.gerarForm();
  }


 gerarForm() {
  	this.form = this.fb.group({
  		nome: ['', [Validators.required, Validators.minLength(3)]],
  		email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, CpfValidator]],
      telefone: [null],
      endereco: [null],
      cidade:  [null],
      estado:  [null],
      /*


      senha:  [null],
      numCartC:  [null],
      numCartD:  [null],
      senhaCartC:  [null],
      senhaCartD:  [null],*/
  	});
  }

  cadastroPf() {
    //console.log("cadastrar-pf");
  	if (this.form.invalid) {
      return;
    }

    const cadastroPf: CadastroPf = this.form.value;
    this.cadastroPfService.cadastrar(cadastroPf)
      .subscribe(
        data => {
          const msg: string = "Realize o login para acessar o sistema.";
          this.snackBar.open(msg, "Sucesso", { duration: 5000 });
          this.router.navigate(['/login']);
        },
        err => {
          let msg: string = "Tente novamente em instantes.";
          if (err.status == 400) {
            msg = err.error.errors.join(' ');
          }
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  	return false;
  }
onSubmit(){
  this.clientesService.save(this.form.value).subscribe(data => console.log(data), err => {
    let msg: string = "Tente novamente em instantes.";
    if (err.status == 400) {
      msg = err.error.errors.join(' ');
    }
    this.snackBar.open(msg, "Erro", { duration: 5000 });
    this.onError();

  });
}

private onError(){
  let msg2: string = "Tente novamente em instantes.";
  this.snackBar.open(msg2, "Erro", { duration: 5000 });
}

}
