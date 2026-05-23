// [customrecipe] type=Remove | out=tfmg:fireproof_bricks | in=tfmg:crafting/materials/fireproof_bricks | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'tfmg:crafting/materials/fireproof_bricks' })
})
