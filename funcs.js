function appendData(data) {
  //Function to add the data as array to the spreadsheet

  const ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");

  ws.appendRow([
    data.name,
    data.company,
    data.email,
  ]);

  return true;

}

function getDropDownArray() {
  const ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Aux");

  return ws.getRange(2, 1, ws.getLastRow() - 1, 1).getValues();

}