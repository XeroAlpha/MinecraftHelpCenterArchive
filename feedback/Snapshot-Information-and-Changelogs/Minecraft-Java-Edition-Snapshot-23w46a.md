---
title: "Minecraft: Java Edition - Snapshot 23w46a"
date: 2023-11-16T16:26:47Z
updated: 2023-11-16T16:26:58Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/21396856976141-Minecraft-Java-Edition-Snapshot-23w46a
hash:
  h_01HFCF7Y6SJQX12ZFDTDWVX3JE: changes
  h_01HFCF7Y6S5KYQT405Y3B0V73Q: technical-changes
  h_01HFCF7Y6SKHY6HXWQ4198DA1X: data-pack-version-25
  h_01HFCF7Y6SNWB11QBR9GHWF30F: commands
  h_01HFCF7Y6SG3BQCWC1MTR22950: scoreboard
  h_01HFCF7Y6S5A87RA8JJQPADDAC: display-names
  h_01HFCF7Y6S0F8HVT0AD5E2SFJ0: display-name-auto-update
  h_01HFCF7Y6S3XVC108Z4P6DA712: number-formatting
  h_01HFCF7Y6SGVS6JWDMWTDRK0S0: fixed-bugs-in-snapshot-23w46a
  h_01HFCF7Y6S9NDDKPMXK7ZZDBHX: get-the-snapshot
---

This snapshot brings about a few redstone-focused changes. Notably, we’re tweaking the tick delay behavior of the crafter and the copper bulb while they’re still in experimental development.

With these changes, we aim to make the crafter more consistent with other blocks that drop or eject items, and the copper bulb with other blocks that react or change state when a connected redstone signal changes. As a result of this, some contraptions built during the last few snapshots may no longer work properly.

We're really excited about the tinkering opportunities both these new redstone blocks bring to the world. Please keep sending all your thoughts about them to Minecraft Feedback so we can keep building Minecraft together!

Enjoy!

## CHANGES

- Updated Crafter textures

## TECHNICAL CHANGES

- The Data Pack version is now 25

## DATA PACK VERSION 25

- Added individual display names for scoreboard entries

### COMMANDS

#### SCOREBOARD

##### Display names

- Each entry in a scoreboard can now have a custom display name
- Those values are kept separate per objective and score holder
- If the name is not present, the score holder name is used (i.e. the old behavior)
- If the score is reset or the whole objective is removed, the name is not preserved
- Team decorations will still be applied to names as normal
- Subcommands for managing names:
  - scoreboard players display name \<targets\> \<objective\> \<text component\> - set display name
  - scoreboard players display name \<targets\> \<objective\> - clear display name

##### Display name auto-update

- To make display name management easier, objectives can also be configured to auto-update display names on every score update
- This option is disabled by default
- If a score holder has no display name (because it can't be attributed to any currently loaded entity), the current name is preserved
- Command to control auto-update for objective:
  - scoreboard objectives modify \<scoreboard\> displayautoupdate \[true\|false\]

##### Number formatting

- Scores in numeric form can now be formatted
- Formats can be set for both objectives and individual scores
- Scores with set formats will render the same in all context (sidebar, under player name, etc.)
- Subcommands for managing formats:
  - scoreboard objectives modify \<objective\> numberformat \<format\> - for setting default format for an objective
  - scoreboard objectives modify \<objective\> numberformat - for clearing default format for an objective
  - scoreboard players display numberformat \<targets\> \<score\> \<format\> - for setting format for a specific score holder
  - scoreboard players display numberformat \<targets\> \<score\> - for clearing format for a specific score holder

Formats:

- styled \<style\> - score will be displayed with selected style (like {"bold":true})
- fixed \<text component\> - score will be replaced with text
- blank - score will not be displayed

## FIXED BUGS IN SNAPSHOT 23W46A

- [MC-259321](https://bugs.mojang.com/browse/MC-259321) - Spawner counts related entities against MaxNearbyEntities
- [MC-265662](https://bugs.mojang.com/browse/MC-265662) - "Cannot kick server owner in LAN game" message when trying to kick yourself from non-LAN singleplayer world
- [MC-265873](https://bugs.mojang.com/browse/MC-265873) - Narrator Hotkey description mentions the wrong modifier key on macOS
- [MC-265910](https://bugs.mojang.com/browse/MC-265910) - Crafter block has a one game tick cooldown
- [MC-265950](https://bugs.mojang.com/browse/MC-265950) - Crafters will stack items when outputting into chiseled bookshelf
- [MC-266076](https://bugs.mojang.com/browse/MC-266076) - Copper Grates can't be waterlogged
- [MC-266099](https://bugs.mojang.com/browse/MC-266099) - Spectating an entity that takes damage makes the camera shake
- [MC-266120](https://bugs.mojang.com/browse/MC-266120) - Some advancements for 1.21 block recipes are in the regular datapack
- [MC-266148](https://bugs.mojang.com/browse/MC-266148) - Some Crafting recipes for the new copper blocks appear when Experiment is disabled
- [MC-266190](https://bugs.mojang.com/browse/MC-266190) - Tuff blockset color palette is inconsistent with itself
- [MC-266437](https://bugs.mojang.com/browse/MC-266437) - Wind charge subtitles are improperly capitalized
- [MC-266445](https://bugs.mojang.com/browse/MC-266445) - Breeze mob doesn't count to Monster Hunter
- [MC-266455](https://bugs.mojang.com/browse/MC-266455) - Breeze spawn eggs are in the incorrect place in the creative inventory
- [MC-266459](https://bugs.mojang.com/browse/MC-266459) - The hitboxes and models of wind charges are misaligned
- [MC-266538](https://bugs.mojang.com/browse/MC-266538) - Trial spawners can be replaced by lava pools and other features
- [MC-266622](https://bugs.mojang.com/browse/MC-266622) - Wind Charges can't switch levers off

## GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/2f30bbf9229e2dcbaf148eb9750df1d19ffa6d19/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
