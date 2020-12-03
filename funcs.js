function appendData(data) {
  //Function to add the data as array to the spreadsheet

  const ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");

  ws.appendRow([
    data.name,
    data.city,
    data.company,
    data.email,
    data.date,
    data.phoneNumber,
    data.comments,
  ]);

  return true;

}

function appendColumsn() {
  const ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("MySheet");
  var lastCol = sheet.getLastColumn();

  ws.insertColumns(lastCol+1, 3);
}

function getDropdownArray() {
  const ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Aux");

  return ws.getRange(2, 1, ws.getLastRow() - 1, 3).getValues();

}
