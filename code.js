function onOpen() {
  initMenu();
}

function initMenu() {
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu("Other");

  menu.addItem("Load Form", "loadForm");
  menu.addToUi();
}

function loadForm() {
  const template = HtmlService.createTemplateFromFile("userForm");
  const html = template.evaluate();
  html.setTitle("New Entry")

  SpreadsheetApp.getUi().showSidebar(html)
}