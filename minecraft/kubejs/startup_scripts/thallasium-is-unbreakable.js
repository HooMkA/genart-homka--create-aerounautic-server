BlockEvents.modification(event => {
    event.modify('betterend:thallasium_ore', block => {
        block.explosionResistance = 1200.0; 
    });
});