import React from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import {ScrollProvider} from "./contexts/ScrollContext";
import projects from "./content/data/foliodata.json"
import ProjectPage from "./components/ProjectPage";
import ProjectCard from "./components/cards/ProjectCard";

function App() {
    return (
        <ScrollProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout><HomePage/></Layout>}/>
                    <Route path="/about" element={<Layout><AboutPage/></Layout>}/>
                    <Route path="/skills" element={<Layout><SkillsPage/></Layout>}/>
                    <Route path="/projects" element={<Layout><ProjectsPage/></Layout>}/>
                    <Route path="/contact" element={<Layout><ContactPage/></Layout>}/>

                    {projects.map((project) => (
                        <Route key={project.title} path={project.path} element={
                            <Layout>
                                <ProjectPage
                                    title={project.title}
                                    description={project.subTitle}
                                    headerImage={project.thumbnail}
                                    carouselImages={project.carouselImages}
                                    sections={project.sections}
                                />
                            </Layout>
                        }/>
                    ))}
                </Routes>
            </Router>
        </ScrollProvider>
    );
}

export default App;