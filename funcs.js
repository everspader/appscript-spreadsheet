function appendData(data) {
  //Function to add the data as array to the spreadsheet

  const ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");

  ws.appendRow([
    data.name,
    data.city,
    data.company,
    data.email,
    data.date
  ]);

  return true;

}

function getDropdownArray() {
  const ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Aux");

  return ws.getRange(2, 1, ws.getLastRow() - 1, 2).getValues();

}