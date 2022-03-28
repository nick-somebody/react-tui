import React from 'react'
import ReactDOM from 'react-dom'
import "tuicss"
import "../lib/style.css"
import TuiDivider from '../components/TuiDivider'
import { Background } from '../types/enums'
import TuiBackground from '../components/TuiBackground'
import Bios from './Bios'
import Buttons from './Buttons'
import Charts from './Charts';
import Codes from './Codes'
import Forecast from './Forecast';
import Inputs from './Inputs';
import Modals from './Modals';
import Navigation from './Navigation';
import Layout from './Layout'
import TuiGrid from "../composites/TuiGrid"

ReactDOM.render(
  <React.StrictMode>
    <TuiBackground color={Background.BlueWhite}>
      <TuiGrid.Container>
        <h1 className="center" aria-label="React TUI">
          ===========react-tui===========
        </h1>
        <Buttons />
        <TuiDivider />
        <Codes />
        <TuiDivider />
        <Charts />
        <TuiDivider />
        <Inputs />
        <TuiDivider />
        <h2 className="center">Pages</h2>
        <h3>Bios</h3>
        <Bios />
        <Modals />
        <h3>Forecast</h3>
        <Forecast />
        <Navigation />
        <Layout />

      </TuiGrid.Container>
    </TuiBackground>
  </React.StrictMode>,
  document.getElementById('root')
)
