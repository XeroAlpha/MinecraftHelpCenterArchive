---
title: Profile Types and Permissions
date: 2020-08-10T09:07:30Z
updated: 2024-05-29T20:44:08Z
categories: Game Features
link: https://educommunity.minecraft.net/hc/en-us/articles/360047117072-Profile-Types-and-Permissions
hash:
  h_01HZ306QNAYYTGPJ2J1GJ320YG: teacher-vs-student-permissions
  h_01HZ306TZBZ47XCX8K9FQWVT05: operator
  Worldbuilder: worldbuilder
  h_01HZ3071MREH67S0F5HG0GXAYD: advanced-tips
  h_01HZ308CW7GJCBMC5JDFYFKY3T: how-to-change-in-game-display-name
---

This article explains the two different types of “profiles” that can be granted to players. These profiles have access to more commands and permissions than a player who logs into your world so should be used with care. this article will cover:

- [Teacher vs student permissions](#teacher-vs-student-permissions)
- [Operator](#h_01HZ306TZBZ47XCX8K9FQWVT0)
- [Worldbuilder](#worldbuilder)
- [Advanced Tips](#advanced-tips)
- [How to change your in-game display name](#how-to-change-in-game-display-name)

## **Teacher vs student permissions**

Users with Office 365 Education "faculty" software will have teacher permissions, and those with "student software" (assigned/edited in the Office 365 admin portal) will have student permissions. In-game teachers will have access to the "educator resources" option on the home page and students will not. Teachers will also enter all worlds with OP status regardless of whether or not they are the host.  
  

## **Operator**

When a player starts or hosts a game, they begin as an Operator. If the world was created with cheats on (which is the default setting), an Operator can run [“commands”](../Teaching-With-Minecraft/Essential-Commands.md) in the world.

![mceclip0\_\_1\_.png](https://educommunity.minecraft.net/hc/article_attachments/4402660948628)

Subsequent players who join the game do not start with this privilege. To give another player operator privileges in a multiplayer game, the host can use the command “/op”. You can also use this command in combination with targeting to give this status to more than one player at a time, for example using @a for all.

Type: /op @a

Operators can also take away operator status from other players. This is accomplished by using the command “/deop”:  
To ‘DE-OP’ a player, type: /deop (name)

Caution! Any player granted Operator status will have all the privileges and abilities of the host, so you may want to proceed with caution before you bestow Operator status on a player. **If the host of a world loses operator status, they must be given the privilege back by another user, or exit the world briefly, and re-enter (no rebooting needed). This can cause all players to disconnect from the host world while this mistake is corrected.**

The options available to you will display on screen as you type.

Operator only commands you should be aware of:

- immutableworld
- worldbuilder  
    

## **Worldbuilder**

To place or use certain Minecraft Education blocks or items, a player must possess a special ability called ‘World Builder’. Educators start with this ability, students do not. The host (as an Operator with cheats enabled) can assign the ‘World Builder’ ability to themselves or others by using the command “/ability worldbuilder”.

To make all players World Builder, type: /*ability @a worldbuilder true*

You can also use: /worldbuilder, or /wb

Revoking the World Builder ability is done in nearly the same way as giving the ability, by changing the TRUE to FALSE. As with most permission commands, you can set the target to match your needs.

To revoke World Builder from all players, type: */ability @a worldbuilder false*

Sometimes a World Builder might want to quickly transition between World Builder **on** and World Builder **off** to see how non-World Builders will experience their lesson. An example might be checking border block placement or verifying an NPC link.

Because typing a long command over and over can be a tedious process, the World Builder can quickly toggle this ability ON or OFF by simply typing: “/wb”.

 

## **Advanced Tips**

*Targeting*

When you are granting worldbuilder or operator permissions, it is possible to “target” one or more players satisfying certain conditions instead of specifying players by name.

@a: All players

@e: All entities

@p: Nearest player

@r: Random player(s) (a list will appear below of players currently in the world)  
  

## **How to change in-game display name**

Currently, only IT Admins can change users' in-game usernames that are displayed in Minecraft Education. If your displayed name isn't what you'd like it to be, you should reach out to your school's IT Admin to have them change it in [Microsoft Admin Center](https://admin.microsoft.com/).

- Depending on the policy that your IT Admin has set, some faculty may have permissions to change their display name at <https://myaccount.microsoft.com/>

For IT Admins, Minecraft Education creates it's display name from the Microsoft Admin Center display name. Here is specifically how to change it:

1.  Go to [Microsoft Admin Center](https://admin.microsoft.com/) 
2.  On the left navigation, select **Users \> Active users**
3.  Click on a user's display name to bring up their profile
4.  Under Contact Information select **Manage contact information**
5.  Edit the name under **Display Name**
    - Note that the Minecraft Education name will be created from the first word plus the first letter of the second word from this field. 
      - Example: A display name in Microsoft Admin Center that is set to "Example Test Name" will show as "ExampleT" in Minecraft Education. 
6.  At the bottom of the page, select Save changes

 

**Additional Resources**

- Learn some [essential commands](../Teaching-With-Minecraft/Essential-Commands.md)
- Use your worldbuilder status and [communicate with boards](./Communicating-With-Boards.md)
- Add [non-player characters](./Adding-Non-Player-Characters-NPCs.md) and bring life to your world
