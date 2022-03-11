import { Box, BoxProps, LinkProps } from "@chakra-ui/react";

type NavTextProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
} & Partial<BoxProps> &
  Partial<LinkProps>;

export const NavText = ({ children, onClick, ...restProps }: NavTextProps) => {
  return (
    <Box
      as="a"
      d="flex"
      mr={[0, 3]}
      px={[3, 6]}
      fontFamily="'Montserrat', sans-serif"
      fontWeight={500}
      fontSize={{ base: "25px", md: "14px", lg: "15px", xl: "15px" }}
      lineHeight={{ base: "30.48px", md: "18.29px" }}
      color={{ base: "#000000", md: "#FFFFFF" }}
      onClick={onClick}
      alignItems="center"
      py={{ base: 2, md: 1 }}
      my={{ base: 6, md: 0 }}
      _hover={{ textDecor: "underline", cursor: "pointer" }}
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      {...restProps}
    >
      {children}
    </Box>
  );
};
