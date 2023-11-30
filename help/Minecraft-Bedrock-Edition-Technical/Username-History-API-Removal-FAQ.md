---
title: Username History API Removal FAQ 
date: 2022-09-06T19:56:32Z
updated: 2023-10-13T19:36:18Z
categories: "Minecraft: Bedrock Edition Technical"
tags:
  - title_minecraft_java_edition
  - title_minecraft
  - category_technical_support
  - platform_windows_10
  - platform_linux
  - platform_macos
  - platform_other
  - platform_pc
  - platform_PC
  - platform_macOS
  - platform_xbox_series_x/s
  - section_12617893243277
link: https://help.minecraft.net/hc/en-us/articles/8969841895693-Username-History-API-Removal-FAQ-
---

As of September 13th, we have removed public access to Minecraft’s Username History API endpoint to improve the player experience. Please read through this FAQ for more details on what this means for your Minecraft experience.

# In This Article:

- [What is this API endpoint, and why is access being removed?](#h_01GCA5XKCKPK57HZXJ8KNHB2ZZ)
- [What impact will this API removal have on players? ](#h_01GCA5XRM74K771M9BC0R54N13)
- [When will the access to the API be removed? ](#h_01GCA5XY5R1495E1T1KX3ATCBZ)
- [Will Mojang replace this API endpoint with something else?](#h_01GCA5Y50RH691S208WQ1W5D36)

## What is this API endpoint, and why is access being removed?

The Username History API allowed websites and servers to look up the history of Minecraft: Java Edition profile names associated with legacy Minecraft accounts and Mojang accounts. Only Minecraft: Java Edition profile names, and no other data types, were available through the API before it closed. The API was used by some third-party Minecraft servers to protect their communities from banned players who would change their usernames to get around the ban.

However, there are plenty of benign reasons users often choose to change their usernames, too. In response to user demand and to meet player expectations, as of September 13, we have discontinued public access to this information via the API. To learn more about how we handle your data, please read the [Microsoft Privacy Statement](https://go.microsoft.com/fwlink/?LinkId=521839). 

## What impact will this API removal have on players?  

This API removal means that third-party services that have been using the API will no longer have access to the API and Minecraft: Java Edition profile name histories. We understand that this may be disappointing to some who valued the API, but we feel this is the right decision for our players. If your service uses the Names API, please prepare for how this removal will affect it.

## When will the access to the API be removed? 

Access is removed as of September 13th.

## Will Mojang replace this API endpoint with something else?

There are currently no plans to provide an official solution for looking up another player’s Java profile name history.
