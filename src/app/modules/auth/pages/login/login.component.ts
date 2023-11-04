import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '@auth/helpers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formlogin!: FormGroup;
  submitted = false;
constructor(private formBuilder: FormBuilder){}
ngOnInit(): void {
  this.formlogin = this.formBuilder.group(
    {
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      confirmpassword: ['', [Validators.required]]
    }, {
      validators: MustMatch('password', 'confirmpassword')
  }
  )
}

get f() {return this.formlogin.controls; }

	onSubmit() {
		this.submitted = true;

		if(this.formlogin.invalid) {
			return;
		}

		alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formlogin.value, null, 4));
	}

}
