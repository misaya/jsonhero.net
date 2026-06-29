import { IconComponent } from "~/useColumnView";
import { Body } from "../Primitives/Body";
import { Title } from "../Primitives/Title";

export type HomeGridFeatureItemProps = {
  icon: IconComponent;
  title: string;
  className?: string;
  titleClassName?: string;
  children: React.ReactNode;
};

export function HomeGridFeatureItem(props: HomeGridFeatureItemProps) {
  return (
    <div
      className={`flex min-h-[210px] flex-col rounded-sm border border-white/10 bg-white/[0.045] p-6 transition hover:border-lime-300/30 hover:bg-white/[0.065] ${props.className ?? ""}`}
    >
      <props.icon className="mb-4 h-10 min-h-[40px] w-10 text-lime-200" />
      <Title className={props.titleClassName}>{props.title}</Title>
      {props.children}
    </div>
  );
}
