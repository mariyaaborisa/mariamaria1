import Hero from './components/Hero';
import ExpertiseAccordion from './components/ExpertiseAccordion';
import ProjectHighlightsSlider from './components/ProjectHighlightsSlider';
import Connect from './components/Connect';

export default function Home() {
  return (
    <main>
      <Hero />
      <ExpertiseAccordion />
      <ProjectHighlightsSlider />
      <Connect />
    </main>
  );
}
