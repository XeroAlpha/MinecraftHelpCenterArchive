---
title: "Minecraft: Bedrock Edition Worlds Lost When Using External Storage on
  Android Devices"
date: 2021-10-14T15:57:30Z
updated: 2023-06-29T19:36:39Z
categories: "Minecraft: Bedrock Edition Technical"
tags:
  - section_12617893243277
  - section_12618686416909
link: https://help.minecraft.net/hc/en-us/articles/4411299967629-Minecraft-Bedrock-Edition-Worlds-Lost-When-Using-External-Storage-on-Android-Devices
hash:
  h_01GK548CNH7F1ZFQ5JNSCZBXD4: method-1-moving-your-worlds-directly-to-their-new-location
  h_01GK548Q38FZHZR9XQYDSSPMGD: method-1a-use-a-usb-connection-and-a-windows-computer
  h_01GK548VRP4WA3W9KPWQD8X0DG: method-1b-use-a-file-manager-on-your-android-device
  h_01GK5490A1SDGYQRAB98YJ60HT: method-2-package-your-world-as-a-mcworld-and-import-it-into-minecraft
---

Starting with the Caves and Cliffs Part 2 update, Minecraft: Bedrock Edition will make required Android storage updates that may make player worlds disappear. The worlds are still on the device, but they must be moved manually for the game to continue to access them.

# In This Article:

- [Method 1: Moving your worlds directly to their new location](#method-1-moving-your-worlds-directly-to-their-new-location)
  - [Method 1a: Use a USB connection and a Windows computer](#method-1a-use-a-usb-connection-and-a-windows-computer)
  - [Method 1b: Use a file manager on your Android device](#method-1b-use-a-file-manager-on-your-android-device)
- [Method 2: Package your world as a .mcworld and import it into Minecraft](#method-2-package-your-world-as-a-mcworld-and-import-it-into-minecraft)

Worlds may disappear in these conditions:

- The world is saved on External Storage (Settings \> Profile \> File Storage Location \> External)
- The game is uninstalled and reinstalled, or the user backs up and restores to a new device

If you find yourself without access to your worlds, there are two approaches you can take to recover them. Due to the differences between Android vendors and implementations, you might need to try both approaches to find one that works for you.

## Method 1: Moving your worlds directly to their new location

If you have access to the new location for External Storage, you can move or copy your world folders directly to their new location.

- **The old location:** /games/com.mojang/minecraftWorlds
- **The new location:** /Android/com.mojang.minecraftpe/files/games/com.mojang/minecraftWorlds

**NOTE: These locations may vary depending on the device and version of Android you are running and whether External Storage is located on removable media (such as an SD card).**

### Method 1a: Use a USB connection and a Windows computer

1.  Make sure you have run Minecraft: Bedrock Edition and viewed the empty Play screen at least once. This will ensure the new folder exists.
2.  Connect your Android device to your computer using a USB cable.
3.  Make sure your USB connection is configured for transferring files. The way this is done will vary on Android devices. You may be able to change settings for USB Preferences like this:![mceclip0.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4411299868045)
4.  Open a File Explorer window on your Windows computer, open your Android device, and navigate to the **OLD** minecraftWorlds directory (usually /games/com.mojang/minecraftWorlds).
5.  Select the contents of the minecraftWorlds directory, right-click and choose Copy.  
    ![mceclip0.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4412024585869)
6.  Navigate to the **NEW** minecraftWorlds directory (usually /Android/com.mojang.minecraftpe/files/games/com.mojang/minecraftWorlds), right-click and choose Paste.

![mceclip2.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4411300659469)

7.  Launch Minecraft: Bedrock Edition, and your worlds should now be visible.

### Method 1b: Use a file manager on your Android device

1.  Make sure you have run Minecraft: Bedrock Edition and viewed the empty Play screen at least once. This will ensure the new folder exists.
2.  Use your device’s file manager or download a file manager you trust from the Google Play store.
3.  Throughout the process, you may be prompted to grant permission to access the directories you are entering. You will need to grant those permissions.
4.  Navigate to the **OLD** file location (usually games/com.mojang/minecraftWorlds).
5.  Navigate to the **NEW** file location (usually /Android/data/com.mojang.minecraftpe/files/games/com.mojang/minecraftWorlds) and press “Paste”.
6.  Launch Minecraft: Bedrock Edition, and your worlds should now be visible.

## Method 2: Package your world as a .mcworld and import it into Minecraft

If you cannot access the new location for your Minecraft: Bedrock Edition worlds in Method 1, you may instead use a file manager on your Android device to convert your world to the .mcworld format and import it directly into Minecraft: Bedrock Edition.

1.   Use your device’s file manager or download a file manager you trust from the Google Play store. The file manager must support compression (creating zip files) to complete this option.
2.  Navigate to the **OLD** file location given in Method 1 (usually games/com.mojang/minecraftWorlds).
3.  Open the folder for the world you want to import. You can either repeat this process for every world or open the file levelname.txt in the folder to look for the name of a specific world you want to import.
4.  Long-press on one of the items in the folder to select it, then select each of the remaining items in the folder.
5.  Create a ZIP archive of these files. This varies by application, but it may be in a menu such as More \> Compress. You may be asked to name the archive; you can choose any name you like.
6.  This should create an archive for you ending in “.zip”. Select this file, choose Rename, and change the extension from “.zip” to “.mcworld”.
7.  Launch this .mcworld file from your File Explorer. If prompted by the file manager to choose an application to open it with, choose Minecraft: Bedrock Edition.
8.  After Minecraft: Bedrock Edition is done launching, it should go through the import process, which will make your world available to play again. Confirm this by going to the Play screen and entering your world.
