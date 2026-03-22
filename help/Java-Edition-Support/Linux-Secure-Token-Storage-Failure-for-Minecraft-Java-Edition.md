---
title: "Linux Secure Token Storage Failure for Minecraft: Java Edition"
date: 2021-09-06T20:06:17Z
updated: 2026-03-12T18:47:50Z
categories: Java Edition Support
tags:
  - section_ 44460521913485
link: https://help.minecraft.net/hc/en-us/articles/4408668374925-Linux-Secure-Token-Storage-Failure-for-Minecraft-Java-Edition
hash:
  h_01KKHEWDTMQVGDBNHMJEEHZS19: secure-token-storage-failures---linux-ubuntu
  h_01KKHEWDTM9WHZ49TQ6R9CZ1SA: secure-token-storage-failures---arch-linux
---

We have identified some issues with Minecraft: Java Edition for Linux when attempting to sign in. Below are some solutions based on your Linux version. 

## Secure Token Storage Failures - Linux (Ubuntu)

The most common cause of this error is the use of an unofficial Minecraft Launcher package. The simplest fix is to [download the official Launcher package for your system](https://www.minecraft.net/en-us/download#alternate-versions). If you would like to continue using the package you currently have, additional troubleshooting steps for known issues have been included below. \
\
If you have gotten the Minecraft Launcher using snap rather than through our official channels, the package will require access to the password manager service to be able to cache login information correctly and securely. You can either allow access by [connecting the password-manager-service plug](https://snapcraft.io/docs/interface-management) if your snap allows or by [adjusting the snap to use the --classic confinement flag when installing or refreshing](https://snapcraft.io/docs/snap-confinement). Please note that when using an unofficial package, there are potential security issues with either of these solutions. 

## Secure Token Storage Failures - Arch Linux

Another common error is that the gnome-keyring dependency is not fulfilled. Gnome-keyring is used for storing data needed to allow for auto-logins and is often missed if you are running a desktop environment other than GNOME. To solve the issue, [install gnome-keyring and start the daemon,](https://wiki.archlinux.org/title/GNOME/Keyring) then try running the launcher again.
