const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
    link: { type: String, required: false },
    comment: { type: String, required: false },  

});

const Project = mongoose.model('Project', projectSchema)

// Project.create ([
//     {
//         "name": "Tic Tac Toe",
//         "description": "A new take on the classic game.",
//         "image": "/assets/images/tic-tac-toe.png",
//         "link": "https://git.generalassemb.ly/arolson87/homework-w02d05.git",
//     }
// ])

// Project.create ([
//     {
//        "name": "Space Battle",
//        "description": "A javascript game where you fight off a horde of alien spaceships.",
//        "image": "/assets/images/space-battle.jpg",
//        "link": "https://git.generalassemb.ly/arolson87/homework-w03d02.git",
//     }
// ])

// Project.create ([
//     {
//         "name": "100 Floors of Frights",
//         "description": "Based on the David Pumpkins SNL skit, this game will take you through a haunted hotel while you try to avoid being confused by David S. Pumpkins.",
//         "image": "/assets/images/100-floors.png",    
//         "link": "https://git.generalassemb.ly/arolson87/project-1.git" 
// }
// ])

// Project.create ([
//     {
//     "name": "I Love the '90s Online Boutique",
//     "description": "Get nostalgic and find some of the best toys, clothes and snacks from the best decade of all time.",
//     "image": "/assets/images/90s-store.jpg",
//     "link": "https://git.generalassemb.ly/arolson87/homework-w06d05.git",
//     }
// ])

// Project.create ([
//     {
//     "name": "Intergalactic Bounty Hunter",
//     "description": "Explore the ins and outs of bounty hunting in space!",
//     "image": "/assets/images/mandalorian.jpg",
//     "link": "https://git.generalassemb.ly/arolson87/lab-intergalactic-bounty-hunter.git",
//     }
// ])


// Project.create ([
//     {
//         "name": "Pokedex",
//         "description": "You wanna be the very best? Like no one ever was? Well you better have a functioning Pokedex before you try to catch 'em all!",
//         "image": "/assets/images/pokedex.png", 
//         "link": "https://git.generalassemb.ly/arolson87/homework-w06d03.git"
//     }
// ])

// Project.create ([
//     {
//         "name": "Lord of The Rings Story Companion",
//         "description": "Read along as this companion app ushers you through the Shire, Rivendell and Mordor itself to destroy the One Ring.",
//         "image": "/assets/images/lotr.jpg",
//         "link": "https://git.generalassemb.ly/arolson87/homework-w03d05.git",
//     }
// ])

// Project.create ([
//     {
//         "name": "Landscaper",
//         "description": "Become your own boss by starting a Landscaping business and make all your wildest dreams come true!",
//         "image": "/assets/images/landscaper.jpg", 
//         "link": "https://git.generalassemb.ly/arolson87/homework-w01d05.git" 
//     }
// ])

// Project.create ([
//     {
//     "name": "Cordova, AK Chamber of Commerce",
//     "description": "Learn about travel, tourism, businesses, jobs and things to do in beautiful Cordova, Alaska.",
//     "image": "/assets/images/cordova.png",
//     "link": "https://cordovachamber.com"
// }
// ])




module.exports = Project; 