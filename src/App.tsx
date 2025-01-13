import React from 'react';
import {HashRouter as Router, Navigate, Route, Routes} from 'react-router-dom';

import Layout from "./components/Layout";
import ProjectPage from "./components/ProjectPage";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

import {ScrollProvider} from "./contexts/ScrollContext";
import {ThemeProvider} from "./contexts/ThemeContext";

import projects from "./content/data/foliodata.json"

function App() {
    return (
        <ThemeProvider>
            <ScrollProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Layout><HomePage/></Layout>}/>
                        <Route path="/about" element={<Layout><AboutPage/></Layout>}/>
                        <Route path="/skills" element={<Layout><SkillsPage/></Layout>}/>
                        <Route path="/projects" element={<Layout><ProjectsPage/></Layout>}/>

                        {projects.map((project) => (
                            <Route key={project.title} path={project.path} element={
                                <Layout>
                                    <ProjectPage
                                        title={project.title}
                                        description={project.details}
                                        headerImage={project.thumbnail}
                                        carouselImages={project.carouselImages}
                                        sections={project.sections}
                                    />
                                </Layout>
                            }/>
                        ))}

                        <Route path={"*"} element={<Navigate to={"/"} replace/>} />
                    </Routes>
                </Router>
            </ScrollProvider>
        </ThemeProvider>
    );
}

export default App;