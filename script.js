var resultView = new Vue({
    el: '#app',
    data: {
        home: {
          Info: "is a software developer seeking employment in the gaming industry. She is an alumnus of The University of Michigan, with a BS in Computer Science and a Minor in Music.",
          Img: "Url('MarchingPic.jpeg')"
        },
        resume: {
          Name: "Elise Reynolds",
          Title: "Software Developer",
          Address: "2556 Tricia Drive",
          Number: "517.416.3278",
          Email: "elreyno@umich.edu",
          Skills: "Proficient in C++, C#, C, Python, HTML, JavaScript. Extensive experience working with Unity, macOS and iOS operating systems, Microsoft Windows, Word, Excel, and Powerpoint, video and editing software, and console systems. Skills in computer security fields, such as how to secure against hacking attempts, phishing scams, etc. Large project experience being a part of a team to produce polished and professional works. Experience in leading groups of up to thirty people, managing tasks and dividing workload among workers. Skills in time management and resource allocation as well as design and aesthetics lead experience on large scale projects. Additional experience in creating 3D assets for Unity, audio mixing, UI development, and database management.",
          Experience: {
            job1: {
              Company: "CAEN",
              JobTitle: "Lab Inspector",
              Dates: "May 2019 - Present",
              Location: "Ann Arbor, MI",
              Description: "As a lab inspector I was in charge of finding problems with and maintaining hundreds of computers for the University of Michigan, training new Lab Inspectors, repairing PCs, setting up lab spaces,  and upholding a high standard of professionalism in University computing spaces."
            },
            job2: {
              Company: "Cobra Laser Tag",
              JobTitle: " System Operator, Instructor, Map Designer",
              Dates: "January 2012 - August 2016",
              Location: "Jackson, MI",
              Description: "As a Game System Operator/ Play Instructor I had the exciting experience of working hands on with a live program that monitored player information. I also had the privilege of interacting with players and teaching large groups of people how to use the system and strategies of how to play.  As a Map Designer I obtained first hand experience in designing levels that would provide interesting and dynamic gameplay for players of all ages."
            }
            job3: {
              Company: "YETi CGI",
              JobTitle: " Independent Contractor, Programmer",
              Dates: "June 2020 - Present",
              Location: "Ann Arbor, MI (Remote)",
              Description: "At YETi CGI I have the opportunity to flex my programming muscles and work on projects on the bleeding edge of collaborative technology. Working with fully collaborative web based tools such as AuxPlayer and casual OS I get to design and showcase projects for clients and work directly with them to provide a user experience that is perfect for their needs. YETi CGI has provided me with invaluable experience in the professional workplace and customer service skills that I am excited to bring with me."
            }
          },
          Education: {
              Undergraduate: {
                Name: "University of Michigan",
                Time: "August 2016 - May 2020",
                Location: "Ann Arbor, MI",
                Description: "I completed a BS in Computer Science as well as a Minor in Music with a GPA of 3.417. I gained many valuable skills during my time at the University of Michigan as well as invaluable friendships, mentors, and  experience."
              },
              HighSchool: {
                Name: "Jackson High School",
                Time: "September 2012 - May 2016",
                Location: "Jackson, MI",
                Description: "Completed my GDE at Jackson High School with a GPA of 3.963"
              }
            },
          ProjectExperience: {
            Project1: {
              Company: "Space Invaders and Mario Run",
              SubTitle: "Arduino Programming Project",
              Date: "December 2016",
              Location: "Ann Arbor, MI",
              Description: "I was a part of a team that created a fully functioning game of Space Invaders using an Arduino Pixel board and the C++ programming language. Using the same system I also coded a game based on the characters and world of the Mario Brothers franchise, in which the player partook in an infinite running game. This project was later presented in a competitive format alongside my peers and professors."
            },
            Project2: {
              Company: "Snow Town Throwdown: Ann Arbor Edition",
              SubTitle: "Unity Rapid Game Creation",
              Date: "April  2020",
              Location: "Ann Arbor, MI",
              Description: "As a part of a three person group I completed a final project complete with planning, prototyping, and presenting the final product. The actual game was created in two days and is a simple but polished snowball fight simulator that you can find on my portfolio.  I also contributed all of the 2D assets for the game."
            },
            Project3: {
              Company: "A Thousand Words",
              SubTitle: "A Thousand Words",
              Date: "February 2020 - April 2020",
              Location: "Ann Arbor, MI",
              Description: "Our four person group under the name Elker Studios developed in Unity and marketed a polished and professional Virtual Reality game. As aesthetics lead and one of the main programmers on the game I designed all of the levels in the game, as well as being the final voice on all design decisions and a creator of several 3D assets in the game. You can find the trailer and the downloadable version of the game in my portfolio"
            },
            Project4: {
              Company: "The Legend of Zelda and Tinny's Adventure",
              SubTitle: "Unity Rapid Game Creation",
              Date: "January  2020 - February 2020",
              Location: "Ann Arbor, MI",
              Description: "At the beginning of the semester teams of two were tasked with recreating a level from  the classic NES game 'The Legend of Zelda' as well as adding a brand new mechanic to the game. My authentic recreation can be found in the link on my portfolio. After that project we had a solo project in which the only guidelines were to create a novel game. I created a 2D reverse tower defense game, providing assets and code, which can be found at the link for 'Tinny’s Adventure' on my portfolio."
            }
            Project5: {
              Company: "The Crimes of Leslie",
              SubTitle: "Computer Security Skills Showcase",
              Date: "March  2019 - April 2019",
              Location: "Ann Arbor, MI",
              Description: "As a final project for EECS 388 at the University of Michigan groups of two students were tasked with using a virtual hard drive from a fake employee of a fake company to determine if said employee had been selling company secrets. The prompt given was 'use everything you learned in this class.' Utilizing a huge variety of computer security knowledge such as SQL injection, buffer overflow, return oriented programming, cipher breaking (block chain, ECB, CBC padding oracles), cross-site scripting, cross-site request forgery, steganography, and much more my partner and I were able to gather and document enough evidence to prove the fake employee's guilt. "
            }
            Project6: {
              Company: "Personal Website",
              SubTitle: "This Site!",
              Date: "June 2020 - Present",
              Location: "Ann Arbor, MI",
              Description: "I created the site you are currently on by using Vue and Bootstrap. While it is a work in progress and could always be improved it is a good example of what just a few hours can do when working with advanced APIs and the web. "
            }
          },
        },
        portfolio: {
          Project1: {
            Name: "The Legend of Zelda (Unity Remaster)",
            Link: "http://www-personal.umich.edu/~elreyno/p1_gold_elker_elreyno_ppw/",
            Description: "The Legend of Zelda (Unity Remaster) is a reimplementation of the first dungeon from the original NES game 'The Legend of Zelda'. It includes a new secret level and darkness mechanic activated by pressing 0 on the keyboard. Use Z as an A button, X as a B button, E to switch secondary weapon, Arrow Keys to move, and 1 to activate god mode."
          },
          Project2: {
            Name: "Tinny's Adventure (Rapid Prototype)",
            Link: "http://www-personal.umich.edu/~elreyno/p2_gold_elreyno/",
            Description: "Tinny's Adventure is a 2D reverse tower defense game where the player must build and upgrade turrets to defend their hover train. The player must also be sure to monitor the health of the train and repair it when they can using the coins they earn from killing enemies. Use arrow keys to move."
          },
          Project3: {
            Name: "Snow Town Throwdown: Ann Arbor Edition (Rapid Prototype)",
            Link: "http://www-personal.umich.edu/~elreyno/493FinalWebBuild/",
            Description: "Snow Town Throwdown: Ann Arbor Edition is a 3rd person 2D snowball fight simulator taking place on the famous Michigan Diag. Players must eliminate the OSU students while ducking and dodging their projectiles. Use arrow keys to move, mouse to aim and shoot."
          },
          Project4: {
            Name: "A Thousand Words",
            Link: "https://elker-studios.itch.io/a-thousand-words/",
            Description: "A Thousand Words is a single player Virtual Reality game in which the player must use their paintbrush to defeat the dark ink blots and paint the world around them. Enjoy three beautiful and thought provoking worlds that you can explore once youre finished painting them into existence."
          }
        },
        aboutMe: {
          interest1: {
            Name: "Music/ Marching Band",
            Description: "I have been playing the trumpet since fifth grade in various ensembles, including High School Marching band in which I was the trumpet section leader, in charge of leading 25 other peers. Most recently I was a member of the Michigan Marching Band, an experience I thoroughly enjoyed even though it was a huge time and energy commitment and that I would do again if given the choice. I was also a member of multiple ensembles on campus and participated in a concert every April."
          },
          interest2: {
            Name: "Art",
            Description: "I have been an artist all my life, from crayons to full flatscreen sized paintings and everything in between. I enjoy all types of art and have recently been exploring forms of digital art and digital sculpting."

          },
          interest3: {
            Name: "Gaming",
            Description: "I am an avid consumer of games. Enjoying mostly online competitive games such as Call of Duty and Apex Legends. However I do dabble in singleplayer games and am a huge fan of the most recent Tomb Raider games, Star Wars: Jedi Fallen Order, and Animal Crossing. I play Xbox at the moment but plan on expanding to a gaming PC later on."

          },
          interest4: {
            Name: "Literature",
            Description: "I love to read. Relaxing in a comfy space with a good book is my idea of a great night. I love old fashioned literature like the original Sherlock Holmes books, and newer fiction, fantasy, and science fiction."

          },
          interest5: {
            Name: "Film",
            Description: "Film is one of my favorite subjects, I love having deep conversations about shots, color theory, and anything else film related. Movie soundtracks are one of my passions and I will always be down to listen to something I have not heard before. Some of my favorite films are Star Wars: Rogue One, Baby Driver, The Prestige, Inception, and Captain America: The Winter Soldier."

          },
        }
    },
    mounted() {

    }, 
    methods: {
          
          
        
    },
  })