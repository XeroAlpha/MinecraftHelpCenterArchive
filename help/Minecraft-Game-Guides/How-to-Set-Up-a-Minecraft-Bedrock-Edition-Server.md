---
title: "How to Set Up a Minecraft: Bedrock Edition Server"
date: 2026-10-26T18:51:02Z
updated: 2026-10-28T16:57:08Z
categories: Minecraft Game Guides
tags:
  - section_27983418545293
link: https://help.minecraft.net/hc/en-us/articles/49914677714957-How-to-Set-Up-a-Minecraft-Bedrock-Edition-Server
hash:
  h_01M5WR572HCJ2HNNEHAHTANS3M: minimum-system-requirements
  h_01M5WR572NSWFV0SX7MCEHJZK5: setting-up-a-minecraft-bedrock-edition-server
  h_01M5WR572YMDQXKQ8KBAT11QDB: configure-your-server
  h_01M5WR5730YAV1FF1HYEMXFYRN: common-settings-include
  h_01M5WR573R6GZ4Q2FDWRABZDBM: starting-the-server
  h_01M5WR573RWNWDT1B96450ZKGG: windows
  h_01M5WR573S59T997GC6D5BZR30: ubuntu-linux
  h_01M5WR573VNFKNPQQSFKEZVM4G: save-the-server-identity
  h_01M5WR573XRBW4K7HBW5J35WS6: add-players-to-the-allowlist
  h_01M5WR573ZTKX18SXAM7TDJN46: connect-on-your-local-network
  h_01M5WR5743ZKCP6SDZXH0AWWTE: let-players-connect-over-the-internet
  h_01M5WR5747Z3THQRH52ZGJ1PK8: configure-udp-ports-for-a-restrictive-firewall-or-nat
  h_01M5WR574E5JB4T6X8WSA5JMD5: joining-from-different-bedrock-platforms
  h_01M5WR574G0TGYZ1XKQX9BEX6X: use-an-existing-bedrock-world
  h_01M5WR574HRKZPD28SB62YSSCV: back-up-and-update-your-server
---

**Important Update:** On Thursday, October 29, 2026, we are rolling out a Networking change, migrating from RakNet to NetherNet. Some players running online self-hosted BDS servers may see an "Unsupported Transport" Error 149. 

To resolve this, server hosts should:

- Update to BDS version 26.60 or newer
- Ensure port 19132 is open for both TCP and UDP
- Set `transport=nethernet` in `server.properties`

***Note:** This guide shows you how to set up and configure a Minecraft Server. However, doing this requires changing your home network configuration and is not recommended unless you know what you are doing. If you wish to subscribe to a personal server, with automatic backups, for you plus up to 10 players at a time, check out* [Minecraft Realms](https://www.minecraft.net/en-us/realms)*. If you still wish to set up your own private server, do so at your own risk as we cannot offer support for home networks or privately made servers. *

Before you begin: The official server software is available for 64-bit Windows and Ubuntu Linux. It does not require Java.

## Minimum System Requirements: 

- Windows: Windows 10 version 1703 or later, or Windows Server 2016 or later
- Linux: Ubuntu 22.04 LTS or later
- Processor: Intel Core i3-3210, AMD A8-7600, or equivalent
- Memory: 4 GB RAM
- Storage: 180 MB to 1 GB of available space, plus space for worlds and backups
- Network: A stable broadband connection; wired Ethernet is recommended

Official server builds are not available for macOS or ARM-based devices. Players can still join from supported Bedrock platforms.

As a prerequisite. You should make sure you also have the following:

- Administrator access to the host computer
- Access to your router if players will connect over the internet
- The Xbox Gamertags of everyone you want to allow onto the server
- A backup of any existing world you plan to use

# Setting Up a Minecraft Bedrock Edition Server

1.  Go to the [Minecraft Bedrock Dedicated Server download page](https://www.minecraft.net/en-us/download/server/bedrock).
2.  Choose the regular **Windows** or **Ubuntu** release. Use a Preview server only if you intend to play with Minecraft Preview clients.
3.  Review and accept the applicable Minecraft license terms.
4.  Download the ZIP file for your operating system.
5.  Create a new, empty folder for the server, such as *‘**Bedrock Server’***
6.  Extract the entire ZIP file into that folder. Do not run the server from inside the ZIP file.
    1.  The extracted folder contains the server program, ***‘server.properties’***, configuration files, and a bundled ***‘bedrock_server_how_to.html’*** guide.
    2.  Unlike a Java Edition server, a Bedrock server does not use a ***‘.jar’*** file and does not create an ***‘eula.txt’*** file.

## Configure your server

Open ***'server.properties'***** **in a plain-text editor before starting the server if you want to choose the world name or seed. Each setting uses the format ***'setting=value'***.

### Common settings include:

<figure class="wysiwyg-table" style="width: 100%;">
<table dir="ltr">
<tbody>
<tr>
<td style="border: 3px ridge #2F3941">server-name</td>
<td style="border: 3px ridge #2F3941">The name displayed in the server list</td>
</tr>
<tr>
<td style="border: 3px ridge #2F3941">gamemode</td>
<td style="border: 3px ridge #2F3941">Survival, Creative, or Adventure</td>
</tr>
<tr>
<td style="border: 3px ridge #2F3941">difficulty</td>
<td style="border: 3px ridge #2F3941">Peaceful, Easy, Normal, or Hard</td>
</tr>
<tr>
<td style="border: 3px ridge #2F3941">max-players</td>
<td style="border: 3px ridge #2F3941">Maximum number of simultaneous players</td>
</tr>
<tr>
<td style="border: 3px ridge #2F3941">level-name</td>
<td style="border: 3px ridge #2F3941">The name of the world and its folder inside <em><strong>'worlds'</strong></em></td>
</tr>
<tr>
<td style="border: 3px ridge #2F3941">level-seed</td>
<td style="border: 3px ridge #2F3941">The seed used when creating a new world</td>
</tr>
<tr>
<td style="border: 3px ridge #2F3941">allow-cheats</td>
<td style="border: 3px ridge #2F3941">Enables commands that require cheats</td>
</tr>
<tr>
<td style="border: 3px ridge #2F3941">online-mode</td>
<td style="border: 3px ridge #2F3941">Requires players to authenticate with their Microsoft account</td>
</tr>
<tr>
<td style="border: 3px ridge #2F3941">allow-list</td>
<td style="border: 3px ridge #2F3941">Restricts access to approved Xbox Gamertags</td>
</tr>
<tr>
<td style="border: 3px ridge #2F3941">view-distance</td>
<td style="border: 3px ridge #2F3941">Maximum world-rendering distance allowed by the server</td>
</tr>
<tr>
<td style="border: 3px ridge #2F3941">tick-distance</td>
<td style="border: 3px ridge #2F3941">Distance around players in which the world remains active</td>
</tr>
<tr>
<td style="border: 3px ridge #2F3941">server-ip</td>
<td style="border: 3px ridge #2F3941">The local address used by the TCP signaling listener; leave empty to listen on all interfaces</td>
</tr>
<tr>
<td style="border: 3px ridge #2F3941">server-port</td>
<td style="border: 3px ridge #2F3941">The TCP port used for the HTTP signaling handshake; normally <strong>19132</strong></td>
</tr>
<tr>
<td style="border: 3px ridge #2F3941">server-udp-ports</td>
<td style="border: 3px ridge #2F3941">Optional UDP allocation range or external-to-internal port mapping for gameplay traffic</td>
</tr>
<tr>
<td style="border: 3px ridge #2F3941">Transport</td>
<td style="border: 3px ridge #2F3941">Must be set to <em><strong>'nethernet'</strong></em></td>
</tr>
</tbody>
</table>
</figure>

**Note: **Keep ***'online-mode=true'*** for any server that can be reached from the internet. Enabling cheats can prevent achievements from being earned in that world.

Some settings, including ***'level-seed'***, are used only when a world is first created. Stop the server before editing the file, then restart it to apply your changes.

For more details on all the settings for the ***'server.properties'*** file, visit the [Server Properties page on the Minecraft Wiki](https://minecraft.wiki/w/Server.properties). Make sure to scroll down to the ***“Bedrock Edition”*** section. 

## Starting the Server

### Windows

Double-click ***'bedrock_server.exe'***.

If Windows Firewall displays a prompt, allow the server on the private network you intend to use. Do not broadly allow access on public networks. If necessary, create firewall rules limited to the ports used by the server.

A console window will remain open while the server is running.

### Ubuntu Linux

**Open a terminal in the extracted server folder and run:**

*'''bash*

*chmod +x bedrock_server*

*LD_LIBRARY_PATH=. ./bedrock_server*

*'''*

When the console reports that the server has started, leave the terminal open.

**To shut down safely on either operating system, enter this command in the server console:**

*'''text*

*stop*

*'''*

Do not close the console or power off the computer while the world is saving.

### Save the Server Identity

Current Bedrock servers can use a persistent identity so players do not have to approve a different server identity after every restart.

**After the first successful start, enter:**

*'''text*

*serveridentity save*

*'''*

This creates a private identity key in the server's ***'keys'*** folder. Back up this folder, but do not share its contents.

### Add Players to the Allowlist

Current server downloads enable the allowlist by default. When **allow-list=true**, every player - including operators - must be added before joining.

**In the server console, enter:**

*'''text*

*allowlist add Gamertag*

*'''*

**If the Gamertag contains spaces, use quotation marks:**

*'''text*

*allowlist add "Example Player"*

*'''*

**To remove someone, enter:**

*'''text*

*allowlist remove Gamertag*

*'''*

**To grant a trusted player operator permissions, enter:**

*'''text*

*op Gamertag*

*'''*

**Note: **Only grant operator permissions to people you trust. Operators may be able to change the world or other server settings.

### Connect on your local network

Players using the same home network may see the server automatically under the **Friends** or **Servers** tab when ***'enable-lan-visibility=true'***.

If it does not appear:

1.  Find the host computer's local IPv4 address. It normally looks like *‘192.168.1.25’* or *'10.0.0.25’*.
2.  In Minecraft: Bedrock Edition, select **Play**.
3.  Open the **Servers** tab and select **Add Server**, if that option is available on the device.
4.  Enter the local IP address and the port from ***‘server-port’***, normally **19132**.

Test the server locally before configuring access from the internet.

### Let Players Connect Over the Internet

**Warning:** Opening ports makes a service on your computer reachable from the internet. Keep the server and operating system updated, enable the allowlist, open only the required ports, and share your public address only with people you trust.

Assign the host computer a reserved or static local IP address before creating router rules. Otherwise, the forwarding rules may stop working when the computer receives a different address.

**Confirm that these settings appear in** ***'server.properties'*****:**

*'''text*

*transport=nethernet*

*server-port=19132*

*'''*

Leave ***'server-ip'*** empty unless you need the server to listen on a specific local interface. 

For a typical home network:

1.  Forward **TCP 19132** from the router to TCP port **19132** on the host computer.
2.  Allow inbound TCP port **19132** through the host computer's firewall.
3.  Make sure the router and firewall allow outbound UDP traffic and its return traffic.

Do not configure or forward a fixed UDP range unless the network requires one. When *'**server-udp-ports'*** is not set, the server selects UDP ports from the operating system's ephemeral range. This is the default and is suitable for most LAN and outbound-friendly home networks.

### Configure UDP Ports for a Restrictive Firewall or NAT

Use ***'server-udp-ports'*** only when the server must use known local UDP ports or explicitly advertise a router's port mapping.

**To restrict the server to a local UDP range:**

*'''text*

*server-udp-ports=49152-49200*

*'''*

Open that UDP range in the host firewall. This setting controls the server's local UDP allocation but does not describe a router translation.

**If the router forwards an external UDP range to a different internal range, use this format:**

*'''text*

*server-udp-ports=external-start-external-end:internal-start-internal-end*

*'''*

For example, if external UDP ports **19132-19232** are forwarded to internal UDP ports **32000-32100**, use:

*'''text*

*server-udp-ports=19132-19232:32000-32100*

*'''*

The external and internal ranges must contain the same number of ports. You can optionally put the public IP address before the external range:

*'''text*

*server-udp-ports=203.0.113.10:19132-19232:32000-32100*

*'''*

Configure the router and host firewall to match the values in ***'server-udp-ports'***.

**Note: **Do not use the example public IP address on a real server.

Router interfaces vary. Refer to your router manufacturer or internet service provider for instructions. Port forwarding may not work if your connection uses carrier-grade NAT, double NAT, or a network that you do not control. In those cases, contact your internet service provider or consider Realms or a dedicated hosting provider.

After configuration, remote players add the server using your public address and port **19132**. Test from a different internet connection; some routers cannot connect back to their own public address from inside the home network.

For a public-facing server, it is recommended to place a reverse proxy in front of TCP ***'server-port'*** to protect the HTTP signaling endpoint with connection and rate limits. The negotiated UDP gameplay traffic does not pass through that proxy.

### Joining from Different Bedrock Platforms

Bedrock Dedicated Server supports Bedrock clients on Windows, mobile devices, Xbox, PlayStation, Nintendo Switch, and Nintendo Switch 2. Players must:

- Use Minecraft: Bedrock Edition—not Java Edition
- Sign in with a Microsoft account for remote play
- Have account settings that permit multiplayer and cross-network play
- Use a game version compatible with the server
- Use the regular game with a regular server, or Minecraft Preview with a Preview server

The method for adding a custom server can differ by platform, and some console versions may not display an **Add Server** button. Use the connection options officially available on that platform. Custom DNS services and other third-party console workarounds are not supported by Minecraft Support.

### Use an Existing Bedrock World

1.  Stop the server.
2.  Back up both the server and the world.
3.  Copy the Bedrock world folder into the server’s ‘***worlds’*** folder.
4.  Set ***‘level-name’*** in ***‘server.properties’*** to the world folder’s exact name.
5.  Restart the server.

Java Edition worlds cannot be used directly because Java and Bedrock use different world formats. Bedrock add-ons use behavior packs and resource packs; Java mods, plugins, and data packs are not compatible with Bedrock Dedicated Server.

### Back Up and Update Your Server

The dedicated server does not update automatically.

Before installing an update:

1.  Enter ***‘stop’*** and wait for the server to close.
2.  Back up the complete server folder. At minimum, preserve ***‘worlds’***, ***‘server.properties'***, ***‘allowlist.json’***, ***‘permissions.json’***, ***‘keys’***, and any behavior or resource packs.
3.  Download the latest server release.
4.  Extract it into a new, empty folder.
5.  Copy your world and configuration data into the new installation.
6.  Start the updated server and confirm that players can connect.

Do not attempt to downgrade a world after opening it in a newer server version. Preview worlds should always be treated as experimental and backed up separately.
