---
title: Known Issues with Coding
date: 2021-08-10T14:00:31Z
updated: 2026-07-22T18:44:05Z
categories: Troubleshooting
link: https://edusupport.minecraft.net/hc/en-us/articles/4404970114324-Known-Issues-with-Coding
hash:
  h_01HF5J1EW62PF3EFMRZDRAS0YK: ""
  h_01HF5J1EW7SHEVAMZ8J99JC342: cant-import-or-export-makecode-files-on-chromebook-ipad-mac
  h_01HF5J1EW7J2RS3N4XYDG2X771: "-1"
  h_01HF5J1EW79GWE780W6DEMQXT4: makecode-ui-controls-are-hidden-on-some-android-devices
  h_01HF5J1EW7GV195NKGEYAJ9NB3: "-2"
  h_01HF5J1EW7SCE68NBSN00SR933: smart-quotes-break-text-based-coding-ipad-only
  h_01HF5J1EW7M783TGC41K3W7RYB: autocomplete-in-coding-isnt-available-chromebook-only
  01JE4BFX0M7XXPCPMNG0GYBVCT: effective-troubleshooting-step-for-most-codebuilder-issues---clear-codebuilder-cache
---

This article contains a list of known issues for Code Builder, or coding worlds created for Minecraft Education.

##  

## Can’t import or export MakeCode files on Chromebook, iPad, Mac

 

<figure class="wysiwyg-table wysiwyg-table-align-left" style="width: 624px;">
<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: right; padding: 5px; vertical-align: top; width: 20%;"><strong>Description</strong></td>
<td style="padding: 5px">The MakeCode files (.mckd) cannot be imported or exported on Chromebook, iPad, or Mac</td>
</tr>
<tr>
<td style="text-align: right; padding: 5px; vertical-align: top; width: 20%;"><strong>Status</strong></td>
<td style="padding: 5px">No fix available</td>
</tr>
<tr>
<td style="text-align: right; padding: 5px; vertical-align: top; width: 20%;"><strong>Workaround</strong></td>
<td style="padding: 5px"><p>Follow these steps as a workaround:</p>
<p>1.       From the menu, select <strong>Export as Link</strong>.</p>
<p>2.       Save the link.</p>
<p>3.       Open Minecraft on the new device, select <strong>Import</strong> and provide the link.<br />
<br />
 </p></td>
</tr>
</tbody>
</table>
</figure>

##  

## MakeCode UI controls are hidden on some Android devices 

 

<figure class="wysiwyg-table wysiwyg-table-align-left">
<table>
<tbody>
<tr>
<td style="text-align: right;"><strong>Description</strong></td>
<td>Some Android mobile devices may not see some of the UI controls such as the Flip Window, Larger Window, or Reset Editor buttons which are rested under the three horizonal lines menu button.   </td>
</tr>
<tr>
<td style="text-align: right;"><strong>Status</strong></td>
<td>No fix available</td>
</tr>
<tr>
<td style="text-align: right;"><strong>Workaround</strong></td>
<td>If available, try a different device. </td>
</tr>
</tbody>
</table>
</figure>

##  

## Smart quotes break text-based coding, iPad only

 

<figure class="wysiwyg-table wysiwyg-table-align-left" style="width: 624px;">
<table>
<tbody>
<tr>
<td style="text-align: right; padding: 5px; vertical-align: top; width: 20%;"><strong>Description</strong></td>
<td style="padding: 5px">The quotes used by the iPad’s Smart Punctuation feature cause text-based coding to not work correctly on the iPad</td>
</tr>
<tr>
<td style="text-align: right; padding: 5px; vertical-align: top; width: 20%;"><strong>Status</strong></td>
<td style="padding: 5px">No fix available</td>
</tr>
<tr>
<td style="text-align: right; padding: 5px; vertical-align: top; width: 20%;"><strong>Workaround</strong></td>
<td style="padding: 5px">To turn off the Smart Punctuation setting, navigate to <strong>Settings</strong> &gt; <strong>General</strong> &gt; <strong>Keyboard</strong> and deselect Smart Punctuation.</td>
</tr>
</tbody>
</table>
</figure>

 

## Autocomplete in coding isn’t available, Chromebook only

 

<figure class="wysiwyg-table wysiwyg-table-align-left" style="width: 624px;">
<table>
<tbody>
<tr>
<td style="text-align: right; padding: 5px; vertical-align: top; width: 20%;"><strong>Description</strong></td>
<td style="padding: 5px">The autocomplete (also known as predictive text) is a feature that predicts the rest of a word a user is typing. This feature isn’t available for python coding on the Chromebook</td>
</tr>
<tr>
<td style="text-align: right; padding: 5px; vertical-align: top; width: 20%;"><strong>Status</strong></td>
<td style="padding: 5px">No fix available</td>
</tr>
<tr>
<td style="text-align: right; padding: 5px; vertical-align: top; width: 20%;"><strong>Workaround</strong></td>
<td style="padding: 5px">None</td>
</tr>
</tbody>
</table>
</figure>

 

## Effective troubleshooting step for most Codebuilder issues - Clear Codebuilder cache

To address these issues effectively without losing your MakeCode projects or Minecraft worlds, [**please backup** your code builder projects](../Game-Features/Managing-Projects-in-Code-Builder-for-MakeCode.md) before following the steps outlined below:\
\
For Windows 10/11 Users:\
Navigate to \`C:\Users\USERNAME\AppData\Local\Temp\\ and delete the contents within the \`minecraftpe\` folder.\
\
For macOS Users:\
Go to \`~/Library/WebKit/com.microsoft.minecraftpe\` and clear the contents of this folder.\
\
For Chromebook Users:\
Access \`Settings\` \> \`Apps\` \> \`Manage Your Apps\` \> \`MEE\` \> \`Storage and Permissions\` \> \`Storage & Cache\`.\
\
Instead of using the "Clear Storage" option, which would remove MakeCode projects and Minecraft worlds, select "Clear Cache" to address the issue in a way that may not delete projects/worlds. [Backup first](../Teaching-With-Minecraft/Import-Export-and-Manage-Worlds.md) just in case!
