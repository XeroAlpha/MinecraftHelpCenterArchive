---
title: Dedicated Server Advanced Setup
date: 2026-04-30T20:52:27Z
updated: 2026-06-24T16:27:52Z
categories: Servers
link: https://edusupport.minecraft.net/hc/en-us/articles/48786821856532-Dedicated-Server-Advanced-Setup
hash:
  h_01K6GD8G0FKPZH4TVQ7219CK1M: allow-list-configuration
  h_01KQG49049YKKQYZNG4ZG1FBKV: passcode
---

After you've configured your server (either through the [Dedicated Server Admin Portal](https://edusupport.minecraft.net/hc/en-us/articles/47808418670356) or the [Alternate Configuration Option](https://edusupport.minecraft.net/hc/en-us/articles/48539680060436) you can enable additional settings such as allow-list, and passcodes (if not configured in the Admin Portal). 

> **Note: Cross tenant play is currently unavailable. We hope to have this out in the near future! You will see the options to enable it in the Admin Portal where the setting will apply once available. **

#### Allow-list configuration

You can configure an allow list to limit who can join your server. This cannot be done in the admin portal alone. However, you can either edit the allowlist.json file directly or use in game commands to decide who should be allowed into your sessions. 

**In Game - **

> Note: using this method will require turning the allowlist back on or off upon restarting the server. The server will default to the original configuration of the server. This will be changed in a future release. 
>
> i.e. If you create the server with the `allow-list = true` property in server.properties then the server will have it on by default on each startup. If you have it set to `false` it will default to off and will need to be turned back on each session. 

1.  To enable or disable the allowlist any operator can use the `/allowlist on` or `/allowlist off` commands. This will enable or disable the allowlist. When the allowlist is on, only players in this list will be allowed into the servers. All others will be blocked. 
2.  To add someone to the allowlist use `/allowlist add <DisplayName>`
3.  To remove someone from the list use `/allowlist remove <DisplayName>`

**From Configuration Files - **

1.  To explicitly specify which users can join the server, you can set “allow-list” to `true` in the “server.properties” file on when you create your server (server will need to be restarted if running). 
    - By default, there are no entries in the “allowlist.json” file.

      ![](https://edusupport.minecraft.net/hc/article_attachments/48788530853140)

    - As a result, if “allow-list” is set to `true` in the “server.properties” file, no users will be able to join the server and will be told they are banned if they attempt.

      ![](https://edusupport.minecraft.net/hc/article_attachments/48788530855700)
2.  To add a user to the allow list, edit the “allowlist.json” and restart the server if it is running.
    - If the user whose access you are trying to change has joined in the past, their access will already be saved in the JSON file.

      - **Tip**: you can also allow certain players to join even if the server is full by setting `ignoresPlayerLimit` to `true` for that user. 

      ![](https://edusupport.minecraft.net/hc/article_attachments/48788530856340)

    - If preventing a specific user from joining is desired, remove the entry containing that user’s name and/or ID from the file.

    - If allowing a specific user to join is desired, add an entry containing that user’s name and/or ID to the file in the following format.

      ![](https://edusupport.minecraft.net/hc/article_attachments/48788561144724)

 

### Passcode 

> **Important Note**: Passcodes are not passwords, since they are not unique to each user. They are instead unique to each server (or at least should be!). They are viewable to admins and shared by users. For example, a classroom could use a passcode to ensure only that class can get into the server, so long as the passcode is only known to the people in the class. It's a good practice to rotate this passcode from time-to-time to ensure it remains known to only those who need it. 

You can set a passcode by signing into the [Dedicated Server Admin Portal](https://aka.ms/dedicatedservers) either during server creation, or by selecting **Edit**. \
However, if you prefer you can also enable it via scripting, such as by using the example tooling notebook as in the steps below:

1.  The second cell under the `tooling/edit_server_info` heading in the [Dedicated Server Alternate Configuration](https://edusupport.minecraft.net/hc/en-us/articles/48539680060436) process allows you to set a passcode that will be required to join the server.

    ![](https://edusupport.minecraft.net/hc/article_attachments/48788530858900)

2.  The third cell under the `tooling/edit_server_info` heading allows you to remove a passcode that you have previously set.

    ![](https://edusupport.minecraft.net/hc/article_attachments/48788561149076)
