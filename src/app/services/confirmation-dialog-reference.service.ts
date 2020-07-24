import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class ConfirmationDialogReferenceService {
  private _componentRef: any;
  private _routerState: string;
  private _allow: boolean;

  constructor(private router: Router) {}

  set componentRef(ref) {
    this._componentRef = ref;
  }

  get componentRef() {
    return this._componentRef;
  }

  set allow(allow) {
    this._allow = allow;
  }

  get allow() {
    return this._allow;
  }

  set routerState(state) {
    this._routerState = state;
  }

  get routerState() {
    return this._routerState;
  }

  public unloadComponent() {
    this.componentRef.destroy();
  }

  public destroyComponentAndAllowNavigation() {
    this.componentRef.destroy();
    this.router.navigate([this.routerState]);
  }
}
