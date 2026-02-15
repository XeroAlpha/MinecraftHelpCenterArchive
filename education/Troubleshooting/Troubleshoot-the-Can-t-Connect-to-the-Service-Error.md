---
title: Troubleshoot the Can’t Connect to the Service Error
date: 2021-08-10T14:09:30Z
updated: 2024-05-22T23:01:00Z
categories: Troubleshooting
link: https://edusupport.minecraft.net/hc/en-us/articles/4404976926356-Troubleshoot-the-Can-t-Connect-to-the-Service-Error
---

If Minecraft Education indicates that it can’t connect to the service, there are a few different things that may be the cause. This article provides information on how to troubleshoot determine what the cause is and how to fix it.

 

**Example message**

![Sign-in_Required_Message.png](https://edusupport.minecraft.net/hc/article_attachments/4404976911124)

 

This table provides a list of potential causes and solutions.

|  |  |
|----|----|
| **Cause** | **Solution** |
| For Windows, you may have two versions of Minecraft Education installed (the desktop and store version). | Ensure you have only one version of Minecraft Education (desktop or store version) installed. |
| For ChromeOS, your connection may use a proxy server. | Check that your connection is not using a proxy server. |
| Your network is blocking the required URLs required to launch Minecraft Education | Verify the required URLs are added to your network’s allow list. The [URLs Used by Minecraft Education](../Administration/FAQ-IT-Admin-Guide.md) article has a list of all the required URLs. |
| The Minecraft.AdalServer.exe is blocked from running | Ensure the Minecraft.AdalServer.exe can run while logging in. |

 

If you have tried the solutions in this article and are still having issues, contact the support team via the [submit a request](https://aka.ms/MEE_New_Request) form and include this information:

- Whether you're using a VPN or proxy, and if so, which brand.
- Which device and OS version you’re using.
- Which version of Minecraft Education you are using (bottom right corner of the screen).
- A screenshot of the error.
- A network trace (if possible).
