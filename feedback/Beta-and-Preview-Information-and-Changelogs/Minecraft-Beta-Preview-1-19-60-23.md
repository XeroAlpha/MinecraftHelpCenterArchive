---
title: Minecraft Beta & Preview - 1.19.60.23
date: 2022-12-07T16:11:52Z
updated: 2022-12-08T09:32:40Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/11259038367245-Minecraft-Beta-Preview-1-19-60-23
---

**Posted:** 7 December, 2022

**NOTE:** ~~This week\'s Preview version is not available on iOS. We apologize for the inconvenience and are working to resolve the issue.~~ **Update:** We are now unblocked and hoping to release the Preview on iOS as well.

**Information on the Minecraft Preview and Beta: **

-   These work-in-progress versions can be unstable and may not be representative of final version quality
-   Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](http://aka.ms/PreviewFAQ)
-   The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A Minecraft screenshot featuring chiseled bookshelves and camels.](https://feedback.minecraft.net/hc/article_attachments/11258984583053)

Here\'s a list of what is new in this week\'s Minecraft Preview and Beta! Remember to send us all your feedback at [aka.ms/MC120Feedback](https://aka.ms/MC120Feedback) and report any bugs to [bugs.mojang.com](http://bugs.mojang.com/).\
\

# **Experimental Features**

## **Gameplay**

-   Chiseled Bookshelf no longer triggers Observer blocks on world load

# **Features and Bug Fixes**

## **Blocks**

-   Respawn Anchor no longer retains its charges if mined with Silk Touch or picked ([MCPE-145682](https://bugs.mojang.com/browse/MCPE-145682))
-   Scaffolding now displays particles and produces vibrations when the block under it is destroyed ([MCPE-163738](https://bugs.mojang.com/browse/MCPE-163738))
-   The Sculk Shrieker block\'s shriek sound can now be heard at the longer distance of 32 blocks ([MCPE-163989](https://bugs.mojang.com/browse/MCPE-163989))

## **Gameplay**

-   Bamboo sapling will no longer replace double plants when placed ([MCPE-99806](https://bugs.mojang.com/browse/MCPE-99806))
-   Campfires do not set players and mobs on fire anymore, but still inflict damage ([MCPE-98931)](https://bugs.mojang.com/browse/MCPE-98931)
-   Campfires do not destroy Minecarts and Boats anymore ([MCPE-109489](https://bugs.mojang.com/browse/MCPE-109489))
-   Ender Pearls will no longer teleport a sleeping player ([MCPE-161189](https://bugs.mojang.com/browse/MCPE-161189))

## **Graphical**

-   Players can no longer see through terrain by riding a Horse, Mule, or Donkey at the edge of a 2-block-tall space ([MCPE-133984](https://bugs.mojang.com/browse/MCPE-133984))

## **Items**

-   Blocks that require supporting blocks now appear properly on a Map when placed on partial blocks or above air ([MCPE-159713](https://bugs.mojang.com/browse/MCPE-159713))

## **Mobs**

-   Ravagers are now able to attack on various partial blocks like Mud ([MCPE-162483](https://bugs.mojang.com/browse/MCPE-162483))
-   Glow Squid now emit particles when spawned outside of water

## **User Interface**

-   Fixed structure block UI so the Y value field can be accessed with just the keyboard ([MCPE-164148](https://bugs.mojang.com/browse/MCPE-164148))

# **Technical Updates**

## **Components**

-   Expanded \"minecraft:shooter\" component to define multiple projectiles that can specify different projectile definitions and condition filters
-   Exposed more fields to shooter component to allow for more projectile customization such as throw power, sounds, and whether the attack is a magic attack

## **Molang**

-   Fixed a bug where dividing any value in Molang by a dynamically determined negative variable resulted in a division by a positive (absolute) value instead
    -   This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min_engine_version of 1.19.60 or higher

## **Projectile**

### **Component**

-   Projectiles that teleport their owner will no longer do so while their owner is sleeping ([MCPE-161189](https://bugs.mojang.com/browse/MCPE-161189))

## **API (Experimental)**

-   Added method setOnFire(seconds: number, useEffects?: boolean = true): boolean)which sets an entity on fire (if it is not in water or rain).
-   Added method extinguishFire(useEffects?: boolean = true): void which extinguishes the fire.
-   If an entity is on fire, you can call getComponent(\'minecraft:onfire\')on it, which returns an object of type EntityOnFireComponent, which has a property onFireTicksRemaining.
-   Fixed a bug where viewDirectionwould return the direction from the previous tick
-   Fixed a bug where getEntitiesFromViewDirectionwould use the direction from the previous tick
-   Fixed a bug where getBlockFromViewDirectionwould use the direction from the previous tick
-   Fixed a bug where headLocationwould return the location from the previous tick
-   Renamed ScriptScriptCommandMessageEvent to ScriptEventCommandMessageEvent
