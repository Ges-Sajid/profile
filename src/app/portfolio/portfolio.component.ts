import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
	encapsulation: ViewEncapsulation.None,
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  // closeResult:any;

	constructor(private modalService: NgbModal) {}

	openVerticallyCentered(content:any) {
		this.modalService.open(content, { centered: true, size: 'xl' });
	}

}
