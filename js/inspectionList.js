// script.js

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.querySelector('.search-bar');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const rows = document.querySelectorAll('tbody tr');

    searchBar.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        rows.forEach(row => {
            const name = row.children[2].textContent.toLowerCase();
            if (name.includes(searchText)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.textContent.toLowerCase();
            rows.forEach(row => {
                const status = row.children[5].textContent.toLowerCase();
                if (filter === 'all requests' || status === filter) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });
});
