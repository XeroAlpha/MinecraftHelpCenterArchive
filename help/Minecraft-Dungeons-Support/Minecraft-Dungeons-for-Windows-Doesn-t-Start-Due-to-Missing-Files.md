---
title: Minecraft Dungeons for Windows Doesn't Start Due to Missing Files
date: 2020-03-26T20:53:35Z
updated: 2023-09-28T21:50:09Z
categories: Minecraft Dungeons Support
tags:
  - section_26726610890253
link: https://help.minecraft.net/hc/en-us/articles/360041102892-Minecraft-Dungeons-for-Windows-Doesn-t-Start-Due-to-Missing-Files
hash:
  h_01F79ZXNC6KM6ZRZNH52M0PV1Z: encountering-the-problem
  h_01F79ZXTDWTN4CS7R43TYR8TM8: solution-1
  h_01F79ZXZ1Z3MMZZ0KX2GCRC8JJ: solution-2
  h_01F79ZY41DTJ9WGYJWNJXGWZVP: solution-3
---

Some players on Minecraft Dungeons for Windows have received an error message referring to missing files when trying to start the game. If you see this error, try the solutions below to install the missing files: 

- [Encountering the problem](#encountering-the-problem) 
- [Solution 1 (MSVCP140.dll and VCRUNTIME140.dll)](#solution-1) 
- [Solution 2 (MSVCP140.dll and VCRUNTIME140.dll)](#solution-2) 
- [Solution 3 (X3DAudio1_7.dll and XAPOFX1_5.dll)](#solution-3) 

## **Encountering the Problem **

1.  Start the Minecraft Dungeons launcher. Click **Play**.  
    ![blobid0.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4402363638925)
2.  In the **Error** box, click **Yes**. This starts UE4 Prerequisites setup.  
    ![blobid1.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4402363662477)  
3.   When you see Set up Successful, click **Close**.
4.  Two **System Error** messages open one at a time, listing the missing files, MSVCP140.dll and VCRUNTIME140.dll drivers, or X3DAudio1_7.dll and XAPOFX1_5.dll. Click **Close** for each and then continue on to the solutions.  
    ![blobid2.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4402363694093)  

## **Solution 1 **

Try this if the System Error message says Minecraft Dungeons cannot proceed withoutMSVCP140.dll and/or VCRUNTIME140.dll. 

Uninstall your version(s) of Microsoft Visual C++ Redistributable 2015 and reinstall. 

1.  Press the Windows key, type “add or remove programs”, then click the matching result. 
2.  Navigate to the search field and type “Microsoft Visual C++ 2015”. 
3.  Select any matching entries, and for each, select **Uninstall**. 
4.  Visit [Microsoft’s download page for Microsoft Visual C++ 2015](https://www.microsoft.com/en-us/download/details.aspx?id=52685), select your language, then download and install any associated files. 
5.  When finished, open the Dungeons launcher, click **Play**, and try starting the game. 

## **Solution 2** 

Try this if Solution 1 did not resolve the issue. 

Uninstall your version(s) of Microsoft Visual C++ Redistributable 2015 and higher and reinstall the 2015-2019 package. 

1.  Press the Windows key, type “check for updates”, then click the matching result. 
2.  Click **Check for updates**, then install any pending system updates. You may need to restart your computer. 
3.  Press the Windows key, type “add or remove programs”, then click the matching result. 
4.  Navigate to the search field and type “Microsoft Visual C++”. 
5.  Select any matching entries for the year 2015 and higher (likely 2017 and/or 2019), and for each, select **Uninstall**. 
6.  Visit [Microsoft’s download page for all Microsoft Visual C++ downloads](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads). Navigate to “Visual Studio 2015, 2017 and 2019”, select “vc_redist.x86.exe", then download and install any associated files. You may need to restart your computer. 
7.  When finished, open the Dungeons launcher, click **Play**, and try starting the game. 

## **Solution 3 **

Try this if the System Error message says Minecraft Dungeons cannot find X3DAudio1_7.dll and XAPOFX1_5.dll. 

1.  Press the Windows key, type “check for updates”, then click the matching result. 
2.  Click **Check for updates**, then install any pending system updates. You may need to restart your computer. 
3.  Visit [Microsoft’s download page for DirectX End-User Runtimes (June 2010)](https://www.microsoft.com/download/details.aspx?id=8109). Download and install “directx_Jun2010_redist.exe”. 
4.  When finished, open the Dungeons launcher, click **Play**, and try starting the game.
