---
title: Minecraft Java Edition - Snapshot 24w37a
date: 2024-09-11T15:54:04Z
updated: 2025-03-12T10:24:11Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/30165331213453-Minecraft-Java-Edition-Snapshot-24w37a
hash:
  h_01J7GWH47QRKF1RSJKF02RD0FJ: new-features
  h_01J7GWH47QQFZS5ZZMX3ZFBKS1: changes
  h_01J7GWH47QDQNG9SS3XC2KHRV6: ender-pearl-chunk-loading
  h_01J7GWH47QDJJVZ7WXPEC6ABS7: mob-conversion-details
  h_01J7GWH47QQHBG4SQM5GKCVB6B: technical-changes
  h_01J7GWH47QHXBB5FXDY8DFJD62: data-pack-version-53
  h_01J7GWH47QM0DF6QCYVATVM63V: loot-tables
  h_01J7GWH47QC1YTB42XTRJ78D1G: hero-of-the-village-gift-loot-tables
  h_01J7GWH47QB3NWMQYK7PQ7JT6Q: tags
  h_01J7GWH47Q5645TTMBBDCSGBQ1: item-tags
  h_01J7GWH47QMXQ3DSCFSGB3M00S: item-component-changes
  h_01J7GWH47QV8YVTNV3Y2GZVNAD: minecraftfire_resistant-minecraftdamage_resistant
  h_01J7GWH47QMY6BJFKKS4GB6Y5K: minecraftitem_name
  h_01J7GWH47QTC23X25W8G65RZ9G: minecraftpotion_contents
  h_01J7GWH47QMD3R117ZH1BBAK5T: minecraftequippable
  h_01J7GWH47Q9XDRGT9GE9KS24EP: addedminecraftdeath_protection
  h_01J7GWH47Q9PDZ8J5N9X3EHA0Y: predicates
  h_01J7GWH47QCQ8A9RS14TKCX4RP: salmonentity-sub-predicate
  h_01J7GWH47QB4WC3CHD0GKK4FH5: advancements
  h_01J7GWH47Q1K1321YAXMEV4JKR: triggers
  h_01J7GWH47QHRJ9MX5Q2NMSEQ78: minecraftkilled_by_crossbow-minecraftkilled_by_arrow
  h_01J7GWH47Q76CQKEZQXCM850KM: resource-pack-version-38
  h_01J7GWH47QGJAB9V62931S09ZT: gui-sprites
  h_01J7GWH47QG86HPQ5NTKHXDYR0: fixed-bugs-in-24w37a
  h_01J7GWH47RT1SAR7DYG7CM57TM: get-the-snapshot
---

Hi everyone! In this snapshot we have fixed the bug with Ender Pearls not teleporting the player to the point of impact. Ender Pearls will now also load chunks when thrown.  
  
Happy mining!

 

## New Features

## Changes

- Thrown Ender Pearls now load and tick chunks
- Added language support for High Norwegian

### Ender Pearl Chunk Loading

- Ender Pearls now ensure that the chunk they are in or travel into is always loaded and ticking
- They also load chunks when crossing to a new dimension, so that they can always continue to travel
- This ensures that Ender Pearls can always land, and makes cross dimensional Ender Pearl travelling more predictable
- Ender Pearls now unload when a player logs out, and reappear whenever that player logs back in, similar to how mounts currently behave

### Mob Conversion Details

In last week's snapshot, we fixed a bug related to which data gets transferred between mobs when converted from one type to another (ex: zombie to drowned). This week, we have reverted a few of those changes (health, attributes, and loot tables are no longer transferred).

- Here is a full list of tags, data, and other properties which get transferred when a mob is converted (only relevant for mobs that can have these properties):

  - AbsorptionAmount
  - active_effects
  - Age
  - AngerTime
  - AngryAt
  - ArmorDropChances
  - ArmorItems
  - Brain.memories.minecraft:angry_at.ttl
  - Brain.memories.minecraft:angry_at.value
  - CanBreakDoors
  - CanPickUpLoot
  - CustomNameVisible
  - CustomName
  - fall_distance
  - FallFlying
  - Fire
  - ForcedAge
  - HandDropChances
  - HandItems
  - HurtByTimestamp
  - HurtTime
  - Invulnerable
  - IsBaby
  - Leash
  - LeftHanded
  - Motion
  - NoAI
  - NoGravity
  - OnGround
  - Passengers
  - PersistenceRequired
  - PortalCooldown
  - Position
  - RootVehicle
  - Rotation
  - Silent
  - SleepingX
  - SleepingY
  - SleepingZ
  - Tags
  - Team  

- Mobs that split into several mobs rather than converting from one type into another **do not** transfer the following properties:

  - ArmorDropChances
  - ArmorItems
  - fall_distance
  - FallFlying
  - HandDropChances
  - HandItems
  - HurtByTimestamp
  - HurtTime
  - Leash
  - Motion
  - OnGround
  - Passengers
  - Position
  - Rotation
  - SleepingX
  - SleepingY
  - SleepingZ  
      

- Some properties mentioned in MC-88967 are intentionally not transferred in any conversion:

  - Attributes
  - Gossips
  - Health
  - Loot tables
  - VillagerData
  - Xp

## Technical Changes

- The Data Pack version is now 53
- Resource Pack version is now 38

## Data Pack Version 53

### Loot tables

- Tool value (used for functions like match_tool) is now available for some additional loot table types
  - archaeology - used brush
  - vault - inserted key (not available when displaying items)
  - shearing - shears
- Chickens laying eggs is now controlled by a loot table found at gameplay/chicken_lay
- Armadillos randomly dropping scutes is now controlled by a loot table found at gameplay/armadillo_shed

#### Hero of the Village Gift Loot Tables

- The loot given by Villagers is now controlled by two additional loot tables:
  - gameplay/hero_of_the_village/unemployed_gift - used if the Villager is unemployed
  - gameplay/hero_of_the_village/baby_gift - used if the Villager is a baby

### Tags

#### Item Tags

- duplicates_allays: Items that can be used to duplicate Allays when dancing
- panda_eats_from_ground: Items that a Panda will pick up from the ground and eat
- brewing_fuel: Items that can be used as fuel in a Brewing Stand

### Item Component Changes

#### minecraft:fire_resistant -\> minecraft:damage_resistant

- Has a new field: types, hash-prefixed damage type tag
  - Items with this component, when in entity form, will be resistant to the damage types included in the tag
  - This component also affects whether the equipped item will be damaged when the wearer is hurt by a given damage type

#### minecraft:item_name

- Name provided by this component always has the lowest priority
  - That means it will be overriden by components like minecraft:potion_contents

#### minecraft:potion_contents

- Added optional string field custom_name
  - When present, it will be used to generate containing stack name
  - For example, if value is foo and item is minecraft:lingering_potion, the name of item will be translation of item.minecraft.lingering_potion.effect.foo

#### minecraft:equippable

- Added the following fields
  - swappable: boolean (default: true), whether the item can be equipped into the relevant slot by right-clicking
  - damage_on_hurt: boolean (default: true), whether this item will be damaged when the wearing entity is damaged

#### Added minecraft:death_protection

- If present, this item will protect the holder from dying by restoring a single health point
- Format: object with fields
  - death_effects: An optional list of effects that are applied when the item protects the holder
    - These effects are the same as those specified by the on_consume_effects field in the consumable component

### Predicates

#### salmon entity sub-predicate

- Added minecraft:salmon entity sub-predicate
- Fields:
  - variant: one of small, medium, large

### Advancements

#### Triggers

#### minecraft:killed_by_crossbow -\> minecraft:killed_by_arrow

- Will now trigger whenever an Arrow kills an entity, not just when fired from a Crossbow
- Has a new optional Item Predicate field, fired_from_weapon
  - Can be used to match the item used to shoot the arrow

## Resource Pack Version 38

### GUI Sprites

- The appearance of a highlighted slot may now be customized by replacing sprites:
  - container/slot_highlight_front: The sprite to render in front of highlighted slots
  - container/slot_highlight_back: The sprite to render behind highlighted slots
- Likewise, the appearance of a highlighted item within the Bundle can be customized with the following sprites:
  - container/bundle/slot_highlight_front
  - container/bundle/slot_highlight_back

## Fixed bugs in 24w37a

- [MC-119369](https://bugs.mojang.com/browse/MC-119369) - Boats crash/break and can kill their passengers when falling certain distances
- [MC-206436](https://bugs.mojang.com/browse/MC-206436) - Stonecutter ignores anything over 64 when shift-clicking
- [MC-260537](https://bugs.mojang.com/browse/MC-260537) - Tree growth can replace leaves that have the 'persistent' block state set to true
- [MC-265399](https://bugs.mojang.com/browse/MC-265399) - Players' heads are incorrectly positioned while exiting the swimming/crawling state when other players are on screen
- [MC-275205](https://bugs.mojang.com/browse/MC-275205) - The hand animation is delayed and doesn't play all the time
- [MC-275300](https://bugs.mojang.com/browse/MC-275300) - Mace smash attack damage does not work with mobs, even though particles and sounds happen
- [MC-275302](https://bugs.mojang.com/browse/MC-275302) - The animation speed of end crystals is no longer constant
- [MC-275352](https://bugs.mojang.com/browse/MC-275352) - Spectral arrow texture is not updated properly for Programmer Art
- [MC-275406](https://bugs.mojang.com/browse/MC-275406) - Grammatical error in "options.rotateWithMinecart.tooltip"
- [MC-275468](https://bugs.mojang.com/browse/MC-275468) - Gamerule minecartMaxSpeed can't be set through functions
- [MC-275504](https://bugs.mojang.com/browse/MC-275504) - Custom model data is not applied to open bundle
- [MC-275538](https://bugs.mojang.com/browse/MC-275538) - Breeze still do not attack when super close to them
- [MC-275751](https://bugs.mojang.com/browse/MC-275751) - Head snaps when coming out of crawling
- [MC-275765](https://bugs.mojang.com/browse/MC-275765) - Missing full stop in string gamerule.minecartMaxSpeed.description
- [MC-275792](https://bugs.mojang.com/browse/MC-275792) - Bottom faces of torches and soul torches are not culled against solid blocks
- [MC-275833](https://bugs.mojang.com/browse/MC-275833) - Hand animation plays higher than before
- [MC-275883](https://bugs.mojang.com/browse/MC-275883) - Riding a minecart cluster into a wall freezes the game
- [MC-275909](https://bugs.mojang.com/browse/MC-275909) - Wrong death message is displayed when being killed by a mob's smash attack
- [MC-275964](https://bugs.mojang.com/browse/MC-275964) - Bundles can remain in the open state when held by the mouse cursor via swapping items
- [MC-275990](https://bugs.mojang.com/browse/MC-275990) - Bundles can remain in the open state through the crafting table
- [MC-276025](https://bugs.mojang.com/browse/MC-276025) - Model overrides are not applied to items shown in an open bundle
- [MC-276111](https://bugs.mojang.com/browse/MC-276111) - Salmon spawned from a bucket are the wrong size for one tick
- [MC-276127](https://bugs.mojang.com/browse/MC-276127) - Fractions in bee nest tooltip are not padded with whitespace
- [MC-276134](https://bugs.mojang.com/browse/MC-276134) - Can't scroll in creative inventory while hovered over the bundle
- [MC-276263](https://bugs.mojang.com/browse/MC-276263) - explosion_power nbt does not work for minecarts with tnt
- [MC-276293](https://bugs.mojang.com/browse/MC-276293) - Mobs no longer get damaged by sweet berry bushes
- [MC-276295](https://bugs.mojang.com/browse/MC-276295) - Zombies always kill villagers
- [MC-276296](https://bugs.mojang.com/browse/MC-276296) - Worn chainmail armor has a missing texture
- [MC-276297](https://bugs.mojang.com/browse/MC-276297) - Worn netherite armor appears as diamond armor
- [MC-276299](https://bugs.mojang.com/browse/MC-276299) - Horse armor doesn't render properly in horse inventory
- [MC-276301](https://bugs.mojang.com/browse/MC-276301) - Item tooltip padding is gone
- [MC-276304](https://bugs.mojang.com/browse/MC-276304) - Carved pumpkins and skulls can be equipped through right-clicking
- [MC-276310](https://bugs.mojang.com/browse/MC-276310) - Players' capes detach from their bodies when wearing non-chestplate items in the chest slot
- [MC-276311](https://bugs.mojang.com/browse/MC-276311) - Players' capes illogically point upward when flying with non-elytra items
- [MC-276314](https://bugs.mojang.com/browse/MC-276314) - Wind charges cause entities to be launched extremely high when directly hit by them
- [MC-276315](https://bugs.mojang.com/browse/MC-276315) - Teleport command runs at the entity's position and ignores location from execution context
- [MC-276316](https://bugs.mojang.com/browse/MC-276316) - Ender pearls no longer teleport entities to the point of impact
- [MC-276317](https://bugs.mojang.com/browse/MC-276317) - Projectiles visually update slowly when their motion is changed
- [MC-276320](https://bugs.mojang.com/browse/MC-276320) - Shields no longer block incoming projectiles
- [MC-276321](https://bugs.mojang.com/browse/MC-276321) - Elytra loses durability when taking damage
- [MC-276322](https://bugs.mojang.com/browse/MC-276322) - Boats don't drop as items when destroyed
- [MC-276326](https://bugs.mojang.com/browse/MC-276326) - "Air" item lost its name
- [MC-276327](https://bugs.mojang.com/browse/MC-276327) - The item_name component no longer overrides potion names
- [MC-276335](https://bugs.mojang.com/browse/MC-276335) - Cured villagers have the wrong movement speed
- [MC-276338](https://bugs.mojang.com/browse/MC-276338) - Converted mob keeps the same loot table of the first mob
- [MC-276339](https://bugs.mojang.com/browse/MC-276339) - Witches converted from villagers move very fast
- [MC-276344](https://bugs.mojang.com/browse/MC-276344) - Hovered items in bundles do not reflect any tooltip_style component
- [MC-276364](https://bugs.mojang.com/browse/MC-276364) - Non-armor items with equippable tag cannot be given to wolves
- [MC-276365](https://bugs.mojang.com/browse/MC-276365) - Armor sleeves do not follow arms when switching to and from items and on item use animations
- [MC-276370](https://bugs.mojang.com/browse/MC-276370) - Golden armor pieces have wrong max durabilities
- [MC-276376](https://bugs.mojang.com/browse/MC-276376) - /tp command cannot teleport to the correct facing angles
- [MC-276378](https://bugs.mojang.com/browse/MC-276378) - Converted witches lose their armor yet are still protected by it
- [MC-276383](https://bugs.mojang.com/browse/MC-276383) - Using Pick Block on boats crashes the game
- [MC-276384](https://bugs.mojang.com/browse/MC-276384) - Players' capes detach from their bodies when moving
- [MC-276394](https://bugs.mojang.com/browse/MC-276394) - Some specially rendered elements are no longer affected by fog of any type
- [MC-276415](https://bugs.mojang.com/browse/MC-276415) - Turtle helmet does not give water breathing effect when equipped on any slot other than the head
- [MC-276429](https://bugs.mojang.com/browse/MC-276429) - Projectiles move after hitting a block
- [MC-276433](https://bugs.mojang.com/browse/MC-276433) - set_enchantments function removes enchantments component from books
- [MC-276463](https://bugs.mojang.com/browse/MC-276463) - Armor on piglins detach from their bodies while bartering
- [MC-276476](https://bugs.mojang.com/browse/MC-276476) - Crash when a boat is destroyed by a hazard
- [MC-276480](https://bugs.mojang.com/browse/MC-276480) - Projectile no longer moves correctly when it is deflected
- [MC-276484](https://bugs.mojang.com/browse/MC-276484) - Fireballs and wither skulls do too much damage
- [MC-276495](https://bugs.mojang.com/browse/MC-276495) - Creative player can go through nether portal without being teleported when throwing riptide trident
- [MC-276501](https://bugs.mojang.com/browse/MC-276501) - Returning tridents get stuck on blocks and spam sounds
- [MC-276527](https://bugs.mojang.com/browse/MC-276527) - Duplicate UUID error causes player to teleport to origin when riding on a pig after it is converted by lightning
- [MC-276533](https://bugs.mojang.com/browse/MC-276533) - Game crashes when three or more skeletons are about to release their arrows

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/4ba5f8917ac400474751b6e0f20d311d3b726fe7/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
