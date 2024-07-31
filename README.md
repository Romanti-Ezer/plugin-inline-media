# Plugin Inline Media

Twilio Flex Plugins allow you to customize the appearance and behavior of [Twilio Flex](https://www.twilio.com/flex). If you want to learn more about the capabilities and how to use the API, check out our [Flex documentation](https://www.twilio.com/docs/flex).

This Flex Plugin goal is to enable the preview of message media in the Flex Task Canvas, and improve the agent experience.

The following extensions are supported in this example:
- image/jpeg
- image/png
- image/webp
- audio/mpeg
- audio/ogg
- audio/amr
- application/pdf
- video/mp4

## Screenshots

<img src="./screenshots/Image%20and%20Audio%20Preview.png" width="600" alt="Image and Audio Preview">

<img src="./screenshots/PDF%20and%20Video%20Preview.png" width="600" alt="PDF and Video Preview">

<img src="./screenshots/Stickers%20Preview.png" width="600" alt="Stickers Preview">

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com). We support Node >= 10.12 (and recommend the _even_ versions of Node). Afterwards, install the dependencies by running `npm install`:

After clonning the project:

```bash
cd plugin-inline-media

# If you use npm
npm install
```

Next, please install the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) by running:

```bash
brew tap twilio/brew && brew install twilio
```

Finally, install the [Flex Plugin extension](https://github.com/twilio-labs/plugin-flex/tree/v1-beta) for the Twilio CLI:

```bash
twilio plugins:install @twilio-labs/plugin-flex
```

## Development

Run `twilio flex:plugins --help` to see all the commands we currently support. For further details on Flex Plugins refer to our documentation on the [Twilio Docs](https://www.twilio.com/docs/flex/developer/plugins/cli) page.

## Disclaimer

This software is to be considered "sample code", a Type B Deliverable, and is delivered "as-is" to the user. Twilio bears no responsibility to support the use or implementation of this software.