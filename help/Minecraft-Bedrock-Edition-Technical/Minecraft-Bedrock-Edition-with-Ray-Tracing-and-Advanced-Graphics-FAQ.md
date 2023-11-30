---
title: "Minecraft: Bedrock Edition with Ray Tracing and Advanced Graphics FAQ"
date: 2021-09-09T17:57:22Z
updated: 2023-07-12T19:35:51Z
categories: "Minecraft: Bedrock Edition Technical"
tags:
  - title_minecraft
  - category_technical_support
  - subject_downloads_and_installations
  - subject_game_performance
  - platform_windows_10
  - platform_linux
  - platform_macos
  - platform_pc
  - platform_PC
  - section_12617893243277
link: https://help.minecraft.net/hc/en-us/articles/4408865164173-Minecraft-Bedrock-Edition-with-Ray-Tracing-and-Advanced-Graphics-FAQ
---

This article details information about Minecraft: Bedrock Edition with ray tracing as well as some advanced information about Minecraft: Bedrock Edition's graphics settings.

# In This Article:

- [What's new? ](#what-changes-were-made-to-minecraft-for-windows-with-this-update) 
- [Enter the Render Dragon?](#enter-therenderdragon)  
- [What is ray tracing? ](#what-israytracing) 
- [What are the minimum required specifications?](#what-are-the-minimum-requirements-to-experience-physically-based-rendering-pbr-and-ray-tracing-in-minecraft-for-windows)
- [What is unique about ray tracing in Minecraft? What is path tracing? ](#what-isuniqueaboutraytracing-in-minecraftwhat-ispathtracing)
- [What are shader mods and lighting mods? How do they compare to ray tracing on Minecraft for Windows?](#what-are-shader-modsand-lighting-mods-how-do-they-compareto-ray-tracing-on-minecraft-for-windows) 
- [Does Render Dragon support community shaders?  ](#does-render-dragon-support-community-shaders)
- What is...
  - [RTX](#what-is-rtx)
  - [DXR](#what-is-dxr)
  - [NVIDIA DLSS](#what-is-nvidia-dlss)
  - [Physically based rendering (PBR)](#what-isphysicallybasedrendering-pbr-howdoes-itimpact-minecraft)
- [Is ray tracing a special version of Minecraft?](#is-ray-tracing-a-special-version-of-minecraft-bedrock-edition)
- [Is Minecraft with ray tracing free? ](#is-minecraft-bedrock-edition-with-ray-tracing-free)
- [Are PBR or ray tracing features coming to Minecraft Java Edition or other hardware platforms?](#are-pbr-orraytracingfeaturescoming-to-minecraft-java-editionorotherhardwareplatforms)
- [Ray tracing and physically based materials sound pretty fancy. Do you have any more before/after pictures to show us the difference? ](#raytracing-andphysicallybasedmaterialssoundprettyfancy-doyouhaveanymorebeforeafterpictures-toshow-us-thedifference)
- [Are There Plans to Support the NVIDIA GeForce GTX Series Cards? ](#arethereplans-tosupport-the-nvidia-geforce-gtxseriescards)
- [Other Handy Documentation](#otherhandydocumentation)

In June of 2020, Minecraft: Bedrock Edition released an update (1.16.200) for Windows that added exciting new features to the game. Join us while we tell the tale of the Render Dragon and ray tracing. 

## What Changes Were Made to Minecraft for Windows With This Update? 

Update 1.16.200 is a free update for Minecraft: Bedrock Edition that includes four exciting new features:  

- Render Dragon graphics engine   
- New ray tracing lighting technology  
- Physically-based rendering (PBR) system   
- NVIDIA DLSS for supported hardware   

With these new features, players can dramatically change the look and feel of the game. Immerse yourself in volumetric fog. See Minecraft: Bedrock Edition in a whole new light (yes, we went there), with a cutting-edge, dynamic lighting system, ray tracing. Players can also experience advanced kinds of block textures, including metallic surfaces, bump maps, normal maps, and light emission (Glowy, reflective dirt blocks? Yes, please!). 

### Enter the Render Dragon

![blobid0.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4408863794189)

Render Dragon is the new graphics engine for Minecraft: Bedrock Edition platforms. Render Dragon was developed by the Mojang Studios graphics team to give our game greater performance, stability, and flexibility. The new architecture of Render Dragon enables our developers to bring new graphics features such as physically based rendering (PBR) and ray tracing to the game. 

Render Dragon has been available for Xbox and PlayStation hardware since 2019, and we are now bringing it to Windows. We plan to bring Render Dragon to all Minecraft: Bedrock Edition platforms, including mobile.

![blobid1.jpg](https://minecrafthelp.zendesk.com/hc/article_attachments/4408863825805)

## What is Ray Tracing? 

Ray tracing is a series of computer rendering techniques that bring more realistic lighting to scenes. In traditional computer rendering (or “rasterization”), lighting information is provided by objects in the scene.   

In contrast, ray tracing behaves more like lighting in the real world – rays of light are shone into a scene, and lighting information is collected as those rays bounce, absorb, and scatter around objects in the world. The result is a highly realistic depiction of the way light behaves, creating dramatic effects such as: 

- **Sunbeams and atmospherics**  - Directional shafts of light typically occur at sunrise and sunset when sunlight passes through particles in the atmosphere or underwater![blobid2.jpg](https://minecrafthelp.zendesk.com/hc/article_attachments/4408863862413)
- **Dynamic shadows** - More realistic shadows that change as lighting conditions change (i.e., sundials in Minecraft: Bedrock Edition!)  
  ![blobid3.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4408863888653)  
- **Ambient Occlusion **- shadows cast in corners or crevices where light rays cannot escape   
  ![blobid4.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4408863910797)  
- **Reflections**  - Light bounces off surfaces, both casting and picking up color as it travels. Bouncing light hits smooth surfaces and maintains a spread depending on the material. This can create diffuse reflections or very sharp ones.    
  ![blobid5.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4408863943053)  
- **Refraction**  - As light passes through translucent materials, it bends and bounces. The image you see may be distorted, refracted, and its color will be affected by the translucent material.    
  ![blobid6.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4408863958029)

Ray tracing techniques have been used to bring more realism to movies for many years. However, only recently, through advances in computing, has the technique been available for real-time applications such as video games. Ray tracing, and specifically the path tracing technique Minecraft is using, is very graphically intensive.    

All of this to say, these complexities are why you must meet certain minimum technical requirements to experience ray tracing.  

## What are the Minimum Requirements to Experience Physically Based Rendering (PBR) and Ray Tracing in Minecraft for Windows? 

- OS (Operation Systems): Windows 64-bit  
- GPU: DirectX hardware ray tracing capable GPU like NVIDIA GeForce® RTX 20 Series and higher, and AMD Radeon™ RX 6000 Series and higher 
- Hardware: PC; Virtual reality headsets and Mixed Reality (MR) headsets are not supported  
- CPU: Intel Core i5 or equivalent  
- RAM: \>8 GB of RAM   
- A version of Minecraft: Bedrock Edition at 1.16.200 or higher   

You may have to update your Windows operating system and graphics drivers to experience ray tracing. You can learn more about [updating Windows here](https://support.microsoft.com/en-us/windows/update-windows-10-3c5ae7fc-9fb6-9af1-1984-b5e0412c556a). 

If your hardware does not support ray tracing, you will be unable to download ray tracing content from the Minecraft Marketplace (below is the error you will see): 

![blobid7.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4408871646733)

## What is Unique About Ray Tracing in Minecraft? What is Path Tracing?

Some video games use hybrid rendering, mixing ray tracing, and traditional rasterization, where ray tracing is used to enhance some aspects of a scene (i.e., more realistic reflections).  

On the other hand, Minecraft: Bedrock Edition uses a technique known as path tracing** **to render the entire scene. In other words, almost everything you see on screen comes from ray traced lighting! Path tracing requires a lot more graphical computing power and is only available on certain hardware devices.  

While there are many ways to do path tracing, Minecraft: Bedrock Edition makes use of the DirectX Ray Tracing API (DXR) to leverage hardware-enabled ray tracing.   

## What are Shader Mods and Lighting Mods? How do They Compare to Ray Tracing on Minecraft for Windows?  

This update for Minecraft: Bedrock Edition brings techniques and features the community has seen in Minecraft: Java Edition to the Windows audience.   

The shader term is broad and can have different meanings in different contexts for Minecraft: Bedrock Edition. Shaders are small programs that run on the GPU (Graphics Processing Units). For example, they give developers a way to change how the GPU draws/rasterizes objects. People have created packages of features known as “shaders” for Minecraft: Java Edition, which include some of the same features as Render Dragon, such as advanced textures, atmospherics, and dynamic shadows.  

![blobid8.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4408871729933)

(BSL Shaders: Java)  

## Does Render Dragon Support Community Shaders?   

Currently, Render Dragon does not support 3rd party community shaders. Any community shaders previously used on Minecraft: Bedrock Edition may not run on a Render Dragon version of the game.   

## What is “RTX”?  

“RTX” is NVIDIA’s graphics rendering platform and is available on certain NVIDIA graphics cards. NVIDIA has worked with Microsoft to integrate RTX support with Microsoft’s DirectX Raytracing API (Application Programming Interfaces) (DXR) to enable certain cards to perform ray tracing.  

Mojang Studios and NVIDIA worked closely together on the development of Minecraft: Bedrock Edition with ray tracing on Windows.   

Minecraft: Bedrock Edition with ray tracing is supported on all hardware ray tracing capable GPUs (Graphics Processing Units) that support the DXR standard.   

## What is “DXR”?   

“DXR” or DirectX Raytracing is a part of Microsoft’s DirectX 12 API that enables developers to add real-time ray tracing to their video games, allowing them to achieve next-gen movie quality realism. The DXR API is an industry-standard that runs on all hardware with support for DirectX 12 Ultimate.    

For more information about DXR, check out this dev blog: <https://devblogs.microsoft.com/directx/announcing-microsoft-directx-raytracing/>  

## What is NVIDIA DLSS?  

NVIDIA DLSS (Deep Learning Super Sampling) is groundbreaking AI rendering technology that takes Minecraft visual fidelity to a whole new level using dedicated Tensor Core AI processors on GeForce RTX™ GPUs. DLSS taps into a deep learning neural network's power to boost frame rates and generate beautiful, sharp images for Minecraft: Bedrock Edition.   

NVIDIA DLSS gives you the performance headroom to maximize ray tracing settings and increase output resolution.  

## What is Physically Based Rendering (PBR)? How Does it Impact Minecraft?   

Today, textures in Minecraft: Bedrock Edition are authored by modifying the color and opacity of an object.   

Physically-based rendering allows developers to adjust even more properties of a material such as:  

- Emissivity – how much light an object casts  
- Metallic – how much color a material contributes to its reflection   
- Roughness- how rough or smooth an object appears   
- Height – simulation of depth on a flat surface   
- Normals – simulation of curvature on a surface and how light should bounce off it   

![blobid9.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4408864195725)

Together with the more realistic lighting of ray tracing, PBR brings new realism and dimensions to Minecraft: Bedrock Edition blocks.   

With this update, Minecraft: Bedrock Edition creators and players who have a ray tracing capable machine can edit these new properties of blocks! Metallic iron blocks – you got it! Glowy lava – all yours! For more information about how to make Minecraft: Bedrock Edition blocks with PBR, check out a [PBR authoring guide](https://www.nvidia.com/en-us/geforce/guides/minecraft-rtx-texturing-guide/)!   

## Is Ray Tracing a Special Version of Minecraft: Bedrock Edition? 

Ray tracing is a free feature included in the Minecraft: Bedrock Edition game! Players who own Minecraft: Bedrock Edition can experience ray tracing for free if they meet the minimum technical requirements and the game has the 1.16.200 update or higher.   

## Is Minecraft: Bedrock Edition with Ray Tracing Free?  

Yes! Players who own Minecraft: Bedrock Edition can experience ray tracing for free as part of the 1.16.200 game update. Please note that you must meet the minimum technical requirements to experience some of these new features.   

## Are PBR or Ray Tracing Features Coming to Minecraft Java Edition or Other Hardware Platforms?  

We do not have any news to share at this time.  

## Ray Tracing and Physically Based Materials Sound Pretty Fancy. Do You Have Any More Before/After Pictures to Show us the Difference?  

We are glad you asked:  

![blobid10.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4408871865101)

![blobid11.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4408864302989)

![blobid12.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4408864323597)

## Are There Plans to Support the NVIDIA GeForce GTX Series Cards? 

No. Minecraft: Bedrock Edition with ray tracing uses hardware ray tracing support to achieve optimal visual fidelity and performance. This hardware support is available only on the NVIDIA GeForce® RTX 20 Series and higher, along with the AMD Radeon™ RX 6000 Series and higher. 

## Sounds Awesome! How do I Experience it? 

If you meet the **[minimum requirements](#what-are-the-minimum-requirements-to-experience-physically-based-rendering-pbr-and-ray-tracing-in-minecraft-for-windows)** and are in Minecraft: Bedrock Edition, you can experience ray tracing in one of two ways. 

1.  **Download ray tracing enabled packs in the Minecraft Marketplace.** 
    - Many free worlds featuring PBR and ray tracing are available in the Minecraft Marketplace, with more to come. 
    - You can find all the content supporting ray tracing in the Marketplace by selecting the blue icon.  
      ![blobid14.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4408871936525)![blobid15.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4408864375309)

2.  **Create your own PBR textures and sideload them into the game.**

    Check out the NVIDIA Minecraft with RTX PBR Texturing Guide for more information.

    Note: at this time ray tracing cannot be enabled for all world seeds.

    After you are inside a ray tracing enabled world, ray tracing lighting will be turned on by default.

## Other Handy Documentation 

### Using Fog in Resource Packs 

Fog values now use json files to determine their values. Creators can now define their own sets of fog values in their resource packs. A new folder can be made at the root of a resource pack called fogs. Any json files within this folder will be registered as new fog definitions that can be used by the game. 

#### JSON 

**Example ** 

A fog json will look something like this. 

    { 

      "format_version": "1.16.100", 

      "minecraft:fog_settings": { 

        "description": { 

          "identifier": "custom_pack:example" 

        }, 

        "distance": { 

          "air": { 

            "fog_start": 0.92, 

            "fog_end": 1.0, 

            "fog_color": "#ABD2FF", 

            "render_distance_type": "render" 

          } 

        }, 

        "volumetric": { 

          "max_density": { 

            "air": { 

              "max_density": 0.1, 

              "max_density_height": 56, 

              "zero_density_height": 70 

            } 

          }, 

          "media_coefficients": { 

            "air": { 

              "scattering": [ 0.02, 0.02, 0.02 ], 

              "absorption": [ 0.0, 0.0, 0.0 ] 

            } 

          } 

        } 

      } 

    } 

### Variables  

#### "format_version"  

The resource pack version that this fog setting was built for. Will be used for determining upgrade paths and back-compatibility in newer versions of the game. 

#### "minecraft:fog_settings"  

Defines that the set of values within will be read in as a set of fog setting values. 

#### "description" 

Holds the description for this fog setting. 

#### "identifier"  

Held within the "description". 

The unique name to refer to this fog setting. Each identifier requires a namespace. You also must have each identifier be unique or you will get an error. The "minecraft" namespace is only allowed to be used by the vanilla resource packs.

#### "distance"  

This contains the values for the distance fog. This is the fog that limits the player's view from seeing anything beyond a specific distance from them. Each entry within this contains one type of distance values. 

You can set the following types by name: 

- **"air"**: Used when the player's camera is in the air. 
- **"weather"**: Used when the player's camera is in the air and weather is currently active. 
- **"water"**: Used when the player's camera is in water. 
- **"lava"**: Used when the player's camera is in lava. 
- **"lava_resistance"**: Used when the player's camera is in lava and they have the "lava resistance" mob effect active. 

These types are all optional for your fog setting. If you do not set it, it will instead use the value for the fog setting lower priority than it. Described more in detail later in the "Active Fog Stack" section. 

In each distance setting type, you can set the following variables: 

- **"fog_start"**: The distance where the fog will begin to appear. 
- **"fog_end**": The distance where the fog will become completely opaque. 
- **"render_distance_type"**: Setting this will determine how the start and end values are used for calculating the fog distances. 
- **"fixed"**: The distance is measured in the number of blocks away. 
- **"render"**: The distance is multiplied against the current render distance. 
- **"fog_color"**: The color that the fog will take on. 

#### "volumetric"  

This contains the values for the volumetric fog. This fog will be displayed as a calculation from light passing through blocks. Currently, this is only used for PBR (Ray Tracing) and is planned to be added to non-PBR later. 

#### "density"  

Held within the "volumetric" object. 

Page Break 

Each entry within this contains one type of density values. 

You can set the following types by name: 

- **"air"**: Used when the player's camera is in the air. 
- **"weather"**: Used when the player's camera is in the air and weather is currently active. 
- **"water"**: Used when the player's camera is in water. 
- **"lava"**: Used when the player's camera is in lava. 
- **"lava_resistance"**: Used when the player's camera is in lava and they have the "lava resistance" mob effect active. 

These types are all optional for your fog setting. If you do not set it, it will instead use the value for the fog setting lower priority than it. Described more in detail later in the "Active Fog Stack" section. 

In each density setting type, you can set the following variables: 

- **"max_density"**: The multiplier on how much the fog disrupts the light. 0.0 will have no fog, and 1.0 will be near opaque. 
- **"uniform"**: When set to true, the fog density will occur evenly across all heights. 
- **"zero_density_height"**: The height in blocks that the fog will begin to appear. This can only be set if "uniform" is set to false. 
- **"max_density_height"**: The height in blocks that the fog will become its max_density. This can only be set if "uniform" is set to false. 

#### "media_coefficients"  

Held within the "volumetric" object. 

Each entry within this contains one type of coefficient values. These are used to determine how the light is dispersed or refracted by the fog as rays travel through different mediums/blocks. 

You can set the following types by name: 

- **"air"**: Used when light is passing through air. 
- **"water"**: Used when light is passing through water. 
- **"cloud"**: Used when light is passing through clouds. 

These types are all optional for your fog setting. If you do not set it, it will instead use the value for the fog setting lower priority than it. Described more in detail later in the "Active Fog Stack" section. 

In each coefficient setting type, you can set the following variables: 

- **"scattering"**: How much of will the fog spread the RGB of the light. Either can be set as an array of 3 multipliers from \[0.0, 1.0\] or a Hex color value. 
- **"absorption"**: How much of will the fog absorb the RGB of the light. Either can be set as an array of 3 multipliers from \[0.0, 1.0\] or a Hex color value. 

#### Active Fog Stack  

The active fog stack is used to determine which fog setting to use at any given time in the game. Each player has a unique fog stack. 

Whenever the game needs to determine the values for the fog, it will start at the top of the fog stack and check down it until it has found a value for the current setting type. So, if a fog setting on the stack does not have the setting it's looking for, then it will continue down the stack and check-in. If it finds no such setting, it will instead use the defaults defined by the engine. 

The fog stack initially is set up as follows. Starting at the bottom: 

- Engine Default: hard code values. 
- Data Default: The default data-driven settings 
- Biomes: The settings defined to be on each biome. 
- Command: The settings set on the player by server commands. 

#### Engine Default  

Hardcoded values in case there are no data-driven values; the implicit bottom of the stack 

Page Break. 

#### Data Default  

Defined in "biomes_client.json" under "default" if it references a fog definition via "fog_identifier". 

#### Biomes  

The biome layer is an average of all the settings defined by the biomes around the player's position. The biome settings are defined in "biomes_client.json" as well for each individual biome.

#### Command 

The command layer is all the settings set by the "/fog" command and evaluated it as one stack from top to bottom. More detail in the "Fog Command" section. 

#### Biomes  

Fog settings can be determined for the biomes with "biomes_client.json". In each biome entry, you can have a variable called "fog_identifier" and set a name that matches the fog setting you want to use with this biome. 

The "default" entry can also be set this way and will be used underneath the biomes entries in the active fog stack. So, a biome's fog setting does not completely replace the default's setting, but instead, the biome is read on top of the default as described in the "Active Fog Stack" section. 

#### Fog Command 

"/fog" can be used to manage fog settings in this layer of the active fog stack for each player. 

Fog settings in this layer are ordered via the "push", "pop", "remove" modes of the "/fog" command described below. Fog Settings are evaluated top-to-bottom in the active fog stack which includes top-to-bottom in this layer first. 

Fog settings in this layer are saved and then restored on world load per player. In this way a fog setting that is pushed before a world save, will still apply after a world load and can then be popped. 

#### Push  

Pushes a new fog setting, to specified player(s), along with a user-provided ID, onto the top of the Fog Command layers of the players' active fog stacks. 

#### Pop  

Removes the top-most fog setting, from the selected player(s), that matches the user-provided ID (i.e., as provided previously via a "/fog push" command). 

#### Remove  

Removes all matching fog settings, from the selected player(s), that matches the user-provided ID (i.e., as provided previously via one or more "/fog push" commands). 

#### Ray Tracing Texture Set Documentation 

*The following documentation is related to Minecraft with ray tracing for Windows and is subject to change.*  

Minecraft: Bedrock Edition supports a Physically Based Rendering (PBR) color pipeline (e.g., used for Ray Tracing). This uses more texture data than simply 'color' to enable richer, more realistic visuals. With the PBR approach, you can have layers for different specular reflections, emissivity normal maps, etc. which goes beyond the Classic color pipeline for Vanilla Minecraft: Bedrock Edition. Texture Sets have been added as the feature for defining multiple PBR layers for a texture resource. Texture sets are data-driven from .json files. 

#### Layers 

A texture_set.json file may specify several layers. Layers are references to texture image resources, or they can be defined in .json as uniform solid values as an alternative to referencing texture images in a pack. 

- color: 
  - This is an RGB 3 channel image (defaults to uniform alpha of 1.0), or an RGBA 4 channel image, or a 4 value array for uniform color with alpha. 
  - This is the only required layer. 
  - It is the only layer used by the Classic pipeline. 
  - Typically, there is lighting baked in the color image.
- normal: 
  - 3-channel normal map image (or 4-channel where 4th channel is ignored). 
  - This layer does not support uniform values in json (i.e. only supports reference to a texture). 
  - This layer is mutually exclusive with the ‘heightmap’ layer.
- heightmap: 
  - 1-channel height map image. 
  - This layer does not support uniform values in json (i.e. only supports reference to a texture). 
  - This layer is mutually exclusive with the ‘normal’ layer. 
- metalness_emissive_roughness: 
  - 3-channel image (or 4-channel where 4th channel is ignored) or a 3 value array for a uniform MER. 
  - RGB images maps, Red to Metalness, Green to Emissive, and Blue to Roughness 

#### Specifying uniform values 

Instead of referencing a texture image for a Texture Set layer, values can be specified instead in \*texture_set.json files; this is effectively the equivalent to referencing a texture image filled uniformly with that value or values for the respective channels. 

Such a value in .json can be specified in any of: 

- 0 to 255 numeric range, or as a vector of such integers for a multi-channel layer. 
- Hexadecimal RGB or ARGB for 3 and 4 channels respectively, also as 2 hex digits for a single channel layer. 

## Examples of \*.texture_set.json files 

    { 
      "format_version": "1.16.100", 
      "minecraft:texture_set": { 
        "color": "leaves_oak_carried", 
        "metalness_emissive_roughness": "leaves_oak_carried_mer", 
        "heightmap": "leaves_oak_carried_heightmap" 

      }
    } 

You could also specify values of textures using numerical or hexadecimal values. 

    { 
      "format_version": "1.16.100", 
      "minecraft:texture_set": { 
        "color": [ 180, 135, 190, 170 ], 
        "metalness_emissive_roughness": "#AABBCC" , 
        "heightmap": "#7B" 
      } 

    } 

All the layer values can be mixed and match with references to image textures, hexadecimal and numerical values. 

    { 
      "format_version": "1.16.100", 
      "minecraft:texture_set": { 
          "color": "#ABCDEF0F", 
    "metalness_emissive_roughness": "leaves_oak_carried_mer”, 
    "normal": [ 130, 135, 140] 
      } 

    } 

## Invalid \*.texture_set.json 

If a Texture Set is invalid, we'll log a CONTENT_ERROR and the Texture Set will not be used. A Texture Set is invalid if: 

- Json data cannot be parsed, or doesn't meet the Texture Set schema. 
- Color layer is not specified. Having a color layer in the ".texture_list.json" is required. 
- If a referenced texture does not exist in the same resource pack or the referenced texture cannot be parsed. 
- Any layer is defined with an unexpected number of channels: 
  - For layers that are specified with referenced images: Color, MER, and Normal support 3 or 4 channel images; 
  - For layers that are specified with numerical or hexadecimal values: Color,; MER and Normal support 3 channel values; 

**Note:** 

- The priority of file extensions, in case you have duplicate image references, is: .tga \> .png \> .jpg \> .jpeg. For example: if grass.png and grass.tga both exist in the folder, grass.tga is chosen. 
- Texture Set definitions can only reference images that exist in the same resource pack as the definition. 
- Texture images in higher priority resource packs do not override a Texture Set's reference to a texture in its own pack. 
- In the resource pack stack, Texture Set definitions for the same texture resource don't get merged. The higher priority pack's Texture Set definition will override the lower priority one. 

## I had the Ray Tracing Beta Installed. What do I do to Get the Latest Version? 

If you had been playing and testing the beta for Minecraft: Bedrock Edition with ray tracing, thank you! Your participation helped find bugs, optimize performance, and introduce new features that have made the experience even more enjoyable. 

If you were enrolled in the RTX beta, you are now enrolled in the standard Minecraft Preview and will continue to receive the latest beta version, including ray tracing features. If you no longer want to be in the Minecraft Preview and want to get back onto the mainline branch of Minecraft: Bedrock Edition, follow these steps: 

1.  Back up your existing worlds, saves, and profiles, just in case. 
2.  Open the Xbox Insider Hub application. 
3.  Navigate to **Insider Content** and **select Minecraft**. 
4.  Select **Manage**, then **Unenroll**, and then **Done**. 
5.  Wait a few minutes, then check for Minecraft updates in the Windows Store app. 
6.  If you haven’t been updated, uninstall Minecraft: Bedrock Edition completely, and install a fresh copy from the Windows Store. 

![blobid16.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4408872267917)

And if you’re *still* having issues, uninstall Minecraft: Bedrock Edition, log out from the Insider Hub, Xbox Companion App, and Windows Store. Restart your PC, and then log back into the Windows Store and download a fresh version of Minecraft. 

## Is There a “Ray Tracing Mode” or a Way to Play Vanilla Minecraft: Bedrock Edition with Ray Tracing? 

No, there is no vanilla ray tracing “mode” in Minecraft: Bedrock Edition. Think of ray tracing and PBR as tools for the Minecraft: Bedrock Edition community to express its creativity and develop its own creations. 

The Ray Tracing toggle is disabled unless you are in a ray tracing enabled world: 

![blobid17.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4408864746893)

## How do I Turn Ray Tracing Features on and off in the Game? 

You can experience ray tracing features by either downloading a ray tracing enabled world from the Minecraft Marketplace or by creating and sideloading your own PBR texture pack. For further information on sideloading, see [Nvidia's RTX Texturing Guide](https://www.nvidia.com/en-us/geforce/guides/minecraft-rtx-texturing-guide/). After you open your ray tracing enabled world, ray tracing is turned on by default. 

To toggle ray tracing on and off you can press the “**;**” key on your keyboard or go to Settings \> Video \> Ray Tracing and turn on the toggle. 

![blobid18.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4408872357389)

The Ray Tracing toggle will be turned on only when you are in a ray tracing capable world. This toggle will not be selectable in vanilla worlds: 

![blobid19.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4408864800397)

## Can I Use Minecraft: Bedrock Edition with Ray Tracing in Multiplayer Games, Such as on Realms or Servers? 

Yes, you can upload your ray tracing enabled resource packs and worlds to multiplayer environments. Players with compatible hardware will be able to experience ray tracing and PBR features in that multiplayer environment. Users who do not have supported hardware will not experience PBR textures or ray tracing features. 

## Why is Render Distance Different When Ray Tracing is Turned on? 

In Minecraft: Bedrock Edition, view distance is measured by chunks that are 256 blocks tall—16×16 segments of world generation. The path tracing technique used in Minecraft: Bedrock Edition requires a significant amount of graphical computing power, so we reduce the default number of viewable chunks to make sure that our players have a stable, high frame-rate experience. 

## What is the Upscaling Toggle? 

The Upscaling toggle is a performance-enhancing toggle that enables [NVIDIA DLSS 2.0](https://www.nvidia.com/en-us/geforce/news/nvidia-dlss-2-0-a-big-leap-in-ai-rendering/) to boost frame rates on GeForce RTX graphics cards and support higher than 1080 resolutions. For players on other hardware, an alternative TXAA variant upscaler is available. 

![blobid20.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4408864837133)

## What are Graphics Drivers? Why am I Being Informed That Mine May be Out of Date? How do I Update my Graphics Drivers? 

You may have received a pop-up message in your Minecraft: Bedrock Edition game informing you that your drivers may be out of date: 

![blobid21.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4408872402829)

Graphics drivers are software updates provided by graphics hardware manufacturers that make sure your operating system and programs, including Minecraft: Bedrock Edition, work well together. To check if your drivers are up to date, visit [Update drivers in Windows](https://support.microsoft.com/en-us/windows/update-drivers-in-windows-10-ec62f46c-ff14-c91d-eead-d7126dc1f7b6). Please make sure your Windows operating system is up to date whenever playing Minecraft: Bedrock Edition. 

You can also visit the following websites to learn if your graphics card has a potential driver update: 

- [AMD Drivers and Support](https://www.amd.com/en/support) 
- [Intel Support](https://www.intel.com/content/www/us/en/support/detect.html) 
- [NVIDIA Driver Downloads](http://nvidia.com/drivers) 

## Is Minecraft: Bedrock Edition with Ray Tracing Coming to Next-Generation Consoles? 

We do not have any news to share currently. For future updates, follow the news on [www.minecraft.net](https://www.minecraft.net/en-us). 

## Can I Access my Ray Tracing Enabled Worlds to Minecraft: Bedrock Edition on my Other Hardware Devices? 

Yes, if you purchase a ray tracing enabled world from the Minecraft Marketplace on Windows and sign in to your free Xbox Live account, you can download that content on your other Minecraft: Bedrock Edition devices. However, you will not experience ray tracing features or PBR on non-supported devices. 

Make sure you are signed in to the same Xbox Live account on both devices and visit your Inventory in the Minecraft Marketplace to find your content. 

![blobid22.png](https://minecrafthelp.zendesk.com/hc/article_attachments/4408864915853)

## How Can I Create my Own PBR Resource Pack and Play with Ray Tracing? 

Check out the NVIDIA [Minecraft with RTX PBR Texturing Guide](https://www.nvidia.com/en-us/geforce/guides/minecraft-rtx-texturing-guide/) for more information on how to author texture packs for Minecraft: Bedrock Edition with PBR and enable your texture packs for ray tracing features 

## Why Aren’t all Light-Emitting Blocks Glowing in Ray Tracing Worlds? 

Only torches, redstone torches, end rods, and lanterns are coded as point lights. All other blocks require emissive textures, made by creators. 

## I Have a New Feature Request! 

Have a suggestion for how to improve a feature in Minecraft: Bedrock Edition? Head over to [Minecraft Feedback](https://nam06.safelinks.protection.outlook.com/?url=http%3A%2F%2Ffeedback.minecraft.net%2F&data=02%7C01%7CKasia.Swica%40microsoft.com%7Cf541ded03b2442918c2a08d7b959e02e%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C637181667990319193&sdata=RpTkxbuLv%2ByZsCISdW4im0nNc2ECQj87XMYlBVvsJrI%3D&reserved=0) and let us know! 

## I Think I Found a Bug!  

- Please make sure that your [graphics drivers](#what-are-graphics-drivers-why-am-i-being-informed-that-mine-may-be-out-of-date-how-do-i-update-my-graphics-drivers) are updated before playing Minecraft with ray tracing. If you find a bug that is not listed among our known issues, please report it Report it on [bugs.mojang.com](http://bugs.mojang.com/) (screenshots/videos please!)  

To submit a bug report in our bug tracker, you must create an [account for the bug tracker](https://bugs.mojang.com/secure/Signup!default.jspa).   

For a guide on how to report a bug, visit our [bug tracker faq](../Mojang-Bug-Tracker/Mojang-Bug-Tracker-Guidelines-and-FAQ.md).  

## Top Known Issues when Ray Tracing is Enabled: 

- In the first-person mode, the whole character is not reflected in mirrors  
- In the high field of view modes, hands may appear disjointed from the body and will disappear when holding an object   
- Some objects are rendered in front of glass when placed behind   
- Some Character Creator items may render incorrectly   
- Game window flickers and scrambles during screen resizing  

## Physically Based Materials and Texture Pack Authoring:  

- At this time there is no support for authoring PBR materials for entities, skins, or Character Creator items. 

## Other Known Issues:  

- Data driven blocks are currently not supported in Ray Tracing worlds 
- Villagers with professions are spawning with unemployed villager clothes on  
- Mooshroom's mushrooms are glowing slightly in the dark  
- Slime mob has no face  
- White/Grey Horses change their coat colors when wearing Leather Horse Armors  
- Invisibility status has no effect on Enderman, Spider, Cave Spider, and Phantom  
- Stars are completely visible through clouds  
- Underwater TNT Block looks like a normal TNT block  
- Hopper from Minecart with Hopper does not have its interior rendered  
- After throwing a Trident, the screen goes black for a moment  
- Firework Rockets have black textures during launching animation  
- Skin animations are absent with ray tracing enabled (i.e. blinking)  
- Particle effects are not visible through transparent blocks held in the hand  
- Blocks pushed by Pistons flash white  
- Water is clipping through Boats  
- Some Door and Trapdoor models render incorrectly when opened  
- Torch flame is slightly offset from Torch stem when viewed through Glass  
- Adjusting brightness in Video Settings Menu has no in-game effect  
- Black square under Player's position while using a Locator Map  
- Particles from destroyed blocks have the same brightness regardless of the time of day
