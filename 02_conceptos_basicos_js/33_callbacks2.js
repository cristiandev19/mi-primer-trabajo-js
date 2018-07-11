// PROBLEMAS COMUNES CON LOS CALLBACKS

let employes = [{
        id: 10,
        name: 'cristian'
    },
    {
        id: 11,
        name: 'diego'
    },
    {
        id: 12,
        name: 'maribel'
    },
]

let salary = [{
        id: 10,
        salary: 1000
    },
    {
        id: 11,
        salary: 2000
    },
]

let getEmploye = (id, callback) => {

    let employeDB = employes.find(employe => employe.id === id);

    if (!employeDB) {
        callback(`No existe un empleado con el id ${id}`)
    } else {
        callback(null, employeDB);
    }
}

let getSalary = (employe, callback) => {

    let salaryDB = salary.find(employeS => employeS.id === employe.id)

    if (!salaryDB) {
        callback(`no existe empleado con el id ${employe.name}`)
    } else {
        callback(null, {
            name: employe.name,
            salary: salaryDB.salary,
            id: employe.id,
        })

    }
}


getEmploye(11, (err, empleado) => {
    if (err) {
        // si existe un error se detiene la ejecucion
        return console.log(err);
    }
    // console.log(empleado);
    getSalary(empleado, (err, resp) => {

        if (err) {
            return console.log(err);
        }
        console.log(`el salario de ${ resp.name } con id ${ resp.id } es ${ resp.salary }`);
    })
});