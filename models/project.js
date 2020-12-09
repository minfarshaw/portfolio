const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
    github: { type: String, required: false },  

});

const Project = mongoose.model('Project', projectSchema)

// Project.create ([
//     {
//         "name": "Tic Tac Toe",
//         "description": "A new take on the classic game.",

//     }
// ])

// Project.create ([
//     {
//         "name": "Space Battle",
//         "description": "A javascript game where you fight off a horde of alien spaceships."
//     }
// ])

// Project.create ([
//     {
//         "name": "100 Floors of Frights",
//         "description": "Based on the David Pumpkins SNL skit, this game will take you through a haunted hotel while you try to avoid being confused by David S. Pumpkins."
//     }
// ])

// Project.create ([
//     {
//     "name": "I Love the '90s Online Boutique",
//     "description": "Get nostalgic and find some of the best toys, clothes and snacks from the best decade of all time."
//     }
// ])

// Project.create ([
//     {
//         "name": "Pokedex",
//         "description": "You wanna be the very best? Like no one ever was? Well you better have a functioning Pokedex before you try to catch 'em all!"
//     }
// ])

// Project.create ([
//     {
//         "name": "Lord of The Rings Story Companion",
//         "description": "Read along as this companion app ushers you through the Shire, Rivendell and Mordor itself to destroy the One Ring."
//     }
// ])

// Project.create ([
//     {
//         "name": "Landscaper",
//         "description": "Become your own boss by starting a Landscaping business and make all your wildest dreams come true!"
//     }
// ])

// Project.create ([
//     {
//     "name": "Cordova, AK Chamber of Commerce",
//     "description": "Learn about travel, tourism, businesses, jobs and things to do in beautiful Cordova, Alaska."
//     }
// ])




module.exports = Project; 