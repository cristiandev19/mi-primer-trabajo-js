/*
estamos resolviendo el problema que hicimos con cadenas de promesas 
en el archivo 34_promesas.js
*/

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
    {
        id: 12,
        salary: 3000
    },
]

// transformandolo a funcion async
let getEmploye = async(id) => {
    let employeDB = employes.find(employe => employe.id === id);

    if (!employeDB) {
        throw new Error(`No existe un empleado con el id ${ id }`);
    } else {
        return employeDB;
    }
}



let getSalary = async(employe) => {
    let salaryDB = salary.find(employeS => employeS.id === employe.id)

    if (!salaryDB) {
        throw new Error(`no existe empleado con el id ${employe.name}`);
    } else {
        return {
            name: employe.name,
            salary: salaryDB.salary,
            id: employe.id,
        };
    }
}


// 
let getInformacion = async(id) => {

    let employe = await getEmploye(id);
    let respuesta = await getSalary(employe);
    // console.log(employe);
    // console.log(salary);
    return `${ respuesta.name } tiene un salario de ${ respuesta.salary }$`
}

getInformacion(12)
    .then(msj => console.log(msj))
    .catch(err => console.log(err));