Giggly UI Library 🎉
Applink: https://mygigglyui.web.app/
Welcome to Giggly UI, a playful yet professional Angular component library designed to simplify and enhance your UI development experience. Giggly UI provides a set of customizable, easy-to-use components that seamlessly integrate with Angular applications, ensuring flexibility, accessibility, and a modern design.
🌟 Features

    Playful Yet Professional Design: A unique blend of fun and functionality, ensuring visually appealing components.
    Angular Friendly: All components are built with Angular best practices, including support for ngModel and reactive forms.
    Highly Customizable: Each component offers flexible styling and configuration options to match your project's needs.
    Seamless Form Integration: A variety of form-related components with powerful bindings and validation support.
    Event-Driven Architecture: Capture component interactions effortlessly with intuitive event emitters.
    Lightweight & Performant: Optimized for fast performance and minimal footprint.
    Firebase Deployed Demo: Live Demo showcasing all available components.

📦 Available Components

Giggly UI currently includes the following components:

    Buttons
        Standard, Outline, and Icon buttons
        Customizable colors, sizes, and loading states

    Inputs & Forms
        Textarea: Auto-resizing multi-line input
        Checkbox: Customizable with label options
        Radio Button: Grouped selection with ngModel support
        Select/Dropdown: Single & multi-select with search functionality
        Toggle Switch: Interactive switch with ngModel binding
        Slider: Range input with customization options
        Date Picker: Fully re-implemented with min/max date handling and event bindings
        File Upload: Drag-and-drop or button-based uploads with file capture event

🚀 Upcoming Features

Stay tuned for exciting new components, including:

    Accordion
    Tabs
    Toast Notifications
    Modals
    Tooltips

📖 Installation

To install Giggly UI in your Angular project:

npm install giggly-ui

🛠️ Usage

Import the desired Giggly components into your Angular module:

import { GigglyButtonModule, GigglyInputModule } from 'giggly-ui';

@NgModule({
  declarations: [...],
  imports: [
    GigglyButtonModule,
    GigglyInputModule
  ],
})
export class AppModule { }

Use them in your templates:

<giggly-button color="primary" (click)="onClick()">Click Me</giggly-button>
<giggly-input [(ngModel)]="userInput" placeholder="Enter text"></giggly-input>

📚 Documentation

Check out the full documentation and live examples on our Demo Page : **https://mygigglyui.web.app/**
