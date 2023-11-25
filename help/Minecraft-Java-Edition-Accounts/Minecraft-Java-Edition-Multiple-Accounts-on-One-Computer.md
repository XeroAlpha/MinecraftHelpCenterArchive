---
title: "Minecraft: Java Edition Multiple Accounts on One Computer"
date: 2021-09-28T23:11:27Z
updated: 2023-06-15T17:13:51Z
categories: "Minecraft: Java Edition Accounts"
tags:
  - title_minecraft_java_edition
  - subject_change_account_information
  - platform_windows_10
  - category_account_support
  - subject_sign_in_questions
  - platform_linux
  - platform_macos
  - platform_pc
  - platform_PC
  - section_12617963662861
link: https://minecrafthelp.zendesk.com/hc/en-us/articles/4410248686733-Minecraft-Java-Edition-Multiple-Accounts-on-One-Computer
---

If multiple Minecraft accounts log in via the same *computer user account*, they will be able to access each other's saved worlds. You can change this, though it requires a bit of advanced setup. To keep things clear, the following three terms are used:

-   **Minecraft Java profile name **- This is the name of your Minecraft character that your account uses.
-   **Computer user account**- This is the computer account that you log into when you start up your computer.
-   **Minecraft launcher configuration **- You can make Minecraft run with different settings or in different versions by using different configurations, accessible from the Minecraft launcher (before you press Play). By default, most users will have a single configuration called \"Latest Release\", but you may set up any number of configurations.

## Windows

You can have Minecraft create world saves and player data in a different location than the default. If you do, you will not see the worlds of others who use the same computer. To edit this, create a new launcher configuration:

-   Run Minecraft
-   Go to \"Launch options\" and click \"Add new\"
-   Switch on the \"Game directory\" option, then specify a different [file path](https://help.minecraft.net/hc/en-us/articles/4409159214605)(for example, C:\\Users\\Steve\\AppData\\Roaming\\.minecraft to C:\\Users\\Steve\\AppData\\Roaming\\.minecraft2)
-   Click \"Save\"

For more information, please visit the [Windows help site](https://support.microsoft.com/help/4026923/windows-10-create-a-local-user-or-administrator-account). 

## Mac

To create a new computer user account on a Mac:

-   In Users and Groups preferences, click Add (+) below the list of users
-   Choose the type of user you want to create from the New Account pop-up menu
-   Type the full name for the new user. An account name is generated automatically. To use a different account name, change it right away since you can't change it later
-   Enter a password for the user, then enter it again to verify. Using a password hint is recommended in case you'd ever forget your password
-   Click Create User

For older OS versions, please see [support.apple.com/kb/ph6651](https://support.apple.com/kb/ph6651)

## Linux

To create a new computer user account on Linux:

-   Open the terminal.
-   Copy and paste: useradd -m -s /bin/bash Your_username

You need to be an administrator to create a new account. The procedure of adding new users to the computer can be different depending on the distribution and administration settings. Please refer to your operating system documentation for details on how to create a user profile.
