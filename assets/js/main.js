// Scroll ao clicar em um HREF com ID
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    e.preventDefault();
    let href = this.getAttribute("href");
    let elem = document.querySelector(href) || document.querySelector("a[name=" + href.substring(1, href.length) + "]");

    window.scroll({
      top: elem.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  });
});

// Tela de carregamento
function loadingOut() {
  document.querySelector('.preloader').classList.toggle("loadingOut");
};

window.addEventListener('load', loadingOut);


// Modal
let currentModal = "";

let openmodal = document.querySelectorAll('.modal-open')
for (let i = 0; i < openmodal.length; i++) {
  openmodal[i].addEventListener('click', function (event) {
    event.preventDefault()
    currentModal = openmodal[i]["dataset"]["modal"];
    toggleModal(currentModal);
  })
}

const closeButtons = document.querySelectorAll('.modal-close, .modal-overlay');

for (const closeButton of closeButtons) {
  closeButton.addEventListener('click', function handleClick(event) {
    event.preventDefault();
    toggleModal(currentModal);
    currentModal = "";
  });
}

document.onkeydown = function (evt) {
  evt = evt || window.event
  let isEscape = false

  if ("key" in evt) {
    isEscape = (evt.key === "Escape" || evt.key === "Esc")
  } else {
    isEscape = (evt.key === 27)
  }

  if (isEscape && document.body.classList.contains('modal-active')) {
    toggleModal(currentModal);
    currentModal = "";
  }
};

function toggleModal(id) {
  console.log(id);
  const body = document.querySelector('body');
  const modal = document.querySelector("." + id);
  modal.classList.toggle('opacity-0');
  modal.classList.toggle('pointer-events-none');
  body.classList.toggle('modal-active');
}