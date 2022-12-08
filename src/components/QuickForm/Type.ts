
type Rules = Partial<{
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
}>[]

export type RuleType = {
  [key: string]: Rules
};

export type InputType = 'text' | 'textarea' | 'datepicker' | 'cascade' | 'upload' | 'tags' | 'number' | 'dropDown' | 'checkbox' | 'radio';


export type LabelPositionType = 'top' | 'left'

export type FormDataType = Fields[]

export type Fields = {
  type?: InputType;
  placeholder?: string;
  columns?: AnyObj[];
  disabled?: boolean;
  value?: unknown;
  key: string;
  label: string;
  required?: boolean;
  clearable?: boolean
  rules?: Rules
  [k: string]: any;
};

export type ReturnTypeBySheet<T extends any[], Arr extends Fields[] = []> =
  T extends [infer L extends Fields, ...infer Rest extends Fields[]] ?
  ReturnTypeBySheet<Rest, [...a1: Arr, a2: L]> : Arr


export interface UniFormApi {
  formData: AnyObj;
  rules: AnyObj;
  setValue: (val: any) => void;
  validate: () => Promise<any>;
  validateField: (name: string) => any;
}