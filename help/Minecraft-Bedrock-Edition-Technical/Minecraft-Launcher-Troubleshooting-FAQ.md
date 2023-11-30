---
title: Minecraft Launcher Troubleshooting FAQ
date: 2022-06-03T19:44:02Z
updated: 2023-11-29T15:09:00Z
categories: "Minecraft: Bedrock Edition Technical"
tags:
  - title_minecraft_java_edition
  - title_minecraft
  - subject_game_does_not_start
  - category_technical_support
  - platform_windows_10
  - platform_linux
  - platform_macos
  - platform_pc
  - platform_PC
  - platform_macOS
  - popular
  - section_12617893243277
  - section_12618019146893
link: https://help.minecraft.net/hc/en-us/articles/6662588435597-Minecraft-Launcher-Troubleshooting-FAQ
---

Welcome to the Minecraft Launcher troubleshooting FAQ. If you’re having any trouble with the Minecraft Launcher, this article details all sorts of solutions that can help you out.  

## Most Common Problems:

1.  [I can log into the Launcher, but I can't access some of the games I own](#my-launcher-is-working-and-i-can-login-but-i-have-to-re-enter-my-credentials-every-time)
2.  [I'm seeing an error message in the Launcher, "failed to create profile" or "failed to create Java username"](#trouble-launching-the-game-from-the-minecraft-launcher)
3.  [I'm having trouble installing the Launcher](#trouble-downloading-the-minecraft-launcher-from-the-microsoft-store-1)
4.  [I'm having trouble updating Bedrock Edition (aka Minecraft for Windows)](#ive-logged-into-the-launcher-and-am-getting-the-error-cant-connect-to-minecraft-services)
5.  [I'm having trouble installing Bedrock Edition on a non-C Drive](#my-launcher-is-crashing)

## I’m having a problem with my Launcher and/or with running Minecraft. What should I do?

Steps to help address specific problems are below – but if you are seeing a “Deep Ocean” error + code in your Launcher, are having trouble installing or running the Win10/Win11 Launcher, or are having trouble running/installing Bedrock or any other software within the Launcher, **try the following steps FIRST**:

1.  Make sure you are logged in to the Microsoft Store: Open the Store app and log in: <https://aka.ms/MSStoreHome>
2.  Make sure your version of Windows is up to date: In the lower-left corner of your PC’s screen, enter “Update” in the search bar. Choose “Check for updates” and let your PC install any & all available updates.

**Note: If your Updater won’t run:**

1.  Go into “Settings”
2.  Choose “Apps"
3.  Choose “Installed Apps”
4.  Choose “Gaming Services”
5.  Click the “…” on the far right of the screen![](https://minecrafthelp.zendesk.com/hc/article_attachments/14182738620685)
6.  Choose “Advanced Options”
7.  Scroll down to “Repair” and let it run.

Ensure you have all necessary dependencies installed; some “system cleaner” applications remove or stop some of these, which can cause trouble on your system. 

The recommended way to check this is to install the [PC Xbox Store App](https://aka.ms/DLXboxApp), which will do the necessary checks itself.

You can also check the installation status of each respective dependency directly:

- Gaming Services: <https://aka.ms/GetGamingServices>
- Xbox Identity Provider: <https://aka.ms/XboxIdentityProvider>
- Xbox Live In-Game Experience: <https://aka.ms/XboxLiveInGame>
- Xbox Console Companion: <https://aka.ms/XCC>

**Note:** **These are not Xbox console apps; they are PC-helper apps that help ensure things run smoothly on your Windows 10/11 device.**

If you still have an issue, have any further questions, or are facing some other problem, please continue below or reach out directly to [Minecraft Support](https://aka.ms/Minecraft-Support). 

# In This Article:

### [If you are getting a “Java Profile Creation Failed” error in the Launcher](#if-you-are-getting-a-java-profile-creation-failed-error-in-the-launcher)

### [Trouble Downloading the Minecraft Launcher from the Microsoft Store](#trouble-downloading-the-minecraft-launcher-from-the-microsoft-store-1)

- [I click ‘Get’ to install the launcher, but the installation fails.](#i-click-get-to-install-the-launcher-but-the-installation-fails)
- [I’ve received the error: Minecraft Launcher license is currently not available for your account (0x803F8001)](#ive-received-the-error-minecraft-launcher-license-is-currently-not-available-for-your-account-0x803f8001)
- [I cannot download the Minecraft Launcher, and I’m being told to renew my Xbox Live subscription.](#i-cannot-download-the-minecraft-launcher-and-im-being-told-to-renew-my-xbox-live-subscription)
- [I see a message in the Launcher saying “Security update available.” What does that mean?](#i-see-a-message-in-the-launcher-saying-security-update-available-what-does-that-mean)
- [I’m getting the error ‘unable to update Native Launcher.’ ](#im-getting-the-error-unable-to-update-native-launcher)

### [Trouble Downloading the Minecraft Launcher from Minecraft.net ](#trouble-downloading-the-minecraft-launcher-from-minecraftnet-1)

- [I’m trying to install the Minecraft Launcher after downloading it from Minecraft.net, but it’s failing to install.](#im-trying-to-install-the-minecraft-launcher-after-downloading-it-from-minecraftnet-but-its-failing-to-install)
- [I’m receiving error 0x80131500 when trying to install the Launcher. ](#im-receiving-error-0x80131500-when-trying-to-install-the-launcher)

### [Trouble Loading up the Minecraft Launcher ](#trouble-loading-up-the-minecraft-launcher-1)

- [My Launcher never gets to the login screen. It just loads forever.](#my-launcher-never-gets-to-the-login-screen-it-just-loads-forever)
- [My Launcher fails to startup, and I get a system error ‘This app can’t open.’](#my-launcher-fails-to-startup-and-i-get-a-system-error-this-app-cant-open)
- [My launcher is failing to visibly startup. ](#my-launcher-is-failing-to-visibly-startup)

### [Trouble Logging Into the Minecraft Launcher ](#trouble-logging-into-the-minecraft-launcher-1)

- [I clicked ‘Login’ and entered my credentials, but am getting an error ‘Something went wrong in the login process. If the problem persists, check your internet connection.’](#i-clicked-login-and-entered-my-credentials-but-am-getting-an-error-something-went-wrong-in-the-login-process-if-the-problem-persists-check-your-internet-connection)
- [My Launcher crashes during login.](#my-launcher-crashes-during-login)
- [My Launcher works, but I can’t successfully login.](#my-launcher-works-but-i-cant-successfully-login)
- [My Launcher is working, and I can login, but I have to re-enter my credentials every time.](#my-launcher-is-working-and-i-can-login-but-i-have-to-re-enter-my-credentials-every-time)
- [I can log into the Launcher, but I can’t access any of the games I own.](#i-can-log-into-the-launcher-but-i-cant-access-any-of-the-games-i-own)
- [I’ve logged into the Launcher and am getting the error ‘Can’t connect to Minecraft Services.’ ](#ive-logged-into-the-launcher-and-am-getting-the-error-cant-connect-to-minecraft-services)

### [Trouble Installing the Game from the Minecraft Launcher](#trouble-installing-the-game-from-the-minecraft-launcher-1)

- [My game installation is stalling or stopping part of the way through.](#my-game-installation-is-stalling-or-stopping-part-of-the-way-through)
- [I’m installing Bedrock from the Microsoft Store and getting the error 0x80242020. ](#im-installing-bedrock-from-the-microsoft-store-and-getting-the-error-0x80242020)
- [I try to install Bedrock from inside the Launcher by clicking “Install,” but the button turns into 3 dots and the game never finishes installing.  ](#i-try-to-install-bedrock-from-inside-the-launcher-by-clicking-install-but-the-button-turns-into-3-dots-and-the-game-never-finishes-installing)
- [My Launcher is crashing. ](#my-launcher-is-crashing)
- [I don't want to install on my C drive. How do I install on a different drive on my PC?](#i-dont-want-to-install-on-my-c-drive-how-do-i-install-on-a-different-drive-on-my-pc)

### [Trouble Launching the Game from the Minecraft Launcher ](#trouble-launching-the-game-from-the-minecraft-launcher-1)

- [The game is properly installed, I click ‘Play,’ and the game crashes.](#the-game-is-properly-installed-i-click-play-and-the-game-crashes)
- [The game is properly installed, I click ‘Play’ and the Launcher crashes.](#the-game-is-properly-installed-i-click-play-and-the-launcher-crashes)
- [The game is properly installed, but the Launcher can’t connect to services/appears offline.](#the-game-is-properly-installed-but-the-launcher-cant-connect-to-servicesappears-offline)
- [I want to review the Launcher, but the popup keeps spinning without resolution.](#i-want-to-review-the-launcher-but-the-popup-keeps-spinning-without-resolution)
- [The launcher won’t open and I’m getting error code 0x8007042b.](#the-launcher-wont-open-and-im-getting-error-code-0x8007042b)
- [I get sent to the Store whenever I try to launch a game from within the Launcher](#i-get-sent-to-the-store-whenever-i-try-to-launch-a-game-from-within-the-launcher)

### [I own Bedrock on my account, but when I try to run Java Edition, I am unable to create a profile and therefore unable to play the game](#i-own-bedrock-on-my-account-but-when-i-try-to-run-java-edition-i-am-unable-to-create-a-profile-and-therefore-unable-to-play-the-game-1)

###  

### [I'm getting a 'You must complete adult verification on the Xbox homepage' error](#im-getting-a-you-must-complete-adult-verification-on-the-xbox-homepage-error-1)

## If you are getting a “Java Profile Creation Failed” error in the Launcher

Ensure that you’re properly logged into the same account on both the [Microsoft Store](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Faka.ms%2FMSStoreHome&data=05%7C01%7Cv-mmoeller%40microsoft.com%7Cbfd980abc1494c9b977508db86d5dd18%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C638252025331822034%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=g6jzAIkYMOzx3HhoG3izXG8znO48JCkyc5It%2BJIWPFE%3D&reserved=0 "Original URL: https://aka.ms/MSStoreHome. Click or tap if you trust this link.") and in the Minecraft Launcher. 

## Trouble Downloading the Minecraft Launcher from the Microsoft Store 

If you’re having trouble downloading the Minecraft Launcher from the Microsoft Store, try reading through these issues to identify what’s going on. 

### I click ‘Get’ to install the launcher, but the installation fails. 

Make sure that you’re logged into the Microsoft Store with the Microsoft account you wish to use in the Launcher. Additionally, ensure you’re trying to download the Minecraft Launcher on a Windows 10 or Windows 11 device. The Minecraft Launcher from the Microsoft Store does not support older Windows devices.** ** 

If you are on a Windows 10 or 11 device, try running Windows Update to ensure your device is up to date.

Open the Microsoft Store and install any additional updates from there as well:

1.  Load up the store through [this link](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Faka.ms%2FMSStoreHome&data=05%7C01%7Cv-mmoeller%40microsoft.com%7Cb56912bccea94a1c6f8908dba9ca84bd%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C638290459523653458%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=0DFQiS9mVJlf79unCccicQDFrgQ7620dpjjeThpKbnU%3D&reserved=0).
2.  Navigate to the 'Library' section on the bottom left corner.
3.  Select 'Get Updates' and wait for those updates to download and install.

If none of the previous steps work, we recommend trying to install the Launcher through the Xbox app. Please use [this link](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Faka.ms%2FDLXboxApp&data=05%7C01%7Cv-mmoeller%40microsoft.com%7Cb56912bccea94a1c6f8908dba9ca84bd%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C638290459523653458%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=LkvJyNIT9KBH9ydDIdDLhYKrGNX6UBlrnWqseNCWtPA%3D&reserved=0) to download the Xbox App if you do not already have it installed.  

### I’ve received the error: Minecraft Launcher license is currently not available for your account (0x803F8001) 

Try going directly to the Minecraft Launcher’s page in the Store at <https://aka.ms/NewMCLauncher>. Once there, log in using the Microsoft account you used to log into the Launcher and try installing the Launcher directly from the Store on that page.  

If you still receive this error, follow the instructions listed above regarding 'WSReset' to reset the Windows Store and retry installing again. 

### I cannot download the Minecraft Launcher, and I’m being told to renew my Xbox Live subscription. 

Make sure that your Xbox Live subscription is up to date, and that you’re logged into a Microsoft Account with said Xbox Live subscription. If you’re a Game Pass subscriber and you’re getting this error, try navigating to the [Xbox app](https://help.minecraft.net/hc/en-us/articles/Minecraft%20Launcher%20Troubleshooting%20FAQ%C2%A0) and downloading the Minecraft Launcher there. 

If you are a subscriber to neither Xbox Live nor Game Pass and are seeing this error, try logging out of the Microsoft Store and/or Xbox app and then back in. We recommend retrying from within the Xbox app as well (which you can download from <https://aka.ms/DLXboxApp>). 

### I see a message in the Launcher saying “Security update available.” What does that mean?

If you received this message, it's because you installed the Launcher using an old version of the installer which had a bug. Updating ensures your game stays safe and your custom settings are preserved!

 

### I’m getting the error ‘unable to update Native Launcher.’ 

First, try uninstalling your Launcher and then reinstalling directly from the Microsoft Store at <https://aka.ms/NewMCLauncher>.  

If you’re still hitting this error, try repairing the Launcher using the following steps: 

1.  Go to the Start Menu 
2.  Right click on the Minecraft Launcher 
3.  Select ‘More’ 
4.  Open ‘App Settings’ 
5.  Within these settings, click on ‘Repair’ and ‘Reset.’ 

If those steps don’t work, try running the Minecraft Launcher in administrator mode, by typing **'Minecraft Launcher' **into the Windows search bar, right-clicking the Launcher, and selecting '**Run as Administrator'** from the menu. If this doesn't work, try disabling anti-virus software for the Launcher. 

## Trouble Downloading the Minecraft Launcher from Minecraft.net 

If you’re having trouble downloading the Minecraft Launcher from Minecraft.net, try viewing the following scenarios to understand what’s going on. 

### I’m trying to install the Minecraft Launcher after downloading it from Minecraft.net, but it’s failing to install. 

While you are downloading the Launcher through Minecraft.net, it still requires a Microsoft Store login to install properly. As a result, you should make sure you’re logged into the Microsoft Store with the Microsoft Account you wish to use in the Launcher. 

Otherwise, you can try resetting the Microsoft Store following these steps: 

1.  Press the Windows key and the R key simultaneously 
2.  A window will appear. Type in ‘WSReset’ and hit enter. 

This will reset the Windows store.  

### I’m receiving error 0x80131500 when trying to install the Launcher. 

Try the following steps to rectify the issue: 

1.  Press Windows key and I key together to open Settings. 
2.  Then choose Update & Security. 
3.  Click Troubleshoot. 
4.  Scroll down to find Windows Store App.
5.  Click Run the troubleshooter to continue. 
6.  The troubleshooter will begin to check for problems on your computer and fix them. When it is finished, reboot your computer and retry to see whether the error code 0x80131500 is addressed. 

If these steps don’t work, try the following: 

1.  Search for "Internet Options" 
2.  Open the App 
3.  Select the "Advanced" Tab 
4.  Scroll to the Bottom of the List where you can see "Use SSL/TLS" 
5.  UN-Select SSL 3.0 and TLS 1.0 and 1.1 
6.  SELECT TLS 1.2 and (If Available) TLS 1.3 
7.  Click "Apply" 
8.  Click "OK" 
9.  Reboot Computer 

## Trouble Loading up the Minecraft Launcher 

If the Minecraft Launcher is struggling to work properly, try viewing the following scenarios to identify and solve the issue. 

### My Launcher never gets to the login screen. It just loads forever. 

Make sure that your Launcher is up to date. We’ve fixed a common issue regarding the endless loading in the 4/4/2022 update. 

### My Launcher fails to startup, and I get a system error ‘This app can’t open.’ 

Try repairing and resetting the Launcher via the following steps: 

1.  Go to the start menu 
2.  RIGHT click on the Minecraft Launcher.  
3.  Click “More.”  
4.  Open “App Settings.”  
5.  Within app settings, click on “Repair” and “Reset.” 

If these issues persist after repairing and resetting, try uninstalling and reinstalling the Minecraft Launcher.  

### My launcher is failing to visibly startup. 

Try looking at your Task Manager to see if the Minecraft Launcher is stuck or is starting up at all, and if you see a Minecraft Launcher task in the Task Manager, end the task using these steps: 

1.  Press Control-Shift-Escape to call up Task Manager. 
2.  See if you can see “Minecraft Launcher” running in Processes tab. 
3.  If so, right click Launcher process and choose “End Task” 

Also make sure that antivirus software isn’t getting in the way of startup. You may also want to try repairing and resetting the launcher using steps in the previous section. Attempting to uninstall & reinstall also may solve this problem.  

## Trouble Logging Into the Minecraft Launcher 

If your Minecraft Launcher is loading up, but you’re having issues logging into it, try viewing the following scenarios to identify and solve the issue. 

### I clicked ‘Login’ and entered my credentials, but am getting an error ‘Something went wrong in the login process. If the problem persists, check your internet connection.’ 

There are a few steps you can try if experiencing this issue.

First, install and login to the **Xbox Console Companion app**, which is available at <https://aka.ms/XboxConsoleCompanion>. 

If that doesn’t solve your problem, we recommend you next try installing and signing in to the **Xbox app**, which is available at <https://aka.ms/DLXboxApp>. Open the Xbox app, and you may see some error message content indicating you are missing some key dependencies or applications. Install whatever it indicates you are lacking. Common items that come up here as missing on systems that run into this problem include:  

- Xbox Identity Provider: https://aka.ms/XboxIdentityProvider 
- Xbox Live In-Game Experience: <https://aka.ms/XboxLiveInGame> 
- Feedback Hub: <https://aka.ms/DLFeedbackHub> 

We’ve provided links to them above in case you do discover they are the missing dependencies. Most PCs should have these items included on them, but you don’t then consider installing them and that may address the issue you’re having.  

If the Xbox app doesn’t indicate anything is missing, try the following: 

1.  Press Control-Shift-Escape to call up the Task Manager 
2.  Click the “Services” tab 
3.  Scroll down to a service called “GamingServices.” Look in the “Status” column next to this item; it should say “Running.” If it says, “Stopped,” then right click it and click “Start.” 

If the above steps don't help, try resetting the Microsoft Store with the following steps: 

1.  Press the Windows key and the R key simultaneously 
2.  A window will appear. Type in ‘WSReset’ and hit enter. 

Also, ensure that you’re connected to the internet before trying to log in. 

If the previous methods don't help, double-check that the Xbox Identity Provider is installed via the following steps: 

1.  Install the [Xbox App](https://www.xbox.com/en-US/apps/xbox-app-for-pc) and login w/your account. 
2.  Click your account/name in upper left corner. 
3.  Click “Settings”. 
4.  Go to "General" tab. 
5.  If you are missing dependencies, you will some listed there. 
6.  If not installed, click “Install” next to item "Xbox Identity Provider" 

### My Launcher crashes during login. 

If your Launcher crashes during login, try uninstalling and reinstalling the Launcher. 

If that doesn’t work, try either resetting the Microsoft Store or repairing/resetting the Launcher via the following methods: 

#### Reset Store: 

1.  Press the Windows key and the R key simultaneously 
2.  A window will appear. Type in ‘WSReset’ and hit enter. 

#### Repair/Reset the Launcher: 

1.  Go to the Start Menu 
2.  Right click on the Minecraft Launcher 
3.  Select ‘More’ 
4.  Open ‘App Settings’ 
5.  Within these settings, click on ‘Repair’ and ‘Reset.’ 

### My Launcher works, but I can’t successfully login. 

Please double-check that you’re logging in using the correct email address – especially if you’ve recently migrated. If you recently migrated to an MSA, make sure you didn’t migrate to a different account than the one you’re using to login. If so, you want to contact Minecraft Support for assistance. 

There are a few steps you can try if experiencing this issue.  

First, install and login to the **Xbox Console Companion app**, which is available at <https://aka.ms/XboxConsoleCompanion>. 

If that doesn’t solve your problem, we recommend you next try installing and signing in to the **Xbox app**, which is available at <https://aka.ms/DLXboxApp>. Open the Xbox app, and you may see some error message content indicating you are missing some key dependencies or applications. Install whatever it indicates you are lacking. Common items that come up here as missing on systems that run into this problem include:  

- Xbox Identity Provider: https://aka.ms/XboxIdentityProvider 
- Xbox Live In-Game Experience: <https://aka.ms/XboxLiveInGame> 
- Feedback Hub: <https://aka.ms/DLFeedbackHub> 

If the previous methods don’t help, double-check that the Xbox Identity Provider is installed via the following steps If you’re using the correct login but the process still isn’t working, try ensuring the Xbox Identity Provider is installed via the following steps:   

1.  Install the [Xbox App](https://www.xbox.com/en-US/apps/xbox-app-for-pc) and login w/your account. 
2.  Click your account/name in upper left corner. 
3.  Click “Settings”. 
4.  Go to "General" tab. 
5.  If you are missing dependencies, you will some listed there. 
6.  If not installed, click “Install” next to item "Xbox Identity Provider" 

### My Launcher is working, and I can login, but I have to re-enter my credentials every time. 

Try cleaning up your cached account tokens via the following steps: 

1.  In Launcher click "Settings" 
2.  Click the "Accounts" tab 
3.  Click the "Advanced Options" option at the bottom to open it 
4.  Click the "Clean up cached account tokens" option 

### I can log into the Launcher, but I can’t access any of the games I own. 

You’re likely logged into the wrong Microsoft account. Log into the Microsoft Store with the account that your Minecraft licenses are entitled to and try again. 

If you are sure you are logging in with the correct account, consider logging out and back into the Launcher. 

If you are on a Windows 10 or 11 device, try running Windows Update to ensure your device is up to date.

Open the Microsoft Store and install any additional updates from there as well:

1.  Load up the store through [this link](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Faka.ms%2FMSStoreHome&data=05%7C01%7Cv-mmoeller%40microsoft.com%7Cb56912bccea94a1c6f8908dba9ca84bd%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C638290459523653458%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=0DFQiS9mVJlf79unCccicQDFrgQ7620dpjjeThpKbnU%3D&reserved=0).
2.  Navigate to the 'Library' section on the bottom left corner.
3.  Select 'Get Updates' and wait for those updates to download and install.

If you have tried all of the above steps and are still not able to access games you own, please install and login to the following additional applications, which might solve your problem.: 

- Xbox Console Companion: <https://aka.ms/XboxConsoleCompanion> 
- Xbox App: <https://aka.ms/DLXboxApp> 

### I’ve logged into the Launcher and am getting the error ‘Can’t connect to Minecraft Services.’ 

Ensure that you’re properly connected to the internet and logged into the same account on both the Microsoft Store and in the Minecraft Launcher. If you’re still getting the error, there are a few steps you can try that might address this issue.  

First, install and login to the **Xbox Console Companion app**, which is available at <https://aka.ms/XboxConsoleCompanion>. 

If that doesn’t solve your problem, we recommend you next try installing and signing in to the **Xbox app**, which is available at <https://aka.ms/DLXboxApp>. Open the Xbox app, and you may see some error message content indicating you are missing some key dependencies or applications. Install whatever it indicates you are lacking. Common items that come up here as missing on systems that run into this problem include:  

- Xbox Identity Provider: https://aka.ms/XboxIdentityProvider 
- Xbox Live In-Game Experience: <https://aka.ms/XboxLiveInGame> 
- Feedback Hub: <https://aka.ms/DLFeedbackHub> 

Additionally, try re-launching the Minecraft Launcher; logging in and back out of the Launcher; or reset the Microsoft Store using the steps below: 

1.  Press the Windows key and the R key simultaneously 
2.  A window will appear. Type in ‘WSReset’ and hit enter. 

## Trouble Installing the Game from the Minecraft Launcher 

If you’re having trouble installing the game from the Minecraft Launcher, try viewing the following scenarios to identify and solve the issue. 

### My game installation is stalling or stopping part of the way through. 

You can try uninstalling and reinstalling the game or even the launcher. If that doesn’t work, you can try resetting the Microsoft Store using the following steps: 

1.  Press the Windows key and the R key simultaneously 
2.  A window will appear. Type in ‘WSReset’ and hit enter 

You can also try repairing and resetting the Launcher using the following steps: 

1.  Go to the Start Menu 
2.  Right click on the Minecraft Launcher 
3.  Select ‘More’ 
4.  Open ‘App Settings’ 
5.  Within these settings, click on ‘Repair’ and ‘Reset.’ 

### I’m installing Bedrock from the Microsoft Store and getting the error 0x80242020. 

First, be sure you’ve stopped the download from the Launcher and have cleared your download queue. You can double check this by loading up the Microsoft Store app ([https://aka.ms/MSStoreHome](https://aka.ms/MSStoreHome)) and navigating to “Library,” which will show your list of installed applications and anything actively being installed.  

Once you’re sure that’s cleared, tTry downloading the [Xbox app](https://www.xbox.com/en-US/apps/xbox-app-for-pc) (<https://aka.ms/DLXboxApp>) and installing the Minecraft LauncherBedrock through there – or directly from the Bedrock page in the Store at <https://aka.ms/Download>Bedrock, and then installing and launching Bedrock.  

### I try to install Bedrock from inside the Launcher by clicking “Install,” but the button turns into 3 dots and the game never finishes installing.  

First, be sure you’ve stopped the download from the Launcher and have cleared your download queue. You can double check this by loading up the Microsoft Store app (<https://aka.ms/MSStoreHome>) and navigating to “Library,” which will show your list of installed applications and anything actively being installed.  

Once you’re sure that’s cleared, try downloading the [Xbox app](https://www.xbox.com/en-US/apps/xbox-app-for-pc%22%20/t%20%22_self) (<https://aka.ms/DLXboxApp>) and installing Bedrock there – or directly from the Bedrock page in the Store at <https://aka.ms/Download>Bedrock.  

### My Launcher is crashing. 

You can try uninstalling and reinstalling the Launcher. If that doesn’t work, you can try resetting the Microsoft Store or repairing and resetting the Minecraft Launcher. 

Reset the Store: 

1.  Press the Windows key and the R key simultaneously 
2.  A window will appear. Type in ‘WSReset’ and hit enter 

Reset and Repair the Minecraft Launcher: 

1.  Go to the Start Menu 
2.  Right click on the Minecraft Launcher 
3.  Select ‘More’ 
4.  Open ‘App Settings’ 
5.  Within these settings, click on ‘Repair’ and ‘Reset’ 

### I DON'T WANT TO INSTALL ON MY C DRIVE, HOW DO I INSTALL ON A DIFFERENT DRIVE ON MY PC?

You will need to set up the other drive to allow Minecraft to be installed on them. Go into your PC settings - go to Settings\>System\>Storage\>Change where new content is saved. In that menu, go to the 'New apps will save to' dropdown, and select the drive you'd like to install Minecraft on.

Once you select the other drive in that setting, the option to install to the new drive (or another drive) will become available in the Minecraft Launcher.

## Trouble Launching the Game from the Minecraft Launcher 

If your Minecraft Launcher is loading up, but you’re having issues launching the game, try viewing the following scenarios to identify and solve the issue. 

### The game is properly installed, I click ‘Play,’ and the game crashes.  

First off, try uninstalling and reinstalling the Launcher, and if that doesn’t work, do the same with the game you’re trying to play.  

From there, try resetting the Microsoft Store using the following steps: 

Reset the Store: 

1.  Press the Windows key and the R key simultaneously 
2.  A window will appear. Type in ‘WSReset’ and hit enter 

If that doesn’t work, try resetting and repairing the Minecraft Launcher. 

Reset and Repair the Minecraft Launcher: 

1.  Go to the Start Menu 
2.  Right click on the Minecraft Launcher 
3.  Select ‘More’ 
4.  Open ‘App Settings’ 
5.  Within these settings, click on ‘Repair’ and ‘Reset’ 

### The game is properly installed, I click ‘Play’ and the Launcher crashes. 

Try the steps outlined in the previous section. 

### The game is properly installed, but the Launcher can’t connect to services/appears offline. 

Check to ensure that your antivirus software isn’t blocking connection. If that doesn’t work, delete the entitlements folder in the .minecraft folder and reload the launcher. 

### I want to review the Launcher, but the popup keeps spinning without resolution. 

Close the window and try again. It should work the second time. 

### The launcher won’t open and I’m getting error code 0x8007042b. 

Try running Windows Update. 

### I get sent to the Store whenever I try to launch a game from within the Launcher

If you get sent to the Store when you try to launch a game, reinstall the Gaming Services app on your Windows 10/11 device:

1.  Select the Search icon on the taskbar, type powershell, right-click on Windows PowerShell, and then select Run as administrator.
2.  In Windows PowerShell, type **get-appxpackage Microsoft.GamingServices \| remove-AppxPackage -allusers** and press Enter.
3.  In the same window, type **start ms-windows-store://pdp/?productid=9MWPM2CQNLH** and press Enter.
4.  Install the app on that page and select Yes when you receive the User Account Control (UAC) prompt.
5.  Restart your device and try to install the game again.

## I own Bedrock on my account, but when I try to run Java Edition, I am unable to create a profile and therefore unable to play the game. 

First, install and login to the **Xbox Console Companion app**, which is available at <https://aka.ms/XboxConsoleCompanion>. 

If that doesn’t solve your problem, we recommend you next try installing and signing into the **Xbox app**, which is available at <https://aka.ms/DLXboxApp>. Open the Xbox app, and you may see some error message content indicating you are missing some key dependencies or applications. Install whatever it indicates you are lacking.

Common items that come up here as missing on systems that run into this problem include:  

- Xbox Identity Provider: https://aka.ms/XboxIdentityProvider 
- Xbox Live In-Game Experience: <https://aka.ms/XboxLiveInGame> 
- Feedback Hub: <https://aka.ms/DLFeedbackHub> 

Please note that if you are accessing Bedrock through a family-sharing arrangement (i.e. the account that actually *owns* Bedrock is a parent’s account), presently you will not be able to play Java Edition. Only the account that purchased Bedrock or Java and Bedrock Edition will have access to Java Edition.  

## I'm getting a 'You must complete adult verification on the Xbox homepage' error.

This error appears when the country/region set on your Xbox Live account is different than the country/region set on your Microsoft account. To update your settings, [follow these steps](https://support.xbox.com/en-US/help/account-profile/manage-account/update-microsoft-account-country-region).

**Note:** **If you're based in South Korea, you'll need to complete the required South Korean age verification to restore access to your account.**
