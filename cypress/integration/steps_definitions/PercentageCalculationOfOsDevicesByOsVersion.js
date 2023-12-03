import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import config from "../../../config/config.js";
import loginPage from "../../Pages/loginPage/LoginPage.js";
import PercentageCalculationOfOsDevicesByOsVersionPage from '../../Pages/os&devicesPage/AndroidPage/PercentageCalculationOfOsDevicesByOsVersionPage.js';
import PercentageCalculationOfOsDevicesByDeviceLanguagesPage from "../../Pages/os&devicesPage/AndroidPage/PercentageCalculationOfOsDevicesByDeviceLanguagesPage.js"

const conf = new config();
const loginpage = new loginPage();
const percentageCalculationOfOsDevicesByOsVersionPage = new PercentageCalculationOfOsDevicesByOsVersionPage();
const percentageCalculationOfOsDevicesByDeviceLanguagesPage = new PercentageCalculationOfOsDevicesByDeviceLanguagesPage();


Given('a product manager is logged in', () => {
  // Cypress login command
  cy.visit(conf.GetURL());
  loginpage.login();
});

When('the user selects a specific client', () => {
  // Cypress command to select a client
  percentageCalculationOfOsDevicesByOsVersionPage.SelectClient();
});

Then('the dashboard for the selected client is displayed', () => {
  // Cypress command to assert the dashboard is displayed
  percentageCalculationOfOsDevicesByOsVersionPage.VerifyDashboard();
});

And('the user chooses filters and clicks on the Apply Button', () => {
  // Cypress commands for choosing filters and clicking Apply
  percentageCalculationOfOsDevicesByOsVersionPage.SelectFilter();
});

And('the user selects "More insight"', () => {
  // Cypress command to select "More insight"
  percentageCalculationOfOsDevicesByOsVersionPage.SelectMoreInsight();
});

And('checks the dashboard of OS versions is displayed', () => {
  // Cypress command to check the dashboard of OS versions is displayed
  percentageCalculationOfOsDevicesByDeviceLanguagesPage.VerifyDashboardOsDevicesAndroid();

});

And('checks the percentage calculated of "OS Versions" on Os Android', () => {
  // Cypress command to check percentage of "OS Versions" on Os Android
  percentageCalculationOfOsDevicesByOsVersionPage.CheckPercentageOfOSVersionAndroid();
});

When('the user selects the button for IOS', () => {
  // Cypress command to select IOS button
  percentageCalculationOfOsDevicesByDeviceLanguagesPage.SelectButtonIos();

});

Then('the dashboard of Os IOS is displayed', () => {
  // Cypress command to assert the Os IOS dashboard is displayed
  percentageCalculationOfOsDevicesByDeviceLanguagesPage.VerifyDashboardOsDevicesIOS();
});

And('checks the percentage calculated of "OS Versions" on Os IOS', () => {
  // Cypress command to check percentage of "OS Versions" on Os IOS
  percentageCalculationOfOsDevicesByOsVersionPage.CheckPercentageOfOSVersionIOS();
});
