LootJS.modifiers((event) => {
    const itemsToRemove = [
        'minecraft:blaze_rod',
        'sophisticatedbackpacks:backpack',
        'sophisticatedbackpacks:copper_backpack',
        'sophisticatedbackpacks:gold_backpack',
        'sophisticatedbackpacks:iron_backpack',
        'betterend:thallasium_ingot',
        'betterend:thallasium_raw',
    ];
    event.addTableModifier(LootType.CHEST).removeLoot(itemsToRemove);
});
//Item chest drop chance nerf
LootJS.modifiers((event) => {
    const itemsToNerf = [
        'minecraft:gold_block',
        'minecraft:diamond',
        "minecraft:iron_ingot",
        "minecraft:gold_ingot",
        "minecraft:netherite_scrap",
        "minecraft:gold_block",
        "minecraft:iron_block",
        "minecraft:ancient_debris",
        "minecraft:diamond_chestplate",
        "minecraft:diamond_leggings",
        "minecraft:diamond_boots",
        "minecraft:diamond_helmet",
        "minecraft:diamond_sword",
        "minecraft:diamond_pickaxe",
        "minecraft:diamond_axe"
    ];

    itemsToNerf.forEach(item => {
        event.addTableModifier(LootType.CHEST)
            .randomChance(0.67)
            .removeLoot(item);
    });
});