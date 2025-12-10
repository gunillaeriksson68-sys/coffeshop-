// Väntar tills hela HTML-dokumentet har laddats
document.addEventListener('DOMContentLoaded', function() {
    
    // Hämta knappen via dess ID
    const knapp = document.getElementById('bestallKnapp');
    
    // Hämta menysektionen via dess ID
    const menySektion = document.getElementById('meny');

    // Lägg till en händelselyssnare (event listener) för klick
    knapp.addEventListener('click', function() {
        // Scrolla mjukt till menysektionen
        menySektion.scrollIntoView({ behavior: 'smooth' });
        
        // Du kan lägga till en alert för att se att det fungerar (valfritt)
        // alert("Nu visas menyn!");
    });
    
    // Exempel på en annan enkel funktion (t.ex. logga när sidan laddas)
    console.log("KaffeHörnan hemsida laddad. Alltid redo för en kopp!");
});
