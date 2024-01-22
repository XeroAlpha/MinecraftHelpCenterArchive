---
title: Troubleshooting Accessing Games from the Minecraft Launcher
date: 2024-01-22T20:38:35Z
categories: "Minecraft: Bedrock Edition Technical"
tags:
  - title_minecraft_java_edition
  - title_minecraft
  - subject_game_does_not_start
  - category_technical_support
  - subject_downloads_and_installations
  - title_minecraft_dungeons
  - platform_linux
  - platform_macos
  - platform_pc
  - title_minecraft_legends
  - section_12617893243277
  - platform_chromebook
  - title_minecraft_java_bedrock_for_pc
link: https://help.minecraft.net/hc/en-us/articles/23431742854413-Troubleshooting-Accessing-Games-from-the-Minecraft-Launcher
---

This article focuses on issues that may be preventing you from having access to Minecraft games in the Minecraft Launcher. For other troubleshooting topics, please visit [Minecraft Launcher Troubleshooting Common Issues](./Minecraft-Launcher-Troubleshooting-Common-Issues.md).

# In This Article:

- [I can play Minecraft: Bedrock Edition, but not Java](https://minecrafthelp.zendesk.com/hc/en-us/articles/undefined#h_01HMSDKT4CHR2E9N71FAC28PS1)
- [I don’t see my games or a “Play” button to press; how can I play?](https://minecrafthelp.zendesk.com/hc/en-us/articles/undefined#h_01HMSDT99AES765JPV7VHTY334)
- [I get sent to the Windows Store when I try to launch a game from the Minecraft Launcher](https://minecrafthelp.zendesk.com/hc/en-us/articles/undefined#h_01HMSDXRB0N51XKP0ZDA2W01QM)
- [I own Bedrock, but when I try to run Java, I can’t create a profile](https://minecrafthelp.zendesk.com/hc/en-us/articles/undefined#h_01HMSE1VBGK37GYRYAZ0WT1HNV)

## I can play Minecraft: Bedrock Edition, but not Java

**Note: If you’re trying to access Java Edition through family sharing with a parent account, you will not be able to do so. Only accounts that own the game or are subscribed to Xbox Game Pass for PC will have access to Java Edition.**

You’re likely signed into the wrong Microsoft account. Sign out of the Microsoft Store and then sign in using the account you used to buy the Minecraft licenses.

**Log out and change active accounts**

1.  Start the Minecraft Launcher
2.  Click on the account name in the top left corner of the application and select **Log out**
3.  Sign back in with the account that owns Minecraft or is subscribed to Xbox Game Pass for PC or Xbox Game Pass Ultimate

If the problem persists, here are other solutions you can try:   

**Run Windows Update**

1.  Click on your Windows search bar on your taskbar and type **Windows Update settings**
2.  Open the settings app and click **Check for updates** at the top of the new window

**Update all software via the Microsoft Store app**

1.  Open the [Microsoft Store app](http://aka.ms/MSStoreHome) and go to **Library **
2.  Select **Get Updates**
3.  Click **Update All**

**Sign in on other applications**

[Xbox Console Companion](https://aka.ms/XboxConsoleCompanion)

[Xbox App](https://aka.ms/DLXboxApp)

## I don’t see my games or a “Play” button to press; how can I play?

You may be signed in to different Microsoft accounts in the Store and Launcher. You will need to make sure you’re signed in to the Microsoft Store using the same account that you’re using to sign-in to the Minecraft Launcher. Go to the [Microsoft Store app](http://aka.ms/MSStoreHome) and review or update the active account. You will find the account (or an option to sign in if you are not currently) at the top of the page.

## I get sent to the Windows Store when I try to launch a game from the Minecraft Launcher

If you get sent to the Store when you try to launch a game, first try to update all apps in your [Microsoft Store](http://aka.ms/MSStoreHome) Library. If that doesn’t work, try to reinstall the Gaming Services app on your Windows 10 or above device.  

**Reinstall Gaming Services**

1.  Select the Search icon on the taskbar, type **powershell**, right-click on **Windows PowerShell**, and then select **Run as administrator**.
2.  In Windows PowerShell, type **get-appxpackage Microsoft.GamingServices \| remove-AppxPackage -allusers** and press Enter.
3.  In the same window, type **start ms-windows-store://pdp/?productid=9MWPM2CQNLH** and press Enter.
4.  Install the app on that page and select **Yes** when you receive the User Account Control (UAC) prompt.
5.  Restart your device and try to install the game again.

## I own Bedrock, but when I try to run Java, I can’t create a profile

Install and sign in to the following applications:

1.  [Xbox Console Companion](https://aka.ms/XboxConsoleCompanion)
2.  [Xbox App](https://aka.ms/DLXboxApp)

 If you receive an error message signing into the Xbox App indicating you are missing some key dependencies or applications, install the missing components. Examples include:    

- [Xbox Identity Provider](https://aka.ms/XboxIdentityProvider)
- [Xbox Live In-Game Experience](https://aka.ms/XboxLiveInGame)
- [Feedback Hub](https://aka.ms/DLFeedbackHub)
