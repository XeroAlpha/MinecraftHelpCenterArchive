---
title: Sign into Minecraft Education with Google account credentials
date: 2020-11-04T16:37:16Z
updated: 2024-05-22T22:29:16Z
categories: Administration and License Management
link: https://edusupport.minecraft.net/hc/en-us/articles/360051644972-Sign-into-Minecraft-Education-with-Google-account-credentials
hash:
  01H8FA8Z66EC9Z5CM70PCQ0Q2V: option-1use-minecraft-education-remember-mefeature
  01H8FA8Z66PWTWWZZ0837P38MR: summary
  01H8FA8Z66BMJ4A1YNPZC33VR3: benefits
  01H8FA8Z67G6Z1YBS3Q3CCT57N: considerations
  01H8FA8Z67ZP76NE2KFDCD6SKN: use-remember-me-feature-in-minecraft-education
  01H8FA8Z67P7G5NACB019BKARR: option-2-enabling-saml-federation-to-use-a-microsoft-365-azure-active-directory-account-to-sign-into-a-chromebook
  01H8FA8Z67XA50WBADAZN8KANK: summary-1
  01H8FA8Z67PF55SMXZHDWQGTAE: benefits-1
  01H8FA8Z67BY89KBPQ6V4RE5QE: considerations-1
  01H8FA8Z68JBAWPPD9H6YZBTDD: setupmicrosoftidp-google-sp-saml-federation
  01H8FA8Z68AM4MWAQV5JZJKYAX: option3enabling-saml-federation-to-usea-managed-google-accountto-signinto-minecraft-education
  01H8FA8Z68RMSTQFZ0G60VQTBA: summary-2
  01H8FA8Z69S7VC52APPSJMTEGZ: benefits-2
  01H8FA8Z69Z5CG6243QVX3AA8A: considerations-2
  01H8FA8Z69R1FSHW0GPQY95PK8: how-to-enable-googleidp-microsoft-sp-saml-federation
  01H8FA8Z6AM5TWZYM3XMFS3GVG: enabling-saml-federation-for-other-identity-management-configuration
---

If you are currently using managed Google Account credentials to sign into Chromebooks, there are a couple of different ways to make it easier for students and teachers to sign into Minecraft Education using their Microsoft 365 Azure Active Directory (AAD) credentials. This guide will walk you through the options for single sign-on as well as how to link, or federate, your Google and Microsoft accounts together using Security Assertion Markup Language (SAML) so that the same credentials can be used for both Google and Microsoft products. 

Note that due to the highly complex and custom nature of account configurations, the Minecraft Education team will be unable to provide help desk support for setup or troubleshooting of SAML federation. 

## Option 1: Use Minecraft Education Remember Me Feature 

### Summary 

In this option, teachers and students can enable Minecraft to remember their login information, so that Microsoft 365 credentials don’t have to be typed each time Minecraft is opened. This requires no IT Administrator work after the accounts are created in both systems but does require teachers and students to know both their Google and Microsoft credentials. 

### Benefits 

- Easiest to set up, no work required by IT Administrators once both accounts are created 

### Considerations 

- Students will need to know both Google Account credentials to sign into the Chromebooks and Microsoft 365 credentials to sign into Minecraft Education the first time they sign in or if there are problems when signing in. 
- Accounts will need to be provisioned in both Google and Microsoft systems to access all products. 
- [License Assignment](./License-Management-Options-for-Minecraft-Education.md)[ ](https://educommunity.minecraft.net/hc/en-us/articles/360047557011)will be tied to the Microsoft accounts. 

### Use Remember Me feature in Minecraft Education

The enable single sign-on within Minecraft Education 

1.  We've updated account management to make it easier to stay signed in and switch between accounts. The "Manage Accounts" button has been added to the Home screen, replacing the "Switch Accounts" button. This will enable users to choose whether to have the device remember their username and password across sessions ("Remember me"), to sign out, or to switch accounts and allow another player to sign in.

    - If "Remember me" is toggled ON (to the right), the app will try to automatically sign in the last player on subsequent sessions.
    - If the player hits the "Sign out" button, they will need to enter their username and password the next time they open the app.
    - "Switch accounts" allows you to switch to a different account without clearing passwords from the device. If the player hits the "Switch accounts" button, they will need to enter their username the next time they open the app but not their password.
    - The next time you login to your device and launch Minecraft Education, you should be logged into the game with the same login credentials

2.  Optional: Automate setup, provisioning, syncing and licensing of accounts in both systems  
    - Google: [Configure Microsoft Office 365 auto-provisioning, ](https://support.google.com/a/answer/7365072) [Automate user provisioning across cloud apps](https://cloud.google.com/identity/solutions/automate-user-provisioning) 
    - [Microsoft: Plan an automatic user provisioning deployment](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/plan-auto-user-provisioning), [Auto-assign Minecraft licenses](https://educommunity.minecraft.net/hc/en-us/articles/360047557011-Managing-licenses-for-Minecraft-Education-Edition#:~:text=To%20play%20Minecraft%3A%20Education%20Edition%20%28M%3AEE%29%2C%20each%20user,bulk%29%20through%20the%20Microsoft%20Store%20for%20Education%20.) 

## Option 2: Enabling SAML Federation to use a Microsoft 365 Azure Active Directory Account to Sign into a Chromebook 

### Summary 

In this option, an IT Administrator will need to link the Microsoft accounts to the Google accounts using SAML. This will mean that the teachers and students will use their Microsoft 365 credentials for all Microsoft products and their Google Workspace for Education products. This setup does require significant work by the IT Administrator to setup and manage and there are some things to consider (listed below). However, once fully set up, especially if configured with auto-provisioning and auto-license assignment, there is limited ongoing effort required to keep the two accounts in sync. 

### Benefits 

- Teachers and students will only need to remember one account, their Microsoft 365 account, to access most products and services that support SAML, including both Chromebook sign in and Minecraft sign in.  
- Existing Microsoft 365 Active Directory accounts can be used to access Google products and services without adding a second account that teachers and students need to use. 

### Considerations 

- Some Google services and products do not support sign in using SAML federated accounts. See the FAQ section in [Googles’ SAML SSO for Chrome devices](https://support.google.com/chrome/a/answer/6060880) article and the [SSO Troubleshooting FAQ](https://support.google.com/a/answer/2463723?hl=en) for more details. 
- SAML is optimized for Google Workspace for Education web applications. See the [SAML SSO FAQ](https://support.google.com/a/answer/6262818?hl=en) for more information about web applications, including possible errors. 
- Microsoft also has an FAQ, which includes Known Issues with SAML federation, in the [Azure Active Directory SSO guide ](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/google-apps-tutorial#frequently-asked-questions)
- Accounts will need to be provisioned in both Google and Microsoft systems and linked together to access all products. Setup, configuration, syncing and testing of these accounts and linking will require significant work by IT Administrators. 
- [Minecraft Education license assignment](./Manage-Licenses-in-the-Admin-Center.md) will be tied to the Microsoft accounts. 
- Due to the highly complex and custom nature of account configurations, the Minecraft Education team will be unable to provide help desk support for setup or troubleshooting of SAML federation. 

### Setup Microsoft IdP + Google SP SAML Federation 

1.  Configure Microsoft as the SAML IdP by following Microsoft’s guide: [Azure Active Directory single sign-on (SSO) integration with Google Cloud Connector](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/google-apps-tutorial) 
2.  Reference Google’s guides as needed to configure Google as the SP:  
    - [Set up single sign-on for managed Google Accounts using third-party Identity providers](https://support.google.com/a/answer/60224?hl=en) 
    - [Configure SAML single sign-on for Chrome devices](https://support.google.com/chrome/a/answer/6060880) 
3.  Optional: Automate setup, provisioning, syncing and licensing of accounts in both systems  
    - Microsoft: [Plan an automatic user provisioning deployment](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/plan-auto-user-provisioning), [Auto-assign Minecraft licenses](https://educommunity.minecraft.net/hc/en-us/articles/360047557011-Managing-licenses-for-Minecraft-Education-Edition#:~:text=To%20play%20Minecraft%3A%20Education%20Edition%20%28M%3AEE%29%2C%20each%20user,bulk%29%20through%20the%20Microsoft%20Store%20for%20Education%20.) 
    - Google: [Automate user provisioning across cloud apps](https://cloud.google.com/identity/solutions/automate-user-provisioning) 

## Option 3: Enabling SAML Federation to use a managed Google Account to Sign into Minecraft Education 

### Summary 

In this option, an IT Administrator will need to link the Google accounts to the Microsoft accounts using SAML. This will mean that the teachers and students will use their Google credentials for all Google products and most Microsoft products. This setup does require significant work by the IT Administrator to setup and manage and there are some limitations to the functionality of some Microsoft products after the accounts are linked. However, once fully set up, especially if configured with auto-provisioning and auto-license assignment, there is limited ongoing effort required to keep the two accounts in sync. 

### Benefits 

- Teachers and students will only need to remember one account, their Google account, to access most products and services that support SAML, including both Chromebook sign in and Minecraft sign in.  

<!-- -->

- Existing Google accounts can be used to access Microsoft products and services without adding a second account that teachers and students need to use. 

### Considerations 

- Some Microsoft services and products do not fully support SAML federated Google accounts, you may encounter the following problems with these accounts: 
  - Not possible to signing into Windows devices  
  - Can’t use Intune to manage the accounts 
  - Teams may lose authentication (signing in again should resolve this) 
  - Emails may not be received for @mentions or share notifications within Office documents 
  - In Outlook, email address may not match the Google email address and unexpected email behavior may occur due to Exchange settings  
  - Teams calendars may not match the Google calendar and invites and scheduling may not work as expected 
  - Many of the more complex account management and Active Directory features (such as Active Directory federation, password sync, access to AD-connected resources like printers and file shares) may not work with SAML federated accounts 
- There are limits to the type and flexibility of the domain configurations when enabling SAML, such as: 
  - Can’t enable for only parts of the domain (must be enabled for the whole domain) 
  - Can’t link multiple AAD tenants to the same Google organization 
  - Can’t link multiple domains to the same Google organization 
- Accounts will need to be provisioned in both Google and Microsoft systems and linked together to access all products. Setup, configuration, syncing and testing of these accounts and linking will require significant work by IT Administrators. 
- [Minecraft Education license assignment](./Manage-Licenses-in-the-Admin-Center.md) will be tied to the Microsoft accounts. 
- Due to the highly complex and custom nature of account configurations, the Minecraft Education team is unable to provide help desk support for setup or troubleshooting of SAML federation. 

### How to Enable Google IdP + Microsoft SP SAML Federation 

1.  Configure Google as the SAML IdP by following Google’s guide: [Set up SSO via SAML for Microsoft Office 365](https://support.google.com/a/answer/6363817?hl=en) 
2.  Configure Microsoft as the SAML SP using PowerShell by following Microsoft’s guide: [Set up a SAML 2.0 provider with AD FS \| Microsoft Learn](https://learn.microsoft.com/en-us/power-pages/security/authentication/saml2-settings)
3.  Optional: Automate setup, provisioning, syncing and licensing of accounts in both systems 
    - Google: [Configure Microsoft Office 365 auto-provisioning, ](https://support.google.com/a/answer/7365072) [Automate user provisioning across cloud apps](https://cloud.google.com/identity/solutions/automate-user-provisioning) 
    - Microsoft: [Plan an automatic user provisioning deployment](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/plan-auto-user-provisioning), [Auto-assign Minecraft licenses](https://educommunity.minecraft.net/hc/en-us/articles/360047557011-Managing-licenses-for-Minecraft-Education-Edition#:~:text=To%20play%20Minecraft%3A%20Education%20Edition%20%28M%3AEE%29%2C%20each%20user,bulk%29%20through%20the%20Microsoft%20Store%20for%20Education%20.) 

-  

## Enabling SAML Federation for Other Identity Management Configuration 

If you are using a different system to manage identities, such as on-premise Active Directory, Active Directory Federation Services or any other non-Google or non-Microsoft Identity Management system, it may be more difficult to federate it to either a managed Google Account or Microsoft 365 Azure Active Directory system. Please consult your identity provider’s documentation for SAML federation to determine what may be possible.
