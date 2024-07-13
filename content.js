function removeOdds(selector) {
    const observer = new MutationObserver(() => {
      const elements = document.querySelectorAll(selector);
      if (elements.length > 0) {
        elements.forEach(element => {
          element.textContent = "#EndGamblingAds";
          element.style.textAlign = "center";  // Center the text
          element.style.display = "flex";
          element.style.justifyContent = "center";
          element.style.alignItems = "center";
        });
      }
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  // AFL Ladder Page
  if (window.location.href.includes('ladder')) {
    removeOdds("#ced78f2d-02cf-4874-9991-7203f4da03e7 .stats-table__cell--betting-odds");
  }
  
  // AFL Fixtures Page
  if (window.location.href.includes('fixture')) {
    removeOdds("#main-content .fixtures__betting-odds");
  }
  