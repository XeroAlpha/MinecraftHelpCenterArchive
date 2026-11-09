---
title: Troubleshooting Realms Pro Server Performance
date: 2026-11-02T15:31:00Z
updated: 2026-11-09T18:55:02Z
categories: Realms Pro
tags:
  - subject_creating_a_realm
  - category_realms_support
  - subject_other_realms_questions
  - section_50256982870285
link: https://help.minecraft.net/hc/en-us/articles/50080195280909-Troubleshooting-Realms-Pro-Server-Performance
hash:
  h_01M6ED6Y9BJ3V2CF4P3KP7M61A: identify-the-source-of-the-extra-load-on-the-server
  h_01M6ED6Y9FWK14677HKEW5WW6V: large-editor-actions-involving-blocks-affected-by-gravity-including-fluids-or-redstone-or-big-tnt-explosions
  h_01M6ED6Y9H5998EKYH9Z5HG3PP: high-number-of-entities-in-one-place
  h_01M6ED6Y9KQRF9P9HZV3KZTDG0: large-number-of-add-on-packs-applied-to-the-world
  h_01M6ED6Y9MYZJK6889T0EG3PEE: unknown-source-or-the-steps-above-didnt-work
---

Realms Pro allows owners and Administrators to track their server's performance with live metrics. When one or more of the metrics is in the "High" category, the server is overloaded, and you will probably experience issues with game performance. Try the following steps to reduce load on the server and resolve issues. See [Understanding Realms Pro Server Performance](./Understanding-Realms-Pro-Server-Performance.md) for more information on how to view the metrics.

# Identify the Source of the Extra Load on the Server 

The best troubleshooting actions will depend on the source of the extra load. Below is a list of possible sources. If you identify any of them in your world, click the link for suggestions on how to troubleshoot the issue.  If you are unable to identify the source of the load, or if the suggested troubleshooting steps don’t work, see Unknown Source, or Steps Didn’t Work

- [Large Editor Actions Involving Blocks Affected by Gravity (Including Fluids) or Redstone, or Big TNT Explosions](#large-editor-actions-involving-blocks-affected-by-gravity-including-fluids-or-redstone-or-big-tnt-explosions)
- [High Number of Entities in One Place](#high-number-of-entities-in-one-place)
- [Large Number of Add-On Packs Applied to the World](#large-number-of-add-on-packs-applied-to-the-world)

## Large Editor Actions Involving Blocks Affected by Gravity (Including Fluids) or Redstone, or Big TNT Explosions

Try moving everyone away from the source. Once it’s no longer within range of any user, the server will stop trying to calculate how the blocks/entities should change with every tick, which should dramatically reduce load. However, whenever someone goes near there again, the problem may resume. 

To fix the problem permanently:

- One player may want to go to that area while everyone else is offline and let the game process for a while until whatever is happening resolves (blocks falling, something exploding, etc.).
- If the issue is caused by fluids, delete the source blocks.
- If you don’t mind losing some progress, use Minecraft Editor to regenerate the chunk containing the source. See ***Realms Pro (New) Article: Launch into a Pro Realm in Minecraft Editor*** for more information.

## High Number of Entities in One Place

1.  Enter the Realm as an Editor, See [Launch a Pro Realm in Minecraft Editor](./Launch-a-Pro-Realm-in-Minecraft-Editor.md) for more information.
2.  Pause entities to make them easier to select. See [Minecraft Bedrock Editor World Options](https://learn.microsoft.com/en-us/minecraft/creator/documents/bedrockeditor/editorworldoptions?view=minecraft-bedrock-stable) to learn more.
3.  Delete entities. See [Minecraft Bedrock Editor Summon Tool](https://learn.microsoft.com/en-us/minecraft/creator/documents/bedrockeditor/editorsummontool?view=minecraft-bedrock-stable) for more information.

## Large Number of Add-On Packs Applied to the World

- Disable or re-order add-on packs. See [Troubleshoot Add-On Issues in Minecraft](../Marketplace-Troubleshooting/Troubleshoot-Add-On-Issues-in-Minecraft.md)

# Unknown Source, or the Steps Above Didn't Work

1.  Close and re-open the server. See [Close and Reopen Your Minecraft Realm to Solve Connection Errors](../Troubleshoot-Minecraft-Realms/Close-and-Reopen-Your-Minecraft-Realm-to-Solve-Connection-Errors.md) for more information.
2.  Try changing the server settings. See [Manage Settings for Your Minecraft: Bedrock Edition Realm](../Manage-Realms-Settings/Manage-Settings-for-Your-Minecraft-Bedrock-Edition-Realm.md) for details.
3.  If these do not resolve the problem, revert your world to a save that was created before server performance degraded. See [Restore a Backup Save of a Minecraft: Bedrock Edition Realm World](../Manage-Realms-Save-Files/Restore-a-Backup-Save-of-a-Minecraft-Bedrock-Edition-Realm-World.md) to learn how to do this.
