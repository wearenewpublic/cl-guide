import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useLiveUrl } from './util/liveurl';
import { screens } from './screen';
import { BrowserScreen } from './screen/browser';
import React from 'react';

export default function App() {
  const url = useLiveUrl();
  const {screenKey, path} = parseUrl(url);

  console.log('App', {screenKey, path})

  const screen = getScreen(screenKey);
  return React.createElement(screen.component, {path});
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function parseUrl(url) {
  const parsedUrl = new URL(url);
  const parts = parsedUrl.pathname.split('/').filter(x => x);
  return {screenKey: parts[0], part: parts.slice(1)}
}

function getScreen(screenKey) {
  if (screens[screenKey]) {
    return screens[screenKey];
  } else {
    return screens.browser;
  }
}
