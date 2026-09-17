const oM = [
    {
      id: 0,
      name: "Finance Dashboard",
      description: "A comprehensive dashboard for tracking finances, transactions, and expenses.",
      image: "images/projects/financedashboard.png",
      tags: ["react", "javascript", "ui"],
      liveview: "https://financedashboardui-nu.vercel.app/login",
      alt: "Finance Dashboard",
    },
    {
      id: 1,
      name: "Real Estate",
      description: "A modern platform for browsing, buying, renting, and listing properties.",
      image: "images/projects/realestate.png",
      tags: ["react", "javascript", "css"],
      liveview: "https://realestate-five-liard.vercel.app/",
      alt: "Real Estate",
    },
     {
      id: 2,
      name: "Mini Social Media",
      description: "A lightweight social feed platform for sharing posts, liking, and interacting.",
      image: "images/projects/socialmedia.png",
      tags: ["react", "mongodb", "express"],
      liveview: "https://socialfeed-swart.vercel.app/",
      alt: "Mini Social Media",
    },
    {
      id: 3,
      name: "Split App",
      description: "An expense sharing application to easily split bills, track shared expenses, and manage group balances.",
      image: "images/projects/projecthub.png",
      tags: ["react", "javascript", "express", "mongodb"],
      liveview: "https://sathwiksplitfrontend.onrender.com/",
      alt: "Split App",
    },
    {
      id: 4,
      name: "Doctor Appointment Website",
      description: "A healthcare management platform for booking doctor appointments, managing schedules, and patient records.",
      image: "images/projects/guru-drishti.jpg",
      tags: ["react", "javascript", "express", "mongodb"],
      liveview: "https://hospitalmanagement-frontend-m8q0.onrender.com",
      alt: "Doctor Appointment Website",
    },
  ];
  
  class lM {
    constructor() {
      he(this, "domElements", {
        renderContainer: document.getElementById("work-render-container"),
      });
      (this.experience = new ye()),
        (this.sounds = this.experience.sounds),
        (this.items = oM),
        (this.tags = aM),
        this.renderItems();
    }
  
    renderItems() {
      this.items.forEach((e) => {
        this.domElements.renderContainer.insertAdjacentHTML(
          "beforeend",
          `
              <div id="work-item-${e.id}" class="work-item-container column">
                  <img class="work-item-image" src="${e.image}" alt="${
            e.alt
          }" height="300" width="334"/>
                  <div class="work-item-content-container">
                      <h3>${e.name}</h3>
                      <div class="work-item-tag-container row">
                          ${this.renderTags(e.tags)}
                      </div>
                      <span>${e.description}</span>
                  </div>
                  <div class="work-item-button-container row">
                      ${this.renderButtons(e)}
                  </div>
                  ${e.bannerIcons ? this.renderBanner(e) : ""}
              </div>
              `
        ),
          this.addEventListenersToCard(e);
      });
    }
  
    renderBanner(e) {
      let t = "";
      return (
        (t = `
              <div class="work-banner-container row center">
                  ${e.bannerIcons.map(
                    (n) =>
                      `<img src="${n.src}" alt="${n.alt}" height="64" width="64"/>`
                  )}
                  <span>Website Of<br>The Day</span>
              </div>
          `),
        t
      );
    }
  
    renderButtons(e) {
      // Only the Live View button will be rendered if available
      let t = "";
      if (e.liveview) {
        t = `
          <div id="work-item-orange-button-${e.id}" class="work-item-orange-button small-button center orange-hover" style="width: 100%; margin: 0;">
              Live View
          </div>`;
      } else {
        t = `
          <div id="work-item-gray-button-${e.id}" class="work-item-gray-button center" style="width: 100%; background: #a7adb8; cursor: unset;">
              Work in progress
          </div>`;
      }
      return t;
    }
  
    renderTags(e) {
      let t = "";
      for (let n = 0; n < e.length; n++) t += this.tags[e[n]];
      return t;
    }
  
    addEventListenersToCard(e) {
      const t = document.getElementById("work-item-" + e.id);
      t.addEventListener("click", () => {
        t.classList.contains("work-inactive-item-container") &&
          document
            .getElementById("work-item-0")
            .classList.contains("work-item-container-transition") &&
          ((this.experience.ui.work.cards.currentItemIndex = -e.id + 4),
          this.experience.ui.work.cards.updatePositions(),
          this.sounds.play("buttonClick"));
      });
  
      if (e.liveview) {
        document
          .getElementById("work-item-orange-button-" + e.id)
          .addEventListener("click", () => {
            window.open(e.liveview, "_blank").focus();
          });
      }
    }
  }
  
