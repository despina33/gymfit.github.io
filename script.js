const heading = "Please Meet Our Team";
let i = 0;

const typing = () => {
    if(i < heading.length) {
        document.querySelector(".heading").innerHTML += heading.charAt(i);
        i++;

        setTimeout(typing, 150)
    }
}

typing();

let sections = document.getElementsByClassName('about-us');
  sections.style.backgroundColor = '#000';