import React from 'react';

import AddTodo from '../containers/AddTodo/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList/VisibleTodoList';

import { Footer } from '../presentational/Footer/Footer';
import { Loader } from './../presentational/Loader/Loader';
import { NavBar } from './../presentational/NavBar/NavBar';
import { MyAppBar } from '../presentational/AppBar/AppBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';

import Styles from './WeatherApp.css';

injectTapEventPlugin();

export const WeatherApp = () => (
    <div>
      <MuiThemeProvider>
          <MyAppBar title="Weather" />
      </MuiThemeProvider>
      <NavBar title='Weather'/>
      <main className={Styles.main}>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <Loader />
      </main>
    </div>
);
