import { useState } from "react";
import "./App.css";

interface TitleProps {
  children: React.ReactNode;
  size: "small" | "large";
}

interface ParagraphProps {
  color: string;
}

const Paragraph = ({ children, size, color }: TitleProps & ParagraphProps) => {
  return (
    <h1
      style={{ fontSize: size === "small" ? "1.5rem" : "3.0rem", color: color }}
    >
      {children}
    </h1>
  );
};

const Title = ({ children, size = "large" }: TitleProps) => {
  return (
    <h1 style={{ fontSize: size === "small" ? "1.5rem" : "3.0rem" }}>
      {children}
    </h1>
  );
};

const user = {
  id: 1,
  name: "john doe",
  age: 30,
  isAdmin: true,
  birthDate: new Date("1980-01-01"),
};

type UserAttributes = typeof user;

function List<ItemType>({
  items,
  render,
}: {
  items: ItemType[];
  render: (item: ItemType, index: number) => React.ReactNode;
}) {
  return (
    <div>
      {items.map((item, index) => {
        return render(item, index);
      })}
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0);

  const items = [
    { id: 1, name: "Bernardo" },
    { id: 2, name: "bruno" },
  ];

  return (
    <div className="App">
      <Title size="large">
        <span>
          Hello <b>World</b>
        </span>
      </Title>

      <Paragraph size="large" color="red">
        Paragrafo
      </Paragraph>

      <List
        items={items}
        render={(item, index) => {
          if (item.id === 1) {
            return <p key={index}>{item.name}</p>;
          }

          return <h3 key={index}>{item.name}</h3>;
        }}
      ></List>
    </div>
  );
}

export default App;
