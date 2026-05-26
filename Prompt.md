# Enterprise Dashboard Prompt
You are creating a highly scalable, secure, real-time and interactive enterprise analytics dashboard platform. The application should track complex operations, real-time business KPIs, user activity and AI-driven insight—tell a story that is transparent and serves as one version of the truth for executive decision-making and deeper technical analysis.

Context and Role
Being a Senior Frontend Architect and Enterprise Software Engineer, you will shape and deliver a production ready Enterprise Analytics Dashboard Platform. The system should be accessible for enterprise, responsive, high real-time performance and easy to maintain. A reliable implementation of MERN/PERN stack using asynchronous programming, efficient concurrent requests and practicing clean architecture principles.

## Objective
Build an end-to-end, fully-functional, and time-to-market enterprise dashboard application using:
- Streaming and real-time analytics of the system.
- Enables and applies user roles and granular permissions (RBAC).
- Provides sophisticated, interactive, and intuitive data visualization components that can manage large volumes of data.
- Implements real-time KPI anomaly detection and predictive analytics with AI technology.
- Optimized and efficient data fetching and caching;
- respects the high fidelity UI/UX styling together with custom glassmorphism components and prized micro-loading animals.
- Analyzes and applies strict security protocols, validations and error handling protocols.
- Runs exceptionally under high volume of concurrent customers and is fully packaged in container to be deployed instantly.

## Input Data
A platform needs to consume and consume structured input datasets from several ingestion layers:
Real-Time Telemetry and KPI Stream:
   - JSON payloads with field fields such as timestamp, kpi_type (e.g., revenue, active_users, system_load), value, delta_percentage, and source_region.
   - Frequent high velocity events over a WebSocket delivering real-time operational and server health data.
2. Security & Identity Profile for Users:
   User credential and identity parameters include: `user_id`, `username`, `email` and secure bcrypt hashed `password`.
   Accessing the mapping metadata: role (Admin, Manager, Analyst, Viewer) and explicit permission_scope arrays.
3. Long-lasting Custom Layout Schema:
   - Custom dashboard layouts (structured array of layouts which contains widgets each with a `widget_id`, `type`, coordinates, dimensions, and a theme light/dark flag).
System Notification and Audit Payload:
   The following operational event logs will be present: `notification_id`, `severity` (info, warning, critical), `trigger_event`, `message`, `read_status`, and `timestamp`.

## Data Processing Requirements
Securly sanitize and validate all input datasets at the API level (gateway) with a secure schema validation policy.
- Downstream databases that have been "historized" with current databases operating on "sockets" using aligned timestamps and individual object identifiers.
- Use a good state management system (eg Zustand) to organize caching globally, UI updates in an optimistic way, filters, and state views.
Coordinate server-side pagination, multi-column sorting and complex column filtration in dense analytical Grids.
Processed real-time telemetry inputs with missing, delayed or corrupt data with sophisticated data imputation algorithms or sensibly default settings.

## Model Requirements
Modeling Data (Schema Structure)
  Relational Model (PostgreSQL / Prisma): Complex relational entities like User (secure) mapping tables, RBAC, Activity logs, and Audit trails. Implement/Follow 100% Foreign Keys, optimized indexed queries.
  When it comes to high volumes of time-series metrics, changes in design of dashboard states, customisation of widgets and user notification preferences profiles, then - **NoSQL Model (MongoDB / Mongoose)**: Flexible schemas.
Two models for Configuration and State.Two models for Configuration and State.
  Add common centralized reactive clientside toast alerts, reactive store-tracking sessions, reactive dynamics sidebar state and temporary toast alerts to dashboard layouts, socket connections state and temporary toast alerts.
  Widget Registry Model – Create a modular list of widgets that are mapped by a key to a dynamic chart, metric counter screen and list feeds, allowing for drag 'n drop structural changes.
ANAM, Analytical Anomaly Detection Model:
  Develop heuristic and predictive rules to watch incoming KPIs telemetry (e.g. if revenue drops more than 35% or system gets overloaded by exceeding safe margins, raise high-severity events), and distribute the AI generated information to the client.

## Output Requirements
This solution should be a fully functional and production-ready MERN/PERN system. Sitting up with no skeletal structures, partial or mock files – no “to be implemented” comments. All output files are required to be "replete with code and logic (runable)".
- **System Folder Structure**:
  ```txt
  enterprise-dashboard/
  ├── web/                         # Frontend Application (Next.js 15, React 19)
  │   ├── app/
  │   │   ├── layout.tsx           # Global Providers & Theme Configuration
  │   │   ├── page.tsx             # Overview Dashboard View
  │   │   └── dashboard/
  │   │       ├── analytics/       # Deep-Dive Analytics & Visualization Panel
  │   │       └── users/           # User Management & RBAC Control Grid
  │   ├── components/              # Shared UI Widgets (Sidebar, Tables, Charts)
  │   ├── store/                   # Centralized State Management (Zustand)
  │   ├── services/                # API and WebSocket Clients
  │   └── middleware.ts            # Next.js Route-Guard Middleware
  │
  ├── server/                      # Backend Core (Node.js, Express)
  │   ├── src/
  │   │   ├── config/              # Redis, Mongoose, and Prisma Configs
  │   │   ├── controllers/         # Request Handling Functions
  │   │   ├── middlewares/         # JWT Auth Guards, XSS, Rate Limiting, Errors
  │   │   ├── routes/              # Express API Routes
  │   │   ├── services/            # Anomaly Detection & Business Services
  │   │   ├── websocket/           # Socket.IO Gateway & Stream Logic
  │   │   └── server.ts            # Entrypoint
  │
  ├── docker/                      # Multi-Environment Deployment Infrastructure
  ├── .github/workflows/
  │   └── ci-cd.yml                # CI/CD pipeline automation
  ├── docker-compose.yml           # Local multi-container development environment
  └── README.md                    # Setup and execution guide
  ```
- **Runnable API Endpoints**:
  Secure `/api/auth/login` and `/api/auth/refresh` which return temporary JWT and secure HTTP only cookies.
  Explicit access validation middleware protected CRUD enabled routes for users at `/api/users` for creating, updating, and RBAC handling users.
  -enhanced, cached /api/analytics endpoint responses with stats historical data.
- **WebSocket Synchronization Gateway**:
  - Socket.IO server broadcasting realtime KPI metrics, active alerts and realtime dashboard status changes in an event loop.
Lawrence Kagan created and localized the following pages:
  Fully dynamic grid layout, with interactive visualizations (such as Line, Bar and Pie charts) driven by Recharts or Apache ECharts.
  - Enterprise table grid implemented with TanStack Table, which supports visualizing the table and no lag for 10,000+ data rows.
  - Hover micro-animations and smooth dark mode colour palette.- Loading skeletons, error states, glassmorphic HUD styling and high fidelity visuals.

## Typical Error-handling, Documenting and Bugs.Common Error-handling, Documentation and Bugs.
- Implement custom error handling middleware to return structured JSON errors to the front-end, creating a centralized approach to handling errors on the back-end, while avoiding production-sensitive stack trace leaks.
- Add wrapping error boundaries to UI critical widgets to stop any crashing of widgets breaking the UI elements.
Add full Winston Logs or file-based log output of all authentication failures, database query errors and critical API bottlenecks.
- Write comprehensive JSDoc/TSDoc documentation and utility Function/Util contents using meaningful TypeScript interfaces, TypeScript parameters and others.
- Ensure there is a clear and actionable `README.md` that includes folder descriptions, system architecture diagrams, step-by-step setup instructions, and/or scripts to execute the whole system quickly.

## Performance and Scalability
- Programming with asynchronous & high concurrency.
  - The application back end needs to be thread-unblocking design. Dispose of all of your database calls, API fetches, caching reads, and other analytical calculations asynchronously and in a clean way with `async/await`, non-blocking event loops, and promise pools to allow for the smooth service of enormous amounts of data in parallel with no delay waiting on the single-threaded Node.js event loop.
- **Database & Query Optimization**:
  Minimize search overhead by implementing relational query indexing and NoSQL index strategies that count on the identifier and timestamp fields.
  - Deliver fast query responses in real-time and Amazon Redshift to save on direct database queries with Redis caching layer and configured expiring timers.
  Healthier handling concurrent connections by doing database connection pooling – using Prisma/pg and Mongoose for this.
- **Client Render Performance**:
  Reduces bundle size for heavy charting libraries by lazy-loading front-end components and not loading this library unless it is dynamically needed, which improves the Time to Interactive (TTI).
  - Avoid unnecessary re-calculations of web component layouts by using web component memoization (e.g., React.memo, useMemo, useCallback) during fast WebSocket telemetry sends.
  - Render tables with thousands of items with virtualized list rendering, like TanStack Virtual.

## Tools and Libraries
- Web Development Tools: JavaScript, TypeScript, Next.js (App Router), React 19, Express, Node.js.
- Headings, lists, buttons, and other navigation elements: MDKLabs Tweaking.- Analytics: Google Analytics 4, Google Tag Manager.
- Client Management & Cache: Zustand (Client State), Zustand Persist, React Query.
Data Processing & Visualisations: Recharts, Apache ECharts, TanStack Table, TanStack Virtual.
Database: PostgreSQL (through Prisma ORM), MongoDB (through Mongoose), Redis (through ioredis) Caching: Redis (through ioredis here), see, I lied! Caching: Redis (through Prisma ORM here) & Redis (through ioredis here).
- Express* Express is a feature-rich web development framework with a modular component structure.Express – Express – is a web development framework that has a modular structure and is rich in features.
- Real-Time Communication: Socket.IO, Socket.IO Client.
Install Docker, Docker Compose, Winston, Sentry, Prometheus, Grafana.Install: Docker, Docker Compose, Winston, Sentry, Prometheus, Grafana

## Constraints and Guardrails
- Zero Placeholder Constraint: Complete and runnable code files are required! Skeletal code structures, generic mock returns and writing place-holder comments like `// TODO: Implement this method`. are strictly prohibited.
Strict Typing Guardrail: Ensure that typeScript is adhered to through the following: No use of any, each data model, request body, API response, and socket message payload must have their own interfaces or schema with Zod.
The deployment setup needs to be containerized and deployed with one command (Start and Run). Create a solid `docker-compose.yml` to setup the database, cache, server and client services, and enable a developer to choose the desired environment variables and run `docker-compose up --build` to get the whole system up and running in no time.
- Use appropriate .gitignore and .prettierignore policies: Exclude environment variables, local locks, and secret files from the .gitignore and .prettierignore.
- Accessibility & Motion Compliance: The interface should be WCAG 2.1 AA Accessible, and include ARIA attributes, semantic tags, and a preference for reduce animation based check on the @media (prefers-reduced-motion: reduce) query.
All parameters (endpoints, ports, secrets, database URIs) are injected in the external environment (backend parameters are injected in .env and fronted in .env.local) with secure fallbacks.
