---
title: "Minecraft: Java Edition - 1.18.2 Pre-Release 1 "
date: 2022-02-21T08:11:35Z
updated: 2022-02-21T08:11:46Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4457624338317-Minecraft-Java-Edition-1-18-2-Pre-Release-1
hash:
  changes-in-1.18.2-pre-release-1: changes-in-1182-pre-release-1
  technical-changes-in-1.18.2-pre-release-1: technical-changes-in-1182-pre-release-1
  fixed-bugs-in-1.18.2-pre-release-1: fixed-bugs-in-1182-pre-release-1
---

We're now releasing the first pre-release for Minecraft 1.18.2. This pre-release introduces the possibility for data packs to customize cave generation and to add new custom structures to worlds. 

If everything goes as expected, we aim to release this version on February 28th. 

Happy mining!

# CHANGES IN 1.18.2 PRE-RELEASE 1

- Users running Minecraft in a 32-bit environment will receive a warning in the main menu about the upcoming end of 32-bit environment support

# TECHNICAL CHANGES IN 1.18.2 PRE-RELEASE 1

- The data pack version is now 9
- It is now possible to add custom structures in experimental datapacks
- locate and locatebiome commands now support tags (prefix with \# to distinguish from normal ids)
- The locate command parameter is now a configured structure rather than a structure type. For instance, you can now use /locate village_desert or /locate shipwreck_beached
- A lot of the cave generation is now configurable through data packs

## CONFIGURABLE CAVES

- A new registry was added for Density functions (caves are created by combining those together)
- Noise settings got a new field noise_router (and lost a couple of flags), see worldgen/noise_settings folder in the worldgen report
- Noise router wires data-driven parts of the cave generation with the rest of the code

## CONFIGURED STRUCTURES AND STRUCTURE SETS

The game now generates and stores data-driven configured structures.

- Experimental datapacks can add new structure sets
- The feature field in location predicates now references a configured feature
- The exploration_map loot table function destination field is now a configured feature tag id
- The exploration_map loot table function no longer automatically sets the display name of the map

### SIDE EFFECTS

Some gameplay oddities have been affected by this change.

- Dolphins will now more accurately pick the closest structure regardless of type
- Bastion Remnant bounding boxes are now slightly more accurate to the shape of the structure

# FIXED BUGS IN 1.18.2 PRE-RELEASE 1

- [MC-3524](https://bugs.mojang.com/browse/MC-3524) - Structure related mobs do not spawn in flat type world generation
- [MC-146854](https://bugs.mojang.com/browse/MC-146854) - Player movement favors x axis when in a corner
- [MC-179315](https://bugs.mojang.com/browse/MC-179315) - Ruined portals never generate in superflat worlds by default
- [MC-210612](https://bugs.mojang.com/browse/MC-210612) - Strongholds do not generate in certain customized worlds despite /locate saying otherwise
- [MC-241288](https://bugs.mojang.com/browse/MC-241288) - Support for custom structures has been removed
- [MC-244137](https://bugs.mojang.com/browse/MC-244137) - The option “level-seed” is not present in server.properties by default
- [MC-248532](https://bugs.mojang.com/browse/MC-248532) - Elytra firework particle spawns on the wrong hand when dual wielding fireworks

# GET THE PRE-RELEASE

Pre-releases are available for Minecraft: Java Edition. To install the pre-release, open up the Minecraft Launcher and enable snapshots in the "Installations" tab.

**Pre-releases can corrupt your world, so please make a backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/c3e2734bafdb017efab854b01c66dd795722a332/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://aka.ms/snapshotbugs?ref=blog)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
