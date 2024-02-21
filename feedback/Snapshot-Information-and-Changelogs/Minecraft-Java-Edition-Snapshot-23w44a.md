---
title: "Minecraft: Java Edition Snapshot - 23w44a"
date: 2023-11-01T16:08:46Z
updated: 2023-11-01T16:08:50Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/20923516732301-Minecraft-Java-Edition-Snapshot-23w44a
hash:
  h_01HE5T8CA2KQGJMN15E89BRRGV: changes
  h_01HE5T8CA3ZQQQ3Q1NQNGSD9SB: technical-changes
  h_01HE5T8CA3CR29E5TKH7EGHMZ7: data-pack-version-23
  h_01HE5T8CA3K8GNDNNTW0TN3GZ3: commands
  h_01HE5T8CA3E831QK0XA8JM4ET7: tick
  h_01HE5T8CA3EHN0EDX1G91RZGX5: return
  h_01HE5T8CA3FJSGHFP6FS9GAJPB: function
  h_01HE5T8CA3TGT5GJEEF95KMC58: execute-ifunless-function
  h_01HE5T8CA3FK4PYNRK81JA15GB: fixed-bugs-in-snapshot-23w44a
  h_01HE5T8CA3M0CPEVKS7YTNTN84: get-the-snapshot
---

In this week's Snapshot we're taking a break from new features to improve ones we've already added, including fixes to Commands and the ability to use Loot Tables with Decorated Pots.

## CHANGES

- Copper Doors & Copper Trapdoors has updated textures

## TECHNICAL CHANGES

- The Data Pack version is now 23

## DATA PACK VERSION 23

- Decorated Pots can now utilize loot tables and will read from the LootTable tag key
- Additional changes to command functions

### COMMANDS

#### TICK

- The \<time\> parameter in the tick step command is now optional. The default value is 1

#### RETURN

- return run will now always return
  - If there are no valid results from returned command, function containing return run will fail (i.e. success=0 and result=0)
- return run will now propagate success value together with results value (previously it always set success to 1)
- return run now also allows storing values - that means execute store ... run return run some_command will both store value and return it outside function
- New subcommand return fail is added to make whole function fail (i.e. return success=0 and result=0)

#### FUNCTION

- If function \<function tag\> runs multiple functions in combination with return run, execution will stop after first return in any of the functions
- A single call to the function command will always have return when run with return run
  - For example, return run execute \[split context\] run function \<some function with conditional return\> will always return after processing the first context

#### EXECUTE IF\|UNLESS FUNCTION

- execute if\|unless function will no longer always fail if all functions had no return
  - If there were no returns in called functions, if will fail and unless will pass
  - First return in any of called functions will return (for a single context)

## FIXED BUGS IN SNAPSHOT 23W44A

- [MC-219293](https://bugs.mojang.com/browse/MC-219293) - When teleporting via Chorus Fruit, the burping and teleporting sounds play at the wrong location
- [MC-265805](https://bugs.mojang.com/browse/MC-265805) - Executing a tail-recursive function consumes memory resources linearly with recursion depth
- [MC-266052](https://bugs.mojang.com/browse/MC-266052) - Subtitles for turning copper bulb on or off display raw translation string
- [MC-266053](https://bugs.mojang.com/browse/MC-266053) - Subtitles for opening or closing a copper trapdoor display raw translation string
- [MC-266064](https://bugs.mojang.com/browse/MC-266064) - Footsteps on Polished Tuff create missing subtitle
- [MC-266084](https://bugs.mojang.com/browse/MC-266084) - Top of copper doors include an open part of the window
- [MC-266086](https://bugs.mojang.com/browse/MC-266086) - Tuff bricks do not properly align with other bricks
- [MC-266105](https://bugs.mojang.com/browse/MC-266105) - Bat head upside down when spawned while ticks are frozen
- [MC-266112](https://bugs.mojang.com/browse/MC-266112) - New Bat's ears are lower than the official render and Bedrock's
- [MC-266117](https://bugs.mojang.com/browse/MC-266117) - Chiseled copper cannot be stonecut from cut copper blocks
- [MC-266147](https://bugs.mojang.com/browse/MC-266147) - Copper Door item texture is inconsistent with the block
- [MC-266197](https://bugs.mojang.com/browse/MC-266197) - The "Transfer Now" button in the realms menu cannot be selected via keyboard navigation
- [MC-266215](https://bugs.mojang.com/browse/MC-266215) - The pivot point of the head of the new bats is different from that of Bedrock's

## GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/009b4831cdda78d8f9b235265e45d0bf14a920da/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
