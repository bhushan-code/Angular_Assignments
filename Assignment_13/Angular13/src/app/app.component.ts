import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [FormBuilder, Validators]
})
export class AppComponent 
{
  public fbobj = new FormBuilder();
  
  LogInForm = this.fbobj.group(
    {
      firstname : ['',[Validators.required,Validators.pattern('^[A-Za-z]+$')]],
      lastname : ['',[Validators.required,Validators.pattern('^[A-Za-z]+$')]],
      email : ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z]{2,}$')]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      city : ['',[Validators.required,Validators.minLength(4)]],
      pincode: ['', [Validators.pattern('^[0-9]{6}$')]],
      state :  [''],
      comment :  ['',[Validators.minLength(30)]]
        
    })
}
