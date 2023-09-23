import { Color } from "../models/Color.models";

export type ThemeType = 'dark' | 'normal' | 'light';

export interface Theme {
    '--primary': Color,
    '--secondary': Color,
    '--background': Color,
    '--white': Color,
    '--text': Color,
    '--navBackground': Color,
    '--formBackground': Color,
    '--formTextColor': Color,
    '--buttonBackground': Color
    // '--'
}