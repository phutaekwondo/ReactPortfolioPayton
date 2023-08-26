// import self from "../img/self.png"
import self from "../img/self.png"
import flappybird_mock from "../img/flappybird_mock.png"
import billiard_mock from "../img/billiard_mock.png"
import nohelmet_mock from "../img/nohelmet_mock.png"
import smash_mock from "../img/smash_mock.png"
import drstrange_mock from "../img/drstrange_mock.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(208, 123, 219), rgb(255, 166, 107)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Phú",
    lastName: "Macteo",
    initials: "macteo", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Game Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            // noodles emoji
            emoji: "🍜",
            text: 'fueled by delicious food'
        },
        {
            emoji: '🌎',
            text: 'based in the HCM, Vietnam'
        },
        {
            //laptop emoji
            emoji: '💻',
            text: "Working at Mecury Studio"
        },
        {
            emoji: "📧",
            text: "phulnv2001@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com/macteoP",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/fumacteo",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/phutaekwondo",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/phulnv/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hi! I'm Phú. I studied ComSci at UIT, and currently I'm a game developer. I enjoy drawing and coding a lot, and I believe that video-games are the best way to tell a story.",
    experiences:[
        {
            position: "Computer Science Student",
            company: "University of Information Technology",
            startDate: "09/2019",
            endDate: "07/2023",
            describe: "Studying Computer Science at UIT, I have learned a lot of things about programming, and I have also learned how to work in a team."
        },
        {
            position: "C++ Programmer - Intern",
            company: "Gameloft Vietnam",
            startDate: "08/2022",
            endDate: "02/2023",
            describe: "I worked as a C++ programmer intern at Gameloft Vietnam. I learned a lot about C++ and how to work in a professional environment."
        },
        {
            position: "Game Developer",
            company: "Mecury Studio",
            startDate: "09/2023",
            endDate: "Present",
            describe: "I'm currently working as a game developer at Mecury Studio. I'm working on game projects using Cocos2d and Unity."
        },
    ],
    skills:
        {
            proficientWith: ['C++','Unity', 'Machine Learning', "Git" ],
            exposedTo: ['NodeJS', 'Flutter', 'Blender']
        }
    ,
    hobbies: [
        {
            label: 'drawing',
            emoji: '🎨'
        },
        {
            label: 'pool',
            emoji: '🎱'
        },
        {
            label: 'football',
            emoji: '⚽'
        },
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Flappy Bird - C++",
            live: "https://youtu.be/5E6iAwEELds", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/phutaekwondo/flappybird-cpp", // this should be a link to the **repository** of the project, where the code is hosted.
            image: flappybird_mock 
        },
        {
            title: "Dr Strange Portal - Unity 3D",
            live: "https://youtu.be/HCGWXQIJSbM",
            source: "https://github.com/phutaekwondo/VFX_Lord",
            image: drstrange_mock
        },
        {
            title: "Smash the Capsule - Unity",
            playable: "https://macteo.itch.io/smash-the-capsule",
            source: "https://github.com/phutaekwondo/smash-2d-unity",
            image: smash_mock 
        },
        {
            title: "Billiard - Unity",
            live: "https://youtu.be/-G8uWSB-JOg",
            source: "https://github.com/phutaekwondo/billiard-unity",
            image: billiard_mock 
        },
        {
            title: "No Helmet Biker Detecting - Computer Vision",
            live: "https://youtu.be/X8SodgyuSpA",
            source: "https://github.com/phutaekwondo/Driving_motorbike_without_helmet_detection_Using_YOLOV5",
            image: nohelmet_mock
        },
    ]
}