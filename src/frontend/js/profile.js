// profile.js
document.addEventListener('DOMContentLoaded', function() {
  const profileForm = document.getElementById('profileForm');

  if (profileForm) {
      profileForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const name = profileForm.querySelector('input[name="name"]').value;
          const bio = profileForm.querySelector('textarea[name="bio"]').value;

          // Save profile updates
          updateProfile(name, bio);
      });
  }
});

function updateProfile(name, bio) {
  console.log('Updating profile with:', name, bio);
  // Add logic to send profile data to the server and update UI
}
