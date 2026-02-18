---
title: "Enable Symbolic Links in Minecraft: Java Edition"
date: 2023-05-26T17:44:29Z
updated: 2026-02-18T18:00:26Z
categories: Download & Install
tags:
  - section_27166490706957
link: https://help.minecraft.net/hc/en-us/articles/16165590199181-Enable-Symbolic-Links-in-Minecraft-Java-Edition
hash:
  h_01HNXGT5ZPYKJ1E79ECF1W6Y7G: how-to-enable-symbolic-links
  h_01HNXGT5ZPCT1W2XMG4XDVBP6F: symbolic-links-and-file-security
---

A symbolic link (sometimes called a “symlink”) is a way to make a file name in one place on a file system refer to a different file, elsewhere. Symbolic links are supported by all operating systems Minecraft runs on.

Symbolic links can sometimes be useful when you want to place content in different locations but some application (in this case, Minecraft) expects those files to exist in a certain location, like for example wanting some Minecraft worlds to be placed on a separate storage device.

## How to Enable Symbolic Links

There are cases where symbolic links are useful. If you have such a use case and have created the symbolic links yourself, you can allow Minecraft to access the target of those links. To do this, you will need to create or edit a file called “allowed_symlinks.txt” in your [Minecraft folder](../Backup-Restore/Find-Your-Minecraft-Java-Edition-Backup-World.md).

Each line in this file contains one allowed path. Symbolic links are followed only if the target of the link has a path starting with one of paths specified in this file.

For instance, let’s say you want to store some of your worlds on D:\MinecraftSaves to save space on your C: drive (on Windows). You’d add this line to “allowed_symlinks.txt”:

D:\MinecraftSaves

If you are still getting an error, you can find out exactly which targets are being rejected by looking at the errors in your “latest.log” file under the “logs” folder.

## Symbolic Links and File Security

Because a symbolic link could lead anywhere on your drive, having a symbolic link show up unexpectedly could mean Minecraft could read or write files it is not supposed to. This applies especially in cases where the symbolic link came from unpacking an archive (e.g., a Zip file) from an outside source, like a Minecraft world downloaded from the internet.

If Minecraft was to attempt to write a file that is a symbolic link to another important file on your drive, that file might get overwritten with the Minecraft world contents, potentially causing loss of data.

Minecraft versions starting with 1.20 show an error when trying to open worlds that contain symbolic links.

If you see an error message about symbolic links when opening a world you downloaded from the internet or in any other situation where you haven’t knowingly created the symbolic links yourself this might be an indication that the content you downloaded is malicious.

Do not attempt to open such downloaded worlds.
