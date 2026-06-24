---
title: Modifying Existing Servers
date: 2026-05-11T22:04:35Z
updated: 2026-06-23T23:51:24Z
categories: Servers
link: https://edusupport.minecraft.net/hc/en-us/articles/49150390556308-Modifying-Existing-Servers
hash:
  h_01KRCH0RWXQF2728D5DE9K903P: editing-settings-in-the-admin-portal
  h_01KRCH3CS1APPBJSYBVRRG9M0G: editing-servers-with-serverproperties
  h_01KRCH4T2NZW8FFFJDWHY0T9R5: removing-a-server
---

After you've created your server, you can come back to the admin portal and make modifications, such as changing the name, changing the passcode, enabling or disabling the server, setting broadcast server, or deleting the server. You can also modify some advanced settings using the server.properties files. \
 

Important Links

- [Editing settings in the Admin Portal](#editing-settings-in-the-admin-portal)
- [Editing servers with servers.properties](#editing-servers-with-serverproperties)
- [Removing a Server](#removing-a-server)

### **Editing settings in the Admin Portal**

Once you create your servers you can edit their properties, such as enabling or disabling servers, their broadcast status, add or edit your passcode, and more. To do so: 

- Navigate to the [Admin Portal](https://aka.ms/dedicatedservers)
- Login using your Global Admin account. 
- If you are not on the Server List page, navigate to this page using the **Servers List **button

![Server List.png](https://edusupport.minecraft.net/hc/article_attachments/49150390546580)

- Each server is represented by a server card that displays editable server properties

![server_card.png](https://edusupport.minecraft.net/hc/article_attachments/49150359598100)

- Use the search box, filter or sort features to find the server that you want to edit

![Search_filter_sort.png](https://edusupport.minecraft.net/hc/article_attachments/49150390551188)

- Use the Server Name input box to change the server name
- Use the Server Passcode input box to add or edit a passcode
  - When a passcode has been set for the server, all players who launch the server will be required to enter the passcode before they can join
- After editing either of these properties, click **Save **to ensure your changes are saved
  - The Save button will only activate when there are changes to save
- Set the Enabled toggle to the On position to allow players to join the server
- Set the Broadcast toggle to the On position to force the server to show up in all player's server list. If this setting is off, players will need to manually add the server to their list with the server ID. 
- The toggle properties are set at the time you change them, you do not need to press **Save **for these properties.

 

### Editing servers with server.properties

Some additional settings can be edited in `server.properties` on the server itself. If edited through this file, the server must be restarted before configuration takes effect. \
There are many options that can be edited in this file; however, the main ones are:

<figure class="wysiwyg-table" style="width: 100%;">
<table class="wysiwyg-table-resized" style="margin-left: 0px; margin-right: auto;">
<colgroup>
<col style="width: 30%" />
<col style="width: 13%" />
<col style="width: 35%" />
<col style="width: 22%" />
</colgroup>
<tbody>
<tr>
<td>Property</td>
<td>Values</td>
<td>Description</td>
<td>Can be configured in Admin Portal?</td>
</tr>
<tr>
<td>server-ip</td>
<td>Any IP Address or URL</td>
<td>The IP Address or URL of the Server. </td>
<td>Yes</td>
</tr>
<tr>
<td>server-port</td>
<td>Any integer between 1 and 65535</td>
<td>On which IPv4 port the server should listen for connections. </td>
<td>Yes</td>
</tr>
<tr>
<td>allow-list</td>
<td>true<br />
false</td>
<td>If true then all players' usernames must be specified in the <code>allowlist.json</code> file. Additional configuration required. Steps can be found in this article: <a href="./Dedicated-Server-Advanced-Setup.md">Dedicated Server Advanced Setup </a></td>
<td>No</td>
</tr>
<tr>
<td>allow-commands</td>
<td>true<br />
false</td>
<td><p>Allows manipulating the world by using slash commands in the chat. </p>
<p>If false, then commands are only accessible in the server console and not to users in the client (even if they are teachers or operators).</p></td>
<td>No</td>
</tr>
<tr>
<td>chat-restriction</td>
<td>None<br />
Dropped<br />
Disabled</td>
<td>The <strong>chat setting controls how much players can use chat on the server</strong>.
<strong>None (default):</strong> Normal chat works freely.
<strong>Dropped:</strong> Chat messages are blocked from being sent, and players are notified. MakeCode still works, but chat can’t be used to interact with it. 
<strong>Disabled:</strong> Chat UI is hidden for non-operators, with no feedback shown. MakeCode still works, but players can’t send or see chat-based output. 
<strong>Operators:</strong> Even when chat is disabled, operators can open chat to run commands, but messages won’t be visible to others.</td>
<td>Partially - <br />
Only Disabled and None are available</td>
</tr>
<tr>
<td>chat-logging-enabled</td>
<td>true<br />
false</td>
<td>Enable Chat Logging. If true, all messaged sent by users will be sent to <code>/chat_logs/ChatLog_&lt;Date&gt;.txt</code> for later review. </td>
<td>Can only be initially enabled or disabled on server creation. <br />
Can only be edited later in server.properties.</td>
</tr>
<tr>
<td>max-players</td>
<td>Any Positive Integer</td>
<td>The maximum number of players allowed to join at one time.</td>
<td>No</td>
</tr>
</tbody>
</table>
</figure>

### **Removing a Server**

If a server has served it's purpose, you can remove it from your admin portal. This will make it no longer joinable and will need to be reregistered in the future. 

- Use the search box, filter or sort features to find the server that you want to Remove

![Search_filter_sort.png](https://edusupport.minecraft.net/hc/article_attachments/49150390551188)

- Press the **Remove Server **button
- Press the **Remove **button on the confirmation screen 

![Remove.png](https://edusupport.minecraft.net/hc/article_attachments/49150359600404)

- Press the **Cancel **button if you've changed your mind

> Note: The files will remain on your device should you need to access world files, or other configuration information.
