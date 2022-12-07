"use strict";
function renderSheetData(data) {
  const result = data;
  for (const key in data) {
    const d = data[key];
    result[key] = {
      ...d,
      type: d.type || "text",
      placeholder: d.placeholder || `\u8BF7\u586B\u5199\u8868\u5355\u503C`,
      columns: d.columns || [],
      data: getData(d.type, d.data)
    };
  }
  return result;
  function getData(type, data2) {
    if (type === "cascade" || type === "upload" || type === "checkbox") {
      return data2 ? data2 : [];
    } else {
      return data2 ? data2 : "";
    }
  }
}
exports.renderSheetData = renderSheetData;
