import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  closeDialog() {
    const dialogRed = this.dialog.closeAll();
  }
}
