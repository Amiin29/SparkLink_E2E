Feature: Navigation and Percentage Calculation on Os Android and Os IOS

  As a product manager,
  I want to navigate between the product dashboard and OS & Device pages,
  And I want to calculate the percentage of devices by Os version.

  Scenario: Apply filters on the product dashboard,
           navigate to devices dashboard,
           and check the percentage calculated of devices by Os version

    Given a product manager is logged in
    When the user selects a specific client
    Then the dashboard for the selected client is displayed
    And the user chooses filters and clicks on the Apply Button
    And the user selects "More insight"
    And check the dasboard of OS versions is displayed
    And check the percentage calculated of "OS Versions" on Os Android
    When the user selects the button IOS 
    Then the dashboard of Os IOS is displayed
    And check the percentage calculated of "OS Versions" on Os IOS