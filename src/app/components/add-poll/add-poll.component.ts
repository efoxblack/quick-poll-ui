import { Component, OnInit } from '@angular/core';
import { QuickPollService } from '../../services/quick-poll.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-poll',
  templateUrl: './add-poll.component.html',
  styleUrls: ['./add-poll.component.css']
})
export class AddPollComponent implements OnInit {

  dynamicForm: FormGroup;
  submitted = false;
  validMessage: string = "";

  constructor(private fb: FormBuilder, private quickPollService: QuickPollService) { }

  ngOnInit(): void {
    this.dynamicForm = this.fb.group({
      question: ['', Validators.required],
      numberOfOptions: [''],
      options: new FormArray([])
    });
  }

  get f () {
    return this.dynamicForm.controls;
  }

  get o () {
    return this.f.options as FormArray;
  }

  onChangeOptions(e) {
    const numberOfOptions = e.target.value || 0;
    if (this.o.length < numberOfOptions) {
      for (let i = this.o.length; i < numberOfOptions; i++) {
        this.o.push(this.fb.group({
          option: ['']
        }));
      }
    } else {
      for (let i = this.o.length; i >= numberOfOptions; i--) {
        this.o.removeAt(i);
      }
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.dynamicForm.valid) {  
      this.validMessage = "Poll submitted successfully!";    
      this.quickPollService.createPoll(this.dynamicForm.value).subscribe(
        data => {
          this.dynamicForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      );
    }
    // Stop if the form is invalid
    if (this.dynamicForm.invalid) {
      return;
    }
  }

  onReset() {
    this.submitted = false;
    this.dynamicForm.reset();
    this.o.clear();
  }

  onClear() {
    this.submitted = false;
    this.o.reset();
  }

}
