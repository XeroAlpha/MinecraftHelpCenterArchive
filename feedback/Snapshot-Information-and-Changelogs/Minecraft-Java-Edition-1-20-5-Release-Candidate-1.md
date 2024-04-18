---
title: "Minecraft: Java Edition - 1.20.5 Release Candidate 1"
date: 2024-04-18T13:35:00Z
updated: 2024-04-18T13:35:05Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/26000007776397-Minecraft-Java-Edition-1-20-5-Release-Candidate-1
hash:
  h_01HVRPN2RYPVCC3XY9BGVSFCG9: technical-changes
  h_01HVRPN2RYSCH99VH81T8VF8HN: fixed-bugs-in-1205-release-candidate-1
  h_01HVRPN2RY7GAM3W8JCZY52CSA: get-the-release-candidate
---

This week's shipping frenzy continues with our very first Release Candidate for 1.20.5! Barring any significant or critical issues found within it, this is the version we are planning to ship as Minecraft: Java Edition 1.20.5 next week.

## TECHNICAL CHANGES

- Changed the approach to game client disconnecting on invalid data in packets sent from a server
  - To ease the transition period, modded servers can opt out by setting the appropriate field in the handshake/game_profile packet
  - This option will be removed in the next release

## FIXED BUGS IN 1.20.5 RELEASE CANDIDATE 1

- [MC-270867](https://bugs.mojang.com/browse/MC-270867) - Severe lag when upgrading 1.20.4 worlds
- [MC-270871](https://bugs.mojang.com/browse/MC-270871) - Upgrading a world with horses wearing leather horse armor makes the horse immune to freezing forever

## GET THE RELEASE CANDIDATE

Release Candidates are available for Minecraft: Java Edition. To install the Release Candidate, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/ec45f58d589dc1b00b25c6798dd10d2af70867e5/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.21 features, head over to the dedicated [Feedback site category](https://aka.ms/Minecraft121Feedback). You can also leave any other feedback on the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
