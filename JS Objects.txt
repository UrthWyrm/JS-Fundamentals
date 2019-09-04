
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

// Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.

function allStudents(arr) {
    for (i=0; i < arr.length; i++) {
        console.log(arr[i].name);
        return("Name: " + arr[i].name + ", Cohort: " + arr[i].cohort);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

//  Write a function that accepts an object of users divided into employees and managers, 
//  and display the number of characters per employee/manager's name, as shown below, 
//  and logs the information to the console.

function empMan(obj) {
    for(let part in users) {
        console.log(part.toUpperCase());
        for (var i = 0; i < users[part].length; i++) {
            var charCount = users[part][i].last_name.length + users[part][i].first_name.length;
            console.log(i + 1 + " - " + users[part][i].last_name.toUpperCase() + ", " + users[part][i].first_name.toUpperCase() + " - " + charCount)
        }
    }
}

