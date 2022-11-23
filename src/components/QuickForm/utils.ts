import { FormDataType, InputType, ReturnTypeBySheet } from "./Type"

export function renderSheetData<T extends FormDataType>(data: T): ReturnTypeBySheet<T> {
  const result = data

  for (const key in data) {
    const d = data[key]
    result[key] = {
      ...d,
      type: d.type || 'text',
      placeholder: d.placeholder || `请填写表单值`,
      columns: d.columns || [],
      data: getData(d.type, d.data),
    }
  }
  return result


  function getData(type?: InputType, data?: any): string | AnyArray {
    if (type === 'cascade' || type === 'dropDown' || type === 'upload') {
      return data ? data : []
    } else {
      return data ? data : ''
    }
  }
}