---
title: "Editing the Debug Screen Text via the Debug Options Menu in Minecraft: Java Edition"
date: 2026-11-02T18:37:39Z
updated: 2026-11-02T18:37:45Z
categories: "Minecraft: Java Edition Guides"
tags:
  - title_minecraft_java_edition
  - category_technical_support
  - category_account_support
  - title_minecraft_java_&_bedrock_for_pc
  - title_minecraft_java_bedrock_for_pc
  - subject_account_game_settings
  - section_35377765046541
link: https://help.minecraft.net/hc/en-us/articles/50085182973965-Editing-the-Debug-Screen-Text-via-the-Debug-Options-Menu-in-Minecraft-Java-Edition
hash:
  h_01M6ERTG2DB4SX46E6NPDD9Q04: debug-screen-text
  h_01M6EPK4G32H9AZY1VN7GFVRQH: debug-renders
---

## Debug Screen Text

The **debug screen** consists of elements (referred to as **Debug Screen Text** in the debug options menu). Each of these elements can be individually disabled through the debug options menu, which is accessed by pressing **F3 + F6:**

- **OFF** removes the given element from the debug overlay.
- **In Overlay** adds the given element to the debug overlay.
- **Always** causes the element to display on-screen even when the debug overlay is not open.

There are 2 built-in configurations: **Default Profile** and **Performance Profile**.

The scale of the debug screen can be changed with the **GUI Scale** setting:

- **Auto** tries to stay at a higher resolution than normal.
- **1** – Smallest text and elements. The debug menu is compact, great for high-resolution monitors.
- **2** – Medium size. This is easier to read without taking up too much screen space.
- **3** – Large. Text is more readable, but the debug menu covers more of the screen.
- **4** – Largest possible scale. Very readable, but can feel bulky, especially on smaller screens.
- **Unchanged** matches the regular GUI scale.

Setting the ***reduced_debug_info*** game rule to true prevents some elements from being displayed, even if the player has toggled them to **In Overlay** or **Always**. 

<figure class="wysiwyg-table" style="width: 100%;">
<table class="wysiwyg-table-resized" style="margin-left: 0px; margin-right: auto;" dir="ltr">
<colgroup>
<col style="width: 23%" />
<col style="width: 61%" />
<col style="width: 16%" />
</colgroup>
<tbody>
<tr>
<td style="background-color: #dedede; border-style: ridge; border-width: 3px">Name</td>
<td style="background-color: #dedede; border-style: ridge; border-width: 3px">Description</td>
<td style="background-color: #dedede; border-style: ridge; border-width: 3px">Visible when <em><strong>reduced_debug_info</strong></em> is set to true</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">biome</td>
<td style="border-style: ridge; border-width: 3px">Displays in which biome the player is.</td>
<td style="background-color: #ffd6d6; border-style: ridge; border-width: 3px">No</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">chunk_generation_stats</td>
<td style="border-style: ridge; border-width: 3px">The NoiseRouter line displays the noise values used to generate the terrain. The Biome builder line displays categories for the noise values.</td>
<td style="background-color: #ffd6d6; border-style: ridge; border-width: 3px">No</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">chunk_render_stats</td>
<td style="border-style: ridge; border-width: 3px">Displays information about loaded chunks.</td>
<td style="background-color: #dcffdf; border-style: ridge; border-width: 3px">Yes</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">chunk_source_stats</td>
<td style="border-style: ridge; border-width: 3px">Displays information about client-side chunks.</td>
<td style="background-color: #dcffdf; border-style: ridge; border-width: 3px">Yes</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">day_count</td>
<td style="border-style: ridge; border-width: 3px">Displays the number of days that have elapsed in the world.</td>
<td style="background-color: #ffd6d6; border-style: ridge; border-width: 3px">No</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">detailed_memory</td>
<td style="border-style: ridge; border-width: 3px">Displays in-depth information about the memory usage of the game.</td>
<td style="background-color: #dcffdf; border-style: ridge; border-width: 3px">Yes</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">entity_render_stats</td>
<td style="border-style: ridge; border-width: 3px">Displays information about loaded entities.</td>
<td style="background-color: #dcffdf; border-style: ridge; border-width: 3px">Yes</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">entity_spawn_counts</td>
<td style="border-style: ridge; border-width: 3px">Displays the amount of entities that count toward the mob cap.</td>
<td style="background-color: #ffd6d6; border-style: ridge; border-width: 3px">No</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">fps</td>
<td style="border-style: ridge; border-width: 3px">Displays the framerate.</td>
<td style="background-color: #dcffdf; border-style: ridge; border-width: 3px">Yes</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">game_version</td>
<td style="border-style: ridge; border-width: 3px">Displays the game version.</td>
<td style="background-color: #dcffdf; border-style: ridge; border-width: 3px">Yes</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">gpu_utilization</td>
<td style="border-style: ridge; border-width: 3px">Displays the GPU utilization.</td>
<td style="background-color: #dcffdf; border-style: ridge; border-width: 3px">Yes</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">heightmap</td>
<td style="border-style: ridge; border-width: 3px">The CH line displays values of the corresponding client-side heightmaps at the player's position. The SH line displays values of the corresponding server-side heightmaps at the player's position.</td>
<td style="background-color: #ffd6d6; border-style: ridge; border-width: 3px">No</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">light_levels</td>
<td style="border-style: ridge; border-width: 3px">Displays the client-side light values at the player's feet.</td>
<td style="background-color: #ffd6d6; border-style: ridge; border-width: 3px">No</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">local_difficulty</td>
<td style="border-style: ridge; border-width: 3px">Displays local difficulty-related values.</td>
<td style="background-color: #ffd6d6; border-style: ridge; border-width: 3px">No</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">looking_at_block_states</td>
<td style="border-style: ridge; border-width: 3px">Displays information about the targeted block.</td>
<td style="background-color: #ffd6d6; border-style: ridge; border-width: 3px">No</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">looking_at_block_tags</td>
<td style="border-style: ridge; border-width: 3px">Displays the list of tags containing the targeted entity (one line per tag).</td>
<td style="background-color: #ffd6d6; border-style: ridge; border-width: 3px">No</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">looking_at_entity</td>
<td style="border-style: ridge; border-width: 3px">Displays the identifier of the targeted entity.</td>
<td style="background-color: #ffd6d6; border-style: ridge; border-width: 3px">No</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">looking_at_entity_tags</td>
<td style="border-style: ridge; border-width: 3px">Displays the list of tags containing the targeted entity (one line per tag).</td>
<td style="background-color: #ffd6d6; border-style: ridge; border-width: 3px">No</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">looking_at_fluid_state</td>
<td style="border-style: ridge; border-width: 3px">Displays information about the targeted fluid.</td>
<td style="background-color: #ffd6d6; border-style: ridge; border-width: 3px">No</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">looking_at_fluid_tags</td>
<td style="border-style: ridge; border-width: 3px">Displays the list of tags containing the targeted fluid (one line per tag).</td>
<td style="background-color: #ffd6d6; border-style: ridge; border-width: 3px">No</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">memory</td>
<td style="border-style: ridge; border-width: 3px">Displays information about the memory being actively used by Minecraft and the allocated memory to Minecraft.</td>
<td style="background-color: #dcffdf; border-style: ridge; border-width: 3px">Yes</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">particle_render_stats</td>
<td style="border-style: ridge; border-width: 3px">Displays the number of particles for each group and the total amount.</td>
<td style="background-color: #ffd6d6; border-style: ridge; border-width: 3px">No</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">player_position</td>
<td style="border-style: ridge; border-width: 3px">Displays the coordinates (XYZ) of the Player, Block, Chunk, and Facing</td>
<td style="background-color: #ffd6d6; border-style: ridge; border-width: 3px">No</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">player_section_position</td>
<td style="border-style: ridge; border-width: 3px">Displays the relative coordinates of the block the player's feet are in within the chunk.</td>
<td style="background-color: #dcffdf; border-style: ridge; border-width: 3px">Yes</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">player_speed</td>
<td style="border-style: ridge; border-width: 3px">Displays the player's speed in blocks per tick.</td>
<td style="background-color: #ffd6d6; border-style: ridge; border-width: 3px">No</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">post_effects</td>
<td style="border-style: ridge; border-width: 3px">Displays the current post effects.</td>
<td style="background-color: #ffd6d6; border-style: ridge; border-width: 3px">No</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">simple_performance_impactors</td>
<td style="border-style: ridge; border-width: 3px">Displays various video setting options.</td>
<td style="background-color: #dcffdf; border-style: ridge; border-width: 3px">Yes</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">sound_mood</td>
<td style="border-style: ridge; border-width: 3px">Displays how many sounds are being played and the mood value.</td>
<td style="background-color: #ffd6d6; border-style: ridge; border-width: 3px">No</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">system_specs</td>
<td style="border-style: ridge; border-width: 3px">Displays various computer specifications.</td>
<td style="background-color: #dcffdf; border-style: ridge; border-width: 3px">Yes</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">tps</td>
<td style="border-style: ridge; border-width: 3px">Displays information about the server.</td>
<td style="background-color: #dcffdf; border-style: ridge; border-width: 3px">Yes</td>
</tr>
</tbody>
</table>
</figure>

## Debug Renders

There are numerous debug renderers that can be enabled. Each of these renderers can be individually enabled through the debug options menu under **Debug Renderers**, which is accessed by pressing **F3 + F6**:

- **OFF** stops the rendering completely.
- **In Overlay** only enables rendering when the debug overlay is open.
- **Always** enables rendering even when the debug overlay is not open.

Only **3d_crosshair** is enabled by default in the default profile.

<figure class="wysiwyg-table" style="width: 100%;">
<table class="wysiwyg-table-resized" style="margin-left: 0px; margin-right: auto;" dir="ltr">
<colgroup>
<col style="width: 27%" />
<col style="width: 73%" />
</colgroup>
<tbody>
<tr>
<td style="background-color: #dedede; border-style: ridge; border-width: 3px">Name</td>
<td style="background-color: #dedede; border-style: ridge; border-width: 3px">Description</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">3d_crosshair</td>
<td style="border-style: ridge; border-width: 3px">By default, this renderer is set to only appear if the debug overlay is enabled, replacing the normal crosshair. It can be configured like all other debug renderers.</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">chunk_borders</td>
<td style="border-style: ridge; border-width: 3px">Displays the edges of chunks. Can be enabled in vanilla with F3+G.</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">chunk_section_octree</td>
<td style="border-style: ridge; border-width: 3px">Displays the octree structure used to represent the world’s chunk sections, helping you see how the game stores and manages terrain data.</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">chunk_section_paths</td>
<td style="border-style: ridge; border-width: 3px">Displays the paths (or connections) between different chunk sections in the world’s chunk data.</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">chunk_section_visibility</td>
<td style="border-style: ridge; border-width: 3px">Displays which world sections (16×16×16 block cubes) are visible to the player and which are not.</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">entity_hitboxes</td>
<td style="border-style: ridge; border-width: 3px">Hitboxes are shown on visible entities.</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">visualize_block_light_levels</td>
<td style="border-style: ridge; border-width: 3px">Displays the amount of light a block has as a number, from a yellow 15 to a red 1. 0 is hidden.</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">visualize_chunks_on_server</td>
<td style="border-style: ridge; border-width: 3px">Displays information about each chunk's load level and status. Renders the chunk colormap in the debug screen.</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">visualize_collision_boxes</td>
<td style="border-style: ridge; border-width: 3px">Outlines the collision boxes of surrounding nearby blocks, which differs from the block selection outline generally seen in-game. All blocks six blocks away from the player in all directions in a square are rendered.</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">visualize_entity_supporting_blocks</td>
<td style="border-style: ridge; border-width: 3px">Marks the blocks that entities are considered standing on (red for the player, green for everything else, light blue for blocks under thin blocks, like carpet).</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">visualize_heightmap</td>
<td style="border-style: ridge; border-width: 3px">Displays the values of heightmaps.</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">visualize_sky_light_levels</td>
<td style="border-style: ridge; border-width: 3px">Displays the amount of sky light a block is able to receive as a number, from a cyan 14 to a blue 0. 15 is hidden.</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">visualize_sky_light_sections</td>
<td style="border-style: ridge; border-width: 3px">Displays information about sky light for every chunk section. No coloring means an empty section with no lighting data, brown means a section with only lighting data, and yellow means a section with lighting data and block shape data.</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">visualize_solid_faces</td>
<td style="border-style: ridge; border-width: 3px">Highlights all solid, sturdy block faces (that a button can be placed on) in red. All faces six blocks away from the players camera in a square are rendered.</td>
</tr>
<tr>
<td style="border-style: ridge; border-width: 3px">visualize_water_levels</td>
<td style="border-style: ridge; border-width: 3px">Indicates the fluid level of the water from an integer number ranging from eight (water source) to one (the farthest point that flowing water can flow before stopping).</td>
</tr>
</tbody>
</table>
</figure>
