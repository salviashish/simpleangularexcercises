import {
  Injectable,
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef
} from "@angular/core";
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";
import { ConfirmationDialogReferenceService } from "./confirmation-dialog-reference.service";

@Injectable({
  providedIn: "root"
})
export class ConfirmationDialogService {
  componentRef: ComponentRef<ConfirmationDialogComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private confirmationDialogReferenceService: ConfirmationDialogReferenceService
  ) {}

  loadComponent(viewContainerRef: ViewContainerRef, nextState) {
    // use nextState to change the router state using reference service;
    this.confirmationDialogReferenceService.routerState = nextState;

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      ConfirmationDialogComponent
    );
    this.componentRef = viewContainerRef.createComponent(componentFactory);
    this.confirmationDialogReferenceService.componentRef = this.componentRef;
    return this.confirmationDialogReferenceService.allow;
  }
}
