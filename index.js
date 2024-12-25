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
});
                    
opt2.addEventListener('click', () => {
    content.innerHTML = "My Work";
});

opt3.addEventListener('click', () => {
    content.innerHTML = "Experiance";
});

opt4.addEventListener('click', () => {
    content.innerHTML = "Education";
});

opt5.addEventListener('click', () => {
    content.innerHTML = "Resume";
});