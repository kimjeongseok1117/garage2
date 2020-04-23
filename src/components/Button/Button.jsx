/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Button = ({ onClick }) => {
  /* Jscript code */

  return (
    /* JSK */

    <butoon css={ButtonStyle} onClick={onClick}>
      Button
    </butoon>
  );
};

//CSS
const ButtonStyle = css`
  border: 1px solid red;

  &:hover {
    /* 마우스 올라갔을때 스타일 */
    border: 2px solid blue;
  }

  div {
    color: white;
  }
`;
//레이아웃 관련된거 위에 마진, 패딩, 포지션 나머지 값 밑에
// 자기를 뜻하는게 & 그 앞에 있는애에 나오는 선택자들(태그등등) +

export default Button;
