function generateSignature() {
  const fullName = document.getElementById("fullName").value;
  const jobTitle = document.getElementById("jobTitle").value;
  const phoneNumber = document.getElementById("phoneNumber").value;


  if (!fullName || !jobTitle) {
    alert("Please fill in all fields");
    return;
  }
  if (!fullName || !jobTitle) {
    alert("Please fill in all fields");
    return;
  }

  const signatureHTML = `
<!DOCTYPE html>
<html lang="en">
  <body>
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="
        font-family: Poppins, sans-serif;
        font-size: 12px;
        max-width: 340px;
        color: #000000;
        overflow: hidden;
      "
    >
      <tr>
        <td>
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td
                align="center"
                valign="middle"
                style="width: 45%; padding-right: 15px"
              >
                                  <img
                    src="https://bohemiangeeks.com/wp-content/uploads/2025/05/logo-stricked-white-ace.png"
                    alt="ACE Logo"
                    width="120"
                    style="width: 120px; height: auto; display: block; border: 0"
                  />
              </td>
              <td
                width="66%"
                valign="top"
                style="padding-left: 15px; border-left: 4px solid #ef3340"
              >
                <span
                  style="
                    color: #5c5a5a;
                    margin: 0;
                    font-size: 7.5px;
                    font-weight: 600;
                    text-transform: uppercase;
                  "
                >
                  Al Ain Consulting Engineers LLC
                </span>
                <p
                  style="
                    color: #ef3340;
                    font-size: 16px;
                    line-height: 1.1;
                    font-weight: bold;
                    margin: 0;
                    padding: 0;
                  "
                                  >
                    ${fullName}
                  </p>
                <p
                  style="
                    line-height: 1.2;
                    color: #5c5a5a;
                    font-size: 12px;
                    margin: 0;
                    padding: 0;
                  "
                                  >
                    ${jobTitle}
                  </p>
                <div
                  style="
                    padding: 5px 0 0 0;
                    font-size: 11px;
                    font-weight: normal;
                    color: #5c5a5a;
                  "
                >
                  <a
                    href="https://ace-uae.net"
                    style="
                      color: #5c5a5a;
                      font-weight: 600;
                      text-decoration: none;
                    "
                  >
                    www.ace-uae.net
                  </a>
                </div>
                <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 8px">
                  <tr>
                    <td style="padding-right: 5px">
                      <a
                        href="https://www.linkedin.com/company/ace-alain-consulting-engineers/"
                        target="_blank"
                        title="LinkedIn"
                      >
                        <img
                          src="https://bohemiangeeks.com/wp-content/uploads/2025/05/linkedin-1.png"
                          alt="LinkedIn"
                          width="20"
                          height="20"
                          style="width: 20px; height: 20px; display: block; border: 0"
                        />
                      </a>
                    </td>
                    <td style="padding-right: 5px">
                      <a
                        href="https://x.com/engineers85203"
                        target="_blank"
                        title="Twitter"
                      >
                        <img
                          src="https://bohemiangeeks.com/wp-content/uploads/2025/05/x-colored.png"
                          alt="Twitter"
                          width="20"
                          height="20"
                          style="width: 20px; height: 20px; display: block; border: 0"
                        />
                      </a>
                    </td>
                    <td style="padding-right: 5px">
                      <a
                        href="https://www.instagram.com/aceconsultingeng/"
                        target="_blank"
                        title="Instagram"
                      >
                        <img
                          src="https://bohemiangeeks.com/wp-content/uploads/2025/05/instagram-colored.png"
                          alt="Instagram"
                          width="20"
                          height="20"
                          style="width: 20px; height: 20px; display: block; border: 0"
                        />
                      </a>
                    </td>
                    <td style="padding-right: 5px">
                      <a
                        href="https://www.facebook.com/ACEUAE1975"
                        target="_blank"
                        title="Facebook"
                      >
                        <img
                          src="https://bohemiangeeks.com/wp-content/uploads/2025/05/facebook-colored.png"
                          alt="Facebook"
                          width="20"
                          height="20"
                          style="width: 20px; height: 20px; display: block; border: 0"
                        />
                      </a>
                    </td>
                    ${
                      phoneNumber
                        ? `<td style="padding-right: 5px">
                      <a
                      href="tel:+971${phoneNumber.replace(
                        /-/g,
                        ""
                      )}"
                      target="_blank"
                      title="Call"
                    >
                      <img
                        src="https://bohemiangeeks.com/wp-content/uploads/2025/05/phone-call.png"
                        alt="Phone"
                        width="20"
                        height="20"
                        style="width: 20px; height: 20px; display: block; border: 0"
                      />
                    </a>
                    </td>`
                        : ""
                    }
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td>
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td colspan="2" style="padding-top: 10px; width: 100%">
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        style="width: 100%"
                      >
                        <tr>
                          <td>
                            <img
                              src="https://ace-uae.net/wp-content/uploads/2026/09/V3.png"
                              alt="locations"
                              width="310"
                              style="width: 310px; height: auto; display: block; border: 0"
                            />
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

  document
    .getElementById("signaturePreview")
    .setAttribute("data-signature", signatureHTML);
  document.getElementById("signaturePreview").innerHTML = signatureHTML;
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
