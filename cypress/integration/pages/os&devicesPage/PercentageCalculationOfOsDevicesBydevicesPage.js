import {LocatorsOsDevicesByAndroid} from "../../Locators/OsDevicesLocators/LocatorsOsDevicesByAndroid"
const locatorsOsDevicesByAndroid = new LocatorsOsDevicesByAndroid();
// Class representing the page object for checking filters on the product page  ....
class PercentageCalculationOfOsDevicesBydevicesPage {
 SelectButtonDevices(){
    cy.get(locatorsOsDevicesByAndroid.DevicesButton).click()
 }
 CheckPercentageOfDevices(){
   // la méthode pour calculer la pourcentage des devices selon le nombre des utilisateurs 
 }
 CheckPercentageOfDevicesAndroid(){

 }
 CheckPercentageOfDevicesIOS(){
  
 }
}

// Exporting the CheckFiltersOfProductPage class as the default export
export default PercentageCalculationOfOsDevicesBydevicesPage;

