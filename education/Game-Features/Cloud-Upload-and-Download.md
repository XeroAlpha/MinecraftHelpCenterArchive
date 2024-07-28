---
title: Cloud Upload and Download
date: 2023-09-29T23:22:17Z
updated: 2024-07-23T22:09:47Z
categories: Game Features
link: https://edusupport.minecraft.net/hc/en-us/articles/19632132361748-Cloud-Upload-and-Download
hash:
  h_01HTQJTKRG1RNRWT30FCKD44JP: basic-flow-of-feature
  h_01HNZN864VMT3BH6HQ19SVKXS2: requirements
  h_01HNZN89K80VTSV051Q8WSMF2Z: how-to-upload-a-world-to-onedrive
  h_01HNZN8E4CARBDVGY3RZ2SY3HS: how-to-download-a-world-from-the-cloud
  h_01HNZNBSQNQ63SMRDSCGPTQDPX: how-to-download-a-previous-version-of-a-world
  h_01HNZNB7DZE3804N9996DW1BC2: faqs
  h_01HNZN95V2DQ238V5E79WQ9SWF: additional-notes
  h_01HP2X242P57NRRFPW9N6TZXQ9: troubleshooting-upload-errors
  h_01HTQK8W5YT6NHV1DHMPY0KNY4: ""
  h_01HTQK89VQKAN76XB70MT1X775: troubleshooting-download-errors
---

Worlds are automatically saved to OneDrive upon closing the world as a backup. When the first world is uploaded, a new folder in the user’s OneDrive is created called “Minecraft Education". To ensure you have OneDrive attached to your account, see the troubleshooting guide below.

At this time, cloud storage is available for Windows, Android, and Chromebook. MacOS and iOS cloud support is coming very soon. 

 

**Feature walkthrough video:**

[**![2024-07-23 15_09_05-Dan Coronel, Matthew Pearsall (DM) - Xbox - 4 new items - Slack.png](https://edusupport.minecraft.net/hc/article_attachments/28743987221652)**](https://www.youtube.com/watch?v=gKV_6EeTKLY)

 

## Basic flow of feature:

- User saves a Minecraft Education world
- Application saves world to local device and users OneDrive
- Icon shows in My Worlds as a solid white cloud
- User visits My Worlds
- Application displays worlds with icons indicating state of backup
- If the user clicks Play on a world from My Worlds with the solid cloud icon, the application opens to play and after it is saved, it will again save locally and to OneDrive.
- If the user clicks Play on a world from My Worlds with the empty cloud icon, the application first downloads the world before opening to play.

## Requirements

- User accounts must have an allowed connection to OneDrive in place.
  - To check, go to [Sign in - Microsoft OneDrive (live.com) and sign in with your school account](https://onedrive.live.com/login/).
  - Once logged in, Click 'Office apps & devices' to confirm if OneDrive is enabled
- Users should have Minecraft Education installed on their device.
- IT Admins will need to ensure that all recommended [URLs are unblocked](https://aka.ms/MEEURLAllowList) and computers can communicate with OneDrive online. Below are the cloud specific URLs:
  - https://graph.microsoft.com
  - https://\*.sharepoint.com
- The device must be connected to the internet when a world is saved, to back up to the cloud.

 

## How to upload a world to OneDrive

1.  Open Minecraft Education and log in with your school or work account. Select the Play button.
2.  Choose an existing world to play from the View My Worlds collection.  You can also import and launch a new world from the Library Collection.
3.  Select a world in your My Worlds collection and then select Play.
4.  After you finish your time in your world, hit Esc and then click Save & Exit.

This will start your world upload to OneDrive.

** **

## How to download a world from the cloud

1.  In Minecraft Education, go to My Worlds
2.  Select the world you want to download
3.  Select Download to sync the file to your device.

Note: The downloaded file will continue to backup to the same location if the same login is used and if the world has been saved two or more times from the original device.

 

![Picture1.png](https://edusupport.minecraft.net/hc/article_attachments/23498417208852)

** **

## How to download a previous version of a world

1.  In Minecraft Education, go to Settings \> Cloud Storage
2.  Select the OneDrive button to see your worlds in the cloud.
3.  View ‘version history’.
4.  Select Restore on the version from the timeframe which you want to recover your world.
5.  Download and open the world in Minecraft Education.
6.  Once you save and exit, this version will be the latest file version for this file.

** **

## FAQs

**If my world is deleted from my device, will it be deleted from OneDrive?**

No. If a Minecraft Education world is deleted from any device, it can be downloaded to any device and recovered from OneDrive.

 

**What happens if I delete a world from the “Minecraft Education Edition” OneDrive folder?**

If you delete a world file from the OneDrive account you login with, and it is still on the device you last used it on, you can open it from that device. When you exit it on that device, it will save to the cloud (unless you have cloud backup turned off).

Only delete files on OneDrive if you or everyone you've shared it with no longer needs it.

 

**Will worlds I create on one device be available on another device?**

Worlds uploaded to the same Microsoft account OneDrive folder can be downloaded on other devices. If the world has been saved two or more times from the original device, the world will continue to back up to the original file on OneDrive. If the world was originally saved once, then opened on another device, the world will be saved as a copy.

 

**My device was reset and I lost everything! Is there an easy way to restore all of my worlds at one time?**

Any of the worlds that were saved since using version 1.21 with the cloud backup feature should be saved on OneDrive. Currently, there is no way to restore all the worlds to your device at the same time. To restore a world to a device, you can individually download each world as needed.

 

**If the user is logged in to a computer with a shared login, but uses their school credentials to login to Minecraft Education, where will the world file get saved to?**

The account used for the Minecraft Education login is the OneDrive account to which the world file will be saved.

 

**What’s the largest world size auto-save to cloud can support?**

The maximum file size of the exported world allowed to be uploaded to OneDrive is currently 250MB. If you need to back up files 250MB or larger, you can export the file manually and save it to OneDrive.

 

**What happens if I rename a world from OneDrive or my device?**

If you rename a world file on your device or on OneDrive, the world will continue to sync. To stay organized, we recommend the file names match.

 

**Can I rename or move the OneDrive folder?**

We discourage changing or moving your Minecraft Education Edition cloud back up folder. If you rename the OneDrive folder, your world files will continue to upload to that folder. Newly created worlds will be uploaded to a new “Minecraft Education” folder.  
If you move the OneDrive folder, newly created worlds will upload to a new "Minecraft Education" folder.

 

**What happens if I download a world from the cloud to a version of Minecraft Education which is older than the one it was last saved on?**

A world cannot be opened with a version of Minecraft Education which is older than the one it was last saved on. Worlds created in Minecraft cannot be used in a version prior.

 

**If a friend shares their OneDrive world with me, will my changes in the world be saved to their world?**

No, once you open a world file from another user’s OneDrive, it will become your own copy and changes from that point will be backed up only to your user account OneDrive folder.

 

**Can anyone see my cloud saved world files?**

No, world files are stored just within the user’s account. Only those you choose to share the link with can make a copy of that world. 

 

**Can Minecraft Education save to a different cloud storage location, other than OneDrive?**

Currently, OneDrive is the only supported cloud storage location.

 

**Can I turn off cloud backups?**

Yes, you can go into Settings/Cloud Storage and toggle off “Enable world backups to OneDrive”.

![2024-04-04 11_58_03-Cloud Support article.docx and 4 more pages - Work - Microsoft​ Edge.png](https://edusupport.minecraft.net/hc/article_attachments/25303620083348)

 

**What if my user account or Minecraft Education license tenant doesn’t have an associated OneDrive account?**

You can disable cloud backups. Before you do so, check by going to [Sign in - Microsoft OneDrive (live.com)](https://onedrive.live.com/login/)

 

## Additional Notes

- No special characters (" \* : \< \> ? / \\ \|) or punctuation should be used in world titles. If there are restricted characters, they will be replaced automatically stripped from the file name.
- If you open a world from a file picker on your device or from OneDrive in the cloud, the world will automatically generate a new copy on your device but will continue syncing to the original file on OneDrive.
- Related article: [Import, Export, and Manage Worlds – Minecraft Education](../Teaching-With-Minecraft/Import-Export-and-Manage-Worlds.md)

 

 

## Troubleshooting Upload Errors

If you got this error when you closed your world:

**Cloud access problem**

***You don't have access to cloud storage. Check your OneDrive settings if you'd like to keep your world files backed up and synchronized across devices. ***

***Error Code: 403x5***

*![2024-06-18 11_52_27-Cloud Support Article R21.docx and 1 more page - Work - Microsoft​ Edge.png](https://edusupport.minecraft.net/hc/article_attachments/27680220787220)*

 

**Cloud access problem**

***You don’t have access to cloud storage. Check your OneDrive settings.***  
**Error code: 401**

 

***![2024-04-04 12_01_21-Cloud Support article.docx and 4 more pages - Work - Microsoft​ Edge.png](https://edusupport.minecraft.net/hc/article_attachments/25303636899604)***

  
Here are some steps you can take to figure out the issue:

- Confirm you are connected to the internet.
- Confirm you have OneDrive enabled on the account you logged into Minecraft Education with.
  - To check, go to [Sign in - Microsoft OneDrive (live.com)](https://onedrive.live.com/login/)
  - Once logged in, Click 'Office apps & devices' to confirm if OneDrive is enabled
- Confirm your OneDrive is not full
  - [ My OneDrive says it's full - Microsoft Support](https://support.microsoft.com/en-us/office/my-onedrive-says-it-s-full-f0a8a922-d971-497e-b0c6-7b9a47c617c0?ns=groove&version=16&ui=en-us&rs=en-us&ad=us)
- Ask your IT Administrator to ensure that all [recommended URLs are unblocked](https://aka.ms/MEEURLAllowList). 

 

If you got this error when you closed your world:

![2024-04-04 12_06_40-Cloud Support article.docx and 4 more pages - Work - Microsoft​ Edge.png](https://edusupport.minecraft.net/hc/article_attachments/25303636910228)

**Upload failed**

**Something went wrong when uploading your world to the cloud.**

**Error code: 400**

Here are some steps you can take to resolve this issue:

- Try again in case your internet was interrupted.
- Confirm you have OneDrive enabled on the account you logged into Minecraft Education with.
  - To check, go to [Sign in - Microsoft OneDrive (live.com)](https://onedrive.live.com/login/)
  - Once logged in, select 'Office apps & devices' to confirm if OneDrive is enabled
- Ask a system administrator to check your OneDrive settings.

 

If you got this error when you closed your world:

***Your upload didn’t make it to the cloud. ***

***Your OneDrive doesn’t have enough room for this world. ***

Here are some steps you can take to resolve this issue:

- Remove large files from your OneDrive
  - In Minecraft Education, go to Settings \| Cloud Storage
  - Click the OneDrive button to see your worlds in the cloud.
  - Review your world files and determine if any should be removed
  - Look at your other OneDrive files to see if any large files could be deleted from the cloud to free up space.
- Back up your world another way
  - Visit - [Import, Export, and Manage Worlds](https://aka.ms/MEEImportExport)
- Talk to a system administrator about getting more space on your OneDrive.

##  

## Troubleshooting Download Errors

If you got this error when you closed your world:

**You don’t have permission to download this file**

Here are some steps you can take to resolve this issue:

- Confirm you have OneDrive enabled on the account you logged into Minecraft Education with.
  - To check, go to [Sign in - Microsoft OneDrive (live.com)](https://onedrive.live.com/login/)
  - Once logged in, select 'Office apps & devices' to confirm if OneDrive is enabled
- Ask a system administrator to check your OneDrive settings.

 

If you have any issues, or cannot locate your worlds via these methods, please [contact support](https://aka.ms/MEE_New_Request) or post a thread in the “Technical Support” area of the forums.
