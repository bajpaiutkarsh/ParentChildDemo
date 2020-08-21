import { Component, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ChildComponent } from "./ChildComponent/child.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild(ChildComponent)
  childObj: ChildComponent;
  emp_add = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    contact: new FormControl(""),
    add: this.childObj.home_add
  });

  onSubmit(value) {
    console.log(this.emp_add.value);
  }
}
