// Click event
document.getElementById('magicBtn').addEventListener('click', () => {
    alert("🎉 You clicked the magic button!😊😉");
  });
  
  // Hover effect
  const button = document.getElementById('magicBtn');
  button.addEventListener('mouseover', () => {
    button.textContent = "You're hovering!";
  });
  button.addEventListener('mouseout', () => {
    button.textContent = "Click Me 😛!";
  });
  
  // Keypress detection
  document.addEventListener('keydown', (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  // Form validation
  document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
  
    if (!name || !email || password.length < 8) {
      alert("⚠️ Please check all fields. Password must be at least 8 characters.");
    } else {
      alert("✅ Form submitted successfully!");
    }
  });
  
  // Real-time feedback
  document.getElementById('password').addEventListener('input', (e) => {
    if (e.target.value.length < 8) {
      e.target.style.border = '2px solid red';
    } else {
      e.target.style.border = '2px solid green';
    }
  });
  
  // Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabContents.forEach(tc => tc.classList.remove('active'));
      const tabId = btn.getAttribute('data-tab');
      document.getElementById(`tab-${tabId}`).classList.add('active');
    });
  });
  