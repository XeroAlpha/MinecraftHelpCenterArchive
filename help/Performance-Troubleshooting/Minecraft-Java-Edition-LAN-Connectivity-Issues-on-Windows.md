---
title: "Minecraft: Java Edition LAN Connectivity Issues on Windows"
date: 2022-08-31T16:01:04Z
updated: 2024-03-29T15:26:00Z
categories: Performance & Troubleshooting
tags:
  - section_27166432886285
link: https://help.minecraft.net/hc/en-us/articles/8826295828493-Minecraft-Java-Edition-LAN-Connectivity-Issues-on-Windows
hash:
  h_01HT5C8F562F02F4NR711PPX22: my-friend-cannot-connect-to-my-minecraft-java-edition-single-player-world-on-lan
  h_01HT5C8F56CFT1ETK1X7E65P7Y: how-to-change-your-network-profile-on-windows
---

If you're running a Minecraft: Java Edition single-player world on LAN and a friend is having issues connecting to it, this article is here to help.

## My friend cannot connect to my Minecraft: Java Edition single-player world on LAN

If you are hosting your single-player world on LAN from Windows, but a Timeout error occurs when your friend tries to connect to it, then you may need to change your **Network profile** settings. 

Network profiles are used by Windows to apply security policies depending on the network you are connected to. If you are connected to your own Private Home network, then the correct policy to use is **Private**. This will allow other Minecraft players to connect to your world via LAN on your Home network. 

The **Public** profile is used for networks that you cannot trust, such as free Wi-Fi at a café. It is not recommended to change this setting if you are connected to a public network that you cannot trust. 

### How to change your Network profile on Windows 

If your friend cannot connect to your single-player world on LAN within your Home network, please follow these steps to apply the **Private** Network profile for your Home network. 

1.  1.  Close Minecraft: Java Edition. 
    2.  Open the **Network & Internet settings** from the Taskbar Notification area.![internet.png](https://minecrafthelp.zendesk.com/hc/article_attachments/25449959050253) 
    3.  Open the **Properties** for the Network connection you are using within your Home network. ![blobid1.png](https://minecrafthelp.zendesk.com/hc/article_attachments/8826180371853)
    4.  Change the Network profile for your Home network to **Private**. ![blobid2.png](https://minecrafthelp.zendesk.com/hc/article_attachments/8826193484173)
    5.  Start Minecraft, load your world, and click **Open to LAN**.![blobid3.png](https://minecrafthelp.zendesk.com/hc/article_attachments/8826182401933)
    6.  Your friends should now be able to join your world from the Play Multiplayer screen!
