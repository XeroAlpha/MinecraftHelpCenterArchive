---
title: Clean Reinstall Minecraft Education on PC
date: 2020-08-10T11:32:51Z
updated: 2024-12-30T21:39:01Z
categories: Installation
link: https://edusupport.minecraft.net/hc/en-us/articles/360047118832-Clean-Reinstall-Minecraft-Education-on-PC
hash:
  h_01JGCPF3C75A0BHCSNDQHHR603: steps-to-perform-a-clean-reinstall-of-minecraft-education
  h_01JGCPF3C7PN6AKSJX4MS3KHE1: step-1-backup-and-save-your-current-worlds
  h_01JGCPF3C757D9HDZ9WBSSN975: step-2-remove-your-current-instance-of-the-minecraft-education-application
  h_01JGCPF3C7JNAA714CYTPGF6SJ: step-3-download-the-correct-windows-version-of-minecraft-education-for-your-pc
  h_01JGCPF3C7P5DT6XW53BVRHC4E: step-4-transfer-your-worlds-to-the-new-desktop-version
---

Sometimes Minecraft Education, like any other app, may run into issues or errors. Reinstalling Minecraft Education app can sometimes fix these issues, but a normal reinstall may not be enough. If the issue persists and you think a reinstall should fix it, you can try a clean reinstall following the directions below to get a fresh start! 

 

Note that if you're getting a "Can't connect to service" error, this may be due to having both the Store version and the Desktop version installed. [See more info here](../Troubleshooting/Troubleshoot-the-Can-t-Connect-to-the-Service-Error.md).  

 

## Steps to perform a clean reinstall of Minecraft Education

### Step \#1: Backup and save your current worlds

Your worlds can be found here if you are using the store version (appx):%localappdata%\Packages\Microsoft.MinecraftEducationEdition_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds

And here for the Desktop version (.exe): %appdata%\Minecraft Education Edition\games\com.mojang\minecraftWorlds

- Locate world files
- Zip all files into a single Zip file
- Move ZIP file to desktop, OneDrive, or other secure location

![mceclip4.png](https://edusupport.minecraft.net/hc/article_attachments/4402652471956)

\*Note: If you are on a multi-user device, each user will have to go into their user's path to backup their their worlds as detailed above. If you are on 1:1 devices you can proceed with the next step.

**If you can currently login to the game but just want to change to the desktop application (for various reasons), you can simply just export and save your worlds after logging in.**

### Step \#2: Remove your current instance of the Minecraft Education application

- Download the [uninstall.zip file ](https://aka.ms/meeremove)
- Unzip the folder
- In the folder, right-click the UninstallAllMinecraftEducationEditionversions.bat file and select “Run as Administrator”

![mceclip3.png](https://edusupport.minecraft.net/hc/article_attachments/4402660642580)

- When PowerShell opens, confirm the uninstall by pressing any key. This will uninstall for all users if you are on a shared device. If you are on 1:1 devices it will remove for the current user

![mceclip1.png](https://edusupport.minecraft.net/hc/article_attachments/4402660643732)

### Step \#3 Download the [correct Windows version](./Windows-Installation-Guide.md) of Minecraft Education for your PC

Go through the "Setup Wizard" to complete install and launch

![mceclip2\_\_1\_.png](https://edusupport.minecraft.net/hc/article_attachments/4402652486164)

### Step \#4 Transfer your worlds to the new desktop version

Move world files from the previous desktop, OneDrive, or other secure location and unzip the world files to the new "minecraftWorlds" location on the PC: %appdata%\Minecraft Education Edition\games\com.mojang\minecraftWorlds

![mceclip4\_\_1\_.png](https://edusupport.minecraft.net/hc/article_attachments/4402660650772)

\*Note: If you are on a multi-user device, each user will have to go into their user's path to transfer their their worlds on the desktop version as detailed above.
