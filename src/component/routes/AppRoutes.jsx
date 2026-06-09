import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import Layout from '../layout/Layout';
import About from '../pages/about/About';
import Curriculum from '../pages/about/Curicullam';
import Founder from '../pages/about/Founder';
import Alumini from '../pages/alumini/Alumini';
import Metriculation from '../pages/metriculation/Metriculation';
import MatricPalladam from '../pages/metriculation/MatricPalladam';
import MatricAnthiyur from '../pages/metriculation/MatricAnthiyur';
import ArtsCollege from '../pages/metriculation/ArtsCollege';
import IdealMatric from '../pages/metriculation/IdealMatric';
import Gallery from '../pages/gallery/Gallery';
import Cbse from '../pages/cbse/Cbse';
import AvpsAnthiyur from '../pages/cbse/AvpsAnthiyur';
import AvpsPalladam from '../pages/cbse/AvpsPalladam';
import VrukshaAvos from '../pages/cbse/VrukshaAvos';
import Highlights from '../pages/highlight/Highlights';
import Contact from '../pages/contact/Contact';

export default function AppRoutes() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
            <Route path='/' element={<Home/>} />

            {/* About */}
            <Route path='about' element={<About/>} />
            <Route path='about/curriculum' element={<Curriculum/>} />
            <Route path='about/founders' element={<Founder/>} />

            {/* CBSE */}
            <Route path='cbse' element={<Cbse/>} />
            <Route path='cbse/avps-anthiyur' element={<AvpsAnthiyur/>} />
            <Route path='cbse/avps-palladam' element={<AvpsPalladam/>} />
            <Route path='cbse/vruksha-avos' element={<VrukshaAvos/>} />

            {/* Matriculation */}
            <Route path='matriculation' element={<Metriculation/>} />
            <Route path='matriculation/palladam' element={<MatricPalladam/>} />
            <Route path='matriculation/anthiyur' element={<MatricAnthiyur/>} />
            <Route path='matriculation/arts-college' element={<ArtsCollege/>} />
            <Route path='matriculation/ideal-matric' element={<IdealMatric/>} />

            {/* Others */}
            <Route path='highlight' element={<Highlights/>} />
            <Route path='gallery' element={<Gallery/>} />
            <Route path='alumini' element={<Alumini/>} />
            <Route path='contact' element={<Contact/>} />
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
