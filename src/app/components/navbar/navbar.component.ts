import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '@auth0/auth0-angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);
  }
  ngOnInit(): void {}
}
