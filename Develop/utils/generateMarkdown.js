// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)]`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `(https://www.gnu.org/licenses/${license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
const twoFunctions = ([renderLicenseBadge(license), renderLicenseLink(license)])
return twoFunctions;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # Title and License Used
  * Title: 
  ${data.title}
  
  * License used: 
  ${renderLicenseSection(data.license)}

  # Description
  ${data.description}

  # Table of Contents
  * [Installation](#-Installation)
  * [The Usage of Application](#-The-Usage-of-Application)
  * [Test](#-Test)
  * [Contribution](#-Contribution)
  * [Contact information][#-Contact-information]

  # Installation
  *Instructions: ${data.install}
  
  # The Usage of Application
   ${data.use}
   
   # Test
   ${data.test}
   
   # Contribution
    ${data.contribution}
    
   # Contact Information 
    * Email to contact: ${data.email} 
    * GitHub user: ${data.user}`
  
  

}

module.exports = generateMarkdown;
