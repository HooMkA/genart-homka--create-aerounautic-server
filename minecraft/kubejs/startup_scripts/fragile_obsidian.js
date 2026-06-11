BlockEvents.modification(event => {
    event.modify(/.*obsidian.*/, block => {
        block.explosionResistance = 6.0;
    });
});