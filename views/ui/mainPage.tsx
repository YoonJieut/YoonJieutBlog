"use client";
import { Flex, Image, Text, View, Icon } from "@aws-amplify/ui-react";

export default function Example() {
  return (
    <Flex
      width="1280px"
      height="832px"
      overflow="hidden"
      position="relative"
      backgroundColor="rgba(28,28,28,1)"
    >
      <Flex left;transform:rotate(0deg);border-radius:3px;background-color:rgba(217,217,217,1)
        gap="37px"
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="calc(50% - 77.57px - -350.07px)"
        left="-3px"
        transformOrigin="top left"
        transform="rotate(-1.16deg)"
      >
        <Image
          width="102.77px"
          height="139.99px"
          display="block"
          shrink="0"
          position="relative"
          objectFit="contain"
          alt=""
        />
        <Text
          fontFamily="Inter"
          fontSize="90px"
          fontWeight="400"
          color="rgba(205,205,205,1)"
          lineHeight="108.92045593261719px"
          textAlign="left"
          display="block"
          shrink="0"
          position="relative"
          whiteSpace="pre-wrap"
        >
          관리자 특별 커맨드
        </Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        position="absolute"
        top="-59px"
        left="1011.6px"
        transformOrigin="top left"
        transform="rotate(26.15deg)"
      >
        <View
          width="513.32px"
          height="526.57px"
          display="block"
          shrink="0"
          position="relative"
          borderRadius="7px"
          backgroundColor="rgba(255,255,255,1)"
        />
        <Flex width="288.71px" height="170.35px" shrink="0" position="relative">
          <View
            width="228.56px"
            height="140.82px"
            display="block"
            position="absolute"
            top="335px"
            left="36px"
            transformOrigin="top left"
            transform="rotate(0deg)"
            borderRadius="3px"
            backgroundColor="rgba(217,217,217,1)"
          />
          <View
            width="56.21px"
            height="56.21px"
            display="block"
            position="absolute"
            top="335px"
            left="295px"
            transformOrigin="top left"
            transform="rotate(0deg)"
          >
            <Icon
              width="56.21px"
              height="56.21px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 56.210565984249115,
                height: 56.210565984249115,
              }}
              paths={[
                {
                  d: "M42 21 C42 32.598 32.598 42 21 42 C9.40202 42 0 32.598 0 21 C0 9.40202 9.40202 0 21 0 C32.598 0 42 9.40202 42 21 Z",
                  fill: "rgba(217,217,217,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              position="absolute"
              top="335px"
              left="295px"
              transformOrigin="top left"
              transform="rotate(0deg)"
            />
            <Icon
              width="28.11px"
              height="28.11px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 28.105282992124557,
                height: 28.105282992124557,
              }}
              paths={[
                {
                  d: "M 19.95 4.2 L 17.85 4.2 L 17.85 13.65 L 4.2 13.65 L 4.2 15.75 C 4.2 16.327500012516975 4.672499987483024 16.8 5.25 16.8 L 16.8 16.8 L 21 21 L 21 5.25 C 21 4.672499987483024 20.527500012516974 4.2 19.95 4.2 Z M 15.75 10.5 L 15.75 1.05 C 15.75 0.4724999874830246 15.277500012516976 0 14.700000000000001 0 L 1.05 0 C 0.4724999874830246 0 0 0.4724999874830246 0 1.05 L 0 15.75 L 4.2 11.55 L 14.700000000000001 11.55 C 15.277500012516976 11.55 15.75 11.077500012516975 15.75 10.5 Z",
                  fillRule: "nonzero",
                },
                {
                  d: "M19.95 4.2 L17.85 4.2 L17.85 13.65 L4.2 13.65 L4.2 15.75 C4.2 16.3275 4.6725 16.8 5.25 16.8 L16.8 16.8 L21 21 L21 5.25 C21 4.6725 20.5275 4.2 19.95 4.2 Z M15.75 10.5 L15.75 1.05 C15.75 0.4725 15.2775 0 14.7 0 L1.05 0 C0.4725 0 0 0.4725 0 1.05 L0 15.75 L4.2 11.55 L14.7 11.55 C15.2775 11.55 15.75 11.0775 15.75 10.5 Z",
                  fill: "rgba(28,28,28,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              position="absolute"
              top="615.54%"
              bottom="-565.54%"
              left="542.6%"
              right="-492.6%"
              transformOrigin="top left"
              transform="rotate(0deg)"
            />
          </View>
        </Flex>
      </Flex>
    </Flex>
  );
}
