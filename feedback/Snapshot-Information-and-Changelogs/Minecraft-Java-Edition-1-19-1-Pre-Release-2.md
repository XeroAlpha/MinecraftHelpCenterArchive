---
title: "Minecraft: Java Edition - 1.19.1 Pre-Release 2"
date: 2022-06-30T16:29:53Z
updated: 2022-06-30T16:29:56Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/7321196374413-Minecraft-Java-Edition-1-19-1-Pre-Release-2
---

Hey everyone! As a few of you might have noticed, we've made the decision to postpone the release of 1.19.1 and we\'re now going back into pre-release mode. This is in order to address a few of our more noticeable issues. We\'ve yet to fully decide on a new release date, but it won\'t be too far in the future.

We've received a lot of feedback regarding the Player Chat Report feature, which is something we address specifically in a newly released post [here](https://www.minecraft.net/article/addressing-player-chat-reporting-tool), as well as in our [FAQ](https://aka.ms/chatreportingfaq) which hopefully answers all your questions!

# CHANGES IN 1.19.1 PRE-RELEASE 2

We\'ve added the ability to see the signing status of chat messages -- this is so you can easily tell when a server is tampering with, or removing the signing security of, their players\' messages.

## CHAT TRUST STATUS

-   Messages that are not signed with the Secure Chat system, or have been tampered with by the server will now be marked
    -   Messages with missing or invalid signatures are marked as "Not Secure"
    -   Messages that are detected as modified are marked as "Modified"
-   The trust status of messages are displayed with both a colored indicator and an icon
    -   The colored indicator is always visible
    -   The icon is only visible when the chat screen is open
-   Hovering over the icon will provide more information about the trust status
    -   For modified messages, the original secure text will also be displayed in the tooltip

# TECHNICAL CHANGES IN 1.19.1 PRE-RELEASE 2

## CHAT TYPES

-   Chat types added to the chat_types registry are now only used for player chat, and not system messages
    -   The system and game_info chat types have been removed
-   Chat types have been simplified and are now only required to define chat and narration decorations
    -   Chat types no longer support overlays
    -   A system message should instead be used to display overlays

## SERVER.PROPERTIES

-   enforce-secure-profile is now defaulted to true for dedicated servers

# FIXED BUGS IN 1.19.1 PRE-RELEASE 2

-   [MC-253112](https://bugs.mojang.com/browse/MC-253112) - The game output console is logged with warnings regarding chat packets with invalid signatures when using entity selectors within commands
-   [MC-253121](https://bugs.mojang.com/browse/MC-253121) - Entities and other non-player chat message sources appear as players on the Select Chat Messages to Report screen
-   [MC-253493](https://bugs.mojang.com/browse/MC-253493) - The descriptions of report categories can once again overlap the "Description:" subtitle
-   [MC-253495](https://bugs.mojang.com/browse/MC-253495) - Selection boxes of fields within the "Select Report Category" menu list don't contain white outlines when selected using the TAB key
-   [MC-253497](https://bugs.mojang.com/browse/MC-253497) - Entities and other non-player chat message sources appear in the Social Interactions menu
-   [MC-253501](https://bugs.mojang.com/browse/MC-253501) - Long messages within the "Select Chat Messages to Report" menu can extend beyond selection boxes and past the scroll bar
-   [MC-253517](https://bugs.mojang.com/browse/MC-253517) - Online players cannot connect to offline server because "invalid profile public key signature"

# GET THE PRE-RELEASE

Pre-releases are available for Minecraft: Java Edition. To install the pre-release, open up the Minecraft Launcher and enable snapshots in the \"Installations\" tab.

**Pre-releases can corrupt your world, so please make a backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://piston-data.mojang.com/v1/objects/17354c4963fb0176ad34595927ce62e55ea3daf4/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://aka.ms/snapshotbugs?ref=blog)!

Want to give feedback?

-   Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
