document.addEventListener("DOMContentLoaded", function() {
    const createBtn = document.getElementById('createBtn');
    const request = document.getElementById('request-bt');
    const overview = document.getElementById('overview');
    


    createBtn.addEventListener('click', function() {
      window.location.href = '/generateInspection.html';
    });
    request.addEventListener('click', function() {
      window.location.href = '/inspectionList.html';
    });
    overview.addEventListener('click', function() {
      window.location.href = '/dashbord.html';
    });
   
  });
    
// menu-icon script
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const aside = document.querySelector('aside');
    const navItem = document.getElementById('nav');
    const dashMenu = document.getElementById('dash-menu');

    menuIcon.addEventListener('click', function() {
        if (aside.style.display === 'block') {
            aside.style.display = 'none';
        } else {
            aside.style.display = 'block';
        }
    });

    navItem.addEventListener('click', function() {
        if (dashMenu.style.display === 'block') {
            dashMenu.style.display = 'none';
        } else {
            dashMenu.style.display = 'block';
        }
    });

    document.addEventListener('click', function(event) {
        if (!navItem.contains(event.target) && !dashMenu.contains(event.target)) {
            dashMenu.style.display = 'none';
        }
    });
});
