---
title: "Minecraft: Java Edition - 1.19.1"
date: 2025-02-27T11:56:18Z
updated: 2025-02-27T11:56:38Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/34593554333197-Minecraft-Java-Edition-1-19-1
hash:
  h_01JN3M2DP7V8BV6ARQ6PTA9P99: features
  h_01JN3M2DP7MQKSPX7S5NEHABY1: allay
  h_01JN3M2DP7K0BE5DEESWBKP63Q: sculk-catalyst
  h_01JN3M2DP7STPHW1TCSJMYEWES: chat
  h_01JN3M2DP7M2C80GE6Z62YPMCY: chat-trust-status
  h_01JN3M2DP7NR83GK1WSEVX5EVA: chat-preview
  h_01JN3M2DP7HEKVR14XHBZYJW4R: player-reporting
  h_01JN3M2DP71MCMFBNKRX3HNPCX: suspensions--bans
  h_01JN3M2DP7Q7RYWB7AH1WXW93W: realms
  h_01JN3M2DP7QHC3T4WJ2C9HAY0E: technical
  h_01JN3M2DP7MBJ0JYVH513Z7EPJ: chat-types
  h_01JN3M2DP7YZ3HBHG9P9RZKMRQ: components
  h_01JN3M2DP71JPGKWQQEGP1EHAG: game-events
  h_01JN3M2DP74669CD12RKHFB7GE: added-game-events
  h_01JN3M2DP725R0BAYTVA0D1MEC: multiplayer-secure-chat-signing
  h_01JN3M2DP7TFC5JMWCJSYFAYVZ: server
  h_01JN3M2DP7WNXAY3FKABTE74JV: fixed-bugs-in-1191
  h_01JN3M2DP8MN2FY360BABFMK20: get-the-release
---

We're now releasing 1.19.1 for Minecraft: Java Edition. This release adds Allay duplication and new Player Safety functionality.

## Features

- Added Allay Duplication
- Tweaked Sculk Catalysts
- Added Chat Trust status
- New Options for Chat Preview
- Added Player Reporting

### Allay

- Allays will dance to a Record playing in a Jukebox
- If the Allay is handed an Amethyst Shard while dancing it will duplicate
  - Duplication has a 5-minute cooldown

### Sculk Catalyst

- Sculk Catalysts will now drop 5 XP instead of 20 XP

### Chat

- Moved the chat scrollbar to the right
- When typing a message, the signing status of the displayed chat message is shown with a colored indicator
  - The indicator will either appear to the left of the chat input field, or to the left of the chat preview if chat preview is being used
  - The indicator will be blue when the displayed message is signed
  - The indicator will be orange when Chat Preview is enabled and a preview is waiting to be signed
- The background of the chat preview will also display slightly faded when a preview is waiting to be signed
- Added a warning toast when connecting to a server that doesn’t enforce secure chat
- The list of players on the Social Interactions screen now places entries for players with recently seen messages at the top of the list

### Chat Trust Status

- Messages that are not signed with the Secure Chat system, or have been tampered with by the server will now be marked
  - Messages with missing or invalid signatures are marked as “Not Secure”
  - Messages that are detected as modified are marked as “Modified”
- The trust status of messages are displayed with both a colored indicator and an icon
  - The colored indicator is always visible
  - The icon is only visible when the chat screen is open
- Hovering over the icon will provide more information about the trust status
  - For modified messages, the original secure text will also be displayed in the tooltip
- System messages (non-player chat, such as command output) are displayed with a gray color indicator

### Chat Preview

- Added “When Sending” Chat Preview option for updating chat previews only when attempting to send a message
  - To confirm sending a message, a second hit of the Enter/Return key is required
  - The previous “ON” setting has been renamed to “While Typing”
- In “While Typing” mode, the chat preview will no longer display previews if the message has not been modified by the server
- Chat Preview is now enabled in singleplayer, and will display when using commands that have selector substitution such as /say
- Previewed hover events and click events are highlighted with a solid background

### Player Reporting

It is now possible to report a player for sending abusive messages in the game chat. A reporter is required to select the individual chat messages that contain the objectionable content, as well as the category of the report, this is to provide the best context for our moderation team to take action. This is accessed via the social interactions screen.

- Multiple chat messages can be selected for reporting
  - Additional chat messages around this selection will also be used to provide our moderation team with further context
- The category of the report can be selected from a list of Report Categories
  - The Report Categories screen has a “Learn About Reporting” button that links to a help article
- Additional comments can be entered to provide more details and information regarding the report

For more information, see this [article about Player Reporting](https://www.minecraft.net/en-us/article/addressing-player-chat-reporting-tool) and our [Reporting FAQ](../../help/Player-Reporting-Bans/Guidelines-for-Reporting-Inappropriate-Player-Behavior-in-Minecraft.md).

### Suspensions & Bans

- The game will now show a notice screen on startup if you have been suspended from online play
  - The reason for the suspension is shown as well as how long it is effective for

### Realms

- A message that has been filtered by the Java Realms Profanity Filter will now be marked with a yellow marker
- Players will be notified if a chat message they have sent has been fully filtered for one or more receiving players on the Realm

## Technical

- The chat input box will no longer apply to custom font glyphs with negative advances, or glyphs with advances greater than 32

### Chat Types

- Chat types added to the chat_types registry are now only used for player chat, and not system messages
  - The system and game_info chat types have been removed
- Chat types have been simplified and are now only required to define chat and narration decorations
  - Chat types no longer support overlays
  - A system message should instead be used to display overlays
- The msg_command chat type has been split apart into msg_command_incoming and msg_command_outgoing
- The team_msg_command chat type has been split apart into team_msg_command_incoming and team_msg_command_outgoing
- The team_name chat type parameter has been renamed to target
  - This chat type parameter is now used by msg_command_outgoing

### Components

- The run_command click event for text components no longer supports sending chat messages directly
  - Only commands are supported
  - This means values now always need to be /-prefixed
  - Commands such as /say that produce a signed player chat message are not allowed
    - /tellraw should be used instead

### Game Events

### Added Game Events

- jukebox_play
- jukebox_stop_play

### Multiplayer Secure Chat Signing

- The order of chat messages are now cryptographically verified
  - This is used for validating the context of chat messages for Player Reports

### Server

- enforce-secure-profile is now defaulted to true for dedicated servers
- Insecure chat messages logged in the server are prefixed with a \[Not Secure\] tag
- Custom servers can set their own auto-completion options for regular chat via a new network packet
- Custom servers can hide player chat messages from display via a new network packet
  - This does not delete player chat messages from chat logs

### Fixed Bugs in 1.19.1

- [MC-72687](https://bugs.mojang.com/browse/MC-72687) - There are no shadows on text displayed within the action bar
- [MC-93254](https://bugs.mojang.com/browse/MC-93254) - Color in text prompt using commands
- [MC-130243](https://bugs.mojang.com/browse/MC-130243) - /debug stop message uses OS locale specific number formatting
- [MC-144043](https://bugs.mojang.com/browse/MC-144043) - Trader llamas continue to spit after their target died
- [MC-146891](https://bugs.mojang.com/browse/MC-146891) - Nitwit villager can have a profession
- [MC-148149](https://bugs.mojang.com/browse/MC-148149) - Linux game crash when opening links
- [MC-149047](https://bugs.mojang.com/browse/MC-149047) - Scroll Sensitivity slider label uses OS locale for number formatting
- [MC-165516](https://bugs.mojang.com/browse/MC-165516) - Snow Golem, Witch, Llama, Drowned, and Wither will keep attacking after its target is gone if generic.movement_speed is 0
- [MC-177505](https://bugs.mojang.com/browse/MC-177505) - Cured Villager can work at wrong workstation
- [MC-198679](https://bugs.mojang.com/browse/MC-198679) - Enchanted armor pieces worn by entities lose their enchantment glint if the player is in a far distance
- [MC-207077](https://bugs.mojang.com/browse/MC-207077) - Crash on loading pre-1.13 world with noteblock + note NBT in inventory
- [MC-211239](https://bugs.mojang.com/browse/MC-211239) - The background opacity box of command suggestions is rendered behind the "Leave Bed" button when sleeping in a bed
- [MC-220872](https://bugs.mojang.com/browse/MC-220872) - Chat scroll bar is still offset
- [MC-233228](https://bugs.mojang.com/browse/MC-233228) - Text Filtering Config Doesn't Work in 21w20a and later
- [MC-235614](https://bugs.mojang.com/browse/MC-235614) - Reference to unexisting predicate in a datapack causes java.lang.NullPointerException
- [MC-249523](https://bugs.mojang.com/browse/MC-249523) - Sky color is visible for a brief moment after applying Night Vision under Darkness effect
- [MC-249973](https://bugs.mojang.com/browse/MC-249973) - Loading resource packs is significantly slower in 1.19
- [MC-250020](https://bugs.mojang.com/browse/MC-250020) - Allay doesn't ignore items when mobGriefing is set to false
- [MC-250261](https://bugs.mojang.com/browse/MC-250261) - Frogs can lay spawn on flowing water
- [MC-250267](https://bugs.mojang.com/browse/MC-250267) - Frogs don't lay their spawn on waterlogged blocks
- [MC-252082](https://bugs.mojang.com/browse/MC-252082) - Loading server resource packs reloads twice when one is already loaded
- [MC-252190](https://bugs.mojang.com/browse/MC-252190) - Player-dropped items creating vibrations depends on you sneaking at the moment the item hits the ground, instead of when you threw the item
- [MC-252258](https://bugs.mojang.com/browse/MC-252258) - Wool block / carpet items generate vibrations, unless thrown by crouching players
- [MC-252265](https://bugs.mojang.com/browse/MC-252265) - --server argument causes java.lang.NullPointerException crash on some servers
- [MC-252327](https://bugs.mojang.com/browse/MC-252327) - World list fails to load after restarting game and deleting a world
- [MC-252363](https://bugs.mojang.com/browse/MC-252363) - Mobs that naturally spawn in with equipment will play the respective equipping noise
- [MC-252439](https://bugs.mojang.com/browse/MC-252439) - Cured Villager trades are not refreshing
- [MC-252508](https://bugs.mojang.com/browse/MC-252508) - Realms worldgen type missing language string
- [MC-252511](https://bugs.mojang.com/browse/MC-252511) - Bedrock not generating on the new blending border between old and new blending
- [MC-252539](https://bugs.mojang.com/browse/MC-252539) - Commands sending messages use formatting of regular chat in server logs
- [MC-252546](https://bugs.mojang.com/browse/MC-252546) - Poor audio quality compared to 1.18.2
- [MC-252683](https://bugs.mojang.com/browse/MC-252683) - Unexpected exception in the selector loop causing server lag
- [MC-252702](https://bugs.mojang.com/browse/MC-252702) - Game crashes when trying to launch 1.19 when system is in Arabic, Persian, or adjacent formats
- [MC-252987](https://bugs.mojang.com/browse/MC-252987) - Illegal character '\n' in text component clickEvent
- [MC-253053](https://bugs.mojang.com/browse/MC-253053) - Tooltips are cut off at the bottom of the screen
- [MC-253055](https://bugs.mojang.com/browse/MC-253055) - Resource packs causing each WeighedSoundEvents to duplicate Sounds
- [MC-253214](https://bugs.mojang.com/browse/MC-253214) - Tooltips will become offset in certain cases
- [MC-253336](https://bugs.mojang.com/browse/MC-253336) - Using the eye of ender "crashes" game in the seed: -3721742095548798177
- [MC-253402](https://bugs.mojang.com/browse/MC-253402) - Game crash when you shift right click on item in your hotbar to the chest at the same time as you die
- [MC-253888](https://bugs.mojang.com/browse/MC-253888) - Messages that servers have tampered with through chat reporting are signed and reportable
- [MC-254228](https://bugs.mojang.com/browse/MC-254228) - Client data generator crashes due to locale-dependent String.format
- [MC-254230](https://bugs.mojang.com/browse/MC-254230) - /worldborder center message uses OS locale specific number formatting
- [MC-254349](https://bugs.mojang.com/browse/MC-254349) - Crash when putting dye into a loom on a modded server
- [MC-254355](https://bugs.mojang.com/browse/MC-254355) - Key binds set to mouse buttons of number greater than 8 switch over by 1 when the game starts

## Get the Release

To install the release, open up the [Minecraft Launcher](https://www.minecraft.net/download) and click play! Make sure your Launcher is set to the “Latest Release” option.  

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/8399e1211e95faa421c1507b322dbeae86d604df/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)

Want to give feedback? Head over to our [feedback website](https://feedback.minecraft.net/) or come chat with us about it on the [official Minecraft Discord](https://discord.gg/Minecraft).
