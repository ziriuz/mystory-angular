import { Component, OnInit } from '@angular/core';
import { QrCodeReaderService } from 'src/app/services/qr-code-reader.service';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';


declare const qrcode: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  subscription: Subscription;
  decodedQr: string;
  constructor(
    private qrReader: QrCodeReaderService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnDestroy(): void {    
    //this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

  showQrString() {
    if (this.decodedQr != undefined) {
      this._snackBar.openFromComponent(SnackbarComponent, {
        duration: 4000,
        verticalPosition:"bottom",
        data: "QR info: " + this.decodedQr
      });
    }
  };

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.subscription = this.qrReader.decode(file).pipe(
      take(1)
    ).subscribe(decodedString => {
        this.decodedQr = decodedString;
        console.log("QR reading result: " + decodedString);
        this.showQrString();
      });
  }
}
