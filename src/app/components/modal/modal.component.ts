import { ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-modal',
  changeDetection:ChangeDetectionStrategy.OnPush,

  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
	styles: [
		`
			.dark-modal .modal-content {
				background-color: #292b2c;
				color: white;
			}
			.dark-modal .close {
				color: white;
			}
			.light-blue-backdrop {
				background-color: #5cb3fd;
			}
		`,
	],
})


export class ModalComponent implements OnInit {

  closeResult: string;

	constructor(
    private modalService: NgbModal,
    private api : ApiService,) {}





	openSm(content) {
		this.modalService.open(content, { size: 'sm' });
	}


  ngOnInit(): void {




  }

}
