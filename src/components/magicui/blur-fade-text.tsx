
import { BlurFade } from "./blur-fade";

interface BlurFadeTextProps extends Omit<React.ComponentProps<typeof BlurFade>, "children"> {
  text: string;
  yOffset?: number;
}

export function BlurFadeText({
  text,
  yOffset = 10,
  ...props
}: BlurFadeTextProps) {
  return (
    <BlurFade
      offset={yOffset}
      {...props}
    >
      {text}
    </BlurFade>
  );
}
