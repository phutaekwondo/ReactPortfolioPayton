import self from "../img/self.png"
import flappybird_mock from "../img/flappybird_mock.png"
import billiard_mock from "../img/billiard_mock.png"
import nohelmet_mock from "../img/nohelmet_mock.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(149, 136, 168)","rgb(255, 124, 59)"];
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
            // note book emoji
            emoji: '📓',
            // emoji: "💼",
            text: "Student at UIT"
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
    bio: "Hi! I'm Phú. I studying CompSci at UIT, I enjoy drawing and coding alot, and I belive that video-game is the best way to tell a story.",
    skills:
        {
            proficientWith: ['C++','Unity/C#', 'Python/Machine Learning', "Photoshop" ],
            exposedTo: ['nodejs', 'SQL', 'blender']
        }
    ,
    hobbies: [
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'music',
            emoji: '🎵'
        },
        {
            label: 'drawing',
            emoji: '🎨'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'football',
            emoji: '⚽'
        },
        {
            label: 'billards',
            emoji: '🎱'
        },
        {
            label: 'coding',
            emoji: '💻'
        }
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
            title: "Billiard - Unity",
            source: "https://github.com/phutaekwondo/billiard-unity",
            image: billiard_mock 
        },
        {
            title: "No Helmet Biker Detecting - Computer Vision",
            live: "https://youtu.be/X8SodgyuSpA",
            source: "https://github.com/phutaekwondo/Driving_motorbike_without_helmet_detection_Using_YOLOV5",
            image: nohelmet_mock
        }
    ]
}