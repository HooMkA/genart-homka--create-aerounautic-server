// SkyOrigins bed rules
// Blocks bed use when NeoOrigins powers mark the player with skyorigins_no_bed_spawn.
// Used for:
// - Avian: invalid bed below required height
// - Dwarf: invalid bed above required height

BlockEvents.rightClicked(event => {
  const player = event.player
  const block = event.block

  if (!player || !block) return

  const id = String(block.id)

  const isBed =
    id.endsWith('_bed') ||
    id === 'minecraft:white_bed' ||
    id === 'minecraft:orange_bed' ||
    id === 'minecraft:magenta_bed' ||
    id === 'minecraft:light_blue_bed' ||
    id === 'minecraft:yellow_bed' ||
    id === 'minecraft:lime_bed' ||
    id === 'minecraft:pink_bed' ||
    id === 'minecraft:gray_bed' ||
    id === 'minecraft:light_gray_bed' ||
    id === 'minecraft:cyan_bed' ||
    id === 'minecraft:purple_bed' ||
    id === 'minecraft:blue_bed' ||
    id === 'minecraft:brown_bed' ||
    id === 'minecraft:green_bed' ||
    id === 'minecraft:red_bed' ||
    id === 'minecraft:black_bed'

  if (!isBed) return

  if (player.tags.contains('skyorigins_no_bed_spawn')) {
    event.cancel()

    player.tell(
      Text.of('Эта раса не может спать или сохранять точку возрождения на этой высоте.')
        .red()
    )
  }
})