---
title: Location of World Files
date: 2021-08-06T14:52:14Z
updated: 2026-10-16T21:16:51Z
categories: Administration
link: https://edusupport.minecraft.net/hc/en-us/articles/4404785703316-Location-of-World-Files
hash:
  h_01M4S43EWF4HGFNV9C1KG3BTNF: ""
  h_01M4S453YD8ZRK80CQZR5EZ7A6: convert-a-world-folder-to-an-mcworld-file
  h_01M4S43EX3WVRBYWSQMMNPZ2BQ: "-1"
  h_01M4S4511722GAAQ73ZE3V0V7X: show-hidden-files
  h_01M4S43EX6QGVMHZP5FF6TZ5TN: chromebook
  h_01M4S43EXEV0PATGGD0QR5WJ5R: windows
  h_01M4S43EXJ4JSFSCSVHTP0F7RG: world-file-locations-by-platform
  h_01M4S43EXKEMT5BA83R5K9E4KA: chromebook-1
  h_01M4S43EXQ4Q55ENZ4PV8BAZ77: android
  h_01M4S43EYJAN0D39752ZVA7PXR: ios-iphone-and-ipad
  h_01M4S43EYYB7NEGV5YEP7M01W4: macos
  h_01M4S43EZ0B62HQ53EWM8PRSQD: "-2"
  h_01M4S48EJ6VQ2PZRVR1P71926A: windows-desktop-exe
  h_01M4S43EZ1YTV7WPK0FTP56P6S: windows-microsoft-store
  h_01M4S43EZ5QP0XBHVRAW9A16F6: "-3"
  h_01M4S48R1P1QJEG1HETHW3JEB0: identify-a-world-by-its-folder
---

Minecraft Education worlds are generally stored locally on your device. If you can't find a world in Minecraft Education, you may be able to locate its files in the `minecraftWorlds` folder.

> **Important:** Uninstalling Minecraft Education will generally delete locally stored world files, which may make them impossible to recover. We highly recommend regularly [exporting important worlds](../Teaching-With-Minecraft/Import-Export-and-Manage-Worlds.md) or [saving your worlds in the cloud](https://cr.m365copilotapp.svc.cloud.microsoft/hc/en-us/articles/19632132361748) when Cloud Saving is available to you.

 

See our video below for a guide on finding the world files on your platform!

<figure class="wysiwyg-image wysiwyg-image-resized" style="width: 75.99%;">
<a href="https://youtu.be/Hrek7lp5ShU?si=hkAIDq3Dejocnhow"><img src="https://edusupport.minecraft.net/hc/article_attachments/54680577516180" alt="An title screen to a youtube video labled Location of World Files for Minecraft Education by OS" /></a>
</figure>

###  

### Convert a world folder to an .mcworld file

If you have located the folder for a world, you can convert it into an `.mcworld` file that can be imported into Minecraft Education.

1.  Copy the entire folder for the world to your desktop or another convenient location.
2.  Open the copied folder and select all files and folders inside it.
3.  Compress the selected files and folders into a .zip file using your device's file manager or compression tools.
4.  Move the resulting `.zip` file to your desktop or another convenient location.
5.  Rename the file from `.zip` to `.mcworld`. For example: `MyWorld.mcworld`.
6.  Double-click the `.mcworld` file to open and import it into Minecraft Education.

> **Important:** Compress the **contents of the world folder**, rather than the world folder itself. The world files should be at the top level of the resulting archive.

###  

### Show hidden files

Some Minecraft Education world locations may be hidden by your operating system.

#### Chromebook

1.  Ensure Minecraft Education has [storage permission](https://support.google.com/chrome/a/answer/7515036?hl=en).
2.  Open the **Files** app.
3.  Enable **Show hidden files** and **Show all Play folders**.

The existing Minecraft Education article documents these settings for locating Chromebook world files. 

#### Windows

You may need to [enable hidden files and folders](https://support.microsoft.com/en-us/windows/view-hidden-files-and-folders-in-windows-10-97fbc472-c603-9d90-91d0-1166d1d9f4b5) to access the `AppData` folder.

 

### World file locations by platform

#### Chromebook

`Play files > games > com.mojang > minecraftWorlds`

 

#### Android

On Android devices, the location and accessibility of your world files depends on the **File Storage Location** setting.

To check your current storage location:

1.  Open **Minecraft Education**.
2.  Select **Settings**.
3.  Select **Storage**.
4.  Check **File Storage Location**.

The storage options are:

- **Application (Default):** World data is stored within the application's data and isn't available as individual files and folders through the device's file system.
- **External:** World files are stored outside of the application's private data and can be accessed through the device's file system. "External" does not necessarily mean an SD card or other physically external storage device.

When **External** storage is selected, look for your worlds in:

`Android > data > com.mojang.minecraftpe > files > games > com.mojang > minecraftWorlds`

> **Note:** Worlds can exist in both storage locations. If a world doesn't appear on the **Play** screen, check **Settings \> Storage \> File Storage Location**. Switching between **Application** and **External** changes which locally stored worlds are displayed.

 

#### iOS (iPhone and iPad)

`Minecraft Education Edition\games\com.mojang\minecraftWorlds`

> **Note:** Access to application files on iOS may be restricted. For important worlds, we recommend exporting them from Minecraft Education or using Cloud Saving when available rather than relying on direct access to the application's files.

 

#### macOS

`HD > Users > [USERNAME] > Library > Application Support > Minecraftpe > Games > com.mojang`

####  

#### Windows Desktop (EXE)

`C:\Users\[USERNAME]\AppData\Roaming\Minecraft Education Edition\games\com.mojang\minecraftWorlds`

 

#### Windows Microsoft Store

`C:\Users\[USERNAME]\AppData\Local\Packages\Microsoft.MinecraftEducationEdition_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds`

> **Note:** `[USERNAME]` refers to the user account used to sign in to the device, not the account used to sign in to Minecraft Education.

###  

### Identify a world by its folder

Minecraft Education world folders use a Globally Unique Identifier (GUID) rather than the name of the world. Because of this, the folders inside `minecraftWorlds` may have names consisting of letters and numbers that don't match the names shown in Minecraft Education.

To identify a world:

1.  Open the `minecraftWorlds` folder.
2.  Open one of the individual world folders.
3.  Open the **levelname** text file.
4.  The file displays the name of the world as it appears in Minecraft Education.

If you have many worlds, sort the `minecraftWorlds` folder by **date modified**. Look for a folder with a date and time close to when you last played or modified the world, then check its `levelname` file.
