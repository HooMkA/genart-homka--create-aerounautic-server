// [customrecipe] type=Remove | out=minecraft:quartz | in=create:splashing/soul_sand | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'create:splashing/soul_sand' })
})
