function loadProfile() {
    const mainContent = document.getElementById("main-content");
  
    mainContent.innerHTML = `
      <h2>Your Profile</h2>
      <p>Welcome, [User Name]!</p>
      <p>Email: user@example.com</p>
      <button onclick="editProfile()">Edit Profile</button>
    `;
  }
  
  function editProfile() {
    alert("Profile editing functionality coming soon!");
  }
  