ItemEvents.entityInteracted(event => {
    let target = event.target;
    
    if (target.type === 'minecraft:villager') {
        
        let villagerData = target.nbt.VillagerData;
        
        if (villagerData && villagerData.profession === 'scguns:gunsmith') {
            event.player.tell('Этот житель был уволен за продажу нелегального оружия!');
            target.mergeNbt('{VillagerData:{profession:"minecraft:unemployed",level:1}}');
            event.cancel();
        }
    }
});

ItemEvents.entityInteracted(event => {
    if (event.level.isClientSide()) return;
    
    let target = event.target;
    
    if (target.type === 'minecraft:wandering_trader') {
        let offers = target.getOffers();
        
        if (offers) {
            for (let i = offers.size() - 1; i >= 0; i--) {
                if (offers.get(i).result.id.startsWith('scguns:')) {
                    offers.remove(i);
                }
            }
        }
    }
});