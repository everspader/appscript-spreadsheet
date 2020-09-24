function initMenu() {
    // Creates the menu in the sheet that loads the form
    var ui = SpreadsheetApp.getUi();
    var menu = ui.createMenu("UserForm");

    menu.addItem("Start", "showUserForm");
    menu.addSeparator();
    menu.addToUi();
  }

  function showUserForm() {
    //Load the form as an HTML template as a dialog box
    var template = HtmlService.createTemplateFromFile("userForm");
    var html = template.evaluate();

    SpreadsheetApp.getUi().showModalDialog(html, "My Form")

  }

  function onOpen() {
    // Initialize the menu when opening the spreadsheet
    initMenu();
  }