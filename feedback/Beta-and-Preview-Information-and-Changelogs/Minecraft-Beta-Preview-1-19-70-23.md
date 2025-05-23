---
title: Minecraft Beta & Preview - 1.19.70.23
date: 2023-02-15T14:32:40Z
updated: 2023-02-15T16:15:28Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/13133616291981-Minecraft-Beta-Preview-1-19-70-23
---

**Posted:** 15 February, 2023

**NOTE:** This week's Android Beta version may be delayed. We apologize for the inconvenience and are working to resolve the issue.

**Information on the Minecraft Preview and Beta: **

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](http://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A Minecraft screenshot featuring the sniffer mob and flower, and items related to archaeology including decorated pots, set in front of a desert temple.](https://feedback.minecraft.net/hc/article_attachments/13133151223309)

Sniff sniff, brush brush. Two sounds that from this day forward will not only be associated with a balanced personal hygiene routine, but also two new features that are coming to Minecraft 1.20! The sniffer and archeology are two experimental features that you can try out in this week’s Minecraft Preview and Beta. What will you do first? Get to know the winner of Minecraft Live 2022’s Mob Vote or dive headfirst into suspicious sand? I will attempt to do both at once because I believe in the power of multitasking and showing off.

We are still working on the tech needed to add some other 1.20 features, such as the cherry blossom biome and armor trims to the Bedrock Edition Beta and Preview. Keep your eyes on [Minecraft.net](http://minecraft.net/) for the latest updates!  As always, you can send us all your feedback and ideas at [aka.ms/MC120Feedback](http://aka.ms/MC120Feedback) and report any bugs to [bugs.mojang.com](http://bugs.mojang.com/).  
  

# **Experimental Features**

### **Archaeology feature set:**

- Added the Brush item
- Added the Decorated Pot block
- Added four Pottery Shards (Arms Up, Skull, Prize, and Archer)
- Added the Suspicious Sand block
- Added Suspicious Sand to the Desert Temple
- Added Suspicious Sand to the Desert Well

### **Brush**

- The Brush is a craftable item you can use to brush things

### **Pottery Shards and Decorated Pots**

- Pottery Shards have pictures on them. They cannot be crafted and must be found in the world. Hint: you will need a Brush! By crafting four of these together you can create a Decorated Pot with a picture on each side.
- You can also use Brick items instead of Pottery Shards in the crafting recipe. The sides that were made from Brick items will not have pictures.
- Smash a Decorated Pot with any block-breaking tool to break it apart and get the Pottery Shards back! Or hit it with your fist to pick up the pot without breaking it.

### **Suspicious Sand**

- Desert Temples and Desert Wells now contain Suspicious Sand. This fragile block is hard to spot and easy to destroy, so be careful!
- If you manage to find the Suspicious Sand and brush it with your Brush, you will extract objects that were buried long ago.

### **Work in Progress**

- We're giving you an early look at these Archaeology features. We want to spend more time developing them. Please let us know where you think we can improve or expand!

## **Mobs**

### **Sniffer**

- Sniffer is now available as an experimental feature
  - The Sniffer is the mob vote winner of Minecraft Live 2022 and the first "ancient" mob added to the game
  - Sniffers cannot be tempted or tamed
  - Sniffers are passive friendly mobs
  - Sniffer sniffs in the air and occasionally dig for seeds
- Torchflower is now available as an experimental feature
  - The Torchflower seed can be planted on farmland and grows into a flower
  - The seed can be used to breed two Sniffers
  - The full-grown flower can be harvested and replanted but can also be crafted into a dye

# **Features and Bug Fixes**

## **Gameplay**

- Fixed a bug where an Allay holding a Lead wasn't able to be leashed unless the player held a full stack of 64 Leads in hand

### **Audio**

- Sounds from all Button types and Lever are now controlled by "Blocks" slider in Audio Settings ([MCPE-166420](https://bugs.mojang.com/browse/MCPE-166420))

### **Vanilla Parity**

- Fixed a bug where Hoppers would not pull in items after being unpowered from Redstone ([MCPE-166434](https://bugs.mojang.com/browse/MCPE-166434))
- Ghasts’ sound volume will now fade the further they are from the player ([MCPE-35222](https://bugs.mojang.com/browse/MCPE-35222))

## **General**

- The swap item animation now plays when switching hotbar items of the same type with the same durability

## **Graphical**

- The loading screen no longer flickers when entering the Nether in immersive VR mode

## **Items**

- Fixed loaded Crossbow staying loaded after shooting ([MCPE-166827](https://bugs.mojang.com/browse/MCPE-166827))

## **Mobs**

- Villagers will now emit anger particles when hit by a player outside of a village
- Horses cannot be pushed over Fences covered by Carpets anymore ([MCPE-164717](https://bugs.mojang.com/browse/MCPE-164717))
- When breeding horses, the baby horse now has a chance of being better than its parents in speed, jump strength, and health. This change is intended to make horse breeding a viable way of getting great horses, if a player starts with good parents and puts in enough time and Golden Carrots

## **User Interface**

- Fixed a bug where moving the player or camera with a controller while text-to-speech for UI was turned on would cause the narrator to say "X of Y"
- Fixed a bug where the Edit World screen couldn't be opened for a world if the corresponding world directory had a space in it ([MCPE-166763](https://bugs.mojang.com/browse/MCPE-166763))

# **Technical Updates**

# **Experimental Technical Features**

## **API**

### **BlockPermutation**

BlockPermutation has been significantly refactored! Every BlockPermutation now share a unique JavaScript handle so exact equality (===) will work for permutations that share exactly the same state values. We've also added utility methods that make interacting with permutations easier, which includes the removal of the *XBlockProperty* classes and now directly return properties *(boolean \| number \| string)* or a while collection of properties *( Record\<string, boolean \| number \| string\>)*.

- Added method *matches(blockName: string, properties?: BlockProperties): boolean*which is used to match a block with optional states against a BlockPermutation.
- Added method *withProperty(name: string, value: boolean \| number \| string): BlockPermutation;*which returns a new block permutation with a given property set to a specific value. Throws if the provided data cannot be resolved as a valid block permutation.
- Added *function static resolve(blockName: string, properties?: BlockProperties): BlockPermutation*which resolve a BlockPermutation from a block name and optional states. Throws if the provided data cannot be resolved as a valid block permutation.
- Updated methods *getProperty*and *getAllProperties* to return values directly instead of wrapped into class objects. Example code: Before:

*const blockPermutation = MinecraftBlockTypes.stoneSlab.createDefaultBlockPermutation();blockPermutation.getProperty(MinecraftBlockProperties.stoneSlabType).value = 'stone_brick';blockPermutation.getProperty(MinecraftBlockProperties.topSlotBit).value = true;  
  *

Now:

*const blockPermutation = BlockPermutation.resolve('minecraft:stone_slab', {    stone_slab_type: 'stone_brick',    top_slot_bit: true,});* 

### **BlockProperties**

Added new class to expose *BlockPropertyType*.

### **BlockPropertyType**

Added new class to track "definitional" data about block properties. This is how you can find which values are valid for each block property.

## **Blocks**

- Released block properties and permutations out of experimental in JSON formats 1.19.70 and higher
- Added a content warning when loading world with more than 65536 custom block permutations. Custom block permutation counts are logged in debug log
