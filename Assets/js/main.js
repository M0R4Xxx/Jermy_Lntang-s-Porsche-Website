/*==SHOW MENU==*/
const navMenu = document.getElementById('nav-menu');
      navToogle = document.getElementById('nav-toogle')
      navClose = document.getElementById('nav-close')

/*Menu Show*/
if(navToogle) {
    navToogle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

/*Menu Hidden*/
if(navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

/*==REMOVE MENU MOBILE==*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==SWIPER HOME==*/
const swiperHome = new Swiper('.home__swiper', {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: (index, className) => {
          return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + "</span>";
        },
    },

    autoplay: {
        delay: 10000,
    }

});

/*==CHANGE BACKGROUND HEADER==*/
const bgHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*==SHOW SCROLL UP==*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==SCROLL SECTION ACTIVE LINK==*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

function save() {
    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment');
    
    if (nameInput.value.trim() === '' || commentInput.value.trim() === '') {
        const alertBox = document.createElement('div');
        alertBox.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                padding: 20px;
                background: white;
                border: 1px solid red;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0,0,0,0.5);
                z-index: 1000;
                text-align: center;
                font-family: Arial, sans-serif;
                width: 80%;
                max-width: 550px;
            ">
                <p style="font-size: 24px; font-weight: bold; margin: 0 0 20px 0;">
                    ALERT!
                </p>
                <p style="font-size: 18px; margin: 0;">
                    Please Fill in Both Name & Comment Fields Before Submitting!
                </p>
                <button onclick="this.parentElement.remove()" style="
                    margin-top: 20px;
                    padding: 8px 20px;
                    font-size: 16px;
                    background: #ff4444;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                ">
                OK
                </button>
            </div>
        `;
        document.body.appendChild(alertBox);
        return false;
    }

    
    // Success alert box
    const successBox = document.createElement('div');
    successBox.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            background: white;
            border: 1px solid #4CAF50;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
            z-index: 1000;
            text-align: center;
            font-family: Arial, sans-serif;
            width: 80%;
            max-width: 550px;
        ">
            <p style="font-size: 24px; font-weight: bold; margin: 0 0 20px 0; color: #4CAF50;">
                SUCCESS!
            </p>
            <p style="font-size: 18px; margin: 0;">
                Your Comment has been Submitted Successfully!... <br> 
                Thank You for Your Comment!
            </p>
            <button onclick="this.parentElement.remove()" style="
                margin-top: 20px;
                padding: 8px 20px;
                font-size: 16px;
                background: #4CAF50;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            ">
            OK
            </button>
        </div>
    `;

    document.body.appendChild(successBox);
    console.log(nameInput.value);
    console.log(commentInput.value);
    nameInput.value = "";
    commentInput.value = "";
    return true;
}

/*==SCROLL REVEAL ANIMATION==*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
    reset: true, //Animation repeat
})

sr.reveal(`.home__bg`, {scale: 1.1, opacity: 1})
sr.reveal(`.home__swiper`, {origin: 'right', distance: '300px', delay: 800})
sr.reveal(`.home__data`, {origin: 'bottom', distance: '120px', delay: 1600})
sr.reveal(`.swiper-pagination-bullet`, {origin: 'top', delay: 1800, opacity: 0})
sr.reveal(`.home__button`, {origin: 'top', delay: 2200})

sr.reveal(`.about__title, about__title span`, {origin: 'top', delay: 600})
sr.reveal(`.about__description`, {origin: 'left', delay: 800})
sr.reveal(`.button__ghost`, {origin: 'bottom'})
sr.reveal(`.about__video`, {origin: 'right'})

sr.reveal(`.models__title`, {origin: 'top'})
sr.reveal(`.models__card`, {interval: 100, delay : 200})

sr.reveal(`.info_subtitle`, {origin: 'top'})
sr.reveal(`.info__title`, {origin: 'top'})
sr.reveal(`.info__img`, {distance: '120px'})
sr.reveal(`.info__number`, {origin: 'bottom', distance: '80px', delay: 800})
sr.reveal(`.info__group`, {interval: 100, delay: 150})
sr.reveal(`..info__data > *:not(:last-child)`, {interval: 100, delay: 150})


sr.reveal(`.contact__title`, {origin: 'top'})
sr.reveal(`.contact__content`, {origin: 'left'})
sr.reveal(`.contact__img`, {origin: 'right'})
sr.reveal(`.contact__button`, {origin: 'bottom'})

sr.reveal(`.footer__container`, {interval: 100})



