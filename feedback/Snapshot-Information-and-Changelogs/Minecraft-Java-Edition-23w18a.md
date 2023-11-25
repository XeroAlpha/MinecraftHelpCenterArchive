---
title: "Minecraft: Java Edition - 23w18a"
date: 2023-05-03T14:24:55Z
updated: 2023-05-03T14:27:00Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/15447880761997-Minecraft-Java-Edition-23w18a
---

In this snapshot we\'re bringing you an additional advancement, updates to telemetry, as well as a fix for an 11 year old bug!

Happy stepping!

If you find any bugs, please report them on the official [Minecraft Issue Tracker](https://aka.ms/snapshotbugs?ref=reddit). For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback).

::: _7T4UafM1PdBGycd5na9nF
New Features
:::

::: _1WODZhR-x-fbMu3MOL9cH1
New advancements
:::

::: WFFrvt6_3z5B7MBcYKr8U
Adventure advancements
:::

-   `The Power of Books`{._34q3PgLsx9zIU5BiSOjFoM} : Read the power signal of a Chiseled Bookshelf using a Comparator

::: _7T4UafM1PdBGycd5na9nF
Changes
:::

-   For ease of use, the Smithing Table no longer requires a Smithing Template to be in the template slot before placing an itemstack into the other slots

-   Jukebox has been added to the Redstone Blocks creative tab

::: _1WODZhR-x-fbMu3MOL9cH1
Step Sounds
:::

-   Walking on a block will now always play a step sound

    -   It was previously not the case if you were walking along the edge of a block with air or fluid besides it

-   Walking on the ocean floor will produce a step sound for the block you are walking on at a lower volume and pitch

::: _7T4UafM1PdBGycd5na9nF
Technical Changes
:::

-   The data pack version is now 15, accounting for sign data format, item display orientation and advancement changes

-   Advancement trigger changes:

    -   Added `recipe_crafted`{._34q3PgLsx9zIU5BiSOjFoM}

    -   Changed format of `placed_block`{._34q3PgLsx9zIU5BiSOjFoM}, `item_used_on_block`{._34q3PgLsx9zIU5BiSOjFoM} and `allay_drop_item_on_block`{._34q3PgLsx9zIU5BiSOjFoM} triggers

-   Loot table condition/predicate changes:

    -   Renamed `alternative`{._34q3PgLsx9zIU5BiSOjFoM} to `any_of`{._34q3PgLsx9zIU5BiSOjFoM}

    -   Added `all_of`{._34q3PgLsx9zIU5BiSOjFoM}

-   Updates to telemetry

    -   A new property has been added to every event: `launcher_name`{._34q3PgLsx9zIU5BiSOjFoM}

    -   The `world_loaded`{._34q3PgLsx9zIU5BiSOjFoM} event now has a new property: `realms_map_content`{._34q3PgLsx9zIU5BiSOjFoM}

    -   Added two new opt-in telemetry events: `game_load_times`{._34q3PgLsx9zIU5BiSOjFoM} and `advancement_made`{._34q3PgLsx9zIU5BiSOjFoM}

::: _1WODZhR-x-fbMu3MOL9cH1
Advancements
:::

::: WFFrvt6_3z5B7MBcYKr8U
Changed triggers
:::

-   All fields in `placed_block`{._34q3PgLsx9zIU5BiSOjFoM}, `item_used_on_block`{._34q3PgLsx9zIU5BiSOjFoM} and `allay_drop_item_on_block`{._34q3PgLsx9zIU5BiSOjFoM} have been collapsed to a single `location`{._34q3PgLsx9zIU5BiSOjFoM} field

-   New `location`{._34q3PgLsx9zIU5BiSOjFoM} is similar to `player`{._34q3PgLsx9zIU5BiSOjFoM} field - it\'s a list of loot conditions/predicates

-   All conditions in this list must match for a trigger to run

-   Conditions are evaluated in a new loot context called `advancement_location`{._34q3PgLsx9zIU5BiSOjFoM}. It has access to:

    -   Player as `this`{._34q3PgLsx9zIU5BiSOjFoM} entity

    -   Position of placed block

    -   Block state of placed/interacted block

    -   Held/used item as \"tool\"

-   Migration guide:

    -   Contents of old `location`{._34q3PgLsx9zIU5BiSOjFoM} field should be migrated to `location_check`{._34q3PgLsx9zIU5BiSOjFoM} condition

    -   Contents of `item`{._34q3PgLsx9zIU5BiSOjFoM} field should be migrated to `match_tool`{._34q3PgLsx9zIU5BiSOjFoM} condition

    -   Contents of `block`{._34q3PgLsx9zIU5BiSOjFoM} + `state`{._34q3PgLsx9zIU5BiSOjFoM} fields should be migrated to `block_state_property`{._34q3PgLsx9zIU5BiSOjFoM} condition

**Example** (from `make_a_sign_glow`{._34q3PgLsx9zIU5BiSOjFoM} advancement):

Before:

``` _3GnarIQX9tD_qsgXkfSDz1
{
    "conditions": {
        "item": {
            "items": [
                "minecraft:glow_ink_sac"
            ]
        },
        "location": {
            "block": {
                "tag": "minecraft:all_signs"
            }
        }
    },
    "trigger": "minecraft:item_used_on_block"
}
```

After:

``` _3GnarIQX9tD_qsgXkfSDz1
{
    "conditions": {
        "location": [
            {
                "condition": "minecraft:match_tool",
                "predicate": {
                    "items": [
                        "minecraft:glow_ink_sac"
                    ]
                }
            },
            {
                "condition": "minecraft:location_check",
                "predicate": {
                    "block": {
                        "tag": "minecraft:all_signs"
                    }
                }
            }
        ]
    },
    "trigger": "minecraft:item_used_on_block"
}
```

::: _1WODZhR-x-fbMu3MOL9cH1
Loot tables
:::

::: WFFrvt6_3z5B7MBcYKr8U
any_of/all_of
:::

-   Loot condition `alternative`{._34q3PgLsx9zIU5BiSOjFoM} has been renamed to `any_of`{._34q3PgLsx9zIU5BiSOjFoM}

-   Added new loot condition `all_of`{._34q3PgLsx9zIU5BiSOjFoM} that passes only when all sub-conditions pass. It has the same syntax as `any_of`{._34q3PgLsx9zIU5BiSOjFoM}

::: _1WODZhR-x-fbMu3MOL9cH1
Telemetry
:::

This release includes a new global property sent with every event, a new property in the required WorldLoaded event, as well as two new opt-in events. The updated required events will help us troubleshoot launcher bugs more efficiently, and understand how Java Realms content is interacted with. The updated optional events will help inform game design decisions, and allow us to track and improve game load speeds.

::: WFFrvt6_3z5B7MBcYKr8U
All events
:::

-   Added new property: `launcher_name`{._34q3PgLsx9zIU5BiSOjFoM}

    -   This is set based on the `minecraft.launcher.brand`{._34q3PgLsx9zIU5BiSOjFoM} system property. This will help us troubleshoot game launch related bugs more effectively, as we will be able to see whether the issue originated in the Minecraft launcher or a third-party program.

::: WFFrvt6_3z5B7MBcYKr8U
Updated required events
:::

-   `world_loaded`{._34q3PgLsx9zIU5BiSOjFoM}

    -   Added new property: `realms_map_content`{._34q3PgLsx9zIU5BiSOjFoM}

        -   When loading into a Realms Map Content world (Minigame), the `world_loaded`{._34q3PgLsx9zIU5BiSOjFoM} event will receive the name of that map. This is to help us understand how Java Realms users interact with Java Realms adventure or minimap content.

::: WFFrvt6_3z5B7MBcYKr8U
New optional events
:::

-   `advancement_made`{._34q3PgLsx9zIU5BiSOjFoM}

    -   This event is triggered when a player completes an advancement, and allows us to see the advancement ID and the time when the advancement was completed. This helps us as a studio understand player progress and limits, which informs our game design.

-   `game_load_times`{._34q3PgLsx9zIU5BiSOjFoM}

    -   An event that is triggered when the game client is loaded and includes the time it took for the client to load. This is so that we can work on improving and reducing the time it takes to load the game client.

::: _7T4UafM1PdBGycd5na9nF
Fixed bugs in Snapshot 23w18a
:::

-   [MC-1133](https://bugs.mojang.com/browse/MC-1133) - Whether or not a player experiences some effect is calculated based on the block under the center of the player

-   [MC-48923](https://bugs.mojang.com/browse/MC-48923) - Slime/magma cubes not affected by jump boost potion effect

-   [MC-257269](https://bugs.mojang.com/browse/MC-257269) - Sculk sensor detects player walking between carpet and wool

-   [MC-261417](https://bugs.mojang.com/browse/MC-261417) - The hitboxes of sniffers are not adjusted when they lay down

-   [MC-261952](https://bugs.mojang.com/browse/MC-261952) - Clocks flicker rapidly when enchanted and in an unnatural dimension

-   [MC-262003](https://bugs.mojang.com/browse/MC-262003) - Bundle tooltip does not show its interface

-   [MC-262067](https://bugs.mojang.com/browse/MC-262067) - The type of sniffer digging particles that are produced is determined by the block that sniffers are located on instead of the block that sniffers are digging

-   [MC-262069](https://bugs.mojang.com/browse/MC-262069) - Sniffers continue digging after their target block is destroyed

-   [MC-262104](https://bugs.mojang.com/browse/MC-262104) - Rendering of FPS graph seems to be performing worse than before

-   [MC-262123](https://bugs.mojang.com/browse/MC-262123) - Advancement titles of new advancements introduced in 23w17a are improperly capitalized

-   [MC-262133](https://bugs.mojang.com/browse/MC-262133) - Strong lag spikes when moving above a cleared area with exposed void

-   [MC-262218](https://bugs.mojang.com/browse/MC-262218) - Block light updates don\'t cross chunk borders properly in 23w17a

::: _7T4UafM1PdBGycd5na9nF
Get the Snapshot
:::

Snapshots are available for Minecraft Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://minecraft.net/download) and enable snapshots in the \"Installations\" tab.

**Testing versions can corrupt your world, please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://piston-data.mojang.com/v1/objects/240177c763b6009ea81aaf0ef14a73822320856d/server.jar)

::: _7T4UafM1PdBGycd5na9nF
What else is new?
:::

For previous changes for Minecraft 1.20, see the [previous snapshot post](https://www.reddit.com/r/Minecraft/comments/12zk0zo/a_fontastic_delight_snapshot_23w17a_is_out/). Read more about the changes in the Wild update in the [release post](https://www.reddit.com/r/Minecraft/comments/v6xze8/minecraft_java_edition_119_the_wild_update_has/)
