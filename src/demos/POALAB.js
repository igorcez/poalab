import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Inicio from "components/hero/Inicio.js";
import Features from "components/features/Features.js";
import OpenDay from "components/features/OpenDay.js";

import Espaco from "components/testimonials/Espaco.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Calendario from "components/cards/Calendario.js";
import LinksUteis from "components/cards/LinksUteis.js";
import Equipamentos from "components/cards/Equipamentos.js";

export default () => ( 
  <AnimationRevealPage>
    <Inicio />
    <Features />
    <LinksUteis />
    <Espaco />
    <Equipamentos />
    <OpenDay />
    <Calendario />
    <Footer />
  </AnimationRevealPage>
);