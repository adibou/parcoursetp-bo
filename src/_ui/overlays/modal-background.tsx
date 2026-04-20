import colors from "@ui/tokens/colors";
import { css } from "@emotion/react";
import ReactDOM from "react-dom";

type PropsType = {
  children: any;
  onClick: () => void;
};
export default function ModalBackground({ children, onClick }: PropsType) {

  return ReactDOM.createPortal(
    <>
        <div css={backgroundStyle} onClick={onClick} />
        {children}
    </>,
    document.getElementById("modalRoot")!
  );
}

const backgroundStyle = css({
    position: 'fixed',
    zIndex: 40,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.neutral600,
    opacity: 0.5
});
