import styled from "styled-components/native";

const CardBox = styled.View`
  background-color: #1e1e1e;
  padding: 16px;
  border-radius: 12px;
  margin: 8px 0;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const Content = styled.Text`
  font-size: 14px;
  color: #ccc;
`;

export default function StyledCard({ title, content }) {
  return (
    <CardBox>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </CardBox>
  );
}