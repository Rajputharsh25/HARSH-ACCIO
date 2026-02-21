let employee = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
];

function PrintDeveloperbyMap() {
    employee.map(function(emp) {
        if (emp.profession === "developer") {
            console.log(emp);
        }
    });
}

function PrintDeveloperbyForEach() {
    employee.forEach(function(emp) {
        if (emp.profession === "developer") {
            console.log(emp);
        }
    });
}

function addData() {
    let newEmployee = {
        id: 4,
        name: "susan",
        age: "20",
        profession: "intern"
    };
    employee.push(newEmployee);
    console.log(employee);
}

function removeAdmin() {
    employee = employee.filter(function(emp) {
        return emp.profession !== "admin";
    });
    console.log(employee);
}

function ConcatinateArray() {
    let newEmployees = [
        { id: 5, name: "mike", age: "22", profession: "tester" },
        { id: 6, name: "emma", age: "21", profession: "designer" },
        { id: 7, name: "robert", age: "23", profession: "manager" }
    ];

    let combinedArray = employee.concat(newEmployees);
    console.log(combinedArray);
}

PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
ConcatinateArray();