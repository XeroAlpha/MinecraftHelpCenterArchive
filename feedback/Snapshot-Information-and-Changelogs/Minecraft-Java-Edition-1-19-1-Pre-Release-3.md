---
title: "Minecraft: Java Edition - 1.19.1 Pre-Release 3 "
date: 2022-07-07T08:05:18Z
updated: 2022-07-07T08:05:22Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/7483603308813-Minecraft-Java-Edition-1-19-1-Pre-Release-3-
---

Hi everyone,  

Before we jump into today\'s pre-release, we would like to take a moment and dedicate some thoughts to a person who over the years has made an incredible impact on the Minecraft community and touched the lives of many. **Technoblade** became synonymous with a source of good -- a positive force that time and time again made many, many people happy and someone we are proud to have as part of our giant family.

Minecraft is its community, which is why it should come as no surprise that so many of us mourn the loss of him, with tributes and love pouring in from across the world.

On behalf of the Java Team -- thank you Technoblade for the memories, for all the fun and the laughter. You will be dearly missed. Our thoughts are with your family and friends.

\-\--

Regarding 1.19.1: We still have a number of fixes in the pipeline, set for another pre-release in the near future. After that, once everything is tested and verified, we\'ll be aiming for a release candidate.

# CHANGES IN 1.19.1 PRE-RELEASE 3

-   Moved the chat scrollbar to the right of the chat window
-   System message are now displayed with a gray color indicator

# TECHNICAL CHANGES IN 1.19.1 PRE-RELEASE 3

-   Custom servers can set their own auto-completion options for regular chat via a new network packet
-   The list of players on the Social Interactions screen now places entries for players with recently seen messages at the top of the list
-   The msg_command chat type has been split apart into msg_command_incoming and msg_command_outgoing
-   The team_name chat type parameter has been renamed to target
    -   This chat type parameter is now used by msg_command_outgoing

# FIXED BUGS IN 1.19.1 PRE-RELEASE 3

-   [MC-253182](https://bugs.mojang.com/browse/MC-253182) - The second instance of a reflexive pronoun is used incorrectly within the "gui.abuseReport.reason.self_harm_or_suicide.description" string
-   [MC-253214](https://bugs.mojang.com/browse/MC-253214) - Tooltips will become offset in certain cases
-   [MC-253223](https://bugs.mojang.com/browse/MC-253223) - A preposition is incorrectly used within the "gui.abuseReport.reason.terrorism_or_violent_extremism.description" string
-   [MC-253496](https://bugs.mojang.com/browse/MC-253496) - /execute as {player} run say counts to the report system
-   [MC-253742](https://bugs.mojang.com/browse/MC-253742) - The chat scroll bar overlaps the colored indicators used to show the trust status of messages
-   [MC-253773](https://bugs.mojang.com/browse/MC-253773) - Whispers appear as modified by the server

# GET THE PRE-RELEASE

Pre-releases are available for Minecraft: Java Edition. To install the pre-release, open up the Minecraft Launcher and enable snapshots in the \"Installations\" tab.

**Pre-releases can corrupt your world, so please make a backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://piston-data.mojang.com/v1/objects/afbc14b0518843f189ed3ddd00f01b5881ef6513/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://aka.ms/snapshotbugs?ref=blog)!

Want to give feedback?

-   Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
