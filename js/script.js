window.onload = () => {
  const mobileBtn = document.querySelector('.mob-icon');
  const mobileBtnClose = document.querySelector('.close-btn');
  const mobileBody = document.querySelector('.mobile-body');
  const navMain = document.querySelector('.main-nav');
  const modalclosebtn = document.querySelector('#modal-close-btn');
  const containerModal = document.querySelector('.container-modal');
  const viewProject = document.querySelectorAll('.modal-link');
  const modalTitle = document.querySelector('.modal-title h3');
  const modalDescription = document.querySelector('.single-desc p');
  const ModalImage = document.querySelector('.modal-desc img');

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

  for (let i = 0; i < viewProject.length; i++) {
    viewProject[i].addEventListener('click', (event) => {
      event.preventDefault();
      const projImage = project[i].image;
      modalTitle.textContent = project[i].title;
      modalDescription.textContent = project[i].description;
      ModalImage.src = projImage;
      containerModal.style.display = 'flex';
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
  });
};
