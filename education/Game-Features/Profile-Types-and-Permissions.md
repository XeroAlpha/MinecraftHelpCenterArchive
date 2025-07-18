---
title: Profile Types and Permissions
date: 2020-08-10T09:07:30Z
updated: 2025-06-27T18:51:11Z
categories: Game Features
link: https://edusupport.minecraft.net/hc/en-us/articles/360047117072-Profile-Types-and-Permissions
hash:
  h_01JX0WP7PVM72DWV4YRQCZXXTG: ""
  h_01JW9MSCE9XACPZ1YZT7CBB88T: multiplayer-safety-features-and-who-can-join-a-world
  h_01JW9MSCE9TR0MV5HKKEVVA8TQ: a-link-to-a-video-on-minecraft-education-safety-features
  h_01HZ306QNAYYTGPJ2J1GJ320YG: teacher-vs-student-permissions
  h_01HZ306TZBZ47XCX8K9FQWVT05: operator
  Worldbuilder: worldbuilder
  h_01HZ3071MREH67S0F5HG0GXAYD: advanced-tips
  h_01HZ308CW7GJCBMC5JDFYFKY3T: how-to-change-in-game-display-name
---

This article explains the two different types of “profiles” that can be granted to players. These profiles have access to more commands and permissions than a player who logs into your world so should be used with care. this article will cover:

- [Multiplayer Safety Features, and who can join a world](https://edusupport.minecraft.net/hc/en-us/articles/h_01JW9MSCE9XACPZ1YZT7CBB88T)
- [Teacher vs student permissions](#teacher-vs-student-permissions)
- [Operator](#h_01HZ306TZBZ47XCX8K9FQWVT0)
- [Worldbuilder](#worldbuilder)
- [Advanced Tips](#advanced-tips)
- [How to change your in-game display name](#how-to-change-in-game-display-name)

##  

## **Multiplayer Safety Features, and who can join a world**

## [**![A link to a video on Minecraft Education Safety Features](https://edusupport.minecraft.net/hc/article_attachments/37888234934164)**](https://www.youtube.com/watch?v=XGyx-5vKBvI)

Minecraft Education has several multiplayer safety features that prevent outside actors from joining your students' worlds. The video above has great info around this, but here are the highlights:

For someone to join a hosted world, they must:

- Be in the same Microsoft 365 organizational account (aka Microsoft Entra ID tenant)
  - For schools, this typically means they have a school email ending in the same @domain (e.g. @school123.edu). However, for some accounts it may be the school district.
- Have the currently active join code, which only the host of the session can see and provide
- Know when the session is online

With that, only users within your school environment will be able to join other users from that school environment. To ensure your sessions are kept only the intended group within your school, make sure to only post your join code in private areas (e.g. not in a Teams channel you share with multiple classes or class times). If you're unsure if a join code got out, resetting it or restarting the world will invalidate the old code. 

 

## **Teacher vs student permissions**

Some permissions to the app are determined by which type of license a user is assigned. Minecraft Educations has two types of profiles: teacher/faculty and student.   
  
The type of profile a user falls into is based on the Microsoft 365 licenses they are assigned. All users will default to the student-based permissions. To make a user a teacher, they'll need a "faculty" license assigned to them. This could be a Microsoft 365 A3 for Faculty license or a Minecraft Education for Faculty standalone license. There are a couple other licenses that are typically only assigned to faculty that may also elevate a user to faculty, based on Microsoft 365's standards. Faculty can be determined by the presence of any faculty license on the account, not just ones that grant access to Minecraft Education. 

  
Commercial standalone licenses will default to the student profile because commercial accounts do not have faculty licenses.   
  
**Note**: Volume Licensing users will want to ensure they get both Minecraft Education for student, and Minecraft Education for faculty licenses.

 

Accounts with faculty licenses have additional permissions such as:

- They can log in to and use [the Lesson Crafter](https://aka.ms/lessoncrafter)
- Have OP permissions by default even in other users' worlds (see "Operator" section below)
- Have Worldbuilder ability by default even in other users' worlds (see Worldbuilder section below)
- Able to see the "Lesson Plan", "Resources", and "Assign or Share" button in the lesson library
  - You can learn how to assign and share lessons here: [Assign or Share Worlds and Lessons](../Teaching-With-Minecraft/Assign-or-Share-Worlds-and-Lessons.md) 

These permissions do not affect a user's ability to host or join multiplayer sessions, download worlds from the lesson library, or other core features of the app. 

## **Operator**

When a player starts or hosts a game, they begin as an Operator. If the world was created with cheats on (which is the default setting), an Operator can run [“commands”](../Teaching-With-Minecraft/Essential-Commands.md) in the world.

![mceclip0\_\_1\_.png](https://edusupport.minecraft.net/hc/article_attachments/4402660948628)

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
