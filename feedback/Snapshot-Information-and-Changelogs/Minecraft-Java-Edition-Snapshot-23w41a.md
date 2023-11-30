---
title: "Minecraft: Java Edition Snapshot - 23w41a"
date: 2023-10-11T15:15:21Z
updated: 2023-10-11T15:15:32Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/20298295897229-Minecraft-Java-Edition-Snapshot-23w41a
---

For this week's Snapshot, we've made improvements to the Decorated Pots!

Additionally, Realms is now available in Snapshots moving forward! Any player who has an active Realms subscription is eligible to create a free Snapshot Realm. This Snapshot Realm will be separate from your regular Realm to prevent any issues from impacting your regular Realm. For more information on how Snapshot Realms work, please see Realms in [Minecraft: Java Edition Snapshot FAQ](../../help/Minecraft-Java-Edition-Technical/Realms-in-Minecraft-Java-Edition-Snapshot-FAQ.md).

## NEW FEATURES

### SNAPSHOT REALMS

- Realms is now available in Snapshots, Pre-Releases, and Release Candidates
- The version of the last played world on a Realm is displayed in the Realms list
- Experiments are available for newly created worlds

## CHANGES

- Decorated Pots can now store items, and can be smashed by projectiles

### DECORATED POTS

- Decorated Pots now store up to a single stack of items
- Hoppers, Hopper Minecarts and Droppers can now insert and/or extract items from Decorated Pots
- Comparators can now read the number of items in Decorated Pots
- Players can interact with Decorated Pots to insert items into them
- Decorated Pots have no GUI, and need to be broken to retrieve or discover their content by players
- Player interactions with Decorated Pots cause the Decorated Pot to wobble and trigger the vibration frequency of 11
- Decorated Pots can be smashed by projectiles which cause them to shatter and drop their content
- Decorated Pots now stack up to 64

We want to hear your feedback on these improvements to Decorated Pots - let us know what you think in [our dedicated feedback site post](https://feedback.minecraft.net/hc/en-us/community/posts/20289952762637-Let-s-talk-about-Decorated-Pot-improvements-)!

## TECHNICAL CHANGES

- The Data Pack version is now 20
- The name of non-living entities will now be shown if looked at and a CustomName is set, or always displayed if CustomNameVisible is set, similar to living entities

## DATA PACK VERSION 20

- Changed function command results
- Adjusted check for gamerule maxCommandChainLength
- Added new gamerule maxCommandForkCount
- Reintroduced form of the execute command: execute if function
- Reintroduced form of the return command: return run
- Decorated Pots with cracked state set to true will always shatter when broken
- Added new dust_plume particle type

### COMMANDS

#### FUNCTIONS

- function command has been changed to better accomodate new return command
- Functions no longer have any result unless they use return or there was error during lookup or instantiation
  - That means function command will no longer return (or even display) number of commands run during execution
  - Error conditions:
    - Calling non-existent function
    - Calling empty function tag
    - Macro instantiation failure
- "Result" in this context means values that would be stored with execute store
- The previous behavior where every command in function would perform store if a function was called with execute store ... run function is removed
  - That means that a single call to function will store at most once (zero times if return was not called)
  - For function tags with multiple entries, function results will be accumulated, but partial results will be stored at the end of every function

##### Limits

Existing limits for functions have been refined to accomodate new execution rules and prevent wider range of exploits:

- Limits apply even if run from command line (so it will now always behave as if they were placed in a function)
  - For example, all functions called by execute as @e run function will count towards same limit
  - Executions from command blocks still count as separate ones
- Limit maxCommandChainLength for functions will now count "operations" like:
  - execution of command for a single context
  - execution of a stage in execute (no matter how many contexts were modified)
  - invocation of function
- New limit with game rule maxCommandForkCount now restricts total amount of context that can be created by single state of functions like execute
  - Example: if there are 5 entities in world, execute as @e creates 5 contexts, while execute as @e at @e creates 5\*5 = 25 contexts

#### EXECUTE IF FUNCTION

An execute sub-command that runs a function or function tag and matches the return value(s).This is a reintroduction of functionality removed in previous version.If a tag is given, all functions run regardless of the results of prior functions.

Syntax:execute if\|unless function \<function\> \<continuation\>

Parameters:

- function: The function or tag to run

##### Matching

The matching of the result value of the function(s) that run:

- At least one of the functions must succeed for the match to succeed
- A succeessful call is defined as a function that:
  - Uses the return command to return a value
  - The return value is not 0
- If no functions exited with return, neither if or unless will run

#### RETURN RUN

A form of the return command is now available, return run.This is a reintroduction of functionality removed in previous version.

Syntax:return run \<command\>

This takes the result value from running the specified command and returns that as the return value of the function.

- If command did not return any value (like, for example, call to a function without return), return will not execute and function will continue execution
- If the given command fails, the return value is 0
- In all other aspects, it works like return with a specified return value
- In case of fork (for example return run execute as @e run some_command) the first execution of the command will return
  - If there are no executions (for example in return run execute if @e\[something_impossible\] run some_command) function will not return and will continue execution

## FIXED BUGS IN SNAPSHOT 23W41A

- [MC-16937](https://bugs.mojang.com/browse/MC-16937) - Shooting an arrow into the nether portal can hurt anybody when PvP is disabled
- [MC-50319](https://bugs.mojang.com/browse/MC-50319) - Player owned projectiles lose their player ownership when exiting portals
- [MC-81656](https://bugs.mojang.com/browse/MC-81656) - Field determining whether or not a wither skull is blue is not saved to and read from NBT
- [MC-118403](https://bugs.mojang.com/browse/MC-118403) - Vexes summoned by evoker do not have evoker team applied
- [MC-143266](https://bugs.mojang.com/browse/MC-143266) - Nested function calls reevaluate maxCommandChainLength before queueing commands
- [MC-143269](https://bugs.mojang.com/browse/MC-143269) - Nested intermediate functions are skipped when maxCommandChainLength commands are already queued
- [MC-189227](https://bugs.mojang.com/browse/MC-189227) - First time tutorial uses old textures
- [MC-198113](https://bugs.mojang.com/browse/MC-198113) - Incomplete commands do not prevent functions from loading
- [MC-233276](https://bugs.mojang.com/browse/MC-233276) - You can feed adult donkeys, horses, llamas or mules with maximum Temper value, and hand animation is not played
- [MC-234323](https://bugs.mojang.com/browse/MC-234323) - Performance issue with text parsing
- [MC-236501](https://bugs.mojang.com/browse/MC-236501) - Renamed minecarts and boats don't show their name tag in the world
- [MC-249408](https://bugs.mojang.com/browse/MC-249408) - Boats with Chests lose their name when placed
- [MC-257786](https://bugs.mojang.com/browse/MC-257786) - The game takes a long time to process players leaving realms groups or accepting or declining realms invitations
- [MC-260576](https://bugs.mojang.com/browse/MC-260576) - Incomplete 'execute summon' command still runs
- [MC-261682](https://bugs.mojang.com/browse/MC-261682) - Brushing can continue when block goes out of range
- [MC-262105](https://bugs.mojang.com/browse/MC-262105) - Entities can block brushing actions when players look very close to their hitboxes
- [MC-263575](https://bugs.mojang.com/browse/MC-263575) - When an item is extracted from suspicious sand/gravel, gravity does not work on this block
- [MC-263660](https://bugs.mojang.com/browse/MC-263660) - "Sign wobbles" subtitle is the same for signs and hanging signs, causing translation issues
- [MC-264595](https://bugs.mojang.com/browse/MC-264595) - Return command cannot run function when inside another function
- [MC-264699](https://bugs.mojang.com/browse/MC-264699) - Functions return the output of commands only if the command doesn't start with return run
- [MC-264710](https://bugs.mojang.com/browse/MC-264710) - "/execute if function" always fails and "/execute unless function" always succeeds if run from a function
- [MC-264880](https://bugs.mojang.com/browse/MC-264880) - GUI slider uses new texture with programmer art
- [MC-265516](https://bugs.mojang.com/browse/MC-265516) - The "Cancel" button within some realms menus can be deselected using keyboard navigation despite it being the only element within the said menu
- [MC-265647](https://bugs.mojang.com/browse/MC-265647) - Shield arm position is incorrect while in a boat
- [MC-265656](https://bugs.mojang.com/browse/MC-265656) - Pumpkins can no longer be sheared

## GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/e3e4c46324ac42b1789f7ff6e895ae3c843a9819/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
