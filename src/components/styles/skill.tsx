import React from 'react';
import styled from 'styled-components';

interface ISkill extends React.HTMLProps<HTMLElement> {
    src: string;
    name: string;
}

const SkillBlock = styled.div`

`;

const SkillText = styled.p`
    font-size: 1.8rem;
    color: #82827b;
`

const SkillImage = styled.img`
    width: 25px; 
    height: 25px; 
    margin-right: 1rem;
    /* -webkit-filter: grayscale(50%);
    filter: grayscale(50%); */
`

export default function Skill({src, name } : ISkill) {
  return (
    <SkillBlock>
      <SkillText>
        <SkillImage src={src} alt={`${name.split(' ')[0].toLowerCase()}-icon`}/>
        { name.split(' ')[0] }
      </SkillText>
    </SkillBlock>
  )
}
