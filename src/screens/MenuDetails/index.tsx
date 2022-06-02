import React, { useState, useEffect, useCallback, FC } from "react";
import { TouchableOpacity } from "react-native";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  withTiming,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import {
  CaretLeft,
  Heart,
  ClockCounterClockwise,
  Star,
} from "phosphor-react-native";

import { MenuDTO } from "../../dtos/MenuDTO";

import { useCustomTheme } from "../../hooks/useCustomTheme";

import { Skeletons } from "./Skeletons";
import { InfoCard } from "../../components/Cards/InfoCard";
import { AccompanimentTypeCard } from "../../components/Cards/AcompanimentTypeCard";
import { AccompanimentSelectCard } from "../../components/Cards/AccompanimentSelectCard";
import { Button } from "../../components/Buttons/Button";

import {
  Container,
  Header,
  SubHeader,
  Content,
  Image,
  Title,
  InfoWrapper,
  InfoContent,
  Price,
  AboutWrapper,
  About,
  Description,
  Accompaniment,
  ButtonContainer,
} from "./styles";

import LogoSVG from "../../assets/logo-white.svg";

interface Params {
  details: MenuDTO;
}

export const MenuDetails: FC = () => {
  const { goBack } = useNavigation();
  const route = useRoute();
  const { details } = route.params as Params;
  const { theme } = useCustomTheme();
  const { colors } = useTheme();

  const [isFavorite, setIsfavorite] = useState<boolean>(false);
  const [toggleSalad, setToggleSalad] = useState<boolean>(true);
  const [toggleFriesPotato, setToggleFriesPotato] = useState<boolean>(true);
  const [toggleSoutePotato, setToggleSoutePotato] = useState<boolean>(false);

  function handleGoBack() {
    goBack();
  }

  function toggleFavoriteMenu() {
    setIsfavorite(!isFavorite);
  }

  function toggleAccompanimentSalad() {
    setToggleSalad(!toggleSalad);
  }

  function toggleAccompanimentFriesPotato() {
    if (toggleSoutePotato) {
      setToggleSoutePotato(false);
      setToggleFriesPotato(true);
    } else {
      setToggleFriesPotato(!toggleFriesPotato);
    }
  }

  function toggleAccompanimentSoutePotato() {
    setToggleSoutePotato(!toggleSoutePotato);

    if (toggleFriesPotato) {
      setToggleFriesPotato(false);
      setToggleSoutePotato(true);
    } else {
      setToggleSoutePotato(!toggleSoutePotato);
    }
  }

  const headerHeight = useSharedValue<number>(260);
  const imageWidth = useSharedValue<number>(256);
  const imageHeight = useSharedValue<number>(256);
  const contentTranslateY = useSharedValue<number>(0);
  const accompanimentSelecteCardOpacity = useSharedValue<number>(1);
  const accompanimentTypeCardTranslateY = useSharedValue<number>(0);

  const headerHeightStyle = useAnimatedStyle(() => {
    return {
      height: headerHeight.value,
    };
  });

  const contentHeightStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: contentTranslateY.value,
        },
      ],
    };
  });

  const imageOpacityStyle = useAnimatedStyle(() => {
    return {
      width: imageWidth.value,
      height: imageHeight.value,
    };
  });

  const accompanimentSelecteCardStyle = useAnimatedStyle(() => {
    return {
      opacity: accompanimentSelecteCardOpacity.value,
    };
  });

  const accompanimentTypeCardStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: accompanimentTypeCardTranslateY.value,
        },
      ],
    };
  });

  const scrollHandler = useAnimatedScrollHandler(
    {
      onScroll: (event) => {
        "worklet";

        if (event.contentOffset.y === 0) {
          headerHeight.value = withTiming(260);
          imageWidth.value = withTiming(252, { duration: 400 });
          imageHeight.value = withTiming(252, { duration: 400 });
          contentTranslateY.value = withTiming(0, { duration: 200 });
        }

        if (event.contentOffset.y > 0.1) {
          headerHeight.value = withTiming(130);
          imageWidth.value = withTiming(0, { duration: 400 });
          imageHeight.value = withTiming(0, { duration: 400 });
          contentTranslateY.value = withTiming(0, { duration: 200 });
        }

        if (event.contentOffset.y > 260) {
          accompanimentTypeCardTranslateY.value = withTiming(-112, {
            duration: 400,
          });
          accompanimentSelecteCardOpacity.value = withTiming(0, {
            duration: 400,
          });
        } else {
          accompanimentTypeCardTranslateY.value = withTiming(0, {
            duration: 400,
          });
          accompanimentSelecteCardOpacity.value = withTiming(1, {
            duration: 400,
          });
        }
      },
    },
    []
  );

  useFocusEffect(
    useCallback(() => {
      NavigationBar.setBackgroundColorAsync(colors.navigation_bar.color);
      NavigationBar.setBorderColorAsync(colors.navigation_bar.color);
      NavigationBar.setButtonStyleAsync(
        theme.title === "light" ? "dark" : "light"
      );
    }, [theme.title])
  );

  return (
    <Container>
      <StatusBar style="light" />

      <Header style={headerHeightStyle}>
        <SubHeader>
          <TouchableOpacity activeOpacity={0.7} onPress={handleGoBack}>
            <CaretLeft
              color={colors.screens.menu_details.secondary_text}
              size={28}
            />
          </TouchableOpacity>

          <LogoSVG width={106} height={96} />

          <TouchableOpacity activeOpacity={0.7} onPress={toggleFavoriteMenu}>
            <Heart
              color={colors.screens.menu_details.secondary_text}
              size={28}
              weight={isFavorite ? "fill" : "regular"}
            />
          </TouchableOpacity>
        </SubHeader>

        <Image style={imageOpacityStyle} source={{ uri: details.image }} />
      </Header>

      <Content
        contentContainerStyle={{
          marginTop: 140,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        style={contentHeightStyle}
      >
        <Title>{details.name}</Title>

        <InfoWrapper>
          <InfoContent>
            <InfoCard
              icon={ClockCounterClockwise}
              title={`${String(details.preparing)}m`}
            />
            <InfoCard icon={Star} title={details.stars} />
          </InfoContent>

          <Price>{details.price}</Price>
        </InfoWrapper>

        <AboutWrapper>
          <About>Sobre</About>

          <Description>{details.about}</Description>
        </AboutWrapper>

        {details.type === "plate" && (
          <Accompaniment>
            <AccompanimentTypeCard
              title="Vai uma salada?"
              subtitle="Assinale caso queira"
            />

            <AccompanimentSelectCard
              imageUri="https://i.imgur.com/aXz5DLM.png"
              title="Salada"
              menu="Alface, tomate e cebola"
              isActive={toggleSalad}
              onPress={toggleAccompanimentSalad}
              style={accompanimentSelecteCardStyle}
            />

            <Animated.View
              style={[{ marginBottom: 120 }, accompanimentTypeCardStyle]}
            >
              <AccompanimentTypeCard
                title="Escolha sua batata"
                subtitle="Assinale caso queira"
              />

              <AccompanimentSelectCard
                imageUri="https://i.imgur.com/Vhkol3Q.png"
                title="Fritas"
                isActive={toggleFriesPotato}
                onPress={toggleAccompanimentFriesPotato}
              />

              <AccompanimentSelectCard
                imageUri="https://i.imgur.com/RtRaWUh.png"
                title="Souté"
                isActive={toggleSoutePotato}
                onPress={toggleAccompanimentSoutePotato}
              />
            </Animated.View>
          </Accompaniment>
        )}
      </Content>

      <ButtonContainer>
        <Button title="Adicionar ao pedido" />
      </ButtonContainer>
    </Container>
  );
};
