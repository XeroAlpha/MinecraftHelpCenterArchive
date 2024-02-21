---
title: "Minecraft: Java Edition - Buzzy Bees"
date: 2019-12-10T17:30:59Z
updated: 2019-12-10T17:31:18Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360037384972-Minecraft-Java-Edition-Buzzy-Bees
hash:
  bee-nests-beehives: bee-nests--beehives
  block-and-fluid: blockandfluid
  time_check-condition: time_checkcondition
---

10 December 2019

Usually finding out something you love is now full of bees is *bad *news (your cat, parents, self, etc). We hope you find the abundance of bees now buzzing merrily in *Minecraft: Java Edition *a delightful exception! Along with the **Buzzy Bees, **you'll also find honeycomb, honeycomb blocks, honey blocks, the honey bottle, bee nests and beehives and absolutely no cats full of bees. Actually, I'm just gonna quickly double-check that last one...

Enjoy!

# BUZZY BEES CHANGELOG

# SUMMARY

- Added bees!
- Added bee nests and beehives!
- Added honey blocks!
- Added the honey bottle!
- Added honeycomb!
- Added honeycomb blocks!
- Accessibility improvements
- Added advancements for bees and honey!
- Added iron golem healing
- Added features found in other Minecraft editions
- Dispenser changes
- Experience orbs now appear in the same location as loot when an entity is killed

## BEE

We’re buzzing with excitement!  
Can someone tell Cory to stop making bee puns now?

- Bees are cute, fuzzy, neutral mobs
- Don’t hurt them, they don’t want to hurt you
- If a bee does sting you, it will leave its stinger in you and eventually die, dropping nothing :(
- Bees love pretty flowers and spend their lives gathering pollen from them
- After gathering pollen, bees fly back to their home nest
- Bees help you by growing crops while carrying pollen back to the nest
- Bees like sharing the location of their favorite flowers with other bees
- If a bee doesn’t have a home nest, it will wander around until it finds one it can use
- Bees don’t like the rain and they sleep at night. They will go back to the nest in these cases
- Bees can be bred using flowers
- If a bee can’t find nectar, after a while it will return home for a bit
- Bees try to avoid water
- Bees go inside if it’s raining at all in the world, not just where the bee is located
- Bees will search up to 10 blocks away from itself in all directions to find a nest/hive to call home

## BEE NESTS / BEEHIVES

In real life, bees dance in their nests to show other bees where flowers are!

- Bee nests spawn naturally in flower forests, plains, and sunflower plains biomes
- When a bee visits this block and completes its journey undisturbed, the level of honey increases
- Max of 5 levels of honey
- Level 5 is quite…sticky
- Bees use nests and hives to share flower locations with other bees
- Sometimes bees that already know about a flower will choose not to use this information
- Beehives are crafted by players using honeycomb and wood planks
- Use a silk touch tool to get the block with the bees stored inside
- Bee nests will be destroyed unless you use silk touch
- Use shears when at full honey to get honeycomb
- Use a bottle when at full honey to get a honey bottle
- Campfire smoke calms bees - place one underneath the nest/hive to keep them in chill mode
- Redstone-friendly!
- Bees like bee nests and beehives the same amount! They don’t play favorites :)
- Bees only exit through the front of the nest/hive

## HONEY BLOCK

Sticky. Very sticky!

- Walking and jumping is limited
- If you stand on a honey block that is pushed by a piston, you come along for the ride
- Jump into a wall of honey blocks to slide down and slow your fall
- Landing on a honey block cushions your fall somewhat
- When a honey block is pushed or pulled by a piston, it sticks to adjacent blocks and tries to move them in the same direction (just like slime blocks do)
- Honey blocks and slime blocks don’t stick to each other, because… um… because of special Minecraft chemistry
- Mobs and animals dislike walking on honey blocks unless they really need to as it’s too sticky for their comfort
- Honey blocks are crafted from four honey bottles

## HONEY BOTTLE

Organic, gluten-free, delicious locally-farmed honey!

- Use an empty glass bottle on a hive or nest that is full of honey to get a bottle of honey!
- Drink it!
- ???
- Profit!
- Oh yeah, also craft it into sugar!
- Or craft four bottles into a honey block!
- Drinking honey also cures poison

## HONEYCOMB

Disclaimer: Cannot be used to comb your hair

- Shear a full-honey hive or nest to obtain
- Craft with wood planks to create a beehive

## HONEYCOMB BLOCK

BYOH - Build Your Own Honeycomb

- Craft 2x2 Honeycomb to get a honeycomb block
- Purely decorative!

## ACCESSIBILITY

- Sneak and sprint inputs can now be switched between hold and toggle mode in the accessibility options
- Descriptions under buttons on the create world screen are now narrated
- Changed the button highlight to make it easier to distinguish which button is selected

## ADVANCEMENTS

- Added “Sticky Situation” for jumping into a honey block to break your fall
- Added “Bee Our Guest” for safely collecting honey from a beehive using a campfire
- Added “Total Beelocation” for moving a bee nest with 3 bees inside using silk touch

## DISPENSERS

- Dispensers can now fill bottles with water and honey
- Dispensers can now shear honey combs from bee nests and hives
- Dispensers now eject empty bottles properly when not facing water

## IRON GOLEMS

- Iron golems start cracking when badly damaged
- Repair them with iron ingots!
- Damage progress is based on ratio of current health to max health

## PARITY

Things from other editions of Minecraft have arrived to Java Edition!

- Trying to sleep in a bed during daytime will now set the player’s spawn location to that bed
- Setting the respawn point by using a bed now shows a message
- Bells will now ring if powered with a redstone signal
- The doInsomnia game rule can now be switched off to prevent phantoms from spawning during nighttime
- The doImmediateRespawn game rule can now be switched on to have players respawn immediately without showing the death screen
- The drowningDamage, fallDamage and fireDamage game rules can now be used to prevent certain sources of damage
- Sponges now dry out when placed in the Nether
- Fireworks dispensed from a dispenser now travel in the direction they were fired
- Boats as fuel now smelt 6 items in a furnace
- Campfire can be extinguished with a shovel
- When breedable mobs in groups spawn naturally they sometimes spawn babies in the groups
- Parrots can sit on a player’s shoulder even when the player is riding
- Composters are now crafted from wooden slabs
- All foods are now edible in creative mode
- Dark prismarine is now crafted from black dye instead of ink sacs
- Increased scaffolding burn time when used as fuel in a furnace
- Added stats for anvil and grindstone interaction counts

# TECHNICAL

- Item predicate in advancements now makes distinction between actual enchantments and stored enchantments (like ones stored in enchanted books)
- Added general-purpose storage for data commands
- Added a spectate command
- Loot table predicates can now be defined in separate files and used for entity selectors and in execute if command
- Extended advancement and loot table predicates
- Extended schedule command to allow scheduling function multiple times

## ADVANCEMENTS

- Changes in item predicate:
  - enchantments now only matches enchantments on item itself - it can no longer be used for enchanted books
  - to match contents enchanted book, use stored_enchantments

### ENTITY PREDICATE

#### PLAYER

Entity predicate now accepts player field, which checks player properties. Fails when entity is not player.

##### Fields:

- level - range of allowed player levels
- gamemode - same values as /gamemode command
- stats - list of statistics to match. Entry fields: type (like minecraft:custom), stat (like minecraft:sneak_time) and value (int range)
- recipes - map of recipe ids. Boolean value tells if it should or should not be known to player
- advancements - map of advancement ids. If value is boolean, checks if advancement is done. If value is object, checks completion of critera

#### TEAM

Entity predicate now accepts team field, which matches team name.

### LOCATION PREDICATE

#### BLOCK AND FLUID

Predicate also accepts block and fluid sub-predicate. Available fields:

- block/fluid - exact block/fluid id to match
- tag - block/fluid tag to match
- nbt - matcher for block entity NBT (only for blocks)
- state - map of name-value properties. Value can be integer, boolean or string or object with optional min and max properties

#### LIGHT

Predicate now accepts light sub-predicate. Object has one integer range - light that matches visible light (max(sky-darkening,block)).

## CHAT COMPONENTS

### CLICK ACTION

- Added copy_to_clipboard action to clickEvent

### NBT CHAT COMPONENT

- Added variant for NBT storage: {"nbt": \<path\>, "storage":"\<resource id\>"}. NBT storage can be manipulated with commands like /data merge storage \<resource id\> ...

## COMMANDS

### DATA

- Data commands can now use storage as target. This is general-purpose, key-value storage
  - Storage is shared between all dimensions in level
  - Data in storage persist between reloads

### EXECUTE IF PREDICATE

New subcommand evaluates custom predicates (defined in predicates directory of datapack).

### SCHEDULE

- Added new syntax /schedule ... \[append\|replace\] (/schedule ... defaults to replace)
- Added new syntax /schedule clear \<id\> to remove existing schedules (returns number of removed schedules)

### EFFECT

The effect clear command now defaults to @s if no target argument is given.

### ENTITY SELECTORS

New selector parameter predicate allows to apply custom custom predicate (defined in predicates directory of datapack).

### KILL

The kill command now defaults to @s if no target argument is given.

### SPECTATE

New command that makes a player in spectator mode spectate an entity. Syntax: spectate \[target\] \[player\]  
Parameters:

- player - The player that should spectate the target. Must be in spectator mode. If omitted, @s is used
- target - The target to spectate. If omitted, makes the player stop spectating

## CUSTOM PREDICATES

Condition part of loot tables can now be defined as separate data pack resource in predicates directory.

## LOOT TABLES

### LOCATION_CHECK

New parameters added:

- offsetX, offsetY, offsetZ - optional offsets to location

### TIME_CHECK CONDITION

New condition that checks day time.

#### PARAMETERS

- value - range of accepted values
- period - if present, time will be modulo-divided by this value (for example, if set to 24000, value will operate on time of day)

### NEW CONDITIONS

#### REFERENCE

Includes condition defined in predicates directory of datapack, selected with name parameter.

### NEW FUNCTIONS

#### COPY_STATE

Copies state properties from dropped block to BlockStateTag in dropped item.

##### Parameters

- block - source of properties (block id)
- properties - list of property names. All must be present on block

## MODDING

In an effort to help make modding the game easier, we have decided to publish our game obfuscation maps with all future releases of the game. This means that anyone who is interested may deobfuscate the game and find their way around the code without needing to spend a few months figuring out what’s what. It is our hope that mod authors and mod framework authors use these files to augment their updating processes that they have today. These mappings will always be available, instantly and immediately as part of every newly released version. This does not, however, change the existing restrictions on what you may or may not do with our game code or assets. The links to the obfuscation mappings are included as part of the version manifest json, and may be automatically pulled for any given version.  
Prefixed to every obfuscation map is the following legal disclaimer:

© 2019 Microsoft Corporation. All rights reserved. This information is provided “as-is” and you bear the risk of using it. This information does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this information for your internal, reference purposes. Microsoft makes no warranties, express or implied, with respect to the information provided here.

## PARTICLE PERFORMANCE

- Vertically moving particles are performing better when they collide with blocks

## PISTONS

### BUG FIX

- Blocks that can be manually placed on farmland can now also be pushed onto it by a piston without destroying the farmland

## RESOURCE PACKS

- The resource pack version is now 5
- The game now tries to make out of date resource packs work as much as possible
- Increased sizelimit for client downloading resource packs from 50MB to 100MB

## STATE MATCHING

Few advancements and loot table predicates that used block state properties (location, block_state_property, enter_block, placed_block) can now match ranges (by replacing single value with {"min": ..., "max": ...}).  
Also, block type is now optional in those predicates - so for example it is not possible to match any crop with age property in certain range.

## TEXTURES

- Changed texture map for all chests
- Banner and shield patterns are now using alpha channel instead of brightness
- Ender Dragon does not have separate texture for the bottom of the wing anymore
- Enchanted item glint texture is now like it looks in the game

### COMMAND USED TO CHANGE THE PATTERNS

- for f in \*.png; do convert "\$f" -alpha copy tmp.png && composite tmp.png -compose copy-opacity ../shield_base.png tmp2.png && convert tmp2.png -fill "rgba(0,1,0,1)" -draw "rectangle 0,0 1,63" -draw "rectangle 2,0 63,1" -draw "rectangle 2,22 64,64" -draw "rectangle 12,2 64,64" -fill none -draw "matte 0,0 floodfill" tmp3.png && mv tmp3.png "\$f" && rm tmp.png tmp2.png; done

# GET THE RELEASE

To install the release, open up the [Minecraft Launcher](https://www.minecraft.net/download) and click play!

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/e9f105b3c5c7e85c7b445249a93362a22f62442d/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discord.gg/Minecraft).
