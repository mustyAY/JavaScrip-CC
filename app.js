// let users = [
//     {
//         username: "Musty",
//         email: "mustywyt@gamil.com",
//         password: "musty123",
//         subscriptionStatus: "VIP",
//         discordId: "Mustapha AY",
//         lessonsCompleted: [0, 1, 2]
//     },
//     {
//         username: "Mitri",
//         email: "mitri@frontend.com",
//         password: "mitri123",
//         subscriptionStatus: "VIP",
//         discordId: "Mitri#0001",
//         lessonsCompleted: [0, 1]
//     },
//     {
//         username: "Jabir",
//         email: "jabir@frontend.com",
//         password: "jabiri123",
//         subscriptionStatus: "VIP",
//         discordId: "Jabit#0001",
//         lessonsCompleted: [0, 1, 2, 3]
//     }
// ]

// function login(email, password) {
//     for (i=0; i<users.length; i++){
//         if (users[i].email === email){
//             console.log(users[i])
//             if (users[i].password === password){
//                 console.log('log the user in - the details are correct')
//             }
//             else{
//                 console.log('password is incorrect try again')
//             }
//             return
//         }
//     }
//     console.log('could not find an email that matches')
// }
// login('mustywyt@gamil.com', 'musty123')

/** Quiz: create a register function that accepts:
 * -username
 * -email
 * -password
 * -subscriptionStatus
 * -discordId
 * -lessonsCompleted
 * 
 * Inside the register function:
 * 1. Create a user object
 * 2. Push this user object onto the 'users array'
 */  

// function register(user){
//     users.push(user)
// }

// register({
//     username:'Mimi',
//     email: 'mimi@gamil.com',
//     password: 'mimi123',
//     subscriptionStatus: 'VIP',
//     discordId: 'Mimi#0001',
//     lessonsCompleted: [0, 1, 2, 3, 4]
// })

function toggleDarkMode(){
    document.querySelector('body').classList.toggle("dark-theme")
}


