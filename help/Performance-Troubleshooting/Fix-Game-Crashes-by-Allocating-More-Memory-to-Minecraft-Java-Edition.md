---
title: "Fix Game Crashes by Allocating More Memory to Minecraft: Java Edition"
date: 2025-08-25T21:29:57Z
updated: 2025-08-26T16:15:17Z
categories: Performance & Troubleshooting
tags:
  - title_minecraft_java_edition
  - title_minecraft
  - subject_game_does_not_start
  - category_technical_support
  - subject_game_performance
  - platform_windows_10
  - subject_game_crashes
  - platform_linux
  - platform_macos
  - platform_pc
  - platform_windows_11
  - platform_windows_10/11
  - title_minecraft_java_bedrock_for_pc
  - section_27166432886285
  - use_for_autoreply
link: https://help.minecraft.net/hc/en-us/articles/39083573916941-Fix-Game-Crashes-by-Allocating-More-Memory-to-Minecraft-Java-Edition
hash:
  h_01K3HGN1S0S2PG9C1EPT5MBKMD: how-to-change-the-memory-allocated-to-minecraft-java-edition
---

Minecraft: Java Edition allows you to use more of your device’s random-access memory (RAM) by changing settings in the Minecraft Launcher. If you still have crashes or lag issues after trying the troubleshooting in [Fixing Crashes and Lag Issues in Minecraft](./Fix-Crashes-and-Lag-Issues-in-Minecraft.md), you may want to try changing Minecraft’s default RAM settings. Always [backup your Minecraft Worlds](https://help.minecraft.net/hc/en-us/sections/27166561402125) before troubleshooting or changing your game settings.

## How to change the memory allocated to Minecraft: Java Edition

1.  Verify the installed RAM on your computer. This will determine the maximum you can allocate to Minecraft.
    - Windows: Start menu \> Settings \> System \> About
    - macOS: Apple icon \> About This Mac
2.  Open the Minecraft Launcher and sign in with your Microsoft account.
3.  Select **Minecraft: Java Edition** on the left.
4.  Select the **Installations** tab at the top.
5.  Select the installation you want to change.
6.  Select **More Options** on the Edit installation screen.
7.  Copy all the text in the JVM arguments field and paste it into a text editor.
    - Windows: Notepad
    - macOS: TextEdit
8.  Save the text file so you can restore the original JVM arguments if needed.
9.  Locate the memory value in the JVM Arguments field in the Launcher (-Xmx2G) and change the number to the amount of RAM you want to allocate. For example, changing the value to -Xmx4G will allocate 4GB of RAM to Minecraft.
    - 32-bit operating systems: 4GB of RAM is the maximum.
    - 64-bit operating systems: Half of your RAM is the recommended maximum.
10. Select the **Save** button.

If you encounter errors when trying to launch Minecraft, compare the new value to the backup copy you made and check for syntax mistakes or case differences. You can return the JVM arguments field to its defaults by using the text file you created earlier and pasting its contents into the field. You can also revert changes if you [Create a new Minecraft Java Installation to prevent game issues](../Minecraft-Launcher-Support/Create-a-New-Minecraft-Java-Installation-to-Troubleshoot-Launcher-Crashes.md).
