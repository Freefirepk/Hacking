function sendToWhatsApp() {
  const uid = document.getElementById("uid").value.trim();
  const name = document.getElementById("name").value.trim();
  const service = document.getElementById("diamonds").value;
  const paymentMethod = document.getElementById("payment method ").value;
  const sender = document.getElementById("sender").value.trim();

  if (!uid || !service || !paymentMethod || !sender) {
    alert("⚠️ Zaroori fields complete karein.");
    return;
  }

  const message = `📲 HACKING SURVICE REQUEST RECEIVED:

🆔 UID: ${uid}
👤 Name: ${name || "Not Provided"}
🛠️ Selected Survice: ${service}
💳 Payment Method: ${paymentMethod}
📞 Contact Email/Number: ${sender}
📷 ID Photo: (User Uploaded) — Please Check

🚀 Jaldi contact karein user se!`;

  // Aapka WhatsApp number international format me (Pakistan: +92)
  const whatsappNumber = "923448089399";
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
