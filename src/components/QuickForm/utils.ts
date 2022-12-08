import { FormDataType, InputType } from "./Type"

export function renderSheetData<T extends FormDataType>(data: T) {
  data.forEach(item => {
    item.value = getData(item.type, item.value)
    item.type = item.type || 'text'
  })
  return data
}

function getData(type?: InputType, value?: any) {
  if (type === 'cascade' || type === 'upload' || type === 'checkbox' || type === 'tags') return value instanceof Array ? value : []
  if (value instanceof String) return value || ''
  if (value instanceof Number) return value || 0
}