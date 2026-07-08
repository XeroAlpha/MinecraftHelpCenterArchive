---
title: "Teacher View: Create Dedicated Servers"
date: 2026-02-13T23:38:43Z
updated: 2026-07-08T18:29:05Z
categories: Servers
link: https://edusupport.minecraft.net/hc/en-us/articles/46295348713236-Teacher-View-Create-Dedicated-Servers
hash:
  h_01KPY6CPKKB5609Y3YNDTSR7YM: important-links
  h_01KPY6CWEKNVYG21FJVCMJ0VTM: prerequisites
  h_01KQFFGASZE3MDC9H41M4P1A5Z: creating-a-server
  h_01KQ0TQT3E0XC4AY0D9D7414YP: installing-on-windows-or-ubuntu
  h_01KRCK7M4EP0GG4JEXCB2YV8V8: editing-your-server
---

If your Global Administrator (IT Administrator) has enabled the feature, Teachers can create, manage, and install Minecraft Education Dedicated Servers through the Dedicated Server Admin Portal. This guide is intended to help teachers through the process of setting up and running their servers! 

**Note**: Teachers are determined by licensing. Any user who has a "For Faculty" license (i.e. Microsoft 365 A3 for Faculty, or Minecraft Education for Faculty) is considered a teacher. Any other license type (such as a Commercial License) will be considered a student, and thus, unable to access the portal or register servers. In these cases, you'll need to work with your IT Team, or Global Administrator, to setup your server(s) or get the proper licenses assigned. \
Commercial Users will not be able to get these licenses. You will need to use your Global Administrator account in these cases. You should follow this guide instead: [IT Admin: Create Dedicated Servers](./IT-Admin-Create-Dedicated-Servers.md)

While we've done our best to make this process as easy as possible, setting up the server may still require some technical knowledge. This may also involve working with your Network Administrator to get a port opened on your network for the server to use, ensuring all of the URLs used by Minecraft Education are allow listed, or enabling Dedicated Serves at a tenant level. You should refer your IT Admin to the first part of the following article to ensure all initial setup is complete: [IT Admin: Create Dedicated Servers](./IT-Admin-Create-Dedicated-Servers.md)

You can find general information about dedicated servers in the [Dedicated Server FAQ](./Dedicated-Server-FAQ.md)

### Important links

- [Prerequisites](#prerequisites)
- [Creating a server](#creating-a-server)
- [Installing on Windows or Ubuntu](#h_01KPXYPF2D209WC3WX9BXC623J)
- [Editing your server](#editing-your-server)

### Prerequisites

Before you begin, you'll need to verify the following: 

1.  Your IT Admin will need to enable both the ability to run servers and access to teacher view on the tenant level. They can do that with the steps on this article: [IT Admin: Create Dedicated Servers](./IT-Admin-Create-Dedicated-Servers.md)
    - Failure to do this will result in an "access not permitted error" when trying to sign into the admin portal. 
2.  Ensure that all of the [URLs used by Minecraft Education](../Administration/FAQ-IT-Admin-Guide.md) are allow listed on your network. 
3.  If intending to connect externally, ensure that your network administrator has opened a port on your firewall or router for your server to use. If connecting locally, you may only need to open a port through your Operating System's firewall. 
4.  You will also need a static IP assigned to your host device. We recommend working with your IT Administrator to ensure you get an IP that is not already taken. 
5.  Ensure your host device meets the [Dedicated Server System Requirements](./Dedicated-Server-System-Requirements.md)
6.  Ensure all of your client devices are [up to date](../Installation/Update-to-a-New-Version-of-Minecraft-Education.md), and meet the [System Requirements](../Get-Started/System-Requirements.md)
7.  Ensure you have a For Faculty license that will allow access to the [Minecraft Education Dedicated Server Admin Portal](https://aka.ms/dedicatedservers)
    - These can be any of the following: 
      - Microsoft A1, A3, or A5 for Faculty 
      - Minecraft Education for Faculty
        -  Note users with "For Student Use" licenses will **not** be able to sign in, create, or manage servers. 
        - Commercial users will not be able to get these licenses; you will need to use your Global Administrator account for this. Commercial Users should follow this guide: [IT Admin: Create Dedicated Servers](./IT-Admin-Create-Dedicated-Servers.md)
    - You can verify the licenses on your account either by reaching out to your IT Admin, or through your account settings here: <https://aka.ms/assigned-subscriptions>. 
      - If you do not have one of these licenses, please reach out to your IT Administration Team to have your license updated. Support cannot change your license for you. 
    - Failure to do this will result in an "access not permitted error" when trying to sign into the admin portal. 

### Creating a server

Once you've verified the prerequisites above, you can begin to create your first server.

1.  Before you begin make sure your intended server meets our [Dedicated Server System Requirements](./Dedicated-Server-System-Requirements.md)

2.  Ensure your IT Administrator has enabled the use of Dedicated Servers per the "Enable Dedicated Servers" section of this guide: [IT Admin: Create Dedicated Servers](./IT-Admin-Create-Dedicated-Servers.md)

3.  From either the Home page or the Server List page, click the **Add a Server** button

4.  Provide the required settings:
    1.  Enter the IP address where you will run your server
        - The exact steps of finding this IP Address will be different depending on what type of interface your server is using. Windows is primarily managed over GUI (Graphical User Interface), and Ubuntu is primarily managed via CLI (Command Line Interface) with only a terminal. 
          - **Note: IPv6 is not supported at this time. **
    2.  If you're intending to connect from both internal and external networks, you will need to use your Public IP Address assigned to you by your ISP. 
        - To get your Public IP via CLI (Command Line): use `curl ip.me` in your terminal. 
        - To get your Public IP via GUI (Graphical Interface): use a web browser and go to [https://ip.me](https://ip.me/) 
    3.  If you're only connecting via local network, you'll want to use your local IP.
        - To obtain this via CLI (Command Line): 
          - **Windows - **Use the command `ipconfig` and find the IPv4 address under you're preferred network interface. 
          - **Ubuntu - **Use the command `ip address` or `ip a` and use the "inet" address under your preferred interface. 
        - To obtain via GUI (Graphical Interface):
          - **Windows - **Go to **Windows Settings \> Network & Internet \> **Select your preferred Interface \> Then under **Connection Properties **find "IPv4 Address"
          - **Ubuntu - **Go to **Settings \> Network \> **Select the settings wheel next to your preferred interface \> Find **IPv4 **address. 

        1.  **Note: **the exact steps may vary depending on the version of Windows (e.g. 10/11) or Ubuntu you're using. 
    4.  Enter the port that will be used for your server
        1.  You need to work with your IT Administrator to have this port forwarded through both your host device's local firewall, and/or your router's firewall. 
    5.  Use the **Allow chat** toggle to enable or disable chat on the server
    6.  You may also elect to log all messages sent by users by toggling Chat Logging. 
        - This will save all messages sent by users to `/chat_logs/ChatLog_<Date>.txt`
        - If you wish to change this setting later, it must be manually updated by changing the `chat-logging-enabled` property in `server.properties`. The server will need to be rebooted for this to take effect.![](https://edusupport.minecraft.net/hc/article_attachments/50728849372692)

5.  Provide the world generation settings (Optional)
    - Enter a world seed 
    - Select the game mode 

6.  Select which server version you would like to download
    - Configuration file only - this can be used if you are [creating ](https://edusupport.minecraft.net/hc/en-us/articles/46295360264084)or [managing ](https://edusupport.minecraft.net/hc/en-us/articles/46295418163988)your server through scripting
    - Configured Windows server - the downloaded zip file will contain all the files you need to run the server on Windows (or Windows Server). 
    - Configured Linux server - the downloaded zip file will contain all the files you need to run the server on Ubuntu. 

7.  Click the **Download **button and the zip file will be downloaded to your local machine

8.  When you see the **Download Complete** confirmation your server files are ready for installation/

    ![Download Complete.png](https://edusupport.minecraft.net/hc/article_attachments/46397148609940)

9.  Click the **Continue** button, and enter your Server information
    - Server Name - the name that appears on the server list in the Minecraft Education client
    - Server Passcode - if you enter a passcode, all players that join the server will be required to enter this passcode
      - **Important Note**: Passcodes are not passwords, since they are not unique to each user. They are instead unique to each server (or at least should be!). They are viewable to admins and shared by users. For example, a classroom could use a passcode to ensure only that class can get into the server, so long as the passcode is only known to the people in the class.
    - Enabled - determines if players can join the server.  If this is turned off while players are on the server, the server will close and all players will lose access
    - Broadcast - when this is set to the on position, the server will appear in the server list in the Minecraft Education client
      - If this is off, users will need to enter the Server ID under "Add Server" in the client. It will not be in their default list. 

10. Click **Save **to save these server settings
    1.  Click **Close **to close the window 

11. Follow the steps below to install and host your server. 

### Installing on Windows or Ubuntu

Installing your server on your host is fairly simple regardless of which Operating System you choose. The exact steps will vary as Windows is primarily managed over GUI (Graphical User Interface) and Ubuntu is primarily managed via CLI (Command Line Interface), however the overall steps are the same: 

1.  After downloading the package for your OS, extract the folder to a location you can find later. 
    - On Windows you can do this through File Explorer or the `extract` command, and Ubuntu you can do this via a command such as `gzip` or `extract` or through the file explorer in GUI. 
2.  Then in the new folder, run `bedrock_server.exe` on Windows or `bedrock_server_edu` on Ubuntu
    - On Ubuntu you may need to mark the file Executable using the `chmod +x [file name]` command or through your file browser
3.  The package you download should be pre-authenticated. However, on the first run, you *may* need to authenticate the server using either your Global Administrator account, or a faculty account (if your Admin has **Allow Teachers to Manage Servers** in tenant settings enabled). 
    1.  Use the steps in your terminal to authenticate. On CLI Interfaces, use a browser on another device.

        ![](https://edusupport.minecraft.net/hc/article_attachments/50728866308244)

    2.  A brief moment after completing the browser sign in, the server should complete the sign in process and present you with the server ID and tenant ID you signed in to, as well as the IP and port clients will use to try to connect to the server as configured in the “server.properties” file.
        1.  If your server closes and is run again, it will attempt to refresh your sign in silently using the information in the “edu_server_session.json” file, but if refreshing silently fails, it may prompt you to sign in again with the same steps you just went through.

    3.  At this point, the server is registered and hosted. 

    4.  You may need to reauthenticate with the steps above if the server isn't run for a while. 

 

### Editing your server

Your server is now up and running. However, if you need to make any changes later such as changing the name, passcode, enabling or disabling chat, etc. you can find the process to edit servers here: [Modifying Existing Servers](./Modifying-Existing-Servers.md)
