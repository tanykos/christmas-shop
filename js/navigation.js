const burger = document.querySelector('.nav-btn');
const navigation = document.querySelector('.navigation');
const navItems = document.querySelectorAll('.navigation-item');
const body = document.querySelector('body');

const closeMenu = () => {
  body.classList.remove('no-scroll');
  burger.classList.remove('active');
  navigation.classList.remove('active');
}

const onClickBurger = () => {
  burger.classList.toggle('active');
  navigation.classList.toggle('active');

  if (navigation.classList.contains('active')) {
    body.classList.add('no-scroll');
    navItems.forEach((navItem) => {
      navItem.addEventListener('click', closeMenu);
    })
  } else {
    closeMenu();
  }
}

burger.addEventListener('click', onClickBurger);

