---
title: Minecraft Beta & Preview - 1.20.80.21
date: 2024-03-05T15:55:21Z
updated: 2024-03-06T19:20:07Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/24711734982925-Minecraft-Beta-Preview-1-20-80-21
hash:
  h_01HR7NSGAC7JJ79SN8D52J82GC: graphical
  h_01HR7NSGACJ1BJ2AHSVV07K8NX: mobs
  h_01HR7NSGACVDC7R093KRNE5GH8: realms
  h_01HR7NSGAC5AEAZ1KAYA4Q8HB8: structures
  h_01HR7NSGADV42X7TXV10J0631E: user-interface
  01HR7P8XG5D38RRCE61G0GR48A: wind-charge
  01HR7PCGYQQJQABDWR4DYXG6EC: bogged
  01HR7PCMXCS9M9KW8HM10VQG5Z: trial-chambers
  01HR7PEAFE41047NTAR5ZNHDA2: api
  01HR7PEE3WF9Q14MV5623KK1M2: editor
  01HR7PMTAPK9Z18CKE6A1H05KN: graphical-1
  01HR7PN04D3WVSDGFHDXXBZQY5: commands
  01HR7PN6R4ESFJQZXRJKC5CVPQ: api-1
---

**Posted:** March 6, 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation 4, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

The latest Bedrock Preview just released and there's quite a few changes to test out! You'll now find brand new Wolves roaming the Overworld, Wind Charge improvements, and the Bogged has received an updated look. Your thoughts and comments continue to help shape these game updates so please let us know what you think at [feedback.minecraft.net](https://feedback.minecraft.net/) and report any bugs you find on [bugs.mojang.com](https://bugs.mojang.com/).  
  

**Features and Bug Fixes:**

**Wolf Variants**

Eight new wolf variations have come to Minecraft! Read about each one in this [paw-some article](https://www.minecraft.net/article/new-minecraft-wolves).

![wolf-variants.png](https://feedback.minecraft.net/hc/article_attachments/24714447516173)

The variant is determined by the biome they spawn in:

- Pale Wolf - The familiar Wolf variant that now spawns in the Taiga biome, with a default pack size of 4
- Woods Wolf - A variant that spawns in the Forest biome. This will be the dominant Wolf variant that you will be able to find in the Overworld, since the Forest biome is very common
- Ashen Wolf - A variant that spawns in the Snowy Taiga biome
- Black Wolf - A variant that spawns in the Old Growth Pine Taiga biome, in smaller packs of 2 to 4
- Chestnut Wolf - A variant that spawns in the Old Growth Spruce Taiga biome, in smaller packs of 2 to 4
- Rusty Wolf - A variant that spawns in a new location for wolves - the Sparse Jungle biome, in smaller packs of 2 to 4
- Spotted Wolf - A variant that spawns in a new location for wolves - the Savanna Plateau biome, in larger packs of 4 to 8
- Striped Wolf - A variant that spawns in a new location for wolves, the Wooded Badlands biome, in larger packs of 4 to 8
- Snowy Wolf - A variant that spawns in the Grove biome. A rare type, that always walks alone

**Updated ‘Servers Tab’ Experience in Bedrock Preview**

The latest Bedrock Preview revamps the Server Tab in the Play Screen presenting Featured Servers and other servers you add. You will get to enjoy Featured Servers from our partners with exclusive environments, in a new visual style.

![Screenshot 2024-03-06 101529.png](https://feedback.minecraft.net/hc/article_attachments/24756432856845)

Some other features in this new design are the Server Activities and News. You will also be able to add and edit your own custom server (on PC and mobile), setting all the parameters needed to invite your friends and have an enjoyable experience!

**Gameplay**

- Buckets can once again pick up liquids immediately after being placed ([MCPE-176634](https://bugs.mojang.com/browse/MCPE-176634))
- Fixed a bug where guest players could not add trims to custom armor ([MCPE-170317](https://bugs.mojang.com/browse/MCPE-170317))

## **Graphical**

- Updated the missing tile texture to a dirt block with brown question mark
- The Lead item now renders correctly when the “Hide Hand” option is selected

## **Mobs**

- Wolves now correctly leap at their targets ([MCPE-19740](https://bugs.mojang.com/browse/MCPE-19740))
- Rabbits are now more likely to spawn in Groves than before
- Foxes are now less likely to spawn in Groves than before

## **Realms**

- Fixed an issue in the Stories opt in flow where a player could be soft locked
- Applied consistent grayed out behavior across all Stories screens for avatars of players opted out of Realms Stories
- Players are now redirected to the first Story page upon posting a new Story
- Selected screenshot will now be saved with story draft if you back out of the ‘Add Story’ page before posting
- Like/comment/option buttons widened to accommodate languages with longer words
- Fixed an issue where a user would be unable to see what they were typing if they typed more text than would fit in the textbox

## **Structures**

- Trail Ruins now generate correctly on 32 bit-devices ([MCPE-178549](https://bugs.mojang.com/browse/MCPE-178549))
- Trial Chambers now generate correctly on 32-bit devices ([MCPE-178885](https://bugs.mojang.com/browse/MCPE-178885))

## **User Interface**

- Fixed a bug that prevented recipes without unlock criteria from showing up in the recipe book
- On touch devices, item transfer animation is now rendered above static items
- Resolves issue where “Signing in…” text might not show on the main menu while sign in is actually in progress  
    

**Experimental Features:**

## **Wind Charge**

- Wind Charge damage has been reduced to 0.5 hearts per hit
- Dispensed Wind Charges now spawn centered
- Wind Charge knockback and power are now in parity with Java Edition ([MCPE-178892](https://bugs.mojang.com/browse/MCPE-178892))
- Player-shot Wind Charges now deal the same damage as the Breeze Wind Charge ([MCPE-178903](https://bugs.mojang.com/browse/MCPE-178903))
- Wind Charges no longer briefly blocks a player’s vision when thrown ([MCPE-178890](https://bugs.mojang.com/browse/MCPE-178890), [MCPE-178896](https://bugs.mojang.com/browse/MCPE-178896))
- Wind Charges now deal extra knockback to players who are crouching when thrown ([MCPE-178897](https://bugs.mojang.com/browse/MCPE-178897))
- Wind Charges are now centered horizontally to the crosshair when thrown vertically ([MCPE-178886](https://bugs.mojang.com/browse/MCPE-178886))

## **Bogged**

- The Bogged texture and model have been updated
- The Bogged now drops two Mushrooms (either both Red/Brown or one of each) when sheared

## **Trial Chambers**

- Trial Chambers will no longer generate through the edges of the dimension ([MCPE-176919](https://bugs.mojang.com/browse/MCPE-176919))  
    

**Technical Updates:**

## **API**

- Block Custom Components are temporarily removed as of 1.20.80.21 preview, but should be returning in an upcoming preview
- Dynamic imports (e.g., import("/my-module.js")) should be functional again
- *BlockTypes* will now return valid types for flattened or refactored block names
- EntityMountTamingComponent
  - Renamed *EntityMountTamingComponent* to *EntityTameMountComponent*
  - Renamed *setTamed* to *tame*
- Released *BlockComponentTypes* from *beta* to *1.10.0*
- Released *EntityComponentTypes* from *beta* to *1.10.0*
- Released *ItemComponentTypes* from *beta* to *1.10.0*

## **Editor**

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **\#BedrockEditor.**

Learn [how to use](https://aka.ms/LearnEditor) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples).

Fixes this week:

- Added a “Reload” button that allows for reloading of the UI when an Ore UI error occurs
- Line tool bar icon updated to correct design icon  
    

**Experimental Technical Updates:**

## **Graphical**

- Reduced the strength of saturation in the Deferred Technical Preview
- Fixed a crash that could occur when Point Light Shadows were turned on in the Deferred Technical Preview

## **Commands**

- Added item text, status effects, and absorption hearts to the hud command’s list of hud elements (Ex: /hud @s hide item_text)

## **API**

- EntityQueryOptions
  - Added field *propertyOptions?: EntityQueryPropertyOptions\[\];*
- EntityQueryPropertyOptions
  - Added field *exclude* - If exclude *propertyId*
  - Added field *propertyId* - Property ID
  - Added field *value* - Target value or comparison
- EqualsComparison
  - Added *equals*
- GreaterThanComparison
  - Added *greaterThan*
- GreaterThanOrEqualsComparison
  - Added *greaterThanOrEquals*
- LessThanComparison
  - Added *lessThan*
- LessThanOrEqualsComparison
  - Added *lessThanOrEquals*
- NotEqualsComparison
  - Added *notEquals*
- RangeComparison
  - Added *lowerBound* and *upperBound*
  - Moved *worldInitialize* from *beta* to *1.10.0*
- Moved *EntityProjectileComponent* from *beta* to *1.10.0*
- Removed old Vector Please use *Vector3Utils* *from* *@minecraft/math* as a replacement
- ModalFormData
  - Added *submitButton* method for setting the text of the form’s submit button
- Structure APIs
  - Added function *setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation, waterlogged?: boolean): void* - Sets the block permutation at a given location within the structure
- StructureManager 
  - Added function *saveToWorld(): void* - Persists the structure as part of the broader world storage
  - Added function *saveAs(identifier: string, saveMode?: StructureSaveMode): Structure* - Saves a copy of the structure with a new identifier
- EntityHitBlockAfterEvent
  - Added property *hitBlockPermutation* to *beta*
