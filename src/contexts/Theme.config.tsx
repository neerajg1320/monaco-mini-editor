import { Color } from "../models/Color.models";
import { Theme, ThemeType } from "./Theme.model";

export const THEMES: Record<ThemeType, Theme>= {
    dark:{
        '--primary': Color.GREEN,
        '--background': Color.LIGHT_BLACK,
        '--secondary': Color.BLACK,
        '--white': Color.WHITE,
        '--text': Color.WHITE,
        '--navBackground': Color.BLACK
    },
    normal:{
        '--primary': Color.LIGHT_BLUE,
        '--secondary': Color.BLACK,
        '--background': Color.BLUE,
        '--white': Color.WHITE,
        '--text': Color.WHITE,
        '--navBackground': Color.BLUE
    },
    light:{
        '--primary': Color.LIGHT_BLUE,
        '--secondary': Color.BLACK,
        '--background': Color.WHITE,
        '--white': Color.WHITE,
        '--text': Color.BLACK,
        '--navBackground': Color.BLACK
    }
}