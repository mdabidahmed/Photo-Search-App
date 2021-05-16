import { Component } from '@angular/core';
import { PexelPhotoService } from './services/pexel-photo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pexelApi';
  search: string[];
  perPage: number;
  data: string[];
  constructor(private pexelPhotoService: PexelPhotoService) {
    this.pexelPhotoService.getData(this.search, this.perPage);
  }
  searchPhotos() {
    this.pexelPhotoService.getData(this.search, this.perPage).subscribe(
      (data) => {
        console.log(data);
        this.data = data.photos;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
