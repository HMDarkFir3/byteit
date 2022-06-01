import React, { FC } from "react";

import {
  Container,
  Wrapper,
  Title,
  Demand,
  ImageWrapper,
  Border,
  Image,
  GroupMembers,
  GroupMembersLabel,
} from "./styles";

interface Props {
  data: {
    title: string;
    demand_counts: string;

    members: {
      id: string;
      name: string;
      image: string;
      border_color: string;
    }[];
  };
}

export const GroupCard: FC<Props> = (props) => {
  const { title, demand_counts, members } = props.data;

  const totalMembers = members.length - 2;

  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <Demand>Pedidos: {demand_counts}</Demand>
      </Wrapper>

      <ImageWrapper>
        {members.map(
          (member, index) =>
            index <= 1 && (
              <Border key={member.id} borderColor={member.border_color}>
                <Image source={{ uri: member.image }} />
              </Border>
            )
        )}
        <GroupMembers>
          <GroupMembersLabel>{totalMembers}</GroupMembersLabel>
        </GroupMembers>
      </ImageWrapper>
    </Container>
  );
};
