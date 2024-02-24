import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule } from '@angular/material/button';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatInputModule,MatSelectModule,MatCheckboxModule,MatRadioModule,ReactiveFormsModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'form-a';
  formbuild=inject(FormBuilder);
  studentForm:FormGroup=this.formbuild.group({
    name:[''],
    email:[''],
    age:[null],
    class:[null],
    address:[''],
    gender:[''],
    isActive:[true],
  })
  httpService=inject(HttpService);
  classes:any[]=[]
  ngOnInit(){
    this.httpService.getClasses().subscribe((result:any)=>{
this.classes=result;
console.log(this.classes);
    })
  }
  savestudent(){
    var formValues=this.studentForm.value;
    console.log("form saved",formValues);
  }
}
