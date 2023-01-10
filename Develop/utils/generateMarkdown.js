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
joint([renderLicenseBadge(license), renderLicenseLink(license)])
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}, ${data.input}, ${data.install}, ${data.use}, ${data.description}, ${data.test}, ${data.contribution}, ${data.email}, ${data.user}, ${renderLicenseSection(data.license)}`
  
  

}

module.exports = generateMarkdown;
