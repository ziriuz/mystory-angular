import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CloudService } from 'src/app/services/cloud.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from 'src/app/services/catalog.service';
import { Product } from 'src/app/model/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-story-uploader',
  templateUrl: './story-uploader.component.html',
  styleUrls: ['./story-uploader.component.css']
})
export class StoryUploaderComponent implements OnInit {

  @ViewChild("fileInput", {static: false}) fileInput: ElementRef;
  files  = [];
  message: string = '';
  product: Product;
  subs: Subscription;

  uploadForm = this.fb.group({
    storyName: ['', Validators.required],
    author: ['', Validators.required],
    outline: ['', Validators.required],
    city: ['']
  });


  constructor(
    private route: ActivatedRoute,
    private cloudService: CloudService,
    private catalogService: CatalogService,
    private fb: FormBuilder
  ) { }

  get storyName(){
    return this.uploadForm.get('storyName');
  };
  get author() {
    return this.uploadForm.get('author');
  }
  get outline() {
    return this.uploadForm.get('outline');
  }

  ngOnInit() {
    const id:number = +this.route.snapshot.paramMap.get('productId');
    this.product = this.catalogService.getSelectedProduct();
    if (this.product == null && id > 0 ){
      this.subs = this.catalogService.getProduct(id).subscribe(
        product => this.product = product
      );
    }
  }

  ngOnDestroy(){
    if(this.subs) this.subs.unsubscribe();
  }

  callUploadService(file) {
    const formData = new FormData();
    formData.append('name', this.storyName.value);
    formData.append('author', this.author.value);
    formData.append('outline', this.outline.value);
    formData.append('file', file.data);
    file.inProgress = true;
    this.cloudService.upload(formData)//.pipe(take(3))
      .subscribe(
      (res) => {
        switch (res.status) {
          case 'progress':
            file.progress = res.message;
            break;
          case 'other':
            console.log(`Uploader component received {status:${res.status}, message:${res.message}}`);
            break;
          case 'done':
            file.message = res.message;
            break;
          default:
            file.message = `Upload status: ${res.status} (${res.message})`;
        }
      },
      (err) => console.log(err)
    ); 
    /*this.cloudService.upload(formData).pipe(  
      map(event => {  
        switch (event.type) {  
          case HttpEventType.UploadProgress:  
            file.progress = Math.round(event.loaded * 100 / event.total);  
            break;  
          case HttpEventType.Response:  
            return event;  
        }  
      }).subscribe((event: any) => {  
        if (typeof (event) === 'object') {
          console.log(event.body);
        }
      });*/
  }

  private upload() {
    if (!this.uploadForm.valid || this.files.length == 0){
      console.dir(this.uploadForm.value);
      console.warn('fileInput ' + this.fileInput.nativeElement.value);
    }
    this.fileInput.nativeElement.value = '';
    this.files.forEach(file => {
      this.callUploadService(file);
    });
  }
  onSelect() {    
    const fileInput = this.fileInput.nativeElement;
    fileInput.onchange = () => {
      this.files = [];
      for (let index = 0; index < fileInput.files.length; index++)
      {
        const file = fileInput.files[index];
        this.files.push({ filename: file.name, data: file, inProgress: false, progress: 0});
      }
      //this.upload();
    };
    fileInput.click();
  }
  onUpload() {
    this.upload();
  }
}
