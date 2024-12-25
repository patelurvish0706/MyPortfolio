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

    const box = document.querySelector('.box');
    box.style.display = 'flex';
    box.style.flexDirection = 'row';
    box.style.gap = '80px';

    const photoImg = document.querySelectorAll('.photo img');
    photoImg.forEach(img => {
        img.style.borderRadius = '100%';
        img.style.width = '350px';
        img.style.height = '350px';
    });

    const meta = document.querySelector('.meta');
    meta.style.width = '400px';
    meta.style.display = 'flex';
    meta.style.flexDirection = 'column';
    meta.style.gap = '40px';
    meta.style.justifyContent = 'center';

    const title = document.querySelectorAll('.meta .title');
    title.forEach(title => {
        title.style.fontSize = '30px';
    });

    const minititle = document.querySelectorAll('.meta .minititle');
    minititle.forEach(minititle => {
        minititle.style.fontSize = '20px';
        minititle.style.fontWeight = '200';
        minititle.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
        minititle.style.textTransform = 'capitalize';
    });

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

    const box = document.querySelector('.box');
    const edu = document.querySelectorAll('.edu');
    const eduTitlemain = document.querySelectorAll('.eduTitlemain');
    const course = document.querySelectorAll('.course');
    const Colname = document.querySelectorAll('.Colname');
    const photo = document.querySelectorAll('.photo');
    const cpicImg = document.querySelectorAll('.cpic img');
    const photo1 = document.getElementById('photo1');

    box.style.display = 'flex';
    box.style.flexDirection = 'row';
    box.style.justifyContent = 'center';
    box.style.alignItems = 'center';

    edu.forEach(element => {
        element.style.display = 'flex';
        element.style.flexDirection = 'column';
        element.style.width = '500px';
    });

    eduTitlemain.forEach(element => {
        element.style.fontSize = '30px';
    });

    course.forEach(element => {
        element.style.marginTop = '30px';
        element.style.fontSize = '20px';
        element.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
    });

    Colname.forEach(element => {
        element.style.fontSize = '20px';
        element.style.fontWeight = '200';
        element.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
        element.style.textTransform = 'capitalize';
    });

    photo.forEach(element => {
        element.style.display = 'flex';
        element.style.flexDirection = 'column';
        element.style.width = '400px';
    });

    cpicImg.forEach(element => {
        element.style.width = '280px';
        element.style.height = '180px';
        element.style.objectFit = 'cover';
        element.style.filter = 'grayscale(100%)';
        element.style.margin = '5px';
    });

    photo1.style.display = 'flex';
    photo1.style.justifyContent = 'end';
    
});

opt3.addEventListener('click', () => {
    content.innerHTML = "Experiance";
});

opt4.addEventListener('click', () => {
    content.innerHTML = "My Work";
});

opt5.addEventListener('click', () => {
    content.innerHTML = "Resume";
});