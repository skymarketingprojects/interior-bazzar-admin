import type { TableRowType } from "../../types/global";

export const getTableHeaders = (tableData: TableRowType[]) => {
  const headers = Object.keys(tableData[0]);
  const idIndex = headers.indexOf("id");
  if (idIndex !== -1) {
    headers.splice(idIndex, 1);
    headers.unshift("id");
  }
  return headers;
};
