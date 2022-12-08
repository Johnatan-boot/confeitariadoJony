import { Component, Inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-error-dialog',
  changeDetection:ChangeDetectionStrategy.OnPush,

  templateUrl: './error-dialog-component.html',
  styleUrls: ['./error-dialog-component.scss']
})
export class ErrorDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit(): void {
  }

}

