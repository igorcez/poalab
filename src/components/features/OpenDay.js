import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";

import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-10 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`
]);

const DecoratorBlob = styled(SvgDotPattern)(() => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const Steps = tw.ul`mt-12`;
const Step = tw.li`mt-8 flex flex-col md:flex-row items-center md:items-start`;
const StepNumber = tw.div`font-semibold text-4xl text-gray-400`;
const StepText = tw.div`mt-3 md:mt-0 md:ml-6`;
const StepDescription = tw.p`  leading-loose text-sm text-gray-600 font-medium`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 text-xl text-gray-600  max-w-sm`;


export default ({
  heading = (
    <>
      Open day (em breve)
    </>
  ),
  imageSrc = "https://i.ibb.co/PGKLnGL/Open-days-positive-for-practices-768x768.jpg",
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageDecoratorBlob = false,
  textOnLeft = true,
  steps = null,
  decoratorBlobCss = null,
}) => {

  const defaultSteps = [
    {
      description: "Não existe custo para acessar o lab ou utilizar as máquinas; Não existe reserva de equipamento;"
    },
    {
      description: "Os usuários são convidados a cadastrar os seus projetos no sistema de projetos do PoaLab para compartilhamento com a comunidade; "
    },
    {
      description: "Os usuários devem trazer os insumos necessários para os projetos;"
    },
    {
      description: "Temos material, equipamento, pessoal e disposição para atender a todos, independente de conhecimento;"
    },
    {
      description: "Em 2 anos de funcionamento a faixa etária de usuários variou entre 5 e 76 anos... queremos avançar nos dois limites;"
    },
    {
      description: "O objetivo do lab é o de disseminar conhecimento -- se você não tem nenhum conhecimento sobre fabricação digital, o lab foi feito pra você."
    }
  ];

  if (!steps) steps = defaultSteps;

  return (
    <Container>
        <HeadingInfoContainer>
          <HeadingTitle>Open day (em breve)</HeadingTitle>
          <HeadingDescription>
          Sextas feiras das 14h às 18h
          </HeadingDescription>
        </HeadingInfoContainer>

      <TwoColumn>
        <ImageColumn>
          <Image src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} />
          {imageDecoratorBlob && <DecoratorBlob css={decoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
        <TextContent>
        <Subheading>Os open days são um dos requisitos para a existência de um fab lab.
Nestes dias, a comunidade externa têm a possibilidade de conhecer
as ferramentas existentes no lab e aprender sobre fabricação digital.

Cada fab lab possui suas regras de open day.

Essas são as regras do PoaLab:</Subheading>
        <Steps>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepNumber>{(index + 1).toString().padStart(2, '0')}</StepNumber>
              <StepText>
                <StepDescription>{step.description}</StepDescription>
              </StepText>
            </Step>
          ))}
        </Steps>
        </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
