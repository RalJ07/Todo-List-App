import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent {

  @Output() public onTaskList:EventEmitter<string> = new EventEmitter();

  public myForm: FormGroup = this.fb.group({
    agregar: ['', [ Validators.required, Validators.minLength(3) ]]
  });
  

  constructor(private fb: FormBuilder) {}

  emitTask( tarea: string ) {
    
    if (this.myForm.get('agregar')?.invalid) return
    
    this.onTaskList.emit( tarea );
    this.myForm.get('agregar')?.reset();

  }
}
