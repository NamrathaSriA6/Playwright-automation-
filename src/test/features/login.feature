# Run Command
# npx cucumber-js --tags "@Smoke"

@Smoke
Feature: User Authentication tests

  Background:
    Given User navigates to the application

    @Login
    Scenario: Login should be success
      Given User click on the login link
      And User enter the username
      And User enter the password
      When User click on the login button
      Then User able to enter into the Book Cart page

    @Search_book
    Scenario: Search for the Book
    Given Heading to the Book Cart excel data
      Given User click on the login link
      And User enter the username
      And User enter the password
      When User click on the login button
      Then User able to enter into the Book Cart page
      Then User able to click on the Search button
      Then Enter Harry Potter to select the book name
      Then Select a book from the list
      Then Click on the book for details
      And Print the details of the book