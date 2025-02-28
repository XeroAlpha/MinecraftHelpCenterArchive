---
title: The Microsoft Store Opens when I Try to Start Minecraft from the Minecraft Launcher
date: 2025-02-27T21:56:11Z
updated: 2025-02-28T17:16:50Z
categories: Minecraft Launcher Support
tags:
  - section_27166539479437
link: https://help.minecraft.net/hc/en-us/articles/34616498050189-The-Microsoft-Store-Opens-when-I-Try-to-Start-Minecraft-from-the-Minecraft-Launcher
hash:
  h_01JN4PCKFWM1M6R34AJCM4TP0E: update-your-microsoft-store-library
  h_01JN4PDKHR7S0RJQRXGP3EFD8V: reinstall-gaming-services
---

The Minecraft Launcher may redirect you to the Microsoft Store when you try to open a game because of how both apps are connected. If you get sent to the Microsoft Store when you try to launch a game from the Minecraft Launcher, there are two recommended ways to fix this. First, update all apps in your Microsoft Store library and then reinstall Xbox gaming services.

## Update your Microsoft Store library

1.  Open the [Microsoft Store app](http://aka.ms/MSStoreHome).
2.  Select **Downloads** in the bottom left of the window.
3.  Select **Get Updates** in the top right of the window.
4.  Wait for everything to update. 

## Reinstall Gaming Services

1.  Select the **Search** icon on the taskbar, type **powershell**, right-click on **Windows PowerShell**, and then select **Run as administrator**.
2.  In Windows PowerShell, type **get-appxpackage Microsoft.GamingServices \| remove-AppxPackage -allusers** and press Enter.
3.  In the same window, type **start ms-windows-store://pdp/?productid=9MWPM2CQNLH** and press Enter.
4.  Install the app on that page and select **Yes** when you receive the User Account Control (UAC) prompt.
5.  Restart your device and try to install the game again.
