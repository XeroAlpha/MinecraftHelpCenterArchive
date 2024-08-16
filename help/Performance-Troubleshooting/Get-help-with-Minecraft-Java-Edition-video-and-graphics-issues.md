---
title: "Troubleshooting Video and Graphics Issues in Minecraft: Java Edition"
date: 2021-09-13T18:03:20Z
updated: 2024-08-16T00:03:28Z
categories: Performance & Troubleshooting
tags:
  - title_minecraft_java_edition
  - title_minecraft
  - category_technical_support
  - subject_game_performance
  - platform_windows_10
  - subject_game_crashes
  - platform_linux
  - platform_macos
  - platform_pc
  - section_27166432886285
  - use_for_autoreply
link: https://help.minecraft.net/hc/en-us/articles/4409137348877-Troubleshooting-Video-and-Graphics-Issues-in-Minecraft-Java-Edition
hash:
  h_01HT3AH3YKKCW4FA23SKA2K21T: issues-with-frame-or-pixel-format
  h_01HT3AMP010QFM38WZ5X7EY882: windows-arm64-does-not-appear-to-support-opengl
  h_01HT3ANFGM8PYYKD1PYJE2FV2R: pink-and-black-checkered-boxes-appear-where-textures-should-be
---

*This article addresses Minecraft: Java Edition technical issues only. Visit [Minecraft: Bedrock Edition](./Minecraft-Bedrock-Edition-Solutions-to-Graphic-Issues.md).* 

 

## Issues with Frame or Pixel Format 

If you have performance issues or receive an error message saying **Pixel format not accelerated**, you may have outdated video card drivers or software. Try the following:

- Ensure your computer meets [system requirements](https://www.minecraft.net/en-us/store/minecraft-deluxe-collection-pc) to play Minecraft.
- Visit the website for your video card to find updated software.
- Reboot your computer.
- Check for attached gamepad devices, or something being interpreted as a gamepad device such as headphones or a controller. Try disconnecting these devices, then restart Minecraft. 

## Windows ARM64 does not appear to support OpenGL

If you are trying to launch Minecraft on an ARM64 device running Windows, you might see an error message like **GLFW error 65542: WGL: The driver does not appear to support OpenGL**.

- Install the [OpenCL and OpenGL Compatibility Pack](https://www.microsoft.com/store/productId/9NQPSL29BFFF) from the Microsoft Store.

## Pink and black checkered boxes appear where textures should be

When textures from resource packs do not load properly, the game replaces them with pink and black checkered boxes. This occurs when the textures are not in the game’s assigned directory folder or did not download correctly.  

To restore textures:

1.  Launch Minecraft, click **Options**, then click **Resource Packs**. 
2.  Open the **Resources Pack** folder and delete all textures from this folder.  
3.  Download the textures again from the resource pack provider to the folder.
4.  Launch Minecraft again, click **Options** and click **Resource Packs**.
5.  Re-enable the textures by clicking on the Pack under **Available** to move it to Selected. Press **Done**.

If these steps do not resolve your issue, try reaching out to the creator of the resource packs for help.

 

If you still experience video issues in Minecraft, be sure to visit our article for [Minecraft: Solutions to Graphic Issues](./Optimizing-Performance-in-Minecraft.md).
