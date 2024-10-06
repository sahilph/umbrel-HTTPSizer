<p align="center">
  <a href="https://umbrel.com">
    <img src="https://github.com/user-attachments/assets/d0906e77-fdab-42a0-9e2b-f339be9d48c0" alt="Logo">

  </a>
  <h1 align="center">Umbrel HTTPSizer</h1>
  <p align="center">
    Secure your umbrel in you local network using a self-signed HTTPS Certificate
    <br />
    <a href="https://umbrel.com"><strong>umbrel.com »</strong></a>
    <br />
    <br />
    <a href="https://twitter.com/umbrel">
      <img src="https://img.shields.io/twitter/follow/umbrel?style=social" />
    </a>
    <a href="https://t.me/getumbrel">
      <img src="https://img.shields.io/badge/community-chat-%235351FB">
    </a>
    <a href="https://reddit.com/r/getumbrel">
      <img src="https://img.shields.io/reddit/subreddit-subscribers/getumbrel?style=social">
    </a>
    <a href="https://community.getumbrel.com">
      <img src="https://img.shields.io/badge/community-forum-%235351FB">
    </a>
  </p>
</p>

## Getting started

This app can be installed in one click  from my [Community App store](https://github.com/sahilph/sahil-umbrel-apps)

After Installation, a "First Run" page will be displayed with instructions on what to do next. It also has instructions on how to trust the generated root CA cerificate so that you will not get errors on your browser. More info available [in the wiki](https://github.com/sahilph/umbrel-HTTPSizer/wiki)

⚠️ Note: This app is in beta phase. It modifies Umbrel's core files. Please use with caution. Going back to the non-HTTP version is not yet possible via GUI.  ⚠️

⚠️ Note 2: Do not use this app to expose your Umbrel device to the Internet. This is only for securing Umbrel in your local network. ⚠️

## How it works?

1. After installation, the app generates self-signed certificates on your device.
2. It then modifies Umbrel's certain core files, and uses modified docker images for the app-proxy and app-auth services, which allows them to listen for HTTPS requests.
3. It also creates backup of the orginal files, just in case...!!!

## Requirements
Tested with Umbrel OS v1.2.2

## Contributing

We welcome and appreciate new contributions!

If you're a developer looking to help but not sure where to begin, look for [these issues](https://github.com/sahilph/umbrel-HTTPSizer/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) that have specifically been marked as being friendly to new contributors.

If you're looking for a bigger challenge, before opening a pull request please [create an issue](https://github.com/sahilph/umbrel-HTTPSizer/issues/new/choose) or [join our community chat](https://t.me/getumbrel) to get feedback, discuss the best way to tackle the challenge, and to ensure that there's no duplication of work.

---

[![License](https://img.shields.io/github/license/sahilph/umbrel-HTTPSizer?color=%235351FB)](https://github.com/sahilph/umbrel-HTTPSizer/blob/master/LICENSE.md)

[umbrel.com](https://umbrel.com)
