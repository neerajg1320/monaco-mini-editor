import { Color } from "../models/Color.models";
import { Theme, ThemeType } from "./Theme.model";

export const THEMES: Record<ThemeType, Theme>= {
    dark:{
        '--primary': Color.GREEN,
        '--secondary': Color.BLACK,
        '--background': Color.LIGHT_BLACK,
        '--white': Color.WHITE,
        '--text': Color.WHITE,
        '--navBackground': Color.BLACK,
        '--formBackground': Color.LIGHT_BLACK,
        '--formTextColor': Color.WHITE,
        '--buttonBackground': Color.GREEN
    },
    normal:{
        '--primary': Color.LIGHT_BLUE,
        '--secondary': Color.BLACK,
        '--background': Color.BLUE,
        '--white': Color.WHITE,
        '--text': Color.WHITE,
        '--navBackground': Color.BLUE,
        '--formBackground': Color.LIGHT_BLUE,
        '--formTextColor': Color.BLACK,
        '--buttonBackground': Color.BLUE
    },
    light:{
        '--primary': Color.LIGHT_BLUE,
        '--secondary': Color.BLACK,
        '--background': Color.WHITE,
        '--white': Color.WHITE,
        '--text': Color.BLACK,
        '--navBackground': Color.BLACK,
        '--formBackground': Color.LIGHT_BLUE,
        '--formTextColor': Color.BLACK,
        '--buttonBackground': Color.BLACK
    }
}