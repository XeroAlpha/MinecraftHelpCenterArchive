---
title: "Change the Garbage Collector for Minecraft: Java Edition"
date: 2025-12-15T18:32:56Z
updated: 2026-01-07T16:12:06Z
categories: Performance & Troubleshooting
tags:
  - section_27166432886285
link: https://help.minecraft.net/hc/en-us/articles/41950300066573-Change-the-Garbage-Collector-for-Minecraft-Java-Edition
hash:
  h_01KCHMMTM8C02VZM3A7JQA2RSD: change-the-garbage-collector-in-jvm-arguments
---

Garbage collection is a Java memory management tool that helps improve game performance. Beginning with Minecraft: Java Edition version 26.1-snapshot-1, the default garbage collector has changed. If you experience performance issues, you may want to switch back to the previous garbage collector.  

## Change the garbage collector in JVM Arguments

1.  Open the Minecraft Launcher and sign in with your Microsoft account.
2.  Select **Minecraft: Java Edition** on the left.
3.  Select the **Installations** tab at the top.
4.  Select the installation you want to change.
5.  Select **More Options** on the Edit installation screen.
6.  Copy all the text in the JVM arguments field and paste it into a text editor.
    - Windows: Notepad
    - macOS: TextEdit
7.  Save the text file so you can restore the original JVM arguments if needed.
8.  In the JVM arguments file, replace the phrase **-****XX:+****UseZGC** with **-****XX:+****UnlockExperimentalVMOptions**** ****-****XX:+****UseG1GC -****XX:G****1NewSizePercent=20 -****XX:G****1ReservePercent=20 -****XX:MaxGCPauseMillis****=50 -****XX:G****1HeapRegionSize=32M**.
9.  Select **Save**.
