import { Component, OnInit,AfterViewInit,ViewChild } from "@angular/core";
import { ConfirmationDialogReferenceService } from "../services/confirmation-dialog-reference.service";

@Component({
  selector: "app-confirmation-dialog",
  templateUrl: "./confirmation-dialog.component.html",
  styleUrls: ["./confirmation-dialog.component.css"]
})
export class ConfirmationDialogComponent implements OnInit {
  @ViewChild('modal') modalDialog:any;

  constructor(
    private confirmationDialogReferenceService: ConfirmationDialogReferenceService
  ) {}

  ngOnInit() {}

  public closeDialog() {
    this.confirmationDialogReferenceService.unloadComponent();
  }

  public navigateAway() {
    this.confirmationDialogReferenceService.allow = true;
    this.confirmationDialogReferenceService.destroyComponentAndAllowNavigation();
  }

  ngAfterViewInit(){

  }
}
