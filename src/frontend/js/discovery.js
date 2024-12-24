// discovery.js
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchQuery = searchInput.value;
            searchMentors(searchQuery);
        });
    }
});

function searchMentors(query) {
    console.log('Searching for mentors with query:', query);
    // Add your search logic here (send API request to fetch mentors)
}
