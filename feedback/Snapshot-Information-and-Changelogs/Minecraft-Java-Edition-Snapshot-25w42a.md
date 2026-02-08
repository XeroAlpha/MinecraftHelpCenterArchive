---
title: Minecraft Java Edition - Snapshot 25w42a
date: 2025-10-14T14:24:12Z
updated: 2025-10-21T12:29:27Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/40320457571725-Minecraft-Java-Edition-Snapshot-25w42a
hash:
  h_01K83BM8CR6EY0SJ6E4X6J97AB: changes
  h_01K83BM8CR6CG218Y7F60V8BKE: technical-changes
  h_01K83BM8CR4PYGHAVWV83CCA3A: minecraft-server-management-protocol-version-110
  h_01K83BM8CRAVWBJ64CPHSVJK9M: data-pack-version-900
  h_01K83BM8CRK9VFFJEK7K1PMQPE: commands
  h_01K83BM8CR1QMS45MFA1S4BPWM: changedstopwatch
  h_01K83BM8CR1F2E8AHCNE2M1YEP: environment-attributes
  h_01K83BM8CRAG5HKJE7Z3WT4FJE: sources
  h_01K83BM8CR2NMB40211EF15K2T: modifiers
  h_01K83BM8CR0TD9T8JW7KEC9Y92: interpolation
  h_01K83BM8CRTFBMYXMGRQ35E7VX: biomes
  h_01K83BM8CRE0S7E7X4E3KPWWXR: environment-attribute-map
  h_01K83BM8CR5S41VT8Q7GJRJWCF: common-data-types
  h_01K83BM8CRZ2BQEP4V6Q29GZRG: rgb-color
  h_01K83BM8CS9WCCGVDWRJGY0Y8G: argb-color
  h_01K83BM8CSADY38R7ZWSH0EHFA: particle-options
  h_01K83BM8CSQJFR8QWKWEMM73TH: common-modifiers
  h_01K83BM8CS4DTWDJP3TTWB766X: modifiers-on-boolean-values
  h_01K83BM8CSPR5JZH419PPYE2PH: modifiers-on-float-values
  h_01K83BM8CS43CJN28KV9BKFKDC: modifiers-on-color-values
  h_01K83BM8CS39D6T95B4GPH6PET: new-environment-attributes
  h_01K83BM8CS63P025VW52RK684Q: minecraftvisualfog_color
  h_01K83BM8CSAH9G9S1H2TKR4HH0: minecraftvisualextra_fog
  h_01K83BM8CSRATPQGZ7N54M6XHG: minecraftvisualwater_fog_color
  h_01K83BM8CSJ46TH20B58S6G7N9: minecraftvisualwater_fog_radius
  h_01K83BM8CST19W5JM5PDJA8ADN: minecraftvisualsky_color
  h_01K83BM8CS1V39XSKXR1J23PST: minecraftvisualcloud_opacity
  h_01K83BM8CSWXE1TSVZ1ZSD6M4C: minecraftvisualcloud_height
  h_01K83BM8CS18A7K2TWSFZZAGJE: minecraftvisualdefault_dripstone_particle
  h_01K83BM8CS2BGMCZM4V1F1N936: minecraftvisualambient_particles
  h_01K83BM8CSQGR2M8WFNXM5JVJ0: minecraftaudiobackground_music
  h_01K83BM8CSA9X5MPG9W2NA2V63: minecraftaudiomusic_volume
  h_01K83BM8CS3HXGF0H75HS246FD: minecraftaudioambient_sounds
  h_01K83BM8CS5Y91P8Q0971TC8AN: minecraftgameplaycan_start_raid
  h_01K83BM8CS05JW14EZR9TM19B5: minecraftgameplaywater_evaporates
  h_01K83BM8CS71QSHJG6X3PHKVMC: minecraftgameplaybed_rule
  h_01K83BM8CSXW3ADPTKY6T55ACH: minecraftgameplayrespawn_anchor_works
  h_01K83BM8CS172PFKJKQ5QSRKP7: minecraftgameplaynether_portal_spawns_piglin
  h_01K83BM8CS7TAYDQV1RDB87HS3: minecraftgameplayfast_lava
  h_01K83BM8CSFZBM0X975QWSVBA2: minecraftgameplayincreased_fire_burnout
  h_01K83BM8CSRH8Q8QKWMM8VJ9MH: minecraftgameplaypiglins_zombify
  h_01K83BM8CS5F7GKGT42J4RRT70: minecraftgameplaysnow_golem_melts
  h_01K83BM8CTAEYT02DW4QP9C2T3: dimension-types
  h_01K83BM8CTMTEMXR4MFBNRDQR5: biomes-1
  h_01K83BM8CTG58EJP8BX1G3GBZ8: item-components
  h_01K83BM8CTJF0GK06ZSQME6M6K: minecraftkinetic_weapon
  h_01K83BM8CTM067WAR9SEXZRN1H: biome-tags
  h_01K83BM8CTSZDQJM4AZSNEEY4K: resource-pack-version-701
  h_01K83BM8CTTKFP8VSBA6YEG1C0: sounds
  h_01K7HHJT0QBYBGJ8S93RHV2AJT: fixed-bugs-in-25w42a
  h_01K7HHJT125S34XPV9CMZBAJMT: get-the-snapshot
---

A fresh new snapshot is out with some changes to the features introduced in last week’s snapshot and bug fixes, like that you can now use the lunge and mending enchantments together on the same item. We have also added environment attributes which can be used to control various visual and gameplay effects. Happy mining!

## Changes

- Underwater biome fog color and fog distance is now blended based on the player's position between biomes, similarly to regular biome fog and sky colors
- Updated the "Oh Shiny" advancement to include the Golden Spear and Golden Nautilus Armor
- Zombie Horses can be leashed when its mob jockey is removed
- The Nautilus and Zombie Nautilus can now be controlled while on land
- Mending is no longer incompatible with the Lunge enchantment

## Technical Changes

- The Data Pack version is now 90.0
- The Resource Pack version is now 70.1

### Minecraft Server Management Protocol Version 1.1.0

- Enable authentication from web browsers
  - Authenticate by passing the token in Sec-WebSocket-Protocol header when opening the WebSocket connection
    - Example: Sec-WebSocket-Protocol: minecraft-v1, \<token\>
  - Requests authenticating this way are subject to Origin header checks. This requires configuration of allowed origins on the server side using management-server-allowed-origins. The default value is empty, meaning Sec-Websocket-Protocol authentication is effectively disabled

## Data Pack Version 90.0

- Certain visual and gameplay effects can now be controlled by Environment Attributes

### Commands

- Resource suggestions now show results in any namespace instead of just within minecraft

#### Changed stopwatch

- Switched the order of the id argument
  - Example: /stopwatch foo:bar create is now /stopwatch create foo:bar
- query now returns the queried value and takes in a new scale argument
  - The returned value will be scaled by that argument and truncated
  - The scale is optional and will default to 1 if omitted
  - Example: /stopwatch query foo:bar 20 to get the elapsed time in ticks

### Environment Attributes

Environment Attributes provide a data-driven way to control a variety of visual and gameplay systems.

Each Environment Attribute controls a specific visual or gameplay effect: for example, minecraft:visual/sky_color controls the color of the sky, and minecraft:gameplay/water_evaporates controls whether water can be placed at a given location.

> **Developer’s Note:** *This system and many of the introduced attributes should be considered very experimental, and may still change significantly in coming snapshots and releases. In the meantime, we would as always love to hear any feedback or suggestions you may have!*

#### Sources

Environment Attribute values can be provided by the following Environment Attribute sources (in order of low to high priority):

- Dimensions
- Biomes

The "effective" value of the Environment Attribute (i.e. what will actually show up in game) will be some combination of the values provided by each source according to their priority.

For example, in the following scenario:

- The overworld dimension provides sky_color = \#00ff00 (green)
- The plains biome provides sky_color = \#ff0000 (red)

When the player is in the plains biome, they will see the red sky_color, while anywhere else in the overworld they will see green.

When an Environment Attribute source provides an Environment Attribute, it can:

- Override the value, such as the plains biome overriding the overworld's sky_color in the above scenario
- Apply a modifier to a previous value (see section on Modifiers below)

#### Modifiers

As described in the above example, an Environment Attribute source may simply override the value of a particular attribute. However, it is sometimes also desirable to rather apply a modifier to a value provided by a source with lower priority.

For example, in the following scenario:

- The overworld dimension provides water_fog_radius = 96.0
- The plains biome modifies water_fog_radius with a multiply modifier of 0.85

When in the plains biome, the water_fog_radius will be resolved to 96.0\*0.85 = 81.6, while in any other Overworld biome, it will resolve to 96.0.

The kinds of modifiers available depends on the type of Environment Attribute. The most basic modifier, supported by every Environment Attribute, is the override modifier. This behaves purely as an override of the preceding value. If not specified by an Environment Attribute source, the modifier will always be assumed to be override.

Full descriptions of the available modifiers and their behaviors can be found in the Common Modifiers section below.

#### Interpolation

While modifiers describe how a value provided by one source is applied on the value from a preceding source, interpolation describes the combination of values within a source. Interpolation is performed on values from a source after modifiers have been applied.

Only some Environment Attributes support interpolation. This allows for the smooth transition between two or more values, such as when moving between two biomes.

#### Biomes

For example, in the following scenario:

- The plains biome provides sky_color = \#ff0000 (red)
- The desert biome provides sky_color = \#ffff00 (yellow)

sky_color is one such attribute that will transition smoothly based on position: for example, in the above scenario, as a player moves from a plains to a desert biome, the sky color will gradually shift from red to yellow. Other attributes, such as water_evaporates, represent discrete values and will not be smoothly transitioned - only the biome exactly at a subject position will be considered.

Smooth transitions between biomes are based on the biomes within an 8 block radius of the camera. Biomes that occupy a larger portion of that radius and are closer to the camera will have a stronger influence on the final interpolated value.

#### Environment Attribute Map

Dimension Type and Biome definitions contain a new attributes field, enabling them to define Environment Attributes.

This map generally takes the form of an object mapping between Environment Attribute IDs and their corresponding values, for example:

    "attributes": {
        "minecraft:visual/fog_color": "#ffaa00",
        "minecraft:gameplay/water_evaporates": true
    }

Values defined as above will always be assumed to use the override modifier.

The value object can however be expanded in order to express different modifiers, in the format of an object with the following fields:

- modifier: optional string modifier ID, dependent on the Attribute Type (see the Common Modifiers section below)
  - Default: override
- argument: the modifier argument (format dependent on the chosen modifier)
  - How the argument is used also depends on the type of modifier

For example, the following definition describes multiplying water_fog_radius by 85%:

    "attributes": {
        "minecraft:visual/water_fog_radius": {
            "modifier": "multiply",
            "argument": 0.85
        }
    }

#### Common Data Types

The following data types are reused in various parts of the Environment Attributes system and will be referenced in sections below.

#### RGB Color

Format can be one of the following:

- A hex color RGB string, in the form \#rrggbb
- A float array with 3 components, between 0 and 1, in the form \[r, g, b\]
- An integer in packed RGB form

#### ARGB Color

Format can be one of the following:

- A hex color ARGB string, in the form \#aarrggbb
- A float array with 4 components, between 0 and 1, in the form \[a, r, g, b\]
- An integer in packed ARGB form

#### Particle Options

A full definition of a particle, including any type-specific properties (as in the /particle command).

For example:

    {
      "type": "minecraft:block_crumble",
      "block_state": {
        "Name": "minecraft:dirt"
      }
    }

#### Common Modifiers

Every Environment Attribute has a specific value type, which describes how values must be defined as well as what modifiers are available and how they are interpolated. Some are very specific, while others are reused across many attributes.

Although this is not an exhaustive list, the following Attribute Types are used commonly across many Environment Attributes:

#### Modifiers on Boolean Values

Argument format: boolean

- override
- and
- nand
- or
- nor
- xor
- xnor

#### Modifiers on Float Values

Argument format: float

- override
- add
- subtract
- multiply
- minimum
- maximum

#### Modifiers on Color Values

Argument format: RGB color (except alpha_blend)

- override
- add - component-wise additive color blending
- subtract - component-wise subtractive color blending
- multiply - component-wise multiplicative color blending
- alpha_blend - traditional alpha blending that might be seen in image editing software
  - Argument format: ARGB Color
  - When the argument alpha is 1, it will behave as an override with no blending

#### New Environment Attributes

#### minecraft:visual/fog_color

The color of fog (when the camera is not submerged in another substance). Note: the final value is also affected by the time of day, weather, and potion effects.

- Value type: RGB color
- Default value: \#000000
- Modifiers: Color Modifiers
- Interpolated: yes
- Resolved at the camera's position
- Replaces Biome effects.fog_color field

#### minecraft:visual/extra_fog

Controls whether dense fog (like that of the Nether) should be used (when the camera is not submerged in another substance).

- Value type: boolean
- Default value: false
- Modifiers: Boolean Modifiers
- Interpolated: no
- Resolved at the camera's position

#### minecraft:visual/water_fog_color

The color of fog when submerged in water. Note: the final value is also affected by the time of day, weather, and potion effects.

- Value type: RGB color
- Default value: \#050533
- Modifiers: Color Modifiers
- Interpolated: yes
- Resolved at the camera's position
- Replaces Biome effects.water_fog_color field

#### minecraft:visual/water_fog_radius

The distance in blocks from the camera at which underwater fog reaches its maximum density.\
Note: the final value is also modified by how long the player has been underwater.

- Value type: non-negative float
- Default value: 96.0
- Modifiers: Float Modifiers
- Interpolated: yes
- Resolved at the camera's position
- Replaces \#has_closer_water_fog Biome Tag

#### minecraft:visual/sky_color

The color of the sky. This color is only visible for the Overworld sky. Note: the final value is also affected by the time of day and weather.

- Value type: RGB color
- Default value: \#000000
- Modifiers: Color Modifiers
- Interpolated: yes
- Resolved at the camera's position
- Replaces Biome effects.sky_color field

#### minecraft:visual/cloud_opacity

The opacity of clouds. If 0, clouds are entirely disabled and Happy Ghasts will not regenerate health faster when at cloud height.

- Value type: float between 0 and 1
- Default value: 0.0
- Modifiers: Float Modifiers
- Interpolated: yes
- Resolved at the camera's position for rendering, or at the position of a Happy Ghast for regeneration

#### minecraft:visual/cloud_height

The height at which all clouds appear.

- Value type: float
- Default value: 192.33
- Modifiers: Float Modifiers
- Interpolated: yes
- Resolved at the camera's position for rendering, or at the position of a Happy Ghast for regeneration
- Replaces Dimension Type cloud_height field

#### minecraft:visual/default_dripstone_particle

The default particle to be dripped from Dripstone blocks when no fluid is placed above.

- Value type: Particle Options
- Default value: {type:"minecraft:dripping_dripstone_water"}
- Modifiers: override
- Interpolated: no
- Resolved at the position of the Dripstone block
- Replaces Dimension Type ultrawarm field

#### minecraft:visual/ambient_particles

Controls ambient particles that randomly spawn around the camera.

- Value type: list of objects with fields
  - particle: Particle Options to spawn
  - probability: float between 0 and 1, the probability to spawn the particle in an empty space when randomly ticked
- Default value: \[\]
- Modifiers: override
- Interpolated: no
- Resolved at the camera's position
- Replaces Biome effects.particle field

#### minecraft:audio/background_music

Controls how and which background music is played.

- Value type: object with fields
  - default: optional object with fields:
    - sound: Sound Event to play
    - min_delay: int, minimum delay in ticks between tracks
    - max_delay: int, maximum delay in ticks between tracks
    - replace_current_music: optional boolean, whether this track can replace whatever is currently playing
      - Default: false
    - If not defined and not overridden, no music will start playing while this attribute is active
  - underwater: optional object with fields in the same format as default - if present and the player is underwater, will override default
  - creative: optional object with fields in the same format as default - if present and the player is in Creative Mode, will override default
- Default value: {}
- Modifiers: override
- Interpolated: no
- Resolved at the camera's position
- Replaces Biome effects.music field

#### minecraft:audio/music_volume

The volume at which music should play. Any music playing will fade over time to this value.

- Value type: float between 0 and 1
- Default value: 1.0
- Modifiers: Float Modifiers
- Interpolated: no
- Resolved at the camera's position
- Replaces Biome effects.music_volume field

#### minecraft:audio/ambient_sounds

Controls which ambient sounds are played around the camera, and when.

- Value type: object with fields
  - loop: optional Sound Event, sound to be continually looped
  - mood: object with fields, sounds that will be randomly played based on surrounding darkness
    - sound: Sound Event to play
    - tick_delay: int, the number of ticks between mood sounds, assuming a light level of 0
    - block_search_extent: int, the radius in which light levels are sampled
    - offset: double, an additional distance offset to apply to sounds produced
  - additions: list of objects with fields, sounds that will be randomly played
    - sound: Sound Event to play
    - tick_chance: float between 0 and 1, probability within a tick to play a given sound
- Default value: {}
- Modifiers: override
- Interpolated: no
- Resolved at the camera's position
- Replaces Biome effects.ambient_sound, effects.mood_sound, and effects.additions_sound fields

#### minecraft:gameplay/can_start_raid

If false, a Raid cannot be started by a player with Raid Omen.

- Value type: boolean
- Default value: true
- Modifiers: Boolean Modifiers
- Interpolated: no
- Resolved at the position that the Raid would be started
- Replaces Dimension Type has_raids field

#### minecraft:gameplay/water_evaporates

If true, Water cannot be placed with a Bucket, melting Ice will not produce water, Wet Sponge will dry out when placed, and Dripstone will not produce water from Mud blocks.

- Value type: boolean
- Default value: false
- Modifiers: Boolean Modifiers
- Interpolated: no
- Resolved at the position of the interaction
- Replaces Dimension Type ultrawarm field

#### minecraft:gameplay/bed_rule

Controls whether a Bed can be used to sleep, and whether it can be used to set a respawn point.

- Value type: object with fields
  - can_sleep: one of:
    - always - the Bed can always be used to sleep (assuming the Bed is not obstructed and there are no monsters nearby)
    - when_dark - the Bed can only be used to be sleep when the global skylight level is less than 4
    - never - the Bed can never be used to sleep
  - can_set_spawn - same as can_sleep
  - explodes - optional boolean, if true the Bed will explode when interacted with
    - Default: false
  - error_message: optional Text Component, the message to show if the player is unable to sleep or set their spawn
- Default value: {type:"can_sleep_when_dark",error_message:{translate:"block.minecraft.bed.no_sleep"}}
- Modifiers: override
- Interpolated: no
- Resolved at the head position of the Bed block
- Replaces Dimension Type bed_works field

#### minecraft:gameplay/respawn_anchor_works

Controls whether Respawn Anchors can be used to set spawn (or respawn). If false, the Respawn Anchor will explode once charged.

- Value type: boolean
- Default value: false
- Modifiers: Boolean Modifiers
- Interpolated: no
- Resolved at the position of the Respawn Anchor block
- Replaces Dimension Type respawn_anchor_works field

#### minecraft:gameplay/nether_portal_spawns_piglin

Controls whether Nether Portal blocks can spawn Piglins.

- Value type: boolean
- Default value: false
- Modifiers: Boolean Modifiers
- Interpolated: no
- Resolved at the position of a random Nether Portal block
- Replaces Dimension Type natural field

#### minecraft:gameplay/fast_lava

Controls whether Lava should spread faster and further, as well as have a stronger pushing force on entities when flowing.

- Value type: boolean
- Default value: false
- Modifiers: Boolean Modifiers
- Interpolated: no
- Resolved for a whole dimension (cannot be specified on a Biome)
- Replaces Dimension Type ultrawarm field

#### minecraft:gameplay/increased_fire_burnout

Controls whether Fire blocks burn out more rapidly than normal.

- Value type: boolean
- Default value: false
- Modifiers: Boolean Modifiers
- Interpolated: no
- Resolved at the position of the burning Fire block
- Replaces \#increased_fire_burnout Biome Tag

#### minecraft:gameplay/piglins_zombify

Controls whether Piglins and Hoglins should zombify.

- Value type: boolean
- Default value: true
- Modifiers: Boolean Modifiers
- Interpolated: no
- Resolved at the position of the zombifying entity
- Replaces Dimension Type piglin_safe field

#### minecraft:gameplay/snow_golem_melts

Controls whether a Snow Golem should be damaged.

- Value type: boolean
- Default value: false
- Modifiers: Boolean Modifiers
- Interpolated: no
- Resolved at the position of the Snow Golem
- Replaces \#snow_golem_melts Biome Tag

#### Dimension Types

- Added new attributes field for dimensions to specify Environment Attributes
  - Refer to the Environment Attributes section for information about the format of this field
- Many fields have been migrated to Environment Attributes:
  - Note: the form of these attributes may not be identical to the original fields
  - ultrawarm -\> minecraft:gameplay/water_evaporates, minecraft:gameplay/fast_lava, visual/default_dripstone_particle
  - bed_works -\> minecraft:gameplay/bed_rule
  - respawn_anchor_works -\> minecraft:gameplay/respawn_anchor_works
  - cloud_height -\> minecraft:visual/cloud_height
  - piglin_safe -\> minecraft:gameplay/piglins_zombify
  - has_raids -\> minecraft:gameplay/can_start_raid
  - natural (note: not removed) -\> minecraft:gameplay/nether_portal_spawns_piglin

#### Biomes

- Added new attributes field for biomes to specify Environment Attributes
  - Refer to the Environment Attributes section for information about the format of this field
  - Note: certain attributes, such as gameplay/fast_lava are not evaluated positionally and thus cannot be set on a Biome
- Many subfields under effects have been migrated to Environment Attributes:
  - Note: the form of these attributes may not be identical to the original fields
  - fog_color -\> minecraft:visual/fog_color
  - water_fog_color -\> minecraft:visual/water_fog_color
  - sky_color -\> minecraft:visual/sky_color
  - particle -\> minecraft:visual/ambient_particles
  - ambient_sound, mood_sound, additions_sound -\> minecraft:audio/ambient_sounds
  - music -\> minecraft:audio/background_music
  - music_volume -\> minecraft:audio/music_volume

### Item Components

#### minecraft:kinetic_weapon

- Added new field:
  - contact_cooldown_ticks: integer, the cooldown in ticks after hitting, and loosing contact with an entity before being able to hit it again
    - Default value: 10

#### Biome Tags

- Removed \#snow_golem_melts and \#increased_fire_burnout - replaced by gameplay/snow_golem_melts and gameplay/increased_fire_burnout Environment Attributes
- Removed \#plays_underwater_music - replaced by only_underwater field in the audio/background_music Environment Attribute
- Removed \#has_closer_water_fog - replaced by visual/water_fog_radius Environment Attribute

## Resource Pack Version 70.1

### Sounds

- Added new sound events for the Nautilus:
  - entity.nautilus.riding

 

## Fixed bugs in 25w42a

- [MC-263562](https://bugs.mojang.com/browse/MC-263562) - World types in Realms backup info screen are untranslatable
- [MC-298405](https://bugs.mojang.com/browse/MC-298405) - Text components in the "label" of input controls in dialogs don't support "hover_event"
- [MC-299876](https://bugs.mojang.com/browse/MC-299876) - Labels for booleans within dialogs are rendered in a slightly different shade of white than normal
- [MC-301271](https://bugs.mojang.com/browse/MC-301271) - Object text components do not render in some places unless there are text glyphs on the same line
- [MC-301518](https://bugs.mojang.com/browse/MC-301518) - The mouse cursor doesn’t change to the hand shape when hovering over checkboxes
- [MC-301520](https://bugs.mojang.com/browse/MC-301520) - The mouse cursor doesn’t change to the hand shape when hovering over the difficulty lock button
- [MC-301557](https://bugs.mojang.com/browse/MC-301557) - The shading direction of the bolts on single and large copper chests does not match
- [MC-301879](https://bugs.mojang.com/browse/MC-301879) - Double weathered and waxed weathered copper chests' bottom texture looks off compared to the other variants
- [MC-302071](https://bugs.mojang.com/browse/MC-302071) - Single and double copper chests have inconsistent side textures
- [MC-302246](https://bugs.mojang.com/browse/MC-302246) - Sprite object component does not render in server list depending on component tree
- [MC-302409](https://bugs.mojang.com/browse/MC-302409) - Lightning that strikes waxed lightning rods do not deoxidize nearby unwaxed copper blocks
- [MC-302656](https://bugs.mojang.com/browse/MC-302656) - Skeleton horses burn in the sunlight
- [MC-302657](https://bugs.mojang.com/browse/MC-302657) - The "subtitles.entity.nautilus.eat" string misspells the word “Nautilus” as “Nauilus”
- [MC-302664](https://bugs.mojang.com/browse/MC-302664) - Piglins aren't attracted to golden nautilus armor
- [MC-302672](https://bugs.mojang.com/browse/MC-302672) - "Invalid player data" error when loading a world in which you have an effect applied
- [MC-302680](https://bugs.mojang.com/browse/MC-302680) - Zombie horses and zombie nautiluses cannot be spawned in Peaceful difficulty
- [MC-302683](https://bugs.mojang.com/browse/MC-302683) - The "Confirm Command Execution" dialog is popped up for commands with a permission level of 0
- [MC-302729](https://bugs.mojang.com/browse/MC-302729) - Blast furnaces do not smelt nautilus armor
- [MC-302732](https://bugs.mojang.com/browse/MC-302732) - Performing a charge attack with a spear in your off hand applies the effects from the enchantments present on the item held in the main hand
- [MC-302743](https://bugs.mojang.com/browse/MC-302743) - Repeatedly using a spear keeps performing charge attacks every 10 ticks
- [MC-302767](https://bugs.mojang.com/browse/MC-302767) - Holding a spear in Spectator mode and performing a jab attack plays the jab sound
- [MC-302783](https://bugs.mojang.com/browse/MC-302783) - Baby nautiluses use \#minecraft:nautilus_taming_items instead of \#minecraft:nautilus_food for growing up
- [MC-302802](https://bugs.mojang.com/browse/MC-302802) - Spear charge attack breaks item frames when still
- [MC-302813](https://bugs.mojang.com/browse/MC-302813) - Zombified piglins no longer appear to sprint or make any angry noises when angry
- [MC-302816](https://bugs.mojang.com/browse/MC-302816) - When running NBT to SNBT conversion, the program waits for 1 minute after completion
- [MC-302817](https://bugs.mojang.com/browse/MC-302817) - Spears with Fire Aspect can ignite victims even when the attacks are blocked
- [MC-302818](https://bugs.mojang.com/browse/MC-302818) - Zombie horsemen can occasionally spawn holding something other than an iron spear
- [MC-302827](https://bugs.mojang.com/browse/MC-302827) - Spears can jab through walls
- [MC-302834](https://bugs.mojang.com/browse/MC-302834) - Wolves' eyes don't turn red when angry
- [MC-302838](https://bugs.mojang.com/browse/MC-302838) - Extreme TPS lag when using high Lunge levels with Unbreaking
- [MC-302842](https://bugs.mojang.com/browse/MC-302842) - Nautiluses and zombie nautiluses never despawn
- [MC-302920](https://bugs.mojang.com/browse/MC-302920) - "scoreboard players display" settings sometimes reset on world load
- [MC-302924](https://bugs.mojang.com/browse/MC-302924) - Players can no longer be invited to realms
- [MC-302984](https://bugs.mojang.com/browse/MC-302984) - Holding a spear in the off hand and attacking an entity adds the spear's attack damage to the attack
- [MC-302988](https://bugs.mojang.com/browse/MC-302988) - Bees no longer get angry at players or mobs
- [MC-303083](https://bugs.mojang.com/browse/MC-303083) - Searching in the resource/data pack selection screens doesn't properly scroll to the results
- [MC-303089](https://bugs.mojang.com/browse/MC-303089) - Level 3 operators cannot use client-side operator features

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/d9c6cfd4ba84f5080206259d2563f75796f14470/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
