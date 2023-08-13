import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError } from "rxjs";
import { environment } from "src/environments/environment";
import { ErrorService } from "./core/error/error.service";


const {apiUrl} = environment;

@Injectable()
export class AppInterseptor implements HttpInterceptor {
    
    constructor ( private router : Router, private errorService: ErrorService){}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
        ): Observable<HttpEvent<any>> {
        if (req.url.startsWith('/api')) {
                req = req.clone({
                url: req.url.replace('/api', apiUrl),
                withCredentials: false,
            });
            
       }
        return next.handle(req).pipe(
            catchError((error) => {
                if(error.status !== 400){
                    this.router.navigate(['/auth/login'])
                } else {
                    this.errorService.setError(error)
                    this.router.navigate(['/error'])
                }
               
                return [error];
            })
        )
    }
}
export const appInterseptorProvider: Provider = {
    multi: true,
    useClass: AppInterseptor,
    provide: HTTP_INTERCEPTORS,
}