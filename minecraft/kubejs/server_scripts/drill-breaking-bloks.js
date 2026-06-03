BlockEvents.broken('betterend:thallasium_ore', event => {
        if (event.player) {
            event.player.statusMessage = 'Этот блок слишком прочен для обычной кирки! Попробуй использовть бур из Create';
        }
        event.cancel();
});
