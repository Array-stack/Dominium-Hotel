// Definition der Funktion updateCounter
function updateCounter(button, value, minValue, counterClass) {
  var optionCounter = button.closest(".optionCounter");
  if (!optionCounter) {
    console.error("Fehler: optionCounter nicht gefunden");
    return; // Wenn das Element nicht gefunden wird, die Funktion beenden
  }

  var counterNumber = optionCounter.querySelector(".optionCounterNumber");
  if (!counterNumber) {
    console.error("Fehler: Counter-Nummer nicht gefunden");
    return; // Wenn das Element nicht gefunden wird, die Funktion beenden
  }

  var currentValue = parseInt(counterNumber.textContent) || 0;
  var newValue = Math.max(minValue, currentValue + value);

  console.log("Counter Nummer vor Aktualisierung:", currentValue);
  console.log("Neuer Wert:", newValue);

  counterNumber.textContent = newValue;

  // Aktualisiere den Text im HeaderSearchText-Span nur, wenn erforderlich
  if (updateHeaderText()) {
    console.log(
      "Header Text nach Counter Aktualisierung:",
      document.querySelector(".HeaderSearchText").textContent
    );

    // Aktualisiere den entsprechenden Counter im Text
    document.querySelector(counterClass).textContent = newValue;
  }
}
// Definition der Funktion updateHeaderText
function updateHeaderText() {
  var headerSearchText = document.querySelector(".HeaderSearchText ");
  if (!headerSearchText) {
    console.error("Fehler: headerSearchText nicht gefunden");
    return false; // Wenn das Element nicht gefunden wird, die Funktion beenden
  }

  var adultCounterElement = document.querySelector(".adultCounter");
  var childrenCounterElement = document.querySelector(".childrenCounter");
  var roomsCounterElement = document.querySelector(".roomsCounter");

  if (!adultCounterElement || !childrenCounterElement || !roomsCounterElement) {
    console.error("Fehler: Counter-Element nicht gefunden");
    return false; // Wenn eines der Counter-Elemente nicht gefunden wird, die Funktion beenden
  }

  var adultCounter = adultCounterElement.textContent;
  var childrenCounter = childrenCounterElement.textContent;
  var roomsCounter = roomsCounterElement.textContent;

  var newText =
    "Adult:" +
    adultCounter +
    " Children:" +
    childrenCounter +
    " Rooms:" +
    roomsCounter;

  // Überprüfen, ob sich der Text geändert hat, bevor er aktualisiert wird
  if (headerSearchText.textContent !== newText) {
    console.log(
      "Header Text vor Aktualisierung:",
      headerSearchText.textContent
    );

    console.log(
      "Header Text nach Aktualisierung:",
      headerSearchText.textContent
    );
    return true; // Aktualisierung erfolgreich
  }

  return false; // Keine Aktualisierung erforderlich
}

// Event-Listener beim Laden der Seite
document.addEventListener("DOMContentLoaded", function () {
  // Beispielaufrufe für die Counter-Buttons
  document
    .querySelector(".adultCounterButton")
    .addEventListener("click", function () {
      console.log("Adult Counter Button geklickt");
      updateCounter(this, 1, 1, ".adultCounter");
    });

  document
    .querySelector(".childrenCounterButton")
    .addEventListener("click", function () {
      console.log("Children Counter Button geklickt");
      updateCounter(this, 1, 0, ".childrenCounter");
    });

  document
    .querySelector(".roomsCounterButton")
    .addEventListener("click", function () {
      console.log("Rooms Counter Button geklickt");
      updateCounter(this, 1, 1, ".roomsCounter");
    });

  document
    .getElementById("headerSearchText")
    .addEventListener("click", function () {
      var options = document.querySelector(".options");
      options.style.display =
        options.style.display === "block" ? "none" : "block";
    });
});


// Globale Variable, um den Zustand des Buttons zu speichern
var isButtonClicked = false;

// Globale Initialisierung von flatpickr
var datePicker = flatpickr("#datePicker", {
  mode: "range",
  dateFormat: "d-m-Y",
});


// Funktion, die bei Klick auf den Button aufgerufen wird
function handleButtonClick() {
  // Die ausgewählten Daten von flatpickr abrufen
  var selectedDates = datePicker.selectedDates;

  // Setze den Zustand des Buttons auf true
  isButtonClicked = true;
  checkAvailability(selectedDates);
}

// Finde den Button im DOM
var checkAvailabilityButton = document.getElementById(
  "checkAvailabilityButton"
);
// Füge einen Event Listener für den Klick auf den Button hinzu
 checkAvailabilityButton.addEventListener("click", handleButtonClick);
 
function checkAvailability(selectedDates) {
  
  if (selectedDates && selectedDates.length === 2) {
    var checkInDate = selectedDates[0];
    var checkOutDate = selectedDates[1];

    var timeDifference = checkOutDate.getTime() - checkInDate.getTime();
    var nights = Math.ceil(timeDifference / (1000 * 3600 * 24));

    var adultCounterElement = document.querySelector(".adultCounter");
    var childrenCounterElement = document.querySelector(".childrenCounter");
    var roomsCounterElement = document.querySelector(".roomsCounter");
    
      

    if (
      !adultCounterElement ||
      !childrenCounterElement ||
      !roomsCounterElement
    ) {
      console.error("Fehler: Counter-Element nicht gefunden");
      return false; // Wenn eines der Counter-Elemente nicht gefunden wird, die Funktion beenden
    }

    // Holen Sie sich die Werte für Erwachsene, Kinder und Zimmer
    var numAdults = parseInt(adultCounterElement.textContent);
    var numChildren = parseInt(childrenCounterElement.textContent);
    var numRooms = parseInt(roomsCounterElement.textContent);
        
    optionschalter()
    // Hier können Sie die Werte weiter verwenden oder aktualisieren
    updateReservationDetails(
      checkInDate,
      checkOutDate,
      nights,
      numAdults,
      numChildren,
      numRooms
    );

    
  }
}

// hier ist option schalter aus ein 
function optionschalter(){
  var options = document.querySelector(".options");
  options.style.display =  options.style.display === "none" ? "block" : "none";
}

// Funktion zum Aktualisieren der Reservierungsdetails
function updateReservationDetails(
  checkInDate,
  checkOutDate,
  nights,
  numAdults,
  numChildren,
  numRooms
) {
  // Hier können Sie die Reservierungsdetails aktualisieren
  console.log("Check-in Datum:", checkInDate);
  console.log("Check-out Datum:", checkOutDate);

  console.log("Anzahl der Nächte:", nights);
  console.log("Anzahl der Erwachsenen:", numAdults);
  console.log("Anzahl der Kinder:", numChildren);
  console.log("Anzahl der Zimmer:", numRooms);

  // Fügen Sie hier den Code zum Aktualisieren der Webseite mit den neuen Werten ein
  updateReservationUI(
    checkInDate,
    checkOutDate,
    nights,
    numAdults,
    numChildren,
    numRooms
  );
}

// Funktion zum Aktualisieren der Webseite mit den neuen Werten
function updateReservationUI(
  checkInDate,
  checkOutDate,
  nights,
  numAdults,
  numChildren,
  numRooms
) {
  // die Webseite aktualisieren, z.B. Text in Divs ändern
  document.getElementById("arrivalDate").textContent =
    "Date d'arrivée: " + formatFrenchDate(checkInDate);
  document.getElementById("departureDate").textContent =
    "Date de départ: " + formatFrenchDate(checkOutDate);
  document.getElementById(
    "reservationDetails"
  ).textContent = `${numAdults} Adult, ${numChildren} Children, ${numRooms} Rooms, ${nights} nuit,`;
  document.getElementById("totalPrice").textContent = "Total Price: 0 Euro";
}

// Funktion zur Formatierung des Datums im französischen Format
function formatFrenchDate(date) {
  var options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("fr-FR", options);
}

// NodeList aller Elemente mit der Klasse ".updateprice" abrufen
var updateButtons = document.querySelectorAll(".updateprice");

// Event-Listener für jedes Element in der NodeList hinzufügen
updateButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Preisinformation aus dem geklickten Button extrahieren
    var clickedButtonPrice = parseFloat(button.closest('.price-details').querySelector(".price").textContent);
    // Zugriff auf die übergeordnete Zimmerkategorie
    var zimmerKategorie = button.closest('.Rooms');
    
    // Zugriff auf das h3-Element in der aktuellen Zimmerkategorie
    var clickedButtonZinfo = zimmerKategorie.querySelector(".titel").textContent;
    console.log(clickedButtonZinfo);
    // Hier können Sie die nights-Variable aktualisieren oder initialisieren, falls erforderlich
    calculateNights();

    // Rufen Sie die Funktion updatePrice auf und übergeben Sie nights und den Preis des geklickten Buttons
    updatePrice(nights, clickedButtonPrice,clickedButtonZinfo);
  });
});

// Funktion, die nights berechnet
function calculateNights() {
  var selectedDates = datePicker.selectedDates;

  if (selectedDates && selectedDates.length === 2) {
    var checkInDate = selectedDates[0];
    var checkOutDate = selectedDates[1];

    var timeDifference = checkOutDate.getTime() - checkInDate.getTime();
    nights = Math.ceil(timeDifference / (1000 * 3600 * 24));
  }
}

// Die updatePrice-Funktion mit einem Promise
function updatePrice(nights, clickedButtonPrice, clickedButtonZinfo){
  return new Promise((resolve, reject) => {
    // Überprüfen, ob der Button geklickt wurde
    if (!isButtonClicked) {
      console.log(
        "Button wurde nicht geklickt. Die Funktion wird nicht ausgeführt."
      );
      reject("Button wurde nicht geklickt.");
      return;
    }

    // die erforderlichen Parameter einfügen oder berechnen
    var totalPriceElement = document.getElementById("totalPrice");
    
    var roomsCounterElement = document.querySelector(".roomsCounter");
    var numRooms = parseInt(roomsCounterElement.textContent);

    // Überprüfung, ob die Übernachtungen gültig sind
    if (isNaN(nights) || nights <= 0) {
      console.error("Fehler: Ungültige Anzahl der Übernachtungen");
      reject("Ungültige Anzahl der Übernachtungen.");
      return;
    }

    // Berechnen Sie den neuen Gesamtpreis basierend auf der Übernachtungsanzahl und dem aktuellen Preis
    var newTotalPrice = nights *  clickedButtonPrice;

    //test 1
    document.getElementById("zimmer-info").textContent = clickedButtonZinfo ;
    

    // Aktualisieren Sie das Gesamtpreis-Div mit dem neuen Wert
    totalPriceElement.textContent = "Total " + numRooms  * newTotalPrice.toFixed(2); // Zeigt den Gesamtpreis auf zwei Dezimalstellen an

    // Resolve das Promise, um anzuzeigen, dass die Funktion erfolgreich abgeschlossen wurde
    resolve();
  });
}

//function checkAvailability.. End//

// JavaScript für die Hamburger-Menü-Interaktion-Start
document.addEventListener("DOMContentLoaded", function () {
  let hamburgerMenu = document.createElement("div");
  hamburgerMenu.className = "hamburger-menu"; // Füge die Klasse hinzu
  document.body.appendChild(hamburgerMenu); // Füge das Element dem DOM hinzu

  hamburgerMenu.addEventListener("click", function () {
    // JavaScript für die Hamburger-Menü-Interaktion
    document.addEventListener("DOMContentLoaded", function () {
      let hamburgerMenu = document.querySelector(".hamburger-menu");
      let nav = document.querySelector(".nav");

      hamburgerMenu.addEventListener("click", function () {
        // Überprüfe, ob das Menü gerade angezeigt wird
        if (nav.style.display === "" || nav.style.display === "none") {
          // Wenn es nicht angezeigt wird, dann zeige es an
          nav.style.display = "flex"; // oder 'block', abhängig von Ihrer bevorzugten Anzeigeart
        } else {
          // Wenn es angezeigt wird, dann verstecke es
          nav.style.display = "none";
        }
      });
    });
  });
});
// JavaScript für die Hamburger-Menü-Interaktion-End

/* galarie javascript */

/* document.addEventListener("DOMContentLoaded", function () {
  let prev = document.querySelector(".prev");
  let next = document.querySelector(".next");
  let box = document.querySelector(".box");

  let degrees = 0;

  prev.addEventListener("click", function () {
    degrees += 45;
    box.style.transform = `perspective(1000px) rotateY(${degrees}deg)`;
  });

  next.addEventListener("click", function () {
    degrees -= 45;
    box.style.transform = `perspective(1000px) rotateY(${degrees}deg)`;
  });
});
 */


