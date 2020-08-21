import { Component } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "child-app",
  templateUrl: "./child.component.html"
})
export class ChildComponent {
  home_add: FormGroup;

  constructor(private fb: FormBuilder) {
    this.home_add = new FormGroup({
      street: new FormControl(""),
      city: new FormControl(""),
      state: new FormControl(""),
      pin: new FormControl("")
    });
  }
}
