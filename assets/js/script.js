function generateSignature() {
  const fullName = document.getElementById("fullName").value;
  const jobTitle = document.getElementById("jobTitle").value;
  const phoneNumber = document.getElementById("phoneNumber").value;

  if (!fullName || !jobTitle) {
    alert("Please fill in all fields");
    return;
  }

  const signatureHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <style>
        :root{
          --primary-signature-color: #ef3340;
          --accent-signature-color: #5c5a5a;
          --accent-2-signature-color: #e6e6e6;
          --location-signature-colors: #cccccc;
          --white-signature-color: #ffffff;
          --black-signature-color: #000000;
          --black-icon-bg-color: #444444;
        }
        p{
          margin: 0;
          padding: 0;
        }
        a{
          text-decoration: none;
        }
        .signature-container {
          font-family: 'Poppins',  sans-serif;
          font-size: 12px;
          max-width: 340px;
          color: var(--text-color);
          overflow: hidden;
        }
        .logo-container {
          width: 45%; 
          padding-right: 15px; 
        }
        .logo-img {
          width: 100%;
        }
        .data{
          padding-left: 15px;
          border-left:4px solid var(--primary-signature-color);
        }
        .brand-title {
          font-weight: 700;
          font-size: 20px;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }
        .subtitle{
          color: var(--accent-signature-color);
          margin: 0;
          font-size: 7.5px;
          font-weight: 600;
          text-transform: uppercase;
        }
        .name {
          color: var(--primary-signature-color);
          font-size: 16px;
          line-height: 1.1;
          font-weight: bold;
        }
        .company-website {
          padding: 5px 0 0 0;
          font-size: 11px;
          font-weight: normal;
          color: var(--accent-signature-color);
        }
        .company-website a {
          color: var(--primary-signature-color);
          font-weight: 600;
          text-decoration: none;
        }
        .role {
          line-height: 1.2;
          color: var(--accent-signature-color);
          font-size: 12px;
        }
        .contact a {
          display: block;
          text-decoration: none;
          margin-bottom: 6px;
          font-weight: 500;
        }
        .social-icons {
          display: flex;
          justify-content: start;
          align-items: center;
          margin-top: 5px;
        }
        .social-icons a{  
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;
          border-radius: 50%;
          width: 20px;
          height:20px;
          border-radius: 50%;
          margin-right: 5px;
        }
        .social-icons a img {
          width: 100%;
          height: 100%;
        }
        .footer {
          font-size: 12px;
          color: var(--text-color);
        }
        .disclaimer{
          padding: 5px 0;
        }
        .banner-container {
          padding-top: 10px;
          width: 100%;
        }
        .banner {
          width: 90%;
          height: 100%;
        }
        .banner img{
          width: 94%;
          height: 100%;
        }
        .location-title {
          font-size: 12px;
          color: var(--primary-signature-color);
        }
        .office-info {
          color: var(--accent-signature-color);
          font-size: 11px;
          line-height: 1.3;
        }
      </style>
    </head>
    <body>
      <table class="signature-container" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td>
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td class="logo-container" align="center" valign="middle">
                  <img src="https://bohemiangeeks.com/wp-content/uploads/2025/05/logo-stricked-white-ace.png" alt="Bohemian Geeks Logo" class="logo-img" />
                </td>
                <td class="data" width="66%" valign="top">
                  <span class="subtitle">Al Ain Consulting Engineers LLC</span>
                  <p class="name">${fullName}</p>
                  <p class="role">${jobTitle}</p>
                  <div class="company-website">
                    <a href="https://ace-uae.net">www.ace-uae.net</a>
                  </div>
                  <div class="social-icons">
                    <a href="https://www.linkedin.com/company/ace-alain-consulting-engineers/" target="_blank" title="LinkedIn">
                      <img src="https://bohemiangeeks.com/wp-content/uploads/2025/05/linkedin-1.png" alt="LinkedIn" />
                    </a>
                    <a href="https://x.com/engineers85203" target="_blank" title="Twitter">
                      <img src="https://bohemiangeeks.com/wp-content/uploads/2025/05/x-colored.png" alt="Twitter" />
                    </a>
                    <a href="https://www.instagram.com/alainconsultingeng/" target="_blank" title="Instagram">
                      <img src="https://bohemiangeeks.com/wp-content/uploads/2025/05/instagram-colored.png" alt="Instagram">
                    </a>
                    <a href="https://www.facebook.com/ACEUAE1975" target="_blank" title="Website">
                      <img src="https://bohemiangeeks.com/wp-content/uploads/2025/05/facebook-colored.png" alt="Facebook" />
                    </a>
                    ${
                      phoneNumber
                        ? `<a href="tel:+971${phoneNumber.replace(
                            /-/g,
                            ""
                          )}" target="_blank" title="Call">
                      <img src="https://bohemiangeeks.com/wp-content/uploads/2025/05/phone-call.png" alt="Phone" />
                    </a>`
                        : ""
                    }
                  </div>
                </td>
              </tr>
            </table>

            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td class="socials">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td colspan="2" class="banner-container">
                        <table cellpadding="0" cellspacing="0" style="width: 100%">
                          <tr>
                            <td class="banner">
                              <img src="https://bohemiangeeks.com/wp-content/uploads/2025/05/banner-arc-bg-updated-final44.png" alt="locations">
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td class="footer">
                  <div class="disclaimer" style="font-size: 12px; margin-top: 5px; color: #888;">
                    Disclaimer: The information provided on this site is for general informational purposes only and does not constitute professional advice.
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>`;

  document
    .getElementById("signaturePreview")
    .setAttribute("data-signature", signatureHTML);
  document.getElementById("signaturePreview").innerHTML = signatureHTML;
}

function copyToClipboard() {
  const signatureHTML = document
    .getElementById("signaturePreview")
    .getAttribute("data-signature");
  if (!signatureHTML) {
    alert("Please generate a signature first");
    return;
  }

  navigator.clipboard
    .writeText(signatureHTML)
    .then(() => {
      const successMessage = document.getElementById("successMessage");
      successMessage.style.display = "block";
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 3000);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      alert("Failed to copy signature. Please try again.");
    });
}

function downloadSignature() {
  const signatureHTML = document
    .getElementById("signaturePreview")
    .getAttribute("data-signature");
  const fullName = document.getElementById("fullName").value;

  if (!signatureHTML) {
    alert("Please generate a signature first");
    return;
  }

  // Create a sanitized filename from the person's name
  const sanitizedName = fullName
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  const blob = new Blob([signatureHTML], { type: "text/html" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `ace-signature-${sanitizedName}.html`;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}

// Smooth scroll to generator section
document.querySelector(".cta-button").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".main-content").scrollIntoView({
    behavior: "smooth",
  });
});

function showPreview() {
  const fullName = document.getElementById("fullName").value;
  const jobTitle = document.getElementById("jobTitle").value;

  if (!fullName || !jobTitle) {
    alert("Please fill in all fields");
    return;
  }

  generateSignature();
  document.getElementById("overlay").classList.add("active");
  document.getElementById("previewPopup").classList.add("active");
}

function closePreview() {
  document.getElementById("overlay").classList.remove("active");
  document.getElementById("previewPopup").classList.remove("active");
}

// Close popup when clicking outside
document.getElementById("overlay").addEventListener("click", closePreview);

// Loader functionality
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const body = document.body;

  // Add loading class to body
  body.classList.add("loading");

  // Hide loader after delay
  setTimeout(() => {
    loader.classList.add("hidden");
    // Remove loading class after animation completes
    setTimeout(() => {
      body.classList.remove("loading");
    }, 800); // Match the CSS transition duration
  }, 1500);
});

// Phone number input handling
document.getElementById("phoneNumber").addEventListener("input", function (e) {
  const phoneNumber = e.target.value;

  // Remove any non-digit characters
  const cleanNumber = phoneNumber.replace(/\D/g, "");

  // Format the number as user types (UAE format)
  let formattedNumber = "";
  if (cleanNumber.length > 0) {
    if (cleanNumber.length <= 2) {
      formattedNumber = cleanNumber;
    } else if (cleanNumber.length <= 5) {
      formattedNumber = `${cleanNumber.slice(0, 2)}-${cleanNumber.slice(2)}`;
    } else {
      formattedNumber = `${cleanNumber.slice(0, 2)}-${cleanNumber.slice(
        2,
        5
      )}-${cleanNumber.slice(5, 9)}`;
    }
  }

  // Update input value with formatted number
  e.target.value = formattedNumber;

  // Update signature preview if it exists
  if (document.getElementById("signaturePreview").innerHTML) {
    generateSignature();
  }
});
