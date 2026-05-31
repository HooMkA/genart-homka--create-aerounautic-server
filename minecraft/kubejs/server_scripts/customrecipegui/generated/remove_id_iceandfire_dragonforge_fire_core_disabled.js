// [customrecipe] type=Remove | out=iceandfire:dragonforge_fire_core_disabled | in=iceandfire:dragonforge_fire_core_disabled | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'iceandfire:dragonforge_fire_core_disabled' })
})
