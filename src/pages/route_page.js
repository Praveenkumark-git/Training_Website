// import React from 'react'
// import Header from './common/header';
// import Footer from './common/footer';
// import AboutPage from './about_page';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
// import LoginPage from './common/login_page';
// import SignUpPage from './common/signup_page';
// import LandingPage from './landing_page/landing_page';
// import HomePage from './home_page/home_page';
// import VideoCoursePage from './video_course_page/video_course_page';
// import VideoPlayerSample from './video_course_page/video_player_sample';


// export default function RoutePage() {
//     return (
//         <Router>

//         <div className="min-h-screen">
//            <div className="relative overflow-hidden">
//            <Header/>
//            <Switch>
//                   <Route exact path="/">
//                      <LandingPage />
//                   </Route>

//                   <Route  path="/login">
//                       <LoginPage/>
//                   </Route>

//                   <Route  path="/signUp">
//                       <SignUpPage/>
//                   </Route>

//                   <Route  path="/homePage">
//                       <HomePage/>
//                   </Route>
        
//                   <Route  path="/video">
//                       {/* <VideoCoursePage/> */}
//                       <VideoPlayerSample/>
//                       {/* <VideoPlayerSampleApp/> */}
//                   </Route>

//                   <Route  path="/about">
//                       <AboutPage/>
//                   </Route>

//                   <Route  path="/careers">
//                       <AboutPage/>
//                   </Route>
                
                
//                 </Switch>   
                
//           <Footer/>
            
//           </div>
//         </div>
        
//             </Router>
        
//     )
// }
import React from 'react'
import Header from './common/header';
import Footer from './common/footer';
import AboutPage from './about_page';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './common/login_page';
import SignUpPage from './common/signup_page';
import LandingPage from './landing_page/landing_page';
import HomePage from './home_page/home_page';
import VideoCoursePage from './video_course_page/video_course_page';
import VideoPlayerSample from './video_course_page/video_player_sample';

export default function RoutePage() {
    return (
        <Router>
            <div className="min-h-screen">
                <div className="relative overflow-hidden">
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<LandingPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signUp" element={<SignUpPage />} />
                        <Route path="/homePage" element={<HomePage />} />
                        <Route path="/video" element={<VideoPlayerSample />} />
                        {/* <VideoCoursePage/> */}
                        {/* <VideoPlayerSampleApp/> */}
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/careers" element={<AboutPage />} />
                    </Routes>
                    <Footer />
                </div>
            </div>
        </Router>
    )
}