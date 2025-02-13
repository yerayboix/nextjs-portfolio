import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function SoftSkillsGrid() {
  return (
    <BentoGrid className="mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Resolución de problemas",
    description: "Me gusta resolver y diagnosticar problemas y los abordo con una mente analítica.",
    icon: <IconClipboardCopy className="w-4 text-neutral-500" />,
  },
  {
    title: "Adaptabilidad",
    description: "Me gusta estar en constante aprendizaje y adaptación a nuevos retos.",
    icon: <IconFileBroken className="w-4 text-neutral-500" />,
  },
  {
    title: "Comunicación efectiva",
    description: "Me considero una persona comunicativa, que sabe escuchar y transmitir ideas de manera clara y efectiva.",
    icon: <IconSignature className="w-4 text-neutral-500" />,
  },
  {
    title: "Trabajo en equipo",
    description: "Me gusta formar parte de equipos de trabajo donde se compartan ideas y se fomente el trabajo en equipo.",
    icon: <IconTableColumn className="w-4 text-neutral-500" />,
  },
  
];
