const navToggle = document.querySelector('#navToggle');
const icon = document.querySelector('.fa-bars');
const nav = document.querySelector('#nav-desktop');
const brand = document.querySelector('#brand');
const modal = document.querySelector('.modal');
const btn = document.querySelectorAll('.button');
const form = document.getElementsByTagName('form')[0];
const email = document.querySelector('#email');
const emailError = document.querySelector('#email + span.error');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  if (icon.classList.contains('fa-bars')) {
    icon.classList.replace('fa-bars', 'fa-times');
    brand.style.display = 'none';
  } else {
    icon.classList.replace('fa-times', 'fa-bars');
    brand.style.display = '';
  }
});

document.querySelectorAll('.nav-link').forEach(() => nav.addEventListener('click', () => {
  nav.classList.remove('nav-open');
}));

const data = [
  {
    title: 'Keeping track of hundreds of components',
    discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    languages: ['Ruby on Rails', 'CSS', 'JavaScript'],
    image: 'images/modal.png',
    liveVersion: 'https://abrar052.github.io/Microverse-Portfolio-Abrar/',
    sourseUrl: 'https://github.com/Abrar052/Microverse-Portfolio-Abrar',
  },
  {
    title: 'Keeping track of hundreds of components',
    discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    languages: ['Ruby on Rails', 'CSS', 'JavaScript'],
    image: 'images/modal.png',
    liveVersion: 'https://abrar052.github.io/Microverse-Portfolio-Abrar/',
    sourseUrl: 'https://github.com/Abrar052/Microverse-Portfolio-Abrar',
  },
  {
    title: 'Keeping track of hundreds of components',
    discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    languages: ['Ruby on Rails', 'CSS', 'JavaScript'],
    image: 'images/modal.png',
    liveVersion: 'https://abrar052.github.io/Microverse-Portfolio-Abrar/',
    sourseUrl: 'https://github.com/Abrar052/Microverse-Portfolio-Abrar',
  },
  {
    title: 'Keeping track of hundreds of components',
    discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    languages: ['Ruby on Rails', 'CSS', 'JavaScript'],
    image: 'images/modal.png',
    liveVersion: 'https://abrar052.github.io/Microverse-Portfolio-Abrar/',
    sourseUrl: 'https://github.com/Abrar052/Microverse-Portfolio-Abrar',
  },
  {
    title: 'Keeping track of hundreds of components',
    discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    languages: ['Ruby on Rails', 'CSS', 'JavaScript'],
    image: 'images/modal.png',
    liveVersion: 'https://abrar052.github.io/Microverse-Portfolio-Abrar/',
    sourseUrl: 'https://github.com/Abrar052/Microverse-Portfolio-Abrar',
  },
  {
    title: 'Keeping track of hundreds of components',
    discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    languages: ['Ruby on Rails', 'CSS', 'JavaScript'],
    image: 'images/modal.png',
    liveVersion: 'https://abrar052.github.io/Microverse-Portfolio-Abrar/',
    sourseUrl: 'https://github.com/Abrar052/Microverse-Portfolio-Abrar',
  },
];

window.addEventListener('DOMContentLoaded', () => {
  btn.forEach((button, index) => {
    button.addEventListener('click', () => {
      modal.style.display = 'block';
      for (let i = 0; i < data.length; i += 1) {
        const modalData = data[index];
        let project = `
    <div class='modal-details'>
      <span class='close'>&times;</span>
      <div class='modal-container'>
        <div class='pop-up'>
            <img class='pop-up-image' src=${modalData.image} alt='img-modal' />
          <div class='text-buttons'>
            <p class='title'>${modalData.title}</p>
            <div class='live-link'>
              <button class='check-source'>
              <a href=${modalData.liveVersion} class='github-link'>
              See Live <span><i class='con-git far fa-arrow-alt-circle-up'></i></span>
              </a></button>
              <button class='check-source'>
              <a href=${modalData.sourseUrl} class='github-link'>
                See source <span<i class='con-git fab fa-github'></i></i></span>
              </a>
              </button>
            </div>
          </div>
          <ul class='list-buttons'>
          `;

        modalData.languages.forEach((language) => {
          project += `<li class='list-btn'>${language}</li>`;
        });

        project += `
            </ul>
            <p class='description'>${modalData.discription}</p>
            <div class='check'>
              <button class='check-source'>
                <a href=${modalData.liveVersion} class='github-link'>
                  See Live <span><i class='far fa-arrow-alt-circle-up'></i></span>
                </a>
              </button>
              <button class='check-source'>
                <a href=${modalData.sourseUrl} class='github-link'>
                  See source <span<i class='fab fa-github'></i></i></span>
                </a>
              </button>
            </div>
          </div>
      </div>
    </div>
      `;
        modal.innerHTML = project;

        const span = document.querySelector('.close');
        span.addEventListener('click', () => {
          modal.style.display = 'none';
        });
      }
    });
  });
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  emailError.className = 'error active';
}

email.addEventListener('input', () => {
  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showError();
  }
});

form.addEventListener('submit', (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

const formValues = {};
if (window.localStorage.getItem('show data')) {
  const formObject = JSON.parse(window.localStorage.getItem('show data'));
  form.name.value = formObject.name;
  form.email.value = formObject.email;
  form.message.value = formObject.comments;
}
function collectFormData() {
  formValues.name = form.name.value;
  formValues.email = form.email.value;
  formValues.message = form.comments.value;
  window.localStorage.setItem('show data', JSON.stringify(formValues));
}
form.addEventListener('submit', collectFormData);
