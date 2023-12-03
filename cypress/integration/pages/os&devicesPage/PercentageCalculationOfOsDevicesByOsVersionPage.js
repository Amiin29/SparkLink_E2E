import { LocatorsDashboard } from "../../Locators/DashboardLocators/LocatorsDashboard.js";
import { data } from "../../Data/Global_data.js";

const locatorsDashboard = new LocatorsDashboard();

// Class representing the page object for checking filters on the product page  ....
class PercentageCalculationOfOsDevicesByOsVersionPage {
  // Method to select a specific client
  SelectClient() {
    cy.get(locatorsDashboard.ClientLocator).click();
    cy.get(locatorsDashboard.CardClient).click();
  }

  // Method to verify that the dashboard for the selected client is displayed
  VerifyDashboard() {
    cy.url().should("include", data.DashboardURL);
  }

  // Method to select a filter
  SelectFilter() {
    cy.get(locatorsDashboard.IdCombobox).click();
    cy.get(locatorsDashboard.IdItemOfCombobox).click();
    cy.get(locatorsDashboard.ApplyButton).click();
  }

  // Method to select "More insight"
  SelectMoreInsight() {
    cy.get(locatorsDashboard.MoreInsightButton).click();
  }

  // Method to check the percentage calculated in "OS Versions"
  CheckPercentageOfOSVersionAndroid() {
    //-----Percent of user by device models and OS Version=
    //100*number of user by device models and OS Version)/ The total number of user by device for all OS Version
  
  }
  CheckPercentageOfOSVersionIOS() {
    //-----Percent of user by device models and OS Version=
    //100*number of user by device models and OS Version)/ The total number of user by device for all OS Version
  
  }
}

// Exporting the CheckFiltersOfProductPage class as the default export
export default PercentageCalculationOfOsDevicesByOsVersionPage;