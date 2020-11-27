import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";


const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;


const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;


const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  tabs = {
    Starters: [
      {
        imageSrc:
          "https://i.ibb.co/HH03LNW/braile.png",
        title: "3D de Placas Braille",
        url: "https://cta-ifrs.github.io/Text2Braille3d/"
      },
      {
        imageSrc:
          "https://i.ibb.co/VjYfMRJ/thingiverse.png",
        title: "Thingiverse",
        url: "https://www.thingiverse.com/"
      },
      {
        imageSrc:
          "https://i.ibb.co/5RSMg7M/inst.png",
        title: "Instructables",
        url: "https://www.instructables.com/"
      },
      {
        imageSrc:
          "https://i.ibb.co/r2N7Sjh/opendesk.png",
        title: "opendesk",
        url: "https://www.opendesk.cc/"
      },
      {
        imageSrc:
          "https://i.ibb.co/Jdfx4Gz/fabacademy.png",
        title: "Fab academy",
        url: "http://fabacademy.org/"
      },
      {
        imageSrc:
          "https://i.ibb.co/ZNDsLG6/fabfoundation.png",
        title: "Fab foundation",
        url: "https://fabfoundation.org/"
      },
      {
        imageSrc:
          "https://i.ibb.co/8bFVkXR/labwahteverpng.png",
        title: "Fab city",
        url: "https://fab.city/"
      },
      {
        imageSrc:
          "https://i.ibb.co/F0jMCRD/tink.png",
        title: "Tinkercad",
        url: "https://www.tinkercad.com/"
      },
      {
        imageSrc:
          "https://i.ibb.co/CvnXX7L/lnkscape.png",
        title: "lnkscape",
        url: "https://inkscape.org/pt-br/"
      }
      ,
      {
        imageSrc:
          "https://i.ibb.co/1X3mpYQ/makercase.png",
        title: "MakerCase",
        url: "https://www.makercase.com/"
      }
      ,
      {
        imageSrc:
          "https://i.ibb.co/9VqHpvX/makercase.png",
        title: "Aprendizagem coletiva",
        url: "https://aprendizagemcriativa.org/pt-br"
      }
      ,
      {
        imageSrc:
          "https://i.ibb.co/5B9BnCy/makerfaire.png",
        title: "Maker Faire",
        url: "https://portoalegre.makerfaire.com/"
      }
    ]
  }
}) => {
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
        <HeadingInfoContainer>
          <HeadingTitle>Links úteis</HeadingTitle>
        </HeadingInfoContainer>

      <ContentWithPaddingXl>
        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer imageSrc={card.imageSrc}>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    <CardPrice>{card.price}</CardPrice>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};