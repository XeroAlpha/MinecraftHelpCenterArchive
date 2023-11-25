---
title: Secure Token Storage Failure on Linux
date: 2021-09-06T20:06:17Z
updated: 2022-11-11T21:38:32Z
categories: "Minecraft: Java Edition Technical"
tags:
  - title_minecraft_java_edition
  - title_minecraft
  - subject_game_does_not_start
  - category_technical_support
  - category_account_support
  - subject_sign_in_questions
  - platform_linux
  - section_12618019146893
link: https://minecrafthelp.zendesk.com/hc/en-us/articles/4408668374925-Secure-Token-Storage-Failure-on-Linux
---

We have identified some issues with the Linux version of Minecraft when attempting to log in. Below are some solutions based on your Linux distro. 

## Secure Token Storage Failures - Linux (Ubuntu)

The most common cause of this error is the use of an unofficial Minecraft Launcher package. The simplest fix is to [download the official Launcher package for your system](https://www.minecraft.net/en-us/download). If you would like to continue using the package you currently have, additional troubleshooting steps for known issues have been included below. \
\
If you have gotten the Minecraft Launcher using snap rather than through our official channels, the package will require access to the password manager service to be able to cache login information correctly and securely. You can either allow access by [connecting the password-manager-service plug](https://snapcraft.io/docs/interface-management) if your snap allows or by [adjusting the snap to use the \--classic confinement flag when installing or refreshing](https://snapcraft.io/docs/snap-confinement). Please note that when using an unofficial package, there are potential security issues with either of these solutions. 

## Secure Token Storage Failures - Arch Linux

Another common error is that the gnome-keyring dependency is not fulfilled. Gnome-keyring is used for storing data needed to allow for auto-logins and is often missed if you are running a desktop environment other than GNOME. To solve the issue, [install gnome-keyring and start the daemon,](https://wiki.archlinux.org/title/GNOME/Keyring) then try running the launcher again.

If these solutions do not solve the issue for you, let us know by submitting a bug report at <https://bugs.mojang.com/>.
