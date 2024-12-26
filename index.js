const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.top = e.clientY + (-15) + 'px';
    cursor.style.left = e.clientX + (-15) + 'px';
});

const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");
const opt5 = document.getElementById("opt5");

const content = document.getElementsByClassName('content')[0];
content.innerHTML = "PORTFOLIO";
content.style.fontSize = "70px";

// Urvish Patel
opt1.addEventListener('click', () => {
    content.innerHTML = `<div class="box">
                            <div class="photo"><img src="src/myImg2.jpg" alt="" srcset=""></div>
                            <div class="meta">
                                <div class="title">About Me</div>
                                <div class="minititle">Hello, my name is Urvish Patel. I am 19 years old BE IT student and have a hobby of creating amazing websites. I am a Developer with 3 years experience as a Student developer. I started my career in IT field since I was 16 years old.</div>
                            </div>
                        </div>`;


    const style = document.createElement('style');
    style.innerHTML = `
        .box{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

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
        } `;

    document.head.appendChild(style);
});


// Education
opt2.addEventListener('click', () => {
    content.innerHTML = `        <div class="box">
            <div class="edu">
                <div class="eduTitlemain">Education</div>

                <div class="course" id="studyTitle1">Bechalor of Engineering - IT</div>
                <div class="Colname" id="collageTit1">Shree Swaminarayan Institute of technology,<br>Bhat - Ahmedabad.</div>
                
                <div class="course" id="studyTitle2">Diploma in Engineering - IT</div>
                <div class="Colname" id="collageTit2">Government Polytechnic, Ghandhinagar.</div>
            </div>
            <div class="photo">
                <div class="cpic" id="photo1"><img src="src/edu1.png" alt=""></div>
                <div class="cpic" id="photo2"><img src="src/edu2.png" alt=""></div>
            </div>
        </div>`;

    const style = document.createElement('style');
    style.innerHTML = `
        .box{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        
        .edu{
            display: flex;
            flex-direction: column;
            width: 500px;
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
        .photo{
            display: flex;
            flex-direction: column;
            width: 400px;
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
        }`;

    document.head.appendChild(style);
});


// Expertise
opt3.addEventListener('click', () => {
    content.innerHTML = `<div class="box">
            <div class="secUp">
                <div class="pic" id="photo1"><img src="src/skills/skill1.png" alt="" srcset=""></div>
                <div class="skilltitle">Skills</div>
                <div class="pic" id="photo2"><img src="src/skills/skill3.png" alt="" srcset=""></div>
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
        </div>`;

    const style = document.createElement('style');
    style.innerHTML = `
        .box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
        `;

    document.head.appendChild(style);

});

// MyWorks
opt4.addEventListener('click', () => {
    content.innerHTML = `<div class="box">
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
                    <div class="plink"><a href="https://github.com/patelurvish0706/LearningJava">Source Code</a></div>
                </div>
            </div>
        </div>`;


    const style = document.createElement('style');
    style.innerHTML = `
        .box{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
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
        `;

    document.head.appendChild(style);

});


opt5.addEventListener('click', () => {
    content.innerHTML = `<div class="box">
            <div class="thnku">Thank You</div>
            <div class="links">
                <div class="insta"><a href="http://www.instagram.com/urvish_0706" target="_blank">www.instagram.com/urvish_0706</a></div>
                <div class="linked"><a href="https://www.linkedin.com/in/urvishpatel0706/" target="_blank">www.linkedin.com/in/urvishpatel0706/</a></div>
                <div class="git"><a href="https://github.com/patelurvish0706" target="_blank">github.com/patelurvish0706</a></div>
            </div>
            <div class="phone">
                <div class="call">+91 743-602-0138</div>
                <div class="mail">patelurvish0706@gmail.com</div>
            </div>
        </div>`;

    const style = document.createElement('style');
    style.innerHTML = `.box{
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
    flex-direction: c;
    gap: 25px;
    text-transform: none;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18px;
    margin: 20px 0px;
    font-weight: 600;
}

.links a{
    color: #ffffffd1;
}
.links a:hover{
    color: #ffffff;
    text-shadow: 0px 0px 10px #fff;
}`;

document.head.appendChild(style);

});