---
title: Troubleshoot the Unable to Connect to the Library Error
date: 2021-08-10T14:24:19Z
updated: 2023-05-11T22:55:37Z
categories: Troubleshooting
link: https://educommunity.minecraft.net/hc/en-us/articles/4404970355988-Troubleshoot-the-Unable-to-Connect-to-the-Library-Error
---

If you can’t connect to the in-game library, it is likely due to a network connection issue. This article provides information on how to ensure you are reconnected to the Minecraft Education library.

 

Some worlds may show this error when you load them on an outdated client. To resolve this issue, please [update to the latest version](../Installation/Update-to-a-New-Version-of-Minecraft-Education.md) of Minecraft Education. 

 

**Example message**

![Unable_to_connect_to_the_Library.png](https://educommunity.minecraft.net/hc/article_attachments/4404977059348/Unable_to_connect_to_the_Library.png)

 

This table provides a list of potential causes and solutions.

<table data-border="1px" data-cellpadding="5px">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td width="312"><p><strong>Cause</strong></p></td>
<td width="312"><p><strong>Solution</strong></p></td>
</tr>
<tr>
<td style="vertical-align: top" width="312"><p>Your firewall is blocking the required URLs required to access the in-game Library.</p></td>
<td style="vertical-align: top" width="312"><p>Verify the required URLs are added to your network’s allow list:</p>
<ul>
<li>https://*.minecraft-services.net/</li>
<li>https://*.xboxlive.com (Library/Demo Lesson)</li>
<li>https://*.playfabapi.com (Library/Demo Lesson)</li>
</ul>
<p>The <a href="https://aka.ms/MEERequiredURLs">URLs Used by Minecraft Education</a> article has a list of all the required URLs.</p></td>
</tr>
<tr>
<td style="vertical-align: top" width="312"><p>You aren’t connected to the internet.</p></td>
<td style="vertical-align: top" width="312"><p>Check your network’s internet connection.</p></td>
</tr>
<tr>
<td style="vertical-align: top" width="312"><p>Your web filter is blocking access.</p></td>
<td style="vertical-align: top" width="312"><p>Check your web filter’s settings to ensure access isn’t blocked. Refer to your web filter’s guides for assistance.</p></td>
</tr>
<tr>
<td style="vertical-align: top" width="312"><p>The service that provides content for the in-game Library is currently down.</p></td>
<td style="vertical-align: top" width="312"><p>Try accessing the in-game Library later.</p></td>
</tr>
<tr>
<td style="vertical-align: top" width="312"><p>Minecraft Education has been running for an extended period (e.g., overnight) and you have lost connection to the in-game Library.</p></td>
<td style="vertical-align: top" width="312"><p>Close and re-open Minecraft Education. Then try accessing the in-game Library again.</p></td>
</tr>
</tbody>
</table>

 

If you have tried the solutions in this article and are still having issues, contact the support team via the [submit a request](https://aka.ms/MEE_New_Request) form and include this information:

- Whether you're using a VPN or proxy, and if so, which brand.
- Which device and OS version you’re using.
- Which version of Minecraft Education you are using (bottom right corner of screen).
- A screenshot of the error.
- A network trace (if possible).
