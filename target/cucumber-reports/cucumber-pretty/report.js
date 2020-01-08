$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("customerLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Customer Login",
  "description": "",
  "id": "customer-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Customer Login",
  "description": "",
  "id": "customer-login;customer-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I Open banking website http://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click Customer Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I chose your name",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I chose name",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click button login",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 23
    }
  ],
  "location": "cucumberLoginTest.Open_banking_website(String)"
});
formatter.result({
  "duration": 9246677000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberLoginTest.clickCustomerLogin()"
});
formatter.result({
  "duration": 6281237600,
  "status": "passed"
});
formatter.match({
  "location": "cucumberLoginTest.chose_your_name()"
});
formatter.result({
  "duration": 6256727400,
  "status": "passed"
});
formatter.match({
  "location": "cucumberLoginTest.chose_name()"
});
formatter.result({
  "duration": 6267895000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberLoginTest.click_button()"
});
formatter.result({
  "duration": 6282309000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Customer Login",
  "description": "",
  "id": "customer-login;customer-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I Open banking website \u003cwebsite\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click Customer Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I chose your name",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I chose name",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click button login",
  "keyword": "When "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "customer-login;customer-login;",
  "rows": [
    {
      "cells": [
        "website"
      ],
      "line": 20,
      "id": "customer-login;customer-login;;1"
    },
    {
      "cells": [
        "http://www.way2automation.com/angularjs-protractor/banking/#/login"
      ],
      "line": 21,
      "id": "customer-login;customer-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Customer Login",
  "description": "",
  "id": "customer-login;customer-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I Open banking website http://www.way2automation.com/angularjs-protractor/banking/#/login",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click Customer Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I chose your name",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I chose name",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click button login",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 23
    }
  ],
  "location": "cucumberLoginTest.Open_banking_website(String)"
});
formatter.result({
  "duration": 6607510100,
  "status": "passed"
});
formatter.match({
  "location": "cucumberLoginTest.clickCustomerLogin()"
});
formatter.result({
  "duration": 6088049900,
  "status": "passed"
});
formatter.match({
  "location": "cucumberLoginTest.chose_your_name()"
});
formatter.result({
  "duration": 6245272400,
  "status": "passed"
});
formatter.match({
  "location": "cucumberLoginTest.chose_name()"
});
formatter.result({
  "duration": 6284768800,
  "status": "passed"
});
formatter.match({
  "location": "cucumberLoginTest.click_button()"
});
formatter.result({
  "duration": 6101054000,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Open banking page",
  "description": "",
  "id": "open-banking-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Open banking website",
  "description": "",
  "id": "open-banking-page;open-banking-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I Open website http://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 15
    }
  ],
  "location": "loginTest.Open_banking_website(String)"
});
formatter.result({
  "duration": 9667010300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Open banking website",
  "description": "",
  "id": "open-banking-page;open-banking-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I Open website \u003cwebsite\u003e",
  "keyword": "Given "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "open-banking-page;open-banking-website;",
  "rows": [
    {
      "cells": [
        "website"
      ],
      "line": 10,
      "id": "open-banking-page;open-banking-website;;1"
    },
    {
      "cells": [
        "http://www.way2automation.com/angularjs-protractor/banking/#/login"
      ],
      "line": 11,
      "id": "open-banking-page;open-banking-website;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Open banking website",
  "description": "",
  "id": "open-banking-page;open-banking-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I Open website http://www.way2automation.com/angularjs-protractor/banking/#/login",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 15
    }
  ],
  "location": "loginTest.Open_banking_website(String)"
});
formatter.result({
  "duration": 6065296600,
  "status": "passed"
});
});