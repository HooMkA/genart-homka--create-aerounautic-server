// [customrecipe] type=Remove | out=scguns:jetpack_module | in=minecraft:crafting | heat=output+type
ServerEvents.recipes(event => {
  event.remove({ output: 'scguns:jetpack_module', type: 'minecraft:crafting' })
})
