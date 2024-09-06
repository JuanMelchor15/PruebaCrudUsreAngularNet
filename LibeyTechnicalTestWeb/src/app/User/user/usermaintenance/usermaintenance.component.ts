import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LibeyUserService } from 'src/app/core/service/libeyuser/libeyuser.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-usermaintenance',
  templateUrl: './usermaintenance.component.html',
  styleUrls: ['./usermaintenance.component.css']
})
export class UsermaintenanceComponent implements OnInit {
  
  formUser!: FormGroup;
  errMsg: string = '';
  paramDocumentNumber: string | null = '';

  initForm(): void {
    this.formUser = new FormGroup({
      documentTypeId: new FormControl('', Validators.required),
      documentNumber: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      fathersLastName: new FormControl('', Validators.required),
      mothersLastName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      ubigeoCode: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  constructor(
    private router: Router,
    private libeyUserService: LibeyUserService,
    private routeActivated: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.initForm();
    this.paramDocumentNumber =
      this.routeActivated.snapshot.paramMap.get('documentNumber');
    if (this.paramDocumentNumber) {
      this.libeyUserService.Find(this.paramDocumentNumber).subscribe((res) => {
        this.formUser.patchValue({
          documentTypeId: res.documentTypeId,
          documentNumber: res.documentNumber,
          name: res.name,
          fathersLastName: res.fathersLastName,
          mothersLastName: res.mothersLastName,
          address: res.address,
          ubigeoCode: res.ubigeoCode,
          phone: res.phone,
          email: res.email,
          password: res.password,
        });
      });
    }
  }

  Back() {
    this.router.navigateByUrl('/user');
  }

  userCreate() {
    if (this.formUser.valid) {
      this.libeyUserService.create(this.formUser.value).subscribe((res) => {
        if (res) {
          Swal.fire('Registrando Usuario', 'Usuario registrado', 'success');
          this.router.navigateByUrl('/user');
        }
      });
    } else {
      this.errMsg = 'Ingrese los campos obligatorios';
    }
  }

  userUpdate() {
    if (this.formUser.valid) {
      this.libeyUserService.update(this.formUser.value).subscribe((res) => {
        if (res) {
          Swal.fire(
            'Excelente',
            'Usuario actualizado correctamente',
            'success'
          );
          this.router.navigateByUrl('/user');
        }
      });
    } else {
      this.errMsg = 'Todos los campos son obligatorios';
    }
  }
}