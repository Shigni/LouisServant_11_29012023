import { AboutBanner, Collapse } from '../../components';
import aboutArray from '../../data/about.json';

export function About() {
  return (
    <>
      <AboutBanner />
      {aboutArray.map((rule, id) => (
        <Collapse
          key={id}
          aboutTitle={rule.aboutTitle}
          aboutText={rule.aboutText}
          aboutStyle="about-style"
        />
      ))}
    </>
  );
}
