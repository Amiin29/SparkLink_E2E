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
  cy.visit("https://www.google.com/");

});