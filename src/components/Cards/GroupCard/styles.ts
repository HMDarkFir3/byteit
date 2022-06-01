import styled, { css } from "styled-components/native";

interface BorderProps {
  borderColor: string;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 104px;

  margin-bottom: 24px;
  padding: 24px;

  background-color: ${({ theme: { colors } }) =>
    colors.components.group_card.background};
  border-radius: 24px;
`;

export const Wrapper = styled.View`
  justify-content: space-between;

  height: 100%;
`;

export const Title = styled.Text`
  font-size: 20px;
  line-height: 30px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${colors.components.group_card.title};
  `}
`;

export const Demand = styled.Text`
  font-size: 16px;
  line-height: 20px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${colors.components.group_card.placeholder};
  `}
`;

export const ImageWrapper = styled.View`
  flex-direction: row;
`;

export const Border = styled.View<BorderProps>`
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  margin-left: -12px;

  border: 3px solid ${({ borderColor }) => borderColor};
  border-radius: 25px;
`;

export const Image = styled.Image`
  width: 37px;
  height: 37px;

  border-radius: 20px;
`;

export const GroupMembers = styled.View`
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  margin-left: -12px;

  background-color: ${({ theme: { colors } }) =>
    colors.components.group_card.group_members};
  border-radius: 20px;
`;

export const GroupMembersLabel = styled.Text`
  font-size: 16px;
  line-height: 20px;

  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${colors.components.group_card.group_member_label};
  `}
`;
