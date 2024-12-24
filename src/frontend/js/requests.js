// requests.js
document.addEventListener('DOMContentLoaded', function() {
    const requestButton = document.getElementById('requestButton');

    if (requestButton) {
        requestButton.addEventListener('click', function() {
            const mentorId = requestButton.getAttribute('data-mentor-id');
            sendMentorshipRequest(mentorId);
        });
    }
});

function sendMentorshipRequest(mentorId) {
    console.log('Sending mentorship request to mentor with ID:', mentorId);
    // Add logic to send mentorship request to the server
}
