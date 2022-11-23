# guid-generator README

## Features

**GUID Generator**: This generates a GUID and puts it into the active file.

**Find and Replace GUIDs (in a single file)**: This finds all the GUIDs in the active window and replaces them with new GUIDs.

## Requirements

None.

## Extension Settings

There are no extra extension settings

## Known Issues

No known issues

## Release Notes

To get `guid-generator.vsix`

```bash
npm install -g vsce
git clone git@github.com:rvehall/GUID-Generator-for-VS-Code.git
cd guid-generator
npm install
vsce package
```

To install, go to the Extensions panel and click the elipses (`...`) at the top. From here, `Install from VSIX`, navigate to the root of `guid-generator`, and select the generated .vsix file.

### 1.0.0

Initial release of GUID Generator.

### 1.1.0

This replaces all GUIDs in a single file.

**Enjoy!**
# GUID-Generator-for-VS-Code
