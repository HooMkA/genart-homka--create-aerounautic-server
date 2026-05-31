// [customrecipe] type=Remove | out=minecraft:flint | in=create:splashing/gravel | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'create:splashing/gravel' })
})
