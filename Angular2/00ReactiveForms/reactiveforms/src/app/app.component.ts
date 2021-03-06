import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: FormGroup;
  items: FormArray;

  constructor(private fb: FormBuilder) {

  }

  // Using FormGroup and FormControl
  /*
  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
        email: new FormControl('', Validators.required),
        confirm: new FormControl('', Validators.required)
      })
    });
  }
  */

  //Using FormBuilder
  ngOnInit() {
    this.user = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      account: this.fb.group({
        email: ['', Validators.required],
        confirm: ['', Validators.required]
      }),
      items: this.fb.array([this.createItem()])
    });
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      description: '',
      price: ''
    });
  }

  addItem(): void {
    this.items = this.user.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  removeItem(i): void {
    console.log(i);
    this.items.removeAt(i);
  }

  onSubmit() {
    console.log(this.user.value, this.user.valid);
    console.log(this.user);
  }

}