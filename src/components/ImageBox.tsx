import { Box } from "@chakra-ui/react";
import Image from "next/image";

interface ImageBoxProps {
  image: string;
  width: number;
  height: number;
  alt: string;
  priority?: boolean;
}

const ImageBox = ({ image, height, width, alt, priority }: ImageBoxProps) => {
  return (
    <Box marginY={8} marginX="auto">
      <Image src={image} height={height} width={width} alt={alt} priority={priority} />
    </Box>
  );
};

export default ImageBox;
