---
title: "How to Setup a Minecraft: Java Edition Server"
date: 2021-03-24T19:23:34Z
updated: 2025-09-04T21:11:27Z
categories: Multiplayer Support
tags:
  - section_27983418545293
link: https://help.minecraft.net/hc/en-us/articles/360058525452-How-to-Setup-a-Minecraft-Java-Edition-Server
---

***Note****: This guide shows you how to set up and configure a Minecraft Server. However, doing this requires changing your home network's configuration and is not recommended unless you know what you are doing. If you wish to purchase a small private server for friends, check out* [Minecraft Realms](https://www.minecraft.net/en-us/realms)*. If you still wish to set up your own private server, do so at your own risk as we cannot offer support for home networks or privately made servers.* 

Here is a guide to help you create a server so your friends can join and play together!  

As a prerequisite, you should make sure you have [Java](https://www.oracle.com/java/) installed and up to date on the computer that will host the server so it can run .jar files. 

1.  Visit [Download the Minecraft: Java Edition server](https://www.minecraft.net/en-us/download/server/) and download the minecraft_server.1.XX.X.jar file (The X’s will be the current version number) 
2.  After you have downloaded it, make a folder on your desktop to keep all your server files in. You can name it “Minecraft Server”. 
3.  Drag over or copy and paste the .jar file into the Minecraft Server folder. 
4.  While you have the file browser open, open command prompt from the start menu.  
5.  You can check if Java is installed in command prompt by typing without quotes “java -version”. 
6.  To start the server, you will need to change the directory to the location where you have the Minecraft Server folder and the .jar file located in it. 
7.  You can find the directory in Windows by simply clicking on the browser directory in file browser here. ![blobid0.png](https://minecrafthelp.zendesk.com/hc/article_attachments/360090550171)(The theme and color of your file browser will appear different due to your personalization settings) \
    Copy this address to your clipboard. 
8.  Type without quotes “cd” hit space and then paste the address you just copied, then hit enter. 
    - This should look like “***cd C:\Users\Admin\Desktop\Minecraft Server***” 
9.  Type the following into your command prompt manually without quotation marks after inputting the directory. 
    - ***Java -jar “name of your jar”.jar*** 
10. Hit enter and after running the command, you will notice a failed to load properties error along with failed to load eula.txt. Do not worry as you will just need to rerun this command once we have configured these files. 
11. Back in the Minecraft Server folder open the “eula.txt’ file that has been created with your text editor. **Here you will need to set the eula=false to eula=true and save.** 
12. You will also see a “server.properties” file if it does not appear like an editable text file, right-click it and click “Open with” click “More apps” if you are on Windows 10 and scroll down and select your text editor or notepad. (It is suggested to keep the box that says to “Always use this app to open .properties files” if you would like to avoid repeating this step every time you want to edit the properties file and other .properties files). 
13. Here you will be met with many settings so we will be focusing on the core ones to get your server running. Take note of the  **query.port **setting as this is the port you will need to forward on your local router to allow other inbound connections.  
14. The **gamemode **setting will allow you set if you would like to play survival or creative. Specify what you would like by typing after the “=”. 
15. **Spawn-protection **specifies the radius of blocks in the server spawn that cannot be broken. You can change this to 0 if you would like them to be broken. 
16. The **allow-nether **specifies if you would like the Nether on your server. 
17. **Difficulty **can set the difficulty of the server. This can be either **peaceful, easy, normal, **or **hard.** 
18. The **pvp **setting specifies if you would like players the ability to hurt each other. 
19. The **max-players** specifies the maximum amount of people who can join your server. You may want to adjust this to how much RAM you have dedicated to your server. 
20. The **level-seed** allows you insert a seed for a world to generate from if you have one. 
21. **Motd** sets the message in the Minecraft server browser that other players will see once they have added your IP to their list. 

Now you just have to rerun the launch command in the command prompt and the server should be running! Repeat steps 8-9 to launch the server again. 

Making sure you are in the Minecraft Server file directory and enter ***java -jar “your jar name”.jar*** into command prompts 

For more details on all the settings for the server.properties file, visit the [Server Properties page on the Minecraft Wiki](https://minecraft.wiki/w/Server.properties). Make sure to scroll down to the “Java Edition”. 

**You will also need to ****forward the port** listed in server.properties **query.port.** The** **default it is 25565 so in your router settings you will need to specify that port to forward. This process will vary from different router manufacturers. If you need assistance in forwarding a port, please refer to your router’s help site/manual. 

By default, if you did not specify anything in the **server-ip **setting, the server will point to your public IP, this is what other players will need to connect to your server and play with you. 

You can find your public IP by simply typing in your search browser: “What is my public IP?” make sure you look for an IP address that is IPv4, this means it only has three decimals and only contains numbers. 

**Once you have your public IP, we STRONGLY urge you to not give it out publicly and advertise with it as giving your public IP out publicly is a security risk to your home network. Only give out your IP to people you would like to play with and trust.** 

When a player wants to connect to your server, they will enter your public IP address followed by :25565 into the IP field of the server menu. The full address should look something like this: 12.34.56.78:25565 

If you are the host, you can either connect to it by typing the public IP or by simply typing ‘localhost’ if your server is running on the computer you play Minecraft with.
