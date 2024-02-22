import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './logo_no_bg.png',
  fullDecal: './logo_no_bg.png',
});

export default state;