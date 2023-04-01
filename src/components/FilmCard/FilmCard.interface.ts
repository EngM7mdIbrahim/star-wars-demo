import { TablerIcon } from "@tabler/icons";
import { ReactNode } from "react";

export interface BadgeCardProps {
  image: string;
  title: string;
  country: string;
  description: string;
  badges: {
    emoji: ReactNode;
    label: string;
  }[];
}