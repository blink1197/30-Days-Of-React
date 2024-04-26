/* 
1. Find the person who has many skills in the users object.
2. Count logged in users,count users having greater than equal to 50 points from the following object.
*/

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
};

let highestSkills = 0;
let userHighestSkills;
for (const user in users) {
    if (users[user]['skills'].length > highestSkills) {
        highestSkills = users[user]['skills'].length
        userHighestSkills = user;
    }
}

console.log(`User with most skills: ${userHighestSkills}`);


// 3. Find people who are MERN stack developer from the users object
let usersWithMern = [];
const mernStack = ["MongoDB", "Express", "React", "Node"];
for (const user in users) {
    if (mernStack.every(skill => users[user]['skills'].includes(skill))) {
        usersWithMern.push(user);
    }
}
console.log(`Users with MERN skills: ${usersWithMern.join(", ")}`);

// 4. Set your name in the users object without modifying the original users object
users.Cris = {
    email: 'cris@cris.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'React', 'PHP', 'SQL'],
    age: 27,
    isLoggedIn: false,
    points: 100
};
console.log(users.Cris);

// 5. Get all keys or properties of users object
const usersList = Object.keys(users);
console.log(usersList);

// 6. Get all the values of users object
const usersDetails = Object.values(users);
console.log(usersDetails);

// 7. Use the countries object to print a country name, capital, populations and languages.
// cannot find countries object with country details.