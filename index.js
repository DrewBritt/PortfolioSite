function toggleSideMenu() {
    //Get mobile navbar element and set active
    let mobilenav = document.querySelector('.mobile-navbar');
    mobilenav.classList.toggle('active');

    //Disable scrolling of body when navbar is active
    document.body.classList.toggle('scroll-lock');
}