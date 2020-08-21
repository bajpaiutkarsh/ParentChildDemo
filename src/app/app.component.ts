import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ChildComponent } from "./ChildComponent/child.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ChildComponent)
  childObj: ChildComponent;
  emp_add: FormGroup;
  finalValue: any;
  errorMsg: string;
  constructor() {
    this.emp_add = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      contact: new FormControl("")
    });
  }
  ngAfterViewInit(): void {
    this.emp_add.addControl("homeadd", this.childObj.home_add);
  }

  onSubmit(value) {
    this.errorMsg = "";
    if (this.emp_add.valid) {
      console.log(this.emp_add.value);
      this.finalValue = JSON.stringify(this.emp_add.value);
    } else {
      this.errorMsg = "Put all required Values";
    }
  }
}
