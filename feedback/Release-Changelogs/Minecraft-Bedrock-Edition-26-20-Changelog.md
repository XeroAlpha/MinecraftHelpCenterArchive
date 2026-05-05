---
title: "Minecraft: Bedrock Edition 26.20 Changelog"
date: 2026-04-27T14:19:24Z
updated: 2026-05-05T17:41:55Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/45400537384333-Minecraft-Bedrock-Edition-26-20-Changelog
hash:
  h_01KQW464KY80GC13XHWK6ZKWZC: chaos-cubed---experimental-features
  h_01KQW464M0KNYNGA0AXCVWH1FD: sulfur-cubes
  h_01KQW464M76E2H0FPVRJPS8Y7V: sulfur-springs
  h_01KQW464M84QGKX13V42J1SXMH: potent-sulfur
  h_01KQW464M9RR0AC6D0TNDBA6MR: sulfur-caves
  h_01KQW464M9AP42PJ7YA77S385J: new-block-sets
  h_01KQW464MARQXQP52B02HWBVCA: features-and-bug-fixes
  h_01KQW464MACK5S2XX857C2R6ZS: accessibility-features
  h_01KQW464MC6ZQA90MC2SNSKYPP: accounts
  h_01KQW464MDE9GBKEYN79W9ECQ9: achievements
  h_01KQW464MEME4WVNQ1KSX94M8A: blocks
  h_01KQW464MN7HVXN4D4NQ42SFAB: gameplay
  h_01KQW464MPP21FJWDT49MSG68W: general
  h_01KQW464MQ0NDGBVAXDA46YBY3: graphical
  h_01KQW464MX5ZFYXPHH53T2423Q: input
  h_01KQW464MY86MP3BNZD1CFQ8R1: items
  h_01KQW464MYEJ7EM7Q818ZSV1SN: marketplace
  h_01KQW464MY4WFWTQTVNHYRHW9Y: mobs
  h_01KQW464N87N780XPTHGA4FBWH: party-system-beta
  h_01KQW464N9KMGPHXPA2ZVFFSF6: realms
  h_01KQW464NB1C1NCZWC9KT8X2MD: sounds
  h_01KQW464NCC59HPE7N11KSAP4Y: user-interface
  h_01KQW464NETPN0GB2EZPMGGYH4: technical-updates
  h_01KQW464NEV5BRY7KTN4W537WC: ai-goals
  h_01KQW464NRT1KGWG0K2JEMGPA0: api
  h_01KQW464NZ729T27QZEWQWGNZE: ddui
  h_01KQW464P162VP2NZGV714XEAA: audio
  h_01KQW464P15T2P3QNEXGX3S6DG: biomes
  h_01KQW464P2YY9N3FD08PCGWACG: blocks-1
  h_01KQW464PB0M01DW6RSJKANFAB: block-components
  h_01KQW464PBNJT81C2E71JECZKW: commands
  h_01KQW464PCZJVYSTADE9H8G60W: components
  h_01KQW464PDX65X08GNJXXPH7NA: editor
  h_01KQW464PK0G46T68F07NNTY22: entity-components
  h_01KQW464PTPYDZR2BAW9ZQSD77: entity-filters
  h_01KQW464PTHER7JPSVP7MT65E7: features
  h_01KQW464PV95D3B6A3YZB4DF15: general-1
  h_01KQW464PV6AHFDHR92VD42M88: graphical-1
  h_01KQW464PWWMWWR5ME38KBRWZ4: items-1
  h_01KQW464PYE03B7Q9AXRPJ248P: mobs-1
  h_01KQW464PZENJ7XMJRH4ZTNNDN: network-protocol
  h_01KQW464PZQPMDFWZWYQZCA050: scripting
  h_01KQW464Q05SXVYSZ8C96RWVSY: stability-and-performance
  h_01KQW464Q18TWYYCG25DK1CXE5: user-interface-1
  h_01KQW464Q1R2QZ67A7PAB92DDV: world-generation
  h_01KQW464Q2FAV32PZCKN4VXQT0: experimental-technical-updates
  h_01KQW464Q2YQEQQJJ1Z0WCXHVB: add-ons
  h_01KQW464Q3YXWD4GTN1VHJRCP7: api-1
  h_01KQW464QMGCSZFJZYKV1VRSXQ: data-driven-ui
  h_01KQW464QQQGHQQQZ9SFBV6GQH: blocks-2
  h_01KQW464QQ99BA20MZSBTQ4QRE: voxel-shapes
  h_01KQW464QS0M2AS2QVQZ2SA5RX: entities
  h_01KQW464QT700A3X33ZJ9C8J1G: entity-components-1
  h_01KQW464QV1NN2FMZ26ZN9WWFC: graphical-2
  h_01KQW464QWZDTBM7NTFN37254R: scripting-1
---

**Posted:** 5 May 2026

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/45437228746765" alt="A Minecraft Village with some animals and villagers. There is a Jungle Temple in the background, across the water." />
</figure>

We've got an exciting release for you today – because alongside chaos and cubes in testing, we have Closed Captions coming in this release! Closed Captions have been a hotly requested feature – and now you can try it out for yourself alongside customisable positioning of the captions, duration, and sounds. Alongside this we've made some sound fixes and tweaks to the baby mobs after our Tiny Takeover drop, some texture and geometry fixes, and more. And don't forget there's plenty to test from our upcoming Chaos Cubed drop – including its hero mob, the sulfur cube, the home of said curious cube, the sulfur caves, plus sulfur springs and potent sulfur! With so much to talk about, we'd better dive in!

## Chaos Cubed - Experimental Features

- **Please note:** These features are still in development and may change. The physics for the Sulfur Cube is still a work in progress, and the directional knockback behavior is not fully implemented yet. Please keep sending us your feedback and bug reports!

### Sulfur Cubes

- Sulfur Cubes are a new mob coming to Minecraft with a curious appetite for... blocks! Found in Sulfur caves, this curious mob transforms depending on which block the player feeds it. Experiment and discover how to send Sulfur Cubes bouncing, sliding, and more!
- When the Sulfur Cube is hit by a Player its knockback is now affected by the attacker's hit angle, position and damage
  - When it is hit on the left it moves to the right and vice versa
  - When it is hit on the top it moves along the ground
  - When it is hit on the bottom it moves higher upwards
  - When it is hit with a greater damage it is knocked back more
  - When the attacker is positioned higher it moves downwards
  - When the attacker is positioned lower it moves upwards

### Sulfur Springs

- Found across the Overworld, you'll know if you've spotted a Sulfur pool thanks to its Sulfur and Cinnabar blocks – and the noxious gas coming from it! But dig beneath these and you'll discover a Sulfur cave, filled with new blocks to mine and a new mob to meet!

### Potent Sulfur

- Potent Sulfur is a new block you can use to create bubbling hot pools! Place potent Sulfur beneath water and you'll soon spy bubble columns, as well as puffs of noxious gas. Build with caution – noxious gas will trigger nausea in players and nearby mobs!

### Sulfur Caves

- Discover this new cave type, with shallow pools of water and glow lichen. Sulfur caves are filled with yellow blocks of Sulfur, red blocks of Cinnabar, and a curious mob called the Sulfur Cube!

### New Block Sets

- You'll find two new block sets in Sulfur caves – Cinnabar and Sulfur! These new blocks allow you to add rich reds and yellows into your builds, and each comes with its own full block set. Cobble them, craft with them, turn them into stairs or bricks – the choice is yours!

## Features and Bug Fixes

### Accessibility Features

- Added closed captions with customisable sound, position and duration options
  - To provide feedback on the closed captions feature, please do so over at http://aka.ms/mcclosedcaptionsfeedback
- Fixed incorrect UI scales when changing resolution
- Damage tilt slider now affects rotation of player's hands ([MCPE-229437](https://bugs.mojang.com/browse/MCPE-229437))

### Accounts

- Fixed issue where large values for player profile stats are incorrectly displayed ([MCPE-185186](https://bugs.mojang.com/browse/MCPE-185186))

### Achievements

- Fixed the Time Played stat briefly showing "-1 hours" on the Achievements screen while loading ([MCPE-230285](https://bugs.mojang.com/browse/MCPE-230285))

### Blocks

- Grass Blocks can now spawn Tall Grass when bone mealed
- Tall Seagrass no longer breaks when generated using Bonemeal ([MCPE-112509](https://bugs.mojang.com/browse/MCPE-112509))
- Bone Meal no longer produces Seagrass's upper half above other plants ([MCPE-224063](https://bugs.mojang.com/browse/MCPE-224063))
- Fixed issue placing leaves on top of leaves after decay ([MCPE-237327](https://bugs.mojang.com/browse/MCPE-237327))
- Using Bone Meal on a Moss Block connected to Polished Diorite, Polished Andesite, or Polished Granite no longer replaces them with a Moss Block , ([MCPE-129262](https://bugs.mojang.com/browse/MCPE-129262)) ([MCPE-189928](https://bugs.mojang.com/browse/MCPE-189928))
- Blocks can now only be placed above a Flowerpot when sneaking ([MCPE-237222](https://bugs.mojang.com/browse/MCPE-237222))
- Fixed interacting with a Jukebox or Composter while holding armor creating a ghost item ([MCPE-227535](https://bugs.mojang.com/browse/MCPE-227535))

### Gameplay

- Fixed knockback effect to behave more like Java edition ([MCPE-190868](https://bugs.mojang.com/browse/MCPE-190868), [MCPE-170242](https://bugs.mojang.com/browse/MCPE-170242))
- Fixed an issue that caused players camera to rotate while interacting with blocks when using Full Keyboard Mode ([MCPE-235656](https://bugs.mojang.com/browse/MCPE-235656))
- Fixed mouse camera sensitivity being higher than expected on Windows ([MCPE-235748](https://bugs.mojang.com/browse/MCPE-235748))
- Fixed a bug to maintain aiming stick capabilities while the small emote screen is visible
- Fixed a bug where Minecarts on the same track would not properly transfer momentum when colliding with each other
- Smelting damaged armor now outputs nuggets ([MCPE-237404](https://bugs.mojang.com/browse/MCPE-237404))

### General

- Fall damage visual effects now trigger when the entity hits the ground
- Fixed most cases where offline multiplayer would load infinitely ([MCPE-173418](https://bugs.mojang.com/browse/MCPE-173418))
- Fall damage audio effects now trigger when the entity hits the ground
- Fall damage visual and audio effects for non-player entities are no longer delayed past hitting the ground (MCPE-237211)

### Graphical

- Fixed an issue where Spyglass and Carved Pumpkin overlay were not being hidden while taking a screenshot in Vibrant Visuals. ([MCPE-219934](https://bugs.mojang.com/browse/MCPE-219934))
- Fixed a bug where MERS textures were visible on the front of shields with banner patterns in Vibrant Visuals. ([MCPE-235081](https://bugs.mojang.com/browse/MCPE-235081))
- Fixed a bug where emissive, metalness, and roughness values would not be loaded properly when switching to the Ray Traced graphics mode while in a world.
- Added Vibrant Visuals support for all Shelf blocks
- The baby Bees' textures have been updated to match the adult Bees' textures ([MCPE-236685](https://bugs.mojang.com/browse/MCPE/issues/MCPE-236685))
- Fixed an issue where Static Colored Lighting wouldn't propagate in chunks that were completely empty in Vibrant Visuals mode.
- Fixed broken or incorrect textures after loading a world ([MCPE-202009](https://bugs.mojang.com/browse/MCPE-202009))
- Fixed an issue that caused mushrooms on the back of mooshrooms to have incorrect illumination . ([MCPE-225482](https://bugs.mojang.com/browse/MCPE-225482))
- Adding vibrant visual support for the following:
  - Shelf blocks
  - Nautilus Armors
  - Happy Ghast Ropes
  - Music Disc: Lava Chicken
  - Music Disc: Tears
- Updated MERS texture for Baby Lazy Panda ([MCPE-236812](https://bugs.mojang.com/browse/MCPE-236812))
- Fixed a bug where Bows and Crossbows used by players disappear with Texture Streaming enabled ([MCPE-235735](https://bugs.mojang.com/browse/MCPE-235735))
- Fixed an issue where some devices would get artifacts on pixelated shadows in Vibrant Visuals
- Fixed incorrect variation in block lighting during the slime jump animation in Vibrant Visuals
- Fixed an issue causing cobweb blocks to not dither when player camera is nearby. ([MCPE-235972](https://bugs.mojang.com/browse/MCPE-235972))

### Input

- Fixed changing from handheld to docked Joy-Cons preventing input

### Items

- Baby Mobs no longer show green growth particles when being fed while their growth is stopped by a Golden Dandelion
- The Torch recipe is now unlocked by acquiring a Stick, Coal, Charcoal, or a Pickaxe of any type
- Golden Dandelion growth particles now emit from above Baby Mobs instead of from inside them

### Marketplace

- Fixed an issue where free trials were incorrectly being advertised for Marketplace Pass and Realms Plus on Nintendo Switch and Nintendo Switch 2 platforms

### Mobs

- Added Vibrant Visual support for Nautilus Armors
- Baby Squid hitbox correctly bounds the mob
- Baby Turtle now has swimming animations
- Baby Glow Squid hitbox correctly bounds the mob
- Baby Striders are no longer floating above ground ([MCPE-236393](https://bugs.mojang.com/browse/MCPE-236393))
- Villagers move at correct speed when moving to workstations ([MCPE-236656](https://bugs.mojang.com/browse/MCPE-236656))
- Fixed Baby Zombie Piglin snout texture to be front facing
- Fixed adult Rabbit textures which had a line under their head
- Got rid of extra pixels in Warm Baby Pig texture
- Fixed Baby Hoglin's crest texture so its on both sides
- Updates the Brown Baby Panda texture to be more consistant with the other's
- Got rid of the dark stripe on the back of the Baby Panda's heads
- Fixed underside texture of Baby Goat and Baby Snifflet to be consistant with the adults. Fixed back of Baby Dolphin's head which had inconsistent pixels
- Updated the top of the Chainmail Baby Armor Helmet to match the adult's
- Mobs now correctly bounce after making contact with Slime Blocks and Beds, instead of bouncing mid-air before impact
- Mobs now emit a vibration of frequency 2 when bouncing on Beds and Slime Blocks
- Updated the Snow Fox baby's sleeping texture; eyes are now dark blue to match adult's sleeping texture ([MCPE-236972](https://bugs.mojang.com/browse/MCPE-236972 "https://bugs.mojang.com/browse/mcpe-236972"))
- Baby Zombies are no longer levitating when riding baby mobs
- The rabbits' idle animation has been disabled while they are leashed
- The baby Wolves' hind legs are now rotated correctly while sitting
- Fixed a bug where Slime family mobs' bounce animations would snap abruptly
- Baby Camel hitbox size increased to match model geometry ([MCPE-236077](https://bugs.mojang.com/browse/MCPE-236077))
- The baby humanoid Chestplate Armor is now centered on the mob
- Baby Hoglin hitbox size increased to match model geometry
- Baby Zoglin hitbox size increased to match model geometry
- Adjusted the hitboxes for the following mobs, to better match Java:
  - Baby Villager
  - Baby Zombie Villager
  - Baby Zombie
  - Gurgle
  - Baby Husk
  - Baby Piglin
  - Baby Zombie Piglin
  - Baby Squid
  - Baby Glow Squid
  - Baby Fox
  - Adult Chicken
- Librarians no longer offer Name Tags, and instead offer Red Candles or Yellow Candles on Master Level ([MCPE-237281](https://bugs.mojang.com/browse/MCPE-237281))

### Party System (Beta)

The Party System is now available! Create a party, chat with your friends, and follow the party leader seamlessly from world to world — including into Realms and featured servers.

- Available on Xbox, Windows, Android, PlayStation, and Nintendo Switch. iOS support is coming soon
- Party Text Chat lets you stay connected with your party across worlds — separate from in-game world chat
- The Party System is launching as a Beta as we continue to improve the experience — please give us your feedback at [aka.ms/MinecraftPartyFeedback](https://aka.ms/MinecraftPartyFeedback)

### Realms

Introducing Realm Hub, your new home base for all things Realms, accessible from the Realms Play screen.

Key features:

- Administrator Role – Realm owners can promote trusted players to help manage the world, members, and settings.
- Admin Log – Track actions administrators take, for full accountability.
- Edit World Screen – A redesigned screen for world changes, add-ons, and pack management.
- Story Feed – A social hub for sharing screenshots and auto-celebrating major Minecraft milestones.
- Timeline – See who's been playing on your Realm over the last month.
- Subscription management – view and change your subscription to Minecraft Realms.
- Note: Some screens like Member management are still to be updated. Stay tuned for more!

Other Realms changes: \
 

- Support added to join Realms with a Party.
- Migrated pack management in the Realm edit world screen to OreUI.
- Removed subscriptions tabs from in-game Realms settings
- Fixed an issue where the save world modal would remain active after use.
- Fixed issue where player can be softlocked trying to join a Realm they're not a member of.
- Fixed crash in Realms Stories for high member count Realms

### Sounds

- Adult Pigs and Baby Pig now have eating sounds
- Trumpet note block instrument is now added to all Copper variants
- Baby spawn sounds now play with the correct pitch for the following baby mobs:
  - Baby Pig
  - Baby Cat
  - Baby Chicken
  - Baby Horse
  - Baby Wolf
- Fixed placement sound not playing when placing waterloggable blocks in water ([MCPE-236601](https://bugs.mojang.com/browse/MCPE-236601))

### User Interface

- Fixed PS4/5 store logo not appearing after navigating to the sidebar pages
- Fixed caret movement acting twice and backspace deleting too many characters when using a physical keyboard on iOS
- Improved how scrollable screen content is displayed in Ore UI menu screens on devices with notches, rounded corners or safe zones applied. Content now smoothly scrolls beneath the safe area instead of being cut off.
- Furnace recipes will now unlock when you collect the corresponding material. The feature is available under "Experimental"
- Fixed empty space appearing on screens with text input when using a physical keyboard on iOS
- Fixed several issues with text input on iOS when using a physical keyboard
- Updated the text on the beta feedback popup. ([MCPE-236391](https://bugs.mojang.com/browse/MCPE-236391))
- Add missing closed captions for some baby mobs ([MCPE-237205](https://bugs.mojang.com/browse/MCPE-237205))
- Added two missing strings that are only shown for a brief moment.
- Fixed a bug where emojis were not rendering at the small text tooltip when selecting an item in the HUD's hotbar
- Fixed the Delayed Breaking Blocks setting visibility for the "Joystick & tap to interact" and "D-Pad & tap to interact" control modes of the Touch Tab of the New Settings Screen. ([MCPE-236872](https://bugs.mojang.com/browse/MCPE-236872))

## Technical Updates

### AI Goals

- Made the schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.20 and newer
  - minecraft:behavior.hide
  - minecraft:behavior.mingle
  - minecraft:behavior.move_to_poi
  - minecraft:behavior.move_to_village
  - minecraft:behavior.sleep
  - minecraft:behavior.stroll_towards_village
- Made the schema for minecraft:behavior.equip_item stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.20 and newer
- Made the schema for minecraft:behavior.move_outdoors stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.20 and newer
- Made the schema for minecraft:behavior.move_indoors stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.20 and newer
- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.20 and newer.
  - minecraft:behavior.admire_item
  - minecraft:behavior.barter
  - minecraft:behavior.eat_carried_item
- The sound_interval float range field in minecraft:behavior.admire_item now only accepts an object with min and max values. Other formats will fail to parse
- Made the schema for minecraft:behavior.jump_around_target stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.20 and newer. Float Range fields valid_distance_to_target and landing_distance_from_target now only accepts an object with min and max values. Other formats will fail to parse
- Made the schema for minecraft:behavior.jump_to_block stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.20 and newer. Float Range field cooldown_range now only accepts an object with min and max values. Other formats will fail to parse
- Made the schema for minecraft:behavior.move_around_target stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.20 and newer. Float Range field destination_position_range now only accepts an object with min and max values. Other formats will fail to parse
- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.20 and newer.
  - minecraft:behavior.find_cover
  - minecraft:behavior.find_mount
  - minecraft:behavior.find_underwater_treasure
  - minecraft:behavior.flee_sun
- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.20 and newer.
  - minecraft:behavior.float
  - minecraft:behavior.follow_owner
  - minecraft:behavior.follow_parent
  - minecraft:behavior.hold_ground
- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.20 and newer.
  - minecraft:behavior.hover
  - minecraft:behavior.lay_down
  - minecraft:behavior.mount_pathing
- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.20 and newer.
  - minecraft:behavior.move_through_village
  - minecraft:behavior.move_to_random_block
  - minecraft:behavior.move_towards_target
- Added "on_pickup_item_start" and "on_pickup_item_end" to "minecraft:behavior.pickup_items"
- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.20 and newer.
  - minecraft:behavior.pet_sleep_with_owner
  - minecraft:behavior.pickup_items
  - minecraft:behavior.player_ride_tamed
- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.20 and newer.
  - minecraft:behavior.random_hover
  - minecraft:behavior.random_sitting
  - minecraft:behavior.random_stroll
- The hover_height field in minecraft:behavior.random_hover now only accepts an object with min and max values. Other formats will fail to parse
- Made the schema for minecraft:behavior.go_home stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.20 and newer
- Made the schema for minecraft:behavior.go_and_give_items_to_owner stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.20 and newer
- Made the schema for minecraft:behavior.go_and_give_items_to_noteblock stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.20 and newer

### API

- Released @minecraft/server version 2.7.0.
- Added @minecraft/server version 2.8.0-beta.
- Released AimAssistCategory from beta to v2.6.0
- Released AimAssistCategorySettings from beta to v2.6.0
- Released AimAssistPreset from beta to v2.6.0
- Released AimAssistPresetSettings from beta to v2.6.0
- Released AimAssistRegistry from beta to v2.6.0
- Released PlayerAimAssist from beta to v2.6.0
- Released PlayerAimAssistSettings from beta to v2.6.0
- Released AimAssistTargetMode from beta to v2.6.0
- Released World.getAimAssist from beta to v2.6.0
- Released Player.getAimAssist from beta to v2.6.0
- A new field embed_in_surface has been added to the schema of snap_to_surface_feature, which allows specifying whether the snapped feature should be embedded in the located surface. Defaults to false
  - Added maximumRenderDistance property to DebugShape .
  - Added maximumRenderDistance property to PrimitiveShape .
  - The default render distance used by DebugShape and PrimitiveShape is now your client's render distance, instead of infinity. If you'd like to match the old behavior, you can set maximumRenderDistance to a very large number (Infinity isn't valid in scripting due to platform differences unfortunately).
- Added InvalidType and UnsupportedValue to InvalidArgumentErrorType enum in @minecraft/common v1.3.0
- Added Observable.toJSON to @minecraft/server beta so that observables can be easily be stringified with JSON.stringify.
- Added the pack name to Error content log lines.
- Added locale property to ClientSystemInfo that provides the player's selected language (e.g., en_US, fr_FR, ja_JP)
- Added beta read-only property partyInfo to Player that returns a PartyInfo object ({ partyId: string, isLeader: boolean }) or undefined if the player is not in a party
- Moved function Entity.addItem from beta to v2.7.0
- Moved class InvalidEntityComponentError from beta to v2.7.0

#### DDUI

- Made close buttons client authoritative so that forms close more quickly.
- Added DataDrivenScreenClosedReason to @minecraft/server-ui beta.
- Replaced MessageBoxResult.wasShown with MessageBoxResult.closeReason which is a DataDrivenScreenClosedReason.
- Changed return type of CustomForm.show(): Promise\<boolean\> to Promise\<DataDrivenScreenClosedReason\>.
- Added FormCloseError, PlayerLeftError, ServerShutdownError to @minecraft/server-ui beta for use with CustomForm and MessageBox.

### Audio

- Fixed an issue where content packs that override entity sound events without defining variants could incorrectly clear the variant key from the base sounds.json, causing content warnings during loading.

### Biomes

- Added minecraft:subsurface_builder field to Biome Json API
  - Sub Surface Builders allow specifying a minecraft:surface_builder to be applied to biomes located underneath the Overworld's terrain surface. Note, however, that pre-existing surface builder types' processing have not been updated to accommodate the ability to specify them for sub-terrain height ranges, which may lead to unexpected results when using them.
- Added minecraft:noise_gradient sub surface builder type, which places continuous bands of blocks according to a noise distribution. This surface builder's processing has been implemented with sub-terrain height ranges in mind.
  - This surface builder has the following parameters:
    - non_replaceable_blocks: a list of blocks that the surface builder is not allowed to replace. Leaving this list empty or unspecified will allow the replacement of any (non-air or non-liquid) block type.
    - gradient_blocks: a list of block names that will be sampled according to a Perlin noise distribution. Specifying minecraft:air-blocks is permitted, and will result in the original block not being replaced, meaning it is possible to adjust the density/intensity of block replacement in the biome using this surface builder type.

### Blocks

- Fixed issue causing items with item lock component to be put in decorated pots ([MCPE-184636](https://bugs.mojang.com/browse/MCPE-184636))
- For format_version \>= **1.26.20** the component minecraft:redstone_producer cannot be defined in the **permutations** array without defining it in the base **components** object as well ([MCPE-234647](https://bugs.mojang.com/browse/MCPE-234647))
- Removed the warning message if the optional property strongly_powered_face of component minecraft:redstone_producer is not defined ([MCPE-234635](https://bugs.mojang.com/browse/MCPE-234635))
- Custom block with an icon item will now correctly display the icon in setblock command. ([MCPE-235787](https://bugs.mojang.com/browse/MCPE-235787))
- Fixed "minecraft:placement_filter" for blocks with trait minecraft:multi_block
- If no value is given for the "texture" field in "minecraft:destruction_particles", the "down" or "\*" texture will be used from "minecraft:material_instances" instead of the dirt texture. ([MCPE-234708](https://bugs.mojang.com/browse/MCPE-234708))
- Fixed custom blocks with the 'minecraft:tick' component ticking more than expected when placed via a structure ([MCPE-236362](https://bugs.mojang.com/browse/MCPE-236362))
- Fixed minecraft:block_placer component's replace_block_item property. The block will now properly use the overridden block item. ([MCPE-236314](https://bugs.mojang.com/browse/MCPE-236314))
- Fixed y-offset for 'flower_pottable' blocks in flower pots to match vanilla for versions 1.26.20+ ([MCPE-234585](https://bugs.mojang.com/browse/MCPE-234585))
- We are fully enabling the block schema parsing update that was tested during 1.26.10 previews. These changes will be shipping as part of 1.26.20 and start with this first preview.
- The custom block json api has the following changes that will affect loading of block json with format version 1.26.20 and up.
  - **General**
    - Namespace constraints have been tweaked but everything permitted before should still be valid.
      - This can affect the identifiers used for the block, states and menu category groups.
  - **Block Traits**
    - "placement_direction" trait, validation change: The rotation offset does not accept a 0.5 tolerance anymore.
      - Input value must be a multiple of 90.0
      - The value must be in the range 0.0 to 360.0 inclusive.
    - "blocks_to_corner_with" now requires "minecraft:corner_and_cardinal_direction" to be one of the "enabled_states" for the "placement_direction" trait.
  - **Category**
    - "menu_category", validation change: An empty "group" value is not allowed.
    - The "group" field can either exist with a non-empty value or not exist at all.
    - "category" is now a required field, when using "menu_category". This is strictly enforced now.
  - **Components**
    - "minecraft:flower_pottable", validation change: It is restricted outside of root components object.
    - "minecraft:geometry", validation change: The constraint on "culling_shape" identifier is strictly enforced now.
      - When using the minecraft namespace, the only currently available culling shape identifiers are : "minecraft:empty" or "minecraft:unit_cube".
      - When using no namespaces or a custom one, the names must start and end with an alpha-numeric character.
    - "minecraft:light_dampening" and "minecraft:light_emission", validation change: They now strictly enforce the value to be between 0 and 15 inclusive.
    - There is a breaking change to how tags are defined.
      - As of version 1.26.20, tags cannot freely live as top level entities in the components array.
      - They must live inside the "minecraft:tags" component, which accepts an array of tags of the format :
        - "minecraft:tags": \["minecraft:crop", "custom:custom_tag"\].
      - The values must have the format "\<namespace\>:\<tag_name\>".
      - They no longer need to be prefixed with tag:
- The pick-block action will now give the desired item in a flowerpot when the "minecraft:block_placer" component is defined with "replace_block_item" set to true ([MCPE-234586](https://bugs.mojang.com/browse/MCPE-234586))
- Fix validation of large geometries that are scaled down with a transformation component ([MCPE-236317](https://bugs.mojang.com/browse/MCPE-236317))
- Custom blocks will no longer have darker shade when occluded by a small set of vanilla blocks like the minecraft:kelp. ([MCPE-236304](https://bugs.mojang.com/browse/MCPE-236304))
- Blocks that use the "flower_pottable" component without the "geometry" and "minecraft:material_instances" components will now generate a content error ([MCPE-234599](https://bugs.mojang.com/browse/MCPE-234599))
- Blocks with a missing menu_category will correctly be accepted again instead of giving the error: "Menu Category should not have an empty value"
- Fixed custom components not parsing with modern block definition loader ([MCPE-13541](https://bugs.mojang.com/browse/MCPE-13541))
- minecraft:material_instances, validation change: ambient_occlusion does not accept booleans as valid input. It must be a float between 0.0 - 10.0 inclusive. It defaults to 1.0 if not provided.
- Fixed content warning regarding texture variations for block components minecraft:item_visual and minecraft:embedded_visual
- Added content warning for component minecraft:item_visual trying to use texture variations. Variation textures are not supported for this component
- The "minecraft:selection_box" component will correctly give an error again when the y is over the 16 limit
- Fixed legacy tag: entries in block permutations being silently dropped when upgrading to format version 1.26.20, which could cause scripts relying on permutation-specific tags to fail
- Items with "replace_block_item" set to true will no longer take the planted block in a flowerpot ([MCPE-237222](https://bugs.mojang.com/browse/MCPE-237222))

### Block Components

- Released the component minecraft:chest_obstruction from experimental for block format versions 1.26.20 or higher.

### Commands

- Fixed issue where player could still auto-jump after using the /inputPermissions command to disable jumping ([MCPE-235573](https://bugs.mojang.com/browse/MCPE-235573))
- /loot failing no longer stops the rest of an /execute command from continuing ([MCPE-185887](https://bugs.mojang.com/browse/MCPE-185887))

### Components

- Fixed issue with mob projectile accuracy going negative on higher difficulty settings
- Fixed bug in "minecraft:interact" where combining "drop_item_slot" and "equip_item_slot" would not equip the given item
- The "minecraft:damage_sensor" component's "deals_damage" field now supports an additional value:
  - "no_but_entity_effects_apply":
    - Damage is not applied to the entity
    - Knockback and enchantments are applied
    - The attacker's weapon is used as normal
    - The entity does not flash red
- Descriptions for custom blocks with minecraft:display_name now return correct values ([MCPE-236308](https://bugs.mojang.com/browse/MCPE-236308))

### Editor

- Fixed a bug in Terrain Flatten mode where adjusting the brush height made the brush harder to use
- Changed default X and Z axis mirror keybindings for Paste Preview to use SHIFT + CTRL modifiers
- Changed default axis lock keybinding for Ruler tool to use SHIFT + CTRL modifiers
- Added unbound keybindings for core panels
- Fixed a bug where can't undo/redo the operations of deselect and replace blocks from manifest table in Marquee and Freehand mode.
- Fixed Vector3 Timeline bug to avoid time values beyond neighboring nodes' time bounds in the edit popup
- Added optional drag and drop support for ICollectionTreePropertyItem API entries
- Added location to IRootPropertyPaneOptions to display root panes over the viewport instead of within a drawer
- Added view control pane API support for ICollectionTreePropertyItem
- The Local Lights and Shadow configurations in the Vibrant Visuals pane no longer has a non functioning plus button and is disabled
- Toast notifications are grouped when multiple errors are triggered rapidly.
- Disabled left mouse button paste in Paste Preview when Keyboard-only cursor mode is active
- Added the Primitives tool to the Editor tool rail
- Fixed Paste Preview appearing at an unpredictable position when entering Keys Only cursor mode from the dropdown, T key, or tool activation while Keys Only is already selected. The preview now appears at the block the player is looking at, or 32 blocks in front of the camera if no block is in view.
- Implemented auto-save for structure detail setting and removed Save button and Save menu from structure detail pane
- The Vibrant Visuals generate resource pack button now exports any edited configurations to a resource pack with a folder link provided
- Updated outdated tooltip for 2-point select checkbox in Selection Tool
- Updated how incomplete 3-point select volumes are handled by Selection Tool
  - Switching between tools now clears the incomplete 3-point select volume
  - Deselect (Ctrl+D) correctly clears the incomplete 3-point select volume and no longer logs an error
  - Fill (Ctrl+F) correctly ignores the incomplete 3-point select volume and no longer logs an error
- Fixed label values for the 'Deselect' and 'Delete Instance' shortcuts for the layout instance editor.
- Fixed tooltips for the mode selectors for the layout instance editor.
- Fixed issue in 3-point selection mode where single-clicking to create a volume didn't finalize it, preventing further actions on it.
- Fixed a bug that caused the Test World panel to not open when the menu item was clicked
- Added Ignore Air Blocks toggle to Paste Preview, allowing air blocks in the clipboard to be excluded from the paste operation
- Ensure proper offsets are applied when switching flatten modes in the Terrain Tool
- Fixed issue where Flatten Up was sampling too far into the ground
- Fixed an error that occurred when running the /reload command from tool mode chat shortcut
- Fixed Jigsaw Collection names allowing case-variant duplicates which caused file conflicts and potential data loss on case-insensitive file systems

### Entity Components

- The behavior of the minecraft:friction_modifier component now matches its description
  - The higher its value, the more friction affects an entity:
    - 0.0 means no friction
    - 1.0 means regular friction
    - 2.0 means double friction
  - The component now affects ground friction only, and no longer partially affects air or liquid drag
  - The legacy incorrect behavior can be re-enabled by adding the minecraft:uses_legacy_friction component
    - This component is automatically added to all entities with a format version lower than 1.26.20, to ensure their behavior stays unaltered
  - The component now properly works on players, and on other client-predicted entities
- Added the minecraft:uses_uniform_air_drag component
  - When present, air drag is applied uniformly on both the vertical and horizontal axes, instead of being biased toward horizontal movement
- Added the "minecraft:on_equipment_changed" component, which allows executing entitiy events when items are equipped or unequipped in specific equipment slots
  - Contains a "slots" field with a list of entries, each with:
    - "slot", the equipment slot to monitor
    - "on_equip", event to fire when a non-empty item is placed in the slot
    - "on_unequip", event to fire when the slot is cleared
  - When equipment changes, the first matching slot entry is used
  - Does not apply to "minecraft:inventory" slots, use "minecraft:equippable" instead
- Add minecraft:spawn_on_death Component for spawning entities when an entity perishes.
  - entity_to_spawn (optional) What entity to spawn, defaults to owning entity when not set
  - spawn_method (optional) Spawn method. born, spawned, or summoned, defaults to spawned when not set
  - spawn_amount (optional) How many entities to spawn, defaults to 1 when not set
  - inherit_parent_name (optional) If true, the entity will inherit the name of the parent entity, defaults to true when not set
  - additional_spawn_range (optional) Additional random range of entities to spawn, defaults to 0, 0 when not set
- Fixed a bug where removing the movement controller from an entity entirely did not reset the input velocity given by the controller
  - This would cause entities to keep sliding in the given direction until friction bled the velocity off, even if the entity hit a wall
- Fixed a bug that caused the "minecraft:behavior.delayed_attack" AI behavior to sometimes fail to exit after killing a target
- Added the minecraft:bounciness component, which controls how an entity bounces when colliding with surfaces
  - Contains a single field, value, defining the bounce strength:
    - 0 results in no bounce
    - 1 results in a perfectly elastic collision with full energy preservation
  - If the component is not present, bounciness defaults to 0
  - Only available if the entity's format_version is set to beta
- Added the "minecraft:apply_knockback_rules" component which controls how an entity applies knockback to a target
  - "horizontal_power" defines how much the target is hit backwards
  - Defaults to 1.0 if not defined
  - "vertical_power" defines how much the target is hit upwards
  - Defaults to 0.4 if not defined
  - "vertical_velocity_cap" defines the target's maximum vertical upwards velocity after the target's knockback rules have been evaluated
  - Defaults to 0.4 if not defined
  - "check_if_target_is_immersed_in_water" defines whether the target should be fully immersed in water for the knockback rules to apply
  - Defaults to false if not defined
- Not defining this component results in default knockback behavior
- Added the minecraft:air_drag_modifier component
  - The higher its value, the more air drag affects an entity:
    - 0.0 means no air drag
    - 1.0 means regular air drag
    - 2.0 means double air drag
  - Only available if the entity's format_version is set to beta
- The minecraft:knockback_resistance component now accepts negative values down to a minimum of -2, resulting in knockback being increased instead of being diminished
- Non-Ocelot and non-Cat mobs can now use "minecraft:behavior.ocelotattack" ([MCPE-237713](https://bugs.mojang.com/browse/MCPE-237713))
- The component "minecraft:apply_knockback_rules" now takes an array of presets
  - "presets" is an array of elements with the same parameters as "minecraft:apply_knockback_rules" had previously
- The preset elements have the following new field:
  - "filter" is an actor filter with the default syntax
- Add filters parameter to minecraft:spawn_on_death.

### Entity Filters

- Added "has_same_equipment_in_slot_as" entity filter

### Features

- Added a boolean "rotate_around_center" field to the "minecraft:structure_template_feature" feature
  - When set to "true", it rotates the structure around its center when placing it in the world
  - Defaults to "false" if omitted
- : refactor minecraft:behavior.follow_target_captain to minecraft:behavior.follow_target_leader. The following fields have been added to the behavior:
  - always_look_for_leader (default: false) If true, the mob will always search for a valid leader to follow if none is found or current leader is not valid anymore
  - leader_filters (required) The filters to use when determining if a mob is a suitable leader or not.
  - search_cooldown (default: 20) Number of ticks that must pass before a new search is initiated after a target is not found, lost, or becomes invalid.

### General

- Upgraded particles, trading, and cameras JSON resources to Cereal slice 1.26.10 and re-serialized to align with the updated schema.
- Updated new features in structure pools to include data driven features

### Graphical

- Added static_light shading to weather
- Fixed an issue that prevented per-biome directional light orbital offset provided by resource packs from being applied in Vibrant Visuals. Such offset can be provided through the field "orbital_offset_degrees" in lighting configuration files.
- Added new version of atmospheric scattering config.
  - New format version is 1.26.20
  - Fields "minecraft:atmosphere_settings" and "minecraft:atmosphere_settings/description" are now required
- Changed means of accessing Atmospherics Graphics Overrides to be accessed through getBiomeAtmospherics

### Items

- Items that have their "item_lock" mode set to either "lock_in_inventory" or "lock_in_slot" can no longer be placed in shelf blocks ([MCPE-230341](https://bugs.mojang.com/browse/MCPE-230341))
- Added new version for the water configuration JSON file.
  - new format version is "1.26.20".
  - fields "minecraft:water_settings" and "minecraft:water_settings/description" are now required.
- Fixed pickblock overriding items in hotbar with item_lock ([MCPE-152556](https://bugs.mojang.com/browse/MCPE-152556))
- New 1.26.10 attachables now use a new 'controller.render.armor.v2' render_controller rather than using an updated 'controller.render.armor'. Fixes some creator content's custom armor not rendering properly
- Fixed furnace recipe categorization so custom items using minecraft:block_placer with replace_block_item are correctly treated as block recipes. ([MCPE-236444](https://bugs.mojang.com/browse/MCPE-236444))
- Added tags for Sulfur Cube to make use of for physics determination and absorbing
  - "minecraft:sulfur_cube_archetype_bouncy"
  - "minecraft:sulfur_cube_archetype_regular"
  - "minecraft:sulfur_cube_archetype_slow_flat"
  - "minecraft:sulfur_cube_archetype_fast_flat"
  - "minecraft:sulfur_cube_archetype_light"
  - "minecraft:sulfur_cube_archetype_fast_sliding"
  - "minecraft:sulfur_cube_archetype_slow_sliding"
  - "minecraft:sulfur_cube_archetype_sticky"
  - "minecraft:sulfur_cube_archetype_high_resistance"

### Mobs

- Fixed a bug where the summon_cap for custom entities was ignored ([MCPE-153307](https://bugs.mojang.com/browse/MCPE-153307))
- Fixed actor textures not loading properly when applying packs with older min engine version
- Fixed player friction not resetting for older content

### Network Protocol

- Modified the binary format of PlayerEnchantOptionsPacket
- Packet UpdateClientOptionsPacket, added bool Filter Profanity Change.

### Scripting

- Values returned by localizationKey on Block, BlockPermutation, and BlockType will now correctly respect minecraft:display_name keys for custom blocks.([MCPE-235802](https://bugs.mojang.com/browse/MCPE-235802))
- Added CustomTexture type to beta
  - textureBoundsList in the WaypointTextureSelector now has the option of passing in a CustomTexture with a specified path, height, and width

### Stability and Performance

- Fixed crash loading level with incomplete explorer map ([MCPE-226793](https://bugs.mojang.com/browse/MCPE-226793))
- Improved sign-in speed on most platforms by triggering authentication earlier during game startup
- Fixed a crash that could occur when loading the Token FAQ page on PlayStation
- Fixed crash that could occur when logging Molang content
- Fixed realms region bindings crash when indexing out of bounds region data
- Fixed a crash that can occur when prompted about extra Joy-Con controllers that are connected
- Fixed a crash that may occur when suspending title while "Syncing user data" UI is displayed
- Fixed crashing issue when exiting Realms plan picker screen before it finishes loading.
- Syncing of Xbox world data now occurs when specific world is selected.

### User Interface

- Fixed a bug where entering custom settings of a behavior pack screen disables the pack.
- Fixed an issue causing the HUD to fail to load after disabling Screen Animations in-game, sometimes causing a soft-lock issue ([MCPE-236881](https://bugs.mojang.com/browse/MCPE-236881))

### World Generation

- Can now use minecraft:feature_pool_element in Jigsaw Structure Template Pools in order to place Features
- features can now connect to a Jigsaw Block with any Target Name, rather than only minecraft:bottom

## Experimental Technical Updates

### Add-Ons

- Added experimental toggle "Custom Projectiles" which enables improvements around custom projectiles in add-ons without the use of runtime identifiers
  - Adds isolated_physics property to minecraft:projectile component for easier trajectory control
  - fire_at_target goal now applies projectile offsets relative to entity rotation
  - Custom projectiles now:
    - can be reflected
    - update their owner upon launch and reflection
    - no longer collide with their owner on launch
    - apply their offsets on launch
    - remain at their point of impact when using stick_in_ground

### API

- Adjusted GameTest to no longer run call backs from methods such as succeedWhen and failIf after the test has already completed.
- Changed color property of DebugShape (in @minecraft/debug-utilities) from RGB to RGBA.
- Added depthTest property to DebugText (in @minecraft/debug-utilities).
- Added backgroundColorOverride property to DebugText (in @minecraft/debug-utilities).
- Added useRotation property to DebugText (in @minecraft/debug-utilities).
- Added kickPlayer() to the @minecraft/server-admin module in beta
- Added new tech to support 3D world text objects and rendering to @minecraft/server.
  - Added new beta PrimitiveShapesManager class used to add and remove text primitives to the world.
  - Added new beta PrimitiveShape base class used to repesent 3D shape objects in the world.
  - Added new beta TextPrimitive class used to render 3D text shape objects in the world.
  - Added new beta primitiveShapesManager property to World.
- Added localization support to DebugText.
  - DebugText constructor changed allow using either RawMessage or string for the text paramter.
  - DebugText.text changed to be a readonly property.
  - DebugText.setText method added which allows using either RawMessage or string.
  - DebugText.rawText readonly property added to get the text if RawMessage is used via setText.
- Changes to error types in @minecraft/server-net in beta
  - HttpRequestBodyTooLargeError has been renamed to RequestBodyTooLargeError
  - HttpRequestNotAllowedError has been renamed to UriNotAllowedError
  - HttpsOnlyError has been renamed to TLSOnlyError
  - MalformedHttpRequestError has been renamed to MalformedUriError
- @minecraft/server-net configuration module permissions parameter 'force_https' has been renamed to 'force_tls'
- Added interface ContainerAccessSource to beta
- Added interface ContainerAccessSourceFilter to beta
- Added class EntityContainerClosedAfterEvent to beta
- Added class EntityContainerClosedAfterEventSignal to beta
- Added class EntityContainerOpenedAfterEvent to beta
- Added class EntityContainerOpenedAfterEventSignal to beta
- Added interface EntityContainerAccessEventOptions to beta
- Added class BlockContainerClosedAfterEvent to beta
- Added class BlockContainerClosedAfterEventSignal to beta
- Added class BlockContainerOpenedAfterEvent to beta
- Added class BlockContainerOpenedAfterEventSignal to beta
- Added interface BlockContainerAccessEventOptions to beta
- Added StructureManager.getPackStructureIds to beta.
- Added EntityEnderInventoryComponent for accessing a player's EnderChest container contents to beta
- Added opPlayer and deopPlayer functions to @minecraft/server-admin in beta
- Added allowCheats boolean property to the World class in @minecraft/server in beta
- Added WebSocket clients to @minecraft/server-net in beta
  - WebSocket class added which is used to create and connect websocket clients. This is created as the global websocket object in @minecraft/server-net
  - WebSocketClient class added to interact with the websocket and receive data from the server through events
- Moving BiomeTypes.getAll to 2.7.0 in @minecraft/server
- Moving BiomeTypes.get to 2.7.0 in @minecraft/server
- Moving BiomeType.hasTags to 2.7.0 in @minecraft/server
- Moving BiomeType.getTags to 2.7.0 in @minecraft/server
- Added two functions to DedicatedServerUtils of @minecraft/server-admin in beta
  - Added reloadScriptingConfig() to reload scripting configuration files from disk
  - Added reloadPermissions() to reload the server permissions file from disk
  - Added reloadCDNConfig() to reload cdn configuration files from disk
- Added backfaceVisible property to DebugText in the @minecraft/debug-utilities module. .
- Added backfaceVisible property to TextPrimitive in the @minecraft/server module. .
- Added textBackfaceVisible property to DebugText in the @minecraft/debug-utilities module. .
- Added textBackfaceVisible property to TextPrimitive in the @minecraft/server module. .
- Added new property maxShapes to PrimitiveShapesManager.
- Changed the maximum number of PrimitiveShape objects to 1000.
- Changed the maximum length of the text param of setText on TextPrimitive, to 128.
- Changed the min and max scale value of PrimitiveShape objects to -1000 and 1000 respectively.
- Added Dimension.spawnXp method to spawn experience orbs at a specified location in @minecraft/server
- Fixed a bug when attachedTo on a ShapePrimitive or DebugShape wouldn't update if the attached entity was unloaded and reloaded.
- Fixed a bug where DebugText in minecraft@debug-utilities could be invisible.
- Added maximumRenderDistance to DebugShape in minecraft@debug-utilities could be invisible.
- Added Script Entity property nameplateDepthTested to beta
- Added Script Entity property nameplateRenderDistance to beta
- Added EntityHealCause.TotemOfUndying to beta
- Added minecraft:totem_of_undying support to entity heal before/after events
- Added Player.chatNamePrefix to beta - an optional string prepended to the player's name in chat messages
- Added Player.chatNameSuffix to beta - an optional string appended to the player's name in chat messages
- Added Player.chatDisplayName to beta - a read-only property returning the composed chat name (chatNamePrefix + name + chatNameSuffix)
- Added Player.chatMessagePrefix to beta - an optional string prepended to the text of the player's chat messages, useful for applying color/formatting codes
- Added BlockComponentBlockStateChangeEvent to beta. Custom Block components can subscribe to onBlockStateChange.
- Added beta Boolean property firstUpdate to BlockComponentRedstoneUpdateEvent
- Fixed a bug where in-flight http requests could freeze the game when the http client is destroyed in scripting.
- Changed the maximum length of the text param of setText on TextPrimitive, to be 128 lines and 128 characters per line.
- Fixed issue that caused websockets to not complete their connection with the server
- Fixing a bug with Debug Drawing and Primitive Shapes where they could get into a bad state when used with Simulated Players.
- Class DimensionRegistry.
  - Added method registerCustomDimension to allow registrations of new custom dimensions in beta.
- Startup event
  - Added the ability to register custom dimensions during the before startup event.

#### Data Driven UI

- Added support for localization for dropdown items.
- Changed interface DropdownItem
  - Changed type for description from string to UIRawMessage \| string
    - New Signature: description?: UIRawMessage \| string
    - Old Signature: description?: string
  - Changed type for label from string to UIRawMessage \| string
    - New Signature: label: UIRawMessage \| string
    - Old Signature: label: string
- Fixed issue where text input areas are covered by the virtual keyboard at some platforms like Android.
- Fix for players getting stuck when DDUI screen is open and server crashes.
- Fixed buttons getting clipped when in a focused state.
- Fixed an issue where showing forms (CustomForm or MessageBox) back to back resulted in the second form not showing
- Class Observable.
  - Added method getFilteredText. Gets filtered data from the Observable (only available for strings). -getFilteredText(this: Observable\<T & string\>, player: Player): Promise\<string \| TextFilteringError\>;
- Added enum TextFilteringError. An enum representing the errors that can occur during text filtering. This is used at Observable.getFilteredText to provide more context about the filtering process.
- Adding support for multiline texts for MessageBox.body, CustomForm.label, CustomForm.header using \n.

### Blocks

- Added snow_log_no_collision behavior to precipitation_behavior in minecraft:precipitation_interactions component. This behavior will allow creators to specify whether snow should cover their custom block or not.
- Fixed trait minecraft:multi_block not loading properly with modern block definition loader

#### Voxel Shapes

- Added non-unit-cube voxel shapes for 70 Vanilla blocks when the Voxel Shapes experiment is enabled. These shapes improve face culling so that hidden faces between adjacent blocks are correctly removed.
  - Slab shapes (62 blocks)
  - Other shapes (8 blocks): Calibrated Sculk Sensor, End Portal Frame, Powered Comparator, Powered Repeater, Snow Layer, Stonecutter, Unpowered Comparator, Unpowered Repeater
- Fixed Vanilla slab face culling so that the top face of a block directly above or below a slab is now correctly culled against the slab's shape
  - Fixed minecraft:replaceable to work with all parts of a **multi-block**. Also the component can no longer be defined in the **permutations** array, only allowed in the base **components** object
- Fixed selection outline for **multi-blocks** using minecraft:random_offset. Also for **multi-blocks** minecraft:random_offset can no longer be defined in the **permutations** array only in the base **components** object ([MCPE-237071](https://bugs.mojang.com/browse/MCPE-237071))
- Fix minecraft:placement_filter not working for block with trait minecraft:multi_block ([MCPE-237498](https://bugs.mojang.com/browse/MCPE-237498))
- Multi-blocks that don't have a minecraft:selection_box component will now default to a full block outline shape for each part ([MCPE-237089](https://bugs.mojang.com/browse/MCPE-237089))
- Added non-unit-cube voxel shapes for 19 Vanilla blocks when the Voxel Shapes experiment is enabled. These shapes improve face culling so that hidden faces between adjacent blocks are correctly removed
  - Cake shapes (1 block): 7 bite-counter shapes for each slice of cake
  - Candle Cake shape (17 blocks)
  - Composter shapes (1 block): 8 fill-level shapes for each stage of composting

### Entities

- Added a new entity_version description field to entity behavior definitions that enables per-entity versioning and upgrade handling
  - The entity_version field is a JSON object containing an upgrades array, where each entry specifies an integer upgrade_to version and a name string referencing an upgrade handler defined in a new top-level upgrades section of the entity definition.
  - Upgrade versions must start at 1 and be contiguous (e.g., 1, 2, 3), gaps or duplicates are rejected with a content error.
  - Version 0 is reserved for entities that have no version set ("versionless"), which is the default for all existing entities.
  - When an entity is loaded with a version older than the current definition version, all upgrade handlers between the entity's saved version and the current version are executed sequentially.
  - Newly spawned entities are set directly to the latest version without running any upgrade handlers.
  - Upgrade handlers reuse the existing event system but are defined in a separate upgrades section, keeping them distinct from regular events.
  - The entity's version is persisted and loaded/saved automatically.
  - This feature is gated behind the Upcoming Creator Features experiment toggle.

### Entity Components

- The following fields have been added to the preset element exclusively in the beta version of "minecraft:apply_knockback_rules":
  - "scale_previous_velocity" scales the previous velocity of the target when hit
  - "horizontal_hit_angle_scale" scales the horizontal angle response of the target when hit based on the attacker's aim direction
  - "vertical_hit_angle_scale" scales the vertical angle response of the target when hit based on the attacker's aim direction
  - "vertical_position_angle_scale" scales the vertical angle response of the target when hit based on the attacker's relative feet position
  - "scale_with_damage" enables scaling the magnitude of knocback based on the inverse square of the damage
- There is currently a known issue where knockback is applied twice
  - the first is the custom knockback defined by "minecraft:apply_knockback_rules"
  - the second is the default knockback with the custom "horizontal_power", "vertical_power" and "vertical_velocity_cap" defined by "minecraft:apply_knockback_rules"

### Graphical

- Removed point lights visually fading out once past a certain distance from the camera
- Fixed an issue where the RenderDragon Features for Creators Experimental resource pack would override other resource packs on the stack
- Fixed an issue where point lights were over exposed at their center
  - This behavior can be replicated using emissive textures if desired
- Under the RenderDragon Features for Creators Experiment
  - Migrated colored block light storage to the GPU
    - There may be new artifacts with light leaking through or around blocks
  - Colored block lights now influence Volumetrics

### Scripting

- Added scripting method that allows creators to check the snow logging behavior of a block.
