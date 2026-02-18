---
title: The Dedicated Server Admin Portal is here!
date: 2026-02-17T03:13:24Z
updated: 2026-02-17T22:08:45Z
categories: Servers
link: https://edusupport.minecraft.net/hc/en-us/articles/46370720373908-The-Dedicated-Server-Admin-Portal-is-here
hash:
  h_01KHMQHY5EBANHFT0YWY8JPRFD: with-the-admin-portal-you-can
  h_01KHMQZGXY3JQRFDSQC7SP9B3M: general-requirements
  Tenant_Settings: tenant-settings
  h_01KHMS3EKD56J7GYTEZRTAYBAJ: allow-servers
  h_01KHMS3MA6DGZNNC8ZKZ8DTSWZ: allow-cross-tenant-servers
  h_01KHMS428MXKSV50GVXJ69KTRG: allow-teachers-to-manage-servers
  h_01KHMWRQWSQ5VKVK3FAVXND5ZV: partner-permissions-optional-coming-soon
---

The [Dedicated Server Admin Portal](https://aka.ms/dedicatedservers) introduces a centralized, web-based experience for managing Minecraft Education Dedicated Servers. This update brings improved visibility, control, and consistency for IT admins and educators who manage servers. This is the recommended approach for most users, although we also offer scripting as a more advanced option for deploying a large number of servers. 

Refer to the [Dedicated Server Tooling and Scripting Guide](./Dedicated-Server-Installation-Guide.md) for more information about this advanced option.

## With the Admin Portal, you can

- Register, configure, and download new servers with just a few clicks
- View and manage all available Dedicated Servers associated with your tenant
- Access key server details without coding or complicated technical steps
- Manage tenant-level settings
- Note that we will continue to support the scripting methods of administering servers as they remain useful for large scale server management (see [Dedicated Server Tooling and Scripting Guide](./Dedicated-Server-Installation-Guide.md))

Learn more about [EDU Dedicated Servers](./Dedicated-Server-101.md)

## General Requirements

- To change global server settings for your tenant you will need to have the Global Admin role in your Entra Tenant.
- To create and manage servers for your school, you will need to have the Global Admin role in your Entra Tenant.
- Teacher access to the Admin Portal is coming soon!

## Tenant Settings

Sign in to the [Dedicated Server Admin Portal](https://aka.ms/dedicatedservers) and use the settings button to access and edit your tenant settings for servers as desired.

<figure class="wysiwyg-image">
<img src="https://edusupport.minecraft.net/hc/article_attachments/46397007510548" />
</figure>

### Allow Servers

- This feature toggle controls whether Dedicated Servers can be accessed through your tenant. You will need to turn this toggle on to play on your or another tenant’s servers.
- When it's turned off, servers won’t be available at all — Minecraft Education won’t show any server options to users in the Minecraft Education client.
- Note that servers can always be created and managed on the Admin Portal regardless of this setting.

### Allow Cross-Tenant Servers

Cross-tenant server management will be available in the Admin Portal soon.  If you would like to invite other tenants to join a server in your tenant, refer to the [Dedicated Server Tooling and Scripting Guide.](./Dedicated-Server-Installation-Guide.md)

- When this is turned on, Minecraft Education users in your tenant can join specific servers that are owned by other tenants (each server must be allowed by a Global Admin in your tenant).
- If you have Cross-tenant Play toggle off, accounts in your tenant will only be able to access servers owned and managed by your tenant.

### Allow Teachers to Manage Servers

**Note that Teacher access is not yet available in the Admin Portal but is coming soon.**

- When this is turned on, Teachers will be able to manage servers for your tenant. This includes adding new servers, updating server properties, and removing servers.
- When it's turned off, only a Global Admin in your tenant can manage servers.

### Partner Permissions (optional, coming soon)

Official Minecraft Education Partners can be enabled in this section to grant them special permissions. This will allow partners to modify your tenant’s access to and visibility of servers hosted by the partner. That way, you don’t have to configure or host servers yourself. Note that enabled partners can only grant your users guest access to servers belonging to the partner’s tenant. Partners are never able to administer the accounts or servers belonging to your tenant.
