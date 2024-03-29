# hass-materialsymbols

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/custom-components/hacs)

Use icons from the [Google Material Symbols](https://fonts.google.com/icons) set in Home Assistant.

# Installation instructions

- Install using [HACS](https://hacs.xyz) (Or copy the contents of `custom_components/materialsymbols/` to `<your config dir>/custom_components/materialsymbols/`.)

- Restart Home Assistant

- Click this: [![Open your Home Assistant instance and start setting up a new integration.](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=materialsymbols)

  - Alternatively: Go to your integrations configuration, click Add Integration and find "materialsymbols icons"


# Usage

Find the icon you want in the [gallery](https://marella.me/material-symbols/demo).

Only the *Rounded* icons are included to simplify the choice

To use the icons, prefix them with _ms:_

The icons are useable anywhere in Home Assistant - not only in lovelace.



# FAQ

### Can I set this up in configure.yaml instead?

Yes.

```
materialsymbols:
```

That's it.

---


## Special thanks

This work is based on [hass-fontawesome](https://github.com/thomasloven/hass-fontawesome) by Thomas Loven. Thank you!
