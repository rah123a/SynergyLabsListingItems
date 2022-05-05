import { useEffect, useState } from "react";
import styled from "styled-components";
const ListItems = () => {
  const LI = styled.li`
    text-align: center;
    font-size: 19px;
    text-decoration: none;
    background-color: ${(props) =>
      props.flag
        ? props.idx % 6 === 0
          ? "orange"
          : props.idx % 2 === 0
          ? "blue"
          : props.idx % 3 === 0
          ? "green"
          : "white"
        : `white`};
  `;
  const UL = styled.ul`
    list-style-type: none;
  `;

  const Header = styled.h3`
    text-align: center;
  `;
  const [items, setItems] = useState([1, 2]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => {
      setItems([...items, items.length + 1]);
    }, 1000);

    if (items.length === 100) {
      clearTimeout(interval);
      setFlag(true);
    }
  });
  return (
    <div className="container">
      <Header>List Items - {items.length}</Header>
      <UL>
        {items.length &&
          items.map((item) => (
            <LI flag={flag} idx={item}>
              {item}
            </LI>
          ))}
      </UL>
    </div>
  );
};
export default ListItems;
