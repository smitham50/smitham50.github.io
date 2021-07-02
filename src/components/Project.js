import React from 'react';
import styled from 'styled-components';
import Fade from "react-reveal/Fade";

const ProjectContainer = styled.div`
    background: #f9f9f9ad;
    color: #3f3e42;
    text-align: center;
    padding: 1rem;
    margin: 1rem;
    border-radius: 10px;

    &:nth-of-type(2N) {
        background: #f5f4f4;
    }

    &:nth-of-type(2N) .project-info {
        background: #a5a5a514;
    }
`;

const ProjectBody = styled.div`
    display: flex;

    & > * {
        margin: 2rem;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0;
    }
`;

const ProjectImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 60%;

    @media screen and (max-width: 768px) {
        margin: 0;
        width: auto;
    }
`;

const ProjectImage = styled.img`
    width: auto;
    border-radius: 10px;
    margin: 1rem;

    @media screen and (max-width: 768px) {
        width: auto;
        max-width: 100%;
        height: auto;
        aspect-ratio: attr(width) / attr(height);
    }
`;

const ProjectInfo = styled.div`
    width: 30%;
    background: #cccccc14;
    border-radius: 10px;

    @media screen and (max-width: 768px) {
        margin: 0;
        width: auto;
    }
`;

const List = styled.ul`
    padding: 0;
`;

const ListItem = styled.li`
    list-style: none;
    padding: 0;
`;

const Description = styled.p`
    margin-bottom: 2rem;
`;

const BuiltWith = styled.p`
    text-decoration: underline;
`;

const ProjectLink = styled.a`
    margin: .5rem;
`;

const ProjectLinkIcon = styled.img`
    width: 30px;
    transition: 300ms;

    &:hover {
        transform: scale(1.1);
    }
`;

const Project = (props) => {
    const {
        builtWith,
        name,
        images,
        description,
        repo,
        url,
        gitHubIcon,
        folderIcon,
        fade
    } = props;

    const { PUBLIC_URL } = process.env;

    const renderListItems = () => {
        return builtWith.map((listItem, idx) => {
            return <ListItem key={idx}>{ listItem }</ListItem>
        });
    }

    const renderImages = () => {
        return images.map((image, idx) => {
            return <ProjectImage key={ idx } src={ PUBLIC_URL + image } alt="" />
        })
    }

    return (
        <Fade 
            left={fade === 'left' ? true : false} 
            right={fade === 'right' ? true : false}
        > 
            <ProjectContainer>
                <h1>{ name }</h1>
                <ProjectBody>
                    <ProjectImageContainer>
                        {
                            renderImages()
                        }
                    </ProjectImageContainer>
                    <ProjectInfo>
                        <Description>{ description }</Description>
                        <BuiltWith>Built with</BuiltWith>
                        <List>
                            { renderListItems() }
                        </List>
                        <ProjectLink href={ repo }>
                            <ProjectLinkIcon src={ PUBLIC_URL + gitHubIcon } alt="" />
                        </ProjectLink>
                        {
                            url &&  <ProjectLink href={ url }>
                                        <ProjectLinkIcon src={ PUBLIC_URL + folderIcon } alt="" />
                                    </ProjectLink>
                        }
                    </ProjectInfo>
                </ProjectBody>
            </ProjectContainer>
        </Fade>
    );
}

export default Project;
