function login() {
  browser.maximizeWindow();
  browser.deleteAllCookies();
  browser.url('https://reg.usps.com/entreg/RegistrationAction_input');

}
module.exports = login();