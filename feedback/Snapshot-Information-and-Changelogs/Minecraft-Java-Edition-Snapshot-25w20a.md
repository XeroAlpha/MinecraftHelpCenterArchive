---
title: Minecraft Java Edition - Snapshot 25w20a
date: 2025-05-15T10:05:51Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/36627959856141-Minecraft-Java-Edition-Snapshot-25w20a
hash:
  h_01JV9P54JRXP9FC20VMD31YE2V: new-features
  h_01JV9P54JRK5XVHWF8WQJ7S8V8: music
  h_01JV9P54JRD0WRJJJZ20A47R9W: saddles-updates
  h_01JV9P54JRGGD023TYT2BAQQC8: crafting-saddles
  h_01JV9P54JR992VYMKJFGARN6KX: removing-saddles-and-equipment
  h_01JV9P54JRVDKP35N0SACJ4CC4: loot-table-changes
  h_01JV9P54JRCVJ0RKKP6RRN50NE: changes
  h_01JV9P54JR7TCHY5HB01RBKSVJ: music-and-sound
  h_01JV9P54JR7P2VM5GS3SHJQ3GF: realms
  h_01JV9P54JRDPXK5DSZ5TYCGMKB: technical-changes
  h_01JV9P54JRZH5QCA91YZK72MNF: data-pack-version-77
  h_01JV9P54JSFYXTJQ60Z1RZ428M: dialogs
  h_01JV9P54JSR0ZMKV16T8375QD9: dialog-description-format
  h_01JV9P54JS5DZAW9SN4226PF0K: common-dialog-fields
  h_01JV9P54JSEMQZQXXHZ7SQD4RA: common-button-data
  h_01JV9P54JS3JMKGCVTT26NAB7G: click-action
  h_01JV9P54JS98X27X8F74MP93X9: dialog-types
  h_01JV9P54JS6MV6JQC2HG8BDP79: dialog-body-types
  h_01JV9P54JTDV2BG6VR20C9QTCD: input-control-types
  h_01JV9P54JTTXR77G01W12CVR7E: submit-actions
  h_01JV9P54JTJ4XABD8NEECTE3W9: submit-method-types
  h_01JV9P54JTS2GRHPBVJPH244P7: built-in-dialogs
  h_01JV9P54JTP3PMKT8FVS0M7BVY: dialog-command
  h_01JV9P54JT2R2NA672964NRTA7: pause-screen-configuration
  h_01JV9P54JV9NDRH25EQK3RAPHZ: text-components
  h_01JV9P54JVB1E6EQ2203BEWD2A: click-events
  h_01JV9P54JV5393JT0BC60HK6P0: dialog-click-event
  h_01JV9P54JVTD29N92F0FQW3F44: attributes
  h_01JV9P54JVYMT61A2WKS6PWVSE: ghastsflying_speedattribute
  h_01JV9P54JVTHY3QJHX07XE9KJ0: data-components
  h_01JV9P54JVN0NW35STZTNTNC2Q: equippableitem-component
  h_01JV9P54JV0Y1T01HN4PKY3Q7Q: resource-pack-version-61
  h_01JV9P54JVD8NXECS7JAWBHKCB: ui-sprites
  h_01JV9P54JVZZ5PEE1ENKNVAEYD: fixed-bugs-in-25w20a
  h_01JV9P54JVD4G5EEZKVC6KXXXA: get-the-snapshot
---

This week we’re releasing the final features from this year’s second drop. Today’s snapshot brings craftable saddles as well as some stunning tracks, courtesy of Amos Roddy. We have also added an option to show which song is currently playing in the in-game pause menu.

## New Features

- Added a new Music Disc with the track "Tears" by Amos Roddy
- Made Saddles craftable and shearable
- Updated the main screen panorama

### Music

- Added the following new music tracks by Amos Roddy to Cherry Groves, Forest, Desert, Grove, and Lush Cave Biomes:
  - Below and Above
  - Broken Clocks
  - Fireflies
  - Lilypad
  - O's Piano
- The same songs have been added to the menu music rotation

### Saddles Updates

#### Crafting Saddles

- Saddles can now be crafted with 3 Leather and 1 Iron Ingot
- Recipe unlocks when a player picks up their first Leather

#### Removing Saddles and Equipment

- Saddles, Horse Armor, Harnesses and Carpets can now be removed from the mobs they can be equipped on by using Shears
- Saddles, Horse Armor, Harnesses and Carpets cannot be removed by using Shears while the mob has a rider
- Saddles, Horse Armor, Harnesses and Carpets cannot be removed by using Shears while the player is crouching
- Saddles cannot be removed from Ravagers using Shears
- Dispensers with Shears cannot remove Saddles, Horse Armor, Harnesses or Carpets equipped on mobs

#### Loot Table Changes

Some loot tables have had saddles removed from them and replaced with 1-5 Leather:

- Monster Room chests
- Ancient City chests
- Desert Pyramid chests
- Jungle Pyramid chests
- Stronghold altar chests

## Changes

- Fog is now applied to 3d hud elements such as first person player hands and items in hands
- The Ghast now drops the "Tears" Music Disc when killed by a Fireball deflected by a Player
- The fix to [MC-3697](https://bugs.mojang.com/browse/MC-3697) has been partially reverted. Decorative hanging entities such as paintings and item frames are now immune to explosions from submerged TNT while items and armor stands are once again vulnerable to them
- Updates to music and sound
- Rain and thunder weather is somewhat less foggy now
- Rain fog affects interiors less
- Saddles are now craftable and can be crafted with 3 Leather and 1 Iron Ingot
- Saddles, Horse Armor, and Carpets can now be removed from the mobs they can be equipped on by using Shears
- Some loot tables have been modified to give Leather instead of Saddles
- The Dried Ghast Block no longer breaks if water flows into it

### Music and Sound

- Music now plays even when the game is paused
- Added an option to the Music & Sound settings that allows players to change how frequently music plays while in a game world
- Added an option to the Music & Sound settings that enables a music toast to be shown whenever a song starts playing
  - With this option enabled, the song that is currently playing will be seen at all times in the top left corner of the in-game Pause Menu

### Realms

- Added the Realms logo to the Realms loading screens
- Added region information when connecting to a Realm

## Technical Changes

- The Data Pack version is now 77
- The Resource Pack version is now 61
- "Command Syntax" report now contains information about required permission level

## Data Pack Version 77

- New optional fields can_be_sheared and shearing_sound have been added to the equippable item component
- Added a way to display very simple dialogs to users
- Added custom - a new click_event action type for text components
- Users will now be prompted for confirmation before executing a command from the run_command click action in books and chat if the command can't be parsed or requires elevated permissions (i.e. higher than 0)

### Dialogs

- Added a way to display simple modal dialogs to a user
- Dialogs are stored in a minecraft:dialog registry, but can also be defined inline
- Dialogs are an experimental feature
- To avoid user confusion, dialog screens are marked with a warning sign next to the title
  - Clicking on this warning leads to a dialog that explains to user that this screen is provided by custom content
  - It also gives user an option to leave current world to avoid them being locked in infinite loop of dialogs
- Dialogs can be displayed by server in play and configuration connection phases
  - However, only inline registries are allowed in configuration, since registries are not yet available in that phase
- Dialogs always close after user selects any action
- Dialogs by default will also close after Escape key is pressed
  - When this happens, dialog will run action specific to dialog type described as "exit action" below
  - This behavior is configurable
- When dialog screen is closed, game goes back to previously displayed non-dialog screen or back to gameplay
  - That means that new dialogs always replace already opened ones, if any
- Dialogs screens will pause the game in singleplayer mode
- Dialogs can be configured to be accessible from Pause menu
  - This replaces and expands "Server Links" button added in previous versions
- Most dialogs follow a common layout, however exact contents depend on type:
  - Header with title and warning button
  - Body elements (labels, inputs, buttons and submit actions), scrollable if needed
  - Optional footer, contains main buttons and submit actions

> **Developer's Note**: *Dialogs are not supposed to fully describe any in-game UI, but just to allow custom content to display simple messages and get input from users. This feature is intentionally limited to match that use case.*

#### Dialog Description Format

- Dialogs are stored in minecraft:dialog registry that can be provided by a datapack

Fields:

- type - one of dialog types from minecraft:dialog_type registry
- \<type-specific\> - see below

#### Common Dialog Fields

- Most dialog types share some fields. To avoid duplication, they are listed in this section

Fields:

- title - screen title, text component
  - Should be always visible on screen, no matter the specific type
- external_title - name to be used for a button leading to this dialog (for example from Pause screen), optional text component
  - If not present, title will be used instead
- body - optional list of body elements or a single element, see below
- can_close_with_escape - can dialog be dismissed with Escape key, default true

#### Common Button Data

- Most actions in dialog types share following fields that describe apperance of a button associated with that action:
- label - text component
- tooltip - optional text component to display when button is highlighted or hovered over
- width - width of the button, positive integer with default 150

#### Click Action

- Common object used in dialogs to represent clickable action on a dialog
- Fields:
  - Common button data (see above)
  - on_click - optional click event (same format as click_event on text components)
    - If not present, clicking button will simply close screen without any action

#### Dialog Types

minecraft:notice

- A simple screen with one action in footer
- Exit action: same as action

Fields:

- Common dialog fields (see above)
- action - click action (see above), defaults to button with gui.ok label and no action or tooltip

minecraft:confirmation

- A simple screen with two actions in footer
- Exit action: same as no action

Fields:

- Common dialog fields (see above)
- yes - click action (see above) for positive outcome
- no - click action (see above) for negative outcome

minecraft:multi_action

- A scrollable list of actions arranged in columns
- Screen also has button in footer that runs exit action and closes the screen
  - Label will be gui.cancel if dialog has defined exit action and gui.back if it has no side effects
- Exit action: defined in on_cancel field

Fields:

- Common dialog fields (see above)
- actions - non-empty list of click actions (see above)
- on_cancel - optional click event (same format as click_event on text components)
- columns - positive integer describing number of columns, default: 2

minecraft:server_links

- A scrollable list of links received from server in minecraft:server_links packet, arranged in columns
- Screen also has button in footer that runs exit action and closes the screen
  - Label will be gui.cancel if dialog has defined exit action and gui.back if it has no side effects
- Note: this is a replacement for previous Server Links screen, but now with an additional body
- Exit action: defined in on_cancel field

Fields:

- Common dialog fields (see above)
- on_cancel - optional click event (same format as click_event on text components)
- columns - positive integer describing number of columns, default: 2
- button_width - width of buttons in the list, positive integer with default 150

minecraft:dialog_list

- A scrollable list of buttons leading directly to other dialogs, arranged in columns
  - Titles of those buttons will be taken from external_title fields of targeted dialogs
- Screen also has button in footer that runs exit action and closes the screen
  - Label will be gui.cancel if dialog has defined exit action and gui.back if it has no side effects
- Exit action: defined in on_cancel field

Fields:

- Common dialog fields (see above)
- dialogs - dialog, a list of dialogs or a dialog tag
- on_cancel - optional click event (same format as click_event on text components)
- columns - positive integer describing number of columns, default: 2
- button_width - width of buttons in the list, positive integer with default 150

minecraft:simple_input_form

- A screen that accepts user inputs
- Has a single submit action with in a footer
- Exit action: none (submitting data closes screen, but does not run any action outside of sending data to server)

Fields:

- Common dialog fields (see above)
- inputs - non-empty list of inputs controls, see below
- action - submit action, see below

minecraft:multi_action_input_form

- A screen that accepts user inputs
- Can have multiple submit actions
- Has no footer, submit actions are appended to a body
- Exit action: none (submitting data closes screen, but does not run any action outside of sending data to server)

Fields:

- Common dialog fields (see above)
- inputs - non-empty list of inputs controls, see below
- actions - non-empty list of submit actions, see below

#### Dialog Body Types

- All dialogs have a list of body elements describing contents between title and actions or inputs

Fields:

- type - one of dialog body types from minecraft:dialog_body_type registry
- \<type-specific\> - see below

minecraft:plain_message

- A multiline label

Fields:

- contents - text component
- width - maximum width of message, positive integer with default 200

minecraft:item

- Item with optional description
  - If description is present, it will be rendered to the right of item
- Item will be rendered as if it was in inventory slot
- Item is not scaled even if width and height are set to values other than default

Fields:

- item - item stack with count
- description - optional object with fields:
  - contents - text component
  - width - maximum width of contents, positive integer with default 200
  - Can also be just be text component
- show_decorations - if true, count and damage bar will be rendered over the item, default: true
- show_tooltip - if true, item tooltip will show up when item is hovered, default: true
- width - horizontal size of element, default: 16
- height - vertical size of element, default: 16

#### Input Control Types

- Input dialog uses a set of controls to accept user input
- When submitted, current value of input will be converted to a string and sent to the server as described by Submit Action section below

Fields:

- type - one of input control types from minecraft:input_control_type registry
- key - string identifier of value used when submitting data, must be a valid template argument (letters, digits and \_)
- \<type-specific\> - see below

minecraft:text

- Simple text input
- Sends current contents without modification

Fields:

- width - width of input, positive integer with default: 200
- label - a text component to be displayed to the left of control
- label_visible - controls label visibility, default: true
- initial - initial contents, default: "" (empty)

minecraft:boolean

- A plain checkbox with a label

Fields:

- label - a text component to be displayed to the right of control
- initial - an initial value, default: false (i.e. unchecked)
- on_true - a string value to send when control is checked, default: 'true'
- on_false - a string value to send when control is unchecked, default: 'false'

minecraft:single_option

- A button that cycles between a set of options when clicked
- Sends value associated with currently selected preset

Fields:

- label - a text component to be displayed on the button
- label_visible - if true, label will be incorporated into button text, default: true
- width - width of button, positive integer with default: 200
- options - a list of objects with fields:
  - id - a string value to send on submit
  - display - a text component to display on button, optional (if not present, id is used)
  - initial - an optional boolean flag that selects initial option (only one option can have it set to true)
  - Additionaly list might also contain plain string - in that case it's equivalent to a single entry with field id set to that string and other fields set to default

minecraft:number_range

- A slider for picking a numeric value out of some range
- Sends currently selected value
  - Whole numbers will be sent without decimal point

Fields:

- label - a text component to be used as a slider label
- label_format - a translation key to be used for building label (first argument is contents of label field, second argument is current value), default: options.generic_value
- width - width of input, positive integer with default: 200
- start - start value (when slider is in leftmost position) (inclusive), float
- end - end value (when slider is in rightmost position) (inclusive), float
- steps - number of increments, positive integer
  - Note: value of 1 means that slider will have two positions (start and end)
- initial - initial value of slider, rounded down nearest step, must be within range, defaults to min

#### Submit Actions

- Every submit action on input dialog has a button associated with it
- When one of those buttons is clicked, values of all inputs will be collected and sent to a server using one of methods described below
- id field of a submit action will be included as an input with key action
- Submit action fields:
  - Common button data (see above)
  - id - string identifier of an action
  - on_submit - submit method to run when button is clicked, object with following fields:
    - type - one of submit method types from minecraft:submit_method_type registry
    - \<type-specific\> - see below
- Note: server does not validate individual values as they arrive as filled commands or custom payloads

#### Submit Method Types

minecraft:command_template

- This method will build a command using a provided macro template and request the server to run it (same as minecraft:run_command click event)
- If the command requires permission higher than 0 (when any operator permissions are required), a confirmation dialog will be shown
- Macro will be expanded with values from input
  - For example, if macro is some_command \$(action), action parameter will be expanded to id field of a submit action
  - Inputs not used in macro will be ignored, while macro parameters not matching any inputs will be replaced with an empty string

Fields:

- template - a string with a macro template to be interpreted as a command

minecraft:custom_template

- This method will build a custom server click action using a provided macro template and send it to the server (same as minecraft:custom click event)
- Macro will be expanded with values from input
  - Inputs not used in macro will be ignored, while macro parameters not matching any inputs will be replaced with an empty string

Fields:

- template - a string with a macro template to be used as a payload
- id - namespaced ID

minecraft:custom_form

- This method will build a custom server click action from all values and request the server to run it (same as minecraft:custom click event)
- Format:
  - keys are separated from values with horizontal tabulation (U+0009) character
  - key-value entries are separated with line feed (U+000A) character
  - If characters U+0009 and U+000A are present in any key or value, they will be escaped to \t and \n

Fields:

- id - namespaced ID

#### Built-in dialogs

The built-in datapack contains some custom dialogs to provide customization of specific screens used by client

minecraft:server_links

- Replacement for previously existing "Server Links" screen
- Meant to simplify migration for servers that used this feature previously

minecraft:custom_options

- Shows contents of minecraft:pause_screen_additions tag (see below)
- Lets user select a specific dialog if this tag contains multiple entries
- Note: Since this tag is meant for interoperability, any content that replaces this dialog should be careful to not hide other dialog providers

#### Dialog Command

- New command has been added to show dialog to clients

Syntax:

- dialog show \<targets\> \<dialog\> - show dialog to player(s)
  - \<targets\> - player name, UUID or a player selector
  - \<dialog\> - a namespaced ID from minecraft:dialog registry or inline dialog value as described above
  - Returns number of players in targets argument
- dialog clear \<targets\> - clean dialog for player(s), if they have any visible
  - \<targets\> - player name, UUID or a player selector
  - Returns number of players in targets argument

#### Pause Screen Configuration

- A data pack can request some of the available dialogs to be accessible from Pause screen
- This feature replaces "Server Links" button and is placed on Pause screen according to the same rules
- Buttons leading to dialogs exposed in this way will use label described in external_title field
- This feature is configured by minecraft:pause_screen_additions dialog tag:
  - If this tag is not specified or is empty but the server has sent server_links packet, tag will be handled as if it contained minecraft:server_links dialog
    - Note: this matches previous Server Links feature behavior
    - If this dialog is removed, the tag remains empty
  - If this tag is still empty, button is not visible ("Send Feedback" and "Report Bugs" buttons are visible instead)
  - If this tag has a single element, Pause screen button will lead directly to this dialog
  - If this tag has multiple elements, Pause screen button will lead to minecraft:custom_options which (by default) lets user select one of the tag elements
    - If this dialog is removed, button is not visible

### Text Components

#### Click Events

- New click action minecraft:custom has been added
  - When user clicks a component with this click action, client will send a dedicated packet minecraft:custom_click_action to a server
  - The intended use is as an alternative for run_command to be used by modded servers without worrying about having to add custom commands
  - This packet has no functionality on vanilla servers
  - Fields:
    - id - namespaced ID
    - payload - optional string field

#### Dialog Click Event

- New action show_dialog has been added
  - When user clicks this component, a dialog will be opened for them
  - Fields:
    - dialog - a namespaced ID from minecraft:dialog registry or inline dialog value as described above

### Attributes

#### Ghasts flying_speed attribute

- Ghasts now have a flying_speed attribute that affects their flying speed

### Data Components

#### equippable Item Component

- Added new optional field: can_be_sheared (boolean)
  - If true, players can use Shears to remove this equippable item from a target mob by right-clicking, provided all other shearing conditions are satisfied
  - If not specified, it defaults to false
- Added new optional field: shearing_sound (sound event)
  - It's a sound event that plays when the equippable item is sheared
  - If not specified, it defaults to the item.shears.snip sound event

## Resource Pack Version 61

### UI Sprites

- Added icon/music_notes and toast/now_playing sprites

## Fixed bugs in 25w20a

- [MC-97423](https://bugs.mojang.com/browse/MC-97423) - Horse temporarily stuck in jump animation if dismounted
- [MC-103511](https://bugs.mojang.com/browse/MC-103511) - Sound/Song stops playing after adjusting the volume
- [MC-118081](https://bugs.mojang.com/browse/MC-118081) - Sounds don't pause when game is paused on some UI screens
- [MC-248682](https://bugs.mojang.com/browse/MC-248682) - Translucent blocks moved by pistons aren't affected by fog correctly
- [MC-248688](https://bugs.mojang.com/browse/MC-248688) - Falling translucent blocks aren't affected by fog correctly
- [MC-269744](https://bugs.mojang.com/browse/MC-269744) - Out of memory crash when using a preset with a large layer
- [MC-276665](https://bugs.mojang.com/browse/MC-276665) - Music is never turning on when it's toggled in the menu
- [MC-277991](https://bugs.mojang.com/browse/MC-277991) - The 2 brightest pixel colors on pale oak boat items are still switched
- [MC-296311](https://bugs.mojang.com/browse/MC-296311) - TNT touching water will destroy blocks and damage entities but will ignore decorative entities
- [MC-296836](https://bugs.mojang.com/browse/MC-296836) - Happy ghast saddle model doesn't change when lead is broken by exceeding max range.
- [MC-296843](https://bugs.mojang.com/browse/MC-296843) - Clouds are rendered incorrectly on some Mac systems
- [MC-297524](https://bugs.mojang.com/browse/MC-297524) - Connection with realm gives weird HTML text
- [MC-297535](https://bugs.mojang.com/browse/MC-297535) - The enchantment glint doesn't render in first person or the inventory
- [MC-297544](https://bugs.mojang.com/browse/MC-297544) - Rain fog does not affect 1st person hand or items
- [MC-297570](https://bugs.mojang.com/browse/MC-297570) - Block breaking overlay not affected by environmental fog

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/4b7a074f7813de85698c185100736fae64f9b4fa/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
