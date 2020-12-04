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
  ]);

  return true;

}

function getDropdownArray() {
  const ws = SpreadsheetApp.getActiveSpreadsheet();
  const ss = ws.getSheetByName("Aux");

  return ss.getRange(2, 1, ws.getLastRow() - 1, 3).getValues();

}
