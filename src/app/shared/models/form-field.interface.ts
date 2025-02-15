import { FormControl } from "@angular/forms";

export interface IFormFieldInputs {
  label: string,
  name: string,
  type?: string,
  placeholder?: string,
  required?: boolean,
  control: FormControl
}