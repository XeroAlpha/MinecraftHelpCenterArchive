---
title: "Minecraft: Java Edition - 1.20.5 Pre-Release 2"
date: 2024-04-15T15:00:12Z
updated: 2024-04-15T15:00:24Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/25906321256205-Minecraft-Java-Edition-1-20-5-Pre-Release-2
hash:
  h_01HVH4AVYFJWEEBPMAQWBZTCRR: new-features
  h_01HVH4AVYGDW2CWR1F0RWW0BJG: advancements
  h_01HVH4AVYGM2PZYD10P1JVQVZ5: changes
  h_01HVH4AVYG7YD6YGAFZSZ3GHG9: ui
  h_01HVH4AVYGVRMMTSYSYGTNE7H7: technical-changes
  h_01HVH4AVYGNWFZDDSX9G6AACH9: data-pack-version-40
  h_01HVH4AVYG1X09M1W1NEPS38RF: modified-loot-functions
  h_01HVH4AVYGFE2HC0JB4PY7VQCY: set_fireworks
  h_01HVH4AVYG4KP3HX3M5HR9YEWV: fixed-bugs-in-1205-pre-release-2
  h_01HVH4AVYGKE5ZS4MDKF9KBKQK: get-the-pre-release
---

It's the start of a new week and we're coming right out of the gate with another pre-release for Minecraft: Java Edition 1.20.5! Apart from upping our pun-game in the Advancements department, this pre-release also fixes a slew of bugs and crashes.

Happy mining!

## NEW FEATURES

### ADVANCEMENTS

- Snip it! advancement is renamed to Shear Brilliance

## CHANGES

- Using ctrl+pick block no longer lists "(+NBT)" in the item tooltip

### UI

- The animated Nether Portal texture is displayed when changing dimension to or from The Nether
- The animated End Portal effect is displayed when changing dimension to or from The End

## TECHNICAL CHANGES

- The Data Pack version is now 40
- Invalid data in packets sent from a server will now cause the game client to disconnect

## DATA PACK VERSION 40

### MODIFIED LOOT FUNCTIONS

#### SET_FIREWORKS

Fields explosions and mode have been grouped together as a sub-object

- { "explosions": \<list\>, "mode": \<mode\>, \<mode-dependent fields\>} becomes {"explosions": {"values": \<list\>, "mode": \<mode\>, \<mode-dependent fields\>}}
- New explosions field is now optional, while values field inside it is now mandatory

## FIXED BUGS IN 1.20.5 PRE-RELEASE 2

- [MC-199973](https://bugs.mojang.com/browse/MC-199973) - Wet wolf is rendered too dark compared to past versions
- [MC-259355](https://bugs.mojang.com/browse/MC-259355) - Game crashes because /place sometimes does not check whether position is loaded and out of world
- [MC-265585](https://bugs.mojang.com/browse/MC-265585) - Waterlogged barriers do not diffuse sky light
- [MC-265709](https://bugs.mojang.com/browse/MC-265709) - Stonecutter outputs are broken past the 32nd row in the GUI (server only)
- [MC-265741](https://bugs.mojang.com/browse/MC-265741) - Waterlogged barriers don't show up on maps
- [MC-266997](https://bugs.mojang.com/browse/MC-266997) - Sky light doesn't update when breaking a shulker box while its (closing) animation is playing
- [MC-267352](https://bugs.mojang.com/browse/MC-267352) - Singleplayer worlds don't load the player.dat when the "Player" tag is absent from level.dat
- [MC-267381](https://bugs.mojang.com/browse/MC-267381) - Moving while sneaking is impossible with high generic.step_height attribute
- [MC-267414](https://bugs.mojang.com/browse/MC-267414) - Scale attribute causes extreme TPS loss with the ender dragon
- [MC-267441](https://bugs.mojang.com/browse/MC-267441) - When a player's generic.step_height attribute is set to more than two, attempting to step atop of more than two blocks may fail if there are blocks higher up
- [MC-268015](https://bugs.mojang.com/browse/MC-268015) - Shulker bullets shot from shulkers don't account for the scale attribute
- [MC-268035](https://bugs.mojang.com/browse/MC-268035) - True Type Font when changing Language causes error with Rendering overlay
- [MC-268064](https://bugs.mojang.com/browse/MC-268064) - Armadillos that aren't rolled up can roll up during their death animation
- [MC-268257](https://bugs.mojang.com/browse/MC-268257) - Equipping a carpet on a Llama doesn't play a sound
- [MC-268347](https://bugs.mojang.com/browse/MC-268347) - Setting gravity higher than 0.84 allows you to jump up a block
- [MC-268804](https://bugs.mojang.com/browse/MC-268804) - Wolves attacked while wearing wolf armor resets eating timer despite being at full health
- [MC-268810](https://bugs.mojang.com/browse/MC-268810) - Ctrl+Picking chests still says (+NBT) even though NBT is replaced by components
- [MC-268854](https://bugs.mojang.com/browse/MC-268854) - Firework explosions in items without a Type field are not correctly upgraded
- [MC-268858](https://bugs.mojang.com/browse/MC-268858) - Buttons to enchant become enabled when placing wolf armor in an enchanting table
- [MC-268984](https://bugs.mojang.com/browse/MC-268984) - Running /give command throws EncoderException
- [MC-269123](https://bugs.mojang.com/browse/MC-269123) - Enabling or disabling a resource pack that changes a shader will not affect that shader until the resource pack is reloaded
- [MC-269161](https://bugs.mojang.com/browse/MC-269161) - Stonecutter does not support multiple recipes with the same result item type
- [MC-269171](https://bugs.mojang.com/browse/MC-269171) - The client is disconnected when receiving the system_chat packet containing deeply nested NBT data
- [MC-269173](https://bugs.mojang.com/browse/MC-269173) - The server cannot send the client the system_chat packet containing deeply nested NBT data
- [MC-269300](https://bugs.mojang.com/browse/MC-269300) - The "Alternatively, here's some we made earlier!" text is positioned too close to the header separator
- [MC-269304](https://bugs.mojang.com/browse/MC-269304) - Horse armor renders incorrectly when worn by wolves
- [MC-269415](https://bugs.mojang.com/browse/MC-269415) - set_fireworks "mode" is required even when "explosions" is optional
- [MC-269472](https://bugs.mojang.com/browse/MC-269472) - Crash when table_bonus loot condition has empty chances list
- [MC-269619](https://bugs.mojang.com/browse/MC-269619) - Scroller in Telemetry Data screen renders translucent pixels as opaque, unlike elsewhere
- [MC-269660](https://bugs.mojang.com/browse/MC-269660) - arguments.item.predicate.unknown quotes are different
- [MC-269802](https://bugs.mojang.com/browse/MC-269802) - Selecting a villager trade merges items with different components
- [MC-269932](https://bugs.mojang.com/browse/MC-269932) - Item disappears when trying to trade using items with lower max stack count
- [MC-270003](https://bugs.mojang.com/browse/MC-270003) - Ominous banners are not "pick block"-ed properly
- [MC-270049](https://bugs.mojang.com/browse/MC-270049) - Enchanting table buttons and level icons render translucent pixels as opaque
- [MC-270116](https://bugs.mojang.com/browse/MC-270116) - The minecraft:generic.fall_damage_multiplier attribute does not function for many mobs with nonstandard fall damage behaviour
- [MC-270117](https://bugs.mojang.com/browse/MC-270117) - The calculation of fall damage for horses, donkeys, mules, zombie horses, skeleton horses, camels, llamas, trader llamas, and foxes disregards the minecraft:generic.safe_fall_distance
- [MC-270262](https://bugs.mojang.com/browse/MC-270262) - You can see the world loading while in the process of entering it
- [MC-270265](https://bugs.mojang.com/browse/MC-270265) - Blur slider does not say "OFF" when set to 0%
- [MC-270413](https://bugs.mojang.com/browse/MC-270413) - A nbt copy of a block is ABSOLUTELY the same as the first nbt copy of the original and n (+nbt) display for tooltip of (a copy of)×n a block have an "Items" block data
- [MC-270559](https://bugs.mojang.com/browse/MC-270559) - FreeType error: Unrecognized error: 0x62 (Loading glyph)
- [MC-270590](https://bugs.mojang.com/browse/MC-270590) - Dropped items from creative mode get deleted when inventory is open
- [MC-270603](https://bugs.mojang.com/browse/MC-270603) - Crash updating world: ClassCastException: RegularImmutableList cannot be cast to class com.mojang.datafixers.util.Pair
- [MC-270610](https://bugs.mojang.com/browse/MC-270610) - Some new advancement titles are incorrectly capitalized
- [MC-270648](https://bugs.mojang.com/browse/MC-270648) - Wolf armor with the curse of binding enchantment cannot be removed from wolves using shears in creative mode
- [MC-270679](https://bugs.mojang.com/browse/MC-270679) - Clicking on text with run_command can cause EncoderException and will exit to multiplayer menu
- [MC-270712](https://bugs.mojang.com/browse/MC-270712) - Cannot move while sneaking if attribute generic.step_height is set to 0
- [MC-270767](https://bugs.mojang.com/browse/MC-270767) - Leather horse armor no longer prevents horses from freezing in powder snow

## GET THE PRE-RELEASE

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/c794b404663758cba43c67d097a25c5d4eb84a37/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.21 features, head over to the dedicated [Feedback site category](https://aka.ms/Minecraft121Feedback). You can also leave any other feedback on the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
