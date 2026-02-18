---
title: Deploying over Group Policy (via PowerShell)
date: 2026-02-01T06:46:11Z
updated: 2026-02-17T22:10:29Z
categories: Installation
link: https://edusupport.minecraft.net/hc/en-us/articles/45872069884436-Deploying-over-Group-Policy-via-PowerShell
hash:
  h_01KGR0SKMTFP8TX1MZQ6W0FMZX: before-you-begin
  h_01KGR0SKN1DGKXQQD20XM0EAFR: which-version-to-use
  h_01KGR0SKN2SW0AXX8Y01RGGHC4: installer-options-and-differences
  h_01KGR0SKN5SRG9PJ7MCWQ28VMK: appx-version
  h_01KGR0SKN8YQ5CQ4HFXZFN6XXV: exe-legacy-version
  h_01KGR0SKNBFFAFF35HG992AY56: installation-scope
  h_01KGR0SKNDSB88SQSVV7WS643Y: deployment-process
  h_01KGR0SKND18B0D00QV6WWQ4T5: installation-process-overview
  h_01KGR0SKNEPX34ATVFCKY00FGH: network-share-requirements
  h_01KGR0SKPNRX8T8J1WPVNQEP91: file-placement
  h_01KGR0SKNP8X09G70316QH4NYA: script-configuration
  h_01KGR0SKPJ8KKBGS1C5BGR3T23: alternative-pass-the-installer-path-as-a-parameter
  h_01KGR0SKPPP3BPS4SB8V2H48DZ: group-policy-configuration
  h_01KGR0SKPQ1P6YJ87JQ8FSW9GP: enable-powershell-script-execution
  h_01KGR0SKPSW1R3BRKCD0NBHF5M: configure-the-startup-script
  h_01KGR0SKQ0TPKVVG2VYYJ3CTJS: apply-policy-changes
  h_01KGR0SKQ6ZY5DGFDR08HC013A: client-behavior-and-verification
  h_01KGR0SKQC5Z1BAKFX1WSM30S8: uninstall
  h_01KGR0SKQGHNJ508452X6Z8GH5: logging
  h_01KGR0SKQK9ASG301YTXHHXP1R: extra-parameters
  h_01KGR0SKQMZDZSXPBZP4NC6WMS: parameters
  h_01KGR0SKQT95R863P0A6VJF576: troubleshooting
---

If your organization needs to deploy Minecraft Education to multiple devices for all users using Group Policy, we’ve provided a supported deployment script to help streamline this process. The bundle also includes an uninstall script, allowing administrators to remove Minecraft Education from multiple devices across the organization when needed.

Please note that this deployment method requires advanced administrative access and coordination with your school’s IT and/or networking team. Educators are encouraged to share this guide with their IT administrators to ensure proper setup, deployment, and ongoing support.

------------------------------------------------------------------------

## Before You Begin

Ensure your environment meets the following requirements:

- All domain controllers are running Windows Server 2016 or newer
- Forest functional level is Windows Server 2016 or newer
- All client devices are running a supported version of Windows
- All client hardware meets our [system requirements](../Get-Started/System-Requirements.md)
- Familiarity with creating and editing Group Policy Objects (GPOs) and modifying PowerShell scripts

You will also need:

- The latest version of our [deployment scripts](https://aka.ms/MEPSScript)
- The latest version of the installer you want to use
  - [AppX app bundle](https://aka.ms/downloadmee-appxbundle) (for the AppX installer)
  - [EXE installer](https://aka.ms/downloadmee-desktopApp) (for the EXE script)

We recommend deploying the script at a time when systems will have sufficient time to install after rebooting, and before a user logs in. This helps prevent premature restarts, which may cause the script to fail (for example, over a long weekend with a forced reboot).

Please note that these scripts are offered on a “use at your own risk” basis. We test them thoroughly, but we still recommend trying them on a small set of devices before rolling them out across your environment. They’re only tested for Group Policy, so while they might work with other MDM solutions, we can’t guarantee it, and support won’t be able to assist in those cases.

------------------------------------------------------------------------

## Which Version to Use?

### Installer Options and Differences

The script bundle includes two installation methods for Minecraft Education:

- An AppX (Microsoft Store) 
- A legacy EXE (Win32)

The installer you choose depends on your environment’s requirements and constraints. While the deployment process is the same for both options, the installation method and update mechanisms differ.

------------------------------------------------------------------------

### AppX Version

- Installed using **DISM Provisional Packages**
- Updates are managed through the **Microsoft Store**
- Requires access to the Microsoft Store
- **Not supported on LTSC or IoT editions of Windows**
- Requires Desktop App Installer to be installed and enabled

------------------------------------------------------------------------

### EXE (Legacy) Version

- Installed as a traditional **Win32 application**
- **Updates are handled via a scheduled task** created by the installer
- **Supported on most Windows editions**, including environments where the Microsoft Store is unavailable

Additional details on these installation differences can be found in the [Windows Installation Guide](./Windows-Installation-Guide.md).

------------------------------------------------------------------------

### Installation Scope

Both scripts install Minecraft Education for all users on the device.\
A per-user installation option is not currently available.

------------------------------------------------------------------------

## Deployment Process

### Installation Process Overview

Regardless of which Minecraft Education installer you choose, the installation process is identical.

Begin by downloading your selected installer and placing it in a network share that is accessible to all target machines.

------------------------------------------------------------------------

### Network Share Requirements

- The share must be readable by **Domain Computers** and **Authenticated Users**
- For best results, we recommend placing the **scripts** in one of the following locations:
  - `\\[Domain Name]\SysVol\Scripts`
  - `\\[Domain Name]\Policies\[Policy ID]\Machine\Scripts\Startup`

While the script can download the latest installer as a fallback, **this is not recommended**. Doing so can significantly increase installation time, consume additional network bandwidth, or cause the script to fail. Installing from a local network path is strongly recommended.

The installer must be accessible via either:

- A UNC path (for example, `\\server\path\to\installer.exe` or `\\server\path\to\installer.appx`), or
- A URL (not recommended)

------------------------------------------------------------------------

## File Placement

Place the installer files in a network accessible share. This share needs to be accessible by **Domain Computers** and **Authenticated Users **

Take note of the full UNC path (for example, `\\server\path\to\installer.appx`), as this will be required either in the script or as a GPO parameter.

------------------------------------------------------------------------

## Script Configuration

You must update the script to point to the installer location.

1.  Open the script in a text editor (Notepad, PowerShell ISE, Visual Studio Code, or another IDE of your choice).
2.  Update the `$url` parameter to reference your installer’s UNC path.

**Example:** `$url="\\MCEDU-DC\Installers\MinecraftInstaller.exe"`

<figure class="wysiwyg-image">
<img src="https://edusupport.minecraft.net/hc/article_attachments/45952234252564" />
</figure>

This parameter is located on **line 26** in both installation scripts.

> **Note:**
>
> The script is designed to run as **SYSTEM** during computer startup (pre–user logon). If you run it manually for any reason, it **must be executed as an Administrator**.

------------------------------------------------------------------------

### Alternative: Pass the Installer Path as a Parameter

Instead of editing the script directly, you can pass the installer path as a parameter when configuring the GPO.

**Example parameter:**

``` auto
-url "\\server\path\to\installer"
```

This allows you to reuse the same script across multiple deployments without modifying it. (See the example screenshot below.)\
You will configure this in a later step.\
![](https://edusupport.minecraft.net/hc/article_attachments/45952234253716)

> **Quick Tip:**\
> We update the scripts regularly. It’s a good idea to check periodically and update your Group Policy with the latest version.

------------------------------------------------------------------------

## Group Policy Configuration

### Enable PowerShell Script Execution

Create a Group Policy Object that allows PowerShell scripts to run:

**Path:**

``` auto
Computer Configuration  
 > Administrative Templates  
   > Windows Components  
     > Windows PowerShell  
       > Turn on Script Execution
```

Set this policy to **Allow all scripts**.

> **Security Notice:**\
> Enabling this policy permits the execution of all unsigned PowerShell scripts. Carefully evaluate the associated security risks before implementing this in a production environment.

------------------------------------------------------------------------

### Configure the Startup Script

In the same GPO (or a separate one, if preferred), configure the PowerShell script to run at system startup:

**Path:**

``` auto
Computer Configuration  
 > Windows Settings  
   > Scripts  
     > Startup
```

- Select the **PowerShell Scripts** tab\
  *(Do not use the “Scripts” tab — it is for batch files only.)*
- Click **Add**
- Specify the script path
- Add any required parameters (for example, `-url \\path\to\installer`, if applicable)\
  ![](https://edusupport.minecraft.net/hc/article_attachments/45952294397844)\
  ![](https://edusupport.minecraft.net/hc/article_attachments/45952234253716)

------------------------------------------------------------------------

## Apply Policy Changes

After completing the GPO configuration:

1.  Close all Group Policy windows
2.  Open **Command Prompt** on the domain controller
3.  Run:

``` auto
gpupdate /force
```

------------------------------------------------------------------------

## Client Behavior and Verification

Once the policy is applied, reboot the client systems. Minecraft Education will be installed during startup.

**Note:** Installation may continue in the background after the system boots.

You can monitor progress by checking: `C:\TempMC\Logs`

If the file `InstallInProgress.txt` exists, the installation has not yet completed.\
\
If successful, you should also see a desktop shortcut created in: `C:\Users\Public\Desktop`

If issues occur, refer to the [troubleshooting](#troubleshooting) section below.

------------------------------------------------------------------------

## Uninstall

To remove Minecraft Education from all managed devices, deploy the **Uninstall** script.

The uninstall script detects and removes either the AppX or EXE version if present. It also attempts to remove all desktop shortcuts and ensures the app is removed from the Start menu.

> **Important:**\
> **This will uninstall Minecraft Education for all users on the machine and permanently delete all user-created worlds. Be sure to back up any important data beforehand. This action is not reversible.**

The process is identical to installation, except no URL or parameters are required. Simply add the uninstall script to the **Startup PowerShell Scripts** section and deploy it.

------------------------------------------------------------------------

## Logging

The script generates logs in the following directory:

``` auto
C:\TempMC\Logs
```

Logs include the device name, timestamp, installer source, and output from DISM (for AppX installations) or the installer (for EXE installations). These details can help determine installation status or identify failures.

During installation, an `InstallInProgress.txt` file will also be created in this directory to prevent overlapping installations if the script runs more than once.

You can change this path using the -LogDir parameter of the script. 

------------------------------------------------------------------------

## Extra Parameters

Additional parameters are available. With the exception of `-URL`, we do not recommend using these in production environments.

### Parameters

<figure class="wysiwyg-table" style="width: 100%;">
<table class="wysiwyg-table-resized">
<colgroup>
<col style="width: 33%" />
<col style="width: 67%" />
</colgroup>
<tbody>
<tr>
<td><strong>-URL (Required)</strong></td>
<td><p>Specifies the UNC path or URL from which to download the installer. The installer is copied to the App Directory path (default: <code>C:\TempMC\Installer</code>) and installed from there.<br />
If not specified or invalid, the script attempts to download from the website, which is not recommended.</p>
<p>Default: Website</p></td>
</tr>
<tr>
<td><strong>-LogDir</strong></td>
<td>Specifies the directory where logs are stored (local or UNC path).<br />
Default: <code>C:\TempMC\Logs</code></td>
</tr>
<tr>
<td><strong>-AppDir</strong></td>
<td>Directory used to download and install the installer. Deleted upon successful installation.<br />
Default: <code>C:\TempMC\Installer</code></td>
</tr>
<tr>
<td><strong>-Force</strong></td>
<td>Forces an installation and bypasses duplicate install checks. Not recommended.</td>
</tr>
<tr>
<td><strong>-Verbose</strong></td>
<td>Enables additional verbose logging.</td>
</tr>
<tr>
<td><strong>-NoShortcut</strong></td>
<td>Disables creation of the desktop shortcut in <code>C:\Users\Public\Desktop</code>.</td>
</tr>
<tr>
<td><strong>-SkipInstallCheck</strong></td>
<td>Skips duplicate install checks. Not recommended, as it may cause issues.</td>
</tr>
<tr>
<td><strong>-EnableHash</strong></td>
<td>Verifies SHA256 hashes of the remote and downloaded installer for unreliable connections. This increases installation time.</td>
</tr>
</tbody>
</table>
</figure>

------------------------------------------------------------------------

## Troubleshooting

If you encounter issues, check the following:

- In **Task Manager**, confirm whether the Minecraft Education installer or DISM is still running

- Check `C:\TempMC\Logs` for script status
  - If the directory does not exist, the script did not run

- Ensure the installer URL is valid

- Ensure the URL is **not** surrounded by double quotes:

   
  Correct Format = `$url="\\path\to\installer.exe"` \
   
  Incorrect Format = `$url=""\\path\to\installer.exe"` ✖
   

- Ensure the URL points to the installer file, not the folder

- Verify the system is receiving the GPO using:

  ``` auto
  gpresult /R
  gpresult /H gpresult.html
  ```

- Close all GPO-related windows and rerun `gpupdate /force`

- On affected clients, try running the following command in an elevated command prompt and then rebooting:

  ``` auto
  gpupdate /force /boot
  ```

- If no URL is specified, download the installer manually, place it on a local network share, update the script, and redeploy

- Test running the script manually on a client

If issues persist, [contact support](../Community/How-to-Get-Support.md) and include:

- A log file from an affected system
- The app version you are deploying
- Your Windows Server version
- The number of affected systems
- The installer source (UNC path or website)
- Lastly, please note that while we can support issues with the script itself, our ability to support Group Policy issues itself is limited.
