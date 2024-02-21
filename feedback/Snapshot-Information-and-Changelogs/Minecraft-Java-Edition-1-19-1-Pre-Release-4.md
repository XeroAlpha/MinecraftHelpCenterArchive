---
title: "Minecraft: Java Edition - 1.19.1 Pre-Release 4"
date: 2022-07-08T13:08:53Z
updated: 2022-07-08T13:08:58Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/7525860212749-Minecraft-Java-Edition-1-19-1-Pre-Release-4
hash:
  technical-changes-in-1.19.1-pre-release-4: technical-changes-in-1191-pre-release-4
  fixed-bugs-in-1.19.1-pre-release-4: fixed-bugs-in-1191-pre-release-4
---

We've now released 1.19.1 pre-release 4. This pre-release fixes an exploit found regarding contextual chat evidence when creating a Player Report.

# TECHNICAL CHANGES IN 1.19.1 PRE-RELEASE 4

- Custom servers can hide player chat messages from display via a new network packet
  - This does not delete player chat messages from chat logs
- Insecure chat messages logged in the server are prefixed with a \[Not Secure\] tag
- The order of chat messages are now cryptographically verified
  - This will be used for validating the context of chat messages for Player Reports

# FIXED BUGS IN 1.19.1 PRE-RELEASE 4

- [MC-253743](https://bugs.mojang.com/browse/MC-253743) - The server console doesn’t state if chat messages aren’t secure or have been modified
- [MC-253813](https://bugs.mojang.com/browse/MC-253813) - Chat commands with entity selectors often reported as “This message is not secure”

# GET THE PRE-RELEASE

Pre-releases are available for Minecraft: Java Edition. To install the pre-release, open up the Minecraft Launcher and enable snapshots in the "Installations" tab.

**Pre-releases can corrupt your world, so please make a backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/0f7f0c876024d0a84cb50547f72fe81dbfbfdb19/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://aka.ms/snapshotbugs?ref=blog)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
