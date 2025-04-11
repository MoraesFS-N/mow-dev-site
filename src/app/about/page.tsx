"use client";
import HeaderTemplate from "@/components/HeaderTemplate";
import { Typewriter } from "react-simple-typewriter";

export default function AboutPage() {
  return (
    <div className="flex flex-col justify-center items-center h-full p-20 gap-20">
      <HeaderTemplate />

      <div className="flex justify-between items-center h-full ">
        <div className="flex flex-col justify-center items-start gap-2 w-2/3 h-full">
          <p className="p-description">
            <Typewriter
              words={[
                "Me chamo Moraes, sou desenvolvedor Fullstack, com quase 5 anos de experiência sólida no desenvolvimento de software, aliando meu conhecimento técnico a um forte compromisso com a criação de soluções inovadoras e eficientes. Bacharel em Sistemas de Informação pelo Instituto Federal Farroupilha, participei ativamente de eventos, projetos de pesquisa e extensão, consolidando uma base em engenharia de software e resolução de problemas complexos. Minha experiência abrange principalmente o  desenvolvimento web, através de integração com APIs e migração de sistemas legados, atualmente na empresa DB System.",
              ]}
              loop={1}
              cursor
              typeSpeed={10}
            />
          </p>
        </div>
        <div className="flex items-center"></div>
      </div>
    </div>
  );
}
