import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// import pages
import About from "./pages/About";
import Home from "./pages/Home";
import Faq from "./pages/Help/Faq";
import Contact from "./pages/Help/Contacts";
import Careers, { careersLoader } from "./pages/Careers/Careers";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/Careers/CareerDetails";
import CareersError from "./pages/Careers/CareersError";

// import layout
import RootLayOut from "./Layouts/RootLayOut";
import HelpLayOut from "./Layouts/HelpLayOut";
import CareersLayOut from "./Layouts/CareerLayOut";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayOut />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route
        path="careers"
        element={<CareersLayOut />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
