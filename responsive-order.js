const heroGrid = document.querySelector("main > section:first-child > .grid");
const introColumn = heroGrid?.children[0];
const profilePanel = heroGrid?.children[1];
const ctaBlock = introColumn?.children[3];
const hardSkillsBlock = introColumn?.children[4];

const mobileSlot = document.createElement("div");
mobileSlot.className = "mobile-profile-slot";

const moveProfilePanel = () => {
  if (!heroGrid || !introColumn || !profilePanel || !ctaBlock || !hardSkillsBlock) {
    return;
  }

  const isMobile = window.matchMedia("(max-width: 1023.98px)").matches;

  if (isMobile) {
    if (!mobileSlot.isConnected) {
      ctaBlock.insertAdjacentElement("afterend", mobileSlot);
    }

    if (profilePanel.parentElement !== mobileSlot) {
      mobileSlot.append(profilePanel);
    }

    return;
  }

  if (profilePanel.parentElement !== heroGrid) {
    heroGrid.append(profilePanel);
  }

  mobileSlot.remove();
};

moveProfilePanel();
window.addEventListener("resize", moveProfilePanel);
