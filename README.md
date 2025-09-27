MyTrax: Intelligent Participant Experience (IPX) Hub
🚀 Project Overview and Goal
The MyTrax application, tagged "Your Event. Your Path. Personalized by AI," is the official submission for the Vibeathon's Challenge 1: Intelligent Participant Experience (IPX) Hub. The primary goal was to design and build an innovative platform that elevates the SAP Inside Track (SIT) event experience by creating a hyper-personalized and seamless digital journey for every attendee. The application achieves this by deeply integrating AI and ensuring a smooth operational flow. The core technology stack includes Angular (TypeScript) for the robust, component-based frontend, Tailwind CSS for a professional and responsive UI/UX, and a mock Node.js/Express backend to handle secure operations and AI proxying.

✨ Core Features and AI Integration
MyTrax successfully implements all mandatory requirements and earns significant bonus points through three core AI-powered features. The attendee journey begins with 

differentiated registration flows for Working Professionals and Students, securely capturing essential data like Designation/UG-PG status, which immediately establishes the AI Profile Key for personalized service.

AI-Powered Agenda Builder: This feature utilizes the AI Profile Key to run a Keyword Matching Algorithm. It suggests sessions based on the user's specific interests and roles, ensuring that the personalized schedule is guaranteed to be 

time-conflict free (solving a common attendee pain point). Users manage their personal selections under the "My Path" tab.


Smart Networking Assistant: This high-value feature executes a Matchmaking Algorithm by comparing shared roles and professional interests across all attendee profiles. It suggests the top 3 high-value connections, providing actionable networking opportunities to maximize the value of the event.

SIT Concierge Chatbot: We integrated a mock service simulating an LLM chatbot. This provides attendees with instant answers to common queries concerning FAQs, venue locations, and speakers, enhancing support and overall participant engagement.

⚙️ Technical Operations and Architecture
The platform's operational architecture is built for efficiency and compliance. Every attendee is issued a 

unique registration ID and a corresponding QR Code upon confirmation. This QR code enables quick, paperless check-in by event staff, with the system automatically updating the attendee's status in the database. Furthermore, MyTrax is architecturally designed for high 



scalability, supporting 1000+ attendees and 100s of sessions. It adheres to essential integrity measures, including the intention for 


data encryption of sensitive information and a structure supporting Role-based Access (Attendee/Admin/Staff) for future development. The application's UI is fully 



mobile-friendly and responsive, ensuring accessibility on any device.

🖥️ Getting Started (Running the Prototype)
To fully run and demonstrate the MyTrax application, the Node.js/Express backend must be started first to handle the secure API calls, followed by the Angular frontend.

Start Backend: Navigate to the backend directory and run node server.js (assuming dependencies are installed).

Start Frontend: In a separate terminal, navigate to the Angular directory and run ng serve --open.

Demo Flow: The app starts at the Landing Page. Click 'Register Now' to begin the personalized journey.# Prtmng

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
