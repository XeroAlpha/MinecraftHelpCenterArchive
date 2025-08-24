---
title: I Can’t Find my Minecraft World on Android
date: 2021-11-19T22:40:09Z
updated: 2024-06-14T21:32:52Z
categories: Backup & Restore
tags:
  - subject_progress_and_saved_games
  - title_minecraft
  - category_technical_support
  - subject_downloads_and_installations
  - platform_android
  - section_27166561402125
  - use_for_autoreply
link: https://help.minecraft.net/hc/en-us/articles/4414144725389-I-Can-t-Find-my-Minecraft-World-on-Android
hash:
  h_01J0CAJ0EDT7768TQV3Y7CBSFX: move-your-worlds-directly-to-their-new-location
  h_01J0CAKGS2WN7DQGCTKR9P16BV: information-about-android-cleaner-applications
---

If you play Minecraft on an Android device, you may notice that your world saves are handled a little differently than on other platforms if you use external storage. If you update your version or create a new installation, you may be prompted to migrate your data. If you find yourself without access to your worlds files in external storage, follow the instructions below.

## Move your worlds directly to their new location

If your world is not in the proper folder, you can try moving it. Visit [How to Locate Minecraft World Files on Mobile](./Find-Minecraft-World-Files-on-Mobile-Devices.md) for steps on finding the location of your world. To move files:

1.  Make sure you have started Minecraft on the device at least once and viewed the **Play** page so the proper folder has been created.
2.  Find your saved worlds. They may potentially be located at the old world directory **/games/com.mojang/minecraftWorlds**.
3.  Copy the contents.
4.  Now navigate to the NEW minecraftWorlds directory **/Android/com.mojang.minecraftpe/files/games/com.mojang/minecraftWorlds**.
5.  Paste the copied folders.
6.  Launch Minecraft on your device and the worlds should now be available.

## Information about Android Cleaner Applications

Android cleaner applications attempt to improve device performance by regularly terminating processes and deleting files. By default, some devices may schedule this cleaning to occur overnight, in the background, without user interaction.

These applications may mistakenly delete files migrated by Minecraft: Bedrock Edition on Android, causing the newly migrated worlds to be destroyed. If this happens, your world cannot be recovered unless you had made a back-up prior to its deletion.

If you have a cleaner application installed on your device, it is recommended that you do one of the following: remove the application, prevent it from cleaning files, or create an exception for Minecraft: Bedrock Edition so that files are not deleted.

If you have your world and would like to move it to a different device, see [How to Transfer Your World to Another Device in Minecraft: Bedrock Edition](./Use-Realms-to-Transfer-a-Minecraft-Bedrock-Edition-World-to-Another-Device.md).
