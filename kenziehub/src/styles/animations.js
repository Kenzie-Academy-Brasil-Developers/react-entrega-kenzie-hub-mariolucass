import {
  bounceInLeft,
  bounceInRight,
  bounceInDown,
  bounceInUp,
} from "react-animations";

import { keyframes } from "styled-components";

export const bounceLeft = keyframes`${bounceInLeft}`;
export const bounceRight = keyframes`${bounceInRight}`;
export const bounceDown = keyframes`${bounceInDown}`;
export const bounceUp = keyframes`${bounceInUp}`;
