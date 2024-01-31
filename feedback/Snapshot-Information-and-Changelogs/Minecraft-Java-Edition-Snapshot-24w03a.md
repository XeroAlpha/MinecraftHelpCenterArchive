---
title: "Minecraft: Java Edition - Snapshot 24w03a"
date: 2024-01-17T15:10:37Z
updated: 2024-01-31T16:23:44Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/23286907829261-Minecraft-Java-Edition-Snapshot-24w03a
---

New year, new Snapshot - we're now releasing the third Snapshot of Minecraft 1.20.5. This time around, we're bringing some updates to the Armadillo, the Breeze, as well as accessibility improvements.

In addition to a big bundle of bug fixes, we're bringing some changes to how spawn chunks are handled.

The spawn chunks are an area of the Overworld located at the world spawn which are always loaded in memory. These are useful for some players but use more of your computer’s resources and make the game load and run more slowly. (You can read more about spawn chunks at the community wiki!)

In this snapshot we made the size of the spawn chunks configurable by adding a new gamerule: spawnChunkRadius.The new default setting is 2 (which creates a 48x48 block area). This is 98% smaller than the previous area and will result in a noticeable performance improvement for most players.

If you would like to keep your spawn chunks working like they did before, you can use the game rule to change the spawn chunk radius value to 10. This will make your spawn chunks work the same as they did before, but you will miss out on the performance gains.

We're interested in hearing your feedback on this change and how the new default setting affects you.

## NEW FEATURES

### ARMADILLO

Armadillo visual update! We gathered feedback from the first Armadillo snapshot, and the next step in the look of the Armadillo, the Armadillo Scutes and the Wolf Armor are now here.

- Armadillos now also spawn in Badlands

#### ARMADILLO ROLLING UP BEHAVIOR

- Spiders and Cave Spiders will run away from Armadillos not in a rolled up state

## CHANGES

- Adjusted the texture of the Wolf Collar layer to be more consistent with the new Wolf Armor

### ACCESSIBILITY

- The default focus is now always set when entering or exiting any menu while navigating using tab or arrow keys

## TECHNICAL CHANGES

- The Data Pack version is now 28
- The Resource Pack version is now 24
- Custom Villager trades can be configured to accept items that have different tags from the expected item byadding ignoreTags: true in the trade's NBT
- When entities leave or enter the end the area they arrive in will now stay loaded for 15 seconds, matching the behavior of nether portals
- Added transfer packets
- Added cookie packets
- Decreased the default size of the spawn chunks and made the value configurable

### TRANSFER PACKETS

- Custom servers can now request that clients connect to another server with a new packet
- When a client is transferred it will connect to the target server with a new transfer intent (id 3)
- By default servers will not accept incoming transfers and will disconnect the client
- This can be changed by setting the accepts-transfers property to true in the server.properties file
- Resource packs are maintained across transfers
- In the case of a transfer custom servers can skip authentication with a new flag

### COOKIE PACKETS

- Cookie packets allow custom servers to request and store data on a client
  - Each cookie may be up to 5 KiB in size
  - Cookies may be requested during login, configuration and play phases — but only stored during the configuration and play phases
- Cookies are persisted across server transfers but are not persisted when the player disconnects
  - This allows servers to pass along information such as authentication or custom game data to the new server

### SPAWN CHUNK CHANGES

- The size of the spawn chunks changed from radius 10 (19x19 entity ticking chunks) to radius 2 (3x3 entity ticking chunks)
  - This was done to reduce memory usage, loading times and CPU usage
  - We opted to not fully remove spawn chunks to allow players who currently utilize this functionality to continue to do so
- Added a new gamerule spawnChunkRadius to set the size of the spawn chunks
  - Possible values are 0 to 32, where 0 completely disables the spawn chunks and 10 is equivalent to the functionality before this change
  - Default value is 2, equivalent to 3x3 entity ticking chunks

## DATA PACK VERSION 28

- The minecraft:sweeping enchantment has been renamed to minecraft:sweeping_edge
- Added Advancement Criteria trigger default_block_use which triggers due to the default interaction of a block by a player, such as opening a door
- Added Advancement Criteria trigger any_block_use which triggers due to any type of interaction with a block by a player, such as using an item on the block or its default usage

### TAGS

#### ITEM TAGS

New item tags controlling what enchantments can be added to what gear:

- minecraft:enchantable/foot_armor
- minecraft:enchantable/leg_armor
- minecraft:enchantable/chest_armor
- minecraft:enchantable/head_armor
- minecraft:enchantable/armor
- minecraft:enchantable/weapon
- minecraft:enchantable/sword
- minecraft:enchantable/mining
- minecraft:enchantable/mining_loot
- minecraft:enchantable/fishing
- minecraft:enchantable/trident
- minecraft:enchantable/durability
- minecraft:enchantable/bow
- minecraft:enchantable/equippable
- minecraft:enchantable/crossbow
- minecraft:enchantable/vanishing

#### ENTITY TYPE TAGS:

- Added minecraft:ignores_poison_and_regen for entities that cannot be affected by Poison and Regeneration effects
- Added minecraft:illager_friends for entities that Illagers will consider allies (unless on a different team)
- Added minecraft:inverted_healing_and_harm for entities that have inverted meanings of the Healing and Harm effects
- Added minecraft:not_scary_for_pufferfish for entities that will not cause Pufferfish to puff
- Added minecraft:sensitive_to_bane_of_arthropods for entities sensitive to Bane of Arthropods
- Added minecraft:sensitive_to_impaling for entities sensitive to Impaling
- Added minecraft:wither_friends for entities that the Wither will not target and which cannot harm the Wither

## RESOURCE PACK 24

- The ttf font provider transforms have been adjusted to have more reasonable defaults
  - shift is no longer applied double, and now directly represents a number of pixels in the game UI
  - The font EM square is fitted to size pixels in the game UI, instead of between the font ascender and font descender
  - The font baseline is positioned consistently with the default font (7 pixels below line top)
  - This means that generally, any font with a size of 9 and no shift should look correct by default

## EXPERIMENTAL FEATURES

### BREEZE

- Breeze now deflects all projectiles
- Deflected projectiles now deflect in the direction of the shooter

### TRADE REBALANCE

- In the Trade Rebalance Experiment, Villagers who buy armor now ignore durability and can buy damaged armor

## FIXED BUGS IN SNAPSHOT 24W03A

- [MC-153160](https://bugs.mojang.com/browse/MC-153160) - Villagers don't auto-fill items if NBT data doesn't match
- [MC-155857](https://bugs.mojang.com/browse/MC-155857) - Team command doesn't affect illagers and witches' AI
- [MC-171981](https://bugs.mojang.com/browse/MC-171981) - Map of fuel times is created anew every time an item is placed in a furnace, instead of being cached
- [MC-187372](https://bugs.mojang.com/browse/MC-187372) - There is no space between fps limit/vsync and graphics level in the debug screen
- [MC-260889](https://bugs.mojang.com/browse/MC-260889) - Players can use water buckets and lava buckets on blocks that are out of reach
- [MC-261596](https://bugs.mojang.com/browse/MC-261596) - Crafting Table search keyboard shortcut not working
- [MC-265273](https://bugs.mojang.com/browse/MC-265273) - The tab list in create world screen does not indicate it's tab-focused by highlight or rendering borders
- [MC-265520](https://bugs.mojang.com/browse/MC-265520) - Switching connection protocols sometimes produces errors
- [MC-265749](https://bugs.mojang.com/browse/MC-265749) - Tooltips flash when the values of buttons or fields are changed
- [MC-266078](https://bugs.mojang.com/browse/MC-266078) - The output of Crafting and Stonecutting Copper Grates is inconsistent with each other
- [MC-267044](https://bugs.mojang.com/browse/MC-267044) - Tick status strings contain inconsistent word usage
- [MC-267045](https://bugs.mojang.com/browse/MC-267045) - Some tick strings are missing articles and are unclear
- [MC-267086](https://bugs.mojang.com/browse/MC-267086) - Compass does not indicate spawn point correctly when game is frozen with /tick
- [MC-267104](https://bugs.mojang.com/browse/MC-267104) - The bottom face textures of breezes' rods are incorrect and don't match with surrounding colors
- [MC-267149](https://bugs.mojang.com/browse/MC-267149) - Crafter top face has an inverted UV texture map
- [MC-267366](https://bugs.mojang.com/browse/MC-267366) - You cannot use Spider Eyes on Baby Armadillos to age them up
- [MC-267367](https://bugs.mojang.com/browse/MC-267367) - Wolf armor flashes red when the wolf takes damage
- [MC-267371](https://bugs.mojang.com/browse/MC-267371) - Shulkers hitbox doesn't scale with generic.scale
- [MC-267377](https://bugs.mojang.com/browse/MC-267377) - Applying bone meal to mangrove leaves no longer produces any particles
- [MC-267378](https://bugs.mojang.com/browse/MC-267378) - Armor stand interaction points do not change with scale
- [MC-267379](https://bugs.mojang.com/browse/MC-267379) - Applying bone meal to rooted dirt no longer produces any particles
- [MC-267380](https://bugs.mojang.com/browse/MC-267380) - Cannot open inventories beyond default block reach
- [MC-267383](https://bugs.mojang.com/browse/MC-267383) - Can't place water and lava with extended attribute "block_interaction_range"
- [MC-267384](https://bugs.mojang.com/browse/MC-267384) - Unused duplicate wolf armor sound events
- [MC-267385](https://bugs.mojang.com/browse/MC-267385) - Attribute entity_interaction_range is capped by block_interaction_range
- [MC-267388](https://bugs.mojang.com/browse/MC-267388) - The subtitle for brushing armadillos is inconsistent with other item usage subtitles
- [MC-267389](https://bugs.mojang.com/browse/MC-267389) - Armadillos don't always stand in close proximity to one another when breeding
- [MC-267392](https://bugs.mojang.com/browse/MC-267392) - Armadillos are scared of players in spectator mode
- [MC-267395](https://bugs.mojang.com/browse/MC-267395) - Armadillos panic when receiving fall damage
- [MC-267397](https://bugs.mojang.com/browse/MC-267397) - Armadillos and baby armadillos stand a bit too far away from players that are tempting them
- [MC-267398](https://bugs.mojang.com/browse/MC-267398) - Armadillos don't play a roll out sound after finishing hiding
- [MC-267402](https://bugs.mojang.com/browse/MC-267402) - Head of armadillo in boat is twitching when turning the boat
- [MC-267404](https://bugs.mojang.com/browse/MC-267404) - Scared armadillo pushed into boat is scared of player riding the boat
- [MC-267405](https://bugs.mojang.com/browse/MC-267405) - Scared armadillo can move when having a passenger
- [MC-267406](https://bugs.mojang.com/browse/MC-267406) - Armadillos with their "Silent" NBT tag set to "1b" still play their landing and rolling up sounds
- [MC-267413](https://bugs.mojang.com/browse/MC-267413) - Feeding an armadillo a spider eye doesn't cancel eating it
- [MC-267416](https://bugs.mojang.com/browse/MC-267416) - Particles created from Slimes do not account for the scale attribute
- [MC-267417](https://bugs.mojang.com/browse/MC-267417) - Suffocation overlay shown when on solid almost-full blocks at scale \< .06
- [MC-267418](https://bugs.mojang.com/browse/MC-267418) - Warden sonic boom attack doesn't account for the scale attribute
- [MC-267420](https://bugs.mojang.com/browse/MC-267420) - Boat placement ignores custom "block_interaction_range" attribute
- [MC-267422](https://bugs.mojang.com/browse/MC-267422) - Attribute entity_interaction_range is classified as 'generic', but has no effect on mobs
- [MC-267427](https://bugs.mojang.com/browse/MC-267427) - Rendering offset of sleeping entities does not account for scale attribute
- [MC-267428](https://bugs.mojang.com/browse/MC-267428) - Phantom wing particles do not account for scale attribute
- [MC-267434](https://bugs.mojang.com/browse/MC-267434) - Upside-down mobs with big scale attribute are displayed above hitbox
- [MC-267435](https://bugs.mojang.com/browse/MC-267435) - Baby armadillos do not follow parents consistently or closely
- [MC-267454](https://bugs.mojang.com/browse/MC-267454) - Baby striders are visually the same size as normal striders
- [MC-267456](https://bugs.mojang.com/browse/MC-267456) - Changes to item_used_on_block advancement criteria breaks previous functionality
- [MC-267465](https://bugs.mojang.com/browse/MC-267465) - 1.20.3 upload error: "Cannot invoke "ctt.c()" because "this.b" is null"
- [MC-267470](https://bugs.mojang.com/browse/MC-267470) - The regeneration effect granted from beacons is no longer applied to players
- [MC-267479](https://bugs.mojang.com/browse/MC-267479) - Inventory view model scales with generic.scale
- [MC-267497](https://bugs.mojang.com/browse/MC-267497) - Baby armadillos do not sound high pitched when curling up
- [MC-267538](https://bugs.mojang.com/browse/MC-267538) - Putting placeable blocks inside decorated pots also places them
- [MC-267565](https://bugs.mojang.com/browse/MC-267565) - Low scale attribute lets you breathe underwater
- [MC-267588](https://bugs.mojang.com/browse/MC-267588) - The hand animation is no longer played when putting items inside decorated pots
- [MC-267706](https://bugs.mojang.com/browse/MC-267706) - Evoker and illusioner summon particles do not account for scale attribute
- [MC-267707](https://bugs.mojang.com/browse/MC-267707) - Wither particles do not account for scale attribute
- [MC-267708](https://bugs.mojang.com/browse/MC-267708) - The wither's skull projectile attacks do not account for the scale attribute
- [MC-267725](https://bugs.mojang.com/browse/MC-267725) - Players' experience levels no longer render above the health and hunger bars
- [MC-267726](https://bugs.mojang.com/browse/MC-267726) - Applying bone meal to blocks underwater no longer produces any particles

## GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/730a3ef2f99f6a822aa504bfee2eb5372d826293/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.21 features, head over to the dedicated [Feedback site category](https://aka.ms/Minecraft121Feedback). You can also leave any other feedback on the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
