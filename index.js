// ------------------New Cursor on Display-------------------

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.top = e.clientY + (-15) + 'px';
    cursor.style.left = e.clientX + (-15) + 'px';
});

// ------------------Selecting each Options--------------------

const content = document.getElementById('content');
const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const opt3 = document.getElementById('opt3');
const opt4 = document.getElementById('opt4');
const opt5 = document.getElementById('opt5');

// -----------------Object contain element and HTML----------------

const contents = [
    {
        element: opt1,
        html:
            `<div class="box">
                            <div class="photo"><img src="src/myImg2.jpg" alt="" srcset=""></div>
                            <div class="meta">
                                <div class="title">About Me</div>
                                <div class="minititle">Hello, my name is Urvish Patel. BE IT student, hobby of creating amazing websites. I am a Developer with 3 years of experience as a Student. always ready to code and making Fronted Projects.</div>
                            </div>
                        </div>`,
        style:
            `.box{
            flex-direction: row;
        }

        .photo{
            width:auto;
        }
        
        .photo img{
            border-radius: 100%;
            width: 305px;
            height: 310px
        }

        .meta{
            margin-left: 60px;
            width: 400px;
            display: flex;
            flex-direction: column;
            gap: 40px;
            justify-content: center;
        }

        .meta .title{
            font-size: 30px;
        }

        .meta .minititle{
            font-size: 20px;
            font-weight: 200;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            text-transform: capitalize;
        } 
        
        #opt1{
            color: #fff;
            text-shadow: 0px 0px 25px #fff;
        }

        #opt2,#opt3,#opt4,#opt5{
            color: #ffffffbb;
            text-shadow: none;
        }
        `
    },
    {
        element: opt2,
        html:
            `<div class="box" id="boxEdu">
            <div class="edu">
                <div class="eduTitlemain">Education</div>

                <div class="course" id="studyTitle1">Bechalor of Engineering - IT</div>
                <div class="Colname" id="collageTit1">Shree Swaminarayan Institute of technology,<br>Bhat - Ahmedabad.</div>
            
                <div class="course" id="studyTitle2">Diploma in Engineering - IT</div>
                <div class="Colname" id="collageTit2">Government Polytechnic, Ghandhinagar.</div>
            </div>

            <div class="photoin2">
                <div class="cpic" id="photo1"><img src="src/edu1.png" alt=""></div>
                <div class="cpic" id="photo2"><img src="src/edu2.png" alt=""></div>
            </div>
        </div>`,
        style:
            `
        #boxEdu{
            width:80%;
        }
        
        .box{ 
            flex-direction: row; 
        }
        
        .edu{
            display: flex;
            flex-direction: column;
            width:40%;

        }
        
        .eduTitlemain{
            font-size: 30px;
        }
        
        .course{
            margin-top:30px ;
            font-size: 20px;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        
        .Colname{
            font-size: 20px;
            font-weight: 200;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            text-transform: capitalize;
        }

        .photoin2{
            display: flex;
            flex-direction: column;
            width:40%;
        }
        
        .cpic img{
            width: 280px;
            height: 180px;
            object-fit: cover;
            filter: grayscale(100%);
            border-radius: 10px;
            margin: 5px;
        }
        
        #photo1{
            display: flex;
            justify-content: end;
        }
            
        #opt2{
            color: #fff;
            text-shadow: 0px 0px 25px #fff;
        }

        #opt1,#opt3,#opt4,#opt5{
            color: #ffffffbb;
            text-shadow: none;
        }`
    },
    {
        element: opt3,
        html:
            `<div class="box">
            <div class="secUp">
                <div class="pic" id="photo1">
                    <img src="src/skills/skill1.png" class="expPic" alt="" srcset="">
                </div>
                <div class="skilltitle">Skills</div>
                <div class="pic" id="photo2">
                    <img src="src/skills/skill3.png" class="expPic" alt="" srcset="">
                </div>
            </div>
            <div class="secdwn">
                <div class="skillset" id="front">
                    <div class="facTitle">Frontend Skills</div>
                    <ul>
                        <li>Html</li>
                        <li>css</li>
                        <li>Javascipt</li>
                    </ul>
                </div>

                <div class="skillset" id="back">
                    <div class="facTitle">Backend Skills</div>
                    <ul>
                        <li>Java</li>
                        <li>Node.js</li>
                        <li>React.js</li>
                    </ul>
                </div>

                <div class="skillset" id="db">
                    <div class="facTitle">Databases</div>
                    <ul>
                        <li>MySql</li>
                        <li>Mongo.DB</li>
                    </ul>
                </div>

                <div class="skillset" id="verc">
                    <div class="facTitle">Version control</div>
                    <ul>
                        <li>Git/Github</li>
                    </ul>
                </div>
            </div>
        </div>`,
        style: `
        .box { 
          flex-direction: column; 
        }

        .secUp {
          margin-top: 50px;
          width: auto;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .skilltitle {
          font-size: 30px;
          text-transform: uppercase;
          justify-content: left;
          margin: 80px;
        }

        #photo1 img {
          justify-content: right;
        }

        .secUp .pic img {
          border-radius: 10px;
          width: 250px;
          filter: grayscale(100%);
        }

        .secdwn {
          width: auto;
          display: flex;
          flex-direction: row;
          white-space: nowrap;
          justify-content: space-between;
          margin-top: 30px;
          gap: 20px;
        }

        .skillset {
          margin: 10px;
        }

        .skillset ul li {
          color: #fffa;
          font-size: 20px;
          font-weight: 200;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          text-transform: capitalize;
        }

        .skillset ul li:hover{
          color: #fff;
        }

        .skillset ul {
          margin: 10px;
        }

        .facTitle {
          text-align: center;
          font-size: 18px;
          margin: 0;
        }

        #opt3{
            color: #fff;
            text-shadow: 0px 0px 25px #fff;
        }

        #opt1,#opt2,#opt4,#opt5{
            color: #ffffffbb;
            text-shadow: none;
        }
        `
    },
    {
        element: opt4,
        html:
            `<div class="box projetBox" id="projetBox">
            <div class="myWorktitle">My Works</div>
            <div class="props">
                <div class="project">
                   <div class="ptitle">Patient Information Management System</div>
                   <div class="pcode">Frontend (Only)</div>
                   <div class="pstatus">Live🔴</div>
                   <div class="plink"><a href="https://patelurvish0706.github.io/PIMS/" target="_blank">Show Project</a></div>
                </div>

                <div class="project">
                    <div class="ptitle">Login Signup PHP code</div>
                    <div class="pcode">Backend (Only)</div>
                    <div class="pstatus">offline🌐</div>
                    <div class="plink"><a href="https://patelurvish0706.github.io/Signup-login/" target="_blank">Show Project</a></div>
                </div>
                
                <div class="project">
                    <div class="ptitle">My portfolio</div>
                    <div class="pcode">Fronted</div>
                    <div class="pstatus">You're Watching✨</div>
                    <div class="plink"><a href="https://github.com/patelurvish0706/MyPortfolio" target="_blank">Source Code</a></div>
                </div>

                <div class="project">
                    <div class="ptitle">Learning DSA</div>
                    <div class="pcode">Interview prep.</div>
                    <div class="pstatus">avilable✅</div>
                    <div class="plink"><a href="https://github.com/patelurvish0706/LearningJava" target="_blank">Source Code</a></div>
                </div>
            </div>
        </div>`,
        style: `
        .box{ 
            flex-direction: column; 
        }

        .myWorktitle{
            font-size: 30px;
            margin:30px 0px 40px 0px;
        }

        .props{
            width: 950px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .project{
            color: #fff;
            background: #fff2;
            width: 200px;
            height: 220px;
            border-radius: 10px;
            padding: 10px;
        }

        .project:hover{
            color: #000000a0;
            background: #fff;
            /* box-shadow: 0px 0px 25px #ffffff7d; */
        }

        .ptitle{
            font-size: 25px;
            font-weight: 800;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            margin-bottom: 15px;
        }

        .pcode,.pstatus,.plink{
            text-transform: capitalize; 
            font-size: 12px;
            font-weight: 200;
        }

        .plink{
            font-size: 16px;
            margin-top: 15px;
        }

        .plink a{
            color: rgb(255, 255, 255);
            text-shadow: 0px 0px 8px #000000;
        }

        .plink a:hover{
            color: rgba(0, 0, 0, 0.832);
            text-decoration: underline;
        }
        
        #opt2,#opt3,#opt1,#opt5{
            color: #ffffffbb;
            text-shadow: none;
        }
        
        #opt4{
            color: #fff;
            text-shadow: 0px 0px 25px #fff;
        }
        `
    },
    {
        element: opt5,
        html: `<div class="box">
        <div class="thnku">Thank You</div>
        <div class="links">
            <div class="insta"><a href="http://www.instagram.com/urvish_0706" target="_blank">www.instagram.com/urvish_0706</a></div>
            <div class="linked"><a href="https://www.linkedin.com/in/urvishpatel0706/" target="_blank">www.linkedin.com/in/urvishpatel0706/</a></div>
            <div class="git"><a href="https://github.com/patelurvish0706" target="_blank">github.com/patelurvish0706</a></div>
        </div>
        <div class="phone">
            <a class="call" href="tel:7436020138">+91 743-602-0138</a>
            <a class="mail" href="mailto:patelurvish0706@gmail.com">patelurvish0706@gmail.com</a>
        </div>
    </div>`,
        style: `.box{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .thnku{
            font-size: 30px;
            margin:30px 0px 20px 0px;
        }

        .links,.phone{
            display: flex;
            flex-direction: row;
            gap: 25px;
            text-transform: none;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 18px;
            margin: 20px 0px;
            font-weight: 600;
        }

        .links a ,.phone a{
            color: #ffffffd1;
        }

        .phone a{
            text-decoration: none;
            padding: 5px 10px;
            background-color: #0003;
            border-radius: 10px;
        }

        .links a:hover{
            color: #ffffff;
            text-shadow: 0px 0px 10px #fff;
        }

        #opt5{
            color: #fff;
            text-shadow: 0px 0px 25px #fff;
        }

        #opt2,#opt3,#opt4,#opt1{
            color: #ffffffbb;
            text-shadow: none;
        }`
    }
];

// ---------------Display each section in sequence---------------------

let currentContentIndex = 0;

function displayContent(index) {
    content.innerHTML = contents[index].html;
    const style = document.createElement('style');
    style.innerHTML = contents[index].style;
    document.head.appendChild(style);
}

displayContent(currentContentIndex); // Display initial content

window.addEventListener('wheel', (event) => {
    const delta = Math.sign(event.deltaY); // -1 for scrolling up, 1 for scrolling down

    currentContentIndex = (currentContentIndex + delta + contents.length) % contents.length; // Cycle through the content
    displayContent(currentContentIndex);

});

// -------------------Loading sections by clicking on Options-------------------

opt1.addEventListener('click', () => displayContent(0));
opt2.addEventListener('click', () => displayContent(1));
opt3.addEventListener('click', () => displayContent(2));
opt4.addEventListener('click', () => displayContent(3));
opt5.addEventListener('click', () => displayContent(4));

// --------------------SHOW PORTFOLIO TEXT ON LOAD --------------------------------

content.innerHTML = `
    <div id="portfoliotext">Portfolio</div>
`;

window.onload = function () {
    setTimeout(function () {
        displayContent(0);
    }, 1300); // 1000ms = 1 second
};

// ----------------Handling NavOptions on resizing and Default window size------------------

let allOptions = document.querySelectorAll(".option");
let visibleMenu = document.getElementById("visibleMenu");

function resized() {
    if (window.innerWidth <= 726) {

        allOptions.forEach(el => {
            el.style.display = 'none';
        });

        visibleMenu.style.display = "flex"

    } else {

        visibleMenu.style.display = "none"

        allOptions.forEach(el => {
            el.style.display = 'flex';
        });
    }
}
resized();

window.addEventListener('resize', () => {
    resized();
})

// -------------------For Slideing LEFT RIGHT----------------------------------------

let currentIndex = 0;
const totalContent = 4;

let leftMove = document.getElementById("leftMove");
let rightMove = document.getElementById("rightMove");

// Functions for slide to left and right
function goleft() {
    if (currentIndex > 0) {
        currentIndex--;
        displayContent(currentIndex);
    }
    updateButtons();
}

function goright() {
    if (currentIndex < totalContent) {
        currentIndex++;
        displayContent(currentIndex);
    }
    updateButtons();
}

// Slide left and right Using Button on Display
leftMove.addEventListener("click", function () {
    goleft();
});
rightMove.addEventListener("click", function () {
    goright();
});

// Slide left and right using LEFTKEY and RIGHTKEY
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        goleft();
    }
});
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        goright();
    }
});

// Fade Button on Last index
function updateButtons() {
    leftMove.style.opacity = currentIndex === 0 ? "0.5" : "1";
    leftMove.disabled = currentIndex === 0;

    rightMove.style.opacity = currentIndex === totalContent ? "0.5" : "1";
    rightMove.disabled = currentIndex === totalContent;
}
updateButtons();