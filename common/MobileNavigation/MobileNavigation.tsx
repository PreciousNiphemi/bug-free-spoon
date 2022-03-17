import React from "react";
// import {
//   Box,
//   Text,
//   Modal,
//   ModalProps,
//   ModalHeader,
//   ModalContent,
//   ModalOverlay,
//   ModalCloseButton,
//   useColorModeValue,
// } from "@chakra-ui/react";

// export type PopupProps = {
//   isOpen: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
// } & ModalProps;

// export const MobileNavigationPopUp = ({
//   isOpen,
//   onClose,
//   children,
//   ...restModalProps
// }: PopupProps) => {
//   const bg = useColorModeValue("orange.80", "gray.800");

//   return (
//     <>
//       <Modal
//         size="md"
//         position="relative"
//         isCentered
//         isOpen={isOpen}
//         onClose={onClose}
//         {...restModalProps}
//       >
//         <ModalOverlay bg="rgba(0,0,0,0.85)" />
//         <ModalContent
//           px={4}
//           pb={6}
//           pt={8}
//           shadow="lg"
//           bgColor={bg}
//           borderRadius="2xl"
//           minW={{ md: "400px" }}
//           maxW={{ base: "90%", md: "400px" }}
//           boxShadow="0px 40px 80px -1px rgba(31, 91, 242, 0.27)"
//         >
//           <ModalCloseButton onClose={onClose} />

//           {children}
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// const PopupHeader = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <ModalHeader p={0}>
//       <Text textStyle="h2" textAlign="left" pb={0}>
//         {children}
//       </Text>
//     </ModalHeader>
//   );
// };

// const PopupDescription = ({ children }: { children: React.ReactNode }) => {
//   return <Text textStyle="p">{children}</Text>;
// };

// const PopupBody = ({ children }: { children: React.ReactNode }) => {
//   return <Box my={4}>{children}</Box>;
// };

// MobileNavigationPopUp.Body = PopupBody;
// MobileNavigationPopUp.Header = PopupHeader;
// MobileNavigationPopUp.Description = PopupDescription;
