---
title: "Minecraft: Java Edition - 1.19.1 Release Candidate 1 "
date: 2022-06-23T17:38:29Z
updated: 2022-06-23T17:38:33Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/7153455261837-Minecraft-Java-Edition-1-19-1-Release-Candidate-1-
---

We\'re now releasing the first (and hopefully only) release candidate for Minecraft 1.19.1. We have also now created a help article on chat reporting, available [here](https://help.minecraft.net/hc/articles/7149823936781).

If there are no major issues following this release, no further changes will be done before the full release on Tuesday.

Happy mining!

# CHANGES IN 1.19.1 RELEASE CANDIDATE 1

-   Updated the categories for chat reporting
    -   The "Profanity", "Nudity or pornography" and "Extreme violence or gore" categories have been removed
    -   The description for the "Drugs and alcohol" category has been updated to "Someone is encouraging others to partake in illegal drug related activities or encouraging underage drinking"
    -   The description of the "Harassment and bullying" category has been extended with the following: or posting private personal information about you or someone else without consent ("doxing").
-   Increased the amount of chat context sent with each chat report

# TECHNICAL CHANGES IN 1.19.1 RELEASE CANDIDATE 1

-   The run_command click event for text components no longer supports sending chat messages directly
    -   Only commands are supported, so a command such as /say should be used instead
    -   This means values now always need to be '/'-prefixed

# FIXED BUGS IN 1.19.1 RELEASE CANDIDATE 1

-   [MC-250020](https://bugs.mojang.com/browser/MC-250020) - Allay doesn't ignore items when mobGriefing is set to false
-   [MC-252511](https://bugs.mojang.com/browser/MC-252511) - Bedrock not generating on the new blending border between old and new blending
-   [MC-252987](https://bugs.mojang.com/browser/MC-252987) - Illegal character '\\n' in text component clickEvent
-   [MC-253114](https://bugs.mojang.com/browser/MC-253114) - Selection boxes within the "Select Chat Messages to Report" menu don't disappear when deselecting fields after reentering the menu
-   [MC-253188](https://bugs.mojang.com/browser/MC-253188) - Selection boxes within the "Select Chat Messages to Report" menu differ in size ever so slightly depending on how they're selected
-   [MC-253225](https://bugs.mojang.com/browser/MC-253225) - Selection boxes of fields within player reporting menu lists don't contain white outlines when selected using the TAB key
-   [MC-253227](https://bugs.mojang.com/browser/MC-253227) - Players can only be reported using the reporting system if they're present within the world
-   [MC-253336](https://bugs.mojang.com/browser/MC-253336) - Using the eye of ender "crashes" game in the seed: -3721742095548798177
-   [MC-253422](https://bugs.mojang.com/browser/MC-253422) - The selection of the "Please report breaches of our Community Standards" text within the "Select Report Category" menu is slightly confusing due to the words "Community Standards" being underlined by default

# GET THE RELEASE CANDIDATE

Release candidates are available for Minecraft: Java Edition. To install the release candidate, open up the Minecraft Launcher and enable snapshots in the \"Installations\" tab.

**Release candidates can corrupt your world, so please make a backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://piston-data.mojang.com/v1/objects/71a6d4c634de517ab1b6c2db8b743cbc831d9794/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://aka.ms/snapshotbugs?ref=blog)!

Want to give feedback?

-   Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
