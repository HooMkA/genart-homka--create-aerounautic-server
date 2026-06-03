ServerEvents.recipes(event => {
    const itemsToBan = [
        'minecraft:amethyst_block',
        'quark:glow_shroom_block'
    ];

    itemsToBan.forEach(item => {
        event.remove({ output: item });
    });
    event.remove({
        type: 'chipped:workbench', 
        output: 'quark:glow_shroom_block'
    });
});
LootJS.modifiers(event => {
    event.addBlockModifier(['minecraft:amethyst_block', 'quark:glow_shroom_block'])
        .removeLoot(/.*/);
});
LootJS.modifiers(event => {
    event.addTableModifier(LootType.CHEST)
        .removeLoot(['minecraft:amethyst_block', 'quark:glow_shroom_block']);
});
ServerEvents.tags('item', event => {
    event.get('chipped:mossy_cobblestone').remove('quark:glow_shroom_block')
})
ServerEvents.tags('block', event => {
    event.get('chipped:mossy_cobblestone').remove('quark:glow_shroom_block')
})


BlockEvents.rightClicked(event => {
    const { item, player, level, block, hand } = event;
    if (hand !== 'MAIN_HAND') return;


    if (!item.isEmpty()) return;

    const blockMap = {
        'Y': 'quark:glow_shroom_block',
        'A': 'create:railway_casing',
        'X': 'minecraft:amethyst_block',
        'B': 'supplementaries:blaze_rod'
    };

    const validIds = Object.values(blockMap);
    if (!validIds.includes(block.id)) return;

    if (player.inventory.count('minecraft:ender_pearl') < 3) return;

    const patterns = [
        [
            "OOYYYOO",
            "OYXAXYO",
            "YXXBXXY",
            "YXXBXXY",
            "YXXBXXY",
            "OYXAXYO",
            "OOYYYOO"
        ],
        [
            "OOYYYOO",
            "OYXXXYO",
            "YXXXXXY",
            "YABBBAY",
            "YXXXXXY",
            "OYXXXYO",
            "OOYYYOO"
        ]
    ];

    let foundCenter = null;
    let matchedPattern = null;

    searchLoop:
    for (let dx = -3; dx <= 3; dx++) {
        for (let dz = -3; dz <= 3; dz++) {
            let cx = block.x + dx;
            let cy = block.y;
            let cz = block.z + dz;

            for (let p = 0; p < patterns.length; p++) {
                let isMatch = true;
                let pattern = patterns[p];

                checkLoop:
                for (let r = 0; r < 7; r++) {
                    for (let c = 0; c < 7; c++) {
                        let char = pattern[r][c];
                        if (char !== 'O') {
                            let ix = c - 3;
                            let iz = r - 3;
                            let currentBlock = level.getBlock(cx + ix, cy, cz + iz);

                            if (currentBlock.id !== blockMap[char]) {
                                isMatch = false;
                                break checkLoop;
                            }
                        }
                    }
                }

                if (isMatch) {
                    foundCenter = { x: cx, y: cy, z: cz };
                    matchedPattern = pattern;
                    break searchLoop;
                }
            }
        }
    }

    if (foundCenter) {

        if (!player.isCreative()) {
            player.runCommandSilent('clear @s minecraft:ender_pearl 3');
        }

        for (let r = 0; r < 7; r++) {
            for (let c = 0; c < 7; c++) {
                let char = matchedPattern[r][c];
                if (char !== 'O') {
                    let ix = c - 3;
                    let iz = r - 3;
                    level.getBlock(foundCenter.x + ix, foundCenter.y, foundCenter.z + iz).set('minecraft:air');
                }
            }
        }

        let drop = level.createEntity('minecraft:item');
        drop.item = Item.of('minecraft:ender_eye', 3);
        drop.setPosition(foundCenter.x + 0.5, foundCenter.y + 0.5, foundCenter.z + 0.5);
        drop.setMotion(0, 0.2, 0);
        drop.spawn();

        event.server.runCommandSilent(`playsound minecraft:entity.ender_eye.death block @a ${foundCenter.x} ${foundCenter.y} ${foundCenter.z} 1 1`);
        player.swing();
        event.cancel();
    }
});