---
title: Minecraft - 1.21.22 (Bedrock)
date: 2024-08-26T19:49:35Z
updated: 2024-08-26T20:55:42Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/29644784178317-Minecraft-1-21-22-Bedrock
hash:
  h_01J683YQ30CQH4DH0RP5BQZ9AJ: fixes
---

**Posted:** August 26, 2024

A new update has been released to address a few issues with the 1.21.20 release. Some platforms have received the update and other platforms will get the update as it is approved.  
  

# **Fixes:**

- Fixed several crashes that could occur during gameplay
- Improved loading of add-ons from Marketplace
- Fixed a bug where all custom blocks were rotated 180 degrees in the UI
  - The default for the "gui" "item_display_transforms" "rotation" field is \`\[30, 45, 0\]\` instead of \`\[30, 225, 0\]\`  
         "item_display_transforms": {  
              "gui" : {  
                   "translation": \[0, 0, 0\],  
                   "rotation": \[30, 45, 0\],  
                   "scale": \[0.625, 0.625, 0.625\],  
                    "rotation_pivot": \[0, 0, 0\],  
                   "scale_pivot": \[0, 0, 0\],  
                   "fit_to_frame": true  
              }  
         }
