---
title: Create Servers in the Admin Portal
date: 2026-02-13T23:38:43Z
updated: 2026-02-17T22:50:20Z
categories: Servers
link: https://edusupport.minecraft.net/hc/en-us/articles/46295348713236-Create-Servers-in-the-Admin-Portal
hash:
  h_01KHMTDXD40ARQSR405VHCFPZM: hardware-and-operating-system-os-requirements
  h_01KHMR42VB1R9KTQ1KSQPAKARS: create-a-server
---

## Hardware and Operating System (OS) requirements

We recommend running the Bedrock Minecraft Server on 64-bit Intel or AMD processor machines with at least 2 cores and 1 Gb RAM.

- The Linux version requires Ubuntu 18 or later. Other distributions are not supported.
- The Windows version requires either:
  - Windows 10 version 1703 or later
  - Windows Server 2016 or later

## Create a Server

- Navigate to the [Dedicated Server Admin Portal](https://aka.ms/dedicatedservers) and sign in (only Global Admins can currently sign in to the Admin Portal)
- Navigate to the [Settings page](./The-Dedicated-Server-Admin-Portal-is-here.md#tenant-settings), and set the **Allow Servers** toggle to the on position
- From either the Home page or the Server List page, click the **Add a Server** button
- Required settings
  - Enter the IP address where you will run your server - refer to [install and run your server](./Dedicated-Server-Tooling-and-Scripting-Guide.md#create-and-configure-a-dedicated-server) for help finding your IP address and port.
    - **Note: IPv6 is not supported at this time. **
  - Enter the port that will be used for your server
  - Use the Allow chat toggle to enable or disable chat on the server

<figure class="wysiwyg-image">
<img src="https://edusupport.minecraft.net/hc/article_attachments/46397132526612" alt="Add server - required.png" />
</figure>

- World Generation Settings (Optional)
  - Enter a world seed 
  - Select the game mode

<figure class="wysiwyg-image">
<img src="https://edusupport.minecraft.net/hc/article_attachments/46397132527124" alt="Add server - world gen.png" />
</figure>

- Select which server version you would like to download
  - Configuration file only - this can be used if you are [creating](https://edusupport.minecraft.net/hc/en-us/articles/46295360264084) or [managing](https://edusupport.minecraft.net/hc/en-us/articles/46295418163988) your server through scripting
  - Configured Windows server - the downloaded zip file will contain all the files you need to run a Windows server
  - Configured Linux server - the downloaded zip file will contain all the files you need to run a Linux server
- Click the **Download** button and the zip file will be downloaded to your local machine
- When you see the **Download Complete** confirmation your server files are ready for installation

<figure class="wysiwyg-image">
<img src="https://edusupport.minecraft.net/hc/article_attachments/46397148609940" alt="Download Complete.png" />
</figure>

- Click the **Continue** button, and enter your Server information
  - Server Name - the name that appears on the server list in the Minecraft Education client
  - Server Passcode - if you enter a passcode, all players that join the server will be required to enter this passcode
  - Enabled - determines if players can join the server.  If this is turned off while players are on the server, the server will close and all players will lose access
  - Broadcast - when this is set to the on position, the server will appear in the server list in the Minecraft Education client

<figure class="wysiwyg-image">
<img src="https://edusupport.minecraft.net/hc/article_attachments/46397132528276" alt="Add Server - server card.png" />
</figure>

- Click **Save** to save these server settings
- Click **Close** to close the window 
- Click **Remove** to remove the server permanently from your tenant
- Follow these instructions to [install and run your server](./Dedicated-Server-Tooling-and-Scripting-Guide.md#create-and-configure-a-dedicated-server).
  - You can skip any instructions on this page about configuring the server, since this step was already done by the Download process.
  - You do not need to go past the section titled "Dedicated server setup and sign-in"
- The Server will remain in Pending status until you install and start the server for the first time.
- If you would like to configure other server settings, refer to the [Dedicated Server Tooling and Scripting Guide](./Dedicated-Server-Tooling-and-Scripting-Guide.md) for information about editing the server configuration file.

Learn how to [Manage Servers in the Admin Portal](./Manage-Servers-in-the-Admin-Portal.md)
