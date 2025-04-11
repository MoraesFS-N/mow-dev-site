import SocialButton from "@/components/SocialButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <div>
        <Image className="logo-animation" src="mow-dev-logo.svg" alt="Identidade visual Moraes Neto" width={154} height={144} />
      </div>
      <div>
        <p>moraes.dev</p>
      </div>

      <div>
        <p>Moraes Neto - Developer Fullstack</p>
      </div>

      <div className="flex row-auto align-center justify-center gap-2  ">
        <SocialButton direction="/about" label="Sobre" />
        <SocialButton direction="/experience" label="Experiência" />
        <SocialButton direction="/technologies" label="Tecnologias" />
        <SocialButton direction="/school" label="Escolaridade" />
        <SocialButton direction="/contact" label="Contatos" />
      </div>
    </div>
  );
}
