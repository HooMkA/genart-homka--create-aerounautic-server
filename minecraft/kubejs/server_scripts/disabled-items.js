//Boats
/*ServerEvents.recipes(event => {
    event.remove({ output: '#minecraft:boats' })
})*/
const Boat = Java.loadClass('net.minecraft.world.entity.vehicle.Boat')
ItemEvents.entityInteracted(event => {
    if (event.target instanceof Boat) {
        event.player.tell('Этот транспорт слишком маленький, возможно тебе стоит сделать что-то из Create Aeronatics, чтобы уместить свою толстую попу.')
        event.cancel()
    }
})
//Horses
const AbstractHorse = Java.loadClass('net.minecraft.world.entity.animal.horse.AbstractHorse')
ItemEvents.entityInteracted(event => {
    if (event.target instanceof AbstractHorse) {
        event.player.tell('Согласно решению Кубовской Конвенции, перевозка пассажиров твоей комплекции на лошадях является насилием над животными, а значит, запрещена!')
        event.cancel()
    }
})
//Immersive Aircraft
ServerEvents.recipes(event => {
    event.remove({ mod: 'immersive_aircraft' })
})
ItemEvents.entityInteracted(event => {
    if (
        event.target.type.startsWith('immersive_aircraft:') &&
        event.target.type !== 'immersive_aircraft:quadrocopter'
    ) {
        event.player.tell('Этот транспорт слишком маленький, возможно тебе стоит сделать что-то из Create Aeronatics, чтобы уместить свою толстую попу.')
        event.cancel()
    }
})
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('immersive_aircraft:quadrocopter', 1),
    [
      'ABA',
      ' C ',
      'ADA'
    ],
    {
      A: 'create:propeller',
      B: 'simulated:red_portable_engine',
      C: 'minecraft:oak_planks',
      D: 'create:copper_casing'
    }
  )
})

//Charcoal
ServerEvents.recipes(event => {
    
    event.remove({
        type: 'minecraft:smelting',
        output: 'minecraft:charcoal'
    });

   
    event.remove({
        type: 'minecraft:smoking',
        output: 'minecraft:charcoal'
    });

    event.remove({
        type: 'minecraft:blasting',
        output: 'minecraft:charcoal'
    });
});
//Shulker
ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:shulker_box' });

    const shulkers = [
        "white", "orange", "magenta", "light_blue",
        "yellow", "lime", "pink", "gray",
        "light_gray", "cyan", "purple", "blue",
        "brown", "green", "red", "black"
    ];

    shulkers.forEach(color => {
        event.remove({ output: `minecraft:${color}_shulker_box` });
    });
});

LootJS.lootTables(event => {

    event.getLootTable('minecraft:blocks/shulker_box')
        .firstPool()
        .removeItem('minecraft:shulker_box');

    const shulkers = [
        "white", "orange", "magenta", "light_blue",
        "yellow", "lime", "pink", "gray",
        "light_gray", "cyan", "purple", "blue",
        "brown", "green", "red", "black"
    ];

    shulkers.forEach(color => {
        event.getLootTable(`minecraft:blocks/${color}_shulker_box`)
            .firstPool()
            .removeItem(`minecraft:${color}_shulker_box`);
    });
});
//Jetpacks
ServerEvents.recipes(event => {
    event.remove({ output: 'create_sa:brass_jetpack_chestplate' });
    event.remove({ output: 'create_sa:andesite_jetpack_chestplate' });
    event.remove({ output: 'create_sa:copper_jetpack_chestplate' });
    event.remove({ output: 'create_sa:netherite_jetpack_chestplate' });
});
//Saplings
LootJS.modifiers((event) => {
    event.addBlockModifier('#minecraft:leaves')
        .randomChance(0.9)
        .removeLoot('#minecraft:saplings');
});
//Resorces Mob Drop
LootJS.modifiers((event) => {
    event.addEntityModifier('minecraft:iron_golem')
        .removeLoot('minecraft:iron_ingot');
});
LootJS.modifiers((event) => {
    event.addEntityModifier('minecraft:zombified_piglin')
        .removeLoot('minecraft:gold_nugget')
        .removeLoot('minecraft:gold_ingot');
});
//Steam Engine Passive Heating
ServerEvents.tags('block', (event) => {
    event.removeAll('create:passive_boiler_heaters');
});