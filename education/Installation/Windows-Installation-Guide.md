---
title: Windows Installation Guide
date: 2023-02-10T19:44:41Z
updated: 2024-09-17T22:11:55Z
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

 

|  |  |
|----|----|
| **Installation method** | **Updates via** |
| <u>[Install on devices enrolled into Microsoft Intune using Microsoft Store app integration](#install-on-devices-enrolled-into-microsoft-intune-using-microsoft-store-app-integration)</u> | Microsoft Store |
| [Instruct users to install from the Microsoft Store](#instruct-users-to-install-from-the-microsoft-store) | Microsoft Store |
| [Install the Microsoft Store version manually](#install-minecraft-education-via-group-policy-using-powershell-script) | Microsoft Store |
| [Install via WinGet](#install-on-devices-via-winget-command-in-command-prompt) | Microsoft Store |
| [Install desktop version   ](#install-desktop-version) | Scheduled Task |

 

The version you choose may depend on your setup. These are the recommended Minecraft Education versions based on common setups.

<table style="width: 666px;" data-border="2px" data-cellpadding="5px">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr>
<td style="width: 175px"><p><strong>Windows OS</strong></p></td>
<td style="width: 183px"><p><strong>One-to-one device</strong></p></td>
<td style="width: 308px"><p><strong>Shared device</strong></p></td>
</tr>
<tr>
<td style="width: 175px"><p>Windows 10/11 </p></td>
<td style="width: 183px"><p>Microsoft Store version</p></td>
<td style="width: 308px"><p>Microsoft Store version (recommended in device-context if available)</p></td>
</tr>
<tr>
<td style="width: 175px"><p>Windows 11<br />
Windows 10 1703 LTSB and later</p></td>
<td style="width: 183px"><p>Microsoft Store version</p></td>
<td style="width: 308px"><p>Microsoft Store version (deployed in device-context) or desktop version.</p></td>
</tr>
<tr>
<td style="width: 175px"><p>Windows 10 1703 LTSB</p></td>
<td style="width: 183px"><p>Desktop installer</p></td>
<td style="width: 308px"><p>Desktop installer</p></td>
</tr>
<tr>
<td style="width: 175px"><p>All versions of Windows Server</p></td>
<td style="width: 183px"><p>Not supported</p></td>
<td style="width: 308px"><p>Not supported</p></td>
</tr>
</tbody>
</table>

 

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

<table style="width: 576px;" data-border="2px" data-cellpadding="5px">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="width: 175.469px"><p>/?</p></td>
<td style="width: 377.531px"><p>Display command line options</p></td>
</tr>
<tr>
<td style="width: 175.469px"><p>/extract: &lt;directory&gt;</p></td>
<td style="width: 377.531px"><p>Extracts all files to the specified directory</p></td>
</tr>
<tr>
<td style="width: 175.469px"><p>/listlangs</p></td>
<td style="width: 377.531px"><p>Lists the languages supported by setup</p></td>
</tr>
<tr>
<td style="width: 175.469px"><p>/exenoui</p></td>
<td style="width: 377.531px"><p>Launches EXE setup without a UI</p></td>
</tr>
<tr>
<td style="width: 175.469px"><p>/exebasicui</p></td>
<td style="width: 377.531px"><p>Launches EXE setup with basic UI</p></td>
</tr>
<tr>
<td style="width: 175.469px"><p>/exelang &lt;langid&gt;</p></td>
<td style="width: 377.531px"><p>Launches the EXE setup using the specified language</p></td>
</tr>
<tr>
<td style="width: 175.469px"><p>/username</p></td>
<td style="width: 377.531px"><p>Username used by proxy</p></td>
</tr>
<tr>
<td style="width: 175.469px"><p>/password</p></td>
<td style="width: 377.531px"><p>Password used by proxy</p></td>
</tr>
<tr>
<td style="width: 175.469px"><p>/exelog &lt;path to log file&gt;</p></td>
<td style="width: 377.531px"><p>Creates a log file at the specified path</p></td>
</tr>
<tr>
<td style="width: 175.469px"><p>/exenoupdates</p></td>
<td style="width: 377.531px"><p>Does not check for a newer version</p></td>
</tr>
<tr>
<td style="width: 175.469px"><p>&lt;msioptions&gt;</p></td>
<td style="width: 377.531px"><p>Options for msiexec.exe running the MSI package. For example /qn runs the MSI install as quiet with no user interface.</p></td>
</tr>
<tr>
<td style="width: 175.469px"><p>APPDIR=</p></td>
<td style="width: 377.531px">Changes the install path for Minecraft Education, for example:<br />
&#10;<pre><code>MinecraftInstaller.exe AppDir=C:\Test\ /qn /exenoui</code></pre>
will install Minecraft Education to C:\Test silently without showing the install GUI. </td>
</tr>
</tbody>
</table>

 

3\. If your software deployment tool has a detection method, you can use the following options:

|  |  |
|----|----|
| **Key** | HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Microsoft Studios\Minecraft Education Edition |
| **Value name** | Version |
| **Detection method** | Version comparison |
| **Operator** | Greater than or equal to |
| **Value** | \<deployed version, eg “1.18.45.0”\> |
| **Associated with a 32-bit app on 64-bit clients** | Yes |

 

### Install Minecraft Education via Group Policy using PowerShell script

You can download the [PowerShell script here](https://education.minecraft.net/content/dam/education-edition/learning-experiences/support/MinecraftEducationInstallScriptsV3.zip). Inside of the .zip file you'll find both the .exe (desktop) and .appx (Microsoft Store) versions of Minecraft Education. Refer to the included relevant readme files for setup and deployment steps. If you have questions or feedback on this script, please reach out to our support team via [our ticket form here](https://aka.ms/MEE_New_Request). 

 

### Install the Microsoft Store version manually

Follow these steps to manually install the Microsoft Store version of Minecraft Education.

1.  Download the [Minecraft Education appxbundle.](https://aka.ms/downloadmee-appxbundle)
2.  **Result:** If a pop-up asks approval to open the app installer, select **Open Installer**

<!-- -->

2.  From the app installer, ensure **Launch when ready** is selected and select **Install**.
3.  **Result:** After Minecraft Education finishes installing, Minecraft Education opens.
4.  **Note:**This requires the **Desktop App Installer** application to be installed.
