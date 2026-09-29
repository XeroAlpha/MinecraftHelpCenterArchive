---
title: Mojang Bug Tracker Guidelines
date: 2021-09-09T22:04:45Z
updated: 2026-09-29T15:29:55Z
categories: Contact Minecraft
tags:
  - section_27983516571789
  - section_44439965363981
link: https://help.minecraft.net/hc/en-us/articles/4408887473421-Mojang-Bug-Tracker-Guidelines
hash:
  h_01JJMF875PPE1EXFV74YQBHKKR: what-to-report-on-the-bug-tracker
  h_01JJMFCPP51M121THWKJ8JP4BE: searching-for-bugs
  h_01JJMFDKJD1NHCPNRM217AWY0N: reporting-a-bug
  h_01M3MEE6N1QQMA26WQCF7XBN2E: example-of-a-high-quality-bug-report
  h_01M3MHFBJHFJEH4Y05MSMR9BF0: summary
  h_01M3MHH24026DK8A85HQVSP4XP: description
  h_01M3MHHBVJ8JXY02T3WP7V5110: steps-to-reproduce
  h_01M3MHHVRW5G5FGD38BVN456GY: observed-result
  h_01M3MHJ6ZDY6B11H5DAHK2B3KS: expected-result
  h_01M3MHJGD1PTVXJJY0TSHSWV5D: additional-notes
  h_01M3MHJQNEV72MHFFW3B4VJ3W9: attachments
  h_01M3MH7DCWFG1HNSKE1WNQ3RD1: final-tip
  h_01M3MEKSS985R7BYSG3T1FV83R: thank-you
---

*Mojira has changed to a new cloud-based server since January 31, 2025. If you regularly help us by submitting bugs, make sure your bug tracker account has migrated correctly. See* [*Changes to our bug reporting system*](https://www.minecraft.net/en-us/article/changes-to-minecraft-bug-reporting-system) *for more. *

The [Mojang Bug Tracker](https://bugs.mojang.com/secure/Dashboard.jspa) (also known by its nickname Mojira) is the place where all bugs in Minecraft: Bedrock Edition and other games created by Mojang Studios are reported, documented, and tracked. Working together, we can squash these bugs as quickly as possible!

## What to Report on the Bug Tracker

We only accept reports about bugs. A bug is something in the game not behaving the way it should, due to a problem with the game's code. As such, it should be reproducible and not be caused by circumstances outside of the game such as network connections or customer support issues. Keeping the bug tracker focused on true bugs helps to get them addressed faster by Mojang Studios.

The following types of issues are **NOT** bugs and are not allowed on the bug tracker:

- **Minecraft account or payment issues**
  - If you have trouble accessing your Minecraft account, or if you have payment or purchase issues (including Realms and Marketplace), contact [Microsoft Support](https://support.microsoft.com/en-us/contactus).
- **Suggestions and feature requests**
  - To suggest a new feature for Minecraft, or to post a suggestion, do so on the official [Minecraft feedback site](https://feedback.minecraft.net/).
- **General connection issues (Realms, Marketplace) and authentication issues**
  - These issues are typically outside the control of the game’s code and are usually due to server maintenance, downtime, or local network configuration. For troubleshooting tips, see [Troubleshoot Minecraft Network Connection Errors](../Error-Code-Troubleshooting/Troubleshoot-Minecraft-Network-Connection-Errors.md).

## Searching for bugs

Before reporting a bug, always search for an existing report. There’s a chance that someone has already started the conversation on the bug. Here are a few tips on searching for existing bug reports:

- Use as few keywords as possible. The search engine will only find bug reports containing all the words in your query. For example, searching for “squid suffocate” instead of “Squid will frequently suffocate for no reason when swimming around in a river”. Adding unnecessary words may confuse the search engine, which will try to find tickets containing all typed words, instead of showing all “squid suffocate” related ones. 
- Verify all words are spelled correctly.
- Try multiple separate searches using synonyms. For example, “workstation”, “job site”, and “profession block”. Sometimes Players use different names for the same item, like “Crafting Table” and “Workbench”. 

If you find that your issue has already been reported, look at the Resolution of the report to determine what steps to take next.

**Remember:**

- **Reporting duplicated tickets slows down the Development Team and hinders issue resolution time. **
- **Voting for already existing ticket bumps up the priority and speeds up the action. **

## Reporting a bug

Here are some things to keep in mind before you report a new bug.

- **Be Concise**: Write a summary that clearly states the problem. Include as much important information as possible including:
  - Steps taken to reproduce the issue.
  - What happens when the bug occurs.
  - Clear screenshots or short video of the bug.
  - The exact text of any error messages.
- **Consider Security and Confidentiality:** If you have discovered an exploitive or security issue, set the bug report’s security level to *Private* so that only you, Mojang Studios employees, and bug tracker moderators are able to view your bug report.
- **English Only:** We only accept bug reports in English; do not create bug reports in other languages.
- **One Issue Per Report:** We will not accept your bug report if you include multiple bugs in a single submission.
- **Test Unmodified Environments:** If you are using any mods or third-party tools at all, see if the issue persists in a completely unmodified Minecraft environment before reporting it. If it doesn't, report the bug to the mod creator, not Mojang Studios.
- **Third-Party Tools Not Supported:** Worlds that have been opened with a third-party tool are not supported.
- **Third-Party Servers:** If you have an issue on a large multiplayer server (like Hypixel or The Hive), contact the server staff first before creating a bug report.
- **Latest Release Only:** Only report a bug if you are sure that it is still active in the latest version of the game. We do not accept bug reports for any versions except for the latest release and the latest development version.
- **Watch Correspondence:** After creating a bug report, watch for related emails or regularly check the bug report for updates or potential further inquiries.

## Example of a High-Quality Bug Report

**The following template and recommendations are completely optional.** You can submit a bug report in any format that follows our guidelines.

That said, reports that include clear summaries, detailed descriptions, precise reproduction steps, and expected versus observed results are often much easier to investigate. This is the same type of information that QA Analysts, testers, and developers use when tracking down issues internally.

If you'd like to help us reproduce, understand, and resolve bugs more quickly, consider using the example below as a reference when creating your report.

### Summary

The summary should be short, specific, and clearly describe the issue. A good summary helps other users and moderators quickly understand what the report is about without opening it. 

**Example:** Iron Golems stop attacking hostile mobs after being pushed by flowing water

### Description

The description should explain the problem in more detail and provide any relevant context. Avoid including unrelated information or lengthy stories that do not help explaining the bug. 

**Example:** After an Iron Golem is moved several blocks by flowing water, it may stop targeting and attacking hostile mobs. The issue persists even when zombies or skeletons are nearby. The golem continues to move normally but no longer appears to detect enemies until the world is reloaded.

### Steps to Reproduce

Steps should be clear, simple, and easy for another person to follow. Each step should represent one action. Good reproduction steps allow developers and other players to reproduce the issue exactly as it occurred.

**Example:**

1.  Create or load a Survival world.
2.  Place an Iron Golem near a water stream.
3.  Allow flowing water to push the Iron Golem at least three blocks.
4.  Spawn a Zombie near the Iron Golem.
5.  Observe the Iron Golem's behavior.

### Observed Result

Describe what actually happened and focus only on the outcome of the bug. The observed result should be factual and easy to verify.

**Example:** The Iron Golem does not target or attack nearby hostile mobs.

### Expected Result

Describe what should have happened if the bug was not present. Comparing the observed and expected results makes it easier to understand the nature of the issue. 

**Example:** The Iron Golem should detect and attack nearby hostile mobs regardless of being moved by flowing water.

### Additional Notes

Use this section for information that may help investigate the bug but does not belong elsewhere. Only include information that is relevant to the issue being reported. 

**Example:**

- Reproduced 5 out of 5 attempts.
- Issue observed in a new world with default settings.
- No resource packs, add-ons, or experimental features are enabled.
- Reloading the world restores normal behavior.

### Attachments

- Video showing the process of the Iron Golem being moved by water, spawning a hostile mob, and the Golem being unresponsive.
- Screenshot of Iron Golem being passive next to hostile mobs. *(Although for complex issues such as this one, a video would be more fitting.)*

### Final Tip

Before submitting a report, read it from the perspective of someone who has never encountered the issue before. If another Player can understand the problem and reproduce it using only the information in your report, you've likely written a high-quality bug report.

**Remember, this format is not required.** A bug report does not need to be perfect to be valuable. However, reports that clearly explain the issue, provide reproducible steps, and include relevant supporting information can significantly reduce investigation time and help developers focus on finding a solution.

Even experienced QA Analysts and testers rely on structured, factual, and reproducible reports. Following these recommendations helps everyone speak the same language when investigating bugs.

## Thank You

Thank you for taking the time to report bugs and help improve the game for everyone!

Every report, whether large or small, helps us better understand issues affecting the community. By providing clear and accurate information, you make it easier for moderators, QA teams, and developers to investigate problems and prioritize fixes.

We greatly appreciate your time, effort, and willingness to contribute. Your proactive involvement helps make Minecraft a better experience for Players around the world!
