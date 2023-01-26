import React from 'react';
import { ReactNode } from "react";
import './styles.scss';
export declare function isIntersectionObserverSupport(): boolean;
export interface Image {
    imageUrl: string;
    alt?: string;
}
type OnSliderLoadCallback = () => void;
interface Props {
    firstImage: Image;
    ComponentBefore: ReactNode;
    ComponentAfter: ReactNode;
    secondImage: Image;
    currentPercentPosition?: number;
    className?: string;
    withResizeFeel?: boolean;
    onReady?: OnSliderLoadCallback;
    onVisible?: () => void;
    onChangePercentPosition?: (newPosition: number) => void;
    feelsOnlyTheDelimiter?: boolean;
    delimiterIconStyles?: React.CSSProperties;
    delimiterColor?: string;
}
export default function BeforeAfterSlider({ firstImage, secondImage, className, ComponentAfter, ComponentBefore, withResizeFeel, currentPercentPosition, onVisible, onReady, onChangePercentPosition, delimiterIconStyles, feelsOnlyTheDelimiter, delimiterColor, }: Props): JSX.Element;
export {};
