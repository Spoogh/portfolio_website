import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle> Technologies</SectionTitle>
    <SectionText>
      I've worked with both front-end and back-end technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size ='3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
            TailwindCSS
            Next.js
            Bootstrap
            MaterialiseCSS
            HTML5
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size ='3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            API's
            Node.js
            Express.js
            MongoDB
            MySQL
            MySQL2
            Jest
           
          </ListParagraph>
        </ListContainer>
      </ListItem>
    
    </List>
  </Section>
);

export default Technologies;
