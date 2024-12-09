import HeaderSectionOne from "./components/sectionOne/SectionOneWrapper";
import HeaderSectionTwo from "./components/sectionTwo/SectionTwoWrapper";
import OnSmallHeader from "./components/smallScreenHeader/OnSmallHeader";
import { ResponsiveHeaderContext } from "../../../contexts/ResponsiveHeaderContext";
import { useContext } from "react";

const HeaderContainer = () => {
  const responsiveHeaderContext = useContext(ResponsiveHeaderContext);
  if (!responsiveHeaderContext) return null;
  const { isResponsiveHeaderActive, toggleResponsiveHeader } =
    responsiveHeaderContext;
  return (
    <>
      <HeaderSectionOne />
      <HeaderSectionTwo
        isResponsiveHeaderActive={isResponsiveHeaderActive}
        toggleResponsiveHeader={toggleResponsiveHeader}
      />
      <OnSmallHeader
        isResponsiveHeaderActive={isResponsiveHeaderActive}
        toggleResponsiveHeader={toggleResponsiveHeader}
      />
    </>
  );
};

export default HeaderContainer;
