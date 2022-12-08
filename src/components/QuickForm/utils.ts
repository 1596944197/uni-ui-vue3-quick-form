import { FormDataType, InputType } from "./Type"

export function renderSheetData<T extends FormDataType>(data: T) {
  data.forEach(item => {
    item.data = getData(item.type, item.data)
    item.type = item.type || 'text'
  })
  return data
}

function getData(type?: InputType, data?: any) {
  if (type === 'cascade' || type === 'upload' || type === 'checkbox' || type === 'tags') {
    return data instanceof Array ? data : []
  }
  if (data instanceof String) return data || ''
  if (data instanceof Number) return data || 0
}