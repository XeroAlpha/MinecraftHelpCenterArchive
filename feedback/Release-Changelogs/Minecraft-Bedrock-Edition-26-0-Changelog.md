---
title: "Minecraft: Bedrock Edition 26.0 Changelog"
date: 2026-02-05T15:19:31Z
updated: 2026-02-10T17:32:03Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/43274629736717-Minecraft-Bedrock-Edition-26-0-Changelog
hash:
  h_01KGQ61KXJKQFF7C8FX4RE939R: experimental-features
  h_01KGQ61KXJQM29JEHE01537XDB: general
  h_01KGQ61KXMYAJQ8JVMR4YMA569: items
  h_01KGQ61KXM7HBPQV9DNFMFTYJW: baby-mobs
  h_01KGQ61KXWM45YY9MXW0116SY7: sounds
  h_01KGQ61KXXRH86F5PPN8QQ2GEB: features-and-bug-fixes
  h_01KGQ61KXXVBQQDC4ZQ2SDHARX: new-version-numbering-system
  h_01KGQ61KXYDJHRS4442GZQ7NVK: accounts
  h_01KGQ61KXZVB38RCDCQNEWDBS2: accessibility
  h_01KGQ61KY0VCME6NN7KMVV131T: blocks
  h_01KGQ61KY1N3S4DVWQHB2A9TP5: creator
  h_01KGQ61KY2QNT4HRT8YB5X64RE: dressing-room-and-character-creator
  h_01KGQ61KY4BCK1HFYJSY2ZRR50: gameplay
  h_01KGQ61KY6P3BCBSG9SRQMAFMG: general-1
  h_01KGQ61KY7XGRXDNJ6TAC6VY6Z: graphical
  h_01KGQ61KYH7GHPWDHS02EDXCJ7: input
  h_01KGQ61KYK4MGS4Y683Y84965X: items-1
  h_01KGQ61KYQSZFVV2WFNVZXGADB: mobs
  h_01KGQ61KZJHDXA1HNQ3YCWFNBX: projectiles
  h_01KGQ61KZKJ1HMJ8FA2ZTPK0H5: realms
  h_01KGQ61KZP2ZHDRBS46CFGGR6Z: sounds-1
  h_01KGQ61KZQ9KX7C6CPS8S86SEQ: user-interface
  h_01KGQ61M0DKM10S2QGXTTVDHEN: settings
  h_01KGQ61M0DG2FV39AMQVRA42ND: vanilla-parity
  h_01KGQ61M0EKMQ046A60GKJHJ08: technical-updates
  h_01KGQ61M0EQTQ6D9SS4QKGHYVB: ai-goals
  h_01KGQ61M0STHZQ255X5RK4FWEM: api
  h_01KGQ61M11GZ0HAD4PA372JF63: biomes
  h_01KGQ61M12AWEA79JDP6S7KX4E: blocks-1
  h_01KGQ61M1BT70GP54P8XP0NH1M: camera
  h_01KGQ61M1BW7G6H7NN2W145QDV: components
  h_01KGQ61M1FF7HJG1H7K59QAYBS: editor
  h_01KGQ61M1P5B1SHG00W936W9J4: entity
  h_01KGQ61M1QBGPW8WY5Z50MAWG6: entity-components
  h_01KGQ61M1X2NSVWAR9275MJVWA: general-2
  h_01KGQ61M1Z50RCQ7541G1D4GM0: graphical-1
  h_01KGQ61M21YW4R4JAMKG0AR2PH: items-2
  h_01KGQ61M21BSG9CW6853G3P7QJ: json-schema
  h_01KGQ61M22D4MHS2FMAXEMA7HN: molang
  h_01KGQ61M23G0ND8BKWYMBT638D: network-protocol
  h_01KGQ61M24YYZ9W9KTH38BT73P: packs
  h_01KGQ61M25NBWTWG3WPX5JFWPM: sounds-2
  h_01KGQ61M25S769SYZHMVQM1PE9: stability-and-performance
  h_01KGQ61M26WT4P85YEAQHTPFGJ: storage
  h_01KGQ61M272J621M1YDV7EF0H9: user-interface-1
  h_01KGQ61M28CX9H2487MSN8R6KW: ui-scaling
  h_01KGQ61M2815Y544HS5V7M90NV: experimental-technical-updates
  h_01KGQ61M28HEQCW80SYTA517MW: api-1
  h_01KGQ61M2P0KGV9T1W4VGWDGGQ: blocks-2
  h_01KGQ61M2R70H0SHTE0SAEKEVM: camera-1
  h_01KGQ61M2SEC5Z7J16460C8SMZ: graphical-2
  h_01KGQ61M2VEF8ZB09HBH8MSQX3: items-3
  h_01KGQ61M2WPD7ZZ6HEE191H4PB: molang-1
  h_01KGQ61M2WV5Z87SJ831THRY7Y: technical
  h_01KGQ61M2W8JJHKGFPEA0GTEBP: user-interface-2
---

**Posted:** 10 February 2026

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/43274646090509" alt="Minecrat Bedrock Edition 26.0" />
</figure>

I'm not sure what to start with today – the baby mob redesigns and craftable name tags coming into testing? Or the fact that this release is the first that follows [our new numbering system](https://www.minecraft.net/en-us/article/minecraft-new-version-numbering-system)? Actually, why choose! In this release we're entering 26.0, and thanks to the weeks we've spent teaching the nautilus some new moves, you'll find some new swimming animations for this underwater mount. We've also fixed a bug with Nether Portals so you can light them with lava again. In testing, you'll be able to try out crafting name tags, and meet new redesigns for baby mobs! And that's not all, either. Let's dive in!

## Experimental Features

### General

- Added experimental toggle for Drop 1 of 2026

### Items

- Name Tags are now craftable, using paper and any metal nugget

### Baby Mobs

- Updated the models and textures of the following Baby Mobs:
  - Cow
    - Tweaked the bounding box of both adult and baby to align with Java Edition and the new model
  - Mooshroom
    - Tweaked the bounding box of both adult and baby to align with Java Edition and the new model
  - Pig
  - Wolf
    - Tweaked the bounding box of both adult and baby to align with Java Edition and the new model
    - Known Issue: The MERS texture of the tamed Wolf is currently a placeholder, and will be updated in a future Preview update
  - Rabbit
    - Both adult and baby Rabbits also received new animations
    - Tweaked the bounding box to align with the new model
  - Cat
    - Tweaked the baby's bounding box to align with the new model
  - Ocelot
  - Chicken
    - Tweaked the bounding box to align with the new model
  - Sheep
- Using a Spawn Egg on the corresponding Mob will now spawn the Baby form of that Mob

#### Sounds

- Baby Pigs, Cats, and Wolves, now have a unique set of sounds
  - Known Issue: Adult Wolf sound variants are currently not working as expected, and will be fixed in a future release

## Features and Bug Fixes

### New Version Numbering System

- Going forward, we'll be numbering our versions based on the year. So, for both Bedrock and Java Edition, version numbers in the year 2026 will begin with ‘26'
- For a deeper look into the changes, check out [aka.ms/MinecraftVersionUpdate](http://aka.ms/MinecraftVersionUpdate)

### Accounts

- Fixed player data becoming disconnected from account for Xbox players in split-screen mode ([MCPE-233088](https://bugs.mojang.com/browse/MCPE-233088))

### Accessibility

- The new Gameplay subtitles (closed captions) will remain in the Beta and Preview versions only for a while longer, while we work on polishing and bug fixing

### Blocks

- Bamboo Stalks no longer pop in as obviously, from a distance they have no transparency instead (like Sugar Cane and Cactus) unless on Simple graphics
- Rotated Y axis orientation of blocks in hand rendered in third person to match Java ([MCPE-231979](https://bugs.mojang.com/browse/MCPE-231979))

### Creator

- Added command macro support
  - Adds toggle to the Creator Settings screen, which when enabled adds 10 new key mappings to the keyboard/mouse controls settings screen which each have a text input for what command to run when the input is pressed
  - Commands can only be run while in game
  - All re-mappable keys are coordinates of Alt plus the chosen key
- Added guard to prevent mapping a command macro key to Alt, as Alt is the coordinates key already

### Dressing Room and Character Creator

- Fixed upgrade from UWP to GDK causing corrupt skin states
- Updated Android Photo Picker instead of requesting media permissions.
- While in a world, classic skins equipped within the marketplace will now be reflected in game after exiting the marketplace and unpausing
  - Loading cached appearances works while offline
  - Prefer loading cached appearance over random skin

### Gameplay

- Vindicator now correctly attacks all non-illager mobs when the nametag "Johnny" is applied ([REALMS-13166](https://bugs.mojang.com/browse/REALMS-13166))
- Fixed an issue that caused Nether Portals to not get ignited by lava ([MCPE-232906](https://bugs.mojang.com/browse/MCPE-232906 "https://bugs.mojang.com/browse/mcpe-232906"))
- Fixed the End gateway portal that teleported the player to the void area ([MCPE-228267](https://bugs.mojang.com/browse/MCPE-228267))

### General

- The Adventuring Time achievement no longer unlocks after visiting fewer than 17 biomes on PC ([MCPE-156784](https://bugs.mojang.com/browse/MCPE-156784))
- Fixed an issue on Windows where the window reset to a smaller size on reopening, even when a single monitor had sufficient space ([MCPE-228875](https://bugs.mojang.com/browse/MCPE-228875))

### Graphical

- Fixed a bug where screenshots taken with Ray Traced graphics mode selected did not render accurately
- Fixed an issue where block highlight was not visible when the Outline Selection toggle was turned off in Vibrant Visuals ([MCPE-222491](https://bugs.mojang.com/browse/MCPE/issues/MCPE-222491))
- Fixed an issue where the graphics mode options were changing after game updates ([MCPE-226682](https://bugs.mojang.com/browse/MCPE-226682))
- Fixed water extinction being drawn over fog when the chunk behind it is missing in Vibrant Visuals
- Fixed an issue that caused darker colors in some skins to appear washed out in Vibrant Visuals ([MCPE-206669](https://bugs.mojang.com/browse/MCPE-206669))
- Fixed a bug with the 'Hide Sky Flashes' option causing The End entrance sound to loop
- Fixed note effects on Note Blocks not displaying the correct color in darkness
- Fixed an issue that caused lighting on End Portals to render incorrectly if a resource pack defined a Portal block as a point light in Vibrant Visuals
- Made the fire effect on burning mobs and players dither when the player-camera is nearby
- Fixed the Snow Golem's pumpkin head not being dithered when the toggle is enabled ([MCPE-228082](https://bugs.mojang.com/browse/MCPE-228082))
- Fixed dithered objects flickering when resolution is set to 50% in Vibrant Visuals ([MCPE-231582](https://bugs.mojang.com/browse/MCPE-231582))
- Fixed a bug that would sometimes allow sunlight to shine through walls, e.g. near cave entrances, in Vibrant Visuals mode
- The textures of Stripped Spruce Logs and Stripped Spruce Wood are now in parity with Java ([MCPE-137379](https://bugs.mojang.com/browse/MCPE-137379))
- Fixed an issue where textures would not be correctly reloaded when changing between graphics modes in the main menu
- Mobs no longer randomly flicker every few seconds ([MCPE-220557](https://bugs.mojang.com/browse/MCPE-220557))
- Fixed shadow stripes appearing on the ground during sunset and sunrise with high FoV on low quality settings in Vibrant Visuals mode.
- Fixed an issue that caused all player markers on locator maps to have the same color in Vibrant Visuals mode.
- Fixed an issue which was causing textured items held-in-hand to be double-tinted in Vibrant Visuals mode.
- Fixed an issue in the Editor that would cause the viewport to become distorted in Vibrant Visuals mode when using the Paste or Repeater tool
- Fixed an issue where the screen would be completely black when the camera was inside of a block in Vibrant Visuals mode. ([MCPE-221667](https://bugs.mojang.com/browse/MCPE-221667))
- Fixed an issue that caused banner poles to appear darker in Vibrant Visuals.
- Fixed shields with banner designs rendering incorrectly when equipped in first person. ([MCPE-232638](https://bugs.mojang.com/browse/MCPE-232638))
- Dithering
  - Added dithering to items held by Players and Mobs if dithering is enabled in Accessibility menu.
  - Added dithering to skulls, heads, chests, shulker boxes, banners, conduits, decorated pots and copper colem statues held by Players and Mobs if dithering is enabled in the Accessibility menu.
  - Added Cobweb block to the list of ditherable blocks.
  - Fixed dithering for equipped shields with banner designs when held by entities.
- Data-driving
  - Added the ability to specify ambient light colors according to the time of day in the Vibrant Visual lighting configuration files.
  - Added the ability to specify ambient light illuminances according to the time of day in the Vibrant Visual lighting configuration files.
  - Added the ability to specify sky light intensity according to the time of day in the Vibrant Visual lighting configuration files.

### Input

- Fixed an issue where pressing the Alt key would cause the game to freeze display ([MCPE-230294](https://bugs.mojang.com/browse/MCPE-230294))
- The on-screen keyboard will now close when typing with a physical keyboard ([MCPE-228584](https://bugs.mojang.com/browse/MCPE-228584))
- Fixed not being able to type into a text box when hovered ([MCPE-229178](https://bugs.mojang.com/browse/MCPE-229178))
- Fixed an issue on Windows where the camera would shift slightly after closing the pause menu ([MCPE-227945](https://bugs.mojang.com/browse/MCPE-227945))
- Fixed a bug on Windows where scrolling could cause the camera to move ([MCPE-230921](https://bugs.mojang.com/browse/MCPE-230921))

### Items

- Spears now rotate in the same direction when charging in first and third person view
- Fixed an issue where adding items to a Bundle in a Chest would sometimes not save after leaving the game ([MCPE-187058](https://bugs.mojang.com/browse/MCPE-187058))
- Diamond and Netherite Horse Armor now provide toughness values of 2 and 3, respectively
- Diamond and Netherite Nautilus Armor now provide toughness values of 2 and 3, respectively
- Horse Armor, Nautilus Armor, and Wolf Armor now display their toughness, armor, and knockback resistance values when greater than 0
- Piglin Spawn Egg and Piglin Brute Spawn Egg are now correctly sorted in alphabetical order ([MCPE-231580](https://bugs.mojang.com/browse/MCPE-231580))
- Fixed an issue where the map marker was stuck when a Locator Map in an Item Frame was deleted ([MCPE-185362](https://bugs.mojang.com/browse/MCPE-185362))
- Diamond Horse Armor now provides 2 points of toughness, while Golden Horse Armor provides none ([MCPE-232700](https://bugs.mojang.com/browse/MCPE-232700))
- Carried item models will no longer be larger when using a HD texture pack ([MCPE-169754](https://bugs.mojang.com/browse/MCPE-169754))
- Equipping an item with a storage item component in an armor or hand slot will no longer delete storage contents.
- Fixed an issue where trimmed armor would not appear correctly after suspending and resuming the game. ([MCPE-234122](https://bugs.mojang.com/browse/MCPE-234122))
- Items now flow properly in water again ([MCPE-234749](https://bugs.mojang.com/browse/MCPE-234749))

### Mobs

- Wolf shadow and model are now centered ([MCPE-176018](https://bugs.mojang.com/browse/MCPE-176018))
- The baby variants of Zombies, Zombie Villagers, Drowned, and Husks now drop items when killed ([MCPE-93172](https://bugs.mojang.com/browse/MCPE-93172))
- The baby variants of Squid and Glow Squid no longer drop items when killed ([MCPE-189551](https://bugs.mojang.com/browse/MCPE-189551))
- Fixed an issue where Polar Bears recalculated their path to the target twice as often during the stomp attack
- Improved movement logic for Nautili and other underwater mobs
  - They are now less likely to get stuck on block edges
  - When tempted, they navigate around obstacles instead of moving in a straight line toward the player
  - They no longer spin while moving vertically
  - They no longer move excessively slowly when moving vertically
- Mob effect particles can now appear slightly outside of the mob's bounding box
- Tweaked the chance of Zombie Riders spawning with Copper Armor to more closely match Java ([MCPE-229469](https://bugs.mojang.com/browse/MCPE-229469))
- Tweaked the chance of Husk Riders spawning with Copper Armor to more closely match Java
- Players and baby Drowned no longer float on Nautili when riding them
- Attachable items no longer render when equipped to a Zombie Nautilus via commands
- Drowned, Skeleton, Stray, Bogged and Parched can no longer pick up spears
- Zombies that spawn riding Zombie Horses now have a loot table with an armor chance matching that of regular Zombies ([MCPE-232098](https://bugs.mojang.com/browse/MCPE-232098))
- Baby Horses, Donkeys, and Mules no longer gradually grow in size as they age, matching Java Edition ([MCPE-121628](https://bugs.mojang.com/browse/MCPE-121628))
- Fixed a bug where baby Zombie Horses would shrink in size when they grew into adult Zombie Horses
  - They cannot now grow into adult Zombie Horses at all, matching Java Edition
- Nautilus and baby Nautilus now have swim sounds
- Zombie Nautilus now has swim sounds
- Nautilus now has alternative ambient, hurt, and death sounds when on land
- Baby Nautilus now has unique swim sounds, including alternative ambient, hurt, and death sounds when on land
- Zombie Nautilus now has alternative ambient, hurt, and death sounds when on land
- Baby Drowned can now spawn with Tridents
- Adjusted the ratio at which Drowned spawn with Tridents and Fishing Rods, matching Java Edition
- Creaking attack animation is no longer cut short ([MCPE-187288](https://bugs.mojang.com/browse/MCPE-187288))
- The Water Breathing effect now prevents the Nautilus from suffocating outside of water, consistent with its behavior for other aquatic mobs ([MCPE-232061](https://bugs.mojang.com/browse/MCPE-232061))
- Drowned can now control the Zombie Nautilus they ride, allowing them to actively chase their target ([MCPE-232370](https://bugs.mojang.com/browse/MCPE-232370))
- The Baby Zombie Horse can no longer be ridden
- The Baby Zombie Horse can no longer be equipped with a Saddle or Horse Armor
- The following undead mobs will no longer panic when hit
  - Camel Husks
  - Skeleton Horses
  - Zombie Horses
- Wolf Armor is now aligned to the Wolf when it has the Armor equipped ([MCPE-232488](https://bugs.mojang.com/browse/MCPE-232488 "https://bugs.mojang.com/browse/mcpe-232488"))
- Fixed a bug that prevented some zombie variants to form Chicken Jockeys, including: ([MCPE-223845](https://bugs.mojang.com/browse/MCPE-223845))
  - Baby Drowned
  - Baby Husk
  - Baby Zombie Villager
  - Baby Zombified Piglin
  - These now have the random ability to sometimes mount the following mobs:
    - Cat
    - Cave Spider
    - Chicken
    - Cow
    - Donkey
    - Horse
    - Husk
    - Mooshroom
    - Mule
    - Ocelot
    - Panda
    - Pig
    - Spider
    - Wolf
    - Zombie
    - Zombie Horse
    - Zombie Villager
    - Zombified Piglin
- Zombie horses and Zombie Nautiluses no longer occasionally burn while swimming in water ([MCPE-229542](https://bugs.mojang.com/browse/MCPE-229542))
- Fixed a bug where most mobs would stare at players, mobs or targets for an excessive amount of time
  - For more details see the technical section
- Fixed bug where several mobs would look at players from a further distance than intended
  - Allay
  - Armadillo
  - Axolotl
  - Camel
  - Frog
  - Sniffer
  - Tadpole
  - Turtle
  - Wolf
- All three Nautilus variants no longer have a gap between their head and shell ([MCPE-231602](https://bugs.mojang.com/browse/MCPE-231602))
- Improved swimming animations for all three Nautilus variants:
  - The head now slightly retracts into the shell while swimming, creating a propelling motion
  - This only occurs when the Nautilus is moving and not being ridden
- Nautilus and Zombie Nautilus no longer have permanently increased movement speed after becoming hostile
- Skeleton Horse, Zombie Horse, Zombie Nautilus, and Husk Camel are no longer damaged by the Conduit
- Skeleton Horse, Zombie Horse, Zombie Nautilus, and Husk Camel no longer prevent the Player from sleeping when nearby

### Projectiles

- Lingering and Splash Potions now deflect Ghast Fireballs and other deflectable projectiles on hit ([MCPE-191655](https://bugs.mojang.com/browse/MCPE-191655))
- All projectiles now deflect Ghast fireballs and other deflectable projectiles on hit ([MCPE-232731](https://bugs.mojang.com/browse/MCPE-232731))

### Realms

- Fixed "Realm couldn't load" error from occurring after joining a Realm via invite
- Fixed input legends for Realms purchase reconciliation modal
- Fixed issue where narration was not always reading the description for the "Free up space" popup dialog when using a mouse
- The description and storage bar labels under the "Free up space" popup dialog are now treated as two separate objects for narration instead of one
- For the Realms Edit World screen, the description of the Reset and Replace confirmation modals have been updated
- Overwriting saves to create a new save while the "Automatic" tab is active no longer throws an error
- The Realm Saves screen will now properly exit its loading state after encountering an error while performing a save, delete, or restore action
- Realms feed moderation report notifiers is now a separate screen instead of a modal to fix visual bugs.
- Fixed a bug where the game could crash if the player cancelled in the middle of creating a template world on a Realm.
- The leading "1" is no longer displayed in the game server version for backups
- Fix players potentially getting stuck between Realms timeline opt-in screen and play on Realms progress screen
- Navigate players to a Realms Purchase Complete screen instead of showing a modal upon a successful purchase
- Fixed bug in Realms where Villages would not generate until approached
- Fixed a freeze that could happen when buying a Realm on Nintendo Switch

#### Sounds

- Saddle equip sound is no longer played twice
- Added underwater saddle sound for the Nautilus and the Zombie Nautilus
- Equipping Nautilus Armor through the UI now plays the equip sound
- Players can now hear the Nautilus riding sound at 16 blocks distance, and the sound volume is now lower

### User Interface

- Cancelling during transfer between servers will no longer softlock players
- You can now change the world name in a new template world without unlocking settings ([MCPE-188434](https://bugs.mojang.com/browse/MCPE-188434))
- Ambient mob effects in the Mob Effects screen now have a blue outline ([MCPE-230838](https://bugs.mojang.com/browse/MCPE-230838))
- Fixed various interactions not swinging the player's hand ([MCPE-52105](https://bugs.mojang.com/browse/MCPE-52105))
  - Leash interactions
  - Bucketing a mob
  - Feeding a mob its taming item
  - Feeding a mob its aging item
  - Feeding a mob its trusting item
  - Feeding a mob its breeding item
  - Feeding a mob its healing item
  - Feeding a mob its bribing item
  - Attaching/removing a Balloon
  - Using a Name Tag on a mob
  - Starting to ride a mob
  - Make a mob sit
  - Giving a mob an item
  - Starting to trade with a mob
  - Opening a mob's inventory
  - Applying dye to a mob
  - Interacting with an Armor Stand
  - Interacting with a Redstone Ore block
  - Interacting with a Beehive or Bee Nest block
  - Curing a Zombie Villager
  - Shearing a mob
  - Milking a Cow or Mooshroom
- Fixed a bug where the Escape key would not open the game menu when on the death screen
- Changed Settings button on the Game Menu back to being a text button. The change will be rolled out over the course of a few weeks, so you might not see the new menu right away.
- Newly bred and mounted baby Horses, Mules, and Donkeys now show the correct number of hearts when fully grown ([MCPE-165899](https://bugs.mojang.com/browse/MCPE-165899))
- Fixed a misleading message shown when trying to sleep in a Bed ([MCPE-184973](https://bugs.mojang.com/browse/MCPE-184973))
- Fixed a typo in the Minecoins section of Encyclopedia ([MCPE-227680](https://bugs.mojang.com/browse/MCPE-227680))
- Fixed text inconsistency in the Navigation section of Encyclopedia ([MCPE-228203](https://bugs.mojang.com/browse/MCPE-228203))
- Fixed typos in the Worlds section in Encyclopedia ([MCPE-229652](https://bugs.mojang.com/browse/MCPE-229652))
- Fixed incorrect character follow-cursor behavior in the inventory (MCPE-228287)
- Fixed incorrect character follow-cursor behavior in the inventory (MCPE-228287)
- Marketplace behavior packs will not be listed as reason for achievements disabled in Create new world ([MCPE-232391](https://bugs.mojang.com/browse/MCPE-232391))
- Fixed an issue where a text field would receive focus when the mouse hovered over it ([MCPE-229178](https://bugs.mojang.com/browse/MCPE-229178))
- Fixed an issue where it was impossible to enter text into the always listening text field after it lost focus ([MCPE-230779](https://bugs.mojang.com/browse/MCPE-230779))
- Reverted name of "Only add/see trusted skins" option in Ore UI General Settings to "Only Allow Trusted Skins" and removed attached description ([MCPE-229312](https://bugs.mojang.com/browse/MCPE-229312))
- Fixed the wrong panorama movement direction in the main menu ([MCPE-225208](https://bugs.mojang.com/browse/MCPE-225208))
- Fixed an issue that caused the graphics quality preset option under Vibrant Visual Options not to change to Custom the after adjusting the quality settings for the first time ([MCPE-219844](https://bugs.mojang.com/browse/MCPE-219844))
- Fixed a bug that prevented strings within Storage Settings to update when changing language ([MCPE-230775](https://bugs.mojang.com/browse/MCPE-230775))
- Reverted name of "Enter sleep mode when no inputs detected" option in Ore UI General Settings to "Lower framerate when controller is disconnected" and removed attached description ([MCPE-229351](https://bugs.mojang.com/browse/MCPE-229351))
- Fixed an issue that caused the "Extra large UI" option in Ore UI Video Settings to set the wrong GUI scale
- Removed the "recommended" value information for "Deferred render distance" option when Vibrant Visuals graphics mode is selected in Ore UI Video Settings ([MCPE-232366](https://bugs.mojang.com/browse/MCPE-232366))
- Fixed the description of the "Show player names" option in Ore UI Video Settings ([MCPE-232690](https://bugs.mojang.com/browse/MCPE-232690))
- Fixed a bug where the text to speech settings incorrectly auto enabled after restarting the game. ([MCPE-232656](https://bugs.mojang.com/browse/MCPE-232656))
- Fixed an issue that caused the shield to appear colored if placed in a slot that previously contained a colored shield.
- Windows light and dark theme is now supported correctly for the title bar ([MCPE-230820](https://bugs.mojang.com/browse/MCPE-230820))
- Worlds that have periods in the folder name on Windows will now show on the Play screen ([MCPE-231432](https://bugs.mojang.com/browse/MCPE-231432))
- Fixed a bug where global resource packs did not apply after leaving the settings screen. ([MCPE-233214](https://bugs.mojang.com/browse/MCPE-233214))
- Fixed a bug where the social settings screen softlocks the game upon any dropdown selection. ([MCPE-233215](https://bugs.mojang.com/browse/MCPE-233215))

#### Settings

- The new design for Settings will remain in the Beta and Preview versions only for a while longer, while we work on polishing and bug fixing

### Vanilla Parity

- The outline color of an active effect now changes if an ambient effect is replaced by an identical non-ambient effect, or vice versa ([MCPE-230918](https://bugs.mojang.com/browse/MCPE-230918))
- Changed the updating logic for Mob Effects to be more aligned with Java Edition

## Technical Updates

### AI Goals

- Spawning an entity with behavior.nearest_attackable_target no longer shows a content log error ([MCPE-231095](https://bugs.mojang.com/browse/MCPE-231095))
- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.0 and newer
  - minecraft:behavior.defend_village_target
  - minecraft:behavior.nearest_attackable_target
- Float range field attack_interval in minecraft:behavior.nearest_attackable_target now only accepts an object with min and max values. Other formats will fail to parse
- Made the schema for minecraft:behavior.guardian_attack stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.0 and newer
- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.0 and newer
  - minecraft:behavior.timer_flag_1
  - minecraft:behavior.timer_flag_2
  - minecraft:behavior.timer_flag_3
  - minecraft:behavior.move_towards_dwelling_restriction
  - minecraft:behavior.move_towards_home_restriction
- Float Range fields cooldown_range and duration_range in minecraft:behavior.timer_flag_1, minecraft:behavior.timer_flag_2, and minecraft:behavior.timer_flag_3 now only accepts an object with min and max values. Other formats will fail to parse
- Made the schema for for the following goals stricter when parsing, they will now fail to load an entity json that has invalid data in versions 1.26.0 and newer
  - minecraft:behavior.delayed_attack
  - minecraft:behavior.dragonstrafeplayer
  - minecraft:behavior.dragonchargeplayer
  - minecraft:behavior.melee_attack
  - minecraft:behavior.melee_box_attack
  - minecraft:behavior.stomp_attack
- Float Range field target_zone in minecraft:behavior.dragonchargeplayer and minecraft:behavior.dragonstrafeplayer now only accepts an object with min and max values. Other formats will fail to parse.
- Added new fields to minecraft:jump.dynamic
  - regular_skip_data: Used during normal skip movement
    - distance_scale: The multiplier applied to horizontal velocity when jumping
    - height: The force applied vertically when jumping
    - jump delay: Amount of ticks between sequential jumps
    - animation_duration: Duration of the jump animation
  - fast_skip_data: Used when travelling quickly with skip movement
    - distance_scale: The multiplier applied to horizontal velocity when jumping
    - height: The force applied vertically when jumping
    - jump delay: Amount of ticks between sequential jumps
    - animation_duration: Duration of the jump animation

### API

- Released @minecraft/server version 2.5.0
- Fixed a issue where getComponents on ItemStack could return an undefined in the array, when used in older scripting versions
- Added missing BlockComponentTypes enum values into 2.5.0:
  - PrecipitationInteractions = 'minecraft:precipitation_interactions'
  - RedstoneProducer = 'minecraft:redstone_producer'
  - MapColor = 'minecraft:map_color'
  - Movable = 'minecraft:movable'
- Changed EntityHurtAfterEvent to send when damage amount is zero
- Released PlayerSwingStartAfterEvent from beta to v2.5.0
- Released PlayerSwingEventOptions from beta to v2.5.0
- Released HeldItemOption from beta to v2.5.0
- Released EntitySwingSource from beta to v2.5.0
- Released BlockComponentRedstoneUpdateEvent from beta to v2.0.0
- Released BlockCustomComponent.onRedstoneUpdate from beta to v2.0.0
- Added getComponents to Block into beta
- Added hasComponent to Block into beta
- Fixed a issue where getComponents on Entity could return an undefined in the array, when used in older scripting versions.

### Biomes

- Biomes without a namespace in biomes_client.json will be applied to worlds below base_game_version 1.21.40 with the default namespace
- Enabled the Biome Replacement feature in the Nether
  - Using Biome Replacement for Overworld and Nether for the same Biome is discouraged but not prohibited
  - Biome Replacement in Nether can only be used with minecraft:surface_builder of types: minecraft:overworld, minecraft:frozen_ocean, minecraft:capped, minecraft:the_end

### Blocks

- Updated minecraft:redstone_consumer renamed field propogates_power to propagates_power
- The option alpha_masked_tint in minecraft:material_instances no longer requires "Upcoming Creator Features"
- Released minecraft:redstone_consumer from experimental for format_version \>= 1.26.0
- Added use_liquid_clipping field to the detection_rules in minecraft:liquid_detection ([MCPE-191655](https://bugs.mojang.com/browse/MCPE-191655))
  - "true" means the block will use the "collision_box" to visually clip the water
  - "false" ignores liquid clipping, which will render water across the whole block
  - Defaults to true prior to format_version 1.26.0
  - Defaults to false for format_version 1.26.0 and after
- Released the component minecraft:connection_rule from experimental for block format versions 1.26.0 or higher
- Released the component minecraft:support from experimental for block format versions 1.26.0 or higher
- The block component minecraft:leashable can be used with format_version 1.26.0 and higher without the "Upcoming Creator Features" toggle
- The Block Trait minecraft:connection can now be used without the Upcoming Creator Features toggle
- minecraft:corner_and_cardinal_direction in minecraft:placement_direction can now be used without the Beta APIs toggle
  - There is a known issue with the inside corner state not being set properly, [MCPE-232019](https://bugs.mojang.com/browse/MCPE-232019), that will have a fix in the next full release of 26.10
- Updated documentation for the "use_liquid_clipping" field in "minecraft:liquid_detection" to better explain its use.
- Updated minecraft:geometry block component to fix ([MCPE-231979](https://bugs.mojang.com/browse/MCPE-231979))
  - Changed minecraft:geometry.full_block so **DOWN** face is rotated 180 degrees, this brings it in parity with non data driven full blocks and Java full blocks.
  - Creators can still use the old geometry by explicitly using the identifier minecraft:geometry.full_block_v1.
  - Any existing blocks using minecraft:geometry.full_block that have a format_version less than **1.26.0** will look the same and internally be considered as minecraft:geometry.full_block_v1.
- Released minecraft:collision_box improvements from experimental and removed requirement of format version 1.21.130 or higher for those improvements.
  - Can now have an array of collision boxes
  - Max height has been increased from 16 to 24
- Game no longer crashes on initializing minecraft:collision_box component when the server sends invalid packets
- Custom blocks intersecting with other blocks will have a better ambient occlusion

### Camera

- Provided the script API for supporting entity type families in the aim assist

### Components

- Fixed bug with minecraft:behavior.fire_at_target where the max_head_rotation_x and max_head_rotation_y were applied inversely
- Updated the various "minecraft.behaviour.look_at_X" behavior components
  - Made schemas stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.0 and newer
    - "min_look_time" and "max_look_time" - deprecated and has been replaced properly with "look_time"
      - Uses of "min_look_time" and "max_look_time" will get upgraded automatically
    - "look_time" - takes "min" and "max" as a range
  - These changes affect the following behavior components:
    - "minecraft.behaviour.look_at_entity"
    - "minecraft.behaviour.look_at_player"
    - "minecraft.behaviour.look_at_target"
    - "minecraft.behaviour.look_at_trading_player"
  - Previous usage of the following definitions will not be automatically upgraded to preserve old behavior
    - "look_time" - this was not correctly parsed prior to version 1.26.0, and always resulted in default values being assigned to "min_look_time" and "max_look_time"
    - "target_distance" - was used in some definitions and it was never passed to the component
      - This would just silently fail and assign default values to the component

### Editor

- Added Edit Tags menu item in the structure panel, so tags for one or more checked structures can be edited
- Added modal popup 'Edit Tags' to add new or remove existing tags from the selected structures
- Added isActive property to IModalTool to check for the active state
- Added onSelectedToolChanged property to IModalToolContainer to listen for global modal tool change events
- Added settings persistence for the scripted extensions
- Updated Elevation icons for Terrain Tool
- Updated selected modal tool to toggle off when changing out of Tool mode, then toggle on after returning back
- Fixed a bug where enabling "restrict smart fill to selection" in Smart Fill caused the project to crash and exit for large selection areas
- Fixed a bug where cursor bound widgets triggered state change events while hidden
- Fixed a bug where the game would freeze when using the Terrain Tool's Elevation mode to Lower the terrain near the bottom of the world
- Fixed the cursor distance limit to match the spherical view distance setting
- Fixed a bug that caused Selection/quick-move mode to get into a bad state if you tried to use "enter" to make a selection while in Quick Move mode
- Fixed an issue where opening the Vibrant Visuals pane and selecting a setting would not display the selected setting
- Fixed an issue when Quick Move was used on a large brush selection, the client would freeze and crash
- Fixed Vibrant Visual mode in the Editor not rendering water correctly
- Added getDefaultProperties, popPropertiesById, pushPropertiesById and updatePropertiesById functions to Cursor API to manage stateful properties
- Added dimensionId and ignoreEditorModeVisibilityOverride to the Widget API to control widget visibility without manual handling
- Added a drawerPane API property to IRootPropertyPane for displaying a split-view drawer overlaid on the root pane's contents
- Added a style API property to IPropertyItemOptionsBase for overriding default styles of items
- Added 3-point selection mode enabled by default (shift-click to make a 3D volume selection), added '2-Point Selection' toggle to disable
- Updated IListPanePropertyItem to dynamically adjust its size based on the number of entries until the maximum height is reached, unless the optional fixedHeight property is set
- Updated LayoutAlignment API enum values to be Start and End, instead of Left and Right
- Updated LayoutDirection API with PaneLayoutType, and Horizontal property will now be treated as a single row
- Updated Grapple tool so it will work within the full view distance
- Fixed a bug that caused Navigation panel selected location to not mark the list entry
- Fixed a bug that caused the input field focus highlight to remain after a drag operation
- Added Chunk Management panel to World menu for regenerating or deleting chunks.
- Adds a dynamic limit for selection volumes that limits the volume to 1,000,000 blocks. This allows for non-cube rectangular volumes larger than the previous 100x100x100 cube limit. A larger cube limit is still present at 1024x1024x1024
- Added Cinematic Tool for creating camera animation paths;
  - Create paths using control points with spline interpolation (Catmull-Rom or Linear).
  - In-game visualization of control points and spline paths with interactive gizmos.
  - Play/stop animation preview for camera movement along the spline path.
  - Export TypeScript code with validation for duplicate timestamps.
- Added Flood Tool to Editor - a new tool for efficiently flooding or draining water and lava across large areas
- The Vibrant Visuals Settings panel now supports editing settings for each biome
- Blocks that leverage the minecraft:connection block trait now will connect when used in the Editor

### Entity

- All projectiles now deflect "reflect_on_hurt:true" projectiles on hit as outlined in the documentation ([MCPE-232731](https://bugs.mojang.com/browse/MCPE-232731))
  - This is in addition to damage causing these projectiles to be deflected

### Entity Components

- Changed the swing field to default to true in the minecraft:interact component
- Fixed an issue where 'on_equip' and 'on_unequip' events on the 'minecraft:equippable' entity component would be executed on world load
  - The 'on_equip' and 'on_unequip' events now only execute as a result of an interaction in the game world
- Split the minecraft:breedable component into two:
  - minecraft:offspring_data which defines how an offspring of an entity is born, it contains the following fields moved from minecraft:breedable
    - blend_attributes
    - inherit_tamed
    - mutation_factor
    - mutation_strategy
    - random_variant_mutation_interval
    - random_extra_variant_mutation_interval
    - deny_parents_variant
    - breeds_with
    - combine_parent_colors
    - property_inheritance
    - parent_centric_attribute_blending
  - minecraft:breedable now only contains data about how an entity uses breeding behavior
    - Such as how it enters the "love" state such as the items it requires, if it must be tamed, or at full health
    - How it handles the pregnancy system and fires those events
    - The way it spawns the child entity is via the minecraft:offspring_data component which an entity must have

### General

- minecraft://connect?localLevelId=\<level id\> launch protocol requires the level id to be a url encoded value
- Fixed an issue where development resource packs enabled globally would not reload when leaving and re-entering a world or using the /reload all command ([MCPE-232054](https://bugs.mojang.com/browse/MCPE-232054))
- Added minecraft:village_type biome component that determines the type of the village in the biome
- Fixed issue where marketplace content did not load correctly on PlayStation
- Added new Biome tags
  - "slime" tag allows Slime to spawn higher than usual
  - "swamp_water_huge_mushroom" tag allows huge mushrooms to spawn in shallow swamp water
  - "fast_fishing" tag increases Fishing speed
  - "high_seas" tag alters Salmon behavior
  - "surface_mineshaft" tag changes Surface Mineshaft blocks to Dark Oak
- Changed so that it is possible to reuse a keybinding for normal actions, macros, and coordinates

### Graphical

- Introduced new parameter biome_water_color_contribution to the Vibrant Visuals water effects configuration file. This new parameter controls the contribution of per-biome water colors provided by \*.client_biome.json files.
  - Range: \[0.0, 1.0\]
  - Default value: 0.0
- Fixed attachables not rendering correctly when the game is paused or when rendered in an NPC UI window.

### Items

- The item component minecraft:damage now supports values between 0 and 32767 ([MCPE-180073](https://bugs.mojang.com/browse/MCPE-180073))

### JSON Schema

- Fixed an issue where generated JSON Schemas included superfluous \_array fields (e.g. on_bred_array, on_death_array) for certain components such as experience_reward

### Molang

- The pre_animation and initialize fields in minecraft:client_entity and minecraft:attachable\\ now properly support {} brace scope delimiters across multiple lines
  - This change applies only when using format version 1.26.0 or higher

### Network Protocol

- ActorDamageCause modified: deprecated ActorDamageCause::Dehydration
- ActorType modified: added ActorType::Undead
- ActorType modified: renamed ActorType::UndeadMob to ActorType::UndeadMonster
- ActorCategory modified: renamed ActorCategory::UndeadMob to ActorCategory::UndeadMonster
- Added new Level Sound Event "saddle_in_water"
  - Levelsoundevent modified: added unique sound events for every spear type

### Packs

- Fixed issue on Windows where skin_packs and custom_skins weren't migrated ([MCPE-230229](https://bugs.mojang.com/browse/MCPE-230229))
- Added a migration step to move skin_packs, custom_skins, and development_skin_packs from user to Shared storage
- Added a migration step to move development_resource_packs and development_behavior_packs from user_id to Shared storage ([MCPE-230229](https://bugs.mojang.com/browse/MCPE-230229))

### Sounds

- Every spear type now has its own unique sound event, allowing creators to define dedicated custom sounds

### Stability and Performance

- Fixed a bug where some low memory Android devices would crash at startup
- Fixed a bug that was causing crashes when using the NPC component
- Fixed might occur crash when suspended title during "Syncing user data" UI is running
- Fixed a rare crash when trying to breed animals

### Storage

- Fixed an issue on Windows where the resource_packs and behavior_packs folders weren't migrated to the new file directory ([MCPE-230229](https://bugs.mojang.com/browse/MCPE-230229))
- Temporary files on Windows will now write to %LocalAppData%\Temp\Minecraft Bedrock Preview and %LocalAppData%\Temp\Minecraft Bedrock respectively ([MCPE-232633](https://bugs.mojang.com/browse/MCPE-232633))
- Fixed issue where worlds in the "Shared" folder could not be duplicated or exported. ([MCPE-231970](https://bugs.mojang.com/browse/MCPE-231970))

### User Interface

- Updated the priority of stack_panel children to be bindable

#### UI Scaling

- Consolidated JSON UI and Ore UI under one scaling approach
- Ore UI screens use full-integer scaling for sharper visuals
- Revised scaling range: new defaults, new min/max
- Default scale uses DPI-based detection on handheld devices
- Minimum scale set to half the maximum scale value

## Experimental Technical Updates

### API

- Added @minecraft/server version 2.6.0-beta
- Added localizationKey property to BlockType and BlockPermutation
- Added the /packstack command to the command window that allows users to see what packs they have installed and their world template data if one is in use
- Added localizationKey property to EntityType
- Added localizationKey property to ItemType
- Added class EntityHurtBeforeEvent to beta
- Added class EntityHurtBeforeEventSignal to beta
- Added interface EntityHurtAfterEventOptions to beta
- Added interface EntityHurtBeforeEventOptions to beta
- Added WorldBeforeEvents.entityHurt to beta
- Changed EntityHurtAfterEventSignal to use EntityHurtAfterEventOptions in beta
- Added enum EntityHealCause to beta
- Added class EntityHealSource to beta
- Added class EntityHealAfterEvent to beta
- Added class EntityHealBeforeEvent to beta
- Added class EntityHealBeforeEventSignal to beta
- Added class EntityHealAfterEventSignal to beta
- Added property WorldAfterEvents.entityHeal to beta
- Added property WorldBeforeEvents.entityHeal to beta
- Added interface EntityHealEventOptions to beta
- Added getTags() to BiomeType in beta
- Added hasTags(tags: string\[\]) to BiomeType in beta
- Added containsBiomes(volume: BlockVolumeBase, biomeFilter: BiomeFilter) to Dimension in beta
- Added BiomeFilter interface to beta
- Added the easing type parameter to camera splines API for rotation and position
- Added the privilege with which a closure will be called to API metadata
  - Adding World.seed as a property to expose the world seed to beta
- Added before & after script events for when an entity picks up an item in the world
  - Added class EntityItemPickupAfterEvent to beta
  - Added class EntityItemPickupBeforeEvent to beta
  - Added class EntityItemPickupAfterEventSignal to beta
  - Added class EntityItemPickupBeforeEventSignal to beta
  - Added interface EntityItemPickupEventOptions to beta
  - Added interface ItemFilter to beta
  - Added property WorldAfterEvents.entityItemPickup to beta
  - Added property WorldBeforeEvents.entityItemPickup to beta
- Added attachedTo property to DebugShape which specifies an Entity that this shape should be positionally attached to.
- Added visibleTo property to DebugShape which specifies an (optional) array of players that this shape should be visible to.
- Debug Shapes no longer have a maximum render distance.
- Added EntityItemDropAfterEvent to beta
- Added EntityItemDropAfterEventSignal to beta
- Added EntityItemDropEventOptions to beta
- Added previousPowerLevel to BlockComponentRedstoneUpdateEvent behind BETA

### Blocks

- Blocks can handle the entity execute_event_on_home_block event via custom components in scripting, being beta features

``` auto
system.beforeEvents.startup.subscribe(init => {
        init.blockComponentRegistry.registerCustomComponent('sample:my_custom_block_component', {
            onEntity: (e: BlockComponentEntityEvent) => {
                if (e.name !== "sample:my_entity_named_event") return;
                const block = e.block;
                const source = e.entitySource;
                ...
            },
        });
    });
```

### Camera

- Behavior packs for custom camera splines can be created in the camera/splines/ directory. Splines will only play on the minecraft:free camera preset
- Added the play_spline keyword to the /camera command for playing a spline loaded from behavior pack. Enabled with the Experimental Creator Camera toggle
- Added enum EntityAttachPoint to beta
- Added interface CameraAttachOptions to beta
  - Added method attachToEntity(attachCameraOptions?: CameraAttachOptions): void to beta. This can be used to attach third-person camera to an entity

### Graphical

- The colors of block lights in the RenderDragon Features for Creators experiment have been slightly adjusted; local_lighting.json colors are expected to be in sRGB space
- RenderDragon for Creators Experiment
  - Static colored lighting has been adjusted to dim block light color relative to the max block light emission level, similar to standard, non-colored lighting ([MCPE-231639](https://bugs.mojang.com/browse/MCPE-231639))
  - Static colored lighting on flowing lava and other blocks no longer appears too dark
  - Fixed cases of static colored lighting leaking through corners
  - Added static lighting shading support to data driven entities and items
  - The number of analytic/point lights in the scene is now limited according to resource availability
  - Analytic/point lights will now phase in or out according to their importance to the scene's lighting
- Fixed a crash that can occur with specific blocks in worlds using the Render Dragon Features for Creators experiment
- Fixed a brief flash when removing lights when using static colored lighting
- Added Android/Playstation support for colored block lights in preview for Vibrant Visuals when "Render Dragon Features for Creators" experiment is enabled on world.
- Updated MERS of the following Baby Mobs:
  - Wolf
    - Baby tamed wolf now has MERS maps

### Items

- Fixed bug where custom components used by older versions of item definitions were not being properly loaded.

### Molang

- Added query.get_level_seed_based_fraction molang function behind the Upcoming Creator Features toggle

### Technical

- Added the new tag minecraft:metal_nuggets item tag to Copper, Iron and Gold Nuggets

### User Interface

- When you're disconnected from a server, third-party and external servers will use the same design as the screen for other types of servers. The screen shows the message sent by the server more prominently
