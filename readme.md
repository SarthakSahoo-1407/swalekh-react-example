# Swalekh React Components

![npm](https://img.shields.io/npm/v/swalekh-react)
![license](https://img.shields.io/npm/l/swalekh-react)

React components for integrating Swalekh input tools with centralized configuration management.

## Features

- 📝 Multiple input types: Input, Textarea, Div-based editor
- 🌐 Centralized configuration management
- 🔄 Dynamic language/theme switching
- 🔧 Customizable per-component settings
<!-- - 🛠️ TypeScript support -->

## Installation

1. Install the package:
```bash
npm install swalekh-react
```

2. Add Swalekh script to your HTML head:

```html
<script src="https://swalekh.reverieinc.com/server/swalekh.js"></script>
```

3. Validation key

Get the validation key from the **[Swalekh Developers Portal](https://swalekh.reverieinc.com/developers)**
```js
const validation key = <'SWALEKH-VALIDATION-KEY'>
```

## Basic Usage

```js
import { SwalekhConfigProvider, SwalekhInput, SwalekhTextarea } from 'swalekh-react';

function App() {
  return (
    <SwalekhConfigProvider
      validationKey="YOUR_VALIDATION_KEY"
      language="hi"
      mode="phonetic"
      theme="light"
    >
      <SwalekhInput id="user-name" />
      <SwalekhTextarea id="user-bio" />
    </SwalekhConfigProvider>
  );
}

```


## Configuration
### Global Configuration Provider
```js
<SwalekhConfigProvider
  validationKey="8f3b6ece-cf27-46f9-bfaf-5113c062c372"
  language="bn" // Bengali
  mode="phonetic"
  domain="1"
  theme="dark"
>
  {/* Your components */}
</SwalekhConfigProvider>

```


| Prop           | Required | Default     | Description                   |
|----------------|----------|-------------|-------------------------------|
| `validationKey`| Yes      | -           | API validation key            |
| `language`     | No       | `"en"`      | Input language code           |
| `mode`         | No       | `"phonetic"`| Input method                  |
| `domain`       | No       | `"1"`       | Application domain            |
| `theme`        | No       | `"light"`   | UI theme (light/dark)         |

## Dynamic Configuration Updates
### Change settings at runtime using the `useSwalekhConfig` hook.

```js
function SwalkekhConfigure() {
  const { setConfig } = useSwalekhConfig();

  return (
    <div>
      <label>
        Language:
        <select
          onChange={(e) =>
            setConfig((c) => ({ ...c, language: e.target.value }))
          }
        >
          <option value="hi">Hindi</option>
          <option value="or">Odia</option>
          <option value="bn">Bengali</option>
          <option value="gu">Gujarati</option>
          <option value="ta">Tamil</option>
        </select>
      </label>
      <label>
        Mode:
        <select
          onChange={(e) => setConfig((c) => ({ ...c, mode: e.target.value }))}
        >
          <option value="phonetic">Phonetic</option>
          <option value="keyboard">Keyboard</option>
        </select>
      </label>
    </div>
  );
}

```
## Component Props
### All components support these props (override global config):

| Prop           | Default            | Description                          |
|----------------|--------------------|--------------------------------------|
| `id`           | `"swalekhInput"`   | Unique DOM ID                        |
| `className`    | `""`               | Additional CSS classes               |
| `language`     | `"en"`     | Set individual component language    |


## Troubleshooting

### 1. Script Not Found Warning
- Ensure the Swalekh script is loaded before components mount  
- Check for ad blockers interfering with the script

### 2. Configuration Not Applying
- Verify components are inside `SwalekhConfigProvider`  
- Check for conflicting prop names

### 3. Build Errors
```bash
rm -rf node_modules && npm install
npm run build
```

## Swalekh Products

- 💻 **Swalekh Desktop IME**: [Swalekh Desktop](https://swalekh.reverieinc.com/download-windows)
- 🧩 **Swalekh Chrome Extension**: [Swalekh on Chrome Web Store](https://chromewebstore.google.com/detail/swalekh-multilingual-typi/emdhmomkapfjdfhihjhaagplmcigfkgi)
- 🧩 **Swalekh Indic Input Chrome Extension**: [Swalekh Indic Input on Chrome Web Store](https://chromewebstore.google.com/detail/swalekh-indic-input/kifdamfflkffdiiebhakadldiphcmegh)



## Contact

If you need help or want to contribute, reach out through any of the following:

- 📧 **Email**: [support_swalekh@reverieinc.com](mailto:support_swalekh@reverieinc.com)  
- 💬 **Discord**: [Swalekh Community](https://discord.com/invite/ba8TT9UYfu)  
- 🌐 **Portal**: [https://swalekh.reverieinc.com/developers](https://swalekh.reverieinc.com/developers)  
- 📩 **Website**: [https://swalekh.reverieinc.com/contact-us](https://swalekh.reverieinc.com/contact-us)  
