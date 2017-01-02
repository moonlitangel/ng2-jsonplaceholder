import { Component, OnInit } from '@angular/core';
import { JsonPlaceholder } from './jsonplaceholder';
import { JsonPlaceholderService } from './jsonplaceholder.service';

@Component({
  selector: 'app-post',
  templateUrl: './jsonplaceholder.component.html',
	providers: [JsonPlaceholderService]
})
export class JsonPlaceholderComponent implements OnInit {
	results: JsonPlaceholder[];
	model: JsonPlaceholder;
	getData = false;

  constructor(private JsonPlaceholderService: JsonPlaceholderService) { }
  
	getAll(): void {
		this.JsonPlaceholderService
		.getAll()
		.then(results => this.results = results)
	}

	getPost(id: number): void {
		this.JsonPlaceholderService
		.getPost(id)
		.then(results => {
			this.getData = true;
			this.model = results;
		})
	}

	update(JsonPlaceholder: JsonPlaceholder): void {
		this.JsonPlaceholderService
		.update(this.model)
		.then(() => {
			this.getData = false;
			this.results.splice(this.model.id-1, 1, this.model);
		})
	}

	delete(JsonPlaceholder: JsonPlaceholder): void {
    this.JsonPlaceholderService
        .delete(JsonPlaceholder.id)
        .then(() => {
          this.results = this.results.filter(h => h !== JsonPlaceholder);
        });
  }

	ngOnInit() {
    this.getAll();
  }
	
}