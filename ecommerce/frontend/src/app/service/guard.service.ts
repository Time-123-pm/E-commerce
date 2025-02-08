import { CanActivateFn, Router } from "@angular/router";
import { ApiService } from "./api.service";
import { inject } from "@angular/core";


// Ensures that only authenticated users can access certain routes using isAuthenticated
export const userGuard: CanActivateFn = (route, state) => {
  if (inject(ApiService).isAuthenticated()) {
    return true;
  }else{
    inject(Router).navigate(['/login'])
    return false;
  }
};


//admin only routes
export const adminGuard: CanActivateFn = (route, state) => {
  if (inject(ApiService).isAdmin()) {
    return true;
  }else{
    inject(Router).navigate(['/login'])
    return false;
  }
};
