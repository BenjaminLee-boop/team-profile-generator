const helpers = require('../utils/helpers');

function generateSubPropLi(role, subPropValue) {
  let li;
  switch (role) {
    case 'manager':
      li = `<li class="list-group-item">Office Number: ${subPropValue}</li>`;
      break;
    case 'engineer':
      subPropMessage = 'GitHub Username';
      li = `<li class="list-group-item">Github Username: <a href="https://github.com/${subPropValue}" class="text-decoration-none">${subPropValue}</a></li>`;
      break;
    case 'intern':
      li = `<li class="list-group-item">School: ${helpers.capitalize(
        subPropValue,
      )}</li>`;
      break;
    default:
      break;
  }

  return li;
}

function generateCard(employee) {
  const roleIcons = {
    manager: 'fa-user-tie',
    engineer: 'fa-glasses',
    intern: 'fa-user-graduate',
  };
  const subPropLi = generateSubPropLi(
    employee.getRole().toLowerCase(),
    employee[Object.keys(employee)[3]],
  );

  const cardTemplate = `
    <!-- Employee Card Component -->
    <div class="col mt-3" data-employee-id="${employee.getId()}">
      <div class="card text-white mb-3 border-0 rounded shadow mx-auto">
        <div class="card-header bg-primary border-0 py-3">
          <h2>${helpers.capitalize(employee.getName())}</h2>
          <h4 class="lead"><i class="fas ${
  roleIcons[employee.getRole().toLowerCase()]
}"></i> ${employee.getRole()}</h4>
        </div>
        <div class="card-body py-5 px-4 bg-light text-dark">
          <ul class="list-group list-group-flush rounded border">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">
              Email:
              <a href="mailto:${employee
    .getEmail()
    .toLowerCase()}" class="text-decoration-none">
              ${employee.getEmail().toLowerCase()}
              </a>
            </li>
            ${subPropLi}
          </ul>
        </div>
      </div>
    </div>
  `;

  return cardTemplate;
}

function generatePage(employees) {
  let employeeCards = '';
  for (const employee of employees) {
    employeeCards += `${generateCard(employee)}\n`;
  }

  const template = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          crossorigin="anonymous"
        />
        <script
          src="https://kit.fontawesome.com/8426ae9c5d.js"
          crossorigin="anonymous"
        ></script>
        <title>Team Profile Generator</title>
      </head>
      <body>
        <main class="container py-5">
          <div
            class="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center"
          >
            ${employeeCards}
          </div>
        </main>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
  `;

  return template;
}

module.exports = generatePage;
