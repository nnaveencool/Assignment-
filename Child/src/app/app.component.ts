import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmDbApiService } from './om-db-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'child-app';

  movieResults!: any[];

  constructor(
    private api: OmDbApiService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const search = params['search'];
      if (search) {
        this.api.searchMovies(search).subscribe((data: any) => {
          this.movieResults = data.Search
        });
      }
    });
  }
}
