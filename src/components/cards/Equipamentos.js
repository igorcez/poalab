import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; 
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
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

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

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
                    "https://i.ibb.co/R2XfHZJ/wanhao.png",
                title: "2 Impressoras 3D Wanhao Duplicator 4",
                descricao: "2 extrusores/filamento 1.75mm/camada entre 0.1 e 0.5mm/área: 225mm x 145mm x 150mm/base aquecida"
            },
            {
                imageSrc:
                    "https://i.ibb.co/ys55mGd/printrbot.png",
                title: "1 Impressora 3D printrbot simple metal",
                descricao: "Filamento de 1.75mm/resolução de camada entre 0.1 e 0.5mm/área de trabalho: 152mm x 152mm x 152mm/                                  ",
            },
            {
                imageSrc:
                    "https://i.ibb.co/mGmn1T9/cma6040.png",
                title: "1 Cortadora Laser CMA6040",
                descricao: "Área de corte de 60cm x 40cm/potência do laser: 70-80W/Espessura do corte: 0-25mm para acrílico/Precisão < 0.01mm"
            },
            {
                imageSrc:
                    "https://i.ibb.co/rQrwgYL/plottersaga.png",
                title: "1 Plotter de Recorte SAGA 720i",
                descricao: "Largura máxima da mídia: 72cm/Largura máxima de corte: 62cm/laser point/velocidade: 600mm/s /precisão de repetição: 0.082mm"
            },
            {
                imageSrc:
                    "https://i.ibb.co/ykM14ms/fresa1.png",
                title: "1 Fresadora MTC-200×250 (não operacional)",
                descricao: "Área: 200mm x 250mm/eixo z: 150mm/refrigeração do motor a ar/velocidade de rotação programável",
            },
            {
                imageSrc:
                    "https://i.ibb.co/GF9nwG9/filabot.png",
                title: "1 Extrusora de filamento modelo filabot wee ",
                descricao: "Bico de extrusão de 1.75mm/adequado para ABS e PLA/taxa de extrusão entre 13 e 51 cm/minuto",
            },
            {
                imageSrc:
                    "https://i.ibb.co/D4GSFC8/plotterhp.png",
                title: "1 Plotter de Impressão HP T520 (não operacional)",
                descricao: "Alimentação por rolo ou folha/largura de impressão: 61cm/espessura: até 11.8 milésimos de polegada/resolução de impressão: 2400 x 1200 dpi",
            },
            {
                imageSrc:
                    "https://i.ibb.co/JC768K3/bancada.png",
                title: "Bancada de Eletrônica",
                descricao: "Osciloscópio/fonte de bancada/estação de solda/componentes eletrônicos diversos",
            }
        ],
    }
}) => {
    const tabsKeys = Object.keys(tabs);
    const [activeTab, setActiveTab] = useState(tabsKeys[0]);

    return (
        <Container>

            <HeadingInfoContainer>
                <HeadingTitle>Equipamentos</HeadingTitle>
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
                                <Card className="group" initial="rest" whileHover="hover" animate="rest">
                                    <CardImageContainer imageSrc={card.imageSrc}>
                                        <CardHoverOverlay
                                            variants={{
                                                hover: {
                                                    opacity: 1,
                                                    height: "auto"
                                                },
                                                rest: {
                                                    opacity: 0,
                                                    height: 0
                                                }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <CardButton>{card.descricao}</CardButton>
                                        </CardHoverOverlay>
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