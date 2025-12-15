---
title: "Fix Minecraft: Java Edition Game Crashes by Checking Memory Allocation"
date: 2025-08-25T21:29:57Z
updated: 2025-12-15T19:16:12Z
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
link: https://help.minecraft.net/hc/en-us/articles/39083573916941-Fix-Minecraft-Java-Edition-Game-Crashes-by-Checking-Memory-Allocation
hash:
  h_01KCHKJ5N4632B5MK0WT0Z1W5C: change-the-memory-allocated-to-minecraft-java-edition
---

If the memory allocation for Minecraft: Java Edition doesn’t match your system’s available RAM or the game version requirements, you may experience performance issues, including crashes, lag, or stuttering.

You may want to change JVM arguments when:

- **Your system has 4 GB of RAM or less**: Decrease memory allocation to **2 GB** for stability.
- **Your system has available RAM (8 GB or more)**: You can increase memory allocation for better performance.

For example, after version **26.1-snapshot-1**, the default memory allocation for playing Minecraft: Java Edition changed from **2 GB** to **4 GB**. If your system has **less than 4 GB of RAM**, you need to manually change the allocated memory back to **2 GB** to avoid crashes.

## Change the memory allocated to Minecraft: Java Edition

Memory allocation is editable in Java Edition by changing your JVM (Java Virtual Machine) arguments, accessed from the Minecraft Launcher. Always [backup your Minecraft Worlds](https://help.minecraft.net/hc/en-us/sections/27166561402125) before troubleshooting or changing your game settings.

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
