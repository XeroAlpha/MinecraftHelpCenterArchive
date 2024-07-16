---
title: Commands in Depth
date: 2020-08-10T09:18:09Z
updated: 2024-05-22T22:47:52Z
categories: Game Features
link: https://edusupport.minecraft.net/hc/en-us/articles/360047117252-Commands-in-Depth
---

This article is designed for more experienced Minecraft player/Minecraft Education user and goes in depth with commands. To get started with the essential commands you need and the basics on coordinates and targeting, please visit this [page](../Teaching-With-Minecraft/Essential-Commands.md) instead.

This article will cover:

- How to use
- More about using Coordinates
- Customizing worlds with commands (Time, Weather)
- World-building helpers (Fill, Clone, and more)
- Items (Giving and Enchanting)
- Interacting With Players (Communication, Movement, and other)
- New Code Builder commands (November 2018)
- [Code Builder in Minecraft Education (version 1.7.1)](../Teaching-With-Minecraft/Code-Builder-in-Minecraft-Education.md)

**How to use**

[**![Image of a video about using slash commands in Minecraft Education](https://edusupport.minecraft.net/hc/article_attachments/20762198804244)**](https://youtu.be/4eVe1FzQfN4)

 

**/?** and **/help**: Type /help for page one. Type /help with a number after it to get to a specific page. There are ten pages of commands in total. T

**More about using Coordinates**

This section in the Official [Minecraft Wiki](https://minecraft.gamepedia.com/Commands#Selecting_targets_by_vertical_rotation) explains commands and coordinates

**Customizing worlds with commands**

**Time**

*Syntax: /time set (number)*

This changes the time of day. 0 is equal to 6:00 a.m. and 23000 is equal to 5:00 a.m. Example: /time set 16000 will change the time to 10:00 p.m.

Time also has two additional commands:

*Syntax: /time add (number)*

This command adds time to the world. Example: /time add 1000 to add an hour of time to the clock.

*Syntax: /time query (daytime or gametime)*

Use /time query daytime to find out the in-game time and gametime to see the total amount of time elapsed.

**Weather**

*Syntax: /weather (string) (duration)*

The duration is set in seconds for the specified weather to last. Leave this blank to set the weather for a random time between 6000 and 18000 seconds.

*Syntax: /toggledownfall*

This command will instantly change the weather. If it’s clear, it will start to rain or snow depending on the biome. If it’s raining or snowing, it will become clear.

**World-building helpers**

Two commands will help you build your world in no time:

/clone

*Syntax: /clone \<x1\> \<y1\> \<z1\> \<x2\> \<y2\> \<z2\> \<x\> \<y\> \<z\> *

**x1 y1 z1** are the coordinates for the start of a region to clone

**x2 y2 z2** are the coordinates for the end of the region to clone

**x y z** signify the region where the clone will appear

/fill

*Syntax: /fill \<x1\> \<y1\> \<z1\> \<x2\> \<y2\> \<z2\> \<blockName\>*

These commands will help you fine-tune your world:

/setblock

*Syntax: /setblock \<x\> \<y\> \<z\> \<blockName\>*

If you need to replace brick with glazed terracotta at a certain coordinate, this is the command you need.

/setworldspawn

*Syntax: /setworldspawn \<x\> \<y\> \<z\>*

Use /setworldspawn by itself to set the spawn point for all players to the point you’re currently at. Use /setworldspawn \<x\> \<y\> \<z\> with **x y z** are coordinates to set a new spawn point for all players.

/spawnpoint

*Syntax: /spawnpoint \<playername\> \<x\> \<y\> \<z\>*

**x y z** are the coordinates you want a certain player to spawn at

/setmaxplayers

*Syntax: /setmaxplayers (number)*

Minecraft Education supports a maximum of 30 users per multiplayer game, including you. If you want to restrict this further just put a number in. If you put a number greater than 30 you will be given a message and the max number will be set at 30.

/testforblock

*Syntax: /testforblock \<x\> \<y\> \<z\> \<blockName\>*

Example: /testforblock 7 8 9 brick_block will test if a brick block is at coordinates 7 8 9

**Items**

Provide your world’s visitors with items, and also make them more powerful:

/give

*Syntax: /give \<playername\> \<itemName\> \<amount\>*

Example: /give EmmaM camera 1 will give player “EmmaM” one camera.

/enchant

*Syntax: /enchant \<playername\> \<enchantmentID\> \<level\>*

If a player is holding an item, this command will enchant the item. You can find a list of enchantment ID numbers [here](https://minecraft.gamepedia.com/Enchanting).

**Commands to directly impact players**

As an educator, you may find these commands useful in Classroom Mode.

/list

*Syntax: /list*

This command will display the players currently connected to the server.

/kill

*Syntax: /kill \<playername\>*

This will kill the player.

/xp

*Syntax: /xp \<number\> \<playername\>*

This will give that amount of XP to a certain player. Use /xp \<number\>L \<playername\> to give that many levels to the named player.

/say

*Syntax: /say \<message\>*

This will send a message to everyone

/tell and /msg

*Syntax: /tell \<playername\> \<message\> or /msg \<playername\> \<message\>*

This will send a message to a certain player

/summon

*Syntax: /summon \<entity name\>*

Use this to spawn an entity on the current position.

Add \<x\> \<y\> \<z\> to provide different coordinates you want to spawn an entity.

/tp

*Syntax: /tp \<playername\> \<location\>*

You can use coordinates or another player’s name in the field for location.

**New Code Builder Commands (November 2018)**

You can use *\`/summon agent\`* to create or teleport your agent to you

New command selectors for the agent, *\`@c\`* to target your agent, *\`@v\`* to target all agents. Only worldbuilders can target all agents. By default all users will have wordbuilder permissions set to false

You can also now remove agents from the world using selectors, so \`/remove @c\` to remove your agent or *\`/remove @v\`* for all agents. *\`/remove @e\`* will also remove all entities and all agents, except other people's agents if the person running the commands isn't a worldbuilder

The usual type filters can also be used to target particular agents, so *\`/tp @e\[type=Agent,name=Steve.Agent\] @s\`* for instance would look through all entities for those of type agent whose name is Steve.Agent and teleport them to you. For more of a shorthand you could do *\`/tp @v\[name=Steve.Agent\] @s\`* to target a particular person's agent that's not your own

For more information checkout: [Code Builder in Minecraft Education](../Teaching-With-Minecraft/Code-Builder-in-Minecraft-Education.md)
