EntityEvents.death('minecraft:player', (event) => {
    const player = event.entity;
    const level = event.level;

    for (let i = 9; i <= 35; i++) {
        let item = player.inventory.getItem(i);
        
        if (!item.isEmpty()) {
            let drop = level.createEntity('minecraft:item');
            drop.item = item;
            drop.setPosition(player.x, player.y, player.z);
            
            drop.setMotion(0, 0, 0); 
            drop.spawn();

            player.inventory.setItem(i, Item.empty);
        }
    }
});