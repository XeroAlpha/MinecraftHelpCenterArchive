---
title: Dedicated Server Installation Guide
date: 2025-10-01T17:35:03Z
updated: 2025-10-01T19:31:22Z
categories: Beta
link: https://edusupport.minecraft.net/hc/en-us/articles/41757415076884-Dedicated-Server-Installation-Guide
hash:
  h_01K6GJDVR8W3S5FA209DSKJV0Z: step-1-use-the-web-portal-to-turn-on-the-dedicated-server-feature-for-your-tenant
  h_01K6GD8FZN2CSVF4P6T6EBXW3T: general-requirements
  h_01K6GD8FZPV253XG4H5GCE5E3C: tenant-settings
  h_01K6GD8FZSSDC17ZA8X6X054PA: step-2-download-files-to-the-appropriate-machines
  h_01K6GD8G00WAJSTWZEB4B1H5X3: step-3-set-up-a-dedicated-server
  h_01K6GD8G00QE5RWK553R28066D: hardware-and-operating-system-os-requirements
  h_01K6GKQDN86D3ZRHJWPNF6BSKE: create-and-configure-a-dedicated-server
  h_01K6GD8G03FTYT9Q222F1TTVZ7: dedicated-server-setup-and-sign-in
  h_01K6GD8G0FKPZH4TVQ7219CK1M: dedicated-server-allow-list-configuration
  h_01K6GD8G0HQG6S3ZQMKGA6DT30: manage-servers-sample-tooling
  h_01K6GD8G0KA94NX536BW1RSHAT: tooling-setup-and-sign-in
  h_01K6GD8G0QTYD0M6T8WT2WAZ0N: toottling-basic-usage
  h_01K6GD8G0W6EF96252PHAF7YC5: tooling-steps-to-set-and-unset-passcodes-for-servers
  h_01K6GD8G0Y5S5KN36NYA2D9WSH: tooling-server-deletion
  h_01K6GD8G0ZT34W39M8MCDVA4JQ: tooling-tenant-settings
  h_01K6GD8G10YMG09DH42TKWRXMD: tooling-invite-flow-setting-up-a-server-for-cross-tenant-play
  h_01K6GD8G16W92V5AM0X01432SK: reference-a-device-code-browser-sign-in
  h_01K6GD8G17KZQSB58EVA5X94G8: reference-b-join-a-server-hosted-by-another-tenant
---

For general information about the EDU Dedicated Server, please refer to the [Dedicated Server 101 Support Article](https://aka.ms/mcedu-ds-faq).

 

## Step 1: Use the web portal to turn on the Dedicated Server feature for your tenant

### General Requirements

- To turn on the Dedicated Server feature for your tenant, you will need to have Global IT Admin Access to your Azure Tenant.
- You can set feature settings in the [Dedicated Server Admin Web Portal](https://aka.ms/dedicatedservers). See below for tenant setting options.

### Tenant Settings

- Dedicated Server Toggle (required)

![](https://edusupport.minecraft.net/hc/article_attachments/41757415067284)

This feature toggle controls whether Dedicated Servers can be accessed through your tenant. You will need to turn this toggle on to play on your or another tenant’s servers. If you have the Dedicated Server toggle on and Cross-tenant Play toggle off, accounts in your tenant will only be able to access servers owned and managed by your tenant.

 

- Cross-tenant Play Toggle (optional)

![](https://edusupport.minecraft.net/hc/article_attachments/41757415068948)

This feature toggle controls whether accounts in your tenant can join other tenants’ servers and whether accounts in other tenants can join your tenant’s servers. Once this feature toggle is turned on, each individual server meant to be accessed across tenant boundaries must also go through an invite and accept process before it can be accessed by each invited tenant.

 

- Partner Permissions (optional, coming soon)

Official Minecraft Education Partners can be enabled in this section to grant them special permissions. This will allow partners to modify your tenant’s access to and visibility of servers hosted by the partner. That way, you don’t have to configure or host servers yourself. Note that enabled partners can only grant your users guest access to servers belonging to the partner’s tenant. Partners are never able to administer the accounts or servers belonging to your tenant.

## Step 2: Download files to the appropriate machines

1.  Download and install the client build(s) on your user machine(s):
    - About Preview: [Minecraft Education Preview Program](./Minecraft-Education-Preview-Program.md)
      - [Preview client for Windows](https://aka.ms/downloadmee-winStoreBeta)
      - [Preview client for Android and Chromebook](https://aka.ms/downloadme-chromebookPreview)
    - About Beta: [Minecraft Education Beta program](./Minecraft-Education-Beta-program.md)
      - [Beta client for Windows](https://aka.ms/downloadmee-desktopBeta)
      - [Beta client for macOS](https://aka.ms/downloadmee-macosBeta)
      - Coming soon: Beta client for iOS
2.  Download the dedicated server build(s) on your server machine(s):
    - [Beta server for Windows](https://aka.ms/downloadmee-winServerBeta)
    - [Beta server for Linux](https://aka.ms/downloadmee-linuxServerBeta)
3.  Download VS Code and the sample tooling Python notebook on your admin machine:
    - [Visual Studio Code - Mac, Linux, Windows](https://code.visualstudio.com/Download)
    - [Sample tooling Python notebook](http://aka.ms/MCEDU-DS-Tooling)
    - If useful, feel free to reference our [public API documentation](http://aka.ms/MCEDU-DS-Docs).

## Step 3: Set up a Dedicated Server

### Hardware and Operating System (OS) requirements

We recommend running the Bedrock Minecraft Server on 64-bit Intel or AMD processor machines with at least 2 cores and 1 Gb RAM.

The Linux version requires:

- Ubuntu 18 or later. Other distributions are not supported.

The Windows version requires either:

- Windows 10 version 1703 or later
- Windows Server 2016 or later

## Create and configure a dedicated server

### Dedicated server setup and sign in

1.  Unzip the server zip file.
2.  Acquire the IP and configure the port to which your client machines will connect.
    - If the client machines will be on the same network as the server machine, use the server machine’s local IP.
      - Windows: run the terminal command \`ipconfig\`
      - Linux: run the terminal command \`ip address\`
    - If the client machines will be on a different network than the server machine, use the server machine’s public IP.
      - Windows and Linux: run the terminal command \`curl ip.me\`
      - Ensure the port you want to host on is forwarded to the public internet.
3.  Ensure there are no firewalls on the client or server machines that will block clients from connecting to the server machine on the port you will be hosting.
4.  Configure the “server.properties” file:
    - Set the “server-public-ip” to the IP from above
    - Set the “server-port” to the port on which you want the server to host
      - It is recommended to not use the default port of 19132
    - Set the “gamemode”, “difficulty”, “allow-cheats”, “chat-restriction”, “max-players”, “allow-list”, and other properties in the file as desired.
    - If “allow-list” is set to \`true\`, the “allowlist.json” file will need to be edited to include the details of any users expected to join (see the “Dedicated server allow list configuration” section below for more details).
5.  Run the server executable.
    - Windows: “bedrock_server.exe”
    - Linux: “bedrock_server_edu”
6.  In the output written to the terminal, follow the instructions to sign in with an admin account for your tenant (if on a headless OS, follow the instructions on a device with a browser).
    - The output to look for in the terminal looks like this![](https://edusupport.minecraft.net/hc/article_attachments/41757430642964)
    - For more details on the browser sign in process, see the steps in the “Reference A: Device code browser sign in” section below.
    - A brief moment after completing the browser sign in, the server should complete the sign in process and present you with the server ID and tenant ID you signed in to, as well as the IP and port clients will use to try to connect to the server as configured in the “server.properties” file.
      - If your server closes and is run again, it will attempt to refresh your sign in silently using the information in the “edu_server_session.json” file, but if refreshing silently fails, it may prompt you to sign in again with the same steps you just went through.

      - Take note of the server ID printed in the output. You will need it later for the tooling to configure and enable the server’s visibility and name in clients.

        ![](https://edusupport.minecraft.net/hc/article_attachments/41757430643732)

      - If you lose track of the server ID, you can find it again in your “edu_server_session.json” file.

        ![](https://edusupport.minecraft.net/hc/article_attachments/41757430647828)
7.  At this point, the server is registered and hosted. However, before clients can connect, various additional properties that do not live in the server files must be configured. See the next section, “Tooling setup and sign in”, to see how these are set.
    - Note that in the future, before the retail release, these additional settings will be configurable via a new page on the web portal, but right now in beta the properties are only configurable via our public API.

### Dedicated Server allow-list configuration

1.  To explicitly specify which users can join the server, you can set “allow-list” to \`true\` in the “server.properties” file and restart the server if it is running.
    - By default, there are no entries in the “allowlist.json” file.

      ![](https://edusupport.minecraft.net/hc/article_attachments/41757591537172)

    - As a result, if “allow-list” is set to \`true\` in the “server.properties” file, no users will be able to join the server and will be told they are banned if they attempt.

      ![](https://edusupport.minecraft.net/hc/article_attachments/41757591542420)
2.  To add a user to the allow list, edit the “allowlist.json” and restart the server if it is running.
    - If the user whose access you are trying to change has joined in the past, their access will already be saved in the JSON file.

      ![](https://edusupport.minecraft.net/hc/article_attachments/41757591543188)

    - If preventing a specific user from joining is desired, remove the entry containing that user’s name and/or ID from the file.

    - If allowing a specific user to join is desired, add an entry containing that user’s name and/or ID to the file in the following format.

      ![](https://edusupport.minecraft.net/hc/article_attachments/41757591549716)

### Manage servers: Sample tooling

The sample tooling features a set of actions in a Jupyter Notebook that you can run to manage your servers. Using the notebook, you will be able to:

- See and manage your existing servers and server properties
- Name servers
- Set and unset server passcodes
- Delete servers
- Invite other tenants to join a server in your tenant for cross-tenant play

 

### Tooling setup and sign in

1.  On the admin machine where you downloaded VS Code and the sample tooling, install VS Code.

2.  Open the sample tooling in VS Code.

    ![](https://edusupport.minecraft.net/hc/article_attachments/41757559159060)

3.  Follow the instructions to set up [VS Code for Jupyter Notebooks in VS Code](https://code.visualstudio.com/docs/datascience/jupyter-notebooks).
    - Note that while you can run through the setup steps in a new notebook, you do not need to create a new notebook, since the sample tooling notebook is already provided.

4.  Ensure you have a minimum of Python 3.12 installed and that VS Code has the correct kernel selected.

    ![](https://edusupport.minecraft.net/hc/article_attachments/41757591552276)

5.  Run the first cell.

    ![](https://edusupport.minecraft.net/hc/article_attachments/41757559162772)

6.  In the output underneath the first cell, follow the instructions to sign in with an admin account for your tenant.
    - First, copy the code, then click the link.

      ![](https://edusupport.minecraft.net/hc/article_attachments/41757591558036)

    - Next, follow the steps in the “Reference A: Device code browser sign in” section below.

    - A brief moment after completing the browser sign in, the sample tooling should complete the sign in process and present you with the account name and tenant ID you signed in to, as well as the expiration date and time of the sign in session.
      - If your token expires, running the cell again may silently refresh your sign in or may prompt you to sign in again with the same steps you just went through.

7.  At this point, the notebook is ready to start configuring server registrations, which are the entries in Minecraft Education’s services that will be used to communicate the details of your servers to clients when users visit the new Servers menu.

### Toottling basic usage

1.  If you haven’t already, go through the steps in the “Dedicated server setup and sign in” and “Tooling setup and sign in” sections. They are required before you can do anything meaningful with the sample tooling notebook.

2.  Start by running the \`tooling/fetch_all_server_ids\` cell.

    ![](https://edusupport.minecraft.net/hc/article_attachments/41757591560212)

    - If you get the \`401 Unauthorized\` error, you need to run the first cell again, because your access token has expired.
    - The result should include all the server IDs for which your tenant has registrations and thus to which your tenant has access to configure.
    - In the list of server IDs, you should see the ID of the server you set up in the “Dedicated server setup and sign in” section above. From here on out, we’ll refer to this server ID as the server ID of the server you are configuring, but you could also configure a different server by using its ID if you have another.

3.  Next, go to the \`tooling/fetch_server_info\` cell, change the placeholder “YourServerID” to the server ID of the server you are configuring, and run the cell.

    ![](https://edusupport.minecraft.net/hc/article_attachments/41757559170708)

    - A few important observations about the result:

      ![](https://edusupport.minecraft.net/hc/article_attachments/41757591563924)

      - The “isOwningTenant” property is \`true\` if your tenant registered the server and \`false\` if the server was shared with your tenant via the invite flow (see the “Tooling invite flow” section below for more details).

      - The “isEnabled” property defaults to \`false\` and must be set to \`true\` before users can join the server.

      - The “isBroadcasted” property defaults to \`false\` and if set to \`true\`, all users in your tenant will always see the server in the Servers menu and be unable to remove it in the client. If set to \`false\`, users must add the server by its server ID with the “Add Server” button and dialog in the Servers menu.

        ![](https://edusupport.minecraft.net/hc/article_attachments/41758013852052)

        ![](https://edusupport.minecraft.net/hc/article_attachments/41758029755668)![](https://edusupport.minecraft.net/hc/article_attachments/41758029757460)

      - The “serverName” property defaults to “Server \<server ID\>” if your tenant registered the server and defaults to the same name as in the owning tenant if the server was shared with your tenant by another tenant (see the “Tooling invite flow” section below for more details). We highly recommend changing the server name before enabling or broadcasting the server.

4.  Now that you know the current properties of the server, go to the first cell under the \`tooling/edit_server_info\` heading, change the placeholder “YourServerID” to the server ID of the server you are configuring, change the other placeholder property values in the cell as desired, and run the cell.

    <figure class="wysiwyg-image">
    <img src="https://edusupport.minecraft.net/hc/article_attachments/41758029761300" />
    </figure>

5.  Go back to the \`tooling/fetch_server_info\` cell and run it to observe the property values of the server have changed.

### Tooling steps to set and unset passcodes for servers

1.  The second cell under the \`tooling/edit_server_info\` heading allows you to set a passcode that will be required to join the server.
    - Before running the cell, make sure to change the “YourServerID” placeholder server ID at the bottom of the cell and the “MyPasscode” placeholder value in the center of the cell.

      ![](https://edusupport.minecraft.net/hc/article_attachments/41758029762196)
2.  The third cell under the \`tooling/edit_server_info\` heading allows you to remove a passcode that you have previously set.
3.  ![](https://edusupport.minecraft.net/hc/article_attachments/41758029763860)
    - Note 1: There is currently a bug in the Beta that prevents setting a passcode after it has been removed. This will be fixed soon and will not require any changes on your side.
    - Note 2: These are not passwords in the traditional sense, since they are not unique to each user. They are instead unique to each server (or at least should be!). As such, we are planning to change them to be called “passcode” instead. We are also planning to make them viewable to admins. For this beta, you can set the passcode with the “Password” field and remove it with the “DisablePasswordProtection” field, but this will be different in the next version.

### Tooling server deletion

1.  Before deleting a server registration, it is highly recommended that you double check the properties of the server to ensure it is the server you intend to delete. You can do so by using the \`tooling/fetch_server_info\` cell (see the “Tooling basic usage” section above for more details).

2.  Also, before deleting a registration, which is irreversible, consider disabling the server instead if you intend to restore the server to usability later. You can do so by setting the “Enabled” field to \`False\` in the first cell under the \`tooling/edit_server_info\` heading (see the “Tooling basic usage” section above for more details).

3.  If, after double checking the server is the one you want to remove and considering disabling the server instead, you determine to delete a server registration completely, you can do so by going to the \`tooling/delete_server_registration\` cell, changing the “YourServerID” placeholder value to the server ID of the server you want to delete, and running the cell.

    ![](https://edusupport.minecraft.net/hc/article_attachments/41758029765908)

    - If the call fails, you may have already deleted the server registration, or your tenant may not own the server. You can check by using the \`tooling/fetch_server_info\` cell (see the “Tooling basic usage” section above for more details).
    - If your tenant does not own the server, that means your tenant is a guest of the server and accepted an invite to the server. In this case, you can remove your guest registration by using the second cell under the \`tooling/remove_server_connection\` heading instead (see the “Tooling invite flow” section below for more details).

### Tooling tenant settings

1.  Tenant settings can conveniently be edited via the [Dedicated Server Admin Web Portal](https://aka.ms/dedicatedservers), but you can also use the sample tooling or write your own tooling to call the tenant settings endpoints. This can be useful if you want to automate or schedule changes and have a program make the changes for you.
2.  Similarly to the other cells in the notebook, there are placeholder values for various fields. Of special note however is the fact that the \`tooling/fetch_tenant_settings\` endpoint will return the IDs of any servers you have set to be broadcasted.

### Tooling invite flow (Setting up a Server for Cross-tenant Play)

For users from two or more different tenants to join the same server, tenant admins from all tenants must work together to configure the server so users from each admin’s tenant can connect. The general outline of the flow goes like this:

1.  All participating tenants must enable Dedicated Server and Cross-Tenant Play in their tenant settings.
2.  An admin from the hosting tenant must set up the server as previously described in the “Dedicated server setup and sign in” section.
3.  An admin from the hosting tenant must invite all the other tenants to the server.
4.  An admin from each invited tenant must accept the invite to the server.

In more detail, these are the exact steps:

1.  An admin from each tenant must ensure that their tenant allows cross-tenant servers to participate.
    - The first way to enable cross-tenant servers is to enable the “Allow Cross-Tenant Servers” option on the [Dedicated Server Admin Web Portal](https://aka.ms/dedicatedservers) (see the “Tooling setup and sign in” section above for more details).
    - The second way is to set the equivalent “CrossTenantAllowed” property to \`True\` via the first cell under the \`tooling/edit_tenant_settings\` heading in the sample tooling notebook.
2.  An admin from the hosting tenant must set up the server as previously described in the “Dedicated server setup and sign in” section.
    - The “CrossTenantAllowed” property must be set to \`True\` or sending invites, accepting invites, and users from other tenants joining the server will fail.
    - Using an allow list and/or a passcode is much more important if allowing users from other tenants so that only the users you are expecting can join.
    - To set a passcode, see the “Tooling steps to set and unset passcodes for servers” section above.
    - If “allow-list” is set to \`true\`, the “allowlist.json” file will need to be edited to include the details of any users expected to join (see the “Dedicated server allow list configuration” section above for more details).
3.  An admin from the hosting tenant must invite all the other tenants to the server.
    - Go to the \`tooling/create_server_invite\` cell, change the placeholder “YourServerID” to the server ID of the server you are configuring, replace the placeholder “…-SomeTenantID” value with the tenant IDs of each tenant to invite, make sure each tenant ID is surrounded by quotes, ensure each quoted tenant ID is separated by a comma, and run the cell.

      ![](https://edusupport.minecraft.net/hc/article_attachments/41758013863444)

    - If you receive the “TypeError: string indices must be integers, not 'str'” error, you need to run the first cell in the notebook to sign in again (see the “Tooling setup and sign in” section above for more details).

    - If you receive the “tooling/create_server_invite: 400 Cross-tenant is not enabled for this server.” error, you need to use the first cell under the \`tooling/edit_server_info\` heading to set the “CrossTenantAllowed” property to \`True\` (see the “Tooling basic usage” section above for more details).

    - Successfully sending the invite(s) to guest tenant(s) will result in a 200 code and the server ID showing up in a list following the tenant ID of the recipient(s).

      ![](https://edusupport.minecraft.net/hc/article_attachments/41758013864212)
4.  An admin from each invited tenant must accept the invite to the server.
    - Go to the \`tooling/accept_server_invite\` cell, change the placeholder “SomeServerID” to the server ID of the host tenant, and run the cell.

      ![](https://edusupport.minecraft.net/hc/article_attachments/41758029774740)

    - The admin of the host tenant may have communicated the server ID to the admins of the invited tenants, but if not, “ServerInvitesReceived” is a field in the result of calls to \`tooling/fetch_tenant_settings\`.

      ![](https://edusupport.minecraft.net/hc/article_attachments/41758029778324)

## Reference A: Device code browser sign in

1.  On the website that opens, enter the code from the output and sign in as a global admin of your tenant.

    ![](https://edusupport.minecraft.net/hc/article_attachments/41758013870228)

2.  Once you sign in, select “Continue” when asked to confirm you are trying to sign in to “Minecraft Education Admin Tools”.

    ![](https://edusupport.minecraft.net/hc/article_attachments/41758013872276)

3.  When told the sign in is complete, you may close the browser tab.

    ![](https://edusupport.minecraft.net/hc/article_attachments/41758029786260)

## Reference B: Join a server hosted by another tenant

For tenants who are not looking to create and manage servers themselves, but want to join another tenant’s server, here is a step-by-step guide for what you need to do:

1.  Enable Dedicated Server and Cross-Tenant Play in your tenant settings. You can enable both in the [Dedicated Server Admin Web Portal](https://aka.ms/dedicatedservers).

2.  Send your tenant ID to the admin of the tenant hosting the server. You can find your tenant ID in the [Dedicated Server Admin Web Portal](https://aka.ms/dedicatedservers).

    <figure class="wysiwyg-image">
    <img src="https://edusupport.minecraft.net/hc/article_attachments/41760886099476" />
    </figure>

3.  Download and install [Visual Studio Code (Mac, Linux, Windows)](https://code.visualstudio.com/Download) and the [Sample tooling Python notebook](http://aka.ms/MCEDU-DS-Tooling) on your admin machine (see the “Tooling setup and sign in” section for more details).

4.  Wait for the host tenant to send out server invites.

5.  Accept the invite to the server through the sample tooling.
    - Go to the \`tooling/accept_server_invite\` cell, change the placeholder “SomeServerID” value to the server ID from the host tenant, and run the cell.

      ![](https://edusupport.minecraft.net/hc/article_attachments/41758029789076)

    - If you get the \`401 Unauthorized\` error, you need to run the first cell again, because your access token has expired (see the “Tooling setup and sign in” section for more details).

    - The admin of the host tenant may have communicated the server ID to you, but if not, “ServerInvitesReceived” is a field in the result of calls to \`tooling/fetch_tenant_settings\`. You can use that cell to check for IDs of any servers to which your tenant has received an invite

      ![](https://edusupport.minecraft.net/hc/article_attachments/41758013878036)
