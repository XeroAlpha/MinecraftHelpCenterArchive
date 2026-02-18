---
title: Dedicated Server 101
date: 2025-10-01T17:56:33Z
updated: 2026-02-17T22:38:12Z
categories: Servers
link: https://edusupport.minecraft.net/hc/en-us/articles/41758309283348-Dedicated-Server-101
hash:
  h_01K6GEKV3KM0R9EE2ZY6QP4T7V: 1what-is-a-minecraft-education-dedicated-server
  h_01K6GEKV3M99R2NQXV2EV61J0D: 2what-are-the-key-features-of-dedicated-server
  h_01K6GEKV3Q8FW8T270ABRY2A9Q: 3who-can-use-dedicated-servers
  h_01K6GEKV3R37NGTTGYCC995FFG: 4are-dedicated-servers-enabled-by-default
  h_01K6GEKV3S410HB9EWA0WPKY8Z: 5how-do-i-set-up-a-dedicated-server
  h_01KHMXB3XAHRCV01CAQRV7MABJ: 6-how-do-i-set-up-cross-tenant-play-for-my-tenant
  h_01K6GEKV3S3NAD40N0YJCFBM1B: 7-how-do-i-manage-settings-and-servers-for-my-tenant
  h_01K6GEKV3WNFBXK4Y9A7Q6EKE5: 7-how-do-user-permissions-work-in-the-world-while-im-playing-on-a-server
  h_01K6GEKV3WP4Z87768CC1NNV4G: 8if-dedicated-servers-are-enabled-can-users-in-my-tenant-connect-with-users-outside-my-tenant
  h_01K6GEKV3YTMSB7V0K18RSRFFW: 9what-are-partner-permissions-for-dedicated-servers
  h_01K6GEKV40DZY15XJ5Y1ZYDMSW: 10-what-does-it-mean-to-broadcast-a-server
  h_01K6GEKV422DHB4W46P2YBXC3H: ""
---

## 1. What is a Minecraft Education Dedicated Server?

One of the most requested features for Minecraft Education has been the ability to run Dedicated Servers to host persistent worlds for use in classrooms and after-school programs (similar to the way Bedrock Dedicated Servers can be used with the consumer version of Minecraft). Minecraft Education now offers the option to self-host Dedicated Servers or join another tenant’s Dedicated Servers through cross-tenant play.

Dedicated Servers do not require a client to host the world, can be hosted permanently with persistent worlds, enable cross-tenant play between multiple tenants, and have several other features listed below (see section 2). A Minecraft Education Dedicated Server unlocks expanded multiplayer experiences for classrooms and streamlines participation in Esports and other after-school or club programs.

## 2. What are the key features of Dedicated Server?

- A way to host worlds securely without a client, on any tenant server infrastructure
- Better performance and stability with increased player count
- Persistent worlds accessible at the same location and saved game state across sessions
- A more flexible way to run and manage multiplayer experiences
- Optional broadcasting of any servers to all users in the tenant
- Optional passcode protection for servers
- Optional allow-list protection for servers
- Optional cross-tenant play

## 3. Who can use Dedicated Servers?

Global admins from any tenant can enable the use of Dedicated Servers on their tenant. Additionally, global admins can accept invitations and enable the use of Dedicated Servers hosted by another tenant (currently this management is only available through scripting). A global admin for the tenant must configure the initial settings to enable Dedicated Servers for a tenant, enable cross-tenant play, or enable partner permissions.

To connect to Dedicated Servers, users will need to be licensed and have the Minecraft Education client installed on their device.

**The ability for Educators to create and manage Dedicated Servers is coming soon!**

## 4. Are Dedicated Servers enabled by default?

No. Dedicated Servers must be enabled by a user in your tenant with the Global Admin role. Please refer to [Tenant Settings](./The-Dedicated-Server-Admin-Portal-is-here.md#tenant-settings) to learn how to enable the Dedicated Servers feature.

## 5. How do I set up a Dedicated Server?

The simplest way to create a new server is to [create a server using the Admin Portal](./Create-Servers-in-the-Admin-Portal.md).

Use the [Dedicated Server Tooling and Scripting Guide](./Dedicated-Server-Installation-Guide.md) to learn advanced creation and management techniques.

## 6. How do I set up Cross-Tenant Play for my tenant?

Currently, the only way to set up cross-tenant play is through scripting.  For a step-by-step installation guide, please refer to the [Dedicated Server Tooling and Scripting Guide](./Dedicated-Server-Installation-Guide.md).

Cross-tenant management in the Admin Portal is coming soon.

## 7. How do I manage settings and servers for my tenant?

You can use the Admin Portal and the sample tooling to manage your servers. Through these tools you can name servers, set passcodes, set up cross-tenant play, and more. 

Learn how to [manage servers using the Admin Portal](./Manage-Servers-in-the-Admin-Portal.md).

Please refer to the [Dedicated Server Installation Guide](https://aka.ms/dsserversetup) for more advanced techniques.

## 7. How do user permissions work in the world while I’m playing on a server?

User permissions work the same as for Peer-to-Peer with one exception. For dedicated servers, the host is not a user and thus cannot have permissions changed. The dedicated server always has maximum permissions. Note that just as in Peer-to-Peer, being a teacher is a role and not a permission. Teachers can lower their own permissions in the pause menu UI.

## 8. If Dedicated Servers are enabled, can users in my tenant connect with users *outside* my tenant?

Not by default. Additional steps must be taken to enable connections outside your tenant. Please refer to the [Dedicated Server Installation Guide](https://aka.ms/dsserversetup) to see how to collaborate with other tenants.

## 9. What are partner permissions for Dedicated Servers?

As of right now, partners are not accessible in the but may get activated at a future point. If a 3<sup>rd</sup> party partner is approved by the Education team at Mojang, we will add them to the list of approved partners to which Global Admins can grant access. If given access, partners can help you set up your servers correctly or even coordinate entire Esports tournaments in Minecraft Education using Dedicated Servers they host for you! Do not grant a partner permissions unless you have already talked to the partner; they will let you know when to turn on partner permissions.

Note that if you grant permissions to a partner, the actions they can take on your behalf are limited. Partners **cannot** directly configure servers that you host yourself, nor can they edit settings not relevant to Dedicated Servers. They **can** enable or disable the Dedicated Servers feature for your tenant, enable or disable cross-tenant play for your tenant, and grant your users access to servers they host.

## 10. What does it mean to broadcast a server?

![](https://edusupport.minecraft.net/hc/article_attachments/41758424526996)

By default, to see a server in the “Servers” view within the Minecraft Education client, users must manually add the server by entering its server ID, which is a 12-digit, alphanumeric, case-insensitive code. However, a server can instead be configured to be displayed in the “Servers” menu to all users in the tenant without being added manually. Please refer to the [Dedicated Server Installation Guide](https://aka.ms/dsserversetup) to see how to broadcast servers.

##
