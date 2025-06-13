function sendToWhatsApp() {
  const uid = document.getElementById("uid").value.trim();
  const name = document.getElementById("name").value.trim();
  const service = document.getElementById("diamonds").value;
  const payment = document.getElementById("payment method ").value;
  const sender = document.getElementById("sender").value.trim();

  if (!uid || !service || !payment || !sender) {
    alert("Please fill all required fields.");
    return;
  }

  const message = `📩 NEW HACKING REQUEST

🔐 UID: ${uid}
👤 Name: ${name || "Not Provided"}
🛠️ Selected Service: ${service}
💸 Payment Method: ${payment}
📱 Email/Number: ${sender}
📷 Photo: Attached (User uploaded)

📞 Please contact the user for further action.`;

  const phoneNumber = "03448089399"; // WhatsApp number
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
}
