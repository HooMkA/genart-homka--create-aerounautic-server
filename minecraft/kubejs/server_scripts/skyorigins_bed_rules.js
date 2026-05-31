// SkyOrigins bed height rules for KubeJS 1.21.1
// Put this file in: kubejs/server_scripts/skyorigins_bed_rules.js
//
// NeoOrigins prevent_action:sleep blocks sleeping, but in this pack some bed interactions can still set
// the respawn point. This script cancels right-clicking beds while the originpack-maintained tag is present.

BlockEvents.rightClicked(event => {
  const player = event.player
  if (!player) return

  const blockId = String(event.block.id)
  if (!blockId.endsWith('_bed')) return

  // NeoOrigins powers add/remove this vanilla entity tag once per second:
  // - Avian below Y=110
  // - Dwarf above Y=72
  const tags = player.tags
  const hasTag = tags && (tags.contains ? tags.contains('skyorigins_no_bed_spawn') : Array.from(tags).includes('skyorigins_no_bed_spawn'))
  if (!hasTag) return

  event.cancel()
  player.tell('§cЭта раса не может использовать кровать на этой высоте. Точка возрождения не сохранена.')
})
