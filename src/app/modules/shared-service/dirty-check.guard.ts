import { Injectable } from "@angular/core";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
import { BaseComponent } from "../../base.component";
import { ConfirmationDialogService } from "../../services/confirmation-dialog.service";
import { ConfirmationDialogReferenceService } from "../../services/confirmation-dialog-reference.service";

@Injectable()
export class DirtyCheckGuard implements CanDeactivate<BaseComponent> {

  constructor(private confirmationDialogService: ConfirmationDialogService,
    private confirmationDialogReferenceService: ConfirmationDialogReferenceService){}

  canDeactivate(
    component: BaseComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let canNavigate: boolean = component.IsDirtry();

    if(canNavigate==false)
    {
      canNavigate = this.confirmationDialogService.loadComponent(component.getRef(),nextState.url);
      this.confirmationDialogReferenceService.allow = false;
    }
    else{
      this.confirmationDialogReferenceService.allow = false;
    }
    return canNavigate;
  }
}
