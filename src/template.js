// File to generate the HTML template.

// Loop to build the Cards for each item within each role. 
function generateHTML(employees) {
    // Initialize employee Types - to be built into a string in for loop;
    let managers = '';
    let engineers = '';
    let interns = '';
    // Loop through the employees Array, generate relevant DIVs based on role
    for (const index in employees) {
        const { name, id, email } = employees[index];
        switch (`${employees[index].getRole()}`) {
            // Managers
            case 'Manager':
                const officeNumber = employees[index].officeNumber;
                managers += `<div class="card col-2 p-0 m-2">
                <div class="card-body p-0 m-0 border shadow rounded">
                    <div class="header bg-primary text-white">
                        <!-- Manager Name, role -->
                        <h4 class="card-title p-2 m-0">${name}</h4>
                        <h5 class="card-title p-2 m-0">Manager</h5>
                    </div>
                    <!-- ID, email, officeNumber -->
                    <div class="container card-text">
                        <div class="border p-2 m-1"> ID: ${id} </div>
                        <div class="border p-2 m-1"> Email: <a href='mailto:${email}'>${email}</a> </div>
                        <div class="border p-2 m-1"> Office: ${officeNumber} </div>
                    </div>
                </div>
            </div>
            `
                break;

            // Engineers
            case 'Engineer':
                const gitHub = employees[index].github;
                engineers += `<div class="card col-2 p-0 m-2">
                <div class="card-body p-0 m-0 border shadow rounded">
                    <div class="header bg-primary text-white">
                        <!-- Name - Role -->
                        <h4 class="card-title p-2 m-0">${name}</h4>
                        <h5 class="card-title p-2 m-0">Engineer</h5>
                    </div>
                    <!-- id, email, github -->
                    <div class="container card-text">
                        <div class="border p-2 m-1"> ID: ${id} </div>
                        <div class="border p-2 m-1"> Email: <a href='mailto:${email}'>${email}</a> </div>
                        <div class="border p-2 m-1"> GitHub: <a href='https://github.com/${gitHub}'>${gitHub}</a> </div>
                    </div>
                </div>
            </div>
            `
                break;

            // Interns
            case 'Intern':
                const school = employees[index].school;
                interns += `<div class="card col-2 p-0 m-2">
                <div class="card-body p-0 m-0 border shadow rounded">
                    <div class="header bg-primary text-white">
                        <!-- Name - Role -->
                        <h4 class="card-title p-2 m-0">${name}</h4>
                        <h5 class="card-title p-2 m-0">Intern</h5>
                    </div>
                    <!-- id, email, school -->
                    <div class="container card-text">
                        <div class="border p-2 m-1"> ID: ${id} </div>
                        <div class="border p-2 m-1"> Email: <a href='mailto:${email}'>${email}</a></div>
                        <div class="border p-2 m-1"> School: ${school}</div>
                    </div>
                </div>
            </div>
            `
                break;
        };
    };

    // Generate the HTML temple
    const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    
    <body>
        <header class='header col-12 text-center bg-success text-light p-3'>
            <h1>Team Profile</h1>
        </header>
        
        <main>
            <!-- Manager Section -->
            <section class="row justify-content-center">
                ${managers}
            </section>
    
            <!-- Engineer Section -->
            <section class="row justify-content-center">
                ${engineers}
            </section>
    
            <!-- Interns Section -->
            <section class="row justify-content-center">
                ${interns}
            </section>
        </main>
    </body>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossorigin="anonymous">
    </script>
</html> `

    // Return the template
    return htmlTemplate;
};

module.exports = { generateHTML };





