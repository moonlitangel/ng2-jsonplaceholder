import { Component} from '@angular/core';

import { JsonPlaceholderService } from './../jsonplaceholder.service'
import { JsonPlaceholder } from './../jsonplaceholder';

@Component({
	selector: 'app-json-post',
	templateUrl: './json-post.component.html',
	styleUrls: ['./json-post.component.scss']
})
export class JsonPostComponent{
	model = new JsonPlaceholder;

	constructor(private JsonPlaceholderService: JsonPlaceholderService) { }
	
	add(model): void {
		this.JsonPlaceholderService.create(this.model)
			.then(() => {
				location.reload();
			})
	}
}
