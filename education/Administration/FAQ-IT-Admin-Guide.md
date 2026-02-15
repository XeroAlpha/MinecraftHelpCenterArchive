---
title: "FAQ: IT Admin Guide"
date: 2020-08-10T11:58:02Z
updated: 2025-11-05T00:15:28Z
categories: Administration
link: https://edusupport.minecraft.net/hc/en-us/articles/360047118992-FAQ-IT-Admin-Guide
hash:
  01GJRBMQFC0FPE4Q7276NKF2H6: important-links
  01G9GBKX2XMW6ZERK4RAP974QS: why-should-i-allow-students-to-play-minecraft-at-school
  allow: why-do-i-need-to-allow-network-access-to-urls
  01GJRC9SPZSBWZA91K98AY1637: list-of-all-urls-used-by-minecraft-education
  01GHA5EZN99Q4PDQPK3KMRMVAS: what-is-the-full-list-of-domains-that-are-in-the-wildcards
  01G9GBKX2YSRAWPV1S5113A697: can-we-reduce-the-number-of-game-related-domains-in-the-allow-list
  unwanted: will-allowing-these-urls-open-my-network-to-unwanted-activity
  ports: do-i-need-to-forward-any-ports-for-minecraft-education
  01GHA5HDDNM8KMAYEW98FGC2M5: ""
  specs: what-are-the-minimum-required-specs-for-devices-to-run-minecraft-education
  install: how-do-i-install-minecraft-education
  update: how-do-i-update-minecraft-education
  data: does-minecraft-education-collect-or-store-student-data
---

This guide answers many of the common questions IT Administrators have about deploying and managing Minecraft Education in their school(s) such as URLs that need to be allow listed through enterprise firewalls and content filters, ports, minimum required specs, install & update info, and student data. 

 

### Important Links:

- [URLs that need to be allow listed](#why-do-i-need-to-allow-network-access-to-urls)
- [Will allowing these URLs open my network to unwanted activity?](#will-allowing-these-urls-open-my-network-to-unwanted-activity)
- [Do I need to forward any Ports for Minecraft Education?](#do-i-need-to-forward-any-ports-for-minecraft-education)
- [What are the minimum required specs for devices to run Minecraft Education?](#what-are-the-minimum-required-specs-for-devices-to-run-minecraft-education)
- [How do I install Minecraft Education?](#how-do-i-install-minecraft-education)
- [How do I update Minecraft Education?](#how-do-i-update-minecraft-education)
- [Does Minecraft Education collect or store student data?](#does-minecraft-education-collect-or-store-student-data)

 

### Why should I allow students to play Minecraft at school?

Minecraft Education is a game-based learning platform that offers educators a transformative way to engage students and ignite their passion for learning. The platform contains controls not found in the Consumer editions of Minecraft - which allow instructors oversight into the activities of their students. Educators in grades K-12 are using Minecraft Education to teach a range of subjects, from history and chemistry to sustainability and foreign languages, and can map lessons directly to specific learning outcomes and curriculum standards.  Through these project-based lessons, students build critical 21st century skills like collaboration, creative problem solving and digital citizenship.

 

### Why do I need to allow network access to URLs?

Minecraft Education is more than just a game—it’s a connected platform that uses cloud services to deliver interactive learning tools. To ensure students can access all available features, school IT networks need to allow communication with specific online services. Without this access, key functionality may be blocked.

\
Here’s why network access is essential:

- Minecraft Education relies on a services-based architecture, meaning it connects to the internet to access essential features.
- External communication is required to enable tools like Immersive Reader (https://edusupport.minecraft.net/hc/en-us/articles/360061503031-Accessibility-Features), lesson content, and coding platforms.
- To enable these features, school networks must allow traffic between Minecraft Education and a predefined list of service endpoints.
- Allowlisting the below URLs ensures full access to services that are embedded in the Minecraft Education experience.

 

## List of all URLs used by Minecraft Education

This is the list of all the URLs used by Minecraft Education.

|                                           |                           |
|-------------------------------------------|---------------------------|
| **URL**                                   | **Service**               |
| https://\*.minecrafteduservices.com       | Login/Multiplayer/Coding  |
| https://login.microsoftonline.com         | Login                     |
| https://aadcdn.msauth.net/                | Login                     |
| https://graph.microsoft.com               | Cloud Saving **(New)**    |
| https://\*.sharepoint.com                 | Cloud Saving **(New)**    |
| https://\*.minecraft-services.net/        | Multiplayer/Library       |
| https://\*.xboxlive.com                   | Library/Demo Lesson       |
| https://\*.playfabapi.com                 | Library/Demo Lesson       |
| https://education.minecraft.net           | Library                   |
| https://self.events.data.microsoft.com/   | Error Reporting & Logging |
| http://meedownloads.blob.core.windows.net | Updates & Support files   |
| https://contentstorage.onenote.office.net | Immersive Reader          |
| http://cognitiveservices.azure.com        | Immersive Reader          |
| https://learningtools.onenote.com         | Immersive Reader          |
| https://minecraft.makecode.com            | MakeCode                  |
| https://makecode.com                      | MakeCode                  |
| https://trg-minecraft.userpxt.io          | MakeCode                  |
| https://pxt.azureedge.net                 | MakeCode                  |
| https://api.github.com                    | MakeCode                  |

 

Note that as of v1.21.91, https://www.tynker.com is no long needs to be allow listed as we no longer utilize the services from this URL. 

**Additional URLs for Microsoft auth & Azure services:**

- [Office 365 URLs and IP address ranges - Microsoft 365 Enterprise \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-365/enterprise/urls-and-ip-address-ranges?view=o365-worldwide)
  - See "Microsoft 365 Common and Office Online" section for URLs that relate to the Microsoft login services we use. IDs 56 and 59 in this section are the most relevant to what Minecraft Education uses. Please note however that different organizations may use different URLs. If your network may be blocking our services, you can compare the URLs you're blocking to the list above to see if the URLs are ours. 

 

You will also need to ensure the following processes can run while logging in:

- Minecraft.AdalServer.exe  (Login)

If you are using SSL Decryption on a **Chromebook** any url that serves up certificates would need to be added to your bypass list. The article from Google has information [here](https://support.google.com/chrome/a/answer/6334001?hl=en&ref_topic=3504941#zippy=%2Chostname-allowlist-for-chrome-devices-using-chrome-extensions-and-apps-chrome-web-store%2Chostname-allowlist-for-chrome-devices-using-android-apps-google-play-store).

 

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

 

### Can we reduce the number of “game” related domains in the allow-list?

The Minecraft Education library uses the Microsoft owned services PlayFab and XForge to deliver library content. While we recommend allowing all xboxlive.com subdomains to help protect against future architecture changes such as additional authentication calls or the introduction of new CDNs, it is possible to limit the number of \*.xboxlive.com services to just those currently used by XForge:

- [https://xforge.xboxlive.com/](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Fxforge.xboxlive.com%2F&data=04%7C01%7Cmicahm%40microsoft.com%7Cb2e0de427cc34d821f1108d76880adee%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C637092774195972472%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C-1&sdata=0ZBPcUFcpp8WOLuiOWT8VcA96sIF%2Fg7Oz4zBdDH1Wio%3D&reserved=0)
- [https://xforgeassets001.xboxlive.com/](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Fxforgeassets001.xboxlive.com%2F&data=04%7C01%7Cmicahm%40microsoft.com%7Cb2e0de427cc34d821f1108d76880adee%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C637092774195982464%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C-1&sdata=HN34sEANnzvJ2OOAxKOrCOgXxaMDxcPO4vrsCzj1o38%3D&reserved=0)
- [https://xforgeassets002.xboxlive.com/](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Fxforgeassets002.xboxlive.com%2F&data=04%7C01%7Cmicahm%40microsoft.com%7Cb2e0de427cc34d821f1108d76880adee%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C637092774195982464%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C-1&sdata=yMhbmMW3bEZLtrE8%2Fmt9ox6WMtSgT7omEq254aIdVto%3D&reserved=0)

 

### Will allowing these URLs open my network to unwanted activity?

Minecraft Education only uses services from reputable sources that have been audited for compliance with all relevant security and privacy standards.  The communications between Minecraft Education and these service endpoints is limited to data sharing between the application and the service and the services we use are generally not available for web traffic.  

The xboxlive.com and playfabapi.com services connect Minecraft Education to our content hosting service which allows for much quicker access to our instructional content.  Opening your network to these URLs will allow authenticated communication to all Xbox services hosted on xboxlive.com but does not allow access to public websites like xbox.com. If you are concerned about exposing too many services from xboxlive.com, it is possible to only allow XForge by following the previous questions' instructions.

 

### Do I need to forward any Ports for Minecraft Education?

Minecraft Education uses a WebRTC signaling service to establish peer-to-peer connections between clients for multiplayer. The establishment of the multiplayer session occurs over web sockets and UDP ports and then the actual peer-to-peer connection occurs over ephemeral ports. Most networks should not need any configuration to support this multiplayer environment but if you do need to configure ports and firewalls, the following information should be helpful:

- The signaling connections use wss://signal.franchise.minecraft-services.net
- The STUN and TURN connections use turn.azure.com / world.relay.skype.com on the 20.202.0.0 / 16 IP range using remote TCP port 443 and remote UDP ports 3478-3481
- The peer-to-peer connections between host and joining client use local ephemeral UDP ports specified by the host client (the local port range is defined by the OS) and sent to the joining client via the signaling service

###  

### What are the minimum required specs for devices to run Minecraft Education?

For the latest information on [system requirements, visit this article. ](../Get-Started/System-Requirements.md)

 

### How do I install Minecraft Education?

Visit these Help Center pages for information about installation:

- The [Minecraft Education download page](https://education.minecraft.net/get-started/download/) contains links to versions for each supported device. See OS specific guides below:\
  - [Windows Installation Guide](../Installation/Windows-Installation-Guide.md)
  - [Chromebook Installation Guide](../Installation/Chromebook-Installation-Guide.md)
  - [Mac Installation Guide](../Installation/Mac-Installation-Guide.md)
  - [iPad Installation Guide](https://edusupport.minecraft.net/hc/en-us/articles/4404623189652)
- [Deploying and Updating Minecraft Education](https://edusupport.minecraft.net/hc/en-us/articles/360047118732-Deploying-and-Updating-Minecraft-Education-Edition-apps-all-platforms-) describes how to deploy the application manually or using system management software
  - You can deploy using **Intune to Macs** with the script located [here.](https://github.com/microsoft/shell-intune-samples/blob/master/Apps/Minecraft%20Education%20Edition/README.md)
- Use this link to get the [Minecraft Education installer package](https://aka.ms/meeclientwin10)

 

### How do I update Minecraft Education?

View our [Update to a New Version of Minecraft Education Edition](../Installation/Update-to-a-New-Version-of-Minecraft-Education.md) article for information about how Minecraft Education Edition updates and also how IT Admins can block these updates for greater control.

 

 

### Does Minecraft Education collect or store student data?

Minecraft Education uses Office 365 services for authentication, and does not collect or store any personal information within the application.  The Office 365 platform is in full compliance with [COPPA, CIPA, and FERPA.](../Get-Started/User-Privacy-and-Minecraft-Education.md) View our [User Privacy and Minecraft Education](../Get-Started/User-Privacy-and-Minecraft-Education.md) article for more information about. 

You can also visit the [Microsoft Trust Center](https://www.microsoft.com/en-us/trust-center) for more information about privacy and security in Microsoft applications.
