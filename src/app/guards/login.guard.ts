import { CanActivateFn, CanMatchFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  if( localStorage.getItem('acceso') == 'true' ){
    return false
  }else{
    return true;
  }
};

export const adminGuard: CanMatchFn = (route, state) => {

  if( localStorage.getItem('admin') == 'true' ){
    return true
  }else{
    return false;
  }

};
export const perfilGuard: CanActivateFn = (route, state) => {


  if( localStorage.getItem('acceso') == 'true' ){
    return true
  }else{
    return false;
  }

  
};
