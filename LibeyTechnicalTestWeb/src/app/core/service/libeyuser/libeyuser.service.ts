import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable ,map} from "rxjs";
import { environment } from "../../../../environments/environment";
import { LibeyUser, LibeyUserRequest } from "src/app/entities/libeyuser";
import Swal from 'sweetalert2';

@Injectable({
	providedIn: "root",
})
export class LibeyUserService {
	constructor(private http: HttpClient) {}
	
	getAll(documentNumber: string): Observable<any> {
		const uri = `${environment.pathLibeyTechnicalTest}LibeyUser/${documentNumber}`;
		return this.http.get(uri);
	  }

	Find(documentNumber: string): Observable<LibeyUser> {
		const uri = `${environment.pathLibeyTechnicalTest}LibeyUser/${documentNumber}`;
		return this.http.get<LibeyUser>(uri);
	}

	create(libeyUser: LibeyUserRequest): Observable<boolean> {
		const uri = `${environment.pathLibeyTechnicalTest}LibeyUser/Create`;
		return this.http.post<boolean>(uri, libeyUser);
	}

	update(libeyUser: LibeyUserRequest): Observable<boolean> {
		const uri = `${environment.pathLibeyTechnicalTest}LibeyUser/Update`;
		return this.http.put<boolean>(uri, libeyUser);
	  }

	  delete(documentNumber: string): Observable<void> {
		const uri = `${environment.pathLibeyTechnicalTest}LibeyUser/${documentNumber}`;
		return this.http.delete<boolean>(uri).pipe(
		  map((resp: boolean) => {
			if (resp) {
			  Swal.fire({
				title: 'Excelente',
				text: 'Usuario eliminado correctamente',
				icon: 'success',
			  });
			}
		  })
		);
	  }
}