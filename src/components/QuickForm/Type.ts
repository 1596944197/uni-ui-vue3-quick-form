
export type Rules = Partial<{
  required: boolean
  errorMessage: string
  range: AnyArray
  format: string
  minLength: number
  maxLength: number
  pattern: RegExp
  maximum: number
  minimum: number
  validateFunction: (rules: Rules, value: any, data: any, callback: Function) => any
  validateTrigger: 'submit' | 'bind'
}>[]


export type LabelPositionType = 'top' | 'left'

export type FormDataType = Fields[]

export type Fields = {
  type?: InputType;
  placeholder?: string;
  columns?: { text: string, value: any, disable?: boolean, children?: Fields['columns'] }[];
  disabled?: boolean;
  value?: any;
  key: string;
  label: string;
  required?: boolean;
  clearable?: boolean
  rules?: Rules
  [k: string]: any;
};


export interface UniFormApi {
  formData: AnyObj;
  rules: AnyObj;
  setValue: (key: string, val: any, force?: boolean) => void;
  validate: () => Promise<any>;
  validateField: (name: string) => any;
}

export type SelectFileCallbackType = {
  tempFiles: [{
    extname: string
    fileType: string
    image: {
      height: number
      location: string
      width: number
    }
    name: string
    size: number
    url: string
    uuid: string
  }]
}

export type CascadeCallback = { detail: { value: { text: string; value: any }[] } }

export type CheckboxCallback = { detail: { data: AnyObj[], value: any[] } }

export type DeleteFileCallback = { tempFilePath: string, tempFile: SelectFileCallbackType['tempFiles'][0] }


export type CallbackType<T> = (target: Fields, event: T) => void

type Render<T extends FormDataType, Arr extends AnyArray = []> =
  T extends [infer L extends Fields, ...infer Rest extends FormDataType] ?
  Render<Rest, [...a1: Arr, a2: RenderType<L>]> : Arr

export type InputType = 'text' | 'textarea' | 'datepicker' | 'cascade' | 'upload' | 'tags' | 'number' | 'dropDown' | 'checkbox' | 'radio';


type GetTypeByColumns<T, Single = false> = T extends { value: infer V, text: string } ? Single extends false ? V[] : V : any

type CheckboxType<T extends { columns?: unknown[] }> = {
  value?: GetTypeByColumns<T['columns']>,
  columns?: GetTypeByColumns<T['columns']>
}

type UploadType = {
  value?: ({
    name: string,
    extname: string,
    url: string,
  } & AnyObj)[]
}

type TextAreaType = {
  value?: string
}

type CascadeType<T extends { columns?: unknown[] }> = {
  value?: GetTypeByColumns<T['columns'], true>
  columns?: GetTypeByColumns<T['columns']>
}

type DatePickerType = {
  value?: string | string[]
}

type TagsType = {
  value?: string[]
}

type RenderType<T extends Fields, O = T & Fields> =
  {
    [P in keyof O]: O[P]
  } &
  T['type'] extends 'checkbox' ? CheckboxType<T> :
  T['type'] extends 'upload' ? UploadType :
  T['type'] extends 'textarea' | 'text' | undefined ? TextAreaType :
  T['type'] extends 'cascade' ? CascadeType<T> :
  T['type'] extends 'datepicker' ? DatePickerType :
  T['type'] extends 'radio' ? CascadeType<T> :
  T['type'] extends 'dropDown' ? CascadeType<T> :
  T['type'] extends 'tags' ? TagsType :
  {}