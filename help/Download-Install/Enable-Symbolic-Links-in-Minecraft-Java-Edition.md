---
title: "Enable Symbolic Links in Minecraft: Java Edition"
date: 2023-05-26T17:44:29Z
updated: 2026-03-10T18:38:32Z
categories: Download & Install
tags:
  - section_27166490706957
link: https://help.minecraft.net/hc/en-us/articles/16165590199181-Enable-Symbolic-Links-in-Minecraft-Java-Edition
hash:
  h_01KKAG4XT82BEEJCSZG27JTJCC: how-to-create-symbolic-links
  h_01KKAG4XTBAY87FZN0BADZ27TR: security-and-symbolic-links
  h_01KKAG4XTCG64KC9TFD39GDPJC: troubleshooting-symbolic-links
---

A symbolic link (or “symlink”) is a special file-system entry that points to another file or folder, letting a path in one location refer to content in a different location. Symbolic links can be useful for keeping Minecraft data (such as worlds, resource packs, or datapacks) in a different location than the default directories Minecraft uses.

Symbolic links are supported on the operating systems Minecraft: Java Edition runs on, but Minecraft may restrict following links unless you explicitly allow them by creating an exceptions file that Minecraft can reference.

## How to create symbolic links

Creating symbolic links is done outside of Minecraft and may require using a command-line tool or file manager features, depending on your operating system. Consult your OS documentation for details.

1.  Create or edit a text file named **allowed_symlinks.txt** in the Minecraft game directory. For the client, this is typically your **.minecraft** folder. For a dedicated server, it is the server’s working directory.
2.  Add allow-list entries that match the target paths your symbolic links point to, using the pattern type of your choice (prefix is used by default). Use the path separator for your operating system.

Here are some guidelines:

- Enter each target on its own line.
- Choose a pattern type: **glob**, **prefix**, or **regex**.
  - Glob matches paths ending with wildcard patterns (for example, \*.txt).
  - Prefix matches paths that start with the pattern (for example, /test, /test/, or /test/file.txt).
  - Regex matches the full path using a regular expression (for example, a path that ends with \\txt).
- Ignore comments by starting the line with a \#.

## Security and symbolic links

If you open a Minecraft world and receive an error stating it contains symbolic links that you did not create, do not open it—especially if it came from a downloaded archive (such as a .zip). Minecraft validates symbolic links inside world directories for safety; a malicious world could point outside the world folder and cause Minecraft to write or overwrite files elsewhere, leading to data loss.

## Troubleshooting symbolic links

- If you receive an error after creating a symbolic link, check the log file for the rejected targets (for example, .minecraft\logs\latest.log on the client) and adjust your allow-list entries using the guidelines above.
- Relative paths may not work as expected. Use absolute paths when possible.
- You may need to delete the existing folder in the location you want to create the symbolic link. Back up any data you want to keep.
