import { FormDataType, InputType } from "./Type"

export function renderSheetData<T extends FormDataType>(data: T) {
  data.forEach(item => {
    item.data = getData(item.type, item.data)
    item.type = item.type || 'text'
  })

  return data
}

function getData(type?: InputType, data?: any): string | AnyArray | number {
  if (type === 'cascade' || type === 'upload' || type === 'checkbox') {
    return data ? data : []
  } else {
    return data ? data : ''
  }
}