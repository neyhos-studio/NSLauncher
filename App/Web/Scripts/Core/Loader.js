const electron = require("electron");
const appRoot = process.cwd();
const component = require(appRoot + '/App/Controllers/ComponentsLoader/ComponentsLoader').default;
const page = require(appRoot + '/App/Controllers/PagesLoader/PagesLoader').default;
const ipcEventsRepo = require(appRoot + '/App/Repositories/IpcEventsRepo/IpcEventsRepo').default;

const SessionUser = require(appRoot + '/App/Entities/SessionUser/SessionUser').default;

const events = new ipcEventsRepo();

// Load components : Window Manager
component.LoadWindowManager();

let sessionUser = events.GetSession();