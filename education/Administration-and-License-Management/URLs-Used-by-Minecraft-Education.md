---
title: URLs Used by Minecraft Education
date: 2021-08-06T13:22:58Z
updated: 2023-06-02T21:15:42Z
categories: Administration and License Management
link: https://edusupport.minecraft.net/hc/en-us/articles/4404784181524-URLs-Used-by-Minecraft-Education
hash:
  01GAW1D5M7R3MNFKRDV393Q99A: list-of-all-urls-used-by-minecraft-education
  01GHA5EZN99Q4PDQPK3KMRMVAS: what-is-the-full-list-of-domains-that-are-in-the-wildcards
  01GAW1D5M90E67SAWR1SNCQBEW: list-of-minimum-urls-required-for-minecraft-education
  01GAW1D5MAYFSABPTK4V7KW0G8: the-urls-do-not-open-your-network-to-unwanted-activity
---

Minecraft Education is built on a services-based architecture that requires communication from the application to external services on the internet. This architecture allows students to access new features such as the Immersive Reader and new lesson content. In order to allow communication with these external services, your school network will need to allow traffic between Minecraft Education and a set of service endpoints. Allowing the following set of URLs will allow access to these services that are integrated into the application itself.

 

## List of all URLs used by Minecraft Education

This is the list of all the URLs used by Minecraft Education.

|                                           |                           |
|-------------------------------------------|---------------------------|
| **URL**                                   | **Service**               |
| https://\*.minecrafteduservices.com       | Login/Multiplayer/Coding  |
| https://login.microsoftonline.com         | Login                     |
| https://aadcdn.msauth.net/                | Login                     |
| https://\*.minecraft-services.net/        | Multiplayer/Library       |
| https://\*.xboxlive.com                   | Library/Demo Lesson       |
| https://\*.playfabapi.com                 | Library/Demo Lesson       |
| https://education.minecraft.net           | Library                   |
| https://self.events.data.microsoft.com/   | Error Reporting & Logging |
| https://contentstorage.onenote.office.net | Immersive Reader          |
| http://cognitiveservices.azure.com        | Immersive Reader          |
| https://learningtools.onenote.com         | Immersive Reader          |
| http://meedownloads.blob.core.windows.net | Updates & Support files   |
| https://minecraft.makecode.com            | MakeCode                  |
| https://makecode.com                      | MakeCode                  |
| https://trg-minecraft.userpxt.io          | MakeCode                  |
| https://pxt.azureedge.net                 | MakeCode                  |
| https://api.github.com                    | MakeCode                  |
| https://www.tynker.com                    | Tynker                    |

 

**Additional URLs for Microsoft auth & Azure services:**

- [Office 365 URLs and IP address ranges - Microsoft 365 Enterprise \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-365/enterprise/urls-and-ip-address-ranges?view=o365-worldwide)
  - See "Microsoft 365 Common and Office Online" section for URLs that relate to the Microsoft login services we use. IDs 56 and 59 in this section are the most relevant to what Minecraft Education uses. Please note however that different organizations may use different URLs. If your network may be blocking our services, you can compare the URLs you're blocking to the list above to see if the URLs are ours. 

You will also need to ensure the following processes can run while logging in:

- Minecraft.AdalServer.exe  (Login)

If you are using SSL Decryption on a **Chromebook** any url that serves up certificates would need to be added to your bypass list. The article from Google has information [here](https://support.google.com/chrome/a/answer/6334001?hl=en&ref_topic=3504941#zippy=%2Chostname-allowlist-for-chrome-devices-using-chrome-extensions-and-apps-chrome-web-store%2Chostname-allowlist-for-chrome-devices-using-android-apps-google-play-store).

 

**For more information on URLs, subdomains, and ports, see our [full IT Admin guide here. ](https://educommunity.minecraft.net/hc/en-us/articles/360047118992)**

 

### What is the full list of domains that are in the wildcards?

The list of domains can change without notice, and some are CDNs which may be different regionally, so while we will attempt to keep this list up to date and complete, if possible we recommend you use the wildcards (\*) above instead of managing specific sub-domains.

<table style="height: 326px;" width="558">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr style="height: 89px;">
<td style="height: 89px; width: 252.6px"><p>https://*.minecrafteduservices.com</p></td>
<td style="height: 89px; width: 299.413px"><ul>
<li>login.minecrafteduservices.com</li>
<li>discovery.minecrafteduservices.com</li>
<li>notebooks.minecrafteduservices.com</li>
<li>downloads.minecrafteduservices.com</li>
</ul></td>
</tr>
<tr style="height: 134px;">
<td style="height: 134px; width: 252.6px"><p>https://*.minecraft-services.net/</p></td>
<td style="height: 134px; width: 299.413px"><ul>
<li>client.discovery.minecraft-services.net</li>
<li>authorization.franchise.minecraft-services.net</li>
<li>signal.franchise.minecraft-services.net</li>
</ul></td>
</tr>
<tr style="height: 81px;">
<td style="height: 81px; width: 252.6px"><p>https://*.xboxlive.com</p></td>
<td style="height: 81px; width: 299.413px"><ul>
<li><a href="https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Fxforge.xboxlive.com%2F&amp;data=04%7C01%7Cmicahm%40microsoft.com%7Cb2e0de427cc34d821f1108d76880adee%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C637092774195972472%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C-1&amp;sdata=0ZBPcUFcpp8WOLuiOWT8VcA96sIF%2Fg7Oz4zBdDH1Wio%3D&amp;reserved=0">xforge.xboxlive.com</a></li>
<li><a href="https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Fxforgeassets001.xboxlive.com%2F&amp;data=04%7C01%7Cmicahm%40microsoft.com%7Cb2e0de427cc34d821f1108d76880adee%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C637092774195982464%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C-1&amp;sdata=HN34sEANnzvJ2OOAxKOrCOgXxaMDxcPO4vrsCzj1o38%3D&amp;reserved=0">xforgeassets001.xboxlive.com</a></li>
<li><a href="https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Fxforgeassets002.xboxlive.com%2F&amp;data=04%7C01%7Cmicahm%40microsoft.com%7Cb2e0de427cc34d821f1108d76880adee%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C637092774195982464%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C-1&amp;sdata=yMhbmMW3bEZLtrE8%2Fmt9ox6WMtSgT7omEq254aIdVto%3D&amp;reserved=0">xforgeassets002.xboxlive.com</a></li>
</ul></td>
</tr>
<tr style="height: 22px;">
<td style="height: 22px; width: 252.6px"><p>https://*.playfabapi.com</p></td>
<td style="height: 22px; width: 299.413px"><ul>
<li>6955f.playfabapi.com</li>
</ul></td>
</tr>
</tbody>
</table>

 

### List of minimum URLs required for Minecraft Education

The Minecraft Education library uses the Microsoft owned services PlayFab and XForge to deliver library content and RTEP to gather error reports and logs. While we recommend allowing all xboxlive.com subdomains to help protect against future architecture changes such as additional authentication calls or the introduction of new CDNs, it is possible to limit the number of xboxlive.com services to just those currently used by XForge:

- [https://xforge.xboxlive.com/](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Fxforge.xboxlive.com%2F&data=04%7C01%7Cmicahm%40microsoft.com%7Cb2e0de427cc34d821f1108d76880adee%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C637092774195972472%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C-1&sdata=0ZBPcUFcpp8WOLuiOWT8VcA96sIF%2Fg7Oz4zBdDH1Wio%3D&reserved=0)
- [https://xforgeassets001.xboxlive.com/](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Fxforgeassets001.xboxlive.com%2F&data=04%7C01%7Cmicahm%40microsoft.com%7Cb2e0de427cc34d821f1108d76880adee%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C637092774195982464%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C-1&sdata=HN34sEANnzvJ2OOAxKOrCOgXxaMDxcPO4vrsCzj1o38%3D&reserved=0)
- [https://xforgeassets002.xboxlive.com/](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Fxforgeassets002.xboxlive.com%2F&data=04%7C01%7Cmicahm%40microsoft.com%7Cb2e0de427cc34d821f1108d76880adee%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C637092774195982464%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C-1&sdata=yMhbmMW3bEZLtrE8%2Fmt9ox6WMtSgT7omEq254aIdVto%3D&reserved=0)

 

### The URLs do not open your network to unwanted activity

Minecraft Education only uses services from reputable sources that have been audited for compliance with all relevant security and privacy standards.  The communications between Minecraft Education and these services is limited to data sharing between the application and the service and the services we use are generally not available for web traffic.  

The xboxlive.com and playfabapi.com services connect Minecraft Education to our content hosting service which allows for much quicker access to our instructional content.  Opening your network to these URLs allows authenticated communication to all Xbox services hosted on xboxlive.com. It does **not** allow access to public websites like xbox.com.
