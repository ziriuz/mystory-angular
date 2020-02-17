import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatListModule,
  MatSliderModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatMenuModule,
  MatSnackBarModule,
  MatGridListModule,
  MatTabsModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule

} from "@angular/material";

const modules = [
  MatButtonModule,
  MatListModule,
  MatSliderModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatMenuModule,
  MatSnackBarModule,
  MatGridListModule,
  MatTabsModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
