

const people = [
    {
    "id": "1",
    "username": "Jayson",
    "cohort": "Web 49",
    "password": "Bad!DONOTDO"
    },
    {
    "id": "2",
    "username": "Chance",
    "cohort": "Web 49",
    "password": "Bad!DONOTDO"
    },
    {
    "id": "3",
    "username": "Christopher",
    "cohort": "Web 49",
    "password": "Bad!DONOTDO"
    },
    {
    "id": "4",
    "username": "Marco",
    "cohort": "Web 49",
    "password": "Bad!DONOTDO"
    },
    {
    "id": "5",
    "username": "Angela",
    "cohort": "Web 49",
    "password": "Bad!DONOTDO"
    },
    {
    "id": "6",
    "username": "Jennifer",
    "cohort": "Web 49",
    "password": "Bad!DONOTDO"
    },
]

async function find() {
    return people
}

async function create({username, password}) {
    const newUser = {
        id: people.length + 1,
        username: username,
        cohort: "Web 49",
        password: password
    }
    console.log(username, password)
    people.push(newUser)
    return newUser
}

async function login({username, password}) {
    let valid = false

    people.forEach(person => {
        if(username === person.username && password === person.password) {
            valid = true
        }
    })

    if(valid) {
        return true
    }


}


module.exports = {
    find,
    create,
    login
}
