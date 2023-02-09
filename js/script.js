window.onload = () => {
  const firstSection = document.querySelector('.wrapper');
  const recentSection = document.querySelector('.recent-work');
  const aboutSection = document.querySelector('.about-me');
  const contactSection = document.querySelector('.contact-me');
  const mobileBtn = document.querySelector('.mob-icon');
  const mobileBtnClose = document.querySelector('.close-btn');
  const mobileBody = document.querySelector('.mobile-body');
  const navMain = document.querySelector('.main-nav');
  const modalclosebtn = document.querySelector('#modal-close-btn');
  const modalcloseMobilebtn = document.querySelector('#modal-close-btn-mobile');

  const containerModal = document.querySelector('.container-modal');
  const viewProject = document.querySelectorAll('.modal-link');
  const modalTitle = document.querySelector('.modal-title h3');
  const modalTitleMobile = document.querySelector('.modal-desc-mobile .modal-title h3');
  const modalDescription = document.querySelector('.single-desc p');
  const ModalImage = document.querySelector('.modal-desc img');
  const MobileModalImage = document.querySelector('.modal-main-desc img');
  const MobileModalDescription = document.querySelector('.modal-main-desc p');

  const project = {
    0: {
      title: 'Multi-post stories',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      image: './images/multiple.png',
    },
    1: {
      title: 'no title',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      image: './images/project_one.png',
    },
    2: {
      title: 'Data Dashboard Healthcare',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      image: './images/project_two.png',
    },
    3: {
      title: 'Webiste portfolio',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      image: './images/project_two.png',
    },
    4: {
      title: 'Professional Art Printing Data More',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      image: './images/project_five.png',
    },
    5: {
      title: 'Data Dashboard Healthcare',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      image: './images/project_two.png',
    },
    6: {
      title: 'Webiste portfolio',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      image: './images/project_three.png',
    },
  };

  for (let i = 0; i < viewProject.length; i += 1) {
    viewProject[i].addEventListener('click', (event) => {
      event.preventDefault();
      const projImage = project[i].image;
      modalTitle.textContent = project[i].title;
      modalTitleMobile.textContent = project[i].title;
      modalDescription.textContent = project[i].description;
      ModalImage.src = projImage;
      MobileModalDescription.textContent = project[i].description;
      MobileModalImage.src = projImage;
      containerModal.style.display = 'flex';
      firstSection.classList.add('blur');
      recentSection.classList.add('blur');
      aboutSection.classList.add('blur');
      contactSection.classList.add('blur');
    });
  }

  mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.remove('is-active');
    mobileBtnClose.classList.add('is-active');
    mobileBody.classList.add('is-active');
    navMain.style.position = 'fixed';
    document.querySelector('.logo-link').style.display = 'none';
  });
  mobileBtnClose.addEventListener('click', () => {
    mobileBtn.classList.add('is-active');
    mobileBtnClose.classList.remove('is-active');
    mobileBody.classList.remove('is-active');
    navMain.style.position = 'static';
    document.querySelector('.logo-link').style.display = 'block';
  });
  modalclosebtn.addEventListener('click', () => {
    containerModal.style.display = 'none';
    firstSection.classList.remove('blur');
    recentSection.classList.remove('blur');
    aboutSection.classList.remove('blur');
    contactSection.classList.remove('blur');
  });
  modalcloseMobilebtn.addEventListener('click', () => {
    containerModal.style.display = 'none';
    firstSection.classList.remove('blur');
    recentSection.classList.remove('blur');
    aboutSection.classList.remove('blur');
    contactSection.classList.remove('blur');
  });
};
