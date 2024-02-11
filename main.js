
      var tablinks = document.getElementsByClassName("tab-links");
      var tabcontents = document.getElementsByClassName("tab-contents");

      function opentab(tabname) {
        for (tablink of tablinks) {
          tablink.classList.remove("active-link");
        }

        for (tabcontent of tabcontents) {
          tabcontent.classList.remove("tab-skills");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("tab-skills");
      }
    

    
      var sidemeu = document.getElementById("sidemenu");

      function openmenu() {
        sidemeu.style.right = "0";
      }

      function closemenu() {
        sidemeu.style.right = "-200px";
      }
    

    // ......gogole forms link...

      const scriptURL =
        "https://script.google.com/macros/s/AKfycbyt_qqzgsnrZsfXNhVow5tQ5ihf3su6G-15QOOLrJtiQeklW3JQgHK73ViYV5f0exmgMg/exec";
      const form = document.forms["submit-to-google-sheet"];
      const msg = document.getElementById("msg");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            alert("Thank you! Your message sent successfully.");
            setTimeout(() => {
              alert(" ");
            }, 5000);
            form.reset();
          })

          .then(() => {
            window.location.reload();
          })
          .catch((error) => console.error("Error!", error.message));
      });
    
    // parallex effects
    window.addEventListener("scroll", function () {
        const header = document.getElementById("header");
        const about = document.getElementById("about");
        const scrollPosition = window.scrollY;

        // Parallax scrolling effect
        header.style.backgroundPositionY = scrollPosition * 0.5 + "px";

      });
    
