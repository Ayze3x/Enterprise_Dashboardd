# Enterprise Analytics Dashboard Platform

## Context and Role

As a Senior Frontend Architect and Enterprise Software Engineer, you are responsible for designing and implementing a production-grade Enterprise Analytics Dashboard Platform used to monitor operations, KPIs, user activity, and business analytics in real time.

The platform must provide a scalable, secure, interactive, and data-driven environment with enterprise-grade accessibility, responsiveness, maintainability, and performance.

---

# Objective

Develop a complete enterprise dashboard application that:

- Provides real-time analytics and monitoring
- Supports multiple levels of user roles and permissions
- Includes highly detailed data visualization tools
- Efficiently manages large-scale datasets
- Demonstrates exceptional performance and scalability
- Implements enterprise-grade authentication and security
- Maintains production-quality architecture and code standards

---

# Core Dashboard Requirements

The application should include:

- Executive Overview Dashboard
- Analytics Dashboard
- User Management Dashboard
- Notification Center
- Settings Panel
- Role and Permission Management

The platform must support:

- Modular widget systems
- Dynamic dashboard customization
- Saved dashboard layouts/views
- Persistent user preferences

---

# UI and UX Requirements

Design a modern enterprise-grade interface using:

- Responsive sidebar navigation
- Interactive charts and visualizations
- Advanced enterprise tables
- Smart filtering systems
- Global search functionality
- Dark/Light theme switching
- Accessibility compliance (WCAG standards)

The UI must include:

- Responsive grid layouts
- Loading skeletons
- Toast notifications
- Empty states
- Error states
- Smooth animated transitions

---

# Animation Requirements

Use Framer Motion for:

- Page transitions
- Widget animations
- Sidebar interactions
- Modal transitions

Animations must:

- Use GPU-optimized transforms
- Avoid layout thrashing
- Maintain smooth rendering performance

---

# Data Visualization Requirements

Implement advanced visualizations including:

- Line charts
- Pie charts
- Bar charts
- KPI cards
- Time-series analytics

Charts must support:

- Real-time updates
- Interactive tooltips
- Dynamic filtering
- Responsive scaling

Recommended charting libraries:

- Recharts
- Chart.js
- Apache ECharts

---

# Enterprise Table Requirements

Build advanced enterprise data tables featuring:

- Server-side pagination
- Multi-column sorting
- Advanced filtering
- Inline editing
- CSV export
- Sticky headers

Performance optimizations must include:

- Efficient large dataset rendering
- Memoized rendering
- Virtualized row rendering

---

# Authentication and Authorization

Implement secure authentication using:

- JWT Authentication
- Session-based Authentication
- OAuth Providers
- NextAuth Integration

RBAC (Role-Based Access Control) must support:

- Admin
- Manager
- Analyst
- Viewer

---

# Security Requirements

Implement enterprise-level security including:

- Input sanitization
- XSS prevention
- CSRF protection
- API rate limiting
- Secure session handling
- Audit logging
- Environment variable protection

---

# Backend Requirements

Develop a scalable backend architecture using:

- Node.js + Express.js
- Next.js API Routes

Backend architecture must include:

- REST APIs
- Centralized error handling
- Validation middleware

Core backend services:

- Authentication Service
- Analytics Service
- Notification Service
- User Management Service

---

# Real-Time System Requirements

Implement real-time communication using:

- WebSockets
- Socket.IO

The system should provide:

- Real-time analytics updates
- Real-time notifications
- Live dashboard synchronization

---

# Database Requirements

Use both PostgreSQL and MongoDB.

The database layer must support:

- User profiles
- Dashboard configurations
- Analytics datasets
- Notification storage
- Role permissions

Database optimization techniques:

- Indexed queries
- Query caching
- Optimized relational mapping

---

# API Requirements

APIs must:

- Return structured JSON responses
- Use proper HTTP status codes
- Support pagination
- Validate request schemas

Additional API requirements:

- API versioning
- Rate limiting
- Request validation middleware

---

# AI and Analytics Features

Integrate AI-powered analytics features including:

- KPI anomaly detection
- AI-generated insights
- Automated reporting summaries
- Predictive analytics modules

---

# Notification System Requirements

Implement a complete notification system with:

- Real-time notifications
- System alerts
- Activity notifications

Notifications must support:

- Read/unread states
- Persistent storage
- User notification preferences

---

# Performance and Scalability Requirements

Design a highly scalable system implementing:

- Code splitting
- Lazy loading
- Bundle optimization
- Virtualized rendering
- Redis caching

The platform must ensure:

- Low-latency rendering
- Efficient API throughput
- High responsiveness under load

---

# Monitoring and Logging

Implement observability and monitoring systems including:

- Centralized logging
- Error tracking
- API monitoring
- Performance metrics

The logging system must track:

- Authentication events
- API failures
- User actions
- System activity

---

# Deployment Requirements

Prepare the application for enterprise deployment using:

- Docker containerization
- CI/CD pipelines
- SSL configuration
- Environment-based builds

Supported deployment platforms:

- AWS
- Vercel
- Azure

---

# Documentation Requirements

Provide complete documentation including:

- Folder structure explanation
- Architecture overview
- API documentation
- Deployment guide
- Security procedures
- Scalability guidelines

---

# Technology Stack

## Frontend

- Next.js / React
- TypeScript
- Tailwind CSS
- Framer Motion

## Visualization

- Chart.js
- Recharts
- Apache ECharts

## Backend

- Node.js
- Express.js

## Databases

- PostgreSQL
- MongoDB

## Authentication

- JWT
- NextAuth

## Real-Time Communication

- WebSockets
- Socket.IO

## DevOps

- Docker
- GitHub Actions

---

# Output Requirements

The final solution must deliver:

- Production-ready architecture
- Responsive enterprise-grade UI
- Secure authentication system
- Real-time analytics support
- Advanced visualization infrastructure
- Scalable backend systems
- High-performance rendering
- Full technical documentation
- Maintainable and modular codebase
