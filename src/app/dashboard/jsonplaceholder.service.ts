import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { JsonPlaceholder } from './jsonplaceholder';

@Injectable()
export class JsonPlaceholderService {

	private headers = new Headers({ 'Content-Type': 'application/json' });
	private DataUrl = 'http://localhost:3001/posts';

	constructor(private http: Http) { }
	getAll(): Promise<JsonPlaceholder[]> {
		return this.http.get(this.DataUrl)
			.toPromise()
			.then(response => response.json() as JsonPlaceholder[])
			.catch(this.handleError);
	}

	getPost(id: number): Promise<JsonPlaceholder> {
		const url = `${this.DataUrl}/${id}`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json() as JsonPlaceholder)
			.catch(this.handleError);
	}

	create(JsonPlaceholder: JsonPlaceholder): Promise<JsonPlaceholder> {
		return this.http.post(this.DataUrl, JsonPlaceholder, {headers: this.headers})
		.toPromise()
		.then(res => {
			res.json()})
		.catch(this.handleError);
	}

	update(JsonPlaceholder: JsonPlaceholder): Promise<JsonPlaceholder> {
		const url = `${this.DataUrl}/${JsonPlaceholder.id}`;
		return this.http.put(url, JSON.stringify(JsonPlaceholder), {headers: this.headers})
		.toPromise()
		.then(res => {
			console.log(res);
			res.json() as JsonPlaceholder})
		.catch(this.handleError);
	}

	delete(id: number): Promise<void> {
		const url = `${this.DataUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers})
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}