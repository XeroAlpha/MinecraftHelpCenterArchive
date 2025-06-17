---
title: File Read/Write with MakeCode
date: 2025-06-16T21:45:53Z
updated: 2025-06-16T21:51:18Z
categories: Beta
link: https://edusupport.minecraft.net/hc/en-us/articles/38490275582100-File-Read-Write-with-MakeCode
hash:
  h_01JXXAX81TPXTVEHQZMB7CBDWC: examples-of-how-to-read-and-write-with-files-using-makecode-in-minecraft
  h_01JXXAX824J132BSDPFNXFCA3Y: known-issues
  h_01JXXAX829Q4Z9Y0FSM32DJSRT: faqs
  h_01JXXAX82H5DK3HB5399AYKD8B: troubleshooting-download--sync-errors
---

Soon, users coding with MakeCode in Minecraft Education can read and write files locally. Students can learn programming input/output concepts in Minecraft using .txt and .csv filetypes. Currently this feature can be tested in the Preview, only on Windows and Mac.

This new coding feature supports a much-requested computer science curriculum need. Now you can get even more creative with your code in Minecraft!

 

### Examples of How to Read and Write with files using MakeCode in Minecraft

 

**Python**

Open a Python coding MakeCode project in a Minecraft Education world.

Example code (Windows):

    file.write_file(" C:/Users/<insert username here>/Desktop/<filename>.txt ",
        "words")
     
    contents = file.read_file("C:/Users/<insert username here>/Desktop/<filename>.txt") player.say(contents)

** **

** **

**Blocks**

Open a block coding MakeCode project in a world.

Add the “File” extension to your project to easily navigate to a folder on your device.

To add the Extension, click on “Extensions,” then in the Search box, enter “File.” Select the File Read & Write extension.

 

File Picker:

<figure class="image wysiwyg-image">
<img src="https://edusupport.minecraft.net/hc/article_attachments/38490275580948" />
</figure>

** **

**JavaScript**

Open a JavaScript coding MakeCode project in a world.

To select the file location, type it in as text or use the file picker.

    player.say("Writing to a .csv on my Desktop now")
    file.writeFile("C:/Users/<insert username here>/Desktop/<filename>.csv", "words");
    player.say("---done writing!---") 
     
    player.say("I am going to read out the contents of my file")
    let contents = file.readFile("C:/Users/<insert username here>/Desktop/<filename>.csv") player.say(contents)

 

## Known Issues

This functionality is not currently supported on Chromebook and iOS devices.

 

## FAQs

 

**Can my code create a new folder?**

No, you can write to C:/\<xyzfolder\>/written.txt provided that the C:/\<xyzfolder\>/ folder already exists. 

(xyzfolder is an example folder name. The name is not important)

 

**Can my code access folders that are locked down on my device?**

No, only folders which the logged in user has permissions to access can be interacted with.

 

**Can I append/update data in a file?**

No, each time you write to your file, it overwrites the contents. If you do not want to lose previous data that cannot be recreated, create a new file for your new code.

 

**Will the data file associated with my world and coding project be backed up to the cloud?**

Your data will not be backed up to the cloud by Minecraft. If the local folder your data is in, on your device is synched, then that process should continue.

** **

**Can I rename a file with code in Minecraft?**

No.

 

**If I delete a project from MakeCode, will the associated data files that were created be deleted from my device?**

No, you can clean up the data files used with Minecraft as you wish on your local device separate from Minecraft & MakeCode.

 

 

## **Troubleshooting Download & Sync Errors**

 

If you got this error:

*Error 2: No such file or directory exists.*

Check that the folder exists, has been spelled correctly, and the path is correct.

 

If you have any issues, please [contact support](../Community/How-to-Get-Support.md) or post a thread in the “[Technical Support](https://edusupport.minecraft.net/hc/en-us/community/topics/360001721951-I-have-a-technical-problem)” area of the forums.
