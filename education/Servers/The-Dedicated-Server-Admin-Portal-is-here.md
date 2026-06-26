---
title: "IT Admin: Create Dedicated Servers"
date: 2026-02-17T03:13:24Z
updated: 2026-06-26T16:44:50Z
categories: Servers
link: https://edusupport.minecraft.net/hc/en-us/articles/46370720373908-IT-Admin-Create-Dedicated-Servers
hash:
  h_01KQ0TNP2TYCVFS50BH0Z16AK8: dedicated-server-admin-portal
  h_01KQ0TQT3E0XC4AY0D9D7414YP: installing-on-windows-or-ubuntu
  h_01KRCK8Z33PDYGXQXVR50BBV8D: editing-your-server
  h_01KHMWRQWSQ5VKVK3FAVXND5ZV: partner-permissions-optional-coming-soon
  h_01KN4X963V0KVQJ3F0FT5P4TSY: additional-resources
---

The Minecraft Education Dedicated Servers Admin Portal allows you to create and manage your dedicated servers. 

> **Note: Cross tenant play is currently unavailable. We hope to have this out in the near future! You will see the options to enable it in the Admin Portal where the setting will apply once available.**

Important Links: 

- [Dedicated Server Admin Portal](#dedicated-server-admin-portal)
  - Enabling Dedicated Servers  
  - Creating Dedicated Servers
- [Installing on Windows or Ubuntu](#h_01KPXYPF2D209WC3WX9BXC623J)
- [Editing your server](#editing-your-server)
- [Partner Permissions](#partner-permissions-optional-coming-soon) (coming soon)

### Dedicated Server Admin Portal

In the Dedicated Admin Portal you can: 

- Register, configure, and download new servers with just a few clicks
- View and manage all available Dedicated Servers associated with your tenant
- Access key server details without coding or complicated technical steps
- Manage tenant-level settings

You can access the Dedicated Server Admin Portal at [aka.ms/dedicatedservers](https://aka.ms/dedicatedservers). 

Note that we also support the scripting methods of administering servers as they can be useful for large scale server management (see [Dedicated Server Tooling and Scripting Guide](./Dedicated-Server-Tooling-and-Scripting-Guide.md))

**Enabling Dedicated Servers**

To begin, sign in to the [Dedicated Server Admin Portal](https://aka.ms/dedicatedservers) and use the settings button to access and edit your tenant settings for servers as desired.\
**Note:** A Global Administrator will need to enable these settings initially. Teachers can create and manage servers if you enable the "Allow Teachers to Manage Servers" option. 

<figure class="wysiwyg-image wysiwyg-image-resized" style="width: 78.55%;">
<img src="https://edusupport.minecraft.net/hc/article_attachments/46397007510548" />
</figure>

- This feature toggle controls whether Dedicated Servers can be accessed through your tenant. You will need to turn this toggle on to play on your or another tenant’s servers.
  - When it's turned off, servers won’t be available at all — Minecraft Education won’t show any server options to users in the Minecraft Education client. You can, however, still edit and create new server listings in the Admin Portal. You just won't be able to host them. 
- **Note:** You can also enable the "Allow Teacher to Manage Servers" checkbox to allow Faculty Members to create, edit, and authenticate serves. Learn more here: [Dedicated Server Teacher View](./Teacher-View-Create-Dedicated-Servers.md)

**Create a Server**

1.  Before you begin ensure your intended server meets our [Dedicated Server System Requirements](./Dedicated-Server-System-Requirements.md)

2.  Navigate to the [Dedicated Server Admin Portal](https://aka.ms/dedicatedservers) and sign in (only Global Admins can initially sign in to the Admin Portal unless you enabled **Allow Teachers to Manage Servers** under tenant settings). 

3.  Navigate to the [Settings page](#Tenant_Settings), and set the **Allow Servers** toggle to the on position

4.  From either the Home page or the Server List page, click the **Add a Server** button

5.  Provide the required settings:
    - Enter the IP address where you will run your server
      - The exact steps will be different depending on what type of interface your server is using. Windows is primarily managed over GUI (Graphical User Interface) with the start menu, and taskbar, and Ubuntu is primarily managed via CLI (Command Line Interface) with only a terminal. 
        - **Note: IPv6 is not supported at this time. **
    - If you're intending to connect from both internal and external networks, you will need to use your Public IP Address assigned to you by your ISP. 
      - To get your Public IP via CLI (Command Line): use `curl ip.me` in your terminal. 
      - To get your Public IP via GUI (Graphical Interface): use a web browser and go to [https://ip.me](https://ip.me/) 
    - If you're only connecting via local network, you'll want to use your local IP.
      - To obtain this via CLI (Command Line): 
        - **Windows -** Use the command `ipconfig` and find the IPv4 address under you're preferred network interface. 
        - **Ubuntu -** Use the command `ip address` or `ip a` and use the "inet" address under your preferred interface. 
      - To obtain via GUI (Graphical Interface):
        - **Windows -** Go to **Windows Settings \> Network & Internet \>** Select your preferred Interface \> Then under **Connection Properties** find "IPv4 Address"
        - **Ubuntu -** Go to **Settings \> Network \>** Select the settings wheel next to your preferred interface \> Find **IPv4** address. 
    - Enter the port that will be used for your server
      - If you're **only connecting locally**, you will only need to forward this port through your devices firewall (such as Windows Firewall, or UFW on Ubuntu). The exact steps for this will depend on your network configuration and any proxies/filters you use. 
      - If you're **connecting via external network,** you will ***also*** need to forward this port in your router/firewall. The steps for this will depend on the manufacturer of your network device(s). 
    - Use the **Allow chat** toggle to enable or disable chat on the server
    - You may also elect to log all messages sent by users by toggling Chat Logging. 
      - This will save all messages sent by users to `/chat_logs/ChatLog_<Date>.txt`
      - If you wish to change this setting later, it must be manually updated by changing the `chat-logging-enabled` in `server.properties`. The server will need to be rebooted for this to take effect.

6.  Provide the world generation settings (Optional)
    - Enter a world seed 
    - Select the game mode ![](https://edusupport.minecraft.net/hc/article_attachments/50728752636948)

7.  Select which server version you would like to download
    - Configuration file only - this can be used if you are [creating](https://edusupport.minecraft.net/hc/en-us/articles/46295360264084) or [managing](https://edusupport.minecraft.net/hc/en-us/articles/46295418163988) your server through scripting
    - Configured Windows server - the downloaded zip file will contain all the files you need to run a Windows server
    - Configured Linux server - the downloaded zip file will contain all the files you need to run a Linux server. 

8.  Click the **Download** button and the zip file will be downloaded to your local machine

    <figure class="wysiwyg-image wysiwyg-image-resized" style="width: 75%;">
    <img src="https://edusupport.minecraft.net/hc/article_attachments/50728752637076" alt="Download Complete.png" />
    </figure>

9.  When you see the **Download Complete** confirmation your server files are ready for installation

10. Click the **Continue** button, and enter your Server information
    - Server Name - the name that appears on the server list in the Minecraft Education client
    - Server Passcode - if you enter a passcode, all players that join the server will be required to enter this passcode
      - **Important Note**: Passcodes are not passwords, since they are not unique to each user. They are instead unique to each server (or at least should be!). They are viewable to admins and shared by users. For example, a classroom could use a passcode to ensure only that class can get into the server, so long as the passcode is only known to the people in the class.
    - Enabled - determines if players can join the server.  If this is turned off while players are on the server, the server will close and all players will lose access
    - Broadcast - when this is set to the on position, the server will appear in the server list in the Minecraft Education client
      - If this is off, users will need to enter the Server ID under "Add Server" in the client. It will not be in their default list. 

11. Click **Save** to save these server settings
    1.  Click **Close** to close the window 
    2.  Click **Remove** to remove the server permanently from your tenant

12. Follow the steps below to install and host your server. 

### Installing on Windows or Ubuntu

Installing your server on your host is fairly simple regardless of which Operating System you choose. The exact steps will vary as Windows is primarily managed over GUI (Graphical User Interface) and Ubuntu is primarily managed via CLI (Command Line Interface), however the overall steps are the same: 

1.  After downloading the package for your OS, extract the folder to a location you can find later. 
    - On Windows you can do this through File Explorer or the `extract` command, and Ubuntu you can do this via a command such as `gzip` or `extract` or through the file explorer in GUI. 
2.  Then in the new folder, run `bedrock_server.exe` on Windows or `bedrock_server_edu` on Ubuntu
    - On Ubuntu you may need to mark the file Executable using the `chmod +x [file name]` command or through your file browser
3.  On the first run, you'll need to authenticate the server using either your Global Administrator account, or a faculty account
    1.  Use the steps in your terminal to authenticate. On CLI Interfaces, use a browser on another device.

        ![](https://edusupport.minecraft.net/hc/article_attachments/50728769437332)

    2.  A brief moment after completing the browser sign in, the server should complete the sign in process and present you with the server ID and tenant ID you signed in to, as well as the IP and port clients will use to try to connect to the server as configured in the “server.properties” file.
        1.  If your server closes and is run again, it will attempt to refresh your sign in silently using the information in the “edu_server_session.json” file, but if refreshing silently fails, it may prompt you to sign in again with the same steps you just went through.

    3.  At this point, the server is registered and hosted. 

 

### Editing your server

Your server is now up and running. However, if you need to make any changes later such as changing the name, passcode, enabling or disabling chat, etc. you can find the process to edit servers here: [Modifying Existing Servers](./Modifying-Existing-Servers.md)

 

### Partner Permissions (optional, coming soon)

Official Minecraft Education Partners can be enabled in this section to grant them special permissions. This will allow partners to modify your tenant’s access to and visibility of servers hosted by the partner. That way, you don’t have to configure or host servers yourself. Note that enabled partners can only grant your users guest access to servers belonging to the partner’s tenant. Partners are never able to administer the accounts or servers belonging to your tenant.

#### Additional Resources

Learn more about [Dedicated Servers](./Dedicated-Server-FAQ.md)
