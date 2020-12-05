function appendData(data) {
  //Function to add the data as array to the spreadsheet

  const ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");

  ws.appendRow([
    data.name,
    data.itemCategory,
    data.itemName,
    data.itemType,
    data.quantity,
    data.dateEntered,
    data.dateReceived,
    data.comments,
    data.arrival
  ]);

  return true;

}

function getDropdownArray() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Aux");

  return ws.getRange(2, 1, ws.getLastRow() - 1, 3).getValues();

}

function getQtyInStock(category, itemName, itemType) {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Inventory");
  const data = ws.getRange(2, 1, ws.getLastRow() - 1, 4).getValues();

  const filteredData = data.filter(r => r[0] === category && r[1] === itemName && r[2] === itemType);
  return filteredData.length === 0 ? 0 : filteredData.reduce((subtotal, r) => subtotal + r[3], 0);
}