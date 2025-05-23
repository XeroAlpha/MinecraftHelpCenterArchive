---
title: Minecraft - 1.16.200 (Bedrock)
date: 2020-12-02T01:40:06Z
updated: 2020-12-08T16:36:45Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360052712132-Minecraft-1-16-200-Bedrock
---

**Posted:** December 8, 2020

A new update is upon us in the form of Minecraft 1.16.200! This update is loaded with graphics enhancements on Windows 10, updated volume settings, parity changes, and a swath of bug fixes. Please report any bugs you find on [bugs.mojang.com](https://bugs.mojang.com/) and post feedback to [feedback.minecraft.net](https://feedback.minecraft.net/).  
  

**RenderDragon:**

- RenderDragon, the new graphics engine for Minecraft Bedrock platforms, is now available on Windows 10
- RenderDragon was developed by the Mojang Studios graphics team to give our game greater performance, stability, and flexibility. The new architecture of RenderDragon enables our developers to bring new graphics features such as physically based rendering (PBR) and ray tracing more easily to the game
- RenderDragon has been available for Xbox and PlayStation hardware since 2019, and we are now bringing it to Windows 10. We plan to bring RenderDragon to all Minecraft Bedrock platforms, including mobile devices, in the future  
    

**Minecraft with Ray Tracing:**

- Enabled Ray Tracing on Windows 10 with compatible graphics hardware

![raytracing.png](https://feedback.minecraft.net/hc/article_attachments/360078247192/raytracing.png)

- Players can dramatically change the look and feel of the game. Immerse yourself in volumetric fog. See Minecraft in a whole new light with a cutting-edge dynamic lighting system, Ray Tracing
- Players can also experience advanced kinds of block textures including metallic surfaces, bump maps, normal maps, and light emission (Glowy, reflective dirt blocks? Yes, please!)
- Be sure to check out the [**Frequently Asked Questions**](https://aka.ms/ray-tracing-FAQ) article for an in-depth look at Ray Tracing features
- Content in the Marketplace is now aware of Ray Tracing capabilities and will display a label indicating support within the user interface
- **Creators:** We have some new documentation available for creating content for Minecraft with Ray Tracing!
  - [**Texture Set Documentation**](https://help.minecraft.net/hc/en-us/articles/360051308931) - More information on Physically Based Rendering
  - [**Fog in Resource Packs**](https://help.minecraft.net/hc/en-us/articles/360051618391) - Defining fog values within Resource Packs  
      

**Minecraft with OpenXR:**

- Minecraft on Windows 10 now uses OpenXR to support Windows MR and Oculus VR

![openxr.jpg](https://feedback.minecraft.net/hc/article_attachments/360078247172/openxr.jpg)

- OpenXR is an open-source, royalty-free API standard that provides engines native access to a wide range of devices from vendors that span across VR/MR devices
- OpenXR implementation in Minecraft brings a more unified experience across current VR/MR devices as well as support for those yet to come
- You will still be able to launch through the Mixed Reality Portal, as well as the Oculus Store. However, there is also a URL to launch in VR:
  - **minecraft://mode/?OpenXR=true**
  - This can be made into a desktop shortcut, pinned to the start menu, bookmarked in a browser, or anything else you can do with a URL  
      

**New Features:**

**New Volume Settings**

- Added a variety of volume sliders for sound categories (eg. hostile, blocks, weather etc.)
  - These play a preview of the relevant sounds in the main settings menu, and play the default click sound when in-game

![volume.jpg](https://feedback.minecraft.net/hc/article_attachments/360078247212/volume.jpg)  
  

**Vanilla Parity Changes and Fixes:**

- Basalt can no longer be destroyed by Ghast fireballs ([MCPE-75252](https://bugs.mojang.com/browse/MCPE-75252))
- Basalt blocks now take slightly more time to destroy
- Dragon Egg now always drops as an item when it's destroyed by an explosion ([MCPE-52632](https://bugs.mojang.com/browse/MCPE-52632))
- Right-clicking a snow block with a shovel no longer breaks the snow block
- Dirt Paths (formerly Grass Path) can now be made by using a shovel on Dirt, Podzol, Mycelium, Coarse Dirt, and grass
- Updated the Netherite leggings texture ([MCPE-103016](https://bugs.mojang.com/browse/MCPE-103016))
- Twisting Vines can no longer be placed on Composter blocks while sneaking ([MCPE-78973](https://bugs.mojang.com/browse/MCPE-78973))
- Netherite Armor now gives a ninety percent reduction in Knockback ([MCPE-77430](https://bugs.mojang.com/browse/MCPE-77430))
- Bees will no longer stray more than 22 blocks from their home Beehive ([MCPE-60252](https://bugs.mojang.com/browse/MCPE-60252))  
    

**Known Issues:**

- Players running Minecraft on Windows 10 N 32-bit systems may encounter a crash when loading the game if the Media Foundation Pack is not installed. This can be resolved by downloading and installing the [Media Foundation Pack](https://www.microsoft.com/en-us/software-download/mediafeaturepack)
- Players are unable to rejoin a world after being disconnected from a suspended session
- In VR, Living room hint text doesn’t change correspondingly when input method changes from gamepad to motion controller  
    

**Fixes:**

**Performance and Stability**

- Improved chunk loading speed when flying with Elytra ([MCPE-85614](https://bugs.mojang.com/browse/MCPE-85614))
- Large numbers of scheduled instant updates no longer crash the game ([MCPE-94942](https://bugs.mojang.com/browse/MCPE-94942))
- Fixed a crash that could occasionally occur when going through a portal or flying around in Creative mode
- Fixed a crash that could occasionally occur while flying or moving around the game world
- Fixed a crash that could occur when loading a local world
- Fixed an issue where some mobile devices would lose audio after suspend and resume ([MCPE-101027](https://bugs.mojang.com/browse/MCPE-101027))
- Fixed an issue that caused a crash on Nintendo Switch when trying to load a 256x resolution resource pack
  - The system now blocks that selection and notifies the player they cannot select it

**General**

- Players that own The Founder's Cape will once again see it within the Capes tab of the Dressing Room

**Gameplay**

- Only preview items will be shown in crafting screen when auto crafting an item on controller. This prevents rapid updates of the Recipe Book
- Fixed the player's hand still bobbing if View Bobbing was disabled ([MCPE-79380](https://bugs.mojang.com/browse/MCPE-79380))

**Mobs**

- Fixed mobs and other entities freezing and becoming desynced with their bodies o_O ([MCPE-71243](https://bugs.mojang.com/browse/MCPE-71243))
- Villagers will no longer steal workstations from each other ([MCPE-43071](https://bugs.mojang.com/browse/MCPE-43071))
- Mobs no longer randomly stop attacking and following their targets ([MCPE-48144](https://bugs.mojang.com/browse/MCPE-48144))
- Piglins that are close together can no longer pick up the same item if it's dropped between them ([MCPE-95644](https://bugs.mojang.com/browse/MCPE-95644))
- Update Zombified Piglin texture to remove flickering of loincloth ([MCPE-96793](https://bugs.mojang.com/browse/MCPE-96793))
- Mobs no longer spawn in Wither Roses ([MCPE-97331](https://bugs.mojang.com/browse/MCPE-97331))
- Bees now only exit at the front of Beehives and Bee Nests
- Mobs are no longer teleported back and forth outside solid objects if there is not enough space for multiple entities ([MCPE-101202](https://bugs.mojang.com/browse/MCPE-101202))

**Items**

- Compass is no longer consumed when used on a Lodestone in Creative mode ([MCPE-96258](https://bugs.mojang.com/browse/MCPE-96258))
- Glowsticks no longer use placeholder textures (Education Feature) ([MCPE-45686](https://bugs.mojang.com/browse/MCPE-45686), [MCPE-68417](https://bugs.mojang.com/browse/MCPE-68417))

**Blocks**

- Cocoa Pods generated in Jungles now generate in the proper direction ([MCPE-102399](https://bugs.mojang.com/browse/MCPE-102399))
- Signs no longer replace decorations when attempting to place in the same space as the decoration
- Fixed a bug where End Portal blocks were not removed after an End Portal Frame block was destroyed. Filled blocks other than End Portal blocks will remain in place

**Graphical**

- Owned packs are now refreshed correctly after restarting the game when playing in VR

**Accessibility**

- Fixed the screen reader not reading the screen title in-game
- Fixed the screen reader not reading the shortcut button on the Pause Screen
- Fixed the screen reader not reading the screen title and shortcut buttons on the Invite to Game Screen
- Fixed the screen reader not reading the title on the Profile and Edit Character screens
- Fixed the numbering of buttons on the Pause Screen being wrong when using text-to-speech
- The Emote Wheel now supports the screen reader
- Fixed an issue where the screen reader was not reading updates often enough on some devices
- Fixed the screen reader so messages with controller icons in the Chat Screen are read correctly
- The screen reader now reads the Open Chat Message while Text To Speech For Chat is turned off
- Fixed several issues regarding text contrast in the user interface
- Fixed an issue where the Servers tab would not correctly read text-to-speech prompts when not signed into a Microsoft account
- Fixed various issues where text-to-speech indices on the start screen were not correct
- Fixed issues where user interface controls would be improperly indexed in text-to-speech for popup modals
- Reduced transparency on top row of buttons in Touch UI to improve readability

**User Interface**

- Added UI start up screen to inform players if they are running on outdated graphics drivers
- Fixed several death messages ([MCPE-30360](https://bugs.mojang.com/browse/MCPE-30360))
  - "slain by Llama spit" --\> "spitballed by Llama"
  - "slain by shulkerBullet" --\> "sniped by shulker"
  - "slain by Blaze" --\> "fireballed by Blaze"
  - "slain by Ghast" --\> "fireballed by Ghast"
  - "shot by arrow" --\> "shot by skeleton"
  - "slain by Trident" --\> "was impaled to death by Trident"
- Fixed paperdoll such that it can now always be rotated with the mouse when in the Dressing Room ([MCPE-101210](https://bugs.mojang.com/browse/MCPE-101210))
- "Classic Controls - Intense" font color now matches the surrounding text in VR Controls menu
- Preview items in the crafting grid now have a different colored background depending on item availability in the inventory
- The Player Permissions menu can once again be navigated using a controller regardless of the player’s permission level
- \[X\] button in Chat Settings is no longer present when using a controller
- Profile screen has been improved, now characters are visible and can be selected or modified as soon as they load
- Avoid purchasing a Realm if the player cancels out of "Purchase History Needed" dialog screen
- 'Strawberry Blonde' color now has correct name in the Character Creator ([MCPE-102674](https://bugs.mojang.com/browse/MCPE-102674))
- Loading screen tips no longer display the "tips.game.62" (No ID)
- Fixed the visual focus indicator disappearing in VR when hovering on tabs in VR with screen reader enabled
- Scoreboard now displays properly on the pause screen when displaying in list mode ([MCPE-106012](https://bugs.mojang.com/browse/MCPE-106012))

**Commands**

- '/playsound'commands now play the sound correctly for all players in range
- '/effect' command duration is now capped at 1,000,000 seconds ([MCPE-92916](https://bugs.mojang.com/browse/MCPE-92916))
- Add ticking area commands performed in the same tick now disallow adding areas with the same name twice
- Placeholder text message for the '/titleraw' command success no longer returns to player ([MCPE-63618](https://bugs.mojang.com/browse/MCPE-63618))
- FadeOut argument is no longer ignored in the '/title' times command  
    

**For Map Makers and Add-On Creators:**

**Updated Template Packs  **

- Updated templates for 1.16.200 with new resources, behaviors, and documentation are available for download
  - Resource Pack Template: [aka.ms/resourcepacktemplate](https://aka.ms/resourcepacktemplate)
  - Behavior Pack Template (Includes documentation): [aka.ms/behaviorpacktemplate](https://aka.ms/behaviorpacktemplate)

**Fixes**

- Turning bandwidth optimizations off to see if it fixes stationary mob problem and entity "lag" issues ([MCPE-105892](https://bugs.mojang.com/browse/MCPE-105892))
- Custom projectiles once again animate properly
- Fixed an issue where loot tables with a 'set_data' function produced incorrect loot items
- Fixed face occlusion with data-driven blocks to properly account for unit cube transparent vs unit cube opaque
- Data-driven blocks no longer have their top faces rotated 180 degrees when carried or in inventory ([MCPE-63134](https://bugs.mojang.com/browse/MCPE-63134))
- Fixed an issue with a runaway block ticking queue that occurred on a looping data-driven block that changed itself to a different permutation. The bug could cause memory issues, increased load and save times, as well as stalling the game periodically (No ID)
- Fixed data-driven blocks to shrink UVs the same way as actors to prevent UV bleeding (No ID)
- Fixed some culling issues with data-driven blocks larger than 1x1x1 when placed on a chunk boundary. Also added content warnings for larger blocks
- Changed 'set_block' and 'set_block_at_pos' to use 'BlockDescriptor' when specifying 'block_type'
- Old command versions now use the previous position instead of current one
- Fixed issue where 'query.cardinal_block_face_placed_on' no longer worked with 'on_player_placing'
- Changed texture atlas padding size from 0 to 1 when disabling mipmap
- Fixed issue of blocks listed in the "minecraft:block_placer" component not working correctly
- Fixed player smaller hitbox while swimming and gliding from being reset after an event is sent on the player
- Fixed custom spawn egg generation in template worlds
- MoLang geometry, material, and texture variable names can once again contain dots
- Items with the item lock component no longer cause the recipe book to show invalid recipe results

**Blocks**

- Added 'query.cardinal_facing_2d' to get a ground plane direction that doesn't return up or down
- Added the ability to put block models into the models/blocks folder
- Added the ability for item triggers to send events to the block they are interacting with (when there is one such as 'on_use_on')
- Added the ability to query the interacted face for both interactions with blocks and using 'minecraft:on_use_on' in an item. Face can be queried with 'query.block_face'

**Components**

- Fixed using 'query.get_equipped_item_name' with an item that was renamed not returning the right result. We now tie this to vanilla versioning so that the old name is returned if the world is tied to a specific vanilla version
- "add_mob_effect" and "remove_mob_effect" no longer throw content errors when valid effect names are passed in
- Added documentation for "remove_mob_effect" to make creators aware they can use the value "all" in effect to remove all mob effects from a target
- Fixed items not being placeable in additional horse equipment slots. Does not fix all equippable behaviors
- Inventory size on the minecraft:inventory component has to be increased to match the equippable slots in order for the server to accept the item placement
- The tooltip for item with item lock component will no longer show when game rule 'showtags' is disabled
