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
      window.location.href = '/dashboard.html';
    });
   
  });
    
// menu-icon script
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const side = document.getElementById('side');
    // const navItem = document.getElementById('dashboard-menu');
    // const dashMenu = document.getElementById('dash-menu');

    menuIcon.addEventListener('click', function() {
        if (side.style.display === 'block') {
            side.style.display = 'none';
            // navItem.style.display = 'block';  
        } else {
            side.style.display = 'block';
            // navItem.style.display = 'block';
        }
    });

    // navItem.addEventListener('click', function() {
    //     if (dashMenu.style.display === 'block') {
    //         dashMenu.style.display = 'none';
    //     } else {
    //         dashMenu.style.display = 'block';
    //     }
    // });

    // document.addEventListener('click', function(event) {
    //     if (!navItem.contains(event.target) && !dashMenu.contains(event.target)) {
    //         dashMenu.style.display = 'none';
    //     }
    // });
});
