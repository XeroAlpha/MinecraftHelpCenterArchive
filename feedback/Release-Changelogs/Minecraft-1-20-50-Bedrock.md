---
title: Minecraft - 1.20.50 (Bedrock)
date: 2023-11-28T17:53:25Z
updated: 2023-12-01T18:37:52Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/21750153148173-Minecraft-1-20-50-Bedrock
hash:
  h_01HGH642WA6274YKH9DCQY0GV5: new-features
  h_01HGH642WAX614D879CQW5JTX5: improvements-to-decorated-pots
  h_01HGH642WA9KTETKSB8M1W4PKB: bat
  h_01HGH642WA8M1YABZ7YC5RBJN3: encyclopedia
  h_01HGH642WAVRM85NWAPK1XVCBJ: vanilla-parity
  h_01HGH66V4QCFC2KEAZVEW988MH: experimental-features
  h_01HGH66V4QX2C28HFKNXEQ899P: crafter
  01HGKAR9A1WQ13MGHHSDPB5Q6R: copper-family
  h_01HGH66V4QDK95MNEV2PAS60C0: chiseled-copper
  h_01HGH66V4QSMNPCN1F38M4WBY4: copper-grate
  h_01HGH66V4QG1Q9HPA5WWD670GK: copper-bulb
  h_01HGH66V4Q9S5Z9HE8Q1R1VFCZ: copper-doors-and-trapdoors
  h_01HGH66V4Q84KPRR5VG2QY28KX: tuff-family
  h_01HGH66V4QK06VPT0BDNMD8GHS: villager-trade-rebalancing
  h_01HGH67W5Z34HNY0CNWF7CP0D5: fixes-and-changes
  h_01HGH67W608V1C6W0NC7WQFXT6: performance--stability
  h_01HGH67W60JV3M9CF5PY51K9WK: general
  h_01HGH67W60DGTCEFWQ26HBDCN0: gameplay
  h_01HGH67W60RFGF1978RPGCYE1H: mobs
  h_01HGH67W60ZHEBEGJCWVMXE4BM: blocks
  h_01HGH67W60GF2V09R52SA2NAQ0: touch-controls
  h_01HGH67W618ZAHRPS5JAK8BHPW: user-interface
  h_01HGH699J1YAXVRCNH6F91NBGK: technical-updates
  h_01HGH699J161TQ79X67XXFEHWZ: updated-add-on-template-packs
  h_01HGH699J1V7YVCKZ813RBQ1PN: performance--stability-1
  h_01HGH699J1HCJN8MJNWWZTKJGC: add-ons-and-script-engine
  h_01HGH699J1R1H1TQ5SPGRXT8PM: animations
  h_01HGH699J14QJHPC4RK3HHA57S: blocks-1
  h_01HGH699J1B6P2BW913EYPVE69: graphical
  h_01HGH699J15JBH338FRQDD3J2K: items
  h_01HGH699J15APG6K5S1ZYC9TWE: cameras
  h_01HGH699J1P8F47FJ8Q0V8YMVP: ai-goal-components
  h_01HGH699J12A7VA4ZWVXTD0ZGR: api
  h_01HGH699J2BD99VM8RH4A637V7: items-1
  h_01HGH699J2CDK2FVMHPZZBQA8G: mobs-1
  h_01HGH699J2082KAYZERKN9BZ5Q: molang
  h_01HGH6CV1216MXDBYT2VR6YG7Z: experimental-technical-updates
  h_01HGH6CV122HZYP0M822FH15Y9: gametest
  h_01HGH6CV12N0D2V5FP3Z0BRBHN: script-api
  h_01HGH6CV12D1863YRDJBAEG91H: api-1
---

**Posted:** December 5, 2023

The latest Minecraft update brings a brand new look for bats, smashable pots, and some new experimental features like the crafter block. Let’s take a look at the highlights!

- The Bat has a brand new look
- Improvements to Decorated Pots, like the ability to place items inside and smash them with projectiles
- New experimental features from the upcoming 1.21 update, including the Crafter and new Copper blocks
- The ‘How to Play’ screen has been completely revamped into the ‘Encyclopedia’ screen
- A wealth of fixes, improvements, and technical changes

![bats-and-pots.png](https://feedback.minecraft.net/hc/article_attachments/21833697698701)

Your thoughts on the game continue to shape new updates so please upvote and report any new bugs at [bugs.mojang.com](https://bugs.mojang.com/) and leave us your feedback at [feedback.minecraft.net](https://feedback.minecraft.net/).\
\

# **New Features**

## **Improvements to Decorated Pots**

- Decorated Pots now store up to a single stack of items
- Hoppers, Hopper Minecarts, and Droppers can now insert and/or extract items from Decorated Pots
- Comparators can now read the number of items in Decorated Pots
- Players can interact with Decorated Pots to insert items into them
- Decorated Pots have no user interface and need to be broken to retrieve or discover their content
- Player interactions with Decorated Pots cause Decorated Pots to wobble and emit a vibration of frequency 11
- Decorated Pots can be smashed by projectiles, which cause them to shatter and drop their content
- Increased the maximum stack size of identical Decorated Pots to 64

## **Bat**

- The Bat now has a new look, thanks to an updated model, animations, and texture

## **Encyclopedia**

- Completely remodeled the "How to Play" screen and created a new "Encyclopedia" screen
- Fixed various spelling mistakes
- Removed obsolete references to "Old world"
- Added missing references to Netherite related items ([MCPE-90770](https://bugs.mojang.com/browse/MCPE-90770), [MCPE-165370](https://bugs.mojang.com/browse/MCPE-165370))\
  \

# **Vanilla Parity**

- Vindicators and Evokers can no longer be spawned in a Peaceful world ([MCPE-124736](https://bugs.mojang.com/browse/MCPE-124736))\
  \

# **Experimental Features**

## **Crafter**

- Added the Crafter block to the game
- Crafter can be crafted with Redstone Dust, Iron Ingots, Crafting Table, and Dropper
- Crafter uses distinct particles when crafting
- Crafter has distinct sounds for crafting and failing
- Crafter has a blast resistance of 3.5
- A Comparator connected to a Crafter now outputs a signal that is equal to the amount of non-empty slots plus disabled slots
- Moving items into crafter from Hopper or Dropper distributes them evenly instead of first filling the first stack
- Powering Crafter with Redstone signal makes it craft and output the item

## **Copper Family**

- The Copper family of blocks has been expanded, including:
  - Chiseled Copper
  - Copper Grate
  - Copper Bulb
  - Copper Door
  - Copper Trapdoor
  - Oxidized and waxed variants of all the above

## **Chiseled Copper**

- Crafted with 2 Cut Copper Slabs of a shared oxidation level
- Can be crafted in the Stonecutter

## **Copper Grate**

- A new type of decorative block unique to the Copper family
- Crafted with 4 Copper Blocks of a shared oxidation level
  - Can be crafted in the Stonecutter
- Properties:
  - Transparent and allows light to pass through
  - Mobs cannot suffocate inside them
  - Cannot conduct Redstone
  - Hostile mobs cannot naturally spawn on them

## **Copper Bulb**

- A light-emitting block that can toggle its light emission through Redstone pulses
- Oxidizes like other Copper blocks, and emits less light the more oxidized they are
  - Copper Bulb: Light level 15
  - Exposed Copper Bulb: Light level 12
  - Weathered Copper Bulb: Light level 8
  - Oxidized Copper Bulb: Light level 4
- When placed, its light is off by default
  - While the Copper Bulb is unpowered, it will toggle its light on or off when it receives a Redstone pulse
  - Copper Bulb light will stay on even when the Redstone source is removed until it receives another Redstone pulse to toggle it off
- A Redstone crystal will glow in the center of Copper Bulbs while it is powered by a Redstone signal
- Comparators will read a signal strength of 15 if the Copper Bulb's light is on
- Does not conduct Redstone power
- Can craft 4 Copper Bulbs with:
  - 3 Copper Blocks of a shared oxidation level
  - 1 Blaze Rod
  - 1 Redstone Dust

## **Copper Doors and Trapdoors**

- Copper variants of Doors and Trapdoors that can oxidize over time and be waxed
- Works like wooden Doors in that they can be opened and closed with interaction as well as Redstone
- Crafted with Copper Blocks of a shared oxidation level

## **Tuff Family**

- Tuff has been expanded to have its own family of blocks, including:
  - Stair, Slab, Wall, and Chiseled variants
  - Tuff Bricks with Stair, Slab, Wall, and Chiseled variants
  - Polished Tuff with Stair, Slab, and Wall variants
- All Tuff variants can be crafted in the Stonecutter and Crafting Table

## **Villager Trade Rebalancing**

- Fixed an issue where experimental Librarians never sold the highest level of their common enchantments ([MCPE-174861](https://bugs.mojang.com/browse/MCPE-174861))\
  \

# **Fixes and Changes**

## **Performance / Stability**

- A Sticky Piston pulling a retracting Sticky Piston that is pulling a player and another block no longer crashes the game ([MCPE-175790](https://bugs.mojang.com/browse/MCPE-175790))
- Fixed a bug where the screen would freeze when uploading a world template to a Realm

## **General**

- The maximum render distance in Realms can be adjusted via backend updates. Expect an increase to the maximum render distance on Realms in the next week
- Players can now download worlds larger than 1GB from Realms on Xbox
- Improved handling of unexpected errors during world export and better error messaging is now provided ([MCPE-41898](https://bugs.mojang.com/browse/MCPE-41898))
- You can now launch Minecraft directly into a Realm using a link, even when the game isn't running
  - Example link: *minecraft://connectToRealm?realmId=\<ID number\>*

## **Gameplay**

- Phantoms will no longer miss players who are gliding
- Decreased the likelihood of players spawning above Leaves
- Suspicious Sand no longer generates in Cold Ocean Ruins ([MCPE-173492](https://bugs.mojang.com/browse/MCPE-173492))
- Fixed an issue where players couldn't block with a Shield after releasing to use an item that had left their inventory ([MCPE-171346](https://bugs.mojang.com/browse/MCPE-171346))

## **Mobs**

- Witches spawned via spawn eggs now join raids and throw potions at raiders
- Raid mobs can now join existing raids
- Mobs that grow up to be adults and are too large to fit inside Boats will now jump out ([MCPE-171870](https://bugs.mojang.com/browse/MCPE-171870))
- Leads will no longer break if a leashed mob is not in the same chunk as the leash holder upon reloading a world ([MCPE-157182](https://bugs.mojang.com/browse/MCPE-157182))
- Mobs on fire no longer spread fire to their target when holding something in their main hand
- The calculations to determine whether a mob can attack a player or other mobs have been changed. Previously a mob's horizontal width was used to determine their attack reach and their height had no effect. The area where a mob can attack is now their bounding box extended in horizontal directions
  - The mobs affected by this change are Axolotl, Bee, Blaze, Cave Spider, Dolphin, Drowned, Enderman, Endermite, Fox, Hoglin, Husk, Iron Golem, Panda, Piglin, Piglin Brute, Pillager, Silverfish, Skeleton, Spider, Stray, Vindicator, Warden, Wither Skeleton, Wolf, Zoglin, Zombie, Zombie Pigman, and Zombie Villager
  - The new reach calculation is the attacking mob's bounding box extended by 0.8 blocks horizontally. If this extended box overlaps the target's bounding box, then the attack can reach
  - This change does not affect the reach of players

## **Blocks**

- Horizontal End Rod hitboxes are now rotated correctly ([MCPE-171597](https://bugs.mojang.com/browse/MCPE-171597))
- Chorus Flowers can now be destroyed by any projectile, which will no longer disappear after impact ([MCPE-176184](https://bugs.mojang.com/browse/MCPE-176184))

## **Touch Controls**

- Sneaking in water is now possible with touch controls ([MCPE-167218](https://bugs.mojang.com/browse/MCPE-167218))
- Touch input used for the Leave Boat button no longer continues to register input ([MCPE-168574](https://bugs.mojang.com/browse/MCPE-168574))
- Fixed an issue where the player could enter touch control customization without having touch controls ([MCPE-175530](https://bugs.mojang.com/browse/MCPE-175530))

## **User Interface**

- Inventory option states such as the all/craftable toggle and selected inventory tab are now saved between sessions ([MCPE-175159](https://bugs.mojang.com/browse/MCPE-175159))
- The loading screen now displays 3 categories of tips based on player progression
- Added a game rule to turn off recipe unlocking messages
- Recipe unlocking notifications no longer speed up when unlocking a lot of items
- The search bar inside of the inventory is now aligned with the rest of the UI ([MCPE-174298](https://bugs.mojang.com/browse/MCPE-174298))
- Added Menu Cancel as a remappable action and set Mouse Back button as its default
- Fixed tips display for custom vehicles from Marketplace packs when using touch controls with a joystick
- The Xbox On-Screen Keyboard now moves to a different position if it's in front of the text user is inputting ([MCPE-170831](https://bugs.mojang.com/browse/MCPE-170831))
- Fixed grammatical error in Magma death message ([MCPE-64168](https://bugs.mojang.com/browse/MCPE-64168))
- Updated death message when killed by a Bed explosion in the Nether ([MCPE-123604](https://bugs.mojang.com/browse/MCPE-123604))
- Made the hotbar less transparent ([MCPE-31014](https://bugs.mojang.com/browse/MCPE-31014))
- Added background dimming on screens that didn't have it ([MCPE-168598](https://bugs.mojang.com/browse/MCPE-168598))
- Fixed an issue where the border around the 'Creator' tab in Settings would not be highlighted ([MCPE-169617](https://bugs.mojang.com/browse/MCPE-169617))
- The classic skins info popup now sends you to the correct settings page ([MCPE-175854](https://bugs.mojang.com/browse/MCPE-175854))\
  \

# **Technical Updates**

## **Updated Add-On Template Packs**

- Updated Add-On templates for 1.20.50 with new resources, behaviors, and documentation are available to download at [aka.ms/MCAddonPacks](https://aka.ms/MCAddonPacks)

## **Performance / Stability**

- Removed *CraftingEventPacket*

## **Add-Ons and Script Engine**

- Improved some of the common scripting error messages to provide better context and information
- Added a *Clear* button to the content log screen

## **Animations**

- Fixed unreliability around *is_alive* on Server

## **Blocks**

- Blocks with the "minecraft:cardinal_direction", "minecraft:facing_direction", or "minecraft:block_face" states as part of the "minecraft:placement_direction" or "minecraft:placement_position" BlockTraits are rotated/mirrored properly by Structure Blocks
- Structure Void blocks once again prevents interaction with blocks and entities placed behind them ([MCPE-175237](https://bugs.mojang.com/browse/MCPE-175237))
- "planks" block is now split into unique instances "oak_planks", "spruce_planks", "birch_planks", "jungle_planks", "acacia_planks", "dark_oak_planks"
- Commands will still work with "planks", however, "planks" block will not be suggested
- "stone" block is now split into unique instances: "stone", "granite", "polished_granite", "diorite", "polished_diorite", "andesite" and "polished_andesite"

## **Graphical**

- When a particle emitter is added to an entity but particles simulate in world, particles now correctly collide with the world

## **Items**

- Renamed "minecraft:use_duration" to "minecraft:use_modifiers" and added a "movement_modifier" parameter in json format versions 1.20.50 and higher
- Deprecated "minecraft:chargeable" in json format versions 1.20.50 and higher. Use "minecraft:use_modifiers" instead for "movement_modifier" behavior
- Deprecated "on_dig" event triggers from "minecraft:digger" in format versions 1.20.50 and higher

## **Cameras**

- Added a content warning for when the camera is placed outside of the player's chunk radius

## **AI Goal Components**

- Added "minecraft:behavior.melee_box_attack" behavior which functions the same as "minecraft:behavior.melee_attack" but uses bounds based attack reach calculations
  - The *reach_multiplier*attribute is removed and replaced with *box_increase*
  - Reach is calculated by increasing the bounds of the attacking mobs in the xz-plane by *box_increase*blocks to create an "attack box". If the attack box intersects with the target's bounds the attacking mob can reach it

## **API**

- Added *BlockComponentTypeMap*, *EntityComponentTypeMap*, and *ItemComponentTypeMap* aliases which map Component IDs to their TypeScript types
- Changed *getComponent*, *Entity.getComponent*, and *ItemStack.getComponent* to return the correct derived Component type
- Added *BlockComponentTypes*, *EntityComponentTypes*, and *ItemComponentTypes* enums that enumerate component ID strings
- Moved *PlayerInteractWithBlockAfterEvent* from *beta* to *1.7.0*
- Moved *PlayerInteractWithBlockBeforeEvent* from *beta* to *1.7.0*
- Moved *PlayerInteractWithEntityAfterEvent* from *beta* to *1.7.0*
- Moved *PlayerInteractWithEntityBeforeEvent* from *beta* to *1.7.0*
- Moved *PlayerLeaveBeforeEvent* from *beta* to *1.7.0*
- Moved *NumberRange*interface to *minecraft/common*
  - Moved *heightRange: NumberRange* from *beta* to *1.7.0*
  - Moved *matches*from *beta* to *1.7.0*
  - Moved function *clearDynamicProperties* from *beta* to *1.7.0*
  - Moved function *getDynamicProperties* from *beta* to *1.7.0*
  - Moved function *getDynamicPropertyIds* from *beta* to *1.7.0*
  - Moved function *getDynamicPropertyTotalByteCount* from *beta* to *1.7.0*
  - Moved function *setDynamicProperty* from *beta* to *1.7.0*
  - Moved function *clearDynamicProperties* from *beta* to *1.7.0*
  - Moved function *getDynamicProperties* from *beta* to *1.7.0*
  - Moved function *getDynamicPropertyIds* from *beta* to *1.7.0*
  - Moved function *getDynamicPropertyTotalByteCount* from *beta* to *1.7.0*
  - Moved function *setDynamicProperty* from *beta* to *1.7.0*
- TicksPerSecond
  - Moved from *beta* to *1.7.0*
  - Moved *offset* from *beta* to *1.7.0*
  - Moved *above* from *beta* to *1.7.0*
  - Moved *below* from *beta* to *1.7.0*
  - Moved *north* from *beta* to *1.7.0*
  - Moved *east* from *beta* to *1.7.0*
  - Moved *south* from *beta* to *1.7.0*
  - Moved *west* from *beta* to *1.7.0*
  - Moved *center* from *beta* to *1.7.0*
  - Moved *bottomCenter* from *beta* to *1.7.0*
- Added initial NPC support to scripting with the *EntityNpcComponent*
- Moved*Entity*.*remove* from *beta* to *1.7.0*

## **Items**

- Deprecated the "tag:" legacy item component and released the "minecraft:tags" item component out of experimental in json formats 1.20.50 and higher

## **Mobs**

- Fixed an issue preventing mobs from spawning further than 6 chunks away from the nearest player even if the server's simulation range is larger than 6 chunks
- Added "minecraft:can_join_raid" component to allow entities to join existing raids

## **Molang**

- Fixed animation controller loading to use the pack's *min_engine_version* rather than the file's *format_version* to determine the Molang Version. This fix applies to animation controllers in packs with a *min_engine_version* of 1.20.50 or higher
- The following Molang queries are Deprecated and will no longer be available in packs with a *min_engine_version* of 1.20.50 or higher
  - *is_scenting*
    - Replaced with *timer_flag_1*, set by *behavior.timer_flag_1*
  - *is_rising*
    - Replaced with *timer_flag_2*, set by *behavior.timer_flag_2*
  - *is_feeling_happy*
    - Replaced with *timer_flag_3*, set by *behavior.timer_flag_3*
  - *dash_cooldown_progress*
    - It was only used to adjust the head animation of the camel as it came out of dash cooldown
    - Camel animation uses *dash_cooldown_progress* in camel.entity.json now
- *query.is_moving* now detects vertical motion for the player again\
  \

# **Experimental Technical Updates**

## **Gametest**

- *SimulatedPlayer*
  - *stopUsingItem* now returns the item that was being used
- Dynamic Properties
  - NBT change: Dynamic properties are now stored using the behavior pack manifest UUID, rather than the module UUID. Existing worlds using dynamic properties will continue to work, and will be migrated to the new format when properties are read or modified

## **Script API**

- Fixed *@minecraft/server-ui*forms not correctly rendering player scoreboard information when embedded in rawtext

## **API**

- Added *effectAddBeforeEvent* and removed *effectState* from *effectAddAfterEvent*
- Fixed *target* property to be of type *Entity* or *undefined* as the entity may not have a target
- EntityHitInformation
  - Fixed *entity* property to be of type *Entity* or *undefined* as the entity may be undefined
- EntityInventoryComponent
  - *container* member variable now correctly reflects it can be a Container or undefined
  - *entity* member variable now correctly reflects it can be an Entity or undefined
- *ItemStartUseOnAfterEvent*
  - *itemStack* is now optional
- *ItemStopUseAfterEvent*
  - *itemStack* is now optional
- DataDrivenEntityTriggerAfterEvent
  - Renamed property *id* to *eventId* for clarity
  - Changed *getModifier* to work in read-only mode
- Changed *DefinitionModifier* from a *class* to an *interface* with properties
- Made *get*properly reflect that it can return *EntityType \| undefined* instead of just *EntityType*
