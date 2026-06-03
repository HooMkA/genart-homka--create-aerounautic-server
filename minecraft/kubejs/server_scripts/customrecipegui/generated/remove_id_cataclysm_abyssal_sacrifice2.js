// [customrecipe] type=Remove | out=cataclysm:abyssal_sacrifice | in=cataclysm:abyssal_sacrifice2 | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'cataclysm:abyssal_sacrifice2' })
})
