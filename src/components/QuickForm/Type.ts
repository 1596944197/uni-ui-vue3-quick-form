
type Rules = {
  rules: Partial<{
    required: boolean
    errorMessage: string
    range: AnyArray
    format: string
    minLength: string
    maxLength: string
    pattern: RegExp
    maximum: number
    minimum: number
    validateFunction: (rules: Rules, value: any, data: any, callback: Function) => any
  }>[],
}

export type RuleType = {
  [key: string]: Rules
};

export type InputType = 'text' | 'textarea' | 'datepicker' | 'cascade' | 'upload' | 'tags' | 'number' | 'dropDown' | 'checkbox' | 'radio';


export type LabelPositionType = 'top' | 'left'

export type FormDataType = {
  [key: string]: Fields
}

export type Fields = {
  type?: InputType;
  placeholder?: string;
  columns?: AnyObj[];
  disabled?: boolean;
  data?: any;
  key: string;
  label: string;
  required?: boolean;
  clearable?: boolean
  [k: string]: any;
};

export type ReturnTypeBySheet<T> = {
  [P in keyof T]: Fields
}