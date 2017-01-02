import { Component }    from '@angular/core';
import { Router }               from '@angular/router';

import { JsonPlaceholderComponent } from './jsonplaceholder.component';
import { JsonPlaceholderService } from './jsonplaceholder.service';

@Component({
    templateUrl: 'dashboard.component.html',
		providers: [JsonPlaceholderService]
})
export class DashboardComponent{
	title = 'app works!';
}
