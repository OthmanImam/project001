document.addEventListener("DOMContentLoaded", function() {
    const generateBtn = document.getElementById('generateBtn');
    const modal1 = document.getElementById('modal1');
    const closeModal1 = document.getElementById('closeModal1');
    const submitModal1 = document.getElementById('submitModal1');
    const modal2 = document.getElementById('modal2');
    const closeModal2 = document.getElementById('closeModal2');
    const cancel2 = document.getElementById('button-cancel2');
    const submit2 = document.getElementById('button-submit2');

    generateBtn.addEventListener('click', function() {
        modal1.style.display = 'block';
    });

    closeModal1.addEventListener('click', function() {
        modal1.style.display = 'none';
    });

    submitModal1.addEventListener('click', function() {
        modal1.style.display = 'none';
        modal2.style.display = 'block';
    });

    closeModal2.addEventListener('click', function() {
        modal2.style.display = 'none';
    });
    cancel2.addEventListener('click', function() {
        window.location.href = '/inspectionList.html';
      });
      submit2.addEventListener('click', function() {
        window.location.href = '/generateInspection.html';
      });
    // Close modals if clicked outside of modal content
    window.onclick = function(event) {
        if (event.target === modal1) {
            modal1.style.display = 'none';
        }
        if (event.target === modal2) {
            modal2.style.display = 'none';
        }
    };
});