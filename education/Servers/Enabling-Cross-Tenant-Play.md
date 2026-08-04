---
title: Enabling Cross-Tenant Play
date: 2026-07-23T19:12:04Z
updated: 2026-07-31T19:31:37Z
categories: Servers
link: https://edusupport.minecraft.net/hc/en-us/articles/51711271699092-Enabling-Cross-Tenant-Play
hash:
  h_01KY83S5TK6TVEHM8DGG3T7DVY: prerequisites
  h_01KY84333DJBCASJ70GGX8F6XQ: enabling-cross-tenant-for-your-tenant
  h_01KY84N1YDPS43RGGRX44FEPFK: set-up-using-the-admin-portal
  h_01KY8C93C86YWF2E3ZXZE88FX5: revoking-an-invite-in-the-admin-portal
  h_01KY8CNTJ4CZBT656558RMXMEK: as-the-host
  h_01KY8CP218XNJDY8BF1VR7KQ7T: as-the-invitee
  h_01KY84NEA0WNAD84Z9G949RD1J: set-up-using-the-tooling-and-scripting-notebook
  h_01KY8C8487368X5QKW9DWRB92S: revoking-an-invite-in-the-tooling-and-scripting-notebook
  h_01KY8C3RGNA36J10P2DCYNWF5H: ""
---

Server hosts can setup servers to allow connections from different Microsoft 365 Tenants. This setup will require cooperation from Admins or Teachers on both end as the tenant hosting the server will need to send an invite, and the receiving tenant will need to accept it.

Since IT Admins or Teachers need to accept the connection, students still remain secure. Accepting an invitation will not allow different organizations to connect to each other in Peer-2-Peer sessions and will only grant access to the servers that have a connection setup.  

Helpful links:  

[Prerequisites](#prerequisites)

[Enabling Cross Tenant for your Tenant](#enabling-cross-tenant-for-your-tenant)

[Set up using the Admin Portal](#set-up-using-the-admin-portal)

[Revoking an Invite in the Admin Portal](#revoking-an-invite-in-the-admin-portal)

[Set up using the Tooling and Scripting Notebook](#set-up-using-the-tooling-and-scripting-notebook)

[Revoking an Invite in the Tooling and Scripting Notebook](#revoking-an-invite-in-the-tooling-and-scripting-notebook)

 

### Prerequisites: 

1.  Ensure that your account has access to the [Dedicated Server Admin Portal](https://aka.ms/dedicatedservers), or the [Tooling and Scripting Notebook](./Dedicated-Server-Alternate-Configuration.md)
2.  Ensure that Dedicated Server is enabled in your tenant using one of these articles: (depending on your role): 
    - [IT Admin: Create Dedicated Servers](./IT-Admin-Create-Dedicated-Servers.md) (For IT Admins and Commercial Tenants)
    - [Teacher View: Create Dedicated Servers](./Teacher-View-Create-Dedicated-Servers.md) (for Teacher's using Teacher View)
3.  Ensure that a user on each end is available to send and accept the invitation. 
4.  The host will need the Tenant ID of the invitee; you can find it at the top of the Dedicated Server Admin Portal. 
    - You can alternatively find it in the Entra Admin Center by following the steps on this guide: [Find your Microsoft 365 tenant ID](https://learn.microsoft.com/en-us/sharepoint/find-your-office-365-tenant-id)

 

### Enabling Cross Tenant for your Tenant

This first step will *require* a Global Administrator (likely your IT Administrator) to enable Cross Tenant to be configured. This will only need to be done once. To enable Cross Tenant Support: 

1.  Go to the [Dedicated Server Admin Portal](https://aka.ms/dedicatedservers)

2.  Sign in with your Global Administrator Account

3.  Go to Settings in the upper right 

4.  Turn on "**Allow Cross Tenant Servers**"

    <figure class="wysiwyg-image">
    <img src="https://edusupport.minecraft.net/hc/article_attachments/51711287489300" alt="A Screenshot of the Admin Portal with &quot;Allow Cross Tenant Servers&quot; enabled" />
    </figure>

**Note**: if "Allow Teachers to Manage Servers" is on, they will also be able to send and accept cross-tenant invitations! 

 

### Set up using the Admin Portal

To send an invite to another tenant when creating a new server: 

1.  On the host's end, create a server as normal on the [Dedicated Server Admin Portal](https://aka.ms/dedicatedservers)
    - Enter the IP of the server, the port, configure chat settings, and world generation settings per normal. 

    - On the second page (after the server downloads), select "Sharing Enabled" then select **Save**

      <figure class="wysiwyg-image">
      <img src="https://edusupport.minecraft.net/hc/article_attachments/51711271693076" />
      </figure>

    - Then on the server list page, find your server and select "**Cross-Tenant Sharing" **

      <figure class="wysiwyg-image">
      <img src="https://edusupport.minecraft.net/hc/article_attachments/51711287489940" />
      </figure>

    - Input the invitee's Tenant ID and select "**Send Invite"**

      <figure class="wysiwyg-image">
      <img src="https://edusupport.minecraft.net/hc/article_attachments/51711287490836" />
      </figure>

    - Read and accept the Inter-School Protection Agreement, Compliance with Applicable Data Laws, and the Code of Conduct, then click **Continue**

    - If successful you should see this message:\
      ![](https://edusupport.minecraft.net/hc/article_attachments/51711271695892)
2.  Now the Invitee will need to accept the connection
    - Log into the [Dedicated Server Admin Portal](https://aka.ms/dedicatedservers) with an account that has access.

    - When you sign in you should see a popup informing you an invite has been sent. If you do, select "**Show Invite(s)"**

      <figure class="wysiwyg-image">
      <img src="https://edusupport.minecraft.net/hc/article_attachments/51711287492756" />
      </figure>

      - If you don't see that pop up, you can also select the envelope toward the upper-right next to the search bar 

        <figure class="wysiwyg-image">
        <img src="https://edusupport.minecraft.net/hc/article_attachments/51711287492884" />
        </figure>

    - In the window that appears, accept or decline the invitation(s). 
      - Note: you can also mass accept or decline all invitations at one time if you have a lot of them using the buttons at the bottom. 

        <figure class="wysiwyg-image">
        <img src="https://edusupport.minecraft.net/hc/article_attachments/51711271697684" />
        </figure>

        '

      - After confirming your selection. 

      - The invite has now been accepted, and users within the other tenant can join this server! 

    - The Invitee can individually control if the server is enabled or broadcasted for their users. It will appear on their server list as a "Shared" server. Chat settings and Passcode can only be configured by the host. 

      <figure class="wysiwyg-image">
      <img src="https://edusupport.minecraft.net/hc/article_attachments/51716578136340" />
      </figure>

### Revoking an Invite in the Admin Portal

If the time comes to revoke the invite of the other tenant, you can revoke their access at any time by following these steps, depending on if you're the host, or the invitee: 

#### As the host: 

1.  The host tenant should log into the [Dedicated Server Admin Portal](https://aka.ms/dedicatedservers)

2.  In the server list, find your server and select "**Cross Tenant Sharing"**

3.  Select the tenant to revoke in the list or revoke all connections using the buttons at the bottom. 

    <figure class="wysiwyg-image">
    <img src="https://edusupport.minecraft.net/hc/article_attachments/51717130273684" />
    </figure>

#### As the Invitee: 

1.  The host tenant should log into the [Dedicated Server Admin Portal](https://aka.ms/dedicatedservers)
2.  In the server list, find the server and select **"Remove Connection"** then **"Disconnect"**
3.  The server is now disconnected. If you wish to reset it later, you'll need to receive a new invite. \
     

### Set up using the Tooling and Scripting Notebook

Creating and accepting invites can also be done in the Tooling and Scripting Notebook using the steps below: 

1.  The host will need to create an invite by: 
    1.  Sign into the Tooling and Scripting Notebook using the steps here: [Tooling setup and sign in](./Dedicated-Server-Alternate-Configuration.md#:~:text=Modifying%20Existing%20Servers-,Tooling%20setup%20and%20sign%20in,-To%20configure%20these)

    2.  Once Authenticated, obtain your server ID from the "fetch_server_info" cell. 

    3.  Then provide your ID and the invitees Tenant ID into the "create_server_invite" cell and run it to create an invite

        <figure class="wysiwyg-image">
        <img src="https://edusupport.minecraft.net/hc/article_attachments/51717097569300" />
        </figure>

    4.  Provide the Server ID to the Invitee. 
2.  Then on the invitee side: 
    1.  Sign into the Tooling and Scripting Notebook using the steps here: [Tooling setup and sign in](./Dedicated-Server-Alternate-Configuration.md#:~:text=Modifying%20Existing%20Servers-,Tooling%20setup%20and%20sign%20in,-To%20configure%20these)

    2.  Once Authenticated, scroll down to the "accept_server_invite" cell. 

    3.  Then input the Server ID provided and run the cell.

        <figure class="wysiwyg-image">
        <img src="https://edusupport.minecraft.net/hc/article_attachments/51717130276628" />
        </figure>

 

### Revoking an Invite in the Tooling and Scripting Notebook

The Tooling and Scripting guide can also be used to revoke access to the server using the steps below: 

1.  As either the host or invitee, sign into the Tooling and Scripting Notebook using the steps here: [Tooling setup and sign in](./Dedicated-Server-Alternate-Configuration.md#:~:text=Modifying%20Existing%20Servers-,Tooling%20setup%20and%20sign%20in,-To%20configure%20these)
2.  Scroll down to the "remove_server_connection" cell 
3.  Input the server's ID and run the cell. 

The connection is now removed! 

###
