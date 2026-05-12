// ================= SIMPLE GENERATE (NO LOGIN REQUIRED) =================

document.addEventListener("DOMContentLoaded", () => {

  const generateBtn = document.getElementById("generateDesignBtn");

  if (generateBtn) {
    generateBtn.addEventListener("click", async () => {

      const prompt = document.getElementById("promptInput").value.trim();
      const region = document.getElementById("regionSelect").value;
      const patternType = document.getElementById("patternSelect").value;

      if (!prompt) {
        showToast("Please enter a prompt", "error");
        return;
      }

      showSpinner();

      try {
        const res = await fetch("http://localhost:5000/api/generate-design", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ prompt, region, patternType })
        });

        const data = await res.json();

        if (data.design) {
          // Show image
          document.getElementById("designContainer").innerHTML =
            `<img src="${data.design.imageUrl}" class="img-fluid">`;

          document.getElementById("promptUsed").innerText = data.design.prompt;
          document.getElementById("designInfo").style.display = "block";

          showToast("Design generated 🔥", "success");
        } else {
          showToast(data.error || "Error generating design", "error");
        }

      } catch (err) {
        showToast("Server error", "error");
      } finally {
        hideSpinner();
      }

    });
  }

});