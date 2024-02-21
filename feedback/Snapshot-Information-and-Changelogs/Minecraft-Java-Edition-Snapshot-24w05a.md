---
title: "Minecraft: Java Edition - Snapshot 24w05a"
date: 2024-01-31T16:21:43Z
updated: 2024-01-31T16:22:53Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/23691791633677-Minecraft-Java-Edition-Snapshot-24w05a
hash:
  h_01HNG55VMZXXG0KEKNCB8QMN2J: technical-changes
  h_01HNG55VMZA7NEAT0WDG8AX25H: region-file-compression-algorithm
  h_01HNG55VMZ81W9BHAWYQ46MDSS: reserved-compression-id-for-third-party-servers
  h_01HNG55VMZMVTQCSYH93C5A8BR: data-pack-version-30
  h_01HNG55VN0R8MJ0ZJMYWY7SNB9: resource-pack-version-25
  h_01HNG55VN08NYAGKQW223W99DW: experimental-features
  h_01HNG55VN0KZZ07JHMW55E2HKR: vault
  h_01HNG55VN003VE3VVS2X8P9E3S: trial-key
  h_01HNG55VN0DDPWTPXH7RPED9VT: fixed-bugs-in-snapshot-24w05a
  h_01HNG55VN0P4AHZE1R3J608NN7: get-the-snapshot
---

Hi everyone! We're back with yet another snapshot for 1.20.5, which includes a collection of technical changes, bug fixes and a new experimental feature for Trial Chambers, the Vault Block!

We're very interested in hearing your feedback on this new feature over at the feedback site: [Let's talk about Vaults!](https://aka.ms/mcvaultsfeedback)

Happy looting!

## TECHNICAL CHANGES

- The Data Pack version is now 30
- The Resource Pack version is now 25
- Added a reserved region file compression id for third-party servers to use for custom compression implementations
- Added an option to not compress region files
- Allowed server operators to view dedicated server TPS debug chart

### REGION FILE COMPRESSION ALGORITHM

- Added a third value to the dedicated server configuration property region-file-compression:
  - none does not compress the data. Consumes significantly more space and requires significant time to read and write, even though CPU is used less. Might make sense together with filesystem level compression

### RESERVED COMPRESSION ID FOR THIRD-PARTY SERVERS

- Compression id 127 can now be used for custom implementations of region file compression
- When used, the version id must be followed by a namespaced string representing the custom algorithm used

## DATA PACK VERSION 30

- Potion effects stored in items or entities will no longer encode their default values
  - amplifier: 0
  - duration: 0
  - ambient: false
  - show_particles: true
- Added body_armor_item and body_armor_drop_chance to all entities that currently have HandItems and ArmorItems, and handle the same way as HandItems and ArmorItems
- Handling of Horses ArmorItem, Llamas DecorItem, and Wolf's armor has been changed to use body_armod_item and body_armor_drop_chance instead
- In commands, removed horse.armor slot argument, and added instead armor.body slot argument, applicable now to all mobs
- Added vault_connection particle
- Added Vault block with a variety of NBT elements which can be configured for custom content
  - config
    - loot_table The loot table that will be ejected upon being unlocked
      - Default value: "minecraft:chests/trial_chambers/reward"
    - activation_range The range any player who hasn't unlocked the Vault must be within for it to open its keyhole
      - Default value: 4
    - deactivation_range The range all viable players must be outside of for the Vault to close its keyhole
      - Default value: 4.5
    - key_item An itemstack that is required to unlock the Vault
      - NBT and stack count is used for comparison
      - Default value: "minecraft:trial_key"
    - override_loot_table_to_display An optional loot table which will be used for displaying items inside the cage instead of results from the config's loot_table
      - Default value: No value
  - shared_data
    - connected_particles_range The range players who have not unlocked the Vault must be within before particles will flow from them
      - Default value: 4.5

## RESOURCE PACK VERSION 25

- The unused attributes array in core shader definitions has been removed
- The unused position_color_normal and position_tex_lightmap_color shaders have been removed
- The position_tex_color_normal shader (only used by clouds) has been replaced by rendertype_clouds
- The IViewRotMat uniform has been removed, and the Position attribute for entities is now in (camera relative) world space
- Light direction uniforms are no longer premultiplied by the view matrix
- Added texture and model files for Vault block
- Changed texture for the Trial Key item
- Added texture and particle file for vault_connection particle

## EXPERIMENTAL FEATURES

- Added Vault block

### VAULT

- A block that holds locked treasure and loot - find the right key to eject its rewards
  - Found throughout Trial Chambers, containing the structures' most valuable loot
  - Vaults in Trial Chambers require a Trial Key to be unlocked
- Can be unlocked by an unlimited amount of players
  - After a player has unlocked a Vault, they cannot unlock that Vault again
  - If a player has not unlocked that Vault before, an orange stream of particles will flow from the player to the Vault when nearby
- Has a keyhole that will be open or closed depending on the players nearby
  - If any nearby player has not unlocked that Vault, the keyhole will be open
  - If all nearby players have unlocked that Vault, the keyhole will be closed
- Within its cage, it will cycle through and display items which are possible to eject from its loot table
- The rewards it ejects are randomized from its loot table each time it is unlocked
- Cannot be crafted or obtained in Survival, and does not drop anything when mined
- Explosion-resistant and cannot be moved
- Vaults currently reuse the same loot table that reward chests previously used in the Trial Chambers
  - This loot table is temporary and will be completely revised as development continues

### TRIAL KEY

- Updated texture to reflect new Vault visuals

## FIXED BUGS IN SNAPSHOT 24W05A

- [MC-225170](https://bugs.mojang.com/browse/MC-225170) - Normal matrix scaling broken in some situations
- [MC-260099](https://bugs.mojang.com/browse/MC-260099) - Sniffer's snout shading changes during sniffing
- [MC-264821](https://bugs.mojang.com/browse/MC-264821) - The fog on armor worn by entities occurs too early
- [MC-267922](https://bugs.mojang.com/browse/MC-267922) - Wolf armor loses custom display name and other NBT when equipped

## GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/cc0f01e6406fa8a2b50c3c06edef74e7a7bf74de/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.21 features, head over to the dedicated [Feedback site category](https://aka.ms/Minecraft121Feedback). You can also leave any other feedback on the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
