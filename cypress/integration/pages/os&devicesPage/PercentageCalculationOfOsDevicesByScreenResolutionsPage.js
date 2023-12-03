import {LocatorsOsDevicesByAndroid} from "../../Locators/OsDevicesLocators/LocatorsOsDevicesByAndroid.js"
const locatorsOsDevicesByAndroid = new LocatorsOsDevicesByAndroid();
// Class representing the page object for checking filters on the product page  ....
class PercentageCalculationOfOsDevicesByScreenResolutionsPage {
 SelectButtonScreenResolutions(){
    cy.get(locatorsOsDevicesByAndroid.ButtonScreenResolutions).click()
 }
 CheckPercentageOfScreenResolutionAndroid(){
   // la méthode pour calculer la pourcentage des devices selon le nombre des utilisateurs 
 }
 CheckPercentageOfScreenResolutionIOS(){
  // la méthode pour calculer la pourcentage des devices selon le nombre des utilisateurs 
}
}

// Exporting the CheckFiltersOfProductPage class as the default export
export default PercentageCalculationOfOsDevicesByScreenResolutionsPage;

