import { DivSection } from './Section.styled'
const Section = ({ title, children }) => {
  return (
    <DivSection>
      <div>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </DivSection>
  );
};
export default Section;
