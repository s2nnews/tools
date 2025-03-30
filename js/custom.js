//////////////////////////////
//  custom.js
//////////////////////////////

// 1) Define showTab() in the global scope:
function showTab(tabId) {
    // Hide all .tab-content elements
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
      tab.classList.remove('active');
    });
  
    // Show the matching .tab-content
    const currentTab = document.getElementById('tab-' + tabId);
    if (currentTab) {
      currentTab.classList.add('active');
    }
  
    // Remove .active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(btn => {
      btn.classList.remove('active');
    });
  
    // Add .active to the clicked button
    // (We look for the button whose onclick exactly matches `showTab('XYZ')`)
    const clickedButton = [...tabButtons].find(
      btn => btn.getAttribute('onclick') === `showTab('${tabId}')`
    );
    if (clickedButton) {
      clickedButton.classList.add('active');
    }
  }
  
  // 2) Keep your existing jQuery code inside document.ready:
  jQuery(document).ready(function ($) {
    // Open galleries on menu click
    $(".open-gallery, .open-gallery2, .open-gallery3, .open-gallery4, .open-gallery5, .open-gallery6, .open-gallery7, .open-gallery8, .open-gallery9, .open-gallery10, .open-gallery11, .open-gallery12").click(function (e) {
      e.preventDefault();
      // e.g. "open-gallery" becomes "popup-gallery" for the .magnificPopup() container
      $("." + $(this).attr("class").split(" ")[0].replace("open-", "popup-") + " a:first").click();
    });
  
    // Initialize Magnific Popup for all galleries
    $(".popup-gallery, .popup-gallery2, .popup-gallery3, .popup-gallery4, .popup-gallery5, .popup-gallery6, .popup-gallery7, .popup-gallery8, .popup-gallery9, .popup-gallery10, .popup-gallery11, .popup-gallery12").magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-img-mobile",
      closeBtnInside: false,
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
        tPrev: "Previous",
        tNext: "Next"
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: (item) => item.el.attr("title") || ""
      }
    });
  });
  
