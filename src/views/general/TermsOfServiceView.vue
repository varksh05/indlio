<template>
  <div class="terms-of-service">
    <h1>Terms of Service</h1>
    <p>Welcome to our service! By using our platform, you agree to the following terms:</p>
    <ul>
      <li>You must be at least 18 years old to use this service.</li>
      <li>You agree to provide accurate information during registration.</li>
      <li>We reserve the right to modify these terms at any time.</li>
      <li>Your continued use of the service constitutes acceptance of the new terms.</li>
    </ul>
    <p>If you do not agree with these terms, please do not use our service.</p>
  </div>
  <div class="actions">
    <button @click="$router.push('/login')">Back to Login</button>
    <button @click="$router.push('/privacy-policy')">Privacy Policy</button>
    <button @click="$router.push('/contact-us')">Contact Us</button>
  </div>
  <footer>
    <p>&copy; 2025 Indlio Inc. All rights reserved.</p>
  </footer>
</template>
