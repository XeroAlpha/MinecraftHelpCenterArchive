---
title: Understanding Realms Pro Server Performance
date: 2026-11-02T15:54:07Z
updated: 2026-11-09T18:00:41Z
categories: Realms Pro
tags:
  - subject_creating_a_realm
  - category_realms_support
  - subject_other_realms_questions
  - section_50256982870285
link: https://help.minecraft.net/hc/en-us/articles/50080758499597-Understanding-Realms-Pro-Server-Performance
hash:
  h_01M6EFB05FV0E28GNE9C38TWE8: live-metrics
  h_01M6EFB05GP7Z7QRNF944HCPJZ: cpu-usage-memory-usage-and-tick-time
  h_01M6EFB05MS7EHGY6HDRFE7Y7W: player-count
  h_01M6EFB05N01SE8DTWQ3TAMEM0: historical-metrics
---

Realms Pro introduces a new feature where owners and Administrators can monitor their Realms server performance. See [How to View Your Minecraft Realms Server Performance](./How-to-View-Your-Minecraft-Realms-Server-Performance.md) to learn where to find these metrics. The content below explains how to interpret the data.

# Live Metrics

## CPU Usage, Memory Usage, and Tick Time

Measurements for CPU usage, memory usage, and tick time are each divided into three categories: low, medium, and high. These correlate to the amount of load on the server. In general:

- **Low** indicates that the load is small enough for the server to handle easily. Your game should run smoothly.
- **Medium** indicates that the load on the server has increased to the point where the server is struggling to keep up. You may see reduced game performance.
- **High** indicates that the server is overloaded. Game performance will be significantly impaired. To reduce the load on the server, see [Troubleshooting Realms Pro Server Performance](./Troubleshooting-Realms-Pro-Server-Performance.md)

**Note:** The above is a general guideline. It is possible for one metric to be **High** while others are **Medium** or **Low**.

- CPU usage and Memory usage are percentages that max out at 100%. 
- Tick time is measured in milliseconds and while the gauge itself maxes out at 150ms, the actual measurement does not have an upper limit.

## Player Count

The player count metric is not divided into categories. Player count could affect server performance, but it doesn't directly indicate whether the server is overloaded. 

The maximum player count shown in the metric is the number that has been set as the Realm's 'Player Limit.' See [Manage Settings for Your Minecraft: Bedrock Edition Realm](../Manage-Realms-Settings/Manage-Settings-for-Your-Minecraft-Bedrock-Edition-Realm.md) for more information.

**Note:** Split-screen users without their own Xbox accounts are not included in the measured player count.

# Historical Metrics

Historical data points are calculated using all data from the set time period rather than a snapshot of what it was at that particular moment. These metrics do not represent the exact values at each data point’s timestamp.

For example: if you are looking at historical data from the last 24 hours, the data points are shown in one-hour increments. 

- If there is a data point with the timestamp of 2:00pm, the values for that data point represent the average CPU usage, memory usage, and tick time between 2:00pm and 2:59pm, and the highest player count in that time period. 
- The next data point will show the timestamp of 3:00pm, and the values given will represent the average values of the metrics from 3:00pm to 3:59pm, etc.
