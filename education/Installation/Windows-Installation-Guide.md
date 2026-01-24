---
title: Windows Installation Guide
date: 2023-02-10T19:44:41Z
updated: 2026-01-24T03:12:04Z
categories: Installation
link: https://edusupport.minecraft.net/hc/en-us/articles/13106858087956-Windows-Installation-Guide
hash:
  h_01HC08XGFBCNC9R8DYBR208S1B: before-you-begin
  h_01HC08XGFBHRTXDTENRNFQFMAD: installation-options
  h_01HC08XGFB72R55K931EQ28EA0: installation-instructions
  intune_install: install-on-devices-enrolled-into-microsoft-intune-using-microsoft-store-app-integration
  h_01HQBPF10E94GMHJ53K3GD45XA: install-on-devices-via-winget-command-in-command-prompt
  install_from_store: instruct-users-to-install-from-the-microsoft-store
  install_desktop: install-desktop-version
  install_manually: install-minecraft-education-via-group-policy-using-powershell-script
  01J80Q28N47GZ47KX94KPXKF2K: install-the-microsoft-store-version-manually
---

Minecraft Education is available in the Microsoft Store

[![black rectangle with text Get it from Microsoft](https://get.microsoft.com/images/en-US%20dark.svg)](https://apps.microsoft.com/store/detail/9NBLGGH4R2R6?launch=true&mode=mini)

## Before you begin

Before installing Minecraft Education, ensure these prerequisites are met.

- Your PC must meet the [system requirements.](https://aka.ms/MEESupportedPlatforms)
- Users need to have the correct permissions based on the setup and installation method used at your organization.
- If installing the app from the Microsoft Store, all apps must be up to date. Minecraft Education cannot be installed if there are updates pending for other apps.

## Installation Options

Minecraft Education is available as a desktop installer and through the Microsoft Store. Both versions function the same and have the same features. The difference is in how Minecraft is downloaded and installed. The Windows desktop version is downloaded from the Minecraft Education website. 

To install Minecraft via device management tools, you can choose to install and update via the Microsoft store or using a traditional desktop installer.

 

<figure class="wysiwyg-table wysiwyg-table-align-left" style="height: 242px; width: 100%;">
<table class="wysiwyg-table-resized" style="border-style: solid; border-width: 2px;">
<colgroup>
<col style="width: 68%" />
<col style="width: 31%" />
</colgroup>
<tbody>
<tr style="height: 22px;">
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 464.333px"><strong>Installation method</strong></td>
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 96.6667px"><strong>Updates via</strong></td>
</tr>
<tr style="height: 44px;">
<td style="border-style: solid; border-width: 1px; height: 44px; padding: 5px; width: 464.333px"><a href="#install-on-devices-enrolled-into-microsoft-intune-using-microsoft-store-app-integration">Install on devices enrolled into Microsoft Intune using Microsoft Store app integration</a></td>
<td style="border-style: solid; border-width: 1px; height: 44px; padding: 5px; width: 96.6667px">Microsoft Store</td>
</tr>
<tr style="height: 44px;">
<td style="border-style: solid; border-width: 1px; height: 44px; padding: 5px; width: 464.333px"><a href="#instruct-users-to-install-from-the-microsoft-store">Instruct users to install from the Microsoft Store</a></td>
<td style="border-style: solid; border-width: 1px; height: 44px; padding: 5px; width: 96.6667px">Microsoft Store</td>
</tr>
<tr style="height: 44px;">
<td style="border-style: solid; border-width: 1px; height: 44px; padding: 5px; width: 464.333px"><a href="#install-minecraft-education-via-group-policy-using-powershell-script">Install the Microsoft Store version manually</a></td>
<td style="border-style: solid; border-width: 1px; height: 44px; padding: 5px; width: 96.6667px">Microsoft Store</td>
</tr>
<tr style="height: 44px;">
<td style="border-style: solid; border-width: 1px; height: 44px; padding: 5px; width: 464.333px"><a href="#install-on-devices-via-winget-command-in-command-prompt">Install via WinGet</a></td>
<td style="border-style: solid; border-width: 1px; height: 44px; padding: 5px; width: 96.6667px">Microsoft Store</td>
</tr>
<tr style="height: 44px;">
<td style="border-style: solid; border-width: 1px; height: 44px; padding: 5px; width: 464.333px"><a href="#install-desktop-version">Install desktop version   </a></td>
<td style="border-style: solid; border-width: 1px; height: 44px; padding: 5px; width: 96.6667px">Scheduled Task</td>
</tr>
<tr>
<td style="border-style: solid; border-width: 1px; padding: 5px; width: 464.333px"><a href="#Install%20Minecraft%20Education%20via%20Group%20Policy%20using%20PowerShell%20script">Install Minecraft Education via Group Policy using PowerShell script</a></td>
<td style="border-style: solid; border-width: 1px; padding: 5px; width: 96.6667px">Either Microsoft Store or Scheduled Task</td>
</tr>
</tbody>
</table>
</figure>

 

The version you choose may depend on your setup. These are the recommended Minecraft Education versions based on common setups.

<figure class="wysiwyg-table wysiwyg-table-align-left" style="width: 100%;">
<table class="wysiwyg-table-resized" style="border-style: solid; border-width: 2px;">
<colgroup>
<col style="width: 24%" />
<col style="width: 25%" />
<col style="width: 49%" />
</colgroup>
<tbody>
<tr>
<td style="border-style: solid; border-width: 1px; padding: 5px; width: 175px"><strong>Windows OS</strong></td>
<td style="border-style: solid; border-width: 1px; padding: 5px; width: 183px"><strong>One-to-one device</strong></td>
<td style="border-style: solid; border-width: 1px; padding: 5px; width: 308px"><strong>Shared device</strong></td>
</tr>
<tr>
<td style="border-style: solid; border-width: 1px; padding: 5px; width: 175px">Windows 10/11 </td>
<td style="border-style: solid; border-width: 1px; padding: 5px; width: 183px">Microsoft Store version</td>
<td style="border-style: solid; border-width: 1px; padding: 5px; width: 308px">Microsoft Store version (recommended in device-context if available)</td>
</tr>
<tr>
<td style="border-style: solid; border-width: 1px; padding: 5px; width: 175px">Windows 11<br />
Windows 10 1703 LTSB and later</td>
<td style="border-style: solid; border-width: 1px; padding: 5px; width: 183px">Microsoft Store version</td>
<td style="border-style: solid; border-width: 1px; padding: 5px; width: 308px">Microsoft Store version (deployed in device-context) or desktop version.</td>
</tr>
<tr>
<td style="border-style: solid; border-width: 1px; padding: 5px; width: 175px">Windows 10 1703 LTSB</td>
<td style="border-style: solid; border-width: 1px; padding: 5px; width: 183px">Desktop installer</td>
<td style="border-style: solid; border-width: 1px; padding: 5px; width: 308px">Desktop installer</td>
</tr>
<tr>
<td style="border-style: solid; border-width: 1px; padding: 5px; width: 175px">All versions of Windows Server</td>
<td style="border-style: solid; border-width: 1px; padding: 5px; width: 183px">Not supported</td>
<td style="border-style: solid; border-width: 1px; padding: 5px; width: 308px">Not supported</td>
</tr>
</tbody>
</table>
</figure>

 

**NOTES:**

- When Minecraft Education is installed with the Microsoft Store, app updates are installed through the Microsoft Store. If you block updates to apps, Minecraft Education will not update.
- The Microsoft Store and desktop installer versions of Minecraft Education are incompatible with each other. If you want to switch from one to the other, you must uninstall the other version.
- [Delivery Optimization](https://learn.microsoft.com/windows/deployment/do/waas-delivery-optimization) is only supported for the store version of Minecraft Education.

## Installation instructions

### Install on devices enrolled into Microsoft Intune using Microsoft Store app integration

Intune can deploy apps from the Microsoft Store. For more information, see [Add Microsoft Store apps to Microsoft Intune](https://learn.microsoft.com/en-us/mem/intune/apps/store-apps-microsoft). To deploy Minecraft Education to your Intune managed devices, follow these steps:

1.  Navigate to [Microsoft Intune admin console](https://endpoint.microsoft.com/)
2.  Select **Apps**, then select **All Apps**
3.  Select **Add**
4.  Select **Microsoft Store app (new)** and chooses **Select**
5.  Select **Search the Microsoft Store app (new)**
6.  Search for **Minecraft Education**
7.  Choose **Select**
8.  On the App information screen, select the *install behavior*, then select **Next**
    - *System* means install for all users (recommended for most scenarios)
    - *User* means only install for the targeted user or current user of a device
9.  On the **scope tags** screen, select scope tags if necessary, then select **Next**
10. On the **assignment** screen, choose how you’d like to target the installation of **Minecraft Education**
    - Required assignments are installed without user interaction.
    - Available assignments enable Minecraft Education to be installed from Company Portal by the targeted users.
11. After you’ve made your selection, select **Next**
12. Then select **Create**
13. **Result:** Minecraft Education will be installed by Microsoft Intune on the targeted users or devices at the next check-in or be made available in Company Portal for optional install.

### Install on Devices via Winget command in Command Prompt

Minecraft Education can be installed from the Winget utility in Windows 11/10. For more information regarding Winget and how you can use it in your deployment see [Use the Winget tool to install and manage applications \| Microsoft Learn](https://learn.microsoft.com/en-us/windows/package-manager/winget/)

  
To install Minecraft Education by Winget: 

1.  Open Command Prompt as an Administrator
2.  Run **Winget search "Minecraft Education"**
3.  Depending on how you wish to install Minecraft Education run one of these commands: 
    1.  To install for just the currently signed in user: 
        1.  **Winget Install "Minecraft Education" --scope user**
    2.  To install for all users on the machine:
        1.  **Winget Install "Minecraft Education" --scope machine**  
             

### Instruct users to install from the Microsoft Store

Provide the following instructions for your students and teachers to get the app themselves from the Microsoft Store.

1.  Open the **Microsoft Store** app
2.  Search for **Minecraft Education**
3.  Follow instructions to get the app

 

### Install desktop version

Follow these steps to manually install the Windows desktop version of Minecraft Education.

1.  Download the [Minecraft Education desktop installer](https://aka.ms/downloadmee-desktopApp).
2.  **Result:** The installation file begins downloading to your PC.

<!-- -->

2.  Use the following command line to install the application quietly:
3.  **\<exe name. eg MinecraftEducation_x86_1.20.1200.0\> /qn**

The full list of command line options are:

<figure class="wysiwyg-table wysiwyg-table-align-left" style="height: 536px; width: 576px;">
<table style="border-style: solid; border-width: 2px;">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr style="height: 22px;">
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 198.375px">/? or /help</td>
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 392.125px">Display command line options</td>
</tr>
<tr style="height: 22px;">
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 198.375px">/extract: &lt;directory&gt;</td>
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 392.125px">Extracts all files to the specified directory</td>
</tr>
<tr style="height: 22px;">
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 198.375px">/listlangs</td>
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 392.125px">Lists the languages supported by setup</td>
</tr>
<tr style="height: 22px;">
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 198.375px">/exenoui</td>
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 392.125px">Launches EXE setup without a UI</td>
</tr>
<tr style="height: 22px;">
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 198.375px">/exebasicui</td>
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 392.125px">Launches EXE setup with basic UI</td>
</tr>
<tr style="height: 22px;">
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 198.375px">/exelang &lt;langid&gt;</td>
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 392.125px">Launches the EXE setup using the specified language</td>
</tr>
<tr style="height: 22px;">
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 198.375px">/proxyusername</td>
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 392.125px">Username used by proxy</td>
</tr>
<tr style="height: 22px;">
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 198.375px">/proxypassword</td>
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 392.125px">Password used by proxy</td>
</tr>
<tr style="height: 44px;">
<td style="border-style: solid; border-width: 1px; height: 44px; padding: 5px; width: 198.375px">/L*V &lt;path_to_file&gt;<br />
/exelog &lt;path_to_file&gt;</td>
<td style="border-style: solid; border-width: 1px; height: 44px; padding: 5px; width: 392.125px">Creates a verbose log file at the specified path. Use just /L to only do basic logging. </td>
</tr>
<tr style="height: 44px;">
<td style="border-style: solid; border-width: 1px; height: 44px; padding: 5px; width: 198.375px">INSTALL_UPDATER="NONE"</td>
<td style="border-style: solid; border-width: 1px; height: 44px; padding: 5px; width: 392.125px">Does not create the task scheduler events for update checks. (App will need to be manually updated)</td>
</tr>
<tr style="height: 134px;">
<td style="border-style: solid; border-width: 1px; height: 134px; padding: 5px; width: 198.375px">&lt;msioptions&gt;</td>
<td style="border-style: solid; border-width: 1px; height: 134px; padding: 5px; width: 392.125px">Options for msiexec.exe running the MSI package. For example /qn runs the MSI install as quiet with no user interface.<br />
You can learn more about these here: <a href="https://learn.microsoft.com/en-us/windows/win32/msi/standard-installer-command-line-options">Microsoft Standard Installer command-line options - Win32 apps | Microsoft Learn</a></td>
</tr>
<tr style="height: 138px;">
<td style="border-style: solid; border-width: 1px; height: 138px; padding: 5px; width: 198.375px">APPDIR=</td>
<td style="border-style: solid; border-width: 1px; height: 138px; padding: 5px; width: 392.125px"><p>Changes the install path for Minecraft Education, for example:<br />
 </p>
<pre class="wysiwyg-code-block"><code>MinecraftInstaller.exe AppDir=C:\Test\ /qn /exenoui</code></pre>
<p>will install Minecraft Education to C:\Test silently without showing the install GUI. </p></td>
</tr>
</tbody>
</table>
</figure>

 

3\. If your software deployment tool has a detection method, you can use the following options:

<figure class="wysiwyg-table wysiwyg-table-align-left" style="height: 243px; width: 575px;">
<table style="border-style: solid; border-width: 2px;">
<tbody>
<tr style="height: 44px;">
<td style="border-style: solid; border-width: 1px; height: 44px; padding: 5px; width: 138.344px"><strong>Key</strong></td>
<td style="border-style: solid; border-width: 1px; height: 44px; padding: 5px; width: 413.656px"><p>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Microsoft Studios\Minecraft Education Edition</p></td>
</tr>
<tr style="height: 22px;">
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 138.344px"><strong>Value name</strong></td>
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 413.656px"><p>Version</p></td>
</tr>
<tr style="height: 44px;">
<td style="border-style: solid; border-width: 1px; height: 44px; padding: 5px; width: 138.344px"><strong>Detection method</strong></td>
<td style="border-style: solid; border-width: 1px; height: 44px; padding: 5px; width: 413.656px">Version comparison</td>
</tr>
<tr style="height: 22px;">
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 138.344px"><strong>Operator</strong></td>
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 413.656px">Greater than or equal to</td>
</tr>
<tr style="height: 22px;">
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 138.344px"><strong>Value</strong></td>
<td style="border-style: solid; border-width: 1px; height: 22px; padding: 5px; width: 413.656px">&lt;deployed version, eg “1.18.45.0”&gt;</td>
</tr>
<tr style="height: 67px;">
<td style="border-style: solid; border-width: 1px; height: 67px; padding: 5px; width: 138.344px"><strong>Associated with a 32-bit app on 64-bit clients</strong></td>
<td style="border-style: solid; border-width: 1px; height: 67px; padding: 5px; width: 413.656px">Yes</td>
</tr>
</tbody>
</table>
</figure>

 

### Install Minecraft Education via Group Policy using PowerShell script

You can download the [PowerShell script here](https://education.minecraft.net/content/dam/education-edition/learning-experiences/support/MinecraftEducationInstallScriptsV3.zip). Inside of the .zip file you'll find both the .exe (desktop) and .appx (Microsoft Store) versions of Minecraft Education. Refer to the included relevant readme files for setup and deployment steps. If you have questions or feedback on this script, please reach out to our support team via [our ticket form here](https://aka.ms/MEE_New_Request).   
  
**Note:** Although these scripts have been extensively tested in Windows Server environments, we strongly recommend validating them in a limited or test environment prior to deployment across all clients. Please be aware that only limited support can be provided for scripts that have been modified. Additionally, while these scripts may function with other MDM solutions, official support is limited to deployment via Group Policy as a startup script. Deployment as a per-user login script is not supported at this time.

### Install the Microsoft Store version manually

Follow these steps to manually install the Microsoft Store version of Minecraft Education.

1.  Download the [Minecraft Education appxbundle.](https://aka.ms/downloadmee-appxbundle)
2.  **Result:** If a pop-up asks approval to open the app installer, select **Open Installer**

<!-- -->

2.  From the app installer, ensure **Launch when ready** is selected and select **Install**.
3.  **Result:** After Minecraft Education finishes installing, Minecraft Education opens.
4.  **Note:**This requires the **Desktop App Installer** application to be installed.
