# password-generator-challenge-03
## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
### descrption:

Genereated password by randomly choosing from array of number lettters and special charcter and place them into a new array according to user criteria.

### How to use

click generate password button then answeer the series of prompt to creat password criteria. (password generated will be set to lower case characters until user decide to add other character types.)
#### preview 
 web app preview: ![alt text](<Assets/image/challenge-03 app.PNG>)
