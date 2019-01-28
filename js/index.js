const siteContent = {
  'nav': {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  'cta': {
    'h1': 'DOM Is Awesome',
    'button': 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  'contact': {
    'contact-h4': 'Contact',
    'address': '123 Way 456 Street Somewhere, USA',
    'phone': '1 (888) 888-8888',
    'email': 'sales@greatidea.io'
  },
  'footer': {
    'copyright': 'Copyright Great Idea! 2018'
  }
};

// sections selector
const sections = Object.keys(siteContent).reduce((obj, section) => {
  const node = document.getElementsByClassName(section);
  const [ elem ] = node.length > 0 ? node : document.getElementsByTagName(section);
  obj[section] = elem;
  return obj;
}, {});

// header selectors
const navLinks = Array.from(sections['nav'].children);
const logoImg = document.getElementById('logo-img');

// cta selectors
const ctaHeader = sections.cta.firstElementChild.children[0];
const ctaButton = sections.cta.firstElementChild.children[1];
const ctaImg = document.getElementById('cta-img');

// main-content selectors
const mainHeaders = sections['main-content'].getElementsByTagName('h4');
const mainContent = sections['main-content'].getElementsByTagName('p');
const middleImg = document.getElementById('middle-img');

// contact selector
const contactChildren = sections['contact'].children;

// footer selector
const footerCopyright = sections['footer'].firstElementChild;

/* (>^_^>) Lo and behold... */

// handle header
navLinks.forEach((el, i) => {
  el.textContent = siteContent['nav'][`nav-item-${i + 1}`];
  // set text colour
  el.style.color = 'green';
});

const createLink = (text) => {
  const link = document.createElement('a');
  link.textContent = text;
  link.style.color = 'green';
  return link;
};

sections['nav'].prepend(createLink('Home'));
sections['nav'].appendChild(createLink('Partners'));

logoImg.setAttribute('src', siteContent['nav']['img-src']);

// handle cta
ctaHeader.textContent = siteContent['cta']['h1'];
ctaButton.textContent = siteContent['cta']['button'];
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

// handle main-content
const mainContentKeys = Object.keys(siteContent['main-content']);

['h4', 'content'].forEach(type => {
  const selector = type === 'h4' ? mainHeaders : mainContent;
  mainContentKeys.filter(v => v.endsWith(type)).forEach((v, i) => {
    selector[i].textContent = siteContent['main-content'][v];
  });
});

middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// handle contact
const contactKeys = Object.keys(siteContent['contact']);

contactKeys.forEach((v, i) => {
  contactChildren[i].textContent = siteContent['contact'][v];
});

// handle footer
footerCopyright.textContent = siteContent['footer']['copyright'];

// make things look prettier

document.body.style.backgroundColor = 'lightgrey';

ctaButton.style.backgroundColor = '#388E3C';
ctaButton.style.color = '#FFFFFF';
ctaButton.style.transition = '0.3s';

ctaButton.addEventListener('mouseover', function (event) {
  this.style.backgroundColor = '#8BC34A';
  this.style.color = '#212121';
});

ctaButton.addEventListener('mouseout', (event) => {
  ctaButton.style.backgroundColor = '#388E3C';
  ctaButton.style.color = '#FFFFFF';
});

// let's bring it aroooouuund town

ctaButton.addEventListener('click', (event) => {
  let rotation = 0;
  const rotateID = setInterval(() => {
    rotation += 7;
    document.querySelectorAll('div').forEach(node => {
      node.style.transform = `rotate(${rotation}deg)`;
    });
    if (rotation > 360) {
      ctaButton.textContent = 'Ooooh yeah...';
      clearInterval(rotateID);
    }
  }, 100);
});
