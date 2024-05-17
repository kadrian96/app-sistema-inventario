import { CanActivateFn, CanMatchFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  if( localStorage.getItem('acceso') == 'true' ){
    return false
  }else{
    return true;
  }
};

export const registroGuard: CanMatchFn = (route, state) => {

  if( localStorage.getItem('acceso') == 'true' ){
    return false
  }else{
    return true;
  }

};
export const perfilGuard: CanActivateFn = (route, state) => {


  if( localStorage.getItem('acceso') == 'true' ){
    return true
  }else{
    return false;
  }

  
};
