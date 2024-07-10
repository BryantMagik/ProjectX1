import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoginView: boolean = true;
  olvidocontra: boolean = true;

  userRegisterObj: any = {
    "username": "",
    "Password": "",
    "EmailId":"",
    "lastname":"",
    "firstname":""
  }

  userLogin: any = {
    username: '',
    password: ''
  }

  loginObj: any = {
      "EmailId": "",
      "Password": ""
  }

  private apiUrl = 'https://tu-api-url.com/register';
  private recoveryUrl = 'https://tu-api-url.com/recover';

  http= inject(HttpClient);

  constructor(private router:Router){

  }

  logeado() {
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", this.loginObj).subscribe((res:any)=>{
      if(res.result){
        alert("Login Success");
        localStorage.setItem("jiroso",this.loginObj.user);
        this.router.navigateByUrl('dashboard');
      }else{
        alert("Check username or password");
      }
    })
  }

  onRegister() {
    const isLocalData = localStorage.getItem("jirov1");
    if (isLocalData != null) {
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.userRegisterObj);
      localStorage.setItem("jirov1", JSON.stringify(localArray));
    }else{
      const localArray = [];
      localArray.push(this.userRegisterObj);
      localStorage.setItem("jirov1", JSON.stringify(localArray));
    }
    alert("Registration Success");
  }

  validateRegistrationData(): boolean {
    const { username, Password, EmailId, firstname, lastname } = this.userRegisterObj;

    if (!username || !Password || !EmailId || !firstname || !lastname) {
      alert("Todos los campos son obligatorios.");
      return false;
    }

    // Verificar formato de email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(EmailId)) {
      alert("El formato del correo electrónico no es válido.");
      return false;
    }

    // Verificar longitud de la contraseña (por ejemplo, mínimo 6 caracteres)
    if (Password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return false;
    }

    return true;
  }

  registrar(){
    if (this.validateRegistrationData()) {
      this.http.post(this.apiUrl, this.userRegisterObj).subscribe(
        (res: any) => {
          alert("Registration Success");
          // Aquí puedes manejar la respuesta de la API, por ejemplo, mostrar un mensaje de éxito o redirigir al usuario
        },
        (error: any) => {
          alert("Error en el registro");
          console.error('Error en el registro', error);
          // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error al usuario
        }
      );
    }
  }

  recuperar() {
    if (!this.loginObj.EmailId || !this.loginObj.Password) {
      alert("Por favor, completa ambos campos.");
      return;
    }

    // Verificar formato de email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(this.loginObj.EmailId)) {
      alert("El formato del correo electrónico no es válido.");
      return;
    }

    this.http.post(this.recoveryUrl, this.loginObj).subscribe(
      (res: any) => {
        if (res.success) {
          alert("Password reset successful");
          // Aquí puedes manejar la respuesta de la API, por ejemplo, mostrar un mensaje de éxito o redirigir al usuario
        } else if (res.error && res.error === 'Email not found') {
          alert("El correo electrónico no existe.");
        } else {
          alert("Error al restablecer la contraseña");
        }
      },
      (error: any) => {
        alert("Error al restablecer la contraseña");
        console.error('Error al restablecer la contraseña', error);
        // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error al usuario
      }
    );
  }

  onLogin(){
    const isLocalData = localStorage.getItem("jirov1");
    if (isLocalData != null) {
      const users = JSON.parse(isLocalData);


      const isUserFound = users.find((m:any)=> m.username == this.userLogin.username && m.password == this.userLogin.password);
      if(isUserFound != undefined){
        this.router.navigateByUrl('dashboard');
      }else{
        alert("User name or password is Wrong")
      }
    }else{
      alert("No user Found")

    }
  }
}
