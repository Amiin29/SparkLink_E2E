import {LocatorsOsDevicesByAndroid} from "../../Locators/OsDevicesLocators/LocatorsOsDevicesByAndroid.js"
const locatorsOsDevicesByAndroid = new LocatorsOsDevicesByAndroid();
// Class representing the page object for checking filters on the product page  ....
class PercentageCalculationOfOsDevicesByDeviceLanguagesPage {
  SelectButtonDeviceLanguages(){
   cy.get(locatorsOsDevicesByAndroid.ButtonDeviceLanguages).click()
  }
  
  VerifyDashboardOsDevicesAndroid(){

  }

 CheckPercentageOfDevicesLanguagesAndroid(){
   // la méthode pour calculer la pourcentage des devices selon le nombre des utilisateurs 
  }

 SelectButtonIos(){

  }

 VerifyDashboardOsDevicesIOS(){

  }
 CheckPercentageOfDevicesLanguagesIOS(){

  }
}

// Exporting the CheckFiltersOfProductPage class as the default export
export default PercentageCalculationOfOsDevicesByDeviceLanguagesPage;

