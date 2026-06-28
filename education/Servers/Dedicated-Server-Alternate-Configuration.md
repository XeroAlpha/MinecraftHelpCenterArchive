---
title: Dedicated Server Alternate Configuration
date: 2025-10-01T17:35:03Z
updated: 2026-06-26T18:30:35Z
categories: Servers
link: https://edusupport.minecraft.net/hc/en-us/articles/41757415076884-Dedicated-Server-Alternate-Configuration
hash:
  h_01KPY19RF5ESVGN3A71998QXMT: prerequisites
  h_01KPY1TCEMFVWVS3ZEDPJSYRDK: creating-a-server
  h_01K6GD8FZSSDC17ZA8X6X054PA: step-1-download-files-to-the-appropriate-machines
  h_01K6GD8G03FTYT9Q222F1TTVZ7: step-2-setting-up-your-server
  h_01KN597N5MA1JMGES03VWQDTEP: step-3-authenticate-the-server
  h_01K6GD8G0FKPZH4TVQ7219CK1M: ""
  h_01K6GD8G0HQG6S3ZQMKGA6DT30: manage-servers-sample-tooling
  h_01K6GD8G0KA94NX536BW1RSHAT: tooling-setup-and-sign-in
  h_01K6GD8G0ZT34W39M8MCDVA4JQ: tooling-tenant-settings
  h_01K6GD8G0QTYD0M6T8WT2WAZ0N: tooling-basic-usage
  h_01K6GD8G0W6EF96252PHAF7YC5: "-1"
  h_01K6GD8G0Y5S5KN36NYA2D9WSH: tooling-server-deletion
  h_01KQG3QZ8EKZX42PV15G0T1483: serverproperties-file
---

For those looking to mass configure, configure an allow list, configure cross-tenant support, or other more advanced features, you can do this via the **Dedicated Server Tooling and Scripting** utility. 

> **Note:** This is intended for advanced users. The below steps can be tedious and we recommend only highly technical users proceed. VS Code, Jupyter Notebook, and Python will be used. \
> **Note:** Cross tenant play is currently unavailable. We hope to have this out in the near future! You will see the options to enable it in the Admin Portal where the setting will apply once available.

For general information about the EDU Dedicated Server, please refer to the [Dedicated Server FAQ](./Dedicated-Server-FAQ.md) article. In addition to our guide below, feel free to check out our video guide:

<figure class="wysiwyg-media">

</figure>

 

### Prerequisites

Before starting ensure that: 

1.  Your host device(s) meets our [Dedicated Server System Requirements](./Dedicated-Server-System-Requirements.md)
2.  All of the [URLs Used By Minecraft Education](../Administration/FAQ-IT-Admin-Guide.md) are allow listed and reachable via your server(s)
3.  Download VS Code and the sample tooling Python notebook on your admin machine:
    1.  [Visual Studio Code - Mac, Linux, Windows](https://code.visualstudio.com/Download)
    2.  [Sample tooling Python notebook](http://aka.ms/MCEDU-DS-Tooling)
        - Follow the instructions to set up [VS Code for Jupyter Notebooks in VS Code](https://code.visualstudio.com/docs/datascience/jupyter-notebooks).
        - Ensure you have a [minimum of Python 3.12 installed](https://www.python.org/downloads/)

### Creating a Server

You can create and register servers straight from the Tooling and Scripting utilities below. Alternatively, you can use our Dedicated Server Admin Portal via one of these articles: \
[IT Admin: Create Dedicated Servers](./IT-Admin-Create-Dedicated-Servers.md)\
[Teacher View: Create Dedicated Servers](./Teacher-View-Create-Dedicated-Servers.md) 

#### Step 1: Download files to the appropriate machines

1.  [Download and install](https://education.minecraft.net/en-us/get-started/download) the client build(s) on your user machine(s):
2.  Download the Dedicated Server build(s) on your server machine(s):
    - [Windows server](https://aka.ms/downloadmee-winserver)
    - [Ubuntu server](https://aka.ms/downloadmee-linuxserver)

#### Step 2: Setting up your server

1.  Unzip the server zip file.
2.  Acquire the IP and configure the port to which your client machines will connect.
    - If the client machines will be on the same network as the server machine, use the server machine’s local IP.
      - Windows: run the terminal command `ipconfig`
      - Ubuntu: run the terminal command `ip address`
    - If the client machines will be on a different network than the server machine, use the server machine’s public IP.
      - Windows and Linux: run the terminal command `curl ip.me`
      - Ensure the port you want to host on is forwarded to the public internet.
3.  Ensure there are no firewalls on the client or server machines that will block clients from connecting to the server machine on the port you will be hosting. Ensure all of the [URLs Used by Minecraft Education](../Administration/FAQ-IT-Admin-Guide.md) are allow listed and reachable. 
4.  Configure the “server.properties” file:
    - Set the “server-public-ip” to the IP from above
    - Set the “server-port” to the port on which you want the server to host

> - **Tip:** For security, we highly recommend not using the default port (19132)

- If “allow-list” is set to `true`, the “allowlist.json” file will need to be edited to include the details of any users expected to join (See the “[Dedicated Server Advanced Setup](./Dedicated-Server-Advanced-Setup.md)” article for more information).
- Set the “gamemode”, “difficulty”, “allow-cheats”, “chat-restriction”, “max-players”, “allow-list”, and other properties in the file as desired.
- If you wish to log chat set `chat-logging-enabled` to `true`
  - Chat logs will be saved to `/chat_logs/ChatLog_<Date>.txt`

#### Step 3: Authenticate the server

1.  Run the server executable.
    - Windows: “bedrock_server.exe”
    - Linux: “bedrock_server_edu”
      - You may need to mark this file executable using this command: `chmod +x bedrock_server_edu`
2.  In the output written to the terminal, follow the instructions to sign in with an admin account for your tenant (if on a headless OS, follow the instructions on a device with a browser).
    - The output to look for in the terminal looks like this![](https://edusupport.minecraft.net/hc/article_attachments/41757430642964)
    - For more details on the browser sign in process, see the steps in the “Reference A: Device code browser sign in” section below.
    - A brief moment after completing the browser sign in, the server should complete the sign in process and present you with the server ID and tenant ID you signed in to, as well as the IP and port clients will use to try to connect to the server as configured in the “server.properties” file.
      - If your server closes and is run again, it will attempt to refresh your sign in silently using the information in the “edu_server_session.json” file, but if refreshing silently fails, it may prompt you to sign in again with the same steps you just went through.

      - Take note of the server ID printed in the output. You will need it later for the tooling to configure and enable the server’s visibility and name in clients.

        ![](https://edusupport.minecraft.net/hc/article_attachments/41757430643732)

      - If you lose track of the server ID, you can find it again in your “edu_server_session.json” file.

        ![](https://edusupport.minecraft.net/hc/article_attachments/41757430647828)
3.  At this point, the server is registered and hosted. However, various additional properties that do not live in the server files can be configured. To see how these are set, see the “Tooling setup and sign in” section below.

####  

### Manage servers: Sample tooling

Your server is now up and running! However, the sample tooling features a set of actions in a Jupyter Notebook that you can run to manage your servers. Using the notebook, you will be able to:

- See and manage your existing servers and server properties
- Name servers
- Delete servers

You can also edit servers created by the Tooling and Scripting notebook on the Dedicated Server Admin Portal: [Modifying Existing Servers](./Modifying-Existing-Servers.md)

### Tooling setup and sign in

To configure these advanced options, you'll first want to sign into the Scripting and Tooling utility. 

1.  On the admin machine where you downloaded VS Code and the sample tooling, install VS Code. 
    - This does not need to be on the server itself.

2.  Open the sample tooling in VS Code.

    ![](https://edusupport.minecraft.net/hc/article_attachments/41757559159060)

3.  If you haven't already, follow the instructions to set up [VS Code for Jupyter Notebooks in VS Code](https://code.visualstudio.com/docs/datascience/jupyter-notebooks).
    - Note that while you can run through the setup steps in a new notebook, you do not need to create a new notebook, since the sample tooling notebook is already provided.

4.  Ensure you have a minimum of Python 3.12 installed and that VS Code has the correct kernel selected.

    ![](https://edusupport.minecraft.net/hc/article_attachments/41757591552276)

5.  Run the first cell.

    ![](https://edusupport.minecraft.net/hc/article_attachments/41757559162772)

6.  In the output underneath the first cell, follow the instructions to sign in with an admin account for your tenant.
    - First, copy the code, then click the link.

      ![](https://edusupport.minecraft.net/hc/article_attachments/41757591558036)

    - Next, in the browser authenticate using your Global Admin, or Faculty, account.

    - A brief moment after completing the browser sign in, the sample tooling should complete the sign in process and present you with the account name and tenant ID you signed in to, as well as the expiration date and time of the sign in session.
      - If your token expires, running the cell again may silently refresh your sign in or may prompt you to sign in again with the same steps you just went through.

7.  At this point, the notebook is ready to start configuring server registrations, which are the entries in Minecraft Education’s services that will be used to communicate the details of your servers to clients when users visit the Servers menu.

### Tooling tenant settings

1.  Tenant settings can conveniently be edited via the [Dedicated Server Admin Web Portal](https://aka.ms/dedicatedservers), but you can also use the sample tooling or write your own tooling to call the tenant settings endpoints. This can be useful if you want to automate or schedule changes and have a program make the changes for you.

2.  Similarly to the other cells in the notebook, there are placeholder values for various fields. Of special note however is the fact that the `tooling/fetch_tenant_settings` endpoint will return the IDs of any servers you have set to be broadcasted.

3.  The most important field in the tenant settings is "DedicatedServerEnabled", which *must* be set to `True` for users to see the Servers menu in the client or join servers.

    ![](https://edusupport.minecraft.net/hc/article_attachments/46396885744660)

### Tooling basic usage

1.  If you haven’t already, go through the steps in the “Dedicated server setup and sign in” and “Tooling setup and sign in” sections. They are required before you can do anything meaningful with the sample tooling notebook.

2.  Start by running the `tooling/fetch_all_server_ids` cell.

    ![](https://edusupport.minecraft.net/hc/article_attachments/41757591560212)

    - If you get the "401 Unauthorized" error, you need to run the first cell again, because your access token has expired.
    - The result should include all the server IDs for which your tenant has registrations and thus to which your tenant has access to configure.
    - In the list of server IDs, you should see the ID of the server you set up in the “Dedicated server setup and sign in” section above. From here on out, we’ll refer to this server ID as the server ID of the server you are configuring, but you could also configure a different server by using its ID if you have another.

3.  Next, go to the `tooling/fetch_server_info` cell, change the placeholder “YourServerID” to the server ID of the server you are configuring, and run the cell.

    ![](https://edusupport.minecraft.net/hc/article_attachments/41757559170708)

    - A few important observations about the result:

      ![](https://edusupport.minecraft.net/hc/article_attachments/41757591563924)

      - The “isOwningTenant” property is `true` if your tenant registered the server and `false` if the server was shared with your tenant via the invite flow (see the “Tooling invite flow” section below for more details).

      - The “isEnabled” property defaults to `false` and must be set to `true` before users can join the server.

      - The “isBroadcasted” property defaults to `false` and if set to `true`, all users in your tenant will always see the server in the Servers menu, as long as the server is enabled. They will also be unable to remove it from their server list. If set to `false`, users must add the server by its server ID with the **Add Server** button and dialog in the Servers menu.

        ![](https://edusupport.minecraft.net/hc/article_attachments/41758013852052)

        ![](https://edusupport.minecraft.net/hc/article_attachments/41758029755668)![](https://edusupport.minecraft.net/hc/article_attachments/41758029757460)

      - The “serverName” property defaults to “Server \<server ID\>” if your tenant registered the server and defaults to the same name as in the owning tenant if the server was shared with your tenant by another tenant (see the “Tooling invite flow” section below for more details). We highly recommend changing the server name before enabling or broadcasting the server.

4.  Now that you know the current properties of the server, go to the first cell under the `tooling/edit_server_info` heading, change the placeholder “YourServerID” to the server ID of the server you are configuring, change the other placeholder property values in the cell as desired, and run the cell.

![](https://edusupport.minecraft.net/hc/article_attachments/41758029761300)

1.  Go back to the `tooling/fetch_server_info` cell and run it to observe the property values of the server have changed.

###  

### Tooling server deletion

1.  Before deleting a server registration, it is highly recommended that you double check the properties of the server to ensure it is the server you intend to delete. You can do so by using the `tooling/fetch_server_info` cell (see the “Tooling basic usage” section above for more details).

2.  Also, before deleting a registration, which is irreversible, consider disabling the server instead if you intend to restore the server to usability later. You can do so by setting the “Enabled” field to `False` in the first cell under the `tooling/edit_server_info` heading (see the “Tooling basic usage” section above for more details).

3.  If, after double checking the server is the one you want to remove and considering disabling the server instead, you determine to delete a server registration completely, you can do so by going to the `tooling/delete_server_registration` cell, changing the “YourServerID” placeholder value to the server ID of the server you want to delete, and running the cell.

    ![](https://edusupport.minecraft.net/hc/article_attachments/41758029765908)

    - If the call fails, you may have already deleted the server registration, or your tenant may not own the server. You can check by using the `tooling/fetch_server_info` cell (see the “Tooling basic usage” section above for more details).
    - If your tenant does not own the server, that means your tenant is a guest of the server and accepted an invite to the server. In this case, you can remove your guest registration by using the second cell under the `tooling/remove_server_connection` heading instead (see the “Tooling invite flow” section below for more details).

### Server.properties file

Some additional settings can be edited in `server.properties` on the server itself. If edited through this file, the server must be restarted before configuration takes effect. More details on this file can be found in this guide: [Modifying Existing Servers](./Modifying-Existing-Servers.md)\
