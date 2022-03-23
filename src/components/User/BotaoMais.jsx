import React from 'react'

function BotaoMais() {

  const task = () => {
    return (
      window.location.href = "https://projeto-portiflio.netlify.app/task"
  )}

  return (
  <button className='button40px' onClick={task}>
    <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="15.5" y1="1.5" x2="15.5" y2="20.5" stroke="url(#paint0_linear_2_92)" stroke-width="3" stroke-linecap="round"/>
      <g filter="url(#filter0_d_2_92)">
      <line x1="5.5" y1="11.5" x2="24.5" y2="11.5" stroke="url(#paint1_linear_2_92)" stroke-width="3" stroke-linecap="round"/>
      </g>
      <defs>
      <filter id="filter0_d_2_92" x="0" y="8" width="30" height="11" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="2"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_92"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_92" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_2_92" x1="14" y1="11" x2="13" y2="11" gradientUnits="userSpaceOnUse">
      <stop/>
      <stop offset="1" stop-color="#674F4F"/>
      </linearGradient>
      <linearGradient id="paint1_linear_2_92" x1="15" y1="15" x2="14" y2="5.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#422D3B"/>
      <stop offset="1" stop-color="#424114"/>
      </linearGradient>
      </defs>
    </svg>
  </button>
  )
}

export default BotaoMais