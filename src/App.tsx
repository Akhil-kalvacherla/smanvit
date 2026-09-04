import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './routes/about';
import Blogs from './routes/blogs';
import BlogSlug from './routes/blogs_.$slug';
import Capabilities from './routes/capabilities';
import Contact from './routes/contact';
import Industries from './routes/industries';
import ItServices from './routes/it-services';
import Partnership from './routes/partnership';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogSlug />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/it-services" element={<ItServices />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
