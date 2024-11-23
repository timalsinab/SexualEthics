
# Navigating Sexual Ethics: A Resource Hub

A web application designed to provide engaging and educational resources about sexual ethics. The platform includes sections for **educators** and **students** with tailored content, such as video lessons, interactive scenarios, and relationship skills.

## Features

### For Students
- **Video Lessons**  
  Informative videos on:
  - Respecting Personal Boundaries
  - Understanding Consent and Communication
  - How to Be a Good Friend  

- **Interactive Scenarios**  
  Practice ethical decision-making in scenarios like:
  - Standing Up for Friends in Difficult Situations
  - Respecting Differences in Opinions
  - Using Technology Responsibly in Relationships  

- **Relationship Skills**  
  Interactive modules to learn:
  - Effective Communication
  - Conflict Resolution
  - Building Trust and Respect  

### For Educators
- Scholarly articles, case studies, and classroom activities to guide ethical discussions and teaching.

## Tech Stack

- **Frontend**: React.js, TailwindCSS, React Router
- **Backend**: Not applicable (static content and routes only)
- **Icons**: [Lucide React](https://lucide.dev/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/navigating-sexual-ethics.git
   cd navigating-sexual-ethics
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Folder Structure

```
src/
|-- components/
    |-- EducatorsSection.js
    |-- StudentsSection.js
    |-- ui/
        |-- button.js
        |-- card.js
    |-- Students/
        |-- VideoLessons.js
        |-- InteractiveScenarios.js
        |-- RelationshipSkills.js
        |-- EffectiveCommunication.js
        |-- ConflictResolution.js
        |-- BuildingTrust.js
```

## Navigation

### Landing Page
- **Students Section**: `/students`
- **Educators Section**: `/educators`

### Students Section
- Video Lessons: `/students/video-lessons`
- Interactive Scenarios: `/students/interactive-scenarios`
- Relationship Skills: `/students/relationship-skills`

### Thank You Page
- Redirects after completing video lessons: `/students/thank-you`

## Contributing

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---
