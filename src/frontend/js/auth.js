document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
  
    console.log('auth.js loaded');  
    header.innerHTML = `
      <h1>Mentorship Platform</h1>
      <nav>
        <a href="pages/login.html">Login</a> |
        <a href="pages/register.html">Register</a>
      </nav>
    `;
  
    footer.innerHTML = `<p>&copy; 2024 Mentorship Platform. All rights reserved.</p>`;
  });
  