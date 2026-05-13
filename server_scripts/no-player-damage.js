
// Отрубаем игроку урон по определённым мобам, а так же добавляем звук что урон не прошёл

EntityEvents.beforeHurt( event => {

    const entity = event.entity
    const source = event.source
    
    // массив сущностей по которым не будет проходить урон, можно расширить
    // и проверка
    let allowedEntities = [
        "minecraft:ender_dragon"
        //"minecraft:zombie"
        //"minecraft:skeleton"
    ]
    if (!allowedEntities.includes(entity.getType())) {
        return
    }

    // Прямая сущность урона
    const direct = source.immediate
    
    // кто атаковал
    const attacker = source.actual
    if (!attacker) return

    //если не игрок завершаем скрипт раньше конца
    if (attacker.type != "minecraft:player") {
        return
    }
    // докидываем звук что не прошёл урон
    attacker.playNotifySound(
        //"minecraft:block.note_block.bass",
        //"minecraft:block.anvil.land",
        "minecraft:item.shield.block",
        "players",
        0.3,
        1.7
    )
    //отменяем
    event.cancel()

})

// Для отмены спавна
/*EntityEvents.checkSpawn( event => {
    if (event.getEntity().getType() == "minecraft:zombie") {
        event.cancel()
    }

})*/