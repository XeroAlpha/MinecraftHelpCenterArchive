---
title: "Minecraft: Java Edition - 1.19.4 Release Candidate 1 "
date: 2023-03-09T19:12:44Z
updated: 2023-03-09T19:12:48Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/13860183325197-Minecraft-Java-Edition-1-19-4-Release-Candidate-1-
---

Here is the first (and hopefully last) release candidate for 1.19.4. Unless something critical pops up, no further changes will be made for the full release, which is planned for next week.

Happy mining!

# TECHNICAL CHANGES

Changes to display entity interpolation:

- interpolation always starts at the beginning on client tick
- field interpolation_start is replaced with start_interpolation, with a different meaning
- start_interpolation describes amount of ticks from the start of next client tick after receiving an update to start of interpolation
  - for example value 0 means that interpolation will start at the beginning of next client tick after receiving the update
- start_interpolation is not stored in entity data
  - when using data commands, if interpolated value is updated, but start_interpolation is not present in modified tag, interpolation will continue from the time of previous update, but with new values

# FIXED BUGS IN 1.19.4-RC1

- [MC-260857](https://bugs.mojang.com/browse/MC-260857) - Display entities summoned with initial transformation interpolate incorrectly from default transformation during next transformation

# GET THE RELEASE CANDIDATE

Release Candidate are available for Minecraft: Java Edition. To install the Release Candidate, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/c41c9653dc18634f52c010040177deabf9a878f2/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). You can also leave any other feedback on the [Feedback site](https://aka.ms/JavaSnapshotFeedback). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
