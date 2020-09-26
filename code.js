function onOpen() {
  initMenu();
}

function initMenu() {
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu("Other");

  menu.addItem("Criar Agendamento", "loadForm");
  menu.addToUi();
}

function loadForm() {
  const template = HtmlService.createTemplateFromFile("uform_bootstrap");
  const html = template.evaluate();
  html.setTitle("New Appointment")

  //SpreadsheetApp.getUi().showModelessDialog(html, "Novo Agendamento")
  SpreadsheetApp.getUi().showSidebar(html)
}