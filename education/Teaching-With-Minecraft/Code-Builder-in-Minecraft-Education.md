---
title: Code Builder in Minecraft Education
date: 2020-08-10T08:56:45Z
updated: 2023-11-08T22:39:05Z
categories: Teaching With Minecraft
link: https://educommunity.minecraft.net/hc/en-us/articles/360047116992-Code-Builder-in-Minecraft-Education
---

The Minecraft Education Code Builder allows players to code inside the game!  Players can launch Code Builder using "C" if you are using a mouse/keyboard or by pressing the agent icon next to pause/chat on the top center of the screen while on touch and the following screen will appear. Below is a walk-through video guide on Code Builder.

[![Image of a video about Minecraft Education Code Builder](https://educommunity.minecraft.net/hc/article_attachments/20761249841428)](https://youtu.be/pPkir8wNktY)

 

**Agent Improvements (Code Builder)**

- You can use '/summon agent' to create or teleport your agent to you
- New command selectors for the agent, '@c' to target your agent, '@v' to target all agents. Only worldbuilders can target all agents. By default all users will have wordbuilder permissions set to false
- You can also now remove agents from the world using selectors, so '/remove @c' to remove your agent or '/remove @v' for all agents. '/remove @e' will also remove all entities and all agents, except other people's agents if the person running the commands isn't a worldbuilder
- The usual type filters can also be used to target particular agents, so '/tp @e\[type=Agent,name=Steve.Agent\] @s' for instance would look through all entities for those of type agent whose name is Steve.Agent and teleport them to you. For more of a shorthand you could do '/tp @v\[name=Steve.Agent\] @s' to target a particular person's agent that's not your own
- There's also the agent spawn egg, which provides an easy way to summon or move the agent to you, by using it as you would any other egg

**Additional Notes**

- MakeCode users need to be sure and export and save their project files. When the browser clears it's cache the files will be removed
- Code.org and Scratch will not be present for the in-game Code Builder. 
- "/code" no longer works
- Agent detect up/down does not work correctly with half blocks with Code Builder
- All users start with Worldbuilder permissions set to false
