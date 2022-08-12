import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.page.html',
  styleUrls: ['./password-change.page.scss'],
})
export class PasswordChangePage implements OnInit {
  form: FormGroup;
  currentPassword: any;
  newPassword: any;
  newPassword2: any;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
  ) {
    this.form = formBuilder.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      newPassword2: ['', Validators.required],
    });
    this.currentPassword = this.form.controls.currentPassword;
    this.newPassword = this.form.controls.newPassword;
    this.newPassword2 = this.form.controls.newPassword2;

  }

  ngOnInit() {
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalController.dismiss(closeModal);
  }

  updatePassword() {

  }

}
