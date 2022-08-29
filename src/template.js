// Creating team profile
const generateTeam = team => {

    // Creating html for Manager 
    const generateManager = manager => {
        return `
        <div class="col-md-6 col-sm-12 col-12 col-lg-4">
        <div class="card shadow-lg mb-5 bg-white rounded">
            <div class="card-header bg-primary">
                <h4 class="text-white text-center">${manager.getName()}</h4>
                <h4 class="text-white text-center"><i class="fas fa-mug-hot"></i></i> ${manager.getRole()}</h4>
            </div>
            <div class="card-body bg-light">
                <ul class="list-unstyled">
                    <li class="card-body border border-secondary">ID: ${manager.getId()}</li>
                    <li class="card-body border-left border-right border-secondary">Email: <a href="${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="card-body border border-secondary">Office number: ${manager.getOfficeNumber()}</li>
                </u>
            </div>
        </div>
      </div>
        `;
    };

    // Creating html for Senior Engineer
    const generateSeniorEngineer = seniorEngineer => {
        return `
        <div class="col-md-6 col-sm-12 col-12 col-lg-4">
        <div class="card shadow-lg mb-5 bg-white rounded">
            <div class="card-header bg-primary">
                <h4 class="text-white text-center">${seniorEngineer.getName()}</h4>
                <h4 class="text-white text-center"><i class="fas fa-coffee"></i></i> ${seniorEngineer.getRole()}</h4>
            </div>
            <div class="card-body bg-light">
                <ul class="list-unstyled">
                    <li class="card-body border border-secondary">ID: ${seniorEngineer.getId()}</li>
                    <li class="card-body border-left border-right border-secondary">Email: <a href="${seniorEngineer.getEmail()}">${seniorEngineer.getEmail()}</a></li>
                    <li class="card-body border border-secondary">GitHub: <a href="https://github.com/${seniorEngineer.getGithub()}" target="_blank" rel="noopener noreferrer">${seniorEngineer.getGithub()}</a></li>
                </u>
            </div>
        </div>
      </div>
        `;
    };

    // Creating html for engineers
    const generateEngineer = Engineer => {
        return `
        <div class="col-md-6 col-sm-12 col-12 col-lg-4">
        <div class="card shadow-lg mb-5 bg-white rounded">
            <div class="card-header bg-primary">
                <h4 class="text-white text-center">${Engineer.getName()}</h4>
                <h4 class="text-white text-center"><i class="fas fa-glasses"></i></i> ${Engineer.getRole()}</h4>
            </div>
            <div class="card-body bg-light">
                <ul class="list-unstyled">
                    <li class="card-body border border-secondary">ID: ${Engineer.getId()}</li>
                    <li class="card-body border-left border-right border-secondary">Email: <a href="${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
                    <li class="card-body border border-secondary">GitHub: <a href="https://github.com/${Engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${Engineer.getGithub()}</a></li>
                </u>
            </div>
        </div>
      </div>
        `;
    };

    // Creating html for intern
    const generateIntern = intern => {
        return `
        <div class="col-md-6 col-sm-12 col-12 col-lg-4">
        <div class="card shadow-lg mb-5 bg-white rounded">
            <div class="card-header bg-primary">
                <h4 class="text-white text-center">${intern.getName()}</h4>
                <h4 class="text-white text-center"><i class="fas fa-user-graduate"></i></i> ${intern.getRole()}</h4>
            </div>
            <div class="card-body bg-light">
                <ul class="list-unstyled">
                    <li class="card-body border border-secondary">ID: ${intern.getId()}</li>
                    <li class="card-body border-left border-right border-secondary">Email: <a href="${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="card-body border border-secondary">School: ${intern.getSchool()}</li>
                </u>
            </div>
        </div>
      </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Senior Engineer")
        .map(seniorEngineer => generateSeniorEngineer(seniorEngineer))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// Export function to generate the html page
module.exports = team => {

return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
<div class="header">
<div class="jumbotron bg-danger">
   <h1 class="display-4 text-white text-center">My Team</h1>
</div>
</div>
<div class="container-body container-fluid">
   <div class="row">
    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};