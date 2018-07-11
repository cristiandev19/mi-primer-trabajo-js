// usaremos la misma base de datos que en 33_callbacks2.js

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

// como en el anterior usaremos una funcion getEmploye
let getEmploye = (id) => {

    // las promesas tienen por defectos 2 callbacks (resolve, rejected)
    return new Promise((resolve, reject) => {
        let employeDB = employes.find(employe => employe.id === id);

        if (!employeDB) {
            reject(`No existe un empleado con el id ${ id }`)
        } else {
            // a resolve solo se le puede mandar un argumento si necesitamos mas usaremos objetos 
            resolve(employeDB);
        }
    });
}


let getSalary = (employe) => {

    return new Promise((resolve, reject) => {
        let salaryDB = salary.find(employeS => employeS.id === employe.id)

        if (!salaryDB) {
            reject(`no existe empleado con el id ${employe.name}`)
        } else {
            resolve({
                name: employe.name,
                salary: salaryDB.salary,
                id: employe.id,
            })
        }
    });
}



getEmploye(13).then(employe => {
    // console.log('empleado de DB', employe);

    getSalary(employe).then(resp => {
        console.log(`el salario de ${ resp.name } es de ${ resp.salary }`);
    }, (err) => {
        console.log(err);
    });

}, (err) => {
    console.log(err);
});