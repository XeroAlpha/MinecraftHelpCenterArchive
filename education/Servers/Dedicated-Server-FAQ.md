---
title: Dedicated Server FAQ
date: 2025-10-01T17:56:33Z
updated: 2026-07-15T20:42:39Z
categories: Servers
link: https://edusupport.minecraft.net/hc/en-us/articles/41758309283348-Dedicated-Server-FAQ
hash:
  h_01K6GEKV3KM0R9EE2ZY6QP4T7V: 1what-is-a-minecraft-education-dedicated-server
  h_01K6GEKV3M99R2NQXV2EV61J0D: 2what-are-the-key-features-of-dedicated-server
  h_01K6GEKV3Q8FW8T270ABRY2A9Q: 3who-can-use-dedicated-servers
  h_01K6GEKV3R37NGTTGYCC995FFG: 4where-can-i-host-dedicated-servers
  h_01KJZEH35ZGHXPQ5PS494TRTH0: 5-are-dedicated-servers-enabled-by-default
  h_01K6GEKV3S410HB9EWA0WPKY8Z: 6how-do-i-set-up-a-dedicated-server
  h_01KHMXB3XAHRCV01CAQRV7MABJ: 7-how-do-i-set-up-cross-tenant-play-for-my-tenant
  h_01K6GEKV3S3NAD40N0YJCFBM1B: 8-how-do-i-manage-settings-and-servers-for-my-tenant
  h_01K6GEKV3WNFBXK4Y9A7Q6EKE5: 9-how-do-user-permissions-work-in-the-world-while-im-playing-on-a-server
  h_01K6GEKV3WP4Z87768CC1NNV4G: 10if-dedicated-servers-are-enabled-can-users-in-my-tenant-connect-with-users-outside-my-tenant
  h_01K6GEKV40DZY15XJ5Y1ZYDMSW: 11-what-does-it-mean-to-broadcast-a-server
  h_01KQG1941Y1YGV0B442D02K2F9: 12-can-chat-be-logged
  h_01K6GEKV422DHB4W46P2YBXC3H: ""
---

## 1. What is a Minecraft Education Dedicated Server?

Minecraft Education now offers the option to self-host Dedicated Servers! This has been one of the most requested features for Minecraft Education. You now have the ability to run Dedicated Servers to host persistent worlds for use in classrooms and after-school programs (similar to the way Bedrock Dedicated Servers can be used with the consumer version of Minecraft). 

Dedicated Servers do not require a client to host the world, can be hosted permanently with persistent worlds, enable playing across Microsoft Tenants (coming soon), and have several other features listed below (see section 2). A Minecraft Education Dedicated Server unlocks expanded multiplayer experiences for classrooms and streamlines participation in Esports and other after-school or club programs.

## 2. What are the key features of Dedicated Server?

- A way to host worlds securely without a client, on any tenant server infrastructure
- Better performance and stability with increased player count
- Persistent worlds accessible at the same location and saved game state across sessions
- A more flexible way to run and manage multiplayer experiences
- Optional broadcasting of any servers to all users in the tenant
- Optional passcode protection for servers
- Optional allow-list protection for servers
- Optional cross-tenant play (coming soon)

## 3. Who can use Dedicated Servers?

Global admins from any tenant can enable the use of Dedicated Servers on their tenant. Additionally, global admins can accept invitations and enable the use of Dedicated Servers hosted by another tenant (currently this management is only available through scripting). A global admin for the tenant must configure the initial settings to enable Dedicated Servers for a tenant, enable cross-tenant play, or enable Teacher View (which allows teachers to create their own servers!)

To connect to Dedicated Servers, users will need to be licensed and have the Minecraft Education client installed on their device.

## 4. Where can I host dedicated servers?

Dedicated servers can be hosted either on existing on-premises hardware, or in the cloud via a Virtual Private Server (VPS) provider such as Microsoft Azure, Amazon Web Services (AWS), or similar. You'll just to be sure your host device meets our [Dedicated Server System Requirements](./Dedicated-Server-System-Requirements.md). 

## 5. Are Dedicated Servers enabled by default?

No. Dedicated Servers must be enabled by a user in your tenant with the Global Admin role. Please refer to [this article](./IT-Admin-Create-Dedicated-Servers.md) to learn how to enable the Dedicated Servers feature.

## 6. How do I set up a Dedicated Server?

The simplest way to create a new server is to create a server using the Admin Portal. The process is a little different for [IT Admins](../Administration/FAQ-IT-Admin-Guide.md) and [Teachers](./Teacher-View-Create-Dedicated-Servers.md).

You can also use scripting to make mass deployment, bulk configuration, or similar setups easier. You can learn more [here](./Dedicated-Server-Alternate-Configuration.md).

## 7. How do I set up Cross-Tenant Play for my tenant?

Cross-tenant play for Dedicated Server isn't quite ready yet. We're hoping to have this feature fully released in the near future. 

## 8. How do I manage settings and servers for my tenant?

You can use the Admin Portal and the sample tooling to manage your servers. Through these tools you can name servers, set passcodes, set up cross-tenant play, and more. 

Learn how to [manage existing servers using the Admin Portal, server.properties file, or scripting.](./Modifying-Existing-Servers.md)

Please refer to the setup guides for [IT Admins](./IT-Admin-Create-Dedicated-Servers.md) or [Teachers](./Teacher-View-Create-Dedicated-Servers.md) for more advanced techniques.

## 9. How do user permissions work in the world while I’m playing on a server?

User permissions work the same as for Peer-to-Peer with one exception. For dedicated servers, the host is not a user and thus cannot have permissions changed. The dedicated server always has maximum permissions. Note that just as in Peer-to-Peer, being a teacher is a role and not a permission. Teachers can lower their own permissions in the pause menu UI.

## 10. If Dedicated Servers are enabled, can users in my tenant connect with users *outside* my tenant?

No. Cross Tenant has not yet been implemented into Dedicated Server. After the feature is released, the default behavior will still be isolating users to only have access to servers in their own tenant. Users in one tenant will only be able to join another tenant's server if admins from both tenants enable the connection

## 11. What does it mean to broadcast a server?

![](https://edusupport.minecraft.net/hc/article_attachments/41758424526996)

By default, to see a server in the “Servers” view within the Minecraft Education client, users must manually add the server by entering its server ID, which is a 12-digit, alphanumeric, case-insensitive code. However, a server can instead be configured to be displayed in the “Servers” menu to all users in the tenant without being added manually. Please refer to the setup articles ([IT Admin: Create Dedicated Servers](./IT-Admin-Create-Dedicated-Servers.md) or [Teacher View: Create Dedicated Servers)](./Teacher-View-Create-Dedicated-Servers.md) to see how to broadcast servers.

## 12. Can chat be logged? 

Yes! Starting with Minecraft Education Dedicated Server 1.21.133, Chat logging can be enabled per-server! If enabled chat logs will be saved to the server under `/chat_logs/ChatLog_<Date>.txt`\
![](https://edusupport.minecraft.net/hc/article_attachments/48785925906068)

##
