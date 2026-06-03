// [customrecipe] type=Shaped 3x3 | out=sophisticatedbackpacks:backpack | in=minecraft:string,create:brass_ingot,born_in_chaos_v1:monster_skin,minecraft:chest
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('sophisticatedbackpacks:backpack', 1),
    [
      'ABA',
      'CDC',
      'CBC'
    ],
    {
      A: 'minecraft:string',
      B: 'create:brass_ingot',
      C: 'born_in_chaos_v1:monster_skin',
      D: 'minecraft:chest'
    }
  )
})
