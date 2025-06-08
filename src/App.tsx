
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import Apply from "./pages/Apply";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import CourseDetail from "./components/CourseDetail";
import Payment from "./pages/Payment";
import CourseAccess from "./pages/CourseAccess";
import Forum from "./pages/Forum";
import Store from "./pages/Store";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<About />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="apply" element={<Apply />} />
            <Route path="contact" element={<Contact />} />
            <Route path="courses" element={<Courses />} />
            <Route path="course/:id" element={<CourseDetail />} />
            <Route path="payment/:courseId" element={<Payment />} />
            <Route path="store" element={<Store />} />
            <Route path="forum" element={<Forum />} />
          </Route>
          <Route path="/course-access/:courseId" element={<CourseAccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
