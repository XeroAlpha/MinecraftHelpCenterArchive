---
title: Minecraft - 1.20.30 (Bedrock)
date: 2023-09-15T23:22:07Z
updated: 2023-09-29T09:34:13Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/19545277817357-Minecraft-1-20-30-Bedrock-
---

**Posted:** September 19, 2023

A new update has been released, bringing several changes to the game! Here are the highlights:

- Updated “You died” experience
- Players can now crawl under single block gaps
- A new "Recipe Unlocked" notification will now tell you when you've found a new crafting material
- Increased the amount of Diamond Ore found in the deepest parts of the world
- Adjustments to block destroy times and explosion resistance values
- Fixes to over 100 community reported issues

Your thoughts on the game continue to shape new updates so please upvote and report any new bugs at [bugs.mojang.com](https://bugs.mojang.com/) and leave us your feedback at [feedback.minecraft.net](https://feedback.minecraft.net/).  
  

# **New Features**

## **Updated “You Died” Experience**

Today we’re making some changes to the screen you see when you die in Minecraft. The camera now zooms out so it’s easier to see why you died, the hotbar is visible at all times, and you can change certain settings before respawning.

![you-died.png](https://feedback.minecraft.net/hc/article_attachments/19671519855117)

These changes are available to everyone, except if you have add-ons applied. Also, the screen has limited text formatting code support, so it might look a bit different. To use the old screen, go to Settings -\> Video, and turn off ‘New “You Died” Screen (Experimental)’.  
  
We’d love to hear what you think about this change! Please share your feedback with us [here](https://feedback.minecraft.net/hc/en-us/community/posts/19522618627981-Updated-You-Died-Experience).

## **Crawling**

- The Crawling experimental toggle has been removed and Crawling under 1 block gaps is now fully implemented into the game
- Updated the camera interpolation rate when crawling to match Java Edition ([MCPE-170841](https://bugs.mojang.com/browse/MCPE-170841))
- Fixed some scenarios where crawling was not correctly being triggered on the server ([MCPE-171225](https://bugs.mojang.com/browse/MCPE-171225))

## **Recipe Unlocking**

- Recipe Unlocking is no longer an Experimental Feature, but can still be turned on and off per world
- You can now enable Recipe Unlocking on the Create New World screen ([MCPE-172956](https://bugs.mojang.com/browse/MCPE-172956))
- The command for unlocking recipes has been updated. The autosuggestion to give a player a recipe now says "player: target" instead of "victim: target" ([MCPE-172402](https://bugs.mojang.com/browse/MCPE-172402))
- ‘Recipe unlocked’ message is no longer visible on the pause menu ([MCPE-171112](https://bugs.mojang.com/browse/MCPE-171112))
- Stained Glass Pane recipe now gets unlocked when obtaining any dyes ([MCPE-171118](https://bugs.mojang.com/browse/MCPE-171118))
- Recipes unlocked notification now fit text in different languages and no longer bleed out of the screen ([MCPE-171141](https://bugs.mojang.com/browse/MCPE-171141))
- Command line auto-complete has been added for recipe unlocking. Useful when you want to see what recipes you can unlock ([MCPE-171086](https://bugs.mojang.com/browse/MCPE-171086))
- The order of command inputs was changed to be the same as on Java Edition ([MCPE-171098](https://bugs.mojang.com/browse/MCPE-171098))
- Recipe Unlocking Game Rule
  - Added an optional game rule for limited crafting. The game rule is only relevant when recipe unlocking is enabled. When set to "true" it prevents players from crafting recipes they have not yet unlocked. It is off by default and can only be modified through the "/gamerule" command.

## **Recipe Book Search**

- The recipe book search has been updated when playing in Survival mode with the following changes:
  - The search will only match the beginning of any word in the item's name. For example, searching for "tor" will now show **Tor**ch and Redstone **Tor**ch but not Daylight Detec**tor**)
  - Search will now work better together with the Recipe Unlocking system - recipes that haven't been unlocked will show up in search results.
- This change will enable experienced players to find items they are looking for (even if it hasn't been unlocked yet) while not overwhelming new players with recipes they aren't yet ready for.
- These changes are planned for both Bedrock and Java Edition, but they are still being tweaked and we definitely want to hear your feedback! Send us your thoughts at [aka.ms/MinecraftRecipeSearch](https://aka.ms/MinecraftRecipeSearch)

## **Sleeping Percentage Gamerule**

- Added the ‘playerssleepingpercentage’ gamerule, allowing night to be skipped when the specified percent of players logged into a world are sleeping ([MCPE-114425](https://bugs.mojang.com/browse/MCPE-114425))
  - A zero or a negative value will only require one player to sleep to skip the night
  - When set to over 100, the night cannot be skipped  
      

# **Vanilla Parity**

## **Block Breaking**

- We have adjusted the breaking times of 188 blocks to match Java Edition and our intended design. Some blocks couldn't be changed yet for technical reasons and Obsidian was left unchanged because we're still deciding what breaking speed it should have. Bringing more blocks to parity makes it easier for our team to keep both versions up to date. We also hope it will be easier for the community to make and share guides that work for all players on all platforms.
  - The full list of block breaking times and changes can be found at the very end of this changelog

## **Gameplay**

- Wandering Trader now trades Cherry Saplings ([MCPE-171521](https://bugs.mojang.com/browse/MCPE-171521))
- Villagers are now prevented from gaining a profession when sleeping ([MCPE-81790](https://bugs.mojang.com/browse/MCPE-81790))
- Fixed an issue where beginning to swim while hitting the sneak button could cause the sneak button to be held down until swimming ends ([MCPE-130070](https://bugs.mojang.com/browse/MCPE-130070))
- Potions are no longer thrown backwards when looking up ([MCPE-138995](https://bugs.mojang.com/browse/MCPE-138995))
- Formation of ice and snow is now controlled by random tick
- Fence Gate icon model in UI and Item Frames now match the Fence Gate Block ([MCPE-44296](https://bugs.mojang.com/browse/MCPE-44296 "https://bugs.mojang.com/browse/MCPE-44296"))
- Pillager Outposts can now generate in Cherry Grove biomes ([MCPE-173323](https://bugs.mojang.com/browse/MCPE-173323 "https://bugs.mojang.com/browse/MCPE-173323"))
- Fixed a bug that caused the Raid boss bar to automatically deplete to zero when a village was defeated ([MCPE-161438](https://bugs.mojang.com/browse/MCPE-161438))
- Witches now throw healing and regeneration potions at raiders during village raids

## **Blocks**

- Fixed a bug that caused players to not be able to crawl under Slabs when standing on Top Snow ([MCPE-170994](https://bugs.mojang.com/browse/MCPE-170994))
- Top Snow is now in parity with Java Edition and each layer has a different height ([MCPE-60024](https://bugs.mojang.com/browse/MCPE-60024))
- Tweaked Shulker Box Redstone signals to match parity with Java Edition
- Fence Gate icon model in UI and Item Frames now match the Fence Gate Block ([MCPE-44296](https://bugs.mojang.com/browse/MCPE-44296 "https://bugs.mojang.com/browse/MCPE-44296"))

## **Audio**

- Missing Thorns damage sound has been added, and is played when appropriate ([MCPE-37335](https://bugs.mojang.com/browse/MCPE-37335))
- Anvils now emit the proper sounds when broken, stepped on, fallen onto, etc. ([MCPE-33286](https://bugs.mojang.com/browse/MCPE-33286))
- Skeletons and Drowned now play sounds when firing Arrows and Tridents, respectively ([MCPE-50609](https://bugs.mojang.com/browse/MCPE-50609))
- Trident Channeling sound is now played when entities are hit ([MCPE-43402](https://bugs.mojang.com/browse/MCPE-43402))
- Empty Maps now emit the appropriate sound when players draw them
- Nether Portals now emit the Glass breaking sound when their Obsidian frame is broken ([MCPE-94722](https://bugs.mojang.com/browse/MCPE-94722))
- Loyalty Tridents returning to players now play their sound at the player's position ([MCPE-43831](https://bugs.mojang.com/browse/MCPE-43831))
- Big Dripleaf Blocks now play the correct sound when their tilt is reset ([MCPE-123488](https://bugs.mojang.com/browse/MCPE-123488))
- Conduits now play their deactivation sound when deactivated ([MCPE-128117](https://bugs.mojang.com/browse/MCPE-128117))
- Respawn Anchor Blocks now correctly play their ambient sounds ([MCPE-136484](https://bugs.mojang.com/browse/MCPE-136484))
- Pigs now emit sounds when transformed into Zombified Piglins ([MCPE-169557](https://bugs.mojang.com/browse/MCPE-169557 "https://bugs.mojang.com/browse/MCPE-169557"))
- Using Shears to carve Pumpkins now produces a carving sound like in Java Edition
- Hoglins now have their own sound when transforming into Zoglins ([MCPE-87379](https://bugs.mojang.com/browse/MCPE-87379 "https://bugs.mojang.com/browse/MCPE-87379"))
- Sound is now consistently played when an item is dropped into Lava ([MCPE-96015](https://bugs.mojang.com/browse/MCPE-96015 "https://bugs.mojang.com/browse/MCPE-96015"))
- Sound is no longer played sometimes when Netherite items are dropped into Lava ([MCPE-95872](https://bugs.mojang.com/browse/MCPE-95872 "https://bugs.mojang.com/browse/MCPE-95872"))
- Snow Golems now play a sound when they throw Snowballs ([MCPE-119083](https://bugs.mojang.com/browse/MCPE-119083 "https://bugs.mojang.com/browse/MCPE-119083"))
- Husks now play sounds when converting to Zombies underwater
- Player entities now play the appropriate sounds when entering/exiting water ([MCPE-132511](https://bugs.mojang.com/browse/MCPE-132511))  
    

# **Experimental Features**

## **Experimental Trade Changes**

- This update includes experimental changes to the Wandering Trader and Librarian Villager trades. You must turn on this experiment in the Experiments Menu if you want to test the new trades.
- We are trying out these changes to rebalance the villager trade system and make it more fair and fun for everyone. However, these changes are not yet final, and they will stay as experimental features while we continue to work on them. We still need your feedback to help us improve and decide, so please continue to let us know what you think of the new trades, what you like and dislike, and what suggestions you have at [aka.ms/VillagerTradingFeedback](http://aka.ms/VillagerTradingFeedback).

## **Librarian**

- Before these changes, players could get any Village enchantment from any Librarian. A novice Librarian could sell the best enchantment in the game! For some players, this felt too random and made trading feel overpowered when compared to using the Enchanting Table or searching for Enchanted Books in structures.
- With the new rules, Librarians from different biomes sell different enchantments. Master Librarians are guaranteed to have a special enchantment which is different in each Village biome.
- Players will have to work towards getting the best trades instead of relying on random chance. We hope this makes Librarian trading more interesting and skilful, while also revealing some clues about their history of each Village type through the enchantments that are sold there.
- Librarians from different biomes now sell different Enchanted Books
- Master Librarians with full XP are guaranteed to sell a special enchantment, which is different in each Village biome
- This means that players must visit all seven Village biomes to get the full set of Villager enchantments
- There are two secret Village biomes where Villages do not generate
  - A player must build these Villages to access their trades!
- Some enchantments have been removed from Village trading and must be found in other ways

## **Wandering Trader**

- Some players felt that the Wandering Trader had unfair prices and didn't sell many useful items. We have lowered their prices, added more trades, and increased the amounts available. The Wandering Trader will also now buy useful items from players, so it's possible to help them on their journey by giving them supplies even if you don't feel like buying anything.
- As this is an experiment, we would really appreciate your feedback as work continues and to help us decide on the future direction for Villager trades!
- Wandering Traders now have lower prices and have a higher amount of each item in stock
- Wandering Traders now sell Logs
- Wandering Traders can now buy many items, instead of only selling  
    

# **Fixes and Changes**

## **Diamond Ore Distribution**

- Increased the amount of Diamond Ore found in the deepest parts of the world. Our goal is to make it more rewarding to mine for Diamonds in the Deepslate layers

## **Performance and Stability**

- Fixed a crash when entering a world with a corrupted saved chunk ([MCPE-164634](https://bugs.mojang.com/browse/MCPE-164634))
- Fixed a crash that could occur when the game lost focus while entering a world
- Addressed ‘Out of Storage’ errors and texture corruption on Xbox in large worlds ([MCPE-163050](https://bugs.mojang.com/browse/MCPE-163050))
- Fixed missing low disk space warning on Xbox
- Fixed an issue with Local Network games not connecting in certain circumstances on Nintendo Switch
- Fixed server becoming unresponsive when players were surrounded by Ghasts stuck in lava columns ([MCPE-119093](https://bugs.mojang.com/browse/MCPE-119093))
- Placing one item of an item stack into a full stack of the same item no longer causes the game to crash
- The game no longer crashes due to running out of rendering resources while entering a world through the End Portal back to the Overworld ([MCPE-139021](https://bugs.mojang.com/browse/MCPE-139021 "https://bugs.mojang.com/browse/MCPE-139021"))
- Fixed worlds downloaded from Realms not loading packs correctly

## **Gameplay**

- Improved mouse input to be more responsive when used on Xbox ([MCPE-163671](https://bugs.mojang.com/browse/MCPE-163671))
- Breath meter now refills when swimming with head above water ([MCPE-170969](https://bugs.mojang.com/browse/MCPE-170969))
- The third-person camera will no longer clip through terrain when near Water or Lava
- Fixed Creative Mode players not being ignited when standing in fire
- The player no longer gets forced into sneak or crawl in Spectator Mode ([MCPE-170907](https://bugs.mojang.com/browse/MCPE-170907))
- The player now gets forced out of sneak/crawl when riding ([MCPE-170870](https://bugs.mojang.com/browse/MCPE-170870))
- The player no longer gets forced into sneak or crawl during the Riptide animation
- Entering flight mode in Creative Mode will now correctly cancel Elytra gliding ([MCPE-171797](https://bugs.mojang.com/browse/MCPE-171797))
- Projectiles now sink into Top Snow just like mobs do
- Third-person camera now passes through Glass, Glass Panes, and Iron Bars ([MCPE-85429](https://bugs.mojang.com/browse/MCPE-85429))
- Third person camera no longer clips through Snow, Mud, and Soul Sand, preventing x-ray exploits ([MCPE-168854](https://bugs.mojang.com/browse/MCPE-168854))
- Players will no longer enter End Portals when sleeping in a bed immediately below the portals ([MCPE-165062](https://bugs.mojang.com/browse/MCPE-165062))
- The discount for curing a Zombie Villager no longer increases when the same Villager is reinfected and cured multiple times
- Players can now toggle flying when crawling or sneaking in Creative Mode
- Crouch-jumping while aiming forward and holding down the build button will no longer continue to build blocks upwards past where the player is aiming

## **Mobs**

- Wild Horses, Mules, and Donkeys can now be tempted using a Golden Apple/Carrot or Enchanted Apple. Llamas will be tempted by a player holding a Hay Bale ([MCPE-140814](https://bugs.mojang.com/browse/MCPE-140814))
- Zombie Villagers now show correct professions when infected ([MCPE-80924](https://bugs.mojang.com/browse/MCPE-80924))
- Villagers killed by players no longer drop items held in their hands
- Camels now play the same stepping sound when walking on Red Sand, Suspicious Sand, and Concrete Powder Blocks as they do when walking on regular Sand ([MCPE-163497](https://bugs.mojang.com/browse/MCPE-163497))
- Mobs can hold and pick up Illager Banner only in their main hand now ([MCPE-151745](https://bugs.mojang.com/browse/MCPE-151745))
- Dolphins, Camels, and Sniffers can now have Balloons attached
- The following mobs will now set their target on fire if the mob is on fire when attacking: Drowned, Husk, Zombie, and Zombified Villager ([MCPE-77746](https://bugs.mojang.com/browse/MCPE-77746))
- Fixed an issue with Parrots facing a different position than the player when the player is in a Boat

## **Blocks**

- Falling blocks will now break when falling onto a Boat
- Campfires within Trail Ruins are no longer lit by default ([MCPE-170033](https://bugs.mojang.com/browse/MCPE-170033))
- Pink Petals can now be fertilized by Dispensers ([MCPE-171560](https://bugs.mojang.com/browse/MCPE-171560))
- Shulker Boxes mined without a Pickaxe no longer take a long time to mine
- Falling blocks now break and drop their item when falling on a Cocoa Bean
- Calibrated Sculk Sensor's amethyst crystal now lights up alongside the rest of the block during its active phase ([MCPE-168813](https://bugs.mojang.com/browse/MCPE-168813)) ([MCPE-169953](https://bugs.mojang.com/browse/MCPE-169953))
- Hanging Signs placed with commands now have the proper hitbox ([MCPE-163456](https://bugs.mojang.com/browse/MCPE-163456))
- "stained_hardened_clay" block is now split into unique instances, namely "white_terracotta", "orange_terracotta", "magenta_terracotta", "light_blue_terracotta", "yellow_terracotta", "lime_terracotta", "pink_terracotta", "gray_terracotta", "light_gray_terracotta", "cyan_terracotta", "purple_terracotta", "blue_terracotta", "brown_terracotta", "green_terracotta", "red_terracotta", and "black_terracotta"
  - Commands will still work with "stained_hardened_clay", but "stained_hardened_clay" won't be suggested in the command prompt, rather the new names will
- Third person camera no longer phases through the lower part of the Composter ([MCPE-171213](https://bugs.mojang.com/browse/MCPE-171213))

## **Items**

- Suspicious Stew no longer shows up in the Creative inventory (a recent unintended change caused it to appear there)
- It is once again possible to use Bone Meal underwater on Sand, Dirt, Gravel, and Clay ([MCPE-171383](https://bugs.mojang.com/browse/MCPE-171383))
- Fixed held Maps not being centered when playing on narrow aspect ratio screens
- The correct broken state of the Elytra is rendered in Item Frames ([MCPE-19700](https://bugs.mojang.com/browse/MCPE-19700))
- Stonecutter no longer drops as an item when using the wrong tool ([MCPE-33950](https://bugs.mojang.com/browse/MCPE-33950))
- Pickaxe can now quickly mine Pistons and Sticky Pistons ([MCPE-62797](https://bugs.mojang.com/browse/MCPE-62797))
- Powering and unpowering a Redstone Repeater or Comparator no longer disrupts water flow ([MCPE-157055](https://bugs.mojang.com/browse/MCPE-157055))
- Crossbow loses durability when shooting, not when drawn ([MCPE-46490](https://bugs.mojang.com/browse/MCPE-46490))

## **Sculk Vibrations**

- Sculk Sensors and Sculk Shriekers no longer risk losing vibrations when receiving them around the simulation distance limit
- Vibrations are no longer produced when stopping the use of items while sneaking ([MCPE-171254](https://bugs.mojang.com/browse/MCPE-171254))
- Wardens now detect items hitting the ground ([MCPE-160889](https://bugs.mojang.com/browse/MCPE-160889))
- Sculk Sensors now send a signal to Sculk Shriekers when detecting items hitting the ground ([MCPE-161165](https://bugs.mojang.com/browse/MCPE-161165))
- Throwing an Eye of Ender now emits vibrations
- Minecarts now consistently emit vibrations when moving on Rails while empty
- Collecting Fish, Axolotls, and Tadpoles with Buckets now emits vibrations
- Cleaning items in Cauldrons now emits vibrations
- Dying Leather Armor in Cauldrons now emits vibrations
- Tipping Arrows in Cauldrons now emits vibrations
- Using Dyes to change Cauldrons' water color now emits vibrations
- Non-player actors now emit a vibration event when equipping Shields in their off-hand slot
- Collecting Fish, Axolotl, and Tadpoles with Buckets now emits vibrations at the right position
- Applying a Nametag now emits vibrations
- Evokers summoning Vexes or Fangs now emit vibrations
- Chickens laying eggs now emit vibrations
- Turtles and Frogs laying eggs now emit vibrations
- Using Bone Meal now emits vibrations
- Sculk Sensors and Sculk Shriekers no longer activate repeatedly when a projectile is stuck in them ([MCPE-172704](https://bugs.mojang.com/browse/MCPE-172704 "https://bugs.mojang.com/browse/MCPE-172704"))
- Chiseled Bookshelves now emit vibrations when Books are inserted into them using Hoppers ([MCPE-168887](https://bugs.mojang.com/browse/MCPE-168887 "https://bugs.mojang.com/browse/MCPE-168887"))
- Extinguishing fire now emits vibrations
- Mounting or dismounting a vehicle now emits vibrations
- Rabbits eating Carrot crops now emit vibrations
- Foxes eating Sweet Berry Bushes now emit vibrations
- Unequipping armor now emits vibrations at a different frequency than equipping it
- Placing a Banner now emits vibrations
- Placing a Bamboo Sapling now emits vibrations
- Placing a Mob Head now emits vibrations
- Placing a Lily Pad now emits vibrations
- Placing Frogspawn now emits vibrations
- Placing or adding Sea Pickles now emits vibrations
- Adding a Turtle Egg to already placed ones now emits vibrations of the same frequency as placing a block
- Destroying a Turtle Egg now always emits vibrations of the same frequency as destroying a block, regardless of how many Turtle Eggs are left
- Turtle Eggs cracking now emit vibrations

## **Realms**

- Fixed an issue which prevented some worlds from being downloaded from Realms on PlayStation 4
- Fixed a bug where repeatedly pressing 'Esc' in Realms settings could remove UI or turn the screen black ([REALMS-11388](https://bugs.mojang.com/browse/REALMS-11388))

## **Accessibility**

- Fixed an issue where screen narration would read Recipe Book folder items as the first item in the folder
- Screen narration now informs the user immediately after they change sliders and toggles
- Screen narration will now read the disconnected message in the game menu when opened without an internet connection
- Screen narrator will now read out the instruction text as well as the confirm button in the Safe Area menu

## **Touch Controls**

- Updated menu HUD icons for touch controls
- Fixed an issue where the sneak input while flying would not work correctly with interactable blocks ([MCPE-167043](https://bugs.mojang.com/browse/MCPE-167043))
- The functionality of long-pressing a crafting output slot on touch input has been returned to rapidly crafting single instances of the item in the output slot ([MCPE-169728](https://bugs.mojang.com/browse/MCPE-169728))
- The rate of item crafting when long-pressing a crafting output slot has been slowed to 4 items per second and the time needed to long-press before starting the rapid crafting functionality has been reduced to 700 ms

## **User Interface**

- Nametags are no longer completely invisible while sneaking with the player still visible ([MCPE-168789](https://bugs.mojang.com/browse/MCPE-168789))
- Pick Blocking a Decorated Pot will now produce the correct hover hint in the inventory ([MCPE-171800](https://bugs.mojang.com/browse/MCPE-171800))
- Moved "Sync Old Worlds" button to the Settings/Storage screen
- Changed Joystick Visibility option to a dropdown menu
- Changed Sneak option to a dropdown menu
- Added alerts for iOS players who have run out of disk space
- Fixed UI flickering on Nintendo Switch
- Banners' icons in hotbar and inventory are now properly displayed on Nintendo Switch ([MCPE-169928](https://bugs.mojang.com/browse/MCPE-169928))
- The Lapis Lazuli icon in the Enchantment Table now matches the one in the Smithing Table screen
- Large enchant labels in the Enchantment Table screen are no longer blocked by overlayed items in the inventory ([MCPE-154428](https://bugs.mojang.com/browse/MCPE-154428))
- Fixed various pixel scaling issues on the HUD screen
- Added three new user-friendly disconnection error messages and improved two others
- iOS only: Fixed a bug in multiline text edits where some text was sometimes deleted when typing after repositioning the caret with spacebar ([MCPE-166152](https://bugs.mojang.com/browse/MCPE-166152))
- Changed button text from "Manage" to "Cancel" in Options \> Subscriptions
- Fixed layering issue causing the underground vignette effect to draw on top of the hotbar ([MCPE-159217](https://bugs.mojang.com/browse/MCPE-159217))
- Adding a button on the new death screen to allow player to go to the game menu to change settings, leave the world, and more
- Fixed localization of 'Detected lost connection' connection is lost from other player or server ([MCPE-173028](https://bugs.mojang.com/browse/MCPE-173028))
- Fixed textbox text sometimes not updating correctly when holding backspace on Android devices ([MCPE-169840](https://bugs.mojang.com/browse/MCPE-169840))
- Fixed 'Full Keyboard Gameplay' support on iOS and Android
- Fixed an issue where names with parentheses in them did not display on the inventory/crafting menus in their title ([MCPE-161134](https://bugs.mojang.com/browse/MCPE-161134))
- Switching between Book and Quill pages with the gamepad now produces a sound ([MCPE-162253](https://bugs.mojang.com/browse/MCPE-162253))
- Added a button to empty the search bar with one click
- Pressing Return on the virtual keyboard no longer deletes text after cursor on Xbox ([MCPE-172835](https://bugs.mojang.com/browse/MCPE-172835))
- Background now darkens while the Smithing Table UI is open and Pocket UI is enabled
- Fixed ZL/ZR icons for Joy-Con and Switch Pro controller on Android
- The caret can be re-positioned in text field by taps or mouse clicks ([MCPE-131572](https://bugs.mojang.com/browse/MCPE-131572))
- The “Pause menu” has been renamed to “Game menu” in the user interface
- Fixed layering issue causing the underground vignette effect to draw on top of all other HUD elements ([MCPE-159217](https://bugs.mojang.com/browse/MCPE-159217))

## **Audio**

- Strays now play the proper sound when firing bows ([MCPE-172385](https://bugs.mojang.com/browse/MCPE-172385))
- Equipment sound is now played when switching between otherwise identical armor pieces, which may have differing enchantments and/or trims applied ([MCPE-171527](https://bugs.mojang.com/browse/MCPE-171527))
- The Trails and Tales music tracks now play in the game menu ([MCPE-171489](https://bugs.mojang.com/browse/MCPE-171489))
- Shields now play a sound when equipped in the off-hand slot ([MCPE-168039](https://bugs.mojang.com/browse/MCPE-168039))

## **Graphical**

- Added a new experimental toggle to Video menu for players on Windows which reduces input latency; enabling this setting will increase battery consumption ([MCPE-98861](https://bugs.mojang.com/browse/MCPE-98861))
- The horizon no longer changes color when the player is standing under blocks ([MCPE-85888](https://bugs.mojang.com/browse/MCPE-85888 "https://bugs.mojang.com/browse/MCPE-85888"))
- Fixed a problem where blocks' rendering was not updating unless the player jumped ([MCPE-173706](https://bugs.mojang.com/browse/MCPE-173706))
- Cherry Leaf blocks will now generate particle effects at a relatively large distance based on system performance
- Transparent blocks viewed through an End Portal will no longer be visible nor flicker ([MCPE-162061](https://bugs.mojang.com/browse/MCPE-162061))
- Fixed bottom face of portal effect so its color and transparency match the other faces
- Fixed screen fade when sleeping in a Bed to no longer go fully opaque ([MCPE-171461](https://bugs.mojang.com/browse/MCPE-171461))
- Name Tag rendering logic is now based on camera position rather than player position
- The underwater fog in Cherry Groves now uses a transition that increases visibility after a while ([MCPE-171822](https://bugs.mojang.com/browse/MCPE-171822))

## **Marketplace**

- Players will now have a way to send a one-way message to Marketplace creators offering feedback on purchased items. This feedback could be used to improve future content and changes

## **Minimum Supported Mobile Hardware**

As Minecraft grows, so must the operating system and hardware that supports it. For some older Apple devices, you may need to update to **iOS 1****3** or above by February 2024 to continue receiving updates for Minecraft or to access online play.  If you are on the most up-to-date version of iOS already, you have nothing to worry about. Please follow Apple’s guide on how to [update your device](https://support.apple.com/en-us/HT204204). You can also refer to [their list of devices currently compatible with iOS 13/iPadOS13.](https://support.apple.com/en-us/HT210327) 

For Android, as of February 2024, **devices require greater than 1 GB RAM, run OS 8 (Oreo) or above**, and have **OpenGL ES 3.0**** to run Minecraft.**

Please refer to our Minecraft Help Center articles for further details:

- [iOS Technical Support Issues](../../help/Minecraft-Bedrock-Edition-Technical/iOS-Technical-Support-Issues.md)
- [Android Technical Support FAQ](../../help/Minecraft-Bedrock-Edition-Technical/Android-Technical-Support-FAQ.md)  
    

# **Technical Updates**

## **Updated Add-On Template Packs**

- Updated Add-On templates for 1.20.30 with new resources, behaviors, and documentation are available to download at [aka.ms/MCAddonPacks](https://aka.ms/MCAddonPacks)

## **General**

- The game no longer crashes when it tries to place an invalid custom feature
- Entity names beginning with a number will now result in a content error
- Fixed an issue with gliding with Elytra and switching to Creative flight ([MCPE-171797](https://bugs.mojang.com/browse/MCPE-171797))
  - Moved some entity JSONs that were misplaced to the correct area
- Updated Aux-Value to Block-State table in the documentation to account for data upgrade since inception
- Added server-authoritative-sound bool to server.properties
- Exposed the following feature placement rules from behind the data driven biome experimental toggle. This allows creators to attach their custom features to a biome, and to define the rules by which those features are placed
  - minecraft:aggregate_feature
  - minecraft:cave_carver_feature
  - minecraft:fossil_feature
  - minecraft:geode_feature
  - minecraft:growing_plant_feature
  - minecraft:multiface_feature
  - minecraft:nether_cave_carver_feature
  - minecraft:ore_feature
  - minecraft:partially_exposed_blob_feature
  - minecraft:scatter_feature
  - minecraft:search_feature
  - minecraft:sequence_feature
  - minecraft:single_block_feature
  - minecraft:snap_to_surface_feature
  - minecraft:structure_template_feature
  - minecraft:surface_relative_threshold_feature
  - minecraft:tree_feature
  - minecraft:underwater_cave_carver_feature
  - minecraft:vegetation_patch_feature
  - minecraft:weighted_random_feature

## **Dedicated Server**

- **Notice for Linux Dedicated Server operators:** Ubuntu 20.04 LTS (Focal Fossa) is now the minimum supported Ubuntu version
- Fixed a Bedrock Dedicated Servers memory leak while loading chunks ([BDS-17527](https://bugs.mojang.com/browse/BDS-17527))
- Fixed an issue with the client failing to attempt connection to dedicated server in some situations

## **Commands**

- The /camera command no longer requires the experimental cameras toggle
  - Note: The cameras experiment still contains several example preset JSON files for reference
- Camera commands that are sent in the same tick are no longer ignored ([MCPE-173524](https://bugs.mojang.com/browse/MCPE-173524))
- Display a message when the players presses the camera perspective change button but a particular perspective is already set via the camera command
- Entities no longer disappear when they are teleported to saved chunks near the edge of the player's render distance
- Released command */scriptevent* out of experimental
- Fixed an issue where the controllers right/left d-pad autocompletes commands when the text box wasn’t selected, which also selected different UI elements on the screen
- Fixed a bug that autocomplete suggestions for values coming after brackets are missing if there is no space between tilde (as Z coordinate) and block name in commands
- The unknown block is no longer available to be set or filled via commands ([MCPE-165301](https://bugs.mojang.com/browse/MCPE-165301))
- The 'hasitem' command will now use the data value as damage when selecting damageable items ([MCPE-159409](https://bugs.mojang.com/browse/MCPE-159409))
- "stained_glass" block is now split into unique instances, namely "white_stained_glass", "orange_stained_glass", "magenta_stained_glass", "light_blue_stained_glass", "yellow_stained_glass", "lime_stained_glass", "pink_stained_glass", "gray_stained_glass", "light_gray_stained_glass", "cyan_stained_glass", "purple_stained_glass", "blue_stained_glass", "brown_stained_glass", "green_stained_glass", "red_stained_glass", and "black_stained_glass"
  - Commands will still work with "stained_glass", but "stained_glass" won't be suggested in the command prompt, rather the new names will
- "stained_glass_pane" block is now split into unique instances, namely "white_stained_glass_pane", "orange_stained_glass_pane", "magenta_stained_glass_pane", "light_blue_stained_glass_pane", "yellow_stained_glass_pane", "lime_stained_glass_pane", "pink_stained_glass_pane", "gray_stained_glass_pane", "light_gray_stained_glass_pane", "cyan_stained_glass_pane", "purple_stained_glass_pane", "blue_stained_glass_pane", "brown_stained_glass_pane", "green_stained_glass_pane", "red_stained_glass_pane", and "black_stained_glass_pane"
  - Commands will still work with "stained_glass_pane", but "stained_glass_pane" won't be suggested in the command prompt, rather the new names will
- "concrete_powder" block is now split into unique instances, namely "white_concrete_powder", "orange_concrete_powder", "magenta_concrete_powder", "light_blue_concrete_powder", "yellow_concrete_powder", "lime_concrete_powder", "pink_concrete_powder", "gray_concrete_powder", "light_gray_concrete_powder", "cyan_concrete_powder", "purple_concrete_powder", "blue_concrete_powder", "brown_concrete_powder", "green_concrete_powder", "red_concrete_powder", and "black_concrete_powder"
  - Commands will still work with "concrete_powder", but "concrete_powder" won't be suggested in the command prompt, rather the new names will
- Blocks that had an alias prior to being flattened can now be properly referenced in commands

## **Sound**

- Sound definitions now accept both float and integer values for *min_distance* and *max_distance* - please set sound_definitions.json "*format_version*" parameter equal to or greater than 1.20.20 to use this functionality ([MCPE-154378](https://bugs.mojang.com/browse/MCPE-154378))

## **Items**

- Released the "*minecraft:wearable*" item component out of experimental in json formats 1.20.20 and higher
- Released the "*minecraft:hand_equipped*" item component out of experimental in json formats 1.20.20 and higher
- Deprecated "*minecraft:creative_category*" component in json formats 1.20.20 and higher
- Creative group and command visibility can now be set in the "description" field in json formats 1.20.20 and higher
- Renamed the "*minecraft:foil*" item component to "*minecraft:glint*" and released it out of experimental in json formats 1.20.20 and higher
- Changed fire enchant duration used on projectiles from a *ShooterItemComponent* to match vanilla behavior
- Released the "*minecraft:use_duration*" item component out of experimental in json formats 1.20.20 and higher
- Released the "*minecraft:stacked_by_data*" item component out of experimental in json formats 1.20.20 and higher
- "*minecraft:entity_placer*" will now content error when invalid blocks are named in the "*use_on*" and "*dispense_on*" lists
- Released the "*minecraft:use_animation*" item component out of experimental in json formats 1.20.20 and higher
- Released the "*minecraft:allow_off_hand*" item component out of experimental in json formats 1.20.20 and higher
- Released the "*minecraft:should_despawn*" item component out of experimental in json formats 1.20.20 and higher
- Released the "*minecraft:liquid_clipped*" item component out of experimental in json formats 1.20.20 and higher
- Released the "*minecraft:damage*" item component out of experimental in json formats 1.20.20 and higher
- Released the "*minecraft:digger*" item component out of experimental in json formats 1.20.20 and higher
- Deprecated "*on_dig*" parameters from "*minecraft:digger*" item component in formats 1.20.20 and higher
- Released the "*minecraft:enchantable*" item component out of experimental in json formats 1.20.30 and higher
- Deprecated "*minecraft:mining_speed*" in json formats 1.20.30 and higher. Use "*minecraft:digger*" instead to achieve the same functionality
- Released the "minecraft:food" item component out of experimental in json formats 1.20.30 and higher
- Added "minecraft:interact_button" item component to enable and set text on the interact button in json formats 1.20.30 and above
- Fixed an issue where content errors for items at the latest format version would appear for other items

## **Add-Ons and Script Engine**

- Render controllers without textures will now result in a content error and be ignored
- Added support for the "*allow_random_seed*" option in world template manifests
- Fixed a bug which prevented certain worlds with add-ons from being downloaded from Realms on some console platforms
  - Applied a fix with the way block descriptors resolved custom block states where it could resolve to the wrong state if multiple custom block states had the same name
- AmethystCluster blocks use state "*minecraft:block_face*" instead of "*facing_direction*". "*minecraft:block_face*" uses string values ("down", "up", "north", "south", "east", "west")
- Slab blocks use state "*minecraft:vertical_half*" instead of "*top_slot_bit*". "*minecraft:vertical_half*" uses string values ("bottom", "top")
- Display a warning message when camera perspective option is changed in the settings menu but a camera command is active
- Moved PlacementDirection ("*minecraft:placement_direction*") and PlacementPosition ("*minecraft:placement_position*") block traits out of experimental. These traits can be used for blocks with "*format_version*" \>= "1.20.20"
- Added Script Binding functions to get/set the *CompoundBlockVolume* origin
- Added additional params to some methods to query the children of *CompoundBlockVolume* for their positional relativity to the parent
- Added additional params to some methods to freeze positional relativty when origin changes are submitted
- Big Dripleaf blocks use state "minecraft:cardinal_direction" instead of "direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3\]
- Small Dripleaf blocks use state "minecraft:cardinal_direction" instead of "direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3\]
- Pink Petals blocks use state "minecraft:cardinal_direction" instead of "direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3\]
- End Portal Frame blocks use state "minecraft:cardinal_direction" instead of "direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3\]
- Lectern blocks use state "minecraft:cardinal_direction" instead of "direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3\]
- Anvil blocks use state "minecraft:cardinal_direction" instead of "direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3\]
- Campfire blocks use state "minecraft:cardinal_direction" instead of "direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3\]
- Soul Campfire blocks use state "minecraft:cardinal_direction" instead of "direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3\]
- Calibrated Sculk Sensor blocks use state "minecraft:cardinal_direction" instead of "direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3\]
- Powered Comparator blocks use state "minecraft:cardinal_direction" instead of "direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3\]
- Unpowered Comparator blocks use state "minecraft:cardinal_direction" instead of "direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3\]
- Powered Repeater blocks use state "minecraft:cardinal_direction" instead of "direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3\]
- Unpowered Repeater blocks use state "minecraft:cardinal_direction" instead of "direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3\]
- BlastFurnace blocks use state "minecraft:cardinal_direction" instead of "facing_direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3, 5, 6\]
- Furnace blocks use state "minecraft:cardinal_direction" instead of "facing_direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3, 5, 6\]
- LitBlastFurnace blocks use state "minecraft:cardinal_direction" instead of "facing_direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3, 5, 6\]
- LitFurnace blocks use state "minecraft:cardinal_direction" instead of "facing_direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3, 5, 6\]
- LitSmoker blocks use state "minecraft:cardinal_direction" instead of "facing_direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3, 5, 6\]
- Smoker blocks use state "minecraft:cardinal_direction" instead of "facing_direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3, 5, 6\]

## **Mobs**

- "cooldown" field for target descriptors now properly work in "minecraft:behavior.nearest_prioritized_attackable_target" goal
- Exposed new data parameter "can_spread_on_fire" for the "minecraft:behavior.melee_attack" component to specify if the mob should set its target on fire when attacking if the attacking mob is on fire ([MCPE-77746](https://bugs.mojang.com/browse/MCPE-77746))

## **Script API**

- Converting the *CompoundBlockVolume* container to use relative coordinates to an internal origin
- Normalize the use of *CompoundBlockVolume* instead of Selection across Editor API

## **Molang**

- Renamed *block_property* and has_block\_*property* to *block_state* and *has_block_state*
  - This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min_engine_version of 1.20.20 or higher  
      

# **Experimental Technical Features**

## **API**

- Added *Scoreboard.addScore* and improved *Scoreboard.setScore* to return the updated score
- Using *ScoreboardObjective.removeParticipant* is now properly synced with clients ([MCPE-172920](https://bugs.mojang.com/browse/MCPE-172920))
- ScriptEventCommandMessageAfterEvent
  - Made *initiator*, *sourceBlock*, and *sourceEntity* optional types
- Removed *MinecraftEntityTypes* from @minecraft/server and replaced with version from @minecraft/vanilla-data
- Removed *MinecraftItemTypes* from @minecraft/server and replaced with version from @minecraft/vanilla-data
- Exposed *MoonPhase* and *World.getMoonPhase* to script
- Removed server-authoritative-sound bool from server.properties
- Exposed *DimensionType* to scripting
- Converted "*set_block_property*" to "*set_block_state*" for custom blocks
- Added *defineVector* to *DynamicPropertiesDefinition*
- *EntityEquipmentInventoryComponent*
  - Implemented slot validation for *setEquipment*, which now returns a boolean indicating whether the item can be equipped to the specified slot
  - *EntityEquipmentInventoryComponent* is currently limited to Players only. However, we hope to reintroduce this component for mobs in a future update
    - Moved *getDay()* to *1.4.0*
    - Moved *getTimeOfDay()* to *1.4.0*
    - Moved *setTimeOfDay(timeOfDay: number \| TimeOfDay)* to *1.4.0*
    - Moved *getAbsoluteTime()* to *1.4.0*
    - Moved *setAbsoluteTime(absoluteTime: number)* to *1.4.0*
- Moved *TimeOfDay* to *1.4.0*
  - Added length restrictions to *setLore* - Up to 20 lines with up to 50 characters per line
  - Moved function *setLore* to *1.4.0*
  - Moved function *getLore* to *1.4.0*
  - Moved class *SystemAfterEvents* to *1.4.0*
  - Moved class *ScriptEventCommandMessageAfterEvent* to *1.4.0*
- Moved player *onScreenDisplay* to *1.4.0*
- Moved *titleDisplayOptions* to *1.4.0*
- Moved *screenDisplay* to *1.4.0*
- Moved *ProjectileHitBlockAfterEvent* to *1.5.0*.
- Moved *ProjectileHitEntityAfterEvent* to *1.5.0*.
- Moved *ProjectileHitBlockAfterEventSignal* to *1.5.0*.
- Moved *ProjectileHitEntityAfterEventSignal* to *1.5.0*.
- Moved *BlockHitInformation* to *1.5.0*.
- Moved *EntityHitInformation* to *1.5.0*.
  - Moved *spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap)* to *1.5.0*
  - Moved *setColorRGB(variableName: string, color: RGB)* to *1.5.0*
  - Moved *setColorRGBA(variableName: string, color: RGBA)* to *1.5.0*
  - Moved *setFloat(variableName: string, number: number)* to *1.5.0*
  - Moved *setSpeedAndDirection(variableName: string, speed: number, direction: Vector3)* to *1.5.0*
  - Moved *setVector3(variableName: string, vector: Vector3)* to *1.5.0*
- RGB
  - Moved *RGB* to *1.5.0*
  - Moved *RGBA* to *1.5.0*
  - Moved *triggerEvent(eventName: string)* to *1.5.0*
- Renamed *EntityEquipmentInventoryComponent* to *EntityEquippableComponent*
- Fixed issue where prototype properties are not possible to redefine using *defineProperty* ([MCPE-174073](https://bugs.mojang.com/browse/MCPE-174073))
- ItemStack
  - Added *getCanPlaceOn()* and *getCanDestroy()*
  - Added upper maximum limit of 255 to *amount* property - will throw if exceeds
- Entity
  - Added function *getProperty(identifier: string): boolean \| number \| string \| undefined* - Gets an Entity Property
  - Added function *setProperty(identifier: string, value: boolean \| number \| string): void* - Sets an Entity Property during the next tick
  - Added function *resetProperty(identifier: string): boolean \| number \| string;* - Resets an Entity Property to its default value during the next tick and returns the default value
- world.beforeEvents
  - Added event/property *removeEvent*
- world.afterEvents
  - Renamed event/property *removedEvent* to *removeEvent*
- Class *EntityRemovedAfterEvent*
  - Renamed field *removedEntity* to *removedEntityId*: *removedEntityId: string*
  - Added field *typeId: string*
- Added class *EntityRemovedBeforeEvent*
  - Added field *removedEntity: Entity*
- Moved *EquipmentSlot* to *1.5.0* and changed enum values to uppercase
- Moved *EntityEquippableComponent* to *1.5.0*
- Scoreboard
  - *setObjectiveAtDisplaySlot* return type now correctly set to *ScoreboardObjective* or undefined
- ScoreboardIdentity
  - *getEntity* return type now correctly set to Entity or undefined
- *setWeather* API can now take an optional duration parameter to set the weather duration
- Added read-only property *heightRange: NumberRange* - Gets min/max dimension height limits.
- Added *Player.isSleeping* and *Player.isEmoting*
- Changed *Entity.scoreboardIdentity* to be valid even after the entity has been killed
- World Events
  - Renamed *BlockBreakAfterEvent* to *PlayerBreakBlockAfterEvent*
    - Added *readonly itemStackAfterBreak?: ItemStack* (undefined if empty hand)
    - Added *readonly itemStackBeforeBreak?: ItemStack* (undefined if empty hand)
  - Renamed *BlockBreakAfterEventSignal* to *PlayerBreakBlockAfterEventSignal*
    - *subscribe* function now takes *options?: BlockEventOptions*
  - Added *PlayerBreakBlockBeforeEvent* with the following members
    - *cancel: boolean*, cancels event from happening
    - *itemStack?: ItemStack*, the item stack in use by the player (undefined if empty hand)
    - *readonly player: Player*, the player breaking the block
  - Added *PlayerBreakBlockBeforeEventSignal*
  - Renamed *BlockPlaceAfterEvent* to *PlayerPlaceBlockAfterEvent*
  - Renamed *BlockPlaceAfterEventSignal* to *PlayerPlaceBlockAfterEventSignal*
    - *subscribe* function now takes *options?: BlockEventOptions*
  - Added *PlayerPlaceBlockBeforeEvent* with the following members
    - *cancel: boolean*, cancels event from happening
    - *readonly face: Direction*, the face the block is being placed on
    - *readonly faceLocation: Vector3*, the location on the face the block was placed on
    - *itemStack: ItemStack*, the item stack being used to place the block
    - *readonly player: Player*, the player placing the block
  - Added *PlayerPlaceBlockBeforeEventSignal*
  - Modified *WorldAfterEvents*
    - Renamed *blockBreak* to *playerBreakBlock*
    - Renamed *blockPlace* to *playerPlaceBlock*
  - Modified *WorldBeforeEvents*
    - Added *playerBreakBlock*
    - Added *playerPlaceBlock*
  - Added *BlockEventOptions* with the following members
    - *blockTypes?: string\[\]*, names of blocks to be filtered against
    - *permutations?: BlockPermutation\[\]*, specific block permutations to be filtered against
- Added class *EntityLoadAfterEvent*
  - New field *entity: Entity*
  - Added class *EntityLoadAfterEventSignal*
- Class *EntitySpawnAfterEvent*
  - Added property *readonly cause: EntityInitializationCause*\_
- Class *WorldAfterEvents*
  - Added property *readonly entityLoad: EntityLoadAfterEventSignal*
- Added enum *EntityInitializationCause*

Moved the following APIs from beta to stable:

- Moved *Direction* to *1.4.0*.
- Moved *EntityDamageSource* to *1.4.0*.
- Moved *EntityDieAfterEvent* to *1.4.0*.
- Moved *EntityEventOptions* to *1.4.0*.
- Moved *EntityHitBlockAfterEvent* to *1.4.0*.
- Moved *EntityHitEntityAfterEvent* to *1.4.0*.
- Moved *EntityHurtAfterEvent* to *1.4.0*.
- Moved *EntityHealthChangedAfterEvent* to *1.4.0*.
- Moved *Dimension.getBlockFromRay* method to *1.4.0*
- Moved *Dimension.getEntitiesFromRay* method to *1.4.0*
- Moved *Entity.getBlockFromViewDirection* method to *1.4.0*
- Moved *Entity.getEntitiesFromViewDirection* method to *1.4.0*
- Moved *BlockRaycastHit* to *1.4.0*
- Moved *BlockRaycastOptions* to *1.4.0*
- Moved *EntityRaycastHit* to *1.4.0*
- Moved *EntityRaycastOptions* to *1.4.0*
- Moved *PressurePlatePushEvent* to *1.4.0*.
- Moved *PressurePlatePopEvent* to *1.4.0*.
- Moved *TripWireTripEvent* to *1.4.0*.
- Moved *TargetBlockHitEvent* to *1.4.0*.
  - Made property *id* accessible even if entity is not valid
  - Made property *typeId* accessible even if entity is not valid
  - Changed item event *source* properties from type *Entity* to *Player*
- Added camera scripting APIs for the following APIs:
  - *setCamera()*: to set the camera to a specified preset
  - *fade()*: to start a camera fade
  - *clear()*: to clear the current settings on the camera
- Released Scoreboard API's from beta to V1.4.0
  - Updated *Scoreboard.getObjective*, *getObjectiveAtDisplaySlot*, and *clearObjectiveAtDisplaySlot* to return '\| undefined'
- Removed *MinecraftBlockTypes* defined in *@minecraft/server*
- Moved *ItemUseBeforeEvent* to *1.4.0*
- Moved *ItemUseOnBeforeEvent* to *1.4.0*
- Moved *ItemUseAfterEvent* to *1.4.0*
- Moved *ItemUseOnAfterEvent* to *1.4.0*
- Moved *ItemStartUseOnAfterEvent* to *1.4.0*
- Moved *ItemStopUseAfterEvent* to *1.4.0*
- Moved *ItemStopUseOnAfterEvent* to *1.4.0*
- Moved *ItemCompleteUseAfterEvent* to *1.4.0*
- Moved *ItemReleaseUseAfterEvent* to *1.4.0*
- Moved *ItemStartUseAfterEvent* to *1.4.0*
- Moved *DimensionLocation* to *1.4.0*
- Renamed *PositionInUnloadedChunkError* to *LocationInUnloadedChunkError* and moved it to *1.4.0*
- Renamed *PositionOutOfWorldBoundariesError* to *LocationOutOfWorldBoundariesError* and moved it to *1.4.0*
  - Moved *getSpawnPoint* to *1.4.0*
  - Moved *setSpawnPoint* to *1.4.0*
  - Moved *getDefaultSpawnLocation* to *1.4.0*
  - Moved *setDefaultSpawnLocation* to *1.4.0*
- Released *isValid()* from Beta to *1.4.0* for the following classes:
  - *Block*
  - *Container*
  - *Entity*
  - *Player*
  - *SimulatedPlayer*
- WorldAfterEvents
  - Removed *projectileHit*
  - Added *projectileHitBlock*
  - Added *projectileHitEntity*
- Added class *ProjectileHitBlockAfterEvent* export class:  
  *ProjectileHitBlockAfterEvent { readonly dimension: Dimension; readonly hitVector: Vector3; readonly location: Vector3; readonly projectile: Entity; readonly source?: Entity; getBlockHit(): BlockHitInformation; }*
- Added class *ProjectileHitEntityAfterEvent* export class:  
  *ProjectileHitEntityAfterEvent { readonly dimension: Dimension; readonly hitVector: Vector3; readonly location: Vector3; readonly projectile: Entity; readonly source?: Entity; getEntityHit(): EntityHitInformation; }*
- Fixed a bug where *ContainerSlot* would not work with certain container types ([MCPE-168805](https://bugs.mojang.com/browse/MCPE-168805))
- Fixed a bug where setLore would incorrectly calculate the length of lore strings containing multi-byte characters ([MCPE-173189](https://bugs.mojang.com/browse/MCPE-173189))
  - Added function *remove* - Removes the Entity. This cannot be called on Players but can be used on SimulatedPlayers in Gametest
- MolangVariableMap
  - Added setFloat function
  - Changed return type of setColorRBG, setColorRGBA, setSpeedAndDirection, and setVector3 to void
  - Changed the MolangVariableMap property on spawnParticle to be optional: spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void
- Renamed *Color* interface to *RGBA*
- Added interface *RGB*

## **Blocks**

- Custom blocks will now only transmit Redstone power if they are a unit cube and all materials are opaque ([MCPE-168998](https://bugs.mojang.com/browse/MCPE-168998))
- Updated *isSolid*, *isLiquid*, and *isAir* to be properties instead of methods

## **Items**

- Fixed issue where items with the "*minecraft:wearable*" component would be duplicating when equipping by using the item ([MCPE-159736](https://bugs.mojang.com/browse/MCPE-159736))
- Items with the "*minecraft:wearable*" component in non-weapon slots can no longer be stacked ([MCPE-159736](https://bugs.mojang.com/browse/MCPE-159736))
- Removed the "*minecraft:ignores_permission*" component
- Removed the "*minecraft:mirrored_art*" component
- Moved the "*protection*" field from "*minecraft:armor*" component to "*minecraft:wearable*" component in json formats 1.20.20 and higher
- Deprecate "*minecraft:armor*" component in json formats 1.20.20 and higher
- Removed nonfunctional and redundant slot options from "*minecraft:wearable*" component, ie. mainhand, hotbar, inventory, enderchest, and equippable
- Items with the "*minecraft:wearable*" component using the "*slot.weapon.offhand*" slot will no longer equip when item is used in hotbar
- Equipping custom wearable items trigger generic equip sound
- Custom items with "*minecraft:wearable*" component can now be equipped by clicking and dragging in inventory or shift-clicking
- Removed the "*minecraft:animates_in_toolbar*" component
- Removed the "*minecraft:explodable*" component
- Extra damage hover text now appears on all component items that have an applied sharpness enchantment
- The "*minecraft:shooter*" component now supports the Quick Charge enchantment with "*minecraft:enchantable*" when "*charge_on_draw*" is true
- Added support for efficiency enchantment for data driven items using the "*minecraft:digger*" component
- Remove nonfunctional entity slot options from "*minecraft:wearable*" component, ie. saddle, entity armor, and chest
- Custom items with "*minecraft:wearable*" component auto-equip when dropped from a dispenser, matching parity with Vanilla armor items
- Fixed an issue where items with format version 1.20.20 and above using the 'menu_category' field in a world with the 'Holiday Creator Features' toggle enabled would not load
- Removed "minecraft:requires_interact" component
- Fixed issue with content errors occurring with the Holiday Creator Features toggle turned on when using a json object version of "max_stack_size", "can_destroy_in_creative", "hover_text_color"  
    

# **Block Destroy Time Changes - Full List**

|                                        |                                                          |                  |                          |
|----------------------------------------|----------------------------------------------------------|------------------|--------------------------|
| **Bedrock ID**                         | **Bedrock Name**                                         | **Destroy Time** | **Explosion Resistance** |
| activator_rail                         | Activator Rail                                           | 0.5 → 0.7        | 0.5 → 0.7                |
| ancient_debris                         | Ancient Debris                                           |                  | 720 → 1200               |
| andesite_stairs                        | Andesite Stairs                                          | 2 → 1.5          |                          |
| bamboo                                 | Bamboo                                                   | 2 → 1            | 2 → 1                    |
| bamboo_block                           | Block of Bamboo                                          |                  | 3 → 2                    |
| bamboo_sapling                         | Bamboo Shoot                                             | 0 → 1            | 0 → 1                    |
| bee_nest                               | Bee Nest                                                 |                  | 2.7 → 0.3                |
| beehive                                | Beehive                                                  |                  | 5.4 → 0.6                |
| bell                                   | Bell                                                     | 1 → 5            | 3 → 5                    |
| big_dripleaf                           | Big Dripleaf                                             | 0 → 0.1          | 0 → 0.1                  |
| campfire                               | Campfire                                                 | 5 → 2            | 5 → 2                    |
| chain                                  | Chain                                                    |                  | 3 → 6                    |
| chiseled_deepslate                     | Chiseled Deepslate                                       |                  | 3.6 → 6                  |
| cobbled_deepslate                      | Cobbled Deepslate                                        |                  | 3.6 → 6                  |
| cobbled_deepslate_double_slab          | Cobbled Deepslate Slab (Double)                          |                  | 3.6 → 6                  |
| cobbled_deepslate_slab                 | Cobbled Deepslate Slab                                   |                  | 3.6 → 6                  |
| cobbled_deepslate_stairs               | Cobbled Deepslate Stairs                                 |                  | 3.6 → 6                  |
| cobbled_deepslate_wall                 | Cobbled Deepslate Wall                                   |                  | 3.6 → 6                  |
| composter                              | Composter                                                | 2 → 0.6          | 2 → 0.6                  |
| copper_block                           | Block of Copper                                          |                  | 3.6 → 6                  |
| copper_ore                             | Copper Ore                                               |                  | 1.8 → 3                  |
| coral_block                            | Coral Block (10 blocks)                                  | 7 → 1.5          | 0.9 → 6                  |
| coral_fan                              | Coral Fan (5 blocks)                                     |                  | 0.9 → 0                  |
| coral_fan_dead                         | Dead Coral Fan (5 blocks)                                |                  | 0.9 → 0                  |
| coral_fan_hang                         | Coral Wall Fan (2 blocks)                                |                  | 0.9 → 0                  |
| coral_fan_hang2                        | Coral Wall Fan (2 blocks)                                |                  | 0.9 → 0                  |
| coral_fan_hang3                        | Coral Wall Fan (1 block)                                 |                  | 0.9 → 0                  |
| cracked_deepslate_bricks               | Cracked Deepslate Bricks                                 |                  | 3.6 → 6                  |
| cracked_deepslate_tiles                | Cracked Deepslate Tiles                                  |                  | 3.6 → 6                  |
| crimson_hyphae                         | Crimson Hyphae                                           | 0.3 → 2          | 0.3 → 2                  |
| crimson_stem                           | Crimson Stem                                             |                  | 0.3 → 2                  |
| cut_copper                             | Cut Copper                                               |                  | 3.6 → 6                  |
| cut_copper_slab                        | Cut Copper Slab                                          |                  | 3.6 → 6                  |
| cut_copper_stairs                      | Cut Copper Stairs                                        |                  | 3.6 → 6                  |
| deepslate                              | Deepslate                                                |                  | 3.6 → 6                  |
| deepslate_brick_double_slab            | Deepslate Brick Slab (Double)                            |                  | 3.6 → 6                  |
| deepslate_brick_slab                   | Deepslate Brick Slab                                     |                  | 3.6 → 6                  |
| deepslate_brick_stairs                 | Deepslate Brick Stairs                                   |                  | 3.6 → 6                  |
| deepslate_brick_wall                   | Deepslate Brick Wall                                     |                  | 3.6 → 6                  |
| deepslate_bricks                       | Deepslate Bricks                                         |                  | 3.6 → 6                  |
| deepslate_coal_ore                     | Deepslate Coal Ore                                       |                  | 1.8 → 3                  |
| deepslate_copper_ore                   | Deepslate Copper Ore                                     |                  | 1.8 → 3                  |
| deepslate_diamond_ore                  | Deepslate Diamond Ore                                    |                  | 1.8 → 3                  |
| deepslate_gold_ore                     | Deepslate Gold Ore                                       |                  | 1.8 → 3                  |
| deepslate_iron_ore                     | Deepslate Iron Ore                                       |                  | 1.8 → 3                  |
| deepslate_lapis_ore                    | Deepslate Lapis Lazuli Ore                               |                  | 1.8 → 3                  |
| deepslate_redstone_ore                 | Deepslate Redstone Ore                                   |                  | 1.8 → 3                  |
| deepslate_tile_double_slab             | Deepslate Tile Slab (Double)                             |                  | 3.6 → 6                  |
| deepslate_tile_slab                    | Deepslate Tile Slab                                      |                  | 3.6 → 6                  |
| deepslate_tile_stairs                  | Deepslate Tile Stairs                                    |                  | 3.6 → 6                  |
| deepslate_tile_wall                    | Deepslate Tile Wall                                      |                  | 3.6 → 6                  |
| deepslate_tiles                        | Deepslate Tiles                                          |                  | 3.6 → 6                  |
| diorite_stairs                         | Diorite Stairs                                           | 2 → 1.5          |                          |
| double_cut_copper_slab                 | Cut Copper Slab (Double)                                 |                  | 3.6 → 6                  |
| dragon_egg                             | Dragon Egg                                               |                  | 3 → 9                    |
| dried_kelp_block                       | Dried Kelp Block                                         |                  | 0.5 → 2.5                |
| end_brick_stairs                       | End Stone Brick Stairs                                   | 2 → 3            | 6 → 9                    |
| end_bricks                             | End Stone Bricks                                         | 0.8 → 3          | 0.8 → 9                  |
| exposed_cut_copper_slab                | Exposed Cut Copper Slab                                  |                  | 3.6 → 6                  |
| exposed_copper                         | Exposed Copper                                           |                  | 3.6 → 6                  |
| exposed_cut_copper                     | Exposed Cut Copper                                       |                  | 3.6 → 6                  |
| exposed_cut_copper_stairs              | Exposed Cut Copper Stairs                                |                  | 3.6 → 6                  |
| exposed_double_cut_copper_slab         | Exposed Cut Copper Slab (Double)                         |                  | 3.6 → 6                  |
| granite_stairs                         | Granite Stairs                                           | 2 → 1.5          |                          |
| infested_deepslate                     | Infested Deepslate                                       |                  | 1.8 → 0.75               |
| jukebox                                | Jukebox                                                  | 0.8 → 2          | 0.8 → 6                  |
| lantern                                | Lantern                                                  | 5 → 3.5          | 5 → 3.5                  |
| lectern                                | Lectern                                                  | 2 → 2.5          | 2 → 2.5                  |
| light_block                            | Light Block                                              |                  | 3600000 → 3600000.8      |
| light_gray_candle                      | Light Gray Candle                                        | 0 → 0.1          | 0 → 0.1                  |
| lightning_rod                          | Lightning Rod                                            |                  | 3.6 → 6                  |
| lodestone                              | Lodestone                                                | 2 → 3.5          | 2 → 3.5                  |
| magma                                  | Magma Block                                              |                  | 1.5 → 0.5                |
| monster_egg                            | Infested blocks (5 blocks, missing Infested Cobblestone) |                  | 1.8 → 0.75               |
| mossy_stone_brick_stairs               | Mossy Stone Brick Stairs                                 | 2 → 1.5          |                          |
| mud_bricks                             | Mud Bricks                                               | 2 → 1.5          | 2 → 3                    |
| mud_brick_slab                         | Mud Brick Slab                                           | 2 → 1.5          | 6 → 3                    |
| mud_brick_double_slab                  | Mud Brick Slab (Double)                                  | 2 → 1.5          | 6 → 3                    |
| mud_brick_stairs                       | Mud Brick Stairs                                         | 2 → 1.5          | 6 → 3                    |
| mud_brick_wall                         | Mud Brick Wall                                           | 2 → 1.5          | 6 → 3                    |
| netherite_block                        | Block of Netherite                                       |                  | 720 → 1200               |
| oxidized_cut_copper                    | Oxidized Cut Copper                                      |                  | 3.6 → 6                  |
| oxidized_cut_copper_slab               | Oxidized Cut Copper Slab                                 |                  | 3.6 → 6                  |
| oxidized_cut_copper_stairs             | Oxidized Cut Copper Stairs                               |                  | 3.6 → 6                  |
| oxidized_copper                        | Oxidized Copper                                          |                  | 3.6 → 6                  |
| oxidized_double_cut_copper_slab        | Oxidized Cut Copper Slab (Double)                        |                  | 3.6 → 6                  |
| piston                                 | Piston                                                   | 0.5 → 1.5        | 0.5 → 1.5                |
| piston_arm_collision                   | Piston Head (Normal)                                     | 0.5 → 1.5        | 0.5 → 1.5                |
| pointed_dripstone                      | Pointed Dripstone                                        |                  | 1.8 → 3                  |
| polished_andesite_stairs               | Polished Andesite Stairs                                 | 2 → 1.5          |                          |
| polished_blackstone                    | Polished Blackstone                                      | 1.5 → 2          |                          |
| polished_blackstone_stairs             | Polished Blackstone Stairs                               | 1.5 → 2          |                          |
| polished_blackstone_wall               | Polished Blackstone Wall                                 | 1.5 → 2          |                          |
| polished_deepslate                     | Polished Deepslate                                       |                  | 3.6 → 6                  |
| polished_deepslate_double_slab         | Polished Deepslate Slab (Double)                         |                  | 3.6 → 6                  |
| polished_deepslate_slab                | Polished Deepslate Slab                                  |                  | 3.6 → 6                  |
| polished_deepslate_stairs              | Polished Deepslate Stairs                                |                  | 3.6 → 6                  |
| polished_deepslate_wall                | Polished Deepslate Wall                                  |                  | 3.6 → 6                  |
| polished_diorite_stairs                | Polished Diorite Stairs                                  | 2 → 1.5          |                          |
| polished_granite_stairs                | Polished Granite Stairs                                  | 2 → 1.5          |                          |
| reinforced_deepslate                   | Reinforced Deepslate                                     |                  | 720 → 1200               |
| respawn_anchor                         | Respawn Anchor                                           |                  | 720 → 1200               |
| scaffolding                            | Scaffolding                                              | 0.6 → 0          | 0.9 → 0                  |
| sculk                                  | Sculk                                                    | 0.6 → 0.2        | 0.6 → 0.2                |
| sculk_catalyst                         | Sculk Catalyst                                           |                  | 1.8 → 3                  |
| sculk_shrieker                         | Sculk Shrieker                                           |                  | 1.8 → 3                  |
| shulker_box                            | Shulker Box (16 blocks)                                  | 2.5 → 2          | 2.5 → 2                  |
| smooth_quartz_stairs                   | Smooth Quartz Stairs                                     | 0.8 → 2          | 0.8 → 6                  |
| smooth_stone                           | Smooth Stone                                             | 1.5 → 2          |                          |
| sniffer_egg                            | Sniffer Egg                                              | 0.4 → 0.5        | 0.4 → 0.5                |
| soul_campfire                          | Soul Campfire                                            | 5 → 2            | 5 → 2                    |
| soul_lantern                           | Soul Lantern                                             | 5 → 3.5          | 5 → 3.5                  |
| soul_soil                              | Soul Soil                                                | 1 → 0.5          | 1 → 0.5                  |
| sticky_piston                          | Sticky Piston                                            | 0.5 → 1.5        | 0.5 → 1.5                |
| sticky_piston_arm_collision            | Piston Head (Sticky)                                     | 0.5 → 1.5        | 0.5 → 1.5                |
| stripped_bamboo_block                  | Block of Stripped Bamboo                                 |                  | 3 → 2                    |
| stripped_crimson_hyphae                | Stripped Crimson Hyphae                                  | 0.3 → 2          | 0.3 → 2                  |
| stripped_crimson_stem                  | Stripped Crimson Stem                                    |                  | 0.3 → 2                  |
| stripped_warped_hyphae                 | Stripped Warped Hyphae                                   | 0.3 → 2          | 0.3 → 2                  |
| stripped_warped_stem                   | Stripped Warped Stem                                     |                  | 0.3 → 2                  |
| sweet_berry_bush                       | Sweet Berry Bush                                         | 0.2 → 0          | 0.2 → 0                  |
| turtle_egg                             | Turtle Egg                                               | 0.4 → 0.5        | 0.4 → 0.5                |
| undyed_shulker_box                     | Shulker Box                                              | 2.5 → 2          | 2.5 → 2                  |
| warped_hyphae                          | Warped Hyphae                                            | 0.3 → 2          | 0.3 → 2                  |
| warped_stem                            | Warped Stem                                              |                  | 0.3 → 2                  |
| waxed_cut_copper                       | Waxed Cut Copper                                         |                  | 3.6 → 6                  |
| waxed_cut_copper_slab                  | Waxed Cut Copper Slab                                    |                  | 3.6 → 6                  |
| waxed_cut_copper_stairs                | Waxed Cut Copper Stairs                                  |                  | 3.6 → 6                  |
| waxed_copper                           | Waxed Block of Copper                                    |                  | 3.6 → 6                  |
| waxed_double_cut_copper_slab           | Waxed Cut Copper Slab (Double)                           |                  | 3.6 → 6                  |
| waxed_exposed_copper                   | Waxed Exposed Copper                                     |                  | 3.6 → 6                  |
| waxed_exposed_cut_copper               | Waxed Exposed Cut Copper                                 |                  | 3.6 → 6                  |
| waxed_exposed_cut_copper_slab          | Waxed Exposed Cut Copper Slab                            |                  | 3.6 → 6                  |
| waxed_exposed_cut_copper_stairs        | Waxed Exposed Cut Copper Stairs                          |                  | 3.6 → 6                  |
| waxed_exposed_double_cut_copper_slab   | Waxed Exposed Cut Copper Slab (Double)                   |                  | 3.6 → 6                  |
| waxed_oxidized_copper                  | Waxed Oxidized Copper                                    |                  | 3.6 → 6                  |
| waxed_oxidized_cut_copper              | Waxed Oxidized Cut Copper                                |                  | 3.6 → 6                  |
| waxed_oxidized_cut_copper_stairs       | Waxed Oxidized Cut Copper Stairs                         |                  | 3.6 → 6                  |
| waxed_oxidized_cut_copper_slab         | Waxed Oxidized Cut Copper Slab                           |                  | 3.6 → 6                  |
| waxed_oxidized_double_cut_copper_slab  | Waxed Oxidized Cut Copper Slab (Double)                  |                  | 3.6 → 6                  |
| waxed_weathered_cut_copper             | Waxed Weathered Cut Copper                               |                  | 3.6 → 6                  |
| waxed_weathered_cut_copper_slab        | Waxed Weathered Cut Copper Slab                          |                  | 3.6 → 6                  |
| waxed_weathered_cut_copper_stairs      | Waxed Weathered Cut Copper Stairs                        |                  | 3.6 → 6                  |
| waxed_weathered_copper                 | Waxed Weathered Copper                                   |                  | 3.6 → 6                  |
| waxed_weathered_double_cut_copper_slab | Waxed Weathered Cut Copper Slab (Double)                 |                  | 3.6 → 6                  |
| weathered_copper                       | Weathered Copper                                         |                  | 3.6 → 6                  |
| weathered_cut_copper                   | Weathered Cut Copper                                     |                  | 3.6 → 6                  |
| weathered_cut_copper_slab              | Weathered Cut Copper Slab                                |                  | 3.6 → 6                  |
| weathered_cut_copper_stairs            | Weathered Cut Copper Stairs                              |                  | 3.6 → 6                  |
| weathered_double_cut_copper_slab       | Weathered Cut Copper Slab (Double)                       |                  | 3.6 → 6                  |

 

# **Remaining Parity Breaks**

**DT** - destroy time  
**ER** - explosion resistance

|                          |                                 |                |             |                |             |
|--------------------------|---------------------------------|----------------|-------------|----------------|-------------|
| **Bedrock ID**           | **Bedrock name**                | **DT Bedrock** | **DT Java** | **ER Bedrock** | **ER Java** |
| cobblestone_wall         | Granite Wall                    | 2              | 1.5         |                |             |
| cobblestone_wall         | Sandstone Wall                  | 2              | 0.8         | 6              | 0.8         |
| cobblestone_wall         | Prismarine Wall                 | 2              | 1.5         |                |             |
| cobblestone_wall         | Diorite Wall                    | 2              | 1.5         |                |             |
| cobblestone_wall         | Andesite Wall                   | 2              | 1.5         |                |             |
| cobblestone_wall         | End Stone Brick Wall            | 2              | 3           | 6              | 9           |
| cobblestone_wall         | Stone Brick Wall                | 2              | 1.5         |                |             |
| cobblestone_wall         | Mossy Stone Brick Wall          | 2              | 1.5         |                |             |
| cobblestone_wall         | Red Sandstone Wall              | 2              | 0.8         | 6              | 0.8         |
| stone_block_slab2        | Prismarine Brick Slab           | 2              | 1.5         |                |             |
| stone_block_slab2        | Dark Prismarine Slab            | 2              | 1.5         |                |             |
| stone_block_slab2        | Prismarine Slab                 | 2              | 1.5         |                |             |
| double_stone_block_slab2 | Prismarine Brick Slab (Double)  | 2              | 1.5         |                |             |
| double_stone_block_slab2 | Dark Prismarine Slab (Double)   | 2              | 1.5         |                |             |
| double_stone_block_slab2 | Prismarine Slab (Double)        | 2              | 1.5         |                |             |
| stone_block_slab3        | Andesite Slab                   | 2              | 1.5         |                |             |
| stone_block_slab3        | End Stone Brick Slab            | 2              | 3           | 6              | 9           |
| stone_block_slab3        | Polished Andesite Slab          | 2              | 1.5         |                |             |
| stone_block_slab3        | Polished Diorite Slab           | 2              | 1.5         |                |             |
| stone_block_slab3        | Granite Slab                    | 2              | 1.5         |                |             |
| stone_block_slab3        | Diorite Slab                    | 2              | 1.5         |                |             |
| stone_block_slab3        | Polished Granite Slab           | 2              | 1.5         |                |             |
| double_stone_block_slab3 | Andesite Slab (Double)          | 2              | 1.5         |                |             |
| double_stone_block_slab3 | End Stone Brick Slab (Double)   | 2              | 3           | 6              | 9           |
| double_stone_block_slab3 | Polished Andesite Slab (Double) | 2              | 1.5         |                |             |
| double_stone_block_slab3 | Polished Diorite Slab (Double)  | 2              | 1.5         |                |             |
| double_stone_block_slab3 | Granite Slab (Double)           | 2              | 1.5         |                |             |
| double_stone_block_slab3 | Diorite Slab (Double)           | 2              | 1.5         |                |             |
| double_stone_block_slab3 | Polished Granite Slab (Double)  | 2              | 1.5         |                |             |
| stone_block_slab4        | Mossy Stone Brick Slab (Double) | 2              | 1.5         |                |             |
| double_stone_block_slab4 | Mossy Stone Brick Slab (Double) | 2              | 1.5         |                |             |
| crying_obsidian          | Crying Obsidian                 | 35             | 50          |                |             |
| monster_egg              | Infested Cobblestone            | 0.75           | 1           |                |             |
| obsidian                 | Obsidian                        | 35             | 50          |                |             |
| quartz_block             | Smooth Quartz                   | 0.8            | 2           | 0.8            | 6           |
| red_sandstone            | Smooth Red Sandstone            | 0.8            | 2           | 0.8            | 6           |
| sandstone                | Smooth Sandstone                | 0.8            | 2           | 0.8            | 6           |
