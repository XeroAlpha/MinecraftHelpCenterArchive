---
title: "Minecraft: Java Edition - 1.19.1 Pre-Release 5"
date: 2022-09-15T14:06:04Z
updated: 2022-09-15T14:08:05Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/9186831932173-Minecraft-Java-Edition-1-19-1-Pre-Release-5
hash:
  changes-in-1.19.1-pre-release-5: changes-in-1191-pre-release-5
  technical-changes-in-1.19.1-pre-release-5: technical-changes-in-1191-pre-release-5
  bugs-fixed-in-1.19.1-pre-release-5: bugs-fixed-in-1191-pre-release-5
---

We are now releasing pre-release 5 for Minecraft 1.19.1. This pre-release includes the remaining fixes for a known exploit regarding player report context and several improvements to chat preview. It also fixes some other crashes and bugs.

# CHANGES IN 1.19.1 PRE-RELEASE 5

## CHAT

- When writing chat messages, the signing status of the displayed chat messages is shown with a colored indicator
  - The indicator will either appear to the left of the chat input field, or to the left of the chat preview if chat preview is being used
  - The indicator will be green when the displayed message is signed
  - The indicator will be orange when Chat Preview is enabled and a preview is waiting to be signed
- The background of the chat preview will also display slightly faded when a preview is waiting to be signed

## CHAT PREVIEW

- Added “On Send” Chat Preview option for updating chat previews only when attempting to send a message
  - To confirm sending a message, a second hit of the Enter/Return key is required
  - The previous “ON” setting has been renamed to “On Modified”
- The “On Modified” mode no longer displays previews if the message has not been modified by the server
- Chat Preview is now enabled in singleplayer, and will display when using commands that have selector substitution such as`/say`
- Previewed hover events and click events are now highlighted with a solid background

# TECHNICAL CHANGES IN 1.19.1 PRE-RELEASE 5

- The`team_msg_command`chat type has been split apart into`team_msg_command_incoming`and`team_msg_command_outgoing`

# BUGS FIXED IN 1.19.1 PRE-RELEASE 5

- [MC-130243](https://bugs.mojang.com/browse/MC-130243)- /debug stop message uses OS locale specific number formatting
- [MC-149047](https://bugs.mojang.com/browse/MC-149047)- Scroll Sensitivity slider label uses OS locale for number formatting
- [MC-252546](https://bugs.mojang.com/browse/MC-252546)- Poor audio quality compared to 1.18.2
- [MC-252702](https://bugs.mojang.com/browse/MC-252702)- Game crashes when trying to launch 1.19 when system is in Arabic, Persian, or adjacent formats
- [MC-253223](https://bugs.mojang.com/browse/MC-253223)- “A preposition is incorrectly used within the ““gui.abuseReport.reason.terrorism_or_violent_extremism.description”” string”
- [MC-253888](https://bugs.mojang.com/browse/MC-253888)- Messages that servers have tampered with through chat reporting are signed and reportable
- [MC-253950](https://bugs.mojang.com/browse/MC-253950)- Sending a chat message too fast after typing it fails to sign the eventual proper chat preview
- [MC-253997](https://bugs.mojang.com/browse/MC-253997)- “The current description of ““Imminent harm - Threat to harm others”” report category seems not matching its title”
- [MC-254089](https://bugs.mojang.com/browse/MC-254089)- “Chat Preview components allow server to ““hide”” content”

# GET THE PRE-RELEASE

Pre-releases are available for Minecraft: Java Edition. To install the pre-release, open up the [Minecraft Launcher](https://www.minecraft.net/en-us/download) and enable snapshots in the "Installations" tab.

**Pre-releases can corrupt your world, so please make a backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/33cdf9ceaaedebb0a71ca5f4d85d4e7198c09b8e/server.jar)

Report bugs here:

- Minecraft issue tracker!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
