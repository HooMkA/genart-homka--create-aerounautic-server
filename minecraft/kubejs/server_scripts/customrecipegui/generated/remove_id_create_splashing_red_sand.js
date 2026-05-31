// [customrecipe] type=Remove | out=minecraft:gold_nugget | in=create:splashing/red_sand | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'create:splashing/red_sand' })
})
