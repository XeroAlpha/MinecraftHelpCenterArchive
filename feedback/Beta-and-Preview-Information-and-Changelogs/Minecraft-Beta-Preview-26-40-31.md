---
title: Minecraft Beta & Preview - 26.40.31
date: 2026-07-14T14:50:30Z
updated: 2026-07-14T16:32:08Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/47366800720141-Minecraft-Beta-Preview-26-40-31
hash:
  h_01KNPK0P63JGFQT6KG30RZEDW7: information-on-minecraft-preview-and-beta
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-items: items
  user-content-stability-and-performance: stability-and-performance
  user-content-technical-updates: technical-updates
  user-content-networking: networking
---

**Posted:** 14 July 2026

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/).

# Features and Bug Fixes[](./Minecraft-Beta-Preview-26-40-31.md)

## Items[](./Minecraft-Beta-Preview-26-40-31.md)

- Arrows of Harming no longer bounce off entities and are now correctly removed on hit ([MCPE-239756](https://bugs.mojang.com/browse/MCPE-239756))

  > **Developer's Note:** We saw community discussion around this change and wanted to provide some additional context. We know this fix may affect existing mob farms, but after reviewing the issue we felt that resolving the bug was the best decision for the game long-term. Two primary elements factored into our decision: From a technical perspective, this bug only existed due to a fundamental issue in how `minecraft:projectile` used to process its sub-components - an issue we were not comfortable preserving or introducing exceptions to support. Fixing that system-level issue implicitly removed the 'arrow killer' functionality that some mob farms made use of. From a design perspective, allowing a single arrow to infinitely kill mobs without despawning wasn't an intended mechanic, and not one we felt comfortable preserving long-term.

## Stability and Performance[](./Minecraft-Beta-Preview-26-40-31.md)

- Fixed several crashes that could occur during gameplay
- Fixed a bug where an incorrect device tier was selected on some devices, preventing players from turning on Vibrant Visuals ([MCPE-239742](https://bugs.mojang.com/browse/MCPE-239742))
- Skin and Character Creator packs installed while browsing the Marketplace catalog are now automatically cleaned up using a least-recently-used policy, reducing on-disk usage and improving load times ([MCPE-239513](https://bugs.mojang.com/browse/MCPE-239513 "https://bugs.mojang.com/browse/mcpe-239513"))

# Technical Updates[](./Minecraft-Beta-Preview-26-40-31.md)

## Networking[](./Minecraft-Beta-Preview-26-40-31.md)

- When connecting to a dedicated server, the client probes the server for NetherNet support with a 3 second timeout. WinHTTP does not honor this timeout in the following situation:
  - The client connects to the server by URL instead of IP.
  - The server hostname's DNS record contains multiple IP addresses.
  - The server is behind a firewall that drops the client's probe TCP packets instead of responding with an RST.
- Instead of a 3 second timeout for the entire connection attempt, WinHTTP enforces a (3 seconds) \* (number of IP addresses in DNS record) timeout.
- This bug has been fixed by enforcing an overall 3 second timeout.
