---
title: Known Issues with Coding
date: 2021-08-10T14:00:31Z
updated: 2025-04-30T21:30:55Z
categories: Troubleshooting
link: https://edusupport.minecraft.net/hc/en-us/articles/4404970114324-Known-Issues-with-Coding
hash:
  h_01HF5J1EW62PF3EFMRZDRAS0YK: ""
  h_01HF5J1EW7SHEVAMZ8J99JC342: cant-import-or-export-makecode-files-on-chromebook-ipad-mac
  h_01HF5J1EW7J2RS3N4XYDG2X771: "-1"
  h_01HF5J1EW79GWE780W6DEMQXT4: some-python-aznb-pages-fail-to-load-in-codebuilder
  h_01HF5J1EW7GV195NKGEYAJ9NB3: "-2"
  h_01HF5J1EW7SCE68NBSN00SR933: smart-quotes-break-text-based-coding-ipad-only
  h_01HF5J1EW7M783TGC41K3W7RYB: autocomplete-in-coding-isnt-available-chromebook-only
  01JE4BFX0M7XXPCPMNG0GYBVCT: great-troubleshooting-step-for-codebuilder-issues---clear-codebuilder-cache
---

This article contains a list of known issues for Code Builder, or coding worlds created for Minecraft Education.

##  

## Can’t import or export MakeCode files on Chromebook, iPad, Mac

 

<table style="width: 624px;" data-cellpadding="5px">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: right; width: 20%; vertical-align: top;" width="104"><p><strong>Description</strong></p></td>
<td width="520"><p>The MakeCode files (.mckd) cannot be imported or exported on Chromebook, iPad, or Mac</p></td>
</tr>
<tr>
<td style="text-align: right; width: 20%; vertical-align: top;" width="104"><p><strong>Status</strong></p></td>
<td width="520"><p>No fix available</p></td>
</tr>
<tr>
<td style="text-align: right; width: 20%; vertical-align: top;" width="104"><p><strong>Workaround</strong></p></td>
<td width="520"><p>Follow these steps as a workaround:</p>
<p>1.       From the menu, select <strong>Export as Link</strong>.</p>
<p>2.       Save the link.</p>
<p>3.       Open Minecraft on the new device, select <strong>Import</strong> and provide the link.<br />
<br />
</p></td>
</tr>
</tbody>
</table>

##  

## Some Python AZNB pages fail to load in Codebuilder

 

|  |  |
|----|----|
| **Description** | When accessing Python AZNB notebook pages in Codebuilder an error may appear.  |
| **Status** | No fix available |
| **Workaround** | Clear browser cache from your default web browser |

##  

## Smart quotes break text-based coding, iPad only

 

|  |  |
|---:|----|
| **Description** | The quotes used by the iPad’s Smart Punctuation feature cause text-based coding to not work correctly on the iPad |
| **Status** | No fix available |
| **Workaround** | To turn off the Smart Punctuation setting, navigate to **Settings** \> **General** \> **Keyboard** and deselect Smart Punctuation. |

 

## Autocomplete in coding isn’t available, Chromebook only

 

|  |  |
|---:|----|
| **Description** | The autocomplete (also known as predictive text) is a feature that predicts the rest of a word a user is typing. This feature isn’t available for python coding on the Chromebook |
| **Status** | No fix available |
| **Workaround** | None |

 

## Great troubleshooting step for Codebuilder issues - Clear Codebuilder cache

To address these issues effectively without losing your MakeCode projects or Minecraft worlds, [**please backup** your code builder projects](../Game-Features/Managing-Projects-in-Code-Builder-for-MakeCode.md) before following the steps outlined below:  
  
For Windows 10/11 Users:  
Navigate to \`C:\Users\USERNAME\AppData\Local\Temp\\ and delete the contents within the \`minecraftpe\` folder.  
  
For macOS Users:  
Go to \`~/Library/WebKit/com.microsoft.minecraftpe\` and clear the contents of this folder.  
  
For Chromebook Users:  
Access \`Settings\` \> \`Apps\` \> \`Manage Your Apps\` \> \`MEE\` \> \`Storage and Permissions\` \> \`Storage & Cache\`.  
  
Instead of using the "Clear Storage" option, which would remove MakeCode projects and Minecraft worlds, select "Clear Cache" to address the issue in a way that may not delete projects/worlds. [Backup first](../Teaching-With-Minecraft/Import-Export-and-Manage-Worlds.md) just in case!
