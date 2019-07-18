const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav Bar
const navBar = document.querySelectorAll('a');
console.log(navBar[0].textContent = 'Services');
console.log(navBar[1].textContent = 'Product');
console.log(navBar[2].textContent = 'Vision');
console.log(navBar[3].textContent = 'Features');
console.log(navBar[4].textContent = 'About');
console.log(navBar[5].textContent = 'Contact');


// CTA
const ctaContent = document.querySelector('h1');
console.log(ctaContent.textContent = 'DOM IS AWESOME');

const ctaButton = document.querySelector('button');
console.log(ctaButton.textContent = 'Get Started');

const ctaImg = document.querySelector('#cta-img');

// Method 1
// ctaImg.setAttribute('src', 'img/header-img.png')

// Method 2
ctaImg.src = 'img/header-img.png';
ctaImg.alt = 'Image of a code snippet.'



// Main-Content
const mainContentHeader = document.querySelectorAll('h4');
console.log(mainContentHeader[0].textContent = 'Features');
console.log(mainContentHeader[1].textContent = 'About');
console.log(mainContentHeader[2].textContent = 'Services');
console.log(mainContentHeader[3].textContent = 'Product');
console.log(mainContentHeader[4].textContent = 'Vision');

const mainContentPTag = document.querySelectorAll('p');
console.log(mainContentPTag[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.')
console.log(mainContentPTag[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.')
console.log(mainContentPTag[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.')
console.log(mainContentPTag[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.')
console.log(mainContentPTag[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.')

const middleImg = document.querySelector('.middle-img');
// Method 1
// middleImg.setAttribute('src', 'img/mid-page-accent.jpg')

// Method 2
middleImg.src = 'img/mid-page-accent.jpg';
middleImg.alt = 'Image of code snippets across the screen.'

// Contact
console.log(mainContentHeader[5].textContent = 'Contact');
console.log(mainContentPTag[5].textContent = '123 Way 456 Street Somewhere, USA');
console.log(mainContentPTag[6].textContent = '1 (888) 888-8888');
console.log(mainContentPTag[7].textContent = 'sales@greatidea.io');


// Footer
// const footer = document.querySelector('.footer');
// console.log(footer);

console.log(mainContentPTag[8].textContent = 'Copyright Great Idea! 2018');

// Change Styling 
// const styles = document.querySelectorAll('x');
// Element.forEach(function (currentValue) {
//     currentValue.style.color = '';
// });

// Element.forEach (currentValue => currentValue.style.color = '');

/* Testing Append/Prepend*/
// const navContent = ['Services', 'Product', 'Vision', 'Features', 'About', 'Contact'];

// const navBar = document.querySelectorAll('a');

// navContent.forEach(currentValue => {
//     const listItem = document.createElement('a');
//     listItem.textContent = currentValue;
//     navBar.append(listItem);
// });

// const navContent = document.createElement('a');
// navContent.textContent = "Services";

// navBar.prepend(n);