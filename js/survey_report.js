
    // ******* scripting first container ********
    document.addEventListener('DOMContentLoaded', function () {
 const progressText = document.getElementById('progress-text');
 const progressBar = document.getElementById('progress-bar');
 const progress = parseInt(progressText.textContent);

 const radius = progressBar.r.baseVal.value;
 const circumference = 2 * Math.PI * radius;

 progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
 progressBar.style.strokeDashoffset = circumference;

 const offset = circumference - (progress / 100) * circumference;
 progressBar.style.strokeDashoffset = offset;

 progressText.textContent = "75%";
});
// ******* scripting first container end ********

// ****** scripting second container starts ***********
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tab-link" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Show the default tab
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("property-information").style.display = "block";
});
// second container scripting end
