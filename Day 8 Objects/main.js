// ########### Givens ###########
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// ########### Exercises: Level 1 ###########

// ########### Exercises: Level 2 ###########

//  1
const findUser = () => {
  let skilledPerson = null;
  let maxSkills = 0;

  for (const userName in users) {
    const user = users[userName];
    if (user.skills.length > maxSkills) {
      maxSkills = user.skills.length;
      skilledPerson = userName;
    }
  }

  console.log(skilledPerson);
};
findUser();

//  2
const logedinUsers = () => {
  let logedinCouter = 0;

  for(userName in users){
    const user = users[userName]
    if(user.isLoggedIn){
      logedinCouter += 1;
    }
  }
  console.log(logedinCouter)
}
logedinUsers()

const passedUsers = () => {
  let Couter = 0;

  for(userName in users){
    const user = users[userName]
    if(user.points >= 50){
      Couter += 1;
    }
  }
  console.log(Couter)
}
passedUsers()

//  3


//  4
const setNewName = () => {
  newUser = {
    kiya: {
      email: "kiyakebe799@gmail.com",
      skills: ["HTML", "CSS", "Javascript", "React", "Django"],
      age: 21,
      isLoggedIn: true,
      points: 90
    }
  }
  const copyUser = Object.assign(newUser, users);
  console.log(copyUser);
};

setNewName()


//  5
const getAllKeys = () => {
  const allKeys = Object.keys(users)
  console.log(allKeys)
}
getAllKeys()

//  6
const getAllValues = () => {
  const allValues = Object.values(users)
  console.log(allValues)
}
getAllValues()

//  7
const countryStatus = () => {
  for (country of countries) {
    console.log(country.name, country.capital, country.population, country.languages);
  }
};
countryStatus();

