// [customrecipe] type=Remove | out=create:cart_assembler | in=create:crafting/kinetics/cart_assembler | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'create:crafting/kinetics/cart_assembler' })
})
