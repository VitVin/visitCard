import { AnimatePresence, delay, motion, useScroll, useTransform } from 'framer-motion'
import { PageSection } from './Components/UI/PageSection/PageSection';
import './App.css';
import { use, useEffect, useState, useRef } from 'react';
import { Card } from './Components/UI/Card/Card';
import { Widget } from './Components/UI/Widget/Widget';
import { a, label, picture } from 'framer-motion/client';
import { NavigationButton } from './Components/UI/Button/Button';
import { NavigationSection } from './Components/UI/NavigationSection/NavigationSection';
import SkillsPage from './Components/Pages/SkillsPage/SkillsPage';
import ExperienceSection from './Components/Pages/WorkExperiencePage/WorkExperiencePage';
import ContactsPage from './Components/Pages/ContactsPage/ContactsPage';
import { WelcomePage } from './Components/Pages/WelcomePage/WelcomePage';
import EducationPage from './Components/Pages/EducationPage/EducationPage';
import WorkExperiencePage from './Components/Pages/WorkExperiencePage/WorkExperiencePage';
import robotImage from './assets/robot.png';
import ThemeSwitcher from './Components/UI/ThemeSwitcher/ThemeSwitcher';
import CoursesPage from './Components/Pages/Courses/CoursesPage';
import { ProjectsPage } from './Components/Pages/ProjectsPage/ProjectsPage';
import pocketStorageImage from './assets/PocketStorage.png';
import mmotodayImage from './assets/MMOTodayPicture.png';

export default function App() {

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const [isPageActive, setIsPageActive] = useState(true);

  const { scrollY } = useScroll();

  const [section, setSection] = useState(0);


  const scrollToSection = (sectionIndex) => {
    const sectionEl = document.getElementById(`section-${sectionIndex}`);
    if (!sectionEl) return;

    sectionEl.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <>
      <motion.div className="App" onMouseMove={(e) => setMouse({ x: e.clientX - window.innerWidth / 2, y: e.clientY - window.innerHeight / 2 })}
        animate={{ top: section * window.innerHeight }}
      >



        <PageSection id="section-0" setCurrentSection={setSection} title={'WELCOME'} sectionNumber={0} isActive={isPageActive} setIsPageActive={setIsPageActive} >

          <WelcomePage />

        </PageSection >


        <PageSection id="section-1" setCurrentSection={setSection} title={'SKILLS'} sectionNumber={1} isActive={isPageActive} setIsPageActive={setIsPageActive}>
          <SkillsPage />
        </PageSection>

        <PageSection id="section-2" setCurrentSection={setSection} title={'EXPERIENCE'} sectionNumber={2} isActive={isPageActive} setIsPageActive={setIsPageActive}>
          <WorkExperiencePage />
        </PageSection>

        <PageSection id="section-3" setCurrentSection={setSection} title={'EDUCATION'} sectionNumber={3} isActive={isPageActive} setIsPageActive={setIsPageActive}>
          <EducationPage />
        </PageSection>

        <PageSection id="section-4" setCurrentSection={setSection} title={'COURSES'} sectionNumber={4} isActive={isPageActive} setIsPageActive={setIsPageActive}>
          <CoursesPage />
        </PageSection>

        <PageSection id="section-5" setCurrentSection={setSection} title={'PET-PROJECTS'} sectionNumber={5} isActive={isPageActive} setIsPageActive={setIsPageActive}>
          <ProjectsPage projectData={{
            name: 'POCKETSTORAGE', description: `This mobile application allows you to organize a complex storage structure, whether it's boxes in a closet or an entire warehouse, and carry out convenient search and navigation through the structure. 
 The application features search functionality by item name or storage location, automatically indicates the location of the item you are looking for, as well as its quantity, name, and description. 
 It also allows you to manage storage objects (move, delete, edit). The fast speed of the application and its portability enable you to quickly and conveniently organize your storage structure and find the necessary items.
 The application supports 9 languages and offers customization options to adjust the appearance according to user preferences.
 In addition, it provides the ability to save and transfer your storage data to another device.`,
            stack: ['React Native', 'MobX'], picture: pocketStorageImage
          }} />

        </PageSection>
        <PageSection setCurrentSection={setSection} sectionNumber={5} isActive={isPageActive} setIsPageActive={setIsPageActive}>
          <ProjectsPage projectData={{
            name: 'MMOTODAY', description: `
This is my first pet project built with React, and it still feels pretty cool to me.
This web application provides a convenient way to track
             and search online games using filters (genre, graphics, category, etc.) and search by name.
              Users can also access descriptions of the games, system requirements, trailers (if available),
               and links to the official websites of the games. The application is integrated with the backend and
                provides access to more than 390 games. Its responsive design allows the application to be used on a 
                computer, mobile phone, or tablet.`, link: 'https://vitvin.github.io/MMOToday/',
            stack: ['React'], picture: mmotodayImage
          }} />
        </PageSection>


        <PageSection id="section-6" setCurrentSection={setSection} sectionNumber={7} isActive={isPageActive} setIsPageActive={setIsPageActive}>
          <ContactsPage />
        </PageSection>





      </motion.div >

      <div style={{ display: 'flex', position: 'fixed', zIndex: 10, left: '10px', top: '100px' }}>

        {/* <ThemeSwitcher /> */}
      </div>





      <Widget currentPage={section} data={[{
        text: [
          { label: 'WELCOME! KEEP SCROLLING TO LEARN MORE ABOUT ME.' },
        ],
        picture: robotImage
      },
      {
        text: [
          { label: `DON'T KNOW WHAT THIS TECHNOLOGY IS? JUST CLICK ON IT!` },
        ],
      },
      {},
      {},
      {},
      {
        text: [
          { label: `HERE ARE SOME OF MY PERSONAL NON-COMMERCIAL PROJECTS.` },
        ],
      },
      {
        text: [
          {
            label: `INTERESTED IN LEARNING MORE OR WORKING TOGETHER? FEEL FREE TO REACH OUT!`
          },
        ],
      }
      ]} />
      <NavigationSection pages={['Home', 'Skills', 'Experience', 'Education', 'Courses', 'Projects', 'Contact']}
        setIsPageActive={setIsPageActive}
        isPageActive={isPageActive} currentPage={section} scrollToSection={scrollToSection} />


    </>

  );
}
