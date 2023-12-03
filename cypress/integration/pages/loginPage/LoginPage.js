import { LocatorsDashboard } from '../../Locators/DashboardLocators/LocatorsDashboard.js'
import { data } from '../../Data/Global_data.js';
const locatorsDashboard = new LocatorsDashboard();

class LoginPage {
    login() {
        // Typing the username from the data module into the username field
        cy.get(locatorsDashboard.IdUsername).type(data.usernameData);
        
        // Typing the password from the data module into the password field
        cy.get(locatorsDashboard.Idpassword).type(data.passwordData);
        
        // Clicking the sign-in button
        cy.get(locatorsDashboard.IdsignInButton).click();
    }
}

export default LoginPage;