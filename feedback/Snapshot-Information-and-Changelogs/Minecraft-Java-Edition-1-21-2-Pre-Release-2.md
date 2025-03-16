---
title: Minecraft Java Edition - 1.21.2 Pre-Release 2
date: 2024-10-10T14:06:47Z
updated: 2024-10-10T14:06:51Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/30951327727885-Minecraft-Java-Edition-1-21-2-Pre-Release-2
hash:
  h_01J9VBY02E6KGEMTMRR1PVP80G: experimental-features
  h_01J9VBY02E25VXM444DA8AEXVH: winter-drop
  h_01J9VBY02EKJTS7JTYWTSY1RVN: pale-moss
  h_01J9VBY02E058TZ6CCVJS78Q5Q: fixed-bugs-in-1212-pre-release-2
  h_01J9VBY02EM4NMSMWSK5G3NX93: get-the-pre-release
---

Today we are shipping the second Pre-Release for 1.21.2 with some more bug fixes and Pale Hanging Moss changes. During this stabilization phase before the full release of Minecraft Java Edition 1.21.2 we are focusing on fixing bugs and don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out for the next pre-release.

## Experimental Features

### Winter Drop

#### Pale Moss

- Pale Hanging Moss now only drops when cut with Shears or destroyed using tool with Silk Touch
- Pale Moss Carpet is now more efficient to destroy with Sword
- Pale Moss Carpet now plays the correct step sound when walking over it

## Fixed bugs in 1.21.2 Pre-Release 2

- [MC-54532](https://bugs.mojang.com/browse/MC-54532) - Sneaking while falling on Slime Blocks inflicts fall damage
- [MC-160810](https://bugs.mojang.com/browse/MC-160810) - Some items are held sideways in left hand
- [MC-266480](https://bugs.mojang.com/browse/MC-266480) - Breeze can jump on top of honey blocks
- [MC-266494](https://bugs.mojang.com/browse/MC-266494) - Jump Boost does not affect the breeze's jump
- [MC-269851](https://bugs.mojang.com/browse/MC-269851) - Breeze idle animations are different than Bedrock Edition
- [MC-275834](https://bugs.mojang.com/browse/MC-275834) - Jumping when falling onto a slime block no longer cancels the bounce effect
- [MC-275941](https://bugs.mojang.com/browse/MC-275941) - Consumable item components with inlined sound event definitions cause undefined behavior
- [MC-276072](https://bugs.mojang.com/browse/MC-276072) - Tridents enchanted with Loyalty fly around drowned upon returning to them
- [MC-276605](https://bugs.mojang.com/browse/MC-276605) - Throwing an ender pearl through a portal or gateway often results in the player being placed slightly too low
- [MC-276624](https://bugs.mojang.com/browse/MC-276624) - Nether portal can send you back when your ender pearl land in the portal
- [MC-276716](https://bugs.mojang.com/browse/MC-276716) - Thrown ender pearl teleport position is inconsistent
- [MC-276813](https://bugs.mojang.com/browse/MC-276813) - Minecraft no longer prints an error to the game log when trying to render a character without a defined glyph in the loaded fonts
- [MC-276825](https://bugs.mojang.com/browse/MC-276825) - Transmute recipes allow air as output
- [MC-276906](https://bugs.mojang.com/browse/MC-276906) - Specifying a block tag in an item's can_place_on or can_break component in a recipe or loot table causes validation error
- [MC-276954](https://bugs.mojang.com/browse/MC-276954) - Ender pearl interaction with bubble columns is still broken
- [MC-276963](https://bugs.mojang.com/browse/MC-276963) - Mobs standing inside both lava and water produce the fire extinguishing sound every tick
- [MC-276978](https://bugs.mojang.com/browse/MC-276978) - Mobs produce the fire extinguishing sound every tick while standing in lava in rain
- [MC-277000](https://bugs.mojang.com/browse/MC-277000) - Entities can be damaged by fire without being ignited
- [MC-277073](https://bugs.mojang.com/browse/MC-277073) - Pale moss and pale moss carpets cannot be broken faster using hoes
- [MC-277091](https://bugs.mojang.com/browse/MC-277091) - Pale oak boats are in the chest boats tag in place of pale oak chest boats
- [MC-277096](https://bugs.mojang.com/browse/MC-277096) - When selecting a biome in the single biome world type, there is no translation for the pale garden
- [MC-277135](https://bugs.mojang.com/browse/MC-277135) - Entity collision order is now locational
- [MC-277165](https://bugs.mojang.com/browse/MC-277165) - Particles produced upon creakings spawning are spawned one block too far to the east
- [MC-277175](https://bugs.mojang.com/browse/MC-277175) - \#overworld_natural_logs block tag contains \#pale_oak_logs instead of pale_oak_log
- [MC-277212](https://bugs.mojang.com/browse/MC-277212) - The "options.accessibility.high_contrast_block_outline.tooltip" string is missing an article before the word "targeted"
- [MC-277309](https://bugs.mojang.com/browse/MC-277309) - Missing translations for Pale Oak Wall (Hanging) Signs
- [MC-277376](https://bugs.mojang.com/browse/MC-277376) - Consumable block animation inherits shield behaviors
- [MC-277389](https://bugs.mojang.com/browse/MC-277389) - Armor stand in the smithing table interface no longer render armor when appropriate
- [MC-277392](https://bugs.mojang.com/browse/MC-277392) - The realms description text and the game mode text within the realms menu can intersect one another
- [MC-277398](https://bugs.mojang.com/browse/MC-277398) - The horse armor equipping sound is unusually loud
- [MC-277402](https://bugs.mojang.com/browse/MC-277402) - Horse armor doesn't render properly in horse inventory again
- [MC-277404](https://bugs.mojang.com/browse/MC-277404) - Entities' limbs are incorrectly positioned for a brief second when entities are damaged while riding entities
- [MC-277405](https://bugs.mojang.com/browse/MC-277405) - Mounts no longer receive damage when riding them through sweet berry bushes
- [MC-277409](https://bugs.mojang.com/browse/MC-277409) - Text on glowing signs no longer looks different to text on normal signs
- [MC-277417](https://bugs.mojang.com/browse/MC-277417) - /tp no longer works when run from a command block without context from "execute as"
- [MC-277424](https://bugs.mojang.com/browse/MC-277424) - The pale garden can prevent trial chambers from spawning
- [MC-277438](https://bugs.mojang.com/browse/MC-277438) - Wolf Armor no longer shows cracks when damaged
- [MC-277452](https://bugs.mojang.com/browse/MC-277452) - Player idle timeout does not kick players

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/eddbd98f45ec134898b9a7657f4e3b679692dc45/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.21 features, head over to the dedicated [Feedback site category](https://aka.ms/Minecraft121Feedback). You can also leave any other feedback on the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
